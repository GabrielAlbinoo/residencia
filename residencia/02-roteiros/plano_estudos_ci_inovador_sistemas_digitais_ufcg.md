# Plano De Estudos Atualizado - CI Inovador 2026
## Trilha: Sistemas Digitais - UFCG

**Plano atualizado em:** 16/06/2026, terca-feira  
**Base do cronograma:** Edital-de-Selecao-CI-Inovador-2026-2a-Retificacao.pdf  
**Periodo restante de estudo:** 16/06/2026 a 25/07/2026  
**Prova objetiva:** 26/07/2026, domingo, das 14h as 18h  
**Situacao atual:** aulas `1` a `27` concluidas; fase atual: consolidacao, simulados e correcao profunda  
**Meta pratica:** estabilizar `35/40` ou mais em simulados equivalentes

---

# 1. O Que Mudou Com A Retificacao

A retificacao mudou principalmente o calendario.

| Item | Antes | Agora |
|---|---:|---:|
| Prova objetiva | 28/06/2026 | 26/07/2026 |
| Consulta obrigatoria ao local | 24/06/2026 | 21/07/2026 |
| Gabarito preliminar | 29/06/2026 | 27/07/2026 |
| Gabarito definitivo | 03/07/2026 | 31/07/2026 |
| Classificacao final | 10/07/2026 | 11/08/2026 |
| Inicio das aulas - Fase 1 | 10/08/2026 | 24/08/2026 |

O conteudo tecnico do edital nao mudou pelo texto extraido dos anexos finais.

Conclusao:

```text
nao muda o que estudar
muda quanto tempo existe para consolidar
```

---

# 2. Estrategia Depois Do Adiamento

O adiamento ajuda voce, mas tambem ajuda concorrentes.

Entao a vantagem nao vem de "ter mais tempo" sozinho.

A vantagem vem de:

```text
usar o tempo extra melhor que a media
corrigir erro real
fazer simulado dificil
revisar formula e unidade
nao cair em estudo passivo
```

Seu objetivo agora nao e terminar conteudo.

O objetivo e:

```text
transformar 83-84% em 86-90%
```

Isso equivale, em uma prova de 40 questoes, a sair de algo como:

```text
33/40 ou 34/40
```

para:

```text
35/40 ou 36/40
```

---

# 3. Estado Atual

## 3.1 Conteudo

Todas as aulas planejadas foram concluidas:

```text
aulas 1 a 27 concluídas
```

Nao abrir assunto tecnico grande novo sem motivo.

Assuntos complementares permitidos:

```text
ASIC/FPGA/CPLD/bitstream/HDL
revisao de formulas eletricas
revisao de IEEE 754
revisao de datapath
```

Somente como consolidacao, nao como nova trilha infinita.

## 3.2 Simulados Registrados

| Data | Simulado | Resultado |
|---|---|---:|
| 25/05/2026 | Simulado 01 - Semana 1 | `36/40 (90%)` |
| 26/05/2026 | Simulado 02 - Aulas 6 a 8 | `27/30 (90%)` |
| 26/05/2026 | Simulado 03 - Aulas 1 a 9 | `73/90 (81%)` |
| 28/05/2026 | Simulado 04 - Aulas 9 a 13 | `24/30 (80%)` |
| 01/06/2026 | Simulado 05 - Aulas 1 a 17 | `44/50 (88%)` |
| 02/06/2026 | Simulado 06 - Aulas 1 a 17 | `44/50 (88%)` |
| 08/06/2026 | Simulado 07 - Faculdades Aulas 1 a 17 | `45/50 (90%)` |
| 08/06/2026 | Simulado 09 - Aulas 13 e 18 a 24 | `56/60 (93%)` |
| 11/06/2026 | Simulado 11 - Geral dificil | `48/57 (84%)` |
| 15/06/2026 | Simulado 12 - Geral dificil | `50/60 (83%)` |

Leitura:

```text
voce ja esta competitivo
voce ainda precisa ganhar consistencia
```

---

# 4. Diagnostico De Prioridades

## 4.1 Pontos Fortes

- binario, complemento de 2 basico e conversoes;
- algebra booleana, DeMorgan, SOP/POS e Karnaugh;
- MUX, decoder, encoder e blocos combinacionais;
- memorias, PROM, PLA, PAL, CPLD, FPGA e LUT;
- assembly, modos de enderecamento, datapath e controle;
- leitura geral de enunciado tecnico.

## 4.2 Pontos De Maior Retorno

Esses sao os que mais podem virar +2 ou +3 questoes:

```text
IEEE 754, especialmente numeros menores que 1
overflow em complemento de 2
carry, generate e propagate
energia, potencia, capacitancia e unidades
setup, hold, skew e caminho critico
registradores de deslocamento, MSB e LSB
paridade/checksum
NAND-NAND e NOR-NOR
Mealy vs Moore em enunciado com "saida muda imediatamente"
```

