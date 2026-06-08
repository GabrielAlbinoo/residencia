# Plano de Estudos Atualizado - CI Inovador 2026
## Trilha: Sistemas Digitais - UFCG

**Plano atualizado em:** 08/06/2026, segunda-feira  
**Periodo restante de estudo:** 08/06/2026 a 27/06/2026  
**Prova objetiva:** 28/06/2026, domingo, das 14h as 18h  
**Foco deste plano:** fechar o edital tecnico e transformar erro em acerto  
**Situacao atual:** aulas `1` a `24` estudadas; faltam `25`, `26` e `27`

---

# 1. Leitura rapida do edital

Fonte-base usada neste plano:

```text
Edital-de-Selecao-CI-Inovador-2026.docx.pdf
```

## 1.1 Informacoes centrais

| Item | Informacao |
|---|---|
| Trilha escolhida | Sistemas Digitais |
| Polo de interesse | UFCG - Campina Grande/PB |
| Prova | 40 questoes objetivas de Conhecimento Tecnico e Ingles |
| Data e horario | 28/06/2026, das 14h as 18h |
| Duracao | 4 horas |
| Pontuacao minima | 20 pontos |
| Eliminacao adicional | Zerar uma ou mais disciplinas |
| Consulta obrigatoria ao local de prova | 24/06/2026 |

## 1.2 Regra pratica para este momento

O objetivo agora nao e mais "produzir material". O objetivo e:

```text
fechar 25 a 27
revisar o que mais erra
fazer simulados menores e corrigi-los bem
chegar inteiro na ultima semana
```

---

# 2. Cobertura do edital

## 2.1 Matematica e Fundamentos da Computacao

- sistema numerico binario, operacoes aritmeticas e conversao para decimal;
- codigos binarios: BCD, Gray, ASCII, checksum;
- portas logicas e avaliacao de expressoes;
- algebra booleana;
- DeMorgan e dualidade;
- valores logicos `H`, `L`, `Z` e `don't care`;
- combinacao de portas logicas;
- minimizacao logica, mintermos e maxtermos;
- mapas de Karnaugh;
- sintese de circuito logico;
- maquinas de estados Moore e Mealy;
- sintese de maquinas de estados.

## 2.2 Arquitetura de Computadores

- operandos em instrucoes assembly;
- formatos de instrucoes;
- instrucoes aritmeticas/logicas, condicionais e desvios;
- modos de enderecamento;
- implementacao da microarquitetura: datapath e controle.

## 2.3 Circuitos Digitais

- logica CMOS combinacional;
- MOS `p` e `n` como chaves;
- comportamento estatico e dinamico;
- consumo de potencia;
- atraso de propagacao e caminho critico;
- glitches e hazards;
- latches e flip-flops;
- setup, hold e propagacao;
- somadores;
- subtrator, comparador, shifter e ULA;
- contadores;
- ponto fixo e flutuante;
- memorias;
- PROM, PLA, PAL;
- CPLD e FPGA.

---

# 3. Progresso real em 08/06

## 3.1 Aulas estudadas

| Faixa | Status |
|---|---|
| Aulas 1 a 9 | Estudadas |
| Aulas 10 a 16 | Estudadas |
| Aulas 17 a 19 | Estudadas |
| Aulas 20 a 22 | Estudadas |
| Aulas 23 a 24 | Estudadas |

## 3.2 Aulas ainda pendentes

| Aula | Conteudo | Foco do estudo |
|---|---|---|
| Aula 25 | Algoritmos procedurais, assembly basico e operandos | Ler instrucoes, registradores, imediatos, LOAD/STORE, desvios |
| Aula 26 | Formatos, tipos de instrucao e modos de enderecamento | Opcode, campos, registradores, imediato, base+deslocamento, PC-relative |
| Aula 27 | Datapath e controle | PC, banco de registradores, ULA, memoria, MUX e sinais de controle |

## 3.3 Simulados ja realizados

