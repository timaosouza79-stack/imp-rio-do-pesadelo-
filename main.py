from ursina import *
import random

TABULEIRO = [
    # 0 a 9
    {"nome": "Portal do Multiverso", "tipo": "especial"},
    {"nome": "Quarto de Arte - Annabelle", "tipo": "propriedade", "preco": 60, "alugueis": [2, 10, 30, 90, 160, 250], "melhorias": 0, "nome_melhoria": "Símbolos Ocultos", "preco_melhoria": 50, "dono": None},
    {"nome": "Caixa de Pandora", "tipo": "especial"},
    {"nome": "Fábrica Good Guys - Chucky", "tipo": "propriedade", "preco": 60, "alugueis": [4, 20, 60, 180, 320, 450], "melhorias": 0, "nome_melhoria": "Caixas de Bonecos", "preco_melhoria": 50, "dono": None},
    {"nome": "Imposto de Renda", "tipo": "imposto", "valor": 200},
    {"nome": "Máquina do Tempo DeLorean", "tipo": "transporte", "preco": 200, "alugueis": [25, 50, 100, 200, 200, 200], "melhorias": 0, "nome_melhoria": "Capacitores", "preco_melhoria": 50, "dono": None},
    {"nome": "Bates Motel - Psicose", "tipo": "propriedade", "preco": 100, "alugueis": [6, 30, 90, 270, 400, 550], "melhorias": 0, "nome_melhoria": "Chaves de Quarto", "preco_melhoria": 50, "dono": None},
    {"nome": "Caixa de Pandora", "tipo": "especial"},
    {"nome": "Cabana na Floresta - Evil Dead", "tipo": "propriedade", "preco": 100, "alugueis": [6, 30, 90, 270, 400, 550], "melhorias": 0, "nome_melhoria": "Motosserras", "preco_melhoria": 50, "dono": None},
    {"nome": "Silent Hill", "tipo": "propriedade", "preco": 120, "alugueis": [8, 40, 100, 300, 450, 600], "melhorias": 0, "nome_melhoria": "Rádios com Estática", "preco_melhoria": 50, "dono": None},

    # 10 a 19
    {"nome": "Asilo Arkham", "tipo": "prisao"},
    {"nome": "Laboratório Hawkins - Stranger Things", "tipo": "propriedade", "preco": 140, "alugueis": [10, 50, 150, 450, 625, 750], "melhorias": 0, "nome_melhoria": "Fitas K7", "preco_melhoria": 100, "dono": None},
    {"nome": "Laboratório de Frankenstein", "tipo": "servico", "preco": 150, "alugueis": [10, 25, 50, 100, 150, 200], "melhorias": 0, "nome_melhoria": "Geradores", "preco_melhoria": 75, "dono": None},
    {"nome": "Mundo Invertido - Stranger Things", "tipo": "propriedade", "preco": 140, "alugueis": [10, 50, 150, 450, 625, 750], "melhorias": 0, "nome_melhoria": "Demogorgons", "preco_melhoria": 100, "dono": None},
    {"nome": "Castelo do Drácula", "tipo": "propriedade", "preco": 160, "alugueis": [12, 60, 180, 500, 700, 900], "melhorias": 0, "nome_melhoria": "Estacas de Madeira", "preco_melhoria": 100, "dono": None},
    {"nome": "Carro Ecto-1 - Caça-Fantasmas", "tipo": "transporte", "preco": 200, "alugueis": [25, 50, 100, 200, 200, 200], "melhorias": 0, "nome_melhoria": "Mochilas de Prótons", "preco_melhoria": 50, "dono": None},
    {"nome": "Nave Nostromo - Alien", "tipo": "propriedade", "preco": 180, "alugueis": [14, 70, 200, 550, 750, 950], "melhorias": 0, "nome_melhoria": "Ovos de Xenomorfo", "preco_melhoria": 100, "dono": None},
    {"nome": "Caixa de Pandora", "tipo": "especial"},
    {"nome": "Jurassic Park", "tipo": "propriedade", "preco": 180, "alugueis": [14, 70, 200, 550, 750, 950], "melhorias": 0, "nome_melhoria": "Cercas Elétricas", "preco_melhoria": 100, "dono": None},
    {"nome": "Ilha da Caveira - King Kong", "tipo": "propriedade", "preco": 200, "alugueis": [16, 80, 220, 600, 800, 1000], "melhorias": 0, "nome_melhoria": "Sinalizadores", "preco_melhoria": 100, "dono": None},

    # 20 a 29
    {"nome": "Estacionamento Livre", "tipo": "especial"},
    {"nome": "Casa dos Myers - Michael Myers", "tipo": "propriedade", "preco": 220, "alugueis": [18, 90, 250, 700, 875, 1050], "melhorias": 0, "nome_melhoria": "Máscaras Brancas", "preco_melhoria": 150, "dono": None},
    {"nome": "Caixa de Pandora", "tipo": "especial"},
    {"nome": "Esgotos de Derry - Pennywise", "tipo": "propriedade", "preco": 220, "alugueis": [18, 90, 250, 700, 875, 1050], "melhorias": 0, "nome_melhoria": "Balões Vermelhos", "preco_melhoria": 150, "dono": None},
    {"nome": "Banheiro Abandonado - Jigsaw", "tipo": "propriedade", "preco": 240, "alugueis": [20, 100, 300, 750, 925, 1100], "melhorias": 0, "nome_melhoria": "Fitas Cassete", "preco_melhoria": 150, "dono": None},
    {"nome": "Exorcista", "tipo": "propriedade", "preco": 350, "alugueis": [35, 175, 500, 1100, 1300, 1500], "melhorias": 0, "nome_melhoria": "Água Benta", "preco_melhoria": 200, "dono": None},
    {"nome": "Rua Elm - Freddy Krueger", "tipo": "propriedade", "preco": 260, "alugueis": [22, 110, 330, 800, 975, 1150], "melhorias": 0, "nome_melhoria": "Pesadelos", "preco_melhoria": 150, "dono": None},
    {"nome": "Mansão Spencer - Resident Evil", "tipo": "propriedade", "preco": 260, "alugueis": [22, 110, 330, 800, 975, 1150], "melhorias": 0, "nome_melhoria": "Vírus-T", "preco_melhoria": 150, "dono": None},
    {"nome": "Companhia de Água", "tipo": "servico", "preco": 150, "alugueis": [15, 30, 60, 120, 150, 200], "melhorias": 0, "nome_melhoria": "Encanamentos", "preco_melhoria": 75, "dono": None},
    {"nome": "O Massacre da Serra Elétrica", "tipo": "propriedade", "preco": 240, "alugueis": [20, 100, 300, 750, 925, 1100], "melhorias": 0, "nome_melhoria": "Serras Elétricas", "preco_melhoria": 150, "dono": None},

    # 30 a 39
    {"nome": "Transporte de Prisioneiros", "tipo": "va_para_prisao"},
    {"nome": "Bar do Moe - Os Simpsons", "tipo": "propriedade", "preco": 300, "alugueis": [26, 130, 390, 900, 1100, 1275], "melhorias": 0, "nome_melhoria": "Canecas de Chopp", "preco_melhoria": 200, "dono": None},
    {"nome": "Casa do Homer Simpson", "tipo": "propriedade", "preco": 300, "alugueis": [26, 130, 390, 900, 1100, 1275], "melhorias": 0, "nome_melhoria": "Fardos de Duff", "preco_melhoria": 200, "dono": None},
    {"nome": "Caixa de Pandora", "tipo": "especial"},
    {"nome": "Usina Nuclear de Springfield", "tipo": "propriedade", "preco": 320, "alugueis": [28, 150, 450, 1000, 1200, 1400], "melhorias": 0, "nome_melhoria": "Barras de Urânio", "preco_melhoria": 200, "dono": None},
    {"nome": "Caminhão do Creeper - Olhos Famintos", "tipo": "transporte", "preco": 200, "alugueis": [25, 50, 100, 200, 200, 200], "melhorias": 0, "nome_melhoria": "Placas de Carro", "preco_melhoria": 50, "dono": None},
    {"nome": "Caixa de Pandora", "tipo": "especial"},
    {"nome": "Taxa de Luxo", "tipo": "imposto", "valor": 100},
    {"nome": "Hotel Overlook - Jack Torrance", "tipo": "propriedade", "preco": 350, "alugueis": [35, 175, 500, 1100, 1300, 1500], "melhorias": 0, "nome_melhoria": "Machados", "preco_melhoria": 200, "dono": None},
    {"nome": "Acampamento Crystal Lake - Jason Voorhees", "tipo": "propriedade", "preco": 400, "alugueis": [50, 200, 600, 1400, 1700, 2000], "melhorias": 0, "nome_melhoria": "Armadilhas de Urso", "preco_melhoria": 200, "dono": None}
]

