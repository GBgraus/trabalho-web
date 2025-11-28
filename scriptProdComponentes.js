/* ======= JSON de produtos (amostrais) ======= */
const PRODUCTS = [
  { id: "p1", title: "Memória Notebook Adata 8GB,", price: 135.90, oldPrice:179.90, rating:4.5,
    img:"../img/MemóriaNotebook.jpg",
    category:"ADATA",
    desc:"- Densidades: 8 GB - Velocidades: 3200 MHz - Latência: CL22 - Módulo: DIMM de 260 pinos - Fonte de alimentação: VDD e VDDQ=1,2V +0,06/-0,06V - Fonte de alimentação de ativação de DRAM: VPP = 2,5 V (+0,25 V / -0,125 V) - DRAM VCC: DDR4 STD 1,2 V - Suporta Intel Core 10ª séries - Temperatura de operação: 0°C a 85°C. - Latência CL22, proporcionando resposta rápida e eficiente em operações de memória. - Módulo DIMM de 260 pinos, garantindo compatibilidade com notebooks modernos."},
  { id: "p2", title: "SSD ADATA SU650 240GB", price: 197.52, oldPrice:235.90, rating:4.8,
    img:"../img/SSDAdatajpeg.jpeg",
    category:"ADATA",
    desc:"Sobre este item: O drive de estado sólido Ultimate SU630 implementa 3D NAND Flash e um controlador de alta velocidade, oferecendo capacidade de 240GB. Oferece desempenho de leitura / gravação de até 520 / 450MB / s e maior confiabilidade do que os SSDs NAND 2D. O SU630 possui armazenamento em cache SLC e tecnologias avançadas de correção de erros para garantir desempenho e integridade otimizados dos dados. Para aqueles que desejam experimentar uma atualização clara do PC, o SU630 é uma excelente op."},
  { id: "p3", title: "Kit Upgrade", price: 354.40, oldPrice:396.09, rating:4.7,
    img:"../img/kitintelcore.jpeg",
    category:"Intel Core",
    desc:"Kit Upgrade - Intel Core i5-3470 + Placa Mãe B75 Lga 1155 + 16GB Ram DDR3."},
  { id: "p4", title: "Processador AMD Ryzen 7 5700X 3.4GHz (TURBO 4.6GHz)", price: 1098.99, oldPrice:1192.99, rating:4.3,
    img:"../img/processadorAMD.jpeg",
    category:"AMD",
    desc:"- Pode oferecer desempenho ultrarrápido de 100 FPS nos jogos mais populares do mundo, placa gráfica discreta necessária. - 8 núcleos e 16 fios de processamento. - Cooler não incluído."},
  { id: "p5", title: "GPU RX 550 4GB Dual-Fan Projeto Edge", price: 549.00, oldPrice:639.00, rating:4.8,
    img:"../img/GPUPcyes.jpeg",
    category:"Pcyes",
    desc:"- Sistema operacional compatível: Win7-64bit, Win10-64bit, Win11-64bit, Linux. - Memória: 4GB GDDR5. - Modelo: PCYES RX550. - Memory Clock: 6000MHz."},
  
  { id: "p7", title: "Placa de vídeo GeForce RTX 5060 Ti", price: 2349.99, oldPrice:2485.00, rating:4.8,
    img:"../img/PlacadevídeoGeForce.jpg",
    category:"GIGABYTE",
    desc:"- Alimentado pela arquitetura NVIDIA Blackwell e DLSS 4. - Alimentado por GeForce RTX 5060 Ti. - Sistema de refrigeração WINDFORCE."},
  
  { id: "p8", title: " Fifine AmpliGame Placa de captura de vídeo, HD", price: 368.40, oldPrice:397.99, rating:4.5,
    img:"../img/FifinePlaca.jpg",
    category:"FIFINE",
    desc:"- HD 1080 60fps para áudio e vídeo, jogos, transmissão ao vivo. - 4K HDMI para placa de captura USB compatível com PS4/Windows/Mac OS/Switch/Xbox-V3."},

  { id: "p9", title: "Cooler Fan", price: 49.00, oldPrice:57.72, rating:4.5,
    img:"../img/CoolerFan.jpg",
    category:"MyMax",
    desc: "- COOLER P/GAB. MYMAX STORM II 120X120 AZUL. - Produtos desenvolvidos com materiais resistêntes de alta tecnologia. - Produto com garantia contra defeitos de fabricação. - Verifique o modelo de compatibilidade do produto."},
  
  { id: "p10", title: "HD Barracuda ", price: 299.00, oldPrice:349.00, rating:4.9,
    img:"../img/hdbarracuda.jpeg",
    category:"Seagate",
    desc:"- Cache: 64 MB. - RPM: 7200. - SATA 6Gb/s. - O HD é compatível com qualquer sistema operacional existente hoje. "},
  
  { id: "p11", title: "Nobreak Interativo 120 Volts", price: 879.99, oldPrice:929.90, rating:4.6,
    img:"../img/fonteestabilizada.jpeg",
    category:"Intelbras",
    desc:"- O ATTIV 1200 VA oferece proteção e autonomia para eletrônicos simples, como TVs, desktops, modems, roteadores, câmeras e DVRs. - Com design moderno e diferenciado, o ATTIV 1200 VA se adequa a ambientes domésticos e corporativos, permitindo uso em posições vertical ou horizontal."},

  { id: "p10", title: "Fonte Nobreak 120V ", price: 155.00, oldPrice: 189.00, rating:4.9,
    img:"../img/fonteintelnobreak.jpeg",
    category:"Intelbras",
    desc:"- Multiuso: Pode ser utilizada em cenários de CFTV, redes, controle de acesso e automação. - Função DC start: Religamento automático da fonte nobreak mesmo na ausência de energia elétrica 1. - Pronto para usar inclui bateria de lítio de 2.500 mAh. - Saída 12 V 1 A com conector P4. - Proteção contra curto-circuito, sobrecarga e sobretensão."},
  
  { id: "p10", title: "Kit RAM de 16 GB (2 x 8 GB)", price: 225.60, oldPrice:269.90, rating:4.9,
    img:"../img/Crucialkitram.jpeg",
    category:"Crucial",
    desc:"- Melhore a responsividade do seu sistema, execute aplicativos mais rápido e faça várias tarefas com facilidade. - Garantia de compatibilidade ao usar o scanner de sistema crucial ou a ferramenta Crucial Advisor. - "},
  ];

