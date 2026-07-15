# Aula Detalhada - Branch Prediction E Predição De Desvios

**Tema do dia:** desvios condicionais, branch, PC, hazard de controle, direção e alvo, predição estática e dinâmica, preditores de 1 e 2 bits, BHT/PHT, BTB, RAS, histórico local e global, acurácia, penalidade e flush
**Aula na sequência:** 32  
**Objetivo:** entender por que branches atrapalham pipelines, como direção e alvo são previstos, como funcionam os principais preditores e como calcular o impacto dos erros no desempenho.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 25, você estudou que branch muda o fluxo do programa.

Na Aula 27, você viu que o PC escolhe a próxima instrução.

Na Aula 31, você viu que branch pode causar hazard de controle.

Agora vamos focar em uma técnica para lidar com isso:

```text
branch prediction
predição de desvios
```

Ela apareceu na prova de 2024 em uma questão conceitual.

O núcleo necessário aqui é:

```text
reconhecer o que é
entender por que existe
diferenciar predição estática e dinâmica
entender penalidade de erro
acompanhar preditores de 1 e 2 bits
distinguir BHT/PHT, BTB e RAS
calcular acurácia e impacto aproximado no CPI
```

---

# 2. Ideia Central

Branch prediction é a tentativa de prever se um desvio será tomado ou não.

Exemplo:

```text
BEQ R1, R2, alvo
```

Se `R1 == R2`, o branch é tomado.

Se `R1 != R2`, não é tomado.

O problema:

```text
o processador talvez precise buscar a próxima instrução antes de saber o resultado do branch
```

Então ele aposta.

Se acertar:

```text
pipeline continua fluindo
```

Se errar:

```text
descarta instruções erradas
paga penalidade
```

---

# 3. Branch Tomado E Não Tomado

Um branch condicional pode ser:

```text
tomado
não tomado
```

Tomado:

```text
PC recebe o endereço alvo
```

Não tomado:

```text
PC segue para a próxima instrução sequencial
```

Exemplo:

```text
BEQ R1, R2, label
```

Se igual:

```text
vai para label
```

Se diferente:

```text
continua na próxima instrução
```

---

# 4. Por Que Branch Atrapalha Pipeline?

Pipeline busca instruções antes das anteriores terminarem.

Exemplo:

```text
ciclo 1: BEQ IF
ciclo 2: BEQ ID | próxima IF
ciclo 3: BEQ EX | próxima ID | outra IF
```

Mas se o `BEQ` for tomado, talvez essas instruções buscadas depois dele estejam erradas.

Problema:

```text
o pipeline precisa saber qual é o próximo PC
```

Com branch:

```text
próximo PC depende da condição
```

Isso é hazard de controle.

---

# 5. Solução Ingênua: Esperar

Uma solução simples seria:

```text
parar o pipeline até saber o resultado do branch
```

Isso funciona corretamente.

Mas perde desempenho.

Porque o processador fica esperando.

Exemplo:

```text
BEQ entra
pipeline espera até saber se branch é tomado
só depois busca a próxima instrução correta
```

Correto, mas lento.

Branch prediction tenta evitar essa espera.

---

# 6. Predição Estática

Predição estática usa uma regra fixa.

Ela não depende do comportamento real recente do programa.

Exemplos:

```text
sempre prever não tomado
sempre prever tomado
prever branches para trás como tomados
prever branches para frente como não tomados
```

Na questão da prova de 2024, apareceu:

```text
assumir que todos os desvios serão tomados
```

Isso é:

```text
predição estática de desvios tomados
```

Por quê estática?

Porque é uma regra fixa:

```text
todo branch -> tomado
```

Não olha histórico.

---

# 7. Sempre Tomado

Estratégia:

```text
assuma que branch será tomado
```

Se a instrução é:

```text
BEQ R1, R2, alvo
```

O processador começa a buscar do alvo.

Vantagem:

```text
simples
pode funcionar bem em loops
```

Por que em loops?

Exemplo:

```c
for (int i = 0; i < 100; i++) {
    ...
}
```

O branch de retorno do loop é tomado muitas vezes.

Só não é tomado na saída do loop.

---

# 8. Sempre Não Tomado

Estratégia:

```text
assuma que branch não será tomado
```

O processador continua buscando a próxima instrução sequencial.

Vantagem:

```text
simples
não precisa calcular alvo tão cedo em alguns casos
```

