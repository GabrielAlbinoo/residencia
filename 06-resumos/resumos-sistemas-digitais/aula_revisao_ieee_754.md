# Aula De Revisao - IEEE 754 Simples

**Tema:** representacao de numeros reais em ponto flutuante  
**Ligacao:** Aula 17 - ponto fixo e ponto flutuante  
**Objetivo:** resolver questoes de prova sobre normalizacao, bias, expoente armazenado, expoente real e bit implicito.

---

## 1. Ideia Principal

IEEE 754 e um padrao para guardar numeros com parte fracionaria no computador.

Exemplos:

```text
5,75
0,375
-13,5
1000000,25
```

A ideia parece com notacao cientifica.

Em decimal, a gente pode escrever:

```text
5730 = 5,73 x 10^3
0,0573 = 5,73 x 10^-2
```

Em binario, a ideia e parecida, mas usando base 2:

```text
101,11_2 = 1,0111_2 x 2^2
0,011_2 = 1,1_2 x 2^-2
```

O IEEE 754 guarda basicamente tres coisas:

```text
sinal
expoente
fracao
```

---

## 2. IEEE 754 Simples: Formato De 32 Bits

O formato simples, tambem chamado de single precision, tem 32 bits:

```text
1 bit  -> sinal
8 bits -> expoente
23 bits -> fracao
```

Visualmente:

```text
S | EEEEEEEE | FFFFFFFFFFFFFFFFFFFFFFF
1 |    8     |           23
```

Onde:

```text
S = bit de sinal
E = expoente armazenado
F = fracao/mantissa armazenada
```

Para numeros normalizados:

```text
valor = (-1)^S x 1.F x 2^(E_real)
```

Mas o expoente real nao e guardado diretamente. O que fica guardado e o expoente com bias.

---

## 3. Bit De Sinal

O bit de sinal e simples:

```text
S = 0 -> numero positivo
S = 1 -> numero negativo
```

Exemplos:

```text
S=0 -> +5,75
S=1 -> -5,75
```

O sinal nao altera a normalizacao. Ele so coloca o sinal no valor final.

---

## 4. Bias Do Expoente

No IEEE 754 simples, o expoente usa 8 bits.

Com 8 bits, seria possivel guardar valores de:

```text
0 ate 255
```

Mas o expoente real precisa poder ser negativo, zero ou positivo.

Entao o IEEE usa um deslocamento chamado **bias**.

No formato simples:

```text
bias = 127
```

As formulas essenciais sao:

```text
expoente armazenado = expoente real + 127
expoente real = expoente armazenado - 127
```

Exemplo:

```text
expoente real = 2
expoente armazenado = 2 + 127 = 129
```

Outro exemplo:

```text
expoente real = -2
expoente armazenado = -2 + 127 = 125
```

Essa e uma das partes mais importantes da prova.

---

## 5. O Bit 1 Implicito

Em numeros normalizados, a forma binaria sempre fica assim:

```text
1.xxxxx x 2^e
```

Repare que sempre tem um `1` antes da virgula.

Por isso, o IEEE 754 nao armazena esse `1`.

Ele fica implicito.

Exemplo:

```text
1,0111 x 2^2
```

O campo de fracao guarda apenas:

```text
0111...
```

Nao guarda:

```text
10111...
```

Frase para memorizar:

```text
em numero normalizado, o 1 antes da virgula e implicito
```

Essa foi exatamente a pegadinha da questao que dizia que o `1` era armazenado explicitamente. Essa afirmacao e falsa.

---

## 6. Receita Para Converter Um Numero Para IEEE 754

Para prova, use esta receita:

```text
1) descobrir o sinal
2) converter o modulo do numero para binario
3) normalizar para 1.xxxxx x 2^e
4) calcular expoente armazenado = e + 127
5) pegar a fracao depois do 1
```

Na maioria das questoes da sua prova, nao deve ser necessario escrever os 32 bits completos. Geralmente basta descobrir:

```text
normalizacao
expoente real
expoente armazenado
fracao inicial
```

---

## 7. Exemplo 1: 5,75

Converta:

```text
5,75_10
```

### 7.1 Converter para binario

Parte inteira:

```text
5_10 = 101_2
```

Parte fracionaria:

```text
0,75 = 0,11_2
```

Porque:

```text
0,11_2 = 1/2 + 1/4 = 0,5 + 0,25 = 0,75
```

Entao:

```text
5,75_10 = 101,11_2
```

### 7.2 Normalizar

Precisamos deixar um unico `1` antes da virgula:

```text
101,11_2 = 1,0111_2 x 2^2
```

A virgula andou duas casas para a esquerda.

Logo:

```text
expoente real = 2
```

### 7.3 Aplicar o bias

```text
expoente armazenado = 2 + 127 = 129
```

### 7.4 Fracao armazenada

Forma normalizada:

```text
1,0111
```

O `1` antes da virgula nao e armazenado.

Entao a fracao comeca com:

```text
0111...
```

### 7.5 Resumo

```text
5,75_10 = 1,0111_2 x 2^2
expoente real = 2
expoente armazenado = 129
fracao inicial = 0111
```

---

## 8. Exemplo 2: 0,375

Converta:

```text
0,375_10
```

### 8.1 Converter para binario

Sabemos:

```text
0,375 = 0,25 + 0,125
```

Em binario:

```text
0,25 = 2^-2
0,125 = 2^-3
```

Logo:

```text
0,375_10 = 0,011_2
```

### 8.2 Normalizar

Precisamos deixar um unico `1` antes da virgula.

```text
0,011_2 = 1,1_2 x 2^-2
```

Por que `2^-2`?

Porque para sair de:

```text
0,011
```

para:

```text
1,1
```

a virgula andou duas casas para a direita. Quando a virgula anda para a direita, o expoente fica negativo.

### 8.3 Aplicar bias

```text
expoente armazenado = -2 + 127 = 125
```

### 8.4 Fracao armazenada

Forma normalizada:

```text
1,1
```

O `1` antes da virgula e implicito.

A fracao comeca com:

```text
1000...
```

### 8.5 Resumo

```text
0,375_10 = 1,1_2 x 2^-2
expoente real = -2
expoente armazenado = 125
fracao inicial = 1000...
```

---

## 9. Exemplo 3: Expoente Armazenado Para Expoente Real

Questao:

```text
expoente armazenado = 10000101_2
```

Qual e o expoente real?

### 9.1 Converter o expoente armazenado

```text
10000101_2 = 128 + 4 + 1 = 133
```

### 9.2 Tirar o bias

```text
expoente real = 133 - 127 = 6
```

Resposta:

```text
6
```

Receita:

```text
binario -> decimal -> menos 127
```

---

## 10. Exemplo 4: Interpretar Campos

Suponha um numero IEEE 754 simples normalizado com:

```text
S = 1
E = 10000010_2
F = 101000...
```

### 10.1 Sinal

```text
S = 1 -> negativo
```

### 10.2 Expoente

```text
10000010_2 = 130
expoente real = 130 - 127 = 3
```

### 10.3 Fracao

Se:

```text
F = 101000...
```

entao o significando normalizado e:

```text
1,101000...
```

### 10.4 Valor

```text
valor = -1,101_2 x 2^3
```

Agora desloca a virgula 3 casas para a direita:

```text
1,101_2 x 2^3 = 1101_2
```

```text
1101_2 = 13
```

Como o sinal e negativo:

```text
valor = -13
```

---

## 11. Tabela De Apoio

## 11.1 Potencias fracionarias comuns

| Binario | Decimal |
|---:|---:|
| 0,1 | 0,5 |
| 0,01 | 0,25 |
| 0,001 | 0,125 |
| 0,0001 | 0,0625 |
| 0,11 | 0,75 |
| 0,101 | 0,625 |
| 0,011 | 0,375 |

## 11.2 Bias em exemplos comuns

| Expoente real | Expoente armazenado |
|---:|---:|
| -3 | 124 |
| -2 | 125 |
| -1 | 126 |
| 0 | 127 |
| 1 | 128 |
| 2 | 129 |
| 3 | 130 |
| 6 | 133 |

---

## 12. Casos Especiais

Para o nivel da sua prova, o mais importante e numero normalizado.

Mas vale saber a tabela geral:

| Expoente armazenado | Fracao | Significado |
|---:|---:|---|
| 0 | 0 | zero |
| 0 | diferente de 0 | subnormal |
| 1 a 254 | qualquer | numero normalizado |
| 255 | 0 | infinito |
| 255 | diferente de 0 | NaN |

Prioridade para prova:

```text
1) normalizado
2) bias
3) bit implicito
4) expoente real vs armazenado
5) saber que 255 e 0 sao casos especiais
```

Nao gaste muito tempo aprofundando subnormal agora, a menos que uma questao cobre diretamente.

---

## 13. Como Questoes Costumam Cobrar

## 13.1 Normalizacao

Exemplo:

```text
101,11_2 = ?
```

Resposta:

```text
1,0111_2 x 2^2
```

## 13.2 Bias

Exemplo:

```text
expoente real = 2
```

Resposta:

```text
expoente armazenado = 129
```

## 13.3 Expoente real

Exemplo:

```text
expoente armazenado = 10000101_2
```

Resposta:

```text
10000101_2 = 133
133 - 127 = 6
```

## 13.4 Bit implicito

Pergunta comum:

```text
O 1 antes da virgula e armazenado explicitamente?
```

Resposta:

```text
Nao. Ele e implicito em numeros normalizados.
```

## 13.5 Alternativa incorreta

Muito comum aparecer:

```text
Assinale a alternativa incorreta.
```

Nessas questoes, leia como:

```text
estou procurando a falsa
```

---

## 14. Erros Comuns

## 14.1 Guardar o expoente real no lugar do armazenado

Errado:

```text
expoente real = 2
expoente armazenado = 2
```

Certo:

```text
expoente armazenado = 2 + 127 = 129
```

## 14.2 Esquecer o bit implicito

Errado:

```text
1,0111 -> fracao armazenada = 10111
```

Certo:

```text
1,0111 -> fracao armazenada = 0111
```

## 14.3 Errar o sinal do expoente em numeros menores que 1

Exemplo:

```text
0,011_2 = 1,1_2 x 2^-2
```

Se o numero comeca com zeros depois da virgula, o expoente tende a ser negativo.

## 14.4 Confundir mantissa, fracao e significando

Para prova, use assim:

```text
significando normalizado = 1.fracao
fracao armazenada = bits depois do 1
```

## 14.5 Esquecer que IEEE 754 pode arredondar

Nem todo decimal tem representacao binaria finita.

Exemplo classico:

```text
0,1_10
```

em binario vira uma repeticao infinita.

Entao ponto flutuante pode ter erro de arredondamento.

---

## 15. Checklist De Resolucao

Use isso em prova:

```text
1) O numero e positivo ou negativo?
2) Qual e o binario do modulo?
3) Qual e a forma 1.xxxxx x 2^e?
4) Qual e o expoente real e?
5) Qual e o expoente armazenado? e + 127
6) Quais bits ficam na fracao? apenas depois do 1 implicito
```

Para ler um numero ja codificado:

```text
1) ler S
2) converter E para decimal
3) fazer E - 127
4) montar 1.F
5) aplicar 2^expoente
6) aplicar o sinal
```

---

## 16. Exercicios

## 16.1 Conceituais

1. No IEEE 754 simples, quantos bits sao usados para sinal, expoente e fracao?
2. Qual e o bias do IEEE 754 simples?
3. Em numero normalizado, o `1` antes da virgula e armazenado?
4. Qual formula converte expoente real para expoente armazenado?
5. Qual formula converte expoente armazenado para expoente real?

## 16.2 Normalizacao

6. Normalize:

```text
1101,1_2
```

7. Normalize:

```text
0,101_2
```

8. Normalize:

```text
0,0011_2
```

## 16.3 Bias

9. Se o expoente real e `3`, qual e o expoente armazenado?
10. Se o expoente real e `-2`, qual e o expoente armazenado?
11. Se o expoente armazenado e `10000010_2`, qual e o expoente real?
12. Se o expoente armazenado e `01111110_2`, qual e o expoente real?

## 16.4 Conversao completa

13. Para `5,75_10`, determine:

```text
normalizacao
expoente real
expoente armazenado
fracao inicial
```

