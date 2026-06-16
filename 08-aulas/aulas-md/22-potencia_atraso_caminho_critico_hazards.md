# Aula Detalhada - Potência, Atraso, Caminho Crítico Físico E Hazards

**Tema do dia:** consumo estático e dinâmico em CMOS, capacitância de carga, atraso de propagação, fanout, caminho crítico físico, glitches, hazards estático-1, estático-0, dinâmico e termo de consenso  
**Aula na sequência:** 22  
**Objetivo:** entender por que portas CMOS consomem energia ao comutar, por que sinais não mudam instantaneamente, como atrasos geram caminho crítico e como glitches/hazards podem aparecer em circuitos combinacionais.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 21, você viu CMOS combinacional:

```text
NMOS liga com 1
PMOS liga com 0
pull-down puxa para 0
pull-up puxa para 1
NAND e NOR em CMOS
```

Agora vamos olhar o que acontece quando deixamos o mundo ideal.

No desenho lógico, uma porta parece mudar assim:

```text
entrada muda -> saída muda imediatamente
```

Na prática, isso é mais realista:

```text
entrada muda
-> transistor começa a conduzir ou cortar
-> capacitâncias carregam ou descarregam
-> saída demora um pouco para mudar
-> pode aparecer pulso temporário
```

Essa aula conecta:

```text
CMOS
potência
atraso
temporização
caminho crítico
hazards
```

Ela também conversa com a Aula 15:

```text
Tclock >= Tclk-Q(max) + Tcomb(max) + Tsetup
```

Na Aula 15, `Tcomb` era o atraso da lógica combinacional.

Nesta aula, vamos entender de onde esse atraso vem.

---

# 2. Por Que CMOS Consome Potência?

Em uma porta CMOS ideal parada, a corrente estática é muito baixa.

Quando a saída está estável em `1`:

```text
pull-up ligado
pull-down desligado
```

Quando a saída está estável em `0`:

```text
pull-up desligado
pull-down ligado
```

Idealmente, não existe caminho direto permanente de `VDD` para `GND`.

Então por que o circuito consome potência?

Principalmente por três motivos:

```text
1. potência dinâmica
2. corrente de curto-circuito durante transições
3. corrente de fuga
```

Para a prova, o mais importante costuma ser:

```text
potência dinâmica
```

---

# 3. Potência Estática

Potência estática é o consumo quando o circuito está parado.

Em CMOS ideal:

```text
Pestática aproximadamente 0
```

Por quê?

Porque, idealmente, não existe caminho contínuo entre `VDD` e `GND`.

Mas em circuitos reais existe corrente de fuga:

```text
transistor desligado ainda deixa passar uma corrente muito pequena
```

Então, em tecnologia real:

```text
Pestática não é exatamente 0
```

Para questões introdutórias, memorize:

```text
CMOS ideal tem baixo consumo estático
```

---

# 4. Potência Dinâmica

Potência dinâmica é o consumo associado à comutação.

Ou seja:

```text
quando sinais mudam de 0 para 1
ou de 1 para 0
```

Em CMOS, a saída de uma porta carrega e descarrega capacitâncias.

Pense na saída como um pequeno capacitor:

```text
saída em 0 -> capacitor descarregado
saída em 1 -> capacitor carregado
```

Para mudar de `0` para `1`, o circuito precisa carregar essa capacitância.

Para mudar de `1` para `0`, essa carga é descarregada para `GND`.

Isso gasta energia.

## 4.1 Fórmula conceitual

Uma forma comum de resumir a potência dinâmica é:

```text
Pdinâmica ≈ alfa . C . VDD^2 . f
```

Onde:

```text
alfa -> taxa de atividade, isto é, quanto o nó comuta
C    -> capacitância de carga
VDD  -> tensão de alimentação
f    -> frequência de comutação
```

Para prova, o mais importante é entender as dependências:

```text
mais comutação -> mais potência
mais capacitância -> mais potência
maior VDD -> muito mais potência, pois aparece ao quadrado
maior frequência -> mais potência
```