Desvantagem:

```text
erra muito em loops com branch de volta
```

---

# 9. Predição Por Direção

Uma regra estática um pouco mais esperta:

```text
branch para trás -> tomado
branch para frente -> não tomado
```

Por quê?

Branches para trás costumam ser loops.

Branches para frente costumam ser if/else ou saltos de saída.

Não é perfeito, mas é melhor que uma regra totalmente cega em muitos programas.

Para sua prova, basta reconhecer como predição estática baseada na direção.

---

# 10. Predição Dinâmica

Predição dinâmica usa histórico de execução.

Em vez de regra fixa, o processador observa o comportamento anterior do branch.

Exemplo:

```text
esse branch foi tomado nas últimas vezes?
```

Se sim:

```text
prever tomado
```

Se não:

```text
prever não tomado
```

Predição dinâmica pode usar:

```text
histórico local
histórico global
contadores
tabelas de predição
```

Não precisa decorar estruturas avançadas.

Precisa saber:

```text
dinâmica = usa comportamento/histórico em tempo de execução
estática = usa regra fixa
```

---

# 11. Histórico Local E Global

Histórico local:

```text
olha o comportamento daquele branch específico
```

Exemplo:

```text
o branch da linha X foi tomado nas últimas execuções?
```

Histórico global:

```text
olha padrão recente de vários branches
```

Exemplo:

```text
os últimos branches do programa formaram qual padrão?
```

Para a prova:

```text
local = histórico daquele desvio
global = histórico de vários desvios recentes
```

---

# 12. Acerto De Predição

Se o processador prevê corretamente:

```text
prediction hit
acerto
```

O pipeline segue com as instruções certas.

Ganho:

```text
menos stalls
menos flushes
melhor throughput
```

---

# 13. Erro De Predição

Se o processador prevê errado:

```text
misprediction
erro de predição
```

O pipeline buscou instruções do caminho errado.

Então precisa:

```text
descartar instruções erradas
buscar do caminho correto
```

Isso causa penalidade.

Penalidade:

```text
ciclos perdidos por erro de predição
```

Quanto mais profundo o pipeline, maior pode ser a penalidade.

---

# 14. Flush Após Erro

Se a predição errou, as instruções erradas precisam ser removidas.

Isso é:

```text
flush
```

Exemplo:

```text
processador previu não tomado
buscou PC+4, PC+8, PC+12
mas branch era tomado para alvo
```

Então:

```text
PC+4, PC+8, PC+12 são descartadas
pipeline busca alvo
```

---

# 15. Branch Target

Além de prever se o branch é tomado, o processador precisa saber para onde ir.

Endereço alvo:

```text
branch target
```

Alguns mecanismos guardam alvos já usados para acelerar a busca. O principal é o `BTB`, estudado adiante.

Para prova básica:

```text
branch tomado -> PC recebe alvo
branch não tomado -> PC segue sequencial
```

---

# 16. Relação Com Loops

Loops são importantes para branch prediction.

Exemplo:

```c
for (int i = 0; i < 100; i++) {
    corpo;
}
```

O branch que volta ao início:

```text
tomado muitas vezes
não tomado uma vez, na saída
```

Por isso estratégias como:

```text
prever branch para trás como tomado
```

podem funcionar bem.

---

# 17. Relação Com Pipeline

Branch prediction é mais importante em pipeline porque o processador busca instruções antes de saber tudo.

Sem pipeline:

```text
pode esperar uma instrução terminar antes de buscar a próxima
```

Com pipeline:

```text
esperar demais destrói o ganho de throughput
```

Então:

```text
branch prediction mantém o pipeline alimentado
```

---

# 18. Duas Perguntas Diferentes: Direção E Alvo

Para buscar a próxima instrução, prever apenas “tomado ou não tomado” pode não bastar.

O processador pode precisar responder a duas perguntas:

```text
1. direção (outcome): o branch será tomado?
2. alvo (target): se for tomado, qual será o próximo PC?
```

Exemplo:

```text
PC do branch = 0x100
próxima instrução sequencial = 0x104
alvo do branch = 0x180
```

As possibilidades são:

```text
previsto não tomado -> próximo PC previsto = 0x104
previsto tomado     -> próximo PC previsto = 0x180
```

