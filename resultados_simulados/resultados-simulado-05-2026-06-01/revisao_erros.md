# Revisão Dos Erros - Simulado 05

**Simulado:** Aulas 1 a 17 - nível difícil  
**Data:** 01/06/2026  
**Horário de conclusão:** 16:34:03  
**Tempo:** 01:11:26  
**Resultado:** 44/50 (88%)  
**Respondidas:** 45/50  
**Marcadas como não soube responder:** 5

## Diagnóstico Rápido

O resultado foi forte: **44/50 (88%)** em um simulado acumulativo difícil. O mais importante é que os erros ficaram concentrados, não espalhados pelo conteúdo todo.

Blocos abaixo de 70%:

- **Aula 10 - MUX, DEMUX, decoder, encoder e comparador:** 3/5 (60%)
- **Aula 17 - Ponto fixo e ponto flutuante:** 3/5 (60%)

Padrão dos erros:

- A parte de fundamentos, álgebra, Karnaugh, FSM básica, latches, flip-flops, contadores e timing foi muito bem.
- O ponto fraco principal é **bloco lógico por índice binário**: decoder, encoder e DEMUX.
- O segundo ponto fraco é **interpretação de escala/expoente** em ponto fixo e ponto flutuante.
- A questão 44 mostra que síntese de FSM com flip-flop D ainda precisa de treino de procedimento, mas você acertou a questão 45, então não é um buraco grande.

---

## 1. Questão 25 - Decoder 3:8 Ativo Alto

### Conceito

Um decoder 3:8 recebe 3 bits de entrada e ativa exatamente uma das 8 saídas.

```text
ABC = 000 -> Y0 = 1
ABC = 001 -> Y1 = 1
ABC = 010 -> Y2 = 1
ABC = 011 -> Y3 = 1
ABC = 100 -> Y4 = 1
ABC = 101 -> Y5 = 1
ABC = 110 -> Y6 = 1
ABC = 111 -> Y7 = 1
```

Se a função é:

```text
F(A,B,C) = Σm(1,2,6,7)
```

isso significa que a função deve valer 1 nos mintermos 1, 2, 6 e 7.

Como cada saída do decoder representa um mintermo, basta fazer:

```text
F = Y1 + Y2 + Y6 + Y7
```

Resposta correta:

```text
Fazer OR de Y1, Y2, Y6, Y7
```

### Macete

Para decoder ativo alto:

```text
Σm(...) -> OR das saídas Y correspondentes
```

Se fosse decoder ativo baixo, a implementação mudaria. Mas a questão falou ativo alto.

### Exercícios

1. Usando decoder 3:8 ativo alto, implemente `F(A,B,C)=Σm(0,3,5,6)`.

Gabarito:

```text
F = Y0 + Y3 + Y5 + Y6
```

2. Usando decoder 2:4 ativo alto, implemente `F(A,B)=Σm(1,2)`.

Gabarito:

```text
F = Y1 + Y2
```

---

## 2. Questão 26 - Encoder Prioritário E Sinal Válido

### Conceito

Um encoder transforma a entrada ativa em código binário.

Um encoder prioritário resolve o caso em que várias entradas estão ativas ao mesmo tempo. Vence a entrada de maior prioridade.

Na questão:

```text
Prioridade: D3 > D2 > D1 > D0
Entradas:   D3=0, D2=1, D1=1, D0=1
```

A maior entrada ativa é `D2`.

O índice 2 em binário é:

```text
2 = 10₂
```

Como existe pelo menos uma entrada ativa, o sinal de válido é 1.

Resposta correta:

```text
Saída = 10
Válido = 1
```

### O Que É O Válido?

O sinal `válido` diz se a saída binária representa uma entrada real ativa.

Exemplo:

```text
D3 D2 D1 D0 = 0 0 0 0
```

Nesse caso, a saída poderia aparecer como `00`, mas isso seria ambíguo: é código de `D0` ou não tem nada ativo?

Por isso existe o válido:

```text
se alguma entrada está ativa -> válido = 1
se nenhuma entrada está ativa -> válido = 0
```

### Exercícios

1. Em um encoder prioritário 4:2 com prioridade `D3 > D2 > D1 > D0`, as entradas são `D3=1, D2=1, D1=0, D0=1`. Qual é a saída e o válido?

Gabarito:

```text
Saída = 11
Válido = 1
```

2. No mesmo encoder, as entradas são `D3=0, D2=0, D1=0, D0=0`. Qual é o válido?

Gabarito:

```text
Válido = 0
```

---

## 3. Questão 27 - DEMUX 1:4 Ativo Alto

