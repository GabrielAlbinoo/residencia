# GDD de reconstrucao - Segredos do Mar

Versao: 1.0  
Data da pesquisa: 2026-06-25  
Escopo: reconstruir o funcionamento de Segredos do Mar, jogo social de aquario famoso no Orkut, com base em fontes publicas antigas, screenshots, guias de comunidade e noticias da epoca.

## 1. Resumo executivo

Segredos do Mar era um jogo social de aquario em tempo real. O jogador cuidava de peixes, coletava moedas produzidas por eles, alimentava e medicava criaturas, decorava enseadas, aumentava um multiplicador chamado `impulso de ouro`, visitava amigos, roubava moedas, cuidava ou congelava peixes de outros jogadores e reproduzia especies usando um peixe proprio com um peixe de amigo em um aquario de reproducao. O ovo surgia imediatamente e mostrava quanto tempo faltava para rachar, mas nao revelava a especie antes do nascimento. O tempo do ovo variava por peixe/raridade.

O jogo no Brasil foi publicado/operado pela Mentez no ecossistema Orkut/Facebook. Fontes de mercado listam Segredos do Mar como `Ocean Secret`, um dos principais jogos administrados pela Mentez no Orkut. A origem tecnica parece estar ligada ao jogo Ocean Secret da HappySNS: a imprensa internacional cita Ocean Secret como titulo da HappySNS, enquanto fontes brasileiras o listam como jogo gerido/publicado pela Mentez. Portanto, para um remake, a leitura correta e: jogo originalmente de estirpe HappySNS/Ocean Secret, localizado, distribuido e monetizado no Brasil pela Mentez.

O design central combinava:

- colecao de especies e variantes;
- producao passiva de moedas;
- decoracao com bonus economico;
- dependencia social forte, pois as melhores reproducoes exigiam peixe de amigo;
- PvP leve/social por roubo de moedas e ferramentas como congelamento;
- monetizacao por diamantes, raros, ferramentas, decoracoes, aceleradores e expansoes;
- eventos e atualizacoes constantes de novos peixes, objetos e linhas especiais.

## 2. Confianca e limites da reconstrucao

### Confirmado por fontes

- Fontes antigas descrevem o ciclo principal como `Ovo`, `Bebe`, `Adolescente`, `Jovem` e `Maduro/Adulto`; este GDD adiciona explicitamente o estado terminal `Idoso`, informado como fase sem producao nem reproducao.
- Peixes eram comprados como bebe na loja e cresciam com o tempo.
- Peixes podiam ficar com fome ou doentes; comida e remedio eram ferramentas do painel inferior.
- Ferramentas incluam gotas/efeitos de alimentacao, remedio, congelamento e excitacao.
- Peixe congelado parava de crescer; excitacao prevenia congelamento e tambem era requisito em receitas.
- O dono podia dissipar efeitos sacudindo o peixe por cerca de 5 segundos.
- Acoes com gotas e dispersao davam experiencia.
- A reproducao acontecia ao colocar um peixe proprio no aquario de reproducao e depois visitar um amigo para arrastar um peixe dele ate esse aquario.
- O ovo surgia imediatamente e o tempo ate rachar variava conforme especie/raridade do resultado.
- Peixes produziam moedas; o jogador precisava coleta-las e coloca-las no bau/tesouro.
- Amigos podiam visitar, cuidar e roubar moedas de ouro.
- Decoracoes aumentavam o `impulso de ouro`, que fazia peixes produzirem moedas mais rapido.
- Diamantes eram moeda premium, comprada; um blog de introducao relata que o jogador iniciava com 12 diamantes.
- Peixes idosos nao produziam moedas, nao podiam reproduzir e podiam ser arrastados para o icone de enseada/mar aberto para liberacao mediante modal de confirmacao.
- O jogador nao podia roubar peixes de outros jogadores; podia alimentar, medicar, congelar e usar peixe de amigo na reproducao.
- XP desbloqueava novos peixes e decoracoes na loja.
- Super/peixes brilhantes existiam, tinham receitas proprias e davam XP periodico; uma fonte comunitaria cita 35 XP a cada 3 horas por peixe brilhante.
- Super peixes nao podiam ser congelados nem excitados.
- Havia enseadas/aquarios multiplos ou expansoes de aquario.
- Quando um peixe ficava idoso, aparecia simbolo de enseada/mar aberto indicando que podia ser liberado.

### Reconstruido por inferencia

Os dados exatos de todos os tempos de crescimento, todos os valores de producao, todos os bonus de decoracao e a tabela completa oficial de receitas nao estao preservados de forma confiavel. As tabelas encontradas sao guias de comunidade, com contradicoes e resultados probabilisticos. Para transformar isso em um jogo implementavel, este GDD define formulas e padroes de dados que preservam o comportamento observado:

- receitas como regras ponderadas, nao deterministicas;
- producao por intervalo base de especie modificada por `impulso de ouro`;
- fome/doenca como estados que reduzem ou travam producao/crescimento;
- decoracoes como bonus aditivos de impulso;
- roubo social limitado por janela de moedas nao coletadas, sem roubo de peixes;
- progresso de level/XP calibravel por acoes de cuidado, coleta, reproducao, visitas e peixes brilhantes.

## 3. Fontes principais

- Ratazana Games, guia de dicas: criacao, 5 estagios, comida/remedio, congelamento/excitacao, acasalamento, moedas e bau.  
  https://rata-zana.blogspot.com/2010/10/segredos-do-mar-orkut-app-dicas-truques.html
- Segredos Do Mar WordPress: criando peixes, impulso de ouro, congelamento, novos peixes e novos objetos.  
  https://segredosdomar.wordpress.com/criando-peixes-no-jogo/  
  https://segredosdomar.wordpress.com/como-aumentar-o-impulso-de-ouro-no-segredos-do-mar/  
  https://segredosdomar.wordpress.com/novos-peixes/  
  https://segredosdomar.wordpress.com/novos-objetos/
- Vila dos Elementos: combinacoes, peixes brilhantes, comentarios com dados de producao.  
  https://viladoselementos.wordpress.com/segredos-do-mar-combinacoes/  
  https://villageoftheelements.wordpress.com/peixes-brilhantes-segredos-do-mar/
- Boa Garoto: lista antiga de combinacoes, ciclo de vida, diamantes e ferramentas.  
  https://boagaroto.blogspot.com/2010/04/tudo-sobre-o-jogo-segredos-do-mar-do.html  
  https://boagaroto.blogspot.com/2010/05/combinacoes-secretas-do-segredos-do-mar.html
- Colheita Sanches / Games do Orkut: fluxo de acasalamento, super peixes, trofeus, loja e receitas.  
  https://colheitasanches.blogspot.com/p/segredos-do-mar.html
- Blog Rafael Barbosa: descricao social, roubo, cuidado, acasalamento, enseadas, peixe idoso/mar aberto.  
  https://blografaelbarbosa.blogspot.com/2010/06/joguinhos-viciantes-do-orkut.html
- LAVCA/peHUB: Mentez, Orkut, Paymentez, Segredos do Mar como Ocean Secret.  
  https://www.lavca.org/insight-venture-partners-backs-latin-american-social-gamer/
- Game Developer: HappySNS e Ocean Secret.  
  https://www.gamedeveloper.com/business/rekoo-buys-chinese-social-game-developer-for-20m
- Terra / License Global: Segredos do Mar com cerca de 5 milhoes de usuarios no Orkut e itens virtuais de Paris Hilton.  
  https://www.terra.com.br/gameon/paris-hilton-lanca-produtos-virtuais-para-jogos-do-orkut,127d399ae915a310VgnCLD200000bbcceb0aRCRD.html  
  https://www.licenseglobal.com/licensing-resources/paris-hilton-dives-brazilian-online-game
- Google Zeitgeist 2010 via Jose Telmo/Correio Braziliense: Segredos do Mar no top 5 de games com mais usuarios inscritos no Orkut.  
  https://www.josetelmo.com.br/principal/retrospectiva-2010-pelo-google/  
  https://www.correiobraziliense.com.br/app/noticia/tecnologia/2010/12/09/interna_tecnologia,226997/google-anuncia-os-campeoes-da-busca-em-2010.shtml

## 4. Visao de produto

### Fantasia do jogador

Ser dono de um mundo submarino vivo: montar aquarios/enseadas bonitos, colecionar peixes cada vez mais raros, cruzar especies com amigos, ostentar peixes brilhantes e proteger seu tesouro de visitas oportunistas.

### Pilares

1. Cuidado cotidiano: entrar, alimentar, medicar, coletar moedas, limpar estados negativos.
2. Colecao e genealogia: especies, cores, variantes, raros, super/brilhantes, trofeus por familia.
3. Decoracao util: aquario bonito tambem e aquario eficiente, pois decoracoes aumentam producao.
4. Socialidade ambigua: amigos ajudam, reproduzem peixes e tambem roubam moedas/congelam peixes.
5. Tempo real: ovos, crescimento, producao, fome e doenca continuam progredindo fora da sessao.
6. Monetizacao leve mas presente: diamantes aceleram, compram raros, protegem tesouro e liberam cosmeticos.

### Publico-alvo

Jogadores casuais de redes sociais, 12+, com sessoes curtas e recorrentes. O design favorece jogadores com muitos amigos ativos, pois a reproducao com peixes de amigos e visitas frequentes eram parte central do progresso.

## 5. Plataforma e tecnologia sugerida para remake

### Original historico

O original rodava como aplicativo social de navegador no Orkut, provavelmente Flash/OpenSocial na epoca, com integracao a amigos, perfil e pagamentos.

### Remake recomendado

