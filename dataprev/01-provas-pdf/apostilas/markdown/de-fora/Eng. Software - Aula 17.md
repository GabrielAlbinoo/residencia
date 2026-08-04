# Eng. Software - Aula 17

## Índice

1) Sistemas de Suporte à Decisão - Teoria
3

2) Sistemas de Suporte à Decisão - Resumo
13

3) Sistemas de Suporte à Decisão - Questões Comentadas - MULTIBANCAS
17

4) Sistemas de Suporte à Decisão - Lista de Questões - MULTIBANCAS
27

## S ISTEMAS DE

## S UPORTE À

## D ECISÃO

## Conceitos Básicos

### INCIDÊNCIA EM PROVA: BAIXA

### SISTEMAS DE SUPORTE À DECISÃO

Sistema de informação desenvolvido para auxiliar gestores e analistas no processo de tomada de decisão,
especialmente em situações complexas, semi-estruturadas ou não estruturadas. Ele integra dados provenientes
de diferentes fontes, modelos analíticos e ferramentas de interação que permitem explorar informações, avaliar
cenários e analisar alternativas. Diferente dos sistemas operacionais, que registram transações rotineiras, ele tem
foco analítico, oferecendo recursos como simulações, análises comparativas, consultas avançadas e visualizações
que ajudam a transformar dados em conhecimento útil para apoiar decisões estratégicas, táticas ou operacionais.
Tomar decisões nem sempre é fácil! Eu vou dar um exemplo: é terça-feira à noite e minha esposa avisa
que que está morrendo de fome. Quem nunca ficou horas vendo as opções de restaurante no iFood?
Quem nunca viu todos os cartazes de filmes da Netflix tentando escolher algum para assistir com a
namorada/namorado e acabou não assistindo nada? Pois é, quando se tem muitas opções, a escolha
acaba se tornando mais difícil.
Agora, se isso vale para escolhas simples, imagine para grandes decisões! A maioria das decisões que
tomamos ocorrem várias vezes durante nossa vida e não têm nenhuma repercussão mais grave. Assistir a
um filme chato não vai me fazer parar de ver filmes no futuro. Comer algo que eu não quero também não
me causará nenhum dano. No entanto, há algumas decisões que ocorrem basicamente uma ou, no
máximo, duas vezes na vida e geralmente podem causar grandes impactos em sua vida.
Um exemplo clássico é a escolha de carreira. Quando você tem apenas dezessete anos, você tem que
decidir um curso para fazer o vestibular (por vezes, isso valerá para o resto da vida). Quando eu fiz
vestibular, eu fiquei dias e dias pensando em qual curso escolher: Ciência da Computação ou Economia.
Eu poderia desistir no meio do curso e fazer um novo vestibular? Sim, mas – em muitos casos – isso pode
não ser viável.
Uma particularidade de todos esses exemplos é que eles trataram de decisões individuais! No entanto, o
que aconteceria se estivéssemos falando de uma organização – seja ela pública ou privada? Pois é,
decisões individuais afetam apenas o indivíduo, mas decisões organizacionais podem afetar centenas,
milhões ou até bilhões de pessoas.
Até 2018, o Estratégia Concursos não funcionava com o modelo de assinatura. Você tinha que comprar
apenas o curso que desejava e teria acesso apenas a ele. Vocês já imaginaram quanto os sócios-
fundadores do Estratégia Concursos devem ter pensado antes de decidirem migrar para um modelo de
negócio baseado em assinatura ilimitada? Pois é, esse é um tipo de decisão importantíssima para uma
organização que pode levá-la a outro patamar ou pode levá-la à ruína. Aliás, o mundo está repleto de
exemplos de como decisões erradas podem levar a prejuízos colossais. Vejam só...

-
Decisão:
Comprar um sistema operacional da Microsoft para seus computadores
pessoais.
-
Erro:
A IBM não previu que se tornaria refém da Microsoft.
-
Prejuízo:
US$ 75.000.000.000,00

-
Decisão:
Aquisição da concorrente Compaq
-
Erro:
A união das empresas não funcionou e os lucros permaneceram inalterados.
-
Prejuízo:
US$ 19.000.000.000,00

-
Decisão:
Investir em linhas internacionais, como a rota São Paulo a Frankfurt
(Alemanha).
-
Erro:
Superestimou a demanda dos usuários.
-
Prejuízo:
R$ 40.000.000,00
Para evitar prejuízos causados por decisões mal calculadas — que, convenhamos, não são nada raros no
mundo dos negócios — surgiram os chamados: Sistemas de Suporte à Decisão (SSD). A ideia por trás
deles é bem clara: ajudar os gestores a tomar decisões melhores, com base em dados e análises, sem
tirar deles o protagonismo do processo decisório.
Vejam bem: mesmo nas decisões mais simples do dia a dia, a gente já leva em conta alguns fatores, como
horários, dinheiro disponível ou até se está cansado demais para sair de casa. Agora, quando o assunto
é gestão organizacional, o jogo muda de nível. A quantidade de dados envolvidos e a complexidade dos
cenários exigem ferramentas mais parrudas — muitas vezes alimentadas por gigantescos bancos de dados
– como os famosos Data Warehouses.

Saiba mais:
O Data Warehouse (DW), o Business Intelligence (BI) e os Sistemas de Suporte à Decisão (SSD)
possuem uma relação complementar dentro da arquitetura de apoio à tomada de decisões.
O DW funciona como o repositório central de dados integrados, históricos e consolidados,
provenientes de diversas fontes operacionais, preparados para análise. Sobre essa base de
dados estruturada atuam as ferramentas de BI, que realizam consultas, análises, relatórios,
painéis e visualizações para transformar dados em informações úteis.
Já os SSD utilizam essas informações — muitas vezes geradas por ferramentas de BI e
armazenadas no DW — para apoiar gestores no processo decisório, permitindo avaliar cenários,
identificar tendências e embasar decisões estratégicas e táticas. O DW fornece os dados, o BI os
transforma em conhecimento analítico e o SSD utiliza esse conhecimento para apoiar decisões.
A simples existência de um DW ou de um banco de dados integrado não caracteriza, por si só,
um SSD. O DW atua principalmente como um repositório estruturado de dados históricos e
integrados, preparado para consultas e análises. Para que um sistema seja efetivamente
considerado um SSD, é necessário que existam modelos analíticos, métodos de análise ou
simulação capazes de transformar os dados em conhecimento útil para a tomada de decisão,
além de interfaces de interação com o usuário, como painéis, relatórios analíticos ou ferramentas
de exploração de dados, que permitam aos gestores avaliar cenários e apoiar decisões.
O DW fornece a base informacional, mas o SSD surge apenas quando essa base é combinada
com mecanismos analíticos e instrumentos que auxiliem diretamente o processo decisório.

