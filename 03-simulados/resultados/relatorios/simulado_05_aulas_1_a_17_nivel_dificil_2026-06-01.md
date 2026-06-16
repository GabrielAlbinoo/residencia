RESULTADO - SIMULADO 05 - AULAS 1 A 17 - NÍVEL DIFÍCIL - SISTEMAS DIGITAIS (UFCG)
Finalizado em: 01/06/2026, 16:34:03
Tempo executado: 01:11:26
Nota: 44/50 (88%)
Respondidas: 45/50
Marcadas como não soube responder: 5

DESEMPENHO POR BLOCO
- Bloco 1 - Aulas 1 e 2 - Sistemas numéricos, complemento de 2, códigos e checksum: 5/5 (100%)
- Bloco 2 - Aulas 3 a 5 - Portas, álgebra booleana, DeMorgan, dualidade, NAND e NOR: 5/5 (100%)
- Bloco 3 - Aula 6 - Valores lógicos, mintermos, maxtermos, SOP e POS: 5/5 (100%)
- Bloco 4 - Aulas 7 e 8 - Mapas de Karnaugh, POS e dont care: 5/5 (100%)
- Bloco 5 - Aula 9 - Síntese lógica com SOP, POS, NAND e NOR: 4/5 (80%)
- Bloco 6 - Aula 10 - MUX, DEMUX, decoder, encoder e comparador: 3/5 (60%) | Revisar: aulas/10-mux_demux_decoder_encoder_comparador_blocos_combinacionais.md
- Bloco 7 - Aula 11 - FSM, Moore e Mealy: 5/5 (100%)
- Bloco 8 - Aulas 12 a 14 - Latches, flip-flops, registradores e contadores: 5/5 (100%)
- Bloco 9 - Aulas 15 e 16 - Temporização sequencial e síntese de FSM: 4/5 (80%)
- Bloco 10 - Aula 17 - Ponto fixo e ponto flutuante: 3/5 (60%) | Revisar: aulas/17-ponto_fixo_ponto_flutuante.md

QUESTÕES ERRADAS OU NÃO RESPONDIDAS (6)

Questão 25 - Implementação com decoder ativo alto
Enunciado: Usando um decoder 3:8 ativo alto com saídas Y0 a Y7, como implementar F(A,B,C)=Σm(1,2,6,7)?
Alternativas disponíveis:
- A) Fazer OR de Y1, Y2, Y6, Y7
- B) Fazer AND de Y1, Y2, Y6, Y7
- C) Fazer OR de Y0, Y3, Y4, Y5
- D) Usar apenas Y7, pois é o maior mintermo
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) Fazer OR de Y1, Y2, Y6, Y7
Explicação: Cada saída ativa alta do decoder representa um mintermo. Para uma função em Σm, basta somar logicamente as saídas correspondentes aos mintermos em que F=1.

Questão 26 - Encoder prioritário e sinal válido
Enunciado: Em um encoder prioritário 4:2, a prioridade é D3 > D2 > D1 > D0. Se D3=0, D2=1, D1=1 e D0=1, qual deve ser a saída binária e o sinal de válido?
Alternativas disponíveis:
- A) 01 e válido 1
- B) 00 e válido 1
- C) 10 e válido 1
- D) 11 e válido 0
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: C) 10 e válido 1
Explicação: Mesmo com D1 e D0 ativos, a entrada ativa de maior prioridade é D2. O código de 2 é 10, e existe entrada ativa, então válido é 1.

Questão 27 - DEMUX ativo alto
Enunciado: Um DEMUX 1:4 ativo alto recebe D=1 e seletores S1S0=10. Qual conjunto de saídas está correto?
Alternativas disponíveis:
- A) Y0=1, Y1=0, Y2=0, Y3=0
- B) Y0=0, Y1=1, Y2=0, Y3=0
- C) Y0=0, Y1=0, Y2=1, Y3=0
- D) Y0=0, Y1=0, Y2=0, Y3=1
Minha resposta: B) Y0=0, Y1=1, Y2=0, Y3=0
Resposta correta: C) Y0=0, Y1=0, Y2=1, Y3=0
Explicação: O seletor 10₂ corresponde ao índice 2. Como D=1, a saída selecionada Y2 recebe 1; as demais ficam 0.

Questão 44 - Síntese de FSM com flip-flops D
Enunciado: Uma FSM usa estados codificados por Q1Q0, entrada X e apenas os estados usados 00, 01 e 10; 11 é dont care. A tabela abaixo mostra o próximo estado. Quais equações são válidas para flip-flops D?
Material apresentado:
- Tabela de transição:
  Q1Q0 | X=0 | X=1 | Z
  00 | 00 | 01 | 0
  01 | 10 | 01 | 0
  10 | 00 | 01 | 1
  11 | d | d | d
Alternativas disponíveis:
- A) D1=Q0X', D0=X, Z=Q1
- B) D1=Q1X, D0=Q0', Z=Q0
- C) D1=Q0+X, D0=X', Z=Q1Q0
- D) D1=Q1'Q0X, D0=Q1, Z=X
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) D1=Q0X', D0=X, Z=Q1
Explicação: Para flip-flop D, D=Q+. O bit Q0+ vale 1 sempre que X=1, então D0=X. O bit Q1+ vale 1 em Q0=1 e X=0, usando 11 como dont care: D1=Q0X'. A saída vale 1 no estado 10; com 11 como dont care, Z=Q1.

