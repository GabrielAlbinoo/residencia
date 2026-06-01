# Plano de Estudos Revisado — CI Brasil Inovação 2
## Trilha: Sistemas Digitais — UFCG

**Plano atualizado em:** 01/06/2026, segunda-feira  
**Período restante de estudo:** 29/05/2026 a 27/06/2026  
**Prova objetiva:** 28/06/2026, domingo, das 14h às 18h  
**Foco deste plano:** conteúdo técnico de Sistemas Digitais  
**Situação atual:** aulas `1` a `15` estudadas; a Aula `17` também foi estudada ao revisar binário e frações; aulas `16`, `18`, `19` e `20` já criadas, mas ainda não registradas como estudadas. A aula de assembly foi criada fora de ordem e renumerada como `Aula 25`, para ser estudada depois do bloco de circuitos digitais/aritmética.

---

# 1. Leitura do Edital

Fonte analisada:

```text
Edital-de-Selecao-CI-Inovador-2026.docx.pdf
Edital n. 001/2026 — SOFTEX/UFSM, de 21/05/2026
```

## 1.1 Informações confirmadas

| Item | Informação do edital |
|---|---|
| Trilha escolhida | Sistemas Digitais |
| Polo de interesse | UFCG — Campina Grande/PB |
| Vagas da UFCG em Sistemas Digitais | 18 vagas: 12 AC e 6 ação afirmativa para mulheres |
| Prova | 40 questões objetivas de Conhecimento Técnico e Inglês |
| Data e horário | 28/06/2026, das 14h às 18h |
| Duração | 4 horas, presencial |
| Pontuação | Número de respostas corretas |
| Pontuação mínima | 20 pontos |
| Eliminação adicional | Zerar em uma ou mais disciplinas da prova |
| Inscrições | Até 15/06/2026 |
| Consulta obrigatória ao local de prova | 24/06/2026 |
| Se o nome não estiver na lista | Contatar `falecom@nisa.ufsm.br` até 25/06/2026 |

## 1.2 Decisão sobre inglês neste plano

O edital inclui **Inglês Intermediário/Instrumental (nível B2)** e prevê eliminação se o candidato zerar uma disciplina.

Por decisão sua, este plano **não terá sessões separadas de inglês**, porque o conteúdo técnico já está sendo consumido em inglês. A exposição à língua ocorrerá naturalmente nas leituras, vídeos, datasheets e exercícios técnicos.

Importante:

```text
O plano não agenda inglês à parte, mas a prova real contém inglês.
```

---

# 2. Conteúdo Oficial de Sistemas Digitais

O Anexo III do edital organiza o conteúdo digital em três blocos técnicos.

## 2.1 Matemática e Fundamentos da Computação

- sistema numérico binário, operações aritméticas e conversão para decimal;
- códigos binários: BCD, Gray, ASCII, checksum etc.;
- portas lógicas: inversor, NAND, NOR etc.;
- álgebra booleana: axiomas, funções e teoremas;
- Teorema de DeMorgan e dualidade;
- valores lógicos `H`, `L`, `Z` e `don't care`;
- multiplexador, codificador, decodificador e outros blocos lógicos básicos;
- combinação de portas e avaliação de expressões lógicas;
- minimização lógica, mintermos e maxtermos;
- mapas de Karnaugh;
- síntese de circuito lógico;
- máquinas de estados finitos Moore e Mealy;
- síntese de máquinas de estados.

## 2.2 Arquitetura de Computadores

- operandos em instruções assembly;
- formatos de instruções assembly;
- instruções aritméticas/lógicas, condicionais, desvios e chamadas de funções;
- modos de endereçamento;
- implementação da microarquitetura: controle e datapath.

## 2.3 Circuitos Digitais

