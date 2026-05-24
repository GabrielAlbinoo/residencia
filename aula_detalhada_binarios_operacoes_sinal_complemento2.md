# Aula Detalhada — Números Binários, Operações, Sinal e Complemento de 2

## 1. O que significa estar em base 2?

No sistema decimal, usamos **10 símbolos**:

```text
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

Por isso ele é chamado de **base 10**.

No sistema binário, usamos apenas **2 símbolos**:

```text
0 e 1
```

Por isso ele é chamado de **base 2**.

Cada posição em um número binário representa uma potência de 2.

---

## 2. Pesos das posições em binário

Em decimal, o número `347` significa:

```text
3 centenas + 4 dezenas + 7 unidades
```

Ou seja:

```text
3×100 + 4×10 + 7×1
```

Em binário, a lógica é parecida, mas os pesos são potências de 2.

Da direita para a esquerda:

```text
... 128  64  32  16   8   4   2   1
```

Ou seja:

```text
2⁷  2⁶  2⁵  2⁴  2³  2²  2¹  2⁰
```

Exemplo:

```text
1011₂
```

Pesos:

```text
1   0   1   1
8   4   2   1
```

Cálculo:

```text
1×8 + 0×4 + 1×2 + 1×1 = 11
```

Então:

```text
1011₂ = 11₁₀
```

---

## 3. Convertendo binário para decimal

Passos:

```text
1. Escreva os pesos das posições.
2. Multiplique cada bit pelo seu peso.
3. Some os pesos onde o bit é 1.
```

Exemplo:

```text
110101₂
```

Pesos:

```text
1   1   0   1   0   1
32  16  8   4   2   1
```

Cálculo:

```text
1×32 + 1×16 + 0×8 + 1×4 + 0×2 + 1×1
= 32 + 16 + 4 + 1
= 53
```

Logo:

```text
110101₂ = 53₁₀
```

---

## 4. Convertendo decimal para binário

Existem dois métodos comuns.

---

### 4.1 Método das divisões por 2

Exemplo: converter `13` para binário.

Divida por 2 e anote os restos:

```text
13 ÷ 2 = 6, resto 1
6 ÷ 2 = 3, resto 0
3 ÷ 2 = 1, resto 1
1 ÷ 2 = 0, resto 1
```

Agora leia os restos de baixo para cima:

```text
1101
```

Então:

```text
13₁₀ = 1101₂
```

---

### 4.2 Método dos pesos

Exemplo: converter `45` para binário.

Pegue os pesos:

```text
32  16  8  4  2  1
```

Veja quais somam 45:

```text
45 = 32 + 8 + 4 + 1
```

Então:

```text
32  16  8  4  2  1
1   0   1  1  0  1
```

Logo:

```text
45₁₀ = 101101₂
```

---

## 5. Binário e hexadecimal

O hexadecimal usa 16 símbolos:

```text
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
```

Tabela:

| Decimal | Hex | Binário |
|---:|---|---|
| 0 | 0 | `0000` |
| 1 | 1 | `0001` |
| 2 | 2 | `0010` |
| 3 | 3 | `0011` |
| 4 | 4 | `0100` |
| 5 | 5 | `0101` |
| 6 | 6 | `0110` |
| 7 | 7 | `0111` |
| 8 | 8 | `1000` |
| 9 | 9 | `1001` |
| 10 | A | `1010` |
| 11 | B | `1011` |
| 12 | C | `1100` |
| 13 | D | `1101` |
| 14 | E | `1110` |
| 15 | F | `1111` |

A regra é:

```text
1 dígito hexadecimal = 4 bits
```

Exemplo:

```text
2F₁₆
```

Converta cada dígito:

```text
2 = 0010
F = 1111
```

Logo:

```text
2F₁₆ = 0010 1111₂
```

Outro exemplo:

```text
1011 0110₂
```

Separe em grupos de 4:

```text
1011 = B
0110 = 6
```

Logo:

```text
1011 0110₂ = B6₁₆
```

---

# 6. Soma binária

A soma binária funciona como a soma decimal, mas usando base 2.

## 6.1 Regras básicas

| Operação | Resultado |
|---|---|
| `0 + 0` | `0` |
| `0 + 1` | `1` |
| `1 + 0` | `1` |
| `1 + 1` | `10` |

O caso mais importante é:

```text
1 + 1 = 10₂
```

Isso significa:

```text
escreve 0 e vai 1
```

---

## 6.2 Exemplo de soma

Somar:

```text
1011 + 0110
```

Montando:

```text
  1011
+ 0110
------
```

Da direita para a esquerda:

```text
1 + 0 = 1
1 + 1 = 10 → escreve 0 e vai 1
0 + 1 + 1 = 10 → escreve 0 e vai 1
1 + 0 + 1 = 10 → escreve 0 e vai 1
```

Resultado:

```text
  1011
