/* ========================================================
   AURA & ÉLAN - JAVASCRIPT APPLICATION CORE
   ======================================================== */

// --- 1. PRODUCT CATALOG DATA ---
const PRODUCTS = [
  {
    id: 'prod-dress-01',
    name: 'Emerald Satin Bias Midi Dress',
    brand: 'ÉLAN Atelier',
    category: 'clothing',
    subcategory: 'Dresses',
    price: 4990,
    originalPrice: 6990,
    rating: 4.8,
    reviews: 142,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80'],
    description: 'Cut on the bias for a liquid drape, featuring a cowl neckline and delicate crisscross back straps. 100% Japanese Satin Viscose.',
    variants: ['XS', 'S', 'M', 'L (Out of Stock)', 'XL'],
    returnEligible: true,
    returnDays: 15,
    sizeChart: { XS: { chest: 33, waist: 25 }, S: { chest: 35, waist: 27 }, M: { chest: 37, waist: 29 }, L: { chest: 39, waist: 31 } }
  },
  {
    id: 'prod-shirt-01',
    name: 'Mulberry Silk Tailored Blouse',
    brand: 'AURA Studio',
    category: 'clothing',
    subcategory: 'Shirts & Blouses',
    price: 3490,
    originalPrice: 4490,
    rating: 4.9,
    reviews: 88,
    images: ['https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80'],
    description: 'Tailored from 19-momme pure mulberry silk with hidden mother-of-pearl buttons and crisp French cuffs.',
    variants: ['S', 'M', 'L'],
    returnEligible: true,
    returnDays: 15,
    sizeChart: { S: { chest: 35, waist: 28 }, M: { chest: 38, waist: 31 }, L: { chest: 41, waist: 34 } }
  },
  {
    id: 'prod-trouser-01',
    name: 'Wide-Leg Pleated Wool-Blend Trousers',
    brand: 'AURA Studio',
    category: 'clothing',
    subcategory: 'Jeans & Trousers',
    price: 3890,
    originalPrice: 4990,
    rating: 4.7,
    reviews: 64,
    images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'],
    description: 'High-waisted tailored trousers featuring double front knife pleats and floor-skimming wide-leg drape in warm oatmeal beige.',
    variants: ['26 (XS)', '28 (S)', '30 (M)', '32 (L)'],
    returnEligible: true,
    returnDays: 15
  },
  {
    id: 'prod-acc-bag-01',
    name: 'Sienna Structured Calfskin Satchel',
    brand: 'Maison ÉLAN',
    category: 'accessories',
    subcategory: 'Handbags',
    price: 6490,
    originalPrice: 8990,
    rating: 4.9,
    reviews: 77,
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'],
    description: 'Supple full-grain Italian leather in warm caramel cognac with brushed brass hardware and magnetic lock closure.',
    variants: ['Cognac Caramel', 'Noir Black', 'Ivory Cream'],
    returnEligible: true,
    returnDays: 15
  },
  {
    id: 'prod-acc-earrings-01',
    name: '18K Gold Vermeil Baroque Pearl Drops',
    brand: 'AURA Fine Jewelry',
    category: 'accessories',
    subcategory: 'Jewelry',
    price: 2490,
    originalPrice: 3290,
    rating: 4.9,
    reviews: 165,
    images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'],
    description: 'Natural freshwater baroque pearls suspended from sculptural hammered 18K gold vermeil huggies. Hypoallergenic.',
    variants: ['18K Yellow Gold', 'Rhodium Silver'],
    returnEligible: true,
    returnDays: 7
  },
  {
    id: 'prod-beauty-lip-01',
    name: 'Velvet Cloud Cashmere Matte Lipstick',
    brand: 'ÉLAN Beauté',
    category: 'beauty',
    subcategory: 'Lipsticks',
    price: 1490,
    originalPrice: 1890,
    rating: 4.9,
    reviews: 215,
    images: ['https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'],
    description: 'Whipped mousse formula with intense pigment and soft-focus blur finish. Enriched with hyaluronic spheres.',
    variants: ['01 Royal Crimson', '02 Spiced Nude', '03 Mauve Cashmere', '04 Deep Plum Berry'],
    undertones: ['warm', 'cool', 'neutral'],
    returnEligible: false,
    returnNotes: 'Non-returnable personal care cosmetic once outer security foil is broken.'
  },
  {
    id: 'prod-beauty-foundation-01',
    name: 'Luminous Veil Serum Foundation SPF 30',
    brand: 'ÉLAN Beauté',
    category: 'beauty',
    subcategory: 'Foundation',
    price: 2490,
    originalPrice: 2990,
    rating: 4.8,
    reviews: 184,
    images: ['https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=800&q=80'],
    description: 'Breathable skin-mimicking serum foundation with Niacinamide and squalane for radiant medium buildable coverage.',
    variants: ['110 Fair Warm', '120 Light Neutral', '210 Medium Warm Honey', '220 Medium Golden Olive', '310 Tan Warm', '320 Deep Espresso'],
    undertones: ['warm', 'cool', 'neutral', 'olive'],
    returnEligible: false,
    returnNotes: 'Non-returnable cosmetic item once security seal is peeled.'
  }
];

