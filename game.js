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
      30,
      60,
      90,
      120,
      150,
      180
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Símbolos Ocultos",
      "Boneca Amaldiçoada",
      "Altar das Trevas",
      "Possessão Demoníaca",
      "Invocação Maligna"
    ],
    "preco_melhoria": 30,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Fábrica Good Guys - Chucky",
    "tipo": "propriedade",
    "preco": 80,
    "alugueis": [
      40,
      80,
      120,
      160,
      200,
      240
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Caixas de Bonecos",
      "Facas Ensanguentadas",
      "Oficina de Chucky",
      "Feitiços Vudus",
      "Fábrica de Pesadelos"
    ],
    "preco_melhoria": 40,
    "dono": null
  },
  {
    "nome": "Assalto no Beco do Crime",
    "tipo": "imposto",
    "valor": 180
  },
  {
    "nome": "Shopping Center - Madrugada dos Mortos",
    "tipo": "transporte",
    "preco": 100,
    "alugueis": [
      50,
      100,
      150,
      200,
      250,
      300
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Barricadas",
      "Mortos-Vivos no Corredor",
      "Horda Zumbi",
      "Bunker Anti-Apocalipse",
      "Fortaleza dos Mortos"
    ],
    "preco_melhoria": 50,
    "dono": null
  },
  {
    "nome": "Bates Motel - Psicose",
    "tipo": "propriedade",
    "preco": 120,
    "alugueis": [
      60,
      120,
      180,
      240,
      300,
      360
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Chaves de Quarto",
      "Espreita no Chuveiro",
      "Cacos de Espelho",
      "Identidades Partidas",
      "Motel dos Horrores"
    ],
    "preco_melhoria": 60,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Pânico",
    "tipo": "propriedade",
    "preco": 140,
    "alugueis": [
      70,
      140,
      210,
      280,
      350,
      420
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Máscaras Ghostface",
      "Facas do Pânico",
      "Câmeras de Vigilância",
      "Armadilhas Mortais",
      "Maldição de Woodsboro"
    ],
    "preco_melhoria": 70,
    "dono": null
  },
  {
    "nome": "Alexandria - The Walking Dead",
    "tipo": "propriedade",
    "preco": 160,
    "alugueis": [
      80,
      160,
      240,
      320,
      400,
      480
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Muros Fortificados",
      "Torres de Guarda",
      "Arame Farpado",
      "Armas Anti-Zumbi",
      "Bastião da Sobrevivência"
    ],
    "preco_melhoria": 80,
    "dono": null
  },
  {
    "nome": "Asilo Arkham",
    "tipo": "prisao",
    "preco": 180
  },
  {
    "nome": "Laboratório Hawkins - Stranger Things",
    "tipo": "propriedade",
    "preco": 200,
    "alugueis": [
      100,
      200,
      300,
      400,
      500,
      600
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Fitas K7",
      "Laboratório de Experimentos",
      "Portal do Avesso",
      "Mente Colmeia",
      "Domínio do Demogorgon"
    ],
    "preco_melhoria": 100,
    "dono": null
  },
  {
    "nome": "Laboratório de Frankenstein",
    "tipo": "servico",
    "preco": 220,
    "alugueis": [
      110,
      220,
      330,
      440,
      550,
      660
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Geradores Elétricos",
      "Mesa de Experimentos",
      "Cérebro Artificial",
      "Relâmpagos Controlados",
      "Monstro de Frankenstein"
    ],
    "preco_melhoria": 110,
    "dono": null
  },
  {
    "nome": "Casa do Sorria",
    "tipo": "propriedade",
    "preco": 240,
    "alugueis": [
      120,
      240,
      360,
      480,
      600,
      720
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Sorriso Perturbador",
      "Visões Malditas",
      "Espírito do Sorriso",
      "Maldição Transmitida",
      "Entidade das Trevas"
    ],
    "preco_melhoria": 120,
    "dono": null
  },
  {
    "nome": "Castelo do Drácula",
    "tipo": "propriedade",
    "preco": 260,
    "alugueis": [
      130,
      260,
      390,
      520,
      650,
      780
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Estacas de Madeira",
      "Caixões de Prata",
      "Morcegos Guardiões",
      "Bruma Carmesim",
      "Trono de Drácula"
    ],
    "preco_melhoria": 130,
    "dono": null
  },
  {
    "nome": "Território do Predador",
    "tipo": "transporte",
    "preco": 280,
    "alugueis": [
      140,
      280,
      420,
      560,
      700,
      840
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Camuflagem Óptica",
      "Lasers de Plasma",
      "Crânios de Troféu",
      "Armadura Alienígena",
      "Canhão de Plasma"
    ],
    "preco_melhoria": 140,
    "dono": null
  },
  {
    "nome": "Armazém do Art - Terrifier",
    "tipo": "propriedade",
    "preco": 300,
    "alugueis": [
      150,
      300,
      450,
      600,
      750,
      900
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Sacos de Lixo Pretos",
      "Maquiagem Aterrorizante",
      "Foices do Art",
      "Palhaço de Sangue",
      "Matadouro do Terrifier"
    ],
    "preco_melhoria": 150,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Jurassic Park",
    "tipo": "propriedade",
    "preco": 320,
    "alugueis": [
      160,
      320,
      480,
      640,
      800,
      960
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Cercas Elétricas",
      "Ovos de Dinossauro",
      "Laboratório de DNA",
      "T-Rex Solto",
      "Parque do Caos"
    ],
    "preco_melhoria": 160,
    "dono": null
  },
  {
    "nome": "Ilha da Caveira - King Kong",
    "tipo": "propriedade",
    "preco": 340,
    "alugueis": [
      170,
      340,
      510,
      680,
      850,
      1020
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Sinalizadores de Perigo",
      "Bunkers Subterrâneos",
      "Ninho de Kong",
      "Guardiões da Ilha",
      "Rugido de King Kong"
    ],
    "preco_melhoria": 170,
    "dono": null
  },
  {
    "nome": "Estacionamento Livre",
    "tipo": "especial"
  },
  {
    "nome": "Casa dos Myers - Michael Myers",
    "tipo": "propriedade",
    "preco": 360,
    "alugueis": [
      180,
      360,
      540,
      720,
      900,
      1080
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Facas de Cozinha",
      "Máscara de Halloween",
      "Porão dos Horrores",
      "Sombra de Myers",
      "A Forma nas Trevas"
    ],
    "preco_melhoria": 180,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Esgotos de Derry - Pennywise",
    "tipo": "propriedade",
    "preco": 380,
    "alugueis": [
      190,
      380,
      570,
      760,
      950,
      1140
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Balões Vermelhos",
      "Galerias dos Esgotos",
      "Risos do Pennywise",
      "Câmara do Medo",
      "Palhaço Primordial"
    ],
    "preco_melhoria": 190,
    "dono": null
  },
  {
    "nome": "Banheiro Abandonado - Jigsaw",
    "tipo": "propriedade",
    "preco": 400,
    "alugueis": [
      200,
      400,
      600,
      800,
      1000,
      1200
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Fitas Cassete",
      "Serras Enferrujadas",
      "Câmaras de Tortura",
      "Jogos Mortais",
      "Julgamento de Jigsaw"
    ],
    "preco_melhoria": 200,
    "dono": null
  },
  {
    "nome": "Exorcista",
    "tipo": "propriedade",
    "preco": 420,
    "alugueis": [
      210,
      420,
      630,
      840,
      1050,
      1260
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Água Benta",
      "Crucifixo Sagrado",
      "Pentagramas Invertidos",
      "Possessão Total",
      "Exorcismo Final"
    ],
    "preco_melhoria": 210,
    "dono": null
  },
  {
    "nome": "Rua Elm - Freddy Krueger",
    "tipo": "propriedade",
    "preco": 440,
    "alugueis": [
      220,
      440,
      660,
      880,
      1100,
      1320
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Pesadelos Recorrentes",
      "Garras Afiadas",
      "Caldeira do Inferno",
      "Sonho Mortal",
      "Freddy no Seu Sono"
    ],
    "preco_melhoria": 220,
    "dono": null
  },
  {
    "nome": "Acampamento Crystal Lake - Jason Voorhees",
    "tipo": "propriedade",
    "preco": 460,
    "alugueis": [
      230,
      460,
      690,
      920,
      1150,
      1380
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Armadilhas de Urso",
      "Machado Ensanguentado",
      "Máscara de Hóquei",
      "Lago das Almas",
      "Vingança de Jason"
    ],
    "preco_melhoria": 230,
    "dono": null
  },
  {
    "nome": "Caminhão do Creeper - Olhos Famintos",
    "tipo": "transporte",
    "preco": 480,
    "alugueis": [
      240,
      480,
      720,
      960,
      1200,
      1440
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Placas de Carro",
      "Garras do Creeper",
      "Asas Cortantes",
      "Faro de Sangue",
      "Terror nos Céus"
    ],
    "preco_melhoria": 240,
    "dono": null
  },
  {
    "nome": "O Massacre da Serra Elétrica",
    "tipo": "propriedade",
    "preco": 500,
    "alugueis": [
      250,
      500,
      750,
      1000,
      1250,
      1500
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Serras Elétricas",
      "Ganchos de Açougue",
      "Poço de Sangue",
      "Família Sawyer",
      "Matadouro de Leatherface"
    ],
    "preco_melhoria": 250,
    "dono": null
  },
  {
    "nome": "Transporte de Prisioneiros",
    "tipo": "va_para_prisao",
    "preco": 520
  },
  {
    "nome": "Bar do Moe - Os Simpsons",
    "tipo": "propriedade",
    "preco": 540,
    "alugueis": [
      270,
      540,
      810,
      1080,
      1350,
      1620
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Canecas de Chopp",
      "Drinks Envenenados",
      "Retratos de Terror",
      "Fantasmas do Bar",
      "Taverna Amaldiçoada"
    ],
    "preco_melhoria": 270,
    "dono": null
  },
  {
    "nome": "Casa do Homer Simpson",
    "tipo": "propriedade",
    "preco": 560,
    "alugueis": [
      280,
      560,
      840,
      1120,
      1400,
      1680
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Cervejas Duff Malditas",
      "Porão Radioativo",
      "Fantasmas de Springfield",
      "Monstros da Vizinhança",
      "Maldição de Homer"
    ],
    "preco_melhoria": 280,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Usina Nuclear de Springfield",
    "tipo": "propriedade",
    "preco": 580,
    "alugueis": [
      290,
      580,
      870,
      1160,
      1450,
      1740
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Barras de Urânio",
      "Vazamento Nuclear",
      "Mutação Radioativa",
      "Zona de Exclusão",
      "Fusão do Reator"
    ],
    "preco_melhoria": 290,
    "dono": null
  },
  {
    "nome": "Sinal de TV - O Chamado",
    "tipo": "servico",
    "preco": 600,
    "alugueis": [
      300,
      600,
      900,
      1200,
      1500,
      1800
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Fitas VHS Malditas",
      "Poço das Trevas",
      "Sinal Amaldiçoado",
      "Visão de Samara",
      "Chamado da Morte"
    ],
    "preco_melhoria": 300,
    "dono": null
  },
  {
    "nome": "Caixa de Pandora",
    "tipo": "especial"
  },
  {
    "nome": "Oferenda Sobrenatural",
    "tipo": "imposto",
    "valor": 100
  },
  {
    "nome": "Casa de Cera - A Casa de Cera",
    "tipo": "propriedade",
    "preco": 620,
    "alugueis": [
      310,
      620,
      930,
      1240,
      1550,
      1860
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Estátuas de Cera",
      "Câmara de Derreter",
      "Cera Humana",
      "Exposição Macabra",
      "Museu do Horror"
    ],
    "preco_melhoria": 310,
    "dono": null
  },
  {
    "nome": "Mansão da Família Addams",
    "tipo": "propriedade",
    "preco": 640,
    "alugueis": [
      320,
      640,
      960,
      1280,
      1600,
      1920
    ],
    "melhorias": 0,
    "nome_melhoria": [
      "Plantas Carnívoras",
      "Poção de Mortem",
      "Mão Decepada",
      "Espírito de Lurch",
      "Família Addams Completa"
    ],
    "preco_melhoria": 320,
    "dono": null
  }
];

