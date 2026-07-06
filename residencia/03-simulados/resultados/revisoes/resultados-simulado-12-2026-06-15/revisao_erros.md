# Revisao Dos Erros - Simulado 12

**Simulado:** Geral aulas 1 a 27 - nivel prova dificil  
**Data:** 15/06/2026  
**Tempo:** 01:26:32  
**Resultado:** 50/60 (83%)

## 1. Diagnostico Geral

Resultado forte para um simulado dificil e misturado.

Pontos muito bons:

```text
Logica booleana/Karnaugh/sintese: 9/10
Memorias e logica programavel: 7/7
Assembly/datapath/controle: 7/7
Blocos combinacionais/FSM: 6/7
```

Ponto mais fraco:

```text
Aulas 17 a 19 - ponto fixo/flutuante, somadores, shifter e ULA: 5/8 (63%)
```

Prioridade real agora:

```text
1. IEEE 754 e expoente com bias
2. overflow em complemento de 2
3. somadores/carry/generate/propagate
4. energia/potencia/capacitancia
5. hold/setup/skew
6. registrador de deslocamento
```

Se fosse convertido para uma prova de 40 questoes, `83%` equivale a aproximadamente:

```text
33/40
```

Isso e competitivo, mas ainda abaixo da meta confortavel de `35/40`. O foco e ganhar mais 2 ou 3 questoes por reducao de erro em formulas/conceitos eletricos.

---

# 2. Questoes Erradas Ou Nao Respondidas

## Questao 5 - Pass Transistor NMOS

Sua duvida:

```text
o que e Vt?
```

`Vt` e a tensao de limiar do transistor.

Em um NMOS:

```text
gate alto -> tende a conduzir
mas ele conduz bem enquanto Vgs > Vt
```

Quando um NMOS tenta passar nivel alto:

```text
gate = VDD
saida vai subindo
Vgs = Vgate - Vsaida
```

Quando a saida chega perto de:

```text
VDD - Vt
```

o `Vgs` fica pequeno demais e o NMOS para de puxar bem.

Por isso:

```text
NMOS passa 0 forte
NMOS passa 1 fraco/degradado
```

Para prova:

```text
Vt = tensao minima gate-source para o transistor conduzir bem
```

## Questao 27 - IEEE 754: Numero Menor Que 1

Questao:

```text
0,03125
```

Reconheca como potencia de 2:

```text
0,5     = 2^-1
0,25    = 2^-2
0,125   = 2^-3
0,0625  = 2^-4
0,03125 = 2^-5
```

Normalizado:

```text
1,0 x 2^-5
```

IEEE 754 simples usa bias:

```text
bias = 127
expoente armazenado = expoente real + bias
expoente armazenado = -5 + 127 = 122
```

Resposta:

```text
122
```

## Questao 30 - Moore Versus Mealy

Frase-chave:

```text
saida muda imediatamente quando a entrada X muda
```

Se a saida depende diretamente da entrada atual:

```text
Mealy
```

Se a saida depende so do estado:

```text
Moore
```

Resumo:

```text
Moore -> saida = f(estado)
Mealy -> saida = f(estado, entrada)
```

## Questao 33 - Carry Lookahead

Definicoes:

```text
G_i = A_i B_i
P_i = A_i xor B_i
```

`G_i` significa:

```text
este bit gera carry sozinho
```

`P_i` significa:

```text
este bit propaga o carry de entrada
```

Logo:

```text
C_{i+1} = G_i + P_i C_i
```

Sua resposta `A_i + B_i + C_i` parece plausivel, mas isso e OR simples. Carry nao e 1 quando apenas uma das entradas e 1; carry ocorre quando pelo menos duas entradas da soma bit a bit geram transporte.

## Questao 35 - Energia, Potencia E Capacitancia

Sua duvida:

```text
quais equacoes usam C?
```

As principais:

```text
Pdin = alpha * C * V^2 * f
E_fonte ≈ C * V^2
E_armazenada_no_capacitor = 1/2 * C * V^2
Q = C * V
atraso RC cresce com R * C
```

Na questao, ela perguntou energia retirada da fonte em uma carga 0 -> 1:

```text
E ≈ C V^2
```

Com:

```text
C = 40 fF
V = 1,0 V
```

Resultado:

```text
E = 40 fJ
```

Pegadinha:

```text
1/2 C V^2 = energia armazenada no capacitor
C V^2 = energia retirada da fonte no carregamento
```

Para prova, a formula que mais deve aparecer e:

```text
Pdin = alpha C V^2 f
```

## Questao 38 - Paridade E Erro Nao Detectado

Paridade simples detecta:

```text
quantidade impar de bits invertidos
```

Se dois bits mudam:

```text
a paridade pode continuar igual
```

Por isso, dois erros podem passar sem deteccao.

