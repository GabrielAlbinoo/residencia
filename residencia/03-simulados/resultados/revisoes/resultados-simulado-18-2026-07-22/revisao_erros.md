# Revisão - Simulado 18 (22/07/2026)

**Resultado:** 32/40 (80%) em 01:05:57. Inglês 9/10; Integração I 9/10; Integrações II e III 7/10.

## Diagnóstico

O resultado é bom. Os erros se concentraram em detalhes novos de organização/arquitetura: cache, representação de bytes na memória, arredondamento de FPU e flags. Prioridade: cache direta, endian + loads, imediato com sinal, branches signed/unsigned, paridade e arredondamento *ties-to-even*.

## Q3 - `albeit`

`Albeit` significa *although* / “embora”. Introduz uma concessão: houve melhora de precisão, **mas** com maior uso de memória. Alternativa D.

1. “The method is fast, albeit less accurate.” Relação? **Gabarito:** concessão; rapidez é qualificada pela menor precisão.
2. “Although the test passed, the evidence is limited.” **Gabarito:** contraste/concessão.

## Q12 - ASCII e paridade

Paridade é um bit adicional para **detectar** erros. Em paridade par, dados + paridade devem ter quantidade par de bits 1.

```text
0110101 tem quatro bits 1 -> já é par -> bit de paridade = 0
```

Um bit invertido é detectado porque troca a paridade. Paridade simples não indica qual bit errou e não corrige. Duas inversões podem passar despercebidas.

1. Dados `1011001`, paridade par: bit adicional? **Gabarito:** `0` (quatro uns).
2. Duas inversões de bits sempre são detectadas por paridade? **Gabarito:** não; preservam a paridade.

## Q23 - tag, índice e offset de cache

Em cache diretamente mapeada:

```text
endereço = [ tag | índice | offset ]
```

- linha de 32 B = `2^5` -> offset = 5;
- `8 KiB / 32 B = 256 = 2^8` linhas -> índice = 8;
- tag = `32 - 8 - 5 = 19`.

Resposta: **19, 8, 5**.

Receita: tamanho da linha -> offset; capacidade/linha -> índice; o restante -> tag.

1. Cache direta 4 KiB, linha 16 B, endereço 32 bits. **Gabarito:** tag 20, índice 8, offset 4.
2. Cache direta 16 KiB, linha 64 B, endereço 32 bits. **Gabarito:** tag 18, índice 8, offset 6.

## Q29 - FPU e ties-to-even

Mantido `1.011`, descartado exatamente `1000...`: é empate. *Ties-to-even* escolhe o resultado cujo último bit armazenado é 0. Como o LSB mantido é 1, incrementa:

```text
1.011 + 0.001 = 1.100
```

Resposta D.

Regra GRS: em nearest/ties-to-even, incremente se `G=1` e (`R=1` ou `S=1` ou LSB mantido = 1). No empate exato (`G=1,R=0,S=0`), olhe somente o LSB mantido.

1. Mantido `1.010`, descartado `1000...`. **Gabarito:** `1.010`; LSB é par.
2. Mantido `1.101`, com `G=1,R=0,S=1`. **Gabarito:** `1.110`; há bits além da metade, então incrementa.

## Q30 - little-endian e LDRB

Little-endian guarda o byte menos significativo no menor endereço. Para `0x12345678` em `0x1000`:

| Endereço | Byte |
|---|---|
| `0x1000` | `0x78` |
| `0x1001` | `0x56` |
| `0x1002` | `0x34` |
| `0x1003` | `0x12` |

`LDRB R2,[R0,#2]` lê um byte em `0x1002`: `0x34`. O `B` significa byte e completa os bits altos com zero: `R2=0x00000034`. Isso pode cair por envolver base+offset, largura de load e bytes.

1. Little-endian: `0xA1B2C3D4` em `0x2000`; `LDRB [R0,#1]`. **Gabarito:** `0x000000C3`.
2. Big-endian: mesma word e mesmo offset. **Gabarito:** `0x000000B2`.

## Q32 - branches signed e unsigned

`CMP 0xFF,0x01` compara a mesma sequência de bits em duas interpretações:

- signed em 8 bits: `0xFF=-1`, então `-1<1`; `BLT` testa `N != V` -> verdadeiro;
- unsigned: `0xFF=255`, então `255>1`; `BHI` testa `C=1` e `Z=0` -> verdadeiro.

Resposta D.

Mapa rápido: `BEQ: Z=1`; `BLT: N!=V`; `BGE: N=V`; `BHI: C=1 e Z=0`; `BLO: C=0`.

1. Em 8 bits, `0x80` comparado a `0x01`: signed e unsigned? **Gabarito:** signed `-128<1`; unsigned `128>1`.
2. Flags `Z=0,C=0,N=0,V=0`: BHI e BLT? **Gabarito:** ambos falsos.

## Q35 - imediato signed

`0xFFFC` como imediato signed de 16 bits representa `-4`. A extensão de sinal gera `0xFFFFFFFC`, ainda com valor -4. Logo:

```text
0x00001000 + (-4) = 0x00000FFC
```

Resposta A. Não se concatena o imediato estendido com a base; realiza-se uma soma.

1. Base `0x00002000`, imediato `0xFFF0` signed. **Gabarito:** `0x00001FF0`.
2. Base `0x00002000`, imediato `0x0010` signed. **Gabarito:** `0x00002010`.

## Q36 - FSM

Você já calculou a sequência certa, `0,1,0`. Só faltou a classificação: `Z=Q1` depende apenas do estado, então é **Moore**. Sem exercícios extras.

## Dúvidas em questões corretas

### Q17 - setup, hold e skew

Com `skew = clock no destino - clock na origem`:

- setup: `Tclk >= Tc-q(max) + Tcomb(max) + Tsetup - skew`; skew positivo ajuda setup;
- hold: `Tc-q(min) + Tcomb(min) >= Thold + skew`; skew positivo piora hold.

Portanto, não se soma o skew a `tmin` no lado esquerdo; ele aumenta o requisito de hold.

### Q20 - potência dinâmica

`Pdin = alpha * C * V^2 * f`. Converta capacitância para F, frequência para Hz e confira que o resultado está em W. A tensão tem efeito quadrático.

### Q24 - cache 2-way, LRU e dirty

Sim: são duas linhas por conjunto. O índice encontra o conjunto e as duas tags são comparadas. Em miss, LRU escolhe qual way substituir. Se a vítima estiver `dirty=1`, ela é escrita de volta na memória antes da substituição.

### Q26 - latência e throughput

O raciocínio está certo, mas faltou somar a primeira instrução. Para cinco estágios de 2 ns e 20 instruções:

```text
tempo = 10 ns + 19*2 ns = 48 ns
```

Fórmula: `latência da primeira + (N-1)*período`.

### Q34 - ALUSrc

Em MIPS-like, `ALUSrc=1` quando a segunda entrada da ULA é o imediato estendido: `addi`, `lw`, `sw`. Em operação registrador-registrador (`add R1,R2,R3`), `ALUSrc=0`.

## Próximo estudo curto

Antes do próximo simulado: 20-30 minutos com cache direta, endian + loads, imediato signed e flags. São os únicos tópicos ainda marcados como “não sei resolver”.
