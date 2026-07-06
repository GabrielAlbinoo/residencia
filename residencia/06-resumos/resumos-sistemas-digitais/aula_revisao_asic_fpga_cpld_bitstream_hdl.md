# Aula De Revisao - ASIC, FPGA, CPLD, Bitstream, Blocos De FPGA E HDL

**Objetivo:** revisar o que realmente importa para prova sobre dispositivos programaveis e projeto digital: diferenca entre ASIC, FPGA e CPLD; o que e bitstream; quais blocos existem em um FPGA; e o papel de HDL como Verilog/VHDL.

---

# 1. Mapa Mental Da Aula

Pense em tres niveis:

```text
ASIC  -> chip feito sob medida, hardware fixo
FPGA  -> chip pronto, hardware configuravel por bitstream
CPLD  -> logica programavel menor/mais previsivel, boa para controle e glue logic
```

E pense em HDL assim:

```text
HDL descreve hardware
ferramentas transformam HDL em circuito
em FPGA, o circuito final vira bitstream
em ASIC, o circuito final vira layout/tapeout/fabricacao
```

---

# 2. ASIC

ASIC significa:

```text
Application-Specific Integrated Circuit
```

Ou:

```text
circuito integrado especifico para uma aplicacao
```

Um ASIC e um chip fabricado sob medida para uma funcao.

Exemplos:

```text
chip de modem
acelerador de IA
processador especifico
controlador de sensor
chip de criptografia
SoC de celular
```

Depois que o ASIC e fabricado, a logica principal fica fixa.

## 2.1 Vantagens Do ASIC

```text
maior desempenho
menor consumo de energia
menor area por funcao
melhor custo por unidade em grande volume
```

## 2.2 Desvantagens Do ASIC

```text
custo inicial alto
tempo de desenvolvimento longo
erro pode exigir nova fabricacao
nao e flexivel depois de pronto
```

Palavra importante:

```text
NRE = Non-Recurring Engineering
```

E o custo inicial de projeto/fabricacao. Em ASIC, esse custo e alto.

Resumo:

```text
ASIC = melhor eficiencia, pior flexibilidade
```

---

# 3. FPGA

FPGA significa:

```text
Field-Programmable Gate Array
```

Ou:

```text
arranjo de portas programavel em campo
```

Mas cuidado: FPGA nao e apenas um monte de portas soltas.

Um FPGA moderno tem:

```text
LUTs
flip-flops
blocos logicos
interconexoes programaveis
blocos de memoria
blocos DSP
blocos de clock
pinos de entrada/saida configuraveis
```

A ideia:

```text
o chip fisico ja existe
voce manda uma configuracao
essa configuracao define qual circuito digital aparece dentro dele
```

## 3.1 FPGA Nao Executa HDL Como CPU

Isso e muito importante.

Quando voce escreve HDL:

```verilog
assign y = a & b;
```

isso nao vira uma linha de programa executando em sequencia.

Isso vira hardware:

```text
uma porta AND
```

Entao:

```text
CPU executa instrucoes
FPGA implementa circuito
```

Um FPGA pode conter uma CPU dentro, mas o FPGA em si e hardware configuravel.

---

# 4. CPLD

CPLD significa:

```text
Complex Programmable Logic Device
```

Ele tambem e logica programavel, mas costuma ser menor e mais simples que um FPGA.

Uso comum:

```text
decodificacao de enderecos
controle simples
FSM pequena
glue logic
interface entre chips
controle de reset/enable/chip select
```

## 4.1 CPLD Vs FPGA

Resumo pratico:

```text
CPLD:
  menor
  mais previsivel em timing
  bom para controle e logica combinacional/sequencial moderada
  geralmente mais simples

FPGA:
  maior
  mais flexivel
  tem muitas LUTs, FFs, memorias e DSPs
  serve para sistemas digitais complexos
```

Para prova:

```text
CPLD = controle/glue logic/timing previsivel
FPGA = alta capacidade/flexibilidade/prototipagem/sistemas maiores
```

---

# 5. Bitstream

Bitstream e o arquivo de configuracao do FPGA.

Ele diz ao FPGA:

```text
quais LUTs usar
qual tabela verdade colocar em cada LUT
quais flip-flops usar
quais fios/interconexoes ligar
como configurar os pinos de IO
como inicializar memorias internas, se houver
como configurar blocos especificos
```

Pense assim:

```text
HDL/schematic -> ferramentas -> bitstream -> FPGA configurado
```

O bitstream nao e exatamente "codigo fonte".

Ele e mais parecido com:

```text
arquivo binario que configura o hardware interno
```

## 5.1 FPGA Pode Perder A Configuracao?

Muitos FPGAs usam memoria SRAM interna para configuracao.

Isso significa:

```text
desligou -> perdeu configuracao
ligou -> precisa carregar bitstream de novo
```

