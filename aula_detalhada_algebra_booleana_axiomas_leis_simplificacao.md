# Aula Detalhada — Álgebra Booleana: Axiomas e Leis de Simplificação

**Tema do dia:** Álgebra booleana  
**Data do cronograma:** 26/05 — Terça-feira  
**Objetivo:** entender como manipular expressões lógicas usando axiomas e leis, reconhecer equivalências e simplificar circuitos sem alterar seu comportamento.

---

## 1. Onde esta aula entra no estudo?

Na aula anterior, você estudou portas lógicas:

```text
NOT, AND, OR, NAND, NOR, XOR e XNOR
```

Agora a pergunta muda.

Antes:

```text
Qual é a saída desta porta?
```

Agora:

```text
Como posso transformar uma expressão lógica em outra equivalente e mais simples?
```

Exemplo:

```text
Y = A + A·B
```

Essa expressão parece precisar de:

```text
1 porta AND
1 porta OR
```

Mas, pela álgebra booleana:

```text
A + A·B = A
```

Então todo o circuito pode ser substituído apenas pelo fio de `A`.

Essa é a importância da álgebra booleana:

> Ela permite simplificar funções lógicas e, consequentemente, construir circuitos menores, mais rápidos e com menor consumo.

---

# 2. O que é Álgebra Booleana?

Álgebra booleana é um sistema matemático em que as variáveis assumem apenas dois valores:

```text
0 ou 1
```

Em lógica digital:

```text
0 = falso / nível baixo
1 = verdadeiro / nível alto
```

As operações principais são:

| Operação | Nome | Notação usada nesta aula | Porta correspondente |
|---|---|---|---|
| Negação | NOT | `A'` | NOT |
| Produto lógico | AND | `A·B` ou `AB` | AND |
| Soma lógica | OR | `A + B` | OR |

Exemplos:

```text
A'      = NOT A
A·B     = A AND B
A + B   = A OR B
```

Uma função booleana combina essas operações:

```text
Y = A'·B + A·C
```

Leia assim:

```text
Y = (NOT A AND B) OR (A AND C)
```

---

# 3. Cuidado: não é aritmética comum

Os símbolos `+` e `·` lembram soma e multiplicação, mas aqui representam operações lógicas.

## 3.1 Soma booleana é OR

| A | B | A + B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

Observe:

```text
1 + 1 = 1
```

Isso é correto em álgebra booleana, porque:

```text
verdadeiro OR verdadeiro = verdadeiro
```

---

## 3.2 Produto booleano é AND

| A | B | A·B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Aqui:

```text
1·1 = 1
```

porque:

```text
verdadeiro AND verdadeiro = verdadeiro
```

---

## 3.3 Negação é NOT

| A | A' |
|---|---|
| 0 | 1 |
| 1 | 0 |

```text
0' = 1
1' = 0
```

---

# 4. Notação e precedência

Nesta aula, usaremos principalmente:

```text
A' = NOT A
AB = A·B = A AND B
A+B = A OR B
```

Alguns livros escrevem a negação com uma barra sobre a variável:

```text
A̅
```

Nesta aula:

```text
A' e A̅ significam a mesma coisa.
```

## 4.1 Ordem das operações

A precedência normalmente é:

```text
1. NOT
2. AND
3. OR
```

Exemplo:

```text
Y = A + B'C
```

Significa:

```text
Y = A OR ((NOT B) AND C)
```

Passos:

```text
1. Calcule B'.
2. Calcule B'·C.
3. Calcule A + B'·C.
```

Se desejar outra ordem, use parênteses:

```text
(A + B')·C
```

é diferente de:

```text
A + B'·C
```

---

# 5. O que são axiomas e leis?

Um **axioma** é uma regra básica aceita como ponto de partida do sistema.

Uma **lei** ou **teorema** é uma equivalência que pode ser usada para transformar expressões. Dependendo do livro, algumas propriedades podem ser apresentadas como axiomas e outras como teoremas derivados.

Para estudar circuitos digitais, o mais importante é saber:

```text
1. O que cada lei diz.
2. Quando ela pode ser aplicada.
3. Como verificar que a expressão não mudou de comportamento.
```

## 5.1 Universo booleano

As variáveis pertencem ao conjunto:

```text
B = {0, 1}
```

Se `A` e `B` são booleanos, então:

```text
A + B também é 0 ou 1
A·B também é 0 ou 1
A' também é 0 ou 1
```

Isso é chamado de **fechamento**: operar valores booleanos produz outro valor booleano.

## 5.2 Ideias fundamentais

| Ideia | Forma essencial |
|---|---|
| Existem dois valores | `0` e `1` |
| Há operações OR e AND | `+` e `·` |
| Cada valor tem complemento | `A'` |
| Há elementos neutros | `A+0=A` e `A·1=A` |
| A ordem pode não importar | leis comutativas |
| Termos podem ser distribuídos | leis distributivas |

As próximas seções detalham as leis que você precisa dominar.

---

# 6. Lei da Identidade

A lei da identidade também é chamada de lei do **elemento neutro**.

Ela diz que existem valores que não alteram a variável.

## 6.1 Identidade do OR

```text
A + 0 = A
```

Interpretação:

```text
A OR falso = A
```

Se um alarme dispara quando `A` ocorre **ou** quando uma condição que nunca ocorre (`0`) ocorre, o resultado depende apenas de `A`.

Tabela-verdade:

| A | A + 0 | Igual a A? |
|---|---|---|
| 0 | 0 | Sim |
| 1 | 1 | Sim |

---

## 6.2 Identidade do AND

```text
A·1 = A
```

Interpretação:

```text
A AND verdadeiro = A
```

Se um sinal passa por uma condição sempre habilitada (`1`), ele continua igual.

Tabela-verdade:

| A | A·1 | Igual a A? |
|---|---|---|
| 0 | 0 | Sim |
| 1 | 1 | Sim |

---

## 6.3 Como reconhecer em simplificações

Exemplo 1:

```text
Y = B + 0
Y = B
```

Exemplo 2:

```text
Y = A·C·1
Y = A·C
```

O `1` em uma cadeia de AND não acrescenta nenhuma condição.

---

# 7. Lei do Complemento

O complemento de uma variável é seu valor oposto:

```text
Se A = 0, então A' = 1.
Se A = 1, então A' = 0.
```

## 7.1 OR com o complemento

```text
A + A' = 1
```

Uma variável ou seu contrário sempre cobre todos os casos possíveis.

```text
A é verdadeiro OU A é falso = sempre verdadeiro
```

Tabela-verdade:

| A | A' | A + A' |
|---|---|---|
| 0 | 1 | 1 |
| 1 | 0 | 1 |

---

## 7.2 AND com o complemento

```text
A·A' = 0
```

Uma variável não pode ser verdadeira e falsa ao mesmo tempo.

```text
A é verdadeiro E A é falso = impossível
```

Tabela-verdade:

| A | A' | A·A' |
|---|---|---|
| 0 | 1 | 0 |
| 1 | 0 | 0 |

---

## 7.3 Dupla negação

Se invertermos uma variável duas vezes, voltamos ao original:

```text
(A')' = A
```

Exemplo:

```text
Se A = 0:
A' = 1
(A')' = 0
```

Logo:

```text
(A')' = A
```

---

## 7.4 Exemplo de simplificação com complemento

```text
Y = B·(A + A')
```

Como:

```text
A + A' = 1
```

então:

```text
Y = B·1
```

Pela identidade:

```text
Y = B
```

---

# 8. Leis de Dominação e Idempotência

Embora o roteiro destaque identidade e complemento, estas duas leis aparecem o tempo inteiro ao simplificar expressões.

## 8.1 Dominação, ou elemento anulador

```text
A + 1 = 1
A·0 = 0
```

Interpretação:

```text
A OR verdadeiro = sempre verdadeiro
A AND falso = sempre falso
```

Tabela:

| A | A + 1 | A·0 |
|---|---|---|
| 0 | 1 | 0 |
| 1 | 1 | 0 |

Exemplos:

```text
X + 1 = 1
P·Q·0 = 0
```

---

## 8.2 Idempotência

Repetir a mesma condição não muda o resultado:

```text
A + A = A
A·A = A
```

Interpretação:

```text
A OR A = A
A AND A = A
```

Tabela:

| A | A + A | A·A |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 1 | 1 |

Exemplos:

```text
Y = A + B + A
Y = A + B
```

```text
Z = C·C·D
Z = C·D
```

---

# 9. Lei Comutativa

A lei comutativa diz que a ordem das variáveis pode ser trocada em uma operação AND ou OR.

