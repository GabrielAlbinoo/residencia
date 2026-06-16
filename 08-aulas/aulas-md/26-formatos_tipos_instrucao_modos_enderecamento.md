# Aula Detalhada - Formatos, Tipos De Instrução E Modos De Endereçamento

**Tema do dia:** formato de instrução, opcode, campos de registradores, imediato, endereço, tipos de instrução, instruções aritméticas/lógicas, acesso à memória, desvios, modos de endereçamento e leitura de instruções em assembly  
**Aula na sequência:** 26  
**Objetivo:** entender como uma instrução é organizada em campos, quais tipos de instrução aparecem em uma arquitetura e como os modos de endereçamento indicam onde estão os operandos.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 25, você viu a ponte:

```text
algoritmo
-> assembly
-> instrução de máquina
-> hardware
```

Agora vamos abrir a instrução por dentro.

Na aula anterior, aparecia algo assim:

```text
ADD R1, R2, R3
```

Leitura:

```text
R1 = R2 + R3
```

Mas para o processador executar isso, a instrução precisa virar bits.

Esses bits precisam dizer:

```text
qual operação fazer?
quais registradores usar?
existe constante imediata?
existe endereço de memória?
é uma instrução de desvio?
```

Essa aula responde exatamente isso.

---

# 2. Ideia Central

Uma instrução é um comando entendido pelo processador.

Em assembly, ela é escrita de forma legível:

```text
ADD R1, R2, R3
```

Em código de máquina, ela vira uma sequência de bits.

Exemplo conceitual:

```text
opcode | rd | rs1 | rs2
```

Onde:

```text
opcode -> operação
rd     -> registrador destino
rs1    -> registrador fonte 1
rs2    -> registrador fonte 2
```

Então:

```text
instrução = opcode + campos de operandos/controle
```

O processador lê esses campos e configura o datapath.

---

# 3. O Que É Opcode?

`Opcode` significa:

```text
operation code
```

Ou:

```text
código da operação
```

É o campo da instrução que diz o que a CPU deve fazer.

Exemplos:

```text
ADD  -> somar
SUB  -> subtrair
AND  -> AND bit a bit
OR   -> OR bit a bit
LOAD -> ler memória
STORE -> escrever memória
BEQ  -> desviar se igual
JUMP -> salto incondicional
```

Em máquina real, cada operação tem um código binário.

Exemplo didático:

```text
0000 -> ADD
0001 -> SUB
0010 -> AND
0011 -> OR
0100 -> LOAD
0101 -> STORE
0110 -> BEQ
0111 -> JUMP
```

Não precisa decorar códigos de uma arquitetura específica.

Precisa entender:

```text
opcode identifica a operação
```

---

# 4. Campos Comuns De Uma Instrução

Uma instrução pode ter campos como:

```text
opcode
registrador destino
registrador fonte
imediato
endereço
deslocamento
código de função
```

## 4.1 Registrador destino

É onde o resultado será gravado.

Exemplo:

```text
ADD R1, R2, R3
```

Destino:

```text
R1
```

## 4.2 Registradores fonte

São os registradores lidos como entrada.

Exemplo:

```text
ADD R1, R2, R3
```

Fontes:

```text
R2
R3
```

## 4.3 Imediato

Imediato é uma constante dentro da própria instrução.

Exemplo:

```text
ADDI R1, R2, 5
```

Leitura:

```text
R1 = R2 + 5
```

O `5` não vem de registrador nem da memória.

Ele está codificado na instrução.

## 4.4 Endereço ou deslocamento

Instruções de memória e desvio podem carregar um campo de endereço ou deslocamento.

Exemplo:

```text
LOAD R1, [R2 + 8]
```

Aqui:

```text
R2 -> registrador base
8  -> deslocamento
```

Endereço efetivo:

```text
R2 + 8
```

---

# 5. Formato De Instrução

Formato de instrução é o jeito como os bits da instrução são divididos.

Exemplo didático de 16 bits:

```text
bits:   15..12  11..8  7..4  3..0
campo: opcode   rd     rs1   rs2
```

Isso significa:

```text
4 bits para opcode
4 bits para registrador destino
4 bits para fonte 1
4 bits para fonte 2
```

Se o opcode tem 4 bits, pode representar:

```text
2^4 = 16 operações diferentes
```

Se o campo de registrador tem 4 bits, pode selecionar:

```text
2^4 = 16 registradores
```

Essa lógica de `2^n` volta muito.

---

# 6. Por Que Existem Vários Formatos?

Nem toda instrução precisa dos mesmos campos.

Compare:

```text
ADD R1, R2, R3
```

Precisa de:

```text
opcode
rd
rs1
rs2
```

Agora:

```text
ADDI R1, R2, 10
```

Precisa de:

```text
opcode
rd
rs1
imediato
```

Agora:

```text
JUMP alvo
```

Precisa de:

```text
opcode
endereço ou deslocamento
```

Por isso arquiteturas costumam ter formatos diferentes.

---

# 7. Formato Tipo R

Formato tipo R é usado para operações entre registradores.

Pense em `R` como:

```text
register
```

Exemplos:

```text
ADD R1, R2, R3
SUB R4, R5, R6
AND R7, R8, R9
OR  R1, R1, R2
```

Estrutura conceitual:

```text
opcode | rd | rs1 | rs2
```

Leitura:

```text
rd = rs1 operação rs2
```

Exemplo:

```text
ADD R1, R2, R3
```

Campos:

```text
opcode = ADD
rd     = R1
rs1    = R2
rs2    = R3
```

Resultado:

```text
R1 = R2 + R3
```

---

# 8. Formato Tipo I

Formato tipo I é usado para instruções com imediato.

Pense em `I` como:

```text
immediate
```

Exemplos:

```text
ADDI R1, R2, 5
ANDI R3, R4, 15
LOAD R1, [R2 + 8]
```

Estrutura conceitual:

```text
opcode | rd | rs1 | imediato
```

No caso de memória:

```text
opcode | registrador dado | registrador base | deslocamento
```

Exemplo:

```text
ADDI R1, R2, 5
```

Campos:

```text
opcode   = ADDI
rd       = R1
rs1      = R2
imediato = 5
```

Resultado:

```text
R1 = R2 + 5
```

---

# 9. Formato Tipo J Ou Desvio

Formato tipo J é usado para saltos.

Pense em `J` como:

```text
jump
```

Exemplo:

```text
JUMP alvo
```

Estrutura conceitual:

```text
opcode | endereço
```

Ou:

```text
opcode | deslocamento
```

Depende da arquitetura.

Em vez de produzir resultado na ULA para salvar em registrador, o objetivo é mudar o fluxo:

```text
PC = novo endereço
```

`PC` significa:

```text
program counter
```

É o registrador que guarda o endereço da próxima instrução.

---

# 10. Instruções De 3, 2, 1 E 0 Endereços

Esse é um jeito clássico de classificar instruções pelo número de operandos explícitos.

## 10.1 Instrução de 3 endereços

Exemplo:

```text
ADD R1, R2, R3
```

Leitura:

```text
R1 = R2 + R3
```

Três endereços/operandos:

```text
destino
fonte 1
fonte 2
```

Vantagem:

```text
clara
não destrói operandos fonte
```

## 10.2 Instrução de 2 endereços

Exemplo:

```text
ADD R1, R2
```

Leitura comum:

```text
R1 = R1 + R2
```

Um operando também é destino.

Vantagem:

```text
instrução menor
```

Desvantagem:

```text
sobrescreve um dos operandos
```

## 10.3 Instrução de 1 endereço

Exemplo conceitual com acumulador:

```text
ADD X
```

Leitura:

```text
ACC = ACC + M[X]
```

`ACC` é acumulador.

Um operando fica implícito.

## 10.4 Instrução de 0 endereços

Usada em máquinas de pilha.

Exemplo:

```text
ADD
```

Leitura:

```text
retira dois valores do topo da pilha
soma
empilha o resultado
```

Resumo:

| Tipo | Exemplo | Ideia |
|---|---|---|
| 3 endereços | `ADD R1,R2,R3` | destino separado das fontes |
| 2 endereços | `ADD R1,R2` | destino também é fonte |
| 1 endereço | `ADD X` | usa acumulador implícito |
| 0 endereços | `ADD` | usa pilha |

---

# 11. Tipos De Instrução

Uma ISA normalmente possui grupos de instruções.

ISA significa:

```text
Instruction Set Architecture
```

Ou:

```text
arquitetura do conjunto de instruções
```

Principais grupos:

```text
aritméticas
lógicas
deslocamento
transferência de dados
controle de fluxo
comparação/teste
entrada/saída, em algumas arquiteturas
```

---

# 12. Instruções Aritméticas

Executam operações numéricas.

Exemplos:

```text
ADD
SUB
MUL
DIV
ADDI
```

Exemplo:

```text
ADD R1, R2, R3
```

Leitura:

```text
R1 = R2 + R3
```

Exemplo com imediato:

```text
ADDI R1, R1, 1
```

Leitura:

```text
R1 = R1 + 1
```

Isso é muito comum para incrementar contadores.

---

# 13. Instruções Lógicas

Executam operações bit a bit.

Exemplos:

```text
AND
OR
XOR
NOT
ANDI
ORI
```

Exemplo:

```text
AND R1, R2, R3
```

Leitura:

```text
R1 = R2 AND R3
```

Operação bit a bit:

```text
R2 = 1100
R3 = 1010
AND = 1000
```

Então:

```text
R1 = 1000
```

Usos comuns:

```text
máscaras de bits
limpar bits
testar bits
combinar flags
```

---

# 14. Instruções De Deslocamento

Deslocam bits para esquerda ou direita.

Exemplos:

```text
SHL
SHR
SAR
SLL
SRL
```

Nomes variam por arquitetura.

Ideias:

```text
shift left  -> desloca para esquerda
shift right lógico -> desloca para direita inserindo 0
shift right aritmético -> preserva bit de sinal
```

Exemplo:

```text
0011 << 1 = 0110
```

Isso equivale a:

```text
3 * 2 = 6
```

Mas só quando não ocorre overflow e a interpretação permite.

---

# 15. Instruções De Transferência De Dados

Movem dados entre registradores e memória.

Exemplos:

```text
LOAD
STORE
MOV
PUSH
POP
```

## 15.1 LOAD

Carrega dado da memória para registrador.

```text
LOAD R1, [R2 + 8]
```

Leitura:

```text
R1 = Mem[R2 + 8]
```

## 15.2 STORE

Grava dado de registrador na memória.

```text
STORE [R2 + 8], R1
```

Leitura:

```text
Mem[R2 + 8] = R1
```

Pegadinha:

```text
LOAD lê memória
STORE escreve memória
```

---

# 16. Instruções De Controle De Fluxo

Alteram a próxima instrução executada.

Exemplos:

```text
JUMP
BEQ
BNE
BLT
BGT
CALL
RET
```

## 16.1 Jump

Salto incondicional.

```text
JUMP loop
```

Leitura:

```text
vá para loop
```

## 16.2 Branch condicional

Desvia apenas se uma condição for satisfeita.

Exemplo:

```text
BEQ R1, R2, alvo
```

Leitura:

```text
se R1 == R2, vá para alvo
```

Se a condição for falsa:

```text
continua na próxima instrução
```

---

# 17. Comparação E Flags

Algumas arquiteturas possuem instrução `CMP`.

Exemplo:

```text
CMP R1, R2
```

Ela pode fazer uma subtração interna:

```text
R1 - R2
```

Mas sem guardar o resultado em registrador.

Ela atualiza flags:

```text
Z -> zero
N -> negativo
C -> carry
V -> overflow
```

Depois, uma instrução de desvio usa essas flags.

Exemplo:

```text
CMP R1, R2
BEQ igual
```

Leitura:

```text
compare R1 e R2
se forem iguais, desvie para igual
```

Em arquiteturas RISC, a comparação pode aparecer direto no branch:

```text
BEQ R1, R2, igual
```

Ou seja:

```text
compare e desvie na mesma instrução
```

---

# 18. Load-Store Vs Memória-Memória

Algumas arquiteturas são do tipo load-store.

Nelas, operações aritméticas usam registradores.

Exemplo:

```text
LOAD R1, [A]
LOAD R2, [B]
ADD R3, R1, R2
STORE [C], R3
```

Ideia:

```text
memória só é acessada por LOAD/STORE
ULA trabalha com registradores
```

Outras arquiteturas permitem operações diretamente com memória.

Exemplo conceitual:

```text
ADD [C], [A], [B]
```

Mas isso costuma exigir instruções mais complexas.

Resumo:

```text
load-store -> simples, comum em RISC
memória-memória -> mais complexa, comum em ideias CISC antigas/conceituais
```

Para prova introdutória:

```text
registradores são rápidos
memória é mais lenta
```

---

# 19. Modos De Endereçamento

Modo de endereçamento é a forma como a instrução indica onde está o operando.

Pergunta central:

```text
o dado está onde?
```

Possíveis respostas:

```text
dentro da instrução
em um registrador
em um endereço fixo de memória
em um endereço guardado em registrador
em base + deslocamento
perto do PC
no topo da pilha
```

---

# 20. Endereçamento Imediato

O operando está dentro da própria instrução.

Exemplo:

```text
ADDI R1, R2, 10
```

O `10` é imediato.

Leitura:

```text
R1 = R2 + 10
```

Vantagem:

```text
não precisa buscar o operando na memória
```

Limitação:

```text
o valor precisa caber no campo imediato
```

Exemplo de prova:

Se o imediato tem 8 bits sem sinal, ele representa:

```text
0 até 255
```

Se o imediato tem 8 bits com sinal em complemento de 2:

```text
-128 até 127
```

---

# 21. Endereçamento Por Registrador

O operando está em um registrador.

Exemplo:

```text
ADD R1, R2, R3
```

Operandos:

```text
R2
R3
```

Resultado:

```text
R1
```

Vantagem:

```text
rápido
campo pequeno
```

Por quê?

Se há 32 registradores, bastam:

```text
5 bits
```

Porque:

```text
2^5 = 32
```

---

# 22. Endereçamento Direto Ou Absoluto

A instrução contém diretamente o endereço de memória.

Exemplo:

```text
LOAD R1, [1000]
```

Leitura:

```text
R1 = Mem[1000]
```

O endereço efetivo é:

```text
1000
```

Vantagem:

```text
simples de entender
```

Limitação:

```text
campo de endereço pode precisar ser grande
```

---

# 23. Endereçamento Indireto Por Registrador

O registrador guarda o endereço da memória.

Exemplo:

```text
LOAD R1, [R2]
```

Leitura:

```text
R1 = Mem[R2]
```

Se:

```text
R2 = 1000
Mem[1000] = 55
```

Então:

```text
R1 = 55
```

Pegadinha:

```text
R2 não é o dado
R2 é o endereço do dado
```

---

# 24. Endereçamento Base + Deslocamento

Também chamado de:

```text
base + offset
base + deslocamento
base displacement
```

Exemplo:

```text
LOAD R1, [R2 + 8]
```

Endereço efetivo:

```text
R2 + 8
```

Se:

```text
R2 = 1000
```

Então:

```text
endereço efetivo = 1008
```

Leitura:

```text
R1 = Mem[1008]
```

Uso comum:

```text
acessar campos de estruturas
acessar variáveis locais na pilha
acessar elementos próximos de um endereço base
```

---

# 25. Endereçamento Indexado

Usa um registrador como índice.

Exemplo conceitual:

```text
LOAD R1, [BASE + Ri]
```

Ou:

```text
LOAD R1, [Rbase + Rindex]
```

Ideia:

```text
endereço efetivo = base + índice
```

Muito usado para vetores.

Exemplo:

```text
vetor[i]
```

Pode virar:

```text
endereço = base_do_vetor + i * tamanho_do_elemento
```

Se cada elemento tem 4 bytes:

```text
endereço = base + 4.i
```

Algumas arquiteturas permitem escala no modo de endereçamento.

Exemplo conceitual:

```text
[Rbase + Rindex*4]
```

---

# 26. Endereçamento Relativo Ao PC

PC é o registrador da próxima instrução.

Endereçamento relativo ao PC usa:

```text
PC + deslocamento
```

Muito comum em branches.

Exemplo:

```text
BEQ R1, R2, +12
```

Leitura:

```text
se R1 == R2, PC = PC + 12
```

Vantagem:

```text
código pode ser deslocado na memória com mais facilidade
```

Também economiza bits:

```text
em vez de guardar endereço completo,
guarda apenas distância até o alvo
```

---

# 27. Endereçamento Implícito

O operando não aparece explicitamente.

Exemplo:

```text
CLR C
```

Pode limpar uma flag de carry, dependendo da arquitetura.

Outro exemplo:

```text
RET
```

Pode usar implicitamente:

```text
endereço salvo na pilha
```

Em máquinas com acumulador:

```text
ADD X
```

pode significar:

```text
ACC = ACC + Mem[X]
```

