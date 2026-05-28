# Aula Detalhada - Temporização Sequencial

**Tema do dia:** setup time, hold time, clock-to-Q, atraso combinacional, caminho crítico, frequência máxima e violações de temporização  
**Aula na sequência:** 15  
**Objetivo:** entender como o tempo afeta circuitos sequenciais, calcular a frequência máxima de clock, identificar violações de setup/hold e resolver questões de prova sobre caminho crítico.

---

## 1. Onde Esta Aula Entra No Estudo?

Nas aulas anteriores, você estudou:

```text
latch -> guarda valor enquanto está habilitado por nível
flip-flop -> guarda valor na borda do clock
registrador -> conjunto de flip-flops
contador -> registrador que muda seguindo uma sequência
```

Agora entra uma pergunta que aparece muito em circuitos digitais:

```text
quanto tempo o circuito precisa para funcionar corretamente?
```

Até aqui, quase sempre tratamos portas e flip-flops como se respondessem instantaneamente.

Na prática, nada muda instantaneamente.

Uma porta lógica leva tempo para responder.

Um flip-flop leva tempo para atualizar sua saída depois da borda do clock.

E a entrada do próximo flip-flop precisa ficar estável por um tempo mínimo antes e depois da borda.

Esses tempos formam a temporização sequencial.

---

# 2. O Circuito Síncrono Padrão

A maior parte dos cálculos desta aula usa este modelo:

```text
flip-flop de origem -> lógica combinacional -> flip-flop de destino
```

Visualmente:

```text
        borda de clock                     próxima borda de clock
              |                                      |
              v                                      v

        +-----------+       +----------------+       +-----------+
CLK --->| FF origem |------>| lógica combin. |------>| FF destino|
        +-----------+       +----------------+       +-----------+
              Q                       D intermediário        D
```

O funcionamento é:

1. Em uma borda de clock, o flip-flop de origem atualiza sua saída `Q`.
2. Essa nova saída passa pela lógica combinacional.
3. O resultado chega na entrada `D` do flip-flop de destino.
4. Na próxima borda de clock, o flip-flop de destino captura esse valor.

Para dar certo, o dado precisa chegar no destino a tempo.

Se chegar tarde demais, ocorre violação de setup.

Se chegar cedo demais no momento errado, pode ocorrer violação de hold.

---

# 3. Os Tempos Que Você Precisa Conhecer

## 3.1 Período do clock

O período do clock é o tempo entre duas bordas ativas.

```text
Tclock = tempo entre uma borda ativa e a próxima borda ativa
```

Exemplo:

```text
clock de 100 MHz -> período de 10 ns
clock de 50 MHz  -> período de 20 ns
clock de 25 MHz  -> período de 40 ns
```

Relação importante:

```text
Frequência = 1 / Período
```

Em questões com nanosegundos, use este atalho:

```text
Frequência em MHz = 1000 / período em ns
```

Exemplo:

```text
Tclock = 10 ns
F = 1000 / 10
F = 100 MHz
```

## 3.2 Clock-to-Q

Depois da borda do clock, a saída `Q` do flip-flop não muda imediatamente.

Ela leva um tempo para mudar.

Esse tempo é chamado de:

```text
clock-to-Q
```

Também pode aparecer como:

```text
Tclk-Q
Tco
Tcq
clock-to-output delay
```

Ideia:

```text
borda do clock acontece
espera Tclk-Q
Q do flip-flop fica válido
```

## 3.3 Atraso combinacional

Depois que `Q` muda, o sinal passa por portas lógicas.

Essas portas também têm atraso.

Esse tempo é:

```text
Tcombinacional
```

Também pode aparecer como:

```text
Tlogic
Tpd
propagation delay
atraso de propagação da lógica
```

Se o caminho passa por várias portas, o atraso total é a soma dos atrasos relevantes daquele caminho.

Exemplo:

```text
AND: 2 ns
OR:  3 ns
NOT: 1 ns

caminho passa por AND -> OR
Tcombinacional = 2 + 3 = 5 ns
```

## 3.4 Setup time