## 9.1 OR comutativo

```text
A + B = B + A
```

Exemplo:

```text
porta aberta OU botão pressionado
```

tem o mesmo resultado que:

```text
botão pressionado OU porta aberta
```

---

## 9.2 AND comutativo

```text
A·B = B·A
```

Exemplo:

```text
cartão válido E senha correta
```

tem o mesmo resultado lógico que:

```text
senha correta E cartão válido
```

---

## 9.3 Verificação por tabela-verdade

| A | B | A + B | B + A | A·B | B·A |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 | 1 |

As colunas correspondentes são iguais, portanto as expressões são equivalentes.

---

## 9.4 Para que serve na simplificação?

A comutativa permite reorganizar os termos para enxergar padrões.

Exemplo:

```text
Y = A·B + C + B·A
```

Como:

```text
B·A = A·B
```

temos:

```text
Y = A·B + C + A·B
```

Pela idempotência:

```text
Y = A·B + C
```

---

# 10. Lei Associativa

A lei associativa diz que, quando só há ORs ou só há ANDs, podemos mudar o agrupamento sem mudar o resultado.

## 10.1 OR associativo

```text
(A + B) + C = A + (B + C)
```

Por isso também podemos escrever simplesmente:

```text
A + B + C
```

---

## 10.2 AND associativo

```text
(A·B)·C = A·(B·C)
```

Por isso também podemos escrever:

```text
A·B·C
```

---

## 10.3 Exemplo prático

Considere:

```text
Y = (A + B) + A'
```

Pela associativa:

```text
Y = A + (B + A')
```

Pela comutativa, podemos colocar `A` junto de `A'`:

```text
Y = (A + A') + B
```

Pelo complemento:

```text
Y = 1 + B
```

Pela dominação:

```text
Y = 1
```

Ou seja, essa saída fica sempre em nível alto.

---

## 10.4 Limite importante

Você não pode alterar o agrupamento misturando AND e OR sem usar uma lei apropriada.

Em geral:

```text
(A + B)·C
```

não é igual a:

```text
A + (B·C)
```

Exemplo com:

```text
A = 1, B = 0, C = 0
```

Primeira expressão:

```text
(1 + 0)·0 = 1·0 = 0
```

Segunda expressão:

```text
1 + (0·0) = 1 + 0 = 1
```

Como deram resultados diferentes, não são equivalentes.

---

# 11. Lei Distributiva

A distributiva é uma das leis mais úteis para fatorar ou expandir expressões.

Na álgebra booleana, existem duas formas importantes.

## 11.1 AND distribuindo sobre OR

```text
A·(B + C) = A·B + A·C
```

Também pode ser escrita sem os pontos:

```text
A(B + C) = AB + AC
```

É parecida com a distributiva da álgebra comum.

### Exemplo

```text
Y = X·(A + B)
```

Expandindo:

```text
Y = X·A + X·B
```

Ou no sentido inverso, fatorando:

```text
XA + XB = X(A + B)
```

---

## 11.2 OR distribuindo sobre AND

Esta é a forma que costuma surpreender no início:

```text
A + B·C = (A + B)·(A + C)
```

Na álgebra comum, essa forma não seria válida. Na álgebra booleana, ela é válida.

### Verificação por tabela-verdade

| A | B | C | B·C | A + B·C | A + B | A + C | (A+B)·(A+C) |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

As duas últimas colunas são iguais:

```text
A + B·C = (A+B)·(A+C)
```

---

## 11.3 Como escolher entre expandir e fatorar?

Você expande quando isso cria complementos, identidades ou absorções.

Exemplo:

```text
Y = A(B + B')
```

Não é necessário expandir, pois o complemento já aparece:

```text
B + B' = 1
Y = A·1 = A
```

Agora observe:

```text
Y = AB + AB'
```

Neste caso, fatorar ajuda:

```text
Y = A(B + B')
Y = A·1
Y = A
```

---

# 12. Lei da Absorção

A absorção elimina uma parte da expressão porque uma condição mais abrangente já cobre o caso adicional.

## 12.1 Primeira forma

```text
A + A·B = A
```

Interpretação:

```text
Se A já torna a saída 1, adicionar o caso A AND B não muda nada.
```

Pense assim:

```text
A·B só pode ser 1 quando A já é 1.
```

