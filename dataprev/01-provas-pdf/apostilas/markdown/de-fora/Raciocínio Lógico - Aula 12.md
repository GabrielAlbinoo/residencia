# Raciocínio Lógico - Aula 12

## Índice

1) Solução de Sistemas Lineares
3

2) Discussão de Sistemas Lineares
46

3) Questões Comentadas - Solução de Sistemas Lineares - FGV
60

4) Questões Comentadas - Solução de Sistemas Lineares - Multibancas
70

5) Questões Comentadas - Discussão de Sistemas Lineares - Multibancas
101

6) Lista de Questões - Solução de Sistemas Lineares - FGV
138

7) Lista de Questões - Solução de Sistemas Lineares - Multibancas
142

8) Lista de Questões - Discussão de Sistemas Lineares - Multibancas
152

## APRESENTAÇÃO DA AULA

Fala, pessoal!

Hoje trataremos sobre sistemas lineares. Antes de começar essa aula, é necessário que você já tenha uma
base de matrizes e determinantes.

Ressalto desde já que o assunto dessa aula não costuma ser muito cobrado em provas de concurso público.

Usualmente procuro colocar questões ao longo da teoria. Para o aprendizado da matéria
de sistemas lineares, existe a necessidade de uma base teórica que não costuma ser
cobrada diretamente nas questões, motivo pelo qual essa aula apresenta alguns trechos
de teoria sem questões.

Como de costume, vamos exibir um resumo logo no início do tópico para que você tenha uma visão geral
do conteúdo antes mesmo de iniciar o assunto.

Conte comigo nessa caminhada =)

Prof. Eduardo Mocellin.

@edu.mocellin

## SOLUÇÃO DE SISTEMAS LINEARES

Equações lineares são da forma 𝒂𝟏𝒙𝟏+ 𝒂𝟐𝒙𝟐+ 𝒂𝟑𝒙𝟑+ ⋯+ 𝒂𝒏𝒙𝒏= 𝒃.
- 𝒙𝟏, 𝒙𝟐, 𝒙𝟑, ..., 𝒙𝒏 são incógnitas;
- 𝒂𝟏, 𝒂𝟐, 𝒂𝟑, ... ,𝒂𝒏 são os coeficientes;
- 𝒃 é o termo independente.
Uma solução de uma equação linear é um conjunto ordenado de números reais que torna a equação
verdadeira.
Um sistema linear é um conjunto de equações lineares.
A solução de um sistema linear deve tornar verdadeira todas as equações que compõem o sistema.
Representação matricial de um sistema linear:

𝑨𝑿= 𝑩

- 𝑨: Matriz dos coeficientes ou matriz incompleta do sistema;
- 𝑿: Matriz das incógnitas;
- 𝑩: Matriz dos termos independentes.
- [𝑨|𝑩]: Matriz completa do sistema.

{

𝟑𝒙+ 𝟒𝒚+ 𝟏𝒛= 𝟑
𝟏𝒙+ (−𝟏)𝒚+ 𝟏𝒛= 𝟏

𝟏𝒙+ 𝟑𝒚+ 𝟎𝒛= 𝟐

→ [

𝟑
𝟒
𝟏
𝟏
−𝟏
𝟏
𝟏
𝟑
𝟎

] × [

𝒙
𝒚
𝒛

] = [

𝟑
𝟏
𝟐

]

[𝑨|𝑩] = [

𝟑
𝟒
𝟏
𝟑
𝟏
−𝟏
𝟏
𝟏
𝟏
𝟑
𝟎
𝟐

]

Dois sistemas lineares são equivalentes quando apresentam as mesmas soluções.
Uma equação 𝐿1 é combinação linear de outras equações 𝐿2 e 𝐿3 quando existem valores reais 𝒂 e 𝒃
tais que:

𝐿1 = 𝒂𝐿2 + 𝒃𝐿3
Em um sistema linear, ao substituir uma determinada equação por uma combinação linear dela com
outra equação, temos um sistema linear equivalente.
Em um sistema linear, quando uma determinada equação corresponde a uma combinação linear de
outras equações do sistema, podemos eliminar essa equação do sistema.

Solução de Sistemas Lineares

Equação linear

Sistema linear

Sistemas lineares equivalentes

Se um sistema linear apresenta mais de uma solução, então ele apresenta infinitas soluções.
Um sistema linear homogêneo é aquele em que os termos independentes de todas as equações são
iguais a zero. Sempre admite a solução em que todas as variáveis são zero (solução trivial).

{

3𝑥+ 1𝑦+ 𝑧= 𝟎
2𝑥+ 4𝑦+ 2𝑧= 𝟎
3𝑥+ 2𝑦+ 4𝑧= 𝟎

- Solução por substituição: consiste em isolar uma variável em uma equação e substituir em outra
equação.
- Solução por eliminação de variável: consiste em eliminar variáveis por meio de uma combinação linear
conveniente das equações do sistema linear.
- Solução pela soma das equações do sistema: existem casos em que a solução do sistema linear é obtida
de modo mais rápido realizando a soma de todas as equações do sistema.
- Solução por matriz inversa: a matriz das incógnitas (𝑿) é obtida pelo produto da matriz inversa dos
coeficientes pela matriz dos termos independentes: 𝑿= 𝑨−𝟏𝑩.

Classificação de um sistema linear

Sistema linear homogêneo

Solução de um sistema linear

Teorema de Cramer
Só pode ser utilizado quando o número de equações do sistema linear (𝒏) é igual ao número de
incógnitas. Nesse caso, a matriz dos coeficientes (𝑨) do sistema linear será quadrada, de dimensão
𝒏× 𝒏.
Seja 𝐷= det 𝐴.
01) Se 𝐷≠0, o sistema é possível e determinado (SPD), apresentando solução única.
02) Sendo 𝐷≠0, a solução única (𝛼1, 𝛼2, … , 𝛼𝑛) do sistema linear é tal que:

𝛼𝑖=

𝐷𝑖

𝐷
Onde 𝐷𝑖 é o determinante da matriz que se obtém a partir de 𝐴𝑛×𝑛 substinuindo a coluna 𝑖 pela matriz
𝐵𝑛×1.

Método do escalonamento
O método consiste em obter um sistema equivalente ao sistema original em que o número de variáveis
explícitas diminui de equação para equação. Em outras palavras, o número de coeficientes nulos
aumenta de equação para equação.