- Cliente: Web, HTML5 Canvas ou PixiJS.
- Servidor: Node.js/NestJS ou Go, com jobs de tempo real calculados sob demanda.
- Banco: PostgreSQL para estado persistente; Redis para sessoes, cooldowns e filas sociais.
- Assets: atlas PNG/WebP para peixes, decoracoes, UI e efeitos.
- Autenticacao: login proprio, Google/Facebook opcional.
- Social: sistema interno de amigos, convites, visitas, feed de eventos e presentes.

## 6. Loop principal

### Loop de sessao de 2 a 5 minutos

1. Abrir jogo e sincronizar aquarios.
2. Receber resumo offline: moedas produzidas, peixes famintos/doentes, ovos prontos, peixes idosos e roubos sofridos.
3. Coletar moedas visiveis e enviar ao bau.
4. Alimentar peixes com fome.
5. Medicar peixes doentes.
6. Dispersar gelo/excitacao indesejada sacudindo peixes.
7. Revisar ovos prontos e arrastar novos bebes para a enseada.
8. Visitar 3 a 10 amigos para cuidar, roubar moedas e procurar parceiros de acasalamento.
9. Colocar peixe proprio no aquario de reproducao, visitar amigo, arrastar peixe dele para completar o par e receber ovo imediatamente.
10. Comprar peixe/decoracao/ferramenta ou reorganizar aquario.

### Loop diario

1. Coletar tesouros acumulados.
2. Fazer cruzamentos raros com amigos especificos.
3. Completar objetivos/trofeus de familias.
4. Expandir enseadas ou reorganizar decoracoes para maior impulso.
5. Liberar peixes idosos para abrir espaco, recebendo confirmacao antes da acao.

### Loop de longo prazo

1. Desbloquear familias raras.
2. Obter variantes coloridas.
3. Obter super/brilhantes.
4. Completar conjunto de 5 peixes por raca e o super peixe correspondente.
5. Maximizar impulso de ouro e capacidade de aquario.
6. Manter rede social ativa para receitas dependentes de amigos.

## 7. Tela principal e UI

### Composicao da tela

O layout base deve reproduzir a gramatica visual social-game de 2010:

- area central: cena submarina 2D com fundo azul, areia, corais, rochas, ruinas, bau e peixes nadando;
- topo esquerdo: moedas, diamantes e botao para comprar/adicionar diamantes;
- topo centro: XP atual/proximo level e level;
- topo centro/baixo: indicador `Impulso de ouro`, exibido como valor percentual/decimal;
- topo direito: botoes de mensagens, presentes, configuracoes e possiveis avisos;
- canto inferior/esquerdo: botao de loja;
- barra inferior: ferramentas de mao, comida, remedio, gotas, congelamento, excitacao, crescimento;
- canto inferior/centro: carrossel de amigos com avatar, nome, nivel/rank e botao de visita;
- canto inferior da cena: tanque pequeno de acasalamento;
- laterais: setas ou abas para trocar enseadas.

### Interacoes

- Clique em peixe: abre tooltip/status com nome, especie, idade, fome, saude, estado especial e producao.
- Arrastar peixe: mover para tanque de reproducao ou reposicionar se permitido.
- Arrastar ferramenta: aplicar alimento/remedio/gota sobre peixe.
- Sacudir peixe: clicar/segurar e mover lateralmente por 5 segundos para dispersar efeitos.
- Clique em moeda: coleta moeda solta e anima para o bau.
- Clique em decoracao: selecionar, mover, vender/guardar/rotacionar se suportado.
- Clique em amigo: visitar aquario do amigo.

### Estados visuais dos peixes

- Fome: balao/icone de comida.
- Doenca: icone de remedio, cor mais opaca ou bolhas verdes.
- Congelado: bloco/overlay de gelo e animacao parada.
- Excitado: brilho/coracao/energia; tambem imune a congelamento.
- Idoso: simbolo de enseada/mar aberto, indicando que pode ser arrastado para liberacao com modal de confirmacao.
- Brilhante/Super: aura, estrela, shimmer e nome com prefixo `Super`, `Mestre` ou variante especial.

## 8. Aquarios, enseadas e expansao

### Conceito

O jogador possui um conjunto de enseadas, cada uma funcionando como um aquario/cena independente. Fontes antigas mencionam varios oceanos exoticos e expansao do aquario com varias enseadas. Para remake, implemente cada enseada como container com:

- capacidade de peixes;
- capacidade de decoracoes;
- fundo/cenario;
- posicoes livres de peixes;
- lista de decoracoes posicionadas com `x`, `y`, `zIndex`, escala e rotacao opcional;
- modificadores locais de impulso de ouro;
- lista de visitantes recentes;
- bau/tesouro visivel ou global.

### Progressao recomendada

Valores abaixo sao especificacao implementavel, nao valores historicos confirmados.

| Enseada | Desbloqueio | Cap. peixes | Cap. decor | Funcao |
| --- | ---: | ---: | ---: | --- |
| Enseada Inicial | tutorial | 12 | 20 | aprender cuidado, coleta e loja |
| Recife Claro | level 5 + moedas | 18 | 30 | primeira expansao, mais decoracao |
| Ruinas Douradas | level 10 + moedas | 24 | 40 | foco em impulso de ouro |
| Gruta Azul | level 16 + moedas/diamantes | 30 | 50 | peixes raros e super |
| Jardim de Corais | evento/level 25 | 36 | 60 | cosmetico e trofeus |
| Abismo Brilhante | endgame | 42 | 70 | colecao de super/brilhantes |

### Regras

- O jogador pode mover peixes entre enseadas, exceto peixes em acasalamento, ovos ainda nao chocados, peixes presos por efeito ou peixes idosos aguardando liberacao.
- Decoracoes pertencem a uma enseada enquanto estao colocadas. Elas podem ser arrastadas para qualquer posicao valida da cena, e o servidor salva posicao, camada, escala/rotacao quando existir, e enseada atual.
- Decoracoes podem ser guardadas no inventario e recolocadas em outra enseada.
- O impulso de ouro deve ser calculado por enseada a partir das decoracoes colocadas nela. A UI pode exibir tambem um resumo global, mas a producao de moedas deve usar o impulso da enseada onde o peixe esta.
- Visitantes entram na enseada marcada como principal, mas podem navegar entre enseadas desbloqueadas.

### Evolucao de enseadas

Enseadas podem ser desbloqueadas e evoluidas com ouro, respeitando requisito de level/XP. Evoluir uma enseada pode aumentar:

- capacidade de peixes;
- capacidade de decoracoes;
- bonus maximo de impulso local;
- area navegavel/area de areia para especies de fundo;
- quantidade de moedas expostas antes de atingir limite;
- slots cosmeticos de fundo.

## 9. Sistema de peixes

### Entidade `FishInstance`

Campos minimos:

```json
{
  "id": "fish_123",
  "ownerId": "player_1",
  "speciesId": "vitas",
  "colorVariantId": "default",
  "customName": "Bolinha",
  "stage": "juvenile",
  "bornAt": "2026-06-25T12:00:00Z",
  "stageStartedAt": "2026-06-25T20:00:00Z",
  "hunger": 82,
  "health": 100,
  "effects": ["excited"],
  "isShiny": false,
  "isSuper": false,
  "coveId": "cove_1",
  "x": 310,
  "y": 220,
  "movementState": { "direction": 1, "speedSeed": 0.42 },
  "lastCoinAt": "2026-06-25T21:00:00Z",
  "uncollectedCoins": 3,
  "breedingCooldownUntil": null,
  "releaseAvailable": false
}
```

### Estagios

| Estagio | Origem | Pode produzir? | Pode acasalar? | Observacao |
| --- | --- | --- | --- | --- |
| Ovo | acasalamento | nao | nao | aparece imediatamente; tempo para rachar depende da especie/raridade |
| Bebe | loja ou ovo chocado | baixo/nao | nao | precisa crescer |
| Adolescente | crescimento | sim | sim em varias fontes | usado em guias de acasalamento |
| Jovem | crescimento | sim | sim | ponte ate adulto |
| Maduro/Adulto | crescimento | sim pleno | sim | algumas receitas exigem adulto |
| Idoso | pos-maturidade | nao | nao | aparece icone de enseada/mar aberto; pode ser arrastado para liberacao com modal |

### Tempos recomendados

O tempo do ovo nao deve ser fixo. O ovo aparece imediatamente no aquario de reproducao, mas a duracao ate rachar vem da especie sorteada como resultado. Isso preserva uma leitura importante do jogo: o jogador nao ve a especie antes de nascer, mas pode suspeitar pelo tempo restante e pelo brilho do ovo.

| Raridade do resultado | Tempo de ovo recomendado |
| --- | ---: |
| comum | 2 h a 5 h |
| incomum/variante de cor | 5 h a 8 h |
| raro | 8 h a 16 h |
| muito raro | 16 h a 24 h |
| super/brilhante | 24 h a 48 h |
| evento lendario | 36 h a 72 h |

| Transicao pos-nascimento | Tempo base |
| --- | ---: |
| Bebe -> Adolescente | 4 h |
| Adolescente -> Jovem | 8 h |
| Jovem -> Maduro | 12 h |
| Maduro -> Idoso | 72 h a 168 h, por especie/raridade |

Peixes raros podem ter crescimento mais lento e maior producao. Ferramentas de crescimento podem reduzir etapas ou alterar resultado de receitas.

### Atributos por especie

