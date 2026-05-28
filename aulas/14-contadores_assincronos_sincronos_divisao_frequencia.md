# Aula Detalhada - Contadores

**Tema do dia:** contadores assíncronos, contadores síncronos, contagem crescente/decrescente, divisão de frequência, módulo de contagem e número de estados com `n` flip-flops  
**Aula na sequência:** 14  
**Objetivo:** entender como flip-flops podem ser organizados para contar eventos, prever sequências de contagem, diferenciar contadores assíncronos e síncronos e resolver questões sobre módulo, frequência e quantidade de estados.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 13, você estudou flip-flops e registradores.

O ponto mais importante para esta aula é este:

```text
flip-flop guarda 1 bit
registrador guarda vários bits
contador é um registrador que muda seguindo uma sequência
```

Um contador é um circuito sequencial porque possui memória.

Ele não depende apenas das entradas atuais. Ele também depende do valor que estava armazenado antes.

Exemplo simples:

```text
Q = 00
próxima borda de clock -> Q = 01
próxima borda de clock -> Q = 10
próxima borda de clock -> Q = 11
próxima borda de clock -> Q = 00
```

Isso é uma contagem binária de 2 bits.

---

# 2. O Que É Um Contador?

Um contador é um circuito sequencial que percorre uma sequência de estados a cada pulso de clock.

A palavra "contador" pode dar a impressão de que ele sempre conta números decimais, mas em circuitos digitais ele normalmente conta em binário.

Exemplo de contador binário crescente de 3 bits:

| Pulso de clock | Q2 | Q1 | Q0 | Valor binário | Valor decimal |
|---:|---:|---:|---:|---|---:|
| 0 | 0 | 0 | 0 | `000` | 0 |
| 1 | 0 | 0 | 1 | `001` | 1 |
| 2 | 0 | 1 | 0 | `010` | 2 |
| 3 | 0 | 1 | 1 | `011` | 3 |
| 4 | 1 | 0 | 0 | `100` | 4 |
| 5 | 1 | 0 | 1 | `101` | 5 |
| 6 | 1 | 1 | 0 | `110` | 6 |
| 7 | 1 | 1 | 1 | `111` | 7 |
| 8 | 0 | 0 | 0 | `000` | 0 |

Depois de `111`, ele volta para `000`.

Isso acontece porque 3 bits representam apenas 8 combinações.

---

# 3. Estados Em Um Contador

Cada valor armazenado pelo contador é um estado.

Em um contador de 2 bits, os estados possíveis são:

| Q1 | Q0 | Estado decimal |
|---:|---:|---:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 2 |
| 1 | 1 | 3 |

Então um contador de 2 bits possui:

```text
4 estados possíveis
```

A regra geral é:

```text
n flip-flops -> n bits -> 2^n estados possíveis
```

Tabela importante:

| Número de flip-flops | Bits armazenados | Estados possíveis |
|---:|---:|---:|
| 1 | 1 bit | 2 estados |
| 2 | 2 bits | 4 estados |
| 3 | 3 bits | 8 estados |
| 4 | 4 bits | 16 estados |
| 5 | 5 bits | 32 estados |

Essa tabela cai muito em questões simples.

---

# 4. Módulo De Um Contador

O módulo de um contador é a quantidade de estados diferentes percorridos antes de repetir.

Exemplo:

```text
00 -> 01 -> 10 -> 11 -> 00
```

Esse contador percorre 4 estados.

Logo:

```text
contador módulo 4
```

Outro exemplo:

```text
000 -> 001 -> 010 -> 011 -> 100 -> 101 -> 000
```

Esse percorre 6 estados.

Logo:

```text
contador módulo 6
```

Importante:

```text
módulo não é necessariamente igual a 2^n
```

Se o contador usa todos os estados disponíveis, o módulo é `2^n`.

Se ele pula ou reseta antes de usar todos, o módulo pode ser menor.

---

# 5. Contador Crescente E Decrescente

Um contador crescente sobe a sequência numérica.

Exemplo de 3 bits:

```text
000 -> 001 -> 010 -> 011 -> 100 -> 101 -> 110 -> 111 -> 000
```

