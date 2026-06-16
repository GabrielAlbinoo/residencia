RESULTADO - SIMULADO 12 - GERAL AULAS 1 A 27 - NIVEL PROVA DIFICIL - SISTEMAS DIGITAIS (UFCG)
Finalizado em: 15/06/2026, 17:05:54
Tempo executado: 01:26:32
Nota: 50/60 (83%)
Respondidas: 57/60
Marcadas como não soube responder: 3

DESEMPENHO POR BLOCO
- Bloco 1 - Aulas 1 e 2 - Sistemas numericos, complemento de 2 e codigos: 5/6 (83%)
- Bloco 2 - Aulas 3 a 9 - Logica booleana, formas canonicas, Karnaugh e sintese: 9/10 (90%)
- Bloco 3 - Aulas 10, 11 e 16 - Blocos combinacionais e FSM: 6/7 (86%)
- Bloco 4 - Aulas 12 a 15 - Latches, flip-flops, registradores, contadores e temporizacao: 5/7 (71%)
- Bloco 5 - Aulas 17 a 19 - Ponto fixo/flutuante, somadores, shifter e ULA: 5/8 (63%) | Revisar: aulas/17-ponto_fixo_ponto_flutuante.md; aulas/18-somadores_half_adder_full_adder_ripple_carry.md; aulas/19-subtrator_comparador_shifter_ula.md
- Bloco 6 - Aulas 20 a 22 - MOS, CMOS, potencia, atraso, glitch e hazard: 6/8 (75%)
- Bloco 7 - Aulas 23 e 24 - Memorias e logica programavel: 7/7 (100%)
- Bloco 8 - Aulas 25 a 27 - Assembly, formatos, enderecamento, datapath e controle: 7/7 (100%)

QUESTÕES ERRADAS OU NÃO RESPONDIDAS (10)

Questão 5 - Pass transistor NMOS
Enunciado: Um NMOS usado como chave de passagem tem gate em VDD e tenta transmitir nivel alto. O problema esperado e:
Alternativas disponíveis:
- A) O nivel alto pode sair degradado, aproximadamente limitado por VDD - Vt
- B) O nivel baixo sai degradado e para em Vt
- C) Ele nunca conduz quando gate esta em VDD
- D) Ele transforma qualquer entrada em alta impedancia
- E) Ele inverte automaticamente o sinal transmitido
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Minha observação: oq exatamente é Vt?
Resposta correta: A) O nivel alto pode sair degradado, aproximadamente limitado por VDD - Vt
Explicação: NMOS passa 0 forte e 1 fraco/degradado quando usado isoladamente como chave de passagem.

Questão 27 - IEEE normalizacao menor que 1
Enunciado: Normalize 0,03125 para IEEE 754 simples. Qual expoente armazenado?
Alternativas disponíveis:
- A) 125
- B) 122
- C) 127
- D) 132
- E) 5
Minha resposta: A) 125
Resposta correta: B) 122
Explicação: 0,03125=1/32=2^-5. Normalizado: 1,0 x 2^-5. Expoente armazenado: 127-5=122.

Questão 30 - Moore versus Mealy
Enunciado: Uma saida muda imediatamente quando a entrada X muda, mesmo sem borda de clock, porque a logica de saida usa estado atual e X. Isso caracteriza:
Alternativas disponíveis:
- A) Maquina de Moore pura
- B) Maquina de Mealy
- C) Latch SR proibido
- D) Contador assincrono
- E) Registrador paralelo sem enable
Minha resposta: D) Contador assincrono
Resposta correta: B) Maquina de Mealy
Explicação: Em Mealy a saida pode depender da entrada atual. Em Moore pura, a saida depende apenas do estado.

Questão 33 - Carry lookahead conceito
Enunciado: Em um somador carry-lookahead, se para um bit Gi=AiBi e Pi=Ai xor Bi, qual expressao de carry seguinte esta correta?
Alternativas disponíveis:
- A) C_{i+1}=P_i + G_i C_i
- B) C_{i+1}=A_i + B_i + C_i
- C) C_{i+1}=G_i P_i C_i
- D) C_{i+1}=P_i xor C_i
- E) C_{i+1}=G_i + P_i C_i
Minha resposta: B) C_{i+1}=A_i + B_i + C_i
Resposta correta: E) C_{i+1}=G_i + P_i C_i
Explicação: O carry e gerado se G_i=1, ou propagado se P_i=1 e havia carry de entrada.