O preditor de direção pode acertar que o branch será tomado e, ainda assim, o processador não ter o alvo disponível cedo. Isso é mais relevante em saltos indiretos, cujo destino vem de um registrador ou da memória.

Compare:

| Instrução | Direção | Alvo |
|---|---|---|
| Branch condicional | precisa prever tomado/não tomado | geralmente é um deslocamento codificado na instrução |
| Salto direto incondicional | sempre tomado | normalmente calculável pela própria instrução |
| Salto indireto | sempre tomado | pode variar conforme o valor de um registrador |
| Retorno de função | sempre tomado | depende do endereço de retorno salvo |

Conclusão importante:

```text
BHT/PHT ajuda a prever a direção
BTB ajuda a fornecer o alvo rapidamente
RAS é especializado em alvos de retorno de função
```

---

# 19. Preditor Dinâmico De 1 Bit

O preditor mais simples guarda um bit para representar o resultado mais recente daquele branch:

```text
0 -> prever não tomado (N)
1 -> prever tomado (T)
```

Depois que o resultado real é conhecido, o bit recebe esse resultado:

```text
resultado real N -> estado passa para N
resultado real T -> estado passa para T
```

Ele equivale à regra:

```text
“prever que o branch fará o mesmo que fez na execução anterior”
```

## 19.1 Rastreio Do Preditor De 1 Bit

Considere um loop cujo branch apresenta repetidamente o padrão:

```text
T, T, T, N
```

Ele é tomado três vezes e não tomado ao sair. Começando no estado `N`:

| Execução | Estado antes | Previsão | Resultado real | Acertou? | Estado depois |
|---:|---|---|---|---|---|
| 1 | N | N | T | não | T |
| 2 | T | T | T | sim | T |
| 3 | T | T | T | sim | T |
| 4 | T | T | N | não | N |
| 5 | N | N | T | não | T |

Ao final do loop, a saída `N` muda imediatamente o bit para não tomado. Quando o mesmo loop começa novamente, o primeiro `T` também é previsto errado.

Em regime repetido, o preditor de 1 bit tende a errar:

```text
uma vez na saída do loop
uma vez na primeira iteração da próxima execução do loop
```

Essa sensibilidade a uma única exceção motiva o contador de 2 bits.

---

# 20. Preditor De 2 Bits Com Contador Saturante

O preditor de 2 bits guarda quatro estados:

```text
00 = fortemente não tomado (FNT)
01 = fracamente não tomado  (FrNT)
10 = fracamente tomado      (FrT)
11 = fortemente tomado      (FT)
```

Os dois estados inferiores preveem `N`; os dois superiores preveem `T`:

```text
00 ou 01 -> prever não tomado
10 ou 11 -> prever tomado
```

Atualização:

```text
resultado T -> incrementa o contador, saturando em 11
resultado N -> decrementa o contador, saturando em 00
```

“Saturar” significa não dar a volta:

```text
11 + T continua 11, e não volta para 00
00 + N continua 00, e não vai para 11
```

## 20.1 Máquina De Estados

```text
resultado T: 00 -> 01 -> 10 -> 11 -> 11
resultado N: 11 -> 10 -> 01 -> 00 -> 00

previsão N nos estados 00 e 01
previsão T nos estados 10 e 11
```

A forma segura de resolver qualquer questão é:

```text
T: mover um estado para a direita
N: mover um estado para a esquerda
limitar o movimento aos extremos 00 e 11
previsão: olhar o estado antes de atualizá-lo
```

## 20.2 Rastreio Completo

Use novamente `T, T, T, N, T, T, T, N`, começando em `01`:

| Execução | Estado antes | Previsão | Real | Acertou? | Estado depois |
|---:|---|---|---|---|---|
| 1 | 01 | N | T | não | 10 |
| 2 | 10 | T | T | sim | 11 |
| 3 | 11 | T | T | sim | 11 |
| 4 | 11 | T | N | não | 10 |
| 5 | 10 | T | T | sim | 11 |
| 6 | 11 | T | T | sim | 11 |
| 7 | 11 | T | T | sim | 11 |
| 8 | 11 | T | N | não | 10 |

Após o aquecimento, uma única saída `N` apenas enfraquece a confiança de `11` para `10`; a próxima entrada no loop ainda é prevista como tomada.

Isso é a **histerese** do preditor de 2 bits:

```text
uma ocorrência contrária isolada normalmente não inverte a direção prevista
```

