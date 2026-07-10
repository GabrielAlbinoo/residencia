# Revisão Dos Erros - Simulado 14

**Simulado:** Geral aulas 1 a 27 - extremo  
**Data:** 10/07/2026  
**Horário de conclusão:** 15:21:21  
**Tempo:** 01:09:13  
**Resultado:** 39/50 (78%)  
**Respondidas:** 43/50  
**Marcadas como não soube responder:** 6

## 1. Diagnóstico Geral

O resultado foi bom para o nível do simulado. A nota total foi `78%`, mas o dado mais importante é este:

```text
39 acertos em 50 questões
11 questões erradas ou não respondidas
6 marcadas conscientemente como "não sei"
```

O simulado fez o que deveria: mostrou que o conteúdo grande está bem consolidado, mas ainda há gargalos em procedimentos específicos.

Blocos fortes:

```text
Bloco 1 - Sistemas numéricos e códigos: 86%
Bloco 2 - Booleana, Karnaugh e síntese: 100%
Bloco 3 - Blocos combinacionais e FSM: 100%
Bloco 7 - Memórias e lógica programável: 100%
```

Blocos que ainda merecem revisão:

```text
Bloco 4 - Sequencial, registradores, contadores e temporização: 67%
Bloco 5 - Ponto fixo/flutuante, somadores, shifter e ULA: 60%
Bloco 6 - CMOS, potência, atraso e hazards: 60%
Bloco 8 - Assembly, endereçamento, datapath e controle: 50%
```

Padrões principais de erro:

```text
1. Procedimentos com módulo/base hexadecimal: checksum.
2. Sinal do skew em setup/hold.
3. Ordem de saída em registrador PISO.
4. Atraso de ripple-carry.
5. Flag C em subtração unsigned: C=1 significa sem borrow.
6. CMOS: saída é o complemento da rede pull-down.
7. Energia no capacitor versus energia retirada da fonte.
8. Instruções e flags: CMP, BEQ, Z.
9. Endereçamento com shift: <<2 significa multiplicar por 4.
10. Pipeline: hazard load-use.
11. Deslocamento de branch: imediato signed em palavras convertido para bytes.
```

## 2. Questão 4 - Checksum De 8 Bits E Paridade

Você converteu para decimal e chegou em `271`. Isso está certo:

```text
0x3A = 58
0xC5 = 197
0x10 = 16
58 + 197 + 16 = 271
```

O passo que faltou foi aplicar módulo 256, porque o checksum é de 8 bits.

```text
271 mod 256 = 15 = 0x0F
```

Agora queremos um byte que, somado a `0x0F`, dê zero módulo 256:

```text
0x0F + checksum = 0x100
checksum = 0x100 - 0x0F = 0xF1
```

Conferindo:

```text
0x0F + 0xF1 = 0x100
byte baixo = 0x00
```

Paridade par do checksum:

```text
F1 = 11110001
```

Tem 5 bits em `1`. Para deixar o total par, o bit de paridade precisa ser `1`.

Resposta:

```text
Checksum F1 e bit de paridade 1
```

Regra prática:

```text
checksum de 8 bits para soma zero:
1. some os bytes;
2. pegue o byte baixo;
3. faça 256 - byte_baixo;
4. se der 256, checksum é 00.
```

Exercícios:

1. Bytes `20`, `30` e `10`. Qual checksum de 8 bits faz a soma dar zero módulo 256?
2. Bytes `FF` e `02`. Qual checksum de 8 bits faz a soma dar zero módulo 256?

Gabarito:

```text
1. 20+30+10 = 0x60; checksum = 0xA0.
2. FF+02 = 0x101; byte baixo 0x01; checksum = 0xFF.
```

## 3. Questão 18 - Setup, Hold E Skew Negativo

Sua dúvida foi:

```text
Skew negativo subtrai nos dois ou subtrai no hold e soma no setup?
```

Use esta definição:

```text
skew = chegada do clock no destino - chegada do clock na origem
```

Se o clock chega mais cedo no destino:

```text
skew negativo
```

Fórmulas:

```text
Setup:
Tclk >= tCQmax + tPDmax + tsetup - skew

Hold:
tCQmin + tPDmin >= thold + skew
```

Na questão:

```text
skew = -0,3 ns
```

Setup:

```text
Tclk >= 0,8 + 6,4 + 0,9 - (-0,3)
Tclk >= 8,4 ns
```

Hold:

```text
0,2 + 0,5 >= 0,4 + (-0,3)
0,7 >= 0,1
```

Não há violação de hold.

Resumo mental:

```text
clock mais tarde no destino -> skew positivo -> ajuda setup, piora hold
clock mais cedo no destino  -> skew negativo -> piora setup, ajuda hold
```

Exercícios:

1. `tCQmax=1`, `tPDmax=5`, `tsetup=1`, skew `+0,5`. Qual `Tclk` mínimo?
2. `tCQmin=0,2`, `tPDmin=0,3`, `thold=0,6`, skew `-0,2`. Há violação de hold?

Gabarito:

```text
1. Tclk >= 1+5+1-0,5 = 6,5 ns.
2. 0,2+0,3 >= 0,6-0,2 -> 0,5 >= 0,4; não há violação.
```

## 4. Questão 20 - Registrador PISO

PISO significa:

```text
Parallel In, Serial Out
```

Ou seja:

```text
entra tudo em paralelo
sai um bit por vez
```

Na questão:

```text
Q3Q2Q1Q0 = 1011
```

A saída serial é o bit menos significativo antes de cada deslocamento:

```text
Q0 primeiro
```

Estado inicial:

```text
Q3 Q2 Q1 Q0
1  0  1  1
```

Saídas:

```text
1ª saída: Q0 = 1
desloca à direita
2ª saída: próximo Q0 = 1
3ª saída: próximo Q0 = 0
4ª saída: próximo Q0 = 1
```

Sequência:

```text
1101
```

Pegadinha:

Não leia `1011` da esquerda para a direita automaticamente. A questão disse que a saída é `Q0`, então começa pelo bit da direita.

Exercícios:

1. `Q3Q2Q1Q0=0110`, saída em `Q0`, desloca à direita. Qual sequência sai?
2. `Q3Q2Q1Q0=1001`, saída em `Q0`, desloca à direita. Qual sequência sai?

Gabarito:

```text
1. 0110
2. 1001
```

## 5. Questão 23 - Atraso De Ripple-Carry

Em um somador ripple-carry, o carry precisa passar de estágio em estágio.

Para um somador de 16 bits:

```text
bit 0, bit 1, ..., bit 15
```

O pior bit de soma é o mais significativo, porque depende do carry atravessar os estágios anteriores.

Dados:

```text
carry por full-adder = 120 ps
soma após chegada do carry = 180 ps
```

Para a soma do bit 15 ficar pronta:

```text
carry atravessa 15 estágios anteriores
15 * 120 ps = 1800 ps
```

Depois o bit de soma final demora:

```text
180 ps
```

Total:

```text
1800 + 180 = 1980 ps = 1,98 ns
```

Resposta:

```text
1,98 ns
```

Regra:

```text
pior soma em ripple-carry de n bits:
(n-1)*atraso_carry + atraso_soma_final
```

Exercícios:

1. Somador ripple de 8 bits, carry `100 ps`, soma final `150 ps`. Pior atraso?
2. Somador ripple de 32 bits, carry `80 ps`, soma final `120 ps`. Pior atraso?

Gabarito:

```text
1. 7*100 + 150 = 850 ps.
2. 31*80 + 120 = 2600 ps = 2,6 ns.
```

## 6. Questão 24 - Subtração, Borrow E Flags

Operação:

```text
0011 - 0101
```

Em decimal unsigned:

```text
3 - 5
```

Resultado em 4 bits:

```text
-2 = 1110
```

Flags:

```text
N = 1, porque MSB do resultado é 1
Z = 0, porque resultado não é zero
V = 0, porque -2 cabe na faixa signed de 4 bits
```

O erro foi na flag `C`.

Na convenção da questão:

```text
C = 1 -> não houve borrow
C = 0 -> houve borrow
```

Como unsigned:

```text
3 < 5
```

Então houve borrow:

```text
C = 0
```

Resposta:

```text
1110, C=0, V=0, N=1, Z=0
```

Resumo:

```text
Em subtração unsigned:
C=1 -> sem borrow
C=0 -> com borrow
```

Exercícios:

1. Em 4 bits, calcule `0110 - 0010`. Informe resultado e `C`, considerando `C=1` sem borrow.
2. Em 4 bits, calcule `0010 - 0110`. Informe resultado e `C`, considerando `C=1` sem borrow.

Gabarito:

```text
1. 0100, C=1.
2. 1100, C=0.
```

## 7. Questão 26 - CMOS Por Rede Pull-Down

A rede pull-down é a rede de nMOS que puxa a saída para `0`.

Na questão, a rede pull-down conduz quando:

```text
A(B+C) = 1
```

Mas essa não é a função de saída. Essa é a condição para a saída ser puxada para zero.

Em CMOS estático:

```text
F = complemento da rede pull-down
```

Então:

```text
F = (A(B+C))'
```

Aplicando DeMorgan:

```text
F = A' + (B+C)'
F = A' + B'C'
```

Resposta:

```text
A' + B'C'
```

Pegadinha:

```text
rede pull-down conduz quando F=0
rede pull-up conduz quando F=1
```

Exercícios:

1. Pull-down conduz quando `AB=1`. Qual a saída `F`?
2. Pull-down conduz quando `(A+B)C=1`. Qual a saída `F`?

Gabarito:

```text
1. F = (AB)' = A' + B'.
2. F = ((A+B)C)' = A'B' + C'.
```

## 8. Questão 29 - Energia De Capacitor E Fonte

Dados:

```text
C = 4 pF
V = 1,2 V
```

Energia armazenada no capacitor:

```text
Ecap = 1/2 C V^2
Ecap = 1/2 * 4 * 1,2^2
Ecap = 2 * 1,44
Ecap = 2,88 pJ
```

Energia retirada da fonte:

```text
Efonte = C V^2
Efonte = 4 * 1,44
Efonte = 5,76 pJ
```

Resposta:

```text
2,88 pJ e 5,76 pJ
```

Pegadinha:

```text
energia retirada da fonte = dobro da energia armazenada
```

A outra metade é dissipada durante o carregamento.

Exercícios:

1. `C=10 pF`, `V=1 V`. Calcule `Ecap` e `Efonte`.
2. `C=2 pF`, `V=2 V`. Calcule `Ecap` e `Efonte`.

Gabarito:

```text
1. Ecap=5 pJ; Efonte=10 pJ.
2. Ecap=4 pJ; Efonte=8 pJ.
```

## 9. Questão 37 - CMP, BEQ E Flag Z

Você marcou que não viu esse formato. O formato é estilo ARM.

```asm
CMP R2, #0
BEQ alvo
```

`CMP` compara fazendo uma subtração interna:

```text
R2 - 0
```

Ela não guarda o resultado em registrador; ela atualiza flags.

Se `R2` for igual a zero:

```text
R2 - 0 = 0
Z = 1
```

`BEQ` significa:

```text
Branch if Equal
```

Ele desvia quando:

```text
Z = 1
```

Resposta:

```text
BEQ é tomado quando a flag Z fica em 1.
```

Relações úteis:

```text
BEQ -> desvia se Z=1
BNE -> desvia se Z=0
```

Exercícios:

1. Após `CMP R1,#5`, se `R1=5`, `BEQ` desvia?
2. Após `CMP R1,#5`, se `R1=3`, `BNE` desvia?

