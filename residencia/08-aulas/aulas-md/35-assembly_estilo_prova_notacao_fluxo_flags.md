# Aula Detalhada - Assembly Em Estilo De Prova, Notação, Fluxo E Flags

**Tema do dia:** assembly em estilo de prova, registradores `R0`, `R1`, imediatos com `#`, labels, `CMP`, flags `Z`, `N`, `C`, `V`, desvios `B`, `BEQ`, `BNE`, chamadas `BL`, retorno com `BX LR`, `LDR`, `STR`, endereçamento por colchetes e deslocamentos  
**Aula na sequência:** 35  
**Objetivo:** aprender a ler trechos de assembly que aparecem em questões, mesmo quando a prova usa uma notação genérica inspirada em ARM/RISC, e resolver perguntas de fluxo, registradores, flags, memória e branch.

---

## 1. Onde Esta Aula Entra No Estudo?

Você já estudou:

```text
Aula 25 -> assembly básico, operandos, labels e desvios
Aula 26 -> formatos de instrução e modos de endereçamento
Aula 27 -> datapath, controle e execução de instruções
Aula 34 -> assembly prático, otimização e depuração
```

Esta aula é mais operacional.

A pergunta agora é:

```text
quando aparece um trecho de assembly na questão, como eu leio sem travar?
```

Exemplo típico:

```asm
loop:
  ADD  R0, R0, R1
  SUBS R1, R1, #1
  BNE  loop
  STR  R0, [R2]
```

Você não precisa saber uma arquitetura inteira.

Precisa conseguir responder:

```text
qual registrador muda?
qual flag foi testada?
o branch volta ou não volta?
qual valor final fica na memória?
```

---

# 2. O Assembly Da Prova Costuma Ser Genérico

Muitas questões não cobram uma arquitetura real com todos os detalhes.

Elas usam um estilo parecido com:

```text
ARM
MIPS
RISC genérico
```

Na prática, você deve reconhecer padrões.

Exemplos:

```asm
ADD R1, R2, R3
ADDI R1, R2, #5
CMP R2, #0
BEQ alvo
BNE loop
LDR R1, [R2]
STR R1, [R2]
```

Mesmo que a sintaxe varie, a ideia geralmente é:

```text
registradores guardam valores
instruções aritméticas alteram registradores
load lê memória
store escreve memória
branch altera PC
flags controlam desvios condicionais
```

---

# 3. Registradores `R0`, `R1`, `R2`

Registradores são espaços pequenos e rápidos dentro do processador.

Em questões, aparecem como:

```text
R0
R1
R2
R3
...
```

Eles guardam valores temporários.

Exemplo:

```asm
ADD R3, R1, R2
```

Leitura comum:

```text
R3 = R1 + R2
```

Ou seja:

```text
destino = primeiro registrador
fontes = registradores seguintes
```

Isso é muito comum em sintaxe ARM/RISC.

Pegadinha:

```asm
ADD R3, R1, R2
```

Não significa:

```text
R1 = R3 + R2
```

Na maioria das questões desse estilo:

```text
primeiro registrador após a instrução é o destino
```

---

# 4. Imediato Com `#`

O símbolo `#` costuma indicar valor imediato.

Imediato:

```text
constante escrita dentro da própria instrução
```

Exemplos:

```asm
ADD R1, R1, #1
SUB R2, R2, #4
CMP R3, #0
```

Leitura:

```text
ADD R1, R1, #1 -> R1 = R1 + 1
SUB R2, R2, #4 -> R2 = R2 - 4
CMP R3, #0     -> compara R3 com 0
```

Pegadinha:

```text
#5 não é endereço de memória
#5 é o número 5 usado diretamente
```

---

# 5. Labels

Label é um nome para um endereço/instrução.

Exemplo:

```asm
loop:
  SUBS R1, R1, #1
  BNE loop
```

`loop:` marca uma posição do programa.

