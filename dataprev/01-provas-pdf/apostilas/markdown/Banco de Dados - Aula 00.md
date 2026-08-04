# Banco de Dados - Aula 00

## Índice

1) Apresentação - Prof. Lucas Ianni
3

2) 0.0 Fundamentos de Banco de Dados - Teoria
4

3) 0.1 Fundamentos de Banco de Dados - Atores - Teoria
56

4) 0.0 Fundamentos de Banco de Dados - Questões Comentadas - FGV
62

5) Fundamentos de Banco de Dados - Bibliografia
79

## BANCO DE DADOS PARA CONCURSOS

## Dados × Informação

Pessoal, antes de iniciarmos o curso de banco de dados, precisamos especificar a sua “matéria
prima”: o dado.

Atualmente em concursos, evolui-se tanto na sua cobrança que precisamos de uma aula
específica sobre “dado” para conseguirmos responder todas questões do tema. Por isso, nossa
ideia aqui é passar o mínimo necessário para que o curso de banco de dados possa ser
compreendido, e, cobranças mais específicas sobre o tema, serão aprofundadas em aula própria
do tema.

Entendido isso, vamos ser direto ao ponto, apresentando a definição formal:

Dados são observações ou medições representadas

como texto, números ou multimídia

Em outras palavras, dados nada mais são que observações ou medições sobre o mundo
guardadas em algum formato que podemos consultar mais tarde: como textos, números,
imagens, vídeos ou áudios.

Complementando essa definição, Elmasri e Navathe afirmam que “dados são fatos conhecidos
que podem ser registrados e possuem significado implícito”.

O “nome de uma pessoa”, por exemplo, encaixa-se perfeitamente nessa descrição: trata-se de
um fato conhecido, dotado de significado e passível de ser registrado, já que basta anotá-lo em
uma agenda para comprovar.

Já em uma perspectiva mais prática, Date ensina que “dado é aquilo armazenado no banco de
dados”.

Esclarecido o conceito de dado, precisamos diferenciá-lo de informação, dada sua relevância
para o estudo de banco de dados

Segundo Date, a informação se refere ao significado dos dados para determinado usuário
(Date, 2004). Em outras palavras, informação é um dado contextualizado.

Por exemplo, “Nota 7” pode ser considerada uma informação, porque um aluno pode a
processar como “aprovado” no seu contexto escolar.

De modo mais formal, podemos definir:

Informação resulta do processamento, manipulação e organização

de dados de tal forma que represente um acréscimo

ao conhecimento da pessoa que a recebe

Agora chegamos na parte mais curiosa desta seção, porque a literatura costuma definir banco de
dados como “uma coleção de dados inter-relacionados, representando informações sobre um
domínio específico”.

Percebam então que banco de dados nada mais são que conjuntos de dados contextualizados
(por serem “inter-relacionados”), ou seja, em banco de dados temos informações!

É por isso que, no contexto de um banco de dados, dados e informações podem ser usados
de forma intercambiável, significando a mesma coisa. Inclusive, nesse PDF utilizaremos os termos
como sinônimos.

Em aulas específicas de dados, avançamos além dos conceitos de “dado” e
“informação”, e explicamos “conhecimento” e “sabedoria”. Para uma aula de
banco de dados, isso não é necessário, pois os BDs se limitam a armazenar dados
contextualizados (informações).

### (ADAPTADA

-

### FAT

Concursos/CET
SP/Tecnologia
da
Informação
e
Comunicação/Informática/2008) Analise as afirmações abaixo.

I. Dado é um fenômeno (valor) qualquer desprovido de um significado; no momento em que o
dado é contextualizado em um determinado nível de abstração, passa a ser identificado como
uma informação.

==5460==

II. Os conceitos de informação e dado são sinônimos, em muitos contextos, intercambiáveis.

III. Informação é o resultado do processamento, manipulação e organização de dados de tal
forma que represente um acréscimo ao conhecimento da pessoa que a recebe.

IV. Dados são resultantes do processamento das informações. O processamento pode ser
constituído por um conjunto de atividades que envolvem cálculo, comparação, ordenação.

Estão corretas as afirmações:

a) I, III, IV

b) I, II e III

c) I, III

d) I, IV

Comentários:

I. Verdadeira. Dado é um valor “cru” sem contexto (ex.: 42). Quando damos contexto (“42 °C em
Fortaleza, hoje às 15h”), vira informação.

II. Falsa. Não é correto falar que “os conceitos de informação e dado são sinônimos”, porém em
alguns contextos podem ser tratados de forma intercambiável (como em Banco de Dados, em
que dados se tornam informações).

III. Verdadeira. Informação é o resultado de processar/organizar dados de modo que acrescente
conhecimento.

IV. Falsa. Está invertido: não são os dados que resultam do processamento da informação, é a
informação que resulta do processamento dos dados.

Gabarito: C

## Tipos de estruturas de dados

Podemos atribuir classificações distintas aos nossos dados a depender da forma como estão
organizados.

Quando temos um modelo pré-definido e rígido que define a sua estrutura, os chamamos de
dados estruturados. Assim, dados estruturados seguem um esquema de formatação fixo, que
especifica exatamente as suas características.

É por isso que, se estamos trabalhando com dados estruturados, temos informações precisas dos
dados: sabemos exatamente com quais entidades estamos trabalhando (por exemplo, se são
dados de “pessoas”, “animais”, “objetos” etc.), quais são os campos que ali existem (por
exemplo, existem os campos “nome” e “idade” das pessoas), quais os tipos desses campos
(“nome” é “texto” e “idade” é um “número inteiro”), quais as regras sobre eles (“idade só pode
ser um número zero ou positivo”) e assim por diante.

Esse tipo de informação se adapta perfeitamente à representação em tabelas: as colunas
exibem os campos, e as linhas, os dados propriamente ditos. Veja, a seguir, um exemplo de
tabela com dados de pessoas:

Para finalizar, saibam que, como há um “molde” claro para os dados, conseguimos armazenar,
buscar e analisar esses dados de forma bastante facilitada e eficiente, sendo, inclusive, o formato
padrão utilizado na maioria dos bancos de dados (os chamados “relacionais” ou “SQL”, que
ainda estudaremos ao longo do curso).

No extremo oposto, quando não temos um modelo ou uma estrutura de dados já definida,
estamos trabalhando com dados não estruturados.

Como aponta Coronel, dados não estruturados existem em seu estado bruto (ou nativo), isto
é, são armazenados na forma com que foram coletados. Além disso, o autor informa que, pela
sua falta de formato específico, não podemos trabalhar diretamente com esse tipo de dado, pois
não geram informação. Dessa forma, para conseguirmos processá-los em informações, antes
precisamos extrair ou impor alguma estrutura a eles.

Na prática, a maior parte dos dados existentes hoje se enquadra nessa categoria. Pensem em
textos, e-mails, documentos, páginas da web, feeds e postagens em redes sociais, arquivos de
imagem e de áudio, entre tantos outros exemplos.

Justamente pela ausência de uma organização clara dos dados desses exemplos, que esses
dados são mais desafiadores de consultar e analisar, exigindo técnicas mais avançadas de
processamento.

Finalmente, temos um caso intermediário entre os dois, temos os dados semi-estruturados.
Aqui os dados apresentam uma estrutura, porém essa não é fixa e bem formatada.

Ou seja, embora os dados semi-estruturados apresentem regras em um formato em
comum, essas não precisam ter exatamente as mesmas características entre si.

Por exemplo, podemos ter dados de pessoas com endereço com “LOGRADOURO” e
“NÚMERO”, enquanto outras incluem também o campo "COMPLEMENTO".

Vejam que nesse exemplo há alguma estrutura, já que ambos dados possuem informações de
endereço, porém enquanto um dado apresentou apenas dois atributos, outro apresentou três.

Para organizar esse tipo de dado, costumamos recorrer a notações e linguagens flexíveis,
baseadas em tags e marcadores, como o XML (Extensible Markup Language) e o JSON
(JavaScript Object Notation). Confira, a seguir, como esses formatos se mostram adequados para
representar dados de pessoas com características distintas:

### JSON

### XML

{

"pessoas": [

{

"nome": "Marina",

"endereco": {

"logradouro": "Rua Original",

"numero": "45A",

}

},

{

"nome": "Carlos",

"endereco": {

"logradouro": "Av. Atlantis",

"numero": "47",

"complemento": "Casa 2"

}

}

]

}

&lt;cadastro&gt;

&lt;pessoa nome="Marina"&gt;

&lt;endereco logradouro="Rua Original"

numero="45A" &gt;

&lt;/endereco&gt;

&lt;/pessoa&gt;

&lt;pessoa nome="Carlos"&gt;

&lt;endereco logradouro="Av. Atlantis"

numero="47"

complemento="Casa 2" &gt;

&lt;/endereco&gt;

&lt;/pessoa&gt;

&lt;/cadastro&gt;

(ADAPTADA - Instituto Consulplan/AJ (TJ RO)/TJ RO/Estatístico/2025) No contexto de análises
estatísticas, os dados podem estar disponíveis em diferentes tipos de organização. Dependendo
da forma de definição e armazenamento, os conjuntos de dados são tipicamente caracterizados
como estruturados, semiestruturados e não estruturados.

Diante do exposto, analise as afirmativas a seguir.

I. Enquanto dados não estruturados são normalmente armazenados em seu formato nativo
(como vídeos, imagens ou documentos de texto), dados estruturados são armazenados em
linhas e colunas e podem ser mapeados para campos predefinidos.

II. Ao contrário dos dados estruturados, que podem ser organizados e acessados por meio de
bancos de dados relacionais, dados não estruturados não têm um modelo rígido de organização
predefinido.

III. Conjuntos de dados semiestruturados usam tags e marcadores (ou seja, metadados) em vez
de exigir um esquema predefinido em tabelas, linhas e colunas, como nos dados estruturados.

Está correto o que se afirma em

a) I, II, III

b) I e III, apenas.

c) II, apenas.

d) I, apenas.

e) III, apenas.

Comentários:

I. Correta. Dados estruturados são aqueles que seguem um molde rígido e fixo. Por isso, eles são
organizados de forma clara em tabelas, com linhas e colunas (como uma planilha), facilitando a
busca. Já os dados não estruturados são guardados em seu estado bruto (nativo), sem uma
estrutura clara predefinida, como acontece com documentos de texto, vídeos ou sons.

II. Correta. Dados estruturados têm um modelo pré-definido e rígido. Como eles seguem um
esquema fixo (tabelas e colunas), são facilmente organizados em sistemas tradicionais de Banco
de Dados. Por outro lado, a principal característica dos dados não estruturados é justamente a
ausência de um modelo ou estrutura definida.

III. Correta. Os dados semiestruturados são um meio-termo, pois eles têm alguma estrutura, mas
ela não é fixa como a das tabelas (linhas e colunas) dos dados estruturados. Para organizar esses

dados de maneira flexível, são usadas tags e marcadores, geralmente em formatos como XML ou
JSON.

Gabarito: A

(COSEAC UFF/Tec (UFF)/UFF/Tecnologia da Informação/2025) A representação dos dados em
um arquivo de e-mail sem uma organização específica e a representação dos dados em um
cadastro de um paciente com atributos não previamente definidos, são exemplos,
respectivamente, de formatos de

a) dados estruturados e dados semiestruturados.

b) dados semiestruturados e dados não estruturados.

c) dados estruturados e dados não estruturados.

d) dados não estruturados e dados semiestruturados.

e) dados semiestruturados e dados estruturados.

Comentários:

O e-mail é um documento de texto sem estrutura clara, sendo não estruturado. O cadastro que
não exige um esquema fixo (atributos não previamente definidos) tem uma estrutura que não é
rígida, classificando-se como semiestruturado.

Gabarito: D

## Banco de Dados

Sabemos que um banco de dados se trata de uma coleção organizada de dados
relacionados, ou seja, dados com algum significado implícito.

Em outras palavras, é uma coleção de dados inter-relacionados que contém informações sobre
um domínio específico. Assim, para um conjunto de dados ser considerado um banco de
dados, é necessário que estejam inseridos em um contexto.

Como consequência direta disso, não podemos ter “números” e “textos” juntos, mas sem nexo:
aqui eles devem carregar algum sentido.

Por exemplo, se tivermos uma planilha Excel com dados em um contexto de biblioteca, como
clientes e livros, temos um banco de dados.

(exemplo de banco de dados, em Excel)

Abrindo um parêntese, vamos aproveitar esse
momento para apresentar a representação
gráfica padrão para um banco de dados: esses
“cilindros” à direita.

Peço então que sempre que virem algum
desses desenhos, saibam que estamos lidando
com um banco de dados.

(representações gráficas de bancos de dados)

Continuando, o curioso é que essa definição abrangente permite que “coisas que não pareçam
banco de dados” (e que de fato não são) sejam classificadas como um.

Por exemplo, esse PDF, por se tratar de uma coleção de dados relacionados com significado,
poderia ser classificado como um banco de dados, mesmo que sentimos (e sabemos) que não é.

Então, Elmasri e Navathe apresentam algumas propriedades implícitas que precisam ser
cumpridas para que nossos dados armazenados sejam classificados como “banco de dados”.
Vejamos.

Propriedade Implícita
Explicação
Consequência

Um banco de dados
representa algum aspecto
do mundo real (domínio), às
vezes chamado de
mini-mundo ou de universo
de discurso.