## 4.2 Exemplo conceitual

Se a frequência dobra:

```text
Pdinâmica dobra
```

Se a capacitância dobra:

```text
Pdinâmica dobra
```

Se `VDD` dobra:

```text
Pdinâmica aumenta 4 vezes
```

Porque:

```text
VDD^2
```

## 4.3 O que é alfa?

`alfa` mede o quanto o sinal realmente comuta.

Se um sinal quase nunca muda:

```text
alfa baixo
potência dinâmica menor
```

Se um sinal muda o tempo todo:

```text
alfa alto
potência dinâmica maior
```

Um clock costuma ter atividade alta, porque fica alternando constantemente.

Por isso clock costuma ser relevante no consumo.

---

# 5. Capacitância De Carga

Capacitância de carga é tudo aquilo que a saída precisa carregar ou descarregar.

Ela vem de:

```text
entradas das próximas portas
fios/interconexões
transistores conectados ao nó
layout físico
```

Mesmo que você desenhe só:

```text
porta A -> porta B
```

fisicamente existe:

```text
porta A -> fio -> entrada da porta B
```

Esse fio e essa entrada possuem capacitância.

## 5.1 Quanto maior a carga, mais lento

Se uma porta precisa dirigir muitas entradas, ela tem mais capacitância para carregar.

Isso aumenta o atraso.

```text
mais carga -> mais tempo para carregar/descarregar -> maior atraso
```

## 5.2 Fanout

Fanout é a quantidade de entradas que uma saída alimenta.

Exemplo:

```text
Y alimenta 1 porta  -> fanout baixo
Y alimenta 8 portas -> fanout alto
```

Fanout alto tende a aumentar:

```text
capacitância
atraso
consumo dinâmico
```

Resumo:

```text
mais fanout -> mais carga -> mais atraso e potência
```

---

# 6. Atraso De Propagação

Atraso de propagação é o tempo entre a mudança da entrada e a mudança válida da saída.

```text
entrada muda em t0
saída muda em t0 + atraso
```

Símbolo comum:

```text
tpd
```

Ou:

```text
tprop
```

## 6.1 Exemplo simples

Uma porta tem atraso de `3 ns`.

Se a entrada muda em:

```text
t = 10 ns
```

a saída só estabiliza em:

```text
t = 13 ns
```

## 6.2 Atraso de subida e descida

Em circuitos reais, a saída pode demorar tempos diferentes para:

```text
0 -> 1
1 -> 0
```

Nomes comuns:

```text
tpLH -> saída muda de Low para High
tpHL -> saída muda de High para Low
```

Para questões básicas, se não diferenciar, use apenas:

```text
atraso da porta
```

## 6.3 Atrasos em cadeia

Se um sinal passa por várias portas em sequência, os atrasos somam.

Exemplo:

```text
porta 1 -> 2 ns
porta 2 -> 4 ns
porta 3 -> 3 ns
```

Atraso total:

```text
2 + 4 + 3 = 9 ns
```

Isso é o começo da ideia de caminho crítico.

---

# 7. Caminho Crítico Físico

Caminho crítico é o caminho mais lento entre uma origem e um destino.

Em lógica combinacional:

```text
entrada -> portas -> saída
```

O caminho crítico é a sequência de portas/interconexões com maior atraso.

Em lógica sequencial:

```text
flip-flop origem -> lógica combinacional -> flip-flop destino
```

O caminho crítico entra na equação:

```text
Tclock >= Tclk-Q(max) + Tcomb(max) + Tsetup
```

Onde:

```text
Tcomb(max) = atraso máximo da lógica combinacional
```

Nesta aula, `Tcomb(max)` é influenciado por:

```text
quantidade de portas no caminho
tipo das portas
fanout
capacitância de carga
fios/interconexões
```

## 7.1 Exemplo de caminho crítico

Considere três caminhos combinacionais:

```text
caminho A: 2 ns + 3 ns = 5 ns
caminho B: 1 ns + 4 ns + 4 ns = 9 ns
caminho C: 6 ns
```

O caminho crítico é:

```text
caminho B = 9 ns
```

É ele que limita a frequência máxima.

## 7.2 Relação com Fmax

Se:

```text
Tclock mínimo = 12 ns
```

Então:

```text
Fmax = 1000 / 12
Fmax ≈ 83,3 MHz
```

Por quê `1000`?

Porque:

```text
1 MHz = 1 ciclo por microssegundo
1 ns = 10^-9 s
F em MHz = 1000 / T em ns
```

## 7.3 Exemplo completo

Dados:

```text
Tclk-Q(max) = 2 ns
Tcomb(max) = 9 ns
Tsetup = 1 ns
```

Então:

```text
Tclock mínimo = 2 + 9 + 1
Tclock mínimo = 12 ns
```

Frequência máxima:

```text
Fmax = 1000 / 12
Fmax ≈ 83,3 MHz
```

Se a frequência for maior, o período será menor que o tempo necessário.

Então o dado pode não chegar estável ao flip-flop destino antes da borda.

---

# 8. Atraso Mínimo E Hold

Na Aula 15, você viu:

```text
Tclk-Q(min) + Tcomb(min) >= Thold
```

Essa regra protege contra um dado novo chegando rápido demais.

Nesta aula, a parte física é:

```text
Tcomb(min) = menor atraso possível da lógica combinacional
```

Se o caminho for curto demais:

```text
dado novo pode atravessar logo depois da borda
e chegar antes do tempo de hold terminar
```

Para esta prova, o mais importante é:

```text
setup se preocupa com caminho lento demais
hold se preocupa com caminho rápido demais
```

Tabela:

| Problema | Caminho perigoso | Ideia |
|---|---|---|
| Setup | caminho máximo | dado chega tarde |
| Hold | caminho mínimo | dado novo chega cedo demais |

---

# 9. Glitch

Glitch é uma mudança temporária e indesejada na saída.

Também pode aparecer como:

```text
pulso espúrio
pulso temporário
transição falsa
```

Exemplo visual:

```text
saída esperada:
111111111111

saída real:
111110111111
      ^
      glitch
```

Ou:

```text
saída esperada:
000000000000

saída real:
000001000000
      ^
      glitch
```

Glitches aparecem porque sinais que deveriam se combinar ao mesmo tempo passam por caminhos com atrasos diferentes.

---

# 10. Por Que Glitches Acontecem?

Imagine uma expressão com duas partes:

```text
F = termo1 + termo2
```

Se `termo1` e `termo2` dependem da mesma variável por caminhos diferentes, uma mudança pode chegar antes em uma parte do circuito.

Durante alguns nanossegundos, o circuito pode enxergar uma combinação intermediária que não deveria existir no mundo ideal.

Isso é comum quando há caminhos reconvergentes:

```text
        -> caminho 1 ->
entrada                 -> porta final -> saída
        -> caminho 2 ->
```

Os dois caminhos saem de sinais relacionados e se encontram novamente.

Se os atrasos forem diferentes:

```text
um caminho muda antes
outro muda depois
```

Nesse intervalo, pode aparecer glitch.

---

# 11. Hazard

Hazard é uma condição estrutural do circuito que pode gerar glitch.

Ou seja:

```text
hazard -> risco
glitch -> pulso que aparece
```

Nem todo hazard aparece em toda situação, porque depende dos atrasos.

Mas em prova, se a estrutura permite o pulso, dizemos que existe hazard.

Tipos principais:

```text
hazard estático-1
hazard estático-0
hazard dinâmico
```

---

# 12. Hazard Estático-1

Hazard estático-1 acontece quando a saída deveria permanecer em `1`, mas pode cair temporariamente para `0`.

Visual:

```text
esperado:
1111111111

real:
1111011111
    ^
    pulso para 0
```

É muito associado a circuitos em forma SOP:

```text
SOP = soma de produtos
```