const CARTAS_PANDORA = [
  // 16 CARTAS BOAS
  {
    "texto": "Você vendeu ingressos VIP para uma tour segura na Ilha da Caveira. Receba $150",
    "valor_alteracao": 150
  },
  {
    "texto": "Drácula comprou sangue artificial do seu laboratório. Receba $100",
    "valor_alteracao": 100
  },
  {
    "texto": "A prefeitura de Hawkins pagou pelo seu silêncio sobre o Mundo Invertido. Receba $200",
    "valor_alteracao": 200
  },
  {
    "texto": "Homer Simpson deixou cair dinheiro no Bar do Moe e você achou. Receba $50",
    "valor_alteracao": 50
  },
  {
    "texto": "Você cobrou pedágio no estacionamento do Bates Motel. Receba $80",
    "valor_alteracao": 80
  },
  {
    "texto": "Vendeu uma fita de vídeo rara que não estava amaldiçoada pela Samara. Receba $120",
    "valor_alteracao": 120
  },
  {
    "texto": "Encontrou suprimentos valiosos abandonados em Alexandria (The Walking Dead). Receba $100",
    "valor_alteracao": 100
  },
  {
    "texto": "A Família Addams pagou adiantado pela festa no cemitério. Receba $200",
    "valor_alteracao": 200
  },
  {
    "texto": "Você ganhou a aposta de sobrevivência na Madrugada dos Mortos (Shopping Center). Receba $150",
    "valor_alteracao": 150
  },
  {
    "texto": "Conseguiu capturar e vender um filhote de T-Rex do Jurassic Park. Receba $250",
    "valor_alteracao": 250
  },
  {
    "texto": "Descobriu o esconderijo de armas do Predador e vendeu no mercado negro. Receba $180",
    "valor_alteracao": 180
  },
  {
    "texto": "A Usina Nuclear te pagou uma indenização por exposição à radiação. Receba $200",
    "valor_alteracao": 200
  },
  {
    "texto": "Você desativou a armadilha do Jigsaw e ficou com o prêmio oculto! Receba $150",
    "valor_alteracao": 150
  },
  {
    "texto": "O Vaticano te recompensou por ajudar no exorcismo de Regan. Receba $300",
    "valor_alteracao": 300
  },
  {
    "texto": "Escapou do Caminhão do Creeper e achou uma mala de dinheiro na fuga. Receba $100",
    "valor_alteracao": 100
  },
  {
    "texto": "Vendeu uma estátua hiper-realista da Casa de Cera para um colecionador. Receba $120",
    "valor_alteracao": 120
  },

  // 16 CARTAS RUINS
  {
    "texto": "O boneco Chucky sabotou os freios do seu carro na Fábrica! Pague $100",
    "valor_alteracao": -100
  },
  {
    "texto": "Freddy Krueger invadiu seus sonhos e destruiu sua sanidade na Rua Elm. Pague $150",
    "valor_alteracao": -150
  },
  {
    "texto": "Jason Voorhees destruiu sua barraca no Acampamento Crystal Lake. Pague $80",
    "valor_alteracao": -80
  },
  {
    "texto": "Pennywise arrastou seus pertences para o esgoto de Derry. Pague $120",
    "valor_alteracao": -120
  },
  {
    "texto": "Você foi pego no Assalto no Beco do Crime e perdeu sua carteira. Pague $200",
    "valor_alteracao": -200
  },
  {
    "texto": "Annabelle causou atividade poltergeist e quebrou seus móveis caros. Pague $150",
    "valor_alteracao": -150
  },
  {
    "texto": "Art o Palhaço (Terrifier) vandalizou a fachada da sua casa. Pague $100",
    "valor_alteracao": -100
  },
  {
    "texto": "Michael Myers arrombou a porta da sua casa na noite de Halloween. Pague $180",
    "valor_alteracao": -180
  },
  {
    "texto": "Sua visita ao Asilo Arkham terminou com você sedado e cobrado. Pague $200",
    "valor_alteracao": -200
  },
  {
    "texto": "A serra elétrica do Leatherface cortou a fiação da sua propriedade. Pague $150",
    "valor_alteracao": -150
  },
  {
    "texto": "Você olhou para a entidade na Casa do Sorria e precisou de terapia intensiva. Pague $100",
    "valor_alteracao": -100
  },
  {
    "texto": "O monstro do Laboratório de Frankenstein escapou e destruiu seu jardim. Pague $80",
    "valor_alteracao": -80
  },
  {
    "texto": "Você foi multado pelo transporte ilegal de prisioneiros. Pague $120",
    "valor_alteracao": -120
  },
  {
    "texto": "A Casa do Homer Simpson explodiu e os estilhaços atingiram seu telhado. Pague $250",
    "valor_alteracao": -250
  },
  {
    "texto": "Ghostface (Pânico) te ligou a cobrar e você caiu na pegadinha. Pague $50",
    "valor_alteracao": -50
  },
  {
    "texto": "O T-Rex do Jurassic Park amassou seu carro enquanto você fugia. Pague $200",
    "valor_alteracao": -200
  }
];
const INDICE_PRISAO = TABULEIRO.findIndex(c => c.tipo === "prisao");

// Mapeamento Direto pelos Nomes Exatos dos Ficheiros das Casas no Tabuleiro
const URLS_IMAGENS = {
    'portal': 'assets/portal.png',
    'pandora': 'assets/pandora.png',
    'bar_moe': 'assets/bar_moe.png',
    'casa_homer': 'assets/casa_homer.png',
    'exorcista': 'assets/fotoexorcista.jpg',
    'mansao_spencer': 'assets/mansao_spencer.png',
    'addams': 'assets/familia_addams.jpg',
    'rua_elm': 'assets/rua_elm.png',
    'prisao': 'assets/prisao.png',
    'banheiro': 'assets/banheiro.png',
    'esgotos': 'assets/esgotos.png',
    'usina': 'assets/usina.png',
    'annabelle': 'assets/annabelle.png',
    'transporte_prisioneiros': 'assets/transporte_prisioneiros.webp',
    'chucky': 'assets/chucky.jpg',
    'myers': 'assets/myers.webp',
    'crystal_lake': 'assets/crystal_lake.jpeg',
    'dracula': 'assets/dracula.jpeg',
    'sorria': 'assets/sorria.jpg',
    'jurassic': 'assets/jurassic.jpeg',
    'king_kong': 'assets/king_kong.jpeg',
    'chamado': 'assets/ochamado.jpg',
    'bates_motel': 'assets/bates_motel.jpg',
    'hawkins': 'assets/labohankins.jpg',
    'arkham': 'assets/arkham.jpg',
    'panico': 'assets/panico.jpg',
    'terrifier': 'assets/terrifier.jpg',
    'predador': 'assets/predador.jpg',
    'walking_dead': 'assets/walking_dead.jpg',
    'madrugada': 'assets/madrugada_mortos.jpg',
    'assalto': 'assets/assalto_beco.jpg',
    'cera': 'assets/casa_de_cera.jpg',
    'oferenda': 'assets/oferenda.jpg',
    'massacre': 'assets/fotomassacre.jpg',
    'creeper': 'assets/fotoolhosfamintos.jpeg',
    'frankenstein': 'assets/labofrankten.jpeg',
    'estacionamento': 'assets/estacionamento_terror.png',
    'default': 'assets/portal.png'
};

const URLS_VIDEOS = {
    'oferenda': 'assets/videooferendasobrenatural.MP4',
    'supernatural': 'assets/videooferendasobrenatural.MP4',
    'impala': 'assets/videooferendasobrenatural.MP4',
    'casa_homer': 'assets/videocasadohomer.MP4',
    'myers': 'assets/videocasadosmyers.MP4',
    'michael': 'assets/videocasadosmyers.MP4',
    'michael_myers': 'assets/videocasadosmyers.MP4',
    'crystal_lake': 'assets/videocrystajason.MP4',
    'jason': 'assets/videocrystajason.MP4',
    'banheiro': 'assets/videojigsaw.MP4',
    'jigsaw': 'assets/videojigsaw.MP4',
    'rua_elm': 'assets/VIDEOFREDY.MP4',
    'freddy': 'assets/VIDEOFREDY.MP4',
    'sorria': 'assets/videosorria.MP4',
    'annabelle': 'assets/videoquartodeannabelle.MP4',
    'esgotos': 'assets/videoitacoisa.MP4',
    'pennywise': 'assets/videoitacoisa.MP4',
    'chucky': 'assets/videofabricachuck.MP4',
    'chuck': 'assets/videofabricachuck.MP4',
    'bates_motel': 'assets/videobatesmotel.MP4',
    'psicose': 'assets/videobatesmotel.MP4',
    'jurassic': 'assets/videojurrassic.MP4',
    'jurrassic': 'assets/videojurrassic.MP4',
    'dracula': 'assets/videodracula.MP4',
    'castelo_dracula': 'assets/videodracula.MP4',
    'castelo_do_dracula': 'assets/videodracula.MP4',
    'castelo': 'assets/videodracula.MP4',
    'king_kong': 'assets/videokingkong.MP4',
    'kingkong': 'assets/videokingkong.MP4',
    'kong': 'assets/videokingkong.MP4',
    'massacre': 'assets/videomassacredaserra.MP4',
    'leatherface': 'assets/videomassacredaserra.MP4',
    'bar_moe': 'assets/VIDEOBARDOMOE.MP4',
    'chuckfreios': 'assets/chuckfreios.MP4',
    'usina': 'assets/videousina.MP4',
    'exorcista': 'assets/videoexorcista.MP4',
    'transporte_prisioneiros': 'assets/video_prisao.MP4',
    'prisao': 'assets/video_prisao.MP4',
    'hawkins': 'assets/videolaboratoriodehankings.MP4',
    'mundo_invertido': 'assets/videolaboratoriodehankings.MP4',
    'frankenstein': 'assets/videolaboratoriofrank.MP4',
    'creeper': 'assets/videoolhosfamintos.MP4',
    'estacionamento': 'assets/videoestacionamentolivre.MP4',
    'pandora': 'assets/videocaixadepandora.MP4',
    'arkham': 'assets/videoasiloarkham.MP4',
    'asilo_arkham': 'assets/videoasiloarkham.MP4',
    'madrugada': 'assets/videomadrugadamortos.MP4',
    'panico': 'assets/videopanico.MP4',
    'predador': 'assets/videopredador.MP4',
    'assalto': 'assets/videoassaltonobeco.MP4',
    'terrifier': 'assets/videoterrifier.MP4',
    'walking_dead': 'assets/videotwd.MP4',
    'chamado': 'assets/videochamado.MP4',
    'cera': 'assets/videocasadecera.MP4',
    'addams': 'assets/videocasadafamiliaadans.MP4'
};

/* ================================================================
   SISTEMA DE ÁUDIO E EFEITOS SONOROS (Web Audio API Synthesizer)
   ================================================================ */
const SoundFX = {
    audioCtx: null,
    muted: false,
    bgmOsc: null,
    bgmGain: null,

    init() {
        if (!this.audioCtx && typeof window !== 'undefined') {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
            }
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume().catch(() => {});
        }
    },

    toggleMute() {
        this.muted = !this.muted;
        const btn = document.getElementById('btn-audio-toggle');
        if (btn) {
            btn.innerHTML = this.muted ? '🔇 ÁUDIO: DESLIGADO' : '🔊 ÁUDIO: LIGADO';
            btn.style.borderColor = this.muted ? '#ff0055' : '#00ffff';
            btn.style.color = this.muted ? '#ff0055' : '#00ffff';
        }
        if (this.muted) {
            this.stopBGM();
        } else {
            this.startBGM();
        }
        try { localStorage.setItem('pesadelos_audio_muted', this.muted ? '1' : '0'); } catch(e){}
    },

    playFile(filePath, fallbackFn) {
        if (this.muted) return;
        try {
            const audio = new Audio(filePath);
            audio.volume = 0.8;
            audio.play().catch(e => {
                if (fallbackFn) fallbackFn();
            });
        } catch(e) {
            if (fallbackFn) fallbackFn();
        }
    },

    playDiceRoll() {
        if (this.muted) return;
        try {
            const diceAudio = new Audio('assets/audiodados.mp3');
            diceAudio.volume = 0.95;
            diceAudio.currentTime = 0;
            diceAudio.play().catch(e => {
                console.log("Audio failed to play", e);
            });
        } catch(e) {
            console.log("Audio failed to play", e);
        }
    },

    playBuy() {
        this.playFile('assets/som comprar.mp3', () => this.playBuySynth());
    },

    playBuySynth() {
        if (this.muted) return;
        this.init();
        if (!this.audioCtx) return;

        const now = this.audioCtx.currentTime;
        const freqs = [523.25, 659.25, 783.99, 1046.50];
        freqs.forEach((f, idx) => {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, now + idx * 0.08);

            gain.gain.setValueAtTime(0.12, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.2);
        });
    },

    playRent() {
        this.playFile('assets/somaluguel.mp3', () => this.playRentSynth());
    },

    playRentSynth() {
        if (this.muted) return;
        this.init();
        if (!this.audioCtx) return;

        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.35);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.35);
    },

    playPandora() {
        this.playFile('assets/som_pandora.wav', () => this.playPandoraSynth());
    },

    playPandoraSynth() {
        if (this.muted) return;
        this.init();
        if (!this.audioCtx) return;

        const now = this.audioCtx.currentTime;
        [150, 212.13, 300].forEach(f => {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now);

            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            osc.start(now);
            osc.stop(now + 0.8);
        });
    },

    playJail() {
        this.playFile('assets/somprisao.mp3', () => this.playJailSynth());
    },

    playJailSynth() {
        if (this.muted) return;
        this.init();
        if (!this.audioCtx) return;

        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.4);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.4);
    },

    playPortal() {
        this.playFile('assets/somportal.mp3', () => this.playPortalSynth());
    },

    playPortalSynth() {
        if (this.muted) return;
        this.init();
        if (!this.audioCtx) return;

        const now = this.audioCtx.currentTime;
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
        notes.forEach((f, i) => {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now + i * 0.06);

            gain.gain.setValueAtTime(0.1, now + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            osc.start(now + i * 0.06);
            osc.stop(now + i * 0.06 + 0.25);
        });
    },

    startBGM() {
        if (this.muted) return;
        this.init();
        if (!this.audioCtx) return;
        if (this.bgmOsc) return;

        try {
            const now = this.audioCtx.currentTime;
            this.bgmOsc = this.audioCtx.createOscillator();
            this.bgmGain = this.audioCtx.createGain();

            this.bgmOsc.type = 'sine';
            this.bgmOsc.frequency.setValueAtTime(55, now);

            this.bgmGain.gain.setValueAtTime(0.02, now);

            this.bgmOsc.connect(this.bgmGain);
            this.bgmGain.connect(this.audioCtx.destination);

            this.bgmOsc.start(now);
        } catch(e){}
    },

    stopBGM() {
        if (this.bgmOsc) {
            try {
                this.bgmOsc.stop();
                this.bgmOsc.disconnect();
            } catch(e){}
            this.bgmOsc = null;
            this.bgmGain = null;
        }
    }
};

