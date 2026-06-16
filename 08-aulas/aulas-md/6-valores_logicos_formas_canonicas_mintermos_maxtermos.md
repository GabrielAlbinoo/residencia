# Aula Detalhada — Valores Lógicos, Mintermos, Maxtermos, SOP e POS

**Tema do dia:** Valores lógicos e formas canônicas  
**Data do cronograma revisado:** 25/05 — Segunda-feira  
**Aula na sequência:** 6  
**Objetivo:** distinguir `H`, `L`, `Z` e `don't care`, representar funções a partir da tabela-verdade e dominar mintermos, maxtermos, soma de produtos (`SOP`) e produto de somas (`POS`).

---

## 1. Onde esta aula entra no estudo?

Nas aulas anteriores, você aprendeu a:

```text
ler portas lógicas
montar tabelas-verdade
simplificar expressões booleanas
aplicar DeMorgan
implementar funções com NAND ou NOR
```

Agora vamos responder outra pergunta essencial:

```text
Se eu recebo apenas a tabela-verdade desejada,
como escrevo uma expressão lógica que realiza essa função?
```

Esse caminho é fundamental em projeto digital:

```text
especificação → tabela-verdade → expressão booleana → simplificação → circuito
```

A aula também introduz valores que aparecem em circuitos reais e em minimização:

```text
H = nível lógico alto
L = nível lógico baixo
Z = alta impedância
X = don't care, quando usado em uma especificação de minimização
```

O conteúdo de hoje prepara diretamente a próxima etapa:

```text
mapas de Karnaugh
```

Karnaugh não começa do nada. Ele organiza os mintermos, maxtermos e `don't cares` que você aprenderá aqui.

---

# 2. Revisão rápida da notação booleana

Nesta aula:

| Notação | Leitura | Significado |
|---|---|---|
| `A'` | NOT A | complemento de `A` |
| `AB` ou `A·B` | A AND B | produto lógico |
| `A+B` | A OR B | soma lógica |
| `F` ou `Y` | saída | valor produzido pela função |

A ordem das operações continua sendo:

```text
1. NOT
2. AND
3. OR
```

Exemplo:

```text
F = A'B + BC'
```

significa:

```text
F = ((NOT A) AND B) OR (B AND (NOT C))
```

Uma variável sem apóstrofo vale diretamente o que está na entrada:

```text
A = 1  →  A vale 1
A = 0  →  A vale 0
```

Uma variável complementada inverte:

```text
A = 1  →  A' vale 0
A = 0  →  A' vale 1
```

Essa observação será a chave para montar mintermos e maxtermos.

---

# 3. Do bit ideal ao sinal físico

Em álgebra booleana, trabalhamos com:

```text
0 e 1
```

Em um circuito real, esses valores são representados por níveis de tensão. Por isso, é comum encontrar:

```text
L = Low  = nível lógico baixo
H = High = nível lógico alto
```

## 3.1 `L` e `H`

| Símbolo | Nome | Valor lógico ideal | Ideia física |
|---|---|---:|---|
| `L` | Low | `0` | tensão na faixa reconhecida como baixa |
| `H` | High | `1` | tensão na faixa reconhecida como alta |

Em exercícios puramente lógicos, normalmente podemos ler:

```text
L como 0
H como 1
```

Exemplo:

| A | B | F = AB |
|---|---|---|
| `L` | `L` | `L` |
| `L` | `H` | `L` |
| `H` | `L` | `L` |
| `H` | `H` | `H` |

Essa tabela é a mesma AND conhecida:

| A | B | F = AB |
|---|---|---|
| `0` | `0` | `0` |
| `0` | `1` | `0` |
| `1` | `0` | `0` |
| `1` | `1` | `1` |

## 3.2 Atenção: tensão exata depende da tecnologia

`H` não significa obrigatoriamente uma única tensão fixa em todos os circuitos.

Dependendo da família lógica e da alimentação, um `H` pode estar associado, por exemplo, a faixas diferentes de tensão. Para esta disciplina, o ponto essencial é:

```text
H e L descrevem níveis reconhecidos logicamente,
não uma conta booleana nova.
```

---

# 4. Alta impedância: o valor `Z`

Além de dirigir uma linha para `0` ou para `1`, uma saída digital pode ser colocada em um estado no qual ela praticamente deixa de dirigir o fio.

Esse estado é representado por:

```text
Z = alta impedância
```

Uma boa imagem mental é:

```text
0 = a saída força nível baixo
1 = a saída força nível alto
Z = a saída se desconecta eletricamente da linha
```

## 4.1 `Z` não é zero

Este é um ponto importante:

```text
Z ≠ 0
```

Quando uma saída está em `Z`, ela não está dizendo que o fio vale `0`. Ela está dizendo:

```text
eu não estou impondo nenhum nível lógico neste fio
```

O nível observado no fio pode vir de outro componente habilitado ou de um resistor de pull-up/pull-down.

---

# 5. Buffer tri-state

O componente clássico para entender `Z` é o **buffer tri-state**.

Ele tem:

```text
entrada de dados: D
entrada de habilitação: EN
saída: Y
```

Quando está habilitado, transmite o dado. Quando está desabilitado, libera a linha.

Para um buffer com habilitação ativa em nível alto:

| EN | D | Y |
|---:|---:|---|
| `0` | `0` | `Z` |
| `0` | `1` | `Z` |
| `1` | `0` | `0` |
| `1` | `1` | `1` |