- lógica CMOS combinacional: transistores MOS `p` e `n` como chaves;
- comportamentos elétricos: estático, dinâmico e consumo de potência;
- atraso de propagação e caminho crítico;
- glitches e hazards estáticos e dinâmicos;
- lógica sequencial: estabilidade, latches e flip-flops;
- temporização sequencial: hold, setup e atraso de propagação;
- somadores: half-adder, full-adder, ripple-carry e look-ahead;
- subtrator, comparador, shifter e ULA;
- contadores;
- ponto fixo e ponto flutuante;
- memórias: banco de registradores, ROM, SRAM e DRAM;
- PLA, PAL e PROM;
- CPLDs e FPGAs.

## 2.4 Pré-requisitos do item 2.7.1 que merecem cobertura

Além do conteúdo programático, o edital declara como pré-requisitos para Sistemas Digitais:

- noção de algoritmos e programação em linguagem procedural;
- noções básicas de arquitetura e organização de computadores;
- conhecimentos básicos de física: tensão, corrente, potência e energia.

Esses itens serão cobertos de modo focado, sem virar um curso paralelo.

---

# 3. Progresso Real Até 29/05

## 3.1 Aulas estudadas

| Aula | Conteúdo | Status |
|---|---|---|
| Aula 1 | Binário, operações, sinal e complemento de 2 | Estudada |
| Aula 2 | BCD, Gray, ASCII e checksum | Estudada |
| Aula 3 | Portas lógicas e operações booleanas | Estudada |
| Aula 4 | Álgebra booleana, axiomas, leis e simplificação | Estudada |
| Aula 5 | DeMorgan, dualidade, NAND e NOR | Estudada |
| Aula 6 | Valores lógicos, mintermos, maxtermos, SOP e POS | Estudada |
| Aula 7 | Karnaugh de 2 e 3 variáveis | Estudada |
| Aula 8 | Karnaugh de 4 variáveis e `don't care` | Estudada |
| Aula 9 | Síntese lógica completa com SOP, POS, NAND e NOR | Estudada |
| Aula 10 | MUX, DEMUX, decoder, encoder e blocos combinacionais | Estudada em 27/05 |
| Aula 11 | Introdução a FSM, Moore e Mealy | Estudada em 28/05 |
| Aula 12 | Estabilidade, latch SR e latch D | Estudada em 28/05 |
| Aula 13 | Flip-flops e registradores | Estudada |
| Aula 14 | Contadores assíncronos, síncronos e divisão de frequência | Estudada |
| Aula 15 | Temporização sequencial, setup, hold e caminho crítico | Estudada |
| Aula 17 | Ponto fixo e ponto flutuante | Estudada em 01/06, durante revisão de binário |

## 3.2 Aulas já criadas, mas ainda não registradas como estudadas

| Aula | Conteúdo | Próxima ação |
|---|---|---|
| Aula 16 | Síntese de máquinas de estados com flip-flops D | Estudar e fazer pelo menos 1 exemplo Moore e 1 exemplo Mealy |
| Aula 18 | Subtrator, comparador, shifter e ULA | Estudar reforçando subtração por complemento de 2 e consultar a aula de somadores como apoio |
| Aula 19 | Somadores: half-adder, full-adder, ripple-carry e carry look-ahead | Estudar como reforço operacional para subtração e ULA |
| Aula 20 | Física básica e transistores MOS | Estudar antes de CMOS combinacional |
| Aula 25 | Algoritmos procedurais, assembly básico e operandos | Guardar para depois de circuitos digitais/aritmética |

## 3.3 Simulados já realizados

| Data | Simulado | Resultado | Observação |
|---|---|---:|---|
| 25/05/2026 | Simulado 01 — Semana 1 | `36/40 (90%)` | Base inicial forte |
| 26/05/2026 | Simulado 02 — Aulas 6 a 8 | `27/30 (90%)` | Karnaugh bom, com ajustes em POS/zeros |
| 26/05/2026 | Simulado 03 — Aulas 1 a 9, nível de prova | `73/90 (81%)` | Bom diagnóstico, mas cansativo demais |
| 28/05/2026 | Simulado 04 — Revisão Aulas 9 a 13 | `24/30 (80%)` | Bom resultado; principal lacuna foi Aula 10, já revisada com foco em MUX |
| 01/06/2026 | Simulado 05 — Aulas 1 a 17, nível difícil | `44/50 (88%)` | Resultado forte; revisar decoder/encoder/DEMUX e ponto fixo/flutuante |