Pegadinha central:

```text
2 bits não significam “guardar exatamente os dois últimos resultados”
```

Eles formam um contador de confiança com quatro estados.

---

# 21. BHT E PHT

Os contadores não ficam “soltos”. Eles são armazenados em tabelas consultadas durante a busca de instruções.

## 21.1 BHT — Branch History Table

Em uma organização simples, a `BHT` é indexada por alguns bits do PC do branch e guarda o estado do preditor:

```text
PC do branch -> índice -> contador de 1 ou 2 bits -> previsão T/N
```

Exemplo:

```text
PC = 0x12C
bits usados como índice = 1011
BHT[1011] = 10
previsão = tomado
```

## 21.2 PHT — Pattern History Table

Em preditores que usam um padrão de histórico, a `PHT` guarda contadores associados a esse padrão:

```text
histórico observado -> índice da PHT -> contador saturante -> previsão
```

A nomenclatura varia entre livros: alguns chamam de BHT a própria tabela de contadores; outros distinguem uma tabela/registrador de histórico da PHT. Em questão objetiva, observe a função descrita:

```text
tabela de contadores -> fornece previsão T/N
tabela/registrador de histórico -> registra resultados passados
```

Nenhuma dessas tabelas “executa” a condição do branch. A condição real ainda será avaliada pelo caminho de dados; a tabela apenas faz uma aposta antecipada.

---

# 22. BTB — Branch Target Buffer

O `BTB` guarda informações sobre branches já encontrados, principalmente seus alvos.

Consulta conceitual:

```text
PC atual -> BTB
se houver hit -> branch conhecido + alvo previsto disponível
se não houver hit -> alvo não está disponível pelo BTB
```

Uma entrada normalmente possui:

```text
tag para identificar o PC do branch
endereço alvo previsto
eventuais bits auxiliares
```

O BTB se parece conceitualmente com uma pequena cache, mas guarda metadados de desvio, não blocos comuns de dados.

Exemplo completo:

```text
PC do branch = 0x100
BHT prevê tomado
BTB tem hit e retorna 0x180
próxima busca começa em 0x180
```

Se o resultado real for não tomado, a previsão de direção errou e as instruções de `0x180` precisam de flush.

Em um salto indireto, também pode ocorrer:

```text
direção “tomado” correta
alvo previsto incorreto
```

Isso continua sendo uma predição incorreta do próximo PC.

---

# 23. RAS — Return Address Stack

Chamadas de função podem ocorrer várias vezes para a mesma função, vindas de lugares diferentes. Por isso um único alvo antigo no BTB pode ser insuficiente para prever o retorno.

A `RAS` é uma pequena pilha de endereços de retorno:

```text
CALL -> empilha o endereço para o qual a função deve retornar
RET  -> consulta/remove o endereço no topo
```

Exemplo:

```text
main chama A       -> empilha retorno para main
A chama B          -> empilha retorno para A
B retorna          -> topo aponta para A
A retorna          -> novo topo aponta para main
```

Portanto:

```text
BTB = mecanismo geral de alvo
RAS = mecanismo especializado em retornos aninhados
```

A RAS pode errar em situações como profundidade maior que sua capacidade, retorno atípico ou fluxo que não segue pares normais de chamada/retorno.

---

# 24. Preditores Locais E Globais Em Mais Detalhe

## 24.1 Histórico Local

Um histórico local guarda uma sequência recente para um branch específico.

Exemplo de padrão alternado:

```text
T, N, T, N, T, N...
```

Um simples contador de 2 bits pode oscilar e ter dificuldade. Um histórico local de dois resultados pode aprender que:

```text
depois de T vem N
depois de N vem T
```

Organização conceitual:

```text
PC -> histórico local daquele branch -> PHT -> contador/previsão
```

## 24.2 Histórico Global

Um registrador global (`GHR`) registra os resultados dos últimos branches executados, mesmo que sejam instruções diferentes.

Exemplo com 4 bits:

```text
GHR = T N T T
```

Isso permite captar correlações como:

```text
“se o branch anterior foi tomado, este normalmente não é tomado”
```

Organização conceitual:

```text
GHR, possivelmente combinado com bits do PC -> PHT -> previsão
```

Alguns preditores combinam bits do PC com o histórico global por XOR; um exemplo conhecido é o `gshare`. Para esta aula, o importante é reconhecer que isso tenta separar padrões e reduzir colisões, não decorar um circuito específico.

