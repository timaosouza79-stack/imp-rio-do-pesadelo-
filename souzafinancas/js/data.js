// ============================================================
// data.js — Categorias e dados padrão da app Souza Finanças
// ============================================================

const CATEGORIAS_PADRAO = [
  { id: 'alimentacao',  nome: 'Alimentação',  icone: '🛒', cor: '#e74c3c', tipo: 'despesa' },
  { id: 'transporte',   nome: 'Transporte',   icone: '🚗', cor: '#3498db', tipo: 'despesa' },
  { id: 'lazer',        nome: 'Lazer',        icone: '🍹', cor: '#9b59b6', tipo: 'despesa' },
  { id: 'saude',        nome: 'Saúde',        icone: '💊', cor: '#1abc9c', tipo: 'despesa' },
  { id: 'roupas',       nome: 'Roupas',       icone: '👕', cor: '#e67e22', tipo: 'despesa' },
  { id: 'pets',         nome: 'Pets',         icone: '🐱', cor: '#27ae60', tipo: 'despesa' },
  { id: 'educacao',     nome: 'Educação',     icone: '📚', cor: '#2980b9', tipo: 'despesa' },
  { id: 'moradia',      nome: 'Moradia',      icone: '🏠', cor: '#c0392b', tipo: 'despesa' },
  { id: 'taxi',         nome: 'Táxi/Uber',    icone: '🚕', cor: '#f39c12', tipo: 'despesa' },
  { id: 'metrô',        nome: 'Metrô/Ônibus', icone: '🚇', cor: '#8e44ad', tipo: 'despesa' },
  { id: 'outros_desp',  nome: 'Outros',       icone: '📦', cor: '#7f8c8d', tipo: 'despesa' },

  { id: 'salario',      nome: 'Salário',      icone: '💼', cor: '#2ecc71', tipo: 'receita' },
  { id: 'freelance',    nome: 'Freelance',    icone: '💻', cor: '#16a085', tipo: 'receita' },
  { id: 'investimento', nome: 'Investimento', icone: '📈', cor: '#27ae60', tipo: 'receita' },
  { id: 'outros_rec',   nome: 'Outros',       icone: '💰', cor: '#2ecc71', tipo: 'receita' },
];

const CONTAS_PADRAO = [
  { id: 'dinheiro', nome: 'Dinheiro',   icone: '💵', saldo: 0 },
  { id: 'cartao',   nome: 'Cartão',     icone: '💳', saldo: 0 },
  { id: 'poupanca', nome: 'Poupança',   icone: '🏦', saldo: 0 },
];

const MOEDAS = [
  { codigo: 'BRL', simbolo: 'R$',  nome: 'Real Brasileiro' },
  { codigo: 'EUR', simbolo: '€',   nome: 'Euro' },
  { codigo: 'USD', simbolo: 'US$', nome: 'Dólar Americano' },
];
