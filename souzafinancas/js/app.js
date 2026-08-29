// ============================================================
// app.js — Lógica principal da UI
// ============================================================

// ── Estado global ─────────────────────────────────────────
let estado = {
  mesAtual: new Date().getMonth(),
  anoAtual: new Date().getFullYear(),
  tipoAtivo: 'despesa',   // 'despesa' | 'receita'
  paginaAtiva: 'inicio',  // 'inicio' | 'categorias' | 'contas' | 'historico'
};

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  inicializarDados();
  renderizarApp();
  bindEventos();
});

function renderizarApp() {
  atualizarPeriodoLabel();
  renderizarPaginaAtiva();
}

// ── Navegação de páginas ──────────────────────────────────
function renderizarPaginaAtiva() {
  document.querySelectorAll('.pagina').forEach(p => p.classList.add('hidden'));
  const pagina = document.getElementById('pagina-' + estado.paginaAtiva);
  if (pagina) pagina.classList.remove('hidden');

  switch (estado.paginaAtiva) {
    case 'inicio':     renderizarInicio();    break;
    case 'categorias': renderizarCategorias(); break;
    case 'contas':     renderizarContas();    break;
    case 'historico':  renderizarHistorico(); break;
  }
}

function navegarPara(pagina) {
  estado.paginaAtiva = pagina;
  fecharDrawer();
  renderizarPaginaAtiva();
}

// ── Página Início ─────────────────────────────────────────
function renderizarInicio() {
  const transacoes = getTransacoesPorMes(estado.anoAtual, estado.mesAtual);
  const dados = calcularDadosDonut(transacoes, estado.tipoAtivo);
  const total = dados.reduce((s, d) => s + d.valor, 0);

  desenharDonut('donut-canvas', dados, total);
  renderizarCategoriasGrid(dados);
  atualizarSaldoBar(transacoes);
}

function renderizarCategoriasGrid(dados) {
  const grid = document.getElementById('categorias-grid');
  if (!grid) return;
  grid.innerHTML = '';

  if (dados.length === 0) {
    grid.innerHTML = '<p class="sem-dados">Nenhuma transação este mês.</p>';
    return;
  }

  const total = dados.reduce((s, d) => s + d.valor, 0);

  dados.forEach(item => {
    const pct = total > 0 ? Math.round((item.valor / total) * 100) : 0;
    const div = document.createElement('div');
    div.className = 'cat-item';
    div.style.setProperty('--cat-cor', item.cor);
    div.innerHTML = `
      <span class="cat-icone">${item.icone}</span>
      <span class="cat-nome">${item.nome}</span>
      <span class="cat-pct">${pct}%</span>
    `;
    div.addEventListener('click', () => abrirDetalheCategoria(item));
    grid.appendChild(div);
  });
}

function atualizarSaldoBar(transacoes) {
  const receitas = transacoes.filter(t => t.tipo === 'receita').reduce((s, t) => s + Number(t.valor), 0);
  const despesas = transacoes.filter(t => t.tipo === 'despesa').reduce((s, t) => s + Number(t.valor), 0);
  const saldo = receitas - despesas;

  const elSaldo = document.getElementById('saldo-valor');
  const elBar = document.getElementById('saldo-bar');
  if (elSaldo) {
    elSaldo.textContent = formatarValor(Math.abs(saldo));
    elSaldo.className = saldo >= 0 ? 'positivo' : 'negativo';
  }
  if (elBar) {
    elBar.className = 'saldo-bar ' + (saldo >= 0 ? 'positivo' : 'negativo');
  }

  // Resumo receita/despesa
  const elReceita = document.getElementById('resumo-receita');
  const elDespesa = document.getElementById('resumo-despesa');
  if (elReceita) elReceita.textContent = formatarValor(receitas);
  if (elDespesa) elDespesa.textContent = formatarValor(despesas);
}