O banco descreve um
pedaço da realidade (como
uma loja, com clientes,
venda, estoque, …)

Quando a realidade muda, o
banco deve mudar junto.
Ou seja, devemos manipular
nossas informações, como
inserir novos clientes, atualizar
as idades dos clientes, deletar
vendas canceladas etc. se o
mundo real exigir.

Um banco de dados é uma
coleção logicamente
coerente de dados com
algum significado inerente.

Não é um monte de dados
“jogados”.
Os dados têm relações e
regras que lhes dão sentido
com a realidade (p.ex.: um
cliente pode comprar um ou
mais produtos).

Uma variedade aleatória de
dados, mesmo que
contextualizada, não pode ser
chamada de banco de dados.

Um banco de dados é
projetado, construído e
populado com dados para
uma finalidade específica.

Bancos de dados nascem de
requisitos: Quem usa? Para
quê? Quais perguntas o
banco precisa responder?
Quais operações são críticas?

Ele possui um grupo definido
de usuários e algumas
aplicações nas quais esses
usuários estão interessados,
possibilitando, principalmente,
a recuperação de informações.

Percebam então que esse PDF não pode ser considerado um banco de dados porque não
cumpre com tais propriedades: não espelha um mini-mundo, não possui estrutura de regras para
lhe dar sentido com a realidade e não foi projetado para armazenar dados de acordo com
alguma necessidade de algum usuário.

(CEBRASPE (CESPE)/AAAJ (DP DF)/DP DF/Informática Banco de Dados/2022) Um banco de
dados é, especificamente, um conjunto aleatório de dados não relacionados que refletem algo
do mundo real.

Comentários:

Está errado porque banco de dados não é “conjunto aleatório de dados”. Um BD é uma coleção
organizada e integrada de dados relacionados, criada para modelar um “minimundo” real.

Gabarito: Errado

(Instituto CONSULPAM/Ag Adm/2024) São um conjunto de arquivos relacionados entre si com
registros sobre pessoas, lugares ou coisas. São coleções organizadas que se relacionam de forma
a criar algum sentido (informação) e dar mais eficiência durante uma pesquisa ou estudo. São de
vital importância para empresas e setores públicos e há duas décadas se tornaram a principal
peça dos sistemas de informação. Normalmente existem por vários anos sem alterações em sua
estrutura . A descrição anteposta refere-se a(ao):

a) Banco de Talentos

b) Banco de Horas

c) Banco de Dados

d) Banco de Fomento

Comentários:

A descrição fala de coleções organizadas de arquivos/registros, relacionadas entre si, que geram
informação, exatamente o que é um banco de dados.

Em relação às outras alternativas:

Banco de Talentos: cadastro de candidatos (área de RH).

Banco de Horas: controle de horas trabalhadas.

Banco de Fomento: instituição financeira de crédito/desenvolvimento.

Gabarito: C

Pois bem, agora precisamos conhecer alguns aspectos práticos dos bancos de dados.

Saibam que bancos de dados variam muito de tamanho e complexidade, podendo ser
pequenos e simples, como uma lista de nomes e endereços com algumas centenas de linhas,
ou grandes e complexos, como uma biblioteca com meio milhão de livros.

Além disso, percebam que em nenhum momento restringimos bancos de dados a sistema
automatizados. Inclusive, no exemplo do parágrafo anterior, percebemos que bancos de dados
podem ser manuais.

Assim sendo, coisas como um catálogo de fichas (aqueles móveis com gavetas cheias de cartões
de papel cada um representando um item do acervo da biblioteca), por cumprirem com todas
restrições implícitas apresentadas, podem ser classificados como um banco de dados.

## Sistema Gerenciador de Banco de Dados

Vamos supor agora que nosso banco de dados seja um acervo de biblioteca com milhares de
livros. O que queremos então é possibilitar a operacionalização desse banco pelos usuários, isto
é, permitir que as pessoas interajam com os livros.

Porém, seria uma péssima ideia deixar os usuários os manipularem diretamente: os livros ficariam
fora do lugar, perderíamos livros, novos livros doados seriam colocados fora de ordem… enfim,
uma bagunça total.

Então, uma forma mais inteligente de gerenciarmos nossa biblioteca seria criar um sistema,
isto é, estabelecer um conjunto de pessoas, normas e procedimentos para fornecer serviços aos
usuários.

Assim sendo, se alguém quiser consultar um livro, um bibliotecário acessa aquele elemento e o
entrega. Se há doação de um livro, há uma regra que define onde ele deve ser inserido. Se um
livro some, há um procedimento para o recuperar.

Resumindo, nosso sistema de gerenciamento cuida para que nosso banco de dados fique
sempre organizado, confiável e seguro.

Saibam que essa mesma lógica se aplica para bancos computadorizados: se quisermos garantir
que o banco nunca fique inconsistente, precisamos de um Sistema Gerenciador de Banco de
Dados (SGBD - Database Management System) para realizar as mais diversas manipulações nos
dados exigidas pelos usuários.

Agora que entendemos a lógica, vejamos a definição formal apresentada por Elmasri e Navathe:

Um SGBD se trata de uma coleção de programas
que permite aos usuários criar e manter um banco de dados

Além dessa definição, esses próprios autores estabelecem também que “o SGBD é um sistema
de software de uso geral que facilita o processo de definição, construção, manipulação e
compartilhamento de bancos de dados entre diversos usuários e aplicações”.

Resumindo, o SGBD nada mais é que o pacote de softwares que permite aos usuários (seja
diretamente ou indiretamente por meio de um programa) trabalharem com o banco de dados
sem se preocuparem com os diversos problemas práticos que poderiam surgir, como a segurança
do banco, a corrupção dos seus dados, a perda de sua estrutura etc.

Para alguns autores, a união do banco de dados com o SGBD é chamada de sistema de
banco de dados. Já para outros, um sistema de banco de dados envolve quatro componentes

principais: dados, hardware, software (como SGBD, a linguagem para interagirmos com ele e
outros programas) e usuários (Date, 2004).

(Machado de Assis /Analista de Sistemas/CM Estreito/2016) Julgue os itens abaixo com relação
ao banco de dados:

I- BD – É uma coleção de dados interligados, representando informações sobre um domínio
especifico.

II- SGBD – É um software com recursos específicos para facilitar a manipulação das informações
de um BD e o desenvolvimento de programas aplicativos.

III- SBD – É um sistema de manutenção de registros por computador envolvendo apenas um
componente principal: dados.

a) Apenas a afirmativa I é verdadeira.

b) Apenas as afirmativas I e II são verdadeiras.

c) Apenas as afirmativas I e III são verdadeiras.

d) Todas as afirmativas são verdadeiras.

Comentários:

I (BD) Verdadeira. Banco de dados é um conjunto organizado de dados inter-relacionados sobre
um domínio.

II (SGBD) Verdadeira. Sistema Gerenciador de Banco de Dados é o software que
cria/lê/atualiza/apaga dados, controla acesso, segurança, backup e facilita o desenvolvimento de
apps.

III (SBD) Falsa. Um Sistema de Banco de Dados não é “só dados”, é o banco de dados + SGBD.

Gabarito: B

(DIRENS Aeronáutica/EAGS (EEAR)/EEAR/Informática/2018) Qual das alternativas a seguir não
apresenta um dos componentes essenciais de um banco de dados?

a) Uma base de dados

b) Dicionário de dados

c) Um sistema gerenciador de banco de dados

d) Programas voltados a necessidades objetivas

Comentários:

Um sistema de banco de dados envolve quatro componentes principais: dados, hardware,
software (SGBD, a linguagem para interagirmos com ele e programas) e usuários.

Gabarito: B

## Características dos bancos de dados

Nesse momento vocês podem estar se questionando “Mas por que trabalhar com um banco de
dados? Por que não simplesmente armazenamos nossos dados em arquivos (tipo um ‘.txt’)?”.

Bom, não fazemos isso porque esse jeito (antigo) de processar dados, em que cada usuário cria
seus próprios arquivos, se mostrou extremamente infrutífero na prática.

Pense em uma universidade com o setor financeiro e o pedagógico. O setor financeiro precisa
cuidar se os alunos estão pagando a mensalidade em dia, então cria o arquivo
“controle_pagamento_alunos.txt”, enquanto pedagógico precisa cuidar a qual curso cada aluno
está matriculado, então cria o arquivo “controle_curso_alunos.txt”.

De pronto, percebam um grande problema de redundância de dados, já que o mesmo aluno
aparece nos dois arquivos. Isso é um risco porque podemos facilmente acabar em um ambiente
inconsistente: se um setor registrar o nome de um aluno errado, os dados sobre a mesma pessoa
não “baterão” entre sistemas.

Além disso, acabamos em ineficiências como desperdício de espaço (armazenamos a mesma
informação várias vezes) e esforços multiplicados (se atualizarmos alguma informação sobre o
aluno, alguém precisa atualizar a informação em todos arquivos) (Elmasri &amp; Navathe, 2007).

É por isso que abandonamos essas práticas de armazenamento por arquivos e partimos para a
abordagem do banco de dados, mantendo os dados num local central.

Entendida essa explicação básica, agora precisamos nos aprofundar nas características especiais
que os bancos de dados apresentam, segundo Elmasri e Navathe, sobre a abordagem de
processamento de dados diretamente em arquivos.

(FGV/AL MT/Analista de Sistemas/2013) Características que distinguem a abordagem de bancos
de dados relacionais e centralizados da abordagem tradicional, baseada em processamento de
arquivos, estão listadas a seguir à exceção de uma. Assinale‐a.

a) Compartilhamento de dados e processamento de transações multiusuários.

b) Suporte para múltiplas visões de dados.

c) Isolamento entre os programas e os dados.

d) Dados são armazenados e tratados somente como cadeias de caracteres.

e) Natureza autodescritiva do sistema de bancos de dados.

Comentários:

Segundo a literatura, as características que distinguem a abordagem de bancos de dados
centralizados da abordagem tradicional de processamento de arquivos são compartilhamento de
dados e processamento de transações multiusuários, suporte para múltiplas visões de dados,
isolamento entre os programas e os dados e natureza autodescritiva do sistema de bancos de
dados.

Gabarito: D

(SELECON/EMGEPRON/Analista de Sistemas/2021) Na implementação de bancos de dados
relacionais, busca-se solucionar ou minimizar dois problemas, descritos a seguir.

I. Está associado à ocorrência de informações armazenadas em arquivos separados, com
conteúdos diferentes.

II. Está associado à existência das mesmas informações em aplicações diferentes, como por
exemplo, em arquivos de material e de registros de projetos.

As descrições em I e em II referem-se, respectivamente, aos seguintes termos:

a) inconsistência e redundância

b) inconsistência e dependência

c) integridade e redundância

d) integridade e dependência

Comentários:

Quando a mesma informação aparece em dois lugares com valores divergentes, temos
inconsistência, porque os dados são contraditórios (I). Já quando temos as mesmas informações
em aplicações diferentes, há redundância (II).

Gabarito: A

### Natureza de autodescrição de um sistema de banco de dados

Para conseguirem trabalhar em qualquer minimundo, o próprio sistema de banco de dados
precisa manter a descrição dos seus dados armazenados.

Se isso está confuso, pense assim: se tivéssemos um campo chamado de “idade”, como nosso
sistema de banco de dados saberia se deve manipulá-lo considerando que se trata de um
número ou uma palavra?

É claro que nós humanos sabemos, por experiência, que se trata de um número, mas o sistema
não tem essa consciência. Então, em algum lugar, precisa haver a definição de que “idade” deve
ser armazenado e manipulado como se fosse um número.

Essa descrição dos próprios dados é chamada de natureza autodescritiva do sistema de banco de
dados.

Assim sendo, por serem autodescritivos, os sistemas de banco de banco de dados
armazenam não somente os dados, mas também a definição completa e integrada de sua
estrutura e restrições.

Sendo mais específico, quem guarda essa descrição dos dados é o SGBD em um objeto
chamado catálogo de dados (ou dicionário de dados).

Saibam que os dados armazenados no catálogo possuem um nome específico: metadados.
Na prática, é como se o catálogo de dados fosse um “mini-banco de dados” que descreve (e
“explica”) o banco principal.

Dessa forma, nos metadados definimos coisas como a estrutura do banco, o tipo dos dados
(“idade é um número inteiro”), além de diversas restrições sobre os dados (“a idade só pode ser
positiva”).

Para finalizar, vejamos uma definição técnica de metadados.

Metadados são informações estruturadas adicionais, relativas a certo conjunto

de dados, que podem ser utilizadas para descrevê-los, explicá-los, localizá-los

e manipulá-los da forma mais eficiente possível, os tornando mais fáceis de

recuperar, usar ou gerenciar

(FCC/Ana TI (SANASA)/SANASA/Suporte DBA Banco de Dados/2019) Uma característica
fundamental da abordagem de um banco de dados é que o sistema de banco de dados possui
não apenas o banco de dados, mas também uma completa definição ou descrição da estrutura
desse banco de dados e suas restrições. Essa definição fica armazenada em um local que contém
informações como a estrutura de cada arquivo, o tipo e o formato de armazenamento de cada
item de dado e várias restrições sobre os dados. A informação armazenada neste local tem uma
certa denominação e descreve a estrutura do banco de dados primário.

O local ao qual o texto se refere e a denominação da informação nele armazenada são, correta e
respectivamente,

a) modelo de dados – tupla.

b) modelo de dados – transações enlatadas.

c) software SGBD – transações enlatadas.