Pensemos no lançamento do Apple Watch. Antes de o relógio chegar às prateleiras, há todo um esforço
para prever a demanda. E isso não se faz no chute! É preciso analisar um combo de variáveis: histórico de
vendas, perfil de consumo, renda da população, características específicas de cada mercado regional,
entre outros – tudo isso para definir quanto produzir, onde distribuir, e evitar tanto o prejuízo com
estoques encalhados quanto o fiasco de não atender à demanda.
E tem mais: os SSDs ajudam também a manter uma certa “disciplina” nas decisões, ou seja, garantem
consistência nos critérios aplicados. Um bom exemplo é o setor bancário: quando um cliente pede
crédito, o sistema analisa dados e aplica regras uniformes — o que significa que duas pessoas com perfis
parecidos devem receber propostas semelhantes. Isso reduz o peso da subjetividade humana e contribui
para uma maior justiça no processo.
Mas calma lá — por mais avançado que seja o sistema, ele não substitui o olhar humano. E isso é
fundamental entender. Porque nenhum dado, por mais completo que pareça, dá conta sozinho da
realidade das organizações. Dados podem estar defasados, enviesados, incompletos e, o mais
importante, não captam nuances como o clima interno da empresa, o humor dos clientes, as entrelinhas
da cultura organizacional ou aquelas mudanças de mercado que ainda nem apareceram nos gráficos.
É aí que entra o papel do gestor experiente, aquele que não só conhece os números, mas também
entende a história da empresa, os bastidores, os contextos. Essa leitura qualitativa é indispensável para
dar sentido aos dados. Afinal, quem tem vivência consegue perceber quando algo nos números não bate,
identificar padrões que escapam aos algoritmos, e, principalmente, interpretar o que realmente está
acontecendo por trás das planilhas.
Agora, unir essas duas abordagens — a fria precisão dos dados e o calor da intuição gerencial — é um dos
maiores desafios nas organizações. Analistas muitas vezes confiam demais nos modelos estatísticos.
Gestores, por outro lado, tendem a dar mais peso à experiência de campo. Isso cria um atrito natural: são
duas formas diferentes de enxergar o mesmo problema.
Além disso, modelos matemáticos não enxergam fatores políticos internos, não entendem limitações
humanas, não captam riscos que não podem ser quantificados e, às vezes, sugerem caminhos que soam
completamente desconectados da realidade do negócio. Soma-se a isso a dificuldade de traduzir jargões
técnicos para uma linguagem que o executivo entenda, a variabilidade na qualidade dos dados e até uma
certa resistência cultural a confiar demais em números — e o resultado é um cenário em que dados e
intuição nem sempre andam de mãos dadas.

Saiba mais:
Imagine que um gestor é como um médico responsável por um grande hospital. Todos os dias
ele precisa tomar decisões importantes: alocar equipes, priorizar atendimentos, decidir onde
investir, analisar gargalos e evitar crises. Para tomar essas decisões, ele não pode contar apenas
com seu instinto — ele precisa de informações, previsões e cenários. Mas essas informações vêm
de todos os lados: prontuários, relatórios, exames, movimentos do pronto-socorro, histórico de
atendimentos, metas, custos e indicadores de qualidade. Tudo isso é complexo demais para
analisar sozinho, principalmente sob pressão.
O SSD é como ter uma sala de diagnóstico avançado, equipada com monitores, algoritmos,
simulações e painéis que mostram exatamente o que está acontecendo no hospital e o que pode
acontecer a seguir. Ele reúne os dados dos setores, analisa tendências, simula cenários e
apresenta opções. Por exemplo: “Se você realocar médicos do setor A para o setor B, o tempo

de espera cai em 37%”, ou “Se a demanda continuar subindo, o estoque de materiais se esgota
em 3 dias”. O sistema não decide por você — assim como a sala de diagnóstico não opera o
paciente —, mas te dá clareza, previsibilidade e alternativas para tomar a melhor decisão possível.
Ao mesmo tempo, o médico continua sendo essencial: ele interpreta as simulações, considera
fatores humanos, avalia riscos não mensuráveis e escolhe o caminho final.

É importante mencionar também que, em sistemas de suporte à decisão, existe uma diferença entre
trabalhar com dados em tempo real e dados consolidados. A análise em tempo real permite acompanhar
eventos à medida que eles ocorrem, favorecendo respostas rápidas e decisões operacionais imediatas;
entretanto, esses dados podem estar incompletos, sujeitos a atrasos de atualização, inconsistências ou
ausência de processos de limpeza e integração, o que pode reduzir a precisão das análises.
Já os dados consolidados normalmente passam por processos de integração, validação, agregação e
tratamento de qualidade, típicos de ambientes analíticos como data warehouses, resultando em
informações mais estáveis e confiáveis para análises estratégicas. Assim, enquanto o tempo real privilegia
velocidade e atualidade, os dados consolidados tendem a oferecer maior consistência e precisão
analítica, sendo mais adequados para decisões de longo prazo.
No fim das contas, tomar decisões de alto nível exige justamente essa integração fina: usar os dados para
enxergar padrões e possibilidades, e recorrer à experiência humana para interpretar esses sinais dentro
do contexto real. É nessa combinação que mora o verdadeiro valor. Os dados apontam o caminho, mas
é o ser humano que decide se vale a pena segui-lo. A maturidade analítica de uma organização, portanto,
aparece quando ela consegue equilibrar essas duas forças — transformando números e vivência em
decisões mais sólidas, realistas e eficazes.

==5460==

## Tipos de Decisões

### INCIDÊNCIA EM PROVA: BAIXÍSSIMA

As decisões no contexto organizacional e de gestão podem ser classificadas com base em quão bem
definido é o processo de decisão. Essa classificação leva em conta a estrutura, a repetibilidade e a
previsibilidade dos problemas de decisão, resultando em três categorias principais: decisões
estruturadas, semi-estruturadas e não-estruturadas. Cada tipo de decisão apresenta desafios e
necessidades diferentes em termos de suporte à decisão.

### Decisões Estruturadas

-
Características: são aquelas em que os procedimentos a serem seguidos podem ser especificados
com antecedência. Essas decisões são rotineiras e repetitivas, e uma metodologia clara pode ser
aplicada para resolvê-las. Geralmente, envolvem situações em que as variáveis e os resultados são
conhecidos e previsíveis.
-
Suporte à Decisão: Sistemas de Informação de Gestão (SIG) e Sistemas de Processamento de
Transações (SPT) são frequentemente utilizados para apoiar decisões estruturadas, automatizando
processos e fornecendo relatórios regulares.
-
Exemplos: reabastecimento de estoque baseado em níveis de inventário, aprovação de crédito com
base em critérios predefinidos, cálculos de folha de pagamento.

### Decisões Semi

### -Estruturadas

-
Características: envolvem uma combinação de processos estruturados e julgamento humano.
Enquanto parte do problema de decisão pode ser claro, outras partes requerem a avaliação e
interpretação de dados e informações complexas. Nessas decisões, algumas etapas do processo
podem ser automatizadas, mas outras exigem insights e avaliações humanas.
-
Suporte à Decisão: Sistemas de Suporte à Decisão (SSD) são projetados para fornecer informações,
ferramentas analíticas e modelos de simulação que ajudam os gestores a avaliar opções e tomar
decisões informadas.
-
Exemplos: decisões de investimento em novos projetos, planejamento de recursos humanos,
desenvolvimento de novos produtos.

### Decisões Não Estruturadas

-
Características: são aquelas para as quais não existem procedimentos ou regras predefinidas que
possam guiar a tomada de decisão. Estas decisões são geralmente complexas e envolvem um alto
graude incerteza. A resolução de problemas não-estruturados depende em grande parte do
julgamento, da intuição e da experiência pessoal do tomador de decisão.
-
Suporte à Decisão: SSDs baseados em conhecimento e Sistemas de Informações Executivas (SIE)
podem fornecer suporte para decisões não-estruturadas, oferecendo acesso a informações
relevantes, análises de tendências e capacidades de simulação.
-
Exemplos: decisões estratégicas, como a escolha de entrar em um novo mercado, fusões e
aquisições, e formulação de estratégias de longo prazo.

