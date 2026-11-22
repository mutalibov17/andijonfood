const PRODUCTS = [
  {
    id: 1,
    category: "burgers",
    price: 38000,
    badge: "HIT",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    name: { uz: "BITE Double Cheeseburger", ru: "BITE Двойной Чизбургер", en: "BITE Double Cheeseburger" },
    desc: {
      uz: "2 ta shirali mol go‘shti kotleti, eritilgan Cheddar pishlog‘i, tuzlangan bodring, piyoz va maxsus BITE sousi.",
      ru: "2 сочные говяжьи котлеты, расплавленный сыр Чеддер, маринованные огурцы, лук и фирменный соус BITE.",
      en: "2 juicy beef patties, melted Cheddar cheese, pickles, onions, and signature BITE sauce."
    },
    ingredients: {
      uz: "Brioche bulochka, 2x mol go‘shti (240g), 2x Cheddar, aysberg salati, pomidor, BITE sous.",
      ru: "Булочка бриошь, 2x говядина (240г), 2x Чеддер, салат айсберг, томаты, соус BITE.",
      en: "Brioche bun, 2x beef patties (240g), 2x Cheddar, iceberg lettuce, tomato, BITE sauce."
    }
  },
  {
    id: 2,
    category: "burgers",
    price: 32000,
    badge: "CLASSIC",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Smoky BBQ Burger", ru: "Смоки Барбекю Бургер", en: "Smoky BBQ Burger" },
    desc: {
      uz: "Olovda pishgan mol go‘shti, qarsildoq piyoz halqalari, Cheddar va tutunli BBQ sousi.",
      ru: "Говяжья котлета на огне, хрустящие луковые кольца, Чеддер и дымный соус BBQ.",
      en: "Flame-grilled beef patty, crispy onion rings, Cheddar cheese, and smoky BBQ sauce."
    },
    ingredients: {
      uz: "Kunjutli bulochka, mol go‘shti (140g), Cheddar, piyoz halqalari, BBQ sous.",
      ru: "Булочка с кунжутом, говядина (140г), Чеддер, луковые кольца, соус BBQ.",
      en: "Sesame bun, beef patty (140g), Cheddar, onion rings, BBQ sauce."
    }
  },
  {
    id: 3,
    category: "lavash",
    price: 30000,
    badge: "TOP",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Tandoor Mol Go‘shtli Lavash", ru: "Тандыр Лаваш с Говядиной", en: "Tandoor Beef Lavash" },
    desc: {
      uz: "Yupqa tandir lavash xamirida qovurilgan mol go‘shti, qarsildoq fri, yangi pomidor-bodring va sarimsoqli sous.",
      ru: "Обжаренная говядина в тонком тандырном лаваше, хрустящий фри, свежие овощи и чесночный соус.",
      en: "Grilled beef wrapped in thin tandoor lavash with crispy fries, fresh veggies, and garlic sauce."
    },
    ingredients: {
      uz: "Tandir lavash, mol go‘shti (130g), kartoshka fri, pomidor, bodring, oq va qizil sous.",
      ru: "Тандырный лаваш, говядина (130г), картофель фри, томаты, огурцы, белый и красный соус.",
      en: "Tandoor lavash, beef (130g), french fries, tomatoes, cucumbers, white & red sauces."
    }
  },
  {
    id: 4,
    category: "lavash",
    price: 34000,
    badge: "CHEESE",
    image: "https://images.unsplash.com/photo-1644704170910-a0cdf183649b?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Pishloqli Tovuq Lavash", ru: "Сырный Лаваш с Курицей", en: "Cheesy Chicken Lavash" },
    desc: {
      uz: "Grilda pishgan tovuq filesi, mo‘l-ko‘l eritilgan pishloq, fri va maxsus qaymoqli sous.",
      ru: "Куриное филе на гриле, много расплавленного сыра, фри и нежный сливочный соус.",
      en: "Grilled chicken fillet, generous melted cheese, crispy fries, and creamy house sauce."
    },
    ingredients: {
      uz: "Pishloqli lavash, tovuq filesi, Mozzarella va Cheddar, fri, qaymoqli sous.",
      ru: "Сырный лаваш, куриное филе, Моцарелла и Чеддер, фри, сливочный соус.",
      en: "Cheese lavash, chicken fillet, Mozzarella & Cheddar, fries, creamy sauce."
    }
  },
  {
    id: 5,
    category: "pizza",
    price: 68000,
    badge: "32 CM",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Pepperoni Premium Pitsa", ru: "Пицца Пепперони Премиум", en: "Pepperoni Premium Pizza" },
    desc: {
      uz: "Halol mol go‘shtli dudlangan pepperoni kolbasalari, cho‘ziluvchan Mozzarella pishlog‘i va italyan tomat sousi.",
      ru: "Халяль пепперони из говядины, тянущаяся Моцарелла и фирменный итальянский томатный соус.",
      en: "Halal beef pepperoni slices, stretchy Mozzarella cheese, and Italian tomato sauce."
    },
    ingredients: {
      uz: "Yupqa italyan xamiri, Mozzarella (180g), halol pepperoni, tomat sousi, oregano.",
      ru: "Тонкое итальянское тесто, Моцарелла (180г), халяль пепперони, томатный соус, орегано.",
      en: "Thin Italian crust, Mozzarella (180g), halal pepperoni, tomato sauce, oregano."
    }
  },
  {
    id: 6,
    category: "pizza",
    price: 75000,
    badge: "CHEF",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
    name: { uz: "BITE House Go‘shtli Assorti", ru: "Пицца BITE House Мясное Ассорти", en: "BITE House Meat Feast Pizza" },
    desc: {
      uz: "Mol go‘shti, tovuq filesi, dudlangan kolbasa, qo‘ziqorin, zaytun va ikki hissa Mozzarella.",
      ru: "Говядина, куриное филе, копченая колбаса, шампиньоны, маслины и двойная Моцарелла.",
      en: "Beef, chicken fillet, smoked sausage, mushrooms, black olives, and double Mozzarella."
    },
    ingredients: {
      uz: "Xamir, mol go‘shti, tovuq, kolbasa, shampinyon, zaytun, Mozzarella, tomat sous.",
      ru: "Тесто, говядина, курица, колбаса, шампиньоны, маслины, Моцарелла, томатный соус.",
      en: "Dough, beef, chicken, sausage, mushrooms, olives, Mozzarella, tomato sauce."
    }
  },
  {
    id: 7,
    category: "hotdogs",
    price: 22000,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Royal Double Hot-Dog", ru: "Королевский Двойной Хот-Дог", en: "Royal Double Hot-Dog" },
    desc: {
      uz: "Yumshoq bulochkada ikkita halol sosiska, pishloq sousi, xantal, ketchup va qovurilgan piyoz.",
      ru: "Две халяль сосиски в мягкой булочке, сырный соус, горчица, кетчуп и жареный лук.",
      en: "Two halal sausages in a soft bun topped with cheese sauce, mustard, ketchup, and crispy onions."
    },
    ingredients: {
      uz: "Hot-dog bulochka, 2x halol sosiska, pishloq sousi, xantal, ketchup, tuzlangan bodring.",
      ru: "Булочка для хот-дога, 2x халяль сосиски, сырный соус, горчица, кетчуп, огурчики.",
      en: "Hot-dog bun, 2x halal sausages, cheese sauce, mustard, ketchup, pickles."
    }
  },
  {
    id: 8,
    category: "doner",
    price: 33000,
    badge: "HOT",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Turkish Beef Doner", ru: "Турецкий Донер с Говядиной", en: "Turkish Beef Doner" },
    desc: {
      uz: "Qarsildoq turk noni ichida sixda pishgan mol go‘shti, yangi sabzavotlar va maxsus turkcha sous.",
      ru: "Мясо на вертеле в хрустящей турецкой лепешке со свежими овощами и фирменным турецким соусом.",
      en: "Spit-roasted beef inside crispy Turkish flatbread with fresh vegetables and authentic Turkish sauce."
    },
    ingredients: {
      uz: "Turk noni, mol go‘shti doner (150g), pomidor, bodring, qizil piyoz, maxsus sous.",
      ru: "Турецкая лепешка, говядина донер (150г), томаты, огурцы, красный лук, фирменный соус.",
      en: "Turkish bread, beef doner (150g), tomato, cucumber, red onion, house sauce."
    }
  },
  {
    id: 9,
    category: "drinks-carbonated",
    price: 10000,
    badge: "COLD",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Coca-Cola 0.5L", ru: "Coca-Cola 0.5л", en: "Coca-Cola 0.5L" },
    desc: {
      uz: "Muzdek gazlangan klassik Coca-Cola ichimligi (0.5 litr).",
      ru: "Охлажденный классический газированный напиток Coca-Cola (0.5 л).",
      en: "Ice-cold classic carbonated Coca-Cola (0.5L bottle)."
    },
    ingredients: {
      uz: "Gazlangan suv, shakar, tabiiy aromatizatorlar, kofein.",
      ru: "Газированная вода, сахар, натуральные ароматизаторы, кофеин.",
      en: "Carbonated water, sugar, natural flavors, caffeine."
    }
  },
  {
    id: 10,
    category: "drinks-carbonated",
    price: 12000,
    badge: "FRESH",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Laym-Yalpizli Moxito 0.4L", ru: "Мохито Лайм-Мята 0.4л", en: "Lime-Mint Mojito 0.4L" },
    desc: {
      uz: "Yangi laym bo‘laklari, yalpiz barglari, muz va gazlangan suvdan tayyorlangan tetiklashtiruvchi ichimlik.",
      ru: "Освежающий напиток со свежим лаймом, листьями мяты, льдом и газированной водой.",
      en: "Refreshing sparkling drink crafted with fresh lime wedges, mint leaves, and ice."
    },
    ingredients: {
      uz: "Yangi laym, yalpiz, gazlangan suv, shakar siropi, muz.",
      ru: "Свежий лайм, мята, газированная вода, сахарный сироп, лед.",
      en: "Fresh lime, mint, sparkling water, cane syrup, ice."
    }
  },
  {
    id: 11,
    category: "drinks-non-carbonated",
    price: 11000,
    badge: "100% JUICE",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Tabiiy Apelsin Sharbati 0.4L", ru: "Натуральный Апельсиновый Сок 0.4л", en: "Fresh Orange Juice 0.4L" },
    desc: {
      uz: "Yangi siqilgan vitaminlarga boy tabiiy apelsin sharbati (gazsiz).",
      ru: "Свежевыжатый натуральный апельсиновый сок без газа.",
      en: "Freshly squeezed vitamin-rich natural orange juice (non-carbonated)."
    },
    ingredients: {
      uz: "100% tabiiy apelsin sharbati, shakar qo‘shilmagan.",
      ru: "100% натуральный апельсиновый сок, без добавления сахара.",
      en: "100% natural orange juice, no added sugar."
    }
  },
  {
    id: 12,
    category: "drinks-non-carbonated",
    price: 9000,
    badge: "ICED TEA",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
    name: { uz: "Shaftolili Muzdek Choy 0.5L", ru: "Холодный Чай Персик 0.5л", en: "Peach Iced Tea 0.5L" },
    desc: {
      uz: "Qora choy ekstrakti va pishgan shaftoli ta’miga ega salqin gazsiz ichimlik.",
      ru: "Освежающий негазированный напиток с экстрактом черного чая и вкусом спелого персика.",
      en: "Refreshing non-carbonated iced black tea infused with ripe peach flavor."
    },
    ingredients: {
      uz: "Tozalangan suv, qora choy ekstrakti, tabiiy shaftoli sharbati.",
      ru: "Очищенная вода, экстракт черного чая, натуральный персиковый сок.",
      en: "Purified water, black tea extract, natural peach juice."
    }
  }
];

