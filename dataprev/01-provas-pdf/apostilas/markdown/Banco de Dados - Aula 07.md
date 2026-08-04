# Banco de Dados - Aula 07

## Índice

1) Big Data - Teoria
3

2) Big Data - Questões Comentadas
13

3) Big Data - Lista de Questões
20

## BIG DATA

## Conceitos Gerais

Com a evolução da internet, redes sociais e afins, os dados se tornaram bens extremamente
valiosos. O advento dessas novas tecnologias massificou a quantidade e o tipo de dados existentes
no mundo computacional, fazendo com que surgisse uma necessidade de armazenamento e
tratamento desses dados.
É nesse contexto que surge o Big Data. Ele nada mais é que um conjunto enorme de dados, dos
mais variados tipos, tamanhos e complexidades. Esses dados podem ser estruturados, não
estruturados, imagens, textos, diversas coisas. Principalmente no contexto de redes sociais, os
dados produzidos em geral são não estruturados.
O volume desses dados costuma ser tão grandes que técnicas de processamento tradicional não
servem para lidar com eles, já que a capacidade de um computador não seria suficiente para
processar todo esses dados.

Nesse contexto, usualmente são empregadas técnicas de
computação distribuída, que consiste numa conexão entre diversas
unidades computacionais, cada uma responsável por processar uma
quantidade de dados. Aqui, cada computador é chamado de nó,
ou node, e age como um trabalhador, realizando o processamento
dos dados. Esses nós são coordenados por um servidor, usualmente
chamado
de
mestre,
responsável
apenas
por
manter
o
funcionamento das máquinas. Esse modelo é conjunto de mestre e
nós é chamado de cluster.
Graças a essa estrutura, podemos ter uma escalabilidade horizontal, isso é, caso seja necessário
um maior poder de processamento, simplesmente alocamos mais máquinas para o cluster, sem
necessidade de realizar a chamada escalabilidade vertical, que envolve melhorar uma única
máquina.
O Big Data, para ser caracterizado como tal, deve obedecer a algumas características principais,
que determinam a sua estrutura e tipologia. Essas características são conhecidas como os 3 V’s -
Volume, Variedade e Velocidade.

- Volume: refere-se à quantidade de dados gerados e armazenados. O Big Data lida com

grandes quantidades de dados, que podem variar de terabytes a petabytes ou mais.

- Variedade: refere-se à diversidade dos tipos de dados gerados e armazenados. O Big Data

pode incluir diferentes tipos de dados, como dados estruturados (dados organizados em

tabelas e bancos de dados relacionais), dados semiestruturados (dados organizados, mas

não em um formato padrão, como arquivos XML ou JSON) e dados não estruturados (dados

não organizados, como texto, áudio, vídeo e imagens).

- Velocidade: refere-se à rapidez com que os dados são gerados e precisam ser processados

e analisados. O Big Data requer uma infraestrutura de processamento de dados que possa

lidar com grandes volumes de dados em alta velocidade. Por exemplo, a Netflix possui

pipelines de dados que processam mais de um petabyte de dados por dia.

(FGV/SEFAZ AM/2022) Leia o fragmento a seguir.
“Atualmente, no contexto do Big Data e Data Analytics, faz-se referência às características
enunciadas por pesquisadores e produtores de soluções como sendo um conjunto de cinco Vs.
Originalmente, a definição clássica de Big Data fez referência a três Vs fundamentais: _____, _____
e _____ de dados que demandam formas inovadoras e rentáveis de processamento da informação,
para melhor percepção e tomada de decisão.”
Assinale a opção cujos itens completam corretamente as lacunas do fragmento acima, na ordem
apresentada.
a) valor – variança – veracidade.
b) validade – velocidade – vocabulário.
c) valor – variabilidade – viscosidade.
d) variedade – velocidade – volume.
e) valor – volatilidade – volume.
Comentários:
Questão cobra conhecimentos acerca dos “3 V’s” do Big Data, que são Variedade, Volume e
Velocidade. A alternativa que traz corretamente os três é a letra D. (Gabarito: Letra D)

A doutrina tem evoluído, assim como as tecnologias, para caracterizar os Big Datas não mais em
3 características principais, e sim em 5 características, ou em 5 V’s. Além das três características
supracitadas, temos outras duas:

## Características do Big Data - 3 V's

### Volume

### Variedade

### Velocidade

- Valor: refere-se à capacidade de extrair informações úteis e significativas dos enormes
conjuntos de dados disponíveis. Não basta ter grandes quantidades de dados; é essencial
que esses dados sejam relevantes e ofereçam insights valiosos para os negócios ou para a
tomada de decisões.
- Veracidade: refere-se à confiabilidade e à qualidade dos dados. Com o crescimento
exponencial da quantidade de dados disponíveis, é fundamental garantir que esses dados
sejam precisos, confiáveis e livres de erros ou viés.

