RESULTADO - SIMULADO 06 - AULAS 1 A 17 - NÍVEL PROVA REAL - SISTEMAS DIGITAIS (UFCG)
Finalizado em: 02/06/2026, 14:24:47
Tempo executado: 01:05:57
Nota: 44/50 (88%)
Respondidas: 46/50
Marcadas como não soube responder: 4

DESEMPENHO POR BLOCO
- Bloco 1 - Blocos por índice binário - decoder, DEMUX, encoder e comparador: 5/5 (100%)
- Bloco 2 - MUX, decoder e implementação de funções: 5/5 (100%)
- Bloco 3 - FSM Moore, Mealy, rastreamento e identificação: 4/5 (80%)
- Bloco 4 - Síntese de FSM com flip-flops D: 4/5 (80%)
- Bloco 5 - Ponto fixo - escala, resolução e representação: 4/5 (80%)
- Bloco 6 - Ponto flutuante - normalização, bias e interpretação: 2/5 (40%) | Revisar: aulas/17-ponto_fixo_ponto_flutuante.md
- Bloco 7 - Temporização, contadores, latches e flip-flops: 5/5 (100%)
- Bloco 8 - Karnaugh, dont care e síntese NAND/NOR: 5/5 (100%)
- Bloco 9 - Álgebra booleana, DeMorgan, consenso e circuitos universais: 5/5 (100%)
- Bloco 10 - Fundamentos com pegadinhas - BCD, checksum, overflow, tri-state e paridade: 5/5 (100%)

QUESTÕES ERRADAS OU NÃO RESPONDIDAS (6)

Questão 13 - Diferença entre Moore e Mealy
Enunciado: Assinale a alternativa incorreta sobre máquinas de Moore e Mealy.
Alternativas disponíveis:
- A) Em Moore, a saída é associada ao estado.
- B) Em Mealy, a saída pode depender do estado atual e da entrada.
- C) Uma máquina Mealy pode responder à entrada decisiva no mesmo ciclo lógico da transição.
- D) Em Moore, a saída muda dentro do mesmo estado apenas porque a entrada mudou.
Minha resposta: B) Em Mealy, a saída pode depender do estado atual e da entrada.
Resposta correta: D) Em Moore, a saída muda dentro do mesmo estado apenas porque a entrada mudou.
Explicação: Em Moore, a saída é fixa para cada estado. Se a saída muda dentro do mesmo estado conforme a entrada, isso caracteriza Mealy.

Questão 18 - Regra de síntese com flip-flop D
Enunciado: Assinale a alternativa incorreta sobre síntese de FSM com flip-flops D.
Alternativas disponíveis:
- A) A entrada D de cada flip-flop deve receber o próximo valor daquele bit de estado.
- B) Em flip-flop D, a equação de entrada é sempre D=Q, pois o flip-flop mantém o estado atual.
- C) Estados não usados podem ser tratados como dont care quando o enunciado permitir.
- D) Em uma máquina Moore, a saída pode ser simplificada a partir dos bits de estado.
Minha resposta: A) A entrada D de cada flip-flop deve receber o próximo valor daquele bit de estado.
Resposta correta: B) Em flip-flop D, a equação de entrada é sempre D=Q, pois o flip-flop mantém o estado atual.
Explicação: A regra de síntese é D=Q+, não D=Q. Q é estado atual; Q+ é próximo estado.

Questão 23 - Escala e resolução em Qm.n
Enunciado: Assinale a alternativa incorreta sobre o formato Qm.n.
Alternativas disponíveis:
- A) A escala é 2^m, pois m é a quantidade de bits inteiros.
- B) A resolução é 1/2^n.
- C) O valor real pode ser lido como inteiro armazenado / 2^n.
- D) Mais bits fracionários reduzem o tamanho do passo representável.
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) A escala é 2^m, pois m é a quantidade de bits inteiros.
Explicação: A escala depende dos bits fracionários, não dos bits inteiros. Em Qm.n, a escala é 2^n e a resolução é 1/2^n.

Questão 27 - Expoente com bias em IEEE 754 simples
Enunciado: 5,75₁₀ em binário é 101,11₂. Em IEEE 754 simples, qual normalização e expoente armazenado estão corretos?
Alternativas disponíveis:
- A) 1,0111₂ × 2²; expoente armazenado 129
- B) 1,0111₂ × 2³; expoente armazenado 130
- C) 1,0111₂ × 2²; expoente armazenado 2
- D) 0,10111₂ × 2³; expoente armazenado 130
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) 1,0111₂ × 2²; expoente armazenado 129
Explicação: 101,11₂ = 1,0111₂ × 2². Em IEEE 754 simples, o bias é 127. Logo, o expoente armazenado é 127+2=129.

