# Revisão - Simulado 19 (24/07/2026)

**Resultado:** 37/40 (93%) em 00:45:08.

**Desempenho:** inglês 10/10; fundamentos e circuitos 9/10; memória e arquitetura 10/10; assembly, pipeline e FPU 8/10.

## Diagnóstico

O desempenho foi excelente: as 37 questões respondidas estavam corretas. As três perdas foram questões deixadas em branco, não erros de raciocínio em respostas marcadas. Nenhum bloco ficou abaixo de 70%.

A prioridade deve ser curta e concentrada:

1. **Endianness e ties-to-even:** prioridade alta, pois também apareceram entre as dúvidas do Simulado 18.
2. **Aritmética saturada:** conceito novo, mas simples.
3. **CMP:** apenas reconhecer o papel da instrução e a relação com os branches.

Não há indicação para revisar inglês ou todo o conteúdo de memória e arquitetura: ambos ficaram em 100%.

## Q12 - Ponto fixo e aritmética saturada

### Conceito

Um formato de ponto fixo possui uma faixa limitada. Quando uma operação produz um valor fora dessa faixa, é preciso decidir o que fazer com o estouro.

Na **aritmética modular**, os bits excedentes são descartados e o resultado dá a volta (*wrap-around*). Em signed, isso pode fazer um valor positivo grande reaparecer como negativo, ou vice-versa.

Na **aritmética saturada**, o resultado fica preso ao extremo mais próximo:

```text
+estouro -> maior valor representável
-estouro -> menor valor representável
```

Exemplo com signed de 8 bits, cuja faixa é de `-128` a `+127`:

```text
120 + 20 = 140

Modular:   140 reaparece como -116
Saturada:  resultado limitado a +127
```

Em processamento de áudio, imagem e sinais, a saturação costuma ser preferível porque uma pequena ultrapassagem do máximo não provoca uma mudança abrupta de sinal.

### Resolução da questão

- **A está errada:** saturação não elimina quantização nem torna todos os valores representáveis.
- **B está correta:** resultados fora da faixa são limitados ao máximo ou ao mínimo.
- **C está errada:** expoente variável é característica de ponto flutuante.
- **D está errada:** ainda é necessário definir largura, escala e posição do ponto binário.

**Resposta: B.**

### Exercícios

1. Em signed de 8 bits, calcule `100 + 50` usando aritmética modular e saturada.
2. Em signed de 4 bits, cuja faixa é `-8` a `+7`, calcule `-6 + (-5)` usando aritmética modular e saturada.

### Gabarito

1. O resultado matemático é `150`. Modular: `-106`; saturada: `+127`.
2. O resultado matemático é `-11`. Modular: `+5`; saturada: `-8`.

## Q31 - Endianness

### Conceito

Endianness define somente **a ordem dos bytes de uma palavra multibyte na memória**. Não muda:

- a ordem dos bits dentro de cada byte;
- o valor lógico visto no registrador após uma leitura completa;
- complemento de dois;
- o comportamento de operações aritméticas ou branches.

Para armazenar `0x12345678`, se o endereço inicial for `0x1000`:

```text
Little-endian                    Big-endian

0x1000 -> 0x78                   0x1000 -> 0x12
0x1001 -> 0x56                   0x1001 -> 0x34
0x1002 -> 0x34                   0x1002 -> 0x56
0x1003 -> 0x12                   0x1003 -> 0x78
```

No little-endian, o **byte menos significativo** (`0x78`) ocupa o menor endereço. No big-endian, o **byte mais significativo** (`0x12`) ocupa o menor endereço.

Se o processador carregar a palavra inteira com a instrução apropriada, o registrador recebe `0x12345678` nos dois sistemas. A diferença aparece ao observar a memória byte a byte, usar `LDRB` ou trocar dados binários entre sistemas.

### Resolução da questão

- **A está errada:** não se invertem os bits dentro dos bytes.
- **B está correta:** muda a ordem dos bytes nos endereços, não o valor lógico da palavra no registrador.
- **C está errada:** endianness não muda a largura da operação.
- **D está errada:** branches não têm seu sentido invertido.

**Resposta: B.**

### Vale estudar agora?

Sim, mas sem aprofundamento. Esse assunto ficou em branco nos Simulados 18 e 19 e pode ser combinado com `load byte`, offsets e modos de endereçamento. Bastam a tabela acima e alguns exercícios; não é necessário estudar protocolos ou detalhes de sistemas operacionais.

### Exercícios

