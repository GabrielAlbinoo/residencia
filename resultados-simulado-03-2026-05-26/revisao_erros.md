# Revisão de Erros — Simulado 03 — Aulas 1 a 9

**Data do simulado:** 26/05/2026  
**Resultado:** 73/90 (81%)  
**Tempo executado:** 03:00:34  
**Questões não respondidas conscientemente:** 5

---

## Diagnóstico Rápido

O resultado foi bom para um simulado longo e difícil. Você ficou em `81%`, com domínio muito forte em:

```text
DeMorgan, dualidade, NAND/NOR: 10/10
Karnaugh de 4 variáveis e don't care: 10/10
```

Nenhum bloco ficou abaixo de `70%`. Entretanto, três blocos ficaram exatamente no limite:

| Bloco | Tema dominante | Resultado | Ação |
|---|---|---:|---|
| 2 | ASCII e checksum | 7/10 | Revisão prioritária |
| 4 | Simplificação algébrica em SOP/POS | 7/10 | Refazer manipulações sem mapa |
| 9 | Síntese NAND/NOR a partir de SOP/POS | 7/10 | Treinar leitura da forma antes de escolher a porta |

As questões que você marcou como **não sei** apontam lacunas reais, e devem vir primeiro:

```text
Q17 — ASCII
Q18 e Q19 — checksum
Q25 — XOR/XNOR de três entradas
Q32 — simplificação booleana com termos sobrepostos
```

A questão `34` também ficou sem resposta, embora não tenha sido marcada como "não sei"; ela entra na mesma revisão prioritária de álgebra.

---

## Ordem de Revisão Recomendada

| Prioridade | Conteúdo | Questões |
|---:|---|---|
| 1 | ASCII e checksum | 17, 18, 19 |
| 1 | XOR/XNOR como paridade | 25 e observação da 24 |
| 1 | Simplificação algébrica em SOP/POS | 32, 34, 37 e observação da 33 |
| 2 | Carry, overflow e extensão de sinal | 7, 9 e observações das 1 e 5 |
| 2 | Mintermos, maxtermos e POS por zeros | 53, 62, 83 |
| 2 | Síntese NAND/NOR | 81, 84 |
| 3 | Barramento tri-state | 51 |
| 3 | Forma eficiente de ir da expressão ao mapa | 66 |

---

# 1. Questão 7 — Carry não é Overflow

## Conceito

Em uma palavra de `8` bits, os mesmos bits podem ser interpretados de duas formas:

```text
sem sinal:             0 a 255
com sinal em C2:      -128 a +127
```

`carry` é o bit que sai pela esquerda em uma soma binária. Ele é relevante para a interpretação **sem sinal**.

`overflow` é um erro de faixa na interpretação **com sinal**. Em soma:

```text
positivo + positivo resultando com bit de sinal 1 → overflow
negativo + negativo resultando com bit de sinal 0 → overflow
positivo + negativo → não há overflow de soma com sinal
```

Pode existir carry sem existir overflow.

## Resolução Passo a Passo

Os operandos são:

```text
E9 = 11101001
2F = 00101111
```

Como `E9` começa com `1`, ele é negativo em complemento de 2:

```text
E9 invertido = 16
16 + 1       = 17 hexadecimal = 23 decimal
E9           = -23
```

O segundo número:

```text
2F = +47
```

Soma com sinal:

```text
-23 + 47 = +24 = 18 hexadecimal
```

Não há overflow com sinal, pois os operandos têm sinais diferentes.

Se você somar os bits como valores sem sinal:

```text
E9 + 2F = 118 hexadecimal
```

O byte armazenado é `18` e existe carry para fora do byte. Isso **não** significa overflow com sinal nesse caso.

**Resposta:** `18`, sem overflow com sinal.

## Exercícios de Fixação

### Exercício 1.1

Em 8 bits com sinal, calcule `F4 + 19` em hexadecimal. Informe resultado, carry e overflow.

### Exercício 1.2

Em 8 bits com sinal, calcule `70 + 32` em hexadecimal. Informe resultado, carry e overflow.

### Gabarito

```text
1.1) F4=-12 e 19=+25. Resultado = +13 = 0D.
     A soma hexadecimal é 10D: há carry, mas não há overflow com sinal.

1.2) 70=+112 e 32=+50. Soma matemática = +162, fora de +127.
     Bits armazenados = A2. Não há carry para fora do byte, mas há overflow com sinal.
```

