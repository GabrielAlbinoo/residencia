# Resultado - Simulado 13 - Geral Aulas 1 a 27 - Casca Grossa - Sistemas Digitais (UFCG)

Finalizado em: 08/07/2026, 11:18:33  
Tempo executado bruto: 17:40:09  
Tempo executado ajustado: 01:40:09  
Observacao: foram removidas 16 horas do total, pois o simulado ficou rodando sem querer.  
Nota: 42/60 (70%)  
Respondidas: 52/60  
Marcadas como nao soube responder: 8

## Desempenho Por Bloco

- Bloco 1 - Aulas 1 e 2 - Sistemas numericos, complemento de 2 e codigos: 3/4 (75%)
- Bloco 2 - Aulas 3 a 9 - Logica booleana, formas canonicas, Karnaugh e sintese: 5/8 (63%) | Revisar: 08-aulas/aulas-md/3-portas_logicas_operacoes_booleanas.md; 08-aulas/aulas-md/4-algebra_booleana_axiomas_leis_simplificacao.md; 08-aulas/aulas-md/5-demorgan_dualidade_nand_nor_simplificacao.md; 08-aulas/aulas-md/6-valores_logicos_formas_canonicas_mintermos_maxtermos.md; 08-aulas/aulas-md/7-mapas_karnaugh_2_3_variaveis_minimizacao_sop.md; 08-aulas/aulas-md/8-mapas_karnaugh_4_variaveis_dont_care.md; 08-aulas/aulas-md/9-sintese_logica_completa_sop_pos_nand_nor.md
- Bloco 3 - Aulas 10, 11 e 16 - Blocos combinacionais e FSM: 5/7 (71%)
- Bloco 4 - Aulas 12 a 15 - Latches, flip-flops, registradores, contadores e temporizacao: 5/8 (63%) | Revisar: 08-aulas/aulas-md/12-estabilidade_latch_sr_latch_d.md; 08-aulas/aulas-md/13-flip_flops_registradores.md; 08-aulas/aulas-md/14-contadores_assincronos_sincronos_divisao_frequencia.md; 08-aulas/aulas-md/15-temporizacao_sequencial_setup_hold_caminho_critico.md
- Bloco 5 - Aulas 17 a 19 - Ponto fixo/flutuante, somadores, shifter e ULA: 7/10 (70%)
- Bloco 6 - Aulas 20 a 22 - MOS, CMOS, potencia, atraso, glitch e hazard: 5/7 (71%)
- Bloco 7 - Aulas 23 e 24 - Memorias e logica programavel: 7/8 (88%)
- Bloco 8 - Aulas 25 a 27 - Assembly, formatos, enderecamento, datapath e controle: 5/8 (63%) | Revisar: 08-aulas/aulas-md/25-algoritmos_procedurais_assembly_basico_operandos.md; 08-aulas/aulas-md/26-formatos_tipos_instrucao_modos_enderecamento.md; 08-aulas/aulas-md/27-datapath_controle_processador.md

## Questoes Erradas Ou Nao Respondidas

1. Questao 1 - Complemento de 2, carry e overflow
   - Enunciado: `10011010 + 01110100`, truncado para 8 bits. Informar padrao final, carry-out e overflow assinado.
   - Alternativas: A) 00001110, carry-out 0, overflow 0; B) 00001110, carry-out 1, overflow 1; C) 00001110, carry-out 1, overflow 0; D) 11101110, carry-out 0, overflow 1; E) 00001110, carry-out 0, overflow 1.
   - Minha resposta: B
   - Correta: C
   - Explicacao: 0x9A + 0x74 = 0x10E. Em 8 bits fica 0x0E, carry-out 1. Como os sinais signed dos operandos sao diferentes, nao ha overflow assinado.

2. Questao 6 - DeMorgan multinivel
   - Enunciado: expressao equivalente a `(A + B'C)'`.
   - Alternativas: A) A'(B + C'); B) A' + BC'; C) A'(B' + C); D) A + B + C'; E) A'(B'C)'.
   - Minha resposta: E
   - Observacao: Letra A e E estao corretas, nao?
   - Correta oficial: A
   - Explicacao: (A+B'C)' = A'(B'C)' = A'(B + C'). A e E sao equivalentes; A esta mais simplificada.

3. Questao 13 - Equacao de proximo estado
   - Tabela: 00 -> 00/01; 01 -> 10/01; 10 -> 00/11; 11 -> 10/11 para X=0/X=1.
   - Alternativas: A) D1=XQ0+X'Q1; B) D1=Q1Q0+X; C) D1=X'Q1+XQ0; D) D1=X'Q0+XQ1; E) D1=Q1+Q0.
   - Minha resposta: nao respondida.
   - Correta: D
   - Explicacao: em FF D, D1=Q1+. Para X=0, Q1+=Q0. Para X=1, Q1+=Q1. Logo D1=X'Q0+XQ1.

4. Questao 16 - Ring e Johnson
   - Enunciado: com 5 FFs, estados uteis em ring simples e Johnson.
   - Alternativas: A) 5 e 10; B) 10 e 5; C) 32 e 10; D) 5 e 32; E) 32 e 32.
   - Minha resposta: nao respondida. Observacao: nao vi esses counters.
   - Correta: A
   - Explicacao: ring simples usa n estados uteis; Johnson usa 2n. Para 5 FFs: 5 e 10.

5. Questao 18 - Skew em setup e hold
   - Minha resposta: A) piora setup e ajuda hold.
   - Correta: D) ajuda setup e piora hold.
   - Explicacao: clock mais tarde no destino aumenta tempo para setup, mas torna hold mais dificil.

