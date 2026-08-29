// ============================================================
// chart.js — Gráfico de rosca (donut) com Canvas API
// ============================================================

function desenharDonut(canvasId, dados, total) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const cx = W / 2;
  const cy = H / 2;
  const raioExterno = Math.min(W, H) / 2 - 8;
  const raioInterno = raioExterno * 0.56;

  ctx.clearRect(0, 0, W, H);

  if (!dados || dados.length === 0 || total === 0) {
    // Círculo vazio
    ctx.beginPath();
    ctx.arc(cx, cy, raioExterno, 0, Math.PI * 2);
    ctx.arc(cx, cy, raioInterno, 0, Math.PI * 2, true);
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fill();

    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Sem dados', cx, cy);
    return;
  }

  let angulo = -Math.PI / 2;

  dados.forEach((item, i) => {
    const fatia = (item.valor / total) * Math.PI * 2;

    // Sombra suave
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 4;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, raioExterno, angulo, angulo + fatia);
    ctx.arc(cx, cy, raioInterno, angulo + fatia, angulo, true);
    ctx.closePath();
    ctx.fillStyle = item.cor;
    ctx.fill();

    ctx.shadowBlur = 0;

    // Linha divisória
    ctx.beginPath();
    ctx.moveTo(
      cx + raioInterno * Math.cos(angulo),
      cy + raioInterno * Math.sin(angulo)
    );
    ctx.lineTo(
      cx + raioExterno * Math.cos(angulo),
      cy + raioExterno * Math.sin(angulo)
    );
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    angulo += fatia;
  });

  // Buraco central com fundo
  ctx.beginPath();
  ctx.arc(cx, cy, raioInterno, 0, Math.PI * 2);
  ctx.fillStyle = '#2e2e2e';
  ctx.fill();

  // Texto central
  const moeda = getMoeda();
  const totalFmt = Number(total).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 13px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(moeda.simbolo + ' ' + totalFmt, cx, cy);
}

function calcularDadosDonut(transacoes, tipo) {
  const mapa = {};
  transacoes
    .filter(t => t.tipo === tipo)
    .forEach(t => {
      const cat = getCategoriaById(t.categoriaId);
      const key = t.categoriaId;
      if (!mapa[key]) {
        mapa[key] = { categoriaId: key, nome: cat.nome, icone: cat.icone, cor: cat.cor, valor: 0 };
      }
      mapa[key].valor += Number(t.valor);
    });
  return Object.values(mapa).sort((a, b) => b.valor - a.valor);
}
