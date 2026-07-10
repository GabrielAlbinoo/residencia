RESULTADO - SIMULADO 14 - GERAL AULAS 1 A 27 - EXTREMO - SISTEMAS DIGITAIS (UFCG)
Finalizado em: 10/07/2026, 15:21:21
Tempo executado: 01:09:13
Nota: 39/50 (78%)
Respondidas: 43/50
Marcadas como não soube responder: 6

DESEMPENHO POR BLOCO
- Bloco 1 - Aulas 1 e 2 - Sistemas numéricos, complemento de 2 e códigos: 6/7 (86%)
- Bloco 2 - Aulas 3 a 9 - Lógica booleana, formas canônicas, Karnaugh e síntese: 6/6 (100%)
- Bloco 3 - Aulas 10, 11 e 16 - Blocos combinacionais e FSM: 7/7 (100%)
- Bloco 4 - Aulas 12 a 15 - Latches, flip-flops, registradores, contadores e temporização: 4/6 (67%) | Revisar: 08-aulas/aulas-md/12-estabilidade_latch_sr_latch_d.md; 08-aulas/aulas-md/13-flip_flops_registradores.md; 08-aulas/aulas-md/14-contadores_assincronos_sincronos_divisao_frequencia.md; 08-aulas/aulas-md/15-temporizacao_sequencial_setup_hold_caminho_critico.md
- Bloco 5 - Aulas 17 a 19 - Ponto fixo/flutuante, somadores, shifter e ULA: 3/5 (60%) | Revisar: 08-aulas/aulas-md/17-ponto_fixo_ponto_flutuante.md; 08-aulas/aulas-md/18-somadores_half_adder_full_adder_ripple_carry.md; 08-aulas/aulas-md/19-subtrator_comparador_shifter_ula.md
- Bloco 6 - Aulas 20 a 22 - MOS, CMOS, potência, atraso, glitch e hazard: 3/5 (60%) | Revisar: 08-aulas/aulas-md/20-fisica_basica_transistores_mos.md; 08-aulas/aulas-md/21-cmos_combinacional.md; 08-aulas/aulas-md/22-potencia_atraso_caminho_critico_hazards.md
- Bloco 7 - Aulas 23 e 24 - Memórias e lógica programável: 6/6 (100%)
- Bloco 8 - Aulas 25 a 27 - Assembly, formatos, endereçamento, datapath e controle: 4/8 (50%) | Revisar: 08-aulas/aulas-md/25-algoritmos_procedurais_assembly_basico_operandos.md; 08-aulas/aulas-md/26-formatos_tipos_instrucao_modos_enderecamento.md; 08-aulas/aulas-md/27-datapath_controle_processador.md

QUESTÕES ERRADAS OU NÃO RESPONDIDAS (11)

Questão 4 - Checksum de 8 bits e paridade
Enunciado: Três bytes de dados são 3A, C5 e 10. Deseja-se acrescentar um byte de checksum para que a soma de todos os bytes, módulo 256, seja zero. Também será acrescentado um bit de paridade par ao byte de checksum. Qual alternativa está correta?
Alternativas disponíveis:
- A) Checksum 0F e bit de paridade 0
- B) Checksum F1 e bit de paridade 1
- C) Checksum F0 e bit de paridade 0
- D) Checksum 0F e bit de paridade 1
- E) Checksum F1 e bit de paridade 0
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Minha observação: Converti todos para decimal e soma já dava 271, não soube oq fazer depois
Resposta correta: B) Checksum F1 e bit de paridade 1
Explicação: 0x3A + 0xC5 + 0x10 = 0x10F, cujo byte baixo é 0x0F. O complemento módulo 256 é 0xF1. F1 = 11110001 tem 5 bits 1, então a paridade par exige bit extra 1.

