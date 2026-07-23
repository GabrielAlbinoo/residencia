# Resumo de Estudos Detalhado - Aulas 1 a 24

Atualizado em: 08/06/2026

Objetivo: ter um resumo mais detalhado do que ja foi visto ate a Aula 24, sem virar copia completa das aulas. A ideia aqui e revisar com conteudo suficiente para lembrar o conceito, a formula, a aplicacao e a pegadinha.

---

# 1. Como usar este arquivo

- Leia por blocos, nao precisa reler tudo sempre.
- Se um bullet parecer "familiar, mas meio nebuloso", volte nele no mesmo dia.
- Em multipla escolha, muitas vezes vale:
  - converter para decimal;
  - montar mini tabela-verdade;
  - testar duas alternativas;
  - eliminar as impossiveis.
- O foco aqui e dominar:
  - definicao;
  - interpretacao;
  - formula;
  - pegadinha comum.

---

# 2. Mapa geral do curso ate a Aula 24

```text
Aulas 1 a 2   -> sistemas numericos e codigos
Aulas 3 a 9   -> logica booleana, formas canonicas, Karnaugh e sintese
Aulas 10 a 16 -> blocos combinacionais, FSM, latches, FFs, registradores, contadores e temporizacao
Aulas 17 a 19 -> representacao numerica, somadores, subtrator, comparador, shifter e ULA
Aulas 20 a 22 -> MOS, CMOS, potencia, atraso, caminho critico e hazards
Aulas 23 a 24 -> memorias e logica programavel
```

Ideia geral do que a prova parece cobrar:

- amplitude grande;
- profundidade media;
- muita comparacao entre conceitos parecidos;
- alguma conta simples;
- simplificacao e interpretacao de circuito.

---

# 3. Aula por aula

## Aula 1 - Binario, operacoes, sinal e complemento de 2

### O que precisa entender

- Cada bit tem peso de potencia de 2.
- Conversao binario -> decimal: somar apenas os pesos onde o bit vale `1`.
- Conversao decimal -> binario: divisao sucessiva por `2`.
- Em hexadecimal:
  - 1 digito hex = 4 bits;
  - isso ajuda muito a converter binario grande rapidamente.

### Operacoes importantes

- Soma binaria:

```text
0+0=0
0+1=1
1+1=10
1+1+1=11
```

- Subtracao binaria pode ser feita:
  - por emprestimo;
  - ou por complemento de 2.

### Complemento de 2

- Para obter `-X`:

```text
1) inverter bits
2) somar 1
```

- Intervalos com `n` bits:

```text
sem sinal: 0 ate 2^n - 1
complemento de 2: -2^(n-1) ate 2^(n-1) - 1
```

### Coisas que caem muito

- Diferenciar carry de overflow.
- Saber que o MSB em complemento de 2 indica sinal:
  - `0` -> nao negativo;
  - `1` -> negativo.
- Overflow assinado:
  - soma de dois positivos dando negativo;
  - soma de dois negativos dando positivo.

### Atalhos bons de prova

- Multiplicar por `10_2` = deslocar para esquerda.
- Dividir por `10_2` = deslocar para direita.
- Em multiplicacao/divisao binaria simples, pode converter para decimal, operar e voltar.

### Pegadinhas

- `1111` pode ser:
  - `15` sem sinal;
  - `-1` em complemento de 2 com 4 bits.
- Carry final alto nao significa overflow automaticamente.

---

## Aula 2 - BCD, Gray, ASCII e checksum

### BCD

- BCD representa cada digito decimal separadamente em 4 bits.
- Exemplo:

```text
59 em BCD = 0101 1001
```

- Isso e diferente do binario puro de 59.

### Regras importantes

- Em BCD, so sao validos:

```text
0000 ate 1001
```

- Logo:

```text
1010 ate 1111
```

sao invalidos em BCD.

### Codigo Gray

- Gray muda apenas 1 bit por vez entre valores consecutivos.
- E util para reduzir erro em transicoes.