let activeCategory = 'all';
let searchQuery = '';

function formatPrice(num) {
  return num.toLocaleString('en-US') + ' UZS';
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      p.name[currentLang].toLowerCase().includes(q) ||
      p.desc[currentLang].toLowerCase().includes(q) ||
      p.ingredients[currentLang].toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align:center; padding: 40px;">Hech narsa topilmadi / Ничего не найдено</p>`;
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-img-wrap" onclick="openProductModal(${product.id})">
        <span class="product-badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.name[currentLang]}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3 class="product-title" onclick="openProductModal(${product.id})">${product.name[currentLang]}</h3>
        <p class="product-desc">${product.desc[currentLang]}</p>
        <div class="product-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="btn-add-cart" onclick="addToCart(${product.id})">
            <i class="fa-solid fa-plus"></i>
            <span>${TRANSLATIONS[currentLang].add_to_cart}</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const content = document.getElementById('productModalContent');

  content.innerHTML = `
    <img src="${product.image}" alt="${product.name[currentLang]}" style="width:100%; height:240px; object-fit:cover; border-radius:16px; margin-bottom:18px;" />
    <span class="product-badge" style="position:static; display:inline-block; margin-bottom:10px;">${product.badge}</span>
    <h2 style="font-size:1.6rem; margin-bottom:10px;">${product.name[currentLang]}</h2>
    <p style="color:var(--text-muted); margin-bottom:14px;">${product.desc[currentLang]}</p>
    <div style="background:var(--bg-elevated); padding:14px; border-radius:12px; margin-bottom:20px;">
      <strong style="color:var(--primary-orange); display:block; margin-bottom:4px;">Tarkibi / Состав / Ingredients:</strong>
      <span style="font-size:0.9rem; color:#e4e4e7;">${product.ingredients[currentLang]}</span>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:1.4rem; font-weight:800; color:var(--primary-orange);">${formatPrice(product.price)}</span>
      <button class="btn btn-primary" onclick="addToCart(${product.id}); document.getElementById('productModal').classList.remove('active');">
        <i class="fa-solid fa-bag-shopping"></i> ${TRANSLATIONS[currentLang].add_to_cart}
      </button>
    </div>
  `;

  modal.classList.add('active');
}