// ── Período (mês) ─────────────────────────────────────────
function atualizarPeriodoLabel() {
  const el = document.getElementById('periodo-label');
  if (!el) return;
  const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  el.textContent = meses[estado.mesAtual] + ' ' + estado.anoAtual;
}

function mesAnterior() {
  if (estado.mesAtual === 0) { estado.mesAtual = 11; estado.anoAtual--; }
  else estado.mesAtual--;
  atualizarPeriodoLabel();
  renderizarPaginaAtiva();
}

function mesSeguinte() {
  if (estado.mesAtual === 11) { estado.mesAtual = 0; estado.anoAtual++; }
  else estado.mesAtual++;
  atualizarPeriodoLabel();
  renderizarPaginaAtiva();
}

// ── Drawer ────────────────────────────────────────────────
function abrirDrawer() {
  document.getElementById('drawer').classList.add('aberto');
  document.getElementById('overlay-drawer').classList.add('visivel');
}
function fecharDrawer() {
  document.getElementById('drawer').classList.remove('aberto');
  document.getElementById('overlay-drawer').classList.remove('visivel');
}

// ── Modal Transação ───────────────────────────────────────
function abrirModal(tipo) {
  estado.tipoAtivo = tipo;
  document.getElementById('modal-tipo').textContent = tipo === 'despesa' ? '− Despesa' : '+ Receita';
  document.getElementById('modal-tipo').className = 'modal-tipo-badge ' + tipo;
  document.getElementById('modal-data').value = new Date().toISOString().split('T')[0];
  popularSelectCategorias(tipo);
  popularSelectContas();
  document.getElementById('modal-transacao').classList.add('visivel');
  document.getElementById('overlay-modal').classList.add('visivel');
  document.getElementById('modal-valor').value = '';
  document.getElementById('modal-nota').value = '';
  document.getElementById('modal-valor').focus();
}

function fecharModal() {
  document.getElementById('modal-transacao').classList.remove('visivel');
  document.getElementById('overlay-modal').classList.remove('visivel');
}

function popularSelectCategorias(tipo) {
  const sel = document.getElementById('modal-categoria');
  const cats = getCategorias().filter(c => c.tipo === tipo);
  sel.innerHTML = cats.map(c =>
    `<option value="${c.id}">${c.icone} ${c.nome}</option>`
  ).join('');
}

function popularSelectContas() {
  const sel = document.getElementById('modal-conta');
  const contas = getContas();
  sel.innerHTML = contas.map(c =>
    `<option value="${c.id}">${c.icone} ${c.nome}</option>`
  ).join('');
}

function salvarTransacao() {
  const valorStr = document.getElementById('modal-valor').value.replace(',', '.');
  const valor = parseFloat(valorStr);
  if (!valor || valor <= 0) {
    shake(document.getElementById('modal-valor'));
    return;
  }
  const transacao = {
    tipo:        estado.tipoAtivo,
    valor:       valor,
    categoriaId: document.getElementById('modal-categoria').value,
    contaId:     document.getElementById('modal-conta').value,
    data:        document.getElementById('modal-data').value,
    nota:        document.getElementById('modal-nota').value.trim(),
  };
  addTransacao(transacao);
  fecharModal();
  renderizarApp();

  // Feedback visual
  mostrarToast('Transação guardada! ✓');
}

// ── Página Categorias ─────────────────────────────────────
function renderizarCategorias() {
  const lista = document.getElementById('lista-categorias');
  if (!lista) return;
  const cats = getCategorias();
  lista.innerHTML = '';

  ['despesa', 'receita'].forEach(tipo => {
    const titulo = document.createElement('h3');
    titulo.className = 'secao-titulo';
    titulo.textContent = tipo === 'despesa' ? '🔴 Despesas' : '🟢 Receitas';
    lista.appendChild(titulo);

    cats.filter(c => c.tipo === tipo).forEach(cat => {
      const div = document.createElement('div');
      div.className = 'lista-item';
      div.style.setProperty('--cat-cor', cat.cor);
      div.innerHTML = `
        <span class="li-icone" style="background:${cat.cor}">${cat.icone}</span>
        <span class="li-nome">${cat.nome}</span>
        <button class="li-del" onclick="confirmarDeleteCategoria('${cat.id}')">🗑</button>
      `;
      lista.appendChild(div);
    });
  });
}