+ 0110
------
 10001
```

Conferindo em decimal:

```text
1011₂ = 11
0110₂ = 6
10001₂ = 17
```

Logo:

```text
11 + 6 = 17
```

---

## 6.3 Soma com quantidade fixa de bits

Em computadores, muitas vezes a quantidade de bits é fixa.

Exemplo usando **4 bits**:

```text
1111 + 0001
```

Soma:

```text
  1111
+ 0001
------
1 0000
```

Mas se o sistema usa apenas 4 bits, o resultado armazenado é:

```text
0000
```

O `1` extra da esquerda foi perdido.

Isso é importante para entender **overflow**.

---

# 7. Subtração binária

A subtração binária também pode ser feita diretamente.

## 7.1 Regras básicas

| Operação | Resultado |
|---|---|
| `0 - 0` | `0` |
| `1 - 0` | `1` |
| `1 - 1` | `0` |
| `0 - 1` | precisa pegar emprestado |

Exemplo:

```text
  1100
- 0101
------
  0111
```

Conferindo:

```text
1100₂ = 12
0101₂ = 5
0111₂ = 7
```

Logo:

```text
12 - 5 = 7
```

---

## 7.2 Subtração usando soma

Na prática, em sistemas digitais, é muito comum transformar a subtração em soma:

```text
A - B = A + (-B)
```

Para fazer isso, precisamos representar `-B`.

É aí que entra o **complemento de 2**.

---

# 8. Representação com sinal e sem sinal

A mesma sequência de bits pode significar coisas diferentes.

Exemplo:

```text
1011
```

Se for um número **sem sinal**, então:

```text
1011₂ = 11₁₀
```

Mas se for um número **com sinal em complemento de 2 com 4 bits**, então:

```text
1011 = -5
```

Então a questão precisa deixar claro se está usando:

```text
sem sinal
```

ou

```text
com sinal / complemento de 2
```

---

## 8.1 Números sem sinal

Com `n` bits sem sinal, o intervalo é:

```text
0 até 2ⁿ - 1
```

Exemplo com 4 bits:

```text
0 até 2⁴ - 1
0 até 16 - 1
0 até 15
```

Tabela:

| Binário | Valor sem sinal |
|---|---:|
| `0000` | 0 |
| `0001` | 1 |
| `0010` | 2 |
| `0011` | 3 |
| `0100` | 4 |
| `0101` | 5 |
| `0110` | 6 |
| `0111` | 7 |
| `1000` | 8 |
| `1001` | 9 |
| `1010` | 10 |
| `1011` | 11 |
| `1100` | 12 |
| `1101` | 13 |
| `1110` | 14 |
| `1111` | 15 |

---

## 8.2 Números com sinal em complemento de 2

Com `n` bits em complemento de 2, o intervalo é:

```text
-2ⁿ⁻¹ até 2ⁿ⁻¹ - 1
```

Exemplo com 4 bits:

```text
-2³ até 2³ - 1
-8 até +7
```

Tabela:

| Binário | Valor em complemento de 2 |
|---|---:|
| `0000` | 0 |
| `0001` | 1 |
| `0010` | 2 |
| `0011` | 3 |
| `0100` | 4 |
| `0101` | 5 |
| `0110` | 6 |
| `0111` | 7 |
| `1000` | -8 |
| `1001` | -7 |
| `1010` | -6 |
| `1011` | -5 |
| `1100` | -4 |
| `1101` | -3 |
| `1110` | -2 |
| `1111` | -1 |

---

## 8.3 O bit mais à esquerda

Em complemento de 2:

```text
bit mais à esquerda = 0 → positivo ou zero
bit mais à esquerda = 1 → negativo
```

Exemplos em 4 bits:

```text
0101 = +5
1011 = -5
1111 = -1
1000 = -8
```

Mas cuidado:

> O primeiro bit não é apenas um “sinal separado”. Ele faz parte do valor.

Em 4 bits com complemento de 2, os pesos são:

```text
-8   4   2   1
```

Exemplo:

```text
1011
```

Cálculo:

```text
1×(-8) + 0×4 + 1×2 + 1×1
= -8 + 2 + 1
= -5
```

---

# 9. Complemento de 1

O **complemento de 1** é obtido invertendo todos os bits:

```text
0 vira 1
1 vira 0
```

Exemplo:

```text
0101
```

Complemento de 1:

```text
1010
```

Outro exemplo:

```text
00000101
```

Complemento de 1:

```text
11111010
```

O complemento de 1 aparece porque ele é um passo intermediário para o complemento de 2.

---

# 10. Complemento de 2

O **complemento de 2** é:

```text
complemento de 1 + 1
```

Ou seja:

```text
1. Inverte todos os bits.
2. Soma 1.
```

---

## 10.1 Exemplo: representar -5 em 4 bits

Comece com `+5`:

```text
0101
```

Inverta todos os bits:

```text
1010
```

Some 1:

```text
1010
+001
----
1011
```

Logo:

```text
-5 = 1011
```

---

## 10.2 Exemplo: representar -5 em 8 bits

Comece com `+5` em 8 bits:

```text
00000101
```

Inverta:

```text
11111010
```

Some 1:

```text
11111010
+       1
---------
11111011
```

Logo:

```text
-5 = 11111011
```

---

## 10.3 Como descobrir o valor de um número negativo

Exemplo:

```text
1101
```

Como começa com `1`, em complemento de 2 com 4 bits ele é negativo.

Para descobrir o módulo:

```text
1. Inverta todos os bits.
2. Some 1.
3. Coloque o sinal de menos.
```

Cálculo:

```text
1101
↓ inverte
0010
+ 1
----
0011
```

`0011 = 3`

Logo:

```text
1101 = -3
```

---

# 11. Por que inverter e somar 1 faz sentido?

Essa é a parte mais importante para entender a lógica.

Com 4 bits, existem apenas 16 combinações:

```text
0000 até 1111
```

Isso significa que as contas acontecem como se fossem em um ciclo de tamanho 16.

Em 4 bits:

```text
2⁴ = 16
```

Quando uma soma passa de 15, ela volta para 0 se só guardarmos 4 bits.

Exemplo:

```text
1111 + 0001 = 1 0000
```

Com 4 bits, guardamos apenas:

```text
0000
```

Ou seja:

```text
15 + 1 = 0
```

dentro desse ciclo de 4 bits.

---

## 11.1 O negativo é o valor que soma com o positivo e dá zero

O negativo de 5 precisa satisfazer:

```text
5 + (-5) = 0
```

Em 4 bits, como o ciclo tem tamanho 16, queremos um número que, somado com 5, dê 16:

```text
5 + ? = 16
```

Então:

```text
? = 11
```

11 em binário de 4 bits:

```text
1011
```

Logo:

```text
1011 representa -5
```

Conferindo:

```text
  0101   = +5