### Conversao binario -> Gray

- Primeiro bit repete.
- Os demais sao XOR entre bits binarios vizinhos.

### ASCII

- ASCII representa caracteres por codigos numericos.
- Nao e valor decimal "normal"; e codificacao de simbolo.

### Checksum e paridade

- Bit de paridade detecta alguns erros, nao todos.
- Checksum por soma simples tambem pode falhar.

### Pegadinhas

- BCD nao e o "mesmo numero em binario comum".
- Gray nao e pensado para facilitar conta, e sim transicao.
- ASCII codifica caractere, nao quantidade.

---

## Aula 3 - Portas logicas e operacoes booleanas

### Portas que precisa reconhecer

- `NOT`
- `AND`
- `OR`
- `NAND`
- `NOR`
- `XOR`
- `XNOR`

### Significado basico

- `AND` -> 1 somente se todas as entradas forem 1.
- `OR` -> 1 se pelo menos uma entrada for 1.
- `NOT` -> inverte.
- `XOR` -> 1 quando as entradas sao diferentes.
- `XNOR` -> 1 quando as entradas sao iguais.

### Leitura de expressoes

- Precedencia usual:

```text
NOT -> AND -> OR
```

- Entao:

```text
A + B.C
```

significa:

```text
A + (B.C)
```

### O que precisa saber fazer

- Ir de expressao para circuito.
- Ir de circuito para expressao.
- Avaliar saida a partir de valores de entrada.

### Pegadinhas

- NAND = AND negado, nao "OR diferente".
- XOR nao significa "um ou outro obrigatoriamente sozinho"; significa entradas diferentes.

---

## Aula 4 - Algebra booleana

### Leis mais importantes

```text
A + 0 = A
A . 1 = A
A + 1 = 1
A . 0 = 0
A + A = A
A . A = A
A + A' = 1
A . A' = 0
```

### Absorcao

```text
A + A.B = A
A.(A+B) = A
```

### Distributiva

```text
A.(B+C) = A.B + A.C
A + B.C = (A+B).(A+C)
```

### O que isso resolve

- Reduz expressao.
- Diminui numero de portas.
- Prepara para montagem com NAND ou NOR.

### Pegadinhas

- Nao usar algebra comum sem pensar.
- Em booleana:

```text
A + A = A
```

e nao `2A`.

---

## Aula 5 - DeMorgan, dualidade, NAND e NOR

### Teorema de DeMorgan

```text
(A+B)' = A'.B'
(A.B)' = A' + B'
```

### Regra mental importante

- Ao negar um bloco:
  - inverte variaveis;
  - troca `+` por `.`;
  - troca `.` por `+`.

### Aplicacoes

- Simplificar expressoes.
- Empurrar negacoes.
- Implementar so com NAND.
- Implementar so com NOR.

### Dualidade

- Trocar:
  - `+` por `.`
  - `0` por `1`
  - `1` por `0`

- Isso gera a forma dual de uma lei.

### Portas universais

- NAND e universal.
- NOR e universal.

### Pegadinhas

- Negacao precisa valer para o bloco inteiro.
- Exemplo que cai bem:

```text
(A + B')' = A'.B
```

---

## Aula 6 - Valores logicos, formas canonicas, mintermos e maxtermos

### Valores logicos

- `H` = alto
- `L` = baixo
- `Z` = alta impedancia
- `don't care` = valor livre para simplificacao

### Formas canonicas

- SOP canonica = soma de mintermos.
- POS canonica = produto de maxtermos.

### Mintermos

- Representam linhas onde `F=1`.
- Cada mintermo usa todas as variaveis.
- Variavel:
  - vale `1` -> aparece normal;
  - vale `0` -> aparece negada.

### Maxtermos

- Representam linhas onde `F=0`.
- Variavel:
  - vale `0` -> aparece normal;
  - vale `1` -> aparece negada.

### Notacao importante

```text
Sigma m(...) -> lista de mintermos
Pi M(...)    -> lista de maxtermos
```

