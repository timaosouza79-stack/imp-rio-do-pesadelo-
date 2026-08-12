const TABULEIRO = [
  {
    "nome": "Portal do Multiverso",
    "tipo": "especial"
  },
  {
    "nome": "Quarto de Arte - Annabelle",
    "tipo": "propriedade",
    "preco": 60,
    "alugueis": [
      2,
      10,
      30,
      90,
      160,
      250
    ],
    "melhorias": 0,
    "nome_melhoria": "Símbolos Ocultos",
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Fábrica Good Guys - Chucky",
    "tipo": "propriedade",
    "preco": 60,
    "alugueis": [
      4,
      20,
      60,
      180,
      320,
      450
    ],
    "melhorias": 0,
    "nome_melhoria": "Caixas de Bonecos",
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Imposto de Renda",
    "tipo": "imposto",
    "valor": 200
  },
  {
    "nome": "Máquina do Tempo DeLorean",
    "tipo": "transporte",
    "preco": 200,
    "alugueis": [
      25,
      50,
      100,
      200,
      200,
      200
    ],
    "melhorias": 0,
    "nome_melhoria": "Capacitores",
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Bates Motel - Psicose",
    "tipo": "propriedade",
    "preco": 100,
    "alugueis": [
      6,
      30,
      90,
      270,
      400,
      550
    ],
    "melhorias": 0,
    "nome_melhoria": "Chaves de Quarto",
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Cabana na Floresta - Evil Dead",
    "tipo": "propriedade",
    "preco": 100,
    "alugueis": [
      6,
      30,
      90,
      270,
      400,
      550
    ],
    "melhorias": 0,
    "nome_melhoria": "Motosserras",
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Silent Hill",
    "tipo": "propriedade",
    "preco": 120,
    "alugueis": [
      8,
      40,
      100,
      300,
      450,
      600
    ],
    "melhorias": 0,
    "nome_melhoria": "Rádios com Estática",
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Asilo Arkham",
    "tipo": "prisao"
  },
  {
    "nome": "Laboratório Hawkins - Stranger Things",
    "tipo": "propriedade",
    "preco": 140,
    "alugueis": [
      10,
      50,
      150,
      450,
      625,
      750
    ],
    "melhorias": 0,
    "nome_melhoria": "Fitas K7",
    "preco_melhoria": 100,
    "dono": null
  },
  {
    "nome": "Companhia de Energia Elétrica",
    "tipo": "servico",
    "preco": 150,
    "alugueis": [
      10,
      25,
      50,
      100,
      150,
      200
    ],
    "melhorias": 0,
    "nome_melhoria": "Geradores",
    "preco_melhoria": 75,
    "dono": null
  },
  {
    "nome": "Mundo Invertido - Stranger Things",
    "tipo": "propriedade",
    "preco": 140,
    "alugueis": [
      10,
      50,
      150,
      450,
      625,
      750
    ],
    "melhorias": 0,
    "nome_melhoria": "Demogorgons",
    "preco_melhoria": 100,
    "dono": null
  },
  {
    "nome": "Castelo do Drácula",
    "tipo": "propriedade",
    "preco": 160,
    "alugueis": [
      12,
      60,
      180,
      500,
      700,
      900
    ],
    "melhorias": 0,
    "nome_melhoria": "Estacas de Madeira",
    "preco_melhoria": 100,
    "dono": null
  },
  {
    "nome": "Carro Ecto-1 - Caça-Fantasmas",
    "tipo": "transporte",
    "preco": 200,
    "alugueis": [
      25,
      50,
      100,
      200,
      200,
      200
    ],
    "melhorias": 0,
    "nome_melhoria": "Mochilas de Prótons",
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Nave Nostromo - Alien",
    "tipo": "propriedade",
    "preco": 180,
    "alugueis": [
      14,
      70,
      200,
      550,
      750,
      950
    ],
    "melhorias": 0,
    "nome_melhoria": "Ovos de Xenomorfo",
    "preco_melhoria": 100,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Jurassic Park",
    "tipo": "propriedade",
    "preco": 180,
    "alugueis": [
      14,
      70,
      200,
      550,
      750,
      950
    ],
    "melhorias": 0,
    "nome_melhoria": "Cercas Elétricas",
    "preco_melhoria": 100,
    "dono": null
  },
  {
    "nome": "Ilha da Caveira - King Kong",
    "tipo": "propriedade",
    "preco": 200,
    "alugueis": [
      16,
      80,
      220,
      600,
      800,
      1000
    ],
    "melhorias": 0,
    "nome_melhoria": "Sinalizadores",
    "preco_melhoria": 100,
    "dono": null
  },
  {
    "nome": "Estacionamento Livre",
    "tipo": "especial"
  },
  {
    "nome": "Casa dos Myers - Michael Myers",
    "tipo": "propriedade",
    "preco": 220,
    "alugueis": [
      18,
      90,
      250,
      700,
      875,
      1050
    ],
    "melhorias": 0,
    "nome_melhoria": "Máscaras Brancas",
    "preco_melhoria": 150,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Esgotos de Derry - Pennywise",
    "tipo": "propriedade",
    "preco": 220,
    "alugueis": [
      18,
      90,
      250,
      700,
      875,
      1050
    ],
    "melhorias": 0,
    "nome_melhoria": "Balões Vermelhos",
    "preco_melhoria": 150,
    "dono": null
  },
  {
    "nome": "Banheiro Abandonado - Jigsaw",
    "tipo": "propriedade",
    "preco": 240,
    "alugueis": [
      20,
      100,
      300,
      750,
      925,
      1100
    ],
    "melhorias": 0,
    "nome_melhoria": "Fitas Cassete",
    "preco_melhoria": 150,
    "dono": null
  },
  {
    "nome": "Impala 1967 - Supernatural",
    "tipo": "transporte",
    "preco": 200,
    "alugueis": [
      25,
      50,
      100,
      200,
      200,
      200
    ],
    "melhorias": 0,
    "nome_melhoria": "Sal Grosso",
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Rua Elm - Freddy Krueger",
    "tipo": "propriedade",
    "preco": 260,
    "alugueis": [
      22,
      110,
      330,
      800,
      975,
      1150
    ],
    "melhorias": 0,
    "nome_melhoria": "Pesadelos",
    "preco_melhoria": 150,
    "dono": null
  },
  {
    "nome": "Mansão Spencer - Resident Evil",
    "tipo": "propriedade",
    "preco": 260,
    "alugueis": [
      22,
      110,
      330,
      800,
      975,
      1150
    ],
    "melhorias": 0,
    "nome_melhoria": "Vírus-T",
    "preco_melhoria": 150,
    "dono": null
  },
  {
    "nome": "Companhia de Água",
    "tipo": "servico",
    "preco": 150,
    "alugueis": [
      15,
      30,
      60,
      120,
      150,
      200
    ],
    "melhorias": 0,
    "nome_melhoria": "Encanamentos",
    "preco_melhoria": 75,
    "dono": null
  },
  {
    "nome": "Floresta de Blair - A Bruxa de Blair",
    "tipo": "propriedade",
    "preco": 280,
    "alugueis": [
      24,
      120,
      360,
      850,
      1025,
      1200
    ],
    "melhorias": 0,
    "nome_melhoria": "Totens de Madeira",
    "preco_melhoria": 150,
    "dono": null
  },
  {
    "nome": "Transporte de Prisioneiros",
    "tipo": "va_para_prisao"
  },
  {
    "nome": "Bar do Moe - Os Simpsons",
    "tipo": "propriedade",
    "preco": 300,
    "alugueis": [
      26,
      130,
      390,
      900,
      1100,
      1275
    ],
    "melhorias": 0,
    "nome_melhoria": "Canecas de Chopp",
    "preco_melhoria": 200,
    "dono": null
  },
  {
    "nome": "Casa do Homer Simpson",
    "tipo": "propriedade",
    "preco": 300,
    "alugueis": [
      26,
      130,
      390,
      900,
      1100,
      1275
    ],
    "melhorias": 0,
    "nome_melhoria": "Fardos de Duff",
    "preco_melhoria": 200,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Usina Nuclear de Springfield",
    "tipo": "propriedade",
    "preco": 320,
    "alugueis": [
      28,
      150,
      450,
      1000,
      1200,
      1400
    ],
    "melhorias": 0,
    "nome_melhoria": "Barras de Urânio",
    "preco_melhoria": 200,
    "dono": null
  },
  {
    "nome": "Expresso de Hogwarts - Harry Potter",
    "tipo": "transporte",
    "preco": 200,
    "alugueis": [
      25,
      50,
      100,
      200,
      200,
      200
    ],
    "melhorias": 0,
    "nome_melhoria": "Varinhas",
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Taxa de Luxo",
    "tipo": "imposto",
    "valor": 100
  },
  {
    "nome": "Hotel Overlook - Jack Torrance",
    "tipo": "propriedade",
    "preco": 350,
    "alugueis": [
      35,
      175,
      500,
      1100,
      1300,
      1500
    ],
    "melhorias": 0,
    "nome_melhoria": "Machados",
    "preco_melhoria": 200,
    "dono": null
  },
  {
    "nome": "Acampamento Crystal Lake - Jason Voorhees",
    "tipo": "propriedade",
    "preco": 400,
    "alugueis": [
      50,
      200,
      600,
      1400,
      1700,
      2000
    ],
    "melhorias": 0,
    "nome_melhoria": "Armadilhas de Urso",
    "preco_melhoria": 200,
    "dono": null
  }
];
const CARTAS_PANDORA = [
  {
    "texto": "Erro no Banco do Multiverso a seu favor! Receba 200",
    "valor_alteracao": 200
  },
  {
    "texto": "Você sobreviveu a uma noite no Hotel Overlook. Receba 100",
    "valor_alteracao": 100
  },
  {
    "texto": "Sucesso total de vendas no site de doces da Suzany! Receba 100",
    "valor_alteracao": 100
  },
  {
    "texto": "Homer esqueceu o troco da cerveja Duff com você. Receba 20",
    "valor_alteracao": 20
  },
  {
    "texto": "Ganhou o torneio de Gran Turismo 7 no volante. Receba 150",
    "valor_alteracao": 150
  },
  {
    "texto": "O novo mini-mercado deu lucro neste mês. Receba 100",
    "valor_alteracao": 100
  },
  {
    "texto": "Seu Border Collie achou uma nota de dinheiro enterrada no quintal. Receba 25",
    "valor_alteracao": 25
  },
  {
    "texto": "Fabricio devolveu o dinheiro que te devia. Receba 30",
    "valor_alteracao": 30
  },
  {
    "texto": "Eduardo e André pagaram a parte deles no churrasco. Receba 40",
    "valor_alteracao": 40
  },
  {
    "texto": "Bônus por operação impecável na prensa da Amarsul. Receba 100",
    "valor_alteracao": 100
  },
  {
    "texto": "As ações da fabricante do DeLorean subiram. Receba 50",
    "valor_alteracao": 50
  },
  {
    "texto": "Você venceu a temporada como treinador de futebol. Receba 200",
    "valor_alteracao": 200
  },
  {
    "texto": "Vendeu todos os ingressos para o campeonato da categoria Benjamins. Receba 50",
    "valor_alteracao": 50
  },
  {
    "texto": "Achou dinheiro esquecido na caixa do PS5. Receba 10",
    "valor_alteracao": 10
  },
  {
    "texto": "Recebeu os direitos autorais das suas músicas criadas com IA. Receba 25",
    "valor_alteracao": 25
  },
  {
    "texto": "O projeto do jogo Souzafoot encontrou um investidor. Receba 150",
    "valor_alteracao": 150
  },
  {
    "texto": "Jason te perseguiu no acampamento e você perdeu a carteira. Pague 50",
    "valor_alteracao": -50
  },
  {
    "texto": "Annabelle quebrou a televisão da sala com fenômenos paranormais. Pague 100",
    "valor_alteracao": -100
  },
  {
    "texto": "Homer bebeu todo o estoque do seu mini-mercado. Pague 75",
    "valor_alteracao": -75
  },
  {
    "texto": "Multa por excesso de velocidade temporal no DeLorean. Pague 50",
    "valor_alteracao": -50
  },
  {
    "texto": "O pneu do carro furou a caminho do treino de futebol. Pague 40",
    "valor_alteracao": -40
  },
  {
    "texto": "Gastos não planejados com a instalação do piso flutuante. Pague 150",
    "valor_alteracao": -150
  },
  {
    "texto": "A Mufetada dos amigos ficou bem mais cara que o esperado. Pague 60",
    "valor_alteracao": -60
  },
  {
    "texto": "Comprou um grande estoque de ração premium para o Border Collie. Pague 80",
    "valor_alteracao": -80
  },
  {
    "texto": "Taxa de manutenção de maquinário de triagem. Pague 50",
    "valor_alteracao": -50
  },
  {
    "texto": "Pagou por novos jogos e atualizações do PlayStation VR2. Pague 30",
    "valor_alteracao": -30
  },
  {
    "texto": "Imposto de renda do Multiverso retido na fonte. Pague 100",
    "valor_alteracao": -100
  },
  {
    "texto": "Consulta psiquiátrica após visita ao Asilo Arkham. Pague 150",
    "valor_alteracao": -150
  },
  {
    "texto": "Renovou a mensalidade do domínio e servidor da confeitaria. Pague 25",
    "valor_alteracao": -25
  },
  {
    "texto": "O Asilo Arkham cobrou uma taxa extra de segurança. Pague 50",
    "valor_alteracao": -50
  },
  {
    "texto": "Reparos estruturais na Casa do Homer Simpson. Pague 75",
    "valor_alteracao": -75
  },
  {
    "texto": "Perdeu o processo contra o Acampamento Crystal Lake. Pague 200",
    "valor_alteracao": -200
  },
  {
    "texto": "O boneco Chucky sabotou os freios do seu carro e fugiu! Pague 100 pelo conserto.",
    "valor_alteracao": -100
  }
];
const INDICE_PRISAO = TABULEIRO.findIndex(c => c.tipo === "prisao");