```json
{
  "speciesId": "super_polvo",
  "family": "polvo",
  "displayName": "Super Polvo",
  "rarity": "super",
  "behaviorType": "swimmer",
  "eggHatchHours": 36,
  "baseCoinIntervalSec": 198,
  "coinValue": 1,
  "retirementRewardCoins": 6500,
  "buyPriceCoins": null,
  "buyPriceDiamonds": null,
  "breedable": true,
  "canBeFrozen": false,
  "canBeExcited": false,
  "xpPulse": { "amount": 35, "intervalHours": 3 },
  "colorVariants": [
    { "id": "default", "displayName": "Padrao", "paletteKey": "polvo_super_default" },
    { "id": "rosa", "displayName": "Rosa", "paletteKey": "polvo_super_rosa" }
  ],
  "spriteKey": "fish_super_polvo"
}
```

Comentario de comunidade cita Super Polvo produzindo em 3.3 minutos e dando 6500 moedas ao ir para o mar; Super Danubio produzindo em 4.5 minutos e dando 3400 moedas. Use esses numeros como calibragem realista para super peixes.

### Comportamento de movimento

Cada especie deve declarar um `behaviorType`. O front nao deve inferir comportamento pelo nome do peixe; ele recebe esse campo no catalogo e escolhe o controlador de movimento correspondente. Isso resolve especies que sao "peixes" de colecao, mas visualmente se comportam como animais de fundo/areia.

| `behaviorType` | Uso | Movimento no front | Exemplos |
| --- | --- | --- | --- |
| `swimmer` | peixe/criatura que nada livremente | patrulha 2D em toda a area navegavel, vira horizontalmente ao mudar direcao | Vitas, Danubio, Niimo, Peixe Lua |
| `bottom_walker` | criatura que anda na areia | anda apenas em faixa de fundo, com pequenas pausas e sem subir para a coluna d'agua | Carangueijo, Siri |
| `bottom_crawler` | criatura lenta de fundo | deslocamento curto, rente ao chao, com idle longo | Polvo, estrela/concha animada se existir |
| `hoverer` | criatura que flutua quase parada | oscila em pequena area, pouca velocidade horizontal | Cavalo do Mar, alguns raros |
| `school` | cardume/varios corpos | grupo segue trajetoria comum com offsets individuais | Cardume |
| `static_pet` | mascote decorativo vivo | nao produz movimento amplo; apenas idle/animacao local | especies especiais de evento quando aplicavel |

Parametros por especie:

```json
{
  "speciesId": "siri",
  "behaviorType": "bottom_walker",
  "movementBounds": { "minYRatio": 0.78, "maxYRatio": 0.94 },
  "baseSpeed": 24,
  "idleChance": 0.35
}
```

### Variacoes de cor

Peixes podem ter variacoes de cor como especies separadas, como `Vitas Rosa`, ou como variantes cosmeticas de uma mesma especie. Para remake, use as duas camadas:

- `speciesId`: define regras, receitas, raridade, producao, comportamento e desbloqueio.
- `colorVariantId`: define paleta/sprite alternativo dentro da especie quando a variacao nao muda mecanica.

Receitas antigas que citam cores especificas devem mapear para `speciesId` proprio quando a cor altera tabela de reproducao, valor ou raridade. Variacoes puramente visuais devem usar `colorVariantId`.

### Famílias e especies conhecidas

Nomes recorrentes nas fontes:

- Carangueijo/Eremita: Carangueijo Eremita, Amavel, Falador, Safado, Interesseiro, Super Carangueijo, Super Eremita.
- Vitas/Golfinho: Vitas, Vitas Rosa, Roxo, Amarelo, Verde, Super Vitas, Golfinho Apaixonado, Golfinho Roxo de Amor, Super Golfinho.
- O'Neal: O'Neal, Mestre O'Neal.
- Niimo/Nilmo: Niimo, Nilmo, Niimo Azul, Niimo Roxo, Super Niimo.
- Hulk: Hulk, Hulk Raivoso, Hulk Falso, Hulk Dourado, Hulk Baby, Super Hulk.
- Danubio: O Danubio, Colorido, Do Sol, Fogo, Noturno, Super Danubio.
- Borboleta/Monarca: Borboleta, Mariposa Lua, Mariposa Azul, Super Monarca.
- Esguio: Esguio Azul, Roxo, Verde, Laranja, Super Esguio.
- Sapo: Sapo Bebado, Absinto, Tequila, Menta, Super Sapo.
- Ribeiro: Ribeiro Aborrecido, Entediado, Divertido, Carrancudo, Depressivo.
- Patinho: Patinho Esguio, Verde, Rosa, Cinza, Roxo, Super Patinho.
- Coriac: Coriac, Vermelha, Azul, Laranja, Rosa, Super Coriac.
- Cesar: Cesar de Ouro, Cesar Perolado, Cesar Azulado.
- Reais/Ronaldo: Roxa Real/Roxita Real, Ronaldo do Fundo do Mar, Ronaldo Argentino, Ronaldinho Brasileirinho.
- Dragao: Dragao Oriental, Rosa, Azul, Verde, Roxo, Super Dragao.
- Cavalo do Mar: Cavalo do Mar, Laranja, Roxo, Verde, Azul, Super Cavalo do Mar.
- Peixe Lua: Peixe Lua, Rabudo, Solsticio, Inverno, Verao, Equinocio.
- Lamborghini/Laranja: Lamborghini, Lamborghini Azul, Roxo, Verde, Laranja, Laranja Azul.
- Illiden/Llliden: Illiden/Llliden, Sereno, de Ouro, Boxeador, Super Illiden.
- Jeter/Marta/Santel/Diego: variantes intermediarias de receitas secretas.
- Peixe Leao/Cardume: familias de recipes secretas.
- Martelo: Martelo, Roxo, Verde, Laranja, Lilas, Super Martelo.
- Polvo/Orca/Raya/Siri: familias posteriores e raras.
- Peixe Boi/Foca/Pavao: familias tardias em tabelas de comunidade.
- Especiais sazonais: Peixe Coelho, Peixe Coelho Imitador, itens/linhas Paris Hilton.

## 10. Alimentacao, saude e ferramentas

### Fome

Fome decai em tempo real. Quando o peixe esta com fome:

- exibe balao/icone;
- reduz producao de moedas;
- pode bloquear crescimento se fome chegar a 0;
- aumenta chance de doenca;
- permite acao social positiva de amigo alimentando.

Formula recomendada:

```text
hunger -= species.hungerDecayPerHour * elapsedHours
if hunger < 30: coinProduction *= 0.5
if hunger == 0: growthPaused = true
```

### Doenca

Doenca surge por tempo sem cuidado, fome baixa ou evento aleatorio. Quando doente:

- exibe icone de remedio;
- para producao e crescimento;
- pode impedir acasalamento;
- pode ser curada pelo dono ou amigo com gota medicinal.

Formula recomendada:

```text
if hunger < 20:
  illnessChancePerHour = species.baseIllnessChance * 3
else:
  illnessChancePerHour = species.baseIllnessChance
```

### Ferramentas

| Ferramenta | Tipo | Alvo | Efeito |
| --- | --- | --- | --- |
| Comida | cuidado | peixe proprio/amigo | restaura fome |
| Remedio | cuidado | peixe proprio/amigo | cura doenca |
| Gota de congelamento | social/ofensiva | peixe de amigo | congela; pausa crescimento/producao |
| Gota de excitacao | social/receita/defesa | peixe proprio/amigo | impede congelamento e satisfaz receitas |
| Dispersao/sacudir | defesa | peixe proprio | remove congelamento/excitacao apos gesto de 5 s |
| Pilula de crescimento | premium/utilidade | peixe proprio ou reproducao | acelera estagio ou altera tabela de resultado |
| Mao/coleta | utilidade | moedas/decor | coleta moedas e move objetos |

### Estados especiais

- Congelado: nao cresce, nao produz, nao pode acasalar.
- Excitado: nao pode ser congelado enquanto durar; algumas receitas exigem `exc`.
- Brilhante/Super: imune a congelamento e excitacao; gera XP periodico.
- Idoso: nao produz, nao acasala e pode ser liberado no mar aberto por recompensa, sempre com modal de confirmacao.

## 11. Economia

### Moedas/ouro

Moeda comum ganha por:

- producao passiva dos peixes;
- coleta manual de moedas soltas;
- recompensa ao liberar peixe idoso na enseada/mar aberto;
- acoes sociais de cuidado;
- possiveis missoes/trofeus;
- roubo em aquarios de amigos.

Gasta em:

- peixes comuns;
- comidas;
- remedios;
- ferramentas/itens comuns;
- decoracoes comuns;
- novas enseadas;
- evolucao de enseadas ja desbloqueadas;
- reposicionamento/compra de objetos;
- eventos de baixo custo.

O ouro e a moeda de operacao e progressao material. Se o jogador quer alimentar, curar, comprar peixe comum, comprar decoracao comum, liberar uma nova enseada ou evoluir capacidade/bonus de uma enseada existente, o custo primario deve ser ouro.

### XP e desbloqueios

XP nao e moeda de compra: ele desbloqueia catalogo. Ao subir de level, o jogador passa a ver/comprar novos peixes, decoracoes, ferramentas, comidas melhores e upgrades de enseada. O item ainda precisa ser comprado com ouro ou diamantes, conforme seu tipo.

Modelo recomendado:

| Level | Desbloqueio |
| ---: | --- |
| 1 | peixes iniciais, comida basica, remedio basico, decoracoes simples |
| 3 | primeiras variantes de cor comuns |
| 5 | nova enseada/upgrade de capacidade, decoracoes com impulso maior |
| 8 | ferramentas sociais basicas, mais receitas comuns |
| 10 | peixes raros de loja e decoracoes premium iniciais |
| 15 | novas familias, decoracoes grandes e upgrades de enseada |
| 20 | receitas de super/brilhantes iniciais |
| 25+ | conteudo de evento, enseadas avancadas e familias endgame |

No catalogo, cada item deve ter `unlockLevel` e custo separado:

```json
{
  "catalogItemId": "fish_vitas",
  "type": "fish",
  "unlockLevel": 10,
  "price": { "currency": "diamonds", "amount": 29 }
}
```

### Diamantes

Moeda premium. Fontes antigas dizem que diamantes gratis nao tinham truque confiavel; em geral eram comprados. Um blog introdutorio relata inicio com 12 diamantes.

Gasta em:

- peixes raros da loja;
- decoracoes premium;
- ferramentas premium;
- pílula de crescimento;
- eventos e linhas licenciadas.

### Producao de moedas

Cada peixe possui:

- `baseCoinIntervalSec`: tempo para produzir uma moeda/lote;
- `coinValue`: valor por moeda/lote;
- `maxUncollectedCoins`: limite de moedas expostas;
- `retirementRewardCoins`: recompensa ao liberar peixe idoso no mar aberto.

`Impulso de ouro` acelera a producao:

```text
effectiveInterval = baseCoinIntervalSec / (goldImpulsePercent / 100)
```

Exemplo: peixe com intervalo de 300 s e impulso 150% produz a cada 200 s.

### Impulso de ouro

Confirmado: impulso faz peixes produzirem moedas mais rapido e aumenta com decoracoes.

Implementacao:

```text
goldImpulsePercent = 100 + sum(activeDecoration.goldBoostPercent)
goldImpulsePercent = clamp(goldImpulsePercent, 100, goldImpulseCap)
```

Cap recomendado:

- early game: 150%;
- mid game: 250%;
- endgame: 500% com itens premium/evento.

### Bau/tesouro

Moedas produzidas aparecem no aquario. O jogador deve coleta-las para o bau. Moedas nao coletadas sao o principal alvo social:

- dono coleta 100% das moedas visiveis;
- visitante pode roubar parte de moedas visiveis/tesouro exposto;
- cada visitante tem limite por amigo por janela;
- peixe nunca pode ser roubado; somente moedas expostas/tesouro social entram nessa mecanica.

### Roubo

Regra recomendada:

```text
stealableCoins = min(friend.uncollectedCoins, dailyStealCapByVisitor)
stolen = floor(stealableCoins * stealPercent)
```

Parametros iniciais:

- `stealPercent`: 10% a 30% das moedas expostas;
- `dailyStealCapByVisitor`: 50 a 500 moedas conforme level;
- `friendStealCooldown`: 8 h;
- log social sempre visivel para dono.

## 12. Loja

### Estrutura da loja

Screenshots preservados mostram abas:

- Peixe;
- Alimento;
- Ferramentas.

Para remake, use:

- Peixes;
- Comida;
- Ferramentas;
- Decoracoes;
- Outros/Premium;
- Eventos.

### Exemplos de peixes e precos encontrados

Valores extraidos de screenshots antigas. Alguns nomes/precos podem estar truncados.

| Peixe | Preco | Tipo |
| --- | ---: | --- |
| Peixe Lua | 9 diamantes | raro |
| Carangueijo Eremita | 15 diamantes | raro |
| Vitas | 29 diamantes | raro |
| Pequena Manga | 250 moedas | comum |
| Nilmo/Niimo | 250 moedas | comum |
| Hulk | 250 moedas | comum |
| O Danubio | 250 moedas | comum |
| Borboleta | 275 moedas | comum |
| Peixe Esguio Azul | somente acasalamento ou 300 moedas em outra tela | desbloqueavel |
| Sapo Bebado | 300 moedas | comum |
| Lamborghini | somente acasalamento | raro |
| Illiden/Llliden | 360 moedas | especial |
| Laranja | 625 moedas, com cadeado em screenshot | bloqueado/desbloqueavel |
| Hulk Raivoso | 255 moedas | variante |
| Hulk Falso | 260 moedas | variante |
| Hulk Dourado | 265 moedas | variante |
| O Danubio Colorido | 255 moedas | variante |
| O Danubio do Sol | 260 moedas | variante |
| O Danubio Fogo | 3 diamantes | premium/variante |
| Mariposa Lua | 290 moedas | variante |
| Estaladeira | 310 moedas | variante |
| Rosa-de-luto | 5 diamantes | premium/variante |
| Peixe Esguio Roxo | 285 moedas | variante |
| Esguio Verde | 6 diamantes | premium/variante |

### Decoracoes e precos encontrados

As imagens de `Novos Objetos` preservam tiras de objetos com valores:

| Decoracao/objeto visivel | Preco observado |
| --- | ---: |
| Monte de areia/concha clara | 99999 moedas |
| Submarino vermelho/amarelo | 19 diamantes |
| Concha caracol | 5 diamantes |
| Coral/arbusto laranja | 4500 moedas |
| Coral amarelo | 8 diamantes |
| Bau/rocha dourada | 44 diamantes |
| Coral branco | 6000 moedas |
| Coral vermelho | 8000 moedas |
| Rocha cinza | 7500 moedas |
| Fundo/quadro submarino azul | 42 diamantes |
| Estrela do mar laranja | 5000 moedas |
| Estrela do mar azul | 5 diamantes |
| Bandeira pirata | 9 diamantes |
| Estrela amarela | 4 diamantes |
| Estrela rosa | 4 diamantes |
| Ancora | 8 diamantes |
| Coral rosa | 12 diamantes |
| Fundo vermelho/azul | 28 diamantes |
| Planta/coral simples | 3000 moedas |
| Planta/coral simples | 5000 moedas |
| Pedra/monte verde | 50000 moedas |
| Rocha marrom | 28000 moedas |

### Bonus de decoracao recomendado

Como os valores exatos de bonus nao foram preservados, use uma tabela por tier:

| Tier | Preco medio | Bonus impulso |
| --- | ---: | ---: |
| comum pequeno | 3000-8000 moedas | +0.2% a +0.8% |
| comum grande | 28000-99999 moedas | +1% a +5% |
| premium pequeno | 4-12 diamantes | +2% a +8% |
| premium grande | 19-44 diamantes | +8% a +20% |
| evento/licenciado | variavel | +5% a +25% + cosmetico |

### Decoracao posicionada por enseada

Cada decoracao comprada existe como instancia. Quando esta guardada, fica no inventario; quando esta colocada, pertence a uma enseada especifica e salva posicao.

```json
{
  "decorInstanceId": "decor_123",
  "decorCatalogId": "coral_vermelho",
  "ownerId": "player_1",
  "state": "placed",
  "coveId": "cove_1",
  "x": 420,
  "y": 310,
  "zIndex": 40,
  "scale": 1,
  "rotation": 0,
  "goldBoostPercent": 1.2
}
```

Regras:

- ao arrastar decoracao dentro da enseada, salvar nova posicao no servidor;
- ao guardar, limpar `coveId` e posicao ativa, mantendo a instancia no inventario;
- ao colocar em outra enseada, validar capacidade da enseada e gravar novo `coveId`;
- o bonus de impulso so conta quando `state = placed`.

## 13. Interacoes sociais permitidas

Nesta versao do GDD, protecao premium contra roubo fica fora de escopo. A camada social deve focar em cuidado, congelamento, roubo de moedas e reproducao com peixe de amigo.

Regras importantes:

- Peixe de outro jogador nunca pode ser roubado, transferido, vendido ou liberado por visitante.
- Visitante pode alimentar peixe do amigo.
- Visitante pode dar remedio a peixe doente do amigo.
- Visitante pode congelar peixe do amigo se tiver ferramenta/cooldown.
- Visitante pode arrastar um peixe do amigo para o proprio aquario de reproducao, desde que tenha antes colocado um peixe proprio nele.
- Todo cuidado social gera notificacao para o dono quando ele entrar.
- Acoes negativas, como congelamento e roubo de moedas, tambem devem aparecer no log social.

Notificacoes recomendadas:

- "Fulano alimentou seu Vitas."
- "Fulano curou seu Sapo Bebado."
- "Fulano congelou seu Danubio."
- "Fulano usou seu O'Neal em uma reproducao."
- "Fulano roubou 120 moedas do seu tesouro."

## 14. Reproducao e genetica

### Fluxo confirmado

1. Jogador abre seu proprio aquario e arrasta um peixe elegivel para o aquario de reproducao.
2. O aquario de reproducao fica "armado" com o peixe proprio.
3. Jogador visita o aquario de um amigo.
4. Jogador arrasta um peixe elegivel do amigo para o proprio aquario de reproducao.
5. Sistema valida especie, estagio, estado, cooldown, amizade e receita.
6. O resultado e sorteado no servidor, mas a especie nao e revelada ao jogador.
7. Um ovo aparece imediatamente no aquario de reproducao do jogador.
8. O ovo mostra um timer ate rachar; esse tempo vem da especie/raridade sorteada.
9. Se o resultado sorteado for brilhante/super, o ovo ja aparece brilhando, sem revelar a especie.
10. Ao terminar o timer, o ovo racha e revela o peixe.
11. Jogador arrasta o novo bebe para uma enseada com espaco.

### Elegibilidade

Regras recomendadas:

- peixe nao pode estar congelado, doente, idoso ou ja em acasalamento;
- peixe precisa ser no minimo adolescente;
- algumas receitas exigem adulto/maduro;
- algumas receitas exigem estado `excitado`;
- super peixes podem participar de receitas, mas nao recebem estados de excitacao/congelamento;
- cada peixe tem cooldown de acasalamento apos uso.

### Sistema de receitas

As fontes mostram muitas receitas conflitantes. Portanto, o sistema deve ser ponderado:

```json
{
  "id": "recipe_vitas_oneal_lamborghini",
  "parents": [
    { "species": "vitas", "effect": "any", "minStage": "adolescent" },
    { "species": "oneal", "effect": "any", "minStage": "adolescent" }
  ],
  "requirements": {
    "growthPill": false,
    "minPlayerLevel": 1
  },
  "results": [
    { "species": "lamborghini", "colorVariant": "default", "weight": 60 },
    { "species": "peixe_lua", "colorVariant": "default", "weight": 20 },
    { "species": "carangueijo_eremita", "colorVariant": "default", "weight": 20 }
  ]
}
```

O tempo do ovo nao fica na receita: ele deve vir do `eggHatchHours` da especie/variante sorteada, com modificadores opcionais de evento, item ou raridade.

### Algoritmo

1. Normalizar ordem dos pais.
2. Filtrar receitas por especie, estagio, estado, item usado, level e disponibilidade de evento.
3. Se houver receita exata, sortear por pesos.
4. Se houver multiplas receitas exatas, somar pesos por resultado.
5. Se nao houver receita exata, usar fallback:
   - 35% especie do pai A;
   - 35% especie do pai B;
   - 20% especie comum da familia;
   - 10% mutacao comum dependente do level.
6. Aplicar modificadores:
   - excitacao aumenta chance de raros quando receita pede `exc`;
   - pilula de crescimento ativa tabela alternativa;
   - repeticoes consecutivas com mesmo amigo podem reduzir chance de novo resultado para evitar farming;
   - level pode desbloquear resultados.
7. Criar ovo imediatamente com:
   - `hiddenResultSpeciesId`;
   - `hiddenColorVariantId`;
   - `isShinyEgg`;
   - `createdAt`;
   - `hatchesAt = createdAt + resultSpecies.eggHatchHours`.

### Chance e incerteza

Uma fonte comunitaria declarava cerca de 87% de chance de acerto em suas combinacoes, com possiveis divergencias por nivel, numero de tentativas etc. O remake deve preservar essa sensacao: receitas nao precisam ser 100% deterministicas. O valor recomendado:

- receita comum: 80% resultado-alvo, 20% fallback relacionado;
- receita rara: 45% alvo, 35% variante, 20% comum;
- receita super/brilhante: 10% a 30% alvo, com pena de repeticao.

## 15. Peixes brilhantes, super peixes e trofeus

### Definicao

`Peixes brilhantes` eram variantes raras/super com aura especial, nomes como Super Golfinho, Super Vitas, Super Sapo, Mestre O'Neal, Super Martelo, Super Illiden, Super Patinho, Super Danubio, Super Hulk, Super Niimo e outros.

### Propriedades

- Visual de brilho/aura.
- Maior producao de moedas.
- XP periodico. Fonte comunitaria cita 35 XP a cada 3 horas por peixe brilhante.
- Imunidade a congelamento e excitacao, segundo guia de super peixes.
- Valor alto ao ir para mar aberto.
- Pode ser requisito para trofeu e receitas de endgame.

### Trofeus

Fonte de comunidade informa que, para ganhar trofeus, o jogador devia possuir os 5 peixes de uma raca e conseguir o super peixe dessa raca por acasalamento.

Implementacao:

```text
if player.hasAll(family.requiredFive) and player.has(family.superSpecies):
  unlockTrophy(family)
  grantReward(coins, xp, decorationOrBadge)
```

Recompensas recomendadas:

- badge no perfil;
- decoracao exclusiva;
- +5% impulso por colecao completa;
- moedas/XP;
- titulo social.

### Receitas de peixes brilhantes preservadas

Lista consolidada de fonte `Peixes Brilhantes`:

| Resultado | Receita |
| --- | --- |
| Super Golfinho | Peixe Verao + Martelo Laranja |
| Super Golfinho | Golfinho Apaixonado + Martelo Roxo (exc) |
| Super Golfinho | Golfinho Roxo + Super Color |
| Super Golfinho | Vitas + Golfinho Apaixonado (exc) |
| Super Carangueijo | Ronaldo do Fundo do Mar (s/exc) + Ronaldo Argentino (exc) |
| Super Carangueijo | Dragao Oriental Rosa (exc) + Carangueijo Amavel (s/exc) |
| Super Carangueijo | Super Vitas + Marta (s/exc) |
| Super Vitas | Carangueijo Interesseiro (s/exc) + Super Color |
| Super Vitas | Vitas Verde (s/exc) + Azul (exc) |
| Super Vitas | Dragao Oriental Verde (exc) + Santel (exc) |
| Mestre O'Neal | Vitas Amarelo (s/exc) + Mestre O'Neal |
| Mestre O'Neal | Super Vitas + O'Neal (exc) |
| Mestre O'Neal | Vitas Verde (exc) + Marta (exc) |
| Mestre O'Neal | Azul (exc) + Diego (exc) |
| Mestre O'Neal | Cavalo do Mar (s/exc) + Cavalo do Mar Azul |
| Super Martelo | Martelo Roxo (s/exc) + Martelo (exc) |
| Super Martelo | Peixe Inverno (s/exc) + Peixe Verao (exc) |
| Super Martelo | Martelo Lilas (s/exc) + Martelo Laranja (exc) |
| Tempus | Peixe Inverno (s/exc) + Peixe Verao (exc) |
| Super Illiden | Coriac Vermelha (s/exc) + Coriac (exc) |
| Super Illiden | Cesar Azulado (s/exc) + Super Cavalo Marinho |
| Super Patinho | Vitas Roxo (s/exc) + Martelo Verde (exc) |
| Super Patinho | Peixe Verao (s/exc) + Peixe Verao (s/exc) |
| Super Sapo | Ribeiro Entediado (s/exc) + Sapo Tequila (s/exc) |
| Super Sapo | Lamborghini Azul (s/exc) + Tempus |
| Super Sapo | Lamborghini Roxo (exc) + Lamborghini Azul (exc) |
| Super Monarca | Martelo Verde (exc) + Esguio Roxo (s/exc) |
| Super Monarca | Borboleta (s/exc) + Mariposa Azul (exc) |
| Super Monarca | Hulk Raivoso (s/exc) + Dragao Oriental Azul (exc) |
| Super Monarca | Coriac Vermelha (s/exc) + Coruja (exc) |
| Super Monarca | Niimo Azul (s/exc) + Niimo (exc) |
| Super Danubio | Coriac Vermelha (s/exc) + Estaladeira (exc) |
| Super Danubio | Danubio Noturno (s/exc) + Laranja (exc) |
| Super Hulk | Hulk Baby (s/exc) + Hulk Dourado (exc) |
| Super Hulk | Pequena Manga Azul (s/exc) + Carangueijo Amavel (exc) |
| Super Niimo | Pequena Manga (s/exc) + Hulk Dourado (exc) |
| Super Niimo | Pequena Manga (s/exc) + Laranja (s/exc) |
| Super Niimo | Peixe Verao (exc) + Hulk Falso (s/exc) |
| Super Manga | Peixe Equinocio (s/exc) + Hulk Falso (exc) |
| Super Manga | Pequena Manga (s/exc) + Pequena Manga (exc) |

Observacao: comentarios indicam que algumas receitas podiam gerar outro super peixe. Exemplo: Coriac Vermelha + Estaladeira podia gerar Super Polvo em vez de Super Danubio. Isso reforca a necessidade de resultados ponderados.

## 16. Receitas-base preservadas

### Receitas iniciais/comuns

| Resultado | Receita |
| --- | --- |
| Esguio Azul | Danubio + Nilmo/Niimo |
| Cesar | Coriac + Hermit/Carangueijo Eremita sem pilula de crescimento |
| Coriac | Peixe Esguio Azul + Sapo Bebado |
| Ribeiro Aborrecido | Coriac + Peixe Esguio Azul |
| Pequena Manga | Peixe Esguio Azul + Niimo |
| Sapo Bebado | Peixe Esguio Azul + Ribeiro Aborrecido |
| Peixe Lua | Carangueijo Eremita + Vitas |
| Lamborghini | Vitas + O'Neal |
| Cavalo Marinho | Dragao Oriental + Golfinho/Vitas |

### Receitas normais listadas em Boa Garoto