### O que precisa saber fazer

- Tabela-verdade -> SOP canonica.
- Tabela-verdade -> POS canonica.
- Descobrir mintermos e maxtermos.

### Pegadinhas

- `Z` nao e `don't care`.
- Mintermo e associado a linha com saida 1.
- Maxtermo e associado a linha com saida 0.

---

## Aula 7 - Karnaugh de 2 e 3 variaveis

### Objetivo

- Minimizar funcao visualmente.

### Regras principais

- Agrupar `1s` para obter SOP.
- Grupos com tamanho potencia de 2:

```text
1, 2, 4, 8...
```

- Fazer grupos os maiores possiveis.
- Bordas sao adjacentes.
- Pode haver sobreposicao se ajudar.

### O que some na expressao

- Variavel que muda dentro do grupo desaparece.
- Variavel que permanece fixa continua no termo.

### O que precisa treinar

- Ler mapa.
- Encontrar grupos validos.
- Tirar expressao minima.

### Pegadinhas

- Diagonal nao e adjacencia.
- Nao confundir ordem Gray com ordem binaria comum.

---

## Aula 8 - Karnaugh de 4 variaveis e don't care

### Estrutura

- 16 celulas.
- Ordem Gray em linhas e colunas:

```text
00, 01, 11, 10
```

### Regras

- `1s` -> SOP
- `0s` -> POS
- Grupos:

```text
1, 2, 4, 8, 16
```

- Quanto maior o grupo, melhor a simplificacao.

### Don't care

- Pode ser usado como `0` ou `1` se ajudar.
- Nao precisa usar todos.
- So vale usar se realmente melhorar o agrupamento.

### Pegadinhas

- Cantos tambem podem ser adjacentes.
- Nao criar grupo "bonito" mas invalido.
- Nao usar `X` obrigatoriamente.

---

## Aula 9 - Sintese logica completa com SOP, POS, NAND e NOR

### Fluxo seguro

```text
tabela verdade
-> forma canonica
-> simplificacao
-> implementacao
```

### Relacoes importantes

- SOP combina naturalmente com AND-OR.
- POS combina naturalmente com OR-AND.
- NAND-NAND implementa bem SOP.
- NOR-NOR implementa bem POS.

### O que precisa saber

- Se a questao pede SOP, agrupar `1s`.
- Se pede POS, agrupar `0s`.
- Se pede so com NAND, usar DeMorgan e dupla negacao.
- Se pede so com NOR, pensar em POS e DeMorgan.

### Pegadinhas

- Expressao canonica nao e necessariamente minimizada.
- A resposta final precisa estar no formato pedido pela questao.

---

## Aula 10 - MUX, DEMUX, decoder, encoder e blocos combinacionais

### MUX

- Escolhe uma entre varias entradas.
- Em um MUX `2^n -> 1`, sao necessarios `n` bits de selecao.

### DEMUX

- Recebe uma entrada e a envia para uma saida selecionada.

### Decoder

- Transforma codigo binario em linha ativa.
- Decoder `n -> 2^n`.

### Encoder

- Faz o inverso do decoder.
- Priority encoder resolve conflito quando varias entradas estao ativas.

### Comparador

- Pode indicar:
  - `A > B`
  - `A = B`
  - `A < B`

### O que costuma cair

- Quantos bits de selecao um MUX precisa.
- Quantas saidas um decoder tem.
- Uso de MUX para implementar funcao logica.

### Pegadinhas

- Todos esses blocos sao combinacionais: nao guardam estado.

---

## Aula 11 - Introducao a FSM, Moore e Mealy

### O que e FSM

- Maquina de estados finitos.
- Tem:
  - estado atual;
  - entrada;
  - proximo estado;
  - saida.

### Moore

- Saida depende so do estado.

### Mealy

- Saida depende do estado e da entrada.

### Consequencias praticas

- Moore tende a ser mais estavel.
- Mealy pode responder mais rapido.

