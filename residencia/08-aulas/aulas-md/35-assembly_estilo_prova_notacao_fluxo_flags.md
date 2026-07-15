# Aula Detalhada - Assembly Em Estilo De Prova, Notação, Fluxo E Flags

**Tema do dia:** assembly em estilo de prova, registradores, imediatos, labels, endereço efetivo, `LDR`/`STR`, shifts, flags, branches signed e unsigned, chamadas, `SP`, pilha, `BL`/`LR`, endianness e alinhamento
**Aula na sequência:** 35  
**Objetivo:** aprender a ler e rastrear trechos de assembly inspirados em ARM/RISC, calcular endereços e valores de memória, distinguir comparações signed/unsigned e acompanhar laços, pilha e chamadas aninhadas sem precisar decorar uma ISA inteira.

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

## 2.1 Convenções Usadas Nesta Aula

Os exemplos usam uma notação **ARM-like didática**:

```text
primeiro operando após ADD/SUB/MOV = destino
#n = constante imediata
[Rbase, ...] = acesso à memória no endereço calculado
memória é endereçada por byte
word = 32 bits = 4 bytes
pilha cresce para endereços menores nos exemplos
R0 a R3 = argumentos/temporários; R0 = retorno
R4 a R11 = preservados pela função chamada, se usados
```

Essas escolhas permitem resolver as questões, mas não constituem um manual completo de ARM. Se o enunciado definir outra sintaxe, outra largura ou outra convenção, a definição do enunciado prevalece.

## 2.2 Método De Tradução

Traduza cada instrução para uma atribuição ou decisão simples:

| Assembly | Tradução |
|---|---|
| `ADD R0, R1, R2` | `R0 = R1 + R2` |
| `CMP R0, R1` | calcula conceitualmente `R0-R1` e guarda flags |
| `LDR R3, [R4, #8]` | `R3 = Mem32[R4+8]` |
| `STR R3, [R4, R1, LSL #2]` | `Mem32[R4+(R1×4)] = R3` |
| `BNE loop` | se `Z=0`, `PC = endereço(loop)` |

Sempre separe três coisas:

```text
valor do registrador
endereço efetivo
conteúdo da memória nesse endereço
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

Em subtração, no modelo ARM-like adotado nesta aula:

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

## 13.5 Uma Mesma Palavra Pode Ser Signed Ou Unsigned

Os bits não carregam uma etiqueta dizendo "signed" ou "unsigned". A interpretação vem da instrução e da pergunta.

Em 32 bits:

```text
0xFFFFFFFF como unsigned = 4.294.967.295
0xFFFFFFFF como signed   = -1
```

Por isso, depois do mesmo `CMP`, podem existir duas conclusões corretas diferentes:

```text
comparação signed   -> usa N e V
comparação unsigned -> usa C e Z
```

## 13.6 Condições Signed

Depois de `CMP A, B`, isto é, das flags de `A-B`:

| Relação signed | Branch ARM-like | Condição nas flags |
|---|---|---|
| `A == B` | `BEQ` | `Z=1` |
| `A != B` | `BNE` | `Z=0` |
| `A < B` | `BLT` | `N != V` |
| `A >= B` | `BGE` | `N = V` |
| `A > B` | `BGT` | `Z=0` e `N=V` |
| `A <= B` | `BLE` | `Z=1` ou `N!=V` |

Por que `BLT` não testa somente `N`? Porque uma subtração signed pode sofrer overflow. `V` corrige a interpretação do sinal do resultado.

## 13.7 Condições Unsigned

Em subtração ARM-like, lembre:

```text
C=1 -> não houve borrow
C=0 -> houve borrow
```

Assim:

| Relação unsigned | Branch ARM-like | Sinônimo comum | Condição |
|---|---|---|---|
| `A < B` | `BLO` | `BCC` | `C=0` |
| `A >= B` | `BHS` | `BCS` | `C=1` |
| `A > B` | `BHI` | — | `C=1` e `Z=0` |
| `A <= B` | `BLS` | — | `C=0` ou `Z=1` |

`LO/HS` significam *lower/higher or same*. Não use `BLT/BGE` para comparar unsigned se valores com MSB 1 forem possíveis.

## 13.8 Exemplo Que Separa As Duas Interpretações

```asm
MOV R0, #0xFFFFFFFF
MOV R1, #1
CMP R0, R1
```

Resultado conceitual em 32 bits:

```text
0xFFFFFFFF - 0x00000001 = 0xFFFFFFFE
Z=0, N=1, C=1, V=0
```

Interpretação signed:

```text
-1 < 1
BLT seria tomado porque N != V
```

Interpretação unsigned:

```text
4.294.967.295 > 1
BHI seria tomado porque C=1 e Z=0
```

Não há contradição: os mesmos bits foram interpretados de duas maneiras.

## 13.9 Exemplo De Overflow Que Mostra O Papel De `V`

Em 8 bits, compare `A=-128` com `B=1`:

```text
A = 1000 0000
B = 0000 0001
A-B = 0111 1111, com overflow signed
N=0, V=1
```

O resultado armazenado parece positivo, mas `N != V`; portanto `BLT` reconhece corretamente que `-128 < 1`.

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

## 17.1 `SP` E A Pilha

`SP` é o **stack pointer**. Ele aponta para o topo da pilha, uma região de memória usada para salvar temporariamente:

```text
registradores
endereço de retorno
variáveis locais
argumentos que não couberam nos registradores
```

Nos exemplos desta aula, a pilha cresce para endereços menores e cada registrador possui quatro bytes.

```asm
PUSH {R4, LR}
```

significa conceitualmente:

```text
reserve 8 bytes na pilha
salve R4 e LR
SP diminui 8
```

```asm
POP {R4, LR}
```

significa:

```text
restaure R4 e LR
libere 8 bytes
SP aumenta 8
```

Exemplo:

| Evento | `SP` |
|---|---:|
| inicial | `0x2000` |
| `PUSH {R4, LR}` | `0x1FF8` |
| `POP {R4, LR}` | `0x2000` |

Um `PUSH` sem o `POP` correspondente pode deixar `SP` incorreto; um `POP` com conjunto diferente pode restaurar valores errados.

## 17.2 Argumentos, Retorno E Preservação

Convenção didática desta aula:

```text
R0 a R3  -> argumentos; R0 também carrega o resultado
R0 a R3  -> caller-saved
R4 a R11 -> callee-saved
LR       -> endereço de retorno
```

Exemplo de função folha:

```asm
; recebe a e b em R0 e R1; devolve a+b em R0
soma:
  ADD R0, R0, R1
  BX  LR
```

Se o chamador precisa manter o valor antigo de `R1`, deve salvá-lo antes da chamada, pois `R1` é caller-saved nesse modelo.

Se `soma` usasse `R4`, deveria preservar o valor antigo de `R4`, pois `R4` é callee-saved.

## 17.3 Chamada Aninhada: O Problema De `LR`

```asm
principal:
  MOV R0, #5
  BL  triplo
depois:
  ; R0 deve ser 15

triplo:
  PUSH {R4, LR}
  MOV  R4, R0
  BL   dobro
  ADD  R0, R0, R4
  POP  {R4, LR}
  BX   LR

dobro:
  ADD R0, R0, R0
  BX  LR
```

Rastreio:

| Passo | `R0` | `R4` | `LR` representa | Situação da pilha neste trecho |
|---|---:|---:|---|---|
| `BL triplo` | 5 | antigo | endereço `depois` | ainda sem quadro de `triplo` |
| `PUSH`/`MOV` | 5 | 5 | endereço `depois`, também salvo | guarda `R4` e retorno externo |
| `BL dobro` | 5 | 5 | instrução `ADD` de `triplo` | retorno externo continua salvo |
| `BX LR` de `dobro` | 10 | 5 | volta ao `ADD` | inalterada |
| `ADD` | 15 | 5 | retorno interno | inalterada |
| `POP` | 15 | antigo | endereço `depois` | quadro de `triplo` removido |
| `BX LR` de `triplo` | 15 | antigo | volta a `principal` | inalterada pelo retorno |

Por que o `PUSH` de `LR` é indispensável aqui?

```text
o BL dobro substitui LR
sem a cópia na pilha, triplo perde o retorno para principal
```

## 17.4 Erro Clássico Sem Salvar `LR`

Código incorreto:

```asm
dobro_mais_um_errado:
  BL  dobro
  ADD R0, R0, #1
  BX  LR