## 4.3 Prioridade Real Da Parte Eletrica

Como combinacional esta forte, a parte eletrica entra como prioridade alta de consolidacao.

Ordem:

```text
1. setup/hold/Fmax/skew
2. potencia dinamica e unidades
3. energia com capacitancia
4. CMOS/NMOS/PMOS e nivel forte/fraco
5. glitch/hazard/consenso
```

Formulas que precisam estar automaticas:

```text
Tmin = tCQmax + tPDmax + tsetup
Fmax = 1 / Tmin
hold: tCQmin + tPDmin >= thold
Pdin = alpha * C * V^2 * f
E_fonte ~= C * V^2
E_capacitor = 1/2 * C * V^2
Q = C * V
```

Unidades que nao pode errar:

```text
pF = 10^-12 F
fF = 10^-15 F
nF = 10^-9 F
ns = 10^-9 s
MHz = 10^6 Hz
mW = 10^-3 W
```

---

# 5. Rotina Base

## 5.1 Dia Normal De 3 Horas

```text
30 min  Anki no onibus
45 min  revisao de erro/formula
75 min  questoes ou mini-simulado
30 min  correcao e registro do que errou
```

## 5.2 Dia De Simulado Grande

```text
20-30 min Anki
90-150 min simulado
30-60 min correcao inicial
correcao profunda no dia seguinte
```

## 5.3 Regra De Ouro

```text
simulado sem correcao profunda vale metade
erro repetido precisa virar revisao ativa
card novo so nasce de erro real
```

Manter:

```text
100 cards/dia no Anki
```

Mas Anki continua sendo manutencao, nao estudo principal.

---

# 6. Cronograma Novo - 16/06 A 25/07

## Fase 1 - Recalibrar Depois Da Retificacao
### 16/06 a 22/06

Objetivo:

```text
absorver o adiamento
corrigir erros dos simulados 11 e 12
fechar pontos de formula
```

### 16/06 - Terca

- atualizar plano;
- revisar a retificacao;
- reler revisao do Simulado 12;
- estudar:
  - `Vt`;
  - energia com capacitancia;
  - hold com skew;
  - IEEE menor que 1.

### 17/06 - Quarta

Bloco principal:

- IEEE 754;
- ponto fixo;
- overflow;
- carry/generate/propagate.

Pratica:

```text
30 a 40 questoes focadas em aritmetica e representacao
```

### 18/06 - Quinta

Bloco principal:

- potencia dinamica;
- energia;
- capacitancia;
- unidades;
- setup/hold/skew.

Pratica:

```text
25 a 35 questoes de formula
```

### 19/06 - Sexta

Bloco principal:

- registradores de deslocamento;
- MSB/LSB;
- Mealy vs Moore;
- NAND-NAND/NOR-NOR;
- paridade/checksum.

Pratica:

```text
mini-simulado de 30 questoes
```

### 20/06 - Sabado

Simulado misto dificil:

```text
40 a 60 questoes
```

Meta:

```text
80%+
```

### 21/06 - Domingo

Correcao profunda do simulado.

Separar erros em:

```text
erro de conceito
erro de formula
erro de unidade
erro de leitura
erro bobo
questao ruim
```

### 22/06 - Segunda

Revisao leve dirigida pelos erros do fim de semana.

Criar no maximo:

```text
5 a 10 cards novos
```

somente se forem erros reais.

---

## Fase 2 - Consolidacao Forte
### 23/06 a 30/06

Objetivo:

```text
estabilizar acima de 83%
```

Padrao da semana:

```text
2 simulados grandes
2 dias de correcao profunda
2 dias de treino focado
1 dia leve
```

### Blocos Da Semana

1. Aritmetica/IEEE/ULA.
2. Temporizacao/potencia/CMOS.
3. Sequencial/FSM/registradores.
4. Memorias/PLD/FPGA.
5. Datapath/assembly.

Meta ate 30/06:

```text
simulado dificil: 84%+
mini-simulado focado: 85%+
```

---

## Fase 3 - Ciclo De Prova
### 01/07 a 10/07

Objetivo:

```text
treinar como prova, nao como aula
```

Rotina:

- simulado com questoes misturadas;
- tempo controlado;
- sem consulta;
- marcar questoes duvidosas;
- revisar estrategia de prova.

Frequencia:

```text
3 simulados grandes nesse periodo
```

Entre os simulados:

```text
correcao profunda
refazer erradas sem olhar gabarito
mini-lista de 20 questoes nos blocos fracos
```

Meta ate 10/07:

```text
85% em pelo menos um simulado dificil
nenhum bloco abaixo de 70%
```

Datas administrativas:

```text
10/07/2026 - fim das inscricoes e atendimento especial
```

---

## Fase 4 - Ajuste Fino
### 11/07 a 18/07

Objetivo:

```text
ganhar as ultimas 2 ou 3 questoes
```

