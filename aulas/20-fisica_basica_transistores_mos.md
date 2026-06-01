# Aula Detalhada - Física Básica E Transistores MOS

**Tema do dia:** tensão, corrente, potência, energia, níveis lógicos, transistores MOS como chaves, NMOS, PMOS, pull-up, pull-down e inversor CMOS  
**Aula na sequência:** 20  
**Objetivo:** entender o mínimo de física elétrica necessário para estudar CMOS: como `0` e `1` aparecem como tensões, como corrente e potência entram no circuito e como transistores NMOS e PMOS funcionam como chaves controladas por tensão.

---

## 1. Onde Esta Aula Entra No Estudo?

Até agora, quase tudo foi visto no nível lógico:

```text
0 e 1
portas lógicas
expressões booleanas
somadores
ULA
flip-flops
temporização
```

Agora vamos olhar um nível abaixo:

```text
o que é fisicamente um 0?
o que é fisicamente um 1?
como uma porta lógica realmente puxa a saída para 0 ou 1?
por que existe consumo de potência?
```

Essa aula é a ponte para:

```text
Aula 21 -> CMOS combinacional
Aula 22 -> potência, atraso, caminho crítico físico e hazards
```

O foco não é virar uma aula profunda de eletrônica.

O foco é o suficiente para entender questões de Sistemas Digitais.

---

# 2. Níveis Lógicos São Tensões

Em circuitos digitais, `0` e `1` não são ideias abstratas dentro do chip.

Eles aparecem como faixas de tensão.

Normalmente:

```text
0 lógico -> tensão baixa, perto de GND
1 lógico -> tensão alta, perto de VDD
```

Onde:

```text
GND -> referência de 0 V
VDD -> tensão de alimentação positiva
```

Exemplo em um circuito alimentado com 3,3 V:

```text
0 lógico -> perto de 0 V
1 lógico -> perto de 3,3 V
```

Em um circuito alimentado com 1,2 V:

```text
0 lógico -> perto de 0 V
1 lógico -> perto de 1,2 V
```

O valor exato depende da tecnologia.

Para prova conceitual, pense:

```text
baixo -> 0
alto  -> 1
```

---

# 3. Tensão

## 3.1 O que é tensão

Tensão é diferença de potencial elétrico.

Símbolo:

```text
V
```

Unidade:

```text
volt
```

Uma forma mental simples:

```text
tensão é a "pressão" elétrica que empurra cargas
```

Não leve a analogia longe demais, mas ela ajuda no começo.

## 3.2 Tensão em circuitos digitais

Em lógica digital, a tensão é usada para representar nível lógico.

Exemplo:

```text
entrada A = 0 V    -> A = 0 lógico
entrada A = 3,3 V  -> A = 1 lógico
```

O circuito não está pensando em "verdadeiro" e "falso".

Ele está reagindo a tensões.

## 3.3 VDD e GND

GND é a referência.

```text
GND = 0 V
```

VDD é a alimentação positiva.

```text
VDD = tensão alta do circuito
```

Em diagramas CMOS:

```text
VDD fica em cima
GND fica embaixo
```

Visual:

```text
VDD
 |
 |   rede que puxa para cima
 |
saída
 |
 |   rede que puxa para baixo
 |
GND
```

---

# 4. Corrente

## 4.1 O que é corrente

Corrente é fluxo de carga elétrica.

Símbolo:

```text
I
```

Unidade:

```text
ampere
```

Em circuitos digitais, corrente aparece quando existe caminho condutor entre tensões diferentes.

Exemplo:

```text
VDD -> caminho condutor -> GND
```

Isso permite corrente.

## 4.2 Corrente convencional

Em análise básica, usamos corrente convencional:

```text
do potencial mais alto para o potencial mais baixo
de VDD para GND
```

Você não precisa entrar em movimento real de elétrons para esta prova.

## 4.3 Caminho aberto e caminho fechado

Se uma chave está aberta:

```text
não há caminho
corrente idealmente não passa
```

Se uma chave está fechada:

```text
há caminho
corrente pode passar
```

Essa ideia será reaproveitada diretamente nos transistores MOS.

---

