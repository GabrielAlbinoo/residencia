/RESULTADO - SIMULADO 11 - GERAL AULAS 1 A 27 - DIFICIL - SISTEMAS DIGITAIS (UFCG)
Finalizado em: 11/06/2026, 14:21:50
Tempo executado: 03:03:38
Nota: 47/60 (78%)
Respondidas: 56/60
Marcadas como não soube responder: 4

DESEMPENHO POR BLOCO
- Bloco 1 - Aulas 1 e 2 - Sistemas numericos, complemento de 2 e codigos: 5/6 (83%)
- Bloco 2 - Aulas 3 a 9 - Logica booleana, formas canonicas, Karnaugh e sintese: 6/9 (67%) | Revisar: aulas/3-portas_logicas_operacoes_booleanas.md; aulas/4-algebra_booleana_axiomas_leis_simplificacao.md; aulas/5-demorgan_dualidade_nand_nor_simplificacao.md; aulas/6-valores_logicos_formas_canonicas_mintermos_maxtermos.md; aulas/7-mapas_karnaugh_2_3_variaveis_minimizacao_sop.md; aulas/8-mapas_karnaugh_4_variaveis_dont_care.md; aulas/9-sintese_logica_completa_sop_pos_nand_nor.md
- Bloco 3 - Aulas 10, 11 e 16 - Blocos combinacionais e FSM: 6/7 (86%)
- Bloco 4 - Aulas 12 a 15 - Latches, FFs, registradores, contadores e temporizacao: 6/7 (86%)
- Bloco 5 - Aulas 17 a 19 - Ponto fixo/flutuante, somadores, shifter e ULA: 6/7 (86%)
- Bloco 6 - Aulas 20 a 22 - MOS, CMOS, potencia, atraso, glitch e hazard: 6/8 (75%)
- Bloco 7 - Aulas 23 e 24 - Memorias e logica programavel: 6/7 (86%)
- Bloco 8 - Aulas 25 a 27 - Assembly, formatos, enderecamento, datapath e controle: 6/9 (67%) | Revisar: aulas/25-algoritmos_procedurais_assembly_basico_operandos.md; aulas/26-formatos_tipos_instrucao_modos_enderecamento.md; aulas/27-datapath_controle_processador.md

QUESTÕES ERRADAS OU NÃO RESPONDIDAS (13)

Questão 5 - Paridade e deteccao de erro
Enunciado: Uma palavra de 7 bits 1011010 usa paridade par acrescentada ao final. Depois da transmissao chega 10110101. O receptor deve concluir:
Alternativas disponíveis:
- A) A palavra recebida passa na paridade par e nenhum erro e detectado por esse criterio
- B) A palavra recebida falha, pois possui numero impar de bits 1
- C) A paridade corrige automaticamente o bit errado e recupera 10110100
- D) O erro so pode estar no bit de paridade, nunca nos dados
- E) A paridade indica exatamente a posicao do bit invertido
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) A palavra recebida passa na paridade par e nenhum erro e detectado por esse criterio
Explicação: Nos 8 bits recebidos 10110101 ha quatro bits 1, numero par. Paridade par nao detecta erro nesse caso. Ela detecta quantidade impar de inversoes, mas nao localiza nem corrige bit.

Questão 9 - Karnaugh 4 variaveis
Enunciado: Minimize a funcao do mapa de Karnaugh abaixo em SOP, usando os dont cares para obter a menor expressao.
Material apresentado:
- Mapa: linhas AB em Gray, colunas CD em Gray:
  Linhas: AB; colunas: CD
  00 | 01 | 11 | 10
  00 | 0 | 1 | 0 | 1
  01 | 0 | 1 | X | 1
  11 | 1 | 1 | X | 1
  10 | 1 | 1 | 1 | 1