PERSONAGENS = [
    {"nome": "Chucky", "avatar": "assets/chuckypeao.png", "cor": color.hex("#ff0055")},
    {"nome": "Jason", "avatar": "assets/jasonpeao.png", "cor": color.hex("#00f0ff")},
    {"nome": "Freddy", "avatar": "assets/freddypeao.png", "cor": color.hex("#ff8800")},
    {"nome": "Annabelle", "avatar": "assets/annabellepeao.png", "cor": color.hex("#ff00ff")},
    {"nome": "Homer", "avatar": "assets/homerpeao.png", "cor": color.hex("#ffff00")},
]

def get_texture_path(casa, index):
    # Mapeamento de imagens baseado nos seus arquivos de jogo (game.js)
    # Certifique-se que os nomes dos arquivos na pasta 'assets' estão corretos.
    img_map = {
        'portal': 'assets/portal.png',
        'pandora': 'assets/caixa_pandora.png',
        'bar_do_moe': 'assets/bar_do_moe.jpg', # Nome de arquivo assumido
        'casa_homer': 'assets/casadohomer.png',
        'exorcista': 'assets/exorcista.jpg',
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
    }

    tipo = casa.get('tipo')
    nome_lower = casa.get('nome', '').lower()

    if tipo == 'especial' and index == 0: return img_map.get('portal')
    if 'pandora' in nome_lower: return img_map.get('pandora')
    if tipo == 'prisao': return img_map.get('prisao')
    if tipo == 'va_para_prisao': return img_map.get('transporte_prisioneiros')

    # Mapeamento por palavras-chave para propriedades
    keyword_map = {
        'annabelle': 'annabelle', 'chucky': 'chucky', 'myers': 'myers',
        'crystal lake': 'crystal_lake', 'jason': 'crystal_lake', 'drácula': 'dracula',
        'mundo invertido': 'mundo_invertido', 'jurassic park': 'jurassic', 'king kong': 'king_kong',
        'bar do moe': 'bar_do_moe', 'homer simpson': 'casa_homer', 'exorcista': 'exorcista',
        'mansão spencer': 'mansao_spencer', 'rua elm': 'rua_elm', 'jigsaw': 'banheiro',
        'pennywise': 'esgotos', 'usina nuclear': 'usina'
    }
    for keyword, key in keyword_map.items():
        if keyword in nome_lower:
            return img_map.get(key)
    return None