# 5. Resistência E Lei De Ohm

Mesmo que o cronograma peça só o básico, vale conhecer esta relação:

```text
V = R * I
```

Onde:

```text
V -> tensão
R -> resistência
I -> corrente
```

Unidade de resistência:

```text
ohm
```

Se rearranjar:

```text
I = V / R
R = V / I
```

Exemplo:

```text
V = 5 V
R = 1000 ohms
I = V / R
I = 5 / 1000
I = 0,005 A
I = 5 mA
```

Para Sistemas Digitais, o uso mais provável é conceitual:

```text
menor resistência -> mais corrente
maior resistência -> menos corrente
```

---

# 6. Potência

## 6.1 Fórmula principal

Potência é taxa de consumo ou transferência de energia.

Símbolo:

```text
P
```

Unidade:

```text
watt
```

Fórmula mínima:

```text
P = V * I
```

Onde:

```text
P -> potência
V -> tensão
I -> corrente
```

## 6.2 Exemplo direto

Um circuito opera com:

```text
V = 3,3 V
I = 10 mA
```

Primeiro converta:

```text
10 mA = 0,010 A
```

Calcule:

```text
P = V * I
P = 3,3 * 0,010
P = 0,033 W
```

Em miliwatts:

```text
0,033 W = 33 mW
```

## 6.3 Interpretação

Se a tensão é fixa, mais corrente significa mais potência.

```text
maior I -> maior P
```

Se a corrente é fixa, maior tensão significa mais potência.

```text
maior V -> maior P
```

---

# 7. Energia

## 7.1 Fórmula principal

Energia é potência consumida ao longo do tempo.

Símbolo:

```text
E
```

Unidade:

```text
joule
```

Fórmula mínima:

```text
E = P * t
```

Onde:

```text
E -> energia
P -> potência
t -> tempo
```

## 7.2 Exemplo

Um circuito consome:

```text
P = 0,5 W
```

durante:

```text
t = 10 s
```

Energia:

```text
E = P * t
E = 0,5 * 10
E = 5 J
```

## 7.3 Relação com prova

Questões podem perguntar:

```text
se um circuito consome mais potência por mais tempo, consome mais energia?
```

Resposta:

```text
sim
```

Porque:

```text
E = P * t
```

---

# 8. Prefixos Que Aparecem Muito

| Prefixo | Símbolo | Valor |
|---|---:|---:|
| mili | m | 10^-3 |
| micro | u | 10^-6 |
| nano | n | 10^-9 |
| pico | p | 10^-12 |
| quilo | k | 10^3 |
| mega | M | 10^6 |
| giga | G | 10^9 |

Exemplos:

```text
1 mA = 0,001 A
1 uA = 0,000001 A
1 mW = 0,001 W
1 ns = 0,000000001 s
```

Em prova, cuidado para não usar `mA` como se fosse `A`.

---

# 9. Transistor MOS Como Chave

## 9.1 O que é MOS

MOS vem de:

```text
Metal-Oxide-Semiconductor
```

Na prática, em Sistemas Digitais, você normalmente verá MOSFET.

Para esta aula, o modelo mental mais importante é:

```text
transistor MOS funciona como uma chave controlada por tensão
```

Ele tem três terminais principais:

```text
gate
source
drain
```

Modelo simplificado:

```text
gate controla
source e drain são os terminais entre os quais a chave abre ou fecha
```

## 9.2 Ideia de chave controlada

Uma chave comum é controlada manualmente.

Um MOS é controlado por tensão no gate.

```text
tensão no gate adequada -> chave fecha
tensão no gate inadequada -> chave abre
```

Importante:

```text
idealmente, o gate quase não consome corrente contínua
```

Isso é uma das razões de CMOS ser tão útil.

---

# 10. NMOS

## 10.1 Regra principal

O NMOS liga quando o gate está em nível alto.

Tabela:

| Gate | NMOS |
|---:|---|
| 0 | desligado |
| 1 | ligado |

Em forma curta:

```text
NMOS conduz com 1 no gate
```

## 10.2 NMOS como pull-down

O NMOS é muito usado para puxar a saída para GND.