function confirmarDeleteCategoria(id) {
  if (confirm('Eliminar esta categoria?')) {
    deleteCategoria(id);
    renderizarCategorias();
    mostrarToast('Categoria eliminada.');
  }
}

function abrirModalNovaCategoria() {
  document.getElementById('modal-nova-cat').classList.add('visivel');
  document.getElementById('overlay-modal').classList.add('visivel');
}

function fecharModalNovaCategoria() {
  document.getElementById('modal-nova-cat').classList.remove('visivel');
  document.getElementById('overlay-modal').classList.remove('visivel');
}

function salvarNovaCategoria() {
  const nome = document.getElementById('nova-cat-nome').value.trim();
  const icone = document.getElementById('nova-cat-icone').value.trim() || '📦';
  const cor = document.getElementById('nova-cat-cor').value;
  const tipo = document.getElementById('nova-cat-tipo').value;
  if (!nome) { shake(document.getElementById('nova-cat-nome')); return; }
  addCategoria({ nome, icone, cor, tipo });
  fecharModalNovaCategoria();
  renderizarCategorias();
  mostrarToast('Categoria criada! ✓');
}

// ── Página Contas ─────────────────────────────────────────
function renderizarContas() {
  const lista = document.getElementById('lista-contas');
  if (!lista) return;
  const contas = getContas();
  lista.innerHTML = '';

  contas.forEach(conta => {
    const div = document.createElement('div');
    div.className = 'lista-item conta-item';
    div.innerHTML = `
      <span class="li-icone">${conta.icone}</span>
      <span class="li-nome">${conta.nome}</span>
      <span class="li-saldo ${conta.saldo >= 0 ? 'positivo' : 'negativo'}">${formatarValor(conta.saldo || 0)}</span>
    `;
    lista.appendChild(div);
  });
}

// ── Página Histórico ──────────────────────────────────────
function renderizarHistorico() {
  const lista = document.getElementById('lista-historico');
  if (!lista) return;
  const transacoes = getTransacoesPorMes(estado.anoAtual, estado.mesAtual);
  lista.innerHTML = '';

  if (transacoes.length === 0) {
    lista.innerHTML = '<p class="sem-dados">Nenhuma transação este mês.</p>';
    return;
  }

  transacoes.forEach(t => {
    const cat = getCategoriaById(t.categoriaId);
    const conta = getContaById(t.contaId);
    const data = new Date(t.data + 'T12:00:00');
    const dataFmt = data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
    const div = document.createElement('div');
    div.className = 'hist-item';
    div.innerHTML = `
      <span class="hist-icone" style="background:${cat.cor}">${cat.icone}</span>
      <div class="hist-info">
        <span class="hist-cat">${cat.nome}</span>
        <span class="hist-detalhe">${conta.nome} · ${dataFmt}</span>
        ${t.nota ? `<span class="hist-nota">${t.nota}</span>` : ''}
      </div>
      <div class="hist-right">
        <span class="hist-val ${t.tipo}">${t.tipo === 'receita' ? '+' : '−'} ${formatarValor(t.valor)}</span>
        <button class="hist-del" onclick="confirmarDeleteTransacao('${t.id}')">×</button>
      </div>
    `;
    lista.appendChild(div);
  });
}

function confirmarDeleteTransacao(id) {
  if (confirm('Eliminar esta transação?')) {
    deleteTransacao(id);
    renderizarHistorico();
    renderizarInicio();
    mostrarToast('Transação eliminada.');
  }
}

