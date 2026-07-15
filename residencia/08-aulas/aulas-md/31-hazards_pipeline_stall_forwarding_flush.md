# Aula Detalhada - Hazards De Pipeline, Stall, Forwarding E Flush

**Tema do dia:** hazards de pipeline, hazard estrutural, hazard de dados, hazard de controle, dependências RAW/WAR/WAW em nível conceitual, stall, bolha, forwarding, bypassing, flush e load-use hazard  
**Aula na sequência:** 31  
**Objetivo:** entender por que pipelines podem executar instruções incorretamente se dependências não forem tratadas, diferenciar os tipos de hazards e reconhecer as soluções típicas em questões de prova.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 30, você viu que pipeline sobrepõe instruções.

Exemplo:

```text
ciclo 1: I1 IF
ciclo 2: I1 ID   | I2 IF
ciclo 3: I1 EX   | I2 ID   | I3 IF
```

Isso aumenta a vazão.

Mas cria problemas.

Se uma instrução depende do resultado de outra que ainda não terminou, o que acontece?

Se duas instruções querem usar o mesmo hardware no mesmo ciclo, o que acontece?

Se um branch muda o PC, o que acontece com as instruções que já foram buscadas?

Esses problemas são chamados:

```text
hazards
```

---

# 2. Ideia Central

Hazard é uma situação que pode impedir a próxima instrução de executar corretamente no ciclo esperado.

Em português:

```text
risco
perigo
conflito
```

No contexto de pipeline:

```text
hazard = algo que ameaça a execução correta ou o fluxo ideal do pipeline
```

Principais tipos:

```text
hazard estrutural
hazard de dados
hazard de controle
```

Soluções comuns:

```text
stall
forwarding
flush
branch prediction
```

---

# 3. Hazard Estrutural

Hazard estrutural ocorre quando duas ou mais instruções precisam do mesmo recurso de hardware ao mesmo tempo.

Exemplo:

```text
uma instrução quer buscar instrução na memória
outra quer acessar dado na mesma memória
```

Se houver apenas uma memória para instruções e dados, pode haver conflito.

Outro exemplo:

```text
duas operações precisam da mesma unidade funcional no mesmo ciclo
```

Solução possível:

```text
duplicar recurso
separar memória de instruções e dados
inserir stall
```

Em arquitetura didática:

```text
memória separada de instruções e dados ajuda a evitar hazard estrutural
```

---

## 3.1 Exemplo Rastreado De Hazard Estrutural

Suponha uma única memória de porta única para instruções e dados.

Num ciclo qualquer:

```text
I1: LW está no estágio MEM e precisa ler um dado
I4: está no estágio IF e precisa buscar uma instrução
```

Os dois acessos querem a mesma memória no mesmo ciclo. Como existe apenas uma porta, só um pode ocorrer.

Soluções possíveis:

```text
dar prioridade ao LOAD e parar IF por um ciclo
usar memórias/caches separadas para instruções e dados
usar memória com portas suficientes, se a implementação permitir
```

Se a questão disser “memória única e de porta única”, desconfie de conflito entre `IF` e `MEM`. Se disser “cache de instruções e cache de dados separadas”, esse conflito específico foi removido, embora outros hazards ainda possam existir.

Um hazard estrutural não implica dependência entre valores. Mesmo instruções totalmente independentes podem disputar o mesmo recurso.

---

# 4. Hazard De Dados

Hazard de dados ocorre quando uma instrução depende de dado produzido por outra instrução ainda não concluída.

Exemplo:

```text
ADD R1, R2, R3
SUB R4, R1, R5
```

A segunda instrução precisa de `R1`.

Mas `R1` é produzido pela primeira.

No pipeline, a segunda pode tentar ler `R1` antes da primeira escrever o novo valor.

Isso gera hazard de dados.

---

# 5. RAW - Read After Write

O hazard de dados mais importante em pipelines simples é RAW.

RAW significa:

```text
Read After Write
ler depois de escrever
```

Uma instrução precisa ler um registrador depois que outra escrever nele.

Exemplo:

```text
I1: ADD R1, R2, R3
I2: SUB R4, R1, R5
```

`I2` deve ler o valor novo de `R1`.

Mas se ela ler cedo demais, pega o valor antigo.

Esse é o tipo que mais aparece em prova básica.

---

# 6. WAR E WAW

Em pipelines simples em ordem, WAR e WAW normalmente não são o foco.

