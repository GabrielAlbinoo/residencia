# Aula Detalhada - Assembly Prático, Otimização E Depuração

**Tema do dia:** assembly prático, métricas de desempenho, otimização segura, laços, memória, pipeline/cache, rastreio de erros, convenções de chamada, pilha e chamadas aninhadas
**Aula na sequência:** 34  
**Objetivo:** avaliar otimizações sem perder correção, rastrear registradores, memória, flags, `SP` e `LR`, reconhecer interações com pipeline/cache e compreender uma convenção de chamada ARM-like em nível de prova.

---

## 1. Onde Esta Aula Entra No Estudo?

Nas Aulas 25 e 26, você estudou:

```text
assembly básico
operandos
registradores
imediatos
memória
labels
branch
formatos de instrução
modos de endereçamento
```

Na Aula 27, você viu como o datapath executa instruções.

Agora vamos olhar assembly pelo ângulo prático:

```text
por que assembly é mais difícil de escrever e depurar?
por que exige conhecer o processador?
como otimizar código de baixo nível?
o que muda em sistemas embarcados?
```

Esse tipo de questão apareceu na prova de 2024 de forma conceitual.

---

# 2. Ideia Central

Assembly é uma linguagem muito próxima da máquina.

Em linguagens de alto nível, você escreve:

```c
x = a + b;
```

Em assembly, precisa pensar em:

```text
onde está a?
onde está b?
qual registrador guarda x?
preciso buscar da memória?
qual instrução soma?
preciso salvar de volta?
quais flags mudam?
```

Por isso, programar em assembly exige conhecer:

```text
arquitetura do processador
registradores
conjunto de instruções
modos de endereçamento
memória
flags
convenções
```

---

# 3. Assembly Depende Da Arquitetura

Assembly não é igual em todos os processadores.

Exemplos de arquiteturas:

```text
ARM
MIPS
RISC-V
x86
AVR
```

Cada uma pode ter:

```text
registradores diferentes
instruções diferentes
formatos diferentes
modos de endereçamento diferentes
regras diferentes de chamada de função
```

Então, se a questão diz:

```text
programar em assembly exige compreender a arquitetura do processador-alvo
```

Isso está correto.

---

# 4. Registradores São Recursos Valiosos

Registradores são pequenos, rápidos e ficam dentro do processador.

Usar registradores bem é essencial para desempenho.

Exemplo ruim:

```text
carrega da memória
soma
salva na memória
carrega de novo
soma
salva de novo
```

Exemplo melhor:

```text
carrega uma vez
mantém em registrador
faz várias operações
salva no final
```

Por quê?

Porque acesso à memória é mais lento que acesso a registrador.

---

# 5. Memória É Mais Lenta

Em geral:

```text
registrador > cache > memória principal
```

Acesso à memória custa mais tempo e energia.

Então uma otimização comum é:

```text
reduzir acessos desnecessários à memória
```

Exemplo conceitual:

```text
LOAD R1, [A]
LOAD R2, [B]
ADD  R3, R1, R2
STORE R3, [X]
```

Se `R1`, `R2` ou `R3` serão usados de novo, pode ser melhor mantê-los em registradores.

## 5.1 Exemplo Rastreado: Somar Um Vetor

Convenção deste exemplo:

```text
R0 = endereço do primeiro elemento
R1 = quantidade de elementos
R2 = acumulador
cada elemento tem 4 bytes
memória é endereçada por byte
```

Código ARM-like genérico:

```asm
MOV  R2, #0
loop:
  LDR  R3, [R0]       ; lê o elemento atual
  ADD  R2, R2, R3     ; acumula
  ADD  R0, R0, #4     ; aponta para a próxima word
  SUBS R1, R1, #1
  BNE  loop
```

Para o vetor `[4, 7, 2]`, começando em `0x1000`:

| Volta | `R0` antes | `Mem[R0]` | `R2` depois | `R0` depois | `R1` depois |
|---:|---:|---:|---:|---:|---:|
| 1 | `0x1000` | 4 | 4 | `0x1004` | 2 |
| 2 | `0x1004` | 7 | 11 | `0x1008` | 1 |
| 3 | `0x1008` | 2 | 13 | `0x100C` | 0 |

Resultado:

```text
R2 = 13
```

O endereço avança quatro porque cada elemento ocupa quatro bytes. Ele não avança quatro elementos.

### Cuidado Com Contador Zero

