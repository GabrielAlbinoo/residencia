# Resultado - Simulado 04 - Revisão Aulas 9 a 13

Finalizado em: 28/05/2026, 15:58:50  
Tempo executado: 00:25:37  
Nota: 24/30 (80%)  
Respondidas: 26/30  
Marcadas como não soube responder: 4

## Desempenho Por Bloco

- Bloco 1 - Aula 9 - Síntese lógica, SOP/POS, NAND e NOR: 6/6 (100%)
- Bloco 2 - Aula 10 - MUX, DEMUX, decoder, encoder e comparador: 2/6 (33%) | Revisar: aulas/10-mux_demux_decoder_encoder_comparador_blocos_combinacionais.md
- Bloco 3 - Aula 11 - FSM, Moore e Mealy: 4/6 (67%) | Revisar: aulas/11-introducao_fsm_maquinas_estados_moore_mealy.md
- Bloco 4 - Aula 12 - Latch SR, latch D e estabilidade: 6/6 (100%)
- Bloco 5 - Aula 13 - Flip-flops e registradores: 6/6 (100%)

## Questões Erradas Ou Não Respondidas

### Questão 7 - Implementação de função com MUX 4:1

Enunciado: Deseja-se implementar F(A,B,C)=Σm(0,2,3,5,7) usando um MUX 4:1, com S1=A e S0=B. Quais devem ser as entradas I0, I1, I2, I3?

Alternativas disponíveis:

- A) I0=C, I1=1, I2=C', I3=C
- B) I0=C', I1=1, I2=C, I3=C
- C) I0=0, I1=C, I2=1, I3=C'
- D) I0=C', I1=C, I2=0, I3=1

Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.  
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.  
Resposta correta: B) I0=C', I1=1, I2=C, I3=C

Explicação: Para AB=00, F vale 1 em C=0 e 0 em C=1, então I0=C'. Para 01, vale sempre 1. Para 10 e 11, vale C.

### Questão 8 - Entradas de MUX por variável restante

Enunciado: Uma função F(A,B,C)=Σm(1,2,6,7) será feita com MUX 4:1, usando A e B como seletores. Qual configuração está correta?

Alternativas disponíveis:

- A) I0=C', I1=C, I2=1, I3=0
- B) I0=1, I1=C', I2=C, I3=0
- C) I0=0, I1=1, I2=C', I3=C
- D) I0=C, I1=C', I2=0, I3=1

Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.  
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.  
Resposta correta: D) I0=C, I1=C', I2=0, I3=1

Explicação: Com AB=00, aparece apenas m1, então I0=C. Com 01, aparece apenas m2, então I1=C'. Com 10, nenhum mintermo: I2=0. Com 11, ambos: I3=1.

### Questão 10 - Encoder prioritário

Enunciado: Em um encoder prioritário 4:2, a prioridade é D3 > D2 > D1 > D0. Se D3=0, D2=1, D1=1 e D0=1, qual deve ser a saída binária e o sinal de válido?

Alternativas disponíveis:

- A) 01 e válido 1
- B) 00 e válido 1
- C) 10 e válido 1
- D) 11 e válido 0

Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.  
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.  
Resposta correta: C) 10 e válido 1

Explicação: Mesmo com D1 e D0 ativos, o maior índice ativo é D2. O código de 2 é 10, e existe entrada ativa, então válido é 1.

### Questão 12 - Comparador binário

Enunciado: Um comparador de magnitude recebe A=A1A0=10 e B=B1B0=01. Quais saídas devem ficar ativas?

Alternativas disponíveis:

- A) A>B=0, A=B=1, A<B=0
- B) A>B=0, A=B=0, A<B=1
- C) A>B=1, A=B=1, A<B=0
- D) A>B=1, A=B=0, A<B=0

Minha resposta: Não respondida por não saber como resolver; marcada conscientemente para revisão.  
Motivo declarado: deixei em branco porque não sabia como resolver; preciso aprender este procedimento.  
Resposta correta: D) A>B=1, A=B=0, A<B=0