Um contador decrescente desce a sequência numérica.

```text
111 -> 110 -> 101 -> 100 -> 011 -> 010 -> 001 -> 000 -> 111
```

Em prova, a pergunta pode não usar a palavra crescente ou decrescente. Ela pode mostrar só a tabela ou a sequência.

Se os valores sobem:

```text
up counter
contador crescente
```

Se os valores descem:

```text
down counter
contador decrescente
```

---

# 6. O Bit Menos Significativo Alterna Mais Rápido

Em uma contagem binária crescente, o bit menos significativo muda a cada pulso.

Para 3 bits:

| Decimal | Q2 | Q1 | Q0 |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
| 2 | 0 | 1 | 0 |
| 3 | 0 | 1 | 1 |
| 4 | 1 | 0 | 0 |
| 5 | 1 | 0 | 1 |
| 6 | 1 | 1 | 0 |
| 7 | 1 | 1 | 1 |

Observe:

```text
Q0 muda a cada pulso
Q1 muda a cada 2 pulsos
Q2 muda a cada 4 pulsos
```

Esse padrão é a base da divisão de frequência.

---

# 7. Divisão De Frequência

Um flip-flop T com `T=1` alterna a saída a cada borda ativa.

Se o clock entra assim:

```text
CLK: _|‾|_|‾|_|‾|_|‾|_|‾|_|‾|_
```

A saída do primeiro flip-flop alterna a cada pulso:

```text
Q0 : __|‾‾|__|‾‾|__|‾‾|__
```

Isso significa que `Q0` tem metade da frequência do clock.

```text
f_Q0 = f_CLK / 2
```

Se `Q0` alimenta outro flip-flop que também alterna, a saída `Q1` divide de novo:

```text
f_Q1 = f_CLK / 4
```

E o próximo:

```text
f_Q2 = f_CLK / 8
```

Regra geral em contador binário:

```text
Q0 divide por 2
Q1 divide por 4
Q2 divide por 8
Qk divide por 2^(k+1)
```

Exemplo:

Se o clock vale `8 kHz`:

| Saída | Frequência |
|---|---:|
| Q0 | `4 kHz` |
| Q1 | `2 kHz` |
| Q2 | `1 kHz` |

---

# 8. Contadores Assíncronos

Um contador assíncrono também é chamado de:

```text
ripple counter
contador em cascata
contador por propagação
```

A ideia é simples:

```text
o clock entra no primeiro flip-flop
a saída do primeiro serve de clock para o segundo
a saída do segundo serve de clock para o terceiro
```

Visualmente:

```text
CLK -> [FF0] -> Q0 -> clock de [FF1] -> Q1 -> clock de [FF2] -> Q2
```

Cada flip-flop não recebe o clock ao mesmo tempo.

O sinal vai propagando de um estágio para o outro.

Por isso o nome ripple:

```text
uma mudança provoca outra, que provoca outra, que provoca outra
```

---

# 9. Por Que O Contador Assíncrono É Mais Simples?

Ele é simples porque cada flip-flop pode ficar configurado para alternar.

Usando flip-flops T:

```text
T0 = 1
T1 = 1
T2 = 1
```

Cada estágio alterna quando recebe sua borda de clock.

Isso reduz a lógica combinacional.

Mas existe um preço:

```text
as mudanças não acontecem exatamente ao mesmo tempo
```

O primeiro flip-flop muda, depois o segundo, depois o terceiro.

Esse atraso acumulado pode gerar estados transitórios.

---

# 10. Atraso De Propagação Em Contadores Assíncronos

Todo flip-flop tem atraso de propagação.

Se um contador assíncrono tem 4 flip-flops, a última saída só estabiliza depois que a mudança atravessa vários estágios.

Exemplo conceitual:

```text
atraso de cada FF = 10 ns
4 flip-flops -> atraso acumulado aproximado = 40 ns
```

Isso não significa que sempre será exatamente `4 * 10 ns`, mas a ideia de prova é:

```text
contador assíncrono acumula atraso estágio por estágio
```