```text
saída
  |
 NMOS
  |
 GND
```

Se o NMOS liga:

```text
saída se conecta a GND
saída vira 0
```

Por isso dizemos:

```text
NMOS é bom para pull-down
```

Pull-down significa:

```text
puxar a saída para baixo, para 0 lógico
```

## 10.3 Exemplo

```text
entrada A controla gate do NMOS
saída Y está acima do NMOS
NMOS liga a saída ao GND quando A=1
```

Se:

```text
A = 1
```

então:

```text
NMOS ligado
Y conectado ao GND
Y = 0
```

Se:

```text
A = 0
```

então:

```text
NMOS desligado
Y não é puxado para GND por esse transistor
```

Mas isso não basta para garantir `Y=1`.

Para `Y=1`, precisa existir uma rede puxando para VDD.

---

# 11. PMOS

## 11.1 Regra principal

O PMOS liga quando o gate está em nível baixo.

Tabela:

| Gate | PMOS |
|---:|---|
| 0 | ligado |
| 1 | desligado |

Em forma curta:

```text
PMOS conduz com 0 no gate
```

É o comportamento complementar ao NMOS.

## 11.2 PMOS como pull-up

O PMOS é muito usado para puxar a saída para VDD.

```text
VDD
 |
PMOS
 |
saída
```

Se o PMOS liga:

```text
saída se conecta a VDD
saída vira 1
```

Por isso dizemos:

```text
PMOS é bom para pull-up
```

Pull-up significa:

```text
puxar a saída para cima, para 1 lógico
```

## 11.3 Exemplo

```text
entrada A controla gate do PMOS
PMOS liga VDD à saída quando A=0
```

Se:

```text
A = 0
```

então:

```text
PMOS ligado
Y conectado a VDD
Y = 1
```

Se:

```text
A = 1
```

então:

```text
PMOS desligado
Y não é puxado para VDD por esse transistor
```

---

# 12. NMOS E PMOS Lado A Lado

| Transistor | Liga com gate | Normalmente usado para | Efeito |
|---|---:|---|---|
| NMOS | 1 | pull-down | puxa saída para GND |
| PMOS | 0 | pull-up | puxa saída para VDD |

Frase para memorizar:

```text
NMOS liga com 1 e puxa para 0
PMOS liga com 0 e puxa para 1
```

Parece contraditório no início, mas é isso mesmo:

```text
NMOS é acionado por 1, mas costuma produzir caminho para 0
PMOS é acionado por 0, mas costuma produzir caminho para 1
```

---

# 13. Pull-Up, Pull-Down E Saída Flutuante

Uma saída digital precisa estar ligada, de forma controlada, a um nível lógico.

Existem três situações importantes:

| Situação | O que acontece |
|---|---|
| Caminho para VDD | saída tende a 1 |
| Caminho para GND | saída tende a 0 |
| Sem caminho definido | saída pode ficar flutuante |

Saída flutuante significa:

```text
não está sendo puxada claramente nem para 0 nem para 1
```

Isso é perigoso porque:

```text
o valor pode ficar indefinido
ruído pode alterar a leitura
o próximo circuito pode interpretar errado
```

Também existe uma situação ruim:

```text
caminho para VDD e caminho para GND ao mesmo tempo
```

Isso cria curto-circuito direto entre alimentação e terra.

Em CMOS correto, para cada combinação estável de entrada, a ideia é:

```text
ou a rede pull-up liga
ou a rede pull-down liga
mas não as duas ao mesmo tempo de forma estática
```

---

# 14. Inversor CMOS

## 14.1 Estrutura

O inversor CMOS usa:

```text
1 PMOS em cima
1 NMOS embaixo
```

Diagrama:

```text
         VDD
          |
        PMOS
          |
          +---- Y
          |
        NMOS
          |
         GND

A controla o gate dos dois transistores
```

## 14.2 Caso A = 0

Entrada:

```text
A = 0
```

PMOS:

```text
gate 0 -> PMOS ligado
```

NMOS:

```text
gate 0 -> NMOS desligado
```

Então:

```text
Y é puxado para VDD
Y = 1
```

## 14.3 Caso A = 1