{

2𝑥+ 𝑦+ 𝑧= 4
2𝑥+ 4𝑦+ 4𝑧= 22
2𝑥+ 4𝑦+ 3𝑧= 10
→{

2𝑥+ 𝑦+ 𝑧= 4
3𝑦+ 3𝑧= 18

−𝑧= −12

Para obter o sistema escalonado, devemos seguir os seguintes passos:
- Colocar como 1ª equação uma que apresente a 1ª incógnita;
- Anular a 1ª incógnita de todas as equações (exceto da 1ª) fazendo uso da 1ª equação;
- Anular a 2ª incógnita de todas as equações (exceto da 1ª e da 2ª) fazendo uso da 2ª equação;
- Anular a 3ª incógnita de todas as equações (exceto da 1ª, da 2ª e da 3ª) fazendo uso da 3ª equação;
- E assim sucessivamente, até que tenhamos usado todas as equações.
O posto de uma matriz é o número de linhas não nulas de uma matriz escalonada. A representação do
posto de uma matriz 𝐴 é dada por 𝜌(𝐴).
A nulidade de uma matriz é dada por 𝑛𝑢𝑙𝑙(𝐴) = (Nº 𝑐𝑜𝑙𝑢𝑛𝑎𝑠) −𝜌(𝐴)

Posto e nulidade de uma matriz

### Equação linear

### Definição

Nesse momento, vamos mostrar a representação genérica de uma equação linear. Basicamente, uma
equação linear é uma equação da seguinte forma:

𝒂𝟏𝒙𝟏+ 𝒂𝟐𝒙𝟐+ 𝒂𝟑𝒙𝟑+ ⋯+ 𝒂𝒏𝒙𝒏= 𝒃

Em que 𝒙𝟏, 𝒙𝟐, 𝒙𝟑, ..., 𝒙𝒏 são incógnitas.

Os números reais 𝒂𝟏, 𝒂𝟐, 𝒂𝟑, ... ,𝒂𝒏 são os coeficientes da equação e 𝒃 é denominado termo independente.

Exemplos de equações lineares:

Equação linear
Incógnitas
Coeficientes
Termo independente
𝟓𝒙+ 𝟑𝒚= 𝟐
𝒙 , 𝒚
𝟓 , 𝟑
𝟐
𝟐𝒙+ 𝟎𝒚+ 𝟑𝒛+ 𝟏𝒘= 𝟎
𝒙, 𝒚, 𝒛, 𝒘
𝟐, 𝟎, 𝟑, 𝟏
0
𝟓𝟐𝒙𝟏+ √𝟑𝒙𝟐 + 𝟏𝒙𝟑= 𝝅
𝒙𝟏, 𝒙𝟐, 𝒙𝟑
𝟓𝟐, √𝟑, 𝟏
𝝅

As equações a seguir não são equações lineares.

-
3√𝒙+ 2𝑦+ 𝑧= 3
-
3𝑥+ 2𝒚𝟐+ 𝑧= 1;
-
5𝑥+ 𝐥𝐨𝐠𝒚+ 𝒛𝒘= 0;
-
𝑥+ 𝑦+ 𝐜𝐨𝐬𝒛= 3.

Note que a principal restrição de uma equação linear está na incógnita. Não se pode ter
incógnitas da forma √𝒙, 𝒚𝟐 , 𝐥𝐨𝐠𝒚, 𝐜𝐨𝐬𝒛, por exemplo, bem como não se pode ter produto
entre incógnitas (𝒛𝒘).

Já os coeficientes e o termo independente podem ser quaisquer números reais: 52, √3, 𝜋,
etc.

### Solução de uma equação linear

Uma solução de uma equação linear é um conjunto ordenado de números reais que torna a equação
verdadeira.

Vamos a um exemplo. Considere a seguinte equação linear:

3𝑥+ 2𝑦+ 𝑧= 7

Note que o conjunto ordenado (𝒙, 𝒚, 𝒛) = (𝟏, 𝟎, 𝟒) é uma solução, pois:

3𝒙+ 2𝒚+ 𝒛= 7
3. 𝟏+ 2. 𝟎+ 𝟒= 7

7 = 7

### (VERDADEIRO)

Podemos ter infinitas soluções para a equação linear em questão. Observe que o conjunto ordenado
(𝒙, 𝒚, 𝒛) = (𝟎, 𝟎, 𝟕) também é uma solução, pois:

3𝒙+ 2𝒚+ 𝒛= 7
3. 𝟎+ 2. 𝟎+ 𝟕= 7

7 = 7

### (VERDADEIRO)

Vejamos agora o conjunto ordenado (𝒙, 𝒚, 𝒛) = (𝟓, 𝟓, 𝟓):

3𝒙+ 2𝒚+ 𝒛= 7
3. 𝟓+ 2. 𝟓+ 𝟓= 7

30 = 7

### (FALSO)

Note que (𝟓, 𝟓, 𝟓) não é solução da equação linear, pois esse conjunto ordenado não tornou a equação
linear verdadeira.

### Sistema linear

### Definição

Um sistema linear nada mais é do que um conjunto de equações lineares. A seguir, temos um sistema linear,
pois trata-se de um conjunto de equações lineares:

{

2𝑥+ 𝑦+ 𝑧= 1
3𝑥+ 3𝑦+ 𝑧= 3
𝑥+ 2𝑦+ 𝑧= 2

Agora observe o seguinte sistema de equações:

{

𝑥+ 𝑦+ 𝑧= 1

𝟐𝒚= 1

2
𝒙𝟐𝒚= 3

Esse sistema de equações não é linear, pois contém equações que não são lineares.

### Solução de um sistema linear

Assim como as equações lineares, um sistema linear também apresenta solução. A diferença é que a solução
do sistema linear deve tornar verdadeira todas as equações que compõem o sistema.

Considere, por exemplo, o seguinte sistema linear de equações:

{

𝑥+ 𝑦+ 𝑧= 6
3𝑥+ 𝑦+ 3𝑧= 16
0𝑥+ 𝑦+ 𝑧= 3

Note que (𝒙, 𝒚, 𝒛) = (𝟑, 𝟏, 𝟐) é solução do sistema linear, pois essa solução torna verdadeira as três
equações. Vejamos:

Primeira equação

𝒙+ 𝒚+ 𝒛= 6

𝟑+ 𝟏+ 𝟐= 6

6 = 6

### (VERDADEIRO)

Segunda equação

3𝒙+ 𝒚+ 3𝒛= 16

3. 𝟑+ 𝟏+ 3. 𝟐= 16

16 = 16

### (VERDADEIRO)

Terceira equação

0𝒙+ 𝒚+ 𝒛= 3

0. 𝟑+ 𝟏+ 𝟐= 3

3 = 3

### (VERDADEIRO)

Agora observe o que acontece com (𝒙, 𝒚, 𝒛) = (𝟐, 𝟐, 𝟐):

Primeira equação

𝒙+ 𝒚+ 𝒛= 6

𝟐+ 𝟐+ 𝟐= 6

6 = 6

### (VERDADEIRO)

Segunda equação

3𝒙+ 𝒚+ 3𝒛= 16

3. 𝟐+ 𝟐+ 3. 𝟐= 16

14 = 16

### (FALSO)

Terceira equação

0𝒙+ 𝒚+ 𝒛= 3

0. 𝟐+ 𝟐+ 𝟐= 3

4 = 3

### (FALSO)

Como (𝒙, 𝒚, 𝒛) = (𝟐, 𝟐, 𝟐) satisfaz apenas uma equação do sistema, (𝟐, 𝟐, 𝟐) não é solução do sistema linear.

Veremos mais adiante que um sistema linear pode apresentar uma solução única, infinitas soluções ou então
nenhuma solução.

### Representação na forma matricial

Considere o seguinte sistema linear com três equações:

{

𝟐𝒙+ 𝟐𝒚+ 𝟏𝒛= 𝟐
𝟏𝒙+ 𝟑𝒚+ 𝟐𝒛= 𝟏
𝟑𝒙+ 𝟏𝒚+ 𝟒𝒛= 𝟒

Esse sistema linear também pode ser representado por meio da equação matricial 𝑨𝑿= 𝑩:

[

𝟐
𝟐
𝟏
𝟏
𝟑
𝟐
𝟑
𝟏
𝟒

]
⏟

𝑴𝒂𝒕𝒓𝒊𝒛 𝑨

×
[

𝒙
𝒚

𝒛

]
⏟

𝑴𝒂𝒕𝒓𝒊𝒛 𝑿

=
[

𝟐
𝟏
𝟒

]
⏟

𝑴𝒂𝒕𝒓𝒊𝒛 𝑩

𝑨𝑿= 𝑩

Como assim, professor? Como que apareceu uma equação matricial?

Para compreender melhor a representação matricial, vamos desenvolvê-la.

Do lado esquerdo, temos o seguinte produto:

[

𝟐
𝟐
𝟏
𝟏
𝟑
𝟐
𝟑
𝟏
𝟒

]

3×3
× [

𝒙
𝒚
𝒛

]

3×1

Trata-se da multiplicação de uma matriz 3 × 3 por uma matriz 3 × 1. Note que o produto é possível e que o
resultado desse produto é uma matriz 3 × 1.

Logo, 𝐴𝑋 é:

𝐴𝑋= [

]

3×3
× [

𝒙
𝒚
𝒛

]

3×1

𝐴𝑋= [

𝟐𝒙+ 𝟐𝒚+ 𝟏𝒛
𝟏𝒙+ 𝟑𝒚+ 𝟐𝒛
𝟑𝒙+ 𝟏𝒚+ 𝟒𝒛

]

3×1

Do outro lado da equação, temos uma matriz 𝐵, que também apresenta dimensão 3 × 1:

𝐵= [

𝟐
𝟏
𝟒

]

3×1

Assim, temos:

𝐴𝑋= 𝐵

[

𝟐
𝟐
𝟏
𝟏
𝟑
𝟐
𝟑
𝟏
𝟒

]

3×3
× [

𝒙
𝒚
𝒛

]

3×1
= [

𝟐
𝟏
𝟒

]

3×1

[

𝟐𝒙+ 𝟐𝒚+ 𝟏𝒛
𝟏𝒙+ 𝟑𝒚+ 𝟐𝒛
𝟑𝒙+ 𝟏𝒚+ 𝟒𝒛

]

3×1

= [

𝟐
𝟏
𝟒

]

3×1

Agora temos a igualdade de duas matrizes 3 × 1. Para as matrizes serem iguais, todos os elementos de
mesma posição devem ser iguais:

{

𝟐𝒙+ 𝟐𝒚+ 𝟏𝒛= 𝟐
𝟏𝒙+ 𝟑𝒚+ 𝟐𝒛= 𝟏
𝟑𝒙+ 𝟏𝒚+ 𝟒𝒛= 𝟒

Veja que voltamos ao nosso sistema linear!

Logo, podemos representar um sistema linear tanto por meio de um conjunto de equações quanto por
meio de uma equação matricial do tipo 𝑨𝑿= 𝑩.

Vejamos alguns exemplos de representação matricial:

Representação por conjunto de equações
Representação matricial 𝑨𝑿= 𝑩

{𝟓𝒙+ 𝟑𝒚= 𝟎

𝟏𝒙+ 𝟏𝒚= 𝟏
[𝟓
𝟑
𝟏
𝟏] × [𝒙

𝒚] = [𝟎

𝟏]

{

𝟐𝒙+ 𝟑𝒚= 𝟐
𝟏𝒙+ 𝟐𝒚= 𝟏
𝟒𝒙+ 𝟔𝒚= 𝟒

[

𝟐
𝟑
𝟏
𝟐
𝟒
𝟔

] × [𝒙

𝒚] = [

𝟐
𝟏
𝟒

]

{

𝟑𝒙+ 𝟒𝒚+ 𝟏𝒛= 𝟑
𝟏𝒙+ (−𝟏)𝒚+ 𝟏𝒛= 𝟏

𝟏𝒙+ 𝟑𝒚+ 𝟎𝒛= 𝟐

[

𝟑
𝟒
𝟏
𝟏
−𝟏
𝟏
𝟏
𝟑
𝟎

] × [

𝒙
𝒚
𝒛

] = [

𝟑
𝟏
𝟐

]

{

𝟑𝒙+ 𝟐𝒚+ 𝟏𝒛= 𝟑
𝟏𝒙+ 𝟑𝒚+ (−𝟏)𝒛= 𝟏

𝟏𝒙+ 𝟑𝒚+ 𝟎𝒛= 𝟐
𝟔𝒙+ 𝟒𝒚+ 𝟐𝒛= 𝟔

[

−𝟏

] × [

𝒙
𝒚
𝒛

] = [

]

Um ponto muito importante ao realizar a representação matricial é ordenar corretamente os coeficientes,
as variáveis e os termos independentes.

Suponha, por exemplo, que temos o seguinte sistema:

{

𝒙+ 𝟑𝒚+ 𝒛= 𝟓

𝒛−𝟐𝒙= 𝟏
𝟐𝒚+ 𝒛+ 𝟑= 0

Devemos colocar os termos independentes no lado direito da equação. Nesse caso, a última equação deve
ser modificada:

{

𝒙+ 𝟑𝒚+ 𝒛= 𝟓

𝒛−𝟐𝒙= 𝟏
𝟐𝒚+ 𝒛= −𝟑

Além disso, devemos ordenar as variáveis da forma correta:

{

𝒙 + 𝟑𝒚+ 𝒛= 𝟓
−𝟐𝒙 + 𝒛= 𝟏
𝟐𝒚+ 𝒛= −𝟑

Por fim, quanto aos coeficientes, deve-se entender que:

- Variáveis que aparecem em outras equações e não aprecem em uma determinada equação devem
ser representadas com um coeficiente 0;

- Variáveis que supostamente não apresentam coeficiente na verdade têm coeficiente 1.

Ficamos com:

{

𝟏𝒙 + 𝟑𝒚+ 𝟏𝒛= 𝟓
−𝟐𝒙+ 𝟎𝒚+ 𝟏𝒛= 𝟏
𝟎𝒙+ 𝟐𝒚+ 𝟏𝒛= −𝟑

Portanto, o sistema original apresenta a seguinte forma matricial 𝑨𝑿= 𝑩:

[

𝟏
𝟑
𝟏
−𝟐
𝟎
𝟏
𝟎
𝟐
𝟏

] × [

𝒙
𝒚
𝒛

] = [

𝟓
𝟏
−𝟑

]

Importante destacar que a matriz 𝑨 é conhecida por matriz dos coeficientes ou também matriz incompleta
do sistema. Já a matriz 𝑿 é a matriz das incógnitas e a matriz 𝑩 é a matriz dos termos independentes.

Por fim, você deve saber que a matriz completa do sistema é a matriz formada pela matriz incompleta (𝑨)
concatenada com a matriz dos termos independentes (𝑩). Para o exemplo anterior, a matriz completa é
dada por:

[𝑨|𝑩] = [

−𝟐
−𝟑

]

O esquema a seguir resume o que vimos sobre a representação matricial de um sistema linear.

Representação matricial de um sistema linear:

𝑨𝑿= 𝑩

- 𝑨: Matriz dos coeficientes ou matriz incompleta do sistema;
- 𝑿: Matriz das incógnitas;
- 𝑩: Matriz dos termos independentes;
- [𝑨|𝑩]: Matriz completa do sistema.

{

𝟑𝒙+ 𝟒𝒚+ 𝟏𝒛= 𝟑
𝟏𝒙+ (−𝟏)𝒚+ 𝟏𝒛= 𝟏

𝟏𝒙+ 𝟑𝒚+ 𝟎𝒛= 𝟐

→ [

𝟑
𝟒
𝟏
𝟏
−𝟏
𝟏
𝟏
𝟑
𝟎

] × [

𝒙
𝒚
𝒛

] = [

𝟑
𝟏
𝟐

]

[𝑨|𝑩] = [

𝟑
𝟒
𝟏
𝟑
𝟏
−𝟏
𝟏
𝟏
𝟏
𝟑
𝟎
𝟐

]

(SEDUC AM/2014) Considere o sistema linear de três equações e duas incógnitas a seguir:

{

𝑥+ 2𝑦= 3
3𝑥+ 4𝑦= 5
5𝑥+ 6𝑦= 7

Esse sistema escrito na forma matricial é:

a) [

] [𝑥
𝑦] = [

]

b) [1
6] [𝑥
𝑦] = [3
7]

c) [𝑥
𝑦] [

] = [

]

d) [

1
2
3
4
5
6
] [𝑥

𝑦] = [

3
5
7
]

e) [1
3
4
2
4
6] [
3
5
7
] = [𝑥

𝑦]

Comentários:

A representação de um sistema linear com 𝟑 equações e 𝟐 incógnitas na forma matricial é dado por
𝑨𝑿= 𝑩, em que:

- 𝑨 é a matriz dos coeficientes, da forma 3 × 2;

- 𝑿 é a matriz das incógnitas, da forma 2 × 1; e

- 𝑩 é a matriz dos termos independentes, da forma 3 × 1.

Para o sistema:

{

𝑥+ 2𝑦= 3
3𝑥+ 4𝑦= 5
5𝑥+ 6𝑦= 7
→ {

𝟏𝒙+ 𝟐𝒚= 𝟑
𝟑𝒙+ 𝟒𝒚= 𝟓
𝟓𝒙+ 𝟔𝒚= 𝟕

Temos:

𝑨𝑿= 𝑩

[

𝟏
𝟐
𝟑
𝟒
𝟓
𝟔

] [𝒙

𝒚] = [

𝟑
𝟓
𝟕

]

Gabarito: Letra D.

### Sistemas lineares equivalentes

O entendimento do que são sistemas equivalentes será bastante útil adiante, quando estudarmos a solução
de um sistema linear e a discussão de um sistema linear. Vamos à definição:

### Definição

Dois sistemas lineares são equivalentes quando apresentam as mesmas soluções.

Exemplo: considere os sistemas lineares 𝑆1 e 𝑆2.

𝑆1 {𝑥+ 3𝑦= 7

5𝑥+ 𝑦= 7 𝑆2 { 𝑥+ 3𝑦 = 7
14𝑦 = −28

Ainda veremos como obter as soluções de um sistema linear. Nesse momento, você deve acreditar em mim:
ambos os sistemas admitem uma única solução dada por (𝑥, 𝑦) = (1, 2).

Assim, como ambos os sistemas apresentam as mesmas soluções (no caso, uma solução única), eles são
equivalentes.

Podemos representar a equivalência entre dois sistemas por meio de um til " ~ ". Portanto:

{𝑥+ 3𝑦= 7

5𝑥+ 𝑦= 7 ~ { 𝑥+ 3𝑦 = 7
14𝑦 = −28

A equivalência entre dois sistemas também pode ser representada por meio da matriz completa do sistema:

[1
3
7
5
1
7] ~ [1
3
7
0
−14
28]

### Combinação linear de equações

Na aula de determinantes, tratamos do conceito de combinação linear. Vamos recapitular a ideia, aplicando
o conceito para equações lineares.

Podemos dizer que uma equação 𝐿1 é combinação linear de outras equações 𝐿2 e 𝐿3 quando existem
valores reais 𝒂 e 𝒃 tais que:

𝐿1 = 𝒂𝐿2 + 𝒃𝐿3

Vejamos um exemplo:

Exemplo 1. Considere as três equações abaixo:

𝑥+ 𝑦+ 𝑧= 5
2𝑥+ 𝑦+ 3𝑧= 3
3𝑥+ 2𝑦+ 4𝑧= 8

Note que a terceira equação (𝐿3) é combinação linear da primeira (𝐿1) com a segunda (𝐿2), pois
𝐿3 = 𝟏𝐿1 + 𝟏𝐿2.

Nem sempre é fácil identificar uma combinação linear. Vejamos um outro exemplo:

Exemplo 2. Considere as três equações abaixo:

𝑥−𝑦 + 𝑧= −1

2𝑥+ 𝑦+ 𝑧= 3
5𝑥+ 1𝑦+ 3𝑧= 5

Temos que a primeira equação (𝐿1) é combinação linear da segunda (𝐿2) e da terceira (𝐿3), pois
𝐿1 = (−𝟐)𝐿2 + 𝟏𝐿3. Veja:

(−𝟐)𝑳𝟐
−𝟒𝒙−𝟐𝒚−𝟐𝒛 = −6
𝟏𝑳𝟑
𝟓𝒙+ 𝟏𝒚+ 𝟑𝒛 = 5

(−𝟐)𝑳𝟐+ 𝟏𝑳𝟑
𝒙 −𝒚 + 𝒛 = −1

### Obtenção de sistemas lineares equivalentes

Uma propriedade importante dos sistemas lineares diz respeito à combinação linear de equações.

Em um sistema linear, ao substituir uma determinada equação por uma combinação linear dela
com outra equação, temos um sistema linear equivalente.

Considere o seguinte sistema linear:

{𝑥+ 3𝑦= 7

5𝑥+ 𝑦= 7

Ao substituir a segunda equação (𝑳𝟐) pela combinação linear 𝟏𝑳𝟐+ (−𝟓)𝑳𝟏, obtemos um novo sistema
linear que é equivalente ao primeiro.

Como 𝟏𝐿2 + (−𝟓)𝐿1 corresponde a −𝟏𝟒𝒚= −𝟐𝟖, ficamos com:

{𝑥+ 3𝑦= 7

5𝑥+ 𝑦= 7 ~ { 𝑥+ 3𝑦 = 7
−14𝑦 = −28

Para facilitar a comunicação, a substituição de 𝑳𝟐 por 𝑳𝟐+ (−𝟓)𝑳𝟏 será denotada da seguinte forma:

𝑳𝟐←𝟏𝑳𝟐+ (−𝟓)𝑳𝟏

A propriedade aprendida é válida quando substituímos a equação por uma combinação
linear de equações que contenha a equação original. Para o exemplo apresentado:

𝑳𝟐←1𝑳𝟐+ (−5)𝐿1

Vamos a um outro exemplo. Considere o seguinte sistema linear:

{

𝑥+ 𝑦+ 𝑧= 3
𝑥+ 2𝑦+ 2𝑧= 4
2𝑥+ 4𝑦+ 𝑧= 5

Ao substituir a segunda equação (𝐿2) pela combinação linear 𝟏𝐿2 + (−𝟏)𝐿1, obtemos um novo sistema
linear que é equivalente ao primeiro.

{

𝑥+ 𝑦+ 𝑧= 3
𝑥+ 2𝑦+ 2𝑧= 4
2𝑥+ 4𝑦+ 𝑧= 5
~ {

𝑥+ 𝑦+ 𝑧= 3
𝒚+ 𝒛= 𝟏
2𝑥+ 4𝑦+ 𝑧= 5

### Remoção de equações do sistema linear

Em um sistema linear, quando uma determinada equação corresponde a uma combinação linear
de outras equações do sistema, podemos eliminar essa equação do sistema.

Exemplo: considere o seguinte sistema.

{

𝒙+ 𝒚+ 𝒛= 𝟓
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑
𝟑𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟖

Temos que a terceira equação é uma combinação linear da primeira com a segunda, pois 𝑳𝟑= 𝟏𝑳𝟏+ 𝟏𝑳𝟐.
Logo, podemos eliminar a terceira equação. Isso significa que temos a seguinte equivalência:

{

𝒙+ 𝒚+ 𝒛= 𝟓
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑
𝟑𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟖

~ { 𝒙+ 𝒚+ 𝒛= 𝟓

𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑

A ideia por trás dessa remoção de uma equação é que, em um sistema linear, uma equação
que é combinação linear de outras contém uma informação desnecessária. No caso
apresentado, a informação 𝟑𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟖 já está contida, implicitamente, nas outras
duas equações.

Há uma situação análoga em que se pode eliminar uma equação do sistema linear:

Já sabemos que, em um sistema linear, ao substituir uma determinada equação por uma
combinação linear dela com outra equação, temos um sistema linear equivalente.
Se nessa substituição obtivermos uma equação no seguinte formato:

0𝑥+ 0𝑦+ 0𝑧+ 0𝑤= 0
Podemos remover essa equação do sistema linear.

Vamos utilizar o mesmo sistema linear como exemplo:

{

𝒙+ 𝒚+ 𝒛= 𝟓
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑
𝟑𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟖

Ao substituirmos 𝑳𝟑 por 𝑳𝟑+ (−1)𝐿1, temos o seguinte sistema linear equivalente:

{

𝒙+ 𝒚+ 𝒛= 𝟓
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑
𝟑𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟖

~ {

𝑥+ 𝑦+ 𝑧= 5
2𝑥+ 𝑦+ 3𝑧= 3
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑

Ao substituirmos novamente 𝑳𝟑 por 𝑳𝟑+ (−1)𝐿2, temos:

{

𝑥+ 𝑦+ 𝑧= 5
2𝑥+ 𝑦+ 3𝑧= 3
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑

~ {

𝑥+ 𝑦+ 𝑧= 5
2𝑥+ 𝑦+ 3𝑧= 3
𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝟎

Note que obtivemos uma equação no formato 𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝟎. Logo, podemos eliminar essa equação.

{

𝑥+ 𝑦+ 𝑧= 5
2𝑥+ 𝑦+ 3𝑧= 3
𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝟎

~ { 𝒙+ 𝒚+ 𝒛= 𝟓

𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑

Portanto, temos que o sistema linear original é equivalente ao novo sistema linear obtido, isto é:

{

𝒙+ 𝒚+ 𝒛= 𝟓
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑
𝟑𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟖

~ { 𝒙+ 𝒚+ 𝒛= 𝟓

𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑

### Classificação de um sistema linear

Um sistema linear pode ser classificado de três formas:

- Sistema Possível e Determinado (SPD): o sistema apresenta uma única solução;

- Sistema Possível e Indeterminado (SPI): o sistema apresenta infinitas soluções; e

- Sistema Impossível (SI): ocorre quando o sistema não apresenta solução.

A seguir, vamos entender essas três classificações com maiores detalhes. O procedimento de como realizar
essa classificação será visto no tópico de discussão de um sistema linear.

Um sistema linear pode apresentar solução única, infinitas soluções ou nenhuma solução.

Se um sistema linear apresenta mais de uma solução, então ele apresenta infinitas
soluções.

Não existe a possibilidade de ele apresentar "apenas duas soluções", "apenas três
soluções", etc.

Sistema Linear

Possível

Possível
Determinado

### (SPD)

Solução única

Possível
Indeterminado

### (SPI)

Infinitas soluções

Impossível (SI)
Sem solução

### Sistema possível e determinado (SPD)

Um sistema possível e determinado (SPD) é aquele que admite uma única solução.

Um exemplo de sistema possível e determinado é o seguinte:

{

x + y + z = 6
2𝑥+ 𝑦+ 3𝑧= 14
𝑥+ 2𝑦+ 𝑧= 7

Isso porque ele admite uma única solução: (𝑥, 𝑦, 𝑧) = (6, 14, 7).

Para um sistema ser possível e determinado, devemos ter:

- Um número de equações igual ao número de incógnitas;
- Essas equações não podem ser combinações lineares umas das outras (pois, nesse caso, podemos
eliminar equações); e
- Essas equações não podem se contradizer.

### Sistema possível e indeterminado (SPI)

Um sistema possível e indeterminado (SPI) é aquele que admite infinitas soluções.

Podemos tomar como exemplo o sistema que vimos recentemente:

{

𝒙+ 𝒚+ 𝒛= 𝟓
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑
𝟑𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟖

Lembre-se que ele é equivalente a um sistema com duas equações:

{

𝒙+ 𝒚+ 𝒛= 𝟓
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑
𝟑𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟖

~ { 𝒙+ 𝒚+ 𝒛= 𝟓

𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑

Veja que (𝒙, 𝒚, 𝒛) = (𝟎, 𝟔, −𝟏), bem como (−𝟒, 𝟖, 𝟏) e (−𝟐, 𝟕 𝟎) são soluções do sistema linear.

Solução (𝒙, 𝒚, 𝒛)
Teste em 𝒙+ 𝒚+ 𝒛= 𝟓
Teste em 𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑
(𝟎, 𝟔, −𝟏)
0 + 6 + (−1) = 5 →𝑶𝑲
2.0 + 6 + 3. (−1) = 3 →𝑶𝑲
(−𝟒, 𝟖, 𝟏)
(−4) + 8 + 1 = 5 →𝑶𝑲
2. (−4) + 8 + 3.1 = 3 →𝑶𝑲
(−𝟐, 𝟕, 𝟎)
(−2) + 7 + 0 = 5 →𝑶𝑲
2. (−2) + 7 + 3.0 = 3 →𝑶𝑲

Além dessas três soluções, temos infinitas outras. Logo, o sistema é possível e indeterminado.

### Sistema impossível (SI)

O sistema impossível ocorre quando o sistema não apresenta solução.

Exemplo:

{

𝑥+ 𝑦+ 𝑧= 5
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟑
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟒

Observe o que a segunda e a terceira equação estão nos dizendo: em uma equação, temos que
"𝟐𝒙+ 𝒚+ 𝟑𝒛" é igual a 3 e, na outra, temos que essa mesma soma é igual a 4.

Ora, não é possível encontrar uma solução (𝑥, 𝑦, 𝑧) cuja soma " 𝟐𝒙+ 𝒚+ 𝟑𝒛" seja igual a 3 e a 4 ao mesmo
tempo. Logo, o sistema é impossível.

### Sistema linear homogêneo

Um sistema linear homogêneo é aquele em que os termos independentes de todas as equações são iguais
a zero.

Exemplo:

{

3𝑥+ 1𝑦+ 𝑧= 𝟎
2𝑥+ 4𝑦+ 2𝑧= 𝟎
3𝑥+ 2𝑦+ 4𝑧= 𝟎

Observe que (𝒙, 𝒚, 𝒛) = (𝟎, 𝟎, 𝟎) é solução desse sistema.

Um sistema linear homogêneo é sempre possível, pois sempre admite a solução em que todas as variáveis
são zero (denominada solução trivial).

- Se o sistema linear homogêneo admitir somente a solução trivial, então ele é um Sistema Possível e
Determinado (SPD);

- Caso ele admita outras soluções, então ele admite infinitas soluções e é um Sistema Possível e
Indeterminado (SPI).

### Sistema Linear

### Homogêneo

### Sempre é

### Possível

### Possível e

### Determiando

### (SPD)

### Solução única

### (trivial)

### Possível e

### Indeterminado

### (SPI)

### Infinitas soluções

### (inclui a trivial)

(ANPEC/2001) Julgue o item a seguir como certo ou errado.

Um sistema homogêneo de equações lineares sempre tem solução.

Comentários:

Um sistema homogêneo de equações lineares, ou seja, um sistema linear homogêneo, é sempre possível,
isto é, sempre admite ao menos uma solução, a solução trivial.

Gabarito: CERTO.

### Solução de um sistema linear

Pessoal, até o momento o estudo foi mais voltado para a construção de uma base teórica. A partir de agora,
temos que redobrar a atenção.

### Solução por substituição

A solução por substituição consiste em isolar uma variável em uma equação e substituir em outra equação.
Veja o próximo exemplo:

Encontre a solução do seguinte sistema linear: {𝟑𝒙+ 𝟐𝒚= 𝟐

𝟐𝒙+ 𝒚= 𝟒.

A partir da segunda equação, podemos isolar 𝑦:

2𝑥+ 𝑦= 4

𝒚= 𝟒−𝟐𝒙

Substituindo esse 𝒚 na primeira equação, temos:

3𝑥+ 2𝒚= 2

3𝑥+ 2. (𝟒−𝟐𝒙) = 2

3𝑥−8 −4𝑥= 2

−𝑥+ 8 = 2

−𝑥= −6

𝒙= 𝟔

Como 𝒚= 𝟒−𝟐𝒙, temos:

𝑦= 4 −2𝒙

𝑦= 4 −2. 𝟔

𝒚= −𝟖

Logo, a solução do sistema em questão é (𝒙, 𝒚) = (𝟔, −𝟖).

(SEFAZ AM/2022) 𝑥 e 𝑦 são tais que 4𝑥+ 5𝑦= 80 e 6𝑥+ 7𝑦= 116. O valor de 2𝑥+ 3𝑦 é:

a) 38

b) 40

c) 42

d) 44

e) 46

Comentários:

Vamos resolver o sistema linear por substituição. Temos o seguinte sistema linear:

{ 4𝑥+ 5𝑦= 80

6𝑥+ 7𝑦= 116

A partir da primeira equação, podemos isolar 𝑥:

4𝑥+ 5𝑦= 80

4𝑥= 80 −5𝑦

𝒙= 𝟖𝟎−𝟓𝒚

𝟒

Substituindo o valor de 𝑥 na segunda equação, temos:

6𝑥+ 7𝑦= 116

6 × (80 −5𝑦
) + 7𝑦= 116

3 × (80 −5𝑦
) + 7𝑦= 116

3 × (40 −2,5𝑦) + 7𝑦= 116

120 −7,5𝑦+ 7𝑦= 116

−0,5𝑦= 116 −120

−0,5𝑦= −4

𝑦= −4

−0,5

𝒚= 𝟖

Substituindo o valor de 𝑦 em 𝒙=

𝟖𝟎−𝟓𝒚

𝟒
, temos:

𝑥= 80 −5𝑦

4

𝑥= 80 −5 × 8

4

𝑥= 80 −40

4

𝑥= 40

4

𝒙= 𝟏𝟎

Logo, o valor procurado é:

2𝑥+ 3𝑦

= 2 × 10 + 3 × 8

= 20 + 24

= 44

Gabarito: Letra D.

### Solução por eliminação de variável

Consiste em eliminar variáveis por meio de uma combinação linear conveniente das equações do sistema
linear.

==5460==

Trata-se de uma solução não muito metodológica, uma vez que não há uma clareza do
passo a passo a ser seguido.

Veremos, mais adiante, que o método do escalonamento é uma versão procedimental do
que aprenderemos nesse tópico.

Vejamos dois exemplos:

Encontre a solução do seguinte sistema linear: {𝟑𝒙+ 𝟐𝒚= 𝟐

𝟐𝒙−𝟐𝒚= 𝟑

Ao realizar a soma das duas primeiras equações, isto é, a combinação linear 𝑳𝟏+ 𝑳𝟐, elimina-se a variável
𝑦:

𝑳𝟏
3𝑥+ 2𝑦= 2
𝑳𝟐
2𝑥−2𝑦= 3

𝑳𝟏+ 𝑳𝟐
𝟓𝒙 = 𝟓

Dividindo ambos os lados da equação por 5, ficamos com:

𝒙= 𝟏

Para obter 𝑦, podemos substituir o valor de 𝒙 em qualquer uma das equações do sistema linear. Vamos
substituir na primeira:

3𝒙+ 2𝑦= 2

3. 𝟏+ 2𝑦= 2

2𝑦= 2 −3

2𝑦= −1

𝒚= −𝟏

𝟐

Logo, a solução do sistema em questão é (𝒙, 𝒚) = (𝟏, −

𝟐).

Encontre a solução do seguinte sistema linear: {

𝒙+ 𝟐𝒚+ 𝒛= 𝟓
𝟐𝒙+ 𝟐𝒚+ 𝟑𝒛= 𝟗

𝒙+ 𝒚+ 𝒛= 𝟑

Ao realizar a combinação linear 𝑳𝟏+ (−𝟏)𝑳𝟑, elimina-se as variáveis 𝑥 e 𝑧:

𝑳𝟏
𝑥+ 2𝑦+ 𝑧= 5
(−𝟏)𝑳𝟑
−𝑥− 𝑦−𝑧= −3

𝑳𝟏+ (−𝟏)𝑳𝟑
𝒚 = 𝟐

Ao realizar a combinação linear 𝑳𝟐+ (−𝟐)𝑳𝟑, elimina-se as variáveis 𝑥 e 𝑦:

𝑳𝟐
2𝑥+ 2𝑦+ 3𝑧= 9
(−𝟐)𝑳𝟑
−2𝑥−2𝑦−2𝑧= −6

𝑳𝟏+ (−𝟏)𝑳𝟑
𝒛= 𝟑

Temos, portanto, que 𝒚= 𝟐 e 𝒛= 𝟑. Para obter 𝑥, podemos substituir esses valores em qualquer uma das
equações do sistema linear. Vamos substituir na terceira:

𝑥+ 𝒚+ 𝒛= 3

𝑥+ 𝟐+ 𝟑= 3

𝒙= −𝟐

Portanto, a solução do sistema linear é (𝒙, 𝒚, 𝒛) = (−𝟐, 𝟐, 𝟑).

### Solução pela soma das equações do sistema

Pessoal, existem casos em que a solução do sistema linear é obtida de modo mais rápido realizando a soma
de todas as equações do sistema. Vejamos um exemplo:

Encontre a solução do seguinte sistema linear: {

𝒙+ 𝒚= 𝟑
𝒙+ 𝒛= 𝟒
𝒚+ 𝒛= 𝟓

Somando todas as equações do sistema, isto é, realizando a combinação linear 𝑳𝟏+ 𝑳𝟐+ 𝑳𝟑, temos:

𝑳𝟏
𝑳𝟐
𝑳𝟑

𝑥+ 𝑦+ 𝑧= 3
𝑥+ 𝑦+ 𝑧= 4
𝑥+ 𝑦+ 𝑧= 5

𝑳𝟏+ 𝑳𝟐+ 𝑳𝟑
2𝑥+ 2𝑦+ 2𝑧= 12

Ficamos com:

2(𝑥+ 𝑦+ 𝑧) = 12

𝒙+ 𝒚+ 𝒛= 𝟔

A partir dessa informação, podemos subtrair cada equação do sistema linear de 𝒙+ 𝒚+ 𝒛= 𝟔.

𝒙+ 𝒚+ 𝒛= 𝟔
(−𝟏)𝑳𝟏
−𝑥−𝑦 = −3

𝒛= 𝟑

𝒙+ 𝒚+ 𝒛= 𝟔
(−𝟏)𝑳𝟐
−𝑥+ 𝑦−𝑧= −4

𝒚 = 𝟐

𝒙+ 𝒚+ 𝒛= 𝟔
(−𝟏)𝑳𝟑
𝑥−𝑦−𝑧= −5

𝒙 = 𝟏

Portanto, a solução do sistema linear é (𝒙, 𝒚, 𝒛) = (𝟏, 𝟐, 𝟑).

(MPE SC/2022) No sistema

{

3𝑎+ 𝑏+ 𝑐+ 𝑑= 16
𝑎+ 3𝑏+ 𝑐+ 𝑑= 6
𝑎+ 𝑏+ 3𝑐+ 𝑑= 14
𝑎+ 𝑏+ 𝑐+ 3𝑑= 12

o valor de 𝑎 é:

a) –1;

b) 1;

c) 2;

d) 3;

e) 4.

Comentários:

Ao somar todas as equações do sistema linear, temos:

3𝑎+ 𝑏+ 𝑐+ 𝑑= 16
𝑎+ 3𝑏+ 𝑐+ 𝑑= 6
𝑎+ 𝑏+ 3𝑐+ 𝑑= 14
𝑎+ 𝑏+ 𝑐+ 3𝑑= 12

6𝑎+ 6𝑏+ 6𝑐+ 6𝑑= 48

Ficamos com:

6(𝑎+ 𝑏+ 𝑐+ 𝑑) = 48

𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟖

A partir dessa informação, podemos subtrair 𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟖 da primeira equação do sistema linear.

3𝑎+ 𝑏+ 𝑐+ 𝑑= 16
−𝒂−𝒃−𝒄−𝒅= −𝟖

𝟐𝒂 = 𝟖

Logo, dividindo os dois lados da equação por 2, temos 𝒂= 𝟒.

Gabarito: Letra E.

(TCE TO/2022) Considere o sistema:

{

𝑥+ 𝑦+ 5𝑧= 0
𝑥+ 5𝑦+ 𝑧= 14
5𝑥+ 𝑦+ z = 28

O valor de 𝑥 é:

a) 3/2;

b) 5/2;

c) 7/2;

d) 9/2;

e) 11/2.

Comentários:

Ao somar todas as equações do sistema linear, temos:

𝑥+ 𝑦+ 5𝑧= 0
𝑥+ 5𝑦+ 𝑧= 14
5𝑥+ 𝑦+ 𝑧= 28

7𝑥+ 7𝑦+ 7𝑧= 42

Ficamos com:

7(𝑥+ 𝑦+ 𝑧) = 42

𝑥+ 𝑦+ 𝑧= 42

7

𝑥+ 𝑦+ 𝑧= 6

A partir dessa informação, podemos subtrair 𝒙+ 𝒚+ 𝒛= 𝟔 da terceira equação do sistema linear.

5𝑥+ 𝑦+ 𝑧= 28
−𝒙−𝒚−𝒛= −𝟔

𝟒𝒙 = 𝟐𝟐

Portanto:

𝑥= 22

4

𝑥= 11

2

Gabarito: Letra E.

### Solução por matriz inversa

Considere um sistema linear cujo número de equações (𝒏) é igual ao número de incógnitas. Note que, nesse
caso, a matriz dos coeficientes (𝑨) do sistema linear será quadrada, de dimensão 𝒏× 𝒏.

O sistema pode ser escrito na forma matricial do seguinte modo:

𝑨𝒏×𝒏𝑿𝒏×𝟏= 𝑩𝒏×𝟏

Supondo que 𝐝𝐞𝐭𝑨≠𝟎, você deve se lembrar da aula de determinantes que a matriz 𝑨 possui inversa. Ao
multiplicar ambos os lados da equação por 𝐴−1 pela esquerda, temos:

𝑨−𝟏𝑨𝑿= 𝑨−𝟏𝑩

Pela definição de matriz inversa, temos que 𝑨−𝟏𝑨= 𝑰. Logo:

𝑰𝑿= 𝑨−𝟏𝑩

Como a matriz identidade é o elemento neutro da multiplicação de matrizes, ficamos com:

𝑿= 𝑨−𝟏𝑩

Veja, portanto, que a matriz das incógnitas (𝑿) é obtida pelo produto da matriz inversa dos coeficientes
pela matriz dos termos independentes.

Vamos resolver um exemplo.

Encontre a solução do seguinte sistema linear: {𝟑𝒙+ 𝟐𝒚= 𝟐

𝟐𝒙−𝟐𝒚= 𝟑

No sistema linear apresentado, a matriz dos coeficientes é dada por 𝐴= [3
2
2
−2] e matriz dos termos

independentes é 𝐵= [2

3]. Note que a matriz 𝐴 é inversível, pois:

det 𝐴= [3 × (−2)] −[2 × 2] = −10

Da aula sobre determinantes, você deve se lembrar que, para uma matriz 𝐴= [𝒂
𝒃
𝒄
𝒅], a sua inversa é dada

por 𝐴−1 =

1

det 𝐴[ 𝒅
−𝒃
−𝒄
𝒂]. Logo, para o nosso caso:

𝐴−1 =
1
−10 [−2
−2
−2
3 ]

A matriz dos coeficientes 𝑿 do sistema linear em questão é:

𝑿= 𝑨−𝟏𝑩

[𝑥

𝑦] =
1
−10 [−𝟐
−𝟐
−𝟐
𝟑] [𝟐

𝟑]

= −1

10 [(−𝟐). 𝟐+ (−𝟐). 𝟑
(−𝟐). 𝟐+ 𝟑. 𝟑]

= −1

10 [−10
5 ]

= [

−1

10 . (−10)

−1

10 . 5
]

= [
1
−1/2]

Veja que [𝑥

𝑦] = [
1
−1/2], isto é, 𝑥= 1 e 𝑦= −

1

2. Portanto, a solução do sistema linear é (𝒙, 𝒚) = (𝟏, −
𝟏

𝟐).

(PETROBRAS/2008) A matriz 𝑋= [𝑥

𝑦], solução do sistema de equações lineares

{2𝑥+ 3𝑦= 185

3𝑥+ 2𝑦= 190

pode ser expressa na forma 𝑋= 𝑃𝐵, em que 𝐵= [195

190] é a matriz dos termos constantes do sistema, 𝑃 é

uma matriz constante, quadrada, de dimensão 2 × 2. Nesse caso, assinale a opção correspondente à matriz
𝑃.

a) [

3

5
−

2

5
2

5

3

5
]

b) [

1

5

2

5
2

5

3

5
]

c) [

2

5

3

5
2

5

3

5
]

d) [

−

2

5

3

5
3

5
−

2

5
]

e) [

−

1

5

2

5
2

5
−

1

5
]

Comentários:

Considerando o sistema apresentado:

{2𝑥+ 3𝑦= 185

3𝑥+ 2𝑦= 190

Temos que a matriz dos coeficientes é 𝑨= [2
3
3
2]. Como det 𝐴≠0, então a matriz 𝑨 é inversível.

det 𝐴= [2.2] −[3.3] = 4 −9 = −5

O sistema linear pode ser representado na sua forma matricial por:

𝑨𝑿= 𝑩

Como a matriz 𝐴 é inversível, podemos multiplicar ambos os lados da equação por 𝐴−1 pela esquerda:

𝑨−𝟏𝑨𝑿= 𝑨−𝟏𝑩

𝑰𝑿= 𝑨−𝟏𝑩

𝑿= 𝑨−𝟏𝑩

Comparando 𝑿= 𝑨−𝟏𝑩 a equação matricial apresentada no enunciado, dada por 𝑿= 𝑷𝑩, temos que
𝑷= 𝑨−𝟏.

Para uma matriz 𝐴= [𝒂
𝒃
𝒄
𝒅], a sua inversa é dada por 𝐴−1 =

1

det 𝐴[ 𝒅
−𝒃
−𝒄
𝒂]. Logo, para o nosso caso:

𝐴−1 = 1

−5 [ 2
−3
−3
2 ] = [
−1

5 × 2
−1

5 × (−3)

−1

5 × (−3)
−1

5 × 2
] = [

−2

5
3
5
3
5
−2

5

]

Portanto, 𝑃= 𝐴−1 = [

−

2

5

3

5
3

5
−

2

5
]

Gabarito: Letra D.

### Teorema de Cramer

Primeiramente, deve-se entender que o Teorema de Cramer só pode ser utilizado quando o número de
equações do sistema linear (𝒏) é igual ao número de incógnitas. Nesse caso, a matriz dos coeficientes (𝑨)
do sistema linear será quadrada, de dimensão 𝒏× 𝒏.

Considere, então, um sistema linear escrito na forma matricial:

𝑨𝒏×𝒏𝑿𝒏×𝟏= 𝑩𝒏×𝟏

Vamos chamar de 𝑫 o determinante da matriz dos coeficientes (𝑨). Ou seja:

𝐷= det 𝐴

O Teorema de Cramer nos diz duas coisas:

1) Se 𝐷≠0, o sistema é possível e determinado (SPD), apresentando solução única.
2) Sendo 𝐷≠0, a solução única (𝛼1, 𝛼2, … 𝛼𝑛) do sistema linear é tal que:

### 𝛼𝑖=

𝐷𝑖

𝐷

Onde 𝐷𝑖 é o determinante da matriz que se obtém a partir de 𝐴𝑛×𝑛 substinuindo a coluna 𝑖 pela
matriz 𝐵𝑛×1.

Professor, não entendi nada!

Calma, concurseiro. O entendimento só virá com o desenvolvimento do próximo exemplo. Ao acompanhá-
lo, o Teorema de Cramer fica mais claro.

Encontre a solução do seguinte sistema linear {

𝒙+ 𝟐𝒚+ 𝒛= 𝟓
𝟐𝒙+ 𝟐𝒚+ 𝟑𝒛= 𝟗

𝒙+ 𝒚+ 𝒛= 𝟑

pelo Teorema de Cramer.

Ao representar o sistema linear na sua forma matricial, temos 𝐴𝑋= 𝐵, sendo:

𝐴= [

1
2
1
2
2
3
1
1
1
] 𝑋= [

𝑥
𝑦
𝑧

] 𝐵= [

5
9
3
]

Primeiro, devemos obter o determinante da matriz 𝐴:

𝐷= det 𝐴= |

1
2
1
2
2
3
1
1
1
|

Aplicando a Regra de Sarrus, ficamos com:

|

1
2
1
2
2
3
1
1
1
|

1
2
2
2
1
1

Parte Negativa Parte Positiva

𝐷= [𝟏. 𝟐. 𝟏+ 𝟐. 𝟑. 𝟏+ 𝟏. 𝟐. 𝟏] −[𝟏. 𝟐. 𝟏+ 𝟏. 𝟑. 𝟏+ 𝟐. 𝟐. 𝟏]

𝐷= 10 −9

𝐷= 1

Como 𝐷≠0, o sistema é possível e determinado (SPD), sendo possível aplicar o teorema.

Obtenção de 𝒙

Para obter 𝑥, vamos utilizar a seguinte relação:

𝑥= 𝐷𝑥

𝐷

Já temos o valor do determinante 𝐷. Nesse momento, devemos obter 𝐷𝑥.

𝐷𝑥 é o determinante da matriz que se obtém a partir da matriz 𝐴 substituindo a coluna dos coeficientes da
variável 𝒙 pela matriz 𝐵.

𝐴= [

𝟏
𝟐
𝟏
𝟐
𝟐
𝟑
𝟏
𝟏
𝟏

] 𝐵= [

𝟓
𝟗
𝟑

]

𝐷𝑥= |

𝟓
𝟐
𝟏
𝟗
𝟐
𝟑
𝟑
𝟏
𝟏

|

Aplicando a Regra de Sarrus, ficamos com:

|

5
2
1
9
2
3
3
1
1
|

5
2
9
2
3
1

Parte Negativa Parte Positiva

𝐷𝑥= [𝟓. 𝟐. 𝟏+ 𝟐. 𝟑. 𝟑+ 𝟏. 𝟗. 𝟏] −[𝟏. 𝟐. 𝟑+ 𝟓. 𝟑. 𝟏+ 𝟐. 𝟗. 𝟏]

𝐷𝑥= 37 −39

𝐷𝑥= −2

Logo:

𝑥= 𝐷𝑥

𝐷= −2

1

𝑥= −2

Obtenção de 𝒚

𝐷𝑦 é o determinante da matriz que se obtém a partir da matriz 𝐴 substituindo a coluna dos coeficientes da
variável 𝒚 pela matriz 𝐵.

𝐴= [

𝟏
𝟐
𝟏
𝟐
𝟐
𝟑
𝟏
𝟏
𝟏

] 𝐵= [

𝟓
𝟗
𝟑

]

𝐷𝑦= |

𝟏
𝟓
𝟏

|

Coeficientes de 𝒙

Coeficientes de 𝒚

Aplicando a Regra de Sarrus, ficamos com:

|

1
3
1
|

1
3

Parte Negativa Parte Positiva

𝐷𝑦= [𝟏. 𝟗. 𝟏+ 𝟓. 𝟑. 𝟏+ 𝟏. 𝟐. 𝟑] −[𝟏. 𝟗. 𝟏+ 𝟏. 𝟑. 𝟑+ 𝟓. 𝟐. 𝟏]

𝐷𝑦= 30 −28

𝐷𝑦= 2

Logo:

𝑦= 𝐷𝑦

𝐷= 2

1

𝑦= 2

Obtenção de 𝒛

𝐷𝑧 é o determinante da matriz que se obtém a partir da matriz 𝐴 substituindo a coluna dos coeficientes da
variável 𝒛 pela matriz 𝐵.

𝐴= [

𝟏
𝟐
𝟏
𝟐
𝟐
𝟑
𝟏
𝟏
𝟏

] 𝐵= [

𝟓
𝟗
𝟑

]

𝐷𝑧= |

𝟏
𝟐
𝟓
𝟐
𝟐
𝟗
𝟏
𝟏
𝟑

|

Aplicando a Regra de Sarrus, ficamos com:

|

1
2
5
2
2
9
1
1
3
|

1
2
2
2
1
1

Parte Negativa Parte Positiva

𝐷𝑧= [𝟏. 𝟐. 𝟑+ 𝟐. 𝟗. 𝟏+ 𝟓. 𝟐. 𝟏] −[𝟓. 𝟐. 𝟏+ 𝟏. 𝟗. 𝟏+ 𝟐. 𝟐. 𝟑]

𝐷𝑧= 34 −31

𝐷𝑧= 3

Logo:

𝑧= 𝐷𝑧

𝐷= 3

𝑧= 3

Portanto, a solução do sistema linear é (𝒙, 𝒚, 𝒛) = (𝟏, 𝟐, 𝟑).

Coeficientes de 𝒛

(AFRFB/2012) Considere o sistema de equações lineares dado por:

{

𝑥+ 𝑦+ 𝑧= 0
𝑥−𝑦+ 𝑟𝑧= 2
𝑟𝑥+ 2𝑦+ 𝑧= −1

Sabendo-se que o sistema tem solução única para 𝑟≠0 e 𝑟≠1, então o valor de 𝑥 é igual a

a)

2

𝑟

b)

−2

𝑟

c)

1

𝑟

d)

−1

𝑟

e) 2𝑟

Comentários:

Vamos resolver essa questão com o Teorema de Cramer.

Note que as variáveis do sistema são 𝑥, 𝑦 e 𝑧, sendo 𝑟 uma constante.

Ao representar o sistema linear na sua forma matricial, temos 𝐴𝑋= 𝐵, sendo:

𝐴= [

1
1
1
1
−1
𝑟
𝑟
2
1
] 𝑋= [

𝑥
𝑦
𝑧

] 𝐵= [

0
2
−1

]

Primeiro, devemos obter o determinante da matriz 𝐴:

𝐷= det 𝐴= |

1
1
1
1
−1
𝑟
𝑟
2
1
|

Aplicando a Regra de Sarrus, ficamos com:

|

1
1
1
1
−1
𝑟
𝑟
2
1
|

1
1
1
−1
𝑟
2

Parte Negativa Parte Positiva

𝐷= [𝟏. (−𝟏). 𝟏+ 𝟏. 𝒓. 𝒓+ 𝟏. 𝟏. 𝟐] −[𝟏. (−𝟏). 𝒓+ 𝟏. 𝒓. 𝟐+ 𝟏. 𝟏. 𝟏]

𝐷= [𝑟2 + 1] −[𝑟+ 1]

𝐷= 𝑟2 −𝑟

𝐷= 𝑟(𝑟−1)

O enunciado pede a solução para 𝑟≠0 e 𝑟≠1. Note que, para esse caso, 𝑫 será diferente de zero.
Portanto, podemos aplicar o Teorema de Cramer.

Para obter 𝑥, vamos utilizar a seguinte relação:

𝑥= 𝐷𝑥

𝐷

𝐷𝑥 é o determinante da matriz que se obtém a partir da matriz 𝐴 substituindo a coluna dos coeficientes da
variável 𝒙 pela matriz 𝐵.

𝐴= [

𝟏
𝟏
𝟏
𝟏
−𝟏
𝒓
𝒓
𝟐
𝟏

] 𝐵= [

𝟎
𝟐
−𝟏

]

𝐷𝑥= |

𝟎
𝟏
𝟏
𝟐
−𝟏
𝒓
−𝟏
𝟐
𝟏

|

Aplicando a Regra de Sarrus, ficamos com:

|

0
1
1
2
−1
𝑟
−1
2
1
|

0
1
2
−1
−1
2

Parte Negativa Parte Positiva

𝐷𝑥= [𝟎. (−𝟏). 𝟏+ 𝟏. 𝒓. (−𝟏) + 𝟏. 𝟐. 𝟐] −[𝟏. (−𝟏). (−𝟏) + 𝟎. 𝒓. 𝟐+ 𝟏. 𝟐. 𝟏]

𝐷𝑥= [−𝑟+ 4] −[3]

𝐷𝑥= 1 −𝑟

Logo:

𝑥= 𝐷𝑥

𝐷=
1 −𝑟
𝑟(𝑟−1) = −(𝑟−1)

𝑟(𝑟−1)

Simplificando (𝑟−1), obtemos:

𝑥= −1

𝑟

Gabarito: Letra D.

### Método do escalonamento

O método do escalonamento, também conhecido por Eliminação Gaussiana, sem dúvidas é o melhor meio
para se resolver sistemas lineares.

0

Coeficientes de 𝒙

Esse método nos traz um passo a passo, uma "receita de bolo". Não é necessário ter uma "sacada" para
resolver o sistema. Além disso, não precisamos resolver determinantes, como acontece no Teorema de
Cramer.

O método consiste em obter um sistema equivalente ao sistema original em que o número de variáveis
explícitas diminui de equação para equação. Em outras palavras, o número de coeficientes nulos aumenta
de equação para equação.

Considere o seguinte sistema:

{

2𝑥+ 𝑦+ 𝑧= 4
2𝑥+ 4𝑦+ 4𝑧= 22
2𝑥+ 4𝑦+ 3𝑧= 10

A ideia do método do escalonamento é chegar no seguinte sistema equivalente:

{

2𝑥+ 𝑦+ 𝑧= 4
3𝑦+ 3𝑧= 18

−𝑧= −12

Dizemos que este sistema é um sistema escalonado porque o número de variáveis explícitas diminui de
equação para equação. Note que na primeira equação temos 3 variáveis explícitas, na segunda equação
temos 2 variáveis e, na última equação, temos apenas uma variável explícita.

Veja como o sistema escalonado é interessante: a partir da última equação, obtemos o valor de 𝒛. Na
penúltima equação conseguimos obter o valor de 𝒚, pois já temos o valor de 𝑧. Por fim, na primeira equação,
conseguimos obter o valor de 𝒙, pois já temos 𝑦 e 𝑧.

Ok, professor. Mas como obtenho esse sistema escalonado?

Para obter o sistema escalonado, devemos seguir os seguintes passos:

- Colocar como 1ª equação uma que apresente a 1ª incógnita;

- Anular a 1ª incógnita de todas as equações (exceto da 1ª) fazendo uso da 1ª equação;

- Anular a 2ª incógnita de todas as equações (exceto da 1ª e da 2ª) fazendo uso da 2ª equação;

- Anular a 3ª incógnita de todas as equações (exceto da 1ª, da 2ª e da 3ª) fazendo uso da 3ª equação;

- E assim sucessivamente, até que tenhamos usado todas as equações.

Vamos aprender na prática.

Encontre a solução do seguinte sistema linear {

𝟐𝒙+ 𝒚+ 𝒛= 𝟒
𝟐𝒙+ 𝟒𝒚+ 𝟒𝒛= 𝟐𝟐
𝟐𝒙+ 𝟒𝒚+ 𝟑𝒛= 𝟏𝟎

pelo método do escalonamento.

- Note que a 1ª equação já apresenta a 1ª incógnita (𝒙).

- Devemos, agora, eliminar a 1ª incógnita (𝒙) de todas as equações (exceto da 1ª) fazendo uso da 1ª
equação.

Temos o seguinte sistema linear:

{

2𝑥+ 𝑦+ 𝑧= 4
2𝑥+ 4𝑦+ 4𝑧= 22
2𝑥+ 4𝑦+ 3𝑧= 10

Fazendo 𝐿2 ←𝟏𝐿2 + (−𝟏)𝐿1, obtemos um sistema linear equivalente:

~ {

2𝑥+ 𝑦+ 𝑧= 4
2𝑥+ 3𝑦+ 3𝑧= 18
2𝑥+ 4𝑦+ 3𝑧= 10

Fazendo 𝐿3 ←𝟏𝐿3 + (−𝟏)𝐿1, obtemos um sistema linear equivalente:

~ {

2𝑥+ 𝑦+ 𝑧= 4
2𝑥+ 3𝑦+ 3𝑧= 18
2𝑥+ 3𝑦+ 2𝑧= 6

- Devemos, agora, eliminar a 2ª incógnita (𝒚) de todas as equações (exceto da 1ª e da 2ª) fazendo uso da
2ª equação.

Fazendo 𝐿3 ←𝟏𝐿3 + (−𝟏)𝐿2, obtemos um sistema linear equivalente:

~ {

2𝑥+ 𝑦+ 𝑧= 4
2𝑥+ 3𝑦+ 3𝑧= 18
2𝑥+ 3𝑦−1𝑧= −12

Observe que obtemos um sistema escalonado. Nesse momento, devemos parar o escalonamento e obter a
solução a partir da última equação.

−1𝑧= −12

𝒛= 𝟏𝟐

Da segunda equação, temos:

3𝑦+ 3𝒛= 18

3𝑦+ 3. 𝟏𝟐= 18

3𝑦= −18

𝒚= −𝟔

Da primeira equação, temos:

2𝑥+ 𝒚+ 𝒛= 4

2𝑥+ (−𝟔) + 𝟏𝟐= 4

2𝑥+ 6 = 4

2𝑥= −2

𝒙= −𝟏

Portanto, a solução do sistema linear é (𝒙, 𝒚, 𝒛) = (−𝟏, −𝟔, 𝟏𝟐).

Observe que, no problema anterior, obtivemos a seguinte sequência de sistemas equivalentes:

{

𝟐𝒙+ 𝒚+ 𝒛= 𝟒
𝟐𝒙+ 𝟒𝒚+ 𝟒𝒛= 𝟐𝟐
𝟐𝒙+ 𝟒𝒚+ 𝟑𝒛= 𝟏𝟎

~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 {

2𝑥+ 𝑦+ 𝑧= 4
2𝑥+ 3𝑦+ 3𝑧= 18
2𝑥+ 4𝑦+ 3𝑧= 10
~
𝐿3←𝟏𝐿3+(−𝟏)𝐿1 {

2𝑥+ 𝑦+ 𝑧= 4
2𝑥+ 3𝑦+ 3𝑧= 18
2𝑥+ 3𝑦+ 2𝑧= 6

~
𝐿3←𝟏𝐿3+(−𝟏)𝐿2 {

2𝑥+ 𝑦+ 𝑧= 4
2𝑥+ 3𝑦+ 3𝑧= 18
2𝑥+ 3𝑦−1𝑧= −12

Uma outra forma de escalonar o sistema é utilizando a matriz completa do sistema [𝐴|𝐵].

[

𝟐
𝟏
𝟏
𝟒
𝟐
𝟒
𝟒
𝟐𝟐
𝟐
𝟒
𝟑
𝟏𝟎

]
~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 [

2
1
1
4
0
3
3
18
2
4
3
10
]
~
𝐿3←𝟏𝐿3+(−𝟏)𝐿1 [

2
1
1
4
0
3
3
18
0
3
2
6
]

~
𝐿3←𝟏𝐿3+(−𝟏)𝐿2 [

2
1
1
4
0
3
3
18
0
0
−1
−12

]

Dê preferência ao escalonamento por meio da matriz completa do sistema. Isso porque
ela traz maior agilidade no escalonamento, pois não é necessário escrever diversas vezes
as incógnitas 𝑥, 𝑦 e 𝑧.

Para evitar trabalhar com frações na hora de escalonar um sistema, um recurso interessante é alterar a
ordem das equações. Veremos isso na resolução do primeiro exercício a seguir.

(Pref. Rezende/2019) O valor de 𝑥 no sistema linear a seguir é:

{

2𝑥+ 𝑦+ 3𝑧= 19
𝑥+ 2𝑦+ 𝑧= 12

3𝑥−𝑦+ 𝑧= 7

a) 1

b) 2

c) 3

d) 4

Comentários:

Vamos resolver essa questão pelo método do escalonamento, fazendo uso da matriz completa do sistema.
Inicialmente, temos:

{

2𝑥+ 𝑦+ 3𝑧= 19
𝑥+ 2𝑦+ 𝑧= 12

3𝑥−𝑦+ 𝑧= 7

Note que, para iniciar o escalonamento, teríamos que fazer 𝐿2 ←𝟏𝐿2 + (−

𝟏

𝟐) 𝐿1 para eliminar a incógnita
𝑥 da segunda equação. Para evitar trabalhar com números fracionários, vamos trocar a primeira e a segunda
equação de lugar:

{

𝑥+ 2𝑦+ 𝑧= 12
2𝑥+ 𝑦+ 3𝑧= 19
3𝑥−𝑦+ 𝑧= 7

A matriz completa do sistema é:

[

1
2
1
12
2
1
3
19
3
−1
1
7
]

- Note que a 1ª equação já apresenta a 1ª incógnita (𝒙).

- Devemos, agora, eliminar a 1ª incógnita (𝒙) de todas as equações (exceto da 1ª) fazendo uso da 1ª
equação.

Fazendo 𝐿2 ←𝟏𝐿2 + (−𝟐)𝐿1, obtemos um sistema linear equivalente:

~ [

−3
−5
−1
]

Fazendo 𝐿3 ←𝟏𝐿3 + (−𝟑)𝐿1, obtemos um sistema linear equivalente:

~ [

−3
−5
0
−7
−2
−29

]

- Devemos, agora, eliminar a 2ª incógnita (𝒚) de todas as equações (exceto da 1ª e da 2ª) fazendo uso da
2ª equação.

Fazendo 𝐿3 ←𝟏𝐿3 + (−

𝟕

𝟑) 𝐿1, obtemos um sistema linear equivalente:

~ [

1
2
1
12
0
−3
1
−5

0
0
−13

3
−52

3

]

Note, portanto, que obtivemos o seguinte sistema equivalente:

{

𝑥+ 2𝑦+ 𝑧= 12
𝑥−3𝑦+ 𝑧= −5

𝑥+ 𝑦−13

3 𝑧= −52
3

Da última equação, temos:

−13

3 𝑧= −52
3

13𝑧= 52

𝒛= 𝟒

Da segunda equação, temos:

−3𝑦+ 𝑧= −5

−3𝑦+ 4 = −5

−3𝑦= −9

𝒚= 𝟑

Da primeira equação, temos:

𝑥+ 2𝑦+ 𝑧= 12

𝑥+ 2.3 + 4 = 12

𝑥= 12 −4 −6

𝒙= 𝟐

Portanto, o valor de 𝑥 é 2.

Gabarito: Letra B.

(Pref. Caxias do Sul/2019) Dado o sistema de equações lineares abaixo:

𝑌= {

2𝑥1 + 2𝑥2 + 𝑥3 = 8
3𝑥1 + 2𝑥2 + 𝑥3 = 10
2𝑥1 + 2𝑥2 + 2𝑥3 = 16

O conjunto solução S com base na ordem de 𝑆= (𝑥2, 𝑥1, 𝑥3) é:

a) 𝑆= (𝑥2, 𝑥1, 𝑥3) = (2, −2, 8).

b) 𝑆= (𝑥2, 𝑥1, 𝑥3) = (−2, 2, 8).

c) 𝑆= (𝑥2, 𝑥1, 𝑥3) = (8, −2, 2).

d) 𝑆= (𝑥2, 𝑥1, 𝑥3) = (2, 8, 2).

e) 𝑆= (𝑥2, 𝑥1, 𝑥3) = (2, 2, 8).

Comentários:

Vamos resolver essa questão pelo método do escalonamento, fazendo uso da matriz completa do sistema.

[

2
2
1
8
3
2
1
10
2
2
2
16
]
~
𝐿2←𝟏𝐿2+(−𝟑

𝟐)𝐿1

[

2
2
1
8
0
−1
−1/2
−2
2
2
2
16
]
~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 [

2
2
1
8
0
−1
−1/2
−2
0
0
1
8
]

Veja que a última operação já eliminou a variável 𝑥1 e 𝑥2 da terceira equação.

Ficamos com o seguinte sistema escalonado:

{

2𝑥1 + 2𝑥2 + 𝑥3 = 8

𝑥1 −1𝑥2 −1

2 𝑥3 = −2

𝑥1 + 𝑥2 + 1𝑥3 = 8

Da última equação, temos:

𝒙𝟑= 𝟖

Da segunda equação, temos:

−1𝑥2 −1

2 𝒙𝟑= −2

−𝑥2 −1

2 . 8 = −2

−𝑥2 −4 = −2

−𝑥2 = 4 −2

−𝑥2 = 2

𝒙𝟐= −𝟐

Da primeira equação, temos

2𝑥1 + 2𝒙𝟐+ 𝒙𝟑= 8

2𝑥1 + 2. (−2) + 8 = 8

2𝑥1 = 4

𝒙𝟏= 𝟐

Muita atenção nesse momento. A questão pergunta pela solução 𝑆= (𝒙𝟐, 𝒙𝟏, 𝑥3).

O gabarito, portanto, é letra B: 𝑆= (𝒙𝟐, 𝒙𝟏, 𝑥3) = (−𝟐, 𝟐, 8).

Gabarito: Letra B.

### Posto e nulidade de uma matriz

O posto de uma matriz é o número de linhas não nulas de uma matriz escalonada. A representação do posto
de uma matriz 𝐴 é dada por 𝜌(𝐴).

A nulidade de uma matriz é dada pela diferença entre o número de colunas e o posto da matriz:

𝑛𝑢𝑙𝑙(𝐴) = (Nº colunas) − 𝜌(𝐴)

Exemplo: se, ao escalonarmos uma matriz 𝐴, obtivermos o seguinte resultado:

[
𝟏
𝟒
𝟐
𝟏
𝟑
𝟎
𝟏
𝟑
𝟐
𝟒
𝟎
𝟎
𝟏
𝟏
𝟐
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎]

Temos que:

- O posto dessa matriz é 𝝆(𝑨) = 𝟑.
- A nulidade dessa matriz é 𝑛𝑢𝑙𝑙 (𝐴) = 5 −3 = 2.

O posto da matriz também é conhecido por característica da matriz.

(ABIN/2010) Considerando a matriz

𝐴= (

1
2
2
2
0
2
3
4
5
)

E os vetores:

𝑥= (

𝑥1
𝑥2
𝑥3

)

𝑏= (

𝑏1
𝑏2
𝑏3

)

Julgue o item a seguir.

A matriz 𝐴 tem posto 2.

Comentários:

Vamos escalonar a matriz 𝐴, dada por:

(

1
2
2
2
0
2
3
4
5
)

Fazendo 𝐿2 ←𝟏𝐿2 + (−𝟐)𝐿1, obtemos:

(

1
2
2
0
−4
−2
3
4
5
)

Fazendo 𝐿3 ←𝟏𝐿3 + (−𝟑)𝐿1, obtemos:

(

1
2
2
0
−4
−2
0
−2
−1

)

Fazendo 𝐿3 ←𝟏𝐿3 + (−

𝟏

𝟐) 𝐿2, obtemos:

(

𝟏
𝟐
𝟐
𝟎
−𝟒
−𝟐
𝟎
𝟎
𝟎

)

O posto de uma matriz é o número de linhas não nulas de uma matriz escalonada. Logo, o posto de 𝐴 é 2.

Gabarito: CERTO.

## DISCUSSÃO DE UM SISTEMA LINEAR

Para fins de discussão do sistema linear, o Teorema de Cramer tem serventia quando obtemos 𝑫≠𝟎 ou
quando o sistema é homogêneo.

Passo 1: Escalonar o sistema linear.
Passo 2: Analisar o sistema linear escalonado.
- Se obtivermos uma equação da forma 𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛+ 𝟎𝒘= 𝒃, com 𝒃≠𝟎, temos um sistema
impossível (SI);
- Caso contrário, temos duas possibilidades:
‣ Se o número de equações for igual ao número de incógnitas, temos um sistema possível e
determinado (SPD).
‣ Se o número de equações for menor do que o número de incógnitas, temos um sistema possível
e indeterminado (SPI).
No escalonamento, se obtivermos uma equação da forma 𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛+ 𝟎𝒘= 𝟎, devemos eliminar
essa equação do sistema linear, pois essa equação é uma combinação linear das outras.

𝜌(𝐴) = Nº de linhas não nulas da matriz escalonada de 𝐴

null(𝐴) = (Nº colunas) − 𝜌(𝐴)

𝐴𝑥= 𝐵 tem solução

(SPD ou SPI)
 𝜌(𝐴) = 𝜌(𝐴|𝐵)

- 𝝆(𝑨) = 𝝆(𝑨|𝑩) = 𝒏 → Sistema Possível e Determinado (SPD).
- 𝝆(𝑨) = 𝝆(𝑨|𝑩) &lt; 𝒏 → Sistema Possível e Indeterminado (SPI).
- 𝝆(𝑨) ≠𝝆(𝑨|𝑩) (especificamente, 𝝆(𝑨) &lt; 𝒑(𝑨|𝑩)) → Sistema Impossível (SI).

Discussão de um Sistema Linear

Discussão por Teorema de Cramer

Discussão pelo Método do Escalonamento

Posto/Característica e Nulidade de uma Matriz

Teorema de Rouché-Capelli

### Introdução

Vimos que um sistema linear pode ser classificado de três formas:

- Sistema Possível e Determinado (SPD): o sistema apresenta uma única solução;

- Sistema Possível e Indeterminado (SPI): o sistema apresenta infinitas soluções; e

- Sistema Impossível (SI): ocorre quando o sistema não apresenta solução.

A discussão de um sistema linear trata justamente dessa classificação, de modo a determinar se o sistema
linear é SPD, SPI ou SI.

### Discussão por Teorema de Cramer

Vimos que é possível obter a solução de um sistema linear por meio do Teorema de Cramer:

𝑥= 𝐷𝑥

𝑫 ; 𝑦= 𝐷𝑦

𝑫 ; 𝑧= 𝐷𝑧

𝑫

Lembre-se de que a condição para aplicar o teorema é 𝑫≠𝟎, isto é, o determinante da matriz dos
coeficientes (matriz incompleta do sistema) deve ser diferente de zero. Nesse caso, o sistema é possível e
determinado (SPD), apresentando solução única.

Por outro lado, quando 𝑫= 𝟎, podemos ter um sistema possível indeterminado (SPI) ou um sistema
impossível (SI).

Um caso interessante ocorre quando temos um sistema linear homogêneo. Lembre-se de que esse sistema
sempre admite solução, a solução trivial. Nesse caso, esse sistema não pode ser impossível, de modo que,
se 𝐷= 0, necessariamente ele é possível e indeterminado (SPI).

## Teorema de Cramer

## D ≠0

### Sistema Possível e

### Determinado (SPD)

## D = 0

### Sistema Possível e

### Indeterminado (SPI)

### Sistema Impossível (SI)

Professor, quando 𝐷= 0 e o sistema não é homogêneo, como vou diferenciar o SPI do SI?

Excelente pergunta! Nesse caso, o Teorema de Cramer nos deixa na mão. Devemos utilizar o Método do
Escalonamento, que será visto no próximo tópico.

Para fins de discussão do sistema linear, o Teorema de Cramer tem serventia quando
obtemos 𝑫≠𝟎 ou quando o sistema é homogêneo.

No caso em que 𝑫= 𝟎 e o sistema não é homogêneo, ficamos na dúvida entre SPI e SI.
Para sanar essa questão, deve-se utilizar o Método do Escalonamento.

(Pref. SJC/2019) Considere o sistema linear S, representado da seguinte forma matricial:

𝑆= (𝑎
𝑏
𝑐
𝑑) . (𝑥

𝑦) = (0

0)

O sistema S é:

a) impossível se 𝑎𝑑−𝑏𝑐= 0

b) impossível se 𝑎𝑑−𝑏𝑐≠0

c) possível e determinado se 𝑎𝑑−𝑏𝑐= 0

d) possível e determinado se 𝑎𝑑−𝑏𝑐≠0

e) possível e indeterminado se 𝑎𝑑−𝑏𝑐≠0

Comentários:

### Sistema Linear Homogêneo

### D ≠0

### Sistema Possível e Determinado (SPD)

### Admite somente a solução trivial

### D = 0

### Sistema Possível e Indeterminado (SPI)

### Admite a solução trivial e infinitas outras

Observe que o sistema linear em questão é homogêneo, pois os termos independentes são nulos.

Nesse caso, sendo 𝐷 o determinante da matriz dos coeficientes:

- Se 𝐷≠0, temos um sistema possível e determinado (SPD);

- Se 𝐷= 0, temos um sistema possível e indeterminado (SPI).

O determinante da matriz dos coeficientes é:

𝐷= |𝑎
𝑏
𝑐
𝑑| = 𝑎𝑑−𝑏𝑐

Logo:

- Se 𝑎𝑑−𝑏𝑐≠0, temos um sistema possível e determinado (SPD);

- Se 𝑎𝑑−𝑏𝑐= 0, temos um sistema possível e indeterminado (SPI).

O gabarito, portanto, é letra D.

Gabarito: Letra D.

(TRANSPETRO/2018) Sistemas lineares homogêneos possuem, pelo menos, uma solução e, portanto, nunca
serão considerados impossíveis. O sistema linear dado abaixo possui infinitas soluções.

{

𝑥+ 𝑦+ 𝑧= 0
𝑥+ 𝛼𝑦+ 𝑧= 0
𝛼𝑥+ 𝛼𝑦+ 2𝑧= 0

Qual o maior valor possível para 𝛼?

a) 0

b) 1

c) 2

d) 3

e) 4

Comentários:

Temos um sistema linear homogêneo com infinitas soluções. Logo, além de homogêneo, o sistema é
possível e indeterminado (SPI).

Portanto, devemos ter 𝐷= 0, ou seja, |

1
1
1
1
𝛼
1
𝛼
𝛼
2
| = 0. Aplicando a Regra de Sarrus no determinante 𝐷,

temos:

|

𝛼
𝛼
𝛼
|

𝛼
𝛼
𝛼

Parte Negativa Parte Positiva

𝐷= [𝟏. 𝜶. 𝟐+ 𝟏. 𝟏. 𝜶+ 𝟏. 𝟏. 𝜶] −[𝟏. 𝜶. 𝜶+ 𝟏. 𝟏. 𝜶+ 𝟏. 𝟏. 𝟐]

𝐷= [4𝛼] −[𝛼2 + 𝛼+ 2]

𝐷= −𝛼2 + 3𝛼−2

Como 𝐷= 0, temos:

−𝛼2 + 3𝛼−2 = 0

𝛼2 −3𝛼+ 2 = 0

Aplicando a Fórmula de Bhaskara:

∆= 𝑏2 −4𝑎𝑐

∆= (−3)2 −4.1.2

∆ = 1

𝛼= −𝑏± √∆

2𝑎

𝛼= −(−3) ± √1

2.1

𝛼= 3 ± 1

2

𝜶𝟏= 𝟐 ; 𝜶𝟐= 𝟏

Logo, o maior valor possível para 𝜶 é 2.

Gabarito: Letra C.

Antes de passar para o próximo tópico, é necessário esclarecer um ponto para aqueles que estudaram essa
matéria em outras fontes.

Alguns professores, especialmente relacionados a concursos públicos, ensinam de modo
equivocado (ERRADO) que se pode usar Teorema de Cramer para diferenciar um SPI de
um SI. Eles dizem que, uma vez que 𝐷= 0, o SPI ocorre quando:

𝐷= 𝐷𝑥= 𝐷𝑦= 𝐷𝑧= ⋯= 0

O contraexemplo a seguir mostra que esse bizu está errado:

{

1𝑥+ 1𝑦+ 1𝑧= 1
2𝑥+ 2𝑦+ 2𝑧= 2
3𝑥+ 3𝑦+ 3𝑧= 𝟕

Note que o sistema apresentado é impossível (SI). Isso porque, ao multiplicar a primeira
equação por 3, obtém-se:

3𝑥+ 3𝑦+ 3𝑧= 𝟑

Essa equação contradiz a última equação do sistema, pois 3𝑥+ 3𝑦+ 3𝑧 não pode ser igual
a 𝟑 e a 𝟕 ao mesmo tempo.

Observe, porém, que todos os determinantes são zero, pois apresentam filas paralelas
iguais:

𝐷= |

1
1
1
2
2
2
3
3
3
| 𝐷𝑥= |

𝟏
1
1
𝟐
2
2
𝟕
3
3
| 𝐷𝑦= |

1
𝟏
1
2
𝟐
2
3
𝟕
3
| 𝐷𝑧= |

1
1
𝟏
2
2
𝟐
3
3
𝟕

|

Segundo o bizu errado, teríamos um SPI, pois 𝐷= 𝐷𝑥= 𝐷𝑦= 𝐷𝑧= 0.

### Discussão pelo Método do Escalonamento

Podemos classificar um sistema linear em SPD, SPI e SI de maneira inequívoca por meio do escalonamento.
Para tanto, deve-se seguir os seguintes passos:

Passo 1: Escalonar o sistema linear.

Passo 2: Analisar o sistema linear escalonado.

- Se obtivermos uma equação da forma 𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛+ 𝟎𝒘= 𝒃, com 𝒃≠𝟎, temos um sistema
impossível (SI);
- Caso contrário, temos duas possibilidades:
o Se o número de equações for igual ao número de incógnitas, temos um sistema possível e

determinado (SPD).
o Se o número de equações for menor do que o número de incógnitas, temos um sistema

possível e indeterminado (SPI).

No escalonamento, se obtivermos uma equação da forma 𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛+ 𝟎𝒘= 𝟎,
devemos eliminar essa equação do sistema linear, pois essa equação é uma combinação
linear das outras.

Vamos realizar três exemplos para que não reste dúvida quanto ao método.

Classifique o sistema linear {

𝒙+ 𝟐𝒚+ 𝒛= 𝟐
𝟐𝒙+ 𝟑𝒚+ 𝒛= 𝟑
𝟒𝒙+ 𝟕𝒚+ 𝟑𝒛= 𝟖

.

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

1
2
1
2
2
3
1
3
4
7
3
8
]
~
𝐿2←𝟏𝐿2+(−𝟐)𝐿1 [

1
2
1
2
0
−1
−1
−1
4
7
3
8
]
~
𝐿3←𝟏𝐿3+(−𝟒)𝐿1 [

1
2
1
2
0
−1
−1
−1
0
−1
−1
0
]

~
𝐿3←𝟏𝐿3+(−𝟏)𝐿2 [

1
2
1
2
0
−1
−1
−1
𝟎
𝟎
𝟎
𝟏

]

A última equação do sistema escalonado, dada por 𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝟏, indica que estamos diante de um
sistema impossível (SI).

Classifique o sistema linear {

𝒙+ 𝟐𝒚+ 𝒛= 𝟏
𝒙+ 𝟑𝒚+ 𝟐𝒛= 𝟐
𝟒𝒙+ 𝟗𝒚+ 𝟓𝒛= 𝟓

.

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

1
2
1
1
1
3
2
2
4
9
5
5
]
~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 [

1
2
1
1
0
1
1
1
4
9
5
5
]
~
𝐿3←𝟏𝐿3+(−𝟒)𝐿1 [

1
2
1
1
0
1
1
1
0
1
1
1
]

~
𝐿3←𝟏𝐿3+(−𝟏)𝐿2 [

1
2
1
1
0
1
1
1

]

A última equação do sistema escalonado, dada por 𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝟎, deve ser eliminada. O sistema linear
em questão é equivalente a:

[

] ~ [1
1]

Explicitando as variáveis, o sistema linear original equivale a:

{𝑥+ 2𝑦+ 𝑧= 1

𝑥+ 𝑦+ 𝑧= 1

Veja que o sistema anterior é escalonado, pois o número de incógnitas diminui de equação para equação.

Trata-se de um sistema escalonado cujo número de equações (2) é menor do que o número de incógnitas
(3). Logo, temos um sistema possível e indeterminado (SPI).

Classifique o sistema linear {

𝒙−𝒚+ 𝒛= 𝟏
𝒙+ 𝟑𝒚+ 𝟐𝒛= 𝟐
𝟐𝒙+ 𝟑𝒚+ 𝟏𝒛= 𝟑

.

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

1
−1
1
1
1
3
2
2
2
3
1
3
]
~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 [

1
−1
1
1
0
4
1
1
2
3
1
3
]
~
𝐿3←𝟏𝐿3+(−𝟐)𝐿1 [

1
−1
1
1
0
4
1
1
0
5
−1
1
]

~
𝐿3←𝟏𝐿3+(−𝟓

𝟒)𝐿2

[

1
−1
1
1
𝟎
4
1
1

𝟎
𝟎
−1

4
−1

4

]

Explicitando as variáveis, o sistema linear original equivale a:

{

𝑥−𝑦+ 𝑧= 1
𝑥+ 4𝑦+ 𝑧= 1

−1

4 𝑧= −1
4

Veja que o sistema acima é escalonado, pois o número de incógnitas diminui de equação para equação.

Trata-se de um sistema escalonado cujo número de equações (3) é igual ao número de incógnitas (3).
Logo, temos um sistema possível e determinado (SPD).

Vamos praticar o que aprendemos nessa seção.

(STN/2013) Dado o sistema de equações lineares

{2𝑥+ 4𝑦= 6

3𝑥+ 6𝑦= 9

É correto afirmar que:

a) o sistema não possui solução.

b) o sistema possui uma única solução.

c) 𝑥 = 1 e 𝑦 = 2 é uma solução do sistema.

d) o sistema é homogêneo.

e) o sistema possui mais de uma solução.

Comentários:

Vamos escalonar o sistema fazendo uso da matriz completa do sistema. Temos:

[2
4
6
3
6
9]

Realizando 𝐿2 = 𝟏𝐿2 + (−

𝟑

𝟐) 𝐿1, ficamos com:

~ [2
4
6
𝟎
𝟎
𝟎]

A última equação do sistema escalonado, dada por 𝟎𝒙+ 𝟎𝒚= 𝟎, pode ser eliminada. O sistema linear em
questão é equivalente a:

~[2
4
6]

Explicitando as variáveis, o sistema linear original equivale a:

{𝑥+ 2𝑦= 6

Trata-se de um sistema escalonado cujo número de equações (1) é menor do que o número de incógnitas
(2). Logo, temos um sistema possível e indeterminado (SPI). Isso significa que o sistema possui mais de uma
solução, isto é, possui infinitas soluções. O gabarito, portanto, é letra E.

Gabarito: Letra E.

(CGU/2008) Considerando o sistema de equações lineares

{ 𝑥1 −𝑥2 = 2

2𝑥1 + 𝑝𝑥2 = 𝑞

pode-se corretamente afirmar que

a) se 𝑝= −2 e 𝑞 ≠ 4, então o sistema é impossível.

b) se 𝑝 ≠ −2 e 𝑞 = 4, então o sistema é possível e indeterminado.

c) se 𝑝 = −2, então o sistema é possível e determinado.

d) se 𝑝 = −2 e 𝑞 ≠ 4, então o sistema é possível e indeterminado.

e) se 𝑝 = 2 e 𝑞 = 4, então o sistema é impossível.

Comentários:

Essa questão é um excelente resumo do que vimos quanto à discussão de um sistema linear.

Inicialmente, vamos utilizar o Teorema de Cramer.

O determinante 𝐷 da matriz dos coeficientes é:

𝐷= |1
−1
2
𝑝|

𝐷= [1 × 𝑝] −[(−1) × 2]

𝐷= 𝑝−(−2)

𝑫= 𝒑+ 𝟐

Pelo Teorema de Cramer, sabemos que o sistema é possível e determinado (SPD) quando 𝑫≠𝟎, isto é,
quando:

𝑝+ 2 ≠0

𝒑≠−𝟐

Para o caso em que 𝑫= 𝟎, isto é, quando 𝒑= −𝟐, podemos ter tanto um sistema possível e indeterminado
(SPI) quanto um sistema impossível (SI).

Para saber o que acontece para o caso em que 𝒑= −𝟐, devemos escalonar o sistema. Temos:

{ 𝑥1 −𝑥2 = 2

2𝑥1 −𝟐𝑥2 = 𝑞

Na forma matricial:

[1
−1
2
2
−2
𝑞]

Realizando 𝐿2 = 𝟏𝐿2 + (−𝟐)𝐿1, temos:

~ [1
−1
2
0
0
𝑞−4]

Note que:

- Se (𝑞−4) for diferente de zero, isto é, se 𝒒≠𝟒, teremos um sistema impossível (SI), pois haverá uma
equação da forma 𝟎𝒙𝟏+ 𝟎𝒙𝟐= (𝒒−𝟒) com (𝒒−𝟒) ≠𝟎.

- Por outro lado, se 𝒒= 𝟒, ficamos com:

~ [1
−1
𝟎]

A última equação do sistema escalonado, dada por 𝟎𝒙𝟏+ 𝟎𝒙𝟐= 𝟎, pode ser eliminada. O sistema linear em
questão é equivalente a:

~[1
−1
2]

Explicitando as variáveis, o sistema linear original equivale a:

{𝑥1 −𝑥2 = 2

Trata-se de um sistema escalonado cujo número de equações (1) é menor do que o número de incógnitas
(2). Logo, temos um sistema possível e indeterminado (SPI).

Em resumo, temos o seguinte:

- 𝑝≠−2 → Sistema Possível e Determinado (SPD);

- 𝑝= −2 e 𝑞≠4 → Sistema Impossível (SI);

- 𝑝= −2 e 𝑞= 4 → Sistema Possível e Indeterminado (SPI).

O gabarito, portanto, é letra A.

Gabarito: Letra A.

### Posto e nulidade de uma matriz

O posto de uma matriz é o número de linhas não nulas da sua matriz escalonada.

A representação do posto de uma matriz 𝑨 é dada por 𝝆(𝑨).

𝜌(𝐴) = Nº de linhas não nulas da matriz escalonada de 𝐴

A nulidade de uma matriz é definida como a diferença entre o número de colunas e o posto da matriz:

null(𝐴) = (Nº colunas) − 𝜌(𝐴)

O posto da matriz também é conhecido por característica da matriz.

==5460==

Considere que, ao escalonarmos uma matriz 𝑨, obtivermos a seguinte matriz escalonada 𝑨´:

𝑨′ =

[
𝟏
𝟒
𝟐
𝟏
𝟑
𝟎
𝟏
𝟑
𝟐
𝟒
𝟎
𝟎
𝟏
𝟏
𝟐
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎
𝟎]

Temos que:

- Como a matriz escalonada 𝑨′ apresenta 3 linhas não nulas, o posto ou característica a da matriz 𝑨 é:

𝝆(𝑨) = 𝟑

- A nulidade da matriz 𝑨 é a diferença entre o número de colunas de 𝐴 e o posto da matriz:

null(𝐴) = (Nº colunas) − 𝜌(𝐴)

= 5 −3

= 2

(ABIN/2010) Considerando a matriz

𝐴= (

1
2
2
2
0
2
3
4
5
)

E os vetores:

𝑥= (

𝑥1
𝑥2
𝑥3

)

𝑏= (

𝑏1
𝑏2
𝑏3

)

Julgue o item a seguir.

A matriz 𝐴 tem posto 2.

Comentários:

Vamos escalonar a matriz 𝐴, dada por:

(

1
2
2
0
2
3
4
5
)

Fazendo 𝐿2 ←𝟏𝐿2 + (−𝟐)𝐿1, obtemos:

(

1
2
2
0
−4
−2
3
4
5
)

Fazendo 𝐿3 ←𝟏𝐿3 + (−𝟑)𝐿1, obtemos:

(

1
2
2
0
−4
−2
0
−2
−1

)

Fazendo 𝐿3 ←𝟏𝐿3 + (−

𝟏

𝟐) 𝐿2, obtemos:

(

𝟏
𝟐
𝟐
𝟎
−𝟒
−𝟐
𝟎
𝟎
𝟎

)

O posto de uma matriz é o número de linhas não nulas de uma matriz escalonada. Logo, o posto de 𝐴 é 2.

Gabarito: CERTO.

### Teorema de Rouché-Capelli

O Teorema de Rouché-Capelli afirma que um sistema de equações lineares 𝑨𝒙= 𝑩 é consistente (possui
solução, ou seja, é SPD ou SPI) se, e somente se, o posto da matriz dos coeficientes 𝝆(𝑨) for igual ao posto
da matriz ampliada 𝝆(𝑨|𝑩).

𝑨𝒙= 𝑩 tem solução

(SPD ou SPI)
 𝝆(𝑨) = 𝝆(𝑨|𝑩)

A partir do teorema, podemos realizar a discussão de um sistema linear comparando os postos 𝝆(𝑨) e
𝝆(𝑨|𝑩) com o número de incógnitas do sistema linear (𝒏):

- Sistema Possível e Determinado (SPD):
o Condição: 𝝆(𝑨) = 𝝆(𝑨|𝑩) = 𝒏
o Resultado: Existe uma única solução.
- Sistema Possível e Indeterminado (SPI):
o Condição: 𝝆(𝑨) = 𝝆(𝑨|𝑩) &lt; 𝒏
o Resultado: Existem infinitas soluções.
- Sistema Impossível (SI):
o Condição: 𝝆(𝑨) ≠𝝆(𝑨|𝑩) (especificamente, 𝝆(𝑨) &lt; 𝒑(𝑨|𝑩)).
o Resultado: Não existe solução. Isso ocorre quando o escalonamento gera uma linha do tipo

[0 0 0 | 𝑘] com 𝑘 ≠0.

(ANPEC/2010) Seja 𝐴= (𝑎𝑖𝑗) uma matriz real 𝑛 × 𝑛. Considere o sistema 𝐴𝜒= 𝑏 abaixo e julgue a
alternativa:

{

𝑎11𝜒1 + 𝑎12𝜒2 + ⋯+ 𝑎1𝑛𝜒𝑛= 𝑏1
𝑎21𝜒1 + 𝑎22𝜒2 + ⋯+ 𝑎2𝑛𝜒𝑛= 𝑏2
𝑎𝑛1𝜒1 + 𝑎𝑛2𝜒2 + ⋯+ 𝑎𝑛𝑛𝜒𝑛= 𝑏𝑛

Se o posto de 𝐴 é menor do que 𝑛, então o sistema não tem solução ou possui um número infinito de
soluções.

Comentários:

A questão aborda a classificação de um sistema de equações lineares com base no posto da matriz dos
coeficientes, utilizando os conceitos fundamentais do Teorema de Rouché-Capelli.

O problema apresenta o sistema linear 𝑨𝝌= 𝒃 com 𝒏 incógnitas. Note que:

- 𝑨 é a matriz dos coeficientes;

- [𝑨|𝒃] é a matriz ampliada.

De acordo com a teoria, o sistema linear 𝑨𝝌= 𝒃 é consistente (possui solução, ou seja, é SPD ou SPI) se, e
somente se, o posto da matriz dos coeficientes 𝝆(𝑨) for igual ao posto da matriz ampliada 𝝆(𝑨|𝒃).

A classificação do sistema depende da comparação desses postos com o número de incógnitas 𝒏:

- Sistema Possível e Determinado (SPD):

- Condição: 𝝆(𝑨) = 𝝆(𝑨|𝑩) = 𝒏

- Resultado: Existe uma única solução.

- Sistema Possível e Indeterminado (SPI):

- Condição: 𝝆(𝑨) = 𝝆(𝑨|𝑩) &lt; 𝒏

- Resultado: Existem infinitas soluções.

- Sistema Impossível (SI):

- Condição: 𝝆(𝑨) ≠𝝆(𝑨|𝑩) (especificamente, 𝝆(𝑨) &lt; 𝒑(𝑨|𝑩)).

- Resultado: Não existe solução.

O enunciado apresenta somente a seguinte informação sobre o sistema linear: o posto de 𝑨 é menor do que
o número de incógnitas 𝒏, ou seja:

𝝆(𝑨) &lt; 𝒏

Sob essa condição, o sistema linear não pode ser um SPD, pois isso exigiria que 𝝆(𝑨) fosse exatamente igual
a 𝒏.

Dessa forma, restam apenas duas possibilidades para o sistema:

- Se 𝝆(𝑨) = 𝝆(𝑨|𝒃), o sistema será um SPI e possuirá um número infinito de soluções.

- Se 𝝆(𝑨) &lt; 𝝆(𝑨|𝒃), o sistema será um SI e não terá solução.

Portanto, a afirmação de que o sistema não tem solução ou possui um número infinito de soluções está
correta, pois cobre todas as situações possíveis para o caso em que 𝝆(𝑨) &lt; 𝒏.

Gabarito: CERTO.

## QUESTÕES COMENTADAS – FGV

### Solução de Sistemas Lineares

(FGV/MPE SC/2022) Sabe-se que { 𝟐𝒙−𝒚= 𝟗

𝟑𝒙−𝟐𝒚= 𝟓 .

O valor de 𝒙 + 𝒚 é:

a) 16;

b) 18;

c) 24;

d) 26;

e) 30.

Comentários:

Vamos resolver o sistema linear por substituição.

A partir da primeira equação, podemos isolar 𝑦:

2𝑥−𝑦= 9

2𝑥−9 = 𝑦

𝒚= 𝟐𝒙−𝟗

Substituindo esse valor na segunda equação, temos:

3𝑥−2𝑦= 5

3𝑥−2(𝟐𝒙−𝟗) = 5

3𝑥−4𝑥+ 18 = 5

−𝑥= 5 −18

−𝑥= −13

𝒙= 𝟏𝟑

Substituindo o valor de 𝑥 em 𝒚= 𝟐𝒙−𝟗, temos:

𝑦= 2𝑥−9

𝑦= 2 × 13 −9

𝑦= 26 −9

𝒚= 𝟏𝟕

Logo:

𝑥+ 𝑦= 13 + 17

= 30

Gabarito: Letra E.

(FGV/SEFAZ AM/2022) 𝒙 e 𝒚 são tais que 𝟒𝒙+ 𝟓𝒚= 𝟖𝟎 e 𝟔𝒙+ 𝟕𝒚= 𝟏𝟏𝟔. O valor de 𝟐𝒙+ 𝟑𝒚 é:

a) 38

b) 40

c) 42

d) 44

e) 46

Comentários:

Vamos resolver o sistema linear por substituição. Temos o seguinte sistema linear:

{ 4𝑥+ 5𝑦= 80

6𝑥+ 7𝑦= 116

A partir da primeira equação, podemos isolar 𝑥:

4𝑥+ 5𝑦= 80

4𝑥= 80 −5𝑦

𝒙= 𝟖𝟎−𝟓𝒚

𝟒

Substituindo o valor de 𝑥 na segunda equação, temos:

6𝑥+ 7𝑦= 116

6 × (80 −5𝑦
) + 7𝑦= 116

3 × (80 −5𝑦
) + 7𝑦= 116

3 × (40 −2,5𝑦) + 7𝑦= 116

120 −7,5𝑦+ 7𝑦= 116

−0,5𝑦= 116 −120

−0,5𝑦= −4

𝑦= −4

−0,5

𝒚= 𝟖

Substituindo o valor de 𝑦 em 𝒙=

𝟖𝟎−𝟓𝒚

𝟒
, temos:

𝑥= 80 −5𝑦

4

𝑥= 80 −5 × 8

4

𝑥= 80 −40

4

𝑥= 40

4

𝒙= 𝟏𝟎

Logo, o valor procurado é:

2𝑥+ 3𝑦

= 2 × 10 + 3 × 8

= 20 + 24

= 44

Gabarito: Letra D.

(FGV/CGU/2022) Considere o sistema linear { 𝒙−𝟐𝒚+ 𝒛= 𝟒

−𝟑𝒙+ 𝒚+ 𝟐𝒛= 𝟑.

Sabe-se que 𝒙+ 𝒚&gt; 𝟏𝟎𝟎.

O menor valor inteiro de 𝒛 que satisfaz as condições dadas é:

a) 52;

b) 53;

c) 54;

d) 55;

e) 56.

Comentários:

Note o número de equações do sistema é superior ao número de incógnitas e, portanto, não podemos
determinar os valores de 𝑥, 𝑦 e 𝑧.

Para resolver o problema, vamos escrever 𝒙 em função da variável 𝒛, depois vamos escrever 𝒚 em função
da variável 𝒛 para, em seguida, substituir os valores encontrados na desigualdade 𝒙+ 𝒚&gt; 𝟏𝟎𝟎,

Escrever 𝒙 em função da variável 𝒛

Vamos obter uma relação entre 𝑥 e 𝑧 eliminando a variável 𝑦.

Ao realizar a combinação linear 𝑳𝟏+ 𝟐𝑳𝟐, temos:

𝑳𝟏
2𝑥−2𝑦+ 2𝑧= 4
𝟐𝑳𝟐
−6𝑥+ 2𝑦+ 4𝑧= 6

𝑳𝟏+ 𝟐𝑳𝟐
−𝟓𝒙 + 𝟓𝒛= 𝟏𝟎

Escrevendo 𝑥 em função de 𝑧, temos:

−5𝑥+ 5𝑧= 10

5𝑥= 5𝑧−10

𝒙= 𝒛−𝟐

Escrever 𝒚 em função da variável 𝒛

Vamos obter uma relação entre 𝑦 e 𝑧 eliminando a variável 𝑥.

Ao realizar a combinação linear 𝟑𝑳𝟏+ 𝑳𝟐, temos:

𝟑𝑳𝟏
3𝑥−6𝑦+ 3𝑧= 12
𝑳𝟐
−3𝑥+ 2𝑦+ 2𝑧= 3

𝟑𝑳𝟏+ 𝑳𝟐
−𝟓𝒙−𝟓𝒚 + 𝟓𝒛= 𝟏𝟓

Escrevendo 𝑦 em função de 𝑧, temos:

−5𝑦+ 5𝑧= 15

5𝑦= 5𝑧−15

𝒚= 𝒛−𝟑

Substituir os valores encontrados na desigualdade 𝒙+ 𝒚&gt; 𝟏𝟎𝟎

Ao realizar a substituição, temos:

𝑥+ 𝑦&gt; 100

(𝑧−2) + (𝑧−3) &gt; 100

2𝑧−5 &gt; 100

2𝑧&gt; 105

𝑧&gt; 52,5

Logo, o menor valor inteiro de 𝒛 que satisfaz as condições dadas é 53.

Gabarito: Letra B.

(FGV/MPE SC/2022) No sistema

{

𝟑𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟏𝟔

𝒂+ 𝟑𝒃+ 𝒄+ 𝒅= 𝟔
𝒂+ 𝒃+ 𝟑𝒄+ 𝒅= 𝟏𝟒
𝒂+ 𝒃+ 𝒄+ 𝟑𝒅= 𝟏𝟐

o valor de 𝒂 é:

a) –1;

b) 1;

c) 2;

d) 3;

e) 4.

Comentários:

Ao somar todas as equações do sistema linear, temos:

==5460==

3𝑎+ 𝑏+ 𝑐+ 𝑑= 16
𝑎+ 3𝑏+ 𝑐+ 𝑑= 6
𝑎+ 𝑏+ 3𝑐+ 𝑑= 14
𝑎+ 𝑏+ 𝑐+ 3𝑑= 12

6𝑎+ 6𝑏+ 6𝑐+ 6𝑑= 48

Ficamos com:

6(𝑎+ 𝑏+ 𝑐+ 𝑑) = 48

𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟖

A partir dessa informação, podemos subtrair 𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟖 da primeira equação do sistema linear.

3𝑎+ 𝑏+ 𝑐+ 𝑑= 16
−𝒂−𝒃−𝒄−𝒅= −𝟖

𝟐𝒂 = 𝟖

Logo, dividindo os dois lados da equação por 2, temos 𝒂= 𝟒.

Gabarito: Letra E.

(FGV/TCE TO/2022) Considere o sistema:

{

𝒙+ 𝒚+ 𝟓𝒛= 𝟎
𝒙+ 𝟓𝒚+ 𝒛= 𝟏𝟒
𝟓𝒙+ 𝒚+ 𝐳= 𝟐𝟖

O valor de 𝒙 é:

a) 3/2;

b) 5/2;

c) 7/2;

d) 9/2;

e) 11/2.

Comentários:

Ao somar todas as equações do sistema linear, temos:

𝑥+ 𝑦+ 5𝑧= 0
𝑥+ 5𝑦+ 𝑧= 14
5𝑥+ 𝑦+ 𝑧= 28

7𝑥+ 7𝑦+ 7𝑧= 42

Ficamos com:

7(𝑥+ 𝑦+ 𝑧) = 42

𝑥+ 𝑦+ 𝑧= 42

7

𝑥+ 𝑦+ 𝑧= 6

A partir dessa informação, podemos subtrair 𝒙+ 𝒚+ 𝒛= 𝟔 da terceira equação do sistema linear.

5𝑥+ 𝑦+ 𝑧= 28
−𝒙−𝒚−𝒛= −𝟔

𝟒𝒙 = 𝟐𝟐

Portanto:

𝑥= 22

4

𝑥= 11

2

Gabarito: Letra E.

(FGV/FEMPAR/2021) A manipulação das equações de um sistema linear pode gerar novas equações
lineares mais simples que as originais. Ao serem incorporadas ao conjunto original, as novas equações
podem contribuir na busca por soluções do sistema.

Considere o sistema linear de 3 equações e 3 incógnitas dado por

{

𝟑𝒂−𝟐𝒃+ 𝒄= 𝟗
𝒂+ 𝟑𝒃−𝟐𝒄= 𝟏𝟏
−𝟐𝒂+ 𝒃+ 𝟑𝒄= 𝟏𝟑

É correto afirmar que 𝒂 + 𝒃 + 𝒄 vale

a) 16,5.

b) 18,5.

c) 19.

d) 32,5.

e) 33.

Comentários:

Ao somar todas as equações do sistema linear, temos:

−3𝑎−2𝑏+ 𝑐= 9
−2𝑎+ 3𝑏−2𝑐= 11

−2𝑎+ 𝑏+ 3𝑐= 13

2𝑎+ 2𝑏+ 2𝑐= 33

Ficamos com:

2(𝑎+ 𝑏+ 𝑐) = 33

𝑎+ 𝑏+ 𝑐= 33

2

𝑎+ 𝑏+ 𝑐= 16,5

Gabarito: Letra A.

(FGV/ALERO/2018) Considere o sistema linear

{

𝒙+ 𝟐𝒚+ 𝟑𝒛= 𝟏𝟔𝟎
𝟐𝒙+ 𝟑𝒚+ 𝒛= 𝟏𝟒𝟎
𝟑𝒙+ 𝒚+ 𝟐𝒙= 𝟏𝟓𝟔

O valor de 𝒙 é:

a) 20.

b) 22.