O trecho anterior presume `R1 > 0`. Se `R1` começar em zero, o corpo ainda executará uma vez e depois o contador poderá dar a volta para um valor muito grande, dependendo da largura.

Uma versão defensiva testa antes:

```asm
MOV  R2, #0
CMP  R1, #0
BEQ  fim
loop:
  LDR  R3, [R0]
  ADD  R2, R2, R3
  ADD  R0, R0, #4
  SUBS R1, R1, #1
  BNE  loop
fim:
```

Essa é uma lição recorrente de otimização: primeiro preserve a correção; depois tente reduzir o custo.

## 5.2 Evitar Tráfego Redundante

Versão com tráfego desnecessário:

```asm
LDR R0, [soma]
ADD R0, R0, R1
STR R0, [soma]
LDR R0, [soma]
ADD R0, R0, R2
STR R0, [soma]
```

Se nenhum outro agente altera `soma` entre as instruções, é possível manter o valor em registrador:

```asm
LDR R0, [soma]
ADD R0, R0, R1
ADD R0, R0, R2
STR R0, [soma]
```

Foram eliminados um `STR` e um `LDR`. Porém essa transformação pode ser inválida se `soma` representar um registrador de periférico, uma posição compartilhada alterada externamente ou se houver outra exigência explícita de acesso. A prova pode explorar exatamente essa diferença entre RAM comum e E/S mapeada em memória.

---

# 6. Otimização Em Assembly

Otimizar em assembly pode envolver:

```text
usar registradores de forma eficiente
reduzir LOAD/STORE
evitar instruções caras
reduzir branches desnecessários
organizar loops
usar instruções específicas da arquitetura
reduzir tamanho do código
alinhar dados/instruções quando relevante
```

Mas há uma pegadinha:

```text
otimizar não é só usar instruções especiais
```

Também envolve entender:

```text
memória
pipeline
cache
registradores
flags
conjunto de instruções
```

## 6.1 Antes De Otimizar: Defina A Métrica

"Mais otimizado" não significa uma única coisa. O objetivo pode ser:

```text
menor tempo de execução
menor número de ciclos
menor consumo de energia
menor tamanho de código na flash
menor uso de RAM
menor tempo no pior caso, em um sistema de tempo real
```

Esses objetivos podem entrar em conflito. Uma técnica que reduz ciclos pode aumentar o tamanho do programa; uma rotina menor pode executar mais lentamente.

Três grandezas ajudam a raciocinar sobre desempenho:

```text
IC   = quantidade de instruções executadas
CPI  = ciclos médios por instrução
Tclk = duração de cada ciclo

tempo de CPU ≈ IC × CPI × Tclk
```

Exemplo:

```text
versão A: 100 instruções × 1,5 ciclos/instrução = 150 ciclos
versão B:  80 instruções × 2,2 ciclos/instrução = 176 ciclos
```

A versão B executa menos instruções, mas é mais lenta nesse processador. Portanto:

```text
menos instruções não garante menos tempo
menos linhas de assembly não garante código menor
menos ciclos não garante menor energia em qualquer sistema
```

Em questão sem dados de latência, use apenas conclusões qualitativas. Não invente que todo `LDR` custa exatamente certo número de ciclos: cache, barramento e microarquitetura mudam esse custo.

## 6.2 Contagem Estática E Contagem Dinâmica

Considere:

```asm
MOV  R0, #0       ; executa uma vez
MOV  R1, #100     ; executa uma vez
loop:
  ADD  R0, R0, #1 ; executa 100 vezes
  SUBS R1, R1, #1 ; executa 100 vezes
  BNE  loop       ; executa 100 vezes
```

O corpo possui três instruções no arquivo, mas elas executam 300 vezes. A distinção é:

```text
contagem estática = instruções presentes no código
contagem dinâmica = instruções realmente executadas
```

Otimizar uma instrução dentro de um laço muito repetido costuma ter impacto maior que otimizar uma instrução executada uma única vez.

## 6.3 Otimização Segura Preserva O Significado

Antes de aceitar uma transformação, verifique:

```text
o resultado final continua igual?
as flags ainda são produzidas antes do branch que as usa?
os registradores que deveriam ser preservados continuam preservados?
os limites do vetor continuam respeitados?
overflow e sinal mantêm o comportamento esperado?
a ordem dos acessos à memória pode ser alterada?
```

Exemplo de transformação insegura:

```asm
CMP  R0, #0
ADDS R4, R4, #1   ; substitui as flags produzidas pelo CMP
BEQ  zero
```

