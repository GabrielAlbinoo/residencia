# Aula Detalhada — Portas Lógicas e Operações Booleanas

## 1. O que são portas lógicas?

Portas lógicas são blocos básicos de circuitos digitais.

Elas recebem uma ou mais entradas binárias e produzem uma saída binária.

As entradas e saídas normalmente são representadas por:

```text
0 = falso / nível baixo / desligado
1 = verdadeiro / nível alto / ligado
```

Exemplo:

```text
A = 1
B = 0
```

A porta lógica processa esses valores e gera uma saída:

```text
Y = alguma função de A e B
```

---

# 2. Variáveis booleanas

Na álgebra booleana, usamos letras para representar sinais digitais:

```text
A, B, C, X, Y, Z
```

Cada variável pode valer:

```text
0 ou 1
```

Exemplo:

```text
A = 1
B = 0
```

Uma expressão booleana pode ser:

```text
Y = A · B
```

Isso significa:

```text
Y = A AND B
```

---

# 3. Principais símbolos

| Símbolo | Significado |
|---|---|
| `·` | AND |
| `+` | OR |
| `A̅` | NOT A |
| `(A + B)̅` | NOT do resultado de `A OR B` |
| `(A · B)̅` | NOT do resultado de `A AND B` |
| `⊕` | XOR |
| `⊙` | XNOR, às vezes |
| `1` | verdadeiro / alto |
| `0` | falso / baixo |

---

# 4. NOT

## 4.1 Ideia

A porta **NOT** inverte o sinal.

```text
0 vira 1
1 vira 0
```

## 4.2 Equação

```text
Y = A̅
```

ou:

```text
Y = NOT A
```

## 4.3 Tabela-verdade

| A | Y = A̅ |
|---|---|
| 0 | 1 |
| 1 | 0 |

---

# 5. AND

## 5.1 Ideia

A porta **AND** só dá 1 quando todas as entradas são 1.

## 5.2 Equação

```text
Y = A · B
```

Também pode aparecer como:

```text
Y = AB
```

## 5.3 Tabela-verdade

| A | B | Y = A · B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Resumo:

```text
AND = todas as entradas precisam ser 1
```

---

# 6. OR

## 6.1 Ideia

A porta **OR** dá 1 quando pelo menos uma entrada é 1.

## 6.2 Equação

```text
Y = A + B
```

## 6.3 Tabela-verdade

| A | B | Y = A + B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

Resumo:

```text
OR = pelo menos uma entrada precisa ser 1
```

---

# 7. NAND

## 7.1 Ideia

A porta **NAND** é o contrário da AND.

```text
NAND = NOT AND
```

Ela só dá 0 quando todas as entradas são 1.

## 7.2 Equação

```text
Y = (A · B)̅
```

## 7.3 Tabela-verdade

| A | B | A · B | Y = (A · B)̅ |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |

Resumo:

```text
NAND dá 0 apenas em 1,1.
```

---

# 8. NOR

## 8.1 Ideia

A porta **NOR** é o contrário da OR.

```text
NOR = NOT OR
```

Ela só dá 1 quando nenhuma entrada é 1.

## 8.2 Equação

```text
Y = (A + B)̅
```

## 8.3 Tabela-verdade

| A | B | A + B | Y = (A + B)̅ |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 |

Resumo:

```text
NOR dá 1 apenas em 0,0.
```

---

# 9. XOR

## 9.1 Ideia

A porta **XOR** dá 1 quando as entradas são diferentes.

```text
XOR = ou exclusivo
```

## 9.2 Equação

```text
Y = A ⊕ B
```

Equação equivalente usando AND, OR e NOT:

```text
A ⊕ B = A̅B + AB̅
```

Lê-se:

```text
A XOR B = (NOT A AND B) OR (A AND NOT B)
```

## 9.3 Tabela-verdade

| A | B | Y = A ⊕ B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Resumo:

```text
XOR dá 1 quando A e B são diferentes.
```

---

# 10. XNOR

## 10.1 Ideia

A porta **XNOR** é o contrário da XOR.

Ela dá 1 quando as entradas são iguais.