O branch pode voltar para essa posição.

Label não é uma instrução que executa.

Label é:

```text
um nome para um ponto do código
```

Se uma questão perguntar:

```text
label é o quê?
```

Resposta:

```text
um símbolo associado a um endereço de instrução
```

---

# 6. Diferença Entre Label E Branch

Label:

```text
nome/endereço de um ponto do programa
```

Branch:

```text
instrução que altera o fluxo para um label/endereço
```

Exemplo:

```asm
inicio:
  ADD R0, R0, #1
  B inicio
```

`inicio:` é label.

`B inicio` é branch.

O branch manda o PC voltar para o endereço marcado por `inicio`.

---

# 7. PC - Program Counter

PC é o registrador que aponta para a próxima instrução ou para a instrução atual, dependendo da arquitetura e do momento observado.

Para prova:

```text
PC controla o fluxo de instruções
```

Execução normal:

```text
PC vai para a próxima instrução
```

Branch:

```text
PC recebe outro endereço
```

Chamada de função:

```text
PC vai para função
LR guarda retorno, em estilo ARM
```

---

# 8. `B` - Branch Incondicional

`B` significa branch.

Branch incondicional:

```text
desvia sempre
```

Exemplo:

```asm
B fim
```

Leitura:

```text
vá para o label fim
```

Não depende de flag.

Não salva retorno.

Resumo:

```text
B = jump/desvio simples
```

---

# 9. `BEQ` - Branch If Equal

`BEQ` significa:

```text
Branch if Equal
```

Desvia se a comparação anterior deu igual.

Em muitas arquiteturas, isso significa:

```text
Z = 1
```

`Z` é a flag zero.

Exemplo:

```asm
CMP R2, #0
BEQ fim
```

Leitura:

```text
compare R2 com 0
se R2 == 0, vá para fim
```

Por quê?

Porque:

```text
CMP R2, #0
```

faz conceitualmente:

```text
R2 - 0
```

Se o resultado é zero:

```text
Z = 1
```

Então:

```text
BEQ é tomado
```

---

# 10. `BNE` - Branch If Not Equal

`BNE` significa:

```text
Branch if Not Equal
```

Desvia se a comparação anterior deu diferente.

Em muitas arquiteturas:

```text
BNE desvia se Z = 0
```

Exemplo:

```asm
CMP R1, #0
BNE loop
```

Leitura:

```text
se R1 != 0, volte para loop
```

Em laços, `BNE` aparece muito.

---

# 11. `CMP`

`CMP` compara valores.

Em estilo ARM, `CMP A, B` faz uma subtração conceitual:

```text
A - B
```

Mas normalmente:

```text
não salva o resultado em registrador
apenas atualiza flags
```

Exemplo:

```asm
CMP R2, #0
```

Conceitualmente:

```text
R2 - 0
```

Se `R2` é zero:

```text
Z = 1
```

Se `R2` não é zero:

```text
Z = 0
```

Então:

```asm
BEQ alvo -> desvia se Z=1
BNE alvo -> desvia se Z=0
```

---

# 12. `SUBS` E Instruções Que Atualizam Flags

Em ARM, o sufixo `S` indica que a instrução atualiza flags.

Exemplo:

```asm
SUBS R1, R1, #1
```

Leitura:

```text
R1 = R1 - 1
atualiza flags
```

Então, se depois vem:

```asm
BNE loop
```

O `BNE` testa as flags geradas pelo `SUBS`.

Exemplo:

```asm
SUBS R1, R1, #1
BNE loop
```

Significa:

```text
decrementa R1
se o resultado não foi zero, volta para loop
```

Pegadinha:

```text
BNE não compara sozinho
```

Ele usa flags que vieram de uma instrução anterior, como:

```text
CMP
SUBS
ADDS
```

---

# 13. Flags Principais

Flags são bits de estado atualizados por certas operações.

As mais importantes:

```text
Z -> zero
N -> negative
C -> carry / ausência de borrow, dependendo da operação
V -> overflow signed
```

## 13.1 Flag Z

`Z` indica resultado zero.

```text
resultado = 0 -> Z = 1
resultado != 0 -> Z = 0
```

Usada por:

```text
BEQ
BNE
```

## 13.2 Flag N

`N` indica resultado negativo em complemento de 2.

Normalmente copia o MSB do resultado.

```text
MSB = 1 -> N = 1
MSB = 0 -> N = 0
```

## 13.3 Flag C

`C` tem cuidado.

Em soma unsigned:

```text
C = carry out
```

Em subtração, em muitas arquiteturas:

```text
C = 1 significa sem borrow
C = 0 significa houve borrow
```

Esse foi um ponto que já gerou confusão.

## 13.4 Flag V

`V` indica overflow em aritmética signed.

Exemplo:

```text
positivo + positivo deu negativo -> overflow signed
negativo + negativo deu positivo -> overflow signed
```

---

# 14. Como Ler Um Laço Com `BNE`

Exemplo:

```asm
MOV  R0, #0
MOV  R1, #3
loop:
  ADD  R0, R0, R1
  SUBS R1, R1, #1
  BNE  loop
```

Vamos rastrear:

Inicial:

```text
R0 = 0
R1 = 3
```

Primeira volta:

```text
ADD  -> R0 = 0 + 3 = 3
SUBS -> R1 = 3 - 1 = 2, Z=0
BNE  -> volta
```

Segunda volta:

```text
ADD  -> R0 = 3 + 2 = 5
SUBS -> R1 = 2 - 1 = 1, Z=0
BNE  -> volta
```

Terceira volta:

```text
ADD  -> R0 = 5 + 1 = 6
SUBS -> R1 = 1 - 1 = 0, Z=1
BNE  -> não volta
```

Final:

```text
R0 = 6
R1 = 0
```

---

# 15. `BL` - Branch With Link

`BL` significa:

```text
Branch with Link
```

É usado para chamada de função/sub-rotina.

Faz duas coisas:

```text
1. desvia para o endereço da função
2. salva o endereço de retorno no LR
```

Exemplo:

```asm
BL soma
```

Leitura:

```text
chame a função soma
guarde o retorno no LR
vá para soma
```

Diferença para `B`:

```text
B  -> só desvia
BL -> desvia e salva retorno
```

---

# 16. `LR` - Link Register

`LR` é o registrador de link.

Ele guarda o endereço de retorno de uma chamada.

Em estilo ARM:

```text
BL função -> salva retorno em LR
BX LR     -> volta para o endereço salvo em LR
```

Pegadinha:

```text
LR é registrador, não instrução
```

Ele guarda um endereço.

---

# 17. `BX LR`

`BX LR` significa, em estilo ARM:

```text
branch exchange para o endereço contido em LR
```

Para seu nível de prova, leia como:

```text
retorne da função
```

Exemplo:

```asm
funcao:
  ADD R0, R0, #1
  BX LR
```

Se a função foi chamada com `BL funcao`, o `BX LR` volta para a instrução seguinte ao `BL`.

---

# 18. `LDR` / `LOAD`

`LDR` ou `LOAD` lê da memória para um registrador.

Exemplo:

```asm
LDR R1, [R2]
```

Leitura:

```text
R1 = Mem[R2]
```

Ou seja:

```text
use o valor de R2 como endereço
leia a memória nesse endereço
coloque o dado em R1
```

Pegadinha:

```text
R2 não é o dado
R2 é o endereço
```

Quando está entre colchetes:

```text
[R2] = memória no endereço guardado em R2
```

---

# 19. `STR` / `STORE`

`STR` ou `STORE` escreve registrador na memória.

Exemplo:

```asm
STR R1, [R2]
```

Leitura:

```text
Mem[R2] = R1
```

