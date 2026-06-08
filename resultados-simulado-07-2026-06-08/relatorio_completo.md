RESULTADO - SIMULADO 07 - EXERCICIOS DE FACULDADES - AULAS 1 A 17 - SISTEMAS DIGITAIS (UFCG)
Finalizado em: 08/06/2026, 16:21:58
Tempo executado: 00:58:16
Nota: 45/50 (90%)
Respondidas: 47/50
Marcadas como nao soube responder: 3

AJUSTE MANUAL REGISTRADO
- Questoes 36, 46 e 47 foram consideradas corretas por ajuste manual do usuario, porque a resposta clicada mudou por engano.

DESEMPENHO POR BLOCO
- Bloco 1 - Blocos por indice binario - decoder, DEMUX, encoder e comparador: 5/5 (100%)
- Bloco 2 - MUX, decoder e implementacao de funcoes: 4/5 (80%)
- Bloco 3 - FSM Moore, Mealy, rastreamento e identificacao: 5/5 (100%)
- Bloco 4 - Sintese de FSM com flip-flops D: 5/5 (100%)
- Bloco 5 - Ponto fixo - escala, resolucao e representacao: 5/5 (100%)
- Bloco 6 - Ponto flutuante - normalizacao, bias e interpretacao: 2/5 (40%) | Revisar: aulas/17-ponto_fixo_ponto_flutuante.md
- Bloco 7 - Temporizacao, contadores, latches e flip-flops: 5/5 (100%)
- Bloco 8 - Karnaugh, dont care e sintese NAND/NOR: 5/5 (100%)
- Bloco 9 - Algebra booleana, DeMorgan, consenso e circuitos universais: 4/5 (80%)
- Bloco 10 - Fundamentos com pegadinhas - BCD, checksum, overflow, tri-state e paridade: 5/5 (100%)

QUESTOES ERRADAS OU NAO RESPONDIDAS (5)

Questao 9 - Decoder 2:4 e funcao XOR
Enunciado: Um decoder 2:4 ativo alto recebe A e B. As saidas Y1 e Y2 sao ligadas a uma OR. Qual funcao e implementada?
Alternativas disponiveis:
- A) A+B
- B) A XOR B
- C) A XNOR B
- D) AB
Minha resposta: A) A+B
Resposta correta: B) A XOR B
Explicacao: Y1 representa A'B e Y2 representa AB'. A OR gera A'B + AB', que e A XOR B.

Questao 27 - Expoente com bias em IEEE 754 simples
Enunciado: 5,75_10 em binario e 101,11_2. Em IEEE 754 simples, qual normalizacao e expoente armazenado estao corretos?
Alternativas disponiveis:
- A) 1,0111_2 x 2^2; expoente armazenado 129
- B) 1,0111_2 x 2^3; expoente armazenado 130
- C) 1,0111_2 x 2^2; expoente armazenado 2
- D) 0,10111_2 x 2^3; expoente armazenado 130
Minha resposta: Nao respondida por nao saber como resolver; marcada conscientemente para revisao.
Motivo declarado: deixei em branco porque nao sabia como resolver; preciso aprender este procedimento.
Resposta correta: A) 1,0111_2 x 2^2; expoente armazenado 129
Explicacao: 101,11_2 = 1,0111_2 x 2^2. Em IEEE 754 simples, o bias e 127. Logo, o expoente armazenado e 127+2=129.

Questao 28 - Conceitos de IEEE 754 simples
Enunciado: Assinale a alternativa incorreta sobre IEEE 754 simples para numeros normalizados.
Alternativas disponiveis:
- A) O bit de sinal indica se o numero e positivo ou negativo.
- B) O expoente armazenado usa bias.
- C) O bit 1 antes da virgula e armazenado explicitamente na fracao.
- D) A fracao armazena os bits apos o 1, da forma normalizada.
Minha resposta: Nao respondida por nao saber como resolver; marcada conscientemente para revisao.
Motivo declarado: deixei em branco porque nao sabia como resolver; preciso aprender este procedimento.
Resposta correta: C) O bit 1 antes da virgula e armazenado explicitamente na fracao.
Explicacao: Em numeros normalizados no IEEE 754, o 1 antes da virgula e implicito; ele nao e armazenado explicitamente no campo da fracao.