## 10.2 Equação

```text
Y = (A ⊕ B)̅
```

Também pode aparecer como:

```text
Y = A ⊙ B
```

Equação equivalente:

```text
A XNOR B = AB + A̅B̅
```

## 10.3 Tabela-verdade

| A | B | A ⊕ B | XNOR |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Resumo:

```text
XNOR dá 1 quando A e B são iguais.
```

---

# 11. Barra em cima

## 11.1 Barra em uma variável

```text
A̅
```

Significa:

```text
NOT A
```

Exemplo:

| A | A̅ |
|---|---|
| 0 | 1 |
| 1 | 0 |

---

## 11.2 Barra em uma expressão inteira

Quando a barra cobre uma expressão, o NOT vale para o resultado inteiro.

Exemplo:

```text
(A + B)̅
```

Significa:

```text
NOT(A OR B)
```

Isso é uma porta NOR.

Outro exemplo:

```text
(A · B)̅
```

Significa:

```text
NOT(A AND B)
```

Isso é uma porta NAND.

---

## 11.3 Cuidado importante

Estas expressões são diferentes:

```text
A̅ + B
```

e

```text
(A + B)̅
```

A primeira significa:

```text
(NOT A) OR B
```

A segunda significa:

```text
NOT(A OR B)
```

Tabela comparativa:

| A | B | A̅ + B | (A + B)̅ |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 |

---

# 12. Precedência das operações

Normalmente a ordem é:

```text
1. NOT
2. AND
3. OR
```

Exemplo:

```text
Y = A + B · C̅
```

Primeiro faz:

```text
C̅
```

Depois:

```text
B · C̅
```

Depois:

```text
A + (B · C̅)
```

Então:

```text
Y = A OR (B AND NOT C)
```

Não é:

```text
(A OR B) AND NOT C
```

Se quiser mudar a ordem, use parênteses.

---

# 13. Tabela-verdade

Tabela-verdade mostra o valor da saída para todas as combinações possíveis das entradas.

## 13.1 Quantas linhas tem a tabela?

Se a expressão tem `n` variáveis, a tabela tem:

```text
2ⁿ linhas
```

Exemplos:

| Variáveis | Linhas |
|---:|---:|
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |

---

## 13.2 Exemplo com duas variáveis

Expressão:

```text
Y = A · B̅
```

Tabela:

| A | B | B̅ | Y = A · B̅ |
|---|---|---|---|
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |

---

## 13.3 Exemplo com três variáveis

Expressão:

```text
Y = A · B + C
```

Pela precedência:

```text
Y = (A · B) + C
```

Tabela:

| A | B | C | A·B | Y = A·B + C |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

---

# 14. Formas equivalentes de XOR e XNOR

## 14.1 XOR

```text
A ⊕ B = A̅B + AB̅
```

Isso significa que a saída é 1 quando:

```text
A = 0 e B = 1
```

ou:

```text
A = 1 e B = 0
```

---

## 14.2 XNOR

```text
A XNOR B = AB + A̅B̅
```

Isso significa que a saída é 1 quando:

```text
A = 1 e B = 1
```

ou:

```text
A = 0 e B = 0
```

---

# 15. Leis básicas da álgebra booleana

Estas leis ajudam a simplificar expressões.

## 15.1 Identidade

```text
A + 0 = A
A · 1 = A
```

## 15.2 Dominação

```text
A + 1 = 1
A · 0 = 0
```

## 15.3 Complemento

```text
A + A̅ = 1
A · A̅ = 0
```

## 15.4 Idempotência

```text
A + A = A
A · A = A
```

## 15.5 Dupla negação

```text
(A̅)̅ = A
```

## 15.6 Comutativa

```text
A + B = B + A
A · B = B · A
```

## 15.7 Associativa

```text
(A + B) + C = A + (B + C)
(A · B) · C = A · (B · C)
```

## 15.8 Distributiva

```text
A · (B + C) = A·B + A·C
A + B·C = (A + B) · (A + C)
```

## 15.9 Absorção

```text
A + A·B = A
A · (A + B) = A
```

---

# 16. Teorema de DeMorgan