// Mapeamento Exato dos Ficheiros de Peões para Jogadores e CPUs
const PERSONAGENS_JOGADORES = [
    {
        charNome: "Chucky",
        avatar: "assets/chuckypeao.png",
        cor: "#bfff00",
        perkNome: "Boneco Ladrão",
        perkDesc: "Sempre que cair na mesma casa que alguém, rouba $50 da pessoa."
    },
    {
        charNome: "Jason",
        avatar: "assets/jasonpeao.png",
        cor: "#00ffff",
        perkNome: "Territorialista",
        perkDesc: "Imune à Prisão e não paga aluguel no Acamp. Crystal Lake."
    },
    {
        charNome: "Freddy",
        avatar: "assets/freddypeao.png",
        cor: "#ff007f",
        perkNome: "Mestre dos Pesadelos",
        perkDesc: "Ao rolar dados iguais (duplas), suga $20 de todos os jogadores vivos."
    },
    {
        charNome: "Annabelle",
        avatar: "assets/annabellepeao.png",
        cor: "#ff00ff",
        perkNome: "Presença Poltergeist",
        perkDesc: "Toda vez que comprar uma casa, os outros pagam a ela $15 de proteção."
    },
    {
        charNome: "Homer",
        avatar: "assets/homerpeao.png",
        cor: "#00ff99",
        perkNome: "Sorte de Bêbado",
        perkDesc: "Ganha $50 se passar/cair pelo Bar do Moe, Casa do Homer ou Usina."
    },
    {
        charNome: "Pennywise",
        avatar: "assets/peaoitacoisa.png",
        cor: "#ffd700",
        perkNome: "Flutuam Todos",
        perkDesc: "O aluguel cobrado das suas propriedades é 15% mais caro pros outros."
    },
    {
        charNome: "Jigsaw",
        avatar: "assets/peaojigsaw.png",
        cor: "#bc13fe",
        perkNome: "Que Os Jogos Comecem",
        perkDesc: "Tenta sair de graça da prisão girando os dados assim que entra."
    },
    {
        charNome: "Leatherface",
        avatar: "assets/peaomassacredaserra.png",
        cor: "#ff6600",
        perkNome: "Motosserra de Desconto",
        perkDesc: "Todas as melhorias que você compra custam 20% a menos."
    },
    {
        charNome: "Michael Myers",
        avatar: "assets/peaomichaelmyers.png",
        cor: "#00e5ff",
        perkNome: "Passos Silenciosos",
        perkDesc: "Tem 15% de chance de ignorar completamente o aluguel ao cair numa casa."
    },
    {
        charNome: "Predador",
        avatar: "assets/peaopredador.png",
        cor: "#39ff14",
        perkNome: "Autodestruição",
        perkDesc: "Se for à falência, explode! O jogador que te faliu perde $300."
    },
    {
        charNome: "Terrifier",
        avatar: "assets/peaoterrifier.png",
        cor: "#7df9ff",
        perkNome: "Humor Sádico",
        perkDesc: "Paga sempre metade do valor nas Oferendas e multas da Pandora."
    },
    {
        charNome: "Zumbi",
        avatar: "assets/peaozumbi.png",
        cor: "#ff3366",
        perkNome: "Infecção Viral",
        perkDesc: "Ao passar pelo Início, quem estiver num raio de 3 casas perde $20."
    },
    {
        charNome: "Eleven",
        avatar: "assets/peao11.png",
        cor: "#ff0055",
        perkNome: "Controle Mental",
        perkDesc: "Todos os aluguéis que você paga recebem 10% de desconto."
    },
    {
        charNome: "Ghostface",
        avatar: "assets/peaopanico.png",
        cor: "#ffffff",
        perkNome: "Telefonema Macabro",
        perkDesc: "Ao tirar carta ruim em Pandora, passa 50% do prejuízo para o mais rico."
    },
    {
        charNome: "King Kong",
        avatar: "assets/peaokingkong.png",
        cor: "#ffaa00",
        perkNome: "Passos de Gigante",
        perkDesc: "Avança sempre +1 casa extra após rolar os dados."
    },
    {
        charNome: "Meg",
        avatar: "assets/peaomeg.png",
        cor: "#ff99cc",
        perkNome: "Imunidade Infantil",
        perkDesc: "Nunca paga Oferenda Sobrenatural e anula multas ruins de Pandora."
    },
    {
        charNome: "Mãozinha",
        avatar: "assets/peaomao.png",
        cor: "#dcdcdc",
        perkNome: "Furtividade Ágil",
        perkDesc: "Ganha $10 extras ao tirar número ímpar nos dados."
    },
    {
        charNome: "Lisa",
        avatar: "assets/peaoliza.png",
        cor: "#ffcc00",
        perkNome: "Mente Brilhante",
        perkDesc: "Tem 25% de chance de anular completamente os efeitos ruins da Pandora."
    },
    {
        charNome: "Marge",
        avatar: "assets/peaomarge.png",
        cor: "#3366ff",
        perkNome: "Economia Doméstica",
        perkDesc: "Ao passar pelo Ponto de Partida, ganha $250 ao invés de $200."
    },
    {
        charNome: "Bart",
        avatar: "assets/peaobart.png",
        cor: "#ff3300",
        perkNome: "Vândalo",
        perkDesc: "Tem 15% de chance de pichar a casa e pagar só 50% do aluguel."
    },
    {
        charNome: "Pietro",
        avatar: "assets/peaopietro.png",
        cor: "#4169e1",
        perkNome: "Liderança de Capitão",
        perkDesc: "Recebe 20% de desconto nos aluguéis que paga e tem 30% de chance de anular efeitos ruins da Pandora."
    },
    {
        charNome: "Enzo",
        avatar: "assets/enzopeao1.png",
        cor: "#ff8c00",
        perkNome: "Reflexos Rápidos",
        perkDesc: "Tem 20% de chance de escapar de qualquer aluguel ao cair na propriedade de um adversário."
    }
];

let selectedCharIndex = 0;
let chosenHumanChars = [];
let chosenHumanNames = [];
let currentHumanPicking = 1;

