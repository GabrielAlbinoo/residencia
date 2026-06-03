# Aula Detalhada - Lógica Programável, PROM, PLA, PAL, CPLD E FPGA

**Tema do dia:** lógica programável, PROM, PLA, PAL, CPLD, FPGA, LUT, blocos lógicos, interconexões programáveis, bitstream, configuração e comparação entre dispositivos programáveis  
**Aula na sequência:** 24  
**Objetivo:** entender como circuitos digitais podem ser implementados em dispositivos programáveis, comparar PROM, PLA, PAL, CPLD e FPGA, e resolver questões conceituais sobre flexibilidade, granularidade, interconexão, LUT e uso típico.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 23, você estudou memórias:

```text
ROM
RAM
SRAM
DRAM
banco de registradores
endereços
palavras
tabela verdade implementada em ROM
```

Agora a pergunta muda um pouco.

Em vez de usar portas fixas como:

```text
AND
OR
NOT
NAND
NOR
MUX
```

queremos um componente que possa ser configurado para virar vários circuitos diferentes.

Essa é a ideia da lógica programável.

```text
mesmo chip físico
-> diferentes configurações
-> diferentes circuitos digitais
```

Conexão direta com a Aula 23:

```text
ROM pode implementar uma tabela verdade
PROM/PLA/PAL implementam funções lógicas programáveis
FPGA implementa blocos lógicos e conexões programáveis em grande escala
```

---

# 2. Ideia Central De Lógica Programável

Lógica programável é uma forma de construir hardware digital configurável.

Em um circuito fixo, a função é determinada pelo projeto físico:

```text
portas conectadas de forma fixa
```

Em lógica programável, o chip tem uma estrutura genérica e recebe uma configuração.

Essa configuração define:

```text
quais funções serão implementadas
quais blocos serão usados
como os blocos serão conectados
quais entradas e saídas serão ativadas
```

Pense assim:

```text
circuito fixo:
  função nasce presa no hardware

lógica programável:
  hardware nasce genérico
  configuração escolhe a função
```

Exemplo:

O mesmo dispositivo programável pode implementar:

```text
somador
comparador
controle de máquina de estados
contador
decoder
pequena ULA
interface de comunicação
```

dependendo da configuração gravada nele.

---

# 3. Por Que Usar Lógica Programável?

Motivos comuns:

```text
prototipagem rápida
menor tempo de desenvolvimento
possibilidade de alterar o circuito
evitar fabricar um chip específico
integrar muitos blocos digitais
testar uma ideia antes de ASIC
```

Comparação:

```text
ASIC:
  circuito fabricado sob medida
  muito eficiente em grande escala
  caro e demorado para projetar/fabricar
  não é flexível depois de fabricado

FPGA/CPLD:
  chip já pronto
  configurável pelo usuário
  ótimo para protótipos e baixa/média escala
  normalmente menos eficiente que ASIC em área, potência e velocidade
```

Para prova introdutória, memorize:

```text
lógica programável troca eficiência máxima por flexibilidade
```

---

# 4. A Base: Soma De Produtos

Muitos dispositivos programáveis clássicos são baseados em soma de produtos.

Você já viu isso em álgebra booleana:

```text
SOP = Sum of Products = soma de produtos
```

Exemplo:

```text
F = A.B + A'.C
```

Produtos:

```text
A.B
A'.C
```

Soma:

```text
A.B + A'.C
```

Isso pode ser implementado com dois níveis de lógica:

```text
plano AND -> gera termos produto
plano OR  -> soma os termos produto
```

Diagrama conceitual:

```text
entradas e complementos
        |
        v
   plano AND
        |
        v
   plano OR
        |
        v
     saídas
```

PROM, PLA e PAL diferem principalmente em quais desses planos são programáveis.

---

# 5. PROM

PROM significa:

```text
Programmable Read-Only Memory
```

Ou:

```text
memória somente de leitura programável
```

A ideia é parecida com ROM:

```text
entradas viram endereço
saídas são bits armazenados
```

Se a função tem `n` entradas:

```text
existem 2^n combinações possíveis
```

Cada combinação vira um endereço.

O valor armazenado naquele endereço é a saída da função.

## 5.1 Exemplo de PROM implementando função lógica

Suponha uma função:

```text
F(A,B,C)
```

Ela tem 3 entradas.

Quantidade de combinações:

```text
2^3 = 8
```

Então uma PROM poderia ter:

```text
8 palavras
```

Se tiver só uma saída:

```text
8 x 1 bit
```

Se tiver quatro saídas:

```text
8 x 4 bits
```

## 5.2 Como pensar na PROM

PROM é como uma tabela verdade gravada.