## 3.4 Diagnóstico atual

Pontos fortes:

- sistemas numéricos básicos;
- portas lógicas;
- álgebra booleana inicial;
- DeMorgan, dualidade, NAND e NOR;
- mintermos, maxtermos e formas canônicas;
- mapas de Karnaugh, principalmente lendo pelos `1`;
- síntese combinacional básica;
- latches, flip-flops e registradores;
- contadores e divisão de frequência;
- temporização sequencial em nível inicial.

Pontos que ainda merecem revisão ativa:

- diferença entre `carry` e `overflow`;
- extensão de sinal em complemento de 2;
- ASCII em hexadecimal;
- checksum módulo 256;
- maxtermos e leitura POS por zeros;
- XOR/XNOR com três ou mais entradas;
- simplificação algébrica em POS;
- implementação NAND/NOR quando a expressão vem de mapa;
- `don't care` em síntese;
- síntese de FSM com tabela, codificação e equações `D=Q+`.

---

# 4. Status de Matemática e Fundamentos

## 4.1 O que já está fechado

A parte combinacional está concluída:

- sistemas numéricos;
- códigos binários;
- portas lógicas;
- álgebra booleana;
- DeMorgan e dualidade;
- `H`, `L`, `Z` e `don't care`;
- mintermos, maxtermos, SOP e POS;
- Karnaugh de 2, 3 e 4 variáveis;
- síntese lógica combinacional;
- MUX, DEMUX, decoder, encoder e blocos combinacionais.

A parte sequencial básica também já foi estudada:

- Moore e Mealy em nível conceitual;
- estabilidade, latch SR e latch D;
- flip-flops e registradores;
- contadores assíncronos e síncronos;
- divisão de frequência;
- temporização sequencial;
- setup, hold, clock-to-Q, caminho crítico e `Fmax`.

## 4.2 O que ainda falta para fechar Matemática/Fundamentos

A parte que ainda impede marcar Matemática/Fundamentos como 100% concluída é uma só:

- síntese de máquinas de estados.

A Aula 16 já foi criada para isso, mas ainda falta registrá-la como estudada e praticar o procedimento operacional:

```text
enunciado -> diagrama de estados -> tabela de estados -> codificação dos estados
-> equações de próximo estado e saída -> implementação com flip-flops
```

Resumo do status:

| Área | Status |
|---|---|
| Combinacional | Concluída |
| Sequencial básico | Concluído até temporização |
| FSM conceitual | Concluída |
| Síntese de FSM | Aula 16 criada; pendente de estudo/prática |

Conclusão:

```text
Matemática/Fundamentos está praticamente fechada, mas ainda não 100%.
Para fechar oficialmente, falta estudar a Aula 16 de síntese de FSM.
```

---

# 5. Regra Nova de Ritmo

O estudo rendeu muito nos primeiros dias, mas o Simulado 03 mostrou que simulados muito longos drenam energia.

Regra daqui para frente:

- simulados normais: `40` a `60` questões;
- simulados de domingo: no máximo `60` questões;
- simulado de `90` questões só se houver motivo muito claro;
- sempre corrigir no mesmo dia ou no máximo no dia seguinte;
- Anki continua como revisão leve no ônibus/casa;
- quando bater cansaço real, trocar teoria nova por revisão curta ou descanso.

O objetivo não é só cobrir assunto. É chegar na prova ainda com cabeça para raciocinar.

---

# 6. Cronograma Atualizado — 28/05 a 27/06

## Fase 1 — Fechamento de Sequencial Básico e FSM
### 28/05 a 07/06

**Objetivo:** fechar a parte que liga matemática/fundamentos com circuitos sequenciais: latches, flip-flops, registradores, contadores, temporização e síntese de FSM.

### 28/05 — Quinta — Aula 11 concluída