O `BEQ` deve consultar as flags do `CMP`. Se a instrução intermediária atualizar flags, o branch pode testar outra coisa. Ao reorganizar código, dependências de flags também contam como dependências.

Em sistemas embarcados, um endereço pode representar um periférico mapeado em memória. Leituras e escritas nesses endereços podem ter efeitos físicos. Não é seguro remover ou reordenar esses acessos como se fossem acessos comuns à RAM, salvo quando a especificação permitir.

## 6.4 Um Procedimento Seguro

```text
1. estabeleça o resultado correto da versão original
2. escolha a métrica: ciclos, tamanho, energia ou pior caso
3. localize o trecho mais executado ou mais caro
4. mude uma coisa por vez
5. rastreie casos normais e casos-limite
6. compare resultado e métrica
```

Casos-limite frequentes:

```text
contador igual a zero
vetor vazio ou com um elemento
maior e menor valor representável
endereços no início e no fim da região válida
função que chama outra função
```

## 6.5 Otimização De Laços

Laços merecem atenção porque pequenas diferenças se repetem muitas vezes.

### Retirar Trabalho Invariante

Versão conceitualmente redundante:

```asm
loop:
  MOV  R4, #4
  MUL  R5, R1, R4
  ; usa R5 como offset
  ...
  BNE  loop
```

Se `R4` vale sempre 4, o `MOV` não precisa estar dentro do laço:

```asm
MOV  R4, #4
loop:
  MUL  R5, R1, R4
  ...
  BNE  loop
```

### Atualizar Ponteiro Em Vez De Recalcular

Para percorrer words, uma forma calcula `base + i × 4` a cada volta. Outra mantém o endereço atual e soma 4:

```asm
LDR R3, [R0]
ADD R0, R0, #4
```

Isso pode reduzir o trabalho aritmético. Entretanto, manter a base original pode ser necessário depois; nesse caso, use outro registrador ou restaure o valor.

### Desenrolamento De Laço

Processar dois elementos por volta pode reduzir a quantidade de branches:

```asm
loop_duplo:
  LDR R3, [R0]
  LDR R4, [R0, #4]
  ADD R2, R2, R3
  ADD R2, R2, R4
  ADD R0, R0, #8
  SUBS R1, R1, #2
  BNE loop_duplo
```

Mas essa versão só funciona diretamente quando a quantidade é positiva e par. Para quantidade ímpar, é necessário tratar o elemento restante. Ela também aumenta o tamanho do código e usa mais registradores.

Conclusão de prova:

```text
desenrolar pode reduzir overhead de branch
não elimina a necessidade de tratar limites
pode aumentar código e pressão por registradores
```

---

# 7. Tamanho De Código

Em sistemas embarcados, memória pode ser limitada.

Então tamanho de código importa.

Exemplo:

```text
microcontrolador com pouca flash
firmware pequeno
baixo consumo
tempo real
```

Às vezes, uma versão mais rápida usa mais instruções.

Às vezes, uma versão menor é um pouco mais lenta.

Isso cria trade-off:

```text
velocidade
tamanho
energia
legibilidade
```

Questão contextual pode perguntar:

```text
qual desafio de assembly em sistemas embarcados?
```

Resposta provável:

```text
entender arquitetura, otimizar código e gerenciar registradores/memória
```

---

# 8. Sistemas Embarcados

Sistema embarcado é um computador dentro de um produto ou equipamento.

Exemplos:

```text
controle de motor
sensor industrial
roteador
relógio digital
dispositivo médico
automação residencial
microcontrolador em carro
```

Características comuns:

```text
recursos limitados
baixo consumo
tempo real
interação com hardware
memória restrita
necessidade de confiabilidade
```

Assembly pode aparecer quando:

```text
precisa de desempenho máximo
precisa controlar hardware diretamente
precisa reduzir tamanho
precisa lidar com interrupções
```

---

# 9. Depuração Em Assembly

Depurar assembly é mais difícil que depurar código de alto nível.

Porque você precisa observar:

```text
PC
registradores
memória
flags
pilha, se existir
instrução atual
endereços
```

Em C, você vê:

```c
x = a + b;
```

Em assembly, vê:

```text
LOAD R1, [A]
LOAD R2, [B]
ADD  R3, R1, R2
STORE R3, [X]
```

Se o resultado está errado, pode ser:

```text
endereço errado
registrador sobrescrito
flag inesperada
branch tomado indevidamente
valor antigo na memória
erro de sinal
overflow
```

## 9.1 Método De Rastreio