Entrada:

```text
A = 1
```

PMOS:

```text
gate 1 -> PMOS desligado
```

NMOS:

```text
gate 1 -> NMOS ligado
```

Então:

```text
Y é puxado para GND
Y = 0
```

## 14.4 Tabela do inversor

| A | PMOS | NMOS | Y |
|---:|---|---|---:|
| 0 | ligado | desligado | 1 |
| 1 | desligado | ligado | 0 |

Logo:

```text
Y = A'
```

Esse é o primeiro circuito CMOS que você precisa dominar.

---

# 15. Por Que CMOS Consome Pouco Em Estado Estável?

CMOS significa:

```text
Complementary MOS
```

Ele usa transistores complementares:

```text
PMOS para puxar para cima
NMOS para puxar para baixo
```

No inversor ideal:

```text
A = 0 -> PMOS ligado, NMOS desligado
A = 1 -> PMOS desligado, NMOS ligado
```

Em estado estável, idealmente não há caminho direto contínuo entre:

```text
VDD e GND
```

Por isso o consumo estático ideal é muito baixo.

Mas existe consumo durante a troca de estado, porque a saída precisa carregar ou descarregar capacitâncias.

Essa parte será aprofundada depois.

Por enquanto, memorize:

```text
CMOS ideal parado consome pouco
CMOS chaveando consome energia
```

---

# 16. Capacitância Em Nível Intuitivo

Uma entrada ou saída de porta lógica pode se comportar como uma pequena capacitância.

Pense assim:

```text
para mudar de 0 para 1, a saída precisa carregar
para mudar de 1 para 0, a saída precisa descarregar
```

Carregar e descarregar leva tempo.

Isso conecta com:

```text
atraso de propagação
frequência máxima
consumo dinâmico
```

Você não precisa calcular capacitância nesta aula.

Só precisa entender:

```text
mudar tensão em um nó físico não é instantâneo
```

Isso explica por que portas têm atraso.

---

# 17. Como Questões Costumam Cobrar

## 17.1 Fórmulas básicas

Pergunta típica:

```text
Um circuito opera com V=5 V e I=20 mA. Qual é a potência?
```

Resolução:

```text
20 mA = 0,020 A
P = V * I
P = 5 * 0,020
P = 0,1 W
```

## 17.2 Energia

Pergunta típica:

```text
Um circuito consome 2 W por 3 s. Qual energia foi consumida?
```

Resolução:

```text
E = P * t
E = 2 * 3
E = 6 J
```

## 17.3 NMOS e PMOS

Pergunta típica:

```text
Qual transistor liga com gate em 1?
```

Resposta:

```text
NMOS
```

Pergunta:

```text
Qual transistor liga com gate em 0?
```

Resposta:

```text
PMOS
```

## 17.4 Inversor CMOS

Pergunta típica:

```text
No inversor CMOS, se A=0, qual é a saída?
```

Resposta:

```text
A=0 -> PMOS ligado, NMOS desligado -> Y=1
```

## 17.5 Pull-up e pull-down

Pergunta típica:

```text
Qual rede puxa a saída para VDD?
```

Resposta:

```text
pull-up
```

Pergunta:

```text
Qual rede puxa a saída para GND?
```

Resposta:

```text
pull-down
```

---

# 18. Erros Comuns

## 18.1 Tratar 0 e 1 como números abstratos demais

Em circuito real:

```text
0 e 1 são faixas de tensão
```

## 18.2 Confundir NMOS e PMOS

Memorize:

```text
NMOS liga com 1
PMOS liga com 0
```

## 18.3 Achar que PMOS em cima é coincidência

Não é coincidência.

Em CMOS:

```text
PMOS faz pull-up para VDD
NMOS faz pull-down para GND
```

## 18.4 Esquecer de converter mA para A

Se a fórmula usa:

```text
P = V * I
```

e `I` está em miliampere, converta:

```text
10 mA = 0,010 A
```

## 18.5 Confundir potência com energia

Potência:

```text
taxa de consumo
```

Energia:

```text
consumo acumulado no tempo
```

Fórmula:

```text
E = P * t
```