Alternativas disponíveis:
- A) F = A + C'D + B'C
- B) F = A + B'D + CD'
- C) F = AB + A'C + B'D
- D) F = A + B'C' + CD
- E) F = A'B + C'D + AB'
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Minha observação: A resposta correta não seria A + CD' + C'D?
Resposta correta: B) F = A + B'D + CD'
Explicação: Os 1s e X permitem um grupo de 8 cobrindo A=1, um grupo com B=0,D=1 e outro com C=1,D=0. Assim, F=A+B'D+CD'.

Questão 10 - POS por Karnaugh
Enunciado: Uma funcao vale 0 em M(0,2,8,10) e nao possui dont care. Qual forma POS minimizada e correta?
Alternativas disponíveis:
- A) F=(B+D)
- B) F=(A+C)
- C) F=(B'+D')
- D) F=(A'+C')
- E) F=(B+C')
Minha resposta: C) F=(B'+D')
Minha observação: A resposta correta não seria B'D'? Agrupando em grupos de 8...
Resposta correta: A) F=(B+D)
Explicação: Os maxtermos 0,2,8,10 correspondem a B=0 e D=0 constantes, enquanto A e C variam. Para agrupar zeros em POS, variavel 0 entra direta: (B+D).

Questão 17 - FSM Moore
Enunciado: Uma maquina Moore tem estados S0,S1,S2, estado inicial S0, saida 1 apenas em S2. Transicoes: em S0, X=1 vai para S1, X=0 fica; em S1, X=1 vai para S2, X=0 vai para S0; em S2, X=0 vai para S1, X=1 fica. Para entrada 11010, qual sequencia de saidas apos cada borda?
Alternativas disponíveis:
- A) 0,1,1,0,1
- B) 0,0,1,0,1
- C) 1,1,0,1,0
- D) 0,1,0,1,1
- E) 0,0,0,1,0
Minha resposta: B) 0,0,1,0,1
Resposta correta: D) 0,1,0,1,1
Explicação: Comeca S0. Entrada 1 -> S1 saida 0; 1 -> S2 saida 1; 0 -> S1 saida 0; 1 -> S2 saida 1; 0 -> S1 saida 0. Isso daria 0,1,0,1,0. Correta D.

Questão 27 - Registrador de deslocamento
Enunciado: Um registrador serial-in/parallel-out de 4 bits inicia em 0000. A cada borda desloca para a esquerda e entra novo bit em Q0. Para entrada serial 1,0,1,1, qual conteudo final Q3Q2Q1Q0?
Alternativas disponíveis:
- A) 1011
- B) 1101
- C) 0110
- D) 1110
- E) 0101
Minha resposta: B) 1101
Resposta correta: A) 1011
Explicação: Deslocando para esquerda com entrada em Q0: 0001, 0010, 0101, 1011.

Questão 32 - Ripple carry multiestagio
Enunciado: Um somador ripple de 12 bits usa full adders com atraso de carry 0,9 ns por estagio e atraso final de soma 0,6 ns depois que o carry chega. Qual atraso de pior caso para o MSB?
Alternativas disponíveis:
- A) 11,4 ns
- B) 10,8 ns
- C) 12,0 ns
- D) 9,6 ns
- E) 13,2 ns
Minha resposta: B) 10,8 ns
Resposta correta: A) 11,4 ns
Explicação: O carry precisa atravessar 12 estagios ate estabilizar o caminho critico, e a soma final depende dele: 12*0,9 + 0,6 = 11,4 ns.

Questão 38 - Porta CMOS
Enunciado: Uma porta CMOS tem pull-down NMOS com A e B em paralelo, em serie com C. Que funcao a saida implementa?
Alternativas disponíveis:
- A) F=(A+B)' + C'
- B) F=(A+B)C
- C) F=(A+B+C)'
- D) F=AB+C'
- E) F=A+B+C
Minha resposta: D) F=AB+C'
Minha observação: A'B' não??
Resposta correta: A) F=(A+B)' + C'
Explicação: Pull-down conduz quando (A+B)C=1, isto e, quando F'= (A+B)C. Logo F=((A+B)C)'=(A+B)'+C'.