---

# 2. Questão 9 — Extensão de Sinal

## Conceito

Ao aumentar a quantidade de bits de um número em complemento de 2, você replica o **bit mais à esquerda**, que é o bit de sinal:

```text
positivo: acrescente 0s à esquerda
negativo: acrescente 1s à esquerda
```

Não se adicionam bits à direita, pois isso mudaria o peso dos bits e alteraria o valor.

## Resolução Passo a Passo

A palavra original tem `6` bits:

```text
101101
```

O bit mais à esquerda é `1`; portanto, o número é negativo e a extensão para `8` bits repete esse `1`:

```text
101101 → 11101101
```

Para obter o valor decimal, calcule a magnitude:

```text
11101101 invertido = 00010010
somando 1          = 00010011 = 19
```

Logo:

```text
11101101 = -19
```

**Resposta:** `11101101`, `-19`.

## Exercícios de Fixação

### Exercício 2.1

Estenda `110010`, em complemento de 2 de 6 bits, para 8 bits e determine seu valor decimal.

### Exercício 2.2

Estenda `010111`, em complemento de 2 de 6 bits, para 8 bits e determine seu valor decimal.

### Gabarito

```text
2.1) 110010 → 11110010. Valor: -14.
2.2) 010111 → 00010111. Valor: +23.
```

---

# 3. Questão 17 — ASCII de Caracteres

## Conceito

ASCII codifica **caracteres**, não o valor numérico que eles parecem representar.

Algumas âncoras importantes:

| Caractere | Hexadecimal ASCII |
|---|---:|
| `'0'` | `30` |
| `'9'` | `39` |
| `'A'` | `41` |
| `'Z'` | `5A` |
| `'a'` | `61` |

Assim:

```text
caractere '9' = 39 hexadecimal
valor numérico 9 = 09 hexadecimal
```

São coisas diferentes.

## Resolução Passo a Passo

A sequência pedida possui dois caracteres:

```text
'A'  '9'
```

Consultando as âncoras ASCII:

```text
'A' = 41
'9' = 39
```

Logo, os bytes transmitidos são:

```text
41 39
```

**Resposta:** A.

## Exercícios de Fixação

### Exercício 3.1

Quais bytes ASCII hexadecimais representam a sequência `B4`?

### Exercício 3.2

Quais caracteres são representados pelos bytes ASCII `30 46`?

### Gabarito

```text
3.1) 'B'=42 e '4'=34 → 42 34.
3.2) 30='0' e 46='F' → "0F".
```

---

# 4. Questão 18 — Checksum Aditivo Módulo 256

## Conceito

Um checksum aditivo de `8` bits soma os bytes e conserva apenas o byte final:

```text
checksum = soma módulo 256
```

Em hexadecimal, módulo `256` significa módulo `100` hexadecimal:

```text
se a soma for 1D1, descarte o 1 da esquerda → D1
```

## Resolução Passo a Passo

Some em hexadecimal:

```text
 F2
+38
---
12A

12A
+ A7
----
1D1
```

Como o checksum tem apenas `8` bits, mantenha os dois últimos dígitos hexadecimais:

```text
1D1 → D1
```

**Resposta:** D) `D1`.

## Exercícios de Fixação

### Exercício 4.1

Calcule o checksum aditivo de 8 bits para os bytes `9C`, `F8` e `27`.

### Exercício 4.2

Calcule o checksum aditivo de 8 bits para os bytes `E0`, `39` e `F5`.

### Gabarito

```text
4.1) 9C + F8 + 27 = 1BB → checksum = BB.
4.2) E0 + 39 + F5 = 20E → checksum = 0E.
```

---

# 5. Questão 19 — Limitação do Checksum Simples

## Conceito

O checksum por soma verifica apenas o resultado total. Ele não sabe **como** esse total foi formado.

Assim, alterações que preservam a soma podem passar despercebidas:

```text
um byte aumenta 1
outro byte diminui 1
soma total permanece igual
```

Além disso, uma soma simples normalmente também não detecta troca de ordem:

```text
[4, 8, 2] e [8, 4, 2] possuem a mesma soma
```

## Resolução Passo a Passo

Dados originais:

```text
15 + 83 = 98
```

