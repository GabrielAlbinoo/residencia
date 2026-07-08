# Revisao Dos Erros - Simulado 13

**Simulado:** Geral aulas 1 a 27 - casca grossa  
**Data:** 08/07/2026  
**Horario de conclusao:** 11:18:33  
**Tempo bruto:** 17:40:09  
**Tempo ajustado:** 01:40:09  
**Resultado:** 42/60 (70%)  
**Respondidas:** 52/60  
**Marcadas como nao soube responder:** 8

## 1. Diagnostico Geral

O resultado ficou em `70%`. O ponto mais importante e que 8 questoes foram deixadas em branco conscientemente, entao elas devem ter prioridade maior que os erros por troca de alternativa.

Blocos abaixo de 70%:

```text
Bloco 2 - Booleanas, formas canonicas, Karnaugh e sintese: 5/8 (63%)
Bloco 4 - Latches, FFs, registradores, contadores e temporizacao: 5/8 (63%)
Bloco 8 - Assembly, formatos, enderecamento, datapath e controle: 5/8 (63%)
```

Prioridade por "nao soube responder":

```text
Q13 - FSM com FF D e equacao de proximo estado
Q16 - ring counter e Johnson counter
Q27 - potencia dinamica por razao
Q28 - energia em capacitor/fonte
Q38 - B, BL e BX LR
Q41 - hazard load-use
Q42 - one-hot
Q52 - IEEE 754 especiais
```

Padroes de erro:

```text
1. Misturar carry unsigned com overflow signed.
2. Inverter shift aritmetico e shift logico.
3. Usar skew positivo no sentido errado.
4. Confundir LUT de k entradas com k bits, em vez de 2^k bits.
5. Em POS por maxtermos, esquecer que o termo soma deve zerar nos pontos F=0.
```

## 2. Questoes Erradas Ou Nao Respondidas

## Questao 1 - Complemento De 2, Carry E Overflow

Erro: voce marcou overflow assinado 1.  
Correto: resultado `00001110`, carry-out 1, overflow assinado 0.

Passo a passo:

```text
10011010 = 0x9A
01110100 = 0x74
0x9A + 0x74 = 0x10E
```

Truncando para 8 bits:

```text
resultado = 00001110
carry-out = 1
```

Overflow signed:

```text
10011010 -> negativo
01110100 -> positivo
```

Soma com sinais diferentes nao gera overflow assinado.

Exercicios:

1. Some `11110000 + 00100000` em 8 bits. Informe resultado, carry-out e overflow signed.
2. Some `0101 + 0100` em 4 bits. Informe resultado, carry-out e overflow signed.

Gabarito:

```text
1. 00010000, carry-out 1, overflow signed 0.
2. 1001, carry-out 0, overflow signed 1.
```

## Questao 6 - DeMorgan Multinivel

Sua observacao faz sentido: A e E sao equivalentes se a alternativa E era exatamente `A'(B'C)'`.

Passo a passo:

```text
(A + B'C)'
= A'(B'C)'
= A'(B + C')
```

Entao:

```text
A'(B'C)' e equivalente
A'(B + C') e a forma com DeMorgan aplicado ate o fim
```

Exercicios:

1. Simplifique `(X + Y'Z)'`.
2. Simplifique `(AB + C)'`.

Gabarito:

```text
1. X'(Y + Z')
2. (A' + B')C'
```

## Questao 13 - Equacao De Proximo Estado Com FF D

Prioridade alta.

Regra:

```text
Em flip-flop D: D = Q+
```

Se a questao pede `D1`, ela pede o bit `Q1+`.

Da tabela:

```text
Para X=0:
00 -> 00, 01 -> 10, 10 -> 00, 11 -> 10
Q1+ = 0,1,0,1 = Q0

Para X=1:
00 -> 01, 01 -> 01, 10 -> 11, 11 -> 11
Q1+ = 0,0,1,1 = Q1
```

Logo:

```text
D1 = X'Q0 + XQ1
```

Exercicios:

1. Se `D` vale `Q0` quando `X=0` e `Q1` quando `X=1`, escreva a expressao.
2. Se `D0` vale `Q1` quando `X=0` e `Q0` quando `X=1`, escreva a expressao.

Gabarito:

```text
1. D = X'Q0 + XQ1
2. D0 = X'Q1 + XQ0
```

## Questao 16 - Ring Counter E Johnson Counter

Prioridade alta.

```text
Ring counter simples: um unico 1 circula.
Johnson counter: o complemento da ultima saida realimenta a entrada.
```

Com `n` flip-flops:

```text
ring -> n estados uteis
Johnson -> 2n estados uteis
```

Com 5 FFs:

```text
ring = 5
Johnson = 10
```

Exercicios:

1. Com 4 FFs, quantos estados uteis tem ring e Johnson?
2. Com 6 FFs, quantos estados uteis tem Johnson?

Gabarito:

```text
1. Ring = 4; Johnson = 8.
2. Johnson = 12.
```

## Questao 18 - Skew Em Setup E Hold

Erro: voce marcou que skew positivo no destino piora setup e ajuda hold.

