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
    if (totalEl) totalEl.textContent = "R$ 0,00";
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
    info.innerHTML = `<div style="font-weight:700;color:#111;margin-bottom:6px">${item.nome}</div>\n      <div style="color:#666;font-size:14px">R$ ${item.preco.toFixed(2)} cada</div>`;

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
    subtotalDiv.textContent = `R$ ${subtotal.toFixed(2)}`;

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

  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = "R$ " + Number(total).toFixed(2);
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

// Atualizar carrinho e contador em toda página
window.addEventListener('load', () => {
  renderizarCarrinho();
  atualizarContadorCarrinho();
});