### TIPO DE DECISÃO

### CARACTERÍSTICAS

### SUPORTE À DECISÃO

### EXEMPLOS

### DECISÕES

### ESTRUTURADAS

Possuem procedimentos
claramente definidos e podem

ser resolvidas por meio de
regras e métodos previamente

estabelecidos. São rotineiras,
repetitivas e envolvem variáveis
bem conhecidas, com resultados

relativamente previsíveis.

Sistemas de Informação de
Gestão (SIG) e Sistemas de

Processamento de
Transações (SPT), que
automatizam processos

operacionais e geram
relatórios regulares para

apoiar decisões

padronizadas.

Reabastecimento

automático de
estoque, aprovação
de crédito com base

em critérios
definidos, cálculo

de folha de
pagamento.

### DECISÕES SEMI-

### ESTRUTURADAS

Envolvem uma combinação de

procedimentos definidos e
julgamento humano. Parte do
problema pode ser tratada de

forma sistemática, enquanto

outras etapas exigem
interpretação, análise e avaliação

por parte do gestor.

Sistemas de Suporte à
Decisão (SSD), que oferecem

modelos analíticos,
ferramentas de simulação e
recursos de análise de dados

para apoiar a avaliação de

alternativas.

Decisão de
investimento em

novos projetos,
planejamento de
recursos humanos,
desenvolvimento de

novos produtos.

### DECISÕES NÃO

### ESTRUTURADAS

Não possuem procedimentos ou

regras previamente definidos.
São decisões complexas, com

alto grau de incerteza,
dependentes de experiência,

julgamento e intuição do

tomador de decisão.

Sistemas de Suporte à
Decisão baseados em
conhecimento e Sistemas de
Informações Executivas (SIE),

que fornecem análises
estratégicas, indicadores e

visão consolidada das

informações.

Entrada em novos
mercados, fusões e

aquisições,
definição de

estratégias
organizacionais de

longo prazo.

## Principais Classificações

### INCIDÊNCIA EM PROVA: BAIXÍSSIMA

### Quanto ao Relacionamento com Usuário

A classificação dos Sistemas de Suporte à Decisão (SSD) proposta por Hättenschwiller organiza esses
sistemas com base na forma como interagem com os processos de tomada de decisão dentro das
organizações. Essa classificação distingue os sistemas em três categorias principais: passivos, ativos e
cooperativos, refletindo o nível de interação e o tipo de suporte que eles fornecem aos decisores. Aqui
está uma explicação detalhada de cada tipo:

### TIPO DE SISTEMA

### DESCRIÇÃO

### SISTEMA

### PASSIVO

Sistemas de Suporte à Decisão passivos servem principalmente como repositórios de
informações e análises que os tomadores de decisão podem consultar para informar seu
processo de tomada de decisão. Embora estes sistemas possam ajudar a organizar e
analisar dados, eles não fazem recomendações específicas ou sugerem cursos de ação. A
característica chave de um SSD passivo é que ele deixa a decisão final inteiramente nas
mãos do usuário, atuando como uma ferramenta de suporte, mas sem participar ativamente
no processo de decisão.

### SISTEMA

### ATIVO

Sistemas de Suporte à Decisão ativos vão um passo além dos passivos ao não apenas
fornecer informações, mas também ao recomendar ações específicas baseadas nas análises
realizadas. Esses sistemas utilizam algoritmos e modelos para processar os dados
disponíveis e gerar soluções ou recomendações que os usuários podem seguir. Os SSD
ativos, portanto, têm um papel mais direto na tomada de decisão, propondo opções
baseadas em uma análise objetiva dos dados.

### SISTEMA

### COOPERATIVO

Representam um nível ainda mais avançado de interação, facilitando um diálogo
bidirecional entre o sistema e os usuários humanos. Eles são projetados para permitir que
os decisores trabalhem em conjunto com o sistema, combinando a intuição humana e o
julgamento com a capacidade de análise de dados do sistema. Os SSD cooperativos
adaptam suas recomendações com base no feedback do usuário, aprendendo com as
decisões passadas para melhorar as sugestões futuras. Este tipo de sistema é
particularmente útil em situações complexas de tomada de decisão, onde a colaboração
entre a capacidade analítica do sistema e a experiência humana é essencial.

### Quanto ao Modo de Assistência

Daniel J. Power é um autor influente na área de Sistemas de Suporte à Decisão e propôs uma classificação
que os organiza com base em suas principais características e funcionalidades. De acordo com o autor,
os SSDs podem ser divididos em cinco categorias principais: orientados a modelos, orientados a
comunicação, orientados a dados, orientados a conhecimento e orientados a documentos. Vamos
detalhar cada uma dessas categorias:

### TIPO DE

### SISTEMA

### DESCRIÇÃO

### ORIENTADO A

### MODELOS

Centram-se na utilização de modelos estatísticos, financeiros, de otimização ou de
simulação para realizar análises e previsões. São aplicáveis quando o processo de decisão
pode ser quantificado e modelado matematicamente. Exemplo: sistemas de otimização de
cadeia de suprimentos que usam modelos de programação linear para minimizar os custos
mantendo os níveis de serviço.

### ORIENTADO A

### COMUNICAÇÃO

Facilitam a comunicação e a colaboração entre membros de uma equipe ou grupo de
decisão. São projetados para ajudar grupos a trabalhar juntos, independentemente da
localização geográfica. Exemplo: software de videoconferência e ferramentas de trabalho
colaborativo online que suportam sessões de brainstorming ou tomada de decisão em
grupo.

### ORIENTADO A

### DADOS

Enfatizam o acesso e a manipulação de um conjunto de dados grande e complexo. São úteis
quando o processo de decisão depende fortemente da análise de dados históricos e atuais.
Exemplo: Sistemas de Informação Geográfica (SIG), que podem ajudar a determinar a
localização ideal para uma nova loja com base em dados demográficos e de tráfego.

### ORIENTADO A

### CONHECIMENTO

Apoiam processos de decisão que requerem especialização e conhecimento específico do
domínio, frequentemente capturado de especialistas humanos. Eles podem fornecer
recomendações, conselhos ou interpretações. Exemplo: sistemas de diagnóstico médico
que sugerem tratamentos com base em sintomas, história do paciente e literatura médica.

### ORIENTADO A

### DOCUMENTOS

Focam na gestão e recuperação de documentos eletrônicos ou outros formatos de
informação não estruturada. São úteis para decisões que dependem de informações
contidas em documentos de texto, e-mails, relatórios etc. Exemplo: sistemas de
gerenciamento de conhecimento que ajudam a localizar expertise dentro de uma
organização por meio de documentos e relatórios de projetos anteriores.

## Arquitetura de Componentes

### INCIDÊNCIA EM PROVA: BAIXÍSSIMA

Quando falamos na Arquitetura de Componentes, estamos nos referindo à forma como esses sistemas
são estruturados por dentro, isto é, como seus diferentes componentes se organizam e se conectam para,
juntos, darem suporte à tomada de decisões. Os SSDs não são um “bloco único” de tecnologia. Na
verdade, eles funcionam como um conjunto de subsistemas que atuam de forma integrada.
Cada parte tem uma função específica, mas todas colaboram com o mesmo objetivo: ajudar gestores a
tomar decisões mais bem informadas. Claro que essa composição pode variar bastante, dependendo do
tipo de aplicação ou do setor em que o sistema é usado. Ainda assim, de forma geral, a maioria é formada
por quatro subsistemas principais, que aparecem com bastante frequência nas implementações práticas.