Não tente executar um trecho inteiro apenas de cabeça. Registre, a cada instrução:

```text
PC ou label atual
registradores alterados
flags alteradas
endereço efetivo de cada acesso
valor lido ou escrito
decisão do branch
SP e LR quando houver função
```

Exemplo com erro:

```asm
; intenção: somar três elementos de 32 bits
; R0 = base, R1 = 3, R2 = soma
MOV  R2, #0
loop:
  LDR  R3, [R0]
  ADD  R2, R2, R3
  ADD  R0, R0, #1    ; erro
  SUBS R1, R1, #1
  BNE  loop
```

Com base `0x1000`, o rastreio dos endereços é:

| Volta | endereço usado por `LDR` | endereço esperado |
|---:|---:|---:|
| 1 | `0x1000` | `0x1000` |
| 2 | `0x1001` | `0x1004` |
| 3 | `0x1002` | `0x1008` |

O contador está correto; o erro é o passo do ponteiro. Para words de quatro bytes, deveria ser:

```asm
ADD R0, R0, #4
```

Esse rastreio também revela possíveis acessos desalinhados nas voltas 2 e 3.

## 9.2 Invariantes Úteis

Uma invariante é uma relação que deve permanecer verdadeira durante o laço. No somador de vetor:

```text
R2 = soma dos elementos já processados
R0 = endereço do próximo elemento
R1 = quantidade de elementos restantes
```

Se uma linha quebra uma dessas relações, ela é uma forte candidata a erro.

## 9.3 Sintoma E Causa Provável

| Sintoma | Verifique primeiro |
|---|---|
| laço executa uma vez a mais | posição de `CMP/SUBS`, condição do branch e valor inicial |
| dado vem de posição errada | base, offset, escala e tamanho do elemento |
| função não retorna ao chamador | `LR`, `SP`, equilíbrio entre `PUSH` e `POP` |
| valor muda após uma chamada | registrador caller-saved não protegido |
| branch contradiz os números | flags recentes e comparação signed/unsigned |
| falha só em valores extremos | overflow, largura e extensão de sinal |

---

# 10. PC Na Depuração

PC é o Program Counter.

Ele guarda o endereço da próxima instrução, ou da instrução atual dependendo da arquitetura e do ponto de observação.

Para depurar fluxo:

```text
olhe o PC
veja se branch mudou o fluxo
veja se jump/call foi para o local certo
```

Se o programa entrou em loop infinito:

```text
PC fica voltando para a mesma região
```

Se pulou para lugar errado:

```text
PC recebeu endereço incorreto
```

---

# 11. Flags Na Depuração

Flags indicam resultados de operações.

Comuns:

```text
Z -> zero
N -> negativo
C -> carry/borrow, dependendo da operação
V -> overflow signed
```

Branches condicionais podem depender delas.

Exemplo:

```text
CMP R1, #0
BEQ alvo
```

`CMP` atualiza flags.

`BEQ` olha `Z`.

Se `Z=1`, significa que a comparação deu igual.

Então o branch é tomado.

Depurar assembly exige ver se as flags estão como esperado.

---

# 12. Registrador Sobrescrito

Erro comum:

```text
usar um registrador para uma coisa
depois sobrescrever sem perceber
```

Exemplo:

```text
ADD R1, R2, R3
MUL R1, R4, R5
STORE R1, [X]
```

O valor da soma foi perdido, porque `R1` recebeu outro resultado.

Em assembly, você precisa controlar manualmente o uso de registradores.

---

# 13. Convenções De Chamada

Quando há funções, é necessário um acordo entre quem chama e quem é chamado. Esse acordo é a **convenção de chamada**.

Ela define:

```text
onde os argumentos chegam
onde o resultado volta
quais registradores podem ser destruídos pela função
quais registradores precisam ser devolvidos com o valor antigo
como a pilha é organizada
como o endereço de retorno é preservado
```

Os nomes exatos dependem da arquitetura e da ABI. Para os exemplos desta aula, usaremos uma convenção ARM-like didática:

```text
R0 a R3  -> argumentos; R0 também recebe o resultado
R0 a R3  -> caller-saved: quem chama salva se ainda precisar deles
R4 a R11 -> callee-saved: a função chamada restaura se os usar
SP       -> stack pointer, aponta para a pilha
LR       -> link register, recebe o endereço de retorno no BL
PC       -> program counter
```

Isso é uma convenção de estudo, não uma regra universal para qualquer ARM, MIPS ou RISC-V.

