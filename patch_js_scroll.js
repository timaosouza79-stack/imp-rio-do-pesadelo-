const fs = require('fs');
let code = fs.readFileSync('game.js', 'utf8');

code = code.replace(
    /document\.getElementById\('setup-modal'\)\.style\.display = 'none';\s*document\.getElementById\('ui-container'\)\.style\.display = 'flex';/,
    `document.getElementById('setup-modal').style.display = 'none';
    document.getElementById('ui-container').style.display = 'flex';
    
    // Centraliza o scroll do tabuleiro no mobile
    setTimeout(() => {
        const boardContainer = document.getElementById('board-container');
        const boardGrid = document.getElementById('board-grid');
        if (boardContainer && boardGrid) {
            boardContainer.scrollLeft = (boardGrid.offsetWidth - boardContainer.clientWidth) / 2;
            boardContainer.scrollTop = (boardGrid.offsetHeight - boardContainer.clientHeight) / 2;
        }
    }, 100);`
);

// We should also patch handleHostMessage for GAME_START so clients center their boards too
code = code.replace(
    /document\.getElementById\('setup-modal'\)\.style\.display = 'none';\s*document\.getElementById\('ui-container'\)\.style\.display = 'flex';/g,
    `document.getElementById('setup-modal').style.display = 'none';
        document.getElementById('ui-container').style.display = 'flex';
        
        setTimeout(() => {
            const boardContainer = document.getElementById('board-container');
            const boardGrid = document.getElementById('board-grid');
            if (boardContainer && boardGrid) {
                boardContainer.scrollLeft = (boardGrid.offsetWidth - boardContainer.clientWidth) / 2;
                boardContainer.scrollTop = (boardGrid.offsetHeight - boardContainer.clientHeight) / 2;
            }
        }, 100);`
);

fs.writeFileSync('game.js', code);
