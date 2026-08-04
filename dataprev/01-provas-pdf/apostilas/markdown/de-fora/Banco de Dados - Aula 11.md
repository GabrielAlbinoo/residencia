# Banco de Dados - Aula 11

## Índice

1) Apresentação - Prof. Lucas Ianni
3

2) 0.0 Fundamentos de Inteligência Artificial - Teoria
4

3) 0.0 Fundamentos de Inteligência Artificial - Resumo
45

4) 0.0 Fundamentos de Inteligência Artificial - Mapa Mental
50

5) 0.0 Fundamentos de Inteligência Artificial - Questões Comentadas
53

6) 0.0 Fundamentos de Inteligência Artificial - Lista de Questões
61

7) 0.1. Filosofia e Ética da Inteligência Artificial - Teoria
65

8) 0.1 Filosofia e Ética da Inteligência Artificial - Resumo
89

9) 0.1 Filosofia e Ética da Inteligência Artificial - Questões Comentadas
93

10) 0.1 Filosofia e Ética da Inteligência Artificial - Lista de Questões
103

## Índice

Inteligência Artificial para Concursos
5
Fundamentos de Inteligência Artificial
5
Raízes da Inteligência Artificial
5
Conceito de Inteligência Artificial
6
IA como “pensar com racionalidade”
9
IA Simbólica (ou Lógica)
9
Conhecimento
9
Linguagens de Representação do Conhecimento
11
Lógica Proposicional
11
Lógica de Primeira Ordem
13
Lógica Nebulosa
16
Ontologia
18
Sistemas Especialistas
20
Inverno da IA
23
IA Sub-simbólica
24
Tempos Modernos
25
IA como “agir com racionalidade”
27
Agente, Agente Racional e Agente Inteligente
27
Sistemas multiagentes
30
Arquiteturas dos sistemas multiagentes
32
Estruturas dos sistemas multiagentes
34
Tipos de Agentes
36

## INTELIGÊNCIA ARTIFICIAL PARA CONCURSOS

## Fundamentos de Inteligência Artificial

### Raízes da Inteligência Artificial

“We propose that a 2 month, 10 man study of artificial intelligence be carried out during the

summer of 1956 at Dartmouth College [...].” John McCarthy

Seria difícil datar um marco histórico iniciando a Inteligência Artificial - IA - como campo de
estudos se considerarmos os diversos eventos que contribuíram para seu desenvolvimento ao
longo dos séculos.

Ainda assim, a literatura gosta de fixar que o início da IA data de 1956, graças à utilização do
termo “Inteligência Artificial” no convite para um workshop em Dartmouth College realizado pelo
professor John McCarthy.

Na época, McCarthy, maravilhado pelos seus estudos em psicologia e pelos avanços do campo
“teoria dos autômatos” (que hoje compõe a “ciência da computação”), decidiu organizar um
workshop em conjunto com seus colegas Marvin Minsky (professor do MIT), Claude Shannon
(criador da Teoria da Informação) e Nathaniel Rochester (engenheiro da IBM) para avançar no
estudo de Processamento de Linguagem Natural, Redes Neurais, Aprendizado de Máquina
(Machine Learning) e alguns conceitos abstratos, como raciocínio e criatividade.

(Foto do workshop de IA de Dartmouth de 1956, com os organizadores e alguns participantes)

Tratou-se de um projeto muito ambicioso porque, segundo o próprio convite, se baseava na
otimista premissa de que “todo aspecto da aprendizagem ou qualquer outra característica da
inteligência pode, em princípio, ser descrito de maneira tão precisa que uma máquina possa
simulá-lo”.

Embora não tenha resultado em nenhuma descoberta revolucionária, foi nesse workshop que
apresentaram um sistema matemático de prova de teoremas, chamado Logic Theorist (LT), capaz
de solucionar problemas de forma não numérica, sendo considerado o primeiro programa de IA
verdadeiramente funcional.

(IBFC/AJ TRF5/TRF 5/Apoio Especializado/Análise de Sistemas de Informação/2024) Assinale a
alternativa que apresenta qual foi o ponto de partida para o desenvolvimento da Inteligência
Artificial (IA) e como ela evoluiu ao longo das décadas.

a) O desenvolvimento da IA começou na década de 1960 com a criação de redes neurais

b) A IA surgiu em 1980, com a criação de sistemas capazes de raciocinar como humanos

c) O projeto Dartmouth, em 1950, foi o marco inicial da IA, e ao longo das décadas, o estudo das
redes neurais se tornou uma base fundamental para o desenvolvimento da IA

d) A IA começou na década de 1990 com a criação dos primeiros computadores de grande porte

Comentários:

Marcar como corretas alternativas como “A IA surgiu em …” ou “A IA começou em…” é sempre
muito perigoso porque autores divergem sobre esses marcos iniciais.

Porém, é lugar comum na literatura que o termo “Artificial Intelligence” seja creditado a John
McCarthy, sendo sua primeira utilização oficial atribuída ao convite elaborado para o seu
workshop no verão de 1956 em Dartmouth College (a banca enunciou “1950”, acredito que
querendo se referir à “década de 50”), iniciando, assim, essa área de estudo.

Gabarito: C

## Conceito de Inteligência Artificial

Ficou claro no workshop de Dartmouth, e ao longo dos anos após esse evento, que os
pesquisadores tinham visões teóricas diferentes sobre como desenvolver a Inteligência Artificial.

O problema é que não é simples decidir o que torna algo “inteligente”, devido às diversas
abordagens possíveis. Inclusive, ao longo das décadas, conforme os estudos na área avançavam,
diferentes entendimentos surgiram para qualificar um comportamento como inteligente.

De todo modo, para entendermos as distintas definições de “inteligência artificial”, basta
procurarmos pela definição de “inteligência”, uma vez que o conceito de “artificial” pode ser
bem estabelecido: aquilo que não é natural.

Atualmente na literatura há quem defenda que a inteligência está associada à capacidade de
pensar como um humano, com pensamentos que se assemelham aos nossos, enquanto há
quem prefira que a inteligência seja associada a pensar com racionalidade, como uma
capacidade de gerar pensamentos lógicos.

Em outra vertente, há acadêmicos que associam a inteligência ao ato de agir como um humano,
sendo um sistema inteligente aquele capaz de nos imitar, enquanto há aqueles que associam a
inteligência a capacidade de agir com racionalidade, isto é, a capacidade de tomar a decisão
certa, independentemente de como um humano agiria na mesma situação.

Em determinado momento a Inteligência Artificial se firmou como uma ciência de
fato, sendo assim, atualmente também temos aqueles que optam por definir a IA
simplesmente como uma área de conhecimento, sujeita a pesquisa e estudo.

Bom, por não haver um consenso sobre a definição exata de inteligência, e, consequentemente,
inteligência artificial, qualquer uma dessas abordagens pode aparecer em sua prova.

(Instituto Verbena/CM Anápolis-Técnico de Informática/2024) O conceito que representa a
capacidade de um computador/dispositivo eletrônico de se comportar assemelhando-se à forma
de pensar de um ser humano, em que pode, usando variáveis do ambiente, tomar decisões e
resolver problemas é

a) a realidade aumentada.

b) o metaverso.

c) a internet das coisas.

d) a inteligência artificial.

Comentários:

a) Errada. Realidade aumentada é a tecnologia que expande ao mundo real informações digitais
(como imagens, vídeos ou dados), através de dispositivos como smartphones, tablets ou óculos
especiais. Tal tecnologia tem o objetivo de melhorar a percepção da realidade introduzindo
elementos virtuais. Um exemplo é o jogo Pokémon Go.

b) Errada. Metaverso é espaço virtual coletivo onde as pessoas podem interagir entre si e com o
ambiente digital usando avatares e outras ferramentas virtuais. É como se fosse um universo
paralelo digital. Um exemplo era quele jogo Second Life.

c) Errada. Internet das Coisas (Internet of Things - IoT) é uma rede de dispositivos físicos
conectados à internet para coleta e compartilhamento de informações. Aqui temos vários
exemplos de aparelhos domésticos conectados na internet, como smart TVs, carros e até
refrigeradores.

d) Correta. Vejam que a questão aborda um dos conceitos possíveis de Inteligência Artificial: a
capacidade de comportar (agir) como um humano. Nessa abordagem, evitamos analisar se a
máquina está pensando de fato, para analisar apenas se ela está se comportando como nós. Um
bom exemplo dessa abordagem é o robô “Data” de “Star Trek: A Nova Geração”.1

1 Essa nova geração aí do Star Trek de 1994 era para minha época, né? Atualmente está mais para a “velha geração”.

Gabarito: D

## IA como “pensar com racionalidade”

### IA Simbólica (ou Lógica)

Depois da conferência de Dartmouth, devido à predileção de nomes importantes da área, como
o próprio John McCarthy e Marvin Minsky, a abordagem “vencedora”, isto é, que recebeu
maior atenção (e financiamento) nas décadas seguintes, foi a IA Simbólica.

Nessa abordagem, acredita-se que um sistema pode ser inteligente se tiver capacidade de
raciocínio, ou seja, ser capaz de realizar deduções lógicas a partir de conhecimentos
previamente estabelecidos.

Por exemplo, se tivermos uma regra “se algo mia e tem bigodes, então é um gato” e
apresentarmos os fatos “Ted mia” e “Ted tem bigodes”, nosso sistema de IA seria capaz de
deduzir por raciocínio lógico: “Ted é um gato”.

Dessa forma, na IA simbólica partimos de uma ideia clara: para ser inteligente, um computador
deve ser capaz de raciocinar, manipulando símbolos (como palavras ou números) para chegar a
conclusões lógicas.

#### Conhecimento

No contexto da Inteligência Artificial, “conhecimento” se trata de um conceito essencial porque é
a matéria-prima do raciocínio. Isso porque, quanto mais conhecimento possui, mais provável é
que um sistema de IA consiga chegar a deduções lógicas corretas (e o mesmo vale para nós,
quanto mais conhecimentos tivermos, mais certas serão as conclusões dos nossos pensamentos).

Ocorre que, para conseguir deter conhecimento, um sistema de IA simbólico necessita de uma
base de conhecimento (Knowledge Base), isto é, uma estrutura organizada que armazena
diversos fatos (coisas que são verdade) e regras (como os fatos se relacionam) sobre o mundo
real.

Saibam que definimos tais fatos e regras em sentenças, como “cachorros possuem rabo” (fato) ou
“se abana o rabo, então é bonzinho” (regra), por exemplo. Consequentemente, também
podemos definir base de conhecimento como sendo um conjunto de sentenças.

Talvez seja útil fazer um paralelo entre a distinção conceitual de um banco de
dados e uma base de conhecimento.

Imagine uma planilha Excel enorme, com muitas abas, guardando muitos dados.
Isso é a cara de um banco de dados clássico.

Agora pense em um mapa mental: coisas que se conectam com outras coisas por
setas, interligando uma rede, guardando muito conhecimento. Essa é a ideia por
trás de uma base de conhecimento.

Percebam que o banco de dados possui uma função até que simples: armazenar
dados sobre o mundo. Enquanto isso, a base de conhecimento parece mais
nobre: armazenar crenças sobre o mundo, de forma a compreendê-lo.

Na prática, para que uma base de conhecimento seja utilizável por um robô, suas sentenças
devem ser escritas com base em algum modelo formal, isto é, com uma estrutura rigorosa de
convenções de como representar a realidade.

Isso porque computadores não entendem linguagem natural (como o Português) como nós. Se
enchermos a base de conhecimento com frases soltas, cheias de sinônimos, jeitos diferentes de
dizer a mesma coisa e sem um formato padrão, a máquina não consegue procurar, comparar,
nem deduzir nada de forma confiável. Resultado: o sistema de IA simplesmente não funciona.

Resumindo, se a base de conhecimento não for bem organizada, o computador não consegue
raciocinar.

Por isso não basta "amontoarmos" sentenças escritas de qualquer jeito, é preciso representar o
conhecimento de forma estruturada e consistente, utilizando uma linguagem formal de
representação do conhecimento (Knowledge Representation).

#### Linguagens de Representação do Conhecimento

Lógica Proposicional

Uma base de conhecimento modelada com lógica proposicional parte do pressuposto que a
natureza do mundo é ser composta de fatos, que se sustentam ou não quando confrontados
com a realidade.

Assim, esses fatos são expressos na nossa base por proposições, que são declarações
determinadas sobre a realidade, avaliadas sempre como verdadeiras ou falsas.

A forma mais simples de proposições é a atômica como “a sala está suja”, porque não podem
ser divididas em partes menores.

Também podemos formar proposições compostas a partir de combinações de proposições
simples utilizando parênteses e conectivos lógicos (ou operadores).

Bom, o primeiro operador que devemos conhecer é a disjunção (representado pelo símbolo
“∨” – lê-se “ou” em português), que forma proposições compostas que são sempre verdadeiras,
salvo quando ambas as proposições simples que a formam são falsas.

Porém, antes de nos aprofundarmos, para tornar a explicação mais clara, tomemos como
exemplo a modelagem de uma base de conhecimento para um robô aspirador de pó que
registra suas diferentes posições em relação às paredes de uma casa.

Continuando, agora se quisermos capturar o momento em que nosso robô aspirador está com
uma parede à sua esquerda, uma à sua frente ou as duas situações ao mesmo tempo,
poderíamos criar a proposição composta “há uma parede à esquerda ∨ há uma parede à
frente”.

Já a conjunção (representado pelo símbolo “∧” – lê-se “e” em português) forma proposições
compostas que são sempre falsas, salvo quando ambas as proposições simples que a formam são
verdadeiras.

Assim, com a conjunção “há uma parede à esquerda ∧ há uma parede à frente” nossa
proposição só seria verdadeira caso houvesse uma parede à esquerda e à frente do robô, ao
mesmo tempo.

Na sequência, temos também a bicondicional (representado pelo símbolo “⇔” – lê-se “se e
somente se...” em português) que forma proposições compostas que são verdadeiras apenas
quando ambas as proposições simples que a formam têm o mesmo valor lógico.

Nesse caso, com a bicondicional “há uma parede à esquerda ⇔ há uma parede à frente” na
nossa base de conhecimento, capturaríamos dois momentos: caso houvesse uma parede à
esquerda e à frente do robô e caso não houvesse uma parede à esquerda e não houvesse uma
parede à frente do robô, ao mesmo tempo.

Agora temos o operador mais interessante na minha opinião, a condicional material
(representado pelo símbolo “⇒” – lê-se “se... então...” em português), também chamada de
implicação.

Isso porque as implicações definem regras (também chamadas de declarações “se–então”),
ou seja, ações a serem tomadas pelo robô (o consequente da expressão, ou parte “então…”) a
partir de uma análise de validade de um conjunto de proposições (o antecedente da expressão,
ou parte “se…”).

Por exemplo, vamos supor que toda vez que nosso robô encontrar uma parede, ele deve ter a
ação de “girar para direita”. Assim, podemos criar essa regra na nossa base de conhecimento
utilizando a sentença “há uma parede à frente ⇒ girar para direita”

Finalmente, nosso último operador é a negação (representado pelo símbolo “¬” – lê-se “não”
em português), que inverte o valor lógico de uma proposição.

Assim, enquanto “há uma parede à frente” é verdadeira, a proposição “¬ há uma parede à
frente” é falsa.

Bom, agora gostaria de salientar que esse tema é complexo e poderíamos escrever uma aula
inteira sobre, porém não faremos isso porque essa linguagem é pouco expressiva para
representar conhecimento.

Isso porque temos uma grande limitação no modelo proposicional, que o impede de ser
utilizado extensivamente na prática: a sua pouca flexibilidade para abstração.

Vejam que, para essa linguagem “há uma parede à frente” é uma proposição viável porque se
trata de uma afirmação bem definida que pode ser avaliada como verdadeira ou falsa, enquanto
“há algum obstáculo à frente” não é uma proposição, uma vez que existe um termo vagamente
definido (“algum obstáculo”).

Para resolver isso teríamos que enumerar manualmente todas as possibilidades de obstáculos e
transformá-las em atômicas para que o robô as reconheça. Por exemplo: “há uma cadeira à
frente”, “há um sofá à frente”, “há uma caixa à frente” etc.

Porém, se surgir um novo tipo de obstáculo não previsto (por ex., “um cesto”), seria preciso criar
mais um átomo e, como o número de objetos possíveis é praticamente infinito (cadeira, bancada,
sapato etc.), essa abordagem se torna inviável.

Lógica de Primeira Ordem

Na lógica de primeira ordem (first-order logic) estendemos a visão da realidade da lógica
proposicional para incluirmos a ideia de que o mundo é composto de fatos, objetos e
relações, obtendo uma linguagem muito mais expressiva para ser utilizada como representação
do conhecimento.

Assim, na lógica de primeira ordem trabalhamos com variáveis, constantes, funções, predicados e
quantificadores, além dos operadores já vistos na lógica proposicional.

Vejam que, na lógica de primeira ordem, precisamos estabelecer nosso domínio de discurso,
isto é, qual o conjunto de elementos em que estamos trabalhando.

Por exemplo, supondo um sistema de IA bancário, poderíamos definir nosso domínio como
sendo composto pelo conjunto de clientes
e seus salários possíveis
𝑀𝑎𝑟𝑖𝑎, 𝐽𝑜𝑠é, 𝐴𝑛𝑎…
{
}
.
𝑅$ 1. 000, 𝑅$ 2. 000, 𝑅$ 3. 000…
{
}

Consequentemente,
poderíamos
criar
uma
variável
“x”
para
representar
clientes,
,
e
uma
variável
“y”
para
representar
os
salários,
{𝑀𝑎𝑟𝑖𝑎, 𝐽𝑜𝑠é, 𝐴𝑛𝑎…}

.
{𝑅$ 1. 000, 𝑅$ 2. 000, 𝑅$ 3. 000…}

Ao invés disso, caso quiséssemos especificar um elemento específico do domínio, podemos
utilizar uma constante, como
ou
. Também vale saber que não
𝑎= 𝑀𝑎𝑟𝑖𝑎
𝑏= 𝑅$ 2. 000
precisamos atribuir um elemento do domínio a uma letra como “a” ou “b” para criarmos a
constante, nas fórmulas basta utilizarmos o valor desse elemento diretamente.

As funções servem para associarmos um elemento a outro através de alguma regra. Dessa
forma, poderíamos criar uma regra chamada “
” para associar um cliente a um
𝑆𝑎𝑙𝑎𝑟𝑖𝑜𝐷𝑒
determinado salário, como associar “Maria” ao salário de “R$ 20.000”, por exemplo. Assim, em
termos formais, utilizaríamos a seguinte notação:
.
𝑆𝑎𝑙𝑎𝑟𝑖𝑜𝐷𝑒(𝑀𝑎𝑟𝑖𝑎) = 𝑅$ 20. 000

Percebam que não fica totalmente claro só pelo nome da função qual a sua regra de associação,
assim, esta tem que vir explicada em algum lugar.

Além disso, funções não são avaliadas como verdadeiras ou falsas, uma vez que sua intenção
é apenas associar elementos do domínio.

Já os predicados criam regras diretamente aos elementos do domínio, podendo ser analisados
como verdadeiros ou falsos.

Por exemplo, vamos criar um predicado “SalarioSuperior” que analisa se o salário do cliente é
superior a determinado valor. Assim, supondo que o salário de Maria fosse R$ 20.000, o
predicado
) seria verdadeiro, enquanto se Ana ganhasse R$
𝑆𝑎𝑙𝑎𝑟𝑖𝑜𝑆𝑢𝑝𝑒𝑟𝑖𝑜𝑟(𝑀𝑎𝑟𝑖𝑎, 𝑅$ 5. 000
3.000 o predicado
seria falso.
𝑆𝑎𝑙𝑎𝑟𝑖𝑜𝑆𝑢𝑝𝑒𝑟𝑖𝑜𝑟(𝐴𝑛𝑎, 𝑅$ 5. 000)

Finalmente, os quantificadores servem para criarmos regras genéricas para os elementos do
domínio. Temos, na lógica de primeira ordem, os quantificadores universais (representado pelo
símbolo “∀” – lê-se “para todo” em português), em que estabelecemos regras para todos
elementos do domínio, e os existenciais (representado pelo símbolo “∃” – lê-se “existe” em
português), em que estabelecemos regras para pelo menos um elemento do domínio.

Por exemplo, poderíamos criar uma regra “Todo cliente deve possui salário superior a R$ 1.000”
como sendo:

∀𝑥 (𝐶𝑙𝑖𝑒𝑛𝑡𝑒(𝑥) ⇒ 𝑆𝑎𝑙𝑎𝑟𝑖𝑜𝑆𝑢𝑝𝑒𝑟𝑖𝑜𝑟(𝑥, 𝑅$ 1. 000))

E também poderíamos criar a regra “Existem clientes que o salário é superior a R$ 5.000” como
sendo:

∃𝑥 𝑆𝑎𝑙𝑎𝑟𝑖𝑜𝑆𝑢𝑝𝑒𝑟𝑖𝑜𝑟(𝑥, 𝑅$ 5. 000)

Por fim, devido a sua capacidade de lidar com conceitos complexos, a lógica de primeira ordem
é preferida à lógica proposicional como linguagem para modelar bases de conhecimento.

(IDECAN - 2024 - Analista Bancário (BANDES)/Tecnologia da Informação/Analista de Sistema) Na
Inteligência Artificial, a representação do conhecimento é essencial para permitir que os sistemas
compreendam e ajam de maneira inteligente. Dentre as diversas formas de representação do
conhecimento, a Lógica de Primeira Ordem é uma abordagem poderosa.

Considere o seguinte enunciado:

"Para todo x, se x é um humano, então x é mortal."

A forma lógica mais apropriada para representar essa afirmação na Lógica de Primeira Ordem é

a) ∀x Humano(x)→Mortal(x)

b) ∃x Humano(x)→Mortal(x)

c) ∀x Mortal(x)→Humano(x)

d) ∃x Mortal(x)→Humano(x)

Comentários:

Em questões lógicas de primeira ordem, a primeira coisa que devemos descobrir é o domínio de
conhecimento em que estamos trabalhando, isto é, quais os elementos que podemos associar às
variáveis ou constantes utilizadas.

Ocorre que o mais comum é o examinador não dar essa informação, cabendo a nós, por meio de
uma investigação do enunciado, descobrir.

Pois bem, do enunciado temos apenas a fórmula "Para todo x, se x é um humano, então x é
mortal.".

Vejam que o examinador institui a variável “x”, em “Para todo x”, sem dizer seu domínio. Ocorre
que, na sequência, o examinador pede para examinarmos se “x é humano”. Ou seja, podemos
supor que estamos trabalhando em um domínio de seres que podem ou não podem ser
humanos. Então, temos nosso domínio definido: humanos e não humanos (animais, plantas,
extraterrestres...).

Voltando à “Para todo x”, vimos que tal expressão se trata de um quantificador universal,
representado por “∀”. Assim, nossa fórmula em primeira ordem deve começar com “
”.
∀𝑥

Continuando, em “x é um humano” o examinador cria uma regra aos elementos do domínio,
para avaliarmos como verdadeira ou falsa. Assim, devemos criar um predicado aqui, como