O setup time é o tempo mínimo que a entrada `D` do flip-flop de destino precisa ficar estável antes da borda do clock.

```text
D precisa chegar antes da borda
e precisa ficar parado por pelo menos Tsetup antes da borda
```

Se o dado chega muito perto da borda, o flip-flop pode capturar errado.

Resumo:

```text
setup olha para antes da borda
```

## 3.5 Hold time

O hold time é o tempo mínimo que a entrada `D` precisa continuar estável depois da borda do clock.

```text
depois da borda, D ainda precisa ficar parado por pelo menos Thold
```

Se o dado muda rápido demais logo após a borda, o flip-flop pode capturar errado.

Resumo:

```text
hold olha para depois da borda
```

---

# 4. Setup E Hold Lado A Lado

Esta tabela é uma das mais importantes da aula.

| Conceito | Pergunta que ele responde | Fórmula simplificada | O que causa problema |
|---|---|---|---|
| Setup | O dado chegou antes da próxima borda? | `Tclock >= Tclk-Q(max) + Tcomb(max) + Tsetup` | Caminho lento demais |
| Hold | O dado antigo ficou estável depois da borda? | `Tclk-Q(min) + Tcomb(min) >= Thold` | Caminho rápido demais |

Repare na diferença:

```text
setup depende do período do clock
hold não depende diretamente do período do clock
```

Isso é muito importante.

Se há violação de setup, diminuir a frequência do clock pode resolver.

Se há violação de hold, diminuir a frequência do clock normalmente não resolve, porque o problema acontece logo depois da mesma borda.

---

# 5. Fórmula De Frequência Máxima

Para um caminho entre dois flip-flops:

```text
Tclock mínimo = Tclk-Q(max) + Tcombinacional(max) + Tsetup
```

Depois:

```text
Fmax = 1 / Tclock mínimo
```

Usando nanosegundos:

```text
Fmax em MHz = 1000 / Tclock mínimo em ns
```

## 5.1 Exemplo direto

Dados:

```text
Tclk-Q = 2 ns
Tcombinacional = 8 ns
Tsetup = 1 ns
```

Calcule:

```text
Tclock mínimo = 2 + 8 + 1
Tclock mínimo = 11 ns
```

Agora a frequência:

```text
Fmax = 1000 / 11
Fmax ≈ 90,9 MHz
```

Resposta:

```text
o clock pode ser no máximo aproximadamente 90,9 MHz
```

## 5.2 Exemplo com clock já dado

Dados:

```text
clock = 50 MHz
Tclk-Q = 3 ns
Tcombinacional = 14 ns
Tsetup = 2 ns
```

Primeiro transforme frequência em período:

```text
Tclock = 1000 / 50
Tclock = 20 ns
```

Tempo necessário:

```text
Tnecessário = 3 + 14 + 2
Tnecessário = 19 ns
```

Comparação:

```text
disponível = 20 ns
necessário = 19 ns
```

Como `20 >= 19`, não há violação de setup.

Margem:

```text
margem = 20 - 19
margem = 1 ns
```

---

# 6. Caminho Crítico

O caminho crítico é o caminho mais lento que precisa ser percorrido dentro de um ciclo de clock.

Em circuito síncrono, normalmente é:

```text
flip-flop -> lógica combinacional mais lenta -> flip-flop
```

Ele define a frequência máxima.

Exemplo:

| Caminho | Tclk-Q | Tcomb | Tsetup | Total |
|---|---:|---:|---:|---:|
| A | 1 ns | 5 ns | 1 ns | 7 ns |
| B | 1 ns | 9 ns | 1 ns | 11 ns |
| C | 1 ns | 6 ns | 1 ns | 8 ns |

O caminho crítico é B, porque tem o maior total:

```text
11 ns
```

Logo:

```text
Tclock mínimo = 11 ns
Fmax = 1000 / 11
Fmax ≈ 90,9 MHz
```

Se você calcular a frequência usando o caminho A, daria um valor alto demais e o circuito falharia no caminho B.

---

# 7. Violação De Setup

