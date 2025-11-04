// carrinho.js — funciona em todas as páginas

// Função para obter carrinho do localStorage
function getCarrinho() {
  return JSON.parse(localStorage.getItem('carrinho') || '[]');
}

// Função para salvar carrinho
function setCarrinho(carrinho) {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Atualiza o contador em todas as páginas
function atualizarContadorCarrinho() {
  const contador = document.getElementById('cart-count');
  if (!contador) return;
  const carrinho = getCarrinho();
  const totalItens = carrinho.reduce((acc, item) => acc + item.qtd, 0);
  contador.textContent = totalItens;
}

// Função para adicionar produto
function adicionarProduto(id, nome, preco) {
  let carrinho = getCarrinho();
  const existente = carrinho.find(p => p.id === id);

  if (existente) {
    existente.qtd += 1;
  } else {
    carrinho.push({ id, nome, preco, qtd: 1 });
  }

  setCarrinho(carrinho);
  atualizarContadorCarrinho();

  alert(`${nome} foi adicionado ao carrinho!`);
}

// Renderizar carrinho na página carrinho.html
function renderizarCarrinho() {
  const container = document.getElementById('cart-container');
  if (!container) return; // não está na página de carrinho

  const carrinho = getCarrinho();

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio 🛒</p>";
    
    document.getElementById('cart-total').textContent = "R$ 0,00";
    return;
  }

  let html = '<ul class="lista-carrinho">';
  let total = 0;

  carrinho.forEach(item => {
    const subtotal = item.preco * item.qtd;
    total += subtotal;

    html += `
      <li class="item-carrinho">
        <span>${item.nome}</span>
        <div class="acoes-item">
          <button style="background: #7364ec; color: rgba(255, 255, 255, 1);" onclick="alterarQtd(${item.id}, -1)">−</button>
          <span>${item.qtd}</span>
          <button onclick="alterarQtd(${item.id}, 1)">+</button>
          <button onclick="removerItem(${item.id})">❌</button>
        </div>
        <span>R$ ${subtotal.toFixed(2)}</span>
      </li>
    `;
  });

  html += '</ul>';
  container.innerHTML = html;
  document.getElementById('cart-total').textContent = "R$ " + total.toFixed(2);
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

// Finalizar compra
function finalizarCompra() {
  const carrinho = getCarrinho();
  if (carrinho.length === 0) return alert("Seu carrinho está vazio!");

  alert("Compra finalizada com sucesso! 🎉");
  limparCarrinho();
}

// Eventos dos botões (só se existirem na página)
document.getElementById('btn-limpar')?.addEventListener('click', limparCarrinho);
document.getElementById('btn-finalizar')?.addEventListener('click', finalizarCompra);

// Atualizar carrinho e contador em toda página
window.addEventListener('load', () => {
  renderizarCarrinho();
  atualizarContadorCarrinho();
});