O acumulador está implícito.

---

# 28. Endereçamento Por Pilha

Usa o topo da pilha como local implícito de operandos.

Exemplo:

```text
PUSH R1
PUSH R2
ADD
POP R3
```

Leitura:

```text
empilha R1
empilha R2
ADD soma os dois valores do topo
POP salva resultado em R3
```

Muito usado em:

```text
chamadas de função
retornos
salvar registradores
variáveis locais
```

---

# 29. Como Calcular Bits De Campos

Essa parte cai bastante.

## 29.1 Bits para registradores

Se existem `N` registradores, precisa de:

```text
log2(N) bits
```

Exemplos:

```text
8 registradores  -> 3 bits
16 registradores -> 4 bits
32 registradores -> 5 bits
64 registradores -> 6 bits
```

## 29.2 Bits para opcode

Se há `M` operações diferentes, precisa de bits suficientes para representar `M` códigos.

Exemplos:

```text
8 operações  -> 3 bits
16 operações -> 4 bits
20 operações -> 5 bits, pois 4 bits só dão 16 códigos
```

## 29.3 Bits para imediato

Se o imediato tem `k` bits sem sinal:

```text
0 até 2^k - 1
```

Se o imediato tem `k` bits com sinal em complemento de 2:

```text
-2^(k-1) até 2^(k-1)-1
```

Exemplo:

```text
imediato de 12 bits com sinal
```

Intervalo:

```text
-2048 até 2047
```

---

# 30. Exemplo Completo De Formato

Suponha uma instrução de 16 bits:

```text
opcode | rd | rs1 | rs2
4 bits | 4b | 4b  | 4b
```

Perguntas:

1. Quantas operações diferentes cabem no opcode?
2. Quantos registradores podem ser endereçados?
3. Esse formato serve bem para imediato?

Respostas:

1. Opcode de 4 bits:

```text
2^4 = 16 operações
```

2. Campo de registrador de 4 bits:

```text
2^4 = 16 registradores
```

3. Não diretamente, porque os campos estão reservados para registradores.

Para imediato, seria necessário outro formato:

```text
opcode | rd | rs1 | imediato
4 bits | 4b | 4b  | 4b
```

Nesse caso, o imediato teria apenas 4 bits.

---

# 31. Exemplo De Rastreio

Considere:

```text
R1 = 10
R2 = 20
Mem[108] = 7
```

Instruções:

```text
ADDI R3, R1, 5
LOAD R4, [R1 + 98]
ADD R5, R3, R4
```

Passo 1:

```text
ADDI R3, R1, 5
R3 = 10 + 5 = 15
```

Passo 2:

```text
LOAD R4, [R1 + 98]
endereço = 10 + 98 = 108
R4 = Mem[108] = 7
```

Passo 3:

```text
ADD R5, R3, R4
R5 = 15 + 7 = 22
```

Resultado final:

```text
R3 = 15
R4 = 7
R5 = 22
```

---

# 32. Como Questões Costumam Cobrar

As questões podem pedir:

```text
identificar opcode
identificar registrador destino
identificar registradores fonte
calcular quantidade de operações possíveis
calcular quantidade de registradores
identificar modo de endereçamento
calcular endereço efetivo
rastrear valores de registradores
diferenciar LOAD de STORE
diferenciar branch de jump
```

Exemplo de enunciado:

```text
Em LOAD R1, [R2 + 12], qual é o modo de endereçamento?
```

Resposta:

```text
base + deslocamento
```

Outro:

```text
Se R2=100, qual endereço é acessado?
```

Resposta:

```text
112
```

---

# 33. Erros Comuns

## 33.1 Confundir imediato com endereço

Em:

```text
ADDI R1, R2, 10
```

`10` é valor.

Em:

```text
LOAD R1, [10]
```

`10` é endereço.

## 33.2 Confundir registrador com memória

Em:

```text
ADD R1, R2, R3
```

`R2` é o valor no registrador.

Em:

```text
LOAD R1, [R2]
```

`R2` é endereço.

## 33.3 Confundir destino em STORE

Em:

```text
STORE [R2 + 8], R1
```

O destino é a memória.

O valor vem de:

```text
R1
```

## 33.4 Achar que toda instrução acessa memória

Não.

Em arquitetura load-store, normalmente:

```text
ADD, SUB, AND -> registradores
LOAD, STORE  -> memória
```

