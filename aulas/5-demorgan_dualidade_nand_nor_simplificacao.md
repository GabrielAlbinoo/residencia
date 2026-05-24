# Aula Detalhada — Teorema de DeMorgan, Dualidade, NAND, NOR e Simplificação

**Tema do dia:** Transformações de expressões booleanas  
**Data do cronograma:** 27/05 — Quarta-feira  
**Aula na sequência:** 5  
**Objetivo:** dominar DeMorgan e dualidade, transformar expressões sem alterar a função lógica e implementar circuitos usando apenas portas NAND ou apenas portas NOR.

---

## 1. Onde esta aula entra no estudo?

Até agora, você estudou:

```text
1. Portas lógicas e tabelas-verdade.
2. Álgebra booleana e leis de simplificação.
```

Você já sabe reconhecer expressões como:

```text
Y = AB + A'C
```

e simplificar padrões como:

```text
AB + AB' = A
A + AB = A
```

Nesta aula, vamos avançar para três habilidades centrais em lógica digital:

```text
1. Negar expressões completas corretamente.
2. Trocar estruturas AND/OR sem mudar a função.
3. Construir a mesma função usando somente NAND ou somente NOR.
```

Essas habilidades aparecem em:

- simplificação de circuitos;
- conversão de diagramas lógicos;
- implementação física de funções;
- questões de equivalência em prova;
- preparação para mapas de Karnaugh e síntese combinacional.

---

# 2. Revisão rápida da notação

Nesta aula:

| Notação | Significado | Porta |
|---|---|---|
| `A'` | NOT A | NOT |
| `AB` ou `A·B` | A AND B | AND |
| `A+B` | A OR B | OR |
| `(AB)'` | NOT(A AND B) | NAND |
| `(A+B)'` | NOT(A OR B) | NOR |

A ordem normal das operações é:

```text
1. NOT
2. AND
3. OR
```

Exemplo:

```text
F = A + B'C
```

significa:

```text
F = A OR ((NOT B) AND C)
```

Já:

```text
F = (A + B'C)'
```

significa que toda a expressão foi negada.

Esse tipo de negação é precisamente o território do Teorema de DeMorgan.

---

# 3. O problema que DeMorgan resolve

Considere:

```text
(A+B)'
```

Isso é:

```text
NOT(A OR B)
```

A saída vale `1` somente quando:

```text
A = 0 e B = 0
```

Outra maneira de descrever exatamente esse comportamento é:

```text
A'B'
```

ou seja:

```text
(NOT A) AND (NOT B)
```

Logo:

```text
(A+B)' = A'B'
```

Agora considere:

```text
(AB)'
```

Isso é:

```text
NOT(A AND B)
```

A saída vale `0` somente quando:

```text
A = 1 e B = 1
```

Ela vale `1` quando pelo menos uma das entradas é `0`:

```text
A' + B'
```

Logo:

```text
(AB)' = A' + B'
```

Essas são as duas leis de DeMorgan.

---

# 4. Teorema de DeMorgan

## 4.1 Primeira lei: complemento de uma soma

```text
(A+B)' = A'B'
```

Leia assim:

```text
O NOT de uma OR é igual ao AND das entradas negadas.
```

Em palavras:

```text
Não é verdade que A ou B ocorreu
=
A não ocorreu e B não ocorreu
```

Tabela-verdade:

| A | B | A+B | (A+B)' | A' | B' | A'B' |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 |

As colunas `(A+B)'` e `A'B'` são iguais.

---

## 4.2 Segunda lei: complemento de um produto

```text
(AB)' = A' + B'
```

Leia assim:

```text
O NOT de uma AND é igual ao OR das entradas negadas.
```

Em palavras:

```text
Não é verdade que A e B ocorreram juntos
=
A não ocorreu ou B não ocorreu
```

Tabela-verdade:

| A | B | AB | (AB)' | A' | B' | A'+B' |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 |

As colunas `(AB)'` e `A'+B'` são iguais.

---

## 4.3 Regra prática para aplicar DeMorgan

Ao mover uma negação para dentro de parênteses:

```text
1. Negue cada termo.
2. Troque OR por AND.
3. Troque AND por OR.
```

Resumo visual:

```text
(A + B)'  = A' · B'
(A · B)'  = A' + B'
```

O operador sempre troca:

```text
+  troca por  ·
·  troca por  +
```

---

# 5. DeMorgan com três ou mais variáveis

As leis não valem apenas para duas entradas.

## 5.1 Complemento de OR com várias entradas

```text
(A+B+C)' = A'B'C'
```

Para a OR inteira ser `0`, todas as entradas precisam ser `0`.

Exemplo:

```text
(P+Q+R+S)' = P'Q'R'S'
```

---

## 5.2 Complemento de AND com várias entradas

```text
(ABC)' = A' + B' + C'
```