“ÉHumano” ou simplesmente “humano”. Assim, nossa fórmula em primeira ordem cresce para “

”.
∀𝑥 𝐻𝑢𝑚𝑎𝑛𝑜(𝑥)

Vejam que “x é um humano” está envolto em uma expressão se... então..., que vimos, do estudo
da lógica proposicional, que se trata de uma condicional material, cujo símbolo é “⇒”.

Finalmente, o examinador pede para avaliarmos se “x é mortal”. Assim, criamos o predicado
“ÉMortal” ou só “Mortal” mesmo. Assim, nossa fórmula em primeira ordem cresce para:

.
∀𝑥 𝐻𝑢𝑚𝑎𝑛𝑜𝑥
( )⇒𝑀𝑜𝑟𝑡𝑎𝑙𝑥
( )

Gabarito: A

Lógica Nebulosa

Suponha um sistema de concessão de crédito por IA em um Banco com uma base de
conhecimento modelada em lógica de primeira ordem com a seguinte regra: “Para toda pessoa,
se o salário dessa pessoa é superior a R$ 2.000,00, então conceda o empréstimo”.

Assim, uma pessoa só poderia receber um empréstimo caso pertencesse ao conjunto das
pessoas que ganham acima de R$ 2.000,00.

Ocorre que uma situação esdrúxula pode acontecer: se uma pessoa ganhar R$ 1.999,99, terá seu
empréstimo recusado.

Para flexibilizar esse sistema formado em cima de um raciocínio exato, em que um elemento
sempre pertence ou não pertence a um determinado conjunto, criou-se a lógica nebulosa (fuzzy
logic).

Nesse sistema, calculamos o grau de pertinência do elemento a cada conjunto, que vai de 0
(0% verdadeira, ou seja, é falso que o elemento pertence ao conjunto) a 1 (100% verdadeira que
o elemento pertence ao conjunto), para então tomar a decisão.

Nesse momento é importante saber que cada conjunto estabelecido em lógica nebulosa é
chamado de “nebuloso” ou “fuzzy”.

No nosso exemplo de empréstimo bancário, poderíamos reescrever a sentença para “Se o salário
de uma pessoa é adequado, então conceda o empréstimo” e tornar o conceito de “adequado”
nebuloso, isto é, permitir o cálculo do grau de pertinência do salário da pessoa a esse conjunto
(usualmente usando alguma fórmula matemática).

Assim, caso um sujeito ganhe R$ 1.999,99, teria seu empréstimo aprovado, porque o grau de
pertinência do salário dele ao conceito de “adequado” seria algo próximo de 100% (o valor iria
depender da fórmula utilizada).

É claro que poderíamos aumentar o número de verificações para concessão do empréstimo,
como incluir “score de crédito” e “estabilidade de emprego”, por exemplo, criando múltiplos
conjuntos nebulosos. Nesse caso, verificaríamos o grau de pertinência do sujeito a cada um

desses conjuntos (algo como 70% de “score de crédito” e 84% de “estabilidade de emprego”,
por exemplo) para tomar a decisão.

Consequentemente, notem que um dado pode pertencer a mais de um conjunto ao mesmo
tempo, cada qual em um certo nível de pertencimento.

(AOCP/PEBTT - Computação/2022) Sobre a lógica fuzzy e seus conceitos, assinale a alternativa
correta.

a) Conjuntos fuzzy são definidos para representar informações vagas ou imprecisas em que um
elemento pode pertencer a dois conjuntos aparentemente disjuntos.

b) O grau de pertinência em lógica fuzzy indica se um nó pertence ou não a um conjunto de
soluções.

c) O grau de pertinência em lógica fuzzy indica se um nó pertence ou não ao caminho em um
processo de busca.

d) Em lógica fuzzy, há uma fronteira bem definida entre a pertinência ou não de um elemento a
um conjunto.

e) Em lógica fuzzy, o grau de pertinência de um elemento a um conjunto é sempre dividida de
forma igualitária.

Comentários:

De fato, conjuntos fuzzy, da lógica fuzzy, permitem representações com graus de imprecisão, em
que um dado pode não estar completamente contido no conjunto, estando apenas parcialmente.
Por exemplo, no antigo Orkut avaliávamos o quão sexy era uma pessoa (!!!), ou seja, ao invés de
avaliar a pessoa como pertencente ou não ao conjunto das pessoas sexy, era possível dar uma
nota do grau de pertinência dela ao conjunto das pessoas sexy. Algo como 80% sexy. É mole?

Bom, na mesma ferramenta era possível avaliar também o quão confiável e o quão legal ela era,
atribuindo graus de pertinência a esses conjuntos também. Então, a pessoa poderia ser 80%
sexy, 85% legal e 95% confiável.

a) Correta. A alternativa explica bem a ideia por detrás dos conjuntos fuzzy, e,
consequentemente, da lógica fuzzy: representar informações que não são exatas, isto é, com
algum grau de imprecisão. A passagem “conjuntos aparentemente disjuntos” ficou meio
esquisita, mas acredito que a ideia do examinador era passar a sensação de grau de
pertencimento a mais de um conjunto mesmo (lembrem-se que em concurso público algumas
vezes temos que marcar a “mais certa”).

b) Errada. O grau de pertinência indica o nível ou a intensidade com que um elemento pertence
a um conjunto fuzzy, variando entre 0 e 1, onde 0 significa nenhuma pertinência e 1 significa
pertinência total.

c) Errada. Em lógica fuzzy, o grau de pertinência é utilizado para expressar a extensão à qual um
elemento pertence a um conjunto fuzzy, não se relacionando a “avaliar caminhos em processos
de busca”.

d) Errada. É justamente ao contrário, em lógica fuzzy, a principal característica é que não há uma
fronteira bem definida entre pertencente e não pertencente a um conjunto, uma vez que as
fronteiras são nebulosas.

e) Errada. O grau de pertinência de um elemento a um conjunto é dividido da forma que quem
modelou o problema deseja que seja, podendo ser igualitário ou não. Assim, o valor do grau de
pertinência pode variar e é determinado pela função de pertinência definida para o conjunto
fuzzy, sendo que, quem define essa função de pertinência é a pessoa responsável por modelar
matematicamente o problema real em lógica fuzzy.

Gabarito: A

#### Ontologia

Quando estudamos linguagens de representação do conhecimento, focamos nos fundamentos
teóricos, como suas sintaxes e regras de manipulação de símbolos, necessários para seu
funcionamento.

Agora focaremos em como definir o conteúdo que de fato será inserido na base de
conhecimento. Ou seja, como gerar o vocabulário de um pedaço do mundo real (também
chamado de domínio ou “mini-mundo”) que estamos interessados: os objetos importantes, suas
propriedades e relações.

Por exemplo, em um sistema bancário, clientes e salários são objetos importantes que devem ser
modelados na base de conhecimento. O que queremos aqui é justamente ter uma ferramenta de
engenharia do conhecimento que nos permita chegar nesses objetos úteis.

Bom, para isso, podemos utilizar a ontologia, que nada mais é que uma estrutura capaz de
organizar o conhecimento de um domínio, descrevendo seus conceitos e as relações existentes
entre eles.

Mas saibam que a ontologia não é só uma lista de “coisas”. Na realidade, ela carrega significado
explícito sobre o domínio: define o que cada termo quer dizer e como ele se conecta aos demais,
ou seja, possui alta carga semântica (isto é, de significado).

Embora existam algumas linguagens para se representar formalmente uma ontologia, cada uma
com suas especificidades, regra geral, precisamos definir os indivíduos - isto é, objetos do
domínio de interesse -, as classes - isto é, conjunto ao qual os indivíduos pertencem - e as
propriedades - isto é, relações que ligam dois indivíduos.

Por exemplo, podemos criar uma ontologia, em uma linguagem simples, na área da medicina
tendo os indivíduos “Dr. José” e “Sr. Manoel”, com as classes “pessoa”, “médico” e “paciente”
e com a propriedade “cuidaDe” ligando os dois indivíduos, já que o “médico” “Dr. José” cuida
do “paciente” “Sr. Manoel”. Vejamos uma representação gráfica dessa ontologia elaborada por
mim.

(CEBRASPE (CESPE)/CTI/Inteligência Artificial e Ciência de Dados/2024) Na inteligência artificial,
a representação completa de determinado assunto constitui uma ontologia.

Comentários:

A representação completa e estruturada de uma área de interesse, com seus conceitos,
categorias e relacionamentos, constitui uma ontologia.

Gabarito: Correta

Também é importante saber que ontologias possuem axiomas, que são declarações sempre
verdadeiras no domínio, usadas para definir regras ou restrições. No nosso exemplo,
poderíamos adicionar um axioma no afirmando que “todo paciente deve ser cuidado por pelo
menos um médico”.

(CEBRASPE (CESPE)/CTI/Inteligência Artificial e Ciência de Dados/2024) Na ontologia, o
conjunto de axiomas do domínio é aquele que serve para modelar restrições e regras inerentes
às instâncias.

Comentários:

Na ontologia, axiomas servem para estabelecer regras e relações que devem ser respeitadas
dentro do domínio modelado, governando a estrutura e o comportamento dos objetos descritos
pela ontologia. Em termos mais simples, são afirmações sempre verdadeiras em determinado
assunto.

Gabarito: Correta

#### Sistemas Especialistas

A grande conquista comercial obtida pelos avanços da IA Simbólica, ocorrida por volta do
início da década de 1980, foram os sistemas especialistas (expert systems).

Bom, sistemas especialistas nada mais são que sistemas de inteligência artificial projetados por
especialistas humanos para imitarem sua capacidade de decisão, no seu domínio de
conhecimento especializado, porém sem ter consciência ou compreensão da realidade como nós.

Assim, tais sistemas são capazes de resolver problemas complexos eficientemente, porém
sempre restritos à sua área de conhecimento.

(CESGRANRIO/TRANSPETRO/Análise de Sistemas/2018) Sistemas especialistas ocupam lugar
privilegiado na área de Inteligência Artificial, mesmo com o avanço de outras áreas. Esses
sistemas capturam conhecimento tácito de especialistas e podem ser utilizados em processos
complexos de tomada de decisão como, por exemplo, diagnósticos médicos.

NÃO é característica dos sistemas especialistas

a) lidar com incerteza.

b) manipular informações simbólicas.

c) avaliar relacionamentos complexos.

d) contemplar hipóteses múltiplas e simultâneas.

e) operar em domínios abrangentes do conhecimento.

Comentários:

Sistemas especialistas são programas de computador projetados para responder como se
tivessem o conhecimento e a habilidade de um especialista humano em um domínio específico,
como diagnóstico médico, engenharia ou finanças.

a) Correta. Para lidar com incertezas eficazmente, sistemas especialistas precisam que sua Base
de Conhecimento tenha sido modelada em alguma linguagem que capture essa característica,
como a lógica fuzzy, por exemplo.

b) Correta. Sistemas especialistas trabalham com informações simbólicas, que são representações
abstratas do conhecimento e das regras em forma de símbolos e estruturas lógicas, uma vez que
esses símbolos, inseridos em sua Base de Conhecimento, representam conceitos e
relacionamentos no domínio de aplicação. Por exemplo, se modelarmos a Base de
Conhecimento em Lógica de Primeira Ordem, teremos a manipulação de símbolos como “∨” (a
disjunção, chamado de “ou”) e “∧” (a conjunção, chamada de “e”).

c) Correta. Lidar com e avaliar relacionamentos complexos entre diferentes variáveis e fatores
dentro do domínio específico é justamente uma das pretensões de sistemas especialistas, já que
buscam resolver problemas complexos em determinada área de conhecimento.

d) Correta. Sistemas especialistas podem gerar e considerar várias hipóteses ou possíveis
soluções simultaneamente. Eles podem usar técnicas como dedução por múltiplas hipóteses para
explorar diferentes caminhos de solução.

e) Errada. Essa é a alternativa mais errada, já que vai de encontro ao que os sistemas
especialistas propõem. Sistemas especialistas são geralmente projetados para um domínio
específico e não têm a capacidade de operar de forma eficaz em domínios abrangentes ou
diversos. Eles são altamente especializados, não tendo capacidade de generalização.

Gabarito: E

Para funcionarem, tais sistemas possuem uma Base de Conhecimento (knowledge base) com
fatos e regras do domínio armazenadas definidas em uma linguagem de representação do
conhecimento específica e um Motor de Inferência (Inference Engine) que consulta essa base
para, a partir do problema ao qual foi exposto, tomar uma decisão simulando o raciocínio de um
humano especialista utilizando de técnicas de raciocínio lógico matemático.

(CEBRASPE (CESPE) - 2024 - Analista (CAU BR)/Infraestrutura de Tecnologia da Informação) O
denominado motor de inferência é o núcleo dos sistemas de IA que oferece soluções possíveis
para um problema apresentado.

Comentários:

O motor de inferência é o núcleo que simula o raciocínio, ou seja, é o sistema que, a partir do
conhecimento armazenado na base de conhecimento, desenvolve um processo lógico de
conclusão utilizando-se de regras matemáticas pré-estabelecidas.

Gabarito: Correta

Vale a pena entrarmos em alguns detalhes do funcionamento do motor de inferência, visto a
complexidade da sua tarefa: decidir a partir de um raciocínio lógico.

Para conseguir “raciocinar” de fato, esse sistema recorre a alguns métodos matemáticos de
busca de solução, dentre eles, as heurísticas.

Explicando, heurísticas nada mais são que aproximações ou “regras práticas” que não
garantem uma solução ótima, mas que são boas e rápidas o suficiente para nos satisfazer.

Assim, são especialmente úteis em situações em que uma busca exaustiva de todas as soluções
possíveis seria impraticável devido à complexidade ou ao tempo necessário.

Por exemplo, em um sistema especialista bancário de concessão de crédito, poderíamos utilizar a
heurística “conceder empréstimos apenas a quem tem saldo credor no banco”. Vejam que se
trata de uma solução subótima, uma vez que deixaríamos de conceder empréstimos para pessoas
já devedoras, porém capazes de quitar com mais de uma dívida. Do outro lado, ganharíamos
tempo de processamento para decisão final.

Para finalizarmos essa seção, vamos ver uma definição técnica precisa de sistema especialista.

Sistema especialista se trata de um sistema de IA que acumula, combina e

abstrai conhecimentos fornecidos por um especialista humano ou
especialistas em um domínio específico para inferir soluções para problemas.

(CEBRASPE (CESPE) - Tecno P2 (CTI)/CTI/Tecnologias Habilitadoras/Inteligência Artificial e
Ciência de Dados/2024) Os processos heurísticos buscam, primeiramente, estabelecer soluções
teóricas para, depois, avançar para uma única tentativa de solução.

Comentários:

Heurísticas trabalham de forma oposta ao que foi afirmado, já que são soluções práticas para a
resolução de problemas sem forte embasamento científico. Assim, são frequentemente derivadas
da experiência prática, e não de soluções teóricas formais.

Um exemplo do dia a dia é quando ignoramos o GPS e seguimos por um caminho já conhecido.
Talvez não seja de fato a solução ótima, mas é a solução que temos a intuição de ser a melhor.

Gabarito: Errada

### Inverno da IA

Embora pareça que o desenvolvimento da Inteligência Artificial tenha ocorrido progressivamente
e de forma linear ao longo dos anos, na realidade essa evolução se deu em forma de “ciclos” de
bolhas e crashes.

Regra geral, tudo começa com pesquisadores, empresas e financiadores ficando otimistas com
alguns sucessos, os levando a acreditar ser possível resolver rápido coisas muito difíceis (como
carros totalmente autônomos, entender a fala humana, conversar em linguagem natural etc.).

Na sequência, um cenário de retroalimentação se instaura: mais investimentos geram mais
resultados, e mais metas ambiciosas que exigem mais investimentos.

São justamente estes períodos de grande entusiasmo, com investimentos maciços de agências
governamentais e capital de risco fluindo para projetos, que marcam as “primaveras da IA”.

Porém, em algum momento, a realidade se mostra mais dura do que o esperado, e as soluções
de alguns problemas se mostram mais complexas do que pareciam.

Nessa fase, quando as promessas não se cumprem no prazo (ou na escala esperada), a
confiança dos financiadores cai, o dinheiro seca e o ambiente de otimismo vira para um de
pessimismo. É aqui que entramos no “inverno da IA”.

Segundo a literatura passamos por dois “invernos de IA”, um durante a década de 1970 e
outro ao final dos anos 1980 e início dos anos 1990.

Após o workshop de Dartmouth (1956), houve um entusiasmo inicial em relação ao potencial da
inteligência artificial e, nos anos 1960, surgiram muitas ideias e protótipos promissores.

Porém, durante os anos 1970, as ousadas promessas de sistemas que pudessem, de maneira
geral, raciocinar como humanos não se concretizaram, principalmente devido à limitação dos
computadores da época e à complexidade dos problemas abordados.

Já no início dos anos 1980, os sistemas especialistas ganharam destaque comercial ao resolverem
problemas específicos de áreas como a médica e a financeira, gerando um otimismo considerável
e grandes promessas de investimentos.

Contudo, ao final dos anos 1980 e início dos anos 1990, ao tentar aplicar os sistemas
especialistas em problemas cada vez mais complexos, começaram a aparecer sérios desafios que
demonstraram a fraqueza da abordagem simbólica: sistemas de baixa escalabilidade (era lento e
caro transformar o que pessoas sabem em milhares de regras), difícil manutenção (pequenas
mudanças no mundo quebravam regras, e a manutenção era um pesadelo), atualizações
problemáticas (ao crescer, as regras se contradiziam) etc.

Esses fatores levaram a uma nova onda de desilusão, com empresas e governos percebendo que
a aplicação prática da IA em domínios complexos exigia abordagens mais flexíveis.

### IA Sub-simbólica

Se o paradigma simbólico se consagrou como grande vencedor depois do workshop de
Dartmouth, então os “perdedores” foram os sub-simbólicos.

Enquanto a IA simbólica tenta “programar” o conhecimento com símbolos e regras explícitas,
informadas por especialistas humanos, as abordagens de IA sub-simbólica capturavam
conhecimento a partir da definição de parâmetros numéricos em funções matemáticas a partir da
observação direta de dados.

Para essa escola de IA, deveríamos nos inspirar em áreas como a neurociência para capturar os
processos de pensamento, muitas vezes inconscientes, como reconhecer rostos ou identificar
palavras faladas.

À época de 1950, o grande representante dessa abordagem foi o modelo Perceptron,
implementado pelo psicólogo Frank Rosenblatt, que procurava simular o funcionamento
biológico de um neurônio.

O problema é que os grandes nomes de IA da época não acreditavam que essa abordagem iria
muito longe, chegando até a atacá-la. Marvin Minsky, inclusive, publicou o livro chamado
Perceptrons provando matematicamente algumas limitações desse modelo.

Além disso, o próprio Minsky tratou de atrasar evoluções dessa abordagem, em que adicionamos
vários perceptrons em uma rede, criando uma estrutura de rede neural, as criticando diretamente:

“[O perceptron] possui muitas características que chamam a atenção: sua linearidade; seu
intrigante teorema de aprendizagem; sua clara simplicidade paradigmática como uma
forma de computação paralela. Não há razão para supor que nenhuma dessas virtudes seja
transferida para a versão com muitas camadas. No entanto, consideramos ser um
importante problema de pesquisa elucidar (ou rejeitar) nosso julgamento intuitivo de que
essa extensão é estéril.”

Tais desconfianças somadas à trágica morte prematura de Frank Rosenblatt em 1971 acabaram
por retardar o desenvolvimento de redes neurais (que mais tarde seria conhecida como IA
conexionista) e outras iniciativas sub-simbólicas.

### Tempos Modernos

A partir da década de 1990 a IA começou a restaurar sua reputação graças à mudança de
paradigma adotado.

Com a queda da IA simbólica, emergiu o paradigma de Aprendizado de Máquina, sob a
abordagem de inteligência artificial capaz de “agir com racionalidade”.

Nessa abordagem, o sistema é capaz de capturar sozinho os conhecimentos necessários para
ajustar seu comportamento, não dependendo de um especialista humano para inserir suas regras
de funcionamento.

Ou seja, a IA migrou de “programar conhecimento” para “programar para aprender
conhecimento”.

No começo, algumas vitórias foram obtidas nessa abordagem, principalmente até a década de
2010, como filtros de spam usando o algoritmo Naive Bayes, reconhecimento de objetos em
imagens utilizando o algoritmo Máquinas de Vetores de Suporte e sistemas anti-fraude bancários
usando Árvores de Decisão (e, consequentemente, Florestas Aleatórias, i.e., várias Árvores de
Decisão juntas) ou Regressão Logística, por exemplo.

Porém, a partir de 2012 uma revolução na área começou.

Uma rede neural profunda chamada AlexNet2 ganhou a competição de reconhecimento visual
proposta pelo projeto ImageNet daquele ano (anteriormente só ganhada por Máquinas de
Vetores de Suporte), marcando o início do Deep Learning e a “primavera da IA” que nos
encontramos atualmente.

Em decorrência disso, vimos o surgimento de diversos tipos de arquiteturas de redes neurais sob
o paradigma de deep learning para resolver distintos tipos de problemas, como geração de
texto, reconhecimento facial em imagens e obtenção de estruturas de proteínas, por exemplo.

2 Um dos seus criadores, o Ilya Sutskever é também um dos criadores do ChatGPT.

(FGV/AFFC (STN)/STN/Tecnologia da Informação/Transformação Digital/2024 - ADAPTADA) Na
trajetória evolutiva da Inteligência Artificial (IA), diversos marcos e transições têm delineado seu
progresso e desafios.

Nesse contexto, avalie se as afirmativas a seguir, que destacam momentos críticos na história da
IA, são verdadeiras (V) ou falsas (F).

( ) Os Invernos da IA representam períodos de avanço tecnológico acelerado e investimento
maciço em pesquisa de IA, marcados pela rápida adoção de tecnologias de IA em diversos
setores sem qualquer ceticismo ou crítica.

( ) Introduzida em 2012, AlexNet é uma rede neural convolucional que competiu no desafio
ImageNet, marcando um ponto de inflexão significativo para o campo do Deep Learning ao
demonstrar a capacidade das redes neurais profundas em tarefas de visão computacional.

( ) O aprendizado de máquina (Machine Learning) foi abandonado nos anos 90 e 2000 devido à
falta de progresso teórico e prático, com a comunidade de IA se movendo unicamente para o
estudo teórico da computação.

As afirmativas são, respectivamente,

a) V – V – F.

b) V – F – V.

c) F – F – F.

d) F – V – F

e) F – F – V.

Comentários:

I. Falsa. Os invernos da IA são, na verdade, períodos de decepção e desilusão, quando as
promessas não se concretizaram e os investimentos caem drasticamente.

II. Verdadeira. AlexNet, ao vencer o desafio ImageNet em 2012, evidenciou o poder do deep
learning e impulsionou uma nova “primavera da IA”.

III. Falsa. Embora a área tenha passado por períodos de menor financiamento e otimismo (os
invernos da IA), o aprendizado de máquina nunca foi abandonado completamente, Inclusive, ele
continuou evoluindo e se consolidou como a principal abordagem de IA a partir dos anos 90.