c) 24.

d) 26.

e) 28.

Comentários:

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

1
2
3
160
2
3
1
140
3
1
2
156
]
~
𝐿2←𝟏𝐿2+(−𝟐)𝐿1 [

1
2
3
160
0
−1
−5
−180
3
1
2
156
]
~
𝐿3←𝟏𝐿3+(−𝟑)𝐿1 [

1
2
3
160
0
−1
−5
−180
0
−5
−7
−324

]

~
𝐿3←𝟏𝐿3+(−𝟓)𝐿2 [

1
2
3
160
0
−1
−5
−180
0
0
18
576
]

A partir da terceira equação, temos:

18𝑧= 576

𝒛= 𝟑𝟐

A partir da segunda equação, temos:

−𝑦−5𝒛= −180

−𝑦−5.32 = −180

𝑦= 180 −160

𝒚= 𝟐𝟎

A partir da primeira equação, temos:

𝑥+ 2𝒚+ 3𝒛= 160

𝑥+ 2.20 + 3.32 = 160

𝑥= 160 −40 −96

𝒙= 𝟐𝟒

Logo, temos que 𝑥= 24. Portanto, o gabarito é letra C.

Uma outra forma de resolver o problema é pelo Teorema de Cramer. Temos que:

𝑥= 𝐷𝑥