// --- 2. GLOBAL STATE ---
let cart = [];
let wishlist = ['prod-dress-01', 'prod-beauty-lip-01'];
let activeVoucher = null;
let isAdminMode = false;
let activeCategoryFilter = 'all';
let activeUndertoneFilter = 'all';

// Seed Orders with Verified Milestones
let orders = [
  {
    id: 'ord-seed-001',
    orderNumber: 'AE-89421',
    date: '20 Oct 2026',
    customer: 'Priya Sharma',
    total: 7453,
    status: 'shipped',
    expectedDelivery: '24 Oct 2026',
    expectedWindow: '2:00 PM - 5:00 PM',
    courier: 'BlueDart Air Express',
    trackingNumber: 'BLUEDART-84910284',
    otp: '7482',
    items: [
      { name: 'Emerald Satin Bias Midi Dress', variant: 'M', price: 4990, img: PRODUCTS[0].images[0] },
      { name: '18K Gold Vermeil Baroque Pearl Drops', variant: '18K Yellow Gold', price: 2490, img: PRODUCTS[4].images[0] }
    ],
    milestones: [
      { title: 'Order Placed & Verified', time: '20 Oct, 10:30 AM', desc: 'Payment authorized; inventory reserved.', done: true },
      { title: 'Order Confirmed', time: '20 Oct, 02:15 PM', desc: 'Boutique inventory verified.', done: true },
      { title: 'Preparing for Shipment', time: '21 Oct, 09:00 AM', desc: 'Garments steamed & packaged in luxury box.', done: true },
      { title: 'Shipped via BlueDart Air Express', time: '21 Oct, 04:15 PM', desc: 'Package handed to national air courier.', done: true },
      { title: 'Reached Nearest Hub (South Mumbai)', time: '23 Oct, 08:45 AM', desc: 'Package arrived at South Mumbai Central Sorting Facility.', done: true, current: true },
      { title: 'Out for Delivery (Window: 2-5 PM)', time: 'Scheduled 24 Oct', desc: 'Delivery courier assigned. Have OTP ready.', done: false },
      { title: 'Delivered (OTP Verified Handover)', time: 'Pending', desc: 'Safe delivery confirmed via digital OTP.', done: false }
    ]
  }
];

// --- 3. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderHomeTrending();
  renderCatalog();
  renderCompleteLook();
  renderOrders();
  renderWishlist();
  setupAdminOptions();
  updateHeaderBadges();

  document.getElementById('toggle-admin-btn').addEventListener('click', () => {
    isAdminMode = !isAdminMode;
    document.getElementById('toggle-admin-btn').textContent = isAdminMode ? 'Admin Mode ON' : 'Switch to Admin Mode';
    document.getElementById('nav-admin-link').style.display = isAdminMode ? 'inline-block' : 'none';
    if (isAdminMode) switchTab('admin');
  });
});

