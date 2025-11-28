
/* ======= JSON de produtos (amostrais) ======= */
const PRODUCTS = [
  { id: "p1", title: "Apple iPhone 17 Pro Max ", price: 12598.95, oldPrice:13998.84, rating:4.5,
    img:"../img/Iphone17ProMax.jpeg",
    category:"Apple",
    desc:"O Apple iPhone 17 Pro Max é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização. A tela de 6.9 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2868x1320 pixel. As funcionalidades oferecidas pelo Apple iPhone 17 Pro Max são muitas e top de linha. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS presente no aparelho. Tem também leitor multimídia, videoconferência, e bluetooth. Enfatizamos a excelente memória interna de 2048 GB mas sem a possibilidade de expansão. O Apple iPhone 17 Pro Max é um produto com poucos concorrentes em termos de multimídia graças à câmera de 48 megapixels que permite tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. A espessura de 8.8 milímetros é realmente ótima e torna o Apple iPhone 17 Pro Max ainda mais espetacular."},
    { id: "p2", title: "Apple iPhone 16 ", price: 4846.28, oldPrice:5384.76, rating:4.3,
    img:"../img/AppleiPhone16.jpeg",
    category:"Apple",
    desc:"O Apple iPhone 16 é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos. A tela de 6.1 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2556x1179 pixel. As funcionalidades oferecidas pelo Apple iPhone 16 são muitas e todas top de linha. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS presente no aparelho. Tem também leitor multimídia, videoconferência, e bluetooth. Enfatizamos a excelente memória interna de 512 GB mas sem a possibilidade de expansão. A excelência deste Apple iPhone 16 é completada por uma câmera de 48 megapixels que permite tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. A espessura de apenas 7.8 milímetros torna o Apple iPhone 16 um dos telefones mais finos que existem."},
  { id: "p3", title: "Apple iPhone 17 ", price: 9179.10, oldPrice:10199.00, rating:4.7,
    img:"../img/Iphone17.jpeg",
    category:"Apple",
    desc:"O Apple iPhone 17 é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos. A tela de 6.3 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2622x1206 pixel. As funcionalidades oferecidas pelo Apple iPhone 17 são muitas e todas top de linha. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS presente no aparelho. Tem também leitor multimídia, videoconferência, e bluetooth. Enfatizamos a excelente memória interna de 512 GB mas sem a possibilidade de expansão. A excelência deste Apple iPhone 17 é completada por uma câmera de 48 megapixels que permite tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. A espessura de apenas 8 milímetros torna o Apple iPhone 17 um dos telefones mais finos que existem."},
  { id: "p4", title: "Apple iPhone 15 ", price: 4245.00, oldPrice:4716.67, rating:4.4,
    img:"../img/Iphone15.jpg",
    category:"Apple",
    desc:"O Apple iPhone 15 é, sem dúvida, um dos smartphones iOS mais avançados e abrangentes disponíveis no mercado, graças ao seu rico equipamento e recursos multimídia avançados. Tem um grande display de 6.1 polegadas com uma resolução de 2556x1179 pixel. As funcionalidades oferecidas pelo Apple iPhone 15 são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 512 GB mas sem a possibilidade de expansão. O Apple iPhone 15 é um produto com poucos concorrentes em termos de multimídia graças à câmera de 48 megapixels que permite ao Apple iPhone 15 tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. A espessura de 7.8mm torna o Apple iPhone 15 um dos telefones mais completos e finos."},
  { id: "p5", title: "Apple iPhone 15 Pro Max", price: 6449.00, oldPrice:6820.00, rating:4.8,
    img:"../img/Iphone15ProMax.jpg",
    category:"Apple",
    desc:"O Apple iPhone 15 Pro Max é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos. A tela de 6.7 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2796x1290 pixel. As funcionalidades oferecidas pelo Apple iPhone 15 Pro Max são muitas e todas top de linha. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS presente no aparelho. Tem também leitor multimídia, videoconferência, e bluetooth. Enfatizamos a excelente memória interna de 1024 GB mas sem a possibilidade de expansão. A excelência deste Apple iPhone 15 Pro Max é completada por uma câmera de 48 megapixels que permite tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. A espessura de 8.3 milímetros é realmente ótima e torna o Apple iPhone 15 Pro Max ainda mais espetacular."},
  { id: "p6", title: "Apple iPhone 14", price: 3598.00, oldPrice:3997.78, rating:4.3,
    img:"../img/Iphone14.jpg",
    category:"Apple",
    desc:"O Apple iPhone 14 é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.1 polegadas com uma resolução de 2532x1170 pixels. As funcionalidades oferecidas pelo Apple iPhone 14 são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 512 GB mas sem a possibilidade de expansão. Respeitável a câmera de 12 megapixels que permite ao Apple iPhone 14 tirar fotos com uma resolução de 4000x3000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. Muito fino, 7.8 milímetros, o que torna o Apple iPhone 14 realmente interessante."},
  
    { id: "p7", title: "Apple iPhone 14 Pro", price: 6049.00, oldPrice:6235.00, rating:4.2,
    img:"../img/Iphone14ProMax.jpg",
    category:"Apple",
    desc:"O Apple iPhone 14 Pro Max é, sem dúvida, um dos smartphones iOS mais avançados e abrangentes disponíveis no mercado, graças ao seu rico equipamento e recursos multimídia avançados. Tem um grande display de 6.7 polegadas com uma resolução de 2796x1290 pixel. As funcionalidades oferecidas pelo Apple iPhone 14 Pro Max são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 1000 GB mas sem a possibilidade de expansão. O Apple iPhone 14 Pro Max é um produto com poucos concorrentes em termos de multimídia graças à câmera de 48 megapixels que permite ao Apple iPhone 14 Pro Max tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. A espessura de 7.9mm torna o Apple iPhone 14 Pro Max um dos telefones mais completos e finos.."},
  
    { id: "p8", title: "Apple iPhone 13", price: 2815.12, oldPrice:3199.00, rating:4.6,
    img:"../img/Iphone13.jpg",
    category:"Apple",
    desc:"O Apple iPhone 13 é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.1 polegadas com uma resolução de 2532x1170 pixels. As funcionalidades oferecidas pelo Apple iPhone 13 são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 512 GB mas sem a possibilidade de expansão. Respeitável a câmera de 12 megapixels que permite ao Apple iPhone 13 tirar fotos com uma resolução de 4000x3000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. Muito fino, 7.7 milímetros, o que torna o Apple iPhone 13 realmente interessante."},

    { id: "p9", title: "Apple iPhone 13 Pro Max", price: 4089.00, oldPrice:4365.72, rating:4.0,
    img:"../img/Iphone13ProMax.jpg",
    category:"Apple",
    desc:"O Apple iPhone 13 Pro Max é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.7 polegadas com uma resolução de 2778x1284 pixels. As funcionalidades oferecidas pelo Apple iPhone 13 Pro Max são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 1000 GB mas sem a possibilidade de expansão. Respeitável a câmera de 12 megapixels que permite ao Apple iPhone 13 Pro Max tirar fotos com uma resolução de 4000x3000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. Muito fino, 7.7 milímetros, o que torna o Apple iPhone 13 Pro Max realmente interessante."},
  
      
    { id: "p10", title: "Galaxy Z Fold7", price: 9584.10, oldPrice:10649.00, rating:4.5,
    img:"../img/GalaxyZFold7.jpg",
    category:"Samsung",
    desc:"O Samsung Galaxy Z Fold 7 é um tablet Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 8 polegadas e uma resolução de 2184x1968 pixels que é uma das mais altas atualmente em circulação. As funcionalidades oferecidas pelo Samsung Galaxy Z Fold 7 são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 1024 GB mas sem a possibilidade de expansão. O Samsung Galaxy Z Fold 7 é um produto com poucos concorrentes em termos de multimídia graças à câmera de 200 megapixels que permite ao Samsung Galaxy Z Fold 7 tirar fotos fantásticas com uma resolução de 8165x6124 pixels e gravar vídeos em 8K a espantosa resolução de 7680x4320 pixels. A espessura de apenas 4.2 milímetros torna o Samsung Galaxy Z Fold 7 um dos telefones mais finos que existem."},
  
    { id: "p11", title: "Samsung Galaxy Z Flip7", price: 3499.03, oldPrice:3955.00, rating:4.2,
    img:"../img/GalaxyZFlip7.jpg",
    category:"Samsung",
    desc:"O Samsung Galaxy Z Flip 7 é um smartphone Android de bom nível, ótimo para fotos, que pode satisfazer até o mais exigente dos usuários. Tem uma enorme tela Touchscreen de 6.9 polegadas com uma resolução de 2520x1080 pixel. Sobre as características deste Samsung Galaxy Z Flip 7 na verdade não falta nada. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS. Tem também leitor multimídia, videoconferência e bluetooth. Enfatizamos a boa memória interna de 512 GB mas sem a possibilidade de expansão. O Samsung Galaxy Z Flip 7 é um produto com poucos concorrentes em termos de multimídia graças à câmera de 50 megapixels que permite ao Samsung Galaxy Z Flip 7 tirar fotos fantásticas com uma resolução de 8165x6124 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. Muito fino, 6.5 milímetros, o que torna o Samsung Galaxy Z Flip 7 realmente interessante."}
];