### O que precisa saber fazer

- Ler diagrama de estados.
- Preencher tabela de transicao.
- Rastrear estados para uma sequencia de entradas.

### Pegadinhas

- Duas FSMs podem ter transicoes parecidas e saidas diferentes.
- Em Mealy, a saida pode mudar sem trocar de estado, se a entrada mudar.

---

## Aula 12 - Estabilidade, latch SR e latch D

### Conceito geral

- Latch armazena 1 bit.
- E sensivel a nivel, nao a borda.

### Latch SR

- Possui set e reset.
- Existe combinacao proibida/indesejada.

### Latch D

- Usa uma entrada de dados.
- Evita o problema classico do SR.
- Quando habilitado, a saida acompanha a entrada.
- Quando desabilitado, mantem o valor.

### Termos importantes

- estado estavel
- realimentacao
- transparente

### Pegadinhas

- Latch nao e flip-flop.
- "Transparente" significa que a saida acompanha a entrada enquanto o enable esta ativo.

---

## Aula 13 - Flip-flops e registradores

### Flip-flop

- Guarda 1 bit.
- E acionado por borda de clock.

### Tipos importantes

- FF D:

```text
Q+ = D
```

- FF T:

```text
T=0 -> mantem
T=1 -> alterna
```

- FF JK:
  - pode manter;
  - setar;
  - resetar;
  - alternar.

### Registrador

- Conjunto de flip-flops.
- Registrador de `n` bits guarda `n` bits.

### Sinais comuns

- `clock`
- `enable`
- `reset`

### Pegadinhas

- FF responde na borda; latch responde por nivel.
- Em sintese com FF D, sempre pensar:

```text
D = proximo valor de Q
```

---

## Aula 14 - Contadores assincronos, sincronos e divisao de frequencia

### Contadores

- Passam por sequencia de estados.
- Com `n` flip-flops:

```text
ate 2^n estados
```

### Assincrono

- Clock propaga de um FF para outro.
- Acumula atraso.

### Sincrono

- Mesmo clock para todos os FFs.
- Mais rapido e previsivel.

### Divisao de frequencia

- Cada estagio pode dividir por `2`.

### Modulo

- Contador modulo `M` possui `M` estados validos.

### Pegadinhas

- Para modulo 10, precisa de 4 FFs porque:

```text
2^3 = 8  -> insuficiente
2^4 = 16 -> suficiente
```

---

## Aula 15 - Temporizacao sequencial, setup, hold e caminho critico

### Conceitos

- `Tcq` = clock-to-Q.
- `Tsetup` = dado deve chegar antes da borda.
- `Thold` = dado deve permanecer apos a borda.
- `Tcomb` = atraso da logica combinacional.

### Formulas mais importantes

```text
Tclk >= Tcq + Tcomb_max + Tsetup
Tcq_min + Tcomb_min >= Thold
Fmax ~= 1 / Tcritico
```

### Interpretacao

- Violacao de setup:
  - clock rapido demais;
  - caminho maximo grande demais.

- Violacao de hold:
  - caminho minimo curto demais.

### Caminho critico

- E o caminho de maior atraso.
- Ele limita a frequencia maxima.

### Pegadinhas

- Setup olha caminho maximo.
- Hold olha caminho minimo.

---

## Aula 16 - Sintese de FSM com flip-flops D

### Passos basicos

```text
1) definir estados
2) codificar estados
3) montar tabela de transicao
4) descobrir proximo estado
5) montar entradas dos FFs
6) minimizar
```

### Quantidade de flip-flops

- Para `k` estados:

```text
ceil(log2(k))
```

### Regra de ouro do FF D

```text
D = Q+
```

### O que precisa saber

- Obter equacoes de proximo estado.
- Obter equacoes de saida.
- Diferenciar Moore e Mealy nessa etapa.

### Pegadinhas

- Estados nao usados podem aparecer como `don't care` se a questao permitir.
- A tabela expandida precisa bater com o diagrama.

---

