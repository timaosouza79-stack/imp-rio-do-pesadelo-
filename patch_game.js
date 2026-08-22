const fs = require('fs');

let code = fs.readFileSync('game.js', 'utf8');

// 1. Refatorar rolarDados
code = code.replace(
    /function rolarDados\(\) \{[\s\S]*?(?=function aplicarRegra)/m,
    `function rolarDados() {
    const btnRolar = document.getElementById('btn-rolar');
    if (btnRolar) btnRolar.style.display = 'none';

    if (isOnline) {
        if (isHost && idxJogador === myPlayerIdx) {
            const d1 = Math.floor(Math.random() * 6) + 1;
            const d2 = Math.floor(Math.random() * 6) + 1;
            broadcastToClients({ type: 'DICE_ROLL', d1, d2 });
            animateAndMove(d1, d2);
        } else if (!isHost && idxJogador === myPlayerIdx) {
            hostConnection.send({ type: 'REQUEST_ROLL' });
        }
    } else {
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        animateAndMove(d1, d2);
    }
}

function animateAndMove(d1, d2) {
    const j = jogadores[idxJogador];
    const diceContainer = document.getElementById('dice-container');
    const d1El = document.getElementById('dice-1');
    const d2El = document.getElementById('dice-2');

    if (diceContainer) diceContainer.style.display = 'flex';
    if (d1El) d1El.classList.add('rolling');
    if (d2El) d2El.classList.add('rolling');

    setTimeout(() => {
        if (d1El) d1El.classList.remove('rolling');
        if (d2El) d2El.classList.remove('rolling');

        renderDice(d1El, d1);
        renderDice(d2El, d2);

        const total = d1 + d2;
        const duplas = d1 === d2;

        if (duplas) {
            j.duplas_seguidas = (j.duplas_seguidas || 0) + 1;
        } else {
            j.duplas_seguidas = 0;
        }

        if (j.duplas_seguidas === 3) {
            logMsg(\`🚓 3 DUPLAS SEGUIDAS! \${j.nome} foi para o Arkham!\`);
            j.duplas_seguidas = 0;
            j.posicao = INDICE_PRISAO;
            j.preso = true;
            j.turnos_preso = 0;
            updateUI();
            encerrarTurno();
        } else {
            logMsg(\`🎲 \${j.nome} (\${j.charNome}) rolou \${d1} + \${d2} = \${total}\`);
            
            if (j.preso) {
                if (duplas) {
                    logMsg(\`🔓 \${j.nome} tirou DUPLAS e escapou do Arkham!\`);
                    j.preso = false;
                    j.turnos_preso = 0;
                } else {
                    logMsg(\`🔒 \${j.nome} não tirou duplas e continua preso.\`);
                    setTimeout(encerrarTurno, 1000);
                    return;
                }
            }

            let passos = total;
            const stepTimer = setInterval(() => {
                j.posicao = (j.posicao + 1) % TABULEIRO.length;
                if (j.posicao === 0) {
                    j.dinheiro += 200;
                    logMsg(\`🌀 \${j.nome} cruzou o Portal e recebeu $200!\`);
                }
                updateUI();
                passos--;
                if (passos <= 0) {
                    clearInterval(stepTimer);
                    setTimeout(aplicarRegra, 400);
                }
            }, 180);
        }
    }, 70);
}

`
);

// 2. Modificar iniciarJogo
code = code.replace(
    /function iniciarJogo\(humanos, cpus, chosenHumanChars, chosenHumanNames\) \{[\s\S]*?logMsg\(\`🎮 Partida iniciada/,
    `function iniciarJogo(humanos, cpus, chosenHumanChars, chosenHumanNames) {
    jogadores = [];
    const pool = [...PERSONAGENS_JOGADORES];
    
    let count = 0;
    for(let i=0; i<humanos; i++) {
        const originalChar = PERSONAGENS_JOGADORES[chosenHumanChars[i]];
        const poolIndex = pool.findIndex(c => c.charNome === originalChar.charNome);
        if (poolIndex > -1) pool.splice(poolIndex, 1);
        const playerName = (chosenHumanNames && chosenHumanNames[i]) ? chosenHumanNames[i] : \`Jogador \${i+1}\`;
        jogadores.push(new Jogador(playerName, false, originalChar, count++));
    }
    
    for(let i=0; i<cpus; i++) {
        const char = pool.length > 0 ? pool.shift() : PERSONAGENS_JOGADORES[count % PERSONAGENS_JOGADORES.length];
        jogadores.push(new Jogador(\`CPU \${i+1}\`, true, char, count++));
    }

    if (isOnline && isHost) {
        clientConnections.forEach((conn, index) => {
            conn.send({
                type: 'GAME_START',
                myPlayerIdx: index + 1,
                jogadores: jogadores,
                tabuleiro: TABULEIRO
            });
        });
    }
    
    document.getElementById('setup-modal').style.display = 'none';
    document.getElementById('ui-container').style.display = 'flex';
    
    logMsg(\`🎮 Partida iniciada`
);

// Write back
fs.writeFileSync('game.js', code);
