# Raciocínio Lógico - Aula 11

## Índice

1) Matrizes
3

2) Determinantes
43

3) Questões Comentadas - Matrizes - FGV
84

4) Questões Comentadas - Determinantes - FGV
99

5) Questões Comentadas - Matrizes - Multibancas
106

6) Questões Comentadas - Determinantes - Multibancas
132

7) Lista de Questões - Matrizes - FGV
156

8) Lista de Questões - Determinantes - FGV
161

9) Lista de Questões - Matrizes - Multibancas
164

10) Lista de Questões - Determinantes - Multibancas
174

## APRESENTAÇÃO DA AULA

Fala, pessoal!

Nessa aula abordaremos o tema das matrizes, que são estruturas matemáticas que possibilitam representar
e manipular dados de forma sistemática. Nesse tópico, veremos como definir uma matriz, quais são os tipos
de matrizes, como realizar operações com matrizes e como calcular a matriz inversa. Caso o seu edital inclua
esse conteúdo, nessa aula também falaremos sobre determinantes.
Você perceberá que os assuntos dessa aula não são muito frequentes em provas de concursos públicos, a
não ser para as áreas de engenharia e de educação. Porém, o tema pode surgir em qualquer edital que o
mencione, por isso não podemos desconsiderar os conteúdos que serão apresentados.
Não se preocupe com a quantidade de páginas desta aula, pois ela está cheia de exemplos solucionados e
comentados, que vão te auxiliar a compreender os conceitos e as técnicas. Além disso, você poderá exercitar
o que aprendeu com os exercícios propostos e esclarecer suas dúvidas no fórum.
Como de costume, apresentaremos, no início de cada tópico, um breve resumo para que você tenha uma
ideia geral do conteúdo antes de começar o assunto.

Conte comigo nessa caminhada =)

Prof. Eduardo Mocellin.

@edu.mocellin

## MATRIZES

Podemos representar uma matriz tanto com colchetes "[ ]" quanto com parênteses "( )".
Matriz de dimensão m × n: m linhas e n colunas.
Elemento 𝑎𝒊𝒋: o primeiro índice representa a linha e o segundo índice representa a coluna.
Cada elemento da matriz deve ser calculado por meio de uma fórmula apresentada.
Matriz linha: apresenta apenas uma linha. Dimensão da forma 1 × n.
Matriz coluna: apresenta apenas uma coluna. Dimensão da forma m × 1.
Matriz quadrada: apresenta o mesmo número de linhas e de colunas. Dimensão da forma n × n.

Matriz Retangular: número de linhas é diferente do número de colunas.
Matriz Diagonal: matriz quadrada em que todos os elementos que não pertencem à diagonal principal
são iguais a zero.
Matriz Triangular: matriz quadrada em que todos os elementos acima ou abaixo de sua diagonal principal
são nulos.

- Matriz Triangular Superior: todos os elementos abaixo da diagonal principal são nulos.
- Matriz Triangular Inferior: todos os elementos acima da diagonal principal são nulos.
Matriz Identidade: elementos da diagonal principal são iguais a 1 e os elementos fora da diagonal
principal são zero.
Matriz Nula: todos os elementos são iguais a zero. É comum representar uma matriz nula quadrada pela
letra 𝑂 acrescida de um índice que indica a ordem da matriz. Ex: 𝑂3 → matriz nula quadrada de ordem 3.
Igualdade entre matrizes: duas matrizes são iguais quando apresentam a mesma dimensão m×n e seus
elementos são idênticos e estão nas mesmas posições.
Adição e subtração de matrizes: é necessário que as matrizes tenham a mesma dimensão m×n. Para
realizar a operação, basta somar/subtrair os termos que estão na mesma posição.
Multiplicação da matriz por um número real: multiplicar todos os elementos da matriz pelo número real.

Matrizes

Introdução às matrizes

Representação de uma matriz pela lei de formação

Tipos de matrizes

Operações com matrizes

==5460==

Multiplicação de matrizes
1. Verificar se o número de colunas da primeira matriz é igual ao número de linhas da segunda. Se essa
igualdade não se verificar, não é possível realizar o produto das matrizes.
2. Obter o esquema geral da matriz-produto, que apresenta a seguinte dimensão:
Número de linhas da primeira × Número de colunas da segunda

3. Obter os elementos da matriz resultante a partir das linhas da primeira matriz e das colunas da
segunda matriz.
O elemento 𝑐𝒊𝒋 da matriz-produto 𝐶 é obtido por meio da linha 𝒊 da primeira matriz e da coluna 𝒋 da
segunda matriz.
A propriedade comutativa não vale para matrizes: 𝐴𝐵≠𝐵𝐴.
Propriedade associativa entre matrizes: (𝐴𝐵)𝐶= 𝐴(𝐵𝐶)
Propriedade associativa entre matrizes e um número real: 𝛼(𝐴𝐵) = (𝛼𝐴)𝐵= 𝐴(𝛼𝐵)
Propriedade distributiva: 𝑨(𝐵+ 𝐶) = 𝑨𝐵+ 𝑨𝐶; (𝐵+ 𝐶)𝑨= 𝐵𝑨+ 𝐶𝑨
Elemento neutro da multiplicação de matrizes: 𝑨𝑰= 𝑰𝐴= 𝑨

O traço de uma matriz quadrada é a soma dos elementos da sua diagonal principal. Se 𝐴 é uma matriz
quadrada, então o seu traço é representado por 𝑡𝑟(𝐴).
- 𝑡𝑟 (𝐴+ 𝐵) = 𝑡𝑟(𝐴) + 𝑡𝑟(𝐵)
- 𝑡𝑟 (𝐴−𝐵) = 𝑡𝑟(𝐴) −𝑡𝑟(𝐵)
- 𝑡𝑟(𝛼𝐴) = 𝛼 𝑡𝑟(𝐴)
- 𝑡𝑟 (𝐴𝐵) = 𝑡𝑟(𝐵𝐴)
A matriz oposta de 𝐴 é −𝐴.
A transposta de uma matriz 𝐴 (notação: 𝐴𝑡) corresponde à matriz cujas linhas foram transformadas em
colunas.

(𝐴𝑡)𝑡= 𝐴
(𝛼𝐴)𝑡= 𝛼𝐴𝑡
(𝑨𝑩)𝑡= 𝑩𝑡𝑨𝑡
(𝐴+ 𝐵)𝑡= 𝐴𝑡+ 𝐵𝑡

Propriedades da multiplicação de matrizes

Traço de uma matriz quadrada

Matriz oposta

Matriz transposta, simétrica e antissimétrica

Matriz Simétrica: a matriz é igual a sua transposta → 𝐴= 𝐴𝑡

- É quadrada; e
- Os elementos simétricos com relação à diagonal principal são iguais.
Matriz antissimétrica: 𝐴𝑡= −𝐴

- É quadrada;
- A diagonal principal é nula; e
- Os elementos simétricos com relação à diagonal principal são opostos.

𝐴−1𝐴= 𝐴𝐴−1 = 𝐼𝑛

Uma matriz que não possui inversa é denominada singular.
Propriedades:

(𝐴−1)−1 = 𝐴
(𝐴−1)𝑡= (𝐴𝑡)−1

(𝛼𝐴)−1 =

1
𝛼𝐴−1
(𝑨𝑩)−1 = 𝑩−1𝑨−1
(𝑨𝑩𝑪)−1 = 𝑪−1𝑩−1𝑨−1
Matriz inversa como análogo da divisão: pode-se multiplicar ambos os lados de uma equação matricial
pela inversa de uma matriz (𝐴−1) e, na sequência, usar a propriedade 𝐴−1𝐴= 𝐼.
Uma matriz 𝐴 é dita ortogonal quando a sua inversa é igual a sua transposta:

𝐴 é ortogonal  𝐴−1 = 𝐴𝑡

Matriz inversa

Matriz ortogonal

### Introdução às matrizes

### Noção básica

A ideia básica de uma matriz é representar uma tabela de um modo mais formal, com uma "linguagem
matemática".

Suponha, por exemplo, que um concurseiro quer organizar em uma matriz quantas horas ele pretende
estudar em cada dia da semana das próximas quatro semanas. Considere também que:

- As linhas representam os dias da semana: a primeira linha corresponde à segunda-feira, a segunda
linha corresponde à terça-feira, e assim sucessivamente até a sétima linha, que corresponde ao
domingo.
- As colunas representam as semanas: a primeira coluna corresponde à primeira semana, a segunda
coluna corresponde à segunda semana, a terceira coluna corresponde à terceira semana e, por fim,
a quarta coluna corresponde à quarta semana.

Nesse caso, o concurseiro pode representar a sua matriz do seguinte modo:

Note que o elemento que está na 6ª linha e na 2ª coluna representa o número de horas que concurseiro
planeja estudar no sábado da segunda semana: 11 horas.

Podemos representar uma matriz tanto com colchetes "[ ]" quanto com parênteses "( )". Portanto, a matriz
em questão também pode ser representada da seguinte maneira:

(

3
4
3
5
5
6
9
9

4
4
5
11
8

5
6
4
3
4
3
3
9
9

3
3
4
8
9)

### Dimensão de uma matriz

Podemos dizer que uma matriz de dimensão m × n (lê-se: matriz de dimensão m por n) é uma matriz
formada por elementos (ou entradas) distribuídos em m linhas e n colunas.

No exemplo que acabamos de mostrar, temos uma matriz composta por 7 linhas e por 4 colunas. Portanto,
trata-se de uma matriz 7 × 4 (matriz 7 por 4). Vejamos mais quatro exemplos:

- [
11
√3
3
7/9
6
5
2
8
1
3
] é uma matriz 3 × 3;

- [ 5
11/12

√7
4
1
53

4
15] é uma matriz 2 × 4;

- [

2
3
5
7
11
17
13
19

] é uma matriz 4 × 2;

- [
5
3
1
] é uma matriz 3 × 1.

A ordem correta é Nº de LINHAS × Nº de COLUNAS

### Representação genérica dos elementos de uma matriz

Cada elemento de uma matriz apresenta uma determinada localização dentro dela. Essa localização é dada
pela linha e pela coluna do elemento.

Considere a seguinte matriz A:

𝐴=

[
4
3
5
5
6
9
9

4
4
5
11
8

4
3
4
3
3
9
9

3
3
4
8
9]

Genericamente, um elemento dessa matriz 𝐴 pode ser representado por 𝒂𝒊𝒋, em que 𝒊 representa a linha
em que esse elemento se encontra e 𝒋 representa a sua coluna.

O primeiro índice representa a linha e o segundo índice representa a coluna.

Por exemplo, o elemento 𝑎𝟒𝟐 é aquele que está na linha 4 e na coluna 2. Portanto, 𝑎42 = 4.

O elemento 𝑎𝟐𝟒, por sua vez, é aquele que está na linha 2 e na coluna 4. Portanto, 𝑎24 = 3.

### Representação genérica de uma matriz

Uma matriz A de dimensão m×n, isto é, uma matriz A com m linhas e n colunas, pode ser representada
genericamente das seguintes formas:

𝐴𝑚×𝑛

𝐴= (𝑎𝑖𝑗)𝑚×𝑛

𝐴= [

𝑎11
𝑎12
…
𝑎1𝑛
𝑎21
𝑎22
…
𝑎2𝑛
⋮
𝑎𝑚1

⋮
𝑎𝑚2

⋱
⋮
…
𝑎𝑚𝑛

]

### Representação de uma matriz pela lei de formação

Podemos representar uma matriz por meio de uma lei de formação. Nesse caso, cada elemento da matriz
deve ser calculado por meio de uma fórmula apresentada.

Considere por exemplo, a seguinte matriz:

𝐴= (𝑎𝑖𝑗)3×3 tal que 𝑎𝑖𝑗= 𝑖+ 𝑗2

Note que a matriz 𝐴 é 3×3, isto é, possui 3 linhas e 3 colunas.

𝐴= [

𝑎11
𝑎12
𝑎13
𝑎21
𝑎22
𝑎23
𝑎31
𝑎32
𝑎33

]

Para obter a matriz, devemos calcular cada um de seus elementos 𝑎𝑖𝑗 por meio da lei de formação
apresentada, dada por 𝑎𝑖𝑗= 𝑖+ 𝑗2.

𝑎𝟏𝟏= 𝟏+ 𝟏2 = 2

𝑎𝟏𝟐= 𝟏+ 𝟐2 = 5

𝑎𝟏𝟑= 𝟏+ 𝟑2 = 10

𝑎𝟐𝟏= 𝟐+ 𝟏2 = 3

𝑎𝟐𝟐= 𝟐+ 𝟐2 = 6

𝑎𝟐𝟑= 𝟐+ 𝟑2 = 11

𝑎𝟑𝟏= 𝟑+ 𝟏2 = 4

𝑎𝟑𝟐= 𝟑+ 𝟐2 = 7

𝑎𝟑𝟑= 𝟑+ 𝟑2 = 12

Portanto, a matriz 𝐴 é dada por:

𝐴= [

2
5
10
3
6
11
4
7
12
]

Vamos a um exercício.

(DNIT/2013) Os elementos de uma matriz 𝐴3×2 , isto é, com três linhas e duas colunas, são dados por:

𝑎𝑖𝑗= {(𝑖+ 𝑗)2, se 𝑖= 𝑗

𝑖2 + 𝑗2, se 𝑖≠𝑗

Em que 𝑎𝑖𝑗 representa o elemento da matriz 𝐴3×2 localizado na linha 𝑖 e coluna 𝑗. Então, a soma dos
elementos da primeira coluna de 𝐴3×2 é igual a:

a) 17

b) 15

c) 12

d) 19

e) 13

Comentários:

Como a matriz 𝐴 apresenta 3 linhas e 2 colunas, podemos representá-la genericamente do seguinte modo:

𝐴= [

𝑎11
𝑎12
𝑎21
𝑎22
𝑎31
𝑎32

]

A questão pede a soma dos elementos da primeira coluna de 𝐴:

𝑎11 + 𝑎21 + 𝑎31

Para 𝑎11, temos 𝑖= 𝑗. Logo, 𝑎11 = (1 + 1)2 = 4.

Para 𝑎21, temos 𝑖≠𝑗. Logo, 𝑎21 = 12 + 22 = 5.

Para 𝑎31, temos 𝑖≠𝑗. Logo, 𝑎31 = 32 + 12 = 10.

A questão pede a soma dos elementos da primeira coluna de 𝐴 é:

4 + 5 + 10 = 19

Gabarito: Letra D.

### Tipos de matrizes

### Matriz linha

É uma matriz com apenas uma linha, ou seja, tem dimensão da forma 𝟏× 𝑛. Exemplos:

-
[5
4
1] é uma matriz linha de dimensão 𝟏× 3.
-
[3

1

3
√4
2
11

2
7
2
1
42
13

2 ] é uma matriz linha de dimensão 𝟏× 9.

### Matriz coluna

É uma matriz com apenas uma coluna, ou seja, tem dimensão da forma 𝑚× 𝟏. Exemplos:

- [
−4

√6
5

53
] é uma matriz coluna de dimensão 3 × 𝟏.

-

[
11

7
√4
2

−11

3 ]

é uma matriz coluna de dimensão 5 × 𝟏.

### Matriz quadrada

É uma matriz que apresenta o mesmo número de linhas e de colunas, ou seja, tem dimensão da forma
𝑛× 𝑛. Exemplos:

-
[ 11
42

70%
−3] é uma matriz quadrada de dimensão 2 × 2.

-
[

−8
4%
] é uma matriz quadrada de dimensão 3 × 3.

Quando uma matriz quadrada apresenta dimensão 𝒏× 𝒏, dizemos que essa matriz quadrada apresenta
ordem 𝒏. Nos dois exemplos anteriores, temos uma matriz quadrada de ordem 2 e uma matriz quadrada de
ordem 3, respectivamente.

#### Diagonais da matriz quadrada

Uma matriz quadrada apresenta duas diagonais: a diagonal principal e a diagonal secundária.

A diagonal principal é composta pelos elementos em que o número da linha é igual ao número da coluna,
isto é, 𝒊= 𝒋.

Para o exemplo em questão, os elementos da diagonal principal são 𝑎11 = 5, 𝑎22 = 15 e 𝑎33 = 7.

Já a diagonal secundária é composta por elementos cuja soma da linha e da coluna (𝑖+ 𝑗) é igual à ordem
da matriz (𝑛) acrescida de uma unidade, isto é:

𝒊+ 𝒋= 𝒏+ 𝟏

Para o exemplo em questão, os elementos da diagonal secundária são 𝑎13 = 9, 𝑎22 = 15 e 𝑎31 = √7.

### Matriz retangular

Uma matriz é retangular quando o número de linhas é diferente do número de colunas. Exemplos:

-
[

3
11

2
33
−11
13
6

] é uma matriz retangular de dimensão 3 × 2.

-
[ 0
11
4
−9
50%
1] é uma matriz retangular de dimensão 2 × 3.

### Matriz diagonal

A matriz diagonal é uma matriz quadrada em que todos os elementos que não pertencem à diagonal
principal são iguais a zero. Exemplos:

-
[𝟏𝟏
−𝟑]

-
[

𝟎
−𝟐
𝟎
𝟎
𝟎
𝟕

]

### Matriz triangular

Uma matriz triangular é uma matriz quadrada em que todos os elementos acima ou abaixo de sua diagonal
principal são nulos.

#### Matriz triangular superior

Quando todos os elementos abaixo da diagonal principal forem nulos, temos uma matriz triangular
superior. Exemplo:

[

8
5
7
1
𝟎
9
1
4
𝟎
𝟎

𝟎
𝟎

5
2
𝟎
1

]

#### Matriz triangular inferior

Quando todos os elementos acima da diagonal principal forem nulos, temos uma matriz triangular inferior.
Exemplo:

[

8
𝟎
𝟎
𝟎
2
9
𝟎
𝟎
3
1
9
5
5
𝟎
1
3

]

### Matriz identidade ou matriz unidade

A matriz identidade (ou matriz unidade) é uma matriz quadrada cujos elementos da diagonal principal são
iguais a 1 e os elementos fora da diagonal principal são zero. Exemplo:

𝐼4 = [

𝟏
𝟎
𝟎
𝟎
𝟎
𝟏
𝟎
𝟎
𝟎
𝟎

𝟎
𝟎

𝟏
𝟎
𝟎
𝟏

]

A representação desse tipo de matriz é dada pela letra 𝐼 acrescida de um índice que indica a ordem da matriz.
Isso significa que 𝐼3 é uma matriz identidade de ordem 3:

𝐼3 = [

]

### Matriz nula

Matriz nula é a matriz que apresenta todos seus elementos iguais a zero. Exemplos:

-
[0
0
0
0
0
0] é uma matriz nula de dimensão 2 × 3.

-
𝑂3 = [

0
0
0
0
0
0
0
0
0
] é uma matriz nula quadrada de ordem 3.

É comum representar uma matriz nula quadrada pela letra 𝑂 acrescida de um índice que indica a ordem da
matriz. Isso significa que 𝑶𝟑 é uma matriz nula quadrada de ordem 3.

### Operações com matrizes

### Igualdade entre matrizes

Duas matrizes são iguais quando:

- Apresentam a mesma dimensão 𝑚× 𝑛;
- Seus elementos são idênticos e estão nas mesmas posições.

Por exemplo, as duas matrizes abaixo são iguais, pois apresentam a dimensão 3 × 3, bem como seus
elementos são idênticos e estão nas mesmas posições:

[

3/4
11
−3
7
42
−4
√2
5
−1

] = [

3/4
11
−3
7
42
−4
√2
5
−1

]

Observe agora a suposta igualdade:

[

3/4
11
−3
7
𝟒𝟐
−4
𝒚
5
−1

] =⏞

??

[

3/4
11
−3
7
𝒙
−4
√𝟐
5
−1

]

Note que a igualdade só se verifica se 𝒙= 𝟒𝟐 e 𝒚= √𝟐. Caso contrário, as duas matrizes não serão iguais.

(Pref. N Horizonte/2019) O valor de 𝑥+ 𝑦 que determina a igualdade entre as matrizes

[ 7
𝑥−𝑦
−10
24 ] = [ 7
−13
2𝑥
−3𝑥
3𝑦] é:

a) 5.

b) 3.

c) −5.

d) −8.

e) −13.

Comentários:

Note que as duas matrizes apresentam a mesma dimensão 2 × 3. Para que elas sejam iguais, seus elementos
devem ser idênticos e devem estar nas mesmas posições. Para tanto, devemos ter:

{

𝑥−𝑦= −13

2𝑥= −10
−3𝑥= 15

3𝑦= 24

A partir da segunda e da quarta equação, podemos obter os valores de 𝑥 e de 𝑦.

2𝑥= −10 →𝒙= −𝟓

3𝑦= 24 →𝒚= 𝟖

O valor de 𝑥+ 𝑦 é:

(−5) + 8 = 3

O gabarito, portanto, é letra B.

Observe que as outras equações se verificam para 𝒙= −𝟓 e 𝒚= 𝟖, pois, caso contrário, as matrizes não
seriam iguais.

𝒙−𝒚= (−𝟓) −𝟖= −𝟏𝟑

−𝟑𝒙= −3 × (−𝟓) = 𝟏𝟓

Gabarito: Letra B.

### Adição e subtração de matrizes

Para somar ou subtrair matrizes, é necessário que elas tenham a mesma dimensão. Note, portanto, que
não é possível somarmos uma matriz de dimensão 3 × 5 com uma matriz de dimensão 4 × 3.

Feita essa observação, deve-se entender que a soma entre duas matrizes é feita somando os termos que
estão na mesma posição.

Para a subtração, seguimos a mesma ideia, subtraindo os elementos de uma matriz dos elementos de
mesma posição da outra matriz.

Suponha, por exemplo, que temos duas matrizes A e B dadas por:

𝑨= [ 𝟓
−𝟐
−𝟒
𝟓]

𝑩= [−𝟑
−𝟐
𝟐
𝟏
𝟕]

A soma 𝐴+ 𝐵 é dada por:

𝐴+ 𝐵= [ 𝟓
−𝟐
𝟑
−𝟒
𝟏
𝟓] + [−𝟑
𝟑
−𝟐
𝟐
𝟏
𝟕]

= [𝟓+ (−𝟑)
−𝟐+ 𝟑
𝟑+ (−𝟐)
−𝟒+ 𝟐
𝟏+ 𝟏
𝟓+ 𝟕]

= [ 2
1
1
−2
2
12]

Já a subtração 𝐴−𝐵 é dada por:

𝐴−𝐵= [ 𝟓
−𝟐
𝟑
−𝟒
𝟏
𝟓] −[−𝟑
𝟑
−𝟐
𝟐
𝟏
𝟕]

= [𝟓−(−𝟑)
−𝟐−𝟑
𝟑−(−𝟐)
−𝟒−𝟐
𝟏−𝟏
𝟓−𝟕]

= [ 8
−5
5
−6
0
−2]

### Multiplicação da matriz por um número real

Para multiplicarmos uma matriz por um número real qualquer, basta multiplicar todos os elementos dessa
matriz pelo número real. Considere, por exemplo, a seguinte matriz 𝐴:

𝐴= [

−3
2
5
1
3
−1
7
−3
√2

]

Ao multiplicar a matriz 𝐴 por 2, obtemos a seguinte matriz:

2𝐴= 𝟐× [
−𝟑
𝟐
𝟓
𝟏
𝟑
−𝟏
𝟕
−𝟑
√𝟐

]

2𝐴= [
𝟐× (−𝟑)
𝟐× 𝟐
𝟐× 𝟓
𝟐× 𝟏
𝟐× 𝟑
𝟐× (−𝟏)

𝟐× 𝟕
𝟐× (−𝟑)
𝟐× √𝟐

]

2𝐴= [
−6
−2
−6
2√2
]

### Multiplicação de matrizes

Pessoal, atenção redobrada com a multiplicação de matrizes. Essa é a parte que costuma gerar mais confusão
entre os alunos.

Para multiplicar duas matrizes, devemos seguir os seguintes passos:

1. Verificar se o número de colunas da primeira matriz é igual ao número de linhas da segunda. Se essa
igualdade não se verificar, não é possível realizar o produto das matrizes.
2. Obter o esquema geral da matriz-produto, que apresenta a seguinte dimensão:
Número de linhas da primeira × Número de colunas da segunda
3. Obter os elementos da matriz resultante a partir das linhas da primeira matriz e das colunas da
segunda matriz.

Professor, não entendi nada!!

Calma, caro aluno! Vamos resolver um exemplo.

Considere as matrizes 𝑨 e 𝑩, dadas por:

𝐴= [3
2
1
1
3
3]

𝐵= [

100
200
450
200
400
150
150
450
250
300
100
700
]

Vamos calcular o produto 𝑨× 𝑩.

1. Verificar se o número de colunas da primeira matriz é igual ao número de linhas da segunda. Se essa
igualdade não se verificar, não é possível realizar o produto das matrizes;

Note que a matriz 𝐴 tem dimensão 2 × 𝟑, e a matriz 𝐵 tem dimensão 𝟑× 4. Observe, portanto, que o
número de colunas da matriz 𝑨 é igual ao número de linhas da matriz 𝑩. Logo, é possível realizar o produto
das matrizes 𝐴2×3 e 𝐵3×4.

2. Obter o esquema geral da matriz-produto, que apresenta a seguinte dimensão:
Número de linhas da primeira × Número de colunas da segunda

A matriz 𝐴 tem dimensão 𝟐× 3, e a matriz 𝐵 tem dimensão 3 × 𝟒. Logo, a matriz-produto apresenta a
dimensão 𝟐× 𝟒. Temos o seguinte esquema geral:

𝐶= 𝐴× 𝐵= [( )
( )
( )
( )
( )
( )
( )
( )]

Ou então, de maneira mais formal, poderíamos escrever:

𝐶= 𝐴× 𝐵= [𝑐11
𝑐12
𝑐13
𝑐14
𝑐21
𝑐22
𝑐23
𝑐24]

Lembre-se: o elemento 𝑐𝑖𝑗 está na linha 𝑖 e na coluna 𝑗 da matriz C.

Uma maneira prática de memorizar os passos 1 e 2 é a seguinte:

3. Obter os elementos da matriz resultante a partir das linhas da primeira matriz e das colunas da
segunda matriz.

Temos a seguinte matriz-produto:

𝐶= 𝐴× 𝐵= [𝑐11
𝑐12
𝑐13
𝑐14
𝑐21
𝑐22
𝑐23
𝑐24]

### Obtenção de 𝑐𝟏𝟏

### 𝑐𝟏𝟏 → Primeira linha da primeira matiz, primeira coluna da segunda matriz

Para determinar o elemento da primeira linha e da primeira coluna da matriz-produto (𝑐𝟏𝟏), devemos utilizar
a primeira linha da primeira matriz e a primeira coluna da segunda matriz.

𝐴= [𝟑
𝟐
𝟏
1
3
3]

𝐵= [

𝟏𝟎𝟎
200
450
200
𝟒𝟎𝟎
150
150
450
𝟐𝟓𝟎
300
100
700
]

Para obter o elemento 𝑐𝟏𝟏, realiza-se a seguinte operação:

𝑐𝟏𝟏= 𝟑× 𝟏𝟎𝟎+ 𝟐× 𝟒𝟎𝟎+ 𝟏× 𝟐𝟓𝟎= 𝟏𝟑𝟓𝟎

Vamos colocar esse novo elemento na nossa matriz-produto:

𝐶= 𝐴× 𝐵= [𝟏𝟑𝟓𝟎
( )
( )
( )
( )
( )
( )
( )]

### Obtenção de 𝑐𝟏𝟐

### 𝑐𝟏𝟐 → Primeira linha da primeira matiz, segunda coluna da segunda matriz

Para determinar o elemento da primeira linha e da segunda coluna da matriz-produto (𝑐𝟏𝟐), devemos utilizar
a primeira linha da primeira matriz e a segunda coluna da segunda matriz.

𝐴= [𝟑
𝟐
𝟏
1
3
3]

𝐵= [

100
𝟐𝟎𝟎
450
200
400
𝟏𝟓𝟎
150
450
250
𝟑𝟎𝟎
100
700
]

Para obter o elemento 𝑐𝟏𝟐, realiza-se a seguinte operação:

𝑐𝟏𝟐= 𝟑× 𝟐𝟎𝟎+ 𝟐× 𝟏𝟓𝟎+ 𝟏× 𝟑𝟎𝟎= 𝟏𝟐𝟎𝟎

Vamos colocar esse novo elemento na nossa matriz-produto:

𝐶= 𝐴× 𝐵= [1350
𝟏𝟐𝟎𝟎
( )
( )
( )
( )
( )
( )]

### Obtenção de 𝑐𝟏𝟑

### 𝑐𝟏𝟑 → Primeira linha da primeira matiz, terceira coluna da segunda matriz

Para determinar o elemento da primeira linha e da terceira coluna da matriz-produto (𝑐𝟏𝟑), devemos utilizar
a primeira linha da primeira matriz e a terceira coluna da segunda matriz.

𝐴= [𝟑
𝟐
𝟏
1
3
3]

𝐵= [

100
200
𝟒𝟓𝟎
200
400
150
𝟏𝟓𝟎
450
250
300
𝟏𝟎𝟎
700
]

Para obter o elemento 𝑐𝟏𝟑, realiza-se a seguinte operação:

𝑐𝟏𝟑= 𝟑× 𝟒𝟓𝟎+ 𝟐× 𝟏𝟓𝟎+ 𝟏× 𝟏𝟎𝟎= 𝟏𝟕𝟓𝟎

Vamos colocar esse novo elemento na nossa matriz-produto:

𝐶= 𝐴× 𝐵= [1350
( )
( )
( )
( )
( )]

### Obtenção de 𝑐𝟏𝟒

### 𝑐𝟏𝟒 → Primeira linha da primeira matiz, quarta coluna da segunda matriz

Para determinar o elemento da primeira linha e da quarta coluna da matriz-produto (𝑐𝟏𝟒), devemos utilizar
a primeira linha da primeira matriz e a quarta coluna da segunda matriz.

𝐴= [𝟑
𝟐
𝟏
1
3
3]

𝐵= [

100
200
450
𝟐𝟎𝟎
400
150
150
𝟒𝟓𝟎
250
300
100
𝟕𝟎𝟎

]

Para obter o elemento 𝑐𝟏𝟒, realiza-se a seguinte operação:

𝑐𝟏𝟒= 𝟑× 𝟐𝟎𝟎+ 𝟐× 𝟒𝟓𝟎+ 𝟏× 𝟕𝟎𝟎= 𝟐𝟐𝟎𝟎

Vamos colocar esse novo elemento na nossa matriz-produto:

𝐶= 𝐴× 𝐵= [1350
1200
1750
𝟐𝟐𝟎𝟎
( )
( )
( )
( ) ]

### Obtenção de 𝑐𝟐𝟏

### 𝑐𝟐𝟏 → Segunda linha da primeira matiz, primeira coluna da segunda matriz

Para determinar o elemento da segunda linha e da primeira coluna da matriz-produto (𝑐𝟐𝟏), devemos utilizar
a segunda linha da primeira matriz e a primeira coluna da segunda matriz.

𝐴= [3
2
1
𝟏
𝟑
𝟑]

𝐵= [

𝟏𝟎𝟎
200
450
200
𝟒𝟎𝟎
150
150
450
𝟐𝟓𝟎
300
100
700
]

Para obter o elemento 𝑐𝟐𝟏, realiza-se a seguinte operação:

𝑐𝟐𝟏= 𝟏× 𝟏𝟎𝟎+ 𝟑× 𝟒𝟎𝟎+ 𝟑× 𝟐𝟓𝟎= 𝟐𝟎𝟓𝟎

Vamos colocar esse novo elemento na nossa matriz-produto:

𝐶= 𝐴× 𝐵= [1350
( )
( )
( ) ]

### Obtenção de 𝑐𝟐𝟐

### 𝑐𝟐𝟐 → Segunda linha da primeira matiz, segunda coluna da segunda matriz

Para determinar o elemento da segunda linha e da segunda coluna da matriz-produto (𝑐𝟐𝟐), devemos utilizar
a segunda linha da primeira matriz e a segunda coluna da segunda matriz.

𝐴= [3
2
1
𝟏
𝟑
𝟑]

𝐵= [

100
𝟐𝟎𝟎
450
200
400
𝟏𝟓𝟎
150
450
250
𝟑𝟎𝟎
100
700
]

Para obter o elemento 𝑐𝟐𝟐, realiza-se a seguinte operação:

𝑐𝟐𝟐= 𝟏× 𝟐𝟎𝟎+ 𝟑× 𝟏𝟓𝟎+ 𝟑× 𝟑𝟎𝟎= 𝟏𝟓𝟓𝟎

Vamos colocar esse novo elemento na nossa matriz-produto:

𝐶= 𝐴× 𝐵= [1350
1200
1750
2200
2050
𝟏𝟓𝟓𝟎
( )
( ) ]

### Obtenção de 𝑐𝟐𝟑

### 𝑐𝟐𝟑 → Segunda linha da primeira matiz, terceira coluna da segunda matriz

Para determinar o elemento da segunda linha e da terceira coluna da matriz-produto (𝑐𝟐𝟑), devemos utilizar
a segunda linha da primeira matriz e a terceira coluna da segunda matriz.

𝐴= [3
2
1
𝟏
𝟑
𝟑]

𝐵= [

100
200
𝟒𝟓𝟎
200
400
150
𝟏𝟓𝟎
450
250
300
𝟏𝟎𝟎
700
]

Para obter o elemento 𝑐𝟐𝟑, realiza-se a seguinte operação:

𝑐𝟐𝟑= 𝟏× 𝟒𝟓𝟎+ 𝟑× 𝟏𝟓𝟎+ 𝟑× 𝟏𝟎𝟎= 𝟏𝟐𝟎𝟎

Vamos colocar esse novo elemento na nossa matriz-produto:

𝐶= 𝐴× 𝐵= [1350
( )]

### Obtenção de 𝑐𝟐𝟒

### 𝑐𝟐𝟒 → Segunda linha da primeira matiz, quarta coluna da segunda matriz

Para determinar o elemento da segunda linha e da quarta coluna da matriz-produto (𝑐𝟐𝟒), devemos utilizar
a segunda linha da primeira matriz e a quarta coluna da segunda matriz.

𝐴= [3
2
1
𝟏
𝟑
𝟑]

𝐵= [

100
200
450
𝟐𝟎𝟎
400
150
150
𝟒𝟓𝟎
250
300
100
𝟕𝟎𝟎

]

Para obter o elemento 𝑐𝟐𝟒, realiza-se a seguinte operação:

𝑐𝟐𝟒= 𝟏× 𝟐𝟎𝟎+ 𝟑× 𝟒𝟓𝟎+ 𝟑× 𝟕𝟎𝟎= 𝟑𝟔𝟓𝟎

Vamos colocar esse novo elemento na nossa matriz-produto:

𝐶= 𝐴× 𝐵= [1350
1200
1750
2200
2050
1550
1200
𝟑𝟔𝟓𝟎]

Pronto! Acabamos de realizar o produto das matrizes 𝐴 e 𝐵.

𝐴× 𝐵= 𝐶

[3
2
1
1
3
3] × [
100
200
450
200
400
150
150
450
250
300
100
700
] = [1350
1200
1750
2200
2050
1550
1200
3650]

Professor... você levou QUATRO PÁGINAS para calcular os oito elementos!!

Calma, caro aluno. Levamos quatro páginas porque fizemos passo a passo. Em resumo, o que você precisa
saber é o seguinte:

O elemento da linha 𝒊 e da coluna 𝒋 da matriz-produto 𝑪 é obtido por meio da linha 𝒊 da
primeira matriz e da coluna 𝒋 da segunda matriz.

𝑐𝟏𝟏 → Linha 1 da primeira matriz e coluna 1 da segunda matriz;

𝑐𝟏𝟐 → Linha 1 da primeira matriz e coluna 2 da segunda matriz;

𝑐𝟏𝟑 → Linha 1 da primeira matriz e coluna 3 da segunda matriz;

𝑐𝟏𝟒 → Linha 1 da primeira matriz e coluna 4 da segunda matriz;

𝑐𝟐𝟏 → Linha 2 da primeira matriz e coluna 1 da segunda matriz;

𝑐𝟐𝟐 → Linha 2 da primeira matriz e coluna 2 da segunda matriz;

𝑐𝟐𝟑 → Linha 2 da primeira matriz e coluna 3 da segunda matriz;

𝑐𝟐𝟒 → Linha 2 da primeira matriz e coluna 4 da segunda matriz.

Na hora da prova, ao se deparar com o seguinte produto:

[𝟑
𝟐
𝟏
𝟏
𝟑
𝟑] × [

𝟏𝟎𝟎
𝟐𝟎𝟎
𝟒𝟓𝟎
𝟐𝟎𝟎
𝟒𝟎𝟎
𝟏𝟓𝟎
𝟏𝟓𝟎
𝟒𝟓𝟎
𝟐𝟓𝟎
𝟑𝟎𝟎
𝟏𝟎𝟎
𝟕𝟎𝟎

]

Você deve realizar as contas assim:

= [( 𝟑. 𝟏𝟎𝟎+ 𝟐. 𝟒𝟎𝟎+ 𝟏. 𝟐𝟓𝟎)
(𝟑. 𝟐𝟎𝟎+ 𝟐. 𝟏𝟓𝟎+ 𝟏. 𝟑𝟎𝟎)
(𝟑. 𝟒𝟓𝟎+ 𝟐. 𝟏𝟓𝟎+ 𝟏. 𝟏𝟎𝟎)
(𝟑. 𝟐𝟎𝟎+ 𝟐. 𝟒𝟓𝟎+ 𝟏. 𝟕𝟎𝟎)
(𝟏. 𝟏𝟎𝟎+ 𝟑. 𝟒𝟎𝟎+ 𝟑. 𝟐𝟓𝟎)
(𝟏. 𝟐𝟎𝟎+ 𝟑. 𝟏𝟓𝟎+ 𝟑. 𝟑𝟎𝟎)
(𝟏. 𝟒𝟓𝟎+ 𝟑. 𝟏𝟓𝟎+ 𝟑. 𝟏𝟎𝟎 )
(𝟏. 𝟐𝟎𝟎+ 𝟑. 𝟒𝟓𝟎+ 𝟑. 𝟕𝟎𝟎)]

= [1350
1200
1750
2200
2050
1550
1200
3650]

(MPE SC/2022) Seja 𝐴= [2
1
3
1].

A soma dos elementos da matriz 𝐴2 é:

a) 10;

b) 12;

c) 15;

d) 23;

e) 30.

Comentários:

Note que a matriz 𝐴2 é:

𝐴2 = 𝐴× 𝐴

= [𝟐
𝟏
𝟑
𝟏] × [𝟐
𝟏
𝟑
𝟏]

= [𝟐. 𝟐+ 𝟏. 𝟑
𝟐. 𝟏+ 𝟏. 𝟏
𝟑. 𝟐+ 𝟏. 𝟑
𝟑. 𝟏+ 𝟏. 𝟏]

= [7
3
9
4]

Logo, a soma dos elementos da matriz 𝐴2 é:

7 + 3 + 9 + 4

= 23

Gabarito: Letra D.

(Pref. SJC/2019) Sobre as matrizes 𝐴𝑚×𝑛 e 𝐵𝑝 × 𝑞 é correto afirmar que existe a operação:

a) A + B, se n = p

b) B – A, se n = p

c) A · B, se m = q

d) B · A, se m = q

e) A ÷ B, se n = p

Comentários:

Vamos analisar cada alternativa.

a) ERRADO. Temos a soma das duas matrizes, que só é possível se elas apresentarem a mesma dimensão.
Para tanto, deveríamos ter 𝒎= 𝒑 e 𝒏= 𝒒.

b) ERRADO. Temos uma subtração de matrizes, que só é possível se elas apresentarem a mesma dimensão.
Para tanto, deveríamos ter 𝒎= 𝒑 e 𝒏= 𝒒.

c) ERRADO. Temos uma multiplicação de matrizes, que só é possível se o número de colunas da primeira (𝑛)
for igual ao número de linhas da segunda (𝑝). Para tanto, deveríamos ter 𝒏= 𝒑.

d) CERTO. Temos uma multiplicação de matrizes, que só é possível se o número de colunas da primeira (𝑞)
for igual ao número de linhas da segunda (𝑚). Esse é o caso apresentado na alternativa, em que 𝒎= 𝒒.

e) ERRADO. Não existe divisão de matrizes.

Gabarito: Letra D.

(Pref. Dois Córregos/2019) O produto das matrizes [1
6] e [
], nessa ordem

a) não existe, pois elas têm os números de linhas diferentes, assim como os números de colunas.

b) não existe, pois o número de linhas da primeira matriz do produto é diferente do número de colunas da
segunda matriz.

c) existe, e é igual a [0
4
4
0].

d) existe, e é igual a [10
4
4
10].

e) existe, e é igual a [10
0
0
10].

Comentários:

Lembre-se que, multiplicar duas matrizes, devemos seguir os seguintes passos:

1. Verificar se o número de colunas da primeira matriz é igual ao número de linhas da segunda. Se essa
igualdade não se verificar, não é possível realizar o produto das matrizes.

2. Obter o esquema geral da matriz-produto, que apresenta a seguinte dimensão:

Número de linhas da primeira × Número de colunas da segunda

3. Obter os elementos da matriz resultante a partir das linhas da primeira matriz e das colunas da segunda
matriz.

Note que a primeira matriz apresenta dimensão 𝟐× 𝟑, e a segunda matriz apresenta dimensão 𝟑× 𝟐. Isso
significa que:

1. O número de colunas da primeira matriz (𝟑) é igual ao número de linhas da segunda (𝟑) e, portanto, o
produto existe.

2. A matriz-produto apresenta dimensão 𝟐× 𝟐.

Temos, então, que a matriz-produto apresenta o seguinte esquema geral:

[( )
( )
( )
( )]

Vamos agora para o terceiro passo:

3. Obter os elementos da matriz resultante a partir das linhas da primeira matriz e das colunas da segunda
matriz.

[𝟏
𝟓
𝟑
𝟒
𝟐
𝟔] × [

𝟎
𝟏
𝟐
𝟎
𝟎
𝟏

]

= [( 𝟏. 𝟎+ 𝟓. 𝟐+ 𝟑. 𝟎)
( 𝟏. 𝟏+ 𝟓. 𝟎+ 𝟑. 𝟏)
( 𝟒. 𝟎+ 𝟐. 𝟐+ 𝟔. 𝟎 )
( 𝟒. 𝟏+ 𝟐. 𝟎+ 𝟔. 𝟏)]

= [10
4
10]

Gabarito: Letra D.

### Propriedades da multiplicação de matrizes

#### A propriedade comutativa não vale para matrizes

Antes de apresentarmos as propriedades da multiplicação de matrizes, vamos mostrar uma propriedade que
não pode ser utilizada para matrizes.

Na álgebra comum, a propriedade comutativa para a multiplicação de números nos diz que "a ordem dos
fatores não altera o produto". Isso significa que:

150 × 311 = 311 × 150

Para o caso das matrizes, essa propriedade não ocorre. O produto da matriz 𝐴 pela matriz 𝐵 é diferente do
produto da matriz 𝐵 pela matriz 𝐴 (a não ser que a igualdade ocorra por uma grande coincidência). Isso
significa que:

𝐴𝐵≠𝐵𝐴

Perceba que em alguns casos o produto 𝑨𝑩 existe e o produto 𝑩𝑨 não existe.

Considere a matriz 𝐴2×3 de ordem 2 × 3 e a matriz 𝐵3×4 de ordem 3 × 4.

Note que o produto 𝑨𝑩 existe, pois o número de colunas de 𝐴 é igual ao número de linhas
de 𝐵.

Por outro lado, o produto 𝑩𝑨 não é possível, pois o número de colunas de 𝐵 não é igual
ao número de linhas de 𝐴.

#### Propriedade associativa

Propriedade associativa entre matrizes

Na álgebra comum, a propriedade associativa para a multiplicação de números nos diz que podemos agrupar
números que estão sendo multiplicados da forma que nos for conveniente.

Por exemplo, ao realizar a multiplicação 2 × 3 × 5, podemos realizar de duas maneiras:

-
(2 × 3) × 5; ou
-
2 × (3 × 5).

Isso significa que:

(2 × 3) × 5 = 2 × (3 × 5)

Para a multiplicação de matrizes, temos a mesma propriedade.

Para o caso em que é possível o produto das matrizes 𝑨, 𝑩 e 𝑪, nessa ordem, podemos realizar o produto
𝐴𝐵𝐶 de duas formas:

- Realizar o produto 𝐴𝐵 e depois multiplicar pela matriz 𝐶; ou
- Realizar o produto 𝐵𝐶 e depois realizar o produto de 𝐴 com o resultado 𝐵𝐶.

Em linguagem matemática, temos:

(𝐴𝐵)𝐶= 𝐴(𝐵𝐶)

Propriedade associativa entre matrizes e um número real

Se 𝛼 for um número real e 𝐴 e 𝐵 forem matrizes em que o produto 𝐴𝐵 é possível, então:

𝛼(𝐴𝐵) = (𝛼𝐴)𝐵= 𝐴(𝛼𝐵)

Exemplo:

3(𝐴𝐵) = (3𝐴)𝐵= 𝐴(3𝐵)

#### Propriedade distributiva

Propriedade distributiva pela esquerda

Na álgebra comum, a propriedade distributiva pela esquerda ocorre quando realizamos a seguinte operação:

𝟐× (3 + 5) = 𝟐× 3 + 𝟐× 5

Temos a mesma propriedade quando realizamos a operação contrária, conhecida por "colocar o número em
evidência":

𝟐× 3 + 𝟐× 5 = 𝟐× (3 + 5)

Para matrizes, é válida a propriedade distributiva pela esquerda:

𝑨(𝐵+ 𝐶) = 𝑨𝐵+ 𝑨𝐶

A mesma propriedade ocorre quando "colocamos uma matriz em evidência":

𝑨𝐵+ 𝑨𝐶= 𝑨(𝐵+ 𝐶)

Propriedade distributiva pela direita

Na álgebra comum, a propriedade distributiva pela direita ocorre quando realizamos a seguinte operação:

(3 + 5) × 𝟐= 3 × 𝟐+ 5 × 𝟐

Temos a mesma propriedade quando realizamos a operação contrária, conhecida por "colocar o número em
evidência":

3 × 𝟐+ 5 × 𝟐= (3 + 5) × 𝟐

Para matrizes, é válida a propriedade distributiva pela direita:

(𝐵+ 𝐶)𝑨= 𝐵𝑨+ 𝐶𝑨

A mesma propriedade ocorre quando "colocamos uma matriz em evidência":

𝐵𝑨+ 𝐶𝑨= (𝐵+ 𝐶)𝑨

Vimos no tópico anterior que, para a álgebra, é válida a propriedade comutativa. Portanto,
2 pode comutar com (3 + 5):

Note, porém, que a multiplicação de matrizes não goza da propriedade comutativa.
Portanto, 𝐴 não comuta com (𝐵+ 𝐶):

Isso porque 𝑨(𝐵+ 𝐶) é igual a 𝑨𝐵+ 𝑨𝐶. Já (𝐵+ 𝐶)𝑨 é igual a 𝐵𝑨+ 𝐶𝑨.

#### Elemento neutro da multiplicação de matrizes

Quanto temos uma matriz quadrada de ordem 𝑛 (𝐴𝑛×𝑛), a multiplicação dessa matriz pela matriz identidade
de ordem 𝑛 (𝐼𝑛) corresponde à própria matriz original:

𝑨𝑰= 𝑰𝑨= 𝑨

Exemplo:

[

𝟑
𝟕
𝟐
𝟓
𝟒
𝟏
𝟑
𝟏
𝟒

] × [

𝟏
𝟎
𝟎
𝟎
𝟏
𝟎
𝟎
𝟎
𝟏

] = [

𝟑
𝟕
𝟐
𝟓
𝟒
𝟏
𝟑
𝟏
𝟒

]

[

𝟏
𝟎
𝟎
𝟎
𝟏
𝟎
𝟎
𝟎
𝟏

] × [

𝟑
𝟕
𝟐
𝟓
𝟒
𝟏
𝟑
𝟏
𝟒

] = [

𝟑
𝟕
𝟐
𝟓
𝟒
𝟏
𝟑
𝟏
𝟒

]

### Traço de uma matriz quadrada

O traço de uma matriz quadrada é a soma dos elementos da sua diagonal principal. Se 𝐴 é uma matriz
quadrada, então o seu traço é representado por 𝑡𝑟(𝐴).

Exemplo:

𝐴= [

𝟑
7
2
5
𝟒
1
3
1
𝟒

]

𝑡𝑟(𝐴) = 𝟑+ 𝟒+ 𝟒= 11

### Propriedades do traço de uma matriz

Considere as matrizes quadradas de mesma ordem 𝐴 e 𝐵 e o número real 𝛼. O traço de uma matriz apresenta
as seguintes propriedades:

-
𝑡𝑟 (𝐴+ 𝐵) = 𝑡𝑟(𝐴) + 𝑡𝑟(𝐵)
-
𝑡𝑟 (𝐴−𝐵) = 𝑡𝑟(𝐴) −𝑡𝑟(𝐵)
-
𝑡𝑟(𝛼𝐴) = 𝛼× 𝑡𝑟(𝐴)
- 𝑡𝑟 (𝐴𝐵) = 𝑡𝑟(𝐵𝐴)

### Matriz oposta

Dada uma matriz 𝐴, a sua matriz oposta é −𝑨.

Exemplo:

𝐴= [

−7
−5
−4

]

Oposta de A:

−𝑨= [

−3
−(−7)
−6
−(−5)
−3
−1
−3
−1
−(−4)

]

−𝑨= [

−3
7
−6
5
−3
−1
−3
−1
4
]

### Matriz transposta, simétrica e antissimétrica

### Matriz transposta

A transposta de uma matriz 𝐴 corresponde à matriz cujas linhas foram transformadas em colunas.

- A primeira linha de 𝐴 se torna a primeira coluna de 𝐴𝑡;
- A segunda linha de 𝐴 se torna a segunda coluna de 𝐴𝑡;
- A terceira linha de 𝐴 se torna a terceira coluna de 𝐴𝑡;
- Etc.

A representação da matriz transposta é simbolizada por 𝐴𝑇 ou 𝐴𝑡. Exemplos:

𝐴= [ 𝟎
𝟏
𝟒
−𝟗
𝟓
𝟏] → 𝐴𝑡= [

𝟎
−𝟗
𝟏
𝟓
𝟒
𝟏

]

𝐴= [

𝟑
−𝟕
𝟔
−𝟓
𝟑
𝟏
𝟑
𝟏
−𝟒

] →𝐴𝑡= [

𝟑
−𝟓
𝟑
−𝟕
𝟑
𝟏
𝟔
𝟏
−𝟒

]

### Propriedades da matriz transposta

A matriz transposta goza das seguintes propriedades:

- A transposta da transposta corresponde à matriz original:

(𝐴𝑡)𝑡= 𝐴

- Transposta do produto de uma matriz por um número real:

(𝛼𝐴)𝑡= 𝛼𝐴𝑡

- Transposta do produto de matrizes:

(𝑨𝑩)𝑡= 𝑩𝑡𝑨𝑡

- Transposta da soma:

(𝐴+ 𝐵)𝑡= 𝐴𝑡+ 𝐵𝑡

### Matriz simétrica

Uma matriz 𝐴 é dita simétrica quando ela é igual a sua transposta:

𝐴= 𝐴𝑡

Exemplo:

𝐴= [

𝟑
−𝟓
𝟑
−𝟓
𝟑
𝟏
𝟑
𝟏
−𝟒

] →𝐴𝑡= [

𝟑
−𝟓
𝟑
−𝟓
𝟑
𝟏
𝟑
𝟏
−𝟒

]

Uma matriz é simétrica quando:

- É quadrada; e
- Os elementos simétricos com relação à diagonal principal são iguais.

Veja mais atentamente o exemplo anterior:

### Matriz antissimétrica

Uma matriz 𝐴 é dita antissimétrica quando:

𝐴𝑡= −𝐴

Exemplo:

𝐴= [

𝟎
𝟓
−𝟑
−𝟓
𝟎
𝟏
𝟑
−𝟏
𝟎

] →𝐴𝑡= [

𝟎
−𝟓
𝟑
𝟓
𝟎
−𝟏
−𝟑
𝟏
𝟎

] = −𝐴

Uma matriz é antissimétrica quando:

- É quadrada;
- A diagonal principal é nula; e
- Os elementos simétricos com relação à diagonal principal são opostos.

Veja mais atentamente o exemplo anterior:

(SEDF/2017) Considerando a matriz 𝐴= [

2
0
10
4
10
20
0
2
40
], julgue o próximo item.

Se 𝐵= [

0
𝑥
−7
1
0
𝑧
𝑦
10
0
] e a matriz 𝐴+ 𝐵 for simétrica, então 𝑥+ 𝑦+ 𝑧= 0.

Comentários:

Primeiramente, vamos determinar 𝐴+ 𝐵.

𝐴+ 𝐵= [

2
0
10
4
10
20
0
2
40
] + [

0
𝑥
−7
1
0
𝑧
𝑦
10
0
]

= [

2 + 0
0 + 𝑥
10 −7
4 + 1
10 + 0
20 + 𝑧
0 + 𝑦
2 + 10
40 + 0
]

= [

2
𝑥
3
5
10
20 + 𝑧
𝑦
12
40
]

Para uma matriz ser simétrica, ela deve ser quadrada e os elementos simétricos com relação à diagonal
principal devem ser iguais.

Observe novamente a matriz 𝐴+ 𝐵:

[

2
𝒙
𝟑
𝟓
10
𝟐𝟎+ 𝒛
𝒚
𝟏𝟐
40
]

Para ela ser simétrica, devemos ter:

{

𝒙= 𝟓
𝒚= 𝟑
𝟐𝟎+ 𝒛= 𝟏𝟐

→{

𝒙= 𝟓
𝒚= 𝟑
𝒛= −𝟖

Logo, 𝒙+ 𝒚+ 𝑧= 𝟓+ 𝟑+ (−𝟖) = 0.

Gabarito: CERTO.

(AFRFB/2014) A matriz quadrada 𝐴, definida genericamente por 𝐴 = 𝑎𝑖𝑗, é dada por 𝑎11 = 0; 𝑎12 = − 4;
𝑎13 = 2; 𝑎21 = 𝑥; 𝑎22 = 0; 𝑎23 = (1 − 𝑧); 𝑎31 = 𝑦; 𝑎32 = 2𝑧 e, por último, 𝑎33 = 0. Desse modo, para
que a matriz 𝐴 seja uma matriz antissimétrica, os valores de 𝑎21, 𝑎23, 𝑎31 e 𝑎32 deverão ser, respectivamente,
iguais a:

a) 4; −2; −2; −2.

b) 4; −2; 2; −2.

c) 4; 2; −2; −2.

d) −4; −2; 2; −2.

e) −4; −2; −2; −2.

Comentários:

Vamos montar a matriz em questão.

𝐴= [

𝑎11
𝑎12
𝑎13
𝑎21
𝑎22
𝑎23
𝑎31
𝑎32
𝑎33

]

𝐴= [

0
−4
2
𝑥
0
1 −𝑧
𝑦
2𝑧
0
]

Para uma matriz ser antissimétrica, ela deve ser quadrada, a diagonal principal deve ser nula, e os elementos
simétricos com relação à diagonal principal devem ser opostos.

Observe novamente a matriz 𝐴:

[

0
−𝟒
𝟐
𝒙
0
𝟏−𝒛
𝒚
𝟐𝒛
0
]

Para ela ser antissimétrica, devemos ter:

{

𝒙= −(−𝟒)

𝒚= −𝟐
𝟐𝒛= −(𝟏−𝒛)

Portanto, 𝒙= 𝟒, 𝒚= −𝟐, e:

2𝑧= −(1 −𝑧)

2𝑧= −1 + 𝑧

2𝑧−𝑧= −1

𝒛= −𝟏

Obtidos os valores de 𝑥, 𝑦 e 𝑧, temos a seguinte matriz 𝐴:

𝐴= [

−4
𝑥
1 −𝑧
𝑦
2𝑧
]

𝐴= [

−4
−2
0
]

Logo, os valores de 𝒂𝟐𝟏, 𝒂𝟐𝟑, 𝑎31 e 𝑎32 deverão ser, respectivamente, iguais a 𝟒, 𝟐, −2, −2.

Gabarito: Letra C.

### Matriz inversa

### Definição

A inversa de uma matriz 𝑨 (notação: 𝐴−1) é aquela matriz que, quando multiplicada pela matriz 𝐴, tem
como resultado a matriz identidade:

𝐴−1𝐴= 𝐼𝑛

Além disso, como uma matriz comuta com a sua inversa, podemos dizer que a matriz 𝐴, quando multiplicada
pela sua inversa 𝐴−1, tem como resultado a matriz identidade:

𝐴𝐴−1 = 𝐼𝑛

𝐴−1𝐴= 𝐴𝐴−1 = 𝐼𝑛

Uma matriz que não possui inversa é denominada singular.

A não possui inversa  A é singular

Caso o assunto determinantes faça parte do seu edital, veremos que uma matriz é inversível (possui inversa)
quando o seu determinante é diferente de zero. Caso contrário, isto é, caso a matriz tenha determinante
zero, ela é singular (não possui inversa).

Vamos a um exemplo que pode ser cobrado em prova:

Seja 𝑨= [𝟏
𝟑
𝟎
𝟐]. Determine a matriz inversa de A.

Considere, genericamente, que 𝐴−1 = [𝑎
𝑏
𝑐
𝑑]. Nesse caso:

𝐴𝐴−1 = 𝐼2

[1
3
0
2] × [𝑎
𝑏
𝑐
𝑑] = [1
0
0
1]

Realizando o produto de matrizes, temos:

[1𝑎+ 3𝑐
1𝑏+ 3𝑑
0𝑎+ 2𝑐
0𝑏+ 2𝑑] = [1
0
0
1]

[1𝑎+ 3𝑐
1𝑏+ 3𝑑
2𝑐
2𝑑
] = [1
0
0
1]

Como as duas matrizes são iguais, seus elementos são iguais:

{

1𝑎+ 3𝑐= 1
1𝑏+ 3𝑑= 0
2𝑐= 0
2𝑑= 1

→

{

1𝑎+ 3𝑐= 1

1𝑏+ 3𝑑= 0
𝒄= 𝟎

𝒅= 𝟏

𝟐

Sabemos que 𝑐= 0. Temos que:

1𝑎+ 3𝑐= 1

1𝑎+ 0 = 1

𝒂= 𝟏

Sabemos que 𝑑=

1

2. Temos que:

1𝑏+ 3𝑑= 0

𝑏= −3𝑑

𝒃= −𝟑

Portanto, a matriz inversa 𝐴−1 = [𝑎
𝑏
𝑐
𝑑] é dada por:

𝐴−1 = [1
−3/2
1/2 ]

Vamos resolver dois exercícios:

(ANPEC/2018) Classifique a afirmação abaixo segundo a sua veracidade:

Se uma matriz tem inversa, então ela é singular.

Comentários:

Uma matriz é singular quando ela não possui inversa.

Gabarito: ERRADO.

(MPE SP/2019) A inversa da matriz [2
5
1
3] é:

a) [0,5
0,2
1
0,33]

b) [ 3
−5
−1
2 ]

c) [3
5
1
2]

d) [ 3
−1
−5
2 ]

e) [0,33
0,2
1
0,5]

Comentários:

Considere, genericamente, que 𝐴−1 = [𝑎
𝑏
𝑐
𝑑]. Nesse caso:

𝐴𝐴−1 = 𝐼2

[2
5
1
3] × [𝑎
𝑏
𝑐
𝑑] = [1
0
0
1]

Realizando o produto de matrizes, temos:

[2𝑎+ 5𝑐
2𝑏+ 5𝑑
1𝑎+ 3𝑐
1𝑏+ 3𝑑] = [1
0
0
1]

Como as duas matrizes são iguais, seus elementos são iguais:

{

2𝑎+ 5𝑐= 1
2𝑏+ 5𝑑= 0
1𝑎+ 3𝑐= 0
1𝑏+ 3𝑑= 1

Multiplicando a terceira equação por −2 e somando com a primeira, temos:

{

2𝑎+ 5𝑐= 1
−2𝑎−6𝑐= 0

−𝑐= 1

Portanto, 𝒄= −𝟏.

Da terceira equação, temos:

𝑎+ 3𝑐= 0

𝑎−3 = 0

𝒂= 𝟑

Multiplicando a quarta equação por −2 e somando com a segunda, temos:

{

2𝑏+ 5𝑑= 0
−2𝑏−6𝑑= −2

−𝑑= −2

Portanto, 𝒅= 𝟐.

Da quarta equação, temos:

1𝑏+ 3𝑑= 1

𝑏+ 6 = 1

𝒃= −𝟓

Logo, a matriz inversa 𝐴−1 = [𝒂
𝒃
𝒄
𝒅] é:

𝐴−1 = [ 𝟑
−𝟓
−𝟏
𝟐]

Gabarito: Letra B.

### Propriedades da matriz inversa

#### Inversa da inversa

A matriz inversa da inversa de 𝐴 é a própria matriz 𝐴:

(𝐴−1)−1 = 𝐴

#### Inversa da transposta × Transposta da inversa

A matriz inversa da transposta de 𝐴 é igual a matriz transposta da inversa de 𝐴:

(𝐴−1)𝑡= (𝐴𝑡)−1

#### Inversa do produto de uma matriz por um número real

Considerando uma matriz 𝐴 inversível e um número real 𝛼, temos:

(𝛼𝐴)−1 = 1

𝛼𝐴−1

Exemplo:

(3𝐴)−1 = 1

3 𝐴−1

#### Inversa do produto de matrizes

Considerando duas matrizes 𝐴 e 𝐵 inversíveis, a inversa do produto 𝐴𝐵 é:

(𝑨𝑩)−1 = 𝑩−1𝑨−1

Para mais termos, segue-se a mesma lógica:

(𝑨𝑩𝑪)−1 = 𝑪−1𝑩−1𝑨−1

### Matriz inversa como análogo da divisão

Pessoal, a primeira coisa que devemos saber é que não existe a operação de divisão para matrizes. Feita
essa observação, vamos entender o porquê de a matriz inversa ser o análogo da divisão.

Considere que, em um problema de álgebra, você chegue na seguinte equação:

3𝑥= 9

O que você faz para obter o valor de 𝑥? Ao "jogar o 3 para o outro lado da equação", na verdade você está
dividindo ambos os lados da equação por 3:

3𝑥
3 = 9
3

𝑥= 3

Agora vamos para um problema de matrizes. Suponha que você tenha as matrizes quadradas 𝐴 e 𝐵 e que
você queira determinar uma matriz 𝑋 em que:

𝑨𝑿= 𝑩

Note que não podemos dividir ambos os lados da equação matricial por 𝑨, pois não existe a operação de
divisão para matrizes. Observe, porém, que podemos multiplicar ambos os lados da equação por 𝑨−𝟏 pela
esquerda (caso a matriz 𝐴 seja inversível, isto é, caso ela não seja singular). Assim:

𝑨−𝟏𝑨𝑿= 𝑨−𝟏𝑩

Note que, por definição de matriz inversa, 𝐴−1𝐴= 𝐼. Portanto:

𝐼𝑋= 𝐴−1𝐵

A matriz identidade 𝐼 é o elemento neutro da multiplicação de matrizes e, por isso, 𝐼𝑋= 𝑋. Logo, ficamos
com:

𝑋= 𝐴−1𝐵

Isso significa que a matriz 𝑋 que queremos determinar é o produto da inversa de 𝐴 pela matriz 𝐵.

(SEFAZ MG/2005) 𝐴, 𝐵 e 𝐶 são matrizes quadradas de mesma ordem, não singulares e diferentes da matriz
identidade. A matriz 𝐶 é igual ao produto 𝐴 𝑍 𝐵, onde 𝑍 é também uma matriz quadrada. A matriz 𝑍,
portanto, é igual a:

a) 𝐴−1𝐵𝐶

b) 𝐴𝐶−1𝐵−1

c) 𝐴−1 𝐶 𝐵−1

d) 𝐴 𝐵 𝐶−1

e) 𝐶−1 𝐵−1 𝐴−1

Comentários:

Note que todas as matrizes são quadradas, de mesma ordem e admitem inversa (pois não são singulares).

A matriz 𝐶 é igual ao produto 𝐴𝑍𝐵. Logo:

𝐴𝑍𝐵= 𝐶

Ao multiplicar ambos os lados da equação por 𝐴−1 pela esquerda, temos:

𝑨−𝟏𝐴𝑍𝐵= 𝑨−𝟏𝐶

(𝑨−𝟏𝐴)𝑍𝐵= 𝑨−𝟏𝐶

(𝐼)𝑍𝐵= 𝑨−𝟏𝐶

𝑍𝐵= 𝑨−𝟏𝐶

Ao multiplicar ambos os lados da equação por 𝐵−1 pela direita, temos:

𝑍𝐵𝑩−𝟏= 𝑨−𝟏𝐶𝑩−𝟏

𝑍(𝐵𝑩−𝟏) = 𝑨−𝟏𝐶𝑩−𝟏

𝑍(𝐼) = 𝑨−𝟏𝐶𝑩−𝟏

𝑍= 𝑨−𝟏𝐶𝑩−𝟏

Portanto, a matriz 𝑍 é igual a 𝐴−1𝐶𝐵−1.

Gabarito: Letra C.

(Pref Paulínia/2021) Considere a equação matricial 𝑨𝟐𝑿−𝟏𝑩−𝟏= 𝑨𝑪, onde 𝑨, 𝑩, 𝑪 e 𝑿 são matrizes
quadradas invertíveis e de mesma ordem.

A solução 𝑋 é igual a

a) 𝐴𝐵−1𝐶−1

b) 𝐴𝐶−1𝐶−1

c) 𝐶𝐴−1𝐵

d) 𝐴−1𝐵𝐶

e) 𝐵−1𝐶−1𝐴

Comentários:

Sabemos que todas as matrizes quadradas são inversíveis e de mesma ordem. Note que:

𝐴2𝑋−1𝐵−1 = 𝐴𝐶

𝐴𝐴𝑋−1𝐵−1 = 𝐴𝐶

Ao multiplicar ambos os lados da equação por 𝑨−𝟏, pela esquerda, temos:

𝑨−𝟏𝐴𝐴𝑋−1𝐵−1 = 𝑨−𝟏𝐴𝐶

(𝐴−1𝐴)𝐴𝑋−1𝐵−1 = (𝐴−1𝐴)𝐶

(𝐼)𝐴𝑋−1𝐵−1 = (𝐼)𝐶

𝐴𝑋−1𝐵−1 = 𝐶

Ao multiplicar ambos os lados da equação novamente por 𝑨−𝟏, pela esquerda, temos:

𝑨−𝟏𝐴𝑋−1𝐵−1 = 𝑨−𝟏𝐶

(𝐴−1𝐴)𝑋−1𝐵−1 = 𝐴−1𝐶

(𝐼)𝑋−1𝐵−1 = 𝐴−1𝐶

𝑋−1𝐵−1 = 𝐴−1𝐶

Ao multiplicar ambos os lados da equação por 𝑿, pela esquerda, temos:

𝑿𝑋−1𝐵−1 = 𝑿𝐴−1𝐶

(𝑋𝑋−1)𝐵−1 = 𝑋𝐴−1𝐶

(𝐼)𝐵−1 = 𝑋𝐴−1𝐶

𝐵−1 = 𝑋𝐴−1𝐶

Logo:

𝑋𝐴−1𝐶= 𝐵−1

Ao multiplicar ambos os lados da equação por 𝑪−𝟏, pela direita, temos:

𝑋𝐴−1𝐶 𝑪−𝟏= 𝐵−1 𝑪−𝟏

𝑋𝐴−1(𝐶 𝐶−1) = 𝐵−1 𝐶−1

𝑋𝐴−1(𝐼) = 𝐵−1 𝐶−1

𝑋𝐴−1 = 𝐵−1 𝐶−1

Finalmente, ao multiplicar ambos os lados da equação por 𝑨, pela direita, temos:

𝑋𝐴−1𝑨= 𝐵−1 𝐶−1𝑨

𝑋(𝐴−1𝐴) = 𝐵−1 𝐶−1𝐴

𝑋(𝐼) = 𝐵−1 𝐶−1𝐴

𝑿= 𝑩−𝟏 𝑪−𝟏𝑨

Gabarito: Letra E.

### Matriz ortogonal

Uma matriz 𝐴 é dita ortogonal quando a sua inversa é igual a sua transposta:

𝐴 é ortogonal  𝐴−1 = 𝐴𝑡

Sabemos que, pela definição de matriz inversa:

𝐴−1𝐴= 𝐴𝐴−1 = 𝐼

Quando a matriz 𝐴 é ortogonal, uma vez que 𝑨−𝟏= 𝑨𝒕, temos:

𝐴𝑡𝐴= 𝐴𝐴𝑡= 𝐼

(TRANSPETRO/2018) A inversa de uma matriz ortogonal é igual à sua

A) adjunta

B) adjunta transposta

c) cofatora

d) cofatora transposta

e) transposta

Comentários:

Uma matriz é ortogonal quando a sua inversa é igual a sua transposta.

Gabarito: Letra E.

## DETERMINANTES

Um determinante é um número calculado a partir de uma matriz quadrada. Representado por duas
barras "| |".

O determinante de uma matriz de ordem 1 é o próprio elemento da matriz.

𝐴= [𝒂
𝒃
𝒄
𝒅] → det 𝐴= 𝒂𝒅−𝒃𝒄

(Produto dos elementos da diagonal principal) −(Produto dos elementos da diagonal secundária)

Regra de Sarrus

[

𝑎11
𝑎12
𝑎13
𝑎21
𝑎22
𝑎23
𝑎31
𝑎32
𝑎33

]

𝑎11
𝑎12
𝑎21
𝑎22
𝑎31
𝑎32

Parte Negativa Parte Positiva
𝐝𝐞𝐭𝑨= [𝒂𝟏𝟏𝒂𝟐𝟐𝒂𝟑𝟑+ 𝒂𝟏𝟐𝒂𝟐𝟑𝒂𝟑𝟏+ 𝒂𝟏𝟑𝒂𝟐𝟏𝒂𝟑𝟐] −[𝒂𝟏𝟑𝒂𝟐𝟐𝒂𝟑𝟏+ 𝒂𝟏𝟏𝒂𝟐𝟑𝒂𝟑𝟐+ 𝒂𝟏𝟐𝒂𝟐𝟏𝒂𝟑𝟑]

Menor complementar
O menor complementar de um elemento 𝑎𝑖𝑗 de uma matriz 𝐴 é o determinante 𝑫𝒊𝒋 da matriz obtida
eliminando-se a linha 𝑖 e a coluna 𝑗 da matriz 𝐴.

Cofator ou complemento algébrico
O cofator do elemento 𝑎𝑖𝑗 de uma matriz 𝐴 é um número representado por 𝐴𝑖𝑗 calculado do seguinte
modo:

𝐴𝒊𝒋= (−1)𝒊+𝒋𝐷𝒊𝒋

Teorema de Laplace
O determinante de uma matriz 𝐴 é a soma dos produtos dos elementos de uma fila qualquer (linha ou
coluna) pelos seus respectivos cofatores.
1. Escolher uma fila (linha ou coluna), preferencialmente a que tiver mais zeros;
2. Realizar o produto de cada elemento da fila pelo seu respectivo cofator; e
3. Somar os produtos obtidos.

Determinantes

Noção básica sobre determinantes

Determinante de matriz de ordem 3

Determinante de matriz de ordem 1

Determinante de matriz de ordem 2

Obtenção do determinante de matrizes de qualquer ordem

- Teorema de Binet: det(𝐴𝐵) = det 𝐴× det 𝐵

- Determinante da matriz inversa: det 𝐴−1 =
det 𝐴

- Determinante da matriz transposta: det 𝐴𝑡= det 𝐴
- Multiplicação de uma fila por uma constante: ao multiplicar uma fila (linha ou coluna) de uma matriz
por uma constante 𝒌, o determinante dessa nova matriz também fica multiplicado por 𝒌.
- Multiplicação da matriz por uma constante: det(𝑘𝐴) = 𝑘𝑛det 𝐴
- Determinante de matriz triangular ou de matriz diagonal: o determinante é o produto dos elementos
da diagonal principal.
- Fila nula: uma matriz que apresenta uma fila (linha ou coluna) cujos elementos são todos zero
apresenta determinante zero.
- Filas paralelas iguais: uma matriz com filas paralelas iguais (linhas ou colunas) apresenta
determinante zero.
- Filas paralelas proporcionais: uma matriz com filas paralelas proporcionais (linhas ou colunas)
apresenta determinante zero.
- Troca de filas paralelas: ao trocarmos uma fila (linha ou coluna) de lugar com outra fila paralela, o
determinante muda de sinal.
- Combinação linear de filas: quando uma matriz apresenta uma fila (linha ou coluna) que é
combinação linear de outras filas, o seu determinante é zero.
Ao multiplicar uma fila por qualquer número e somar esse resultado a uma outra fila paralela
qualquer, o valor do determinante não se altera. Em outras palavras, podemos trocar uma fila
qualquer por uma combinação linear que contenha a fila original.
- Fazer com que o elemento 𝑎11 seja igual a 1;
- Zerar todos os elementos da primeira linha, à exceção de 𝒂𝟏𝟏, fazendo uso da primeira coluna;
- Feita a operação anterior, o determinante em questão é igual ao menor complementar 𝑫𝟏𝟏;
- Repita o processo, se necessário, para reduzir a ordem do determinante mais uma vez.

- Uma matriz quadrada de ordem 𝒏 é chamada de Matriz de Vandermonde quando suas colunas são
formadas por potências de mesma base, com o expoente variando de 0 até 𝒏−1.
- O determinante de uma matriz de Vandermonde é igual ao produto de todas as diferenças possíveis
entre seus elementos característicos (elementos da 2ª linha).

𝑽(𝒂𝟏, 𝒂𝟐, … , 𝒂𝒏) = (𝒂𝟐−𝒂𝟏)(𝒂𝟑−𝒂𝟏) … (𝒂𝒏−𝒂𝒏−𝟏).

A é inversível  det A ≠0

A é singular  det A = 0

𝐴= [𝒂
𝒃
𝒄
𝒅] → 𝐴−1 =

det 𝐴× [ 𝒅
−𝒃
−𝒄
𝒂]

Matriz inversa

Matriz de Vandermonde

Propriedades dos determinantes

Teorema de Jacobi

Regra de Chió

### Noção básica sobre determinantes

Pessoal, a aplicação prática de determinantes surge quando estudamos sistemas lineares, que será visto na
sequência, caso faça parte do seu edital.

Nesse momento, deve-se entender que um determinante é um número calculado a partir de uma matriz
quadrada.

Considere uma matriz 𝐴 dada por 𝐴= [ 4
3
−1
2]. Seu determinante, como veremos adiante, é o número 11.

A representação do determinante de 𝐴 pode ser feita de duas formas:

-
det 𝐴= 11; ou

-
| 4
3
−1
2| = 11.

Vimos na seção de matrizes que podemos representá-las tanto com colchetes "[ ]" quanto
com parênteses "( )". A matriz 𝑨, portanto, pode ser representada dessas duas formas:

𝐴= [ 4
3
−1
2] 𝐴= ( 4
3
−1
2)

Já o determinante da matriz 𝑨 é representado por duas barras "| |", e o seu cálculo
corresponde a um número.

det 𝐴= | 4
3
−1
2| = 11

### Determinante de matriz de ordem 1

Uma matriz quadrada de ordem 1 é uma matriz que apresenta uma única linha e uma única coluna.
Exemplo:

𝐴1×1 = [7]

O determinante de uma matriz de ordem 1 é o próprio elemento da matriz. Exemplos:

-
𝐴= [3] →det 𝐴= 3;

-
𝐵= [√5] →det 𝐵= √5;

-
𝐶= [−2] →det 𝐶= −2.

### Determinante de matriz de ordem 2

Para calcular o determinante de uma matriz quadrada de ordem 2, devemos realizar a seguinte operação:

(Produto dos elementos da

diagonal principal
) −(Produto dos elementos da

diagonal secundária
)

Considere a matriz de ordem 2 genérica, dada por 𝐴= [𝒂
𝒃
𝒄
𝒅]. Seu determinante é dado por:

det 𝐴= 𝒂𝒅−𝒃𝒄

Vamos a um exemplo numérico: 𝐴= [ 4
3
−1
2].

det 𝐴= [𝟒× 𝟐] −[𝟑× (−𝟏)]

= 8 −(−3)

= 11

(Pref. N Horizonte/2019) O número real que verifica se o valor do determinante da matriz [𝑥2
4
9
2𝑥] é igual

a 18 é:

a) 54.

b) 36.

c) 27.

d) 9.

e) 3.

Comentários:

O determinante da matriz em questão é dado pela seguinte operação:

(Produto dos elementos da diagonal principal) −(Produto dos elementos da diagonal secundária)

Para que o valor do determinante seja igual a 18, devemos ter:

(𝒙𝟐× 𝟐𝒙) −(𝟒× 𝟗) = 18

2𝑥3 −36 = 18

2𝑥3 = 54

𝑥3 = 27

𝑥3 = 33

𝑥= 3

Gabarito: Letra E.

### Determinante de matriz de ordem 3

Para calcular o determinante de uma matriz quadrada de ordem 3, vamos utilizar a regra de Sarrus.
Considere a matriz 𝐴:

𝐴= [

4
2
−2
3
−1
4
−5
−3
1

]

Para aplicar a regra de Sarrus, devemos repetir as duas primeiras colunas da matriz após a terceira coluna:

[

𝟒
𝟐
−2
𝟑
−𝟏
4
−𝟓
−𝟑
1

]