```text
A B C -> endereço
F     -> bit armazenado naquele endereço
```

Exemplo:

```text
000 -> F(0,0,0)
001 -> F(0,0,1)
010 -> F(0,1,0)
...
111 -> F(1,1,1)
```

## 5.3 Plano AND e plano OR na PROM

Na visão de lógica programável clássica:

```text
PROM tem plano AND fixo
PROM tem plano OR programável
```

Por quê?

O plano AND fixo gera todos os mintermos.

Para `n` entradas, ele gera:

```text
2^n mintermos
```

Depois, programa-se quais mintermos entram em cada saída.

## 5.4 Vantagem da PROM

Vantagem:

```text
simples de entender
qualquer tabela verdade pode ser gravada
boa relação com memória
```

## 5.5 Desvantagem da PROM

Desvantagem:

```text
cresce muito rápido com o número de entradas
```

Porque:

```text
n entradas -> 2^n linhas
```

Exemplo:

```text
4 entradas -> 16 linhas
8 entradas -> 256 linhas
12 entradas -> 4096 linhas
20 entradas -> 1.048.576 linhas
```

Então PROM é conceitualmente simples, mas pode desperdiçar muito espaço.

---

# 6. PLA

PLA significa:

```text
Programmable Logic Array
```

Ou:

```text
arranjo lógico programável
```

A PLA usa a ideia:

```text
plano AND programável
plano OR programável
```

Ou seja:

```text
você escolhe quais produtos serão formados
e escolhe quais produtos entram em cada saída
```

Diagrama:

```text
entradas
   |
   v
plano AND programável
   |
   v
plano OR programável
   |
   v
saídas
```

## 6.1 Exemplo

Queremos implementar:

```text
F1 = A.B + C.D
F2 = A.B + A'.C
```

Termos produto necessários:

```text
P1 = A.B
P2 = C.D
P3 = A'.C
```

Depois:

```text
F1 = P1 + P2
F2 = P1 + P3
```

Repare que `P1 = A.B` é compartilhado.

Esse compartilhamento é importante.

Uma PLA pode formar termos produto úteis e reutilizá-los em várias saídas.

## 6.2 Vantagem da PLA

Vantagem:

```text
muito flexível
permite compartilhar termos produto
não precisa gerar todos os mintermos
```

## 6.3 Desvantagem da PLA

Desvantagem:

```text
mais complexa
pode ser mais lenta que uma PAL
```

Porque os dois planos são programáveis.

Mais programabilidade costuma significar:

```text
mais flexibilidade
mais atraso
mais área
```

---

# 7. PAL

PAL significa:

```text
Programmable Array Logic
```

A PAL também usa soma de produtos, mas com uma diferença:

```text
plano AND programável
plano OR fixo
```

Diagrama:

```text
entradas
   |
   v
plano AND programável
   |
   v
plano OR fixo
   |
   v
saídas
```

## 7.1 Como pensar na PAL

Na PAL, você escolhe os termos produto.

Mas cada saída tem uma estrutura OR mais limitada.

Exemplo conceitual:

```text
F1 pode somar até 4 termos produto
F2 pode somar até 4 termos produto
F3 pode somar até 4 termos produto
```

O número exato depende do dispositivo.

## 7.2 Vantagem da PAL

Vantagem:

```text
mais simples que PLA
geralmente mais rápida
boa para lógica combinacional moderada
```

## 7.3 Desvantagem da PAL

Desvantagem:

```text
menos flexível que PLA
plano OR fixo limita o uso dos termos produto
```

Se uma saída precisa de muitos termos, pode não caber.

---

# 8. Comparação: PROM, PLA E PAL

Tabela principal:

| Dispositivo | Plano AND | Plano OR | Ideia principal |
|---|---|---|---|
| PROM | Fixo | Programável | Tabela verdade gravada |
| PLA | Programável | Programável | Máxima flexibilidade em SOP |
| PAL | Programável | Fixo | Mais simples e rápida que PLA |

Memorize:

```text
PROM -> AND fixo, OR programável
PLA  -> AND programável, OR programável
PAL  -> AND programável, OR fixo
```

Atalho:

```text
PLA é a mais flexível das três clássicas
PAL é mais limitada, mas simples
PROM parece uma ROM/tabela verdade
```

## 8.1 Pegadinha comum

Não confunda:

```text
PLA
PAL
```

Os nomes são parecidos.

Decore pela frase:

```text
PLA tem tudo programável
PAL tem OR limitado/fixo
```

---

# 9. Fusíveis, Antifusíveis E Programação

Dispositivos programáveis clássicos podiam usar fusíveis.

Ideia:

```text
existe uma matriz de conexões possíveis
programar = manter ou romper conexões
```