+ 1011   = -5
------
1 0000
```

Guardando só 4 bits:

```text
0000
```

Resultado:

```text
5 + (-5) = 0
```

---

## 11.2 Por que o complemento de 1 precisa do +1?

Com 4 bits, o maior valor é:

```text
1111 = 15
```

Inverter os bits de um número é o mesmo que fazer:

```text
15 - número
```

Exemplo com 5:

```text
5 = 0101
```

Invertendo:

```text
1010
```

`1010` vale 10.

E:

```text
15 - 5 = 10
```

Mas o negativo correto precisa ser:

```text
16 - 5 = 11
```

Por isso somamos 1:

```text
10 + 1 = 11
```

Então:

```text
complemento de 1 = 2ⁿ - 1 - N
complemento de 2 = 2ⁿ - N
```

No caso de 4 bits:

```text
complemento de 1 = 15 - N
complemento de 2 = 16 - N
```

---

# 12. Subtração usando complemento de 2

A regra é:

```text
A - B = A + complemento de 2 de B
```

---

## 12.1 Exemplo: 4 - 2 com 4 bits

Escreva os números:

```text
4 = 0100
2 = 0010
```

Agora faça o complemento de 2 de `2`:

```text
0010
↓ inverte
1101
+ 1
----
1110
```

Então:

```text
-2 = 1110
```

Agora some:

```text
  0100
+ 1110
------
1 0010
```

Como usamos 4 bits, descarte o carry extra:

```text
0010
```

Resultado:

```text
0010 = 2
```

Logo:

```text
4 - 2 = 2
```

---

## 12.2 Exemplo: 3 - 5 com 4 bits

```text
3 = 0011
5 = 0101
```

Complemento de 2 de `5`:

```text
0101
↓ inverte
1010
+ 1
----
1011
```

Então:

```text
-5 = 1011
```

Agora:

```text
  0011
+ 1011
------
  1110
```

`1110` começa com 1, então é negativo.

Descubra o módulo:

```text
1110
↓ inverte
0001
+ 1
----
0010
```

Módulo 2.

Logo:

```text
1110 = -2
```

Resultado:

```text
3 - 5 = -2
```

---

# 13. Overflow

## 13.1 O que é overflow?

**Overflow** é quando o resultado real de uma operação não cabe na quantidade de bits disponível.

---

## 13.2 Overflow sem sinal

Com 4 bits sem sinal:

```text
intervalo = 0 até 15
```

Exemplo:

```text
15 + 1 = 16
```

Mas 16 não cabe em 4 bits.

Em binário:

```text
  1111