### Conceito

Um DEMUX manda uma entrada para uma saída escolhida pelos seletores.

Para DEMUX 1:4:

```text
S1S0 = 00 -> Y0
S1S0 = 01 -> Y1
S1S0 = 10 -> Y2
S1S0 = 11 -> Y3
```

Na questão:

```text
D = 1
S1S0 = 10₂
```

O binário `10₂` vale 2 em decimal. Como as saídas começam em `Y0`, o índice 2 é `Y2`, não `Y1`.

Então:

```text
Y0 = 0
Y1 = 0
Y2 = 1
Y3 = 0
```

Resposta correta:

```text
Y0=0, Y1=0, Y2=1, Y3=0
```

### Onde A Confusão Aconteceu

Você pensou em `Y1` como segunda saída. Em português comum, isso faz sentido.

Mas em circuito digital, `Y1` é índice 1, não posição 2. A contagem começa em zero.

```text
primeira saída  -> Y0
segunda saída   -> Y1
terceira saída  -> Y2
quarta saída    -> Y3
```

### Exercícios

1. Um DEMUX 1:4 ativo alto recebe `D=1` e `S1S0=11`. Quais saídas ficam ativas?

Gabarito:

```text
Y0=0, Y1=0, Y2=0, Y3=1
```

2. Um DEMUX 1:8 ativo alto recebe `D=1` e seletores `S2S1S0=101`. Qual saída recebe 1?

Gabarito:

```text
101₂ = 5
Y5 = 1
```

---

## 4. Questão 44 - Síntese De FSM Com Flip-Flops D

### Conceito

Para flip-flop D, a regra central é:

```text
D = Q+
```

Ou seja:

```text
D1 = próximo valor de Q1
D0 = próximo valor de Q0
```

Tabela da questão:

| Q1Q0 | X=0 | X=1 | Z |
|---|---|---|---|
| 00 | 00 | 01 | 0 |
| 01 | 10 | 01 | 0 |
| 10 | 00 | 01 | 1 |
| 11 | d | d | d |

Agora transformando em tabela de próximo estado bit a bit:

| Q1 | Q0 | X | Q1+ | Q0+ | Z |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | d | d | d |
| 1 | 1 | 1 | d | d | d |

### Achando D0

Observe `Q0+`:

```text
quando X=0 -> Q0+ = 0
quando X=1 -> Q0+ = 1
```

Logo:

```text
D0 = X
```

### Achando D1

Observe `Q1+`: ele só vale 1 no caso usado:

```text
Q0 = 1
X = 0
```

O estado `11` é don't care, então `Q1` não precisa entrar na expressão.

Logo:

```text
D1 = Q0X'
```

### Achando Z

A saída vale 1 no estado `10`. Como `11` é don't care, podemos simplificar para:

```text
Z = Q1
```

Resposta correta:

```text
D1 = Q0X'
D0 = X
Z = Q1
```

### Exercícios

1. Uma FSM tem estados `00`, `01`, `10`, e `11` é don't care. A transição é `00 -> 01`, `01 -> 10`, `10 -> 00`, independente de entrada. Quais são `D1` e `D0`?

Gabarito:

```text
00 -> 01
01 -> 10
10 -> 00
11 -> d

D1 = Q1'Q0
D0 = Q1'Q0'
```

2. Para a tabela abaixo, determine `D0`.

| Q1Q0 | X=0 | X=1 |
|---|---|---|
| 00 | 00 | 01 |
| 01 | 00 | 01 |
| 10 | 10 | 11 |
| 11 | 10 | 11 |

Gabarito:

```text
D0 = X
```

---

## 5. Questão 48 - Escala E Resolução Em Ponto Fixo

### Conceito

No formato `Qm.n`, o número depois do ponto indica quantos bits fracionários existem.

```text
Q3.5 -> 5 bits fracionários
```

A escala é:

```text
escala = 2^n
```

Então:

```text
escala = 2^5 = 32
```

A resolução é o menor passo representável:

```text
resolução = 1 / escala
resolução = 1 / 32
resolução = 0,03125
```

Resposta correta:

```text
Escala 32 e resolução 1/32 = 0,03125
```

### Macete

Pense assim:

```text
5 bits depois da vírgula -> divide por 32
```

Então os valores crescem de:

```text
0,03125 em 0,03125
```

### Exercícios

1. Qual é a escala e a resolução de `Q2.6`?

Gabarito:

```text
escala = 2^6 = 64
resolução = 1/64 = 0,015625
```

2. Qual é o valor real do inteiro armazenado `96` em formato `Q3.5`?