| Pais | Possiveis resultados observados |
| --- | --- |
| Borboleta + Sapo Bebado (exc) | Borboleta, O Danubio |
| Borboleta + Roxa Real (exc) | Borboleta |
| Borboleta + Coriac | Borboleta, Sapo Bebado, Niimo |
| Borboleta + O Danubio | Esguio Azul, O Danubio |
| Borboleta + Borboleta | Hulk, O Danubio |
| Borboleta + Ribeiro Aborrecido | Niimo, O Danubio, Ribeiro Aborrecido |
| Borboleta + O'Neal | O Danubio |
| Carangueijo Eremita + Esguio Azul | Borboleta |
| Carangueijo Eremita + Carangueijo Eremita | Carangueijo Eremita, Cavalo do Mar, Vitas |
| Coriac (exc) + Sapo Bebado | Hulk, Pequena Manga |
| Coriac (exc) + Cavalo Marinho | O Danubio |
| Coriac (exc) + Coriac | Patinho Esguio |
| Coriac (exc) + O'Neal | Patinho Esguio |
| Coriac (exc) + Patinho Esguio | Ribeiro Aborrecido |
| Coriac (exc) + Cesar de Ouro | Ribeiro Aborrecido |
| Coriac (exc) + Vitas | Sapo Bebado |
| Coriac (exc) + Carangueijo Eremita | Sapo Bebado |
| Esguio Azul + Roxa Real (exc) | Borboleta |
| Hulk + Ribeiro Aborrecido | Niimo |
| Hulk + Patinho Esguio | Niimo, Pequena Manga |
| Hulk + Borboleta | O Danubio |
| Hulk + Sapo Bebado | O Danubio |
| Hulk + Coriac | O Danubio |
| Hulk + Hulk | Pequena Manga |
| Hulk + Cesar de Ouro | Pequena Manga, Sapo Bebado |
| Niimo + O Danubio | Hulk |
| Niimo + Ribeiro Aborrecido (exc) | Hulk |
| Niimo + Hulk | Niimo |
| Niimo + Sapo Bebado | Niimo |
| Niimo + Patinho Esguio | Niimo |
| Niimo + Coriac | O Danubio |
| Niimo + Roxa Real (exc) | O Danubio |
| Niimo + Borboleta | Pequena Manga |
| Niimo + Bebado | Pequena Manga |
| O Danubio + Borboleta | Borboleta |
| O Danubio + Sapo Bebado | Borboleta |
| O Danubio + Ribeiro Aborrecido (exc) | Borboleta |
| O Danubio + Patinho Esguio | Hulk, Niimo |
| O Danubio + Roxa Real (exc) | Niimo |
| O Danubio + Ronaldo | O Danubio |
| O Danubio + O Danubio | O Danubio |
| Patinho Esguio + Cesar de Ouro | Cesar de Ouro, Sapo Bebado |
| Patinho Esguio + Patinho Esguio | Patinho Esguio |
| Patinho Esguio + Sapo Bebado | Ribeiro Aborrecido |
| Pequena Manga + Pequena Manga | Hulk |
| Pequena Manga + Ribeiro Aborrecido | Hulk |
| Pequena Manga + Niimo | Niimo |
| Pequena Manga + O Danubio | O Danubio |
| Pequena Manga + Borboleta | Pequena Manga |
| Pequena Manga + Hulk | Pequena Manga |
| Pequena Manga + Sapo Bebado | Pequena Manga |
| Ribeiro Aborrecido + Borboleta | Borboleta |
| Ribeiro Aborrecido + Patinho Esguio (exc) | Borboleta, Ribeiro Aborrecido |
| Ribeiro Aborrecido + Sapo Bebado | Borboleta |
| Ribeiro Aborrecido + Esguio Azul | Borboleta, Ribeiro Aborrecido |
| Ribeiro Aborrecido + Patinho Esguio | Coriac, Patinho Esguio, Ribeiro Aborrecido |
| Ribeiro Aborrecido + Coriac | Sapo Bebado |
| Ribeiro Aborrecido (exc) + Patinho Esguio | Coriac, O Danubio, Ribeiro Aborrecido |
| Ribeiro Aborrecido (exc) + Carangueijo Eremita | Sapo Bebado |
| Sapo Bebado + Coriac | Borboleta |
| Sapo Bebado + Cesar de Ouro | Borboleta |
| Sapo Bebado + Ronaldo | Borboleta, Ribeiro Aborrecido |
| Sapo Bebado + Roxa Real (exc) | Borboleta, Sapo Bebado |
| Sapo Bebado + Borboleta | Hulk |
| Sapo Bebado + Esguio Azul | Ribeiro Aborrecido |
| Sapo Bebado + Patinho Esguio | Ribeiro Aborrecido |
| Sapo Bebado + Sapo Bebado | Sapo Bebado |
| Vitas + Vitas (exc) | Carangueijo Eremita |
| Vitas + Cesar de Ouro | Patinho Esguio |
| Vitas + Vitas | Ronaldo |
| Vitas + Ronaldo | Ronaldo |

### Receitas secretas e variantes

| Resultado | Receita |
| --- | --- |
| Cardume | Patinho Esguio (s/exc) + Patinho Esguio (exc) |
| Cardume | Peixe Lua (s/exc) + Borboleta (exc) |
| Cardume | Illiden (s/exc) + Patinho Esguio (exc) |
| Cardume | Peixe Lua (s/exc) + Eremita (exc) |
| Cardume | Illiden (s/exc) + Cesar de Ouro (exc) |
| Cardume | Coriac (s/exc) + Cesar de Ouro (exc) |
| Cardume | Ronaldo (s/exc) + Ronaldo (exc) |
| Cardume | Patinho Esguio (s/exc) + Cavalo do Mar (exc) |
| Cardume | Ronaldo (s/exc) + Cesar de Ouro (exc) |
| Cardume | Illiden (s/exc) + Dragao Oriental (exc) |
| Cardume | Peixe Lua (s/exc) + Cavalo do Mar (exc) |
| Peixe Leao | Peixe Leao + Peixe Leao |
| Peixe Leao | Sapo Bebado + Eremita |
| Peixe Leao | Eremita + Peixe Leao |
| Peixe Leao | Peixe Lua (s/exc) + Borboleta (exc) |
| Peixe Leao | Ribeiro Aborrecido (s/exc) + Ribeiro Aborrecido (exc) |
| Peixe Leao | Dragao Oriental (s/exc) + Peixe Lua (exc) |
| Peixe Leao | O'Neal (exc) + Peixe Leao (exc) |
| Peixe Leao | Esguio Azul (s/exc) + Patinho Esguio (exc) |
| Peixe Leao | Ribeiro Aborrecido (s/exc) + Cesar de Ouro (exc) |
| Peixe Leao | Borboleta (s/exc) + Patinho Esguio (exc) |
| Peixe Leao | Patinho Esguio (s/exc) + Ribeiro Aborrecido (exc) |
| Peixe Leao | Peixe Lua (s/exc) + Eremita (exc) |
| Peixe Leao | Ribeiro Aborrecido (s/exc) + Sapo Bebado (exc) |
| Peixe Leao | Lamborghini (s/exc) + Lamborghini (exc) |
| Peixe Leao | Peixe Lua (s/exc) + O'Neal (exc) |
| Carangueijo Amavel | O'Neal (s/exc) + O'Neal (exc) |
| Carangueijo Amavel | Vitas (s/exc) + Jeter (exc) |
| Carangueijo Interesseiro | Carangueijo Eremita (s/exc) + Vitas (exc) |
| Vitas Rosa | Laranja (s/exc) + Jeter (exc) |
| Vitas Rosa | Vitas (s/exc) + Vitas (exc) |
| Vitas Rosa | O'Neal (s/exc) + Vitas (s/exc) |
| Vitas Rosa | O'Neal (s/exc) + O'Neal (exc) |
| Vitas Roxo | Vitas (s/exc) + Vitas Roxo (exc) |
| Vitas Roxo | Vitas Rosa (s/exc) + Vitas (exc) |
| Vitas Roxo | Vitas (s/exc) + Vitas (exc) |
| Vitas Roxo | Carangueijo Interesseiro (s/exc) + Vitas Verde (exc) |
| Vitas Amarelo | Laranja (exc) + Peixe Lua (s/exc) |
| Vitas Verde | Laranja (s/exc) + Vitas (exc) |
| Vitas Verde | Vitas (s/exc) + Vitas (exc) |
| Vitas Verde | Ronaldo (s/exc) + Ronaldo (exc) |
| Jeter | O'Neal (s/exc) + O'Neal (exc) |
| Jeter | Laranja (s/exc) + Laranja (exc) |
| Jeter | Ronaldo (s/exc) + Dragao Oriental (exc) |
| Marta | Vitas (s/exc) + Vitas (exc) |
| Marta | Laranja (s/exc) + Laranja (exc) |
| Marta | O'Neal (s/exc) + O'Neal (exc) |
| Marta | Coriac (s/exc) + Lamborghini Verde (exc) |
| Santel | Vitas (s/exc) + Vitas (exc) |
| Diego | Vitas (s/exc) + Vitas (exc) |
| Peixe Solsticio | Peixe Lua (s/exc) + Peixe Lua (exc) |
| Peixe Inverno | Patinho Esguio (s/exc) + Patinho Esguio (exc) |
| Cavalo do Mar Laranja | Cavalo do Mar (s/exc) + Cavalo do Mar (exc) |
| Cavalo do Mar Laranja | Ronaldo (s/exc) + Dragao Oriental (exc) |
| Cavalo do Mar Roxo | O'Neal (s/exc) + Carangueijo Eremita (exc) |
| Cavalo do Mar Roxo | Carangueijo Eremita (s/exc) + Vitas (exc) |
| Cavalo do Mar Verde | Ronaldo (s/exc) + Dragao Oriental (exc) |
| Cavalo do Mar Azul | Dragao Oriental Roxo (s/exc) + Dragao Oriental (exc) |
| Super Cavalo do Mar | Dragao Oriental Roxo (s/exc) + Dragao Oriental (exc) |
| Super Cavalo do Mar | Cavalo Marinho (s/exc) + Cavalo Marinho (s/exc) |
| Cesar Perolado | Illiden (s/exc) + Illiden (exc) |
| Dragao Oriental Azul | Carangueijo Eremita (s/exc) + Carangueijo Eremita (exc) |

### Receitas posteriores em Colheita Sanches

| Resultado | Receita |
| --- | --- |
| Super Cavalo Marinho | Cavalo Marinho (s/exc) + Cavalo Marinho (s/exc) |
| Dragao Oriental Rosa | Lamborghini (s/exc) + Carangueijo Eremita (exc) |
| Santel | Vitas (s/exc) + Jeter (exc) |
| Jeter | O'Neal (s/exc) + O'Neal (exc) |
| Marta | O'Neal (s/exc) + Jeter (exc) |
| Marta | Cavalo Marinho (s/exc) + O'Neal (exc) |
| Dragao Oriental Verde | Lamborghini (s/exc) + Dragao Oriental (exc) |
| Diego | Santel (s/exc) + Vitas (exc) |
| Dragao Oriental Azul | Dragao Oriental Rosa (s/exc) + Vitas Rosa (exc) |
| Diego | Vitas (s/exc) + Vitas (exc) |
| Diego | Vitas Verde (s/exc) + Vitas (exc) |
| Vitas Amarelo | Peixe Lua (s/exc) + Laranja (exc) |
| Dragao Oriental Azul | Carangueijo Eremita (s/exc) + Carangueijo Eremita (exc) |
| Jeter | Laranja (s/exc) + Laranja (s/exc) |
| Laranja Azul | Laranja (exc) + Laranja (exc) |
| Dragao Oriental | Ronaldo Fundo do Mar (s/exc) + Ronaldo Fundo do Mar (exc) |
| Peixe-Leao Azul | Coriac Laranja (s/exc) + Ribeiro Aborrecido (exc) |
| Peixe Verao | Peixe Solsticio (s/exc) + Laranja (exc) |
| Peixe Solsticio | Peixe Lua (s/exc) + Peixe Lua (exc) |
| Carangueijo Amavel | O'Neal (s/exc) + O'Neal (exc) |
| Coriac | Patinho Esguio (exc) + Illiden (exc) |
| Coriac Azul | Coriac Vermelha (s/exc) + Azul (exc) |
| Coriac | Ribeiro Aborrecido (s/exc) + Illiden (exc) |