Questão 18 - Setup, hold e skew negativo
Enunciado: Um caminho entre flip-flops tem tCQmax=0,8 ns, tPDmax=6,4 ns, tsetup=0,9 ns, tCQmin=0,2 ns, tPDmin=0,5 ns, thold=0,4 ns. O clock chega 0,3 ns mais cedo no destino do que na origem. Qual conclusão está correta?
Alternativas disponíveis:
- A) Tclk mínimo=8,4 ns e não há violação de hold.
- B) Tclk mínimo=7,8 ns e há violação de hold.
- C) Tclk mínimo=7,8 ns e não há violação de hold.
- D) Tclk mínimo=8,4 ns e há violação de hold.
- E) O skew negativo ajuda setup e piora hold, então não é possível calcular sem duty cycle.
Minha resposta: C) Tclk mínimo=7,8 ns e não há violação de hold.
Minha observação: Skewnegativo subtrai nos dois ou subtrai no hold e soma no setup?
Resposta correta: A) Tclk mínimo=8,4 ns e não há violação de hold.
Explicação: Usando skew = destino - origem = -0,3 ns: setup exige Tclk >= 0,8+6,4+0,9-(-0,3)=8,4 ns. Hold: 0,2+0,5 >= 0,4+(-0,3), isto é 0,7>=0,1, sem violação.

Questão 20 - Registrador de deslocamento PISO
Enunciado: Um registrador PISO de 4 bits carrega paralelamente 1011. Em seguida, desloca à direita e a saída serial é o bit menos significativo antes de cada deslocamento. Qual sequência serial é observada?
Alternativas disponíveis:
- A) 1011
- B) 0101
- C) 1100
- D) 1101
- E) 0011
Minha resposta: B) 0101
Resposta correta: D) 1101
Explicação: Carregado como Q3Q2Q1Q0=1011, a saída em Q0 produz primeiro 1, depois 1, depois 0, depois 1. Logo, 1101.

Questão 23 - Atraso de ripple-carry
Enunciado: Um somador ripple-carry de 16 bits tem atraso de propagação do carry de 120 ps por full adder. O bit de soma de um estágio fica válido 180 ps após a chegada do carry daquele estágio. Qual é o pior atraso aproximado para que todas as somas estejam válidas?
Alternativas disponíveis:
- A) 1,80 ns
- B) 1,98 ns
- C) 1,92 ns
- D) 3,00 ns
- E) 0,30 ns
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: B) 1,98 ns
Explicação: O pior bit de soma é o mais significativo. O carry precisa atravessar os 15 estágios anteriores: 15*120 ps = 1800 ps. Depois, a soma final demora mais 180 ps. Total: 1980 ps = 1,98 ns.

Questão 24 - Subtração, flags signed e unsigned
Enunciado: Em uma ULA de 4 bits, calcula-se 0011 - 0101 usando complemento de 2. Qual conjunto de resultado e flags é coerente? Considere C=1 como ausência de borrow em subtração unsigned.
Alternativas disponíveis:
- A) Resultado 1110, C=1, V=1, N=1, Z=0
- B) Resultado 0010, C=0, V=0, N=0, Z=0
- C) Resultado 1110, C=1, V=0, N=1, Z=0
- D) Resultado 1010, C=0, V=1, N=1, Z=0
- E) Resultado 1110, C=0, V=0, N=1, Z=0
Minha resposta: C) Resultado 1110, C=1, V=0, N=1, Z=0
Resposta correta: E) Resultado 1110, C=0, V=0, N=1, Z=0
Explicação: 3 - 5 = -2, que em 4 bits é 1110. Como unsigned, 3 é menor que 5, então há borrow e C=0. Não há overflow signed, pois 3 - 5 = -2 cabe na faixa. N=1 e Z=0.

Questão 26 - CMOS por rede pull-down
Enunciado: A rede pull-down de uma porta CMOS tem um transistor nMOS controlado por A em série com um paralelo de nMOS controlados por B e C. Qual é a função de saída F?
Alternativas disponíveis:
- A) F=A(B+C)
- B) F=A' + B'C'
- C) F=A'B + C'
- D) F=(A+B)C
- E) F=AB + AC
Minha resposta: A) F=A(B+C)
Resposta correta: B) F=A' + B'C'
Explicação: A rede pull-down conduz quando A(B+C) é 1. Em CMOS estático, a saída é o complemento da condição de condução do pull-down: F=(A(B+C))'=A' + B'C'.

