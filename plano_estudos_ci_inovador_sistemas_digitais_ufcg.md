# Plano de Estudos Revisado — CI Brasil Inovação 2
## Trilha: Sistemas Digitais — UFCG

**Plano atualizado em:** 24/05/2026, domingo  
**Período restante de estudo:** 24/05/2026 a 27/06/2026  
**Prova objetiva:** 28/06/2026, domingo, das 14h às 18h  
**Foco deste plano:** conteúdo técnico de Sistemas Digitais  
**Situação inicial:** as aulas `1` a `5` da pasta `aulas` já foram estudadas.

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

Esses itens serão incluídos de modo focado no cronograma, pois estavam pouco explícitos no plano anterior.

---

# 3. Auditoria do Plano Anterior

## 3.1 O que estava condizente

| Tema do plano anterior | Avaliação |
|---|---|
| Binário, BCD, Gray, ASCII e checksum | Alinhado ao edital |
| Portas, álgebra booleana, DeMorgan e dualidade | Alinhado ao edital |
| Karnaugh, mintermos, maxtermos e síntese | Alinhado ao edital |
| MUX, decoder, encoder e circuitos combinacionais | Alinhado ao edital |
| FSM Moore/Mealy e síntese de FSM | Alinhado ao edital |
| Assembly, datapath e controle | Alinhado ao edital |
| CMOS, hazards, temporização e memórias | Alinhado ao edital |
| PLA/PAL/PROM, CPLD e FPGA | Alinhado ao edital |

## 3.2 Melhorias aplicadas nesta versão

| Ajuste | Motivo |
|---|---|
| Retirar agenda própria de inglês | Você já estuda os materiais técnicos em inglês |
| Começar o plano em `24/05` | Essa é a data atual informada e as aulas `1` a `5` já foram concluídas |
| Não repetir teoria já estudada como se estivesse pendente | Usar o avanço conquistado para aumentar prática e revisão |
| Adicionar `H`, `L`, `Z` e `don't care` de modo explícito | Item nominal do Anexo III |
| Adicionar estabilidade em lógica sequencial | Item nominal do Anexo III |
| Adicionar programação procedural/algoritmos | Pré-requisito oficial do item 2.7.1 |
| Adicionar tensão, corrente, potência e energia | Pré-requisito oficial do item 2.7.1 |
| Tratar NAND/NOR como ferramenta de síntese | É útil e compatível, mas não precisa ocupar um bloco desproporcional |
| Aumentar simulados acumulativos | Há apenas uma prova classificatória; retenção e velocidade importam |
| Remover distribuição presumida de questões por área | O edital informa 40 questões, mas não fixa quantas por tópico |

---

# 4. Conteúdo Já Concluído Até 24/05

As cinco aulas já estudadas cobrem a base inicial do edital.

| Aula concluída | Conteúdo coberto | Status no edital |
|---|---|---|
| `1-binarios_operacoes_sinal_complemento2.md` | binário, hexadecimal de apoio, operações, sinal, complemento de 2 e overflow | Coberto |
| `2-codigos_binarios_bcd_gray_ascii_checksum.md` | BCD, Gray, ASCII e checksum | Coberto |
| `3-portas_logicas_operacoes_booleanas.md` | NOT, AND, OR, NAND, NOR, XOR, XNOR, tabelas-verdade | Coberto |
| `4-algebra_booleana_axiomas_leis_simplificacao.md` | axiomas, leis e simplificação | Coberto |
| `5-demorgan_dualidade_nand_nor_simplificacao.md` | DeMorgan, dualidade e conversão com NAND/NOR | Coberto |

Você também já possui:

```text
resumos/resumo_semana_1_aulas_1_a_5_revisao_geral.md
simulados/simulado_01_semana_1_aulas_1_a_5_40_questoes.html
```

## 4.1 Como tratar o conteúdo concluído

Ele não deve ser reestudado do zero agora. O ciclo será:

```text
simulado → identificar falhas → revisão pontual → refazer erros
```

---

# 5. Prioridade a Partir de Agora

| Prioridade | Conteúdo pendente | Por quê |
|---|---|---|
| Altíssima | Karnaugh, mintermos/maxtermos, síntese lógica e blocos combinacionais | Continuação direta da base já dominada e grande potencial de questão operacional |
| Altíssima | Latches, flip-flops, temporização, contadores e FSM | Núcleo completo de lógica sequencial e máquinas de estados |
| Alta | Assembly, modos de endereçamento, datapath e controle | Bloco oficial separado de arquitetura |
| Alta | Somadores, ULA, ponto fixo/flutuante | Parte explícita de circuitos digitais |
| Alta | CMOS, potência, atrasos e hazards | Parte explícita do edital, não apenas detalhe complementar |
| Média-alta | Memórias, PLA/PAL/PROM, CPLD e FPGA | Bloco oficial amplo, majoritariamente conceitual |
| Média | Algoritmos procedurais e física elétrica básica | Pré-requisitos oficiais; cobrir de modo direcionado |

---

# 6. Rotina de Estudo

## Dias comuns — 2h30 a 3h

| Bloco | Tempo | Ação |
|---|---:|---|
| Recuperação ativa | 15 min | Escrever de memória fórmulas/conceitos do dia anterior |
| Teoria do assunto novo | 60 a 75 min | Aula, capítulo ou leitura técnica |
| Problemas | 50 a 65 min | Questões, circuitos, tabelas ou cálculos |
| Registro de erros | 10 min | Anotar erro, motivo e regra correta |
| Revisão espaçada | 15 min | Refazer 2 a 4 erros antigos |

## Dias de simulado — 3h a 4h

| Etapa | Tempo |
|---|---:|
| Resolver sem consulta | 1h30 a 2h30 |
| Corrigir | 30 a 45 min |
| Classificar erros | 15 min |
| Refazer as erradas sem olhar | 30 min |

## Formato dos simulados

Todo novo simulado deste plano deve ser produzido como:

```text
um unico arquivo .html com CSS e JavaScript embutidos
```

Recursos mínimos:

- alternativas marcáveis na própria página;
- botão para finalizar e corrigir;
- resultado total e desempenho por bloco;
- indicação visual das questões certas e erradas;
- exportação de relatório textual com respostas, gabarito e erros para análise posterior por IA.

## Regra de avanço

| Desempenho em um bloco | Decisão |
|---:|---|
| `80%` ou mais | Prosseguir e manter revisão espaçada |
| `70%` a `79%` | Prosseguir, mas fazer 10 questões adicionais |
| Abaixo de `70%` | Revisar o assunto antes do próximo bloco correlato |

---

# 7. Cronograma Atualizado — 24/05 a 27/06

## Fase 1 — Diagnóstico e Lógica Combinacional
### 24/05 a 31/05

**Objetivo:** consolidar o que já foi estudado e terminar o restante da lógica combinacional exigida no edital.

### 24/05 — Domingo — Diagnóstico da base já concluída

- Resolver o simulado interativo já criado:
  - `simulados/simulado_01_semana_1_aulas_1_a_5_40_questoes.html`.
- Ao finalizar, exportar o relatório de acertos e erros para orientar a revisão.
- Corrigir e separar erros em:
  - sistemas numéricos/códigos;
  - portas e expressões;
  - álgebra/DeMorgan/NAND/NOR.
- Revisar apenas os itens errados usando o resumo da semana.

Meta:

```text
30/40 ou mais; nenhum bloco abaixo de 70%.
```

### 25/05 — Segunda — Valores lógicos e formas canônicas

- Valores `H`, `L`, `Z` e `don't care`.
- Diferença entre:
  - nível lógico alto/baixo;
  - alta impedância;
  - valor indiferente para minimização.
- Mintermos e maxtermos.
- Soma de produtos (`SOP`) e produto de somas (`POS`).
- Sair de tabela-verdade para expressão canônica.

