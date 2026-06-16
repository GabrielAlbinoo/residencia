# Aula Detalhada - Síntese De Máquinas De Estados

**Tema do dia:** transformar uma FSM em circuito com flip-flops D, tabela de estados, codificação, equações de próximo estado e equações de saída  
**Aula na sequência:** 16  
**Objetivo:** aprender o caminho completo da síntese de FSM: sair de um comportamento desejado e chegar nas entradas dos flip-flops e na lógica combinacional que implementa a máquina.

---

## 1. Onde Esta Aula Entra No Estudo?

Nas aulas anteriores, você já estudou as peças separadas:

```text
Aula 11 -> FSM, Moore, Mealy, estados, transições e saídas
Aula 12 -> latches e estabilidade
Aula 13 -> flip-flops e registradores
Aula 14 -> contadores
Aula 15 -> temporização sequencial
```

Agora a ideia é juntar tudo.

Até aqui, você sabia ler uma máquina de estados.

Nesta aula, você vai aprender a construir uma máquina de estados.

O caminho completo é:

```text
enunciado
-> estados
-> diagrama ou tabela de transição
-> codificação dos estados
-> tabela binária
-> equações de próximo estado
-> equações de saída
-> circuito com flip-flops
```

Isso é chamado de:

```text
síntese de FSM
```

FSM vem de:

```text
Finite State Machine
máquina de estados finitos
```

---

# 2. A Ideia Central Da Síntese De FSM

Uma FSM síncrona tem duas partes:

```text
memória + lógica combinacional
```

A memória guarda o estado atual.

A lógica combinacional calcula:

```text
próximo estado
saída
```

Modelo mental:

```text
              +-----------------------------+
entrada X --->| lógica combinacional        |---> saída Z
estado Q ---->| próximo estado e saída      |
              +-----------------------------+
                         |
                         v
                    próximo estado Q+
                         |
                         v
                    flip-flops D
                         |
                         v
                    estado atual Q
```

Em uma implementação com flip-flops D:

```text
D = Q+
```

Essa é uma das frases mais importantes da aula.

O flip-flop D copia a entrada `D` para `Q` na borda do clock.

Então, se queremos que no próximo clock o estado vire `Q+`, basta ligar:

```text
D0 = Q0+
D1 = Q1+
D2 = Q2+
```

---

# 3. O Que É Estado Atual E Próximo Estado?

O estado atual é o valor armazenado nos flip-flops agora.

```text
Q = estado atual
```

O próximo estado é o valor que queremos armazenar depois da próxima borda de clock.

```text
Q+ = próximo estado
```

Com flip-flop D:

```text
Q+ vira D
```

Exemplo simples:

| Estado atual Q | Entrada X | Próximo estado Q+ |
|---:|---:|---:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Como `Q+` é igual a `X`, a entrada do flip-flop é:

```text
D = X
```

Na próxima borda:

```text
Q recebe D
Q recebe X
```

---

# 4. Roteiro Geral Para Sintetizar Uma FSM

Use este roteiro sempre que a questão pedir projeto de máquina de estados.

## 4.1 Entender o enunciado

Descubra:

```text
qual é a entrada?
qual é a saída?
quando a saída deve valer 1?
o circuito precisa lembrar o quê?
```

## 4.2 Definir os estados

Cada estado representa uma informação relevante do passado.

Exemplo:

```text
para detectar 10, preciso saber se o último bit foi 1
```

Então posso criar estados:

```text
S0 -> ainda não tenho um 1 relevante
S1 -> último bit foi 1
```

## 4.3 Escolher Moore ou Mealy

Regra:

```text
Moore -> saída depende só do estado
Mealy -> saída depende do estado e da entrada
```

Em projeto, às vezes o enunciado exige Moore ou Mealy.

Se não exigir, as duas podem ser possíveis.

## 4.4 Montar tabela de transição

A tabela deve mostrar:

```text
estado atual
entrada
próximo estado
saída
```

## 4.5 Codificar os estados

Estados simbólicos como `S0`, `S1`, `S2` precisam virar bits.

Exemplo:

```text
S0 = 00
S1 = 01
S2 = 10
```

## 4.6 Obter equações

