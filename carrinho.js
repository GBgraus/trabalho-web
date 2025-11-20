// carrinho.js — funciona em todas as páginas

// Função para obter carrinho do localStorage
// Função para obter carrinho do localStorage
function getCarrinho() {
  const raw = JSON.parse(localStorage.getItem('carrinho') || '[]');
  // normaliza chaves variadas vindas de outros scripts
  return raw.map(item => ({
    id: item.id,
    nome: item.nome || item.title || item.name || item.id,
    preco: (item.preco ?? item.price ?? item.valor ?? 0),
    qtd: (item.qtd ?? item.qty ?? item.quantidade ?? 1),
    // preserva demais campos por precaução
    _raw: item
  }));
}

// formata valor em BRL (ex: R$ 1.234,56)
function formatCurrency(value){
  try{
    return new Intl.NumberFormat('pt-BR',{ style:'currency', currency:'BRL' }).format(Number(value) || 0);
  }catch(e){
    return 'R$ ' + (Number(value) || 0).toFixed(2);
  }
}

// Função para salvar carrinho
function setCarrinho(carrinho) {
  // garante que salvamos em um formato consistente (nome/preco/qtd)
  const normalized = (carrinho||[]).map(i=>({
    id: i.id,
    nome: i.nome || i.title || i.name || i.id,
    preco: (i.preco ?? i.price ?? i.valor ?? 0),
    qtd: (i.qtd ?? i.qty ?? i.quantidade ?? 1),
    img: i.img || i.imagem || (i._raw && (i._raw.img || i._raw.imagem)) || ''
  }));
  localStorage.setItem('carrinho', JSON.stringify(normalized));
  // Notifica outras partes da aplicação que o carrinho mudou (envia versão normalizada)
  try {
    window.dispatchEvent(new CustomEvent('carrinhoChanged', { detail: normalized }));
  } catch (e) {
    // browsers antigos podem falhar ao criar CustomEvent — ignora
  }
}

// Atualiza o contador em todas as páginas
function atualizarContadorCarrinho() {
  const contadorIds = ['cart-count', 'cartCount'];
  const carrinho = getCarrinho();
  const totalItens = carrinho.reduce((acc, item) => acc + (item.qtd || item.qty || 0), 0);
  contadorIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = totalItens;
  });
}

// Função para adicionar produto
function adicionarProduto(id, nome, preco, quantidade = 1, img = '') {
  let carrinho = getCarrinho();
  const existente = carrinho.find(p => p.id === id);

  if (existente) {
    existente.qtd = (existente.qtd || existente.qty || 0) + quantidade;
    // se já não tiver imagem e foi fornecida, atualiza
    if ((!existente.img || existente.img === '') && img) existente.img = img;
  } else {
    // tenta obter imagem automaticamente a partir do catálogo se não foi passada
    let resolvedImg = img || '';
    try {
      if (!resolvedImg && typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) {
        const p = PRODUCTS.find(x => x.id == id || x.id === id);
        if (p && (p.img || p.imagem)) resolvedImg = p.img || p.imagem;
      }
    } catch (e) { /* ignore */ }
    // armazena com chaves 'nome', 'preco', 'qtd' e opcional 'img'
    carrinho.push({ id, nome, preco, qtd: quantidade, img: resolvedImg });
  }

  setCarrinho(carrinho);
  atualizarContadorCarrinho();

  try { alert(`${nome} foi adicionado ao carrinho!`); } catch (e) {}
}

