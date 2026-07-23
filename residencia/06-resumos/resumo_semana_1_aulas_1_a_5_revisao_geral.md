# Resumo de Revisão Geral — Semana 1: Aulas 1 a 5

**Trilha:** Sistemas Digitais — UFCG  
**Conteúdo:** números binários, códigos binários, portas lógicas, álgebra booleana, DeMorgan, dualidade, NAND e NOR  
**Uso recomendado:** reler na última semana antes da prova e refazer mentalmente os exemplos marcados como essenciais.

---

# 1. Mapa da Semana

| Aula | Assunto | Você precisa sair lembrando |
|---:|---|---|
| 1 | Binário, operações, sinal e complemento de 2 | Converter bases, representar negativos e detectar overflow |
| 2 | BCD, Gray, ASCII e checksum | Não confundir o significado de uma sequência de bits |
| 3 | Portas lógicas | Reconhecer rapidamente a saída de cada porta e ler expressões |
| 4 | Álgebra booleana | Simplificar expressões usando as leis corretas |
| 5 | DeMorgan, dualidade, NAND e NOR | Negar expressões e implementar funções somente com NAND/NOR |

O encadeamento é:

```text
bits → códigos → portas → expressões → simplificação → implementação
```

---

# 2. Aula 1 — Binário, Operações, Sinal e Complemento de 2

## 2.1 Base 2 e conversões

Em binário, cada posição vale uma potência de 2:

```text
... 128  64  32  16   8   4   2   1
... 2^7 2^6 2^5 2^4 2^3 2^2 2^1 2^0
```

Exemplo essencial:

```text
101101₂ = 32 + 8 + 4 + 1 = 45₁₀
```

Decimal para binário:

```text
divida sucessivamente por 2 e leia os restos de baixo para cima
```

Hexadecimal:

```text
1 dígito hexadecimal = 4 bits
```

Tabela mínima que você precisa reconhecer:

| Hex | Binário | Hex | Binário |
|---|---|---|---|
| `0` | `0000` | `8` | `1000` |
| `1` | `0001` | `9` | `1001` |
| `2` | `0010` | `A` | `1010` |
| `3` | `0011` | `B` | `1011` |
| `4` | `0100` | `C` | `1100` |
| `5` | `0101` | `D` | `1101` |
| `6` | `0110` | `E` | `1110` |
| `7` | `0111` | `F` | `1111` |

Exemplo:

```text
B6₁₆ = 1011 0110₂
```

---

## 2.2 Soma e subtração binária

Regra fundamental da soma:

```text
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10   ← escreve 0 e leva 1
```

Subtração em hardware normalmente vira soma:

```text
A - B = A + (-B)
```

Para obter `-B`, use complemento de 2.

---

## 2.3 Sem sinal vs com sinal

A mesma palavra de bits pode representar valores diferentes dependendo da interpretação.

Exemplo em 4 bits:

```text
1011 sem sinal               = 11
1011 em complemento de 2     = -5
```

Intervalos:

```text
n bits sem sinal:
0 até 2^n - 1

n bits com sinal em complemento de 2:
-2^(n-1) até 2^(n-1) - 1
```

Exemplos:

| Bits | Sem sinal | Complemento de 2 |
|---:|---|---|
| 4 bits | `0` a `15` | `-8` a `+7` |
| 8 bits | `0` a `255` | `-128` a `+127` |

Regra do bit mais significativo em complemento de 2:

```text
MSB = 0 → positivo ou zero
MSB = 1 → negativo
```

---

## 2.4 Complemento de 1 e complemento de 2

```text
Complemento de 1: inverta todos os bits.
Complemento de 2: inverta todos os bits e some 1.
```

Exemplo essencial: representar `-5` em 4 bits.

```text
+5 = 0101
     1010   ← inverte
     1011   ← soma 1

-5 = 1011
```

Para interpretar um número negativo em complemento de 2:

```text
1. Veja que o primeiro bit é 1.
2. Inverta os bits.
3. Some 1.
4. Coloque sinal negativo no valor obtido.
```

Exemplo:

```text
1110 → 0001 → 0010 → -2
```

---

## 2.5 Overflow

Overflow ocorre quando o resultado real não cabe no número de bits disponível.

Sem sinal:

```text
overflow geralmente aparece como carry para fora do MSB
```

Exemplo em 4 bits sem sinal:

```text
1111 + 0001 = 1 0000
15 + 1 = 16, que não cabe em 4 bits
```

Com sinal em complemento de 2:

```text
positivo + positivo deu negativo → overflow
negativo + negativo deu positivo → overflow
```

Exemplo em 4 bits:

```text
0111 + 0011 = 1010
 +7  +  +3   aparenta -6 → overflow
```

Não confunda:

```text
carry e overflow com sinal não são a mesma coisa
```

---

## Não esquecer da Aula 1

```text
1 hexadecimal = 4 bits
A - B = A + complemento de 2 de B
Complemento de 2 = inverte + soma 1
n bits sem sinal: 0 até 2^n - 1
n bits com sinal: -2^(n-1) até 2^(n-1) - 1
Soma de dois sinais iguais que muda o sinal do resultado = overflow
```

---

# 3. Aula 2 — BCD, Gray, ASCII e Checksum

## 3.1 Ideia central

Bits não significam necessariamente um número binário comum.

```text
01000001 pode ser 65 sem sinal ou o caractere 'A' em ASCII.
```

Sempre pergunte:

```text
qual código ou interpretação a questão está usando?
```

---

## 3.2 BCD — Binary-Coded Decimal

No BCD 8421:

```text
cada dígito decimal é codificado separadamente com 4 bits
```

| Decimal | BCD | Decimal | BCD |
|---:|---|---:|---|
| 0 | `0000` | 5 | `0101` |
| 1 | `0001` | 6 | `0110` |
| 2 | `0010` | 7 | `0111` |
| 3 | `0011` | 8 | `1000` |
| 4 | `0100` | 9 | `1001` |

Combinações inválidas por dígito BCD:

```text
1010, 1011, 1100, 1101, 1110, 1111
```

Diferença indispensável:

```text
12 em binário comum = 1100
12 em BCD            = 0001 0010
```

Soma BCD:

```text
se um grupo passar de 9 ou produzir carry, corrija somando 0110
```

Exemplo:

```text
7 + 5:
0111 + 0101 = 1100   ← inválido em BCD
1100 + 0110 = 1 0010
resultado BCD = 0001 0010 = 12
```

---

## 3.3 Código Gray

Característica principal:

```text
valores consecutivos diferem em apenas 1 bit
```

Utilidade:

```text
reduzir ambiguidade durante transições em encoders e sensores
```

Binário para Gray:

```text
1. O primeiro bit é mantido.
2. Cada próximo bit Gray = XOR dos dois bits binários vizinhos.
```

Exemplo:

```text
Binário: 1 0 1 1
Gray:    1 1 1 0
```

Gray para binário:

```text
1. O primeiro bit é mantido.
2. Cada próximo bit binário = bit binário anterior XOR bit Gray atual.
```

Exemplo:

```text
Gray:    1 1 1 0
Binário: 1 0 1 1
```

XOR que sustenta o procedimento:

```text
igual → 0
diferente → 1
```

---

## 3.4 ASCII

ASCII associa códigos numéricos a caracteres. O ASCII original usa 7 bits.

Valores âncora:

| Caractere | Decimal | Hex |
|---|---:|---|
| espaço | 32 | `0x20` |
| `'0'` | 48 | `0x30` |
| `'9'` | 57 | `0x39` |
| `'A'` | 65 | `0x41` |
| `'Z'` | 90 | `0x5A` |
| `'a'` | 97 | `0x61` |
| `'z'` | 122 | `0x7A` |

Padrões importantes:

```text
'a' - 'A' = 32
'7' - '0' = 7
```

Não confunda número com caractere:

```text
7 número           = 0000 0111
'7' em ASCII       = 0011 0111 = 55 decimal = 0x37
```

---

## 3.5 Checksum

Checksum é um valor calculado a partir dos dados para detectar alterações.

```text
dados + checksum enviados/armazenados
recalcular depois
se não bater, há erro
```

O indispensável:

```text
checksum detecta erros; geralmente não corrige erros
checksum simples não detecta todas as alterações
CRC costuma ser mais robusto
```

Exemplo de limitação:

```text
3 + 5 + 2 = 10
4 + 4 + 2 = 10
```

Os dados mudaram, mas um checksum simples por soma não perceberia.

---

## Não esquecer da Aula 2