𝟒
𝟐
𝟑
−𝟏
−𝟓
−𝟑

Nesse momento, vamos dividir o cálculo em 2:

- Parte positiva;
- Parte negativa.

A parte positiva é obtida por meio das diagonais para a direita. Para obtê-la, multiplicamos os elementos
dessas diagonais e somamos os valores.

[

𝟒
𝟐
−𝟐
3
−𝟏
𝟒
−5
−3
𝟏

]

4
2
𝟑
−1
−𝟓
−𝟑

[𝟒. (−𝟏). 𝟏+ 𝟐. 𝟒. (−𝟓) + (−𝟐). 𝟑. (−𝟑)]

= [(−𝟒) + (−𝟒𝟎) + 𝟏𝟖]

= −𝟐𝟔

A parte negativa é obtida por meio das diagonais para a esquerda. Para obtê-la, multiplicamos os
elementos dessas diagonais e somamos os valores.

[

4
2
−𝟐
3
−𝟏
𝟒
−𝟓
−𝟑
𝟏

]

𝟒
𝟐
𝟑
−1
−5
−3

[(−𝟐). (−𝟏). (−𝟓) + 𝟒. 𝟒. (−𝟑) + 𝟐. 𝟑. 𝟏]

= [(−𝟏𝟎) + (−𝟒𝟖) + 𝟔]

= −𝟓𝟐

Para obter o determinante, tomamos a "parte positiva e subtraímos a parte negativa.

==5460==

det A = (𝐏𝐚𝐫𝐭𝐞 𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐚) −(𝐏𝐚𝐫𝐭𝐞 𝐧𝐞𝐠𝐚𝐭𝐢𝐯𝐚)

= (−𝟐𝟔) −(−𝟓𝟐)

= −26 + 52

= 𝟐𝟔

De modo genérico, temos a seguinte representação da regra de Sarrus:

Regra de Sarrus

[

𝑎11
𝑎12
𝑎13
𝑎21
𝑎22
𝑎23
𝑎31
𝑎32
𝑎33

]

𝑎11
𝑎12
𝑎21
𝑎22
𝑎31
𝑎32

Parte Negativa Parte Positiva

𝐝𝐞𝐭𝑨= [𝒂𝟏𝟏𝒂𝟐𝟐𝒂𝟑𝟑+ 𝒂𝟏𝟐𝒂𝟐𝟑𝒂𝟑𝟏+ 𝒂𝟏𝟑𝒂𝟐𝟏𝒂𝟑𝟐] −[𝒂𝟏𝟑𝒂𝟐𝟐𝒂𝟑𝟏+ 𝒂𝟏𝟏𝒂𝟐𝟑𝒂𝟑𝟐+ 𝒂𝟏𝟐𝒂𝟐𝟏𝒂𝟑𝟑]

(CRM PR/2014) Qual deve ser o valor de X para que o determinante seja 0,5?

|

1
3
5
2
𝑥
6
0
1
1
|

a) 0,5

b) 1

c) 1,5

d) 2

e) 2,5

Comentários:

Vamos aplicar a regra de Sarrus no determinante em questão. Primeiramente, devemos repetir as duas
primeiras colunas da matriz após a terceira coluna:

|

𝑥
|

𝑥

Em seguida devemos calcular a parte positiva e a parte negativa para, na sequência, realizar a subtração:

|

1
3
5
2
𝑥
6
0
1
1
|

1
3
2
𝑥
0
1

Parte Negativa Parte Positiva

[𝟏. 𝒙. 𝟏+ 𝟑. 𝟔. 𝟎+ 𝟓. 𝟐. 𝟏] −[𝟓. 𝒙. 𝟎+ 𝟏. 𝟔. 𝟏+ 𝟑. 𝟐. 𝟏]

= [𝑥+ 10] −[6 + 6]

= 𝑥−2

Portanto, o determinante em questão é 𝑥−2. O valor de 𝑥 para que o determinante seja igual a 0,5 é:

𝑥−2 = 0,5

𝑥= 2,5

Gabarito: Letra E.

### Obtenção do determinante de matrizes de qualquer ordem

Para que possamos calcular o determinante de matrizes de ordem superiores a 3, devemos compreender
primeiramente os conceitos de menor complementar e de cofator (ou complemento algébrico).

### Menor complementar

Considere uma matriz 𝐴 de ordem maior ou igual a 2.

O menor complementar de um elemento qualquer dessa matriz 𝐴 é o determinante 𝑫𝒊𝒋 da matriz
resultante ao se eliminar a linha e a coluna em que esse elemento se encontra.

Em outras palavras, o menor complementar de um elemento 𝑎𝑖𝑗 de uma matriz 𝐴 é o
determinante 𝑫𝒊𝒋 da matriz obtida eliminando-se a linha 𝑖 e a coluna 𝑗 da matriz 𝐴.

Professor, não entendi nada!

Calma, amigo. Essas coisas só se entendem com um exemplo mesmo!

Considere a seguinte matriz 𝐴:

𝐴= [

−2
3
−1
4
−5
−3
1

]

Para calcular o menor complementar do elemento 𝑎12, isto é, para obter calcular o determinante 𝑫𝟏𝟐,
precisamos eliminar a linha e a coluna do elemento 𝑎12.

Note que 𝑎12 = 2, e esse elemento está na primeira linha e na segunda coluna da matriz 𝐴.

𝐴= [

4
2
−2
𝟑
−1
𝟒
−𝟓
−3
𝟏

]

Logo, o determinante 𝐷12 correspondente ao menor complementar de 𝑎12 é:

𝐷12 = | 𝟑
𝟒
−𝟓
𝟏|

𝐷12 = [𝟑× 𝟏] −[𝟒× (−𝟓)]

𝐷12 = 3 −(−20)

𝐷12 = 23

(MPOG/2005) O menor complementar de um elemento genérico 𝑥𝑖𝑗 de uma matriz 𝑋 é o determinante
que se obtém suprimindo a linha e a coluna em que esse elemento se localiza. Uma matriz 𝑌 = 𝑦𝑖𝑗 , de
terceira ordem, é a matriz resultante da soma das matrizes 𝐴 = (𝑎𝑖𝑗) e 𝐵 = (𝑏𝑖𝑗). Sabendo-se que (𝑎𝑖𝑗)
= (𝑖+ 𝑗)2 e que 𝑏𝑖𝑗 = 𝑖2 , então o menor complementar do elemento 𝑦23 é igual a:

A) 0

b) −8

c) −80

d) 8

e) 80

Comentários:

A matriz 𝑌 é a soma as matrizes 𝐴 e 𝐵.

Os elementos da matriz 𝐴 são dados por 𝑎𝑖𝑗= (𝑖+ 𝑗)2. Logo:

𝑎11 = (1 + 1)2 = 4 ; 𝑎12 = (1 + 2)2 = 9 ; 𝑎13 = (1 + 3)2 = 16

𝑎21 = (2 + 1)2 = 9 ; 𝑎22 = (2 + 2)2 = 16 ; 𝑎23 = (2 + 3)2 = 25

𝑎31 = (3 + 1)2 = 16 ; 𝑎32 = (3 + 2)2 = 25 ; 𝑎33 = (3 + 3)2 = 9

Portanto, a matriz 𝐴 é dada por:

𝐴= [

4
9
16
9
16
25
16
25
36
]

Os elementos da matriz 𝐵 são dados por 𝑏𝑖𝑗= 𝑖2. Logo:

𝑏11 = 12 = 1 ; 𝑏12 = 12 = 1 ; 𝑏13 = 12 = 1

𝑏21 = 22 = 4; 𝑏22 = 22 = 4; 𝑏23 = 22 = 4

𝑏31 = 32 = 9; 𝑏32 = 32 = 9; 𝑏33 = 32 = 9

Portanto, a matriz 𝐵 é dado por:

𝐵= [

1
1
1
4
4
4
9
9
9
]

A matriz 𝑌 é a soma das matrizes 𝐴 e 𝐵:

𝑌= 𝐴+ 𝐵= [

4
9
16
9
16
25
16
25
36
] + [

1
1
1
4
4
4
9
9
9
]

𝑌= [

5
10
17
13
20
29
25
34
45
]

Perceba que o elemento 𝑦23 é igual a 29. O menor complementar de 𝑦23 é o determinante da matriz que
se obtém eliminando a linha 2 e a coluna 3:

[

𝟓
𝟏𝟎
17
13
20
29
𝟐𝟓
𝟑𝟒
45
]

Logo, o determinante 𝑫𝟐𝟑 correspondente ao menor complementar de 𝑦23 é:

| 𝟓
𝟏𝟎
𝟑𝟒|

= [𝟓× 𝟑𝟒] −[𝟏𝟎× 𝟐𝟓]

= −80

Gabarito: Letra C.

### Cofator ou complemento algébrico

Considere uma matriz 𝐴 de ordem maior ou igual a 2.

O cofator de um elemento 𝑎𝑖𝑗 dessa matriz 𝐴 é um número representado por 𝐴𝑖𝑗 calculado do seguinte
modo:

𝐴𝒊𝒋= (−1)𝒊+𝒋𝐷𝒊𝒋

Onde 𝐷𝑖𝑗 é o menor complementar do elemento 𝑎𝑖𝑗.

Utilizando como exemplo a mesma matriz:

𝐴= [

4
2
−2
3
−1
4
−5
−3
1

]

Temos que o cofator do elemento 𝑎12 é dado por:

𝐴𝟏𝟐= (−1)𝟏+𝟐𝐷𝟏𝟐

Do item anterior, já obtemos que o menor complementar 𝑫𝟏𝟐 é igual a 23. Logo:

𝐴12 = (−1)3 × 23

𝐴12 = (−1) × 23

𝐴12 = −23

Portanto, o cofator do elemento 𝑎12 é 𝑨𝟏𝟐= −𝟐𝟑.

### Teorema de Laplace

O Teorema de Laplace serve para obtermos o determinante de qualquer matriz quadrada de ordem maior
ou igual a 2.

Vamos conceituar o teorema:

O determinante de uma matriz 𝐴 é a soma dos produtos dos elementos de uma fila qualquer
(linha ou coluna) pelos seus respectivos cofatores.

Vejamos o teorema com mais detalhes. Em resumo, ele consiste em seguir 3 passos:

1. Escolher uma fila (linha ou coluna), preferencialmente a que tiver mais zeros;
2. Realizar o produto de cada elemento da fila pelo seu respectivo cofator; e
3. Somar os produtos obtidos.

Vamos realizar um exemplo para que tudo fique mais claro.

Calcule o determinante de 𝑨= [

𝟑
𝟐
𝟑
𝟏
−𝟏
𝟐
𝟎
𝟖

𝟓

𝟐

−𝟏

𝟒

𝟎
𝟎

𝟔
𝟑

]

Note que temos uma matriz quadrada de ordem 4. Seu determinante não pode ser obtido pela regra de
Sarrus. Nesse caso, devemos seguir os três passos do Teorema de Laplace.

1. Escolher uma fila (linha ou coluna), preferencialmente a que tiver mais zeros:

Vamos escolher a terceira coluna, pois ela apresenta três zeros.

𝐴= [

3
2
𝟑
1
−1
2
𝟎
8

5

2
−1

4

𝟎
𝟎

6
3

]

2. Realizar o produto de cada elemento da fila pelo seu respectivo cofator

Lembre-se que o cofator é definido como 𝐴𝑖𝑗= (−1)𝑖+𝑗𝐷𝑖𝑗. Devemos, portanto, calcular os seguintes
produtos:

𝑎13𝐴13 𝑎23𝐴23 𝑎33𝐴33 𝑎43𝐴43

Cálculo de 𝒂𝟏𝟑𝑨𝟏𝟑

𝑎13𝐴13 = 3 × 𝐴13

= 3 × (−1)1+3𝐷13

= 3 × (−1)4 |

−𝟏

−𝟏

|

= 3 |

−𝟏

|

Aplicando a regra de Sarrus em |

−1
2
8
5
−1
6
2
4
3
|, obtém-se 197.

Logo:

𝑎21𝐴21 = 3 |

−1
2
8
5
−1
6
2
4
3
|

3 × 197

= 591

Cálculo de 𝒂𝟐𝟑𝑨𝟐𝟑

Note que o elemento 𝑎23 é zero, de modo que o produto 𝑎23𝐴23 será zero:

𝑎23𝐴23 = 0 × 𝐴23 = 0

Cálculo de 𝒂𝟑𝟑𝑨𝟑𝟑

Note que o elemento 𝑎33 é zero, de modo que o produto 𝑎33𝐴33 será zero:

𝑎33𝐴33 = 0 × 𝐴33 = 0

Cálculo de 𝒂𝟒𝟒𝑨𝟒𝟑

Note que o elemento 𝑎43 é zero, de modo que o produto 𝑎43𝐴43 será zero:

𝑎43𝐴43 = 0 × 𝐴43 = 0

3. Somar os produtos obtidos

Por fim, para obter o determinante, soma-se os produtos obtidos:

det 𝐴= 𝑎31𝐴31 + 𝑎32𝐴32 + 𝑎33𝐴33 + 𝑎43𝐴43

= 591 + 0 + 0 + 0

= 591

Logo, determinante de 𝑨 é 𝟓𝟗𝟏.

Destaca-se a importância de se selecionar a fila (linha ou coluna) com o maior número de zeros. Caso
tivéssemos selecionado outra fileira, o trabalho teria sido muito maior, pois teríamos que calcular mais
determinantes de ordem 3. Vejamos:

Calcule o determinante de 𝑨= [

−𝟏

𝟐

−𝟏

𝟒

𝟎

𝟑

]

1. Escolher uma fila (linha ou coluna), preferencialmente a que tiver mais zeros

Vamos supor que tenhamos escolhido a segunda linha, que não é a fila que apresenta mais zeros.

[

3
2
3
1
−𝟏
𝟐
𝟎
𝟖

5

2
−1

4

0
0
6
3

]

2. Realizar o produto de cada elemento da fila pelo seu respectivo cofator; e

3. Somar os produtos obtidos.

Nesse caso, o determinante seria calculado da seguinte forma:

det 𝐴= 𝒂𝟐𝟏𝐴21 + 𝒂𝟐𝟐𝐴22 + 𝒂𝟐𝟑𝐴23 + 𝒂𝟐𝟒𝐴24

(−𝟏). (−1)2+1𝐷21 + 𝟐. (−1)2+2𝐷22 + 𝟎. (−1)2+3𝐷23 + 𝟖. (−1)2+4𝐷24

= 𝐷21 + 2𝐷22 + 8𝐷24

= |

3
2
3
1
−1
2
0
8

5

2
−1

4

0
0
6
3

| + 2 |

3
2
3
1
−1
2
0
8

5

2
−1

4

0
0
6
3

| + 8 |

3
2
3
1
−1
2
0
8

5

2
−1

4

0
0
6
3

|

= |

2
3
1
−1
0
6
4
0
3
| + 2 |

3
3
1
5
0
6
2
0
3
| + 8 |

3
2
3
5
−1
0
2
4
0
|

Aplicando a regra de Sarrus para os três determinantes, obtém-se 81, −9 e 66, respectivamente. Portanto:

det 𝐴= 𝟖𝟏+ 2 × (−𝟗) + 8 × 𝟔𝟔

= 81 −18 + 528

= 591

Note que chegamos no mesmo resultado, porém foram necessárias 3 aplicações da regra de Sarrus.

(SEFAZ-RS/2014) O determinante da matriz

𝐴= [

−3

] é

a) −32

b) −26

c) 14

d) 16

e) 28

Comentários:

Devemos calcular um determinante de ordem 4. Para tanto, faremos uso do Teorema de Laplace.

1. Escolher uma fila (linha ou coluna), preferencialmente a que tiver mais zeros;

Selecionaremos a quarta coluna, pois ela é a fila que mais apresenta zeros.

𝐴= [

1
2
1
𝟎
2
3
1
𝟎
2
2
−3

1
2
𝟏
1
𝟒

]

2. Realizar o produto de cada elemento da fila pelo seu respectivo cofator; e

3. Somar os produtos obtidos.

O determinante de 𝐴 é dado por:

det 𝐴= 𝒂𝟏𝟒𝐴14 + 𝒂𝟐𝟒𝐴24 + 𝒂𝟑𝟒𝐴34 + 𝒂𝟒𝟒𝐴44

= 𝟎. 𝐴14 + 𝟎. 𝐴24 + 𝟏. 𝐴34 + 𝟒𝐴44

= 𝐴34 + 4𝐴44

= (−1)3+4𝐷34 + 4 × (−1)4+4𝐷44

= (−1)7𝐷34 + 4 × (−1)8𝐷44

= −𝐷34 + 𝟒𝐷44

= −|

1
2
1
0
2
3
1
0
2
2
−3

1
2
1
1
4

| + 𝟒|

1
2
1
0
2
3
1
0
2
2
−3

1
2
1
1
4

|

= −|

𝟏
𝟐
𝟏
𝟐
𝟑
𝟏
𝟐
𝟏
𝟏

| + 𝟒|

𝟏
𝟐
𝟏
𝟐
𝟑
𝟏
𝟐
−𝟑
𝟐

|

Vamos aplicar a regra de Sarrus no primeiro determinante 𝐷34:

|

1
2
1
2
3
1
|

1
2
2
3

Parte Negativa Parte Positiva

𝐷34 = [𝟏. 𝟑. 𝟏+ 𝟐. 𝟏. 𝟐+ 𝟏. 𝟐. 𝟏] −[𝟏. 𝟑. 𝟐+ 𝟏. 𝟏. 𝟏+ 𝟐. 𝟐. 𝟏]

𝐷34 = [3 + 4 + 2] −[6 + 1 + 4]

𝐷34 = 9 −11

𝑫𝟑𝟒= −𝟐

Vamos agora aplicar a regra de Sarrus no segundo determinante 𝐷44:

|

1
2
1
2
3
1
2
−3
2
|

1
2
2
3
2
−3

Parte Negativa Parte Positiva

𝐷44 = [𝟏. 𝟑. 𝟐+ 𝟐. 𝟏. 𝟐+ 𝟏. 𝟐. (−𝟑)] −[𝟏. 𝟑. 𝟐+ 𝟏. 𝟏. (−𝟑) + 𝟐. 𝟐. 𝟐]

𝐷44 = [6 + 4 −6] −[6 −3 + 8]

𝐷44 = 4 −11

𝑫𝟒𝟒= −𝟕

Voltando ao cálculo do determinante de 𝐴, temos:

det 𝐴= −|

𝟏
𝟐
𝟏
𝟐
𝟑
𝟏
𝟐
𝟏
𝟏

| + 𝟒|

𝟏
𝟐
𝟏
𝟐
𝟑
𝟏
𝟐
−𝟑
𝟐

|

= −(−𝟐) + 𝟒× (−𝟕)

= 2 −28

= −26

Gabarito: Letra B.

### Propriedades dos determinantes

### Teorema de Binet

O teorema de Binet nos diz que o determinante do produto de duas matrizes é igual ao produto dos
determinantes das duas matrizes.

det(AB) = det A × det B

Esse teorema também pode ser aplicado para mais matrizes:

det(ABC) = det A × det B × det C

(MPE-RS/2010) Considere as matrizes 𝑀= [

] e 𝑃= [

].

Sendo 𝑄 o produto das matrizes 𝑀 e 𝑃, nessa ordem, ou seja, 𝑄 = 𝑀𝑃, o determinante da matriz 𝑄 é
igual a:

a)

1

180

b)

1

240

c)

1

360

d)

1

540

e)

1

720

Comentários:

Note que a questão pede o determinante da matriz 𝑀𝑃. Não é necessário calcular o produto das matrizes,
pois, pelo Teorema de Binet, sabemos que:

det(𝑀𝑃) = det 𝑀× det 𝑃

O determinante da matriz 𝑀 é dado por:

det 𝑀= [𝟏

𝟑× 𝟏

𝟒] −[𝟏

𝟐× 𝟏

𝟓] = 1

12 −1
10 = 5 −6
60
= −1

60

O determinante da matriz 𝑃 é dado por:

det 𝑃= [𝟐

𝟓× 𝟓

𝟒] −[𝟐

𝟑× 𝟏] = 2

4 −2
3 = 1
2 −2
3 = 3 −4
6
= −1

6

Logo, o determinante de 𝑄= 𝑀𝑃 é dado por:

det(𝑀𝑃) = det 𝑀× det 𝑃

= (−1

60) × (−1
6)

=
1
360

Gabarito: Letra C.

### Determinante da matriz inversa

O determinante da matriz inversa é o inverso do determinante da matriz original.

det 𝐴−1 =
det 𝐴

Essa propriedade é uma consequência do Teorema de Binet.

Pela definição de matriz inversa, temos que:

𝐴𝐴−1 = 𝐼

Logo, o determinante do produto é:

det(𝐴𝐴−1) = det 𝐼

Veremos mais adiante que o determinante de uma matriz diagonal é o produto dos elementos da
diagonal. No caso da matriz identidade, esse produto será 1 × 1 × … × 1
⏟

𝑛 vezes
(matriz de ordem 𝑛)

= 1. Portanto, det 𝐼= 1.

Além disso, pelo Teorema de Binet, temos que det(𝐴−1𝐴) = det 𝐴× det 𝐴−1. Logo:

det(𝐴𝐴−1) = det 𝐼

det 𝐴× det 𝐴−1 = 1

det 𝐴−1 =
1
det 𝐴

### Determinante da matriz transposta

O determinante da matriz transposta é igual ao determinante da matriz original.

det 𝐴𝑡= det 𝐴

(TRT11/2017) Se 𝐴 é uma matriz quadrada de ordem 2 tal que 𝐴= [1
3
2
1] , então o determinante da

inversa da matriz transposta de 𝐴 é igual a

a) −0,20

b) −0,40

c) −0,25

d) −0,50

e) −1,00

Comentários:

A questão pergunta pelo determinante da inversa da transposta.

𝐴→
𝐴𝑡
⏟

transposta

→
(𝐴𝑡)−1
⏟

inversa da transposta

O determinante da matriz 𝐴 é dado por:

det 𝐴= |𝟏
𝟑
𝟐
𝟏|

= [𝟏× 𝟏] −[𝟑× 𝟐]

= 1 −6

= −5

Lembre-se que 𝐝𝐞𝐭𝑨𝒕= 𝐝𝐞𝐭𝑨. Logo, o determinante da inversa da transposta é:

det(𝐴𝑡)−1 =
1
𝐝𝐞𝐭(𝑨𝒕)

=
1
𝐝𝐞𝐭𝑨

= 1

−5

= −0,2

Gabarito: Letra A.

### Multiplicação de uma fila por uma constante

Ao multiplicar uma fila (linha ou coluna) de uma matriz por uma constante 𝒌, o determinante dessa nova
matriz também fica multiplicado por 𝒌.

Exemplo: considere a seguinte matriz 𝐴.

𝐴= [3
2
1
3]

det 𝐴= 3 × 3 −2 × 1 = 7

Multiplicando uma das filas de 𝐴 por 5, obtemos uma nova matriz, que chamaremos de 𝐴´. Observe que o
determinante de 𝐴´ fica multiplicado por 5. Veja:

𝐴´ = [3
𝟓× 2
𝟓× 3]

𝐴´ = [3
1
15]

det 𝐴′ = 2 × 15 −10 × 1

= 45 −10

= 35

Uma consequência interessante dessa propriedade é realizar a operação inversa, removendo um fator
comum de dentro do determinante. Veja:

|2
10
1
15| = |2
𝟓× 2
1
𝟓× 3| = 𝟓× |3
2
1
3|

### Multiplicação da matriz por uma constante

Ao multiplicar uma matriz de ordem 𝒏 por uma constante 𝒌, o determinante dessa nova matriz fica
multiplicado por 𝒌𝒏.

det(𝑘𝐴) = 𝑘𝑛det 𝐴

Exemplo: considere a seguinte matriz 𝐴= [3
2
1
3], cujo determinante é 7.

A matriz 3𝐴 é dada por:

3𝐴= 3 × [3
2
1
3] = [𝟑× 3
𝟑× 2
𝟑× 1
𝟑× 3] = [9
6
3
9]

O determinante de 3𝐴= [𝟗
𝟔
𝟐
𝟗] é:

det 3𝐴= [𝟗× 𝟗] −[𝟔× 𝟑] = 63

Note que o novo determinante é 9 vezes o determinante original, isto é:

det(3𝐴) = 32 det 𝐴

Note que, ao multiplicar uma matriz de ordem 𝑛 por uma constante 𝑘, na verdade
estamos multiplicando cada uma das suas 𝒏 linhas (ou colunas) por 𝒌. Por isso, o novo
determinante acaba sendo multiplicado por:

𝑘× 𝑘× … × 𝑘
⏟

𝑛 vezes

= 𝑘𝑛

(MPE SC/2022) Seja A uma matriz 4 x 4 cujo determinante é igual a 2.

O determinante da matriz 3A é igual a:

a) 6;

b) 12;

c) 24;

d) 64;

e) 162.

Comentários:

Sabemos que, ao multiplicar uma matriz de ordem 𝒏 por uma constante 𝒌, o determinante dessa nova
matriz fica multiplicado por 𝒌𝒏.

det(𝑘𝐴) = 𝑘𝑛det 𝐴

Como a matriz 𝐴 é de ordem 𝑛= 4, temos:

det(3𝐴) = 34 det 𝐴

det(3𝐴) = 81 × 2

det(3𝐴) = 162

Gabarito: Letra E.

(Pref. Gramado/2019) Considerando que a Matriz 𝐴 seja quadrada de ordem 2 e que tenha determinante
igual a 2, o determinante da matriz 3𝐴 é:

a) 2.

b) 6.

c) 9.

d) 18

e) 54

Comentários:

A matriz 𝐴 apresenta ordem 𝑛= 2 e determinante det 𝐴= 2.

Temos que:

det 3𝐴= 3𝑛det 𝐴

= 32 × 2

= 9 × 2

= 18

Gabarito: Letra E.

(MPOG/2008) Uma matriz X de quinta ordem possui determinante igual a 10. A matriz B é obtida
multiplicando-se todos os elementos da matriz X por 10. Desse modo, o determinante da matriz B é igual a:

a) 10−6

b) 105

c) 1010

d) 106

e) 103

Comentários:

A matriz 𝑋 apresenta ordem 𝑛= 5 e determinante det 𝑋= 10.

A matriz 𝐵 é obtida multiplicando-se todos os elementos da matriz X por 10. Logo:

𝐵= 10𝑋

O determinante da matriz 𝐵 é:

det 𝐵= det 10𝑋

= 10𝑛det 𝑋

= 105 × 10

= 106

Gabarito: Letra D.

### Determinante de matriz triangular ou de matriz diagonal

O determinante de uma matriz triangular ou de uma matriz diagonal é o produto dos elementos da
diagonal principal. Exemplos:

- |

𝟑
2
8
1
𝟎
𝟐
2
8

𝟎

𝟎

𝟎
𝟎

𝟏
𝟎

6
𝟑

| = 𝟑× 𝟐× 𝟏× 𝟑= 18

-
|

𝟑
𝟎
𝟎
1
𝟓
𝟎
5
7
𝟑

| = 𝟑× 𝟓× 𝟐= 30

- |

𝟏
𝟎
𝟎
𝟎
𝟎
𝟐
𝟎
𝟎

𝟎

𝟎

𝟎
𝟎

𝟓
𝟎

𝟎
𝟑

| = 𝟏× 𝟐× 𝟓× 𝟑= 30

- det 𝐼4 = |

𝟏
𝟎
𝟎
𝟎
𝟎
𝟏
𝟎
𝟎

𝟎

𝟎

𝟎
𝟎

𝟏
𝟎

𝟎
𝟏

| = 𝟏× 𝟏× 𝟏× 𝟏= 1

(IF Baiano/2019) Seja 𝐴3×3 uma matriz que pode ser decomposta como o produto de outras duas matrizes
𝐿3×3 e 𝑈3×3, onde 𝐿 é uma matriz triangular inferior, com 𝑙11 = 𝑙22 = 𝑙33 = 1, e 𝑈, uma matriz
triangular superior, tal que 𝐴 = 𝐿. 𝑈

(

5
2
1
3
1
4
1
1
3
) = (

𝑙11
0
0
𝑙21
𝑙22
0
𝑙31
𝑙32
𝑙33

) . (

𝑢11
𝑢12
𝑢13
0
𝑢22
𝑢23
0
0
𝑢33

)

Calcule o determinante da matriz 𝑈.

a) 𝑑𝑒𝑡 𝑈= −13

b) 𝑑𝑒𝑡 𝑈= −9

c) 𝑑𝑒𝑡 𝑈= −2

d) 𝑑𝑒𝑡 𝑈= 3

e) 𝑑𝑒𝑡 𝑈= 5

Comentários:

Note que 𝐴= 𝐿𝑈. Pelo Teorema de Binet, temos:

det 𝐴= det 𝐿𝑈

det 𝐴= det 𝐿× det 𝑈

Isolando det 𝑈, ficamos com:

det 𝐴
det 𝐿= det 𝑈

𝐝𝐞𝐭𝑼= 𝐝𝐞𝐭𝑨

𝐝𝐞𝐭𝑳

Como 𝐿 é uma matriz triangular inferior, deu determinante é o produto dos elementos da diagonal
principal.

𝐝𝐞𝐭𝑳= 𝑙11 × 𝑙22 × 𝑙33

= 1 × 1 × 1

= 𝟏

𝐴 é uma matriz 3 × 3 conhecida. Para obter o seu determinante, podemos utilizar a regra de Sarrus.

|

5
2
1
3
1
4
1
1
3
|

5
2
3
1
1
1

Parte Negativa Parte Positiva

𝐝𝐞𝐭𝑨= [𝟓. 𝟏. 𝟑+ 𝟐. 𝟒. 𝟏+ 𝟏. 𝟑. 𝟏] −[𝟏. 𝟏. 𝟏+ 𝟓. 𝟒. 𝟏+ 𝟐. 𝟑. 𝟑]

= [15 + 8 + 3] −[1 + 20 + 18]

= 26 −39

= −𝟏𝟑

Logo:

𝐝𝐞𝐭𝑼= 𝐝𝐞𝐭𝑨

𝐝𝐞𝐭𝑳= −𝟏𝟑

𝟏
= −𝟏𝟑

Gabarito: Letra A.

### Fila nula

Uma matriz que apresenta uma fila (linha ou coluna) cujos elementos são todos zero apresenta
determinante zero. Exemplos:

-
|1
𝟎
3
𝟎| = 0

-
|

1
4
−3
𝟎
𝟎
𝟎
5
√11
𝜋

| = 0

-
|

−1

−1

| = 0

### Filas paralelas iguais

Uma matriz com filas paralelas iguais (linhas ou colunas) apresenta determinante zero. Exemplos:

-
|𝟏
𝟏
𝟑
𝟑| = 0

-
|

𝟒
𝟒
𝟒
𝟒
𝟒
𝟒
5
√11
𝜋

| = 0

-
|

𝟏
2
𝟏
1
𝟏
2
𝟏
8

𝟏

𝟏

−1

4

𝟏
𝟏

6
3

| = 0

### Filas paralelas proporcionais

Uma matriz com filas paralelas proporcionais (linhas ou colunas) apresenta determinante zero. Exemplos:

-
|𝟏
𝟑
𝟑
𝟗| = 0, pois a segunda coluna é 3 vezes a primeira coluna.

-
|

𝟏
𝟐
𝟑
𝟎, 𝟓
𝟏
𝟏, 𝟓
5
√11
𝜋

| = 0, pois a primeira linha é o dobro da segunda linha.

-
|

𝟒
2
𝟐𝟎
1
𝟏
2
𝟓
8

𝟐

𝟑

−1

4

𝟏𝟎
𝟏𝟓

6
3

| = 0, pois a terceira coluna é 5 vezes a primeira coluna.

### Troca de filas paralelas

Ao trocarmos uma fila (linha ou coluna) de lugar com outra fila paralela, o determinante muda de sinal.

|

3
𝟐
𝟑
−1
𝟐
𝟑
5
−𝟏
𝟏

| = 𝟐𝟎 → |

3
𝟑
𝟐
−1
𝟑
𝟐
5
𝟏
−𝟏

| = −𝟐𝟎

Professor, e se trocarmos as filas de novo?

Nesse caso, o sinal muda novamente!

|

𝟒
𝟐
𝟕
𝟏

−1

| = 𝟐𝟕𝟏 → |

𝟑
𝟒
𝟒
𝟑

−𝟏

| = −𝟐𝟕𝟏 → |

3
4
4
3
−𝟏

| = 𝟐𝟕𝟏

(MPE SC/2022) Considere as matrizes 𝐴= [

𝑎
𝑏
𝑐
𝑑
𝑒
𝑓
𝑔
ℎ
𝑘

] e 𝐵= [

2𝑎
𝑐
3𝑏
2𝑑
𝑓
3𝑒
2𝑔
𝑘
3ℎ
].

Sendo 𝑑𝑒𝑡(𝐴) e 𝑑𝑒𝑡(𝐵) os determinantes das matrizes 𝐴 e 𝐵, respectivamente, tem-se que:

a) 𝑑𝑒𝑡(𝐴) = 6 × 𝑑𝑒𝑡(𝐵);

b) 𝑑𝑒𝑡(𝐴) = −6 × 𝑑𝑒𝑡(𝐵);

c) 𝑑𝑒𝑡(𝐵) = 6 × 𝑑𝑒𝑡(𝐴);

d) 𝑑𝑒𝑡(𝐵) = −6 × 𝑑𝑒𝑡(𝐴);

e) 𝑑𝑒𝑡(𝐴) = 𝑑𝑒𝑡(𝐵).

Comentários:

Sabemos que, ao multiplicar uma fila (linha ou coluna) de uma matriz por uma constante 𝒌, o
determinante dessa nova matriz também fica multiplicado por 𝒌.

Uma consequência interessante dessa propriedade é realizar a operação inversa, removendo um fator
comum de dentro do determinante.

Veja que:

det(𝐵) = |

𝟐𝑎
𝑐
𝟑𝑏
𝟐𝑑
𝑓
𝟑𝑒
𝟐𝑔
𝑘
𝟑ℎ

|

det(𝐵) = 𝟐× |

𝑎
𝑐
𝟑𝑏
𝑑
𝑓
𝟑𝑒
𝑔
𝑘
𝟑ℎ

|

det(𝐵) = 𝟐× 𝟑× |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

|

det(𝐵) = 6 × |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

|
⏟

𝒙

Note que 𝑥= |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

| é muito parecido com det(𝐴). A diferença é que a segunda e a terceira coluna

estão trocadas.

Sabemos que ao trocarmos uma fila (linha ou coluna) de lugar com outra fila paralela, o determinante
muda de sinal. Logo:

|

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

| = 𝑥→|

𝒂
𝒃
𝒄
𝒅
𝒆
𝒇
𝒈
𝒉
𝒌

|
⏟

det(𝐴)

= −𝑥

Portanto:

det(𝐴) = −𝑥

𝑥= −det(𝐴)

Consequentemente, temos que det(𝐵) é dado por:

det(𝐵) = 6 × |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

|
⏟

𝒙

det(𝐵) = −6 × 𝑑𝑒𝑡 (𝐴)

Gabarito: Letra D.

### Combinação linear de filas

Primeiramente, vamos entender o que é uma combinação linear.

Podemos dizer a primeira linha 𝐿1 de uma matriz, por exemplo, é combinação linear de outras linhas 𝐿2, 𝐿3
e 𝐿4 quando existem valores reais 𝒂, 𝒃 e 𝒄 tais que:

𝐿1 = 𝑎𝐿2 + 𝑏𝐿3 + 𝑐𝐿4

Exemplo: considere a matriz 𝐴 abaixo:

𝐴= [

𝟏
𝟐
𝟏
𝟑
𝟕
𝟓
𝟔
𝟏𝟑
𝟖

]

Note que a terceira linha 𝐿3 = [𝟔
𝟏𝟑
𝟖] é uma combinação linear da primeira linha 𝐿1 = [𝟏
𝟐
𝟏] e
da segunda linha 𝐿2 = [𝟑
𝟓
𝟕], pois 𝐿3 = 3𝐿1 + 𝐿2.

Vejamos:

3𝐿1 + 𝐿2

= 3[𝟏
𝟐
𝟏] + [𝟑
𝟕
𝟓]

= [3
3] + [3
5]

= [6
8]

= 𝐿3

Também podemos ter combinações lineares com colunas. Considere a seguinte matriz 𝐵:

𝐵= [

4
𝟐
𝟕
𝟏𝟏
1
𝟐
𝟓
𝟗

2

3
𝟏
𝟒

𝟏
𝟒

𝟑
𝟏𝟐

]

Note que a quarta coluna 𝐶4 = [

𝟏𝟏

𝟗
𝟑
𝟏𝟐

] é combinação linear da segunda coluna 𝐶2 = [

𝟐
𝟐
𝟏
𝟒

] e da terceira coluna

𝐶3 = [

𝟕
𝟓
𝟏
𝟒

], pois 𝐶4 = 2𝐶2 + 𝐶3. Vejamos:

2𝐶2 + 𝐶3

= 2 [

𝟐
𝟐
𝟏
𝟒

] + [

𝟕
𝟓
𝟏
𝟒

]

= [

4
4
2
8

] + [

7
5
1
4

]

= [

11
9
3
12

]

= 𝐶4

Entendida a ideia de combinação linear entre linhas e entre colunas, devemos saber que quando uma
matriz apresenta uma fila (linha ou coluna) que é combinação linear de outras filas, o seu determinante é
zero.

Nos exemplos em questão, a matriz 𝐴 e a matriz 𝐵 apresentam determinantes nulos.

(TJ PR/2009) Calcule o determinante de 𝐴= [

−1
−2
−1
−3
1
−4

3
−6

4

−2

]

a) 11

b) −11

c) 0

d) 5

Comentários:

E aí, concurseiro? Vai aplicar o Teorema de Laplace nesse determinante 4×4? Negativo!

Note que a linha 1 é a soma da linha 3 com a linha 4, isto é, 𝐿1 = 𝐿3 + 𝐿4.

𝐴= [

𝟓
−𝟏
−𝟐
𝟏
−1
2
−3
1
𝟒
𝟏

−𝟒

𝟑

−𝟔

𝟒

𝟑
−𝟐

]

Como temos uma linha que é combinação linear de outras duas, o determinante é zero.

Gabarito: Letra C

### Teorema de Jacobi

O Teorema de Jacobi é uma ferramenta poderosíssima. Isso porque esse teorema nos permite manipular
os determinantes de modo a aplicar as propriedades vistas até então.

Esse teorema nos diz que ao multiplicar uma fila por qualquer número e somar esse resultado a uma
outra fila paralela qualquer, o valor do determinante não se altera.

Em outras palavras, podemos trocar uma fila qualquer por uma combinação linear que contenha a fila
original.

Vejamos um exemplo:

Calcule o determinante da matriz 𝑨= [

]

Note que temos um determinante de ordem 4. Poderíamos aplicar o Teorema de Laplace diretamente
para resolver o problema, porém note que seria bastante trabalhosa a resolução, visto que não temos uma
fileira com três zeros.