### SUBSISTEMAS

### DESCRIÇÃO

### SUBSISTEMA DE

### GERENCIAMENTO

### DE DADOS

Composto pela base de dados, pelo catálogo de dados, pelo Sistema de Gerenciamento
de Banco de Dados (SGBD), entre outros, é responsável pela coleta, armazenamento,
recuperação e gerenciamento de dados. Permite que os usuários acessem e manipulem
grandes volumes de dados de forma eficiente, fornecendo a base de informações
necessária para a análise e tomada de decisão.

### SUBSISTEMA DE

### GERENCIAMENTO

### DE MODELOS

Contém modelos matemáticos e estatísticos que são usados para analisar os dados
armazenados no SGBD. Esse subsistema pode incluir modelos para análise preditiva,
simulações, otimização e outros métodos analíticos. Ele ajuda os tomadores de decisão a
entender as implicações de várias opções.

### SUBSISTEMA DE

### GERENCIAMENTO

DE

### CONHECIMENTO

Este subsistema integra conhecimento especializado e regras que orientam a análise e a
tomada de decisão. Pode incluir conhecimento de domínio específico, melhores práticas,
regulamentações e qualquer outro tipo de conhecimento estruturado que possa informar
e melhorar o processo de decisão.

### SUBSISTEMA DE

### GERENCIAMENTO

### DE DIÁLOGO

Também chamado de Interface de Usuário, trata-se do ponto de interação entre o usuário
e o Sistema de Suporte à Decisão. Seu design é crucial para a eficácia do sistema, pois deve
permitir que os usuários acessem dados, modelos e conhecimento de forma intuitiva, bem
como interpretar facilmente os resultados fornecidos pelo sistema.

### SUBSISTEMA DE

### GERENCIAMENTO

DE

### COMUNICAÇÃO

Embora nem sempre mencionado como um subsistema distinto, é essencial para sistemas
que requerem a integração de dados e recursos distribuídos ou a colaboração entre
diferentes usuários ou departamentos. Facilita a troca eficaz de informações e resultados
de análise dentro da organização.

Saiba mais:
No contexto do subsistema de gerenciamento de modelos, temos uma técnica chamada Análise
de Sensibilidade. Ela é utilizada em modelos analíticos para avaliar como alterações em
determinadas variáveis de entrada influenciam os resultados ou saídas de um modelo. Seu
objetivo é identificar quais fatores exercem maior impacto sobre o resultado final, permitindo
compreender a robustez do modelo e os riscos associados a diferentes cenários.
Na prática, consiste em modificar sistematicamente valores de variáveis — como custos, taxas,
demanda ou parâmetros operacionais — e observar como essas mudanças afetam indicadores ou
decisões derivadas do modelo. Dessa forma, a análise de sensibilidade ajuda gestores e analistas

a entender a dependência do resultado em relação às variáveis, apoiar a avaliação de cenários e
reduzir incertezas no processo de tomada de decisão.

Enfim, essa arquitetura é moldada justamente para cumprir seu principal propósito: ajudar na tomada de
decisões de forma mais eficaz. Para isso, ela combina — de maneira inteligente — dados relevantes,
modelos analíticos, conhecimento específico do domínio e, claro, um último componente: os usuários.
Eles que são pessoas envolvidas com o processo de tomada de decisão e atuantes nesse processo).
Agora, vale destacar uma coisa importante: não existe um modelo único de SSD.
A configuração de cada sistema pode variar bastante, dependendo de uma série de fatores. Por exemplo:
o tipo de decisão que ele precisa apoiar (estratégica, tática, operacional, etc), o ambiente em que será
utilizado, as tecnologias disponíveis no momento e, não menos relevante, as preferências e o perfil dos
usuários que vão interagir com a ferramenta no dia a dia. Logo, a arquitetura de um SSD precisa ser flexível
e adaptável — exatamente porque ela se ajusta ao contexto em que está inserida.

## R ESUMO

### SISTEMAS DE SUPORTE À DECISÃO

Sistema de informação desenvolvido para auxiliar gestores e analistas no processo de tomada de decisão,
especialmente em situações complexas, semi-estruturadas ou não estruturadas. Ele integra dados provenientes
de diferentes fontes, modelos analíticos e ferramentas de interação que permitem explorar informações, avaliar
cenários e analisar alternativas. Diferente dos sistemas operacionais, que registram transações rotineiras, ele tem
foco analítico, oferecendo recursos como simulações, análises comparativas, consultas avançadas e visualizações
que ajudam a transformar dados em conhecimento útil para apoiar decisões estratégicas, táticas ou operacionais.

### TIPO DE DECISÃO

### CARACTERÍSTICAS

### SUPORTE À DECISÃO

### EXEMPLOS

### DECISÕES

### ESTRUTURADAS

Possuem procedimentos
claramente definidos e podem

ser resolvidas por meio de
regras e métodos previamente

estabelecidos. São rotineiras,
repetitivas e envolvem variáveis
bem conhecidas, com resultados

relativamente previsíveis.

Sistemas de Informação de
Gestão (SIG) e Sistemas de

Processamento de
Transações (SPT), que
automatizam processos

operacionais e geram
relatórios regulares para

apoiar decisões

padronizadas.

Reabastecimento

automático de
estoque, aprovação
de crédito com base

em critérios
definidos, cálculo

de folha de
pagamento.

### DECISÕES SEMI-

### ESTRUTURADAS

Envolvem uma combinação de

procedimentos definidos e
julgamento humano. Parte do
problema pode ser tratada de

forma sistemática, enquanto

outras etapas exigem
interpretação, análise e avaliação

por parte do gestor.

Sistemas de Suporte à
Decisão (SSD), que oferecem

modelos analíticos,
ferramentas de simulação e
recursos de análise de dados

para apoiar a avaliação de

alternativas.

Decisão de
investimento em

novos projetos,
planejamento de
recursos humanos,
desenvolvimento de

novos produtos.

### DECISÕES NÃO

### ESTRUTURADAS

Não possuem procedimentos ou

regras previamente definidos.
São decisões complexas, com

alto grau de incerteza,
dependentes de experiência,

julgamento e intuição do

tomador de decisão.

Sistemas de Suporte à
Decisão baseados em
conhecimento e Sistemas de
Informações Executivas (SIE),

que fornecem análises
estratégicas, indicadores e

visão consolidada das

informações.

Entrada em novos
mercados, fusões e

aquisições,
definição de

estratégias
organizacionais de

longo prazo.

### TIPO DE SISTEMA

### DESCRIÇÃO

### SISTEMA

### PASSIVO

Sistemas de Suporte à Decisão passivos servem principalmente como repositórios de
informações e análises que os tomadores de decisão podem consultar para informar seu
processo de tomada de decisão. Embora estes sistemas possam ajudar a organizar e
analisar dados, eles não fazem recomendações específicas ou sugerem cursos de ação. A
característica chave de um SSD passivo é que ele deixa a decisão final inteiramente nas
mãos do usuário, atuando como uma ferramenta de suporte, mas sem participar ativamente
no processo de decisão.

### SISTEMA

