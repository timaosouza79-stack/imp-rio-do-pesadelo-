// ============================================================
// storage.js — Persistência em LocalStorage
// ============================================================

const DB = {
  TRANSACOES:  'sf_transacoes',
  CATEGORIAS:  'sf_categorias_v2', // Chave atualizada para forçar reload dos novos ícones SVG
  CONTAS:      'sf_contas_v2',     // Atualizando também as contas para usar SVG
  MOEDA:       'sf_moeda',
};

// ── Helpers genéricos ─────────────────────────────────────
function _get(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
}
function _set(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

// ── Inicializar com dados padrão ──────────────────────────
function inicializarDados() {
  if (!localStorage.getItem(DB.CATEGORIAS)) {
    _set(DB.CATEGORIAS, CATEGORIAS_PADRAO);
  }
  if (!localStorage.getItem(DB.CONTAS)) {
    _set(DB.CONTAS, CONTAS_PADRAO);
  }
  if (!localStorage.getItem(DB.MOEDA)) {
    localStorage.setItem(DB.MOEDA, JSON.stringify(MOEDAS[0]));
  }
}

// ── Moeda ────────────────────────────────────────────────
function getMoeda() {
  try { return JSON.parse(localStorage.getItem(DB.MOEDA)) || MOEDAS[0]; }
  catch { return MOEDAS[0]; }
}
function setMoeda(moeda) {
  localStorage.setItem(DB.MOEDA, JSON.stringify(moeda));
}

// ── Transações ───────────────────────────────────────────
function getTransacoes() { return _get(DB.TRANSACOES); }

function addTransacao(transacao) {
  const lista = getTransacoes();
  transacao.id = Date.now().toString();
  lista.unshift(transacao);
  _set(DB.TRANSACOES, lista);
  return transacao;
}

function deleteTransacao(id) {
  const lista = getTransacoes().filter(t => t.id !== id);
  _set(DB.TRANSACOES, lista);
}

function getTransacoesPorMes(ano, mes) {
  return getTransacoes().filter(t => {
    const d = new Date(t.data);
    return d.getFullYear() === ano && d.getMonth() === mes;
  });
}

// ── Categorias ───────────────────────────────────────────
function getCategorias() { return _get(DB.CATEGORIAS); }

function addCategoria(cat) {
  const lista = getCategorias();
  cat.id = 'cat_' + Date.now();
  lista.push(cat);
  _set(DB.CATEGORIAS, lista);
  return cat;
}

function deleteCategoria(id) {
  const lista = getCategorias().filter(c => c.id !== id);
  _set(DB.CATEGORIAS, lista);
}

// ── Contas ───────────────────────────────────────────────
function getContas() { return _get(DB.CONTAS); }

function addConta(conta) {
  const lista = getContas();
  conta.id = 'conta_' + Date.now();
  lista.push(conta);
  _set(DB.CONTAS, lista);
  return conta;
}

function updateContaSaldo(id, delta) {
  const lista = getContas().map(c => {
    if (c.id === id) c.saldo = (c.saldo || 0) + delta;
    return c;
  });
  _set(DB.CONTAS, lista);
}

// ── Utilitários ──────────────────────────────────────────
function formatarValor(valor) {
  const moeda = getMoeda();
  return moeda.simbolo + ' ' + Number(valor).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function getCategoriaById(id) {
  return getCategorias().find(c => c.id === id) || { nome: 'Outros', icon: 'package', cor: '#7f8c8d' };
}

function getContaById(id) {
  return getContas().find(c => c.id === id) || { nome: 'Dinheiro', icon: 'dollar-sign' };
}