## 12.1 Exemplo clássico

Considere:

```text
F = A.B + A'.C
```

Agora fixe:

```text
B = 1
C = 1
```

A função vira:

```text
F = A.1 + A'.1
F = A + A'
F = 1
```

Então, independentemente de `A`, a saída deveria ficar em `1`.

Mas no circuito físico:

```text
termo A.B depende de A
termo A'.C depende de A'
```

Quando `A` muda, `A` e `A'` podem não trocar exatamente ao mesmo tempo.

Por um instante:

```text
A.B = 0
A'.C = 0
```

Então:

```text
F = 0 + 0
F = 0
```

A saída cai temporariamente para `0`.

Isso é um hazard estático-1.

## 12.2 Como corrigir com termo de consenso

A expressão:

```text
F = A.B + A'.C
```

tem termo de consenso:

```text
B.C
```

Adicionando:

```text
F = A.B + A'.C + B.C
```

Em lógica booleana ideal, `B.C` é redundante.

Mas fisicamente ele cobre o intervalo perigoso.

Quando:

```text
B = 1
C = 1
```

o termo:

```text
B.C = 1
```

mantém a saída em `1`, mesmo enquanto `A` e `A'` estão se reorganizando.

## 12.3 Regra prática em Karnaugh

Em SOP, hazard estático-1 pode aparecer quando:

```text
dois grupos de 1 adjacentes não têm sobreposição
```

Correção:

```text
adicionar grupo de consenso que cubra a transição
```

Isso não muda a função lógica.

Mas melhora a robustez temporal.

---

# 13. Hazard Estático-0

Hazard estático-0 acontece quando a saída deveria permanecer em `0`, mas pode subir temporariamente para `1`.

Visual:

```text
esperado:
0000000000

real:
0000100000
    ^
    pulso para 1
```

É a versão dual do hazard estático-1.

Costuma aparecer em circuitos POS:

```text
POS = produto de somas
```

## 13.1 Exemplo clássico

Considere:

```text
F = (A + B).(A' + C)
```

Agora fixe:

```text
B = 0
C = 0
```

A função vira:

```text
F = (A + 0).(A' + 0)
F = A.A'
F = 0
```

Então a saída deveria ficar sempre em `0`.

Mas por atrasos diferentes, durante a transição de `A`, os dois fatores podem ficar temporariamente em `1`.

Então:

```text
F = 1.1
F = 1
```

Surge um pulso temporário para `1`.

## 13.2 Como corrigir

O termo de consenso em POS é:

```text
(B + C)
```

Então:

```text
F = (A + B).(A' + C).(B + C)
```

Em álgebra ideal, esse fator é redundante.

Mas quando:

```text
B = 0
C = 0
```

o fator:

```text
B + C = 0
```

segura a saída em `0`.

## 13.3 Regra prática

Em POS, hazard estático-0 pode aparecer quando:

```text
zeros adjacentes são cobertos por grupos sem sobreposição
```

Correção:

```text
adicionar fator de consenso
```

---

# 14. Hazard Dinâmico

Hazard dinâmico acontece quando a saída deveria mudar uma vez, mas muda várias vezes antes de estabilizar.

Visual:

```text
esperado:
0000011111

real:
000010101111
     ^^^
     várias oscilações
```

Ou:

```text
esperado:
1111100000

real:
111101010000
     ^^^
```

Ele costuma aparecer em circuitos com:

```text
muitos níveis de lógica
caminhos reconvergentes
atrasos diferentes
```

Para prova, memorize:

```text
hazard estático -> saída deveria ficar constante
hazard dinâmico -> saída deveria mudar uma vez, mas oscila antes
```

---

# 15. Hazards Em Circuitos Síncronos

Em circuitos síncronos, glitches combinacionais podem não causar erro se desaparecerem antes da borda do clock.

Exemplo:

```text
flip-flop -> lógica com glitch -> flip-flop
```

Se o glitch ocorre e some antes da borda de captura:

```text
o flip-flop destino talvez nem perceba
```

Mas glitches são perigosos quando chegam em:

```text
clock
reset assíncrono
set assíncrono
enable de latch
sinais de controle sensíveis
entradas assíncronas
```

Por quê?

Porque esses sinais podem agir imediatamente, sem esperar uma borda segura.

Resumo:

```text
glitch em dado síncrono pode ser tolerado se estabilizar a tempo
glitch em controle assíncrono pode ser perigoso
```

---

# 16. Relação Entre Hazards E Karnaugh

Karnaugh minimiza função lógica.

Mas a expressão mínima nem sempre é a mais segura contra hazards.

Exemplo:

```text
F = A.B + A'.C
```

É uma expressão lógica válida.

Mas pode ter hazard estático-1.

Adicionando consenso:

```text
F = A.B + A'.C + B.C
```

A função lógica não muda.

Mas o circuito fica mais seguro contra aquele hazard.

Em mapa de Karnaugh, isso aparece como:

```text
grupo extra sobreposto
```

Esse grupo extra pode parecer redundante para simplificação.

Mas é útil para cobrir transições físicas.

---

# 17. Como Questões Costumam Cobrar

## 17.1 Potência dinâmica

Pergunta típica:

```text
Se VDD dobra, o que acontece com a potência dinâmica?
```

Resposta:

```text
aumenta aproximadamente 4 vezes
```

Porque:

```text
Pdinâmica proporcional a VDD^2
```

## 17.2 Fanout

Pergunta típica:

```text
Uma saída passa a alimentar mais portas. O que tende a acontecer?
```

Resposta:

```text
maior capacitância
maior atraso
maior potência dinâmica
```

## 17.3 Caminho crítico

Pergunta típica:

```text
Qual caminho limita Fmax?
```

Resposta:

```text
o de maior atraso
```

## 17.4 Hazard estático

Pergunta típica:

```text
Saída deveria ficar em 1, mas pode cair para 0 por um instante.
```

Resposta:

```text
hazard estático-1
```

## 17.5 Termo de consenso

Pergunta típica:

```text
F = A.B + A'.C
Qual termo pode ser adicionado para remover hazard estático-1?
```

Resposta:

```text
B.C
```

---

# 18. Exemplos Resolvidos

## 18.1 Exemplo 1 - Potência dinâmica

Uma porta CMOS tem potência dinâmica proporcional a:

```text
C . VDD^2 . f
```

Se `VDD` passa de `1 V` para `2 V`, mantendo o resto constante, o que acontece?

Resolução:

```text
VDD dobrou
VDD^2 quadruplica
```

Resposta:

```text
potência dinâmica aumenta 4 vezes
```

## 18.2 Exemplo 2 - Caminho crítico

Considere três caminhos:

```text
A: 2 ns + 5 ns = 7 ns
B: 3 ns + 4 ns + 2 ns = 9 ns
C: 6 ns
```

O caminho crítico é:

```text
B = 9 ns
```

Se:

```text
Tclk-Q(max) = 1 ns
Tsetup = 2 ns
```

Então:

```text
Tclock mínimo = 1 + 9 + 2
Tclock mínimo = 12 ns
```

Frequência máxima:

```text
Fmax = 1000 / 12
Fmax ≈ 83,3 MHz
```

## 18.3 Exemplo 3 - Hazard estático-1

Função:

```text
F = A.B + A'.C
```

Se:

```text
B = 1
C = 1
```

Então:

```text
F = A + A'
F = 1
```

A saída deveria ficar em `1`.

Mas pode cair para `0` durante a transição de `A`.

Tipo:

```text
hazard estático-1
```

Termo de consenso:

```text
B.C
```

Função com proteção:

```text
F = A.B + A'.C + B.C
```

## 18.4 Exemplo 4 - Hazard estático-0

Função:

```text
F = (A + B).(A' + C)
```

Se:

```text
B = 0
C = 0
```

Então:

```text
F = A.A'
F = 0
```