```text
BCD: cada dígito decimal vira 4 bits; 1010 a 1111 são inválidos.
Gray: consecutivos mudam em apenas 1 bit.
Binário → Gray: primeiro igual, depois XOR vizinho.
Gray → Binário: primeiro igual, depois XOR acumulado.
ASCII: '0'=0x30, 'A'=0x41, 'a'=0x61.
Checksum detecta, não garante corrigir; CRC é mais robusto.
```

---

# 4. Aula 3 — Portas Lógicas e Operações Booleanas

## 4.1 Notação

Nas aulas 4 e 5, a negação é escrita principalmente com apóstrofo:

```text
A' = NOT A
```

Ela é equivalente à barra vista na aula de portas:

```text
A' = A̅
```

Operações:

```text
AB ou A·B = A AND B
A+B       = A OR B
A'        = NOT A
```

Precedência:

```text
NOT > AND > OR
```

Exemplo:

```text
A + B'C = A OR ((NOT B) AND C)
```

---

## 4.2 Tabela mental das portas

| Porta | Expressão | Quando a saída é `1` |
|---|---|---|
| NOT | `A'` | Quando `A=0` |
| AND | `AB` | Quando todas as entradas são `1` |
| OR | `A+B` | Quando pelo menos uma entrada é `1` |
| NAND | `(AB)'` | Em todos os casos, exceto quando todas são `1` |
| NOR | `(A+B)'` | Somente quando todas são `0` |
| XOR | `A⊕B` | Quando as entradas são diferentes |
| XNOR | `(A⊕B)'` | Quando as entradas são iguais |

Tabela de duas entradas:

| A | B | AND | OR | NAND | NOR | XOR | XNOR |
|---|---|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

---

## 4.3 XOR e XNOR em AND/OR/NOT

Esses padrões serão úteis em simplificação e circuitos:

```text
A⊕B = A'B + AB'
```

```text
A XNOR B = AB + A'B'
```

Interpretação:

```text
XOR  = diferentes
XNOR = iguais
```

---

## 4.4 Tabela-verdade de uma função

Se uma função tem `n` variáveis:

```text
número de linhas = 2^n
```

| Variáveis | Linhas |
|---:|---:|
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |

Use tabela-verdade para:

- calcular a saída de uma expressão;
- conferir uma simplificação;
- mostrar que duas funções são equivalentes.

---

## Não esquecer da Aula 3

```text
AND = todas 1
OR = pelo menos uma 1
NOT = inverte
NAND = NOT AND; só dá 0 no caso 11
NOR = NOT OR; só dá 1 no caso 00
XOR = diferentes
XNOR = iguais
NOT > AND > OR
A⊕B = A'B + AB'
XNOR = AB + A'B'
Tabela de n entradas tem 2^n linhas
```

---

# 5. Aula 4 — Álgebra Booleana e Simplificação

## 5.1 Cuidado principal

Álgebra booleana não é aritmética comum:

```text
1 + 1 = 1     porque + significa OR
1·1 = 1       porque · significa AND
```

Você simplifica uma expressão para obter um circuito equivalente com menos portas ou níveis lógicos.

---

## 5.2 Tabela de leis fundamentais

| Lei | Forma OR | Forma AND |
|---|---|---|
| Identidade | `A+0=A` | `A·1=A` |
| Dominação | `A+1=1` | `A·0=0` |
| Idempotência | `A+A=A` | `A·A=A` |
| Complemento | `A+A'=1` | `A·A'=0` |
| Comutativa | `A+B=B+A` | `AB=BA` |
| Associativa | `(A+B)+C=A+(B+C)` | `(AB)C=A(BC)` |
| Distributiva | `A+BC=(A+B)(A+C)` | `A(B+C)=AB+AC` |
| Absorção | `A+AB=A` | `A(A+B)=A` |

Complementos adicionais:

```text
0' = 1
1' = 0
(A')' = A
```

---

## 5.3 Padrões de simplificação que precisam estar automáticos

```text
AB + AB' = A(B+B') = A
```

```text
(A+B)(A+B') = A + BB' = A
```

```text
A + A'B = (A+A')(A+B) = A+B
```

```text
A + AB = A
```

```text
A(A+B) = A
```

---

## 5.4 Procedimento de simplificação

Ao receber uma expressão:

```text
1. Elimine constantes: A+0, A·1, A+1, A·0.
2. Elimine repetições: A+A, A·A.
3. Procure complementos: A+A', A·A'.
4. Procure absorção: A+AB, A(A+B).
5. Use comutativa/associativa para aproximar padrões.
6. Fatore ou distribua para criar complemento/absorção.
7. Confira por tabela-verdade se houver dúvida.
```

Exemplo essencial:

```text
F = AB + AB' + AC
  = A(B+B') + AC
  = A + AC
  = A
```

---

## 5.5 Armadilhas

Não use associativa para misturar operações:

```text
(A+B)C não é igual a A+BC
```

Exemplo que prova a diferença:

```text
A=1, B=0, C=0
(A+B)C = 0
A+BC   = 1
```

Não esqueça a distributiva exclusiva da álgebra booleana:

```text
A+BC = (A+B)(A+C)
```

---

## Não esquecer da Aula 4

```text
A+0=A        A·1=A
A+1=1        A·0=0
A+A=A        A·A=A
A+A'=1       A·A'=0
A+AB=A       A(A+B)=A
A(B+C)=AB+AC
A+BC=(A+B)(A+C)
AB+AB'=A
(A+B)(A+B')=A
A+A'B=A+B
```

---

# 6. Aula 5 — DeMorgan, Dualidade, NAND e NOR

## 6.1 Teorema de DeMorgan

As duas leis centrais:

```text
(A+B)' = A'B'
(AB)'  = A'+B'
```

Regra prática:

```text
Ao levar o NOT para dentro:
1. negue cada termo;
2. troque OR por AND;
3. troque AND por OR.
```

Com várias variáveis:

```text
(A+B+C)' = A'B'C'
(ABC)'   = A'+B'+C'
```

Expressões em camadas:

```text
(A+BC)' = A'(BC)' = A'(B'+C')
```

```text
(AB+C'D)' = (AB)'(C'D)' = (A'+B')(C+D')
```

Cuidado com negação dupla:

```text
(A'B)' = A+B'
```

---

## 6.2 Dualidade

Para obter o dual, troque:

```text
+ ↔ ·
0 ↔ 1
```

Mantenha:

```text
variáveis e seus complementos
```

Pares de leis duais:

| Lei | Dual |
|---|---|
| `A+0=A` | `A·1=A` |
| `A+1=1` | `A·0=0` |
| `A+A'=1` | `A·A'=0` |
| `A+AB=A` | `A(A+B)=A` |
| `A+BC=(A+B)(A+C)` | `A(B+C)=AB+AC` |

Armadilha indispensável:

```text
dual não é complemento e não precisa ser equivalente à expressão original
```

Exemplo:

```text
F  = AB+C'
Fd = (A+B)C'
```

---

## 6.3 NAND e NOR são universais

Elas conseguem implementar NOT, AND e OR sozinhas.

### Apenas NAND

```text
A'  = A NAND A
AB  = (A NAND B) NAND (A NAND B)
A+B = (A NAND A) NAND (B NAND B)
```

### Apenas NOR

```text
A'  = A NOR A
A+B = (A NOR B) NOR (A NOR B)
AB  = (A NOR A) NOR (B NOR B)
```

---

## 6.4 Escolha da forma de implementação

```text
Soma de produtos → NAND–NAND
Produto de somas → NOR–NOR
```

Soma de produtos:

```text
F = AB + CD
```

Implementação NAND–NAND:

```text
N1 = A NAND B = (AB)'
N2 = C NAND D = (CD)'
F  = N1 NAND N2 = AB+CD
```

Produto de somas:

```text
F = (A+B)(C+D)
```

Implementação NOR–NOR:

```text
N1 = A NOR B = (A+B)'
N2 = C NOR D = (C+D)'
F  = N1 NOR N2 = (A+B)(C+D)
```

---

## 6.5 Transformar a função para a porta desejada

Para NOR, procure produto de somas:

```text
A+BC = (A+B)(A+C)
```

Assim:

```text
N1 = A NOR B = (A+B)'
N2 = A NOR C = (A+C)'
F  = N1 NOR N2 = A+BC
```

Para NAND, procure soma de produtos:

```text
(A+B)(C+D) = AC + AD + BC + BD
```

Antes de converter, simplifique sempre que possível:

```text
AB+AB' = A
```

Nenhuma rede complexa deve ser construída se a função inteira reduz a um fio.

---

