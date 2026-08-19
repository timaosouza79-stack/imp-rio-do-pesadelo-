const fs = require('fs');
const content = fs.readFileSync('game.js', 'utf8');
try {
    new Function(content);
    console.log("No syntax errors in game.js!");
} catch (e) {
    console.log("Syntax error: " + e.message);
}
