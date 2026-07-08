# Revisão Certa - Assuntos Errados No Simulado 13

Simulado: geral aulas 1 a 27 - casca grossa  
Data da revisão: 08/07/2026  
Objetivo: revisar os assuntos que causaram erro, dúvida ou questão em branco no simulado 13.

## 1. Carry-Out E Overflow Assinado

Esse foi um dos erros mais importantes do simulado.

Carry-out e overflow assinado não são a mesma coisa.

```text
carry-out -> estouro em interpretação sem sinal, unsigned
overflow signed -> estouro em interpretação com sinal, complemento de 2
```

Em 8 bits:

```text
unsigned: 0 a 255
signed:   -128 a +127
```

Exemplo da questão:

```text
  10011010
+ 01110100
-----------
1 00001110
```

O resultado de 8 bits é:

```text
00001110
```

O `1` que sobrou à esquerda é o carry-out:

```text
carry-out = 1
```

Mas, para overflow assinado, é preciso olhar o sinal dos operandos.

Em complemento de 2:

```text
MSB = 0 -> positivo ou zero
MSB = 1 -> negativo
```

Na soma:

```text
10011010 -> negativo
01110100 -> positivo
```

Negativo + positivo não gera overflow assinado. Eles estão em sentidos opostos.

Então:

```text
carry-out = 1
overflow signed = 0
```

Regra de prova:

```text
positivo + positivo = negativo -> overflow signed
negativo + negativo = positivo -> overflow signed
positivo + negativo            -> não dá overflow signed
negativo + positivo            -> não dá overflow signed
```

## 2. MSB

MSB significa Most Significant Bit, ou bit mais significativo.

É o bit mais à esquerda:

```text
10010110
^
MSB
```

Em números sem sinal, o MSB é apenas o bit de maior peso.

Em complemento de 2, o MSB também indica o sinal:

```text
MSB = 0 -> número positivo ou zero
MSB = 1 -> número negativo
```

Isso aparece em:

```text
1. overflow assinado;
2. shift aritmético;
3. comparação signed;
4. interpretação de números em complemento de 2.
```

## 3. DeMorgan Multinível

Na questão:

```text
(A + B'C)'
```

Aplicando DeMorgan:

```text
(A + B'C)' = A'(B'C)'
```

Agora aplica DeMorgan de novo dentro:

```text
(B'C)' = B + C'
```

Logo:

```text
(A + B'C)' = A'(B + C')
```

Observação importante: a alternativa `A'(B'C)'` também é equivalente, só não está totalmente simplificada. Então essa questão ficou problemática. Conceitualmente, você não errou DeMorgan se marcou essa forma.

Regra:

```text
(X + Y)' = X'Y'
(XY)'    = X' + Y'
```

Quando tiver expressão com várias camadas, aplique uma camada por vez.

## 4. FSM Com Flip-Flop D

Em flip-flop D:

```text
D = Q+
```

Isso quer dizer:

```text
entrada D = próximo estado
```

Se a questão pede `D1`, ela quer o próximo valor de `Q1`.

Na questão, a tabela implicava:

```text
se X = 0, então Q1+ = Q0
se X = 1, então Q1+ = Q1
```

Isso é como um multiplexador controlado por `X`:

```text
D1 = X'Q0 + XQ1
```

Forma mental:

```text
X = 0 escolhe Q0 -> termo X'Q0
X = 1 escolhe Q1 -> termo XQ1
```

Pegadinha:

Não tente interpretar `D1` como uma saída qualquer. Em FF D, `D1` é exatamente o valor que `Q1` terá depois da borda de clock.

## 5. Ring Counter

Ring counter é um contador em anel.

A ideia é ter um único `1` circulando entre os flip-flops.

Com 4 FFs:

```text
1000
0100
0010
0001
1000
...
```

Com `n` flip-flops:

```text
ring simples -> n estados úteis
```

Exemplos:

```text
4 FFs -> 4 estados úteis
5 FFs -> 5 estados úteis
8 FFs -> 8 estados úteis
```

O que precisa saber para prova:

```text
ring counter = um 1 circulando
n FFs = n estados úteis
```

## 6. Johnson Counter

Johnson counter é parecido com ring counter, mas a realimentação usa o complemento da última saída.

Ele vai enchendo de `1` e depois esvaziando.