A saída deveria ficar em `0`.

Mas pode subir para `1` durante a transição de `A`.

Tipo:

```text
hazard estático-0
```

Fator de consenso:

```text
(B + C)
```

Função com proteção:

```text
F = (A + B).(A' + C).(B + C)
```

---

# 19. Erros Comuns

## 19.1 Achar que CMOS só consome parado

O consumo importante em CMOS digital costuma ser o consumo ao comutar.

```text
comutação -> carga/descarga de capacitância -> potência dinâmica
```

## 19.2 Esquecer o quadrado de VDD

Se `VDD` dobra:

```text
potência dinâmica não dobra
potência dinâmica quadruplica
```

## 19.3 Confundir caminho crítico com caminho mais curto

Caminho crítico é o mais lento.

```text
maior atraso -> limita Fmax
```

## 19.4 Achar que todo glitch sempre quebra o circuito

Nem sempre.

Em dado síncrono, se o glitch some antes da borda de captura, pode não causar erro.

Mas em controle assíncrono, pode ser perigoso.

## 19.5 Confundir hazard estático-1 com estático-0

```text
estático-1 -> deveria ficar 1, mas cai para 0
estático-0 -> deveria ficar 0, mas sobe para 1
```

## 19.6 Remover todo termo redundante sem pensar em hazard

Em minimização lógica, termo redundante parece inútil.

Em implementação física, pode servir para evitar hazard.

---

# 20. Exercícios

## 20.1 Conceituais

1. Em CMOS ideal, por que o consumo estático é baixo?

2. O que é potência dinâmica?

3. Cite três fatores que aumentam potência dinâmica.

4. O que é capacitância de carga?

5. O que é fanout?

## 20.2 Cálculos simples

6. Se a frequência dobra e todo o resto permanece igual, o que acontece com a potência dinâmica?

7. Se `VDD` dobra e todo o resto permanece igual, o que acontece com a potência dinâmica?

8. Uma lógica tem três portas em série com atrasos `2 ns`, `3 ns` e `4 ns`. Qual é o atraso total?

9. Caminhos: `A=6 ns`, `B=11 ns`, `C=8 ns`. Qual é o caminho crítico?

10. Se `Tclk-Q(max)=2 ns`, `Tcomb(max)=10 ns` e `Tsetup=1 ns`, qual é o `Tclock mínimo`?

## 20.3 Temporização

11. Com `Tclock mínimo = 20 ns`, qual é a frequência máxima em MHz?

12. Setup está mais relacionado ao caminho máximo ou mínimo?

13. Hold está mais relacionado ao caminho máximo ou mínimo?

14. Uma saída alimenta 12 entradas em vez de 2. O que tende a acontecer com atraso e potência?

15. Em uma cadeia de portas, qual caminho limita a frequência máxima?

## 20.4 Hazards

16. A saída deveria permanecer em `1`, mas cai temporariamente para `0`. Qual hazard é esse?

17. A saída deveria permanecer em `0`, mas sobe temporariamente para `1`. Qual hazard é esse?

18. A saída deveria mudar uma vez, mas oscila várias vezes antes de estabilizar. Qual hazard é esse?

19. Para `F = A.B + A'.C`, qual termo de consenso remove o hazard estático-1?

20. Para `F = (A + B).(A' + C)`, qual fator de consenso remove o hazard estático-0?

## 20.5 Questões estilo prova

21. Assinale a alternativa incorreta sobre potência dinâmica em CMOS.

   A) Aumenta com a frequência.

   B) Aumenta com a capacitância de carga.

   C) É proporcional a `VDD^2`.

   D) Não depende da comutação dos sinais.

22. Assinale a alternativa correta sobre caminho crítico.

   A) É sempre o caminho com menos portas.

   B) É o caminho de menor atraso.

   C) É o caminho de maior atraso que limita a frequência.

   D) Só existe em circuitos assíncronos.

