const fs = require('fs');
let code = fs.readFileSync('game.js', 'utf8');

// Adiciona global
code = code.replace(
    /let estado = "INIT";/,
    `let estado = "INIT";\nlet currentPandoraIdx = 0;`
);

// Atualiza rolarDados para gerar e usar pandoraIdx
code = code.replace(
    /broadcastToClients\(\{ type: 'DICE_ROLL', d1, d2 \}\);/,
    `const pIdx = Math.floor(Math.random() * CARTAS_PANDORA.length);
            currentPandoraIdx = pIdx;
            broadcastToClients({ type: 'DICE_ROLL', d1, d2, pandoraIdx: pIdx });`
);

code = code.replace(
    /animateAndMove\(d1, d2\);/,
    `currentPandoraIdx = Math.floor(Math.random() * CARTAS_PANDORA.length);
        animateAndMove(d1, d2);`
);

code = code.replace(
    /animateAndMove\(data\.d1, data\.d2\);/,
    `currentPandoraIdx = data.pandoraIdx || 0;
        animateAndMove(data.d1, data.d2);`
);

// Atualiza o uso em aplicarRegraRestante
code = code.replace(
    /const c = CARTAS_PANDORA\[Math\.floor\(Math\.random\(\) \* CARTAS_PANDORA\.length\)\];/,
    `const c = CARTAS_PANDORA[currentPandoraIdx];`
);

fs.writeFileSync('game.js', code);