Comparação:

| Tipo | Clock chega em todos os FF ao mesmo tempo? | Atraso acumulado entre estágios? |
|---|---|---|
| Assíncrono | Não | Sim |
| Síncrono | Sim | Não da mesma forma |

---

# 11. Contadores Síncronos

Em um contador síncrono, todos os flip-flops recebem o mesmo clock.

Visualmente:

```text
            +------ [FF0] -> Q0
CLK --------+------ [FF1] -> Q1
            +------ [FF2] -> Q2
```

A diferença está nas entradas dos flip-flops.

Elas são calculadas por lógica combinacional.

Ideia:

```text
todos atualizam juntos na mesma borda
```

Isso torna o contador síncrono mais adequado para circuitos rápidos.

---

# 12. Comparação Entre Assíncrono E Síncrono

| Característica | Contador assíncrono | Contador síncrono |
|---|---|---|
| Clock | Só o primeiro FF recebe o clock principal | Todos os FF recebem o mesmo clock |
| Complexidade | Mais simples | Mais lógica combinacional |
| Atraso | Acumula entre estágios | Menor atraso de atualização global |
| Uso | Contadores simples/divisores | Circuitos mais rápidos e controlados |
| Outro nome | Ripple counter | Synchronous counter |

Frase para prova:

```text
assíncrono é simples, mas sofre com atraso de propagação em cascata
síncrono usa mais lógica, mas todos os flip-flops atualizam juntos
```

---

# 13. Contador Síncrono Crescente De 2 Bits Com Flip-Flop T

Vamos projetar um contador crescente de 2 bits.

Sequência desejada:

| Estado atual Q1Q0 | Próximo estado Q1+Q0+ |
|---|---|
| `00` | `01` |
| `01` | `10` |
| `10` | `11` |
| `11` | `00` |

Agora pense no flip-flop T:

```text
T=0 -> mantém
T=1 -> inverte
```

Para `Q0`:

| Q1Q0 | Q0 atual | Q0 próximo | Q0 precisa inverter? |
|---|---:|---:|---|
| `00` | 0 | 1 | sim |
| `01` | 1 | 0 | sim |
| `10` | 0 | 1 | sim |
| `11` | 1 | 0 | sim |

Então:

```text
T0 = 1
```

Para `Q1`:

| Q1Q0 | Q1 atual | Q1 próximo | Q1 precisa inverter? |
|---|---:|---:|---|
| `00` | 0 | 0 | não |
| `01` | 0 | 1 | sim |
| `10` | 1 | 1 | não |
| `11` | 1 | 0 | sim |

`Q1` inverte quando `Q0=1`.

Então:

```text
T1 = Q0
```

Resultado do contador síncrono de 2 bits:

```text
T0 = 1
T1 = Q0
```

---

# 14. Contador Síncrono Crescente De 3 Bits Com Flip-Flop T

Para 3 bits, a sequência é:

```text
000 -> 001 -> 010 -> 011 -> 100 -> 101 -> 110 -> 111 -> 000
```

O padrão é:

```text
Q0 inverte sempre
Q1 inverte quando Q0=1
Q2 inverte quando Q1=1 e Q0=1
```

Então:

```text
T0 = 1
T1 = Q0
T2 = Q1·Q0
```

Esse padrão se estende:

```text
T3 = Q2·Q1·Q0
T4 = Q3·Q2·Q1·Q0
```

Ou seja:

```text
um bit mais alto só alterna quando todos os bits abaixo dele estão em 1
```

Isso faz sentido na contagem crescente.

Exemplo:

```text
011 -> 100
```

Aqui `Q2` muda de 0 para 1 porque os bits abaixo estavam `11`.

---

# 15. Contador Síncrono Decrescente Com Flip-Flop T

No contador decrescente, a lógica é parecida, mas os bits mais altos alternam quando os bits abaixo estão em 0.

Para 3 bits decrescente:

```text
111 -> 110 -> 101 -> 100 -> 011 -> 010 -> 001 -> 000 -> 111
```

Padrão:

```text
Q0 inverte sempre
Q1 inverte quando Q0=0
Q2 inverte quando Q1=0 e Q0=0
```

Então:

```text
T0 = 1
T1 = Q0'
T2 = Q1'·Q0'
```

Frase curta:

```text
contador crescente: bit alto alterna quando os menores estão em 1
contador decrescente: bit alto alterna quando os menores estão em 0
```

---

# 16. Contador Com Flip-Flop D

Com flip-flop D, a regra é:

```text
Q+ = D
```

Então, para projetar contador com D, você precisa ligar em cada entrada `D` o valor do próximo estado.

Exemplo de contador crescente de 2 bits:

| Q1 | Q0 | Q1+ | Q0+ |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |

Como `D1 = Q1+` e `D0 = Q0+`, temos:

| Q1 | Q0 | D1 | D0 |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |

Analisando:

```text
D0 = Q0'
D1 = Q1 XOR Q0
```

Então o contador crescente de 2 bits com D pode usar:

```text
D0 = Q0'
D1 = Q1 ⊕ Q0
```

Você não precisa decorar todos os projetos com D agora. O essencial é entender:

```text
em flip-flop D, a entrada D deve receber a expressão do próximo estado
```

---

# 17. Contador Módulo 8

Um contador binário de 3 bits que usa todos os estados é módulo 8.

Sequência:

```text
000 -> 001 -> 010 -> 011 -> 100 -> 101 -> 110 -> 111 -> 000
```

Quantidade de estados:

```text
8 estados
```

Como `2^3 = 8`, ele usa todos os estados possíveis.

Esse é o contador natural de 3 bits.

---

# 18. Contador Módulo 10

Um contador módulo 10 percorre 10 estados.

Ele é muito usado para contar dígitos decimais de 0 a 9.

Também pode ser chamado de:

```text
contador decimal
contador BCD
contador década
```

Sequência:

```text
0000 -> 0001 -> 0010 -> 0011 -> 0100
-> 0101 -> 0110 -> 0111 -> 1000 -> 1001 -> 0000
```

Em decimal:

```text
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 0
```

Por que precisa de 4 flip-flops?

```text
3 flip-flops -> 2^3 = 8 estados, não basta
4 flip-flops -> 2^4 = 16 estados, basta
```

Mas ele usa só 10 dos 16 estados possíveis.

Os estados `1010` a `1111` ficam não usados na contagem normal.

---

# 19. Estados Não Usados

Em um contador módulo 10 com 4 bits, existem 16 combinações possíveis.

Mas a contagem normal usa apenas:

```text
0000 até 1001
```

Estados não usados:

| Binário | Decimal |
|---|---:|
| `1010` | 10 |
| `1011` | 11 |
| `1100` | 12 |
| `1101` | 13 |
| `1110` | 14 |
| `1111` | 15 |

Em projeto real, é importante garantir que, se o circuito cair em um estado inválido, ele consiga voltar para a sequência correta.

Em prova, normalmente basta reconhecer:

```text
contador módulo N pode ter estados não usados se N não for potência de 2
```

---

# 20. Reset Para Criar Um Módulo Menor

Uma forma simples de criar contador módulo menor é resetar quando um valor específico aparece.

Exemplo: módulo 6 com 3 bits.

Contagem desejada:

```text
000 -> 001 -> 010 -> 011 -> 100 -> 101 -> 000
```

O valor seguinte natural seria:

```text
110
```

Então o circuito pode detectar `110` e resetar para `000`.

Detecção de `110`:

```text
Q2=1, Q1=1, Q0=0
```

Expressão de detecção:

```text
Q2·Q1·Q0'
```

Quando essa condição aparece, o reset é ativado.

Cuidado:

```text
se o reset for assíncrono, ele pode limpar imediatamente quando o estado detectado aparece
se for síncrono, a limpeza só ocorre na borda de clock
```

---

# 21. Como Descobrir Quantos Flip-Flops São Necessários

Para representar pelo menos `N` estados, encontre o menor `n` tal que:

```text
2^n >= N
```

Exemplos:

| Estados necessários | Menor potência suficiente | Flip-flops necessários |
|---:|---:|---:|
| 2 | `2^1 = 2` | 1 |
| 3 | `2^2 = 4` | 2 |
| 4 | `2^2 = 4` | 2 |
| 5 | `2^3 = 8` | 3 |
| 8 | `2^3 = 8` | 3 |
| 9 | `2^4 = 16` | 4 |
| 10 | `2^4 = 16` | 4 |
| 16 | `2^4 = 16` | 4 |
| 17 | `2^5 = 32` | 5 |

Macete:

```text
se N passou da potência atual, precisa de mais um flip-flop
```

---

# 22. Tabela De Transição De Um Contador

Uma tabela de transição mostra:

```text
estado atual -> próximo estado
```

Exemplo de contador módulo 4 crescente:

| Estado atual Q1Q0 | Próximo estado Q1+Q0+ |
|---|---|
| `00` | `01` |
| `01` | `10` |
| `10` | `11` |
| `11` | `00` |

Isso é uma FSM com sequência fixa.

Por isso contador é um caso específico de máquina de estados.

A diferença é que o contador normalmente segue uma ordem numérica simples.

---

# 23. Contador Como FSM

Toda máquina sequencial pode ser vista como estados e transições.

Um contador de 2 bits é uma FSM assim:

```text
S0 -> S1 -> S2 -> S3 -> S0
```

Se associarmos os estados aos valores binários:

| Estado | Código |
|---|---|
| S0 | `00` |
| S1 | `01` |
| S2 | `10` |
| S3 | `11` |

Então a transição é:

```text
00 -> 01 -> 10 -> 11 -> 00
```

Essa conexão será útil quando voltarmos para síntese de FSM.

---

# 24. Resumo Visual

## Contador assíncrono

```text
CLK -> FF0 -> FF1 -> FF2 -> FF3
```

O clock vai passando de um estágio para outro.

## Contador síncrono

```text
        -> FF0
CLK ----> FF1
        -> FF2
        -> FF3
```

Todos recebem o mesmo clock.

## Crescente com T

```text
T0 = 1
T1 = Q0
T2 = Q1·Q0
```

## Decrescente com T

```text
T0 = 1
T1 = Q0'
T2 = Q1'·Q0'
```

---

# 25. Como Questões Costumam Cobrar

## Tipo 1: quantidade de estados

Pergunta:

```text
Quantos estados tem um contador de 4 bits?
```

Resposta:

```text
2^4 = 16 estados
```

## Tipo 2: flip-flops necessários

Pergunta:

```text
Quantos flip-flops são necessários para um contador módulo 10?
```

Resposta:

```text
4 flip-flops, pois 2^3=8 não basta e 2^4=16 basta
```

## Tipo 3: sequência de contagem

Pergunta:

```text
Depois de 101 em um contador crescente de 3 bits, vem qual estado?
```

Resposta:

```text
110
```

## Tipo 4: divisão de frequência

Pergunta:

```text
Em um contador binário, se o clock é 16 kHz, qual a frequência em Q2?
```

Resposta:

```text
Q2 divide por 8, então 2 kHz
```

## Tipo 5: assíncrono versus síncrono

Pergunta:

```text
Qual contador acumula atraso estágio por estágio?
```

Resposta:

```text
contador assíncrono, ou ripple counter
```

---

# 26. Erros Comuns

## Erro 1: achar que módulo é sempre potência de 2

Errado:

```text
contador de 4 bits é sempre módulo 16
```

Correto:

```text
4 bits permitem até 16 estados, mas o circuito pode ser projetado para módulo menor
```

## Erro 2: confundir estados possíveis com estados usados

Um contador BCD usa 4 bits.

Logo, possui 16 combinações possíveis.

Mas usa normalmente só 10 estados:

```text
0000 a 1001
```

## Erro 3: esquecer que o bit Q0 alterna mais rápido

Em contagem binária:

```text
Q0 muda a cada pulso
Q1 a cada 2 pulsos
Q2 a cada 4 pulsos
```

## Erro 4: dizer que contador assíncrono recebe clock comum em todos os FF