Foco:

- erros recorrentes;
- questoes que voce acertou com duvida;
- formulas;
- leitura de alternativas;
- reduzir pressa.

Atividades:

```text
2 simulados grandes
2 mini-simulados de formulas
1 mini-simulado de datapath/assembly
1 revisao geral de memoria/FPGA/CMOS
```

Meta ate 18/07:

```text
simulados gerais entre 85% e 88%
```

Datas administrativas:

```text
14/07 - homologacao preliminar
16/07 - prazo de recurso
17/07 - homologacao definitiva
```

---

## Fase 5 - Semana Final
### 19/07 a 25/07

Objetivo:

```text
chegar descansado, sem abrir buraco novo
```

### 19/07 - Domingo

Simulado geral final de 40 ou 60 questoes.

Meta:

```text
35/40 equivalente
```

### 20/07 - Segunda

Correcao profunda do simulado final.

Separar:

```text
erros que ainda da para corrigir
erros aceitaveis
questoes ruins
```

### 21/07 - Terca

Consultar obrigatoriamente:

```text
lista de inscritos com local de prova
```

Estudo:

- revisao leve de formulas;
- revisao de folha de erros.

### 22/07 - Quarta

Mini-simulado de formulas:

```text
potencia
energia
setup/hold
IEEE
overflow
memoria
```

### 23/07 - Quinta

Revisao de arquitetura e logica programavel:

```text
LOAD/STORE/BEQ
RegWrite/MemRead/MemWrite/ALUSrc/MemToReg/Branch
PROM/PLA/PAL
CPLD/FPGA/LUT/bitstream/HDL
```

### 24/07 - Sexta

Revisao geral leve:

- Anki;
- resumo essencial;
- refazer questoes erradas mais importantes.

Nao fazer simulado pesado se estiver cansado.

### 25/07 - Sabado

Logistica e descanso.

- separar documento;
- separar caneta preta;
- conferir local e rota;
- dormir bem;
- revisar somente folha curta de formulas.

---

# 7. Dia Da Prova - 26/07/2026

## Horarios

| Atividade | Horario |
|---|---:|
| Chegar ao local | 13h30 ou antes |
| Fechamento dos portoes | 14h |
| Inicio da prova | 14h |
| Termino da prova | 18h |

## Estrategia De Prova

Nao tentar gastar 6 minutos em toda questao.

Usar 6 minutos como media.

```text
questao facil: resolver com calma e mini-conferencia
questao media: resolver e marcar se tiver duvida
questao travada: pular e voltar depois
```

Ordem sugerida:

```text
primeira passada: resolver o que sabe sem correr
segunda passada: voltar nas marcadas
final: conferir folha-resposta e alternativas
```

Conferencias obrigatorias:

```text
signed ou unsigned?
SOP ou POS?
ativo alto ou ativo baixo?
ns, ps, pF, fF, MHz?
LOAD ou STORE?
Moore ou Mealy?
```

---

# 8. Metas

## Meta Minima

```text
30/40
```

Competitivo, mas ainda com risco.

## Meta Boa

```text
33/40 ou 34/40
```

Voce ja esta perto disso nos simulados dificeis.

## Meta De Tranquilidade

```text
35/40
```

Esse e o alvo real.

## Meta Excelente

```text
36/40+
```

Possivel se reduzir erro de formula/unidade/leitura.

---

# 9. Checklist De Cobertura

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
- [x] Assembly basico e operandos
- [x] Formatos e modos de enderecamento
- [x] Datapath e controle

Pendente agora:

- [ ] estabilizar simulados dificeis em `85%+`;
- [ ] revisar formulas ate ficarem automaticas;
- [ ] corrigir erros recorrentes dos simulados 11 e 12;
- [ ] treinar prova misturada e com tempo.

---

# 10. Materiais Prioritarios

```text
03-simulados/resultados/revisoes/resultados-simulado-11-2026-06-11/revisao_erros.md
03-simulados/resultados/revisoes/resultados-simulado-12-2026-06-15/revisao_erros.md
06-resumos/resumos-sistemas-digitais/aula_revisao_ieee_754.md
06-resumos/resumos-sistemas-digitais/aula_revisao_asic_fpga_cpld_bitstream_hdl.md
06-resumos/resumos-sistemas-digitais/resumo_estudos_aulas_1_a_24.md
05-revisoes-e-erros/revisao_essencial_aulas_1_a_25.md
03-simulados/log_estudos_e_simulados.md
03-simulados/simulados-html/simulado_12_geral_aulas_1_a_27_nivel_prova_dificil_60_questoes.html
```

---

# 11. Regra Final

O mes extra nao deve virar relaxamento.

Tambem nao deve virar ansiedade.

Regra:

```text
simular
corrigir
refazer
revisar formula
descansar o suficiente para nao errar bobeira
```

Se mantiver esse ciclo, o adiamento melhora muito sua chance.