```

Após `BL dobro`, `LR` aponta para o `ADD`. O `BX LR` final pode voltar para o próprio `ADD`, repetindo o trecho em vez de retornar ao chamador. A solução é preservar e restaurar o `LR` externo. O exemplo usa apenas `R0` justamente para isolar esse erro, sem introduzir também uma violação de registrador callee-saved.

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

## 19.1 A Largura Do Acesso Importa

Uma notação comum distingue:

```text
LDR/STR   -> word, neste material 32 bits
LDRB/STRB -> byte, 8 bits
LDRH/STRH -> halfword, 16 bits
```

Se `R1=0x12345678`, então uma escrita de byte guarda somente os oito bits menos significativos:

```asm
STRB R1, [R2]   ; grava 0x78 em um byte
```

Uma leitura unsigned de byte normalmente completa o registrador com zeros:

```text
Mem8[R2] = 0xFE
LDRB R1, [R2] -> R1 = 0x000000FE
```

Algumas arquiteturas possuem loads com extensão de sinal. Não presuma extensão de sinal se a instrução ou o enunciado não a indicar.

## 19.2 `LDR` Altera O Destino; `STR` Não Consome O Valor

```asm
LDR R1, [R2]
```

substitui o valor anterior de `R1`.

```asm
STR R1, [R2]
```

grava uma cópia de `R1` na memória; normalmente `R1` permanece com o mesmo valor. "Store" não significa zerar ou mover destrutivamente o registrador.

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

## 21.1 Endereço Efetivo

O endereço realmente apresentado à memória é chamado de **endereço efetivo**, ou `EA`:

```text
EA = base + offset
```

Exemplo:

```text
R2 = 0x2000
Mem32[0x200C] = 99
```

```asm
LDR R1, [R2, #12]
```

Rastreio:

```text
EA = 0x2000 + 12 = 0x200C
R1 = Mem32[0x200C] = 99
R2 continua 0x2000
```

Um offset também pode ser negativo:

```asm
LDR R1, [R2, #-4]
```

Se `R2=0x2000`, então:

```text
EA = 0x1FFC
```

## 21.2 Offset Em Bytes, Não Em Elementos

Em memória endereçada por byte:

```text
[R2, #1]  -> um byte depois da base
[R2, #4]  -> quatro bytes depois da base
```

Para um vetor de words de quatro bytes:

```text
vetor[0] -> base + 0
vetor[1] -> base + 4
vetor[2] -> base + 8
```

O tamanho do elemento determina a escala do índice.

## 21.3 Base + Índice

Se `R4` guarda a base e `R1` guarda um índice já expresso em bytes:

```asm
LDR R3, [R4, R1]
```

significa:

```text
EA = R4 + R1
R3 = Mem32[EA]
```

Se `R1` é índice de elementos de 32 bits, ele precisa ser escalado por quatro:

```asm
LDR R3, [R4, R1, LSL #2]
```

## 21.4 Reconhecendo Atualização Da Base

Algumas notações ARM reais permitem atualizar a base, por exemplo com `!` ou pós-indexação. Em nível de prova, reconheça a diferença:

```asm
LDR R1, [R2, #4]     ; usa R2+4, normalmente não muda R2
LDR R1, [R2, #4]!    ; usa R2+4 e grava o novo endereço em R2
LDR R1, [R2], #4     ; usa R2 atual e depois incrementa R2
```

Só aplique atualização automática se a notação ou o enunciado a indicar. Não presuma que todo acesso com offset muda o registrador-base.

## 21.5 Exemplo Completo De Endereço Indexado

Dados:

```text
R4 = 0x1000
R1 = 3
Mem32[0x100C] = 0x11223344
```

Código:

```asm
LDR R2, [R4, R1, LSL #2]
ADD R2, R2, #1
STR R2, [R4, #16]
```

| Linha | Cálculo/efeito | Resultado |
|---|---|---|
| `LDR` | `EA=0x1000+(3×4)=0x100C` | `R2=0x11223344` |
| `ADD` | `R2=0x11223344+1` | `R2=0x11223345` |
| `STR` | `EA=0x1000+16=0x1010` | `Mem32[0x1010]=0x11223345` |

Ao final:

```text
R4 continua 0x1000
R1 continua 3
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

Uma forma ARM-like equivalente é:

```asm
LDR R3, [R4, R1, LSL #2]
```

O endereço efetivo é:

```text
EA = R4 + (R1 << 2)
```

Os colchetes envolvem o cálculo inteiro do endereço. Primeiro calcule `EA`; só depois leia a memória.

## 22.1 `LSL` - Logical Shift Left

`LSL #n` desloca os bits para a esquerda, descarta os que saem e insere zeros à direita.

Em largura fixa, quando não há descarte de bits significativos:

```text
x LSL n = x × 2^n
```

Exemplo em 8 bits:

```text
0000 0101 LSL 2 = 0001 0100
5 × 4 = 20
```

Mas a equivalência aritmética pode sofrer overflow por causa da largura:

```text
1100 0000 LSL 1 = 1000 0000
```

O bit que saiu não permanece no resultado de 8 bits.

## 22.2 `LSR` - Logical Shift Right

`LSR #n` desloca à direita e insere zeros à esquerda. É a escolha natural para valores **unsigned**.

```text
1111 0000 LSR 2 = 0011 1100 = 60
```

Para unsigned, corresponde à divisão inteira por `2^n`.

## 22.3 `ASR` - Arithmetic Shift Right

`ASR #n` desloca à direita repetindo o bit de sinal à esquerda. Preserva a interpretação negativa em complemento de 2.

Em 8 bits, `1111 0000` representa `-16`:

```text
1111 0000 ASR 2 = 1111 1100 = -4
```

Compare:

```text
1111 0000 LSR 2 = 0011 1100 = 60
1111 0000 ASR 2 = 1111 1100 = -4
```

Pegadinha central:

```text
LSR preenche com zero
ASR replica o bit de sinal
```

Para negativos ímpares, a regra de arredondamento do shift pode diferir de uma divisão signed da linguagem de alto nível. Se a questão cobrar apenas potência de dois e valor divisível, use a interpretação direta; caso contrário, siga a regra explicitada.

## 22.4 Shift Como Parte Do Endereço Não Precisa Alterar O Índice

Em:

```asm
LDR R3, [R4, R1, LSL #2]
```

o deslocamento é usado para formar o endereço. Em geral, nessa forma:

```text
R1 permanece com o índice original
R4 permanece com a base original
R3 recebe o dado da memória
```

Não confunda com uma instrução separada:

```asm
LSL R1, R1, #2
```

Aqui `R1` é realmente substituído por `R1×4`.

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

## 23.1 Endianness Em Nível De Prova

Endianness define a ordem dos bytes de um valor com vários bytes na memória.

Para armazenar a word:

```text
0x12345678 a partir do endereço 0x1000
```

temos:

| Endereço | Little-endian | Big-endian |
|---:|---:|---:|
| `0x1000` | `0x78` | `0x12` |
| `0x1001` | `0x56` | `0x34` |
| `0x1002` | `0x34` | `0x56` |
| `0x1003` | `0x12` | `0x78` |

```text
little-endian -> byte menos significativo no menor endereço
big-endian    -> byte mais significativo no menor endereço
```

Se a mesma arquitetura armazena e depois carrega a word completa corretamente, o registrador volta a conter `0x12345678`. A diferença fica evidente ao inspecionar bytes individuais, trocar dados entre sistemas ou interpretar uma sequência de bytes.

Pegadinha:

```text
endianness não inverte os bits dentro de cada byte
endianness ordena bytes de um valor multibyte
```

## 23.2 Alinhamento Em Nível De Prova

Um dado está naturalmente alinhado quando seu endereço é múltiplo de seu tamanho típico:

```text
word de 4 bytes -> endereços 0x1000, 0x1004, 0x1008...
halfword de 2 bytes -> endereços pares
byte -> qualquer endereço
```

Assim:

```text
LDR word em 0x1004 -> alinhado
LDR word em 0x1002 -> desalinhado para 4 bytes
```

O que ocorre num acesso desalinhado depende da arquitetura:

```text
pode funcionar com custo adicional
pode exigir mais de um acesso
pode gerar exceção/falha
```

Não conclua automaticamente que sempre falha. A conclusão segura é: o endereço não está naturalmente alinhado e o comportamento é dependente da arquitetura.

---

# 24. Branch Com Deslocamento

Alguns branches não guardam o endereço completo.

Eles guardam um deslocamento.

**Exemplo hipotético para treinar a conta:** suponha que o enunciado defina:

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

## 25.6 Passo 6 - Atualize A Memória No Momento Do Acesso

Não adie toda a análise de memória para o fim. Quando um acesso executar, calcule o endereço e atualize o estado imediatamente:

```asm
LDR R1, [R2]       ; consulte Mem[R2] e atualize R1 neste ponto
STR R0, [R3]       ; atualize Mem[R3] neste ponto
```

Se o trecho tiver somente um `STR` no final, como em alguns exemplos desta aula, a gravação naturalmente será o último passo. Em sequências com `LDR` ou stores intermediários, porém, os acessos podem alterar tudo o que vem depois.

Para:

```asm
STR R0, [R2]
```

grave:

```text
Mem[R2] = R0
```

## 25.7 Passo 7 - Separe Signed De Unsigned

Se houver `menor`, `maior` ou comparação de limite, marque a interpretação:

```text
signed?   observe N e V; use condições LT/GE/GT/LE
unsigned? observe C e Z; use condições LO/HS/HI/LS
```

Não escolha pelo "aspecto" hexadecimal do número.

## 25.8 Passo 8 - Calcule O Endereço Antes Do Dado

Para:

```asm
LDR R3, [R4, R1, LSL #2]
```

escreva primeiro:

```text
EA = R4 + (R1 × 4)
```

Depois consulte:

```text
R3 = Mem32[EA]
```

Esse procedimento evita confundir índice, endereço e conteúdo.

## 25.9 Passo 9 - Em Funções, Rastreie `SP` E `LR`

Anote:

```text
qual retorno está em LR
o que foi salvo por PUSH
quanto SP mudou
se cada caminho de saída executa o POP correspondente
```

Em chamada aninhada, confirme que o retorno externo foi preservado antes do novo `BL`.

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

| Instrução | Interpretação | Condição típica após `CMP A,B` |
|---|---|---|
| `B` | desvia sempre | nenhuma |
| `BEQ` | igual | `Z=1` |
| `BNE` | diferente | `Z=0` |
| `BLT` | menor, signed | `N!=V` |
| `BGE` | maior ou igual, signed | `N=V` |
| `BGT` | maior, signed | `Z=0` e `N=V` |
| `BLE` | menor ou igual, signed | `Z=1` ou `N!=V` |
| `BLO`/`BCC` | menor, unsigned | `C=0` |
| `BHS`/`BCS` | maior ou igual, unsigned | `C=1` |
| `BHI` | maior, unsigned | `C=1` e `Z=0` |
| `BLS` | menor ou igual, unsigned | `C=0` ou `Z=1` |
| `BL` | chamada | salva retorno em `LR` e desvia |
| `BX LR` | retorno ARM-like | `PC` recebe o endereço de `LR` |

Regra de decisão:

```text
igual/diferente -> BEQ/BNE servem para signed e unsigned
ordem signed    -> BLT/BGE/BGT/BLE
ordem unsigned  -> BLO/BHS/BHI/BLS
```

As letras podem variar em outra ISA. O importante é identificar se a condição usa interpretação signed ou unsigned.

---

# 29. O Que A Prova Pode Perguntar?

Perguntas prováveis:

```text
qual valor final de um registrador?
quantas vezes o loop executa?
quando BNE é tomado?
qual flag BEQ testa?
qual branch representa menor signed ou menor unsigned?
o que CMP faz?
o que significa #5?
o que significa [R2]?
qual é o endereço efetivo de base + índice escalado?
o que STR grava?
o que BL salva?
por que uma chamada aninhada salva LR?
quanto SP muda após PUSH/POP?
o que BX LR faz?
por que R1 << 2 multiplica por 4?
qual a diferença entre LSR e ASR?
como os bytes são organizados em little-endian?
o acesso está naturalmente alinhado?
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
BLT/BGE = ordem signed
BLO/BHS = ordem unsigned
PUSH/POP = salva/restaura valores usando a pilha
LSR = zeros à esquerda; ASR = replica o sinal
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

## 30.6 `BX LR` Usa `LR` Como Endereço De Retorno

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

## 30.8 `BLT` E `BLO` Não São A Mesma Comparação

```text
BLT -> menor signed, considera N e V
BLO -> menor unsigned, considera C
```

Com operandos positivos pequenos, ambos podem dar a mesma decisão. Com MSB igual a 1, podem divergir.

## 30.9 Offset Sem `!` Não Atualiza Automaticamente A Base

```asm
LDR R1, [R2, #4]
```

normalmente usa `R2+4` como endereço e mantém `R2`. Só atualize a base quando a sintaxe ou o enunciado indicar writeback/pós-indexação.

## 30.10 `PUSH` E `POP` Precisam Se Equilibrar

Se uma função salva `R4` e `LR`, ela deve restaurar os valores corretos antes de retornar. Restaurar apenas um deles pode deixar `SP` deslocado ou o contexto corrompido.

## 30.11 Endianness Não Muda A Ordem Dos Bits

Little e big-endian tratam da ordem dos **bytes** de valores multibyte na memória, não da numeração dos registradores nem da inversão dos bits dentro de cada byte.

## 30.12 Desalinhado Não Significa Universalmente Proibido

Um acesso de word em endereço não múltiplo de quatro está desalinhado. Ele pode falhar ou apenas custar mais, conforme a arquitetura. Use a informação fornecida pela questão.

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
signed: BLT usa N!=V; BGE usa N=V
unsigned: BLO usa C=0; BHS usa C=1
em subtração ARM-like, C=1 significa sem borrow
BL = chama função e salva retorno em LR
LR = link register
BX LR = retorna da função
SP = stack pointer
PUSH salva e reduz SP na pilha descendente desta aula
POP restaura e aumenta SP
outro BL sobrescreve LR; função não folha preserva o retorno externo
caller-saved = chamador salva se precisar
callee-saved = função chamada restaura se usar
LDR R1,[R2] = R1 recebe Mem[R2]
STR R1,[R2] = Mem[R2] recebe R1
[Rbase,#offset] = memória em base + offset
EA = endereço efetivo calculado antes do acesso
[Rbase,Rindex,LSL #2] = base + índice*4
LSL = esquerda com zeros
LSR = direita com zeros, natural para unsigned
ASR = direita replicando sinal
word 32 bits = 4 bytes
little-endian = byte menos significativo no menor endereço
big-endian = byte mais significativo no menor endereço
word naturalmente alinhada = endereço múltiplo de 4
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

## 32.3 Endereço, Shifts E Memória

21. Se `R4=0x2000` e `R1=6`, qual é o endereço efetivo de:

```asm
LDR R3, [R4, R1, LSL #2]
```

22. Considere:

```text
R2=0x1000
Mem32[0x1008]=25
```

Após `LDR R1, [R2, #8]`, quais são os valores de `R1` e `R2`?

23. Em 8 bits, calcule e interprete:

```text
1111 0000 LSR 2
1111 0000 ASR 2
```

24. Se `R1=3`, qual é a diferença entre:

```asm
LDR R3, [R4, R1, LSL #2]
LSL R1, R1, #2
```

25. Se `R0=0x12345678` e `R2=0x1000`, qual byte é gravado por `STRB R0, [R2]`?

## 32.4 Flags E Comparações

26. Após comparar `0xFFFFFFFF` com `1` em 32 bits, responda:

- A) Qual é a relação signed?
- B) Qual é a relação unsigned?
- C) Qual branch representa cada conclusão?

27. Após `CMP A,B`, qual condição indica `A<B`:

- A) para signed?
- B) para unsigned?

28. Por que testar apenas `N=1` não é suficiente para decidir "menor signed"?

29. Se `Z=0`, `N=1`, `V=0` e `C=1`, quais branches são tomados: `BEQ`, `BNE`, `BLT`, `BGE`, `BLO`, `BHS`?

## 32.5 Pilha E Chamadas

30. Numa pilha descendente, `SP=0x4000` e cada registrador ocupa quatro bytes. Qual é o `SP` depois de `PUSH {R4,R5,LR}`? E após o `POP` correspondente?

31. Uma função recebeu `R0=7`, executou `BL dobro` e depois precisa retornar ao chamador original. Por que o `LR` externo deve ter sido salvo antes do `BL dobro`?

32. Na convenção didática, quem salva `R2` se o chamador ainda precisar dele? Quem preserva `R6` se a função chamada o utilizar?

## 32.6 Endianness, Alinhamento E Rastreio

33. A word `0xA1B2C3D4` é guardada a partir de `0x1000`. Liste os quatro bytes em ordem crescente de endereço:

- A) em little-endian;
- B) em big-endian.

34. Classifique os acessos de word como naturalmente alinhados ou desalinhados:

```text
0x2000
0x2002
0x2004
0x2007
```

35. Rastreie:

```text
R4=0x1000
R1=2
Mem32[0x1008]=10
Mem32[0x100C]=99
```

```asm
LDR R2, [R4, R1, LSL #2]
ADD R2, R2, #5
STR R2, [R4, #12]
```

Informe o endereço de cada acesso, o valor final de `R2`, `Mem32[0x100C]`, `R4` e `R1`.

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
21. `0x2018`, pois `6 LSL 2 = 24 = 0x18` e `0x2000+0x18=0x2018`.
22. `R1=25`; `R2` continua `0x1000`, pois a forma sem writeback não atualiza a base.
23. `LSR`: `0011 1100=60`; `ASR`: `1111 1100=-4` em complemento de 2.
24. No `LDR`, a escala participa apenas do endereço e `R1` permanece 3. No `LSL` separado, `R1` é substituído por 12.
25. `0x78`, os oito bits menos significativos.
26. A) `-1<1`, portanto `BLT`; B) `4.294.967.295>1`, portanto `BHI`; C) ambas as conclusões podem ser verdadeiras porque a interpretação é diferente.
27. A) `N!=V`, condição de `BLT`; B) `C=0`, condição de `BLO/BCC` no modelo ARM-like.
28. Porque uma subtração signed pode sofrer overflow; `V` deve ser combinado com `N`.
29. `BNE`, `BLT` e `BHS` são tomados. `BEQ`, `BGE` e `BLO` não são.
30. Três registradores ocupam 12 bytes: depois do `PUSH`, `SP=0x3FF4`; após o `POP`, `SP=0x4000`.
31. Porque o `BL dobro` substitui `LR` pelo retorno interno. Sem a cópia externa, a função perde o endereço de retorno ao chamador original.
32. O chamador salva `R2`, que é caller-saved; a função chamada salva e restaura `R6`, que é callee-saved.
33. A) little-endian: `D4 C3 B2 A1`; B) big-endian: `A1 B2 C3 D4`.
34. `0x2000` e `0x2004` alinhados; `0x2002` e `0x2007` desalinhados para word de quatro bytes.
35. O `LDR` usa `0x1000+(2×4)=0x1008` e lê 10. O `ADD` produz `R2=15`. O `STR` usa `0x100C` e grava 15. Ao final: `R2=15`, `Mem32[0x100C]=15`, `R4=0x1000` e `R1=2`.
