# Explicação Das Dúvidas - Pós Simulado 14

Este arquivo resume as dúvidas que surgiram depois da revisão do Simulado 14. Ele não substitui a revisão dos erros; ele explica com mais calma os pontos que ficaram nebulosos.

## 1. Questão 4 - Checksum E Paridade

Você converteu para decimal e chegou em:

```text
3A = 58
C5 = 197
10 = 16

58 + 197 + 16 = 271
```

Isso estava certo.

Como o checksum é de 8 bits, só interessa a soma módulo 256:

```text
271 - 256 = 15
15 = 0x0F
```

Agora queremos um byte que faça a soma fechar em zero no byte baixo:

```text
0x0F + checksum = 0x100
checksum = 0x100 - 0x0F
checksum = 0xF1
```

Conferindo:

```text
0x0F + 0xF1 = 0x100
byte baixo = 0x00
```

Por isso o checksum é:

```text
F1
```

### Bit de paridade

Bit de paridade é um bit extra usado para detectar erro simples.

Paridade par significa:

```text
o total de bits 1 precisa ser par
```

O checksum era:

```text
F1 = 11110001
```

Tem 5 bits `1`. Como 5 é ímpar, adiciona bit de paridade `1`:

```text
5 + 1 = 6
```

Agora o total de bits `1` é par.

Resposta:

```text
Checksum F1 e bit de paridade 1
```

## 2. Skew, Setup E Hold

Use estas fórmulas:

```text
Setup:
Tclk >= tCQmax + tPDmax + tsetup - skew

Hold:
tCQmin + tPDmin >= thold + skew
```

Definição:

```text
skew = chegada do clock no destino - chegada do clock na origem
```

Se o clock chega mais tarde no destino:

```text
skew positivo
ajuda setup
piora hold
```

Se o clock chega mais cedo no destino:

```text
skew negativo
piora setup
ajuda hold
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

Logo:

```text
Tclk mínimo = 8,4 ns
não há violação de hold
```

## 3. Questão 23 - Atraso De Ripple-Carry

A questão deu dois atrasos:

```text
120 ps -> tempo para o carry passar por um full adder
180 ps -> tempo para o bit de soma sair depois que o carry chegou naquele estágio
```

Num somador ripple-carry de 16 bits, o pior caso é o bit mais significativo.

O carry precisa atravessar os 15 estágios anteriores:

```text
15 * 120 ps = 1800 ps
```

Depois que o carry chega no último estágio, o bit de soma ainda demora:

```text
180 ps
```

Total:

```text
1800 ps + 180 ps = 1980 ps
1980 ps = 1,98 ns
```

Resumo:

```text
atraso total = atraso do carry atravessando os estágios anteriores + atraso da soma final
```

## 4. Questão 24 - Borrow E Flag C

Em subtração unsigned:

```text
A - B
```

Tem borrow quando:

```text
A < B
```

Ou seja, se o número que está sendo subtraído é maior que o primeiro, precisa "emprestar".

Exemplo:

```text
3 - 5
```

Como:

```text
3 < 5
```

houve borrow.

Na convenção da questão:

```text
C = 1 -> sem borrow
C = 0 -> com borrow
```

Então:

```text
3 - 5 -> C = 0
```

## 5. Questão 29 - Fórmulas De Energia

Essas fórmulas são importantes para o edital, porque o conteúdo inclui potência, energia, capacitância, atraso e comportamento dinâmico em CMOS.

As principais:

```text
Energia armazenada no capacitor:
Ecap = 1/2 C V²

Energia retirada da fonte ao carregar:
Efonte = C V²