// Mapeamento Direto pelos Nomes Exatos dos Ficheiros das Casas no Tabuleiro
const URLS_IMAGENS = {
    'portal': 'assets/portal.png',
    'pandora': 'assets/caixa_pandora.png',
    'bar_moe': 'assets/Bar do Moe - Os Simpsons.webp',
    'casa_homer': 'assets/casadohomer.png',
    'impala': 'assets/Impala 1967 - Supernatural .jpg',
    'mansao_spencer': 'assets/Mansão Spencer - Resident Evil .jpg',
    'rua_elm': 'assets/Rua Elm - Freddy Krueger.jpg',
    'prisao': 'assets/prisao.png',
    'banheiro': 'assets/banehiro .jpeg',
    'esgotos': 'assets/esgotos de derry.png',
    'usina': 'assets/usina nuclear .jpeg',
    'annabelle': 'assets/Quarto de Arte - Annabelle .jpeg',
    'transporte_prisioneiros': 'assets/Transporte de Prisioneiros.webp',
    'chucky': 'assets/Fábrica Good Guys - Chucky .jpeg',
    'myers': 'assets/Casa dos Myers - Michael Myers .webp',
    'crystal_lake': 'assets/Acampamento Crystal Lake - Jason Voorhees .jpeg',
    'dracula': 'assets/Castelo do Drácula .jpeg',
    'mundo_invertido': 'assets/Mundo Invertido - Stranger Things .jpeg',
    'jurassic': 'assets/Jurassic Park .jpeg',
    'king_kong': 'assets/Ilha da Caveira - King Kong .jpeg',
    'bates_motel': 'assets/bates_motel_dummy.jpg', /* Apenas para mapeamento via getTileImgKey */
    'default': 'assets/default.png'
};

