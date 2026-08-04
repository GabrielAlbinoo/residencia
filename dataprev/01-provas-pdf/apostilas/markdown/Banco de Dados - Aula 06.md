# Banco de Dados - Aula 06

## Índice

1) Modelagem Dimensional - Teoria
3

2) OLAP - Teoria
37

3) Modelagem Dimensional - Questões Comentadas
46

4) OLAP - Questões Comentadas
61

5) Modelagem Dimensional - Lista de Questões
67

6) OLAP - Lista de Questões
77

## MODELAGEM DIMENSIONAL

## Conceitos Gerais

Entendemos o que é o sistema de Business Intelligence, como ele funciona e, principalmente,
onde os dados ficam armazenados - especialmente no Data Warehouse. Agora, nos resta saber
como esses dados são armazenados, e será justamente esse o tema que exploraremos durante
toda essa aula.
O Data Warehouse é um repositório para bancos de dados. Mas, diferentemente dos bancos de
dados relacionais que vimos em aulas anteriores, aqui temos um banco de dados multidimensional
(ou apenas dimensional). Esses bancos de dados são assim chamados pois suportam, num mesmo
conjunto de dados, diferentes dimensões para os dados.
Esse é um conceito chave para entendermos o modelo relacional, então vou trazer um pequeno
exemplo para vocês.

Pense numa empresa de vende de tênis - a Jordam. No modelo relacional, elencamos em tabelas
a quantidade de vendas, o valor dessas vendas, os produtos vendidos, entre outros elementos
importantes para as transações das entidades. Quando vamos analisar todos esses dados, eles
estão sempre em uma única dimensão, isso é, em uma única grandeza de tempo.
Pode ser que os dados analisados por intervalos de semana não forneçam uma informação
interessante, e precisamos analisar por dias, horas, ou por uma dimensão maior, por meses,
semestre ou anos. No modelo tradicional de bancos de dados, precisaríamos gerar diferentes
modelos de dados para cada dimensão, o que se torna impraticável, dependendo do tamanho do
banco de dados.

Para resolver esse problema, e aproveitando-se do uso dos dados históricos, o modelo
dimensional passa a agregar múltiplas dimensionalidades num mesmo modelo. Dessa forma,
podemos navegar entre os diferentes intervalos de tempo para melhor visualizar soluções e
propostas interessante à entidade. É como se agregássemos diferentes tabelas de um mesmo
objeto, mas em diferentes dimensionalidades, num mesmo modelo.
Esses modelos, com múltiplas dimensões agregadas, recebe o nome de cubo de dados. Isso pois
temos algo similar a várias tabelas “enfileiradas”, uma atrás da outra, criando um formato parecido
a de um cubo.

Esses cubos de dado são compostos de dois tipos de tabelas distintas: as tabelas fato e as tabelas
dimensão. Cada cubo pode ter múltiplas tabelas fato e múltiplas tabela dimensão. Vamos explorar
esses conceitos logo em seguida, mas antes, falaremos sobre as estruturas desses cubos de dados.

## 1.2 Estrutura dos Cubos

A estrutura dos cubos de dados pode se dar de duas formas distintas, em hipercubos, que
agregam todas as dimensões num cubo de dados só, e nos multicubos, que separam as dimensões
em diferentes cubos.
Nos hipercubos, todos os dados aparecem logicamente como um único cubo, e cada parte desse
cubo possui uma mesma dimensionalidade, isso é, cada pedaço possui um mesmo tamanho. Nessa
abordagem, temos respostas rápidas independentemente da quantidade de dimensões, além de
um entendimento mais fácil do modelo.

Dentro dos hipercubos, temos dois tipos: os densos e os esparsos. Os hipercubos densos são
estruturas multidimensionais onde a maioria das células contém dados, ou seja, não está vazia.
Isso acontece quando há uma alta densidade de dados em relação ao espaço multidimensional
disponível. Hipercubos densos são mais comuns em cenários onde há um número menor de
dimensões. Com menos dimensões, há uma menor quantidade de combinações possíveis de
valores de dimensão, o que reduz a probabilidade de células vazias.
Os hipercubos esparsos são estruturas onde a maioria das células está vazia, ou seja, não contém
dados. Isso acontece quando há muitas combinações possíveis de valores de dimensão, mas
apenas algumas dessas combinações têm dados associados.

(FGV/ALEMA/2023) Os data warehouse e sistemas OLAP são baseados no modelo
multidimensional em que se visualizam dados em um espaço n-dimensional em hipercubos.
Os hipercubos podem ser do tipo
a) dimensão ou fato.
b) esparso ou denso.
c) aditivo ou semiaditivo.
d) indexado ou não indexado.
e) balanceado ou não balanceado.
Comentários:
Como acabamos de ver, temos dois tipos de hipercubos - os esparsos e os densos. Correta a letra
B. (Gabarito: Letra B)

Já os multicubos segregam as dimensões diferentes em cubos diferentes. Ela é uma abordagem
utilizada para melhorar o desempenho e a eficiência das consultas analíticas em ambientes de
business intelligence. Em vez de depender de um único cubo para armazenar e processar todos
os dados analíticos, a estrutura de multicubos envolve a criação de vários cubos especializados
que são otimizados para diferentes tipos de consulta.

Comparando as diferentes abordagens, podemos apontar os seguintes detalhes:

### Característica

### Hipercubos

### Densos

### Hipercubos

### Esparsos

### Multicubos

Tamanho de
Armazenamento

Tende a ser maior
devido à densidade

de dados

Tende a ser menor
devido à presença de

células vazias

Depende da
quantidade e tamanho

dos cubos

Desempenho

Geralmente oferece

desempenho mais

rápido devido à
densidade de dados

Pode apresentar

desafios de
desempenho devido à
análise de células vazias

Desempenho variável,

dependendo da

consulta

Granularidade

Pode oferecer

detalhes mais
refinados devido à
densidade de dados

Pode ser limitada pela

presença de células

vazias

Pode variar
dependendo da
granularidade dos

cubos individuais

Eficiência de

Consulta

Consultas tendem a

ser mais rápidas e

eficientes

Consultas podem ser

mais lentas devido à

necessidade de
processar células vazias

Depende da otimização

dos cubos individuais

Manutenção e
Gerenciamento

Pode ser mais simples
de gerenciar devido à

estrutura compacta

Pode exigir mais esforço

de gerenciamento
devido à presença de

células vazias

Pode ser complexo
devido à presença de

múltiplos cubos

especializados

Flexibilidade

Oferece flexibilidade

em relação à análise

detalhada

Pode limitar a
flexibilidade devido à

presença de células

vazias

Pode fornecer
flexibilidade ao oferecer

diferentes perspectivas

de análise

Adequação a

Cenários

Bem adequado para
cenários onde há uma

alta densidade de

dados

Mais adequado para
cenários com espaço

multidimensional

Pode ser adequado

para cenários com
requisitos analíticos

diversos

significativo e dados

esparsos

## TABELAS FATO

## Panorama Geral

As tabelas fato são as tabelas centrais dos bancos de dados dimensionais. Elas armazenam os
dados quantitativos da nossa análise – são, portanto, nossas tabelas mais importantes do modelo.
Veja um exemplo abaixo:

Destacado em verde, temos a tabela fato. Veja que é uma tabela comum, com diferentes atributos
(colunas), assim como as tabelas que vimos no modelo relacional. Essas tabelas são ligadas às
demais tabelas dimensão que compõem o modelo, através de pares de chave primária e
estrangeira: as tabelas dimensão recebem suas chaves primárias, enquanto a tabela fato recebe
uma chave primária composta de chaves estrangeiras, que são justamente as chaves das outras
tabelas.
No exemplo acima, SK_CLIENTE, SK_CIDADE, SK_PERIODO, SK_LOJA e SK_VENDEDOR são chaves
primárias nas tabelas em amarelo, as tabelas dimensão, e compõem a chave primária da tabela
verde, a tabela fato. Além dessas chaves estrangeiras, temos a presença de métricas ou medidas,
que representam os fatos do negócio.
O intuito da tabela fato é justamente trazer as métricas de negócio. Isso é, medidas específicas
que refletem o desempenho e os resultados de uma organização em relação aos seus objetivos e
metas. Essas métricas podem incluir receita total, lucro, quantidade de produtos vendidos, ou
quaisquer outras que forem relevantes no contexto da entidade.

(CEBRASPE/EBSERH/2018) Com relação a banco de dados, julgue o item seguinte.
Diferentemente dos bancos de dados transacionais, a modelagem de bancos de dados
multidimensionais é caracterizada pelo uso de tabelas fato e tabelas periféricas, que armazenam,
respectivamente, a transação e as dimensões.
Comentários:
Os bancos de dados transacionais são aqueles direcionadas a lidar com as transações do dia a dia
da empresa, usualmente empregando modelos relacionais e a linguagem SQL. Já o modelo
multidimensional é diferente, usado só por um grupo restrito de analistas, constituído de tabelas
fato e tabelas periféricas, chamadas de dimensão. As tabela fato armazenam as transações, as
métricas, e as tabelas periféricas armazenam as diferentes dimensões dos dados. Portanto, correta
a afirmativa. (Gabarito: Certo)

Um tema delicado acerca das tabelas fato é a presença da dimensão tempo dentro dela. Apesar
de não ser um mandamento obrigatório, a presença da dimensão tempo em uma tabela fato é
fundamental para fornecer contexto temporal às transações ou eventos registrados.
inclusão da dimensão tempo permite analisar e entender como os dados mudam ao longo do
tempo, identificar tendências, sazonalidades e padrões temporais, e realizar comparações
históricas. A dimensão tempo geralmente é representada por uma hierarquia de atributos
temporais, que podem incluir hora, dia, mês, ano, e por aí vai.

Essas dimensões temporais permitem tratarmos a granularidade dos dados. Esse é um conceito
importante, então preciso que você preste atenção para aprender de uma vez.
Quanto menos detalhados os dados, isso é, quanto mais amplas as dimensões, maior a
granularidade. Pense que temos um agregado de diferentes grãos, por isso o grão é maior. Já
quando aprofundamos o detalhamento, temos uma diminuição de granularidade. Estamos
pegando partes do todo, de forma que é possível analisar melhor os detalhes.
Exemplificando, se tivermos uma tabela com as granularidades de ano, semestre, mês e dia,
quanto menor a fração de tempo estamos analisando, maior os detalhes, e menor a granularidade.

(FUNDATEC/AGERGS/2022) Sobre granularidade de um modelo dimensional, assinale a
alternativa correta.
Grão é o menor nível de informação e é definido de acordo com as necessidades do modelo de
dados.
Grão é o nome dados a uma tabela de um modelo Starschema.
Grão é considerado um prefixo de nomenclatura de tabela de banco de dados na construção de
um modelo dimensional.
Grão é a sumarização dos caracteres de um resultado de uma consulta de select no banco de
dados PostgreSQL.
O Grão de uma tabela é a soma de todas as colunas de um banco de dados.
Comentários:
Granularidade é o nível de detalhamento de um dado. Um grão será o menor nível de informação,
em termos de escala, que podemos coletar no modelo. Na questão, a alternativa que melhor
descreve isso é a letra A. (Gabarito: Letra A)

### Ano

### Semestre

### Mês

### Semana

### Dia

Granularidade

## Tipos de Métricas

Podemos classificar os fatos expressos na tabela fato de uma perspectiva matemática, de acordo
com a possibilidade de soma desses fatos - temos três tipos, os fatos aditivos, não aditivos e semi-
aditivos.

### Fato aditivo

Os fatos aditivos são aqueles que permitem a soma dos diferentes valores atribuídos a ele. Isso
significa que ele pode ser somado independentemente das dimensões envolvidas. Por exemplo,
se estamos lidando com vendas em uma tabela fato e temos medidas como "quantidade vendida"
e "receita total", ambas são consideradas aditivas. Podemos somar a quantidade vendida ou a
receita total em qualquer nível de agregação das dimensões, como por ano, por mês, por produto
ou por região, e o resultado terá significado.
Essa propriedade de aditividade é extremamente útil em análises de negócios, pois permite que
os analistas agreguem e resumam os dados de diferentes maneiras sem distorcer a interpretação.
Por exemplo, podemos calcular a receita total de uma empresa em um determinado ano somando
as receitas de todas as regiões, ou podemos calcular a receita total de um produto somando as
receitas de todas as lojas onde esse produto foi vendido.

### Fato não aditivo

Em contraste com os fatos aditivos, os fatos não aditivos são aqueles em que a adição dos valores
não é válida em todas as dimensões. Ou seja, a soma dos valores de um fato não aditivo em
diferentes dimensões pode resultar em informações incorretas ou sem sentido.
Percebam que não é que os fatos não podem ser somados por não serem numéricos, mas as
diferentes dimensões tornam os dados incompatíveis entre si, de forma que a soma não faça
sentido algum. Por exemplo, a contagem de registros - se considerarmos um fato que representa
o número de pedidos realizados em uma loja, somar esses valores em diferentes dimensões (por
exemplo, por produto, por dia) pode resultar em uma contagem total que não representa o
número real de pedidos, pois pode haver duplicação de pedidos em diferentes contextos de
análise.

### Fato semi-aditivo

Dados semi-aditivos são uma categoria intermediária entre os dados aditivos e não aditivos. Eles
possuem algumas características aditivas em certas dimensões, mas não em todas. Essa natureza
semiaditiva dos dados torna sua análise mais complexa do que os dados puramente aditivos, mas
ainda menos complicada do que os dados não aditivos.

Um exemplo são os estoques de produtos. O saldo de estoque pode ser somado ao longo do
tempo (por exemplo, em um determinado dia), pois em uma dimensão temporal, como o tempo,
os dados são aditivos. No entanto, se tentarmos somar o saldo de estoque de diferentes produtos,
isso pode não fazer sentido, já que produtos diferentes têm unidades diferentes e, portanto, não
podem ser somados de forma significativa.

