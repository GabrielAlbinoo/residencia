# Plano de Estudos — CI Brasil Inovação 2
## Trilha: Sistemas Digitais — UFCG

**Período:** 22/05/2026 a 27/06/2026  
**Prova:** 28/06/2026, domingo, das 14h às 18h  
**Foco:** Conhecimento técnico da trilha de Sistemas Digitais  
**Inglês:** manutenção leve, sem foco principal

---

## 1. Base do plano

A prova tem **40 questões objetivas** de **Conhecimento Técnico e Inglês**.

O edital prevê:
- prova presencial;
- duração de 4 horas;
- pontuação final igual ao número de acertos;
- nota mínima de 20 pontos;
- eliminação se zerar uma ou mais disciplinas da prova.

Como você já consome bastante conteúdo em inglês, o plano trata inglês apenas como manutenção para evitar perda de pontos fáceis ou risco de zerar a disciplina.

---

## 2. Estratégia geral

Você tem **37 dias reais de estudo**, contando de 22/05 até 27/06.

A estratégia será:

1. Cobrir todo o conteúdo técnico pelo menos uma vez.
2. Priorizar os assuntos mais prováveis e mais conectados entre si.
3. Fazer revisão ativa toda semana.
4. Reservar os últimos dois dias para simulado e revisão leve.
5. Estudar inglês de forma indireta, usando textos técnicos da própria área.

---

## 3. Prioridade dos assuntos

| Prioridade | Assunto | Motivo |
|---|---|---|
| Altíssima | Álgebra booleana, Karnaugh, portas, MUX, decoder e FSM | Base de quase toda lógica digital |
| Alta | Flip-flops, temporização, contadores e circuitos sequenciais | Muito provável em prova de digitais |
| Alta | Arquitetura: assembly, instruções, datapath e controle | Bloco próprio no edital |
| Média-alta | Somadores, ULA e representação numérica | Conecta digitais e arquitetura |
| Média | CMOS, atraso, potência e hazards | Mais específico, mas está no edital |
| Média | Memórias, PLA, PAL, PROM, CPLD e FPGA | Pode aparecer de forma conceitual |
| Baixa-moderada | Inglês | Manutenção, não foco principal |

---

## 4. Rotina diária recomendada

### Segunda a sexta

Estudar entre **2h e 3h por dia**.

Sugestão:

| Bloco | Tempo | Atividade |
|---|---:|---|
| Revisão curta | 20 min | Rever erros e conceitos do dia anterior |
| Teoria | 1h20 a 1h40 | Estudar o assunto principal do dia |
| Exercícios | 40 min a 1h | Resolver questões e problemas |
| Registro de erros | 10 min | Anotar o que errou e por quê |

### Sábado

Estudar entre **3h e 5h**.

Foco:
- listas maiores;
- revisão acumulada;
- simulados parciais.

### Domingo

Estudar entre **2h e 4h**.

Foco:
- revisar erros;
- simulado curto;
- leitura leve em inglês técnico.

---

# 5. Cronograma completo

---

## Semana 1 — 22/05 a 28/05
### Tema: Fundamentos de lógica digital e sistemas numéricos

**Objetivo:** dominar a base da prova.

### 22/05 — Sexta
- Ler o conteúdo programático da trilha digital.
- Montar checklist dos tópicos.
- Revisar:
  - binário;
  - decimal;
  - hexadecimal;
  - conversão entre bases;
  - soma e subtração binária;
  - complemento de 2.

### 23/05 — Sábado
- Sistemas numéricos:
  - binário;
  - hexadecimal;
  - complemento de 1;
  - complemento de 2;
  - overflow;
  - representação com sinal e sem sinal.
- Exercícios:
  - 20 conversões;
  - 10 somas/subtrações binárias;
  - 10 questões de overflow/complemento de 2.

### 24/05 — Domingo
- Códigos binários:
  - BCD;
  - Gray;
  - ASCII;
  - checksum em nível conceitual.
- Exercícios:
  - converter binário para Gray;
  - converter Gray para binário;
  - reconhecer ASCII;
  - entender checksum de forma geral.