Questão 48 - Escala e resolução em ponto fixo
Enunciado: No formato Q3.5, qual é a escala e qual é a resolução?
Alternativas disponíveis:
- A) Escala 32 e resolução 1/32 = 0,03125
- B) Escala 8 e resolução 1/8 = 0,125
- C) Escala 5 e resolução 0,2
- D) Escala 3 e resolução 1/3
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) Escala 32 e resolução 1/32 = 0,03125
Explicação: Em Qm.n, a escala é 2^n. Para Q3.5, há 5 bits fracionários: escala 2^5=32. A resolução é o menor passo: 1/32=0,03125.

Questão 50 - Normalização em ponto flutuante
Enunciado: O número decimal 13,25 em binário é 1101,01₂. Qual forma normalizada e qual expoente armazenado em IEEE 754 simples estão corretos?
Alternativas disponíveis:
- A) 1,10101₂ × 2³; expoente armazenado 130 ou 10000010₂
- B) 1,10101₂ × 2²; expoente armazenado 129 ou 10000001₂
- C) 0,110101₂ × 2⁴; expoente armazenado 131 ou 10000011₂
- D) 1,10101₂ × 2³; expoente armazenado 3 ou 00000011₂
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) 1,10101₂ × 2³; expoente armazenado 130 ou 10000010₂
Explicação: 1101,01₂ normalizado fica 1,10101₂ × 2³. No IEEE 754 simples, o bias é 127; logo o expoente armazenado é 127+3=130, isto é, 10000010₂.

QUESTÕES CORRETAS (44)
1 (Soma hexadecimal em complemento de 2, carry e overflow), 2 (Extensão de sinal em complemento de 2), 3 (Soma BCD com correção), 4 (Conversão binário para Gray), 5 (Checksum aditivo módulo 256), 6 (Simplificação algébrica com complemento), 7 (Teorema do consenso em SOP), 8 (DeMorgan em expressão com níveis internos), 9 (XOR usando apenas NAND), 10 (Dualidade em álgebra booleana), 11 (Relação entre sigma de mintermos e pi de maxtermos), 12 (Maxtermo de quatro variáveis), 13 (Conversão de Pi para Sigma), 14 (Da POS para mintermos), 15 (Dont care em forma canônica), 16 (Mapa de Karnaugh de três variáveis em SOP), 17 (Mapa de Karnaugh de três variáveis em POS), 18 (Quarteto nos cantos de mapa de quatro variáveis), 19 (Minimização com dont care em mapa de três variáveis), 20 (Oitava em mapa de quatro variáveis pelas bordas), 21 (Implementação NAND-NAND a partir de SOP), 22 (Implementação NOR-NOR a partir de POS), 23 (Da especificação POS ao circuito NOR), 24 (Implementação de função com MUX 4:1), 28 (Comparação com e sem sinal), 29 (Paridade com XOR e XNOR), 30 (Contenção em barramento tri-state), 31 (Identificação de máquina de Moore), 32 (Identificação de máquina de Mealy), 33 (Rastreamento de FSM Mealy), 34 (Codificação de estados), 35 (Diferença prática entre Moore e Mealy), 36 (Latch SR com NOR ativo alto), 37 (Condição proibida em latches SR), 38 (Latch D e transparência), 39 (Flip-flop JK em modo toggle), 40 (Contador síncrono com flip-flops T), 41 (Setup time, caminho crítico e frequência máxima), 42 (Verificação de hold time), 43 (Violação de hold e correção por atraso), 45 (Síntese de contador como FSM com flip-flops D), 46 (Leitura de número em ponto fixo Q4.4), 47 (Ponto fixo com sinal em complemento de 2), 49 (Armazenamento de valor real em Q4.4)

OBSERVAÇÕES EM QUESTÕES CORRETAS (2)
- Questão 3 - Soma BCD com correção: somei os decimais para depois converter, album problema?
- Questão 7 - Teorema do consenso em SOP: PORQUE EATAMENTE ELE ´O TERMO DE CONSENSO?

PEDIDO PARA REVISÃO COM IA
Analise meus erros neste simulado de Sistemas Digitais. Para cada questão errada ou não respondida, considere também as alternativas disponíveis e qualquer observação que eu tenha registrado, explique o conceito, resolva passo a passo e proponha 2 exercícios semelhantes com gabarito para eu fixar. Priorize os blocos abaixo de 70% e trate as questões marcadas como 'não soube responder' como prioridade, pois foram deixadas em branco conscientemente para evitar chute.
Salve uma cópia deste relatório completo em /03-simulados/resultados/relatorios/, dentro da minha pasta de estudos, com nome que identifique o número do simulado e a data de realização, para manter meu histórico.
Salve tudo o que eu precisarei estudar na pasta /03-simulados/resultados/revisoes/resultados-simulado-05-2026-06-01, dentro da minha pasta de estudos. Crie nessa pasta pelo menos um arquivo revisao_erros.md com o diagnóstico, as explicações, os exercícios e os gabaritos.
Atualize também o arquivo /03-simulados/log_estudos_e_simulados.md na pasta de estudos, adicionando este simulado à tabela de simulados realizados com data, horário de conclusão, tempo de execução e resultado informados neste relatório. Não altere registros anteriores.