+ 0001
------
1 0000
```

Com 4 bits, sobra:

```text
0000
```

O resultado armazenado ficou errado.

Logo:

```text
houve overflow
```

Para números sem sinal, geralmente há overflow quando aparece carry para fora do bit mais significativo.

---

## 13.3 Overflow com sinal em complemento de 2

Com 4 bits em complemento de 2:

```text
intervalo = -8 até +7
```

Exemplo:

```text
7 + 3 = 10
```

Mas `10` não cabe em 4 bits com sinal.

Em binário:

```text
7 = 0111
3 = 0011
```

Soma:

```text
  0111
+ 0011
------
  1010
```

`1010`, em complemento de 2 com 4 bits, vale `-6`.

Resultado real esperado:

```text
10
```

Resultado armazenado:

```text
-6
```

Logo, houve overflow.

---

## 13.4 Regra rápida de overflow com sinal

Em complemento de 2, ocorre overflow quando:

```text
positivo + positivo = negativo
```

ou

```text
negativo + negativo = positivo
```

Exemplo 1:

```text
0111 + 0011 = 1010
```

Positivo + positivo deu negativo.

Logo:

```text
overflow
```

Exemplo 2:

```text
1000 + 1111 = 0111
```

Negativo + negativo deu positivo.

Logo:

```text
overflow
```

Se os sinais são diferentes:

```text
positivo + negativo
```

então não há overflow aritmético em complemento de 2.

---

# 14. Casos especiais

## 14.1 O zero

Em complemento de 2, só existe um zero:

```text
0000 = 0
```

Se tentar inverter o sinal do zero:

```text
0000
↓ inverte
1111
+ 1
----
1 0000
```

Guardando só 4 bits:

```text
0000
```

Então:

```text
-0 = 0
```

---

## 14.2 O menor número negativo

Com 4 bits, o menor valor é:

```text
1000 = -8
```

Se tentar inverter o sinal:

```text
1000
↓ inverte
0111
+ 1
----
1000
```

Voltou para `1000`.

Isso acontece porque em 4 bits o intervalo é:

```text
-8 até +7
```

O valor `+8` não existe com 4 bits em complemento de 2.

---

# 15. Resumo essencial para prova

## Base 2

```text
Cada posição vale uma potência de 2.
```

## Binário para decimal

```text
Some os pesos onde o bit é 1.
```

## Decimal para binário

```text
Divida por 2 e leia os restos de baixo para cima.
```

## Hexadecimal

```text
1 dígito hexadecimal = 4 bits.
```

## Soma binária

```text
1 + 1 = 10
```

## Subtração

```text
A - B = A + (-B)
```

## Complemento de 1

```text
Inverte todos os bits.
```

## Complemento de 2

```text
Inverte todos os bits e soma 1.
```

## Com sinal em complemento de 2

```text
bit mais à esquerda = 0 → positivo ou zero
bit mais à esquerda = 1 → negativo
```

## Intervalos

```text
n bits sem sinal: 0 até 2ⁿ - 1
n bits com sinal: -2ⁿ⁻¹ até 2ⁿ⁻¹ - 1
```

## Overflow com sinal

```text
positivo + positivo = negativo → overflow
negativo + negativo = positivo → overflow
```

---

# 16. Exercícios rápidos

## Conversão

1. Converta `1011₂` para decimal.
2. Converta `110101₂` para decimal.
3. Converta `13₁₀` para binário.
4. Converta `45₁₀` para binário.
5. Converta `2F₁₆` para binário.
6. Converta `1011 0110₂` para hexadecimal.

## Soma e subtração

7. Some `1010 + 0011`.
8. Some `0111 + 0011` em 4 bits.
9. Faça `4 - 2` usando complemento de 2 com 4 bits.
10. Faça `3 - 5` usando complemento de 2 com 4 bits.

## Sinal

11. Interprete `1011` como número sem sinal.
12. Interprete `1011` como complemento de 2 com 4 bits.
13. Qual o intervalo de 8 bits sem sinal?
14. Qual o intervalo de 8 bits com sinal em complemento de 2?

## Complemento de 2

15. Faça `-5` em 4 bits.
16. Faça `-5` em 8 bits.
17. Descubra o valor de `1110` em complemento de 2 com 4 bits.
18. Descubra o valor de `11111011` em complemento de 2 com 8 bits.

## Overflow

19. `0111 + 0011` em 4 bits com sinal tem overflow?
20. `0101 + 1110` em 4 bits com sinal tem overflow?

---

# 17. Gabarito

1. `11`
2. `53`
3. `1101`
4. `101101`
5. `0010 1111`
6. `B6`
7. `1101`
8. `1010`, com overflow se for complemento de 2 em 4 bits
9. `0010`
10. `1110`, que representa `-2`
11. `11`
12. `-5`
13. `0 até 255`
14. `-128 até +127`
15. `1011`
16. `11111011`
17. `-2`
18. `-5`
19. Sim
20. Não