Mas vale reconhecer os nomes.

WAR:

```text
Write After Read
uma instrução escreve em um registrador antes de outra conseguir ler o valor antigo
```

WAW:

```text
Write After Write
duas instruções escrevem no mesmo registrador fora da ordem esperada
```

Esses aparecem mais em processadores com execução fora de ordem.

Para sua prova:

```text
prioridade = RAW
```

## 6.1 Por Que WAR Não Aparece No Pipeline Simples?

Considere:

```text
I1: ADD R4, R1, R2   ; I1 precisa ler R1
I2: SUB R1, R5, R6   ; I2 escreve R1
```

Para haver WAR, `I2` teria de escrever `R1` antes que `I1` lesse o valor antigo.

No pipeline didático de 5 estágios executado em ordem:

```text
as instruções entram em ordem
as leituras de registradores ocorrem em ID
as escritas ocorrem mais tarde, em WB
```

`I1`, por ser mais antiga, chega a ID antes de `I2` chegar a WB. Portanto, a leitura antiga acontece primeiro e não há WAR.

## 6.2 Por Que WAW Não Aparece No Pipeline Simples?

Considere:

```text
I1: ADD R1, R2, R3
I2: SUB R1, R4, R5
```

As duas escrevem `R1`. O resultado correto ao final deve ser o de `I2`, a instrução mais nova.

No pipeline simples, com avanço e escrita em ordem:

```text
I1 alcança WB antes de I2
I2 escreve depois
ordem final é preservada
```

Logo, WAW não se manifesta nesse modelo.

A conclusão de prova é:

```text
pipeline simples, em ordem, com leitura em ID e escrita em WB -> RAW é o hazard de nomes relevante
WAR e WAW exigem reordenação de leituras/escritas ou latências diferentes fora desse modelo
```

Não é necessário aprofundar execução fora de ordem. Apenas não generalize dizendo que WAR e WAW nunca existem em processadores; eles normalmente não aparecem **neste pipeline didático**.

---

# 7. Stall

Stall é uma parada temporária no pipeline.

O processador segura uma ou mais instruções por um ciclo ou mais para esperar algo ficar pronto.

Stall cria uma bolha.

Exemplo:

```text
I1 produz R1
I2 precisa de R1
I2 espera um ciclo
```

Stall resolve o problema, mas reduz desempenho.

Porque:

```text
um ciclo passa sem avanço útil completo
```

Frase de prova:

```text
stall preserva correção, mas reduz throughput
```

---

# 8. Bolha

Bolha é o espaço vazio causado por stall.

Visualmente:

```text
ciclo 1: I1 IF
ciclo 2: I1 ID | I2 IF
ciclo 3: I1 EX | I2 ID
ciclo 4: I1 MEM | bolha | I2 espera
ciclo 5: I1 WB | I2 EX
```

A bolha anda pelo pipeline como uma instrução vazia.

Ela não faz trabalho útil.

---

# 9. Forwarding / Bypassing

Forwarding, também chamado bypassing, é encaminhar um resultado diretamente de um estágio posterior para um estágio que precisa dele.

Sem esperar o resultado ser escrito no banco de registradores.

Exemplo:

```text
I1: ADD R1, R2, R3
I2: SUB R4, R1, R5
```

O resultado de `ADD` pode estar disponível no fim de EX.

Em vez de esperar WB, o processador encaminha esse valor diretamente para a entrada da ULA da instrução seguinte.

Ideia:

```text
não espera escrever no registrador
manda direto para quem precisa
```

Forwarding reduz stalls.

Mas não resolve todos os casos.

---

## 9.1 RAW Sem Forwarding

Considere novamente:

```text
I1: ADD R1, R2, R3
I2: SUB R4, R1, R5
```

Num pipeline de 5 estágios:

```text
I1 produz o resultado da ADD ao final de EX
I1 só escreve R1 no banco em WB
I2 lê seus operandos em ID e precisa deles na entrada de EX
```

Sem forwarding, `I2` teria de esperar o valor chegar ao banco de registradores. Dependendo da convenção de leitura e escrita no mesmo ciclo, o cronograma pode mostrar duas ou três esperas. A prova normalmente informa a convenção ou pede apenas o conceito.

O ponto invariável é:

```text
sem forwarding -> esperar WB
com forwarding -> usar o resultado antes de WB
```

---

## 9.2 Caminho EX/MEM Para EX