Portanto, todos os casos cobertos por `A·B` já estão cobertos por `A`.

### Tabela-verdade

| A | B | A·B | A + A·B | A |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

As duas últimas colunas são iguais:

```text
A + A·B = A
```

---

## 12.2 Segunda forma

```text
A·(A + B) = A
```

Interpretação:

```text
Para A·(A+B) ser 1, A obrigatoriamente já precisa ser 1.
Quando A é 1, (A+B) também será 1.
```

### Tabela-verdade

| A | B | A + B | A·(A+B) | A |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

Logo:

```text
A·(A + B) = A
```

---

## 12.3 Demonstrando absorção pelas outras leis

Partindo de:

```text
A + A·B
```

Escreva `A` como `A·1`, usando a identidade:

```text
A + A·B = A·1 + A·B
```

Agora fatore `A`:

```text
A·1 + A·B = A(1+B)
```

Pela dominação:

```text
1+B = 1
```

Logo:

```text
A(1+B) = A·1 = A
```

Para a segunda forma, distribua e aplique a forma que acabamos de demonstrar:

```text
A(A+B) = A·A + A·B
       = A + A·B
       = A
```

Na prática, não é necessário refazer a demonstração toda vez. Memorize:

```text
A + AB = A
A(A+B) = A
```

---

# 13. Resumo das leis principais

| Lei | OR | AND |
|---|---|---|
| Identidade | `A + 0 = A` | `A·1 = A` |
| Dominação | `A + 1 = 1` | `A·0 = 0` |
| Idempotência | `A + A = A` | `A·A = A` |
| Complemento | `A + A' = 1` | `A·A' = 0` |
| Comutativa | `A+B = B+A` | `A·B = B·A` |
| Associativa | `(A+B)+C = A+(B+C)` | `(A·B)·C = A·(B·C)` |
| Distributiva | `A+B·C = (A+B)(A+C)` | `A(B+C) = AB+AC` |
| Absorção | `A + A·B = A` | `A(A+B) = A` |

Além delas:

```text
0' = 1
1' = 0
(A')' = A
```

---

# 14. O princípio de pares: OR e AND

Observe que muitas leis aparecem em pares:

```text
A + 0 = A        A·1 = A
A + 1 = 1        A·0 = 0
A + A' = 1       A·A' = 0
A + A = A        A·A = A
```

Há uma simetria:

```text
OR (+) troca com AND (·)
0 troca com 1
```

Essa observação prepara o estudo de **dualidade**, que está planejado junto com DeMorgan para a próxima aula.

Por enquanto, use-a como técnica de memorização: se você lembra de uma forma, procure lembrar do seu par.

---

# 15. Como provar que duas expressões são equivalentes?

Duas expressões booleanas são equivalentes quando produzem a mesma saída para todas as combinações das entradas.

Existem duas maneiras principais de verificar isso.

## 15.1 Usar leis algébricas

Exemplo:

```text
Y = AB + AB'
```

Fatore `A`:

```text
Y = A(B + B')
```

Use complemento:

```text
Y = A·1
```

Use identidade:

```text
Y = A
```

Portanto:

```text
AB + AB' = A
```

---

## 15.2 Usar tabela-verdade

Para confirmar:

| A | B | B' | AB | AB' | AB + AB' | A |
|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 1 | 1 |

As colunas `AB + AB'` e `A` são iguais.

---

## 15.3 Quando usar cada método?

| Situação | Método recomendado |
|---|---|
| Expressão curta e lei evidente | Simplificação algébrica |
| Você desconfia da resposta | Tabela-verdade para conferir |
| Questão pede equivalência | Pode usar leis ou tabela |
| Muitas variáveis | Leis; tabela cresce rapidamente |

Lembre:

```text
n variáveis geram 2^n linhas na tabela-verdade.
```

---

# 16. Simplificações passo a passo

## 16.1 Exemplo 1 — identidade e dominação

Simplifique:

```text
Y = A·1 + B·0
```

Pela identidade:

```text
A·1 = A
```

Pela dominação:

```text
B·0 = 0
```

Então:

```text
Y = A + 0
```

Pela identidade:

```text
Y = A
```

---

## 16.2 Exemplo 2 — complemento

Simplifique:

```text
Y = A·(B + B')
```

Pelo complemento:

```text
B + B' = 1
```

Então:

```text
Y = A·1
```

Pela identidade:

```text
Y = A
```

---

## 16.3 Exemplo 3 — fatoração e complemento

Simplifique:

```text
Y = A·B + A·B'
```

Os dois termos têm `A` em comum. Fatore:

```text
Y = A(B + B')
```

Pelo complemento:

```text
Y = A·1
```

Pela identidade:

```text
Y = A
```

Interpretação:

```text
Se A é 1, não importa se B é 0 ou 1: um dos termos será ativado.
```

---

## 16.4 Exemplo 4 — absorção direta

Simplifique:

```text
Y = C + C·D
```

O padrão é:

```text
A + A·B = A
```

Substituindo:

```text
A = C
B = D
```

Logo:

```text
Y = C
```

---

## 16.5 Exemplo 5 — organizando termos antes de simplificar

Simplifique:

```text
Y = A·B + A' + B·A
```

Use comutativa:

```text
B·A = A·B
```

Então:

```text
Y = A·B + A' + A·B
```

Pela idempotência:

```text
A·B + A·B = A·B
```

Logo:

```text
Y = A' + A·B
```

Agora use a distributiva na forma:

```text
X + YZ = (X+Y)(X+Z)
```

Com `X=A'`, `Y=A` e `Z=B`:

```text
Y = (A' + A)(A' + B)
```

Pelo complemento:

```text
Y = 1·(A' + B)
```

Pela identidade:

```text
Y = A' + B
```

---

## 16.6 Exemplo 6 — produto de somas

Simplifique:

```text
Y = (A + B)(A + B')
```

Use a distributiva na direção inversa:

```text
(X+Y)(X+Z) = X + YZ
```

Com:

```text
X = A
Y = B
Z = B'
```

Temos:

```text
Y = A + B·B'
```

Pelo complemento:

```text
B·B' = 0
```

Logo:

```text
Y = A + 0
```

Pela identidade:

```text
Y = A
```

---

## 16.7 Exemplo 7 — simplificação com três variáveis

Simplifique:

```text
Y = AB + AB' + AC
```

Agrupe os dois primeiros termos:

```text
Y = (AB + AB') + AC
```

Fatore `A`:

```text
Y = A(B+B') + AC
```

Complemento:

```text
Y = A·1 + AC
```

Identidade:

```text
Y = A + AC
```

Absorção:

```text
Y = A
```

---

# 17. Do circuito para a simplificação

Considere a função:

```text
Y = A·B + A·B'
```

## 17.1 Circuito antes da simplificação

Ele precisaria de:

```text
1 porta NOT para gerar B'
2 portas AND para gerar AB e AB'
1 porta OR para somar os termos
```

Representação em blocos:

```text
B → NOT → B'
A, B  → AND → AB
A, B' → AND → AB'
AB, AB' → OR → Y
```

## 17.2 Simplificando a expressão

```text
Y = AB + AB'
Y = A(B+B')
Y = A·1
Y = A
```

## 17.3 Circuito depois da simplificação

```text
A → Y
```

Não importa o valor de `B`: a saída é exatamente `A`.

Esse é o ganho prático da álgebra booleana:

| Antes | Depois |
|---|---|
| NOT + duas AND + OR | Nenhuma porta lógica necessária |
| Mais atraso | Menos atraso |
| Mais área e consumo | Menos área e consumo |

---

# 18. Estratégia para simplificar uma expressão em prova

Ao receber uma expressão, siga esta ordem mental:

## Passo 1 — procure constantes

```text
A + 0 = A
A·1 = A
A + 1 = 1
A·0 = 0
```

## Passo 2 — procure variáveis repetidas

```text
A + A = A
A·A = A
```

## Passo 3 — procure complementos

```text
A + A' = 1
A·A' = 0
```

## Passo 4 — procure absorção

```text
A + AB = A
A(A+B) = A
```

## Passo 5 — reorganize termos

Use:

```text
comutativa e associativa
```

para colocar padrões próximos uns dos outros.

## Passo 6 — fatore ou distribua

Procure criar:

```text
B+B'
BB'
A+AB
A(A+B)
```

## Passo 7 — confira

Se a expressão for pequena e houver tempo:

```text
monte uma tabela-verdade rápida
```

---

# 19. Erros comuns em prova

## Erro 1: tratar OR como soma aritmética

Errado em álgebra booleana:

```text
1 + 1 = 2
```

Correto:

```text
1 + 1 = 1
```

---

## Erro 2: confundir identidade com dominação

Identidade:

```text
A + 0 = A
A·1 = A
```

Dominação:

```text
A + 1 = 1
A·0 = 0
```

Uma forma de lembrar:

```text
No OR, o 1 domina.
No AND, o 0 domina.
```

---

## Erro 3: achar que `A + AB` depende de B

```text
A + AB = A
```

Quando `A=0`, os dois termos valem 0.  
Quando `A=1`, o primeiro termo já coloca a saída em 1.

Logo, `B` não muda a saída.

---

## Erro 4: distribuir como na álgebra comum e esquecer a segunda forma

Você deve saber as duas:

```text
A(B+C) = AB+AC
A+BC = (A+B)(A+C)
```

A segunda é específica e muito útil em lógica booleana.

---

## Erro 5: usar associativa misturando operações

Correto:

```text
(A+B)+C = A+(B+C)
(AB)C = A(BC)
```

Não conclua que:

```text
(A+B)C = A+(BC)
```

Essa transformação é falsa.

---

## Erro 6: simplificar sem registrar qual lei foi usada

Durante o treino, escreva a lei ao lado de cada passo:

```text
AB + AB' = A(B+B')      distributiva/fatoração
          = A·1         complemento
          = A           identidade
```

Isso torna seus erros fáceis de identificar.

---

# 20. Exercícios resolvidos

## Exercício resolvido 1

Simplifique:

```text
F = X + X·Y
```

Há absorção:

```text
X + X·Y = X
```

Resposta:

```text
F = X
```

---

## Exercício resolvido 2

Simplifique:

```text
F = M·N + M·N'
```

Fatore `M`:

```text
F = M(N + N')
```

Complemento:

```text
F = M·1
```

Identidade:

```text
F = M
```

---

## Exercício resolvido 3

Simplifique:

```text
F = (P + Q)(P + Q')
```

Use:

```text
(A+B)(A+C) = A+BC
```

Então:

```text
F = P + Q·Q'
F = P + 0
F = P
```

---

## Exercício resolvido 4

Simplifique:

```text
F = A'B + AB + B
```

Agrupe os dois primeiros termos:

```text
F = (A'B + AB) + B
```

Fatore `B`:

```text
F = B(A' + A) + B
```

Complemento:

```text
F = B·1 + B
```

Identidade:

```text
F = B + B
```

Idempotência:

```text
F = B
```

Também seria possível perceber diretamente que o termo `+ B` absorve `A'B` e `AB`.

---

# 21. Exercícios para fazer

## Parte A — reconheça a lei

Para cada equivalência, escreva o nome da lei principal.

1. `A + 0 = A`
2. `A·A' = 0`
3. `X + X·Y = X`
4. `P·Q = Q·P`
5. `(A+B)+C = A+(B+C)`
6. `M(N+P) = MN+MP`
7. `Z + Z = Z`
8. `R·0 = 0`

---

## Parte B — simplifique

9. `Y = A + 0`
10. `Y = B·1`
11. `Y = C + 1`
12. `Y = D·0`
13. `Y = E + E`
14. `Y = F·F`
15. `Y = G + G'`
16. `Y = H·H'`
17. `Y = A + A·B`
18. `Y = C(C + D)`
19. `Y = XY + XY'`
20. `Y = (M+N)(M+N')`
21. `Y = A·1 + B·0`
22. `Y = P(Q+Q') + P·R`
23. `Y = AB + AB' + AC`
24. `Y = X + X'Y`

---

## Parte C — verifique ou interprete

25. Monte a tabela-verdade de `Y = A + A·B` e compare com a coluna `A`.
26. Explique em palavras por que `A·A' = 0`.
27. A expressão `(A+B)·C` é sempre igual a `A+B·C`? Dê um conjunto de valores que comprove sua resposta.
28. Quantas linhas são necessárias para verificar por tabela-verdade uma função com três variáveis?
29. Um circuito implementa `Y = S·T + S·T'`. Qual é a expressão simplificada?
30. Por que simplificar uma expressão lógica pode melhorar um circuito digital?

---

# 22. Gabarito

## Parte A

1. Identidade.
2. Complemento.
3. Absorção.
4. Comutativa.
5. Associativa.
6. Distributiva.
7. Idempotência.
8. Dominação, ou elemento anulador.