Isso é característica de contador síncrono.

No assíncrono, o clock se propaga entre estágios.

## Erro 5: ignorar atraso de propagação

Contador assíncrono é simples, mas sofre com atraso acumulado.

Esse é um ponto conceitual muito cobrável.

---

# 27. Exercícios

## Parte A - Conceitos

1. O que é um contador digital?
2. O que significa o módulo de um contador?
3. Quantos estados possui um contador de 3 bits?
4. Quantos estados possui um contador de 5 bits?
5. Qual é a diferença entre contador crescente e decrescente?
6. Por que um contador é um circuito sequencial?

## Parte B - Número De Flip-Flops

7. Quantos flip-flops são necessários para representar 6 estados?
8. Quantos flip-flops são necessários para representar 8 estados?
9. Quantos flip-flops são necessários para representar 9 estados?
10. Quantos flip-flops são necessários para um contador módulo 10?
11. Quantos flip-flops são necessários para um contador módulo 16?
12. Quantos flip-flops são necessários para um contador módulo 17?

## Parte C - Sequência De Contagem

13. Em um contador crescente de 3 bits, qual estado vem depois de `010`?
14. Em um contador crescente de 3 bits, qual estado vem depois de `111`?
15. Em um contador decrescente de 3 bits, qual estado vem depois de `101`?
16. Em um contador decrescente de 3 bits, qual estado vem depois de `000`?
17. Complete a sequência de um contador módulo 4 crescente: `00 -> 01 -> ___ -> ___ -> 00`.
18. Complete a sequência de um contador módulo 4 decrescente: `00 -> 11 -> ___ -> ___ -> 00`.

## Parte D - Frequência

19. Um flip-flop T com `T=1` recebe clock de `10 kHz`. Qual a frequência de sua saída?
20. Em um contador binário, se `CLK=8 kHz`, qual é a frequência em `Q0`?
21. Em um contador binário, se `CLK=8 kHz`, qual é a frequência em `Q1`?
22. Em um contador binário, se `CLK=8 kHz`, qual é a frequência em `Q2`?
23. Em um contador binário, se `CLK=32 kHz`, qual é a frequência em `Q3`?

## Parte E - Assíncrono E Síncrono

24. Qual contador também é chamado de ripple counter?
25. Em qual tipo de contador todos os flip-flops recebem o mesmo clock?
26. Qual tipo de contador acumula atraso de propagação estágio por estágio?
27. Qual tipo de contador tende a ser mais simples?
28. Qual tipo de contador tende a ser melhor para circuitos mais rápidos?

## Parte F - Projeto Com Flip-Flop T

29. Em um contador síncrono crescente de 2 bits com flip-flop T, quais são `T0` e `T1`?
30. Em um contador síncrono crescente de 3 bits com flip-flop T, quais são `T0`, `T1` e `T2`?
31. Em um contador síncrono decrescente de 3 bits com flip-flop T, quais são `T0`, `T1` e `T2`?
32. Em um contador crescente, quando um bit mais alto deve alternar?
33. Em um contador decrescente, quando um bit mais alto deve alternar?

## Parte G - Módulo Menor

34. Um contador módulo 6 precisa de quantos flip-flops?
35. Um contador módulo 6 com 3 bits usa todos os estados possíveis?
36. Em um contador módulo 10 com 4 bits, quais estados binários não são usados na contagem BCD normal?
37. Para criar um contador módulo 6 a partir de 3 bits, qual valor pode ser detectado para resetar a contagem?
38. Qual é a diferença entre reset síncrono e reset assíncrono em um contador?

---

# 28. Gabarito

## Parte A

**1.** Um circuito sequencial que percorre uma sequência de estados a cada pulso de clock.  
**2.** A quantidade de estados percorridos antes de a sequência repetir.  
**3.** `2^3 = 8` estados.  
**4.** `2^5 = 32` estados.  
**5.** O crescente sobe a sequência numérica; o decrescente desce.  
**6.** Porque depende do estado armazenado anteriormente, não só das entradas atuais.

## Parte B