## 13.1 Caller-Saved E Callee-Saved

**Caller-saved** significa:

```text
a função chamada pode alterar o registrador
se quem chama precisa do valor depois, quem chama deve salvá-lo antes
```

**Callee-saved** significa:

```text
se a função chamada decidir usar o registrador, ela própria deve salvar o valor antigo e restaurá-lo antes do retorno
```

Pegadinha:

```text
callee-saved não quer dizer que a função está proibida de usar o registrador
quer dizer que ela deve devolvê-lo como encontrou
```

## 13.2 `SP`, `PUSH` E `POP`

`SP` guarda o endereço do topo da pilha. Em uma pilha descendente típica:

```text
PUSH -> reserva espaço diminuindo SP e salva valores
POP  -> recupera valores e libera espaço aumentando SP
```

Suponha registradores de 32 bits e:

```text
SP inicial = 0x2000
```

Depois de:

```asm
PUSH {R4, LR}
```

foram salvas duas words, oito bytes no total:

```text
SP novo = 0x1FF8
```

Depois de:

```asm
POP {R4, LR}
```

os valores são restaurados e:

```text
SP volta a 0x2000
```

A posição exata de cada registrador dentro da área salva depende da arquitetura e da codificação. Para a prova, a ideia central é:

```text
PUSH salva e ocupa pilha
POP restaura e desfaz a ocupação
PUSH e POP equilibrados devolvem SP ao valor inicial
```

## 13.3 Função Folha E Função Não Folha

Uma **função folha** não chama outra função:

```asm
dobro:
  ADD R0, R0, R0
  BX  LR
```

Ela recebe o argumento em `R0`, devolve `2 × R0` no próprio `R0` e não precisa salvar `LR` se nenhuma instrução o sobrescrever.

Uma **função não folha** chama outra função. Nesse caso, o novo `BL` substitui o conteúdo de `LR`.

## 13.4 Por Que Salvar `LR` Em Chamada Aninhada?

Considere uma função `triplo` que chama `dobro`:

```asm
; entrada: R0 = x
; saída:   R0 = 3*x
triplo:
  PUSH {R4, LR}       ; preserva R4 antigo e o retorno de triplo
  MOV  R4, R0         ; guarda x em registrador callee-saved
  BL   dobro          ; LR agora aponta para a próxima instrução daqui
  ADD  R0, R0, R4     ; 2*x + x
  POP  {R4, LR}       ; recupera R4 antigo e o retorno de triplo
  BX   LR

dobro:
  ADD  R0, R0, R0
  BX   LR
```

Para `x = 5`:

| Momento | `R0` | `R4` | Papel de `LR` |
|---|---:|---:|---|
| antes de `BL triplo` | 5 | valor antigo | retorno do chamador ainda não gravado |
| entrada de `triplo` | 5 | valor antigo | voltar ao chamador |
| após `PUSH` e `MOV` | 5 | 5 | retorno do chamador está também salvo na pilha |
| após `BL dobro` | 5 | 5 | voltar para o `ADD` dentro de `triplo` |
| retorno de `dobro` | 10 | 5 | aponta para o `ADD` |
| após `ADD` | 15 | 5 | ainda é o retorno interno |
| após `POP` | 15 | valor antigo | voltar ao chamador original |

Sem salvar `LR`, `triplo` perderia o endereço de retorno para seu chamador. Ao executar seu `BX LR`, poderia voltar para dentro da própria função em vez de sair corretamente.

## 13.5 Argumentos Extras E Quadro De Pilha

Quando há mais argumentos do que registradores reservados para argumentos, os restantes podem ser passados pela pilha. Uma função também pode reservar espaço na pilha para:

```text
variáveis locais
registradores salvos
argumentos adicionais
valores temporários que não couberam em registradores
```

Esse bloco é frequentemente chamado de **stack frame** ou quadro de pilha. Para o nível desta prova, não é necessário decorar offsets de uma ABI real. Saiba reconhecer que:

```text
SP localiza o topo da pilha
PUSH/POP salvam e restauram contexto
argumentos e variáveis podem ocupar a pilha
uma função não folha costuma precisar preservar seu retorno
```

---

# 14. Comentários E Legibilidade

Assembly pode ficar difícil de ler.

Boas práticas:

```text
comentários claros
labels com nomes úteis
separar trechos lógicos
documentar registradores usados
seguir convenções
```

Mas cuidado:

```text
comentário não corrige código errado
```

Questões podem dizer:

```text
boas práticas incluem comentários e modularização
```