Em forma textual:

```text
EN = 1  →  Y = D
EN = 0  →  Y = Z
```

## 5.1 Por que isso é útil?

Imagine vários dispositivos compartilhando o mesmo barramento:

```text
CPU, memória e periféricos usando linhas comuns de dados
```

Em um instante, apenas um dispositivo deve dirigir o barramento. Os outros ficam em:

```text
Z
```

Exemplo correto:

| Saída A | Saída B | Linha compartilhada |
|---|---|---|
| `1` | `Z` | `1` |
| `Z` | `0` | `0` |
| `Z` | `Z` | sem driver ativo |

## 5.2 Contenção de barramento

Se duas saídas habilitadas tentarem impor valores contrários ao mesmo tempo:

| Saída A | Saída B | Situação |
|---|---|---|
| `1` | `0` | contenção, condição incorreta |

Isso não é uma operação booleana válida para calcular como `0` ou `1`. É um problema elétrico:

```text
um driver tenta puxar a linha para alto
enquanto outro tenta puxá-la para baixo
```

Em projeto digital, deve-se impedir essa situação por controle de habilitação.

---

# 6. `Don't care`: valor indiferente

Em algumas especificações, há combinações de entrada que:

```text
1. nunca ocorrerão no uso válido do circuito; ou
2. podem produzir 0 ou 1 sem afetar o comportamento desejado.
```

Nessas combinações, a saída é marcada como:

```text
don't care
```

Notações comuns:

```text
X
d
-
```

Nesta aula, usaremos principalmente:

```text
X = don't care
```

## 6.1 O que o `don't care` permite?

Se uma linha da tabela está marcada com `X`, durante a simplificação podemos escolher:

```text
X como 0
ou
X como 1
```

Escolhemos o valor que levar à expressão mais simples.

Isso não quer dizer que a saída física ficará misteriosa. Quer dizer que a especificação não exige um resultado particular naquela combinação de entradas.

## 6.2 Exemplo: entrada inválida

O código BCD usa quatro bits para representar apenas os dígitos decimais `0` a `9`:

```text
0000 a 1001  → válidos
1010 a 1111  → não representam dígitos BCD válidos
```

Ao projetar um circuito cuja entrada será sempre um dígito BCD válido, as seis combinações inválidas podem ser marcadas como `don't care`, caso o problema permita.

Isso costuma reduzir o número de portas do circuito.

---

# 7. Não confunda `Z` com `don't care`

`Z` e `don't care` aparecem próximos em tabelas e diagramas, mas significam coisas completamente diferentes.

| Símbolo | O que descreve? | Significado |
|---|---|---|
| `H` | sinal lógico | nível alto, interpretado como `1` |
| `L` | sinal lógico | nível baixo, interpretado como `0` |
| `Z` | estado elétrico de uma saída | saída em alta impedância, sem dirigir a linha |
| `X` / `don't care` | liberdade na especificação | naquela combinação, pode-se escolher `0` ou `1` para simplificar |

Resumo:

```text
Z é sobre conexão elétrica da saída.
Don't care é sobre liberdade de comportamento em determinadas entradas.
```

## 7.1 Outra atenção sobre a letra `X`

Em mapas de Karnaugh e tabelas de especificação, `X` frequentemente significa:

```text
don't care
```

Em simuladores digitais ou linguagens de descrição de hardware, `X` também pode indicar:

```text
valor desconhecido
```

Um valor desconhecido por erro ou falta de inicialização não deve ser automaticamente aproveitado como `don't care`. O contexto da questão é que determina a leitura correta.

---

# 8. Tabela-verdade como especificação de uma função

Uma função lógica de `n` entradas possui:

```text
2^n combinações possíveis de entrada
```

| Número de entradas | Quantidade de linhas |
|---:|---:|
| `1` | `2` |
| `2` | `4` |
| `3` | `8` |
| `4` | `16` |

Para três variáveis `A`, `B` e `C`, escrevemos normalmente as linhas em ordem binária:

| Índice decimal | A | B | C |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` |
| `1` | `0` | `0` | `1` |
| `2` | `0` | `1` | `0` |
| `3` | `0` | `1` | `1` |
| `4` | `1` | `0` | `0` |
| `5` | `1` | `0` | `1` |
| `6` | `1` | `1` | `0` |
| `7` | `1` | `1` | `1` |

Observe:

```text
ABC = número binário da linha
```

Exemplos:

```text
A B C = 0 1 1  →  011₂ = 3₁₀
A B C = 1 0 1  →  101₂ = 5₁₀
```

Essa numeração será usada em:

```text
m3, m5, M3, M5, Σm(...) e ΠM(...)
```

---

# 9. Literais, produtos e somas

Antes de definir mintermos e maxtermos, separe três conceitos:

## 9.1 Literal

Um literal é uma variável ou seu complemento:

```text
A
A'
B
B'
```

## 9.2 Termo produto

É uma operação AND entre literais:

```text
A'BC
AB'
ABC'D
```

## 9.3 Termo soma

É uma operação OR entre literais:

```text
(A+B'+C)
(A'+B)
(A+B+C'+D)
```

Mintermos são termos produto especiais.  
Maxtermos são termos soma especiais.

---

# 10. Mintermo

Um **mintermo** é um termo produto que:

```text
1. contém todas as variáveis da função exatamente uma vez;
2. vale 1 em exatamente uma linha da tabela-verdade.
```

Para três entradas `A`, `B` e `C`, exemplos de mintermos são:

```text
A'B'C'
A'BC
ABC'
ABC
```

Já estes não são mintermos de uma função de três variáveis:

```text
AB       → falta C
A'BBC    → B aparece mais de uma vez
A+B+C    → é soma, não produto
```

---

# 11. Como escrever o mintermo de uma linha

Para criar o mintermo que vale `1` em uma linha específica:

```text
bit 0 → variável complementada
bit 1 → variável direta
```

Por quê?

O produto AND só vale `1` se cada literal valer `1`.

Se a linha exige `A=0`, usamos:

```text
A'
```

pois `A'=1` quando `A=0`.

Se a linha exige `B=1`, usamos:

```text
B
```

pois `B=1` na própria linha.

## 11.1 Exemplo

Linha:

| A | B | C |
|---:|---:|---:|
| `0` | `1` | `0` |

Montagem:

```text
A = 0 → A'
B = 1 → B
C = 0 → C'
```

Logo:

```text
m2 = A'BC'
```

Esse termo vale `1` somente na linha `010₂ = 2`.

---

# 12. Tabela de mintermos para três variáveis

| Índice | A | B | C | Mintermo |
|---:|---:|---:|---:|---|
| `0` | `0` | `0` | `0` | `m0 = A'B'C'` |
| `1` | `0` | `0` | `1` | `m1 = A'B'C` |
| `2` | `0` | `1` | `0` | `m2 = A'BC'` |
| `3` | `0` | `1` | `1` | `m3 = A'BC` |
| `4` | `1` | `0` | `0` | `m4 = AB'C'` |
| `5` | `1` | `0` | `1` | `m5 = AB'C` |
| `6` | `1` | `1` | `0` | `m6 = ABC'` |
| `7` | `1` | `1` | `1` | `m7 = ABC` |

Regra para memorizar:

```text
Mintermo seleciona a linha em que F deve valer 1.
No mintermo: 0 recebe apóstrofo; 1 fica direto.
```

---

# 13. Soma de produtos: SOP

`SOP` significa:

```text
Sum of Products = Soma de Produtos
```

Uma expressão em `SOP` tem a estrutura:

```text
produto + produto + produto + ...
```

Exemplo:

```text
F = A'B'C + A'BC' + ABC
```

Quando cada produto é um mintermo completo, temos a:

```text
SOP canônica
```

## 13.1 Como sair da tabela para a SOP canônica

Passo a passo:

```text
1. Localize todas as linhas em que F=1.
2. Escreva o mintermo correspondente a cada linha.
3. Faça OR entre esses mintermos.
```

Por que funciona?

Cada mintermo acende exatamente uma linha desejada. A OR reúne todas as linhas em que a função deve ser `1`.

---

# 14. Notação sigma de mintermos

Em vez de escrever todos os termos, podemos indicar os índices das linhas em que a função vale `1`:

```text
F(A,B,C) = Σm(1,2,6)
```

Leia:

```text
F é a soma dos mintermos 1, 2 e 6.
```

Expandindo:

```text
F = m1 + m2 + m6
  = A'B'C + A'BC' + ABC'
```

O símbolo:

```text
Σ
```

lembra que estamos fazendo uma soma lógica, isto é, OR entre mintermos.

---

# 15. Exemplo de SOP a partir da tabela

Considere:

| Índice | A | B | C | F |
|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `0` |
| `1` | `0` | `0` | `1` | `1` |
| `2` | `0` | `1` | `0` | `1` |
| `3` | `0` | `1` | `1` | `0` |
| `4` | `1` | `0` | `0` | `1` |
| `5` | `1` | `0` | `1` | `0` |
| `6` | `1` | `1` | `0` | `1` |
| `7` | `1` | `1` | `1` | `1` |

As linhas com `F=1` são:

```text
1, 2, 4, 6 e 7
```

Logo:

```text
F(A,B,C) = Σm(1,2,4,6,7)
```

Expandindo:

```text
m1 = A'B'C
m2 = A'BC'
m4 = AB'C'
m6 = ABC'
m7 = ABC
```

Então:

```text
F = A'B'C + A'BC' + AB'C' + ABC' + ABC
```

Essa expressão está correta mesmo que ainda não seja mínima. A simplificação virá com álgebra ou Karnaugh.

---

# 16. Maxtermo

Um **maxtermo** é um termo soma que:

```text
1. contém todas as variáveis da função exatamente uma vez;
2. vale 0 em exatamente uma linha da tabela-verdade.
```

Para três entradas `A`, `B` e `C`, exemplos de maxtermos são:

```text
(A+B+C)
(A+B'+C')
(A'+B+C')
(A'+B'+C')
```

Já estes não são maxtermos de uma função de três variáveis:

```text
(A+B)       → falta C
(A+B+BC)    → não há uma ocorrência simples de cada variável
A'BC        → é produto, não soma
```

---

# 17. Como escrever o maxtermo de uma linha

Para criar o maxtermo que vale `0` em uma linha específica:

```text
bit 0 → variável direta
bit 1 → variável complementada
```

Essa regra parece invertida em relação ao mintermo. E está mesmo invertida.

Por quê?

Uma soma OR só vale `0` quando todos os seus literais valem `0`.

Se a linha exige `A=0`, usamos:

```text
A
```

pois `A=0` naquela linha.

Se a linha exige `B=1`, usamos:

```text
B'
```

pois `B'=0` quando `B=1`.

## 17.1 Exemplo

Linha:

| A | B | C |
|---:|---:|---:|
| `0` | `1` | `0` |

Montagem:

```text
A = 0 → A
B = 1 → B'
C = 0 → C
```

Logo:

```text
M2 = (A+B'+C)
```

Esse termo vale `0` somente na linha `010₂ = 2`.

---

# 18. Tabela de maxtermos para três variáveis

| Índice | A | B | C | Maxtermo |
|---:|---:|---:|---:|---|
| `0` | `0` | `0` | `0` | `M0 = (A+B+C)` |
| `1` | `0` | `0` | `1` | `M1 = (A+B+C')` |
| `2` | `0` | `1` | `0` | `M2 = (A+B'+C)` |
| `3` | `0` | `1` | `1` | `M3 = (A+B'+C')` |
| `4` | `1` | `0` | `0` | `M4 = (A'+B+C)` |
| `5` | `1` | `0` | `1` | `M5 = (A'+B+C')` |
| `6` | `1` | `1` | `0` | `M6 = (A'+B'+C)` |
| `7` | `1` | `1` | `1` | `M7 = (A'+B'+C')` |

Regra para memorizar:

```text
Maxtermo seleciona a linha em que F deve valer 0.
No maxtermo: 0 fica direto; 1 recebe apóstrofo.
```

---

# 19. Produto de somas: POS

`POS` significa:

```text
Product of Sums = Produto de Somas
```

Uma expressão em `POS` tem a estrutura:

```text
(soma)(soma)(soma)...
```

Exemplo:

```text
F = (A+B+C)(A+B'+C')(A'+B+C')
```

Quando cada soma é um maxtermo completo, temos a:

```text
POS canônica
```

## 19.1 Como sair da tabela para a POS canônica

Passo a passo:

```text
1. Localize todas as linhas em que F=0.
2. Escreva o maxtermo correspondente a cada linha.
3. Faça AND entre esses maxtermos.
```

Por que funciona?

Cada maxtermo zera exatamente uma linha desejada. O produto garante que a função seja `0` em qualquer linha selecionada.

---

# 20. Notação pi de maxtermos

Em vez de escrever todos os fatores, podemos indicar os índices das linhas em que a função vale `0`:

```text
F(A,B,C) = ΠM(0,3,5)
```

Leia:

```text
F é o produto dos maxtermos 0, 3 e 5.
```

Expandindo:

```text
M0 = (A+B+C)
M3 = (A+B'+C')
M5 = (A'+B+C')
```

Logo:

```text
F = (A+B+C)(A+B'+C')(A'+B+C')
```

O símbolo:

```text
Π
```

lembra que estamos fazendo um produto lógico, isto é, AND entre maxtermos.

---

# 21. Exemplo de POS a partir da tabela

Retome a tabela do exemplo anterior:

| Índice | A | B | C | F |
|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `0` |
| `1` | `0` | `0` | `1` | `1` |
| `2` | `0` | `1` | `0` | `1` |
| `3` | `0` | `1` | `1` | `0` |
| `4` | `1` | `0` | `0` | `1` |
| `5` | `1` | `0` | `1` | `0` |
| `6` | `1` | `1` | `0` | `1` |
| `7` | `1` | `1` | `1` | `1` |

As linhas com `F=0` são:

```text
0, 3 e 5
```

Logo:

```text
F(A,B,C) = ΠM(0,3,5)
```

Expandindo:

```text
M0 = (A+B+C)
M3 = (A+B'+C')
M5 = (A'+B+C')
```

Então:

```text
F = (A+B+C)(A+B'+C')(A'+B+C')
```

Essa POS e a SOP do exemplo anterior representam exatamente a mesma função:

```text
F = Σm(1,2,4,6,7)
  = ΠM(0,3,5)
```

---

# 22. SOP e POS descrevem a mesma tabela por lados opostos

Uma função sem `don't cares` possui duas listas complementares:

```text
SOP canônica lista as linhas de saída 1.
POS canônica lista as linhas de saída 0.
```

No exemplo:

```text
linhas existentes: 0,1,2,3,4,5,6,7
saída 1:          1,2,4,6,7
saída 0:          0,3,5
```

Portanto:

```text
F = Σm(1,2,4,6,7) = ΠM(0,3,5)
```

## 22.1 Qual forma escolher?

Sem simplificação, uma regra prática é:

| Situação na tabela | Forma canônica provavelmente menor |
|---|---|
| Poucas linhas com `1` | `SOP`, pois terá poucos mintermos |
| Poucas linhas com `0` | `POS`, pois terá poucos maxtermos |

Depois de simplificar, essa comparação pode mudar. Mapas de Karnaugh ajudarão a encontrar a forma realmente conveniente.

## 22.2 Ligação com NAND e NOR

Da aula anterior:

```text
SOP costuma favorecer implementação NAND–NAND.
POS costuma favorecer implementação NOR–NOR.
```

Agora você consegue obter essas formas diretamente de uma tabela-verdade.

---

# 23. Regra visual: mintermo versus maxtermo

Para uma linha `ABC = 101`:

| Tipo | O que deve acontecer nessa linha? | Regra de apóstrofo | Termo |
|---|---|---|---|
| Mintermo `m5` | valer `1` | `0` complementa | `AB'C` |
| Maxtermo `M5` | valer `0` | `1` complementa | `(A'+B+C')` |

Use esta frase:

```text
MINtermo procura os 1s.
MAXtermo procura os 0s.
```

E esta tabela:

| Bit da linha | No mintermo | No maxtermo |
|---:|---|---|
| `0` | complementado | direto |
| `1` | direto | complementado |

---

# 24. Quatro variáveis

A lógica não muda quando acrescentamos variáveis.

Para `A`, `B`, `C` e `D`, existem:

```text
2^4 = 16 linhas
```

Os índices vão de:

```text
0 a 15
```

## 24.1 Exemplo de mintermo

Linha:

```text
ABCD = 1011₂ = 11₁₀
```

No mintermo, `0` recebe apóstrofo:

```text
m11 = AB'CD
```

## 24.2 Exemplo de maxtermo

Na mesma linha, para criar um termo que valha `0`, `1` recebe apóstrofo:

```text
M11 = (A'+B+C'+D')
```

## 24.3 Notação compacta

Uma função de quatro entradas poderia ser dada por:

```text
F(A,B,C,D) = Σm(0,2,5,7,8,10,13,15)
```

ou por seus zeros:

```text
F(A,B,C,D) = ΠM(1,3,4,6,9,11,12,14)
```

---

# 25. `Don't care` nas formas canônicas

Quando uma função possui linhas indiferentes, separamos três conjuntos:

```text
ON-set:  linhas em que F deve ser 1
OFF-set: linhas em que F deve ser 0
DC-set:  linhas don't care, indicadas por X
```

Exemplo:

| Índice | A | B | C | F |
|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `1` |
| `1` | `0` | `0` | `1` | `0` |
| `2` | `0` | `1` | `0` | `X` |
| `3` | `0` | `1` | `1` | `1` |
| `4` | `1` | `0` | `0` | `0` |
| `5` | `1` | `0` | `1` | `X` |
| `6` | `1` | `1` | `0` | `1` |
| `7` | `1` | `1` | `1` | `0` |

Podemos registrar:

```text
F(A,B,C) = Σm(0,3,6), d(2,5)
```

ou, observando os zeros obrigatórios:

```text
F(A,B,C) = ΠM(1,4,7), d(2,5)
```

Importante:

```text
os índices don't care não entram automaticamente na soma de mintermos
nem automaticamente no produto de maxtermos
```

Eles ficam disponíveis para a etapa de minimização:

```text
use um X como 0 ou como 1 somente se isso simplificar a função
```

---

# 26. Da expressão para a tabela

Embora o foco do cronograma seja ir da tabela para a expressão, também é preciso conferir o caminho inverso.

Considere:

```text
F(A,B,C) = Σm(1,4,7)
```

Sem efetuar qualquer conta, já sabemos:

| Índice | F |
|---:|---:|
| `0` | `0` |
| `1` | `1` |
| `2` | `0` |
| `3` | `0` |
| `4` | `1` |
| `5` | `0` |
| `6` | `0` |
| `7` | `1` |

Agora considere:

```text
G(A,B,C) = ΠM(2,5,6)
```

Sem efetuar qualquer conta, já sabemos:

| Índice | G |
|---:|---:|
| `0` | `1` |
| `1` | `1` |
| `2` | `0` |
| `3` | `1` |
| `4` | `1` |
| `5` | `0` |
| `6` | `0` |
| `7` | `1` |

Essa leitura rápida será útil em questões de prova.

---

# 27. Exemplo completo resolvido: da especificação às duas formas

Um circuito com entradas `A`, `B` e `C` deve produzir `1` quando:

```text
há exatamente uma entrada em 1
ou
todas as três entradas estão em 1
```

## 27.1 Monte a tabela

| Índice | A | B | C | Número de 1s | F |
|---:|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `0` | `0` |
| `1` | `0` | `0` | `1` | `1` | `1` |
| `2` | `0` | `1` | `0` | `1` | `1` |
| `3` | `0` | `1` | `1` | `2` | `0` |
| `4` | `1` | `0` | `0` | `1` | `1` |
| `5` | `1` | `0` | `1` | `2` | `0` |
| `6` | `1` | `1` | `0` | `2` | `0` |
| `7` | `1` | `1` | `1` | `3` | `1` |

## 27.2 SOP canônica

As saídas `1` estão nos índices:

```text
1, 2, 4 e 7
```

Portanto:

```text
F = Σm(1,2,4,7)
```

Expandindo:

```text
F = A'B'C + A'BC' + AB'C' + ABC
```

## 27.3 POS canônica

As saídas `0` estão nos índices:

```text
0, 3, 5 e 6
```

Portanto:

```text
F = ΠM(0,3,5,6)
```

Expandindo:

```text
F = (A+B+C)(A+B'+C')(A'+B+C')(A'+B'+C)
```

## 27.4 Conferência

As duas descrições indicam a mesma tabela:

```text
F = Σm(1,2,4,7) = ΠM(0,3,5,6)
```

Na próxima aula, você colocará esses `1`s ou `0`s em um mapa de Karnaugh para verificar se há agrupamentos que reduzam a expressão.

---

# 28. Erros comuns em prova

## Erro 1: achar que `Z` equivale a `0`

Errado:

```text
Z = 0
```

Correto:

```text
Z indica que a saída não está dirigindo a linha.
```

## Erro 2: usar `don't care` como se fosse obrigatoriamente `1`

Errado:

```text
Toda linha X deve entrar em Σm.
```

Correto:

```text
Uma linha X pode ser usada como 0 ou 1 se ajudar na minimização.
```

## Erro 3: aplicar a regra de mintermo ao maxtermo

Para a linha:

```text
ABC = 010
```

O mintermo é:

```text
m2 = A'BC'
```

O maxtermo é:

```text
M2 = (A+B'+C)
```

As regras de apóstrofo são inversas.

## Erro 4: buscar zeros para montar SOP

Correto:

```text
SOP canônica → procurar F=1 → escrever mintermos
POS canônica → procurar F=0 → escrever maxtermos
```

## Erro 5: esquecer uma variável em uma forma canônica

Uma expressão como:

```text
AB + C
```

pode ser uma função válida e até simplificada, mas não é uma SOP canônica de três variáveis, pois seus termos não contêm todas as variáveis.

## Erro 6: achar que a forma canônica já é mínima

Forma canônica significa:

```text
forma sistemática obtida diretamente da tabela
```

Não significa:

```text
forma com o menor número de portas
```

---

# 29. Resumo operacional

## Valores lógicos

```text
L = nível lógico baixo = 0
H = nível lógico alto  = 1
Z = alta impedância; saída desconectada da linha
X = don't care em tabelas de minimização; pode ser escolhido como 0 ou 1
```

## Mintermo

```text
Usado para uma linha em que F=1.
É um produto com todas as variáveis.
```

Regra:

```text
0 → variável complementada
1 → variável direta
```

Exemplo:

```text
ABC=101 → m5=AB'C
```

## Maxtermo

```text
Usado para uma linha em que F=0.
É uma soma com todas as variáveis.
```

Regra:

```text
0 → variável direta
1 → variável complementada
```

Exemplo:

```text
ABC=101 → M5=(A'+B+C')
```

## SOP e POS

```text
SOP canônica = soma dos mintermos em que F=1 = Σm(...)
POS canônica = produto dos maxtermos em que F=0 = ΠM(...)
```

Exemplo:

```text
F = Σm(1,2,4,6,7) = ΠM(0,3,5)
```

---

# 30. Exercícios resolvidos

## Exercício resolvido 1 — Identifique um mintermo

Dada a linha:

```text
ABC = 110
```

Escreva seu mintermo.

Solução:

```text
A=1 → A
B=1 → B
C=0 → C'
```

Logo:

```text
m6 = ABC'
```

---

## Exercício resolvido 2 — Identifique um maxtermo

Dada a linha:

```text
ABC = 110
```

Escreva seu maxtermo.

Solução:

```text
A=1 → A'
B=1 → B'
C=0 → C
```

Logo:

```text
M6 = (A'+B'+C)
```

---

## Exercício resolvido 3 — Escreva a SOP

| Índice | A | B | F |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` |
| `1` | `0` | `1` | `1` |
| `2` | `1` | `0` | `0` |
| `3` | `1` | `1` | `1` |

Linhas com `F=1`:

```text
1 e 3
```

Forma canônica:

```text
F(A,B) = Σm(1,3)
       = A'B + AB
```

Simplificando:

```text
F = B(A'+A)
  = B
```

A SOP canônica vem diretamente da tabela; `B` é a forma simplificada.

---

## Exercício resolvido 4 — Escreva a POS

Use a mesma tabela:

| Índice | A | B | F |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` |
| `1` | `0` | `1` | `1` |
| `2` | `1` | `0` | `0` |
| `3` | `1` | `1` | `1` |

Linhas com `F=0`:

```text
0 e 2
```

Forma canônica:

```text
F(A,B) = ΠM(0,2)
       = (A+B)(A'+B)
```

Pela identidade `(X+Y)(X'+Y)=Y`:

```text
F = B
```

---

## Exercício resolvido 5 — Função com `don't care`

| Índice | A | B | F |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` |
| `1` | `0` | `1` | `1` |
| `2` | `1` | `0` | `1` |
| `3` | `1` | `1` | `X` |

Registro por mintermos:

```text
F(A,B) = Σm(1,2), d(3)
```

Se escolhermos o `don't care` da linha `3` como `1`, temos:

```text
F = A+B
```

Verificação nas linhas obrigatórias:

| A | B | Saída exigida | A+B |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` |
| `0` | `1` | `1` | `1` |
| `1` | `0` | `1` | `1` |
| `1` | `1` | `X` | `1`, permitido |

---

# 31. Exercícios para fazer

## Parte A — Valores `H`, `L`, `Z` e `don't care`

1. Em um exercício lógico, a que valor booleano corresponde `H`?
2. Em um exercício lógico, a que valor booleano corresponde `L`?
3. O que significa uma saída em `Z`?
4. Em um buffer tri-state ativo em nível alto, qual é a saída quando `EN=0`?
5. Duas saídas no mesmo barramento estão em `1` e `0`, ambas habilitadas. Qual é o problema?
6. O que significa marcar uma linha da tabela com `don't care`?
7. Uma linha `don't care` precisa obrigatoriamente ser considerada `1`?
8. Explique em uma frase a diferença entre `Z` e `don't care`.

---

## Parte B — Identificação de mintermos e maxtermos

1. Para `ABC=011`, escreva o mintermo e seu índice.
2. Para `ABC=101`, escreva o mintermo e seu índice.
3. Qual é o índice do mintermo `A'B'C'`?
4. Qual é o índice do mintermo `ABC'`?
5. Para `ABC=010`, escreva o maxtermo e seu índice.
6. Para `ABC=100`, escreva o maxtermo e seu índice.
7. Qual é o índice do maxtermo `(A+B+C')`?
8. Qual é o índice do maxtermo `(A'+B'+C')`?
9. Para `ABCD=1011`, escreva o mintermo e seu índice.
10. Para `ABCD=1011`, escreva o maxtermo e seu índice.

---

## Parte C — Tabelas para SOP canônica

Em cada questão, escreva:

```text
1. a notação Σm(...);
2. a SOP canônica expandida.
```

### 1.

| Índice | A | B | F |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` |
| `1` | `0` | `1` | `1` |
| `2` | `1` | `0` | `1` |
| `3` | `1` | `1` | `0` |

### 2.

| Índice | A | B | F |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `1` |
| `1` | `0` | `1` | `1` |
| `2` | `1` | `0` | `0` |
| `3` | `1` | `1` | `1` |

### 3.

| Índice | A | B | C | F |
|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `1` |
| `1` | `0` | `0` | `1` | `0` |
| `2` | `0` | `1` | `0` | `1` |
| `3` | `0` | `1` | `1` | `0` |
| `4` | `1` | `0` | `0` | `0` |
| `5` | `1` | `0` | `1` | `0` |
| `6` | `1` | `1` | `0` | `1` |
| `7` | `1` | `1` | `1` | `0` |

### 4.

| Índice | A | B | C | F |
|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `0` |
| `1` | `0` | `0` | `1` | `1` |
| `2` | `0` | `1` | `0` | `0` |
| `3` | `0` | `1` | `1` | `1` |
| `4` | `1` | `0` | `0` | `0` |
| `5` | `1` | `0` | `1` | `1` |
| `6` | `1` | `1` | `0` | `0` |
| `7` | `1` | `1` | `1` | `1` |

### 5.

| Índice | A | B | C | F |
|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `1` |
| `1` | `0` | `0` | `1` | `0` |
| `2` | `0` | `1` | `0` | `X` |
| `3` | `0` | `1` | `1` | `1` |
| `4` | `1` | `0` | `0` | `0` |
| `5` | `1` | `0` | `1` | `X` |
| `6` | `1` | `1` | `0` | `1` |
| `7` | `1` | `1` | `1` | `0` |

Além da SOP, registre o conjunto de `don't cares`.

---

## Parte D — Tabelas para POS canônica

Em cada questão, escreva:

```text
1. a notação ΠM(...);
2. a POS canônica expandida.
```

### 1.

| Índice | A | B | F |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` |
| `1` | `0` | `1` | `1` |
| `2` | `1` | `0` | `1` |
| `3` | `1` | `1` | `0` |

### 2.

| Índice | A | B | F |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `1` |
| `1` | `0` | `1` | `0` |
| `2` | `1` | `0` | `0` |
| `3` | `1` | `1` | `0` |

### 3.

| Índice | A | B | C | F |
|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `0` |
| `1` | `0` | `0` | `1` | `1` |
| `2` | `0` | `1` | `0` | `0` |
| `3` | `0` | `1` | `1` | `1` |
| `4` | `1` | `0` | `0` | `1` |
| `5` | `1` | `0` | `1` | `0` |
| `6` | `1` | `1` | `0` | `1` |
| `7` | `1` | `1` | `1` | `1` |

### 4.

| Índice | A | B | C | F |
|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `0` |
| `1` | `0` | `0` | `1` | `1` |
| `2` | `0` | `1` | `0` | `0` |
| `3` | `0` | `1` | `1` | `1` |
| `4` | `1` | `0` | `0` | `0` |
| `5` | `1` | `0` | `1` | `1` |
| `6` | `1` | `1` | `0` | `0` |
| `7` | `1` | `1` | `1` | `1` |

### 5.

| Índice | A | B | C | F |
|---:|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` | `1` |
| `1` | `0` | `0` | `1` | `0` |
| `2` | `0` | `1` | `0` | `X` |
| `3` | `0` | `1` | `1` | `1` |
| `4` | `1` | `0` | `0` | `0` |
| `5` | `1` | `0` | `1` | `1` |
| `6` | `1` | `1` | `0` | `X` |
| `7` | `1` | `1` | `1` | `0` |

Além da POS, registre o conjunto de `don't cares`.

---

# 32. Gabarito

## Parte A — Valores `H`, `L`, `Z` e `don't care`

1. `H` corresponde ao nível lógico alto, interpretado como `1`.
2. `L` corresponde ao nível lógico baixo, interpretado como `0`.
3. `Z` significa alta impedância: a saída não está dirigindo o fio para `0` nem para `1`.
4. Com `EN=0`, a saída é `Z`.
5. Há contenção de barramento: dois drivers tentam impor níveis contrários na mesma linha.
6. A saída daquela combinação de entradas pode ser escolhida como `0` ou `1` na minimização.
7. Não. Ela pode ser considerada `0` ou `1`, conforme produza uma implementação válida e mais simples.
8. `Z` é um estado elétrico de saída desconectada; `don't care` é liberdade na especificação de uma linha.

---

## Parte B — Identificação de mintermos e maxtermos

1.

```text
ABC=011 → m3=A'BC
```

2.

```text
ABC=101 → m5=AB'C
```

3.

```text
A'B'C' = m0
```

4.

```text
ABC' = m6
```

5.

```text
ABC=010 → M2=(A+B'+C)
```

6.

```text
ABC=100 → M4=(A'+B+C)
```

7.

```text
(A+B+C') = M1
```

8.

```text
(A'+B'+C') = M7
```

9.

```text
ABCD=1011 → m11=AB'CD
```

10.

```text
ABCD=1011 → M11=(A'+B+C'+D')
```

---

## Parte C — Tabelas para SOP canônica

### 1.

```text
F(A,B) = Σm(1,2)
       = A'B + AB'
```

### 2.

```text
F(A,B) = Σm(0,1,3)
       = A'B' + A'B + AB
```

### 3.

```text
F(A,B,C) = Σm(0,2,6)
         = A'B'C' + A'BC' + ABC'
```

### 4.

```text
F(A,B,C) = Σm(1,3,5,7)
         = A'B'C + A'BC + AB'C + ABC
```

Essa função pode ser simplificada para:

```text
F = C
```

### 5.

```text
F(A,B,C) = Σm(0,3,6), d(2,5)
         = A'B'C' + A'BC + ABC', d(2,5)
```

Os termos `m2` e `m5` não são obrigatórios na SOP canônica da saída `1`; eles ficam disponíveis como `don't cares` para minimização.

---

## Parte D — Tabelas para POS canônica

### 1.

```text
F(A,B) = ΠM(0,3)
       = (A+B)(A'+B')
```

### 2.

```text
F(A,B) = ΠM(1,2,3)
       = (A+B')(A'+B)(A'+B')
```

### 3.

```text
F(A,B,C) = ΠM(0,2,5)
         = (A+B+C)(A+B'+C)(A'+B+C')
```

### 4.

```text
F(A,B,C) = ΠM(0,2,4,6)
         = (A+B+C)(A+B'+C)(A'+B+C)(A'+B'+C)
```

Essa função pode ser simplificada para:

```text
F = C
```

### 5.

```text
F(A,B,C) = ΠM(1,4,7), d(2,6)
         = (A+B+C')(A'+B+C)(A'+B'+C'), d(2,6)
```

Os maxtermos `M2` e `M6` não são obrigatórios na POS dos zeros especificados; suas linhas podem ser escolhidas de modo estratégico na minimização.

---

# 33. O que memorizar

## Valores especiais

```text
H = 1
L = 0
Z = alta impedância, não é 0
X = don't care quando a tabela permite escolher a saída
```

## Conversão de linha para termo

| Linha | Mintermo, para marcar `1` | Maxtermo, para marcar `0` |
|---|---|---|
| bit `0` | literal complementado | literal direto |
| bit `1` | literal direto | literal complementado |

## Formas canônicas

```text
F = Σm(índices onde F=1)
F = ΠM(índices onde F=0)
```

Exemplo:

```text
ABC=101
m5 = AB'C
M5 = (A'+B+C')
```

## Caminho de resolução em prova

```text
1. Conte as entradas e organize as 2^n linhas.
2. Numere as linhas em binário.
3. Para SOP, circule os 1s e escreva mintermos.
4. Para POS, circule os 0s e escreva maxtermos.
5. Separe qualquer X como don't care.
6. Só depois simplifique ou implemente o circuito.
```

---

# 34. Plano de estudo para esta aula

| Etapa | Tempo | Atividade |
|---|---:|---|
| Recuperação ativa | 10 min | Escrever sem consulta as regras de mintermo e maxtermo |
| Valores especiais | 25 min | Diferenciar `H`, `L`, `Z` e `don't care` |
| Mintermos e SOP | 35 min | Refazer as tabelas de três variáveis e converter saídas `1` |
| Maxtermos e POS | 35 min | Converter saídas `0` e comparar com SOP |
| Exercícios Parte A e B | 20 min | Conferir conceitos e índices |
| Exercícios Parte C e D | 45 min | Fazer as 5 tabelas para cada forma sem olhar o gabarito |
| Registro de erros | 10 min | Anotar trocas de apóstrofo ou confusões entre `Z` e `X` |

Flashcards recomendados:

1. Qual é a diferença entre `H` e `L`?
2. Por que `Z` não é o mesmo que `0`?
3. O que faz um buffer tri-state quando está desabilitado?
4. O que um `don't care` permite durante a simplificação?
5. O que é um mintermo?
6. Como se escreve o mintermo da linha `101`?
7. O que é um maxtermo?
8. Como se escreve o maxtermo da linha `101`?
9. Que linhas entram em `Σm(...)`?
10. Que linhas entram em `ΠM(...)`?

---

# 35. Conexão com os próximos tópicos

Com esta aula, você consegue transformar uma tabela-verdade em:

```text
SOP canônica por mintermos
POS canônica por maxtermos
listas compactas Σm(...) e ΠM(...)
conjuntos de don't care
```

O próximo assunto do cronograma é:

```text
mapas de Karnaugh de 2 e 3 variáveis
```

Nele, você colocará os valores da tabela em células organizadas em ordem Gray e agrupará:

```text
1s para obter SOP mínima
0s para obter POS mínima
X quando ele ajudar a aumentar um agrupamento
```

Assim, o fluxo ficará completo:

```text
tabela-verdade → mintermos/maxtermos → Karnaugh → expressão mínima → circuito
```