𝐷

𝐷 é o determinante da matriz dos coeficientes:

|

1
2
3
2
3
1
3
1
2
|

1
2
2
3
3
1

Parte Negativa Parte Positiva

𝐷= [𝟏. 𝟑. 𝟐+ 𝟐. 𝟏. 𝟑+ 𝟑. 𝟐. 𝟏] −[𝟑. 𝟑. 𝟑+ 𝟏. 𝟏. 𝟏+ 𝟐. 𝟐. 𝟐]

𝐷= 18 −36

𝐷= −18

𝐷𝑥 é o determinante da matriz dos coeficientes substituindo a primeira coluna pela matriz dos termos
independentes:

|

160
2
3
140
3
1
|

160
2
140
3

Parte Negativa Parte Positiva

𝐷𝑥= [𝟏𝟔𝟎. 𝟑. 𝟐+ 𝟐. 𝟏. 𝟏𝟓𝟔+ 𝟑. 𝟏𝟒𝟎. 𝟏] −[𝟑. 𝟑. 𝟏𝟓𝟔+ 𝟏. 𝟔𝟎. 𝟏. 𝟏+ 𝟐. 𝟏𝟒𝟎. 𝟐]

𝐷𝑥= 1692 −2124 = −432

Logo:

𝑥= 𝐷𝑥

𝐷= −432

−18

𝑥= 24

Novamente, obtemos que o gabarito é letra C.

Gabarito: Letra C.

## QUESTÕES COMENTADAS – MULTIBANCAS

### Solução de Sistemas Lineares

(CESGRANRIO/BNB/2024) Considere (𝒙𝟎, 𝒚𝟎, 𝒛𝟎) a solução do sistema linear

{

−𝟐𝒙+ 𝟐𝒚+ 𝒛= 𝟑

𝒙+ 𝒚−𝟑𝒛= 𝟏𝟏

𝟑𝒙−𝒚= 𝟕

A soma 𝒙𝟎+ 𝒚𝟎+ 𝒛𝟎 é igual a

a) 3

b) 7

c) 10

d) 11

e) 21

Comentários:

Queremos obter a soma 𝑥0 + 𝑦0 + 𝑧0, em que (𝑥0, 𝑦0, 𝑧0) é a solução do sistema linear. Note que, ao somar
a primeira equação com a terceira, temos:

𝑳𝟏
−2𝑥+ 2𝑦+ 𝑧= 3
𝑳𝟑
−3𝑥−2𝑦+ 𝑧= 7

𝑳𝟏+ 𝑳𝟑
−2𝑥+ 2𝑦+ 𝑧= 10

Logo, se (𝑥0, 𝑦0, 𝑧0) é a solução do sistema linear, a soma 𝒙𝟎+ 𝒚𝟎+ 𝒛𝟎 é igual a 10.

Gabarito: Letra C.

(IDECAN/Pref. Maracanaú/2023) Em um grupo de amigos, Fernando, Giovane e Henrique têm alturas
diferentes. Além disso, a soma das alturas de Fernando e Giovane é igual 3,36 metros, a soma das alturas
de Giovane e Henrique é igual a 3,38 metros e a soma das alturas de Fernando e Henrique é igual a 3,50
metros.

Com base nesse caso hipotético, é correto afirmar que a diferença entre as alturas de Henrique e Fernando
é igual a

a) 0,02 metros.

b) 0,08 metros.

c) 0,10 metros.

d) 0,14 metros.

Comentários:

Considere que Fernando, Giovane e Henrique têm as alturas 𝑓, 𝑔 e ℎ, respectivamente. Queremos obter a
diferença entre as alturas de Henrique e Fernando, ou seja, queremos obter ℎ−𝑓.

Sabemos que:

- A soma das alturas de Fernando e Giovane é igual 3,36 metros: 𝑓+ 𝑔= 3,36.
- A soma das alturas de Giovane e Henrique é igual a 3,38 metros: 𝑔+ ℎ= 3,38;
- A soma das alturas de Fernando e Henrique é igual a 3,50 metros: 𝑓+ ℎ= 3,50.

Note que temos um sistema linear com três equações e três incógnitas:

{

𝑓+ 𝑔+ ℎ= 3,36 (Eq 1)
𝑓+ 𝑔+ ℎ= 3,38 (Eq 2)
𝑓+ 𝑔+ ℎ= 3,50 (Eq 3)

Somando as três equações, temos:

2𝑓+ 2𝑔+ 2ℎ= 3,36 + 3,38 + 3,60

2(𝑓+ 𝑔+ ℎ) = 10,34

𝑓+ 𝑔+ ℎ= 10,34

2

𝒇+ 𝒈+ 𝒉= 𝟓, 𝟏𝟕 (𝐒)

Tomando esse resultado e subtraindo a Equação 1, podemos obter ℎ:

𝐒
𝒇+ 𝒈+ 𝒉= 𝟓, 𝟏𝟕
𝐄𝐪 𝟏
𝑓+ 𝑔+ ℎ= 3,36

𝑺−𝐄𝐪 𝟏
ℎ= 1,81

Tomando o mesmo resultado e subtraindo a Equação 2, podemos obter 𝑓:

𝐒
𝒇+ 𝒈+ 𝒉= 𝟓, 𝟏𝟕
𝐄𝐪 𝟐
𝑓+ 𝑔+ ℎ= 3,38

𝑺−𝐄𝐪 𝟐
𝑓+ 𝒈+ 𝒉= 1,79

Logo:

ℎ−𝑓= 1,81 −1,79

= 0,02 metros

Gabarito: Letra A.

(IDECAN/Pref. SCS/2023) Em uma loja de aplicativos móveis, com a proximidade da temporada de férias,

a empresa decidiu antecipar suas promoções para o próximo ano. Foram anunciados três pacotes
distintos:

- Pacote 1: Compre 3 jogos tipo A, 5 aplicativos tipo B e 6 toques de notificação tipo C por R$ 98,00.

- Pacote 2: Compre 2 jogos tipo A, 3 aplicativos tipo B e 2 toques de notificação tipo C por R$ 57,50.

- Pacote 3: Compre 4 jogos tipo A, 4 aplicativos tipo B e 3 toques de notificação tipo C por R$ 95,50.

Considerando que os preços de todos os produtos se mantiveram iguais em todos os pacotes, então o
valor total que se pagaria caso fosse possível uma pessoa comprar um jogo do tipo A, um aplicativo do
tipo B e um toque de notificação do tipo C, seria

a) R$ 24,50.

b) R$ 23,50.

c) R$ 23,00.

d) R$ 22,00.

Comentários:

Considere que:

- 𝑥 é o preço de um jogo do tipo A;
- 𝑦 é o preço de um aplicativo tipo B; e
- 𝑧 é o preço de um toque de notificação tipo C.

O problema pergunta pelo valor pago por um jogo do tipo A, um aplicativo do tipo B e um toque de
notificação do tipo C. Logo, queremos obter o valor de 𝒙+ 𝒚+ 𝒛.

Podemos modelar cada pacote com as seguintes equações:

- Pacote 1: Compre 3 jogos tipo A, 5 aplicativos tipo B e 6 toques de notificação tipo C por R$ 98,00.

o 3𝑥+ 5𝑦+ 6𝑧= 98

- Pacote 2: Compre 2 jogos tipo A, 3 aplicativos tipo B e 2 toques de notificação tipo C por R$ 57,50.

o 2𝑥+ 3𝑦+ 2𝑧= 57,5

- Pacote 3: Compre 4 jogos tipo A, 4 aplicativos tipo B e 3 toques de notificação tipo C por R$ 95,50.

o 4𝑥+ 4𝑦+ 3𝑧= 95,5

Note que temos um sistema linear com três equações e três incógnitas:

{

3𝑥+ 5𝑦+ 6𝑧= 98
2𝑥+ 3𝑦+ 2𝑧= 57,5
4𝑥+ 4𝑦+ 3𝑧= 95,5

Para o seguinte sistema linear, temos a seguinte matriz completa do sistema:

[

57,5
95,5
]

Vamos escalonar o sistema por meio dessa matriz. Para iniciar o escalonamento, vamos trocar de posição a
primeira e a segunda linha. Essa troca é opcional e serve para facilitar um pouco as contas:

[

3
5
6
98
2
3
2
57,5
4
4
3
95,5
]
~
𝐿1𝐿2 [

2
3
2
57,5
3
5
6
98
4
4
3
95,5
]
~
𝐿2←𝟏𝐿2+(−𝟑

𝟐)𝐿1

[

2
3
2
57,5
0
0,5
3
11,75
4
4
3
95,5
]
~
𝐿3←𝟏𝐿3+(−𝟐)𝐿1

[

2
3
2
57,5
0
0,5
3
11,75
0
−2
−1
−19,5

]
~
𝐿3←𝟏𝐿3+(𝟒)𝐿2 [

2
3
2
57,5
0
0,5
3
11,75
0
0
11
27,5
]

Da terceira equação, temos:

11𝑧= 27,5

𝑧= 27,5

11

𝒛= 𝟐, 𝟓

Da segunda equação, temos:

0,5𝑦+ 3𝑧= 11,75

0,5𝑦+ 3 × 2,5 = 11,75

0,5𝑦+ 7,5 = 11,75

0,5𝑦= 11,75 −7,5

0,5𝑦= 4,25

𝑦= 4,25

0,5

𝒚= 𝟖, 𝟓

Da primeira equação, temos:

2𝑥+ 3𝑦+ 2𝑧= 57,5

2𝑥+ 3 × 8,5 + 2 × 2,5 = 57,5

2𝑥+ 25,5 + 5 = 57,5

2𝑥+ 30,5 = 57,5

2𝑥= 57,5 −30,5

2𝑥= 27

𝑥= 27

𝒙= 𝟏𝟑, 𝟓

Logo, o valor procurado é:

𝑥+ 𝑦+ 𝑧

= 13,5 + 8,5 + 2,5

= R$ 24,50

Gabarito: Letra A.

(FUNDATEC/Pref. Cachoeira Sul/2022) A solução do sistema de equações {𝟒𝒙−𝟓𝒚= 𝟐𝟐

𝒙+ 𝟐𝒚= 𝟐𝟓 está na

alternativa em que 𝒙 e 𝒚 são, respectivamente:

a) 1 e 12.

b) 13 e 6.

c) 8 e 2.

d) 3 e 11.

e) 23 e 1.

Comentários:

Vamos resolver o sistema linear por substituição. Temos o seguinte sistema linear:

{4𝑥−5𝑦= 22

𝑥+ 2𝑦= 25

A partir da segunda equação, podemos isolar 𝑥:

𝑥+ 2𝑦= 25

𝒙= 𝟐𝟓−𝟐𝒚

Substituindo esse valor na primeira equação, temos:

4𝑥−5𝑦= 22

4. (𝟐𝟓−𝟐𝒚) −5𝑦= 22

100 −8𝑦−5𝑦= 22

100 −13𝑦= 22

100 −22 = 13𝑦

13𝑦= 78

𝑦= 78

𝒚= 𝟔

Substituindo o valor de 𝑦 em 𝒙= 𝟐𝟓−𝟐𝒚, temos:

𝑥= 25 −2. (𝟔)

𝑥= 25 −12

𝒙= 𝟏𝟑

Logo, 𝒙 e 𝒚 são, respectivamente, 13 e 6.

Gabarito: Letra B.

(FUNDATEC/SBC/2022) Resolva o sistema de equações lineares pelo método de Gauss, se a matriz do
sistema é:

a) 𝑥= 1; 𝑦 = −9; 𝑧= 6

b) 𝑥 = 2; 𝑦 = −11; 𝑧 = −6

c) 𝑥= 1; 𝑦 = 2; 𝑧 = −3

d) 𝑥= −2; 𝑦 = 6; 𝑧 = 3

e) 𝑥= −2; 𝑦 = 6; 𝑧= −6

Comentários:

A questão apresenta a matriz completa do sistema. As três linhas da matriz representam as três equações
do sistema linear e, além disso:

-
A primeira coluna corresponde à variável 𝑥 de cada equação;
-
A segunda coluna corresponde à variável 𝑦 de cada equação;
-
A terceira coluna corresponde à variável 𝑧 de cada equação; e
-
A quarta coluna corresponde ao termo independente de cada equação.

Para resolver o sistema linear, vamos utilizar o método do escalonamento (método de Gauss):

[

−3
−2
−1
]
~
𝐿2←𝟏𝐿2+(−𝟑)𝐿1 [

−3
−2
−6
−1
]
~
𝐿3←𝟏𝐿3+(−𝟐)𝐿1 [

−3
−2
−6
−5
]

~
𝐿3←𝟏𝐿3+(−𝟓

𝟔)𝐿2

[

−3
−2
−6

−1

3
]

Ficamos com o seguinte sistema escalonado:

{

𝑥+ 2𝑦−3𝑧 = −2

−6𝑦+ 10𝑧= 6

−1

3 𝑧= 2

Da terceira equação, temos:

−1

3 𝑧= 2

𝒛= −𝟔

Da segunda equação, temos:

−6𝑦+ 10𝑧= 6

−6𝑦+ 10. (−6) = 6

−6𝑦−60 = 6

−6𝑦= 66

𝒚= −𝟏𝟏

Da primeira equação, temos:

𝑥+ 2𝑦−3𝑧= −2

𝑥+ 2. (−11) −3. (−6) = −2

𝑥−22 + 18 = −2

𝑥−4 = −2

𝑥= −2 + 4

𝒙= 𝟐

Portanto, 𝒙 = 𝟐, 𝒚 = −𝟏𝟏 e 𝒛 = −𝟔.

Gabarito: Letra B.

(FGV/MPE SC/2022) Sabe-se que { 𝟐𝒙−𝒚= 𝟗

𝟑𝒙−𝟐𝒚= 𝟓 .

O valor de 𝒙 + 𝒚 é:

a) 16;

b) 18;

c) 24;

d) 26;

e) 30.

Comentários:

Vamos resolver o sistema linear por substituição.

A partir da primeira equação, podemos isolar 𝑦:

2𝑥−𝑦= 9

2𝑥−9 = 𝑦

𝒚= 𝟐𝒙−𝟗

Substituindo esse valor na segunda equação, temos:

3𝑥−2𝑦= 5

3𝑥−2(𝟐𝒙−𝟗) = 5

3𝑥−4𝑥+ 18 = 5

−𝑥= 5 −18

−𝑥= −13

𝒙= 𝟏𝟑

Substituindo o valor de 𝑥 em 𝒚= 𝟐𝒙−𝟗, temos:

𝑦= 2𝑥−9

𝑦= 2 × 13 −9

𝑦= 26 −9

𝒚= 𝟏𝟕

Logo:

𝑥+ 𝑦= 13 + 17

= 30

Gabarito: Letra E.

(FGV/CGU/2022) Considere o sistema linear { 𝒙−𝟐𝒚+ 𝒛= 𝟒

−𝟑𝒙+ 𝒚+ 𝟐𝒛= 𝟑.

Sabe-se que 𝒙+ 𝒚&gt; 𝟏𝟎𝟎.

O menor valor inteiro de 𝒛 que satisfaz as condições dadas é:

a) 52;

b) 53;

c) 54;

d) 55;

e) 56.

Comentários:

Note o número de equações do sistema é superior ao número de incógnitas e, portanto, não podemos
determinar os valores de 𝑥, 𝑦 e 𝑧.

Para resolver o problema, vamos escrever 𝒙 em função da variável 𝒛, depois vamos escrever 𝒚 em função
da variável 𝒛 para, em seguida, substituir os valores encontrados na desigualdade 𝒙+ 𝒚&gt; 𝟏𝟎𝟎,

Escrever 𝒙 em função da variável 𝒛

Vamos obter uma relação entre 𝑥 e 𝑧 eliminando a variável 𝑦.

Ao realizar a combinação linear 𝑳𝟏+ 𝟐𝑳𝟐, temos:

𝑳𝟏
2𝑥−2𝑦+ 2𝑧= 4
𝟐𝑳𝟐
−6𝑥+ 2𝑦+ 4𝑧= 6

𝑳𝟏+ 𝟐𝑳𝟐
−𝟓𝒙 + 𝟓𝒛= 𝟏𝟎

Escrevendo 𝑥 em função de 𝑧, temos:

−5𝑥+ 5𝑧= 10

5𝑥= 5𝑧−10

𝒙= 𝒛−𝟐

Escrever 𝒚 em função da variável 𝒛

Vamos obter uma relação entre 𝑦 e 𝑧 eliminando a variável 𝑥.

Ao realizar a combinação linear 𝟑𝑳𝟏+ 𝑳𝟐, temos:

𝟑𝑳𝟏
3𝑥−6𝑦+ 3𝑧= 12
𝑳𝟐
−3𝑥+ 2𝑦+ 2𝑧= 3

𝟑𝑳𝟏+ 𝑳𝟐
−𝟓𝒙−𝟓𝒚 + 𝟓𝒛= 𝟏𝟓

Escrevendo 𝑦 em função de 𝑧, temos:

−5𝑦+ 5𝑧= 15

5𝑦= 5𝑧−15

𝒚= 𝒛−𝟑

Substituir os valores encontrados na desigualdade 𝒙+ 𝒚&gt; 𝟏𝟎𝟎

Ao realizar a substituição, temos:

𝑥+ 𝑦&gt; 100

(𝑧−2) + (𝑧−3) &gt; 100

2𝑧−5 &gt; 100

2𝑧&gt; 105

𝑧&gt; 52,5

Logo, o menor valor inteiro de 𝒛 que satisfaz as condições dadas é 53.

Gabarito: Letra B.

(FGV/MPE SC/2022) No sistema

{

𝟑𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟏𝟔

𝒂+ 𝟑𝒃+ 𝒄+ 𝒅= 𝟔
𝒂+ 𝒃+ 𝟑𝒄+ 𝒅= 𝟏𝟒
𝒂+ 𝒃+ 𝒄+ 𝟑𝒅= 𝟏𝟐

o valor de 𝒂 é:

a) –1;

b) 1;

c) 2;

d) 3;

e) 4.

Comentários:

Ao somar todas as equações do sistema linear, temos:

3𝑎+ 𝑏+ 𝑐+ 𝑑= 16
𝑎+ 3𝑏+ 𝑐+ 𝑑= 6
𝑎+ 𝑏+ 3𝑐+ 𝑑= 14
𝑎+ 𝑏+ 𝑐+ 3𝑑= 12

6𝑎+ 6𝑏+ 6𝑐+ 6𝑑= 48

Ficamos com:

6(𝑎+ 𝑏+ 𝑐+ 𝑑) = 48

(𝑎+ 𝑏+ 𝑐+ 𝑑) = 48

6

𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟖

A partir dessa informação, podemos subtrair 𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟖 da primeira equação do sistema linear.

3𝑎+ 𝑏+ 𝑐+ 𝑑= 16
−𝒂−𝒃−𝒄−𝒅= −𝟖

𝟐𝒂 = 𝟖

Logo, dividindo os dois lados da equação por 2, temos 𝒂= 𝟒.

Gabarito: Letra E.

(FGV/TCE TO/2022) Considere o sistema:

{

𝒙+ 𝒚+ 𝟓𝒛= 𝟎
𝒙+ 𝟓𝒚+ 𝒛= 𝟏𝟒
𝟓𝒙+ 𝒚+ 𝐳= 𝟐𝟖

O valor de 𝒙 é:

a) 3/2;

b) 5/2;

c) 7/2;

d) 9/2;

e) 11/2.

Comentários:

Ao somar todas as equações do sistema linear, temos:

𝑥+ 𝑦+ 5𝑧= 0
𝑥+ 5𝑦+ 𝑧= 14
5𝑥+ 𝑦+ 𝑧= 28

7𝑥+ 7𝑦+ 7𝑧= 42

Ficamos com:

7(𝑥+ 𝑦+ 𝑧) = 42

𝑥+ 𝑦+ 𝑧= 42

7

𝑥+ 𝑦+ 𝑧= 6

A partir dessa informação, podemos subtrair 𝒙+ 𝒚+ 𝒛= 𝟔 da terceira equação do sistema linear.

5𝑥+ 𝑦+ 𝑧= 28
−𝒙−𝒚−𝒛= −𝟔

𝟒𝒙 = 𝟐𝟐

Portanto:

𝑥= 22

4

= 11

2

Gabarito: Letra E.

(VUNESP/Pref. Guaratinguetá/2022) Considere um sistema linear possível e determinado com 3
equações e 3 incógnitas, em que sua representação matricial é dada por 𝑨𝑿= 𝑩, sendo 𝑨 a matriz dos
coeficientes das equações do sistema, 𝑿 a matriz das incógnitas do sistema, e 𝑩 a matriz dos termos
independentes do sistema. A operação matricial que permite determinar corretamente os valores dos
elementos da matriz 𝑿 está indicada na alternativa:

a) 𝑋= 𝐵 – 𝐴

b) 𝑋= 𝐵+ 𝐴

c) 𝑋= 𝐵· 𝐴–1

d) 𝑋= 𝐴–1 · 𝐵

e) 𝑋= 𝐵–1 · 𝐴

Comentários:

Temos um sistema linear escrito na forma 𝑨𝑿= 𝑩, em que:

-
𝑨 a matriz dos coeficientes das equações do sistema;
-
𝑿 a matriz das incógnitas do sistema; e
-
𝑩 a matriz dos termos independentes do sistema

Como o sistema é possível e determinado (SPD), temos 𝐝𝐞𝐭𝑨≠𝟎. Logo, a matriz 𝐴 admite inversa.

Para obter os valores dos elementos da matriz 𝑋, devemos multiplicar ambos os lados da equação matricial
por 𝐴−1 pela esquerda:

𝐴𝑋= 𝐵

𝐴−1𝐴𝑋= 𝐴−1𝐵

Pela definição de matriz inversa, temos que 𝐴−1𝐴= 𝐼. Logo:

𝐼𝑋= 𝐴−1𝐵

Como a matriz identidade é o elemento neutro da multiplicação de matrizes, ficamos com:

𝑋= 𝐴−1𝐵

Logo, a operação matricial que permite determinar corretamente os valores dos elementos da matriz 𝑋 está
indicada na alternativa D.

Gabarito: Letra D.

(VUNESP/FICSAE/2022) Sabendo que a inversa da matriz [

𝟕

𝟏𝟑
−

𝟐𝟏

𝟐
𝟑

𝟏𝟏

𝟏𝟏

𝟕

] é a matriz [

𝟕𝟓𝟔

𝟓𝟒𝟑𝟕

𝟒𝟖𝟓𝟏

𝟓𝟒𝟑𝟔
−

𝟏𝟐𝟔

𝟓𝟒𝟑𝟕

𝟐𝟔𝟏𝟖

𝟓𝟒𝟑𝟕

] e que

(𝒙, 𝒚) é a solução do sistema de equações {

𝟏𝟕𝒙

𝟑−

𝟐𝟏𝒚

𝟐= 𝟏

𝟑𝒙

𝟏𝟏+

𝟏𝟏𝒚

𝟕= 𝟎

, então, 𝒙 − 𝒚 é igual a

a)

852

5437

b)

1452

5437

c)

2233

5437

d)

2492

5437

e)

2744

5437

Comentários:

Temos o seguinte sistema linear:

{

𝟏𝟕

𝟑𝒙−𝟐𝟏

𝟐𝒚= 𝟏

𝟑
𝟏𝟏𝒙+ 𝟏𝟏

𝟕𝒚= 𝟎

Esse sistema linear também pode ser escrito na forma matricial 𝑨𝑿= 𝑩, em que:

-
𝑨 a matriz dos coeficientes das equações do sistema;

-
𝑿 a matriz das incógnitas do sistema; e
-
𝑩 a matriz dos termos independentes do sistema

Para o caso em questão:

𝑨= [

𝟕

𝟏𝟑
−

𝟐𝟏

𝟐
𝟑

𝟏𝟏

𝟏𝟏

𝟕

] 𝑿= [𝒙

𝒚] 𝑩= [𝟏

𝟎]

Para obter os valores dos elementos da matriz 𝑋, devemos multiplicar ambos os lados da equação matricial
por 𝐴−1 pela esquerda:

𝐴𝑋= 𝐵

𝐴−1𝐴𝑋= 𝐴−1𝐵

Pela definição de matriz inversa, temos que 𝐴−1𝐴= 𝐼. Logo:

𝐼𝑋= 𝐴−1𝐵

Como a matriz identidade é o elemento neutro da multiplicação de matrizes, ficamos com:

𝑿= 𝑨−𝟏𝑩

Note que o enunciado da questão nos dá a matriz 𝐴−1. Portanto:

[𝒙

𝒚] = [

𝟕𝟓𝟔
𝟓𝟒𝟑𝟕

𝟒𝟖𝟓𝟏
𝟓𝟒𝟑𝟔

−𝟏𝟐𝟔

𝟓𝟒𝟑𝟕

𝟐𝟔𝟏𝟖
𝟓𝟒𝟑𝟕

] × [𝟏

𝟎]

[𝑥

𝑦] = [

756
5437 × 1 + 4851
5436 × 0

(−126

5437) × 1 + 2618
5437 × 0
]

[𝑥

𝑦] = [

756
5437

−126

5437

]

Logo, 𝒙=

𝟕𝟓𝟔

𝟓𝟒𝟑𝟕 e 𝒚= −

𝟏𝟐𝟔

𝟓𝟒𝟑𝟕. Consequentemente:

𝑥−𝑦= 756

5437 −(−126
5437)

= 756

5437 + 126

= 882

Gabarito: Letra A.

(IDIB/CREMERJ/2021) É correto afirmar que a “Regra de Cramer” é um método utilizado para

a) desenvolver operação com conjuntos.

b) determinar o volume de um cone utilizando uma esfera.

c) determinar o resultado de uma progressão geométrica infinita.

d) solucionar sistemas lineares.

Comentários:

Conforme visto na teoria da aula, a "Regra de Cramer" é utilizada para solucionar sistemas lineares.

Gabarito: Letra D.

(FUNDATEC/Pref. Tramandaí/2021) Observe a figura a seguir:

Quanto corresponde a 40% de
?

a) 4.000.

b) 3.200.

c) 2.400.

d) 1.600.

Comentários:

Considere que a bateria é a variável 𝑥, a guitarra é a variável 𝑦 e o rádio é a variável 𝑧. A questão pergunta
por 40% do valor de 𝒛.

Temos o seguinte sistema linear:

{

𝑥−𝑦= 1.000
𝑥+ 𝑦+ 𝑦= 16.000

𝑧+ 𝑦−𝑥= 7.000

~ {

𝑥−𝑦 = 1.000
𝑥+ 2𝑦 = 16.000

−𝑥+ 𝑦+ 𝑧= 7.000

Note que, ao somar a primeira equação com a terceira, obtemos o valor de 𝑧:

𝑥−𝑦 = 1.000
−𝑥+ 𝑦+ 𝑧= 7.000

𝒛= 𝟖. 𝟎𝟎𝟎

A questão pergunta por 40% de 𝒛:

40% × 8.000

= 0,4 × 8.000

= 3.200

Gabarito: Letra B.

(LEGALLE/CM Campestre Serra/2021) Observe o sistema de equações representado abaixo e assinale
a alternativa que apresenta a soma do resultado das incógnitas que satisfazem esse sistema.

{ 𝟐𝒙−𝒚= 𝒙−𝟒

𝟓−𝟑𝒚= 𝟓𝒚+ 𝒙

a) −4.

b) −3.

c) −2.

d) 2.

e) 4.

Comentários:

Incialmente, vamos organizar o sistema linear de modo que as incógnitas estejam à esquerda das equações
e de modo que os termos independentes estejam à direita das equações.

{ 𝟐𝒙−𝒚= 𝒙−𝟒

𝟓−𝟑𝒚= 𝟓𝒚+ 𝒙~ { 𝟐𝒙−𝒙−𝒚= −𝟒

−𝒙−𝟓𝒚−𝟑𝒚= −𝟓~ { 𝒙−𝒚= −𝟒

−𝒙−𝟖𝒚= −𝟓

Ao somar as duas equações, podemos obter o valor de 𝑦:

𝑥−𝑦 = −4
−𝑥−8𝑦= −5

−𝟗𝒚= −𝟗

Logo:

𝑦= −9

−9

𝒚= 𝟏

Ao substituir o valor de 𝑦 na primeira equação, temos:

𝑥−𝑦= −4

𝑥−1 = −4

𝑥= −4 + 1

𝒙= −𝟑

Portanto, a soma dos resultados das incógnitas é:

𝑥+ 𝑦= −3 + 1

= −2

Gabarito: Letra C.

(FUNDATEC/Pref. Vacaria/2021) No sistema de equações {𝒙+ 𝒚= 𝟏𝟖

𝒙−𝒚= 𝟔, o valor de 𝒙𝟐+ 𝒚𝟐 é:

a) 180.

b) 150.

c) 144.

d) 36.

e) 12.

Comentários:

Temos o seguinte sistema linear:

{𝑥+ 𝑦= 18

𝑥−𝑦= 6

Ao somar as duas equações, podemos obter o valor de 𝑥:

𝑥+ 𝑦= 18

𝑥−𝑦= 6

𝟐𝒙 = 𝟐𝟒

Logo:

𝑥= 24

𝒙= 𝟏𝟐

Ao substituir o valor de 𝑥 na primeira equação, temos:

𝑥+ 𝑦= 18

12 + 𝑦= 18

𝑦= 18 −12

𝒚= 𝟔

Logo:

𝑥2 + 𝑦2 = 122 + 62

= 144 + 36

= 180

Gabarito: Letra A.

(CESGRANRIO/BB/2021) Um banco tem agências em três regiões do país. Em cada região, trabalha-se
com a comercialização de três segmentos: seguros (X), previdência (Y) e consórcios (Z). Cada equação linear
que compõe o sistema abaixo representa a capacidade de uma regional produzir valor agregado para o
banco, em cada segmento de atuação (lado esquerdo das equações), visando ao alcance das metas de
lucro operacional em milhares de reais (lado direito das equações).

{

𝟐𝒙+ 𝟓𝒚+ 𝟒𝒛= 𝟔𝟗𝟎 𝐫𝐞𝐠𝐢ã𝐨 𝐒𝐮𝐥
𝟓𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟕𝟐𝟎 𝐫𝐞𝐠𝐢ã𝐨 𝐒𝐮𝐝𝐞𝐬𝐭𝐞
𝟑𝒙+ 𝟑𝒚+ 𝟐𝒙= 𝟓𝟒𝟎 𝐫𝐞𝐠𝐢ã𝐨 𝐍𝐨𝐫𝐭𝐞

De acordo com esses dados, verifica-se que a contribuição de um dado segmento que atinge exatamente
a meta de sua região é de

a) R$160.000,00 no segmento seguros, na região Sul

b) R$400.000,00 no segmento previdência, na região Sudeste

c) R$180.000,00 no segmento consórcio, na região Norte

d) R$90.000,00 no segmento seguros, na região Norte

e) R$180.000,00 no segmento previdência, na região Sul

Comentários:

==5460==

Inicialmente, vamos obter o valor das incógnitas 𝑥, 𝑦 e 𝑧 pelo método do escalonamento, fazendo uso da
matriz completa do sistema.

[

2
5
4
690
5
2
4
720
3
3
2
540
]
~
𝐿2←𝟏𝐿2+(−𝟓

𝟐)𝐿1

[

2
5
4
690

0
−21

2
−6
−1005

3
3
2
540

]
~
𝐿3←𝟏𝐿3+(−𝟑

𝟐)𝐿1

[
2
5
4
690

0
−21

2
−6
−1005

0
−9

2
−4
−495 ]

Multiplicando a primeira e a segunda equação por −2, temos:

[

2
5
4
690
0
21
12
2010
0
9
8
990
]
~
𝐿3←𝟏𝐿3+(−𝟑

𝟕)𝐿2

[

2
5
4
690
0
21
12
2010

0
0
20
7
900
7

]

Ficamos com o seguinte sistema escalonado:

{

𝟐𝒙+ 𝟓𝒚+ 𝟒𝒛= 𝟔𝟗𝟎
𝒙+ 𝟐𝟏𝒚+ 𝟏𝟐𝒛= 𝟐𝟎𝟏𝟎

𝟑𝒚+ 𝟐𝟎

𝟕𝒛= 𝟗𝟎𝟎

𝟕

Da terceira equação, temos:

20
7 𝑧= 900
7

20𝑧= 900

𝑧= 900

20

𝒛= 𝟒𝟓

Da segunda equação, temos:

21𝑦+ 12𝑧= 2010

21𝑦+ 12 × 45 = 2010

21𝑦+ 540 = 2010

21𝑦= 1470

𝑦= 1470

21

𝒚= 𝟕𝟎

Da primeira equação, temos:

2𝑥+ 5𝑦+ 4𝑧= 690

2𝑥+ 5 × 70 + 4 × 45 = 690

2𝑥+ 350 + 180 = 690

2𝑥= 160

𝒙= 𝟖𝟎

Agora vamos avaliar as alternativas, verificando a contribuição dos segmentos em cada uma das regiões.
Vale lembrar que os valores obtidos para 𝑥, 𝑦 e 𝑧 estão em milhares de reais.

a) Contribuição de R$160.000,00 no segmento seguros, na região Sul. CERTO. Esse é o gabarito.

Para a região Sul, a contribuição no segmento de seguros é 2𝑥. Temos:

2 × 80 mil = 160 mil

O gabarito, portanto, é letra A.

b) Contribuição de R$400.000,00 no segmento previdência, na região Sudeste. ERRADO.

Para a região Sudeste, a contribuição no segmento de previdência é 2𝑦. Temos:

2 × 70 mil = 150 mil

c) Contribuição de R$180.000,00 no segmento consórcio, na região Norte. ERRADO.

Para a região norte, a contribuição do segmento de consórcio é 2𝑧. Temos:

2 × 45 mil = 90 mil

d) Contribuição de R$90.000,00 no segmento seguros, na região Norte. ERRADO.

Para a região norte, a contribuição do segmento de seguros é 3𝑥. Temos:

3 × 80 mil = 240 mil

e) Contribuição de R$180.000,00 no segmento previdência, na região Sul. ERRADO.

Para a região sul, a contribuição do segmento de previdência é 5𝑦. Temos:

5 × 70 mil = 350 mil

Gabarito: Letra A.

(IDIB/CM Planaltina/2021) Em um estabelecimento comercial, preços de pacotes contendo produtos
de higiene se diferenciam pela variedade e quantidade de produtos. Quatro desses pacotes estão abaixo
representados, sendo três deles com os respectivos preços:

A partir dos dados apresentados, qual é o preço do pacote 4?

a) R$ 32,40

b) R$ 30,60

c) R$ 29,60

d) R$ 34,00

Comentários:

Suponha que o preço da unidade do sabonete, do lenço e do frasco de álcool gel sejam, respectivamente,
𝒙, 𝒚 e 𝒛.

A questão pergunta pelo preço do pacote 4, ou seja, a questão pergunta por 𝟐𝒙+ 𝟐𝒚+ 𝒛.

Para o pacote 1, temos:

𝟐𝒙+ 𝒚+ 𝒛= 𝟐𝟓, 𝟖𝟎

Para o pacote 2, temos:

𝒙+ 𝟐𝒚+ 𝒛= 𝟐𝟒, 𝟐𝟎

Para o pacote 3, temos:

2𝑥+ 2𝑧= 29,20

Dividindo ambos os lados da equação por 2, temos:

𝒙+ 𝒛= 𝟏𝟒, 𝟔𝟎

Ficamos com o seguinte sistema linear:

{

2𝑥+ 𝑦+ 𝑧= 25,80
𝑥+ 2𝑦+ 𝑧= 24,20

𝑥+ 𝑧= 14,60

Ao subtrair a terceira equação da segunda, ficamos com:

𝑥+ 2𝑦+ 𝑧= 24,20
−𝒙 − 𝒛= −𝟏𝟒, 𝟔𝟎

𝟐𝒚 = 𝟗, 𝟔𝟎

Portanto:

𝑦= 9,60

2

𝒚= 𝟒, 𝟖𝟎

Substituindo esse valor de 𝑥 na primeira equação, temos:

2𝑥+ 𝑦+ 𝑧= 25,80

2𝑥+ 4,80 + 𝑧= 25,80

2𝑥+ 𝑧= 25,80 −4,80

𝟐𝒙+ 𝒛= 𝟐𝟏, 𝟎𝟎

Subtraindo a terceira equação dessa nova equação encontrada, obtemos o valor de 𝑥:

2𝑥+ 𝑧= 21,00
−𝒙− 𝒛= −𝟏𝟒, 𝟔𝟎

𝒙 = 𝟔, 𝟒𝟎

Substituindo o valor de 𝑥 encontrado na terceira equação, temos:

𝑥+ 𝑧= 14,60

6,40 + 𝑧= 14,60

𝑧= 14,60 −6,40

𝒛= 𝟖, 𝟐𝟎

Agora que temos os valores de 𝑥, 𝑦 e 𝑧, podemos obter o preço do pacote 4:

𝟐𝒙+ 𝟐𝒚+ 𝒛

= 2 × 6,40 + 2 × 4,80 + 8,20

= 12,80 + 9,60 + 8,20

= R$ 30,60

Gabarito: Letra B.

(FGV/FEMPAR/2021) A manipulação das equações de um sistema linear pode gerar novas equações

lineares mais simples que as originais. Ao serem incorporadas ao conjunto original, as novas equações
podem contribuir na busca por soluções do sistema.

Considere o sistema linear de 3 equações e 3 incógnitas dado por

{

𝟑𝒂−𝟐𝒃+ 𝒄= 𝟗
𝒂+ 𝟑𝒃−𝟐𝒄= 𝟏𝟏
−𝟐𝒂+ 𝒃+ 𝟑𝒄= 𝟏𝟑

É correto afirmar que 𝒂 + 𝒃 + 𝒄 vale

a) 16,5.

b) 18,5.

c) 19.

d) 32,5.

e) 33.

Comentários:

Ao somar todas as equações do sistema linear, temos:

−3𝑎−2𝑏+ 𝑐= 9
−2𝑎+ 3𝑏−2𝑐= 11

−2𝑎+ 𝑏+ 3𝑐= 13

2𝑎+ 2𝑏+ 2𝑐= 33

Ficamos com:

2(𝑎+ 𝑏+ 𝑐) = 33

𝑎+ 𝑏+ 𝑐= 33

2

𝑎+ 𝑏+ 𝑐= 16,5

Gabarito: Letra A.

(Instituto Consulplan/CM Amparo/2020) Dado o sistema {

𝒙+ 𝒚+ 𝒛= 𝟗𝟑𝟎

𝒙+ 𝒛= 𝟔𝟔𝟎
𝒙+ 𝒚= 𝟓𝟕𝟎

Pode-se afirmar que 𝒚 – 𝒛 é igual a:

a) –110

b) –90

c) 120

d) 630

Comentários:

Podemos obter 𝑦−𝑧 diretamente subtraindo a segunda equação da terceira:

𝑥+ 𝑦 = 570
−𝒙 −𝒛= 𝟔𝟔𝟎

𝒚−𝒛= −𝟗𝟎

O gabarito, portanto, é letra B.

Gabarito: Letra B.

(Instituto Consulplan/Pref Colômbia/2020) Dado o sistema {

𝒙−𝒚+ 𝒛= −𝟏

𝒙−𝒛= −𝟕
𝟐𝒙+ 𝟑𝒚+ 𝒛= 𝟒

, pode se afirmar que

𝒙𝒚𝒛 é igual a:

a) 12

b) −12

c) 24

d) −24

Comentários:

Inicialmente, vamos obter o valor das incógnitas 𝑥, 𝑦 e 𝑧 pelo método do escalonamento, fazendo uso da
matriz completa do sistema.

[

1
−1
1
−1
1
0
−1
−7
2
3
1
4
]
~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 [

1
−1
1
−1
0
1
−2
−6
2
3
1
4
]
~
𝐿3←𝟏𝐿3+(−𝟐)𝐿1 [

1
−1
1
−1
0
1
−2
−6
0
5
−1
6
]

~
𝐿3←𝟏𝐿3+(−𝟓)𝐿2 [

1
−1
1
−1
0
1
−2
−6
0
0
9
36
]

Ficamos com o seguinte sistema escalonado:

{

𝑥−𝑦+ 𝑧= −1
𝑦−2𝑧= −6

9𝑧= 36

A partir da terceira equação, temos:

9𝑧= 36

𝑧= 36

𝒛= 𝟒

Da segunda equação, temos:

𝑦−2𝑧= −6

𝑦−2. (4) = −6

𝑦−8 = −6

𝒚= 𝟐

Da primeira equação, temos:

𝑥−𝑦+ 𝑧= −1

𝑥−2 + 4 = −1

𝑥+ 2 = −1

𝒙= −𝟑

Portanto:

𝑥𝑦𝑧= (−3). 2.4 = −24

Gabarito: Letra D.

(VUNESP/Pref. N Odessa/2018) Gertrudes, que é doceira, recebeu três encomendas para festas. Sabe-

se que, em cada uma das encomendas, foram usadas quantidades diferentes de ovos, iguais a 𝒙, 𝒚 e 𝒛, tais
que 𝒙+ 𝒚= 𝟒𝟎, 𝒙+ 𝒛= 𝟑𝟎 e 𝒚 + 𝒛= 𝟑𝟖. Desse modo, é correto afirmar que, para a produção dessas
três encomendas, Gertrudes usou uma quantidade de ovos igual a

a) 3,5 dúzias.

b) 4 dúzias.

c) 4,5 dúzias.

d) 5 dúzias.

e) 5,5 dúzias.

Comentários:

O total de ovos das três encomendas é dado pela soma 𝒙+ 𝒚+ 𝒛. Note que a questão apresenta o seguinte
sistema:

{

𝑥+ 𝑦+ 𝑧= 40
𝑥+ 𝑦+ 𝑧= 30
𝑥+ 𝑦+ 𝑧= 38

Ao somar as três equações, ficamos com:

2𝑥+ 2𝑦+ 2𝑧= 108

2(𝑥+ 𝑦+ 𝑧) = 108

(𝑥+ 𝑦+ 𝑧) = 54

O número de dúzias é:

54
12 = 4,5 dúzias

Gabarito: Letra C.

(FGV/ALERO/2018) Considere o sistema linear

{

𝒙+ 𝟐𝒚+ 𝟑𝒛= 𝟏𝟔𝟎
𝟐𝒙+ 𝟑𝒚+ 𝒛= 𝟏𝟒𝟎
𝟑𝒙+ 𝒚+ 𝟐𝒙= 𝟏𝟓𝟔

O valor de 𝒙 é:

a) 20.

b) 22.

c) 24.

d) 26.

e) 28.

Comentários:

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

1
2
3
160
2
3
1
140
3
1
2
156
]
~
𝐿2←𝟏𝐿2+(−𝟐)𝐿1 [

1
2
3
160
0
−1
−5
−180
3
1
2
156
]
~
𝐿3←𝟏𝐿3+(−𝟑)𝐿1 [

1
2
3
160
0
−1
−5
−180
0
−5
−7
−324

]

~
𝐿3←𝟏𝐿3+(−𝟓)𝐿2 [

1
2
3
160
0
−1
−5
−180
0
0
18
576
]

A partir da terceira equação, temos:

18𝑧= 576

𝒛= 𝟑𝟐

A partir da segunda equação, temos:

−𝑦−5𝒛= −180

−𝑦−5.32 = −180

𝑦= 180 −160

𝒚= 𝟐𝟎

A partir da primeira equação, temos:

𝑥+ 2𝒚+ 3𝒛= 160

𝑥+ 2.20 + 3.32 = 160

𝑥= 160 −40 −96

𝒙= 𝟐𝟒

Logo, temos que 𝑥= 24. Portanto, o gabarito é letra C.

Outra forma de resolver o problema é pelo Teorema de Cramer. Temos que:

𝑥= 𝐷𝑥

𝐷

𝐷 é o determinante da matriz dos coeficientes:

|

1
2
3
2
3
1
3
1
2
|

1
2
2
3
3
1

Parte Negativa Parte Positiva

𝐷= [𝟏. 𝟑. 𝟐+ 𝟐. 𝟏. 𝟑+ 𝟑. 𝟐. 𝟏] −[𝟑. 𝟑. 𝟑+ 𝟏. 𝟏. 𝟏+ 𝟐. 𝟐. 𝟐]

𝐷= 18 −36

𝐷= −18

𝐷𝑥 é o determinante da matriz dos coeficientes substituindo a primeira coluna pela matriz dos termos
independentes:

|

160
2
3
140
3
1
156
1
2
|

160
2
140
3
156
1

Parte Negativa Parte Positiva

𝐷𝑥= [𝟏𝟔𝟎. 𝟑. 𝟐+ 𝟐. 𝟏. 𝟏𝟓𝟔+ 𝟑. 𝟏𝟒𝟎. 𝟏] −[𝟑. 𝟑. 𝟏𝟓𝟔+ 𝟏. 𝟔𝟎. 𝟏. 𝟏+ 𝟐. 𝟏𝟒𝟎. 𝟐]

𝐷𝑥= 1692 −2124

= −432

Logo:

𝑥= 𝐷𝑥

𝐷= −432

−18

𝑥= 24

Novamente, obtemos que o gabarito é letra C.

Gabarito: Letra C.

(FCC/TRT 11/2017) O sistema de equações lineares {𝟐𝒙+ 𝟑𝒚= 𝟐𝟒

𝟒𝒙−𝟐𝒚= 𝟏𝟔 é equivalente ao sistema

{

𝟐𝒙+ 𝟑𝒚= 𝟐𝟒
𝟒𝒙−𝟐𝒚= 𝟏𝟔
𝟖𝒙+ 𝑲𝒚= 𝟖𝟎

, em que 𝒙 e 𝒚 são as incógnitas reais dos sistemas. Se 𝑺 = (𝒙 + 𝒚) e 𝑲 é um parâmetro

real, então

a) S = 2,00K

b) S = 0,80K

c) S = 0,75K

d) S = 1,25K

e) S = 1,50K

Comentários:

Temos o seguinte sistema linear:

{2𝑥+ 3𝑦= 24

4𝑥−2𝑦= 16

Realizando 𝐿2 ←𝟏𝐿2 + (−𝟐)𝐿1, temos:

{ 2𝑥+ 3𝑦= 24

−8𝑦= −32

A partir da última equação do sistema escalonado, temos:

−8𝑦= −32

𝒚= 𝟒

A partir da primeira equação do sistema escalonado, temos:

2𝑥+ 3𝒚= 24

2𝑥+ 3.4 = 24

2𝑥= 24 −12

𝒙= 𝟔

Portanto, a solução do sistema {2𝑥+ 3𝑦= 24

4𝑥−2𝑦= 16 é (𝒙, 𝒚) = (𝟒, 𝟔).

Para que o sistema {

2𝑥+ 3𝑦= 24
4𝑥−2𝑦= 16
8𝑥+ 𝐾𝑦= 80
seja equivalente ao sistema original, ele deve apresentar somente a

solução (𝑥, 𝑦) = (4, 6). Nesse caso, a última equação deve ser satisfeita para (𝑥, 𝑦) = (4, 6).

8𝑥+ 𝐾𝑦= 80

8.4 + 𝐾. 6 = 80

32 + 6𝐾= 80

6𝐾= 48

𝑲= 𝟖

O valor de 𝑆= 𝑥+ 𝑦 é:

𝑆= 6 + 4 = 10

Logo,

𝑆

𝐾 é:

𝑆
𝐾= 10

8 = 1,25

Portanto, 𝑺= 𝟏, 𝟐𝟓𝑲.

Gabarito: Letra D.

(VUNESP/CM Marília/2017) Uma editora enviou para uma biblioteca três pacotes que tinham,
respectivamente, 𝒚, 𝒘 e 𝒛 livros em cada um. Sabendo-se que 𝒚 + 𝒘 = 𝟒𝟎, 𝒚 + 𝒛 = 𝟑𝟎 e
𝒘 + 𝒛 = 𝟑𝟖, é correto afirmar que os três pacotes tinham, juntos, um número total de livros igual a

a) 54.

b) 56.

c) 58.

d) 60.

e) 64.

Comentários:

O total de livros dos três pacotes é dado pela soma 𝒚+ 𝒘+ 𝒛. Note que a questão apresenta o seguinte
sistema:

{

𝑦+ 𝑤+ 𝑧= 40

𝑦+ 𝑦+ 𝑧= 30
𝑥+ 𝑤+ 𝑧= 38

Ao somar as três equações, ficamos com:

2𝑦+ 2𝑤+ 2𝑧= 108

2(𝑦+ 𝑤+ 𝑧) = 108

(𝑦+ 𝑤+ 𝑧) = 54

Portanto, o total de livros é 54.

Gabarito: Letra A.

(VUNESP/TJSP/2017) Os preços de venda de um mesmo produto nas lojas X, Y e Z são números inteiros
representados, respectivamente, por 𝒙, 𝒚 e 𝒛. Sabendo-se que 𝒙 + 𝒚 = 𝟐𝟎𝟎, 𝒙 + 𝒛 = 𝟏𝟓𝟎 e
𝒚+ 𝒛= 𝟏𝟗𝟎, então a razão

𝒙

𝒚 é:

a)

3

5

b)

4

9

c)

2

3

d)

3

8

e)

1

3

Comentários:

Temos o seguinte sistema de equações lineares:

{

𝑥+ 𝑦+ 𝑧= 200
𝑥+ 𝑦+ 𝑧= 150
𝑥+ 𝑦+ 𝑧= 190

Ao somar todas as equações do sistema, ficamos com:

2𝑥+ 2𝑦+ 2𝑧= 540

2(𝑥+ 𝑦+ 𝑧) = 540

𝒙+ 𝒚+ 𝒛= 𝟐𝟕𝟎

Veja que temos a soma das três incógnitas e cada equação original apresenta sempre duas incógnitas.
Podemos subtrair cada equação do sistema linear de 𝒙+ 𝒚+ 𝒛= 𝟐𝟕𝟎.

𝒙+ 𝒚+ 𝒛= 𝟐𝟕𝟎
(−𝟏)𝐿2
−𝑥 𝑦−𝑧= −150

𝒚 = 𝟏𝟐𝟎

𝒙+ 𝒚+ 𝒛= 𝟐𝟕𝟎
(−𝟏)𝐿3
𝑥−𝑦−𝑧= −190

𝒙 = 𝟖𝟎

Logo:

𝑥
𝑦= 80

120 = 2
3

Gabarito: Letra C.

## QUESTÕES COMENTADAS – MULTIBANCAS

### Discussão de um sistema linear

(Instituto AOCP/PM ES/2022) Nos sistemas de equações lineares, é possível representar a relação entre
a sua classificação (ou suas características) e sua quantidade de soluções (ou as características do conjunto
solução). Nesse contexto, é correto afirmar que (Nota: em algumas literaturas, o termo “compatível” é
apresentado como “possível”)

a) um Sistema Compatível e Indeterminado admitirá, como conjunto solução, o conjunto vazio.

b) um Sistema Compatível e Determinado apresenta infinitas soluções.

c) um Sistema Homogêneo sempre admite solução única.

d) um Sistema Incompatível sempre terá alguma solução.

e) sistemas homogêneos sempre são compatíveis.

Comentários:

Sabemos que um sistema linear pode ser classificado de três formas:

- Sistema Possível (Compatível) e Determinado (SPD): o sistema apresenta uma única solução;

- Sistema Possível (Compatível) e Indeterminado (SPI): o sistema apresenta infinitas soluções; e

- Sistema Impossível (Incompatível) (SI): ocorre quando o sistema não apresenta solução.

Vamos analisar cada alternativa.

a) um Sistema Compatível e Indeterminado admitirá, como conjunto solução, o conjunto vazio. ERRADO.

Um Sistema Possível e Indeterminado (SPI) admite infinitas soluções. O tipo de sistema que apresenta como
conjunto solução o conjunto vazio é o Sistema Impossível (SI), pois este não apresenta solução.

b) um Sistema Compatível e Determinado apresenta infinitas soluções. ERRADO.

O Sistema Possível e Determinado (SPD) apresenta uma única solução.

c) um Sistema Homogêneo sempre admite solução única. ERRADO.

Conforme visto na teoria da aula, um Sistema Linear Homogêneo (SLH) é sempre Possível (Compatível),
podendo admitir solução única (SPD) ou infinitas soluções (SPI).

d) um Sistema Incompatível sempre terá alguma solução. ERRADO.

O Sistema Impossível (SI) não admite solução.

e) sistemas homogêneos sempre são compatíveis. CERTO. Esse é o gabarito.

Conforme visto na alternativa C, um Sistema Linear Homogêneo (SLH) é sempre Possível (Compatível).

Gabarito: Letra E.

(Instituto AOCP/PM ES/2022) Sobre o sistema de equações {𝒂𝒙+ 𝟑𝒚= 𝟒

−𝒙+ 𝟓𝒚= 𝒃 é correto afirmar que

a) se 𝑎= −

3

5, o sistema é possível e determinado.

b) se 𝑎≠−

3

5, o sistema é possível e determinado.

c) se 𝑎≠−

3

5, o sistema é possível e indeterminado.

d) se 𝑏=

20

3 , o sistema é possível e determinado.

e) se 𝑏=

20

3 , o sistema é possível e indeterminado.

Comentários:

Pelo Teorema de Cramer, temos:

Para o caso em questão, o determinante 𝐷 da matriz dos coeficientes é:

𝐷= | 𝑎
−1
5| = [𝑎× 5] −[3 × (−1)] = 5𝑎−(−3) = 5𝑎+ 3

Note que o determinante 𝐷 será igual a zero quando:

5𝑎+ 3 = 0

5𝑎= −3

𝑎= −3

5

Portanto:

- Para 𝑎= −
3

5, o sistema pode ser SPI ou SI (seriam necessárias mais investigações para determinar se
é SPI ou SI);

- Para 𝑎≠−
3

5, o sistema é possível e determinado (SPD).

Logo, se 𝑎≠−

3

5, o sistema é possível e determinado.

Gabarito: Letra B.

(FEPESE/PCien SC/2022) Considere o seguinte sistema linear, nas variáveis x, y, z:

{

𝒙+ 𝟐𝒚+ 𝒂𝒛= 𝟎

𝟐𝒙+ 𝟑𝒛= 𝟎
𝒙+ 𝒚+ 𝒛= 𝟎

O valor de 𝒂 para que o sistema acima tenha infinitas soluções é:

a) Maior que 3.

b) Maior que 1 e menor que 2.

c) Maior que 2 e menor que 3.

d) Maior que 0 e menor que 1.

e) Menor que 0.

Comentários:

Temos o seguinte sistema linear:

{

𝑥+ 2𝑦+ 𝑎𝑧= 0
2𝑥+ 3𝑧= 0
𝑥+ 𝑦+ 𝑧= 0

Note que estamos diante de um Sistema Linear Homogêneo (SLH), pois todos os termos independentes são
zero. Nesse caso, segundo o Teorema de Cramer, temos:

Para que o Sistema Linear Homogêneo admita infinitas soluções, ele deve ser um Sistema Possível e
Indeterminado (SPI). Portanto, queremos obter o valor de 𝒂 de modo que o determinante 𝑫 da matriz dos
coeficientes seja igual a zero (𝑫= 𝟎).

Para o sistema linear considerado, 𝐷= |

1
2
𝑎
2
0
3
1
1
1
|. Utilizando a regra de Sarrus, temos:

|

1
2
𝑎
2
0
3
1
1
1
|

1
2
2
0
1
1

Parte Negativa Parte Positiva

𝐷= [𝟏. 𝟎. 𝟏+ 𝟐. 𝟑. 𝟏+ 𝒂. 𝟐. 𝟏] −[𝒂. 𝟎. 𝟏+ 𝟏. 𝟑. 𝟏+ 𝟐. 𝟐. 𝟏]

𝐷= [6 + 2𝑎] −[3 + 4]

𝐷= 6 + 2𝑎−7

𝐷= 2𝑎−1

Para que 𝐷 seja igual a zero, devemos ter:

2𝑎−1 = 0

2𝑎= 1

𝑎= 1

2

Portanto, o valor de 𝑎 para que o sistema tenha infinitas soluções é maior que 0 e menor que 1.

Gabarito: Letra D.

(AOCP/SED MS/2022) Dado o sistema de equações lineares em x, y e z e a e b números reais, assinale a

alternativa correta.

{

−𝒙−𝟐𝒚+ 𝒂𝒛= 𝟏
−𝒙−𝟐𝒚−𝟐𝒛= 𝟐
−𝒙+ 𝟐𝒚−𝟐𝒛= 𝒃

a) O sistema é possível e determinado se 𝑎= 2

b) O sistema é impossível se 𝑎= 2 e 𝑏≠−1

c) O sistema é impossível se 𝑎≠2 e 𝑏= −1

d) O sistema é possível e indeterminado 𝑎≠2 e 𝑏= −1

e) O sistema é possível e determinado se 𝑎= 2 e 𝑏≠−1

Comentários:

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

1
−2
𝑎
1
1
−1
−1
2
−1
2
−2
𝑏

]
~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 [

1
−2
𝑎
1
0
1
−𝑎−1
1
−1
2
−2
𝑏

]
~
𝐿3←𝟏𝐿3+(𝟏)𝐿1 [

1
−2
𝑎
1
0
1
−𝑎−1
1
0
0
𝑎−2
𝑏+ 1

]

Note que, na última equação do sistema escalonado, temos:

𝟎𝒙+ 𝟎𝒚+ (𝒂−𝟐)𝒛= (𝒃+ 𝟏)

A partir dessa última equação, vamos verificar o que acontece em três casos:

-
𝒂= 𝟐 e 𝒃≠−𝟏;
-
𝒂= 𝟐 e 𝒃= −𝟏
-
𝒂≠𝟐, qualquer que seja o valor de 𝒃.

−

Veja que, se 𝒂= 𝟐 e 𝒃≠−𝟏, teremos uma equação da seguinte forma:

𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= (𝒃+ 𝟏) ≠0

Nesse caso, temos um Sistema Impossível (SI), sem solução. Logo, o sistema é impossível se 𝒂= 𝟐 e
𝒃≠−𝟏. O gabarito, portanto, é letra B.