Com fusíveis:

```text
programação pode ser uma vez só
```

Com tecnologias mais modernas, podem aparecer:

```text
EEPROM
Flash
SRAM de configuração
antifuse
```

Para prova introdutória, não precisa aprofundar física.

O importante é entender:

```text
programar um dispositivo = definir conexões/funções internas
```

---

# 10. CPLD

CPLD significa:

```text
Complex Programmable Logic Device
```

Ou:

```text
dispositivo lógico programável complexo
```

Um CPLD pode ser visto como uma evolução de PAL/PLA.

Ele possui vários blocos lógicos programáveis conectados por uma matriz de interconexão.

Ideia:

```text
vários blocos tipo PAL
interconexão programável
pinos de entrada/saída
```

Diagrama conceitual:

```text
        +---------+
I/O --->| bloco 1 |---+
        +---------+   |
                      v
        +---------+  interconexão  ---> I/O
I/O --->| bloco 2 |  programável
        +---------+   ^
                      |
        +---------+   |
I/O --->| bloco 3 |---+
        +---------+
```

## 10.1 Características gerais de CPLD

Características típicas:

```text
mais capacidade que PAL simples
boa previsibilidade de atraso
boa para lógica de controle
boa para glue logic
normalmente não é tão grande quanto FPGA
```

`Glue logic` é lógica de apoio entre componentes.

Exemplo:

```text
decodificação de endereço
controle de chip enable
interface simples entre barramentos
máquina de estados de controle
```

## 10.2 CPLD vs PAL

PAL:

```text
um bloco programável menor
```

CPLD:

```text
vários blocos programáveis conectados
```

Então:

```text
CPLD é mais complexo/capaz que PAL
```

---

# 11. FPGA

FPGA significa:

```text
Field-Programmable Gate Array
```

Ou:

```text
arranjo de portas programável em campo
```

"Em campo" significa que pode ser programado pelo usuário depois da fabricação.

FPGA é mais geral e mais poderoso que os dispositivos clássicos.

Ele possui:

```text
blocos lógicos programáveis
interconexões programáveis
blocos de entrada e saída
memórias internas
flip-flops
às vezes multiplicadores, DSPs, PLLs e processadores embutidos
```

Visão conceitual:

```text
+-----+   +-----+   +-----+
| CLB |---| CLB |---| CLB |
+-----+   +-----+   +-----+
   |         |         |
+-----+   +-----+   +-----+
| CLB |---| CLB |---| CLB |
+-----+   +-----+   +-----+
   |         |         |
+-----+   +-----+   +-----+
| CLB |---| CLB |---| CLB |
+-----+   +-----+   +-----+

CLB = bloco lógico configurável
linhas = interconexões programáveis
```

---

# 12. Bloco Lógico Configurável

O bloco lógico configurável é a unidade básica de um FPGA.

O nome varia por fabricante:

```text
CLB
logic block
logic element
slice
adaptive logic module
```

Mas a ideia é semelhante:

```text
um bloco pequeno que implementa lógica combinacional
e normalmente também pode guardar estado com flip-flops
```

Um bloco típico pode conter:

```text
LUT
flip-flop
MUX
carry chain
conexões locais
```

---

# 13. LUT

LUT significa:

```text
Look-Up Table
```

Ou:

```text
tabela de consulta
```

A LUT é uma pequena memória usada para implementar uma função lógica.

Essa é uma das ideias mais importantes de FPGA.

Uma LUT de `k` entradas consegue implementar qualquer função booleana de até `k` variáveis.

Por quê?

Porque uma função de `k` variáveis tem:

```text
2^k combinações de entrada
```

A LUT guarda a saída para cada combinação.

## 13.1 Exemplo: LUT de 2 entradas

Uma LUT de 2 entradas tem:

```text
2^2 = 4 posições
```

Ela pode implementar qualquer função de `A` e `B`.

Exemplo: AND.

Tabela:

```text
A B | F
0 0 | 0
0 1 | 0
1 0 | 0
1 1 | 1
```

Conteúdo da LUT:

```text
00 -> 0
01 -> 0
10 -> 0
11 -> 1
```

Se quiser OR:

```text
00 -> 0
01 -> 1
10 -> 1
11 -> 1
```

O hardware físico é o mesmo.

Muda o conteúdo da LUT.

## 13.2 LUT de 3 entradas

Uma LUT de 3 entradas tem:

```text
2^3 = 8 posições
```

Pode implementar qualquer função de:

```text
A, B, C
```

Exemplo:

```text
F = A.B + C
```

Para programar a LUT, basta preencher a saída para cada combinação de `A`, `B` e `C`.

## 13.3 LUT de 4 entradas