Alternativa A:

```text
16 + 82 = 98
```

O checksum recebido é igual ao original, mesmo com dados alterados.

**Resposta:** A.

## Exercícios de Fixação

### Exercício 5.1

O checksum por soma de `[21, 40, 9]` detectaria a substituição por `[20, 42, 8]`?

### Exercício 5.2

O checksum por soma de `[3, 12, 5]` detectaria a substituição por `[12, 3, 5]`?

### Gabarito

```text
5.1) Não. Soma original = 70; soma alterada = 70.
5.2) Não. A ordem mudou, mas a soma continua 20.
```

---

# 6. Questão 25 — XOR e XNOR de Três Entradas

## Conceito

Em várias entradas, pense em `XOR` como teste de **paridade**:

```text
XOR = 1 quando a quantidade de bits 1 é ímpar
XNOR = 1 quando a quantidade de bits 1 é par
```

Para três entradas:

| Quantidade de `1s` | XOR | XNOR |
|---:|---:|---:|
| 0 | 0 | 1 |
| 1 | 1 | 0 |
| 2 | 0 | 1 |
| 3 | 1 | 0 |

## Resolução Passo a Passo

Leia as linhas em que a tabela fornece `F=1`:

```text
000 → zero bits 1
011 → dois bits 1
101 → dois bits 1
110 → dois bits 1
```

Em todas elas a quantidade de `1s` é par.

Portanto:

```text
F = (A XOR B XOR C)'
```

Essa é a função chamada na questão de **XNOR de três entradas**, isto é, o complemento da paridade XOR. Evite interpretar como uma sequência de XNORs binários sem parênteses, pois essa escrita pode gerar ambiguidade.

**Resposta:** B) XNOR de três entradas.

## Exercícios de Fixação

### Exercício 6.1

Uma função de três entradas vale `1` nos mintermos `1`, `2`, `4` e `7`. Ela corresponde a XOR ou XNOR de três entradas?

### Exercício 6.2

Uma função de três entradas vale `1` nos mintermos `0`, `3`, `5` e `6`. Ela corresponde a XOR ou XNOR de três entradas?

### Gabarito

```text
6.1) XOR: os mintermos possuem 1 ou 3 bits iguais a 1, quantidade ímpar.
6.2) XNOR: os mintermos possuem 0 ou 2 bits iguais a 1, quantidade par.
```

---

# 7. Questão 30 — Rede NAND seguida de NOR

## Conceito

Antes de simplificar uma rede com nomes de portas, converta cada porta para expressão:

```text
A NAND B = (AB)'
A NOR B  = (A+B)'
```

## Resolução Passo a Passo

A função é:

```text
F = (A NAND B) NOR (A NOR B)
```

Substitua cada porta:

```text
F = [(AB)' + (A+B)']'
```

Aplicando DeMorgan à negação externa:

```text
F = [(AB)']' · [(A+B)']'
F = AB(A+B)
```

Por absorção:

```text
AB(A+B) = AB
```

**Resposta:** C) `AB`.

## Exercícios de Fixação

### Exercício 7.1

Simplifique `F=(A NOR B) NAND (A NAND B)`.

### Exercício 7.2

Simplifique `F=(A NAND A) NOR (B NAND B)`.

### Gabarito

```text
7.1) F=[(A+B)'(AB)']'=(A+B)+AB=A+B.
7.2) F=A' NOR B'=(A'+B')'=AB.
```

---

# 8. Questão 32 — Simplificação com Sobreposição

## Conceito

Em álgebra booleana, um termo pode ser reutilizado em mais de uma combinação, exatamente como uma célula de Karnaugh pode pertencer a dois grupos.

A função:

```text
A'BC + ABC + AB'C + ABC'
```

corresponde aos casos em que pelo menos duas variáveis valem `1`.

## Resolução Passo a Passo

Você chegou a:

```text
AB + C(A'B + AB')
```

Esse caminho não está errado, mas não evidencia rapidamente as sobreposições. Uma forma algébrica mais clara é reaproveitar `ABC`.

Primeiro combine:

```text
ABC + ABC' = AB
```

Mantendo os demais termos:

```text
F = AB + A'BC + AB'C
```

Agora:

```text
AB + A'BC = B(A + A'C)
             = B(A+C)
             = AB + BC
```

