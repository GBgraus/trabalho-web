 
// Função para simular a troca de formulários conforme a opção clicada
        document.querySelectorAll('.opcao-item').forEach(item => {
            item.addEventListener('click', function() {
                // Remove 'active' de todos e adiciona no clicado
                document.querySelectorAll('.opcao-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');

                const metodo = this.getAttribute('data-metodo');
                const detalhesDiv = document.getElementById('detalhes-pagamento');
                let htmlContent = '';

                // Simulação de conteúdo dinâmico
                switch(metodo) {
                    case 'pix':
                        htmlContent = `
                            <h3>Detalhes do Pagamento - PIX</h3>
                            <p>Escaneie o QR Code abaixo ou copie e cole a chave para finalizar o pagamento.</p>
                            <div style="text-align:center; margin: 20px 0;">
                                <img src="../img/qrcodepix.jpg" alt="QR Code PIX" style="width: 150px; height: 150px; border: 1px solid #ddd;">
                                <p style="margin-top: 10px; font-size: 0.9em; font-weight: 600;">Chave PIX: 123.456.789-00</p>
                            </div>
                        `;
                        break;
                    case 'credito':
                    case 'debito':
                        const tipo = metodo === 'credito' ? 'Crédito' : 'Débito';
                        htmlContent = `
                            <h3>Detalhes do Cartão de ${tipo}</h3>
                            <div class="input-group-pag">
                                <label for="numero-cartao">Número do Cartão</label>
                                <input type="text" id="numero-cartao" placeholder="0000 0000 0000 0000">
                            </div>
                            <div class="input-group-pag">
                                <label for="nome-cartao">Nome no Cartão</label>
                                <input type="text" id="nome-cartao" placeholder="Nome Completo">
                            </div>
                            <div class="form-row">
                                <div class="input-group-pag">
                                    <label for="validade">Validade</label>
                                    <input type="text" id="validade" placeholder="MM/AA">
                                </div>
                                <div class="input-group-pag">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" placeholder="123">
                                </div>
                            </div>
                        `;
                        break;
                    case 'paypal':
                        htmlContent = `
                            <h3>Pagar com PayPal</h3>
                            <p>Ao clicar em "Confirmar Pagamento", você será redirecionado para a página segura do PayPal para finalizar sua transação.</p>
                            <img src="../img/PayPalLogo.png" alt="PayPal Logo" style="width: 150px; margin: 20px auto; display: block;">
                        `;
                        break;
                }

                detalhesDiv.innerHTML = htmlContent;
            });
        });

// Função para finalizar compra — usa utilitários de `carrinho.js`
function finalizarCompra() {
    try {
        const carrinho = getCarrinho();
        if (!Array.isArray(carrinho) || carrinho.length === 0) {
            alert('Seu carrinho está vazio. Adicione produtos antes de finalizar.');
            return;
        }

        // Aqui você pode integrar com API de pagamento ou redirecionar.
        // Por enquanto simulamos sucesso, limpamos o carrinho e redirecionamos.
        const total = carrinho.reduce((s, it) => s + ((Number(it.preco) || 0) * (Number(it.qtd) || 1)), 0);
        const formatted = formatCurrency(total);
        if (!confirm(`Confirma o pagamento de ${formatted}?`)) return;

        // limpa o carrinho (função definida em `carrinho.js`)
        try { limparCarrinho(); } catch (e) { localStorage.removeItem('carrinho'); }

        alert('Pagamento confirmado! Obrigado pela sua compra.');
        // redireciona para a página inicial ou página de agradecimento
        window.location.href = '../Index.html';
    } catch (e) {
        console.error('Erro ao finalizar compra:', e);
        alert('Ocorreu um erro ao processar o pagamento. Tente novamente.');
    }
}