## 24.3 Qual É Melhor?

Não existe vencedor universal:

```text
local -> bom para padrão próprio e repetitivo de um branch
global -> bom para correlação entre branches diferentes
```

Processadores podem usar preditores híbridos e escolher dinamicamente qual previsão parece mais confiável.

---

# 25. Aliasing, Aquecimento E Capacidade

Uma tabela finita usa somente parte dos bits do PC. Assim, branches diferentes podem cair na mesma entrada.

Isso é chamado de:

```text
aliasing ou colisão
```

Exemplo:

```text
branch A e branch B usam o mesmo índice da BHT
A costuma ser tomado
B costuma ser não tomado
```

Cada um pode desfazer o aprendizado do outro. Isso é aliasing destrutivo.

Também pode ocorrer compartilhamento sem prejuízo, ou até útil, quando os comportamentos são parecidos.

Outros conceitos:

```text
aquecimento (warm-up) = tabela ainda não aprendeu o comportamento
capacidade = número limitado de entradas
troca de contexto = outro programa pode alterar ou invalidar o estado, conforme a arquitetura
```

Tabela maior tende a reduzir colisões, mas custa mais área, energia e tempo de acesso.

---

# 26. Acurácia, Taxa De Erro E CPI

Acurácia da predição:

```text
acurácia = previsões corretas / total de branches
```

Taxa de erro:

```text
taxa de erro = previsões incorretas / total de branches
taxa de erro = 1 - acurácia
```

Exemplo:

```text
900 acertos em 1000 branches
acurácia = 900/1000 = 90%
taxa de erro = 10%
```

Uma aproximação muito usada para o CPI é:

```text
CPI ≈ CPI ideal + frequência de branches × taxa de erro × penalidade por erro
```

## 26.1 Exemplo Numérico

Dados:

```text
CPI ideal = 1
20% das instruções são branches
acurácia = 90%, então taxa de erro = 10%
penalidade = 5 ciclos por erro
```

Cálculo:

```text
CPI ≈ 1 + 0,20 × 0,10 × 5
CPI ≈ 1 + 0,10
CPI ≈ 1,10
```

Interpretação:

```text
somente 2% de todas as instruções geram erro
cada erro acrescenta 5 ciclos
o acréscimo médio é 0,10 ciclo por instrução
```

Pegadinha: não multiplique a penalidade por todos os branches. Ela é paga pelos branches previstos incorretamente.

## 26.2 O Que Determina O Custo Real?

O impacto cresce com:

```text
mais branches no programa
menor acurácia
maior profundidade até resolver o branch
maior penalidade de recuperação
```

Uma acurácia alta não torna a penalidade zero; apenas diminui sua frequência.

---

# 27. Comparação Dos Mecanismos

| Mecanismo | O que tenta prever/guardar | Usa histórico? | Erro típico |
|---|---|---:|---|
| Sempre não tomado | direção | não | loops tomados |
| Sempre tomado | direção | não | branches normalmente não tomados |
| Preditor de 1 bit | último resultado/direção | sim | muda com uma exceção isolada |
| Contador de 2 bits | tendência com histerese | sim | demora a adaptar quando o comportamento realmente muda |
| Histórico local | padrão do próprio branch | sim | padrões longos ou colisões |
| Histórico global | correlação entre branches | sim | interferência entre contextos/padrões |
| BTB | alvo do branch | aprende alvos | miss ou alvo indireto diferente |
| RAS | alvo de retorno de função | pilha de chamadas | estouro ou retorno atípico |

---

# 28. O Que A Prova Pode Perguntar?

Perguntas prováveis:

```text
O que é branch prediction?
Por que ela existe?
O que é predição estática?
O que é predição dinâmica?
O que significa prever sempre tomado?
O que acontece se a predição erra?
Qual hazard branch causa?
Qual a diferença entre prever direção e alvo?
Como atualizar um contador saturante de 2 bits?
Qual a função de BHT/PHT, BTB e RAS?
Como calcular acurácia, taxa de erro ou CPI aproximado?
```

Respostas-chave:

```text
branch causa hazard de controle
predição tenta escolher próximo PC antes da confirmação
estática usa regra fixa
dinâmica usa histórico
erro causa flush e penalidade
BHT/PHT fornece informação para direção
BTB fornece alvo antecipado
RAS prevê retornos de funções
```

