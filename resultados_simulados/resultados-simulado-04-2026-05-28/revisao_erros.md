# Revisão Dos Erros - Simulado 04

**Simulado:** Revisão Aulas 9 a 13 - nível de prova  
**Data:** 28/05/2026  
**Resultado:** 24/30 (80%)  
**Tempo:** 00:25:37

## Diagnóstico Rápido

Você foi muito bem nos blocos de síntese, latches e flip-flops:

- Aula 9: 6/6
- Aula 12: 6/6
- Aula 13: 6/6

O ponto que precisa de revisão real é:

- Aula 10: 2/6, principalmente MUX 4:1, encoder prioritário e comparador.
- Aula 11: 4/6, principalmente diferença entre Moore, Mealy e circuito combinacional.

O erro mais importante não foi cálculo longo; foi procedimento. Você travou quando precisava transformar a definição do bloco lógico em uma tabela pequena de decisão.

---

## 1. MUX 4:1 Com Três Variáveis

Questões relacionadas: 7 e 8.

### Ideia Principal

Um MUX 4:1 tem:

```text
2 seletores -> escolhem uma entre 4 entradas
4 entradas  -> I0, I1, I2, I3
1 saída     -> F
```

Quando o exercício diz:

```text
S1 = A
S0 = B
```

significa que o par `AB` escolhe a entrada do MUX:

| A | B | Entrada escolhida |
|---|---|---|
| 0 | 0 | I0 |
| 0 | 1 | I1 |
| 1 | 0 | I2 |
| 1 | 1 | I3 |

Como a função tem três variáveis, a variável que sobrou é `C`.

Então cada entrada do MUX pode virar:

```text
0, 1, C ou C'
```

### Macete Prático

Para cada valor fixo de `AB`, olhe o que acontece quando `C=0` e quando `C=1`.

```text
se F = 0 nos dois casos -> entrada = 0
se F = 1 nos dois casos -> entrada = 1
se F = 0 quando C=0 e 1 quando C=1 -> entrada = C
se F = 1 quando C=0 e 0 quando C=1 -> entrada = C'
```

### Questão 7 Resolvida

Função:

```text
F(A,B,C) = Σm(0,2,3,5,7)
```

Lembre que o número do mintermo vem de `ABC`:

| A | B | C | mintermo |
|---|---|---|---|
| 0 | 0 | 0 | m0 |
| 0 | 0 | 1 | m1 |
| 0 | 1 | 0 | m2 |
| 0 | 1 | 1 | m3 |
| 1 | 0 | 0 | m4 |
| 1 | 0 | 1 | m5 |
| 1 | 1 | 0 | m6 |
| 1 | 1 | 1 | m7 |

Agora veja por seletor:

| AB | Entrada | C=0 | C=1 | Resultado |
|---|---|---:|---:|---|
| 00 | I0 | m0 = 1 | m1 = 0 | C' |
| 01 | I1 | m2 = 1 | m3 = 1 | 1 |
| 10 | I2 | m4 = 0 | m5 = 1 | C |
| 11 | I3 | m6 = 0 | m7 = 1 | C |

Resposta:

```text
I0 = C'
I1 = 1
I2 = C
I3 = C
```

### Questão 8 Resolvida

Função:

```text
F(A,B,C) = Σm(1,2,6,7)
```

| AB | Entrada | C=0 | C=1 | Resultado |
|---|---|---:|---:|---|
| 00 | I0 | m0 = 0 | m1 = 1 | C |
| 01 | I1 | m2 = 1 | m3 = 0 | C' |
| 10 | I2 | m4 = 0 | m5 = 0 | 0 |
| 11 | I3 | m6 = 1 | m7 = 1 | 1 |

Resposta:

```text
I0 = C
I1 = C'
I2 = 0
I3 = 1
```

### Exercícios De Fixação

1. Implemente `F(A,B,C)=Σm(0,1,4,6)` com MUX 4:1 usando `S1=A` e `S0=B`. Determine `I0, I1, I2, I3`.

Gabarito:

```text
I0 = 1
I1 = 0
I2 = C'
I3 = C'
```

2. Implemente `F(A,B,C)=Σm(1,3,4,5)` com MUX 4:1 usando `S1=A` e `S0=B`. Determine `I0, I1, I2, I3`.

Gabarito:

```text
I0 = C
I1 = C
I2 = 1
I3 = 0
```

---

## 2. Encoder Prioritário

Questão relacionada: 10.

### Ideia Principal

