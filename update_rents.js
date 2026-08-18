const fs = require('fs');
const path = './game.js';

let content = fs.readFileSync(path, 'utf8');

// Find the TABULEIRO array
const startIdx = content.indexOf('const TABULEIRO = [');
const endIdx = content.indexOf('const CARTAS_PANDORA = [');

if (startIdx !== -1 && endIdx !== -1) {
    let tabuleiroStr = content.substring(startIdx, endIdx);
    
    // We can use a regex to match and replace alugueis arrays
    // Look for: "preco": 123, \n "alugueis": [X,
    // Note: there might be spaces.
    
    tabuleiroStr = tabuleiroStr.replace(/"preco":\s*(\d+),\s*"alugueis":\s*\[(\d+)/g, (match, preco, firstRent) => {
        const halfPrice = Math.floor(parseInt(preco) / 2);
        return `"preco": ${preco},\n    "alugueis": [${halfPrice}`;
    });

    const finalContent = content.substring(0, startIdx) + tabuleiroStr + content.substring(endIdx);
    fs.writeFileSync(path, finalContent, 'utf8');
    console.log('Successfully updated rents in game.js');
} else {
    console.log('Could not find TABULEIRO boundaries');
}