Questão 35 - Energia por transicao
Enunciado: Um no com C=40 fF carrega de 0 a 1,0 V. Energia aproximada retirada da fonte por carga completa em CMOS e proporcional a:
Alternativas disponíveis:
- A) 1/2 C V^2 = 20 fJ
- B) C V^2 = 40 fJ
- C) C V = 40 fC
- D) V^2/C = 25 TV^2/F
- E) 2CV^2 = 80 fJ
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Minha observação: quais equações qeu usam C??
Resposta correta: B) C V^2 = 40 fJ
Explicação: Na formula dinamica media P=alpha C V^2 f, usa-se energia por ciclo 0->1 efetiva como CV^2 retirada da fonte.

Questão 38 - Paridade e erro nao detectado
Enunciado: Um pacote usa paridade impar em 8 bits de dados. Os dados originais tinham paridade correta. Durante transmissao, dois bits de dados sao invertidos e o bit de paridade nao muda. O receptor deve concluir:
Alternativas disponíveis:
- A) O teste sempre falha, pois qualquer erro altera a paridade
- B) O receptor consegue localizar os dois bits invertidos
- C) O bit de paridade corrige automaticamente um dos erros
- D) O teste de paridade ainda pode passar, pois duas inversoes preservam a paridade
- E) A paridade impar detecta erros pares e ignora erros impares
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: D) O teste de paridade ainda pode passar, pois duas inversoes preservam a paridade
Explicação: Paridade simples detecta quantidade impar de inversoes. Duas inversoes mudam a palavra, mas preservam a paridade total.

Questão 39 - Hold com skew desfavoravel
Enunciado: Verifique hold: tCQmin=0,25 ns, tPDmin=0,55 ns, thold=0,9 ns e skew desfavoravel de 0,2 ns. Qual conclusao?
Alternativas disponíveis:
- A) Ha violacao de hold de aproximadamente 0,3 ns
- B) Nao ha violacao; sobra 0,1 ns
- C) Ha violacao de setup, nao de hold
- D) Nao ha violacao porque o periodo pode ser aumentado
- E) Ha violacao de hold de 1,7 ns
Minha resposta: B) Nao ha violacao; sobra 0,1 ns
Resposta correta: A) Ha violacao de hold de aproximadamente 0,3 ns
Explicação: Chegada minima efetiva: 0,25+0,55=0,80 ns. Com skew desfavoravel, requisito vira 0,9+0,2=1,1 ns. Falta 0,3 ns.

Questão 43 - NAND universal multinivel
Enunciado: Para implementar F=(A+B')C + DE em estrutura NAND-NAND, qual transformacao inicial e mais adequada?
Alternativas disponíveis:
- A) F = ((A+B')CDE)' e ligar tudo em serie
- B) F = ((A+B')C) + DE e usar a ultima NAND sobre os produtos negados
- C) F = (A+B'+C+D+E)' e aplicar uma NAND unica
- D) F = ((A+B')' + C')'(D'+E')
- E) F = A'B C + D'E' por DeMorgan direto
Minha resposta: D) F = ((A+B')' + C')'(D'+E')
Resposta correta: B) F = ((A+B')C) + DE e usar a ultima NAND sobre os produtos negados
Explicação: Para NAND-NAND, a forma natural e soma de produtos. Gera-se cada produto negado e a NAND final realiza a soma pelo DeMorgan.

Questão 44 - Subtracao e overflow
Enunciado: Em 4 bits complemento de 2, calcule 0110 - 1011. Qual resultado e overflow?
Alternativas disponíveis:
- A) 1011, sem overflow
- B) 1011, com overflow
- C) 0001, com overflow
- D) 1101, sem overflow
- E) 0111, com overflow
Minha resposta: D) 1101, sem overflow
Resposta correta: B) 1011, com overflow
Explicação: 0110=+6 e 1011=-5. A operacao e 6-(-5)=11, fora da faixa +7. Resultado de 4 bits fica 1011, sinal negativo, indicando overflow.

Questão 46 - Registrador bidirecional
Enunciado: Um registrador de 4 bits esta em 1010. Em um ciclo desloca para direita com entrada serial 1 no MSB. Qual conteudo final?
Alternativas disponíveis:
- A) 0101
- B) 1011
- C) 1101
- D) 1110
- E) 0010
Minha resposta: A) 0101
Minha observação: OQ é o MSB?
Resposta correta: C) 1101
Explicação: Deslocar para direita: cada bit vai para a posicao menos significativa; entra 1 no MSB. 1010 -> 1101.