Para o produto inteiro não ser `1`, pelo menos uma entrada precisa ser `0`.

Exemplo:

```text
(WXYZ)' = W' + X' + Y' + Z'
```

---

## 5.3 Atenção ao alcance do NOT

Estas expressões são diferentes:

```text
(A+B+C)'
```

e:

```text
(A+B)' + C
```

Na primeira, o NOT cobre os três termos:

```text
(A+B+C)' = A'B'C'
```

Na segunda, o NOT cobre apenas `(A+B)`:

```text
(A+B)' + C = A'B' + C
```

Em prova, observe cuidadosamente os parênteses e a barra de negação.

---

# 6. DeMorgan em expressões com níveis internos

Uma expressão pode ter AND e OR misturados. Nesse caso, retire a negação camada por camada.

## 6.1 Exemplo 1

Transforme:

```text
(A + BC)'
```

O operador principal dentro dos parênteses é OR:

```text
(A + BC)' = A'·(BC)'
```

Agora aplique DeMorgan ao produto `BC`:

```text
(BC)' = B' + C'
```

Resultado:

```text
(A + BC)' = A'(B'+C')
```

---

## 6.2 Exemplo 2

Transforme:

```text
(AB + C'D)'
```

Primeiro, negue a soma dos dois produtos:

```text
(AB + C'D)' = (AB)'·(C'D)'
```

Agora aplique DeMorgan em cada produto:

```text
(AB)' = A' + B'
(C'D)' = C + D'
```

Resultado:

```text
(AB + C'D)' = (A'+B')(C+D')
```

Observe:

```text
(C')' = C
```

---

## 6.3 Exemplo 3

Transforme:

```text
[(A+B')C]'
```

O operador externo é AND:

```text
[(A+B')C]' = (A+B')' + C'
```

Agora:

```text
(A+B')' = A'·(B')'
         = A'B
```

Resultado:

```text
[(A+B')C]' = A'B + C'
```

---

## 6.4 Método seguro

Para não errar em expressões grandes:

```text
1. Identifique a operação mais externa dentro do NOT.
2. Aplique DeMorgan apenas nesse nível.
3. Mantenha parênteses nos blocos internos.
4. Repita enquanto ainda houver parênteses negados.
5. Elimine negações duplas: (A')' = A.
```

---

# 7. Dupla negação e a técnica de inserir dois NOTs

A dupla negação não muda uma função:

```text
(F')' = F
```

Isso permite inserir duas negações estrategicamente:

```text
F = (F')'
```

Por que isso é útil?

Porque portas NAND e NOR já produzem saídas negadas.

Exemplo:

```text
F = AB + CD
```

Insira dupla negação:

```text
F = [(AB + CD)']'
```

Pelo DeMorgan na negação interna:

```text
(AB + CD)' = (AB)'(CD)'
```

Então:

```text
F = [(AB)'(CD)']'
```

Agora veja a estrutura:

```text
(AB)'      é uma NAND
(CD)'      é uma NAND
[(AB)'(CD)']' é outra NAND
```

Ou seja:

```text
AB + CD
```

pode ser implementada diretamente com uma estrutura NAND–NAND.

Esse raciocínio será detalhado adiante.

---

# 8. Dualidade

## 8.1 O que é dualidade?

Na álgebra booleana, uma expressão dual é obtida trocando:

```text
OR  (+)  por AND (·)
AND (·)  por OR  (+)
0 por 1
1 por 0
```

As variáveis e seus complementos permanecem como estão:

```text
A continua A
A' continua A'
```

---

## 8.2 Exemplos simples

Expressão:

```text
A + 0
```

Dual:

```text
A·1
```

As duas são leis de identidade:

```text
A + 0 = A
A·1 = A
```

Outro exemplo:

```text
A + 1 = 1
```

Dual:

```text
A·0 = 0
```

Essas são as leis de dominação.

---

## 8.3 Dualidade das leis mais importantes

| Lei original | Lei dual |
|---|---|
| `A+0=A` | `A·1=A` |
| `A+1=1` | `A·0=0` |
| `A+A=A` | `A·A=A` |
| `A+A'=1` | `A·A'=0` |
| `A+AB=A` | `A(A+B)=A` |
| `A+BC=(A+B)(A+C)` | `A(B+C)=AB+AC` |

O princípio é:

> Se uma identidade booleana é válida, sua identidade dual também é válida.

---

## 8.4 Dualidade em DeMorgan

Uma lei de DeMorgan é dual da outra.

Primeira:

```text
(A+B)' = A'B'
```

Troque `+` por `·`:

```text
(AB)' = A' + B'
```

Essa é a segunda lei.

---

## 8.5 Dual de uma expressão

Considere:

```text
F = AB + C'
```

Para encontrar a expressão dual:

```text
AB       vira A+B
+ C'     vira · C'
```

Logo:

```text
Fd = (A+B)C'
```

Outro exemplo:

```text
F = (A+0)(B+C')
```

Dual:

```text
Fd = (A·1) + (B·C')
```

ou:

```text
Fd = A + BC'
```

---

## 8.6 Dual não significa equivalente

Muito cuidado:

> A expressão dual de uma função não é, em geral, a mesma função.

Exemplo:

```text
F  = AB + C'
Fd = (A+B)C'
```

Teste:

```text
A = 0, B = 0, C = 0
```

Original:

```text
F = 0·0 + 1 = 1
```

Dual:

```text
Fd = (0+0)·1 = 0
```

Portanto:

```text
F ≠ Fd
```

O que é garantido é:

```text
se uma igualdade completa é válida, a igualdade dual também é válida.
```

---

# 9. DeMorgan, dualidade e portas com bolhas

Em diagramas de circuitos, uma negação costuma aparecer como uma pequena bolha na entrada ou na saída de uma porta.

DeMorgan permite “empurrar” uma negação através de uma porta:

```text
AND com bolha na saída = OR com bolhas nas entradas
OR com bolha na saída  = AND com bolhas nas entradas
```

Algebricamente:

```text
(AB)'  = A' + B'
(A+B)' = A'B'
```

Isso explica por que:

```text
NAND equivale a OR com entradas negadas
NOR equivale a AND com entradas negadas
```

| Porta original | Expressão | Forma equivalente por DeMorgan |
|---|---|---|
| NAND | `(AB)'` | `A' + B'` |
| NOR | `(A+B)'` | `A'B'` |

Essa visualização é muito útil ao transformar circuitos para usar um tipo único de porta.

---

# 10. Por que NAND e NOR são portas universais?

Uma porta é **universal** quando, sozinha, consegue construir as operações básicas:

```text
NOT, AND e OR
```

Como qualquer função booleana pode ser escrita usando NOT, AND e OR, uma porta capaz de implementar essas três consegue implementar qualquer função lógica.

As portas universais são:

```text
NAND
NOR
```

Definições:

```text
A NAND B = (AB)'
A NOR B  = (A+B)'
```

---

# 11. Implementação usando apenas NAND

## 11.1 NOT com NAND

Ligue as duas entradas da NAND ao mesmo sinal:

```text
A NAND A = (AA)'
```

Pela idempotência:

```text
AA = A
```

Então:

```text
A NAND A = A'
```

Representação:

```text
A ─┬─→ NAND → A'
   └─→
```

Resumo:

```text
NOT A = A NAND A
```

---

## 11.2 AND com NAND

Uma NAND produz o complemento da AND:

```text
A NAND B = (AB)'
```

Para recuperar `AB`, inverta a saída usando outra NAND:

```text
AB = [(AB)']'
```

Em portas:

```text
X = A NAND B
Y = X NAND X
```

Então:

```text
Y = AB
```

Resumo:

```text
A AND B = (A NAND B) NAND (A NAND B)
```

---

## 11.3 OR com NAND

Pelo Teorema de DeMorgan:

```text
A+B = (A'B')'
```

Gere os complementos usando NAND:

```text
A' = A NAND A
B' = B NAND B
```

Depois faça a NAND dos sinais negados:

```text
A+B = A' NAND B'
```

Em portas:

```text
X = A NAND A      = A'
Z = B NAND B      = B'
Y = X NAND Z      = A+B
```

Resumo:

```text
A OR B = (A NAND A) NAND (B NAND B)
```

---

## 11.4 Tabela-resumo de NAND

| Função desejada | Construção somente com NAND |
|---|---|
| `A'` | `A NAND A` |
| `AB` | `(A NAND B) NAND (A NAND B)` |
| `A+B` | `(A NAND A) NAND (B NAND B)` |

---

# 12. Estrutura NAND–NAND para soma de produtos

Uma expressão na forma de **soma de produtos** possui termos AND somados por OR:

```text
F = AB + CD
```

Pelo DeMorgan e pela dupla negação:

```text
F = AB + CD
F = [(AB + CD)']'
F = [(AB)'(CD)']'
```

A última forma é exatamente:

```text
NAND das saídas de duas NANDs
```

Circuito:

```text
A, B → NAND → (AB)' ─┐
                     ├→ NAND → F
C, D → NAND → (CD)' ─┘
```

A saída final é:

```text
F = AB + CD
```

## Regra importante

> Funções em soma de produtos são naturalmente implementadas em dois níveis com NAND–NAND.

---

# 13. Exemplo completo com NAND

Implemente usando somente NAND:

```text
F = AB + C'D
```

## 13.1 Observe a forma

Temos uma soma de produtos:

```text
AB      é um produto
C'D     é outro produto
```

Isso favorece uma estrutura NAND–NAND.