**7.** 3 flip-flops, pois `2^2=4` não basta e `2^3=8` basta.  
**8.** 3 flip-flops.  
**9.** 4 flip-flops.  
**10.** 4 flip-flops.  
**11.** 4 flip-flops.  
**12.** 5 flip-flops.

## Parte C

**13.** `011`.  
**14.** `000`.  
**15.** `100`.  
**16.** `111`.  
**17.** `00 -> 01 -> 10 -> 11 -> 00`.  
**18.** `00 -> 11 -> 10 -> 01 -> 00`.

## Parte D

**19.** `5 kHz`.  
**20.** `4 kHz`.  
**21.** `2 kHz`.  
**22.** `1 kHz`.  
**23.** `2 kHz`, pois `Q3` divide por 16.

## Parte E

**24.** Contador assíncrono.  
**25.** Contador síncrono.  
**26.** Contador assíncrono.  
**27.** Contador assíncrono.  
**28.** Contador síncrono.

## Parte F

**29.** `T0=1` e `T1=Q0`.  
**30.** `T0=1`, `T1=Q0`, `T2=Q1·Q0`.  
**31.** `T0=1`, `T1=Q0'`, `T2=Q1'·Q0'`.  
**32.** Quando todos os bits menos significativos abaixo dele estão em `1`.  
**33.** Quando todos os bits menos significativos abaixo dele estão em `0`.

## Parte G

**34.** 3 flip-flops.  
**35.** Não. 3 bits permitem 8 estados, mas módulo 6 usa apenas 6.  
**36.** `1010`, `1011`, `1100`, `1101`, `1110` e `1111`.  
**37.** Pode detectar `110` e resetar para `000`.  
**38.** Reset síncrono só atua na borda do clock; reset assíncrono atua imediatamente.

---

# 29. O Que Memorizar

## Estados

```text
n flip-flops -> 2^n estados possíveis
```

## Módulo

```text
módulo = quantidade de estados antes de repetir
```

## Assíncrono

```text
clock passa de um flip-flop para o outro
mais simples
atraso acumulado
```

## Síncrono

```text
todos os flip-flops recebem o mesmo clock
mais lógica combinacional
melhor para circuitos rápidos
```

## Divisão de frequência

```text
Q0 divide por 2
Q1 divide por 4
Q2 divide por 8
Q3 divide por 16
```

## Contador crescente com T

```text
T0 = 1
T1 = Q0
T2 = Q1·Q0
```

## Contador decrescente com T

```text
T0 = 1
T1 = Q0'
T2 = Q1'·Q0'
```

---

# 30. Plano De Estudo Para Esta Aula

| Etapa | Tempo | Atividade |
|---|---:|---|
| Retomada | 10 min | Relembrar flip-flop T e flip-flop D |
| Conceito de contador | 25 min | Estudar seções 2 a 6 |
| Frequência | 25 min | Estudar seção 7 e fazer contas simples |
| Assíncrono vs síncrono | 45 min | Estudar seções 8 a 12 e montar comparação |
| Projeto com T | 45 min | Estudar seções 13 a 16 |
| Módulo e BCD | 35 min | Estudar seções 17 a 21 |
| Exercícios | 60 min | Resolver os 38 exercícios sem olhar o gabarito |
| Revisão | 15 min | Fazer uma folha curta com fórmulas e diferenças |

Tempo total estimado:

```text
4h20
```

Se quiser uma primeira passada reduzida, priorize:

```text
seções 2, 3, 4, 7, 8, 11, 12, 13, 14, 18, 21 e 29
exercícios 7 a 12, 19 a 28, 29 a 34
```

---

# 31. Conexão Com A Próxima Aula

Agora você já tem a ponte entre:

```text
flip-flop -> registrador -> contador
```

O próximo assunto natural é temporização sequencial:

```text
setup time
hold time
clock-to-Q
atraso combinacional
caminho crítico
frequência máxima
```

Isso conversa diretamente com contadores, porque contadores reais não mudam instantaneamente.

O assíncrono acumula atrasos entre estágios.

O síncrono depende do caminho crítico da lógica combinacional antes dos flip-flops.