INDICE_PRISAO = next(i for i, c in enumerate(TABULEIRO) if c['tipo'] == 'prisao')

CARTAS_PANDORA = [
    {"texto": "Erro no Banco do Multiverso a seu favor! Receba 200", "valor_alteracao": 200},
    {"texto": "Você sobreviveu a uma noite no Hotel Overlook. Receba 100", "valor_alteracao": 100},
    {"texto": "Sucesso total de vendas no site de doces da Suzany! Receba 100", "valor_alteracao": 100},
    {"texto": "Homer esqueceu o troco da cerveja Duff com você. Receba 20", "valor_alteracao": 20},
    {"texto": "Ganhou o torneio de Gran Turismo 7 no volante. Receba 150", "valor_alteracao": 150},
    {"texto": "O novo mini-mercado deu lucro neste mês. Receba 100", "valor_alteracao": 100},
    {"texto": "Seu Border Collie achou uma nota de dinheiro enterrada no quintal. Receba 25", "valor_alteracao": 25},
    {"texto": "Fabricio devolveu o dinheiro que te devia. Receba 30", "valor_alteracao": 30},
    {"texto": "Eduardo e André pagaram a parte deles no churrasco. Receba 40", "valor_alteracao": 40},
    {"texto": "Bônus por operação impecável na prensa da Amarsul. Receba 100", "valor_alteracao": 100},
    {"texto": "As ações da fabricante do DeLorean subiram. Receba 50", "valor_alteracao": 50},
    {"texto": "Você venceu a temporada como treinador de futebol. Receba 200", "valor_alteracao": 200},
    {"texto": "Vendeu todos os ingressos para o campeonato da categoria Benjamins. Receba 50", "valor_alteracao": 50},
    {"texto": "Achou dinheiro esquecido na caixa do PS5. Receba 10", "valor_alteracao": 10},
    {"texto": "Recebeu os direitos autorais das suas músicas criadas com IA. Receba 25", "valor_alteracao": 25},
    {"texto": "O projeto do jogo Souzafoot encontrou um investidor. Receba 150", "valor_alteracao": 150},
    {"texto": "Jason te perseguiu no acampamento e você perdeu a carteira. Pague 50", "valor_alteracao": -50},
    {"texto": "Annabelle quebrou a televisão da sala com fenômenos paranormais. Pague 100", "valor_alteracao": -100},
    {"texto": "Homer bebeu todo o estoque do seu mini-mercado. Pague 75", "valor_alteracao": -75},
    {"texto": "Multa por excesso de velocidade temporal no DeLorean. Pague 50", "valor_alteracao": -50},
    {"texto": "O pneu do carro furou a caminho do treino de futebol. Pague 40", "valor_alteracao": -40},
    {"texto": "Gastos não planejados com a instalação do piso flutuante. Pague 150", "valor_alteracao": -150},
    {"texto": "A Mufetada dos amigos ficou bem mais cara que o esperado. Pague 60", "valor_alteracao": -60},
    {"texto": "Comprou um grande estoque de ração premium para o Border Collie. Pague 80", "valor_alteracao": -80},
    {"texto": "Taxa de manutenção de maquinário de triagem. Pague 50", "valor_alteracao": -50},
    {"texto": "Pagou por novos jogos e atualizações do PlayStation VR2. Pague 30", "valor_alteracao": -30},
    {"texto": "Imposto de renda do Multiverso retido na fonte. Pague 100", "valor_alteracao": -100},
    {"texto": "Consulta psiquiátrica após visita ao Asilo Arkham. Pague 150", "valor_alteracao": -150},
    {"texto": "Renovou a mensalidade do domínio e servidor da confeitaria. Pague 25", "valor_alteracao": -25},
    {"texto": "O Asilo Arkham cobrou uma taxa extra de segurança. Pague 50", "valor_alteracao": -50},
    {"texto": "Reparos estruturais na Casa do Homer Simpson. Pague 75", "valor_alteracao": -75},
    {"texto": "Perdeu o processo contra o Acampamento Crystal Lake. Pague 200", "valor_alteracao": -200},
    {"texto": "O boneco Chucky sabotou os freios do seu carro e fugiu! Pague 100 pelo conserto.", "valor_alteracao": -100},
]