## 18.6 Achar que CMOS não consome nada

CMOS ideal tem baixo consumo estático.

Mas ao chavear:

```text
carrega e descarrega capacitâncias
consome energia
```

---

# 19. Exemplos Resolvidos

## 19.1 Potência com corrente em mA

Dados:

```text
V = 1,8 V
I = 5 mA
```

Converta:

```text
5 mA = 0,005 A
```

Calcule:

```text
P = V * I
P = 1,8 * 0,005
P = 0,009 W
```

Em mW:

```text
0,009 W = 9 mW
```

## 19.2 Energia

Dados:

```text
P = 50 mW
t = 20 s
```

Converta:

```text
50 mW = 0,050 W
```

Calcule:

```text
E = P * t
E = 0,050 * 20
E = 1 J
```

## 19.3 Inversor CMOS com entrada 0

Entrada:

```text
A = 0
```

PMOS:

```text
ligado
```

NMOS:

```text
desligado
```

Saída:

```text
Y = 1
```

## 19.4 Inversor CMOS com entrada 1

Entrada:

```text
A = 1
```

PMOS:

```text
desligado
```

NMOS:

```text
ligado
```

Saída:

```text
Y = 0
```

## 19.5 Saída flutuante

Imagine uma saída sem caminho para VDD e sem caminho para GND.

```text
VDD desconectado
GND desconectado
saída sem caminho forte
```

Essa saída não está sendo forçada para 0 nem para 1.

Conclusão:

```text
saída flutuante ou indefinida
```

Isso não é uma operação lógica válida para uma porta comum.

---

# 20. Exercícios

## 20.1 Conceituais

1. Em circuitos digitais, o que normalmente representa o `0` lógico fisicamente?

2. Em circuitos digitais, o que normalmente representa o `1` lógico fisicamente?

3. O que é tensão?

4. O que é corrente?

5. Qual é a fórmula básica de potência elétrica?

6. Qual é a fórmula básica de energia a partir de potência e tempo?

7. O que significa dizer que um transistor MOS funciona como chave controlada por tensão?

8. Com qual valor no gate o NMOS liga?

9. Com qual valor no gate o PMOS liga?

10. O que é pull-up?

11. O que é pull-down?

12. Por que uma saída flutuante é indesejada?

## 20.2 Aplicação direta

13. Um circuito opera com `V=5 V` e `I=10 mA`. Calcule a potência.

14. Um circuito opera com `V=3,3 V` e `I=20 mA`. Calcule a potência.

15. Um circuito consome `2 W` durante `4 s`. Calcule a energia.

16. Um circuito consome `100 mW` durante `10 s`. Calcule a energia.

17. Em um inversor CMOS, se `A=0`, quais transistores estão ligados/desligados e qual é `Y`?

18. Em um inversor CMOS, se `A=1`, quais transistores estão ligados/desligados e qual é `Y`?

19. Uma rede NMOS ligada entre saída e GND está conduzindo. Para qual nível a saída tende?

20. Uma rede PMOS ligada entre VDD e saída está conduzindo. Para qual nível a saída tende?

## 20.3 Questões mais parecidas com prova

21. Em CMOS, por que o PMOS geralmente fica na rede pull-up?

22. Em CMOS, por que o NMOS geralmente fica na rede pull-down?

23. Um circuito tem caminho condutor simultâneo de VDD para GND. Qual problema isso pode causar?

24. Um inversor CMOS ideal está parado com entrada fixa. Por que o consumo estático ideal é baixo?

25. Por que circuitos CMOS consomem energia durante o chaveamento?

26. Complete a tabela do inversor CMOS:

| A | PMOS | NMOS | Y |
|---:|---|---|---:|
| 0 | ? | ? | ? |
| 1 | ? | ? | ? |

27. Um circuito consome `0,25 W` por `8 s`. Qual energia foi consumida?

28. Uma corrente de `250 uA` em uma alimentação de `2 V` corresponde a qual potência?

---

# 21. Gabarito

1. Uma tensão baixa, perto de GND.

2. Uma tensão alta, perto de VDD.

3. Tensão é diferença de potencial elétrico.

4. Corrente é fluxo de carga elétrica.