// --- 4. VIEW ROUTER ---
function switchTab(tabId) {
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  const targetPanel = document.getElementById(`view-${tabId}`);
  if (targetPanel) targetPanel.classList.add('active');

  const navBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.textContent.toLowerCase().includes(tabId));
  if (navBtn) navBtn.classList.add('active');

  if (tabId === 'clothing' || tabId === 'accessories' || tabId === 'beauty') {
    document.getElementById('view-catalog').classList.add('active');
    setCatalogCategory(tabId);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 5. RENDER FUNCTIONS ---
function renderHomeTrending() {
  const container = document.getElementById('home-trending-grid');
  container.innerHTML = PRODUCTS.slice(0, 4).map(p => createProductCardHTML(p)).join('');
}

function renderCatalog() {
  const container = document.getElementById('catalog-products-grid');
  const search = document.getElementById('catalog-search')?.value.toLowerCase() || '';
  const maxPrice = Number(document.getElementById('price-slider')?.value || 12000);
  const sortBy = document.getElementById('catalog-sort')?.value || 'featured';

  let filtered = PRODUCTS.filter(p => {
    if (activeCategoryFilter !== 'all' && p.category !== activeCategoryFilter) return false;
    if (p.price > maxPrice) return false;
    if (search && !p.name.toLowerCase().includes(search) && !p.brand.toLowerCase().includes(search)) return false;
    if (activeUndertoneFilter !== 'all' && p.undertones && !p.undertones.includes(activeUndertoneFilter)) return false;
    return true;
  });

  if (sortBy === 'price-low') filtered.sort((a,b) => a.price - b.price);
  if (sortBy === 'price-high') filtered.sort((a,b) => b.price - a.price);
  if (sortBy === 'rating') filtered.sort((a,b) => b.rating - a.rating);

  container.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
}

function createProductCardHTML(p) {
  const isWish = wishlist.includes(p.id);
  return `
    <div class="product-card">
      <div class="card-img-wrap" onclick="openProductModal('${p.id}')">
        <img src="${p.images[0]}" alt="${p.name}">
        ${p.originalPrice ? `<span class="card-tag">${Math.round(((p.originalPrice-p.price)/p.originalPrice)*100)}% OFF</span>` : ''}
        <button class="card-wishlist" onclick="event.stopPropagation(); toggleWishlist('${p.id}')">
          ${isWish ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-body">
        <div>
          <span class="card-brand">${p.brand}</span>
          <h4 class="card-title" onclick="openProductModal('${p.id}')">${p.name}</h4>
          <span style="font-size:11px; color:#8C8275;">★ ${p.rating} (${p.reviews})</span>
        </div>
        <div class="card-price-row">
          <span class="card-price">₹${p.price.toLocaleString('en-IN')}</span>
          <button class="card-btn" onclick="addToCart('${p.id}', '${p.variants[0]}')">+ Bag</button>
        </div>
      </div>
    </div>
  `;
}

function renderCompleteLook() {
  const items = [PRODUCTS[0], PRODUCTS[3], PRODUCTS[4], PRODUCTS[5]];
  const container = document.getElementById('look-items-grid');
  container.innerHTML = items.map(p => `
    <div class="look-item-thumb" onclick="openProductModal('${p.id}')">
      <img src="${p.images[0]}" alt="${p.name}">
      <strong>${p.name}</strong>
      <span>₹${p.price.toLocaleString('en-IN')}</span>
    </div>
  `).join('');
}

function renderOrders() {
  const container = document.getElementById('orders-list-container');
  container.innerHTML = orders.map(ord => `
    <div style="background:white; border:1px solid #E8E2D9; border-radius:20px; padding:24px; margin-bottom:20px;">
      <div style="display:flex; justify-content:space-between; border-bottom:1px solid #F5F0EA; padding-bottom:12px; margin-bottom:14px;">
        <div>
          <strong style="font-size:18px; font-family:var(--font-serif);">Order #${ord.orderNumber}</strong>
          <span style="font-size:12px; color:#8C8275; margin-left:12px;">Placed on ${ord.date}</span>
        </div>
        <div>
          <button class="btn btn-primary" style="padding:6px 14px;" onclick="openTrackingModal('${ord.id}')">📍 Track Milestones</button>
        </div>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; background:#FAF6F2; padding:12px 18px; border-radius:12px; margin-bottom:16px;">
        <div>
          <span style="font-size:12px; font-weight:bold; color:#9E5B32;">Verified Checkpoint: ${ord.milestones.find(m=>m.current)?.title || 'Processing'}</span>
          <span style="display:block; font-size:11px; color:#6B655B;">Expected Delivery: ${ord.expectedDelivery} (${ord.expectedWindow})</span>
        </div>
        <div style="text-align:right;">
          <span style="font-size:10px; uppercase; color:#8C8275;">Delivery OTP:</span>
          <strong style="font-size:16px; font-family:monospace; color:#1A1918; display:block;">${ord.otp}</strong>
        </div>
      </div>
      <div>
        ${ord.items.map(item => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0;">
            <div style="display:flex; gap:12px; align-items:center;">
              <img src="${item.img}" style="width:40px; height:50px; border-radius:6px; object-fit:cover;">
              <div>
                <strong style="font-size:13px;">${item.name}</strong>
                <span style="display:block; font-size:11px; color:#8C8275;">Variant: ${item.variant}</span>
              </div>
            </div>
            <div>
              <span style="font-size:13px; font-weight:bold;">₹${item.price.toLocaleString('en-IN')}</span>
              <button class="link-btn" style="margin-left:12px; font-size:11px;" onclick="openReturnModal('${ord.id}', '${item.name}')">Return/Exchange</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderWishlist() {
  const container = document.getElementById('wishlist-grid');
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  if (items.length === 0) {
    container.innerHTML = '<p style="grid-column:span 4; text-align:center; padding:40px; color:#8C8275;">Your wishlist is currently empty.</p>';
  } else {
    container.innerHTML = items.map(p => createProductCardHTML(p)).join('');
  }
}

// --- 6. CART & VOUCHER ENGINE ---
function toggleCartDrawer(open) {
  document.getElementById('cart-drawer').classList.toggle('active', open);
  if (open) renderCartDrawer();
}

function addToCart(productId, variant) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  const existing = cart.find(c => c.id === productId && c.variant === variant);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: prod.id, name: prod.name, price: prod.price, img: prod.images[0], variant, qty: 1 });
  }
  updateHeaderBadges();
  toggleCartDrawer(true);
}

function updateCartQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  renderCartDrawer();
  updateHeaderBadges();
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  document.getElementById('cart-count-label').textContent = cart.reduce((s,i) => s + i.qty, 0);

  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding:50px 0; color:#8C8275;">Your bag is currently empty.</p>';
  } else {
    container.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div style="flex:1;">
          <strong style="font-size:13px; display:block;">${item.name}</strong>
          <span style="font-size:11px; color:#8C8275;">${item.variant}</span>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
            <div style="display:flex; gap:6px; align-items:center;">
              <button onclick="updateCartQty(${idx}, -1)" style="padding:2px 8px;">-</button>
              <span style="font-size:12px; font-weight:bold;">${item.qty}</span>
              <button onclick="updateCartQty(${idx}, 1)" style="padding:2px 8px;">+</button>
            </div>
            <strong>₹${(item.price * item.qty).toLocaleString('en-IN')}</strong>
          </div>
        </div>
      </div>
    `).join('');
  }

  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  let discount = 0;
  if (activeVoucher === 'AURA10') discount = Math.round(subtotal * 0.1);
  if (activeVoucher === 'LOOKCOMPLETE') discount = Math.round(subtotal * 0.15);

  const tax = Math.round((subtotal - discount) * 0.05);
  const grandTotal = Math.max(0, subtotal - discount) + tax;

  document.getElementById('cart-subtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('cart-tax').textContent = `₹${tax.toLocaleString('en-IN')}`;
  document.getElementById('cart-grandtotal').textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

  const discountRow = document.getElementById('cart-discount-row');
  if (discount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('cart-discount').textContent = `-₹${discount.toLocaleString('en-IN')}`;
  } else {
    discountRow.style.display = 'none';
  }
}

function applyVoucher() {
  const code = document.getElementById('voucher-input').value.trim().toUpperCase();
  if (code === 'AURA10' || code === 'LOOKCOMPLETE') {
    activeVoucher = code;
    alert(`Promotional voucher ${code} applied successfully!`);
    renderCartDrawer();
  } else {
    alert('Invalid or expired voucher code.');
  }
}

function addCompleteLookToCart() {
  const items = [PRODUCTS[0], PRODUCTS[3], PRODUCTS[4], PRODUCTS[5]];
  items.forEach(p => addToCart(p.id, p.variants[0]));
  activeVoucher = 'LOOKCOMPLETE';
  toggleCartDrawer(true);
}

function updateHeaderBadges() {
  document.getElementById('cart-badge').textContent = cart.reduce((s,i)=>s+i.qty, 0);
  document.getElementById('wishlist-badge').textContent = wishlist.length;
}

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
  } else {
    wishlist.push(id);
  }
  updateHeaderBadges();
  renderCatalog();
  renderWishlist();
}