- Registrar Aula 11 como estudada.
- Registrar Aula 12 como estudada.
- Revisar dúvidas principais:
  - Moore vs Mealy;
  - saída dependente de estado;
  - saída dependente de estado e entrada;
  - leitura de diagramas simples.
- Revisar dúvidas principais de latch:
  - realimentação;
  - latch SR com NOR;
  - condição inválida;
  - latch D transparente por nível.
- Não iniciar assunto pesado se houver cansaço.

### 29/05 — Sexta — Status real após avanço acelerado

Concluído até aqui:

- aulas 1 a 15 marcadas como estudadas;
- Simulado 04 realizado com `24/30 (80%)`;
- revisão do Simulado 04 criada;
- lacuna de MUX 4:1 revisada e compreendida;
- dúvidas de temporização, frequência, carry/overflow e contadores revisadas.

Próxima ação curta:

- estudar a Aula 16;
- resolver pelo menos 1 síntese Mealy completa;
- resolver pelo menos 1 síntese Moore completa.

### 30/05 — Sábado — Aula 16: síntese de FSM

- Revisar o roteiro:
  - enunciado;
  - estados;
  - tabela;
  - codificação;
  - equações de próximo estado;
  - equações de saída;
  - implementação com flip-flops D.
- Refazer os exemplos:
  - detector `10` em Mealy;
  - detector `10` em Moore.

Prática:

- 2 FSMs completas;
- 10 questões curtas sobre `D=Q+`, Moore, Mealy e número de flip-flops.

### 31/05 — Domingo — Simulado menor e revisão

Simulado de `40` a `50` questões:

- aulas 1 a 16 se a Aula 16 for estudada até sábado;
- se a Aula 16 ainda estiver fraca, fazer simulado focado em aulas 10 a 16;
- foco maior em MUX, FSM, contadores e temporização.

Depois do simulado:

- salvar resultado;
- atualizar log;
- criar revisão dos erros;
- refazer as erradas principais.

Meta:

```text
80% geral; se FSM ou temporização ficar abaixo de 70%, revisar antes de avançar para aritmética digital/CMOS.
```

### 01/06 — Segunda — Aula 17: ponto fixo e ponto flutuante

- Ponto fixo.
- Escala e interpretação.
- Ponto flutuante em nível conceitual:
  - sinal;
  - expoente;
  - mantissa/significando;
  - normalização;
  - precisão e arredondamento.

Prática:

- 8 questões conceituais;
- 6 conversões simples;
- 4 questões de interpretação de erro/precisão.

### 02/06 — Terça — Aula 18: subtrator, comparador, shifter e ULA

- Subtração com complemento de 2.
- Half-subtractor e full-subtractor em nível conceitual.
- Comparador de magnitude.
- Shifter lógico e aritmético.
- ULA como bloco selecionado por sinais de controle.

Prática:

- 10 questões de subtração/comparação;
- 6 questões de shifter;
- 4 questões de seleção de operação da ULA.

### 03/06 — Quarta — Aula 19: somadores

- Half-adder.
- Full-adder.
- Ripple-carry adder.
- Carry-in e carry-out.
- Relação entre soma binária, carry e overflow.
- Ideia de carry look-ahead em nível conceitual.

Prática:

- 8 somas com half/full-adder;
- 6 questões sobre ripple-carry;
- 4 questões distinguindo carry e overflow.

### 04/06 — Quinta — Aula 20: física básica e transistores MOS

- Tensão.
- Corrente.
- Potência.
- Energia.
- Relações mínimas:

```text
P = V * I
E = P * t
```

- NMOS e PMOS como chaves.
- Inversor CMOS.
- Pull-up e pull-down.

Prática:

- 8 questões de tensão/corrente/potência;
- 6 questões conceituais de NMOS/PMOS.

### 05/06 — Sexta — Aula 21: CMOS combinacional

- Rede pull-up.
- Rede pull-down.
- NAND e NOR em CMOS em nível conceitual.
- Comportamento estático.
- Baixo consumo estático ideal.
- Relação com DeMorgan.

Prática:

- 10 questões conceituais;
- 4 desenhos simples de pull-up/pull-down;
- revisar DeMorgan aplicado a CMOS.

### 06/06 — Sábado — Reserva e fechamento de fundamentos

- Se Aula 16 ainda não estiver sólida, revisar síntese de FSM.
- Se somadores/ULA estiverem fracos, revisar Aula 19 e Aula 18.
- Atualizar Anki com os pontos que ainda travarem.

### 07/06 — Domingo — Simulado acumulativo

Simulado de `50` a `60` questões:

- fundamentos;
- combinacional;
- Karnaugh;
- blocos combinacionais;
- latches/flip-flops;
- contadores;
- temporização;
- FSM;
- somadores, subtrator, shifter, ULA e início de CMOS, se estudados.

Meta:

```text
80% geral e pelo menos 70% em FSM/temporização/aritmética digital.
```

---

## Fase 2 — Circuitos Digitais, Aritmética E Memórias
### 08/06 a 14/06

**Objetivo:** manter a continuidade natural depois de temporização e FSM, fechando aritmética digital, CMOS, hazards, memórias e lógica programável antes de voltar para assembly.

### 08/06 — Segunda — Aula 22: potência, atraso, caminho crítico físico e hazards

- Consumo dinâmico.
- Capacitância de carga em nível conceitual.
- Atraso de propagação.
- Caminho crítico físico.
- Glitch.
- Hazard estático-0.
- Hazard estático-1.
- Hazard dinâmico.
- Termo de consenso em nível de prova.

Também neste dia:

- consultar resultado preliminar das inscrições homologadas, conforme cronograma oficial.

### 09/06 — Terça — Aula 23: memórias

- Banco de registradores.
- ROM.
- SRAM.
- DRAM.
- Volatilidade.
- Velocidade.
- Densidade.
- Refresh.

### 10/06 — Quarta — Aula 24: lógica programável

- PROM.
- PLA.
- PAL.
- CPLD.
- FPGA:
  - LUT;
  - blocos lógicos;
  - interconexões programáveis.

### 11/06 — Quinta — Revisão de circuitos digitais

- Somadores.
- Subtrator.
- Comparador.
- Shifter.
- ULA.
- CMOS.
- Hazards.
- Memórias.
- Lógica programável.

### 12/06 — Sexta — Questões dirigidas de circuitos digitais

- 15 questões de aritmética digital.
- 10 questões de CMOS/hazards.
- 10 questões de memórias/lógica programável.
- Refazer erros no mesmo dia.

### 13/06 — Sábado — Reserva ou reforço

Se circuitos digitais estiver ok:

- leitura leve da Aula 25 já criada, sem cobrança pesada.

Se circuitos digitais estiver instável:

- reforçar os blocos com menos de 70%.

### 14/06 — Domingo — Simulado de circuitos digitais e fundamentos

Simulado de `50` a `60` questões:

- fundamentos e combinacional;
- sequencial/FSM;
- aritmética digital;
- CMOS;
- hazards;
- memórias;
- lógica programável.

Meta:

```text
80% geral; pelo menos 70% em circuitos digitais novos.
```

---

## Fase 3 — Arquitetura De Computadores
### 15/06 a 21/06

**Objetivo:** estudar assembly, formatos, modos de endereçamento, datapath e controle depois que as peças de hardware já estiverem mais familiares.

### 15/06 — Segunda — Aula 25: algoritmos procedurais, assembly básico e operandos

- Variáveis, atribuição, condição e laço.
- Leitura de pseudocódigo.
- Operandos:
  - registradores;
  - imediatos;
  - memória.
- `LOAD`, `STORE`, `ADD`, `ADDI`, `BEQ` e `J`.
- Labels, if/else e laços.

A Aula 25 já foi criada antecipadamente.

Também neste dia:

- confirmar inscrição, pois o prazo oficial termina em `15/06/2026`.

### 16/06 — Terça — Aula 26: formatos, tipos de instrução e modos de endereçamento