Logo:

```text
F = AB + BC + AB'C
```

Combine `AB` com `AB'C`:

```text
AB + AB'C = A(B + B'C)
           = A(B+C)
           = AB + AC
```

Resultado:

```text
F = AB + AC + BC
```

No mapa, isso aparece como três pares sobrepostos ao redor do mintermo `ABC`.

**Resposta:** B.

## Exercícios de Fixação

### Exercício 8.1

Simplifique `A'BC + ABC + ABC'`.

### Exercício 8.2

Simplifique `A'B'C + A'BC + AB'C + ABC`.

### Gabarito

```text
8.1) BC + AB = B(A+C).
     Pares: A'BC com ABC produz BC; ABC com ABC' produz AB.

8.2) C.
     Todos os quatro termos possuem C e cobrem todas as combinações de A e B.
```

---

# 9. Questão 34 — Distributiva em POS

## Conceito

A identidade mais útil neste tipo de questão é:

```text
(X+Y)(X+Y') = X
```

Ela é a versão POS da eliminação de uma variável que aparece direta e negada.

## Resolução Passo a Passo

A expressão é:

```text
(A+B+C)(A+B+C')(A+B'+C)
```

Defina:

```text
X = A+B
```

Nos dois primeiros fatores:

```text
(X+C)(X+C') = X = A+B
```

Sobra:

```text
(A+B)(A+B'+C)
```

Use:

```text
(A+X)(A+Y)=A+XY
```

Então:

```text
(A+B)(A+B'+C)
= A + B(B'+C)
= A + BB' + BC
= A + 0 + BC
= A + BC
```

**Resposta:** B.

## Exercícios de Fixação

### Exercício 9.1

Simplifique `(A+C)(A+C')(A'+B)`.

### Exercício 9.2

Simplifique `(P+Q+R)(P+Q+R')(P+Q'+R)`.

### Gabarito

```text
9.1) A(A'+B)=AB.
9.2) Os dois primeiros fatores dão P+Q.
     (P+Q)(P+Q'+R)=P+Q(Q'+R)=P+QR.
```

---

# 10. Questão 37 — Consenso em Produto de Somas

## Conceito

O teorema de consenso na forma POS é:

```text
(X+Y)(X'+Z)(Y+Z) = (X+Y)(X'+Z)
```

O fator `(Y+Z)` é redundante.

## Resolução Passo a Passo

Compare:

```text
(A+B)(A'+C)(B+C)
```

com:

```text
(X+Y)(X'+Z)(Y+Z)
```

Identifique:

```text
X=A
Y=B
Z=C
```

Logo, o termo de consenso é:

```text
(B+C)
```

Ele pode ser removido:

```text
F=(A+B)(A'+C)
```

**Resposta:** A.

## Exercícios de Fixação

### Exercício 10.1

Remova o fator redundante em `(P+Q)(P'+R)(Q+R)`.

### Exercício 10.2

Remova o termo redundante em `XY + X'Z + YZ`.

### Gabarito

```text
10.1) (P+Q)(P'+R).
10.2) XY + X'Z.
```

---

# 11. Questão 51 — Barramento Tri-State e Contenção

## Conceito

Uma saída tri-state pode estar em:

```text
0, 1 ou Z
```

`Z` significa que o driver está desconectado eletricamente do barramento. Ele não significa conflito.

| Driver 1 | Driver 2 | Situação |
|---|---|---|
| `Z` | `0` | Barramento recebe `0` |
| `Z` | `1` | Barramento recebe `1` |
| `Z` | `Z` | Barramento não é dirigido |
| `1` | `1` | Compatível, embora dois drivers ativos sejam evitados |
| `1` | `0` | Contenção/conflito |

## Resolução Passo a Passo

No enunciado:

```text
driver 1 habilitado → conduz 1
driver 2 habilitado → conduz 0
```

Nenhum deles está em `Z`, pois ambos estão habilitados. Eles tentam impor níveis opostos ao mesmo fio:

```text
1 contra 0 → contenção
```

**Resposta:** C.

## Exercícios de Fixação

### Exercício 11.1

Um driver tri-state habilitado conduz `0`; outro está desabilitado. Qual é o valor do barramento?

### Exercício 11.2

Dois drivers habilitados conduzem `1` e `0`, respectivamente. Por que não se deve tratar o resultado como XOR?