// --- 7. SPECIAL FEATURE: PRIVATE MILESTONE TRACKING ---
function openTrackingModal(orderId) {
  const ord = orders.find(o => o.id === orderId) || orders[0];
  document.getElementById('track-order-num').textContent = `Order #${ord.orderNumber}`;
  document.getElementById('track-meta').textContent = `Placed on ${ord.date} • Carrier: ${ord.courier} (AWB: ${ord.trackingNumber})`;
  document.getElementById('track-delivery-date').textContent = ord.expectedDelivery;
  document.getElementById('track-delivery-window').textContent = `Estimated window: ${ord.expectedWindow}`;
  document.getElementById('track-otp').textContent = ord.otp;

  const timelineContainer = document.getElementById('milestones-timeline-list');
  timelineContainer.innerHTML = ord.milestones.map(m => `
    <div class="milestone-step ${m.current ? 'current' : m.done ? 'done' : 'pending'}">
      <div style="display:flex; justify-content:space-between;">
        <strong style="font-size:13px; color:${m.current ? '#9E5B32' : m.done ? '#1A1918' : '#8C8275'};">${m.title}</strong>
        <span style="font-size:11px; color:#8C8275;">${m.time}</span>
      </div>
      <p style="font-size:12px; color:#5C564E; margin-top:2px;">${m.desc}</p>
    </div>
  `).join('');

  document.getElementById('modal-tracking').classList.add('active');
}