Setup falha quando o dado chega tarde demais ao flip-flop de destino.

Condição correta:

```text
Tclock >= Tclk-Q(max) + Tcomb(max) + Tsetup
```

Se o lado direito for maior que o período do clock, há violação.

## 7.1 Exemplo de violação de setup

Dados:

```text
Tclock = 10 ns
Tclk-Q(max) = 2 ns
Tcomb(max) = 8 ns
Tsetup = 2 ns
```

Tempo necessário:

```text
Tnecessário = 2 + 8 + 2
Tnecessário = 12 ns
```

Comparação:

```text
disponível = 10 ns
necessário = 12 ns
```

Como `10 < 12`, há violação de setup.

Falta:

```text
12 - 10 = 2 ns
```

## 7.2 Como resolver setup

Para corrigir violação de setup, algumas soluções são:

- reduzir a frequência do clock;
- aumentar o período do clock;
- diminuir a lógica combinacional no caminho;
- otimizar portas;
- dividir o caminho com pipeline;
- escolher flip-flops ou células mais rápidas.

Em questão de prova, a resposta mais comum é:

```text
reduzir a frequência ou diminuir o atraso do caminho crítico
```

---

# 8. Violação De Hold

Hold falha quando o dado novo chega cedo demais ao flip-flop de destino logo após a borda.

Condição simplificada:

```text
Tclk-Q(min) + Tcomb(min) >= Thold
```

Aqui usamos atrasos mínimos, porque o problema é o caminho ser rápido demais.

## 8.1 Exemplo de violação de hold

Dados:

```text
Tclk-Q(min) = 0,8 ns
Tcomb(min) = 0,5 ns
Thold = 2 ns
```

Tempo que o dado demora para mudar:

```text
Tchegada_novo_dado = 0,8 + 0,5
Tchegada_novo_dado = 1,3 ns
```

Mas o flip-flop exige:

```text
Thold = 2 ns
```

Comparação:

```text
1,3 < 2
```

Logo, há violação de hold.

Falta:

```text
2 - 1,3 = 0,7 ns
```

## 8.2 Como resolver hold

Para corrigir violação de hold, normalmente adiciona-se atraso no caminho rápido.

Exemplos:

- inserir buffers;
- aumentar atraso mínimo da lógica;
- ajustar roteamento;
- usar elementos com atraso apropriado.

O ponto central:

```text
baixar a frequência não costuma resolver hold
```

Porque hold é um problema logo após a mesma borda, não entre uma borda e a próxima.

---

# 9. Máximo E Mínimo: Por Que Existem Dois Tipos De Atraso?

Datasheets e questões podem dar:

```text
atraso máximo
atraso mínimo
```

Eles aparecem porque componentes reais variam.

Temperatura, fabricação, tensão e carga podem alterar o tempo de resposta.

Para setup:

```text
use atrasos máximos
```

Motivo:

```text
você quer garantir que o dado chegue mesmo no pior caso lento
```

Para hold:

```text
use atrasos mínimos
```

Motivo:

```text
você quer garantir que o dado não chegue cedo demais no pior caso rápido
```

Tabela:

| Análise | Usa qual atraso? | Por quê? |
|---|---|---|
| Setup | Máximo | Caminho lento pode atrasar o dado |
| Hold | Mínimo | Caminho rápido pode mudar D cedo demais |

---

# 10. Clock Skew Em Nível De Prova

Clock skew é a diferença no momento em que o clock chega a flip-flops diferentes.

Em teoria simples, imaginamos:

```text
o clock chega em todos os flip-flops ao mesmo tempo
```

Na prática, pode chegar um pouco antes em um e um pouco depois em outro.

Exemplo:

```text
clock chega no FF origem em t = 0 ns
clock chega no FF destino em t = 0,4 ns
```

Existe um skew de `0,4 ns`.

Para esta prova, o mais importante é entender o conceito:

```text
skew altera a margem de setup e hold
```

Se a questão não mencionar skew, use as fórmulas simplificadas.

Se mencionar skew, leia com cuidado se ele ajuda ou atrapalha o caminho analisado.