Ou seja:

```text
pegue o valor de R1
grave na memória no endereço guardado em R2
```

Pegadinha:

```text
STORE não escreve em registrador
STORE escreve na memória
```

---

# 20. Colchetes Em Endereçamento

Colchetes indicam acesso à memória.

```asm
R2
```

significa:

```text
o valor do registrador R2
```

```asm
[R2]
```

significa:

```text
a memória no endereço guardado em R2
```

Exemplo:

```text
R2 = 0x1000
Mem[0x1000] = 42
```

Então:

```asm
LDR R1, [R2]
```

faz:

```text
R1 = 42
```

---

# 21. Base + Offset

Muitas instruções acessam memória assim:

```asm
LDR R1, [R2, #8]
```

Leitura:

```text
R1 = Mem[R2 + 8]
```

`R2` é base.

`#8` é deslocamento imediato.

Isso é comum para acessar campos de estruturas ou posições próximas.

Exemplo:

```text
R2 = 0x1000
offset = 8
endereço = 0x1008
```

---

# 22. Índice Escalado E `<<`

Em questão, pode aparecer:

```asm
[R4 + R1 << 2]
```

`<<` significa deslocamento à esquerda.

Deslocar à esquerda por 2 bits equivale a multiplicar por 4.

```text
R1 << 2 = R1 * 4
```

Por que isso aparece?

Porque word de 32 bits tem:

```text
4 bytes
```

Se `R1` é índice de vetor de words, o endereço em bytes é:

```text
base + índice * 4
```

Exemplo:

```text
R4 = 0x1000
R1 = 5
R1 << 2 = 20 = 0x14
endereço = 0x1000 + 0x14 = 0x1014
```

---

# 23. Byte-Addressable

Se a memória é byte-addressable, cada endereço aponta para um byte.

Então:

```text
word de 32 bits = 4 bytes
```

Vetor de words:

```text
vetor[0] -> base + 0
vetor[1] -> base + 4
vetor[2] -> base + 8
vetor[3] -> base + 12
```

Por isso, para acessar `vetor[i]`:

```text
endereço = base + i * 4
```

Em assembly:

```asm
[base + índice << 2]
```

---

# 24. Branch Com Deslocamento

Alguns branches não guardam o endereço completo.

Eles guardam um deslocamento.

Exemplo:

```text
imediato signed de 12 bits
representa deslocamento em palavras de 4 bytes
```

Se são 12 bits signed:

```text
faixa = -2048 a +2047
```

Se cada unidade representa 4 bytes:

```text
multiplica por 4
```

Faixa em bytes:

```text
-2048 * 4 = -8192
+2047 * 4 = +8188
```

Isso explica por que aparece deslocamento à esquerda de 2 bits:

```text
<< 2 = multiplicar por 4
```

---

# 25. Como Resolver Questão De Assembly

Use este método.

## 25.1 Passo 1 - Identifique Registradores Iniciais

Procure:

```text
R0 = ?
R1 = ?
R2 = ?
memória = ?
```

Monte uma tabelinha.

## 25.2 Passo 2 - Marque Labels

Exemplo:

```asm
loop:
```

Isso é ponto de retorno.

## 25.3 Passo 3 - Execute Linha Por Linha

Atualize registradores.

Exemplo:

```asm
ADD R0, R0, R1
```

Faça:

```text
R0 novo = R0 antigo + R1
```

## 25.4 Passo 4 - Atualize Flags

Se aparecer:

```text
CMP
SUBS
ADDS
```

atualize mentalmente flags importantes.

Principal:

```text
Z
```

## 25.5 Passo 5 - Decida Branch

```text
BEQ -> se Z=1
BNE -> se Z=0
B   -> sempre
```

## 25.6 Passo 6 - Só No Final Veja Memória

Se aparecer:

```asm
STR R0, [R2]
```

grave:

```text
Mem[R2] = R0
```