d) catálogo do SGBD – metadados.

e) módulo buffering – metadados.

Comentários:

O SGBD (Sistema de Gerenciamento de Banco de Dados) não guarda só os dados, mas também
guarda a sua descrição: quais tabelas existem, quais colunas cada tabela tem, tipos (número
inteiro, texto, data etc) etc. Ou seja, guarda os metadados, os “dados sobre os dados”. Essa
descrição oficial fica guardada em um lugar especial chamado catálogo (também conhecido
como dicionário de dados).

Gabarito: D

(CEBRASPE (CESPE)/Tec (FUB)/FUB/Tecnologia da Informação/2025) Os metadados são dados
que fornecem informações sobre outros dados e resumem informações básicas sobre dados,
facilitando a localização e o trabalho com instâncias específicas de dados.

Comentários:

Metadados são informações estruturadas adicionais que descrevem ou fornecem dados sobre
outros dados. Essa descrição concisa é vital porque o Sistema Gerenciador de Banco de Dados
(SGBD) armazena os metadados em um Catálogo de Dados para definir toda a estrutura e
restrições do banco. Na prática, os metadados auxiliam a descrever, explicar e localizar o
conjunto de dados, o que é essencial para facilitar a recuperação, uso ou gerenciamento das
instâncias de dados de forma eficiente.

Gabarito: Certo

#### Tipos de metadados

Sabemos que os metadados apresentam informações sobre os dados em si, sendo úteis para
diversas funções, como os encontrar, organizar, entender, gerenciar e preservar.

Ocorre que, a depender da sua função principal, podemos atribuir diversas classificações aos
metadados.

Bom, os metadados descritivos (ou de identificação) rotulam um dado de acordo com que
ele se trata, servindo principalmente para facilitar a pesquisa, a descoberta e a recuperação
de itens. Basicamente, explica “o que é a coisa”. Por exemplo, supondo que nosso dado seja um
livro, metadados descritivos poderiam ser seu título, autor, palavras-chave etc.

Para complementar o metadado descritivo, temos os metadados semânticos, que definem
relações entre dados e adicionam significado contextual. Basicamente, explica “o que a coisa
significa e como se conecta a outras coisas”. Por exemplo, considerando o dado um livro, os

metadados
semânticos
podem
proporcionar
maior clareza sobre esse dado, como
"formato:ebook" ou "gênero:aventura".

Bom, os metadados estruturais definem o “mapa” das partes que compõem um dado.
Assim, servem para mostrar como as partes se encaixam. Por exemplo, supondo que nosso dado
seja um livro eletrônico, um metadado estrutural pode ser seu índice.

Os metadados administrativos auxiliam na gestão dos dados, servindo para coisas
“administrativas”, como controlar propriedade, acesso e ciclo de vida dos dados. Por exemplo,
supondo que nosso dado seja um livro eletrônico, um metadado administrativo pode ser o seu
proprietário.

Poderíamos terminar aqui a seção, pois são esses os tipos clássicos de metadados apresentados
na literatura de banco de dados. Porém, atualmente a engenharia de dados avançou nessa
taxonomia apresentando outras classificações possíveis.

Com os metadados técnicos temos as especificações do dado. Dessa forma, servem para
informar como interagir com o arquivo corretamente, como entendê-lo, abri-lo ou usá-lo. Por
exemplo, supondo que nosso dado seja um livro virtual, o formato “.pdf” se trata de um
metadado técnico.

De outro modo, os metadados do negócio explicam contexto de negócio por trás dos dados
e servem para ajudar os gestores (usuários não técnicos) no entendimento do dado. Assim
sendo, explicam o significado, o uso e o valor do dado para a empresa, garantindo a governança,
localização e compreensão. Por exemplo, supondo um livro virtual, podemos ter como
metadados do negócio o mercado em que está inserido e o idioma nesse mercado, como “Brasil
- PT-BR”.

Já os metadados operacionais descrevem os aspectos de processamento dos dados. Ou
seja, contam como os dados são processados pelos sistemas, ajudando as equipes de dados e
engenharia a saber se tudo rodou, quanto tempo levou, onde falhou, etc. Alguns exemplos
conhecidos incluem informações de processo persistidos em logs, como tempo de execução,
informações de falha de processo e IDs de trabalho.

Os metadados sociais registram o comportamento do usuário ao consumir um conteúdo
ou usar um produto. Ajudam times como produto, growth e ciência de dados a entender o que
engaja e o que não engaja. Como exemplo, temos informações sobre cliques, tempo de
exibição, visitas de perfil e comentários

Finalmente, os metadados de preservação se tratam de informações para manter o arquivo
acessível por muito tempo, garantindo a sua integridade. Por exemplo, para um livro eletrônico
como dado, um metadado de preservação pode ser seu checksum (um tipo de “impressão
digital” que serve para detectar se o arquivo está corrompido).

(VUNESP/Ana Leg (ALESP)/ALESP/Web Designer/2022) Considerando que as principais
classificações
sobre
metadados
definem
seus
tipos como descritivos, estruturais e
administrativos, é correto afirmar que as informações constantes de metadados do tipo

a) estrutural têm como função a recuperação e a identificação de dados.

b) descritivo têm como função a recuperação e a identificação de dados.

c) estrutural têm como função a recuperação e a identificação de dados.

d) administrativo têm como função descrever a forma de se reconstituir um dado formado por
diversos componentes.

e) descritivo têm como função fornecer informações sobre o ciclo de vida dos dados.

Comentários:

a) Errada. Estrutural organiza as partes dos dados.

b) Correta. Descritivo serve para encontrar e identificar itens (título, autor, assunto,
palavras-chave).

c) Errada. Estrutural não é para recuperação/identificação.

d) Errada. Explicar como reconstituir um objeto com várias partes é papel do metadado
estrutural.

e) Errada. Regra geral, informações sobre ciclo de vida estão mais relacionadas a metadados
administrativos.

Gabarito: B

### Isolamento entre programas e dados, e abstração de dados

Sabemos que o SGBD guarda, além dos próprios dados, a organização desses dados,
escondendo esses detalhes internos dos programas externos.

Graças a isso esses programas não precisam saber como os dados estão por dentro do SGBD
para os acessar. Caso precisem de alguma informação, eles só dizem o que querem ao SGBD, e
ele mesmo trata de encontrar e entregar a resposta da forma correta.

Por exemplo, vamos supor que temos o nome e a idade de pessoas no banco de dados e um
software deseja saber a idade de uma pessoa, o José. Para isso, basta enviar a pergunta ao
SGBD, que ele buscará esse valor e o entregará para a aplicação.

Saibam que, mesmo mudando a estrutura desses dados, como adicionar um campo “altura”
entre eles, nada muda na interação entre a aplicação e o SGBD.

Então, regra geral, alterações no banco de dados não impactam diretamente os programas, ou
seja, mesmo que alteremos a estrutura do banco, nossos softwares continuam funcionando
normalmente.

É justamente por isso que dissemos que há um isolamento entre programas e os dados do
banco de dados: podemos alterar a estrutura dos dados sem “quebrar” os programas.

Saibam que tudo isso só é possível porque o SGBD esconde os detalhes de armazenamento dos
dados para mostrar só o que importa, de forma mais simples ao usuário.

Graças a isso, um leigo é capaz de utilizar um sistema complexo como o sistema de banco de
dados.

De todo modo, essa discussão é a base do conceito de abstração.

Explicando melhor, abstração se trata do processo de ocultar detalhes, expondo as
informações de fato relevantes. Ou seja, quanto mais algo for abstrato, mais genérico (e menos
detalhado) será.

O que importa sabermos aqui é que essa capacidade de abstração dos detalhes internos no
banco permite que haja independência entre programas e os dados.

(ADAPTADA - FGV/AJ (TJ AP)/TJ AP/Apoio Especializado/Tecnologia da Informação Banco de
Dados/2024) Um sistema de banco de dados envolve quatro componentes principais: dados,
hardware, software e usuários.

O sistema gerenciador de banco de dados é um software que isola os usuários do banco de
dados dos detalhes do nível de hardware.

Comentários:

O SGBD isola os usuários dos detalhes físicos (estrutura de armazenamento) por meio de
camadas de abstração.

Gabarito: C

(CEBRASPE (CESPE)/Tec (FUB)/FUB/Tecnologia da Informação/2025) A abstração no nível de
visualização de um sistema de banco de dados apresenta as informações de forma simples, de
modo que um usuário leigo é capaz de utilizar um sistema complexo.

Comentários:

Graças a capacidade de abstração, o SGBD oculta a complexidade dos detalhes de
armazenamento dos dados. Assim, mesmo um leigo consegue interagir, já que cabe ao SGBD
cuidar da estrutura física real dos dados.

Gabarito: Certo

Para finalizar, também precisamos saber que nossos programas, além de operar sobre os dados
por perguntas, podem o fazer diretamente por operações disponibilizadas de pronto pelo SGBD.

Por exemplo, se tivermos uma operação “buscar os nomes de todos clientes com renda acima de
2.000”, basta um software chamar essa operação que o SGBD devolverá a lista de nomes.

Do mesmo modo que o isolamento entre programas e os dados, essas operações são
implementadas no banco de dados de forma independente dos programas que as utilizam. Por
isso, também falamos que há independência da operação do programa.

### Suporte para múltiplas visões dos dados

Vimos que bancos de dados solucionam diversos problemas operando os dados de forma
centralizada. Ou seja, dentro do mesmo banco podem existir dados de diversas categorias de
usuários distintos, como os do setor financeiro, os do setor pedagógico etc.

Ocorre que não é interessante que qualquer um possa acessar qualquer informação, isso porque
podemos ter dados sensíveis destinados a apenas grupos específicos de usuários.

Por isso, no sistema de banco de dados podemos trabalhar com visões dos dados, isto é,
formas de visualização que restringem o acesso a apenas uma parte dos dados (ou até
mesmo a valores manipulados dos dados) a depender do usuário que pretende acessá-lo.

### Compartilhamento

### de

### dados

### e

### processamento

### de

### transação

### multiusuário

Regra geral, SGBD trabalham no formato multiusuário, ou seja, permite que vários usuários
acessem e manipulem o banco de dados ao mesmo tempo.

Isso porque, na prática, é comum que diversos programas (apps mobile, sites de internet etc.)
estejam conectados ao banco simultaneamente.

Porém, esse tipo de funcionalidade pode gerar um grande problema: se dois usuários estiverem
tentando atualizar o mesmo dado ao mesmo tempo, podemos ter uma condição de corrida (race
condition), em que uma atualização sobrescreve a outra.

Por exemplo, imagine que dois usuários, um num app de celular e um numa página web, estejam
tentando reservar um assento de avião ao mesmo tempo. Se não houver controle sobre essas
operações, ambos usuários podem ter a confirmação da reserva do mesmo local.

Por isso, o SGBD implementa um software de controle de concorrência, que visa garantir que
atualizações por múltiplos usuários sejam realizadas de maneira controlada, de modo que
o resultado dessas atualizações seja sempre correto ao final das operações.

(CEBRASPE (CESPE)/Aud Est (SECONT ES)/SECONT ES/Tecnologia da Informação/2022) Uma
das características dos sistemas de gerenciamento de banco de dados (SGBD) multiusuários é a

capacidade de fornecer controle de concorrência para assegurar que atualizações de dados
simultâneas resultem em modificações corretas nos dados manuseados.

Comentários:

Isso mesmo, o SGBD organiza quem trabalha primeiro nos dados para evitar uma possível
bagunça que resultaria nesses dados quando várias pessoas tentam mudar os mesmos dados ao
mesmo tempo. Assim, o resultado final fica correto (ex.: só um usuário consegue comprar “o
último ingresso”), e ninguém vê informação errada.

Gabarito: Certo

## Transação

Os usuários de um banco de dados podem realizar manipulações nos seus dados por meio do
SGBD, como ler, atualizar, deletar e inserir novas informações. Quando realizamos uma ou mais
dessas operações, dizemos que efetuamos uma transação.

Percebam então que uma transação não significa que estamos realizando necessariamente uma
tarefa, já que na mesma transação podemos realizar múltiplas operações, como uma inserção e
uma atualização, múltiplas atualizações, múltiplas inserções e assim por diante.

Por exemplo, em um sistema bancário, em apenas uma transação de transferência bancária entre
clientes queremos realizar duas operações de atualização: atualizar a conta de origem subtraindo
o valor transferido e atualizar a conta de destino para adicionar o valor creditado.

Assim sendo, toda transação tem começo e fim, representando uma unidade lógica de
trabalho, em geral envolvendo diversas operações de banco de dados. (Date, 2004)

Finalmente, Elmasri e Navathe definem que:

Uma transação é um programa em execução ou processo

que inclui um ou mais acessos ao banco de dados,

como a leitura ou atualização de seus registros.

(CEBRASPE (CESPE)/Ana (APEX)/2021) Assinale a opção em que o termo apresentado
corresponde a uma sequência de instruções de consulta e(ou) atualização de banco de dados.

a) commit

b) rollback

c) truncate

d) transaction

Comentários:

a) Errada. Commit é o comando que finaliza uma transação com sucesso, garantindo que todas
as alterações feitas nela sejam confirmadas no banco de dados.

b) Errada. Rollback é o comando que desfaz uma transação, fazendo com que o banco de dados
retorne ao estado em que estava antes de a transação começar. Isso é usado se alguma parte da
transação falhar.