| Data | Simulado | Resultado | Observacao |
|---|---|---:|---|
| 25/05/2026 | Simulado 01 - Semana 1 | `36/40 (90%)` | Base inicial forte |
| 26/05/2026 | Simulado 02 - Aulas 6 a 8 | `27/30 (90%)` | Karnaugh bom |
| 26/05/2026 | Simulado 03 - Aulas 1 a 9 | `73/90 (81%)` | Bom, mas longo demais |
| 28/05/2026 | Simulado 04 - Aulas 9 a 13 | `24/30 (80%)` | MUX/FSM renderam bem |
| 01/06/2026 | Simulado 05 - Aulas 1 a 17 | `44/50 (88%)` | Resultado forte |
| 02/06/2026 | Simulado 06 - Aulas 1 a 17 | `44/50 (88%)` | Nivel prova real |

## 3.4 Diagnostico honesto

Pontos fortes agora:

- base de binario, complemento de 2 e conversoes;
- portas logicas, algebra booleana e DeMorgan;
- Karnaugh e sintese combinacional;
- FFs, registradores, contadores e temporizacao;
- somadores, subtrator, comparador, shifter e ULA;
- base conceitual de MOS, CMOS, memorias e logica programavel.

Pontos que ainda merecem revisao ativa:

- carry vs overflow;
- POS/maxtermos e leitura por zeros;
- sintese de FSM com `D = Q+`;
- setup vs hold;
- glitch vs hazard vs consenso;
- SRAM vs DRAM;
- PROM vs PLA vs PAL;
- assembly/datapath, que ainda nao fecharam.

---

# 4. Regra de ritmo daqui para frente

## 4.1 Estrutura diaria recomendada

```text
30 min de Anki
60 a 90 min de teoria nova ou revisao guiada
45 a 90 min de questoes/simulado/correcao
```

## 4.2 Regras que valem ouro

- nao criar dezenas de cards novos por dia;
- adicionar card novo so quando nascer de erro real;
- corrigir simulado no mesmo dia ou no dia seguinte;
- se travar muito em um assunto, revisar o resumo detalhado e voltar para a questao;
- manter simulados entre `40` e `60` questoes na maior parte do tempo.

## 4.3 Prioridade de revisao

```text
1) erro de simulado
2) formula
3) questao de resolucao
4) pegadinha recorrente
5) definicao pura
```

---

# 5. O que ja esta fechado no edital

## 5.1 Blocos tecnicos ja estudados

- sistemas numericos e codigos;
- combinacional completa;
- FSM, latches, FFs, registradores e contadores;
- temporizacao sequencial;
- ponto fixo e flutuante;
- somadores e aritmetica digital basica;
- ULA;
- MOS e CMOS;
- potencia, atraso e hazards;
- memorias;
- logica programavel.

## 5.2 O que falta para encerrar o conteudo

```text
Aula 25
Aula 26
Aula 27
```

Conclusao pratica:

```text
nao vale pausar tudo para revisao pesada agora
vale fechar 25 a 27 rapido e revisar os erros em paralelo
```

---

# 6. Cronograma atual - 08/06 a 27/06

## Fase 1 - Fechar o conteudo restante
### 08/06 a 12/06

**Objetivo:** concluir aulas 25 a 27 sem abandonar revisao do que ja foi visto ate a 24.

### 08/06 - Segunda - consolidacao de 22 a 24

- revisar resumo detalhado das aulas 20 a 24;
- revisar diferencas:
  - glitch vs hazard;
  - SRAM vs DRAM;
  - PROM vs PLA vs PAL;
  - CPLD vs FPGA;
- anotar no `o_que_revisar.md` o que ainda estiver meio frouxo;
- Anki normal de 30 min.

### 09/06 - Terca - Aula 25

- assembly basico;
- operandos;
- registrador vs memoria;
- imediato;
- `LOAD`, `STORE`, `ADD`, `ADDI`, `BEQ`, `J`;
- loops e desvios em nivel conceitual.

Pratica:

- 10 a 15 questoes curtas;
- traduzir 5 instrucoes entre frase e assembly simples.

### 10/06 - Quarta - Aula 26

- formato de instrucao;
- opcode;
- registradores fonte e destino;
- campo imediato;
- modos de enderecamento;
- base + deslocamento;
- PC-relative.

Pratica:

- 10 a 15 questoes;
- identificar tipo de operando e endereco efetivo.