// Renderizar carrinho na página carrinho.html
function renderizarCarrinho() {
  const container = document.getElementById('cart-container');
  if (!container) return; // não está na página de carrinho
  const carrinho = getCarrinho();

  // se vazio
  if (!Array.isArray(carrinho) || carrinho.length === 0) {
    container.innerHTML = "<div style='padding:20px;background:#fff;border-radius:12px'>\n      <h3 style=\"margin:0 0 8px;color:#111\">Seu carrinho está vazio 🛒</h3>\n      <div style=\"color:#666\">Adicione produtos nas páginas de catálogo para vê-los aqui.</div>\n    </div>";
  const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = formatCurrency(0);
    // atualizar diagnóstico visível
    try{
      let diag = document.getElementById('cart-diagnostic');
      const totalContainer = document.querySelector('.total-container');
      if (!diag && totalContainer){
        diag = document.createElement('div'); diag.id = 'cart-diagnostic'; diag.style.marginTop='12px'; diag.style.fontSize='13px'; diag.style.color='#fff'; totalContainer.appendChild(diag);
      }
      if (diag) diag.innerHTML = `<strong>Itens:</strong> 0 &nbsp; • &nbsp; <strong>Total:</strong> ${formatCurrency(0)}`;
    }catch(e){}
    return;
  }

  // monta cards mais agradáveis
  let total = 0;
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';

  carrinho.forEach(it => {
    const item = {
      id: it.id,
      nome: it.nome || it.title || (it._raw && (it._raw.title || it._raw.name)) || 'Produto',
      preco: Number(it.preco ?? it.price ?? (it._raw && it._raw.price) ?? 0),
      qtd: Number(it.qtd ?? it.qty ?? (it._raw && it._raw.qty) ?? 1),
      img: (it._raw && (it._raw.img || it._raw.imagem)) || it.img || '',
      _raw: it._raw || it
    };

    const subtotal = item.preco * item.qtd;
    total += subtotal;

  const card = document.createElement('div');
  card.className = 'item-card';
    card.style.display = 'flex';
    card.style.alignItems = 'center';
    card.style.background = '#fff';
    card.style.padding = '12px';
    card.style.borderRadius = '10px';
    card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)';

    const img = document.createElement('div');
    img.style.width = '72px';
    img.style.height = '72px';
    img.style.flex = '0 0 72px';
    img.style.borderRadius = '8px';
    img.style.overflow = 'hidden';
    img.style.background = '#f3f3f3';
    img.style.display = 'grid';
    img.style.placeItems = 'center';
    img.style.marginRight = '12px';
    if (item.img) {
      const im = document.createElement('img');
      im.src = item.img;
      im.alt = item.nome;
      im.style.width = '100%';
      im.style.height = '100%';
      im.style.objectFit = 'cover';
      img.appendChild(im);
    } else {
      img.textContent = item.nome.slice(0,1).toUpperCase();
      img.style.color = '#666';
      img.style.fontWeight = '700';
    }

  const info = document.createElement('div');
  info.style.flex = '1';
  info.innerHTML = `<div style="font-weight:700;color:#111;margin-bottom:6px">${item.nome}</div>\n      <div style="color:#666;font-size:14px">${formatCurrency(item.preco)} cada</div>`;

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.flexDirection = 'column';
    actions.style.alignItems = 'flex-end';
    actions.style.gap = '8px';

    const qtyRow = document.createElement('div');
    qtyRow.style.display = 'flex';
    qtyRow.style.alignItems = 'center';
    qtyRow.style.gap = '8px';

    const btnDec = document.createElement('button');
    btnDec.textContent = '−';
    btnDec.style.padding = '6px 10px';
    btnDec.style.borderRadius = '8px';
    btnDec.style.border = 'none';
    btnDec.style.background = '#eee';
    btnDec.style.cursor = 'pointer';
    btnDec.addEventListener('click', ()=> alterarQtd(item.id, -1));

    const qtySpan = document.createElement('span');
    qtySpan.textContent = item.qtd;
    qtySpan.style.minWidth = '28px';
    qtySpan.style.textAlign = 'center';

    const btnInc = document.createElement('button');
    btnInc.textContent = '+';
    btnInc.style.padding = '6px 10px';
    btnInc.style.borderRadius = '8px';
    btnInc.style.border = 'none';
    btnInc.style.background = '#7364ec';
    btnInc.style.color = '#fff';
    btnInc.style.cursor = 'pointer';
    btnInc.addEventListener('click', ()=> alterarQtd(item.id, 1));

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.style.padding = '6px 10px';
    removeBtn.style.borderRadius = '8px';
    removeBtn.style.border = '1px solid #f3f3f3';
    removeBtn.style.background = '#fff';
    removeBtn.style.cursor = 'pointer';
    removeBtn.addEventListener('click', ()=> removerItem(item.id));

    qtyRow.appendChild(btnDec);
    qtyRow.appendChild(qtySpan);
    qtyRow.appendChild(btnInc);

    const subtotalDiv = document.createElement('div');
    subtotalDiv.style.fontWeight = '700';
    subtotalDiv.style.color = '#111';
  subtotalDiv.textContent = formatCurrency(subtotal);

    actions.appendChild(qtyRow);
    actions.appendChild(subtotalDiv);
    actions.appendChild(removeBtn);

    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(actions);

    wrapper.appendChild(card);
  });

  // escreve no container
  container.innerHTML = '';
  container.appendChild(wrapper);

  // fallback: se total calculado for zero ou NaN, tente somar usando os valores brutos do localStorage (suporta vírgula)
  function _parseNumberLoose(v){
    if (typeof v === 'number') return v || 0;
    if (!v && v!==0) return 0;
    let s = String(v).trim();
    // remove prefix 'R$' e espaços
    s = s.replace(/R\$|\s/g,'');
    // se contém '.' e ',', assume '.' milhares e ',' decimal -> remove '.' e replace ','->'.'
    if (s.indexOf('.') !== -1 && s.indexOf(',') !== -1){ s = s.replace(/\./g,'').replace(/,/g,'.'); }
    else if (s.indexOf(',') !== -1 && s.indexOf('.') === -1){ s = s.replace(/,/g,'.'); }
    // remove any non numeric except dot and minus
    s = s.replace(/[^0-9.\-]/g,'');
    const n = Number(s);
    return isNaN(n)? 0 : n;
  }

  if (!total || isNaN(total) || total === 0){
    try{
      const raw = JSON.parse(localStorage.getItem('carrinho') || '[]');
      if (Array.isArray(raw) && raw.length){
        const fallback = raw.reduce((sum,it)=>{
          const p = _parseNumberLoose(it.preco ?? it.price ?? it.valor ?? (it._raw && it._raw.price) ?? 0);
          const q = Number(it.qtd ?? it.qty ?? it.quantidade ?? 1) || 0;
          return sum + (p * q);
        }, 0);
        if (fallback && !isNaN(fallback) && fallback > 0) total = fallback;
      }
    }catch(e){ /* ignore */ }
  }

  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = formatCurrency(total);
  // atualizar um diagnóstico visível para usuários que não conseguem abrir DevTools
  try {
    let diag = document.getElementById('cart-diagnostic');
    const totalContainer = document.querySelector('.total-container');
    if (!diag && totalContainer){
      diag = document.createElement('div');
      diag.id = 'cart-diagnostic';
      diag.style.marginTop = '12px';
      diag.style.fontSize = '13px';
      diag.style.color = '#fff';
      totalContainer.appendChild(diag);
    }
    if (diag){
      const itemCount = carrinho.reduce((s,i)=> s + (Number(i.qtd||i.qty||0)), 0);
      const first = carrinho[0];
      const firstText = first ? `${first.nome || first.title || first.id} — qtde ${first.qtd||first.qty||1}` : '';
      diag.innerHTML = `<strong>Itens:</strong> ${itemCount} &nbsp; • &nbsp; <strong>Total:</strong> ${formatCurrency(total)}<br/><span style="color:rgba(255,255,255,0.85);font-size:13px">${firstText}</span>`;
    }
  } catch(e){ /* não bloquear render */ }
}