6. Questao 21 - Carry, overflow e soma
   - Enunciado: `1011 + 0110` em 4 bits.
   - Minha resposta: B) 0001, carry-out 1, overflow assinado 1.
   - Correta: A) 0001, carry-out 1, overflow assinado 0.
   - Explicacao: unsigned 11+6=17 -> 0001 com carry. Signed: -5+6=1; sinais diferentes nao geram overflow.

7. Questao 23 - Shift logico e aritmetico
   - Enunciado: `10010110` deslocado 2 posicoes a direita, aritmetico e logico.
   - Minha resposta: A) 00100101 e 11100101.
   - Correta: C) 11100101 e 00100101.
   - Explicacao: aritmetico replica MSB 1; logico insere zeros.

8. Questao 27 - Potencia dinamica por razao
   - Minha resposta: nao respondida.
   - Correta: D) 2,25.
   - Explicacao: P=alpha*C*V^2*f. Razao = 2*2*(0,9/1,2)^2 = 2,25.

9. Questao 28 - Energia de capacitor e fonte
   - Minha resposta: nao respondida. Observacao: acredito que ela B.
   - Correta: C) 5 pJ armazenados e 10 pJ retirados da fonte.
   - Explicacao: Ecap=1/2CV^2=5 pJ. Efonte=CV^2=10 pJ.

10. Questao 34 - LUT
    - Minha resposta: A) 5.
    - Correta: B) 32.
    - Explicacao: LUT de k entradas precisa de 2^k bits. Para k=5, 32 bits.

11. Questao 37 - Enderecamento por base e deslocamento
    - Minha resposta: B) 4.
    - Correta: D) 12.
    - Explicacao: word de 32 bits tem 4 bytes. Indice 3 -> 3*4=12 bytes.

12. Questao 38 - BL, B e BX LR
    - Minha resposta: nao respondida.
    - Correta: B) B desvia sem salvar retorno; BL salva retorno em LR; BX LR retorna para LR.

13. Questao 41 - Hazards de pipeline
    - Minha resposta: nao respondida.
    - Correta: D) hazard de dados load-use.
    - Explicacao: ADD usa R1 imediatamente apos LOAD carregar R1.

14. Questao 42 - One-hot
    - Minha resposta: nao respondida. Observacao: o que e one hot?
    - Correta: A) binaria minima usa 3 FFs; one-hot usa 6 FFs.
    - Explicacao: ceil(log2 6)=3; one-hot usa um FF por estado.

15. Questao 44 - Setup/hold com skew
    - Minha resposta: A.
    - Correta: C.
    - Explicacao: setup: 1+5+1-0,5=6,5 ns. Hold: 0,3+0,4 >= 0,6+0,5 e falso; ha violacao.

16. Questao 46 - POS por maxtermos
    - Minha resposta: A) B'D'. Observacao: questao repetida.
    - Correta: D) B + D.
    - Explicacao: F=0 em 0,2,8,10, onde B=0 e D=0. O termo POS que zera ali e B+D.

17. Questao 47 - Ativo baixo
    - Minha resposta: B) reset ativo quando reset_n=1.
    - Correta: A) reset ativo quando reset_n=0.
    - Explicacao: sufixo _n indica ativo em nivel baixo.

18. Questao 52 - IEEE 754 especiais
    - Minha resposta: nao respondida.
    - Correta: D) NaN.
    - Explicacao: expoente 255 com fracao zero e infinito; expoente 255 com fracao diferente de zero e NaN.

## Questoes Corretas

2 (Soma BCD com correcao), 3 (Gray para binario e proximo Gray), 4 (ASCII, paridade e checksum), 5 (Tri-state e contencao), 7 (Karnaugh com don't care), 8 (Hazard e consenso), 9 (MUX implementando funcao), 10 (Decoder ativo baixo), 11 (Comparacao signed e unsigned), 12 (Mealy com sobreposicao), 14 (Latch transparente), 15 (Flip-flop JK), 17 (Setup, hold e Fmax), 19 (Ponto fixo signed), 20 (IEEE 754 normalizado), 22 (Subtracao unsigned por complemento de 2), 24 (Flags da ULA), 25 (Funcao CMOS por pull-down), 26 (Redes NAND/NOR CMOS), 29 (Hazard dinamico), 30 (Capacidade de memoria), 31 (Tipos de memoria nao volatil), 32 (SRAM e DRAM), 33 (PROM, PLA e PAL), 35 (FPGA, CPLD e ASIC), 36 (Assembly com laco), 39 (Sinais de controle em LOAD), 40 (Sinais de controle em STORE), 43 (Estados nao usados em FSM), 45 (BCD invalido como don't care), 48 (Barramento tri-state), 49 (Contador modulo M), 50 (Registradores de deslocamento e FIFO), 51 (Overflow em ponto fixo), 53 (Carry lookahead), 54 (Comparacao signed por flags), 55 (CMOS por rede pull-down), 56 (Leakage e potencia estatica), 57 (PROM como tabela verdade), 58 (PC-relative), 59 (Enderecos e capacidade), 60 (Controle e datapath).

## Observacoes Em Questoes Corretas

- Questao 4: duvida sobre paridade.
- Questao 5: duvida sobre contencao de barramento.
- Questao 11: alternativas bugadas.
- Questao 17: duvida sobre skew e tPD.
- Questao 22: duvida sobre Cout e borrow.
- Questao 24: questao fraca sobre flags signed.
- Questao 25: questao boa de funcao CMOS.
- Questao 31: duvida sobre memoria flash.
- Questao 39: ALUSrc em LOAD.
