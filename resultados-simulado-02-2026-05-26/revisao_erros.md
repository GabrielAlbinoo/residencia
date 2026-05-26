# Revisão de Erros — Simulado 02 — Aulas 6 a 8

**Data do simulado:** 26/05/2026  
**Resultado:** 27/30 (90%)  
**Tempo executado:** 00:29:51

---

## Diagnóstico Rápido

O desempenho foi forte:

```text
Aula 6 / formas canônicas: 10/10
Karnaugh de 2 e 3 variáveis: 8/10
Karnaugh de 4 variáveis e don't care: 9/10
```

Os erros ficaram concentrados em três decisões operacionais:

1. Ler grupo de `0s` para obter `POS`, sem inverter a regra.
2. Reconhecer uma função que tem apenas um `0`.
3. Identificar qual literal permanece constante em uma oitava pelas bordas.

Não há bloco abaixo de `70%`; portanto, não é necessário reler aulas inteiras. O melhor retorno agora é refazer mapas curtos focados nessas três situações.

---

# 1. Questão 16 — POS Agrupando os Zeros

## O que ocorreu

Você marcou:

```text
C'
```

A função correta era:

```text
C
```

O mapa era:

```text
          B'  B'   B   B
        +---+---+---+---+
 A'     | 0 | 1 | 1 | 0 |
 A      | 0 | 1 | 1 | 0 |
        +---+---+---+---+
          C'   C   C  C'
```

Os zeros ocupam as duas colunas onde:

```text
C = 0
```

Formam um quarteto:

```text
m0, m2, m4, m6
```

## Regra que causou o erro

Na leitura de `SOP`, agrupando `1s`:

```text
constante em 0 → literal complementado
constante em 1 → literal direto
```

Mas na leitura de `POS`, agrupando `0s`, a regra inverte:

```text
constante em 0 → literal direto
constante em 1 → literal complementado
```

Por quê?

Um termo de `POS` deve valer `0` naquele grupo. Se `C=0` em todas as células agrupadas, o termo:

```text
(C)
```

é justamente o que vale `0` nessas células.

Se fosse:

```text
(C')
```

ele valeria `1` quando `C=0`, cobrindo o lado errado do mapa.

## Resolução Passo a Passo

1. O pedido diz `POS`; portanto, agrupe `0s`.
2. Há um quarteto nas colunas externas.
3. Nelas, `A` varia e `B` varia; ambos desaparecem.
4. `C` fica constante em `0`.
5. Em `POS`, constante em `0` aparece direta.

Resultado:

```text
F = (C) = C
```

## Exercícios de Fixação

### Exercício 1.1

Agrupando os `0s`, determine a `POS` mínima:

```text
          B'  B'   B   B
        +---+---+---+---+
 A'     | 1 | 0 | 0 | 1 |
 A      | 1 | 0 | 0 | 1 |
        +---+---+---+---+
          C'   C   C  C'
```

### Exercício 1.2

Agrupando os `0s`, determine a `POS` mínima:

```text
          B'  B'   B   B
        +---+---+---+---+
 A'     | 0 | 0 | 0 | 0 |
 A      | 1 | 1 | 1 | 1 |
        +---+---+---+---+
          C'   C   C  C'
```

### Gabarito

```text
1.1) Os zeros estão onde C=1. Em POS, constante 1 aparece complementada:
     F = C'

1.2) Os zeros estão onde A=0. Em POS, constante 0 aparece direta:
     F = A
```

---

# 2. Questão 18 — Função com Único Zero

## O que ocorreu

A função era:

```text
F(A,B,C) = Σm(1,2,3,4,5,6,7)
```

Você deixou em branco por não saber resolver. Essa decisão foi boa para diagnóstico: o ponto a reforçar é como trocar a visão de `1s` pela visão do único `0`.

## Resolução Passo a Passo

Uma função de três variáveis tem os mintermos:

```text
m0, m1, m2, m3, m4, m5, m6, m7
```

A lista fornecida contém todos, exceto:

```text
m0 = 000
```

Logo, a função vale:

```text
0 somente em A=0, B=0, C=0
1 em todas as outras entradas
```

Agora procure uma expressão que seja `0` somente quando todas as variáveis forem `0`:

```text
A + B + C
```

Conferindo:

| A | B | C | `A+B+C` |
|---:|---:|---:|---:|
| `0` | `0` | `0` | `0` |
| qualquer outra combinação |  |  | `1` |

Portanto:

```text
F = A + B + C
```

## Atalho de Prova

Se a função tiver **um único zero**, ela costuma ser um único maxtermo.

| Único zero em | Função mínima |
|---|---|
| `000` | `A+B+C` |
| `001` | `A+B+C'` |
| `101` | `A'+B+C'` |

Lembre da regra de maxtermo:

```text
bit 0 → variável direta
bit 1 → variável complementada
```

Isso é exatamente o que apareceu na questão.

## Exercícios de Fixação

### Exercício 2.1

Simplifique:

```text
F(A,B,C) = Σm(0,1,2,3,4,5,6)
```

### Exercício 2.2

Simplifique:

```text
F(A,B,C) = Σm(0,1,2,3,4,6,7)
```

### Gabarito

```text
2.1) Falta apenas m7 = 111.
     Único zero em 111 → F = A' + B' + C'

2.2) Falta apenas m5 = 101.
     Único zero em 101 → F = A' + B + C'
```

---

# 3. Questão 25 — Oitava pelas Colunas Laterais

## O que ocorreu

A função era:

```text
F(A,B,C,D) = Σm(0,2,4,6,8,10,12,14)
```

Você respondeu:

```text
B'
```

A resposta correta é:

```text
D'
```

## Localizando os Mintermos

No mapa de quatro variáveis:

```text
                 C'  C'   C   C
               +---+---+---+---+
 A'            | 1 | 0 | 0 | 1 | B'
 A'            | 1 | 0 | 0 | 1 | B
 A             | 1 | 0 | 0 | 1 | B
 A             | 1 | 0 | 0 | 1 | B'
               +---+---+---+---+
                 D'   D   D  D'
```

Os `1s` estão nas duas colunas laterais:

```text
CD = 00 e CD = 10
```

Como as laterais se encostam, as oito células formam uma oitava.

## Qual Variável Permanece?

Compare as colunas:

```text
CD = 00
CD = 10
```

| Variável | Primeira coluna | Última coluna | Resultado |
|---|---:|---:|---|
| `C` | `0` | `1` | muda, desaparece |
| `D` | `0` | `0` | permanece em `0` |

Nas quatro linhas, `A` e `B` também variam. Assim:

```text
A desaparece
B desaparece
C desaparece
D=0 permanece → D'
```

Resultado:

```text
F = D'
```

## Como Evitar Confundir `B'` com `D'`

Use a moldura literal do mapa:

```text
colunas laterais estão sob D'
linhas superior/inferior associam-se a valores de A
laterais da grade variam B
```

Se o grupo ocupa **colunas inteiras**, olhe primeiro os literais de cima e de baixo. Se ocupa **linhas inteiras**, olhe primeiro os literais laterais.

## Exercícios de Fixação

### Exercício 3.1

Simplifique:

```text
F(A,B,C,D) = Σm(1,3,5,7,9,11,13,15)
```

### Exercício 3.2

Simplifique:

```text
F(A,B,C,D) = Σm(0,1,2,3,8,9,10,11)
```

### Gabarito

```text
3.1) As colunas centrais têm D=1 constante:
     F = D

3.2) As linhas superior e inferior têm B=0 constante:
     F = B'
```

---

# 4. Observação da Questão 17 — Usar Grupo Maior é Melhor?

## Sua dúvida

Você percebeu que seria possível fazer:

```text
um grupo de 4 na linha inteira de A'
```

em vez de usar um grupo menor que produziria:

```text
A'B'
```

Sim: **essa é exatamente a melhor escolha**.

O mapa da questão era:

```text
          B'  B'   B   B
        +---+---+---+---+
 A'     | 1 | 1 | 1 | 1 |
 A      | 0 | 0 | 1 | 1 |
        +---+---+---+---+
          C'   C   C  C'
```

## Agrupamentos Ideais

### Grupo 1 — Linha completa de cima

```text
m0, m1, m2, m3
```

Nesta linha:

```text
A=0 constante
B e C variam
```

Resultado:

```text
A'
```

### Grupo 2 — Duas colunas da direita

```text
m2, m3, m6, m7
```

Nesse grupo:

```text
B=1 constante
A e C variam
```

Resultado:

```text
B
```

Assim:

```text
F = A' + B
```

## Por Que Não Escolher um Grupo Menor?

Um grupo de `2` que cubra parte da linha superior pode produzir:

```text
A'B'
```

Mas ele preserva duas variáveis. O quarteto produz apenas:

```text
A'
```

Comparação:

| Grupo | Termo produzido | Melhor? |
|---|---|---:|
| Par | `A'B'` | Não, tem 2 literais |
| Quarteto | `A'` | Sim, tem 1 literal |

Regra:

```text
Sempre prefira grupos maiores, desde que sejam válidos e ajudem a cobrir os 1s.
Sobreposição é permitida.
```

Logo, sua leitura estava correta: pode e deve usar a linha completa `A'`.

## Exercícios de Fixação

### Exercício 4.1

Determine a SOP mínima:

```text
          B'  B'   B   B
        +---+---+---+---+
 A'     | 1 | 1 | 1 | 1 |
 A      | 1 | 1 | 0 | 0 |
        +---+---+---+---+
          C'   C   C  C'
```

### Exercício 4.2

Determine a SOP mínima:

```text
          B'  B'   B   B
        +---+---+---+---+
 A'     | 1 | 1 | 1 | 1 |
 A      | 1 | 0 | 0 | 1 |
        +---+---+---+---+
          C'   C   C  C'
```

### Gabarito

```text
4.1) Linha superior → A'
     Colunas 00 e 01 → B'
     F = A' + B'

4.2) Linha superior → A'
     Colunas laterais 00 e 10 → C'
     F = A' + C'
```

---

# 5. Checklist Antes do Próximo Simulado

- [ ] Em `SOP`, agrupo `1s`: constante `0` fica complementada.
- [ ] Em `POS`, agrupo `0s`: constante `0` fica direta.
- [ ] Se existir um único `0`, escrevo diretamente o maxtermo correspondente.
- [ ] Em mapa de 4 variáveis, verifico laterais, superior/inferior e cantos antes de formar grupos menores.
- [ ] Prefiro oitavas a quartetos e quartetos a pares, quando válidos.
- [ ] Uso sobreposição quando ela permite grupos maiores.

## Treino Curto Recomendado

Antes de avançar para a aula 9:

```text
1. Resolva os oito exercícios deste arquivo sem consultar o gabarito.
2. Refazer as questões 16, 18, 25 e o raciocínio da 17.
3. Se errar POS novamente, desenhe dois mapas extras agrupando apenas zeros.
```