Para resolver o determinante, vamos fazer "surgir alguns zeros" com o Teorema de Jacobi. Lembre-se que
ao multiplicar uma fila por qualquer número e somar esse resultado a uma outra fila paralela qualquer, o
valor do determinante não se altera.

Primeiramente, vamos multiplicar a primeira coluna (𝐶1) por (−2) e somar à segunda coluna (𝐶2).

Em outras palavras, vamos substituir 𝑪𝟐 por 𝑪𝟐+ (−𝟐)𝑪𝟏.

Para facilitar a comunicação, vamos descrever essa substituição assim: 𝑪𝟐←𝑪𝟐−𝟐𝑪𝟏.

Note também que podemos substituir 𝐶4 por 𝐶4 + (−2)𝐶3, isto é, podemos realizar a operação
𝑪𝟒←𝑪𝟒−𝟑𝑪𝟑.

Observe que o determinante da matriz original corresponde a:

|

1
𝟎
1
0
4
𝟎
1
1

3

1
𝟏
𝟎

1
1
0
1

|

Note que agora podemos aplicar o Teorema de Laplace com mais facilidade. Ao selecionar a segunda
coluna, temos que o determinante é dado por:

det 𝐴= 0 × 𝐴12 + 0 × 𝐴22 + 1 × 𝐴32 + 0 × 𝐴42

= 1 × 𝐴32

= (−1)3+2𝐷32

= (−1)5 |

1
0
1
0

|

= −|

|

Vamos aplicar a regra de Sarrus no determinante.

|

1
1
0
4
1
1
1
1
1
|

1
1
4
1
1
1

Parte Negativa Parte Positiva

𝐷32 = [𝟏. 𝟏. 𝟏+ 𝟏. 𝟏. 𝟏+ 𝟎. 𝟒. 𝟏] −[𝟎. 𝟏. 𝟏+ 𝟏. 𝟏. 𝟏+ 𝟏. 𝟒. 𝟏]

𝐷32 = 2 −5

𝐷32 = −3

Note que det 𝐴= −|

1
1
0
4
1
1
1
1
1
|. Portanto:

det 𝐴= −(−3)

det 𝐴= 3

### Regra de Chió

A Regra de Chió é uma regra que permite com que um determinante tenha a sua ordem reduzida. Trata-se
de uma aplicação do Teorema de Jacobi.

Vamos ver a aplicação da regra na prática. Considere o determinante abaixo:

|

3
2
1
2
4
8
1
3

3

1
7
2
1
2
2
3

|

O primeiro passo e fazer com que o elemento 𝒂𝟏𝟏 seja igual a 1. Realizando a operação 𝐶1 ←C1 −2𝐶3,
temos:

A partir desse momento, devemos zerar todos os elementos da primeira linha, à exceção do elemento
𝒂𝟏𝟏, fazendo uso da primeira coluna.

Para tanto, vamos realizar as seguintes substituições, nessa ordem:

- 𝐶2 ←𝐶2 −2𝐶1;
- 𝐶3 ←𝐶3 −𝐶1; e
- 𝐶4 ←𝐶4 −2𝐶1.

|

1
0
1
0
4
0
1
1

3

1
1
0

1
1
0
1

|
=
𝑪𝟐←𝑪𝟐−𝟐𝑪𝟏|

1
𝟎
1
2
2
𝟒
1
3

1

−3

𝟓
𝟖

1
2
2
3

|
=
𝑪𝟑←𝑪𝟑−𝑪𝟏|

1
𝟎
𝟎
2
2
4
−𝟏
3

1

−3

5
8
𝟎
𝟓

2
3

|
=
𝑪𝟒←𝑪𝟒−𝟐𝑪𝟏|

1
𝟎
𝟎
𝟎
2
4
−1
−𝟏

1

−3

5
8
0
5
𝟎
𝟗

|

Ficamos com:

|

1
𝟎
𝟎
𝟎
2
4
−1
−1

1

−3

5
8
0
5
0
9

|

Ao aplicar o Teorema de Laplace na primeira linha, temos:

𝐝𝐞𝐭𝑨= 𝑎11𝐴11 + 𝑎12𝐴12 + 𝑎13𝐴13 + 𝑎14𝐴14

Como na Regra de Chió temos o sempre o elemento 𝑎11 = 1 e os demais elementos da primeira linha
iguais a zero, ficamos com det 𝐴= 𝐷11:

det 𝐴= 1𝐴11 + 0𝐴12 + 0𝐴13 + 0𝐴14

det 𝐴= 𝐴11

det 𝐴= (−1)1+1𝐷11

𝐝𝐞𝐭𝑨= 𝑫𝟏𝟏

det 𝐴= |

4
−1
−1
5
0
0
8
5
9
|

Veja, portanto, que a Regra de Chió reduziu a ordem do determinante de 4 para 3, pois tínhamos o
seguinte determinante:

|

3
2
1
2
4
8
1
3

3

1
7
2
1
2
2
3

|

Esse determinante foi reduzido a:

|

4
−1
−1
5
0
0
8
5
9
|

Poderíamos continuar utilizando a Regra de Chió para reduzir a ordem do determinante de 3 para 2.
Porém, como já temos um determinante de ordem 3, podemos aplicar a regra de Sarrus.

|

−1
−1
|

−1

Parte Negativa Parte Positiva

[𝟒. 𝟎. 𝟗+ (−𝟏). 𝟎. 𝟖+ (−𝟏). 𝟓. 𝟓] −[(−𝟏). 𝟎. 𝟖+ 𝟒. 𝟎. 𝟓+ (−𝟏). 𝟓. 𝟗]

= [0 + 0 −25] −[0 + 0 −45]

= −25 + 45

= 20

Em resumo, a Regra de Chió consiste nos seguintes passos:

- Fazer com que o elemento 𝑎11 seja igual a 1;
- Zerar todos os elementos da primeira linha, à exceção de 𝒂𝟏𝟏, fazendo uso da primeira coluna;
- Feita a operação anterior, o determinante em questão é igual ao menor complementar 𝑫𝟏𝟏;
- Repita o processo, se necessário, para reduzir a ordem do determinante mais uma vez.

Nesse momento, vamos resolver uma questão que já fizemos por Teorema de Laplace, dessa vez por meio
da Regra de Chió.

(SEFAZ-RS/2014) O determinante da matriz

𝐴= [

1
2
1
0
2
3
1
0
2
2
−3

1
2
1
1
4

] é

a) −32

b) −26

c) 14

d) 16

e) 28

Comentários:

Temos um determinante de ordem 4. Dessa vez, vamos utilizar a Regra de Chió.

Fazer com que o elemento 𝒂𝟏𝟏 seja igual a 1

Note que o elemento 𝒂𝟏𝟏 já é igual a 𝟏.

Zerar todos os elementos da primeira linha, à exceção de 𝒂𝟏𝟏, fazendo uso da primeira coluna

Para tanto, vamos realizar as seguintes substituições, nessa ordem:

𝐶2 ←𝐶2 −2𝐶1; e

𝐶3 ←𝐶3 −𝐶1.

|

1
2
1
0
2
3
1
0
2
2
−3

1
2
1
1
4

|
=
𝑪𝟐←𝑪𝟐−𝟐𝑪𝟏|

1
𝟎
1
0
2
−𝟏
1
0
2
2
−𝟕
−𝟑

2
1
1
4

|
=
𝑪𝟑←𝑪𝟑−𝑪𝟏|

1
𝟎
𝟎
0
2
−1
−𝟏
0
2
2
−7
−3

𝟎
1
−𝟏
4

|

Observe que o determinante ficou reduzido a:

|

1
0
0
0
2
−1
−1
0
2
2
−7
−3

0
1
−1
4

|

Feita a operação anterior, o determinante em questão é igual ao menor complementar 𝑫𝟏𝟏

det 𝐴= |

1
0
0
0
2
−1
−1
0
2
2
−7
−3

0
1
−1
4

|

det 𝐴= |

−1
−1
0
−7
0
1
−3
−1
4
|

Aplicando a regra de Sarrus, temos:

|

−1
−1
0
−7
0
1
−3
−1
4
|

−1
−1
−7
0
−3
−1

Parte Negativa Parte Positiva

det 𝐴= [(−𝟏). 𝟎. 𝟒+ (−𝟏). 𝟏. (−𝟑) + 0. (−𝟕). (−𝟏)] −[𝟎. 𝟎. (−𝟑) + (−𝟏). 𝟏. (−𝟏) + (−𝟏). (−𝟕). 𝟒]

det 𝐴= [0 + 3 + 0] −[0 + 1 + 28]

det 𝐴= 3 −29

det 𝐴= −26

O determinante da matriz 𝐴, portanto, é igual a −26.

Gabarito: Letra B.

### Matriz de Vandermonde

Dando continuidade ao nosso estudo de determinantes, vamos conhecer um tipo especial de matriz: a
Matriz de Vandermonde.

### Identificação da Matriz de Vandermonde

Uma matriz quadrada de ordem 𝒏 é chamada de Matriz de Vandermonde quando suas colunas são
formadas por potências de mesma base, com o expoente variando de 0 até 𝒏−1.

Observe que, a partir da definição, pode-se concluir que cada coluna da Matriz de Vandermonde forma
uma Progressão Geométrica (PG) cujo primeiro elemento é sempre 1 (pois qualquer base elevada ao
expoente 0 é 1).

O segredo para obter de maneira prática os determinantes dessas matrizes está na 2ª linha. Os elementos
da 2ª linha são chamados de elementos característicos.

Vejamos dois exemplos:

-
Exemplo 1: (

1
1
1
5
2
10
25
4
100
) – Matriz de ordem 𝒏 = 3.

Note que essa matriz é uma Matriz de Vandermonde, pois é uma matriz de ordem 𝒏 = 3 cujas colunas são
formadas por potências de mesma base, com o expoente variando de 0 até 𝒏−1 (0 até 2). Podemos
reescrevê-la da seguinte forma:

(

50
20
100

𝟓1
𝟐1
𝟏𝟎1

252
22
102
)

Observe que os elementos característicos (2ª linha) são 5, 2 e 10.

-
Exemplo 2: (

1
1
1
1
1
2
−3
−1
1
4
9
1
1
8
−27
−1

) – Matriz de ordem 𝒏 = 4 com números negativos.

Note que essa matriz é uma Matriz de Vandermonde, pois é uma matriz de ordem 𝒏 = 4 cujas colunas são
formadas por potências de mesma base, com o expoente variando de 0 até 𝒏−1 (0 até 3). Podemos
reescrevê-la da seguinte forma:

(

10
20
(−3)0
(−1)0

𝟏1
𝟐1
(−𝟑)1
(−𝟏)1

12
22
(−3)2
(−1)2

13
23
(−3)3
(−1)3)

Observe que os elementos característicos (2ª linha) são 1, 2, −3 e −1.

### Cálculo do determinante da Matriz de Vandermonde

O determinante de uma Matriz de Vandermonde é igual ao produto de todas as diferenças possíveis
entre seus elementos característicos.

Formalmente, indicamos o determinante da Matriz de Vandermonde por 𝑽(𝒂𝟏; 𝒂𝟐; … ; 𝒂𝒏), em que
𝒂𝟏; 𝒂𝟐; … ; 𝒂𝒏 são os elementos da 2ª linha (elementos característicos) da Matriz de Vandermonde.

- Exemplo 1: o determinante da Matriz de Vandermonde (
1
𝟓
𝟐
𝟏𝟎
25
4
100
) é representado por

𝑽(𝟓; 𝟐; 𝟏𝟎).

- Exemplo 2: o determinante da Matriz de Vandermonde (

1
1
1
1
𝟏
𝟐
−𝟑
−𝟏
1
4
9
1
1
8
−27
−1

) é representado por

𝑽(𝟏; 𝟐; −𝟑; −𝟏).

Para calcular o determinante de uma Matriz de Vandermonde, devemos realizar o produto de todas as
diferenças possíveis entre seus elementos característicos. Formalmente, temos:

𝑽(𝒂𝟏, 𝒂𝟐, … , 𝒂𝒏) = (𝒂𝟐−𝒂𝟏)(𝒂𝟑−𝒂𝟏) … (𝒂𝒏−𝒂𝒏−𝟏).

Para não errar o sinal, a regra é clara: na subtração, o elemento de menor índice (que
vem antes na linha) deve ser o subtraendo. Ou seja:

(𝐐𝐮𝐞𝐦 𝐯𝐞𝐦 𝐝𝐞𝐩𝐨𝐢𝐬) − (𝐐𝐮𝐞𝐦 𝐯𝐞𝐦 𝐚𝐧𝐭𝐞𝐬)

Exemplo 1: o determinante da Matriz de Vandermonde (

1
1
1
𝟓
𝟐
𝟏𝟎
25
4
100
) é:

𝑽(𝟓, 𝟐, 𝟏𝟎) = (2 −𝟓)(10 −𝟓)
⏟
Tome o 𝟏º 𝐞𝐥𝐞𝐦𝐞𝐧𝐭𝐨
característico (𝐚𝟏=𝟓)

e subtraia de quem

vem depois

(10 −𝟐)
⏟
Tome o 𝟐º 𝐞𝐥𝐞𝐦𝐞𝐧𝐭𝐨
característico (𝐚𝟐=𝟐)

e subtraia de quem

vem depois

= (−3) × 5 × 8

= −120

Exemplo 2: o determinante da Matriz de Vandermonde (

−𝟑
−𝟏
1
8
−27
−1

) é:

𝑽(𝟏, 𝟐, −𝟑, −𝟏) = (2 −𝟏)((−3) −𝟏)((−1) −𝟏)
⏟

Tome o 𝟏º 𝐞𝐥𝐞𝐦𝐞𝐧𝐭𝐨
característico (𝐚𝟏=𝟏)

e subtraia de quem

vem depois

((−3) −𝟐)((−1) −𝟐)
⏟

Tome o 𝟐º 𝐞𝐥𝐞𝐦𝐞𝐧𝐭𝐨
característico (𝐚𝟐=𝟐)

e subtraia de quem

vem depois

((−1) −(−𝟑))
⏟
Tome o 𝟑º 𝐞𝐥𝐞𝐦𝐞𝐧𝐭o
característico (𝐚𝟑=−𝟑)

e subtraia de quem

vem depois

= 1 × (−4) × (−2) × (−5) × (−3) × 2

= 240

(PMES/2022) Assinale a alternativa que apresenta o valor do determinante da matriz 𝐴= [

1
1
1
5
6
8
25
36
64
].

a) 0

b) 1

c) 6

d) 75

e) 125

Comentários:

Observe que 𝐴 é uma Matriz de Vandermonde, pois é uma matriz de ordem 𝒏 = 3 cujas colunas são
formadas por potências de mesma base, com o expoente variando de 0 até 𝒏−1 (0 até 2). Podemos
reescrevê-la da seguinte forma:

𝐴= [

50
60
80

𝟓𝟏
𝟔𝟏
𝟖𝟏

52
62
82
]

Logo, o seu determinante é:

𝑉(𝟓, 𝟔, 𝟖) = (6 −𝟓)(8 −𝟓)(8 −𝟔)

= 1 × 3 × 2

= 6

Gabarito: Letra C.

(PETROBRAS/2017) Na matriz 𝐴= [

𝑚
𝑛
𝑝
𝑚2
𝑛2
𝑝2

], 𝑚, 𝑛 e 𝑝 são números inteiros ímpares consecutivos

tais que 𝑚&lt; 𝑛&lt; 𝑝.

O valor de det A + √det A + √det A

4
é:

a) 2

b) 8

c) 16

d) 20

e) 22

Comentários:

Note que 𝐴 é uma Matriz de Vandermonde, pois é uma matriz de ordem 𝒏 = 3 cujas colunas são formadas
por potências de mesma base, com o expoente variando de 0 até 𝒏−1 (0 até 2). Podemos reescrevê-la da
seguinte forma:

𝐴= [

𝑚0
𝑛0
𝑝0

𝒎𝟏
𝒏𝟏
𝒑𝟏

𝑚2
𝑛2
𝑝2

]

Logo, o seu determinante é:

𝑽(𝒎, 𝒏, 𝒑) = (𝑛−𝒎)(𝑝−𝒎)(𝑝−𝒏)

Segundo o enunciado, 𝒎, 𝒏 e 𝒑 são números inteiros ímpares consecutivos quaisquer (por exemplo, 1, 3 e
5). Portanto, o termo seguinte corresponde ao anterior mais duas unidades. Temos:

- 𝒎

- 𝒏= 𝒎+ 𝟐

- 𝑝= 𝑛+ 2

Escrevendo 𝒑 em termos de 𝒎, ficamos com:

𝑝= 𝒏+ 2

𝑝= (𝒎+ 𝟐) + 2

𝒑= 𝒎+ 𝟒

Logo, temos o seguinte determinante:

𝑽(𝒎, 𝒏, 𝒑) = (𝒏−𝑚)(𝒑−𝑚)(𝒑−𝑛)

= ((𝒎+ 𝟐) −𝑚)((𝒎+ 𝟒) −𝑚)((𝒎+ 𝟒) −(𝒎+ 𝟐))

= 2 × 4 × 2

= 16

Gabarito: Letra C.

Cumpre destacar que, uma vez que o determinante de uma matriz é igual ao determinante da sua matriz
transposta (𝐝𝐞𝐭𝑨= 𝐝𝐞𝐭𝑨𝒕), o determinante de uma matriz 𝑨 de ordem 𝒏 cujas linhas são formadas por
potências de mesma base, com o expoente variando de 0 até 𝒏−1, pode ser calculado pelo método que
aprendemos nesse tópico.

Por exemplo, se tivermos a matriz 𝐴= (

1
𝟓
25
1
𝟐
4
1
𝟏𝟎
100
), note que:

det 𝐴= det 𝐴𝑡

= det (

1
1
1
𝟓
𝟐
𝟏𝟎
25
4
100
)

= 𝑉(𝟓, 𝟐, 𝟏𝟎)

= (2 −𝟓)(10 −𝟓)(10 −𝟐)

= (−3) × 5 × 8

= −120

(UFRR/2022) Se o determinante da matriz

𝐴= (

1
1
1
1
1
2
4
8
1
3
9
27
1
𝑥
𝑥2
𝑥3

)

é igual a 0 (zero), o conjunto de todos os valores que 𝑥 pode assumir é:

a) 𝐵= {1, 4, 9}

b) 𝐶= {1, 8, 27}

c) 𝐷= {2, 4, 8}

d) 𝐴= {1, 2, 3}

e) 𝐸= {3, 9, 27}

Comentários:

Observe que a matriz transposta de 𝑨 é uma Matriz de Vandermonde:

𝐴𝑡= (

𝑥
1
4
9
𝑥2

1
8
27
𝑥3

)

𝐴𝑡= (

10
20
30
1
𝟏𝟏
𝟐𝟏
𝟑𝟏
𝒙
12
22
32
𝑥2

13
23
33
𝑥3

)

Portanto, o determinante da matriz 𝑨 é:

det 𝐴= det 𝐴𝑡

= det (

10
20
30
1
𝟏𝟏
𝟐𝟏
𝟑𝟏
𝒙
12
22
32
𝑥2

13
23
33
𝑥3

)

= 𝑽(𝟏, 𝟐, 𝟑, 𝒙)

= (2 −𝟏)(3 −𝟏)(𝑥−𝟏)(3 −𝟐)(𝑥−𝟐)(𝑥−𝟑)

= 1 × 2 × (𝑥−1) × 1 × (𝑥−𝟐)(𝑥−𝟑)

= 2 × (𝑥−1)(𝑥−2)(𝑥−3)

Para que o determinante de 𝑨 seja igual a zero, devemos ter:

det 𝐴= 0

2 × (𝑥−1)(𝑥−2)(𝑥−3) = 0

Dividindo ambas as parcelas por 2, temos:

(𝑥−1)(𝑥−2)(𝑥−3) = 0

Para que o produto dos três termos seja igual a zero, ao menos um dos termos deve ser zero:

- (𝑥−1) = 0 →𝒙= 𝟏

- (𝑥−2) = 0 →𝒙= 𝟐

- (𝑥−3) = 0 →𝒙= 𝟑

Logo, o conjunto de todos os valores que 𝒙 pode assumir é {𝟏, 𝟐, 𝟑}.

Gabarito: Letra D.

### Matriz inversa

No tópico de matrizes, definimos que a inversa de uma matriz 𝑨 é aquela matriz que, quando multiplicada
pela matriz 𝑨, tem como resultado a matriz identidade:

𝐴𝐴−1 = 𝐴−1𝐴= 𝐼𝑛

Agora que sabemos como calcular determinantes, você precisa saber que uma matriz 𝑨 é inversível (ou
invertível) quando o determinante é diferente de zero, isto é:

A é inversível  det A ≠0

Vimos também que uma matriz que não é inversível é denominada singular. Nesse caso:

A é singular  det A = 0

Para uma matriz 2 × 2, temos uma fórmula para encontrar a matriz inversa. Considerando uma matriz

𝐴= [𝒂
𝒃
𝒄
𝒅], ela admite inversa quando det 𝐴≠0 e sua inversa é:

𝐴−1 =
1
det 𝐴× [ 𝒅
−𝒃
−𝒄
𝒂]

𝐴−1 =
1
𝑎𝑑−𝑏𝑐× [ 𝒅
−𝒃
−𝒄
𝒂]

Vamos resolver dois exercícios sobre matriz inversa:

(SEDF/2017) Considerando a matriz 𝐴= [

2
0
10
4
10
20
0
2
40
], julgue o próximo item.

A matriz A é inversível.

Comentários:

Vamos calcular o determinante de 𝐴. Se o valor for diferente de zero, então a matriz é inversível.

Aplicando a regra de Sarrus, temos:

|

2
0
10
4
10
20
0
2
40
|

2
0
4
10
0
2

Parte Negativa Parte Positiva

𝐝𝐞𝐭𝑨= [𝟐. 𝟏𝟎. 𝟒𝟎+ 𝟎. 𝟐𝟎. 𝟎+ 𝟏𝟎. 𝟒. 𝟐] −[𝟏𝟎. 𝟏𝟎. 𝟎+ 𝟐. 𝟐𝟎. 𝟐+ 𝟎. 𝟒. 𝟒𝟎]

det 𝐴= [800 + 0 + 80] −[0 + 80 + 0]

det 𝐴= 880 −80

det 𝐴= 800

Como o determinante é diferente de zero, trata-se de uma matriz inversível.

Gabarito: CERTO.

(MPE SP/2019) A inversa da matriz [2
5
1
3] é:

a) [0,5
0,2
1
0,33]

b) [ 3
−5
−1
2 ]

c) [3
5
1
2]

d) [ 3
−1
−5
2 ]

e) [0,33
0,2
1
0,5]

Comentários:

Resolvermos essa questão no capítulo sobre matrizes. Dessa vez, vamos utilizar a fórmula apresentada.

Temos que a inversa de uma matriz 𝐴= [𝒂
𝒃
𝒄
𝒅] é dada por:

𝐴−1 =
1
det 𝐴× [ 𝒅
−𝒃
−𝒄
𝒂]

.

A matriz em questão é 𝐵= [𝟐
𝟓
𝟏
𝟑], e seu determinante é:

det 𝐵= [𝟐× 𝟑] −[𝟓× 𝟏] = 1

A inversa de 𝐵 é:

𝐵−1 =
1
det 𝐵[ 𝟑
−𝟓
−𝟏
𝟐]

𝐵−1 = 1

1 [ 𝟑
−𝟓
−𝟏
𝟐]

𝐵−1 = [ 𝟑
−𝟓
−𝟏
𝟐]

Gabarito: Letra B.

## QUESTÕES COMENTADAS – FGV

### Matrizes

(FGV/ISS Cuiabá/2024) Considere uma matriz numérica em que as linhas (𝑳) são contadas de 1 em
diante, de cima para baixo e as colunas (𝑪) são contadas de 1 em diante, da esquerda para a direita.

Cada elemento da matriz tem seu valor definido pela regra a seguir:

Valor em linha 𝑳 e coluna 𝑪 = {𝟏, se 𝑳+ 𝑪 é ímpar

𝟎, se 𝑳+ 𝑪 é par

Se essa matriz tiver 11 linhas e 11 colunas, a soma de todos os seus elementos será igual a

a) 60.

b) 56.

c) 54.

d) 52.

e) 48.

Comentários:

Considere que um elemento genérico da matriz posicionado na linha 𝐿 e na coluna 𝐶 seja representado por
𝑎𝐿𝐶. Segundo o problema, esse elemento genérico é definido do seguinte modo:

𝑎𝐿𝐶= {1, se 𝐿+ 𝐶 é ímpar

0, se 𝐿+ 𝐶 é par

Sabemos que a matriz apresenta 11 linhas e 11 colunas. Veja que qualquer elemento 𝑎𝐿𝐶 está enquadrado
em somente um dos quatro casos a seguir:

- Elementos que estão em uma linha ímpar e uma coluna ímpar;
- Elementos que estão em uma linha ímpar e uma coluna par;
- Elementos que estão em uma linha par e uma coluna ímpar; e
- Elementos que estão em uma linha par e uma coluna par.

Vamos analisar esses casos.

Elementos que estão em uma linha ímpar e uma coluna ímpar

A soma de dois números ímpares sempre será um número par. Note que, se a linha 𝑳 é ímpar e a coluna 𝑪
é ímpar, a soma 𝑳+ 𝑪 será par. Logo, esses elementos serão todos iguais a zero.

𝑎𝐿𝐶= 0

Consequentemente, a soma de todos os elementos que estão em uma linha ímpar e uma coluna ímpar é
zero:

𝑆Ímpar;Ímpar = 0

Elementos que estão em uma linha ímpar e uma coluna par

A soma de um número ímpar com um número par sempre será um número ímpar. Note que, se a linha 𝑳 é
ímpar e a coluna 𝑪 é par, a soma 𝑳+ 𝑪 será ímpar. Logo, esses elementos são todos iguais a 1:

𝑎𝐿𝐶= 1

Temos uma matriz de 11 linhas e 11 colunas, das quais:

- 6 linhas são ímpares (1, 3, 5, 7, 9, 11); e
- 5 colunas são pares (2, 4, 6, 8, 10).

Logo, o número de elementos que estão em uma linha ímpar e uma coluna par é 6×5 = 30. Como todos
esses elementos são iguais a 1, a soma de todos os elementos que estão em uma linha ímpar e uma coluna
par é 30:

𝑆Ímpar;par = 30

Elementos que estão em uma linha par e uma coluna ímpar

A soma de um número par com um número ímpar sempre será um número ímpar. Note que, se a linha 𝑳 é
par e a coluna 𝑪 é ímpar, a soma 𝑳+ 𝑪 será ímpar. Logo, esses elementos são todos iguais a 1:

𝑎𝐿𝐶= 1

Temos uma matriz de 11 linhas e 11 colunas, das quais:

- 5 linhas são pares (2, 4, 6, 8, 10); e
- 6 colunas são ímpares (1, 3, 5, 7, 9, 11);

Logo, o número de elementos que estão em uma linha par e uma coluna ímpar é 5×6 = 30. Como todos
esses elementos são iguais a 1, a soma de todos os elementos que estão em uma linha par e uma coluna
ímpar é 30:

𝑆par;ímpar = 30

Elementos que estão em uma linha par e uma linha par

A soma de dois números pares sempre será um número par. Note que, se a linha 𝑳 é par e a coluna 𝑪 é par,
a soma 𝑳+ 𝑪 será par. Logo, esses elementos serão todos iguais a zero.

𝑎𝐿𝐶= 0

Consequentemente, a soma de todos os elementos que estão em uma linha par e uma coluna par é zero:

𝑆Par;Par = 0

Agora que analisamos os quatro casos possíveis de elementos, vamos obter a soma de todos os elementos
da matriz.

Observe que a soma de todos os elementos da matriz (𝑺𝑻𝒐𝒕𝒂𝒍) corresponde à soma das quatro somas
obtidas:

𝑆𝑇𝑜𝑡𝑎𝑙= 𝑆Ímpar;Ímpar + 𝑆Ímpar;par + 𝑆par;ímpar + 𝑆Par;Par

= 0 + 30 + 30 + 0

= 60

Gabarito: Letra A.

(FGV/Pref Caraguatatuba/2024) Três amigos 𝑨𝟏, 𝑨𝟐 e 𝑨𝟑 foram juntos a uma cafeteria. A matriz

(

𝟎
𝟏
𝟐
𝟑
𝟎
𝟐
𝟐
𝟏
𝟎

) indica quantos cafés cada um pagou para outro. Nessa matriz, o elemento da linha 𝒊 e coluna

𝒌 indica quantos cafés o amigo 𝑨𝒊 pagou para o amigo 𝑨𝒌.

A diferença entre a quantidade de cafés que 𝑨𝟐 pagou para os amigos e a quantidade de cafés que os
amigos juntos pagaram para 𝑨𝟐 é:

a) 0.

b) 1.

c) 2.

d) 3.

e) 4.

Comentários:

Segundo o problema, na matriz em questão, o elemento da linha 𝒊 e coluna 𝒌, que pode ser representado
genericamente por 𝑎𝑖𝑘, indica quantos cafés o amigo 𝑨𝒊 pagou para o amigo 𝑨𝒌.

Nesse momento, vamos obter a quantidade de cafés que 𝐴2 pagou para os amigos 𝐴1 e 𝐴3:

-
𝐴2 pagou para 𝐴1 a quantidade de cafés descrita na linha 2 e na coluna 1: 𝒂𝟐𝟏= 𝟑;
-
𝐴2 pagou para 𝐴3 a quantidade de cafés descrita na linha 2 e na coluna 3: 𝒂𝟐𝟑= 𝟐;
- Os elementos 𝑎21 e 𝑎23 estão destacados a seguir:

(

)

- Logo, a quantidade de cafés que 𝑨𝟐 pagou para os amigos 𝑨𝟏 e 𝑨𝟑 é:
𝑎21 + 𝑎23 = 3 + 2 = 𝟓

Agora, vamos obter a quantidade de cafés que 𝐴1 e 𝐴3 pagaram para o amigo 𝐴2:

-
𝐴1 pagou para 𝐴2 a quantidade de cafés descrita na linha 1 e na coluna 2: 𝒂𝟏𝟐= 𝟏;
-
𝐴3 pagou para 𝐴2 a quantidade de cafés descrita na linha 3 e na coluna 2: 𝒂𝟑𝟐= 𝟏;
- Os elementos 𝑎12 e 𝑎32 estão destacados a seguir:

(

0
𝟏
2
3
0
2
2
𝟏
0
)

- Logo, a quantidade de cafés que 𝑨𝟏 e 𝑨𝟑 pagaram para o amigo 𝑨𝟐 é:
𝑎12 + 𝑎32 = 1 + 1 = 𝟐

Portanto, a diferença entre a quantidade de cafés que 𝑨𝟐 pagou para os amigos e a quantidade de cafés
que os amigos juntos pagaram para 𝑨𝟐 é:

𝟓−𝟐= 3

Gabarito: Letra D.

(FGV/INPE/2024) Sobre multiplicação de matrizes, operação fundamental em álgebra linear, assinale a
afirmativa correta.

a) A multiplicação de matrizes é comutativa.

b) Uma matriz quadrada só pode ser multiplicada por outra matriz quadrada.

c) O produto de duas matrizes pode ter dimensões diferentes da matriz original.

d) A multiplicação de qualquer par de matrizes é sempre possível.

e) O produto de duas matrizes é sempre uma matriz quadrada.

Comentários:

Vamos avaliar as alternativas.

a) A multiplicação de matrizes é comutativa. ERRADO.

Conforme visto na teoria da aula, a regra é que a multiplicação de matrizes não é comutativa. Em outras
palavras, para duas matrizes 𝐴 e 𝐵 quaisquer, em regra 𝐴𝐵≠𝐵𝐴.

b) Uma matriz quadrada só pode ser multiplicada por outra matriz quadrada. ERRADO.

Para que o produto de duas matrizes exista, o número de colunas da primeira matriz deve ser igual ao
número de linhas da segunda. Logo, podemos ter, por exemplo, o produto de uma matriz quadrada 3×3 por
uma matriz linha 3×1.

c) O produto de duas matrizes pode ter dimensões diferentes da matriz original. CERTO.

Quando o número de colunas da primeira matriz é igual ao número de linhas da segunda, o produto das
matrizes existe. Uma vez que o produto existe, a matriz resultante apresenta a seguinte dimensão:

Número de linhas da primeira × Número de colunas da segunda

Logo, é correto afirmar que o produto de duas matrizes pode ter dimensões diferentes da matriz original.
Por exemplo, o produto de uma matriz 𝐴2×3 de dimensão 2×3 com uma matriz 𝐵3×4 de dimensão 3×4
resulta em uma matriz de dimensão 2×4:

d) A multiplicação de qualquer par de matrizes é sempre possível. ERRADO.

Para que o produto de duas matrizes seja possível, o número de colunas da primeira matriz deve ser igual
ao número de linhas da segunda.

e) O produto de duas matrizes é sempre uma matriz quadrada. ERRADO.

Conforme visto na alternativa C, o produto de uma matriz 𝐴2×3 de dimensão 2×3 com uma matriz 𝐵3×4 de
dimensão 3×4 resulta em uma matriz de dimensão 2×4. Logo, nem sempre o produto de duas matrizes será
uma matriz quadrada.

Gabarito: Letra C.

(FGV/INPE/2024) Sejam 𝑨 e 𝑩 duas matrizes tais que:

𝑨𝟐= 𝑩𝟐= [𝟏
𝟎
𝟎
𝟏]

𝑨𝑩= [𝟎
−𝟏
𝟏
𝟐] e 𝑩𝑨= [ 𝟐
𝟏
−𝟏
𝟎]

Então, a matriz (𝑨+ 𝑩)(𝑨−𝑩)𝟐𝟎𝟐𝟒 é:

a) [0
0
0
0]

b) [1
0
1]

c) [2024
2024]

d) [2024
−2024]

==5460==

e) [2024
2024]

Comentários:

Para resolver o problema, devemos observar inicialmente o que acontece ao elevar (𝑨−𝑩) ao quadrado.
Note que:

(𝐴−𝐵)2 = (𝐴−𝐵)(𝐴−𝐵)

= 𝐴2 −𝐴𝐵−𝐵𝐴+ 𝐵2

= [1
0
0
1] −[0
−1
1
2 ] −[ 2
1
−1
0] + [1
0
0
1]

= [0
0
0
0]

Logo, (𝑨−𝑩)𝟐 é a matriz nula. Observe, portanto, que ao elevarmos (𝑨−𝑩) a um expoente par, teremos
uma matriz nula. Para o expoente 2024, podemos dizer que:

(𝐴−𝐵)2024 = (𝐴−𝐵)(𝐴−𝐵)(𝐴−𝐵)(𝐴−𝐵) … (𝐴−𝐵)(𝐴−𝐵)
⏟

2024 vezes

= (𝐴−𝐵)2(𝐴−𝐵)2 … (𝐴−𝐵)2
⏟

1012 vezes

= [0
0
0
0] [0
0
0
0] … [0
0
0
0]
⏟

1012 vezes

= [0
0
0
0]

Portanto, a matriz procurada é o produto de (𝐴+ 𝐵) com a matriz nula, que resulta na matriz nula:

(𝐴+ 𝐵)(𝐴−𝐵)2024 = (𝐴+ 𝐵) [0
0
0
0]

= [0
0
0
0]

Gabarito: Letra A.

(FGV/SEAD-AP/2022) Seja 𝑨 a matriz 𝟐× 𝟐 onde cada elemento é 𝒂𝒊𝒋= 𝒊+ 𝒋.

A soma dos elementos da matriz 𝑨𝟐 é

a) 12.

b) 38.

c) 56.

d) 74.

e) 144.

Comentários:

Genericamente, a matriz 𝐴 pode ser representada da seguinte forma:

𝐴= [𝑎11
𝑎12
𝑎21
𝑎22]

Considerando a lei de formação 𝑎𝑖𝑗= 𝑖+ 𝑗, temos os seguintes elementos:

𝑎11 = 1 + 1 = 2

𝑎12 = 1 + 2 = 3

𝑎21 = 2 + 1 = 3

𝑎22 = 2 + 2 = 4

Portanto, temos a seguinte matriz 𝐴:

𝐴= [2
3
3
4]

A matriz 𝐴2 é dada pelo produto da matriz 𝐴 por ela mesma.

𝐴2 = [𝟐
𝟑
𝟑
𝟒] × [𝟐
𝟑
𝟑
𝟒]

𝐴2 = [𝟐. 𝟐+ 𝟑. 𝟑
𝟐. 𝟑+ 𝟑. 𝟒
𝟑. 𝟐+ 𝟒. 𝟑
𝟑. 𝟑+ 𝟒. 𝟒]

𝐴2 = [13
18
18
25]

Logo, a soma dos elementos da matriz 𝐴2 é:

13 + 18 + 18 + 25

= 74

Gabarito: Letra D.

(FGV/Senado Federal/2022) Uma sociedade empresária guarda documentos em 4 arquivos, numerados
de 1 a 4. Por razões de segurança, a cada ano ela muda todos os documentos de arquivo, mantendo
inalterado o número total de documentos em cada arquivo.

A mudança se dá de acordo com a tabela abaixo, em que, na linha i e coluna j está indicado o total de
documentos transferidos do arquivo i para o arquivo j.

O número X de documentos transferidos do arquivo 4 para o 1 é igual a

a) 20

b) 30

c) 40

d) 50

e) 60

Comentários:

Sabemos que o número total de documentos em cada arquivo deve permanecer inalterado.

Observe que o número X é o número de documentos transferidos do arquivo 4 para o arquivo 1.

Para obter o valor de X, devemos trabalhar com a ideia de que o número total de documentos do arquivo 1
permanece inalterado.

O enunciado nos diz que, na tabela apresentada, na linha 𝑖 e coluna 𝑗 está indicado o total de documentos
transferidos do arquivo 𝑖 para o arquivo 𝑗.

Na linha 1, temos o total de documentos transferidos do arquivo 1 para os demais arquivos.

-
Linha 1; Coluna 1 → 𝑎11 = 0 documentos saíram do arquivo 1 para chegar no arquivo 1;
-
Linha 1; Coluna 2 → 𝑎12 = 90 documentos saíram do arquivo 1 para chegar no arquivo 2;
-
Linha 1; Coluna 3 → 𝑎13 = 30 documentos saíram do arquivo 1 para chegar no arquivo 3;
-
Linha 1; Coluna 4 → 𝑎14 = 40 documentos saíram do arquivo 1 para chegar no arquivo 4.

Logo, o total de documentos que saíram do arquivo 1 é:

0 + 90 + 30 + 40

= 𝟏𝟔𝟎

Na coluna 1, temos o total de documentos transferidos de todos os arquivos para o arquivo 1.

-
Linha 1; Coluna 1 → 𝑎11 = 0 documentos saíram do arquivo 1 para chegar no arquivo 1;
-
Linha 2; Coluna 1 → 𝑎21 = 60 documentos saíram do arquivo 2 para chegar no arquivo 1;