Para fins didáticos, vamos verificar as outras possibilidades para 𝑎 e 𝑏.

−

Se 𝒂= 𝟐 e 𝒃= −𝟏, teremos uma equação da seguinte forma:

𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝟎

Nesse caso, podemos eliminar a equação do sistema.

[

−2
𝑎
0
1
−𝑎−1
1
0
𝑎−2
𝑏+ 1

] ~ [

−2
0
1
−𝟐−1
1
𝟎

] ~ [1
−2
0
1
−3
1]

Explicitando as variáveis, o sistema linear original, para 𝒂= 𝟐 e 𝒃= −𝟏, equivale a:

{𝑥−2𝑦+ 2𝑧= 1

𝑥 𝑦−3𝑧= 1

Trata-se de um sistema escalonado cujo número de equações (2) é menor do que o número de incógnitas
(3). Logo, temos um sistema possível e indeterminado (SPI), que admite infinitas soluções.

−

Por fim, se 𝒂≠𝟐, qualquer que seja o valor de 𝒃, teremos um sistema escalonado cujo número de
equações (3) é igual ao número de incógnitas (3). Logo, temos um sistema possível e determinado (SPD),
que admite uma única solução.

Gabarito: Letra B.

(FEPESE/PCien SC/2022) Considere as afirmações:

1. Se A e B são matrizes 2×2, então o produto AB é igual ao produto BA.

2. Se A e B são matrizes 2×2 tais que o produto AB é igual a zero, então A = 0 ou B = 0.

3. Se A é uma matriz cujo determinante é não nulo, então o sistema linear homogêneo associado tem
solução única.

Assinale a alternativa que indica todas as afirmativas corretas.

a) É correta apenas a afirmativa 2.

b) É correta apenas a afirmativa 3.

c) São corretas apenas as afirmativas 1 e 2.

d) São corretas apenas as afirmativas 1 e 3.

e) São corretas apenas as afirmativas 2 e 3.

Comentários:

Vamos avaliar as três afirmações do enunciado. As duas primeiras tratam sobre o conteúdo de matrizes, e a
última trata sobre sistemas lineares.

1. Se A e B são matrizes 2×2, então o produto AB é igual ao produto BA. ERRADO.

Conforme se estuda na teoria de matrizes, em regra a propriedade comutativa não se verifica. Isso significa
que, em regra, 𝐴𝐵≠𝐵𝐴, a não ser que a igualdade ocorra por uma coincidência.

2. Se A e B são matrizes 2×2 tais que o produto AB é igual a zero, então A = 0 ou B = 0. ERRADO.

Podemos ter duas matrizes 𝐴 e 𝐵 diferentes de zero de modo que o produto 𝐴𝐵 seja zero. Considere, por

exemplo, 𝐴= [0
1
0
0] e 𝐵= [0
2
0
0]. Nesse caso:

𝐴𝐵= [𝟎
𝟏
𝟎
𝟎] × [𝟎
𝟐
𝟎
𝟎] = [𝟎. 𝟎+ 𝟏. 𝟎
𝟎. 𝟐+ 𝟏. 𝟎
𝟎. 𝟎+ 𝟎. 𝟎
𝟎. 𝟐+ 𝟎. 𝟎] = [0
0
0
0]

3. Se A é uma matriz cujo determinante é não nulo, então o sistema linear homogêneo associado tem
solução única. CERTO.

Sabemos que o Sistema Linear Homogêneo (SLH) pode ser possível e determinado (SPD) ou possível e
indeterminado (SPI):

Portanto, se 𝐴 é uma matriz cujo determinante 𝑫 é diferente de zero, então o sistema linear homogêneo
associado, descrito por 𝐴𝑋= 𝑂, tem solução única.

Gabarito: Letra B.

(VUNESP/Pref. Rio Claro/2022) Considere o sistema linear representado a seguir, nas incógnitas 𝒙 e 𝒚,
com 𝒂, 𝒃, 𝒅 e 𝒆 diferentes de zero:

{𝒂𝒙+ 𝒃𝒚= 𝒄

𝒅𝒙+ 𝒆𝒚= 𝒇

Sobre esse sistema linear é correto afirmar que, se

a) 𝑐= 𝑓= 0, então necessariamente o sistema é possível e indeterminado.

b) 𝑐= 𝑓= 0, então necessariamente o sistema é possível e determinado.

c) 𝑎= 𝑑 e 𝑏= 𝑒, então necessariamente o sistema é possível e indeterminado.

d) 𝑎= 𝑑 e 𝑏= 𝑒, então necessariamente o sistema é possível e determinado.

e) 𝑎= 𝑑, 𝑏= 𝑒 e 𝑐= 𝑓, então necessariamente o sistema é possível e indeterminado.

Comentários:

Pelo Teorema de Cramer, pode-se obter algumas conclusões a partir do determinante da matriz dos
coeficientes (𝐷):

Temos que:

𝐷= |𝑎
𝑏
𝑑
𝑒|

𝐷= 𝑎𝑒−𝑏𝑑

Para 𝑫≠𝟎, teremos um Sistema Possível e Determinado (SPD):

𝐷≠0

𝑎𝑒−𝑏𝑑≠0

𝒂𝒆≠𝒃𝒅

Para 𝑫= 𝟎, podemos ter tanto um Sistema Possível e Indeterminado (SPI) quanto um Sistema Impossível
(SI):

𝐷= 0

𝑎𝑒−𝑏𝑑= 0

𝒂𝒆= 𝒃𝒅

Portanto, pelo Teorema de Cramer, temos as seguintes conclusões:

- 𝒂𝒆≠𝒃𝒅 → Sistema Possível e Determinado (SPD).
- 𝒂𝒆= 𝒃𝒅 ∨ Sistema Possível e Indeterminado (SPI) ou Sistema Impossível (SI).

Para diferenciar as situações em que o sistema é SPI ou SI, devemos escalonar o sistema. Originalmente,
temos:

{𝒂𝒙+ 𝒃𝒚= 𝒄

𝒅𝒙+ 𝒆𝒚= 𝒇

Substituindo 𝑳𝟐 por 𝑳𝟐+ (−

𝒅

𝒂) 𝑳𝟏, temos:

{

𝑎𝑥 + 𝑏𝑦 = 𝑐

0𝑥+ (𝑒−𝑏𝑑
𝑎) 𝑦= (𝑓−𝑐𝑑

𝑎)

- Para termos um Sistema Possível e Indeterminado (SPI), o número de equações do sistema
escalonado deve ser menor do que o número de incógnitas. Isso significa que a última equação
precisa ser da forma 𝟎𝒙+ 𝟎𝒚= 𝟎. Nesse caso:

o (𝑒−

𝑏𝑑

𝑎) = 0 →𝑒=

𝑏𝑑

𝑎→𝒂𝒆= 𝒃𝒅; e

o (𝑓−

𝑐𝑑

𝑎) = 0 →𝑓=

𝑐𝑑

𝑎→𝒂𝒇= 𝒄𝒅

- Para termos um Sistema Impossível (SI), devemos ter no sistema escalonado uma equação da forma

𝟎𝒙+ 𝟎𝒚= (𝒇−

𝒄𝒅

𝒂), com (𝒇−

𝒄𝒅

𝒂) ≠𝟎. Nesse caso:

o (𝑒−

𝑏𝑑

𝑎) = 0 →𝑒=

𝑏𝑑

𝑎→𝒂𝒆= 𝒃𝒅; e

o (𝑓−

𝑐𝑑

𝑎) ≠0 →𝑓≠

𝑐𝑑

𝑎→𝒂𝒇≠𝒄𝒅

Portanto, concluímos o seguinte:

- Se 𝒂𝒆≠𝒃𝒅, o sistema é possível e determinado (SPD);
- Se 𝒂𝒆= 𝒃𝒅 e 𝒂𝒇= 𝒄𝒅, o sistema é possível e indeterminado (SPI); e
- Se 𝒂𝒆= 𝒃𝒅 e 𝒂𝒇≠𝒄𝒅, o sistema é impossível (SI).

Vamos analisar as alternativas.

a) 𝒄= 𝒇= 𝟎, então necessariamente o sistema é possível e indeterminado. ERRADO.

Sabemos que:

-
Se 𝒂𝒆= 𝒃𝒅 e 𝒂𝒇= 𝒄𝒅, o sistema é possível e indeterminado (SPI).

Para o caso em que 𝒄= 𝒇= 𝟎, só temos a garantia de que 𝒂𝒇= 𝒄𝒅, pois nesse caso teremos uma igualdade
da forma 𝟎= 𝟎. Logo, não podemos garantir que temos um SPI.

b) 𝒄= 𝒇= 𝟎, então necessariamente o sistema é possível e determinado. ERRADO.

Sabemos que:

-
Se 𝒂𝒆≠𝒃𝒅, o sistema é possível e determinado (SPD);

O caso 𝒄= 𝒇= 𝟎 não nos garante que 𝒂𝒆 seja diferente de 𝒃𝒅. Logo, não podemos garantir que temos um
SPD.

c) 𝒂= 𝒅 e 𝒃= 𝒆, então necessariamente o sistema é possível e indeterminado. ERRADO.

Sabemos que:

-
Se 𝒂𝒆= 𝒃𝒅 e 𝒂𝒇= 𝒅𝒄, o sistema é possível e indeterminado (SPI).

O caso 𝒂= 𝒅 e 𝒃= 𝒆 só nos garante que 𝒂𝒆= 𝒃𝒅. Logo, não podemos garantir que temos um SPI.

d) 𝒂= 𝒅 e 𝒃= 𝒆, então necessariamente o sistema é possível e determinado. ERRADO.

Sabemos que:

-
Se 𝒂𝒆≠𝒃𝒅, o sistema é possível e determinado (SPD);

O caso 𝒂= 𝒅 e 𝒃= 𝒆 nos garante que 𝒂𝒆 é igual a 𝒃𝒅, não diferente. Logo, não temos um SPD.

e) 𝒂= 𝒅, 𝒃= 𝒆 e 𝒄= 𝒇, então necessariamente o sistema é possível e indeterminado. CERTO. Esse é o
gabarito.

Sabemos que:

-
Se 𝒂𝒆= 𝒃𝒅 e 𝒂𝒇= 𝒅𝒄, o sistema é possível e indeterminado (SPI).

Veja que, se 𝒂= 𝒅 e 𝒃= 𝒆, teremos 𝒂𝒆= 𝒃𝒅. Além disso, se 𝒂= 𝒅 e 𝒄= 𝒇, teremos 𝒂𝒇= 𝒅𝒄.

Logo, é correto afirmar que, se 𝒂= 𝒅, 𝒃= 𝒆 e 𝒄= 𝒇, então necessariamente temos um SPI.

Gabarito: Letra E.

(FEPESE/Pref Biguaçu/2021) O valor de 𝒂 para que o sistema linear

{

𝒂𝒙+ 𝟐𝒚+ 𝟒𝒛−𝟒𝒘= 𝟎
𝒙+ 𝟑𝒛−𝒘= 𝟎

𝟐𝒚+ 𝒛= 𝟎
𝒙−𝟑𝒘= 𝟎

tenha infinitas soluções é:

a) 2.

b) 1.

c) 0.

d) –1.

e) –2.

Comentários:

Temos o seguinte sistema linear:

{

𝑎𝑥+ 2𝑦+ 4𝑧−4𝑤= 0
𝑥+ 2𝑦+ 3𝑧− 𝑤 = 0

𝑥 + 2𝑦+ 𝑧+ 𝑤 = 0

𝑥+ 2𝑦+ 𝑧 −3𝑤 = 0

Note que estamos diante de um Sistema Linear Homogêneo, pois todos os termos independentes são zero.
Nesse caso, segundo o Teorema de Cramer, temos:

Para que o Sistema Linear Homogêneo admita infinitas soluções, ele deve ser um Sistema Possível e
Indeterminado (SPI). Portanto, queremos obter o valor de 𝒂 de modo que o determinante 𝑫 da matriz dos
coeficientes seja igual a zero (𝑫= 𝟎).

Vamos calcular o determinante da matriz dos coeficientes, isto é, o determinante 𝐷= |

𝑎
2
1
0
4
−4
3
−1
0
2
1
0
1
0
0
−3

|.

Temos um determinante de ordem 4. Para calculá-lo, vamos usar a regra de Chió.

Fazer com que o elemento 𝒂𝟏𝟏 seja igual a 1

Ao realizar duas trocas de linhas do determinante 𝐷, voltamos a ter o mesmo determinante 𝐷. Ao trocar as
linhas 1 e 4 entre si e ao trocar as linhas 2 e 3 entre si, ficamos com:

𝐷= |

1
0
0
2
0
−3
1
0
1
0
𝑎
2
3
−1
4
−4

|

Zerar todos os elementos da primeira linha, à exceção de 𝒂𝟏𝟏, fazendo uso da primeira coluna

Para tanto, vamos realizar a seguinte substituição: 𝐶4 ←𝐶4 + 3𝐶1.

𝐷= |

1
0
0
2
0
−3
1
0
1
0
𝑎
3
−1
−4

|
=
𝑪𝟒←𝑪𝟒+𝟑𝑪𝟏|

1
0
0
2
0
0
1
0
1
0
𝑎
3
2
3𝑎−4

|

Feita a operação anterior, o determinante em questão é igual ao menor complementar 𝑫𝟏𝟏

𝐷= |

𝑎
2
4
3𝑎−4

|

𝐷= |

2
1
0
0
3
2
2
4
3𝑎−4
|

Podemos agora calcular o determinante 𝐷 pela regra de Sarrus.

|

2
1
0
0
3
2
2
4
3𝑎−4
|

2
1
0
3
2
4

Parte Negativa Parte Positiva

𝐷= [𝟐. 𝟑. (𝟑𝒂−𝟒) + 𝟏. 𝟐. 𝟐+ 𝟎. 𝟎. 𝟒] −[𝟎. 𝟑. 𝟐+ 𝟐. 𝟐. 𝟒+ 𝟏. 𝟎. (𝟑𝒂−𝟒)]

𝐷= [6. (3𝑎−4) + 4 + 0] −[0 + 16 + 0]

𝐷= 18𝑎−24 + 4 −16

𝐷= 18𝑎−36

Para que 𝐷 seja igual a zero, devemos ter:

18𝑎−36 = 0

18𝑎= 36

𝑎= 36

18

𝒂= 𝟐

Gabarito: Letra A.

(Instituto Consulplan/Pref Formiga/2020) O valor de 𝒘, para que o sistema homogêneo a seguir, nas
incógnitas 𝒙, 𝒚, e 𝒛, admita soluções diferentes da trivial é:

{

𝒙−𝟐𝒚−𝟐𝒛= 𝟎
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟎
𝟑𝒙−𝒚+ 𝒘𝒛= 𝟎

a) 0

b) 1

c) 2

d) 3

Comentários:

Note que estamos diante de um sistema linear homogêneo, pois todos os termos independentes são zero.
Nesse caso, segundo o Teorema de Cramer, temos:

Para que o Sistema Linear Homogêneo admita soluções diferentes da trivial, ele deve ser um Sistema Possível
e Indeterminado (SPI). Portanto, queremos obter o valor da constante 𝒘 de modo que o determinante 𝑫
da matriz dos coeficientes seja igual a zero (𝑫= 𝟎).

Vamos calcular o determinante da matriz dos coeficientes, isto é, o determinante 𝐷= |

1
−2
−2
2
1
3
3
−1
𝑤

|.

Como temos um determinante de ordem 3, podemos utilizar a regra de Sarrus.

|

1
−2
−2
2
1
3
3
−1
𝑤

|

1
−2
2
1
3
−1

Parte Negativa Parte Positiva

𝐷= [𝟏. 𝟏. 𝒘+ (−𝟐). 𝟑. 𝟑+ (−𝟐). 𝟐. (−𝟏)] −[(−𝟐). 𝟏. 𝟑+ 𝟏. 𝟑. (−𝟏) + (−𝟐). 𝟐. 𝒘]

𝐷= [𝑤−18 + 4] −[−6 −3 −4𝑤]

𝐷= [𝑤−14] −[−9 −4𝑤]

𝐷= 𝑤−14 + 9 + 4𝑤

𝐷= 5𝑤−5

Para que 𝐷 seja igual a zero, devemos ter:

5𝑤−5 = 0

5𝑤= 5

𝒘= 𝟏

Gabarito: Letra B.

(FUNDATEC/Pref Ibarama/2020) A solução do sistema de equações { 𝟐𝒙−𝟓𝒚= 𝟑𝟑𝟖

−𝟑𝒙+ 𝟒𝒚= −𝟐𝟓𝟓 é:

a) Possível e determinado 𝑥= −11 e 𝑦= −72.

b) Possível e determinado 𝑥= 309 e 𝑦= 56.

c) Possível e determinado 𝑥= 38 e 𝑦= −35.

d) Possível e indeterminado.

e) Impossível.

Comentários:

Vamos escalonar o sistema em questão.

{ 2𝑥−5𝑦= 338

−3𝑥+ 4𝑦= −255
~
𝐿2←𝟏𝐿2+(𝟑

𝟐)𝐿1

{

2𝑥−5𝑦= 338

−3𝑥−7

2 𝑦= 252

Note que o sistema é possível e determinado (SPD), pois temos um sistema escalonado cujo número de
equações (2) é igual ao número de incógnitas (2).

A partir da segunda equação, temos:

−7

2 𝑦= 255

7
2 𝑦= −252

𝑦= (−252) × 2

7

𝒚= −𝟕𝟐

Utilizando o valor obtido para 𝑦 na primeira equação, temos:

2𝑥−5𝑦= 338

2𝑥−5. (−72) = 338

2𝑥+ 360 = 338

2𝑥= 338 −360

2𝑥= −22

𝒙= −𝟏𝟏

Portanto, o sistema é possível e determinado com 𝒙= −𝟏𝟏 e 𝒚= −𝟕𝟐.

Gabarito: Letra A.

(IBADE/Pref Vila Velha/2020) Para o sistema de equações lineares

{

𝒙+ 𝒚−𝟐𝒛= 𝟒
𝟐𝒙+ 𝟐𝒚−𝟒𝒛= 𝟖
𝒙+ 𝟑𝒚+ 𝟒𝒛= 𝟏𝟎

É correto afirmar que:

a) 𝑥= 2, 𝑦= 2 e 𝑧= 0, é a solução do sistema.

b) O sistema não tem solução.

c) O sistema tem infinitas soluções.

d) O sistema tem solução e ela é única.

e) 𝑥= 1, 𝑦= 1 e 𝑧= −1, é solução do sistema

Comentários:

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

1
1
−2
4
2
2
−4
8
1
3
4
10
]
~
𝐿2←𝟏𝐿2+(−𝟐)𝐿1 [

1
1
−2
4
𝟎
𝟎
𝟎
𝟎
1
3
4
10
] ~
~
𝐿4←𝟏𝐿3+(−𝟏)𝐿1 [

1
1
−2
4
𝟎
𝟎
𝟎
𝟎
0
2
6
6
]

~
𝐿2𝐿3 [

1
1
−2
4
0
2
6
6
𝟎
𝟎
𝟎
𝟎

] ~ [1
1
−2
4
0
2
6
6 ]

Ficamos com o seguinte sistema escalonado:

{ 𝑥+ 𝑦−2𝑧= 4

2𝑦+ 2𝑧= 6

Trata-se de um sistema escalonado cujo número de equações (2) é menor do que o número de incógnitas
(3). Logo, temos um sistema possível e indeterminado (SPI), que admite infinitas soluções.

Gabarito: Letra C.

(FUNDATEC/Pref Ibiaçá/2019) A solução do sistema de equações {
𝟓𝒙−𝟑𝒚= 𝟏𝟔
𝟏𝟎𝒙−𝟔𝒚−𝟑𝟐= 𝟎 é:

a) Sistema impossível.

b) Sistema possível indeterminado.

c) Sistema possível determinado, 𝑥= 16 e 𝑦=

64

3

d) Sistema possível determinado, 𝑥= 3 e 𝑦= −

e) Sistema possível determinado, 𝑥= 0 e 𝑦= −

Comentários:

Inicialmente, vamos organizar as equações o sistema linear de modo que os termos com incógnitas fiquem
à esquerda das equações e de modo que os termos independentes fiquem à direita.

{
5𝑥−3𝑦= 16
10𝑥−6𝑦−32 = 0 ~ { 5𝑥−3𝑦= 16
10𝑥−6𝑦= 32

Podemos escalonar o sistema obtido:

{ 5𝑥−3𝑦= 16

10𝑥−6𝑦= 32
~
𝐿2←𝟏𝐿2+(−𝟐)𝐿1 {5𝑥−3𝑦= 16

𝟎𝒙+ 𝟎𝒚= 𝟎~{5𝑥−3𝑦= 16

Trata-se de um sistema escalonado cujo número de equações (1) é menor do que o número de incógnitas
(2). Logo, temos um sistema possível e indeterminado (SPI), que admite infinitas soluções.

Gabarito: Letra B.

(FCC/IBMEC/2019) Considere o seguinte sistema linear, nas incógnitas 𝒙 e 𝒚:

{ 𝒙+ 𝟐𝒚= 𝟏

−𝟐𝒙+ 𝒌𝒚= 𝟑

O valor de k para que este sistema seja impossível (isto é, não tenha soluções) é

a) − 4

b) 0

c) 4

d) − 2

e) 1

Comentários:

Vamos escalonar o sistema. Na forma matricial, o sistema é dado por:

[ 1
2
1
−2
𝑘
3]

Realizando 𝐿2 = 𝐿2 + 2𝐿1, ficamos com:

[1
2
1
0
𝑘+ 4
5]

Note que, se (𝑘+ 4) for igual a zero, teremos um sistema impossível, pois haverá uma equação da forma
𝟎𝒙+ 𝟎𝒚= 𝟓. Logo, o sistema é impossível quando:

𝑘+ 4 = 0

𝑘= −4

Gabarito: Letra A.

(VUNESP/Pref. Peruíbe/2019) É correto afirmar que o sistema linear {𝒂𝒙+ 𝟐𝒚= 𝒂−𝟏

𝟐𝒙+ 𝟒𝒚= 𝟑𝒂

a) é possível e determinado para qualquer valor de 𝑎.

b) é possível e determinado para 𝑎 = 1.

c) é possível e indeterminado para 𝑎 = 1.

d) é possível e determinado para 𝑎 = 2.

e) é impossível para 𝑎 = 5.

Comentários:

Pelo Teorema de Cramer, temos:

Para o caso em questão, o determinante 𝐷 da matriz dos coeficientes é:

|𝑎
2
2
4| = [𝑎× 4] −[2 × 2] = 4𝑎−4 = 4(𝑎−1)

Note que o determinante será igual a zero quando:

4(𝑎−1) = 0

𝑎−1 = 0

𝑎= 1

Portanto:

- Para 𝑎= 1, o sistema pode ser SPI ou SI (seriam necessárias mais investigações para determinar se
é SPI ou SI);
- Para 𝑎≠1, o sistema é possível e determinado (SPD).

Portanto, o gabarito é letra D: o sistema é possível e determinado para 𝑎= 2, pois, nesse caso, o valor de 𝑎
é diferente de 1.

Gabarito: Letra D.

(VUNESP/Pref. Cerquilho/2019) Considere o seguinte sistema linear, sendo 𝒌 um parâmetro real:

𝑺= {

𝒙+ 𝒚+ 𝒛= 𝟖𝟎
𝟎, 𝟏𝟓𝒙+ 𝟎, 𝟑𝟓𝒚+ 𝒌𝒛= 𝟑𝟐

𝒙−𝟑𝒚= 𝟎

O sistema 𝑺 será:

a) possível e determinado, se 𝑘=

1

5.

b) possível e indeterminado, se 𝑘=

1

5.

c) impossível, se 𝑘=

1

5.

d) impossível, se 𝑘≠

1

5.

e) possível e indeterminado, se 𝑘≠

1

5.

Comentários:

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

1
1
1
80
0,15
0,35
𝑘
32
1
−3
0
0
]
~
𝐿2←𝟏𝐿2+(−𝟎,𝟏𝟓)𝐿1 [

1
1
1
80
0
0,20
𝑘−0,15
20
1
−3
0
0
]
~
𝐿3←𝟏𝐿3+(−𝟏)𝐿1

[

1
1
1
80
0
0,20
𝑘−0,15
20
0
−4
−1
−80

]
~
𝐿3←𝟏𝐿3+(𝟐𝟎)𝐿2 [

1
1
1
80
0
0,20
𝑘−0,15
20
𝟎
𝟎
𝟐𝟎𝒌−𝟒
𝟑𝟐𝟎

]

Note que, se 𝟐𝟎𝒌−𝟒= 𝟎, isto é, se 𝒌=

𝟏

𝟓, a última equação do sistema linear ficará da seguinte forma:

𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝟑𝟐𝟎

Logo, o sistema é impossível se 𝒌=

𝟏

𝟓.

Gabarito: Letra C.

(CEBRASPE/Pref. São Cristóvão/2019) Com relação a sistemas lineares e análise combinatória, julgue o
item.

Para todo sistema linear da forma 𝑨𝑿 = 𝑩, em que 𝑨 é uma matriz quadrada 𝒎× 𝒎, 𝑿 e 𝑩 são matrizes
colunas 𝒎 × 𝟏, e 𝒅𝒆𝒕(𝑨) = 𝟎, o sistema não tem solução.

Comentários:

Temos um sistema linear na forma matricial 𝑨𝒎×𝒎𝑿𝒎×𝟏= 𝑩𝒎×𝟏, sendo:

- 𝑨: Matriz dos coeficientes ou matriz incompleta do sistema;

- 𝑿: Matriz das incógnitas;

- 𝑩: Matriz dos termos independentes.

Segundo o Teorema de Cramer, quando 𝐷= 0, isto é, quando 𝐝𝐞𝐭𝑨= 𝟎, podemos ter:

- Sistema Possível e Indeterminado (SPI): apresenta infinitas soluções;
- Sistema Impossível (SI): não apresenta solução.

Portanto, não se pode afirmar que o sistema não tem solução, pois ele pode ser SPI e, consequentemente,
pode apresentar infinitas soluções.

Gabarito: ERRADO.

(CESGRANRIO/PETROBRAS/2018) Seja o sistema de equação linear: { 𝒂𝒙+ 𝒚= 𝟏

𝒙+ 𝒂𝒚= −𝟏

Quantos são os valores do parâmetro a que levam o sistema a possuir infinitas soluções?

a) 0

b) 1

c) 2

d) 3

e) infinitos

Comentários:

Note que o enunciado afirma que o sistema deve possuir infinitas soluções, ou seja, deve ser um sistema
possível e indeterminado (SPI).

Pelo Teorema de Cramer, sabemos que uma condição necessária para que o sistema seja SPI é que o
determinante da matriz dos coeficientes seja zero, isto é, 𝐷= 0.

Observação: Não se trata de uma condição suficiente, pois 𝐷= 0 não implica que o sistema seja SPI, pois
ele pode ser SI. Em outras palavras:

𝑆𝑃𝐼→𝐷= 0

𝐷= 0 →𝑆𝑃𝐼 𝑜𝑢 𝑆𝐼

Fazendo 𝐷= 0, temos:

|𝑎
1
1
𝑎| = 0

[𝑎× 𝑎] −[1 × 1] = 0

𝑎2 −1 = 0

𝑎2 = 1

𝒂= ±𝟏

Note, portanto, que a princípio temos duas possibilidades: 𝒂= 𝟏 e 𝒂= −𝟏.

−

Fazendo 𝒂= 𝟏, temos o seguinte sistema:

{ 𝑥+ 𝑦= 1

𝑥+ 𝑦= −1

Veja que esse sistema é impossível, pois 𝑥+ 𝑦 não pode ser igual a 1 e também igual a −1. Escalonando o
sistema, ficamos com:

~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 {
𝑥+ 𝑦= 3
𝟎𝒙+ 𝟎𝒚= −𝟐

−

Fazendo 𝒂= −𝟏, temos o seguinte sistema:

{−𝑥+ 𝑦= 1

𝑥−𝑦= −1

Escalonando o sistema, ficamos com:

~
𝐿2←𝟏𝐿2+𝟏𝐿1 { −𝑥+ 𝑦= 1

𝟎𝒙+ 𝟎𝒚= 𝟎 ~ {−𝑥+ 𝑦= 1

Trata-se de um sistema escalonado cujo número de equações (1) é menor do que número de incógnitas
(2). Logo, temos um sistema possível e indeterminado (SPI).

−

Portanto, conclui-se que o sistema admite infinitas soluções para apenas um valor do parâmetro 𝑎.

Gabarito: Letra B.

(CEBRASPE/IFF/2018) Considere o sistema S de m equações lineares e n incógnitas, mostrado abaixo.

𝒂𝟏𝟏𝒙𝟏+ 𝒂𝟏𝟐𝒙𝟐+ … + 𝒂𝟏𝒏𝒙𝒏= 𝒃𝟏

𝒂𝟐𝟏𝒙𝟏+ 𝒂𝟐𝟐𝒙𝟐+ … + 𝒂𝟐𝒏𝒙𝒏= 𝒃𝟐

𝒂𝒎𝟏𝒙𝟏+ 𝒂𝒎𝟐𝒙𝟐+ … + 𝒂𝒎𝒏𝒙𝒏= 𝒃𝒎

Nesse sistema, 𝒙𝟏, 𝒙𝟐, … , 𝒙𝒏 são as incógnitas, os coeficientes 𝒂𝐢𝐣 e os 𝒃𝒊 são números reais, para
𝟏 ≤𝒊≤𝒎 e 𝟏 ≤ 𝒋 ≤ 𝒏. A respeito das propriedades e das soluções do sistema S, assinale a opção
correta.

a) Considere que 𝑚 = 𝑛 e que 𝐴 = (𝑎𝑖𝑗) — a matriz dos coeficientes de S — seja tal que 𝑑𝑒𝑡(𝐴) = 0.
Nesse caso, S não possui solução.

b) Se 𝛼= (𝛼1, 𝛼2, … , 𝛼𝑛) e 𝛽= (𝛽1 , 𝛽2, … , 𝛽𝑛) são soluções de S e se r é um número real qualquer, então
𝛼 + 𝛽 = (𝛼1 + 𝛽1, 𝛼2 + 𝛽2, … , 𝛼𝑛+ 𝛽𝑛) e 𝑟𝛼 = (𝑟𝛼1, 𝑟𝛼2, … , 𝑟𝛼𝑛) são também soluções de S.

c) Se 𝑚 &lt; 𝑛, então S possui infinitas soluções.

d) Se 𝑚 = 𝑛 e se o sistema homogêneo associado a S — isto é, o sistema com os mesmos coeficientes 𝑎𝑖𝑗
apenas considerando todos os 𝑏𝑖= 0 — tiver solução única, então o sistema S também terá solução única.

e) Se 𝑚 &gt; 𝑛, então S não possui solução.

Comentários:

Veja que a questão apresenta um sistema linear genérico com 𝒎 equações e 𝒏 incógnitas. Vamos comentar
cada alternativa.

a) Considere que 𝒎 = 𝒏 e que 𝑨 = (𝒂𝒊𝒋) — a matriz dos coeficientes de S — seja tal que 𝒅𝒆𝒕(𝑨) = 𝟎.
Nesse caso, S não possui solução. ERRADO.

A alternativa afirma que, se o número de equações for igual ao número de incógnitas (𝑚= 𝑛) e se o
determinante da matriz dos coeficientes for zero (det 𝐴= 0), então o sistema não possui soluções.

Essa afirmativa está errada porque, de acordo com o Teorema de Cramer, se 𝐷= 0, isto é, se det 𝐴= 0,
podemos ter tanto um sistema possível indeterminado (SPI) quanto um sistema impossível (SI). No
primeiro caso, temos infinitas soluções.

b) Se 𝜶= (𝜶𝟏, 𝜶𝟐, … , 𝜶𝒏) e 𝜷= (𝜷𝟏 , 𝜷𝟐, … , 𝜷𝒏) são soluções de S e se r é um número real qualquer,
então 𝜶 + 𝜷 = (𝜶𝟏+ 𝜷𝟏, 𝜶𝟐+ 𝜷𝟐, … , 𝜶𝒏+ 𝜷𝒏) e 𝒓𝜶 = (𝒓𝜶𝟏, 𝒓𝜶𝟐, … , 𝒓𝜶𝒏) são também soluções de

### S. ERRADO.

A alternativa afirma três coisas sobre o sistema linear genérico apresentado:

- O sistema admite ao menos duas soluções e, portanto, admite infinitas soluções. Isso significa que
estamos diante de um Sistema Possível Indeterminado (SPI).

- A soma das duas soluções de um SPI gera necessariamente uma nova solução do sistema; e

- A multiplicação de uma solução do SPI por uma constante 𝒓 qualquer também é solução do sistema.

Para mostrar que as afirmações estão erradas, vamos mostrar um contraexemplo. Considere o seguinte
Sistema Possível e Indeterminado (SPI) de uma única equação:

{𝑥1 + 𝑥2 = 1

Note que (𝑥1, 𝑥2) = (1, 0) é solução do sistema e que (𝑥1, 𝑥2) = (0, 1) também é. Note, porém, que:

-
(1 + 0, 0 + 1) = (1, 1) não é solução do sistema, pois 1 + 1 ≠1; e
-
5. (1, 0) = (5, 0) não é solução do sistema, pois 5 + 0 ≠1.

A alternativa, portanto, está ERRADA.

c) Se 𝒎 &lt; 𝒏, então S possui infinitas soluções. ERRADO.

Vimos que a questão apresenta um sistema linear genérico com 𝒎 equações e 𝒏 incógnitas.

A alternativa afirma que se o número de equações é menor do que o número de incógnitas (𝑚&lt; 𝑛), então
o sistema apresenta infinitas soluções.

Trata-se de uma afirmação ERRADA, pois o sistema pode ter um número de equações menor do que o
número de incógnitas e ser um Sistema Impossível (SI) (sem solução).

Veja o seguinte contraexemplo:

{
𝑥+ 𝑦+ 𝑧= 1
2𝑥+ 2𝑦+ 2𝑧= 3

Note que o número de equações é menor do que o número de incógnitas e o sistema é impossível. Isso
porque, ao multiplicar a primeira equação por 2, obtém-se:

2𝑥+ 2𝑦+ 2𝑧= 2

Essa equação contradiz a segunda equação do sistema, pois 2𝑥+ 2𝑦+ 2𝑧 não pode ser igual a 2 e a 3 ao
mesmo tempo.

d) Se 𝒎 = 𝒏 e se o sistema homogêneo associado a S — isto é, o sistema com os mesmos coeficientes 𝒂𝒊𝒋
apenas considerando todos os 𝒃𝒊= 𝟎 — tiver solução única, então o sistema S também terá solução única.