function renderCharSelectMenu() {
    const grid = document.getElementById('char-select-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // Update the player name label and clear input for each human
    const nameLabel = document.getElementById('player-name-label');
    const nameInput = document.getElementById('player-name-input');
    if (nameLabel) nameLabel.textContent = `✏️ Nome do Jogador ${currentHumanPicking}:`;
    if (nameInput) nameInput.value = chosenHumanNames[currentHumanPicking - 1] || '';

    PERSONAGENS_JOGADORES.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = `char-card${idx === selectedCharIndex ? ' selected' : ''}`;
        card.setAttribute('data-idx', idx);
        card.onclick = () => {
            if (card.classList.contains('disabled-char')) return;
            selectedCharIndex = idx;
            document.querySelectorAll('.char-card').forEach((c, i) => {
                c.classList.toggle('selected', i === idx);
            });
            
            let oldEstado = estado;
            const dummy = { nome: p.charNome, topColor: p.cor, imgUrl: p.avatar };
            const msg = `<div style="text-align:center;"><strong style="color:${p.cor}; font-size:1.2rem;">${p.perkNome}</strong><br><br><span style="font-size:1rem; color:#ccc;">${p.perkDesc}</span></div>`;
            mostrarPropertyCard(dummy, msg, () => {
                const pcard = document.getElementById('property-card-modal');
                if(pcard) pcard.style.display = 'none';
                if (estado === "AGUARDANDO_DECISAO") estado = oldEstado;
            }, null, "FECHAR", null);
        };
        if (chosenHumanChars.includes(idx)) {
            card.classList.add('disabled-char');
            card.classList.remove('selected');
        }
        card.innerHTML = `
            <div class="char-img-wrap">
                <img src="${p.avatar}"
                     alt="${p.charNome}"
                     draggable="false"
                     loading="eager"
                     onerror="this.style.opacity='0';">
            </div>
            <div class="char-card-name" style="margin-bottom: 2px;">${p.charNome}</div>
            <div class="char-perk-info" style="font-size: 0.6rem; color: #aaa; text-align: center; padding: 0 5px; line-height: 1.1;">
                <strong style="color: ${p.cor}; font-size: 0.65rem;">${p.perkNome}</strong><br>
                ${p.perkDesc}
            </div>
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
        if (casa.nome.includes('Pandora')) return 'pandora';
        if (casa.nome.includes('Estacionamento')) return 'estacionamento';
    }
    if (casa.tipo === 'prisao') return 'arkham';
    if (casa.tipo === 'va_para_prisao') return 'transporte_prisioneiros';
    const n = casa.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (n.includes('annabelle')) return 'annabelle';
    if (n.includes('chucky') || n.includes('good guys') || n.includes('chuck')) return 'chucky';
    if (n.includes('myers') || n.includes('michael')) return 'myers';
    if (n.includes('crystal lake') || n.includes('jason')) return 'crystal_lake';
    if (n.includes('dracula') || n.includes('castelo')) return 'dracula';
    if (n.includes('sorria')) return 'sorria';
    if (n.includes('jurassic') || n.includes('jurrassic')) return 'jurassic';
    if (n.includes('ilha da caveira') || n.includes('king kong') || n.includes('kong')) return 'king_kong';
    if (n.includes('bar do moe')) return 'bar_moe';
    if (n.includes('casa do homer')) return 'casa_homer';
    if (n.includes('exorcista')) return 'exorcista';
    if (n.includes('addams')) return 'addams';
    if (n.includes('rua elm') || n.includes('freddy')) return 'rua_elm';
    if (n.includes('banheiro') || n.includes('jigsaw')) return 'banheiro';
    if (n.includes('esgoto') || n.includes('pennywise') || n.includes('derry')) return 'esgotos';
    if (n.includes('usina')) return 'usina';
    if (n.includes('chamado')) return 'chamado';
    if (n.includes('bates motel') || n.includes('psicose')) return 'bates_motel';
    if (n.includes('massacre') || n.includes('serra') || n.includes('leatherface')) return 'massacre';
    if (n.includes('creeper')) return 'creeper';
    if (n.includes('frankenstein')) return 'frankenstein';
    if (n.includes('oferenda')) return 'oferenda';
    if (n.includes('cera')) return 'cera';
    if (n.includes('assalto')) return 'assalto';
    if (n.includes('madrugada')) return 'madrugada';
    if (n.includes('alexandria') || n.includes('walking dead')) return 'walking_dead';
    if (n.includes('panico') || n.includes('pânico')) return 'panico';
    if (n.includes('terrifier') || n.includes('art')) return 'terrifier';
    if (n.includes('predador')) return 'predador';
    if (n.includes('arkham')) return 'arkham';
    if (n.includes('hawkins')) return 'hawkins';
    if (n.includes('mundo invertido')) return 'mundo_invertido';
    if (n.includes('impala') || n.includes('supernatural')) return 'supernatural';
    return null;
}

function getFallbackSvg(casa) {
    let emoji = '🏚️';
    let color1 = '#333333';
    let color2 = '#000000';
    
    const n = casa.nome.toLowerCase();
    if (n.includes('chucky') || n.includes('good guys')) { emoji = '🔪'; color1 = '#cc8800'; color2 = '#8b0000'; }
    else if (n.includes('myers')) { emoji = '🎃'; color1 = '#cc5500'; color2 = '#111111'; }
    else if (n.includes('crystal lake') || n.includes('jason')) { emoji = '🪓'; color1 = '#002233'; color2 = '#001100'; }
    else if (n.includes('dracula') || n.includes('drácula')) { emoji = '🦇'; color1 = '#4a0000'; color2 = '#0a0000'; }
    else if (n.includes('mundo invertido')) { emoji = '🌌'; color1 = '#2d004d'; color2 = '#000000'; }
    else if (n.includes('jurassic')) { emoji = '🦖'; color1 = '#004d1a'; color2 = '#001a00'; }
    else if (n.includes('king kong') || n.includes('caveira')) { emoji = '🦍'; color1 = '#333333'; color2 = '#0d0d0d'; }
    else if (n.includes('bates motel')) { emoji = '🚿'; color1 = '#404040'; color2 = '#1a1a00'; }
    else if (n.includes('transporte') || n.includes('delorean') || casa.tipo === 'transporte') { emoji = '🚓'; color1 = '#003366'; color2 = '#000022'; }
    else if (n.includes('imposto') || casa.tipo === 'imposto') { emoji = '💰'; color1 = '#333333'; color2 = '#111111'; }
    else if (n.includes('destino') || n.includes('sorte') || n.includes('revés')) { emoji = '🔮'; color1 = '#660066'; color2 = '#1a001a'; }
    else if (n.includes('companhia') || n.includes('usina') || casa.tipo === 'servico') { emoji = '☢️'; color1 = '#336600'; color2 = '#112200'; }
    else if (n.includes('prisão') || n.includes('prisao') || casa.tipo === 'prisao') { emoji = '⛓️'; color1 = '#1a1a1a'; color2 = '#000000'; }
    else { emoji = '🎲'; color1 = '#1a1a2e'; color2 = '#16213e'; }
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
        <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="${color1}" />
                <stop offset="100%" stop-color="${color2}" />
            </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
        <text x="50%" y="55%" font-size="200" text-anchor="middle" dominant-baseline="middle" opacity="0.15" filter="drop-shadow(0px 0px 10px rgba(0,0,0,0.8))">${emoji}</text>
    </svg>`;
    
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
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
        let finalImgUrl = imgKey && URLS_IMAGENS[imgKey] ? URLS_IMAGENS[imgKey] : getFallbackSvg(casa);
        casa.imgUrl = finalImgUrl;

        let colorBarHtml = `<div class="tile-color-bar" style="background: ${color};"></div>`;
        let bodyContent = '';
        let priceHtml = casa.preco ? `<div class="tile-price">$${casa.preco}</div>` : '';
        let imgHtml = `<img class="tile-img" src="${finalImgUrl}" alt="">`;

        bodyContent = `${imgHtml}<div class="tile-name">${casa.nome}</div>${priceHtml}`;

        let ownerBadgeHtml = '';
        if (casa.dono) {
            const donoObj = (typeof jogadores !== 'undefined') ? jogadores.find(x => x.nome === casa.dono) : null;
            const cor = donoObj ? donoObj.cor : '#ffd700';
            ownerBadgeHtml = `<div class="owner-badge" style="background: ${cor}; color: #000; box-shadow: 0 0 10px ${cor};">👑 ${casa.dono}</div>`;
            tile.style.borderColor = cor;
            tile.style.boxShadow = `0 0 15px ${cor}, inset 0 0 12px ${cor}aa`;
        }

        tile.innerHTML = `
            ${colorBarHtml}
            ${ownerBadgeHtml}
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

// Retorna o nome da melhoria para o próximo nível
function getNomeMelhoria(casa) {
    const nivel = casa.melhorias || 0;
    if (Array.isArray(casa.nome_melhoria)) {
        return casa.nome_melhoria[Math.min(nivel, casa.nome_melhoria.length - 1)];
    }
    return casa.nome_melhoria || 'Melhoria';
}

// Retorna o custo da próxima melhoria baseado no nível atual (escalonado)
function getCustoMelhoria(casa) {
    const nivel = casa.melhorias || 0;
    let custoOriginal = Math.round(casa.preco_melhoria * (nivel + 1));
    if (casa.dono && typeof jogadores !== 'undefined') {
        let donoObj = jogadores.find(x => x.nome === casa.dono);
        if (donoObj) {
            let ctx = window.triggerPerk(donoObj, 'onBuyUpgrade', { custoOriginal });
            return ctx.newCost;
        }
    }
    return custoOriginal;
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
let currentPandoraIdx = 0;
let pandoraDeck = [];

function drawPandoraCard() {
    if (pandoraDeck.length === 0) {
        pandoraDeck = Array.from({length: CARTAS_PANDORA.length}, (_, i) => i);
        for (let i = pandoraDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pandoraDeck[i], pandoraDeck[j]] = [pandoraDeck[j], pandoraDeck[i]];
        }
    }
    return pandoraDeck.pop();
}

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
    if (curP) {
        curP.textContent = `TURNO: ${j ? `${j.nome} (${j.charNome})`.toUpperCase() : '-'}`;
        curP.style.color = '#ff0055';
        curP.style.textShadow = '0 0 10px rgba(255, 0, 85, 0.8), 0 0 20px rgba(255, 0, 85, 0.4)';
        curP.style.borderBottomColor = 'rgba(255, 0, 85, 0.3)';
    }
    
    // Atualiza o personagem em destaque na barra lateral esquerda
    const activeCharImg = document.getElementById('active-character-img');
    if (activeCharImg && j) {
        activeCharImg.src = j.avatar;
        activeCharImg.style.display = 'block';
    }
    
    let html = '';
    jogadores.forEach((p, idx) => {
        const isActive = (idx === idxJogador);
        const textColor = isActive ? '#ff0055' : '#cccccc';
        const borderColor = isActive ? '#ff00aa' : '#333333';
        
        html += `<div class="player-stat ${!p.ativo ? 'bankrupt' : ''} ${isActive ? 'active-player' : 'inactive-player'}" 
                      style="border-color: ${borderColor};"
                      onclick="mostrarPropriedadesJogador(${idx})">
            <div class="player-avatar-wrap" style="border-color: ${borderColor};">
                <img src="${p.avatar}" alt="${p.charNome}" onerror="this.src='assets/portal.png'">
            </div>
            <div class="player-info">
                <span class="player-name-tag" style="color: ${textColor};">${p.nome}</span>
                <span class="player-char-tag">${p.charNome}</span>
            </div>
            <span class="player-money-tag">$${p.dinheiro}</span>
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
                <img class="figurine-cutout" src="${p.avatar}" alt="${p.charNome}" onerror="this.src='assets/portal.png';">
                <div class="figurine-pedestal-3d"></div>
            `;
            virtualTile.appendChild(figurine);
        });
        
        pawnLayer.appendChild(virtualTile);
    });

    // Atualiza marcação e borda das casas compradas com Badge do Dono
    TABULEIRO.forEach((casa, i) => {
        const tile = document.getElementById(`tile-${i}`);
        if (tile) {
            let ownerBadge = tile.querySelector('.owner-badge');
            if (casa.dono) {
                const donoObj = jogadores.find(x => x.nome === casa.dono);
                const cor = donoObj ? donoObj.cor : '#ffd700';
                
                // Restaura/Mantém a cor original do grupo na barra do topo!
                const colorBar = tile.querySelector('.tile-color-bar');
                if (colorBar) colorBar.style.background = casa.topColor || getTileColor(casa, i);
                
                // Aplica borda vibrante e brilho neon no tom do dono
                tile.style.borderColor = cor;
                tile.style.boxShadow = `0 0 15px ${cor}, inset 0 0 12px ${cor}aa`;
                
                // Cria ou atualiza o Badge do Dono com a cor neon dele
                if (!ownerBadge) {
                    ownerBadge = document.createElement('div');
                    ownerBadge.className = 'owner-badge';
                    tile.appendChild(ownerBadge);
                }
                ownerBadge.style.background = cor;
                ownerBadge.style.color = '#000';
                ownerBadge.style.boxShadow = `0 0 10px ${cor}`;
                ownerBadge.innerHTML = `👑 ${casa.dono}`;
                ownerBadge.style.display = 'block';
            } else {
                const colorBar = tile.querySelector('.tile-color-bar');
                if (colorBar) colorBar.style.background = casa.topColor || getTileColor(casa, i);
                tile.style.borderColor = '';
                tile.style.boxShadow = '';
                if (ownerBadge) ownerBadge.style.display = 'none';
            }
        }
    });
}

function iniciarJogo(humanos, cpus, chosenHumanChars, chosenHumanNames) {
    jogadores = [];
    const pool = [...PERSONAGENS_JOGADORES];
    
    let count = 0;
    for(let i=0; i<humanos; i++) {
        const originalChar = PERSONAGENS_JOGADORES[chosenHumanChars[i]];
        const poolIndex = pool.findIndex(c => c.charNome === originalChar.charNome);
        if (poolIndex > -1) pool.splice(poolIndex, 1);
        const playerName = (chosenHumanNames && chosenHumanNames[i]) ? chosenHumanNames[i] : `Jogador ${i+1}`;
        jogadores.push(new Jogador(playerName, false, originalChar, count++));
    }
    
    for(let i=0; i<cpus; i++) {
        const char = pool.length > 0 ? pool.shift() : PERSONAGENS_JOGADORES[count % PERSONAGENS_JOGADORES.length];
        jogadores.push(new Jogador(`CPU ${i+1}`, true, char, count++));
    }

    if (isOnline && isHost) {
        clientConnections.forEach((conn, index) => {
            conn.send({
                type: 'GAME_START',
                myPlayerIdx: index + 1,
                jogadores: jogadores,
                tabuleiro: TABULEIRO
            });
        });
    }
    
    const setupM = document.getElementById('setup-modal');
    if (setupM) setupM.style.display = 'none';
    const propModal = document.getElementById('property-card-modal');
    if (propModal) propModal.style.display = 'none';
    const uiC = document.getElementById('ui-container');
    if (uiC) uiC.style.display = 'flex';
        
        setTimeout(() => {
            const boardContainer = document.getElementById('board-container');
            const boardGrid = document.getElementById('board-grid');
            if (boardContainer && boardGrid) {
                boardContainer.scrollLeft = (boardGrid.offsetWidth - boardContainer.clientWidth) / 2;
                boardContainer.scrollTop = (boardGrid.offsetHeight - boardContainer.clientHeight) / 2;
            }
        }, 100);
    
    // Centraliza o scroll do tabuleiro no mobile
    setTimeout(() => {
        const boardContainer = document.getElementById('board-container');
        const boardGrid = document.getElementById('board-grid');
        if (boardContainer && boardGrid) {
            boardContainer.scrollLeft = (boardGrid.offsetWidth - boardContainer.clientWidth) / 2;
            boardContainer.scrollTop = (boardGrid.offsetHeight - boardContainer.clientHeight) / 2;
        }
    }, 100);
    
    logMsg(`🎮 Partida iniciada com ${humanos} Humano(s) e ${cpus} CPU(s)!`);
    idxJogador = 0;
    estado = "INICIO_TURNO";
    // Mostrar botões salvar/carregar
    const saveLoadBtns = document.getElementById('save-load-btns');
    if (saveLoadBtns) saveLoadBtns.style.display = 'flex';
    updateUI();
    loopLogica();
}

// ========= SAVE / LOAD =========

function mostrarToast(msg, cor = '#ff0055') {
    const toast = document.getElementById('save-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.borderColor = cor;
    toast.style.boxShadow = `0 0 20px ${cor}88, 0 4px 20px rgba(0,0,0,0.8)`;
    toast.style.display = 'block';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => { toast.style.display = 'none'; }, 2800);
}

function salvarJogo() {
    try {
        // Snapshot das propriedades do tabuleiro (donos, melhorias)
        const tabuleiroSnapshot = TABULEIRO.map(c => ({
            dono:      c.dono      ?? null,
            melhorias: c.melhorias ?? 0
        }));

        // Snapshot dos jogadores
        const jogadoresSnapshot = jogadores.map(j => ({
            id:          j.id,
            nome:        j.nome,
            is_cpu:      j.is_cpu,
            charNome:    j.charNome,
            avatar:      j.avatar,
            cor:         j.cor,
            dinheiro:    j.dinheiro,
            posicao:     j.posicao,
            preso:       j.preso,
            turnos_preso: j.turnos_preso,
            ativo:       j.ativo
        }));

        const save = {
            version:           1,
            savedAt:           new Date().toLocaleString('pt-BR'),
            idxJogador,
            currentPandoraIdx,
            pandoraDeck,
            jogadores:         jogadoresSnapshot,
            tabuleiro:         tabuleiroSnapshot
        };

        localStorage.setItem('imperioSave', JSON.stringify(save));
        mostrarToast('💾 Jogo salvo com sucesso!', '#00ff88');
    } catch(e) {
        mostrarToast('❌ Erro ao salvar!', '#ff0055');
        console.error('Erro ao salvar jogo:', e);
    }
}

function carregarJogo() {
    try {
        const raw = localStorage.getItem('imperioSave');
        if (!raw) {
            mostrarToast('⚠️ Nenhum jogo salvo encontrado!', '#ff8800');
            return false;
        }

        const save = JSON.parse(raw);

        // Restaurar tabuleiro
        save.tabuleiro.forEach((snap, i) => {
            if (TABULEIRO[i]) {
                TABULEIRO[i].dono      = snap.dono;
                TABULEIRO[i].melhorias = snap.melhorias;
            }
        });

        // Restaurar jogadores
        jogadores = save.jogadores.map(snap => {
            // Encontrar o charData correspondente
            const charData = {
                charNome: snap.charNome,
                avatar:   snap.avatar,
                cor:      snap.cor
            };
            const j = new Jogador(snap.nome, snap.is_cpu, charData, snap.id);
            j.dinheiro    = snap.dinheiro;
            j.posicao     = snap.posicao;
            j.preso       = snap.preso;
            j.turnos_preso = snap.turnos_preso;
            j.ativo       = snap.ativo;
            return j;
        });

        idxJogador        = save.idxJogador;
        currentPandoraIdx = save.currentPandoraIdx || 0;
        pandoraDeck       = save.pandoraDeck || [];
        estado            = "INICIO_TURNO";

        // Mostrar UI do jogo
        const lobbyM = document.getElementById('lobby-modal');
        if (lobbyM) lobbyM.style.display = 'none';
        const setupM = document.getElementById('setup-modal');
        if (setupM) setupM.style.display = 'none';
        const uiC = document.getElementById('ui-container');
        if (uiC) uiC.style.display = 'flex';
        const saveLoadBtns = document.getElementById('save-load-btns');
        if (saveLoadBtns) saveLoadBtns.style.display = 'flex';

        // Renderizar tabuleiro e UI
        renderBoard();
        updateUI();
        logMsg(`📂 Partida carregada! Salvo em: ${save.savedAt}`);
        mostrarToast('📂 Partida carregada!', '#aa55ff');

        setTimeout(() => loopLogica(), 500);
        return true;
    } catch(e) {
        mostrarToast('❌ Erro ao carregar!', '#ff0055');
        console.error('Erro ao carregar jogo:', e);
        return false;
    }
}

function verificarSaveNoLobby() {
    const raw = localStorage.getItem('imperioSave');
    const btn = document.getElementById('btn-carregar-lobby');
    const btnApagar = document.getElementById('btn-apagar-lobby');
    if (raw && btn) {
        try {
            const save = JSON.parse(raw);
            btn.style.display = 'block';
            btn.textContent = `📂 CONTINUAR PARTIDA (${save.savedAt || 'salvo'})`;
            if (btnApagar) btnApagar.style.display = 'block';
        } catch(e) {
            btn.style.display = 'none';
            if (btnApagar) btnApagar.style.display = 'none';
        }
    } else {
        if (btn) btn.style.display = 'none';
        if (btnApagar) btnApagar.style.display = 'none';
    }
}

function apagarJogoSalvo() {
    if (confirm('⚠️ Tem certeza que deseja apagar o jogo salvo? Esta ação não pode ser desfeita.')) {
        localStorage.removeItem('imperioSave');
        mostrarToast('🗑️ Jogo salvo apagado com sucesso!', '#ff0055');
        verificarSaveNoLobby();
        
        // Se estiver no jogo (e não no lobby), esconde os botões carregar/apagar
        const btnCarregar = document.getElementById('btn-carregar');
        const btnApagarSalvo = document.getElementById('btn-apagar-salvo');
        if (btnCarregar) btnCarregar.style.display = 'none';
        if (btnApagarSalvo) btnApagarSalvo.style.display = 'none';
    }
}

// ========= FIM SAVE / LOAD =========

function initListeners() {
    const btnStart = document.getElementById('btn-start');
    if (btnStart) {
        btnStart.onclick = () => {
            const inHum = document.getElementById('in-hum');
            const humVal = inHum ? parseInt(inHum.value, 10) : 1;
            const hum = isNaN(humVal) ? 1 : humVal;
            const inCpu = document.getElementById('in-cpu');
            const cpuVal = inCpu ? parseInt(inCpu.value, 10) : 3;
            const cpu = isNaN(cpuVal) ? 3 : cpuVal;
            
            // Disable inputs after first click
            if (inHum) inHum.disabled = true;
            if (inCpu) inCpu.disabled = true;
            
            // Validate if selectedCharIndex is valid (not already chosen)
            if (chosenHumanChars.includes(selectedCharIndex)) {
                return;
            }

            // Capture player name
            const nameInput = document.getElementById('player-name-input');
            const playerName = nameInput && nameInput.value.trim() !== ''
                ? nameInput.value.trim()
                : `Jogador ${currentHumanPicking}`;
            chosenHumanNames[currentHumanPicking - 1] = playerName;
            
            chosenHumanChars.push(selectedCharIndex);
            
            if (currentHumanPicking < hum) {
                currentHumanPicking++;
                const title = document.querySelector('.select-title');
                if (title) title.innerText = `🎭 Escolha o Avatar (Jogador ${currentHumanPicking})`;
                
                // Select the next available character automatically
                for (let i = 0; i < PERSONAGENS_JOGADORES.length; i++) {
                    if (!chosenHumanChars.includes(i)) {
                        selectedCharIndex = i;
                        break;
                    }
                }
                
                if (currentHumanPicking === hum) {
                    btnStart.innerText = "INICIAR CONQUISTA";
                } else {
                    btnStart.innerText = `PRÓXIMO ▶`;
                }
                
                renderCharSelectMenu();
            } else {
                iniciarJogo(hum, cpu, chosenHumanChars, chosenHumanNames);
            }
        };
    }

    const btnRolar = document.getElementById('btn-rolar');
    if (btnRolar) {
        btnRolar.onclick = () => {
            if (estado === "AGUARDANDO_ROLO") rolarDados();
        };
    }

    const btnSalvar = document.getElementById('btn-salvar');
    if (btnSalvar) btnSalvar.onclick = () => salvarJogo();

    const btnCarregar = document.getElementById('btn-carregar');
    if (btnCarregar) btnCarregar.onclick = () => {
        if (confirm('⚠️ Carregar o jogo salvo vai substituir a partida atual. Continuar?')) {
            carregarJogo();
        }
    };
    
    const btnApagarSalvo = document.getElementById('btn-apagar-salvo');
    if (btnApagarSalvo) btnApagarSalvo.onclick = () => apagarJogoSalvo();

    const btnCarregarLobby = document.getElementById('btn-carregar-lobby');
    if (btnCarregarLobby) btnCarregarLobby.onclick = () => carregarJogo();
    
    const btnApagarLobby = document.getElementById('btn-apagar-lobby');
    if (btnApagarLobby) btnApagarLobby.onclick = () => apagarJogoSalvo();

    const btnAudioToggle = document.getElementById('btn-audio-toggle');
    if (btnAudioToggle) btnAudioToggle.onclick = () => SoundFX.toggleMute();
    if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
        document.addEventListener('click', () => { SoundFX.init(); SoundFX.startBGM(); }, { once: true });
    }
}

function rolarDados() {
    const btnRolar = document.getElementById('btn-rolar');
    if (btnRolar) btnRolar.style.display = 'none';

    if (isOnline) {
        if (isHost && idxJogador === myPlayerIdx) {
            const d1 = Math.floor(Math.random() * 6) + 1;
            const d2 = Math.floor(Math.random() * 6) + 1;
            const pIdx = drawPandoraCard();
            currentPandoraIdx = pIdx;
            broadcastToClients({ type: 'DICE_ROLL', d1, d2, pandoraIdx: pIdx });
            animateAndMove(d1, d2);
        } else if (!isHost && idxJogador === myPlayerIdx) {
            hostConnection.send({ type: 'REQUEST_ROLL' });
        }
    } else {
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        currentPandoraIdx = drawPandoraCard();
        animateAndMove(d1, d2);
    }
}

function animateAndMove(d1, d2) {
    SoundFX.playDiceRoll();
    const j = jogadores[idxJogador];
    const diceContainer = document.getElementById('dice-container');
    const d1El = document.getElementById('dice-1');
    const d2El = document.getElementById('dice-2');

    if (diceContainer) diceContainer.style.display = 'flex';
    if (d1El) d1El.classList.add('rolling');
    if (d2El) d2El.classList.add('rolling');

    setTimeout(() => {
        if (d1El) d1El.classList.remove('rolling');
        if (d2El) d2El.classList.remove('rolling');

        if (d1El) d1El.innerHTML = renderDiceFaceHTML(d1);
        if (d2El) d2El.innerHTML = renderDiceFaceHTML(d2);

        let total = d1 + d2;
        const duplas = d1 === d2;
        
        let rollCtx = window.triggerPerk(j, 'onRollDice', { d1: d1, d2: d2, isDouble: duplas });
        if (rollCtx.casaMoveExtras) total += rollCtx.casaMoveExtras;

        if (duplas) {
            j.duplas_seguidas = (j.duplas_seguidas || 0) + 1;
        } else {
            j.duplas_seguidas = 0;
        }

        if (j.duplas_seguidas === 3) {
            j.duplas_seguidas = 0;
            let jailCtx2 = window.triggerPerk(j, 'onJail', {});
            if (jailCtx2.prevented) {
                 logMsg(`🚨 ${j.nome} tirou 3 duplas mas é IMUNE a prisão!`);
                 encerrarTurno();
                 return;
            }
            logMsg(`🚨 3 DUPLAS SEGUIDAS! ${j.nome} foi para o Arkham!`);
            j.posicao = INDICE_PRISAO;
            j.preso = true;
            if (jailCtx2.jigsawAttempt) j.turnos_preso = 0; else j.turnos_preso = 0;
            updateUI();
            encerrarTurno();
        } else {
            logMsg(`🎲 ${j.nome} (${j.charNome}) rolou ${d1} + ${d2} = ${total}`);
            
            if (j.preso) {
                if (duplas) {
                    logMsg(`🔓 ${j.nome} tirou DUPLAS e escapou do Arkham!`);
                    j.preso = false;
                    j.turnos_preso = 0;
                } else {
                    logMsg(`🔒 ${j.nome} não tirou duplas e continua preso.`);
                    setTimeout(encerrarTurno, 1000);
                    return;
                }
            }

            let passos = total;
            const stepTimer = setInterval(() => {
                j.posicao = (j.posicao + 1) % TABULEIRO.length;
                if (j.posicao === 0) {
                    let startCtx = window.triggerPerk(j, 'onCrossStart', { salary: 200 });
                    j.dinheiro += startCtx.salary;
                    SoundFX.playPortal();
                    if (startCtx.salary > 0) logMsg(`🌀 ${j.nome} cruzou o Portal e recebeu $${startCtx.salary}!`);
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
    
    // Se a casa tiver um vídeo associado, reproduz antes de aplicar a regra (limite de 5 vezes por casa)
    if (!window.contagemVideosCasas) window.contagemVideosCasas = {};
    if (!window.contagemVideosCasas[j.posicao]) window.contagemVideosCasas[j.posicao] = 0;
    
    if (imgKey && URLS_VIDEOS[imgKey] && !j.is_cpu && window.contagemVideosCasas[j.posicao] < 5) {
        window.contagemVideosCasas[j.posicao]++;
        mostrarVideoModal(URLS_VIDEOS[imgKey], () => {
             aplicarRegraRestante(j, casa);
        });
    } else {
        aplicarRegraRestante(j, casa);
    }
}

function aplicarRegraRestante(j, casa) {
    window.triggerPerk(j, 'onLand', { casa: casa });
    if (casa.tipo === "va_para_prisao") {
        let jailCtx = window.triggerPerk(j, 'onJail', {});
        if (jailCtx.prevented) {
             encerrarTurno();
             return;
        }
        j.posicao = INDICE_PRISAO;
        j.preso = true;
        j.turnos_preso = 0;
        if (jailCtx.jigsawAttempt) j.preso = true; // manteremos a logica do jigsaw depois na rolarDados
        SoundFX.playJail();
        logMsg(`🚔 ${j.nome} foi enviado para o Asilo Arkham!`);
        updateUI();
        encerrarTurno();
    } else if (["propriedade", "transporte", "servico"].includes(casa.tipo)) {
        if (!casa.dono) {
            if (j.dinheiro >= casa.preco) {
                if (j.is_cpu) {
                    j.dinheiro -= casa.preco;
                    casa.dono = j.nome;
                    window.triggerPerk(j, 'onBuyProperty', { casa: casa });
                    logMsg(`🏠 ${j.nome} comprou ${casa.nome} por $${casa.preco}!`);
                    encerrarTurno();
                } else {
                    mostrarPropertyCard(casa, `Deseja comprar ${casa.nome} por $${casa.preco}?`, () => {
                        if (j.dinheiro >= casa.preco) {
                            j.dinheiro -= casa.preco;
                            casa.dono = j.nome;
                            j.ultimo_credor = casa.dono; // Guardar quem cobrou aluguel
                            window.triggerPerk(j, 'onBuyProperty', { casa: casa });
                            SoundFX.playBuy();
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
            let al = casa.alugueis ? casa.alugueis[nivel] : Math.floor(casa.preco * 0.5);
            let donoObj = jogadores.find(x => x.nome === casa.dono);
            let contextRent = window.triggerPerk(j, 'onPayRent', { valorOriginal: al, dono: donoObj, casa: casa });
            al = contextRent.newRent;
            j.ultimo_credor = casa.dono;
            if (al === 0) {
                if (!j.is_cpu) {
                    mostrarPropertyCard(casa, "Sua Habilidade Passiva evitou o aluguel!", encerrarTurno, encerrarTurno, "Uhu!", null);
                } else {
                    encerrarTurno();
                }
                return;
            }
            
            const pagarAluguelFinal = () => {
                SoundFX.playRent();
                j.dinheiro -= al;
                let dono = jogadores.find(x => x.nome === casa.dono);
                if(dono) dono.dinheiro += al;
                logMsg(`💸 ${j.nome} pagou $${al} de aluguel para ${casa.dono}!`);
                
                if (!j.is_cpu) {
                    const donoObj = jogadores.find(x => x.nome === casa.dono);
                    const dummyCasa = {
                        nome: `💸 Pague $${al} para ${casa.dono}!`,
                        topColor: donoObj ? donoObj.cor : '#cc0000',
                        imgUrl: casa.imgUrl || null
                    };
                    mostrarPropertyCard(dummyCasa, `Você caiu em ${casa.nome} e pagou $${al} de aluguel para ${casa.dono}.`, encerrarTurno, encerrarTurno, "OK", null);
                } else {
                    encerrarTurno();
                }
            };
            
            cobrarDivida(j, al, pagarAluguelFinal);
        } else {
            if ((casa.melhorias||0) < 5 && casa.preco_melhoria) {
                const nivelAtual = casa.melhorias || 0;
                const pm = getCustoMelhoria(casa);
                if (j.is_cpu) {
                    if (j.dinheiro >= pm) {
                        j.dinheiro -= pm;
                        casa.melhorias = nivelAtual + 1;
                        logMsg(`🔧 ${j.nome} instalou ${getNomeMelhoria(casa)} (Nível ${casa.melhorias}) em ${casa.nome} por $${pm}!`);
                    }
                    encerrarTurno();
                } else {
                    mostrarPropertyCard(casa, `Deseja comprar ${getNomeMelhoria(casa)} (Nível ${nivelAtual + 1}) por $${pm}?`, () => {
                        if (j.dinheiro >= pm) {
                            j.dinheiro -= pm;
                            const nomeInstalado = getNomeMelhoria(casa);
                            casa.melhorias = nivelAtual + 1;
                            SoundFX.playBuy();
                            logMsg(`✅ ${nomeInstalado} (Nível ${casa.melhorias}) instalada!`);
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
        let valorImposto = casa.valor;
        let ofCtx = window.triggerPerk(j, 'onOferenda', { valorOriginal: valorImposto });
        valorImposto = ofCtx.newCost !== undefined ? ofCtx.newCost : valorImposto;

        const pagarImposto = () => {
            SoundFX.playRent();
            j.dinheiro -= valorImposto;
            logMsg(`🧾 ${j.nome} pagou $${valorImposto} de imposto/oferenda.`);
            if (!j.is_cpu) {
                const imgKey = getTileImgKey(casa, j.posicao);
                const imgUrl = imgKey && URLS_IMAGENS[imgKey] ? URLS_IMAGENS[imgKey] : null;
                const topColor = getTileColor(casa) || '#333333';
                const dummyCasa = { nome: casa.nome, topColor: topColor, imgUrl: imgUrl };
                mostrarPropertyCard(dummyCasa, `💸 Você pagou $${valorImposto} de oferenda para fugir do espírito.`, encerrarTurno, encerrarTurno, "ENTENDIDO", null);
            } else {
                encerrarTurno();
            }
        };

        if (valorImposto > 0) {
            cobrarDivida(j, valorImposto, pagarImposto);
        } else {
            pagarImposto();
        }
    } else if (casa.tipo === "especial" && casa.nome === "Caixa de Pandora") {
        const c = CARTAS_PANDORA[currentPandoraIdx];
        SoundFX.playPandora();
        
        const finishPandora = () => {
            if (j.is_cpu) {
                encerrarTurno();
            } else {
                let pImg = URLS_IMAGENS['pandora'];
                const dummyCasa = { nome: "Caixa de Pandora", topColor: "#ff8800", imgUrl: pImg };
                mostrarPropertyCard(dummyCasa, c.texto, encerrarTurno, encerrarTurno, "ENTENDIDO", null);
            }
        };

        let altVal = c.valor_alteracao;
        let pCtx = window.triggerPerk(j, 'onDrawPandora', { valorAlteracao: altVal });
        altVal = pCtx.valorAlteracao !== undefined ? pCtx.valorAlteracao : altVal;

        const processarPandora = () => {
            if (altVal < 0) SoundFX.playRent();
            j.dinheiro += altVal;
            logMsg(`📦 Carta de Pandora: ${c.texto}`);
            if (c.ir_prisao) { j.posicao = 10; j.is_preso = true; logMsg(`🚨 ${j.nome} foi para a Prisão!`); }
            
            if (c.texto.includes("Chucky sabotou") && !j.is_cpu) {
                mostrarVideoModal("assets/chuckfreios.MP4", finishPandora);
            } else {
                finishPandora();
            }
        };

        if (altVal < 0) {
            cobrarDivida(j, Math.abs(altVal), processarPandora);
        } else {
            processarPandora();
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
    const btnClose = document.getElementById('btn-close-video');

    if (!modal || !videoEl) {
        if(callback) callback();
        return;
    }

    // Em navegadores WebKit/Safari, alterar dinamicamente a tag <source> frequentemente trava o vídeo.
    // A forma correta e recomendada pela MDN é setar o src diretamente na tag <video>.
    const safeSrc = encodeURI(videoSrc);
    videoEl.innerHTML = ''; 
    videoEl.src = safeSrc;
    videoEl.load();
    modal.style.display = 'flex';

    // Ao terminar o vídeo, tentar não fechar automaticamente (mas o usuário pode fechar)
    // Se o usuário clicar no X
    btnClose.onclick = () => {
        try { 
            videoEl.pause(); 
            videoEl.removeAttribute('src');
            videoEl.load();
        } catch(e){}
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

function mostrarPropriedadesJogador(idx) {
    const p = jogadores[idx];
    if (!p) return;

    // Collect all properties owned by this player
    const propriedades = TABULEIRO.filter(c => c.dono === p.nome);

    const avatarEl = document.getElementById('props-player-avatar');
    if (avatarEl) avatarEl.src = p.avatar;
    const nameEl = document.getElementById('props-player-name');
    if (nameEl) nameEl.textContent = `${p.nome} (${p.charNome})`;
    const moneyEl = document.getElementById('props-player-money');
    if (moneyEl) moneyEl.textContent = `💰 $${p.dinheiro}`;
    const headerEl = document.getElementById('props-modal-header');
    if (headerEl) headerEl.style.borderBottomColor = p.cor || '#ff0055';

    const listEl = document.getElementById('props-list');
    if (!listEl) return;

    if (propriedades.length === 0) {
        listEl.innerHTML = `<div class="props-empty">😱 Nenhuma propriedade ainda!</div>`;
    } else {
        listEl.innerHTML = propriedades.map(c => {
            const nivel = c.melhorias || 0;
            const aluguelAtual = c.alugueis ? c.alugueis[nivel] : Math.floor(c.preco * 0.5);
            const estrelas = '⭐'.repeat(nivel) + (nivel < 5 ? '☆'.repeat(5 - nivel) : '');
            const imgUrl = c.imgUrl || '';
            const tipoLabel = c.tipo === 'transporte' ? '🚗 Transporte' : c.tipo === 'servico' ? '⚡ Serviço' : '🏠 Propriedade';
            return `
                <div class="prop-item" style="border-color: ${p.cor || '#ff0055'}22;">
                    <img class="prop-item-img" src="${imgUrl}" alt="${c.nome}" onerror="this.style.display='none'">
                    <div class="prop-item-info">
                        <div class="prop-item-name">${c.nome}</div>
                        <div class="prop-item-type">${tipoLabel}</div>
                        <div class="prop-item-stars" title="Nível ${nivel}/5">${estrelas}</div>
                        <div class="prop-item-rent">Aluguel atual: <strong>$${aluguelAtual}</strong></div>
                        ${nivel < 5 && c.preco_melhoria ? `<div class="prop-item-upgrade">Próxima melhoria Nível ${nivel + 1}: <strong>$${getCustoMelhoria(c)}</strong> → ${getNomeMelhoria(c)}</div>` : '<div class="prop-item-upgrade prop-maxed">✅ Nível máximo!</div>'}
                    </div>
                </div>`;
        }).join('');
    }

    const propsM = document.getElementById('props-modal');
    if (propsM) propsM.style.display = 'flex';
}

function mostrarPropertyCard(casa, msg, onYes, onNo, btnYesText, btnNoText) {
    estado = "AGUARDANDO_DECISAO";
    const div = document.getElementById('property-card');
    if (!div) return;
    
    const pcHeader = document.getElementById('pc-header');
    if (pcHeader) pcHeader.style.backgroundColor = casa.topColor || '#222';
    const pcTitle = document.getElementById('pc-title');
    if (pcTitle) pcTitle.textContent = casa.nome;
    
    const pcBalance = document.getElementById('pc-player-balance');
    if (pcBalance) {
        const jAtual = (typeof idxJogador !== 'undefined' && typeof jogadores !== 'undefined' && jogadores[idxJogador]) ? jogadores[idxJogador] : null;
        if (jAtual && typeof jAtual.dinheiro === 'number') {
            pcBalance.innerHTML = `💵 Seu Saldo Atual: <strong>$${jAtual.dinheiro}</strong>`;
            pcBalance.style.display = 'block';
        } else {
            pcBalance.style.display = 'none';
        }
    }
    
    const pcImg = document.getElementById('pc-img');
    if (pcImg) {
        if (casa.imgUrl) {
            pcImg.src = casa.imgUrl;
            pcImg.style.display = 'block';
        } else {
            pcImg.style.display = 'none';
        }
    }
    
    const pcMsg = document.getElementById('pc-msg');
    if (pcMsg) pcMsg.innerHTML = msg.replace(/\n/g, '<br>');
    
    const pcDetails = document.getElementById('pc-details');
    if (pcDetails) {
        if (casa.alugueis && Array.isArray(casa.alugueis) && casa.alugueis.length >= 6) {
            let nArr = [];
            if (typeof casa.nome_melhoria === 'string') {
                nArr = casa.nome_melhoria.split(',').map(s => s.trim());
            } else if (Array.isArray(casa.nome_melhoria)) {
                nArr = casa.nome_melhoria;
            }
            const getN = (idx) => (nArr[idx - 1] ? ` (${nArr[idx - 1]})` : '');

            let html = `
                <div class="pc-rent-box">
                    <div class="pc-rent-row"><span>Preço da Propriedade:</span> <strong>$${casa.preco}</strong></div>
                    <div class="pc-rent-row"><span>Aluguel Base:</span> <strong>$${casa.alugueis[0]}</strong></div>
                    <div class="pc-rent-row"><span>Nível 1${getN(1)}:</span> <strong>$${casa.alugueis[1]}</strong></div>
                    <div class="pc-rent-row"><span>Nível 2${getN(2)}:</span> <strong>$${casa.alugueis[2]}</strong></div>
                    <div class="pc-rent-row"><span>Nível 3${getN(3)}:</span> <strong>$${casa.alugueis[3]}</strong></div>
                    <div class="pc-rent-row"><span>Nível 4${getN(4)}:</span> <strong>$${casa.alugueis[4]}</strong></div>
                    <div class="pc-rent-row"><span>Nível 5${getN(5)}:</span> <strong>$${casa.alugueis[5]}</strong></div>
                    ${casa.preco_melhoria ? `<div class="pc-rent-row pc-upgrade-cost"><span>Custo por Melhoria:</span> <strong>$${casa.preco_melhoria}</strong></div>` : ''}
                </div>
            `;
            pcDetails.innerHTML = html;
            pcDetails.style.display = 'block';
        } else {
            pcDetails.innerHTML = '';
            pcDetails.style.display = 'none';
        }
    }
    
    const btnYes = document.getElementById('btn-pc-yes');
    const btnNo = document.getElementById('btn-pc-no');
    
    btnYes.textContent = btnYesText;
    btnYes.onclick = () => { 
        div.style.display='none'; 
        if (sendSyncAction({ type: 'PC_YES' })) return;
        onYes(); 
        if (isHost) setTimeout(broadcastState, 100);
    };
    
    if (btnNoText) {
        btnNo.style.display = 'inline-block';
        btnNo.textContent = btnNoText;
        btnNo.onclick = () => { 
        div.style.display='none'; 
        if (sendSyncAction({ type: 'PC_NO' })) return;
        onNo(); 
        if (isHost) setTimeout(broadcastState, 100);
    };
    } else {
        btnNo.style.display = 'none';
    }
    
    div.style.display = 'flex';
}

function encerrarTurno() {
    const j = jogadores[idxJogador];
    if (j.dinheiro < 0) {
        logMsg(`🚨 ${j.nome} (${j.charNome}) FALIU E ESTÁ FORA DA PARTIDA!`);
        if (j.charNome === "Predador" && j.ultimo_credor) {
             let credorObj = jogadores.find(x => x.nome === j.ultimo_credor);
             window.triggerPerk(j, 'onBankruptByPlayer', { credor: credorObj });
        }
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
    
    const ativos = jogadores.filter(x => x.ativo);
    if (ativos.length === 1 && jogadores.length > 1) {
        const vencedor = ativos[0];
        estado = "FIM_DE_JOGO";
        logMsg(`🏆🎉 PARABÉNS! ${vencedor.nome} (${vencedor.charNome}) VENCEU O IMPÉRIO DOS PESADELOS!`);
        const dummyCasa = { nome: `🏆 ${vencedor.nome} VENCEU!`, topColor: "#ffd700", imgUrl: vencedor.avatar };
        mostrarPropertyCard(dummyCasa, `🎉 ${vencedor.nome} é o grande campeão da partida! O Multiverso é seu!`, () => { location.reload(); }, null, "REINICIAR JOGO", null);
        return;
    } else if (ativos.length === 0 && jogadores.length > 0) {
        estado = "FIM_DE_JOGO";
        logMsg(`💀 TODOS OS JOGADORES FALIRAM! Ninguém sobrou.`);
        return;
    }
    
    const j = jogadores[idxJogador];
    updateUI();
    
    if (!j.ativo) {
        idxJogador = (idxJogador + 1) % jogadores.length;
        setTimeout(loopLogica, 100);
        return;
    }
    
    if (j.preso) {
        j.turnos_preso++;
        if (j.turnos_preso > 3) {
            logMsg(`🚨 ${j.nome} atingiu o limite de turnos e precisa pagar $50 para sair do Arkham!`);
            cobrarDivida(j, 50, () => {
                SoundFX.playRent();
                j.dinheiro -= 50;
                j.preso = false;
                j.turnos_preso = 0;
                // Continua o turno normalmente para rolar os dados
            });
        } else if (j.is_cpu) {
            if (j.dinheiro >= 50) {
                SoundFX.playRent();
                j.dinheiro -= 50;
                j.preso = false;
                j.turnos_preso = 0;
                logMsg(`🤖 ${j.nome} (${j.charNome}) pagou $50 e saiu do Arkham!`);
            } else {
                logMsg(`🤖 ${j.nome} (${j.charNome}) continua preso no Arkham (Turno ${j.turnos_preso}/3)!`);
                estado = "AGUARDANDO_ROLO"; // Vai tentar os dados
                setTimeout(rolarDados, 800);
                return;
            }
        } else {
            const dummyCasa = { nome: "Asilo Arkham", topColor: "#1a1a1a", imgUrl: URLS_IMAGENS['prisao'] || URLS_IMAGENS['arkham'] };
            mostrarPropertyCard(dummyCasa, "Você está no Arkham! Pagar $50 para sair livremente ou tentar tirar duplas nos dados?", () => {
                if (j.dinheiro >= 50) {
                    SoundFX.playRent();
                    j.dinheiro -= 50; j.preso = false; j.turnos_preso = 0;
                    logMsg(`✅ Você pagou $50 e saiu da prisão!`);
                    estado = "AGUARDANDO_ROLO";
                    const btnRolar = document.getElementById('btn-rolar');
                    if (btnRolar) btnRolar.style.display = 'block';
                } else {
                    logMsg(`❌ Dinheiro insuficiente! Você deve tentar os dados.`);
                    estado = "AGUARDANDO_ROLO";
                    const btnRolar = document.getElementById('btn-rolar');
                    if (btnRolar) btnRolar.style.display = 'block';
                }
            }, () => {
                estado = "AGUARDANDO_ROLO";
                const btnRolar = document.getElementById('btn-rolar');
                if (btnRolar) btnRolar.style.display = 'block';
            }, "PAGAR $50", "TENTAR DADOS");
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
    // Esconde UI principal e Setup inicialmente
    const uiC = document.getElementById('ui-container');
    if (uiC) uiC.style.display = 'none';
    const setupModal = document.getElementById('setup-modal');
    if (setupModal) setupModal.style.display = 'none';
    const lobbyModal = document.getElementById('lobby-modal');
    if (lobbyModal) lobbyModal.style.display = 'flex';

    // Eventos do Menu de Lobby
    const btnOffline = document.getElementById('btn-mode-offline');
    if (btnOffline) {
        btnOffline.onclick = () => {
            isOnline = false;
            lobbyModal.style.display = 'none';
            if (setupModal) setupModal.style.display = 'flex';
            renderCharSelectMenu();
        };
    }

    const btnHost = document.getElementById('btn-mode-host');
    if (btnHost) btnHost.onclick = setupHost;

    const btnJoin = document.getElementById('btn-mode-join');
    if (btnJoin) {
        btnJoin.onclick = () => {
            const menuOptions = document.getElementById('lobby-menu-options');
            const joinPanel = document.getElementById('join-panel');
            if (menuOptions) menuOptions.style.display = 'none';
            if (joinPanel) joinPanel.style.display = 'block';
        };
    }

    const btnJoinRoom = document.getElementById('btn-join-room');
    if (btnJoinRoom) btnJoinRoom.onclick = connectToHost;

    const btnHostStart = document.getElementById('btn-host-start');
    if (btnHostStart) btnHostStart.onclick = startHostGame;

    renderCharSelectMenu();
    renderBoardHTML();
    initListeners();
    verificarSaveNoLobby(); // Mostrar botão de continuar partida se houver save
    // Inicializa o layout de app mobile se necessário
    if (window.innerWidth <= 900) {
        initMobileApp();
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 900 && !document.getElementById('mobile-nav-bar')) {
            initMobileApp();
        }
    });
}

/* ================================================================
   APP MOBILE — Nav Bar + Painéis Deslizantes
   Cria a barra de navegação inferior estilo iOS e os painéis
   slide-up para Jogadores e Histórico.
   ================================================================ */
function initMobileApp() {
    // Evita duplicação
    if (document.getElementById('mobile-nav-bar')) return;

    /* ── 1. CRIAR O PAINEL DE JOGADORES (slide-up) ── */
    const playersPanel = document.createElement('div');
    playersPanel.id = 'mobile-players-panel';
    playersPanel.innerHTML = `
        <div class="panel-drag-handle"></div>
        <div class="panel-title">⚔️ JOGADORES</div>
        <div class="panel-inner" id="mobile-players-list"></div>
    `;
    document.body.appendChild(playersPanel);

    /* ── 2. CRIAR A NAV BAR ── */
    const navBar = document.createElement('div');
    navBar.id = 'mobile-nav-bar';
    navBar.innerHTML = `
        <button class="nav-tab active" id="nav-board" aria-label="Tabuleiro">
            <span class="nav-icon">🗺️</span>
            <span>Tabuleiro</span>
        </button>
        <button class="nav-tab nav-tab-dice" id="nav-dice" aria-label="Rolar Dados">
            <div class="nav-dice-btn disabled" id="nav-dice-btn">🎲</div>
            <span class="nav-label">Rolar</span>
        </button>
        <button class="nav-tab" id="nav-players" aria-label="Jogadores">
            <span class="nav-icon">👥</span>
            <span>Jogadores</span>
        </button>
        <button class="nav-tab" id="nav-log" aria-label="Histórico">
            <span class="nav-icon">📜</span>
            <span>Histórico</span>
        </button>
    `;
    document.body.appendChild(navBar);

    /* ── 3. ADICIONAR HANDLE de arraste ao log-feed ── */
    const leftSidebar = document.getElementById('left-sidebar');
    if (leftSidebar) {
        const handle = document.createElement('div');
        handle.className = 'panel-drag-handle';
        const title = document.createElement('div');
        title.className = 'panel-title';
        title.textContent = '📜 HISTÓRICO DA PARTIDA';
        leftSidebar.prepend(title);
        leftSidebar.prepend(handle);
    }

    /* ── 4. LÓGICA DE ABAS ── */
    let activePanel = null; // 'log' | 'players' | null

    function closeAllPanels() {
        if (leftSidebar) leftSidebar.classList.remove('mobile-panel-open');
        playersPanel.classList.remove('mobile-panel-open');
        activePanel = null;
        // Remove overlay se existir
        const overlay = document.getElementById('mobile-overlay');
        if (overlay) overlay.remove();
    }

    function openPanel(which) {
        // Cria overlay semitransparente para fechar ao clicar fora
        let overlay = document.getElementById('mobile-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'mobile-overlay';
            overlay.style.cssText = `
                position:fixed;inset:0;z-index:499;
                background:rgba(0,0,0,0.5);
                backdrop-filter:blur(2px);
            `;
            overlay.addEventListener('click', closeAllPanels);
            document.body.appendChild(overlay);
        }

        if (which === 'log') {
            closeAllPanels();
            // Re-criar overlay após closeAllPanels o removeu
            const ov2 = document.createElement('div');
            ov2.id = 'mobile-overlay';
            ov2.style.cssText = `position:fixed;inset:0;z-index:499;background:rgba(0,0,0,0.5);backdrop-filter:blur(2px);`;
            ov2.addEventListener('click', closeAllPanels);
            document.body.appendChild(ov2);
            if (leftSidebar) leftSidebar.classList.add('mobile-panel-open');
            activePanel = 'log';
        } else if (which === 'players') {
            closeAllPanels();
            const ov2 = document.createElement('div');
            ov2.id = 'mobile-overlay';
            ov2.style.cssText = `position:fixed;inset:0;z-index:499;background:rgba(0,0,0,0.5);backdrop-filter:blur(2px);`;
            ov2.addEventListener('click', closeAllPanels);
            document.body.appendChild(ov2);
            // Sincroniza jogadores no painel expandido
            syncMobilePlayersPanel();
            playersPanel.classList.add('mobile-panel-open');
            activePanel = 'players';
        }
    }

    // Botão Tabuleiro → fecha painéis
    document.getElementById('nav-board').addEventListener('click', () => {
        closeAllPanels();
        setNavActive('nav-board');
    });

    // Botão Jogadores
    document.getElementById('nav-players').addEventListener('click', () => {
        if (activePanel === 'players') {
            closeAllPanels();
            setNavActive('nav-board');
        } else {
            openPanel('players');
            setNavActive('nav-players');
        }
    });

    // Botão Histórico
    document.getElementById('nav-log').addEventListener('click', () => {
        if (activePanel === 'log') {
            closeAllPanels();
            setNavActive('nav-board');
        } else {
            openPanel('log');
            setNavActive('nav-log');
        }
    });

    // Botão Rolar Dados na nav bar
    const navDiceBtn = document.getElementById('nav-dice-btn');
    navDiceBtn.addEventListener('click', () => {
        if (estado === 'AGUARDANDO_ROLO') {
            closeAllPanels();
            rolarDados();
        }
    });

    /* ── 5. SINCRONIZAR estado do botão Rolar com a nav bar ── */
    // Observer para detectar quando o btn-rolar original muda de display
    const btnRolarOriginal = document.getElementById('btn-rolar');
    if (btnRolarOriginal) {
        const observer = new MutationObserver(() => {
            const visible = btnRolarOriginal.style.display !== 'none';
            navDiceBtn.classList.toggle('disabled', !visible);
        });
        observer.observe(btnRolarOriginal, { attributes: true, attributeFilter: ['style'] });
        // Verifica estado inicial
        navDiceBtn.classList.toggle('disabled', btnRolarOriginal.style.display === 'none');
    }

    /* ── 6. Sincronizar painel de jogadores expandido ── */
    function syncMobilePlayersPanel() {
        const originalList = document.getElementById('players-list');
        const mobileList = document.getElementById('mobile-players-list');
        if (originalList && mobileList) {
            mobileList.innerHTML = originalList.innerHTML;
        }
    }

    /* ── 7. Observer para atualizar painel de jogadores ao mudar ── */
    const playersList = document.getElementById('players-list');
    if (playersList) {
        const playersObserver = new MutationObserver(() => {
            if (activePanel === 'players') syncMobilePlayersPanel();
        });
        playersObserver.observe(playersList, { childList: true, subtree: true, characterData: true });
    }
}

function setNavActive(tabId) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    const tab = document.getElementById(tabId);
    if (tab) tab.classList.add('active');
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// ================================================================
//   MULTIPLAYER LOGIC (PeerJS)
// ================================================================
let isOnline = false;
let isHost = false;
let myPeerId = null;
let peer = null;
let hostConnection = null;
let clientConnections = [];
let lobbyClients = [];
let myPlayerIdx = 0; 

function setupHost() {
    isOnline = true;
    isHost = true;
    const menuOpt = document.getElementById('lobby-menu-options');
    if (menuOpt) menuOpt.style.display = 'none';
    const hostP = document.getElementById('host-panel');
    if (hostP) hostP.style.display = 'block';

    const peerId = Math.random().toString(36).substring(2, 6).toUpperCase();
    const roomCodeDisplay = document.getElementById('room-code-display');
    if (roomCodeDisplay) roomCodeDisplay.innerText = peerId;

    peer = new Peer(peerId);
    
    peer.on('open', (id) => {
        console.log('Host criado: ' + id);
    });

    peer.on('connection', (conn) => {
        clientConnections.push(conn);
        lobbyClients.push({ conn: conn, name: 'Jogador ' + (clientConnections.length + 1) });
        updateHostPlayerList();
        
        conn.on('data', (data) => {
            handleClientMessage(data, conn);
        });
        
        conn.on('close', () => {
            clientConnections = clientConnections.filter(c => c !== conn);
            lobbyClients = lobbyClients.filter(c => c.conn !== conn);
            updateHostPlayerList();
        });
    });
}

function updateHostPlayerList() {
    const list = document.getElementById('host-players-list');
    if (list) list.innerHTML = `Amigos Conectados: ${clientConnections.length}`;
    const btnStart = document.getElementById('btn-host-start');
    if (btnStart) {
        if (clientConnections.length > 0) {
            btnStart.style.opacity = '1';
            btnStart.style.pointerEvents = 'auto';
            btnStart.innerText = `INICIAR COM ${clientConnections.length + 1} JOGADORES`;
        } else {
            btnStart.style.opacity = '0.5';
            btnStart.style.pointerEvents = 'none';
            btnStart.innerText = `AGUARDANDO JOGADORES...`;
        }
    }
}

function connectToHost() {
    const joinInput = document.getElementById('join-room-input');
    const roomId = joinInput ? joinInput.value.trim().toUpperCase() : '';
    if (!roomId || roomId.length !== 4) {
        alert("Digite o código de 4 letras.");
        return;
    }
    
    const btnJoinR = document.getElementById('btn-join-room');
    if (btnJoinR) btnJoinR.innerText = "CONECTANDO...";
    
    peer = new Peer();
    peer.on('open', () => {
        hostConnection = peer.connect(roomId);
        
        hostConnection.on('open', () => {
            if (btnJoinR) btnJoinR.style.display = 'none';
            const joinStatus = document.getElementById('join-status');
            if (joinStatus) joinStatus.style.display = 'block';
            isOnline = true;
            isHost = false;
        });
        
        hostConnection.on('data', (data) => {
            handleHostMessage(data);
        });
        
        hostConnection.on('error', (err) => {
            alert("Erro de conexão.");
            if (btnJoinR) btnJoinR.innerText = "CONECTAR";
        });
    });
}

function startHostGame() {
    const lobbyM = document.getElementById('lobby-modal');
    if (lobbyM) lobbyM.style.display = 'none';
    const setupModal = document.getElementById('setup-modal');
    if (setupModal) setupModal.style.display = 'flex';
    
    const offRow = document.getElementById('offline-settings-row');
    if (offRow) offRow.style.display = 'none';
    const numPlayers = clientConnections.length + 1;
    const inHum = document.getElementById('in-hum');
    if (inHum) inHum.value = numPlayers;
    const inCpu = document.getElementById('in-cpu');
    if (inCpu) inCpu.value = 4 - numPlayers;
    
    // Broadcast LOBBY_WAIT so clients show waiting message
    broadcastToClients({ type: 'LOBBY_WAIT' });
}

function handleClientMessage(data, conn) {
    if (data.type === 'REQUEST_ROLL') {
        if (idxJogador === clientConnections.indexOf(conn) + 1) {
            const d1 = Math.floor(Math.random() * 6) + 1;
            const d2 = Math.floor(Math.random() * 6) + 1;
            broadcastToClients({ type: 'DICE_ROLL', d1, d2 });
            animateAndMove(d1, d2);
        }
    }
    else if (data.type === 'SYNC_ACTION') {
        // Execute the action locally (host) and broadcast state
        executeSyncAction(data.action);
        broadcastState();
    }
}

function handleHostMessage(data) {
    if (data.type === 'LOBBY_WAIT') {
        const lobbyM = document.getElementById('lobby-modal');
        if (lobbyM) lobbyM.style.display = 'none';
        const setupModal = document.getElementById('setup-modal');
        if (setupModal) setupModal.style.display = 'flex';
        const offRow = document.getElementById('offline-settings-row');
        if (offRow) offRow.style.display = 'none';
        const btnS = document.getElementById('btn-start');
        if (btnS) btnS.style.display = 'none';
        const charGrid = document.getElementById('char-select-grid');
        if (charGrid) charGrid.style.display = 'none';
        const nameSec = document.getElementById('player-name-section');
        if (nameSec) nameSec.style.display = 'none';
        const setupSub = document.getElementById('setup-subtitle');
        if (setupSub) setupSub.style.display = 'none';
        const selectTitle = document.querySelector('.select-title');
        if (selectTitle) selectTitle.style.display = 'none';
        const clientWait = document.getElementById('client-waiting-msg');
        if (clientWait) clientWait.style.display = 'block';
    }
    else if (data.type === 'GAME_START') {
        myPlayerIdx = data.myPlayerIdx;
        
        // Re-instantiate Jogadores to keep class methods
        jogadores = data.jogadores.map(j => {
            const char = PERSONAGENS_JOGADORES.find(p => p.charNome === j.charNome);
            const obj = new Jogador(j.nome, j.is_cpu, char, j.id);
            Object.assign(obj, j);
            return obj;
        });
        
        data.tabuleiro.forEach((t, i) => {
            TABULEIRO[i] = Object.assign(TABULEIRO[i], t);
        });
        
        idxJogador = 0;
        estado = "INICIO_TURNO";
        
        const setupM = document.getElementById('setup-modal');
        if (setupM) setupM.style.display = 'none';
        const uiC = document.getElementById('ui-container');
        if (uiC) uiC.style.display = 'flex';
        
        setTimeout(() => {
            const boardContainer = document.getElementById('board-container');
            const boardGrid = document.getElementById('board-grid');
            if (boardContainer && boardGrid) {
                boardContainer.scrollLeft = (boardGrid.offsetWidth - boardContainer.clientWidth) / 2;
                boardContainer.scrollTop = (boardGrid.offsetHeight - boardContainer.clientHeight) / 2;
            }
        }, 100);
        
        updateUI();
    }
    else if (data.type === 'DICE_ROLL') {
        currentPandoraIdx = data.pandoraIdx || 0;
        animateAndMove(data.d1, data.d2);
    }
    else if (data.type === 'STATE_SYNC') {
        jogadores = data.jogadores.map(j => {
            const char = PERSONAGENS_JOGADORES.find(p => p.charNome === j.charNome);
            const obj = new Jogador(j.nome, j.is_cpu, char, j.id);
            Object.assign(obj, j);
            return obj;
        });
        data.tabuleiro.forEach((t, i) => {
            TABULEIRO[i] = Object.assign(TABULEIRO[i], t);
        });
        idxJogador = data.idxJogador;
        estado = data.estado;
        updateUI();
        renderBoardHTML();
    }
}

function broadcastToClients(msg) {
    if (isHost && clientConnections.length > 0) {
        clientConnections.forEach(c => c.send(msg));
    }
}

function broadcastState() {
    if (isHost) {
        broadcastToClients({
            type: 'STATE_SYNC',
            jogadores: jogadores,
            tabuleiro: TABULEIRO,
            idxJogador: idxJogador,
            estado: estado
        });
    }
}

function sendSyncAction(actionData) {
    if (isOnline && !isHost) {
        hostConnection.send({ type: 'SYNC_ACTION', action: actionData });
        return true; // Sent to host
    }
    return false; // I am host or offline
}

function executeSyncAction(action) {
    if (action.type === 'PC_YES') {
        const btn = document.getElementById('btn-pc-yes');
        if (btn) btn.click();
    } else if (action.type === 'PC_NO') {
        const btn = document.getElementById('btn-pc-no');
        if (btn) btn.click();
    }
}

// --- Lógica de Venda de Propriedades ---

function getValorVenda(casa) {
    let valor = Math.floor(casa.preco / 2);
    if (casa.melhorias && casa.preco_melhoria) {
        valor += Math.floor((casa.melhorias * casa.preco_melhoria) / 2);
    }
    return valor;
}

function calcularPatrimonioVenda(jogadorNome) {
    let total = 0;
    TABULEIRO.forEach(casa => {
        if (casa.dono === jogadorNome) {
            total += getValorVenda(casa);
        }
    });
    return total;
}

function venderPropriedade(j, indexCasa) {
    const casa = TABULEIRO[indexCasa];
    if (casa && casa.dono === j.nome) {
        const valor = getValorVenda(casa);
        j.dinheiro += valor;
        casa.dono = null;
        casa.melhorias = 0;
        logMsg(`📈 ${j.nome} vendeu ${casa.nome} por $${valor}.`);
        updateUI();
    }
}

function getPrioridadeVenda(casa) {
    let score = getValorVenda(casa);
    if (casa.tipo === 'propriedade') score += 5000; // Evita vender propriedades antes de serviços
    if (casa.melhorias > 0) score += 10000;         // Evita vender casas com melhorias
    return score;
}

function cpuVenderBensParaPagar(j, divida, callback) {
    // Vende propriedades da menos estratégica para a mais, até cobrir a dívida
    let casasObj = TABULEIRO.map((c, i) => ({ casa: c, index: i }))
        .filter(x => x.casa.dono === j.nome)
        .sort((a, b) => getPrioridadeVenda(a.casa) - getPrioridadeVenda(b.casa));
        
    for (const item of casasObj) {
        if (j.dinheiro >= divida) break;
        venderPropriedade(j, item.index);
    }
    
    setTimeout(callback, 1000);
}

function mostrarModalVenda(j, divida, callback) {
    const modal = document.getElementById('sell-modal');
    if (!modal) return callback();
    
    const debtSpan = modal.querySelector('.debt-amount');
    const moneySpan = modal.querySelector('.current-money');
    const listDiv = document.getElementById('sell-properties-list');
    const btnPay = document.getElementById('btn-pay-rent');
    const btnBankrupt = document.getElementById('btn-bankrupt');
    
    const atualizarUIModal = () => {
        debtSpan.textContent = `$${divida}`;
        moneySpan.textContent = `$${j.dinheiro}`;
        listDiv.innerHTML = '';
        
        let casasDono = TABULEIRO.map((c, i) => ({ casa: c, index: i }))
            .filter(x => x.casa.dono === j.nome)
            .sort((a, b) => getPrioridadeVenda(a.casa) - getPrioridadeVenda(b.casa));
            
        let runningTotal = 0;
        casasDono.forEach(item => {
            const val = getValorVenda(item.casa);
            const isRecomendado = (j.dinheiro + runningTotal < divida);
            runningTotal += val;
            
            const div = document.createElement('div');
            div.className = 'sell-item';
            div.innerHTML = `
                <div class="sell-info">
                    <span class="prop-name">${item.casa.nome} ${isRecomendado ? '<span style="color:#00ff88; font-size:12px; font-weight:bold; margin-left:10px;">💡 Recomendado</span>' : ''}</span>
                    <span class="prop-value">Valor de Venda: $${val}</span>
                </div>
                <button class="btn-sell">Vender</button>
            `;
            div.querySelector('.btn-sell').onclick = () => {
                venderPropriedade(j, item.index);
                atualizarUIModal();
            };
            listDiv.appendChild(div);
        });
        
        if (j.dinheiro >= divida) {
            btnPay.disabled = false;
            listDiv.querySelectorAll('.btn-sell').forEach(btn => btn.disabled = true);
        } else {
            btnPay.disabled = true;
        }
    };
    
    btnPay.onclick = () => {
        modal.style.display = 'none';
        callback();
    };
    
    btnBankrupt.onclick = () => {
        // Falência voluntária ou forçada
        modal.style.display = 'none';
        j.dinheiro = -9999; // Força falência
        callback();
    };
    
    atualizarUIModal();
    modal.style.display = 'flex';
}

function cobrarDivida(j, valor, callbackPagamento) {
    if (j.dinheiro >= valor) {
        callbackPagamento();
    } else {
        if (j.is_cpu) {
            const patrimonioTotal = calcularPatrimonioVenda(j.nome);
            if (j.dinheiro + patrimonioTotal >= valor) {
                cpuVenderBensParaPagar(j, valor, callbackPagamento);
            } else {
                logMsg(`💸 ${j.nome} não tem como pagar a dívida e vai falir!`);
                callbackPagamento();
            }
        } else {
            logMsg(`⚠️ ${j.nome} precisa resolver uma dívida de $${valor}!`);
            mostrarModalVenda(j, valor, callbackPagamento);
        }
    }
}


// ==========================================
// SISTEMA DE PERKS (HABILIDADES PASSIVAS)
// ==========================================
window.triggerPerk = function(jogador, evento, contexto = {}) {
    if (!jogador || jogador.falido) return contexto;
    
    // Mostra um aviso bonitinho no log
    const alertPerk = (msg) => {
        logMsg(`<span style="color:${jogador.cor}">[Perk ${jogador.charNome}]</span> ${msg}`);
    };

    switch(evento) {
        case 'onJail':
            if (jogador.charNome === "Jason") {
                alertPerk("Imune à prisão! Continuará solto.");
                return { prevented: true };
            }
            if (jogador.charNome === "Jigsaw") {
                alertPerk("Sendo enviado para prisão, mas tem a chance de tentar sair agora mesmo!");
                // Ele pode rolar na mesma rodada, então não setamos turnos_preso alto e removemos preso
                // Deixaremos para aplicar isso no game.js diretamente ou aqui?
                // Context será tratado por quem chama.
                return { jigsawAttempt: true };
            }
            break;

        case 'onPayRent':
            let valorCalculado = contexto.valorOriginal;
            const dono = contexto.dono;
            const casa = contexto.casa;
            
            // Pennywise (Flutuam Todos) - Cobra 15% mais caro
            if (dono && dono.charNome === "Pennywise") {
                valorCalculado = Math.floor(valorCalculado * 1.15);
                // Nao loga o alert sempre pra nao spamar, só aplica
            }

            // Jason (Territorialista) - Não paga no Crystal Lake
            if (jogador.charNome === "Jason" && casa && casa.nome.includes("Crystal Lake")) {
                alertPerk("Este é o meu território. Ignorou o aluguel!");
                return { newRent: 0 };
            }
            
            // Michael Myers (Passos Silenciosos) - 15% ignorar
            if (jogador.charNome === "Michael Myers" && Math.random() < 0.15) {
                alertPerk("Passou silenciosamente e evadiu 100% do aluguel!");
                return { newRent: 0 };
            }

            // Eleven (Controle Mental) - 10% de desconto
            if (jogador.charNome === "Eleven") {
                valorCalculado = Math.floor(valorCalculado * 0.90);
            }

            // Bart (Vândalo) - 15% chance de pagar metade (o resto é limpeza)
            if (jogador.charNome === "Bart" && Math.random() < 0.15) {
                alertPerk("Pichou a casa! O dono ficou com metade do aluguel para custear a limpeza.");
                valorCalculado = Math.floor(valorCalculado * 0.50);
            }

            return { newRent: valorCalculado };

        case 'onBuyUpgrade':
            // Leatherface - 20% desconto nas melhorias
            if (jogador.charNome === "Leatherface") {
                return { newCost: Math.floor(contexto.custoOriginal * 0.80) };
            }
            return { newCost: contexto.custoOriginal };

        case 'onLand':
            // Chucky (Boneco Ladrão) - Rouba 50 se tiver alguém na mesma casa
            if (jogador.charNome === "Chucky") {
                let alguemRoubado = false;
                jogadores.forEach(j => {
                    if (!j.falido && j !== jogador && j.posicao === jogador.posicao) {
                        if (j.dinheiro >= 50) {
                            j.dinheiro -= 50;
                            jogador.dinheiro += 50;
                            alguemRoubado = true;
                            alertPerk(`Roubou furtivamente $50 de ${j.nome}!`);
                        }
                    }
                });
                if (alguemRoubado) updateUI();
            }

            // Homer (Sorte de Bêbado)
            if (jogador.charNome === "Homer" && contexto.casa) {
                const n = contexto.casa.nome.toLowerCase();
                if (n.includes("bar do moe") || n.includes("casa do homer") || n.includes("usina nuclear")) {
                    jogador.dinheiro += 50;
                    alertPerk("Passou em um de seus lugares favoritos e ganhou $50!");
                    updateUI();
                }
            }
            break;

        case 'onCrossStart':
            // Marge (Economia) - Ganha 250 ao invés de 200
            if (jogador.charNome === "Marge") {
                alertPerk("Economia Doméstica rendeu bem! Levou $250 ao invés de $200.");
                return { salary: 250 };
            }

            // Zumbi (Infecção Viral)
            if (jogador.charNome === "Zumbi") {
                let infectou = false;
                jogadores.forEach(j => {
                    if (!j.falido && j !== jogador) {
                        // Distância circular
                        let dist1 = Math.abs(j.posicao - jogador.posicao);
                        let dist2 = TABULEIRO.length - dist1;
                        let dist = Math.min(dist1, dist2);
                        if (dist <= 3) {
                            j.dinheiro -= 20; // Perde pro banco
                            infectou = true;
                            logMsg(`<span style="color:${jogador.cor}">[Perk Zumbi]</span> Assustou e infectou ${j.nome}, que perdeu $20 na fuga.`);
                        }
                    }
                });
                if (infectou) updateUI();
            }
            return { salary: 200 };

        case 'onDrawPandora':
            const valorRuim = contexto.valorAlteracao;
            // Só ativa em cartas ruins
            if (valorRuim < 0) {
                // Ghostface
                if (jogador.charNome === "Ghostface") {
                    let vitima = null;
                    let maiorGrana = -1;
                    jogadores.forEach(j => {
                        if (!j.falido && j !== jogador && j.dinheiro > maiorGrana) {
                            vitima = j;
                            maiorGrana = j.dinheiro;
                        }
                    });
                    if (vitima) {
                        let metade = Math.floor(Math.abs(valorRuim) * 0.5);
                        vitima.dinheiro -= metade;
                        alertPerk(`Ligação macabra repassou $${metade} da dívida para ${vitima.nome}!`);
                        updateUI();
                        return { valorAlteracao: valorRuim + metade }; // Subtrai a metade que passou
                    }
                }
                
                // Terrifier (Art) - 50% multas
                if (jogador.charNome === "Terrifier") {
                    alertPerk("Riu da situação. A multa da Pandora foi reduzida pela metade!");
                    return { valorAlteracao: Math.floor(valorRuim * 0.5) };
                }

                // Lisa
                if (jogador.charNome === "Lisa" && Math.random() < 0.25) {
                    alertPerk("Mente Brilhante achou uma brecha na multa e anulou o efeito!");
                    return { valorAlteracao: 0 };
                }

                // Meg
                if (jogador.charNome === "Meg") {
                    alertPerk("O banco rasgou a multa com pena da bebê!");
                    return { valorAlteracao: 0 };
                }
            }
            return { valorAlteracao: valorRuim };

        case 'onOferenda':
            let valorOf = contexto.valorOriginal;
            if (jogador.charNome === "Terrifier") {
                alertPerk("Riu da oferenda! Vai pagar apenas metade.");
                valorOf = Math.floor(valorOf * 0.50);
            }
            if (jogador.charNome === "Meg") {
                alertPerk("Bebês não pagam oferenda. Rasgou o boleto.");
                valorOf = 0;
            }
            return { newCost: valorOf };

        case 'onBuyProperty':
            if (jogador.charNome === "Annabelle") {
                let cobrou = false;
                jogadores.forEach(j => {
                    if (!j.falido && j !== jogador) {
                        if (j.dinheiro >= 15) {
                            j.dinheiro -= 15;
                            jogador.dinheiro += 15;
                            cobrou = true;
                        }
                    }
                });
                if (cobrou) {
                    alertPerk("Presença poltergeist na nova casa! Cobrou $15 de proteção de cada jogador.");
                    updateUI();
                }
            }
            break;

        case 'onRollDice':
            let casaMoveExtras = 0;
            // King Kong
            if (jogador.charNome === "King Kong") {
                alertPerk("Passos de Gigante deram +1 casa no movimento.");
                casaMoveExtras = 1;
            }
            // Maozinha
            if (jogador.charNome === "Mãozinha") {
                const soma = contexto.d1 + contexto.d2;
                if (soma % 2 !== 0) {
                    jogador.dinheiro += 10;
                    alertPerk("Encontrou $10 perdidos pelo caminho (soma ímpar)!");
                    updateUI();
                }
            }
            // Freddy
            if (jogador.charNome === "Freddy" && contexto.isDouble) {
                let sugou = false;
                jogadores.forEach(j => {
                    if (!j.falido && j !== jogador && j.dinheiro >= 20) {
                        j.dinheiro -= 20;
                        jogador.dinheiro += 20;
                        sugou = true;
                    }
                });
                if (sugou) {
                    alertPerk("Mestre dos Pesadelos atacou nas duplas! Sugou $20 de cada sobrevivente.");
                    updateUI();
                }
            }
            return { casaMoveExtras };
            
        case 'onBankruptByPlayer':
            if (jogador.charNome === "Predador") {
                const credor = contexto.credor;
                if (credor && credor.dinheiro >= 300) {
                    credor.dinheiro -= 300;
                    alertPerk(`Ativou autodestruição! ${credor.nome} sofreu dano colateral de $300.`);
                    updateUI();
                } else if (credor) {
                    credor.dinheiro = 0;
                    alertPerk(`Ativou autodestruição devastadora contra ${credor.nome}!`);
                    updateUI();
                }
            }
            break;
    }
    return contexto;
}
