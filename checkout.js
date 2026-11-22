function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Avval savatchaga mahsulot qo‘shing!');
    return;
  }

  document.getElementById('cartDrawer').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');

  const { subtotal, discount, delivery, total } = getCartTotals();
  const modal = document.getElementById('checkoutModal');
  const body = document.getElementById('checkoutModalBody');

  body.innerHTML = `
    <h2 style="margin-bottom:6px;">🛵 Buyurtmani rasmiylashtirish</h2>
    <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:20px;">Andijon shahri bo‘ylab tezkor yetkazib berish</p>
    <form onsubmit="submitOrder(event)">
      <div class="form-group">
        <label>Ismingiz</label>
        <input type="text" id="chkName" required value="${currentUser ? currentUser.name : ''}" placeholder="Ismingizni kiriting" />
      </div>
      <div class="form-group">
        <label>Telefon raqamingiz</label>
        <input type="tel" id="chkPhone" required value="${currentUser ? currentUser.phone : ''}" placeholder="+998 90 000 00 00" />
      </div>
      <div class="form-group">
        <label>Qabul qilish turi</label>
        <select id="chkType" onchange="toggleAddressField(this.value)">
          <option value="delivery">Kuryer orqali yetkazib berish (Andijon)</option>
          <option value="pickup">Restorandan olib ketish (Bobur shoh ko‘chasi, 45)</option>
        </select>
      </div>
      <div class="form-group" id="addressFieldGroup">
        <label>Aniq manzil (Ko‘cha, uy, mo‘ljal)</label>
        <input type="text" id="chkAddress" required placeholder="Masalan: Andijon, Bobur shoh ko‘chasi 12-uy" />
      </div>
      <div class="form-group">
        <label>To‘lov turi</label>
        <select id="chkPayment">
          <option value="cash">Naqd pul (Kuryerga)</option>
          <option value="click">Click / Payme orqali</option>
          <option value="card">Uzcard / Humo terminal</option>
        </select>
      </div>
      <div style="background:var(--bg-elevated); padding:14px; border-radius:12px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span>Mahsulotlar:</span><strong>${formatPrice(subtotal)}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span>Yetkazib berish:</span><strong>${formatPrice(delivery)}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:1.15rem; color:var(--primary-orange); border-top:1px solid var(--border-color); padding-top:8px;">
          <span>Jami:</span><strong>${formatPrice(total)}</strong>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Buyurtmani tasdiqlash</button>
    </form>
  `;

  modal.classList.add('active');
}

function toggleAddressField(val) {
  const grp = document.getElementById('addressFieldGroup');
  const inp = document.getElementById('chkAddress');
  if (val === 'pickup') {
    grp.style.display = 'none';
    inp.required = false;
  } else {
    grp.style.display = 'block';
    inp.required = true;
  }
}

function submitOrder(e) {
  e.preventDefault();
  const { total } = getCartTotals();
  const orderId = Math.floor(100000 + Math.random() * 900000);

  const newOrder = {
    id: orderId,
    date: new Date().toLocaleString('uz-UZ'),
    total,
    status: 'Tayyorlanmoqda 🔥'
  };

  orderHistory.unshift(newOrder);
  localStorage.setItem('bite_orders', JSON.stringify(orderHistory));

  // Savatchani tozalash
  cart = [];
  appliedPromo = '';
  saveCart();
  renderCart();

  const body = document.getElementById('checkoutModalBody');
  body.innerHTML = `
    <div style="text-align:center; padding:20px 0;">
      <div style="width:68px; height:68px; background:rgba(34,197,94,0.15); color:#22c55e; border-radius:50%; display:grid; place-items:center; font-size:2rem; margin:0 auto 16px;">
        <i class="fa-solid fa-check"></i>
      </div>
      <h2>Buyurtmangiz qabul qilindi!</h2>
      <p style="color:var(--text-muted); margin:8px 0 20px;">Buyurtma raqami: <strong>#${orderId}</strong></p>
      <div style="background:var(--bg-elevated); padding:16px; border-radius:14px; text-align:left; margin-bottom:20px;">
        <p style="margin-bottom:8px;">✅ <strong>1. Qabul qilindi</strong> — Andijon filiali</p>
        <p style="margin-bottom:8px; color:var(--primary-orange);">🔥 <strong>2. Oshxonada tayyorlanmoqda</strong> (10-15 min)</p>
        <p style="color:var(--text-muted);">🛵 <strong>3. Kuryer yo‘lga chiqadi</strong></p>
      </div>
      <button class="btn btn-primary btn-block" onclick="document.getElementById('checkoutModal').classList.remove('active')">Yopish</button>
    </div>
  `;
}