Uma LUT de 4 entradas tem:

```text
2^4 = 16 posições
```

Pode implementar qualquer função de até 4 entradas.

Se a função tiver mais entradas que a LUT permite, ela precisa ser dividida em mais de uma LUT.

Exemplo:

```text
função com 6 variáveis
```

Não cabe inteira em uma LUT de 4 entradas.

O sintetizador divide em blocos menores e conecta as LUTs.

---

# 14. FPGA Como Memória + Multiplexadores

Uma LUT pode ser entendida como:

```text
pequena memória
entradas escolhem endereço
conteúdo escolhido vira saída
```

Diagrama:

```text
A,B,C -> endereço da LUT
LUT   -> bit de saída
```

Isso parece com ROM?

Sim.

Uma LUT é como uma ROM pequena configurável.

Conexão com a Aula 23:

```text
ROM grande implementa tabela verdade
LUT pequena implementa tabela verdade local
FPGA junta muitas LUTs e conexões programáveis
```

---

# 15. Interconexões Programáveis

Só ter LUTs não basta.

É preciso conectar:

```text
saída de uma LUT na entrada de outra
entrada do chip em blocos lógicos
blocos lógicos em saídas do chip
flip-flops em lógica combinacional
```

Essa conexão é feita por interconexões programáveis.

Pense em uma malha de fios e chaves:

```text
fio horizontal
fio vertical
chave programável entre eles
```

A configuração decide quais chaves fecham.

## 15.1 Por que interconexão importa?

Em FPGA, boa parte do atraso pode vir das interconexões.

Não é só a LUT que tem atraso.

Também há atraso em:

```text
fios programáveis
chaves de roteamento
multiplexadores internos
caminhos longos entre blocos
```

Conexão com Aula 22:

```text
mais caminho físico
mais capacitância
mais atraso
menor frequência máxima
```

---

# 16. Flip-Flops Dentro Do FPGA

FPGA não implementa só lógica combinacional.

Ele também implementa circuitos sequenciais.

Por isso, blocos lógicos normalmente possuem flip-flops.

Assim é possível construir:

```text
registradores
contadores
FSM
pipelines
interfaces síncronas
processadores simples
```

Exemplo:

```text
LUT calcula o próximo valor
flip-flop guarda o valor no clock
```

Diagrama:

```text
entradas atuais
      |
      v
     LUT  -> próximo estado
      |
      v
  flip-flop -> estado atual
```

Isso conversa com as aulas:

```text
Aula 11 -> FSM
Aula 13 -> flip-flops e registradores
Aula 15 -> temporização sequencial
Aula 22 -> caminho crítico
```

---

# 17. Bitstream

Em FPGA, a configuração normalmente é gravada em um arquivo chamado bitstream.

Bitstream:

```text
arquivo de bits que configura o FPGA
```

Ele define:

```text
conteúdo das LUTs
conexões de roteamento
configuração dos blocos de I/O
uso de flip-flops
uso de blocos internos
```

Fluxo simplificado:

```text
descrição do circuito
-> síntese
-> mapeamento em LUTs/blocos
-> place and route
-> bitstream
-> FPGA configurado
```

## 17.1 Place and route

`Place`:

```text
decidir onde cada bloco lógico ficará no FPGA
```

`Route`:

```text
decidir quais fios/interconexões ligarão os blocos
```

Isso afeta:

```text
atraso
frequência máxima
uso de recursos
```

---

# 18. HDL: Verilog E VHDL

Circuitos programáveis geralmente são descritos usando HDL.

HDL significa:

```text
Hardware Description Language
```

Linguagens comuns:

```text
VHDL
Verilog
SystemVerilog
```

Uma HDL não é simplesmente uma linguagem de programação comum.

Ela descreve hardware.

Exemplo conceitual:

```text
assign F = (A & B) | C;
```

Isso descreve uma lógica:

```text
F = A.B + C
```

O sintetizador transforma essa descrição em LUTs, flip-flops e conexões.

## 18.1 Pegadinha

Em software, instruções geralmente executam em sequência.

Em hardware, blocos podem operar em paralelo.

Então:

```text
HDL descreve circuitos
não apenas uma sequência de comandos
```

Para esta aula, você não precisa programar em HDL.

Precisa entender o caminho:

```text
descrição lógica -> síntese -> dispositivo programável
```

---

# 19. CPLD Vs FPGA

CPLD e FPGA são dispositivos programáveis, mas têm perfis diferentes.

Tabela conceitual:

| Critério | CPLD | FPGA |
|---|---|---|
| Granularidade | Blocos lógicos maiores, estilo PAL/macrocélulas | Muitas LUTs/blocos menores |
| Capacidade | Menor | Maior |
| Uso típico | Controle, glue logic, decodificação | Sistemas digitais maiores |
| Interconexão | Mais simples/previsível | Mais rica e complexa |
| Atraso | Frequentemente mais previsível | Depende bastante do roteamento |
| Recursos internos | Mais limitados | Pode ter RAM, DSP, PLL, processadores |

Resumo:

```text
CPLD -> bom para controle e lógica moderada
FPGA -> bom para projetos digitais maiores e paralelos
```

## 19.1 Exemplo de escolha

Decodificar endereços e gerar sinais de controle:

```text
CPLD pode ser suficiente
```

Implementar processador, controlador de vídeo ou processamento paralelo:

```text
FPGA faz mais sentido
```

---

# 20. FPGA Vs ASIC

ASIC significa:

```text
Application-Specific Integrated Circuit
```

Ou:

```text
circuito integrado específico para uma aplicação
```

ASIC é fabricado para uma função específica.

FPGA é configurável.

Tabela:

| Critério | FPGA | ASIC |
|---|---|---|
| Flexibilidade | Alta | Baixa depois de fabricado |
| Custo inicial | Menor | Muito maior |
| Custo por unidade em grande volume | Maior | Menor |
| Desempenho/energia | Geralmente pior | Geralmente melhor |
| Tempo de desenvolvimento | Menor | Maior |
| Prototipagem | Excelente | Não é o foco |

Resumo para prova:

```text
FPGA é flexível e reconfigurável
ASIC é mais eficiente quando produzido em grande escala
```

---

# 21. Tipos De Configuração Em FPGA

Muitos FPGAs usam SRAM interna para armazenar configuração.

Isso significa:

```text
ao desligar, perdem a configuração
```

Então, ao ligar, precisam carregar o bitstream de alguma memória externa ou controlador.

Mas existem outras tecnologias, como:

```text
Flash
antifuse
```

Conceitos:

```text
SRAM-based FPGA:
  reconfigurável
  volátil
  precisa carregar configuração ao ligar

Flash-based FPGA:
  não volátil
  pode manter configuração sem energia

Antifuse FPGA:
  normalmente programável uma vez
  conexão permanente depois de programada
```

Para prova, cuidado com:

```text
nem todo FPGA mantém configuração sem energia
```

FPGAs baseados em SRAM são comuns e precisam ser configurados novamente ao ligar.

---

# 22. Reconfiguração

Reconfigurar significa alterar a configuração do dispositivo.

Em FPGA, isso pode significar:

```text
trocar o bitstream inteiro
ou alterar uma parte em alguns modelos avançados
```

Reconfiguração permite:

```text
atualizar hardware
corrigir projeto
mudar função do circuito
adaptar o dispositivo a outra tarefa
```

Mas também exige cuidado:

```text
validar temporização
testar a nova configuração
garantir que pinos e sinais continuam corretos
```

---

# 23. Como Uma Função Vira FPGA?

Exemplo:

```text
F = A.B + C
```

Em portas:

```text
A e B entram em AND
resultado entra em OR com C
```

Em FPGA:

```text
uma LUT pode armazenar a tabela verdade de F
```

Se a LUT tiver 3 entradas:

```text
A, B, C entram na LUT
saída da LUT é F
```

Tabela de `F = A.B + C`:

```text
A B C | A.B | F
0 0 0 |  0  | 0
0 0 1 |  0  | 1
0 1 0 |  0  | 0
0 1 1 |  0  | 1
1 0 0 |  0  | 0
1 0 1 |  0  | 1
1 1 0 |  1  | 1
1 1 1 |  1  | 1
```

Conteúdo da LUT:

```text
000 -> 0
001 -> 1
010 -> 0
011 -> 1
100 -> 0
101 -> 1
110 -> 1
111 -> 1
```

Isso é a ideia de memória/tabela verdade aplicada em escala pequena.

---

# 24. Uso De MUX Em Lógica Programável

MUX aparece muito por dentro de lógica programável.

Por quê?

Porque um MUX escolhe uma opção entre várias.

Em FPGA, selecionar conexões e valores é essencial.

Uma LUT pode ser vista internamente como:

```text
bits armazenados
+ multiplexadores que escolhem qual bit sai
```

Exemplo de LUT 2:

```text
4 bits armazenados
2 entradas selecionam 1 dos 4 bits
```

Isso é exatamente a ideia de MUX:

```text
selecionar uma saída entre várias opções
```

Conexão com Aula 10:

```text
MUX não é só bloco de exercício
ele aparece dentro de estruturas programáveis
```

---

# 25. Exemplo: Implementando Duas Saídas Em PLA

Vamos implementar:

```text
F1 = A.B + A.C
F2 = A.B + B.C
```

Termos produto:

```text
P1 = A.B
P2 = A.C
P3 = B.C
```

Depois:

```text
F1 = P1 + P2
F2 = P1 + P3
```

Repare:

```text
P1 é compartilhado
```

Essa é uma vantagem da PLA:

```text
termos produto podem alimentar várias saídas
```

Em uma PROM, todos os mintermos existiriam.

Em uma PLA, só os produtos necessários precisam ser formados.

---

# 26. Exemplo: Escolhendo O Dispositivo

Problema:

Você precisa implementar uma lógica simples de controle:

```text
decodificar alguns endereços
gerar chip select
controlar enable de periféricos
```

Boa escolha:

```text
CPLD
```

Motivo:

```text
lógica de controle moderada
atraso previsível
menos necessidade de recursos grandes
```

Outro problema:

Você precisa implementar:

```text
processamento de imagem
muitas operações paralelas
buffers internos
multiplicações
FSMs
interfaces digitais
```

Boa escolha:

```text
FPGA
```

Motivo:

```text
muitos blocos lógicos
memórias internas
DSPs
paralelismo
maior capacidade
```

---

# 27. Questões Clássicas De Prova

## 27.1 Qual é mais flexível: PLA ou PAL?

Resposta:

```text
PLA
```

Porque:

```text
PLA tem plano AND programável e plano OR programável
PAL tem plano AND programável e plano OR fixo
```

## 27.2 O que uma LUT implementa?

Resposta:

```text
qualquer função booleana de até k entradas,
se a LUT tiver k entradas
```

## 27.3 Uma LUT de 5 entradas tem quantas posições?

```text
2^5 = 32 posições
```

## 27.4 FPGA é sempre não volátil?

Não.

Muitos FPGAs são baseados em SRAM e perdem a configuração ao desligar.

Eles precisam carregar o bitstream novamente ao ligar.

## 27.5 PROM cresce como?

Se há `n` entradas:

```text
2^n endereços
```

Então cresce exponencialmente com o número de entradas.

---

# 28. Comparação Geral

Tabela de revisão:

| Dispositivo | Ideia | Pontos fortes | Limitações |
|---|---|---|---|
| PROM | Tabela verdade gravada | Simples, implementa qualquer função de n entradas | Cresce como `2^n` |
| PLA | AND e OR programáveis | Flexível, compartilha produtos | Mais complexa/lenta |
| PAL | AND programável, OR fixo | Simples e rápida | Menos flexível |
| CPLD | Vários blocos tipo PAL/PLA conectados | Controle, glue logic, atraso previsível | Menor que FPGA |
| FPGA | Muitas LUTs, FFs e interconexões | Grande capacidade e paralelismo | Mais complexo, atraso depende de roteamento |

Resumo em uma linha:

```text
PROM -> tabela
PLA  -> soma de produtos flexível
PAL  -> soma de produtos mais limitada
CPLD -> vários blocos programáveis para controle
FPGA -> mar de LUTs, flip-flops e interconexões
```

---

# 29. Erros Comuns

## 29.1 Achar que FPGA executa programa igual CPU

FPGA não executa instruções como uma CPU comum, a menos que você implemente ou use um processador nele.

FPGA configura hardware.

```text
CPU executa instruções sequenciais
FPGA implementa circuitos paralelos
```

## 29.2 Achar que LUT é porta lógica fixa

LUT não é uma porta fixa como AND ou OR.

Ela pode virar muitas funções diferentes.

```text
conteúdo da LUT define a função
```

## 29.3 Achar que PAL é mais flexível que PLA

Não.

```text
PLA é mais flexível
PAL é mais limitada
```

## 29.4 Achar que todo dispositivo programável é reprogramável infinitamente

Não necessariamente.

Alguns dispositivos são:

```text
programáveis uma vez
```

Outros são:

```text
reprogramáveis
```

Depende da tecnologia.

## 29.5 Ignorar interconexão

Em FPGA, não basta contar LUTs.

Interconexão também importa.

```text
roteamento ruim -> atraso maior -> frequência menor
```

---

# 30. Mini-Resumo Visual

```text
ROM/PROM
  entradas -> endereço
  saída    -> dado gravado

PLA
  AND programável
  OR programável

PAL
  AND programável
  OR fixo

CPLD
  vários blocos programáveis
  interconexão previsível
  bom para controle

FPGA
  LUTs
  flip-flops
  interconexões programáveis
  blocos de memória/DSP em muitos modelos
  bom para sistemas digitais maiores
```

---

# 31. Exercícios

## 31.1 Conceituais

1. O que significa dizer que um dispositivo usa lógica programável?