## 13.2 Gere a literal negada necessária

Precisamos de `C'`:

```text
N1 = C NAND C = C'
```

## 13.3 Gere os produtos já negados

```text
N2 = A NAND B  = (AB)'
N3 = N1 NAND D = (C'D)'
```

## 13.4 Combine na NAND final

```text
F = N2 NAND N3
```

Substituindo:

```text
F = [(AB)'(C'D)']'
```

Por DeMorgan:

```text
F = AB + C'D
```

## 13.5 Lista de portas

| Porta | Entradas | Saída |
|---|---|---|
| `N1` | `C`, `C` | `C'` |
| `N2` | `A`, `B` | `(AB)'` |
| `N3` | `C'`, `D` | `(C'D)'` |
| `N4` | `(AB)'`, `(C'D)'` | `F` |

Total:

```text
4 portas NAND
```

---

# 14. Implementação usando apenas NOR

## 14.1 NOT com NOR

Ligue as duas entradas da NOR ao mesmo sinal:

```text
A NOR A = (A+A)'
```

Pela idempotência:

```text
A+A = A
```

Então:

```text
A NOR A = A'
```

Resumo:

```text
NOT A = A NOR A
```

---

## 14.2 OR com NOR

Uma NOR produz o complemento da OR:

```text
A NOR B = (A+B)'
```

Para recuperar `A+B`, inverta a saída usando outra NOR:

```text
A+B = [(A+B)']'
```

Em portas:

```text
X = A NOR B
Y = X NOR X
```

Então:

```text
Y = A+B
```

Resumo:

```text
A OR B = (A NOR B) NOR (A NOR B)
```

---

## 14.3 AND com NOR

Pelo Teorema de DeMorgan:

```text
AB = (A'+B')'
```

Gere os complementos usando NOR:

```text
A' = A NOR A
B' = B NOR B
```

Depois:

```text
AB = A' NOR B'
```

Em portas:

```text
X = A NOR A      = A'
Z = B NOR B      = B'
Y = X NOR Z      = AB
```

Resumo:

```text
A AND B = (A NOR A) NOR (B NOR B)
```

---

## 14.4 Tabela-resumo de NOR

| Função desejada | Construção somente com NOR |
|---|---|
| `A'` | `A NOR A` |
| `A+B` | `(A NOR B) NOR (A NOR B)` |
| `AB` | `(A NOR A) NOR (B NOR B)` |

---

# 15. Estrutura NOR–NOR para produto de somas

Uma expressão na forma de **produto de somas** possui termos OR multiplicados por AND:

```text
F = (A+B)(C+D)
```

Pelo DeMorgan e pela dupla negação:

```text
F = (A+B)(C+D)
F = {[(A+B)(C+D)]'}'
F = [(A+B)' + (C+D)']'
```

A última forma é exatamente:

```text
NOR das saídas de duas NORs
```

Circuito:

```text
A, B → NOR → (A+B)' ─┐
                     ├→ NOR → F
C, D → NOR → (C+D)' ─┘
```

A saída final é:

```text
F = (A+B)(C+D)
```

## Regra importante

> Funções em produto de somas são naturalmente implementadas em dois níveis com NOR–NOR.

---

# 16. Exemplo completo com NOR

Implemente usando somente NOR:

```text
F = (A+B)(C'+D)
```

## 16.1 Observe a forma

Temos um produto de somas:

```text
(A+B)      é uma soma
(C'+D)     é outra soma
```

Isso favorece NOR–NOR.

## 16.2 Gere a literal negada necessária

Precisamos de `C'`:

```text
N1 = C NOR C = C'
```

## 16.3 Gere as somas já negadas

```text
N2 = A NOR B  = (A+B)'
N3 = N1 NOR D = (C'+D)'
```

## 16.4 Combine na NOR final

```text
F = N2 NOR N3
```

Substituindo:

```text
F = [(A+B)' + (C'+D)']'
```

Por DeMorgan:

```text
F = (A+B)(C'+D)
```

## 16.5 Lista de portas

| Porta | Entradas | Saída |
|---|---|---|
| `N1` | `C`, `C` | `C'` |
| `N2` | `A`, `B` | `(A+B)'` |
| `N3` | `C'`, `D` | `(C'+D)'` |
| `N4` | `(A+B)'`, `(C'+D)'` | `F` |

Total:

```text
4 portas NOR
```

---

# 17. Como escolher NAND ou NOR?

Ao ver uma função, observe sua forma:

| Forma da função | Exemplo | Implementação natural |
|---|---|---|
| Soma de produtos | `AB + C'D` | NAND–NAND |
| Produto de somas | `(A+B)(C'+D)` | NOR–NOR |

Memorize:

```text
ANDs seguidas de OR  → NAND–NAND
ORs seguidas de AND  → NOR–NOR
```