Com a tabela binária, encontre:

```text
D0, D1, D2...
Z
```

Se usar flip-flop D:

```text
D0 = Q0+
D1 = Q1+
```

## 4.7 Montar o circuito

O circuito final tem:

```text
flip-flops guardando Q
lógica combinacional gerando D
lógica combinacional gerando Z
clock comum
reset para estado inicial
```

---

# 5. Quantos Flip-Flops São Necessários?

Se a FSM possui `N` estados, precisamos de bits suficientes para codificar todos eles.

Regra:

```text
2^n >= N
```

Onde:

```text
n = número de flip-flops
N = número de estados
```

Tabela útil:

| Estados necessários | Flip-flops mínimos | Códigos disponíveis |
|---:|---:|---:|
| 2 | 1 | 2 |
| 3 | 2 | 4 |
| 4 | 2 | 4 |
| 5 | 3 | 8 |
| 6 | 3 | 8 |
| 7 | 3 | 8 |
| 8 | 3 | 8 |
| 9 | 4 | 16 |

Exemplo:

```text
3 estados
2 flip-flops
```

Porque:

```text
2^1 = 2 -> não basta
2^2 = 4 -> basta
```

---

# 6. Escolha De Codificação

A codificação dos estados não é única.

Exemplo com 3 estados:

```text
S0 = 00
S1 = 01
S2 = 10
```

Também poderia ser:

```text
S0 = 00
S1 = 10
S2 = 11
```

As duas podem representar a mesma máquina.

Mas as equações resultantes podem mudar.

Em prova, normalmente:

- a codificação é dada; ou
- a questão aceita uma codificação simples; ou
- o foco é montar tabela e equações usando a codificação informada.

Para estudo, use a codificação mais natural:

```text
S0 = 00
S1 = 01
S2 = 10
S3 = 11
```

## 6.1 Estados não usados

Se você tem 3 estados e usa 2 flip-flops, existem 4 códigos possíveis.

Um código sobra.

Exemplo:

```text
S0 = 00
S1 = 01
S2 = 10
11 = não usado
```

Esse estado não usado pode ser tratado de duas formas:

```text
como don't care para simplificar
ou como estado que deve voltar para S0 por segurança
```

Em prova introdutória, se o enunciado não disser nada, geralmente basta dizer que `11` é não usado.

Se pedir projeto robusto, defina:

```text
11 -> S0
```

---

# 7. Flip-Flop D: A Escolha Mais Direta

Nesta aula, vamos usar flip-flop D porque ele deixa a síntese mais direta.

Tabela do flip-flop D:

| D | Q depois da borda |
|---:|---:|
| 0 | 0 |
| 1 | 1 |

Portanto:

```text
Q+ = D
```

Se a tabela da FSM diz:

```text
Q1+ = 1
Q0+ = 0
```

então as entradas dos flip-flops devem ser:

```text
D1 = 1
D0 = 0
```

Isso é mais simples do que usar JK ou T.

Com JK ou T, seria preciso usar tabela de excitação.

Para D, o próximo estado já é a própria entrada.

---

# 8. Exemplo Completo 1 - Detector `10` Em Mealy

Vamos projetar uma máquina que detecta a sequência `10`.

Entrada:

```text
X
```

Saída:

```text
Z = 1 quando a sequência 10 acaba de aparecer
```

Como será uma máquina Mealy:

```text
Z depende do estado atual e da entrada atual
```

## 8.1 Definir estados

Para detectar `10`, precisamos lembrar se o último bit recebido foi `1`.

Estados:

| Estado | Significado |
|---|---|
| S0 | Não há `1` relevante guardado |
| S1 | O último bit recebido foi `1` |

## 8.2 Montar transições

No estado `S0`:

- se `X=0`, continua em `S0`;
- se `X=1`, vai para `S1`.

No estado `S1`:

- se `X=0`, detectou `10`, então `Z=1` e volta para `S0`;
- se `X=1`, continua em `S1`, porque o último bit ainda é `1`.

Tabela:

| Estado atual | X | Próximo estado | Z |
|---|---:|---|---:|
| S0 | 0 | S0 | 0 |
| S0 | 1 | S1 | 0 |
| S1 | 0 | S0 | 1 |
| S1 | 1 | S1 | 0 |