Isso é verdadeiro em geral.

Mas se a questão perguntar o desafio principal técnico, procure alternativa que mencione:

```text
arquitetura
registradores
memória
otimização
depuração
```

---

# 15. Assembly E Compiladores

Compiladores transformam código de alto nível em instruções de máquina.

Eles fazem escolhas como:

```text
quais variáveis ficam em registradores
quais vão para memória
como organizar loops
quais instruções usar
```

Alocação de registradores:

```text
decidir quais valores temporários ficam em registradores
```

Se faltam registradores, alguns valores precisam ir para memória.

Isso é chamado, em compiladores, de spill.

Para sua prova, basta a ideia:

```text
registradores são usados para temporários por serem rápidos
```

---

# 16. Assembly E Pipeline

Código assembly pode afetar pipeline.

Exemplo:

```text
LW  R1, 0(R2)
ADD R3, R1, R4
```

Pode causar load-use hazard.

Um compilador ou programador pode tentar reorganizar instruções para reduzir stalls.

Exemplo conceitual:

```text
LW  R1, 0(R2)
instrução independente
ADD R3, R1, R4
```

A instrução independente ocupa o espaço enquanto o load termina.

Isso é otimização de baixo nível.

## 16.1 Dependências Que Limitam A Reordenação

Uma dependência verdadeira, ou RAW (*read after write*), ocorre quando uma instrução precisa do resultado da anterior:

```asm
ADD R1, R2, R3
SUB R4, R1, R5    ; precisa do novo R1
```

Não se pode colocar o `SUB` antes do `ADD`: isso muda o resultado.

No caso de load-use:

```asm
LDR R1, [R2]
ADD R3, R1, R4
```

o `ADD` depende do dado que ainda está sendo obtido. Dependendo do pipeline e do forwarding, pode haver stall.

Se existir trabalho independente:

```asm
LDR R1, [R2]
ADD R6, R6, #1    ; não lê nem escreve R1, R2, R3 ou R4
ADD R3, R1, R4
```

essa reorganização pode ocultar parte da latência. Mas só é válida se a instrução movida:

```text
não alterar as flags necessárias
não mudar um endereço usado
não trocar a ordem de acessos com efeitos observáveis
não introduzir dependência de registradores
```

## 16.2 Branches E Pipeline

Um branch condicional cria incerteza sobre a próxima instrução. Se a previsão estiver errada, instruções buscadas no caminho incorreto podem ser descartadas, causando flush.

Isso não significa que todo branch deve ser removido. Uma transformação só é boa se preservar a lógica e realmente melhorar a métrica no processador-alvo.

## 16.3 Não Confundir Correção Com Desempenho

```text
hazard resolvido por stall -> programa pode estar correto, porém mais lento
hazard não tratado pelo hardware/software -> programa pode produzir resultado errado
```

Em arquiteturas modernas, normalmente o hardware garante correção e insere stall quando necessário. A reorganização visa desempenho, não "consertar" o valor. Em uma questão, leia qual modelo foi declarado.

---

# 17. Assembly E Cache

Código também pode afetar cache.

Exemplo bom:

```text
percorrer vetor sequencialmente
```

Exemplo ruim:

```text
acessar memória de forma aleatória sem localidade
```

Assembly prático pode se preocupar com:

```text
localidade
alinhamento
ordem dos acessos
redução de LOAD/STORE
```

Não precisa aprofundar para a prova.

Mas reconheça que desempenho em baixo nível depende também de memória/cache.

## 17.1 Localidade Espacial E Temporal

```text
localidade espacial = acessar endereços próximos
localidade temporal = reutilizar em breve um dado já acessado
```

Percorrer `vetor[0]`, `vetor[1]`, `vetor[2]` favorece localidade espacial porque palavras consecutivas tendem a estar no mesmo bloco de cache.

Em uma matriz armazenada por linhas, a ordem dos laços importa:

```c
for (i = 0; i < linhas; i++)
  for (j = 0; j < colunas; j++)
    soma += A[i][j];
```

O acesso segue posições consecutivas. Trocar os laços pode produzir saltos grandes entre endereços. O número de somas permanece igual, mas a quantidade de misses pode aumentar.

## 17.2 Mais `LDR` Não Significa Sempre Mais Misses

Um `LDR` pode acertar na cache ou pode exigir acesso a um nível mais lento. Por isso:

```text
contar LOAD/STORE ajuda, mas não determina sozinho o tempo
padrão de endereços e reutilização também importam
```