-
Linha 3; Coluna 1 → 𝑎31 = 80 documentos saíram do arquivo 3 para chegar no arquivo 1;
-
Linha 4; Coluna 1 → 𝑎41 = 𝑋 documentos saíram do arquivo 4 para chegar no arquivo 1;

Logo, o total de documentos que chegaram no arquivo 1 é:

0 + 60 + 80 + 𝑋

= 𝟏𝟒𝟎+ 𝑿

Como o número total de documentos no arquivo 1 deve permanecer inalterado, o número de documentos
que saíram do arquivo 1 é igual ao número de documentos que chegaram no arquivo 1. Logo:

𝟏𝟔𝟎= 𝟏𝟒𝟎+ 𝑿

𝑋= 20

Nesse caso, temos como gabarito a letra A.

Infelizmente, a questão teve que ser anulada por conta de uma inconsistência no enunciado. Isso porque,
ao contrário do que diz o enunciado, o número total de documentos em cada arquivo não permanece
inalterado.

Note, por exemplo, que na linha 2 temos o total de documentos que saíram do arquivo 2:

60 + 0 + 60 + 40 = 160

Além disso, na coluna 2 temos o total de documentos que chegaram no arquivo 2:

90 + 0 + 20 + 100 = 210

Note, portanto, que o enunciado erra ao dizer que o número total de documentos em cada arquivo não
permanece inalterado, pois para o arquivo 2 isso não é verdade.

Gabarito: ANULADA.

(FGV/TCE-TO/2022) Para um dia de treinamento, os funcionários de uma empresa foram alocados em
três salas: Sala 1, Sala 2 e Sala 3. Tendo sido realizada a primeira parte do treinamento, foi feito um

intervalo, após o qual os funcionários puderam escolher livremente qualquer sala para a segunda parte do
treinamento.

Na matriz 𝑨 abaixo, cada elemento 𝒂𝒊𝒋 representa o número de funcionários que estavam na Sala 𝒊 e
foram para a Sala 𝒋 após o intervalo.

𝑨= [

]

É correto concluir que:

a) a Sala 1 terminou com 2 funcionários a mais que no início;

b) a Sala 2 terminou com 20 funcionários;

c) a Sala 3 terminou com 3 funcionários a mais que no início;

d) a Sala 1 iniciou com 15 funcionários;

e) uma das salas terminou com o mesmo número de funcionários que tinha no início.

Comentários:

Na matriz apresentada, o elemento 𝑎𝑖𝑗, posicionado na linha 𝑖 e na coluna 𝑗, representa o número de
funcionários que estavam na Sala 𝒊 e, após o intervalo, passaram a estar na Sala 𝒋.

Na linha 1, temos o total de funcionários que estavam na sala 1 e, após o intervalo, passaram a estar nas
três diferentes salas.

-
𝑎11 = 5 funcionários estavam na sala 1 e, após o intervalo, permaneceram na sala 1;
-
𝑎12 = 2 funcionários estavam na sala 1 e, após o intervalo, passaram a estar na sala 2;
-
𝑎13 = 7 funcionários estavam na sala 1 e, após o intervalo, passaram a estar na sala 3.

Perceba, portanto, que o total de funcionários que estavam na sala 1 na primeira parte do treinamento
corresponde à soma dos elementos da linha 1:

5 + 2 + 7 = 14

Na coluna 1, temos o total de funcionários que estavam nas três salas e, após o intervalo, passaram a estar
na sala 1.

-
𝑎11 = 5 funcionários estavam na sala 1 e, após o intervalo, permaneceram na sala 1;
-
𝑎21 = 4 funcionários estavam na sala 2 e, após o intervalo, passaram a estar na sala 1;
-
𝑎31 = 3 funcionários estavam na sala 3 e, após o intervalo, passaram a estar na sala 1.

Perceba, portanto, que o total de funcionários que permaneceram ou passaram a estar na sala 1 na
segunda parte do treinamento corresponde à soma dos elementos da coluna 1:

5 + 4 + 3 = 12

Vamos fazer essa análise para as demais salas. Sabemos que:

-
A soma dos elementos da linha 𝒊 corresponde ao total de funcionários que estavam na Sala 𝒊 na primeira
parte do treinamento;
-
A soma dos elementos da coluna 𝒋 corresponde ao total de funcionários que, após o intervalo,
permaneceram ou passaram a estar na Sala 𝒋 na segunda parte do treinamento.

Temos, portanto, o seguinte esquema:

Sala

Antes do intervalo

(soma dos elementos da linha)

Após o intervalo

(soma dos elementos da

coluna)

Saldo

(Final − Inicial)

1
5+2+7 = 14
5+4+3 = 12
12 − 14 = −2
2
4+9+6 = 19
2+9+8 = 19
19 − 19 = 0
3
3+8+10 = 21
7+6+10 = 23
23−21 = 2

Note, portanto, que é correto afirmar que uma das salas terminou com o mesmo número de funcionários
que tinha no início. Trata-se da Sala 2.

Gabarito: Letra E.

### (FGV/MPE SC/2022)

Seja 𝑨= [𝟐
𝟏
𝟑
𝟏].

A soma dos elementos da matriz 𝑨𝟐 é:

a) 10;

b) 12;

c) 15;

d) 23;

e) 30.

Comentários:

Note que a matriz 𝐴2 é:

𝐴2 = 𝐴× 𝐴

= [𝟐
𝟏
𝟑
𝟏] × [𝟐
𝟏
𝟑
𝟏]

= [𝟐. 𝟐+ 𝟏. 𝟑
𝟐. 𝟏+ 𝟏. 𝟏
𝟑. 𝟐+ 𝟏. 𝟑
𝟑. 𝟏+ 𝟏. 𝟏]

= [7
3
9
4]

Logo, a soma dos elementos da matriz 𝐴2 é:

7 + 3 + 9 + 4

= 23

Gabarito: Letra D.

(FGV/Pref Paulínia/2021) Considere a equação matricial 𝑨𝟐𝑿−𝟏𝑩−𝟏= 𝑨𝑪, onde 𝑨, 𝑩, 𝑪 e 𝑿 são matrizes

quadradas invertíveis e de mesma ordem.

A solução 𝑿 é igual a

a) 𝐴𝐵−1𝐶−1

b) 𝐴𝐶−1𝐶−1

c) 𝐶𝐴−1𝐵

d) 𝐴−1𝐵𝐶

e) 𝐵−1𝐶−1𝐴

Comentários:

Sabemos que todas as matrizes quadradas são inversíveis e de mesma ordem. Note que:

𝐴2𝑋−1𝐵−1 = 𝐴𝐶

𝐴𝐴𝑋−1𝐵−1 = 𝐴𝐶

Ao multiplicar ambos os lados da equação por 𝑨−𝟏, pela esquerda, temos:

𝑨−𝟏𝐴𝐴𝑋−1𝐵−1 = 𝑨−𝟏𝐴𝐶

(𝐴−1𝐴)𝐴𝑋−1𝐵−1 = (𝐴−1𝐴)𝐶

(𝐼)𝐴𝑋−1𝐵−1 = (𝐼)𝐶

𝐴𝑋−1𝐵−1 = 𝐶

Ao multiplicar ambos os lados da equação novamente por 𝑨−𝟏, pela esquerda, temos:

𝑨−𝟏𝐴𝑋−1𝐵−1 = 𝑨−𝟏𝐶

(𝐴−1𝐴)𝑋−1𝐵−1 = 𝐴−1𝐶

(𝐼)𝑋−1𝐵−1 = 𝐴−1𝐶

𝑋−1𝐵−1 = 𝐴−1𝐶

Ao multiplicar ambos os lados da equação por 𝑿, pela esquerda, temos:

𝑿𝑋−1𝐵−1 = 𝑿𝐴−1𝐶

(𝑋𝑋−1)𝐵−1 = 𝑋𝐴−1𝐶

(𝐼)𝐵−1 = 𝑋𝐴−1𝐶

𝐵−1 = 𝑋𝐴−1𝐶

Logo:

𝑋𝐴−1𝐶= 𝐵−1

Ao multiplicar ambos os lados da equação por 𝑪−𝟏, pela direita, temos:

𝑋𝐴−1𝐶 𝑪−𝟏= 𝐵−1 𝑪−𝟏

𝑋𝐴−1(𝐶 𝐶−1) = 𝐵−1 𝐶−1

𝑋𝐴−1(𝐼) = 𝐵−1 𝐶−1

𝑋𝐴−1 = 𝐵−1 𝐶−1

Finalmente, ao multiplicar ambos os lados da equação por 𝑨, pela direita, temos:

𝑋𝐴−1𝑨= 𝐵−1 𝐶−1𝑨

𝑋(𝐴−1𝐴) = 𝐵−1 𝐶−1𝐴

𝑋(𝐼) = 𝐵−1 𝐶−1𝐴

𝑿= 𝑩−𝟏 𝑪−𝟏𝑨

Gabarito: Letra E.

(FGV/Pref. Salvador/2019) Considere as matrizes 𝑨𝟐×𝟑 e 𝑩𝟐×𝟐.

Sobre essas matrizes é correto afirmar que

a) Existe a soma 𝐴+ 𝐵 e é uma matriz 4 × 5.

b) Existe o produto 𝐴𝐵 e é uma matriz 4 × 6.

c) Existe o produto 𝐵𝐴 e é uma matriz 4 × 6.

d) Não existe o produto 𝐴𝐵.

e) Não existe o produto 𝐵𝐴.

Comentários:

Vamos comentar as alternativas.

a) Existe a soma 𝑨+ 𝑩 e é uma matriz 𝟒× 𝟓. ERRADO.

Para somar ou subtrair matrizes, é necessário que elas tenham a mesma dimensão. Como a matriz 𝐴
apresenta dimensão 2 × 3 e a matriz 𝐵 apresenta dimensão 2 × 2, a soma 𝐴+ 𝐵 não é possível.

b) Existe o produto 𝑨𝑩 e é uma matriz 𝟒× 𝟔. ERRADO.

d) Não existe o produto 𝑨𝑩. CERTO.

Para multiplicar matrizes, deve-se verificar se o número de colunas da primeira matriz é igual ao número de
linhas da segunda. Se essa igualdade não se verificar, não é possível realizar o produto das matrizes.

Veja, portanto, que o produto 𝑨𝑩 não existe, pois 𝐴2×𝟑 apresenta 3 colunas e 𝐵𝟐×2 apresenta 2 linhas. Logo,
o gabarito é letra D.

c) Existe o produto 𝑩𝑨 e é uma matriz 𝟒× 𝟔. ERRADO.

e) Não existe o produto 𝑩𝑨. ERRADO.

Para fins didáticos, vamos verificar o produto 𝐵𝐴.

Note que o número de colunas da primeira matriz (matriz 𝐵2×𝟐, 2 colunas) é igual ao número de linhas da
segunda (matriz 𝐴𝟐×3, 2 linhas). Logo, o produto 𝐴𝐵 é possível. Observe, porém, que a matriz-produto
apresenta a dimensão 𝟐× 𝟑, não 4 × 6.

Gabarito: Letra D.

(FGV/SAD PE/2009) Considere a matriz 𝑨= ( 𝟏
𝟎
−𝟏
−𝟏) e seja 𝒏 um número natural maior que 𝟏. Na

matriz 𝑨𝟐𝒏, o elemento que ocupa a 1ª linha e 2ª coluna é:

a) −1

b) 0

c) 1

d) 𝑛

e) 2𝑛

Comentários:

Note que a matriz 𝐴2 é:

𝐴2 = 𝐴× 𝐴

= [ 𝟏
−𝟏
−𝟏] × [ 𝟏
−𝟏
−𝟏]

= [
𝟏. 𝟏+ 𝟎. (−𝟏)
𝟏. 𝟎+ 𝟎. (−𝟏)
(−𝟏). 𝟏+ (−𝟏). (−𝟏)
(−𝟏). 𝟎+ (−𝟏). (−𝟏)]

= [1
0
0
1]

Observe, portanto, que 𝐴2 é a matriz identidade de ordem 2, isto é, 𝐴2 = 𝐼2. A matriz 𝐴2𝑛 pode ser escrita
como:

𝐴2𝑛= (𝑨𝟐)𝑛

Como 𝑨𝟐= 𝑰𝟐, temos:

𝐴2𝑛= (𝑰𝟐)𝑛

Sabemos que a matriz identidade é o elemento neutro da multiplicação, isto é, qualquer matriz multiplicada
pela identidade resulta na própria matriz identidade. Logo:

𝐴2𝑛= 𝐼2

𝐴2𝑛= [1
0
0
1]

Portanto, o elemento de 𝐴2𝑛 que ocupa a 1ª linha e 2ª coluna é 0. O gabarito, portanto, é letra B.

Observação: por que 𝐴2𝑛= (𝐴2)𝑛?

Veja que:

𝐴2𝑛= 𝐴× 𝐴× 𝐴× 𝐴× … × 𝐴× 𝐴
⏟

2𝑛 vezes a matriz A

Podemos agrupar as matrizes de 2 em 2:

𝐴2𝑛= (𝐴× 𝐴) × (𝐴× 𝐴) × … × (𝐴× 𝐴)
⏟

2𝑛 vezes a matriz A

Logo, o produto corresponde a 𝑛 vezes a matriz 𝐴2:

𝐴2𝑛= (𝐴2) × (𝐴2) × … × (𝐴2)
⏟

𝑛 vezes a matriz A2

Logo:

𝐴2𝑛= (𝐴2)𝑛

Gabarito: Letra B.

## QUESTÕES COMENTADAS – FGV

### Determinantes

(FGV/INPE/2024) As operações matriciais desempenham um papel crucial em várias áreas, incluindo
matemática aplicada, engenharia, ciências naturais e computação. A partir das operações matriciais pode-
se resolver sistemas lineares, realizar o processamento de imagens e sinais, dentre outras aplicações.

Sobre as operações matriciais, assinale a afirmativa correta.

a) A matriz identidade é uma matriz quadrada que possui todos os elementos iguais a 1.

b) A multiplicação de duas matrizes é comutativa, ou seja, AB = BA para quaisquer matrizes A e B.

c) A transposição de uma matriz consiste em inverter suas linhas com suas colunas.

d) A determinante de uma matriz é sempre um número inteiro.

e) A inversa de uma matriz é a mesma matriz transposta.

Comentários:

Vamos verificar as alternativas.

a) A matriz identidade é uma matriz quadrada que possui todos os elementos iguais a 1. ERRADO.

A matriz identidade é uma matriz quadrada que possui os elementos da diagonal principal iguais a 1 e os
demais elementos iguais a zero. Exemplo:

𝐼3 = [

1
0
0
0
1
0
0
0
1
]

b) A multiplicação de duas matrizes é comutativa, ou seja, AB = BA para quaisquer matrizes A e B. ERRADO.

Conforme visto na teoria da aula, a regra é que a multiplicação de matrizes não é comutativa. Em outras
palavras, para duas matrizes 𝐴 e 𝐵 quaisquer, em regra 𝐴𝐵≠𝐵𝐴.

c) A transposição de uma matriz consiste em inverter suas linhas com suas colunas. CERTO.

De fato, a transposição de uma matriz consiste em inverter suas linhas com suas colunas. Para uma matriz 𝐴
qualquer, a sua matriz transposta 𝐴𝑡 é obtida do seguinte modo:

- A primeira linha de 𝐴 se torna a primeira coluna de 𝐴𝑡;
- A segunda linha de 𝐴 se torna a segunda coluna de 𝐴𝑡;
- A terceira linha de 𝐴 se torna a terceira coluna de 𝐴𝑡;
- Etc.

Exemplo:

𝐴= [

−𝟕
−𝟓
−𝟒

] →𝐴𝑡= [

−𝟓
−𝟕
−𝟒

]

d) A determinante de uma matriz é sempre um número inteiro. ERRADO.

O determinante de uma matriz nem sempre é um número inteiro. Para a matriz 𝐴= [ 1
1
0,5
1], por exemplo,

temos o seguinte determinante:

| 𝟏
𝟏
𝟎, 𝟓
𝟏| = 𝟏× 𝟏−𝟏× 𝟎, 𝟓

1 −0,5

= 0,5

e) A inversa de uma matriz é a mesma matriz transposta. ERRADO.

A inversa de uma matriz 𝑨 (notação: 𝐴−1) é aquela matriz que, quando multiplicada pela matriz 𝐴, tem
como resultado a matriz identidade:

𝐴−1𝐴= 𝐼𝑛

Trata-se de um conceito diferente de transposição de matrizes.

Destaca-se que a inversa de uma matriz é igual a sua transposta somente no caso específico em que temos
uma matriz ortogonal.

𝐴 é ortogonal  𝐴−1 = 𝐴𝑡

Gabarito: Letra C.

(FGV/EPE/2024/ADAPTADA) Considere as matrizes a seguir:

𝑨= [

𝟐
𝟏𝟔
𝟓
𝟏𝟏
𝟒
𝟏𝟐
𝟗
𝟕
𝟑

] 𝑩= [

𝟏
𝟐𝟏
𝟔
𝟗

𝟐
𝟎
𝟏𝟔
𝟓
𝟖
𝟏𝟏
𝟐
𝟗

𝟒
𝟏𝟐
𝟕
𝟑

]

Sobre essas matrizes, analise as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.

( ) As matrizes 𝑨 e 𝑩 são matrizes quadradas de ordem 3 e 4, respectivamente.

( ) As matrizes 𝑨 e 𝑩 não podem ser multiplicadas, uma vez que o número de colunas da primeira matriz
é diferente do número de linhas da segunda.

( ) O determinante da matriz 𝑨 é −156.

As afirmativas são, respectivamente,

a) V – V – V.

b) V – V – F.

c) V – F – V.

d) F – F – V.

e) F – V – V.

Comentários:

Vamos verificar as afirmativas.

(V) As matrizes 𝑨 e 𝑩 são matrizes quadradas de ordem 3 e 4, respectivamente.

A matriz 𝑨 é uma matriz com 3 linhas e 3 colunas. Como o número de linhas é igual ao número de colunas,
temos uma matriz quadrada. Como a matriz quadrada tem dimensão 3×3, diz-se que ela é de ordem 3.

A matriz 𝑩 é uma matriz com 4 linhas e 4 colunas. Como o número de linhas é igual ao número de colunas,
temos uma matriz quadrada. Como a matriz quadrada tem dimensão 4×4, diz-se que ela é de ordem 4.

(V) As matrizes 𝑨 e 𝑩 não podem ser multiplicadas, uma vez que o número de colunas da primeira matriz
é diferente do número de linhas da segunda.

Para que o produto de duas matrizes exista, o número de colunas da primeira matriz deve ser igual ao
número de linhas da segunda. Logo, as matrizes em questão não podem ser multiplicadas, pois o número
de colunas da matriz 𝐴 é 3 e o número de linhas da matriz 𝐵 é 4.

(F) O determinante da matriz 𝑨 é −156.

Como a matriz 𝐴 é de ordem 3, podemos calcular o seu determinante pela regra de Sarrus:

|

2
16
5
11
4
12
9
7
3
|

2
16
11
4
9
7

Parte Negativa Parte Positiva

det 𝐴= [𝟐. 𝟒. 𝟑+ 𝟏𝟔. 𝟏𝟐. 𝟗+ 𝟓. 𝟏𝟏. 𝟕] −[𝟓. 𝟒. 𝟗+ 𝟐. 𝟏𝟐. 𝟕+ 𝟏𝟔. 𝟏𝟏. 𝟑]

= [24 + 1728 + 385] −[180 + 168 + 528]

= 2137 −876

= 1261

Logo, as afirmativas são, respectivamente, V – V – F.

Gabarito: Letra B.

(FGV/INPE/2024) Se 𝑨 é uma matriz quadrada de ordem 𝒏 tal que 𝑨𝟐 = 𝒌𝑨 , sendo 𝒌 um número real
positivo. Sabendo que o determinante de 𝑨, 𝒅𝒆𝒕(𝑨), é diferente de zero, então,

a) 𝑑𝑒𝑡(𝐴) = 𝑘

==5460==

b) 𝑑𝑒𝑡(𝐴) = 1

c) 𝑑𝑒𝑡(𝐴) = 0

d) 𝑑𝑒𝑡(𝐴) = 𝑘𝑛

e) 𝑑𝑒𝑡(𝐴) = −𝑘𝑛

Comentários:

Segundo o problema, a matriz 𝐴2 é igual à matriz 𝑘𝐴. Logo, os determinantes de 𝑨𝟐 e de 𝒌𝑨 também são
iguais:

det(𝐴2) = det(𝑘𝐴)

Podemos escrever 𝐴2 como o produto 𝐴. 𝐴:

det(𝐴. 𝐴) = det(𝑘𝐴)

Pelo Teorema de Binet, sabemos que o determinante do produto é o produto dos determinantes. Ficamos
com:

det(𝐴) × det(𝐴) = det(𝑘𝐴)

Além disso, sendo a matriz de ordem 𝒏, temos que 𝐝𝐞𝐭(𝒌𝑨) = 𝒌𝒏𝐝𝐞𝐭(𝑨). Ficamos com:

det(𝐴) × det(𝐴) = 𝑘𝑛det(𝐴)

Como det(𝐴) é diferente de zero, podemos simplificar os dois lados da equação:

det(𝐴) × 𝐝𝐞𝐭(𝑨) = 𝑘𝑛𝐝𝐞𝐭(𝑨)

det(𝐴) = 𝑘𝑛

Gabarito: Letra D.

(FGV/MPE SC/2022) Seja A uma matriz 4 x 4 cujo determinante é igual a 2.

O determinante da matriz 3A é igual a:

a) 6;

b) 12;

c) 24;

d) 64;

e) 162.

Comentários:

Sabemos que, ao multiplicar uma matriz de ordem 𝒏 por uma constante 𝒌, o determinante dessa nova
matriz fica multiplicado por 𝒌𝒏.

det(𝑘𝐴) = 𝑘𝑛det 𝐴

Como a matriz 𝐴 é de ordem 𝑛= 4, temos:

det(3𝐴) = 34 det 𝐴

det(3𝐴) = 81 × 2

det(3𝐴) = 162

Gabarito: Letra E.

(FGV/MPE SC/2022) Considere as matrizes 𝑨= [

𝒂
𝒃
𝒄
𝒅
𝒆
𝒇
𝒈
𝒉
𝒌

] e 𝑩= [

𝟐𝒂
𝒄
𝟑𝒃
𝟐𝒅
𝒇
𝟑𝒆
𝟐𝒈
𝒌
𝟑𝒉

].

Sendo 𝒅𝒆𝒕(𝑨) e 𝒅𝒆𝒕(𝑩) os determinantes das matrizes 𝑨 e 𝑩, respectivamente, tem-se que:

a) 𝑑𝑒𝑡(𝐴) = 6 × 𝑑𝑒𝑡(𝐵);

b) 𝑑𝑒𝑡(𝐴) = −6 × 𝑑𝑒𝑡(𝐵);

c) 𝑑𝑒𝑡(𝐵) = 6 × 𝑑𝑒𝑡(𝐴);

d) 𝑑𝑒𝑡(𝐵) = −6 × 𝑑𝑒𝑡(𝐴);

e) 𝑑𝑒𝑡(𝐴) = 𝑑𝑒𝑡(𝐵).

Comentários:

Sabemos que, ao multiplicar uma fila (linha ou coluna) de uma matriz por uma constante 𝒌, o determinante
dessa nova matriz também fica multiplicado por 𝒌.

Uma consequência interessante dessa propriedade é realizar a operação inversa, removendo um fator
comum de dentro do determinante.

Veja que:

det(𝐵) = |

𝟐𝑎
𝑐
𝟑𝑏
𝟐𝑑
𝑓
𝟑𝑒
𝟐𝑔
𝑘
𝟑ℎ

|

det(𝐵) = 𝟐× |

𝑎
𝑐
𝟑𝑏
𝑑
𝑓
𝟑𝑒
𝑔
𝑘
𝟑ℎ

|

det(𝐵) = 𝟐× 𝟑× |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

|

det(𝐵) = 6 × |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

|
⏟

𝒙

Note que 𝑥= |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

| é muito parecido com det(𝐴). A diferença é que a segunda e a terceira coluna

estão trocadas.

Sabemos que ao trocarmos uma fila (linha ou coluna) de lugar com outra fila paralela, o determinante muda
de sinal. Logo:

|

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

| = 𝑥→|

𝒂
𝒃
𝒄
𝒅
𝒆
𝒇
𝒈
𝒉
𝒌

|
⏟

det(𝐴)

= −𝑥

Portanto:

det(𝐴) = −𝑥

𝑥= −det(𝐴)

Consequente, temos que det(𝐵) é dado por:

det(𝐵) = 6 × |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

|
⏟

𝒙

det(𝐵) = −6 × 𝑑𝑒𝑡 (𝐴)

Gabarito: Letra D.

(FGV/SAD PE/2009) O determinante da matriz [

𝟐
𝟏
𝟓
𝟑
𝟏
𝟐
𝟏
𝟎
𝟑

] é:

a) 22

b) 9

c) 0

d) −6

e) −10

Comentários:

Vamos desenvolver o determinante pela regra de Sarrus:

|

2
1
5
3
1
2
1
0
3
|

2
1
3
1
1
0

Parte Negativa Parte Positiva

det 𝑀= [𝟐. 𝟏. 𝟑+ 𝟏. 𝟐. 𝟏+ 𝟓. 𝟑. 𝟎] −[𝟓. 𝟏. 𝟏+ 𝟐. 𝟐. 𝟎+ 𝟏. 𝟑. 𝟑]

= [6 + 2 + 0] −[5 + 0 + 9]

= 8 −14

= −6

Gabarito: Letra D.

## QUESTÕES COMENTADAS – MULTIBANCAS

### Matrizes

(FGV/Pref. Caraguatatuba/2024) Três amigos 𝑨𝟏, 𝑨𝟐 e 𝑨𝟑 foram juntos a uma cafeteria. A matriz

(

𝟎
𝟏
𝟐
𝟑
𝟎
𝟐
𝟐
𝟏
𝟎

) indica quantos cafés cada um pagou para outro. Nessa matriz, o elemento da linha 𝒊 e

coluna 𝒌 indica quantos cafés o amigo 𝑨𝒊 pagou para o amigo 𝑨𝒌.

A diferença entre a quantidade de cafés que 𝑨𝟐 pagou para os amigos e a quantidade de cafés que os
amigos juntos pagaram para 𝑨𝟐 é:

a) 0.

b) 1.

c) 2.

d) 3.

e) 4.

Comentários:

Segundo o problema, na matriz em questão, o elemento da linha 𝒊 e coluna 𝒌, que pode ser representado
genericamente por 𝑎𝑖𝑘, indica quantos cafés o amigo 𝑨𝒊 pagou para o amigo 𝑨𝒌.

Nesse momento, vamos obter a quantidade de cafés que 𝐴2 pagou para os amigos 𝐴1 e 𝐴3:

-
𝐴2 pagou para 𝐴1 a quantidade de cafés descrita na linha 2 e na coluna 1: 𝒂𝟐𝟏= 𝟑;
-
𝐴2 pagou para 𝐴3 a quantidade de cafés descrita na linha 2 e na coluna 3: 𝒂𝟐𝟑= 𝟐;
- Os elementos 𝑎21 e 𝑎23 estão destacados a seguir:

(

0
1
2
𝟑
0
𝟐
2
1
0
)

- Logo, a quantidade de cafés que 𝑨𝟐 pagou para os amigos 𝑨𝟏 e 𝑨𝟑 é:
𝑎21 + 𝑎23 = 3 + 2 = 𝟓

Agora, vamos obter a quantidade de cafés que 𝐴1 e 𝐴3 pagaram para o amigo 𝐴2:

-
𝐴1 pagou para 𝐴2 a quantidade de cafés descrita na linha 1 e na coluna 2: 𝒂𝟏𝟐= 𝟏;
-
𝐴3 pagou para 𝐴2 a quantidade de cafés descrita na linha 3 e na coluna 2: 𝒂𝟑𝟐= 𝟏;
- Os elementos 𝑎12 e 𝑎32 estão destacados a seguir:

(

)

- Logo, a quantidade de cafés que 𝑨𝟏 e 𝑨𝟑 pagaram para o amigo 𝑨𝟐 é:
𝑎12 + 𝑎32 = 1 + 1 = 𝟐

Portanto, a diferença entre a quantidade de cafés que 𝑨𝟐 pagou para os amigos e a quantidade de cafés
que os amigos juntos pagaram para 𝑨𝟐 é:

𝟓−𝟐= 3

Gabarito: Letra D.

(FGV/INPE/2024) Sejam 𝑨 e 𝑩 duas matrizes tais que:

𝑨𝟐= 𝑩𝟐= [𝟏
𝟎
𝟎
𝟏]

𝑨𝑩= [𝟎
−𝟏
𝟏
𝟐] e 𝑩𝑨= [ 𝟐
𝟏
−𝟏
𝟎]

Então, a matriz (𝑨+ 𝑩)(𝑨−𝑩)𝟐𝟎𝟐𝟒 é:

a) [0
0
0
0]

b) [1
0
0
1]

c) [2024
1
0
2024]

d) [2024
1
0
−2024]

e) [2024
0
0
2024]

Comentários:

Para resolver o problema, devemos observar inicialmente o que acontece ao elevar (𝑨−𝑩) ao
quadrado. Note que:

(𝐴−𝐵)2 = (𝐴−𝐵)(𝐴−𝐵)

= 𝐴2 −𝐴𝐵−𝐵𝐴+ 𝐵2

= [1
0
0
1] −[0
−1
1
2 ] −[ 2
1
−1
0] + [1
0
0
1]

= [0
0
0
0]

Logo, (𝑨−𝑩)𝟐 é a matriz nula. Observe, portanto, que ao elevarmos (𝑨−𝑩) a um expoente par,
teremos uma matriz nula. Para o expoente 2024, podemos dizer que:

(𝐴−𝐵)2024 = (𝐴−𝐵)(𝐴−𝐵)(𝐴−𝐵)(𝐴−𝐵) … (𝐴−𝐵)(𝐴−𝐵)
⏟

2024 vezes

= (𝐴−𝐵)2(𝐴−𝐵)2 … (𝐴−𝐵)2
⏟

1012 vezes

= [0
0] [0
0] … [0
0]
⏟

1012 vezes

= [0
0
0
0]

Portanto, a matriz procurada é o produto de (𝐴+ 𝐵) com a matriz nula, que resulta na matriz nula:

(𝐴+ 𝐵)(𝐴−𝐵)2024 = (𝐴+ 𝐵) [0
0
0
0]

= [0
0
0
0]

Gabarito: Letra A.

(IDECAN/GCM Pref. Serra/2023) Sendo a matriz B, a resultante do produto de −1/5 pela matriz:

𝑨=

(

𝟐

𝟑

𝟏

𝟖

𝟏

𝟓
−

𝟏

𝟑
−

𝟏

𝟗

𝟐

𝟕
𝟏

𝟓

𝟏

𝟑

𝟑

𝟒)

, podemos afirmar que

a) 𝑏11 é

1

25

b) 𝑏21 é

1

45

c) 𝑏22 é −

2

35

d) 𝑏31 é −

1

25

Comentários:

Inicialmente, vamos obter a matriz 𝐵:

𝐵= −1

5 × 𝐴

𝐵= −𝟏

𝟓×

(

2
3
1
8
1
5

−1

3
−1

9
2
7
1
5
1
3
3
4)

𝐵=

(

−𝟏

𝟓× 2

−𝟏

𝟓× 1

−𝟏

𝟓× 1

−𝟏

𝟓× (−1

3)
−𝟏

𝟓× (−1

9)
−𝟏

𝟓× 2

7

−𝟏

𝟓× 1

5
−𝟏

𝟓× 1

3
−𝟏

𝟓× 3

4)

𝐵=

(

−2

15
−1

40
−1

25
1
15
1
45
−2

35

−1

25
−1

15
−3

20)

Um elemento genérico 𝑏𝑖𝑗 da matriz 𝐵 é um elemento posicionado na linha 𝑖 e na coluna 𝑗 dessa matriz.
Para os elementos presentes nas alternativas, temos que:

- 𝑏11 é o elemento que está na linha 1 e na coluna 1: −
2

15;

- 𝑏21 é o elemento que está na linha 2 e na coluna 1:
1

15;

- 𝑏22 é o elemento que está na linha 2 e na coluna 2:
1

45; e

- 𝑏31 é o elemento que está na linha 3 e na coluna 1: −
1

25.

Logo, podemos afirmar que 𝒃𝟑𝟏 é −

𝟏

𝟐𝟓.

Gabarito: Letra D.

(IDECAN/Procurador Pref. SCS/2023) Genericamente, qualquer elemento de uma matriz 𝑨 pode ser
representada por 𝒂𝒊𝒋, onde “𝒊” representa a linha e “𝒋” a coluna em que esse elemento se localiza. Uma
matriz 𝑴= (𝒎𝒊𝒋), de oitava ordem, é a matriz resultante da soma das matrizes 𝑷= (𝒑𝒊𝒋) e 𝑸= (𝒒𝐢𝐣).
Sabendo-se que (𝒑𝒊𝒋) = 𝒊𝟐+ 𝒋𝟐 e que (𝒒𝒊𝒋) = (𝒊+ 𝒋)𝟐, então a diferença entre os elementos 𝒎𝟖𝟏 e 𝒎𝟏𝟖

é igual a:

a) 2

b) 1

c) 0

d) −1

Comentários:

Para resolver o problema, note que não se faz necessário obter todos os elementos da matriz 𝑀.
Precisamos obter somente 𝒎𝟖𝟏 e 𝒎𝟏𝟖 para, em seguida, obter a diferença 𝒎𝟖𝟏−𝒎𝟏𝟖.

Como a matriz 𝑀 é a matriz resultante da soma das matrizes 𝑃 e 𝑄, temos que, para qualquer linha 𝑖 e
qualquer coluna 𝑗, cada elemento 𝑚𝑖𝑗 é resultante da soma dos elementos 𝑝𝑖𝑗 e 𝑞𝑖𝑗:

𝑚𝑖𝑗= 𝑝𝑖𝑗+ 𝑞𝑖𝑗

Logo:

𝑚81 = 𝑝81 + 𝑞81

𝑚18 = 𝑝18 + 𝑞18

Conforme apresentado no enunciado, 𝑝𝑖𝑗= 𝑖2 + 𝑗2. Logo:

- 𝑝81 = 82 + 12 = 64 + 1 = 65; e
- 𝑝18 = 12 + 82 = 1 + 64 = 65.

Além disso, sabemos que 𝑞𝑖𝑗= (𝑖+ 𝑗)2. Logo:

- 𝑞81 = (8 + 1)2 = 92 = 81; e
- 𝑞18 = (1 + 8)2 = 92 = 81.

Portanto:

- 𝑚81 = 𝑝81 + 𝑞81 = 65 + 81 = 146; e
- 𝑚18 = 𝑝18 + 𝑞18 = 65 + 81 = 146.

Logo, a diferença entre os elementos 𝑚81 e 𝑚18 é:

146 −146

= 0

Gabarito: Letra C.

(IDECAN/Pref. SCS/2023) Suponha que você é um analista de dados em uma empresa de logística e
está trabalhando em um projeto para otimizar as rotas de entrega. Para isso, você utiliza matrizes para
representar os diferentes pontos de entrega e as distâncias entre eles.

Dadas as matrizes A e B que representam as distâncias entre os pontos de entrega em dois cenários
diferentes:

𝑨= (𝟐
−𝟏
𝟒) e 𝑩= (𝟓
𝟎
𝟐)

Você precisa calcular a matriz resultante da multiplicação para analisar as distâncias entre os pontos no
cenário final. Determine o resultado dessa operação.

a) ( 9
−2
8 )

b) ( 9
14
8)

c) (13
−2
19
7 )

d) (11
0
18
8)

Comentários:

Devemos obter o produto entre as matrizes 𝐴𝟐×𝟐 e 𝐵𝟐×𝟐. Para realizar o produto 𝐴𝐵, note que:

- O produto é possível, pois o número de colunas da primeira matriz (𝐴) é igual ao número de linhas
da segunda (𝐵);
- A matriz-produto apresenta a dimensão 2 × 2:
Número de linhas da primeira × Número de colunas da segunda

Realizando o produto, temos:

𝐴𝐵= (𝟐
−𝟏
𝟑
𝟒) × (𝟓
𝟎
𝟏
𝟐)

= (𝟐. 𝟓+ (−𝟏). 𝟏
𝟐. 𝟎+ (−𝟏). 𝟐
𝟑. 𝟓+ 𝟒. 𝟏
𝟑. 𝟎+ 𝟒. 𝟐)

= ( 9
−2
19
8 )

Gabarito: Letra A.

(CESGRANRIO/BB/2023) Em uma cidade, as empresas tendem a se tornar clientes de três grandes
bancos (1, 2 e 3). Na matriz A, apresentada a seguir, o elemento da linha 𝒊 e da coluna 𝒋 representa o
número de empresas que deixaram de ser clientes do banco 𝒊 e se tornaram clientes do banco 𝒋 no
último triênio.

𝑨= (

𝟎
𝟓
𝟑
𝟒
𝟎
𝟐
𝟏
𝟔
𝟎

)

Com base apenas na matriz A, no último triênio, o banco 2 teve um aumento de quantas empresas
clientes?

a) 11

b) 10

c) 8

d) 6

e) 5

Comentários:

Segundo o problema, o elemento da linha 𝒊 e da coluna 𝒋 representa o número de empresas que deixaram
de ser clientes do banco 𝒊 e se tornaram clientes do banco 𝒋.

Observação: Note que o elemento 𝑎22 é zero, pois esse elemento representaria o número de empresas
que "deixaram de ser clientes do banco 𝟐 e se tornaram clientes do próprio banco 𝟐". Por esse mesmo
motivo, os outros elementos da diagonal principal, 𝑎11 e 𝑎33, também são iguais a zero.

Note que, para o caso do banco 2, temos:

- Os elementos das linhas 𝑖 e da coluna 𝟐 representa o número de empresas que deixaram de ser
clientes do banco 𝑖 e se tornaram clientes do banco 𝟐. Logo, se tornaram clientes do banco 2:

𝑎1𝟐+ 𝑎2𝟐+ 𝑎3𝟐

= 5 + 0 + 6
= 11 empresas
- Os elementos da linha 𝟐 e das colunas 𝑗 representa o número de empresas que deixaram de ser
clientes do banco 𝟐 e se tornaram clientes do banco 𝑗. Logo, deixaram de ser clientes do banco 2:

𝑎𝟐1 + 𝑎𝟐2 + 𝑎𝟑2

= 4 + 0 + 2
= 6 empresas

Portanto, o aumento de empresas clientes do banco 2 foi de:

11 −6

= 5 empresas

Gabarito: Letra E.

(VUNESP/Pref. SBC/2023) Para existir o produto de duas matrizes A e B, nessa ordem, é necessário que
o número de

a) linhas da matriz A seja igual ao número de linhas da matriz B.

b) linhas da matriz A seja igual ao número de colunas da matriz B.

c) colunas da matriz A seja igual ao número de linhas da matriz B.

d) colunas da matriz A seja igual ao número de colunas da matriz B.