Isso não significa que seja impossível usar a outra porta.  
Significa que essa escolha normalmente produz a implementação mais direta.

## 17.1 Quando a forma não ajuda imediatamente

Exemplo:

```text
F = C + AB
```

Essa já é soma de produtos:

```text
F = AB + C
```

Logo, favorece NAND. Para usar NOR em dois níveis, transforme pela distributiva:

```text
C + AB = (C+A)(C+B)
```

Agora está em produto de somas:

```text
F = (A+C)(B+C)
```

e favorece NOR–NOR.

Outro exemplo:

```text
F = (A+B)(C+D)
```

Ela favorece NOR. Para implementar em estrutura NAND–NAND, uma opção é expandir:

```text
F = AC + AD + BC + BD
```

Agora a função está em soma de produtos.

Em expressões grandes, uma transformação pode aumentar o número de termos. Por isso a forma escolhida importa.

---

# 18. Portas de duas entradas e expressões maiores

Alguns exercícios desenham portas com três ou mais entradas:

```text
NAND(A,B,C) = (ABC)'
NOR(A,B,C)  = (A+B+C)'
```

Se o circuito permitir NAND ou NOR com várias entradas, a implementação fica direta.

Exemplo:

```text
F = AB + CD + EF
```

Com NAND de três entradas na etapa final:

```text
N1 = (AB)'
N2 = (CD)'
N3 = (EF)'
F  = (N1·N2·N3)'
```

Mas, se a prova restringir todas as portas a **duas entradas**, será necessário decompor a etapa final em mais portas. A função continua igual; apenas o número de níveis pode aumentar.

Sempre leia a figura ou o enunciado para saber quantas entradas cada porta aceita.

---

# 19. Simplificação algébrica usando DeMorgan

DeMorgan não serve apenas para trocar portas. Ele também ajuda a simplificar expressões negadas.

## 19.1 Exemplo 1 — simplifique antes de negar

Simplifique:

```text
F = (A + AB')'
```

Dentro dos parênteses, há absorção:

```text
A + AB' = A
```

Então:

```text
F = A'
```

Essa abordagem é curta e eficiente.

---

## 19.2 Exemplo 2 — simplifique produtos com fator comum

Simplifique:

```text
F = (AB + A'B)'
```

Dentro dos parênteses:

```text
AB + A'B = B(A+A')
```

Complemento:

```text
B(A+A') = B·1 = B
```

Logo:

```text
F = B'
```

---

## 19.3 Exemplo 3 — aplique DeMorgan primeiro

Simplifique:

```text
F = (AB + AC)'
```

Fatore antes:

```text
AB + AC = A(B+C)
```

Assim:

```text
F = [A(B+C)]'
```

DeMorgan:

```text
F = A' + (B+C)'
```

DeMorgan novamente:

```text
F = A' + B'C'
```

Resultado:

```text
F = A' + B'C'
```

Você também poderia aplicar DeMorgan diretamente aos termos originais:

```text
(AB+AC)' = (A'+B')(A'+C')
```

Essa expressão é equivalente a:

```text
A' + B'C'
```

pela distributiva booleana.

---

## 19.4 Exemplo 4 — complemento de XOR

Considere a expressão da XOR:

```text
A'B + AB'
```

Seu complemento é:

```text
F = (A'B + AB')'
```

Pelo DeMorgan:

```text
F = (A'B)'(AB')'
```

Aplicando DeMorgan em cada produto:

```text
F = (A+B')(A'+B)
```

Essa é uma forma de representar a XNOR, que vale `1` quando as entradas são iguais.

Também sabemos:

```text
XNOR = AB + A'B'
```

Logo:

```text
(A'B + AB')' = (A+B')(A'+B) = AB + A'B'
```

---

## 19.5 Exemplo 5 — várias leis juntas

Simplifique:

```text
F = [A(B+C) + AB']'
```

Expanda:

```text
A(B+C) = AB + AC
```

Então:

```text
F = (AB + AC + AB')'
```

Agrupe os termos com `B` e `B'`:

```text
F = [A(B+B') + AC]'
```

Complemento:

```text
F = (A + AC)'
```

Absorção:

```text
F = A'
```

---

# 20. Transformação de expressão para NAND: roteiro prático

Para implementar uma função usando apenas NAND:

```text
1. Simplifique a expressão, se possível.
2. Tente deixá-la em soma de produtos.
3. Gere literais negadas com NAND de entradas unidas.
4. Faça uma NAND para cada termo produto.
5. Faça uma NAND final combinando as saídas anteriores.
```

## Exemplo

```text
F = AB + A'BC
```

Primeiro observe absorção:

```text
AB + A'BC = B(A + A'C)
```

Use:

```text
A + A'C = A + C
```

Então:

```text
F = B(A+C) = AB + BC
```