(CEBRASPE/CTI/2024) Com relação a Big Data, julgue o item seguinte.
Volume, variedade, velocidade, valor, veracidade, variabilidade e visualização são conceitos
abrangidos na definição de Big Data.
Comentários:
Bom, falei a vocês dos 5 Vs - mas existem diversos outros Vs na doutrina. Doutrinariamente
falando, a abordagem mais aceita é em 5 características, mas visualização não deixa de ser um
conceito abrangido pelo big data. Correta a afirmativa. (Gabarito: Certo)

(FGV/PREF BH/2024) Graças ao avanço tecnológico, a capacidade de armazenamento e produção
de dados digitais cresceu de forma exponencial, alcançado níveis que superam significativamente
as expectativas da sociedade de alguns anos atrás. Esses conjuntos de dados, que por sua
grandeza e complexidade demandam nova técnicas e tecnologias para o seu processamento, são
conhecidos como Big Data.
Sobre as características do Big Data, analise os itens a seguir.
I. Veracidade.
II. Valor.
III. Validade.
Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.

## Características do Big Data - 5 V's

### Volume

### Variedade

### Velocidade

### Valor

### Veracidade

c) II e III, apenas.
d) I, II e III.
Comentários:
A abordagem mais aceita é de 5 V\`s - Volume, Velocidade, Variedade, Veracidade e Valor.
Portanto, apenas I e II são características aceitas. (Gabarito: Letra B)

## Princípios das Transações

Vimos na aula de modelagem relacional que temos um conjunto específico de princípios para as
transações - o ACID. Porém aqui no Big Data, por termos dados estruturados, não estruturados e
semiestruturados convivendo em conjunto, isso limite o tipo de princípios utilizado nas transações.
Aqui a computação distribuída entra em destaque, carregando dois conjuntos de princípios ao Big
Data. O primeiro deles é o BASE: Basically Available, Soft State e Eventually Consistent. Vamos
ver o que é cada um desses princípios:

- Basicamente Disponível (Basically Available): O sistema deve permanecer operacional e
disponível para leitura e gravação, mesmo que isso signifique sacrificar a consistência
imediata dos dados.
- Estado Suave (Soft State): Os dados podem estar em estados transitórios ou inconsistentes
durante as atualizações, mas eventualmente convergem para um estado consistente.
- Eventualmente Consistência (Eventually Consistent): O sistema eventualmente se tornará
consistente, mas não necessariamente em tempo real. Isso implica que os dados podem ser
temporariamente inconsistentes, mas serão eventualmente reconciliados.

O segundo conjunto de princípios está mais associado aos bancos de dados NoSQL - mas, como
muitas vezes consultamos os dados no Big Data a partir dessas tecnologias, a aplicação dos
princípios pode se confundir. Trata-se do Teorema CAP - Consistency, Availability e Partition
Tolerance.

- Consistência (Consistency): todos os nós em um sistema distribuído veem os mesmos dados
ao mesmo tempo.
- Disponibilidade (Availability): Todos os pedidos de leitura e gravação recebem uma
resposta, mesmo em face de falhas de rede ou partições.

## Princípios BASE

### Basicamente

### Disponível

### Estado

### Suave

### Eventualmente Consistente

==5460==

- Tolerância à Partição (Partition Tolerance): O sistema continua a funcionar mesmo que a
comunicação entre os nós seja interrompida.

## Formas de Entrega

A "entrega" do Big Data refere-se à forma como as soluções e os serviços relacionados ao
processamento e armazenamento de grandes volumes de dados são disponibilizados aos usuários
e organizações. Existem várias opções de entrega, cada uma com suas características e
considerações específicas. Em termos de concursos públicos, temos 5 formas de entrega que você
precisa saber.

### On-Premise (Local)

A entrega on-premise refere-se a uma abordagem em que os sistemas de processamento e
armazenamento de dados são implantados e executados nas próprias instalações de uma
organização. Isso significa que todas as infraestruturas físicas, como servidores, dispositivos de
armazenamento e redes, são adquiridas, configuradas e mantidas pela própria empresa, em vez
de serem hospedadas e gerenciadas por um provedor externo.
Nesse modelo de entrega, a empresa mantém total controle sobre a infraestrutura de hardware e
software utilizada para processar e armazenar grandes volumes de dados. Os sistemas on-premise
geralmente envolvem o uso de clusters de servidores de alta capacidade e dispositivos de
armazenamento em massa, que podem ser escalados de acordo com as necessidades da empresa.
Entre as principais vantagens, podemos destacar:

- Controle total: a empresa tem total controle sobre a infraestrutura de Big Data, podendo
personalizar e adaptar a configuração para atender às suas necessidades específicas. Isso
inclui a escolha dos equipamentos, sistemas operacionais, bancos de dados e softwares de
análise.
- Segurança: a empresa pode implementar as medidas de segurança que considerar
necessárias para proteger seus dados, como firewalls, criptografia e monitoramento
constante. Além disso, como os dados são armazenados localmente, o risco de vazamento
de informações sensíveis é reduzido.

## Teorema CAP

### Consistência

### Disponibilidade

### Tolerância à Partição

- Desempenho: o modelo On-premise pode oferecer um desempenho melhor em termos de
velocidade e latência do que outros modelos, pois a infraestrutura está fisicamente próxima
dos usuários.
Por outro lado, este modelo também apresenta algumas desvantagens:

- Custo inicial elevado: a aquisição e instalação de equipamentos e softwares pode exigir um
investimento inicial alto, o que pode ser um obstáculo para empresas menores.
- Manutenção e atualização: a empresa é responsável por manter e atualizar todos os
equipamentos e softwares, o que pode exigir recursos de pessoal e tempo consideráveis.
- Escalabilidade limitada: a capacidade de processamento e armazenamento é limitada pela
capacidade dos servidores locais, o que pode dificultar a expansão da infraestrutura
conforme as necessidades da empresa crescem.

### Nuvem Pública

O modelo de entrega e distribuição de serviços de Big Data na nuvem pública é aquele em que a
infraestrutura é mantida por um provedor de serviços em nuvem, como a Amazon Web Services
(AWS), Microsoft Azure ou Google Cloud. Nesse modelo, a empresa contrata os recursos
necessários para suas operações, pagando apenas pelo uso, o que oferece mais flexibilidade e
escalabilidade.
Entre as principais vantagens do modelo de nuvem pública, podemos destacar:

- Escalabilidade: a empresa pode aumentar ou diminuir sua capacidade de processamento e
armazenamento conforme suas necessidades mudam, pagando apenas pelo uso dos
recursos adicionais.
- Redução de custos: o modelo de nuvem pública elimina a necessidade de investir em
equipamentos e softwares, reduzindo os custos de capital e de manutenção. Além disso, o
provedor de serviços em nuvem pode compartilhar os custos de infraestrutura entre vários
clientes, reduzindo os custos para cada um.
- Agilidade: a empresa pode iniciar novos projetos de Big Data rapidamente, sem precisar
passar pelo processo de aquisição e instalação de equipamentos e softwares. Isso pode
acelerar o tempo de lançamento no mercado e a resposta às mudanças nas necessidades
do negócio.
- Recursos atualizados: o provedor de serviços em nuvem é responsável por manter e
atualizar a infraestrutura, garantindo que a empresa tenha acesso aos recursos mais
recentes e avançados.
- Disponibilidade: a infraestrutura em nuvem é altamente disponível e resiliente, com
recursos de redundância e failover. Isso significa que a empresa pode contar com a
disponibilidade dos recursos de Big Data em caso de falhas em servidores ou outros
componentes da infraestrutura.

No entanto, o modelo de nuvem pública também apresenta algumas desvantagens, como:

- Segurança: a empresa precisa confiar no provedor de serviços em nuvem para garantir a
segurança de seus dados. Embora os provedores de serviços em nuvem tenham medidas
de segurança avançadas, ainda há riscos associados ao armazenamento de dados na nuvem.
- Dependência do provedor de serviços em nuvem: a empresa fica dependente do provedor
de serviços em nuvem para a disponibilidade e desempenho dos recursos de Big Data.
Problemas no provedor de serviços em nuvem podem afetar diretamente as operações da
empresa.
- Custos em longo prazo: embora a nuvem pública possa ser mais barata no curto prazo, os
custos podem aumentar ao longo do tempo, à medida que a empresa aumenta seu uso dos
recursos de Big Data.
Além disso, é bom que você saiba as maiores plataformas atuais de Nuvem Pública, pois podem
aparecer na sua prova. São elas:

- Amazon Web Services (AWS): A AWS oferece uma ampla gama de serviços de Big Data,
incluindo armazenamento, processamento, análise e visualização de dados. Os serviços
mais populares incluem Amazon S3, Amazon Redshift, Amazon EMR, Amazon Athena e
Amazon QuickSight.
- Microsoft Azure: O Azure é uma plataforma de nuvem da Microsoft que oferece serviços
de Big Data, como o Azure Data Lake Storage, o Azure HDInsight, o Azure Stream Analytics
e o Power BI para análise de dados.
- Google Cloud Platform (GCP): O GCP é uma plataforma de nuvem da Google que oferece
serviços de Big Data, incluindo Google BigQuery para armazenamento e análise de dados,
Google Cloud Storage para armazenamento de objetos, Google Dataproc para
processamento de Big Data e o Google Data Studio para visualização de dados.
- IBM Cloud: A IBM oferece uma ampla gama de serviços de Big Data na nuvem, incluindo o
IBM Watson Studio para análise e modelagem de dados, o IBM Cloud Object Storage para
armazenamento de objetos e o IBM Cloud Pak for Data para gerenciamento e análise de
dados.
- Oracle Cloud: A Oracle oferece uma plataforma de nuvem para Big Data que inclui serviços
como o Oracle Autonomous Data Warehouse, o Oracle Big Data Service e o Oracle
Analytics Cloud para análise e visualização de dados.

### Nuvem Privada

O modelo de entrega e distribuição de serviços de Big Data em nuvem privada é aquele em que
a infraestrutura é mantida e gerenciada internamente pela empresa em seus próprios servidores
e data centers, numa nuvem criada e mantida pela própria empresa. Nesse modelo, a empresa
tem total controle sobre a infraestrutura e os dados, mas também precisa arcar com os custos de
investimento, manutenção e atualização da infraestrutura.

Entre as principais vantagens do modelo de nuvem privada, podemos destacar:

- Controle: a empresa tem total controle sobre a infraestrutura e os dados, o que pode ser
importante em setores regulamentados, como saúde, financeiro ou governamental.
- Segurança: a empresa pode implementar medidas de segurança personalizadas de acordo
com suas necessidades e exigências regulatórias, o que pode oferecer um nível de
segurança mais alto do que o modelo de nuvem pública.
- Personalização: a empresa pode personalizar a infraestrutura e os softwares de Big Data de
acordo com suas necessidades específicas, o que pode oferecer um desempenho e
eficiência maiores.
- Custo em longo prazo: embora a nuvem privada exija investimentos iniciais mais altos, pode
ser mais econômica a longo prazo, à medida que a empresa evita as taxas de uso da nuvem
pública.
No entanto, o modelo de nuvem privada também apresenta algumas desvantagens, como:

- Custo em curto prazo: o modelo de nuvem privada pode exigir investimentos iniciais
significativos em hardware, software e pessoal, o que pode ser uma barreira para pequenas
empresas.
- Escalabilidade: a empresa pode enfrentar desafios para escalar sua infraestrutura de Big
Data, à medida que suas necessidades crescem, já que precisa adquirir e configurar novos
equipamentos e softwares.
- Agilidade: a empresa pode levar mais tempo para iniciar novos projetos de Big Data, já que
precisa passar pelo processo de aquisição e instalação de equipamentos e softwares.

### Nuvem Híbrida

O modelo de entrega e distribuição de serviços de Big Data em nuvem híbrida combina os
recursos e serviços de nuvem pública e privada em uma única solução. Nesse modelo, a empresa
pode usar a nuvem pública para processamento de cargas de trabalho intensivas ou imprevisíveis,
enquanto mantém seus dados mais sensíveis em uma nuvem privada, garantindo maior segurança
e controle.
Entre as principais vantagens do modelo de nuvem híbrida, podemos destacar:

- Flexibilidade: a empresa pode usar a nuvem pública para lidar com cargas de trabalho
sazonais ou imprevisíveis, o que pode oferecer mais eficiência e economia de custos.
- Controle: a empresa pode manter seus dados mais sensíveis em uma nuvem privada,
garantindo maior controle e segurança.

- Escalabilidade: a empresa pode escalar sua infraestrutura de Big Data facilmente, usando a
nuvem pública para processamento intensivo ou imprevisível, enquanto mantém seus dados
em uma nuvem privada.
- Economia: a empresa pode economizar em custos de infraestrutura, usando a nuvem
pública quando necessário, enquanto mantém seus dados mais sensíveis em uma nuvem
privada.
No entanto, o modelo de nuvem híbrida também apresenta algumas desvantagens, como:

- Complexidade: a empresa pode enfrentar desafios para integrar e gerenciar a nuvem
pública e privada em uma única solução.
- Segurança: a empresa precisa garantir que seus dados sejam protegidos adequadamente,
tanto na nuvem pública quanto privada.
- Custo: a empresa pode precisar investir em soluções de gerenciamento e integração de
nuvem híbrida, o que pode ser um custo adicional.

### Edge Computing

O Edge Computing, ou “computação de borda”, é um paradigma da programação onde os dados
são processados e analisados no limite da rede – isso é, o mais próximo possível da fonte de
dados. Assim, deixam de depender exclusivamente de recursos centralizados de processamento.
Os dados ficam armazenados em camadas bem próximas aos dispositivos e sensores de onde são
usados, reduzindo a latência (tempo) de carregamento e processamento, reduzindo o consumo
da largura de banda, dando privacidade, segurança e escalabilidade.
Quando correlacionado com o Big Data, temos um aumento na escalabilidade e nas possibilidades
de aplicação desses dados, ainda mais num contexto onde os dispositivos IoT (Internet of Things,
como câmeras de segurança com reconhecimento facial, eletrodomésticos inteligentes) produzem
quantidades massivas de dados. Isso beneficia tanto grandes empresas quanto usuários finais dos
produtos, tendo uma maior personalização de cada tecnologia utilizada.

(CEBRASPE/SEED PR/2021) Assinale a opção que apresenta o tipo de computação cujo
processamento acontece próximo do usuário ou da fonte de dados, com o objetivo de otimizar a
latência da rede e a largura de banda dos recursos que consomem, gerenciam e monitoram; com
o processamento mais próximo, os usuários se beneficiam de serviços mais rápidos e confiáveis.
a) computação quântica (quantum computing)
b) computação de borda (edge computing)
c) computação distribuída (distributed computing)

d) computação hiperconvergente (hyper converged computing)
e) computação com arquitetura orientada a serviços (SOA, do inglês service-oriented

architecture)
Comentários:
Quando a questão afirma que é um “tipo de computação cujo processamento acontece próximo
do usuário ou da fonte de dado”, ela está se referindo à computação de borda, ou edge
computing. (Gabarito: Letra C)

## QUESTÕES COMENTADAS

01. (FGV/PREF. SJC/2024) O Big Data é um conceito recente, sendo normalmente definido por
um conjunto de termos, definidos como 5 “V”s. Relacione os termos a seguir com suas respectivas
representações.
1. Volume.
2. Variedade.
3. Veracidade.
4. Velocidade.
( ) É um termo cunhado pela IBM que está sendo usado como o quarto “V” para descrever Big
Data. Refere-se à conformidade com os fatos: precisão, qualidade ou confiabilidade dos dados.
Ferramentas e técnicas são frequentemente usadas para lidar com Big Data, transformando os
dados em insights de qualidade e confiáveis.
( ) Significa a celeridade com que os dados estão sendo produzidos e com que presteza os dados
devem ser processados (ou seja, capturados, armazenados e analisados) para atender a
necessidade ou demanda. Talvez seja a característica mais negligenciada do Big Data.
( ) É a característica mais comum do Big Data. Muitos fatores contribuíram ao aumento exponencial
na quantidade de dados, como dados baseados em transações armazenados ao longo dos anos,
os dados das mídias sociais, aumentando a quantidade de dados de sensores, dados RFID e GPS
gerados automaticamente e assim por diante.
( ) Atualmente os dados hoje possuem diversos e tipos e formatos, desde bancos de dados
relacionais aos XML e dados capturados por sensores, vídeo, áudio. Segundo estimativas, 80 a 85
por cento de todos os dados das organizações estão em algum tipo de formato não estruturado
ou semiestruturado.
A relação correta, na ordem dada, é

a) 4 – 2 – 3 – 1.
b) 3 – 1 – 4 – 2.
c) 4 – 3 – 2 – 1.
d) 3 – 4 – 1 – 2.
e) 2 – 3 – 1 – 4.
Comentários:
Vamos associar as colunas, relativamente aos princípios do Big Data.

( ) É um termo cunhado pela IBM que está sendo usado como o quarto “V” para descrever
Big Data. Refere-se à conformidade com os fatos: precisão, qualidade ou confiabilidade dos

dados. Ferramentas e técnicas são frequentemente usadas para lidar com Big Data,
transformando os dados em insights de qualidade e confiáveis.
O “quarto V” refere-se à veracidade dos dados, que devem ser confiáveis e reais. (3)

( ) Significa a celeridade com que os dados estão sendo produzidos e com que presteza os
dados devem ser processados (ou seja, capturados, armazenados e analisados) para atender
a necessidade ou demanda. Talvez seja a característica mais negligenciada do Big Data.
A celeridade de produção dos dados refere-se ao princípio da velocidade. (4)

( ) É a característica mais comum do Big Data. Muitos fatores contribuíram ao aumento
exponencial na quantidade de dados, como dados baseados em transações armazenados
ao longo dos anos, os dados das mídias sociais, aumentando a quantidade de dados de
sensores, dados RFID e GPS gerados automaticamente e assim por diante.
A característica mais comum do Big Data, sendo aquela que o caracteriza de fato, é o volume de
dados manipulados. (1)

( ) Atualmente os dados hoje possuem diversos e tipos e formatos, desde bancos de dados
relacionais aos XML e dados capturados por sensores, vídeo, áudio. Segundo estimativas,
80 a 85 por cento de todos os dados das organizações estão em algum tipo de formato não
estruturado ou semiestruturado.
O item descreve a variedade dos dados usados no Big Data. (2)
Temos, portanto, 3-4-1-2.

Gabarito: Letra D

02. (CEBRASPE/CNPq/2024) Acerca de técnicas de modelagem de BI (business intelligence), de
big data e de linguagem de manipulação de dados (DML), julgue o item que se segue.
Variedade, uma das métricas de big data, é caracterizada por armazenar e processar uma
quantidade de dados muito maior do que os bancos de dados tradicionais foram projetados para
suportar, incluindo os bancos de dados relacionais paralelos.
Comentários:
A característica descrita pela afirmativa refere-se ao volume, não à variedade. Nesse sentido,
incorreta a questão.

Gabarito: Errado

03. (CEBRASPE/SEPLAN RR/2023) Julgue o próximo item com relação aos conceitos de big data.
Big data somente se aplica a dados não estruturados.
Comentários:
O Big Data envolve dados estruturados, semiestruturados (arquivos XML, JSON e afins) e não
estruturados (como imagens, fotos, áudios). Portanto, incorreta a afirmativa.

Gabarito: Errado

04. (CEBRASPE/SEPLAN RR/2023) Julgue o próximo item com relação aos conceitos de big data.
Variedade, em big data, refere-se à quantidade de fontes que geram os dados com potencial de
serem altamente desestruturados.
Comentários:
Essa questão é complexa. Num primeiro olhar, você deve ter pensado “quantidade de fontes gera
volume de dados, então está errada”, né? Mas interprete comigo, diferentes fontes geram
diferentes tipos de arquivo, estruturados, não estruturados, semiestruturados. Nesse sentido, de
fato, a quantidade de fontes dita a variedade dos dados - correta a afirmativa.

Gabarito: Certo

05. (FGV/TJ RN/2023) Os bancos de dados massivos possuem características que precisam ser
consideradas no desenvolvimento de soluções para analisar os dados armazenados.
Nesse tipo de ambiente de bancos de dados, a capacidade de minimizar os ruídos dos dados
oriundos de múltiplas fontes heterogêneas, identificar o que é irrelevante e redundante, e apoiar
a limpeza dos dados, contribuindo para sua qualidade, corresponde à característica Big Data:

a) valor;
b) volume;
c) variedade;
d) veracidade;
e) velocidade.
Comentários:

Questão bem sutil. É possível, numa interpretação ampla, atribuir as características do enunciado
tanto ao Valor, quanto à Veracidade - indo além, até à variedade. Por ser um assunto simples, é
comum que bancas tentem complicar atribuindo subjetividade nas questões.
Porém, podemos definir como resposta a Veracidade, no momento em que a questão aponta
sobre dados que estão “contribuindo para sua (Big Data) qualidade”. Portanto, a alternativa
correta é a letra D.

Gabarito: Letra D

06. (CEBRASPE/SERPRO/2023) Acerca de armazenamento e processamento de dados, julgue o
item a seguir.
Big data é um conceito definido exclusivamente pelo volume de dados utilizados em análises.
Comentários:
Apesar do volume ser a característica basilar do Big Data, não podemos dizer que essa é a única
característica que o define. Temos um conjunto de características e propósitos que definem o que
ele é, como os 5Vs e o propósito voltado à análise de dados. Um grande conjunto de dados sem
essas características é apenas um grande conjunto de dados.

Gabarito: Errado

07. (FGV/DPE RS/2023) Bancos de dados Big Data podem armazenar petabytes de informações
heterogêneas e são caracterizados por:

a) garantirem as operações ACID para controlarem as múltiplas transações concorrentes em

tempo real;
b) permitirem o armazenamento mono-model para evitar que grandes volumes de dados

sejam corrompidos ao serem transferidos pela rede;
c) possuírem esquemas não rígidos no qual os dados podem ser armazenados para o esquema

ser definido posteriormente e dinamicamente;
d) utilizarem linguagem de consulta estruturada para recuperar e processar seus dados com

múltiplas consultas concorrentes em grandes volumes de dados;
e) armazenarem dados estruturados em tabelas indexadas com esquemas que precisam ser

definidos a priori para melhorar o desempenho das consultas complexas.
Comentários:
Vamos analisar cada alternativa.

a) Errado. São os modelos relacionais que usam operações ACID. Nos Big Datas, como

usualmente tratamos de modelos de computação distribuída, temos dois conjuntos de
princípios preponderantes - BASE (Basically Available, Soft State, Eventually Consistant), e
CAP (Consistency, Availability e Partition Tolerance).
b) Errado. Como temos uma variedade gigantesca de tipos de dados, não faz sentido termos

um armazenamento em modelo único no Big Data.
c) Certo. Novamente, a utilização de dados de diversos tipos, estruturados, não estruturados

ou semiestruturados, permite o uso de esquemas não rígidos.
d) Errado. A linguagem de consulta estruturada (SQL) é usada em modelos relacionais, não no

Big Data. Nos Big Data temos diferentes formas de consulta, com diferentes linguagens -
usualmente gerenciados por programas especializados, como o Hadoop e o Spark.
e) Errado. Não há indexação nem necessidade de definição prévia dos esquemas.
A alternativa correta é, portanto, a letra C.

Gabarito: Letra C

08. (FGV/ISS RJ/2023) No contexto de Big Data, para armazenar petabytes de dados não
estruturados, semiestruturados e estruturados, com alto nível de heterogeneidade, é necessário
um banco de dados que:

a) use SQL como padrão;
b) garanta as propriedades ACID;
c) tenha esquemas de dados dinâmicos;
d) utilize um SBGD central e local com estrutura sequencial de processamento;
e) persista dados em tabelas relacionais como estrutura única de armazenamento.
Comentários:
Vamos analisar cada alternativa.

a) Errado. Como comentado na questão anterior, o SQL é usado no modelo relacional. Em

Big Data, usamos diversas linguagens não estruturadas, derivadas muitas vezes de
programas específicos, como os componentes do Apache Hadoop e Apache Spark -
usualmente envolvendo SGBDs de bancos de dado do tipo NoSQL.
b) Errado. Outra vez a FGV cobrando esse assunto - os Big Data não seguem as propriedades

ACID.
c) Certo. Como temos uma variedade de tipos de dados, temos esquemas dinâmicos - ao

contrário do modelo relacional, que usa esquemas estáticos.
d) Errado. Não existe essa configuração nos Big Datas.
e) Errado. Vide letra C, temos diversas estruturas para armazenamento.

==5460==

Portanto, correta a letra C.

Gabarito: Letra C

09. (CEBRASPE/MPE RO/2023) Assinale a opção correta, a respeito de conceitos de big data.

a) Big data refere-se ao armazenamento de grandes volumes de dados em servidores locais,

geralmente em formato estruturado.
b) Os processos e modelos analíticos de big data são baseados somente em máquinas e não

em humanos.
c) Big data consiste de uma tecnologia que se resume ao uso de técnicas avançadas de

criptografia para proteger informações confidenciais armazenadas em bancos de dados
corporativos.
d) Uma solução de big data inclui somente os dados principais, sendo descartados os domínios

de dados e transações.
e) Big data é um termo abrangente usado para descrever conjuntos de dados extremamente

grandes que são difíceis de processar e analisar em um período de tempo razoável pelos
métodos tradicionais.
Comentários:
Vamos às alternativas.

a) Errado. O Big Data não usa servidores locais, e usa todos os tipos de dados - não só os

estruturados.
b) Errado. Temos tanto processamentos automáticos, computacionais, quanto manuais,

realizados pelos humanos.
c) Errado. Alternativa sem pé nem cabeça.
d) Errado. Precisamos de todos os tipos de dados possíveis para tomar decisões, não somente

dos principais.
e) Certo. Definição exata para o Big Data.

Gabarito: Letra E

10. (CEBRASP/FUB/2023) Com relação a Big Data, julgue o item a seguir.
Big Data pode ser definido como um grande data warehouse, com processos de business
intelligence atuando em múltiplos data sets com terabytes de dados.
Comentários:

Com uma bela licença poética, podemos realmente afirmar que o Big Data é um “data warehouse
muito grande” - embora os DW usem somente dados estruturados, e o Big Data use dados
estruturados, não estruturados e semiestruturados. Portanto, correta a afirmativa.

Gabarito: Certo

## LISTA DE QUESTÕES

01. (FGV/PREF. SJC/2024) O Big Data é um conceito recente, sendo normalmente definido por
um conjunto de termos, definidos como 5 “V”s. Relacione os termos a seguir com suas respectivas
representações.
1. Volume.
2. Variedade.
3. Veracidade.
4. Velocidade.
( ) É um termo cunhado pela IBM que está sendo usado como o quarto “V” para descrever Big
Data. Refere-se à conformidade com os fatos: precisão, qualidade ou confiabilidade dos dados.
Ferramentas e técnicas são frequentemente usadas para lidar com Big Data, transformando os
dados em insights de qualidade e confiáveis.
( ) Significa a celeridade com que os dados estão sendo produzidos e com que presteza os dados
devem ser processados (ou seja, capturados, armazenados e analisados) para atender a
necessidade ou demanda. Talvez seja a característica mais negligenciada do Big Data.
( ) É a característica mais comum do Big Data. Muitos fatores contribuíram ao aumento exponencial
na quantidade de dados, como dados baseados em transações armazenados ao longo dos anos,
os dados das mídias sociais, aumentando a quantidade de dados de sensores, dados RFID e GPS
gerados automaticamente e assim por diante.
( ) Atualmente os dados hoje possuem diversos e tipos e formatos, desde bancos de dados
relacionais aos XML e dados capturados por sensores, vídeo, áudio. Segundo estimativas, 80 a 85
por cento de todos os dados das organizações estão em algum tipo de formato não estruturado
ou semiestruturado.
A relação correta, na ordem dada, é

a) 4 – 2 – 3 – 1.
b) 3 – 1 – 4 – 2.
c) 4 – 3 – 2 – 1.
d) 3 – 4 – 1 – 2.
e) 2 – 3 – 1 – 4.
02. (CEBRASPE/CNPq/2024) Acerca de técnicas de modelagem de BI (business intelligence), de
big data e de linguagem de manipulação de dados (DML), julgue o item que se segue.
Variedade, uma das métricas de big data, é caracterizada por armazenar e processar uma
quantidade de dados muito maior do que os bancos de dados tradicionais foram projetados para
suportar, incluindo os bancos de dados relacionais paralelos.

03. (CEBRASPE/SEPLAN RR/2023) Julgue o próximo item com relação aos conceitos de big data.
Big data somente se aplica a dados não estruturados.
04. (CEBRASPE/SEPLAN RR/2023) Julgue o próximo item com relação aos conceitos de big data.
Variedade, em big data, refere-se à quantidade de fontes que geram os dados com potencial de
serem altamente desestruturados.
05. (FGV/TJ RN/2023) Os bancos de dados massivos possuem características que precisam ser
consideradas no desenvolvimento de soluções para analisar os dados armazenados.
Nesse tipo de ambiente de bancos de dados, a capacidade de minimizar os ruídos dos dados
oriundos de múltiplas fontes heterogêneas, identificar o que é irrelevante e redundante, e apoiar
a limpeza dos dados, contribuindo para sua qualidade, corresponde à característica Big Data:

a) valor;
b) volume;
c) variedade;
d) veracidade;
e) velocidade.
06. (CEBRASPE/SERPRO/2023) Acerca de armazenamento e processamento de dados, julgue o
item a seguir.
Big data é um conceito definido exclusivamente pelo volume de dados utilizados em análises.
07. (FGV/DPE RS/2023) Bancos de dados Big Data podem armazenar petabytes de informações
heterogêneas e são caracterizados por:

a) garantirem as operações ACID para controlarem as múltiplas transações concorrentes em

tempo real;
b) permitirem o armazenamento mono-model para evitar que grandes volumes de dados

sejam corrompidos ao serem transferidos pela rede;
c) possuírem esquemas não rígidos no qual os dados podem ser armazenados para o esquema

ser definido posteriormente e dinamicamente;
d) utilizarem linguagem de consulta estruturada para recuperar e processar seus dados com

múltiplas consultas concorrentes em grandes volumes de dados;
e) armazenarem dados estruturados em tabelas indexadas com esquemas que precisam ser

definidos a priori para melhorar o desempenho das consultas complexas.

==5460==

08. (FGV/ISS RJ/2023) No contexto de Big Data, para armazenar petabytes de dados não
estruturados, semiestruturados e estruturados, com alto nível de heterogeneidade, é necessário
um banco de dados que:

a) use SQL como padrão;
b) garanta as propriedades ACID;
c) tenha esquemas de dados dinâmicos;
d) utilize um SBGD central e local com estrutura sequencial de processamento;
e) persista dados em tabelas relacionais como estrutura única de armazenamento.
09. (CEBRASPE/MPE RO/2023) Assinale a opção correta, a respeito de conceitos de big data.

a) Big data refere-se ao armazenamento de grandes volumes de dados em servidores locais,

geralmente em formato estruturado.
b) Os processos e modelos analíticos de big data são baseados somente em máquinas e não

em humanos.
c) Big data consiste de uma tecnologia que se resume ao uso de técnicas avançadas de

criptografia para proteger informações confidenciais armazenadas em bancos de dados
corporativos.
d) Uma solução de big data inclui somente os dados principais, sendo descartados os domínios

de dados e transações.
e) Big data é um termo abrangente usado para descrever conjuntos de dados extremamente

grandes que são difíceis de processar e analisar em um período de tempo razoável pelos
métodos tradicionais.
10. (CEBRASP/FUB/2023) Com relação a Big Data, julgue o item a seguir.
Big Data pode ser definido como um grande data warehouse, com processos de business
intelligence atuando em múltiplos data sets com terabytes de dados.

## GABARITO

1. Letra D
2. Errado
3. Errado
4. Certo
5. Letra D

6. Errado
7. Letra C
8. Letra C
9. Letra E
10. Certo