Questão 43 - Capacidade de memoria
Enunciado: Uma memoria possui 13 linhas de endereco e barramento de dados de 16 bits. Qual capacidade total?
Alternativas disponíveis:
- A) 16 KiB
- B) 8 KiB
- C) 32 KiB
- D) 128 Kib apenas, sem conversao para bytes
- E) 64 KiB
Minha resposta: C) 32 KiB
Minha observação: Seria 26kB não? Pq são apenas 13 registradores
Resposta correta: A) 16 KiB
Explicação: 2^13=8192 palavras. Cada palavra tem 16 bits = 2 bytes. Capacidade = 8192*2=16384 bytes=16 KiB.

Questão 54 - Datapath single-cycle
Enunciado: Em um datapath single-cycle load/store, qual conjunto de sinais e caminho e mais coerente para uma instrucao de load?
Alternativas disponíveis:
- A) ULA soma base+offset; memoria de dados e lida; write-back vem da memoria; escrita no registrador habilitada
- B) ULA subtrai dois registradores; memoria escreve; PC recebe dado da memoria; registrador destino desabilitado
- C) ULA faz AND; memoria de instrucao e escrita; branch sempre tomado
- D) Banco de registradores nao e lido; imediato vira opcode; resultado vem do PC+4
- E) Memoria de dados e escrita com o valor do registrador destino
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) ULA soma base+offset; memoria de dados e lida; write-back vem da memoria; escrita no registrador habilitada
Explicação: Load calcula endereco com ULA, le memoria de dados e escreve o dado lido no banco de registradores.

Questão 56 - Pipeline conceitual
Enunciado: Mesmo que a aula foque datapath basico, considere um processador com busca, decodificacao, execucao, memoria e write-back. Qual dependencia aparece em LDW r2,0(r1) seguido imediatamente de ADD r3,r2,r4?
Alternativas disponíveis:
- A) Dependencia de dados RAW: a ADD precisa ler r2 produzido pelo load
- B) Dependencia WAR: o load precisa ler r2 antes da ADD escrever
- C) Dependencia WAW: ambas escrevem em r2
- D) Dependencia estrutural impossivel, pois loads nao usam memoria
- E) Nenhuma dependencia, pois registradores sempre atualizam antes da proxima instrucao em qualquer projeto
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) Dependencia de dados RAW: a ADD precisa ler r2 produzido pelo load
Explicação: A instrucao ADD le r2, que sera produzido pela instrucao anterior LDW. Isso e read-after-write (RAW), tipico caso que pode exigir stall/forwarding em pipeline.

Questão 57 - Integracao assembly-memoria
Enunciado: Um vetor de palavras comeca no endereco em r1. Cada palavra tem 4 bytes. Qual instrucao carrega o terceiro elemento do vetor em r6, considerando indice humano 1,2,3?
Alternativas disponíveis:
- A) LDW r6, 8(r1)
- B) LDW r6, 3(r1)
- C) LDW r6, 12(r1)
- D) STW r6, 8(r1)
- E) LDW r1, 8(r6)
Minha resposta: C) LDW r6, 12(r1)
Resposta correta: A) LDW r6, 8(r1)
Explicação: O primeiro elemento esta no deslocamento 0, o segundo em 4, o terceiro em 8. Como e carga para r6: LDW r6, 8(r1).

Questão 58 - Karnaugh com termo isolado
Enunciado: No mapa abaixo, minimize em SOP usando os dont cares. Atenção: nem todo 1 entra em grupo grande.
Material apresentado:
- Mapa: 1 = deve cobrir; X = dont care:
  Linhas: AB; colunas: CD
  00 | 01 | 11 | 10
  00 | 0 | 1 | 1 | 1
  01 | 0 | 0 | 1 | 1
  11 | 0 | 0 | X | 1
  10 | 0 | 1 | X | 1
Alternativas disponíveis:
- A) F=A'C + B'D + ABC'
- B) F=A'C + B'D
- C) F=A'B + CD + AB'C'
- D) F=C + B'D
- E) F=A'C' + BD + ABC
Minha resposta: D) F=C + B'D
Resposta correta: A) F=A'C + B'D + ABC'
Explicação: Ha grupos grandes para A'C e B'D, mas sobra cobertura especifica exigindo termo menor ABC'. Essa e uma questao para evitar o vicio de procurar so grupos obvios.