### 25/05 — Segunda
- Portas lógicas:
  - NOT;
  - AND;
  - OR;
  - NAND;
  - NOR;
  - XOR;
  - XNOR.
- Construir tabelas-verdade.
- Ver equivalências entre portas.

### 26/05 — Terça
- Álgebra booleana:
  - axiomas;
  - identidade;
  - complemento;
  - absorção;
  - distributiva;
  - associativa;
  - comutativa.

### 27/05 — Quarta
- Teorema de DeMorgan.
- Dualidade.
- Transformação de expressões:
  - implementação com NAND;
  - implementação com NOR;
  - simplificação algébrica.

### 28/05 — Quinta
- Revisão da semana.
- Mini-simulado:
  - 20 questões misturando bases, portas, álgebra booleana e DeMorgan.
- Meta:
  - pelo menos 70% de acerto.

---

## Semana 2 — 29/05 a 04/06
### Tema: Circuitos combinacionais, Karnaugh e síntese lógica

**Objetivo:** conseguir sair de tabela-verdade para expressão e circuito.

### 29/05 — Sexta
- Mintermos.
- Maxtermos.
- Soma de produtos.
- Produto de somas.
- Como sair de tabela-verdade para equação lógica.

### 30/05 — Sábado
- Mapas de Karnaugh:
  - 2 variáveis;
  - 3 variáveis;
  - 4 variáveis.
- Agrupamentos:
  - pares;
  - quartetos;
  - oitavas;
  - bordas conectadas.

### 31/05 — Domingo
- Karnaugh com `don't care`.
- Valores:
  - H;
  - L;
  - Z;
  - X / don't care.
- Exercícios intensivos de mapa de Karnaugh.

### 01/06 — Segunda
- Síntese de circuito lógico:
  - equação para portas;
  - tabela para Karnaugh;
  - Karnaugh para equação;
  - equação para circuito.
- Implementação usando NAND e NOR.

### 02/06 — Terça
- Blocos combinacionais:
  - multiplexador;
  - demultiplexador;
  - codificador;
  - decodificador.

### 03/06 — Quarta
- Composição de circuitos:
  - usar MUX para implementar função lógica;
  - usar decoder com portas;
  - comparadores simples.

### 04/06 — Quinta
- Simulado parcial:
  - 25 questões de lógica combinacional.
- Corrigir erros.
- Refazer todos os mapas de Karnaugh que errou.

---

## Semana 3 — 05/06 a 11/06
### Tema: FSM, lógica sequencial e temporização

**Objetivo:** dominar Moore/Mealy, flip-flops e timing.

### 05/06 — Sexta
- Latches e flip-flops:
  - SR;
  - D;
  - JK;
  - T.
- Diferença entre latch e flip-flop.
- Borda de subida e borda de descida.

### 06/06 — Sábado
- Circuitos sequenciais:
  - registradores;
  - contadores síncronos;
  - contadores assíncronos;
  - divisão de frequência.

### 07/06 — Domingo
- Temporização:
  - setup time;
  - hold time;
  - clock-to-Q;
  - atraso de propagação;
  - caminho crítico;
  - frequência máxima.

Fórmula central:

```text
Tclock mínimo ≥ Tclk-to-Q + Tcombinacional + Tsetup
```

Frequência máxima:

```text
Fmax = 1 / Tclock mínimo
```

### 08/06 — Segunda
- Hazards:
  - hazard estático;
  - hazard dinâmico;
  - glitches;
  - por que aparecem em circuitos combinacionais.

### 09/06 — Terça
- Máquinas de Estados Finitos:
  - Moore;
  - Mealy;
  - tabela de estados;
  - diagrama de estados.

Resumo:

| Tipo | Saída depende de |
|---|---|
| Moore | Estado atual |
| Mealy | Estado atual + entrada |

### 10/06 — Quarta
- Síntese de FSM:
  - codificação de estados;
  - tabela de transição;
  - extração de equações;
  - implementação com flip-flops.

### 11/06 — Quinta
- Simulado parcial:
  - 10 questões de flip-flops/contadores;
  - 10 de temporização;
  - 10 de FSM.
- Meta:
  - pelo menos 70% de acerto.
- Se ficar abaixo disso, revisar FSM antes de avançar.

---