### Gabarito

```text
11.1) 0. O driver desabilitado está em Z e não interfere.
11.2) Porque barramento não executa operação lógica entre drivers; há disputa elétrica por níveis opostos.
```

---

# 12. Questão 53 — Maxtermo Não é Mintermo

## Conceito

Para uma linha binária, use regras opostas:

| Bit da linha | No mintermo, produto que vale `1` | No maxtermo, soma que vale `0` |
|---:|---|---|
| 0 | variável negada | variável direta |
| 1 | variável direta | variável negada |

## Resolução Passo a Passo

O índice `10` em quatro bits é:

```text
10 decimal = 1010 binário
ABCD = 1 0 1 0
```

Como a questão pede um **maxtermo**, escreva uma soma que zera nessa linha:

```text
A=1 → A'
B=0 → B
C=1 → C'
D=0 → D
```

Resultado:

```text
M10 = A'+B+C'+D
```

**Resposta:** C.

## Exercícios de Fixação

### Exercício 12.1

Escreva o mintermo `m9` e o maxtermo `M9` para variáveis `A,B,C,D`.

### Exercício 12.2

Qual maxtermo zera na linha `ABCD=0110`?

### Gabarito

```text
12.1) 9 = 1001:
      m9 = AB'C'D
      M9 = A'+B+C+D'

12.2) 0110:
      M6 = A+B'+C'+D
```

---

# 13. Questão 62 — POS no Mapa Agrupa Zeros

## Conceito

Ao agrupar `0s`, você obtém POS:

```text
constante 0 no grupo de zeros → literal direto
constante 1 no grupo de zeros → literal negado
```

Cada grupo produz um termo de soma, e os termos são multiplicados.

## Resolução Passo a Passo

Mapa:

```text
          B'  B'   B   B
        +---+---+---+---+
 A'     | 0 | 1 | 1 | 0 |
 A      | 1 | 0 | 0 | 1 |
        +---+---+---+---+
          C'   C   C  C'
```

Primeiro par de zeros: extremos da linha `A'`.

```text
A=0 constante → A
C=0 constante → C
termo: (A+C)
```

Segundo par de zeros: centro da linha `A`.

```text
A=1 constante → A'
C=1 constante → C'
termo: (A'+C')
```

Produto dos termos:

```text
F=(A+C)(A'+C')
```

Você marcou `A'C+AC'`, que é a SOP correspondente aos `1s`; ela descreve a mesma função XOR neste mapa, mas a alternativa pedida e disponível era a forma POS.

**Resposta:** A.

## Exercícios de Fixação

### Exercício 13.1

Determine a POS mínima de `F(A,B,C)=ΠM(0,2,4,6)`.

### Exercício 13.2

Determine a POS mínima de `F(A,B,C)=ΠM(1,3,4,6)`.

### Gabarito

```text
13.1) Todos os zeros possuem C=0 → F=C.
13.2) m1/m3: A=0, C=1 → (A+C').
      m4/m6: A=1, C=0 → (A'+C).
      F=(A+C')(A'+C).
```

---

# 14. Questão 66 — Da Expressão ao Mapa sem Tabela Completa

## Conceito

Fazer a tabela-verdade e depois o mapa é um método correto e seguro. Para ganhar velocidade, quando a expressão já está em SOP, você pode marcar diretamente no mapa os grupos indicados por cada produto.

## Resolução Passo a Passo

A expressão é:

```text
F=A'B+B'C+AC
```

Cada termo cobre duas células:

```text
A'B → m2 e m3
B'C → m1 e m5
AC  → m5 e m7
```

No mapa, observe que os quatro mintermos com `C=1` estão cobertos:

```text
m1, m3, m5, m7 → grupo de quatro → C
```

Sobra `m2`, que pode agrupar com `m3`:

```text
m2, m3 → A'B
```

Portanto:

```text
F=C+A'B
```

**Resposta:** C.

## Exercícios de Fixação

### Exercício 14.1

Minimize por mapa, marcando diretamente os produtos: `F=A'C+B'C+AB`.

### Exercício 14.2

Minimize por mapa: `F=A'B'+A'C+BC`.

### Gabarito

```text
14.1) Os termos cobrem m1, m3, m5, m6 e m7.
      Forma mínima: C+AB.

14.2) Cobre m0, m1, m3 e m7.
      Forma mínima: A'B'+BC.
```