## 8.3 Codificar estados

São 2 estados.

Logo, basta 1 flip-flop.

Codificação:

| Estado | Q |
|---|---:|
| S0 | 0 |
| S1 | 1 |

## 8.4 Tabela binária

Substituindo `S0` por `0` e `S1` por `1`:

| Q | X | Q+ | Z |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |

## 8.5 Obter a entrada D

Como usamos flip-flop D:

```text
D = Q+
```

Pela tabela:

| Q | X | Q+ | D |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 |

Observe que `D` segue exatamente `X`.

Então:

```text
D = X
```

## 8.6 Obter a saída Z

Na tabela, `Z=1` apenas quando:

```text
Q = 1
X = 0
```

Logo:

```text
Z = Q·X'
```

## 8.7 Circuito final

O circuito precisa de:

```text
1 flip-flop D
entrada D ligada em X
saída Z = Q·X'
reset levando Q para 0
```

Resumo:

```text
D = X
Z = Q·X'
```

---

# 9. Exemplo Completo 2 - Detector `10` Em Moore

Agora vamos projetar o mesmo detector `10`, mas em Moore.

Em Moore:

```text
Z depende somente do estado
```

Isso muda o projeto.

Na máquina Mealy, a saída `Z=1` acontecia na transição quando a entrada `0` chegava depois de um `1`.

Na Moore, a saída `Z=1` precisa pertencer a um estado.

Por isso, precisamos de um estado específico de detecção.

## 9.1 Definir estados

Estados:

| Estado | Significado | Z |
|---|---|---:|
| S0 | Nenhuma parte útil de `10` guardada | 0 |
| S1 | Último bit recebido foi `1` | 0 |
| S2 | A sequência `10` foi detectada | 1 |

## 9.2 Transições

No estado `S0`:

- `X=0`: continua em `S0`;
- `X=1`: vai para `S1`.

No estado `S1`:

- `X=0`: formou `10`, vai para `S2`;
- `X=1`: continua em `S1`.

No estado `S2`:

- `X=0`: não há prefixo útil, volta para `S0`;
- `X=1`: o último bit agora é `1`, vai para `S1`.

Tabela simbólica:

| Estado atual | Z | X | Próximo estado |
|---|---:|---:|---|
| S0 | 0 | 0 | S0 |
| S0 | 0 | 1 | S1 |
| S1 | 0 | 0 | S2 |
| S1 | 0 | 1 | S1 |
| S2 | 1 | 0 | S0 |
| S2 | 1 | 1 | S1 |

## 9.3 Codificar estados

São 3 estados.

Precisamos de 2 flip-flops.

Codificação:

| Estado | Q1 | Q0 |
|---|---:|---:|
| S0 | 0 | 0 |
| S1 | 0 | 1 |
| S2 | 1 | 0 |
| Não usado | 1 | 1 |

## 9.4 Tabela binária

| Q1 | Q0 | X | Q1+ | Q0+ | Z |
|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 |

O estado `11` não foi usado.

Nesta resolução, o estado `11` será tratado como não usado/don't care, porque o enunciado não exigiu recuperação automática.

Se uma questão disser que o circuito deve voltar para `S0` caso entre em `11`, inclua também as linhas do estado `11` na tabela e refaça as equações.

## 9.5 Entradas dos flip-flops D

Como usamos flip-flops D:

```text
D1 = Q1+
D0 = Q0+
```

Vamos encontrar `D1` e `D0`.

### D1

Pela tabela, `Q1+ = 1` apenas quando:

```text
Q1 = 0
Q0 = 1
X = 0
```

Logo:

```text
D1 = Q1'·Q0·X'
```

### D0

Pela tabela, `Q0+ = 1` sempre que:

```text
X = 1
```

E vale `0` quando:

```text
X = 0
```

Logo:

```text
D0 = X
```

## 9.6 Equação da saída

Como é Moore, `Z` depende apenas do estado.

`Z=1` no estado `S2`.

Pela codificação:

```text
S2 = 10
```

Então:

```text
Z = Q1·Q0'
```

