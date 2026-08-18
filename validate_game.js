const fs = require('fs');

try {
    const code = fs.readFileSync('game.js', 'utf8');
    
    // We can evaluate parts of the code to test arrays if we extract them, 
    // or just require it if we mock the browser environment.
    // Instead of full execution, let's just check for basic syntax errors using the Function constructor.
    try {
        new Function(code);
        console.log("✅ game.js has valid JavaScript syntax.");
    } catch (e) {
        console.error("❌ Syntax error in game.js:", e.message);
        process.exit(1);
    }

    // Let's extract TABULEIRO length
    const tabMatch = code.match(/const TABULEIRO = (\[[\s\S]*?\]);\n/);
    if (tabMatch) {
        const tabuleiro = eval(tabMatch[1]);
        console.log(`✅ TABULEIRO array found. Length: ${tabuleiro.length} tiles.`);
        if (tabuleiro.length !== 40) {
            console.warn(`⚠️ Warning: TABULEIRO length is ${tabuleiro.length}, not 40. Monopoly usually has 40.`);
        }
        
        let valid = true;
        tabuleiro.forEach((tile, index) => {
            if (!tile.nome || !tile.tipo) {
                console.error(`❌ Invalid tile at index ${index}:`, tile);
                valid = false;
            }
        });
        if (valid) console.log("✅ All tiles have 'nome' and 'tipo'.");
    } else {
        console.error("❌ Could not extract TABULEIRO.");
    }

} catch (e) {
    console.error("Error running script:", e);
}