(CEBRASPE/SERPRO/2021)

Tendo como referência inicial esse modelo, e considerando que, para representar a quantidade
de faltas em valores inteiros, seja inserida em FATO_FREQUÊNCIA a métrica qtd_faltas, em que
se possam realizar drill up e a soma de seus valores ao longo do tempo, julgue o item a seguir, à
luz dos conceitos afetos à modelagem dimensional.
A métrica qtd_faltas é aditiva.
Comentários:

## Tipos de Fatos

## Aditivo

## Semi-aditivo

## Não aditivo

Fugindo um pouco da “lógica do dia a dia”, que aponta a óbvia possibilidade de soma de
quantidade de faltas, temos esse seguinte trecho que indica que é possível a soma: “soma de seus
valores ao longo do tempo”. Correta a afirmativa. (Gabarito: Certo)

## Tipos de Tabelas Fato

Além de classificar os fatos em si, podemos classificar as tabelas fato em si de diferentes formas.
Vamos ver as principais.

### Fato Transacional

Uma tabela fato transacional é uma tabela que registra eventos individuais ou transações em um
sistema. Ela armazena os detalhes específicos de cada ocorrência ou transação que ocorre em um
determinado contexto. Essas tabelas são usadas para registrar informações detalhadas e
granulares sobre eventos específicos, geralmente em um nível de transação ou operação.
Uma tabela fato transacional é composta por várias colunas que representam os diferentes
atributos e informações relevantes para o evento ou transação em questão. Essas colunas podem
incluir informações como identificadores únicos, datas, identificadores de dimensões, medidas
quantitativas ou qualitativas, entre outros.

No exemplo acima, cada linha representa uma transação única, com o ID da transação funcionando
como uma chave primária. As demais colunas são chaves estrangeiras, ligadas às tabelas dimensão
respectivas. A quantidade vendida e a quantidade de vendas são as métricas da tablea.

### Fato Snapshot Periódico

Uma tabela fato snapshot periódico é uma forma de tabela fato que captura e armazena um
momento específico e periódico do estado de um conjunto de dados em um determinado
momento. Em vez de registrar eventos individuais ou transações como em uma tabela fato
transacional, a tabela fato snapshot periódico contém informações sobre o estado dos dados em
intervalos regulares de tempo.
Essa abordagem é útil quando estamos interessados em analisar mudanças e tendências ao longo
do tempo, em vez de analisar eventos individuais. Em vez de armazenar cada transação, a tabela
fato snapshot periódico registra os valores agregados de medidas em momentos específicos,
geralmente em intervalos regulares, como diariamente, semanalmente ou mensalmente.

Acima, cada linha representa um período de tempo específico, mais especificamente um mês. As
demais colunas, como vendas totais e receita, são colunas que apontam métricas

### Fato Snapshot Acumulado

==5460==

Uma tabela fato snapshot acumulado, ou accumulated snapshot fact, é uma forma de tabela fato
que armazena informações acumuladas ao longo do tempo. Em vez de registrar eventos
individuais ou instantâneos periódicos como nas tabelas fato transacionais ou snapshot periódico,
a tabela fato acumulado contém valores acumulados de medidas desde o início do período
considerado até o momento atual.
Essa tabela é particularmente útil quando queremos acompanhar e analisar a evolução cumulativa
de medidas ao longo do tempo, como receita acumulada, total de vendas acumuladas, número
de clientes acumulados, projetos com início e fim determinados, entre outros. Ela permite uma
visão contínua do crescimento e do desempenho em relação a uma medida específica.

Nesse exemplo, cada linha representa um pedido específico, com sua data e outras informações
relevantes elencadas nas demais colunas. Veja que as métricas dessa tabela, ou os fatos, são todos
não aditivos.

### Fato Sem Fato

As tabelas fato sem fato, ou factless fact, são tabelas fato que não contêm nenhuma métrica. Elas
são criadas primariamente para estabelecer relações entre elementos de diferentes dimensões.
Seu propósito é rastrear e analisar a presença ou ausência de determinados eventos, ou
combinação de eventos.
Tipicamente, ela é composta de um conjunto de chaves estrangeiras de diversas dimensões, e
demais atributos descritivos adicionais que sejam relevantes para o contexto do dado. A ausência
de dados numéricas quantitativos é o que a representa e destaca.

Um exemplo comum de uma tabela de fatos sem fatos é uma tabela de "pipeline de vendas" em
análises de vendas. Ela captura as etapas de uma oportunidade de vendas (por exemplo,
prospecção, qualificação e negociação) e os prazos associados, mas não inclui nenhum valor
monetário ou quantidades. Isso permite que os analistas analisem o processo de vendas,
acompanhem as taxas de conversão, identifiquem gargalos e meçam a eficácia de diferentes
estratégias de vendas sem se concentrar em números de vendas específicos.

(FGV/TJ RO/2015) O Gestor das salas de reunião e auditórios de um centro empresarial controla
a utilização das instalações por meio de um sistema de informação. Para melhor gerir seus
recursos, o gestor precisa responder às seguintes perguntas:
Que instalações são mais usadas?
Qual foi a utilização média das instalações em determinado período do dia?
Para responder essas perguntas, o seguinte modelo de dados foi elaborado:

Nesse modelo, a técnica de modelagem multidimensional empregada para analisar a utilização
das instalações é a:
a) degenerate dimension;
b) role playing dimension;

c) snowflake;
d) factless fact table;
e) slowly change dimension.
Comentários:
Analisando a tabela fato, não temos nenhum fato, nenhum valor de métrica. Temos apenas dados
qualitativos, apontando o dia da semana, hora do dia e situação da utilização. Portanto, temos
uma tabela fato sem fato – ou factless fact table. (Gabarito: Letra D)

## TABELAS DIMENSÃO

## Conceitos Gerais

As tabelas dimensão são as tabelas periféricas, responsáveis por armazenar informações que dão
subsídios aos fatos. Essas informações, chamadas de dimensões, envolvem dados descritivos,
contextuais e qualitativos das transações.

Acima, em amarelo, temos as 5 diferentes dimensões ligadas à tabela fato - CIDADE, PERIODO,
LOJA, CLIENTE e VENDEDOR. Perceba que cada tabela dimensão tem sua própria chave primária -
que pode ser a mesma chave primária oriunda da tabela relacional que gerou esse dado, ou uma
chave substitua, inserida no carregamento dos dados.

(CEBRASPE/ME/2020) Julgue o item a seguir, relativo a conceitos de modelagem dimensional.
Uma tabela de fatos registra dados dimensionais que explicam os fatos registrados.
Comentários:
Como vimos no nosso estudo, a tabela responsável por registrados dados dimensionais são as
tabelas dimensão, e não as tabelas fato. (Gabarito: Errado)

## Tipos de Tabela Dimensão

Assim como temos diferentes tabelas fato, também temos diferentes tipos de tabelas dimensão.
Esses tipos referem-se ao tipo de dado que é armazenado nelas. Vamos ver esses principais tipos.

### Slowly-Changin Dimension

A Slowly Changing Dimension (SCD), ou Dimensão de Mudança Lenta, é uma tabela dimensão
que faz literalmente o que seu nome aponta – muda lentamente, por períodos de tempo. Ela
atualiza atributos como nome, endereço, que mudam, mas com uma frequência relativamente
baixa.
O exemplo mais comum são os domicílios tributários. Um contribuinte pode mudar de domicílio,
mas é algo que acontece num intervalo de vários anos usualmente - e manter um histórico de
mudanças é interessante, caso alguma investigação esteja sendo feita contra ele.
Podemos mudar esses dados de três diferentes formas:

- Sobrescrição: os dados são sobescritos, isso é, são substituídos pelos dados novos. É a
abordagem menos recomendada.
- Adição de nova linha: com a mudança dos dados, adicionamos mais uma linha ao conteúdo.
É a abordagem mais recomendada.
- Adição de nova coluna: com a mudança dos dados, adicionamos mais uma coluna à tabela
Vamos fazer um exemplo. Suponha que José, em 2023, morava em Jaraguá do Sul, SC.

### ID

### Ano

### Nome

### Domicílio

1
2023
José
Jaraguá do Sul, SC
Em 2024, ele se muda para Florianópolis. Podemos ter essa interação de três diferentes formas,
conforme o tipo diferente de SDC que estamos usando:
Sobrescrição:

### ID

### Nome

### Ano

### Domicílio

1
José
2024
Florianópolis, SC
Adição de linha:

### ID

### Nome

### Ano

### Domicílio

José
Jaraguá do Sul, SC
José
Florianópolis, SC

Adição de coluna:

### ID

### Nome

### Ano

### Domicílio

### Ano

### Domicílio

1
José
2023
Jaraguá do Sul, SC
2024
Florianópolis, SC

### Conformed Dimension

As dimensões conformes, ou conformed dimensions, são dimensões que são compartilhadas e
mantidas de forma consistente em várias áreas ou processos dentro de um ambiente de data
warehouse ou sistema de business intelligence.
A ideia por trás de uma dimensão conformada é ter uma única versão da dimensão que possa ser
utilizada por diferentes partes do sistema, como diferentes tabelas fato ou processos analíticos.
Isso evita a duplicação de esforços e inconsistências nos dados dimensionais.
As tabelas de dimensão conformadas são projetadas de forma a capturar os atributos comuns e
relevantes para diferentes áreas ou processos de negócio. Elas são construídas com base em
consensos e acordos entre as partes interessadas, para garantir que as informações dimensionais
sejam consistentes e utilizáveis em todos os contextos.
Um exemplo comum de dimensão conforme (conformed dimension) pode ser a dimensão "Data".
Esta dimensão de data pode ser utilizada em várias áreas de um sistema de business intelligence,
como em um cubo de vendas para analisar as vendas ao longo do tempo, em um cubo de
produção para analisar a produção por mês ou em um cubo de recursos humanos para analisar o
turnover por trimestre. A vantagem de ter a dimensão de data como uma dimensão conforme é
que ela pode ser compartilhada entre diferentes áreas do sistema, garantindo consistência e
precisão nas análises.

### Junk Dimension

As tabelas de “dimensão lixo”, ou junk dimensions, são usadas para agregar atributos de baixo
valor individual em uma única tabela. Esses atributos “junk” são caracterizados por não se
encaixarem em nenhuma dimensão específica, ou não serem importantes para justificar a criação
de uma tabela.
Esses atributos "junk" podem incluir informações como códigos de status, indicadores de
qualidade, sinalizadores de desempenho ou outras variáveis de classificação que não são
necessariamente relevantes para análises individuais, mas ainda são úteis para fins de filtragem,
segmentação ou agregação.

As tabelas de dimensão "junk" são criadas com o objetivo de consolidar esses atributos em uma
única tabela, evitando assim a proliferação excessiva de tabelas de dimensão individuais para
atributos menos significativos.
Esses atributos que a compõe são chamados de atributos de baixa cardinalidade, justamente por
ocorrerem pouquíssimas vezes nos fatos.

### Degenerate Dimension

Degenerate Dimension, ou dimensão degenerada, ironicamente, não é uma tabela fato, e sim um
conjunto, um agregado de dimensões dentro de uma tabela fato.
Aqui o atributo não possui informações suficientes que justifiquem a criação de uma tabela
dimensão dedicada (leia-se atributos irrelevantes), e, por esse motivo, são inseridos diretamente
na tabela fato.
A principal vantagem das tabelas de dimensão degenerada é a simplificação do modelo
dimensional, eliminando a necessidade de criar e manter tabelas de dimensão adicionais para
atributos simples. Isso reduz a complexidade do modelo, facilita as consultas e pode melhorar o
desempenho do sistema.

### Role Playing Dimension

As tabelas dimensão do tipo role-playing são dimensões que são reutilizadas dentro de uma
mesma tabela fato, desempenhando papéis diferentes a cada ligação. Elas são facilmente
identificadas, quando percebemos uma pluralidade de ligações entre uma mesma tabela
dimensão e uma tabela fato.
Em um cenário típico, uma dimensão é projetada para representar um aspecto específico dos
dados, como tempo, localização, produto, cliente, entre outros. No entanto, pode haver casos em
que seja necessário analisar os dados dimensionais de diferentes maneiras, considerando
diferentes contextos ou relacionamentos.
A Role Playing Dimension resolve esse desafio ao criar cópias da mesma dimensão, cada uma com
um papel ou perspectiva diferente. Cada cópia da dimensão, chamada de "role playing
dimension", é associada a uma tabela fato específica, permitindo que os dados sejam analisados
a partir de diferentes pontos de vista.

(FGV/TCE TO/2022) Observe a seguinte modelagem dimensional:

A técnica utilizada para implementar a dimensão tempo e seus diferentes relacionamentos com a
tabela fato é:
a) Factless table;
b) Fact Constellation;
c) Role playing dimension;
d) Degenerated dimension;
e) Slowly changing dimension

Comentários:
A Dimensão Tempo possui múltiplas ligações com a tabela Fato, o que caracteriza o tipo de
dimensão Role Playing. (Gabarito: C)

## ESQUEMAS DIMENSIONAIS

## Conceitos Gerais

Podemos ter diferentes estruturas de dados e relações entre as tabelas fato e dimensão de acordo
com:

1) A normalização das tabelas de dimensão
2) A presença de uma ou mais tabelas fato
A normalização de tabelas aqui ocorre de forma muito similar ao que vimos no modelo relacional,
mas focadas primariamente em dimensionalidades. Usando o mesmo exemplo que usamos lá na
aula do modelo relacional, imagine que tenhamos uma tabela com dados do tipo “Cidade,
Estado”.
Se preenchermos essa tabela com todas as cidades de um estado, estaríamos repetindo o Estado
todas as vezes que incluirmos um dado - São Paulo, São Paulo; Santos, São Paulo; Santo André,
São Paulo; Rio Preto, São Paulo; etc. Veja que o dado referente ao Estado foi repetido diversas
vezes. Podemos quebrar esses dados, tendo uma tabela para Estado, e outra para municípios.