Questão 29 - Energia de carga de capacitor
Enunciado: Um nó capacitivo de 4 pF é carregado de 0 até 1,2 V a partir de uma fonte ideal. Quais são, respectivamente, a energia armazenada no capacitor e a energia retirada da fonte?
Alternativas disponíveis:
- A) 5,76 pJ e 5,76 pJ
- B) 2,40 pJ e 4,80 pJ
- C) 2,88 pJ e 5,76 pJ
- D) 5,76 pJ e 2,88 pJ
- E) 1,44 pJ e 2,88 pJ
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: C) 2,88 pJ e 5,76 pJ
Explicação: A energia armazenada é 1/2 CV² = 0,5*4pF*1,44 = 2,88pJ. A fonte fornece CV² = 5,76pJ; a outra metade é dissipada no carregamento.

Questão 37 - Branch condicional e flags
Enunciado: Após uma instrução CMP R2, #0, qual condição faz um BEQ alvo ser tomado em uma arquitetura no estilo ARM?
Alternativas disponíveis:
- A) Quando o carry está limpo, indicando borrow.
- B) Quando o resultado da comparação é negativo.
- C) Quando o overflow está ativo.
- D) Quando R2 é diferente de zero.
- E) Quando a flag Z fica em 1.
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Minha observação: Não vi esse formato de instruções
Resposta correta: E) Quando a flag Z fica em 1.
Explicação: CMP R2,#0 compara por subtração e atualiza flags. BEQ desvia quando o resultado é igual, isto é, quando a flag zero Z=1.

Questão 38 - Endereçamento base + índice escalado
Enunciado: Um processador usa endereçamento byte-addressable. Se R4=0x1000 é a base de um vetor de words de 32 bits e R1=5 é o índice, qual endereço é acessado por uma carga equivalente a [R4 + R1<<2]?
Alternativas disponíveis:
- A) 0x1005
- B) 0x1008
- C) 0x1014
- D) 0x1020
- E) 0x1010
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Minha observação: Oq significa <<2??
Resposta correta: C) 0x1014
Explicação: Words de 32 bits têm 4 bytes. O deslocamento é 5*4=20 bytes, ou 0x14. Endereço: 0x1000 + 0x14 = 0x1014.

Questão 41 - Pipeline e hazard load-use
Enunciado: Em um pipeline clássico de 5 estágios com forwarding para resultados de ALU, considere: LW R1,0(R2) seguido imediatamente de ADD R3,R1,R4. Qual alternativa é mais provável?
Alternativas disponíveis:
- A) Não há dependência, pois LW só usa memória.
- B) Há hazard load-use; normalmente é necessário um stall mesmo com forwarding comum.
- C) Há apenas hazard estrutural no banco de registradores, nunca dependência de dados.
- D) O forwarding de EX para EX sempre resolve sem stall porque o dado do load nasce no início de EX.
- E) É um hazard de controle, pois ADD altera o PC.
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: B) Há hazard load-use; normalmente é necessário um stall mesmo com forwarding comum.
Explicação: A ADD precisa de R1 logo após o LOAD. Em pipeline clássico, o dado do load só fica disponível após o acesso à memória, tarde demais para a EX da instrução seguinte sem uma bolha/stall.

Questão 42 - Formato de instrução e deslocamento
Enunciado: Um branch usa um campo imediato signed de 12 bits que representa deslocamento em palavras de 4 bytes, somado ao PC após deslocamento à esquerda de 2 bits. Qual é o intervalo aproximado de deslocamento em bytes?
Alternativas disponíveis:
- A) De -2048 a +2047 bytes
- B) De -4096 a +4095 bytes
- C) De -8192 a +8188 bytes
- D) De 0 a +16383 bytes
- E) De -2048 a +2048 palavras de 8 bytes
Minha resposta: Não respondida
Resposta correta: C) De -8192 a +8188 bytes
Explicação: Um signed de 12 bits vai de -2048 a +2047. Como representa palavras de 4 bytes, multiplica por 4: de -8192 a +8188 bytes.