Questão 28 - Conceitos de IEEE 754 simples
Enunciado: Assinale a alternativa incorreta sobre IEEE 754 simples para números normalizados.
Alternativas disponíveis:
- A) O bit de sinal indica se o número é positivo ou negativo.
- B) O expoente armazenado usa bias.
- C) O bit 1 antes da vírgula é armazenado explicitamente na fração.
- D) A fração armazena os bits após o 1, da forma normalizada.
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: C) O bit 1 antes da vírgula é armazenado explicitamente na fração.
Explicação: Em números normalizados no IEEE 754, o 1 antes da vírgula é implícito; ele não é armazenado explicitamente no campo da fração.

Questão 30 - Expoente armazenado e expoente real
Enunciado: Em IEEE 754 simples, o campo de expoente armazenado é 10000101₂. Qual é o expoente real?
Alternativas disponíveis:
- A) 133
- B) 5
- C) 127
- D) 6
Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.
Resposta correta: D) 6
Explicação: 10000101₂ = 133. Em IEEE 754 simples, o bias é 127. Expoente real: 133-127=6.

QUESTÕES CORRETAS (44)
1 (Decoder ativo alto e função por mintermos), 2 (DEMUX 1:8 e contagem de índice começando em zero), 3 (Encoder prioritário 8:3 com válido), 4 (Conceitos de decoder, DEMUX e encoder), 5 (Comparador com interpretação signed e unsigned), 6 (MUX 4:1 com variável restante), 7 (Erro comum em MUX 4:1), 8 (MUX 8:1 com quatro variáveis), 9 (Decoder 2:4 e função XOR), 10 (Implementação com decoder ativo alto), 11 (Rastreamento de FSM Mealy), 12 (Rastreamento de FSM Moore), 14 (Identificação de Mealy por tabela), 15 (Quantidade de bits de estado), 16 (Síntese de FSM com D igual a próximo estado), 17 (Síntese de FSM com dont care de estado não usado), 19 (Contador módulo 3 sintetizado como FSM), 20 (Rastreamento a partir de equações D), 21 (Leitura de inteiro armazenado em Q3.5), 22 (Ponto fixo com sinal em complemento de 2), 24 (Armazenamento de valor negativo em Q4.4), 25 (Soma em ponto fixo Q4.4), 26 (Normalização de número menor que 1), 29 (Comparação entre ponto fixo e ponto flutuante), 31 (Setup, Fmax e hold no mesmo caminho), 32 (Setup versus hold), 33 (Divisão de frequência em contador assíncrono), 34 (Contador síncrono com flip-flops T), 35 (Latch D ativo alto e transparência), 36 (Karnaugh POS e implementação NOR), 37 (Dont care e implementação por NAND), 38 (Regras de agrupamento em Karnaugh), 39 (Dont care completando grupo grande), 40 (SOP para NAND-NAND), 41 (Simplificação algébrica com produto de somas), 42 (Termo de consenso), 43 (DeMorgan com níveis internos), 44 (Rede NAND/NOR mista), 45 (Dualidade e DeMorgan), 46 (Soma BCD com correção), 47 (Checksum módulo 256 e alteração não detectada), 48 (Carry versus overflow em complemento de 2), 49 (Z versus dont care), 50 (Paridade com XOR/XNOR)

PEDIDO PARA REVISÃO COM IA
Analise meus erros neste simulado de Sistemas Digitais. Para cada questão errada ou não respondida, considere também as alternativas disponíveis e qualquer observação que eu tenha registrado, explique o conceito, resolva passo a passo e proponha 2 exercícios semelhantes com gabarito para eu fixar. Priorize os blocos abaixo de 70% e trate as questões marcadas como 'não soube responder' como prioridade, pois foram deixadas em branco conscientemente para evitar chute.
Salve uma cópia deste relatório completo em /03-simulados/resultados/relatorios/, dentro da minha pasta de estudos, com nome que identifique o número do simulado e a data de realização, para manter meu histórico.
Salve tudo o que eu precisarei estudar na pasta /03-simulados/resultados/revisoes/resultados-simulado-06-2026-06-02, dentro da minha pasta de estudos. Crie nessa pasta pelo menos um arquivo revisao_erros.md com o diagnóstico, as explicações, os exercícios e os gabaritos.
Atualize também o arquivo /03-simulados/log_estudos_e_simulados.md na pasta de estudos, adicionando este simulado à tabela de simulados realizados com data, horário de conclusão, tempo de execução e resultado informados neste relatório. Não altere registros anteriores.