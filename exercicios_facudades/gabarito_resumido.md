# Gabarito Resumido

## Parte A

1. Resultado armazenado 25h; carry-out 1; sem overflow com sinal. D6=-42, 4F=79, soma=37.
2. 11100111; valor -25.
3. Resultado 1000; sem carry-out; com overflow com sinal.
4. 1000 0111. Unidade: 8+9=17, corrige com +6, escreve 7 e carrega 1.
5. 41 39 20.
6. 1101.
7. Checksum A8. Exemplo não detectado: F1, 24, 93.
8. -125.
9. 1000 1100.
10. Inválido, porque 1010 não é dígito BCD válido.
11. Sem sinal: 15+1=0 com carry-out 1. Com sinal: -1+1=0, sem overflow.
12. Incorreta: carry-out e overflow com sinal são sempre a mesma coisa.

## Parte B

13. AC.
14. AB + A'C.
15. (A+B')C'.
16. ΠM(0,2,5,7).
17. A' + B + C' + D.
18. B'D'.
19. B + D.
20. A' + B.
21. A' + C.
22. [(AB)'(C'D)']'.
23. (A NOR C) NOR (A' NOR B).
24. N=A NAND B; P=A NAND N; Q=B NAND N; F=P NAND Q.
25. Incorreta: grupo de 6 células é válido.
26. B + D.

## Parte C

27. Y5.
28. Saída 110; válido 1.
29. I0=C, I1=1, I2=C', I3=C'.
30. I0=1, I1=D', I2=0, I3=D', I4=D, I5=D, I6=0, I7=1.
31. F=Y0+Y3+Y5+Y6.
32. A XOR B.
33. Sem sinal: A>B. Com sinal: A<B.
34. Contenção no barramento; não é operação booleana válida.
35. Incorreta: encoder prioritário ativa exatamente uma saída Y.
36. Use S=A, I0=1, I1=0.
37. Use S=A, I0=B, I1=1.
38. I2. Erro comum: chamar índice 2 de segunda posição e escolher I1.
39. F = NAND(Y1,Y2), pois as saídas são ativas baixas.
40. Incorreta: em decoder ativo alto todas as saídas ficam 1 ao mesmo tempo.

## Parte D

41. 00100.
42. 00101.
43. Moore.
44. Mealy.
45. 4 flip-flops; sobram 7 códigos.
46. D1=Q0X', D0=X, Z=Q1.
47. D1=X, D0=Q1'X', Z=Q1.
48. D1=Q1'Q0; D0=Q1'Q0'.
49. 01.
50. 4 estados: nenhum 1, viu 1, viu 11, viu 111/saída 1.
51. 2 estados.
52. Incorreta: em síntese com D sempre fazemos D=Q.
53. 3 flip-flops; 2 estados não usados.
54. Z=Q1, usando 11 como don't care.
55. Moore: saída no estado. Mealy: saída na transição junto da entrada.
56. Porque o rastreamento depende do estado atual inicial; sem reset, a sequência de estados pode ser outra.

## Parte E

57. Q=1 e Q'=0.
58. S'=R'=0.
59. E=1: transparente; Q acompanha D. E=0: segura o valor anterior.
60. Q=1.
61. 1 MHz.
62. T3=Q2Q1Q0.
63. Tclock mínimo=11 ns; Fmax≈90,9 MHz.
64. Há violação de 0,1 ns, pois 0,4+0,3=0,7 < 0,8.
65. Incorreta: diminuir frequência corrige hold.
66. Não; D só é capturado na borda ativa, respeitando setup/hold.
67. Enable=0 segura; enable=1 carrega novo dado.
68. Assíncrono usa saída de um FF como clock do próximo; atrasos se acumulam. Síncrono usa clock comum.
69. Entrada mudando perto da borda e violando setup/hold.
70. Adicionando atraso ao caminho de dados.

## Parte F

71. 3.
72. -1,5.
73. Escala 64; resolução 1/64 = 0,015625.
74. 11011100.
75. Inteiro 68; valor real 4,25.
76. 7,96875.
77. -8 até 7,9375.
78. 1,10101 × 2^3.
79. 130 decimal = 10000010.
80. 1,101 × 2^-2.
81. 6.
82. Incorreta: o 1 antes da vírgula é armazenado explicitamente.
83. 1,0111 × 2^2; expoente armazenado 129 = 10000001.
84. Porque 0,1 decimal gera fração binária periódica, não finita.
85. Ponto fixo tem resolução constante e alcance limitado; ponto flutuante tem alcance maior, mas precisão depende da mantissa.
86. Incorreta: a escala é 2^m porque m são os bits inteiros.
87. -28.
88. -0,75 = -1,1 × 2^-1. Sinal=1; expoente real=-1; expoente armazenado=126 = 01111110.
89. Q6.2 tem maior alcance e pior resolução; Q3.5 tem menor alcance e melhor resolução.
90. 2,14×32=68,48; armazena 68; valor real 68/32=2,125; erro=-0,015.