Em nível básico:

- clock chegando tarde no destino pode ajudar setup, mas piorar hold;
- clock chegando cedo no destino pode piorar setup, mas ajudar hold.

Não tente decorar só sinal de fórmula sem entender o desenho. Em prova, o enunciado geralmente deixa claro se o clock do destino chega antes ou depois.

---

# 11. Pipeline E Caminho Crítico

Pipeline é uma técnica para dividir um caminho combinacional longo em caminhos menores usando registradores intermediários.

Antes:

```text
FF -> lógica de 20 ns -> FF
```

Depois:

```text
FF -> lógica de 9 ns -> FF -> lógica de 11 ns -> FF
```

O novo clock precisa respeitar o pior estágio.

Se ignorarmos o overhead dos flip-flops, o caminho crítico caiu de:

```text
20 ns para 11 ns
```

Isso permite uma frequência maior.

Mas existe uma troca:

```text
pipeline aumenta throughput, mas também aumenta latência
```

Em outras palavras:

- depois que o pipeline enche, pode sair um resultado por ciclo;
- mas cada resultado leva mais ciclos para atravessar todos os estágios.

Essa ideia volta em arquitetura e datapath.

---

# 12. Temporização Em Contadores

Na Aula 14, você viu contadores assíncronos e síncronos.

A temporização ajuda a entender por que contadores síncronos são preferidos em circuitos mais controlados.

## 12.1 Contador assíncrono

No contador assíncrono, a saída de um flip-flop aciona o clock do próximo.

```text
FF0 muda -> depois FF1 muda -> depois FF2 muda -> ...
```

Os atrasos se acumulam em cascata.

Por isso, durante um pequeno intervalo, as saídas podem passar por estados intermediários.

## 12.2 Contador síncrono

No contador síncrono, todos os flip-flops recebem o mesmo clock.

```text
todos atualizam na mesma borda
```

A lógica combinacional decide os próximos valores.

A análise de temporização fica parecida com:

```text
FF atual -> lógica de próximo estado -> FF destino
```

Ou seja, o mesmo modelo desta aula.

---

# 13. Metastabilidade

Metastabilidade é uma situação em que o flip-flop demora para decidir se a saída será 0 ou 1.

Ela pode acontecer quando uma entrada muda perto demais da borda do clock, violando setup ou hold.

Ideia:

```text
D muda bem perto da borda
flip-flop tenta capturar
saída pode ficar instável por um tempo
```

Em circuitos reais, entradas assíncronas são perigosas por isso.

Exemplo de entrada assíncrona:

```text
botão apertado por uma pessoa
sinal vindo de outro clock
sinal externo ao circuito
```

Solução comum:

```text
usar sincronizadores com flip-flops em série
```

Para esta prova, guarde a ideia:

```text
violar setup/hold pode causar captura errada ou metastabilidade
```

---

# 14. Como Questões Costumam Cobrar

## 14.1 Calcular frequência máxima

Formato comum:

```text
Tclk-Q = 1 ns
Tcomb = 12 ns
Tsetup = 2 ns
Qual é Fmax?
```

Passo:

```text
Tclock mínimo = 1 + 12 + 2 = 15 ns
Fmax = 1000 / 15 = 66,7 MHz
```

## 14.2 Verificar se um clock funciona

Formato:

```text
clock = 80 MHz
Tclk-Q = 2 ns
Tcomb = 9 ns
Tsetup = 1 ns
funciona?
```

Período:

```text
Tclock = 1000 / 80 = 12,5 ns
```

Necessário:

```text
2 + 9 + 1 = 12 ns
```

Como `12,5 >= 12`, funciona.

## 14.3 Identificar caminho crítico

Formato:

```text
caminho A = 8 ns
caminho B = 12 ns
caminho C = 10 ns
qual define Fmax?
```

Resposta:

```text
caminho B
```

## 14.4 Verificar hold

Formato:

```text
Tclk-Q(min) = 0,5 ns
Tcomb(min) = 0,3 ns
Thold = 1 ns
há violação?
```

Cálculo:

```text
0,5 + 0,3 = 0,8 ns
0,8 < 1
```

Há violação de hold.

---

# 15. Erros Comuns

## 15.1 Confundir setup com hold

Setup:

```text
antes da borda
caminho lento
usa atraso máximo
depende do período do clock
```

Hold:

```text
depois da borda
caminho rápido
usa atraso mínimo
não depende diretamente do período do clock
```

## 15.2 Colocar hold na fórmula de Fmax

Para frequência máxima básica, use:

```text
Tclock mínimo = Tclk-Q(max) + Tcomb(max) + Tsetup
```

Não coloque `Thold` nessa soma.

Hold é outra verificação.

## 15.3 Esquecer de converter frequência para período

Se a questão dá MHz, primeiro converta:

```text
T(ns) = 1000 / F(MHz)
```

Exemplo:

```text
200 MHz -> 1000 / 200 = 5 ns
```

## 15.4 Usar caminho mais curto para Fmax

Fmax depende do caminho mais lento.

O caminho mais curto é importante para hold, não para setup.

## 15.5 Achar que diminuir frequência resolve tudo

Diminuir frequência aumenta o período do clock.

Isso ajuda setup.

Mas não resolve necessariamente hold, porque hold acontece logo após a mesma borda.

---

# 16. Exercícios

## Exercício 1

Explique, em uma frase, o que é setup time.

## Exercício 2

Explique, em uma frase, o que é hold time.

## Exercício 3

Um circuito tem:

```text
Tclk-Q = 2 ns
Tcomb = 10 ns
Tsetup = 3 ns
```

Qual é o período mínimo do clock?

## Exercício 4

Usando os dados do exercício 3, qual é a frequência máxima em MHz?

## Exercício 5

Um circuito roda com clock de `100 MHz`.

Dados:

```text
Tclk-Q = 1,5 ns
Tcomb = 7 ns
Tsetup = 1 ns
```

Há violação de setup?

## Exercício 6

Um caminho tem:

```text
Tclk-Q(min) = 0,4 ns
Tcomb(min) = 0,6 ns
Thold = 1,2 ns
```

Há violação de hold?

## Exercício 7

Qual caminho define a frequência máxima?

| Caminho | Tclk-Q | Tcomb | Tsetup |
|---|---:|---:|---:|
| A | 1 ns | 4 ns | 1 ns |
| B | 1 ns | 9 ns | 1 ns |
| C | 1 ns | 6 ns | 1 ns |

## Exercício 8

Um circuito tem período de clock de `8 ns`, `Tclk-Q=1 ns` e `Tsetup=1 ns`.

Qual é o maior atraso combinacional permitido para não violar setup?

## Exercício 9

Uma violação de hold foi encontrada. Aumentar o período do clock de `10 ns` para `20 ns` resolve diretamente o problema?

## Exercício 10

Um caminho combinacional de `18 ns` foi dividido por pipeline em dois estágios:

```text
estágio 1 = 8 ns
estágio 2 = 10 ns
```

Ignorando outros atrasos, qual passa a ser o caminho crítico?

## Exercício 11

Um circuito tem três caminhos entre registradores:

```text
caminho A: atraso máximo 12 ns, atraso mínimo 2 ns
caminho B: atraso máximo 8 ns, atraso mínimo 0,5 ns
caminho C: atraso máximo 10 ns, atraso mínimo 1 ns
```

Qual caminho é mais preocupante para setup? Qual é mais preocupante para hold?

## Exercício 12

Uma entrada externa vem de um botão mecânico e entra diretamente em um flip-flop. Qual problema de temporização pode ocorrer se esse sinal mudar perto da borda do clock?

---

# 17. Gabarito Comentado

## Gabarito 1

Setup time é o tempo mínimo que a entrada `D` precisa ficar estável antes da borda ativa do clock.

## Gabarito 2

Hold time é o tempo mínimo que a entrada `D` precisa continuar estável depois da borda ativa do clock.

## Gabarito 3

```text
Tclock mínimo = Tclk-Q + Tcomb + Tsetup
Tclock mínimo = 2 + 10 + 3
Tclock mínimo = 15 ns
```