// --- 8. AI FEATURES (TRY-ON, SIZING, SHADES) ---
let currentTryOnProductId = 'prod-dress-01';
function openTryOnModal(prodId) {
  currentTryOnProductId = prodId;
  const p = PRODUCTS.find(x => x.id === prodId) || PRODUCTS[0];
  document.getElementById('tryon-garment-img').src = p.images[0];
  document.getElementById('tryon-verdict-text').textContent = `Evaluating silhouette compatibility for ${p.name}...`;
  document.getElementById('modal-tryon').classList.add('active');
  runTryOnAnalysis();
}

function setTryOnModel(url) {
  document.getElementById('tryon-wearer-img').src = url;
  runTryOnAnalysis();
}

function handleTryOnUpload(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = ev => {
      document.getElementById('tryon-wearer-img').src = ev.target.result;
      runTryOnAnalysis();
    };
    reader.readAsDataURL(file);
  }
}

function runTryOnAnalysis() {
  const p = PRODUCTS.find(x => x.id === currentTryOnProductId) || PRODUCTS[0];
  const verdictEl = document.getElementById('tryon-verdict-text');
  verdictEl.textContent = 'Consulting Gemini 3.8 Flash fitting neural weights...';

  setTimeout(() => {
    verdictEl.innerHTML = `
      <strong>Flawless Fit Verdict (95% Harmony):</strong><br>
      The bias cut of the ${p.name} drapes smoothly over the natural torso curves without pulling. Warm champagne undertones complement the wearer's surface warmth. Pair with baroque pearl jewelry for evening vernissage elegance.
    `;
  }, 500);
}

function openSizeAssistantModal(prodId) {
  document.getElementById('modal-size').classList.add('active');
}