Com 4 FFs, uma sequência típica:

```text
0000
1000
1100
1110
1111
0111
0011
0001
0000
...
```

Com `n` flip-flops:

```text
Johnson -> 2n estados úteis
```

Exemplos:

```text
4 FFs -> 8 estados úteis
5 FFs -> 10 estados úteis
8 FFs -> 16 estados úteis
```

O que precisa saber para prova:

```text
Johnson = realimenta complemento
n FFs = 2n estados úteis
```

## 7. One-Hot

One-hot é uma forma de codificar estados de uma FSM.

A regra é:

```text
apenas um bit fica em 1 por vez
```

Exemplo com 4 estados:

```text
S0 = 0001
S1 = 0010
S2 = 0100
S3 = 1000
```

Em one-hot:

```text
1 estado -> 1 flip-flop
```

Então, para uma FSM com 6 estados:

```text
codificação binária mínima = ceil(log2 6) = 3 FFs
codificação one-hot        = 6 FFs
```

Vantagem comum:

```text
lógica de próximo estado pode ficar mais simples
```

Desvantagem comum:

```text
usa mais flip-flops
```

Para a prova, basta reconhecer:

```text
one-hot = um FF por estado
```

## 8. Skew

Skew é diferença de chegada de um sinal em pontos diferentes do circuito.

No contexto de temporização sequencial, normalmente estamos falando de clock skew:

```text
clock skew = diferença entre o instante em que o clock chega no FF de origem
             e o instante em que o clock chega no FF de destino
```

Imagine dois flip-flops:

```text
FF origem -> lógica combinacional -> FF destino
```

O clock não chega exatamente ao mesmo tempo em todos os flip-flops. Trilhas, buffers e distribuição do clock causam diferenças.

Uma definição muito usada:

```text
skew = chegada do clock no destino - chegada do clock na origem
```

Então:

```text
skew positivo -> clock chega mais tarde no destino
skew negativo -> clock chega mais cedo no destino
skew zero     -> clock chega ao mesmo tempo nos dois
```

### 8.1. Efeito Do Skew Positivo

Skew positivo:

```text
clock chega mais tarde no FF de destino
```

Efeito:

```text
ajuda setup
piora hold
```

Por que ajuda setup?

Porque o FF de destino captura mais tarde. Assim, o dado tem mais tempo para sair do FF de origem, passar pela lógica combinacional e chegar estável.

Por que piora hold?

Porque o FF de destino fica vulnerável por mais tempo a um dado novo chegando cedo demais. O dado novo pode alcançar o destino antes de terminar a janela de hold.

Resumo:

```text
destino mais tarde -> mais tempo para setup -> setup melhora
destino mais tarde -> mais risco para hold  -> hold piora
```

### 8.2. Efeito Do Skew Negativo

Skew negativo:

```text
clock chega mais cedo no FF de destino
```

Efeito:

```text
piora setup
ajuda hold
```

Por que piora setup?

Porque o FF de destino captura antes. O dado tem menos tempo para chegar.

Por que ajuda hold?

Porque a captura do destino já aconteceu mais cedo, então o risco de dado novo atrapalhar a janela de hold diminui.

Resumo:

```text
destino mais cedo -> menos tempo para setup -> setup piora
destino mais cedo -> menos risco para hold  -> hold melhora
```

### 8.3. Fórmulas Com Skew

Para setup:

```text
Tclk >= tCQmax + tPDmax + tsetup - skew
```

Se o skew for positivo, ele diminui o período mínimo exigido. Por isso ajuda setup.

Para hold:

```text
tCQmin + tPDmin >= thold + skew
```

Se o skew for positivo, ele aumenta o lado direito da inequação. Por isso piora hold.

Exemplo da questão:

```text
tCQmax = 1
tPDmax = 5
tsetup = 1
skew = 0,5
```

Setup:

```text
Tclk >= 1 + 5 + 1 - 0,5
Tclk >= 6,5 ns
```

Hold:

```text
tCQmin + tPDmin >= thold + skew
0,3 + 0,4 >= 0,6 + 0,5
0,7 >= 1,1
```

Isso é falso. Então há violação de hold.

### 8.4. Existem Tipos Diferentes De Skew?

Sim, mas para essa prova o mais importante é clock skew positivo e negativo.