c) Errada. Truncate é um comando específico para remover todos os registros de uma tabela.

d) Correta. Uma transação é definida como um programa em execução ou processo que inclui
um ou mais acessos ao banco de dados, como a leitura (consulta) ou a atualização de seus
registros. Ela representa uma unidade lógica de trabalho que pode envolver diversas operações
no banco.

Gabarito: D

(Instituto AOCP/Ana Sis (CASAN)/CASAN/Administração de Banco de Dados Oracle DBA/2016)
Uma das características dos Sistemas Gerenciadores de Bancos de Dados (SGBD) é a sua
capacidade de realizar e gerenciar uma unidade atômica de trabalho que deve ser totalmente
concluída ou não realizada. Sendo assim, esse é o conceito de

a) consistência.

b) atomicidade.

c) transação.

d) operação.

e) seleção.

Comentários:

A unidade lógica de trabalho que o SGBD gerencia é a transação.

Uma transação é definida como um programa em execução ou processo que inclui um ou mais
acessos (leitura ou atualização) ao banco de dados. Ela representa uma unidade lógica de
trabalho.

OBS: Apesar de a Atomicidade ser a propriedade que define o comportamento "tudo ou nada"
da transação, a questão busca o conceito de “unidade de trabalho que é gerenciada pelo
SGBD”. Essa unidade de trabalho é a transação.

Gabarito: C

### ACID

Para garantirmos transações válidas no banco de dados, precisamos que elas sigam as
propriedades de atomicidade, consistência, isolamento e durabilidade.

A atomicidade garante que a transação seja tratada com uma operação lógica única (mesmo
que diversas operações sejam realizadas), estabelecendo para isso uma regra clara: se qualquer
uma das instruções que constituem a transação não for concluída, a transação inteira falha e o
banco de dados permanece inalterado.

É o famoso “ou tudo ou nada”, isto é, ou a transação ocorre de forma completa (ocorrendo
um “confirma tudo”, chamado de commit), ou não ocorre de forma alguma (ocorrendo um
“desfaz tudo”, ou rollback).

Assim sendo, se a transação inicia, porém a energia cai antes do commit, o SGBD “desfaz” a
transação inacabada e o banco fica como se essa transação nunca tivesse existido. Porém, se o
commit já foi confirmado, então os efeitos permanecem.

Por exemplo, vamos supor uma transferência bancária, em que uma transação tira R$1.000,00 de
uma conta de origem e põe esse valor numa conta de destino. Se o sistema cair depois de
debitar o valor da origem, porém antes de creditar no destino, o banco desfaz o débito,
parecendo que “nada aconteceu” para as outras transações. Não existe “transferência pela
metade”, evitando dinheiro “sumir” da origem e nunca aparecer no destino.

Para concursos, precisamos saber que o responsável por garantir a atomicidade é o
Subsistema de Recuperação do SGBD.

Continuando, a consistência garante que a transação só pode levar o banco de dados de um
estado consistente para outro. Ou seja, se uma transação finalizar de forma completa, sabemos
que as regras do banco de dados foram preservadas.

Por exemplo, em um sistema bancário, se há uma regra no banco “a soma dos saldos das contas
antes e após uma transferência devem permanecer iguais” (para evitar que o valor debitado em
uma conta seja diferente do creditado em outra), ao finalizarmos uma transação, temos a
segurança de que o valor da soma dos saldos das contas permanecerá o mesmo.

Bom, os responsáveis por garantirem a consistência são os próprios programadores dos
programas que acessam o banco e também o Módulo de Restrições de Integridade do

### SGBD.

Continuando, na prática, as transações são frequentemente executadas de forma concorrente
sobre o mesmo objeto (por exemplo, múltiplas transações lendo e gravando ao mesmo tempo
em uma mesma tabela). O isolamento garante que, mesmo sob execução concorrente, as
transações ocorram como se fossem executadas sequencialmente (isto é, uma após a outra). Ou
seja, a execução de uma transação ocorre sem interferência de outras simultâneas,
parecendo que sua execução ocorreu de forma isolada, como se as outras não existissem.

Por exemplo, vamos supor uma transferência bancária, em que uma transação tira R$1.000,00 da
conta de origem e põe esse valor numa conta de destino. Sem isolamento, uma outra transação
de consulta poderia ver o dinheiro “pela metade do caminho” (já saiu da origem, mas ainda não
entrou no destino) e ler um valor errado. Com isolamento, quem lê os dados vê ou o estado
antes ou o depois da transferência, nunca o meio termo.

Dito isso, o responsável por garantir o isolamento é o Subsistema de Controle de
Concorrência do SGBD.

Finalmente, com durabilidade garantimos que uma transação confirmada (commit)
permanecerá confirmada mesmo em caso de falha do sistema. Em outras palavras, os efeitos

das transações concluídas se manterão persistidas (mantidas) na memória, não existindo a
possibilidade dos eventos se “desfazerem sozinhos” ao longo do tempo.

Para finalizar, também cabe ao Subsistema de Recuperação garantir a durabilidade.

(FGV/TCE PA/Administrativa/Ciência de Dados/2024) Diferentemente do armazenamento feito
em sistema de arquivos, o armazenamento em sistemas de banco de dados ou SGBD possui
características especiais que garantem um funcionamento superior em relação à outras formas
de armazenamento.

Nesse contexto, as propriedades fundamentais garantidas pelo conceito ACID em sistemas de
banco de dados são:

a) Atomicidade, Complexidade, Integridade, Durabilidade.

b) Atividade, Consistência, Inovação, Durabilidade.

c) Atomicidade, Consistência, Isolamento, Durabilidade.

d) Autenticidade, Conformidade, Integridade, Desempenho.

e) Automação, Convergência, Interoperabilidade, Desempenho.

Comentários:

As propriedades fundamentais garantidas pelo conceito ACID são (c) Atomicidade, Consistência,
Isolamento e Durabilidade.

Gabarito: C

## Arquitetura do Sistema de Bancos de Dados

Antigamente, por volta dos anos 60, os sistemas gerenciadores não garantiam plenamente as
desejadas características de autodescrição, isolamento e suporte a múltiplos usuários.

Por exemplo, era comum problemas de abstração de dados de modo que mudanças no
armazenamento corriqueiramente “quebravam” os programas ligados ao SGBD.

Em resumo, na prática evidenciou-se que não era uma tarefa fácil construir um SGBD que
cumpria essas características.

Visando sanar esses problemas, em 1975 o Comitê de Planejamento e Requisitos de Padrões
ANSI/X3/SPARC propôs uma arquitetura em 3 esquemas (também chamada arquitetura
ANSI/SPARC) para SGBDs que, se seguida, os ajudava a não apresentar esses problemas.

Ao longo dos anos, a nomenclatura evoluiu de “esquema” para “modelo“.
Portanto, utilizaremos ambas palavras de forma intercambiável nessa aula.

Antes de começar a explicação dos 3 esquemas, precisamos saber que os dados armazenados
existem “de fato” (gravados no disco) apenas no nível físico. Representamos essa ideia com o
próprio desenho cilíndrico de um banco de dados na figura a seguir.

Pois bem, como primeira camada da
arquitetura 3 esquemas, temos o
nível interno (também conhecido
como nível de armazenamento),
que
descreve
a
estrutura
do
armazenamento físico do banco de
dados nos discos. Assim, aqui temos
os detalhes do armazenamento de
dados e caminhos de acesso para
o banco de dados.

O nível interno é descrito através de
um
modelo
interno
(também
chamado de modelo físico).

Na
próxima
camada,
o
nível
conceitual (ou nível lógico, ou nível
lógico de comunidade) descreve a
estrutura
do
banco de dados
inteiro para uma comunidade de
usuários.
Aqui
ocultamos
os
detalhes das estruturas de armazenamento físico e nos concentramos na descrição de entidades,
tipos de dados, relacionamentos, operações do usuário e restrições.

O nível conceitual é descrito através de um modelo conceitual.

Finalmente, temos o nível externo (ou nível de visão, ou nível lógico de usuário), que inclui
uma série de modelos externos ou visões do usuário. Cada esquema externo descreve uma
parte do banco de dados em que um grupo de usuários em particular está interessado,

ocultando o restante desse grupo. Em resumo, aqui nos ocupamos do modo como os dados
são vistos por cada um.

(FGV/Cons Leg (CM SP)/CM SP/Informática/2024) Com relação aos níveis da arquitetura
ANSI/SPARC dos Sistemas Gerenciadores de Bancos de Dados (SGBD) relacionais, assinale (V)
para a afirmativa verdadeira e (F) para a falsa.

I. O nível interno é o mais próximo do meio de armazenamento físico, é uma representação de
baixo nível de todo o banco de dados, ele se ocupa do modo como os dados são fisicamente
armazenados dentro do SGBD.

II. O nível externo, também conhecido como o nível lógico de comunidade, é o mais próximo
dos usuários finais ou programadores de aplicação, é aquele que se ocupa do modo como os
dados são vistos pelos usuários do sistema.

III. O nível conceitual, também conhecido nível lógico de usuário, é um nível indireto entre os
outros dois níveis e representa todo o conteúdo do banco de dados de uma forma um tanto
abstrata em comparação como os dados são armazenados logicamente.

As afirmativas são, respectivamente,

a) F – V – V.

b) F – F – V.

c) F – V – F.

d) V – V – F.

e) V – F – F.

Comentários:

I – Verdadeira. Nível interno lida com armazenamento físico. É a camada mais perto do disco.

II – Falsa. A descrição (“mais próximo dos usuários, como os dados são vistos”) é do nível
externo, mas o apelido dado está errado: “nível lógico de comunidade” é do conceitual. O
externo é também chamado de “nível lógico de usuário” (visões).

III – Falsa. A ideia central (“camada intermediária que descreve todo o BD de forma mais
abstrata”) é do nível conceitual, mas o apelido está errado: ele é o “nível lógico de comunidade”,
não de usuário. Além disso, a comparação correta é “uma forma um tanto abstrata em
comparação como os dados são armazenados fisicamente”.

Gabarito: E

### Mapeamentos e Independência de dados

Uma das vantagens da arquitetura de 3 camadas é conseguirmos atingir a independência de
dados, ou seja, conseguimos mudar os elementos de um esquema de um nível sem “quebrar” o
de cima.

Isso porque o SGBD mantém “ligações” (mapeamentos) entre as camadas. Assim, se
mudamos algum objeto em uma camada, ajustamos essas ligações para que a camada de cima
continue encontrando o mesmo objeto. Como resultado, mesmo com alterações, tudo segue
funcionando normalmente.

Pois bem, em um esquema de três camadas, precisamos de dois tipos de mapeamentos, o
conceitual/interno e o externo/conceitual.

O mapeamento conceitual/interno especifica o modo como os campos do nível conceitual
são representados no nível interno. Assim, se a estrutura do banco de dados armazenado for
alterada, o mapeamento conceitual/interno terá de ser alterado de acordo, a fim de que o
esquema conceitual permaneça invariável.

É graças ao mapeamento conceitual/interno que conseguimos obter a independência física
de dados, isto é, podemos alterar o esquema interno sem ter de alterar o esquema conceitual.

Seguindo a mesma lógica, cada mapeamento externo/conceitual define a correspondência
entre uma visão externa específica e a visão conceitual, nos permitindo, assim, manipular o
esquema conceitual sem atrapalhar o funcionamento dos programas de aplicação que consomem
as visões externas.

Dessa forma, o mapeamento externo/conceitual permite a independência lógica de dados, o
que nos torna capazes de justamente alterar o esquema conceitual sem ter de alterar os
esquemas externos ou os programas que os utilizam.

(FCC/SEFAZ SP/Tecnologia da Informação/2009) A independência de dados física e a
independência de dados lógica são possibilitadas de forma ideal, respectivamente, por um

a) mapeamento conceitual/externo e por um mais mapeamentos conceituais/internos.

b)
ou
mais
mapeamentos
conceituais/internos
e
por
um
ou
mais
mapeamentos
internos/externos.

c) mapeamento conceitual/interno e por um ou mais mapeamentos externos/conceituais.

d) mapeamento interno/externo e por um mapeamento conceitual/interno.

e) ou mais mapeamentos internos/externos e por um mapeamento conceitual/interno.

Comentários:

Independência física = poder mudar o nível interno sem quebrar o modelo lógico. Isso é
garantido pelo mapeamento Conceitual/Interno.

Independência lógica = poder mudar o modelo lógico conceitual sem afetar as visões dos
usuários. Isso é garantido pelos mapeamentos Externo/Conceitual (“um ou mais” porque há
várias visões externas).

Gabarito: C

## Vantagens dos bancos de dados

Nessa seção avançaremos sobre as vantagens do SGBD de forma mais técnica, de acordo com a
literatura da área.

Infelizmente, diversos autores apresentam vantagens distintas que sustentam a utilização de
sistemas de banco de dados. Ocorre que é bem pouco vantajoso nos aprofundarmos em todos
pontos positivos elencados por todos autores, já que é muita coisa.

O que eu sugiro fazermos é passarmos pelos principais tópicos, de modo que seja possível vocês
absorverem uma boa base teórica e, em sua prova, marcar a alternativa que faça mais sentido.

Vantagem
Explicação

Controle de redundância

Bancos de dados nos permitem armazenar cada item de dados
em um único lugar, evitando duplicação e inconsistências.
Em casos excepcionais, podemos permitir uma redundância
controlada (redundância intencional), para ganhar desempenho.
Nesses casos, o SGBD impõe regras e validações para manter as
cópias sincronizadas e evitar registros incoerentes.

