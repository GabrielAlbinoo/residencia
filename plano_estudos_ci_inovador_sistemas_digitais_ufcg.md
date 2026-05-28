# Plano de Estudos Revisado — CI Brasil Inovação 2
## Trilha: Sistemas Digitais — UFCG

**Plano atualizado em:** 28/05/2026, quinta-feira  
**Período restante de estudo:** 28/05/2026 a 27/06/2026  
**Prova objetiva:** 28/06/2026, domingo, das 14h às 18h  
**Foco deste plano:** conteúdo técnico de Sistemas Digitais  
**Situação atual:** aulas `1` a `12` estudadas; aula `13` já criada, mas ainda não registrada como estudada.

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

# 3. Progresso Real Até 28/05

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

## 3.2 Aulas já criadas, mas ainda não registradas como estudadas

| Aula | Conteúdo | Próxima ação |
|---|---|---|
| Aula 13 | Flip-flops e registradores | Estudar e fazer exercícios curtos |

## 3.3 Simulados já realizados

| Data | Simulado | Resultado | Observação |
|---|---|---:|---|
| 25/05/2026 | Simulado 01 — Semana 1 | `36/40 (90%)` | Base inicial forte |
| 26/05/2026 | Simulado 02 — Aulas 6 a 8 | `27/30 (90%)` | Karnaugh bom, com ajustes em POS/zeros |
| 26/05/2026 | Simulado 03 — Aulas 1 a 9, nível de prova | `73/90 (81%)` | Bom diagnóstico, mas cansativo demais |

## 3.4 Diagnóstico atual

Pontos fortes:

- sistemas numéricos básicos;
- portas lógicas;
- álgebra booleana inicial;
- DeMorgan, dualidade, NAND e NOR;
- mintermos, maxtermos e formas canônicas;
- mapas de Karnaugh, principalmente lendo pelos `1`;
- síntese combinacional básica.

Pontos que ainda merecem revisão ativa:

- diferença entre `carry` e `overflow`;
- extensão de sinal em complemento de 2;
- ASCII em hexadecimal;
- checksum módulo 256;
- maxtermos e leitura POS por zeros;
- XOR/XNOR com três ou mais entradas;
- simplificação algébrica em POS;
- implementação NAND/NOR quando a expressão vem de mapa;
- `don't care` em síntese.

---

# 4. Status de Matemática e Fundamentos

## 4.1 O que já está fechado

A parte combinacional está praticamente concluída:

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

## 4.2 O que ainda falta para fechar Matemática/Fundamentos

A parte que ainda impede marcar Matemática/Fundamentos como 100% concluída é:

- síntese de máquinas de estados.

A Aula 11 já cobre a diferença conceitual entre Moore e Mealy, mas ainda falta treinar o procedimento operacional:

```text
enunciado -> diagrama de estados -> tabela de estados -> codificação dos estados
-> equações de próximo estado e saída -> implementação com flip-flops
```

Resumo do status:

| Área | Status |
|---|---|
| Combinacional | Concluída |
| FSM conceitual | Iniciada |
| Síntese de FSM | Pendente |

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

### 29/05 — Sexta — Revisão curta da Aula 12 e avanço leve

- Refazer pontos que ainda confundirem:
  - `S` do latch SR com NOR atua primeiro em `Q'`;
  - `R` atua primeiro em `Q`;
  - `S=0,R=0` mantém;
  - `S=1,R=1` é inválido.
- Se estiver confortável, iniciar Aula 13.

Prática:

- 10 questões curtas de latch SR/D;
- 3 exercícios de completar tabela de saída.

### 30/05 — Sábado — Aula 13: flip-flops e registradores

- Diferença entre latch e flip-flop.
- Flip-flop sensível à borda.
- Flip-flop D como base para FSM.
- JK e T em nível de prova.
- Registradores e habilitação.

Prática:

- 10 questões curtas;
- 3 exercícios lendo bordas de clock.

### 31/05 — Domingo — Simulado menor e revisão

Simulado de `40` a `50` questões:

- aulas 1 a 13;
- foco maior em aulas 10 a 13;
- sem tentar forçar um simulado gigante.

Depois do simulado:

- salvar resultado;
- atualizar log;
- criar revisão dos erros;
- refazer as erradas principais.

Meta:

```text
80% geral; se algum bloco ficar abaixo de 70%, revisar antes de avançar.
```

### 01/06 — Segunda — Contadores

