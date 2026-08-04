# Banco de Dados - Aula 08

## Índice

1) Apresentação - Prof. Lucas Ianni
3

2) 10.0 Data Mining - Teoria
4

3) 10.0 Data Mining - Questões
42

4) 10.1 Text Mining - Teoria
77

## DATA MINING

## Introdução

Há quem diga que estamos vivendo a “era dos dados” refletida por uma transformação
significativa na sociedade, impulsionada pelo volume, velocidade e variedade de dados gerados
diariamente em um mundo digital.

É natural imaginar que todo esse volume de dados possa conter informações valiosas, ainda
ocultas, que podem ser exploradas para gerar insights. No contexto dos negócios, esses
conhecimentos representam uma grande oportunidade, pois podem oferecer vantagens
competitivas significativas.

Pois bem, na aula de hoje, exploraremos a "Mineração de Dados" (Data Mining), um dos
conteúdos mais práticos do nosso curso. Isso porque essa disciplina nos capacita a aplicar
técnicas de aprendizado de máquina, estatística e banco de dados para garimpar padrões nos
dados visando resolver problemas reais enfrentados pelas organizações em seu dia a dia.

## Data Mining e seu contexto teórico

Data Mining e Inteligência Artificial

De forma resumida, a Inteligência Artificial se trata do campo de estudo que visa permitir que
máquinas apresentem inteligência humana.

Vejam que se trata de um termo bem abrangente, que se subdivide em diversos campos de
estudos, já que há diferentes abordagens na ciência para tentar construir “inteligência” em
sistemas computacionais.

Assim, é normal que estudos nessa área que nunca apresentaram resultados práticos ao longo
dos anos continuem sendo pesquisados no âmbito acadêmico. Já outros, por demonstrarem
grande aplicabilidade, se tornaram praticamente uma representação do campo para o grande
público, como é o caso do Aprendizado de Máquina.

Continuando, a Mineração de Dados se trata de um campo de estudo mais prático, em que
utilizamos conceitos de diversas especialidades, como o Aprendizado de Máquina, Banco de
Dados e Estatística, por exemplo, para conseguir extrair conhecimento de grandes conjuntos de
dados reais, com o objetivo de transformá-los em conhecimento aplicável em áreas como
negócios, ciência e saúde.

Assim, em Data Mining, regra geral, queremos resolver problemas de negócios a partir da análise
de suas informações já armazenadas em bancos de dados, utilizando-se de diversas técnicas de
diversas áreas do conhecimento, como as fornecidas pela Inteligência Artificial.

(CEBRASPE (CESPE)/Tecno P1 (CTI)/CTI/Indústria 4.0 e Governo Digital/Sistemas Ciberfísicos e
Cidades Inteligentes/2024) Aprendizado de máquina e mineração de dados são termos idênticos
em relação aos seus objetivos e funções, pois ambos lidam com algoritmos de inteligência
artificial para padrões em grandes conjuntos de dados em busca de conhecimento.

Comentários:

No Aprendizado de Máquina estamos focados no desenvolvimento de modelos que possam
fazer predições com base em dados. Ou seja, envolve gerar modelos que "aprendem" a partir de
exemplos para generalizar o conhecimento aprendido.

Já a Mineração de Dados é focada em descobrir padrões desconhecidos nos dados para gerar
conhecimento. Vejam então que objetiva a extração de informações úteis e práticas, geralmente
no contexto de aplicação direta, como negócios, ciência ou saúde. Assim, utiliza-se de diversos
campos de estudo, como o próprio Aprendizado de Máquinas para resolver problemas com
ênfase na exploração de dados.

Gabarito: Errado

Data Mining e Knowledge Discovery in Databases

A relação entre Knowledge Discovery in Databases - KDD - (Descoberta de Conhecimento em
Bases de Dados) e Data Mining é vista de duas formas distintas na literatura.

Alguns autores consideram o KDD como o processo completo de descoberta de conhecimento
em dados armazenados, sendo a Mineração de Dados apenas uma das suas etapas.

Assim, aqui consideramos que a Descoberta de Conhecimento em Banco de Dados consiste no
processo que parte de dados brutos para a informação relevante, sendo que o Data Mining se
trata da etapa, dentro desse processo, em que aplicamos algoritmos para extração de padrões
dos dados.

Porém, em outra parte da literatura, os dois termos são usados de forma intercambiável,
referindo-se ao processo geral de extração de conhecimento. Então, não estranhem se os termos
forem tratados como sinônimos em algumas questões.

(CEBRASPE (CESPE)/ACE (TCE RJ)/TCE RJ/Controle Externo/Controle Externo/2021) A
descoberta de conhecimento em bases de dados, ou KDD (knowledge-discovery), é a etapa
principal do processo de mineração de dados.

Comentários:

Seja qual for o conceito adotado, a questão erra. Ou consideramos que a mineração de dados é
uma das etapas principais dentro do processo de KDD, ou que se tratam da mesma coisa. Mas
nunca que o Data Mining engloba o KDD.

Gabarito: Errado

De qualquer forma, devemos saber alguns conceitos básicos associados ao KDD.

Primeiramente devemos saber que se trata de um processo não trivial, isto é, para descobrir
conhecimento não basta realizarmos operações simples, como calcular agregações como médias
ou somas. O que se exige, na realidade, são operações de busca e inferência avançadas para
identificar padrões escondidos nos dados.

Também é necessário que os padrões encontrados sejam válidos, ou seja, devem ser consistentes
e possíveis de se aplicar a novos dados, além dos analisados inicialmente.

Além disso, os padrões devem oferecer insights não óbvios ou serem desconhecidos
previamente. Ou seja, devem ser novos. Então, padrões triviais como “no inverno se vende mais
casaco” não atendem ao critério da novidade.

É claro que o conhecimento extraído deve ter utilidade prática, seja para melhorar processos,
tomar decisões ou resolver problemas. Em outras palavras, devem ser potencialmente úteis,
porque padrões sem aplicação prática, que não trazem benefícios, não são valiosos no contexto
de KDD.

==5460==

Finalmente, os resultados devem ser apresentados de forma que possam ser interpretados por
humanos, especialmente por tomadores de decisão. Assim sendo, devem ser compreensíveis,
devendo ser evitadas representações complexas.

(CEBRASPE (CESPE)/Ana TI (DATAPREV)/DATAPREV/Inteligência da Informação/2006) KDD é o
processo não-trivial de identificação de padrões em um conjunto de dados. Tais padrões devem
possuir as seguintes características: validade (aplicarem-se a novos dados com algum grau de
certeza ou probabilidade), novidade (não terem sido detectados por nenhuma outra
abordagem), utilidade potencial (poderem ser utilizados para a tomada de decisões úteis,
medidas por alguma função) e serem assimiláveis (ao conhecimento humano).

Comentários:

KDD é o processo não trivial de identificação de padrões úteis, válidos e compreensíveis em
grandes conjuntos de dados, sendo que tem como características principais:

Validade: os padrões descobertos devem ser estatisticamente válidos e aplicáveis a novos dados,
apresentando um certo grau de certeza ou probabilidade.

Não obviedade: os padrões devem ser novos ou surpreendentes, ou seja, algo que ainda não
tenha sido detectado por abordagens anteriores ou que traga uma perspectiva inovadora sobre
os dados analisados.

Utilidade: os padrões identificados devem ter valor prático, permitindo que sejam aplicados para
resolver problemas reais ou apoiar a tomada de decisões.

Compreensibilidade: os padrões devem ser interpretáveis e assimiláveis para humanos, para
poderem ser integrados ao conhecimento existente.

Gabarito: Certo

Vejam que temos conceitos que podem ser avaliados de forma objetiva, através de métricas
quantitativas, como, por exemplo, definir que a utilidade do padrão é medida pelo seu ganho
financeiro, enquanto que em outros a avaliação está embasada em um forte caráter subjetivo,
como, por exemplo, a novidade, que depende do nível de conhecimento prévio do usuário.

Data Mining e Data Science

Academicamente atribui-se ao termo Data Science (ou Ciência de Dados) como um campo
unificador entre as diversas ciências que buscam compreensão a partir da análise de grandes
volumes de dados.

Ou seja, na academia, a expressão “Ciência de Dados” se trata de um termo agregador entre
diversas áreas de estudo como estatística, machine learning, data mining, análise de dados etc.,
além de suas técnicas relacionadas.

Já a indústria de software vê o termo Data Science como um termo genérico que pode ser
utilizado como sinônimo de ferramentas de Business Analytics (ferramentas de análise de dados
para tomada de decisão em negócios), Business Intelligence (ferramentas de análise de dados
para gerar inteligência empresarial) e Modelagem Preditiva (uso de dados históricos para prever
tendências futuras), por exemplo.

Ou seja, na indústria, a palavra chave “Ciência de Dados” é mais utilizada como um “rebranding”
glamuroso de tipos de ferramentas práticas tradicionais.

Data Mining e Análise de Dados

Na análise de dados, como o próprio nome revela, queremos analisar os dados para obter
informações úteis. Dessa forma, a análise de dados engloba todo conjunto de técnicas que nos
apoiam nessa tarefa.

Pois bem, saibam que há alguns tipos de análise que podemos querer realizar.

A mais simples delas é a análise descritiva, em que utilizamos os dados correntes e históricos
para identificarmos padrões intrínsecos. Ou seja, o objetivo principal aqui é explorar, entender e
descrever os dados disponíveis. Usualmente esse tipo de análise visa responder perguntas do
tipo “o que aconteceu?”.

Por exemplo, um modelo descritivo poderia informar a um dono de negócio que “neste natal
vendeu-se mais vestuário do que o do ano passado”.

Agora na análise diagnóstica estamos interessados em tentar entender os motivos, isto é, as
causas, que levaram o evento a ter ocorrido. Usualmente esse tipo de análise visa responder
perguntas do tipo “por que aconteceu?”.

Por exemplo, um modelo diagnóstico poderia informar a um dono de negócio que “neste natal
vendeu-se mais vestuário que o do ano passado porque a coleção utilizou materiais de melhor
qualidade”.

Continuando, na análise preditiva estamos interessados em tentar prever cenários futuros sobre
o evento para apoiar tomadas de decisão. Usualmente esse tipo de análise visa responder
perguntas do tipo “o que acontecerá?”.

Por exemplo, um modelo preditivo poderia informar a um dono de negócio que “no próximo
natal podemos vender mais vestuário se aumentarmos mais a qualidade dos materiais” para que
embase melhor sua decisão de aumentar ou não a qualidade dos materiais.

Uma dessas técnicas de análise de dados preditiva é justamente o Data Mining, a qual foca na
descoberta de padrões e construção de modelos preditivos.

(CEBRASPE (CESPE)/Tecno P1 (CTI)/CTI/Indústria 4.0 e Governo Digital/Sistemas Ciberfísicos e
Cidades Inteligentes/2024) A mineração de dados pode ser entendida como um subconjunto da
análise de dados, pois é usada para descobrir padrões ocultos em conjuntos de dados brutos,
enquanto o enfoque da análise de dados se encontra no exame dos conjuntos de dados para a
obtenção de conclusões precisas.

Comentários:

Usamos a análise de dados quando queremos examinar os dados para extrair informações úteis
que ajudem na tomada de decisões ou na solução de problemas.

Assim sendo, se trata de um termo genérico que engloba diversas abordagens, como o Data
Mining., por exemplo

De qualquer forma, devemos saber que a mineração de dados é uma ferramenta poderosa
dentro da análise de dados, sendo especialmente útil para explorar grandes volumes de dados
em busca de padrões que possam passar despercebidos.

Gabarito: Certo

Finalmente, na análise prescritiva queremos sugerir a melhor ação possível a ser tomada em uma
situação específica, considerando todos os fatores relevantes. Usualmente esse tipo de análise
visa responder perguntas do tipo “o que deve ser feito?”.

Por exemplo, um modelo prescritivo poderia estabelecer que “deve-se aumentar a qualidade dos
materiais” ao empresário.

Dessa forma, auxilia na tomada de decisão de forma objetiva e informada em dados,
considerando impactos de diferentes decisões antes que sejam implementadas.

(CEBRASPE (CESPE)/Tecno P2 (CTI)/CTI/Tecnologias Habilitadoras/Inteligência Artificial e Ciência
de Dados/2024) A análise descritiva tem como objetivo responder à pergunta ‘o que
aconteceu?’, ao passo que a análise diagnóstica visa responder à questão ‘por que isso
aconteceu?’.

Comentários:

Na análise descritiva queremos responder à pergunta "o que aconteceu?" para fornecer uma
visão dos dados, descrevendo os eventos passados.

Já na análise diagnóstica queremos responder à pergunta "por que isso aconteceu?" para
investigar as causas que contribuíram para o que foi observado na análise descritiva.

Gabarito: Certo

(CEBRASPE (CESPE)/Ana CT I (CNPq)/CNPq/Gestão de Dados Corporativos/2024) A análise
descritiva envolve a utilização de técnicas estatísticas e algoritmos para fazer previsões ou
estimativas sobre eventos futuros com base em dados históricos.

Comentários:

É a análise preditiva que envolve a utilização de técnicas estatísticas e algoritmos para fazer
previsões ou estimativas sobre eventos futuros com base em dados históricos.

Gabarito: Errado

Data Mining e Business intelligence

Business Intelligence (Inteligência de negócios) - BI - é um termo muito abrangente que engloba
todo conjunto de estratégias, metodologias e tecnologias utilizadas por empresas para analisar
dados e gerenciar informações.

Vejam então que, de todo ecossistema que o termo BI engloba, a Mineração de Dados tem um
papel central, já que identifica padrões, tendências e relações ocultas nos dados.

Pois bem, a arquitetura básica para se implementar um ambiente de BI na prática - e,
consequentemente, um tipo de ambiente que possibilite a Mineração de Dados - envolve a
construção de Data Warehouses (ou Armazém de Dados).

Em termos simples, um Data Warehouse é um repositório que agrega informações de diversas
fontes, permitindo uma visão abrangente dos dados da organização.

(Instituto ACCESS/Red Lg (Mangaratiba)/CM Mangaratiba/2020) No que diz respeito à Gestão e
à Tecnologia da Informação e do Conhecimento, dois conceitos são caracterizados a seguir.

I. Está associado à mineração de dados e consiste no uso de processos para explorar grandes
quantidades de dados digitais à procura de padrões consistentes, como regras de associação ou
sequências temporais, com o objetivo de descobrir relacionamentos sistemáticos entre variáveis;
detectando, assim, novos subconjuntos de dados.

II. Está associado a um armazém de dados e consiste basicamente de um depósito de dados
digitais para armazenar informações corporativas detalhadas; contendo um agrupamento
inteligente de dados de uma mesma fonte.

Os conceitos caracterizados, em I e em II, são denominados, respectivamente,

a) Data Mining e Data Warehouse.

b) Business Intelligence e Data Mining.

c) Data Mining e Business Intelligence.

d) Business Intelligence e Data Warehouse.

e) Data Warehouse e Data Mining.

Comentários:

Item I: Descreve o processo de Data Mining, que envolve a exploração de grandes volumes de
dados para identificar padrões, associações e tendências, com o objetivo de obter informações
relevantes e insights.

Item II: Refere-se a um Data Warehouse, que é um repositório de dados estruturado para
armazenar e organizar informações provenientes de várias fontes, permitindo análises e tomadas
de decisão corporativas.

Gabarito: A

Saibam que, para conseguirmos isso, devemos efetuar algumas manipulações desejadas pelo
processo de Data Mining, como limpeza, transformação e integração dos dados das múltiplas
fontes. É por isso, então, que os Data Warehouses fornecem um ambiente propício para
realizarmos a Mineração de Dados.

Embora se trate de uma aula de Data Mining (e não de Business intelligence),
precisamos saber de alguns conceitos básicos de Data Warehouses:

1. Orientado por Assuntos (Subject-Oriented): o data warehouse é organizado
em torno de assuntos específicos que são relevantes para a empresa, como
clientes, fornecedores, produtos ou vendas, por exemplo.

2. Integrado (Integrated): o data warehouse é construído pela integração de
múltiplas fontes heterogêneas de dados, como bancos de dados operacionais,
arquivos e dados externos, por exemplo.

3. Variante no Tempo (Time-Variant): os dados armazenados no data warehouse
abrangem um horizonte temporal significativo (geralmente de 5 a 10 anos),
permitindo análises históricas.

4. Não Volátil (Nonvolatile): no data warehouse armazenamos uma cópia
separada dos dados operacionais. Sendo assim, não sofrem alterações
frequentes, como atualizações ou exclusões.

(IDCAP/AnaGIGE (IDR Maricá)/IDR Maricá/Tecnologia da Informação/2023) Assinale a alternativa
incorreta no que diz respeito aos conceitos de Data Warehouse e Data Mining:

a) O Machine Learning tem uma abordagem estatística.

b) Data Warehouse é uma coleção de dados orientados por assuntos, integrados, variáveis com
o tempo e não voláteis, para dar suporte ao processo de tomada de decisão.

c) Os dados são, em geral, atualizados registro a registro, em múltiplas transações.

d) A mineração de dados não é aplicada em tempo real, é sempre sobre um conjunto de dados
relacionado a um período.

e) No Data Warehouse os dados só são visualizados na área de consulta, ou seja, após o
tratamento e armazenamento adequado.

Comentários:

a) Correta. Há algoritmos de Machine Learning (ML) que se baseia em métodos estatísticos para
identificar padrões e construir modelos preditivos. Nesse tipo de modelo utilizamos técnicas
como regressão, classificação, clustering e métodos probabilísticos para aprender com os dados
e fazer previsões ou tomar decisões.