Potência dinâmica:
Pdin = alpha C V² f
```

Para a questão:

```text
C = 4 pF
V = 1,2 V
```

Energia armazenada:

```text
Ecap = 1/2 * 4 * 1,2²
Ecap = 2 * 1,44
Ecap = 2,88 pJ
```

Energia retirada da fonte:

```text
Efonte = 4 * 1,44
Efonte = 5,76 pJ
```

Pegadinha:

```text
a fonte fornece o dobro do que fica armazenado no capacitor
```

## 6. Questão 37 - CMP, BEQ E Arquitetura

Não precisa virar especialista em ARM, mas é bom saber o básico porque o simulado e o edital usam conceitos de assembly, desvios e flags.

```asm
CMP R2, #0
```

Significa comparar `R2` com zero. Internamente, faz:

```text
R2 - 0
```

O resultado não é salvo em registrador; ele atualiza flags.

Se `R2 = 0`, então:

```text
R2 - 0 = 0
Z = 1
```

`BEQ` significa:

```text
Branch if Equal
```

Então:

```text
BEQ desvia se Z = 1
BNE desvia se Z = 0
```

## 7. Questão 38 - Por Que Usar `<<2`

`<<2` significa deslocamento à esquerda de 2 bits.

Em inteiros binários:

```text
<<2 = multiplicar por 2² = multiplicar por 4
```

A questão tinha:

```text
[R4 + R1 << 2]
```

Isso significa:

```text
endereço = R4 + (R1 * 4)
```

Por que multiplicar por 4?

Porque o vetor era de words de 32 bits:

```text
32 bits = 4 bytes
```

Memória byte-addressable usa endereço por byte. Então o índice precisa virar deslocamento em bytes.

Na questão:

```text
R4 = 0x1000
R1 = 5
R1 << 2 = 5 * 4 = 20 = 0x14
```

Logo:

```text
0x1000 + 0x14 = 0x1014
```

## 8. Questão 41 - Load-Use Hazard

Isso só faz sentido em processador com pipeline.

Pipeline clássico:

```text
IF -> ID -> EX -> MEM -> WB
```

Sequência:

```asm
LW  R1, 0(R2)
ADD R3, R1, R4
```

O `LW` carrega `R1` da memória.

O problema é que o dado carregado só fica pronto depois do estágio `MEM`.

Mas a instrução seguinte, `ADD`, precisa de `R1` no estágio `EX`, cedo demais.

Então:

```text
a instrução tenta usar R1 antes do load terminar de produzir R1
```

Isso é:

```text
hazard de dados load-use
```

Solução típica:

```text
stall/bolha
```

Se houvesse uma instrução independente no meio, poderia dar tempo para o dado chegar.

## 9. Questão 42 - Imediato Signed E Deslocamento De Branch

A questão dizia:

```text
imediato signed de 12 bits
```

Signed de 12 bits em complemento de 2 vai de:

```text
-2048 até +2047
```

Não vai até `+2048`, porque o lado positivo tem um valor a menos.

Depois a questão dizia que o imediato representa palavras de 4 bytes.

Então multiplica tudo por 4:

```text
-2048 * 4 = -8192
+2047 * 4 = +8188
```

Resposta:

```text
de -8192 a +8188 bytes
```

É parecido com a questão 38:

```text
o campo está em palavras
mas o endereço real é em bytes
```

## 10. Sufixo `_n`

`_n` significa ativo baixo.

```text
0 -> ativo
1 -> inativo
```

Exemplos:

```text
enable_n = 0 -> enable ativo
reset_n  = 0 -> reset ativo
Y2_n     = 0 -> saída Y2 selecionada/ativa
```

É só o inverso do que normalmente se pensa para sinal ativo alto.

## 11. Q3.4 Signed

Em `Q3.4 signed` com 8 bits, normalmente a contagem é:

```text
1 bit de sinal
3 bits de parte inteira
4 bits de fração
```

Total:

```text
1 + 3 + 4 = 8 bits
```

Então sim: existem 7 bits além do sinal, mas todos participam do complemento de 2.

Não seria `Q3.5`, porque isso daria:

```text
1 sinal + 3 inteiros + 5 fracionários = 9 bits
```

## 12. Questão 36 - Tipo De Assembly

O trecho era estilo ARM simplificado.

```asm
SUBS R1, R1, #1
```

Significa:

```text
R1 = R1 - 1
e atualiza flags
```

O `S` em `SUBS` indica que a instrução atualiza flags.

Depois:

```asm
BNE L
```

Significa:

```text
desvie para L se Z = 0
```

Ou seja, ele não compara registradores diretamente nessa linha. Ele usa a flag `Z` deixada pela instrução anterior.

Se depois da subtração:

```text
R1 != 0 -> Z = 0 -> BNE desvia
R1 = 0  -> Z = 1 -> BNE não desvia
```

## 13. Questão 47 - Bit De Paridade

Bit de paridade é um bit extra usado para detectar erro.

Paridade par:

```text
o total de bits 1 precisa ser par
```

Paridade ímpar:

```text
o total de bits 1 precisa ser ímpar
```

Exemplo:

```text
ASCII padrão = 7 bits
```

Se os 7 bits têm 4 bits em `1` e a paridade pedida é ímpar:

```text
4 é par
```

Então adiciona bit de paridade `1`:

```text
4 + 1 = 5
```

Agora o total é ímpar.

Total transmitido:

```text
7 bits ASCII + 1 bit de paridade = 8 bits
```

## 14. O Que É Skew E Como Se Ajusta

Skew é diferença de chegada do clock entre dois pontos do circuito.

Exemplo:

```text
FF origem -> lógica combinacional -> FF destino
```

O clock deveria chegar ao mesmo tempo nos dois flip-flops, mas na prática pode chegar um pouco antes ou depois.

```text
skew = chegada no destino - chegada na origem
```

Na prática, ajusta-se skew mexendo na distribuição do clock:

```text
buffers de clock
comprimento/roteamento das trilhas
clock tree
inserção de atraso em algum caminho de clock
```

Em projeto real, ferramentas de síntese/layout fazem boa parte disso.

Para prova, o que importa:

```text
skew positivo no destino -> ajuda setup, piora hold
skew negativo no destino -> piora setup, ajuda hold
```

Hold geralmente não se resolve diminuindo frequência. Corrige-se com:

```text
aumentar atraso mínimo no caminho de dados
ou ajustar skew
```