Os nomes `EX/MEM` e `MEM/WB` são registradores de pipeline:

```text
EX/MEM = guarda o que saiu de EX e seguirá para MEM
MEM/WB = guarda o que saiu de MEM e seguirá para WB
```

Veja o cronograma sem stall:

| Instrução | C1 | C2 | C3 | C4 | C5 | C6 |
|---|---|---|---|---|---|---|
| I1: `ADD R1,R2,R3` | IF | ID | EX | MEM | WB |  |
| I2: `SUB R4,R1,R5` |  | IF | ID | EX | MEM | WB |

Ao final de `C3`, a ADD calculou `R1`. O valor está no registrador `EX/MEM`.

Em `C4`, a SUB entra em EX e precisa desse valor. O hardware encaminha:

```text
EX/MEM da I1 -> entrada da ULA na EX da I2
```

Esse é o caso clássico de forwarding entre instruções aritméticas consecutivas.

Pegadinha:

```text
I2 pode ter lido um valor antigo de R1 em ID
o multiplexador de forwarding substitui esse operando pela versão nova na entrada da ULA
```

---

## 9.3 Caminho MEM/WB Para EX

Agora existe uma instrução independente entre produtora e consumidora:

```text
I1: ADD R1, R2, R3
I2: AND R8, R9, R10
I3: SUB R4, R1, R5
```

| Instrução | C1 | C2 | C3 | C4 | C5 | C6 | C7 |
|---|---|---|---|---|---|---|---|
| I1: ADD | IF | ID | EX | MEM | WB |  |  |
| I2: AND |  | IF | ID | EX | MEM | WB |  |
| I3: SUB |  |  | IF | ID | EX | MEM | WB |

Em `C5`, `I3` está em EX. O resultado de `I1` já avançou até `MEM/WB` e pode ser encaminhado por:

```text
MEM/WB da I1 -> entrada da ULA na EX da I3
```

Resumo:

```text
dependência da instrução imediatamente anterior -> frequentemente EX/MEM -> EX
dependência com uma instrução de intervalo -> frequentemente MEM/WB -> EX
```

Se tanto `EX/MEM` quanto `MEM/WB` possuem versões do mesmo registrador, deve ser escolhida a versão mais recente, normalmente a de `EX/MEM`.

Exemplo:

```text
I1: ADD R1, R2, R3
I2: SUB R1, R1, R4
I3: AND R5, R1, R6
```

`I3` precisa do `R1` produzido por `I2`, não do valor mais antigo produzido por `I1`.

---

## 9.4 Regra Conceitual De Detecção Do Forwarding

Para cada operando fonte usado em EX, o hardware compara seu número de registrador com destinos de instruções à frente no pipeline.

Em linguagem conceitual:

```text
se EX/MEM vai escrever registrador,
   destino = fonte atual
   e o valor já está pronto para a EX atual
    encaminhar EX/MEM
senão, se MEM/WB vai escrever registrador e destino = fonte atual
    encaminhar MEM/WB
senão
    usar valor lido do banco de registradores
```

Também é preciso verificar se a instrução realmente escreve registrador. Uma STORE ou branch normalmente não deve disparar forwarding de um suposto destino.

A condição “valor já está pronto” é essencial. Para um `LOAD` em `EX/MEM`, esse registrador ainda pode conter apenas o endereço calculado; o dado carregado nasce no estágio MEM. Se a instrução seguinte já precisar dele, a unidade de hazards deve inserir o stall de load-use explicado adiante. Só depois o valor poderá ser encaminhado pelo caminho adequado.

Não é necessário decorar equações de controle; saiba identificar produtor, consumidor, registrador envolvido e momento em que o valor fica disponível.

---

# 10. Load-Use Hazard

Load-use é um caso muito importante.

Exemplo:

```text
LW  R1, 0(R2)
ADD R3, R1, R4
```

A primeira instrução carrega `R1` da memória.

A segunda usa `R1` imediatamente.

Problema:

```text
o dado do LOAD só fica pronto depois do estágio MEM
```

Mas a instrução seguinte precisa dele no estágio EX.

Mesmo com forwarding comum, pode ser tarde demais.

Por isso, em pipeline clássico de 5 estágios:

```text
load-use normalmente exige 1 stall
```

Essa é uma pegadinha muito provável.

---

# 11. Por Que Forwarding Não Resolve Sempre O Load-Use?

Considere:

```text
LW  R1, 0(R2)
ADD R3, R1, R4
```

Linha do tempo simplificada:

```text
ciclo 1: LW IF
ciclo 2: LW ID | ADD IF
ciclo 3: LW EX | ADD ID
ciclo 4: LW MEM | ADD EX
```

No ciclo 4:

```text
LW está obtendo o dado da memória
ADD já precisa do operando em EX
```

O dado chega tarde para a EX da ADD naquele mesmo ciclo, dependendo do modelo.

Então é inserido um stall:

```text
LW  R1, 0(R2)
stall
ADD R3, R1, R4
```

Depois disso, o dado pode ser encaminhado.

---

## 11.1 Cronograma Completo Do Load-Use

Considere:

```text
I1: LW  R1, 0(R2)
I2: ADD R3, R1, R4
```

Com forwarding e um stall:

| Instrução | C1 | C2 | C3 | C4 | C5 | C6 | C7 |
|---|---|---|---|---|---|---|---|
| I1: LW | IF | ID | EX | MEM | WB |  |  |
| I2: ADD |  | IF | ID | espera | EX | MEM | WB |
| Bolha |  |  |  | EX | MEM | WB |  |

Leitura ciclo a ciclo:

```text
C3: LW calcula o endereço em EX; ADD está em ID
C4: LW lê a memória em MEM; ADD é impedida de entrar em EX
fim de C4: dado carregado fica disponível
C5: dado é encaminhado para a EX da ADD
```

Quando o hazard é detectado, o comportamento conceitual é:

```text
congelar o PC por um ciclo
manter a instrução dependente no registrador IF/ID
inserir uma operação neutra, ou bolha, em ID/EX
```

A bolha avança pelos estágios, mas não altera registrador nem memória.

Pegadinha: forwarding não “viaja para trás no tempo”. O resultado do LOAD nasce somente ao final de MEM. Sem a espera, a ADD precisaria dele no início de EX no mesmo ciclo.

---

## 11.2 Como Evitar A Bolha Com Escalonamento

Se existir uma instrução independente, o compilador ou programador pode colocá-la entre o LOAD e o uso.

Antes:

```text
LW  R1, 0(R2)
ADD R3, R1, R4    ; depende imediatamente
SUB R8, R9, R10   ; independente
```

Depois de um reordenamento seguro:

```text
LW  R1, 0(R2)
SUB R8, R9, R10   ; ocupa o intervalo
ADD R3, R1, R4
```

Agora, quando a ADD chegar a EX, o valor do LOAD já estará mais adiante e poderá ser encaminhado.

Isso é **instruction scheduling**, ou escalonamento de instruções.

O reordenamento só é válido se preservar o comportamento do programa. Não se pode mover uma instrução que:

```text
depende do LOAD
altera um operando necessário
modifica memória de modo conflitante
muda o fluxo de controle de forma incorreta
```

Para a prova, procure uma instrução realmente independente para preencher o espaço.

---

# 12. Hazard De Controle

Hazard de controle ocorre quando o fluxo de instruções depende de branch, jump ou chamada.

Exemplo:

```text
BEQ R1, R2, alvo
```

Enquanto o processador ainda não sabe se o branch será tomado, ele pode já ter buscado instruções seguintes.

Se o branch for tomado, as instruções buscadas no caminho errado precisam ser descartadas.

Isso é hazard de controle.

Soluções:

```text
stall até decidir o branch
branch prediction
flush das instruções erradas
calcular branch mais cedo
```

---

# 13. Flush

Flush é descartar instruções que entraram no pipeline mas não devem ser executadas.

Exemplo:

```text
processador previu branch não tomado
mas branch foi tomado
```

As instruções buscadas após o branch pertencem ao caminho errado.

Então:

```text
flush
```

Elas são anuladas.

Isso também cria perda de ciclos.

Diferença:

```text
stall = esperar
flush = descartar trabalho errado
```

---

## 13.1 Cronograma De Branch Resolvido Em EX

Considere que o resultado de um branch só é conhecido no estágio EX:

```text
I1: BEQ R1, R2, ALVO
I2: instrução sequencial
I3: outra instrução sequencial
```

| Instrução | C1 | C2 | C3 | C4 | C5 |
|---|---|---|---|---|---|
| I1: BEQ | IF | ID | EX/decide | MEM | WB |
| I2 |  | IF | ID | seria EX |  |
| I3 |  |  | IF | seria ID |  |