### 11/06 - Quinta - Aula 27

- datapath;
- PC;
- memoria de instrucoes;
- banco de registradores;
- ULA;
- memoria de dados;
- MUX;
- sinais `RegWrite`, `MemRead`, `MemWrite`, `ALUSrc`, `MemToReg`.

Pratica:

- rastrear `ADD`, `LOAD`, `STORE` e `BEQ`;
- fazer 8 a 12 questoes de fluxo de execucao.

### 12/06 - Sexta - Fechamento do bloco 25 a 27

- revisar as tres aulas em conjunto;
- ligar:
  - assembly -> formato;
  - formato -> modos;
  - modos -> datapath;
  - datapath -> sinais de controle.

Pratica:

- bloco misto curto de 20 a 25 questoes;
- refazer o que errar no mesmo dia.

---

## Fase 2 - Integracao forte e simulados
### 13/06 a 21/06

**Objetivo:** integrar arquitetura com o resto do edital e comecar a fase mais forte de simulados e revisao por erro.

### 13/06 - Sabado - Simulado 09

Usar:

```text
simulado_09_aulas_13_18_a_24_revisao_completa_60_questoes.html
```

Foco:

- FFs e registradores;
- aritmetica digital;
- CMOS;
- potencia/atraso/hazard;
- memorias.

### 14/06 - Domingo - Simulado 10

Usar:

```text
simulado_10_geral_aulas_1_a_24_nivel_prova_60_questoes.html
```

Meta:

```text
80% geral
```

Depois:

- corrigir no mesmo dia ou no maximo no dia seguinte;
- transformar erros importantes em revisao ativa.

### 15/06 - Segunda - Correcao profunda

- revisar os erros dos simulados 09 e 10;
- separar erros por bloco:
  - combinacional;
  - sequencial;
  - aritmetica;
  - CMOS;
  - memorias/PLD.

### 16/06 - Terca - Arquitetura aplicada

- bloco de revisao de 25 a 27;
- focar em:
  - `R1` vs `[R1]`;
  - imediato vs memoria;
  - endereco efetivo;
  - fluxo de `LOAD` e `STORE`;
  - papel do `PC`.

### 17/06 - Quarta - Questoes dirigidas mistas

- 10 questoes de assembly/datapath;
- 10 questoes de temporizacao/FSM;
- 10 questoes de CMOS/memorias/PLD.

### 18/06 - Quinta - Mini simulado de arquitetura

- fazer um bloco de `30` a `40` questoes curtas de arquitetura e integracao;
- se nao houver simulado pronto, montar a sessao com exercicios, resumos e cards.

Meta:

```text
70%+ ja e bom
```

### 19/06 - Sexta - Correcao e revisao de erro

- corrigir o mini simulado;
- revisar os 5 erros mais repetidos;
- criar no maximo 5 cards novos, so se forem erros reais.

### 20/06 - Sabado - Revisao dos pontos mais instaveis

Escolher so os blocos mais fracos:

- FSM/sintese;
- timing;
- carry/overflow;
- hazard/consenso;
- PROM/PLA/PAL;
- datapath/controle.

### 21/06 - Domingo - Simulado tecnico acumulativo

- fazer um simulado tecnico de ate `60` questoes;
- misturar 1 a 27;
- controlar tempo;
- nao consultar material.

Meta:

```text
80% geral
ou pelo menos 30/40 em conversao para escala da prova
```

---

## Fase 3 - Reta final
### 22/06 a 27/06

**Objetivo:** revisar por erro, nao por ansiedade.

### 22/06 - Segunda - Revisao de fundamentos

- binario, complemento de 2 e codigos;
- algebra booleana e DeMorgan;
- SOP, POS, mintermos, maxtermos;
- Karnaugh e sintese.

Pratica:

- 20 a 25 questoes;
- pelo menos 4 mapas.

### 23/06 - Terca - Revisao de sequencial

- latch, FF, registrador;
- contador;
- setup, hold e caminho critico;
- Moore, Mealy e sintese de FSM.

Pratica:

- 20 a 25 questoes;
- 1 FSM completa.