## Não esquecer da Aula 5

```text
(A+B)' = A'B'
(AB)' = A'+B'
NOT entra negando tudo e trocando + ↔ ·
Dualidade troca + ↔ · e 0 ↔ 1; não é complemento.
NAND e NOR são universais.
Soma de produtos favorece NAND–NAND.
Produto de somas favorece NOR–NOR.
Simplifique antes de implementar.
```

---

# 7. Folha de Fórmulas da Semana

## Sistemas numéricos

```text
1 dígito hexadecimal = 4 bits
n bits sem sinal: 0 até 2^n - 1
n bits em complemento de 2: -2^(n-1) até 2^(n-1) - 1
Complemento de 2: inverte + soma 1
A - B = A + (-B)
```

## Códigos

```text
BCD: cada dígito decimal usa 4 bits; 1010 a 1111 são inválidos.
Gray: consecutivos mudam em 1 bit.
Binário → Gray: primeiro igual; depois XOR vizinho.
Gray → Binário: primeiro igual; depois XOR acumulado.
'0'=0x30, 'A'=0x41, 'a'=0x61
Checksum detecta erros; CRC é mais robusto.
```

## Portas

```text
AND = todas 1
OR = pelo menos uma 1
NOT = inverte
NAND = 0 somente quando todas são 1
NOR = 1 somente quando todas são 0
XOR = diferentes
XNOR = iguais
NOT > AND > OR
```

```text
A⊕B = A'B + AB'
XNOR = AB + A'B'
```

## Álgebra booleana

```text
A+0=A          A·1=A
A+1=1          A·0=0
A+A=A          A·A=A
A+A'=1         A·A'=0
(A')'=A
A+AB=A         A(A+B)=A
A(B+C)=AB+AC
A+BC=(A+B)(A+C)
AB+AB'=A
(A+B)(A+B')=A
A+A'B=A+B
```

## DeMorgan, NAND e NOR

```text
(A+B)' = A'B'
(AB)'  = A'+B'
```

```text
NAND:
A'  = A NAND A
AB  = (A NAND B) NAND (A NAND B)
A+B = (A NAND A) NAND (B NAND B)
```

```text
NOR:
A'  = A NOR A
A+B = (A NOR B) NOR (A NOR B)
AB  = (A NOR A) NOR (B NOR B)
```

```text
Soma de produtos → NAND–NAND
Produto de somas → NOR–NOR
```

---

# 8. Erros Que Não Podem Acontecer

| Erro | Correção imediata |
|---|---|
| Interpretar bits sem saber se há sinal/código | Identifique a representação antes da conta |
| Fazer `-N` apenas invertendo bits | Complemento de 2 exige inverter **e somar 1** |
| Detectar overflow com sinal só pelo carry | Observe se sinais iguais produziram sinal oposto |
| Confundir `12` binário com `12` em BCD | BCD codifica cada dígito separado |
| Tratar Gray como binário comum | Converta Gray para binário antes de obter valor |
| Confundir número `7` com caractere `'7'` | `'7'` é ASCII `0x37`, não valor binário `7` |
| Dizer que checksum corrige erros | Em geral, checksum apenas detecta |
| Confundir OR com XOR | OR inclui `11`; XOR dá `0` em `11` |
| Esquecer a precedência | Faça NOT, depois AND, depois OR |
| Usar aritmética comum em álgebra booleana | Em lógica, `1+1=1` |
| Esquecer absorção | `A+AB=A` e `A(A+B)=A` |
| Aplicar DeMorgan sem trocar operador | Ao negar, troque `+` e `·` |
| Confundir dualidade com complemento | Dual troca operações/constantes; complemento nega função |
| Desenhar portas antes de simplificar | Simplifique a expressão primeiro |
| Usar NOR–NOR numa soma de produtos sem transformar | NAND–NAND combina naturalmente com soma de produtos |

---

# 9. Roteiros de Questão

## 9.1 Se a questão der uma palavra binária

```text
1. Identifique: sem sinal, complemento de 2, BCD, Gray ou ASCII?
2. Observe a quantidade de bits.
3. Aplique a conversão correta.
4. Se houver operação, confira overflow.
```

## 9.2 Se a questão der uma expressão lógica