Restringir o acesso não
autorizado

Bancos de dados permitem restringir quem pode ver ou alterar
cada informação, usando contas e senhas com permissões
definidas. Ou seja, aumenta a segurança de dados.

Armazenamento
persistente de objetos

Bancos de dados permitem salvar objetos de programas
internamente de forma persistente (sem “sumir” ao terminar a
execução).

Oferecimento de
estruturas de
armazenamento e
técnicas de pesquisa
para o processamento
eficiente de consulta

Bancos de dados foram desenvolvidos para serem muito
eficientes no armazenamento de dados e na recuperação dessas
informações.

Vantagem
Explicação

Oferecimento de backup
e recuperação

Um SGBD possui backup e recuperação para resistir a falhas de
hardware e software durante suas operações, além de manter
cópias de segurança em caso de catástrofes.

Oferecimento de
múltiplas interfaces do
usuário

Existem diversas formas de acessar o banco de dados, já que o
SGBD oferece várias interfaces para perfis diferentes: linguagem
de consulta para usuários casuais, APIs para programadores etc.

Permite representar
relacionamentos
complexos entre dados

Um SGBD permite representar e evoluir relacionamentos
complexos entre dados (p.ex.: aluno ↔ histórico ↔ turma ↔
disciplina), além de consultar e atualizar essas ligações de forma
simples e eficiente.

Permite restrições de
integridade

Um SGBD permite definir e fazer cumprir regras para manter a
integridade dos dados, como restringir faixas válidas de valores,
garantir a unicidade de dados (aqueles que não podem se
repetir), manter a ligação correta entre informações armazenadas
em locais diferentes etc.

Permite dedução e ações
usando regras

Bancos de dados podem deduzir informações e executar ações
automaticamente a partir da ocorrência de eventos.

Pode garantir a existência
de padrões nos dados

Bancos de dados permitem impor padrões nos dados (como
datas no formato “dd:mm:aaaa”).

Tempo reduzido para
desenvolvimento de
aplicação

Quando um banco de dados está pronto e funcionando,
geralmente é preciso muito menos tempo para criar outras
aplicações usando as facilidades do SGBD do que seria utilizando
um sistema de arquivo.

Flexibilidade

Os SGBDs modernos permitem certos tipos de mudanças
evolucionárias na estrutura do banco de dados sem afetar os
dados armazenados e os programas de aplicação existentes.

Disponibilidade de
informações atualizadas

Assim que uma atualização em um dado realizada por um usuário
é aplicada ao banco de dados, todos os outros podem vê-la
imediatamente.

Economias de escala
Por consolidar todos dados em um único local, reduzimos o custo
gerado por sobreposições e redundâncias de informações.

(DIRENS/EEAR/Informática/2014) Assinale a alternativa que completa correta e respectivamente
as lacunas da assertiva a seguir.

Entre as vantagens de um banco de dados, destacam-se: (1) de criação de novas aplicações;
(2) de dados; controle de (3) de dados e controle automático de (4) entre registros.

a) facilidade – segurança – redundância – relacionamento

b) segurança – facilidade – relacionamento – redundância

c) segurança – redundância – relacionamento – facilidade

d) relacionamento – facilidade – segurança – redundância

Comentários:

(1) facilidade de criação de novas aplicações: com os dados centralizados (e padronizados), fica
mais fácil desenvolver novos sistemas.

(2) segurança de dados: o SGBD restringe o acesso não autorizado a dados.

(3) controle de redundância de dados: evita duplicidade e inconsistências.

(4) relacionamento entre registros: o SGBD permite representar e evoluir relacionamentos
complexos entre dados.

Gabarito: A

(FCC/Ana Leg/ALESP/Administração de Banco de Dados e Arquitetura de Dados/2010)
Redundância de dados é a repetição desnecessária de uma mesma informação em um sistema
de computadores.

São dois tipos de redundância:

a) observada e não observada.

b) mantida e não mantida.

c) gerenciada e não gerenciada.

d) modificada e não modificada.

e) controlada e não controlada.

Comentários:

Redundância controlada (intencional):replicamos dados de propósito para ganhar desempenho.
Essa redundância é mantida por regras do SGBD para não gerar inconsistências de valores.

Redundância não controlada (acidental): a mesma informação aparece em vários lugares sem
regra, geralmente por má utilização.

Gabarito: E

## Desvantagens dos bancos de dados

Vimos que um SGBD traz muitos benefícios, porém nem sempre esses compensam os custos
adicionais de se ter um (Elmasri &amp; Navathe, 2007).

Só o investimento inicial em hardware, software e treinamento de pessoal já pode não valer a
pena em projetos mais simples.

Além disso, o custo de manter um SGBD é alto, uma vez que se trata de uma ferramenta muito
genérica, já que serve a muitas aplicações e cenários diferentes.

Há também custos associados à operacionalização do SGBD, já que podemos gastar com
esforço extra para segurança, concorrência, recuperação e integridade dos dados.

Enfim, em determinadas situações, todo esse custo adicional pode levar a preferirmos usar a
abordagem clássica de armazenar informações em arquivos comuns.

(Instituto AOCP/IFNMG/Tecnologia da Informação/2022) Como técnico de tecnologia da
informação no IFNMG, você foi convocado para uma reunião para discutir o uso ou não de um
Sistema de Gerenciamento de Banco de Dados (SGBD) em um novo sistema que está sendo
desenvolvido. Diante do exposto, analise as assertivas e assinale a alternativa que apresenta
somente desvantagens do uso de SGBDs.

I. Alto investimento inicial em hardware, software e treinamento.

II. A generalidade que um SGBD oferece para a definição e o processamento de dados.

III. Necessidade de consultoria especializada para cada SGBD.

IV. Uso de supercomputadores para o processamento de dados.

V. Esforço adicional para oferecer funções de segurança, controle de concorrência, recuperação e
integridade.

a) Apenas I, II e III.

b) Apenas I, II e IV.

c) Apenas II, III e V.

d) Apenas I, IV e V.

e) Apenas I, II e V.

Comentários:

I. Correta. O custo inicial é uma desvantagem notória, pois a implementação de um SGBD exige
um gasto significativo com a aquisição de equipamentos de informática (hardware), licenças dos
programas (software) e, crucialmente, o treinamento do pessoal que será responsável por operar
e manter esse sistema complexo.

II. Correta. A generalidade (o fato de o SGBD servir a muitas aplicações e cenários diferentes)
contribui para que a ferramenta seja complexa e o custo de sua manutenção seja alto.

III. Falsa. A consultoria especializada não é uma desvantagem fundamental e universal dos
SGBDs.

IV. Falsa. Embora os SGBDs variem em tamanho e complexidade, podendo ser grandes sistemas,
não é uma desvantagem geral ou requisito que eles exijam o uso de supercomputadores para o
processamento de dados. O custo de hardware é alto, mas a escala de supercomputação não é
uma desvantagem inerente à abordagem BD.

V. Correta. A operacionalização de um SGBD acarreta custos e esforços extras relacionados à
implementação e manutenção de funções avançadas, como garantir a segurança de acesso aos
dados, controlar a concorrência (quando múltiplos usuários acessam simultaneamente), assegurar
a recuperação do sistema após falhas e fazer cumprir as regras de integridade dos dados.

Gabarito: E

## RESUMO

Dados são observações ou medições representadas

como texto, números ou multimídia

Informação é o resultado do processamento, manipulação e organização

de dados de tal forma que represente um acréscimo

ao conhecimento da pessoa que a recebe

Propriedade Implícita
Explicação
Consequência

Um banco de dados
representa algum aspecto
do mundo real (domínio), às
vezes chamado de
mini-mundo ou de universo
de discurso.

O banco descreve um
pedaço da realidade (como
uma loja, com clientes,
venda, estoque, …)

Quando a realidade muda, o
banco deve mudar junto.
Ou seja, devemos manipular
nossas informações, como
inserir novos clientes, atualizar
as idades dos clientes, deletar
vendas canceladas etc. se o
mundo real exigir.

Um banco de dados é uma
coleção logicamente
coerente de dados com
algum significado inerente.

Não é um monte de dados
“jogados”.
Os dados têm relações e
regras que lhes dão sentido
com a realidade (p.ex.: um
cliente pode comprar um ou
mais produtos).

Uma variedade aleatória de
dados não pode ser chamada
de banco de dados.

Propriedade Implícita
Explicação
Consequência

Um banco de dados é
projetado, construído e
populado com dados para
uma finalidade específica.

Bancos de dados nascem de
requisitos: Quem usa? Para
quê? Quais perguntas o
banco precisa responder?
Quais operações são críticas?

Ele possui um grupo definido
de usuários e algumas
aplicações nas quais esses
usuários estão interessados,
possibilitando, principalmente,
a recuperação de informações.

Um SGBD se trata de uma coleção de programas
que permite aos usuários criar e manter um banco de dados

Metadados são informações estruturadas adicionais, relativas a certo conjunto

de dados, que podem ser utilizadas para descrevê-los, explicá-los, localizá-los

e manipulá-los da forma mais eficiente possível, os tornando mais fáceis de

recuperar, usar ou gerenciar

Vantagem
Explicação

Controle de redundância

Bancos de dados nos permitem armazenar cada item de dados
em um único lugar, evitando duplicação e inconsistências.
Em casos excepcionais, podemos permitir uma redundância
controlada (redundância intencional), para ganhar desempenho.
Nesses casos, o SGBD impõe regras e validações para manter as
cópias sincronizadas e evitar registros incoerentes.

Vantagem
Explicação

Restringir o acesso não
autorizado

Bancos de dados permitem restringir quem pode ver ou alterar
cada informação, usando contas e senhas com permissões
definidas. Ou seja, aumenta a segurança de dados.

Armazenamento
persistente de objetos

Bancos de dados permitem salvar objetos de programas
internamente de forma persistente (sem “sumir” ao terminar a
execução).

Oferecimento de
estruturas de
armazenamento e
técnicas de pesquisa
para o processamento
eficiente de consulta

Bancos de dados foram desenvolvidos para serem muito
eficientes no armazenamento de dados e na recuperação dessas
informações.

Oferecimento de backup
e recuperação

Um SGBD possui backup e recuperação para resistir a falhas de
hardware e software durante suas operações, além de manter
cópias de segurança em caso de catástrofes.

Oferecimento de
múltiplas interfaces do
usuário

Existem diversas formas de acessar o banco de dados, já que o
SGBD oferece várias interfaces para perfis diferentes: linguagem
de consulta para usuários casuais, APIs para programadores etc.

Permite representar
relacionamentos
complexos entre dados

Um SGBD permite representar e evoluir relacionamentos
complexos entre dados (p.ex.: aluno ↔ histórico ↔ turma ↔
disciplina), além de consultar e atualizar essas ligações de forma
simples e eficiente.

Permite restrições de
integridade

Um SGBD permite definir e fazer cumprir regras para manter a
integridade dos dados, como restringir faixas válidas de valores,
garantir a unicidade de dados (aqueles que não podem se
repetir), manter a ligação correta entre informações armazenadas
em locais diferentes etc.

Permite dedução e ações
usando regras

Bancos de dados podem deduzir informações e executar ações
automaticamente a partir da ocorrência de eventos.

Pode garantir a existência
de padrões nos dados

Bancos de dados permitem impor padrões nos dados (como
datas no formato “dd:mm:aaaa”).

Vantagem
Explicação

Tempo reduzido para
desenvolvimento de
aplicação

Quando um banco de dados está pronto e funcionando,
geralmente é preciso muito menos tempo para criar outras
aplicações usando as facilidades do SGBD do que seria utilizando
um sistema de arquivo.

Flexibilidade

Os SGBDs modernos permitem certos tipos de mudanças
evolucionárias na estrutura do banco de dados sem afetar os
dados armazenados e os programas de aplicação existentes.

Disponibilidade de
informações atualizadas

Assim que uma atualização em um dado realizada por um usuário
é aplicada ao banco de dados, todos os outros podem vê-la
imediatamente.

Economias de escala
Por consolidar todos dados em um único local, reduzimos o custo
gerado por sobreposições e redundâncias de informações.

## Atores

Acaba sendo uma tarefa muito difícil manter um banco de dados em organizações grandes,
devido à complexidade desses ambientes.

Assim sendo, em bancos com centenas de usuários, muita gente participa do projeto, do uso e
da sua manutenção.

Então, para tudo funcionar adequadamente, alguém precisa ser responsável pelos dados da
empresa como um todo.

Ou seja, em vez de cada área de negócio decidir sozinha o que guardar, como guardar e quem
pode acessar, precisamos de um centro de decisão (uma pessoa ou um papel) que define regras
únicas para toda a organização.

### Administrador de Dados (DA – Data Administrator)

O Administrador de Dados deve ter um perfil de gestão, cuja missão é estabelecer a governança
dos dados.

Ou seja, alguém que olha para o negócio como um todo para definir que dados devem existir no
banco de dados e como devem ser tratados, em decisões estratégicas, especificando regras e
políticas.

Por exemplo, é o Administrador de Dados que define que precisamos armazenar o CPF das
pessoas no banco. Além disso, ele também estabelece políticas de qualidade para esse dado
(“pessoas sem CPF não são válidas”), de privacidade (“apenas gestores do RH podem acessar o
CPF das pessoas”), de retenção (“manteremos os dados das pessoas por 10 anos”) etc.

