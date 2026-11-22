function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Boshlang'ich til va menyuni yuklash
  setLanguage(currentLang);
  renderProducts();
  renderCart();
  updateAuthUI();

  // Til tugmalari
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Kategoriya filtrlari
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Qidiruv
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Mobil hamburger menyu
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Savatcha ochish / yopish
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');

  document.getElementById('openCartBtn').addEventListener('click', () => {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
  });

  const closeCart = () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  };

  document.getElementById('closeCartBtn').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Promokod qo'llash va nusxa olish
  document.getElementById('applyPromoBtn').addEventListener('click', applyPromoCode);

  document.querySelectorAll('.btn-copy-promo[data-code]').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.code;
      navigator.clipboard?.writeText(code);
      document.getElementById('promoCodeInput').value = code;
      showToast(`📋 ${code} nusxalandi!`);
    });
  });

  // Modallar
  document.getElementById('authModalBtn').addEventListener('click', openAuthModal);
  document.getElementById('proceedCheckoutBtn').addEventListener('click', openCheckoutModal);

  document.getElementById('closeProductModal').addEventListener('click', () => {
    document.getElementById('productModal').classList.remove('active');
  });
  document.getElementById('closeAuthModal').addEventListener('click', () => {
    document.getElementById('authModal').classList.remove('active');
  });
  document.getElementById('closeCheckoutModal').addEventListener('click', () => {
    document.getElementById('checkoutModal').classList.remove('active');
  });
});