### ATIVO

Sistemas de Suporte à Decisão ativos vão um passo além dos passivos ao não apenas
fornecer informações, mas também ao recomendar ações específicas baseadas nas análises
realizadas. Esses sistemas utilizam algoritmos e modelos para processar os dados
disponíveis e gerar soluções ou recomendações que os usuários podem seguir. Os SSD
ativos, portanto, têm um papel mais direto na tomada de decisão, propondo opções
baseadas em uma análise objetiva dos dados.

### SISTEMA

### COOPERATIVO

Representam um nível ainda mais avançado de interação, facilitando um diálogo
bidirecional entre o sistema e os usuários humanos. Eles são projetados para permitir que
os decisores trabalhem em conjunto com o sistema, combinando a intuição humana e o
julgamento com a capacidade de análise de dados do sistema. Os SSD cooperativos
adaptam suas recomendações com base no feedback do usuário, aprendendo com as
decisões passadas para melhorar as sugestões futuras. Este tipo de sistema é

==5460==

particularmente útil em situações complexas de tomada de decisão, onde a colaboração
entre a capacidade analítica do sistema e a experiência humana é essencial.

### TIPO DE

### SISTEMA

### DESCRIÇÃO

### ORIENTADO A

### MODELOS

Centram-se na utilização de modelos estatísticos, financeiros, de otimização ou de
simulação para realizar análises e previsões. São aplicáveis quando o processo de decisão
pode ser quantificado e modelado matematicamente. Exemplo: sistemas de otimização de
cadeia de suprimentos que usam modelos de programação linear para minimizar os custos
mantendo os níveis de serviço.

### ORIENTADO A

### COMUNICAÇÃO

Facilitam a comunicação e a colaboração entre membros de uma equipe ou grupo de
decisão. São projetados para ajudar grupos a trabalhar juntos, independentemente da
localização geográfica. Exemplo: software de videoconferência e ferramentas de trabalho
colaborativo online que suportam sessões de brainstorming ou tomada de decisão em
grupo.

### ORIENTADO A

### DADOS

Enfatizam o acesso e a manipulação de um conjunto de dados grande e complexo. São úteis
quando o processo de decisão depende fortemente da análise de dados históricos e atuais.
Exemplo: Sistemas de Informação Geográfica (SIG), que podem ajudar a determinar a
localização ideal para uma nova loja com base em dados demográficos e de tráfego.

### ORIENTADO A

### CONHECIMENTO

Apoiam processos de decisão que requerem especialização e conhecimento específico do
domínio, frequentemente capturado de especialistas humanos. Eles podem fornecer
recomendações, conselhos ou interpretações. Exemplo: sistemas de diagnóstico médico
que sugerem tratamentos com base em sintomas, história do paciente e literatura médica.

### ORIENTADO A

### DOCUMENTOS

Focam na gestão e recuperação de documentos eletrônicos ou outros formatos de
informação não estruturada. São úteis para decisões que dependem de informações
contidas em documentos de texto, e-mails, relatórios etc. Exemplo: sistemas de
gerenciamento de conhecimento que ajudam a localizar expertise dentro de uma
organização por meio de documentos e relatórios de projetos anteriores.

### SUBSISTEMAS

### DESCRIÇÃO

### SUBSISTEMA DE

### GERENCIAMENTO

### DE DADOS

Composto pela base de dados, pelo catálogo de dados, pelo Sistema de Gerenciamento
de Banco de Dados (SGBD), entre outros, é responsável pela coleta, armazenamento,
recuperação e gerenciamento de dados. Permite que os usuários acessem e manipulem
grandes volumes de dados de forma eficiente, fornecendo a base de informações
necessária para a análise e tomada de decisão.

### SUBSISTEMA DE

### GERENCIAMENTO

### DE MODELOS

Contém modelos matemáticos e estatísticos que são usados para analisar os dados
armazenados no SGBD. Esse subsistema pode incluir modelos para análise preditiva,
simulações, otimização e outros métodos analíticos. Ele ajuda os tomadores de decisão a
entender as implicações de várias opções.

### SUBSISTEMA DE

### GERENCIAMENTO

DE

### CONHECIMENTO

Este subsistema integra conhecimento especializado e regras que orientam a análise e a
tomada de decisão. Pode incluir conhecimento de domínio específico, melhores práticas,
regulamentações e qualquer outro tipo de conhecimento estruturado que possa informar
e melhorar o processo de decisão.

### SUBSISTEMA DE

### GERENCIAMENTO

### DE DIÁLOGO

Também chamado de Interface de Usuário, trata-se do ponto de interação entre o usuário
e o Sistema de Suporte à Decisão. Seu design é crucial para a eficácia do sistema, pois deve
permitir que os usuários acessem dados, modelos e conhecimento de forma intuitiva, bem
como interpretar facilmente os resultados fornecidos pelo sistema.

### SUBSISTEMA DE

### GERENCIAMENTO

DE

### COMUNICAÇÃO

Embora nem sempre mencionado como um subsistema distinto, é essencial para sistemas
que requerem a integração de dados e recursos distribuídos ou a colaboração entre
diferentes usuários ou departamentos. Facilita a troca eficaz de informações e resultados
de análise dentro da organização.

## Q UESTÕES COMENTADAS

1. (ESMAL / MPE PI - 2025) Em uma organização, diferentes tipos de sistemas de informação são
utilizados conforme o nível hierárquico e a finalidade. Um Sistema de Apoio à Decisão (SAD), por
exemplo:

a) É voltado à automação de tarefas operacionais e de rotina.
b) Tem como foco principal o processamento de transações financeiras e fiscais.
c) Fornece suporte à gestão estratégica por meio de simulações, análises e modelagens para decisões

complexas.
d) Armazena apenas dados históricos de transações internas.
e) Opera de forma independente dos dados organizacionais e não permite ajustes parametrizados.
Comentários:
(a) Errado. Automação de tarefas operacionais e rotineiras é típica de sistemas operacionais/TPs, não de
SAD, que apoia decisões.
(b) Errado. Processamento de transações financeiras e fiscais é foco de Sistemas de Processamento de
Transações, não de SAD.
(c) Correto. O SAD apoia decisões complexas com simulações, análises e modelagens, ajudando a gestão
(inclusive estratégica) a escolher cenários.
(d) Errado. SAD não se limita a “apenas” dados históricos; pode combinar dados atuais, internos/externos e
ferramentas analíticas.
(e) Errado. SAD depende de dados organizacionais e costuma permitir parametrizações/ajustes para testar
alternativas e cenários.

Gabarito: Letra C

2. (CEBRASPE / FUB - 2025) Julgue o item a seguir, a respeito da gestão da informação de
produção.

Um sistema de apoio à decisão tem como origem o dado, sendo este transformado em informação,
elemento-base intermediário.
Comentários:
Em sistemas de apoio à decisão, o processo parte de dados brutos, que são tratados e organizados para
virar informação. Essa informação funciona como etapa intermediária e base para análises e escolhas
gerenciais.

Gabarito: Correto

3. (CEBRASPE / FUNPRESP-EXE - 2025) Julgue o próximo item, relativo a data analytics e
ferramentas de análise de dados.

A tomada de decisão passou a ser mais dinâmica nos atuais mercados, devido, entre outros aspectos,
ao volume disponível de dados e aos cenários possíveis.
Comentários:
Com mais dados (volume/variedade/velocidade) e mais combinações de cenários, análises e simulações
são feitas com maior frequência, encurtando ciclos de decisão e tornando a tomada de decisão mais
dinâmica nos mercados atuais.