def calcular_posicao(i):
    scale = 1.6
    if i <= 10:
        return ((5 - i) * scale, 0, -5 * scale)
    elif i <= 20:
        return (-5 * scale, 0, (-5 + (i - 10)) * scale)
    elif i <= 30:
        return ((-5 + (i - 20)) * scale, 0, 5 * scale)
    else:
        return (5 * scale, 0, (5 - (i - 30)) * scale)

class Jogador:
    def __init__(self, nome, is_cpu, char_data):
        self.nome = nome
        self.dinheiro = 1500
        self.posicao = 0
        self.is_cpu = is_cpu
        self.preso = False
        self.turnos_preso = 0
        self.ativo = True
        self.char_data = char_data
        self.peao = Entity(
            model='quad',
            texture=char_data['avatar'],
            scale=(1, 1.5),
            position=calcular_posicao(0) + Vec3(0, 1, 0),
            billboard=True, # Sempre virado para a câmera
            color=color.white # A textura já é colorida
        )

class Jogo(Entity):
    def __init__(self):
        super().__init__()
        self.estado = 'INICIO_TURNO'
        self.indice_jogador_atual = 0

        # Modo Padrão: 1 humano, 3 cpus
        self.jogadores = []
        num_jogadores = 4
        for i in range(num_jogadores):
            char_data = PERSONAGENS[i % len(PERSONAGENS)]
            is_cpu = i > 0 # O primeiro jogador é humano
            nome = f'Humano 1' if not is_cpu else f'CPU {i}'
            self.jogadores.append(Jogador(nome, is_cpu, char_data))

        self.jogador_atual = self.jogadores[0]

        # Construir tabuleiro 3D
        for i, casa in enumerate(TABULEIRO):
            pos = calcular_posicao(i)
            texture_path = get_texture_path(casa, i)

            # Base da casa com textura
            Entity(model='cube', position=pos, color=color.white, scale=(1.5, 0.2, 1.5), texture=texture_path)

            # Texto 3D com nome e preço
            text_content = casa['nome']
            if 'preco' in casa:
                text_content += f"\n${casa['preco']}"
            elif 'valor' in casa:
                text_content += f"\n-${casa['valor']}"

            Text(
                text=text_content,
                position=pos + Vec3(0, 0.5, 0),
                scale=1,
                billboard=True, # Texto sempre virado para a câmera
                background=True, # Fundo para melhor leitura
                color=color.black
            )

    def rolar_dados(self):
        return random.randint(1, 6), random.randint(1, 6)

    def proximo_turno(self):
        self.indice_jogador_atual = (self.indice_jogador_atual + 1) % len(self.jogadores)
        self.jogador_atual = self.jogadores[self.indice_jogador_atual]
        self.estado = 'INICIO_TURNO'

    def aplicar_regra(self):
        j = self.jogador_atual
        casa = TABULEIRO[j.posicao]
        print(f'📍 {j.nome} parou em: {casa["nome"]}')

        if casa['tipo'] == 'va_para_prisao':
            j.posicao = INDICE_PRISAO
            j.preso = True
            j.turnos_preso = 0
            j.peao.position = calcular_posicao(INDICE_PRISAO) + Vec3(0, 1, 0)

        elif casa['tipo'] in ('propriedade', 'transporte', 'servico'):
            if casa['dono'] is None:
                if j.dinheiro >= casa['preco']:
                    j.dinheiro -= casa['preco']
                    casa['dono'] = j.nome
                    print(f'🏠 {j.nome} comprou {casa["nome"]} por ${casa["preco"]}! Saldo: ${j.dinheiro}')
            elif casa['dono'] != j.nome:
                nivel = casa.get('melhorias', 0)
                if 'alugueis' in casa:
                    aluguel = casa['alugueis'][nivel]
                    j.dinheiro -= aluguel
                    # achar dono
                    for d in self.jogadores:
                        if d.nome == casa['dono']:
                            d.dinheiro += aluguel
                            break
                    print(f'💸 {j.nome} pagou ${aluguel} de aluguel para {casa["dono"]}! Saldo: ${j.dinheiro}')
            else:
                if 'melhorias' in casa and casa['melhorias'] < 5:
                    pm = casa['preco_melhoria']
                    if j.dinheiro >= pm:
                        j.dinheiro -= pm
                        casa['melhorias'] += 1
                        print(f'🔧 {j.nome} melhorou {casa["nome"]}! Nível: {casa["melhorias"]}')

        elif casa['tipo'] == 'imposto':
            j.dinheiro -= casa['valor']
            print(f'🧾 {j.nome} pagou ${casa["valor"]} de imposto. Saldo: ${j.dinheiro}')

        elif casa['tipo'] == 'especial' and casa['nome'] == 'Caixa de Pandora':
            c = random.choice(CARTAS_PANDORA)
            j.dinheiro += c['valor_alteracao']
            print(f'📦 Carta Pandora: {c["texto"]} | Saldo: ${j.dinheiro}')

        if j.dinheiro < 0:
            print(f'🚨 {j.nome} FALIU!')
            j.ativo = False
            j.peao.enabled = False
            for c in TABULEIRO:
                if c.get('dono') == j.nome:
                    c['dono'] = None
                    if 'melhorias' in c: c['melhorias'] = 0

        self.estado = 'FIM_TURNO'

    def update(self):
        j = self.jogador_atual

        if self.estado == 'INICIO_TURNO':
            if not j.ativo:
                self.proximo_turno()
                return
            if j.preso:
                j.turnos_preso += 1
                if j.dinheiro >= 50:
                    j.dinheiro -= 50
                    j.preso = False
                    j.turnos_preso = 0
                    print(f'🔓 {j.nome} pagou $50 e saiu da prisão!')
                else:
                    self.estado = 'FIM_TURNO'
                    return

            if j.is_cpu:
                self.estado = 'ROLANDO'
            else:
                self.estado = 'AGUARDANDO_ROLO'
                print(f'\n👤 {j.nome}, aperte [ESPAÇO] para rolar os dados.')

        elif self.estado == 'AGUARDANDO_ROLO':
            if held_keys['space']:
                self.estado = 'ROLANDO'

        elif self.estado == 'ROLANDO':
            d1, d2 = self.rolar_dados()
            total = d1 + d2
            print(f'\n🔄 TURNO DE {j.nome}')
            print(f'🎲 Dados: {d1} + {d2} = {total}')

            nova_pos = (j.posicao + total) % len(TABULEIRO)
            if nova_pos < j.posicao:
                j.dinheiro += 200
                print(f'🌀 {j.nome} cruzou o Portal e recebeu $200! Saldo: ${j.dinheiro}')

            j.posicao = nova_pos
            j.peao.animate_position(calcular_posicao(nova_pos) + Vec3(0, 1, 0), duration=0.4)
            self.estado = 'ANIMANDO'
            invoke(self.ir_para_regra, delay=0.5)

    def ir_para_regra(self):
        self.aplicar_regra()

if __name__ == '__main__':
    app = Ursina()
    window.title = 'Monopoly Multiverso 3D'

    # Camera isométrica clássica de tabuleiro
    camera.position = (0, 30, -25)
    camera.rotation_x = 55

    # Adicionando um texto básico de UI
    Text(text='Monopoly Multiverso 3D - Veja os logs no terminal! (ESPAÇO para rolar)', origin=(0, 0), y=0.45, scale=2, color=color.white)

    jogo = Jogo()
    app.run()