- Contadores assíncronos e síncronos.
- Contagem crescente/decrescente em nível conceitual.
- Divisão de frequência.
- Número de estados com `n` flip-flops.

Prática:

- 8 questões sobre número de estados;
- 4 questões de sequência de contagem.

### 02/06 — Terça — Temporização sequencial

- `setup time`;
- `hold time`;
- `clock-to-Q`;
- atraso combinacional;
- caminho crítico;
- frequência máxima.

Fórmula central:

```text
Tclock mínimo >= Tclk-to-Q + Tcombinacional + Tsetup
Fmax = 1 / Tclock mínimo
```

Prática:

- 10 cálculos de `Tclock`/`Fmax`;
- identificar violações de setup e hold.

### 03/06 — Quarta — FSM Moore e Mealy aplicada

- Ler diagramas de estado.
- Converter diagrama em tabela.
- Comparar Moore e Mealy em questões.
- Detectores simples de sequência.

Prática:

- 2 diagramas de Moore;
- 2 diagramas de Mealy;
- 10 questões conceituais.

### 04/06 — Quinta — Síntese de FSM

- Extrair tabela de estados do enunciado.
- Codificar estados.
- Obter equações de próximo estado.
- Obter equações de saída.
- Implementar com flip-flops D.

Prática:

- 1 FSM Moore completa;
- 1 FSM Mealy completa;
- revisar erros logo depois.

### 05/06 — Sexta — Revisão de fechamento de Matemática/Fundamentos

- Revisar:
  - Karnaugh;
  - síntese combinacional;
  - MUX/decoder/encoder;
  - Moore/Mealy;
  - síntese de FSM.
- Atualizar Anki com os pontos que ainda travarem.

### 06/06 — Sábado — Dia reserva ou início leve de arquitetura

Se sequencial/FSM estiver ok:

- começar arquitetura de computadores de forma leve.

Se sequencial/FSM ainda estiver instável:

- usar o dia para revisar FSM e temporização.

### 07/06 — Domingo — Simulado acumulativo

Simulado de `50` a `60` questões:

- fundamentos;
- combinacional;
- Karnaugh;
- blocos combinacionais;
- latches/flip-flops;
- temporização;
- FSM.

Meta:

```text
80% geral e pelo menos 70% em sequencial/FSM.
```

---

## Fase 2 — Arquitetura e Aritmética Digital
### 08/06 a 14/06

**Objetivo:** cobrir arquitetura de computadores e unidades aritméticas digitais.

### 08/06 — Segunda — Algoritmos procedurais e assembly básico

- Variáveis, atribuição, condição e laço.
- Leitura de pseudocódigo.
- Operandos em assembly:
  - registradores;
  - imediatos;
  - memória.
- Instruções aritméticas e lógicas.

### 09/06 — Terça — Formatos e tipos de instrução

- Opcode.
- Registradores fonte/destino.
- Imediatos.
- Instruções:
  - aritméticas/lógicas;
  - condicionais;
  - desvios;
  - chamadas de função.

Observação:

```text
O edital não fixa uma ISA específica. Usar exemplos tipo RISC/MIPS só como apoio.
```

### 10/06 — Quarta — Modos de endereçamento

- Imediato.
- Por registrador.
- Base + deslocamento.
- Relativo ao PC.
- Direto/indireto em nível conceitual.

### 11/06 — Quinta — Datapath e controle

Fluxo principal:

```text
PC -> memória de instruções -> banco de registradores -> ULA -> memória/escrita
```

- Sinais de controle.
- Seleção por MUX.
- Diferença entre datapath e unidade de controle.

### 12/06 — Sexta — Somadores e subtrator

- Half-adder.
- Full-adder.
- Ripple-carry.
- Carry look-ahead em nível conceitual.
- Subtração com complemento de 2.

### 13/06 — Sábado — ULA, shifter, comparador e representação numérica

- ULA e seleção de operação.
- Comparador.
- Shifts lógicos e aritméticos.
- Ponto fixo.
- Ponto flutuante:
  - sinal;
  - expoente;
  - mantissa/significando;
  - precisão e arredondamento em nível conceitual.

### 14/06 — Domingo — Simulado de arquitetura e aritmética

Simulado de `50` a `60` questões:

- assembly;
- formatos e modos;
- datapath e controle;
- somadores, ULA e representação numérica;
- revisão cumulativa curta de lógica.

Meta:

```text
70% ou mais em arquitetura/aritmética.
```

---

## Fase 3 — Circuitos Digitais, CMOS, Memórias e Lógica Programável
### 15/06 a 21/06