Questao 30 - Expoente armazenado e expoente real
Enunciado: Em IEEE 754 simples, o campo de expoente armazenado e 10000101_2. Qual e o expoente real?
Alternativas disponiveis:
- A) 133
- B) 5
- C) 127
- D) 6
Minha resposta: Nao respondida por nao saber como resolver; marcada conscientemente para revisao.
Motivo declarado: deixei em branco porque nao sabia como resolver; preciso aprender este procedimento.
Resposta correta: D) 6
Explicacao: 10000101_2 = 133. Em IEEE 754 simples, o bias e 127. Expoente real: 133-127=6.

Questao 44 - Rede NAND/NOR mista
Enunciado: Considere a rede textual abaixo. Qual expressao final ela implementa?
Material apresentado:
- Rede logica:
  N1 = A NAND B
  N2 = A NOR B
  F  = N1 NOR N2
Alternativas disponiveis:
- A) A+B
- B) AB
- C) A XOR B
- D) (A+B)'
Minha resposta: A) A+B
Resposta correta: B) AB
Explicacao: N1=(AB)' e N2=(A+B)'. Entao F=[(AB)' + (A+B)']'. Por DeMorgan, F=AB(A+B)=AB.

QUESTOES CORRETAS (45)
1 (Decoder ativo alto e funcao por mintermos), 2 (DEMUX 1:8 e contagem de indice comecando em zero), 3 (Encoder prioritario 8:3 com valido), 4 (Conceitos de decoder, DEMUX e encoder), 5 (Comparador com interpretacao signed e unsigned), 6 (MUX 4:1 com variavel restante), 7 (Erro comum em MUX 4:1), 8 (MUX 8:1 com quatro variaveis), 10 (Implementacao com decoder ativo alto), 11 (Rastreamento de FSM Mealy), 12 (Rastreamento de FSM Moore), 13 (Diferenca entre Moore e Mealy), 14 (Identificacao de Mealy por tabela), 15 (Quantidade de bits de estado), 16 (Sintese de FSM com D igual a proximo estado), 17 (Sintese de FSM com dont care de estado nao usado), 18 (Regra de sintese com flip-flop D), 19 (Contador modulo 3 sintetizado como FSM), 20 (Rastreamento a partir de equacoes D), 21 (Leitura de inteiro armazenado em Q3.5), 22 (Ponto fixo com sinal em complemento de 2), 23 (Escala e resolucao em Qm.n), 24 (Armazenamento de valor negativo em Q4.4), 25 (Soma em ponto fixo Q4.4), 26 (Normalizacao de numero menor que 1), 29 (Comparacao entre ponto fixo e ponto flutuante), 31 (Setup, Fmax e hold no mesmo caminho), 32 (Setup versus hold), 33 (Divisao de frequencia em contador assincrono), 34 (Contador sincrono com flip-flops T), 35 (Latch D ativo alto e transparencia), 36 (Karnaugh POS e implementacao NOR), 37 (Dont care e implementacao por NAND), 38 (Regras de agrupamento em Karnaugh), 39 (Dont care completando grupo grande), 40 (SOP para NAND-NAND), 41 (Simplificacao algebrica com produto de somas), 42 (Termo de consenso), 43 (DeMorgan com niveis internos), 45 (Dualidade e DeMorgan), 46 (Soma BCD com correcao), 47 (Checksum modulo 256 e alteracao nao detectada), 48 (Carry versus overflow em complemento de 2), 49 (Z versus dont care), 50 (Paridade com XOR/XNOR)