```text
1. Marque os NOTs e parênteses.
2. Respeite NOT > AND > OR.
3. Procure identidade, complemento e absorção.
4. Fatore/distribua se criar padrões úteis.
5. Use DeMorgan apenas negando todos os termos cobertos.
6. Confira com tabela-verdade se a expressão for curta.
```

## 9.3 Se a questão pedir circuito somente NAND ou somente NOR

```text
1. Simplifique a função.
2. Para NAND, obtenha soma de produtos.
3. Para NOR, obtenha produto de somas.
4. Gere entradas complementadas com a mesma porta ligada a si própria.
5. Aplique NAND–NAND ou NOR–NOR.
6. Confira a expressão final usando DeMorgan.
```

---

# 10. Autoavaliação Rápida Para a Última Semana

Você está pronto neste bloco se conseguir responder sem consultar:

- [ ] Converter rapidamente binário, decimal e hexadecimal.
- [ ] Representar e interpretar negativos em complemento de 2.
- [ ] Informar o intervalo com e sem sinal para `n` bits.
- [ ] Reconhecer overflow em soma com sinal.
- [ ] Distinguir binário comum de BCD.
- [ ] Converter binário para Gray e Gray para binário.
- [ ] Lembrar `'0'`, `'A'` e `'a'` em ASCII.
- [ ] Explicar o que checksum detecta e sua limitação.
- [ ] Preencher de memória a tabela das portas básicas.
- [ ] Escrever XOR e XNOR com AND/OR/NOT.
- [ ] Aplicar as leis booleanas principais.
- [ ] Simplificar `AB+AB'`, `(A+B)(A+B')` e `A+A'B`.
- [ ] Aplicar DeMorgan em expressões com mais de um nível.
- [ ] Encontrar a dual de uma identidade.
- [ ] Implementar NOT, AND e OR usando somente NAND ou somente NOR.
- [ ] Escolher NAND–NAND ou NOR–NOR a partir da forma da função.

---

# 11. Teste Relâmpago

Faça mentalmente na revisão final. Se errar algum item, retorne à aula correspondente.

1. Qual o valor de `1011` em complemento de 2 com 4 bits?
2. Qual o intervalo de 8 bits com sinal?
3. Como representar `-5` em 4 bits?
4. `0011 0101` em BCD representa qual número?
5. `1011₂` convertido para Gray dá qual sequência?
6. Qual é o hexadecimal ASCII de `'A'`?
7. XOR vale `1` quando ocorre o quê?
8. Simplifique `AB+AB'`.
9. Simplifique `A+A'B`.
10. Aplique DeMorgan em `(A+BC)'`.
11. Qual é o dual de `A+0=A`?
12. Qual estrutura favorece `AB+C'D`?
13. Qual estrutura favorece `(A+B)(C+D)`?
14. Como criar `A'` com uma única NAND?
15. Como criar `A'` com uma única NOR?

## Respostas

1. `-5`.
2. `-128` até `+127`.
3. `0101 → 1010 → 1011`, portanto `1011`.
4. `35`.
5. `1110`.
6. `0x41`.
7. Quando as entradas são diferentes.
8. `A`.
9. `A+B`.
10. `A'(B'+C')`.
11. `A·1=A`.
12. NAND–NAND, pois é soma de produtos.
13. NOR–NOR, pois é produto de somas.
14. `A NAND A`.
15. `A NOR A`.

---

# 12. Última Leitura Antes da Prova

Se houver tempo para ler apenas um bloco deste resumo, leia este:

```text
Complemento de 2 = inverte + soma 1.
Overflow com sinal = sinais iguais gerando resultado de sinal oposto.
BCD codifica cada dígito; 1010 a 1111 são inválidos.
Gray muda apenas 1 bit entre valores consecutivos.
'0'=0x30, 'A'=0x41, 'a'=0x61.

AND = todas 1; OR = ao menos uma 1; XOR = diferentes; XNOR = iguais.
NOT > AND > OR.

A+0=A       A·1=A       A+1=1       A·0=0
A+A'=1      A·A'=0      A+AB=A      A(A+B)=A
AB+AB'=A    (A+B)(A+B')=A          A+A'B=A+B

(A+B)'=A'B'             (AB)'=A'+B'
DeMorgan: negue cada termo e troque AND por OR ou OR por AND.

NAND e NOR são universais.
Soma de produtos → NAND–NAND.
Produto de somas → NOR–NOR.
Simplifique antes de montar o circuito.
```