1. Em little-endian, `0xA1B2C3D4` é armazenado a partir de `0x2000`. Qual byte está em `0x2002`?
2. A memória little-endian contém `44 33 22 11` nos endereços consecutivos `0x3000` a `0x3003`. Qual palavra de 32 bits é carregada a partir de `0x3000`?

### Gabarito

1. Ordem: `D4 C3 B2 A1`. Em `0x2002` está `0xB2`.
2. A palavra carregada é `0x11223344`.

## Q40 - FPU e round to nearest, ties to even

### Conceito

Ao reduzir a quantidade de bits de uma mantissa, o valor exato pode ficar entre dois números representáveis. O arredondamento escolhe um deles.

Em **round to nearest**, escolhe-se o mais próximo. Quando o valor está exatamente no meio, ocorre um **empate** (*tie*). O complemento **ties to even** manda escolher a opção cujo último bit mantido seja `0`.

Esse bit é chamado de “par” porque, interpretando os bits mantidos como um inteiro, LSB `0` corresponde a um valor par.

Exemplo:

```text
Bits mantidos:     1.010
Bits descartados:  1000...
```

É um empate exato e o LSB mantido já é `0`; permanece `1.010`.

```text
Bits mantidos:     1.011
Bits descartados:  1000...
```

Também é empate, mas o LSB mantido é `1`; incrementa-se para `1.100`, cujo LSB é `0`.

Se todo empate fosse arredondado para cima, uma sequência grande de operações acumularia tendência positiva. Ties-to-even distribui os empates entre subir e permanecer, reduzindo o viés estatístico.

### Resolução da questão

- **A está errada:** empates podem ocorrer; os bits guard, round e sticky ajudam justamente a identificá-los.
- **B está errada:** arredondamento para cima não transforma automaticamente números normais em subnormais.
- **C está correta:** escolher o resultado com LSB par reduz o viés sistemático.
- **D está errada:** `sticky=0`, sozinho, não exige truncamento; é necessário analisar os demais bits.

**Resposta: C.**

### Regra operacional curta

No modo nearest/ties-to-even:

```text
Mais que a metade -> incrementa
Menos que a metade -> mantém
Exatamente a metade -> escolhe o resultado com LSB mantido igual a 0
```

Com bits `G`, `R` e `S`, o empate exato é `G=1`, `R=0` e `S=0`.

### Exercícios

1. Bits mantidos `1.110` e bits descartados `1000...`. Qual é o resultado?
2. Bits mantidos `1.101` e bits descartados correspondentes a `G=1`, `R=0`, `S=0`. Qual é o resultado?

### Gabarito

1. É empate e o LSB mantido já é `0`: permanece `1.110`.
2. É empate e o LSB mantido é `1`: incrementa para `1.110`.

## Observação da Q33 - O que é `CMP`?

`CMP` significa **compare**. Em uma arquitetura ARM-like, a instrução:

```asm
CMP R1, R2
```

realiza internamente:

```text
R1 - R2
```

O resultado da subtração **não é gravado em um registrador**. A instrução atualiza apenas as flags, como:

- `Z`: resultado zero;
- `N`: resultado negativo;
- `C`: carry ou ausência de borrow, usado em comparações unsigned;
- `V`: overflow signed.

Uma instrução de branch posterior consulta essas flags:

```asm
CMP R1, R2
BEQ iguais       ; desvia se R1 == R2
BLT menor_signed ; desvia se R1 < R2 com sinal
BHI maior_unsig  ; desvia se R1 > R2 sem sinal
```

Em MIPS, é comum encontrar `BEQ R1,R2,label` ou `BNE R1,R2,label`, com os registradores na própria instrução de desvio. Portanto, a forma muda entre arquiteturas, mas o conceito é o mesmo: comparar valores e decidir se haverá desvio.

### Exercícios

1. Depois de `CMP R1,R2`, a flag `Z=1`. O que isso informa?  
   **Gabarito:** `R1-R2=0`, portanto `R1=R2`; `BEQ` seria tomado.
2. `CMP` substitui o conteúdo de `R1` pelo resultado da subtração?  
   **Gabarito:** não; descarta o resultado e atualiza somente as flags.

## Revisão recomendada para a reta final

Faça apenas 30 a 40 minutos:

1. Reproduza de memória a tabela little-endian de `0x12345678`.
2. Resolva os quatro exercícios de endianness e ties-to-even.
3. Memorize: saturação prende no extremo; modular dá a volta.
4. Memorize: `CMP` subtrai para atualizar flags, sem salvar o resultado.

Depois disso, esses tópicos não justificam uma aula longa. Volte às questões mistas e à revisão de véspera.