14. Para `0,375_10`, determine:

```text
normalizacao
expoente real
expoente armazenado
fracao inicial
```

15. Para `-13,5_10`, determine:

```text
sinal
normalizacao
expoente real
expoente armazenado
fracao inicial
```

## 16.5 Nivel prova

16. Assinale a alternativa incorreta:

A) O IEEE 754 simples usa bias 127 no expoente.  
B) Em numeros normalizados, o significando tem forma `1.fracao`.  
C) O `1` antes da virgula e armazenado explicitamente na fracao.  
D) O expoente real pode ser obtido subtraindo 127 do expoente armazenado.

17. Um numero normalizado tem:

```text
S = 0
E = 10000001_2
F = 010000...
```

Qual valor ele representa?

18. Um numero normalizado tem expoente armazenado `01111101_2`. O expoente real e:

A) `125`  
B) `-2`  
C) `2`  
D) `127`

---

## 17. Gabarito Comentado

1. `1` bit de sinal, `8` bits de expoente e `23` bits de fracao.
2. `127`.
3. Nao. Ele e implicito.
4. `expoente armazenado = expoente real + 127`.
5. `expoente real = expoente armazenado - 127`.

6. `1101,1_2 = 1,1011_2 x 2^3`.
7. `0,101_2 = 1,01_2 x 2^-1`.
8. `0,0011_2 = 1,1_2 x 2^-3`.

9. `3 + 127 = 130`.
10. `-2 + 127 = 125`.
11. `10000010_2 = 130`; `130 - 127 = 3`.
12. `01111110_2 = 126`; `126 - 127 = -1`.

13. `5,75_10 = 101,11_2 = 1,0111_2 x 2^2`; expoente real `2`; armazenado `129`; fracao inicial `0111`.

14. `0,375_10 = 0,011_2 = 1,1_2 x 2^-2`; expoente real `-2`; armazenado `125`; fracao inicial `1000...`.

15. `-13,5_10`: sinal `1`; `13,5_10 = 1101,1_2`; normalizado `1,1011_2 x 2^3`; expoente real `3`; armazenado `130`; fracao inicial `1011`.

16. Alternativa **C**. O `1` antes da virgula nao e armazenado explicitamente.

17. Primeiro:

```text
S = 0 -> positivo
E = 10000001_2 = 129
expoente real = 129 - 127 = 2
F = 010000...
significando = 1,010000...
```

Agora:

```text
1,01_2 x 2^2 = 101_2 = 5
```

Resposta: `5`.

18. `01111101_2 = 125`; `125 - 127 = -2`. Alternativa **B**.

---

## 18. O Que Memorizar

```text
IEEE 754 simples = 1 sinal + 8 expoente + 23 fracao
bias = 127
expoente armazenado = expoente real + 127
expoente real = expoente armazenado - 127
normalizado = 1.fracao x 2^expoente
o 1 antes da virgula e implicito
fracao armazenada = bits depois do 1
```

Tabela curta:

```text
E_real = -2 -> E_arm = 125
E_real = -1 -> E_arm = 126
E_real = 0  -> E_arm = 127
E_real = 1  -> E_arm = 128
E_real = 2  -> E_arm = 129
E_real = 3  -> E_arm = 130
```

---

## 19. Plano De Estudo Para Fixar

Em 20 minutos:

```text
1) ler secoes 4, 5 e 6
2) refazer exemplos 7, 8 e 9 sem olhar
3) fazer exercicios 9 a 18
4) errando qualquer um, voltar para a receita da secao 15
```

Em Anki, vale criar cards apenas para:

```text
bias = 127
bit implicito
expoente armazenado = real + 127
expoente real = armazenado - 127
normalizar numero maior que 1
normalizar numero menor que 1
```

---

## 20. Conexao Com O Resto Da Prova

IEEE 754 conversa com:

- ponto flutuante da Aula 17;
- representacao numerica;
- erros de arredondamento;
- overflow e underflow numerico;
- leitura cuidadosa de alternativas conceituais.

Para sua prova, a prioridade nao e decorar todos os casos especiais. A prioridade e resolver com seguranca:

```text
normalizacao
bias
bit implicito
expoente real vs armazenado
```