Gabarito: D

## IA como “agir com racionalidade”

Atualmente, focamos a Inteligência Artificial como sistemas capazes de “agir com racionalidade”,
porque a racionalidade de ações pode ser formalizada por funções de desempenho, isto é,
regras matemáticas claras, nos dando a precisão científica necessária para o seu
desenvolvimento.

### Agente, Agente Racional e Agente Inteligente

Ao associarmos o conceito de inteligência à capacidade de uma entidade agir com racionalidade,
derivamos naturalmente o seu objeto de estudo: o agente (do dicionário, é “aquele que age”).

Segundo a literatura, o agente é aquele que percebe o ambiente através de sensores e age
sobre este através de atuadores, ou seja, é capaz de mapear percepções em ações.

Consequentemente, o ambiente acaba sendo o contexto de atuação do agente, sendo sua
percepção a capacidade de coletar informações desse ambiente e sua ação a capacidade de
provocar mudanças nele.

Percebam que aqui não existe garantia de que suas ações sejam “boas”, isto é, modifique o
ambiente e o deixe em um estado desejável, já que ele apenas segue um comportamento de
atitudes pré-programadas.

(Agente, adaptado de Norvig, P., &amp; Russell, S. J.)

Por exemplo, um agente pode ser uma lâmpada com detector de presença, cujos sensores são
os detectores de movimento, seus atuadores ligam ou desligam a lâmpada e seu funcionamento
é baseado em regras como “se o sensor detectar movimento, ligar a lâmpada” e “se não
detectar movimento por 2 minutos, desligar a lâmpada”.

Entendida a parte teórica, vamos agora apresentar uma definição técnica de agente de IA:

Agente de IA se trata da entidade automatizada que detecta e responde ao seu

ambiente e toma ações para atingir seus objetivos

(CEBRASPE (CESPE)/CTI/Inteligência Artificial e Ciência de Dados/2024) O dispositivo
computacional da inteligência artificial engloba, entre outros elementos, a percepção, que é a
capacidade de provocar mudanças no ambiente.

Comentários:

A questão cobra a diferenciação entre a percepção e a ação de um agente. Enquanto a
percepção é a capacidade de interpretar e entender informações do ambiente, a ação se refere à
capacidade de provocar mudanças. Vejam que a questão erra por inverter os conceitos.

Gabarito: Errada

Porém, ser um mero agente é insuficiente para se adequar aos desejos da inteligência artificial,
visto que ela exige dele racionalidade, isto é, que consiga “agir da forma certa”.

Dessa forma, devemos evoluir para o conceito de agente racional, que é aquele que, para cada
possível sequência de percepções, consegue selecionar a ação que espera maximizar sua
medida de desempenho.

Ou seja, um agente racional executa ações que produzem uma sequência “boa” de estados no
ambiente, isto é, a melhor saída possível (mais alta medida de desempenho).

Por exemplo, um agente racional pode ser um termostato com regulagem, cujos sensores são os
termômetros, seus atuadores ligam ou desligam o aquecimento e seu funcionamento é baseado
em uma medida de desempenho como “manter a temperatura da sala minimizando o consumo
de energia ao longo do dia”.

Mas tenham calma porque tal conceito ainda não é suficiente para satisfazer os paradigmas da
Inteligência Artificial, já que falta ao agente racional a capacidade de aprendizado, isto é, ser
capaz de acumular conhecimento útil a fim de melhorar seu comportamento, e ser
autônomo, isto é, ser capaz de agir com base em suas próprias percepções, sem necessidade
de auxílio externo.

Dessa forma, adicionando a capacidade de aprendizado e de autonomia ao agente racional,
obtemos o conceito desejado pela IA: o de agente inteligente.

Por exemplo, um agente inteligente pode ser um robô aspirador, com sensores de proximidade,
sujeira, nível de bateria etc., atuadores como rodas e o aspirador, e funcionamento baseado em
aprendizagem (por exemplo, aprenda sozinho que “de manhã a cozinha costuma estar muito
suja, então vou lá primeiro”) e autonomia (por exemplo, decidir retornar para recarregar sem
intervenção externa).

(CEBRASPE (CESPE)/BANRISUL/Desenvolvimento de software/2025) De acordo com os
conceitos que dão base à inteligência artificial (IA), existe uma entidade autônoma que se
caracteriza por perceber seu ambiente através de sensores, atuar sobre esse ambiente por meio
de atuadores, processar internamente dados percebidos e conhecimentos armazenados, e
selecionar ações específicas que maximizam sua medida de desempenho esperada, conforme
definido pela sequência de percepções e seu conhecimento interno. Essa entidade é definida na
IA como

a) processo de decisão sequencial.

b) rede neural.

c) agente racional.

d) algoritmo evolutivo.

e) modelagem cognitiva.

Comentários:

A expressão-chave para resolvermos a questão é "maximizam sua medida de desempenho
esperada", que é precisamente a definição técnica de agente racional: aquele que, para cada
sequência de percepções, seleciona a ação que se espera maximizar sua medida de
desempenho.

Gabarito: C

(CEBRASPE (CESPE)/CTI/Inteligência Artificial e Ciência de Dados/2024) Na inteligência artificial,
o agente inteligente deve ser capaz de ter autonomia, isto é, deve ter a capacidade de acumular
conhecimento que seja útil em suas ações.

Comentários:

A questão cobra a diferenciação entre os conceitos de autonomia e aprendizado. Enquanto a
autonomia refere-se à capacidade do agente para operar de forma independente e tomar
decisões com base em seu conhecimento e percepções do ambiente, o aprendizado diz respeito
ao processo pelo qual o agente adquire e atualiza esse conhecimento ao longo do tempo. Vejam
que a questão erra por inverter os conceitos.

Gabarito: Errada

### Sistemas multiagentes

Um sistema multiagente é composto de vários agentes que percebem o ambiente, tomam
decisões e agem, interagindo entre si, para alcançar objetivos.

A ideia aqui é que, em vez de termos um agente único e “grandão” tentando fazer de tudo,
partimos para vários executando diversas atividades pontuais: planejamento, coleta de dados,
execução de tarefas, verificação de resultados, e assim por diante.

Imagine que queremos operacionalizar um armazém com robôs, vocês não concordam que seria
muito mais fácil termos diversos tipos de máquinas, cada uma com uma atividade específica
(pegar um produto, conferir o produto, transportar o produto etc.) do que apenas uma máquina
gigante “faz tudo”? Então, por isso muitas vezes queremos sistemas multiagentes.

É curioso notar que um sistema de multiagentes pode ser composto por diversos
tipos de “seres que agem”, como robôs, humanos, times mistos de humanos e
robôs (por exemplo, aqueles campeonatos de xadrez que permitem ao
enxadrista usar um sistema de apoio) etc.

Regra geral, temos três categorias de agentes no sistema, os passivos, elementos do ambiente
que não “decidem” nada (como um obstáculo), os ativos com objetivos simples, que seguem
regras diretas para cumprir metas imediatas (como um pássaro em um bando) e os
cognitivos, que fazem cálculos mais complexos, planejam, ponderam e aprender (como uma
IA moderna).

Saibam que esses agentes podem atuar em diversos tipos de ambientes, como um virtual, em
que tudo acontece numa simulação (como se fosse um jogo de PC), um discreto, em que o
tempo e/ou o espaço andam em “passos” (como um jogo de xadrez) e um contínuo, em que as
suas características variam suavemente (como um drone no ar, cuja velocidade varia a cada
instante).

Regra geral, desejamos algumas características nos sistemas multiagentes, vejam.

Característica
Explicação

Visões locais
Nenhum agente enxerga tudo, cada um vê um pedaço do mundo.

Autonomia
Cada agente decide (ao menos em parte) por conta própria.

==5460==

Característica
Explicação

Descentralização

Não deveria haver um “chefão” controlando os agentes, visto que,
se existir, o sistema vira um monólito e perde as vantagens de
sistemas multiagentes.

De todo modo, se houver, ele deve planejar por todos e assumir que
eles serão obedientes, na chamada suposição de agente
benevolente.

Percebam então nosso cenário básico de sistemas multiagentes: cada agente atuando de forma
autônoma, tomando suas próprias decisões locais de acordo com seus objetivos e planos.

O interessante é que justamente essas decisões locais e interações pontuais entre
os diversos agentes “simples” fazem emergir espontaneamente o desejado
comportamento complexo do sistema multiagente como um todo.

Assim, de modo mais técnico, definimos o comportamento emergente como
uma propriedade de nível macro (do sistema completo de multiagentes) que
decorre de interações de nível micro (entre agentes individuais), sem que essa
propriedade global esteja codificada em nenhum agente especificamente.

Ocorre que, se todos perseguem o mesmo objetivo (como colegas de uma empresa), o principal
problema é coordenar todo mundo, para alinhar esforços.

Porém, se cada um tem seus próprios interesses (que podem ser opostos, como enxadristas
jogando xadrez, ou apenas diferentes), o problema passa a ser cada agente tentando prever o
que os outros farão (sabendo que os outros também estão tentando prever o que ele fará). Isso
cria um cenário complexo de iterações: aparecem coordenação, negociação, conflitos por
recursos e necessidade de sincronizar ações.

Essa ideia de “raciocínio sobre o raciocínio dos outros” pertence ao campo de estudo da teoria
dos jogos, que é a teoria da decisão estratégica3.

3 “Jogos” aqui não é sobre diversão, mas sobre um modelo que explica as decisões tomadas quando as escolhas

dos participantes (os “jogadores”) depende do resultado das escolhas dos outros.

Em um sistema multiagentes, os agentes permanecem autônomos, porém não
soberanos, porque as consequências de suas ações impactam uns aos outros.

É importante ressaltar esse cenário porque é possível termos diversos agentes em um sistema
de agente único. A diferença é que aqui o agente “principal” trata os outros como parte do
ambiente: ele faz uma chamada, recebe um resultado e segue em frente.

Ou seja, não há estratégia envolvendo os desejos dos agentes, um vê o outro apenas como
uma ferramenta, sendo seus resultados encarados como como percepções de um ambiente. Por
exemplo, se um robô pergunta a outro agente “qual a temperatura atual?”, a informação de
resposta é usada apenas como se fosse um sensor extra seu, não havendo tomada de decisão
envolvendo as vontades de cada robô.

Em resumo, se um agente não reage estrategicamente a outro (não tem metas próprias que
mudam conforme o que o outro faz), ele é considerado como uma ferramenta (ou até sinal do
ambiente) e tratamos como um problema de um agente. Porém, se os agentes têm objetivos e
adaptam o comportamento considerando os outros, estamos em um problema multiagente.

(CEBRASPE (CESPE)/TCU/Controle Externo/2026) Sistemas multiagentes são adequados para
problemas que exigem solução distribuída, autonomia local e coordenação entre entidades
independentes, como logística, simulação social e controle de tráfego.

Comentários:

Sistemas multiagentes funcionam exatamente assim: vários agentes independentes, cada um
com sua autonomia (decidindo por conta própria) e visão local (vendo só um pedaço do mundo),
que precisam se coordenar para resolver problemas que seriam difíceis demais para um único
agente "faz-tudo". Logística (vários veículos e robôs distribuindo cargas), simulação social (cada
pessoa simulada com suas próprias decisões) e controle de tráfego (cada semáforo ou carro
autônomo agindo localmente) são casos clássicos em que a solução precisa ser distribuída e
coordenada.

Gabarito: Certo

(CEBRASPE (CESPE)/TCU/Controle Externo/2026) Emergência é uma propriedade-chave de
sistemas multiagentes que deve ser intencionalmente projetada pelo desenvolvedor como parte
central do comportamento coletivo desejado para os agentes inteligentes.

Comentários:

A emergência é uma propriedade do nível macro (do sistema completo) que surge
espontaneamente das interações locais entre os agentes, sem que esteja codificada em nenhum
agente individualmente. Ou seja, o desenvolvedor projeta apenas as regras locais e simples de
cada agente, e o comportamento coletivo complexo aparece como consequência dessas
interações (e não como algo programado de antemão). Se fosse intencionalmente projetado e
embutido nos agentes, deixaria de ser emergência e passaria a ser apenas um comportamento
programado comum.

Gabarito: Errado

#### Arquiteturas dos sistemas multiagentes

Agora vamos estudar as formas com que a interação e a tomada de decisão entre vários agentes
pode ocorrer, ou seja, as arquiteturas de sistemas multiagentes.

Bom, existem dois estilos básicos: redes centralizadas e redes descentralizadas.

Na rede centralizada, temos um agente “despachante” no centro das decisões, com todos
os agentes conectados a ele. Esse agente central guarda a visão global (base de
conhecimento) do sistema, repassando ordens, dados e atualizações aos outros agentes, os
supervisionando.

O lado bom aqui é a simplicidade da comunicação direta (cada um agente “fala” com o central),
haver dados uniformes (há uma “fonte da verdade”, o agente central) e coordenação fácil do
sistema. Ou seja, trata-se de uma organização ótima para impor prioridades, evitar duplicações e

buscar um plano globalmente ótimo para todo conjunto de agentes. Também é uma rede prática
de monitorar e depurar problemas, porque tudo passa por um lugar só.

Já o lado frágil é a dependência: se o centro cai, o sistema para. E, ainda que não caia, pode virar
gargalo, visto que mais agentes significam mais mensagens, mais latência e menos
escalabilidade. Em cenários adversos, como aqueles com rede instável, os agentes podem perder
contato com o centro e ficar “às cegas”. Então, para contornar problemas, costumamos usar
redundância (réplicas do centro) e degradação graciosa (os agentes têm um modo local de
atuação em caso de emergências).

Um bom exemplo desse tipo de arquitetura são aqueles armazéns automatizados onde um
orquestrador distribui tarefas aos robôs, mantendo tudo sincronizado e bem coordenado.

De outra forma, a rede descentralizada funciona como uma “roda de conversa”: cada agente
fala com vizinhos e decide localmente, não existindo um “chefe único” com conhecimento
global do sistema. Ou seja, trata-se de um sistema altamente modularizado.

O ganho imediato disso é a robustez, já que a falha de um agente não “crasha” o sistema todo.
Além disso, as decisões locais podem ser mais rápidas porque não dependem do centro.
Também é bom para privacidade, visto que cada agente mantém parte dos dados consigo.

Porém, o preço que pagamos por isso é a coordenação: sem um árbitro central, o grupo de
agentes precisa de protocolos (acordos) para evitar conflitos e alinhar comportamentos. Por
exemplo, definir quem pega qual tarefa, como resolver empates, quando e quais informações
sincronizar. Além disso, podem surgir inconsistências (cada agente com um dado diferente da
mesma situação) e decisões subótimas do ponto de vista global.

Como exemplo desse tipo de arquitetura temos enxames de drones que circulam fazendo
varredura de determinado terreno.

#### Estruturas dos sistemas multiagentes

Agora veremos as formas de organizar os agentes em um sistema multiagente.

Bom, na estrutura hierárquica organizamos nossos agentes como um organograma: no
topo temos um ou poucos agentes com maior poder de decisão e abaixo temos os agentes que
executam cada parte do plano.

Já na estrutura holônica, cada unidade de agentes é considerado um “hólon”, isto é, uma
forma autônoma, com certo grau de independência, sendo capaz de lidar com
contingências sem precisar perguntar às autoridades superiores quais as instruções
corretas.

Aqui organizamos uma “holarquia”, com um “agente líder” parecendo único, mas internamente
sendo composto por subagentes especializados. Graças a isso, temos como grande vantagem a
flexibilidade (podemos formar “agentes líderes” distintos a partir de subagentes distintos) e o
reuso (um subagente pode servir a mais de um grupo), porém com a desvantagem de projetar
interfaces claras entre níveis para evitar conflitos e duplicações

Continuando, na estrutura de coalizão temos, justamente, as coalizões, isto é, alianças
temporárias. Ou seja, aqui agentes que sozinhos teriam desempenho fraco se juntam para uma
missão específica, aumentam a sua utilidade conjunta e, finalizando o processo, se desfazem.

Essa estrutura é particularmente vantajosa em ambientes variáveis, onde a melhor combinação de
agentes muda ao longo do tempo. Por outro lado, em ambientes muito dinâmicos temos
dificuldade em manter coalizões por sucessivas necessidades de reagrupamentos.

Finalmente, temos a estrutura de equipes, que parecem coalizões, mas são mais estáveis
porque não trabalham de forma independente. Aqui os agentes da mesma equipe planejam
juntos, compartilham objetivos e responsabilidades e dependem fortemente uns dos outros
para o todo funcionar bem. Geralmente existe mais hierarquia interna (há líderes e funções
definidas) e rotinas de treino e comunicação mais rígidas, visando o ganho em performance. O
contraponto é a menor flexibilidade para reorganização dos agentes.

### Tipos de Agentes

Podemos classificar diferentes tipos de agentes, a depender das suas capacidades de
funcionamento.

O agente reativo simples (ou reflexivo simples) se trata do tipo mais simples de agente, agindo
de acordo com base na percepção atual do ambiente. Ou seja, esse tipo de agente olha
apenas para o que está acontecendo no agora e escolhe uma ação com base nisso.

Percebam que ele não lembra do passado nem tenta imaginar o futuro, funcionando a partir de
um conjunto de regras do tipo “SE… ENTÃO…” (também chamadas de regras condição-ação).

Por exemplo, um robô aspirador de pó apenas com uma regra “se está sujo, então limpar” se
classifica como um agente reativo simples, já que decide limpar ou não um local apenas se
contém ou não sujeira.

Em resumo, o agente reativo simples é puramente reativo: percebe → regra condição-ação →
age.

(Agente reativo simples, adaptado de Norvig, P., &amp; Russell, S. J.)

Percebam que um agente reativo simples exige que o ambiente seja totalmente observável,
ou seja, tudo o que importa para ele decidir uma ação está disponível nos seus sensores no
instante da decisão.

Consequentemente, não consegue lidar com informações escondidas, típicas de ambientes
parcialmente observáveis, porque não tem memória. Por exemplo, se houver um cômodo que o
nosso robô aspirador não consegue visualizar no momento, porém já visitado, nosso robô não
tem capacidade de armazenar uma informação do tipo “a sala está limpa”, podendo voltar para
lá para “limpar” algo já limpo.

Então, para lidarmos com ambientes parcialmente observáveis, precisamos evoluir para o agente
reativo baseado em modelo.

Esse tipo de agente tem a capacidade de guardar em memória (um estado interno do agente)
a parte do mundo que ele não pode perceber no momento. Por exemplo, se estiver na sala, o
robô aspirador tem a capacidade de saber se “cozinha = limpa” ou mesmo “cozinha =
desconhecida”, se não visitou esse local ainda, porque possui essa informação armazenada.

Agora percebam que, além de armazenar, nosso agente também deve ter a capacidade de
atualizar seu monitoramento do ambiente. Para isso, precisamos codificar no agente como o
mundo evolui independentemente dele e como o ambiente se altera segundo as suas ações.

Por exemplo, podemos codificar a regra de evolução do mundo “cômodos limpos se sujam
novamente em 2 dias” e também a regra de modificações introduzidas pelo agente “se aspirar
um cômodo sujo, ele fica limpo”.

Saibam que, essa codificação de comportamento geral do mundo é chamado de modelo de
mundo, por isso o nome desse tipo de agente (“baseado em modelo”).

Em resumo, agentes reativos baseados em modelos lidam com observação parcial de mundo
mantendo um estado interno que resume o histórico de percepções e ações sobre as partes não
vistas do mundo no momento, prevendo também como o ambiente evolui por si (sua dinâmica) e
como suas próprias ações o afetam, usando um modelo do mundo para atualizar essa memória a
cada passo.

(Agente reativo baseado em modelo, adaptado de Norvig, P., &amp; Russell, S. J.)

O problema é que em muitas situações saber como o mundo está agora pode não bastar para o
agente decidir o que fazer. Isso porque pode ser necessário saber também em qual estado ele
deseja deixar o ambiente.

Explicando melhor, há situações que o agente precisa saber o que exatamente quer atingir, ou
seja, seu objetivo. Nesse caso, temos um agentes baseados em objetivos.

Percebam que aqui a mera aplicação de regras condição-ação descritas anteriormente não é
cabível, porque nosso agente não quer simplesmente agir baseado em uma percepção do
ambiente. Na realidade, aqui ele precisa ponderar tudo o que poderá acontecer no futuro do
ambiente considerando todas suas possíveis ações, para que possa selecionar aquelas que
levarão ao objetivo desejado.

Assim sendo, a codificação desse tipo de agente se mostra muito mais rebuscada, exigindo a
busca das possíveis saídas para suas ações (“se eu fizer isso, então acontecerá algo, mas se eu se
fizer aquilo, então acontecerá outro algo…”) e o planejamento do plano de execução de ações
(“farei isto, depois aquilo…”).

Vejam então que um agente baseado em objetivos não só “reage” ao que vê agora, ele também
sabe aonde quer chegar e, a partir do seu objetivo, busca as consequências e planeja as ações
que o conduzirão até lá.

(Agente baseado em objetivo, adaptado de Norvig, P., &amp; Russell, S. J.)

(IDECAN/BANDES/Analista de Sistema/2024) Na área de Inteligência Artificial, os agentes são
entidades autônomas que percebem seu ambiente e tomam decisões para atingir seus objetivos.
Em sistemas multiagentes, vários agentes interagem entre si para alcançar objetivos comuns.

Observando as afirmações abaixo, assinale a alternativa que descreve a diferença entre um
agente reflexivo simples e um agente baseado em objetivos.

a) Um agente reflexivo simples toma decisões com base em ações pré-programadas, enquanto
um agente baseado em objetivos ajusta seus objetivos de acordo com as mudanças no
ambiente.

b) Um agente reflexivo simples adapta seu comportamento de acordo com recompensas
recebidas, enquanto um agente baseado em objetivos segue uma abordagem de tomada de
decisão lógica.

c) Um agente reflexivo simples sempre escolhe a ação que maximiza a utilidade imediata,
enquanto um agente baseado em objetivos avalia o impacto de suas ações a longo prazo.

d) Um agente reflexivo simples decide suas ações com base em regras condicionais, enquanto
um agente baseado em objetivos seleciona ações para atingir estados desejados.

Comentários:

a) Errada. Embora seja verdade que um agente reflexivo simples toma decisões com base em
regras fixas ou ações pré-programadas (regras "SE-ENTÃO"), a segunda parte da afirmação está
imprecisa. O agente baseado em objetivos é definido pela sua capacidade de selecionar ações
que o levarão a um estado desejado (seu objetivo), não sendo "ajustar seus objetivos" uma
capacidade inerente sua.

b) Errada. Um agente reflexivo simples age apenas com base na percepção atual do ambiente,
seguindo regras condicionais fixas. A adaptação do comportamento por meio de "recompensas"
está associada a mecanismos de aprendizado ou utilidade (agente baseado em utilidade).

c) Errada. Um agente reativo simples é puramente reativo e não tenta maximizar a utilidade (isto
é, sua recompensa). A maximização da utilidade (imediata ou a longo prazo) é a característica
definidora de um agente baseado na utilidade, que é um tipo mais sofisticado. O agente
reflexivo simples apenas segue regras de ação-condição.