Gabarito:

```text
1. Sim. Resultado da comparação é zero, Z=1.
2. Sim. Resultado não é zero, Z=0, então BNE desvia.
```

## 10. Questão 38 - Endereçamento Com `<<2`

Sua dúvida:

```text
O que significa <<2?
```

`<<2` significa deslocamento à esquerda de 2 bits.

Em inteiro binário, deslocar à esquerda por 2 equivale a multiplicar por:

```text
2^2 = 4
```

Na questão:

```text
R4 = 0x1000
R1 = 5
endereço = R4 + (R1 << 2)
```

Então:

```text
R1 << 2 = 5 * 4 = 20 decimal = 0x14
```

Endereço final:

```text
0x1000 + 0x14 = 0x1014
```

Por que multiplicar por 4?

Porque o vetor era de words de 32 bits:

```text
32 bits = 4 bytes
```

Então o índice 5 precisa virar deslocamento em bytes:

```text
5 * 4 = 20 bytes
```

Exercícios:

1. Base `0x2000`, índice `3`, vetor de words de 32 bits. Endereço?
2. Base `0x3000`, índice `6`, expressão `[base + índice << 1]`. Endereço?

Gabarito:

```text
1. 3*4=12=0xC; endereço 0x200C.
2. 6*2=12=0xC; endereço 0x300C.
```

## 11. Questão 41 - Hazard Load-Use

Sequência:

```asm
LW  R1, 0(R2)
ADD R3, R1, R4
```

A primeira instrução carrega `R1` da memória.

A segunda usa `R1` imediatamente.

Em pipeline clássico de 5 estágios:

```text
IF -> ID -> EX -> MEM -> WB
```

O dado do `LW` só fica pronto depois do acesso à memória, no estágio `MEM`.

Mas a instrução seguinte precisa desse dado na sua execução (`EX`) logo no ciclo seguinte.

Isso é:

```text
hazard de dados load-use
```

Mesmo com forwarding comum, normalmente precisa de uma bolha/stall.

Resumo:

```text
LOAD seguido imediatamente de uso do registrador carregado -> load-use hazard
```

Exercícios:

1. `LW R5,0(R1)` seguido de `SUB R6,R5,R2`. Qual hazard?
2. `ADD R5,R1,R2` seguido de `SUB R6,R5,R3`. É load-use?

Gabarito:

```text
1. Hazard de dados load-use.
2. Não. É dependência de dados comum entre ALU-ALU; forwarding costuma resolver.
```

## 12. Questão 42 - Imediato Signed E Deslocamento De Branch

O imediato signed de 12 bits tem intervalo:

```text
-2048 até +2047
```

Mas a questão disse que ele representa deslocamento em palavras de 4 bytes.

Então precisa multiplicar por 4:

```text
-2048 * 4 = -8192
+2047 * 4 = +8188
```

Resposta:

```text
de -8192 a +8188 bytes
```

Por que o positivo termina em `8188` e não `8192`?

Porque signed de 12 bits não vai até `+2048`; vai só até `+2047`.

Exercícios:

1. Imediato signed de 10 bits em palavras de 4 bytes. Intervalo em bytes?
2. Imediato signed de 8 bits em halfwords de 2 bytes. Intervalo em bytes?

Gabarito:

```text
1. 10 bits signed: -512 a +511; em bytes: -2048 a +2044.
2. 8 bits signed: -128 a +127; em bytes: -256 a +254.
```

## 13. Dúvidas Em Questões Corretas

### Questões 11 e 45 - Sufixo `_n`

`_n` significa ativo em nível baixo.

```text
enable_n = 0 -> enable ativo
enable_n = 1 -> enable inativo
```

Se a saída também tem `_n`:

```text
Y2_n = 0 -> saída Y2 está ativa
Y2_n = 1 -> saída Y2 está inativa
```

Não leia `_n` como "ativa quando é 1". É o contrário: o sinal é ativo quando vale `0`.