- Opcode.
- Registradores fonte/destino.
- Campo imediato.
- Formatos de instrução.
- Instruções:
  - aritméticas/lógicas;
  - condicionais;
  - desvios;
  - chamadas de função.
- Modos de endereçamento:
  - imediato;
  - registrador;
  - base + deslocamento;
  - relativo ao PC;
  - direto/indireto em nível conceitual.

Observação:

```text
O edital não fixa uma ISA específica. Usar exemplos tipo RISC/MIPS só como apoio.
```

### 17/06 — Quarta — Aula 27: datapath e controle

Fluxo principal:

```text
PC -> memória de instruções -> banco de registradores -> ULA -> memória/escrita
```

- PC.
- Memória de instruções.
- Banco de registradores.
- ULA.
- Memória de dados.
- MUX no datapath.
- Sinais de controle.
- Diferença entre datapath e unidade de controle.

Também neste dia:

- consultar resultado preliminar das inscrições homologadas, conforme cronograma oficial.

### 18/06 — Quinta — Revisão e questões de arquitetura

- 10 questões de assembly/operandos.
- 10 questões de formatos/modos.
- 10 questões de datapath/controle.
- Revisar erros no mesmo dia.

### 19/06 — Sexta — Simulado curto de arquitetura

Simulado de `30` a `40` questões:

- assembly;
- formatos;
- modos de endereçamento;
- datapath;
- controle.

Também neste dia:

- se necessário, prazo para recurso de inscrição não homologada: até `19/06/2026`.

### 20/06 — Sábado — Correção e integração

- Corrigir o simulado de arquitetura.
- Relacionar:
  - instruções com datapath;
  - ULA com instruções aritméticas;
  - memória com `LOAD`/`STORE`;
  - controle com FSM.
- Refazer questões erradas.

### 21/06 — Domingo — Simulado técnico acumulativo

Simulado de `60` questões no máximo:

- fundamentos e combinacional;
- sequencial/FSM;
- aritmética digital;
- CMOS, hazards, memórias e FPGA;
- arquitetura.

Meta:

```text
80% geral; idealmente 30/40 ou mais quando convertido para escala da prova.
```

---

## Fase 4 — Revisão e Reta Final
### 22/06 a 27/06

**Objetivo:** transformar erro em acerto, sem iniciar assuntos grandes.

### 22/06 — Segunda — Fechamento administrativo e correção dirigida

- Consultar resultado definitivo das inscrições homologadas.
- Corrigir profundamente o simulado de `21/06`.
- Para cada erro:
  - escrever por que errou;
  - escrever a regra correta;
  - resolver 2 ou 3 questões do mesmo tipo.

### 23/06 — Terça — Revisão 1: fundamentos e combinacional

- Binário, complemento de 2 e códigos.
- Portas, álgebra, DeMorgan e dualidade.
- Mintermos, maxtermos e Karnaugh.
- MUX, decoder, encoder e síntese lógica.

Prática:

- 25 a 30 questões;
- pelo menos 6 mapas de Karnaugh.

### 24/06 — Quarta — Revisão 2: sequencial e FSM

- Consulta obrigatória da lista de inscritos com local de prova.
- Confirmar prédio, sala, cidade e rota.
- Revisar:
  - latch/flip-flop;
  - setup, hold e propagação;
  - contadores;
  - Moore/Mealy;
  - síntese de FSM.

Prática:

- 25 questões;
- 1 FSM completa.

### 25/06 — Quinta — Revisão 3: arquitetura e circuitos digitais

- Caso o nome não apareça na lista do local de prova, contatar `falecom@nisa.ufsm.br` até este dia.
- Revisar:
  - assembly, modos, datapath e controle;
  - somadores, ULA, ponto fixo/flutuante;
  - CMOS, atraso, potência e hazards;
  - memórias, PLA/PAL/PROM, CPLD e FPGA.

Prática:

- 30 questões curtas;
- refazer cálculos de timing e atraso errados.

### 26/06 — Sexta — Simulado técnico final

- Resolver um simulado técnico de `40` questões em tempo controlado.
- Não consultar material durante a resolução.
- Corrigir imediatamente.
- Revisar somente erros de alto retorno.