Essa normalização tem um objetivo simples: diminuir a redundância de dados. A redundância
ocorre quando temos um mesmo dado repetido diversas vezes, seja numa mesma máquina, seja
em diferentes máquinas. Quanto maior a redundância, maior o desempenho do nosso banco de
dados, mas também mais espaço ele ocupará - e como os Data Warehouses destinam-se a
armazenar quantidades enormes de dados, isso se torna um tópico relevante.
Já quando temos uma menor redundância, o desempenho é pior, já que não temos o mesmo dado
“espalhado” pelo banco de dados, conectando e amarrando melhor a tabela, nos forçando a
percorrer um caminho maior até chegar no dado que queremos. Porém, o espaço de
armazenamento também é diminuído consideravelmente.

## MODELO NORMALIZADO → PIOR DESEMPENHO, MENOR ESPAÇO DE ARMAZENAMENTO

## MODELO NÃO NORMALIZADO → MELHOR DESEMPENHO, MAIOR ESPAÇO DE ARMAZENAMENTO

Cidade, Estado
Estado
Cidade
Normalizando

Temos três modelos distintos, chamados de esquemas. Dois deles se diferenciam acerca da
presença, ou não, de normalização das tabelas dimensão, e o outro pela presença da pluralidade
de tabelas fato.

## Esquemas

### Esquema Estrela

Esquemas em estrela, ou star-scheman, são esquemas de bancos de dados multidimensionais
onde temos somente uma tabela fato central e as dimensões não são normalizadas. Temos apenas
uma conexão direta entre as tabelas dimensão e a tabela fato - cada tabela fato estará ligada a 1
ou n tabelas dimensão (1:n), e cada tabela dimensão estará ligada somente a uma tabela fato (1:1),
ainda que essa conexão seja múltipla.

Esse modelo é chamado de "estrela" porque a tabela fato central fica no centro da estrutura, com
as tabelas dimensão se conectando a ela como raios. Isso torna a estrutura de dados fácil de
entender e de navegar, facilitando a realização de análises de dados.
Outra característica importante do esquema estrela é que ele é otimizado para suportar consultas
de agregação de dados. Isso significa que ele é projetado para lidar com consultas que envolvem
cálculos de médias, somas, contagens e outras funções de agregação de dados. Essas consultas

Fato

Dimensão

Dimensão

Dimensão

Dimensão

Dimensão

são comuns em ambientes de business intelligence, onde os usuários precisam extrair insights e
informações resumidas a partir de grandes volumes de dados.

(CEBRASPE/TCE SC/2022) A respeito de inteligência do negócio, julgue o item a seguir.
O esquema de modelagem multidimensional estrela (star schema) é caracterizado pela
normalização de suas tabelas dimensionais.
Comentários:
Errado, meu caro! O modelo em estrela é desnormalizado, ao contrário do que a afirmativa aponta.
(Gabarito: Errado)

### Esquema Floco de Neve

O esquema floco de neve (snowflake) é outro modelo de arquitetura de banco de dados
dimensional que é uma variação do esquema estrela. Ele é chamado de "floco de neve" porque
as tabelas dimensão são normalizadas, o que significa que elas são divididas em tabelas menores
para remover a redundância de dados. Isso pode levar a uma estrutura de dados que se parece
com um floco de neve, com tabelas interconectadas que se ramificam em várias direções.

No esquema floco de neve, as tabelas dimensão são normalizadas em várias tabelas menores,
cada uma com suas próprias chaves primárias e estrangeiras. Isso significa que, em vez de ter
apenas uma tabela dimensão, como em um esquema estrela, o esquema floco de neve tem várias
tabelas de dimensão relacionadas. Isso pode ajudar a economizar espaço de armazenamento e

Fato

Dimensão

Dimensão

Dimensão

Dimensão

Dimensão

Dimensão

Dimensão

Dimensão

melhorar o desempenho de consultas, já que as tabelas normalizadas têm menos redundância de
dados.
Uma das principais vantagens do esquema floco de neve é a sua flexibilidade. Como as tabelas
dimensão são normalizadas, os usuários podem adicionar facilmente novas dimensões ao esquema
sem afetar as tabelas existentes. Isso torna o esquema floco de neve adequado para ambientes
de data warehousing onde as necessidades de análise de dados podem mudar rapidamente.

(CESGRANRIO/TRANSPETRO/2023) Comparando-se os esquemas estrela (star) e floco de neve
(snow flake) em data warehouses (DW), constata-se que
a) o esquema estrela é normalizado, enquanto o esquema floco de neve é desnormalizado.
b) o esquema estrela utiliza mais junções na execução de consultas, tornando-as mais lentas

quando comparadas às consultas em um esquema floco de neve.
c) o esquema estrela é desnormalizado e, geralmente, oferece um desempenho de consulta mais

rápido, enquanto o esquema floco de neve é normalizado, resultando em mais junções durante
as consultas.
d) ambos os esquemas favorecem o desempenho das consultas em detrimento da normalização

dos dados.
e) ambos os esquemas têm a mesma estrutura e a mesma abordagem quanto à normalização de

dados e ao desempenho de consulta.
Comentários:
Vamos analisar as alternativas.
a) Errado. O Esquema estrela é desnormalizado, enquanto o esquema floco de neve é

normalizado.
b) Errado. Quem faz junções é o modelo floco de neve, por ser normalizado.
c) Certo. O esquema estrela, não normalizado, é mais otimizado por não ter que fazer junções.

Já o esquema floco de novo, como precisa dessas junções por ser normalizado, tende a ter um
desempenho pior.
d) Errado. O esquema que favorece o desempenho é o esquema estrela.
e) Errado. As estruturas diferem entre si.
A alternativa correta é, portanto, a letra C. (Gabarito: Letra C)

### Esquema Constelação de Fatos

A constelação de fatos é um esquema composto por múltiplas tabelas fato, interconectadas por
intermédio de tabelas dimensão¸ que pode, ou não, ser normalizadas. Essas tabelas dimensão de
ligação são justamente as tabelas de dimensão conforme, que comentei a você logo antes na aula.

A principal diferença aqui é clara - passamos a ter diversas tabelas fato. Esse é o modelo mais
realista de funcionamento de um Data Warehouse, já que, numa entidade, podemos ter diversos
fatos que queremos analisar.

(CEBRASPE/TCE RJ/2022) Julgue o próximo item, a respeito da modelagem dimensional de
dados.
Uma constelação de fatos é um conjunto de conceitos que compartilham entre si as suas tabelas
de fatos.
Comentários:
Cuidado! No esquema de constelação de fatos, temos diferentes fatos, cada um funcionando
autonomamente. O que há é um compartilhamento de dimensões entre si - portanto, a alternativa
está incorreta. (Gabarito: Errado)

Tabela Fato

Dimensão

Tabela Fato

Dimensão
Dimensão

Dimensão

Dimensão

Dimensão

Dimensão

## REGRAS DE KIMBALL

Como nos bancos de dados relacionais, no bancos multidimensionais também temos um conjunto
de regras para uma correta estruturação. Porém, aqui, temos mais “mandamentos” do que regras
- são um conjunto de 10 indicações basilares, feitas por Kimball, para um correto desempenho dos
modelos dimensionais e dos data warehouses em geral.

### Regra #01 – Carregue dados atômicos detalhados nas estruturas dimensionais

Os modelos dimensionais devem ser preenchidos com detalhes atômicos fundamentais para
suportar a filtragem imprevisível e a agrupação necessárias para as consultas dos usuários de
negócios. Os usuários geralmente não precisam ver um único registro de cada vez, mas não se
pode prever as maneiras um tanto arbitrárias pelas quais eles desejarão filtrar e resumir os
detalhes. Se apenas dados resumidos estiverem disponíveis, você já fez suposições sobre padrões
de uso de dados que levarão os usuários a se depararem com uma barreira quando desejarem
aprofundar os detalhes. Claro, os detalhes atômicos podem ser complementados por modelos
dimensionais resumidos que oferecem vantagens de desempenho para consultas comuns de
dados agregados, mas os usuários de negócios não podem depender apenas de dados resumidos;
eles precisam dos detalhes minuciosos para responder às suas perguntas em constante mudança.

### Regra #02 – Estruture os modelos dimensionais em volta de processos de negócio

Processos de negócios são as atividades realizadas pela sua organização; eles representam
eventos de medição, como fazer um pedido ou faturar um cliente. Os processos de negócios
normalmente capturam ou geram métricas de desempenho exclusivas associadas a cada evento.
Essas métricas se traduzem em fatos, sendo que cada processo de negócio é representado por
uma única tabela de fatos atômicos. Além das tabelas de fatos de processo único, às vezes são
criadas tabelas de fatos consolidadas que combinam métricas de vários processos em uma única
tabela de fatos em um nível de detalhe comum. Novamente, as tabelas de fatos consolidadas são
um complemento às tabelas de fatos detalhadas de processo único, e não um substituto para elas.

### Regra #03 – Garanta que toda tabela fato tenha uma dimensão “data” associada

Os eventos de medição descritos na Regra #2 sempre possuem uma “marca” de data (timestamp)
associado a eles, seja um instantâneo de saldo mensal ou uma transferência monetária capturada
até a centésima parte de um segundo. Cada tabela de fatos deve ter pelo menos uma chave
estrangeira para uma tabela de dimensão de data associada, cujo nível de granularidade é um
único dia, com atributos de calendário e características não padronizadas sobre a data do evento
de medição, como o mês fiscal e indicador de feriado corporativo. Às vezes, várias chaves
estrangeiras de data são representadas em uma tabela de fatos.

### Regra #04 – Garanta que todos os fatos numa mesma tabela fato tenham o mesmo

### nível de granularidade ou detalhe

Existem três granularidades fundamentais para categorizar todas as tabelas de fatos: transacional,
snapshot periódico ou snapshot acumulado. Independentemente do tipo de granularidade, cada
medição dentro de uma tabela de fatos deve estar no exato mesmo nível de detalhe. Quando
você mistura fatos que representam múltiplos níveis de granularidade na mesma tabela de fatos,
está criando confusão para os usuários de negócios e tornando as aplicações de BI vulneráveis a
resultados exagerados ou incorretos.

### Regra #05 – Relacionamentos muitos-para-muitos devem ser tratados em tabelas

### fato

Uma tabela de fatos armazena os resultados de um evento de processo de negócios e, por sua
natureza, possui uma relação muitos-para-muitos (M:M) entre suas chaves estrangeiras, como
vários produtos sendo vendidos em várias lojas em vários dias. Esses campos de chave estrangeira
nunca devem ser nulos. Às vezes, as dimensões podem ter múltiplos valores para um único evento
de medição, como os múltiplos diagnósticos associados a um encontro de saúde ou vários clientes
com uma conta bancária. Nesses casos, não é razoável resolver as dimensões com múltiplos
valores diretamente na tabela de fatos, pois isso violaria a granularidade natural do evento de
medição. Portanto, utilizamos uma tabela intermediária com chave dupla, de relação muitos-para-
muitos, em conjunto com a tabela de fatos.

### Regra #06 – Relacionamentos muitos-para-um devem ser tratados em tabelas

### dimensão

Relacionamentos hierárquicos muitos-para-um (M:1) com profundidade fixa entre atributos
geralmente são desnormalizados ou consolidados em uma tabela de dimensão plana. Se você
passou a maior parte da sua carreira projetando modelos de entidade-relacionamento para
sistemas de processamento de transações, precisará resistir à tendência instintiva de normalizar
ou fragmentar um relacionamento M:1 em subdimensões menores; a desnormalização da
dimensão é a essência da modelagem dimensional.
É relativamente comum ter vários relacionamentos M:1 representados em uma única tabela de
dimensão. Relacionamentos um-para-um, como uma descrição única de produto associada a um
código de produto, também são tratados em uma tabela de dimensão. Ocasionalmente,
relacionamentos muitos-para-um são resolvidos na tabela de fatos, como no caso em que a tabela
de dimensão detalhada possui milhões de linhas e seus atributos de consolidação estão mudando
com frequência. No entanto, o uso da tabela de fatos para resolver relacionamentos M:1 deve ser
feito com moderação.

### Regra #07 – Armazene identificações de relatórios e filtre valores de domínio nas

### tabelas dimensão

Os códigos e, mais importante, os decodificadores e descritores associados usados para rotular e
filtrar consultas devem ser capturados em tabelas de dimensão. Evite armazenar campos de
código criptografados ou campos descritivos volumosos na própria tabela de fatos; da mesma
forma, não armazene apenas o código na tabela de dimensão e assuma que os usuários não
precisam de decodificadores descritivos ou que eles serão tratados na aplicação de BI. Se for um
rótulo de linha/coluna ou filtro de menu suspenso, ele deve ser tratado como um atributo de
dimensão.
Embora tenhamos afirmado na Regra #5 que as chaves estrangeiras da tabela de fatos nunca
devem ser nulas, também é aconselhável evitar nulos nos campos de atributo das tabelas de
dimensão, substituindo o valor nulo por "NA" (não aplicável) ou outro valor padrão, determinado
pelo responsável pelos dados, para reduzir a confusão dos usuários, se possível.

### Regra #08 – Garanta que as tabelas dimensão usem chaves substitutas

Chaves substitutas atribuídas sequencialmente e sem significado (exceto para a dimensão de data,
onde chaves atribuídas cronologicamente e ainda mais significativas são aceitáveis) proporcionam
diversos benefícios operacionais, incluindo chaves menores, o que significa tabelas de fatos
menores, índices menores e melhor desempenho. As chaves substitutas são absolutamente
necessárias se você estiver rastreando alterações nos atributos da dimensão com um novo registro
de dimensão para cada mudança de perfil. Mesmo que os usuários de negócios inicialmente não
visualizem o valor de rastrear alterações de atributos, o uso de chaves substitutas tornará uma
mudança de política futura menos onerosa. As chaves substitutas também permitem mapear várias
chaves operacionais em um perfil comum e protegem contra atividades operacionais inesperadas,
como a reutilização de um número de produto obsoleto ou a aquisição de outra empresa com
seus próprios esquemas de codificação.