e) linhas e colunas da matriz A seja igual ao número de linhas e colunas da matriz B.

Comentários:

Conforme vimos na teoria da aula, para realizar o produto de duas matrizes, o primeiro passo é:

1. Verificar se o número de colunas da primeira matriz é igual ao número de linhas da segunda. Se
essa igualdade não se verificar, não é possível realizar o produto das matrizes.

Logo, para existir o produto de duas matrizes A e B, nessa ordem, é necessário que o número de colunas
da matriz A seja igual ao número de linhas da matriz B.

Gabarito: Letra C.

(CEBRASPE/PETROBRAS/2023) Considerando uma matriz 𝑨𝟐×𝟑, uma matriz 𝑩𝟑×𝟑 e uma matriz 𝑪𝟑×𝟐,
julgue o item a seguir.

É possível calcular o produto 𝑨× 𝑩, mas não o produto 𝑪× 𝑨.

Comentários:

A multiplicação de matrizes só é possível quando o número de colunas da primeira matriz for igual ao
número de linhas da segunda matriz. Vejamos os casos apresentados:

- Para o produto 𝑨𝟐×𝟑× 𝑩𝟑×𝟑, note que o número de colunas da matriz 𝐴 (3) é igual ao número de
linhas da matriz 𝐵 (3). Logo, o produto 𝐴× 𝐵 é possível.
- Para o produto 𝑪𝟑×𝟐× 𝑨𝟐×𝟑, note que o número de colunas da matriz 𝐶 (2) é igual ao número de
linhas da matriz 𝐴 (2). Logo, o produto 𝑪× 𝑨 também é possível.

Gabarito: ERRADO.

(CEBRASPE/DATAPREV/2023) Com respeito à matriz 𝑨= (𝟎
𝟐
𝟐
𝟎), julgue o item a seguir.

Denotando-se a matriz transposta de 𝑨 como 𝑨𝑻, é correto afirmar que 𝑨𝑻= 𝑨.

Comentários:

A transposta da matriz 𝐴= (𝟎
𝟐
𝟐
𝟎) corresponde à matriz cujas linhas foram transformadas em colunas.

Realizando a transposição, ficamos com:

𝐴𝑇= (𝟎
𝟐
𝟐
𝟎)

Portanto, é correto afirmar que 𝐴𝑇= 𝐴.

Cumpre destacar que o fato de que 𝐴𝑇= 𝐴 significa que a matriz é simétrica. Observe que isso é verdade,
pois os elementos simétricos com relação à diagonal principal são iguais:

𝐴= (0
𝟐
0)

Gabarito: CERTO.

(Instituto AOCP/ISS Pinhais/2022) A seguinte matriz, com os elementos 𝒂𝒊𝒋, mostra o número de

faltas que todos os funcionários do setor 𝒊 tiveram durante o mês 𝒋, com janeiro = 1, fevereiro = 2 e
assim por diante.

(

𝟐
𝟑
𝟐
𝟒
𝟎
𝟏
𝟏
𝟎
𝟏
𝟎
𝟒
𝟏
𝟒
𝟏
𝟑
𝟏
𝟐
𝟑

)

Assinale a alternativa que apresenta o setor com menos faltas e o mês com mais faltas contando todos
os setores, respectivamente.

a) Setor 2; Fevereiro.

b) Setor 2; Janeiro.

c) Setor 1; Fevereiro.

d) Setor 3; Junho.

e) Setor 1; Janeiro.

Comentários:

O elemento 𝑎𝑖𝑗, que está na linha 𝒊 e na coluna 𝒋 da matriz apresentada, representa o número de faltas do
setor 𝒊 no mês 𝒋. Note que, na matriz apresentada:

-
Temos três linhas e, portanto, três setores: Setor 1, Setor 2 e Setor 3; e
-
Temos seis colunas e, portanto, seis meses considerados: Janeiro (1), Fevereiro (2), Março (3), Abril (4),
Maio (5), Junho (6).

O total de faltas de cada setor corresponde à soma dos elementos da sua linha:

-
Setor 1: 2+3+2+4+0+1 = 12 faltas;
-
Setor 2: 1+0+1+0+4+1 = 7 faltas;
-
Setor 3: 4+1+3+1+2+3 = 14 faltas.

Portanto, o setor com menos faltas é o Setor 2.

O total de faltas em cada mês corresponde à soma dos elementos da sua coluna:

-
Janeiro (1): 2+1+4 = 7;
-
Fevereiro (2): 3+0+1 = 4;
-
Março (3): 2+1+3 = 6;
-
Abril (4): 4+0+1 = 5;
-
Maio (5): 0+4+2 = 6;
-
Junho (6): 1+1+3 = 5.

Portanto, o mês com mais faltas foi Janeiro.

Logo, o setor com menos faltas e o mês com mais faltas são, respectivamente, Setor 2 e Janeiro.

Gabarito: Letra B.

(FUNDATEC/Pref. Flores da Cunha/2022) Analise as seguintes matrizes:

𝑨= [𝟏
𝜶
𝟎
𝟏
𝒃] e 𝑩= [

𝒃
𝜶

]

Para que a multiplicação de A por B seja a matriz identidade de ordem 2, devemos ter:

a) 𝛼= 𝑏= 1

b) 𝛼= 𝑏= 0

c) 𝛼&gt; 𝑏

d) 𝛼&lt; 𝑏

e) 𝛼= 2𝑏

Comentários:

Vamos determinar os valores de 𝛼 e 𝑏 para que o produto de matrizes 𝐴𝐵 seja igual à matriz identidade de
ordem 2. Temos:

[𝟏
𝟎
𝜶
𝟎
𝟏
𝒃] × [

𝟏
𝟎
𝟎
𝟏
𝒃
𝜶

] = [1
0
0
1]

[𝟏. 𝟏+ 𝟎. 𝟎+ 𝜶. 𝒃
𝟏. 𝟎+ 𝟎. 𝟏+ 𝜶. 𝜶
𝟎. 𝟏+ 𝟏. 𝟎+ 𝒃. 𝒃
𝟎. 𝟎+ 𝟏. 𝟏+ 𝒃. 𝜶] = [1
0
0
1]

[1 + 𝛼. 𝑏
𝛼2

𝑏2
1 + 𝛼. 𝑏] = [1
0
0
1]

Igualando cada elemento das duas matrizes, temos:

{

1 + 𝛼. 𝑏= 1
𝛼2 = 0
𝑏2 = 0
1 + 𝛼. 𝑏= 1

→{

𝛼. 𝑏= 0

𝛼= 0
𝑏= 0

Portanto, devemos ter 𝜶= 𝒃= 𝟎.

Gabarito: Letra B.

(IDECAN/CBM MS/2022/Adaptada) Os dados a seguir são estatísticas do ano de 2021 de ocorrências
do corpo de bombeiros do RS, separadas em meses, onde a matriz 𝑨 é formada pelas colunas que
correspondem aos meses e pelas linhas que correspondem aos motivos das ocorrências. Determine o
valor do elemento presenta na posição 𝒂𝟑𝟒.

Fonte: https://www.bombeiros.rs.gov.br/estatisticas-operacionais

a) 728

b) 1664

c) 1648

d) 747

e) 1625

Comentários:

Conforme explicado no enunciado, as colunas da matriz 𝑨 correspondem aos meses e as linhas da matriz
𝑨 correspondem aos motivos das ocorrências. Cumpre destacar que os meses e os motivos não fazem
parte da matriz 𝐴, sendo 𝐴 uma matriz formada somente por números.

Devemos obter o elemento 𝑎34, ou seja, o elemento que está na linha 3 e na coluna 4:

- Na linha 3 da matriz 𝐴, temos o motivo "Atendimento Pré-Hospitalar";
- Na coluna 4 da matriz 𝐴, temos o mês "Abril".

Portanto, o elemento 𝑎34 é o número de Atendimentos Pré-Hospitalares em Abril: 1664.

Gabarito: Letra B.

(AOCP/SED MS/2022) Considere as seguintes matrizes:

𝑨= (𝟐
𝟏
𝟑
−𝟐) , 𝑩= (𝟐
−𝟏
𝟑
𝟎) 𝐞 𝑪= (𝟑
−𝟏
𝟒
𝟐)

Se

𝑿−𝑨

𝟑+ 𝑩=

𝑪+𝑿

𝟐, então a matriz 𝑿 é tal que a soma dos elementos da diagonal principal é igual a

a) 0

b) 2

c) −2

d) 3

e) −3

Comentários:

Temos a seguinte equação matricial:

𝑋−𝐴

3
+ 𝐵= 𝐶+ 𝑋

2

Logo:

1
3 𝑋−1
3 𝐴+ 𝐵= 1
2 𝐶+ 1
2 𝑋

−1

3 𝐴+ 𝐵−1
2 𝐶= 1
2 𝑋−1
3 𝑋

1
2 𝑋−1
3 𝑋= −1
3 𝐴+ 𝐵−1
2 𝐶

(1

2 −1
3) 𝑋= −1
3 𝐴+ 𝐵−1
2 𝐶

(3 −2

6
) 𝑋= −1

3 𝐴+ 𝐵−1
2 𝐶

1
6 𝑋= −1
3 𝐴+ 𝐵−1
2 𝐶

Multiplicando ambos os lados da equação por 6, temos:

𝑋= −2𝐴+ 6𝐵−3𝐶

Portanto:

𝑋= (−2) × (2
1
3
−2) + 6 × (2
−1
3
0 ) + (−3) × (3
−1
4
2 )

𝑋= (−4
−2
−6
4 ) + (12
−6
18
0 ) + ( −9
3
−12
−6)

𝑋= ( −4 + 12 −9
−2 −6 + 3
−6 + 18 −12
4 + 0 −6 )

𝑋= (−1
−5
0
−2)

Logo, a soma dos elementos da diagonal principal de 𝑋 é:

(−1) + (−2) = −3

Gabarito: Letra E.

(QUADRIX/CRN 4/2022) Sendo 𝑨= (𝟎
𝟓) e 𝑩= (𝟐
𝟐), julgue o item.

(𝑨+ 𝑩)(𝑨−𝑩) = 𝑨𝟐−𝑩𝟐

Comentários:

Desenvolvendo (𝐴+ 𝐵)(𝐴−𝐵), temos:

(𝑨+ 𝑩)(𝑨−𝑩) = 𝑨𝑨−𝑨𝑩+ 𝑩𝑨−𝑩𝑩

Portanto:

(𝑨+ 𝑩)(𝑨−𝑩) = 𝑨𝟐−𝑨𝑩+ 𝑩𝑨−𝑩𝟐

Note que, para que (𝑨+ 𝑩)(𝑨−𝑩) seja igual a 𝑨𝟐−𝑩𝟐, devemos ter:

−𝑨𝑩+ 𝑩𝑨= 0

𝑨𝑩= 𝑩𝑨

Em outras palavras, para que (𝑨+ 𝑩)(𝑨−𝑩) seja igual a 𝑨𝟐−𝑩𝟐, as matrizes 𝑨𝑩 devem comutar entre
si.

Sabemos que em geral as matrizes não gozam da propriedade comutativa, a não ser que, por coincidência,
as matrizes em questão comutem. Em outras palavras, devemos verificar se as matrizes específicas 𝐴 e 𝐵
fornecidas pelo enunciado comutam. Note que:

𝐴𝐵= (𝟎
𝟏
𝟎
𝟓) × (𝟐
𝟎
𝟐
𝟐) = (𝟎. 𝟐+ 𝟏. 𝟐
𝟎. 𝟎+ 𝟏. 𝟐
𝟎. 𝟐+ 𝟓. 𝟐
𝟎. 𝟎+ 𝟓. 𝟐) = ( 2
2
10
10)

𝐵𝐴= (𝟐
𝟎
𝟐
𝟐) × (𝟎
𝟏
𝟎
𝟓) = (𝟐. 𝟎+ 𝟎. 𝟎
𝟐. 𝟏+ 𝟎. 𝟓
𝟐. 𝟎+ 𝟐. 𝟎
𝟐. 𝟏+ 𝟐. 𝟓) = (0
2
0
12)

Como
𝐴𝐵≠𝐵𝐴,
as
matrizes
𝐴
e
𝐵
não
comutam
e,
consequentemente,
(𝑨+ 𝑩)(𝑨−𝑩) ≠𝑨𝟐−𝑩𝟐. O gabarito, portanto, é ERRADO.

Gabarito: ERRADO.

Texto para as próximas questões

Sendo 𝐴= (

1
0
2
0
3
0
2
0
5
) e 𝐵= (

2
0
4
0
6
0
4
0
10
), julgue os itens a seguir.

### (QUADRIX/CRN 4/2022) 𝑨=

𝟏

𝟐𝑩.

### (QUADRIX/CRN 4/2022) 𝑨𝑩= 𝑩𝑨.

Comentários:

Questão 15

Temos que:

1
2 𝐵= 𝟏
𝟐× (

2
0
4
0
6
0
4
0
10
) =

(

𝟏
𝟐× 2
𝟏
𝟐× 0
𝟏
𝟐× 4

𝟏
𝟐× 0
𝟏
𝟐× 6
𝟏
𝟐× 0

𝟏
𝟐× 4
𝟏
𝟐× 0
1 𝟏
𝟐× 0)

= (

1
0
2
0
3
0
2
0
5
) = 𝐴

Logo, 𝐴=

1

2 𝐵. O gabarito, portanto, é CERTO.

Questão 16

Para verificar que as matrizes 𝐴 e 𝐵 comutam, podemos utilizar o resultado anterior ao invés de calcular
𝐴𝐵 e 𝐵𝐴.

Como 𝐴=

1

2 𝐵, note que:

𝐴𝐵= 1

2 𝐵. 𝐵= 1
2 𝐵2

𝐵𝐴= 𝐵. 1

2 𝐵= 1
2 𝐵. 𝐵= 1
2 𝐵2

Logo, 𝐴𝐵= 𝐵𝐴, pois 𝐴𝐵 e 𝐵𝐴 são iguais a

1

2 𝐵2. O gabarito, portanto, é CERTO.

Gabarito: 15 - CERTO. 16 - CERTO.

(Instituto AOCP/IF RO/2022) Na etapa final de um torneio de futebol, foram classificadas as escolas
A, B, C e D. Nesse torneio, os times jogam no esquema “todos contra todos”, uma única vez. A matriz 𝑴
indica a quantidade de gols que o time da escola 𝒊 marcou no jogo contra o time da escola 𝒋, com {𝒊, 𝒋} ⊂
{𝟏, 𝟐, 𝟑, 𝟒}, sendo que os índices 1, 2, 3 e 4 representam, respectivamente, as escolas A, B, C e D. Na
matriz 𝑴, os elementos 𝒎𝒊𝒋, se 𝒊= 𝒋, estão representados por um traço.

𝑴= (

−
𝟏
𝟏
−

𝟎
𝟐
𝟐
𝟐
𝟐
𝟎
𝟎
𝟐

−
𝟏
𝟏
−

)

Sabendo-se que a vitória vale 3 pontos, o empate vale 1 ponto e a derrota não pontua, assinale a
alternativa correta.

a) Duas escolas terminaram a competição com a mesma pontuação.

b) A escola A terminou a competição com a menor pontuação.

c) A escola C terminou a competição com a maior pontuação.

d) Houve apenas 2 empates na etapa final do torneio.

e) A escola B supera a pontuação da escola A em 2 pontos.

Comentários:

Sabemos que os elementos 𝒂𝒊𝒋 da matriz 𝑀 nos indicam a quantidade de gols que a escola 𝒊 marcou
contra a escola 𝒋. Para obter o resultado da partida entre as escolas 𝒊 e 𝒋, precisamos comparar o
elemento 𝑎𝑖𝑗 com o elemento simétrico 𝒂𝒋𝒊, que indica a quantidade de gols que a escola 𝒋 marcou contra
a escola 𝒊.

-
Partida entre a escola A (1) e a escola B (2):

o 𝑎12 = 1 → A escola A fez 1 gol na escola B;
o 𝑎21 = 1 → A escola B fez 1 gol na escola A;
o Conclusão: o jogo terminou empatado.

-
Escola A ganhou 1 ponto; e
-
Escola B ganhou 1 ponto.
-
Partida entre a escola A (1) e a escola C (3):

o 𝑎13 = 0 → A escola A não fez gols na escola C;
o 𝑎31 = 2 → A escola C fez 2 gols na escola A;
o Conclusão: a escola C ganhou o jogo.

-
Escola A ganhou 0 pontos; e
-
Escola C ganhou 3 pontos.
-
Partida entre a escola A (1) e a escola D (4):

o 𝑎14 = 2 → A escola A fez 2 gols na escola D;
o 𝑎41 = 0 → A escola D não fez gols na escola A;
o Conclusão: a escola A ganhou o jogo.

-
Escola A ganhou 3 pontos; e
-
Escola D ganhou 0 pontos.
-
Partida entre a escola B (2) e a escola C (3):

o 𝑎23 = 2 → A escola B fez 2 gols na escola C;
o 𝑎32 = 0 → A escola C não fez gols na escola B.
o Conclusão: a escola B ganhou o jogo.

-
Escola B ganhou 3 pontos; e
-
Escola C ganhou 0 pontos.
-
Partida entre a escola B (2) e a escola D (4):

o 𝑎24 = 2 → A escola B fez 2 gols na escola D;
o 𝑎42 = 2 → A escola D fez 2 gols na escola B;
o Conclusão: o jogo terminou empatado.

-
Escola B ganhou 1 ponto; e
-
Escola D ganhou 1 ponto.
-
Partida entre a escola C (3) e a escola D (4):

o 𝑎34 = 1 → A escola C fez 1 gol na escola D;
o 𝑎43 = 1 → A escola D fez 1 gol na escola C;
o Conclusão: o jogo terminou empatado.

-
Escola C ganhou 1 ponto; e
-
Escola D ganhou 1 ponto.

O total de pontos obtidos pelas escolas é:

-
Escola A: 1+0+3 = 4
-
Escola B: 1+3+1 = 5
-
Escola C: 3+0+1 = 4
-
Escola D: 0+1+1 = 2

Vamos verificar as alternativas:

a) Duas escolas terminaram a competição com a mesma pontuação. CERTO. Esse é o gabarito.

As escolas A e C terminaram a competição com a mesma pontuação.

b) A escola A terminou a competição com a menor pontuação. ERRADO.

A escola D terminou a competição com a menor pontuação.

c) A escola C terminou a competição com a maior pontuação. ERRADO.

A escola B terminou a competição com a maior pontuação.

d) Houve apenas 2 empates na etapa final do torneio. ERRADO.

Houve 3 empates na etapa final do torneio.

e) A escola B supera a pontuação da escola A em 2 pontos. ERRADO.

A escola B supera a pontuação da escola A em 1 ponto.

Gabarito: Letra A.

(FUNDATEC/SBC/2022) Dada a matriz 𝑨= (

𝟏
−𝟐
𝟏
𝟑
−𝟐
−𝟏
𝟒
−𝟏
𝟐

), calcule (𝑨−𝟐𝑰)𝟐:

a) (

1
−2
1
3
−2
−1
4
−1
2
)

b) (

−1
−19
−7
−4
)

c) (

−2
−4
−1
)

d) (

3
−2
1
3
0
−1
4
−1
4
)

e) (

6
−2
−1
3
−9
−4
−4
−1
0
)

Comentários:

Para calcular (𝐴−2𝐼)2, vamos primeiro obter a matriz (𝐴−2𝐼).

(𝐴−2𝐼) = (

1
−2
1
3
−2
−1
4
−1
2
) −2 × (

1
0
0
0
1
0
0
0
1
)

(𝐴−2𝐼) = (

1
−2
1
3
−2
−1
4
−1
2
) −(

2
0
0
0
2
0
0
0
2
)

(𝐴−2𝐼) = (

(1 −2)
−2
1
3
(−2 −2)
−1
4
−1
(2 −2)

)

(𝐴−2𝐼) = (

−1
−2
1
3
−4
−1
4
−1
0
)

Logo:

(𝐴−2𝐼)2 = (𝐴−2𝐼)(𝐴−2𝐼)

(𝐴−2𝐼)2 = (

−𝟏
−𝟐
𝟏
𝟑
−𝟒
−𝟏
𝟒
−𝟏
𝟎

) (

−𝟏
−𝟐
𝟏
𝟑
−𝟒
−𝟏
𝟒
−𝟏
𝟎

)

(𝐴−2𝐼)2 = (

(−𝟏). (−𝟏) + (−𝟐). 𝟑+ 𝟏. 𝟒
(−𝟏). (−𝟐) + (−𝟐). (−𝟒) + 𝟏. (−𝟏)
(−𝟏). 𝟏+ (−𝟐). (−𝟏) + 𝟏. 𝟎
𝟑. (−𝟏) + (−𝟒). 𝟑+ (−𝟏). 𝟒
𝟑. (−𝟐) + (−𝟒). (−𝟒) + (−𝟏). (−𝟏)
𝟑. 𝟏+ (−𝟒). (−𝟏) + (−𝟏). 𝟎
𝟒. (−𝟏) + (−𝟏). 𝟑+ 𝟎. 𝟒
𝟒. (−𝟐) + (−𝟏). (−𝟒) + 𝟎. (−𝟏)
𝟒. 𝟒+ (−𝟏). (−𝟏) + 𝟎. 𝟎

)

(𝐴−2𝐼)2 = (

−1
9
1
−19
11
7
−7
−4
5
)

Gabarito: Letra B.

(VUNESP/Pref. Rio Claro/2022) Sobre a multiplicação de uma matriz 𝑨𝟑×𝟐 por uma matriz 𝑩𝟐×𝟒, nessa
ordem, é correto afirmar que o produto

a) não existe.

b) existe e terá ordem 6 por 8.

c) existe e terá ordem 3 por 4.

d) existe e terá ordem 4 por 3

e) existe e terá ordem 8 por 6.

Comentários:

Conforme vimos na teoria da aula, para realizar o produto de duas matrizes, o primeiro passo é:

1. Verificar se o número de colunas da primeira matriz é igual ao número de linhas da segunda. Se
essa igualdade não se verificar, não é possível realizar o produto das matrizes.

Como a matriz 𝐴 apresenta dimensão 3×2 e a matriz 𝐵 apresenta dimensão 2×4, o produto 𝐴𝐵 existe, pois
o número de colunas da matriz 𝑨 e o número de linhas da matriz 𝑩 são iguais a 2.

Além disso, para realizar o produto de duas matrizes, o segundo passo é:

2. Obter o esquema geral da matriz-produto, que apresenta a seguinte dimensão:
Número de linhas da primeira × Número de colunas da segunda

Como a matriz 𝐴 apresenta dimensão 3×2 e a matriz 𝐵 apresenta dimensão 2×4, o produto 𝐴𝐵
apresentará dimensão 3×4.

Portanto, é correto afirmar que o produto 𝑨𝑩 existe e terá ordem (dimensão) 3 por 4.

Gabarito: Letra C.

(VUNESP/PM SP/2022) Uma rede de papelarias é formada por 3 lojas, nomeadas loja 1, loja 2 e loja 3.
Costumeiramente, essas papelarias enviam itens de uma loja para outra e o controle desses envios se dá
por meio de uma matriz 𝑫= (𝒅𝒊𝒋) de ordem 3, em que o valor da entrada 𝒅𝒊𝒋 indica o número de itens
que a loja 𝒊 enviou para a loja 𝒋. Em um determinado dia, a matriz de controle de envios foi 𝑫=

[

]. Nos 3 dias seguintes, a loja 1 enviou, a cada dia, 11 itens para cada uma das lojas 2 e 3, a

loja 2 enviou, no total desses 3 dias, 15 itens para a loja 3, e nenhum outro envio foi feito. Seja 𝑪 a matriz
que é a soma das matrizes de controle desses 4 dias, seja 𝑪𝒕 a matriz transposta de 𝑪 e seja 𝑺= 𝑪 – 𝑪𝒕.
As entradas 𝒔𝒊𝒋 da matriz 𝑺 assim definida indicam o saldo de itens que a loja 𝒊 tem com a loja 𝒋 no
período considerado e uma entrada negativa nessa matriz indica que a loja recebeu mais itens do que
enviou. Os saldos 𝒔𝟏𝟐, 𝒔𝟐𝟑 e 𝒔𝟑𝟏 são, respectivamente,

a) 15, –7, 23.

b) 23, 12, –7.

c) 45, 22, –29.

d) 29, 45, –23.

e) 22, –12, 15.

Comentários:

Sabemos que, em um determinado dia, a matriz de controle foi 𝐷= [

0
15
4
3
0
7
8
0
0
], sendo os elementos

𝑑𝑖𝑗 o número de itens que a loja 𝑖 enviou para a loja 𝑗.

Vamos agora construir uma matriz de controle considerando os três dias seguintes. Chamaremos essa
matriz de 𝐸 e os elementos 𝑒𝑖𝑗 serão o número de itens que a loja 𝑖 enviou para a loja 𝑗 nesses três dias.

Nesses três dias seguintes:

- A loja 1 enviou, a cada dia, 11 itens para cada uma das lojas 2 e 3. Logo, considerando os três dias, a
loja 1 enviou 11 × 3 = 33 itens para as lojas 2 e 3. Portanto:

o 𝒆𝟏𝟐= 𝟑𝟑 e
o 𝒆𝟏𝟑= 𝟑𝟑;
- A loja 2 enviou, no total desses 3 dias, 15 itens para a loja 3. Portanto:
o 𝒆𝟐𝟑= 𝟏𝟓.

Como nenhum outro envio foi feito nesses três dias seguintes, os outros elementos 𝑒𝑖𝑗 da nossa matriz 𝐸
são iguais a zero. Portanto:

𝐸= [

0
33
33
0
0
15
0
0
0
]

Segundo o enunciado, 𝐶 é a matriz que é a soma das matrizes de controle dos quatro dias. Logo:

𝐶=
𝐷⏟
Matriz de
controle do
primeiro dia

+
𝐸⏟
Matriz de
controle referente

aos três dias

seguitnes

𝐶= [

0
15
4
3
0
7
8
0
0
] + [

0
33
33
0
0
15
0
0
0
]

𝐶= [

0
15 + 33
4 + 33
3
0
7 + 15
8
0
0
]

𝐶= [

𝟎
𝟒𝟖
𝟑𝟕
𝟑
𝟎
𝟐𝟐
𝟖
𝟎
𝟎

]

Para obter a matriz 𝑆, precisamos calcular a transposta da matriz 𝐶. Para obter 𝐶𝑡, as linhas da matriz 𝐶 se
tornam colunas da matriz 𝐶𝑡. Ficamos com:

𝐶𝑡= [

𝟎
𝟑
𝟖
𝟒𝟖
𝟎
𝟎
𝟑𝟕
𝟐𝟐
𝟎

]

Logo:

𝑆= 𝐶−𝐶𝑡

𝑆= [

0
48
37
3
0
22
8
0
0
] −[

0
3
8
48
0
0
37
22
0
]

𝑆= [

0
48 −3
37 −8
3 −48
0
22
8 −37
−22
0
]

𝑆= [

0
𝟒𝟓
29
−45
0
𝟐𝟐
−𝟐𝟗
−22
0
]

Portanto, saldos 𝒔𝟏𝟐, 𝒔𝟐𝟑 e 𝒔𝟑𝟏 são, respectivamente, 45, 22 e −29.

Gabarito: Letra C.

(FCC/TRT22/2022) Cada um dos números 1, 2, 3 e 4 foram colocados em um quadriculado 2 × 2. Se a
soma da primeira linha é 3 e a soma da diagonal principal (da esquerda para a direita) é 4, então a soma
da primeira coluna é

a) 5.

b) 4.

==5460==

c) 6.

d) 7.

e) 8.

Comentários:

Devemos inserir os números 1, 2, 3 e 4 em um quadriculado 2×2. Note que, para a soma da primeira linha
ser 3, os números 1 e 2 devem estar na primeira linha, que podem estar dispostos de duas formas:

[1]
[2]
[ ]
[ ] ou [1]
[2]
[ ]
[ ]

Ainda segundo o enunciado, a soma da diagonal principal (da esquerda para a direita) é 4. Para a soma ser
4, a diagonal principal deve apresentar os números 1 e 3. Isso significa que, na primeira linha, a disposição
correta é:

[1]
[2]
[ ]
[ ]

Logo, até o momento, temos o seguinte quadriculado 2×2:

[1]
[2]
[ ]
[3]

Resta apenas o número 4 para ser inserido no quadriculado 2×2. Ficamos com:

[1]
[2]
[4]
[3]

Logo, a soma da primeira coluna é:

1 + 4 = 5

Gabarito: Letra A.

### (FGV/MPE SC/2022)

Seja 𝑨= [𝟐
𝟏
𝟑
𝟏].

A soma dos elementos da matriz 𝑨𝟐 é:

a) 10;

b) 12;

c) 15;

d) 23;

e) 30.

Comentários:

Note que a matriz 𝐴2 é:

𝐴2 = 𝐴× 𝐴

= [𝟐
𝟏
𝟑
𝟏] × [𝟐
𝟏
𝟑
𝟏]

= [𝟐. 𝟐+ 𝟏. 𝟑
𝟐. 𝟏+ 𝟏. 𝟏
𝟑. 𝟐+ 𝟏. 𝟑
𝟑. 𝟏+ 𝟏. 𝟏]

= [7
3
9
4]

Logo, a soma dos elementos da matriz 𝐴2 é:

7 + 3 + 9 + 4

= 23

Gabarito: Letra D.

(FGV/TCETO/2022) Para um dia de treinamento, os funcionários de uma empresa foram alocados em

três salas: Sala 1, Sala 2 e Sala 3. Tendo sido realizada a primeira parte do treinamento, foi feito um
intervalo, após o qual os funcionários puderam escolher livremente qualquer sala para a segunda parte
do treinamento.

Na matriz 𝑨 abaixo, cada elemento 𝒂𝒊𝒋 representa o número de funcionários que estavam na Sala 𝒊 e
foram para a Sala 𝒋 após o intervalo.

𝑨= [

𝟓
𝟐
𝟕
𝟒
𝟗
𝟔
𝟑
𝟖
𝟏𝟎

]

É correto concluir que:

a) a Sala 1 terminou com 2 funcionários a mais que no início;

b) a Sala 2 terminou com 20 funcionários;

c) a Sala 3 terminou com 3 funcionários a mais que no início;

d) a Sala 1 iniciou com 15 funcionários;

e) uma das salas terminou com o mesmo número de funcionários que tinha no início.

Comentários:

Na matriz apresentada, o elemento 𝑎𝑖𝑗, posicionado na linha 𝑖 e na coluna 𝑗, representa o número de
funcionários que estavam na Sala 𝒊 e, após o intervalo, passaram a estar na Sala 𝒋.

Na linha 1, temos o total de funcionários que estavam na sala 1 e, após o intervalo, passaram a estar nas
três diferentes salas.

-
𝑎11 = 5 funcionários estavam na sala 1 e, após o intervalo, permaneceram na sala 1;
-
𝑎12 = 2 funcionários estavam na sala 1 e, após o intervalo, passaram a estar na sala 2;
-
𝑎13 = 7 funcionários estavam na sala 1 e, após o intervalo, passaram a estar na sala 3.

Perceba, portanto, que o total de funcionários que estavam na sala 1 na primeira parte do treinamento
corresponde à soma dos elementos da linha 1:

5 + 2 + 7 = 14

Na coluna 1, temos o total de funcionários que estavam nas três salas e, após o intervalo, passaram a
estar na sala 1.

-
𝑎11 = 5 funcionários estavam na sala 1 e, após o intervalo, permaneceram na sala 1;
-
𝑎21 = 4 funcionários estavam na sala 2 e, após o intervalo, passaram a estar na sala 1;
-
𝑎31 = 3 funcionários estavam na sala 3 e, após o intervalo, passaram a estar na sala 1.

Perceba, portanto, que o total de funcionários que permaneceram ou passaram a estar na sala 1 na
segunda parte do treinamento corresponde à soma dos elementos da coluna 1:

5 + 4 + 3 = 12

Vamos fazer essa análise para as demais salas. Sabemos que:

-
A soma dos elementos da linha 𝒊 corresponde ao total de funcionários que estavam na Sala 𝒊 na
primeira parte do treinamento;
-
A soma dos elementos da coluna 𝒋 corresponde ao total de funcionários que, após o intervalo,
permaneceram ou passaram a estar na Sala 𝒋 na segunda parte do treinamento.

Temos, portanto, o seguinte esquema:

Sala

Antes do intervalo

(soma dos elementos da linha)

Após o intervalo

(soma dos elementos da coluna)

Saldo

(Final − Inicial)

1
5+2+7 = 14
5+4+3 = 12
12 − 14 = −2
2
4+9+6 = 19
2+9+8 = 19
19 − 19 = 0
3
3+8+10 = 21
7+6+10 = 23
23−21 = 2

Note, portanto, que é correto afirmar que uma das salas terminou com o mesmo número de funcionários
que tinha no início. Trata-se da Sala 2.

Gabarito: Letra E.

(FCC/IBMEC/2019) Sejam x, y, z e w os números reais que satisfazem a seguinte equação matricial:

(𝒙−𝟐𝒚
𝒛−𝒘
𝟐𝒛−𝒘
𝒙+ 𝒚) = (𝟎
𝟑)

Então, a soma 𝒙 + 𝒚 + 𝒛 + 𝒘 é igual a

a) −1

b) 0

c) 2

d) 5

e) 3

Comentários:

Para a igualdade de matrizes, devemos igualar os elementos que estão nas mesmas posições. Logo:

{

𝒙−𝟐𝒚= 𝟎

𝒛−𝒘= 𝟏
𝟐𝒛−𝒘= 𝟏

𝒙+ 𝒚= 𝟑

Somando a primeira equação com o dobro da quarta equação, temos:

{

𝒙−𝟐𝒚= 𝟎
𝟐𝒙+ 𝟐𝒚= 𝟔

𝟑𝒙= 𝟔

Logo, temos 3𝑥= 6 e, portanto, 𝑥= 2.

Substituindo 𝑥= 2 na quarta equação, temos:

𝒙+ 𝒚= 𝟑

2 + 𝒚= 𝟑

𝑦= 1

Somando a segunda equação multiplicada por −𝟏 com a terceira equação, temos:

{

−𝒛+ 𝒘= −𝟏

𝟐𝒛−𝒘= 𝟏

𝒛= 𝟎

Substituindo 𝑧= 0 na segunda equação, temos:

𝒛−𝒘= 𝟏

0 −𝑤= 1

𝑤= −1

Finalmente, a soma requerida é:

𝑥+ 𝑦+ 𝑧+ 𝑤

= 2 + 1 + 0 + (−1)

= 2

Gabarito: Letra C.

(FGV/Pref. Salvador/2019) Considere as matrizes 𝑨𝟐×𝟑 e 𝑩𝟐×𝟐.

Sobre essas matrizes é correto afirmar que

a) Existe a soma 𝐴+ 𝐵 e é uma matriz 4 × 5.

b) Existe o produto 𝐴𝐵 e é uma matriz 4 × 6.

c) Existe o produto 𝐵𝐴 e é uma matriz 4 × 6.

d) Não existe o produto 𝐴𝐵.

e) Não existe o produto 𝐵𝐴.

Comentários:

Vamos comentar as alternativas.

a) Existe a soma 𝑨+ 𝑩 e é uma matriz 𝟒× 𝟓. ERRADO.

Para somar ou subtrair matrizes, é necessário que elas tenham a mesma dimensão. Como a matriz 𝐴
apresenta dimensão 2 × 3 e a matriz 𝐵 apresenta dimensão 2 × 2, a soma 𝐴+ 𝐵 não é possível.

b) Existe o produto 𝑨𝑩 e é uma matriz 𝟒× 𝟔. ERRADO.

d) Não existe o produto 𝑨𝑩. CERTO.

Para multiplicar matrizes, deve-se verificar se o número de colunas da primeira matriz é igual ao número
de linhas da segunda. Se essa igualdade não se verificar, não é possível realizar o produto das matrizes.

Veja, portanto, que o produto 𝑨𝑩 não existe, pois 𝐴2×𝟑 apresenta 3 colunas e 𝐵𝟐×2 apresenta 2 linhas.
Logo, o gabarito é letra D.

c) Existe o produto 𝑩𝑨 e é uma matriz 𝟒× 𝟔. ERRADO.

e) Não existe o produto 𝑩𝑨. ERRADO.

Para fins didáticos, vamos verificar o produto 𝐵𝐴.

Note que o número de colunas da primeira matriz (matriz 𝐵2×𝟐, 2 colunas) é igual ao número de linhas da
segunda (matriz 𝐴𝟐×3, 2 linhas). Logo, o produto 𝐴𝐵 é possível. Observe, porém, que a matriz-produto
apresenta a dimensão 𝟐× 𝟑, não 4 × 6.

Gabarito: Letra D.

## QUESTÕES COMENTADAS – MULTIBANCAS

### Determinantes

(FGV/INPE/2024) As operações matriciais desempenham um papel crucial em várias áreas, incluindo
matemática aplicada, engenharia, ciências naturais e computação. A partir das operações matriciais
pode-se resolver sistemas lineares, realizar o processamento de imagens e sinais, dentre outras
aplicações.

Sobre as operações matriciais, assinale a afirmativa correta.

a) A matriz identidade é uma matriz quadrada que possui todos os elementos iguais a 1.

b) A multiplicação de duas matrizes é comutativa, ou seja, AB = BA para quaisquer matrizes A e B.

c) A transposição de uma matriz consiste em inverter suas linhas com suas colunas.

d) A determinante de uma matriz é sempre um número inteiro.

e) A inversa de uma matriz é a mesma matriz transposta.

Comentários:

Vamos verificar as alternativas.

a) A matriz identidade é uma matriz quadrada que possui todos os elementos iguais a 1. ERRADO.

A matriz identidade é uma matriz quadrada que possui os elementos da diagonal principal iguais a 1 e os
demais elementos iguais a zero. Exemplo:

𝐼3 = [

1
0
0
0
1
0
0
0
1
]

b) A multiplicação de duas matrizes é comutativa, ou seja, AB = BA para quaisquer matrizes A e B.

### ERRADO.

Conforme visto na teoria da aula, a regra é que a multiplicação de matrizes não é comutativa. Em outras
palavras, para duas matrizes 𝐴 e 𝐵 quaisquer, em regra 𝐴𝐵≠𝐵𝐴.

c) A transposição de uma matriz consiste em inverter suas linhas com suas colunas. CERTO.

De fato, a transposição de uma matriz consiste em inverter suas linhas com suas colunas. Para uma matriz
𝐴 qualquer, a sua matriz transposta 𝐴𝑡 é obtida do seguinte modo:

- A primeira linha de 𝐴 se torna a primeira coluna de 𝐴𝑡;
- A segunda linha de 𝐴 se torna a segunda coluna de 𝐴𝑡;
- A terceira linha de 𝐴 se torna a terceira coluna de 𝐴𝑡;

- Etc.

Exemplo:

𝐴= [

𝟑
−𝟕
𝟔
−𝟓
𝟑
𝟏
𝟑
𝟏
−𝟒

] →𝐴𝑡= [

𝟑
−𝟓
𝟑
−𝟕
𝟑
𝟏
𝟔
𝟏
−𝟒

]