---

# 15. Questão 81 — SOP Mínima para NAND-NAND

## Conceito

Uma implementação de dois níveis `NAND-NAND` recebe naturalmente uma **soma de produtos**:

```text
F=P+Q
F=[P'Q']'
```

Primeira camada:

```text
NANDs produzem P' e Q'
```

Segunda camada:

```text
NAND final produz P+Q
```

## Resolução Passo a Passo

O mapa tem `1s` em dois pares:

```text
linha A'=0? nos centros: A=0 e C=1 → A'C
linha A nos extremos: A=1 e C=0 → AC'
```

Assim:

```text
F=A'C+AC'
```

Para implementar com NAND-NAND:

```text
F = [(A'C)'(AC')']'
```

A alternativa B utilizava somas dentro das portas de primeiro nível; ela corresponde a uma estrutura apropriada para POS/NOR, não para a SOP pedida pela implementação NAND-NAND.

**Resposta:** A.

## Exercícios de Fixação

### Exercício 15.1

Implemente `F=AB'+C'D` em dois níveis NAND-NAND, supondo complementos disponíveis.

### Exercício 15.2

Implemente `F=A'+BC` somente com NAND, usando as entradas `A`, `B` e `C`.

### Gabarito

```text
15.1) F=[(AB')'(C'D)']'.

15.2) N1=NAND(B,C)=(BC)'.
      F=NAND(A,N1)=[A(BC)']'=A'+BC.
```

---

# 16. Questão 83 — Zeros em `ΠM` e Implementação NOR

## Conceito

`ΠM(...)` lista os índices em que a função vale `0`. Logo, a maneira natural de simplificar é agrupar zeros e obter POS.

Se os zeros estão nos quatro cantos do mapa:

```text
B=0 e D=0
```

Na leitura POS:

```text
F=B+D
```

Não é `B'D'`: essa seria a expressão dos `1s` se os cantos fossem `1`, ou a expressão de `F'` para os zeros atuais.

## Resolução Passo a Passo

Os zeros informados são:

```text
ΠM(0,2,8,10)
```

Em quatro variáveis, esses quatro índices têm:

```text
B=0
D=0
```

Portanto:

```text
F=B+D
```

Com somente NOR:

```text
T = B NOR D       = (B+D)'
F = T NOR T       = ((B+D)')' = B+D
```

**Resposta:** B.

## Exercícios de Fixação

### Exercício 16.1

Minimize em POS `F(A,B,C,D)=ΠM(1,3,9,11)` e indique uma implementação com NOR.

### Exercício 16.2

Se `F'=B'D'`, qual é `F` após aplicar DeMorgan?

### Gabarito

```text
16.1) Os zeros possuem B=0 e D=1.
      Em POS: F=B+D'.
      NOR-NOR: F=[B NOR D'] NOR [B NOR D'], supondo D' disponível.

16.2) F=(B'D')'=B+D.
```

---

# 17. Questão 84 — `Don't Care` e NAND Direta

## Conceito

Os `don't care` podem ser usados como `1` para ampliar grupos em SOP, desde que os `1s` obrigatórios sejam cobertos e nenhum `0` obrigatório seja incluído.

Depois de obter a expressão mínima, aplique DeMorgan para reconhecer uma porta universal direta.

## Resolução Passo a Passo

Função:

```text
F(A,B,C)=Σm(0,2,5,7)+d(1,3)
```

Use os `don't care`:

```text
m0, m1, m2, m3 → grupo de quatro → A'
m1, m3, m5, m7 → grupo de quatro → C
```

Logo:

```text
F=A'+C
```

Agora aplique DeMorgan:

```text
A'+C = (AC')'
```

Se `C'` está disponível, uma única NAND com entradas `A` e `C'` implementa a função.

**Resposta:** A.

## Exercícios de Fixação

### Exercício 17.1

Considere `F(A,B,C)=Σm(0,1,6,7)+d(2,3)`. Minimize e implemente com uma NAND, supondo `B'` disponível.

### Exercício 17.2

Considere `F(A,B,C)=Σm(1,3,4,6)+d(5,7)`. Minimize a função.

### Gabarito