---

# 26. Exemplo Completo

Dados:

```text
R0 = 0
R1 = 3
R2 = 0x2000
Memória inicialmente zerada
```

Código:

```asm
loop:
  ADD  R0, R0, R1
  SUBS R1, R1, #1
  BNE  loop
  STR  R0, [R2]
```

Tabela:

| Volta | R0 antes | R1 antes | ADD | SUBS | Z | BNE |
|---:|---:|---:|---:|---:|---:|---|
| 1 | 0 | 3 | R0=3 | R1=2 | 0 | volta |
| 2 | 3 | 2 | R0=5 | R1=1 | 0 | volta |
| 3 | 5 | 1 | R0=6 | R1=0 | 1 | não volta |

Depois:

```asm
STR R0, [R2]
```

Como:

```text
R0 = 6
R2 = 0x2000
```

Então:

```text
Mem[0x2000] = 6
```

---

# 27. Instruções Com Sufixo E Nomes Parecidos

## 27.1 `ADD` E `ADDS`

```text
ADD  -> soma
ADDS -> soma e atualiza flags
```

## 27.2 `SUB` E `SUBS`

```text
SUB  -> subtrai
SUBS -> subtrai e atualiza flags
```

## 27.3 `CMP`

```text
compara atualizando flags, sem salvar resultado
```

---

# 28. Tabela Rápida De Branches Comuns

| Instrução | Ideia | Condição típica |
|---|---|---|
| `B` | branch sempre | nenhuma |
| `BEQ` | branch se igual | `Z=1` |
| `BNE` | branch se diferente | `Z=0` |
| `BL` | chamada de função | salva retorno em `LR` |
| `BX LR` | retorno de função | PC recebe `LR` |

Outras podem existir:

```text
BGT -> maior que
BLT -> menor que
BGE -> maior ou igual
BLE -> menor ou igual
```

Mas para sua prova, priorize:

```text
B
BEQ
BNE
BL
BX LR
```

---

# 29. O Que A Prova Pode Perguntar?

Perguntas prováveis:

```text
qual valor final de um registrador?
quantas vezes o loop executa?
quando BNE é tomado?
qual flag BEQ testa?
o que CMP faz?
o que significa #5?
o que significa [R2]?
o que STR grava?
o que BL salva?
o que BX LR faz?
por que R1 << 2 multiplica por 4?
```

Respostas-chave:

```text
# = imediato
[] = acesso à memória
BEQ = Z=1
BNE = Z=0
CMP = compara atualizando flags
SUBS = subtrai e atualiza flags
BL = chama função e salva retorno em LR
BX LR = retorna
<<2 = multiplica por 4
```

---

# 30. Pegadinhas

## 30.1 `BNE` Não Compara Sozinho

Ele usa flags anteriores.

Se antes veio:

```asm
SUBS R1, R1, #1
```

O `BNE` testa o resultado desse `SUBS`.

---

## 30.2 `CMP` Não Guarda Resultado

`CMP R1, #0` não faz:

```text
R1 = R1 - 0
```

Ele só atualiza flags.

---

## 30.3 `[R2]` Não É R2

```text
R2 = valor do registrador
[R2] = memória no endereço R2
```

---

## 30.4 `STR` Não É LOAD

```asm
LDR R1, [R2] -> R1 = Mem[R2]
STR R1, [R2] -> Mem[R2] = R1
```

---

## 30.5 `BL` Não Salva O Endereço Da Própria BL

Conceitualmente, ele salva o endereço de retorno:

```text
a próxima instrução depois da chamada
```

Não é para voltar para a própria `BL`, senão chamaria a função de novo.

---

## 30.6 `BX LR` Não Serve Só Para Chamar LR

`BX LR` usa o endereço guardado em `LR` para voltar.

Leia como:

```text
return
```

---

## 30.7 `<<2` Não É Somar 2