d) A determinante de uma matriz é sempre um número inteiro. ERRADO.

O determinante de uma matriz nem sempre é um número inteiro. Para a matriz 𝐴= [ 1
1
0,5
1], por

exemplo, temos o seguinte determinante:

| 𝟏
𝟏
𝟎, 𝟓
𝟏| = 𝟏× 𝟏−𝟏× 𝟎, 𝟓

1 −0,5

= 0,5

e) A inversa de uma matriz é a mesma matriz transposta. ERRADO.

A inversa de uma matriz 𝑨 (notação: 𝐴−1) é aquela matriz que, quando multiplicada pela matriz 𝐴, tem
como resultado a matriz identidade:

𝐴−1𝐴= 𝐼𝑛

Trata-se de um conceito diferente de transposição de matrizes.

Destaca-se que a inversa de uma matriz é igual a sua transposta somente no caso específico em que temos
uma matriz ortogonal.

𝐴 é ortogonal  𝐴−1 = 𝐴𝑡

Gabarito: Letra C.

(FGV/EPE/2024/ADAPTADA) Considere as matrizes a seguir:

𝑨= [

𝟐
𝟏𝟔
𝟓
𝟏𝟏
𝟒
𝟏𝟐
𝟗
𝟕
𝟑

] 𝑩= [

𝟏
𝟐𝟏
𝟔
𝟗

𝟐
𝟎
𝟏𝟔
𝟓
𝟖
𝟏𝟏
𝟐
𝟗

𝟒
𝟏𝟐
𝟕
𝟑

]

Sobre essas matrizes, analise as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.

( ) As matrizes 𝑨 e 𝑩 são matrizes quadradas de ordem 3 e 4, respectivamente.

( ) As matrizes 𝑨 e 𝑩 não podem ser multiplicadas, uma vez que o número de colunas da primeira matriz
é diferente do número de linhas da segunda.

( ) O determinante da matriz 𝑨 é −156.

As afirmativas são, respectivamente,

a) V – V – V.

b) V – V – F.

c) V – F – V.

d) F – F – V.

e) F – V – V.

Comentários:

Vamos verificar as afirmativas.

(V) As matrizes 𝑨 e 𝑩 são matrizes quadradas de ordem 3 e 4, respectivamente.

A matriz 𝑨 é uma matriz com 3 linhas e 3 colunas. Como o número de linhas é igual ao número de colunas,
temos uma matriz quadrada. Como a matriz quadrada tem dimensão 3×3, diz-se que ela é de ordem 3.

A matriz 𝑩 é uma matriz com 4 linhas e 4 colunas. Como o número de linhas é igual ao número de colunas,
temos uma matriz quadrada. Como a matriz quadrada tem dimensão 4×4, diz-se que ela é de ordem 4.

(V) As matrizes 𝑨 e 𝑩 não podem ser multiplicadas, uma vez que o número de colunas da primeira matriz
é diferente do número de linhas da segunda.

Para que o produto de duas matrizes exista, o número de colunas da primeira matriz deve ser igual ao
número de linhas da segunda. Logo, as matrizes em questão não podem ser multiplicadas, pois o número
de colunas da matriz 𝐴 é 3 e o número de linhas da matriz 𝐵 é 4.

(F) O determinante da matriz 𝑨 é −156.

Como a matriz 𝐴 é de ordem 3, podemos calcular o seu determinante pela regra de Sarrus:

|

2
16
5
11
4
12
9
7
3
|

2
16
11
4
9
7

Parte Negativa Parte Positiva

det 𝐴= [𝟐. 𝟒. 𝟑+ 𝟏𝟔. 𝟏𝟐. 𝟗+ 𝟓. 𝟏𝟏. 𝟕] −[𝟓. 𝟒. 𝟗+ 𝟐. 𝟏𝟐. 𝟕+ 𝟏𝟔. 𝟏𝟏. 𝟑]

= [24 + 1728 + 385] −[180 + 168 + 528]

= 2137 −876

= 1261

Logo, as afirmativas são, respectivamente, V – V – F.

Gabarito: Letra B.

(FGV/INPE/2024) Se 𝑨 é uma matriz quadrada de ordem 𝒏 tal que 𝑨𝟐 = 𝒌𝑨 , sendo 𝒌 um número real
positivo. Sabendo que o determinante de 𝑨, 𝒅𝒆𝒕(𝑨), é diferente de zero, então,

a) 𝑑𝑒𝑡(𝐴) = 𝑘

b) 𝑑𝑒𝑡(𝐴) = 1

c) 𝑑𝑒𝑡(𝐴) = 0

d) 𝑑𝑒𝑡(𝐴) = 𝑘𝑛

e) 𝑑𝑒𝑡(𝐴) = −𝑘𝑛

Comentários:

Segundo o problema, a matriz 𝐴2 é igual à matriz 𝑘𝐴. Logo, os determinantes de 𝑨𝟐 e de 𝒌𝑨 também são
iguais:

det(𝐴2) = det(𝑘𝐴)

Podemos escrever 𝐴2 como o produto 𝐴. 𝐴:

det(𝐴. 𝐴) = det(𝑘𝐴)

Pelo Teorema de Binet, sabemos que o determinante do produto é o produto dos determinantes. Ficamos
com:

det(𝐴) × det(𝐴) = det(𝑘𝐴)

Além disso, sendo a matriz de ordem 𝒏, temos que 𝐝𝐞𝐭(𝒌𝑨) = 𝒌𝒏𝐝𝐞𝐭(𝑨). Ficamos com:

det(𝐴) × det(𝐴) = 𝑘𝑛det(𝐴)

Como det(𝐴) é diferente de zero, podemos simplificar os dois lados da equação:

det(𝐴) × 𝐝𝐞𝐭(𝑨) = 𝑘𝑛𝐝𝐞𝐭(𝑨)

det(𝐴) = 𝑘𝑛

Gabarito: Letra D.

(CEBRASPE/PETROBRAS/2024) Uma distribuidora comprou 𝒙 unidades de barris de petróleo, por R$
415 o barril, e 𝒚 unidades de m3 de gás, por R$ 2 o m3, pagando um valor total de R$ 23.695.000. A

quantidade de unidades dos dois produtos comprados totalizou 490.000 unidades.

Acerca dessa situação hipotética, julgue o item a seguir.

A inversa da matriz dos coeficientes 𝑪= [𝟒𝟏𝟓
𝟐
𝟏
𝟏] é dada por 𝑪−𝟏= [ 𝟏
−𝟐
−𝟏
𝟒𝟏𝟓].

Comentários:

Pessoal, originalmente essa questão era composta por diversos itens, sendo este um dos itens a ser
julgado. Por curiosidade, matriz dos coeficientes é um termo que será aprendido em Sistemas Lineares,
caso seja pertinente para sua prova.

Nesse momento, como estamos em uma aula de Matrizes e Determinantes, vamos nos ater somente ao

item em questão, verificando se a inversa da matriz dada corresponde ou não a [ 1
−2
−1
415].

Temos que a inversa de uma matriz 𝐶= [𝒂
𝒃
𝒄
𝒅] é dada por:

𝐶−1 =
1
det 𝐶× [ 𝒅
−𝒃
−𝒄
𝒂]

A matriz em questão é 𝐶= [𝟒𝟏𝟓
𝟐
𝟏
𝟏], e seu determinante é:

det 𝐶= [𝟒𝟏𝟓× 𝟏] −[𝟐× 𝟏]

= 415 −2

= 413

Temos que:

𝐶−1 =
1
det 𝐶× [ 𝟏
−𝟐
−𝟏
𝟒𝟏𝟓]

𝐶−1 =
1
413 × [ 𝟏
−𝟐
−𝟏
𝟒𝟏𝟓]

𝐶−1 = [

1
413
−2

413

−1

413
415
413

]

Logo, a matriz inversa não corresponde a [ 𝟏
−𝟐
−𝟏
𝟒𝟏𝟓].

Gabarito: ERRADO.

(CEBRASPE/PETROBRAS/2023) Considerando uma matriz 𝑨𝟐×𝟑, uma matriz 𝑩𝟑×𝟑 e uma matriz 𝑪𝟑×𝟐,
julgue o item a seguir.

É possível calcular os determinantes das matrizes 𝑨 e 𝑪, porém não o da matriz 𝑩.

Comentários:

Só é possível calcular determinantes de matrizes quadradas, que são matrizes que apresentam o mesmo
número de linhas e colunas. Note que:

- 𝑨𝟐×𝟑 não é uma matriz quadrada, pois apresenta 2 linhas e 3 colunas;
- 𝑩𝟑×𝟑 é uma matriz quadrada, com 3 linhas e 3 colunas; e
- 𝑪𝟑×𝟐 não é uma matriz quadrada, pois apresenta 3 linhas e 2 colunas.

Portanto, é possível calcular o determinante da matriz 𝑩, porém não é possível para as matrizes 𝑨 e 𝑪.

Gabarito: ERRADO.

(FUNDATEC/Pref. Cachoeira Sul/2022) Analise a matriz abaixo:

[𝟏
𝒂
𝟎
𝟏]

É correto afirmar que seu determinante vale:

a) 𝑎

b) 1/𝑎

c) 1

d) 2 + 𝑎

e) 0

Comentários:

Para calcular o determinante de uma matriz quadrada de ordem 2, devemos realizar a seguinte operação:

(Produto dos elementos da diagonal principal) −(Produto dos elementos da diagonal secundária)

Logo:

det [𝟏
𝒂
𝟎
𝟏]

= 𝟏. 𝟏−𝒂. 𝟎

= 1

Gabarito: Letra C.

(Instituto AOCP/PM ES/2022) Considerando que os determinantes das matrizes A e B são iguais, em
que

𝑨= (𝒙
𝟕
𝟒
𝒙) e 𝑩= (𝟐
−𝟏
𝟒
𝟐)

assinale a alternativa que apresenta todos os valores de 𝒙 que verificam essa igualdade.

a) {2}

b) {6}

c) {−2; 2}

d) {−6; 6}

e) {2; 6}

Comentários:

Para calcular o determinante de uma matriz quadrada de ordem 2, devemos realizar a seguinte operação:

(Produto dos elementos da diagonal principal) −(Produto dos elementos da diagonal secundária)

𝑑𝑒𝑡 𝐴= |𝒙
𝟕
𝟒
𝒙| = 𝒙. 𝒙−𝟕. 𝟒= 𝑥2 −28

det 𝐵= |𝟐
−𝟏
𝟒
𝟐| = 𝟐. 𝟐−(−𝟏). 𝟒= 4 + 4 = 8

Como os determinantes são iguais, temos:

det 𝐴= det 𝐵

𝑥2 −28 = 8

𝑥2 = 28 + 8

𝑥2 = 36

𝑥= ±√36

𝑥= ±6

Portanto, os valores de 𝑥 que satisfazem a igualdade são {−6; 6}.

Gabarito: Letra D.

(FGV/MPE SC/2022) Seja A uma matriz 4 x 4 cujo determinante é igual a 2.

O determinante da matriz 3A é igual a:

a) 6;

b) 12;

c) 24;

d) 64;

e) 162.

Comentários:

Sabemos que, ao multiplicar uma matriz de ordem 𝒏 por uma constante 𝒌, o determinante dessa nova
matriz fica multiplicado por 𝒌𝒏.

det(𝑘𝐴) = 𝑘𝑛det 𝐴

Como a matriz 𝐴 é de ordem 𝑛= 4, temos:

det(3𝐴) = 34 det 𝐴

det(3𝐴) = 81 × 2

det(3𝐴) = 162

Gabarito: Letra E.

(Instituto AOCP/PM ES/2022) Sabendo que as matrizes 𝑨 e 𝑩 têm ordem 𝟑 e são tais que 𝒅𝒆𝒕(𝑨) = 𝟐
e 𝒅𝒆𝒕(𝑩) = 𝟑, assinale a alternativa que apresenta o valor de 𝒅𝒆𝒕(𝟑𝑨× 𝟐𝑩)

a) 62

b) 63

c) 64

d) 65

e) 66

Comentários:

Pelo teorema de Binet, temos:

det(3𝐴× 2𝐵) = det 3𝐴× det 2𝐵

Além disso, sabemos que, ao multiplicar uma matriz de ordem 𝒏 por uma constante 𝒌, o determinante
dessa nova matriz fica multiplicado por 𝒌𝒏.

det(𝑘𝐴) = 𝑘𝑛det 𝐴

Como as matrizes 𝐴 e 𝐵 são de ordem 3, temos:

-
det 3𝐴= 33 det 𝐴; e
-
det 2𝐵= 23 det 𝐵

Logo:

det(3𝐴× 2𝐵) = det 3𝐴× det 2𝐵

= 33 det 𝐴× 23 det 𝐵

= 33 × 2 × 23 × 3

= 34 × 24

= (3 × 2)4

= 64

Gabarito: Letra C.

Texto para as próximas questões

Sendo 𝐴= (0
5) e 𝐵= (2
2), julgue os itens a seguir.

(QUADRIX/CRN 4/2022) A matriz A é inversível.

(QUADRIX/CRN 4/2022) Se 𝑩𝑿= 𝑨, então 𝑿= (

𝟎
𝟐
𝟎

𝟏

𝟐

)

(QUADRIX/CRN 4/2022) 𝒅𝒆𝒕 𝐁𝟓&gt; 𝟏. 𝟎𝟎𝟎

Comentários:

Questão 10

Para que 𝐴 seja inversível, devemos ter det 𝐴≠0.

Para calcular o determinante de uma matriz quadrada de ordem 2, devemos realizar a seguinte operação:

(Produto dos elementos da diagonal principal) −(Produto dos elementos da diagonal secundária)

Note que:

𝑑𝑒𝑡 𝐴= |𝟎
𝟏
𝟎
𝟓| = 𝟎. 𝟓−𝟏. 𝟎= 0

Logo, a matriz 𝐴 não é inversível. O gabarito, portanto, é ERRADO.

Questão 11

Para verificar se o item está correto, basta multiplicarmos a matriz 𝐵 pela matriz sugerida para 𝑋 e verificar
se o produto corresponde à matriz 𝐴.

𝐵𝑋= (𝟐
𝟎
𝟐
𝟐) (

𝟎
𝟐

𝟎
𝟏
𝟐

) = (

𝟐. 𝟎+ 𝟎. 𝟎
𝟐. 𝟐+ 𝟎. 𝟏

𝟐

𝟐. 𝟎+ 𝟐. 𝟎
𝟐. 𝟐+ 𝟐. 𝟏

𝟐

) = (0
4
0
5) ≠𝐴

Logo, como 𝐵𝑋≠𝐴 para o 𝑋 sugerido, o gabarito é ERRADO.

Questão 12

Inicialmente, vamos calcular o determinante de 𝐵:

det 𝐵= |𝟐
𝟐| = 𝟐. 𝟐−𝟎. 𝟐= 4

Note que:

det 𝐵5 = det(𝐵× 𝐵× 𝐵× 𝐵× 𝐵)

Pelo teorema de Binet, temos:

det 𝐵5 = det(𝐵) × det(𝐵) × det(𝐵) × det(𝐵) × det(𝐵)

= 4 × 4 × 4 × 4 × 4

= 45

= (22)5

= 210

= 1024

Logo, é correto afirmar que det 𝐵5 &gt; 1.000. O gabarito, portanto, é CERTO.

Gabarito: 10 - ERRADO. 11 - ERRADO. 12 - CERTO.

(Instituto AOCP/IF RO/2022) Se 𝑨, 𝑩 e 𝑪 são matrizes de ordem 𝟑, 𝑨× 𝑪= 𝑩−𝟏, 𝑪= 𝟒𝑨 e 𝐝𝐞𝐭 𝑩=
𝟏

𝟏𝟔, então 𝐝𝐞𝐭 𝑨 é igual a:

a) −

1

2 ou
1

2

b) −

1

4 ou
1

4

c) −4 ou 4.

d) −2 ou 2.

e) −1 ou 1.

Comentários:

Sabemos que 𝐴𝐶= 𝐵−1. Como 𝐶= 4𝐴, temos:

𝐴. 4𝐴= 𝐵−1

4. 𝐴. 𝐴= 𝐵−1

4𝐴2 = 𝐵−1

Como as matrizes são iguais, os seus determinantes também são:

det 4𝐴2 = det 𝐵−1

Vamos desenvolver os dois termos dessa igualdade.

Desenvolvimento de 𝐝𝐞𝐭𝟒𝑨𝟐

Sabemos que, ao multiplicar uma matriz de ordem 𝒏 por uma constante 𝒌, o determinante dessa nova
matriz fica multiplicado por 𝒌𝒏.

det(𝑘𝐴) = 𝑘𝑛det 𝐴

Logo:

det 4𝐴2 = 43 det 𝐴2

det 4𝐴2 = 64. det 𝐴2

Além disso, pelo teorema de Binet, det 𝐴2 = det(𝐴× 𝐴) = det 𝐴× det 𝐴. Portanto:

det 4𝐴2 = 64. det 𝐴× det 𝐴

det 4𝐴2 = 64(det 𝐴)2

Desenvolvimento de 𝐝𝐞𝐭𝑩−𝟏

Sabemos que determinante da matriz inversa é o inverso do determinante da matriz original. Logo:

det 𝐵−1 =
1
det 𝐵

det 𝐵−1 = 1

1
16

det 𝐵−1 = 16

Resolução do problema

Sabemos que:

det 4𝐴2 = det 𝐵−1

Logo:

64(det 𝐴)2 = 16

(det 𝐴)2 = 16

64

(det 𝐴)2 = 1

4

det 𝐴= ±√1

det 𝐴= ± 1

Portanto, det 𝐴 é igual a −

2 ou

2.

Gabarito: Letra A.

(FUNDATEC/Pref. Viamão/2022) Considere uma matriz 𝑨 quadrada de ordem 𝟓 com determinante
𝐝𝐞𝐭(𝑨) ≠𝟎. Se multiplicarmos uma linha de 𝑨 por 𝟐, então o determinante passa a ser:

a) 25det(𝐴)

b) 2det(𝐴)

c) 5det(𝐴)

d) 10det(𝐴)

e)

5

2 det(𝐴)

Comentários:

Da teoria da aula, sabemos que, ao multiplicar uma fila (linha ou coluna) de uma matriz por uma
constante 𝒌, o determinante dessa nova matriz também fica multiplicado por 𝒌.

Logo, ao multiplicarmos uma linha de 𝐴 por 2, o determinante passa a ser 2 det(𝐴).

Gabarito: Letra B.

(FGV/MPE SC/2022) Considere as matrizes 𝑨= [

𝒂
𝒃
𝒄
𝒅
𝒆
𝒇
𝒈
𝒉
𝒌

] e 𝑩= [

𝟐𝒂
𝒄
𝟑𝒃
𝟐𝒅
𝒇
𝟑𝒆
𝟐𝒈
𝒌
𝟑𝒉

].

Sendo 𝒅𝒆𝒕(𝑨) e 𝒅𝒆𝒕(𝑩) os determinantes das matrizes 𝑨 e 𝑩, respectivamente, tem-se que:

a) 𝑑𝑒𝑡(𝐴) = 6 × 𝑑𝑒𝑡(𝐵);

b) 𝑑𝑒𝑡(𝐴) = −6 × 𝑑𝑒𝑡(𝐵);

c) 𝑑𝑒𝑡(𝐵) = 6 × 𝑑𝑒𝑡(𝐴);

d) 𝑑𝑒𝑡(𝐵) = −6 × 𝑑𝑒𝑡(𝐴);

e) 𝑑𝑒𝑡(𝐴) = 𝑑𝑒𝑡(𝐵).

Comentários:

Sabemos que, ao multiplicar uma fila (linha ou coluna) de uma matriz por uma constante 𝒌, o
determinante dessa nova matriz também fica multiplicado por 𝒌.

Uma consequência interessante dessa propriedade é realizar a operação inversa, removendo um fator
comum de dentro do determinante.

Veja que:

det(𝐵) = |

𝟐𝑎
𝑐
𝟑𝑏
𝟐𝑑
𝑓
𝟑𝑒
𝟐𝑔
𝑘
𝟑ℎ

|

det(𝐵) = 𝟐× |

𝑎
𝑐
𝟑𝑏
𝑑
𝑓
𝟑𝑒
𝑔
𝑘
𝟑ℎ

|

det(𝐵) = 𝟐× 𝟑× |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

|

det(𝐵) = 6 × |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

|
⏟

𝒙

Note que 𝑥= |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

| é muito parecido com det(𝐴). A diferença é que a segunda e a terceira coluna

estão trocadas.

Sabemos que ao trocarmos uma fila (linha ou coluna) de lugar com outra fila paralela, o determinante
muda de sinal. Logo:

|

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

| = 𝑥→|

𝒂
𝒃
𝒄
𝒅
𝒆
𝒇
𝒈
𝒉
𝒌

|
⏟

det(𝐴)

= −𝑥

Portanto:

det(𝐴) = −𝑥

𝑥= −det(𝐴)

Consequente, temos que det(𝐵) é dado por:

det(𝐵) = 6 × |

𝒂
𝒄
𝒃
𝒅
𝒇
𝒆
𝒈
𝒌
𝒉

|
⏟

𝒙

det(𝐵) = −6 × 𝑑𝑒𝑡 (𝐴)

Gabarito: Letra D.

(FEPESE/Pref. B Camboriú/2022) O valor de 𝒂 para que o determinante

|

−𝟑
−𝟓

−𝟏
𝒂
−𝟏

𝟏𝟎
𝟏𝟖

|

seja igual a zero é:

a) Maior que 11.

b) Maior que 8 e menor que 11.

c) Maior que 2 e menor que 5.

d) Maior que 5 e menor que 8.

e) Menor que 2.

Comentários:

Considere que 𝑋= [

1
−3
2
−5

05
09
04
07
1
−1
𝑎
−1

01
02
10
18

]. Queremos determinar o valor de 𝑎 para que det 𝑋 seja igual a 0.

Para resolver um determinante de ordem 4, deve-se utilizar o Teorema de Laplace. Antes de aplicar esse
teorema, vamos usar o Teorema de Jacobi para aumentar o número de zeros em uma fileira.

Substituindo a linha 1 (𝑳𝟏) por 𝑳𝟏−𝑳𝟑, ficamos com:

det 𝑋= |

𝟏
−𝟑
2
−5

0𝟓
0𝟗
04
07
𝟏
−𝟏
𝑎
−1

0𝟏
0𝟐
10
18

|
=
𝑳𝟏← 𝑳𝟏−𝑳𝟑|

0
−2
2
−5

04
07
04
07
1
−1
𝑎
−1

01
02
10
18

|

Substituindo a linha 2 (𝑳𝟐) por 𝑳𝟐−𝟐𝑳𝟑, ficamos com:

det 𝑋= |

0
−2
𝟐
−𝟓

04
07
0𝟒
0𝟕
𝟏
−𝟏
𝑎
−1

0𝟏
0𝟐
10
18

|
=
𝑳𝟐← 𝑳𝟐−𝟐𝑳𝟑|

0
−2
0
−7

04
07
02
03
1
−1
𝑎
−1

01
02
10
18

|

Aplicando o Teorema de Laplace na primeira coluna do determinante anterior, ficamos com:

det 𝑋= 𝑎11𝐴11 + 𝑎21𝐴21 + 𝑎31𝐴31 + 𝑎41𝐴41

= 0. 𝐴11 + 0. 𝐴21 + 1. 𝐴31 + 𝑎. 𝐴41

= 𝐴31 + 𝑎. 𝐴41

= (−1)3+1𝐷31 + 𝑎. (−1)4+1𝐷41

= (−1)4𝐷31 + 𝑎. (−1)5𝐷41

= 1. 𝐷31 + 𝑎. (−1). 𝐷41

= 𝐷31 −𝑎. 𝐷41

= |

−2
−7

1
−1
𝑎
−1

01
02
10
18

| −𝑎|

−2
−7

1
−1
𝑎
−1

01
02
10
18

|

= |

2
4
7
−7
2
3
−1
10
18
|
⏟

𝐷31

−𝑎. |

2
4
7
−7
2
3
1
1
2
|
⏟

𝐷41

Vamos resolver os dois determinantes de ordem 3 pela regra de Sarrus.

Primeiro determinante: 𝑫𝟑𝟏

|

2
4
7
−7
2
3
−1
10
18
|

2
4
−7
2
−1
10

Parte Negativa Parte Positiva

𝐷31 = [𝟐. 𝟐. 𝟏𝟖+ 𝟒. 𝟑. (−𝟏) + 𝟕. (−𝟕). 𝟏𝟎] −[𝟕. 𝟐. (−𝟏) + 𝟐. 𝟑. 𝟏𝟎+ 𝟒. (−𝟕). 𝟏𝟖]

= [72 −12 −490] −[−14 + 60 −504]

= [−430] −[−458]

= 28

Segundo determinante: 𝑫𝟒𝟏

|

2
4
7
−7
2
3
1
1
2
|

2
4
−7
2
1
1

Parte Negativa Parte Positiva

𝐷41 = [𝟐. 𝟐. 𝟐+ 𝟒. 𝟑. 𝟏+ 𝟕. (−𝟕). 𝟏] −[𝟕. 𝟐. 𝟏+ 𝟐. 𝟑. 𝟏+ 𝟒. (−𝟕). 𝟐]

= [8 + 12 −49] −[14 + 6 −56]

= (−29) −(−36)

= 7

Obtenção do valor da constante 𝒂

Temos que:

det 𝑋= 𝐷31 −𝑎. 𝐷41

det 𝑋= 28 −𝑎. 7

det 𝑋= 28 −7𝑎

Queremos obter o valor de 𝑎 que faça com que det 𝑋 seja igual a zero.

det 𝑋= 0

28 −7𝑎= 0

28 = 7𝑎

𝑎= 28

7

𝑎= 4

Logo, o valor de 𝑎 é maior que 2 e menor que 5.

Gabarito: Letra C.

(IDECAN/Pref. Campina Gde/2021) Seja 𝑨= (

𝟏
𝟐
𝟕
𝟎
𝟑
𝟏
𝟎
𝟓
𝟐

) e seja 𝑨−𝟏= (

𝟏
𝟑𝟏
−𝟏𝟗
𝟎
𝟐
−𝟏
𝟎
−𝟓
𝟑

). Determine o

valor de 𝐝𝐞𝐭 (𝑨. 𝑨−𝟏) e assinale a alternativa correta.

a) 0

b) 1

c) −1

d) 2

Comentários:

Pela definição de matriz inversa, sabemos que 𝐴. 𝐴−1 é igual à matriz identidade de ordem 3:

𝐴. 𝐴−1 = (

1
0
0
0
1
0
0
0
1
)

Logo:

det(𝐴. 𝐴−1) = |

1
0
0
0
1
0
0
0
1
|

Como a matriz identidade de ordem 3 em questão é uma matriz diagonal, o seu determinante é o produto
dos elementos da diagonal. Portanto:

det(𝐴. 𝐴−1) = 1 × 1 × 1

= 1

Gabarito: Letra B.

(Instituto Consulplan/SEED PR/2021) Considere a seguinte equação matricial: 𝟐𝑨−

𝟑𝑿= 𝑩 em que

as matrizes 𝑨 e 𝑩 são conhecidas. Se 𝑨= [

−𝟐
−𝟑

𝟑
−𝟏] e 𝑩= [𝟎
𝟑], o determinante da matriz 𝑿 é um

número:

a) Inteiro positivo.

b) Inteiro negativo.

c) Não inteiro positivo.

d) Não inteiro negativo.

Comentários:

Vamos inicialmente determinar a matriz 𝑋. Temos:

2𝐴−1
3 𝑋= 𝐵

2𝐴−𝐵= 1
3 𝑋

1
3 𝑋= 2𝐴−𝐵

Multiplicando ambos os lados da equação por 3, temos:

𝑋= 6𝐴−3𝐵

𝑋= 6 [

−2
−3
1
3
−1] −3 [0
1
4
3]

𝑋= [−12
−18
2
−6 ] −[ 0
3
12
9]

𝑋= [(−12 −0)
(−18 −3)
(2 −12)
(−6 −9) ]

𝑋= [−12
−21
−10
−15]

Portanto:

det 𝑋= |−𝟏𝟐
−𝟐𝟏
−𝟏𝟎
−𝟏𝟓| = (−𝟏𝟐). (−𝟏𝟓) −(−𝟐𝟏). (−𝟏𝟎)

= 180 −210

= −30

==5460==

Logo, o determinante da matriz 𝑋 é um inteiro negativo.

Gabarito: Letra B.

(VUNESP/Pref. Ilhabela/2020) Considere duas matrizes quadradas de mesma ordem, 𝑨 e 𝑩. Se
𝐝𝐞𝐭(𝑴) é o determinante de uma matriz e 𝐭𝐫(𝑴) é o traço de uma matriz, temos que:

a) det(𝐴𝐵) = det(𝐴) + det(𝐵)

b) tr(𝐴𝐵) = tr(𝐴) + tr(𝐵)

c) tr(𝐴+ 𝐵) = tr(𝐴) · tr(𝐵)

d) tr(𝐴𝐵) = tr(𝐵𝐴)

e) det(𝐴+ 𝐵) = det(𝐴) + det(𝐵)

Comentários:

Pelo teorema de Binet, sabemos que:

det(𝐴𝐵) = det 𝐴× det 𝐵

Logo, podemos eliminar a letra A.

Além disso, note que a suposta propriedade 𝐝𝐞𝐭(𝑨+ 𝑩) = 𝐝𝐞𝐭(𝑨) + 𝐝𝐞𝐭(𝑩) não existe, de modo que
podemos eliminar a letra E.

Quanto ao traço de uma matriz, temos as seguintes propriedades:

-
𝒕𝒓 (𝑨+ 𝑩) = 𝒕𝒓(𝑨) + 𝒕𝒓(𝑩) → podemos eliminar as letras B e C.
-
𝑡𝑟 (𝐴−𝐵) = 𝑡𝑟(𝐴) −𝑡𝑟(𝐵)
-
𝑡𝑟(𝛼𝐴) = 𝛼× 𝑡𝑟(𝐴)
-
𝒕𝒓 (𝑨𝑩) = 𝒕𝒓(𝑩𝑨) → propriedade apresentada na letra D.

Portanto, a alternativa que apresenta uma propriedade correta é a letra D.

Gabarito: Letra D.

(CEBRASPE/Pref. São Cristóvão/2019) Para a matriz 𝑨= [

𝟏
𝟎
𝟏
𝟏

−𝟏
𝟏
𝟏
𝟏
𝟎
𝟎
𝟏
𝟎

𝟏
𝟏
𝟎
𝟏

], tem-se que 𝒅𝒆𝒕(𝑨) = −𝟏

e, consequentemente, 𝑨 é uma matriz inversível.

Comentários:

Temos um determinante de ordem 4. Para calculá-lo, vamos usar a regra de Chió.

Fazer com que o elemento 𝒂𝟏𝟏 seja igual a 1

Note que o elemento 𝒂𝟏𝟏 já é igual a 𝟏.

Zerar todos os elementos da primeira linha, à exceção de 𝒂𝟏𝟏, fazendo uso da primeira coluna

Para tanto, vamos realizar as seguintes substituições, nessa ordem:

- 𝑪𝟑←𝑪3 + 𝑪𝟏
- 𝑪𝟒←𝑪𝟒−𝑪𝟏

det 𝐴= |

1
0
1
1
−1
1
1
1
0
0
1
0
1
1
0
1

|
=
𝑪𝟑←𝑪𝟑+𝑪𝟏|

1
0
1
1
𝟎
1
𝟐
1
0
0
1
0
𝟏
1
𝟏
1

|
=
𝑪𝟒←𝑪𝟒−𝑪𝟏|

1
0
1
1
𝟎
𝟎
2
𝟎
0
0
1
0
1
𝟏
1
𝟎

|

Observe que o determinante ficou reduzido a:

det 𝐴= |

1
0
1
1
0
0
2
0
0
0
1
0
1
1
1
0

|

Feita a operação anterior, o determinante em questão é igual ao menor complementar 𝑫𝟏𝟏

det 𝐴= |

1
0
1
1
0
0
2
0
0
0
1
0
1
1
1
0

|

det 𝐴= |

1
0
1
1
0
0
2
0
0
0
1
0
1
1
1
0

|

det 𝐴= |

𝟏
2
0
𝟎
1
1
𝟎
1
0
|

Podemos agora calcular o determinante de 𝐴 pela regra de Sarrus. Observe, porém, que é mais
conveniente aplicar o Teorema de Laplace na primeira coluna, pois o determinante fica reduzido a 𝐷11.

det 𝐴= 𝑎11𝐴11 + 𝑎21𝐴21 + 𝑎31𝐴31

= 1𝐴11 + 0. 𝐴21 + 0. 𝐴31

= 𝐴11

= (−1)1+1𝐷11

= 𝐷11

= |

|

= |𝟏
𝟏
𝟏
𝟎|

= [𝟏. 𝟎] −[𝟏. 𝟏]

= −1

Temos, portanto, que 𝐝𝐞𝐭𝑨= −𝟏. Além disso, a matriz 𝑨 é inversível, pois o seu determinante é diferente
de zero.

Gabarito: CERTO.

(CESGRANRIO/PETROBRAS/2018) Sejam 𝑨 uma matriz quadrada de ordem 𝟐 e 𝑩 uma matriz
quadrada de ordem 𝟑, tais que 𝐝𝐞𝐭𝑨 . 𝐝𝐞𝐭𝑩 = 𝟏.

O valor de 𝐝𝐞𝐭(𝟑𝑨) . 𝐝𝐞𝐭(𝟐𝑩) é

a) 5

b) 6

c) 36

d) 72

e) 108

Comentários:

Sabemos que ao multiplicar uma matriz de ordem 𝒏 por uma constante 𝒌, o determinante dessa nova
matriz fica multiplicado por 𝒌𝒏.

det(𝑘𝐴) = 𝑘𝑛det 𝐴

A matriz 𝐴 é de ordem 2. Logo, det(3𝐴) = 3𝟐det(𝐴).

A matriz 𝐵 é de ordem 3. Logo, det(2𝐵) = 2𝟑det(𝐵).

Sabemos que 𝐝𝐞𝐭𝑨× 𝐝𝐞𝐭𝑩= 𝟏. Portanto, o produto requerido é:

det(3𝐴) × det(2𝐵)

= 32 det(𝐴) × 23 det(𝐵)

= 9 det(𝐴) × 8 det(𝐵)

= (9 × 8) × (𝐝𝐞𝐭𝑨× 𝐝𝐞𝐭𝑩)

= 72 × 𝟏

= 72

Gabarito: Letra D.

(CESGRANRIO/TRANSPETRO/2018) Sejam 𝑨 e 𝑩 duas matrizes quadradas 𝟐× 𝟐, tal que 𝑨=

[ 𝟐
−𝟏
𝟔], e 𝑨. 𝑩= 𝑰 , onde 𝑰 é a matriz identidade 𝟐× 𝟐. Assim, a soma dos elementos da matriz 𝑩 é

igual a

a) 5/16

b) 7/16

c) 9/16

d) 11/16

e) 13/16

Comentários:

Sabemos que, pela definição de matriz inversa, 𝐴𝐴−1 = 𝐼. Como 𝐴. 𝐵= 𝐼, temos que 𝐵 é a inversa de 𝐴.

Temos que a inversa de uma matriz 𝐴= [𝒂
𝒃
𝒄
𝒅] é dada por:

𝐴−1 =
1
det 𝐴× [ 𝒅
−𝒃
−𝒄
𝒂]

A matriz em questão é 𝐴= [ 𝟐
𝟒
−𝟏
𝟔], e seu determinante é:

det 𝐴= [𝟐× 𝟔] −[𝟒× (−𝟏)] = 12 −(−4) = 16

Temos que:

𝐵= 𝐴−1

=
1
det 𝐴× [
𝟔
−𝟒
−(−𝟏)
𝟐]

= 1

16 × [𝟔
−𝟒
𝟏
𝟐]

= [

6
16
−4

16
1
16
2
16

]

Logo, a soma dos elementos de 𝐵 é:

16 + (−4
16) + 1
16 + 2

= 6 −4 + 1 + 2

= 5

Gabarito: Letra A.

(CEBRASPE/IFF/2018) Considere que k seja um número real e que o determinante da matriz 𝑩=

[𝟑
𝒌
𝟑
𝟗] seja igual a 27. Nesse caso, se 𝑨= [𝟑
−𝟏
𝟗

#### 𝟔] então o determinante da matriz B − A, será igual a:

a) 30.

b) 0.

c) 3.

d) 6.

e) 10.

Comentários:

O determinante de B é dado pelo produto dos termos da diagonal principal menos o produto dos termos
da diagonal secundária:

det 𝐵= |𝟑
𝒌
𝟑
𝟗|

27 = [𝟑× 𝟗] −[𝒌× 𝟑]

27 = 27 −3𝑘

𝑘= 0

Logo, a matriz B é dada por:

𝐵= [3
0
3
9]

A matriz 𝐵−𝐴 é:

𝐵−𝐴= [3
0
3
9] −[3
−1
9
6 ]

= [3 −3
0 −(−1)
3 −9
9 −6 ]

= [ 0
1
−6
3]

Novamente, para calcular det(𝐵−𝐴), devemos realizar produto dos termos da diagonal principal e
subtrair o produto dos termos da diagonal secundária:

det(𝐵−𝐴) = | 𝟎
𝟏
−𝟔
𝟑|

det(𝐵−𝐴) = [𝟎× 𝟑] −[𝟏× (−𝟔)]

det(𝐵−𝐴) = 0 −(−6)

det(𝐵−𝐴) = 6

Gabarito: Letra D.

(CEBRASPE/SEDUC AL/2018) Julgue o item que se seguem, relativos a matrizes e sistemas lineares.

Se 𝒂 é um número real e se o determinante da matriz 𝑷= [𝒂
𝒂−𝟏] + 𝟐[ 𝟎
−𝟏
𝟏] for igual a zero,

então 𝒂 = − 𝟐 ou 𝒂 = 𝟏.

Comentários:

A matriz 𝑃 é dada por:

𝑃= [𝑎
1
0
𝑎−1] + 2 [ 0
−1
−1
1 ]

= [𝑎
1
0
𝑎−1] + [ 𝟐× 0
𝟐× (−1)
𝟐× (−1)
𝟐× 1 ]

= [𝑎
1
0
𝑎−1] + [ 0
−2
−2
2 ]

= [𝑎+ 0
1 −2
0 −2
𝑎−1 + 2]

= [ 𝑎
−1
−2
𝑎+ 1]

Temos que:

det 𝑃= 0

| 𝒂
−𝟏
−𝟐
𝒂+ 𝟏| = 0

[𝒂× (𝒂+ 𝟏)] −[(−𝟏) × (−𝟐)] = 0

𝑎2 + 𝑎−2 = 0

Note que as raízes dessa equação do segundo grau em 𝒂 são de fato −𝟐 e 𝟏, pois:

(−2)2 + (−2) −2 = 0