```text
17.1) Usando d(2,3):
      m0,m1,m2,m3 → A'
      m2,m3,m6,m7 → B
      F=A'+B=(AB')'.
      Uma NAND com entradas A e B' implementa F.

17.2) Usando d(5,7):
      m1,m3,m5,m7 → C
      m4,m5,m6,m7 → A
      F=A+C.
```

---

# 18. Respostas às Observações em Questões Corretas

## Questão 1 — Carry e Overflow

Sim, **estouro** é a tradução comum de `overflow`. Porém, `carry` não é a mesma coisa:

```text
carry: saiu um bit extra na soma sem sinal
overflow: o valor com sinal não cabe no intervalo representável
```

Exemplos em 8 bits:

```text
FF + 01 = 00 com carry; interpretando com sinal, -1 + 1 = 0, sem overflow.
7F + 01 = 80 sem carry; interpretando com sinal, 127 + 1 não cabe, com overflow.
```

## Questão 5 — Paridade de Número Negativo

Sim. Em complemento de 2, o bit mais à direita continua determinando a paridade:

```text
LSB = 0 → número par
LSB = 1 → número ímpar
```

Isso vale também para negativos:

```text
-2 = ...1110 → par
-3 = ...1101 → ímpar
```

## Questão 12 — Soma Direta em BCD

Converter para decimal, somar e reconverter é correto para resolver questões. Para entender o circuito BCD, use a regra:

```text
some cada dígito de quatro bits
se o resultado for maior que 1001 ou houver carry, some 0110
```

No caso `97+58`:

```text
unidades: 0111 + 1000 = 1111, inválido em BCD
          1111 + 0110 = 1 0101 → escreve 5 e leva 1

dezenas: 1001 + 0101 + 1 = 1111
         1111 + 0110 = 1 0101 → escreve 5 e leva 1

centenas: 1
resultado: 0001 0101 0101 = 155
```

## Questão 13 — Tamanho do Código Gray

Converter binário para Gray **não altera a quantidade de bits**:

```text
8 bits binários → 8 bits Gray
```

As alternativas agrupam os bits de quatro em quatro apenas para leitura:

```text
10110110 → 1011 0110
Gray:       1110 1101
```

São dois grupos de quatro, totalizando os mesmos oito bits.

## Questão 24 — Forma Rápida para XOR/XNOR

Você não precisa testar casos aleatórios. Conte a paridade:

```text
XOR de vários bits = 1 com quantidade ímpar de 1s
XNOR da paridade = 1 com quantidade par de 1s
```

Na expressão:

```text
(A XOR B) XNOR (C XOR D)
```

a saída vale `1` quando os dois pares têm a mesma paridade, isto é, quando o total de `1s` entre `A,B,C,D` é par.

## Questão 29 — Seu Raciocínio Está Correto

A expressão era:

```text
F=((A+B)' + A'B')'
```

Você pode fazer:

```text
(A+B)' = A'B'
F=(A'B' + A'B')'
F=(A'B')'
F=A+B
```

Essa é exatamente a simplificação correta.

## Questão 33 — A Identidade que Você Deve Automatizar

A identidade central é:

```text
X + X'Y = X + Y
```

Para:

```text
A + A'B + A'B'C
```

primeiro:

```text
A + A'B = A+B
```

Depois reutilize `A` para juntar com o último termo:

```text
A + A'B'C = A+B'C
```

Assim:

```text
F=A+B+B'C
```

Agora:

```text
B+B'C=B+C
```

Resultado:

```text
F=A+B+C
```

---

# 19. Treino Curto Após a Revisão

Faça esta sequência sem consultar o gabarito:

| Bloco | Quantidade | Meta |
|---|---:|---:|
| Carry, overflow e extensão de sinal | 6 questões | 6/6 |
| ASCII e checksum | 8 questões | 7/8 |
| XOR/XNOR e tabelas | 4 questões | 4/4 |
| Álgebra SOP/POS e consenso | 10 questões | 8/10 |
| POS por zeros e síntese NAND/NOR | 10 questões | 8/10 |

Tempo sugerido:

```text
2h30 de revisão guiada
1h00 de exercícios sem consulta
20 min para corrigir erros
```

Ao acertar esse treino, o próximo simulado pode continuar cobrando todo o conteúdo das aulas 1 a 9, mantendo dificuldade alta e acrescentando os novos conteúdos somente depois de estudados.
