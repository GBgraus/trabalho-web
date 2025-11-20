
    // ======= Proteção de rota: exige login =======
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')||'null');
    if(!usuarioLogado){ window.location.href = 'login.html'; }

    // ======= Dados de exemplo =======
    const produtos = [
      { id: 'ntb-01', nome: 'Notebook Pro 15" i7 16GB 512GB SSD', preco: 5499.90, antigo: 5999.90, rating: 4.8, categoria: 'notebooks', imagem:'img/Notebook_Pro.jpg' },
      { id: 'smr-01', nome: 'Samsung Galaxy Z Flip7 FE 5G', preco: 2999.00, antigo: 3499.00, rating: 4.6, categoria: 'smartphones', imagem:'img/galaxyflip7.jpg' },
      { id: 'hed-01', nome: 'Headset Gamer <br> 7.1 Surround', preco: 349.90, antigo: 499.90, rating: 4.7, categoria: 'perifericos', imagem:'img/headset.jpg' },
      { id: 'ssd-01', nome: 'SSD NVMe <br> 1TB Gen4', preco: 499.90, antigo: 699.90, rating: 4.9, categoria: 'armazenamento', imagem:'img/ssd.jpg' },
      { id: 'rtr-01', nome: 'Roteador Wi‑Fi <br> 6 AX3000', preco: 599.00, antigo: 799.00, rating: 4.5, categoria: 'redes', imagem:'img/roteador.jpg' },
      { id: 'mnr-01', nome: 'Monitor 27 <br>QHD 165Hz', preco: 1899.00, antigo: 2199.00, rating: 4.7, categoria: 'perifericos', imagem:'img/monitor.jpg' },
      { id: 'mou-01', nome: 'Mouse Sem Fio<br> Ergonomico', preco: 149.90, antigo: 199.90, rating: 4.4, categoria: 'perifericos', imagem:'img/mouse.jpg' },
      { id: 'kb-01', nome: 'Teclado Mecânico<br> RGB', preco: 299.90, antigo: 399.90, rating: 4.6, categoria: 'perifericos', imagem:'img/TecladoMecanico.jpg' },
      
    ];

    // ======= Utilitários =======
    const R$ = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // ======= Render de Produtos =======
    const grid = document.getElementById('prod-grid');
    function iconeProduto(){
      
      return `<svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
       
        
        
      </svg>`;
    }

    function cardProduto(p){
      const el = document.createElement('article');
      el.className = 'card col-3 fade-in';
      el.dataset.nome = p.nome.toLowerCase();
      el.dataset.categoria = p.categoria;
      el.innerHTML = `
        
        <div class="card-content">
          <img src='${p.imagem||'img'}' alt='Imagem de ${p.nome}'>
          <class="produto-imagem">
       
          <div style="display:flex;justify-content:space-between;gap:8px;align-items:start">
            <strong>${p.nome}</strong>
            <span class="rating" aria-label="${p.rating} de 5">★ ${p.rating}</span>
          </div>
         
          <div>
            <span class="price" >${R$(p.preco)}</span>
            <span class="old-price">${R$(p.antigo)}</span>
          </div>
          <br>
          <div class="actions">
            <button class="btn" style="background: #7364ec; color: rgba(255, 255, 255, 1);" onclick='addCarrinho(${JSON.stringify(p.id)})'>Adicionar</button>
            <button class="btn" style="background: #7364ec; color: rgba(255, 255, 255, 1);" onclick='comprarAgora(${JSON.stringify(p.id)})'>Comprar</button>
          </div>
        </div>`;
      return el;
    }

    function renderProdutos(list){
      grid.innerHTML = '';
      list.forEach(p => grid.appendChild(cardProduto(p)));
    }

    renderProdutos(produtos);

    // ======= Busca & Categoria =======
    const busca = document.getElementById('busca');
    const botoesCategorias = document.getElementById('botoes-categorias');
    let filtroCategoria = 'todos';

    function aplicarFiltros(){
      const q = (busca.value||'').toLowerCase();
      const filtrados = produtos.filter(p => {
        const matchTexto = p.nome.toLowerCase().includes(q);
        const matchCat = filtroCategoria==='todos' || p.categoria===filtroCategoria;
        return matchTexto && matchCat;
      });
      renderProdutos(filtrados);
    }

    busca.addEventListener('input', aplicarFiltros);
    botoesCategorias.addEventListener('click', (e)=>{
      if(e.target.matches('[data-cat]')){
        filtroCategoria = e.target.dataset.cat;
        aplicarFiltros();
      }
    });

    // Atalhos de navegação
    document.getElementById('btn-servicos').addEventListener('click', ()=>{
      document.getElementById('servicos').scrollIntoView({behavior:'smooth'});
    });
    document.getElementById('btn-categorias').addEventListener('click', ()=>{
      document.getElementById('categorias').scrollIntoView({behavior:'smooth'});
    });

    // ======= Carrinho =======
    const drawer = document.getElementById('drawer-carrinho');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    // Use as funções de carrinho compartilhadas (definidas em carrinho.js)
    // Inicializa o estado do carrinho a partir da implementação comum
    let carrinho = (typeof getCarrinho === 'function') ? getCarrinho() : JSON.parse(localStorage.getItem('carrinho') || '[]');

    function salvarCarrinho(){
      if (typeof setCarrinho === 'function') setCarrinho(carrinho);
      else localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    // Se usuário clicar através deste script, delega para a implementação comum
    function addCarrinho(id){
      const prod = produtos.find(p => p.id === id);
      if(!prod) return;
      if (typeof adicionarProduto === 'function') {
        // carrinho.js já atualiza contador e salva
        adicionarProduto(prod.id, prod.nome, prod.preco);
      } else {
        const item = carrinho.find(i => i.id === id);
        if(item) item.qtd += 1; else carrinho.push({ id: prod.id, nome: prod.nome, preco: prod.preco, qtd: 1 });
        salvarCarrinho();
      }
      abrirCarrinho();
    }

    // Não sobrescrever implementações globais fornecidas por `carrinho.js`.
    if (typeof window.removerItem !== 'function') {
      window.removerItem = function(id){
        carrinho = carrinho.filter(i => i.id !== id);
        salvarCarrinho();
        atualizarCarrinho();
      }
    }

    if (typeof window.alterarQtd !== 'function') {
      window.alterarQtd = function(id, delta){
        const item = carrinho.find(i => i.id === id);
        if(!item) return;
        item.qtd += delta;
        if(item.qtd <= 0) window.removerItem(id);
        salvarCarrinho();
        atualizarCarrinho();
      }
    }

    function total(){ return carrinho.reduce((s,i)=> s + i.preco * i.qtd, 0); }

    function atualizarCarrinho(){
      cartItems.innerHTML = '';
      // Recarrega estado do storage para evitar divergência
      carrinho = (typeof getCarrinho === 'function') ? getCarrinho() : carrinho;
      carrinho.forEach(i => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
          <div style="width:48px;height:48px;border-radius:10px;background:rgba(255,255,255,.06);display:grid;place-items:center">🛒</div>
          <div class="meta">
            <div style="font-weight:600">${i.nome}</div>
            <div class="note">${R$(i.preco)} • Qtd: ${i.qtd}</div>
          </div>
          <div style="display:flex;gap:6px">
            <button class="btn" title="Diminuir" onclick='alterarQtd(${JSON.stringify(i.id)}, -1)'>−</button>
            <button class="btn" title="Aumentar" onclick='alterarQtd(${JSON.stringify(i.id)}, 1)'>+</button>
            <button class="btn" title="Remover" onclick='removerItem(${JSON.stringify(i.id)})'>×</button>
          </div>`;
        cartItems.appendChild(el);
      });
      cartCount.textContent = carrinho.reduce((s,i)=> s + i.qtd, 0);
      cartTotal.textContent = R$(total());
      // salva via API comum
      salvarCarrinho();
    }

    function abrirCarrinho(){ drawer.classList.add('open'); }
    function fecharCarrinho(){ drawer.classList.remove('open'); }

    document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-carrinho').addEventListener('click', abrirCarrinho);
    document.getElementById('fechar-carrinho').addEventListener('click', fecharCarrinho);
    document.getElementById('btn-limpar').addEventListener('click', ()=>{ carrinho = []; atualizarCarrinho(); });
    });

    // Ouve mudanças vindas de `carrinho.js` (ou de qualquer lugar que chame setCarrinho)
    window.addEventListener('carrinhoChanged', (e) => {
      // atualiza estado local e render
      carrinho = Array.isArray(e.detail) ? e.detail : (typeof getCarrinho === 'function' ? getCarrinho() : carrinho);
      atualizarCarrinho();
    });

    // Garantir contador atualizado na inicialização
    if (typeof atualizarContadorCarrinho === 'function') atualizarContadorCarrinho();


    function checkout(){
      // assegura estado atual do carrinho
      carrinho = (typeof getCarrinho === 'function') ? getCarrinho() : carrinho;
      if(!carrinho.length){ alert('Seu carrinho está vazio.'); return; }
      if(!usuarioLogado){ window.location.href = 'login.html'; return; }
      const compras = JSON.parse(localStorage.getItem('compras')||'[]');
      const order = {
        id: crypto.randomUUID(),
        usuario: usuarioLogado.email,
        // preserva imagem se disponível (i.img ou i.imagem) para exibição no admin
        itens: carrinho.map(i=>({id:i.id,nome:i.nome,preco:i.preco,qtd:i.qtd,img: i.img || i.imagem || ''})),
        total: total(),
        data: new Date().toISOString()
      };
      compras.push(order);
      localStorage.setItem('compras', JSON.stringify(compras));
      // Notifica listeners (ex: painel admin em outras abas) que houve uma nova compra
      try{ window.dispatchEvent(new CustomEvent('comprasChanged', { detail: compras })); }catch(e){}
      alert('Compra finalizada! Total: '+ R$(order.total));
      carrinho = []; atualizarCarrinho(); fecharCarrinho();
      carregarPerfil();
      if(usuarioLogado.tipo==='admin') carregarAdmin();
    }

    document.getElementById('btn-checkout').addEventListener('click', checkout);

    atualizarCarrinho();

    // ======= Agendamento =======
    const agendaKey = 'agendamentos';
    let agendamentos = JSON.parse(localStorage.getItem(agendaKey) || '[]');
    function salvarAgendamentos(){ localStorage.setItem(agendaKey, JSON.stringify(agendamentos)); }
    function horarioValido(dataISO, hora){
      const d = new Date(dataISO + 'T' + hora);
      const dia = d.getDay();
      const h = d.getHours();
      return dia !== 0 && h >= 9 && h <= 18;
    }
    function existeConflito(dataISO, hora){
      return agendamentos.some(a => a.data === dataISO && a.hora === hora);
    }
    const form = document.getElementById('form-agendamento');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const servico = document.getElementById('tipo-servico').value;
      const disp = document.getElementById('dispositivo').value.trim();
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const detalhes = document.getElementById('detalhes').value.trim();

      if(!horarioValido(data, hora)){
        alert('Selecione um horário válido (seg–sáb, 09:00–18:00).');
        return;
      }
      if(existeConflito(data, hora)){
        alert('Já existe um agendamento para este horário.');
        return;
      }

      const usuarioEmail = usuarioLogado?.email || email;
      const novo = { id: crypto.randomUUID(), servico, disp, data, hora, nome, email: usuarioEmail, telefone, detalhes };
      agendamentos.push(novo);
      salvarAgendamentos();
      renderAgendamentos();
      form.reset();
      alert('Agendamento confirmado!');
      carregarPerfil();
      if(usuarioLogado?.tipo==='admin') carregarAdmin();
    });

    function renderAgendamentos(){
      const box = document.getElementById('lista-agendamentos');
      if(!agendamentos.length){ box.textContent = 'Nenhum agendamento ainda.'; return; }
      const ul = document.createElement('ul');
      ul.style.listStyle = 'none'; ul.style.padding = '0';
      agendamentos
        .sort((a,b)=> (a.data+a.hora).localeCompare(b.data+b.hora))
        .forEach(a => {
          const li = document.createElement('li');
          li.style.marginBottom = '10px';
          li.innerHTML = `<strong>${a.data} • ${a.hora}</strong> — ${a.servico} (${a.disp})<br/><span class="note">Cliente: ${a.nome} — ${a.email || ''}</span> <button class="btn" style="margin-left:6px" onclick='cancelarAg(${JSON.stringify(a.id)})'>Cancelar</button>`;
          ul.appendChild(li);
        });
      box.innerHTML = '';
      box.appendChild(ul);
    }

    function cancelarAg(id){
      agendamentos = agendamentos.filter(a => a.id !== id);
      salvarAgendamentos();
      renderAgendamentos();
      carregarPerfil();
      if(usuarioLogado?.tipo==='admin') carregarAdmin();
    }

    document.getElementById('btn-limpar-ag').addEventListener('click', ()=>{
      if(confirm('Deseja limpar todos os agendamentos?')){
        agendamentos = []; salvarAgendamentos(); renderAgendamentos(); carregarPerfil(); if(usuarioLogado?.tipo==='admin') carregarAdmin();
      }
    });

    // Exportação básica .ics (calendário)
    function gerarICS(){
      const lines = [
        'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Loja Tech//Agendamentos//PT-BR'];
      agendamentos.forEach(a => {
        const dt = new Date(a.data + 'T' + a.hora);
        const dtStart = dt.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
        const dtEnd = new Date(dt.getTime()+60*60*1000).toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
        lines.push('BEGIN:VEVENT');
        lines.push('UID:' + a.id);
        lines.push('DTSTAMP:' + dtStart);
        lines.push('DTSTART:' + dtStart);
        lines.push('DTEND:' + dtEnd);
        lines.push('SUMMARY:' + a.servico + ' — ' + a.disp);
        lines.push('DESCRIPTION:Cliente ' + a.nome + (a.detalhes? (' — ' + a.detalhes.replace(/\n/g,' ')) : ''));
        lines.push('END:VEVENT');
      });
      lines.push('END:VCALENDAR');
      const blob = new Blob([lines.join('\n')], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'agendamentos.ics'; a.click();
      URL.revokeObjectURL(url);
    }
    document.getElementById('btn-exportar').addEventListener('click', gerarICS);

    // ======= Perfil & Admin (listas) =======
    function carregarPerfil(){
      if(!usuarioLogado){ document.getElementById('perfil').style.display='none'; return; }
      document.getElementById('perfil').style.display='block';
      const compras = JSON.parse(localStorage.getItem('compras')||'[]').filter(c=>c.usuario===usuarioLogado.email);
      const meusAg = (JSON.parse(localStorage.getItem(agendaKey)||'[]')).filter(a=>a.email===usuarioLogado.email);

      const boxC = document.getElementById('minhas-compras');
      if(!compras.length){ boxC.textContent = 'Nenhuma compra ainda.'; }
      else {
        boxC.innerHTML = compras.map(o=>{
          const itens = o.itens.map(i=> `${i.qtd}× ${i.nome}`).join(', ');
          return `<div class="pill" style="display:block;margin-bottom:6px">Pedido ${o.id.slice(0,8)} — ${new Date(o.data).toLocaleString('pt-BR')} — ${itens} • <strong>${R$(o.total)}</strong></div>`;
        }).join('');
      }

      const boxA = document.getElementById('meus-agendamentos');
      if(!meusAg.length){ boxA.textContent = 'Nenhum agendamento ainda.'; }
      else {
        boxA.innerHTML = meusAg.map(a=> `<div class="pill" style="display:block;margin-bottom:6px">${a.data} • ${a.hora} — ${a.servico} (${a.disp})</div>`).join('');
      }
    }

    function carregarAdmin(){
      if(!(usuarioLogado && usuarioLogado.tipo==='admin')){ document.getElementById('admin').style.display='none'; return; }
      document.getElementById('admin').style.display='block';
      const compras = JSON.parse(localStorage.getItem('compras')||'[]');
      const ags = JSON.parse(localStorage.getItem(agendaKey)||'[]');
      const boxC = document.getElementById('admin-compras');
      if(!compras.length){
        boxC.textContent = 'Nenhuma compra.';
      } else {
        boxC.innerHTML = compras.map(o=>{
          const itensHtml = o.itens.map(i=>`
            <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">
              ${i.img ? `<img src="${i.img}" alt="${i.nome}" style="width:64px;height:48px;object-fit:cover;border-radius:6px">` : `<div style="width:64px;height:48px;background:rgba(0,0,0,0.06);border-radius:6px;display:grid;place-items:center">🛒</div>`}
              <div style="flex:1">
                <div style="font-weight:600">${i.qtd}× ${i.nome}</div>
                <div class="note">${R$(i.preco)} cada</div>
              </div>
              <div style="min-width:100px;text-align:right;font-weight:700">${R$(i.preco * i.qtd)}</div>
            </div>`).join('');

          return `
            <div style="padding:12px;margin-bottom:12px;border-radius:8px;background:rgba(0,0,0,0.03)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <div><strong>${o.usuario}</strong> — Pedido ${o.id.slice(0,8)}</div>
                <div style="text-align:right">${new Date(o.data).toLocaleString('pt-BR')}<div style="font-weight:800;margin-top:4px">${R$(o.total)}</div></div>
              </div>
              <div>${itensHtml}</div>
            </div>`;
        }).join('');
      }

      const boxA = document.getElementById('admin-agendamentos');
      boxA.innerHTML = ags.length ? ags.sort((a,b)=> (a.data+a.hora).localeCompare(b.data+b.hora)).map(a=>
        `<div class="pill" style="display:block;margin-bottom:6px">${a.data} • ${a.hora} — ${a.servico} (${a.disp}) — <strong>${a.nome}</strong> &lt;${a.email}&gt;</div>`
      ).join('') : 'Nenhum agendamento.';
    }

    // Atualiza painel admin quando houver mudanças nas compras (ex: outra aba finalizou um pedido)
    window.addEventListener('comprasChanged', (e)=>{
      if(usuarioLogado && usuarioLogado.tipo==='admin') carregarAdmin();
    });

    // Botões Perfil/Admin
    const btnPerfil = document.getElementById('btn-perfil');
    const btnAdmin = document.getElementById('btn-admin');
    btnPerfil.addEventListener('click', ()=>{
      document.getElementById('perfil').scrollIntoView({behavior:'smooth'});
    });
    btnAdmin.addEventListener('click', ()=>{
      document.getElementById('admin').scrollIntoView({behavior:'smooth'});
    });

    // Ano no footer
    document.getElementById('ano').textContent = new Date().getFullYear();

    // Data mínima hoje no agendamento
    const hoje = new Date();
    const yyyy = hoje.getFullYear();
    const mm = String(hoje.getMonth()+1).padStart(2,'0');
    const dd = String(hoje.getDate()).padStart(2,'0');
    document.getElementById('data').min = `${yyyy}-${mm}-${dd}`;

    // Inicialização de UI conforme tipo de usuário
    function atualizarUIAuth(){
      document.getElementById('btn-perfil').style.display = usuarioLogado ? 'inline-block' : 'none';
      document.getElementById('btn-admin').style.display = (usuarioLogado && usuarioLogado.tipo==='admin') ? 'inline-block' : 'none';
    }

    // Sair
    document.getElementById('btn-sair').addEventListener('click', ()=>{
      localStorage.removeItem('usuarioLogado');
      window.location.href = 'login.html';
    });

    // Render inicial de agendamentos globais e áreas
    renderAgendamentos();
    atualizarUIAuth();
    if(usuarioLogado){ carregarPerfil(); if(usuarioLogado.tipo==='admin') carregarAdmin(); }