Meta:

```text
30/40 ou mais; idealmente 34+.
```

### 27/06 — Sábado — Revisão leve e logística

Não iniciar teoria nova.

- Ler resumo final.
- Ler folha de erros.
- Refazer apenas 10 a 15 questões previamente erradas.
- Rever bullet points:
  - complemento de 2;
  - ASCII/Gray/checksum;
  - leis booleanas/DeMorgan;
  - Karnaugh;
  - tabelas de flip-flops;
  - timing;
  - Moore vs Mealy;
  - datapath;
  - SRAM/DRAM;
  - CPLD/FPGA.
- Separar documento original com foto e caneta preta.
- Conferir rota e horário.
- Dormir em horário adequado.

---

# 7. Checklist de Cobertura do Edital

## 7.1 Já estudado

- [x] Sistema binário, operações e conversão.
- [x] Complemento de 2, sinal, carry e overflow.
- [x] BCD, Gray, ASCII e checksum.
- [x] Portas lógicas.
- [x] Álgebra booleana.
- [x] DeMorgan e dualidade.
- [x] Implementação inicial com NAND/NOR.
- [x] Valores `H`, `L`, `Z` e `don't care`.
- [x] Mintermos, maxtermos, `SOP` e `POS`.
- [x] Karnaugh de 2 e 3 variáveis.
- [x] Karnaugh de 4 variáveis e `don't care`.
- [x] Síntese lógica completa.
- [x] MUX, DEMUX, decoder, encoder e blocos combinacionais.
- [x] Introdução a Moore e Mealy.
- [x] Estabilidade, latch SR e latch D.
- [x] Flip-flops e registradores.
- [x] Contadores.
- [x] Temporização sequencial.

## 7.2 Criado, mas ainda não registrado como estudado

- [ ] Síntese de FSM.
- [ ] Aula 18 — Subtrator, comparador, shifter e ULA.
- [ ] Aula 19 — Somadores: half-adder, full-adder, ripple-carry e carry look-ahead.
- [ ] Aula 20 — Física básica e transistores MOS.
- [ ] Aula 25 — Algoritmos procedurais, assembly básico e operandos.

## 7.3 Ainda pendente

- [ ] CMOS combinacional.
- [ ] Comportamentos estático, dinâmico e potência.
- [ ] Atrasos, caminho crítico, glitches e hazards.
- [ ] Memórias.
- [ ] PLA, PAL, PROM, CPLD e FPGA.
- [ ] Formatos de instrução, modos de endereçamento, datapath e controle.

---

# 8. Metas de Simulado

O edital exige no mínimo `20/40`, mas atingir apenas o mínimo não é uma meta competitiva para 12 vagas de ampla concorrência na UFCG.

## 8.1 Simulados concluídos

| Data | Avaliação | Resultado |
|---|---|---:|
| 25/05 | Simulado 01 — aulas 1 a 5 | `36/40 (90%)` |
| 26/05 | Simulado 02 — aulas 6 a 8 | `27/30 (90%)` |
| 26/05 | Simulado 03 — aulas 1 a 9, nível de prova | `73/90 (81%)` |
| 28/05 | Simulado 04 — aulas 9 a 13, nível de prova | `24/30 (80%)` |
| 01/06 | Simulado 05 — aulas 1 a 17, nível difícil | `44/50 (88%)` |

## 8.2 Próximos simulados

| Data | Avaliação | Tamanho | Meta |
|---|---|---:|---:|
| 31/05 | Aulas 1 a 16, se Aula 16 for estudada; senão foco 10 a 16 | `40` a `50` questões | `80%` |
| 07/06 | Fundamentos + aritmética digital/CMOS inicial, se houver | `50` a `60` questões | `80% geral`, `70%+` em FSM/temporização/aritmética |
| 14/06 | Circuitos digitais + fundamentos acumulados | `50` a `60` questões | `70%+` no bloco novo |
| 21/06 | Técnico acumulativo, incluindo arquitetura se estudada | até `60` questões | `80%` |
| 26/06 | Simulado técnico final | `40` questões | `30/40`, ideal `34+` |

