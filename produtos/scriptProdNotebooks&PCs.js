/* ======= JSON de produtos (amostrais) ======= */
const PRODUCTS = [
  { id: "p1", title: "Notebook Dell Inspiron I15-I1300-A30P", price: 2899.99, oldPrice:3369.84, rating:4.5,
    img:"../img/NotebookDellInspiron.jpg",
    category:"Dell",
    desc:"O Dell Inspiron 15 é um modelo intermediário que oferece um bom equilíbrio entre desempenho e funcionalidades, ideal para estudos e produtividade diária. O modelo i15-i1300-A30P vem equipado com o processador Intel Core i5-1334U de 13ª geração, 8 GB de memória RAM DDR4 2666 MHz e um SSD de 512 GB. A placa de vídeo integrada é a Intel Iris Xe Graphics G7 (80 EUs). O sistema operacional é o Windows 11 Home."},
    { id: "p2", title: "Notebook ASUS VivoBook Go 15", price: 2256.25, oldPrice:2717.64, rating:4.3,
    img:"../img/NotebookASUSVivoBookGo15.jpg",
    category:"Asus",
    desc:"A família Vivobook, da fabricante ASUS, tem procurado inovar o segmento intermediário, e dessa vez trás os processadores AMD 7000 para sua série Go, preparados para atividades de lazer, trabalho e estudo. O modelo E1504FA-NJ836W vem equipado com o processador AMD Ryzen 5 7520U, 8 GB de RAM DDR5 5500 MHz e SSD de 512 GB. A GPU integrada é a competente Radeon 610M. O sistema operacional é o Windows 11 Home."},
  { id: "p3", title: "Samsung Galaxy Book4 Intel® Core™ i5-1335U", price: 3419.10, oldPrice:3799.00, rating:4.8,
    img:"../img/SamsungGalaxyBook4.jpg",
    category:"Samsung",
    desc:"É um notebook voltado para produtividade e uso diário, com um corpo de metal leve e design fino. Ele possui tela Full HD de 15,6 polegadas, gráficos Intel® Iris® Xe, memória de 8 GB e SSD de 256 GB ou 512 GB, dependendo da configuração. O aparelho vem com Windows 11 e oferece um conjunto completo de portas, incluindo HDMI, USB-A e USB-C."},
  { id: "p4", title: "Notebook Positivo Vision R15 Lumina Bar", price: 2222.05, oldPrice:2339.00, rating:5.0,
    img:"../img/NotebookPositivoVisionR15.jpg",
    category:"Positivo",
    desc:"O Positivo Vision R15 Lumina Bar é um notebook com processador AMD Ryzen, tela Full HD IPS antirreflexo e o diferencial da Lumina Bar uma iluminação LED ao redor da webcam que melhora a qualidade de vídeo em chamadas. Ele é indicado para tarefas de trabalho e estudos, com bom desempenho para multitarefas básicas e moderadas. Suas especificações variam, mas incluem 8GB ou 16GB de RAM, 256GB ou 512GB de SSD, sistema operacional Linux (Debian) ou Windows 11, e teclado ABNT com teclado numérico."},
  { id: "p5", title: "Notebook Lenovo IdeaPad Slim 3", price: 2849.05, oldPrice:2999.00, rating:5.0,
    img:"../img/Notebook_Pro.jpg",
    category:"Lenovo",
    desc:"A linha Lenovo IdeaPad Slim 3i combina desempenho sólido e portabilidade, oferecendo notebooks intermediários para produtividade e entretenimento. O modelo 83NS0001BR vem equipado com o processador Intel Core i5-13420H, 16 GB de memória DDR5 de 4800 MHz e um SSD de 512 GB para o armazenamento. A GPU integrada é a modesta Intel UHD Graphics Xe G4 (48 EUs). O sistema operacional instalado é o Windows 11 Home."},
  { id: "p6", title: "Notebook Acer Aspire GO 15 AG15-71P-53R6 Intel®", price: 3099.00, oldPrice:3500.00, rating:4.6,
    img:"../img/NotebookAcerAspireGO15.jpg",
    category:"Acer",
    desc:"O Acer Aspire Go 15 é uma boa alternativa para quem busca desempenho eficiente, tela ampla e preço acessível em um notebook moderno. O modelo AG15-71P-53R6 vem equipado com o processador Intel Core i5-13420H da 13ª geração, 16 GB de memória RAM DDR5 5200 MHz e SSD NVMe de 512 GB para o armazenamento de dados. A GPU integrada é a Intel UHD Graphics Xe G4 (48 EUs). O sistema operacional é o Windows 11 Home."},
  { id: "p7", title: "Notebook Samsung Galaxy Chromebook Go", price: 2139.33, oldPrice:2400.65, rating:4.2,
    img:"../img/NotebookSamsungGalaxyChromebookGo.jpg",
    category:"Samsung",
    desc:"O Samsung Galaxy Chromebook Go é um laptop leve e durável, com sistema operacional Chrome OS, ideal para estudantes. Ele é equipado com processador Intel Celeron N4500, 4 GB de RAM e 64 GB de armazenamento interno. Possui tela HD antirreflexo, bateria de longa duração e conectividade via USB-C."},
  { id: "p8", title: "Pc Gamer Ryzen 5 completo", price: 2890.00, oldPrice:3190.00, rating:4.5,
    img:"../img/PcGamerRyzen5.jpg",
    category:"Pc montado",
    desc:"Um PC gamer com Ryzen 5 5600GT é uma máquina de bom custo-benefício com vídeo integrado, ideal para jogos de entrada e multitarefas. O processador tem 6 núcleos e 12 threads, com clock máximo de até 4.6 GHz, e possui gráficos integrados Radeon Vega 7, permitindo jogar muitos títulos sem uma placa de vídeo dedicada, como Valorant, League of Legends, Fortnite e Minecraft. As configurações comuns incluem 16GB de RAM DDR4, um SSD (geralmente M.2) para agilidade no carregamento e uma fonte de 500W com certificação 80 Plus."},
  { id: "p9", title: "Computador Gamer Pc Completo ", price: 1777.00, oldPrice:1877.00, rating:3.8,
    img:"../img/ComputadorGamerPcCompletoIntelCorei5.jpg",
    category:"Pc montado",
    desc:"Processador Intel Core i5 Super Turbo Memória RAM 8GB DDR3 SSD 512GB Monitor 20 Polegadas"},
  { id: "p10", title: "Notebook HP 256R G9 ", price: 2599.00, oldPrice:2799.00, rating:4.8,
    img:"../img/NotebookHP256RG9 .jpg",
    category:"HP",
    desc:"O Notebook HP 256R G9 com processador Intel Core i3 de 13ª geração é uma opção para uso básico de trabalho, estudos e entretenimento, com especificações como 8GB de RAM, SSD de 256GB e tela de 15,6 HD, e sistema operacional Windows 11 Home."},
  { id: "p11", title: "Notebook Positivo Duo 2 em 1", price: 1249.99, oldPrice:1385.00, rating:4.2,
    img:"../img/NotebookPositivoDuo2em1.jpg",
    category:"Positivo",
    desc:"O Notebook Positivo Duo 2 em 1 C4128B-3 é um notebook conversível que funciona como laptop e tablet, ideal para tarefas básicas como navegar na internet, estudar e trabalhar. Ele possui processador Intel Celeron N4020, 4GB de RAM, 128GB de armazenamento eMMC, tela sensível ao toque IPS HD de 11,6 polegadas, Windows 11 Home e bateria com duração de até 6 horas. O modelo também inclui uma caneta capacitiva, tecla de acesso rápido ao Netflix e garantia de 1 ano. "},
  { id: "p12", title: "Computador Dell 24 completo", price: 5929.00, oldPrice:6100.00, rating:4.5,
    img:"../img/ComputadorDell24.jpg",
    category:"Pc montado",
    desc:"Um Computador Dell 24 geralmente se refere a um modelo All-in-One de 24 polegadas, que combina a tela e os componentes do computador em uma única unidade. As especificações variam entre os modelos, mas as versões mais recentes (como o EC24250) incluem telas Full HD (1920x1080), processadores Intel Core de 13ª geração (como i5 ou i7), SSDs rápidos, e recursos como webcam pop-up, Wi-Fi 6E e teclado e mouse sem fio"}
];