const URLS_VIDEOS = {
    'casa_homer': 'assets/videocasadohomer.MP4',
    'myers': 'assets/videocasadosmyers.MP4',
    'crystal_lake': 'assets/videocrystajason.MP4',
    'banheiro': 'assets/videojigsaw.MP4',
    'rua_elm': 'assets/viodefreddy.MP4',
    'mundo_invertido': 'assets/videomundoinvertido.MP4',
    'annabelle': 'assets/videoquartodeannabelle.MP4',
    'esgotos': 'assets/videoitacoisa.MP4',
    'chucky': 'assets/chucksabotouos freios.MP4',
    'bates_motel': 'assets/videobatesmotel.MP4'
};

// Mapeamento Exato dos Ficheiros de Peões para Jogadores e CPUs
const PERSONAGENS_JOGADORES = [
    { charNome: "Chucky", avatar: "assets/chuckypeao.png", cor: "#ff0055" },
    { charNome: "Jason", avatar: "assets/jasonpeao.png", cor: "#00f0ff" },
    { charNome: "Freddy", avatar: "assets/freddypeao.png", cor: "#ff8800" },
    { charNome: "Annabelle", avatar: "assets/annabellepeao.png", cor: "#ff00ff" },
    { charNome: "Homer", avatar: "assets/homerpeao.png", cor: "#ffff00" }
];