## Aula 17 - Ponto fixo e ponto flutuante

### Ponto fixo

- Virgula implicita em posicao fixa.
- Valor real = inteiro armazenado escalado.

### Formato `Qm.n`

- `m` relacionado a parte inteira/sinal conforme convencao.
- `n` = bits fracionarios.

### Consequencias

- Mais bits fracionarios -> mais precisao.
- Mais bits inteiros -> maior faixa.

### Ponto flutuante

- Separacao em:
  - sinal;
  - expoente;
  - mantissa/significando.

### Ideias importantes

- Expoente controla escala.
- Mantissa controla precisao.
- Existe arredondamento.
- Pode haver overflow e underflow.

### Pegadinhas

- Ponto fixo e mais simples, mas com faixa mais limitada.
- Ponto flutuante nao significa precisao infinita.

---

## Aula 18 - Somadores

### Half-adder

```text
S    = A XOR B
Cout = A.B
```

### Full-adder

```text
S    = A XOR B XOR Cin
Cout = A.B + A.Cin + B.Cin
```

### Ripple-carry

- Simples de montar.
- Atraso cresce com o numero de bits.

### Carry look-ahead

- Tenta antecipar carries.
- Reduz atraso.

### O que costuma cair

- Tabela do half-adder.
- Tabela do full-adder.
- Interpretacao de `Cin` e `Cout`.

### Pegadinhas

- Carry final nao e igual a overflow.
- Em aritmetica com sinal, overflow e mais importante que carry.

---

## Aula 19 - Subtrator, comparador, shifter e ULA

### Subtracao

```text
A - B = A + (~B + 1)
```

### Como usar somador para subtrair

- inverter `B`
- colocar `Cin = 1`

### Comparador

- Pode ser feito por logica direta ou via subtracao.

### Shifter

- Deslocamento logico:
  - insere `0`.
- Deslocamento aritmetico a direita:
  - preserva sinal.

### ULA

- Recebe:
  - operacao/controle;
  - operandos;
  - as vezes `Cin`.

- Devolve:
  - resultado;
  - flags.

### Flags importantes

- `Zero`
- `Negativo`
- `Carry`
- `Overflow`

### Pegadinhas

- ULA nao "decide sozinha"; ela recebe controle.
- `Cin` pode ser entrada auxiliar.
- Flags geralmente sao saidas.

---

## Aula 20 - Fisica basica e transistores MOS

### Conceitos minimos

- Tensao = diferenca de potencial.
- Corrente = fluxo de carga.
- Potencia:

```text
P = V.I
```

- Energia:

```text
E = P.t
```

### MOS como chave

- Para a prova, transistor MOS e tratado como chave controlada pelo gate.

### Comportamento

- NMOS liga com `1`.
- PMOS liga com `0`.
- Desligado = alta impedancia / chave aberta.

### Papel tipico

- NMOS e bom para puxar para `0`.
- PMOS e bom para puxar para `1`.

### Pegadinhas

- Nao precisa aprofundar em eletrons, lacunas e dopagem para essa trilha.
- O foco aqui e funcional/digital.

---

## Aula 21 - CMOS combinacional

### Estrutura padrao

```text
pull-up   = PMOS
pull-down = NMOS
```

### Inversor CMOS

- PMOS em cima.
- NMOS embaixo.
- Entrada `0` -> saida `1`.
- Entrada `1` -> saida `0`.

### Dualidade das redes

- Se no pull-down ha serie, no pull-up ha paralelo.
- Se no pull-down ha paralelo, no pull-up ha serie.

### Portas mais importantes

- NAND CMOS:

```text
NMOS em serie
PMOS em paralelo
```

- NOR CMOS:

```text
NMOS em paralelo
PMOS em serie
```

- AND = NAND + inversor.
- OR = NOR + inversor.

### Pegadinhas

- CMOS e tecnologia/familia, nao uma unica porta.
- NOT, NAND e NOR podem ser implementadas em CMOS.
- NMOS sozinho nao passa `1` forte; PMOS sozinho nao passa `0` forte.

