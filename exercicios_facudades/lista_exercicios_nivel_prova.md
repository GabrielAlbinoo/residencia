# Lista De Exercícios - Nível Prova

## Parte A - Representação, Códigos E Aritmética

1. Em 8 bits com complemento de 2, some D6 e 4F em hexadecimal. Informe o resultado armazenado, se há carry-out e se há overflow com sinal.

2. A palavra de 6 bits 100111 está em complemento de 2. Faça a extensão de sinal para 8 bits e diga o valor decimal.

3. Em 4 bits com complemento de 2, avalie 0111 + 0001. Informe resultado, carry-out e overflow com sinal.

4. Some 48 e 39 em BCD, mostrando a correção com +0110 quando necessário.

5. Quais bytes hexadecimais ASCII representam a sequência formada por A, 9 e espaço?

6. Converta o código Gray 1011 para binário.

7. Um checksum soma bytes módulo 256. Para os bytes F0, 25 e 93, calcule o checksum. Depois dê uma alteração de dois bytes que não seria detectada.

8. Interprete 83 hexadecimal como inteiro de 8 bits em complemento de 2.

9. Codifique o decimal 59 em Excess-3.

10. O código BCD 1001 1010 é válido? Explique.

11. Em 4 bits, some 1111 + 0001. Interprete uma vez sem sinal e outra vez em complemento de 2.

12. Assinale a afirmação incorreta: carry-out e overflow com sinal são sempre a mesma coisa; overflow com sinal depende dos sinais dos operandos; em soma sem sinal o carry-out indica estouro; em complemento de 2 pode haver carry-out sem overflow.

## Parte B - Álgebra Booleana, Karnaugh E Síntese

13. Simplifique (A+B)(A+B')(A'+C).

14. Remova o termo de consenso em AB + A'C + BC.