Gabarito: Correto

4. (CEBRASPE / FUNPRESP-EXE - 2025) Julgue o próximo item, relativo a data analytics e
ferramentas de análise de dados.

A camada qualitativa na tomada de decisão representa um desafio para a gestão, no que tange à
resolutividade organizacional.
Comentários:
A camada qualitativa envolve julgamentos, contexto e fatores humanos difíceis de mensurar e padronizar, o
que desafia a gestão para transformar análises em ações efetivas e aumentar a resolutividade
organizacional.

Gabarito: Correto

5. (QUADRIX / CFO - 2025) Business inteligence (BI) e analytics são ferramentas que estão ajudando
as empresas a entenderem melhor a dinâmica de seus próprios negócios e estão cada vez mais

presentes nas preocupações dos responsáveis pela infraestrutura de TI. Com base nessa
informação, julgue o item a seguir.

Análises em tempo real sempre fornecem os insights mais precisos para a tomada de decisão.
Comentários:
Análises em tempo real priorizam velocidade e podem usar dados incompletos/ruidosos; em muitos casos,
análises históricas e consolidadas geram maior precisão. “Sempre” torna a afirmação absoluta e
indefensável.

Gabarito: Errado

6. (CEBRASPE / CODEVASF - 2024) Julgue o próximo item, relativo a conceitos e noções de modelo
CRISP-DM, sistemas de suporte a decisão, gestão de conteúdo e aplicações de data warehouse
com OLAP.

Os sistemas de apoio à decisão (DSS) combinam dados e modelos analíticos sofisticados e interface
amigável, e estão sob controle do usuário.
Comentários:
DSS integram dados e modelos analíticos para apoiar decisões, com interface voltada ao usuário. Em geral,
são ferramentas interativas, nas quais o usuário controla consultas, simulações e análises conforme sua
necessidade.

Gabarito: Correto

7. (CESGRANRIO / CNU - 2024) O gerente de produção de uma grande indústria automobilística
precisa avaliar o impacto de diferentes cenários de produção em resposta a flutuações na
demanda do mercado. Para isso, ele utiliza um sistema que permite a simulação de diversos
cenários, incorporando variáveis como custo de matérias-primas, capacidade de mão de obra e
tempo de produção. Esse sistema facilita a visualização de resultados potenciais através de
gráficos e relatórios detalhados.

O tipo de sistema projetado especificamente para esse fim é o

a) Sistema de Planejamento de Recursos Empresariais (ERP)
b) Sistema de Processamento de Transações (SPT)
c) Sistema de Informações Gerenciais (SIG)
d) Sistema de Informações Executivas (SIE)
e) Sistema de Apoio à Decisão (SAD)

==5460==

Comentários:
(a) Errado. ERP integra e automatiza processos (finanças, compras, produção), mas não é focado em simular
cenários e comparar impactos com variáveis e projeções.
(b) Errado. SPT/SPT registra e processa transações rotineiras (pedidos, pagamentos, estoque), não realiza
análises “e se” com gráficos e relatórios preditivos.
(c) Errado. SIG consolida dados e gera relatórios gerenciais para acompanhamento, porém não é projetado
especificamente para simulação de cenários e avaliação de alternativas.
(d) Errado. SIE apoia a alta direção com painéis e indicadores resumidos; pode exibir gráficos, mas não tem
como foco central a modelagem e simulação detalhada de cenários.
(e) Correto. SAD é voltado à análise e simulação de cenários (“what-if”), incorporando variáveis (custos,
capacidade, tempo) e apresentando resultados em relatórios e gráficos para apoiar decisões.

Gabarito: Letra E

8. (IGEDUC / TJ PE - 2024) Julgue o item subsequente.

O Sistema de apoio à decisão (SAD) consolida informações de diversos bancos de dados internos e
externos, permitindo a análise de questões e a tomada de decisões.
Comentários:
O SAD integra e consolida dados de múltiplas fontes (internas e externas) para apoiar análises, simulações
e relatórios, fornecendo subsídios à avaliação de alternativas e à tomada de decisão.

Gabarito: Correto

9. (IGEDUC / TJ PE - 2024) Julgue o item subsequente.

Um DSS (Sistema de Suporte à Decisão) tem a mesma função que Business Inteligence.
Comentários:
DSS apoia decisões específicas (muitas vezes táticas/operacionais) com modelos e simulações. Business
Intelligence foca em consolidar/analisar dados e gerar relatórios/indicadores. São complementares, não a
mesma função.

Gabarito: Errado

10. (IGEDUC / Prefeitura de Pombos - 2023) Julgue o item a seguir.

A empresa responsável por um empreendimento imobiliário implantou um sistema de apoio à decisão
baseado em decisões não estruturadas. Esse sistema deve tratar de problemas não recorrentes ou que
acontecem com pouca frequência.
Comentários:
Decisões não estruturadas envolvem situações novas, complexas e sem procedimento padrão; por isso, o
SAD deve apoiar problemas não rotineiros, não recorrentes ou de baixa frequência, exigindo análise e
julgamento gerencial.

Gabarito: Correto

11. (CEBRASPE / DATAPREV - 2023) Julgue o item a seguir, a respeito dos sistemas de suporte à
decisão e gestão de conteúdo.

Sistemas de apoio à decisão complementam os recursos intelectuais dos indivíduos com as
capacidades do computador para melhorar a qualidade das decisões.
Comentários:
Sistemas de apoio à decisão (DSS) combinam julgamento humano e processamento computacional (dados,
modelos e simulações) para ampliar a capacidade analítica e, assim, elevar a qualidade das decisões.

Gabarito: Correto

12. (CEBRASPE / DATAPREV - 2023) Julgue o item a seguir, a respeito dos sistemas de suporte à
decisão e gestão de conteúdo.

Um sistema de apoio à decisão tem como características a manipulação de limitado volume de dados,
o processamento de dados de fontes diferentes e orientação textual e gráfica.
Comentários:
SAD costuma lidar com grande volume de dados (muitas vezes históricos), integrando múltiplas fontes. A
orientação pode ser por relatórios, gráficos e modelos analíticos; “limitado volume de dados” não é
característica típica.

Gabarito: Errado

13. (CEBRASPE / DATAPREV - 2023) Julgue o item a seguir, a respeito dos sistemas de suporte à
decisão e gestão de conteúdo.

Soluções de sistemas de suporte à decisão baseados em modelos de previsão auxiliam a determinar as
consequências ao se alterar alguma decisão.
Comentários:
Modelos de previsão estimam cenários e resultados prováveis, mas não determinam, de forma direta e
certa, as consequências de alterar uma decisão; eles apenas apoiam a análise com projeções e simulações.

Gabarito: Errado

14. (FURB / SAMAE JS - 2023) Muitos tipos de sistemas são utilizados nas organizações visando o
atingimento de objetivos. Assinale a alternativa correspondente ao tipo de sistema de
informação caracterizado por utilizar softwares que apoiam as atividades da operação,
atividades táticas e estratégicas com uma gama de dados que, quando bem utilizados, favorecem
a gestão:

a) Sistema alternativo de dados.
b) Sistema ampliado.
c) Sistema de apoio à decisão.
d) Sistema de análise funcional.
e) Sistema de condução executiva.
Comentários:
(a) Errado. “Sistema alternativo de dados” não é uma classificação consagrada de SI voltada a apoiar níveis
operacional, tático e estratégico com uso gerencial de dados.
(b) Errado. “Sistema ampliado” é termo genérico e não identifica, de forma típica, um SI voltado ao suporte
gerencial e à tomada de decisão.
(c) Correto. Sistema de apoio à decisão (SAD) usa softwares e dados para apoiar decisões, integrando
informações úteis à gestão nos níveis tático e estratégico (e podendo apoiar a operação).
(d) Errado. “Sistema de análise funcional” não corresponde, na tipologia clássica, ao sistema que apoia
decisões gerenciais com ampla base de dados.
(e) Errado. “Sistema de condução executiva” remete a apoio ao nível executivo, mas o enunciado descreve
o suporte decisório baseado em dados típico do SAD.

Gabarito: Letra C

15. (CEBRASPE / PGE RJ - 2022) Julgue o próximo item, a respeito de business intelligence (BI).

Situação hipotética: Um analista concentrou em um único local o armazenamento de dados de fontes
diferentes, com o objetivo de eliminar os silos de informação da organização, eliminando as dezenas
de fontes de informações estruturadas dispersas e armazenando-as em formato não estruturado em um
único repositório. Assertiva: Essa situação pode ser considerada um exemplo de sistema de suporte a
decisão, ainda que não se conheçam as informações do repositório.
Comentários:
Centralizar dados de várias fontes em um repositório (mesmo para reduzir silos) descreve
integração/armazenamento de dados. Para ser suporte à decisão, é preciso capacidade de análise e uso de
informações; “não se conhecem as informações” impede essa caracterização.

Gabarito: Errado

16. (CEBRASPE / PETROBRAS - 2022) Julgue o item a seguir, relativo à administração de sistemas de
informação.

Um sistema de apoio à decisão (SAD) dá suporte a decisões estruturadas, sendo seu desenvolvimento
facilitado por basear-se em processos de tomada de decisão estáveis e repetitivos.
Comentários:
SAD apoia sobretudo decisões semiestruturadas ou não estruturadas, com cenários e análises. Decisões
estruturadas e repetitivas são típicas de sistemas transacionais/rotineiros, não de SAD.

Gabarito: Errado

17. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

As aplicações do SSD são encontradas apenas na área de comércio eletrônico.
Comentários:
SSD apoia decisões em diversos contextos (finanças, saúde, indústria, governo etc.), não se restringindo ao
comércio eletrônico; este é apenas um dos possíveis domínios de aplicação.

Gabarito: Errado

18. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

Os bancos de dados não podem ser considerados como componentes de um SSD, uma vez que ele é
a própria base de conhecimento para tal sistema.
Comentários:
Em um SSD, bancos de dados são componentes essenciais (base de dados) que alimentam análises e
relatórios. A base de conhecimento é apenas um dos elementos do sistema, não substitui nem exclui o uso
de bancos de dados.

Gabarito: Errado

19. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

O sistema de suporte à decisão é uma classe dos sistemas de informação que combina modelos e
dados para solucionar problemas semiestruturados, sem qualquer participação do usuário, já que
todos os seus processos são automáticos.
Comentários:
O SSD apoia decisões semiestruturadas combinando dados e modelos, mas pressupõe interação do
usuário (parâmetros, simulações e análises). Não é totalmente automático nem dispensa participação
humana no processo decisório.

Gabarito: Errado

20. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

A principal desvantagem do SSD é que ele não é interativo.
Comentários:
SSD é, por natureza, interativo: permite ao usuário consultar dados, testar cenários e ajustar parâmetros
para apoiar decisões. Logo, a falta de interatividade não é sua principal desvantagem.

Gabarito: Errado

21. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

A análise de sensibilidade, estudo do impacto que as mudanças em uma ou mais partes de um modelo
têm em outras partes ou no resultado, é extremamente valiosa no SSD.
Comentários:
A análise de sensibilidade avalia como variações em entradas/parâmetros afetam saídas do modelo. Em
SSD, isso apoia simulações “e se”, identifica variáveis críticas e melhora a qualidade da decisão ao medir
impactos e riscos.

Gabarito: Correto

22. (UFMT / COREN MT - 2019) O Sistema de Apoio à Decisão (SAD) é o sistema de informação
gerencial que oferece suporte tecnológico para a tomada de decisão, conta com o auxílio de
hardwares e softwares para as análises. Que funções o SAD possui?

a) Criar política de gerenciamento de dados; Planejar; Implementar planos de monitoramento; Avaliar

e melhorar continuamente os processos e produtos.
b) Armazenar e manipular um grande volume de dados; Executar simulações, criar gráficos e fazer

análises estatísticas voltadas à tomada de decisão.
c) Armazenar dados estatísticos; Interpretar os dados históricos das vendas; Dar suporte operacional

na execução de tarefas.
d) Observar a realidade empírica; Codificar; Transmitir informação; Processar informações; Armazenar.
Comentários:
(a) Errado. Descreve funções de gestão/qualidade (planejar, implementar, avaliar e melhorar processos),
não as funções típicas de um SAD voltado a apoiar decisões com análises.
(b) Correto. O SAD apoia a tomada de decisão ao armazenar/manipular grandes volumes de dados e
permitir simulações, gráficos e análises estatísticas para comparar cenários.
(c) Errado. Foca em histórico de vendas e suporte operacional de tarefas, mais associado a rotinas
operacionais/relatórios específicos do que a análises e simulações para decisão.

(d) Errado. Lista etapas genéricas do tratamento da informação (codificar, transmitir, processar, armazenar),
sem caracterizar o suporte analítico e de simulação próprio do SAD.

Gabarito: Letra B

23. (CEBRASPE / ANTT - 2013) Acerca de business intelligence, julgue o item seguinte.

Um sistema de suporte à decisão possui, tipicamente, os seguintes subsistemas: gerenciamento de
dados, gerenciamento de modelos e gerenciamento de diálogo.
Comentários:
Em DSS, é comum a arquitetura em três partes: gerenciamento de dados (bases/ETL), gerenciamento de
modelos (métodos analíticos/simulações) e gerenciamento de diálogo (interface e interação com o
usuário).

Gabarito: Correto

## L ISTA DE

## Q UESTÕES

1. (ESMAL / MPE PI - 2025) Em uma organização, diferentes tipos de sistemas de informação são
utilizados conforme o nível hierárquico e a finalidade. Um Sistema de Apoio à Decisão (SAD), por
exemplo:

a) É voltado à automação de tarefas operacionais e de rotina.
b) Tem como foco principal o processamento de transações financeiras e fiscais.
c) Fornece suporte à gestão estratégica por meio de simulações, análises e modelagens para decisões

complexas.
d) Armazena apenas dados históricos de transações internas.
e) Opera de forma independente dos dados organizacionais e não permite ajustes parametrizados.

2. (CEBRASPE / FUB - 2025) Julgue o item a seguir, a respeito da gestão da informação de
produção.

Um sistema de apoio à decisão tem como origem o dado, sendo este transformado em informação,
elemento-base intermediário.

3. (CEBRASPE / FUNPRESP-EXE - 2025) Julgue o próximo item, relativo a data analytics e
ferramentas de análise de dados.

A tomada de decisão passou a ser mais dinâmica nos atuais mercados, devido, entre outros aspectos,
ao volume disponível de dados e aos cenários possíveis.