Exercícios:

- 10 identificações de mintermos/maxtermos;
- 5 tabelas para `SOP`;
- 5 tabelas para `POS`.

### 26/05 — Terça — Mapas de Karnaugh de 2 e 3 variáveis

- Ordem Gray no mapa.
- Adjacência horizontal e vertical.
- Grupos de tamanho potência de 2.
- Grupos máximos e sobreposição útil.
- Obter expressão mínima em soma de produtos.

Exercícios:

- 6 mapas de 2 variáveis;
- 10 mapas de 3 variáveis.

### 27/05 — Quarta — Karnaugh de 4 variáveis e `don't care`

- Linhas e colunas em ordem Gray.
- Bordas conectadas.
- Quartetos e oitavas envolvendo extremidades.
- Uso estratégico de `don't care`.

Exercícios:

- 12 mapas de 4 variáveis;
- pelo menos 4 com `don't care`.

### 28/05 — Quinta — Síntese lógica completa

- Caminho completo:

```text
tabela-verdade → mintermos/maxtermos → Karnaugh → equação mínima → circuito
```

- Reforço da escolha:
  - `SOP` para NAND–NAND;
  - `POS` para NOR–NOR.
- Avaliar expressões lógicas combinadas.

Exercícios:

- 5 funções completas da tabela ao circuito;
- implementar 2 usando NAND e 2 usando NOR.

### 29/05 — Sexta — MUX, decoder e encoder

- Multiplexador:
  - seleção de entrada;
  - relação `n` seletores para `2^n` entradas;
  - implementar função lógica com MUX.
- Decoder:
  - ativação de uma saída;
  - implementação de funções por soma de saídas.
- Encoder:
  - codificação de entrada ativa;
  - encoder prioritário em nível conceitual.

Exercícios:

- 6 questões de MUX;
- 5 de decoder;
- 3 de encoder.

### 30/05 — Sábado — Outros blocos e simulado combinacional

- Revisar:
  - demultiplexador como bloco adicional;
  - comparador simples como ponte para unidades funcionais;
  - composição com MUX/decoder.
- Resolver simulado parcial de lógica combinacional:
  - 30 questões;
  - conteúdo de aulas `1` a `5`, Karnaugh e blocos combinacionais.

### 31/05 — Domingo — Correção e introdução a FSM

- Refazer as questões erradas do simulado parcial.
- Introdução a máquinas de estados:
  - estado atual;
  - próxima transição;
  - entradas e saídas;
  - Moore vs Mealy.
- Construir 2 diagramas simples de estado.

---

## Fase 2 — Lógica Sequencial, Temporização e FSM
### 01/06 a 07/06

**Objetivo:** cobrir todo o bloco de sequencial e síntese de máquinas de estados.

### 01/06 — Segunda — Estabilidade, latch SR e latch D

- Diferença entre lógica combinacional e sequencial.
- Estabilidade e armazenamento de estado.
- Latch SR:
  - tabela característica;
  - condição inválida.
- Latch D e transparência por nível.

### 02/06 — Terça — Flip-flops e registradores

- Latch sensível a nível vs flip-flop sensível a borda.
- Flip-flop D como foco central.
- JK e T como extensões úteis.
- Registradores e habilitação.

Exercícios:

- completar tabelas de transição;
- prever saída após bordas de clock.

### 03/06 — Quarta — Contadores

- Contadores assíncronos e síncronos.
- Contagem crescente/decrescente em nível conceitual.
- Divisão de frequência.
- Número de estados com `n` flip-flops.

### 04/06 — Quinta — Temporização

- `setup time`;
- `hold time`;
- `clock-to-Q`;
- atraso combinacional;
- caminho crítico;
- frequência máxima.

Fórmula principal:

```text
Tclock mínimo ≥ Tclk-to-Q + Tcombinacional + Tsetup
Fmax = 1 / Tclock mínimo
```

Exercícios:

- 10 cálculos de `Tclock`/`Fmax`;
- identificar violações de setup e hold.

### 05/06 — Sexta — FSM Moore e Mealy

- Diagramas e tabelas de transição.
- Saída em Moore:

```text
depende somente do estado
```

- Saída em Mealy:

```text
depende do estado e da entrada
```

- Detectores simples de sequência.

### 06/06 — Sábado — Síntese de FSM

- Extrair tabela de estados do enunciado.
- Codificar estados.
- Obter equações de próximo estado e saída.
- Implementar com flip-flops D e lógica combinacional.

Exercícios:

- 2 FSM completas, uma Moore e uma Mealy.

### 07/06 — Domingo — Simulado parcial sequencial

- Simulado de 35 questões:
  - combinacional e Karnaugh;
  - latches/flip-flops;
  - temporização;
  - contadores;
  - FSM.
- Corrigir no mesmo dia.

Meta:

```text
70% ou mais em sequencial/FSM; se abaixo disso, revisar em 08/06 antes de arquitetura.
```

---

## Fase 3 — Arquitetura e Aritmética Digital
### 08/06 a 14/06

**Objetivo:** cobrir o bloco oficial de arquitetura e as unidades aritméticas de circuitos digitais.

### 08/06 — Segunda — Algoritmos procedurais e assembly básico

- Pré-requisito oficial:
  - variáveis;
  - atribuição;
  - condição `if`;
  - laço;
  - leitura sequencial de pseudocódigo.
- Operandos assembly:
  - registradores;
  - imediatos;
  - dados em memória.
- Instruções aritméticas e lógicas.

### 09/06 — Terça — Formatos e tipos de instrução

- Campo de opcode.
- Campos de registradores e imediato.
- Tipos:
  - aritméticas/lógicas;
  - condicionais;
  - desvios;
  - chamadas de funções.

Observação:

```text
O edital pede formatos de instrução, mas não fixa uma ISA específica.
Use exemplos RISC/Harris sem depender de decorar particularidades excessivas de MIPS.
```

### 10/06 — Quarta — Modos de endereçamento

- Imediato.
- Por registrador.
- Base + deslocamento.
- Relativo ao PC.
- Direto/indireto em nível conceitual.
- Relacionar modo ao acesso de dado ou desvio.

### 11/06 — Quinta — Datapath e controle

- Caminho de uma instrução:

```text
PC → memória de instruções → banco de registradores → ULA → memória de dados/escrita
```

- Sinais de controle.
- Seleção de caminhos por MUX.
- Diferença entre datapath e unidade de controle.

### 12/06 — Sexta — Somadores e subtrator

- Half-adder:
  - soma e carry.
- Full-adder:
  - entrada de carry.
- Ripple-carry:
  - simplicidade e atraso acumulado.
- Carry look-ahead:
  - ideia de gerar/propagar carry.
- Subtração com complemento de 2.

### 13/06 — Sábado — ULA, comparador, shifter e representação numérica

- ULA e seleção de operação.
- Comparador.
- Shifts lógicos e aritméticos.
- Ponto fixo.
- Ponto flutuante:
  - sinal;
  - expoente;
  - significando/mantissa;
  - limitações de precisão.

### 14/06 — Domingo — Simulado de arquitetura e aritmética

- 35 questões:
  - assembly, formatos e modos;
  - datapath e controle;
  - somadores, ULA e representação numérica;
  - revisão cumulativa curta de lógica.
- Criar lista de erros de arquitetura para a semana final.

---

## Fase 4 — Circuitos Digitais, CMOS, Memórias e Lógica Programável
### 15/06 a 21/06

**Objetivo:** concluir todos os tópicos oficiais restantes, dando peso adequado ao bloco de circuitos digitais.

### 15/06 — Segunda — Física básica e transistores MOS como chaves

- Pré-requisitos oficiais:
  - tensão;
  - corrente;
  - potência;
  - energia.
- Relações mínimas:

```text
P = V·I
E = P·t
```

- NMOS e PMOS como chaves.
- Inversor CMOS:
  - pull-up;
  - pull-down;
  - por que há baixo consumo estático ideal.

Também neste dia:

- confirmar que a inscrição foi solicitada até o prazo oficial de `15/06/2026`, se ainda não tiver sido feita.

### 16/06 — Terça — CMOS combinacional e comportamento estático

- Implementar NAND/NOR em CMOS em nível conceitual:
  - rede pull-up;
  - rede pull-down.
- Estados estáveis.
- Margens conceituais de nível lógico, sem aprofundamento além do edital.

### 17/06 — Quarta — Comportamento dinâmico, potência e atraso

- Capacitância de carga em nível conceitual.
- Consumo dinâmico por comutação.
- Atraso de propagação.
- Caminho crítico em blocos lógicos.
- Relacionar atraso combinacional à frequência de circuitos sequenciais.

Também neste dia:

- consultar resultado preliminar das inscrições homologadas, conforme cronograma oficial.

### 18/06 — Quinta — Glitches e hazards

- Glitch.
- Hazard estático-0 e estático-1.
- Hazard dinâmico.
- Origem em caminhos com atrasos diferentes.
- Relação com simplificação/Karnaugh e termos de consenso em nível de prova.

### 19/06 — Sexta — Memórias

- Banco de registradores.
- ROM.
- SRAM.
- DRAM.
- Comparar:
  - volatilidade;
  - velocidade;
  - densidade;
  - necessidade de refresh.

Também neste dia:

- se necessário, prazo para recurso quanto a inscrição não homologada: até `19/06/2026`.

### 20/06 — Sábado — Lógica programável

- PROM, PLA e PAL.
- CPLD.
- FPGA:
  - LUT;
  - blocos lógicos;
  - interconexões programáveis.
- Diferença geral CPLD vs FPGA.

### 21/06 — Domingo — Simulado técnico acumulativo

- Resolver 40 questões técnicas envolvendo todo o Anexo III:
  - fundamentos e combinacional;
  - sequencial/FSM;
  - arquitetura e aritmética;
  - CMOS, memória e FPGA.
- Corrigir e gerar ranking de fraquezas.

Meta:

```text
30/40 ou mais em conteúdo técnico.
```

---

## Fase 5 — Revisão e Reta Final
### 22/06 a 27/06

**Objetivo:** transformar erros em acertos sem iniciar assuntos grandes novos.

### 22/06 — Segunda — Fechamento administrativo e correção dirigida

- Consultar resultado definitivo das inscrições homologadas.
- Corrigir profundamente o simulado de `21/06`.
- Para cada erro:
  - escrever por que errou;
  - escrever a regra correta;
  - resolver 3 questões do mesmo tipo.

### 23/06 — Terça — Revisão 1: fundamentos e combinacional

- Binário, complemento de 2 e códigos.
- Portas, álgebra, DeMorgan e dualidade.
- Mintermos, maxtermos e Karnaugh.
- MUX, decoder, encoder e síntese lógica.

Prática:

- 25 a 30 questões;
- pelo menos 6 mapas de Karnaugh.

### 24/06 — Quarta — Revisão 2: sequencial e FSM

- Consulta **obrigatória** da lista de inscritos com local de prova.
- Confirmar prédio, sala, cidade e rota.
- Revisar:
  - latch/flip-flop;
  - estabilidade;
  - setup, hold, propagação e `Fmax`;
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

- Resolver um simulado técnico de 40 questões em tempo controlado.
- Não consultar material durante a resolução.
- Corrigir imediatamente.
- Revisar somente erros de alto retorno.

Observação:

```text
A prova oficial também inclui inglês; este simulado segue sua escolha de dedicar o planejamento ao conteúdo técnico.
```

Meta:

```text
30/40 ou mais; nenhum macrobloco técnico abaixo de 70%.
```

### 27/06 — Sábado — Revisão leve e logística