Explicação: A=10₂=2 e B=01₂=1. Portanto, apenas a saída A>B deve ficar ativa.

### Questão 13 - Identificação de Mealy

Enunciado: Em uma máquina de estados, no mesmo estado S1, a saída é Z=0 quando X=0 e Z=1 quando X=1. Qual classificação descreve melhor essa máquina?

Alternativas disponíveis:

- A) Mealy, porque a saída depende do estado atual e da entrada.
- B) Moore, porque a saída mudou dentro do mesmo estado.
- C) Combinacional pura, porque não há memória.
- D) Latch SR, porque a saída depende de duas entradas.

Minha resposta: C) Combinacional pura, porque não há memória.  
Resposta correta: A) Mealy, porque a saída depende do estado atual e da entrada.

Explicação: Em Moore, cada estado tem uma saída fixa. Se a saída muda dentro do mesmo estado conforme a entrada, a máquina é Mealy.

### Questão 14 - Identificação de Moore

Enunciado: Considere a tabela. Qual tipo de máquina ela representa?

Material apresentado:

| Estado atual | Saída do estado | X=0 | X=1 |
|---|---:|---|---|
| A | 0 | A | B |
| B | 1 | A | B |

Alternativas disponíveis:

- A) Mealy, pois a saída aparece junto das transições.
- B) Combinacional, pois não existe estado anterior.
- C) Moore, pois a saída está associada ao estado.
- D) Encoder, pois há prioridade entre estados.

Minha resposta: A) Mealy, pois a saída aparece junto das transições.  
Resposta correta: C) Moore, pois a saída está associada ao estado.

Explicação: A saída aparece como propriedade de cada estado: estado A gera 0 e estado B gera 1. As entradas afetam o próximo estado, não diretamente a saída.

## Questões Corretas

1 (NAND-NAND a partir de SOP), 2 (NOR-NOR a partir de POS), 3 (Leitura SOP de mapa de Karnaugh), 4 (Leitura POS de mapa de Karnaugh), 5 (Síntese com don't care), 6 (Escolha entre SOP e POS para síntese), 9 (Decoder 3:8 ativo alto), 11 (DEMUX 1:4), 15 (Rastreamento de FSM Mealy), 16 (Rastreamento de FSM Moore), 17 (Quantidade de bits de estado), 18 (Detecção de sequência com sobreposição), 19 (Latch SR com NOR), 20 (Latch SR com NAND ativo baixo), 21 (Condição proibida em latches SR), 22 (Latch D ativo alto), 23 (Transparência do latch D), 24 (Construção do latch D a partir do SR), 25 (Flip-flop D com enable), 26 (Flip-flop T), 27 (Flip-flop JK), 28 (Reset síncrono e assíncrono), 29 (Registrador com enable), 30 (Registrador de estado de FSM)

## Pedido Para Revisão Com IA

Analise meus erros neste simulado de Sistemas Digitais. Para cada questão errada ou não respondida, considere também as alternativas disponíveis e qualquer observação que eu tenha registrado, explique o conceito, resolva passo a passo e proponha 2 exercícios semelhantes com gabarito para eu fixar. Priorize os blocos abaixo de 70% e trate as questões marcadas como 'não soube responder' como prioridade, pois foram deixadas em branco conscientemente para evitar chute.

Salve uma cópia deste relatório completo na pasta /resultados_simulados, dentro da minha pasta de estudos, com nome que identifique o número do simulado e a data de realização, para manter meu histórico.

Salve tudo o que eu precisarei estudar na pasta /resultados-simulado-04-2026-05-28, dentro da minha pasta de estudos. Crie nessa pasta pelo menos um arquivo revisao_erros.md com o diagnóstico, as explicações, os exercícios e os gabaritos.

Atualize também o arquivo /log_estudos_e_simulados.md na pasta de estudos, adicionando este simulado à tabela de simulados realizados com data, horário de conclusão, tempo de execução e resultado informados neste relatório. Não altere registros anteriores.