// Remover item
function removerItem(id) {
  let carrinho = getCarrinho();
  carrinho = carrinho.filter(p => p.id !== id);
  setCarrinho(carrinho);
  renderizarCarrinho();
  atualizarContadorCarrinho();
}

// Alterar quantidade
function alterarQtd(id, delta) {
  let carrinho = getCarrinho();
  const item = carrinho.find(p => p.id === id);
  if (!item) return;

  item.qtd += delta;
  if (item.qtd <= 0) {
    carrinho = carrinho.filter(p => p.id !== id);
  }

  setCarrinho(carrinho);
  renderizarCarrinho();
  atualizarContadorCarrinho();
}

// Limpar carrinho
function limparCarrinho() {
  localStorage.removeItem('carrinho');
  renderizarCarrinho();
  atualizarContadorCarrinho();
}





// Eventos dos botões (só se existirem na página)
document.getElementById('btn-limpar')?.addEventListener('click', limparCarrinho);
document.getElementById('btn-finalizar')?.addEventListener('click', finalizarCompra);

// Inicializa UI do carrinho assim que o DOM estiver pronto e também escuta mudanças
function _initCarrinhoUI(){
  try{ renderizarCarrinho(); } catch(e){}
  try{ atualizarContadorCarrinho(); } catch(e){}
}

// se DOM já estiver pronto, inicializa agora, senão espera DOMContentLoaded
if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', _initCarrinhoUI);
} else {
  _initCarrinhoUI();
}

// Atualiza UI quando o carrinho muda (setCarrinho dispara evento 'carrinhoChanged')
window.addEventListener('carrinhoChanged', (e)=>{
  try{ renderizarCarrinho(); } catch(e){}
  try{ atualizarContadorCarrinho(); } catch(e){}
});
