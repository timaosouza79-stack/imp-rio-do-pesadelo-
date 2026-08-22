const fs = require('fs');
const content = fs.readFileSync('game.js', 'utf8');

// Extrai as configurações
const tabuleiroMatch = content.match(/const TABULEIRO = (\[[\s\S]*?\]);\n/);
const tabuleiro = eval(tabuleiroMatch[1]);

const getTileImgKeyStr = content.match(/function getTileImgKey\(casa, index\) \{([\s\S]*?)\}/)[1];
const getTileImgKey = new Function('casa', 'index', getTileImgKeyStr);

const urlsMatch = content.match(/const URLS_VIDEOS = (\{[\s\S]*?\});/);
const urls = eval('(' + urlsMatch[1] + ')');

let missing = [];
tabuleiro.forEach((c, i) => {
    const key = getTileImgKey(c, i);
    if (!key || !urls[key]) {
        missing.push(c.nome);
    }
});

console.log("Missing videos for:", missing);