## Semana 4 — 12/06 a 18/06
### Tema: Arquitetura de computadores e aritmética digital

**Objetivo:** cobrir arquitetura e circuitos aritméticos.

### 12/06 — Sexta
- Assembly em nível conceitual:
  - operandos;
  - registradores;
  - imediatos;
  - memória;
  - instruções aritméticas;
  - instruções lógicas.

### 13/06 — Sábado
- Formatos de instrução:
  - tipo R;
  - tipo I;
  - tipo J, se usar referência tipo MIPS/RISC.
- Campos:
  - opcode;
  - registradores;
  - imediato;
  - endereço.

### 14/06 — Domingo
- Tipos de instrução:
  - aritméticas;
  - lógicas;
  - load/store;
  - branch;
  - jump;
  - chamada de função.

### 15/06 — Segunda
- Modos de endereçamento:
  - imediato;
  - direto;
  - indireto;
  - por registrador;
  - base + deslocamento;
  - relativo ao PC.

### 16/06 — Terça
- Datapath e controle:
  - ULA;
  - banco de registradores;
  - memória de instruções;
  - memória de dados;
  - sinais de controle.

### 17/06 — Quarta
- Somadores:
  - half-adder;
  - full-adder;
  - ripple-carry;
  - carry look-ahead.
- Subtrator.
- Complemento de 2.

### 18/06 — Quinta
- ULA.
- Comparador.
- Shifter.
- Ponto fixo.
- Ponto flutuante:
  - sinal;
  - expoente;
  - mantissa;
  - erros de representação.
- Simulado parcial de arquitetura e aritmética.

---

## Semana 5 — 19/06 a 25/06
### Tema: CMOS, memórias, PLDs, FPGA e revisão pesada

**Objetivo:** fechar os assuntos restantes e começar revisão geral.

### 19/06 — Sexta
- Lógica CMOS:
  - NMOS como chave;
  - PMOS como chave;
  - pull-up network;
  - pull-down network;
  - inversor CMOS.

### 20/06 — Sábado
- Comportamento elétrico:
  - consumo estático;
  - consumo dinâmico;
  - atraso de propagação;
  - caminho crítico.
- Revisar hazards.

### 21/06 — Domingo
- Memórias:
  - registradores;
  - banco de registradores;
  - ROM;
  - SRAM;
  - DRAM.
- Diferenças principais e uso típico.

### 22/06 — Segunda
- Arranjos lógicos:
  - PLA;
  - PAL;
  - PROM.
- CPLD e FPGA:
  - LUT;
  - blocos lógicos;
  - interconexões programáveis;
  - diferenças gerais entre CPLD e FPGA.

### 23/06 — Terça
- Revisão geral 1:
  - sistemas numéricos;
  - álgebra booleana;
  - Karnaugh;
  - combinacional.

### 24/06 — Quarta
- Revisão geral 2:
  - flip-flops;
  - temporização;
  - contadores;
  - FSM.
- Conferir a lista de inscritos com local de prova.

### 25/06 — Quinta
- Revisão geral 3:
  - arquitetura;
  - assembly;
  - datapath;
  - ULA;
  - memórias;
  - CMOS;
  - FPGA/CPLD.

---

## Reta final — 26/06 a 27/06

---

### 26/06 — Sexta
## Simulado completo

Fazer um simulado de **40 questões em até 4 horas**.

Distribuição sugerida:

| Bloco | Questões |
|---|---:|
| Inglês instrumental | 5 |
| Sistemas numéricos e códigos | 5 |
| Álgebra, Karnaugh e combinacional | 9 |
| FSM, sequencial e timing | 8 |
| Arquitetura, assembly e datapath | 7 |
| CMOS, memórias e FPGA | 6 |

Depois de corrigir, classificar os erros:

| Tipo de erro | Ação |
|---|---|
| Não sabia o conteúdo | Revisar teoria |
| Sabia, mas confundiu | Fazer 5 exercícios parecidos |
| Erro de atenção | Criar alerta pessoal |
| Demorou demais | Marcar como questão de revisão rápida |

---

### 27/06 — Sábado
## Revisão leve e checklist

Não tentar aprender assunto grande novo.