b) Correta. Um Data Warehouse é projetado para consolidar dados de diferentes fontes de forma
organizada e integrada, orientado por temas ou áreas (como vendas, finanças, clientes). Ele é não
volátil, o que significa que os dados, uma vez armazenados, não são alterados, permitindo uma
análise histórica consistente. Além disso, armazena dados ao longo do tempo para permitir
análises temporais e suporta a tomada de decisões estratégicas corporativas.

c) Errada. A atualização de dados registro a registro, em múltiplas transações, caracteriza sistemas
de processamento transacional, como os bancos de dados operacionais. Em um Data
Warehouse, a atualização ocorre em lotes (batch), em processos previamente programados de
ETL (Extract, Transform, Load).

d) Correta. Alternativa complicada. Acredito que o examinador quis ressaltar que a aplicação de
algoritmos ou a construção de modelos em Machine Learning necessita de dados históricos, não
bastando os dados que estão ocorrendo em tempo real.

e) Correta. No Data Warehouse, os dados são consolidados de maneira a garantir a integridade e
a qualidade antes de serem acessados pelos usuários finais ou ferramentas de BI (Business
Intelligence), como OLAP ou Data Mining. .

Gabarito: C

Continuando, existe uma tecnologia muito importante que consulta os dados do Data Warehouse
para permitir análises significativas pela gestão, o OLAP (Online Analytical Processing).

Em resumo, ferramentas OLAP nos permitem analisar dados do Data Warehouse de maneira
interativa, permitindo que os usuários explorem informações a partir de diferentes perspectivas.

Percebam que ferramentas OLAP e de Data Mining apresentam funções complementares, pois
desempenham funções diferentes no processo de análise e descoberta de informações.

Enquanto OLAP tem a intenção de fornecer uma visão organizada de dados existentes, Data
Mining procura ir além de como os dados se apresentam, descobrindo padrões ocultos e criando
previsões para apoiar decisões estratégicas. Juntas, essas ferramentas maximizam o valor dos
dados em processos de inteligência de negócios.

(FCC/Ana TI (SANASA)/SANASA/Análise e Desenvolvimento/2019)

As ferramentas de Exploração identificadas como Ferramenta 1 e Ferramenta 2 na imagem,
dentro do contexto a que se aplicam, são, dentre outras,

a) Staging Area e Data Mining.

b) OLAP e Data Mining.

c) Snowflake e Staging Area.

d) OLAP e Near Line Storage.

e) Near Line Storage e Star Schema.

Comentários:

OLAP (Online Analytical Processing): é uma ferramenta fundamental para a exploração de dados
em um Data Warehouse, visto que suporta consultas complexas e análises interativas.

Data Mining: complementa o OLAP ao identificar padrões e correlações nos dados históricos
armazenados no Data Warehouse. Enquanto o OLAP se concentra na navegação e exploração
estruturada dos dados, o Data Mining busca insights mais profundos e preditivos, como regras de
associação e modelos preditivos.

Gabarito: B

## Data Mining

Podemos adotar como uma definição de Data Mining a seguinte:

Data Mining é um processo usado para extrair e analisar informações que
revelam padrões ou tendências estratégicas do negócio, em grande volume

de dados, que auxiliam na tomada de decisões.

Porém, não há uma definição definitiva sobre o termo, uma vez que cada autor prefere realçar
determinado aspecto desse conceito quando trata do tema.

Assim, acredito ser mais proveitoso resumirmos as características mais comuns associadas à
Mineração de Dados para que, na hora da prova, estejamos preparados para analisar as diversas
formas que sua cobrança pode ocorrer.

Conceito
Explicação

Busca por
conhecimento

Com o Data mining conseguimos explorar grandes volumes de dados
visando revelar conhecimentos previamente desconhecidos.

Conceito
Explicação

Busca por
informações ocultas

Com o Data Mining queremos revelar conhecimento oculto, utilizando
de técnicas complexas para revelar o que não se sabe pelos
detentores dos dados, possibilitando análises avançadas sobre as
informações.
Assim, não queremos obter informações diretas, como aquelas
obtidas por meras consultas no banco de dados, por exemplo.

Busca por padrões

Quando buscamos por padrões nos dados, não queremos apenas
identificar relacionamentos entre eles, mas também anomalias e
correlações que possam gerar insights para a gestão.

Open-ended
(ou “aberto”)

Na Mineração de Dados não temos necessariamente um ponto final
ou um objetivo completamente fixo e pré-definido. Isso significa que
o processo pode levar a descobertas inesperadas, além das hipóteses
iniciais.

Conhecimento

indutivo

Com o Data Mining queremos descobrir padrões gerais a partir de
observações específicas de nosso banco de dados. Ou seja, a partir
de algumas ocorrências, queremos generalizar a ocorrência de
determinados eventos.

Modelos preditivos

É mais frequente utilizarmos modelos preditivos para Mineração de
Dados, isto é, modelos que preveem resultados futuros com base em
dados históricos. Assim, podemos antecipar tendências estratégicas
do negócio.

Tipos de dados

No Data Mining trabalhamos com grandes conjuntos de dados de alta
complexidade, isto é, além de apresentarem um volume muito
grande, também apresentam alta dimensionalidade (muitos atributos)
e alta heterogeneidade (tipos muitos diferentes).

Apoio aos tomadores

de decisão

O fim último da Mineração de Dados acaba sendo apoiar decisões
estratégicas pela alta gestão.

Escalabilidade

Nossos sistemas de Data Mining devem ser escaláveis, isto é, capazes
de lidar com o aumento do volume de dados ou da complexidade da
tarefa. Isso porque é inerente à atividade de Data Mining trabalhar
com cargas elevadas de dados, que provavelmente aumentarão com
o tempo.

Eficiência
computacional

É importante que o processo de Data Mining ocorra com eficiência
computacional, visto que de nada vale termos algoritmos de extração
de informações perfeitos que não podem ser usados na prática por
não conseguirem ser executados em tempo hábil.

Conceito
Explicação

Analítico
A Mineração de Dados trata-se de um processo “passo a passo” que
usa dados para responder perguntas do negócio.

(FCC/Aud Fisc (SEFAZ BA)/SEFAZ BA/Administração Tributária/2019) Além dos indicadores
reativos que, uma vez implantados, automaticamente detectam as ocorrências com base nos
indicadores mapeados, existem também os controles proativos, que requerem que os gestores
os promovam periodicamente. Uma das técnicas que os gestores podem usar requer que sejam
selecionadas, exploradas e modeladas grandes quantidades de dados para revelar padrões,
tendências e relações que podem ajudar a identificar casos de fraude e corrupção. Relações
ocultas entre pessoas, entidades e eventos são identificadas e as relações suspeitas podem ser
encaminhadas para apuração específica. As anomalias apontadas por esse tipo de técnica não
necessariamente indicam a ocorrência de fraude e corrupção, mas eventos singulares que
merecem avaliação individualizada para a exclusão da possibilidade de fraude e corrupção e, no
caso da não exclusão, uma investigação.

(Adaptado de: TCU – Tribunal de Contas da União)

O texto se refere à técnica de

a) data mart.

b) data warehousing.

c) big data.

d) OLAP.

e) data mining.

Comentários:

A mineração de dados (data mining) é a técnica voltada para exploração de grandes volumes de
dados, descobrir padrões e relações que não são imediatamente visíveis. Vale saber que com isso
conseguimos identificar eventos atípicos (outliers) ou padrões suspeitos que exigem uma
investigação mais detalhada.

Gabarito: E

(AVANÇASP/Pref Americana/Administração de Dados/2023) No que se refere ao data mining,
assinale a alternativa incorreta:

a) É um processo em que a tecnologia é empregada para localizar conexões, correlações ou
anomalias em uma grande quantidade de dados.

b) No âmbito empresarial, o data mining gera insights que resultam em vantagens competitivas
para a corporação.

c) Quanto mais sofisticado um algoritmo, mais ele depende de um usuário humano.

d) As decisões tomadas pelos gestores têm maior probabilidade de darem certo.

e) Permite encontrar oportunidades de melhoria em diversas áreas do negócio.

Comentários:

a) Correta. O objetivo central do data mining: identificar padrões, correlações e anomalias em
grandes volumes de dados que não são imediatamente perceptíveis.

b) Correta. O data mining é utilizado para extrair informações estratégicas que ajudam as
empresas a tomar decisões melhores, melhorando seu desempenho e obtendo vantagens
competitivas.

c) Errada. Na verdade, quanto mais sofisticado o algoritmo, menos ele tende a depender da
intervenção humana direta. Isso porque algoritmos avançados (como os de aprendizado de
máquina) automatizam a descoberta de padrões, minimizando a necessidade de interação
humana durante seu processo de aprendizado.

d) Correta. O data mining fornece insights baseados em dados concretos, aumentando a
precisão e a probabilidade de sucesso das decisões gerenciais.

e) Correta. O data mining é usado em várias áreas (vendas, marketing, operações, finanças) para
identificar oportunidades de melhoria e eficiência.

Gabarito: C

Métodos de Data Mining

A depender das necessidades dos dados em que estamos trabalhando, podemos especializar o
Data Mining em métodos específicos para obter resultados mais proveitosos.

Por exemplo, se nossas fontes de informações que queremos garimpar estão em textos, como
páginas da web, livros digitais, e-mails, por exemplo, precisamos realizar etapas especiais para
transformar esse conteúdo textual desestruturado em dados estruturados que possam ser
manipulados.

Ou seja, pode ser conveniente aplicarmos técnicas de processamento de linguagem natural
(NLP), como tokenização, remoção de stop words e stemming, por exemplo, além das técnicas
clássicas de Data Mining, como clusterização e classificação.

Temos que saber que, pelas suas características únicas desse contexto, dizemos que estamos
trabalhando com o processo de Text Mining (ou Text Data Mining).

Outro exemplo se trata da garimpagem realizada em processos organizacionais visando
melhorá-los. Nesse contexto, a literatura considera que estamos em um ambiente de Mineração
de Processos (Process Mining).

Aprofundando um pouco mais, nessa abordagem, analisamos dados de eventos gerados durante
a execução de processos organizacionais com o objetivo de entender, monitorar e melhorar esses
processos de ponta a ponta, detectando gargalos, variações indesejadas e oportunidades de
otimização.

(CEBRASPE (CESPE)/TJ TRE RJ/TRE RJ/Apoio Especializado/Programação de Sistemas/2012) Text
mining é o processo que utiliza métodos para navegar, organizar, encontrar e descobrir
informações em bases textuais escritas em linguagem natural. Com text mining é possível
manipular mais facilmente informações não estruturadas, tais como notícias, textos em websites,
blogs e documentos em geral.

Comentários:

Tradicionalmente, a análise de dados é focada em informações estruturadas (por exemplo, dados
numéricos dispostos em tabelas). Porém, boa parte do conhecimento humano está em formato
textual, como em notícias, artigos, páginas da web, que não seguem uma estrutura rígida. Isso
dificulta o tratamento automatizado e a extração de insights por métodos tradicionais de análise.

Assim, utilizamos a mineração de texto para superar esse desafio. A ideia é utilizar técnicas de
processamento de linguagem natural (NLP), estatística e aprendizado de máquina para navegar,
organizar, classificar e extrair informações valiosas a partir desses dados textuais.

Gabarito: Certo

Fases do Knowledge Discovery in Databases

Infelizmente não há um consenso em qual seja o conjunto de fases para execução da Descoberta
do Conhecimento na literatura. Assim, cada autor enumera as próprias etapas que considera
serem essenciais para o KDD.

Fases do KDD segundo Fayyad

Agora vamos estudar o fluxo básico proposto por Fayyad, tido como um dos precursores do
campo de estudo Knowledge Discovery in Databases.

#### 1ª Fase - Seleção do Conjunto de Dados Alvo

Bom, iniciamos o processo de Descoberta de Conhecimento em um banco de dados tentando
entender o contexto em que estamos inseridos. Isso significa compreender o negócio da
empresa, os seus processos organizacionais, as características dos dados e as restrições e
hipóteses já existentes sobre eles.

Além disso, na primeira fase já estabelecemos o objetivo do processo de KDD, ou seja, o que
desejamos alcançar a partir da análise dos dados.

Ainda nessa etapa selecionamos o subconjunto de dados que utilizaremos no processo de
descoberta. Isso porque nem sempre todos os dados disponíveis no banco são úteis, sendo
necessário filtrar variáveis (atributos) ou registros (amostras) irrelevantes.

Assim, é nessa etapa que decidimos, por exemplo, “utilizar apenas dados dos últimos dois
meses” para trabalharmos.

#### 2ª Fase - Pré-processamento dos Dados

Na segunda fase preparamos os dados para análise, isto é, realizamos o seu pré-processamento.
Dessa forma, é aqui que realizamos atividades como tratar valores ausentes, remover duplicatas,
corrigir erros, amenizar ou eliminar ruídos, padronizar unidades de medida e tratar com valores
discrepantes (outliers).

Em outras palavras, é nessa fase que realizamos atividades como limpeza dos dados e integração
destes em uma base única, se conveniente.

#### 3ª Fase - Transformação dos Dados

Já na terceira fase realizamos a transformação dos dados (que, segundo Fayyad, se trata, na
realidade, de “redução” dos dados), os compactando em uma representação mais significativa.
Fazemos isso para os tornar mais manejáveis, eficientes de se processar e, em muitos casos, mais
interpretáveis.

Para conseguir isso, utilizamos de técnicas de extração de características (features) e redução de
dimensionalidade (como PCA - Análise de Componentes Principais), por exemplo.

#### 4ª Fase - Mineração de Dados

Na quarta fase escolhemos o método de Data Mining mais aderente aos objetivos definidos no
início do processo de KDD. Dessa forma, é aqui que já escolhemos se iremos aplicar técnicas
como classificação (prever uma categoria), regressão (prever valores contínuos), clustering
(agrupamento de informações) e associações (identificar padrões de coocorrência), dentre outras.

Ainda nessa etapa realizamos a análise exploratória dos dados (AED) para nos ajudar a escolher
mais assertivamente o algoritmo de mineração de dados que serão utilizados. Assim, com a AED

obtemos insights iniciais, a partir da visualização de distribuições, correlações e relações entre as
variáveis, apoiando o processo de escolha de modelos de garimpagem de dados.

Na sequência, realizamos a Mineração dos Dados em si, isto é, aplicamos efetivamente os
algoritmos de data mining selecionados para extrair padrões a partir do conjunto de dados
pré-processados.

Saibam que há diversos tipos de padrões que podemos minerar nos nossos dados, sendo os mais
importantes listados a seguir.

Padrão
Tipo
Explicação
Exemplo

Frequência
(Associação)
Descritiva

Esses padrões mostram itens
ou eventos que ocorrem, com
frequência,
juntos.
Padrão
muito minerado em sistemas
de e-commerce.

“Clientes
que
compram pão
também
costumam
comprar
leite”

Classificação
Preditiva

Esses padrões nos permitem
predizer rótulos (ou categorias)
futuras em registros com base
em
similaridade
de
características
com
outros
registros já rotulados.

“Cliente ‘x’ está propenso a
cancelar
o
serviço,
porque
clientes
com
as
mesmas
características cancelaram”

Regressão
Preditiva

Esses padrões nos permitem
predizer valores para registros
com base em similaridade de
características
com
outros
registros
que
já
possuem
valores associados.

“Cliente ‘x’ está propenso a
gastar ‘y’ reais com o serviço,
porque clientes com as mesmas
características gastaram por volta
desse valor”

Agrupamento

(Clustering)
Descritiva

Esses
padrões
identificam
subconjuntos
naturais
de
registros.
Assim,
com
agrupamentos entendemos a
estrutura interna dos dados,
descobrimos
segmentos,
nichos
de
mercado
ou
subgrupos
com
comportamentos semelhantes.

“Há um grupo de clientes de alto
gasto, um grupo ocasional de
gastos médios, e um grupo que
compra raramente e com baixo
ticket.”

Padrões
Sequenciais
Preditiva

Esses
padrões
identificam
dependências
e
relacionamentos
em
dados
ordenados ao longo do tempo.
Vejam
então
que
há
necessidade
dos
registros
estarem
registrados
com
alguma noção de tempo.

“Clientes
que
compram
um
tablet
tem
a
tendência
de
comprar uma caneta touch em
alguns dias”

Padrão
Tipo
Explicação
Exemplo

Outliers
(Anomalias)

Descritiva

ou
Preditiva

Identificação de padrões que
são exceções ou pontos fora
da curva.

“Os clientes ‘x’ e ‘y’ gastam mais
que
R$ 10.000,00 em cada
compra”

Correlação
Descritiva

Padrões
que
identificam
relações estatísticas relevantes,
para
além
de
simples
frequências.

“No inverno os clientes compram
mais meias felpudas”

Visualização
Descritiva

Transforma
dados
em
representações
gráficas
(gráficos, mapas, dashboards)

“Um gráfico de dispersão de
‘tempo
no
app’
vs.
‘ticket
médio’”

Sumarização
Descritiva

Condensa o conjunto de dados
em representações compactas
(estatísticas agregadas, perfis,
regras descritivas, tópicos etc.)

“Clientes do plano A gastam em
média R$ 120/mês”

Na prática, a execução de algoritmos não é uma tarefa tão simples quanto parece, uma vez que
há diversas restrições computacionais que podem nos afetar.

Por exemplo, saibam que o número de combinações possíveis de dados para análise cresce
exponencialmente em grandes conjuntos de dados, tornando inviável explorar todas essas
combinações dentro de limites temporais aceitáveis.

(FGV/TCE-PA/Informática/Analista de Sistemas/2024) A descoberta de conhecimento em base
de dados é caracterizada como um processo composto por várias etapas operacionais: o
pré-processamento, a mineração de dados e o pós- processamento.

