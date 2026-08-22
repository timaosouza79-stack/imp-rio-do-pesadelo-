const fs = require('fs');
let code = fs.readFileSync('game.js', 'utf8');

// 1. onPayRent
let fromRent = `let al = casa.alugueis ? casa.alugueis[nivel] : Math.floor(casa.preco * 0.5);`;
let toRent = `let al = casa.alugueis ? casa.alugueis[nivel] : Math.floor(casa.preco * 0.5);
            let donoObj = jogadores.find(x => x.nome === casa.dono);
            let contextRent = window.triggerPerk(j, 'onPayRent', { valorOriginal: al, dono: donoObj, casa: casa });
            al = contextRent.newRent;
            if (al === 0) {
                if (!j.is_cpu) {
                    mostrarPropertyCard(casa, "Sua Habilidade Passiva evitou o aluguel!", encerrarTurno, encerrarTurno, "Uhu!", null);
                } else {
                    encerrarTurno();
                }
                return;
            }`;
code = code.replace(fromRent, toRent);


// 2. onBuyProperty
let fromBuy = `j.dinheiro -= preco;
        casa.dono = j.nome;`;
let toBuy = `j.dinheiro -= preco;
        casa.dono = j.nome;
        window.triggerPerk(j, 'onBuyProperty', { casa: casa });`;
code = code.replace(fromBuy, toBuy);


// 3. onLand
let fromLand = `function aplicarRegraRestante(j, casa) {`;
let toLand = `function aplicarRegraRestante(j, casa) {
    window.triggerPerk(j, 'onLand', { casa: casa });`;
code = code.replace(fromLand, toLand);


// 4. onCrossStart
let fromCrossStart = `j.dinheiro += 200;
            logMsg(\`💰 \${j.nome} completou uma volta e recebeu $200!\`);`;
let toCrossStart = `let startCtx = window.triggerPerk(j, 'onCrossStart', { salary: 200 });
            j.dinheiro += startCtx.salary;
            if (startCtx.salary > 0) logMsg(\`💰 \${j.nome} completou uma volta e recebeu $\${startCtx.salary}!\`);`;
code = code.replace(fromCrossStart, toCrossStart);


// 5. onJail (na regra)
let fromJail1 = `if (casa.tipo === "va_para_prisao") {
        j.posicao = INDICE_PRISAO;
        j.preso = true;
        j.turnos_preso = 0;`;
let toJail1 = `if (casa.tipo === "va_para_prisao") {
        let jailCtx = window.triggerPerk(j, 'onJail', {});
        if (jailCtx.prevented) {
             encerrarTurno();
             return;
        }
        j.posicao = INDICE_PRISAO;
        j.preso = true;
        j.turnos_preso = 0;
        if (jailCtx.jigsawAttempt) j.preso = true; // manteremos a logica do jigsaw depois na rolarDados`;
code = code.replace(fromJail1, toJail1);

// onJail (3 duplas)
let fromJail2 = `if (j.duplasCount >= 3) {
            j.duplasCount = 0;
            logMsg(\`🚨 \${j.nome} tirou 3 duplas seguidas! Vai para a Prisão!\`);
            j.posicao = INDICE_PRISAO;
            j.preso = true;`;
let toJail2 = `if (j.duplasCount >= 3) {
            j.duplasCount = 0;
            let jailCtx2 = window.triggerPerk(j, 'onJail', {});
            if (jailCtx2.prevented) {
                 logMsg(\`🚨 \${j.nome} tirou 3 duplas mas é IMUNE!\`);
                 encerrarTurno();
                 return;
            }
            logMsg(\`🚨 \${j.nome} tirou 3 duplas seguidas! Vai para a Prisão!\`);
            j.posicao = INDICE_PRISAO;
            j.preso = true;`;
code = code.replace(fromJail2, toJail2);


// 6. onDrawPandora
let fromPandora = `if (carta.valor_alteracao !== 0) {
            j.dinheiro += carta.valor_alteracao;`;
let toPandora = `if (carta.valor_alteracao !== 0) {
            let pandoraCtx = window.triggerPerk(j, 'onDrawPandora', { valorAlteracao: carta.valor_alteracao, carta: carta });
            j.dinheiro += pandoraCtx.newValor;`;
code = code.replace(fromPandora, toPandora);


// 7. onOferenda
let fromOferenda = `} else if (casa.tipo === "oferenda") {
        SoundFX.playOferenda();
        j.dinheiro -= 100;`;
let toOferenda = `} else if (casa.tipo === "oferenda") {
        SoundFX.playOferenda();
        let ofCtx = window.triggerPerk(j, 'onOferenda', { valorOriginal: 100 });
        j.dinheiro -= ofCtx.newValor;`;
code = code.replace(fromOferenda, toOferenda);

fs.writeFileSync('game.js', code);
console.log('Hooks injected successfully!');