## 9.7 Circuito final

O circuito precisa de:

```text
2 flip-flops D
D1 = Q1'·Q0·X'
D0 = X
Z = Q1·Q0'
reset para S0 = 00
```

Resumo:

```text
D1 = Q1'·Q0·X'
D0 = X
Z  = Q1·Q0'
```

---

# 10. Comparando Os Dois Projetos

| Item | Mealy | Moore |
|---|---|---|
| Estados usados no detector `10` | 2 | 3 |
| Flip-flops necessários | 1 | 2 |
| Saída depende de | Estado e entrada | Estado |
| Saída `Z=1` ocorre | Na transição `S1` com `X=0` | No estado `S2` |
| Equação de saída | `Z=Q·X'` | `Z=Q1·Q0'` |

Não pense que Moore é "errado" por usar mais estados.

Também não pense que Mealy é "sempre melhor".

O ponto é:

```text
Moore e Mealy representam a saída em lugares diferentes
```

Mealy costuma reagir mais rápido à entrada.

Moore costuma ser mais fácil de interpretar porque a saída pertence ao estado.

---

# 11. Como Ler Questões De Síntese De FSM

Questões podem aparecer de várias formas.

## 11.1 Enunciado completo

Exemplo:

```text
Projete uma máquina que detecta a sequência 10.
Use máquina Mealy e flip-flop D.
```

Você precisa criar tudo:

```text
estados
tabela
codificação
equações
```

## 11.2 Tabela já dada

Exemplo:

| Estado atual | X | Próximo estado | Z |
|---|---:|---|---:|
| A | 0 | A | 0 |
| A | 1 | B | 0 |
| B | 0 | A | 1 |
| B | 1 | B | 0 |

A questão pode pedir:

```text
codifique A=0 e B=1 e obtenha D e Z
```

## 11.3 Codificação já dada

Exemplo:

```text
S0 = 00
S1 = 01
S2 = 10
```

Nesse caso, não invente outra codificação.

Use a que foi dada.

## 11.4 Circuito parcial

Exemplo:

```text
D1 = Q0·X
D0 = X'
Z = Q1
```

A questão pode pedir para montar tabela ou prever sequência.

Nesse caso, você está fazendo o caminho inverso:

```text
equações -> tabela -> comportamento
```

---

# 12. Síntese Com Flip-Flop T Ou JK

O foco desta aula é flip-flop D.

Mas é bom saber o que muda se a questão usar T ou JK.

## 12.1 Flip-flop D

Mais direto:

```text
D = Q+
```

## 12.2 Flip-flop T

O T indica se o bit deve manter ou inverter.

Regra:

```text
T = Q XOR Q+
```

Tabela:

| Q | Q+ | T |
|---:|---:|---:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Essa regra apareceu em contadores.

## 12.3 Flip-flop JK

O JK usa tabela de excitação.

| Q | Q+ | J | K |
|---:|---:|---:|---:|
| 0 | 0 | 0 | X |
| 0 | 1 | 1 | X |
| 1 | 0 | X | 1 |
| 1 | 1 | X | 0 |

O `X` aqui é don't care.

Para esta etapa do estudo, domine primeiro:

```text
FSM com flip-flop D
```

Depois, se cair T ou JK, você usa a tabela de excitação.

---

# 13. Reset E Estado Inicial

Uma FSM precisa começar em algum estado conhecido.

Normalmente:

```text
estado inicial = S0
```

Se `S0 = 00`, o reset deve colocar:

```text
Q1 = 0
Q0 = 0
```

Isso evita que a máquina comece em um estado aleatório.

Em questão, procure palavras como:

```text
estado inicial
reset
inicialmente
após limpar o circuito
```

Se houver estados não usados, uma decisão segura é fazer o circuito voltar para `S0`.

Exemplo:

```text
estado não usado 11 -> próximo estado 00
```

Isso ajuda a máquina a se recuperar caso entre em um código inválido.

---

# 14. Relação Com Temporização

Uma FSM implementada com flip-flops também obedece às regras da Aula 15.

O caminho típico é:

```text
flip-flops de estado -> lógica de próximo estado -> entradas D
```

Então:

```text
Tclock >= Tclk-Q(max) + Tcomb(max) + Tsetup
```

Aqui, `Tcomb` é o atraso da lógica que calcula:

```text
D1, D0, Z
```

Principalmente as entradas `D`, porque elas precisam estar prontas antes da próxima borda.

Resumo:

```text
síntese de FSM diz qual lógica implementar
temporização diz quão rápido essa lógica pode rodar
```

---

# 15. Erros Comuns

## 15.1 Esquecer que D é igual ao próximo estado

Erro:

```text
D = Q
```

Correto:

```text
D = Q+
```

Se `D` fosse sempre igual a `Q`, o estado nunca mudaria.

## 15.2 Misturar saída Moore com saída Mealy

Moore:

```text
Z = f(Q)
```

Mealy:

```text
Z = f(Q, X)
```

Se a saída muda dentro do mesmo estado conforme a entrada, é Mealy.

## 15.3 Codificar estados e esquecer de substituir na tabela

Depois que você define:

```text
S0 = 00
S1 = 01
S2 = 10
```

precisa transformar a tabela simbólica em tabela binária.

É da tabela binária que saem as equações.

## 15.4 Achar que a codificação é sempre única

Não é.

Codificações diferentes podem implementar a mesma FSM.

Se a prova der uma codificação, use exatamente aquela.

## 15.5 Ignorar estado não usado

Se sobra código, não finja que ele não existe fisicamente.

Os flip-flops podem representar aquele valor.

Em projeto robusto, defina para onde ele vai.

## 15.6 Confundir estado atual com próximo estado

Na tabela:

```text
Q  -> estado antes da borda
Q+ -> estado depois da próxima borda
```

As entradas `D` são calculadas com base no que você quer que `Q+` seja.

---

# 16. Como Questões Costumam Cobrar

## Tipo 1: número de flip-flops

Pergunta:

```text
Uma FSM tem 6 estados. Quantos flip-flops são necessários?
```

Resposta:

```text
3 flip-flops, pois 2^3 = 8
```

## Tipo 2: entrada D a partir da tabela

Pergunta:

```text
Se Q+ = X, qual é D?
```

Resposta:

```text
D = X
```

## Tipo 3: saída Moore

Pergunta:

```text
S2 = 10 e somente S2 tem Z=1. Qual é Z?
```

Resposta:

```text
Z = Q1·Q0'
```

## Tipo 4: saída Mealy

Pergunta:

```text
Z=1 quando Q=1 e X=0. Qual é Z?
```

Resposta:

```text
Z = Q·X'
```

## Tipo 5: identificar erro de projeto

Pergunta:

```text
Uma FSM com flip-flop D ligou D=Q, mas deveria alternar de estado.
Qual o problema?
```

Resposta:

```text
D precisa receber Q+, não Q.
```

---

# 17. Exercícios

## Exercício 1

Qual é o roteiro básico para sintetizar uma FSM?

## Exercício 2

Uma FSM tem 5 estados. Quantos flip-flops são necessários no mínimo?

## Exercício 3

Com flip-flop D, qual é a relação entre `D` e `Q+`?

## Exercício 4

Uma FSM possui dois estados:

```text
S0 = 0
S1 = 1
```

Tabela:

| Q | X | Q+ | Z |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |

Obtenha `D` e `Z`.

## Exercício 5

A máquina do exercício 4 é Moore ou Mealy?

## Exercício 6

Uma FSM Moore tem estados:

| Estado | Q1 | Q0 | Z |
|---|---:|---:|---:|
| S0 | 0 | 0 | 0 |
| S1 | 0 | 1 | 0 |
| S2 | 1 | 0 | 1 |

Qual é a equação de `Z`?

## Exercício 7

Para a tabela abaixo, usando flip-flop D, obtenha `D1` e `D0`.

| Q1 | Q0 | X | Q1+ | Q0+ |
|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 |

## Exercício 8

Em uma FSM Mealy, `Z=1` quando `Q1=0`, `Q0=1` e `X=1`. Qual é `Z`?

## Exercício 9

Uma FSM usa 2 flip-flops, mas só tem 3 estados válidos. Quantos estados binários não usados existem?