## 17.3 Pipeline E Cache Interagem

Um load que acerta na cache pode ter latência pequena. Um miss pode manter a dependência esperando por muitos ciclos. A sequência:

```asm
LDR R1, [R2]
ADD R3, R1, R4
```

combina dois fatores:

```text
dependência load-use
latência do nível de memória que atende ao load
```

Não confunda:

```text
stall = espera no pipeline
miss = dado não encontrado naquele nível da cache
```

Um miss pode causar stalls, mas os termos não são sinônimos.

---

# 18. Trade-Offs

Em engenharia, otimizar uma coisa pode piorar outra.

Exemplos:

```text
mais velocidade -> mais tamanho de código
menos tamanho -> menos legibilidade
menos acesso à memória -> mais uso de registradores
mais instruções especiais -> menos portabilidade
```

Assembly geralmente é menos portável.

Código feito para ARM não roda diretamente em MIPS, por exemplo.

---

# 19. O Que A Prova Pode Perguntar?

Perguntas prováveis:

```text
Por que assembly exige conhecer arquitetura?
Por que registradores são importantes?
Por que reduzir acesso à memória melhora desempenho?
Quais elementos observar ao depurar assembly?
Quais desafios existem em sistemas embarcados?
O que significa otimizar assembly?
```

Respostas-chave:

```text
assembly depende do conjunto de instruções e registradores
registradores são rápidos e limitados
memória é mais lenta
depuração exige observar PC, registradores, flags e memória
sistemas embarcados têm restrições de energia, memória e tempo
```

---

# 20. Pegadinhas

## 20.1 Assembly Não É Universal

Cada arquitetura tem seu assembly.

Não existe uma sintaxe única obrigatória para todas.

---

## 20.2 Otimização Não É Só Usar Instrução Especial

Também envolve:

```text
registradores
memória
pipeline
cache
flags
fluxo
```

---

## 20.3 Acesso À Memória Não É Grátis

LOAD e STORE costumam ser mais caros que operar em registradores.

Reduzir acessos à memória pode melhorar desempenho.

---

## 20.4 Depuração Em Assembly Não É Simples

Se uma alternativa disser:

```text
depuração em assembly é simples porque há poucas abstrações
```

desconfie.

Poucas abstrações significam mais responsabilidade manual.

---

## 20.5 Flags Não São Instruções

Flags são resultados/indicadores atualizados por certas instruções.

Branches condicionais consultam flags.

---

# 21. Resumo De Prova

```text
assembly = linguagem próxima da máquina
depende da arquitetura
registradores = rápidos e limitados
memória = mais lenta
tempo de CPU ≈ instruções executadas × CPI × período do clock
contagem estática não é contagem dinâmica
otimização = definir métrica, localizar trecho caro, transformar e validar
otimização segura preserva resultado, flags, convenção e efeitos de memória
laços = verificar contador zero, limite, passo e elemento restante
depuração = rastrear PC, registradores, flags, endereço efetivo, memória, SP e LR
RAW/load-use = consumidor precisa do resultado do produtor
stall é espera; cache miss é ausência do dado naquele nível
localidade espacial = endereços próximos
localidade temporal = reutilização próxima no tempo
sistemas embarcados = recursos limitados, tempo real, energia, hardware específico
BL/LR/BX LR = chamada e retorno em estilo ARM
SP = topo da pilha; PUSH salva; POP restaura
caller-saved = o chamador protege se precisar depois
callee-saved = a função chamada restaura se usar
função não folha deve preservar o retorno antes de outro BL
```

---

# 22. Exercícios

1. Por que assembly depende da arquitetura?
2. Por que registradores são importantes para desempenho?
3. Por que reduzir acessos à memória pode otimizar código?
4. O que observar ao depurar assembly?
5. O que é PC?
6. Qual flag indica resultado zero em muitas arquiteturas?
7. Por que sistemas embarcados podem usar assembly?
8. O que é alocação de registradores em ideia geral?
9. Por que assembly é menos portável?
10. Qual é a relação entre assembly e pipeline?

## Múltipla Escolha

11. Uma afirmação correta sobre assembly é:

- A) independe completamente da arquitetura.
- B) exige conhecer registradores, memória e conjunto de instruções.
- C) não usa endereços.
- D) não pode acessar hardware.

12. Uma otimização comum em assembly é:

- A) aumentar acessos desnecessários à memória.
- B) reduzir uso de registradores.
- C) manter temporários em registradores quando possível.
- D) remover todos os branches sempre.