Gabarito:

```text
valor real = 96 / 32 = 3
```

---

## 6. Questão 50 - Normalização Em Ponto Flutuante

### Conceito

O número já foi dado em binário:

```text
13,25₁₀ = 1101,01₂
```

Para normalizar, a forma precisa ficar com apenas um bit 1 antes da vírgula:

```text
1101,01₂ = 1,10101₂ × 2³
```

Por que `2³`?

Porque a vírgula andou 3 casas para a esquerda:

```text
1101,01
1,10101
```

No IEEE 754 simples, o expoente armazenado usa bias 127:

```text
expoente real = 3
bias = 127
expoente armazenado = 3 + 127 = 130
```

Convertendo 130 para binário:

```text
130 = 10000010₂
```

Resposta correta:

```text
1,10101₂ × 2³; expoente armazenado 130 ou 10000010₂
```

### Exercícios

1. Normalize `101,1₂` e diga o expoente armazenado em IEEE 754 simples.

Gabarito:

```text
101,1₂ = 1,011₂ × 2²
expoente armazenado = 127 + 2 = 129 = 10000001₂
```

2. Normalize `0,011₂` e diga o expoente armazenado em IEEE 754 simples.

Gabarito:

```text
0,011₂ = 1,1₂ × 2^-2
expoente armazenado = 127 - 2 = 125 = 01111101₂
```

---

## 7. Observação Da Questão 3 - Soma BCD Por Decimal

Sua observação:

```text
somei os decimais para depois converter, algum problema?
```

Não tem problema se a questão só quer o resultado final. Fazer:

```text
58 + 67 = 125
125 em BCD = 0001 0010 0101
```

é totalmente válido para chegar ao gabarito.

Mas vale saber o método BCD “por hardware”, porque pode cair assim:

```text
1. soma os nibbles em binário
2. se o resultado do nibble passou de 9 ou gerou carry, soma 0110
3. propaga o carry para o próximo dígito BCD
```

Exemplo rápido:

```text
8 + 7 = 15 -> inválido em BCD
15 + 6 = 21 -> escreve 5 e carrega 1
```

Então o seu caminho está ok, mas para prova é bom saber também a correção com `+6`.

---

## 8. Observação Da Questão 7 - Por Que BC É O Termo De Consenso?

Expressão:

```text
AB + A'C + BC
```

A regra do consenso em SOP é:

```text
XY + X'Z + YZ = XY + X'Z
```

Comparando:

```text
X  = A
Y  = B
Z  = C

XY  = AB
X'Z = A'C
YZ  = BC
```

Então `BC` é o termo de consenso porque ele junta as partes que sobraram dos dois termos que têm `A` e `A'`:

```text
AB   tem A e B
A'C  tem A' e C
BC   junta B e C
```

### Por Que BC É Redundante?

Se `BC=1`, então:

```text
B=1
C=1
```

Agora só existem dois casos para `A`:

```text
se A=1  -> AB=1
se A=0  -> A'C=1
```

Ou seja, sempre que `BC` tenta ligar a função, um dos outros dois termos já liga também. Por isso `BC` não acrescenta nenhuma linha nova.

Então:

```text
AB + A'C + BC = AB + A'C
```

### Exercícios

1. Remova o termo de consenso de `AC + A'B + BC`.

Gabarito:

```text
AC + A'B
```

2. Remova o termo de consenso de `A'B' + AC + B'C`.

Gabarito:

```text
A'B' + AC
```

---

## O Que Revisar Agora

Prioridade 1:

- Decoder ativo alto: `Σm(...) -> OR das saídas Y`.
- Encoder prioritário: maior entrada ativa vence.
- Válido: indica se existe alguma entrada ativa.
- DEMUX: seletor binário escolhe o índice da saída, começando em `Y0`.

Prioridade 2:

- Para flip-flop D: `D = Q+`.
- Em FSM, transformar tabela de próximo estado em equações de `D1`, `D0`, etc.

Prioridade 3:

- Ponto fixo: `escala = 2^n`, `resolução = 1/escala`.
- Ponto flutuante: normalizar para `1.x × 2^e` e somar bias no expoente.

## Mini-Plano De Revisão

Tempo sugerido: **1h10 a 1h30**.

```text
20 min -> decoder, encoder e DEMUX
20 min -> refazer exercícios de bloco lógico por índice
25 min -> ponto fixo e ponto flutuante
25 min -> síntese FSM com flip-flop D
```

Fechamento: refazer as questões 25, 26, 27, 44, 48 e 50 sem olhar o gabarito.