d) Correta. Esta alternativa captura a essência de cada agente conforme o modelo de IA:

- Agente Reflexivo Simples: Funciona a partir de um conjunto de regras condicionais (regras
condição-ação ou "SE... ENTÃO..."). Ele olha para o que está acontecendo no momento
("agora") e age.

- Agente Baseado em Objetivos: Não basta reagir, ele precisa saber aonde quer chegar. Por isso,
ele seleciona ações que, após ponderar as consequências futuras, o conduzirão a atingir estados
desejados (seu objetivo).

Gabarito: D

Agora percebam que simplesmente cumprir com um objetivo pode não ser o comportamento
mais desejado para um agente. Por exemplo, imagine que nosso robô aspirador de pó precise
limpar a cozinha, assim ele passeia pela sala, pelo quarto, pelo banheiro, dá uma volta na casa e
chega na cozinha. Ou seja, o agente cumprirá com seu objetivo, porém de forma pouco eficiente.

O que queremos então são agentes que não querem só “cumprir o objetivo”, mas fazer isso
do melhor jeito possível. Ou seja, queremos agentes baseados na utilidade.

A utilidade entra para dar uma nota a cada resultado (ou caminho) possível: quanto mais alta a
nota, melhor aquele estado do mundo para o agente e mais “feliz” ele será. Assim, em vez de

pegar qualquer rota que leve o nosso robô ao seu destino, o agente compara as rotas, e escolhe
a que maximiza a sua recompensa (utilidade).

Em resumo, agentes baseados na utilidade escolhem as ações que maximizam uma nota para
suas ações, buscando não só chegar ao objetivo, mas chegar do melhor jeito possível.

(Agentes baseados na utilidade, adaptado de Norvig, P., &amp; Russell, S. J.)

Saibam que todos os agentes vistos nessa seção podem melhorar seu desempenho se
adicionarmos a eles a capacidade de aprendizado, os tornando agentes com aprendizagem.

Isso porque, com essa capacidade, um agente “mediano” consegue aprender com a prática de
seus atos, melhorando sua capacidade ao longo do tempo.

Queremos adicionar essa capacidade porque o mundo real muda e, muitas vezes, é
desconhecido no começo. Aprender permite que o agente se adapte e, com o tempo, supere o
que sabia inicialmente.

Ocorre que, para um agente possuir a capacidade de aprendizado, precisamos reorganizar sua
estrutura interna, adicionando alguns elementos necessários para isso.

Primeiramente podemos “encapsular” nosso agente padrão em um elemento de desempenho.
Assim sendo, esse elemento realiza o funcionamento básico que já conhecemos do agente:
recebe percepções dos sensores e escolhe a próxima ação.

Na sequência devemos adicionar um elemento de aprendizado, pedaço responsável por
observar como a efetividade das ações, identificando o que pode ser melhorado e ajustando os
parâmetros do agente para que acerte mais no futuro.

Para o aprendizado saber se está indo na direção certa, precisamos de um elemento chamado
crítico: ele compara o que aconteceu com um padrão de desempenho (por exemplo, “o robô
aspirador chegou rápido?”) e fornece uma realimentação clara do quão bom foi o resultado.

Por fim, há o elemento gerador de problemas, que atua como “explorador”: ele sugere ações
um pouco diferentes do habitual para provocar experiências novas e informativas. Assim, o
agente não fica preso ao que já sabe e pode descobrir alternativas melhores não usuais no longo
prazo.

(Agentes com aprendizagem, adaptado de Norvig, P., &amp; Russell, S. J.)

## RESUMO

Marco Histórico da IA

- Workshop de 1956 em Dartmouth College, cunhou-se oficialmente pela primeira vez o
termo “Inteligência Artificial”, é considerado por muitos o marco inicial da IA.

Abordagem Simbólica (ou Lógica) na IA

- Predominância da IA simbólica nas décadas seguintes ao Dartmouth.
- Baseada em dedução e lógica matemática para simular processos de raciocínio humano.
- Representação do Conhecimento:
○ Lógica Proposicional:
■ Representa fatos como proposições verdadeiras ou falsas.
■ Utiliza operadores lógicos (disjunção, conjunção, condicional, bicondicional e

negação).
■ Limitações na representação de conceitos complexos (ex.: não permite

quantificar sobre indivíduos).
○ Lógica de Primeira Ordem:
■ Amplia a proposicional com variáveis, constantes, funções, predicados e

quantificadores.
■ Permite modelar domínios mais complexos (ex.: “para todo humano, ele é

mortal”).
○ Lógica Nebulosa (Fuzzy Logic):
■ Introduz o conceito de grau de pertinência (varia de 0 a 1), possibilitando

representações mais flexíveis.
■ Aplicada em casos onde a transição entre “pertence” e “não pertence” não

é nítida.

Ontologias

- Ferramenta de engenharia do conhecimento para organizar e estruturar o domínio.
- Define vocabulários consistentes, incluindo indivíduos, classes, propriedades e axiomas.

Sistemas Especialistas

- Sistemas projetados para simular a decisão de especialistas em domínios específicos.
- Estrutura composta por uma Base de Conhecimento (informações e regras) e um Motor de
Inferência (que aplica heurísticas para chegar a conclusões).
- Limitados à área para a qual foram desenvolvidos; não operam de forma abrangente em
diversos domínios.

Ciclos de Hype e Desilusão na História da IA

- Alternância entre períodos de otimismo (as “primaveras da IA”) e decepção (os “invernos
da IA”).
- Primeiro inverno ocorreu na década de 1970, quando as promessas iniciais não foram
cumpridas.
- Um segundo inverno surgiu no final dos anos 1980/início dos anos 1990, devido a
limitações tecnológicas e dificuldades práticas dos sistemas especialistas.
- Ressurgimento recente a partir de 2012 com o avanço do Deep Learning (ex.: AlexNet),
marcando uma nova primavera da IA.

Sistemas Multiagentes

- Definição: conjunto de múltiplos agentes que percebem, decidem e agem no ambiente,
interagindo para cumprir objetivos.
- Tipos de agentes:

○ Passivos: elementos do ambiente sem tomada de decisão.
○ Ativos simples: seguem regras diretas para metas imediatas.
○ Cognitivos: planejam, raciocinam e aprendem.
- Ambientes possíveis: virtuais/simulados; discretos (tempo/espaço em passos); contínuos
(variáveis mudam suavemente).
- Propriedades desejadas:

○ Visões locais: nenhum agente tem visão global completa.
○ Autonomia: decisões próprias (ao menos parciais).
○ Descentralização: ausência de controlador único; quando existe, assume-se agente
benevolente (coordena e é obedecido).
- Natureza das interações:

○ Agentes são autônomos, não soberanos; ações afetam uns aos outros.
○ Com objetivos compartilhados: problema central é coordenação.

==5460==

○ Com objetivos distintos/competitivos: surge raciocínio estratégico (prever decisões
alheias), levando a coordenação, negociação, conflitos por recursos e sincronização
(domínio da teoria dos jogos).
○ Critério: se outros “agentes” não têm metas próprias (são usados como
ferramentas/sensores), trata-se de problema de agente único; se adaptam às ações
alheias, é multiagente.

Arquiteturas

- Centralizada: um despachante com visão global coordena e distribui informações/ordens.

○ Vantagens: comunicação simples, dados uniformes, coordenação global facilitada,
monitoramento fácil.
○ Riscos: ponto único de falha/gargalo; menor escalabilidade; necessidade de
redundância e modos de degradação.
- Descentralizada: decisão local via comunicação entre vizinhos, sem chefe único.

○ Vantagens: robustez a falhas, decisões locais ágeis, melhor privacidade.
○ Desafios: protocolos de coordenação, possíveis inconsistências e soluções
subótimas globais.

Estruturas organizacionais

- Hierárquica: níveis com diferentes poderes de decisão; execução distribuída por camadas.
- Holônica: “holarquias” de subagentes autônomos formando “agentes líderes” compostos.

○ Prós: flexibilidade e reuso de subagentes.
○ Contras: necessidade de interfaces claras entre níveis.
- Coalizão: alianças temporárias para misões específicas; composição variável ao longo do
tempo.
- Equipes: grupos estáveis com objetivos e planejamento compartilhados, maior
interdependência, hierarquia interna e rotinas de coordenação; menor flexibilidade de
reorganização.

## MAPAS MENTAIS

==5460==

## QUESTÕES COMENTADAS

## Conceito de Inteligência Artificial

1.
(SELECON/Pref L do Rio Verde/Informática/2021) A correta definição do termo
“inteligência artificial” é tratar-se de:

a) uma tecnologia que interliga uma rede de computadores conectando dispositivos, pessoas
e até animais através da nuvem

b) uma tecnologia que visa facilitar o trabalho com marketing digital, ao mesmo tempo em
que traz mais eficiência e otimiza os processos dessa estratégia, aumentando as chances de
sucesso

c) um sistema de identificação que permite rastrear e categorizar itens ou dispositivos, por
meio da internet

d) uma ciência multidisciplinar que busca desenvolver e aplicar técnicas computacionais que
simulem o comportamento humano em atividades específicas

Comentários:

a) Errada. Internet das Coisas (Internet of Things - IoT) é uma rede de dispositivos físicos
conectados à internet para coleta e compartilhamento de informações. Aqui temos vários
exemplos de objetos do cotidiano que se conectem à internet para interagir entre si e com
sistemas externos a fim de oferecer funcionalidades inteligentes e automatizadas.

b) Errada. A alternativa se refere às vantagens da Inteligência Artificial especificadamente na área
de Marketing Digital.

c) Errada. A alternativa apresenta uma definição genérica de possíveis aplicações de Inteligência
Artificial, como categorizar itens por meio da internet..

d) Correta. Inteligência artificial (IA) é uma ciência multidisciplinar que combina conceitos de
várias áreas, como computação, matemática, psicologia, e neurociência, para desenvolver
sistemas que simulam aspectos do comportamento humano, como processamento de linguagem
natural, capacidade de compreensão, capacidade de raciocínio e capacidade de aprendizado,
por exemplo.

Gabarito: D

2.
(CEBRASPE (CESPE)/Ana Proc (DATAPREV)/DATAPREV/2023) A inteligência artificial é um
sistema com capacidade de ponderar, aprender e agir para resolver um problema complexo.

Comentários:

Confesso que é muito difícil marcar essa questão como errada no dia da prova, por estar escrita
de uma forma muito “bonitinha”. Porém, pensando mais a fundo, veremos que está de fato
errada.

A inteligência artificial é uma capacidade de um sistema não orgânico de “agir” ou “pensar” de
forma “semelhante a um humano” ou “com racionalidade”.

Gabarito: Errado

3.
(QUADRIX/CRO SC/Desenvolvimento de Sistemas/2023) A inteligência artificial refere-se a
um campo de conhecimento que não está associado à aprendizagem, uma vez que esta é uma
capacidade puramente humana; contudo, este campo está associado à linguagem e à
inteligência, ao raciocínio e à resolução de problemas.

Comentários:

A aprendizagem desempenha papel fundamental na Inteligência Artificial, principalmente na
subárea Machine Learning, visto que envolve a capacidade dos sistemas de adaptar seu
comportamento com base em informações, melhorando seu desempenho.

No mais, a questão acerta em relacionar à inteligência artificial a linguagem (necessária para
modelarmos bases de conhecimento e até para iteração dos humanos com os sistemas), o
raciocínio (capacidade da máquina em chegar a deduções lógicas a partir do conhecimento
armazenado e obtido da situação problema) e a resolução de problemas (este último acaba
sendo o fim último de sistemas propostos na abordagem fraca de IA).

Gabarito: Errada

## IA Simbólica (ou Lógica)

4.
(ADAPTADA - QUADRIX/CFO/Desenvolvimento de Sistemas de Informação/2017) São
exemplos de técnicas de inteligência computacional (...) a lógica nebulosa (fuzzy).

Comentários:

De fato, a lógica nebulosa pertence ao campo de estudo da inteligência artificial uma vez que
permite modelar e resolver problemas complexos cujas características principais são a imprecisão
e a incerteza.

Gabarito: Certa

5.
(CEBRASPE (CESPE)/Pesq A,I (INSA)/INSA/Desertificação/2025) A lógica fuzzy permite o
uso de diferentes valores dentro do intervalo entre 0 (falso) e 1 (verdadeiro), ao contrário da
lógica booleana, que assume somente dois valores, 0 ou 1.

Comentários:

A lógica nebulosa (fuzzy logic) difere da lógica booleana ao permitir que um elemento tenha
graus de pertinência intermediários entre 0 e 1, em vez de apenas pertencer ou não a um
conjunto de forma absoluta.

No contexto da modelagem de vulnerabilidade à desertificação, as variáveis como índices de
vegetação, tipos de solo e uso da terra raramente se apresentam de forma estritamente binária
(verdadeiro/falso).

Por exemplo, suponha que, em uma determinada área semiárida, foi medido um índice de
vegetação (NDVI) “baixo”, ao qual podemos atribuir um grau de pertinência de 0,4 (40%) ao
conjunto fuzzy “boa cobertura vegetal”, indicando que a vegetação está abaixo do ideal.

Gabarito: Certo

6.
(CESGRANRIO/Analista (BNDES)/Análise de Sistemas - Desenvolvimento/2024 ) A lógica
fuzzy é uma extensão da lógica booleana. Embora as técnicas de controle possam ser
implementadas por modelos matemáticos, as implementações baseadas na lógica fuzzy
apresentam um melhor desempenho. Qual é o aspecto fundamental da lógica fuzzy?

a) É ideal para sistemas em que as variáveis de entrada têm limites bem definidos e não variam.

b) Permite modelar situações em que os limites entre categorias são difusos e não nitidamente
definidos.

c) Requer que todas as regras sejam expressas em termos de “se-então” para funcionar
corretamente.

d) Utiliza sempre conjuntos crisp para representar valores de entrada e saída.

e) Utiliza somente funções lineares para representar a pertinência dos elementos aos conjuntos
fuzzy.

Comentários:

a) Errada. Esta alternativa descreve justamente o oposto do que a lógica fuzzy busca: em
sistemas com variáveis de entrada de limites bem definidos e estáveis, a lógica booleana
tradicional já é suficiente, não havendo necessidade de graus de pertinência nem de fronteiras
nebulosas.

b) Correta. O aspecto fundamental da lógica fuzzy é permitir que um elemento possa pertencer
simultaneamente a vários conjuntos, cada um com um determinado grau de pertinência entre 0 e
1, de modo a modelar situações em que as fronteiras entre categorias não são claramente
definidas.

c) Errada. Embora regras “se–então” sejam comuns em implementações fuzzy, não é
imprescindível que todas as regras sejam formuladas nesse formato para que a lógica fuzzy
funcione. O cerne da fuzzy está nos conjuntos nebulosos e nos graus de pertinência.

d) Errada. Em lógica fuzzy, justamente não se usam conjuntos crisp (“nítidos”) para representar
entradas e saídas, mas sim conjuntos fuzzy cujas fronteiras são graduais e permitem graus de
pertencimento intermediários.

e) Errada. A lógica fuzzy não exige que as funções de pertinência sejam sempre lineares. Quem
define a forma dessas funções é o modelador daquele domínio, que pode escolher funções
lineares, trapezoidais, gaussianas ou qualquer outra forma adequada para representar o grau de
pertencimento ao conjunto fuzzy.

Gabarito: Certo

7.
(CEBRASPE (CESPE) - Tecnologista Pleno 2 (CTI)/Tecnologias Habilitadoras/Inteligência
Artificial e Ciência de Dados/2024) A utilização da lógica nebulosa é adequada quando há
necessidade de uma variável fazer parte da solução de um problema.

==5460==

Comentários:

Confesso que sequer consegui entender o que o examinador pretendia com essa questão. De
qualquer forma, a utilização da lógica nebulosa é adequada quando há incertezas envolvidas
no problema.

Assim, ao contrário da lógica tradicional, que opera com fatos através de valores binários
(verdadeiro ou falso), a lógica nebulosa permite graus intermediários de verdade,
possibilitando a modelagem de problemas onde há imprecisão envolvida.

Gabarito: errada

8.
(CEBRASPE (CESPE)/CTI/ Inteligência Artificial e Ciência de Dados/2024) A representação
formal de ontologias é utilizada para que estas sejam consumidas por computadores, enquanto a
representação gráfica é utilizada para compreensão humana.

Comentários:

Embora a questão trate de ontologia, podemos resolvê-la de uma forma genérica, uma vez que
representações formais de conhecimento tem o intuito de serem precisas e rigorosas, evitando
ambiguidades para uma interpretação consistente dos dados por sistemas computacionais.
Vejamos uma representação formal, em Web Ontology Language (OWL), de um domínio com
livros e autores:

&lt;rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
xmlns:owl="http://www.w3.org/2002/07/owl#"&gt;
&lt;!-- Definição da Ontologia --&gt;
&lt;owl:Ontology rdf:about="http://example.org/ontologies/livrosAutores"/&gt;
&lt;!-- Classes --&gt;
&lt;owl:Class rdf:about="#Livro"/&gt;
&lt;owl:Class rdf:about="#Autor"/&gt;
&lt;!-- Propriedade de Objeto --&gt;
&lt;owl:ObjectProperty rdf:about="#escritoPor"&gt;
&lt;rdfs:domain rdf:resource="#Livro"/&gt;
&lt;rdfs:range rdf:resource="#Autor"/&gt;
&lt;/owl:ObjectProperty&gt;
&lt;/rdf:RDF&gt;

Complicado entender, não? Agora vejamos a representação gráfica dessa ontologia.

Muito mais fácil!

Gabarito: Certa

9.
(CEBRASPE (CESPE)/CTI/Inteligência Artificial e Ciência de Dados/2024) Ontologias
podem ser entendidas como aplicações criadas para simular a ação de especialistas humanos,
com o propósito de solucionar problemas específicos em um dado domínio.

Comentários:

A questão inverte o conceito de ontologia com o de sistema especialista.

Uma ontologia é uma representação formal e estruturada do conhecimento dentro de um
domínio específico. Ela descreve conceitos (ou entidades), relacionamentos e regras que definem
como esses conceitos estão inter-relacionados.

Já os sistemas especialistas são um tipo de sistema de inteligência artificial projetado para
simular o raciocínio e a tomada de decisão de um especialista humano em um domínio
específico, desenvolvidos para resolver problemas complexos e fornecer conselhos ou soluções
em áreas onde o conhecimento especializado é necessário.

Gabarito: Errada

10.
(IESES - Ass (CRC SC)/CRC SC/Jurídico/2015) Uma linguagem de programação é um
conjunto de convenções e regras que especificam como instruir o computador a executar
determinadas tarefas. Os sistemas que utilizam mecanismos da área da Inteligência Artificial,
como por exemplo, sistemas especialistas são denominados de:

a) Linguagem de montagem.

b) Linguagem orientada ao usuário.

c) Linguagem em nível de máquina.

d) Linguagem do conhecimento.

Comentários:

Que questão esquisita! Embora o enunciado tenha pedido para encontrarmos um sinônimo para
“sistemas especialistas”, acredito que a forma correta de se chegar na resposta era entendendo
qual conceito se encaixa, de alguma forma, no estudo desse tópico.

a) Errada. Linguagem de montagem é uma notação legível por humanos para código de máquina
(ou seja, Assembly). Ou seja, é uma notação feita para conseguirmos entender programas
escritos para microprocessadores ou microcontroladores em Assembly. Não tem nada a ver com
Inteligência Artificial e com sistemas especialistas.

b) Errada. Linguagens orientadas ao usuário são aquelas linguagens que facilitam a interação
entre o programador e o computador, proporcionando uma interface amigável. Um exemplo é
Python. Não há uma relação direta com sistemas especialistas.

c) Errada. Linguagem em nível de máquina é a forma mais baixa de programação, cujo código é
composto apenas por binários (sequências de 0s e 1s) que o processador pode entender
diretamente. Aqui também não há uma relação direta com sistemas especialistas.

d) Correta. Linguagem do conhecimento é a linguagem utilizada para representar o
conhecimento nas bases de conhecimento dos sistemas especialistas. Além disso, permitem aos
sistemas especialistas raciocinar sobre o conhecimento específico do seu domínio, usando regras,
fatos e inferências.

Gabarito: D

## IA como “agir com racionalidade”

11.
(CEBRASPE (CESPE)/TELEBRAS/Analista de Tecnologia da Informação/2026) Os agentes
de inteligência artificial são programas cujo objetivo é a coleta de informações com o intuito de
embasar a tomada de decisão de um usuário humano.

Comentários:

Na verdade, um agente de inteligência artificial é uma entidade que percebe o ambiente, toma
decisões e age por conta própria para alcançar objetivos, ou seja, ele tem autonomia para
executar ações, e não apenas para juntar dados. O agente pode até coletar informações como
parte do seu trabalho, mas isso é só uma das atividades possíveis. Ele também planeja, executa
tarefas, verifica resultados e interage com outros agentes. Além disso, a decisão final muitas
vezes é do próprio agente (especialmente nos agentes de IA modernos), e não obrigatoriamente
de um usuário humano.

Gabarito: Errado

12.
(CEBRASPE (CESPE)/PC PB/Desenvolvimento de Sistemas/2022) A capacidade de um
agente computacional de alterar o próprio comportamento com base em situações anteriores é
chamada de

a) autonomia.

b) cooperatividade.

c) inteligência.

d) aprendizagem.

e) proatividade.

Comentários:

Um agente inteligente tem como características adicionais ao agente racional a autonomia e a
aprendizagem. Dito isso, vamos explicar tais conceitos nas alternativas.

a) Errada. A autonomia refere-se à capacidade de um agente computacional de operar de forma
independente, sem necessidade de intervenção humana.

b) Errada. A cooperatividade refere-se à capacidade de um agente trabalhar em conjunto com
outros agentes para alcançar um objetivo comum.

c) Errada. Inteligência é um conceito genérico no campo da IA que abarca, de forma ampla, a
capacidade do agente se comportar racionalmente.

d) Correta. A aprendizagem refere-se à capacidade de um agente computacional de melhorar
seu desempenho ao longo do tempo com base em experiências passadas.

e) Errada. Proatividade é a capacidade de um agente computacional de tomar a iniciativa e agir
antecipadamente para alcançar seus objetivos ou lidar com situações, em vez de apenas reagir a
eventos conforme eles ocorrem.

Gabarito: D

13.
(CEBRASPE (CESPE)/BANRISUL/Desenvolvimento de software/2025) De acordo com os
conceitos que dão base à inteligência artificial (IA), existe uma entidade autônoma que se
caracteriza por perceber seu ambiente através de sensores, atuar sobre esse ambiente por meio
de atuadores, processar internamente dados percebidos e conhecimentos armazenados, e
selecionar ações específicas que maximizam sua medida de desempenho esperada, conforme
definido pela sequência de percepções e seu conhecimento interno. Essa entidade é definida na
IA como

a) processo de decisão sequencial.

b) rede neural.

c) agente racional.

d) algoritmo evolutivo.

e) modelagem cognitiva.

Comentários:

O enunciado descreve exatamente a definição de Agente Racional na Inteligência Artificial. Um
agente é definido por perceber o ambiente através de sensores e agir sobre ele através de
atuadores. O Agente Racional evolui esse conceito ao adicionar o requisito fundamental de
selecionar a ação que espera maximizar sua medida de desempenho. A IA foca em sistemas
capazes de "agir com racionalidade".

Gabarito: C

14.
(FGV/TCE PE/Auditoria de Tecnologia da Informação/2025) No campo da inteligência
artificial, os agentes desempenham papel central como entidades capazes de perceber o
ambiente, tomar decisões e agir com base em metas definidas. Compreender sua estrutura e
tipos é fundamental para o desenvolvimento de sistemas inteligentes.

Assinale a afirmativa que descreve corretamente uma característica de agentes de inteligência
artificial.

a) Um agente reativo simples armazena historicamente os estados anteriores do ambiente para
prever ações futuras com base em aprendizado profundo.

b) Agentes baseados em objetivos não consideram o estado atual do ambiente, mas tomam
decisões aleatórias até alcançarem a meta desejada.

c) Agentes baseados em utilidade avaliam diferentes cursos de ação e escolhem aquele que
maximiza um valor numérico associado à satisfação da meta.

d) Um agente só pode ser considerado inteligente se tiver consciência própria e habilidades
linguísticas semelhantes às humanas.

e) Agentes de IA operam exclusivamente em ambientes totalmente observáveis e
determinísticos, pois exigem informações completas para funcionar.

Comentários:

a) Errada. O agente reativo simples (ou reflexivo simples) é o tipo mais básico de agente. Ele age
apenas com base na percepção atual do ambiente, utilizando regras condicionais ("SE...
ENTÃO..."). Ele não lembra do passado e, consequentemente, não armazena historicamente

estados anteriores do ambiente. A capacidade de guardar em memória a parte do mundo que
não pode perceber é uma característica do agente reativo baseado em modelo.

b) Errada. Agentes baseados em objetivos são definidos pela sua necessidade de saber o que
querem atingir (seu objetivo). Eles precisam ponderar o que acontecerá no futuro, considerando
as possíveis ações, para selecionar aquelas que levarão ao objetivo desejado. Portanto, eles
consideram o estado atual e planejam as ações, e não tomam decisões aleatórias.

c) Correta. Um agente baseado em utilidade não quer apenas cumprir o objetivo, ele quer fazer
isso do melhor jeito possível. A utilidade serve para dar uma "nota" (um valor numérico) a cada
resultado ou caminho possível. Assim, o agente compara os diferentes cursos de ação e escolhe
aquele que maximiza essa nota (utilidade) total.

d) Errada. A Inteligência Artificial (IA) tem diversas abordagens. Uma delas foca em "agir com
racionalidade", que é a capacidade de tomar a decisão certa, independentemente de como um
humano agiria. O conceito de agente racional é central na IA, sendo que, um agente pode ser
considerado inteligente (agente inteligente) se tiver a capacidade de aprendizado e autonomia,
sem exigir que ele tenha consciência própria ou habilidades linguísticas semelhantes às humanas.

e) Errada. Um agente reativo simples exige que o ambiente seja totalmente observável. No
entanto, a IA evoluiu justamente para lidar com a complexidade do mundo real. Agentes mais
avançados (como o agente reativo baseado em modelo) foram desenvolvidos para lidar com
ambientes parcialmente observáveis (onde há informações escondidas) usando memória e
modelos internos.

Gabarito: C

## LISTA DE QUESTÕES

## Conceito de Inteligência Artificial

1.
(SELECON/Pref L do Rio Verde/Informática/2021) A correta definição do termo
“inteligência artificial” é tratar-se de:

a) uma tecnologia que interliga uma rede de computadores conectando dispositivos, pessoas
e até animais através da nuvem

b) uma tecnologia que visa facilitar o trabalho com marketing digital, ao mesmo tempo em
que traz mais eficiência e otimiza os processos dessa estratégia, aumentando as chances de
sucesso

c) um sistema de identificação que permite rastrear e categorizar itens ou dispositivos, por
meio da internet

d) uma ciência multidisciplinar que busca desenvolver e aplicar técnicas computacionais que
simulem o comportamento humano em atividades específicas

2.
(CEBRASPE (CESPE)/Ana Proc (DATAPREV)/DATAPREV/2023) A inteligência artificial é um
sistema com capacidade de ponderar, aprender e agir para resolver um problema complexo.

3.
(QUADRIX/CRO SC/Desenvolvimento de Sistemas/2023) A inteligência artificial refere-se a
um campo de conhecimento que não está associado à aprendizagem, uma vez que esta é uma
capacidade puramente humana; contudo, este campo está associado à linguagem e à
inteligência, ao raciocínio e à resolução de problemas.

## IA Simbólica (ou Lógica)

4.
(ADAPTADA - QUADRIX/CFO/Desenvolvimento de Sistemas de Informação/2017) São
exemplos de técnicas de inteligência computacional (...) a lógica nebulosa (fuzzy).

5.

### (CEBRASPE

(CESPE)/Pesq
A,I
(INSA)/INSA/Desertificação/2025)
No
estudo
de
modelagem de vulnerabilidade à desertificação de determinada região semiárida do Nordeste
brasileiro, foram utilizadas as seguintes variáveis, que serão analisadas por meio da lógica
booleana ou da lógica fuzzy: índices de vegetação derivados de imagens de satélite, tipos
predominantes de solos e uso da terra.

Tendo em vista essas informações, julgue o item a seguir, no que se refere à modelagem
ambiental.

A lógica fuzzy permite o uso de diferentes valores dentro do intervalo entre 0 (falso) e 1
(verdadeiro), ao contrário da lógica booleana, que assume somente dois valores, 0 ou 1.

6.
(CESGRANRIO/Analista (BNDES)/Análise de Sistemas - Desenvolvimento/2024 ) A lógica
fuzzy é uma extensão da lógica booleana. Embora as técnicas de controle possam ser
implementadas por modelos matemáticos, as implementações baseadas na lógica fuzzy
apresentam um melhor desempenho. Qual é o aspecto fundamental da lógica fuzzy?

a) É ideal para sistemas em que as variáveis de entrada têm limites bem definidos e não variam.

b) Permite modelar situações em que os limites entre categorias são difusos e não nitidamente
definidos.

c) Requer que todas as regras sejam expressas em termos de “se-então” para funcionar
corretamente.

d) Utiliza sempre conjuntos crisp para representar valores de entrada e saída.

e) Utiliza somente funções lineares para representar a pertinência dos elementos aos conjuntos
fuzzy.

7.
(CEBRASPE (CESPE) - Tecnologista Pleno 2 (CTI)/Tecnologias Habilitadoras/Inteligência
Artificial e Ciência de Dados/2024) A utilização da lógica nebulosa é adequada quando há
necessidade de uma variável fazer parte da solução de um problema.

8.
(CEBRASPE (CESPE)/CTI/ Inteligência Artificial e Ciência de Dados/2024) A representação
formal de ontologias é utilizada para que estas sejam consumidas por computadores, enquanto a
representação gráfica é utilizada para compreensão humana.

9.
(CEBRASPE (CESPE)/CTI/Inteligência Artificial e Ciência de Dados/2024) Ontologias
podem ser entendidas como aplicações criadas para simular a ação de especialistas humanos,
com o propósito de solucionar problemas específicos em um dado domínio.

10.
(IESES - Ass (CRC SC)/CRC SC/Jurídico/2015) Uma linguagem de programação é um
conjunto de convenções e regras que especificam como instruir o computador a executar
determinadas tarefas. Os sistemas que utilizam mecanismos da área da Inteligência Artificial,
como por exemplo, sistemas especialistas são denominados de:

a) Linguagem de montagem.

b) Linguagem orientada ao usuário.

c) Linguagem em nível de máquina.

d) Linguagem do conhecimento.

## IA como “agir com racionalidade”

11.
(CEBRASPE (CESPE)/TELEBRAS/Analista de Tecnologia da Informação/2026) Os agentes
de inteligência artificial são programas cujo objetivo é a coleta de informações com o intuito de
embasar a tomada de decisão de um usuário humano.

12.
(CEBRASPE (CESPE)/PC PB/Desenvolvimento de Sistemas/2022) A capacidade de um
agente computacional de alterar o próprio comportamento com base em situações anteriores é
chamada de

a) autonomia.

b) cooperatividade.

c) inteligência.

d) aprendizagem.

e) proatividade.

==5460==

13.
(CEBRASPE (CESPE)/BANRISUL/Desenvolvimento de software/2025) De acordo com os
conceitos que dão base à inteligência artificial (IA), existe uma entidade autônoma que se
caracteriza por perceber seu ambiente através de sensores, atuar sobre esse ambiente por meio
de atuadores, processar internamente dados percebidos e conhecimentos armazenados, e
selecionar ações específicas que maximizam sua medida de desempenho esperada, conforme
definido pela sequência de percepções e seu conhecimento interno. Essa entidade é definida na
IA como

a) processo de decisão sequencial.

b) rede neural.

c) agente racional.

d) algoritmo evolutivo.

e) modelagem cognitiva.

14.
(FGV/TCE PE/Auditoria de Tecnologia da Informação/2025) No campo da inteligência
artificial, os agentes desempenham papel central como entidades capazes de perceber o
ambiente, tomar decisões e agir com base em metas definidas. Compreender sua estrutura e
tipos é fundamental para o desenvolvimento de sistemas inteligentes.

Assinale a afirmativa que descreve corretamente uma característica de agentes de inteligência
artificial.

a) Um agente reativo simples armazena historicamente os estados anteriores do ambiente para
prever ações futuras com base em aprendizado profundo.

b) Agentes baseados em objetivos não consideram o estado atual do ambiente, mas tomam
decisões aleatórias até alcançarem a meta desejada.

c) Agentes baseados em utilidade avaliam diferentes cursos de ação e escolhem aquele que
maximiza um valor numérico associado à satisfação da meta.

d) Um agente só pode ser considerado inteligente se tiver consciência própria e habilidades
linguísticas semelhantes às humanas.

e) Agentes de IA operam exclusivamente em ambientes totalmente observáveis e
determinísticos, pois exigem informações completas para funcionar.

## GABARITO

1. D
2. Errada
3. Errada
4. Certa
5. Certo
6. Certo
7. Errada
8. Certa
9. Errada
10.D
11.Errada
12.D
13.C
14.C

## Filosofia e Ética da Inteligência Artificial

### Tipos de Capacidades de IA

Ao longo dos anos, os pesquisadores enfrentaram questões éticas e filosóficas que motivaram o
avanço do tema, estabelecendo conceitos e definições que acabaram se consolidando.

Pois bem, enfrentando a questão “máquinas podem pensar?", o filósofo John Searle introduziu
os conceitos de IA fraca (ou IA estreita, IA restrita, sendo, em inglês, weak AI ou narrow AI) e IA
forte (em inglês, strong AI).

Segundo Searle, na abordagem IA fraca, o sistema agiria como se fosse uma mente
inteligente, porém estando apto a realizar apenas um conjunto específico de tarefas.

Assim, tal sistema estaria, na realidade, simulando o raciocínio humano, sendo que sua
capacidade de execução estaria restrita a determinadas atividades, como jogar xadrez ou
reconhecer imagens. Um exemplo prático de robô que atua nessa abordagem é o AlphaGo1 do
Google, quase imbatível no jogo de tabuleiro Go.

IA especializada ou IA restrita se trata de um tipo de sistema de IA focado em

tarefas definidas para resolver um problema específico.

Em contraste, na abordagem original estabelecida por Searle para IA forte, o sistema atuaria
como uma mente inteligente racional, tendo um estado cognitivo de fato. Ou seja, para além
de apenas simular o raciocínio humano, o sistema teria uma mente, com crenças, pensamentos e
consciência. Por curiosidade, essa é aquela IA do filme “Ex Machina"2.

2 Filme recomendadíssimo!

1 Existe até um documentário sobre a construção dessa IA no YouTube, que recomendo ver no seu tempo livre de

Pois bem, ao longo do tempo a definição original de IA forte migrou para IA Geral (em inglês,
General AI ou Artificial General Intelligence - AGI) ou IA em Nível Humano (em inglês,
human-level AI), sendo que, atualmente, tais termos são usados de forma intercambiável.

Nessa nova roupagem, para ser uma IA forte (ou IA Geral, ou IA em Nível Humano) o sistema
deveria ser capaz de atuar em uma grande variedade de tarefas, repetidas ou inéditas, sendo
capaz, portanto, de entender, aprender e aplicar conhecimentos de forma igual ou similar aos
humanos. Ou seja, a máquina seria capaz de aprender a fazer qualquer coisa que um ser humano
é capaz.

Vejam que, para essa classificação, não é mais necessário que IA tenha consciência, mas apenas
que seja capaz de agir de forma genérica, como um humano. Há quem diga que essa é a IA
“HAL 9000" do filme “2001: Uma Odisseia no Espaço"3.

Feita essa explicação teórica, vamos ver agora uma definição técnica de IA geral (AGI).

A IA geral (AGI) se trata do tipo de sistema de IA que aborda uma ampla gama

de tarefas com um nível satisfatório de desempenho.

3 Esse filme não gosto não kkkkk e nada de mandar mensagem brigando com o prof hein kkkkkk

(CEBRASPE (CESPE)/ AAAJ /Informática Banco de Dados/2022) A inteligência artificial
geralmente se enquadra em duas categorias abrangentes: narrow AI, às vezes referida como
weak AI, que é uma simulação da inteligência humana e opera dentro de um contexto limitado; e
AGI (artificial general intelligence), que é uma máquina com inteligência geral e, assim como um
ser humano, pode aplicar essa inteligência para resolver qualquer problema.

Comentários:

A Narrow AI é projetada para resolver problemas específicos e realizar tarefas determinadas,
como reconhecimento de voz, diagnóstico médico, ou recomendações de produtos., de outra
forma a Inteligência Artificial Geral é capaz de resolver uma ampla gama de problemas e executar
tarefas em diferentes domínios, demonstrando um nível de adaptabilidade e raciocínio
semelhante ao de um ser humano.

Gabarito: Correta

Continuando, a Superinteligência Artificial (em inglês, Artificial Superintelligence - ASI) se trata
de uma evolução da Artificial General Intelligence, visto que prevê um intelecto que exceda em

muito o desempenho cognitivo dos humanos em praticamente todos os domínios de
interesse.

Assim, a superinteligência seria uma forma de inteligência artificial que supera a inteligência
humana em todos os aspectos, incluindo criatividade, resolução de problemas, raciocínio lógico,
habilidades sociais, e até mesmo sabedoria e ética.

Dado nosso conhecimento de evolução das espécies, é natural que a ideia de uma inteligência
superior à nossa traga preocupações existenciais.

Um exemplo que reflete bem isso é o gorila problem, em que a literatura da área relembra em
como o desmembramento da raça humana da dos gorilas gerou um problema para eles: hoje,
por sermos mais intelectualmente evoluídos, poderíamos simplesmente extinguir os gorilas se
quiséssemos, e eles nada poderiam fazer a respeito. O que não garante que o mesmo ocorra
entre nossa raça e a superinteligência artificial?

De todo modo, o exemplo na ficção para esse tipo de IA seria o Brainiac, dos quadrinhos da DC.

(FGV/AFFC (STN)/STN/Tecnologia da Informação/Transformação Digital/2024) No estudo
avançado da Inteligência Artificial (IA), pesquisadores e desenvolvedores exploram as nuances e

os potenciais futuros da tecnologia, distinguindo entre Inteligência Artificial Estreita (ANI), Geral
(AGI) e Superinteligente (ASI). Cada uma dessas categorias representa um marco distinto no
desenvolvimento da IA, com implicações profundas para a sociedade, economia e filosofia.

Acerca do tema, avalie se as seguintes afirmações são verdadeiras (V) ou falsas (F).

( ) ANI, embora seja a forma mais comum de IA atualmente, possui capacidades de aprendizado
e adaptação que permitem a transição natural para AGI sem intervenção humana direta, já que
se baseia em algoritmos que podem evoluir autonomamente.

( ) AGI representa um ponto de inflexão teórico na pesquisa de IA, onde máquinas adquirem a
habilidade de realizar qualquer tarefa cognitiva humana, incluindo aquelas que exigem
compreensão emocional e social, algo que ainda não foi alcançado devido às limitações atuais da
tecnologia e compreensão da consciência.

( ) ASI, como conceito, introduz a possibilidade de uma IA com capacidades que transcendem
amplamente a inteligência humana, incluindo a habilidade de gerar inovações científicas e
tecnológicas de forma independente, levantando preocupações éticas e existenciais sobre o
controle humano sobre tais entidades.

As afirmações são, respectivamente,

a) F – V – V.

b) V – F – F.

c) V – V – F.

d) F – F – V.

e) F – V – F.

Comentários:

I. Falsa. A ANI (Inteligência Artificial Estreita ou Weak AI) é, de fato, a forma mais comum de IA
atualmente, pois é projetada para executar tarefas específicas (como reconhecimento de voz,
diagnóstico médico, etc.). Contudo, ela não possui capacidades intrínsecas que permitam uma
transição natural para AGI sem intervenção humana. Muito pelo contrário, os algoritmos da ANI
são incapazes de evoluir autonomamente para uma inteligência geral que realize qualquer tarefa
cognitiva. Esse é um passo muito desejado e difícil de ser obtido pela sociedade humana.

II. Verdadeira. A AGI (Inteligência Artificial Geral) representa justamente o ponto de inflexão
teórico onde uma máquina teria a habilidade de realizar qualquer tarefa cognitiva humana –
incluindo aquelas que envolvem compreensão emocional e social. Essa capacidade ainda não foi
alcançada, justamente por conta das limitações atuais da tecnologia e do entendimento da
consciência.

III. Verdadeira. A ASI (Superinteligência Artificial) é o conceito de uma IA cuja inteligência excede
em muito a humana em praticamente todos os aspectos, inclusive na geração independente de
inovações científicas e tecnológicas. Essa perspectiva levanta, de fato, sérias preocupações éticas

e existenciais sobre o controle que os humanos teriam sobre tais sistemas, como, por exemplo, o
“Gorila Problem".

Gabarito: A

### Teste de Turing

O matemático Alan Turing rejeitou abordar a questão filosófica clássica “máquinas podem
pensar?", preferindo analisar a inteligência artificial por uma abordagem mais pragmática,
através de um teste de comportamento.

Assim, Turing propôs que não devemos focar se as máquinas são capazes de pensar, mas sim se
elas são capazes de se comportar como um humano.

Dessa forma, criou o Teste de Turing (originalmente Turing nomeou o teste de “jogo da
imitação"4), em que um humano, após interagir com um interlocutor escondido através de
mensagens por determinado tempo, deveria decidir se estava conversando com uma máquina ou
pessoa. A máquina passaria no teste caso conseguisse enganar o interlocutor.

Finalmente, segundo Turing, para satisfazer seu teste o computador precisaria de, pelo menos,
essas capacidades:

4 Inclusive é o nome do filme sobre sua história. Fica aí mais uma recomendação para o descanso!

==5460==

- Processamento de Linguagem Natural (Natural Language Processing), isto é,
capacidade em compreender, interpretar e responder a comandos ou perguntas feitas em
linguagem humana;

- Representação do Conhecimento (Knowledge Representation), isto é, capacidade de
armazenar e organizar informações para que possa utilizá-las;

- Raciocínio Automatizado (Automated Reasoning), isto é, capacidade em usar regras e
lógica para deduzir novas informações a partir do seu conhecimento armazenado; e

- Aprendizado de Máquina (Machine Learning), isto é, capacidade de aprender e melhorar
seu desempenho ao longo do tempo.

(IBFC/AJ TRF5/TRF 5/Apoio Especializado/Análise de Dados/2024) Teste de Turing é um
conceito fundamental na história da inteligência artificial (IA), proposto pelo matemático e lógico
Alan Turing em 1950. Ele é frequentemente discutido em relação à capacidade das máquinas de
exibir comportamento inteligente semelhante ao dos seres humanos. Diante do exposto,
assinale a alternativa que apresenta quais são as principais capacidades para um computador
passar no teste de Turing.

a) Apenas processamento de linguagem natural e robótica

b) Visão computacional e conhecimento

c)
Processamento de linguagem natural, representação de conhecimento, raciocínio
automatizado e aprendizado de máquina

d) Processamento de linguagem natural e visão computacional

Comentários:

Segundo Turing, para satisfazer seu teste o computador precisaria de, pelo menos, essas
capacidades:

Processamento de Linguagem Natural (Natural Language Processing), isto é, capacidade em
compreender, interpretar e responder a comandos ou perguntas feitas em linguagem humana;

Representação do Conhecimento (Knowledge Representation), isto é, capacidade de armazenar e
organizar informações para que possa utilizá-las;

Raciocínio Automatizado (Automated Reasoning), isto é, capacidade em usar regras e lógica para
deduzir novas informações a partir do seu conhecimento armazenado; e

Aprendizado de Máquina (Machine Learning), isto é, capacidade de aprender e melhorar seu
desempenho ao longo do tempo.

Gabarito: C

(ADAPTADA - FGV/Pref BH/Ciência da Computação/2024) Relacione os termos de Inteligência
Artificial (IA) às suas respectivas definições.

1. IA fraca

2. IA forte

3. (...)

4. Teste de Turing

( ) É capaz de resolver uma única tarefa, pode automatizar tarefas demoradas e analisar dados de
maneiras que os humanos às vezes não podem.

( ) ...

( ) É capaz de resolver uma gama extensa e arbitrária de tarefas, incluindo aquelas que são
novas, e executá-las com eficácia comparável à de um ser humano.

( ) É uma medida de inteligência de uma máquina, onde se a máquina pode se passar por um
humano em uma conversa de texto, ela passa no teste.

Comentários:

Vejamos como se relacionam as alternativas e as definições:

(1. IA fraca) É capaz de resolver uma única tarefa, pode automatizar tarefas demoradas e analisar
dados de maneiras que os humanos às vezes não podem.

(2. IA forte) É capaz de resolver uma gama extensa e arbitrária de tarefas, incluindo aquelas que
são novas, e executá-las com eficácia comparável à de um ser humano.

(4. Teste de Turing) É uma medida de inteligência de uma máquina, onde se a máquina pode se
passar por um humano em uma conversa de texto, ela passa no teste.

Gabarito: 1, 2 e 4

Anos depois, alguns pesquisadores acharam o teste de Turing fraco demais justamente por
desprezar o mundo físico. Para esses profissionais, a inteligência genuína envolveria também agir
no mundo, manipulando objetos e percebendo o ambiente.

Por isso propuseram o Teste de Turing Total, que adiciona uma exigência: a máquina (que agora
se trata de um robô) precisa também ser capaz de interagir fisicamente com objetos e pessoas
reais.

Assim, para passar nessa versão expandida, o robô precisaria de duas capacidades adicionais:

- Visão computacional e reconhecimento de fala: para perceber o mundo (ver objetos,
pessoas, ver gestos, ouvir sons e interpretar fala);

- Robótica: para agir no mundo (manipular objetos com braços/garras, locomover-se, etc.).