function handleSizeCalculation(e) {
  e.preventDefault();
  const chest = Number(document.getElementById('size-chest').value);
  let recSize = 'M';
  if (chest <= 33) recSize = 'XS';
  else if (chest <= 35) recSize = 'S';
  else if (chest <= 37) recSize = 'M';
  else recSize = 'L';

  const resCard = document.getElementById('size-result-card');
  resCard.style.display = 'block';
  resCard.innerHTML = `
    <div style="background:#FAF0E6; border:1px solid #E2CEBC; border-radius:14px; padding:16px; margin-top:16px;">
      <span style="font-size:10px; uppercase; font-weight:bold; color:#9E5B32;">Brand Specific Fit Recommendation</span>
      <h3 style="font-size:24px; color:#1A1918; margin:4px 0;">Recommended Size: ${recSize}</h3>
      <p style="font-size:12px; color:#5C564E;">Based on your ${chest}" bust measurement, Size ${recSize} provides a natural tailored drape in alignment with ÉLAN Atelier tolerances.</p>
    </div>
  `;
}

let activeShadeUndertone = 'warm';
let activeShadeDepth = 'medium';

function openShadeFinderModal(prodId) {
  document.getElementById('modal-shade').classList.add('active');
}

function setShadeUndertone(val) {
  activeShadeUndertone = val;
  document.querySelectorAll('.undertone-selector .chip-btn').forEach(b => b.classList.toggle('active', b.textContent.toLowerCase().includes(val)));
}

function setShadeDepth(val) {
  activeShadeDepth = val;
}

function calculateShadeMatches() {
  const res = document.getElementById('shade-match-results');
  res.style.display = 'block';
  res.innerHTML = `
    <div style="background:#FAF9F6; border:1px solid #E8E2D9; border-radius:14px; padding:16px; margin-top:16px;">
      <h4 style="font-size:14px; color:#9E5B32;">Best Match: 210 Medium Warm Honey</h4>
      <p style="font-size:12px; color:#5C564E; margin:4px 0 10px;">96% Colorimetric Match for ${activeShadeUndertone} undertones with ${activeShadeDepth} skin depth.</p>
      <button class="btn btn-primary" onclick="addToCart('prod-beauty-foundation-01', '210 Medium Warm Honey'); closeModal('modal-shade');">Add Matched Shade to Bag</button>
    </div>
  `;
}

// --- 9. PRODUCT DETAIL MODAL ---
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const content = document.getElementById('modal-product-content');
  content.innerHTML = `
    <div>
      <img src="${p.images[0]}" alt="${p.name}" class="pdp-modal-img">
    </div>
    <div class="pdp-info">
      <span style="font-size:11px; text-transform:uppercase; color:#8C8275; font-weight:bold;">${p.brand}</span>
      <h1>${p.name}</h1>
      <div class="pdp-price">₹${p.price.toLocaleString('en-IN')}</div>
      <p style="font-size:13px; color:#5C564E; margin-bottom:16px;">${p.description}</p>
      <label style="font-size:12px; font-weight:bold; display:block; margin-bottom:6px;">Available Variants:</label>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">
        ${p.variants.map(v => `<button class="chip-btn" onclick="addToCart('${p.id}', '${v}')">${v}</button>`).join('')}
      </div>
      <div class="pdp-actions">
        <button class="btn btn-primary full-width" onclick="addToCart('${p.id}', '${p.variants[0]}')">Add to Shopping Bag</button>
        <button class="btn btn-secondary" onclick="openTryOnModal('${p.id}')">Virtual Try-On</button>
      </div>
    </div>
  `;
  document.getElementById('modal-product').classList.add('active');
}

// --- 10. CHECKOUT & RETURNS ---
function openCheckoutModal() {
  toggleCartDrawer(false);
  document.getElementById('modal-checkout').classList.add('active');
}

function toggleGiftFields() {
  const checked = document.getElementById('chk-is-gift').checked;
  document.getElementById('gift-fields').style.display = checked ? 'block' : 'none';
}