---

## Parte B

9.

```text
A + 0 = A
```

10.

```text
B·1 = B
```

11.

```text
C + 1 = 1
```

12.

```text
D·0 = 0
```

13.

```text
E + E = E
```

14.

```text
F·F = F
```

15.

```text
G + G' = 1
```

16.

```text
H·H' = 0
```

17.

```text
A + A·B = A
```

18.

```text
C(C+D) = C
```

19.

```text
XY + XY' = X(Y+Y')
           = X·1
           = X
```

20.

```text
(M+N)(M+N') = M + NN'
             = M + 0
             = M
```

21.

```text
A·1 + B·0 = A + 0
           = A
```

22.

```text
P(Q+Q') + PR = P·1 + PR
              = P + PR
              = P
```

23.

```text
AB + AB' + AC = A(B+B') + AC
               = A + AC
               = A
```

24.

```text
X + X'Y = (X+X')(X+Y)
         = 1·(X+Y)
         = X+Y
```

---

## Parte C

25.

| A | B | A·B | A + A·B | A |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

As colunas `A + A·B` e `A` são iguais, confirmando a absorção.

26. `A·A'` exige que `A` e seu contrário sejam verdadeiros ao mesmo tempo. Isso nunca acontece, portanto o resultado é sempre `0`.

27. Não. Por exemplo, para `A=1`, `B=0` e `C=0`:

```text
(A+B)·C = (1+0)·0 = 0
A+B·C   = 1+0·0   = 1
```

28.

```text
2^3 = 8 linhas
```

29.

```text
Y = S·T + S·T'
Y = S(T+T')
Y = S
```

30. Uma expressão menor geralmente utiliza menos portas e menos níveis de lógica, podendo reduzir área, atraso de propagação e consumo.

---

# 23. O que memorizar

## Significado das operações

```text
+  = OR
·  = AND
'  = NOT
```

```text
NOT > AND > OR
```

## Leis fundamentais

```text
Identidade:
A + 0 = A
A·1 = A
```

```text
Dominação:
A + 1 = 1
A·0 = 0
```

```text
Complemento:
A + A' = 1
A·A' = 0
(A')' = A
```

```text
Idempotência:
A + A = A
A·A = A
```

```text
Comutativa:
A + B = B + A
A·B = B·A
```

```text
Associativa:
(A+B)+C = A+(B+C)
(A·B)·C = A·(B·C)
```

```text
Distributiva:
A(B+C) = AB+AC
A+BC = (A+B)(A+C)
```

```text
Absorção:
A + AB = A
A(A+B) = A
```

## Padrões muito cobrados

```text
AB + AB' = A
(A+B)(A+B') = A
A + A'B = A + B
```

---

# 24. Plano de estudo para esta aula

| Etapa | Tempo | Atividade |
|---|---:|---|
| Revisão de portas | 15 min | Relembrar AND, OR e NOT |
| Leitura da teoria | 45 min | Ler as leis e refazer as tabelas |
| Simplificações guiadas | 35 min | Refazer os exemplos sem olhar |
| Exercícios | 45 min | Resolver as 30 questões |
| Correção ativa | 20 min | Anotar as leis que confundiu |
| Revisão final | 10 min | Memorizar a tabela de leis |

Flashcards recomendados:

1. Qual é a identidade do OR e do AND?
2. Qual é a dominação do OR e do AND?
3. Qual é a lei do complemento?
4. O que significa idempotência?
5. Qual a diferença entre comutativa e associativa?
6. Quais são as duas distributivas booleanas?
7. Como reconhecer absorção?
8. Por que `AB + AB' = A`?
9. Por que `(A+B)(A+B') = A`?
10. Como verificar se duas expressões são equivalentes?

---

# 25. Conexão com a próxima aula

Nesta aula, você aprendeu a reorganizar e simplificar expressões usando:

```text
identidade, complemento, dominação, idempotência,
comutativa, associativa, distributiva e absorção
```

Na próxima aula do cronograma, o foco será:

```text
Teorema de DeMorgan
Dualidade
Transformação para implementações usando NAND e NOR
```

O ponto central para chegar preparado é dominar os pares:

```text
A + A' = 1
A·A' = 0
A + AB = A
A(A+B) = A
AB + AB' = A
```