### Regra #09 – Crie dimensões conformes para integrar dados ao longo da empresa

As dimensões conformes (também conhecidas como dimensões comuns, mestres, padrão ou de
referência) são essenciais para o armazenamento de dados empresariais. Gerenciadas uma vez no
sistema ETL e reutilizadas em várias tabelas de fatos, as dimensões conformes fornecem atributos
descritivos consistentes em modelos dimensionais e suportam a capacidade de realizar análises
abrangentes e integrar dados de vários processos de negócios. A Matriz de Barramento do
Armazém de Dados Corporativos é o principal plano arquitetônico para representar os processos
de negócios centrais da organização e sua dimensionalidade associada. A reutilização de
dimensões conformes reduz o tempo de lançamento no mercado, eliminando esforços
redundantes de design e desenvolvimento. No entanto, as dimensões conformes exigem um
compromisso e investimento em governança e gestão de dados, mesmo que nem todos precisem
concordar com cada atributo da dimensão para aproveitar a conformidade.

### Regra #10 – Equilibre continuamente os requisitos e as realidades para oferecer uma

### solução de DW/BI que seja aceita pelos usuários de negócios e que apoie sua

### tomada de decisão

Os modeladores dimensionais devem constantemente equilibrar os requisitos dos usuários de
negócios com as realidades subjacentes dos dados de origem associados, a fim de entregar um
design que possa ser implementado e que, o mais importante, tenha uma chance razoável de ser
adotado pelo negócio. O equilíbrio entre requisitos e realidades é um fato da vida para os
profissionais de DW/BI, seja focando no modelo dimensional, na estratégia do projeto, nas
arquiteturas técnicas/ETL/BI ou no plano de implantação/manutenção.

## 10 Regras/Recomendações de Kimball

### \#01 – Carregue dados atômicos detalhados nas estruturas dimensionais

### \#02 – Estruture os modelos dimensionais em volta de processos de negócio

### \#03 – Garanta que toda tabela fato tenha uma dimensão “data” associada

### \#04 – Garanta que todos os fatos numa mesma tabela fato tenham o mesmo nível de

### granularidade ou detalhe

### \#05 – Relacionamentos muitos-para-muitos devem ser tratados em tabelas fato

### \#06 – Relacionamentos muitos-para-um devem ser tratados em tabelas dimensão

### \#07 – Armazene identificações de relatórios e filtre valores de domínio nas tabelas

### dimensão

### \#08 – Garanta que as tabelas dimensão usem chaves substitutas

### \#09 – Crie dimensões conformes para integrar dados ao longo da empresa

### \#10 – Equilibre continuamente os requisitos e as realidades para oferecer uma solução de

### DW/BI otimizada

Quero que você entenda que essas não são regras rígidas, são fortes recomendações de Kimball
para que o banco de dados multidimensional funcione da forma mais otimizada possível. As
questões cobram esses conhecimentos de forma difusa, sem muita literalidade - mas é importante
que você leia todas as recomendações justamente para entender como gerar um Data Warehouse
de forma otimizada e “limpa”.

(FGV/SEFAZ MG/2023) Kimball elenca uma série de conceitos fundamentais para a elaboração de
um modelo dimensional.
Em relação a esses conceitos, assinale a afirmativa incorreta.
a) O estabelecimento da granularidade mostra exatamente o que é representado por uma linha

na tabela de fato.
b) A análise de requisitos de negócio e o conhecimento da realidade em relação aos dados

disponíveis nos sistemas de origem é uma etapa essencial.
c) Todo o contexto descritivo de um modelo dimensional está pautado nas tabelas de fato,

revelando quem, o que, onde, quando, por que, e como.
d) Os processos de negócio são eventos usados para gerar métricas de performance que são

traduzidas em fatos em uma tabela de fato.
e) O processo de design do modelo dimensional em quatro etapas contempla: 1) selecionar os

processos de negócio; 2) estabelecer a granularidade; 3) identificar as dimensões; e 4)
identificar os fatos.
Comentários:
Vamos analisar cada uma das alternativas:
a) Correta. O estabelecimento da granularidade é fundamental na modelagem dimensional. Ele
define o nível de detalhe representado por uma linha na tabela de fatos. A granularidade
determina quais eventos ou transações são registrados como fatos e como eles são agregados.
b) Correta. A análise de requisitos de negócio e o entendimento da realidade dos dados nos
sistemas de origem são etapas essenciais para criar um modelo dimensional eficaz. Compreender
as necessidades do negócio e os dados disponíveis é crucial para projetar um esquema que atenda
às demandas analíticas.
c) Incorreta. O contexto descritivo em um modelo dimensional não está exclusivamente nas tabelas
de fatos. Ele é composto tanto pelas dimensões quanto pelos fatos. As dimensões fornecem
informações contextuais, como quem, o que, onde, quando e por que, enquanto os fatos
representam as métricas quantitativas1.
d) Correta. Os processos de negócio são eventos ou atividades que geram métricas de
desempenho. Essas métricas são traduzidas em fatos armazenados nas tabelas de fatos. Portanto,
os processos de negócio são fundamentais para a criação de um modelo dimensional eficaz1.

e) Correta. O processo de design do modelo dimensional segue quatro etapas: 1) selecionar os
processos de negócio relevantes; 2) estabelecer a granularidade; 3) identificar as dimensões
relevantes; e 4) identificar os fatos que serão medidos. Essas etapas são essenciais para criar um
esquema dimensional bem estruturado1.
A alternativa incorreta é, portanto, a letra C. (Gabarito: Letra C)

## OLAP

## Conceitos Gerais

OLAP (Online Analytical Processing) é uma técnica de análise de dados que se concentra na
consulta interativa e na análise de grandes volumes de dados multidimensionais de maneira
eficiente e rápida. Essa técnica emprega diferentes operações para navegarmos através as
diferentes granularidades do cubo de dados.

Em vez de se concentrar em dados individuais ou transacionais, o OLAP permite que os usuários
analisem dados em diferentes perspectivas, como tempo, localização e produto, por exemplo. O
OLAP permite que os usuários naveguem em diferentes níveis de agregação de dados e executem
cálculos complexos em tempo real, “navegando” entre as diferentes dimensionalidades.
Existem três tipos de arquitetura OLAP: MOLAP, ROLAP e HOLAP. Vamos aprofundar um pouco
em cada uma delas.

- MOLAP (Multidimensional OLAP): é uma abordagem que armazena os dados em um cubo
multidimensional e usa essa estrutura para consulta e análise. Os dados são pré-agrupados
e armazenados em um formato de cubo, que pode ser facilmente navegado e analisado em
diferentes dimensões. O MOLAP é ideal para análises rápidas de dados e é eficiente no uso
de recursos do servidor, mas pode ser limitado em termos de escalabilidade e flexibilidade
em relação a outras arquiteturas OLAP.
- ROLAP (Relational OLAP): é uma abordagem que usa um banco de dados relacional como
fonte de dados para consulta e análise. Os dados são armazenados em tabelas relacionais
e os usuários acessam esses dados por meio de uma camada de software OLAP. O ROLAP

é altamente escalável e flexível em relação a outras arquiteturas OLAP, mas pode ser mais
lento em termos de desempenho de consulta.
- HOLAP (Hybrid OLAP): é uma abordagem que combina características do MOLAP e do
ROLAP. O HOLAP armazena dados detalhados em um banco de dados relacional e
armazena dados agregados em um cubo multidimensional. Isso permite que os usuários
analisem dados em diferentes níveis de detalhe e agregação, dependendo das
necessidades da análise. O HOLAP oferece um bom equilíbrio entre desempenho e
flexibilidade em relação a outras arquiteturas OLAP.

Além disso, temos duas possibilidades de locais onde as consultas podem ser feitas:

- DOLAP (Desktop OLAP) - O DOLAP é uma arquitetura que permite que as consultas sejam
disparadas de um cliente (geralmente um desktop) para o servidor. O servidor, por sua vez,
retorna um conjunto de dados multidimensionais para ser analisado pelo usuário. Isso
permite portabilidade aos usuários OLAP que não possuem acesso direto ao servidor.
- WOLAP (Web OLAP) - O WOLAP é semelhante ao DOLAP, mas as consultas são disparadas
através de um navegador web. Isso permite que os usuários acessem e analisem os dados
de qualquer lugar, desde que tenham uma conexão com a internet.
Essas análises remotas são permitidas através do uso de cubos pré-carregados. O conceito de
cubos pré-carregados refere-se à prática de criar e armazenar antecipadamente os conjuntos de
dados multidimensionais (ou cubos OLAP) que serão usados para análise. Isso é feito para
melhorar a eficiência e a velocidade das consultas OLAP.
Os cubos pré-carregados contêm todas as possíveis combinações e resumos de dados que podem
ser solicitados pelos usuários. Isso permite que as consultas OLAP retornem resultados
rapidamente, pois os dados necessários já foram calculados e armazenados no cubo.

## Arquitetura do OLAP

### MOLAP

(Dimensional)

### ROLAP

(Relacional)

### HOLAP

(Híbrido)

## Formas de acesso ao OLAP

### WOLAP

(Web)

### DOLAP

(Desktop)

## OLAP e OLTP

OLTP (Online Transaction Processing) é um tipo de processamento de dados que consiste na
execução de várias transações que ocorrem simultaneamente. Essas transações são
tradicionalmente chamadas de transações econômicas ou financeiras, registradas e protegidas
para que uma empresa possa acessar as informações a qualquer momento para fins contábeis ou
de relatórios.
Veja que o OLTP não envolve dados multidimensionais, e sim os bancos de dados transacionais e
relacionais. E é nesse ponto que as bancas “caem matando”. Vou trazer uma tabela comparando
as duas abordagens para que você não caia em nenhuma pegadinha na hora das provas.

### Aspecto

### OLAP

### OLTP

Objetivo
Suporte e análise de dados e

decisões

Foco em transações cotidianas e

comerciais

Arquitetura
Realizado em bancos de dados

dimensionais

Realizado em bancos de dados
transacionais, usualmente em SGBD

relacional (SGBDr)

Ações
Carga e consulta
CRUD (Create, Read, Update,

Delete)

(CESGRANRIO/LIQUIGAS/2018) Em uma empresa, é comum haver vários sistemas de informações
e aplicações, para apoiar o seu funcionamento.
Nesse contexto, os bancos de dados de sistemas

a) OLAP seguem o modelo multidimensional.
b) OLAP seguem o modelo relacional.
c) OLTP são orientados por assunto.
d) OLTP são concebidos apenas para consulta.
e) OLTP têm por objetivo o apoio à decisão.
Comentários:
Lembre-se, OLAP se relaciona ao modelo multidimensional e tem, portanto, uma orientação por
assunto. Já OLTP tem foco transacional, se relacionando com o modelo relacional, com objetivo
de gerenciar transações. Nesse contexto, a única alternativa com correspondência verdadeira é a
letra A. (Gabarito: Letra A)

(FUNDATEC/IPE SAUDE/2022) Um é uma coleção de dados obtidos de diversas fontes
heterogêneas, orientada a assunto, contendo uma coleção de tecnologias de apoio à decisão.
Dentre essas tecnologias, destacam-se as ferramentas que permite a análise de dados
complexos, utilizando, por exemplo, capacidades de computação distribuída. Quando há a
necessidade de se trabalhar com um subconjunto de dados de uma organização, por exemplo,
voltados a um único departamento, é possível utilizar um outro conceito conhecido como .
Assinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.
a) Data warehouse – OLAP – Data marts
b) Data warehouse – OLTP – Data marts
c) Data mart – OLAP – SGBDs
d) Data mart – OLTP – Data warehouses
e) Data mart – OLTP – SGBDs
Comentários:
Ótima questão, cobrando conhecimentos agregados das últimas 3 aulas. A coleção de dados, que
preenche o primeiro campo, é o data warehouse. A análise de dados complexos, que, por sua vez,
preenche o segundo campo, é o OLAP. Por fim, no último campo temos a especialização de data
warehouses por departamentos, setor ou afins - chamada de data marts. (Gabarito: Letra A)

==5460==

## Operações OLAP

As operações OLAP são um conjunto de operações que permitem que os usuários analisem e
explorem dados multidimensionais em diferentes níveis de agregação. Com isso, temos diferentes
visões dos dados, de forma a favorecer a análise. Vamos ver as principais operações.

### Slice

A operação de slice, ou corte, permite que os usuários selecionem um subconjunto de dados em
uma dimensão, reduzindo a quantidade de dados exibidos em uma determinada consulta. A
operação envolve, de forma “lúdica”, fatiar o cubo de dados, reduzindo uma de suas dimensões.
Então, se tivermos um cubo de três dimensões, podemos remover uma delas, trabalhando apenas
com duas dimensões - ou seja, como numa tabela tradicional.

Imagine um cubo OLAP que contém dados de vendas de uma loja, com dimensões como Produto,
Localização e Tempo. A operação Slice poderia ser usada para reduzir uma dessas dimensões,
eliminando a variável de tempo - e trabalhando com apenas um intervalo de tempo específico.

## Operações OLAP

### Slice

### Dice

### Drill Down

### Drill Through

### Roll Up

### Pivot

### Dice

O dice, assim como o slice, retira um subconjunto de dados de um cubo de dados - mas aqui não
temos redução da dimensão. Ainda estaremos trabalhando com um cubo dimensional, mas a
amostra de dados trabalhada será menor.