## Exercício 10

Por que é importante ter reset em uma FSM?

## Exercício 11

Em um projeto com flip-flop T, qual fórmula relaciona `T`, `Q` e `Q+`?

## Exercício 12

Uma FSM tem:

```text
Tclk-Q(max) = 2 ns
Tcomb(max) = 9 ns
Tsetup = 1 ns
```

Qual é o menor período de clock permitido?

---

# 18. Gabarito Comentado

## Gabarito 1

Roteiro:

```text
enunciado
-> estados
-> tabela de transição e saída
-> codificação dos estados
-> tabela binária
-> equações de próximo estado
-> equações de saída
-> implementação com flip-flops
```

## Gabarito 2

5 estados exigem 3 flip-flops.

```text
2^2 = 4 -> não basta
2^3 = 8 -> basta
```

## Gabarito 3

Com flip-flop D:

```text
D = Q+
```

## Gabarito 4

Como `D=Q+`, observe a coluna `Q+`.

Ela é igual a `X`.

Logo:

```text
D = X
```

Para a saída:

```text
Z=1 quando Q=1 e X=0
```

Então:

```text
Z = Q·X'
```

## Gabarito 5

É Mealy.

Motivo:

```text
Z depende de Q e X
```

## Gabarito 6

`Z=1` apenas em `S2`.

Como:

```text
S2 = 10
```

então:

```text
Z = Q1·Q0'
```

## Gabarito 7

Como usamos flip-flop D:

```text
D1 = Q1+
D0 = Q0+
```

Pela tabela:

```text
D1 = Q1'·Q0·X'
D0 = X
```

## Gabarito 8

Condição:

```text
Q1=0
Q0=1
X=1
```

Logo:

```text
Z = Q1'·Q0·X
```

## Gabarito 9

Com 2 flip-flops:

```text
2^2 = 4 estados possíveis
```

Se só 3 são usados:

```text
1 estado não usado
```

## Gabarito 10

Reset coloca a FSM em um estado inicial conhecido.

Sem reset, os flip-flops podem começar em um valor aleatório.

## Gabarito 11

Para flip-flop T:

```text
T = Q XOR Q+
```

## Gabarito 12

```text
Tclock mínimo = Tclk-Q(max) + Tcomb(max) + Tsetup
Tclock mínimo = 2 + 9 + 1
Tclock mínimo = 12 ns
```

---

# 19. O Que Memorizar

Memorize:

```text
FSM = memória + lógica combinacional
estado atual = Q
próximo estado = Q+
com flip-flop D: D = Q+
Moore: Z = f(Q)
Mealy: Z = f(Q, X)
```

Roteiro:

```text
estados -> tabela -> codificação -> equações -> circuito
```

Número de flip-flops:

```text
2^n >= número de estados
```

Estado inicial:

```text
reset deve levar a FSM para S0
```

Frase importante:

```text
as entradas D não recebem o estado atual; recebem o próximo estado desejado
```

---

# 20. Plano De Estudo Para Esta Aula

Sugestão:

| Etapa | Tempo | O que fazer |
|---|---:|---|
| Retomada | 10 min | Relembrar Moore, Mealy e flip-flop D |
| Roteiro geral | 15 min | Estudar seções 2 a 7 |
| Exemplo Mealy | 25 min | Reproduzir o detector `10` sem olhar |
| Exemplo Moore | 35 min | Reproduzir tabela, codificação e equações |
| Exercícios | 40 min | Resolver os 12 exercícios |
| Revisão | 10 min | Fazer uma folha curta com `D=Q+`, Moore e Mealy |

Se tiver pouco tempo, foque em:

```text
D = Q+
tabela binária
saída Moore
saída Mealy
```

---

# 21. Conexão Com A Próxima Aula

Com esta aula, a parte de matemática/fundamentos e sequencial básico fica muito mais fechada.

A próxima etapa do cronograma começa a puxar para arquitetura de computadores e aritmética digital.

O próximo assunto deve ser:

```text
algoritmos procedurais e assembly básico
operandos
registradores
imediatos
memória
```

Isso conversa com FSM porque arquitetura também é construída com estado, registradores, controle e datapath.