function handlePlaceOrder(e) {
  e.preventDefault();
  const orderNum = 'AE-' + Math.floor(10000 + Math.random() * 90000);
  const newOrder = {
    id: 'ord-' + Date.now(),
    orderNumber: orderNum,
    date: 'Today',
    customer: document.getElementById('chk-name').value,
    total: 5490,
    status: 'confirmed',
    expectedDelivery: '25 Oct 2026',
    expectedWindow: '2:00 PM - 5:00 PM',
    courier: 'BlueDart Air Express',
    trackingNumber: 'BLUEDART-' + Math.floor(100000 + Math.random() * 900000),
    otp: String(Math.floor(1000 + Math.random() * 9000)),
    items: cart.length ? [...cart] : [{ name: 'Emerald Satin Bias Midi Dress', variant: 'M', price: 4990, img: PRODUCTS[0].images[0] }],
    milestones: [
      { title: 'Order Placed & Verified', time: 'Just now', desc: 'Secure payment captured. Order confirmed.', done: true, current: true },
      { title: 'Order Confirmed', time: 'Pending', desc: 'Boutique inventory assigned.', done: false },
      { title: 'Preparing for Shipment', time: 'Pending', desc: 'Signature luxury packaging inspection.', done: false },
      { title: 'Shipped via Air Express', time: 'Pending', desc: 'National air courier transit.', done: false },
      { title: 'Reached Nearest Hub', time: 'Pending', desc: 'Arrived at local sorting hub.', done: false },
      { title: 'Out for Delivery', time: 'Pending', desc: 'Courier out for doorstep handover.', done: false },
      { title: 'Delivered', time: 'Pending', desc: 'Safe delivery confirmed via OTP.', done: false }
    ]
  };

  orders.unshift(newOrder);
  cart = [];
  updateHeaderBadges();
  closeModal('modal-checkout');
  alert(`Order #${orderNum} confirmed successfully! Launching private milestone timeline.`);
  renderOrders();
  openTrackingModal(newOrder.id);
}

function openReturnModal(orderId, itemName) {
  document.getElementById('return-item-preview').innerHTML = `
    <strong>Item: ${itemName}</strong> (Order #${orders.find(o=>o.id===orderId)?.orderNumber || 'AE-89421'})
  `;
  document.getElementById('modal-return').classList.add('active');
}

function handleReturnSubmit(e) {
  e.preventDefault();
  alert('Return/Exchange request submitted. Our boutique concierge will schedule pickup within 24 hours.');
  closeModal('modal-return');
}

// --- 11. ADMIN SANDBOX ENGINE ---
function setupAdminOptions() {
  const orderSelect = document.getElementById('admin-order-select');
  if (orderSelect) {
    orderSelect.innerHTML = orders.map(o => `<option value="${o.id}">Order #${o.orderNumber} (${o.customer})</option>`).join('');
  }
  const dropSelect = document.getElementById('admin-price-drop-select');
  if (dropSelect) {
    dropSelect.innerHTML = PRODUCTS.map(p => `<option value="${p.id}">${p.name} (₹${p.price})</option>`).join('');
  }
}

function adminAdvanceMilestone() {
  const orderId = document.getElementById('admin-order-select').value;
  const targetMilestone = document.getElementById('admin-milestone-select').value;
  const facility = document.getElementById('admin-facility-input').value;

  const ord = orders.find(o => o.id === orderId);
  if (ord) {
    ord.milestones.forEach(m => {
      if (m.title.toUpperCase().includes(targetMilestone.replace('_',' '))) {
        m.done = true;
        m.current = true;
        m.desc = `Verified scan at ${facility}.`;
      }
    });
    alert(`Milestone checkpoint updated for Order #${ord.orderNumber}! Customer notified without GPS tracking.`);
    renderOrders();
  }
}

function adminTriggerPriceDrop() {
  const prodId = document.getElementById('admin-price-drop-select').value;
  const price = Number(document.getElementById('admin-price-input').value);
  const p = PRODUCTS.find(x => x.id === prodId);
  if (p) {
    p.price = price;
    alert(`Simulated price drop for ${p.name} to ₹${price}! Customer alert triggered.`);
    renderCatalog();
  }
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function handleCatalogFilter() {
  renderCatalog();
}

function setCatalogCategory(cat) {
  activeCategoryFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.textContent.toLowerCase().includes(cat)));
  renderCatalog();
}

function setUndertoneFilter(u) {
  activeUndertoneFilter = u;
  document.querySelectorAll('.undertone-chips .chip-btn').forEach(b => b.classList.toggle('active', b.textContent.toLowerCase().includes(u)));
  renderCatalog();
}