**Objetivo:** concluir os tópicos oficiais restantes.

### 15/06 — Segunda — Física básica e transistores MOS

- Tensão.
- Corrente.
- Potência.
- Energia.

Relações mínimas:

```text
P = V * I
E = P * t
```

- NMOS e PMOS como chaves.
- Inversor CMOS.
- Pull-up e pull-down.

Também neste dia:

- confirmar inscrição, pois o prazo oficial termina em `15/06/2026`.

### 16/06 — Terça — CMOS combinacional

- Rede pull-up.
- Rede pull-down.
- NAND/NOR em CMOS em nível conceitual.
- Comportamento estático.
- Baixo consumo estático ideal.

### 17/06 — Quarta — Potência, atraso e caminho crítico

- Capacitância de carga em nível conceitual.
- Consumo dinâmico.
- Atraso de propagação.
- Caminho crítico.
- Relação com frequência máxima.

Também neste dia:

- consultar resultado preliminar das inscrições homologadas, conforme cronograma oficial.

### 18/06 — Quinta — Glitches e hazards

- Glitch.
- Hazard estático-0.
- Hazard estático-1.
- Hazard dinâmico.
- Atrasos diferentes em caminhos lógicos.
- Termo de consenso em nível de prova.

### 19/06 — Sexta — Memórias

- Banco de registradores.
- ROM.
- SRAM.
- DRAM.
- Volatilidade, velocidade, densidade e refresh.

Também neste dia:

- se necessário, prazo para recurso de inscrição não homologada: até `19/06/2026`.

### 20/06 — Sábado — Lógica programável

- PROM.
- PLA.
- PAL.
- CPLD.
- FPGA:
  - LUT;
  - blocos lógicos;
  - interconexões programáveis.

### 21/06 — Domingo — Simulado técnico acumulativo

Simulado de `60` questões no máximo:

- fundamentos e combinacional;
- sequencial/FSM;
- arquitetura e aritmética;
- CMOS, memória e FPGA.

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

## 7.2 Criado, mas ainda não registrado como estudado

- [ ] Flip-flops e registradores.

## 7.3 Ainda pendente

- [ ] Contadores.
- [ ] Temporização sequencial.
- [ ] Síntese de FSM.
- [ ] Algoritmos/procedural em nível de pré-requisito.
- [ ] Assembly, formatos, tipos, endereçamento, datapath e controle.
- [ ] Somadores, subtrator, comparador, shifter e ULA.
- [ ] Ponto fixo e ponto flutuante.
- [ ] Tensão, corrente, potência e energia em nível de pré-requisito.
- [ ] CMOS combinacional.
- [ ] Comportamentos estático, dinâmico e potência.
- [ ] Atrasos, caminho crítico, glitches e hazards.
- [ ] Memórias.
- [ ] PLA, PAL, PROM, CPLD e FPGA.

---

# 8. Metas de Simulado

O edital exige no mínimo `20/40`, mas atingir apenas o mínimo não é uma meta competitiva para 12 vagas de ampla concorrência na UFCG.

## 8.1 Simulados concluídos

| Data | Avaliação | Resultado |
|---|---|---:|
| 25/05 | Simulado 01 — aulas 1 a 5 | `36/40 (90%)` |
| 26/05 | Simulado 02 — aulas 6 a 8 | `27/30 (90%)` |
| 26/05 | Simulado 03 — aulas 1 a 9, nível de prova | `73/90 (81%)` |

## 8.2 Próximos simulados

| Data | Avaliação | Tamanho | Meta |
|---|---|---:|---:|
| 31/05 | Aulas 1 a 13 | `40` a `50` questões | `80%` |
| 07/06 | Fundamentos + sequencial/FSM | `50` a `60` questões | `80% geral`, `70%+` em sequencial |
| 14/06 | Arquitetura + aritmética | `50` a `60` questões | `70%+` no bloco novo |
| 21/06 | Técnico acumulativo | até `60` questões | `80%` |
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
```

## Simulados

```text
simulados/simulado_01_semana_1_aulas_1_a_5_40_questoes.html
simulados/simulado_02_aulas_6_a_8_30_questoes.html
simulados/simulado_03_aulas_1_a_9_nivel_prova_90_questoes.html
```

## Revisões e acompanhamento

```text
log_estudos_e_simulados.md
o_que_revisar.md
anki_flashcards_sistemas_digitais.txt
resultados_simulados/
resultados-simulado-02-2026-05-26/
resultados-simulado-03-2026-05-26/
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