### 24/06 - Quarta - Revisao de circuitos digitais

- somadores, subtracao, comparador, shifter, ULA;
- MOS, CMOS, potencia, atraso, hazard;
- memorias e PLDs;
- consultar local de prova.

### 25/06 - Quinta - Revisao de arquitetura

- assembly;
- formatos;
- modos de enderecamento;
- datapath;
- sinais de controle.

Pratica:

- 20 a 30 questoes curtas;
- refazer `LOAD`, `STORE`, `ADD`, `BEQ`.

### 26/06 - Sexta - Simulado final

- simulado tecnico final de `40` questoes;
- tempo controlado;
- correcao imediata;
- revisar so os erros de maior retorno.

Meta:

```text
30/40 ou mais
ideal 34+
```

### 27/06 - Sabado - Revisao leve e logistica

- nao iniciar teoria nova;
- ler resumo final;
- ler folha de erros;
- refazer 10 a 15 questoes que voce ja errou antes;
- separar documento e caneta;
- revisar rota e horario;
- dormir direito.

---

# 7. Checklist de cobertura do edital

## 7.1 Ja estudado

- [x] Sistema binario, operacoes e conversao
- [x] Complemento de 2, sinal, carry e overflow
- [x] BCD, Gray, ASCII e checksum
- [x] Portas logicas
- [x] Algebra booleana
- [x] DeMorgan e dualidade
- [x] Mintermos, maxtermos, SOP e POS
- [x] Karnaugh
- [x] Sintese logica
- [x] MUX, DEMUX, decoder, encoder e comparador
- [x] Moore e Mealy
- [x] Latches e flip-flops
- [x] Registradores e contadores
- [x] Temporizacao sequencial
- [x] Sintese de FSM
- [x] Ponto fixo e ponto flutuante
- [x] Somadores
- [x] Subtrator, comparador, shifter e ULA
- [x] MOS e CMOS
- [x] Potencia, atraso, glitches e hazards
- [x] Memorias: banco de registradores, ROM, SRAM e DRAM
- [x] PROM, PLA, PAL, CPLD e FPGA

## 7.2 Pendente de fechar

- [ ] Aula 25 - Assembly basico e operandos
- [ ] Aula 26 - Formatos e modos de enderecamento
- [ ] Aula 27 - Datapath e controle

## 7.3 Pendente de consolidar

- [ ] Revisao final integrada
- [ ] Simulados finais corrigidos

---

# 8. Simulados e materiais mais uteis agora

## 8.1 Simulados prontos

```text
simulados/simulado_08_moore_mealy_fsm_20_questoes_dificeis.html
simulados/simulado_09_aulas_13_18_a_24_revisao_completa_60_questoes.html
simulados/simulado_10_geral_aulas_1_a_24_nivel_prova_60_questoes.html
```

## 8.2 Materiais de revisao

```text
revisao_essencial_aulas_1_a_25.md
resumos/resumo_estudos_aulas_1_a_24.md
o_que_revisar.md
anki_flashcards_sistemas_digitais.txt
log_estudos_e_simulados.md
```

## 8.3 Regra de simulados

- simulado grande so quando der para corrigir bem;
- erro sem revisao vale pouco;
- questao chutada conta como quase erro e merece revisao.

---

# 9. Dia da prova - 28/06/2026

## Horarios

| Atividade | Horario |
|---|---:|
| Comparecer ao local | 13h30 |
| Fechamento dos portoes | 14h |
| Inicio da prova | 14h |
| Termino da prova | 18h |

## Levar

- [ ] Documento original com foto
- [ ] Caneta esferografica preta
- [ ] Confirmacao do local consultado em 24/06

## Ultimo lembrete

```text
na reta final, melhorar erro recorrente vale mais do que abrir assunto novo
```

---

# 10. Meta final

A meta para 28/06 e chegar com:

```text
edital tecnico inteiro coberto
aulas 25 a 27 fechadas
erros principais mapeados
simulados menores e bem corrigidos
30/40 ou mais como alvo consistente
```

Resumo da estrategia:

```text
fechar 25-27 rapido
revisar erro em paralelo
simular
corrigir
reforcar o que realmente cai
```