// ── Detalhe Categoria (modal info) ───────────────────────
function abrirDetalheCategoria(item) {
  const transacoes = getTransacoesPorMes(estado.anoAtual, estado.mesAtual)
    .filter(t => t.categoriaId === item.categoriaId);
  const total = transacoes.reduce((s, t) => s + Number(t.valor), 0);

  document.getElementById('det-titulo').textContent = item.icone + ' ' + item.nome;
  document.getElementById('det-total').textContent = formatarValor(total);
  document.getElementById('det-qtd').textContent = transacoes.length + ' transações';

  const lista = document.getElementById('det-lista');
  lista.innerHTML = '';
  transacoes.forEach(t => {
    const conta = getContaById(t.contaId);
    const data = new Date(t.data + 'T12:00:00');
    const dataFmt = data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
    const li = document.createElement('div');
    li.className = 'det-item';
    li.innerHTML = `
      <span>${dataFmt} · ${conta.nome}</span>
      <span>${t.nota || ''}</span>
      <span class="hist-val ${t.tipo}">${formatarValor(t.valor)}</span>
    `;
    lista.appendChild(li);
  });

  document.getElementById('modal-detalhe').classList.add('visivel');
  document.getElementById('overlay-modal').classList.add('visivel');
}

function fecharDetalhe() {
  document.getElementById('modal-detalhe').classList.remove('visivel');
  document.getElementById('overlay-modal').classList.remove('visivel');
}

// ── Utilitários UI ────────────────────────────────────────
function mostrarToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('visivel');
  setTimeout(() => t.classList.remove('visivel'), 2500);
}

function shake(el) {
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 400);
}

// ── Bind eventos ──────────────────────────────────────────
function bindEventos() {
  // Drawer
  document.getElementById('btn-menu').addEventListener('click', abrirDrawer);
  document.getElementById('overlay-drawer').addEventListener('click', fecharDrawer);

  // Overlay modal (fecha qualquer modal)
  document.getElementById('overlay-modal').addEventListener('click', () => {
    fecharModal();
    fecharModalNovaCategoria();
    fecharDetalhe();
  });

  // Botões FAB (+ / -)
  document.getElementById('btn-fab-despesa').addEventListener('click', () => abrirModal('despesa'));
  document.getElementById('btn-fab-receita').addEventListener('click', () => abrirModal('receita'));

  // Modal transação
  document.getElementById('btn-salvar-transacao').addEventListener('click', salvarTransacao);
  document.getElementById('btn-fechar-modal').addEventListener('click', fecharModal);

  // Navegação período
  document.getElementById('btn-mes-ant').addEventListener('click', mesAnterior);
  document.getElementById('btn-mes-seg').addEventListener('click', mesSeguinte);

  // Tabs tipo (despesa/receita)
  document.querySelectorAll('.tab-tipo').forEach(btn => {
    btn.addEventListener('click', () => {
      estado.tipoAtivo = btn.dataset.tipo;
      document.querySelectorAll('.tab-tipo').forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      if (estado.paginaAtiva === 'inicio') renderizarInicio();
    });
  });

  // Drawer links
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => navegarPara(el.dataset.nav));
  });

  // Back buttons
  document.querySelectorAll('.btn-back').forEach(btn => {
    btn.addEventListener('click', () => navegarPara('inicio'));
  });

  // Nova categoria
  document.getElementById('btn-nova-cat')?.addEventListener('click', abrirModalNovaCategoria);
  document.getElementById('btn-salvar-cat')?.addEventListener('click', salvarNovaCategoria);
  document.getElementById('btn-fechar-nova-cat')?.addEventListener('click', fecharModalNovaCategoria);

  // Fechar detalhe
  document.getElementById('btn-fechar-det')?.addEventListener('click', fecharDetalhe);

  // Teclado: Enter no campo valor
  document.getElementById('modal-valor')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') salvarTransacao();
  });
}