## 33.5 Esquecer que branch muda o PC

Branch e jump não salvam resultado em registrador comum.

Eles alteram:

```text
PC
```

---

# 34. Exercícios

## 34.1 Conceituais

1. O que é opcode?

2. Qual é a diferença entre registrador fonte e registrador destino?

3. O que é imediato?

4. O que é formato de instrução?

5. Por que uma arquitetura pode ter mais de um formato de instrução?

6. O que caracteriza uma instrução tipo R?

7. O que caracteriza uma instrução tipo I?

8. O que faz uma instrução de desvio?

9. Qual é a diferença entre `LOAD` e `STORE`?

10. O que é modo de endereçamento?

11. Qual é a diferença entre endereçamento imediato e direto?

12. Qual é a diferença entre endereçamento por registrador e indireto por registrador?

13. O que é endereçamento base + deslocamento?

14. Por que PC-relative é útil em branches?

15. O que significa uma arquitetura load-store?

## 34.2 Cálculos

16. Um campo de opcode tem 5 bits. Quantas operações diferentes ele pode codificar?

17. Uma CPU tem 32 registradores. Quantos bits são necessários para selecionar um registrador?

18. Uma CPU tem 20 registradores. Quantos bits são necessários no campo de registrador?

19. Um imediato sem sinal tem 8 bits. Qual o intervalo de valores?

20. Um imediato com sinal em complemento de 2 tem 8 bits. Qual o intervalo?

21. Um formato tem 16 bits: `opcode` de 4 bits e três campos de registrador do mesmo tamanho. Quantos bits sobram para cada registrador?

22. Um formato de 32 bits usa `opcode` de 6 bits, `rd` de 5 bits e `rs1` de 5 bits. Quantos bits sobram para imediato?

23. Em `LOAD R1, [R2 + 12]`, se `R2=1000`, qual endereço é acessado?

24. Em `BEQ R1, R2, +16`, se a condição for verdadeira, o PC vai para onde em termos conceituais?

25. Uma LUT de Aula 24 tem 5 entradas. Quantas posições ela tem? Por que essa ideia lembra campo de endereço?

## 34.3 Múltipla escolha

26. Em `ADDI R1, R2, 7`, o valor `7` é:

   A) opcode.

   B) registrador destino.

   C) imediato.

   D) endereço absoluto obrigatoriamente.

27. Em `LOAD R3, [R4]`, o modo de endereçamento é:

   A) imediato.

   B) por registrador para operação aritmética.

   C) indireto por registrador.

   D) implícito.

28. Em `LOAD R1, [R2 + 8]`, o endereço efetivo é:

   A) `R1 + 8`.

   B) `R2 + 8`.

   C) `R1 + R2`.

   D) `8`.

29. Uma instrução tipo R normalmente usa:

   A) apenas opcode e endereço longo.

   B) registradores como operandos.

   C) apenas pilha.

   D) apenas imediato.

30. Em arquitetura load-store:

   A) toda instrução acessa memória.

   B) a ULA opera diretamente sobre dois endereços de memória.

   C) LOAD/STORE acessam memória e operações aritméticas usam registradores.

   D) não existem registradores.

31. Uma instrução de branch altera principalmente:

   A) o PC.

   B) a tensão de alimentação.

   C) a quantidade de registradores.

   D) o tamanho da memória.

32. Se um campo tem `n` bits, ele pode representar:

   A) `n` valores.

   B) `2n` valores.

   C) `2^n` valores.

   D) `n^2` valores.

## 34.4 Rastreio

Considere:

```text
R1 = 4
R2 = 10
Mem[14] = 99
```

Instruções:

```text
ADD R3, R1, R2
LOAD R4, [R3]
ADDI R5, R4, 1
```

33. Qual o valor final de `R3`?

34. Qual o valor final de `R4`?

35. Qual o valor final de `R5`?

---

# 35. Gabarito

1. É o código da operação, o campo que diz qual ação a CPU deve executar.

2. Fonte é lido como entrada; destino recebe o resultado.

3. É uma constante codificada dentro da própria instrução.

4. É a divisão dos bits da instrução em campos como opcode, registradores, imediato e endereço.

5. Porque instruções diferentes precisam de campos diferentes: algumas usam registradores, outras imediato, outras endereço/desvio.

