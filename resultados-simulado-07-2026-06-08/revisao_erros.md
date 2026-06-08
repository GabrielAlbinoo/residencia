# Revisao dos erros - Simulado 07

Simulado: **Exercicios de Faculdades - Aulas 1 a 17**

Data: **08/06/2026**

Resultado ajustado: **45/50 (90%)**

Tempo: **00:58:16**

## Ajuste manual registrado

As **questoes 36, 46 e 47** foram consideradas **corretas** por ajuste manual do usuario, porque a resposta clicada mudou por engano.

## Diagnostico geral

O resultado ficou forte. Depois do ajuste, o unico bloco realmente fraco foi:

```text
Bloco 6 - Ponto flutuante: 2/5 (40%)
```

Pontos que ainda merecem foco:

1. **IEEE 754 simples**
2. **Leitura de rede com NAND e NOR misturados**
3. **Decoder gerando mintermos e funcao final por OR**

Prioridade pratica:

```text
1) Q27, Q28 e Q30
2) Q44
3) Q9
```

---

# Questao 9 - Decoder 2:4 e funcao XOR

## Conceito

Um decoder `2:4` ativo alto gera um mintermo em cada saida:

```text
Y0 = A'B'
Y1 = A'B
Y2 = AB'
Y3 = AB
```

Se a questao faz OR de saidas do decoder, a funcao final e a soma desses mintermos.

## Resolucao passo a passo

Na questao:

```text
F = Y1 + Y2
```

Substituindo:

```text
F = A'B + AB'
```

Essa e exatamente a definicao de:

```text
XOR
```

Logo:

```text
F = A XOR B
```

## Como nao errar

Sempre escreva a tabela mental do decoder `2:4`:

```text
00 -> Y0
01 -> Y1
10 -> Y2
11 -> Y3
```

## Exercicios semelhantes

1. Um decoder `2:4` ativo alto recebe `A` e `B`. As saidas `Y0` e `Y3` vao para uma OR. Qual e a funcao?

   A) `A XOR B`

   B) `A XNOR B`

   C) `A+B`

   D) `AB`

2. Um decoder `2:4` ativo alto recebe `A` e `B`. Apenas `Y3` vai para a saida. Qual e a funcao?

   A) `A+B`

   B) `A'B'`

   C) `AB`

   D) `A XOR B`

## Gabarito

1. **B** porque `Y0 + Y3 = A'B' + AB = XNOR`
2. **C** porque `Y3 = AB`

---

# Questao 27 - Expoente com bias em IEEE 754 simples

## Conceito

Para numero normalizado em IEEE 754 simples:

```text
valor = (-1)^s x 1.fracao x 2^(expoente real)
expoente armazenado = expoente real + 127
```

## Resolucao passo a passo

Numero dado:

```text
5,75_10 = 101,11_2
```

Normalizando:

```text
101,11_2 = 1,0111_2 x 2^2
```

Entao:

```text
expoente real = 2
expoente armazenado = 2 + 127 = 129
```

Resposta correta:

```text
1,0111_2 x 2^2; expoente armazenado 129
```

## Como nao errar

Sempre faca em duas etapas:

```text
1) normalizar
2) somar o bias
```

## Exercicios semelhantes

1. `10,5_10 = 1010,1_2`. Qual a forma normalizada e o expoente armazenado?

   A) `1,0101_2 x 2^3`; armazenado `130`

   B) `1,0101_2 x 2^2`; armazenado `129`

   C) `0,10101_2 x 2^4`; armazenado `131`

   D) `1,0101_2 x 2^3`; armazenado `3`

2. `0,625_10 = 0,101_2`. Qual a forma normalizada correta?

   A) `1,01_2 x 2^-1`

   B) `1,01_2 x 2^1`

   C) `0,101_2 x 2^0`

   D) `1,1_2 x 2^-1`

## Gabarito

1. **A**
2. **A**

---

# Questao 28 - Bit implicito em IEEE 754 simples

## Conceito

Em numero normalizado:

```text
1.xxxxx x 2^e
```

O `1` antes da virgula e **implicito**.