2. Qual é a relação entre uma ROM e uma tabela verdade?

3. Se uma função tem 4 entradas, quantas combinações de entrada existem?

4. Uma PROM usada para implementar uma função de 5 entradas e 3 saídas precisa de quantas palavras e quantos bits por palavra?

5. Em termos de planos AND/OR, como uma PROM é organizada?

6. Em termos de planos AND/OR, como uma PLA é organizada?

7. Em termos de planos AND/OR, como uma PAL é organizada?

8. Qual é mais flexível: PLA ou PAL? Por quê?

9. O que é uma LUT?

10. Uma LUT de 4 entradas tem quantas posições?

11. Uma LUT de 6 entradas consegue implementar qualquer função booleana de quantas variáveis?

12. O que é bitstream em FPGA?

13. O que é interconexão programável?

14. Por que o atraso em FPGA depende também do roteamento?

15. Qual dispositivo tende a ser mais adequado para lógica de controle moderada: CPLD ou FPGA?

16. Qual dispositivo tende a ser mais adequado para um projeto digital grande com muito paralelismo: CPLD ou FPGA?

17. Qual é a diferença geral entre FPGA e ASIC?

18. Muitos FPGAs baseados em SRAM mantêm configuração sem energia? Explique.

19. O que significa dizer que HDL descreve hardware?

20. Por que uma PROM pode desperdiçar espaço quando há muitas entradas?

## 31.2 Múltipla escolha

21. Uma PROM implementa uma função com 6 entradas e 2 saídas. A organização mínima é:

   A) `6 x 2 bits`

   B) `12 x 2 bits`

   C) `32 x 2 bits`

   D) `64 x 2 bits`

22. Uma LUT de 5 entradas possui:

   A) 5 posições.

   B) 10 posições.

   C) 25 posições.

   D) 32 posições.

23. Sobre PLA e PAL, assinale a correta:

   A) PLA tem AND fixo e OR fixo.

   B) PAL tem AND programável e OR fixo.

   C) PLA tem AND fixo e OR programável.

   D) PAL tem AND fixo e OR programável.

24. Qual alternativa descreve melhor um FPGA?

   A) Uma memória DRAM usada apenas para dados.

   B) Um processador que executa sempre uma sequência fixa de instruções.

   C) Um dispositivo com blocos lógicos, flip-flops e interconexões programáveis.

   D) Uma porta lógica NAND grande.

25. Uma LUT de `k` entradas pode implementar:

   A) apenas portas AND.

   B) apenas portas OR.

   C) qualquer função booleana de até `k` variáveis.

   D) qualquer função booleana de qualquer quantidade de variáveis em uma única LUT.

26. Em geral, CPLD é muito usado para:

   A) lógica de controle e glue logic.

   B) memória principal dinâmica.

   C) armazenamento magnético.

   D) executar sistemas operacionais diretamente.

27. Em uma comparação geral, ASIC tende a ser melhor que FPGA em:

   A) flexibilidade após fabricação.

   B) prototipagem rápida.

   C) eficiência de área/energia/desempenho em grande volume.

   D) reconfiguração pelo usuário.

28. Em muitos FPGAs baseados em SRAM, ao desligar a energia:

   A) a configuração permanece sempre gravada internamente.

   B) a configuração é perdida e precisa ser carregada novamente.

   C) a LUT vira ROM permanente.

   D) o circuito vira ASIC.

29. O plano OR fixo é característica típica de:

   A) PLA.

   B) PAL.

   C) DRAM.

   D) SRAM.

30. O crescimento de uma PROM em função do número de entradas é problemático porque:

   A) cresce como `n`.

   B) cresce como `2^n`.

   C) cresce como `n/2`.

   D) não cresce.

## 31.3 Aplicação

31. Uma função lógica tem 3 entradas e 4 saídas. Qual seria uma organização de ROM/PROM capaz de implementá-la?

32. Uma LUT de 3 entradas vai implementar `F = A + B.C`. Preencha a tabela verdade de `F`.

33. Duas funções são:

```text
F1 = A.B + C.D
F2 = A.B + A.C
```

Liste os termos produto que uma PLA poderia compartilhar.

34. Explique por que FPGA é bom para paralelismo.

35. Dê um exemplo de aplicação adequada para CPLD e outro para FPGA.

---

# 32. Gabarito

1. Significa que o chip possui uma estrutura configurável capaz de implementar diferentes circuitos digitais conforme a programação/configuração.

2. As entradas da ROM podem ser usadas como endereço e o dado armazenado naquele endereço pode representar a saída da tabela verdade.

3. `2^4 = 16` combinações.

4. `2^5 = 32` palavras, com `3 bits` por palavra.

