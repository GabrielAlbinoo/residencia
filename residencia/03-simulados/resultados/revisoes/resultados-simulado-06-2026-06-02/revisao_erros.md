# Revisão dos erros - Simulado 06

Simulado: **Aulas 1 a 17 - nível prova real**

Data: **02/06/2026**

Resultado: **44/50 (88%)**

Tempo: **01:05:57**

## Diagnóstico geral

O resultado foi forte. O ponto crítico real foi o **Bloco 6 - Ponto flutuante**, com **2/5 (40%)**.

Principais padrões de erro:

1. Em questões do tipo **"assinale a alternativa incorreta"**, você marcou uma alternativa verdadeira.
2. Em **Qm.n**, ainda houve confusão entre:
   - bits inteiros `m`;
   - bits fracionários `n`;
   - escala `2^n`;
   - resolução `1/2^n`.
3. Em **IEEE 754 simples**, faltou fixar:
   - normalização;
   - expoente real;
   - expoente armazenado;
   - bias 127;
   - bit 1 implícito.

Prioridade de revisão:

```text
1. IEEE 754 simples
2. Qm.n: escala e resolução
3. Questões de marcar a incorreta
4. Síntese FSM com D = Q+
5. Moore vs Mealy
```

---

# Questão 13 - Diferença entre Moore e Mealy

## Enunciado

Assinale a alternativa incorreta sobre máquinas de Moore e Mealy.

Alternativas:

- A) Em Moore, a saída é associada ao estado.
- B) Em Mealy, a saída pode depender do estado atual e da entrada.
- C) Uma máquina Mealy pode responder à entrada decisiva no mesmo ciclo lógico da transição.
- D) Em Moore, a saída muda dentro do mesmo estado apenas porque a entrada mudou.

Sua resposta: **B**

Resposta correta: **D**

## Conceito

Em uma máquina de **Moore**, a saída depende apenas do estado atual.

```text
Moore:
Z = f(estado atual)
```

Então, se a máquina continua no mesmo estado, a saída não muda só porque a entrada mudou.

Em uma máquina de **Mealy**, a saída pode depender do estado atual e da entrada.

```text
Mealy:
Z = f(estado atual, entrada)
```

Por isso, dentro do mesmo estado, se a entrada muda, a saída pode mudar.

## Resolução passo a passo

Analise cada alternativa:

- A é verdadeira: Moore associa saída ao estado.
- B é verdadeira: Mealy pode depender de estado e entrada.
- C é verdadeira: Mealy pode responder no mesmo ciclo lógico, porque a entrada afeta diretamente a saída combinacional.
- D é falsa: isso descreve Mealy, não Moore.

Como a questão pede a **incorreta**, a resposta é **D**.

## Como não errar

Quando aparecer "assinale a incorreta", escreva mentalmente:

```text
quero a falsa
```

E leia cada alternativa perguntando:

```text
isso é verdade ou mentira?
```

## Exercícios semelhantes

1. Assinale a alternativa incorreta.

   A) Em Moore, a saída é fixa para cada estado.

   B) Em Mealy, a saída pode estar associada à transição.

   C) Em Moore, a entrada pode influenciar o próximo estado.

   D) Em Moore, a saída depende diretamente da entrada dentro do mesmo estado.

2. Em uma FSM, no estado `S0`, a saída é `Z=0` quando `X=0` e `Z=1` quando `X=1`. Essa característica indica principalmente qual tipo de máquina?

   A) Moore

   B) Mealy

   C) Contador assíncrono

   D) Latch SR

## Gabarito

1. **D**

2. **B**

---

# Questão 18 - Regra de síntese com flip-flop D

## Enunciado

Assinale a alternativa incorreta sobre síntese de FSM com flip-flops D.

Alternativas:

- A) A entrada D de cada flip-flop deve receber o próximo valor daquele bit de estado.
- B) Em flip-flop D, a equação de entrada é sempre D=Q, pois o flip-flop mantém o estado atual.
- C) Estados não usados podem ser tratados como don't care quando o enunciado permitir.
- D) Em uma máquina Moore, a saída pode ser simplificada a partir dos bits de estado.

Sua resposta: **A**

Resposta correta: **B**

## Conceito

No flip-flop D:

```text
Q+ = D
```

Isso significa:

```text
D deve receber o próximo estado desejado.
```

Logo:

```text
D1 = Q1+
D0 = Q0+
```

Não é:

```text
D = Q
```

Se fosse sempre `D=Q`, a máquina nunca mudaria de estado.

## Resolução passo a passo

- A é verdadeira: cada entrada D recebe o próximo valor do respectivo bit de estado.
- B é falsa: `D=Q` só mantém o estado; a regra geral de síntese é `D=Q+`.
- C é verdadeira quando o enunciado permite usar estados não usados como don't care.
- D é verdadeira: em Moore, a saída depende só do estado, então pode ser função dos bits de estado.