Resumo:

```text
1 bit errado -> detecta
2 bits errados -> pode nao detectar
3 bits errados -> detecta
4 bits errados -> pode nao detectar
```

Paridade:

```text
detecta erros impares
nao garante detectar erros pares
nao corrige erro
nao localiza bit
```

## Questao 39 - Hold Com Skew Desfavoravel

Hold verifica se o dado novo chega cedo demais.

Dados:

```text
tCQmin = 0,25 ns
tPDmin = 0,55 ns
thold = 0,9 ns
skew desfavoravel = 0,2 ns
```

Chegada minima do dado:

```text
0,25 + 0,55 = 0,80 ns
```

Com skew desfavoravel, a exigencia de hold fica maior:

```text
0,9 + 0,2 = 1,1 ns
```

Falta:

```text
1,1 - 0,8 = 0,3 ns
```

Conclusao:

```text
violacao de hold de 0,3 ns
```

Importante:

```text
violacao de hold nao se resolve diminuindo frequencia
normalmente resolve adicionando atraso no caminho curto
```

## Questao 43 - NAND Universal Multinivel

Funcao:

```text
F = (A+B')C + DE
```

Para NAND-NAND, pense em SOP:

```text
produto 1 = (A+B')C
produto 2 = DE
F = produto1 + produto2
```

A estrutura NAND-NAND usa:

```text
N1 = produto1'
N2 = produto2'
F = NAND(N1, N2)
```

Pelo DeMorgan:

```text
NAND(produto1', produto2') = produto1 + produto2
```

Por isso a transformacao correta era manter a funcao como soma de produtos e usar NAND final sobre os produtos negados.

## Questao 44 - Subtracao E Overflow

Operacao:

```text
0110 - 1011
```

Em 4 bits complemento de 2:

```text
0110 = +6
1011 = -5
```

Entao:

```text
6 - (-5) = 11
```

Mas 4 bits assinados so representam:

```text
-8 ate +7
```

Logo, `+11` nao cabe.

Fazendo em bits:

```text
0110 - 1011
= 0110 + complemento_de_2(1011)
```

Como `1011` representa `-5`, subtrair `1011` equivale a somar `+5`:

```text
0110 + 0101 = 1011
```

Resultado armazenado:

```text
1011
```

Mas como deveria ser positivo e saiu com bit de sinal 1:

```text
overflow
```

## Questao 46 - Registrador Bidirecional

Sua duvida:

```text
O que e MSB?
```

MSB significa:

```text
Most Significant Bit
bit mais significativo
bit mais a esquerda
```

Em:

```text
1010
```

o MSB e o primeiro `1` da esquerda.

A questao dizia:

```text
desloca para direita
entra 1 no MSB
```

Passo:

```text
1010
desloca para direita -> _101
entra 1 no MSB   -> 1101
```

Resultado:

```text
1101
```

---

# 3. Observacoes Em Questoes Corretas

## Questao 4 - Complemento De 2

Sua duvida:

```text
nao seria -93?
```

Nao. A conta era:

```text
01010110 - 01111001
```

Convertendo:

```text
01010110 = 86
01111001 = 121
```

Logo:

```text
86 - 121 = -35
```

Em 8 bits:

```text
35 = 00100011
inverte -> 11011100
soma 1  -> 11011101
```

Resultado:

```text
11011101 = -35
```

## Questao 13 - Signed Versus Unsigned

A confusao foi visual, porque a alternativa falava da variavel `A` e tambem existia a alternativa A.

Os valores eram:

```text
A = 1001
B = 0111
```

Sem sinal:

```text
A = 9
B = 7
A > B
```

Com complemento de 2:

```text
A = -7
B = +7
A < B
```

Resposta conceitual:

```text
unsigned: A > B
signed:   A < B
```

Observacao justa: em proximos simulados, alternativas desse tipo precisam ficar visualmente mais claras.

## Questao 17 - Enderecamento Base + Offset

Voce observou que faltou deixar claro o tamanho da word.

Em Nios II e em muitos exemplos didaticos:

```text
word = 32 bits = 4 bytes
```

Por isso indice 6, iniciando em 0:

```text
offset = 6 * 4 = 24
```

Instrucao:

```asm
LDW r3, 24(r10)
```

Sua observacao e boa: em prova, se nao disser o tamanho da palavra, deve haver convencao clara.

## Questao 32 - Skew

Skew e a diferenca de chegada do clock em registradores diferentes.

Idealmente:

```text
clock chega ao mesmo tempo em todos os FFs
```

Na pratica:

```text
clock chega um pouco antes em um FF
clock chega um pouco depois em outro FF
```

Essa diferenca e o skew.

Para prova:

```text
skew pode ajudar ou atrapalhar setup/hold dependendo do sentido
```

## Questao 34 - POS Em Karnaugh