---

# 29. Pegadinhas

## 29.1 Predição Estática Não Usa Histórico

Se a alternativa fala:

```text
usa histórico local
usa histórico global
adapta ao comportamento
```

Então não é estática.

---

## 29.2 Sempre Tomado É Estática

Assumir:

```text
todos os desvios serão tomados
```

é:

```text
predição estática de desvios tomados
```

---

## 29.3 Branch Prediction Não Resolve Hazard De Dados

Branch prediction ajuda hazard de controle.

Não resolve:

```text
LW seguido de ADD usando o dado carregado
```

Isso é hazard de dados/load-use.

---

## 29.4 Erro De Predição Não É Overflow

Erro de predição significa caminho de instruções errado.

Não tem relação direta com overflow aritmético.

---

## 29.5 Acertar Predição Não Muda Resultado Do Programa

Branch prediction não deve mudar o resultado final correto.

Ela é otimização de desempenho.

Se errar, o processador corrige descartando o caminho errado.

## 29.6 BTB Não Decide A Condição

O BTB pode fornecer um alvo antecipado, mas não compara registradores nem decide o resultado real de um `BEQ`.

```text
predição = aposta antecipada
execução do branch = confirmação da condição real
```

## 29.7 Estado É Consultado Antes Da Atualização

Em rastreios de preditor:

```text
1. leia o estado atual
2. faça a previsão
3. compare com o resultado real
4. atualize o estado
```

Atualizar antes de decidir se houve acerto produz resposta errada.

## 29.8 Dois Bits Não Significam Duas Chances Sem Penalidade

O contador de 2 bits não elimina erros. Partindo de um estado **forte** (`00` ou `11`), são necessários dois resultados contrários consecutivos para cruzar o limiar e inverter a direção prevista. Partindo de um estado **fraco** (`01` ou `10`), um único resultado contrário já pode cruzar esse limiar. Portanto, sempre observe o estado inicial; “dois erros para mudar” não é uma regra universal.

## 29.9 Direção Correta Com Alvo Errado Ainda É Problema

Prever “tomado” corretamente não basta se o próximo PC previsto estiver errado, especialmente em saltos indiretos.

---

# 30. Resumo De Prova

```text
branch prediction = prever se branch será tomado
tomado = PC vai para alvo
não tomado = PC segue sequencial
motivo = reduzir stalls por hazard de controle
estática = regra fixa
sempre tomado = predição estática
dinâmica = usa histórico de execução
local = histórico do próprio branch
global = histórico de vários branches
preditor de 1 bit = repete o último resultado
preditor de 2 bits = contador saturante com histerese
00/01 preveem N; 10/11 preveem T
BHT/PHT = tabelas usadas para produzir previsão de direção
BTB = guarda/prevê alvo
RAS = pilha para prever endereço de retorno
aliasing = branches diferentes compartilham uma entrada
acurácia = acertos / branches
taxa de erro = 1 - acurácia
CPI ≈ CPI ideal + frequência de branches × taxa de erro × penalidade
erro = misprediction
erro causa = flush + penalidade de ciclos
```

---

# 31. Exercícios

1. O que é branch prediction?
2. O que significa branch tomado?
3. O que significa branch não tomado?
4. Qual tipo de hazard um branch pode causar?
5. O que é predição estática?
6. O que é predição dinâmica?
7. A estratégia “sempre tomado” é estática ou dinâmica?
8. O que acontece quando a predição erra?
9. Por que loops costumam favorecer predição de branch para trás como tomado?
10. Qual é a diferença entre histórico local e global?
11. Qual é a diferença entre prever a direção e prever o alvo?
12. O que o BTB fornece antecipadamente?
13. Para que serve uma RAS?
14. O que significa aliasing em uma BHT/PHT?
15. Por que o preditor de 2 bits é menos sensível a uma saída isolada de loop?

## Múltipla Escolha

16. Assumir que todos os branches serão tomados é:

- A) predição dinâmica local.
- B) predição estática de desvios tomados.
- C) hazard estrutural.
- D) forwarding.

17. Branch prediction tenta reduzir:

- A) hazard de controle.
- B) overflow de complemento de 2.
- C) erro de paridade.
- D) refresh de DRAM.

18. Quando a predição de branch erra, normalmente ocorre:

- A) flush das instruções do caminho errado.
- B) eliminação permanente do PC.
- C) conversão automática para BCD.
- D) escrita obrigatória em todos os registradores.

19. Predição dinâmica é caracterizada por:

- A) usar uma regra fixa sem observar execução.
- B) usar histórico/comportamento em tempo de execução.
- C) nunca errar.
- D) não funcionar em pipeline.

20. Um branch de loop geralmente é:

- A) tomado várias vezes e não tomado na saída.
- B) nunca tomado.
- C) sempre erro de cache.
- D) sempre uma instrução de ponto flutuante.

21. Um contador saturante está em `10`. Ele prevê ___; após resultado real `N`, passa para ___:

- A) tomado; `01`.
- B) tomado; `10`.
- C) não tomado; `11`.
- D) não tomado; `00`.

22. Um contador está em `00` e recebe três resultados `T, T, N`. Quais são os estados depois de cada atualização?

- A) `01, 10, 01`.
- B) `11, 00, 01`.
- C) `01, 11, 10`.
- D) `00, 01, 00`.

23. Qual mecanismo é mais especializado para prever o alvo de `RET`?

- A) RAS.
- B) ULA.
- C) PHT sem qualquer endereço.
- D) cache de dados.

24. Um processador tem CPI ideal 1, 25% de branches, acurácia de 92% e penalidade de 4 ciclos. O CPI aproximado é:

- A) 1,02.
- B) 1,08.
- C) 1,25.
- D) 1,92.

25. Dois branches diferentes alteram o mesmo contador porque usam o mesmo índice da tabela. Isso é:

- A) forwarding.
- B) normalização.
- C) aliasing.
- D) underflow.

## Rastreios

26. Um preditor de 1 bit começa em `N`. Para a sequência real `T, T, N, T`, escreva previsão, acerto/erro e novo estado em cada passo.

27. Um preditor de 2 bits começa em `01`. Para `T, T, N, N, N`, escreva o estado antes, a previsão e o estado depois.

28. Uma execução possui 200 branches e 170 previsões corretas. Calcule acurácia e taxa de erro.

29. Um programa executa 10.000 instruções, das quais 20% são branches. O preditor erra 5% desses branches e cada erro custa 6 ciclos. Quantos ciclos extras são causados por erros?

30. Um preditor indica “tomado” e o BTB fornece `0x400`, mas o salto indireto realmente vai para `0x500`. A direção foi prevista corretamente? A previsão completa do próximo PC foi correta?

---

# 32. Gabarito

1. Técnica para prever se um desvio será tomado ou não.
2. PC recebe o alvo do branch.
3. PC segue para a próxima instrução sequencial.
4. Hazard de controle.
5. Predição baseada em regra fixa.
6. Predição baseada em histórico/comportamento.
7. Estática.
8. Instruções erradas são descartadas e há penalidade.
9. Porque o retorno do loop costuma ser tomado repetidamente até a saída.
10. Local observa o próprio branch; global observa padrão de vários branches.
11. Direção indica tomado/não tomado; alvo indica o endereço do próximo PC quando tomado.
12. O endereço alvo previsto de um branch conhecido.
13. Guardar e prever endereços de retorno seguindo a ordem das chamadas.
14. Branches diferentes compartilharem a mesma entrada da tabela.
15. Porque possui histerese: um único resultado contrário geralmente só enfraquece o estado, sem inverter a direção prevista.
16. B.
17. A.
18. A.
19. B.
20. A.
21. A.
22. A.
23. A.
24. B. `1 + 0,25 × 0,08 × 4 = 1,08`.
25. C.
26. `N/T`: erro, estado `T`; `T/T`: acerto, estado `T`; `T/N`: erro, estado `N`; `N/T`: erro, estado `T`.
27. `01` prevê N e, com T, vai a `10`; `10` prevê T e, com T, vai a `11`; `11` prevê T e, com N, vai a `10`; `10` prevê T e, com N, vai a `01`; `01` prevê N e, com N, vai a `00`.
28. Acurácia `170/200 = 85%`; taxa de erro `15%`.
29. Há `10.000 × 0,20 = 2.000` branches; `2.000 × 0,05 = 100` erros; ciclos extras `100 × 6 = 600`.
30. A direção “tomado” foi correta, mas o alvo estava errado; portanto, a previsão completa do próximo PC foi incorreta.