Tipos úteis de lembrar:

```text
1. clock skew positivo:
   clock chega mais tarde no destino.

2. clock skew negativo:
   clock chega mais cedo no destino.

3. clock skew local:
   diferença de clock entre flip-flops próximos ou dentro de um mesmo caminho.

4. clock skew global:
   diferença de clock entre regiões maiores do chip/circuito.

5. skew intencional:
   inserido de propósito para melhorar temporização em algum caminho.

6. skew não intencional:
   aparece por atraso de fios, buffers, roteamento e distribuição do clock.

7. data skew:
   diferença de chegada entre bits de um barramento de dados.
```

Também existe jitter, mas não é a mesma coisa que skew.

```text
skew  -> diferença espacial de chegada entre pontos diferentes
jitter -> variação temporal do clock de ciclo para ciclo
```

Para prova de sistemas digitais, a regra principal é:

```text
skew positivo no destino ajuda setup e piora hold
skew negativo no destino piora setup e ajuda hold
```

## 9. Shift Lógico E Shift Aritmético

Shift lógico à direita:

```text
entra 0 à esquerda
```

Shift aritmético à direita:

```text
replica o MSB
```

Exemplo:

```text
10010110
```

Shift aritmético à direita por 2:

```text
10010110 -> 11001011 -> 11100101
```

Shift lógico à direita por 2:

```text
10010110 -> 01001011 -> 00100101
```

Regra:

```text
lógico     -> trata como bits, entra 0
aritmético -> preserva sinal, replica MSB
```

Se o MSB for `0`, os dois podem dar o mesmo resultado em shift à direita. Se o MSB for `1`, geralmente diferem.

## 10. Potência Dinâmica

Fórmula:

```text
Pdin = alpha C V^2 f
```

Onde:

```text
alpha -> fator de atividade, quanto o circuito chaveia
C     -> capacitância carregada/descarregada
V     -> tensão de alimentação
f     -> frequência de clock
```

A tensão aparece ao quadrado. Isso é a maior pegadinha.

Se a questão pede razão:

```text
Pnova/Pantiga = (alphanova/alphaantiga)(Cnova/Cantiga)(Vnova/Vantiga)^2(fnova/fantiga)
```

Exemplo da questão:

```text
C dobra -> 2
f dobra -> 2
V cai de 1,2 para 0,9 -> 0,9/1,2 = 0,75
```

Logo:

```text
2 * 2 * 0,75^2 = 4 * 0,5625 = 2,25
```

Resposta:

```text
potência nova = 2,25 vezes a antiga
```

## 11. Energia No Capacitor E Energia Da Fonte

Ao carregar um capacitor:

```text
energia armazenada no capacitor = 1/2 C V^2
energia retirada da fonte       = C V^2
```

A outra metade é dissipada durante o carregamento.

Exemplo:

```text
C = 10 pF
V = 1 V
```

Energia armazenada:

```text
Ecap = 1/2 * 10 * 1^2 = 5 pJ
```

Energia retirada da fonte:

```text
Efonte = 10 * 1^2 = 10 pJ
```

Pegadinha:

```text
a fonte fornece o dobro do que fica armazenado no capacitor
```

## 12. LUT

LUT significa Look-Up Table.

Ela implementa uma função booleana guardando a saída esperada para cada combinação possível das entradas.

Uma LUT de `k` entradas precisa de:

```text
2^k bits de configuração
```

Porque existem `2^k` combinações de entrada.

Exemplos:

```text
LUT de 2 entradas -> 4 bits
LUT de 3 entradas -> 8 bits
LUT de 4 entradas -> 16 bits
LUT de 5 entradas -> 32 bits
LUT de 6 entradas -> 64 bits
```

Pegadinha:

```text
LUT de 5 entradas não tem 5 bits.
Ela tem 2^5 = 32 bits.
```

## 13. Endereçamento Base + Deslocamento

Em máquina byte-addressable:

```text
1 endereço = 1 byte
```

Se uma word tem 32 bits:

```text
32 bits = 4 bytes
```

Então, para acessar o índice `i` de um vetor de words:

```text
offset = i * 4
```

Exemplo:

```text
índice 3
word de 32 bits
```

Logo:

```text
offset = 3 * 4 = 12 bytes
```

Pegadinha:

O índice não é automaticamente o deslocamento em bytes. Precisa multiplicar pelo tamanho do elemento.

## 14. B, BL E BX LR

Em ARM:

```text
B label
```

Desvia para o label, sem salvar retorno.

```text
BL label
```

Branch with link. Desvia para o label e salva o endereço de retorno em `LR`.

```text
BX LR
```

Desvia para o endereço guardado em `LR`. É usado para retornar de uma subrotina.

Resumo de prova:

```text
B     -> pula
BL    -> chama função/subrotina
BX LR -> retorna
```

LR significa link register.

## 15. Hazard Load-Use

Hazard é uma situação em pipeline em que uma instrução atrapalha outra por dependência ou conflito.

Exemplo:

```asm
LOAD R1, 0(R2)
ADD  R3, R1, R4
```

A instrução `ADD` usa `R1` logo depois do `LOAD`.

O problema:

```text
o valor de R1 ainda pode não estar pronto
```

Esse caso é chamado:

```text
hazard de dados load-use
```

Também é uma dependência RAW:

```text
Read After Write
```

A segunda instrução quer ler um registrador que a primeira ainda está produzindo.

Soluções típicas:

```text
stall
forwarding/bypassing
reordenar instruções
```

Para prova, o nome mais importante é:

```text
load-use data hazard
```

## 16. POS Por Maxtermos

Quando aparece:

```text
F = Pi M(...)
```

isso indica os índices onde:

```text
F = 0
```

POS é Produto de Somas.

Em POS, cada termo soma deve zerar nos casos em que a função é zero.

Exemplo da questão:

```text
F = Pi M(0, 2, 8, 10)
```

Em `ABCD`:

```text
0  = 0000
2  = 0010
8  = 1000
10 = 1010
```

O que fica fixo?

```text
B = 0
D = 0
```

O termo soma que zera quando `B=0` e `D=0` é:

```text
B + D
```

Porque:

```text
B + D = 0 + 0 = 0
```

Pegadinha:

```text
B'D' parece intuitivo, mas isso é produto.
Em POS, o termo precisa ser soma.
```

Regra rápida para POS:

```text
se a variável vale 0 no grupo, entra normal
se a variável vale 1 no grupo, entra complementada
```

Exemplo:

```text
A=1, D=0 -> termo POS A' + D
```

## 17. Sinais Ativos Em Baixo

Sinais ativos em baixo aparecem com:

```text
sufixo _n
barra sobre o nome
bolha no símbolo lógico
```

Exemplo:

```text
reset_n
```

Significa:

```text
reset_n = 0 -> reset ativo
reset_n = 1 -> reset inativo
```

Se o reset é assíncrono, ele não precisa esperar borda de clock.

```text
reset assíncrono ativo baixo -> reseta imediatamente quando reset_n = 0
```

Pegadinha:

`_n` geralmente vem de negado, not ou active-low.

## 18. IEEE 754 - Valores Especiais

Para IEEE 754 precisão simples:

```text
sinal:    1 bit
expoente: 8 bits
fração:   23 bits
```

Os casos especiais dependem do expoente e da fração.

Tabela:

```text
expoente = 0,   fração = 0    -> zero
expoente = 0,   fração != 0   -> subnormal
expoente 1..254                -> normalizado
expoente = 255, fração = 0    -> infinito
expoente = 255, fração != 0   -> NaN
```

Na questão:

```text
expoente = 255
fração diferente de zero
```

Logo:

```text
NaN
```

Pegadinha:

```text
expoente 255 com fração zero é infinito
expoente 255 com fração não zero é NaN
```

## 19. Checklist Para Revisar Antes De Outro Simulado

Antes de fazer outro simulado, revise nesta ordem:

```text
1. carry-out vs overflow signed;
2. MSB e shift aritmético/lógico;
3. skew positivo/negativo, setup e hold;
4. FSM com D = Q+;
5. ring, Johnson e one-hot;
6. potência dinâmica e energia em capacitor;
7. LUT com 2^k bits;
8. POS por maxtermos;
9. B, BL, BX LR;
10. load-use hazard;
11. active-low;
12. IEEE 754 especiais.
```

Se conseguir explicar esses 12 itens sem olhar, o simulado 13 deixa de ser um susto e vira material de revisão resolvido.