### Questão 13 - Comparação Signed E Unsigned

As alternativas pareciam estranhas, mas a ideia da questão era boa:

```text
o mesmo padrão de bits pode ter ordem diferente em signed e unsigned
```

Exemplo:

```text
1001 unsigned = 9
1001 signed  = -7
```

### Questão 21 - Formato Q3.4 Com 8 Bits

Quando aparece `Q3.4` em 8 bits signed, normalmente a contagem é:

```text
1 bit de sinal
3 bits inteiros
4 bits fracionários
```

Total:

```text
1 + 3 + 4 = 8 bits
```

Por isso o formato pode ser chamado de `Q3.4` e ainda assim usar 8 bits.

### Questão 33 - PROM, PLA E PAL

O "costuma" aparece porque existem variações comerciais e históricas, mas para prova a regra padrão é:

```text
PROM -> decoder/AND fixo, OR programável
PLA  -> AND programável e OR programável
PAL  -> AND programável e OR fixo
```

Decore isso como modelo clássico.

### Questão 36 - `BNE` Verifica O Quê?

No trecho com:

```asm
SUBS R1, R1, #1
BNE L
```

`SUBS` subtrai e atualiza flags.

`BNE` verifica a flag `Z`:

```text
BNE -> Branch if Not Equal -> desvia se Z=0
```

Então ele repete enquanto o resultado da subtração não virou zero.

### Questão 47 - ASCII E Paridade

ASCII padrão tem 7 bits.

Se adiciona um bit de paridade:

```text
total transmitido = 8 bits
```

Paridade ímpar:

```text
o número total de bits 1 precisa ser ímpar
```

Se os 7 bits ASCII têm 4 bits em `1`, o bit de paridade precisa ser `1`:

```text
4 + 1 = 5, que é ímpar
```

### Questão 48 - Moore E Mealy

A alternativa "Nenhuma FSM pode mudar saída sem trocar estado" está errada porque isso pode acontecer em Mealy.

```text
Moore -> saída depende só do estado
Mealy -> saída depende do estado e da entrada
```

Se a entrada muda no meio do ciclo, uma saída Mealy pode mudar sem que o estado armazenado mude.

### Questão 49 - Corrigir Violação De Hold

Violação de setup pode ser resolvida reduzindo frequência, porque aumenta o período do clock.

Violação de hold não é resolvida assim.

Hold depende de:

```text
atraso mínimo do caminho
skew
tempo de hold do FF
```

Para ajudar hold:

```text
adicionar atraso mínimo no caminho de dados
ou ajustar skew
```

### Questão 50 - Alternativas Longas

Sua observação é válida para criação de simulado: quando a correta é muito mais longa, ela fica suspeita.

Para o conteúdo, a ideia correta era:

```text
controle pode ser hardwired, PLA/ROM/microcódigo ou mapeado em LUTs em FPGA
```

LUT é uma implementação física possível, não a definição obrigatória do bloco de controle.

## 14. Checklist De Revisão Antes Do Próximo Simulado

Prioridade alta:

```text
1. Checksum módulo 256 + paridade.
2. Setup/hold com skew positivo e negativo.
3. PISO: ordem de saída serial.
4. Ripple-carry: atraso do carry até o MSB.
5. Subtração: C=1 sem borrow, C=0 com borrow.
6. CMOS: saída é complemento da rede pull-down.
7. Energia: Ecap=1/2CV² e Efonte=CV².
8. CMP/BEQ/BNE e flag Z.
9. Endereçamento com <<2 e offset em bytes.
10. Load-use hazard.
11. Branch signed imediato em palavras convertido para bytes.
```

Leitura recomendada:

```text
1. resumo_detalhado_aulas_1_a_27_relembrar.md
2. revisao_certa_assuntos_errados.md do simulado 13
3. esta revisão do simulado 14
```

Mini-meta:

```text
Refazer 20 questões só desses tópicos antes de outro simulado geral.
```