Usando o mesmo cubo OLAP do exemplo anterior, no slice, a operação Dice poderia ser usada
para selecionar dados de vendas para “Camisetas” (Produto) na “Loja A” (Localização) durante o
“Ano de 2020” (Tempo). Ainda trabalhamos com múltiplas dimensões, mas os dados retornados
são em quantidade menor.

### Drill Down e Roll Up

A operação de Drill Down envolve a diminuição da granularidade, ou o aumento do detalhamento,
feito de forma progressiva - granularidade por granularidade. O objetivo é enxergar o dado em
granularidades cada vez menores, obtendo mais detalhes. Essa operação usualmente é feita em
dimensões de tempo - passamos a análise de ano para meses, ou de meses para dias, por exemplo
- ou na dimensão de localidade - vamos de países para estados, de estados para municípios, e
assim por diante.
É possível também fazer um detalhamento “pulando” dimensões - por exemplo, imagine que as
granularidades são “País, Região, Estado, Cidade”, se formos diretamente de “País” para
“Cidade”, estamos pulando duas granularidades. Esse tipo de operação é chamada de Drill
Through.
Podemos também ter o caminho oposto sendo percorrido - um aumento da granularidade, ou
uma diminuição do detalhamento. Talvez seja interessante encararmos os dados em um conjunto

mais “macro” de agregação, por país, continente, ou por ano, década. Nesses casos, usamos a
operação chamada de Roll Up.

## DRILL DOWN → AUMENTO DO DETALHAMENTO / DIMINUIÇÃO DA GRANULARIDADE

## ROLL UP → DIMINUIÇÃO DO DETALHAMENTO / AUMENTO DA GRANULARIDADE

### Pivot

A operação de Pivot, ou rotação, é uma técnica para alterar uma hierarquia dimensional para outra
em um cubo de dados. Ela permite que os usuários rotacionem os dados para ver uma nova
perspectiva, alterando as linhas para colunas e vice-versa.

Por exemplo, se um relatório estiver mostrando vendas por Produto nas linhas e Tempo nas
colunas, a operação Pivot poderia ser usada para rotacionar o relatório para mostrar Tempo nas
linhas e Produto nas colunas.

(FGV/TJ RN/2023) Utilizando um Painel de Informações, Julia analisou a Taxa de
Congestionamento de Processos Judiciais dos Estados do Brasil e depois selecionou o Estado do
Rio Grande no Norte para analisar a taxa por cidade.
A operação OLAP realizada por Julia foi:
Slice;
Dice;
Drill down;
Drill up;
Rotate.
Comentários:
Primariamente, Julia está analisando o dado no nível de agregação “Estado”. Posteriormente, ela
faz um aumento do detalhamento, ao exibir os dados em “Cidade”. Essa operação é chamada de
drill down. (Gabarito: Letra C)

(CEBRASPE/PETROBRAS/2022) Julgue o item seguinte, a respeito de data warehouse e OLAP.
Em uma aplicação OLAP, a operação de roll-up consiste em passar os dados com detalhamento
maior para um detalhamento menor.
Comentários:

Perfeito! No Roll Up estamos diminuindo o nível de detalhe - então, aumentamos o nível de
agregação, analisando dados de horas a dias, ou de cidades a estados. (Gabarito: Certo)

## QUESTÕES COMENTADAS

01. (CEBRASPE/CNPq/2024) Acerca de técnicas de modelagem de BI (business intelligence), de
big data e de linguagem de manipulação de dados (DML), julgue o item que se segue.
As tabelas de dimensão na modelagem para BI são estruturas de dados com informações
agregadas e medidas específicas.
Comentários:
As informações agregadas e medidas específicas ficam nas tabelas fato, e não nas tabelas
dimensão, como a afirmativa expõe. Por esse motivo, está incorreta.

Gabarito: Errado
02. (FGV/PREF. BH/2024) O modelo multidimensional é composto por diversos elementos, por
exemplo, dimensões, chaves, medidas e tabelas de fatos.
As tabelas de fatos podem ser do tipo

a) star e snowflake.
b) mutivalorate dataset e surrogate.
c) uncommited dataset, snapshot e dynamic dataset.
d) transaction, periodic snapshot e accumulating snapshot.
Comentários:
Apesar de podermos ter diversos tipos de tabela fato, Kimball define 3 tipos essenciais:
transacional, snapshot periódico e spanshot acumulado.

A alternativa correta é, portanto, a letra D.

Gabarito: Letra D

## Tabelas Fato Essenciais

## Transacional

## Snapshot periódico

## Snapshot acumulado

03. (CEBRASP/INPI/2024) Julgue o seguinte item, relacionados a modelagem de dados.
Em uma modelagem dimensional, os elementos tabelas fato (para os dados que são métricas) e
tabelas dimensões (para os dados descritivos) são opcionais, por exemplo, em um data warehouse.
Comentários:
Errado, meu aluno. As tabelas fato e dimensão não são opcionais, muito pelo contrário - elas são
obrigatórias, são elas que compõem o modelo dimensional.

Gabarito: Errado
04. (CEBRASPE/SEPLAN RR/2023) Julgue o próximo item a respeito do conceito de data
warehousing.
O esquema em estrela é uma abordagem adotada por data warehouses relacionais e composta
por tabela de fatos, várias tabelas de dimensão e chaves estrangeiras da tabela de fatos para as
tabelas de dimensão.
Comentários:
O esquema estrela é uma abordagem de bancos de dados dimensionais, não relacionais. Porém,
a banca considerou correta a definição – por algum motivo que não sei lhe explicar. O restante da
afirmativa está, de fato, correta.

Gabarito: Errado
05. (FGV/CGE SC/2023) Uma rede de lojas de departamentos planeja configurar uma tabela de
fato (VENDAS) que favoreça a integridade para análise de vendas no mesmo carrinho (na mesma
transação de venda, tal qual a associação conhecida entre fralda e cerveja). A tabela de fato possui
os
seguintes
atributos:
ChaveCalendário(FK),
ChaveLoja(FK),
ChaveProduto(FK),
ChaveCliente(FK), IDTransação, HoraMinVenda, ReaisVendidos e QuantidadeVendida.
Assinale a opção que indica o(s) atributo(s) que deve(m) ser a chave primária da tabela de fato
VENDAS.

a) Apenas IDTransação.
b) Apenas ChaveProduto.
c) Chave composta por ChaveProduto e IDTransação.
d) Chave composta por ChaveCliente e IDTransação.
e) IDTransação, ChaveProduto e ChaveCliente.

Comentários:
Questão interessante sobre a construção do modelo dimensional. Queremos analisar as vendas
de um mesmo carrinho, para tanto, nossa chave primária deverá fornecer informações suficientes
para que possamos obter as informações necessárias à análise da métrica do fato. Precisamos
definir quais parâmetros são necessários para unificar a nossa transação. Nesse contexto, o
primeiro apontamento óbvio é o IDTransação. Porém, numa mesma transação, podemos ter mais
de um produto – e é necessário que saibamos quais são esses produtos para analisar a transação,
para individualizar cada produto comprado. Sendo assim, precisamos montar uma chave composta
com ChaveProduto e IDTransação.

Gabarito: Letra C

06. (CEBRASPE/DP DF/2022) Julgue o item subsecutivo, a respeito da modelagem de bases de
dados multidimensionais.
Em um cubo de dados, os dados são visualizados em somente uma dimensão.
Comentários:
Errado, meu caro. A vantagem do cubo de dados é que podemos manipulá-lo em duas, três ou
maisdimensões, não somente uma.

Gabarito: Errado
07. (FGV/SEFAZ AM/2022) Assinale a opção que apresenta os tipos de métricas presentes nas
tabelas Fato utilizadas em modelos multidimensionais.

a) Cubo e hipercubo.
b) Estrela e floco de neve.
c) Boolena, numérica e string.
d) Aditiva, não aditiva e semiaditiva.
e) Chave surrogate, dimensão e hierarquia.
Comentários:
Em termos de métricas, conforme vimos na aula, temos três classificações possíveis: tabelas fato
aditivas, não aditivas e semiaditivas. Correta, portanto, a afirmativa D.

Gabarito: Letra D

08. (CEBRASPE/FUB/2022) Julgue o item subsecutivo, referentes a técnicas de otimização de
consultas SQL e a técnicas de modelagem multidimensional.
Apesar de poupar espaço de armazenamento, a modelagem snowflake é contraindicada para
consultas com alta demanda de processamento em razão do seu potencial para impactar
negativamente os tempos de resposta das consultas.
Comentários:
Ao montarmos a modelagem snowflake, reduzimos a redundância, com menos repetições de um
mesmo dado temos um menor espaço de armazenamento. Porém, isso vem ao custo do
desempenho em consultas, já que temos de realizar diversas junções entre as tabelas
normalizadas, aumentado o tempo de resposta e, consequentemente, reduzindo o desempenho
do modelo. Correta a afirmativa.

Gabarito: Certo
09. (FGV/TJDFT/2022) Ana foi contratada para desenvolver uma solução de Business Intelligence
para a Justiça. Um dos requisitos analíticos é a quantidade de processos novos
(QtdProcessosNovos) criados por Tribunal por trimestre ao longo dos anos.
Para atender ao requisito analítico, Ana deve usar o modelo multidimensional:

a)

b)

c)

d)

e)
Comentários:
Bom, vamos analisar o que a questão quer:

- Criar um modelo dimensional que analise a quantidade de processos novos

- Essa medição deve comportar a granularidade em trimestre e anos
Então, já temos a nossa tabela fato, que é a quantidade de processos. A quantidade de processos
será dada em função do tempo, e de cada tribunal que será analisado – portanto, nossas tabelas
dimensão serão dimensão Tribunal e dimensão Tempo. Com isso, nos restam as afirmativas a, b e
e.
A afirmativa a tem uma impropriedade – ela aloca a métrica na tabela dimensão, enquanto essa
deveria estar na tabela fato.A afirmativa e não apresenta a granularidade em trimestres, como
demanda o nosso enunciado.
Sendo assim, ficamos com a alternativa b, que será nossa resposta.

Gabarito: Letra B
10. (FGV/TJDFT/2022) Observe o seguinte recorte de um relatório extraído do DataJud e um
recorte do respectivo modelo multidimensional.

Quando a relação de hierarquia entre atributos de uma tabela dimensão é normalizada, os
atributos de baixa cardinalidade são migrados para outra tabela, como exemplo: UF e Município.
Quando esse processo é repetido nas hierarquias de todas as dimensões de um modelo
multidimensional, é criada a estrutura:

a) CRISP-DM;
b) Star Schema;
c) Drill Throught;
d) Snowflake Schema;
e) Fact Constellation.
Comentários:
Perceba que estamos tratando de uma dimensão normalizada – isso é, uma dimensão ligada a
outra dimensão. Isso é o que ocorre no nosso esquema floco-de-neve.
Aqui é um ótimo caso para você entender um pouco mais o que acontece nessa normalização:

Se tivéssemos NomeUF e NomeMunicipio numa mesma tabela dimensão, teríamos, por exemplo,
os dados: Joinville, SC; Florianópolis, SC; Criciúma, SC. Perceberam a repetição do dado SC? Isso
é a redundância dos dados
Ao criarmos a dimensão Município e fazermos a normalização, temos o “dado raiz” SC e os dados
Florianópolis, Joinville e Criciúma ligados a ele, sem a repetição. Isso diminui o armazenamento,
mas afeta o desempenho, já que devemos percorrer um “caminho” maior.

Gabarito: Letra D
11. (CEBRASPE/MP TCE-SC/2022) A característica principal da modelagem dimensional é a
simplicidade e o seu foco é o cruzamento de variáveis.
Comentários:
Está certinho, meu caro. Você pode ter certa estranheza com a relação da modelagem dimensional
com a simplicidade, mas está correto – no contexto da programação e criação de softwares, o
modelo dimensional é considerado um modelo simples e de fácil entendimento. Além disso, o seu
foco é, corretamente, o cruzamento de variáveis para extração de informações úteis à organização.

Gabarito: Certo
12. (CEBRASPE/ISS ARACAJU/2021) A metodologia de modelagem dimensional em que uma
tabela fato está a pelo menos duas tabelas de dimensão é denominada

a) surrogate key.
b) snowflake.
c) star schema.
d) metric scale.
e) smallgrain.
Comentários:
Questão polêmica. Espero que você, assim como eu, tenha concluído que a questão fala do
modelo snowflake – já que, ao interpretar o enunciado, é isso que entendemos.Porém, para a
cebraspe e sua interpretação maluca, o enunciado está abordando o modelo star schema... essas
bancas ainda matam o aluno.

Gabarito oficial: Letra C
Gabarito do professor: Letra B

13. (FCC/ALAP/2020) Duas definições de estruturas de dados estão determinadas para um projeto
de datamart de uma loja de varejo: uma delas (tabela A) contém a data da venda, a identificação
do produto vendido, a quantidade vendida do produto no dia e o valor total das vendas do
produto no dia; a outra (tabela B) contém a identificação do produto, nome do produto, marca,
modelo, unidade de medida de peso, largura, altura e profundidade da embalagem.
Considerando os conceitos de modelagem multidimensional de data warehouse, as tabelas A e B
são, respectivamente:

a) Query e Réplica
b) Fato e Dimensão
c) Dimensão e Réplica
d) Fato e ETL
e) ETL e Query
Comentários:
A tabela A, segundo o enunciado, contém “a data da venda, a identificação do produto vendido,
a quantidade vendida do produto no dia e o valor total das vendas do produto no dia” – essas
informações estão presentes na tabela fato, que armazena as métricas do negóico.
Já a tabela B, segundo o enunciado, contém “a identificação do produto, nome do produto,
marca, modelo, unidade de medida de peso, largura, altura e profundidade da embalagem”. São
características dos produtos, presentes na tabela dimensão.