## Gabarito 4

```text
Fmax = 1000 / 15
Fmax ≈ 66,7 MHz
```

## Gabarito 5

Primeiro converta o clock:

```text
100 MHz -> 10 ns
```

Tempo necessário:

```text
1,5 + 7 + 1 = 9,5 ns
```

Como `10 >= 9,5`, não há violação de setup.

Margem:

```text
10 - 9,5 = 0,5 ns
```

## Gabarito 6

```text
Tclk-Q(min) + Tcomb(min) = 0,4 + 0,6
Tclk-Q(min) + Tcomb(min) = 1,0 ns
```

Como:

```text
1,0 < 1,2
```

há violação de hold.

Falta:

```text
1,2 - 1,0 = 0,2 ns
```

## Gabarito 7

Calcule o total:

```text
A = 1 + 4 + 1 = 6 ns
B = 1 + 9 + 1 = 11 ns
C = 1 + 6 + 1 = 8 ns
```

O caminho B define a frequência máxima, porque é o mais lento.

## Gabarito 8

Fórmula:

```text
Tclock >= Tclk-Q + Tcomb + Tsetup
```

Substituindo:

```text
8 >= 1 + Tcomb + 1
8 >= Tcomb + 2
Tcomb <= 6 ns
```

O maior atraso combinacional permitido é `6 ns`.

## Gabarito 9

Não resolve diretamente.

Aumentar o período ajuda setup, mas hold depende do caminho mínimo logo após a mesma borda.

Para hold, normalmente é preciso adicionar atraso no caminho rápido.

## Gabarito 10

O caminho crítico passa a ser o estágio 2, com `10 ns`, porque é o maior dos dois estágios.

## Gabarito 11

Para setup, preocupa o maior atraso máximo:

```text
caminho A: 12 ns
```

Para hold, preocupa o menor atraso mínimo:

```text
caminho B: 0,5 ns
```

## Gabarito 12

Pode ocorrer violação de setup/hold e, como consequência, metastabilidade.

O flip-flop pode demorar para estabilizar ou capturar um valor incorreto.

---

# 18. O Que Memorizar

Memorize estas ideias:

```text
setup -> antes da borda -> caminho lento -> atraso máximo
hold  -> depois da borda -> caminho rápido -> atraso mínimo
```

Fórmula principal:

```text
Tclock mínimo = Tclk-Q(max) + Tcomb(max) + Tsetup
```

Conversão:

```text
Fmax(MHz) = 1000 / Tclock(ns)
```

Hold:

```text
Tclk-Q(min) + Tcomb(min) >= Thold
```

Caminho crítico:

```text
o caminho mais lento entre registradores define a frequência máxima
```

Frase curta:

```text
setup é problema de chegar tarde; hold é problema de mudar cedo demais
```

---

# 19. Plano De Estudo Para Esta Aula

Sugestão para estudar esta aula:

1. Leia até a seção 8 com calma.
2. Faça os exemplos de setup e hold sem olhar a resolução.
3. Decore a diferença entre atraso máximo e atraso mínimo.
4. Resolva os 12 exercícios.
5. Refaça especialmente os exercícios 5, 6, 7, 8 e 11.

Tempo estimado:

```text
45 a 60 minutos para estudar
20 a 30 minutos para exercícios
```

Se estiver cansado, foque só em:

```text
setup
hold
Fmax
caminho crítico
```

Esses quatro pontos já cobrem a maior parte das questões.

---

# 20. Conexão Com A Próxima Aula

Na próxima aula, o foco deve voltar para FSM, mas agora em forma de síntese:

```text
enunciado -> diagrama de estados -> tabela de estados
-> codificação dos estados -> equações de próximo estado
-> implementação com flip-flops
```

A ligação com esta aula é direta.

Uma FSM implementada com flip-flops também precisa obedecer temporização:

```text
estado atual -> lógica de próximo estado -> próximo estado
```

Ou seja, síntese de FSM usa a lógica das aulas anteriores e a temporização desta aula para virar circuito real.