Voce perguntou:

```text
por que na POS eu tenho que inverter o sinal?
```

Regra:

```text
SOP -> agrupa 1s
POS -> agrupa 0s
```

Em POS, cada grupo de zeros gera uma soma que deve valer 0 naquele grupo.

Por isso:

```text
variavel constante 0 -> entra direta
variavel constante 1 -> entra negada
```

Exemplo:

Se no grupo de zeros:

```text
B = 0
D = 0
```

o termo POS e:

```text
(B + D)
```

porque esse termo zera quando `B=0` e `D=0`.

## Questao 37 - Sintese De FSM Com D

Sim:

```text
D1 e D0 sao os bits do proximo estado
```

Mais exatamente:

```text
D1 = Q1+
D0 = Q0+
```

Eles nao sao a saida externa da maquina.

Eles sao as entradas dos flip-flops D que guardam o proximo estado.

## Questao 45 - Alternativa Correta Longa

Sua critica procede.

A correta estava mais explicada/longa que as outras. Isso pode dar pista indevida.

Conceito da questao:

```text
CPLD -> menor, controle, timing mais previsivel
FPGA -> maior, LUTs/FFs/BRAM/DSP, mais flexivel
```

## Questao 47 - Checksum Modulo 256

Sim, na pratica:

```text
modulo 256 = ficar so com o resto da divisao por 256
```

Se a soma passou de `255`, voce pode pensar:

```text
subtrai 256 ate voltar para 0..255
```

Em hexadecimal:

```text
0x1C2 mod 0x100 = 0xC2
```

Ou seja:

```text
mantem apenas os 8 bits menos significativos
```

## Questao 54 - LUT

Seu pensamento esta correto.

Uma LUT de 4 entradas tem:

```text
2^4 = 16 linhas
```

Mesmo que a funcao valha 1 em poucas linhas, a LUT precisa armazenar a saida de todas as combinacoes.

Exemplo:

```text
6 linhas com 1
10 linhas com 0
total = 16 bits
```

## Questao 57 - Decoder Ativo Baixo

Se o decoder tem saidas ativas em 0:

```text
mintermo selecionado -> saida Yi = 0
mintermos nao selecionados -> saidas = 1
```

Para implementar:

```text
F = m1 + m4 + m6
```

com saidas ativas baixas:

```text
Y1, Y4, Y6 vao a 0 quando seus mintermos aparecem
```

Usando NAND:

```text
F = NAND(Y1, Y4, Y6)
```

Se nenhum mintermo desejado esta ativo:

```text
Y1=Y4=Y6=1
NAND(1,1,1)=0
```

Se qualquer mintermo desejado aparece:

```text
algum Yi=0
NAND(...,0,...)=1
```

Entao voce coloca na NAND as saidas ativas-baixas dos mintermos que voce quer detectar.

---

# 4. Prioridade De Revisao

Alta prioridade:

```text
IEEE 754 menor que 1
overflow em complemento de 2
generate/propagate/carry
energia e potencia com capacitancia
hold/setup/skew
registrador de deslocamento
```

Media prioridade:

```text
Mealy vs Moore
NAND-NAND
paridade
NMOS passando 1 fraco
```

Baixa prioridade:

```text
detalhes finos de CPLD/FPGA, porque voce foi 100% no bloco de memorias/logica programavel
```

---

# 5. Mini-Exercicios

## Exercicio 1 - IEEE

Qual o expoente armazenado de `0,125` em IEEE 754 simples?

**Gabarito:** `0,125 = 2^-3`, entao expoente armazenado = `127-3 = 124`.

## Exercicio 2 - Overflow

Em 4 bits complemento de 2, calcule `0101 - 1010`. Ha overflow?

**Gabarito:** `0101=+5`, `1010=-6`; `5-(-6)=11`, nao cabe em `-8..+7`. Ha overflow.

## Exercicio 3 - Carry

Se `G=0`, `P=1` e `Cin=1`, qual e `Cout`?

**Gabarito:** `Cout = G + P Cin = 0 + 1*1 = 1`.

## Exercicio 4 - Potencia

Calcule `Pdin` para `alpha=0,25`, `C=80 pF`, `V=1,0 V`, `f=50 MHz`.

**Gabarito:** `P=0,25*80e-12*1^2*50e6 = 1,0 mW`.

## Exercicio 5 - Hold

`tCQmin=0,2 ns`, `tPDmin=0,4 ns`, `thold=0,7 ns`. Sem skew, ha violacao?

**Gabarito:** chegada minima = `0,6 ns`; requisito = `0,7 ns`; viola por `0,1 ns`.

## Exercicio 6 - Shift

Registrador `0110`, desloca para direita, entra `1` no MSB. Resultado?

**Gabarito:** `_011` com entrada `1` no MSB vira `1011`.

