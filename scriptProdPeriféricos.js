/* ======= JSON de produtos (amostrais) ======= */
const PRODUCTS = [
  { id: "p1", title: "Redragon TECLADO MECANICO", price: 152.90, oldPrice:169.90, rating:4.5,
    img:"../img/TecladoRedragon.jpg",
    category:"Redragon",
    desc:"Sobre este item: Plastico ABS-Layout compacto 60% para os gamers que procuram deixar o máximo de espaço possível sobre a mesa.- Iluminação RGB Redragon Chroma Mk.II individual por tecla trazendo mais brilho para seu setup.- Cabo USB Tipo C removível para maior praticidade durante o transporte.- Keycaps feitas com o método double shot injection resultando em legendas duradouras"},
  { id: "p2", title: "Mouse Gamer Redragon Cobra, Chroma RGB", price: 106.52, oldPrice:135.90, rating:4.8,
    img:"../img/MouseRedragonCobra.jpg",
    category:"Redragon",
    desc:"Sobre este item: -Sensor PIXART PMW3325 (10000 DPI/20G/100ips). -Iluminação RGB Ajustável. -Sistema de Iluminação Chroma RGB. -Polling Rate de 1000hz. -7 Botões Programáveis."},
  { id: "p3", title: "Kit Gamer mouse e teclado RGB Rainbow Ranger grafite ", price: 191.40, oldPrice:240.00, rating:4.7,
    img:"../img/KitGamerRainbowRanger.jpg",
    category:"Ranger",
    desc:"Sobre este item: -É composto por um teclado Usb e teclas macias/confortáveis. O Teclado é padrão Brasileiro (ABNT2) com design moderno que inclui 12 teclas para utilização com o FN, com teclas em ABS e superfície em alumínio que oferecem maior resistência e acabamento. -O mouse deste modelo foi construído para destros e canhotos alcança até 6.400dpi oferecendo agilidade e precisão em rápidos movimentos. Possuem iluminação Rainbow, que confere um ar moderno e divertido, ideal para serem usados em ambientes com pouca iluminação. Funcionamento Plug and Play, não necessita de software para instalar, basta conectar o teclado à porta Usb."},
  { id: "p4", title: "Mouse Gamer Philco 7 Botões Pms70 - 5000 DPI", price: 69.99, oldPrice:92.99, rating:4.3,
    img:"../img/mouse-gamer-philco.png",
    category:"Philco",
    desc:"O Mouse Gamer Philco PMS70 é ideal para todos os tipos de jogos. Ele possui 7 botões e sensor optico de alta precisão. Ele conta também com um Software para configurar a quantidade de DPI. Além disso, o mouse tem iluminação RGB."},
  { id: "p5", title: "AOC, Monitor 22” 120Hz", price: 449.00, oldPrice:499.00, rating:4.8,
    img:"../img/AOCMonitor.jpg",
    category:"AOC",
    desc:"-Monitor AOC 22B35HM23, a porta de entrada para uma experiência gamer de alto nível. Com uma tela de 22 polegadas, ele é compacto e poderoso, ideal para qualquer setup. -Jogabilidade fluida com 120Hz de taxa de atualização (Overclock)."},
  
  { id: "p7", title: "Fone de Ouvido Com Fio, Headset Gamer JBL", price: 139.99, oldPrice:185.00, rating:4.8,
    img:"../img/headsetgamerJBL.jpeg",
    category:"JBL",
    desc:"- Som profissional. Com a tecnologia JBL. - Com o microfone removíve. - Possui almofadas auriculares leves feitas com tecido respirável e espuma de memória"},
  
  { id: "p8", title: "Monitor de Áudio Ssound", price: 168.40, oldPrice:177.99, rating:4.5,
    img:"../img/MonitordeAudioSsound.jpeg",
    category:"Ssound",
    desc:"Bluetooth. Optical. Monitor de Áudio. Potência: 80w. Conexões (Entradas): Entrada ARC / USB / Optical Digital / Entrada RCA"},

  { id: "p9", title: "Headset Gamer Logitech", price: 179.00, oldPrice:197.72, rating:4.5,
    img:"../img/HeadsetGamerLogitech.jpeg",
    category:"Logitech",
    desc: "- Leve e confortável. - Conexão simples. - Comunicação clara."},
  
  { id: "p10", title: "Monitor Studio Display ", price: 18999.00, oldPrice:20149.00, rating:4.9,
    img:"../img/studiodisplayApple1.jpeg",
    category:"Apple",
    desc:"- Tela Retina 5K de 27 polegadas (na diagonal). - Resolução de 5120 x 2880 pixels a 218 ppp. - Ampla tonalidade de cores (P3). - Tecnologia True Tone. - Câmera 12MP Center Stage. - Sistema de seis alto-falantes de alta-fidelidade e woofers com cancelamento de força. - Som estéreo amplo."},
  
  { id: "p11", title: "Filtro de Linha com 6 Tomadas Intelbras", price: 39.03, oldPrice:45.00, rating:4.6,
    img:"../img/FiltrodeLinhaIntelbras.jpeg",
    category:"Intelbras",
    desc:"- Proteção eletrônica avançada, ele protege contra sobrecargas e surtos de tensão. - Dupla proteção: fusível + vistor. - Cabo de 1,5 metros com revestimento em PVC. - 6 tomadas com espaçamento ideal para conectar plugs maiores."},

  { id: "p10", title: "Webcam Full HD Logitech ", price: 355.00, oldPrice:389.00, rating:4.9,
    img:"../img/WebcamLogitech.jpeg",
    category:"Logitech",
    desc:"- Videochamadas e Gravação de vídeo em Full HD de 1080p. - Foco automático em HD e correção de luz. - Áudio estéreo com microfones duplos. - Protetor de privacidade."},
  
  { id: "p10", title: "Suporte Pedestal Mesa Knup", price: 37.60, oldPrice:59.90, rating:4.9,
    img:"../img/SuportePedestalKnup.jpeg",
    category:"Knup",
    desc:"- Suporte articulável para microfone condensador, com braço de 4 cm x 4 cm e rotação de 27°. - Feito de metal durável e plástico, com pés reguláveis e clipe de fixação para mesa com espessura máxima de 4,5 cm. - Compatível com a maioria dos microfones do mercado. "}, 

  { id: "p10", title: "FIFINE Microfone dinâmico", price: 305.00, oldPrice:339.00, rating:4.4,
    img:"../img/FIFINEmicrofone.jpeg",
    category:"FIFINE",
    desc:"- Microfone streaming para jogos de computador com RGB, botão de mudo, conector para fones de ouvido, suporte de mesa，para cantar e YouTube."},

 { id: "p10", title: "FIFINE conjunto de microfone para jogos", price: 378.00, oldPrice:415.00, rating:4.8,
    img:"../img/FIFINEconjuntomicrofone.jpeg",
    category:"FIFINE",
    desc:"- kit de microfone RGB para computador com suporte para braço de lança, para gravação de voz vocal-AM8T."},

  { id: "p10", title: "Cadeira de escritório ergonômica Healer", price: 415.90, oldPrice:459.00, rating:4.9,
    img:"../img/Cadeiraesc.jpeg",
    category:"Healer",
    desc:"- Cadeira giratória. - Ideal para ambientes corporativos e home office. - Tamanho:	123 cm x 61 cm x 60 cm"}
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