Deslocar à esquerda por 2:

```text
x << 2 = x * 4
```

Não é:

```text
x + 2
```

---

# 31. Resumo De Prova

```text
R0, R1, R2 = registradores
#5 = valor imediato 5
label = nome de endereço
B label = desvia sempre
CMP A,B = compara A-B e atualiza flags
SUBS = subtrai e atualiza flags
Z=1 = resultado zero
BEQ = desvia se Z=1
BNE = desvia se Z=0
BL = chama função e salva retorno em LR
LR = link register
BX LR = retorna da função
LDR R1,[R2] = R1 recebe Mem[R2]
STR R1,[R2] = Mem[R2] recebe R1
[Rbase,#offset] = memória em base + offset
R1 << 2 = R1 * 4
word 32 bits = 4 bytes
```

---

# 32. Exercícios

## 32.1 Conceituais

1. O que significa `#5` em uma instrução assembly?
2. O que é uma label?
3. Qual é a diferença entre label e branch?
4. O que faz `B alvo`?
5. O que faz `BEQ alvo`?
6. O que faz `BNE alvo`?
7. O que faz `CMP R1, #0`?
8. Qual flag normalmente indica resultado zero?
9. O que significa `[R2]`?
10. Qual é a diferença entre `LDR R1, [R2]` e `STR R1, [R2]`?
11. O que faz `BL funcao`?
12. O que é `LR`?
13. O que faz `BX LR`?
14. Quanto vale `5 << 2`?
15. Por que índice de word de 32 bits costuma ser deslocado com `<<2`?

## 32.2 Múltipla Escolha

16. Após:

```asm
CMP R2, #0
BEQ fim
```

O branch é tomado quando:

- A) `R2 != 0`
- B) `R2 == 0`
- C) sempre
- D) nunca

17. Após:

```asm
SUBS R1, R1, #1
BNE loop
```

O `BNE` volta para `loop` quando:

- A) o resultado do `SUBS` foi zero.
- B) o resultado do `SUBS` não foi zero.
- C) houve overflow de ponto flutuante.
- D) `LR` foi apagado.

18. Se `R2 = 0x1000` e `R1 = 7`, o que faz:

```asm
STR R1, [R2]
```

- A) `R1 = Mem[0x1000]`
- B) `Mem[0x1000] = 7`
- C) `R2 = 7`
- D) `PC = 0x1000`

19. Se `R4 = 0x1000` e `R1 = 5`, qual endereço é `R4 + (R1 << 2)`?

- A) `0x1005`
- B) `0x100A`
- C) `0x1014`
- D) `0x1020`

20. `BL funcao` é diferente de `B funcao` porque:

- A) `BL` salva endereço de retorno em `LR`.
- B) `BL` nunca muda o PC.
- C) `BL` só funciona com memória DRAM.
- D) `BL` apaga todas as flags.

---

# 33. Gabarito

1. Valor imediato 5.
2. Nome simbólico associado a um endereço/ponto do código.
3. Label marca endereço; branch é instrução que desvia para endereço/label.
4. Desvia sempre para `alvo`.
5. Desvia se a comparação anterior deu igual, normalmente `Z=1`.
6. Desvia se a comparação anterior deu diferente, normalmente `Z=0`.
7. Compara `R1` com zero atualizando flags, sem salvar resultado.
8. `Z`.
9. Memória no endereço guardado em `R2`.
10. `LDR` lê memória para registrador; `STR` escreve registrador na memória.
11. Chama função e salva endereço de retorno em `LR`.
12. Link Register, registrador que guarda endereço de retorno.
13. Retorna para o endereço guardado em `LR`.
14. `20`.
15. Porque word de 32 bits tem 4 bytes, e `<<2` multiplica por 4.
16. B.
17. B.
18. B.
19. C. `5 << 2 = 20 = 0x14`; `0x1000 + 0x14 = 0x1014`.
20. A.

