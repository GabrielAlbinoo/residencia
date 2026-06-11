# Revisao Dos Erros - Simulado 11

**Simulado:** Geral aulas 1 a 27 - dificil  
**Data:** 11/06/2026  
**Tempo bruto:** 03:03:38  
**Tempo ajustado para o log:** 02:03:38  
**Resultado bruto:** 47/60 (78%)  
**Resultado revisado conservador:** 48/57 (84%)

## 1. Diagnostico Geral

O nivel do simulado foi realmente mais dificil que os anteriores e o resultado revisado e bom.

O resultado bruto ficou poluido por problemas no proprio simulado. Apos auditoria:

- Questao 9: defeituosa, resposta correta nao estava nas alternativas.
- Questao 17: defeituosa/ambigua, gabarito contradiz a propria explicacao.
- Questao 32: ambigua, nao ha alternativa convencional exata para "soma do MSB".
- Questao 58: gabarito errado; sua alternativa D esta correta.

Tambem houve uma falha grave de qualidade no simulado: o gabarito tinha `53` respostas em `A`, `3` em `B`, `2` em `C`, `2` em `D` e `0` em `E`. Isso nao deve acontecer em proximos simulados.

## 2. Questoes Com Problema No Simulado

### Questao 9 - Karnaugh 4 variaveis

**Status:** questao defeituosa.

O mapa tinha 1s em praticamente tudo, exceto alguns zeros. A expressao correta, pela sua observacao, e:

```text
F = A + C'D + CD'
```

ou seja:

```text
F = A + D xor C
```

A alternativa marcada como correta no simulado era:

```text
F = A + B'D + CD'
```

Ela falha, por exemplo, no mintermo `m5`:

```text
A=0, B=1, C=0, D=1
```

No mapa esse ponto vale 1, mas `A + B'D + CD'` da 0.

**Conclusao:** nao contar como erro seu. A resposta correta nao estava nas alternativas.

### Questao 17 - FSM Moore

**Status:** questao defeituosa/ambigua.

Pela leitura "apos cada borda", partindo de `S0` e entrada `11010`:

```text
S0 --1--> S1 -> saida 0
S1 --1--> S2 -> saida 1
S2 --0--> S1 -> saida 0
S1 --1--> S2 -> saida 1
S2 --0--> S1 -> saida 0
```

Sequencia:

```text
0,1,0,1,0
```

Essa sequencia nao estava nas alternativas.

A sua resposta `0,0,1,0,1` faz sentido se a questao considerar a saida do estado inicial antes de cada transicao, mas isso nao foi o que o enunciado disse claramente.

**Conclusao:** nao contar como erro de conteudo.

### Questao 32 - Ripple carry multiestagio

**Status:** ambigua.

O enunciado dizia:

```text
somador ripple de 12 bits
atraso de carry = 0,9 ns por estagio
atraso final de soma = 0,6 ns depois que o carry chega
pergunta: atraso de pior caso para o MSB
```

Para a soma do MSB, o carry precisa chegar ao estagio mais significativo. Em uma leitura classica:

```text
carry ate o MSB: 11 * 0,9 = 9,9 ns
soma final: + 0,6 ns
total: 10,5 ns
```

Mas `10,5 ns` nao estava nas alternativas.

A alternativa `10,8 ns` seria `12 * 0,9`, que parece atraso ate o carry-out, sem somar o atraso final da soma. A alternativa `11,4 ns` seria `12 * 0,9 + 0,6`, mas isso mistura carry-out de 12 estagios com soma final.

**Conclusao:** questao ruim/ambigua. Nao usar como erro principal seu.

### Questao 58 - Karnaugh com termo isolado

**Status:** gabarito errado; sua resposta estava correta.

Sua resposta:

```text
F = C + B'D
```

Ela cobre todos os 1s do mapa e so usa dont cares onde permitido.

A resposta do simulado era:

```text
F = A'C + B'D + ABC'
```

O problema e o termo `ABC'`: ele cobre tambem `m12` e `m13`, que no mapa valem 0. Portanto essa expressao nao e valida.

**Conclusao:** contar essa como certa para voce.

## 3. Questoes Validas Que Voce Errou Ou Deixou Em Branco

### Questao 5 - Paridade

Na palavra recebida:

```text
10110101
```

existem cinco bits 1:

```text
1, 1, 1, 1, 1 -> total impar
```

Como a paridade era par, o teste falha.

O correto para os dados `1011010` seria:

```text
dados: 1011010 -> quatro bits 1
paridade par: bit de paridade deveria ser 0
palavra esperada: 10110100
palavra recebida: 10110101
```

Entao a resposta correta da questao deveria ser a alternativa que dizia que a palavra falha na paridade, pois possui numero impar de bits 1.

Importante: paridade simples detecta quantidade impar de inversoes, mas nao localiza nem corrige o bit errado.

### Questao 10 - POS por Karnaugh

A funcao vale 0 em:

```text
M(0,2,8,10)
```

Esses zeros possuem:

```text
B = 0
D = 0
A e C variam
```

Em POS, agrupando zeros:

- variavel que fica 0 entra direta;
- variavel que fica 1 entra negada.

Logo:

```text
F = (B + D)
```

O seu `B'D'` seria um produto/SOP para detectar `B=0,D=0`, mas a questao pedia POS da funcao, nao a expressao dos zeros.

### Questao 27 - Registrador de deslocamento

O registrador inicia:

```text
0000
```