let selectedCharIndex = 0;

function renderCharSelectMenu() {
    const grid = document.getElementById('char-select-grid');
    if (!grid) return;
    grid.innerHTML = '';

    PERSONAGENS_JOGADORES.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = `char-card${idx === selectedCharIndex ? ' selected' : ''}`;
        card.setAttribute('data-idx', idx);
        card.onclick = () => {
            selectedCharIndex = idx;
            // Update classes without full re-render for snappier feel
            document.querySelectorAll('.char-card').forEach((c, i) => {
                c.classList.toggle('selected', i === idx);
            });
        };
        card.innerHTML = `
            <div class="char-img-wrap">
                <img src="${p.avatar}"
                     alt="${p.charNome}"
                     draggable="false"
                     loading="eager"
                     onerror="this.style.opacity='0';">
            </div>
            <div class="char-card-name">${p.charNome}</div>
        `;
        grid.appendChild(card);
    });
}

function renderDiceFaceHTML(val) {
    const pipsMap = {
        1: [5],
        2: [1, 9],
        3: [1, 5, 9],
        4: [1, 3, 7, 9],
        5: [1, 3, 5, 7, 9],
        6: [1, 3, 4, 6, 7, 9]
    };
    const active = pipsMap[val] || [5];
    let html = '<div class="dice-grid">';
    for (let i = 1; i <= 9; i++) {
        if (active.includes(i)) {
            html += '<span class="pip"></span>';
        } else {
            html += '<span class="pip empty"></span>';
        }
    }
    html += '</div>';
    return html;
}

function getGridArea(i) {
    if (i === 0) return { r: 11, c: 1 };
    if (i > 0 && i < 10) return { r: 11, c: i + 1 };
    if (i === 10) return { r: 11, c: 11 };
    if (i > 10 && i < 20) return { r: 11 - (i - 10), c: 11 };
    if (i === 20) return { r: 1, c: 11 };
    if (i > 20 && i < 30) return { r: 1, c: 11 - (i - 20) };
    if (i === 30) return { r: 1, c: 1 };
    if (i > 30 && i < 40) return { r: 1 + (i - 30), c: 1 };
}

function getTileColor(casa, index) {
    if (casa.tipo === 'especial') {
        if (index === 0) return '#ffcc00';
        if (index === 10 || index === 30) return '#1a1a1a';
        if (index === 20) return '#ff0055';
        if (casa.nome.includes('Pandora')) return '#ff8800';
    }
    if (casa.tipo === 'imposto') return '#555555';
    if (casa.tipo === 'servico') return '#888888';
    if (casa.tipo === 'transporte') return '#00aaff';
    if (casa.tipo === 'propriedade') {
        if (index < 5) return '#8b4513';
        if (index < 10) return '#87ceeb';
        if (index < 15) return '#ff69b4';
        if (index < 20) return '#ffa500';
        if (index < 25) return '#ff0000';
        if (index < 30) return '#ffff00';
        if (index < 35) return '#008000';
        return '#0000ff';
    }
    return '#333333';
}

function getTileImgKey(casa, index) {
    if (casa.tipo === 'especial') {
        if (index === 0) return 'portal';
        if (index === 10 || index === 30) return 'prisao';
        if (casa.nome.includes('Pandora')) return 'pandora';
    }
    if (casa.tipo === 'va_para_prisao') return 'transporte_prisioneiros';
    const n = casa.nome.toLowerCase();
    if (n.includes('annabelle')) return 'annabelle';
    if (n.includes('chucky') || n.includes('good guys')) return 'chucky';
    if (n.includes('myers')) return 'myers';
    if (n.includes('crystal lake') || n.includes('jason voorhees')) return 'crystal_lake';
    if (n.includes('drácula') || n.includes('dracula')) return 'dracula';
    if (n.includes('mundo invertido')) return 'mundo_invertido';
    if (n.includes('jurassic')) return 'jurassic';
    if (n.includes('ilha da caveira') || n.includes('king kong')) return 'king_kong';
    if (n.includes('bar do moe')) return 'bar_moe';
    if (n.includes('casa do homer')) return 'casa_homer';
    if (n.includes('impala')) return 'impala';
    if (n.includes('mansão spencer') || n.includes('mansao spencer')) return 'mansao_spencer';
    if (n.includes('rua elm')) return 'rua_elm';
    if (n.includes('banheiro')) return 'banheiro';
    if (n.includes('esgoto')) return 'esgotos';
    if (n.includes('usina')) return 'usina';
    if (n.includes('bates motel')) return 'bates_motel';
    return null;
}