Isso significa:

```text
nao e armazenado no campo da fracao
```

O campo da fracao armazena somente os bits depois desse `1`.

## Resolucao passo a passo

Analise das alternativas:

- A) verdadeira
- B) verdadeira
- C) falsa
- D) verdadeira

Como a questao pede a **incorreta**, a resposta e:

```text
C
```

## Como nao errar

Guarde esta frase:

```text
em IEEE 754 normalizado, o 1 inicial e gratis
```

## Exercicios semelhantes

1. Em IEEE 754 simples, para mantissa normalizada `1,1011`, quais bits vao inicialmente para o campo da fracao?

   A) `11011`

   B) `1011`

   C) `1`

   D) `011`

2. Assinale a alternativa incorreta:

   A) O expoente armazenado usa bias.

   B) O bit de sinal indica positivo/negativo.

   C) O `1` antes da virgula em numero normalizado e armazenado explicitamente.

   D) O campo de fracao guarda os bits depois do `1` implicito.

## Gabarito

1. **B**
2. **C**

---

# Questao 30 - Expoente armazenado e expoente real

## Conceito

No IEEE 754 simples:

```text
expoente real = expoente armazenado - 127
```

## Resolucao passo a passo

Dado:

```text
10000101_2
```

Convertendo para decimal:

```text
128 + 4 + 1 = 133
```

Agora tira o bias:

```text
133 - 127 = 6
```

Resposta:

```text
6
```

## Como nao errar

Padrao fixo:

```text
binario -> decimal -> menos 127
```

## Exercicios semelhantes

1. Em IEEE 754 simples, o expoente armazenado e `10000001_2`. Qual e o expoente real?

   A) `1`

   B) `2`

   C) `129`

   D) `-1`

2. Em IEEE 754 simples, o expoente real e `-2`. Qual deve ser o expoente armazenado em decimal?

   A) `125`

   B) `127`

   C) `129`

   D) `2`

## Gabarito

1. **B**
2. **A**

---

# Questao 44 - Rede NAND/NOR mista

## Conceito

Quando a rede mistura NAND e NOR, vale muito a pena escrever primeiro as expressoes intermediarias.

## Resolucao passo a passo

Rede dada:

```text
N1 = A NAND B = (AB)'
N2 = A NOR B  = (A+B)'
F  = N1 NOR N2
```

Substituindo:

```text
F = [(AB)' + (A+B)']'
```

Aplicando DeMorgan:

```text
F = AB . (A+B)
```

Agora simplifica:

```text
AB(A+B) = AB
```

Resposta correta:

```text
AB
```

## Como nao errar

Fluxo seguro:

```text
1) escrever N1 e N2
2) substituir na saida final
3) aplicar DeMorgan
4) simplificar
```

## Exercicios semelhantes

1. Se `N1 = A NAND B` e `F = N1 NAND N1`, qual e a funcao final?

   A) `A+B`

   B) `AB`

   C) `A XOR B`

   D) `(AB)'`

2. Se `N1 = A NOR B` e `F = N1 NOR N1`, qual e a funcao final?

   A) `A+B`

   B) `AB`

   C) `(A+B)'`

   D) `A XOR B`

## Gabarito

1. **B**
2. **A**

---

# Revisao concentrada

## 1. IEEE 754 simples

Memorizar:

```text
bias = 127
expoente armazenado = expoente real + 127
expoente real = armazenado - 127
1 antes da virgula = implicito
```

## 2. Decoder 2:4

Memorizar:

```text
Y0 = A'B'
Y1 = A'B
Y2 = AB'
Y3 = AB
```

## 3. Redes universais

Memorizar:

```text
NAND = AND negado
NOR  = OR negado
```

Sempre expandir a rede por etapas antes de simplificar.

## Plano curto de correcao

1. Refazer Q27, Q28 e Q30 sem olhar.
2. Fazer 10 exercicios curtos de bias e normalizacao.
3. Refazer 5 redes com NAND/NOR mistos.
4. Fazer 5 questoes de decoder gerando funcao por mintermos.
