let cart = JSON.parse(localStorage.getItem('bite_cart')) || [];
let appliedPromo = localStorage.getItem('bite_promo') || '';

const FREE_DELIVERY_THRESHOLD = 100000;
const BASE_DELIVERY_FEE = 15000;

function saveCart() {
  localStorage.setItem('bite_cart', JSON.stringify(cart));
  localStorage.setItem('bite_promo', appliedPromo);
}

function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  renderCart();

  const product = PRODUCTS.find(p => p.id === productId);
  showToast(`+1 ${product.name[currentLang]}`);
}

function updateQty(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}

function getCartTotals() {
  let subtotal = 0;
  let totalItems = 0;

  cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (product) {
      subtotal += product.price * item.qty;
      totalItems += item.qty;
    }
  });

  const discount = appliedPromo === 'BITE10' ? Math.round(subtotal * 0.1) : 0;
  const delivery = subtotal === 0 ? 0 : (subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : BASE_DELIVERY_FEE);
  const total = subtotal - discount + delivery;

  return { subtotal, discount, delivery, total, totalItems };
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const badge = document.getElementById('cartBadge');
  const { subtotal, discount, delivery, total, totalItems } = getCartTotals();

  if (badge) badge.textContent = totalItems;

  // Bepul yetkazish progress bari
  const progressFill = document.getElementById('freeDeliveryProgress');
  const progressText = document.getElementById('freeDeliveryText');
  const pct = Math.min((subtotal / FREE_DELIVERY_THRESHOLD) * 100, 100);
  if (progressFill) progressFill.style.width = `${pct}%`;

  if (progressText) {
    if (subtotal >= FREE_DELIVERY_THRESHOLD) {
      progressText.innerHTML = `<span style="color:#22c55e; font-weight:700;">🎉 Tabriklaymiz! Yetkazib berish BEPUL!</span>`;
    } else {
      const rem = FREE_DELIVERY_THRESHOLD - subtotal;
      progressText.textContent = `Bepul yetkazishgacha yana ${formatPrice(rem)} qoldi`;
    }
  }

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:40px;">${TRANSLATIONS[currentLang].empty_cart}</p>`;
  } else {
    container.innerHTML = cart.map(item => {
      const p = PRODUCTS.find(prod => prod.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <img src="${p.image}" alt="${p.name[currentLang]}" />
          <div class="cart-item-info">
            <h4>${p.name[currentLang]}</h4>
            <span>${formatPrice(p.price * item.qty)}</span>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${p.id}, -1)">-</button>
            <strong>${item.qty}</strong>
            <button class="qty-btn" onclick="updateQty(${p.id}, 1)">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
  document.getElementById('cartDiscount').textContent = `-${formatPrice(discount)}`;
  document.getElementById('cartDelivery').textContent = delivery === 0 && subtotal > 0 ? '0 UZS (BEPUL)' : formatPrice(delivery);
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  const code = input.value.trim().toUpperCase();

  if (code === 'BITE10') {
    appliedPromo = 'BITE10';
    saveCart();
    renderCart();
    showToast('✅ BITE10 promokodi qo‘llanildi (-10%)!');
  } else {
    showToast('❌ Noto‘g‘ri promokod! (BITE10 dan foydalaning)');
  }
}