Fazer:
- revisar fórmulas e conceitos;
- refazer questões erradas;
- revisar tabelas de flip-flops;
- revisar Karnaugh;
- revisar setup/hold;
- revisar FSM Moore/Mealy;
- revisar datapath;
- separar documento e caneta preta;
- conferir horário e rota para o local de prova.

---

## 28/06 — Domingo
# Dia da prova

Checklist:

- [ ] Documento original com foto
- [ ] Caneta esferográfica preta
- [ ] Local de prova conferido
- [ ] Chegar antes das 13h30
- [ ] Evitar depender de celular no local
- [ ] Levar água e lanche simples, se quiser

Horários:

| Atividade | Horário |
|---|---|
| Abertura dos portões | 13h30 |
| Fechamento dos portões | 14h |
| Início da prova | 14h |
| Término da prova | 18h |

---

# 6. Plano por assunto

---

## 6.1 Sistemas numéricos e códigos

Você precisa saber fazer rapidamente:

- decimal para binário;
- binário para decimal;
- binário para hexadecimal;
- hexadecimal para binário;
- soma binária;
- subtração com complemento de 2;
- detectar overflow;
- BCD;
- Gray;
- ASCII;
- checksum conceitual.

Treino mínimo:

- [ ] 30 conversões de base
- [ ] 20 operações binárias
- [ ] 10 questões de complemento de 2
- [ ] 10 questões de BCD/Gray

---

## 6.2 Álgebra booleana e portas

Dominar:

- AND;
- OR;
- NOT;
- NAND;
- NOR;
- XOR;
- XNOR;
- DeMorgan;
- dualidade;
- simplificação algébrica;
- tabela-verdade;
- implementação com portas.

Ponto crítico:

> NAND e NOR são portas universais.

---

## 6.3 Karnaugh e minimização

Você precisa conseguir:

- montar mapa de 2 variáveis;
- montar mapa de 3 variáveis;
- montar mapa de 4 variáveis;
- agrupar corretamente;
- usar don't care;
- sair de tabela para expressão simplificada;
- sair de expressão para circuito.

Treino mínimo:

- [ ] 25 mapas de Karnaugh antes da prova

---

## 6.4 Circuitos combinacionais

Estudar:

- MUX;
- decoder;
- encoder;
- demux;
- comparador;
- shifter;
- half-adder;
- full-adder;
- ripple-carry;
- carry look-ahead;
- ULA.

Resumo:

| Circuito | Saber |
|---|---|
| MUX | Seleciona uma entrada |
| Decoder | Ativa saída conforme código |
| Encoder | Codifica entrada ativa |
| Half-adder | Soma 2 bits sem carry-in |
| Full-adder | Soma 2 bits com carry-in |
| Ripple-carry | Simples, mas lento |
| Carry look-ahead | Mais rápido, mais complexo |

---

## 6.5 Circuitos sequenciais

Estudar:

- latch vs flip-flop;
- flip-flop D;
- flip-flop JK;
- flip-flop T;
- flip-flop SR;
- registradores;
- contadores;
- setup time;
- hold time;
- clock-to-Q;
- frequência máxima;
- caminho crítico.

Fórmula central:

```text
Tclock mínimo ≥ Tclk-to-Q + Tcombinacional + Tsetup
```

Frequência máxima:

```text
Fmax = 1 / Tclock mínimo
```

---

## 6.6 FSM — Moore e Mealy

Você precisa saber:

- diferença entre Moore e Mealy;
- desenhar diagrama de estados;
- montar tabela de transição;
- codificar estados;
- extrair equações;
- implementar com flip-flops.

Resumo:

| Tipo | Saída depende de |
|---|---|
| Moore | Estado atual |
| Mealy | Estado atual + entrada |

---

## 6.7 Arquitetura de computadores

Foco em:

- operandos em assembly;
- formato de instrução;
- tipos de instrução;
- modos de endereçamento;
- datapath;
- controle;
- banco de registradores;
- ULA;
- memória de instruções;
- memória de dados.

Não precisa virar especialista em assembly.  
Precisa entender o que uma instrução faz e como ela passa pelo processador.

---

## 6.8 CMOS e microeletrônica digital

Estudar em nível conceitual e intermediário:

- NMOS;
- PMOS;
- inversor CMOS;
- pull-up;
- pull-down;
- consumo estático;
- consumo dinâmico;
- atraso de propagação;
- caminho crítico;
- hazards;
- glitches.

Prioridade:

> Entender o comportamento geral, não decorar física profunda.

---

## 6.9 Memórias e lógica programável

Estudar:

- ROM;
- SRAM;
- DRAM;
- banco de registradores;
- PLA;
- PAL;
- PROM;
- CPLD;
- FPGA.

Resumo:

| Item | Ideia principal |
|---|---|
| ROM | Memória não volátil, leitura |
| SRAM | Rápida, cara, usa células estáticas |
| DRAM | Densa, precisa refresh |
| PLA | AND e OR programáveis |
| PAL | Geralmente AND programável e OR fixo |
| PROM | Programável uma vez ou conforme tecnologia |
| CPLD | Mais previsível, bom para lógica de controle |
| FPGA | Lógica reconfigurável com LUTs |

---

# 7. Inglês — manutenção mínima

Como você já consome conteúdo em inglês, faça apenas:

## 3 vezes por semana — 20 minutos

- ler um trecho técnico de digitais ou arquitetura em inglês;
- marcar termos técnicos;
- responder mentalmente:
  - qual é o assunto?
  - qual é a conclusão?
  - quais palavras técnicas aparecem?

Vocabulário útil:

| Inglês | Português |
|---|---|
| latch | latch/trava |
| flip-flop | flip-flop |
| propagation delay | atraso de propagação |
| setup time | tempo de setup |
| hold time | tempo de hold |
| finite state machine | máquina de estados finitos |
| instruction format | formato de instrução |
| addressing mode | modo de endereçamento |
| datapath | caminho de dados |
| control unit | unidade de controle |
| register file | banco de registradores |
| combinational logic | lógica combinacional |
| sequential logic | lógica sequencial |
| critical path | caminho crítico |
| overflow | estouro |
| carry | vai-um |
| branch | desvio condicional |
| jump | salto |

---

# 8. Fonte principal de estudo

A bibliografia indicada para a trilha digital é:

> HARRIS, David; HARRIS, Sarah. **Digital Design and Computer Architecture**. 2ª edição. Morgan Kaufmann, 2012.

Use como referência, mas não leia o livro inteiro.  
Priorize os tópicos diretamente ligados ao edital.

Temas para priorizar:

- sistemas numéricos;
- portas lógicas;
- álgebra booleana;
- circuitos combinacionais;
- circuitos sequenciais;
- FSM;
- assembly básico;
- datapath;
- memória;
- CMOS básico.

---

# 9. Ordem de revisão na última semana

Revisar nesta ordem:

1. Karnaugh e álgebra booleana
2. FSM
3. Flip-flops e temporização
4. Arquitetura e datapath
5. Somadores e ULA
6. CMOS, hazards e memórias
7. Inglês instrumental

Motivo:

- Karnaugh, FSM e temporização geram muitos erros de procedimento.
- Arquitetura exige interpretação.
- CMOS, memórias e FPGA tendem a aparecer mais conceitualmente.
- Inglês pode ser mantido com revisão curta.

---

# 10. Metas de desempenho

Como a prova tem 40 questões:

| Meta | Acertos |
|---|---:|
| Mínimo do edital | 20/40 |
| Zona razoável | 26/40 |
| Competitivo | 30/40 |
| Muito forte | 34+/40 |

Meta prática recomendada:

> Buscar **30+ acertos**.

---

# 11. Checklist semanal

## Até 28/05

- [ ] Bases numéricas
- [ ] Códigos binários
- [ ] Portas lógicas
- [ ] DeMorgan
- [ ] Álgebra booleana básica

## Até 04/06

- [ ] Mintermos
- [ ] Maxtermos
- [ ] Karnaugh
- [ ] Don't care
- [ ] MUX
- [ ] Decoder
- [ ] Encoder
- [ ] Síntese lógica

## Até 11/06

- [ ] Latches
- [ ] Flip-flops
- [ ] Contadores
- [ ] Setup/hold
- [ ] FSM Moore/Mealy