Ao final de `C3`, se o branch for tomado e `I2` e `I3` pertencerem ao caminho errado:

```text
I2 é anulada
I3 é anulada
busca recomeça no ALVO
```

Nesse modelo, há duas instruções jovens no caminho errado, portanto uma penalidade típica pode ser de 2 ciclos. Porém, a penalidade depende de onde o branch é resolvido e da convenção do enunciado.

```text
branch resolvido mais cedo -> menos instruções erradas no pipeline
branch resolvido mais tarde -> potencialmente mais trabalho descartado
```

Não memorize “todo branch custa 2 ciclos”. Use o estágio de resolução e os dados fornecidos pela questão.

---

## 13.2 Stall De Branch Versus Previsão E Flush

Há duas estratégias didáticas:

### Esperar A Decisão

```text
buscar branch
parar novas buscas até conhecer o próximo PC
```

Vantagem:

```text
não executa caminho errado
```

Custo:

```text
paga espera em todo branch
```

### Prever E Continuar

```text
escolher um caminho provável
continuar buscando sem parar
```

Se acertar, não há descarte por essa decisão. Se errar, ocorre flush e paga-se a penalidade.

Portanto:

```text
stall preventivo = espera mesmo antes de saber se o caminho estaria errado
flush = reação após descobrir que instruções especuladas estão erradas
```

---

# 14. Branch Prediction

Branch prediction tenta prever o resultado de desvios para não parar o pipeline.

Exemplo:

```text
assume que o branch será tomado
busca instruções do alvo
```

Se acertar:

```text
ganha desempenho
```

Se errar:

```text
flush e penalidade
```

A próxima aula aprofunda branch prediction.

Por enquanto, entenda:

```text
branch prediction é uma solução para hazard de controle
```

---

# 15. Comparação Dos Hazards

| Tipo | Causa | Exemplo | Solução |
|---|---|---|---|
| Estrutural | Recurso único disputado | uma memória para IF e MEM | duplicar recurso ou stall |
| Dados | Dependência de valor | ADD produz R1, SUB usa R1 | forwarding ou stall |
| Controle | PC depende de branch/jump | BEQ decide próximo PC | prediction, stall ou flush |

---

# 16. Detecção De Hazards

O processador pode ter lógica de detecção de hazards.

Ela observa:

```text
registradores fonte da instrução atual
registradores destino de instruções anteriores
tipo da instrução anterior
sinais de controle
```

Exemplo de load-use:

```text
instrução anterior é LOAD
destino do LOAD = R1
instrução atual usa R1
```

Então a lógica decide:

```text
inserir stall
```

---

## 16.1 Efeito Dos Hazards No Número De Ciclos

Para `n` instruções em um pipeline de `k` estágios:

```text
ciclos ideais = k + n - 1
```

Se os hazards acrescentam penalidades:

```text
ciclos reais = k + n - 1 + stalls + ciclos de flush + outras esperas
```

Exemplo:

```text
k = 5
n = 30
4 stalls de load-use, cada um com 1 ciclo
2 previsões erradas, cada uma com penalidade de 2 ciclos
```

Então:

```text
base = 5 + 30 - 1 = 34
load-use = 4 * 1 = 4
branches = 2 * 2 = 4
total = 34 + 4 + 4 = 42 ciclos
CPI observado no lote = 42 / 30 = 1,4
```

Pegadinha: conte a **penalidade**, não apenas a quantidade de eventos. Duas previsões erradas com custo de 3 ciclos acrescentam 6 ciclos.

---

## 16.2 CPI Médio E Penalidade Esperada

Para uma sequência longa, o CPI pode ser estimado como:

```text
CPI ≈ CPI ideal + penalidades médias por instrução
```

Para branches:

```text
acréscimo de CPI = frequência de branch * taxa de erro * penalidade por erro
```

Exemplo:

```text
20% das instruções são branches
10% desses branches são previstos incorretamente
penalidade = 2 ciclos por erro
```

Então:

```text
acréscimo = 0,20 * 0,10 * 2
acréscimo = 0,04 ciclo por instrução
```

Se o pipeline ideal tem `CPI = 1` e não há outras perdas:

```text
CPI médio ≈ 1,04
```

Para load-use:

```text
acréscimo = frequência de load-use imediato * stalls por ocorrência
```

Exemplo:

```text
8% das instruções iniciam um caso load-use
cada caso custa 1 stall
acréscimo = 0,08 * 1 = 0,08
```