Das listadas a seguir, assinale a que é uma tarefa da etapa de mineração de dados.

a) seleção de dados (ou redução de dados).

b) limpeza de dados.

c) codificação de dados.

d) descoberta de associações.

e) enriquecimento de dados.

Comentários:

a) Errada. Seleção de dados é o primeiro passo da descoberta de conhecimento.

b) Errada. Limpeza de dados (tratar ausentes, erros, duplicidades) ocorre no pré-processamento.

c) Errada. Codificação de dados (ex.: transformar categorias em números) ocorre transformação.

d) Correta. Descoberta de associações é tarefa típica da mineração de dados: encontrar regras a
partir de itens que ocorrem juntos no banco de dados (ex.: quem compra pão costuma comprar
manteiga).

e) Errada. Enriquecimento de dados (incluir novas fontes/atributos) se trata de uma fase
específica das fases do KDD segundo Navathe.

Gabarito: D

#### 5ª Fase - Interpretação e Avaliação dos Padrões

Pois bem, na quinta etapa interpretamos os padrões obtidos para verificar se fazem sentido no
contexto de trabalho, se são coerentes com o conhecimento pré-existente e se podem gerar, de
fato, insights úteis.

Finalmente, também nessa etapa decidimos como o conhecimento obtido será aplicado. Isso
pode significar incorporar o modelo a um sistema existente, documentar as descobertas em
relatórios, treinar equipes com base nos insights ou até mesmo reconfigurar processos de
negócio.

(FCC/INFRAERO/Administrador de Banco de Dados/2011) No âmbito da descoberta do
conhecimento (KDD), a visão geral das etapas que constituem o processo KDD (Fayyad) e que
são executadas de forma interativa e iterativa apresenta a seguinte sequência de etapas:

a) seleção, pré-processamento, transformação, data mining e interpretação/avaliação.

b) seleção, transformação, pré-processamento, interpretação/avaliação e data mining.

c) data warehousing, star modeling, ETL, OLAP e data mining.

d) ETL, data warehousing, pré-processamento, transformação e star modeling.

e) OLAP, ETL, star modeling, data mining e interpretação/avaliação.

Comentários:

A metodologia proposta por Fayyad para descoberta de conhecimento em bases de dados (KDD
- Knowledge Discovery in Databases) estabelece as seguintes etapas:

1. Seleção: identificar e selecionar os dados relevantes para o objetivo da análise.

2. Pré-processamento: limpar e preparar os dados selecionados.

3. Transformação: os dados são transformados para um formato mais adequado para a aplicação
de algoritmos de mineração.

4. Data Mining (Mineração de Dados): a etapa central do processo KDD. Aqui, são aplicados
algoritmos para explorar padrões, correlações ou tendências nos dados. O objetivo é encontrar
informações úteis e não triviais.

5. Interpretação/Avaliação: avaliação dos padrões para determinar sua relevância e
aplicabilidade. A interpretação deve ser feita de forma que os insights gerados sejam acionáveis
e compreensíveis para os tomadores de decisão.

Gabarito: A

Fases do KDD segundo Navathe

Agora vamos estudar o fluxo básico proposto por Navathe, uma autoridade na área de Bancos de
Dados. Porém, para explicação dessas fases, seremos mais direto, uma vez que temos muita
intersecção de conceitos.

Começamos o processo com a Seleção de dados, em que escolhemos quais dados usar para
responder a uma pergunta de negócio. Por exemplo, focar nossa mineração em apenas nas lojas
do Nordeste? ou só clientes com compras nos últimos 12 meses?

Depois, realizamos a Limpeza de dados, em que corrigimos erros e inconsistências, padronizamos
formatos, tratamos valores faltantes e duplicados. Por exemplo, corrigimos CEP inválido,
telefones sem DDD, datas em formatos diferentes, nomes repetidos do mesmo cliente etc.

Na sequência, no Enriquecimento (ou data enrichment) acrescentamos atributos externos aos
dados que possam os explicar melhor. Por exemplo, anexar faixa etária para nossa lista de
clientes, adicionamos o score de crédito de cada cliente etc.

Após isso, realizamos a Transformação e Codificação dos dados, em que os reduzimos para
análise, ou seja, realizamos agregações, normalizar, discretizar, codificar categorias.

Agora entramos na Mineração de dados, ou seja, utilizamos algoritmos para extrair padrões e
modelos.

Finalmente, apresentamos a informação descoberta em relatórios e visualizações, isso para
traduzir descobertas em gráficos, tabelas, dashboards e recomendações acionáveis. Por exemplo,
um painel com o desempenho por segmento.

(Marinha/QT (Marinha)/Marinha/Informática/2011) A Descoberta de conhecimento em Bancos de
Dados (KNOWLEDGE DISCOVERY IN DATABASES), normalmente abreviada como KDD,
engloba mais que a DATA MINING. Este processo é composto por seis fases, que são
executadas na seguinte ordem: Seleção de dados;

a) classificação; enriquecimento; transformação ou codificação; DATA MART/construção de
relatórios; e apresentação da informação descoberta.

b) limpeza; agregação; transformação ou codificação; DATA MINING/construção de relatórios; e
apresentação da informação descoberta.

c) limpeza; enriquecimento; classsificação; DATA MINING/ construção de relatórios; e
apresentação da informação descoberta.

d) limpeza; processamento; agregação; DATA MINING/ construção de relatórios; e apresentação
da informação descoberta.

e) limpeza; enriquecimento; transformação ou codificação; DATA MINING/construção de
relatórios; e apresentação da informação descoberta.

Comentários:

Segundo Navathe, a ordem típica do processo KDD consiste em seleção → limpeza →
enriquecimento → transformação/codificação → data mining → relatório e visualização.

Gabarito: E

Objetivos do Data Mining

Segundo Navathe, ao efetuarmos a Mineração de Dados, estamos objetivando quatro tipos:
previsão, identificação, classificação e otimização.

Com a Previsão queremos estimar o futuro dos atributos dos nossos dados com base em
padrões históricos e na lógica de negócio. Por exemplo, queremos prever o que clientes
comprarão com certos descontos (efeito de promoção).

Já com a Identificação queremos detectar se um item, um evento ou uma atividade está
presente. Essa identificação pode ser de detecção (intrusão, fraude, falha) ou autenticação
(confirmar identidade).

Continuando, com a Classificação mapeamos cada registro de dados em uma classe entre
categorias definidas. Por exemplo, os clientes em um supermercado podem ser categorizados

em compradores que buscam desconto, compradores com pressa, compradores regulares leais,
compradores ligados a marcas conhecidas e compradores eventuais.

Finalmente, com a Otimização temos uma função objetivo e, a partir de restrições, queremos
escolher a melhor alocação de recursos escassos (como tempo, espaço, dinheiro, materiais etc.)
para maximizar lucro ou minimizar custo, etc. É uma ponte com pesquisa operacional.

(ESAF/AA (ANAC)/ANAC/Qualquer Área de Formação/2016) São objetivos da Mineração de
Dados:

a) Distribuição, Identificação, Organização e Otimização.

b) Previsão, Priorização, Classificação e Alocação.

c) Previsão, Identificação, Classificação e Otimização.

d) Mapeamento, Identificação, Classificação e Atribuição.

e) Planejamento, Redirecionamento, Classificação e Otimização.

Comentários:

Segundo
Navathe, os objetivos da Mineração de Dados são: Previsão, Identificação,
Classificação e Otimização.

Gabarito: C

## Modelos de Referência

Por o Data Mining ser um campo fortemente ligado ao mundo empresarial foi natural que, ao
longo do tempo, surgissem alguns modelos padrões para sua implementação na prática, visando
tornar os projetos de data mining mais rápidos, baratos, confiáveis e gerenciáveis pelas
companhias.

Percebam então que essa é a principal função dos modelos de referência: fornecer uma linha
mestra, um roteiro, de como conduzir um projeto de Data Mining do início ao fim, aumentando
suas chances de sucesso.

Cross Industry Standard Process for Data Mining

O Cross Industry Standard Process for Data Mining - CRISPD-DM (Processo Padrão de Vários
Segmentos de Mercados para Mineração de Dados) - se trata do principal modelo de referência
para implementação de um projeto de Data Mining.

Vejam que se trata de um modelo “intersetorial”, ou seja, é neutro em relação ao tipo de
indústria em que está sendo aplicado. Isso porque foi desenvolvido levando em conta a
experiência de diversas empresas, garantindo que suas etapas sejam aplicáveis em variados
contextos de negócios, como varejo, finanças, manufatura etc.

Além disso, saibam que também é agnóstico em relação às ferramentas, isto é, não depende de
qualquer tecnologia específica para ser implementado.

O CRISP-DM foi financiado pela Comissão Europeia e desenvolvido por um
consórcio entre as empresas SPSS, NCR e Daimler-Benz para atender à
necessidade de um modelo padrão que pudesse ser usado em projetos
industriais e de pesquisa de Data Mining.

Continuando, o CRISP-DM pode ser visto como uma metodologia, pois fornece um conjunto de
diretrizes, melhores práticas e instruções sobre as etapas de um projeto de mineração de dados,
as tarefas que precisam ser realizadas em cada etapa e os relacionamentos entre as tarefas.

A metodologia é o estudo dos métodos. Isto é, o estudo dos caminhos para se
chegar a um determinado fim.

Além disso, podemos utilizar o CRISP-DM como um modelo de processo, pois fornece um ciclo
de vida completo, com as etapas necessárias para realizar a mineração de dados.

Pois bem, o modelo de ciclo de vida do CRISP-DM, exposto na figura a seguir, é composto de
seis fases com setas indicando as dependências mais importantes e frequentes entre elas.

Porém, percebam que no processo de mineração de dados as etapas não precisam ser seguidas
de forma linear e fixa, sendo, por vezes, necessário ir e voltar entre elas.

Além disso, vale saber que o circuito verde externo simboliza que a mineração de dados é cíclica,
ou seja, nunca é um processo completamente finalizado. Isso porque mesmo após a conclusão
de um ciclo, novas perguntas ou necessidades podem surgir, iniciando um novo ciclo do
processo.

(QUADRIX/Ana (CREF 3)/CREF 3/Tecnologia da Informação/2023) O CRISP-DM é uma
metodologia abrangente de mineração de dados e um modelo de processo que fornece, para os
usuários de data mining (DM), um modelo completo para a realização de um projeto de DM.

Comentários:

O CRISP-DM é uma metodologia porque se trata de um conjunto de práticas, diretrizes e
princípios organizados para conduzir um projeto de Data Mining.

O CRISP-DM também é um modelo de processo porque descreve as etapas necessárias para
alcançar um objetivo com o Data Mining, representando um fluxo de trabalho que deve ser
seguido.

Gabarito: Certo

(CEBRASPE (CESPE)/ERM (ANM)/ANM/Qualquer Área de Formação/Fiscalização e Distribuição
de Receitas/2025) Compreensão do negócio, compreensão dos dados, preparação dos dados,
modelagem, avaliação e implantação são as fases do modelo CRISP-DM, e, nesse modelo, as
fases devem ser seguidas de maneira estritamente sequencial, sem a possibilidade de iterações
ou retrocessos.

Comentários:

A questão acerta ao afirmar que as fases do modelo CRISP-DM são compreensão do negócio,
compreensão dos dados, preparação dos dados, modelagem, avaliação e implantação. Porém,
essas fases não devem ser seguidas de maneira estritamente sequencial, já que, a depender das
necessidades de cada projeto, podemos voltar e prosseguir entre as fases para obtermos um
melhor resultado final.

Gabarito: Errado

#### 1ª Fase - Entendimento do Negócio

Antes de qualquer atividade técnica, é fundamental determinarmos os objetivos do negócio, isto
é, o que a organização deseja alcançar com o projeto de mineração de dados. Seria uma redução
de custos? Um entendimento do comportamento de seus clientes? Identificar tendências de
mercado? Todas são respostas possíveis que orientarão qual o trabalho que deve ser feito.

Com as metas e critérios de sucesso definidos, agora o foco é entender o ponto de partida a
partir de uma avaliação da situação. Para isso devemos identificar recursos disponíveis, avaliar
possíveis desafios e limitações e ainda planejar como lidar com os fatores de risco. Assim,
devemos verificar quais tipos de dados estão disponíveis para análise, se a equipe é a necessária
para concluir o projeto, os maiores fatores de risco, e se há plano de contingência para cada um
desses riscos.

Na sequência devemos determinar os objetivos para mineração de dados, isto é, converter os
objetivos do negócio em metas de mineração de dados. Ou seja, transformar os desejos da
estratégia da empresa em tarefas técnicas da equipe de ciência de dados, através de propostas
de soluções técnicas para problemas de negócios. Por exemplo, supondo um objetivo de
negócio como “reduzir a perda de clientes (churn rate)”, podemos criar tarefas técnicas como
“identificar clientes de alto valor”, “criar um modelo de probabilidade de cancelamento de
serviço por um cliente” e “calcular um ‘score’ de importância baseado no valor do cliente e na
sua probabilidade de cancelamento”.

Finalmente, o guia CRISP-DM orienta a produzir um documento chamado “plano do projeto”,
que servirá como guia para a implantação do projeto de Mineração de Dados por toda a equipe
e para as partes interessadas. Vejam que esse produto consolida todas as informações
estratégicas e operacionais necessárias para executar o projeto de mineração de dados,
abordando suas metas, seus recursos, seus riscos e o planejamento de todas as suas fases.

#### 2ª Fase - Entendimento dos Dados

Na fase de entendimento dos dados realizamos uma análise exploratória dos dados disponíveis
para compreendermos a fundo as suas características, aproveitando para evitar alguns problemas
que já podem ser identificados e tratados nessa fase inicial.

Bom, iniciamos essa fase realizando a coleta de dados, isto é, trazemos os dados disponíveis para
o ambiente de trabalho para examiná-los de perto. O objetivo aqui é ter uma visão clara de quais
dados estão à disposição, de onde eles vêm (bancos de dados, sistemas internos, arquivos CSV
etc.), e como eles poderão (ou não) contribuir para o projeto de mineração de dados.

Com a coleta realizada, precisamos descrever nossos dados para registrar e comunicar
informações importantes que podem impactar no projeto. Isso inclui detalhar tanto aspectos
quantitativos (como volume de dados) quanto qualitativos (como tipos de valores e esquemas de
codificação).

De posse das características dos nossos dados é que de fato realizamos a exploração de dados
para entender melhor os padrões, tendências, correlações e características fundamentais dos

dados disponíveis. Para isso, podemos realizar análises de distribuição de atributos, visualizar os
dados graficamente, realizar agregações como média etc.

Precisamos aproveitar esse momento para, na sequência, realizar uma verificação da qualidade
dos dados para orientar a próxima fase, a de preparação dos dados. Assim, identificamos dados
omissos, inconsistências de valores (como erros de unidade de medida, por exemplo),
inconsistências de codificação (como produtos codificados como “ELET01” em uma fonte e
“E01” em outra), e metadados inválidos (por exemplo, incompatibilidade entre um produto e sua
definição).

#### 3ª Fase - Preparação dos Dados

A preparação de dados é uma fase crítica no processo de mineração de dados e,
frequentemente, consome a maior parte do tempo e esforço do projeto (estima-se que entre 50%
a 70% do tempo e esforço total do projeto). Ao final do processo, esperamos ter um conjunto de
dados pronto para ser utilizado por nossos algoritmos.

Iniciamos essa fase realizando uma seleção dos dados que são realmente relevantes, dentre os
propostos pela fase anterior, para nossa mineração de dados. Saibam que fazemos essa nova
seleção não somente em relação aos registros (linhas) propostos, mas selecionamos também os
atributos (colunas) que são de fato relevantes para os objetivos do projeto.

Com as informações mais relevantes selecionadas, devemos efetuar uma limpeza nos dados para
garantir que estejam em um estado adequado para a modelagem. Tal tarefa pode se iniciar a
partir do relatório fornecido pela “verificação da qualidade dos dados”. Bom, na tabela a seguir
apresento os tratamentos básicos que podem ser realizados nessa etapa.

Problema nos dados
Explicação
Solução possível

Dados omissos

Valores ausentes em registros ou
atributos. Podem ocorrer devido a
falhas na coleta de dados ou por
razões estruturais (como informações
opcionais), por exemplo.

1. Excluir linhas ou atributos.
2. Preencher os espaços em
brancos
por
um
valor
estimado.

Erros de dados

Dados incorretos ou inconsistentes,
como erros de digitação, valores fora
do intervalo esperado ou entradas

1. Usar a lógica para descobrir
manualmente
os
erros
e
substituí-los.

Problema nos dados
Explicação
Solução possível

ilógicas (por exemplo, "idade = -5").
2. Exclua as características.

Inconsistências de

codificação

Dados categóricos ou codificados de
maneira inconsistente (por exemplo,
"M"
e
"Mulher"
usados
para
representar o mesmo valor).

Decida
sobre
um
único
esquema
de
codificação,
então converta e substitua os
valores inconsistentes.

Metadados omissos

ou inválidos

Discrepâncias entre os dados reais e
os metadados (descrições, tipos de
variáveis, etc.), como um campo
chamado "Idade" com descrição de
“nome”.

Examine
manualmente
os
campos suspeitos e rastreie o
significado correto.

Pode ser conveniente neste momento construir novos dados, a depender das necessidades do
projeto. Segundo a literatura, há duas formas possíveis de conseguir isso. A primeira forma é
derivando atributos, isto é, criando novas colunas no banco de dados a partir de transformações
ou combinações das já existentes. A outra forma é gerando novos registros, isto é, linhas no
banco de dados, a partir da manipulação dos registros já existentes.