Como a questão pede a **incorreta**, a resposta é **B**.

## Macete

Para flip-flop D, pense:

```text
D = destino
```

Ou seja:

```text
D recebe para onde o Q vai depois da borda.
```

## Exercícios semelhantes

1. Uma FSM usa dois flip-flops D, com estado atual `Q1Q0` e próximo estado `Q1+Q0+`. Quais funções devem alimentar os flip-flops?

   A) `D1=Q1` e `D0=Q0`

   B) `D1=Q1+` e `D0=Q0+`

   C) `D1=Q0` e `D0=Q1`

   D) `D1=0` e `D0=1`

2. Assinale a alternativa incorreta.

   A) Em flip-flop D, a saída futura copia a entrada D na borda ativa.

   B) Na síntese de FSM, `D` recebe o próximo valor desejado do estado.

   C) Em uma FSM com 3 bits de estado, normalmente há três funções de entrada D.

   D) Em flip-flop D, `D` deve ser sempre igual a `Q` para a máquina evoluir.

## Gabarito

1. **B**

2. **D**

---

# Questão 23 - Escala e resolução em Qm.n

## Enunciado

Assinale a alternativa incorreta sobre o formato Qm.n.

Alternativas:

- A) A escala é `2^m`, pois `m` é a quantidade de bits inteiros.
- B) A resolução é `1/2^n`.
- C) O valor real pode ser lido como `inteiro armazenado / 2^n`.
- D) Mais bits fracionários reduzem o tamanho do passo representável.

Sua resposta: **não respondida**

Resposta correta: **A**

## Conceito

No formato `Qm.n`:

```text
m = bits da parte inteira
n = bits da parte fracionária
```

A escala vem da parte fracionária:

```text
escala = 2^n
valor real = inteiro armazenado / 2^n
resolução = 1 / 2^n
```

Então a alternativa A está errada porque diz que a escala é `2^m`.

## Resolução passo a passo

Se o formato é `Q3.5`, então:

```text
m = 3
n = 5
escala = 2^5 = 32
resolução = 1/32 = 0,03125
```

Se o inteiro armazenado for `96`:

```text
valor real = 96 / 32
valor real = 3
```

O `m` ajuda a definir faixa de valores, mas a escala de conversão vem de `n`.

## Como lembrar

```text
Qm.n
  n fica depois do ponto
  n diz quantos bits estão depois do ponto
  então n define por quanto dividir
```

## Exercícios semelhantes

1. Em formato `Q4.4`, qual é a resolução?

   A) `1/4`

   B) `1/8`

   C) `1/16`

   D) `1/32`

2. Um valor inteiro armazenado `48` está em formato `Q4.4`. Qual é o valor real?

   A) `48`

   B) `12`

   C) `6`

   D) `3`

## Gabarito

1. **C**

2. **D**

---

# Questão 27 - Expoente com bias em IEEE 754 simples

## Enunciado

`5,75_10` em binário é `101,11_2`. Em IEEE 754 simples, qual normalização e expoente armazenado estão corretos?

Alternativas:

- A) `1,0111_2 × 2^2`; expoente armazenado `129`
- B) `1,0111_2 × 2^3`; expoente armazenado `130`
- C) `1,0111_2 × 2^2`; expoente armazenado `2`
- D) `0,10111_2 × 2^3`; expoente armazenado `130`

Sua resposta: **não respondida**

Resposta correta: **A**

## Conceito

IEEE 754 simples usa:

```text
1 bit de sinal
8 bits de expoente com bias 127
23 bits de fração
```

Para número normalizado:

```text
valor = (-1)^s × 1.fração × 2^(expoente real)
```

O expoente armazenado é:

```text
expoente armazenado = expoente real + 127
```

## Resolução passo a passo

O número é:

```text
101,11_2
```

Para normalizar, deixe um único `1` antes da vírgula:

```text
101,11_2 = 1,0111_2 × 2^2
```

Por quê `2^2`?

Porque a vírgula andou duas casas para a esquerda:

```text
101,11 -> 1,0111
```

Expoente real:

```text
2
```

Expoente armazenado:

```text
127 + 2 = 129
```

Resposta:

```text
1,0111_2 × 2^2; expoente armazenado 129
```

## Exercícios semelhantes

1. `13,5_10 = 1101,1_2`. Qual é a normalização e o expoente armazenado em IEEE 754 simples?

   A) `1,1011_2 × 2^3`; expoente armazenado `130`

   B) `1,1011_2 × 2^2`; expoente armazenado `129`

   C) `0,11011_2 × 2^4`; expoente armazenado `131`

   D) `1,1011_2 × 2^3`; expoente armazenado `3`

2. `0,375_10 = 0,011_2`. Qual é a normalização correta?

   A) `1,1_2 × 2^-2`

   B) `1,1_2 × 2^2`

   C) `0,11_2 × 2^-1`

   D) `1,1_2 × 2^-1`