Questão 59 - Potencia e temporizacao integradas
Enunciado: Um bloco combinacional tem atraso critico de 7,5 ns. Registradores ao redor somam tCQmax+tsetup=1,5 ns. O bloco opera em V=1,0 V, C=120 pF, α=0,2. Se o clock for ajustado para o maior valor seguro de setup, qual potencia dinamica aproximada?
Alternativas disponíveis:
- A) 2,67 mW
- B) 24,0 mW
- C) 1,33 mW
- D) 13,3 mW
- E) 0,267 mW
Minha resposta: C) 1,33 mW
Resposta correta: A) 2,67 mW
Explicação: Periodo minimo: 7,5+1,5=9,0 ns, entao f≈111,1 MHz. Potencia: 0,2*120e-12*1^2*111,1e6≈2,67 mW.

QUESTÕES CORRETAS (47)
1 (Complemento de 2 e overflow), 2 (Subtracao binaria), 3 (BCD e correcao), 4 (Codigo Gray), 6 (Faixa de representacao), 7 (DeMorgan e simplificacao), 8 (Forma canonica), 11 (Implementacao NAND), 12 (Hazard por consenso booleano), 13 (Expressao de circuito), 14 (Decoder e mintermos), 15 (MUX multiestagio), 16 (Comparador e prioridade), 18 (FSM Mealy), 19 (Sintese FSM com FF D), 20 (Encoder de prioridade), 21 (Demux e decodificacao), 22 (Latch SR), 23 (FF T com FF D), 24 (Contador sincrono), 25 (Temporizacao setup), 26 (Temporizacao hold), 28 (Frequencia de contador ripple), 29 (Ponto fixo), 30 (IEEE 754 simples), 31 (Normalizacao IEEE), 33 (Subtrator e flags), 34 (Shifter aritmetico), 35 (ULA e controle), 36 (NMOS/PMOS e nivel forte/fraco), 37 (CMOS dual), 39 (Potencia dinamica multiestagio), 40 (Energia e frequencia), 41 (Caminho critico combinacional), 42 (Glitch e hazard), 44 (Banco de registradores), 45 (SRAM versus DRAM), 46 (PROM como tabela verdade), 47 (PLA PAL PROM), 48 (PAL com OR fixo), 49 (LUT em FPGA), 50 (Assembly load/store), 51 (Assembly chamada de funcao), 52 (Modos de enderecamento), 53 (Formato de instrucao), 55 (Branch e controle), 60 (Datapath com sequencia de instrucoes)

OBSERVAÇÕES EM QUESTÕES CORRETAS (1)
- Questão 13 - Expressao de circuito: A' + B + C', não?

PEDIDO PARA REVISÃO COM IA
Analise meus erros neste simulado de Sistemas Digitais. Para cada questão errada ou não respondida, considere também as alternativas disponíveis e qualquer observação que eu tenha registrado, explique o conceito, resolva passo a passo e proponha 2 exercícios semelhantes com gabarito para eu fixar. Priorize os blocos abaixo de 70% e trate as questões marcadas como 'não soube responder' como prioridade, pois foram deixadas em branco conscientemente para evitar chute.
Salve uma cópia deste relatório completo na pasta /resultados_simulados, dentro da minha pasta de estudos, com nome que identifique o número do simulado e a data de realização, para manter meu histórico.
Salve tudo o que eu precisarei estudar na pasta /resultados-simulado-11-2026-06-11, dentro da minha pasta de estudos. Crie nessa pasta pelo menos um arquivo revisao_erros.md com o diagnóstico, as explicações, os exercícios e os gabaritos.
Atualize também o arquivo /log_estudos_e_simulados.md na pasta de estudos, adicionando este simulado à tabela de simulados realizados com data, horário de conclusão, tempo de execução e resultado informados neste relatório. Não altere registros anteriores.