A forma simplificada em soma de produtos é:

```text
F = AB + BC
```

Implementação NAND–NAND:

```text
N1 = A NAND B = (AB)'
N2 = B NAND C = (BC)'
F  = N1 NAND N2
```

O circuito usa:

```text
3 portas NAND
```

Simplificar antes de implementar evitou gerar `A'` e um produto de três literais.

---

# 21. Transformação de expressão para NOR: roteiro prático

Para implementar uma função usando apenas NOR:

```text
1. Simplifique a expressão, se possível.
2. Tente deixá-la em produto de somas.
3. Gere literais negadas com NOR de entradas unidas.
4. Faça uma NOR para cada termo soma.
5. Faça uma NOR final combinando as saídas anteriores.
```

## Exemplo

Implemente:

```text
F = A + BC
```

Essa expressão pode ser convertida pela distributiva:

```text
A + BC = (A+B)(A+C)
```

Agora use NOR–NOR:

```text
N1 = A NOR B = (A+B)'
N2 = A NOR C = (A+C)'
F  = N1 NOR N2
```

Substituindo:

```text
F = [(A+B)' + (A+C)']'
  = (A+B)(A+C)
  = A + BC
```

O circuito usa:

```text
3 portas NOR
```

---

# 22. Comparação completa: mesma função com NAND e NOR

Considere:

```text
F = A + BC
```

## 22.1 Implementação natural com NAND

A expressão já é soma de produtos:

```text
F = A + BC
```

Para uma estrutura NAND–NAND, trate `A` como um termo de uma literal. É necessário produzir `A'`:

```text
N1 = A NAND A = A'
N2 = B NAND C = (BC)'
F  = N1 NAND N2
```

Porque:

```text
F = [A'·(BC)']' = A + BC
```

Total:

```text
3 portas NAND
```

## 22.2 Implementação natural com NOR após transformação

Transforme:

```text
F = A + BC
F = (A+B)(A+C)
```

Então:

```text
N1 = A NOR B = (A+B)'
N2 = A NOR C = (A+C)'
F  = N1 NOR N2
```

Total:

```text
3 portas NOR
```

Neste exemplo, ambas as implementações são compactas.

---

# 23. Erros comuns em prova

## Erro 1: quebrar a barra sem trocar a operação

Errado:

```text
(A+B)' = A' + B'
```

Correto:

```text
(A+B)' = A'B'
```

---

## Erro 2: negar apenas uma variável

Errado:

```text
(AB)' = A'B
```

Correto:

```text
(AB)' = A' + B'
```

Ao aplicar DeMorgan, todos os termos cobertos pelo NOT são negados.

---

## Erro 3: esquecer negação dupla

Exemplo:

```text
(A'B)' = (A')' + B' = A + B'
```

Não é:

```text
A' + B'
```

---

## Erro 4: confundir dual com complemento

Para:

```text
F = A+B
```

Complemento:

```text
F' = (A+B)' = A'B'
```

Dual:

```text
Fd = AB
```

São operações diferentes.

---

## Erro 5: escolher NAND–NAND para produto de somas sem transformar

```text
(A+B)(C+D)
```

está naturalmente na forma:

```text
produto de somas
```

Ela favorece:

```text
NOR–NOR
```

Para usar NAND–NAND em dois níveis, primeiro converta para soma de produtos:

```text
AC + AD + BC + BD
```

---

## Erro 6: implementar antes de simplificar

Expressão:

```text
AB + AB'
```

Sem simplificar, parece precisar de várias portas.

Mas:

```text
AB + AB' = A
```

O melhor circuito é simplesmente:

```text
A → F
```

---

# 24. Resumo operacional

## DeMorgan

```text
(A+B)' = A'B'
(AB)'  = A'+B'
```

```text
Ao entrar com a negação:
nega cada termo e troca a operação.
```

## Dualidade

```text
Troque:
+ ↔ ·
0 ↔ 1
```

```text
Não troque:
A
A'
```

## NAND

```text
NOT: A'  = A NAND A
AND: AB  = (A NAND B) NAND (A NAND B)
OR:  A+B = (A NAND A) NAND (B NAND B)
```

```text
Soma de produtos → NAND–NAND
```

## NOR

```text
NOT: A'  = A NOR A
OR:  A+B = (A NOR B) NOR (A NOR B)
AND: AB  = (A NOR A) NOR (B NOR B)
```

```text
Produto de somas → NOR–NOR
```

---

# 25. Exercícios resolvidos

## Exercício resolvido 1 — DeMorgan direto

Transforme:

```text
(X+Y+Z)'
```

A expressão é o complemento de uma OR:

```text
(X+Y+Z)' = X'Y'Z'
```

---

## Exercício resolvido 2 — DeMorgan em camadas

Transforme:

```text
(A+B'C)'
```