Desloca para a esquerda e entra bit novo em `Q0`.

Entrada serial: `1,0,1,1`.

Passo a passo:

```text
0000 -> 0001
0001 -> 0010
0010 -> 0101
0101 -> 1011
```

Resultado:

```text
1011
```

Voce marcou `1101`, que seria compativel com outra direcao/entrada do registrador.

### Questao 38 - Porta CMOS

Pull-down NMOS:

```text
A e B em paralelo, em serie com C
```

Entao o pull-down conduz quando:

```text
F' = (A + B)C
```

A saida CMOS e o complemento disso:

```text
F = ((A + B)C)'
F = (A + B)' + C'
F = A'B' + C'
```

Sua observacao `A'B' nao?` estava parcialmente certa: sim, `(A+B)' = A'B'`. A alternativa correta estava escrita como:

```text
(A+B)' + C'
```

### Questao 43 - Capacidade de memoria

`13 linhas de endereco` nao significa 13 registradores.

Significa:

```text
2^13 enderecos = 8192 posicoes
```

Barramento de dados de 16 bits:

```text
16 bits = 2 bytes por posicao
```

Capacidade:

```text
8192 * 2 = 16384 bytes = 16 KiB
```

### Questao 54 - Load no datapath

Para uma instrucao de load:

```text
LDW r3, offset(r1)
```

o caminho e:

```text
1. banco de registradores le r1
2. imediato/offset entra na ULA
3. ULA soma base + offset
4. memoria de dados e lida
5. dado lido volta para o registrador destino
```

Sinais principais:

```text
ALUSrc = 1
MemRead = 1
MemWrite = 0
MemToReg = 1
RegWrite = 1
```

### Questao 56 - Dependencia RAW

Sequencia:

```text
LDW r2, 0(r1)
ADD r3, r2, r4
```

A segunda instrucao precisa ler `r2`, mas `r2` e produzido pela primeira.

Isso e dependencia:

```text
RAW = read after write
```

Este assunto e valido conceitualmente, mas e mais avancado que o nucleo do edital. Revise so o conceito, sem aprofundar pipeline.

### Questao 57 - Vetor e deslocamento

Cada palavra tem 4 bytes.

Se `r1` aponta para o inicio do vetor:

```text
1o elemento -> 0(r1)
2o elemento -> 4(r1)
3o elemento -> 8(r1)
```

Logo:

```asm
LDW r6, 8(r1)
```

### Questao 59 - Potencia e temporizacao

Primeiro acha o maior clock seguro:

```text
Tmin = atraso critico + tCQmax + tsetup
Tmin = 7,5 ns + 1,5 ns = 9,0 ns
```

Frequencia:

```text
f = 1 / 9 ns = 111,1 MHz
```

Potencia dinamica:

```text
P = alpha * C * V^2 * f
P = 0,2 * 120 pF * 1,0^2 * 111,1 MHz
P = 2,67 mW
```

## 4. Observacao Em Questao Correta

### Questao 13 - Expressao de circuito

Sua observacao estava certa:

```text
F = A' + B + C'
```

Passo a passo:

```text
B_n = B'
C_n = C'
N1 = NAND(A, B') = (AB')' = A' + B
N2 = NOR(N1, C') = (N1 + C')' = (A' + B + C')' = AB'C
F = NAND(N2, C) = (AB'C * C)' = (AB'C)' = A' + B + C'
```

## 5. Prioridade De Revisao Agora

Prioridade alta:

- Karnaugh com dont care e verificacao por mintermos;
- POS por agrupamento de zeros;
- capacidade de memoria: `2^enderecos * largura`;
- datapath de `LDW`, `STW`, `BEQ`, `ADD`, `ADDI`;
- potencia dinamica com unidades;
- registradores de deslocamento.

Prioridade media:

- paridade;
- CMOS pull-up/pull-down;
- dependencia RAW/WAR/WAW apenas no nivel conceitual.

Baixa prioridade:

- pipeline em detalhes.

## 6. Mini-Exercicios De Fixacao

### Exercicio 1 - POS

Uma funcao de 4 variaveis vale 0 em `M(1,5,9,13)`. Qual POS minimizada?

**Gabarito:** os zeros tem `C=0` e `D=1`, com A e B variando. Em POS: `C + D'`.

### Exercicio 2 - Memoria

Uma memoria tem 12 linhas de endereco e palavra de 32 bits. Qual capacidade em KiB?

**Gabarito:** `2^12 = 4096` palavras. Cada palavra tem 4 bytes. Total `4096*4 = 16384 bytes = 16 KiB`.

### Exercicio 3 - Load

Para `LDW r7, 12(r2)`, quais sinais principais ficam ativos?

**Gabarito:** `ALUSrc=1`, `MemRead=1`, `MemToReg=1`, `RegWrite=1`, `MemWrite=0`.

### Exercicio 4 - Vetor

Um vetor de words comeca em `r8`. Qual instrucao le o quinto elemento em `r4`?

**Gabarito:** quinto elemento usa deslocamento `16`, pois indices humanos: 1->0, 2->4, 3->8, 4->12, 5->16. Instrucao: `LDW r4, 16(r8)`.

### Exercicio 5 - Potencia

Um bloco tem `Tmin=5 ns`, `C=50 pF`, `V=1,2 V`, `alpha=0,4`. Qual potencia dinamica no maior clock seguro?

**Gabarito:** `f=200 MHz`. `P=0,4*50e-12*1,44*200e6 = 5,76 mW`.