6. Usa registradores como operandos principais, normalmente `opcode | rd | rs1 | rs2`.

7. Usa campo imediato, normalmente `opcode | rd | rs1 | imediato`.

8. Altera o fluxo de execução, mudando o PC quando a condição ou salto ocorre.

9. `LOAD` lê da memória para registrador; `STORE` escreve de registrador para memória.

10. É a forma como a instrução indica onde está o operando.

11. Imediato é valor dentro da instrução; direto é endereço de memória dentro da instrução.

12. Por registrador usa o valor do registrador como operando; indireto usa o registrador como endereço de memória.

13. O endereço efetivo é calculado como registrador base + constante/deslocamento.

14. Porque permite representar o alvo como distância em relação ao PC, economizando bits e facilitando código relocável.

15. Significa que a memória é acessada por LOAD/STORE, enquanto operações aritméticas/lógicas usam registradores.

16. `2^5 = 32` operações.

17. `5 bits`, pois `2^5 = 32`.

18. `5 bits`, pois `4 bits` dão só 16 e `5 bits` dão 32.

19. `0` até `255`.

20. `-128` até `127`.

21. Sobram `12 bits` para três campos, então `4 bits` por registrador.

22. `32 - 6 - 5 - 5 = 16 bits`.

23. `1000 + 12 = 1012`.

24. Conceitualmente, `PC = PC + 16`, se a arquitetura usar esse deslocamento diretamente.

25. `2^5 = 32` posições. Lembra campo de endereço porque as entradas selecionam uma das posições.

26. C.

27. C.

28. B.

29. B.

30. C.

31. A.

32. C.

33. `R3 = R1 + R2 = 4 + 10 = 14`.

34. `R4 = Mem[R3] = Mem[14] = 99`.

35. `R5 = R4 + 1 = 99 + 1 = 100`.

---

# 36. O Que Memorizar

Memorize:

```text
opcode -> operação
rd     -> destino
rs     -> fonte
imm    -> constante dentro da instrução
```

Memorize os formatos:

```text
tipo R -> registradores
tipo I -> imediato ou deslocamento
tipo J -> salto/desvio
```

Memorize os modos:

```text
imediato              -> valor na instrução
registrador           -> valor no registrador
direto/absoluto       -> endereço na instrução
indireto por registrador -> registrador guarda endereço
base + deslocamento   -> endereço = base + offset
PC-relative           -> endereço = PC + offset
implícito             -> operando subentendido
pilha                 -> topo da pilha
```

Memorize os cálculos:

```text
n bits -> 2^n códigos
32 registradores -> 5 bits
imediato com sinal de k bits -> -2^(k-1) até 2^(k-1)-1
```

Memorize a pegadinha:

```text
LOAD R1, [R2] usa R2 como endereço
ADD R1, R2, R3 usa R2 como valor
```

---

# 37. Plano De Estudo Para Esta Aula

Tempo sugerido: **45 a 70 minutos**.

## 37.1 Primeira passada

Leia com foco em:

```text
opcode
registradores fonte/destino
imediato
LOAD/STORE
branch/jump
modos de endereçamento
```

## 37.2 Segunda passada

Refaça sem olhar:

```text
tipo R, tipo I, tipo J
diferença entre imediato e direto
diferença entre registrador e indireto por registrador
base + deslocamento
PC-relative
```

## 37.3 Exercícios prioritários

Se tiver pouco tempo, faça:

```text
16, 17, 18, 19, 20, 22, 23, 26, 27, 28, 30, 31, 33, 34 e 35
```

Eles cobrem o núcleo com maior chance de cair.

---

# 38. Conexão Com A Próxima Aula

Nesta aula, você aprendeu a ler uma instrução por dentro:

```text
opcode
registradores
imediato
endereço
modo de endereçamento
```

A próxima aula entra em:

```text
datapath e controle
```

Conexão direta:

```text
os campos da instrução controlam o datapath
```

Exemplo:

```text
opcode ADD -> controle manda ULA somar
rd -> banco de registradores sabe onde escrever
rs1/rs2 -> banco de registradores sabe o que ler
LOAD -> controle ativa leitura da memória
STORE -> controle ativa escrita da memória
BEQ -> controle decide se PC muda
```

Ou seja:

```text
Aula 26 = como a instrução é escrita/codificada
Aula 27 = como o hardware executa essa instrução
```