### Familias tardias: Siri, Peixe Boi e Foca

| Resultado | Receita |
| --- | --- |
| Siri Teimoso | Marta (s/exc) + Lamborghini Verde Claro (s/exc) |
| Siri Malcriado | Paimarao (s/exc) + Vitas Roxo (exc) |
| Siri Malcriado | Paimarao (exc) + O'Neal (s/exc) |
| Siri Machao | Paimarao (s/exc) + Siri Machao (s/exc) |
| Siri Docinho | Amarelo (exc) + Super Niimo |
| Siri Docinho | Peixe Pavao Verde (s/exc) + Amarelo (s/exc) |
| Siri | Danubio do Fogo (s/exc) + Dragao Oriental Azul (s/exc) |
| Peixe Boi Azul | Peixe Boi Vermelho (s/exc) + Orca Amarelo (s/exc) |
| Peixe Boi Vermelho | Polvo Rosa (s/exc) + Polvo Verde (exc) |
| Peixe Boi Rosa | Illiden (exc) + Polvo Rosa (s/exc) |
| Peixe Boi Amarelo | Ronaldinho Brasileirinho (exc) + Illiden (exc) |
| Peixe Boi Verde | Super Danubio + Raya Verde (s/exc) |
| Foca Azul | Roxita Real (exc) + Mestre O'Neal |
| Foca Vermelho | Ronaldinho Argentino (s/exc) + Roxita Real (s/exc) |
| Foca Rosa | Sapo Tequila (exc) + Siri (s/exc) |
| Foca Amarelo | Martelo Lilas (s/exc) + Orca Verde (s/exc) |
| Foca Verde | Ribeiro Depressivo (exc) + Peixe Inverno (exc) |

## 17. Sistema social

### Amigos

O jogo depende de ter muitos amigos ativos. Fontes antigas recomendam adicionar amigos do Orkut porque todos podiam cooperar e crescer juntos.

Funcoes:

- visitar aquario;
- alimentar peixes do amigo;
- medicar peixes do amigo;
- usar gotas de congelamento/excitacao;
- roubar moedas;
- acasalar peixe proprio com peixe do amigo;
- enviar presentes;
- comparar ranking/level;
- aparecer no carrossel inferior.

### Visita

Ao visitar:

1. carregar aquario publico do amigo;
2. mostrar moedas expostas;
3. mostrar estados dos peixes;
4. permitir acoes disponiveis por relacao/cooldown;
5. registrar evento no log do dono;
6. enfileirar notificacao para o dono receber quando entrar, principalmente quando visitante alimenta ou da remedio.

### Ajudar vs atrapalhar

Sistema de reputacao recomendado:

- ajudar com comida/remedio: +amizade, +XP e notificacao positiva para o dono;
- roubar: +moedas, -amizade ou log negativo;
- congelar: +XP baixo ou conquista maldosa, log negativo;
- excitar peixe de amigo: ajuda defensiva e requisito de receita;
- acasalar: beneficia dono do peixe que iniciou o job; pode dar bonus/notificacao ao amigo cujo peixe foi usado.

### Feed social

Eventos:

- "Fulano alimentou seu Vitas."
- "Fulano curou seu Sapo Bebado."
- "Fulano roubou 120 moedas do seu tesouro."
- "Beltrano congelou seu Danubio."
- "Fulano usou seu O'Neal em uma reproducao."
- "Seu ovo de Vitas + O'Neal nasceu: Lamborghini!"
- "Voce completou a familia Hulk."

### Ranking

Métricas:

- level;
- valor do aquario;
- impulso de ouro;
- numero de especies;
- numero de super/brilhantes;
- trofeus;
- moedas roubadas;
- amigos ajudados.

## 18. Missoes, trofeus e eventos

### Missoes base

1. Comprar primeiro peixe.
2. Alimentar peixe.
3. Coletar primeira moeda.
4. Comprar decoracao.
5. Aumentar impulso para 105%.
6. Visitar amigo.
7. Roubar moedas.
8. Alimentar peixe de amigo.
9. Fazer primeiro acasalamento.
10. Chocar primeiro ovo.
11. Liberar peixe idoso na enseada/mar aberto.
12. Obter primeiro peixe raro.
13. Completar familia de 5.
14. Obter primeiro super peixe.

### Eventos sazonais

Fontes preservam peixes de Pascoa, como Peixe Coelho e Peixe Coelho Imitador, e linha de itens Paris Hilton. Para remake, eventos devem adicionar:

- especies temporarias;
- decoracoes com bonus especial;
- receitas limitadas;
- colecoes;
- rankings de evento;
- pacotes premium.

### Padrao de configuracao de eventos

Eventos devem ser criados por dados, sem exigir codigo novo para cada campanha. Um evento pode ativar qualquer combinacao destes blocos:

| Bloco | O que cria | Campos principais |
| --- | --- | --- |
| `eventFish` | peixes novos, temporarios ou permanentes | especie, raridade, comportamento, cores, tempo de ovo, producao, janela de disponibilidade |
| `eventDecorations` | decoracoes de loja, recompensa ou ranking | custo, impulso, enseada permitida, tamanho, sprite, periodo |
| `eventMissions` | missoes diarias/semanais/de cadeia | objetivo, contador, recompensa, requisito de level |
| `eventRecipes` | combinacoes temporarias | pais, estados exigidos, pesos de resultado, data de inicio/fim |
| `eventShopPacks` | pacotes premium ou de ouro | itens incluidos, limite de compra, preco |
| `eventCollections` | album/conjunto tematico | itens exigidos, premio final, badge/trofeu |
| `eventRanking` | disputa social | metrica, janela, premios por faixa |

Exemplo de evento:

```json
{
  "eventId": "pascoa_2010_inspirado",
  "name": "Pascoa no Recife",
  "startsAt": "2026-03-28T00:00:00Z",
  "endsAt": "2026-04-12T23:59:59Z",
  "eventFish": [
    {
      "speciesId": "peixe_coelho",
      "rarity": "event",
      "behaviorType": "swimmer",
      "eggHatchHours": 18,
      "unlockLevel": 5
    }
  ],
  "eventDecorations": [
    {
      "decorId": "ovo_de_coral",
      "price": { "currency": "gold", "amount": 4500 },
      "goldBoostPercent": 1.5
    }
  ],
  "eventMissions": [
    {
      "missionId": "alimentar_10_peixes",
      "goal": { "type": "feedFish", "count": 10 },
      "reward": { "xp": 80, "gold": 500 }
    }
  ]
}
```

## 19. Balanco recomendado

### Progressao de level

Fontes mostram jogadores em levels 10, 14, 17, 30, 35, 43. O jogo tinha progressao longa.

Formula:

```text
xpToNext(level) = floor(100 * level^1.45)
```

Fontes de XP:

- coletar moeda: 0.1 a 1 XP por lote;
- alimentar/medicar proprio peixe: 2 XP;
- alimentar/medicar amigo: 4 XP;
- dispersar efeito: 5 XP;
- acasalamento iniciado: 10 XP;
- ovo chocado: 15 a 100 XP por raridade;
- peixe brilhante: 35 XP a cada 3 h;
- completar trofeu: 500+ XP.

### Moedas

Inicio:

- jogador com 500 a 1000 moedas;
- 12 diamantes iniciais se quiser reproduzir relato antigo;
- 2 a 3 peixes iniciais;
- decoracao basica.

Preco inicial:

- peixes comuns: 250 a 300 moedas;
- decoracoes comuns: 3000+ moedas;
- raros: 3 a 29 diamantes;
- expansoes: 10000+ moedas.

### Retencao

- Ovos com tempo variavel criam retornos em janelas diferentes; ovos raros/brilhantes seguram expectativa por mais tempo.
- Fome/doenca criam retorno diario.
- Moedas expostas criam medo de roubo.
- Receitas com amigos criam rede.
- Super peixes e trofeus criam endgame.

## 20. Arquitetura tecnica

### Principio chave

O servidor deve ser autoritativo. Cliente anima; servidor calcula moedas, crescimento, doenca, acasalamentos e roubos. Isso evita manipular relogio/cheats.

### Tabelas principais

- `players`
- `player_currencies`
- `friendships`
- `coves`
- `fish_species`
- `fish_instances`
- `decor_catalog`
- `decor_instances` com `coveId`, `x`, `y`, `zIndex`, `scale`, `rotation` e estado `placed/inventory`
- `tool_inventory`
- `breeding_recipes`
- `breeding_jobs`
- `social_actions`
- `visit_logs`
- `trophies`
- `events`
- `purchases`

### Job de sincronizacao sob demanda

Ao carregar aquario:

1. calcular `elapsed = now - lastSyncedAt`;
2. atualizar fome/saude de cada peixe;
3. atualizar crescimento se nao congelado/doente/faminto extremo;
4. gerar moedas ate limite;
5. concluir breeding jobs vencidos;
6. marcar peixes maduros que passaram da idade limite como `idoso`;
7. aplicar XP de peixes brilhantes;
8. salvar snapshot.

### Pseudocodigo de atualizacao de peixe

```ts
function syncFish(fish, species, elapsedSec, modifiers) {
  fish.hunger = Math.max(0, fish.hunger - species.hungerDecayPerSec * elapsedSec);

  const frozen = fish.effects.includes("frozen");
  const sick = fish.health <= 0 || fish.effects.includes("sick");
  const starving = fish.hunger <= 0;
  const elderly = fish.stage === "elderly";

  if (!frozen && !sick && !starving && !elderly) {
    advanceGrowth(fish, elapsedSec);
  }

  if (!frozen && !sick && !elderly && fish.hunger >= 30) {
    const interval = species.baseCoinIntervalSec / (modifiers.goldImpulsePercent / 100);
    const produced = Math.floor((now - fish.lastCoinAt) / interval);
    fish.uncollectedCoins = Math.min(
      species.maxUncollectedCoins,
      fish.uncollectedCoins + produced * species.coinValue
    );
    fish.lastCoinAt += produced * interval;
  }

  rollIllness(fish, species, elapsedSec);
}
```

### Pseudocodigo de acasalamento

```ts
function startBreeding(playerFish, friendFish, options) {
  assert(canBreed(playerFish));
  assert(canBreed(friendFish));
  assert(friendshipAllows(playerFish.ownerId, friendFish.ownerId));

  const recipes = findMatchingRecipes(playerFish, friendFish, options);
  const resultTable = recipes.length
    ? mergeWeightedResults(recipes)
    : fallbackResults(playerFish, friendFish);

  const resultSpecies = weightedPick(resultTable);
  const hatchHours = getSpecies(resultSpecies.species).eggHatchHours;
  const isShinyEgg = isShinyOrSuper(resultSpecies.species, resultSpecies.colorVariant);

  return createBreedingJob({
    ownerId: playerFish.ownerId,
    friendId: friendFish.ownerId,
    parentA: playerFish.id,
    parentB: friendFish.id,
    hiddenResultSpeciesId: resultSpecies.species,
    hiddenColorVariantId: resultSpecies.colorVariant ?? "default",
    isShinyEgg,
    createdAt: now,
    hatchesAt: now + hours(hatchHours)
  });
}
```

### Anti-abuso

- Validar todo arraste/aplicacao no servidor.
- Cooldown de roubo por amigo.
- Limite diario de acasalamento com mesmo amigo.
- Limite de ferramentas ofensivas por visitante.
- Nao confiar em relogio do cliente.
- Log imutavel de compras premium.
- Auditoria para ganhos anormais de moedas/diamantes.

## 21. Arte e direcao visual

### Estilo

- Cartunesco, saturado, amigavel.
- Peixes arredondados com olhos grandes.
- Contorno suave e sombras simples.
- Fundo azul com bolhas e iluminacao de superficie.
- Objetos decorativos em perspectiva frontal/isometrica leve.
- UI azul/cinza com botoes arredondados e texto branco.

### Animacao

- Peixes nadam lateralmente, invertendo sprite no limite.
- Nadadeiras e caudas em 2 a 4 frames.
- Bolhas aleatorias.
- Moedas saltam do peixe e flutuam ate coleta.
- Brilhantes usam particulas/estrelas.
- Congelado pausa animacao.
- Excitado adiciona pulso/halo.

### Camadas

1. Fundo estatico.
2. Decoracoes de fundo.
3. Peixes atras.
4. Decoracoes medias.
5. Peixes frente.
6. Decoracoes de frente.
7. Moedas/efeitos.
8. UI.

## 22. Sprites/assets originais encontrados

Observacao legal: os links abaixo sao referencias publicas preservadas em blogs antigos. As imagens e sprites originais continuam sendo propriedade intelectual de seus titulares. Para um jogo publicavel, use esses materiais como referencia historica e redesenhe assets proprios.

### Screenshots de gameplay/interface

- Screenshot de gameplay com ruina dourada, bau, peixes, HUD e impulso de ouro:  
  https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeuLpqUyjzoPJrOhCB7r9duz_JPRsxeqPWH5lmU4V3BJm-8sNBnA3Mtqra1MUqUUKtUNmPWKCSNHQu5NiY53GdbupAKHOaRF1A67bZQrwh947Zcqzrvwcu27Vng78rklDQApJBKu1ukb4/s1600/segredosdomar.jpg
- Pagina Ratazana com screenshot incorporado e dicas de UI/ferramentas:  
  https://rata-zana.blogspot.com/2010/10/segredos-do-mar-orkut-app-dicas-truques.html
- Screenshot Ratazana com mais dicas:  
  https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8QGvZjt9ZGEjdmnsIHCENK0CNhPXBGcOKSZi8n2gUKfJPlA97LaUEF8a6Lgaz56rD8elA-_OKsy2ZGm30fPWeO9HxTPNCnpGLwu9yEavKLGFkHQPpZ5VZynwJ2oorj_d7z_RMjzxwCog/s400/mais+dicas+de+sgredos+do+mar+na+ratazana+games+orkut.jpg
- Pagina Colheita Sanches com screenshots de loja e tabela de novos peixes/objetos incorporados:  
  https://colheitasanches.blogspot.com/p/segredos-do-mar.html

### Loja de peixes / sprites em folhas parciais

- Loja com Lamborghini, Ribeiro Aborrecido e Patinho Esguio:  
  https://segredosdomar.wordpress.com/wp-content/uploads/2010/03/capture030.jpg
- Loja com Peixe Lua, Carangueijo Eremita, Vitas, Pequena Manga, Nilmo, Hulk, Danubio, Borboleta, Esguio Azul, Sapo Bebado:  
  https://segredosdomar.wordpress.com/wp-content/uploads/2010/03/segredos-do-mar-1.jpg
- Illiden/Llliden:  
  https://segredosdomar.wordpress.com/wp-content/uploads/2010/03/segredosdomar1.jpg
- Laranja:  
  https://segredosdomar.wordpress.com/wp-content/uploads/2010/03/segredosdomar2.jpg

### Decoracoes / objetos

- Objetos novos parte 1, com monte de areia, submarino, concha, coral, bau/rocha dourada e coral branco:  
  https://segredosdomar.wordpress.com/wp-content/uploads/2010/03/capture036.jpg
- Objetos novos parte 2, com coral vermelho, rocha, fundo, estrelas, bandeira pirata:  
  https://segredosdomar.wordpress.com/wp-content/uploads/2010/03/capture037.jpg
- Objetos novos, estrelas, ancora, coral, fundos e plantas:  
  https://segredosdomar.wordpress.com/wp-content/uploads/2010/03/novos-objetos-parte-1.jpg
- Objetos novos, pedra/monte verde e rocha marrom:  
  https://segredosdomar.wordpress.com/wp-content/uploads/2010/03/novos-objetos-parte-2.jpg

### Outros assets preservados

- Header do blog Segredos Do Mar, util como referencia visual da marca/comunidade:  
  https://segredosdomar.wordpress.com/wp-content/uploads/2010/02/cropped-kk1.jpg
- Imagem de jogos do Orkut / possivel montagem com Segredos do Mar:  
  https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwJd6HOgpkjLLUHa3dvjz-4yL_SZJKJ4PrAT0G1EUe5Ns3GFOergGKp7EO1N_qsiRoxUMraFq7wfUIpj8xetoJe9lvsMCzcp76hBqbeV59HNK4uhvn4ISXF6-JkItqYn5n-1odK0qYYNE/s930-r/GAMESDOORKUT.jpg

## 23. Backlog de implementacao

### MVP jogavel

1. Canvas de aquario com peixes nadando.
2. Sistema de moedas produzidas por peixes.
3. Coleta manual para bau.
4. Loja de peixes comuns.
5. Ciclo de vida com ovo, crescimento e estado idoso.
6. Fome e alimentacao.
7. Doenca e remedio.
8. Loja de decoracoes com impulso de ouro.
9. Sistema de amigos fake/local para visita.
10. Acasalamento com ovo imediato e tempo de nascimento por especie.

### Beta social

1. Amigos reais.
2. Visitas ao aquario de amigos.
3. Roubo de moedas.
4. Logs sociais.
5. Gotas de congelamento/excitacao.
6. Dispersao por gesto.
7. Expansao de enseadas.
8. Presentes.
9. Notificacoes sociais de cuidado/congelamento/reproducao.

### Conteudo avancado

1. 50+ especies.
2. Variantes coloridas.
3. Peixes brilhantes/super.
4. Trofeus por familia.
5. Eventos sazonais.
6. Ranking.
7. Loja premium.
8. Linhas especiais/licenciadas redesenhadas.

## 24. Criterios de aceite do remake

O remake "parece Segredos do Mar" quando:

- o jogador ve uma cena submarina cheia, colorida e lateral, com peixes nadando livremente;
- a sessao comeca com coleta, fome/doenca e moedas soltas;
- o indicador de impulso de ouro sobe ao decorar;
- o jogador visita amigos e tem vontade de roubar/cuidar;
- a reproducao exige peixe proprio + peixe de amigo, cria ovo imediatamente e mostra um timer variavel sem revelar a especie;
- receitas tem misterio, tentativa e variacao;
- existe uma lista longa de peixes, variantes e super peixes;
- o bau/tesouro e vulneravel a roubo de moedas, mas peixes nunca podem ser roubados;
- peixes idosos saem da economia e podem ser liberados com confirmacao;
- o jogo da motivos para voltar varias vezes ao dia.
