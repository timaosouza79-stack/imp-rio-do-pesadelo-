const fs = require('fs');
let code = fs.readFileSync('style.css', 'utf8');

// Modifica #board-container no mobile
code = code.replace(
    /display: flex !important;\s*align-items: flex-start !important;\s*justify-content: center !important;/g,
    `display: flex !important;
        align-items: center !important;
        justify-content: flex-start !important; /* Evita corte à esquerda quando transborda */`
);

fs.writeFileSync('style.css', code);