## Até 18/06

- [ ] Assembly básico
- [ ] Formatos de instrução
- [ ] Modos de endereçamento
- [ ] Datapath
- [ ] Somadores
- [ ] ULA

## Até 25/06

- [ ] CMOS
- [ ] Hazards
- [ ] Memórias
- [ ] PLA/PAL/PROM
- [ ] CPLD/FPGA
- [ ] Revisão geral

## 26/06 e 27/06

- [ ] Simulado completo
- [ ] Correção dos erros
- [ ] Revisão leve
- [ ] Documento
- [ ] Caneta preta
- [ ] Local de prova conferido

---

# 12. Resumo do cronograma

| Período | Foco |
|---|---|
| 22/05 a 28/05 | Bases numéricas, códigos, portas e álgebra booleana |
| 29/05 a 04/06 | Karnaugh, mintermos, maxtermos, MUX, decoder e síntese |
| 05/06 a 11/06 | Flip-flops, contadores, temporização e FSM |
| 12/06 a 18/06 | Arquitetura, assembly, datapath, ULA e somadores |
| 19/06 a 25/06 | CMOS, hazards, memórias, FPGA/CPLD e revisão geral |
| 26/06 | Simulado completo |
| 27/06 | Revisão leve e checklist |
| 28/06 | Prova |

---

# 13. Como estudar cada sessão

Para cada tópico, usar este ciclo:

1. **Entender**
   - Ler ou assistir uma explicação curta.
   - Anotar as definições principais.

2. **Aplicar**
   - Resolver exemplos simples.
   - Refazer sem olhar.

3. **Aumentar dificuldade**
   - Resolver questões misturadas.
   - Marcar as que errou.

4. **Revisar**
   - No dia seguinte, refazer apenas as erradas.
   - No fim da semana, refazer as mais difíceis.

---

# 14. Lista de erros

Mantenha uma lista com este formato:

| Data | Assunto | Erro | Correção |
|---|---|---|---|
|  |  |  |  |

Exemplo:

| Data | Assunto | Erro | Correção |
|---|---|---|---|
| 30/05 | Karnaugh | Agrupei 3 células, o que não pode | Agrupamentos devem ter potência de 2 |
| 07/06 | Timing | Esqueci o setup time | Tclock mínimo inclui Tclk-to-Q + Tcomb + Tsetup |

---

# 15. Fórmulas e lembretes rápidos

## Complemento de 2

Para representar `-N`:

1. Escreva `N` em binário.
2. Inverta os bits.
3. Some 1.

## Overflow em complemento de 2

Ocorre quando:
- soma de dois positivos dá negativo;
- soma de dois negativos dá positivo.

## MUX

Um MUX com `n` linhas de seleção escolhe entre:

```text
2^n entradas
```

## Flip-flop

- Latch: sensível a nível.
- Flip-flop: sensível à borda.

## Moore vs Mealy

- Moore: saída depende só do estado.
- Mealy: saída depende do estado e da entrada.

## Frequência máxima

```text
Fmax = 1 / (Tclk-to-Q + Tcombinacional + Tsetup)
```

---

# 16. Conduta na prova

Durante a prova:

1. Fazer primeiro as questões fáceis.
2. Não travar em questão longa.
3. Marcar dúvidas e voltar depois.
4. Reservar pelo menos 20 minutos finais para conferir gabarito.
5. Conferir se marcou todas as questões na folha definitiva.
6. Evitar deixar inglês para o fim absoluto se estiver cansado.

Estratégia de tempo:

| Tempo | Ação |
|---|---|
| 0h–1h | Questões fáceis e médias |
| 1h–2h30 | Questões técnicas mais trabalhosas |
| 2h30–3h20 | Questões marcadas para revisão |
| 3h20–3h40 | Inglês e questões rápidas restantes |
| 3h40–4h | Conferir folha-resposta |

---

# 17. Meta final

A meta não deve ser apenas atingir o mínimo de 20 pontos.

Meta recomendada:

> Chegar na prova com desempenho de **30/40 ou mais** em simulado.

Isso dá margem para:
- erro de atenção;
- questão mal interpretada;
- assunto que venha mais específico;
- cansaço no dia da prova.

