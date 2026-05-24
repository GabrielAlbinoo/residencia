# Aula — Códigos Binários: BCD, Gray, ASCII e Checksum

**Tema do dia:** Códigos binários  
**Objetivo:** entender os principais códigos cobrados no edital e saber resolver questões básicas de conversão, interpretação e identificação.

---

## 1. Visão geral

Nem todo conjunto de bits representa apenas um número binário comum.

Às vezes, uma sequência de bits pode representar:

- um número decimal codificado;
- uma letra;
- um caractere;
- um valor de controle;
- uma sequência com proteção contra erro;
- uma posição em um sensor/encoder.

Por isso existem **códigos binários**.

Exemplos:

| Bits | Pode significar |
|---|---|
| `01000001` | número 65 sem sinal |
| `01000001` | caractere `A` em ASCII |
| `1001` | número 9 em BCD |
| `1001` | número -7 em complemento de 2 com 4 bits |
| `1001` | número 9 sem sinal |

A mesma sequência de bits pode ter significados diferentes dependendo do **código usado**.

---

# 2. BCD — Binary-Coded Decimal

## 2.1 O que é BCD?

**BCD** significa **Binary-Coded Decimal**, ou seja, **decimal codificado em binário**.

A ideia é simples:

> Cada dígito decimal é representado separadamente por 4 bits.

No binário normal, o número inteiro é convertido para base 2.  
No BCD, cada algarismo decimal vira um grupo de 4 bits.

---

## 2.2 Tabela BCD 8421

O BCD mais comum é o **BCD 8421**.

Ele recebe esse nome porque os pesos dos 4 bits são:

```text
8 4 2 1
```

Tabela:

| Decimal | BCD |
|---:|---|
| 0 | `0000` |
| 1 | `0001` |
| 2 | `0010` |
| 3 | `0011` |
| 4 | `0100` |
| 5 | `0101` |
| 6 | `0110` |
| 7 | `0111` |
| 8 | `1000` |
| 9 | `1001` |

Combinações inválidas em BCD 8421:

| Binário | Valor binário comum | BCD? |
|---|---:|---|
| `1010` | 10 | inválido |
| `1011` | 11 | inválido |
| `1100` | 12 | inválido |
| `1101` | 13 | inválido |
| `1110` | 14 | inválido |
| `1111` | 15 | inválido |

Em BCD, cada grupo de 4 bits só pode ir de `0000` até `1001`.

---

## 2.3 Binário comum vs BCD

### Exemplo: número decimal 12

Em binário comum:

```text
12₁₀ = 1100₂
```

Em BCD:

```text
12₁₀ = 0001 0010
```

Porque:

```text
1 → 0001
2 → 0010
```

Então:

```text
12 em BCD = 0001 0010
```

---

### Exemplo: número decimal 59

Em binário comum:

```text
59₁₀ = 111011₂
```

Em BCD:

```text
5 → 0101
9 → 1001
```

Logo:

```text
59 em BCD = 0101 1001
```

---

## 2.4 Como converter decimal para BCD

Passos:

```text
1. Separe os dígitos decimais.
2. Converta cada dígito para 4 bits.
3. Junte os grupos.
```

Exemplo:

```text
348₁₀
```

Separando:

```text
3   4   8
```

Convertendo cada dígito:

```text
3 → 0011
4 → 0100
8 → 1000
```

Resultado:

```text
348 em BCD = 0011 0100 1000
```

---

## 2.5 Como converter BCD para decimal

Passos:

```text
1. Separe os bits em grupos de 4.
2. Converta cada grupo para decimal.
3. Junte os dígitos.
```

Exemplo:

```text
0010 0111 1001
```

Separando:

```text
0010   0111   1001
```

Convertendo:

```text
0010 = 2
0111 = 7
1001 = 9
```

Resultado:

```text
0010 0111 1001 em BCD = 279
```

---

## 2.6 Como identificar se um BCD é inválido

Cada grupo de 4 bits precisa representar um dígito de `0` a `9`.

Exemplo:

```text
0101 1010
```

Separando:

```text
0101 = 5
1010 = 10
```

O grupo `1010` é inválido em BCD.

Logo:

```text
0101 1010 não é um BCD 8421 válido.
```

---

## 2.7 Soma em BCD — noção básica

A soma em BCD tem um detalhe:

> Se a soma de um dígito passar de 9, soma-se `0110` ao resultado daquele grupo.

`0110` é 6 em binário.

Por quê?

Porque em 4 bits existem 16 combinações, mas BCD só usa 10 delas.  
A correção com `+6` ajusta o resultado para o próximo dígito decimal.