5. Plano AND fixo e plano OR programável.

6. Plano AND programável e plano OR programável.

7. Plano AND programável e plano OR fixo.

8. PLA, porque tanto o plano AND quanto o plano OR são programáveis.

9. É uma pequena tabela de consulta/memória que armazena a saída para cada combinação de entradas.

10. `2^4 = 16` posições.

11. Até 6 variáveis.

12. É o arquivo de bits que configura o FPGA, definindo LUTs, conexões, I/O e outros recursos.

13. É a rede de fios/chaves configuráveis que conecta blocos lógicos, entradas, saídas e outros recursos.

14. Porque os sinais passam por fios, chaves e multiplexadores programáveis; caminhos mais longos ou complexos aumentam o atraso.

15. CPLD.

16. FPGA.

17. FPGA é configurável/reconfigurável pelo usuário; ASIC é fabricado para uma função específica e tende a ser mais eficiente em grande volume.

18. Não. Muitos FPGAs baseados em SRAM perdem a configuração sem energia e precisam carregar o bitstream ao ligar.

19. Significa que a linguagem descreve circuitos, conexões, lógica combinacional e sequencial, não apenas uma sequência de instruções de software.

20. Porque precisa armazenar uma saída para cada combinação de entrada; com `n` entradas, são `2^n` endereços.

21. D. Seis entradas geram `2^6 = 64` palavras; duas saídas exigem `2 bits` por palavra.

22. D. `2^5 = 32`.

23. B.

24. C.

25. C.

26. A.

27. C.

28. B.

29. B.

30. B.

31. Três entradas geram `2^3 = 8` endereços. Quatro saídas exigem palavra de `4 bits`. Organização: `8 x 4 bits`.

32. Tabela:

```text
A B C | B.C | F = A + B.C
0 0 0 |  0  | 0
0 0 1 |  0  | 0
0 1 0 |  0  | 0
0 1 1 |  1  | 1
1 0 0 |  0  | 1
1 0 1 |  0  | 1
1 1 0 |  0  | 1
1 1 1 |  1  | 1
```

33. Termos:

```text
P1 = A.B
P2 = C.D
P3 = A.C
```

O termo `A.B` pode ser compartilhado pelas duas saídas.

34. Porque o FPGA configura hardware real: muitos blocos lógicos podem operar ao mesmo tempo, em vez de uma única sequência de instruções executar uma operação por vez.

35. Exemplo de CPLD: decodificação de endereço e geração de sinais de controle. Exemplo de FPGA: processamento paralelo de sinais/imagens ou implementação de um processador simples com periféricos.

---

# 33. O Que Memorizar

Memorize primeiro:

```text
PROM -> AND fixo, OR programável
PLA  -> AND programável, OR programável
PAL  -> AND programável, OR fixo
```

Depois:

```text
LUT de k entradas -> 2^k posições
LUT de k entradas -> qualquer função de até k variáveis
```

Depois:

```text
CPLD -> controle, glue logic, atraso mais previsível
FPGA -> LUTs, flip-flops, interconexões, projetos maiores e paralelos
```

E a pegadinha:

```text
FPGA baseado em SRAM perde configuração sem energia
precisa carregar bitstream ao ligar
```

---

# 34. Plano De Estudo Para Esta Aula

Tempo sugerido: **45 a 75 minutos**.

## 34.1 Primeira passada

Leia com foco em comparação:

```text
PROM vs PLA vs PAL
CPLD vs FPGA
FPGA vs ASIC
LUT como tabela verdade
```

## 34.2 Segunda passada

Refaça sem olhar:

```text
tabela AND/OR de PROM, PLA e PAL
quantidade de posições de LUT
o que é bitstream
por que FPGA depende de roteamento
```

## 34.3 Exercícios prioritários

Se tiver pouco tempo, faça:

```text
4, 5, 6, 7, 8, 10, 12, 18, 21, 22, 23, 24, 25, 28, 31 e 32
```

Esses exercícios cobrem os pontos com maior chance de cair.

---

# 35. Conexão Com A Próxima Aula

Esta aula fecha o bloco de circuitos digitais programáveis.

Você agora consegue conectar:

```text
tabela verdade
ROM/PROM
PLA/PAL
CPLD
FPGA
LUT
```

A próxima aula já entra em Arquitetura de Computadores:

```text
algoritmos procedurais
assembly básico
operandos
registradores
memória
```

Conexão:

```text
Sistemas Digitais explica os blocos físicos
Arquitetura explica como esses blocos executam programas
```

Antes de avançar, vale revisar:

```text
ULA
registradores
memórias
FSM
temporização
```

Esses assuntos aparecem de novo quando o processador for estudado.