## 8.3 Registro obrigatório de erros

| Data | Questão/assunto | Erro cometido | Regra correta | Refiz? |
|---|---|---|---|:---:|
|  |  |  |  |  |

---

# 9. Dia da Prova — 28/06/2026

## Horários oficiais

| Atividade | Horário |
|---|---:|
| Comparecer ao local / abertura dos portões | 13h30 |
| Fechamento dos portões | 14h |
| Início da prova | 14h |
| Término da prova | 18h |

## Levar

- [ ] Documento original com foto aceito pelo edital.
- [ ] Caneta esferográfica de tinta preta.
- [ ] Confirmação mental do prédio e sala consultados em `24/06`.

## Lembretes do edital

- Não é permitida entrada após o fechamento dos portões.
- A folha-resposta definitiva e o caderno devem ser entregues.
- Marcações indevidas, rasuras, dupla marcação ou caneta de outra cor podem anular respostas.
- Relógios e equipamentos eletrônicos devem ser guardados conforme orientação fiscal.

---

# 10. Material Produzido

## Aulas

```text
aulas/1-binarios_operacoes_sinal_complemento2.md
aulas/2-codigos_binarios_bcd_gray_ascii_checksum.md
aulas/3-portas_logicas_operacoes_booleanas.md
aulas/4-algebra_booleana_axiomas_leis_simplificacao.md
aulas/5-demorgan_dualidade_nand_nor_simplificacao.md
aulas/6-valores_logicos_formas_canonicas_mintermos_maxtermos.md
aulas/7-mapas_karnaugh_2_3_variaveis_minimizacao_sop.md
aulas/8-mapas_karnaugh_4_variaveis_dont_care.md
aulas/9-sintese_logica_completa_sop_pos_nand_nor.md
aulas/10-mux_demux_decoder_encoder_comparador_blocos_combinacionais.md
aulas/11-introducao_fsm_maquinas_estados_moore_mealy.md
aulas/12-estabilidade_latch_sr_latch_d.md
aulas/13-flip_flops_registradores.md
aulas/14-contadores_assincronos_sincronos_divisao_frequencia.md
aulas/15-temporizacao_sequencial_setup_hold_caminho_critico.md
aulas/16-sintese_maquinas_estados_fsm_flip_flops_d.md
aulas/17-ponto_fixo_ponto_flutuante.md
aulas/18-subtrator_comparador_shifter_ula.md
aulas/19-somadores_half_adder_full_adder_ripple_carry.md
aulas/20-fisica_basica_transistores_mos.md
aulas/25-algoritmos_procedurais_assembly_basico_operandos.md
```

## Simulados

```text
simulados/simulado_01_semana_1_aulas_1_a_5_40_questoes.html
simulados/simulado_02_aulas_6_a_8_30_questoes.html
simulados/simulado_03_aulas_1_a_9_nivel_prova_90_questoes.html
simulados/simulado_04_aulas_9_a_13_revisao_nivel_prova_30_questoes.html
simulados/simulado_05_aulas_1_a_17_nivel_dificil_50_questoes.html
simulados/simulado_06_aulas_1_a_17_nivel_prova_real_50_questoes.html
```

## Revisões e acompanhamento

```text
log_estudos_e_simulados.md
o_que_revisar.md
anki_flashcards_sistemas_digitais.txt
exercicios_facudades/
resultados_simulados/
resultados-simulado-02-2026-05-26/
resultados-simulado-03-2026-05-26/
resultados-simulado-04-2026-05-28/
```

---

# 11. Meta Final

A meta agora é chegar a `28/06/2026` com:

```text
todo o Anexo III técnico coberto;
pré-requisitos oficiais não esquecidos;
simulados menores, corrigidos com qualidade;
erros transformados em revisão ativa;
30/40 ou mais de forma consistente nos simulados finais.
```

O ponto central do plano atualizado é simples:

```text
continuar avançando, mas sem sacrificar retenção.
```