Com os dois efeitos do exemplo:

```text
CPI ≈ 1 + 0,04 + 0,08 = 1,12
```

Essas contas pressupõem que as penalidades podem ser somadas conforme o modelo do enunciado. Não invente taxas ou penalidades que a questão não forneceu.

---

## 16.3 Checklist Para Analisar Uma Sequência

Ao receber algumas instruções assembly, siga esta ordem:

1. Marque o registrador destino de cada instrução.
2. Marque os registradores fonte das instruções seguintes.
3. Procure `destino anterior = fonte posterior`: isso indica RAW.
4. Descubra onde o resultado nasce: fim de EX para ULA, fim de MEM para LOAD.
5. Verifique se forwarding chega a tempo.
6. Se não chegar, insira stall ou procure instrução independente para escalonar.
7. Procure branches/jumps e identifique quando o próximo PC é decidido.
8. Procure recursos compartilhados, se o enunciado mencionar memória ou unidade única.
9. Some as penalidades ao cronograma ideal.

Esse método evita classificar todo atraso como load-use ou todo branch como penalidade fixa.

---

# 17. O Que A Prova Pode Perguntar?

Questões prováveis:

```text
O que é hazard?
Quais são os três tipos principais?
O que é forwarding?
O que é stall?
O que é flush?
Por que load-use pode exigir stall?
Qual hazard ocorre por branch?
Qual hazard ocorre por disputa de hardware?
```

Respostas-chave:

```text
hazard estrutural -> recurso
hazard de dados -> dependência
hazard de controle -> branch/jump
stall -> espera
forwarding -> encaminha resultado antes do writeback
flush -> descarta instruções do caminho errado
load-use -> dado do load chega tarde para uso imediato
```

---

# 18. Pegadinhas

## 18.1 Forwarding Não Resolve Tudo

Forwarding resolve muitos hazards de dados.

Mas load-use imediato pode precisar de stall.

---

## 18.2 Hazard De Controle Não É Hazard De Dados

Se o problema é branch mudando PC:

```text
hazard de controle
```

Se o problema é usar registrador ainda não pronto:

```text
hazard de dados
```

---

## 18.3 Stall E Flush Não São A Mesma Coisa

Stall:

```text
segura esperando
```

Flush:

```text
descarta instruções erradas
```

---

## 18.4 Hazard Estrutural Não É Atraso De Porta

Hazard estrutural em pipeline não é o mesmo que hazard estático/dinâmico de lógica combinacional da Aula 22.

Aqui é conflito de recurso no processador.

Na Aula 22, hazard era glitch por atrasos de portas.

Mesmo nome, contexto diferente.

---

# 19. Resumo De Prova

```text
hazard = situação que impede execução ideal/correta no pipeline
estrutural = conflito por recurso
dados = dependência entre instruções
controle = branch/jump muda fluxo
RAW = ler valor que ainda não foi escrito
stall = esperar/inserir bolha
forwarding = encaminhar resultado antes do WB
EX/MEM -> EX = encaminhamento comum da instrução imediatamente anterior
MEM/WB -> EX = encaminhamento comum quando há maior distância
load-use = LOAD seguido por uso imediato; costuma precisar de stall
flush = descartar instruções buscadas no caminho errado
WAR e WAW = normalmente não aparecem no pipeline simples em ordem
scheduling = mover instrução independente para ocupar uma espera
ciclos reais = k + n - 1 + penalidades
CPI adicional de branch = frequência * taxa de erro * penalidade
```

---

# 20. Exercícios

1. O que é hazard de pipeline?
2. Quais são os três tipos principais de hazards?
3. O que é hazard estrutural?
4. O que é hazard de dados?
5. O que é hazard de controle?
6. O que significa RAW?
7. O que é stall?
8. O que é forwarding?
9. Por que load-use pode exigir stall?
10. O que é flush?

## Múltipla Escolha

11. Considere:

```text
ADD R1, R2, R3
SUB R4, R1, R5
```

O principal problema potencial é:

- A) hazard de controle.
- B) hazard de dados.
- C) hazard estrutural por memória única.
- D) erro de BCD.

12. Considere:

```text
LW  R1, 0(R2)
ADD R3, R1, R4
```

Em pipeline clássico de 5 estágios, isso é:

- A) load-use hazard.
- B) hazard de controle sem dependência.
- C) operação sem dependência.
- D) apenas overflow.