(FGV/CPRM/Análise e Desenvolvimento de Sistemas/2025) O Teste de Turing, um importante
referencial conceitual, foi o primeiro critério formal para se discutir inteligência em máquinas.
Outros pesquisadores propuseram uma extensão dessa avaliação, denominada Teste de Turing
Total.

Nesse contexto, a característica exclusiva do Teste de Turing Total frente à proposta original do
Teste de Turing é

a) o aprendizado de máquina.

b) o processamento de linguagem natural.

c) o raciocínio automatizado.

d) a representação de conhecimento.

e) a robótica.

Comentários:

Além das exigências originais do Teste de Turing, Processamento de Linguagem Natural,
Representação do Conhecimento, Raciocínio Automatizado e Aprendizado de Máquina, o Teste
de Turing Total também exige: Visão computacional, Reconhecimento de fala e Robótica.

Gabarito: E

### Estágios de Desenvolvimento da IA

Há na literatura quem categorize a IA em estágios de desenvolvimento que vão desde sistemas
com funcionalidades muito limitadas até formas teóricas avançadas que, por enquanto, não
existem na prática.

O primeiro estágio de desenvolvimento se trata da IA de Máquina Reativa, sistemas
rudimentares que não possuem a capacidade de armazenar informações de eventos passados,
operando apenas com os dados disponíveis no momento da tomada de decisão. Ou seja, não
retém conhecimento, possuindo apenas capacidade raciocínio.

Como exemplo mais notável dessa categoria temos o IBM Deep Blue, supercomputador que
venceu o campeão mundial de xadrez, Garry Kasparov, na década de 1990.

No segundo estágio está a IA de Memória Limitada, sistemas capazes de reter informações
por um período limitado para melhorar as decisões no curto prazo. Assim, conforme coleta

mais dados, o seu desempenho tende a melhorar, já que pode utilizar essas informações
passadas para prever resultados e ajustar suas ações.

Aqui temos como exemplos plataformas bem conhecidas, como ChatGPT, Siri, Alexa etc.

No terceiro estágio temos um tipo interessante, a IA com Teoria da Mente, que, teoricamente,
conseguiria compreender e interpretar pensamentos, intenções, emoções e crenças dos seres
humanos. Nesse nível de habilidade, a IA poderia adaptar suas interações de maneira mais
humana, levando em conta as motivações e sentimentos das pessoas com quem interage.

Saibam que, embora pesquisas sobre o tema estejam em andamento – especialmente na área
conhecida como “Emotion AI" –, essa forma de IA ainda não foi plenamente realizada e
permanece em estágio experimental.

O quarto e último estágio apresenta uma forma mais avançada, a IA Autoconsciente. Nesse
nível de desenvolvimento, a inteligência artificial teria autoconsciência, como nós humanos.
Ou seja, com capacidade de entender seus próprios estados internos, emoções, necessidades e,
potencialmente, desenvolver uma “personalidade".

(CEBRASPE (CESPE)/Ana TI (DATAPREV)/DATAPREV/Desenvolvimento de software/2023) De
acordo com os conceitos de inteligência artificial, as máquinas reativas têm a capacidade
compreender os seres humanos, entendendo seus estados mentais.

Comentários:

Máquinas reativas são sistemas de IA que operam apenas com os dados do momento, sem
capacidade de armazenar informações ou aprender com experiências passadas. Em outras
palavras, elas processam informações de maneira imediata e reagem a estímulos atuais.

Vejam que o enunciado apresenta a definição de IA com Teoria da Mente, estágio que permitiria
a uma máquina entender emoções humanas para moldar suas interações conosco.

Gabarito: Errado

### IA Explicável e IA Interpretável

Mesmo que um sistema de inteligência artificial entregue uma resposta válida, caso ele não
demonstre como chegou naquele resultado, pode ser que, em determinadas situações, somente
a conclusão seja insuficiente para satisfazer as necessidades humanas.

Segundo a literatura, sistemas que apenas informam o resultado da operação, sem demonstrar
quais decisões foram tomadas no processo, podem, além de sofrer de falta de confiabilidade,
visto a falta de auditabilidade, simplesmente serem inúteis na prática.

Por exemplo, em países onde a legislação bancária exige a explicação do porquê um empréstimo
foi recusado, sistemas de inteligência que informam aos gerentes de crédito apenas que devem
negar o pedido, sem maiores explicações, são ilegais5.

Devido a isso, surgiram os conceito de IA Explicável (ou IA Transparente, em inglês,
Explainable AI - XAI - ou Transparent AI) e também de modelos interpretáveis de
Aprendizado de Máquina (em inglês, Interpretable Machine Learning, iML) que orientam a
criação de modelos capazes de explicar e justificar suas decisões e resultados de forma
compreensível para humanos.

5 A General Data Protection Regulation (GDPR) da União Europeia exige que as decisões tomadas por sistemas
automatizados sejam explicáveis.

Assim, a ideia aqui é evitar técnicas "caixa preta", isto é, produzir modelos extremamente
complexos e sofisticados que fornecem resultados incompreensíveis (mesmo que corretos).

(CEBRASPE (CESPE)/TCU/Controle Externo/2026) Explicabilidade e interpretabilidade tratam do
desafio de entender como os modelos de aprendizado de máquina funcionam, devido
especialmente à natureza de “caixa-preta" de muitos modelos, que pode tornar difícil ou
impossível a capacidade de explicar uma previsão ou decisão.

Comentários:

Explicabilidade (Explainable AI - XAI) e interpretabilidade (Interpretable Machine Learning - iML)
tratam justamente do desafio de compreender como os modelos de aprendizado de máquina
chegam aos seus resultados. Modelos extremamente complexos funcionam como "caixa-preta",
fornecendo respostas sem demonstrar quais decisões foram tomadas no processo, o que pode
comprometer a confiabilidade, a auditabilidade e até a legalidade de seu uso em contextos
como o bancário.

Gabarito: Certo

Parte da literatura considera que os conceitos de explicabilidade e interpretabilidade são
sinônimos, não havendo, portanto, diferenciação entre eles. Porém, outra parte entende que há
aspectos que delimitam o escopo de cada um.

Para essa segunda corrente, a diferença pode ser resumida da seguinte forma:

Interpretabilidade está relacionada à capacidade de compreender como o modelo funciona
por dentro, ou seja, entender sua estrutura, seus parâmetros e a lógica que ele aplica para
chegar a uma resposta.

Explicabilidade, por sua vez, está ligada à capacidade de justificar por que o modelo
produziu uma determinada saída diante de uma entrada específica.

Em resumo, a interpretabilidade foca no modelo (é interna), enquanto a explicabilidade foca na
predição (é externa).

Agora considerem o modelo de Machine
Learning “Árvore de Decisão" ao lado, que
avalia se uma pessoa é “gente boa" ou não de
acordo com suas preferências alimentares.

Esse é um exemplo clássico de modelo
altamente interpretável, pois sua estrutura
interna é totalmente transparente: conseguimos
visualizar as regras de decisão que ele utiliza.
Nesse caso, a regra é simples, “se a pessoa
gosta de sorvete ou gosta de lasanha, então é
classificada como 'gente boa'".

A explicabilidade, por outro lado, só faz sentido
quando o modelo gera uma predição concreta, já que seu objetivo é justificar essa saída
específica. Portanto, precisamos de um dado de entrada.

Suponham, então, uma pessoa que não gosta de sorvete e nem de lasanha. Nesse cenário, o
modelo retornará a classificação "aperreadora".

A explicação para essa saída poderia ser algo como “para a pessoa ser gente boa, é necessário
que goste de alguma das comidas, mas como essa não gosta de nenhuma, foi classificada como
'aperreadora'".

Percebam que nesse caso específico a interpretabilidade e a explicabilidade se reforçaram
mutuamente em certa medida, visto que foi justamente por o modelo ser interpretável (estrutura
interna visível) que conseguimos produzir uma explicação clara e fiel para a sua saída.

Porém, em modelos mais "caixa-preta", como as complexas redes neurais profundas, é bem mais
desafiador obtermos esses resultados, sendo o contexto que utilizamos técnicas de explicação e
interpretação como LIME, SHAPE e PDP.

(CEBRASPE (CESPE)/TCU/Controle Externo/2026) Explicabilidade diz respeito às propriedades
internas do modelo de IA que permitem compreender como ele funciona.

Comentários:

A questão inverte os conceitos. As propriedades internas do modelo, que permitem
compreender como ele funciona (estrutura, parâmetros e lógica aplicada), referem-se à
interpretabilidade (foco no modelo, é interna). A explicabilidade, por sua vez, está ligada à
capacidade de justificar por que o modelo produziu uma determinada saída diante de uma
entrada específica, sendo focada na predição (é externa).

Gabarito: Errado

Para finalizar, vamos apresentar uma definição técnica de explicabilidade de IA:

A explicabilidade se trata da propriedade de um sistema de IA que demonstra

sua capacidade de expressar os fatores importantes que influenciam seus

resultados de forma que os seres humanos possam entender.

Segundo a literatura, boas explicações devem possuir várias propriedades:

1. Deve ser compreensível e convincente para o usuário;

2. Deve refletir com precisão o raciocínio do sistema;

3. Deve ser completa, isto é, deve cobrir todos os aspectos relevantes do processo de
decisão; e

4. Deve ser específica, ou seja, diferentes usuários com diferentes condições devem receber
explicações diferentes.

(FGV/CAM DEP/Consultor Legislativo/Área XIV/2024) No contexto da Inteligência Artificial (IA),
assinale a opção que define corretamente o termo “explicabilidade da IA" ou “Inteligência
Artificial explicável" e indica por que ele é importante para a regulação do tema.

a) Representa a capacidade de uma IA de realizar tarefas sem quaisquer ações e intervenções
humanas. Com base em processos algorítmicos, a IA vem ganhando autonomia decisória e
mostrando-se consciente sobre o desenvolvimento das novas tecnologias.

b) Representa a habilidade de uma IA de explicar suas decisões em termos tecnicamente
compreensíveis, a partir de uma única linguagem desenvolvida por campos neurais.

c) Representa um conjunto de técnicas de aprendizado de máquina que permite que os usuários
humanos entendam, possam confiar e gerenciem com eficácia a geração emergente de parceiros
com inteligência artificial.

d) Representa a precisão de uma IA em prever resultados baseados em dados qualitativos e
quantitativos.

e) Representa a capacidade de uma IA de passar no Teste de Turing, sendo essencial para sua
aceitação social.

Comentários:

a) Errada. A alternativa descreve o conceito de autonomia de IA.

b) Errada. Nessa alternativa o examinador tentou enrolar o aluno colocando um conceito correto,
de que a “Explicabilidade da IA" se refere a capacidade de tornar suas decisões e processos
compreensíveis para os humanos, porém na sequência faz uma afirmação sem sentido “a partir
de uma única linguagem desenvolvida por campos neurais", tornando a alternativa errada.

c) Correta. Segundo a IBM (https://www.ibm.com/br-pt/topics/explainable-ai), a inteligência
artificial explicável (XAI) é um conjunto de processos e métodos que permite aos usuários
humanos compreender e confiar nos resultados e na saída criados por algoritmos de machine
learning.

d) Errada. A alternativa se relaciona a performance e eficácia da IA, e não à explicabilidade.

e) Errada. O Teste de Turing é uma avaliação da capacidade de uma IA de simular
comportamento humano a ponto de ser indistinguível de um ser humano em uma conversa, a
classificando como inteligente. A “Explicabilidade da IA" não está relacionada a passar no Teste
de Turing, mas sim a tornar seus processos e decisões compreensíveis para os humanos.

Gabarito: C

#### Métodos XAI

Antes de entrarmos nos nas técnicas XAI em si, precisamos entender que podemos buscar a
explicabilidade de um modelo sob dois prismas, o local e o global.

Na perspectiva local, o objetivo é explicar uma resposta específica, ou seja, entender por que
o modelo gerou aquela saída para aquela instância em particular. Considerando um sistema de IA
usado por um banco para concessão de crédito, a análise local responderia a perguntas como
"Por que o pedido de empréstimo do João foi reprovado?". Aqui, o foco está em uma única
decisão, em um único caso.

Na perspectiva global, por outro lado, queremos compreender o comportamento geral do
modelo para suas respostas, isto é, como ele "pensa" no agregado, considerando todo o
conjunto de dados. Assim, buscamos identificar quais variáveis (atributos) têm maior importância
nas suas predições (em inglês, feature importance) e de que forma elas influenciam os resultados.
No exemplo do banco, uma análise global responderia a perguntas como "Quais fatores, em
geral, mais pesam para o modelo aprovar ou reprovar um empréstimo?".

### SHAP e LIME

Atualmente as técnicas de IA Explicável mais populares utilizadas para compreendermos as
respostas de modelos de IA são SHAP e LIME.

Com o SHAP (SHapley Additive exPlanations, ou “Explicações Aditivas de Shapley", em tradução
livre) conseguimos atribuir, para cada observação de dado, um valor a cada atributo
indicando quanto ele contribuiu para a resposta do modelo em relação a um valor de
referência (baseline).

Suponha uma IA que fornece como saída a “probabilidade de conceder empréstimo" para um
cliente, baseada em três atributos: “renda familiar", “saldo em conta" e “valor atual de
empréstimos já concedidos".

Primeiro, definimos um baseline, isto é, a saída média do modelo. No nosso exemplo, vamos
supor um baseline de 50%, isto é, em média, a chance do modelo recomendar um empréstimo é
de 50%.

Em seguida, o SHAP calcula quanto cada variável “empurrou" a previsão para cima ou para baixo
em relação a esse baseline. Saibam que essas contribuições são aditivas: somando todas as
contribuições ao baseline, obtemos a resposta do modelo para aquele cliente.

Por exemplo, suponhamos que para um cliente com renda de R$ 5.000,00, saldo em conta de R$
8.000,00 e R$ 10.000,00 já contratados em empréstimos, a saída do modelo seja de 5%. Se o
SHAP retornar contribuições de +5% (renda), +20% (saldo) e –70% (empréstimos já concedidos),
então: Saída = 50% (baseline) + 5% + 20% – 70% = 5%.

Vale a pena saber que essas contribuições são os chamados valores de Shapley, conceito
presente na teoria dos jogos. Além disso, embora aplicado sob a ótica local aqui nessa
explicação, o SHAP pode ser utilizado para obter explicações globais do modelo.

O LIME (Local Interpretable Model-agnostic Explanations, ou “Explicação Local e Agnóstica ao
Modelo", em tradução livre) aproxima um modelo explicativo simples na vizinhança do
exemplo de interesse para explicar as decisões de um modelo complexo.

Aprofundando, essa técnica cria novas amostras a partir de variações dos dados originais,
“perturbando" seus atributos, e consulta o modelo complexo para obter as respostas dessas
amostras.

Na sequência, o LIME usa essas informações para ajustar um novo modelo, muito simples,
ponderando a influência dos dados localmente próximos do exemplo pertubado.

De posse do novo modelo treinado, usa seus coeficientes para explicar quais variáveis são de
fato importantes e mais pesam na decisão do modelo complexo.

(retirada de https://homes.cs.washington.edu/~marcotcr/blog/lime/)

Percebam que, como o LIME treina um modelo explicativo próprio (também chamado de
modelo substituto, ou surrogate model, em inglês), pode ser utilizado independentemente do
modelo complexo que se propõe a explicar, por isso dizemos que é agnóstico a esse.

A seguir, resumimos as principais características do SHAP e LIME, adicionando algumas
específicas que podem ser relevantes para sua prova.

Métrica

### SHAP

### LIME

Conceito

Atribui, para cada exemplo, a
contribuição de cada atributo em

relação a um baseline.

“Empurra" a saída para cima/baixo

de forma aditiva.

Ajusta um modelo simples local

na vizinhança do exemplo para
aproximar o modelo complexo.

Teoria
Valores de Shapley (Teoria dos

Jogos) + aditividade

Perturbação local + ponderação

por proximidade

Métrica

### SHAP

### LIME

Momento
Aplicado no modelo original após

seu treinamento (post-hoc)

Aplicado no modelo original
após seu treinamento (post-hoc)

Explicação
Local e global
Local

Processamento
Regra geral, custoso
Regra geral, rápido

### IA Enviesada

O conceito ético de IA enviesada (em inglês, biased AI) se refere aos resultados de IA
tendenciosos causados por vieses humanos que influenciam os dados de treinamento ou o
próprio algoritmo, seja por negligência ou mau uso, resultando em decisões distorcidas e
potencialmente prejudiciais.

Vamos tentar entender a profundidade dessa discussão analisando um caso real. Em 2015 o
Google Photos, uma aplicação que usa reconhecimento de imagens baseado em IA, identificou
erroneamente pessoas negras de maneira extremamente ofensiva. Na época, foi demonstrado
que o algoritmo deles não foi treinado com dados representativos da população, resultando em
uma odiosa IA discriminatória.

Então, de forma mais técnica podemos definir viés.

Viés se trata da diferença sistemática no tratamento de certos objetos,

pessoas ou grupos em comparação com outros

De todo modo, vieses nos sistemas de IA ajudam a amplificar e perpetuar discriminações do
mundo real de forma perversa, causando danos reais incalculáveis às suas vítimas. Portanto, são
abomináveis e devem ser combatidos.

(CEBRASPE (CESPE)/TCU/Controle Externo/2026) Há discriminação algorítmica quando um
sistema de IA usa, para uma tomada de decisão, sem justificativa válida, a informação de que
alguém pertence a um grupo social (ou características que funcionam como proxies), de modo a
gerar desvantagens sistemáticas para esse grupo em contextos em que esse critério não deveria
influenciar a decisão.

Comentários:

Ocorre a discriminação algorítimica quando o viés manifesta-se por deturpação dos resultados
por decisões do próprio modelo. Nessas situações, a IA pode usar, na sua tomada de decisão, o
fato de alguém pertencer a um determinado grupo social (como raça, gênero, classe), ou então
usa outras informações que funcionam como "atalhos" para identificar esse grupo, os chamados
proxies (por exemplo, o CEP do bairro pode acabar funcionando como proxy de raça ou renda),
sem que haja uma razão legítima para isso, gerando prejuízo sistemático para aquele grupo.

Gabarito: Certo

(FGV - Prof EFM (SEDUC SP)/SEDUC SP/Informação e Comunicação/2023) No contexto da IA
geracional, representada pelo ChatGPT e modelos similares, surge um desafio crítico relacionado
ao viés. Em relação ao significado do termo “biased AI" (IA enviesada) na IA geracional, assinale
a afirmativa correta.

a) Trata da incapacidade dos modelos de IA de aprender com exemplos de texto humano.

b) Refere-se à tendência de modelos de IA geracional em gerar respostas tendenciosas ou
discriminatórias com base em dados de treinamento enviesados.

c) Descreve a capacidade da IA geracional de entender e aplicar princípios éticos em suas
respostas.

d) Significa que a IA geracional não é capaz de reconhecer ou interpretar o contexto em que
uma pergunta é feita.

e)
Refere-se à tendência da IA geracional de gerar respostas excessivamente longas e
detalhadas.

Comentários:

A questão faz uma contextualização para a “IA geracional" desnecessária para resolução da
questão, visto que cobra o conceito de “IA enviesada". Vale lembrar que estudaremos o modelo
de “IA geracional" em momento adequado.

a) Errada. Existem modelos de Inteligência Artificial que aprendem com a interação com seres
humanos, como o ChatGPT, por exemplo. De qualquer forma, não se trata do conceito de “IA
enviesada"

b) Correta. IA enviesada refere-se à tendência de modelos de IA de gerar respostas que podem
ser tendenciosas, discriminatórias ou refletir preconceitos presentes nos dados de treinamento.
Isso ocorre porque esses modelos aprendem padrões dos dados com os quais são treinados, que
podem incluir vieses sociais, culturais ou outros tipos de distorções.

c) Errada. Embora determinada IA deva ser capaz de incorporar princípios éticos em suas
respostas, isso não se trata do modelo de IA enviesada.

d) Errada. a "IA enviesada" refere-se aos vieses que afetam as respostas, não à capacidade de
entender o contexto da “IA geracional".

e) Errada. Respostas longas ou detalhadas podem ser uma característica esperada ou não do
modelo de IA, a depender do tipo de entrada recebida e do seu design. Isso nada tem a ver com
o conceito de "IA enviesada".

Gabarito: B

### IA Responsável

O conceito de IA Responsável (em inglês, Responsible AI) refere-se ao desenvolvimento,
avaliação e implementação de sistemas de inteligência artificial de maneira ética, segura e
responsável.

Tal abordagem busca garantir que esses sistemas sejam desenvolvidos e utilizados de maneira a
respeitar os direitos humanos, promovendo a equidade, não discriminando ou perpetuando
preconceitos.

Isso significa manter as pessoas no centro das decisões de design do sistema, fortalecendo
valores como justiça, confiabilidade e responsabilidade social.

(FGV/SRFB/AFRFB/2023) Responsible AI (IA Responsável) e Explainable AI (IA Explicável) são
conceitos importantes no desenvolvimento de sistemas de inteligência artificial. A IA Explicável
refere-se à capacidade de explicar como uma decisão foi tomada pelo modelo de IA, permitindo
que os usuários entendam o processo de tomada de decisão. Já a IA Responsável envolve
garantir que a IA seja desenvolvida e implementada de forma ética e legalmente responsável.

Nesse contexto, sobre Responsible AI, assinale a afirmativa incorreta.

a) A Responsible AI envolve garantir que a IA seja desenvolvida e implementada de forma ética e
legalmente responsável.

b) A Responsible AI considera as implicações sociais e os potenciais efeitos negativos que o
sistema pode ter sobre as pessoas.

c) A Responsible AI é sinônimo de IA Explicável, pois ambas se referem à tomada de decisões
éticas e transparentes.

d) Uma IA pode ser responsável, mas ainda ser opaca e não explicável, tornando difícil para os
usuários entenderem como as decisões são tomadas.

e) A Responsible AI leva em consideração o ciclo de vida da IA, desde a concepção até a
desativação, e sua responsabilidade ética em cada fase.

Comentários:

a) Correta. Desenvolvimento e implementação de sistemas de IA de maneira ética e legal se
adequa exatamente ao conceito de Responsible IA.

b) Correta. A IA Responsável tem um forte caráter social, uma vez que defende desenvolvimento
de sistemas de inteligência de maneira a respeitar os direitos humanos, promovendo a equidade.
Ou seja, leva em consideração as implicações sociais e os potenciais efeitos negativos que um
sistema de IA pode ter sobre as pessoas e a sociedade em geral.

c) Errada. De forma alguma os conceitos são sinônimos. Enquanto a Responsible AI refere-se à
prática geral de garantir que a IA seja desenvolvida e usada de maneira ética e responsável,
incluindo considerações de impacto social e legal, a Explainable AI (IA Explicável) se concentra
em tornar os processos de decisão da IA compreensíveis para os usuários.

d) Correta. É possível que um sistema de IA seja desenvolvido de maneira ética e responsável
(Responsible AI) sem necessariamente ser explicável (Explainable AI), visto que pode seguir todas
as práticas éticas e legais e, ainda assim, ter características opacas, onde as decisões tomadas
pela IA não são facilmente compreendidas pelos humanos.