Gabarito: Letra B
14. (FCC/SEFAZ BA/2019) Suponha que uma Auditora Fiscal da área de TI tenha proposto a
seguinte modelagem multidimensional para a SEFAZ−BA:
Fato central: Controle de Receitas e Despesas

A partir do Fato Controle de Receitas e Despesas:
Dimensão Tempo
Dimensão Receitas

Dentro da dimensão Receitas: Dimensão Receitas de Impostos
Dentro da dimensão Receitas: Dimensão Receitas de Taxas
Dimensão Despesas

Dentro da dimensão Despesas: Dimensão Tipo de Despesa
Dimensão Cidade

Dentro da dimensão Cidade: Dimensão NF-e
A modelagem multidimensional proposta

a) é o resultado da decomposição de mais de uma dimensão que possui hierarquias entre seus

membros, caracterizando o modelo snowflake, a partir de um fato central.

b) tem como característica um fato central, a partir do qual estão dispostas as dimensões que

dele participam, em um formato simétrico, característico do modelo star.
c) parte de um elemento central, denominado pivot, a partir do qual são realizadas operações

OLAP como roll up, em que busca-se aumentar o nível de detalhe ou diminuir a
granularidade da consulta.
d) possui um fato central, a partir do qual estão dispostas as dimensões que dele participam

e seus membros, sob uma única estrutura hierárquica, facilitando a inclusão de dados por
digitação nas tabelas do DW.
e) não é um modelo normalizado, por isso evita a redundância de valores textuais em cada

uma das tabelas, representadas pelas dimensões denominadas dimension tables.
Comentários:
Traduzindo o texto da questão para um esquema, temos o seguinte:

A questão nos traz um modelo com tabelas dimensão derivadas de outras tabelas dimensão, e
apenas uma tabela fato central. Isso nos permite concluir que se trata de um modelo do tipo
snowflake. A alternativa que corretamente nos aponta isso é a letra A. Quanto à demais:
b) Errado. Não há simetria, conforme o esquema acima.
c) Errado. Ainda não vimos operações OLAP, mas de forma geral o ROLL UP diminui o nível de
detalhe, e o PIVOT gira a perspectiva de dados.
d) Errado. A inclusão de dados no DW não é feita por digitação, e sim por ingestão de dados.
e) Errado. O modelo descrito é o snowflake - normalziado.

Gabarito: Letra A

15. (FGV/ALERJ/2017) Observe o seguinte Modelo Multidimensional de Dados.

A técnica de modelagem multidimensional utilizada para normalizar a dimensão, movendo os
campos de baixa cardinalidade para tabelas separadas e ligadas à tabela original através de chaves
artificiais, é:

a) Slowly Changing Dimension;
b) Conformed Dimension;
c) Degenerated Dimension;
d) Snowflaked Dimension;
e) Role-Playing Dimension.
Comentários:
Perceba que a tabela dimensão Produto está ligada a outras duas dimensões, e ainda que a tabela
dimensão marca também está ligada a outra tabela dimensão – isso decorre da implementação
do modelo snowflake. Perceba que podemos ter mais de uma normalização dentro das tabelas,
como ocorre nessa questão.

Gabarito: Letra D
16. (FCC/TCM-GO/2015) Quando o modelo de dados multidimensionais começa a ser definido,
elementos básicos de representação precisam ter sido estabelecidos, de modo a se criar um
padrão de modelagem. Considere um modelo em que as dimensões e fatos são representados
em tabelas, podendo haver múltiplas dimensões e múltiplas tabelas de fatos.
Ao modelar cada tabela ...I... devem ser considerados os seguintes pontos:
− A chave primária é composta, sendo um elemento da chave para cada dimensão;
− Cada elemento chave para a dimensão deve ser representado e descrito na tabela ..II..
correspondente (para efetuar a junção);
− A dimensão tempo é sempre representada como parte da chave primária.
Deve haver uma tabela ..III.. para cada dimensão do modelo, contendo
− Uma chave artificial (ou gerada) genérica;
− Uma coluna de descrição genérica para a dimensão;
− Colunas que permitam ..IV.. ;
− Um indicador nível que indica o nível da hierarquia a que se refere a linha da tabela.

As lacunas de I a IV são corretas, e respectivamente, preenchidas com:

a) dimensão − de fatos − de fatos − a junção com as tabelas de fatos.
b) de fatos − de tempo − dimensão − sinalizar a presença de fatos para o período de tempo

indicado na linha.
c) de fatos − dimensão − dimensão − efetuar os filtros.
d) de tempo − dimensão − de fatos − a junção com as tabelas de dimensão.
e) dimensão − de fatos − de tempo − efetuar os filtros.
Comentários:
Vamos por partes.
O item I requer uma chave primária composta, tendo um elemento para cada dimensão – essa é
a característica da tabela fato.
O item II é a tabela onde estão as descrições do que é apresentado nos fatos, ou seja, na tabela
dimensão.
Como temos uma tabela dimensão para cada dimensão do modelo, essa preenche nossa lacuna
III. E as colunas de uma tabela dimensão permite a filtragem dos dados, fechado nossa lacuna IV.

Gabarito: Letra C
17. (FGV/CGE SC/2023) Uma rede de lojas de departamentos usa o modelo dimensional estrela
conforme o seguinte diagrama:

Observando o aumento na quantidade de reclamações dos clientes nas lojas, os analistas de BI
resolveram incluir as informações analiticamente úteis da base de reclamações no Data
Warehouse.

Para que a criação da constelação de fatos (também chamada de galáxia) contemple o fato
RECLAMAÇÃO, os analistas devem adicionar

a) uma tabela de fato RECLAMAÇÕES, contendo apenas um atributo descritivo, sem a

necessidade de conectar a qualquer dimensão.
b) uma tabela de fato RECLAMAÇÕES, contendo um atributo descritivo e três chaves

estrangeiras, uma para cada uma das dimensões existentes.
c) uma tabela de fato RECLAMAÇÕES, contendo um atributo descritivo e três atributos que

receberão os valores das chaves estrangeiras de Loja, Cliente e RegistroReclamação
diretamente do banco de dados operacional.
d) três tabelas de dimensão (CalendárioReclamação, ClienteReclamação e LojaReclamação)

mais uma tabela de fato RECLAMAÇÕES, contendo um atributo descritivo e três chaves
estrangeiras, uma para cada uma das dimensões recém-criadas.
e) E duas tabelas de dimensão (ClienteReclamação e LojaReclamação) mais uma tabela de fato

RECLAMAÇÕES, contendo um atributo descritivo e três chaves estrangeiras, duas para
cada uma das dimensões recém-criadas e uma para referenciar o registro da reclamação
diretamente do banco de dados operacional.
Comentários:
Vamos analisar cada alternativa com base no esquema apresentado.

a) Errado. Uma tabela fato sempre vai ser ligada a alguma dimensão, caso contrário não

haverá dados.
b) Certo. Se incluirmos uma tabela fato das reclamações, devemos ligá-la às três tabelas de

dimensão existente, através de chaves estrangeiras.
c) Errado. Não temos ligação direta com o banco de dados operacional.
d) Errado. Essas dimensões já existem, não há necessidade de duplicá-las.
e) Errado. Vide letra D.

Gabarito: Letra B
18. (VUNESP/PREF. MARÍLIA/2023) Considere o seguinte modelo multidimensional de dados,
normalmente utilizado no projeto de um data warehouse, composto por tabelas dimensão e fato:

Por esse modelo, pode-se afirmar que

a) há três tabelas fato.
b) há três tabelas dimensão.
c) há quatro tabelas dimensão.
d) não há tabelas fato.
e) não há tabelas dimensão.
Comentários:
No modelo apresentado, temos uma tabela fato central, a tabela Vendas, e 3 tabelas dimensão,
periféricas - Fabricante, Produto e Data. Portanto, a única alternativa que apresenta a definição
correta é a letra B.

Gabarito: Letra B
19. (VUNESP/ISS SP/2023) A modelagem multidimensional de dados é frequentemente utilizada
para o projeto e a implementação de sistemas de Data Warehouse. Tal forma de modelagem é
composta por dois tipos de tabelas, denominadas de tabelas

a) fato e dimensão.
b) simples e compostas.
c) virtual e completa.
d) concatenadas e analíticas.
e) granuladas e completas.
Comentários:
Questão tranquila. Os dois tipos de tabelas usadas na modelagem dimensional e,
consequentemente, em Data Warehouses, são as tabelas fato e as tabelas dimensão.

Gabarito: Letra A
20. (FGV/TJ SE/2023) Observe o profile das seguintes fontes de dados do Data Warehouse
JusDW.
FONTE DE DADOS 1: Tabela TB_PROC
Atributo: ID_P
Descrição: Identificador único da tabela TB_PROC
Quantidade de Registros: 3.250
Valor Inicial: 1

==5460==

Valor Final: 3.250
Valores Nulos: 0
FONTE DE DADOS 2: Tabela TAB_P
Atributo: ID_PROC
Descrição: Identificador único da tabela TAB_P
Quantidade de Registros: 250
Valor Inicial: 1
Valor Final: 250
Valores Nulos: 0
Para integrar e armazenar os 3.500 registros das Fontes de Dados 1 e 2 na Dimensão DIM_PROC
do JusDW, identificando unicamente cada novo registro criado da DIM_PROC, é necessário criar
uma:

a) Foreign key;
b) Natural key;
c) Alternate key;
d) Surrogate key;
e) Candidate key.
Comentários:
Quando estamos dando carga nos dados, muitas vezes inserimos alguma chave sem valor
específico, apenas para unificar o registro de forma simples e “curta”, Esse processo se chama de
inserção de chave substituta, ou surrogate key - que é o necessário para o processo apontado
nessa questão.

Gabarito: Letra D
Utilize a estrutura abaixo, relativa a uma empresa de comércio que tem várias lojas físicas em uma
cidade, e que foi utilizada a modelagem dimensional para criar a tabela fato de vendas da
empresa, para as quatro próximas questões.

Chave da loja (FK)
Chave do produto (FK)
Chave da data (FK)
Quantidade de vendas diária
Quantidade de vendas em moeda real
Quantidade de vendas em moeda euro
Lista dos produtos vendidos por venda
Nomes das lojas

21. (CEBRASPE/FUNPRESP-EXE/2022) Na modelagem dimensional, a tabela fato deverá refletir o
maior número de informações para os negócios, sejam números ou não.
Comentários:
Os fatos são dados numéricos, quantitativos. Nesse sentido, a afirmativa está incorreta - a tabela
fato deve refletir o maior número de informações para o negócio sim, mas essas informações
devem ser numéricas.

Gabarito: Errado
22. (CEBRASPE/FUNPRESP-EXE/2022) Em uma modelagem dimensional, o campo Nomes das
lojas poderá ser utilizado em uma tabela fato ou na tabela dimensão.
Comentários:
O campo Nomes das lojas implica em um atributo descritivo, não numérico, apenas uma
informação gerencial, não um fato. Por esse motivo, ele poderá ser utilizado somente nas tabelas
dimensão.

Gabarito: Errado
23. (CEBRASPE/FUNPRESP-EXE/2022) Chave do produto é uma chave estrangeira (FK – foreign
key); é possível que exista um campo desse tipo em outra tabela, como chave primária (PK –
primary key).
Comentários:
Corretamente. A Chave do produto é uma FK, isso é, uma chave estrangeira, dentro da tabela
fato. Em uma tabela dimensão, ela atuará como uma chave primária. Esse elo de ligação FK/PK é
o que une as tabelas fato e dimensão.

Gabarito: Certo
24. (CEBRASPE/FUNPRESP-EXE/2022) Uma tabela fato como a mostrada pode apresentar uma
relação de muitos para muitos em modelos dimensionais.
Comentários:
Perfeito! Lembrem-se do conceito trazido por Kimball,

“Uma tabela de fatos armazena os resultados de um evento de processo de negócios e, por sua
natureza, possui uma relação muitos-para-muitos (M:M) entre suas chaves estrangeiras, como
vários produtos sendo vendidos em várias lojas em vários dias.”

Gabarito: Certo
25. (FGV/SENADO/2012) Com relação ao tema Modelagem Multidimensional, analise as
afirmativas a seguir.
I. Os esquemas star e dataflake são elementos encontrados na modelagem dimensional.
II. Os datawarehouses são costumeiramente organizados em torno de uma tabela de fatos e muitas
tabelas de dimensões.
III. Uma tabela de fatos é sempre composta por três tipos de atributos: atributos de medidas,
atributos de dimensões e chaves surrogate de dimensões degeneradas que variam ao longo do
tempo.
Assinale:

a) se somente a afirmativa I estiver correta.
b) se somente a afirmativa II estiver correta.
c) se somente a afirmativa III estiver correta.
d) se somente as afirmativas I e II estiverem corretas.
e) se somente as afirmativas II e III estiverem corretas.
Comentários:
Vamos analisar cada afirmativa:
I – Errado. são os esquemas star e snowflake, não dataflake..
II – Certo. ainda não vimos os DW, mas são justamente neles que armazenamos nossos bancos de
dados dimensionais.
III – Errado. as tabelas fato não contêm atributos de dimensão – esses, assim como as chaves
surrogate, estão presentes na tabela dimensão.

Gabarito: Letra B

## QUESTÕES COMENTADAS

01. (CEBRASPE/MPE RO/2023) No processamento analítico online (OLAP), a operação que
permite exibir os dados de forma detalhada, seja adicionando uma nova dimensão ou buscando
um nível mais específico na hierarquia, é denominada

a) slicing.
b) consolidação.
c) roll up.
d) dicing.
e) drill down.
Comentários:
A técnica destinada a “navegar” a um nível mais detalhado, mais específico na hierarquia, é o drill
down.

Gabarito: Letra E