23. Em um circuito síncrono, um glitch em um dado combinacional pode não causar erro se:

   A) ocorrer no clock.

   B) desaparecer antes da borda de captura e respeitar setup/hold.

   C) chegar ao reset assíncrono.

   D) aumentar a frequência.

24. A expressão `F = A.B + A'.C` com `B=C=1` deveria ficar:

   A) sempre `0`.

   B) sempre `1`.

   C) alternando obrigatoriamente.

   D) em alta impedância.

25. Em Karnaugh, uma forma de reduzir hazard estático-1 em SOP é:

   A) remover todos os grupos sobrepostos.

   B) adicionar grupo de consenso cobrindo 1s adjacentes.

   C) trocar todos os 1s por 0s.

   D) usar apenas grupos de tamanho 1.

---

# 21. Gabarito

1. Porque, idealmente, não há caminho direto permanente de `VDD` para `GND` quando a saída está estável.

2. É a potência consumida durante comutação, ao carregar e descarregar capacitâncias.

3. Frequência maior, capacitância maior, `VDD` maior e maior atividade de comutação.

4. É a capacitância que a saída precisa carregar/descarregar, incluindo entradas de outras portas e fios.

5. É a quantidade de entradas que uma saída alimenta.

6. Dobra.

7. Aumenta 4 vezes.

8. `2 + 3 + 4 = 9 ns`.

9. Caminho `B`, com `11 ns`.

10. `Tclock mínimo = 2 + 10 + 1 = 13 ns`.

11. `Fmax = 1000 / 20 = 50 MHz`.

12. Caminho máximo.

13. Caminho mínimo.

14. Aumentam a capacitância de carga, o atraso e a potência dinâmica.

15. O caminho de maior atraso, isto é, o caminho crítico.

16. Hazard estático-1.

17. Hazard estático-0.

18. Hazard dinâmico.

19. `B.C`.

20. `(B + C)`.

21. D.

22. C.

23. B.

24. B.

25. B.

---

# 22. O Que Memorizar

Memorize:

```text
Pdinâmica ≈ alfa . C . VDD^2 . f
```

Interpretação:

```text
alfa -> atividade
C    -> capacitância
VDD  -> tensão
f    -> frequência
```

Memorize também:

```text
mais fanout -> mais carga -> mais atraso
```

Sobre caminho crítico:

```text
caminho crítico = maior atraso
maior atraso limita Fmax
```

Sobre hazards:

```text
estático-1 -> deveria ficar 1, mas cai para 0
estático-0 -> deveria ficar 0, mas sobe para 1
dinâmico   -> deveria mudar uma vez, mas oscila
```

Sobre consenso:

```text
A.B + A'.C  -> consenso B.C
(A+B)(A'+C) -> consenso (B+C)
```

---

# 23. Plano De Estudo Para Esta Aula

Tempo sugerido: **50 a 80 minutos**.

## 23.1 Primeira passada

Leia com foco em três ideias:

```text
por que potência aumenta?
por que atraso existe?
por que glitches aparecem?
```

## 23.2 Segunda passada

Refaça estes pontos sem olhar:

```text
Pdinâmica proporcional a C.VDD^2.f
caminho crítico é o maior atraso
hazard estático-1 e estático-0
termo de consenso
```

## 23.3 Exercícios prioritários

Se tiver pouco tempo, faça:

```text
7, 9, 10, 11, 16, 17, 18, 19, 20, 21, 22 e 25
```

Eles cobrem o núcleo de prova.

---

# 24. Conexão Com A Próxima Aula

Agora você já viu:

```text
CMOS por dentro
potência
atraso
caminho crítico
hazards
```

A próxima aula muda para armazenamento:

```text
memórias
banco de registradores
ROM
SRAM
DRAM
volatilidade
refresh
velocidade e densidade
```

Conexão:

```text
flip-flops e registradores guardam poucos bits perto da lógica
memórias guardam muitos bits com diferentes custos de velocidade, área e complexidade
```

Essa próxima parte costuma cair bastante em questão conceitual comparando tipos de memória.