Normalmente o bitstream fica em uma memoria externa, flash ou outro dispositivo que configura o FPGA na inicializacao.

Mas existem FPGAs com configuracao nao volatil tambem.

Para prova:

```text
bitstream = configuracao que define o circuito no FPGA
```

---

# 6. Blocos Internos De Um FPGA

## 6.1 LUT

LUT significa:

```text
Look-Up Table
```

Uma LUT implementa uma tabela verdade pequena.

Uma LUT de `k` entradas guarda:

```text
2^k bits
```

Exemplos:

```text
LUT de 4 entradas -> 16 bits de configuracao
LUT de 5 entradas -> 32 bits de configuracao
LUT de 6 entradas -> 64 bits de configuracao
```

Ela consegue implementar qualquer funcao booleana de ate `k` entradas.

Exemplo:

```text
F(A,B,C) = A.B + C
```

Uma LUT de 3 entradas pode guardar a tabela verdade dessa funcao.

## 6.2 Flip-Flops

FPGA tambem tem flip-flops.

Eles servem para:

```text
registradores
FSM
contadores
pipeline
armazenamento de estado
```

Com LUT + flip-flop, voce implementa:

```text
logica combinacional + logica sequencial
```

## 6.3 Blocos Logicos

Um bloco logico de FPGA geralmente junta:

```text
LUT
flip-flop
muxes
carry chain
conexoes locais
```

O nome muda conforme o fabricante:

```text
CLB
LAB
logic element
logic cell
slice
```

Para prova, nao precisa decorar nome comercial. O importante e:

```text
bloco logico = unidade basica configuravel do FPGA
```

## 6.4 Interconexao Programavel

As LUTs e blocos precisam se conectar.

O FPGA tem uma rede de fios e chaves programaveis.

O bitstream define:

```text
saida de qual bloco liga em qual entrada
quais fios serao usados
qual caminho o sinal vai percorrer
```

Essa interconexao e uma das razoes de FPGA ser flexivel, mas tambem menos eficiente que ASIC.

## 6.5 Blocos De Memoria

FPGAs costumam ter memorias internas chamadas:

```text
BRAM
Block RAM
```

Servem para:

```text
buffers
filas
memorias pequenas
tabelas
registradores em massa
armazenamento temporario
```

## 6.6 Blocos DSP

DSP blocks sao blocos especializados para operacoes matematicas.

Normalmente incluem:

```text
multiplicadores
somadores
acumuladores
MAC = multiply-accumulate
```

Sao uteis em:

```text
processamento de sinais
filtros digitais
IA
video
audio
comunicacao
```

## 6.7 Clock E PLL

FPGAs tambem podem ter blocos de clock:

```text
PLL
MMCM
clock manager
```

Eles ajudam a:

```text
gerar frequencias
ajustar fase
distribuir clock
reduzir problemas de temporizacao
```

Para esta prova, basta saber:

```text
FPGA tem blocos dedicados alem de LUTs
```

---

# 7. HDL

HDL significa:

```text
Hardware Description Language
```

Linguagens comuns:

```text
Verilog
SystemVerilog
VHDL
```

HDL descreve hardware.

Nao pense em HDL como C comum.

Em C:

```c
y = a & b;
```

isso e uma instrucao executada por uma CPU.

Em HDL sintetizavel:

```verilog
assign y = a & b;
```

isso descreve uma porta AND.

## 7.1 Combinacional Em HDL

Exemplo conceitual:

```verilog
assign y = (a & b) | c;
```

Hardware gerado:

```text
AND entre a e b
OR com c
saida y
```

## 7.2 Sequencial Em HDL

Exemplo conceitual:

```verilog
always @(posedge clk) begin
  q <= d;
end
```

Hardware gerado:

```text
flip-flop D
```

Para prova, nao precisa decorar sintaxe.

Precisa saber:

```text
HDL descreve circuitos combinacionais e sequenciais
sintese transforma HDL em portas/blocos
```

---

# 8. Fluxo De Projeto Em FPGA

Fluxo simplificado:

```text
1. escrever HDL ou montar esquema
2. simular comportamento
3. sintetizar
4. mapear para LUTs, FFs, BRAMs, DSPs
5. place and route
6. analisar temporizacao
7. gerar bitstream
8. configurar FPGA
```

## 8.1 Sintese

Sintese transforma descricao HDL em circuito logico.

Exemplo:

```text
assign y = a & b
```

vira:

```text
porta AND ou LUT configurada como AND
```

## 8.2 Place And Route

Place:

```text
decide onde cada bloco vai ficar no FPGA
```

Route:

```text
decide quais fios vao conectar os blocos
```

## 8.3 Timing Analysis

Verifica se os sinais chegam a tempo.

Conecta com aulas de:

```text
setup
hold
caminho critico
Fmax
```

---

# 9. Fluxo De Projeto Em ASIC

Fluxo simplificado:

```text
1. especificacao
2. arquitetura
3. RTL em HDL
4. simulacao/verificacao
5. sintese para portas
6. projeto fisico/layout
7. verificacoes eletricas e temporais
8. tapeout
9. fabricacao
10. teste do chip
```

Comparacao com FPGA:

```text
FPGA:
  gera bitstream
  configura chip pronto

ASIC:
  gera layout final
  fabrica chip novo
```

---

# 10. Comparacao Resumida

| Item | ASIC | FPGA | CPLD |
|---|---|---|---|
| Flexibilidade depois de pronto | baixa | alta | media/alta |
| Desempenho/energia | melhor | pior que ASIC | bom para logica simples |
| Custo inicial | alto | baixo/medio | baixo/medio |
| Uso tipico | produto em volume | prototipo/aceleracao/sistema digital | controle/glue logic |
| Configuracao | fabricacao | bitstream | programacao/configuracao |
| Capacidade | muito alta sob medida | alta | menor |

---

# 11. Pegadinhas De Prova

## 11.1 "FPGA roda codigo?"

Resposta curta:

```text
nao como uma CPU comum
```

FPGA implementa hardware.

Pode existir uma CPU dentro do FPGA, mas isso e outro bloco.

## 11.2 "Bitstream e programa?"

Mais correto:

```text
bitstream e configuracao de hardware
```

Ele define LUTs, rotas, IOs e blocos.

## 11.3 "LUT e memoria?"

Fisicamente, pode ser vista como uma pequena memoria de configuracao/tabela verdade.

Mas sua funcao no FPGA e implementar logica combinacional.

## 11.4 "CPLD e FPGA sao iguais?"

Nao.

```text
CPLD = menor, mais previsivel, controle/glue logic
FPGA = maior, mais flexivel, sistemas complexos
```

## 11.5 "HDL e linguagem de programacao?"

Ela parece linguagem de programacao, mas descreve hardware.

Para prova:

```text
HDL descreve circuito
```

---

# 12. O Que Memorizar Para A Prova

Memorize:

```text
ASIC = chip sob medida, fixo, eficiente, caro para desenvolver
FPGA = chip configuravel por bitstream, flexivel, menos eficiente que ASIC
CPLD = logica programavel menor, boa para controle e glue logic
bitstream = arquivo que configura o FPGA
LUT = tabela verdade programavel de k entradas com 2^k bits
HDL = linguagem de descricao de hardware
sintese = transforma HDL em circuito
place and route = posiciona blocos e roteia conexoes
```

---

# 13. Exercicios De Fixacao

## 13.1 Questao 1

Uma LUT de 6 entradas precisa de quantos bits de configuracao para representar qualquer funcao booleana dessas entradas?

Resposta:

```text
2^6 = 64 bits
```

## 13.2 Questao 2

Qual dispositivo e mais adequado para um produto em grande volume, com menor consumo e funcao fixa?

Resposta:

```text
ASIC
```

## 13.3 Questao 3

Qual dispositivo e mais adequado para prototipar rapidamente um processador simples, podendo alterar o circuito depois?

Resposta:

```text
FPGA
```

## 13.4 Questao 4

O que o bitstream define em um FPGA?

Resposta:

```text
configuracao de LUTs, FFs, roteamento, IOs e blocos internos
```

## 13.5 Questao 5

Em HDL, o trecho abaixo descreve o que?

```verilog
assign y = a & b;
```

Resposta:

```text
uma porta AND combinacional
```

## 13.6 Questao 6

Em HDL, o trecho abaixo descreve o que?

```verilog
always @(posedge clk) begin
  q <= d;
end
```

Resposta:

```text
um flip-flop D
```

## 13.7 Questao 7

Qual a diferenca principal entre FPGA e CPLD?

Resposta:

```text
FPGA tem maior capacidade e flexibilidade; CPLD e menor, mais previsivel e comum em controle/glue logic.
```

## 13.8 Questao 8

Por que FPGA costuma consumir mais area/energia que ASIC para a mesma funcao?

Resposta:

```text
porque FPGA tem LUTs, chaves e interconexoes programaveis genericas; ASIC tem conexoes e transistores sob medida.
```

---

# 14. Resumo Final

Se cair na prova, provavelmente sera nesse nivel:

```text
comparar ASIC, FPGA e CPLD
entender bitstream
saber que LUT implementa tabela verdade
saber que FPGA tem LUTs, FFs, BRAM, DSP e interconexoes
saber que HDL descreve hardware
saber que sintese transforma HDL em circuito
```

Nao priorize agora:

```text
sintaxe detalhada de Verilog
testbench
timing closure profissional
familias comerciais de FPGA
layout fisico de ASIC
```

Priorize:

```text
conceito
comparacao
pegadinhas
LUT = 2^k bits
bitstream = configuracao
HDL != codigo sequencial de CPU
```