13. Para depurar assembly, é comum observar:

- A) PC, registradores, flags e memória.
- B) apenas o nome do arquivo fonte.
- C) somente a cor da interface.
- D) apenas o tamanho do monitor.

14. Em sistemas embarcados, assembly pode ser relevante porque:

- A) recursos podem ser limitados e pode haver necessidade de controle direto do hardware.
- B) sempre elimina qualquer bug.
- C) dispensa conhecimento de memória.
- D) é igual em todos os processadores.

15. Se uma instrução `CMP` é seguida por `BEQ`, o `BEQ` normalmente depende:

- A) da flag Z.
- B) da capacidade da DRAM.
- C) do número de linhas da cache.
- D) do bit de paridade ASCII.

## Aplicação E Rastreio

16. Um programa possui 50 instruções no arquivo, mas 4 instruções de um laço executam 1.000 vezes. Explique a diferença entre contagem estática e dinâmica.

17. Considere:

```asm
LDR R1, [R2]
ADD R3, R1, R4
ADD R6, R6, #1
```

Qual dependência pode causar stall? Em que condição o último `ADD` poderia ser movido para entre `LDR` e o primeiro `ADD`?

18. Em uma pilha descendente com words de quatro bytes, `SP=0x3000`. Qual será o `SP` após `PUSH {R4, LR}`? E depois do `POP {R4, LR}` correspondente?

19. Por que uma função que executa outro `BL` normalmente precisa preservar seu próprio `LR`?

20. Pela convenção didática da aula, quem deve preservar:

- A) `R1`, caso o chamador ainda precise dele depois da chamada?
- B) `R6`, caso a função chamada queira usá-lo?

21. No laço de soma de words, a base começa em `0x1000`. Quais endereços devem ser lidos nas três primeiras voltas?

22. Uma transformação remove duas leituras repetidas de um endereço de periférico mapeado em memória. Por que essa transformação pode estar errada mesmo que pareça reduzir tempo?

23. Um código A executa 120 instruções com CPI médio 1,5. Um código B executa 100 instruções com CPI médio 2. Qual usa menos ciclos?

24. No desenrolamento que processa dois elementos por volta, qual caso precisa de tratamento adicional?

25. Em uma matriz armazenada por linhas, por que percorrer elementos consecutivos da mesma linha tende a ser melhor para cache que pular entre linhas distantes?

---

# 23. Gabarito

1. Porque cada processador tem registradores, instruções, formatos e convenções próprias.
2. Porque são muito rápidos e ficam próximos da ULA.
3. Porque memória é mais lenta que registradores/cache.
4. PC, registradores, memória, flags e instrução atual.
5. Registrador que indica a próxima instrução ou posição de execução, dependendo da arquitetura.
6. Z.
7. Por desempenho, baixo nível, controle de hardware, memória limitada ou tempo real.
8. Decidir quais valores ficam em registradores.
9. Porque depende do conjunto de instruções da arquitetura.
10. Código pode criar dependências, stalls, load-use hazards ou favorecer melhor fluxo.
11. B.
12. C.
13. A.
14. A.
15. A.
16. A contagem estática mede as instruções presentes no código; a dinâmica conta todas as execuções. As quatro instruções contribuem com 4.000 execuções dinâmicas, embora ocupem apenas quatro posições no corpo do laço.
17. O primeiro `ADD` lê `R1`, produzido pelo `LDR`: é uma dependência load-use. O `ADD R6, R6, #1` pode ser intercalado se for realmente independente, não alterar flags necessárias e não mudar efeitos observáveis de memória/fluxo.
18. Após o `PUSH`, `SP=0x2FF8`; após o `POP` correspondente, `SP=0x3000`.
19. Porque o novo `BL` grava em `LR` o retorno da chamada interna, substituindo o endereço de retorno para o chamador original.
20. A) o chamador, pois `R1` é caller-saved no modelo; B) a função chamada, pois `R6` é callee-saved.
21. `0x1000`, `0x1004` e `0x1008`.
22. Porque cada leitura ou escrita de E/S pode ter efeito observável; remover ou reordenar acessos pode mudar o comportamento do hardware.
23. A: `120 × 1,5 = 180` ciclos. B: `100 × 2 = 200` ciclos. A usa menos ciclos.
24. Quantidade ímpar, além dos casos zero e limites; sobra um elemento a ser processado.
25. Porque endereços consecutivos favorecem localidade espacial e várias words próximas podem vir no mesmo bloco de cache.