Também nesse momento pode ser necessário realizar a integração de dados, especialmente
quando os dados vêm de múltiplas fontes, já que precisamos que nossos dados formem um
conjunto unificado consistente e lógico. Como métodos básicos de integração precisamos
conhecer a mesclagem (combinar conjuntos de dados com informações complementares) e a
anexação (combinar conjuntos de dados com informações semelhantes, porém diferentes)

Como último passo da preparação, é preciso formatarmos os dados, isto é, garantir que estejam
no formato ou ordem exigidos para construção dos modelos de Data Mining. Por exemplo, um
modelo de sequência pode exigir que os dados estejam ordenados cronologicamente.

#### 4ª Fase - Modelagem

Iniciamos a modelagem selecionando quais técnicas de modelagem de fato utilizaremos para
extrair conhecimento dos nossos dados. Pois bem, para selecionarmos o melhor modelo
precisamos realizar uma análise dos tipos de dados disponíveis (por exemplo, se são dados
categóricos, podemos usar o modelo Naive Bayes), quais as metas desejadas (por exemplo, se
queremos agregar clientes em grupos, podemos usar o k-means) e requisitos específicos do caso

em prática (por exemplo, se desejamos que o modelo seja interpretável, podemos usar árvores
de decisão)

Com o modelo a ser construído escolhido, devemos definir um design de teste para avaliarmos a
sua qualidade, validade e adequação. Para conseguirmos isso, precisamos definir o quão
excelente é o modelo através de medida de desempenho (por exemplo, F1-Score para modelos
supervisionados) e também definir um conjunto de dados independente de testes.

A construção dos modelos é o ápice do esforço de preparação e planejamento realizado nas
etapas anteriores. Nesta fase, os algoritmos de mineração de dados são aplicados ao conjunto de
dados preparado para gerar insights, previsões ou padrões. Vale saber que se trata de um
processo iterativo, ou seja, avaliamos diferentes modelos documentando seus parâmetros e
resultados.

De posse dos modelos produzidos e dos seus resultados, podemos avaliá-los tecnicamente para
decidirmos os escolhidos como finais. Saibam que “final” pode significar várias coisas, dentre as
quais "pronto para implementação" ou "ilustrando padrões interessantes".

#### 5ª Fase - Avaliação

Iniciamos essa fase avaliando os modelos de acordo com critérios de sucesso dos negócios.
Vejam que, na última etapa da fase anterior, nossa abordagem de análise dos modelos era mais
técnica, realizada pelos cientistas de dados, enquanto aqui estamos interessados em cumprir com
metas de negócios, realizada pelos tomadores de decisão da companhia. Essa etapa termina
com um relatório final contendo a lista de modelos aprovados de acordo com essas metas de
negócio.

Na sequência, realizamos uma revisão do trabalho para identificar fatores importantes que
podem ter sido esquecidos durante o projeto. Assim, aqui analisamos se todas as etapas foram
executadas de maneira completa, para garantir que o modelo foi construído corretamente. Vejam
que se trata de uma oportunidade de aprender e melhorar o processo como um todo,
encontrando êxitos e fraquezas.

Agora finalizamos a avaliação determinando os próximos passos no processo CRISP-DM a serem
seguidos. Isso porque a etapa de revisão pode nos trazer insights que revelem ser necessário
voltar para refinarmos melhor algum processo anterior para construção do modelo. É claro que
também podemos estar convictos que o trabalho atende as expectativas e partirmos em frente
para a fase de implementação.

#### 6ª Fase - Implementação

Começamos essa fase realizando o planejamento da implementação, já que queremos garantir
um processo de implementação suave e abrangente. O primeiro passo do planejamento é
resumir os resultados, tanto modelos como descobertas. Bom, para cada modelo implementável,
devemos criar um plano passo a passo para a implementação e integração com os outros
sistemas, e, para cada descoberta, um plano para disseminar essas informações para a
organização. Finalmente, devemos identificar problemas de implementação e planejar as suas
respectivas contingências.

Também devemos planejar o monitoramento e a manutenção dos modelos a serem
implementados. Saibam que esse monitoramento é essencial para garantir a eficácia contínua
dos modelos, isso porque, caso identifiquemos que um modelo em produção comece a
apresentar desempenho inferior ao esperado, precisamos agir, realizando seu refinamento, para
melhorar seus resultados.

Com todo o planejamento finalizado, agora queremos produzir um relatório final, seja para
consolidar os registros de todas as etapas do processo em um único documento, seja para
comunicar os resultados para o público interessado (técnicos de TI e não técnicos do negócio).

Finalmente, terminamos a fase de implementação e, consequentemente, o processo de
CRISP-DM, realizando a revisão final do projeto. Bom, a revisão final oferece uma oportunidade
de refletir sobre todo o trabalho realizado. Dessa forma, é o momento de consolidar as lições
aprendidas, avaliar o sucesso do projeto e documentar as experiências, proporcionando uma
base sólida para futuros projetos.

## Resumo

Mineração de Dados se trata de um campo de estudo mais prático, em que utilizamos conceitos
de diversas especialidades, como o Aprendizado de Máquina, Banco de Dados e Estatística, por
exemplo, para conseguir extrair conhecimento de grandes conjuntos de dados reais, com o
objetivo de transformá-los em conhecimento aplicável em áreas como negócios, ciência e saúde.

Data Mining é um processo usado para extrair e analisar informações que
revelam padrões ou tendências estratégicas do negócio, em grande volume

de dados, que auxiliam na tomada de decisões.

Conceitos
Explicação

Busca por
conhecimento

Com o Data mining conseguimos explorar grandes volumes de dados
visando revelar conhecimentos previamente desconhecidos.

Busca por
informações ocultas

Com o Data Mining queremos revelar conhecimento oculto, utilizando
de técnicas complexas para revelar o que não se sabe pelos
detentores dos dados, possibilitando análises avançadas sobre as
informações.
Assim, não queremos obter informações diretas, como aquelas
obtidas por meras consultas no banco de dados, por exemplo.

Busca por padrões

Quando buscamos por padrões nos dados, não queremos apenas
identificar relacionamentos entre eles, mas também anomalias e
correlações que possam gerar insights para a gestão.

Open-ended (ou

“aberto”)

Na Mineração de Dados não temos necessariamente um ponto final
ou um objetivo completamente fixo e pré-definido. Isso significa que
o processo pode levar a descobertas inesperadas, além das hipóteses
iniciais.

Conhecimento

indutivo

Com o Data Mining queremos descobrir padrões gerais a partir de
observações específicas de nosso banco de dados. Ou seja, a partir
de algumas ocorrências, queremos generalizar a ocorrência de
determinados eventos.

Modelos preditivos
É mais frequente utilizarmos modelos preditivos para Mineração de
Dados, isto é, modelos que preveem resultados futuros com base em

Conceitos
Explicação

dados históricos. Assim, podemos antecipar tendências estratégicas
do negócio.

Tipos de dados

No Data Mining trabalhamos com grandes conjuntos de dados de alta
complexidade, isto é, além de apresentarem um volume muito
grande, também apresentam alta dimensionalidade (muitos atributos)
e alta heterogeneidade (tipos muitos diferentes).

Apoio aos tomadores

de decisão

O fim último da Mineração de Dados acaba sendo apoiar decisões
estratégicas pela alta gestão.

Escalabilidade

Nossos sistemas de Data Mining devem ser escaláveis, isto é, capazes
de lidar com o aumento do volume de dados ou da complexidade da
tarefa. Isso porque é inerente à atividade de Data Mining trabalhar
com cargas elevadas de dados, que provavelmente aumentarão com
o tempo.

Eficiência
computacional

É importante que o processo de Data Mining ocorra com eficiência
computacional, visto que de nada vale termos algoritmos de extração
de informações perfeitos que não podem ser usados na prática por
não conseguirem ser executados em tempo hábil.

Fases segundo Fayad:

Padrão
Explicação
Exemplo

Frequência
(Associação)

Esses padrões mostram itens ou
eventos
que
ocorrem,
com
frequência,
juntos.
Padrão muito
minerado
em
sistemas
de
e-commerce.

“Clientes que compram pão também
costumam comprar leite”

Classificação

Esses padrões nos permitem predizer
rótulos (ou categorias) futuras em
registros com base em similaridade
de
características
com
outros
registros já rotulados.

“Cliente ‘x’ está propenso a cancelar o
serviço,
porque
clientes
com
as
mesmas características cancelaram”

Padrão
Explicação
Exemplo

Regressão

Esses padrões nos permitem predizer
valores para registros com base em
similaridade de características com
outros registros que já possuem
valores associados.

“Cliente ‘x’ está propenso a gastar ‘y’
reais com o serviço, porque clientes
com
as
mesmas
características
gastaram por volta desse valor”

Agrupament

o
(Clustering)

Esses
padrões
identificam
subconjuntos naturais de registros.
Assim,
com
agrupamentos
entendemos a estrutura interna dos
dados,
descobrimos
segmentos,
nichos de mercado ou subgrupos
com comportamentos semelhantes.

“Há um grupo de clientes de alto
gasto, um grupo ocasional de gastos
médios, e um grupo que compra
raramente e com baixo ticket.”

Padrões
Sequenciais

Esses
padrões
identificam
dependências e relacionamentos em
dados
ordenados
ao
longo
do
tempo.
Vejam
então
que
há
necessidade dos registros estarem
registrados com alguma noção de
tempo.

“Clientes que compram um tablet tem
a tendência de comprar uma caneta
touch em alguns dias”

Outliers
(Anomalias)

Identificação de padrões que são
exceções ou pontos fora da curva.

“Os clientes ‘x’ e ‘y’ gastam mais que
R$ 10.000,00 em cada compra”

Correlação

Padrões que identificam relações
estatísticas relevantes, para além de
simples frequências.

“No inverno os clientes compram mais
meias felpudas”

Fases segundo Navathe:

CRISPD-DM (Processo Padrão de Vários Segmentos de Mercados para Mineração de Dados) - se
trata do principal modelo de referência para implementação de um projeto de Data Mining.

Problema nos dados
Explicação
Solução possível

Dados omissos
Valores ausentes em registros ou
atributos. Podem ocorrer devido a

1. Excluir linhas ou atributos.
2. Preencher os espaços em

Problema nos dados
Explicação
Solução possível

falhas na coleta de dados ou por
razões estruturais (como informações
opcionais), por exemplo.

brancos
por
um
valor
estimado.

Erros de dados

Dados incorretos ou inconsistentes,
como erros de digitação, valores fora
do intervalo esperado ou entradas
ilógicas (por exemplo, "idade = -5").

1. Usar a lógica para descobrir
manualmente
os
erros
e
substituí-los.
2. Exclua as características.

Inconsistências de

codificação

Dados categóricos ou codificados de
maneira inconsistente (por exemplo,
"M"
e
"Mulher"
usados
para
representar o mesmo valor).

Decida
sobre
um
único
esquema
de
codificação,
então converta e substitua os
valores inconsistentes.

Metadados omissos

ou inválidos

Discrepâncias entre os dados reais e
os metadados (descrições, tipos de
variáveis, etc.), como um campo
chamado "Idade" com descrição de
“nome”.

Examine
manualmente
os
campos suspeitos e rastreie o
significado correto.

## QUESTÕES COMENTADAS

## Data Mining e seu conceito

1.
(CEBRASPE (CESPE)/Ana C&amp;T (AEB)/AEB/Cooperação Internacional/2025) Em business
intelligence, mineração de dados consiste em

a) processo analógico que cria dados oriundo de padrões inconsistentes entre variáveis, de
forma a validá-los com novos subconjuntos de dados.

b) processo analítico projetado para explorar grandes quantidades de dados na busca de
padrões consistentes e(ou) relacionamentos sistemáticos entre variáveis.

c) processo analítico que define o valor e a relação que, por sua vez, vão transformar a
informação em peça fundamental para um banco de dados relacional.

d) processo analógico que utiliza dados não estruturados para gerar padrões consistentes entre
uma ou mais variáveis, de forma a validá-los com novos subconjuntos de dados.

e) processo analítico que independe do valor e da relação que é capaz de transformar a
informação em peça fundamental para um banco de dados não relacional.

Comentários:

a) Errada. Fala em “processo analógico” (termo inadequado aqui) e em “criar dados a partir de
padrões inconsistentes”. Mineração de dados não cria dados nem busca inconsistências; ela
analisa os dados existentes para encontrar padrões úteis.

b) Correta. Mineração de dados é um processo analítico para explorar grandes volumes de dados
e descobrir padrões consistentes e/ou relações entre variáveis, apoiando previsões e decisões.

c) Errada. Mistura a ideia de “transformar informação em peça fundamental para um banco de
dados relacional”. Isso é assunto de modelagem/arquitetura de dados, não a definição de
mineração de dados.

d) Errada. Novamente usa “processo analógico”.

e) Errada. Diz que “independe do valor e da relação” o que é errado. Mineração depende sim
dos atributos (valores) e das relações entre variáveis, e não é sobre escolher tipo de banco.

Gabarito: B

2.
(CEBRASPE (CESPE)/Tecno P1 (CTI)/CTI/Indústria 4.0 e Governo Digital/Sistemas
Ciberfísicos e Cidades Inteligentes/2024) A análise preditiva de dados se diferencia da análise
prescritiva de dados porque a primeira tem o objetivo de determinar as consequências das

decisões tomadas, enquanto a segunda utiliza fatos do passado para visualizar e prever eventos
futuros.

Comentários:

A análise preditiva utiliza dados históricos e modelos estatísticos/machine learning para prever
eventos futuros ou comportamentos prováveis. É focada em “o que pode acontecer?”. Por
exemplo, prever a probabilidade de um cliente cancelar um serviço baseado em padrões
passados.

Já a análise prescritiva determina as consequências de decisões e sugere ações específicas para
atingir determinados resultados. Baseia-se em análises preditivas combinadas com ferramentas
de otimização para responder à pergunta “o que deve ser feito?”. Por exemplo, indicar a melhor
estratégia de preços para maximizar lucros considerando cenários futuros previstos.

Gabarito: Errado

3.
(IDECAN/Of (PM ES)/PM ES/Combatente/2024) No aprendizado de máquinas, o modelo
que reside na identificação de propriedades intrínsecas aos dados de entrada, de maneira a
construir representações desses dados que possam servir a diversos propósitos, como auxílio à
tomada de decisões ou descoberta de conhecimento, é conhecido como modelo:

a) Conexionistas.

b) Descritivo.

c) Preditivo.

d) Probabilístico.

e) Simbólico.

Comentários:

a) Errada. O conexionismo se trata do campo de estudo de processos mentais via modelos
matemáticos redes neurais.

b) Correta. Modelos descritivos no aprendizado de máquinas têm como objetivo principal
identificar propriedades intrínsecas nos dados. Esses modelos são usados para construir
representações úteis dos dados, sem necessariamente prever resultados futuros. O foco está em
explorar e compreender os padrões e as características presentes nos dados.

c) Errada. Modelos preditivos são usados para prever resultados futuros ou variáveis-alvo
específicas com base nos dados.

d) Errada. Modelos probabilísticos utilizam princípios de probabilidade para lidar com incertezas
nos dados.

e) Errada. Refere-se a abordagens baseadas em lógica e regras explícitas, frequentemente usadas
em IA clássica.

Gabarito: B

4.
(FGV/ATRFB/SRFB/Geral/2023) A análise de dados prescritiva é uma técnica de análise de
dados que

a) se concentra na descrição de dados passados e presentes, com o objetivo de encontrar
tendências e padrões que possam ser usados para prever eventos futuros.

b) usa modelos matemáticos e estatísticos para identificar a melhor solução possível para um
determinado problema.

c) se concentra em identificar as causas subjacentes de um problema e em encontrar maneiras de
corrigi-las.

d) usa algoritmos de aprendizado de máquina para identificar padrões e tendências em grandes
conjuntos de dados.

e) usa modelos de aprendizado profundo para identificar padrões em dados não estruturados.

Comentários:

a) Errada. Isso corresponde à análise preditiva, que usa dados históricos para prever o que pode
acontecer, mas não indica qual ação tomar.

b) Correta. A análise de dados prescritiva tem como objetivo principal fornecer recomendações
práticas e específicas para tomar decisões otimizadas em relação a um problema ou situação.

c) Errada. Isso corresponde à análise diagnóstica, que busca entender por que algo aconteceu.

d) Errada. Isso está relacionado à análise preditiva, já que há a busca por identificação de
padrões (Data Mining).

e) Errada. O aprendizado profundo é uma técnica específica de Machine Learning.

Gabarito: B

5.
(CEBRASPE (CESPE)/Ana TI (DATAPREV)/DATAPREV/Análise de Negócios de TI/2023) O
objetivo das análises prescritivas é identificar ações recomendadas para otimização de decisões
futuras.

Comentários:

O objetivo principal das análises prescritivas é justamente fornecer recomendações práticas e
acionáveis para a tomada de decisões futuras, com base na otimização de resultados.

Gabarito: Certo

6.
(FUVEST/Ana Sis (USP)/USP/Ciência de Dados/2023) Em Mineração de Dados, após o
pré-processamento dos dados, inicia-se a fase de análises. Para esta fase há análises descritivas e
análises preditivas.

Quais das tarefas a seguir são todas análises descritivas?

a) Identificação de outliers, regressão e clusterização.

b) Classificação supervisionada, identificação de regras de associação e análise de correlação.

c) Underfitting, clusterização e sumarização.

d) Visualização, sumarização e identificação de regras de associação.

e) Sumarização, regressão e visualização.

Comentários:

Análises descritivas em mineração de dados têm como objetivo principal explorar, entender e
descrever os dados disponíveis. Essas análises não fazem previsões nem constroem modelos para
classificar ou prever dados futuros. Em vez disso, elas ajudam a encontrar padrões, sumarizar
informações e identificar relações existentes nos dados.