02. (CEBRASPE/FUB/2023) Julgue o próximo item, a respeito de arquitetura de OLAP, data
warehousing e dados multidimensionais.
Em um ambiente OLAP, a operação de drill down consiste em selecionar valores específicos para
os atributos que são, então, exibidos em cima da tabulação cruzada.
Comentários:
Alternativa sem sentido algum. O Drill Down irá amentar o nível de detalhe, sem nada de
“tabulação cruzada”.

Gabarito: Errado

03. (FGV/ALEMA/2023) Os data warehouse existem para facilitar consultas ocasionais e complexas
com uso intensivo de dados.
Com relação às aplicações e funcionalidades típicas de um data warehouse, avalie se as afirmativas
a seguir são verdadeiras (V) ou falsas (F):

I. No Roll-up, os níveis cada vez menores de detalhes dos dados são revelados.
II. No Drill-down, os dados são expandidos com generalizações cada vez maiores, por
exemplo, de quinzenal para mensal para trimestral para semestral.

III. No Slice-and-dice, as operações de projeção são realizadas nas dimensões do modelo
multidimensional.
As afirmativas são, respectivamente,

a) V – V – V.
b) V – V – F.
c) F – F – V.
d) F – V – V.
e) F – F – F.
Comentários:
Vamos analisar as afirmativas.
I. Verdadeiro. A cada “salto” do Roll-up, estamos diminuindo o nível de detalhe, ou seja,
aumentando o nível de agregação.
II. Falso. A alternativa explica o funcionamento do Roll-up, não do Drill-down.
III. Verdadeiro. O Slice-and-dice combina duas operações (Slice e Dice), fazendo projeções dentro
do modelo. Iremos selecionar um subconjunto dos dados e, dentro dele, fazer uma operação de
corte (slice).
Temos, portanto, V-F-V. A banca, entretanto, apontou como correta a letra C (F-F-V) - acredito
que talvez por alguma interpretação “Getulista” da afirmativa I.

Gabarito da banca: Letra C
Gabarito do professor: Anulada

04. (CEBRASPE/DATAPREV/2023) No que se refere à análise de dados e informações, julgue o
item a seguir.
Em OLAP, um cubo é uma estrutura de dados multidimensionais que permite a análise de dados
a partir de múltiplos enfoques.
Comentários:
Os cubos são as agregações dos dados multidimensionais, quase como uma pilha de tabelas
relacionais, com diversos níveis de agregação diferentes - por exemplo, meses, dias, horas. Nesse
sentido, correta a afirmativa.

Gabarito: Certo

05. (CEBRASPE/DATAPREV/2023) No que se refere à arquitetura e aplicações de data warehouse
com ETL e OLAP, julgue o item a seguir.
Processos OLTP utilizam bancos de dados transacionais como fonte de dados, enquanto OLAP
utilizam Data Warehouse ou Data Mart.
Comentários:
Perfeito! Uma das principais diferenças entre OLTP e OLAP é a base de dados em que eles
trabalham. Enquanto o OLTP envolve transações cotidianas e usa, portanto, os bancos de dados
transacionais, o OLAP utiliza repositórios massivos de dados destinados unicamente à análise,
como Data Warehouses e Data Mart.

Gabarito: Certo

06. (FGV/TJ SE/2023) O Data Warehouse do TJSE armazena um grande cubo de dados contendo
diversas métricas e dimensões, como: DIM_TEMPO, DIM_LOCAL e DIM_PROCESSO. A analista
Julia precisa extrair um subconjunto deste cubo de dados contendo apenas os fatos do primeiro
trimestre de 2023 e processos com a situação “arquivado”.
Para obter esse subconjunto de dados, Julia utilizou uma ferramenta OLAP e executou a seguinte
operação:

a) Dice;
b) Slice;
c) Rotate;
d) Roll up;
e) Drill down.
Comentários:
A operação destinada a obter um subconjunto de dados dentro do cubo, criando “mini cubos”, é
o DICE.

Gabarito: Letra A

07. (FGV/PREF. BH/2023) Assinale a opção que indica a operação OLAP que permite analisar os
dados de um Data Warehouse em níveis de agregação progressivamente mais detalhados, ou de
menor granularidade.

a) Slide.
b) Pivot.

c) Roll-up.
d) Drill-down.
Comentários:
A essa altura da aula, acredito que você já esteja até cansado de ver essa operação caindo, né? O
Drill-down é, de longe, a operação campeã em cobranças - e também o gabarito da nossa questão.

Gabarito: Letra D

08. (CEBRASPE/PETROBRAS/2022) Julgue o item seguinte, a respeito de data warehouse e OLAP.
Em uma aplicação OLAP, a operação de roll-up consiste em passar os dados com detalhamento
maior para um detalhamento menor.
Comentários:
Certo! O Roll-up vai de níveis de maior detalhamento, como dias, para níveis de menor
detalhamento, como meses.

Gabarito: Certo

09. (CEBRASPE/TJ RJ/2021) A respeito dos bancos de dados transacionais (OLTP) e analíticos
(OLAP), assinale a opção correta.

a) Devido às limitações relacionadas à capacidade de consolidar e analisar dados, os bancos

de dados relacionais são considerados uma tecnologia ultrapassada e inapropriada para
aplicações OLAP.
b) Nos sistemas OLTP, para que as operações sejam executadas com precisão e eficiência, o

repositório de dados do banco de dados transacional deve conter somente dados não
normalizados.
c) Ao contrário das aplicações OLTP usuais, que trabalham com dados atuais, as aplicações

OLAP operam com dados históricos.
d) Esquemas lógicos do banco de dados não podem ser mapeados por OLAP, já que esse tipo

de ferramenta exige que o usuário tenha privilégio de leitura nos objetos de banco de
dados.
e) No banco de dados OLAP, uma estrutura em estrela é constituída por uma única dimensão,

a qual é representada por um conjunto de no mínimo duas tabelas.
Comentários:

==5460==

Questão que explora as diferenças entre OLAP e OLTP. Ao passo que OLTP é voltado para
operações transacionais mais cotidianas, aplicado em bancos de dado relacionais, as ferramentas
OLAP são aplicadas em bancos de dado dimensionais visando a descoberta de informações úteis
nos dados, a partir de um catálogo histórico de dados.
Vamos analisar as alternativas:

a) Errado. Existem tecnologias específicas para realizar operações OLAP em bancos de dado

relacionais – o ROLAP. Portanto, é errado afirmar que é uma tecnologia ultrapassada e que
não é apropriada para operações OLAP.
b) Errado. Galera, bancos de dados relacionais e tecnologias OLTP trabalham com dados

altamente normalizados, para aumentar a consistência dos dados.
c) Certo. Certinho a definição, meus amigos. O OLAP é aplicado em cima de data warehouses,

que conta com dados históricos, permitindo fazer análises sobre o negócio.
d) Errado. Em geral, as ferramentas OLAP permitem sim o mapeamento de esquemas lógicos,

realizando as conversões necessárias para gerar uma visão entendível das informações.
e) Errado. O esquema estrela é composto por apenas uma tabela fato, não apenas uma

dimensão.
A correta é, portanto, a letra C.

Gabarito: Letra C

10. (FCC/DPE AM/2018) As ferramentas OLAP compreendem diversas formas de organização dos
dados de um data warehouse. Dentre tais formas de organização, no tipo de ferramenta OLAP
denominado

a) ROLAP, os cubos pré-calculados são armazenados no servidor do ambiente de data

warehouse.
b) DOLAP, as consultas são feitas diretamente no modelo dimensional do data warehouse.
c) MOLAP, as consultas são feitas diretamente no modelo dimensional do data warehouse.
d) DOLAP, os cubos pré-calculados são armazenados no servidor do ambiente de data

warehouse.
e) MOLAP, os cubos pré-calculados são armazenados no servidor do ambiente de data

warehouse.
Comentários:
Vamos analisar alternativa por alternativa.

a) Errado. ROLAP – OLAP Relacional – é usado em bancos de dados relacionais, não em data

warehouses.

b) Errado. DOLAP – OLAP realizado no Desktop – refere-se ao processo OLAP realizado no

próprio processador do usuário.
c) Errado. MOLAP – OLAP Multidimensional – o acesso aos dados é feito o servidor

multidimensional, mas as a manipulações e consultas são feitas em um servidor.
d) Errado. DOLAP, conforme apontamos na afirmativa B, é feito no ambiente do usuário, não

do servidor.
e) Certo. No MOLAP, os cubos são pré-calculados e armazenados no sistema do data

Warehouse.
Correta, portanto, a letra E.

Gabarito: Letra E

## QUESTÕES COMENTADAS

01. (CEBRASPE/CNPq/2024) Acerca de técnicas de modelagem de BI (business intelligence), de
big data e de linguagem de manipulação de dados (DML), julgue o item que se segue.
As tabelas de dimensão na modelagem para BI são estruturas de dados com informações
agregadas e medidas específicas.
02. (FGV/PREF. BH/2024) O modelo multidimensional é composto por diversos elementos, por
exemplo, dimensões, chaves, medidas e tabelas de fatos.
As tabelas de fatos podem ser do tipo

a) star e snowflake.
b) mutivalorate dataset e surrogate.
c) uncommited dataset, snapshot e dynamic dataset.
d) transaction, periodic snapshot e accumulating snapshot.
03. (CEBRASP/INPI/2024) Julgue o seguinte item, relacionados a modelagem de dados.
Em uma modelagem dimensional, os elementos tabelas fato (para os dados que são métricas) e
tabelas dimensões (para os dados descritivos) são opcionais, por exemplo, em um data warehouse.
04. (CEBRASPE/SEPLAN RR/2023) Julgue o próximo item a respeito do conceito de data
warehousing.
O esquema em estrela é uma abordagem adotada por data warehouses relacionais e composta
por tabela de fatos, várias tabelas de dimensão e chaves estrangeiras da tabela de fatos para as
tabelas de dimensão.
05. (FGV/CGE SC/2023) Uma rede de lojas de departamentos planeja configurar uma tabela de
fato (VENDAS) que favoreça a integridade para análise de vendas no mesmo carrinho (na mesma
transação de venda, tal qual a associação conhecida entre fralda e cerveja). A tabela de fato possui
os
seguintes
atributos:
ChaveCalendário(FK),
ChaveLoja(FK),
ChaveProduto(FK),
ChaveCliente(FK), IDTransação, HoraMinVenda, ReaisVendidos e QuantidadeVendida.
Assinale a opção que indica o(s) atributo(s) que deve(m) ser a chave primária da tabela de fato
VENDAS.

a) Apenas IDTransação.
b) Apenas ChaveProduto.
c) Chave composta por ChaveProduto e IDTransação.

d) Chave composta por ChaveCliente e IDTransação.
e) IDTransação, ChaveProduto e ChaveCliente.
06. (CEBRASPE/DP DF/2022) Julgue o item subsecutivo, a respeito da modelagem de bases de
dados multidimensionais.
Em um cubo de dados, os dados são visualizados em somente uma dimensão.
07. (FGV/SEFAZ AM/2022) Assinale a opção que apresenta os tipos de métricas presentes nas
tabelas Fato utilizadas em modelos multidimensionais.

a) Cubo e hipercubo.
b) Estrela e floco de neve.
c) Boolena, numérica e string.
d) Aditiva, não aditiva e semiaditiva.
e) Chave surrogate, dimensão e hierarquia.
08. (CEBRASPE/FUB/2022) Julgue o item subsecutivo, referentes a técnicas de otimização de
consultas SQL e a técnicas de modelagem multidimensional.
Apesar de poupar espaço de armazenamento, a modelagem snowflake é contraindicada para
consultas com alta demanda de processamento em razão do seu potencial para impactar
negativamente os tempos de resposta das consultas.
09. (FGV/TJDFT/2022) Ana foi contratada para desenvolver uma solução de Business Intelligence
para a Justiça. Um dos requisitos analíticos é a quantidade de processos novos
(QtdProcessosNovos) criados por Tribunal por trimestre ao longo dos anos.
Para atender ao requisito analítico, Ana deve usar o modelo multidimensional:

a)

b)

c)

d)

e)

10. (FGV/TJDFT/2022) Observe o seguinte recorte de um relatório extraído do DataJud e um
recorte do respectivo modelo multidimensional.

Quando a relação de hierarquia entre atributos de uma tabela dimensão é normalizada, os
atributos de baixa cardinalidade são migrados para outra tabela, como exemplo: UF e Município.
Quando esse processo é repetido nas hierarquias de todas as dimensões de um modelo
multidimensional, é criada a estrutura:

a) CRISP-DM;
b) Star Schema;
c) Drill Throught;
d) Snowflake Schema;
e) Fact Constellation.
11. (CEBRASPE/MP TCE-SC/2022) A característica principal da modelagem dimensional é a
simplicidade e o seu foco é o cruzamento de variáveis.
12. (CEBRASPE/ISS ARACAJU/2021) A metodologia de modelagem dimensional em que uma
tabela fato está a pelo menos duas tabelas de dimensão é denominada

a) surrogate key.
b) snowflake.
c) star schema.
d) metric scale.
e) smallgrain.
13. (FCC/ALAP/2020) Duas definições de estruturas de dados estão determinadas para um projeto
de datamart de uma loja de varejo: uma delas (tabela A) contém a data da venda, a identificação
do produto vendido, a quantidade vendida do produto no dia e o valor total das vendas do
produto no dia; a outra (tabela B) contém a identificação do produto, nome do produto, marca,
modelo, unidade de medida de peso, largura, altura e profundidade da embalagem.

==5460==

Considerando os conceitos de modelagem multidimensional de data warehouse, as tabelas A e B
são, respectivamente:

a) Query e Réplica
b) Fato e Dimensão
c) Dimensão e Réplica
d) Fato e ETL
e) ETL e Query
14. (FCC/SEFAZ BA/2019) Suponha que uma Auditora Fiscal da área de TI tenha proposto a
seguinte modelagem multidimensional para a SEFAZ−BA:
Fato central: Controle de Receitas e Despesas

A partir do Fato Controle de Receitas e Despesas:
Dimensão Tempo
Dimensão Receitas

