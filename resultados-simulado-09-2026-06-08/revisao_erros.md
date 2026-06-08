# Revisao dos erros - Simulado 09

Simulado: **Aulas 13 e 18 a 24 - Revisao Completa**

Data: **08/06/2026**

Resultado ajustado: **56/60 (93%)**

Tempo: **00:34:01**

## Ajuste manual registrado

A **Questao 1** foi tratada como **correta por ambiguidade**, porque as alternativas **B** e **C** traziam a mesma expressao:

```text
D = T XOR Q
```

Entao ela nao entra como erro real de conteudo.

## Diagnostico geral

Seu desempenho ficou bem forte. Depois do ajuste, sobraram quatro pontos reais:

1. **PISO e tipos de registrador**
2. **Calculo de potencia dinamica**
3. **Bits de endereco / 64K = 2^16**
4. **Bitstream e HDL**

Pelos blocos, nao houve area colapsada. O mais baixo ficou:

```text
Bloco 1 - Aula 13: 6/7 (86%)
```

Ou seja: o simulado foi bom de verdade.

---

# Questao 4 - PISO

## Conceito

PISO significa:

```text
Parallel-In Serial-Out
```

Ou seja:

- entra varios bits ao mesmo tempo;
- sai um bit por vez.

## Regra pratica

```text
PISO = entrada paralela, saida serial
SIPO = entrada serial, saida paralela
SISO = entrada serial, saida serial
PIPO = entrada paralela, saida paralela
```

## Exercicios semelhantes

1. Qual registrador recebe bits em serie e entrega em paralelo?

   A) PISO
   B) SIPO
   C) SISO
   D) PIPO

2. Um registrador carrega 8 bits de uma vez e depois desloca um bit por clock na saida. Ele e:

   A) PISO
   B) SIPO
   C) SISO
   D) PIPO

## Gabarito

1. **B**
2. **A**

---

# Questao 34 - Potencia dinamica

## Formula

```text
Pdyn = alpha . C . VDD^2 . f
```

## Resolucao

Dados:

```text
alpha = 0,2
C = 20 pF = 20 x 10^-12
VDD = 1,2
f = 100 MHz = 100 x 10^6
```

Substituindo:

```text
P = 0,2 x 20e-12 x (1,2)^2 x 100e6
P = 0,2 x 20e-12 x 1,44 x 100e6
P = 0,000576 W
P = 0,576 mW
```

## Onde voce escorregou

Aqui foi mais unidade/potencia de dez do que conceito.

## Exercicios semelhantes

1. Calcule `Pdyn` para `alpha=0,5`, `C=10 pF`, `VDD=1 V`, `f=100 MHz`.

   A) `0,5 mW`
   B) `5 mW`
   C) `50 uW`
   D) `0,05 mW`

2. Se `VDD` dobra, o efeito sobre `Pdyn`, mantendo o resto constante, e:

   A) dobra
   B) triplica
   C) quadruplica
   D) nao muda

## Gabarito

1. **A**
2. **C**

---

# Questao 43 - Bits de endereco

## Conceito

Se ha `n` bits de endereco:

```text
numero de posicoes = 2^n
```

## Resolucao

```text
64K = 64 x 1024 = 65536 = 2^16
```

Logo:

```text
n = 16 bits
```

## Macete rapido

```text
1K = 2^10
64K = 64 x 2^10 = 2^6 x 2^10 = 2^16
```

## Exercicios semelhantes

1. Quantos bits de endereco sao necessarios para `8K` posicoes?

   A) 8
   B) 10
   C) 13
   D) 16

2. Uma memoria tem `2^12` posicoes. Quantos bits de endereco ela usa?

   A) 10
   B) 12
   C) 14
   D) 16

## Gabarito

1. **C**
2. **B**

---

# Questao 60 - Bitstream e HDL

## Conceito

HDL nao e programa sequencial comum. HDL descreve hardware.

Depois:

- a ferramenta sintetiza;
- mapeia a logica;
- gera um **bitstream**;
- o bitstream configura o FPGA.

## Regra curta

```text
HDL -> descreve hardware
bitstream -> configura o FPGA
```

## O que estava errado nas alternativas ruins

- A) trata HDL como software comum executado por CPU;
- C) restringe Verilog a DRAM, o que nao faz sentido;
- D) ignora que FPGA baseado em SRAM normalmente precisa recarregar configuracao ao ligar.

## Exercicios semelhantes

1. Qual afirmacao e correta?

   A) HDL descreve hardware que sera sintetizado.
   B) Bitstream e apenas um comentario no codigo Verilog.
   C) FPGA em SRAM nunca perde configuracao.
   D) LUT serve apenas para armazenar texto.

2. Em fluxo de FPGA, a ordem mais correta e:

   A) bitstream -> HDL -> sintese
   B) HDL -> sintese/mapeamento -> bitstream
   C) CPU -> compilacao C -> DRAM
   D) assembly -> LUT -> checksum

## Gabarito

1. **A**
2. **B**

---

# Revisao concentrada

Memorize estas quatro linhas:

```text
PISO = Parallel-In Serial-Out
Pdyn = alpha.C.VDD^2.f
n bits de endereco -> 2^n posicoes
HDL descreve hardware; bitstream configura FPGA
```

## Proximo passo curto

1. Refazer Q34 e Q43 sem olhar.
2. Decorar PISO/SIPO/SISO/PIPO.
3. Ler uma vez o bloco de FPGA da Aula 24.