5. `P = V * I`.

6. `E = P * t`.

7. Significa que a tensão no gate abre ou fecha o caminho entre source e drain.

8. O NMOS liga com gate em `1`.

9. O PMOS liga com gate em `0`.

10. Pull-up é a rede que puxa a saída para VDD, ou seja, para `1`.

11. Pull-down é a rede que puxa a saída para GND, ou seja, para `0`.

12. Porque ela não fica definida claramente como `0` ou `1` e pode ser afetada por ruído.

13. `10 mA = 0,010 A`. `P = 5 * 0,010 = 0,050 W = 50 mW`.

14. `20 mA = 0,020 A`. `P = 3,3 * 0,020 = 0,066 W = 66 mW`.

15. `E = 2 * 4 = 8 J`.

16. `100 mW = 0,100 W`. `E = 0,100 * 10 = 1 J`.

17. `A=0`: PMOS ligado, NMOS desligado, `Y=1`.

18. `A=1`: PMOS desligado, NMOS ligado, `Y=0`.

19. A saída tende a `0`, pois está sendo puxada para GND.

20. A saída tende a `1`, pois está sendo puxada para VDD.

21. Porque o PMOS liga com gate baixo e é usado para conectar a saída ao VDD, puxando-a para `1`.

22. Porque o NMOS liga com gate alto e é usado para conectar a saída ao GND, puxando-a para `0`.

23. Pode causar corrente direta entre alimentação e terra, aumentando consumo e podendo causar problema elétrico.

24. Porque, idealmente, não existe caminho contínuo direto entre VDD e GND em uma entrada estável.

25. Porque nós capacitivos precisam ser carregados e descarregados quando a tensão muda.

26. Tabela:

| A | PMOS | NMOS | Y |
|---:|---|---|---:|
| 0 | ligado | desligado | 1 |
| 1 | desligado | ligado | 0 |

27. `E = 0,25 * 8 = 2 J`.

28. `250 uA = 0,000250 A`. `P = 2 * 0,000250 = 0,0005 W = 0,5 mW`.

---

# 22. O Que Memorizar

```text
0 lógico -> tensão baixa, perto de GND
1 lógico -> tensão alta, perto de VDD
```

```text
P = V * I
E = P * t
```

```text
NMOS liga com 1 no gate
PMOS liga com 0 no gate
```

```text
NMOS -> pull-down -> puxa para GND -> 0
PMOS -> pull-up   -> puxa para VDD -> 1
```

```text
Inversor CMOS:
A=0 -> PMOS ligado, NMOS desligado -> Y=1
A=1 -> PMOS desligado, NMOS ligado -> Y=0
```

```text
CMOS ideal:
baixo consumo estático
consumo durante chaveamento
```

```text
Saída flutuante:
sem caminho forte para VDD ou GND
valor indefinido
```

---

# 23. Plano De Estudo Para Esta Aula

Sugestão:

```text
1. Ler seções 2 a 8 para fixar tensão, corrente, potência e energia.
2. Fazer 4 contas rápidas com P = V * I.
3. Fazer 4 contas rápidas com E = P * t.
4. Memorizar a tabela NMOS/PMOS.
5. Desenhar o inversor CMOS 2 vezes.
6. Refazer a tabela do inversor CMOS sem olhar.
7. Resolver exercícios 13 a 28.
```

Se tiver pouco tempo, priorize:

```text
13, 14, 16, 17, 18, 21, 22, 24, 25 e 28
```

Esses cobrem:

```text
potência
energia
NMOS/PMOS
inversor CMOS
consumo estático e dinâmico
```

---

# 24. Conexão Com A Próxima Aula

Na próxima aula, vamos usar NMOS e PMOS para construir portas lógicas CMOS.

O tema será:

```text
CMOS combinacional
rede pull-up
rede pull-down
NAND em CMOS
NOR em CMOS
relação com DeMorgan
```

O ponto central será:

```text
rede NMOS decide quando a saída deve ir para 0
rede PMOS decide quando a saída deve ir para 1
```

Esta aula deixou a base elétrica.

A próxima transforma essa base em portas lógicas.