Dentro da dimensão Receitas: Dimensão Receitas de Impostos
Dentro da dimensão Receitas: Dimensão Receitas de Taxas
Dimensão Despesas

Dentro da dimensão Despesas: Dimensão Tipo de Despesa
Dimensão Cidade

Dentro da dimensão Cidade: Dimensão NF-e
A modelagem multidimensional proposta

a) é o resultado da decomposição de mais de uma dimensão que possui hierarquias entre seus

membros, caracterizando o modelo snowflake, a partir de um fato central.
b) tem como característica um fato central, a partir do qual estão dispostas as dimensões que

dele participam, em um formato simétrico, característico do modelo star.
c) parte de um elemento central, denominado pivot, a partir do qual são realizadas operações

OLAP como roll up, em que busca-se aumentar o nível de detalhe ou diminuir a
granularidade da consulta.
d) possui um fato central, a partir do qual estão dispostas as dimensões que dele participam

e seus membros, sob uma única estrutura hierárquica, facilitando a inclusão de dados por
digitação nas tabelas do DW.
e) não é um modelo normalizado, por isso evita a redundância de valores textuais em cada

uma das tabelas, representadas pelas dimensões denominadas dimension tables.
15. (FGV/ALERJ/2017) Observe o seguinte Modelo Multidimensional de Dados.

A técnica de modelagem multidimensional utilizada para normalizar a dimensão, movendo os
campos de baixa cardinalidade para tabelas separadas e ligadas à tabela original através de chaves
artificiais, é:

a) Slowly Changing Dimension;
b) Conformed Dimension;
c) Degenerated Dimension;
d) Snowflaked Dimension;
e) Role-Playing Dimension.
16. (FCC/TCM-GO/2015) Quando o modelo de dados multidimensionais começa a ser definido,
elementos básicos de representação precisam ter sido estabelecidos, de modo a se criar um
padrão de modelagem. Considere um modelo em que as dimensões e fatos são representados
em tabelas, podendo haver múltiplas dimensões e múltiplas tabelas de fatos.
Ao modelar cada tabela ...I... devem ser considerados os seguintes pontos:
− A chave primária é composta, sendo um elemento da chave para cada dimensão;
− Cada elemento chave para a dimensão deve ser representado e descrito na tabela ..II..
correspondente (para efetuar a junção);
− A dimensão tempo é sempre representada como parte da chave primária.
Deve haver uma tabela ..III.. para cada dimensão do modelo, contendo
− Uma chave artificial (ou gerada) genérica;
− Uma coluna de descrição genérica para a dimensão;
− Colunas que permitam ..IV.. ;
− Um indicador nível que indica o nível da hierarquia a que se refere a linha da tabela.
As lacunas de I a IV são corretas, e respectivamente, preenchidas com:

a) dimensão − de fatos − de fatos − a junção com as tabelas de fatos.
b) de fatos − de tempo − dimensão − sinalizar a presença de fatos para o período de tempo

indicado na linha.
c) de fatos − dimensão − dimensão − efetuar os filtros.
d) de tempo − dimensão − de fatos − a junção com as tabelas de dimensão.
e) dimensão − de fatos − de tempo − efetuar os filtros.
17. (FGV/CGE SC/2023) Uma rede de lojas de departamentos usa o modelo dimensional estrela
conforme o seguinte diagrama:

Observando o aumento na quantidade de reclamações dos clientes nas lojas, os analistas de BI
resolveram incluir as informações analiticamente úteis da base de reclamações no Data
Warehouse.
Para que a criação da constelação de fatos (também chamada de galáxia) contemple o fato
RECLAMAÇÃO, os analistas devem adicionar

a) uma tabela de fato RECLAMAÇÕES, contendo apenas um atributo descritivo, sem a

necessidade de conectar a qualquer dimensão.
b) uma tabela de fato RECLAMAÇÕES, contendo um atributo descritivo e três chaves

estrangeiras, uma para cada uma das dimensões existentes.
c) uma tabela de fato RECLAMAÇÕES, contendo um atributo descritivo e três atributos que

receberão os valores das chaves estrangeiras de Loja, Cliente e RegistroReclamação
diretamente do banco de dados operacional.
d) três tabelas de dimensão (CalendárioReclamação, ClienteReclamação e LojaReclamação)

mais uma tabela de fato RECLAMAÇÕES, contendo um atributo descritivo e três chaves
estrangeiras, uma para cada uma das dimensões recém-criadas.
e) E duas tabelas de dimensão (ClienteReclamação e LojaReclamação) mais uma tabela de fato

RECLAMAÇÕES, contendo um atributo descritivo e três chaves estrangeiras, duas para
cada uma das dimensões recém-criadas e uma para referenciar o registro da reclamação
diretamente do banco de dados operacional.
18. (VUNESP/PREF. MARÍLIA/2023) Considere o seguinte modelo multidimensional de dados,
normalmente utilizado no projeto de um data warehouse, composto por tabelas dimensão e fato:

Por esse modelo, pode-se afirmar que

a) há três tabelas fato.
b) há três tabelas dimensão.
c) há quatro tabelas dimensão.
d) não há tabelas fato.
e) não há tabelas dimensão.
19. (VUNESP/ISS SP/2023) A modelagem multidimensional de dados é frequentemente utilizada
para o projeto e a implementação de sistemas de Data Warehouse. Tal forma de modelagem é
composta por dois tipos de tabelas, denominadas de tabelas

a) fato e dimensão.
b) simples e compostas.
c) virtual e completa.
d) concatenadas e analíticas.
e) granuladas e completas.
20. (FGV/TJ SE/2023) Observe o profile das seguintes fontes de dados do Data Warehouse
JusDW.
FONTE DE DADOS 1: Tabela TB_PROC
Atributo: ID_P
Descrição: Identificador único da tabela TB_PROC
Quantidade de Registros: 3.250
Valor Inicial: 1
Valor Final: 3.250
Valores Nulos: 0
FONTE DE DADOS 2: Tabela TAB_P
Atributo: ID_PROC
Descrição: Identificador único da tabela TAB_P
Quantidade de Registros: 250
Valor Inicial: 1
Valor Final: 250
Valores Nulos: 0
Para integrar e armazenar os 3.500 registros das Fontes de Dados 1 e 2 na Dimensão DIM_PROC
do JusDW, identificando unicamente cada novo registro criado da DIM_PROC, é necessário criar
uma:

a) Foreign key;
b) Natural key;
c) Alternate key;
d) Surrogate key;
e) Candidate key.
Utilize a estrutura abaixo, relativa a uma empresa de comércio que tem várias lojas físicas em uma
cidade, e que foi utilizada a modelagem dimensional para criar a tabela fato de vendas da
empresa, para as quatro próximas questões.

Chave da loja (FK)
Chave do produto (FK)
Chave da data (FK)
Quantidade de vendas diária
Quantidade de vendas em moeda real
Quantidade de vendas em moeda euro
Lista dos produtos vendidos por venda
Nomes das lojas
21. (CEBRASPE/FUNPRESP-EXE/2022) Na modelagem dimensional, a tabela fato deverá refletir o
maior número de informações para os negócios, sejam números ou não.
22. (CEBRASPE/FUNPRESP-EXE/2022) Em uma modelagem dimensional, o campo Nomes das
lojas poderá ser utilizado em uma tabela fato ou na tabela dimensão.
23. (CEBRASPE/FUNPRESP-EXE/2022) Chave do produto é uma chave estrangeira (FK – foreign
key); é possível que exista um campo desse tipo em outra tabela, como chave primária (PK –
primary key).
24. (CEBRASPE/FUNPRESP-EXE/2022) Uma tabela fato como a mostrada pode apresentar uma
relação de muitos para muitos em modelos dimensionais.
25. (FGV/SENADO/2012) Com relação ao tema Modelagem Multidimensional, analise as
afirmativas a seguir.

I. Os esquemas star e dataflake são elementos encontrados na modelagem dimensional.
II. Os datawarehouses são costumeiramente organizados em torno de uma tabela de fatos
e muitas tabelas de dimensões.
III. Uma tabela de fatos é sempre composta por três tipos de atributos: atributos de
medidas, atributos de dimensões e chaves surrogate de dimensões degeneradas que
variam ao longo do tempo.
Assinale:

a) se somente a afirmativa I estiver correta.
b) se somente a afirmativa II estiver correta.
c) se somente a afirmativa III estiver correta.
d) se somente as afirmativas I e II estiverem corretas.
e) se somente as afirmativas II e III estiverem corretas.

## GABARITO

1. Errado
2. Letra D
3. Errado
4. Errado
5. Letra C
6. Errado
7. Letra D
8. Certo
9. Letra B

10. Letra D
11. Certo
12. Letra C
13. Letra B
14. Letra A
15. Letra D
16. Letra C
17. Letra B
18. Letra B

19. Letra A
20. Letra D
21. Errado
22. Errado
23. Certo
24. Certo
25. Letra B

## LISTA DE QUESTÕES

01. (CEBRASPE/MPE RO/2023) No processamento analítico online (OLAP), a operação que
permite exibir os dados de forma detalhada, seja adicionando uma nova dimensão ou buscando
um nível mais específico na hierarquia, é denominada

a) slicing.
b) consolidação.
c) roll up.
d) dicing.
e) drill down.
02. (CEBRASPE/FUB/2023) Julgue o próximo item, a respeito de arquitetura de OLAP, data
warehousing e dados multidimensionais.
Em um ambiente OLAP, a operação de drill down consiste em selecionar valores específicos para
os atributos que são, então, exibidos em cima da tabulação cruzada.
03. (FGV/ALEMA/2023) Os data warehouse existem para facilitar consultas ocasionais e complexas
com uso intensivo de dados.
Com relação às aplicações e funcionalidades típicas de um data warehouse, avalie se as afirmativas
a seguir são verdadeiras (V) ou falsas (F):

I. No Roll-up, os níveis cada vez menores de detalhes dos dados são revelados.
II. No Drill-down, os dados são expandidos com generalizações cada vez maiores, por
exemplo, de quinzenal para mensal para trimestral para semestral.
III. No Slice-and-dice, as operações de projeção são realizadas nas dimensões do modelo
multidimensional.
As afirmativas são, respectivamente,

a) V – V – V.
b) V – V – F.
c) F – F – V.
d) F – V – V.
e) F – F – F.
04. (CEBRASPE/DATAPREV/2023) No que se refere à análise de dados e informações, julgue o
item a seguir.

Em OLAP, um cubo é uma estrutura de dados multidimensionais que permite a análise de dados
a partir de múltiplos enfoques.
05. (CEBRASPE/DATAPREV/2023) No que se refere à arquitetura e aplicações de data warehouse
com ETL e OLAP, julgue o item a seguir.
Processos OLTP utilizam bancos de dados transacionais como fonte de dados, enquanto OLAP
utilizam Data Warehouse ou Data Mart.
06. (FGV/TJ SE/2023) O Data Warehouse do TJSE armazena um grande cubo de dados contendo
diversas métricas e dimensões, como: DIM_TEMPO, DIM_LOCAL e DIM_PROCESSO. A analista
Julia precisa extrair um subconjunto deste cubo de dados contendo apenas os fatos do primeiro
trimestre de 2023 e processos com a situação “arquivado”.
Para obter esse subconjunto de dados, Julia utilizou uma ferramenta OLAP e executou a seguinte
operação:

a) Dice;
b) Slice;
c) Rotate;
d) Roll up;
e) Drill down.
07. (FGV/PREF. BH/2023) Assinale a opção que indica a operação OLAP que permite analisar os
dados de um Data Warehouse em níveis de agregação progressivamente mais detalhados, ou de
menor granularidade.

a) Slide.
b) Pivot.
c) Roll-up.
d) Drill-down.
08. (CEBRASPE/PETROBRAS/2022) Julgue o item seguinte, a respeito de data warehouse e OLAP.
Em uma aplicação OLAP, a operação de roll-up consiste em passar os dados com detalhamento
maior para um detalhamento menor.
09. (CEBRASPE/TJ RJ/2021) A respeito dos bancos de dados transacionais (OLTP) e analíticos
(OLAP), assinale a opção correta.

==5460==

a) Devido às limitações relacionadas à capacidade de consolidar e analisar dados, os bancos

de dados relacionais são considerados uma tecnologia ultrapassada e inapropriada para
aplicações OLAP.
b) Nos sistemas OLTP, para que as operações sejam executadas com precisão e eficiência, o

repositório de dados do banco de dados transacional deve conter somente dados não
normalizados.
c) Ao contrário das aplicações OLTP usuais, que trabalham com dados atuais, as aplicações

OLAP operam com dados históricos.
d) Esquemas lógicos do banco de dados não podem ser mapeados por OLAP, já que esse tipo

de ferramenta exige que o usuário tenha privilégio de leitura nos objetos de banco de
dados.
e) No banco de dados OLAP, uma estrutura em estrela é constituída por uma única dimensão,

a qual é representada por um conjunto de no mínimo duas tabelas.
10. (FCC/DPE AM/2018) As ferramentas OLAP compreendem diversas formas de organização dos
dados de um data warehouse. Dentre tais formas de organização, no tipo de ferramenta OLAP
denominado

a) ROLAP, os cubos pré-calculados são armazenados no servidor do ambiente de data

warehouse.
b) DOLAP, as consultas são feitas diretamente no modelo dimensional do data warehouse.
c) MOLAP, as consultas são feitas diretamente no modelo dimensional do data warehouse.
d) DOLAP, os cubos pré-calculados são armazenados no servidor do ambiente de data

warehouse.
e) MOLAP, os cubos pré-calculados são armazenados no servidor do ambiente de data

warehouse.

## GABARITO

1. Letra E
2. Errado
3. Letra C
4. Certo
5. Certo

6. Letra A
7. Letra D
8. Certo
9. Letra C
10. Letra E