function renderBoardHTML() {
    const boardGrid = document.getElementById('board-grid');
    if (!boardGrid) return;
    boardGrid.innerHTML = '';
    boardGrid.classList.add('board');

    TABULEIRO.forEach((casa, i) => {
        const pos = getGridArea(i);
        const tile = document.createElement('div');

        // Classe de orientação para CSS diferenciado por lado do tabuleiro
        let orientClass = 'tile-corner';
        if (i > 0 && i < 10)        orientClass = 'tile-bottom';  // base (row 11)
        else if (i > 10 && i < 20)  orientClass = 'tile-right';   // lateral direita (col 11)
        else if (i > 20 && i < 30)  orientClass = 'tile-top';     // topo (row 1)
        else if (i > 30 && i < 40)  orientClass = 'tile-left';    // lateral esquerda (col 1)

        tile.className = `tile ${orientClass}`;
        tile.id = `tile-${i}`;
        tile.style.gridRow = pos.r;
        tile.style.gridColumn = pos.c;

        const color = getTileColor(casa, i);
        casa.topColor = color;

        const imgKey = getTileImgKey(casa, i);
        casa.imgUrl = imgKey && URLS_IMAGENS[imgKey] ? URLS_IMAGENS[imgKey] : null;

        let priceHtml = casa.preco ? `<div class="tile-price">$${casa.preco}</div>` : '';
        let colorBarHtml = `<div class="tile-color-bar" style="background: ${color};"></div>`;
        let imgHtml = casa.imgUrl ? `<img class="tile-img" src="${casa.imgUrl}" alt="" onerror="this.style.display='none';">` : '';

        if (orientClass === 'tile-right' || orientClass === 'tile-left') {
            imgHtml = '';
        }

        const bodyContent = `${imgHtml}<div class="tile-name">${casa.nome}</div>${priceHtml}`;

        tile.innerHTML = `
            ${colorBarHtml}
            <div class="tile-body">
                ${bodyContent}
            </div>
        `;

        boardGrid.appendChild(tile);
    });

    const center = document.createElement('div');
    center.id = 'center-area';
    center.className = 'center-area';
    center.innerHTML = `
        <div class="center-title-container">
            <div class="crown-icon">👑</div>
            <div class="center-title-main">IMPÉRIO DOS PESADELOS</div>
            <div class="center-subtitle">CONQUISTA DO MULTIVERSO</div>
        </div>
        <div id="dice-container" style="display: flex;">
            <div class="dice-cube" id="dice-1">${renderDiceFaceHTML(1)}</div>
            <div class="dice-cube" id="dice-2">${renderDiceFaceHTML(1)}</div>
        </div>
        <div class="center-decks">
            <div class="deck-card deck-pandora">
                <div class="card-icon">📦</div>
                <div class="card-name">CAIXA DE PANDORA</div>
            </div>
            <div class="deck-card deck-destino">
                <div class="card-icon">🔮</div>
                <div class="card-name">DESTINO</div>
            </div>
        </div>
    `;
    boardGrid.appendChild(center);
}

class Jogador {
    constructor(nome, is_cpu, charData, id) {
        this.id = id;
        this.nome = nome;
        this.is_cpu = is_cpu;
        this.charNome = charData.charNome;
        this.avatar = charData.avatar;
        this.cor = charData.cor;
        this.dinheiro = 1500;
        this.posicao = 0;
        this.preso = false;
        this.turnos_preso = 0;
        this.ativo = true;
    }
}

let jogadores = [];
let idxJogador = 0;
let estado = "INIT";

function logMsg(msg) {
    const feed = document.getElementById('log-feed');
    if (!feed) return;
    const p = document.createElement('div');
    p.textContent = msg;
    feed.appendChild(p);
    feed.scrollTop = feed.scrollHeight;
}