a) Errada. Regressão é uma técnica de análise preditiva, visto que prevê valores contínuos aos
dados.

b) Errada. Classificação é uma técnica de análise preditiva, visto que prevê rótulos aos dados.

c) Errada. Underfitting é um problema associado ao treinamento de modelos preditivos, não é
uma técnica de análise.

d) Correta. De fato, nenhuma dessas técnicas é capaz de predizer. A visualização ajuda a
representar os dados graficamente para uma análise mais intuitiva, a sumarização fornece uma
visão resumida dos dados e a identificação de regras de associação descobre padrões e relações
entre variáveis nos dados, como "se um cliente compra X, ele também compra Y."

e) Errada. Regressão é uma técnica de análise preditiva, visto que prevê valores contínuos aos
dados.

Gabarito: D

7.
(SELECON/EDTND (AMAZUL)/AMAZUL/Engenheiro de Computação/2022) Na área da
gestão de negócios, um determinado processo vem se tornando cada vez mais comum. Esse
processo apresenta as características listadas a seguir:

I. Representa uma categoria de ferramentas de análise denominada open-end, que permite ao
usuário avaliar tendências e padrões não conhecidos entre os dados e que se utiliza das mais
modernas técnicas de computação, como redes neurais, algoritmos genéticos e lógica nebulosa.

II. É um processo em que a tecnologia é empregada para localizar padrões, conexões,
correlações ou anomalias em uma grande quantidade de dados, permitindo encontrar
problemas, hipóteses e oportunidades com mais facilidade.

III. Constitui uma técnica que gera insights que resultam em vantagens competitivas para uma
empresa. Os dados processados podem motivar ações corretivas ou mudanças estratégicas,
como alterações no portfólio de produtos e direcionamento de investimentos.

Esse tipo de processo é conhecido como:

a) Data Modeling

b) Data Mining

c) Data Tools

d) Data Mart

Comentários:

I. Trata-se de possíveis técnicas a serem empregadas em uma Mineração de Dados, que
permitem avaliar tendências e padrões desconhecidos.

II. Localizar padrões nos dados é um dos objetos principais da Mineração de Dados.

III. Apoiar decisões estratégicas com insights acaba sendo uma das principais finalidades da
Mineração de Dados.

Gabarito: B

8.
(QUADRIX/Ana (CFFa)/CFFa/Tecnologia da Informação/2022) O uso da mineração de
dados permite, por exemplo, que as empresas mais bem planejem a logística de distribuição dos
seus produtos, prevendo picos nas vendas.

Comentários:

Mineração de Dados tem um relacionamento muito forte com o mundo empresarial, e é
reconhecida como uma ferramenta essencial para tomada de decisão baseada em dados. Assim,
se baseia em uma combinação de teorias científicas, estatísticas, computacionais e matemáticas,
que são aplicadas a problemas práticos no mundo empresarial.

Dessa forma, é plenamente possível que a mineração de dados detecte tendências e
sazonalidades em dados de vendas passados, como picos em períodos festivos, promoções ou
eventos específicos.

Gabarito: Certo

9.
(FGV/AF (SEFAZ PR)/SEFAZ PR/2025) Uma empresa contratou um analista de dados para
realizar o tratamento de suas bases de dados.

Em um primeiro contato com essas bases, o analista utilizou uma técnica de remodelagem para
resumir os dados, agrupando-os e aplicando funções como soma, média, contagem, máximo ou
mínimo.

Assinale a opção que indica a técnica que foi utilizada pelo analista de dados.

a) Pivotamento.

b) Derretimento.

c) Agregação.

d) Junção.

e) Normalização

Comentários:

Quando “resumimos” uma base de dados por grupos, por exemplo, por cliente, mês ou produto,
e calculamos estatísticas como soma, média, contagem, máximo, mínimo, fazemos uma
agregação.

Para as outras opções, temos:

Para não confundir com as outras opções:

- Pivotamento (a): reorganiza a tabela mudando linhas em colunas (ou vice-versa), típico de
“tabela dinâmica”.

- Derretimento (b) (melting): transforma colunas em linhas para deixar a tabela “longa”.

- Junção (d) (join/merge): junta duas tabelas pela mesma chave.

- Normalização (e): ajusta escalas/valores.

Gabarito: C

## Data Mining

10.
(CEBRASPE (CESPE)/Ana CT I (CNPq)/CNPq/Gestão de Dados Corporativos/2024)
Mineração de dados combina técnicas de descoberta de conhecimento com técnicas de
implementação eficientes que permitem seu uso em bancos de dados extremamente grandes.

Comentários:

A mineração de dados combina descoberta de conhecimento com eficiência computacional para
processar e analisar bancos de dados extremamente grandes. Essa abordagem permite
transformar dados brutos em insights valiosos, auxiliando na tomada de decisão e criando
vantagens competitivas para as organizações.

Gabarito: Certo

11.
(CEBRASPE (CESPE)/Tecno P2 (CTI)/CTI/Tecnologias Habilitadoras/Inteligência Artificial e
Ciência de Dados/2024) Em data mining, um mesmo processo de análise de dados pode utilizar
bancos de dados relacionais ou NoSQL, mas não simultaneamente.

Comentários:

Na prática é até comum a realização de Mineração de Dados a partir de múltiplas fontes, como,
por exemplo, de dados estruturados de um ERP (SQL) e logs não estruturados de um servidor
web (NoSQL).

Gabarito: Errado

12.
(CEBRASPE (CESPE)/Tecno P1 (CTI)/CTI/Indústria 4.0 e Governo Digital/Sistemas
Ciberfísicos e Cidades Inteligentes/2024) Entre as técnicas de mineração de dados, a análise de
sequência e caminho se caracteriza pelo processo de encontrar relacionamentos entre dois
conjuntos de dados diferentes e aparentemente não relacionados.

Comentários:

A análise de sequência e caminho é uma técnica de mineração de dados que busca identificar
padrões de eventos ou ações que ocorrem em uma sequência temporal.

A descrição fornecida está mais relacionada a regras de associação (ou análise associativa), uma
técnica de mineração de dados utilizada para encontrar relacionamentos entre dois conjuntos de
dados diferentes ou aparentemente não relacionados.

Gabarito: Errado

13.
(CEBRASPE (CESPE)/ERSTT (ANTT)/ANTT/"Sem Área"/2024) A mineração de dados é
comumente classificada por sua capacidade de realizar determinadas tarefas, entre as quais está
a estimação, que, embora similar à classificação, é usada quando o registro é identificado por um
valor numérico e não um categórico.

Comentários:

Estimar valores é de fato uma tarefa diferente de classificação, uma vez esta atribui rótulos aos
dados.

Gabarito: Certo

14.
(VUNESP/ATI (Pref Santo André)/Pref Santo André/Administração de Bancos de
Dados/2024) Um dos conceitos e ferramentas bastante utilizados em sistemas de suporte à
decisão é o de data mining, que implica na

a) submissão do banco de dados da empresa a uma comissão especial de avaliação da qualidade
dos dados.

b) aplicação de técnicas de normalização de tabelas contidas em bancos de dados relacionais.

c) aplicação de técnicas de melhoria do desempenho em consultas SQL feitas em bancos de
dados relacionais.

d) utilização de técnicas computadorizadas de exploração de grandes volumes de dados, com a
finalidade de descobrir novos padrões e relações, colaborando na tomada de decisões.

e) transformação do sistema de banco de dados da empresa em um sistema de tempo real,
voltado a aplicações críticas.

Comentários:

Data Mining é o processo de explorar grandes volumes de dados para descobrir padrões,
relações, anomalias e tendências que não são imediatamente evidentes, gerando insights
valiosos que apoiam a tomada de decisões estratégicas.

Gabarito: D

15.
(FGV/AFFC (STN)/STN/Tecnologia da Informação/Operação e Infraestrutura/2024) Assinale
a lista que contém somente técnicas tipicamente aplicadas em operações de data mining.

a) Associação, Agrupamento e Regressão.

b) Carga, Reconhecimento de padrões, e Árvores de Decisão.

c) Extração, Transformação e Carga.

d) Limpeza, Agrupamento e Apresentação.

e) Modelagem dinâmica, Rastreamento, Classificação.

Comentários:

Vamos ver quais técnicas são utilizadas em operações de mineração de dados:

Associação: refere-se à identificação de regras ou relações frequentes entre itens em grandes
conjuntos de dados.

Agrupamento (Clusterização): agrupamento de dados em grupos (ou clusters) com base em
características semelhantes.

Regressão: técnica usada para prever valores numéricos contínuos, como vendas futuras, preços
ou crescimento populacional.

Classificação: técnica utilizada para atribuir rótulos ou categorias a dados.

Gabarito: A

16.
(CEBRASPE
(CESPE)/Ana
(CNMP)/CNMP/Tecnologia
da
Informação
e
Comunicação/Suporte e Infraestrutura/2023) O data mining é um processo usado para extrair e
analisar informações que revelam padrões ou tendências estratégicas do negócio.

Comentários:

O data mining pode ser utilizado por empresas que desejam transformar grandes volumes de
dados em informações valiosas para apoiar sua tomada de decisões estratégicas.

Gabarito: Certo

17.
(Marinha/QT (Marinha)/Marinha/Informática/2023) De acordo com Barbiere (2011), os
conceitos de garimpagem ou mineração de dados (data mining) têm sido amplamente utilizados
em aplicações comerciais com o objetivo de buscar correlações ocultas em grandes volumes de
dados. Essas correlações nem sempre são evidentes durante o tratamento cotidiano dos sistemas
de informações, e a técnica de data mining se mostra útil na identificação de padrões e
tendências relevantes para a tomada de decisões. Em relação à fase de análise, segundo o autor,
quais são as técnicas básicas definidas para o processo de garimpagem de dados?

a) Redes neurais, análise de regressão, classificação e agregação.

b) Análise de regressão, árvores de decisão e análise de conglomerados.

c) Classificação, associação, padrões sequenciais e árvores de decisão.

d) Associação, padrões sequenciais, classificação e agregação.

e) Análise de regressão, associação e árvores de decisão.

Comentários:

Segundo Barbiere, as técnicas básicas de garimpagem de dados são:

Associação: definida como a função que indica um coeficiente de afinidade entre registros de
certos fatos.

Padrões sequenciais: definidos como processos que visam à identificação de fatos que implicam
outros fatos, em momentos diferentes do tempo.

Classificação: processos que definem agrupamentos de itens em classes, segundo referências
estabelecidas.

Agregação: atua em conjunto de registros, como a abordagem anterior, porém com a diferença
de que os registros não estão previamente classificados ou definidos em conjuntos conhecidos

Gabarito: D

18.
(CEBRASPE (CESPE)/Ana TI (DATAPREV)/DATAPREV/Engenharia de Dados/2023) A
mineração de processos é um ramo da mineração de dados que utiliza inteligência de negócios
para prever tendências, ajudando tomadores de decisão a estudarem o impacto de suas decisões
no futuro da organização.

Comentários:

O objetivo da Mineração de Processos é descobrir, monitorar e melhorar processos empresariais
com base nos dados reais de eventos coletados de sistemas de informação.

Na prática, realizamos atividades como analisar logs de eventos gerados pelos sistemas da
organização para entender como os processos operam na prática. Depois disso, verificamos se a
execução do processo real está em conformidade com os modelos esperados para sugerir
correções e melhorias caso seja necessário.

Gabarito: Errado

19.
(CEBRASPE (CESPE)/Ana TI (DATAPREV)/DATAPREV/Sustentação Tecnológica/2023) A
mineração de dados é um processo cujos alicerces são aprendizado de máquina, análises
estatísticas e volumes de dados.

Comentários:

De fato, a mineração de dados utiliza fortemente aprendizado de máquina, análises estatísticas e
o uso de grandes volumes de dados para gerar informações como um ativo estratégico essencial
para a tomada de decisão nas organizações.

Gabarito: Certo

20.
(CEBRASPE (CESPE)/Ana Jr (TBG)/TBG/Comercialização/2023) A mineração de dados não
se limita às técnicas de obtenção de dados, envolvendo também a observação de padrões nos
dados obtidos.

Comentários:

Uma das principais finalidades da mineração de dados é encontrar padrões ocultos nos dados,
para isso utilizamos de diversas técnicas como regressão (ex.: previsão de quantidade de vendas),
segmentação (ex.: clientes com comportamentos semelhantes) e associação(ex.: produtos
frequentemente comprados juntos).

Gabarito: Certo

21.
(CEBRASPE (CESPE)/PPNS (PETROBRAS)/PETROBRAS/Análise de Sistemas/Processos de
Negócio/2022) A mineração de dados oferece previsões instantâneas, mas requer uma base de
dados dedicada e separada.

Comentários:

A mineração de dados pode oferecer previsões quase em tempo real, dependendo da
capacidade computacional disponível (hardware e software) e da eficiência dos algoritmos de
mineração empregados. Não sei se eu consideraria a questão errada por esse trecho.

Porém, a segunda parte está necessariamente errada, visto que a mineração de dados pode ser
até ser realizada diretamente em bases de dados operacionais,isto é, as que os sistemas do dia a
dia utilizam (embora isso possa causar um impacto de desempenho nesses sistemas).

Gabarito: Errado

22.
(CEBRASPE (CESPE)/AAAJ (DP DF)/DP DF/Informática Banco de Dados/2022) A mineração
de dados tem como objetivos identificar padrões nos dados, classificar dados de partição em
classes e otimizar o uso de recursos limitados, como tempo, espaço e materiais.

Comentários:

Embora eu ache um pouco ruim como a questão foi escrita, afinal, a mineração de dados não
tem como objetivo “otimizar o uso de recursos limitados”, o examinador considerou a questão

correta porque a mineração de dados tem como objetivo identificar padrões nos dados,
podendo utilizar técnicas de classificação para isso, de forma a utilizar recursos de forma limitada.

Gabarito: Certo

23.
(CEBRASPE (CESPE)/AAAJ (DP DF)/DP DF/Informática Redes/2022) A análise de data
mining por padrão sequencial visa à identificação de fatos que geram outros fatos, sempre
ocorrendo causa e consequência em momentos adjacentes.

Comentários:

Adjacente é algo que está “ao lado de”, ou seja, ocorrendo ao mesmo tempo. Porém, a análise
por padrão sequencial em data mining visa identificar sequências frequentes de eventos que
ocorrem em momentos distintos.

Gabarito: Errado

24.
(CEBRASPE (CESPE)/Tec (FUB)/FUB/Tecnologia da Informação/2022) Sistemas de data
mining viabilizam a extração de novos padrões significativos de informação que não seriam
necessariamente encontrados por meio de meras consultas ou processamento de dados ou
metadados no data warehouse.

Comentários:

Os sistemas de data mining vão além de consultas tradicionais ou de processamento básico de
dados e metadados, permitindo a descoberta de padrões significativos e insights que não seriam
facilmente identificados através de técnicas convencionais.

Gabarito: Certo

25.
(FEPESE/AFRM (Pref Criciúma)/Pref Criciúma/2022) Quais tipos de conhecimento podem
ser descobertos empregando técnicas clássicas de mineração de dados?

1.Regras de Associação

2.Hierarquias de classificação

3.Padrões sequenciais ou de série temporal

4.Conhecimento implícito, emergente e não estruturado

5.Agrupamentos e segmentações

Assinale a alternativa que indica todas as afirmativas corretas.

a) São corretas apenas as afirmativas 3 e 5.

b) São corretas apenas as afirmativas 1, 2, 3 e 4.

c) São corretas apenas as afirmativas 1, 2, 3 e 5.

d) São corretas apenas as afirmativas 2, 3, 4 e 5.

e) São corretas as afirmativas 1, 2, 3, 4 e 5.

Comentários:

Dentre as alternativas, vamos ver o que se trata de um padrão que podemos buscar por Machine
Learning.

1. Regras de Associação: Técnica usada para identificar padrões frequentes e relações entre
variáveis nos dados.

2. Hierarquias de Classificação: Refere-se à criação de modelos que categorizam dados em
classes organizadas hierarquicamente.

3. Padrões Sequenciais ou de Série Temporal: Envolve a identificação de eventos ou tendências
que seguem uma sequência temporal.

4. Conhecimento Implícito, Emergente e Não Estruturado: Refere-se às informações ocultas que
não são óbvias e muitas vezes não seguem uma estrutura clara. Não é exatamente uma técnica
clássica de data mining.

5. Agrupamentos e Segmentações: Técnica para identificar grupos de itens ou registros com
características semelhantes.

Gabarito: C

26.
(CEBRASPE (CESPE)/AFCA (SEFAZ AL)/SEFAZ AL/2021) Mineração de texto refere-se ao
processo de extração automática de informações relevantes, novas e interessantes.

Comentários:

Questão meio genérica. De qualquer forma, a mineração de texto (ou text mining), assim como
qualquer atividade de data mining, envolve a aplicação de técnicas para identificar padrões,
descobrir insights ocultos e extrair informações relevantes.

Gabarito: Certo

27.
(CEBRASPE (CESPE)/ProTI (ME)/ME/Atividades Técnicas de Complexidade Gerencial, de
Tecnologia da Informação e de Engenharia Sênior/Ciência de Dados/2020) O objetivo da técnica
de sequência de tempo é identificar a ocorrência de dois eventos diferentes no mesmo
momento.

Comentários:

A técnica de sequência de tempo não se concentra na identificação da ocorrência de dois
eventos diferentes no mesmo momento, mas sim na análise de dados ordenados no tempo para
identificar padrões, tendências e previsões futuras.

Gabarito: Errado

28.
(CEBRASPE (CESPE)/ProTI (ME)/ME/Atividades Técnicas de Complexidade Gerencial, de
Tecnologia da Informação e de Engenharia Sênior/Ciência de Dados/2020) A mineração de
textos utiliza técnicas diferentes da mineração de dados, tendo em vista que os textos
representam um tipo específico de dado.