## Gabarito

1. **A**

2. **A**

---

# Questão 28 - Conceitos de IEEE 754 simples

## Enunciado

Assinale a alternativa incorreta sobre IEEE 754 simples para números normalizados.

Alternativas:

- A) O bit de sinal indica se o número é positivo ou negativo.
- B) O expoente armazenado usa bias.
- C) O bit 1 antes da vírgula é armazenado explicitamente na fração.
- D) A fração armazena os bits após o 1, da forma normalizada.

Sua resposta: **não respondida**

Resposta correta: **C**

## Conceito

Em números normalizados no IEEE 754:

```text
1.xxxxx × 2^e
```

O `1` antes da vírgula é chamado de **bit implícito**.

Ele não precisa ser armazenado porque, em número normalizado, ele sempre é `1`.

O campo da fração armazena somente os bits depois desse `1`.

Exemplo:

```text
1,0111 × 2^2
```

A fração armazenada começa com:

```text
0111...
```

Não com:

```text
10111...
```

## Resolução passo a passo

- A é verdadeira: sinal indica positivo ou negativo.
- B é verdadeira: expoente usa bias.
- C é falsa: o `1` antes da vírgula não é armazenado explicitamente.
- D é verdadeira: a fração guarda os bits após o `1`.

Como a questão pede a **incorreta**, a resposta é **C**.

## Exercícios semelhantes

1. Em IEEE 754 simples, o número normalizado tem mantissa `1,101`. Quais bits entram inicialmente no campo da fração?

   A) `1101`

   B) `101`

   C) `1`

   D) `0101`

2. Assinale a alternativa incorreta sobre número normalizado em IEEE 754.

   A) A forma normalizada tem um `1` antes da vírgula.

   B) O `1` antes da vírgula é implícito.

   C) A fração armazena os bits após o `1` implícito.

   D) O expoente armazenado é sempre igual ao expoente real.

## Gabarito

1. **B**

2. **D**

---

# Questão 30 - Expoente armazenado e expoente real

## Enunciado

Em IEEE 754 simples, o campo de expoente armazenado é `10000101_2`. Qual é o expoente real?

Alternativas:

- A) `133`
- B) `5`
- C) `127`
- D) `6`

Sua resposta: **não respondida**

Resposta correta: **D**

## Conceito

Em IEEE 754 simples:

```text
bias = 127
expoente real = expoente armazenado - 127
```

## Resolução passo a passo

Primeiro converta o expoente armazenado para decimal:

```text
10000101_2 = 128 + 4 + 1
10000101_2 = 133
```

Agora tire o bias:

```text
expoente real = 133 - 127
expoente real = 6
```

Resposta:

```text
6
```

## Exercícios semelhantes

1. Em IEEE 754 simples, o expoente armazenado é `10000010_2`. Qual é o expoente real?

   A) `130`

   B) `3`

   C) `2`

   D) `127`

2. Em IEEE 754 simples, o expoente real é `-3`. Qual deve ser o expoente armazenado em decimal?

   A) `124`

   B) `127`

   C) `130`

   D) `3`

## Gabarito

1. **B**

2. **A**

---

# Revisão concentrada para corrigir os erros

## 1. Questões de "incorreta"

Antes de ler alternativas, marque mentalmente:

```text
estou procurando a falsa
```

Se a alternativa estiver correta conceitualmente, ela não é a resposta.

## 2. Moore vs Mealy

```text
Moore:
Z = f(estado)
saída dentro do estado é fixa

Mealy:
Z = f(estado, entrada)
saída pode mudar dentro do mesmo estado quando a entrada muda
```

## 3. Flip-flop D em FSM

```text
D = Q+
```

Ou seja:

```text
D recebe o próximo estado
```

Não confundir:

```text
Q  = estado atual
Q+ = próximo estado
```

## 4. Qm.n

```text
Qm.n
m = bits inteiros
n = bits fracionários

escala = 2^n
resolução = 1/2^n
valor real = inteiro armazenado / 2^n
```

## 5. IEEE 754 simples

```text
1 bit de sinal
8 bits de expoente
23 bits de fração
bias = 127
```

Para normalizados:

```text
valor = (-1)^s × 1.fração × 2^expoente_real
expoente armazenado = expoente real + 127
expoente real = expoente armazenado - 127
```

O `1` antes da vírgula:

```text
é implícito
não é armazenado na fração
```

# Plano curto de correção

1. Refazer as questões 27, 28 e 30 antes de qualquer nova aula.
2. Fazer 10 exercícios rápidos só de expoente com bias.
3. Fazer 5 exercícios de normalização binária.
4. Fazer 5 exercícios de `Qm.n` com escala/resolução.
5. Em toda questão com "incorreta", escrever ao lado: `procurar a falsa`.