15. Aplique DeMorgan e simplifique: ((A+B')' + C)'.

16. Para F(A,B,C)=Σm(1,3,4,6), escreva a forma POS canônica.

17. Escreva o maxtermo M10 para ABCD=1010.

18. Em um mapa de Karnaugh de 4 variáveis, os quatro cantos são 1. Usando linhas AB em Gray e colunas CD em Gray, qual termo SOP é gerado?

19. Em um mapa de 4 variáveis, os zeros estão nos quatro cantos. Qual expressão POS mínima representa a função?

20. Em um mapa de 3 variáveis, a linha A=0 está toda em 1, e as colunas BC=11 e BC=10 também estão em 1 nas duas linhas. Qual SOP mínima?

21. Minimize F(A,B,C)=Σm(0,2,5,7)+d(1,3).

22. Implemente F=AB+C'D em dois níveis NAND-NAND, supondo literais complementados disponíveis.

23. Implemente F=(A+C)(A'+B) em dois níveis NOR-NOR.

24. Escreva uma implementação de A XOR B usando apenas portas NAND.

25. Assinale a afirmação incorreta: grupos em Karnaugh têm tamanho potência de 2; bordas opostas podem ser adjacentes; sobreposição é permitida se ajudar; grupo de 6 células é válido quando visualmente contínuo.

26. Dada F(A,B,C,D)=ΠM(0,2,8,10), minimize F.

## Parte C - MUX, DEMUX, Decoder, Encoder E Comparador

27. Um DEMUX 1:8 ativo alto recebe D=1 e seletores S2S1S0=101. Qual saída recebe 1?

28. Em um encoder prioritário 8:3 com prioridade D7 > D6 > ... > D0, estão ativos D6, D5 e D2. Qual saída binária e qual valor de válido?

29. Implemente F(A,B,C)=Σm(1,2,3,4,6) com MUX 4:1 usando A e B como seletores. Determine I0, I1, I2 e I3.

30. Para F(A,B,C,D)=Σm(0,1,2,6,9,11,14,15), use MUX 8:1 com seletores A, B e C. Determine I0 a I7 em função de D.

31. Usando decoder 3:8 ativo alto, implemente F(A,B,C)=Σm(0,3,5,6).

32. Um decoder 2:4 ativo alto recebe A e B. As saídas Y1 e Y2 passam por uma OR. Qual função é implementada?

33. Compare A=1010 e B=0111 como sem sinal e como complemento de 2 com 4 bits.

34. Dois buffers tri-state dirigem o mesmo barramento. Um está habilitado com 1 e outro está habilitado com 0. O que acontece?

35. Assinale a incorreta: decoder ativa uma saída conforme o código de entrada; DEMUX envia dado para saída selecionada; encoder prioritário gera código da maior entrada ativa; encoder prioritário ativa exatamente uma saída Y entre Y0 e Y7.

36. Implemente NOT A com um MUX 2:1.

37. Implemente A+B com um MUX 2:1.

38. Em MUX 4:1 com seletores AB, qual entrada é selecionada por AB=10? Explique o erro comum.

39. Um decoder 2:4 tem saídas ativas em nível baixo. Como implementar F(A,B)=Σm(1,2)?

40. Assinale a incorreta: decoder 3:8 tem 3 entradas e 8 saídas; DEMUX 1:4 usa 2 seletores; em DEMUX a entrada D é enviada para uma saída; em decoder ativo alto todas as saídas ficam 1 ao mesmo tempo.

## Parte D - FSM, Moore, Mealy E Síntese Com Flip-Flops D

41. Uma Mealy detecta 101 com a tabela: S0: 0->S0/0, 1->S1/0; S1: 0->S2/0, 1->S1/0; S2: 0->S0/0, 1->S1/1. Partindo de S0, qual saída para entrada 10110?

42. Uma Moore detecta 10: A/Z0, B/Z0, C/Z1; A:0->A,1->B; B:0->C,1->B; C:0->A,1->B. Partindo de A, registre a saída do novo estado para entrada 11010.

43. Uma tabela mostra uma coluna Saída do estado e depois colunas de próximo estado para X=0 e X=1. Isso indica Moore ou Mealy?

44. Uma transição escrita como X=1 -> S2/Z=1 indica Moore ou Mealy?

45. Uma FSM possui 9 estados. Quantos flip-flops são necessários e quantos códigos sobram?

46. Para a tabela: 00 com X0->00, X1->01, Z0; 01 com X0->10, X1->01, Z0; 10 com X0->00, X1->01, Z1; 11 é don't care. Determine D1, D0 e Z.

47. Para a tabela: 00 com X0->01, X1->10, Z0; 01 com X0->01, X1->10, Z0; 10 com X0->00, X1->10, Z1; 11 é don't care. Determine D1, D0 e Z.

48. Um contador módulo 3 segue 00 -> 01 -> 10 -> 00 e força 11 -> 00. Determine D1 e D0.

49. Uma FSM tem D1=Q0X' e D0=X. Partindo de 00, qual estado após entrada 101?

50. Projete em nível de estados uma Moore que detecte três 1 consecutivos com sobreposição. Quantos estados mínimos são necessários?

51. Quantos estados mínimos uma Mealy precisa para detectar a sequência 10 com sobreposição?

52. Assinale a incorreta: em flip-flop D, D recebe Q+; Q é estado atual; estados não usados podem ser don't care se permitido; em síntese com D sempre fazemos D=Q.

53. Uma FSM com 6 estados usa codificação binária compacta. Quantos flip-flops e quantos estados não usados?

54. Uma Moore tem saída 1 apenas no estado codificado 10, e 11 é don't care. Qual expressão mínima para Z?

55. Em diagramas, onde costuma aparecer a saída em Moore e onde costuma aparecer em Mealy?

56. Por que o estado inicial/reset importa ao rastrear uma FSM?

## Parte E - Latches, Flip-Flops, Contadores E Temporização

57. Em um latch SR com NOR ativo alto, partindo de Q=0, aplique S=1 e R=0. Qual estado final?

58. Em latch SR com NAND ativo baixo, qual combinação é proibida?

59. Em latch D ativo alto, explique o que acontece com Q quando E=1 e quando E=0.

60. Um flip-flop JK recebe J=K=1 em todas as bordas. Partindo de Q=0, qual Q após 5 bordas?

61. Quatro flip-flops T com T=1 em cascata recebem clock de 16 MHz. Qual frequência no quarto estágio?

62. Em contador síncrono crescente de 4 bits com flip-flops T, qual expressão aciona T3?

63. Calcule Tclock mínimo e Fmax: Tclk-Q(max)=2 ns, Tcomb(max)=8 ns, Tsetup=1 ns.

64. Verifique hold: Tclk-Q(min)=0,4 ns, Tcomb(min)=0,3 ns, Thold=0,8 ns. Há violação? De quanto?

65. Assinale a incorreta: setup usa atrasos máximos; hold usa atrasos mínimos; diminuir frequência corrige hold; caminho crítico define Fmax.

66. Um flip-flop D sensível à borda altera Q quando D muda no meio do ciclo, longe da borda?

67. Um registrador com enable deve fazer o quê quando enable=0 e quando enable=1?

68. Por que o contador assíncrono acumula atraso de propagação e o síncrono tende a evitar esse acúmulo?

69. O que pode causar metastabilidade em uma entrada assíncrona?

70. Uma violação de hold normalmente é corrigida adicionando atraso ao caminho de dados ou reduzindo frequência?

## Parte F - Ponto Fixo E Ponto Flutuante

71. Qual é o valor real do inteiro armazenado 96 em Q3.5 sem sinal?

72. Qual valor real é representado por 11101000 em Q4.4 com sinal?

73. Em Q2.6, qual é a escala e a resolução?

74. Qual palavra de 8 bits representa -2,25 em Q4.4 com sinal?

75. Some 1,75 e 2,5 em Q4.4 sem sinal. Informe inteiro armazenado e valor real.

76. Qual é o maior valor representável em Q3.5 sem sinal com 8 bits?

77. Qual é o intervalo de Q4.4 com sinal em 8 bits usando complemento de 2?

78. Normalize 13,25 decimal sabendo que 13,25 = 1101,01 em binário.

79. Em IEEE 754 simples, qual expoente armazenado corresponde ao expoente real 3?

80. Normalize 0,01101 em binário.

81. Em IEEE 754 simples, o campo de expoente é 10000101. Qual expoente real?

82. Assinale a incorreta: o bit de sinal indica o sinal; o expoente usa bias; em normalizados o 1 antes da vírgula é implícito; em normalizados o 1 antes da vírgula é armazenado explicitamente na fração.

83. Normalize 5,75 decimal sabendo que 5,75 = 101,11 em binário, e diga o expoente armazenado em IEEE 754 simples.

84. Por que 0,1 decimal não é representado exatamente em binário finito?

85. Compare ponto fixo e ponto flutuante em alcance e precisão.

86. Assinale a incorreta: em Qm.n a escala é 2^n; a resolução é 1/2^n; o valor real é inteiro armazenado dividido por 2^n; a escala é 2^m porque m são os bits inteiros.

87. Em IEEE 754 simples, o hexadecimal C1E00000 representa qual valor decimal?

88. Represente -0,75 em forma normalizada binária e indique sinal, expoente real e expoente armazenado em IEEE simples.

89. Compare Q6.2 e Q3.5 quanto a alcance e resolução.

90. Arredonde 2,14 para Q3.5 usando aproximação para o inteiro armazenado mais próximo. Informe inteiro armazenado, valor real aproximado e erro.