---

## Aula 22 - Potencia, atraso, caminho critico e hazards

### Potencia em CMOS

- Estatica: baixa em CMOS ideal parado.
- Dinamica: aparece no chaveamento.

### Formula central

```text
Pdin ~= alpha . C . VDD^2 . f
```

Onde:

- `alpha` = atividade de chaveamento
- `C` = capacitancia
- `VDD` = tensao
- `f` = frequencia

### Consequencias praticas

- maior `C` -> maior atraso e maior consumo;
- maior `f` -> maior consumo;
- maior `VDD` -> impacto forte porque esta ao quadrado.

### Fanout

- Mais cargas ligadas a uma saida -> maior capacitancia.

### Atraso e caminho critico

- Atraso de propagacao = tempo entre mudar entrada e a saida responder.
- Caminho critico = maior atraso.

### Glitch e hazard

- Glitch = pulso temporario indevido.
- Hazard = vulnerabilidade estrutural que permite glitch.

### Tipos importantes

- hazard estatico-1
- hazard estatico-0
- hazard dinamico

### Consenso

Para:

```text
F = A.B + A'.C
```

o consenso e:

```text
B.C
```

### Pegadinhas

- Hazard e a causa estrutural.
- Glitch e o efeito observado.
- Diferenca de atraso entre caminhos pode definir a duracao do glitch.

---

## Aula 23 - Memorias, banco de registradores, ROM, SRAM e DRAM

### Conceitos basicos

- Endereco escolhe a posicao.
- Palavra = quantidade de bits por posicao.
- Com `n` bits de endereco:

```text
2^n posicoes
```

- Capacidade:

```text
capacidade = numero de posicoes x bits por palavra
```

### Operacoes

- Leitura:
  - endereco entra;
  - dado sai.

- Escrita:
  - endereco;
  - dado;
  - sinal de escrita.

### Banco de registradores

- Pequeno conjunto de registradores enderecaveis.
- Muito rapido.
- Muito usado em processadores.

### ROM

- Nao volatil.
- Conteudo fixo.
- Pode implementar tabela-verdade.

### SRAM

- Volatil.
- Rapida.
- Nao precisa de refresh.

### DRAM

- Volatil.
- Mais densa.
- Precisa de refresh.

### Comparacao que precisa saber

- registrador > SRAM > DRAM em velocidade;
- DRAM costuma ganhar em densidade/capacidade;
- ROM guarda conteudo fixo.

### Pegadinhas

- SRAM continua volatil mesmo sem refresh.
- ROM/PROM podem ser pensadas como tabela-verdade gravada.

---

## Aula 24 - Logica programavel, PROM, PLA, PAL, CPLD e FPGA

### Ideia geral

- Em vez de montar a logica porta por porta fisicamente, configura-se um arranjo programavel.

### PROM

```text
AND fixo
OR programavel
```

- Pense como tabela-verdade gravada.
- Entradas viram endereco.
- Saidas viram palavra armazenada.

### PLA

```text
AND programavel
OR programavel
```

- Mais flexivel.
- Permite escolher os produtos e como eles chegam as saidas.

### PAL

```text
AND programavel
OR fixo
```

- Menos flexivel que PLA.
- Mais simples/rapida em muitos contextos.

### Comparacao que cai muito

```text
PROM -> AND fixo, OR programavel
PLA  -> AND programavel, OR programavel
PAL  -> AND programavel, OR fixo
```

### CPLD

- Bom para controle e glue logic.
- Atraso mais previsivel.

### FPGA

- Usa LUTs, flip-flops e interconexoes programaveis.
- Muito mais flexivel.
- Bom para projetos maiores e paralelos.

### LUT

- LUT de `k` entradas:

```text
2^k posicoes
```

- Implementa qualquer funcao de ate `k` variaveis.

### Bitstream

- Arquivo/configuracao que programa o FPGA.

### Pegadinhas