DeMorgan é muito importante.

## 16.1 Primeira lei

```text
(A · B)̅ = A̅ + B̅
```

O NOT de uma AND vira OR dos termos negados.

Interpretação:

```text
NOT(A AND B) = (NOT A) OR (NOT B)
```

Isso conecta NAND com OR de negados.

---

## 16.2 Segunda lei

```text
(A + B)̅ = A̅ · B̅
```

O NOT de uma OR vira AND dos termos negados.

Interpretação:

```text
NOT(A OR B) = (NOT A) AND (NOT B)
```

Isso conecta NOR com AND de negados.

---

## 16.3 Regra prática de DeMorgan

Quando a barra cobre uma expressão:

```text
1. Quebre a barra.
2. Inverta cada termo.
3. Troque AND por OR, ou OR por AND.
```

Exemplo:

```text
(A + B·C)̅
```

Aplicando DeMorgan:

```text
A̅ · (B·C)̅
```

Agora aplique novamente:

```text
A̅ · (B̅ + C̅)
```

Resultado:

```text
(A + B·C)̅ = A̅ · (B̅ + C̅)
```

---

# 17. NAND e NOR como portas universais

Uma porta é chamada universal quando consegue implementar qualquer função lógica.

As duas portas universais mais importantes são:

```text
NAND
```

e

```text
NOR
```

---

## 17.1 Implementando NOT com NAND

Use as duas entradas ligadas juntas:

```text
Y = (A · A)̅
```

Como:

```text
A · A = A
```

então:

```text
Y = A̅
```

Logo:

```text
NOT A = A NAND A
```

---

## 17.2 Implementando AND com NAND

Primeiro faça NAND:

```text
(A · B)̅
```

Depois inverta:

```text
((A · B)̅)̅ = A · B
```

Usando NAND:

```text
A AND B = (A NAND B) NAND (A NAND B)
```

---

## 17.3 Implementando OR com NAND

Pelo DeMorgan:

```text
A + B = (A̅ · B̅)̅
```

Então:

```text
A OR B = (A NAND A) NAND (B NAND B)
```

---

## 17.4 Implementando NOT com NOR

Use as duas entradas ligadas juntas:

```text
Y = (A + A)̅
```

Como:

```text
A + A = A
```

então:

```text
Y = A̅
```

Logo:

```text
NOT A = A NOR A
```

---

## 17.5 Implementando OR com NOR

Primeiro faça NOR:

```text
(A + B)̅
```

Depois inverta:

```text
((A + B)̅)̅ = A + B
```

Usando NOR:

```text
A OR B = (A NOR B) NOR (A NOR B)
```

---

## 17.6 Implementando AND com NOR

Pelo DeMorgan:

```text
A · B = (A̅ + B̅)̅
```

Então:

```text
A AND B = (A NOR A) NOR (B NOR B)
```

---

# 18. Como ler expressões booleanas

Exemplo:

```text
Y = A̅B + AC
```

Leia assim:

```text
Y = (NOT A AND B) OR (A AND C)
```

Outro exemplo:

```text
Y = (A + B)̅ · C
```

Leia assim:

```text
Y = NOT(A OR B) AND C
```

Outro exemplo:

```text
Y = A ⊕ B
```

Leia assim:

```text
Y = A XOR B
```

---

# 19. Como transformar expressão em circuito

Exemplo:

```text
Y = A̅B + C
```

Passos:

```text
1. Inverta A com uma NOT.
2. Faça A̅ AND B.
3. Faça OR com C.
```

Circuito lógico em blocos:

```text
A → NOT → A̅
A̅, B → AND → X
X, C → OR → Y
```

---

# 20. Como transformar circuito em expressão

Imagine um circuito:

```text
A e B entram em uma AND.
A saída dessa AND entra em uma OR com C.
```

Expressão:

```text
Y = A·B + C
```

Se depois da OR houver uma NOT:

```text
Y = (A·B + C)̅
```

---

# 21. Erros comuns em prova

## Erro 1: confundir NAND

Errado:

```text
NAND dá 1 só quando tudo é 0.
```

Correto:

```text
NAND dá 0 só quando tudo é 1.
```

---

## Erro 2: confundir NOR com XOR

NOR:

```text
Dá 1 só quando A=0 e B=0.
```

XOR:

```text
Dá 1 quando A e B são diferentes.
```

---

## Erro 3: esquecer a precedência

```text
A + B·C
```

é:

```text
A + (B·C)
```

não:

```text
(A + B)·C
```

---

## Erro 4: aplicar DeMorgan sem trocar operação

Errado:

```text
(A + B)̅ = A̅ + B̅
```

Correto:

```text
(A + B)̅ = A̅ · B̅
```

---

## Erro 5: achar que XOR é igual a OR

OR dá 1 em:

```text
01, 10, 11
```

XOR dá 1 apenas em:

```text
01, 10
```

---

# 22. Resumo das portas

| Porta | Equação | Quando dá 1 |
|---|---|---|
| NOT | `A̅` | Quando A = 0 |
| AND | `A·B` | Quando A = 1 e B = 1 |
| OR | `A+B` | Quando A = 1 ou B = 1 |
| NAND | `(A·B)̅` | Exceto quando A = 1 e B = 1 |
| NOR | `(A+B)̅` | Apenas quando A = 0 e B = 0 |
| XOR | `A⊕B` | Quando A e B são diferentes |
| XNOR | `(A⊕B)̅` | Quando A e B são iguais |

---

# 23. Exercícios rápidos

## Identificação

1. Qual porta é representada por `Y = A̅`?
2. Qual porta é representada por `Y = A·B`?
3. Qual porta é representada por `Y = A+B`?
4. Qual porta é representada por `Y = (A·B)̅`?
5. Qual porta é representada por `Y = (A+B)̅`?
6. Qual porta é representada por `Y = A⊕B`?

## Avaliação

Calcule o valor de `Y` para os casos abaixo.

7. `Y = A·B`, com `A=1`, `B=0`.
8. `Y = A+B`, com `A=1`, `B=0`.
9. `Y = (A·B)̅`, com `A=1`, `B=1`.
10. `Y = (A+B)̅`, com `A=0`, `B=0`.
11. `Y = A⊕B`, com `A=1`, `B=0`.
12. `Y = (A⊕B)̅`, com `A=1`, `B=1`.

## Expressões

13. Escreva `A XOR B` usando AND, OR e NOT.
14. Escreva `A XNOR B` usando AND, OR e NOT.
15. Simplifique `A + A`.
16. Simplifique `A · A`.
17. Simplifique `A + A̅`.
18. Simplifique `A · A̅`.
19. Simplifique `A + A·B`.
20. Aplique DeMorgan em `(A+B)̅`.
21. Aplique DeMorgan em `(A·B)̅`.
22. Aplique DeMorgan em `(A + B·C)̅`.

## Tabela-verdade

23. Monte a tabela-verdade de `Y = A·B̅`.
24. Monte a tabela-verdade de `Y = A+B̅`.
25. Monte a tabela-verdade de `Y = A⊕B`.

---

# 24. Gabarito

1. NOT
2. AND
3. OR
4. NAND
5. NOR
6. XOR
7. `0`
8. `1`
9. `0`
10. `1`
11. `1`
12. `1`
13. `A̅B + AB̅`
14. `AB + A̅B̅`
15. `A`
16. `A`
17. `1`
18. `0`
19. `A`
20. `A̅·B̅`
21. `A̅+B̅`
22. `A̅ · (B̅ + C̅)`

23.

| A | B | B̅ | Y |
|---|---|---|---|
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |

24.

| A | B | B̅ | Y |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |

25.

| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

---

# 25. O que memorizar

```text
AND = todas 1
OR = pelo menos uma 1
NOT = inverte
NAND = NOT AND
NOR = NOT OR
XOR = diferentes
XNOR = iguais
```

```text
(A·B)̅ = A̅ + B̅
(A+B)̅ = A̅ · B̅
```

```text
A⊕B = A̅B + AB̅
A XNOR B = AB + A̅B̅
```

```text
NOT > AND > OR
```

```text
NAND e NOR são portas universais
```