13. Flush significa:

- A) encaminhar resultado direto para a ULA.
- B) descartar instruções erradas no pipeline.
- C) aumentar a cache.
- D) trocar SRAM por DRAM.

14. Forwarding serve para:

- A) reduzir hazards de dados encaminhando resultados antes do writeback.
- B) prever branches.
- C) converter binário para BCD.
- D) remover a necessidade de registradores.

15. Hazard estrutural ocorre quando:

- A) uma instrução depende do resultado anterior.
- B) o PC depende de branch.
- C) duas instruções disputam o mesmo recurso de hardware.
- D) há overflow signed.

## Questões Adicionais

16. Identifique o caminho de forwarding mais provável:

```text
ADD R1, R2, R3
SUB R4, R1, R5
```

17. Identifique o caminho de forwarding mais provável:

```text
ADD R1, R2, R3
AND R8, R9, R10
SUB R4, R1, R5
```

18. Explique por que WAR normalmente não ocorre no pipeline simples de 5 estágios em ordem.
19. Explique por que WAW normalmente não ocorre nesse mesmo pipeline.
20. Reordene, se for seguro, a sequência para esconder um stall de load-use:

```text
LW  R1, 0(R2)
ADD R3, R1, R4
XOR R8, R9, R10
```

21. Um pipeline de 5 estágios executa 30 instruções, sofre quatro stalls de 1 ciclo e dois flushes de 2 ciclos. Quantos ciclos são necessários e qual é o CPI do lote?

22. Em um programa, 25% das instruções são branches, 20% deles são previstos incorretamente e cada erro custa 3 ciclos. Qual é o acréscimo médio de CPI?

23. Para o load-use imediato, qual afirmação é correta?

- A) O valor do LOAD está pronto ao final de EX.
- B) Forwarding comum sempre elimina toda espera.
- C) O dado nasce ao final de MEM e normalmente é necessário um stall antes do uso em EX.
- D) É um hazard de controle.

24. Se `EX/MEM` e `MEM/WB` contêm resultados destinados ao mesmo registrador fonte da instrução atual, deve-se normalmente selecionar:

- A) a versão mais antiga em MEM/WB.
- B) a versão mais recente em EX/MEM.
- C) sempre o valor do banco de registradores.
- D) nenhuma das versões.

25. Uma memória única de porta única é usada para instruções e dados. No mesmo ciclo, uma `LW` está em MEM e outra instrução precisa de IF. O problema é:

- A) hazard estrutural.
- B) RAW.
- C) WAW.
- D) overflow.

26. Um branch é resolvido em EX e há duas instruções mais novas nos estágios ID e IF do caminho errado. O mecanismo apropriado após descobrir o erro é:

- A) forwarding das duas instruções.
- B) flush das duas instruções.
- C) escrever ambas em WB.
- D) transformar o branch em LOAD.

---

# 21. Gabarito

1. Situação que ameaça a execução correta ou ideal no pipeline.
2. Estrutural, dados e controle.
3. Conflito por recurso de hardware.
4. Dependência de valor entre instruções.
5. Problema causado por branch/jump alterando fluxo.
6. Read After Write.
7. Parada temporária que insere bolha.
8. Encaminhamento de resultado antes de ele ser escrito no banco de registradores.
9. Porque o dado do load só fica disponível após MEM, tarde para a instrução seguinte em EX.
10. Descarte de instruções buscadas/executadas no caminho errado.
11. B.
12. A.
13. B.
14. A.
15. C.
16. `EX/MEM -> EX`, pois a produtora aritmética está imediatamente antes da consumidora.
17. `MEM/WB -> EX`, pois existe uma instrução de intervalo.
18. A instrução mais antiga lê seus operandos em ID antes que a instrução mais nova possa escrever em WB.
19. As escritas chegam a WB na ordem do programa nesse modelo, então a instrução mais nova escreve por último, como deveria.
20. Uma ordem possível é `LW R1,0(R2)`; `XOR R8,R9,R10`; `ADD R3,R1,R4`, pois a XOR indicada é independente.
21. Base: `5 + 30 - 1 = 34`; penalidades: `4 + 2*2 = 8`; total: `42 ciclos`; `CPI = 42/30 = 1,4`.
22. `0,25 * 0,20 * 3 = 0,15` ciclo por instrução.
23. C.
24. B.
25. A.
26. B.