/* Estado */
let state = {
  products: PRODUCTS.slice(),
  filtered: PRODUCTS.slice(),
  cart: [],
  selected: null
};

// inicializa o cart local a partir da API compartilhada quando disponível
if (typeof getCarrinho === 'function') {
  try { state.cart = getCarrinho(); } catch(e){ state.cart = []; }
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
    // Quando disponível, use a API compartilhada para setar o carrinho; caso contrário copie o fallback local para 'carrinho'
    try {
      if (typeof setCarrinho === 'function'){
        const current = (typeof getCarrinho === 'function') ? getCarrinho() : state.cart;
        const normalized = (Array.isArray(current) ? current : []).map(i => ({ id: i.id, nome: i.title || i.nome || i.id, preco: i.price || i.preco || 0, qtd: i.qty || i.qtd || 1 }));
        setCarrinho(normalized);
      } else {
        const local = JSON.parse(localStorage.getItem('cart_local') || '[]');
        if (local && local.length){
          const normalized = local.map(i => ({ id: i.id, nome: i.title || i.nome || i.id, preco: i.price || i.preco || 0, qtd: i.qty || i.qtd || 1 }));
          localStorage.setItem('carrinho', JSON.stringify(normalized));
        }
      }
    } catch(e){
      // se algo falhar, ao menos tente sincronizar o cart_local para a chave 'carrinho'
      try { const local = JSON.parse(localStorage.getItem('cart_local')||'[]'); localStorage.setItem('carrinho', JSON.stringify(local)); } catch(e){}
    }
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
