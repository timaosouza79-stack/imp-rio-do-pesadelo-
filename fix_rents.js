const fs = require('fs');

const fileNames = ['game.js', 'tabuleiro.json'];

fileNames.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // For tabuleiro.json, it's just JSON. For game.js, we need to carefully replace the array.
    if (file === 'tabuleiro.json') {
        const data = JSON.parse(content);
        data.forEach(item => {
            if (item.tipo === 'propriedade' && item.preco && item.preco_melhoria) {
                const baseRent = Math.floor(item.preco * 0.5);
                item.alugueis = [
                    baseRent,
                    baseRent + item.preco_melhoria * 1,
                    baseRent + item.preco_melhoria * 2,
                    baseRent + item.preco_melhoria * 3,
                    baseRent + item.preco_melhoria * 4,
                    baseRent + item.preco_melhoria * 5
                ];
            }
        });
        fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Fixed ${file}`);
    } else {
        // game.js parsing
        // We'll extract the TABULEIRO part, parse it, modify it, and put it back.
        const startIdx = content.indexOf('const TABULEIRO = [');
        const endIdx = content.indexOf('const CARTAS_PANDORA = [');
        
        if (startIdx !== -1 && endIdx !== -1) {
            let tabuleiroStr = content.substring(startIdx + 'const TABULEIRO = '.length, endIdx);
            // remove trailing semicolon or comma
            tabuleiroStr = tabuleiroStr.replace(/;\s*$/, '').trim();
            
            try {
                const data = eval('(' + tabuleiroStr + ')');
                data.forEach(item => {
                    if (item.tipo === 'propriedade' && item.preco && item.preco_melhoria) {
                        const baseRent = Math.floor(item.preco * 0.5);
                        item.alugueis = [
                            baseRent,
                            baseRent + item.preco_melhoria * 1,
                            baseRent + item.preco_melhoria * 2,
                            baseRent + item.preco_melhoria * 3,
                            baseRent + item.preco_melhoria * 4,
                            baseRent + item.preco_melhoria * 5
                        ];
                    }
                });
                
                const newTabuleiroStr = JSON.stringify(data, null, 2);
                const finalContent = content.substring(0, startIdx) + 'const TABULEIRO = ' + newTabuleiroStr + ';\n\n' + content.substring(endIdx);
                fs.writeFileSync(file, finalContent, 'utf8');
                console.log(`Fixed ${file}`);
            } catch (e) {
                console.error('Error parsing TABULEIRO in game.js:', e);
            }
        }
    }
});
