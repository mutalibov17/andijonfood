let currentUser = JSON.parse(localStorage.getItem('bite_user')) || null;
let orderHistory = JSON.parse(localStorage.getItem('bite_orders')) || [];

function updateAuthUI() {
  const label = document.getElementById('authBtnLabel');
  if (!label) return;
  if (currentUser) {
    label.textContent = currentUser.name.split(' ')[0];
  } else {
    label.textContent = TRANSLATIONS[currentLang].nav_login;
  }
}

function openAuthModal() {
  const modal = document.getElementById('authModal');
  const body = document.getElementById('authModalBody');

  if (currentUser) {
    body.innerHTML = `
      <h2 style="margin-bottom:8px;">👤 ${currentUser.name}</h2>
      <p style="color:var(--text-muted); margin-bottom:20px;">📞 ${currentUser.phone}</p>
      <h3 style="font-size:1.1rem; margin-bottom:12px;">Buyurtmalar tarixi (${orderHistory.length})</h3>
      <div style="display:grid; gap:10px; max-height:220px; overflow-y:auto; margin-bottom:20px;">
        ${orderHistory.length === 0
          ? '<p style="color:var(--text-muted); font-size:0.9rem;">Hali buyurtmalar mavjud emas.</p>'
          : orderHistory.map(o => `
            <div style="background:var(--bg-elevated); padding:12px; border-radius:12px; font-size:0.88rem;">
              <div style="display:flex; justify-content:space-between;">
                <strong>#${o.id}</strong>
                <span style="color:#22c55e;">${o.status}</span>
              </div>
              <div style="color:var(--text-muted); margin-top:4px;">${o.date} — <strong>${formatPrice(o.total)}</strong></div>
            </div>
          `).join('')}
      </div>
      <button class="btn btn-outline btn-block" onclick="logoutUser()">Chiqish / Выйти</button>
    `;
  } else {
    renderAuthForms('login');
  }

  modal.classList.add('active');
}

function renderAuthForms(mode) {
  const body = document.getElementById('authModalBody');
  body.innerHTML = `
    <div class="auth-tabs">
      <button class="auth-tab ${mode === 'login' ? 'active' : ''}" onclick="renderAuthForms('login')">Kirish</button>
      <button class="auth-tab ${mode === 'register' ? 'active' : ''}" onclick="renderAuthForms('register')">Ro‘yxatdan o‘tish</button>
    </div>
    <form id="authForm" onsubmit="handleAuthSubmit(event, '${mode}')">
      ${mode === 'register' ? `
        <div class="form-group">
          <label>Ism va Familiya</label>
          <input type="text" id="authName" required placeholder="Masalan: Jasurbek Karimov" />
        </div>
      ` : ''}
      <div class="form-group">
        <label>Telefon raqam</label>
        <input type="tel" id="authPhone" required placeholder="+998 90 123 45 67" />
      </div>
      <div class="form-group">
        <label>Parol</label>
        <input type="password" id="authPass" required placeholder="••••••••" />
      </div>
      <button type="submit" class="btn btn-primary btn-block">
        ${mode === 'login' ? 'Tizimga kirish' : 'Ro‘yxatdan o‘tish'}
      </button>
    </form>
  `;
}

function handleAuthSubmit(e, mode) {
  e.preventDefault();
  const phone = document.getElementById('authPhone').value.trim();
  const name = mode === 'register'
    ? document.getElementById('authName').value.trim()
    : 'Bite Mijoz';

  currentUser = { name, phone };
  localStorage.setItem('bite_user', JSON.stringify(currentUser));
  updateAuthUI();
  document.getElementById('authModal').classList.remove('active');
  showToast(`Xush kelibsiz, ${currentUser.name}!`);
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('bite_user');
  updateAuthUI();
  document.getElementById('authModal').classList.remove('active');
  showToast('Hisobdan chiqdingiz');
}