Comentários:

Textos, sendo dados não estruturados, exigem etapas adicionais e ferramentas específicas, como
processamento de linguagem natural, para serem transformados em informações que os modelos
de Machine Learning possam trabalhar.

Vejam então que, não é correto afirmar que em mineração de textos utilizamos técnicas
específicas, o que ocorre é que na mineração de textos, por os dados estarem na forma de texto
livre, sem uma estrutura clara, faz-se necessário um passo adicional para transformar texto não
estruturado em uma representação estruturada.

Gabarito: Errado

## Fases do Knowledge Discovery in Databases

29.
(Instituto Consulplan/Ana (DPE PR)/DPE PR/Informática/2024) Mineração de dados (Data
Mining) pode ser definido como o processo de analisar bases de dados de grande porte, a fim de
descobrir informações por meio de consultas. Tendo em vista as fases do processo de KDD
(Knowlegde Discovery in Databases, descoberta de conhecimento nos bancos de dados) utilizado
em Data Mining, marque V para as afirmativas verdadeiras e F para as falsas.

( ) Mineração de dados: fase responsável pela escolha dos algoritmos a serem aplicados para a
descoberta de informações. Essa escolha depende fundamentalmente dos objetivos do processo
de KDD.

( ) Preparação dos dados: nessa fase, os dados necessários para a solução de um problema são
selecionados na base de dados. Essa etapa inicia-se a partir do agrupamento organizado de uma
grande quantidade de dados de uma ou mais bases de dados, selecionando somente aqueles
que são relevantes.

( ) Limpeza dos dados: essa fase consome grande parte do esforço necessário para todo o
processo devido à dificuldade de integrar bases de dados heterogêneas.

( ) Interpretação: ao final do processo, o sistema de mineração de dados gera um relatório das
descobertas, que passa então a ser interpretado por analistas de mineração. Somente após essa
interpretação obtém-se o conhecimento.

A sequência está correta em

a) V, V, V, V.

b) V, F, V, F.

c) F, V, F, V.

d) F, F, F, F.

Comentários:

(V) Mineração de Dados: a mineração de dados é a fase onde os algoritmos são aplicados para
identificar padrões nos dados. Saibam que a seleção do algoritmo depende do objetivo final,
como previsão, segmentação ou identificação de anomalias.

(V) Preparação dos dados: a preparação dos dados envolve a seleção de dados relevantes para o
problema em questão. Inclui a consolidação de dados de diferentes fontes e o refinamento para
que sejam adequados à análise subsequente.

(V) Limpeza dos dados: há diversos estudos que indicam que a limpeza dos dados é a fase mais
trabalhosa do processo de Data Mining.

(V) Interpretação: após a mineração de dados, os padrões e resultados obtidos precisam ser
analisados e interpretados pelos especialistas. Isso transforma as descobertas brutas em
conhecimento acionável, concluindo o ciclo do KDD.

Gabarito: A

30.
(CEBRASPE (CESPE)/Tecno P2 (CTI)/CTI/Tecnologias Habilitadoras/Inteligência Artificial e
Ciência de Dados/2024) O objetivo da classificação na fase de pré-processamento é o
particionamento de um grupo de documentos em subgrupos, com características em comum.

Comentários:

A classificação ocorre na fase de mineração de dados, momento em que atribuímos categorias
aos dados em análise.

Gabarito: Errado

31.
(CEBRASPE (CESPE)/Tecno P2 (CTI)/CTI/Tecnologias Habilitadoras/Inteligência Artificial e
Ciência de Dados/2024) Em mineração de dados, interpretação e explanação consiste em filtrar o
conjunto de dados por meio de mecanismo que varia de acordo com a técnica de mineração
utilizada.

Comentários:

A interpretação e explanação fazem parte da última etapa do processo de mineração de dados,
em que os resultados descobertos (como padrões, tendências ou associações) são analisados e
apresentados de forma que possam ser compreendidos e utilizados por tomadores de decisão.

Gabarito: Errado

32.
(FGV/Agente da Fiscalização (TCE SP)/Tecnologia da Informação (TI)/2023) No contexto de
Descoberta do Conhecimento em Bancos de Dados - Knowledge Discovery in Database (KDD), o
analista de dados João deverá analisar um conjunto de dados preparado e consolidado com
dados financeiros sobre transações, saldos de contas e históricos de crédito de clientes ao longo
dos últimos anos. O objetivo é identificar possíveis anomalias ou atividades suspeitas que possam
indicar fraudes.

Para isso, a fase do processo KDD que João deverá utilizar é:

a) seleção de dados;

b) mineração de dados;

c) transformação de dados;

d) interpretação de resultados;

e) pré-processamento de dados.

Comentários:

O analista João está utilizando dados que já foram preparados e consolidados (ou seja, o
pré-processamento e a transformação já foram realizados). Assim, deve realizar a mineração de
dados.

Gabarito: B

33.
(Com. Org. (IFSP)/Ana TI (IF SP)/IF SP/Ciência de Dados/2022) Quando se inicia os
trabalhos de aprendizado em bases de dados é comum identificar problemas na base de dados.
Por isso, na etapa de pré-processamento, os dados passam por recursos de limpeza, integração
de bases de dados, redução na quantidade de atributos ou dados, transformação nos formatos
dos dados ou discretização de alguns. Considerando esses recursos, indique a alternativa
incorreta que os define.

a) Integração: união de múltiplas fontes em um único local, como ocorre em um data warehouse.

b) Limpeza: é utilizada apenas para eliminar registros que apresentam problemas.

c) Redução: reduzir a dimensão da base de dados, como por exemplo, utilizando algoritmos de
clusterização ou eliminando atributos redundantes.

d) Transformação: padronização ou transformação dos dados em um formato passível de serem
utilizados por diferentes técnicas de aprendizado de máquina.

Comentários:

a) Correta. Envolve combinar dados de múltiplas fontes em uma única base, como acontece em
um data warehouse.

b) Errada. A limpeza de dados não se limita apenas a eliminar registros com problemas, já que se
trata de um processo mais amplo, que pode incluir também correção de erros, preenchimento de
valores ausentes, e tratamento de duplicatas também.

c) Correta. Refere-se à redução da complexidade da base de dados, seja diminuindo o número
de atributos ou registros.

d) Correta. Consiste em converter dados para um formato adequado à análise ou aprendizado de
máquina, como transformação de variáveis categóricas em numéricas.

Gabarito: B

## CRISP-DM

34.
(CEBRASPE (CESPE)/TJ TST/TST/Apoio Especializado/Programação/2024) A fase do
CRISP-DM em que se dá a aplicação das técnicas de mineração de dados propriamente ditas é
denominada

a) preparação dos dados.

b) entendimento dos dados.

c) implantação.

d) modelagem.

e) avaliação.

Comentários:

a) Errada. É uma fase anterior à modelagem, onde os dados são limpos, transformados,
integrados e estruturados para uso posterior.

b) Errada. Refere-se à exploração inicial dos dados para compreender suas características e
identificar potenciais problemas, como valores ausentes ou inconsistências.

c) Errada. Essa é a fase final, onde os modelos e insights obtidos durante o projeto são
implementados para uso em operações ou tomadas de decisão.

d) Correta. A fase do CRISP-DM onde se aplicam as técnicas de mineração de dados
propriamente ditas é denominada modelagem, pois é aqui que os algoritmos são utilizados para
extrair padrões e construir modelos a partir dos dados preparados.

e) Errada. Após a modelagem, os modelos criados são avaliados quanto à sua eficácia e
aderência aos objetivos do negócio.

Gabarito: D

35.
(CEBRASPE (CESPE)/ERAC (ANAC)/ANAC/Qualquer Área de Formação/2024) No modelo
CRISP-DM, a fase de preparação dos dados é caracterizada por atividades como análise da
qualidade dos dados, exploração dos dados, geração dos primeiros insights e formulação de
hipóteses.

Comentários:

É na fase de entendimento dos dados em que verificamos se os dados disponíveis são suficientes
e adequados para os objetivos do projeto (análise da qualidade dos dados), realizamos análises
para entender a distribuição e as características dos dados (exploração dos dados), Descobrir
padrões iniciais nos dados que possam ser úteis para os objetivos do negócio (geração de
insights) e identificamos possíveis relações e tendências que serão testadas nas fases seguintes
(formulação de hipóteses).

Gabarito: Errado

36.
(CEBRASPE (CESPE)/AGP (SEPLAG CE)/SEPLAG CE/Tecnologia da Informação/2024) No
CRISP-DM, os modelos de dados são definidos na etapa de preparação de dados, com a
utilização de técnicas de machine learning.

Comentários:

A definição e aplicação de modelos de dados, incluindo técnicas de machine learning, ocorrem
na fase de modelagem, que vem depois da preparação dos dados.

Gabarito: Errado

37.
(QUADRIX/Ana (CREF 3)/CREF 3/Tecnologia da Informação/2023) A única desvantagem
que impede o uso em larga escala do CRISP-DM é o seu alto custo, uma vez que os usuários
somente podem utilizá-lo após a aquisição da licença.

Comentários:

O CRISP-DM (Cross Industry Standard Process for Data Mining) é uma metodologia aberta e
gratuita, amplamente utilizada por organizações em todo o mundo sem a necessidade de
aquisição de uma licença. Ele foi desenvolvido para ser um padrão de uso geral para projetos de
mineração de dados e não apresenta custos diretos associados ao seu uso.

Gabarito: Errado

38.
(QUADRIX/Ana (CREF 3)/CREF 3/Tecnologia da Informação/2023) Modelagem e avaliação
são algumas das fases do ciclo do CRISP-DM.

Comentários:

O ciclo CRISP-DM é composto por seis fases principais:

1. Entendimento do Negócio
2. Entendimento dos Dados
3. Preparação dos Dados
4. Modelagem
5. Avaliação
6. Implantação

Gabarito: Certo

39.
(QUADRIX/Ana (CREF 3)/CREF 3/Tecnologia da Informação/2023) O entendimento do
negócio é a fase do ciclo do CRISP-DM que exige mais tempo em mineração de dados, pois
estima-se que essa etapa, geralmente, leve entre 50 e 70% do tempo e do esforço de um
projeto.

Comentários:

É lugar comum que a fase que geralmente consome maior parte do tempo e esforço em um
projeto de mineração de dados é a fase de preparação dos dados.

Gabarito: Errado

40.
(QUADRIX/Ana (CREF 3)/CREF 3/Tecnologia da Informação/2023) No ciclo do CRISP-DM,
a fase de implantação é a mais simples (jamais será um processo complexo), pois se resume à
execução de scripts.

Comentários:

A fase de implantação ocorre após a avaliação do modelo, quando os resultados da mineração
de dados ou aprendizado de máquina precisam ser aplicados ao ambiente operacional para
gerar valor para o negócio.

Usualmente em projetos a fase de implantação acaba sendo desafiadora, porque por mais que
tenhamos planejado e nos preparado para esse momento, é comum aparecerem desafios
práticos que não prevemos, resultando em altas cargas de trabalho e muita dor de cabeça na
equipe. Ou seja, geralmente é uma fase bem estressante (quem já implantou algo provavelmente
vai saber do que eu estou falando).

Gabarito: Errado

41.
(FUNDATEC/ANC (PROCERGS)/PROCERGS/Ciência de Dados/2023) Qual é a etapa de
modelagem da metodologia CRISP-DM na qual são tratados os valores nulos e pode ser
necessário fazer fusão com outros dados?

a) Entendimento do Negócio.

b) Preparação de Dados.

c) Modelagem.

d) Avaliação.

e) Implementação.

Comentários:

a) Errada. Essa etapa está focada na definição dos objetivos do negócio e na formulação de
problemas.

b) Correta. Na metodologia CRISP-DM, a fase de preparação de dados é onde os dados são
limpos, ajustados e transformados para estarem prontos para análise e modelagem.

c) Errada. A modelagem é a fase onde os algoritmos são aplicados aos dados previamente
preparados. O tratamento de valores nulos ou fusão de dados deve ser feito antes, na
preparação.

d) Errada. Avalia-se a qualidade e a relevância do modelo criado, mas essa fase não inclui ajustes
nos dados.

e) Errada. Envolve a aplicação prática dos modelos e insights obtidos, como integração em
sistemas operacionais ou relatórios.

Gabarito: B

42.
(CEBRASPE (CESPE)/AIS (EMPREL)/EMPREL/Banco de Dados/2023) No modelo CRISP-DM
(cross-industry standard process for data mining), a etapa que consiste em identificar se o modelo
escolhido está apto a cumprir os objetivos definidos na primeira etapa, o entendimento do
negócio, é denominada

a) entendimento dos dados.

b) preparação dos dados.

c) avaliação.

d) implantação.

e) modelagem.

Comentários:

a) Errada. Esta etapa foca em explorar e compreender os dados disponíveis, verificando sua
qualidade e estrutura, mas não avalia o modelo.

b) Errada. Envolve limpar, transformar e estruturar os dados para que possam ser usados na
modelagem, mas não avalia o desempenho do modelo.

c) Correta. A fase de avaliação tem como objetivo principal verificar se o modelo criado e os
resultados obtidos estão alinhados aos objetivos do negócio definidos na etapa de entendimento
do negócio.

d) Errada. Consiste na implementação do modelo aprovado em um ambiente operacional. O
processo de avaliação já foi concluído antes dessa etapa.

e) Errada. É a fase em que os algoritmos de mineração de dados são aplicados para construir o
modelo.

Gabarito: C

43.
(CEBRASPE (CESPE)/Ana TI (FUB)/FUB/2023) Na etapa de preparação de dados do
modelo CRISP-DM, ocorre a identificação dos dados existentes, com suas respectivas
características.

Comentários:

A identificação dos dados existentes e suas respectivas características ocorre na etapa de
entendimento dos dados.

Gabarito: Errado

44.
(FGV/AL (CAM DEP)/CAM DEP/Contador/2023) CRISP-DM (Cross Industry Standard
Process for Data Mining) é uma metodologia utilizada em projetos de Ciência dos Dados. De
acordo com esta metodologia, a definição do problema que será investigado por meio de
técnicas de mineração de dados ocorre na etapa

a) modeling.

b) evaluation.

c) data preparation.

d) data understanding.

e) business understanding.

Comentários:

Todas alternativas estão em português, exceto pela resposta correta. Acredito que o examinador
fez isso para “quebrar” os mnemônicos dos alunos.

Bom, é a etapa de entendimento do negócio (business understanding) é onde ocorre a definição
do problema a ser investigado e os objetivos que devem ser alcançados com o projeto de
mineração de dados.

Gabarito: E

45.
(CEBRASPE (CESPE)/ADP (DPE RO)/DPE RO/Administração/2022) No CRISP-DM, a fase
que se caracteriza pelas tarefas de limpar, construir, integrar e formatar os dados é a de

a) entendimento dos negócios.

b) entendimento dos dados.

c) preparação dos dados.

d) avaliação.

e) modelagem.

Comentários:

a) Errada. A etapa de entendimento dos negócios tem como foco identificar os objetivos e
requisitos do negócio para orientar o restante do processo de análise.

b) Errada. O entendimento dos dados envolve explorar e compreender os dados disponíveis,
verificando sua qualidade e estrutura, mas não inclui tarefas como limpeza ou formatação.

c) Correta. A preparação dos dados é a fase onde se realizam as tarefas de limpeza, construção,
integração e formatação dos dados para que possam ser usados na modelagem.

d) Errada. A avaliação tem como objetivo verificar se o modelo atende aos objetivos do negócio.

e) Errada. A modelagem é a fase onde se aplicam algoritmos de mineração de dados para criar
modelos, mas depende de os dados já estarem preparados.

Gabarito: C

46.
(FCC/AJ TRT23/TRT 23/Apoio Especializado/Tecnologia da Informação/2022) Considere
que o Tribunal Regional do Trabalho utiliza o modelo de referência CRISP-DM (Cross Industry
Standard Process for Data Mining).

Em um certo momento, uma equipe de Analistas está discutindo as seguintes questões relativas a
um projeto:

− Qual formato de data será utilizado: dd/mm/aaaa ou mm/dd/aaaa?

− Os dados advindos das diversas fontes, relativos a um mesmo conteúdo, são compatíveis entre
si?

− Os campos binários serão formatados com True e False ou terão que ser convertidos para 1 e
0?

− Após as análises descritivas, a média, a mediana, a moda e a quantidade dos dados estão de
acordo com as categorias definidas?

Com base nas questões apresentadas, a equipe está trabalhando na etapa do CRISP-DM
denominada

a) modelagem e implantação (Modeling and Deployment).

b) avaliação (Evaluation).

c) entendimento do negócio (Business Understanding).

d) limpeza das bases de dados (Database Cleaning).

e) preparação dos dados (Data Preparation).

Comentários:

No modelo CRISP-DM, a etapa de preparação dos dados envolve transformar, formatar, limpar e
estruturar os dados de forma que fiquem prontos para a análise e modelagem.

Vejam que as questões apresentadas estão diretamente relacionadas às atividades dessa etapa,
já que se deseja realizar a padronização de dados (formato de data), integração de dados
(compatibilidade de dados advindos de diversas fontes), transformar os dados (formatar campos
binários como true/false) e resumir os dados (média, mediana, moda e categorias definidas).

Gabarito: E

47.
(FGV/GTIFE (Sefaz AM)/SEFAZ AM/2022) CRISP-DM é um modelo de referência não
proprietário e tecnologicamente neutro que pode ser usado por iniciantes ou especialistas para
descrever o ciclo de vida de projetos de Mineração de Dados em seis fases distintas.

