# Mini Aula De Fixação - Frequência, Período E Clock

**Objetivo:** fixar a relação entre frequência, período, Hz, kHz, MHz, GHz e a fórmula usada em temporização sequencial.

---

## 1. Ideia Principal

Frequência responde à pergunta:

```text
quantos ciclos acontecem em 1 segundo?
```

Período responde à pergunta:

```text
quanto tempo dura 1 ciclo?
```

Então:

```text
frequência alta -> ciclo curto
frequência baixa -> ciclo longo
```

Exemplo intuitivo:

```text
1 Hz  -> 1 ciclo por segundo
2 Hz  -> 2 ciclos por segundo
10 Hz -> 10 ciclos por segundo
```

Quanto mais ciclos cabem no mesmo segundo, menor é o tempo de cada ciclo.

---

## 2. O Que É Um Ciclo De Clock?

Um ciclo completo de clock é uma repetição completa do sinal.

Normalmente:

```text
0 -> 1 -> 0
```

Visualmente:

```text
CLK: ___|‾‾‾|___|‾‾‾|___
        <---->
        1 ciclo
```

Cada ciclo tem duas transições:

```text
borda de subida: 0 -> 1
borda de descida: 1 -> 0
```

Por isso, cuidado com a frase:

```text
1 MHz = um milhão de mudanças por segundo
```

O mais correto é:

```text
1 MHz = um milhão de ciclos completos por segundo
```

Se você contar mudanças, um clock comum pode ter duas mudanças por ciclo.

---

## 3. Unidades De Frequência

| Unidade | Valor em Hz | Leitura |
|---|---:|---|
| 1 Hz | 1 | 1 ciclo por segundo |
| 1 kHz | 1.000 | mil ciclos por segundo |
| 1 MHz | 1.000.000 | um milhão de ciclos por segundo |
| 1 GHz | 1.000.000.000 | um bilhão de ciclos por segundo |

Resumo:

```text
k = mil
M = milhão
G = bilhão
```

---

## 4. Unidades De Tempo

| Unidade | Valor em segundos |
|---|---:|
| 1 s | 1 segundo |
| 1 ms | 0,001 s |
| 1 us | 0,000001 s |
| 1 ns | 0,000000001 s |

Resumo:

```text
ms = milissegundo  = 10^-3 s
us = microssegundo = 10^-6 s
ns = nanossegundo  = 10^-9 s
```

No material, usamos `us` no lugar de `µs` para evitar problema em alguns leitores.

---

## 5. Fórmulas Fundamentais

A relação central é:

```text
F = 1 / T
T = 1 / F
```

Onde:

```text
F = frequência
T = período
```

Se a frequência aumenta, o período diminui.

Se o período aumenta, a frequência diminui.

---

## 6. Atalho Mais Usado Em Sistemas Digitais

Em temporização, muitas questões usam:

```text
frequência em MHz
tempo em ns
```

O atalho é:

```text
F(MHz) = 1000 / T(ns)
```

E o inverso:

```text
T(ns) = 1000 / F(MHz)
```

### Exemplo 1

```text
T = 10 ns
F = 1000 / 10
F = 100 MHz
```

### Exemplo 2

```text
F = 50 MHz
T = 1000 / 50
T = 20 ns
```

### Exemplo 3

```text
F = 200 MHz
T = 1000 / 200
T = 5 ns
```

---

## 7. Tabela Para Decorar

| Frequência | Período |
|---:|---:|
| 1 Hz | 1 s |
| 1 kHz | 1 ms |
| 1 MHz | 1 us |
| 1 GHz | 1 ns |
| 25 MHz | 40 ns |
| 50 MHz | 20 ns |
| 100 MHz | 10 ns |
| 200 MHz | 5 ns |
| 250 MHz | 4 ns |
| 500 MHz | 2 ns |

Esses valores aparecem bastante em questão.

---

## 8. Por Que Fmax Usa O Inverso Do Período?

Na aula de temporização, aparece:

```text
Fmax = 1 / Tclock mínimo
```

Isso significa:

```text
a maior frequência possível é aquela cujo ciclo ainda é longo o bastante
para o circuito terminar tudo a tempo
```

Se o circuito precisa de pelo menos `10 ns` por ciclo:

```text
Tclock mínimo = 10 ns
Fmax = 1000 / 10
Fmax = 100 MHz
```

Se você tentar usar `200 MHz`:

```text
200 MHz -> 5 ns
```

O clock teria só `5 ns` por ciclo, mas o circuito precisa de `10 ns`.

Então falha.

---

## 9. Ligação Com Setup

A fórmula de setup é:

```text
Tclock >= Tclk-Q(max) + Tcomb(max) + Tsetup
```

A soma da direita diz quanto tempo o circuito precisa.

Esse tempo vira o menor período aceitável:

```text
Tclock mínimo = Tclk-Q(max) + Tcomb(max) + Tsetup
```

Depois você converte para frequência:

```text
Fmax(MHz) = 1000 / Tclock mínimo(ns)
```

Exemplo:

```text
Tclk-Q(max) = 2 ns
Tcomb(max) = 7 ns
Tsetup = 1 ns
```

Então:

```text
Tclock mínimo = 2 + 7 + 1
Tclock mínimo = 10 ns
Fmax = 1000 / 10
Fmax = 100 MHz
```

---

## 10. Erros Comuns

## 10.1 Confundir ciclo com transição

Errado:

```text
1 MHz = 1 milhão de mudanças por segundo
```

Melhor:

```text
1 MHz = 1 milhão de ciclos completos por segundo
```

## 10.2 Achar que MHz vira ns multiplicando direto

Não é:

```text
100 MHz = 100 ns
```

O correto é:

```text
T(ns) = 1000 / F(MHz)
100 MHz -> 10 ns
```

## 10.3 Esquecer que frequência e período são inversos

Se a frequência dobra, o período cai pela metade.

Exemplo:

```text
100 MHz -> 10 ns
200 MHz -> 5 ns
```

---

## 11. Exercícios De Fixação

1. O que significa `1 Hz`?
2. O que significa `1 MHz`?
3. Qual é o período de `1 kHz`?
4. Qual é o período de `1 MHz`?
5. Qual é o período de `100 MHz`?
6. Qual é o período de `50 MHz`?
7. Qual é o período de `200 MHz`?
8. Qual é a frequência correspondente a `10 ns`?
9. Qual é a frequência correspondente a `5 ns`?
10. Se `Tclock mínimo = 12,5 ns`, qual é `Fmax`?
11. Se `Fmax = 250 MHz`, qual é o período mínimo?
12. Um circuito precisa de `20 ns` por ciclo. Ele funciona a `100 MHz`?

---

## 12. Gabarito

1. `1 Hz` significa 1 ciclo por segundo.
2. `1 MHz` significa 1.000.000 de ciclos por segundo.
3. `1 kHz -> 1 ms`.
4. `1 MHz -> 1 us`.
5. `100 MHz -> 10 ns`.
6. `50 MHz -> 20 ns`.
7. `200 MHz -> 5 ns`.
8. `10 ns -> 100 MHz`.
9. `5 ns -> 200 MHz`.
10. `Fmax = 1000 / 12,5 = 80 MHz`.
11. `T = 1000 / 250 = 4 ns`.
12. Não. `100 MHz -> 10 ns`, mas o circuito precisa de `20 ns`.

---

## 13. O Que Memorizar

```text
frequência = ciclos por segundo
período = tempo de 1 ciclo
F = 1/T
T = 1/F
F(MHz) = 1000 / T(ns)
T(ns) = 1000 / F(MHz)
```

Tabela curta:

```text
1 Hz  -> 1 s
1 kHz -> 1 ms
1 MHz -> 1 us
1 GHz -> 1 ns
100 MHz -> 10 ns
200 MHz -> 5 ns
```
