# O que revisar

Use esta lista para registrar pontos que merecem uma nova passada antes da prova.

## Sistemas numéricos

- [ ] **Parte fracionária de números binários**

  Lembrar os pesos depois da vírgula:

  ```text
  0,101₂ = 1×1/2 + 0×1/4 + 1×1/8
  ```

  Então:

  ```text
  0,101₂ = 0,625₁₀
  ```

  Para converter decimal fracionário para binário, multiplique a parte fracionária por `2` e anote a parte inteira de cada resultado.

  Exemplo:

  ```text
  0,625 × 2 = 1,25  -> bit 1
  0,25  × 2 = 0,5   -> bit 0
  0,5   × 2 = 1,0   -> bit 1

  0,625₁₀ = 0,101₂
  ```

## Álgebra booleana

- [ ] **11.2 OR distribuindo sobre AND**

  Esta é a forma que costuma surpreender no início:

  ```text
  A + B·C = (A + B)·(A + C)
  ```

  Na álgebra comum, essa forma não seria válida. Na álgebra booleana, ela é válida.

  **Lembrar:** `+` representa OR e `·` representa AND.

## Teorema de DeMorgan

- [ ] **Dualidade no Teorema de DeMorgan**

  As duas formas são duais:

  ```text
  (A + B)' = A'·B'
  (A·B)'   = A' + B'
  ```

  Para obter uma a partir da outra, troque:

  ```text
  OR  (+)  ↔ AND (·)
  ```

  mantendo as variáveis complementadas.

  **Lembrar:** ao negar uma expressão, negue cada termo e troque a operação.

## Erros do Simulado 01 — 25/05/2026

**Resultado:** `36/40 (90%)`  
**Prioridade:** Bloco 2 — BCD, Gray, ASCII e Checksum (`5/7`, `71%`). Não houve bloco abaixo de `70%`.

### Prioridade 1 — Bloco 2

- [ ] **Converter binário para Gray usando XOR entre bits vizinhos**

  Regra:

  ```text
  O primeiro bit Gray é igual ao primeiro bit binário.
  Cada próximo bit Gray é o XOR entre dois bits binários vizinhos.
  ```

  Erro do simulado:

  ```text
  Binário: 1 1 0 1
  Gray:    1 0 1 1
  ```

  Treinar:

  ```text
  a) Converta 1010 de binário para Gray.
  b) Converta 0111 de binário para Gray.
  ```

- [ ] **Entender a limitação do checksum simples por soma**

  Um checksum simples detecta alteração apenas quando o valor calculado muda. Se os dados mudarem mas conservarem a mesma soma, ele falha.

  Erro do simulado:

  ```text
  Original:  4 + 7 + 2 = 13
  Recebido:  5 + 6 + 2 = 13
  ```

  Como a soma permanece `13`, o checksum simples não detecta a alteração.

  Treinar:

  ```text
  a) Dados 2, 8, 4 chegam como 3, 7, 4. O checksum por soma detecta erro?
  b) Dados 6, 1, 5 chegam como 6, 1, 6. O checksum por soma detecta erro?
  ```

### Prioridade 2 — Blocos 3 e 4

- [ ] **Calcular o número de linhas de uma tabela-verdade**

  Regra:

  ```text
  n variáveis de entrada → 2^n linhas
  ```

  Erro do simulado:

  ```text
  4 variáveis → 2^4 = 16 linhas
  ```

  Treinar:

  ```text
  a) Quantas linhas tem uma tabela-verdade com 3 entradas?
  b) Quantas linhas tem uma tabela-verdade com 5 entradas?
  ```

- [ ] **Simplificar produto de somas com termos complementares**

  Padrão importante:

  ```text
  (A+B)(A+B') = A + BB'
               = A + 0
               = A
  ```

  Esta é a distributiva booleana na forma:

  ```text
  (X+Y)(X+Z) = X + YZ
  ```

  Treinar:

  ```text
  a) Simplifique: (X+Y)(X+Y')
  b) Simplifique: (P+Q)(P+R)
  ```

### Gabarito dos Treinos

```text
Gray:
a) 1010 → 1111
b) 0111 → 0100

Checksum:
a) Não detecta; as duas somas valem 14.
b) Detecta; a soma muda de 12 para 13.

Tabela-verdade:
a) 2^3 = 8 linhas.
b) 2^5 = 32 linhas.

Produto de somas:
a) (X+Y)(X+Y') = X.
b) (P+Q)(P+R) = P + QR.
```

## Aula 6 — Formas Canônicas

- [ ] **Revisar direitinho mintermos e maxtermos**

  **Mintermo:** termo produto usado nas linhas em que a função vale `1`.

  ```text
  No mintermo:
  bit 0 → variável complementada
  bit 1 → variável direta

  ABC = 101 → m5 = AB'C
  ```

  **Maxtermo:** termo soma usado nas linhas em que a função vale `0`.

  ```text
  No maxtermo:
  bit 0 → variável direta
  bit 1 → variável complementada

  ABC = 101 → M5 = (A' + B + C')
  ```

  **Lembrar:**

  ```text
  SOP canônica → somar mintermos das linhas com saída 1 → Σm(...)
  POS canônica → multiplicar maxtermos das linhas com saída 0 → ΠM(...)
  ```

  Treinar:

  ```text
  a) Para ABC = 011, escreva m3 e M3.
  b) Para ABC = 110, escreva m6 e M6.
  c) Dada F = Σm(1, 3, 6), expanda a SOP canônica.
  d) Dada F = ΠM(0, 2, 7), expanda a POS canônica.
  ```

  Gabarito:

  ```text
  a) m3 = A'BC;   M3 = (A + B' + C')
  b) m6 = ABC';   M6 = (A' + B' + C)
  c) F = A'B'C + A'BC + ABC'
  d) F = (A + B + C)(A + B' + C)(A' + B' + C')
  ```