Não iniciar teoria nova.

- Ler resumos e folha de erros.
- Refazer apenas 10 a 15 questões previamente erradas.
- Rever:
  - leis booleanas/DeMorgan;
  - Karnaugh;
  - tabelas de flip-flops;
  - timing;
  - Moore vs Mealy;
  - datapath;
  - diferenças SRAM/DRAM e CPLD/FPGA.
- Separar documento original com foto e caneta preta.
- Conferir rota e horário.
- Dormir em horário adequado.

---

# 8. Dia da Prova — 28/06/2026

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

# 9. Checklist de Cobertura do Edital

## Já estudado

- [x] Sistema binário, operações e conversão.
- [x] Complemento de 2 e overflow como suporte.
- [x] BCD, Gray, ASCII e checksum.
- [x] Portas lógicas.
- [x] Álgebra booleana.
- [x] DeMorgan e dualidade.
- [x] Implementação inicial com NAND/NOR.

## A concluir no cronograma revisado

- [ ] `H`, `L`, `Z` e `don't care`.
- [ ] Mintermos, maxtermos, `SOP` e `POS`.
- [ ] Karnaugh e minimização.
- [ ] MUX, encoder, decoder e outros blocos lógicos básicos.
- [ ] Síntese lógica completa.
- [ ] Estabilidade, latches, flip-flops e registradores.
- [ ] Contadores.
- [ ] Temporização sequencial.
- [ ] Moore, Mealy e síntese de FSM.
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

# 10. Metas de Simulado

O edital exige no mínimo `20/40`, mas atingir apenas o mínimo não é uma meta competitiva para 18 vagas na UFCG.

| Data | Avaliação | Meta |
|---|---|---:|
| 24/05 | Simulado das aulas já concluídas | `30/40` |
| 30/05 | Parcial de lógica combinacional | `70%` |
| 07/06 | Parcial sequencial/FSM | `70%` |
| 14/06 | Parcial arquitetura/aritmética | `70%` |
| 21/06 | Técnico acumulativo | `30/40` |
| 26/06 | Técnico final | `30/40`, idealmente `34+` |

## Registro obrigatório de erros

| Data | Questão/assunto | Erro cometido | Regra correta | Refiz? |
|---|---|---|---|:---:|
|  |  |  |  |  |

---

# 11. Material de Referência

Bibliografia sugerida pelo edital para a trilha digital:

> HARRIS, David; HARRIS, Sarah. **Digital Design and Computer Architecture**. 2nd Edition. Morgan Kaufmann, 2012.

Use o livro de modo dirigido, acompanhando o cronograma:

| Tema | Usar para |
|---|---|
| Representação e lógica combinacional | Fixar expressões, Karnaugh e blocos |
| Lógica sequencial e FSM | Tabelas, timing e síntese |
| Arquitetura | Assembly, datapath e controle |
| Circuitos digitais | CMOS, atraso, memória e lógica programável |

Materiais já produzidos:

```text
aulas/1-binarios_operacoes_sinal_complemento2.md
aulas/2-codigos_binarios_bcd_gray_ascii_checksum.md
aulas/3-portas_logicas_operacoes_booleanas.md
aulas/4-algebra_booleana_axiomas_leis_simplificacao.md
aulas/5-demorgan_dualidade_nand_nor_simplificacao.md
resumos/resumo_semana_1_aulas_1_a_5_revisao_geral.md
simulados/simulado_01_semana_1_aulas_1_a_5_40_questoes.html
```

---

# 12. Meta Final

O plano agora parte do avanço real já conquistado em `24/05/2026`: fundamentos numéricos e álgebra inicial não são mais pendências, mas base de revisão ativa.

A meta é chegar a `28/06/2026` com:

```text
todo o Anexo III técnico coberto;
pré-requisitos oficiais não esquecidos;
cinco simulados parciais/acumulativos corrigidos;
30/40 ou mais de forma consistente nos simulados técnicos finais.
```