A terceira fase do modelo corresponde

a) à modelagem de fluxos de dados.

b) ao entendimento do negócio.

c) ao entendimento de dados.

d) à elicitação de requisitos.

e) à preparação de dados.

Comentários:

O ciclo CRISP-DM é composto por seis fases principais:

1. Entendimento do Negócio
2. Entendimento dos Dados
3. Preparação dos Dados
4. Modelagem
5. Avaliação
6. Implantação

Gabarito: E

48.
(FGV/AFCTE (Sefaz AM)/SEFAZ AM/2022) Leia o fragmento a seguir.

“CRISP-DM é um modelo de referência não proprietário, neutro, documentado e disponível na
Internet, sendo amplamente utilizado para descrever o ciclo de vida de projetos de Ciência de
Dados. O modelo é composto por seis fases: 1. entendimento do negócio; 2. _____; 3. _____; 4.
Modelagem; 5. _____ ; e 6. implantação”.

Assinale a opção cujos itens completam corretamente as lacunas do fragmento acima, na ordem
apresentada.

a) modelagem do negócio – limpeza de dados – testagem.

b) modelagem de requisitos – raspagem de dados – execução.

c) modelagem do negócio – mineração de dados – reexecução.

d) compreensão dos dados – preparação dos dados – avaliação.

e) mapeamento de metadados – mineração de dados – testagem.

Comentários:

O ciclo CRISP-DM é composto por seis fases principais:

1. Entendimento do Negócio
2. Entendimento dos Dados
3. Preparação dos Dados

4. Modelagem
5. Avaliação
6. Implantação

Gabarito: D

49.
(CEBRASPE (CESPE)/Esc Pol (PC PB)/PC PB/2022) A coleta de dados que serão
garimpados, na mineração de dados, é feita na etapa de

a) aplicação.

b) análise.

c) priorização.

d) mineração.

e) preparação.

Comentários:

a) Errada. A etapa de aplicação refere-se à utilização dos resultados obtidos no processo de
mineração de dados.

b) Errada. A análise pode ser parte de diversas etapas do processo, mas não é uma etapa por si
só.

c) Errada. A priorização não é uma etapa formal no processo de mineração de dados e não está
associada à coleta de dados.

d) Errada. A etapa de mineração é onde os modelos e algoritmos são aplicados para extrair
padrões e informações dos dados, mas ela pressupõe que os dados já tenham sido coletados e
preparados.

e) Correta. A preparação é a etapa onde os dados que serão utilizados na mineração são
coletados, limpos, transformados e organizados para estarem prontos para o uso nos modelos de
mineração.

Gabarito: E

50.
(QUADRIX/ATI (CRM SC)/CRM SC/2022) O modelo CRISP-DM é bastante utilizado graças à
sua rigidez quanto à execução de cada uma de suas fases; ele não permite que um projeto
retorne a uma etapa ou fase anterior, pois a sequência de fases é rigorosa e deve ser seguida.

Comentários:

O modelo CRISP-DM (Cross Industry Standard Process for Data Mining) não é rígido quanto à
execução de suas fases. Pelo contrário, ele é iterativo e flexível, permitindo que um projeto o
utilize de maneira adaptada conforme necessário. Essa característica é um dos pontos fortes do
CRISP-DM, pois reconhece que o processo de mineração de dados pode demandar revisões e
ajustes em diferentes etapas.

Gabarito: Errado

51.
(QUADRIX/ATI (CRM SC)/CRM SC/2022) No modelo CRISP-DM, a modelagem é uma das
fases mais importantes do processo, consistindo no conhecimento do domínio do negócio, ou
seja, no conhecimento e na compreensão dos objetivos do projeto de mineração a partir da
perspectiva do negócio.

Comentários:

No modelo CRISP-DM, a fase de entendimento do negócio corresponde ao conhecimento do
domínio do negócio e à definição e compreensão dos objetivos do projeto.

Gabarito: Errado

52.
(CEBRASPE (CESPE)/ATCG (MCom)/MCom/Tecnologia da Informação e de Engenharia
Senior/2022) No início de um processo de descoberta de conhecimento em bases de dados
(KDD), o CRISP-DM recomenda, em relação ao levantamento do hardware existente, que o
processo de KDD seja realizado em plataforma com arquitetura não expansível, que forneça
suporte e acesso somente à base de dados homogênea.

Comentários:

O modelo CRISP-DM não impõe restrições tecnológicas, como utilizar plataformas com
arquitetura não expansível ou bases de dados homogêneas.

Gabarito: Errado

53.
(CEBRASPE (CESPE)/ACE (TCE RJ)/TCE RJ/Controle Externo/Controle Externo/2021) A
fase de implantação do CRISP-DM (cross industry standard process for data mining) só deve
ocorrer após a avaliação do modelo construído para atingir os objetivos do negócio.

Comentários:

No modelo CRISP-DM, a fase de implantação (Deployment) só ocorre após a avaliação
(Evaluation) do modelo construído. Esse fluxo garante que o modelo tenha sido testado, validado
e esteja alinhado com os objetivos definidos na fase de entendimento do negócio (Business
Understanding).

Gabarito: Certo

54.
(CEBRASPE (CESPE)/ATM (Pref Aracaju)/Pref Aracaju/Abrangência Geral/2021) De acordo
com o modelo CRSP-DM, a seleção das técnicas que serão aplicadas nos dados selecionados
ocorre na fase de

a) modelagem.

b) entendimento dos dados.

c) entendimento do negócio.

d) avaliação.

e) preparação dos dados.

Comentários:

a) Correta. A seleção das técnicas ocorre na fase de modelagem, que é responsável por
identificar e aplicar os algoritmos ou métodos mais adequados para alcançar os objetivos

definidos no projeto. Essa etapa também inclui o ajuste de parâmetros e a validação inicial dos
modelos criados.

b) Errada. A fase de entendimento dos dados é dedicada à exploração e análise inicial dos dados
disponíveis, mas não envolve a escolha ou aplicação de técnicas específicas de mineração.

c) Errada. O entendimento do negócio é a fase em que os objetivos e requisitos do projeto são
definidos.

d) Errada. A avaliação ocorre após a modelagem, quando os resultados são verificados e
validados em relação aos objetivos do negócio.

e) Errada. A preparação dos dados se concentra na limpeza, transformação e formatação dos
dados para que estejam prontos para a modelagem.

Gabarito: A

## LISTA DE QUESTÕES

## Data Mining e seu conceito

1.
(CEBRASPE (CESPE)/Ana C&amp;T (AEB)/AEB/Cooperação Internacional/2025) Em business
intelligence, mineração de dados consiste em

a) processo analógico que cria dados oriundo de padrões inconsistentes entre variáveis, de
forma a validá-los com novos subconjuntos de dados.

b) processo analítico projetado para explorar grandes quantidades de dados na busca de
padrões consistentes e(ou) relacionamentos sistemáticos entre variáveis.

c) processo analítico que define o valor e a relação que, por sua vez, vão transformar a
informação em peça fundamental para um banco de dados relacional.

d) processo analógico que utiliza dados não estruturados para gerar padrões consistentes entre
uma ou mais variáveis, de forma a validá-los com novos subconjuntos de dados.

e) processo analítico que independe do valor e da relação que é capaz de transformar a
informação em peça fundamental para um banco de dados não relacional.

2.
(CEBRASPE (CESPE)/Tecno P1 (CTI)/CTI/Indústria 4.0 e Governo Digital/Sistemas
Ciberfísicos e Cidades Inteligentes/2024) A análise preditiva de dados se diferencia da análise
prescritiva de dados porque a primeira tem o objetivo de determinar as consequências das
decisões tomadas, enquanto a segunda utiliza fatos do passado para visualizar e prever eventos
futuros.

3.
(IDECAN/Of (PM ES)/PM ES/Combatente/2024) No aprendizado de máquinas, o modelo
que reside na identificação de propriedades intrínsecas aos dados de entrada, de maneira a
construir representações desses dados que possam servir a diversos propósitos, como auxílio à
tomada de decisões ou descoberta de conhecimento, é conhecido como modelo:

a) Conexionistas.

b) Descritivo.

c) Preditivo.

d) Probabilístico.

e) Simbólico.

4.
(FGV/ATRFB/SRFB/Geral/2023) A análise de dados prescritiva é uma técnica de análise de
dados que

a) se concentra na descrição de dados passados e presentes, com o objetivo de encontrar
tendências e padrões que possam ser usados para prever eventos futuros.

b) usa modelos matemáticos e estatísticos para identificar a melhor solução possível para um
determinado problema.

c) se concentra em identificar as causas subjacentes de um problema e em encontrar maneiras de
corrigi-las.

d) usa algoritmos de aprendizado de máquina para identificar padrões e tendências em grandes
conjuntos de dados.

e) usa modelos de aprendizado profundo para identificar padrões em dados não estruturados.

5.
(CEBRASPE (CESPE)/Ana TI (DATAPREV)/DATAPREV/Análise de Negócios de TI/2023) O
objetivo das análises prescritivas é identificar ações recomendadas para otimização de decisões
futuras.

6.
(FUVEST/Ana Sis (USP)/USP/Ciência de Dados/2023) Em Mineração de Dados, após o
pré-processamento dos dados, inicia-se a fase de análises. Para esta fase há análises descritivas e
análises preditivas.

Quais das tarefas a seguir são todas análises descritivas?

a) Identificação de outliers, regressão e clusterização.

b) Classificação supervisionada, identificação de regras de associação e análise de correlação.

c) Underfitting, clusterização e sumarização.

d) Visualização, sumarização e identificação de regras de associação.

e) Sumarização, regressão e visualização.

7.
(SELECON/EDTND (AMAZUL)/AMAZUL/Engenheiro de Computação/2022) Na área da
gestão de negócios, um determinado processo vem se tornando cada vez mais comum. Esse
processo apresenta as características listadas a seguir:

I. Representa uma categoria de ferramentas de análise denominada open-end, que permite ao
usuário avaliar tendências e padrões não conhecidos entre os dados e que se utiliza das mais
modernas técnicas de computação, como redes neurais, algoritmos genéticos e lógica nebulosa.

II. É um processo em que a tecnologia é empregada para localizar padrões, conexões,
correlações ou anomalias em uma grande quantidade de dados, permitindo encontrar
problemas, hipóteses e oportunidades com mais facilidade.

III. Constitui uma técnica que gera insights que resultam em vantagens competitivas para uma
empresa. Os dados processados podem motivar ações corretivas ou mudanças estratégicas,
como alterações no portfólio de produtos e direcionamento de investimentos.

Esse tipo de processo é conhecido como:

a) Data Modeling

b) Data Mining

c) Data Tools

d) Data Mart

8.
(QUADRIX/Ana (CFFa)/CFFa/Tecnologia da Informação/2022) O uso da mineração de
dados permite, por exemplo, que as empresas mais bem planejem a logística de distribuição dos
seus produtos, prevendo picos nas vendas.

9.
(FGV/AF (SEFAZ PR)/SEFAZ PR/2025) Uma empresa contratou um analista de dados para
realizar o tratamento de suas bases de dados.

Em um primeiro contato com essas bases, o analista utilizou uma técnica de remodelagem para
resumir os dados, agrupando-os e aplicando funções como soma, média, contagem, máximo ou
mínimo.

Assinale a opção que indica a técnica que foi utilizada pelo analista de dados.

a) Pivotamento.

b) Derretimento.

c) Agregação.

d) Junção.

## Data Mining

10.
(CEBRASPE (CESPE)/Ana CT I (CNPq)/CNPq/Gestão de Dados Corporativos/2024)
Mineração de dados combina técnicas de descoberta de conhecimento com técnicas de
implementação eficientes que permitem seu uso em bancos de dados extremamente grandes.

11.
(CEBRASPE (CESPE)/Tecno P2 (CTI)/CTI/Tecnologias Habilitadoras/Inteligência Artificial e
Ciência de Dados/2024) Em data mining, um mesmo processo de análise de dados pode

12.
(CEBRASPE (CESPE)/Tecno P1 (CTI)/CTI/Indústria 4.0 e Governo Digital/Sistemas
Ciberfísicos e Cidades Inteligentes/2024) Entre as técnicas de mineração de dados, a análise de
sequência e caminho se caracteriza pelo processo de encontrar relacionamentos entre dois
conjuntos de dados diferentes e aparentemente não relacionados.

13.
(CEBRASPE (CESPE)/ERSTT (ANTT)/ANTT/"Sem Área"/2024) A mineração de dados é
comumente classificada por sua capacidade de realizar determinadas tarefas, entre as quais está
a estimação, que, embora similar à classificação, é usada quando o registro é identificado por um
valor numérico e não um categórico.

14.
(VUNESP/ATI (Pref Santo André)/Pref Santo André/Administração de Bancos de
Dados/2024) Um dos conceitos e ferramentas bastante utilizados em sistemas de suporte à
decisão é o de data mining, que implica na

a) submissão do banco de dados da empresa a uma comissão especial de avaliação da qualidade
dos dados.

b) aplicação de técnicas de normalização de tabelas contidas em bancos de dados relacionais.

c) aplicação de técnicas de melhoria do desempenho em consultas SQL feitas em bancos de
dados relacionais.

d) utilização de técnicas computadorizadas de exploração de grandes volumes de dados, com a
finalidade de descobrir novos padrões e relações, colaborando na tomada de decisões.

==5460==

e) transformação do sistema de banco de dados da empresa em um sistema de tempo real,
voltado a aplicações críticas.

15.
(FGV/AFFC (STN)/STN/Tecnologia da Informação/Operação e Infraestrutura/2024) Assinale
a lista que contém somente técnicas tipicamente aplicadas em operações de data mining.

a) Associação, Agrupamento e Regressão.

b) Carga, Reconhecimento de padrões, e Árvores de Decisão.

c) Extração, Transformação e Carga.

d) Limpeza, Agrupamento e Apresentação.

e) Modelagem dinâmica, Rastreamento, Classificação.

16.
(CEBRASPE
(CESPE)/Ana
(CNMP)/CNMP/Tecnologia
da
Informação
e
Comunicação/Suporte e Infraestrutura/2023) O data mining é um processo usado para extrair e
analisar informações que revelam padrões ou tendências estratégicas do negócio.

17.
(Marinha/QT (Marinha)/Marinha/Informática/2023) De acordo com Barbiere (2011), os
conceitos de garimpagem ou mineração de dados (data mining) têm sido amplamente utilizados
em aplicações comerciais com o objetivo de buscar correlações ocultas em grandes volumes de
dados. Essas correlações nem sempre são evidentes durante o tratamento cotidiano dos sistemas
de informações, e a técnica de data mining se mostra útil na identificação de padrões e
tendências relevantes para a tomada de decisões. Em relação à fase de análise, segundo o autor,
quais são as técnicas básicas definidas para o processo de garimpagem de dados?

a) Redes neurais, análise de regressão, classificação e agregação.

b) Análise de regressão, árvores de decisão e análise de conglomerados.

c) Classificação, associação, padrões sequenciais e árvores de decisão.

d) Associação, padrões sequenciais, classificação e agregação.

e) Análise de regressão, associação e árvores de decisão.

18.
(CEBRASPE (CESPE)/Ana TI (DATAPREV)/DATAPREV/Engenharia de Dados/2023) A
mineração de processos é um ramo da mineração de dados que utiliza inteligência de negócios
para prever tendências, ajudando tomadores de decisão a estudarem o impacto de suas decisões
no futuro da organização.

19.
(CEBRASPE (CESPE)/Ana TI (DATAPREV)/DATAPREV/Sustentação Tecnológica/2023) A
mineração de dados é um processo cujos alicerces são aprendizado de máquina, análises
estatísticas e volumes de dados.

20.
(CEBRASPE (CESPE)/Ana Jr (TBG)/TBG/Comercialização/2023) A mineração de dados não
se limita às técnicas de obtenção de dados, envolvendo também a observação de padrões nos
dados obtidos.

21.
(CEBRASPE (CESPE)/PPNS (PETROBRAS)/PETROBRAS/Análise de Sistemas/Processos de
Negócio/2022) A mineração de dados oferece previsões instantâneas, mas requer uma base de
dados dedicada e separada.

22.
(CEBRASPE (CESPE)/AAAJ (DP DF)/DP DF/Informática Banco de Dados/2022) A mineração
de dados tem como objetivos identificar padrões nos dados, classificar dados de partição em
classes e otimizar o uso de recursos limitados, como tempo, espaço e materiais.

23.
(CEBRASPE (CESPE)/AAAJ (DP DF)/DP DF/Informática Redes/2022) A análise de data
mining por padrão sequencial visa à identificação de fatos que geram outros fatos, sempre
ocorrendo causa e consequência em momentos adjacentes.

24.
(CEBRASPE (CESPE)/Tec (FUB)/FUB/Tecnologia da Informação/2022) Sistemas de data
mining viabilizam a extração de novos padrões significativos de informação que não seriam
necessariamente encontrados por meio de meras consultas ou processamento de dados ou
metadados no data warehouse.

25.
(FEPESE/AFRM (Pref Criciúma)/Pref Criciúma/2022) Quais tipos de conhecimento podem
ser descobertos empregando técnicas clássicas de mineração de dados?

1.Regras de Associação

2.Hierarquias de classificação

3.Padrões sequenciais ou de série temporal

4.Conhecimento implícito, emergente e não estruturado

5.Agrupamentos e segmentações

Assinale a alternativa que indica todas as afirmativas corretas.

a) São corretas apenas as afirmativas 3 e 5.

b) São corretas apenas as afirmativas 1, 2, 3 e 4.

c) São corretas apenas as afirmativas 1, 2, 3 e 5.

d) São corretas apenas as afirmativas 2, 3, 4 e 5.