### CERTO.

Se 𝑚= 𝑛, o sistema tem o mesmo número de equações e de incógnitas. Nesse caso, a matriz dos
coeficientes (𝑨) é quadrada.

O sistema original 𝑆 pode ser descrito na forma matricial por:

𝑨𝑿= 𝑩

O sistema homogêneo associado é dado por:

𝑨𝑿= 𝑶

Em que 𝑂 é a matriz nula de ordem 𝑛× 1.

Se o sistema homogêneo associado tiver solução única, esse sistema homogêneo é um Sistema Possível e
Determinado (SPD). Pelo Teorema de Cramer, temos que 𝑫= 𝐝𝐞𝐭𝑨≠𝟎.

Como a matriz dos coeficientes (𝑨) é a mesma para o sistema original, esse sistema também será possível
e determinado (SPD), pois 𝑫= 𝐝𝐞𝐭𝑨≠𝟎. Logo, o sistema original também terá solução única.

e) Se 𝒎 &gt; 𝒏, então S não possui solução. ERRADO.

Vimos que a questão apresenta um sistema linear genérico com 𝒎 equações e 𝒏 incógnitas.

A alternativa afirma que se o número de equações é maior do que o número de incógnitas (𝑚&gt; 𝑛), então
o sistema não possui solução, ou seja, o sistema é impossível (SI).

Trata-se de uma afirmação ERRADA, pois nesse caso podemos ter um sistema possível e determinado (SPD),
um sistema possível e indeterminado (SPI) ou até mesmo um sistema impossível (SI).

Veja o seguinte contraexemplo:

{

𝑥+ 𝑦= 1
2𝑥+ 2𝑦= 2
3𝑥+ 3𝑦= 3

Note que temos um número de equações (3) maior do que o número de incógnitas (2). Note, porém, que ao
escalonar o sistema ficamos com:

{

𝑥+ 𝑦= 1
0𝑥+ 0𝑦= 0
0𝑥+ 0𝑦= 0
~ {𝑥+ 𝑦= 1

Note, portanto, que esse sistema é possível e indeterminado (SPI), admitindo infinitas soluções.

Gabarito: Letra D.

(CEBRASPE/SEDUC AL/2018) Julgue o item que se segue, relativos a matrizes e sistemas lineares.

Um sistema linear escrito na forma matricial 𝑷𝑿 = − 𝑿, em que 𝑷 é uma matriz 𝒏 × 𝒏 de coeficientes
constantes e 𝑿 é a matriz das incógnitas, 𝒏 × 𝟏, tem solução única se, e somente se, a matriz 𝑷 + 𝑰 for
inversível (𝑰 é a matriz identidade 𝒏 × 𝒏).

Comentários:

Sabe-se que um sistema linear pode ser escrito na forma matricial 𝑨𝑿= 𝑩, sendo:

- 𝑨: Matriz dos coeficientes ou matriz incompleta do sistema;

- 𝑿: Matriz das incógnitas;

- 𝑩: Matriz dos termos independentes.

O problema propõe a forma matricial 𝑃𝑋= −𝑋. Vamos organizar essa equação matricial:

𝑃𝑋= −𝑋

𝑃𝑋+ 𝑋= 𝑂

Colocando a matriz 𝑋 em evidência:

(𝑷+ 𝑰)𝑿= 𝑶

Comparando a expressão acima com a forma tradicional 𝑨𝑿= 𝑩, temos que:

- (𝑷+ 𝑰) é a matriz dos coeficientes;

- 𝑿 é a matriz das incógnitas;

- 𝑶, que é a matriz nula, é a matriz dos termos independentes.

Para o sistema ter solução única, ele deve ser um sistema possível e determinado (SPD). Sabemos, pelo
Teorema de Cramer, que isso ocorre quando o determinante da matriz dos coeficientes é diferente de zero.
Isso significa que 𝐝𝐞𝐭(𝑷+ 𝑰) é diferente de zero.

Sabemos que uma matriz é inversível se, e somente se, essa matriz tem determinante diferente de zero.
Logo, a matriz 𝑷+ 𝑰 deve ser inversível.

Gabarito: CERTO.

(VUNESP/PM SP/2018) O sistema linear {

𝒙−𝟑𝒚+ 𝟒𝒛= −𝟒
𝟑𝒙−𝟕𝒚+ 𝟕𝒛= −𝟖
−𝟒𝒙+ 𝟔𝒚−𝒛= 𝜶−𝟏

terá solução somente quando o valor

de 𝜶 for igual a

a) 2.

b) 3.

c) 4.

d) 5.

e) 6.

Comentários:

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

1
−3
4
−4
3
−7
7
−8
−4
6
−1
𝛼−1

]
~
𝐿2←𝟏𝐿2+(−𝟑)𝐿1 [

1
−3
4
−4
0
2
−5
4
−4
6
−1
𝛼−1

]
~
𝐿3←𝟏𝐿3+𝟒𝐿1

[

1
−3
4
−4
0
2
−5
4
0
−6
15
𝛼−17

]
~
𝐿3←𝟏𝐿3+𝟑𝐿2 [

1
−3
4
−4
0
2
−5
4
𝟎
𝟎
𝟎
𝜶−𝟓

]

---

Note que, se 𝛼−5 for diferente de zero, isto é, se 𝛼≠5, a última equação do sistema linear ficará da
seguinte forma:

𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝜶−𝟓≠0

Nesse caso, teríamos um sistema impossível (SI), sem solução.

---

Para o caso em que 𝜶= 𝟓, a última equação do sistema fica assim:

𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝟎

Nesse caso, podemos eliminar a equação do sistema.

[

−3
−4
−5

] ~ [1
−3
−4
−5
4 ]

Explicitando as variáveis, o sistema linear original, para 𝜶= 𝟓, equivale a:

{𝑥−3𝑦+ 4𝑧= −4

𝑥 2𝑦−5𝑧= 4

Trata-se de um sistema escalonado cujo número de equações (2) é menor do que o número de incógnitas
(3). Logo, temos um sistema possível e indeterminado (SPI), que admite infinitas soluções.

---

Portanto, o sistema linear terá solução (infinitas soluções) quando 𝜶= 𝟓.

Gabarito: Letra D.

(CESGRANRIO/PETROBRAS/2018) Considere o sistema de equações lineares nas variáveis reais 𝒙 e 𝒚:

{
𝒌𝟐𝒙+ 𝒚= 𝟑
𝒙−𝒌𝒚= 𝒎+ 𝟒, no qual 𝒌 e 𝒎 são reais.

Sabe-se que existem números reais 𝒂 e 𝒃, com 𝒂≠𝒃, tais que os pares ordenados (𝒂, 𝒃) e (𝒃, 𝒂) são
soluções do sistema dado.

Dessa forma, 𝒌 e 𝒎 são, necessariamente, tais que

a) 𝑘 = 1, 𝑚 = 1

b) 𝑘 ≠ 1, 𝑚 = 1

c) 𝑘 = −1, 𝑚 = −1

d) 𝑘 ≠ −1, 𝑚 = −1

e) 𝑘 ≠ −1, 𝑚 ≠ −1

Comentários:

Note que o enunciado afirma que o sistema apresenta duas soluções distintas. Isso significa que o sistema
possui infinitas soluções, ou seja, trata-se de um sistema possível e indeterminado (SPI).

Pelo Teorema de Cramer, sabemos que uma condição necessária para que o sistema seja SPI é que o
determinante da matriz dos coeficientes seja zero, isto é, 𝐷= 0.

Observação: Não se trata de uma condição suficiente, pois 𝑫= 𝟎 não implica que o sistema seja SPI, pois
ele pode ser SI. Em outras palavras:

𝑆𝑃𝐼→𝐷= 0

𝐷= 0 →𝑆𝑃𝐼 𝑜𝑢 𝑆𝐼

Fazendo 𝐷= 0, temos:

|𝑘2
1
1
−𝑘| = 0

[𝑘2 × (−𝑘)] −[1 × 1] = 0

−𝑘3 −1 = 0

𝑘3 = −1

𝒌= −𝟏

Agora que temos 𝑘= −1, o sistema linear fica assim:

{
𝑥+ 𝑦= 3
𝑥+ 𝑦= 𝑚+ 4

Escalonando o sistema, isto é, subtraindo a segunda linha da primeira, ficamos com:

~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 {
𝑥+ 𝑦= 3
0𝑥+ 0𝑦= 𝒎+ 𝟏

Note que:

- Se (𝑚+ 1) for diferente de zero, isto é, se 𝒎≠−𝟏, teremos um sistema impossível (SI), pois haverá
uma equação da forma 𝟎𝒙+ 𝟎𝒚= (𝒎+ 𝟏) com (𝒎+ 𝟏) ≠𝟎.
- Por outro lado, se 𝒎= −𝟏, ficamos com:

{ 𝑥+ 𝑦= 3

0𝑥+ 0𝑦= 𝟎 ~ {𝑥+ 𝑦= 3

Trata-se de um sistema escalonado cujo número de equações (1) é menor do que o número de
incógnitas (2). Logo, temos um sistema possível e indeterminado (SPI).

==5460==

Portanto, para que o sistema seja SPI, devemos ter 𝒌= −𝟏 e 𝒎= −𝟏.

Gabarito: Letra C.

(CEBRASPE/Pref. São Luís/2017) Um sistema linear de 4 equações e 4 incógnitas pode ser escrito na
forma matricial como 𝑨𝑿 = 𝑩, em que 𝑨 é a matriz, de ordem 𝟒× 𝟒, dos coeficientes da equação; 𝑿 é a
matriz coluna, de ordem 𝟒× 𝟏, das incógnitas da equação e 𝑩 é a matriz coluna, de ordem 𝟒× 𝟏, dos
termos independentes da equação.

Com referência a essas informações, assinale a opção correta.

a) Se 𝑋1, 𝑋2 e 𝑋3 forem matrizes, de ordem 4 × 1, que são soluções distintas da referida equação matricial,
então o determinante de 𝐴 será igual a zero.

b) Se a matriz 𝐴 tiver exatamente duas linhas iguais, então o sistema terá exatamente duas soluções distintas.

c) Se todos os elementos da matriz 𝐵 forem iguais a zero e o determinante de 𝐴 for igual a zero, então o
sistema não terá solução.

d) Se uma matriz 𝐶, de ordem 4 × 1, possuir dois elementos positivos e dois negativos e for tal que 𝐴𝐶 =
𝐵, então o determinante de 𝐴 será diferente de zero.

e) Se o determinante da matriz 𝐴 for igual a zero, então 𝐴 terá pelo menos duas linhas iguais.

Comentários:

Vamos avaliar todas as alternativas da questão.

a) Se 𝑿𝟏, 𝑿𝟐 e 𝑿𝟑 forem matrizes, de ordem 𝟒× 𝟏, que são soluções distintas da referida equação
matricial, então o determinante de 𝑨 será igual a zero. CERTO.

Se o sistema linear 𝐴𝑋= 𝐵 apresenta mais de uma solução, então ele apresenta infinitas soluções e é
classificado como Sistema Possível e Indeterminado (SPI).

Sabemos, pelo Teorema de Cramer, que este é um caso em que 𝐷= 0, isto é, det 𝐴= 0. O gabarito,
portanto, é letra A.

b) Se a matriz 𝑨 tiver exatamente duas linhas iguais, então o sistema terá exatamente duas soluções
distintas. ERRADO.

Um sistema linear pode apresentar solução única, infinitas soluções ou nenhuma solução.

c) Se todos os elementos da matriz 𝑩 forem iguais a zero e o determinante de 𝑨 for igual a zero, então o
sistema não terá solução. ERRADO.

Se todos os elementos da matriz B forem iguais a zero, temos um Sistema Linear Homogêneo. Nesse caso,
se det 𝐴= 0, isto é, 𝐷= 0, o sistema apresenta infinitas soluções.

d) Se uma matriz 𝑪, de ordem 𝟒× 𝟏, possuir dois elementos positivos e dois negativos e for tal que 𝑨𝑪 =
𝑩, então o determinante de 𝑨 será diferente de zero. ERRADO.

A alternativa apresenta uma solução para o sistema 𝐴𝑋= 𝐵, dada pela matriz 𝑪. O fato dessa solução
apresentar dois elementos positivos e dois elementos negativos em nada influencia o determinante da
matriz 𝑨. Como há a garantia de que temos uma solução, esse sistema pode ser:

- Possível e Determinado (SPD): apresenta solução única. Nesse caso, 𝐷= det 𝐴≠0;
- Possível e Indeterminado (SPI): apresenta infinitas soluções, dentre elas a matriz 𝐶. Nesse caso,
𝐷= det 𝐴= 0.

Como o sistema pode ser SPI, então não necessariamente o determinante de 𝐴 será diferente de zero.

e) Se o determinante da matriz 𝑨 for igual a zero, então 𝑨 terá pelo menos duas linhas iguais. ERRADO.

Da aula de determinantes, sabemos que existem muitas formas de uma matriz 𝑨 ter determinante zero.
Esse determinante zero pode ocorrer, por exemplo, por conta de filas iguais (linhas ou colunas), de filas
proporcionais ou também de filas que são combinações lineares de outras.

Logo, é errado dizer que se o determinante da matriz 𝐴 for igual a zero, necessariamente há linhas iguais.

Gabarito: Letra A.

(FGV/Pref. SP/2016) Em uma aula, o professor ofereceu a seus alunos o seguinte problema:

O salário de Paulo é depositado em um banco todo mês. Após juntar o dobro do seu salário e depois de
pagar a mensalidade da faculdade ficou com 5 mil reais. Dois meses depois, ele tinha em sua conta o valor
do seu salário e mais o valor de 3 mensalidades da faculdade, o que totalizou 6 mil reais. Paulo constatou
ainda que se somasse o dobro de seu salário ao valor da mensalidade, resultaria 7 mil reais.

Encontre um modelo que represente a situação: nomeie 𝒙 o valor do salário de Paulo e 𝒚 o valor da
mensalidade da faculdade.

Foram três as soluções encontradas por seus alunos:

- A primeira exibia o sistema de equações {𝟐𝒙−𝒚= 𝟓
𝒙+ 𝟑𝒚= 𝟔 como modelo para o problema.

- A segunda, exibia o sistema de equações {
𝟐𝒙−𝒚= 𝟓
𝒙+ 𝟑𝒚= 𝟔
𝟐𝒙+ 𝒚= 𝟕

como modelo para o problema.

- A terceira solução encontrada exibia a equação 𝒙+ 𝟑(𝟐𝒙−𝟓) = 𝟔 como modelo para o cálculo do
salário.

Todos encontraram como solução para o salário 3 mil reais e para a mensalidade da faculdade, mil reais.

Com base no caso apresentado, assinale a afirmativa correta.

a)Os valores do salário e da mensalidade encontrados não estão corretos.

b) O modelo correto para o problema foi encontrado apenas na primeira solução, já que são equações com
duas variáveis.

c) O modelo correto para o problema foi encontrado apenas na segunda solução, já que são equações com
duas variáveis.

d) O modelo correto para o cálculo da mensalidade foi encontrado apenas na terceira solução, pois essa é
uma equação com apenas uma variável.

e) Todos os modelos encontrados estão corretos, embora o terceiro modelo encontre apenas o valor do
salário, já que a equação tem apenas uma variável.

Comentários:

Devemos considerar que o salário de Paulo é dado por 𝒙 em milhares de reais, bem como o valor da
mensalidade deve ser considerado 𝒚 em milhares de reais. Feita essa consideração, vamos transformar os
dados do problema em linguagem matemática.

"Após juntar o dobro do seu salário e depois de pagar a mensalidade da faculdade ficou com 5 mil reais."

2𝑥−𝑦= 5 (Primeira equação)

"...ele tinha em sua conta o valor do seu salário e mais o valor de 3 mensalidades da faculdade, o que

totalizou 6 mil reais"

𝑥+ 3𝑦= 6 (Segunda equação)

"Paulo constatou ainda que se somasse o dobro de seu salário ao valor da mensalidade, resultaria 7 mil

reais"

2𝑥+ 𝑦= 7 (Terceira equação)

−

Note que o primeiro aluno apresentou as duas primeiras equações como modelo do problema:

{2𝑥−𝑦= 5

𝑥+ 3𝑦= 6

Escalonando o sistema, temos:

[2
−1
5
1
3
6]
~
𝐿2←𝟏𝐿2+(−𝟏

𝟐)𝐿1

[

𝟐
−𝟏
𝟓

𝟎
𝟕
𝟐

𝟕
𝟐

]

Trata-se de um sistema possível e determinado (SPD), pois temos o mesmo número de equações e
incógnitas no sistema escalonado. Poderíamos determinar os valores de 𝑥 e de 𝑦, porém isso não é
necessário para a resolução do problema.

−

O segundo aluno, por sua vez, apresentou as três equações:

{

2𝑥−𝑦= 5
𝑥+ 3𝑦= 6
2𝑥+ 𝑦= 7

Escalonando o sistema, temos:

[

2
−1
5
1
3
6
2
1
7
]
~
𝐿2←𝟏𝐿2+(−𝟏

𝟐)𝐿1

[

2
−1
5

0
7
2
7
2
2
1
7

]
~
𝐿3←𝟏𝐿3+(−𝟏)𝐿1 [

2
−1
5

0
7
2
7
2
0
2
2

]

~
𝐿3←𝟏𝐿3+(−𝟒

𝟕,)𝐿2

[

2
−1
5

0
7
2
7
2
𝟎
𝟎
𝟎

] ~ [

𝟐
−𝟏
𝟓

𝟎
𝟕
𝟐

𝟕
𝟐

]

Veja, portanto, que os sistemas lineares encontrados pelo primeiro e pelo segundo aluno são equivalentes,
pois eles são equivalentes ao mesmo sistema escalonado. Ambos são sistemas possíveis e determinados
(SPD), pois temos o mesmo número de equações e incógnitas no sistema escalonado.

−

O terceiro aluno, por sua vez, apresentou apenas uma equação:

𝑥+ 3(2𝑥−5) = 6

Basicamente, esse aluno isolou a variável 𝑦 na primeira equação (2𝑥−𝑦= 5), obtendo 𝒚= 𝟐𝒙−𝟓. Em
seguida, substituiu 𝒚 na segunda equação (𝑥+ 3𝑦= 6):

𝑥+ 3𝒚= 6

𝑥+ 3(𝟐𝒙−𝟓) = 6

−

Podemos tirar as seguintes conclusões:

- O primeiro modelo está correto, pois representa duas equações do problema, gerando um sistema
SPD em que se pode obter 𝑥 e 𝑦;
- O segundo modelo está correto, pois representa três equações do problema cujo sistema escalonado
apresenta 2 equações e 2 incógnitas, gerando um sistema SPD equivalente ao primeiro em que se
pode obter os mesmos valores para 𝒙 e 𝒚;
- O terceiro modelo está correto, pois se baseia em duas equações do problema e utiliza o método da
substituição para encontrar o valor do salário (𝑥).

Com base nessas conclusões, temos a alternativa E como correta:

"Todos os modelos encontrados estão corretos, embora o terceiro modelo encontre apenas o valor do

salário, já que a equação tem apenas uma variável."

Gabarito: Letra E.

(CEBRASPE/SEDUC AL/2013/Adaptada) O sistema {

𝟓𝒙+ 𝟓𝒚+ 𝟓𝒛= 𝟑. 𝟎𝟎𝟎
𝟓𝒙+ 𝟒𝒚+ 𝟒𝒛= 𝟏. 𝟎𝟔𝟎
𝟔𝒙+ 𝟓𝒚 + 𝟓𝒛 = 𝟏. 𝟐𝟔𝟎

é impossível.

Comentários:

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

5
5
5
3000
5
4
4
1060
6
5
5
1260
]
~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 [

5
5
5
3000
0
−1
−1
−1940
6
5
5
1260
]
~
𝐿3←𝟏𝐿3+(−𝟔

𝟓)𝐿1

[

5
5
5
3000
0
−1
−1
−1940
0
−1
−1
−2340

]

~
𝐿3←𝟏𝐿3+(−𝟏)𝐿2 [

5
5
5
3000
0
−1
−1
−1940
𝟎
𝟎
𝟎
−𝟒𝟎𝟎

]

A última equação do sistema escalonado, dada por 𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= −𝟒𝟎𝟎, indica que estamos diante de
um sistema impossível (SI).

Gabarito: CERTO.

### (CEBRASPE/SEDUC

AL/2013/Adaptada)
O
sistema
{

𝟓𝒙+ 𝟓𝒚+ 𝟓𝒛= 𝟑𝟎𝟎𝟎
𝟓𝒙+ 𝟒𝒚+ 𝟒𝒛= 𝟏. 𝟎𝟔𝟎
𝟒𝒙+ 𝟓𝒚+ 𝟐𝒛= 𝟏. 𝟏𝟒𝟎

é
possível
e

indeterminado.

Comentários:

Vamos escalonar o sistema fazendo uso da matriz completa do sistema.

[

5
5
5
3000
5
4
4
1060
4
5
2
1140
]
~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 [

5
5
5
3000
0
−1
−1
−1940
4
5
2
1140
]
~
𝐿3←𝟏𝐿3+(−𝟒

𝟓)𝐿1

[

5
5
5
3000
0
−1
−1
−1940
0
1
−2
−1260

]

~
𝐿3←𝟏𝐿3+𝟏𝐿2 [

5
5
5
3000
0
−1
−1
−1940
0
0
−3
−3200

]

Explicitando as variáveis, o sistema linear original equivale a:

{

5𝑥+ 5𝑦+ 5𝑧= 3000
−𝑦−𝑧= 1
−3𝑧= −3200

Veja que o sistema acima é escalonado, pois o número de incógnitas diminui de equação para equação.

Trata-se de um sistema escalonado cujo número de equações (3) é igual ao número de incógnitas (3).
Logo, temos um sistema possível e determinado (SPD).

Gabarito: ERRADO.

(CESGRANRIO/PETROBRAS/2012) Um professor editou sua prova bimestral em um processador de
textos antigo e salvou em um pen drive para imprimir na escola. Devido à incompatibilidade entre os
processadores de texto, alguns caracteres de um sistema linear, cujas variáveis eram 𝒙, 𝒚 e 𝒛, ficaram
irreconhecíveis na impressão, conforme ilustrado a seguir:

{

𝒙+ 𝒚+ □𝒛= 𝟏

𝒙+ 𝟐𝒚+ 𝒛= 𝟐
𝟐𝒙+ 𝟓𝒚−𝟑𝒛=△

Os alunos que iriam resolver a prova bimestral perguntaram ao professor quais eram os valores de □ e △,
mas ele não soube dizer. Disse apenas que o sistema possuía, pelo menos, duas soluções distintas.

#### Se a afirmação do professor é correta, qual a soma dos valores de □ e △ ?

a) 11

b) 8

c) 6

d) 5

e) 4

Comentários:

Para facilitar as contas, vamos substituir o quadrado pela constante "𝑞" e o triângulo pela constante "𝑡".
Ficamos com o seguinte sistema de variáveis 𝑥, 𝑦 e 𝑧:

{

𝑥+ 𝑦+ 𝑞𝑧= 1
𝑥+ 2𝑦+ 𝑧= 2
2𝑥+ 5𝑦−3𝑧= 𝑡

O enunciado afirma que o sistema possuía, pelo menos, duas soluções distintas. Isso significa que o sistema
admite infinitas soluções, ou seja, estamos diante de um sistema possível e indeterminado (SPI).

Pelo Teorema de Cramer, sabemos que uma condição necessária para que o sistema seja SPI é que o
determinante da matriz dos coeficientes seja zero, isto é, 𝐷= 0.

Observação: Não se trata de uma condição suficiente, pois 𝐷= 0 não implica que o sistema seja SPI, pois
ele pode ser SI. Em outras palavras:

𝑆𝑃𝐼→𝐷= 0

𝐷= 0 →𝑆𝑃𝐼 𝑜𝑢 𝑆𝐼

Temos que 𝐷= |

1
1
𝑞
1
2
1
2
5
−3

|. Vamos aplicar a regra de Sarrus:

|

1
1
𝑞
1
2
1
2
5
−3

|

1
1
1
2
2
5

Parte Negativa Parte Positiva

𝐷= [1.2. (−3) + 1.1.2 + 𝑞. 1.5] −[𝑞. 2.2 + 1.1.5 + 1.1. (−3)]

𝐷= [5𝑞−4] −[4𝑞+ 2]

𝐷= 𝑞−6

Para que tenhamos um SPI, é necessário que 𝐷= 0. Logo:

𝑞−6 = 0

𝒒= 𝟔

Logo, temos o seguinte sistema:

{

𝑥+ 𝑦+ 𝟔𝑧= 1
𝑥+ 2𝑦+ 𝑧= 2
2𝑥+ 5𝑦−3𝑧= 𝑡

Vamos escaloná-lo a partir da matriz completa do sistema.

[

1
1
6
1
1
2
1
2
2
5
−3
𝑡

]
~
𝐿2←𝟏𝐿2+(−𝟏)𝐿1 [

1
1
6
1
0
1
−5
1
2
5
−3
𝑡

]
~
𝐿3←𝟏𝐿3+(−𝟐)𝐿1 [

1
1
6
1
0
1
−5
1
0
3
−15
𝑡−2

]

~
𝐿3←𝟏𝐿3+(−𝟑)𝐿2 [

1
1
6
1
0
1
−5
1
𝟎
𝟎
𝟎
𝒕−𝟓

]

Para que o sistema seja possível e indeterminado, a terceira equação do sistema escalonado deve ser da
seguinte forma:

𝟎𝒙+ 𝟎𝒚+ 𝟎𝒛= 𝟎

Portanto, devemos ter:

𝒕−𝟓= 𝟎

𝒕= 𝟓

Portanto, a soma dos valores de □ e △ é:

𝑞+ 𝑡= 6 + 5 = 11

Gabarito: Letra A.

(CESGRANRIO/PETROBRAS/2011) Com relação ao sistema de variáveis reais 𝒙 e 𝒚, {𝒎𝒙+ 𝒚= 𝟑

𝒙−𝒚= 𝒏, no

qual 𝒎 e 𝒏 são números reais, tem-se que

a) se 𝑚 = – 1 e 𝑛 = – 3, qualquer par ordenado (𝑥, 𝑦), 𝑥 e 𝑦 reais, é solução

b) não tem solução se 𝑚 = – 1 e 𝑛≠ – 3

c) tem sempre solução quaisquer que sejam 𝑚 e 𝑛 reais

d) tem duas soluções se 𝑚≠ – 1

e) (1,1) é solução se 𝑚= 𝑛

Comentários:

Pelo Teorema de Cramer, pode-se obter algumas conclusões a partir do determinante da matriz dos
coeficientes (𝐷):

Temos que:

𝐷= |𝑚
1
1
−1|

𝐷= [𝑚× (−1)] −[1 × 1]

𝑫= −𝒎−𝟏

Para 𝑫= 𝟎, podemos ter tanto um SPI quanto um SI.

𝐷= 0

−𝑚−1 = 0

𝒎= −𝟏

Portanto, pelo Teorema de Cramer, temos as seguintes conclusões:

- 𝒎= −𝟏 → Sistema possível e indeterminado (SPI) ou Sistema Impossível (SI).
- Quando, 𝐷≠0, isto é, 𝒎≠−𝟏 → Sistema Possível e Determinado (SPD).

Para 𝒎= −𝟏, ficamos com o seguinte sistema:

{−𝑥+ 𝑦= 3

𝑥−𝑦= 𝑛

Escalonando o sistema, temos:

~
𝐿2←𝟏𝐿2+𝟏𝐿1 {
−𝑥+ 𝑦= 3
0𝑥+ 0𝑦= 𝒏+ 𝟑

Veja que:

- Se (𝑛+ 3) for diferente de zero, isto é, se 𝒏≠−𝟑, teremos um sistema impossível (SI), pois haverá
uma equação da forma 𝟎𝒙+ 𝟎𝒚= (𝒏+ 𝟑) com (𝑛+ 3) ≠0.
- Por outro lado, se 𝒏= −𝟑, ficamos com:

{ −𝑥+ 𝑦= 3

0𝑥+ 0𝑦= 𝟎~ {−𝑥+ 𝑦= 3

Trata-se de um sistema escalonado cujo número de equações (1) é menor do que o número de
incógnitas (2). Logo, temos um sistema possível e indeterminado (SPI).

Em resumo, temos as seguintes conclusões:

- 𝑚≠−1 → Sistema possível e determinado (SPD) → Solução única.
-
𝑚= −1 e 𝑛= −3 → Sistema Possível e Indeterminado (SPI) → Infinitas soluções.
-
𝑚= −1 e 𝑛≠−3 → Sistema Impossível (SI) → Sem solução.

Vamos analisar as alternativas:

a) se 𝒎 = – 𝟏 e 𝒏 = – 𝟑, qualquer par ordenado (𝒙, 𝒚), 𝒙 e 𝒚 reais, é solução. ERRADO.

Se 𝑚= −1 e 𝑛= −3, temos um sistema possível e indeterminado (SPI), que admite infinitas soluções. Isso
não significa dizer que qualquer par ordenado é solução. Por exemplo, o par (𝑥, 𝑦) = (0, 0) não é solução.

b) não tem solução se 𝒎 = – 𝟏 e 𝒏≠ – 𝟑. CERTO.

Se 𝑚= −1 e 𝑛≠−3, o sistema é impossível, isto é, não admite solução. O gabarito, portanto, é letra B.

c) tem sempre solução quaisquer que sejam 𝒎 e 𝒏 reais. ERRADO.

Conforme a alternativa B, sistema não admite solução para 𝑚= −1 e 𝑛≠−3.

d) tem duas soluções se 𝒎≠ – 𝟏. ERRADO.

Se 𝑚≠−1, o sistema é possível e determinado (SPD) e, portanto, admite solução única.

e) (𝟏, 𝟏) é solução se 𝒎= 𝒏. ERRADO.

Não basta que 𝑚 seja igual a 𝑛 para que (𝑥, 𝑦) = (1,1) seja solução. Fazendo 𝑚= 𝑛, temos seguinte
sistema:

{𝒏𝑥+ 𝑦= 3

𝑥−𝑦= 𝒏

Note que (𝑥, 𝑦) = (1,1) não torna verdadeira as duas equações do sistema:

{𝒏+ 1 = 3

1 −1 = 𝒏 →{𝒏= 2
0 = 𝒏

Gabarito: Letra B.

## LISTA DE QUESTÕES – FGV

### Solução de Sistemas Lineares

(FGV/MPE SC/2022) Sabe-se que { 𝟐𝒙−𝒚= 𝟗

𝟑𝒙−𝟐𝒚= 𝟓 .

O valor de 𝒙 + 𝒚 é:

a) 16;

b) 18;

c) 24;

d) 26;

e) 30.

(FGV/SEFAZ AM/2022) 𝒙 e 𝒚 são tais que 𝟒𝒙+ 𝟓𝒚= 𝟖𝟎 e 𝟔𝒙+ 𝟕𝒚= 𝟏𝟏𝟔. O valor de 𝟐𝒙+ 𝟑𝒚 é:

a) 38

b) 40

c) 42

d) 44

e) 46

(FGV/CGU/2022) Considere o sistema linear { 𝒙−𝟐𝒚+ 𝒛= 𝟒

−𝟑𝒙+ 𝒚+ 𝟐𝒛= 𝟑.

Sabe-se que 𝒙+ 𝒚&gt; 𝟏𝟎𝟎.

O menor valor inteiro de 𝒛 que satisfaz as condições dadas é:

a) 52;

b) 53;

c) 54;

d) 55;

e) 56.

(FGV/MPE SC/2022) No sistema

{

𝟑𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟏𝟔

𝒂+ 𝟑𝒃+ 𝒄+ 𝒅= 𝟔
𝒂+ 𝒃+ 𝟑𝒄+ 𝒅= 𝟏𝟒
𝒂+ 𝒃+ 𝒄+ 𝟑𝒅= 𝟏𝟐

o valor de 𝒂 é:

a) –1;

b) 1;

c) 2;

d) 3;

e) 4.

(FGV/TCE TO/2022) Considere o sistema:

{

𝒙+ 𝒚+ 𝟓𝒛= 𝟎
𝒙+ 𝟓𝒚+ 𝒛= 𝟏𝟒
𝟓𝒙+ 𝒚+ 𝐳= 𝟐𝟖

O valor de 𝒙 é:

a) 3/2;

b) 5/2;

c) 7/2;

d) 9/2;

e) 11/2.

(FGV/FEMPAR/2021) A manipulação das equações de um sistema linear pode gerar novas equações
lineares mais simples que as originais. Ao serem incorporadas ao conjunto original, as novas equações
podem contribuir na busca por soluções do sistema.

Considere o sistema linear de 3 equações e 3 incógnitas dado por

{

𝟑𝒂−𝟐𝒃+ 𝒄= 𝟗
𝒂+ 𝟑𝒃−𝟐𝒄= 𝟏𝟏
−𝟐𝒂+ 𝒃+ 𝟑𝒄= 𝟏𝟑

É correto afirmar que 𝒂 + 𝒃 + 𝒄 vale

a) 16,5.

b) 18,5.

c) 19.

d) 32,5.

e) 33.

(FGV/ALERO/2018) Considere o sistema linear

{

𝒙+ 𝟐𝒚+ 𝟑𝒛= 𝟏𝟔𝟎
𝟐𝒙+ 𝟑𝒚+ 𝒛= 𝟏𝟒𝟎
𝟑𝒙+ 𝒚+ 𝟐𝒙= 𝟏𝟓𝟔

O valor de 𝒙 é:

a) 20.

b) 22.

c) 24.

d) 26.

e) 28.

==5460==

## GABARITO – FGV

### Solução de Sistemas Lineares

LETRA E
LETRA D
LETRA B
LETRA E
LETRA E

LETRA A
LETRA C

## LISTA DE QUESTÕES – MULTIBANCAS

### Solução de Sistemas Lineares

(CESGRANRIO/BNB/2024) Considere (𝒙𝟎, 𝒚𝟎, 𝒛𝟎) a solução do sistema linear