Um encoder transforma uma entrada ativa em um código binário.

Um encoder prioritário resolve o caso em que mais de uma entrada está ativa:

```text
se várias entradas forem 1, vence a de maior prioridade
```

Na questão:

```text
D3 > D2 > D1 > D0
```

Entradas:

```text
D3 = 0
D2 = 1
D1 = 1
D0 = 1
```

Mesmo que `D1` e `D0` estejam ativos, quem vence é `D2`, porque ele tem maior prioridade entre os ativos.

O índice 2 em binário é:

```text
2 = 10
```

Como existe pelo menos uma entrada ativa:

```text
válido = 1
```

Resposta:

```text
saída = 10
válido = 1
```

### Exercícios De Fixação

1. Em um encoder prioritário 4:2 com prioridade `D3 > D2 > D1 > D0`, as entradas são `D3=1, D2=1, D1=0, D0=1`. Qual é a saída e o válido?

Gabarito:

```text
saída = 11
válido = 1
```

2. Em um encoder prioritário 4:2 com prioridade `D3 > D2 > D1 > D0`, as entradas são `D3=0, D2=0, D1=1, D0=1`. Qual é a saída e o válido?

Gabarito:

```text
saída = 01
válido = 1
```

---

## 3. Comparador Binário

Questão relacionada: 12.

### Ideia Principal

O comparador de magnitude responde apenas uma destas três coisas:

```text
A > B
A = B
A < B
```

Na questão:

```text
A = 10₂ = 2
B = 01₂ = 1
```

Então:

```text
A > B
```

Resposta:

```text
A>B = 1
A=B = 0
A<B = 0
```

### Como Resolver Sem Complicar

Para números pequenos, converta mentalmente:

```text
00 = 0
01 = 1
10 = 2
11 = 3
```

Depois compare normalmente.

### Exercícios De Fixação

1. Um comparador recebe `A=01` e `B=11`. Quais saídas ficam ativas?

Gabarito:

```text
A>B = 0
A=B = 0
A<B = 1
```

2. Um comparador recebe `A=10` e `B=10`. Quais saídas ficam ativas?

Gabarito:

```text
A>B = 0
A=B = 1
A<B = 0
```

---

## 4. Moore, Mealy E Combinacional

Questões relacionadas: 13 e 14.

### Diferença Principal

Use esta regra:

```text
tem estado? então não é combinacional pura
saída depende só do estado? Moore
saída depende do estado e da entrada? Mealy
```

### Questão 13 Resolvida

Enunciado:

```text
No mesmo estado S1:
X=0 -> Z=0
X=1 -> Z=1
```

A saída muda mesmo sem trocar de estado. Logo, ela depende da entrada.

Como ainda existe estado, não é combinacional pura.

Resposta:

```text
Mealy
```

### Questão 14 Resolvida

Tabela:

| Estado atual | Saída do estado | X=0 | X=1 |
|---|---:|---|---|
| A | 0 | A | B |
| B | 1 | A | B |

A saída aparece como propriedade do estado:

```text
Estado A -> saída 0
Estado B -> saída 1
```

As colunas `X=0` e `X=1` só dizem para qual estado a máquina vai.

Resposta:

```text
Moore
```

### Exercícios De Fixação

1. Em uma máquina, no estado `S0`, a saída é `Z=0` quando `X=0` e `Z=1` quando `X=1`. Que tipo de máquina é essa?

Gabarito:

```text
Mealy
```

2. Uma tabela mostra:

| Estado | Saída | X=0 | X=1 |
|---|---:|---|---|
| E0 | 0 | E0 | E1 |
| E1 | 1 | E0 | E1 |

Que tipo de máquina é essa?

Gabarito:

```text
Moore
```

---

## Checklist Para Revisar Antes Do Próximo Simulado

- Refaça 5 questões de MUX 4:1 com 3 variáveis.
- Para cada MUX, monte a tabela `AB -> I0/I1/I2/I3`.
- Revise encoder prioritário: sempre escolher a entrada ativa de maior prioridade.
- Revise comparador binário de 2 bits: `00, 01, 10, 11`.
- Revise Moore vs Mealy usando a regra: saída no estado é Moore; saída na transição/entrada é Mealy.

## Prioridade De Estudo

1. Aula 10, porque ficou 2/6.
2. Aula 11, porque ficou 4/6 e os erros foram conceituais.
3. Fazer um mini-simulado de 15 questões só com MUX, encoder, comparator, Moore e Mealy antes de avançar muito.