Primeiro nível:

```text
(A+B'C)' = A'(B'C)'
```

Segundo nível:

```text
(B'C)' = B + C'
```

Resposta:

```text
(A+B'C)' = A'(B+C')
```

---

## Exercício resolvido 3 — dualidade

Encontre a expressão dual de:

```text
F = A(B+0) + C'
```

Troque:

```text
· por +
+ por ·
0 por 1
```

Resultado:

```text
Fd = [A + (B·1)]·C'
```

Simplificando:

```text
Fd = (A+B)C'
```

---

## Exercício resolvido 4 — NAND

Implemente somente com NAND:

```text
F = XY + ZW
```

Use NAND–NAND:

```text
N1 = X NAND Y = (XY)'
N2 = Z NAND W = (ZW)'
F  = N1 NAND N2
```

Porque:

```text
F = [(XY)'(ZW)']' = XY + ZW
```

---

## Exercício resolvido 5 — NOR

Implemente somente com NOR:

```text
F = (P+Q)(R+S)
```

Use NOR–NOR:

```text
N1 = P NOR Q = (P+Q)'
N2 = R NOR S = (R+S)'
F  = N1 NOR N2
```

Porque:

```text
F = [(P+Q)' + (R+S)']' = (P+Q)(R+S)
```

---

# 26. Exercícios para fazer

## Parte A — Teorema de DeMorgan

1. Transforme `(A+B)'`.
2. Transforme `(AB)'`.
3. Transforme `(A+B+C)'`.
4. Transforme `(ABC)'`.
5. Transforme `(A+B'C)'`.
6. Transforme `(AB+C'D)'`.
7. Transforme `[(A'+B)C]'`.
8. Transforme `[(A+B)(C+D)]'`.

---

## Parte B — Dualidade

9. Qual é a dual de `A+0=A`?
10. Qual é a dual de `A+A'=1`?
11. Qual é a dual de `A+AB=A`?
12. Encontre a dual de `F=A+BC`.
13. Encontre a dual de `F=(A+B')C+0`.
14. Explique por que a expressão dual de uma função não precisa ser equivalente à função original.

---

## Parte C — Simplificação algébrica

15. Simplifique `F=(A+A')'`.
16. Simplifique `F=(AA')'`.
17. Simplifique `F=(A+AB)'`.
18. Simplifique `F=(AB+AB')'`.
19. Simplifique `F=(A+B)(A+B')`.
20. Simplifique `F=(AB+AC)'`.
21. Simplifique `F=[X(Y+Z)+XY']'`.
22. Mostre que `(A'B+AB')' = AB+A'B'`.

---

## Parte D — Implementação com NAND e NOR

23. Implemente `A'` usando apenas NAND.
24. Implemente `A+B` usando apenas NAND.
25. Implemente `AB` usando apenas NOR.
26. Implemente `F=AB+CD` usando apenas NAND.
27. Implemente `F=A'B+CD` usando apenas NAND.
28. Implemente `F=(A+B)(C+D)` usando apenas NOR.
29. Implemente `F=(A'+B)(C+D)` usando apenas NOR.
30. Transforme `F=A+BC` para produto de somas e forneça uma implementação NOR–NOR.

---

# 27. Gabarito

## Parte A

1.

```text
(A+B)' = A'B'
```

2.

```text
(AB)' = A'+B'
```

3.

```text
(A+B+C)' = A'B'C'
```

4.

```text
(ABC)' = A'+B'+C'
```

5.

```text
(A+B'C)' = A'(B'C)'
          = A'(B+C')
```

6.

```text
(AB+C'D)' = (AB)'(C'D)'
           = (A'+B')(C+D')
```

7.

```text
[(A'+B)C]' = (A'+B)' + C'
            = AB' + C'
```

8.

```text
[(A+B)(C+D)]' = (A+B)' + (C+D)'
               = A'B' + C'D'
```

---

## Parte B

9.

```text
A·1 = A
```

10.

```text
A·A' = 0
```

11.

```text
A(A+B) = A
```

12.

```text
F = A + BC
Fd = A(B+C)
```

13.

```text
F = (A+B')C + 0
Fd = [(A·B') + C]·1
Fd = AB' + C
```

14. Ao formar a dual, trocamos operações e constantes; não estamos aplicando uma equivalência à própria expressão. A garantia é que a dual de uma **identidade válida** também é uma identidade válida, não que toda função seja igual à sua dual.

---

## Parte C

15.

```text
(A+A')' = 1'
         = 0
```

16.

```text
(AA')' = 0'
        = 1
```

17.

```text
(A+AB)' = A'
```

18.

```text
(AB+AB')' = [A(B+B')]'
           = (A·1)'
           = A'
```

19.

```text
(A+B)(A+B') = A + BB'
             = A
```

20.