e) Correta. Segundo Virginia Dignum , em seu livro “Responsible Artificial Intelligence – How to
Develop and use AI in a Responsible Way", uma abordagem responsável para o design de
sistemas de IA requer que o processo de avaliação seja contínuo durante todo o processo de
desenvolvimento e não apenas uma etapa na sequência de desenvolvimento. Além disso, a
natureza dinâmica e adaptável dos sistemas de IA também requer que a avaliação seja contínua,
pois o sistema está em constante evolução.

Gabarito: C

#### Privacidade diferencial

Utilizamos a Privacidade Diferencial para conseguir divulgar estatísticas de um conjunto de
dados (médias, contagens, gráficos, etc.) sem revelar informações confiáveis sobre pessoas
específicas que estejam nesses dados.

O problema é que, mesmo quando divulgamos só agregações dos dados (ex.: “há 17 pessoas
com condição X"), um atacante com informações sobre o banco pode, às vezes, deduzir se uma
pessoa participou ou não dessa agregação, ou até descobrir algo sensível sobre ela.

Justamente para limitar matematicamente esse tipo de conclusão, criou-se a Privacidade
Diferencial.

De modo simplificado, ao gerarmos uma estatística, o método adiciona um pouquinho de
aleatoriedade ao resultado antes de publicá-lo. A ideia é que o ruído seja suficientemente
grande para “embaralhar" as contribuições individuais dos registros do banco, mas ainda
assim pequeno o suficiente para manter a estatística útil para análise

Como resultado, com ou sem algum registro específico no banco, o que sai para o mundo
fica quase igual. Ou seja, um observador que vê o resultado não consegue dizer se determinado
dado foi usado para gerar o valor.

(ADAPTADA - CESGRANRIO/BNDES/Ciência de Dados/2024) Uma equipe de desenvolvimento
de Inteligência Artificial (IA) em uma empresa de tecnologia está implementando um sistema de
recomendação baseado em aprendizado de máquina. Durante o processo de implementação, a
equipe precisa estar atenta aos potenciais riscos e vulnerabilidades associados ao uso da IA. O
sistema utiliza grandes volumes de dados históricos de clientes para treinar seus modelos. Há
uma preocupação com a possibilidade de invasores manipularem a entrada de dados para
enganar o modelo e gerar saídas indesejadas ou incorretas. A equipe deve também garantir que
o modelo não exponha dados sensíveis dos clientes. Considere a seguinte afirmativa com relação
à mitigação dos riscos identificados:

Utilizar técnicas de differential privacy durante o treinamento do modelo para proteger dados
sensíveis e garantir que as previsões do modelo não revelem informações específicas dos
clientes.

Comentários:

A técnica de differential privacy (Privacidade Diferencial) é um mecanismo adequado para mitigar
o risco de exposição de dados sensíveis dos clientes durante o treinamento do modelo. Ao
adicionar ruído estatístico controlado aos dados ou às estatísticas geradas, ela garante
matematicamente que a presença ou ausência de um registro específico no conjunto de
treinamento não altere significativamente a saída do modelo, impedindo que invasores deduzam
informações individuais a partir das previsões.

Gabarito: Correta

### IA FAT-E

O acrônimo FAT-E corresponde a uma Inteligência Artificial com as propriedades de Fairness
(Justiça), Accountability (Responsabilidade), Transparency (Transparência) e Ethics (Ética).

Nesse momento vale saber que, por esses diversos conceitos serem propostos
por autores distintos, muitas vezes acabam se tratando do mesmo tema. Por

exemplo, há na literatura quem afirme que a definição de IA Transparente é
redundante, já que se trata da mesma que a de IA Explicável.

Portanto, não estranhem se encontrarem muita intersecção entre as explicações
de conceitos, teoricamente, distintos.

Bom, o conceito de Justiça (ou Equidade) implica que as decisões automatizadas de uma
Inteligência Artificial não devem gerar consequências discriminatórias (injustas) para nenhum
grupo social. Em outras palavras, ter a qualidade de ser imparcial, com ausência de favoritismo
para um lado ou para outro. Em resumo, deve ser imparcial.

Já o conceito de Accountability diz respeito à necessidade de que os responsáveis pelo
design, desenvolvimento e implementação de algoritmos assumam a responsabilidade
pelos impactos de seus sistemas. Em outros termos, ter a qualidade de ser responsável, ou seja,
estar sujeito a prestar contas e ser capaz de se explicar.

A Transparência envolve a clareza sobre como os algoritmos de IA funcionam, quais dados
são utilizados, quais processos de decisão estão embutidos e quais podem ser as consequências
dessas decisões. Aqui queremos evitar algoritmos “caixas-pretas", isto é, aqueles cujos processos
internos são tão complexos que tornam sua compreensão inacessível pelos usuários e até mesmo
por especialistas externos. Resumindo, deve ser interpretável.

Finalmente, a Ética apresenta um pilar central para a construção de uma IA centrada em
humanos, confiável e responsável. Isso porque a ética norteia todo o desenvolvimento e a
aplicação de algoritmos de Inteligência Artificial, não sendo apenas um complemento aos
conceitos de fairness, accountability e transparency, mas os integrando.

(FGV/Auditor de Controle Externo (TCE-PA)/Informática/Analista de Sistemas/2024) O
desenvolvimento de algoritmos de Inteligência Artificial generativa está relacionado a aspectos
éticos com impactos sociais, culturais e econômicos. Entre as diretrizes presentes em diversos
instrumentos regulatórios relacionados à IA generativa, destaca-se a priorização de abordagens
considerando os aspectos que formam a matriz FAT.

O acrônimo FAT é formado pelos seguintes princípios éticos relacionados ao desenvolvimento
de algoritmos:

a) Feedback, Algorithm e Training.

b) Framework, Agents e Tasks.

c) Fairness, Accountability e Transparency.

d) Freedom, Autonomy e Trust.

e) Fidelity, Altruism e Truthfulness.

Comentários:

Fairness (Justiça): Este princípio enfatiza a necessidade de que os algoritmos sejam imparciais e
não reproduzam vieses que possam levar a discriminações injustas, com favorecimento indevido
a determinados grupos em detrimento de outros, sendo fundamental para a equidade nas
aplicações de IA.

Accountability (Responsabilidade): Accountability envolve a obrigação dos desenvolvedores,
implementadores e gestores de algoritmos de prestar contas dos impactos que suas criações
geram. Isso significa que, quando um sistema apresenta falhas ou resultados injustos, deve haver
mecanismos claros de auditoria para identificação dos responsáveis a fim de se corrigir os
problemas.

Transparency (Transparência): Transparência diz respeito à compreensibilidade dos processos
internos dos algoritmos. Assim, um sistema transparente permite que stakeholders, sejam eles
usuários, reguladores ou especialistas, entendam como as decisões são tomadas. Isso é essencial
para construir confiança e possibilitar a auditoria dos processos, mesmo que os modelos sejam
complexos ou inicialmente pareçam uma "caixa-preta".

Gabarito: C

## Resumo

IA Explicável (Explainable AI – XAI / IA Transparente)

- Problema: sistemas que apenas entregam respostas sem explicar o processo decisório
podem ser pouco confiáveis, ilegais ou inúteis.
- Objetivo: modelos capazes de explicar e justificar decisões de forma compreensível para
humanos.
- Evita “caixas-pretas” (resultados sem transparência).
- Boas explicações devem ser:

1. Compreensíveis e convincentes para o usuário.
2. Precisamente refletir o raciocínio do sistema.
3. Completas, cobrindo todos os aspectos relevantes.
4. Específicas, adaptadas a diferentes usuários e contextos.

==5460==

Métrica

### SHAP

### LIME

Conceito

Atribui, para cada exemplo, a
contribuição de cada atributo em

relação a um baseline.

“Empurra” a saída para cima/baixo

de forma aditiva.

Ajusta um modelo simples local

na vizinhança do exemplo para
aproximar o modelo complexo.

Teoria
Valores de Shapley (Teoria dos

Jogos) + aditividade

Perturbação local + ponderação

por proximidade

Momento
Aplicado no modelo original após

seu treinamento (post-hoc)

Aplicado no modelo original
após seu treinamento (post-hoc)

Explicação
Local e global
Local

Processamento
Regra geral, custoso
Regra geral, rápido

IA Enviesada (Biased AI)

- Definição: resultados tendenciosos gerados por vieses humanos nos dados ou algoritmos.
- Causas: negligência ou mau uso no treinamento.
- Consequência: amplificação de preconceitos e discriminação do mundo real.
- Impacto: danos graves e injustiças; necessidade de combate e prevenção.

IA Responsável (Responsible AI)

- Definição: desenvolvimento, avaliação e uso de IA de forma ética, segura e responsável.
- Objetivo: respeitar direitos humanos, promover equidade e evitar discriminação.
- Princípios: manter pessoas no centro das decisões, priorizar justiça, confiabilidade e
responsabilidade social.

## QUESTÕES COMENTADAS

## Filosofia e Ética da Inteligência Artificial

1.
(FCC/SEFAZ SP/Gestão Tributária/2026) Determinada Secretaria da Fazenda implementou
um sistema de IA para classificar automaticamente declarações fiscais quanto ao risco de
irregularidade. Após seis meses de operação, auditores identificaram que o modelo estava
atribuindo pontuações de risco sistematicamente mais altas para empresas de setores
específicos, mesmo quando os indicadores financeiros eram similares aos de outros setores com
pontuações menores. A análise técnica revelou que a base de dados histórica utilizada no
treinamento continha proporcionalmente mais autuações em determinados setores devido a
fiscalizações direcionadas realizadas no passado, e não necessariamente por maior incidência
real de irregularidades. O modelo aprendeu e perpetuou esse padrão desproporcional.

O problema de governança e ética em IA que está caracterizado nessa situação é:

a) Violação de privacidade, pois o modelo está acessando dados sensíveis dos contribuintes sem
autorização legal e utilizando informações protegidas pela legislação tributária para treinamento.

b) Falta de explicabilidade, pois o sistema não consegue fornecer justificativas compreensíveis
sobre os motivos que levaram à classificação de risco de cada declaração fiscal individual.

c) Viés algorítmico, pois o modelo reproduz desproporções presentes nos dados de treinamento,
gerando discriminação sistemática contra determinados grupos sem justificativa técnica objetiva.

d) Alucinação do modelo, pois o sistema está gerando classificações de risco fictícias que não
correspondem aos dados reais inseridos pelos contribuintes nas declarações fiscais.

e) Falta de transparência, pois os contribuintes e auditores não têm acesso aos critérios e
variáveis utilizados pelo algoritmo para calcular as pontuações de risco atribuídas.

Comentários:

a) Errada. A questão não trata de violação de privacidade, pois não há indicação de que o
sistema esteja acessando dados sensíveis sem autorização legal ou utilizando informações
protegidas indevidamente. O problema descrito está na qualidade enviesada dos dados de
treinamento, não no acesso ou uso de dados protegidos.

b) Errada. Falta de explicabilidade (Explainable AI) ocorre quando o modelo não consegue
justificar como chegou às suas decisões, atuando como uma "caixa-preta". No caso descrito, o
problema identificado pelos auditores não foi a impossibilidade de entender as decisões do
modelo, e sim o fato de que o padrão de classificação reproduzia desproporções históricas, ou
seja, é uma questão de viés, não de opacidade.

c) Correta. O viés algorítmico ocorreu porque o modelo reproduziu desproporções presentes nos
dados de treinamento, gerando discriminação sistemática contra determinados grupos sem
justificativa técnica objetiva. No caso, as fiscalizações direcionadas do passado criaram um
desequilíbrio na base histórica, e a IA simplesmente aprendeu e perpetuou esse padrão,
classificando empresas de certos setores com risco mais alto mesmo quando os indicadores
financeiros eram similares aos de outros setores. Essa é a manifestação da IA enviesada, em que
vieses humanos contidos nos dados são amplificados pelo algoritmo.

d) Errada. Alucinação é um fenômeno típico de modelos generativos (como LLMs), em que o
sistema produz informações fictícias ou inventadas que não correspondem à realidade. No caso
descrito, o sistema não está inventando dados, ele está classificando declarações reais com base
em padrões enviesados aprendidos, o que é um problema diferente.

e) Errada. Falta de transparência se refere à dificuldade de stakeholders compreenderem como o
algoritmo funciona internamente, quais dados utiliza e como toma suas decisões. Embora possa
haver alguma sobreposição com o caso, o problema central identificado pelos auditores não foi o
desconhecimento dos critérios usados, e sim o fato de que esses critérios reproduziam um
padrão discriminatório vindo dos dados históricos, caracterizando viés.

Gabarito: C

2.
(CEBRASPE (CESPE)/TCE MG/Ciência da Computação/2026) Certa startup brasileira
desenvolveu uma aplicação de inteligência artificial para auxiliar a justiça federal na análise inicial
de recursos jurídicos de baixo valor. O sistema opera como um agente inteligente que utiliza um
extenso dataset de jurisprudências passadas para calcular a probabilidade de sucesso de novos
recursos, com o objetivo de otimizar a triagem processual ao maximizar a taxa de acerto nas suas
previsões. Em testes, a aplicação atingiu uma impressionante taxa de precisão de 98% na
previsão de resultados. No entanto, uma auditoria de compliance ético revelou que o algoritmo
apresentava um viés: os recursos originários de regiões com baixo índice de desenvolvimento
humano (IDH) do Nordeste brasileiro eram sistematicamente classificados com menor
probabilidade de sucesso, mesmo quando apresentavam mérito legal similar a casos de regiões
mais desenvolvidas. A equipe técnica defendeu o sistema, alegando que ele era racional, pois
maximizava consistentemente a métrica de acerto definida. Considerando a natureza do sistema
criado nessa situação hipotética e a distinção fundamental entre racionalidade e justiça em
sistemas de IA, assinale a opção que apresenta corretamente a falha ética do sistema à luz dos
conceitos básicos da inteligência artificial.

a) O viés regional é uma prova incontestável de que o sistema é um exemplo de inteligência
artificial simbólica, pois somente essa arquitetura, baseada em regras pré-codificadas, é capaz de
manifestar discriminação explícita, ao contrário dos modelos conectivistas (redes neurais).

b) A falha do sistema é uma evidência de que ele não pode ser classificado como um agente
racional, pois, por definição, ele deve seguir a função de utilidade ideal de uma sociedade justa,
o que exige que o sistema possua consciência e um senso moral.

c) O sistema é um agente puramente reativo, e sua incapacidade de manter estados internos
sobre a equidade do dataset é a causa direta do viés, o que demonstra a ineficácia dos sistemas
de machine learning baseados em modelos.

d) O sistema demonstra uma limitação da inteligência artificial forte, cuja alta taxa de acerto é
incompatível com o viés, o que confirma que a singularidade tecnológica não será alcançada

==5460==

enquanto os sistemas de inteligência artificial não forem treinados apenas com dados totalmente
neutros, sem histórico humano.

e) A racionalidade técnica do sistema é mantida, pois ele maximiza sua função utilidade (taxa de
acerto), mas o viés detectado reside na definição dessa utilidade ou na qualidade dos dados de
treinamento, o que o caracteriza como um sistema racionalmente tendencioso, mas não
irracional

Comentários:

A questão explora a distinção fundamental entre racionalidade (agir para maximizar uma medida
de desempenho definida) e justiça/ética (agir de forma equitativa e sem causar danos
sistemáticos a grupos).

O sistema descrito é, tecnicamente, um agente racional baseado em utilidade: ele cumpre
exatamente o que foi programado para fazer, ou seja, maximizar a taxa de acerto nas previsões.

O problema é que essa "racionalidade técnica" não diz nada sobre a qualidade ética da função
de utilidade escolhida nem sobre a representatividade dos dados de treinamento. O viés contra
recursos do Nordeste com baixo IDH não surge de um defeito no raciocínio do agente, mas de
duas fontes distintas: a métrica escolhida (taxa de acerto pura, sem considerar equidade) e o
dataset histórico de jurisprudências, que muito provavelmente já refletia decisões humanas
enviesadas do passado, sendo perpetuadas e amplificadas pela IA. Caracteriza-se, portanto, um
caso de IA enviesada (biased AI), em que o sistema é racionalmente tendencioso, ou seja, age de
forma coerente com seus objetivos, porém produz resultados injustos.

a) Errada. O viés algorítmico não é exclusividade da IA simbólica, na realidade, é um fenômeno
especialmente comum em modelos conexionistas (redes neurais) e também machine learning em
geral, pois esses sistemas aprendem diretamente a partir dos dados de treinamento e tendem a
absorver e amplificar os vieses históricos presentes neles. O sistema descrito utiliza um "extenso
dataset de jurisprudências", o que aponta justamente para uma abordagem de aprendizado de
máquina, não para regras pré-codificadas da IA simbólica.

b) Errada. A definição técnica de agente racional, segundo a literatura, é aquele que seleciona a
ação que maximiza sua medida de desempenho, não havendo qualquer exigência de
"consciência", "senso moral" ou conformidade com uma "função de utilidade ideal de uma
sociedade justa". O sistema descrito atende perfeitamente à definição de agente racional, pois
maximiza consistentemente sua métrica (taxa de acerto). A confusão entre racionalidade técnica e
justiça ética é, inclusive, o ponto central que a questão quer testar.

c) Errada. O sistema descrito não é um agente puramente reativo, ele opera com base em um
vasto dataset de jurisprudências e calcula probabilidades, características típicas de agentes
baseados em utilidade com aprendizado de máquina. Além disso, a alternativa erra ao afirmar
que machine learning baseado em modelos seria "ineficaz", quando na verdade é a abordagem
dominante na IA moderna. A causa do viés está nos dados e na métrica, não na arquitetura
reativa do agente.

d) Errada. A alternativa mistura conceitos sem conexão real com o problema apresentado.
"Inteligência artificial forte" e "singularidade tecnológica" são conceitos filosóficos sobre IA com
consciência geral comparável à humana, totalmente alheios ao caso descrito, que trata de um
sistema especializado em triagem processual. Além disso, a ideia de "dados totalmente neutros,
sem histórico humano" é praticamente impossível na prática, pois qualquer dataset coletado do

mundo real carrega vieses sociais, e o desafio ético é justamente identificar e mitigar esses vieses,
não fingir que eles não existem.

e) Correta. A alternativa captura com precisão a distinção central da questão: o sistema mantém
sua racionalidade técnica (maximiza fielmente a função de utilidade definida, a taxa de acerto),
porém o viés detectado se origina em duas fontes possíveis, a definição inadequada da utilidade
(que não inclui equidade) ou a qualidade enviesada dos dados de treinamento (jurisprudências
históricas refletindo desigualdades regionais já existentes). O sistema é, portanto, racionalmente
tendencioso, agindo coerentemente com seus objetivos programados, porém produzindo
resultados eticamente inaceitáveis. Esse é exatamente o conceito de IA enviesada, em que vieses
humanos influenciam dados ou algoritmos, gerando decisões distorcidas que perpetuam
discriminações do mundo real.

Gabarito: E

3.
(CEBRASPE (CESPE)/TELEBRAS/Analista Superior/2026) Em sistemas de recomendação
para apoio ao vendedor, o uso de inteligência artificial para sugerir produtos e priorizar
oportunidades é permitido, desde que os algoritmos não discriminem clientes por perfil
socioeconômico, origem ou gênero, em conformidade com os princípios éticos e legais.

Comentários:

Sistemas de recomendação por IA são agentes inteligentes que visam maximizar alguma métrica
de negócio, sendo seu uso comercial totalmente legítimo. Porém, vieses presentes nos dados de
treinamento ou na definição da função de utilidade podem fazer com que o algoritmo gere
decisões distorcidas, tratando grupos de forma sistematicamente diferente. Discriminar clientes
por perfil socioeconômico, origem ou gênero (ou por proxies dessas características) configura
discriminação algorítmica, gerando desvantagens injustificadas a determinados grupos. Por isso,
a permissão para usar IA nesse cenário está condicionada ao respeito aos princípios éticos e
legais, garantindo que a racionalidade técnica do sistema não se transforme em ferramenta de
perpetuação de injustiças.

Gabarito: Certo

4.
(FGV/TJ RJ/Tecnologia da Informação/2026) O cientista de dados Leo está desenvolvendo
um modelo de inteligência artificial para analisar casos e tomar decisões sobre a procedência ou
não do pleito.

Para analisar como o modelo chegou a uma determinada decisão, Leo deve utilizar:

a) auditoria;

b) surrogate models;

c) feature importance;

d) partial dependence plots (PDP);

e) métodos de interpretabilidade local.

Comentários:

a) Errada. Embora a explicabilidade da IA contribua para a auditabilidade do sistema, permitindo
verificar se ele é confiável e seguro, a auditoria é um processo de verificação mais amplo. Para a

necessidade técnica de Leo, entender o "porquê" de uma decisão individual, o termo correto é a
interpretabilidade local.

b) Errada. Os surrogate models (modelos substitutos), como o LIME, são um dos métodos
utilizados para explicarmos decisões locais. Ou seja, eles são uma técnica específica dentro da
categoria de métodos de interpretabilidade local. A alternativa "e" apresenta a categoria
conceitual completa que responde à pergunta sobre decisões em casos específicos.

c) Errada. A feature importance (importância dos atributos) é geralmente associada à ótica global.
Ela busca responder quais atributos dos dados são mais ou menos importantes para o modelo de
forma generalizada, e não necessariamente detalhar os fatores exatos que levaram a uma decisão
em um pleito específico.

d) Errada. Assim como os surrogate models, gráficos de dependência parcial (PDP) podem ser
utilizados para entender a relação entre os atributos dos dados e as predições dos modelos.
Nesse exercício, não queremos uma técnica específica, mas sim o conceito genérico.

e) Correta. A ótica local na IA explicável (XAI) é justamente a que pretende explicar por que o
modelo deu aquela resposta para um caso específico.

Gabarito: E

5.
(COCP IFMT/IF MT/Engenharia de Computação/2024) O teste de Turing foi projetado
para fornecer uma definição operacional satisfatória de inteligência. O computador passará no
teste se um interrogador humano, depois de propor algumas perguntas por escrito, não
conseguir descobrir se as respostas escritas vêm de uma pessoa ou de um computador. O teste
de Turing evitou deliberadamente a interação física direta entre o interrogador e o computador
porque a simulação física de uma pessoa é desnecessária para a inteligência. Entretanto, o
chamado teste de Turing total inclui um sinal de vídeo, de forma que o interrogador possa testar
as habilidades de percepção do indivíduo, além de oferecer ao interrogador a oportunidade de
repassar objetos físicos “pela janelinha”. Para ser aprovado no teste de Turing total, o
computador precisaria ter seis capacidades. Sabendo destas informações, numere a coluna da
direita (capacidade) de acordo com sua correspondência com a coluna da esquerda
(funcionalidade).

1- Processamento de linguagem natural

2 - Representação de conhecimento

3 - Raciocínio automatizado

4 - Aprendizado de máquina

5 - Visão computacional

6 - Robótica

( ) Permite manipular objetos e movimentar-se.

( ) Permite adaptar-se a novas circunstâncias, para detectar e extrapolar padrões.