/* Estado */
let state = {
  products: PRODUCTS.slice(),
  filtered: PRODUCTS.slice(),
  cart: [],
  selected: null
};

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
  const found = state.cart.find(i=>i.id===id);
  if(found){
    found.qty += qty;
  } else {
    state.cart.push({ id:prod.id, title:prod.title, price:prod.price, img:prod.img, qty });
  }
  updateCartUI();
  showMiniToast(`${prod.title} adicionado ao carrinho`);
}

/* comprar agora (simples simulação) */
function buyNow(id, qty=1){
  const prod = state.products.find(x=>x.id===id);
  alert(`Compra simulada: ${prod.title} - qtde ${qty}\nValor: R$ ${(prod.price*qty).toFixed(2)}\n\n(Na versão final, integrar pagamento)`);
}

/* atualizar UI do carrinho */
function updateCartUI(){
  cartCount.textContent = state.cart.reduce((s,i)=>s+i.qty,0);
  // fill cart modal
  cartItemsDiv.innerHTML = '';
  if(state.cart.length===0){
    cartItemsDiv.innerHTML = `<div class="cart-empty">Seu carrinho está vazio.</div>`;
    cartFooter.innerHTML = '';
    return;
  }
  let total = 0;
  state.cart.forEach(item=>{
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
      state.cart = state.cart.filter(c=>c.id!==item.id);
      updateCartUI();
    });
  });
  cartFooter.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
    <strong>Total</strong><strong>R$ ${total.toFixed(2)}</strong>
  </div>
  <div style="margin-top:8px;display:flex;gap:8px">
    <button id="checkoutBtn" style="flex:1;padding:10px;border-radius:8px;border:none;background:var(--accent);color:#fff;cursor:pointer">Finalizar compra</button>
    <button id="clearCart" style="padding:10px;border-radius:8px;border:1px solid #eee;background:#fff;cursor:pointer">Limpar</button>
  </div>`;
  document.getElementById('checkoutBtn').addEventListener('click', ()=>{ alert('Checkout simulado. Integrar PSP para finalizar.'); });
  document.getElementById('clearCart').addEventListener('click', ()=>{ state.cart = []; updateCartUI(); });
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