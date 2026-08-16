const fs = require('fs');
let code = fs.readFileSync('game.js', 'utf8');

code = code.replace(
    /btnYes\.onclick = \(\) => \{ div\.style\.display='none'; onYes\(\); \};/,
    `btnYes.onclick = () => { 
        div.style.display='none'; 
        if (sendSyncAction({ type: 'PC_YES' })) return;
        onYes(); 
        if (isHost) setTimeout(broadcastState, 100);
    };`
);

code = code.replace(
    /btnNo\.onclick = \(\) => \{ div\.style\.display='none'; onNo\(\); \};/,
    `btnNo.onclick = () => { 
        div.style.display='none'; 
        if (sendSyncAction({ type: 'PC_NO' })) return;
        onNo(); 
        if (isHost) setTimeout(broadcastState, 100);
    };`
);

// We also need to add executeSyncAction inside game.js
code = code.replace(
    /function executeSyncAction\(action\) \{[\s\S]*?\}/,
    `function executeSyncAction(action) {
    if (action.type === 'PC_YES') {
        const btn = document.getElementById('btn-pc-yes');
        if (btn) btn.click();
    } else if (action.type === 'PC_NO') {
        const btn = document.getElementById('btn-pc-no');
        if (btn) btn.click();
    }
}`
);

fs.writeFileSync('game.js', code);