( ) Permite usar as informações armazenadas com a finalidade de responder a perguntas e tirar
novas conclusões.

( ) Permite perceber objetos.

( ) Permite que o computador se comunique com sucesso em uma linguagem de idioma.

( ) Permite armazenar o que sabe ou ouve.

Assinale a alternativa que apresenta a numeração CORRETA da coluna da direita, de cima para
baixo, conforme Russel e Norvig (2013):

RUSSELL, S.; NORVIG, P. Inteligência Artificial. Elsevier Bookman. 3º Ed. 1324 pg. 2013.

a) 6-3-4-5-2-1

b) 5-4-1-6-3-2

c) 5-1-4-6-2-3

d) 4-3-2-6-5-1

e) 6-4-3-5-1-2

Comentários:

Funcionalidade
Capacidade

( 6 ) Permite manipular objetos e movimentar-se.
Robótica

( 4 ) Permite adaptar-se a novas circunstâncias, para
detectar e extrapolar padrões.

Aprendizado de máquina

( 3 ) Permite usar as informações armazenadas com a
finalidade de responder a perguntas e tirar novas
conclusões.

Raciocínio automatizado

( 5 ) Permite perceber objetos.
Visão computacional

( 1 ) Permite que o computador se comunique com
sucesso em uma linguagem de idioma.

Processamento de

linguagem natural

( 2 ) Permite armazenar o que sabe ou ouve.
Representação de

conhecimento

Gabarito: E

6.
(VUNESP/Auditor de Controle Externo/TCE SP2025) Assinale a alternativa que apresenta
uma medida eficaz para minimizar o viés de resposta na utilização de inteligência artificial
generativa.

a) Não atualizar o modelo ou o conjunto de dados com frequência, pois a tendência natural do
modelo é que o viés de resposta estabilize-se ao longo do tempo.

b) Basear a validação do modelo em um único conjunto de dados homogêneo, desconsiderando
variações contextuais.

c) Permitir que o modelo se autotreine e se ajuste sem supervisão e intervenção humana
enviesada.

d) Implementar revisões regulares do conjunto de dados, visando assegurar a diversidade e a
representatividade dos dados utilizados para treinar e ajustar o modelo.

e) Selecionar apenas dados históricos e antigos, pois sempre fornecem credibilidade histórica ao
modelo.

Comentários:

a) Errada. A IA Enviesada é causada por vieses humanos que influenciam os dados de
treinamento ou o algoritmo. A falta de atualização e intervenção permite que esses vieses se
perpetuem, pois a tendência do modelo treinado com dados enviesados é amplificar e perpetuar
os preconceitos do mundo real.

b) Errada. O viés de resposta (ou IA enviesada) ocorre quando os dados de treinamento não são
representativos da população. Basear a validação em um único conjunto de dados homogêneo e
desconsiderar variações contextuais é justamente a causa do problema, resultando em decisões
tendenciosas ou discriminatórias.

c) Errada. Embora a falta de intervenção humana "enviesada" possa parecer positiva, a
supervisão e o ajuste são essenciais para combater e prevenir os vieses nos sistemas de IA.
Permitir que o modelo se ajuste sem supervisão (ou seja, sem garantir a equidade e o respeito
aos direitos humanos) justamente contraria esse princípio.

d) Correta. A IA Enviesada é gerada por dados de treinamento não representativos. A solução
mais eficaz é garantir a diversidade e representatividade dos dados usados para treinar o modelo.

e) Errada. A simples seleção de dados históricos ou antigos não garante a diversidade e a
representatividade necessárias para evitar o viés. Se os dados históricos já contiverem
preconceitos (vieses sociais ou culturais), eles apenas ajudarão a amplificar e perpetuar esses
vieses do mundo real.

Gabarito: D

7.
(IBFC/AJ TRF5/TRF 5/Apoio Especializado/Análise de Sistemas de Informação/2024)
Analise a citação, que trata de uma categoria de Inteligência Artificial (IA):

“[...] acredita que um dia será possível recriar máquinas capazes de pensar, criar e exibir
comportamento inteligente nos moldes humanos, a partir da criação de algoritmos cognitivos
que possam executar em computadores [...]” (SILVA et al., 2018, p.17).

Assinale a alternativa que apresenta esta categoria de IA.

a) Hiperinteligência

b) Superinteligência

c) Inteligência artificial fraca

d) Inteligência artificial forte

Comentários:

A citação de SILVA et al. apresenta a ideia de recriar máquinas que não apenas simulem, mas
realmente pensem, criem e exibam comportamentos inteligentes de maneira similar aos
humanos. Esse conceito vai além da simples execução de tarefas específicas (como ocorre na IA
fraca ou estreita) e propõe o desenvolvimento de algoritmos cognitivos capazes de replicar a

totalidade das funções mentais humanas. Essa abordagem é a essência da Inteligência Artificial
Forte, também conhecida como Inteligência Artificial Geral (AGI) ou IA em Nível Humano.

Gabarito: D

8.
(FGV/AJ (TJ MT)/TJ MT/Tecnologia da Informação/2024) A Inteligência Artificial (IA) tem
sido um campo de pesquisa e inovação que evoluiu bastante ao longo das décadas, e
geralmente é dividida em IA fraca e IA forte, conceitos que se referem ao nível de “inteligência”
que a IA consegue simular ou alcançar. Em relação ao conceito de Inteligência Artificial (IA),
assinale a afirmativa que descreve corretamente a diferença entre IA forte e IA fraca.

a) IA forte é um sistema que simula a inteligência humana em tarefas específicas, enquanto IA
fraca consegue aprender e entender contextos complexos, como um ser humano.

b) IA fraca se refere a sistemas que replicam com exatidão a consciência humana, enquanto IA
forte realiza tarefas automatizadas sem a necessidade de consciência.

c) IA forte é caracterizada pela capacidade de adquirir consciência e compreensão geral,
enquanto IA fraca é projetada para executar tarefas específicas sem consciência.

d) IA fraca é um sistema totalmente autônomo, que toma decisões complexas de forma
independente, enquanto IA forte precisa da intervenção humana para operar.

e) IA forte e IA fraca não têm diferença quanto à forma de processamento de informações; a
distinção está apenas na potência do hardware que utilizam.

Comentários:

IA Fraca (ou IA Estreita) Trata-se de sistemas desenvolvidos para realizar tarefas específicas. Esses
sistemas podem simular aspectos da inteligência humana em contextos limitados, como
reconhecimento de voz, diagnóstico médico ou jogos, mas não possuem consciência,
sentimentos ou compreensão geral do mundo. Em suma, a IA fraca é especializada.

IA Forte (ou IA Geral): Esse conceito se refere a sistemas que seriam capazes de adquirir uma
inteligência comparável à humana. Isso incluiria não apenas a execução de tarefas específicas,
mas também a capacidade de aprender, entender contextos complexos, ter consciência e agir de
forma autônoma em uma variedade de situações. A IA forte buscaria replicar a totalidade das
capacidades cognitivas humanas, indo além da simples simulação de funções.

Gabarito: C

9.
(ADAPTADA - PGP UFV/UFV/Tecnologia da Informação/2022) Considere as afirmativas a
seguir:

I. Inteligência Artificial (IA) é a parte da Ciência da Computação que se destina a desenvolver
sistemas capazes de resolver um problema de uma maneira tal que seja considerada
inteligente quando executada por um ser humano.

II. (...)

### III. (...)

IV. Para provar que é inteligente pelo teste de Turing, um sistema (máquina) deve se
comportar como um ser humano.

Está CORRETO o que se afirma, apenas, em:

a) I.

b) IV.

c) I e IV.

Comentários:

I – Cuidado com afirmações que restringem o relacionamento da Inteligência Artificial com
outros campos do conhecimento através de palavras como “apenas” e “somente”. Aqui,
por esse motivo, não há problema em afirmar que a IA pertence ao campo da Ciência da
Computação. Além disso, a afirmativa acerta ao afirmar que se trata de um campo
dedicado ao desenvolvimento de sistemas e tecnologias que podem realizar tarefas que
normalmente requerem inteligência humana.

IV – O teste de Turing introduz uma abordagem comportamental para classificar
determinado sistema como inteligente, assim, não exige que a máquina tenha consciência
ou compreensão verdadeira, mas sim que o comportamento da máquina seja
indistinguível do comportamento humano em um diálogo.

Gabarito: C (I e IV).

10.
(CESGRANRIO/Analista (BNDES)/Ciência de Dados/2024) Segundo um estudo das
pesquisadoras Joy Buolamwini e Timnit Gebru, os softwares de reconhecimento facial comerciais
nunca erram mais de 0,8% quando a face é de um homem de pele clara, mas erram até 34%
quando a face é de uma mulher negra. Isso pode ter efeito no direito de acesso a prédios
privados ou públicos, e até levar a prisão indevida, como relatado por O Globo no artigo
“Prisões por reconhecimento facial avançam pelo país, mas erros em série desafiam tecnologia
de combate ao crime”, no qual se discute como o avanço dessa tecnologia baseada em
inteligência artificial (IA) traz desafios no uso do método.

A partir dos elementos oferecidos, descreva, no âmbito da governança de IA, os conceitos de
justiça e de equidade e explique como eles se aplicam no caso de um software de
reconhecimento facial destinado a permitir a entrada em um prédio público.

Comentários:

Espera-se que o candidato aborde os aspectos apresentados a seguir.

Justiça refere-se à garantia de tratamento imparcial e igualitário para todos os indivíduos,
independentemente de suas características pessoais, como cor da pele, gênero ou etnia. No
contexto de sistemas de reconhecimento facial, a justiça implica que a tecnologia deve ser
projetada e utilizada de maneira a evitar discriminação ou preconceitos que possam levar a
resultados injustos.

Equidade envolve o reconhecimento de que diferentes grupos de pessoas podem ter
necessidades distintas e, portanto, podem exigir abordagens diferenciadas para garantir
resultados justos. Enquanto a justiça enfoca a igualdade de tratamento, a equidade enfoca a
igualdade de resultados, levando em consideração as desigualdades preexistentes.

No contexto de um sistema de reconhecimento facial utilizado para controlar a entrada em um
prédio público, é fundamental que os princípios de justiça e equidade sejam rigorosamente
aplicados, de maneira imparcial, garantindo que o sistema seja igualmente preciso para todos.

Grupos mais vulneráveis a erros desses sistemas requerem medidas específicas para corrigir essas
disparidades, como ajustes nos algoritmos ou verificações adicionais.

## LISTA DE QUESTÕES

## Filosofia e Ética da Inteligência Artificial

1.
(FCC/SEFAZ SP/Gestão Tributária/2026) Determinada Secretaria da Fazenda implementou
um sistema de IA para classificar automaticamente declarações fiscais quanto ao risco de
irregularidade. Após seis meses de operação, auditores identificaram que o modelo estava
atribuindo pontuações de risco sistematicamente mais altas para empresas de setores
específicos, mesmo quando os indicadores financeiros eram similares aos de outros setores com
pontuações menores. A análise técnica revelou que a base de dados histórica utilizada no
treinamento continha proporcionalmente mais autuações em determinados setores devido a
fiscalizações direcionadas realizadas no passado, e não necessariamente por maior incidência
real de irregularidades. O modelo aprendeu e perpetuou esse padrão desproporcional.

O problema de governança e ética em IA que está caracterizado nessa situação é:

a) Violação de privacidade, pois o modelo está acessando dados sensíveis dos contribuintes sem
autorização legal e utilizando informações protegidas pela legislação tributária para treinamento.

b) Falta de explicabilidade, pois o sistema não consegue fornecer justificativas compreensíveis
sobre os motivos que levaram à classificação de risco de cada declaração fiscal individual.

c) Viés algorítmico, pois o modelo reproduz desproporções presentes nos dados de treinamento,
gerando discriminação sistemática contra determinados grupos sem justificativa técnica objetiva.

d) Alucinação do modelo, pois o sistema está gerando classificações de risco fictícias que não
correspondem aos dados reais inseridos pelos contribuintes nas declarações fiscais.

e) Falta de transparência, pois os contribuintes e auditores não têm acesso aos critérios e
variáveis utilizados pelo algoritmo para calcular as pontuações de risco atribuídas.

2.
(CEBRASPE (CESPE)/TCE MG/Ciência da Computação/2026) Certa startup brasileira
desenvolveu uma aplicação de inteligência artificial para auxiliar a justiça federal na análise inicial
de recursos jurídicos de baixo valor. O sistema opera como um agente inteligente que utiliza um
extenso dataset de jurisprudências passadas para calcular a probabilidade de sucesso de novos
recursos, com o objetivo de otimizar a triagem processual ao maximizar a taxa de acerto nas suas
previsões. Em testes, a aplicação atingiu uma impressionante taxa de precisão de 98% na
previsão de resultados. No entanto, uma auditoria de compliance ético revelou que o algoritmo
apresentava um viés: os recursos originários de regiões com baixo índice de desenvolvimento
humano (IDH) do Nordeste brasileiro eram sistematicamente classificados com menor
probabilidade de sucesso, mesmo quando apresentavam mérito legal similar a casos de regiões
mais desenvolvidas. A equipe técnica defendeu o sistema, alegando que ele era racional, pois
maximizava consistentemente a métrica de acerto definida. Considerando a natureza do sistema
criado nessa situação hipotética e a distinção fundamental entre racionalidade e justiça em
sistemas de IA, assinale a opção que apresenta corretamente a falha ética do sistema à luz dos
conceitos básicos da inteligência artificial.

a) O viés regional é uma prova incontestável de que o sistema é um exemplo de inteligência
artificial simbólica, pois somente essa arquitetura, baseada em regras pré-codificadas, é capaz de
manifestar discriminação explícita, ao contrário dos modelos conectivistas (redes neurais).

b) A falha do sistema é uma evidência de que ele não pode ser classificado como um agente
racional, pois, por definição, ele deve seguir a função de utilidade ideal de uma sociedade justa,
o que exige que o sistema possua consciência e um senso moral.

c) O sistema é um agente puramente reativo, e sua incapacidade de manter estados internos
sobre a equidade do dataset é a causa direta do viés, o que demonstra a ineficácia dos sistemas
de machine learning baseados em modelos.

d) O sistema demonstra uma limitação da inteligência artificial forte, cuja alta taxa de acerto é
incompatível com o viés, o que confirma que a singularidade tecnológica não será alcançada
enquanto os sistemas de inteligência artificial não forem treinados apenas com dados totalmente
neutros, sem histórico humano.

e) A racionalidade técnica do sistema é mantida, pois ele maximiza sua função utilidade (taxa de
acerto), mas o viés detectado reside na definição dessa utilidade ou na qualidade dos dados de
treinamento, o que o caracteriza como um sistema racionalmente tendencioso, mas não
irracional

3.
(CEBRASPE (CESPE)/TELEBRAS/Analista Superior/2026) Em sistemas de recomendação
para apoio ao vendedor, o uso de inteligência artificial para sugerir produtos e priorizar
oportunidades é permitido, desde que os algoritmos não discriminem clientes por perfil
socioeconômico, origem ou gênero, em conformidade com os princípios éticos e legais.
4.
(FGV/TJ RJ/Tecnologia da Informação/2026) O cientista de dados Leo está desenvolvendo
um modelo de inteligência artificial para analisar casos e tomar decisões sobre a procedência ou
não do pleito.

Para analisar como o modelo chegou a uma determinada decisão, Leo deve utilizar:

a) auditoria;

b) surrogate models;

c) feature importance;

d) partial dependence plots (PDP);

e) métodos de interpretabilidade local.

5.
(COCP IFMT/IF MT/Engenharia de Computação/2024) O teste de Turing foi projetado
para fornecer uma definição operacional satisfatória de inteligência. O computador passará no
teste se um interrogador humano, depois de propor algumas perguntas por escrito, não
conseguir descobrir se as respostas escritas vêm de uma pessoa ou de um computador. O teste
de Turing evitou deliberadamente a interação física direta entre o interrogador e o computador
porque a simulação física de uma pessoa é desnecessária para a inteligência. Entretanto, o
chamado teste de Turing total inclui um sinal de vídeo, de forma que o interrogador possa testar
as habilidades de percepção do indivíduo, além de oferecer ao interrogador a oportunidade de
repassar objetos físicos “pela janelinha”. Para ser aprovado no teste de Turing total, o
computador precisaria ter seis capacidades. Sabendo destas informações, numere a coluna da
direita (capacidade) de acordo com sua correspondência com a coluna da esquerda
(funcionalidade).

1- Processamento de linguagem natural

2 - Representação de conhecimento

3 - Raciocínio automatizado

4 - Aprendizado de máquina

5 - Visão computacional

6 - Robótica

( ) Permite manipular objetos e movimentar-se.

( ) Permite adaptar-se a novas circunstâncias, para detectar e extrapolar padrões.

( ) Permite usar as informações armazenadas com a finalidade de responder a perguntas e tirar
novas conclusões.

( ) Permite perceber objetos.

( ) Permite que o computador se comunique com sucesso em uma linguagem de idioma.

( ) Permite armazenar o que sabe ou ouve.

Assinale a alternativa que apresenta a numeração CORRETA da coluna da direita, de cima para
baixo, conforme Russel e Norvig (2013):

RUSSELL, S.; NORVIG, P. Inteligência Artificial. Elsevier Bookman. 3º Ed. 1324 pg. 2013.

a) 6-3-4-5-2-1

b) 5-4-1-6-3-2

c) 5-1-4-6-2-3

d) 4-3-2-6-5-1

e) 6-4-3-5-1-2

6.
(VUNESP/Auditor de Controle Externo/TCE SP2025) Assinale a alternativa que apresenta
uma medida eficaz para minimizar o viés de resposta na utilização de inteligência artificial
generativa.

a) Não atualizar o modelo ou o conjunto de dados com frequência, pois a tendência natural do
modelo é que o viés de resposta estabilize-se ao longo do tempo.

b) Basear a validação do modelo em um único conjunto de dados homogêneo, desconsiderando
variações contextuais.

c) Permitir que o modelo se autotreine e se ajuste sem supervisão e intervenção humana
enviesada.

d) Implementar revisões regulares do conjunto de dados, visando assegurar a diversidade e a
representatividade dos dados utilizados para treinar e ajustar o modelo.

e) Selecionar apenas dados históricos e antigos, pois sempre fornecem credibilidade histórica ao
modelo.

7.
(IBFC/AJ TRF5/TRF 5/Apoio Especializado/Análise de Sistemas de Informação/2024)
Analise a citação, que trata de uma categoria de Inteligência Artificial (IA):

==5460==

“[...] acredita que um dia será possível recriar máquinas capazes de pensar, criar e exibir
comportamento inteligente nos moldes humanos, a partir da criação de algoritmos cognitivos
que possam executar em computadores [...]” (SILVA et al., 2018, p.17).

Assinale a alternativa que apresenta esta categoria de IA.

a) Hiperinteligência

b) Superinteligência

c) Inteligência artificial fraca

d) Inteligência artificial forte

8.
(FGV/AJ (TJ MT)/TJ MT/Tecnologia da Informação/2024) A Inteligência Artificial (IA) tem
sido um campo de pesquisa e inovação que evoluiu bastante ao longo das décadas, e
geralmente é dividida em IA fraca e IA forte, conceitos que se referem ao nível de “inteligência”
que a IA consegue simular ou alcançar. Em relação ao conceito de Inteligência Artificial (IA),
assinale a afirmativa que descreve corretamente a diferença entre IA forte e IA fraca.

a) IA forte é um sistema que simula a inteligência humana em tarefas específicas, enquanto IA
fraca consegue aprender e entender contextos complexos, como um ser humano.

b) IA fraca se refere a sistemas que replicam com exatidão a consciência humana, enquanto IA
forte realiza tarefas automatizadas sem a necessidade de consciência.

c) IA forte é caracterizada pela capacidade de adquirir consciência e compreensão geral,
enquanto IA fraca é projetada para executar tarefas específicas sem consciência.

d) IA fraca é um sistema totalmente autônomo, que toma decisões complexas de forma
independente, enquanto IA forte precisa da intervenção humana para operar.

e) IA forte e IA fraca não têm diferença quanto à forma de processamento de informações; a
distinção está apenas na potência do hardware que utilizam.

9.
(ADAPTADA - PGP UFV/UFV/Tecnologia da Informação/2022) Considere as afirmativas a
seguir:

I. Inteligência Artificial (IA) é a parte da Ciência da Computação que se destina a desenvolver
sistemas capazes de resolver um problema de uma maneira tal que seja considerada
inteligente quando executada por um ser humano.

II. (...)

### III. (...)

IV. Para provar que é inteligente pelo teste de Turing, um sistema (máquina) deve se
comportar como um ser humano.

Está CORRETO o que se afirma, apenas, em:

a) I.

b) IV.

c) I e IV.

10.
(CESGRANRIO/Analista (BNDES)/Ciência de Dados/2024) Segundo um estudo das
pesquisadoras Joy Buolamwini e Timnit Gebru, os softwares de reconhecimento facial comerciais
nunca erram mais de 0,8% quando a face é de um homem de pele clara, mas erram até 34%
quando a face é de uma mulher negra. Isso pode ter efeito no direito de acesso a prédios
privados ou públicos, e até levar a prisão indevida, como relatado por O Globo no artigo
“Prisões por reconhecimento facial avançam pelo país, mas erros em série desafiam tecnologia
de combate ao crime”, no qual se discute como o avanço dessa tecnologia baseada em
inteligência artificial (IA) traz desafios no uso do método.

A partir dos elementos oferecidos, descreva, no âmbito da governança de IA, os conceitos de
justiça e de equidade e explique como eles se aplicam no caso de um software de
reconhecimento facial destinado a permitir a entrada em um prédio público.

## GABARITO

1. C
4. E
7. D

2. E
5. E
8. C

3. Certo
6. D
9. C (I e IV).

## BIBLIOGRAFIA

Bostrom, N. (2014). SUPERINTELLIGENCE Paths, Dangers, Strategies. Oxford: 2014.

Dignum, V. (2019). Responsible Artificial Intelligence How to Develop and Use AI in a Responsible

Way. Cork: Springer Nature Switzerland.

Ertel, W. (2017). Introduction to Artificial Intelligence. Springer International Publishing.

Han, J. (2011). Data mining: Concepts and techniques.

Mitchell, M. a. (2019). Artificial intelligence: A guide for thinking humans. New York: Farrar, Straus

and Giroux .

Russell, S. J. (2016). Artificial intelligence: a modern approach. Pearson.

Soares, P. V. (2022). Inteligência Artificial e Proteção de dados: Boas práticas nos

desenvolvimentos tecnológicos. São Paulo.

Wood, A., Altman, M., Bembenek, A., Bun, M., Gaboardi, M., Honaker, J., ... &amp; Vadhan, S. (2018).

Differential privacy: A primer for a non-technical audience. Vand. J. Ent. &amp; Tech. L., 21, 209.

ABNT NBR ISO/IEC 22989

Amoroso, Fabrício Steinle Inteligência Artificial Explicável com LIME e SHAP aplicada à Rede

Neural Convolucional / Fabrício Steinle Amoroso. -- Bauru, 2023 48 p. : il.

https://www.markovml.com/blog/lime-vs-shap