Vejam que o Administrador de Dados se trata de um administrador de negócio, e não um técnico
do dia a dia (ainda que entenda o básico de tecnologia). Por isso cabe a ele manter a definição
abstrata dos dados.

Finalmente, o DA é o dono da semântica e da governança dos dados e, portanto, lidera a
criação do projeto lógico (conceitual) do banco de dados. (Date, 2004)

Vale saber que, em determinados contextos, como empresas menores sem
profissionais suficientes, caberá ao próprio Administrador de Dados criar o
esquema conceitual.

(CEBRASPE (CESPE)/AJ (TJ PA)/TJ PA/Análise de Sistema/Suporte/2020) O administrador de
dados e o administrador do banco de dados exercem funções-chave na administração de banco
de dados.

Ao responsável pelas decisões estratégicas e de normas com relação aos dados da empresa
cabe também

a) definir o esquema interno.

b) definir o esquema conceitual.

c) manter contato com os usuários.

d) definir normas de descarga e recarga.

e) responder a requisitos de mudanças.

Comentários:

O responsável pelas decisões estratégicas e normas com relação aos dados da empresa é o
Administrador de Dados (DA), que tem um perfil de gestão e estabelece a governança dos
dados. O DA define o que o negócio precisa armazenar e as políticas sobre esses dados (como
regras de qualidade e privacidade).

O esquema conceitual é a representação abstrata e completa da estrutura dos dados da
organização. Como o Administrador de Dados é quem mantém a definição abstrata dos dados e
decide quais dados são válidos, caberá a ele, em algumas situações, a definição do esquema
conceitual. Em contraste, definir o esquema interno (a) e as normas de descarga e recarga (d) são
funções técnicas e operacionais que pertencem ao Administrador de Banco de Dados (DBA), que
é o profissional de TI responsável por implementar e operar o que o DA decidiu.

Gabarito: B

### Administradores de Banco de Dados (DBA)

Os Administradores de Banco de Dados (DBA, database administrator) tem um perfil técnico,
visto que são as pessoas responsáveis por supervisionar e gerenciar o banco de dados e o SGBD
no dia a dia.

Ou seja, são profissionais de TI que implementam e operam tecnicamente o que o DA decidiu.
Ou seja, cabe a esse profissional criar o esquema interno do banco de dados, definir normas
de descarga e recarga (backup, export, import, restore, migração etc.), manter contato com os

usuários para garantir que os dados de que eles necessitam estarão disponíveis, definir
restrições de segurança e integridade no banco e monitorar o desempenho e responder a
requisitos de mudanças. (Date, 2004)

Com isso, garantem o correto funcionamento do dia a dia do ambiente, como segurança,
desempenho, disponibilidade, além do uso correto do SGBD.

Assim sendo, segundo Elmasri e Navathe, cabe ao DBA realizar diversas atividades para manter
tudo operacionalmente funcional, como também:

Responsabilidade
Atividade

Acesso e segurança

Criam usuários e perfis de acesso, dão/removem permissões,
auditam
acessos, respondem a incidentes, garantindo
integridade e confidencialidade dos dados.

Disponibilidade e
recuperação

Fazem backups, testam restore, configuram replicação e alta
disponibilidade, planejam atualizações.

Desempenho (tuning)

Monitoram lentidões, ajustam configurações do SGBD,
analisam estatísticas para otimização, ajustam consultas,
particionam dados, acompanham uso de CPU, memória e
armazenamento

Atividades do dia a dia

Aplicam patches, automatizam rotinas (jobs), acompanham
alertas, dimensionam hardware e software quando a demanda
cresce.

(IBFC/Tec PAS (AMPASS)/AMPASS RECIPREV/Informática/2024) O profissional chamado DBA
(Administrador de Banco de Dados), dentre suas principais tarefas, tratando de segurança de
banco de dados, deve:

a) desenvolver aplicações web

b) gerir regras da rede local lan

c) gerenciar servidores web

d) otimizar consultas sql

e) garantir a integridade e confidencialidade dos dados

Comentários:

a) Errada. Desenvolver aplicações web é tarefa de desenvolvedores.

b) Errada. Gerir regras da rede local (LAN) é função de administradores de rede.

c) Errada. Gerenciar servidores web é papel de administradores de sistemas/DevOps.

d) Errada. Otimizar consultas SQL é atribuição comum do DBA para desempenho (tuning), mas
não é uma tarefa de segurança do banco de dados.

e) Correta. Garantir a integridade e a confidencialidade dos dados é responsabilidade central do
DBA em segurança (controle de acessos, privilégios, criptografia, auditoria, backups e testes de
restauração).

Gabarito: E

(CEBRASPE (CESPE)/Hemobrás/Analista de TI/2008) Autorização de acesso ao banco,
coordenação e monitoração de uso, aquisição de software e hardware são responsabilidades de
um administrador de banco de dados.

Comentários:

Um administrador de banco de dados (DBA) é quem “cuida da casa” onde os dados vivem: ele
autoriza o acesso criando usuários e papéis, coordena e monitora o uso do banco para garantir
que tudo funcione bem e planeja a infraestrutura, o que inclui adquirir e atualizar software e
hardware necessários.

Gabarito: Certo

### Projetistas de Banco de Dados (Designers)

Segundo Elmasri e Navathe, os projetistas descobrem aquilo que de fato precisa ser
armazenado e então desenham a estrutura do banco para atender a essas necessidades dos
usuários e sistemas, trabalhando antes que o banco de dados esteja realmente implementado e
populado com dados

Percebam que se trata de um perfil menos técnico do que o DBA, já que realizam algumas
atividades inerentes ao negócio, como levantar requisitos (conversar com os grupos de usuários
para entender quais dados lhes interessam e quais perguntas precisam ser respondidas pelo
banco), por exemplo.

Porém, sua função também inclui se aprofundar em aspectos menos abstratos, já que não se
restringem a criar modelos de alto nível, mas também projetar o banco em nível físico,
trabalhando na equipe dos DBAs.

==5460==

(INAZ do Pará/Op Comp (CRF SC)/CRF SC/2018) Entre os vários profissionais envolvidos com o
SGBD, o profissional responsável por identificar os dados a serem armazenados na Base de
Dados e escolher estruturas apropriadas para representar e armazenar tais dados é denominado
de:

a) Administrador da base de dados.

b) Projetistas da base de dados.

c) Analista de Sistemas.

d) Usuário Paramétrico.

e) Usuário final.

Comentários:

Gabarito: B

### Usuários finais

Sabemos que um banco de dados existe para atender pessoas que precisam manipular
informações para trabalhar, os chamados usuários finais.

Porém, essas pessoas não são todas iguais, visto que cada uma usa o sistema de um jeito
distinto.

Segundo Elmasri e Navathe, temos quatro categorias de usuários finais, vejamos.

Perfil
Atividade

Usuários finais

casuais

Ocasionalmente usam o banco através de uma linguagem sofisticada de
consulta ao banco. Normalmente são gerentes de nível intermediário ou
alto.

Usuários finais

iniciantes
(paramétricos)

Consultam e atualizam o banco de dados constantemente, usando
consultas padronizadas (denominadas transações programadas), fazendo
tarefas repetitivas por meio de telas padronizadas em softwares.

Usuários finais

sofisticados

Engenheiros, cientistas, analistas e outros familiarizados com as
facilidades do SGBD a ponto de implementar as próprias aplicações
para que atendam a suas necessidades complexas.

Usuários

isolados

Mantêm bancos pessoais seus em softwares prontos, que oferecem
interfaces de fácil utilização, baseadas em menus ou gráficos.

(DIRENS Aeronáutica/EAOEAR (CIAAR)/CIAAR/Engenharia da Computação/2019) O banco de
dados existe primariamente para atender aos usuários finais e há várias categorias desses
usuários.

A categoria que caracteriza os usuários finais paramétricos diz respeito àqueles que

a) consultam e atualizam o banco constantemente.

b) estão profundamente familiarizados com as facilidades do SGBD.

c) mantêm o banco de dados pessoais usando pacotes de programas prontos.

d) acessam ocasionalmente o banco de dados, mas podem precisar de diferentes informações a
cada vez.

Comentários:

a) Correta. O Usuário Final Paramétrico é também denominado usuário final iniciante.

Estes usuários são caracterizados por:

- Consultam e atualizam o banco de dados constantemente.

- Utilizam consultas padronizadas (chamadas transações programadas).

- Realizam tarefas repetitivas por meio de telas padronizadas em softwares.

b) Errada. A descrição corresponde aos Usuários Finais Sofisticados (como engenheiros,
cientistas, ou analistas) que implementam as próprias aplicações para atender a necessidades
complexas.

c) Errada. A descrição corresponde aos Usuários Isolados, que mantêm bancos pessoais seus em
softwares prontos, geralmente com interfaces de fácil utilização.

d) Errada. A descrição corresponde aos Usuários Finais Casuais, que usam o banco
ocasionalmente por meio de uma linguagem sofisticada de consulta, e são tipicamente gerentes
de nível intermediário ou alto.

Gabarito: A

## QUESTÕES COMENTADAS - FGV

1.
(FGV/Tec (MPE AL)/MPE AL/Geral/2018) O conjunto de programas responsável pelo
gerenciamento de uma base de dados e que, entre outras funções, suporta uma linguagem de
consulta, gera relatórios e disponibiliza uma interface para que os seus clientes possam incluir,
alterar ou consultar dados, é chamado de

a) Banco de Dados Relacional (BDR).

b) Dicionário de Dados (DD).

c) Modelo Entidade Relacionamento (MER).

d) Sistema de Suporte à Decisão (SSD).

e) Sistema Gerenciador de Bancos de Dados (SGBD).

Comentários:

a) Errada. O Banco de Dados Relacional (BDR) é um tipo específico de Banco de Dados que
organiza os dados em tabelas (relações).

b) Errada. O Dicionário de Dados (DD) é o catálogo onde o SGBD armazena a descrição da
estrutura do banco (os metadados).

c) Errada. O Modelo Entidade Relacionamento (MER) é um modelo de dados de alto nível usado
na fase de projeto, que representa entidades e seus relacionamentos.

d) Errada. O Sistema de Suporte à Decisão (SSD) é uma aplicação de software que utiliza dados
(geralmente de um BD) para auxiliar a gestão e a tomada de decisões.

e) Correta. O Sistema Gerenciador de Banco de Dados (SGBD) é a coleção de programas
(software) que permite aos usuários criar e manter o banco de dados.

Gabarito: E

2.
(FGV/Ana Gest (COMPESA)/COMPESA/Administrador de Banco de Dados/2016) O
metadados é um dos principais instrumentos do Administrador de Dados porque descreve
diversos atributos necessários para identificar, localizar, compreender e gerenciar dados.

A esse respeito, é correto afirmar que

a) metadados armazenam, estruturam e correlacionam, preferencialmente em um repositório de
metadados dotado de um metamodelo para apoiar o controle, a divulgação e o consumo.

b) metadados estruturais definem o sentido que se atribui a um elemento informacional para o
seu entendimento nos contextos organizacionais em que é produzido ou consumido, por
exemplo, um metadado estrutural define que o campo DATA_EFETIVACAO_APOLICE será a
data em que o corretor fez o registro oficial no sistema com a entrega da apólice.

c) metadados semânticos definem como o dado é composto em partes menores e detalha a sua
formação semântica, por exemplo, o campo DATA_EFETIVACAO_APOLICE é formado por dia,
mês, ano e uma marca de tempo (timestamp), como a hora, minuto e segundo.

d) metadados de negócio descrevem, por exemplo, as informações sobre as tabelas relacionais,
campos, índices, usuários e triggers implementados em um Sistema Gerenciador de Banco de
Dados (SGBD).

e) metadados técnicos descrevem, por exemplo, quais dados estão disponíveis, qual é sua
origem, quem é o responsável, o que significam e qual é o relacionamento com outros dados.

Comentários:

a) Correta. Os Metadados são informações estruturadas adicionais que descrevem, explicam,
localizam e manipulam os dados, tornando-os mais fáceis de gerenciar e recuperar. O local onde
o SGBD armazena essa descrição é o Catálogo (ou Dicionário de Dados). A opção descreve de
forma genérica o papel dos metadados dentro de um repositório (catálogo), apoiando o
gerenciamento (controle), a pesquisa (divulgação) e a utilização (consumo).

b) Errada. A descrição dada ("o sentido que se atribui a um elemento informacional para o seu
entendimento") refere-se ao metadado semântico.

c) Errada. A descrição fornecida ("define como o dado é composto em partes menores", como
dia, mês, ano) é a função principal dos metadados estruturais.

d) Errada. Informações sobre tabelas, campos, usuários e triggers são descrições da estrutura e
das restrições do banco, sendo classificadas como metadados técnicos.