Regra:

```text
Clock mais tarde no destino -> ajuda setup e piora hold.
Clock mais cedo no destino -> piora setup e ajuda hold.
```

Intuicao:

```text
Setup: o dado tem mais tempo para chegar.
Hold: o destino fica mais tempo vulneravel a dado novo chegando cedo demais.
```

Exercicios:

1. Clock chega 0,3 ns mais tarde no destino. Efeito em setup e hold?
2. Clock chega 0,4 ns mais cedo no destino. Efeito em setup e hold?

Gabarito:

```text
1. Ajuda setup, piora hold.
2. Piora setup, ajuda hold.
```

## Questao 21 - Carry, Overflow E Soma

```text
1011 + 0110 = 10001
```

Truncado para 4 bits:

```text
0001, carry-out 1
```

Como signed:

```text
1011 = -5
0110 = +6
-5 + 6 = +1
```

Sinais diferentes nao geram overflow signed.

Exercicios:

1. Some `1100 + 0101` em 4 bits.
2. Some `0111 + 0001` em 4 bits.

Gabarito:

```text
1. 0001, carry-out 1, overflow signed 0.
2. 1000, carry-out 0, overflow signed 1.
```

## Questao 23 - Shift Logico E Aritmetico

Regra:

```text
Shift logico a direita: entra 0.
Shift aritmetico a direita: replica o MSB.
```

Para `10010110`:

```text
aritmetico: 10010110 -> 11001011 -> 11100101
logico:     10010110 -> 01001011 -> 00100101
```

Exercicios:

1. Desloque `10110000` duas posicoes a direita, aritmetico e logico.
2. Desloque `01110000` uma posicao a direita, aritmetico e logico.

Gabarito:

```text
1. Aritmetico = 11101100; logico = 00101100.
2. Aritmetico = 00111000; logico = 00111000.
```

## Questao 27 - Potencia Dinamica Por Razao

Prioridade alta.

Formula:

```text
Pdin = alpha C V^2 f
```

Razao:

```text
Pnova/Pantiga = (Cnova/Cantiga)(fnova/fantiga)(Vnova/Vantiga)^2
```

Dados:

```text
C dobra -> 2
f dobra -> 2
V cai de 1,2 para 0,9 -> 0,75
```

Conta:

```text
2 * 2 * 0,75^2 = 4 * 0,5625 = 2,25
```

Exercicios:

1. C cai pela metade, f dobra, V cai de 1,0 para 0,8. Qual razao?
2. C triplica, f nao muda, V cai de 1,2 para 0,6. Qual razao?

Gabarito:

```text
1. 0,5 * 2 * 0,8^2 = 0,64.
2. 3 * 1 * 0,5^2 = 0,75.
```

## Questao 28 - Energia De Capacitor E Fonte

Prioridade alta.

Formulas:

```text
Energia armazenada: Ecap = 1/2 C V^2
Energia retirada da fonte: Efonte = C V^2
```

Com `C=10 pF` e `V=1 V`:

```text
Ecap = 1/2 * 10 * 1^2 = 5 pJ
Efonte = 10 * 1^2 = 10 pJ
```

Exercicios:

1. C=20 pF, V=1 V. Calcule Ecap e Efonte.
2. C=8 pF, V=2 V. Calcule Ecap e Efonte.

Gabarito:

```text
1. Ecap = 10 pJ; Efonte = 20 pJ.
2. Ecap = 16 pJ; Efonte = 32 pJ.
```

## Questao 34 - LUT

LUT de `k` entradas guarda uma saida para cada combinacao de entrada.

```text
bits = 2^k
```

Para 5 entradas:

```text
2^5 = 32 bits
```

Exercicios:

1. LUT de 4 entradas: quantos bits?
2. LUT de 6 entradas: quantos bits?

Gabarito:

```text
1. 16 bits.
2. 64 bits.
```

## Questao 37 - Enderecamento Por Base E Deslocamento

Maquina byte-addressable:

```text
1 endereco = 1 byte
word de 32 bits = 4 bytes
```

Indice 3:

```text
offset = 3 * 4 = 12 bytes
```

Exercicios:

1. Vetor de words de 32 bits, indice 5. Offset?
2. Vetor de halfwords de 16 bits, indice 7. Offset?

Gabarito:

```text
1. 20 bytes.
2. 14 bytes.
```

## Questao 38 - B, BL E BX LR

Prioridade alta.

```text
B label  -> desvia sem salvar retorno
BL label -> desvia e salva retorno em LR
BX LR    -> retorna para o endereco guardado em LR
```

Exercicios:

1. Qual instrucao chama subrotina salvando retorno?
2. Qual instrucao retorna pelo link register?

Gabarito:

```text
1. BL.
2. BX LR.
```

## Questao 41 - Hazard Load-Use

Prioridade alta.

```text
LOAD R1, 0(R2)
ADD  R3, R1, R4
```

A segunda instrucao precisa de `R1` imediatamente depois do LOAD. O dado ainda pode nao estar pronto no pipeline.

Nome:

```text
hazard de dados load-use
```

Exercicios:

1. `LOAD R5, 0(R1)` seguido de `SUB R6, R5, R2`. Qual hazard?
2. `ADD R1, R2, R3` seguido de `BEQ R1, R0, L`. Qual dependencia aparece?

Gabarito:

```text
1. Hazard de dados load-use.
2. Dependencia de dados em R1 usada pelo branch.
```

## Questao 42 - One-Hot

Prioridade alta.

One-hot:

```text
um flip-flop por estado
apenas um bit fica em 1 por vez
```

Exemplo:

```text
S0=0001
S1=0010
S2=0100
S3=1000
```

Para 6 estados:

```text
binaria minima = ceil(log2 6) = 3 FFs
one-hot = 6 FFs
```

Exercicios:

1. FSM com 8 estados: FFs binarios e one-hot?
2. FSM com 9 estados: FFs binarios e one-hot?

Gabarito:

```text
1. Binaria = 3; one-hot = 8.
2. Binaria = 4; one-hot = 9.
```

## Questao 44 - Setup/Hold Com Skew

Dados:

```text
tCQmax=1, tPDmax=5, tsetup=1
tCQmin=0,3, tPDmin=0,4, thold=0,6
skew positivo no destino=0,5
```

Setup:

```text
Tclk >= tCQmax + tPDmax + tsetup - skew
Tclk >= 1 + 5 + 1 - 0,5 = 6,5 ns
```

Hold:

```text
tCQmin + tPDmin >= thold + skew
0,3 + 0,4 >= 0,6 + 0,5
0,7 >= 1,1 -> falso
```

Conclusao: Tclk minimo `6,5 ns`, mas ha violacao de hold.

Exercicios:

1. `tCQmax=1`, `tPDmax=4`, `tsetup=1`, skew=0,5. Tclk minimo?
2. `tCQmin=0,2`, `tPDmin=0,5`, `thold=0,6`, skew=0,2. Ha hold?

Gabarito:

```text
1. 5,5 ns.
2. 0,7 >= 0,8 e falso; violacao de 0,1 ns.
```

## Questao 46 - POS Por Maxtermos

`F=Pi M(0,2,8,10)` significa que F vale 0 nesses indices.

Em `ABCD`:

```text
0  = 0000
2  = 0010
8  = 1000
10 = 1010
```

O que fica fixo:

```text
B=0 e D=0
```

Em POS, o termo soma deve zerar nessa condicao:

```text
B + D
```

Exercicios:

1. Em ABC, F=0 quando A=0 e C=0. Termo POS?
2. Em ABCD, F=0 quando A=1 e D=0. Termo POS?

Gabarito:

```text
1. A + C.
2. A' + D.
```

## Questao 47 - Ativo Baixo

Sufixo `_n`, barra ou bolha indicam ativo baixo.

```text
reset_n = 0 -> reset ativo
reset_n = 1 -> reset inativo
```

Assincrono significa que nao precisa esperar borda de clock.

Exercicios:

1. `enable_n` ativo baixo esta ativo em qual nivel?
2. Reset assincrono ativo baixo espera borda de clock?

Gabarito:

```text
1. Nivel 0.
2. Nao.
```

## Questao 52 - IEEE 754 Especiais

Prioridade alta.

IEEE 754 simples:

```text
expoente = 0, fracao = 0    -> zero
expoente = 0, fracao != 0   -> subnormal
1 <= expoente <= 254        -> normalizado
expoente = 255, fracao = 0  -> infinito
expoente = 255, fracao != 0 -> NaN
```

Questao:

```text
expoente 255 e fracao diferente de zero -> NaN
```

Exercicios:

1. Expoente 255 e fracao zero indica o que?
2. Expoente 0 e fracao diferente de zero indica o que?

Gabarito:

```text
1. Infinito.
2. Subnormal.
```

## 3. Observacoes Em Questoes Corretas

- Paridade: bit extra para forcar total de 1s par ou impar. Detecta numero impar de inversoes; pode falhar com numero par.
- Contencao de barramento: dois dispositivos dirigem o mesmo barramento ao mesmo tempo com valores diferentes, causando valor indefinido e corrente alta.
- Skew: diferenca de chegada do clock entre FFs. `tPD` e tempo de propagacao da logica combinacional.
- Subtracao unsigned por complemento de 2: `Cout=1` indica sem borrow; `Cout=0` indica borrow.
- Flags da ULA: carry/borrow servem para unsigned; overflow e sinal ajudam em signed; zero indica igualdade.
- Flash: memoria nao volatil, eletricamente regravavel em blocos; usada em SSD, pendrive e cartao SD.
- LOAD: `ALUSrc=1` porque a ALU soma registrador base com imediato/offset.

## 4. Checklist De Estudo

```text
1. Refazer 10 questoes de carry versus overflow signed.
2. Refazer 8 questoes de POS/maxtermos.
3. Refazer 8 questoes de setup/hold/skew.
4. Refazer 6 questoes de FSM com flip-flop D.
5. Refazer 6 questoes de assembly/endereco/pipeline.
6. Decorar a tabela de especiais IEEE 754.
```