QUESTÕES CORRETAS (39)
1 (Soma em complemento de 2, carry-out e overflow signed), 2 (Soma BCD com correção por dígito), 3 (Código Gray e conversão com próximo valor), 5 (Tri-state, Z e contenção), 6 (DeMorgan em expressão multinível), 7 (POS por maxtermos), 8 (Karnaugh com don't care), 9 (Implementação NAND), 10 (Hazard estático e consenso), 11 (Decoder ativo baixo), 12 (MUX implementando função), 13 (Comparação signed e unsigned), 14 (Mealy com sobreposição), 15 (Equação D a partir de tabela de próximo estado), 16 (Latch D transparente), 17 (Flip-flop JK), 19 (Ring, Johnson e estados úteis), 21 (Ponto fixo signed e overflow), 22 (IEEE 754 normalizado), 25 (Shift aritmético e lógico), 27 (MOS como chave e nível forte/fraco), 28 (Potência dinâmica com comparação), 30 (Hazard e termo de consenso), 31 (Capacidade de memória), 32 (SRAM e DRAM), 33 (PROM, PLA e PAL), 34 (LUT e bits de configuração), 35 (CPLD, FPGA e glue logic), 36 (Assembly, laço e flags), 39 (Sinais de controle em LOAD), 40 (Datapath de branch), 43 (Etapas clássicas de execução), 44 (Excess-3 e complemento de 9), 45 (Sinal ativo baixo em decoder), 46 (POS com agrupamento de zeros), 47 (ASCII, bits e paridade), 48 (Moore e Mealy), 49 (Correção de violação de hold), 50 (Controle, LUT, PLA e implementação física)

OBSERVAÇÕES EM QUESTÕES CORRETAS (10)
- Questão 11 - Decoder ativo baixo: EN_n quer dizer que se for 1 ele ativa baixo e quando for 0 ele tá desativado?
- Questão 13 - Comparação signed e unsigned: Alternativas bugadas
- Questão 21 - Ponto fixo signed e overflow: Como é um formato 3.4 mas com 8 bits???
- Questão 33 - PROM, PLA e PAL: Como assim costuma? Não é algo fixo???
- Questão 36 - Assembly, laço e flags: Mas no bne ele tá verificando oq??? Q notação é essa toda diferente???
- Questão 45 - Sinal ativo baixo em decoder: Mesma duvida do _n
- Questão 47 - ASCII, bits e paridade: Explique essa questão
- Questão 48 - Moore e Mealy: Nenhuma FSM pode mudar saída sem trocar estado.

Sobre isso, fale mais pq tá errada
- Questão 49 - Correção de violação de hold: \Expliqu melhor a resposta
- Questão 50 - Controle, LUT, PLA e implementação física: Respostas muito grandes geralmente são as corretas.... não quero isso

PEDIDO PARA REVISÃO COM IA
Analise meus erros neste simulado de Sistemas Digitais. Para cada questão errada ou não respondida, considere também as alternativas disponíveis e qualquer observação que eu tenha registrado, explique o conceito, resolva passo a passo e proponha 2 exercícios semelhantes com gabarito para eu fixar. Priorize os blocos abaixo de 70% e trate as questões marcadas como 'não soube responder' como prioridade, pois foram deixadas em branco conscientemente para evitar chute.
Salve uma cópia deste relatório completo em C:/Users/gabrieloliveira/Documents/pessoal/estudos/residencia/03-simulados/resultados/relatorios/, com nome que identifique o número do simulado e a data de realização, para manter meu histórico.
Salve tudo o que eu precisarei estudar na pasta C:/Users/gabrieloliveira/Documents/pessoal/estudos/residencia/03-simulados/resultados/revisoes/resultados-simulado-14-2026-07-10. Crie nessa pasta pelo menos um arquivo revisao_erros.md com o diagnóstico, as explicações, os exercícios e os gabaritos.
Atualize também o arquivo C:/Users/gabrieloliveira/Documents/pessoal/estudos/residencia/03-simulados/log_estudos_e_simulados.md, adicionando este simulado à tabela de simulados realizados com data, horário de conclusão, tempo de execução e resultado informados neste relatório. Não altere registros anteriores.