{

−𝟐𝒙+ 𝟐𝒚+ 𝒛= 𝟑

𝒙+ 𝒚−𝟑𝒛= 𝟏𝟏

𝟑𝒙−𝒚= 𝟕

A soma 𝒙𝟎+ 𝒚𝟎+ 𝒛𝟎 é igual a

a) 3

b) 7

c) 10

d) 11

e) 21

(IDECAN/Pref. Maracanaú/2023) Em um grupo de amigos, Fernando, Giovane e Henrique têm alturas
diferentes. Além disso, a soma das alturas de Fernando e Giovane é igual 3,36 metros, a soma das alturas
de Giovane e Henrique é igual a 3,38 metros e a soma das alturas de Fernando e Henrique é igual a 3,50
metros.

Com base nesse caso hipotético, é correto afirmar que a diferença entre as alturas de Henrique e Fernando
é igual a

a) 0,02 metros.

b) 0,08 metros.

c) 0,10 metros.

d) 0,14 metros.

(IDECAN/Pref. SCS/2023) Em uma loja de aplicativos móveis, com a proximidade da temporada de férias,
a empresa decidiu antecipar suas promoções para o próximo ano. Foram anunciados três pacotes

distintos:

- Pacote 1: Compre 3 jogos tipo A, 5 aplicativos tipo B e 6 toques de notificação tipo C por R$ 98,00.

- Pacote 2: Compre 2 jogos tipo A, 3 aplicativos tipo B e 2 toques de notificação tipo C por R$ 57,50.

- Pacote 3: Compre 4 jogos tipo A, 4 aplicativos tipo B e 3 toques de notificação tipo C por R$ 95,50.

Considerando que os preços de todos os produtos se mantiveram iguais em todos os pacotes, então o
valor total que se pagaria caso fosse possível uma pessoa comprar um jogo do tipo A, um aplicativo do
tipo B e um toque de notificação do tipo C, seria

a) R$ 24,50.

b) R$ 23,50.

c) R$ 23,00.

d) R$ 22,00.

(FUNDATEC/Pref. Cachoeira Sul/2022) A solução do sistema de equações {𝟒𝒙−𝟓𝒚= 𝟐𝟐

𝒙+ 𝟐𝒚= 𝟐𝟓 está na

alternativa em que 𝒙 e 𝒚 são, respectivamente:

a) 1 e 12.

b) 13 e 6.

c) 8 e 2.

d) 3 e 11.

e) 23 e 1.

(FUNDATEC/SBC/2022) Resolva o sistema de equações lineares pelo método de Gauss, se a matriz do
sistema é:

a) 𝑥= 1; 𝑦 = −9; 𝑧= 6

b) 𝑥 = 2; 𝑦 = −11; 𝑧 = −6

c) 𝑥= 1; 𝑦 = 2; 𝑧 = −3

d) 𝑥= −2; 𝑦 = 6; 𝑧 = 3

e) 𝑥= −2; 𝑦 = 6; 𝑧= −6

(FGV/MPE SC/2022) Sabe-se que { 𝟐𝒙−𝒚= 𝟗

𝟑𝒙−𝟐𝒚= 𝟓 .

O valor de 𝒙 + 𝒚 é:

a) 16;

b) 18;

c) 24;

d) 26;

==5460==

e) 30.

(FGV/CGU/2022) Considere o sistema linear { 𝒙−𝟐𝒚+ 𝒛= 𝟒

−𝟑𝒙+ 𝒚+ 𝟐𝒛= 𝟑.

Sabe-se que 𝒙+ 𝒚&gt; 𝟏𝟎𝟎.

O menor valor inteiro de 𝒛 que satisfaz as condições dadas é:

a) 52;

b) 53;

c) 54;

d) 55;

e) 56.

(FGV/MPE SC/2022) No sistema

{

𝟑𝒂+ 𝒃+ 𝒄+ 𝒅= 𝟏𝟔

𝒂+ 𝟑𝒃+ 𝒄+ 𝒅= 𝟔
𝒂+ 𝒃+ 𝟑𝒄+ 𝒅= 𝟏𝟒
𝒂+ 𝒃+ 𝒄+ 𝟑𝒅= 𝟏𝟐

o valor de 𝒂 é:

a) –1;

b) 1;

c) 2;

d) 3;

e) 4.

(FGV/TCE TO/2022) Considere o sistema:

{

𝒙+ 𝒚+ 𝟓𝒛= 𝟎
𝒙+ 𝟓𝒚+ 𝒛= 𝟏𝟒
𝟓𝒙+ 𝒚+ 𝐳= 𝟐𝟖

O valor de 𝒙 é:

a) 3/2;

b) 5/2;

c) 7/2;

d) 9/2;

e) 11/2.

(VUNESP/Pref. Guaratinguetá/2022) Considere um sistema linear possível e determinado com 3
equações e 3 incógnitas, em que sua representação matricial é dada por 𝑨𝑿= 𝑩, sendo 𝑨 a matriz dos
coeficientes das equações do sistema, 𝑿 a matriz das incógnitas do sistema, e 𝑩 a matriz dos termos
independentes do sistema. A operação matricial que permite determinar corretamente os valores dos
elementos da matriz 𝑿 está indicada na alternativa:

a) 𝑋= 𝐵 – 𝐴

b) 𝑋= 𝐵+ 𝐴

c) 𝑋= 𝐵· 𝐴–1

d) 𝑋= 𝐴–1 · 𝐵

e) 𝑋= 𝐵–1 · 𝐴

(VUNESP/FICSAE/2022) Sabendo que a inversa da matriz [

𝟕

𝟏𝟑
−

𝟐𝟏

𝟐
𝟑

𝟏𝟏

𝟏𝟏

𝟕

] é a matriz [

𝟕𝟓𝟔

𝟓𝟒𝟑𝟕

𝟒𝟖𝟓𝟏

𝟓𝟒𝟑𝟔
−

𝟏𝟐𝟔

𝟓𝟒𝟑𝟕

𝟐𝟔𝟏𝟖

𝟓𝟒𝟑𝟕

] e que

(𝒙, 𝒚) é a solução do sistema de equações {

𝟏𝟕𝒙

𝟑−

𝟐𝟏𝒚

𝟐= 𝟏

𝟑𝒙

𝟏𝟏+

𝟏𝟏𝒚

𝟕= 𝟎

, então, 𝒙 − 𝒚 é igual a

a)

852

5437

b)

1452

5437

c)

2233

5437

d)

2492

5437

e)

2744

5437

(IDIB/CREMERJ/2021) É correto afirmar que a “Regra de Cramer” é um método utilizado para

a) desenvolver operação com conjuntos.

b) determinar o volume de um cone utilizando uma esfera.

c) determinar o resultado de uma progressão geométrica infinita.

d) solucionar sistemas lineares.

(FUNDATEC/Pref. Tramandaí/2021) Observe a figura a seguir:

Quanto corresponde a 40% de
?

a) 4.000.

b) 3.200.

c) 2.400.

d) 1.600.

(LEGALLE/CM Campestre Serra/2021) Observe o sistema de equações representado abaixo e assinale a
alternativa que apresenta a soma do resultado das incógnitas que satisfazem esse sistema.

{ 𝟐𝒙−𝒚= 𝒙−𝟒

𝟓−𝟑𝒚= 𝟓𝒚+ 𝒙

a) −4.

b) −3.

c) −2.

d) 2.

e) 4.

(FUNDATEC/Pref. Vacaria/2021) No sistema de equações {𝒙+ 𝒚= 𝟏𝟖

𝒙−𝒚= 𝟔, o valor de 𝒙𝟐+ 𝒚𝟐 é:

a) 180.

b) 150.

c) 144.

d) 36.

e) 12.

(CESGRANRIO/BB/2021) Um banco tem agências em três regiões do país. Em cada região, trabalha-se
com a comercialização de três segmentos: seguros (X), previdência (Y) e consórcios (Z). Cada equação linear

que compõe o sistema abaixo representa a capacidade de uma regional produzir valor agregado para o
banco, em cada segmento de atuação (lado esquerdo das equações), visando ao alcance das metas de
lucro operacional em milhares de reais (lado direito das equações).

{

𝟐𝒙+ 𝟓𝒚+ 𝟒𝒛= 𝟔𝟗𝟎 𝐫𝐞𝐠𝐢ã𝐨 𝐒𝐮𝐥
𝟓𝒙+ 𝟐𝒚+ 𝟒𝒛= 𝟕𝟐𝟎 𝐫𝐞𝐠𝐢ã𝐨 𝐒𝐮𝐝𝐞𝐬𝐭𝐞
𝟑𝒙+ 𝟑𝒚+ 𝟐𝒙= 𝟓𝟒𝟎 𝐫𝐞𝐠𝐢ã𝐨 𝐍𝐨𝐫𝐭𝐞

De acordo com esses dados, verifica-se que a contribuição de um dado segmento que atinge exatamente
a meta de sua região é de

a) R$160.000,00 no segmento seguros, na região Sul

b) R$400.000,00 no segmento previdência, na região Sudeste

c) R$180.000,00 no segmento consórcio, na região Norte

d) R$90.000,00 no segmento seguros, na região Norte

e) R$180.000,00 no segmento previdência, na região Sul

(IDIB/CM Planaltina/2021) Em um estabelecimento comercial, preços de pacotes contendo produtos
de higiene se diferenciam pela variedade e quantidade de produtos. Quatro desses pacotes estão abaixo
representados, sendo três deles com os respectivos preços:

A partir dos dados apresentados, qual é o preço do pacote 4?

a) R$ 32,40

b) R$ 30,60

c) R$ 29,60

d) R$ 34,00

(FGV/FEMPAR/2021) A manipulação das equações de um sistema linear pode gerar novas equações
lineares mais simples que as originais. Ao serem incorporadas ao conjunto original, as novas equações
podem contribuir na busca por soluções do sistema.

Considere o sistema linear de 3 equações e 3 incógnitas dado por

{

𝟑𝒂−𝟐𝒃+ 𝒄= 𝟗
𝒂+ 𝟑𝒃−𝟐𝒄= 𝟏𝟏
−𝟐𝒂+ 𝒃+ 𝟑𝒄= 𝟏𝟑

É correto afirmar que 𝒂 + 𝒃 + 𝒄 vale

a) 16,5.

b) 18,5.

c) 19.

d) 32,5.

e) 33.

(Instituto Consulplan/CM Amparo/2020) Dado o sistema {

𝒙+ 𝒚+ 𝒛= 𝟗𝟑𝟎

𝒙+ 𝒛= 𝟔𝟔𝟎
𝒙+ 𝒚= 𝟓𝟕𝟎

Pode-se afirmar que 𝒚 – 𝒛 é igual a:

a) –110

b) –90

c) 120

d) 630

(Instituto Consulplan/Pref Colômbia/2020) Dado o sistema {

𝒙−𝒚+ 𝒛= −𝟏

𝒙−𝒛= −𝟕
𝟐𝒙+ 𝟑𝒚+ 𝒛= 𝟒

, pode se afirmar que 𝒙𝒚𝒛

é igual a:

a) 12

b) −12

c) 24

d) −24

(VUNESP/Pref. N Odessa/2018) Gertrudes, que é doceira, recebeu três encomendas para festas. Sabe-
se que, em cada uma das encomendas, foram usadas quantidades diferentes de ovos, iguais a 𝒙, 𝒚 e 𝒛, tais

que 𝒙+ 𝒚= 𝟒𝟎, 𝒙+ 𝒛= 𝟑𝟎 e 𝒚 + 𝒛= 𝟑𝟖. Desse modo, é correto afirmar que, para a produção dessas
três encomendas, Gertrudes usou uma quantidade de ovos igual a

a) 3,5 dúzias.

b) 4 dúzias.

c) 4,5 dúzias.

d) 5 dúzias.

e) 5,5 dúzias.

(FGV/ALERO/2018) Considere o sistema linear

{

𝒙+ 𝟐𝒚+ 𝟑𝒛= 𝟏𝟔𝟎
𝟐𝒙+ 𝟑𝒚+ 𝒛= 𝟏𝟒𝟎
𝟑𝒙+ 𝒚+ 𝟐𝒙= 𝟏𝟓𝟔

O valor de 𝒙 é:

a) 20.

b) 22.

c) 24.

d) 26.

e) 28.

(FCC/TRT 11/2017) O sistema de equações lineares {𝟐𝒙+ 𝟑𝒚= 𝟐𝟒

𝟒𝒙−𝟐𝒚= 𝟏𝟔 é equivalente ao sistema

{

𝟐𝒙+ 𝟑𝒚= 𝟐𝟒
𝟒𝒙−𝟐𝒚= 𝟏𝟔
𝟖𝒙+ 𝑲𝒚= 𝟖𝟎

, em que 𝒙 e 𝒚 são as incógnitas reais dos sistemas. Se 𝑺 = (𝒙 + 𝒚) e 𝑲 é um parâmetro

real, então

a) S = 2,00K

b) S = 0,80K

c) S = 0,75K

d) S = 1,25K

e) S = 1,50K

(VUNESP/CM Marília/2017) Uma editora enviou para uma biblioteca três pacotes que tinham,
respectivamente, 𝒚, 𝒘 e 𝒛 livros em cada um. Sabendo-se que 𝒚 + 𝒘 = 𝟒𝟎, 𝒚 + 𝒛 = 𝟑𝟎 e
𝒘 + 𝒛 = 𝟑𝟖, é correto afirmar que os três pacotes tinham, juntos, um número total de livros igual a

a) 54.

b) 56.

c) 58.

d) 60.

e) 64.

(VUNESP/TJSP/2017) Os preços de venda de um mesmo produto nas lojas X, Y e Z são números inteiros

representados, respectivamente, por 𝒙, 𝒚 e 𝒛. Sabendo-se que 𝒙 + 𝒚 = 𝟐𝟎𝟎, 𝒙 + 𝒛 = 𝟏𝟓𝟎 e
𝒚+ 𝒛= 𝟏𝟗𝟎, então a razão

𝒙

𝒚 é:

a)

3

5

b)

4

9

c)

2

3

d)

3

8

e)

1

3

## GABARITO – MULTIBANCAS

### Solução de Sistemas Lineares

LETRA C
LETRA A
LETRA A
LETRA B
LETRA B
LETRA E

LETRA B
LETRA E
LETRA E

LETRA D
LETRA A
LETRA D
LETRA B
LETRA C
LETRA A
LETRA A

LETRA B
LETRA A
LETRA B
LETRA D
LETRA C
LETRA C
LETRA D
LETRA A
LETRA C

## LISTA DE QUESTÕES – MULTIBANCAS

### Discussão de um sistema linear

(Instituto AOCP/PM ES/2022) Nos sistemas de equações lineares, é possível representar a relação entre
a sua classificação (ou suas características) e sua quantidade de soluções (ou as características do conjunto
solução). Nesse contexto, é correto afirmar que (Nota: em algumas literaturas, o termo “compatível” é
apresentado como “possível”)

a) um Sistema Compatível e Indeterminado admitirá, como conjunto solução, o conjunto vazio.

b) um Sistema Compatível e Determinado apresenta infinitas soluções.

c) um Sistema Homogêneo sempre admite solução única.

d) um Sistema Incompatível sempre terá alguma solução.

e) sistemas homogêneos sempre são compatíveis.

(Instituto AOCP/PM ES/2022) Sobre o sistema de equações {𝒂𝒙+ 𝟑𝒚= 𝟒

−𝒙+ 𝟓𝒚= 𝒃 é correto afirmar que

a) se 𝑎= −

3

5, o sistema é possível e determinado.

b) se 𝑎≠−

3

5, o sistema é possível e determinado.

c) se 𝑎≠−

3

5, o sistema é possível e indeterminado.

d) se 𝑏=

20

3 , o sistema é possível e determinado.

e) se 𝑏=

20

3 , o sistema é possível e indeterminado.

(FEPESE/PCien SC/2022) Considere o seguinte sistema linear, nas variáveis x, y, z:

{

𝒙+ 𝟐𝒚+ 𝒂𝒛= 𝟎

𝟐𝒙+ 𝟑𝒛= 𝟎
𝒙+ 𝒚+ 𝒛= 𝟎

O valor de 𝒂 para que o sistema acima tenha infinitas soluções é:

a) Maior que 3.

b) Maior que 1 e menor que 2.

c) Maior que 2 e menor que 3.

d) Maior que 0 e menor que 1.

e) Menor que 0.

(AOCP/SED MS/2022) Dado o sistema de equações lineares em x, y e z e a e b números reais, assinale a

alternativa correta.

{

−𝒙−𝟐𝒚+ 𝒂𝒛= 𝟏
−𝒙−𝟐𝒚−𝟐𝒛= 𝟐
−𝒙+ 𝟐𝒚−𝟐𝒛= 𝒃

a) O sistema é possível e determinado se 𝑎= 2

b) O sistema é impossível se 𝑎= 2 e 𝑏≠−1

c) O sistema é impossível se 𝑎≠2 e 𝑏= −1

d) O sistema é possível e indeterminado 𝑎≠2 e 𝑏= −1

e) O sistema é possível e determinado se 𝑎= 2 e 𝑏≠−1

(FEPESE/PCien SC/2022) Considere as afirmações:

1. Se A e B são matrizes 2×2, então o produto AB é igual ao produto BA.

2. Se A e B são matrizes 2×2 tais que o produto AB é igual a zero, então A = 0 ou B = 0.

3. Se A é uma matriz cujo determinante é não nulo, então o sistema linear homogêneo associado tem
solução única.

Assinale a alternativa que indica todas as afirmativas corretas.

a) É correta apenas a afirmativa 2.

b) É correta apenas a afirmativa 3.

c) São corretas apenas as afirmativas 1 e 2.

d) São corretas apenas as afirmativas 1 e 3.

e) São corretas apenas as afirmativas 2 e 3.

(VUNESP/Pref. Rio Claro/2022) Considere o sistema linear representado a seguir, nas incógnitas 𝒙 e 𝒚,
com 𝒂, 𝒃, 𝒅 e 𝒆 diferentes de zero:

{𝒂𝒙+ 𝒃𝒚= 𝒄

𝒅𝒙+ 𝒆𝒚= 𝒇

Sobre esse sistema linear é correto afirmar que, se

a) 𝑐= 𝑓= 0, então necessariamente o sistema é possível e indeterminado.

b) 𝑐= 𝑓= 0, então necessariamente o sistema é possível e determinado.

c) 𝑎= 𝑑 e 𝑏= 𝑒, então necessariamente o sistema é possível e indeterminado.

d) 𝑎= 𝑑 e 𝑏= 𝑒, então necessariamente o sistema é possível e determinado.

e) 𝑎= 𝑑, 𝑏= 𝑒 e 𝑐= 𝑓, então necessariamente o sistema é possível e indeterminado.

(FEPESE/Pref Biguaçu/2021) O valor de 𝒂 para que o sistema linear

{

𝒂𝒙+ 𝟐𝒚+ 𝟒𝒛−𝟒𝒘= 𝟎
𝒙+ 𝟑𝒛−𝒘= 𝟎

𝟐𝒚+ 𝒛= 𝟎
𝒙−𝟑𝒘= 𝟎

tenha infinitas soluções é:

a) 2.

b) 1.

c) 0.

d) –1.

e) –2.

(Instituto Consulplan/Pref Formiga/2020) O valor de 𝒘, para que o sistema homogêneo a seguir, nas
incógnitas 𝒙, 𝒚, e 𝒛, admita soluções diferentes da trivial é:

{

𝒙−𝟐𝒚−𝟐𝒛= 𝟎
𝟐𝒙+ 𝒚+ 𝟑𝒛= 𝟎
𝟑𝒙−𝒚+ 𝒘𝒛= 𝟎

a) 0

b) 1

c) 2

d) 3

(FUNDATEC/Pref Ibarama/2020) A solução do sistema de equações { 𝟐𝒙−𝟓𝒚= 𝟑𝟑𝟖

−𝟑𝒙+ 𝟒𝒚= −𝟐𝟓𝟓 é:

a) Possível e determinado 𝑥= −11 e 𝑦= −72.

b) Possível e determinado 𝑥= 309 e 𝑦= 56.

c) Possível e determinado 𝑥= 38 e 𝑦= −35.

d) Possível e indeterminado.

e) Impossível.

(IBADE/Pref Vila Velha/2020) Para o sistema de equações lineares

{

𝒙+ 𝒚−𝟐𝒛= 𝟒
𝟐𝒙+ 𝟐𝒚−𝟒𝒛= 𝟖
𝒙+ 𝟑𝒚+ 𝟒𝒛= 𝟏𝟎

É correto afirmar que:

a) 𝑥= 2, 𝑦= 2 e 𝑧= 0, é a solução do sistema.

==5460==

b) O sistema não tem solução.

c) O sistema tem infinitas soluções.

d) O sistema tem solução e ela é única.

e) 𝑥= 1, 𝑦= 1 e 𝑧= −1, é solução do sistema

(FUNDATEC/Pref Ibiaçá/2019) A solução do sistema de equações {
𝟓𝒙−𝟑𝒚= 𝟏𝟔
𝟏𝟎𝒙−𝟔𝒚−𝟑𝟐= 𝟎 é:

a) Sistema impossível.

b) Sistema possível indeterminado.

c) Sistema possível determinado, 𝑥= 16 e 𝑦=

64

3

d) Sistema possível determinado, 𝑥= 3 e 𝑦= −

1

3

e) Sistema possível determinado, 𝑥= 0 e 𝑦= −

16

3

(FCC/IBMEC/2019) Considere o seguinte sistema linear, nas incógnitas 𝒙 e 𝒚:

{ 𝒙+ 𝟐𝒚= 𝟏

−𝟐𝒙+ 𝒌𝒚= 𝟑

O valor de k para que este sistema seja impossível (isto é, não tenha soluções) é

a) − 4

b) 0

c) 4

d) − 2

e) 1

(VUNESP/Pref. Peruíbe/2019) É correto afirmar que o sistema linear {𝒂𝒙+ 𝟐𝒚= 𝒂−𝟏

𝟐𝒙+ 𝟒𝒚= 𝟑𝒂

a) é possível e determinado para qualquer valor de 𝑎.

b) é possível e determinado para 𝑎 = 1.

c) é possível e indeterminado para 𝑎 = 1.

d) é possível e determinado para 𝑎 = 2.

e) é impossível para 𝑎 = 5.

(VUNESP/Pref. Cerquilho/2019) Considere o seguinte sistema linear, sendo 𝒌 um parâmetro real:

𝑺= {

𝒙+ 𝒚+ 𝒛= 𝟖𝟎
𝟎, 𝟏𝟓𝒙+ 𝟎, 𝟑𝟓𝒚+ 𝒌𝒛= 𝟑𝟐

𝒙−𝟑𝒚= 𝟎

O sistema 𝑺 será:

a) possível e determinado, se 𝑘=

1

5.

b) possível e indeterminado, se 𝑘=

1

5.

c) impossível, se 𝑘=

1

5.

d) impossível, se 𝑘≠

1

5.

e) possível e indeterminado, se 𝑘≠

1

5.

(CEBRASPE/Pref. São Cristóvão/2019) Com relação a sistemas lineares e análise combinatória, julgue o
item.

Para todo sistema linear da forma 𝑨𝑿 = 𝑩, em que 𝑨 é uma matriz quadrada 𝒎× 𝒎, 𝑿 e 𝑩 são matrizes
colunas 𝒎 × 𝟏, e 𝒅𝒆𝒕(𝑨) = 𝟎, o sistema não tem solução.

(CESGRANRIO/PETROBRAS/2018) Seja o sistema de equação linear: { 𝒂𝒙+ 𝒚= 𝟏

𝒙+ 𝒂𝒚= −𝟏

Quantos são os valores do parâmetro a que levam o sistema a possuir infinitas soluções?

a) 0

b) 1

c) 2

d) 3

e) infinitos

(CEBRASPE/IFF/2018) Considere o sistema S de m equações lineares e n incógnitas, mostrado abaixo.

𝒂𝟏𝟏𝒙𝟏+ 𝒂𝟏𝟐𝒙𝟐+ … + 𝒂𝟏𝒏𝒙𝒏= 𝒃𝟏

𝒂𝟐𝟏𝒙𝟏+ 𝒂𝟐𝟐𝒙𝟐+ … + 𝒂𝟐𝒏𝒙𝒏= 𝒃𝟐

𝒂𝒎𝟏𝒙𝟏+ 𝒂𝒎𝟐𝒙𝟐+ … + 𝒂𝒎𝒏𝒙𝒏= 𝒃𝒎

Nesse sistema, 𝒙𝟏, 𝒙𝟐, … , 𝒙𝒏 são as incógnitas, os coeficientes 𝒂𝐢𝐣 e os 𝒃𝒊 são números reais, para
𝟏 ≤𝒊≤𝒎 e 𝟏 ≤ 𝒋 ≤ 𝒏. A respeito das propriedades e das soluções do sistema S, assinale a opção
correta.

a) Considere que 𝑚 = 𝑛 e que 𝐴 = (𝑎𝑖𝑗) — a matriz dos coeficientes de S — seja tal que 𝑑𝑒𝑡(𝐴) = 0.
Nesse caso, S não possui solução.

b) Se 𝛼= (𝛼1, 𝛼2, … , 𝛼𝑛) e 𝛽= (𝛽1 , 𝛽2, … , 𝛽𝑛) são soluções de S e se r é um número real qualquer, então
𝛼 + 𝛽 = (𝛼1 + 𝛽1, 𝛼2 + 𝛽2, … , 𝛼𝑛+ 𝛽𝑛) e 𝑟𝛼 = (𝑟𝛼1, 𝑟𝛼2, … , 𝑟𝛼𝑛) são também soluções de S.

c) Se 𝑚 &lt; 𝑛, então S possui infinitas soluções.

d) Se 𝑚 = 𝑛 e se o sistema homogêneo associado a S — isto é, o sistema com os mesmos coeficientes 𝑎𝑖𝑗
apenas considerando todos os 𝑏𝑖= 0 — tiver solução única, então o sistema S também terá solução única.

e) Se 𝑚 &gt; 𝑛, então S não possui solução.

(CEBRASPE/SEDUC AL/2018) Julgue o item que se segue, relativos a matrizes e sistemas lineares.

Um sistema linear escrito na forma matricial 𝑷𝑿 = − 𝑿, em que 𝑷 é uma matriz 𝒏 × 𝒏 de coeficientes
constantes e 𝑿 é a matriz das incógnitas, 𝒏 × 𝟏, tem solução única se, e somente se, a matriz 𝑷 + 𝑰 for
inversível (𝑰 é a matriz identidade 𝒏 × 𝒏).

(VUNESP/PM SP/2018) O sistema linear {

𝒙−𝟑𝒚+ 𝟒𝒛= −𝟒
𝟑𝒙−𝟕𝒚+ 𝟕𝒛= −𝟖
−𝟒𝒙+ 𝟔𝒚−𝒛= 𝜶−𝟏

terá solução somente quando o valor

de 𝜶 for igual a

a) 2.

b) 3.

c) 4.

d) 5.

e) 6.

(CESGRANRIO/PETROBRAS/2018) Considere o sistema de equações lineares nas variáveis reais 𝒙 e 𝒚:

{
𝒌𝟐𝒙+ 𝒚= 𝟑
𝒙−𝒌𝒚= 𝒎+ 𝟒, no qual 𝒌 e 𝒎 são reais.

Sabe-se que existem números reais 𝒂 e 𝒃, com 𝒂≠𝒃, tais que os pares ordenados (𝒂, 𝒃) e (𝒃, 𝒂) são
soluções do sistema dado.

Dessa forma, 𝒌 e 𝒎 são, necessariamente, tais que

a) 𝑘 = 1, 𝑚 = 1

b) 𝑘 ≠ 1, 𝑚 = 1

c) 𝑘 = −1, 𝑚 = −1

d) 𝑘 ≠ −1, 𝑚 = −1

e) 𝑘 ≠ −1, 𝑚 ≠ −1

(CEBRASPE/Pref. São Luís/2017) Um sistema linear de 4 equações e 4 incógnitas pode ser escrito na

forma matricial como 𝑨𝑿 = 𝑩, em que 𝑨 é a matriz, de ordem 𝟒× 𝟒, dos coeficientes da equação; 𝑿 é a
matriz coluna, de ordem 𝟒× 𝟏, das incógnitas da equação e 𝑩 é a matriz coluna, de ordem 𝟒× 𝟏, dos
termos independentes da equação.

Com referência a essas informações, assinale a opção correta.

a) Se 𝑋1, 𝑋2 e 𝑋3 forem matrizes, de ordem 4 × 1, que são soluções distintas da referida equação matricial,
então o determinante de 𝐴 será igual a zero.

b) Se a matriz 𝐴 tiver exatamente duas linhas iguais, então o sistema terá exatamente duas soluções distintas.

c) Se todos os elementos da matriz 𝐵 forem iguais a zero e o determinante de 𝐴 for igual a zero, então o
sistema não terá solução.

d) Se uma matriz 𝐶, de ordem 4 × 1, possuir dois elementos positivos e dois negativos e for tal que 𝐴𝐶 =
𝐵, então o determinante de 𝐴 será diferente de zero.

e) Se o determinante da matriz 𝐴 for igual a zero, então 𝐴 terá pelo menos duas linhas iguais.

(FGV/Pref. SP/2016) Em uma aula, o professor ofereceu a seus alunos o seguinte problema:

O salário de Paulo é depositado em um banco todo mês. Após juntar o dobro do seu salário e depois de
pagar a mensalidade da faculdade ficou com 5 mil reais. Dois meses depois, ele tinha em sua conta o valor
do seu salário e mais o valor de 3 mensalidades da faculdade, o que totalizou 6 mil reais. Paulo constatou
ainda que se somasse o dobro de seu salário ao valor da mensalidade, resultaria 7 mil reais.

Encontre um modelo que represente a situação: nomeie 𝒙 o valor do salário de Paulo e 𝒚 o valor da
mensalidade da faculdade.

Foram três as soluções encontradas por seus alunos:

- A primeira exibia o sistema de equações {𝟐𝒙−𝒚= 𝟓
𝒙+ 𝟑𝒚= 𝟔 como modelo para o problema.

- A segunda, exibia o sistema de equações {
𝟐𝒙−𝒚= 𝟓
𝒙+ 𝟑𝒚= 𝟔
𝟐𝒙+ 𝒚= 𝟕

como modelo para o problema.

- A terceira solução encontrada exibia a equação 𝒙+ 𝟑(𝟐𝒙−𝟓) = 𝟔 como modelo para o cálculo do
salário.

Todos encontraram como solução para o salário 3 mil reais e para a mensalidade da faculdade, mil reais.

Com base no caso apresentado, assinale a afirmativa correta.

a)Os valores do salário e da mensalidade encontrados não estão corretos.

b) O modelo correto para o problema foi encontrado apenas na primeira solução, já que são equações com
duas variáveis.

c) O modelo correto para o problema foi encontrado apenas na segunda solução, já que são equações com
duas variáveis.

d) O modelo correto para o cálculo da mensalidade foi encontrado apenas na terceira solução, pois essa é
uma equação com apenas uma variável.

e) Todos os modelos encontrados estão corretos, embora o terceiro modelo encontre apenas o valor do
salário, já que a equação tem apenas uma variável.

(CEBRASPE/SEDUC AL/2013/Adaptada) O sistema {

𝟓𝒙+ 𝟓𝒚+ 𝟓𝒛= 𝟑. 𝟎𝟎𝟎
𝟓𝒙+ 𝟒𝒚+ 𝟒𝒛= 𝟏. 𝟎𝟔𝟎
𝟔𝒙+ 𝟓𝒚 + 𝟓𝒛 = 𝟏. 𝟐𝟔𝟎

é impossível.

### (CEBRASPE/SEDUC

AL/2013/Adaptada)
O
sistema
{

𝟓𝒙+ 𝟓𝒚+ 𝟓𝒛= 𝟑𝟎𝟎𝟎
𝟓𝒙+ 𝟒𝒚+ 𝟒𝒛= 𝟏. 𝟎𝟔𝟎
𝟒𝒙+ 𝟓𝒚+ 𝟐𝒛= 𝟏. 𝟏𝟒𝟎

é
possível
e

indeterminado.

(CESGRANRIO/PETROBRAS/2012) Um professor editou sua prova bimestral em um processador de
textos antigo e salvou em um pen drive para imprimir na escola. Devido à incompatibilidade entre os
processadores de texto, alguns caracteres de um sistema linear, cujas variáveis eram 𝒙, 𝒚 e 𝒛, ficaram
irreconhecíveis na impressão, conforme ilustrado a seguir:

{

𝒙+ 𝒚+ □𝒛= 𝟏

𝒙+ 𝟐𝒚+ 𝒛= 𝟐
𝟐𝒙+ 𝟓𝒚−𝟑𝒛=△

Os alunos que iriam resolver a prova bimestral perguntaram ao professor quais eram os valores de □ e △,
mas ele não soube dizer. Disse apenas que o sistema possuía, pelo menos, duas soluções distintas.

#### Se a afirmação do professor é correta, qual a soma dos valores de □ e △ ?

a) 11

b) 8

c) 6

d) 5

e) 4

(CESGRANRIO/PETROBRAS/2011) Com relação ao sistema de variáveis reais 𝒙 e 𝒚, {𝒎𝒙+ 𝒚= 𝟑

𝒙−𝒚= 𝒏, no

qual 𝒎 e 𝒏 são números reais, tem-se que

a) se 𝑚 = – 1 e 𝑛 = – 3, qualquer par ordenado (𝑥, 𝑦), 𝑥 e 𝑦 reais, é solução

b) não tem solução se 𝑚 = – 1 e 𝑛≠ – 3

c) tem sempre solução quaisquer que sejam 𝑚 e 𝑛 reais

d) tem duas soluções se 𝑚≠ – 1

e) (1,1) é solução se 𝑚= 𝑛

## GABARITO – MULTIBANCAS

### Discussão de um sistema linear

LETRA E
LETRA B
LETRA D
LETRA B
LETRA B

LETRA E
LETRA A
LETRA B
LETRA A

LETRA C
LETRA B
LETRA A
LETRA D
LETRA C
ERRADO

LETRA B
LETRA D
CERTO
LETRA D
LETRA C
LETRA A
LETRA E
CERTO
ERRADO
LETRA A

LETRA B
