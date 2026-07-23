# Mini aula - Bordas de prova: one-hot, ring/Johnson e leakage

Atualizado em: 02/07/2026

Objetivo: cobrir pequenos assuntos que podem aparecer como alternativa de prova, sem abrir conteúdo grande novo.

Estude isto como reconhecimento:

```text
one-hot        → codificação de estados
ring counter   → contador em anel
Johnson counter → contador em anel torcido
leakage        → corrente de fuga, ligada à potência estática
```

---

# 1. Codificação one-hot em FSM

Ideia central: em uma FSM, cada estado precisa ser representado por bits. A codificação mais comum usa binário, mas existe também a codificação one-hot.

## 1.1 Codificação binária

Na codificação binária, usamos o menor número de flip-flops possível.

```text
N estados → ceil(log2 N) flip-flops
```

Exemplo com 4 estados:

```text
S0 = 00
S1 = 01
S2 = 10
S3 = 11
```

Vantagem:

- usa poucos flip-flops.

Desvantagem:

- a lógica de próximo estado pode ficar mais complexa.

## 1.2 Codificação one-hot

Na codificação one-hot, cada estado tem seu próprio flip-flop.

```text
N estados → N flip-flops
```

Exemplo com 4 estados:

```text
S0 = 0001
S1 = 0010
S2 = 0100
S3 = 1000
```

Em cada estado válido, apenas um bit fica em `1`.

Por isso o nome:

```text
one-hot → um bit "quente"/ativo por vez
```

## 1.3 Por que usar one-hot?

One-hot usa mais flip-flops, mas pode simplificar a lógica combinacional.

Em FPGA, flip-flops costumam ser abundantes. Por isso, one-hot pode ser interessante.

Resumo:

```text
binária → economiza FFs, pode complicar lógica
one-hot → gasta mais FFs, pode simplificar lógica
```

## 1.4 Como isso pode cair

Perguntas típicas:

- Quantos flip-flops são necessários?
- Qual codificação tem apenas um bit ativo por estado?
- Qual codificação tende a usar mais FFs?
- Qual pode simplificar a lógica de próximo estado?

Pegadinhas:

- One-hot não usa `ceil(log2 N)` FFs; usa `N` FFs.
- Em one-hot, `0000` normalmente não representa estado válido.
- Em one-hot, `0011` também não é válido, porque tem dois bits ativos.
- Se a prova der codificação de estados, use a codificação dada.

---

# 2. Contador em anel, ou ring counter

Ideia central: um ring counter é um registrador de deslocamento com realimentação.

Ele normalmente circula um único `1` entre os flip-flops.

Exemplo com 4 bits:

```text
0001
0010
0100
1000
0001
...
```

Cada clock desloca o `1` para a próxima posição.

## 2.1 Relação com one-hot

O ring counter é praticamente uma sequência one-hot automática.

Com 4 flip-flops:

```text
4 FFs → 4 estados úteis
```

Isso é diferente de um contador binário:

```text
4 FFs em contador binário → até 16 estados
4 FFs em ring counter simples → 4 estados one-hot
```

## 2.2 Para que serve?

Pode ser usado para:

- gerar sequências de controle;
- ativar uma linha por vez;
- dividir/organizar fases de operação;
- controlar etapas simples.

## 2.3 Pegadinhas

- Ring counter não conta em binário comum.
- Usa muitos flip-flops para poucos estados.
- Se inicializar em `0000`, pode ficar preso em `0000`.
- Se mais de um bit estiver em `1`, a sequência deixa de ser one-hot.
- Normalmente precisa de reset/inicialização para colocar exatamente um `1`.

---

# 3. Contador Johnson

Ideia central: o contador Johnson é um ring counter "torcido".

Em vez de realimentar a última saída diretamente, ele realimenta a última saída invertida.

Também é chamado de:

```text
twisted ring counter
```

## 3.1 Exemplo com 4 bits

Uma sequência típica, dependendo da direção do shift, é:

```text
0000
1000
1100
1110
1111
0111
0011
0001
0000
...
```

Com `n` flip-flops, o Johnson counter gera:

```text
2n estados úteis
```

Exemplo:

```text
4 FFs → 8 estados Johnson
```

Comparação:

```text
contador binário com 4 FFs → 16 estados
ring counter com 4 FFs → 4 estados
Johnson com 4 FFs → 8 estados
```

## 3.2 Por que usar Johnson?

Ele gera uma sequência regular e relativamente fácil de decodificar.

É útil quando queremos fases de controle sem precisar de um contador binário completo.

## 3.3 Pegadinhas

- Johnson não é contador binário.
- Johnson com `n` FFs não gera `2^n` estados úteis; gera `2n`.
- Ring counter simples com `n` FFs gera `n` estados úteis.
- Johnson realimenta a saída invertida.
- Ring counter simples realimenta a saída sem inverter.

Resumo rápido:

```text
ring    → realimenta Q
Johnson → realimenta Q'
```

---

# 4. Leakage, corrente de fuga e potência estática

Ideia central: CMOS ideal quase não consome potência quando parado, mas CMOS real consome um pouco por correntes de fuga.

## 4.1 Potência dinâmica

É a potência associada ao chaveamento.

Quando um nó muda de `0` para `1`, capacitâncias são carregadas.

Quando muda de `1` para `0`, capacitâncias descarregam.

Fórmula importante:

```text
Pdin ≈ alpha.C.VDD^2.f
```

Essa é a potência dinâmica.

Ela aumenta com:

- atividade de chaveamento;
- capacitância;
- frequência;
- `VDD^2`.

## 4.2 Potência estática

É a potência consumida mesmo quando o circuito está parado.

No CMOS ideal:

```text
potência estática ≈ 0
```

Porque, em regime estável, não deveria existir caminho direto permanente entre `VDD` e `GND`.

Mas no CMOS real existem correntes pequenas.

Essas correntes são chamadas de:

```text
leakage
corrente de fuga
```

## 4.3 O que é leakage?

Leakage é corrente que passa mesmo quando o transistor deveria estar "desligado".

Em outras palavras:

```text
transistor off ideal → corrente 0
transistor off real  → corrente pequena de fuga
```

Essa corrente pequena gera consumo:

```text
Pestática ≈ VDD.Ileak
```

## 4.4 Diferença entre potência dinâmica, estática e curto-circuito

```text
potência dinâmica      → carga/descarga de capacitâncias ao chavear
potência estática      → consumo parado, principalmente por leakage
potência de curto-circuito → durante transição, PMOS e NMOS podem conduzir ao mesmo tempo por pouco tempo
```

Para prova de Sistemas Digitais, o mais importante é reconhecer:

```text
chaveamento → potência dinâmica
capacitância → energia e atraso
leakage → potência estática
VDD^2 → peso forte na potência dinâmica
```

## 4.5 Pegadinhas

- CMOS ideal tem consumo estático quase nulo, mas CMOS real não.
- Leakage aumenta a potência estática.
- Se a frequência aumenta, a potência dinâmica aumenta.
- Mesmo com clock parado, ainda pode existir consumo por leakage.
- Potência dinâmica depende de `VDD^2`; potência de fuga costuma ser lembrada como `VDD.Ileak`.

---

# Resumo de prova

```text
one-hot:
N estados → N FFs
apenas um bit 1 por estado válido

ring counter:
registrador de deslocamento com realimentação direta
n FFs → n estados úteis

Johnson counter:
registrador de deslocamento com realimentação invertida
n FFs → 2n estados úteis

leakage:
corrente de fuga em transistores reais
ligada à potência estática
Pestática ≈ VDD.Ileak
```

Se aparecer em alternativa:

```text
"Johnson usa 2^n estados com n FFs" → falso
"one-hot economiza FFs" → falso
"ring counter conta em binário" → falso
"leakage é potência dinâmica" → falso
"leakage contribui para potência estática" → verdadeiro
```