- PROM parece memoria no uso.
- PLA/PAL parecem mais redes AND/OR configuradas.
- Todas podem realizar logica combinacional depois de configuradas.

---

# 4. Formulas e relacoes que valem memorizacao

## Contagem e bits

```text
n bits -> 2^n combinacoes
n variaveis -> 2^n linhas de tabela verdade
n bits de endereco -> 2^n posicoes
```

## Intervalos

```text
sem sinal: 0 ate 2^n - 1
complemento de 2: -2^(n-1) ate 2^(n-1) - 1
```

## Somadores

```text
half-adder:
S    = A XOR B
Cout = A.B

full-adder:
S    = A XOR B XOR Cin
Cout = A.B + A.Cin + B.Cin
```

## Subtracao

```text
A - B = A + (~B + 1)
```

## Temporizacao

```text
Tclk >= Tcq + Tcomb_max + Tsetup
Tcq_min + Tcomb_min >= Thold
Fmax ~= 1 / Tcritico
```

## Potencia e energia

```text
P = V.I
E = P.t
Pdin ~= alpha . C . VDD^2 . f
```

## Memoria

```text
capacidade = posicoes x bits por palavra
```

## CMOS

```text
NMOS liga com 1
PMOS liga com 0

NAND CMOS:
NMOS serie
PMOS paralelo

NOR CMOS:
NMOS paralelo
PMOS serie
```

## Logica programavel

```text
PROM -> AND fixo, OR programavel
PLA  -> AND programavel, OR programavel
PAL  -> AND programavel, OR fixo
```

---

# 5. Pegadinhas que merecem revisao constante

- Carry nao e overflow.
- MSB em `1` nao significa erro automaticamente; pode ser numero negativo valido.
- `Z` nao e `don't care`.
- SOP vem de agrupar `1s`; POS vem de agrupar `0s`.
- Mealy pode responder na entrada sem trocar de estado.
- Em sintese com FF D:

```text
D = Q+
```

- Setup e caminho maximo; hold e caminho minimo.
- NMOS puxa bem para `0`; PMOS puxa bem para `1`.
- Hazard e a vulnerabilidade; glitch e o pulso.
- SRAM nao precisa de refresh, mas continua volatil.
- PROM nao se pensa igual PLA/PAL:
  - PROM lembra tabela-verdade/memoria;
  - PLA/PAL lembram rede configurada de produtos e somas.

---

# 6. O que voce deveria conseguir fazer depois de revisar este arquivo

- converter entre decimal, binario, hexadecimal e complemento de 2;
- reconhecer BCD, Gray e ASCII;
- simplificar com algebra booleana e DeMorgan;
- montar SOP, POS, mintermos e maxtermos;
- resolver Karnaugh com ou sem `don't care`;
- entender MUX, decoder, encoder e comparador;
- rastrear FSM Moore e Mealy;
- diferenciar latch de flip-flop;
- resolver exercicio com FF D, T e JK;
- usar formulas de setup, hold e caminho critico;
- resolver half-adder, full-adder e subtracao por complemento de 2;
- interpretar comparador, shifter e ULA;
- reconhecer NMOS, PMOS, inversor, NAND e NOR CMOS;
- aplicar `P = V.I`, `E = P.t` e `Pdin ~= alpha.C.VDD^2.f`;
- diferenciar glitch, hazard e consenso;
- calcular capacidade de memoria;
- diferenciar ROM, SRAM, DRAM, PROM, PLA, PAL, CPLD e FPGA.

---

# 7. Como estudar com este resumo

```text
1) releia o bloco da aula
2) tente explicar sem olhar
3) marque o que ainda hesita
4) faca 5 a 10 questoes daquele bloco
5) transforme erro recorrente em cartao do Anki
```

Ordem boa para revisao:

```text
1) aulas 1 a 9  -> base logica
2) aulas 13 a 16 -> sequencial e temporizacao
3) aulas 18 a 24 -> aritmetica, CMOS, memorias e PLDs
```