function updateUI() {
    const j = jogadores[idxJogador];
    const curP = document.getElementById('current-player');
    if (curP) curP.textContent = `Turno: ${j ? `${j.nome} (${j.charNome})` : '-'}`;
    
    let html = '';
    jogadores.forEach((p, idx) => {
        const isActive = (idx === idxJogador);
        html += `<div class="player-stat ${!p.ativo ? 'bankrupt' : ''} ${isActive ? 'active-player' : ''}" style="color: ${p.cor};">
            <div style="display: flex; align-items: center; gap: 8px;">
                <img src="${p.avatar}" alt="Avatar" style="width: 28px; height: 28px; border-radius: 50%; border: 1px solid ${p.cor}; object-fit: cover; background: #000;">
                <span>${p.nome} (${p.charNome})</span>
            </div>
            <span>$${p.dinheiro}</span>
        </div>`;
    });
    const pList = document.getElementById('players-list');
    if (pList) pList.innerHTML = html;

    // Remove peões anteriores do mapa e camada
    document.querySelectorAll('.player-figurine-standalone').forEach(el => el.remove());
    const existingLayer = document.getElementById('pawn-layer');
    if (existingLayer) existingLayer.remove();

    // Renderiza Peões com Nomenclatura Exata (*peao.png) sobre as casas
    const pawnsByTile = {};
    jogadores.forEach(p => {
        if (p.ativo) {
            if (!pawnsByTile[p.posicao]) pawnsByTile[p.posicao] = [];
            pawnsByTile[p.posicao].push(p);
        }
    });

    const boardGrid = document.getElementById('board-grid');
    if (!boardGrid) return;

    // Camada exclusiva de renderização dos peões para sobreposição total (z-index 9999)
    const pawnLayer = document.createElement('div');
    pawnLayer.id = 'pawn-layer';
    pawnLayer.style.position = 'absolute';
    pawnLayer.style.top = '0';
    pawnLayer.style.left = '0';
    pawnLayer.style.width = '100%';
    pawnLayer.style.height = '100%';
    pawnLayer.style.pointerEvents = 'none'; // Permite clicar através da camada
    pawnLayer.style.zIndex = '9999';
    boardGrid.appendChild(pawnLayer);

    Object.keys(pawnsByTile).forEach(posIndex => {
        const list = pawnsByTile[posIndex];
        const tileElement = document.getElementById(`tile-${posIndex}`);
        if (!tileElement) return;

        // Cria uma "casa virtual" na camada superior exatamente sobre a casa real
        const virtualTile = document.createElement('div');
        virtualTile.style.position = 'absolute';
        virtualTile.style.left = `${tileElement.offsetLeft}px`;
        virtualTile.style.top = `${tileElement.offsetTop}px`;
        virtualTile.style.width = `${tileElement.offsetWidth}px`;
        virtualTile.style.height = `${tileElement.offsetHeight}px`;
        virtualTile.style.pointerEvents = 'none';

        list.forEach((p, idx) => {
            let leftPercent = 50;
            if (list.length === 2) leftPercent = idx === 0 ? 30 : 70;
            else if (list.length === 3) leftPercent = idx === 0 ? 22 : (idx === 1 ? 50 : 78);
            else if (list.length >= 4) leftPercent = 18 + (idx * 21);

            const figurine = document.createElement('div');
            figurine.className = 'player-figurine-standalone';
            figurine.style.setProperty('--pawn-color', p.cor);
            figurine.style.left = `${leftPercent}%`;
            figurine.style.transform = 'translateX(-50%)';
            figurine.title = `${p.nome} (${p.charNome})`;
            figurine.innerHTML = `
                <img class="figurine-cutout" src="${p.avatar}" alt="${p.charNome}" onerror="this.src='assets/default.png';">
                <div class="figurine-pedestal-3d"></div>
            `;
            virtualTile.appendChild(figurine);
        });
        
        pawnLayer.appendChild(virtualTile);
    });
}

function iniciarJogo(humanos, cpus) {
    jogadores = [];
    
    const pool = [...PERSONAGENS_JOGADORES];
    const player1Char = pool.splice(selectedCharIndex, 1)[0];
    
    let count = 0;
    jogadores.push(new Jogador(`Humano 1`, false, player1Char, count++));
    
    for(let i=1; i<humanos; i++) {
        const char = pool.length > 0 ? pool.shift() : PERSONAGENS_JOGADORES[count % PERSONAGENS_JOGADORES.length];
        jogadores.push(new Jogador(`Humano ${i+1}`, false, char, count++));
    }
    for(let i=0; i<cpus; i++) {
        const char = pool.length > 0 ? pool.shift() : PERSONAGENS_JOGADORES[count % PERSONAGENS_JOGADORES.length];
        jogadores.push(new Jogador(`CPU ${i+1}`, true, char, count++));
    }
    
    document.getElementById('setup-modal').style.display = 'none';
    document.getElementById('ui-container').style.display = 'flex';
    
    logMsg(`🎮 Partida iniciada! Você escolheu ${player1Char.charNome}!`);
    idxJogador = 0;
    estado = "INICIO_TURNO";
    updateUI();
    loopLogica();
}

function initListeners() {
    const btnStart = document.getElementById('btn-start');
    if (btnStart) {
        btnStart.onclick = () => {
            const hum = parseInt(document.getElementById('in-hum').value) || 1;
            const cpu = parseInt(document.getElementById('in-cpu').value) || 3;
            iniciarJogo(hum, cpu);
        };
    }

    const btnRolar = document.getElementById('btn-rolar');
    if (btnRolar) {
        btnRolar.onclick = () => {
            if (estado === "AGUARDANDO_ROLO") rolarDados();
        };
    }
}