```text
(AB+AC)' = [A(B+C)]'
          = A' + (B+C)'
          = A' + B'C'
```

21.

```text
[X(Y+Z)+XY']' = (XY+XZ+XY')'
               = [X(Y+Y')+XZ]'
               = (X+XZ)'
               = X'
```

22.

```text
(A'B+AB')' = (A'B)'(AB')'
            = (A+B')(A'+B)
            = AA' + AB + A'B' + B'B
            = 0 + AB + A'B' + 0
            = AB + A'B'
```

---

## Parte D

23.

```text
A' = A NAND A
```

24.

```text
N1 = A NAND A = A'
N2 = B NAND B = B'
F  = N1 NAND N2 = A+B
```

25.

```text
N1 = A NOR A = A'
N2 = B NOR B = B'
F  = N1 NOR N2 = AB
```

26.

```text
N1 = A NAND B = (AB)'
N2 = C NAND D = (CD)'
F  = N1 NAND N2 = AB+CD
```

27.

```text
N1 = A NAND A  = A'
N2 = N1 NAND B = (A'B)'
N3 = C NAND D  = (CD)'
F  = N2 NAND N3 = A'B+CD
```

28.

```text
N1 = A NOR B = (A+B)'
N2 = C NOR D = (C+D)'
F  = N1 NOR N2 = (A+B)(C+D)
```

29.

```text
N1 = A NOR A  = A'
N2 = N1 NOR B = (A'+B)'
N3 = C NOR D  = (C+D)'
F  = N2 NOR N3 = (A'+B)(C+D)
```

30.

```text
A+BC = (A+B)(A+C)
```

Implementação:

```text
N1 = A NOR B = (A+B)'
N2 = A NOR C = (A+C)'
F  = N1 NOR N2 = (A+B)(A+C) = A+BC
```

---

# 28. O que memorizar

## DeMorgan

```text
(A+B)' = A'B'
(AB)'  = A'+B'
```

Com mais variáveis:

```text
(A+B+C)' = A'B'C'
(ABC)'   = A'+B'+C'
```

Regra:

```text
Quebre a negação, negue cada termo e troque AND ↔ OR.
```

## Dualidade

```text
+ troca com ·
0 troca com 1
variáveis e complementos permanecem
```

Exemplo:

```text
A+AB=A       dual: A(A+B)=A
```

## NAND

```text
NAND é universal.
Soma de produtos favorece NAND–NAND.
```

```text
A'  = A NAND A
AB  = (A NAND B) NAND (A NAND B)
A+B = (A NAND A) NAND (B NAND B)
```

## NOR

```text
NOR é universal.
Produto de somas favorece NOR–NOR.
```

```text
A'  = A NOR A
A+B = (A NOR B) NOR (A NOR B)
AB  = (A NOR A) NOR (B NOR B)
```

## Antes de desenhar portas

```text
1. Simplifique.
2. Escolha soma de produtos para NAND.
3. Escolha produto de somas para NOR.
4. Use DeMorgan para conferir a implementação.
```

---

# 29. Plano de estudo para esta aula

| Etapa | Tempo | Atividade |
|---|---:|---|
| Revisão da aula de álgebra | 15 min | Relembrar complemento, distributiva e absorção |
| DeMorgan | 35 min | Reescrever expressões negadas e conferir tabelas |
| Dualidade | 20 min | Montar pares de leis duais |
| NAND e NOR | 45 min | Refazer as implementações de NOT, AND e OR |
| Transformações completas | 35 min | Converter funções para NAND–NAND e NOR–NOR |
| Exercícios | 45 min | Resolver a lista desta aula |
| Correção | 15 min | Registrar erros de negação e escolha de forma |

Flashcards recomendados:

1. Quais são as duas leis de DeMorgan?
2. O que deve trocar ao empurrar um NOT para dentro dos parênteses?
3. Como aplicar DeMorgan em `(A+BC)'`?
4. O que se troca para obter a expressão dual?
5. Dual é o mesmo que complemento?
6. Como obter NOT usando apenas NAND?
7. Como obter OR usando apenas NAND?
8. Como obter AND usando apenas NOR?
9. Qual forma favorece NAND–NAND?
10. Qual forma favorece NOR–NOR?

---

# 30. Conexão com os próximos tópicos

Depois desta aula, você já tem as ferramentas para:

```text
transformar, simplificar e implementar funções booleanas
```

Os próximos assuntos do cronograma aprofundam esse processo:

```text
mintermos e maxtermos
soma de produtos e produto de somas
mapas de Karnaugh
síntese de circuitos combinacionais
```

Quando você aprender Karnaugh, ele produzirá expressões reduzidas.  
O conteúdo de hoje permitirá pegar essas expressões reduzidas e convertê-las em circuitos usando:

```text
AND/OR/NOT
somente NAND
somente NOR
```