4. (CEBRASPE / FUNPRESP-EXE - 2025) Julgue o próximo item, relativo a data analytics e
ferramentas de análise de dados.

A camada qualitativa na tomada de decisão representa um desafio para a gestão, no que tange à
resolutividade organizacional.

5. (QUADRIX / CFO - 2025) Business inteligence (BI) e analytics são ferramentas que estão ajudando
as empresas a entenderem melhor a dinâmica de seus próprios negócios e estão cada vez mais
presentes nas preocupações dos responsáveis pela infraestrutura de TI. Com base nessa
informação, julgue o item a seguir.

Análises em tempo real sempre fornecem os insights mais precisos para a tomada de decisão.

6. (CEBRASPE / CODEVASF - 2024) Julgue o próximo item, relativo a conceitos e noções de modelo
CRISP-DM, sistemas de suporte a decisão, gestão de conteúdo e aplicações de data warehouse
com OLAP.

Os sistemas de apoio à decisão (DSS) combinam dados e modelos analíticos sofisticados e interface
amigável, e estão sob controle do usuário.

7. (CESGRANRIO / CNU - 2024) O gerente de produção de uma grande indústria automobilística
precisa avaliar o impacto de diferentes cenários de produção em resposta a flutuações na
demanda do mercado. Para isso, ele utiliza um sistema que permite a simulação de diversos
cenários, incorporando variáveis como custo de matérias-primas, capacidade de mão de obra e
tempo de produção. Esse sistema facilita a visualização de resultados potenciais através de
gráficos e relatórios detalhados.

O tipo de sistema projetado especificamente para esse fim é o

a) Sistema de Planejamento de Recursos Empresariais (ERP)
b) Sistema de Processamento de Transações (SPT)
c) Sistema de Informações Gerenciais (SIG)
d) Sistema de Informações Executivas (SIE)
e) Sistema de Apoio à Decisão (SAD)

8. (IGEDUC / TJ PE - 2024) Julgue o item subsequente.

O Sistema de apoio à decisão (SAD) consolida informações de diversos bancos de dados internos e
externos, permitindo a análise de questões e a tomada de decisões.

9. (IGEDUC / TJ PE - 2024) Julgue o item subsequente.

Um DSS (Sistema de Suporte à Decisão) tem a mesma função que Business Inteligence.

10. (IGEDUC / Prefeitura de Pombos - 2023) Julgue o item a seguir.

A empresa responsável por um empreendimento imobiliário implantou um sistema de apoio à decisão
baseado em decisões não estruturadas. Esse sistema deve tratar de problemas não recorrentes ou que
acontecem com pouca frequência.

11. (CEBRASPE / DATAPREV - 2023) Julgue o item a seguir, a respeito dos sistemas de suporte à
decisão e gestão de conteúdo.

==5460==

Sistemas de apoio à decisão complementam os recursos intelectuais dos indivíduos com as
capacidades do computador para melhorar a qualidade das decisões.

12. (CEBRASPE / DATAPREV - 2023) Julgue o item a seguir, a respeito dos sistemas de suporte à
decisão e gestão de conteúdo.

Um sistema de apoio à decisão tem como características a manipulação de limitado volume de dados,
o processamento de dados de fontes diferentes e orientação textual e gráfica.

13. (CEBRASPE / DATAPREV - 2023) Julgue o item a seguir, a respeito dos sistemas de suporte à
decisão e gestão de conteúdo.

Soluções de sistemas de suporte à decisão baseados em modelos de previsão auxiliam a determinar as
consequências ao se alterar alguma decisão.

14. (FURB / SAMAE JS - 2023) Muitos tipos de sistemas são utilizados nas organizações visando o
atingimento de objetivos. Assinale a alternativa correspondente ao tipo de sistema de
informação caracterizado por utilizar softwares que apoiam as atividades da operação,
atividades táticas e estratégicas com uma gama de dados que, quando bem utilizados, favorecem
a gestão:

a) Sistema alternativo de dados.
b) Sistema ampliado.
c) Sistema de apoio à decisão.
d) Sistema de análise funcional.
e) Sistema de condução executiva.

15. (CEBRASPE / PGE RJ - 2022) Julgue o próximo item, a respeito de business intelligence (BI).

Situação hipotética: Um analista concentrou em um único local o armazenamento de dados de fontes
diferentes, com o objetivo de eliminar os silos de informação da organização, eliminando as dezenas
de fontes de informações estruturadas dispersas e armazenando-as em formato não estruturado em um
único repositório. Assertiva: Essa situação pode ser considerada um exemplo de sistema de suporte a
decisão, ainda que não se conheçam as informações do repositório.

16. (CEBRASPE / PETROBRAS - 2022) Julgue o item a seguir, relativo à administração de sistemas de
informação.

Um sistema de apoio à decisão (SAD) dá suporte a decisões estruturadas, sendo seu desenvolvimento
facilitado por basear-se em processos de tomada de decisão estáveis e repetitivos.

17. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

As aplicações do SSD são encontradas apenas na área de comércio eletrônico.

18. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

Os bancos de dados não podem ser considerados como componentes de um SSD, uma vez que ele é
a própria base de conhecimento para tal sistema.

19. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

O sistema de suporte à decisão é uma classe dos sistemas de informação que combina modelos e
dados para solucionar problemas semiestruturados, sem qualquer participação do usuário, já que
todos os seus processos são automáticos.

20. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

A principal desvantagem do SSD é que ele não é interativo.

21. (QUADRIX / CRECI 14 - 2021) Acerca do sistema de suporte à decisão (SSD), julgue o item a
seguir.

A análise de sensibilidade, estudo do impacto que as mudanças em uma ou mais partes de um modelo
têm em outras partes ou no resultado, é extremamente valiosa no SSD.

22. (UFMT / COREN MT - 2019) O Sistema de Apoio à Decisão (SAD) é o sistema de informação
gerencial que oferece suporte tecnológico para a tomada de decisão, conta com o auxílio de
hardwares e softwares para as análises. Que funções o SAD possui?

a) Criar política de gerenciamento de dados; Planejar; Implementar planos de monitoramento; Avaliar

e melhorar continuamente os processos e produtos.
b) Armazenar e manipular um grande volume de dados; Executar simulações, criar gráficos e fazer

análises estatísticas voltadas à tomada de decisão.
c) Armazenar dados estatísticos; Interpretar os dados históricos das vendas; Dar suporte operacional

na execução de tarefas.

d) Observar a realidade empírica; Codificar; Transmitir informação; Processar informações; Armazenar.

23. (CEBRASPE / ANTT - 2013) Acerca de business intelligence, julgue o item seguinte.

Um sistema de suporte à decisão possui, tipicamente, os seguintes subsistemas: gerenciamento de
dados, gerenciamento de modelos e gerenciamento de diálogo.

## G ABARITO

1.
LETRA C
2.
CORRETO
3.
CORRETO
4.
CORRETO
5.
ERRADO
6.
CORRETO
7.
LETRA E
8.
CORRETO
9.
ERRADO
10.
CORRETO
11.
CORRETO
12.
ERRADO
13.
ERRADO
14.
LETRA C
15.
ERRADO
16.
ERRADO
17.
ERRADO
18.
ERRADO
19.
ERRADO
20.
ERRADO
21.
CORRETO
22.
LETRA B
23.
CORRETO