/* Estado */
let state = {
  products: PRODUCTS.slice(),
  filtered: PRODUCTS.slice(),
  cart: [],
  selected: null
};

// se existir API compartilhada, inicializa o cart local a partir dela
if (typeof getCarrinho === 'function') {
  try { state.cart = getCarrinho(); } catch (e) { state.cart = []; }
}

/* DOM refs */
const grid = document.getElementById('productGrid');
const detail = document.getElementById('detailPanel');
const searchInput = document.getElementById('searchInput');
const cartCount = document.getElementById('cartCount');
const openCartBtn = document.getElementById('openCartBtn');
const cartModal = document.getElementById('cartModal');
const cartItemsDiv = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');

/* montar lista de categorias dinamicamente */
const categories = Array.from(new Set(PRODUCTS.map(p=>p.category)));
const catListDiv = document.getElementById('categoryList');
categories.forEach(cat=>{
  const id = 'cat-'+cat;
  const wrapper = document.createElement('label');
  wrapper.className='checkbox';
  wrapper.innerHTML = `<input type="checkbox" value="${cat}" id="${id}" checked> ${cat[0].toUpperCase()+cat.slice(1)}`;
  catListDiv.appendChild(wrapper);
});

/* render grid */
function renderGrid(items){
  grid.innerHTML = '';
  items.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="thumb"><img src="${p.img}" alt="${p.title}"></div>
      <div>
        <h4 class="title">${p.title}</h4>
        
        <div style="height:8px"></div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
          <div>
            <div class="price">R$ ${p.price.toFixed(2)}</div>
            ${p.oldPrice ? `<div style="font-size:12px;color:#999;text-decoration:line-through">R$ ${p.oldPrice.toFixed(2)}</div>` : ''}
          </div>
          <div style="text-align:right;font-size:13px;color:${p.rating>=4.5? '#16a34a':'#f59e0b'}">${p.rating} ★</div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-ghost" data-action="view" data-id="${p.id}">Ver</button>
        <button class="btn btn-primary" data-action="add" data-id="${p.id}">Comprar</button>
      </div>
    `;
    grid.appendChild(card);

    /* eventos */
    card.querySelector('[data-action="view"]').addEventListener('click',()=>selectProduct(p.id));
    card.querySelector('[data-action="add"]').addEventListener('click',()=>{ addToCart(p.id); });
    // click on thumb also opens detail
    card.querySelector('.thumb').addEventListener('click',()=>selectProduct(p.id));
  });
}

/* selecionar produto e mostrar no painel */
function selectProduct(id){
  const p = state.products.find(x=>x.id===id);
  state.selected = p;
  detail.setAttribute('aria-hidden','false');
  detail.innerHTML = `
    <div style="display:flex;gap:12px;flex-direction:column">
      <div class="big"><img src="${p.img}" alt="${p.title}"></div>
      <h2>${p.title}</h2>
      <div class="desc">${p.desc}</div>
      <div class="price-big">R$ ${p.price.toFixed(2)} ${p.oldPrice? `<span style="text-decoration:line-through;color:#aaa;font-weight:500;margin-left:8px;font-size:14px">R$ ${p.oldPrice.toFixed(2)}</span>` : ''}</div>
      <div style="display:flex;gap:12px;align-items:center">
        <div style="font-size:14px;color:var(--muted)">Categoria: <strong style="color:#111">${p.category}</strong></div>
        <div style="margin-left:auto;color:${p.rating>=4.5? '#16a34a':'#f59e0b'}">${p.rating} ★</div>
      </div>
      <div style="height:12px"></div>
      <div class="qty">
        <div style="font-weight:600">Quantidade:</div>
        <button id="decQty">-</button>
        <div id="qtyVal" style="min-width:28px;text-align:center">1</div>
        <button id="incQty">+</button>
      </div>
      <div class="buy-row">
        <button class="btn btn-ghost" id="addToCartBtn">Adicionar ao carrinho</button>
        <button class="btn btn-primary" id="buyNowBtn">Comprar</button>
      </div>
    </div>
  `;
  // qty handlers
  let qty = 1;
  const qVal = detail.querySelector('#qtyVal');
  detail.querySelector('#decQty').addEventListener('click', ()=>{ if(qty>1) qty--; qVal.textContent = qty;});
  detail.querySelector('#incQty').addEventListener('click', ()=>{ qty++; qVal.textContent = qty;});
  detail.querySelector('#addToCartBtn').addEventListener('click', ()=>{ addToCart(p.id, qty); });
  detail.querySelector('#buyNowBtn').addEventListener('click', ()=>{ buyNow(p.id, qty); });
  // scroll to detail on small screens
  if(window.innerWidth < 880) detail.scrollIntoView({behavior:'smooth'});
}

/* adicionar ao carrinho */
function addToCart(id, qty = 1){
  const prod = state.products.find(x=>x.id===id);
  if (!prod) return;
  if (typeof adicionarProduto === 'function'){
    // passar título como nome, preço como preco e imagem (quando disponível) para a API comum
    adicionarProduto(prod.id, prod.title || prod.nome || prod.id, prod.price || prod.preco || 0, qty, prod.img || prod.imagem || '');
  } else {
    const found = state.cart.find(i=>i.id===id);
    if(found) found.qty += qty; else state.cart.push({ id:prod.id, title:prod.title, price:prod.price, img:prod.img, qty });
    try { localStorage.setItem('cart_local', JSON.stringify(state.cart)); } catch(e){}
  }
  updateCartUI();
  // Notificação já exibida pela implementação comum do carrinho
}

/* comprar agora (simples simulação) */
function buyNow(id, qty=1){
  const prod = state.products.find(x=>x.id===id);
  alert(`Compra simulada: ${prod.title} - qtde ${qty}\nValor: R$ ${(prod.price*qty).toFixed(2)}\n\n(Na versão final, integrar pagamento)`);
}

/* atualizar UI do carrinho */
function updateCartUI(){
  // preferir carrinho compartilhado
  const shared = (typeof getCarrinho === 'function') ? getCarrinho() : null;
  const cart = Array.isArray(shared) ? shared : state.cart;
  const normalize = (item) => ({
    id: item.id,
    title: item.title || item.nome || item.id,
    price: item.price || item.preco || item.valor || 0,
    img: item.img || item.imagem || '',
    qty: item.qtd || item.qty || 1
  });

  const normalized = cart.map(normalize);
  cartCount.textContent = normalized.reduce((s,i)=>s+i.qty,0);
  cartItemsDiv.innerHTML = '';
  if(normalized.length===0){
    cartItemsDiv.innerHTML = `<div class="cart-empty">Seu carrinho está vazio.</div>`;
    cartFooter.innerHTML = '';
    return;
  }
  let total = 0;
  normalized.forEach(item=>{
    total += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div style="flex:1">
        <div style="font-weight:600">${item.title}</div>
        <div style="color:var(--muted);font-size:13px">R$ ${item.price.toFixed(2)} x ${item.qty}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <button data-remove="${item.id}" style="border:none;background:#fff;cursor:pointer;color:#d9534f">Remover</button>
      </div>
    `;
    cartItemsDiv.appendChild(div);
    div.querySelector('[data-remove]').addEventListener('click', ()=>{
      if (typeof removerItem === 'function') removerItem(item.id);
      else { state.cart = state.cart.filter(c=>c.id!==item.id); updateCartUI(); }
    });
  });
  cartFooter.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
    <strong>Total</strong><strong>R$ ${total.toFixed(2)}</strong>
  </div>
  <div style="margin-top:8px;display:flex;gap:8px">
    <button id="checkoutBtn" style="flex:1;padding:10px;border-radius:8px;border:none;background:var(--accent);color:#fff;cursor:pointer">Finalizar compra</button>
    <button id="clearCart" style="padding:10px;border-radius:8px;border:1px solid #eee;background:#fff;cursor:pointer">Limpar</button>
  </div>`;
  document.getElementById('checkoutBtn').addEventListener('click', ()=>{
    // garante que o carrinho está no formato esperado por carrinho.js (localStorage 'carrinho')
    if (typeof getCarrinho !== 'function'){
      // temos um fallback local 'cart_local' usado quando não há API comum
      const local = JSON.parse(localStorage.getItem('cart_local') || '[]');
      if (local && local.length){
        const normalized = local.map(i => ({ id: i.id, nome: i.title || i.nome || i.id, preco: i.price || i.preco || 0, qtd: i.qty || i.qtd || 1 }));
        localStorage.setItem('carrinho', JSON.stringify(normalized));
      }
    }
    // navega para a página do carrinho (pasta produtos -> voltar uma pasta)
    window.location.href = '../carrinho.html';
  });
  document.getElementById('clearCart').addEventListener('click', ()=>{ if(typeof limparCarrinho==='function') limparCarrinho(); else { state.cart = []; updateCartUI(); } });
}

/* mini toast */
function showMiniToast(msg){
  const t = document.createElement('div');
  t.style.position='fixed'; t.style.bottom='18px'; t.style.left='50%'; t.style.transform='translateX(-50%)';
  t.style.background='#111'; t.style.color='#fff'; t.style.padding='10px 16px'; t.style.borderRadius='8px';
  t.style.zIndex=60; t.style.opacity=0; t.style.transition='opacity .2s';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(()=>t.style.opacity=1);
  setTimeout(()=>{ t.style.opacity=0; setTimeout(()=>t.remove(),300); },1500);
}

/* search + filters */
searchInput.addEventListener('input', applyFilters);
document.getElementById('applyPrice').addEventListener('click', applyFilters);
document.getElementById('sortSelect').addEventListener('change', applyFilters);
document.querySelectorAll('#categoryList input[type="checkbox"]').forEach(cb=>cb.addEventListener('change', applyFilters));

function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  const min = parseFloat(document.getElementById('minPrice').value) || 0;
  const max = parseFloat(document.getElementById('maxPrice').value) || Infinity;
  const checkedCats = Array.from(document.querySelectorAll('#categoryList input[type="checkbox"]:checked')).map(i=>i.value);
  let items = state.products.filter(p=>{
    const matchQ = p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    const matchPrice = p.price >= min && p.price <= max;
    const matchCat = checkedCats.includes(p.category);
    return matchQ && matchPrice && matchCat;
  });
  const sort = document.getElementById('sortSelect').value;
  if(sort==='price-asc') items.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') items.sort((a,b)=>b.price-a.price);
  state.filtered = items;
  renderGrid(items);
}

/* cart open/close */
openCartBtn.addEventListener('click', ()=>{ cartModal.style.display = cartModal.style.display==='none'?'block':'none'; updateCartUI(); });
document.getElementById('closeCart').addEventListener('click', ()=>{ cartModal.style.display='none' });

/* inicializa */
renderGrid(state.products);
updateCartUI();