e) São corretas as afirmativas 1, 2, 3, 4 e 5.

26.
(CEBRASPE (CESPE)/AFCA (SEFAZ AL)/SEFAZ AL/2021) Mineração de texto refere-se ao
processo de extração automática de informações relevantes, novas e interessantes.

27.
(CEBRASPE (CESPE)/ProTI (ME)/ME/Atividades Técnicas de Complexidade Gerencial, de
Tecnologia da Informação e de Engenharia Sênior/Ciência de Dados/2020) O objetivo da técnica
de sequência de tempo é identificar a ocorrência de dois eventos diferentes no mesmo
momento.

28.
(CEBRASPE (CESPE)/ProTI (ME)/ME/Atividades Técnicas de Complexidade Gerencial, de
Tecnologia da Informação e de Engenharia Sênior/Ciência de Dados/2020) A mineração de
textos utiliza técnicas diferentes da mineração de dados, tendo em vista que os textos
representam um tipo específico de dado.

## Fases do Knowledge Discovery in Databases

29.
(Instituto Consulplan/Ana (DPE PR)/DPE PR/Informática/2024) Mineração de dados (Data
Mining) pode ser definido como o processo de analisar bases de dados de grande porte, a fim de
descobrir informações por meio de consultas. Tendo em vista as fases do processo de KDD
(Knowlegde Discovery in Databases, descoberta de conhecimento nos bancos de dados) utilizado
em Data Mining, marque V para as afirmativas verdadeiras e F para as falsas.

( ) Mineração de dados: fase responsável pela escolha dos algoritmos a serem aplicados para a
descoberta de informações. Essa escolha depende fundamentalmente dos objetivos do processo
de KDD.

( ) Preparação dos dados: nessa fase, os dados necessários para a solução de um problema são
selecionados na base de dados. Essa etapa inicia-se a partir do agrupamento organizado de uma
grande quantidade de dados de uma ou mais bases de dados, selecionando somente aqueles
que são relevantes.

( ) Limpeza dos dados: essa fase consome grande parte do esforço necessário para todo o
processo devido à dificuldade de integrar bases de dados heterogêneas.

( ) Interpretação: ao final do processo, o sistema de mineração de dados gera um relatório das
descobertas, que passa então a ser interpretado por analistas de mineração. Somente após essa
interpretação obtém-se o conhecimento.

A sequência está correta em

a) V, V, V, V.

b) V, F, V, F.

c) F, V, F, V.

d) F, F, F, F.

30.
(CEBRASPE (CESPE)/Tecno P2 (CTI)/CTI/Tecnologias Habilitadoras/Inteligência Artificial e
Ciência de Dados/2024) O objetivo da classificação na fase de pré-processamento é o
particionamento de um grupo de documentos em subgrupos, com características em comum.

31.
(CEBRASPE (CESPE)/Tecno P2 (CTI)/CTI/Tecnologias Habilitadoras/Inteligência Artificial e
Ciência de Dados/2024) Em mineração de dados, interpretação e explanação consiste em filtrar o
conjunto de dados por meio de mecanismo que varia de acordo com a técnica de mineração
utilizada.

32.
(FGV/Agente da Fiscalização (TCE SP)/Tecnologia da Informação (TI)/2023) No contexto de
Descoberta do Conhecimento em Bancos de Dados - Knowledge Discovery in Database (KDD), o
analista de dados João deverá analisar um conjunto de dados preparado e consolidado com
dados financeiros sobre transações, saldos de contas e históricos de crédito de clientes ao longo
dos últimos anos. O objetivo é identificar possíveis anomalias ou atividades suspeitas que possam
indicar fraudes.

Para isso, a fase do processo KDD que João deverá utilizar é:

a) seleção de dados;

b) mineração de dados;

c) transformação de dados;

d) interpretação de resultados;

e) pré-processamento de dados.

33.
(Com. Org. (IFSP)/Ana TI (IF SP)/IF SP/Ciência de Dados/2022) Quando se inicia os
trabalhos de aprendizado em bases de dados é comum identificar problemas na base de dados.
Por isso, na etapa de pré-processamento, os dados passam por recursos de limpeza, integração
de bases de dados, redução na quantidade de atributos ou dados, transformação nos formatos
dos dados ou discretização de alguns. Considerando esses recursos, indique a alternativa
incorreta que os define.

a) Integração: união de múltiplas fontes em um único local, como ocorre em um data ware-house.

b) Limpeza: é utilizada apenas para eliminar registros que apresentam problemas.

c) Redução: reduzir a dimensão da base de dados, como por exemplo, utilizando algoritmos de
clusterização ou eliminando atributos redundantes.

d) Transformação: padronização ou transformação dos dados em um formato passível de serem
utilizados por diferentes técnicas de aprendizado de máquina.

## CRISP-DM

34.
(CEBRASPE (CESPE)/TJ TST/TST/Apoio Especializado/Programação/2024) A fase do
CRISP-DM em que se dá a aplicação das técnicas de mineração de dados propriamente ditas é
denominada

a) preparação dos dados.

b) entendimento dos dados.

c) implantação.

d) modelagem.

e) avaliação.

35.
(CEBRASPE (CESPE)/ERAC (ANAC)/ANAC/Qualquer Área de Formação/2024) No modelo
CRISP-DM, a fase de preparação dos dados é caracterizada por atividades como análise da
qualidade dos dados, exploração dos dados, geração dos primeiros insights e formulação de
hipóteses.

36.
(CEBRASPE (CESPE)/AGP (SEPLAG CE)/SEPLAG CE/Tecnologia da Informação/2024) No
CRISP-DM, os modelos de dados são definidos na etapa de preparação de dados, com a
utilização de técnicas de machine learning.

37.
(QUADRIX/Ana (CREF 3)/CREF 3/Tecnologia da Informação/2023) A única desvantagem
que impede o uso em larga escala do CRISP-DM é o seu alto custo, uma vez que os usuários
somente podem utilizá-lo após a aquisição da licença.

38.
(QUADRIX/Ana (CREF 3)/CREF 3/Tecnologia da Informação/2023) Modelagem e avaliação
são algumas das fases do ciclo do CRISP-DM.

39.
(QUADRIX/Ana (CREF 3)/CREF 3/Tecnologia da Informação/2023) O entendimento do
negócio é a fase do ciclo do CRISP-DM que exige mais tempo em mineração de dados, pois
estima-se que essa etapa, geralmente, leve entre 50 e 70% do tempo e do esforço de um
projeto.

40.
(QUADRIX/Ana (CREF 3)/CREF 3/Tecnologia da Informação/2023) No ciclo do CRISP-DM,
a fase de implantação é a mais simples (jamais será um processo complexo), pois se resume à
execução de scripts.

41.
(FUNDATEC/ANC (PROCERGS)/PROCERGS/Ciência de Dados/2023) Qual é a etapa de
modelagem da metodologia CRISP-DM na qual são tratados os valores nulos e pode ser
necessário fazer fusão com outros dados?

a) Entendimento do Negócio.

b) Preparação de Dados.

c) Modelagem.

d) Avaliação.

e) Implementação.

42.
(CEBRASPE (CESPE)/AIS (EMPREL)/EMPREL/Banco de Dados/2023) No modelo CRISP-DM
(cross-industry standard process for data mining), a etapa que consiste em identificar se o modelo
escolhido está apto a cumprir os objetivos definidos na primeira etapa, o entendimento do
negócio, é denominada

a) entendimento dos dados.

b) preparação dos dados.

c) avaliação.

d) implantação.

e) modelagem.

43.
(CEBRASPE (CESPE)/Ana TI (FUB)/FUB/2023) Na etapa de preparação de dados do
modelo CRISP-DM, ocorre a identificação dos dados existentes, com suas respectivas
características.

44.
(FGV/AL (CAM DEP)/CAM DEP/Contador/2023) CRISP-DM (Cross Industry Standard
Process for Data Mining) é uma metodologia utilizada em projetos de Ciência dos Dados. De
acordo com esta metodologia, a definição do problema que será investigado por meio de
técnicas de mineração de dados ocorre na etapa

a) modeling.

b) evaluation.

c) data preparation.

d) data understanding.

e) business understanding.

45.
(CEBRASPE (CESPE)/ADP (DPE RO)/DPE RO/Administração/2022) No CRISP-DM, a fase
que se caracteriza pelas tarefas de limpar, construir, integrar e formatar os dados é a de

a) entendimento dos negócios.

b) entendimento dos dados.

c) preparação dos dados.

d) avaliação.

e) modelagem.

46.
(FCC/AJ TRT23/TRT 23/Apoio Especializado/Tecnologia da Informação/2022) Considere
que o Tribunal Regional do Trabalho utiliza o modelo de referência CRISP-DM (Cross Industry
Standard Process for Data Mining).

Em um certo momento, uma equipe de Analistas está discutindo as seguintes questões relativas a
um projeto:

− Qual formato de data será utilizado: dd/mm/aaaa ou mm/dd/aaaa?

− Os dados advindos das diversas fontes, relativos a um mesmo conteúdo, são compatíveis entre
si?

− Os campos binários serão formatados com True e False ou terão que ser convertidos para 1 e
0?

− Após as análises descritivas, a média, a mediana, a moda e a quantidade dos dados estão de
acordo com as categorias definidas?

Com base nas questões apresentadas, a equipe está trabalhando na etapa do CRISP-DM
denominada

a) modelagem e implantação (Modeling and Deployment).

b) avaliação (Evaluation).

c) entendimento do negócio (Business Understanding).

d) limpeza das bases de dados (Database Cleaning).

e) preparação dos dados (Data Preparation).

47.
(FGV/GTIFE (Sefaz AM)/SEFAZ AM/2022) CRISP-DM é um modelo de referência não
proprietário e tecnologicamente neutro que pode ser usado por iniciantes ou especialistas para
descrever o ciclo de vida de projetos de Mineração de Dados em seis fases distintas.

A terceira fase do modelo corresponde

a) à modelagem de fluxos de dados.

b) ao entendimento do negócio.

c) ao entendimento de dados.

d) à elicitação de requisitos.

e) à preparação de dados.

48.
(FGV/AFCTE (Sefaz AM)/SEFAZ AM/2022) Leia o fragmento a seguir.

“CRISP-DM é um modelo de referência não proprietário, neutro, documentado e disponível na
Internet, sendo amplamente utilizado para descrever o ciclo de vida de projetos de Ciência de
Dados. O modelo é composto por seis fases: 1. entendimento do negócio; 2. _____; 3. _____; 4.
Modelagem; 5. _____ ; e 6. implantação”.

Assinale a opção cujos itens completam corretamente as lacunas do fragmento acima, na ordem
apresentada.

a) modelagem do negócio – limpeza de dados – testagem.

b) modelagem de requisitos – raspagem de dados – execução.

c) modelagem do negócio – mineração de dados – reexecução.

d) compreensão dos dados – preparação dos dados – avaliação.

e) mapeamento de metadados – mineração de dados – testagem.

49.
(CEBRASPE (CESPE)/Esc Pol (PC PB)/PC PB/2022) A coleta de dados que serão
garimpados, na mineração de dados, é feita na etapa de

a) aplicação.

b) análise.

c) priorização.

d) mineração.

e) preparação.

50.
(QUADRIX/ATI (CRM SC)/CRM SC/2022) O modelo CRISP-DM é bastante utilizado graças à
sua rigidez quanto à execução de cada uma de suas fases; ele não permite que um projeto
retorne a uma etapa ou fase anterior, pois a sequência de fases é rigorosa e deve ser seguida.

51.
(QUADRIX/ATI (CRM SC)/CRM SC/2022) No modelo CRISP-DM, a modelagem é uma das
fases mais importantes do processo, consistindo no conhecimento do domínio do negócio, ou

seja, no conhecimento e na compreensão dos objetivos do projeto de mineração a partir da
perspectiva do negócio.

52.
(CEBRASPE (CESPE)/ATCG (MCom)/MCom/Tecnologia da Informação e de Engenharia
Senior/2022) No início de um processo de descoberta de conhecimento em bases de dados
(KDD), o CRISP-DM recomenda, em relação ao levantamento do hardware existente, que o
processo de KDD seja realizado em plataforma com arquitetura não expansível, que forneça
suporte e acesso somente à base de dados homogênea.

53.
(CEBRASPE (CESPE)/ACE (TCE RJ)/TCE RJ/Controle Externo/Controle Externo/2021) A
fase de implantação do CRISP-DM (cross industry standard process for data mining) só deve
ocorrer após a avaliação do modelo construído para atingir os objetivos do negócio.

54.
(CEBRASPE (CESPE)/ATM (Pref Aracaju)/Pref Aracaju/Abrangência Geral/2021) De acordo
com o modelo CRSP-DM, a seleção das técnicas que serão aplicadas nos dados selecionados
ocorre na fase de

a) modelagem.

b) entendimento dos dados.

c) entendimento do negócio.

d) avaliação.

e) preparação dos dados.

## GABARITO

1. B
2. Errado
3. B
4. B
5. Certo
6. D
7. B
8. Certo
9. C
10.Certo
11.Errado
12.Errado
13.Certo
14.D
15.A
16.Certo
17.D
18.Errado
19.Certo

20.Certo
21.Errado
22.Certo
23.Errado
24.Certo
25.C
26.Certo
27.Errado
28.Errado
29.A
30.Errado
31.Errado
32.B
33.B
34.D
35.Errado
36.Errado
37.Errado
38.Certo

39.Errado
40.Errado
41.B
42.C
43.Errado
44.E
45.C
46.E
47.E
48.D
49.E
50.Errado
51.Errado
52.Errado
53.Certo
54.A

## Text Mining

Text Mining se trata do processo de extrair informação de qualidade de textos. Ou seja, aplicar
técnicas de mineração de dados para extrair informação e padrões de grandes coleções de
textos.

O grande problema aqui se funda na falta de formato rígido, já que os textos são
majoritariamente não estruturados, e, consequentemente, dados de difícil compreensão por
computadores.

Ao trabalhar com dados, podemos nos deparar com dados:

Estruturados, como dados em tabelas com colunas fixas, os quais computadores
“entendem” facilmente por algoritmos.

Semiestruturados: têm marcação, mas o conteúdo varia (ex.: XML, JSON, HTML).

Não estruturados: sem formato rígido, principalmente texto (livros, e-mails,
resenhas, sites, redes sociais) e mídias ricas (áudio, vídeo, imagem).

De todo modo, o ciclo básico de text mining passa por transformar texto em estrutura (ex.:
transformar frases em listas de palavras, vetores numéricos, entidades nomeadas), descobrir
padrões nesses dados estruturados (classificar, agrupar, detectar relações) e avaliar e interpretar
os resultados para gerar insights (resumos, indicadores, categorias).

A seguir, vamos estudar as tarefas mais comuns pretendidas com o texto mining:

Tarefa
Explicação
Exemplo

Extração de

conceitos
(entidades)

Identificar
e
rotular
entidades
nomeadas (pessoas, organizações,
lugares, datas etc.) em um texto.

“A Apple anunciou em Cupertino…”
→ Apple = ORG, Cupertino = LOC.

Relações entre

entidades

Detectar relações semânticas entre
entidades extraídas.

Tim Cook lidera a Apple.” → (Tim
Cook, lidera, Apple)

Descoberta de

taxonomias

Extrair
e
organizar
termos
em
hierarquias/ontologias
(tópicos
gerais → subtemas)

De um acervo esportivo: Esporte →
Futebol → Campeonatos (Brasileirão,
Champions League).

Análise de
sentimento

Estimar a polaridade/opinião ou
emoção de um trecho

“O produto é incrível!” → positivo;
“Entrega atrasou e veio errado.” →
negativo.

Tarefa
Explicação
Exemplo

Categorização

de textos

Atribuir
rótulos
pré-definidos
a
documentos
(classificação
supervisionada)

E-mails
classificados
em:
suporte,
faturamento, vendas.

Clustering
(agrupamento)

Agrupar textos semelhantes sem
rótulos prévios para descobrir temas

Reviews de celular formam clusters
como bateria, câmera, preço.

Sumarização

Condensar um texto preservando as
ideias principais:
Extrativa:
seleciona
e
junta
trechos/sentenças do próprio texto
original
Abstrativa: reformula com novas
frases, condensando as ideias com
“palavras próprias”

Artigo de 1.500 palavras virando um
resumo
de
3–5
frases
com
os
pontos-chave.

(CEBRASPE (CESPE)/TJ TRE RJ/TRE RJ/Apoio Especializado/Programação de Sistemas/2012)
Text mining é o processo que utiliza métodos para navegar, organizar, encontrar e descobrir
informações em bases textuais escritas em linguagem natural. Com text mining é possível
manipular mais facilmente informações não estruturadas, tais como notícias, textos em websites,
blogs e documentos em geral.

Comentários:

Text mining é o uso de métodos para explorar bases textuais em linguagem natural e extrair
informação útil, tornando manipuláveis dados não estruturados como notícias, sites, blogs e
documentos. Vale lembrar que, além de “navegar” e “encontrar”, o processo costuma incluir
estruturar o texto (pré-processamento e representação), descobrir padrões (entidades, relações,
tópicos, sentimento, classificação/agrupamento, sumarização) e avaliar resultados, sendo uma
aplicação prática orientada a gerar insights em larga escala.

Gabarito: Certo

(CEBRASPE (CESPE)/AFCA (SEFAZ AL)/SEFAZ AL/2021) Mineração de texto refere-se ao
processo de extração automática de informações relevantes, novas e interessantes.

Comentários:

==5460==

Questão meio genérica. De qualquer forma, a mineração de texto (ou text mining), assim como
qualquer atividade de data mining, envolve a aplicação de técnicas para identificar padrões,
descobrir insights ocultos e extrair informações relevantes.

Gabarito: Certo
