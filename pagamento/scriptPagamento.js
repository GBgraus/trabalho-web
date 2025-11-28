       document.querySelectorAll('.opcao-item').forEach(item => {
            item.addEventListener('click', function() {
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

function showCenterNotice(message, duration = 2000){
    return new Promise((resolve)=>{
        try{
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.inset = '0';
            overlay.style.display = 'grid';
            overlay.style.placeItems = 'center';
            overlay.style.background = 'rgba(0,0,0,0.35)';
            overlay.style.zIndex = '10000';
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity .2s ease';

            const box = document.createElement('div');
            box.style.background = '#111';
            box.style.color = '#fff';
            box.style.padding = '16px 18px';
            box.style.borderRadius = '12px';
            box.style.maxWidth = '90vw';
            box.style.width = 'min(420px, 90vw)';
            box.style.textAlign = 'center';
            box.style.fontSize = '15px';
            box.style.boxShadow = '0 10px 30px rgba(0,0,0,0.45)';
            box.textContent = String(message || '');
            overlay.appendChild(box);

            document.body.appendChild(overlay);
            requestAnimationFrame(()=>{ overlay.style.opacity = '1'; });

            function cleanup(){
                overlay.style.opacity = '0';
                setTimeout(()=>{ overlay.remove(); resolve(); }, 220);
            }
            overlay.addEventListener('click', cleanup);
            setTimeout(cleanup, Math.max(1200, duration|0));
        }catch(e){
            alert(message);
            resolve();
        }
    });
}

function finalizarCompra() {
    try {
        const carrinho = getCarrinho();
        if (!Array.isArray(carrinho) || carrinho.length === 0) {
            showCenterNotice('Seu carrinho está vazio. Adicione produtos antes de finalizar.', 2200);
            return;
        }


        const total = carrinho.reduce((s, it) => s + ((Number(it.preco) || 0) * (Number(it.qtd) || 1)), 0);
        const formatted = formatCurrency(total);
        if (!confirm(`Confirma o pagamento de ${formatted}?`)) return;

        try { limparCarrinho(); } catch (e) { localStorage.removeItem('carrinho'); }

        showCenterNotice('Pagamento confirmado! Obrigado pela sua compra.').then(()=>{
            window.location.href = '../Index.html';
        });
    } catch (e) {
        console.error('Erro ao finalizar compra:', e);
        alert('Ocorreu um erro ao processar o pagamento. Tente novamente.');
    }
}

function confirmPayment(){
    try{
        const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
        if(!Array.isArray(carrinho) || carrinho.length === 0){
            showCenterNotice('Seu carrinho está vazio. Adicione produtos antes de confirmar o pagamento.', 2200);
            return;
        }

        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || 'null');
        const usuario = usuarioLogado ? usuarioLogado.email : 'cliente@local';

        const itens = carrinho.map(i => ({ id: i.id, nome: i.nome || i.title || 'Produto', preco: Number(i.preco) || parseFloat(String(i.preco).replace(/\./g,'').replace(',','.')) || 0, qtd: i.qtd || i.quantidade || 1, img: i.img || i.imagem || '' }));
        const total = itens.reduce((s,it) => s + (Number(it.preco) || 0) * (Number(it.qtd)||0), 0);

        const compras = JSON.parse(localStorage.getItem('compras') || '[]');
        const order = {
            id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : ('order-' + Date.now()),
            usuario: usuario,
            itens: itens,
            total: total,
            data: new Date().toISOString()
        };
        compras.push(order);
        localStorage.setItem('compras', JSON.stringify(compras));
        try{ window.dispatchEvent(new CustomEvent('comprasChanged', { detail: compras })); }catch(e){}

        try { limparCarrinho(); } catch (e) { localStorage.removeItem('carrinho'); }

        showCenterNotice('Pagamento simulado. Compra confirmada! Total: ' + total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).then(()=>{
            window.location.href = '../Index.html';
        });
    } catch(e){
        console.error('Erro em confirmPayment:', e);
        alert('Ocorreu um erro ao processar o pagamento. Tente novamente.');
    }
}