e) Errada. A descrição fornecida ("quais dados estão disponíveis, qual é sua origem, quem é o
responsável, o que significam e qual é o relacionamento com outros dados") mistura alguns tipos
de metadados, porém não são metadados técnicos, cuja função é fornecer especificações do
arquivo (como formato ".pdf") para interagir com ele corretamente.

Gabarito: A

3.
(FGV/Tecno PD (Pref Caraguatatuba)/Pref Caraguatatuba/2024) Os dados podem ser
classificados de diversas formas, uma das categorias de classificação diz respeito a forma da
estruturação dos dados em repositórios de dados, analise os itens a seguir.

I. Dados estruturados são dados que foram formatados e transformados para se adaptar a um
modelo de dados relacional bem definido. Os dados brutos são mapeados em campos
predefinidos que podem ser extraídos e lidos por meio de declarações SQL.

II. Dados semiestruturados é categoria localizada entre dados estruturados e não estruturados.
São um tipo de dado que possui algumas características consistentes e definidas e não se
limitam a uma estrutura rígida como a necessária para bancos de dados relacionais.

III. Dados não estruturados podem ser qualquer tipo de dado não esteja em um formato
específico. São suportados apenas pelos sistemas de arquivos e não pelos sistemas de bancos de
dados, exemplos podem imagens, sons ou desenhos.

Está correto o que se afirma em

a) I apenas.

b) III apenas.

c) I, II e III.

d) I e II, apenas.

e) II e III, apenas.

Comentários:

A afirmação I está correta, pois dados estruturados são aqueles que seguem um esquema de
formatação fixo, são bem representados em tabelas (linhas e colunas), e são o formato padrão
usado nos bancos de dados relacionais (SQL), onde os campos predefinidos facilitam a busca e
análise.

A afirmação II está correta, pois dados semiestruturados são um caso intermediário que
apresenta alguma estrutura, mas não é fixa ou rígida, não exigindo um esquema predefinido em
tabelas. Eles usam notações e linguagens flexíveis, como XML e JSON, que utilizam tags e
marcadores.

A afirmação III está falsa, pois, embora dados não estruturados sejam aqueles sem um formato
específico (como textos, e-mails, imagens e áudio) e existam em seu estado bruto, não existe isso
que “eles são suportados apenas por sistemas de arquivos e não por sistemas de banco de
dados”. O examinador simplesmente inventou, sendo que é possível armazenarmos esses
arquivos normalmente em tipos específicos de banco de dados.

Gabarito: D

4.
(FGV/AAD (TCE,RR)/TCE RR/Tecnologia da Informação/Banco de Dados/2025) As
transações ACID (Atomicidade, Correção, Isolamento e Durabilidade) garantem algumas
características importantes para leituras, gravações e modificações de tabelas em bancos de
dados. Baseando-se nesse contexto, avalie as afirmativas a seguir e assinale (V) para a verdadeira
e (F) para a falsa.

( ) Durabilidade: as transações levam uma base de dados de um estado consistente para outro
estado consistente.

( ) Correção: finalizado o commit da transação, suas alterações são mantidas no banco de dados
mesmo ocorrendo uma posterior queda do sistema.

( ) Atomicidade: considerando duas transações distintas T1 e T2, T1 pode ver as alterações de T2
(após commit de T2) ou T2 pode ver as alterações de T1 (após commit de T1), mas certamente
não ambas.

As afirmativas são, respectivamente,

a) V – V – F.

b) F – V – F.

c) F – F – V.

d) V – F – V.

e) F – F – F.

Comentários:

(F) Durabilidade: as transações levam uma base de dados de um estado consistente para outro
estado consistente.

Esta afirmação está Falsa porque a descrição fornecida na verdade define a propriedade de
Consistência. A Consistência garante que, se uma transação finalizar de forma completa, as
regras internas do banco de dados (como faixas válidas de valores ou garantias de unicidade)
serão preservadas, levando o banco de um estado consistente para outro. A Durabilidade, por
sua vez, garante que uma transação confirmada (commit) permanecerá confirmada e seus efeitos
serão mantidos no banco de dados, mesmo em caso de falha do sistema.

(V) Correção: finalizado o commit da transação, suas alterações são mantidas no banco de dados
mesmo ocorrendo uma posterior queda do sistema.

Esta afirmação está Verdadeira e descreve corretamente a propriedade de Durabilidade. A
Durabilidade assegura que, após uma transação ser confirmada (commit), seus efeitos se mantêm
persistidos (mantidos) na memória e não serão perdidos devido a falhas de sistema, como uma
queda de energia.

(F) Atomicidade: considerando duas transações distintas T1 e T2, T1 pode ver as alterações de T2
(após commit de T2) ou T2 pode ver as alterações de T1 (após commit de T1), mas certamente
não ambas.

Esta afirmação está Falsa. A descrição refere-se a como as transações interagem umas com as
outras, o que é papel do Isolamento. O Isolamento garante que as transações executadas
concorrentemente (ao mesmo tempo) ocorram como se fossem sequenciais, sem interferir umas
nas outras. A Atomicidade, por outro lado, estabelece a regra do "ou tudo ou nada" para uma
única transação: ou ela é concluída completamente (commit), ou é desfeita (rollback) e o banco
de dados permanece inalterado.

Gabarito: E

5.
(ADAPTADA - FGV/Tecno Jr (INPE)/INPE/Desenvolvimento De Software Para Operação
De Satélites/2024) Em relação a Bancos de Dados Relacionais, analise as afirmativas a seguir.

I. As tabelas são os componentes fundamentais de um banco de dados relacional e são usadas
para organizar e armazenar dados de forma estruturada.

IV. A sigla ACID está relacionada à manipulação de dados em bancos de dados relacionais onde
o “I” da sigla refere-se à inserção (Insert) de registros em uma tabela e o “D” à deleção (Delete)
de registros em uma tabela.

Está correto o que se afirma quais alternativas?

Comentários:

I. Correta. As tabelas são, de fato, os componentes fundamentais dos bancos de dados
relacionais (SQL). Os dados estruturados seguem um esquema fixo e rígido e são muito bem
representados em tabelas, onde as colunas exibem os campos e as linhas contêm os dados. Esse
formato facilita o armazenamento, a busca e a análise eficiente dos dados.

IV. Falsa. A sigla ACID está relacionada às propriedades que as transações devem seguir para
serem válidas em bancos de dados (como bancos de dados relacionais). O "I" de ACID significa
Isolamento, que garante que as transações executadas ao mesmo tempo não interfiram umas nas
outras. O "D" de ACID significa Durabilidade, que garante que as alterações de uma transação
confirmada (commit) nunca serão perdidas, mesmo em caso de falha do sistema.

Gabarito: D

6.
(FGV/AA (DNIT)/DNIT/Tecnologia da Informação/2024) As propriedades ACID são
essenciais no contexto do processamento de transações em bancos dados relacionais.

As propriedades que correspondem as letras C e D são, respectivamente,

a) completude e desacoplamento

b) coordenação e deslocamento.

c) commit e delete.

d) cooperação e distribuição.

e) consistência e durabilidade.

Comentários:

A letra C representa Consistência. A Consistência garante que uma transação só pode levar o
banco de dados de um estado consistente para outro estado consistente, preservando todas as
regras e restrições internas do banco de dados.

A letra D representa Durabilidade. A Durabilidade garante que, uma vez que uma transação é
confirmada (commit), seus efeitos são mantidos (persistidos) na memória e não serão perdidos,
mesmo em caso de falha do sistema, como uma queda de energia.

As outras letras são A de Atomicidade (ou "tudo ou nada") e I de Isolamento (Isolation).

Gabarito: E

7.
(FGV/Tec NS (TJ MS)/TJ MS/Analista de Sistemas Computacionais/Analista de Banco de
Dados/2024) No processamento de transações em bancos de dados, é fundamental garantir que
uma transação não sofra interferências de outras transações executadas simultaneamente. Para
isso, o resultado parcial de uma transação não deve ser acessado por outra transação, até a sua
efetivação.

Nesse sentido, deve ser assegurada a propriedade de transação conhecida como:

a) atomicidade;

b) consistência;

c) isolamento;

d) durabilidade;

e) normalização.

Comentários:

A propriedade que deve ser assegurada para evitar que transações simultâneas interfiram umas
nas outras é o (c) isolamento. O Isolamento é uma das quatro propriedades ACID (Atomicidade,
Consistência, Isolamento e Durabilidade). Quando várias transações estão rodando ao mesmo
tempo (concorrentemente), o Isolamento garante que cada transação ocorra de forma
independente, como se fosse executada sozinha. Isso impede que uma transação veja dados
pela "metade do caminho" ou modificações parciais de outra transação que ainda não foi
concluída (commit). Por exemplo, em uma transferência bancária, o Isolamento garante que
outras consultas vejam o estado antes ou depois da transferência, nunca o meio termo, onde o
dinheiro já saiu da origem, mas ainda não entrou no destino.

As outras propriedades são:

Atomicidade (a): Garante o "ou tudo ou nada" para uma transação.

Consistência (b): Garante que a transação mova o banco de um estado consistente para outro
consistente.

Durabilidade (d): Garante que as mudanças confirmadas (commit) não se percam, mesmo com
falha do sistema.

Normalização (e): Não é uma propriedade ACID, mas sim um processo de organização e
otimização da estrutura das tabelas do banco de dados.

Gabarito: C

8.
(FGV/Aud CE (TCE,PA)/TCE PA/Administrativa/Ciência de Dados/2024) Um banco de
dados projetado para apoiar a tarefa de alocação automática de analistas para os processos
recém inseridos no sistema. O modelo relacional especificado e implementado restringe a
alocação de processos apenas a analistas disponíveis no departamento. Caso haja tentativa de
inserção de nome fora da lista de valores já registrados, a transação não será completada, ou
seja, nenhum valor será inserido.

Selecione a alternativa que contém duas propriedades de transação aplicáveis ao cenário acima.

a) Atomicidade e Consistência.

b) Consistência e Durabilidade.

c) Durabilidade e Segurança.

d) Isolamento e Segurança.

e) Isolamento e Consistência.

Comentários:

1. "O modelo relacional... restringe a alocação de processos apenas a analistas disponíveis no
departamento." e "Caso haja tentativa de inserção de nome fora da lista de valores já
registrados...": Isso demonstra a propriedade de Consistência. A Consistência garante que a
transação só leva o banco de dados de um estado consistente para outro, preservando as regras
internas do banco. A regra de que a alocação deve ser feita apenas em analistas disponíveis no
departamento é uma restrição de integridade que o SGBD faz cumprir.

2. "...a transação não será completada, ou seja, nenhum valor será inserido": Isso descreve a
propriedade de Atomicidade. A Atomicidade garante o "ou tudo ou nada". Se a transação falhar
(porque violou a regra de consistência mencionada acima), ela deve ser completamente desfeita,
de modo que o banco de dados permaneça inalterado, como se a inserção nunca tivesse
ocorrido.

Gabarito: A

9.
(FGV/AGC (EPE)/EPE/Tecnologia da Informação/Soluções/2024) No contexto de banco de
dados, há um conjunto de propriedades fundamentais para a integridade e a confiabilidade das
transações em um banco de dados representadas pelo acrônimo ACID. Cada uma delas
desempenha um papel crucial na manutenção da integridade dos dados e na garantia de que as
transações sejam realizadas de forma correta e segura.

Com isto em mente, associe as propriedades listadas a seguir, aos responsáveis, dentro ou fora
do SGBD, por garanti-las.

1. Programadores ou módulo do SGBD que impõe restrições de integridade.

2. Subsistema de recuperação.

3. Subsistema de controle de concorrência.

( ) Atomicidade.

( ) Consistência.

( ) Isolamento.

( ) Durabilidade.

Assinale a opção que apresenta a associação correta, na ordem apresentada.

a) 2 – 1 – 3 – 3.

b) 1 – 3 – 2 – 2.

c) 2 – 2 – 1 – 3.

d) 2 – 1 – 3 – 2.

e) 3 – 2 – 1 – 1.

Comentários:

A associação correta entre as propriedades ACID e os responsáveis por garanti-las é (d) 2 – 1 – 3
– 2.

A garantia das propriedades ACID depende de diferentes partes do Sistema Gerenciador de
Banco de Dados (SGBD) e do projeto da aplicação:

- (2) Atomicidade: Garante o "ou tudo ou nada" para uma transação. Se uma transação falha (por
exemplo, devido a uma queda de energia), o banco de dados deve ser restaurado ao estado
anterior. Isso é responsabilidade do Subsistema de Recuperação.

- (1) Consistência: Garante que a transação mova o banco de dados de um estado consistente
para outro, preservando todas as regras internas definidas. Isso é garantido pelos Programadores
ou pelo módulo do SGBD que impõe restrições de integridade.

- (3) Isolamento: Garante que transações concorrentes não interfiram umas nas outras,
executando como se fossem sequenciais. Isso é tarefa do Subsistema de Controle de
Concorrência.

- (2) Durabilidade: Garante que as alterações de uma transação confirmada (commit)
permaneçam no banco de dados, mesmo após falhas do sistema. A Durabilidade é mantida pelo
Subsistema de Recuperação, que garante a persistência dos dados e a capacidade de refazer ou
desfazer operações após uma falha.

Gabarito: D

10.
(FGV/AJ (TJ RN)/TJ RN/Apoio Especializado/Análise de Suporte/2023) Em banco de
dados, uma transação é composta por diversas operações sobre os dados, como leitura,
alteração, inserção e remoção. Contudo, a transação é percebida como uma operação lógica
única sobre os dados.

Com isso, para garantir a consistência de um banco de dados, as transações devem satisfazer
algumas propriedades, como:

(i) todas as operações da transação são executadas em caso de sucesso; ou

(ii) em caso de falhas, todas as operações são desfeitas e o banco de dados deve voltar ao
mesmo estado em que estava antes do início da transação.

A propriedade de uma transação de banco de dados descrita é a:

a) atomicidade;

b) consistência;

c) isolamento;

d) durabilidade;

e) redundância.

Comentários:

A propriedade de transação descrita ("ou todas as operações são executadas, ou todas são
desfeitas") é a (a) atomicidade. A Atomicidade é o famoso princípio do "ou tudo ou nada". Essa
propriedade garante que uma transação (que é uma unidade lógica de trabalho que pode
envolver múltiplas operações) seja tratada como uma operação única. Se a transação for
concluída com sucesso, um commit (confirma tudo) é realizado, e as alterações permanecem. Se
qualquer instrução falhar, ou se houver queda de energia antes da conclusão, a transação inteira
falha e o banco de dados volta ao estado original (rollback, ou desfaz tudo). Por exemplo, em
uma transferência bancária, não existe "transferência pela metade".

Gabarito: A

11.
(FGV)/CGU/Tecnologia da Informação/2022) Considere uma transação T1 de bancos de
dados que transfere uma quantia em dinheiro da conta A para a conta B, gravando uma retirada
da conta A e um depósito para a conta B.

Analise as três intercorrências independentes que poderiam surgir numa transação desse tipo.

I. É feita a retirada da conta A, mas T1 falha; a retirada é mantida, mas o depósito na conta B não
é efetuado.

II. A retirada da conta A é efetuada; uma transação T2 lê o saldo da conta A após a retirada; o
depósito na conta B falha e a retirada é revertida. T2 prossegue, com valores errôneos.

==5460==

III. T1 é completada normalmente, mas há uma posterior falha na instalação, e as operações
realizadas na execução de T1 são perdidas.

No âmbito das propriedades ACID para bancos de dados, além da consistência, a violação em
cada caso, na ordem, é:

a) atomicidade, durabilidade, isolamento;

b) atomicidade, isolamento, durabilidade;

c) durabilidade, isolamento, atomicidade;

d) isolamento, atomicidade, durabilidade;

e) isolamento, durabilidade, atomicidade.

Comentários:

I. Violação de Atomicidade (A): A Atomicidade garante o princípio do "ou tudo ou nada" para
uma transação. Uma transação (como uma transferência bancária) deve ser tratada como uma
operação lógica única. O cenário onde a retirada da Conta A é mantida (parte da transação)
mesmo após a falha da Transação T1, mas o depósito na Conta B não é efetuado, é uma violação
da Atomicidade. Se T1 falha, todas as suas operações deveriam ser desfeitas (rollback), e o banco
de dados deveria retornar ao estado original. Não existe "transferência pela metade".

II. Violação de Isolamento (I): O Isolamento garante que, se várias transações estão rodando ao
mesmo tempo (concorrentemente), elas não interfiram umas nas outras, executando como se
fossem sequenciais. No cenário, a Transação T2 lê o saldo da Conta A após a retirada de T1, mas
antes que T1 seja concluída (T1 falha e é revertida). Isso significa que T2 leu um valor temporário
("dinheiro pela metade do caminho"). T2 prossegue com valores errôneos porque não estava
isolada de T1.

III. Violação de Durabilidade (D): A Durabilidade garante que, uma vez que uma transação é
confirmada (commit), seus efeitos são mantidos (persistidos) na memória e não serão perdidos,
mesmo em caso de falha do sistema (como queda de energia ou falha na instalação). O cenário
em que a Transação T1 é completada normalmente, mas suas operações são perdidas devido a
uma falha posterior, é uma violação da Durabilidade.

Gabarito: B

## LISTA DE QUESTÕES

1.
(FGV/Tec (MPE AL)/MPE AL/Geral/2018) O conjunto de programas responsável pelo
gerenciamento de uma base de dados e que, entre outras funções, suporta uma linguagem de
consulta, gera relatórios e disponibiliza uma interface para que os seus clientes possam incluir,
alterar ou consultar dados, é chamado de

a) Banco de Dados Relacional (BDR).

b) Dicionário de Dados (DD).

c) Modelo Entidade Relacionamento (MER).

d) Sistema de Suporte à Decisão (SSD).

e) Sistema Gerenciador de Bancos de Dados (SGBD).

2.
(FGV/Ana Gest (COMPESA)/COMPESA/Administrador de Banco de Dados/2016) O
metadados é um dos principais instrumentos do Administrador de Dados porque descreve
diversos atributos necessários para identificar, localizar, compreender e gerenciar dados.

A esse respeito, é correto afirmar que

a) metadados armazenam, estruturam e correlacionam, preferencialmente em um repositório de
metadados dotado de um metamodelo para apoiar o controle, a divulgação e o consumo.

b) metadados estruturais definem o sentido que se atribui a um elemento informacional para o
seu entendimento nos contextos organizacionais em que é produzido ou consumido, por
exemplo, um metadado estrutural define que o campo DATA_EFETIVACAO_APOLICE será a
data em que o corretor fez o registro oficial no sistema com a entrega da apólice.

c) metadados semânticos definem como o dado é composto em partes menores e detalha a sua
formação semântica, por exemplo, o campo DATA_EFETIVACAO_APOLICE é formado por dia,
mês, ano e uma marca de tempo (timestamp), como a hora, minuto e segundo.

d) metadados de negócio descrevem, por exemplo, as informações sobre as tabelas relacionais,
campos, índices, usuários e triggers implementados em um Sistema Gerenciador de Banco de
Dados (SGBD).

e) metadados técnicos descrevem, por exemplo, quais dados estão disponíveis, qual é sua
origem, quem é o responsável, o que significam e qual é o relacionamento com outros dados.

3.
(FGV/Tecno PD (Pref Caraguatatuba)/Pref Caraguatatuba/2024) Os dados podem ser
classificados de diversas formas, uma das categorias de classificação diz respeito a forma da
estruturação dos dados em repositórios de dados, analise os itens a seguir.

I. Dados estruturados são dados que foram formatados e transformados para se adaptar a um
modelo de dados relacional bem definido. Os dados brutos são mapeados em campos
predefinidos que podem ser extraídos e lidos por meio de declarações SQL.

II. Dados semiestruturados é categoria localizada entre dados estruturados e não estruturados.
São um tipo de dado que possui algumas características consistentes e definidas e não se
limitam a uma estrutura rígida como a necessária para bancos de dados relacionais.

III. Dados não estruturados podem ser qualquer tipo de dado não esteja em um formato
específico. São suportados apenas pelos sistemas de arquivos e não pelos sistemas de bancos de
dados, exemplos podem imagens, sons ou desenhos.

Está correto o que se afirma em

a) I apenas.

b) III apenas.

c) I, II e III.

d) I e II, apenas.

e) II e III, apenas.

4.
(FGV/AAD (TCE,RR)/TCE RR/Tecnologia da Informação/Banco de Dados/2025) As
transações ACID (Atomicidade, Correção, Isolamento e Durabilidade) garantem algumas
características importantes para leituras, gravações e modificações de tabelas em bancos de
dados. Baseando-se nesse contexto, avalie as afirmativas a seguir e assinale (V) para a verdadeira
e (F) para a falsa.

( ) Durabilidade: as transações levam uma base de dados de um estado consistente para outro
estado consistente.

( ) Correção: finalizado o commit da transação, suas alterações são mantidas no banco de dados
mesmo ocorrendo uma posterior queda do sistema.

( ) Atomicidade: considerando duas transações distintas T1 e T2, T1 pode ver as alterações de T2
(após commit de T2) ou T2 pode ver as alterações de T1 (após commit de T1), mas certamente
não ambas.

As afirmativas são, respectivamente,

a) V – V – F.

b) F – V – F.

c) F – F – V.

d) V – F – V.

e) F – F – F.

5.
(ADAPTADA - FGV/Tecno Jr (INPE)/INPE/Desenvolvimento De Software Para Operação
De Satélites/2024) Em relação a Bancos de Dados Relacionais, analise as afirmativas a seguir.

I. As tabelas são os componentes fundamentais de um banco de dados relacional e são usadas
para organizar e armazenar dados de forma estruturada.

IV. A sigla ACID está relacionada à manipulação de dados em bancos de dados relacionais onde
o “I” da sigla refere-se à inserção (Insert) de registros em uma tabela e o “D” à deleção (Delete)
de registros em uma tabela.

Está correto o que se afirma quais alternativas?

6.
(FGV/AA (DNIT)/DNIT/Tecnologia da Informação/2024) As propriedades ACID são
essenciais no contexto do processamento de transações em bancos dados relacionais.

As propriedades que correspondem as letras C e D são, respectivamente,

a) completude e desacoplamento

b) coordenação e deslocamento.

c) commit e delete.

d) cooperação e distribuição.

e) consistência e durabilidade.

7.
(FGV/Tec NS (TJ MS)/TJ MS/Analista de Sistemas Computacionais/Analista de Banco de
Dados/2024) No processamento de transações em bancos de dados, é fundamental garantir que
uma transação não sofra interferências de outras transações executadas simultaneamente. Para
isso, o resultado parcial de uma transação não deve ser acessado por outra transação, até a sua
efetivação.

Nesse sentido, deve ser assegurada a propriedade de transação conhecida como:

a) atomicidade;

b) consistência;

c) isolamento;

d) durabilidade;

e) normalização.

8.
(FGV/Aud CE (TCE,PA)/TCE PA/Administrativa/Ciência de Dados/2024) Um banco de
dados projetado para apoiar a tarefa de alocação automática de analistas para os processos

recém inseridos no sistema. O modelo relacional especificado e implementado restringe a
alocação de processos apenas a analistas disponíveis no departamento. Caso haja tentativa de
inserção de nome fora da lista de valores já registrados, a transação não será completada, ou
seja, nenhum valor será inserido.

Selecione a alternativa que contém duas propriedades de transação aplicáveis ao cenário acima.

a) Atomicidade e Consistência.

b) Consistência e Durabilidade.

c) Durabilidade e Segurança.

d) Isolamento e Segurança.

e) Isolamento e Consistência.

9.
(FGV/AGC (EPE)/EPE/Tecnologia da Informação/Soluções/2024) No contexto de banco de
dados, há um conjunto de propriedades fundamentais para a integridade e a confiabilidade das
transações em um banco de dados representadas pelo acrônimo ACID. Cada uma delas
desempenha um papel crucial na manutenção da integridade dos dados e na garantia de que as
transações sejam realizadas de forma correta e segura.

Com isto em mente, associe as propriedades listadas a seguir, aos responsáveis, dentro ou fora
do SGBD, por garanti-las.

1. Programadores ou módulo do SGBD que impõe restrições de integridade.

2. Subsistema de recuperação.

3. Subsistema de controle de concorrência.

( ) Atomicidade.

( ) Consistência.

( ) Isolamento.

( ) Durabilidade.

Assinale a opção que apresenta a associação correta, na ordem apresentada.

a) 2 – 1 – 3 – 3.

b) 1 – 3 – 2 – 2.

c) 2 – 2 – 1 – 3.

d) 2 – 1 – 3 – 2.

e) 3 – 2 – 1 – 1.

10.
(FGV/AJ (TJ RN)/TJ RN/Apoio Especializado/Análise de Suporte/2023) Em banco de
dados, uma transação é composta por diversas operações sobre os dados, como leitura,
alteração, inserção e remoção. Contudo, a transação é percebida como uma operação lógica
única sobre os dados.

Com isso, para garantir a consistência de um banco de dados, as transações devem satisfazer
algumas propriedades, como:

(i) todas as operações da transação são executadas em caso de sucesso; ou

(ii) em caso de falhas, todas as operações são desfeitas e o banco de dados deve voltar ao
mesmo estado em que estava antes do início da transação.

A propriedade de uma transação de banco de dados descrita é a:

a) atomicidade;

b) consistência;

c) isolamento;

d) durabilidade;

e) redundância.

11.
(FGV)/CGU/Tecnologia da Informação/2022) Considere uma transação T1 de bancos de
dados que transfere uma quantia em dinheiro da conta A para a conta B, gravando uma retirada
da conta A e um depósito para a conta B.

Analise as três intercorrências independentes que poderiam surgir numa transação desse tipo.

I. É feita a retirada da conta A, mas T1 falha; a retirada é mantida, mas o depósito na conta B não
é efetuado.

II. A retirada da conta A é efetuada; uma transação T2 lê o saldo da conta A após a retirada; o
depósito na conta B falha e a retirada é revertida. T2 prossegue, com valores errôneos.

III. T1 é completada normalmente, mas há uma posterior falha na instalação, e as operações
realizadas na execução de T1 são perdidas.

No âmbito das propriedades ACID para bancos de dados, além da consistência, a violação em
cada caso, na ordem, é:

a) atomicidade, durabilidade, isolamento;

b) atomicidade, isolamento, durabilidade;

c) durabilidade, isolamento, atomicidade;

d) isolamento, atomicidade, durabilidade;

e) isolamento, durabilidade, atomicidade.

## GABARITO

1. E
2. A
3. D
4. E

5. D
6. E
7. C
8. A

9. D
10.A
11.B

## BIBLIOGRAFIA

Ramakrishnan, R., &amp; Gehrke, J. (2011). Sistemas de gerenciamento de banco de dados. AMGH
Editora.

Elmasri, R., Navathe, S. B., &amp; Pinheiro, M. G. (2005). Sistemas de banco de dados.

Garcia-Molina, H. (2008). Database systems: the complete book. Pearson Education India.

Date, C. J. (2004). Introdução a sistemas de bancos de dados. Elsevier Brasil.

Coronel, C., Morris, S., &amp; Rob, P. (2016). Database systems: design, implementation, and
management. Boston: Cengage learning.