12 + 1 −2 = 0

Logo, se 𝐝𝐞𝐭𝑷= 𝟎, devemos ter 𝒂= −𝟐 ou 𝒂= 𝟏.

Gabarito: CERTO.

(CEBRASPE/SEDUC AL/2018) Julgue o item que se seguem, relativos a matrizes e sistemas lineares.

Se P for uma matriz simétrica, então P será inversível.

Comentários:

Uma matriz é inversível quando o seu determinante é diferente de zero.

Não há correlação entre o fato de uma matriz ser simétrica com o fato de ela apresentar determinante
diferente de zero.

Para mostrar que a afirmação está errada, pode-se usar como contraexemplo a matriz 𝑷= [𝟎
𝟎
𝟎
𝟎].

Note que se trata de uma matriz simétrica, pois 𝑃𝑡= 𝑃= [0
0
0
0]. Veja, porém, que det 𝑃= 0 e, portanto,

essa matriz não é inversível.

Gabarito: ERRADO.

## LISTA DE QUESTÕES – FGV

### Matrizes

(FGV/ISS Cuiabá/2024) Considere uma matriz numérica em que as linhas (𝑳) são contadas de 1 em diante,
de cima para baixo e as colunas (𝑪) são contadas de 1 em diante, da esquerda para a direita.

Cada elemento da matriz tem seu valor definido pela regra a seguir:

Valor em linha 𝑳 e coluna 𝑪 = {𝟏, se 𝑳+ 𝑪 é ímpar

𝟎, se 𝑳+ 𝑪 é par

Se essa matriz tiver 11 linhas e 11 colunas, a soma de todos os seus elementos será igual a

a) 60.

b) 56.

c) 54.

d) 52.

e) 48.

(FGV/Pref Caraguatatuba/2024) Três amigos 𝑨𝟏, 𝑨𝟐 e 𝑨𝟑 foram juntos a uma cafeteria. A matriz

(

𝟎
𝟏
𝟐
𝟑
𝟎
𝟐
𝟐
𝟏
𝟎

) indica quantos cafés cada um pagou para outro. Nessa matriz, o elemento da linha 𝒊 e coluna

𝒌 indica quantos cafés o amigo 𝑨𝒊 pagou para o amigo 𝑨𝒌.

A diferença entre a quantidade de cafés que 𝑨𝟐 pagou para os amigos e a quantidade de cafés que os
amigos juntos pagaram para 𝑨𝟐 é:

a) 0.

b) 1.

c) 2.

d) 3.

e) 4.

(FGV/INPE/2024) Sobre multiplicação de matrizes, operação fundamental em álgebra linear, assinale a
afirmativa correta.

a) A multiplicação de matrizes é comutativa.

b) Uma matriz quadrada só pode ser multiplicada por outra matriz quadrada.

c) O produto de duas matrizes pode ter dimensões diferentes da matriz original.

d) A multiplicação de qualquer par de matrizes é sempre possível.

e) O produto de duas matrizes é sempre uma matriz quadrada.

(FGV/SEAD-AP/2022) Seja 𝑨 a matriz 𝟐× 𝟐 onde cada elemento é 𝒂𝒊𝒋= 𝒊+ 𝒋.

A soma dos elementos da matriz 𝑨𝟐 é

a) 12.

b) 38.

c) 56.

d) 74.

e) 144.

(FGV/INPE/2024) Sejam 𝑨 e 𝑩 duas matrizes tais que:

𝑨𝟐= 𝑩𝟐= [𝟏
𝟎
𝟎
𝟏]

𝑨𝑩= [𝟎
−𝟏
𝟏
𝟐] e 𝑩𝑨= [ 𝟐
𝟏
−𝟏
𝟎]

Então, a matriz (𝑨+ 𝑩)(𝑨−𝑩)𝟐𝟎𝟐𝟒 é:

a) [0
0
0
0]

b) [1
0
0
1]

c) [2024
1
0
2024]

d) [2024
1
0
−2024]

e) [2024
0
0
2024]

(FGV/Senado Federal/2022) Uma sociedade empresária guarda documentos em 4 arquivos, numerados
de 1 a 4. Por razões de segurança, a cada ano ela muda todos os documentos de arquivo, mantendo
inalterado o número total de documentos em cada arquivo.

A mudança se dá de acordo com a tabela abaixo, em que, na linha i e coluna j está indicado o total de
documentos transferidos do arquivo i para o arquivo j.

O número X de documentos transferidos do arquivo 4 para o 1 é igual a

a) 20

b) 30

c) 40

d) 50

e) 60

(FGV/TCE-TO/2022) Para um dia de treinamento, os funcionários de uma empresa foram alocados em
três salas: Sala 1, Sala 2 e Sala 3. Tendo sido realizada a primeira parte do treinamento, foi feito um
intervalo, após o qual os funcionários puderam escolher livremente qualquer sala para a segunda parte do

treinamento.

Na matriz 𝑨 abaixo, cada elemento 𝒂𝒊𝒋 representa o número de funcionários que estavam na Sala 𝒊 e
foram para a Sala 𝒋 após o intervalo.

𝑨= [

𝟓
𝟐
𝟕
𝟒
𝟗
𝟔
𝟑
𝟖
𝟏𝟎

]

É correto concluir que:

a) a Sala 1 terminou com 2 funcionários a mais que no início;

b) a Sala 2 terminou com 20 funcionários;

c) a Sala 3 terminou com 3 funcionários a mais que no início;

d) a Sala 1 iniciou com 15 funcionários;

e) uma das salas terminou com o mesmo número de funcionários que tinha no início.

### (FGV/MPE SC/2022)

Seja 𝑨= [𝟐
𝟏
𝟑
𝟏].

A soma dos elementos da matriz 𝑨𝟐 é:

a) 10;

b) 12;

c) 15;

d) 23;

e) 30.

==5460==

(FGV/Pref Paulínia/2021) Considere a equação matricial 𝑨𝟐𝑿−𝟏𝑩−𝟏= 𝑨𝑪, onde 𝑨, 𝑩, 𝑪 e 𝑿 são matrizes

quadradas invertíveis e de mesma ordem.

A solução 𝑿 é igual a

a) 𝐴𝐵−1𝐶−1

b) 𝐴𝐶−1𝐶−1

c) 𝐶𝐴−1𝐵

d) 𝐴−1𝐵𝐶

e) 𝐵−1𝐶−1𝐴

(FGV/Pref. Salvador/2019) Considere as matrizes 𝑨𝟐×𝟑 e 𝑩𝟐×𝟐.

Sobre essas matrizes é correto afirmar que

a) Existe a soma 𝐴+ 𝐵 e é uma matriz 4 × 5.

b) Existe o produto 𝐴𝐵 e é uma matriz 4 × 6.

c) Existe o produto 𝐵𝐴 e é uma matriz 4 × 6.

d) Não existe o produto 𝐴𝐵.

e) Não existe o produto 𝐵𝐴.

(FGV/SAD PE/2009) Considere a matriz 𝑨= ( 𝟏
𝟎
−𝟏
−𝟏) e seja 𝒏 um número natural maior que 𝟏. Na

matriz 𝑨𝟐𝒏, o elemento que ocupa a 1ª linha e 2ª coluna é:

a) −1

b) 0

c) 1

d) 𝑛

e) 2𝑛

## GABARITO – FGV

### Matrizes

LETRA A
LETRA D
LETRA C
LETRA A
LETRA D

ANULADA
LETRA E
LETRA D
LETRA E

LETRA D
LETRA B

## LISTA DE QUESTÕES – FGV

### Determinantes

(FGV/INPE/2024) As operações matriciais desempenham um papel crucial em várias áreas, incluindo
matemática aplicada, engenharia, ciências naturais e computação. A partir das operações matriciais pode-
se resolver sistemas lineares, realizar o processamento de imagens e sinais, dentre outras aplicações.

Sobre as operações matriciais, assinale a afirmativa correta.

a) A matriz identidade é uma matriz quadrada que possui todos os elementos iguais a 1.

b) A multiplicação de duas matrizes é comutativa, ou seja, AB = BA para quaisquer matrizes A e B.

c) A transposição de uma matriz consiste em inverter suas linhas com suas colunas.

d) A determinante de uma matriz é sempre um número inteiro.

e) A inversa de uma matriz é a mesma matriz transposta.

(FGV/EPE/2024/ADAPTADA) Considere as matrizes a seguir:

𝑨= [

𝟐
𝟏𝟔
𝟓
𝟏𝟏
𝟒
𝟏𝟐
𝟗
𝟕
𝟑

] 𝑩= [

𝟏
𝟐𝟏
𝟔
𝟗

𝟐
𝟎
𝟏𝟔
𝟓
𝟖
𝟏𝟏
𝟐
𝟗

𝟒
𝟏𝟐
𝟕
𝟑

]

Sobre essas matrizes, analise as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.

( ) As matrizes 𝑨 e 𝑩 são matrizes quadradas de ordem 3 e 4, respectivamente.

( ) As matrizes 𝑨 e 𝑩 não podem ser multiplicadas, uma vez que o número de colunas da primeira matriz
é diferente do número de linhas da segunda.

( ) O determinante da matriz 𝑨 é −156.

As afirmativas são, respectivamente,

a) V – V – V.

b) V – V – F.

c) V – F – V.

d) F – F – V.

e) F – V – V.

(FGV/INPE/2024) Se 𝑨 é uma matriz quadrada de ordem 𝒏 tal que 𝑨𝟐 = 𝒌𝑨 , sendo 𝒌 um número real
positivo. Sabendo que o determinante de 𝑨, 𝒅𝒆𝒕(𝑨), é diferente de zero, então,

a) 𝑑𝑒𝑡(𝐴) = 𝑘

b) 𝑑𝑒𝑡(𝐴) = 1

c) 𝑑𝑒𝑡(𝐴) = 0

d) 𝑑𝑒𝑡(𝐴) = 𝑘𝑛

e) 𝑑𝑒𝑡(𝐴) = −𝑘𝑛

(FGV/MPE SC/2022) Seja A uma matriz 4 x 4 cujo determinante é igual a 2.

O determinante da matriz 3A é igual a:

a) 6;

b) 12;

c) 24;

d) 64;

e) 162.

(FGV/MPE SC/2022) Considere as matrizes 𝑨= [

𝒂
𝒃
𝒄
𝒅
𝒆
𝒇
𝒈
𝒉
𝒌

] e 𝑩= [

𝟐𝒂
𝒄
𝟑𝒃
𝟐𝒅
𝒇
𝟑𝒆
𝟐𝒈
𝒌
𝟑𝒉

].

Sendo 𝒅𝒆𝒕(𝑨) e 𝒅𝒆𝒕(𝑩) os determinantes das matrizes 𝑨 e 𝑩, respectivamente, tem-se que:

a) 𝑑𝑒𝑡(𝐴) = 6 × 𝑑𝑒𝑡(𝐵);

b) 𝑑𝑒𝑡(𝐴) = −6 × 𝑑𝑒𝑡(𝐵);

c) 𝑑𝑒𝑡(𝐵) = 6 × 𝑑𝑒𝑡(𝐴);

d) 𝑑𝑒𝑡(𝐵) = −6 × 𝑑𝑒𝑡(𝐴);

e) 𝑑𝑒𝑡(𝐴) = 𝑑𝑒𝑡(𝐵).

(FGV/SAD PE/2009) O determinante da matriz [

𝟐
𝟏
𝟓
𝟑
𝟏
𝟐
𝟏
𝟎
𝟑

] é:

a) 22

b) 9

c) 0

d) −6

e) −10

==5460==

## GABARITO – FGV

### Determinantes

LETRA C
LETRA B
LETRA D
LETRA E
LETRA E

LETRA D

## LISTA DE QUESTÕES – MULTIBANCAS

### Matrizes

(FGV/Pref. Caraguatatuba/2024) Três amigos 𝑨𝟏, 𝑨𝟐 e 𝑨𝟑 foram juntos a uma cafeteria. A matriz

(

𝟎
𝟏
𝟐
𝟑
𝟎
𝟐
𝟐
𝟏
𝟎

) indica quantos cafés cada um pagou para outro. Nessa matriz, o elemento da linha 𝒊 e

coluna 𝒌 indica quantos cafés o amigo 𝑨𝒊 pagou para o amigo 𝑨𝒌.

A diferença entre a quantidade de cafés que 𝑨𝟐 pagou para os amigos e a quantidade de cafés que os
amigos juntos pagaram para 𝑨𝟐 é:

a) 0.

b) 1.

c) 2.

d) 3.

e) 4.

(FGV/INPE/2024) Sejam 𝑨 e 𝑩 duas matrizes tais que:

𝑨𝟐= 𝑩𝟐= [𝟏
𝟎
𝟎
𝟏]

𝑨𝑩= [𝟎
−𝟏
𝟏
𝟐] e 𝑩𝑨= [ 𝟐
𝟏
−𝟏
𝟎]

Então, a matriz (𝑨+ 𝑩)(𝑨−𝑩)𝟐𝟎𝟐𝟒 é:

a) [0
0
0
0]

b) [1
0
0
1]

c) [2024
1
0
2024]

d) [2024
1
0
−2024]

e) [2024
0
0
2024]

(IDECAN/GCM Pref. Serra/2023) Sendo a matriz B, a resultante do produto de −1/5 pela matriz:

𝑨=

(

−

𝟏

𝟓

𝟏

𝟑

𝟒)

, podemos afirmar que

a) 𝑏11 é

1

25

b) 𝑏21 é

1

45

c) 𝑏22 é −

2

35

d) 𝑏31 é −

1

25

(IDECAN/Procurador Pref. SCS/2023) Genericamente, qualquer elemento de uma matriz 𝑨 pode ser
representada por 𝒂𝒊𝒋, onde “𝒊” representa a linha e “𝒋” a coluna em que esse elemento se localiza. Uma
matriz 𝑴= (𝒎𝒊𝒋), de oitava ordem, é a matriz resultante da soma das matrizes 𝑷= (𝒑𝒊𝒋) e 𝑸= (𝒒𝐢𝐣).
Sabendo-se que (𝒑𝒊𝒋) = 𝒊𝟐+ 𝒋𝟐 e que (𝒒𝒊𝒋) = (𝒊+ 𝒋)𝟐, então a diferença entre os elementos 𝒎𝟖𝟏 e 𝒎𝟏𝟖

é igual a:

a) 2

b) 1

c) 0

d) −1

(IDECAN/Pref. SCS/2023) Suponha que você é um analista de dados em uma empresa de logística e
está trabalhando em um projeto para otimizar as rotas de entrega. Para isso, você utiliza matrizes para
representar os diferentes pontos de entrega e as distâncias entre eles.

Dadas as matrizes A e B que representam as distâncias entre os pontos de entrega em dois cenários
diferentes:

𝑨= (𝟐
−𝟏
𝟑
𝟒) e 𝑩= (𝟓
𝟎
𝟏
𝟐)

Você precisa calcular a matriz resultante da multiplicação para analisar as distâncias entre os pontos no
cenário final. Determine o resultado dessa operação.

a) ( 9
−2
19
8 )

b) ( 9
8)

c) (13
−2
7 )

d) (11
8)

(CESGRANRIO/BB/2023) Em uma cidade, as empresas tendem a se tornar clientes de três grandes
bancos (1, 2 e 3). Na matriz A, apresentada a seguir, o elemento da linha 𝒊 e da coluna 𝒋 representa o
número de empresas que deixaram de ser clientes do banco 𝒊 e se tornaram clientes do banco 𝒋 no
último triênio.

𝑨= (

𝟎
𝟓
𝟑
𝟒
𝟎
𝟐
𝟏
𝟔
𝟎

)

Com base apenas na matriz A, no último triênio, o banco 2 teve um aumento de quantas empresas

clientes?

a) 11

b) 10

c) 8

d) 6

e) 5

(VUNESP/Pref. SBC/2023) Para existir o produto de duas matrizes A e B, nessa ordem, é necessário que
o número de

a) linhas da matriz A seja igual ao número de linhas da matriz B.

b) linhas da matriz A seja igual ao número de colunas da matriz B.

c) colunas da matriz A seja igual ao número de linhas da matriz B.

d) colunas da matriz A seja igual ao número de colunas da matriz B.

e) linhas e colunas da matriz A seja igual ao número de linhas e colunas da matriz B.

(CEBRASPE/PETROBRAS/2023) Considerando uma matriz 𝑨𝟐×𝟑, uma matriz 𝑩𝟑×𝟑 e uma matriz 𝑪𝟑×𝟐,
julgue o item a seguir.

É possível calcular o produto 𝑨× 𝑩, mas não o produto 𝑪× 𝑨.

(CEBRASPE/DATAPREV/2023) Com respeito à matriz 𝑨= (𝟎
𝟐
𝟐
𝟎), julgue o item a seguir.

Denotando-se a matriz transposta de 𝑨 como 𝑨𝑻, é correto afirmar que 𝑨𝑻= 𝑨.

==5460==

(Instituto AOCP/ISS Pinhais/2022) A seguinte matriz, com os elementos 𝒂𝒊𝒋, mostra o número de

faltas que todos os funcionários do setor 𝒊 tiveram durante o mês 𝒋, com janeiro = 1, fevereiro = 2 e
assim por diante.

(

𝟐
𝟑
𝟐
𝟒
𝟎
𝟏
𝟏
𝟎
𝟏
𝟎
𝟒
𝟏
𝟒
𝟏
𝟑
𝟏
𝟐
𝟑

)

Assinale a alternativa que apresenta o setor com menos faltas e o mês com mais faltas contando todos
os setores, respectivamente.

a) Setor 2; Fevereiro.

b) Setor 2; Janeiro.

c) Setor 1; Fevereiro.

d) Setor 3; Junho.

e) Setor 1; Janeiro.

(FUNDATEC/Pref. Flores da Cunha/2022) Analise as seguintes matrizes:

𝑨= [𝟏
𝟎
𝜶
𝟎
𝟏
𝒃] e 𝑩= [

𝟏
𝟎
𝟎
𝟏
𝒃
𝜶

]

Para que a multiplicação de A por B seja a matriz identidade de ordem 2, devemos ter:

a) 𝛼= 𝑏= 1

b) 𝛼= 𝑏= 0

c) 𝛼&gt; 𝑏

d) 𝛼&lt; 𝑏

e) 𝛼= 2𝑏

(IDECAN/CBM MS/2022/Adaptada) Os dados a seguir são estatísticas do ano de 2021 de ocorrências
do corpo de bombeiros do RS, separadas em meses, onde a matriz 𝑨 é formada pelas colunas que
correspondem aos meses e pelas linhas que correspondem aos motivos das ocorrências. Determine o
valor do elemento presenta na posição 𝒂𝟑𝟒.

a) 728

b) 1664

c) 1648

d) 747

e) 1625

(AOCP/SED MS/2022) Considere as seguintes matrizes:

𝑨= (𝟐
𝟏
𝟑
−𝟐) , 𝑩= (𝟐
−𝟏
𝟑
𝟎) 𝐞 𝑪= (𝟑
−𝟏
𝟒
𝟐)

Se

𝑿−𝑨

𝟑+ 𝑩=

𝑪+𝑿

𝟐, então a matriz 𝑿 é tal que a soma dos elementos da diagonal principal é igual a

a) 0

b) 2

c) −2

d) 3

e) −3

(QUADRIX/CRN 4/2022) Sendo 𝑨= (𝟎
𝟏
𝟎
𝟓) e 𝑩= (𝟐
𝟎
𝟐
𝟐), julgue o item.

(𝑨+ 𝑩)(𝑨−𝑩) = 𝑨𝟐−𝑩𝟐

Texto para as próximas questões

Sendo 𝐴= (

1
0
2
0
3
0
2
0
5
) e 𝐵= (

2
0
4
0
6
0
4
0
10
), julgue os itens a seguir.

### (QUADRIX/CRN 4/2022) 𝑨=

𝟏

𝟐𝑩.

### (QUADRIX/CRN 4/2022) 𝑨𝑩= 𝑩𝑨.

(Instituto AOCP/IF RO/2022) Na etapa final de um torneio de futebol, foram classificadas as escolas A,
B, C e D. Nesse torneio, os times jogam no esquema “todos contra todos”, uma única vez. A matriz 𝑴
indica a quantidade de gols que o time da escola 𝒊 marcou no jogo contra o time da escola 𝒋, com {𝒊, 𝒋} ⊂
{𝟏, 𝟐, 𝟑, 𝟒}, sendo que os índices 1, 2, 3 e 4 representam, respectivamente, as escolas A, B, C e D. Na
matriz 𝑴, os elementos 𝒎𝒊𝒋, se 𝒊= 𝒋, estão representados por um traço.

𝑴= (

−

𝟎
𝟐

−
𝟏
−

)

Sabendo-se que a vitória vale 3 pontos, o empate vale 1 ponto e a derrota não pontua, assinale a
alternativa correta.

a) Duas escolas terminaram a competição com a mesma pontuação.

b) A escola A terminou a competição com a menor pontuação.

c) A escola C terminou a competição com a maior pontuação.

d) Houve apenas 2 empates na etapa final do torneio.

e) A escola B supera a pontuação da escola A em 2 pontos.

(FUNDATEC/SBC/2022) Dada a matriz 𝑨= (

𝟏
−𝟐
𝟏
𝟑
−𝟐
−𝟏
𝟒
−𝟏
𝟐

), calcule (𝑨−𝟐𝑰)𝟐:

a) (

1
−2
1
3
−2
−1
4
−1
2
)

b) (

−1
9
1
−19
11
7
−7
−4
5
)

c) (

1
−2
1
3
−4
−1
4
−1
0
)

d) (

3
−2
1
3
0
−1
4
−1
4
)

e) (

6
−2
−1
3
−9
−4
−4
−1
0
)

(VUNESP/Pref. Rio Claro/2022) Sobre a multiplicação de uma matriz 𝑨𝟑×𝟐 por uma matriz 𝑩𝟐×𝟒, nessa
ordem, é correto afirmar que o produto

a) não existe.

b) existe e terá ordem 6 por 8.

c) existe e terá ordem 3 por 4.

d) existe e terá ordem 4 por 3

e) existe e terá ordem 8 por 6.

(VUNESP/PM SP/2022) Uma rede de papelarias é formada por 3 lojas, nomeadas loja 1, loja 2 e loja 3.
Costumeiramente, essas papelarias enviam itens de uma loja para outra e o controle desses envios se dá
por meio de uma matriz 𝑫= (𝒅𝒊𝒋) de ordem 3, em que o valor da entrada 𝒅𝒊𝒋 indica o número de itens
que a loja 𝒊 enviou para a loja 𝒋. Em um determinado dia, a matriz de controle de envios foi 𝑫=

[

𝟎
𝟏𝟓
𝟒
𝟑
𝟎
𝟕
𝟖
𝟎
𝟎

]. Nos 3 dias seguintes, a loja 1 enviou, a cada dia, 11 itens para cada uma das lojas 2 e 3, a

loja 2 enviou, no total desses 3 dias, 15 itens para a loja 3, e nenhum outro envio foi feito. Seja 𝑪 a matriz
que é a soma das matrizes de controle desses 4 dias, seja 𝑪𝒕 a matriz transposta de 𝑪 e seja 𝑺= 𝑪 – 𝑪𝒕.
As entradas 𝒔𝒊𝒋 da matriz 𝑺 assim definida indicam o saldo de itens que a loja 𝒊 tem com a loja 𝒋 no
período considerado e uma entrada negativa nessa matriz indica que a loja recebeu mais itens do que
enviou. Os saldos 𝒔𝟏𝟐, 𝒔𝟐𝟑 e 𝒔𝟑𝟏 são, respectivamente,

a) 15, –7, 23.

b) 23, 12, –7.

c) 45, 22, –29.

d) 29, 45, –23.

e) 22, –12, 15.

(FCC/TRT22/2022) Cada um dos números 1, 2, 3 e 4 foram colocados em um quadriculado 2 × 2. Se a
soma da primeira linha é 3 e a soma da diagonal principal (da esquerda para a direita) é 4, então a soma

da primeira coluna é

a) 5.

b) 4.

c) 6.

d) 7.

e) 8.

### (FGV/MPE SC/2022)

Seja 𝑨= [𝟐
𝟏
𝟑
𝟏].

A soma dos elementos da matriz 𝑨𝟐 é:

a) 10;

b) 12;

c) 15;

d) 23;

e) 30.

(FGV/TCETO/2022) Para um dia de treinamento, os funcionários de uma empresa foram alocados em
três salas: Sala 1, Sala 2 e Sala 3. Tendo sido realizada a primeira parte do treinamento, foi feito um
intervalo, após o qual os funcionários puderam escolher livremente qualquer sala para a segunda parte
do treinamento.

Na matriz 𝑨 abaixo, cada elemento 𝒂𝒊𝒋 representa o número de funcionários que estavam na Sala 𝒊 e
foram para a Sala 𝒋 após o intervalo.

𝑨= [

𝟓
𝟐
𝟕
𝟒
𝟗
𝟔
𝟑
𝟖
𝟏𝟎

]

É correto concluir que:

a) a Sala 1 terminou com 2 funcionários a mais que no início;

b) a Sala 2 terminou com 20 funcionários;

c) a Sala 3 terminou com 3 funcionários a mais que no início;

d) a Sala 1 iniciou com 15 funcionários;

e) uma das salas terminou com o mesmo número de funcionários que tinha no início.

(FCC/IBMEC/2019) Sejam x, y, z e w os números reais que satisfazem a seguinte equação matricial:

(𝒙−𝟐𝒚
𝒛−𝒘
𝟐𝒛−𝒘
𝒙+ 𝒚) = (𝟎
𝟏
𝟏
𝟑)

Então, a soma 𝒙 + 𝒚 + 𝒛 + 𝒘 é igual a

a) −1

b) 0

c) 2

d) 5

e) 3

(FGV/Pref. Salvador/2019) Considere as matrizes 𝑨𝟐×𝟑 e 𝑩𝟐×𝟐.

Sobre essas matrizes é correto afirmar que

a) Existe a soma 𝐴+ 𝐵 e é uma matriz 4 × 5.

b) Existe o produto 𝐴𝐵 e é uma matriz 4 × 6.

c) Existe o produto 𝐵𝐴 e é uma matriz 4 × 6.

d) Não existe o produto 𝐴𝐵.

e) Não existe o produto 𝐵𝐴.

## GABARITO – MULTIBANCAS

### Matrizes

LETRA D
LETRA A
LETRA D
LETRA C
LETRA A

LETRA E
LETRA C
ERRADO
CERTO

LETRA B
LETRA B
LETRA B
LETRA E
ERRADO
CERTO

CERTO
LETRA A
LETRA B
LETRA C
LETRA C
LETRA A
LETRA D
LETRA E
LETRA C
LETRA D

## LISTA DE QUESTÕES – MULTIBANCAS

### Determinantes

(FGV/INPE/2024) As operações matriciais desempenham um papel crucial em várias áreas, incluindo
matemática aplicada, engenharia, ciências naturais e computação. A partir das operações matriciais
pode-se resolver sistemas lineares, realizar o processamento de imagens e sinais, dentre outras
aplicações.

Sobre as operações matriciais, assinale a afirmativa correta.

a) A matriz identidade é uma matriz quadrada que possui todos os elementos iguais a 1.

b) A multiplicação de duas matrizes é comutativa, ou seja, AB = BA para quaisquer matrizes A e B.

c) A transposição de uma matriz consiste em inverter suas linhas com suas colunas.

d) A determinante de uma matriz é sempre um número inteiro.

e) A inversa de uma matriz é a mesma matriz transposta.

(FGV/EPE/2024/ADAPTADA) Considere as matrizes a seguir:

𝑨= [

𝟐
𝟏𝟔
𝟓
𝟏𝟏
𝟒
𝟏𝟐
𝟗
𝟕
𝟑

] 𝑩= [

𝟏
𝟐𝟏
𝟔
𝟗

𝟐
𝟎
𝟏𝟔
𝟓
𝟖
𝟏𝟏
𝟐
𝟗

𝟒
𝟏𝟐
𝟕
𝟑

]

Sobre essas matrizes, analise as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.

( ) As matrizes 𝑨 e 𝑩 são matrizes quadradas de ordem 3 e 4, respectivamente.

( ) As matrizes 𝑨 e 𝑩 não podem ser multiplicadas, uma vez que o número de colunas da primeira matriz
é diferente do número de linhas da segunda.

( ) O determinante da matriz 𝑨 é −156.

As afirmativas são, respectivamente,

a) V – V – V.

b) V – V – F.

c) V – F – V.

d) F – F – V.

e) F – V – V.

(FGV/INPE/2024) Se 𝑨 é uma matriz quadrada de ordem 𝒏 tal que 𝑨𝟐 = 𝒌𝑨 , sendo 𝒌 um número real
positivo. Sabendo que o determinante de 𝑨, 𝒅𝒆𝒕(𝑨), é diferente de zero, então,

a) 𝑑𝑒𝑡(𝐴) = 𝑘

b) 𝑑𝑒𝑡(𝐴) = 1

c) 𝑑𝑒𝑡(𝐴) = 0

d) 𝑑𝑒𝑡(𝐴) = 𝑘𝑛

e) 𝑑𝑒𝑡(𝐴) = −𝑘𝑛

(CEBRASPE/PETROBRAS/2024) Uma distribuidora comprou 𝒙 unidades de barris de petróleo, por R$
415 o barril, e 𝒚 unidades de m3 de gás, por R$ 2 o m3, pagando um valor total de R$ 23.695.000. A
quantidade de unidades dos dois produtos comprados totalizou 490.000 unidades.

Acerca dessa situação hipotética, julgue o item a seguir.

A inversa da matriz dos coeficientes 𝑪= [𝟒𝟏𝟓
𝟐
𝟏
𝟏] é dada por 𝑪−𝟏= [ 𝟏
−𝟐
−𝟏
𝟒𝟏𝟓].

(CEBRASPE/PETROBRAS/2023) Considerando uma matriz 𝑨𝟐×𝟑, uma matriz 𝑩𝟑×𝟑 e uma matriz 𝑪𝟑×𝟐,
julgue o item a seguir.

É possível calcular os determinantes das matrizes 𝑨 e 𝑪, porém não o da matriz 𝑩.

(FUNDATEC/Pref. Cachoeira Sul/2022) Analise a matriz abaixo:

[𝟏
𝒂
𝟎
𝟏]

É correto afirmar que seu determinante vale:

a) 𝑎

b) 1/𝑎

c) 1

d) 2 + 𝑎

e) 0

(Instituto AOCP/PM ES/2022) Considerando que os determinantes das matrizes A e B são iguais, em

que

𝑨= (𝒙
𝟕
𝟒
𝒙) e 𝑩= (𝟐
−𝟏
𝟒
𝟐)

assinale a alternativa que apresenta todos os valores de 𝒙 que verificam essa igualdade.

a) {2}

b) {6}

c) {−2; 2}

d) {−6; 6}

e) {2; 6}

(FGV/MPE SC/2022) Seja A uma matriz 4 x 4 cujo determinante é igual a 2.

O determinante da matriz 3A é igual a:

a) 6;

b) 12;

c) 24;

d) 64;

e) 162.

(Instituto AOCP/PM ES/2022) Sabendo que as matrizes 𝑨 e 𝑩 têm ordem 𝟑 e são tais que 𝒅𝒆𝒕(𝑨) = 𝟐 e
𝒅𝒆𝒕(𝑩) = 𝟑, assinale a alternativa que apresenta o valor de 𝒅𝒆𝒕(𝟑𝑨× 𝟐𝑩)

a) 62

b) 63

c) 64

d) 65

e) 66

Texto para as próximas questões

Sendo 𝐴= (0
1
0
5) e 𝐵= (2
0
2
2), julgue os itens a seguir.

(QUADRIX/CRN 4/2022) A matriz A é inversível.

(QUADRIX/CRN 4/2022) Se 𝑩𝑿= 𝑨, então 𝑿= (

𝟎
𝟐
𝟎

𝟏

𝟐

)

(QUADRIX/CRN 4/2022) 𝒅𝒆𝒕 𝐁𝟓&gt; 𝟏. 𝟎𝟎𝟎

(Instituto AOCP/IF RO/2022) Se 𝑨, 𝑩 e 𝑪 são matrizes de ordem 𝟑, 𝑨× 𝑪= 𝑩−𝟏, 𝑪= 𝟒𝑨 e 𝐝𝐞𝐭 𝑩=
𝟏

𝟏𝟔, então 𝐝𝐞𝐭 𝑨 é igual a:

a) −

2 ou

b) −

4 ou

c) −4 ou 4.

==5460==

d) −2 ou 2.

e) −1 ou 1.

(FUNDATEC/Pref. Viamão/2022) Considere uma matriz 𝑨 quadrada de ordem 𝟓 com determinante
𝐝𝐞𝐭(𝑨) ≠𝟎. Se multiplicarmos uma linha de 𝑨 por 𝟐, então o determinante passa a ser:

a) 25det(𝐴)

b) 2det(𝐴)

c) 5det(𝐴)

d) 10det(𝐴)

e)

5

2 det(𝐴)

(FGV/MPE SC/2022) Considere as matrizes 𝑨= [

𝒂
𝒃
𝒄
𝒅
𝒆
𝒇
𝒈
𝒉
𝒌

] e 𝑩= [

𝟐𝒂
𝒄
𝟑𝒃
𝟐𝒅
𝒇
𝟑𝒆
𝟐𝒈
𝒌
𝟑𝒉

].

Sendo 𝒅𝒆𝒕(𝑨) e 𝒅𝒆𝒕(𝑩) os determinantes das matrizes 𝑨 e 𝑩, respectivamente, tem-se que:

a) 𝑑𝑒𝑡(𝐴) = 6 × 𝑑𝑒𝑡(𝐵);

b) 𝑑𝑒𝑡(𝐴) = −6 × 𝑑𝑒𝑡(𝐵);

c) 𝑑𝑒𝑡(𝐵) = 6 × 𝑑𝑒𝑡(𝐴);

d) 𝑑𝑒𝑡(𝐵) = −6 × 𝑑𝑒𝑡(𝐴);

e) 𝑑𝑒𝑡(𝐴) = 𝑑𝑒𝑡(𝐵).

(FEPESE/Pref. B Camboriú/2022) O valor de 𝒂 para que o determinante

|

𝟏
−𝟑
𝟐
−𝟓

𝟎𝟓
𝟎𝟗
𝟎𝟒
𝟎𝟕
𝟏
−𝟏
𝒂
−𝟏

𝟎𝟏
𝟎𝟐
𝟏𝟎
𝟏𝟖

|

seja igual a zero é:

a) Maior que 11.

b) Maior que 8 e menor que 11.

c) Maior que 2 e menor que 5.

d) Maior que 5 e menor que 8.

e) Menor que 2.

(IDECAN/Pref. Campina Gde/2021) Seja 𝑨= (

) e seja 𝑨−𝟏= (

−𝟏𝟗
−𝟏
−𝟓

). Determine o

valor de 𝐝𝐞𝐭 (𝑨. 𝑨−𝟏) e assinale a alternativa correta.

a) 0

b) 1

c) −1

d) 2

(Instituto Consulplan/SEED PR/2021) Considere a seguinte equação matricial: 𝟐𝑨−

𝟏

𝟑𝑿= 𝑩 em que

as matrizes 𝑨 e 𝑩 são conhecidas. Se 𝑨= [

−𝟐
−𝟑
𝟏

𝟑
−𝟏] e 𝑩= [𝟎
𝟏
𝟒
𝟑], o determinante da matriz 𝑿 é um

número:

a) Inteiro positivo.

b) Inteiro negativo.

c) Não inteiro positivo.

d) Não inteiro negativo.

(VUNESP/Pref. Ilhabela/2020) Considere duas matrizes quadradas de mesma ordem, 𝑨 e 𝑩. Se
𝐝𝐞𝐭(𝑴) é o determinante de uma matriz e 𝐭𝐫(𝑴) é o traço de uma matriz, temos que:

a) det(𝐴𝐵) = det(𝐴) + det(𝐵)

b) tr(𝐴𝐵) = tr(𝐴) + tr(𝐵)

c) tr(𝐴+ 𝐵) = tr(𝐴) · tr(𝐵)

d) tr(𝐴𝐵) = tr(𝐵𝐴)

e) det(𝐴+ 𝐵) = det(𝐴) + det(𝐵)

(CEBRASPE/Pref. São Cristóvão/2019) Para a matriz 𝑨= [

𝟏
𝟎
𝟏
𝟏

−𝟏
𝟏
𝟏
𝟏
𝟎
𝟎
𝟏
𝟎

𝟏
𝟏
𝟎
𝟏

], tem-se que 𝒅𝒆𝒕(𝑨) = −𝟏

e, consequentemente, 𝑨 é uma matriz inversível.

(CESGRANRIO/PETROBRAS/2018) Sejam 𝑨 uma matriz quadrada de ordem 𝟐 e 𝑩 uma matriz
quadrada de ordem 𝟑, tais que 𝐝𝐞𝐭𝑨 . 𝐝𝐞𝐭𝑩 = 𝟏.

O valor de 𝐝𝐞𝐭(𝟑𝑨) . 𝐝𝐞𝐭(𝟐𝑩) é

a) 5

b) 6

c) 36

d) 72

e) 108

(CESGRANRIO/TRANSPETRO/2018) Sejam 𝑨 e 𝑩 duas matrizes quadradas 𝟐× 𝟐, tal que 𝑨=

[ 𝟐
𝟒
−𝟏
𝟔], e 𝑨. 𝑩= 𝑰 , onde 𝑰 é a matriz identidade 𝟐× 𝟐. Assim, a soma dos elementos da matriz 𝑩 é

igual a

a) 5/16

b) 7/16

c) 9/16

d) 11/16

e) 13/16

(CEBRASPE/IFF/2018) Considere que k seja um número real e que o determinante da matriz 𝑩=

[𝟑
𝒌
𝟑
𝟗] seja igual a 27. Nesse caso, se 𝑨= [𝟑
−𝟏
𝟗

#### 𝟔] então o determinante da matriz B − A, será igual a:

a) 30.

b) 0.

c) 3.

d) 6.

e) 10.

(CEBRASPE/SEDUC AL/2018) Julgue o item que se seguem, relativos a matrizes e sistemas lineares.

Se 𝒂 é um número real e se o determinante da matriz 𝑷= [𝒂
𝟏
𝟎
𝒂−𝟏] + 𝟐[ 𝟎
−𝟏
−𝟏
𝟏] for igual a zero,

então 𝒂 = − 𝟐 ou 𝒂 = 𝟏.

(CEBRASPE/SEDUC AL/2018) Julgue o item que se seguem, relativos a matrizes e sistemas lineares.

Se P for uma matriz simétrica, então P será inversível.

## GABARITO – MULTIBANCAS

### Determinantes

LETRA C
LETRA B
LETRA D
ERRADO
ERRADO

LETRA C
LETRA D
LETRA E
LETRA C

ERRADO
ERRADO
CERTO
LETRA A
LETRA B
LETRA D

LETRA C
LETRA B
LETRA B
LETRA D
CERTO
LETRA D
LETRA A
LETRA D
CERTO
ERRADO