### Exemplo: 5 + 3

```text
5 = 0101
3 = 0011
```

Somando:

```text
0101
+0011
-----
1000
```

`1000` é 8. Está válido em BCD.

Resultado:

```text
5 + 3 = 8
```

---

### Exemplo: 7 + 5

```text
7 = 0111
5 = 0101
```

Somando:

```text
0111
+0101
-----
1100
```

`1100` é 12, inválido em BCD.

Então somamos `0110`:

```text
1100
+0110
-----
1 0010
```

Resultado:

```text
1 0010
```

Em BCD:

```text
0001 0010 = 12
```

Então:

```text
7 + 5 = 12
```

Para prova objetiva, normalmente basta saber que:
- BCD representa cada dígito decimal em 4 bits;
- `1010` a `1111` são inválidos;
- em soma BCD, quando passa de 9, corrige com `+0110`.

---

# 3. Código Gray

## 3.1 O que é código Gray?

O **código Gray** é um código binário em que dois valores consecutivos diferem em apenas **1 bit**.

Exemplo de sequência Gray com 4 bits:

| Decimal | Binário comum | Gray |
|---:|---|---|
| 0 | `0000` | `0000` |
| 1 | `0001` | `0001` |
| 2 | `0010` | `0011` |
| 3 | `0011` | `0010` |
| 4 | `0100` | `0110` |
| 5 | `0101` | `0111` |
| 6 | `0110` | `0101` |
| 7 | `0111` | `0100` |
| 8 | `1000` | `1100` |
| 9 | `1001` | `1101` |
| 10 | `1010` | `1111` |
| 11 | `1011` | `1110` |
| 12 | `1100` | `1010` |
| 13 | `1101` | `1011` |
| 14 | `1110` | `1001` |
| 15 | `1111` | `1000` |

---

## 3.2 Para que serve o código Gray?

Ele é útil quando queremos evitar erros durante mudanças de estado.

Exemplo:

Em binário comum:

```text
3 = 0011
4 = 0100
```

Mudança de 3 para 4:

```text
0011 → 0100
```

Mudam 3 bits ao mesmo tempo.

Em um circuito real, os bits podem não mudar exatamente no mesmo instante. Isso pode gerar uma leitura errada momentânea.

No código Gray:

```text
3 = 0010
4 = 0110
```

Mudança:

```text
0010 → 0110
```

Só muda 1 bit.

Por isso Gray é usado em:
- encoders rotativos;
- sensores de posição;
- comunicação entre domínios de clock;
- sistemas onde transições precisam evitar ambiguidade.

---

## 3.3 Conversão de binário para Gray

Regra:

```text
1. O primeiro bit do Gray é igual ao primeiro bit do binário.
2. Cada próximo bit do Gray é o XOR entre o bit atual do binário e o bit anterior do binário.
```

Outra forma:

```text
Gray = Binário XOR (Binário deslocado 1 bit para a direita)
```

Mas para fazer manualmente, use a primeira regra.

---

### Exemplo 1: converter `1011` binário para Gray

Binário:

```text
B = 1 0 1 1
```

Primeiro bit do Gray:

```text
G1 = 1
```

Agora faça XOR entre bits vizinhos do binário:

```text
1 XOR 0 = 1
0 XOR 1 = 1
1 XOR 1 = 0
```

Resultado:

```text
B = 1 0 1 1
G = 1 1 1 0
```

Logo:

```text
1011₂ = 1110 em Gray
```

---

### Exemplo 2: converter `0101` binário para Gray

Binário:

```text
B = 0 1 0 1
```

Primeiro bit:

```text
G1 = 0
```

XORs:

```text
0 XOR 1 = 1
1 XOR 0 = 1
0 XOR 1 = 1
```

Resultado:

```text
G = 0 1 1 1
```

Logo:

```text
0101₂ = 0111 em Gray
```

---

## 3.4 Conversão de Gray para binário

Regra:

```text
1. O primeiro bit do binário é igual ao primeiro bit do Gray.
2. Cada próximo bit do binário é o XOR entre o bit binário anterior e o bit Gray atual.
```

Ou seja, é um XOR acumulado.

---

### Exemplo 1: converter `1110` Gray para binário

Gray:

```text
G = 1 1 1 0
```

Primeiro bit do binário:

```text
B1 = 1
```

Agora:

```text
B2 = B1 XOR G2 = 1 XOR 1 = 0
B3 = B2 XOR G3 = 0 XOR 1 = 1
B4 = B3 XOR G4 = 1 XOR 0 = 1
```

Resultado:

```text
B = 1 0 1 1
```

Logo:

```text
1110 Gray = 1011₂
```

---

### Exemplo 2: converter `0111` Gray para binário

Gray:

```text
G = 0 1 1 1
```

Primeiro bit:

```text
B1 = 0
```

Agora:

```text
B2 = 0 XOR 1 = 1
B3 = 1 XOR 1 = 0
B4 = 0 XOR 1 = 1
```

Resultado:

```text
B = 0101
```

Logo:

```text
0111 Gray = 0101₂
```

---

## 3.5 Regra rápida do XOR

Para fazer Gray, você precisa lembrar XOR:

| A | B | A XOR B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Resumo:

```text
XOR dá 1 quando os bits são diferentes.
```

---

# 4. ASCII

## 4.1 O que é ASCII?

**ASCII** significa **American Standard Code for Information Interchange**.

É um código que associa números a caracteres.

Exemplos:
- letras;
- dígitos;
- pontuação;
- espaço;
- caracteres de controle.

O ASCII original usa **7 bits**, permitindo:

```text
2⁷ = 128 códigos
```

Os códigos vão de:

```text
0 a 127
```

Na prática, em computadores, muitas vezes cada caractere é armazenado em 8 bits, com um bit extra ou usando extensões.

---

## 4.2 Exemplos importantes de ASCII

Você não precisa decorar a tabela inteira. Para prova, vale saber alguns padrões.

| Caractere | Decimal | Hexadecimal | Binário |
|---|---:|---|---|
| espaço | 32 | `0x20` | `0010 0000` |
| `0` | 48 | `0x30` | `0011 0000` |
| `1` | 49 | `0x31` | `0011 0001` |
| `2` | 50 | `0x32` | `0011 0010` |
| `9` | 57 | `0x39` | `0011 1001` |
| `A` | 65 | `0x41` | `0100 0001` |
| `B` | 66 | `0x42` | `0100 0010` |
| `Z` | 90 | `0x5A` | `0101 1010` |
| `a` | 97 | `0x61` | `0110 0001` |
| `b` | 98 | `0x62` | `0110 0010` |
| `z` | 122 | `0x7A` | `0111 1010` |

---

## 4.3 Padrões úteis

### Dígitos

Os caracteres `'0'` a `'9'` vão de:

```text
'0' = 48 = 0x30
'9' = 57 = 0x39
```

Isso significa:

```text
'5' = 0x35 = 53 decimal
```

Atenção:

```text
5 como número = 0000 0101
'5' como caractere ASCII = 0011 0101
```

São coisas diferentes.

---

### Letras maiúsculas

As letras maiúsculas vão de:

```text
'A' = 65 = 0x41
'Z' = 90 = 0x5A
```

Exemplo:

```text
'C' = 67 = 0x43
```

---

### Letras minúsculas

As letras minúsculas vão de:

```text
'a' = 97 = 0x61
'z' = 122 = 0x7A
```

Exemplo:

```text
'c' = 99 = 0x63
```

---

## 4.4 Diferença entre maiúscula e minúscula

Em ASCII:

```text
'a' - 'A' = 32
```

Exemplo:

```text
'A' = 65
'a' = 97
97 - 65 = 32
```

Em hexadecimal:

```text
'A' = 0x41
'a' = 0x61
```

A diferença está no bit `0x20`.

Isso pode aparecer em questões conceituais.

---

## 4.5 ASCII de número vs número real

Muito importante:

| Representação | Valor |
|---|---|
| número `7` | `0000 0111` |
| caractere `'7'` em ASCII | `0011 0111` |

O número real 7 vale 7.  
O caractere `'7'` vale 55 em ASCII.

Isso é comum em programação:

```text
'0' = 48
'1' = 49
'2' = 50
...
'9' = 57
```

Para converter um caractere numérico para valor numérico:

```text
valor = caractere - '0'
```

Exemplo:

```text
'7' - '0' = 55 - 48 = 7
```

---

# 5. Checksum

## 5.1 O que é checksum?

**Checksum** é um valor calculado a partir de dados para ajudar a detectar erros.

A ideia é:

```text
1. Você tem uma sequência de dados.
2. Calcula um valor de verificação.
3. Envia ou armazena os dados junto com esse valor.
4. Depois, calcula de novo.
5. Se o resultado for diferente, provavelmente houve erro.
```

Checksum não é, em geral, para corrigir erros.  
Ele serve principalmente para **detectar** erros.

---

## 5.2 Exemplo simples com soma

Suponha que temos os dados:

```text
3, 5, 2
```

Checksum simples:

```text
3 + 5 + 2 = 10
```

Enviamos:

```text
dados: 3, 5, 2
checksum: 10
```

Quem recebe soma os dados:

```text
3 + 5 + 2 = 10
```

Como bate com o checksum, parece estar correto.

Se chegar:

```text
3, 6, 2
```

A soma dá:

```text
3 + 6 + 2 = 11
```

Não bate com o checksum 10.  
Então foi detectado erro.

---

## 5.3 Checksum com limite de bits

Em sistemas digitais, muitas vezes o checksum é calculado com uma quantidade fixa de bits.

Exemplo com 4 bits:

Dados:

```text
0101 = 5
0011 = 3
0110 = 6
```

Soma:

```text
5 + 3 + 6 = 14
```

Em 4 bits:

```text
14 = 1110
```

Checksum:

```text
1110
```

Se a soma passar de 15, pode haver descarte do carry ou uso de complemento, dependendo do método.

Para prova objetiva básica, o mais importante é entender a finalidade:

```text
Checksum detecta alterações nos dados.
```

---

## 5.4 Checksum detecta todos os erros?

Não.

Um checksum simples pode falhar.

Exemplo:

Dados originais:

```text
3, 5, 2
```

Soma:

```text
10
```

Dados alterados:

```text
4, 4, 2
```

Soma:

```text
10
```

O checksum ficou igual, mas os dados mudaram.

Então:

```text
Checksum simples detecta muitos erros, mas não todos.
```

Métodos mais robustos, como CRC, detectam mais tipos de erro.

---

## 5.5 Checksum vs paridade vs CRC

| Método | Ideia | Capacidade |
|---|---|---|
| Paridade | Conta se há número par/ímpar de bits 1 | Simples, detecta erros básicos |
| Checksum | Soma ou combina blocos de dados | Melhor que paridade simples |
| CRC | Usa divisão polinomial binária | Mais robusto |

Para o seu edital, como aparece "checksum, etc.", provavelmente basta saber:
- o que é;
- para que serve;
- que detecta erros;
- que não necessariamente corrige;
- que pode falhar dependendo do algoritmo.

---

# 6. Comparação geral

| Código | Serve para | Ideia principal |
|---|---|---|
| BCD | Representar dígitos decimais | Cada dígito decimal vira 4 bits |
| Gray | Evitar erro em transições | Só 1 bit muda entre valores consecutivos |
| ASCII | Representar caracteres | Cada caractere tem um código numérico |
| Checksum | Detectar erro | Valor calculado a partir dos dados |

---

# 7. Erros comuns em prova

## Erro 1: confundir binário comum com BCD

```text
12 em binário comum = 1100
12 em BCD = 0001 0010
```

---

## Erro 2: achar que todo grupo de 4 bits é BCD válido

```text
1010 não é válido em BCD 8421.
```

---

## Erro 3: confundir número com caractere ASCII

```text
7 número = 0000 0111
'7' ASCII = 0011 0111
```

---

## Erro 4: converter Gray como se fosse binário comum

```text
1110 Gray não é 14 decimal diretamente.
```

Primeiro converta Gray para binário:

```text
1110 Gray = 1011 binário = 11 decimal
```

---

## Erro 5: achar que checksum corrige erro

Checksum geralmente detecta erro.  
Não necessariamente corrige.

---

# 8. Exercícios resolvidos

## Exercício 1

Converter `47` para BCD.

Solução:

```text
4 → 0100
7 → 0111
```

Resposta:

```text
47 em BCD = 0100 0111
```

---

## Exercício 2

Converter `0011 1001` de BCD para decimal.

Separando:

```text
0011 = 3
1001 = 9
```

Resposta:

```text
0011 1001 = 39
```

---

## Exercício 3

O BCD `0101 1011` é válido?

Separando:

```text
0101 = 5
1011 = 11
```

`1011` é inválido em BCD.

Resposta:

```text
Não é válido.
```

---

## Exercício 4

Converter o binário `1101` para Gray.

Binário:

```text
1 1 0 1
```

Primeiro bit:

```text
1
```

XORs:

```text
1 XOR 1 = 0
1 XOR 0 = 1
0 XOR 1 = 1
```

Resposta:

```text
1101 binário = 1011 Gray
```

---

## Exercício 5

Converter `1011` Gray para binário.

Gray:

```text
1 0 1 1
```

Primeiro bit binário:

```text
1
```

Cálculo:

```text
B2 = 1 XOR 0 = 1
B3 = 1 XOR 1 = 0
B4 = 0 XOR 1 = 1
```

Resposta:

```text
1011 Gray = 1101 binário
```

---

## Exercício 6

Qual é o ASCII hexadecimal de `'A'`?

Resposta:

```text
'A' = 65 decimal = 0x41
```

---

## Exercício 7

Qual é a diferença entre o número `5` e o caractere `'5'`?

Resposta:

```text
5 número = 0000 0101
'5' ASCII = 0011 0101 = 0x35 = 53 decimal
```

---

## Exercício 8

Um checksum simples soma os valores `4, 7, 2`. Qual o checksum decimal?

```text
4 + 7 + 2 = 13
```

Resposta:

```text
13
```

---

# 9. Exercícios para fazer

## BCD

1. Converta `25` para BCD.
2. Converta `408` para BCD.
3. Converta `0011 0110` de BCD para decimal.
4. Converta `1001 0000 0111` de BCD para decimal.
5. Diga se `0101 1010` é BCD válido.
6. Diga se `0010 1001` é BCD válido.
7. Some em BCD: `4 + 3`.
8. Some em BCD: `8 + 7`.

## Gray

9. Converta `1010` binário para Gray.
10. Converta `1111` binário para Gray.
11. Converta `0011` binário para Gray.
12. Converta `1111` Gray para binário.
13. Converta `0101` Gray para binário.
14. Converta `1000` Gray para binário.
15. Por que Gray é usado em encoders?

## ASCII

16. Qual é o ASCII decimal de `'A'`?
17. Qual é o ASCII hexadecimal de `'a'`?
18. Qual é o ASCII decimal de `'0'`?
19. Qual é a diferença entre `7` número e `'7'` caractere?
20. Se `'0' = 48`, quanto vale `'8'` em decimal?

## Checksum

21. Para que serve um checksum?
22. Checksum corrige erro ou detecta erro?
23. Calcule um checksum simples por soma para os dados: `2, 6, 5`.
24. Os dados originais `3, 4, 5` têm checksum 12. Se chegarem `4, 3, 5`, esse checksum simples detecta erro?
25. Qual método costuma ser mais robusto: paridade simples, checksum simples ou CRC?

---

# 10. Gabarito

1. `0010 0101`
2. `0100 0000 1000`
3. `36`
4. `907`
5. Não. `1010` é inválido em BCD.
6. Sim.
7. `4 + 3 = 7`, BCD: `0111`
8. `8 + 7 = 15`, BCD: `0001 0101`
9. `1111`
10. `1000`
11. `0010`
12. `1010` binário
13. `0110` binário
14. `1111` binário
15. Porque entre valores consecutivos só muda 1 bit, reduzindo erros de transição.
16. `65`
17. `0x61`
18. `48`
19. `7` número vale 7; `'7'` em ASCII vale 55 decimal ou `0x37`.
20. `56`
21. Para detectar alterações/erros nos dados.
22. Em geral, detecta erro; não necessariamente corrige.
23. `13`
24. Não. A soma continua `12`, então esse checksum simples não detecta essa troca.
25. CRC.

---

# 11. O que realmente memorizar

## BCD

```text
Cada dígito decimal = 4 bits.
Válidos: 0000 a 1001.
Inválidos: 1010 a 1111.
```

## Gray

```text
Só 1 bit muda entre valores consecutivos.
Binário → Gray: primeiro bit igual; depois XOR de bits vizinhos.
Gray → Binário: primeiro bit igual; depois XOR acumulado.
```

## ASCII

```text
'0' = 48 = 0x30
'A' = 65 = 0x41
'a' = 97 = 0x61
'a' - 'A' = 32
```

## Checksum

```text
Serve para detectar erro.
Não garante corrigir erro.
Checksum simples pode falhar.
CRC é mais robusto.
```

---

# 12. Plano de estudo para este conteúdo

Sugestão para hoje:

| Etapa | Tempo |
|---|---:|
| Ler BCD e fazer exemplos | 30 min |
| Ler Gray e treinar conversões | 40 min |
| Ler ASCII e memorizar padrões | 20 min |
| Ler checksum conceitual | 15 min |
| Fazer exercícios | 40 min |
| Corrigir e criar flashcards | 20 min |

Flashcards recomendados:

1. O que é BCD?
2. Quais códigos BCD 8421 são inválidos?
3. Como converter binário para Gray?
4. Como converter Gray para binário?
5. O que é ASCII?
6. Qual ASCII de `'0'`, `'A'` e `'a'`?
7. Diferença entre número `7` e caractere `'7'`.
8. Para que serve checksum?
9. Checksum corrige ou detecta erro?
10. Por que Gray reduz erros de transição?