QUESTÕES CORRETAS (50)
1 (Algebra booleana com consenso), 2 (Assembly fluxo com memoria), 3 (Ponto fixo Q3.4), 4 (Complemento de 2 multioperacao), 6 (MUX com funcao residual), 7 (Memoria capacidade mista), 8 (Latch D transparente), 9 (Soma ponto fixo com saturacao conceitual), 10 (DeMorgan multinivel), 11 (CMOS rede complexa), 12 (Assembly erro STW), 13 (Comparador signed unsigned), 14 (Overflow signed versus carry), 15 (JK para transicao), 16 (Banco de registradores portas), 17 (Enderecamento base offset), 18 (NAND versus AND CMOS), 19 (Canonical SOP/POS), 20 (IEEE valor codificado), 21 (ROM SRAM DRAM), 22 (Contador modulo e bits), 23 (BCD com carry decimal), 24 (FSM Mealy sobreposta), 25 (Karnaugh SOP dificil), 26 (CALL RET e fluxo), 28 (Gray em sequencia), 29 (Potencia dinamica com atividade), 31 (PROM bits de saida), 32 (Temporizacao setup com skew favoravel), 34 (Karnaugh POS com zeros), 36 (Formato opcode campos), 37 (Sintese de FSM com D), 40 (PLA versus PAL), 41 (Datapath store), 42 (Atraso RC e fanout), 45 (CPLD versus FPGA), 47 (Checksum modulo 256), 48 (Encoder prioritario com mascaramento), 49 (NOR universal e POS), 50 (Datapath branch), 51 (Shifter e multiplicacao), 52 (Hazard estatico), 53 (Decoder e enable), 54 (LUT combinacional), 55 (Divisao de frequencia cascata), 56 (ULA flags combinadas), 57 (Decoder ativo baixo), 58 (Glitch e registrador), 59 (Tri-state e barramento), 60 (XOR e paridade)

OBSERVAÇÕES EM QUESTÕES CORRETAS (11)
- Questão 4 - Complemento de 2 multioperacao: não seria -93? ficou faltanso sobar o segundo bit da esqueda para direita, não?
- Questão 13 - Comparador signed unsigned: A oq?? deveria ser A<B? pq tem varios nas opções como A apenas e não sei oq deveria ser, respondi com base nisso q era para ser A<B mas isso é um erro q deveria ter passado na correção.... e a fonte da letra A e B estão diferentes da C, D e E
- Questão 17 - Enderecamento base offset: faltou deixar claro q era com palavras de tamanho 4...
- Questão 25 - Karnaugh SOP dificil: esse era um bom exemplo em mapa de karnaugh q poderia colocar uma errada do tipo  tentar formar grupos de 2 com os por fora q eu poderia errar se não fizesse tocando as bordas inferiores e superiores sabe?
- Questão 32 - Temporizacao setup com skew favoravel: oq é o skew mesmo?
- Questão 34 - Karnaugh POS com zeros: porque na pos eu tenho que inverter osinal do mapa de karnaugh?
- Questão 37 - Sintese de FSM com D: D1 e D0 é a saida, o proximo estado né?
- Questão 45 - CPLD versus FPGA: mais um exemplo que a respota correta é a alternativa mais longa...
- Questão 47 - Checksum modulo 256: modulo 256 ele subtrai né?
- Questão 54 - LUT combinacional: 16 bits pq mesmoq  só implemente 4  nos outros casos ela tem q ternoar 0, correto o pensamento?
- Questão 57 - Decoder ativo baixo: como ela é ativa em 0 eu devo colcoar a nand nelas para ter a saida como 1 e ter positivas ou colcoar a nand nas outrs para quando estiverem desativadas não ficarem em um e sim em 0?

PEDIDO PARA REVISÃO COM IA
Analise meus erros neste simulado de Sistemas Digitais. Para cada questão errada ou não respondida, considere também as alternativas disponíveis e qualquer observação que eu tenha registrado, explique o conceito, resolva passo a passo e proponha 2 exercícios semelhantes com gabarito para eu fixar. Priorize os blocos abaixo de 70% e trate as questões marcadas como 'não soube responder' como prioridade, pois foram deixadas em branco conscientemente para evitar chute.
Salve uma cópia deste relatório completo em /03-simulados/resultados/relatorios/, dentro da minha pasta de estudos, com nome que identifique o número do simulado e a data de realização, para manter meu histórico.
Salve tudo o que eu precisarei estudar na pasta /03-simulados/resultados/revisoes/resultados-simulado-12-2026-06-15, dentro da minha pasta de estudos. Crie nessa pasta pelo menos um arquivo revisao_erros.md com o diagnóstico, as explicações, os exercícios e os gabaritos.
Atualize também o arquivo /03-simulados/log_estudos_e_simulados.md na pasta de estudos, adicionando este simulado à tabela de simulados realizados com data, horário de conclusão, tempo de execução e resultado informados neste relatório. Não altere registros anteriores.