function rolarDados() {
    const btnRolar = document.getElementById('btn-rolar');
    if (btnRolar) btnRolar.style.display = 'none';
    const j = jogadores[idxJogador];

    const diceContainer = document.getElementById('dice-container');
    const d1El = document.getElementById('dice-1');
    const d2El = document.getElementById('dice-2');

    if (diceContainer) diceContainer.style.display = 'flex';
    if (d1El) d1El.classList.add('rolling');
    if (d2El) d2El.classList.add('rolling');

    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const total = d1 + d2;

    let rolls = 0;
    const interval = setInterval(() => {
        const temp1 = Math.floor(Math.random() * 6) + 1;
        const temp2 = Math.floor(Math.random() * 6) + 1;
        if (d1El) d1El.innerHTML = renderDiceFaceHTML(temp1);
        if (d2El) d2El.innerHTML = renderDiceFaceHTML(temp2);
        rolls++;
        if (rolls >= 12) {
            clearInterval(interval);
            if (d1El) {
                d1El.innerHTML = renderDiceFaceHTML(d1);
                d1El.classList.remove('rolling');
            }
            if (d2El) {
                d2El.innerHTML = renderDiceFaceHTML(d2);
                d2El.classList.remove('rolling');
            }

            logMsg(`🎲 ${j.nome} (${j.charNome}) rolou ${d1} + ${d2} = ${total}`);
            
            let passos = total;
            const stepTimer = setInterval(() => {
                j.posicao = (j.posicao + 1) % TABULEIRO.length;
                if (j.posicao === 0) {
                    j.dinheiro += 200;
                    logMsg(`🌀 ${j.nome} cruzou o Portal e recebeu $200!`);
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

function aplicarRegra() {
    const j = jogadores[idxJogador];
    const casa = TABULEIRO[j.posicao];
    logMsg(`📍 ${j.nome} (${j.charNome}) parou em: ${casa.nome}`);
    
    // Identificar a chave da imagem/vídeo da casa para buscar na associação
    const imgKey = getTileImgKey(casa, j.posicao);
    
    // Se a casa tiver um vídeo associado, reproduz antes de aplicar a regra
    if (imgKey && URLS_VIDEOS[imgKey] && !j.is_cpu) { // Opcional: mostrar para CPU tbm, mas tirei j.is_cpu check
        mostrarVideoModal(URLS_VIDEOS[imgKey], () => {
             aplicarRegraRestante(j, casa);
        });
    } else {
        aplicarRegraRestante(j, casa);
    }
}

function aplicarRegraRestante(j, casa) {
    if (casa.tipo === "va_para_prisao") {
        j.posicao = INDICE_PRISAO;
        j.preso = true;
        j.turnos_preso = 0;
        logMsg(`🚔 ${j.nome} foi enviado para o Asilo Arkham!`);
        updateUI();
        encerrarTurno();
    } else if (["propriedade", "transporte", "servico"].includes(casa.tipo)) {
        if (!casa.dono) {
            if (j.dinheiro >= casa.preco) {
                if (j.is_cpu) {
                    j.dinheiro -= casa.preco;
                    casa.dono = j.nome;
                    logMsg(`🏠 ${j.nome} comprou ${casa.nome} por $${casa.preco}!`);
                    encerrarTurno();
                } else {
                    mostrarPropertyCard(casa, `Deseja comprar ${casa.nome} por $${casa.preco}?`, () => {
                        if (j.dinheiro >= casa.preco) {
                            j.dinheiro -= casa.preco;
                            casa.dono = j.nome;
                            logMsg(`✅ Você comprou ${casa.nome}!`);
                        } else logMsg(`❌ Sem dinheiro suficiente!`);
                        encerrarTurno();
                    }, encerrarTurno, "COMPRAR", "PASSAR");
                }
            } else {
                logMsg(`💔 ${j.nome} não tem dinheiro para comprar ${casa.nome}.`);
                encerrarTurno();
            }
        } else if (casa.dono !== j.nome) {
            let nivel = casa.melhorias || 0;
            let al = casa.alugueis ? casa.alugueis[nivel] : Math.floor(casa.preco * 0.2);
            j.dinheiro -= al;
            let dono = jogadores.find(x => x.nome === casa.dono);
            if(dono) dono.dinheiro += al;
            logMsg(`💸 ${j.nome} pagou $${al} de aluguel para ${casa.dono}!`);
            encerrarTurno();
        } else {
            if ((casa.melhorias||0) < 5 && casa.preco_melhoria) {
                let pm = casa.preco_melhoria;
                if (j.is_cpu) {
                    if (j.dinheiro >= pm) {
                        j.dinheiro -= pm;
                        casa.melhorias = (casa.melhorias||0) + 1;
                        logMsg(`🔧 ${j.nome} comprou ${casa.nome_melhoria} em ${casa.nome}!`);
                    }
                    encerrarTurno();
                } else {
                    mostrarPropertyCard(casa, `Comprar ${casa.nome_melhoria} por $${pm}?`, () => {
                        if (j.dinheiro >= pm) {
                            j.dinheiro -= pm;
                            casa.melhorias = (casa.melhorias||0) + 1;
                            logMsg(`✅ ${casa.nome_melhoria} instalada!`);
                        } else logMsg(`❌ Dinheiro insuficiente!`);
                        encerrarTurno();
                    }, encerrarTurno, "MELHORAR", "CANCELAR");
                }
            } else {
                logMsg(`🏡 ${j.nome} descansando em sua propriedade.`);
                encerrarTurno();
            }
        }
    } else if (casa.tipo === "imposto") {
        j.dinheiro -= casa.valor;
        logMsg(`🧾 ${j.nome} pagou $${casa.valor} de imposto.`);
        encerrarTurno();
    } else if (casa.tipo === "especial" && casa.nome === "Caixa de Pandora") {
        const c = CARTAS_PANDORA[Math.floor(Math.random() * CARTAS_PANDORA.length)];
        j.dinheiro += c.valor_alteracao;
        logMsg(`📦 Carta de Pandora: ${c.texto}`);
        
        if (j.is_cpu) {
            encerrarTurno();
        } else {
            let pImg = URLS_IMAGENS['pandora'];
            const dummyCasa = { nome: "Caixa de Pandora", topColor: "#ff8800", imgUrl: pImg };
            mostrarPropertyCard(dummyCasa, c.texto, encerrarTurno, encerrarTurno, "ENTENDIDO", null);
        }
    } else {
        logMsg(`👀 ${j.nome} visitou ${casa.nome}.`);
        encerrarTurno();
    }
}

function mostrarVideoModal(videoSrc, callback) {
    estado = "AGUARDANDO_DECISAO"; // Pausa o jogo
    const modal = document.getElementById('video-modal');
    const videoEl = document.getElementById('house-video');
    const sourceEl = document.getElementById('house-video-src');
    const btnClose = document.getElementById('btn-close-video');

    if (!modal || !videoEl || !sourceEl) {
        if(callback) callback();
        return;
    }

    sourceEl.src = videoSrc;
    videoEl.load();
    modal.style.display = 'flex';

    // Ao terminar o vídeo, tentar não fechar automaticamente (mas o usuário pode fechar)
    // Se o usuário clicar no X
    btnClose.onclick = () => {
        videoEl.pause();
        modal.style.display = 'none';
        if(callback) callback();
    };

    videoEl.onended = () => {
        // Ao terminar o vídeo apenas mostra o botão e pausa. O usuário que clica para fechar, 
        // ou fecha direto e continua.
        // Já vamos deixar o usuário fechar manualmente pelo btnClose.
    };
    
    videoEl.play().catch(e => {
        console.warn("Autoplay prevenido pelo navegador.", e);
    });
}

function mostrarPropertyCard(casa, msg, onYes, onNo, btnYesText, btnNoText) {
    estado = "AGUARDANDO_DECISAO";
    const div = document.getElementById('property-card');
    if (!div) return;
    
    document.getElementById('pc-header').style.backgroundColor = casa.topColor || '#222';
    document.getElementById('pc-title').textContent = casa.nome;
    
    const pcImg = document.getElementById('pc-img');
    if (pcImg) {
        if (casa.imgUrl) {
            pcImg.src = casa.imgUrl;
            pcImg.style.display = 'block';
        } else {
            pcImg.style.display = 'none';
        }
    }
    
    document.getElementById('pc-msg').textContent = msg;
    
    const btnYes = document.getElementById('btn-pc-yes');
    const btnNo = document.getElementById('btn-pc-no');
    
    btnYes.textContent = btnYesText;
    btnYes.onclick = () => { div.style.display='none'; onYes(); };
    
    if (btnNoText) {
        btnNo.style.display = 'inline-block';
        btnNo.textContent = btnNoText;
        btnNo.onclick = () => { div.style.display='none'; onNo(); };
    } else {
        btnNo.style.display = 'none';
    }
    
    div.style.display = 'flex';
}

function encerrarTurno() {
    const j = jogadores[idxJogador];
    if (j.dinheiro < 0) {
        logMsg(`🚨 ${j.nome} (${j.charNome}) FALIU E ESTÁ FORA DA PARTIDA!`);
        j.ativo = false;
        TABULEIRO.forEach(c => {
            if (c.dono === j.nome) {
                c.dono = null;
                c.melhorias = 0;
            }
        });
    }
    updateUI();
    idxJogador = (idxJogador + 1) % jogadores.length;
    estado = "INICIO_TURNO";
    setTimeout(loopLogica, 500);
}

function loopLogica() {
    if (estado !== "INICIO_TURNO") return;
    
    const j = jogadores[idxJogador];
    updateUI();
    
    if (!j.ativo) {
        idxJogador = (idxJogador + 1) % jogadores.length;
        setTimeout(loopLogica, 100);
        return;
    }
    
    if (j.preso) {
        j.turnos_preso++;
        if (j.is_cpu) {
            if (j.dinheiro >= 50) {
                j.dinheiro -= 50;
                j.preso = false;
                j.turnos_preso = 0;
                logMsg(`🤖 ${j.nome} (${j.charNome}) pagou $50 e saiu do Arkham!`);
            } else {
                logMsg(`🤖 ${j.nome} (${j.charNome}) continua preso no Arkham!`);
                encerrarTurno();
                return;
            }
        } else {
            const dummyCasa = { nome: "Asilo Arkham", topColor: "#1a1a1a", imgUrl: URLS_IMAGENS['prisao'] };
            mostrarPropertyCard(dummyCasa, "Pagar $50 para sair da prisão?", () => {
                if (j.dinheiro >= 50) {
                    j.dinheiro -= 50; j.preso = false; j.turnos_preso = 0;
                    logMsg(`✅ Você pagou $50 e saiu da prisão!`);
                    loopLogica();
                } else {
                    logMsg(`❌ Dinheiro insuficiente!`);
                    encerrarTurno();
                }
            }, encerrarTurno, "PAGAR $50", "TENTAR DADOS");
            return;
        }
    }
    
    if (j.is_cpu) {
        estado = "AGUARDANDO_ROLO";
        setTimeout(rolarDados, 800);
    } else {
        estado = "AGUARDANDO_ROLO";
        const btnRolar = document.getElementById('btn-rolar');
        if (btnRolar) btnRolar.style.display = 'block';
    }
}

function initApp() {
    renderCharSelectMenu();
    renderBoardHTML();
    initListeners();
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
