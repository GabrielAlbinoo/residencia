# Aula Detalhada - Pipeline Em Processadores

**Tema do dia:** pipeline, estágios de execução, busca, decodificação, execução, acesso à memória, escrita de volta, throughput, latência, pipeline cheio, bolha e comparação com execução monociclo/multiciclo  
**Aula na sequência:** 30  
**Objetivo:** entender a ideia de pipeline em processadores, por que ele aumenta a vazão de instruções e quais pegadinhas aparecem quando a prova mistura pipeline com frequência, latência e etapas de execução.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 27, você estudou como uma instrução passa pelo datapath.

Você viu etapas como:

```text
fetch
decode
execute
memory
writeback
```

Agora a pergunta é:

```text
o processador precisa terminar uma instrução inteira antes de começar a próxima?
```

Em uma implementação sem pipeline, pode ser assim.

Mas em processadores com pipeline, várias instruções ficam em execução ao mesmo tempo, cada uma em um estágio diferente.

Pipeline é uma técnica para aumentar a quantidade de instruções concluídas por unidade de tempo.

---

# 2. Ideia Central

Pipeline divide a execução de uma instrução em etapas.

Cada etapa faz uma parte do trabalho.

Enquanto uma instrução está em uma etapa, outra pode estar em outra etapa.

Analogia clássica:

```text
linha de montagem
```

Em vez de uma pessoa montar um produto inteiro antes de começar outro, várias estações trabalham ao mesmo tempo:

```text
estação 1 -> prepara
estação 2 -> monta
estação 3 -> testa
estação 4 -> embala
```

No processador:

```text
IF -> busca instrução
ID -> decodifica e lê registradores
EX -> executa operação/calcula endereço
MEM -> acessa memória de dados
WB -> escreve resultado
```

---

# 3. As Cinco Etapas Clássicas

Um pipeline didático comum tem 5 estágios:

```text
IF
ID
EX
MEM
WB
```

Esses nomes aparecem muito em arquitetura.

---

## 3.1 IF - Instruction Fetch

Fetch significa buscar.

IF busca a instrução na memória de instruções ou cache de instruções.

Envolve:

```text
PC
memória de instruções
próximo PC
```

Ideia:

```text
pegar a próxima instrução a executar
```

---

## 3.2 ID - Instruction Decode

Decode significa decodificar.

ID interpreta a instrução.

Nessa etapa, normalmente ocorre:

```text
separar opcode e campos
ler registradores fonte
gerar sinais de controle
estender imediato, se houver
```

Exemplo:

```text
ADD R3, R1, R2
```

ID identifica:

```text
operação = ADD
fontes = R1 e R2
destino = R3
```

---

## 3.3 EX - Execute

EX é a etapa de execução.

Normalmente usa a ULA.

Pode fazer:

```text
soma
subtração
AND/OR
comparação de branch
cálculo de endereço
```

Exemplo LOAD:

```text
LW R1, 8(R2)
```

Em EX:

```text
endereço = R2 + 8
```

Exemplo ADD:

```text
resultado = R1 + R2
```

---

## 3.4 MEM - Memory Access

MEM acessa memória de dados quando necessário.

LOAD:

```text
lê memória
```

STORE:

```text
escreve memória
```

Instrução aritmética comum:

```text
normalmente não precisa acessar memória de dados
```

Mesmo assim, ela pode passar pelo estágio MEM no pipeline, apenas sem fazer leitura/escrita útil.

---

## 3.5 WB - Write Back

WB escreve o resultado de volta no banco de registradores.

Exemplos que fazem writeback:

```text
ADD
SUB
ADDI
LOAD
```

Exemplos que normalmente não fazem writeback:

```text
STORE
BRANCH
JUMP
```

Pegadinha:

```text
STORE escreve memória, não registrador
LOAD lê memória e escreve registrador
```

---

# 4. Pipeline Sem Sobreposição

Imagine 5 etapas.

Sem pipeline, uma instrução passa por todas as etapas antes da próxima começar.

```text
ciclo 1: I1 IF
ciclo 2: I1 ID
ciclo 3: I1 EX
ciclo 4: I1 MEM
ciclo 5: I1 WB
ciclo 6: I2 IF
ciclo 7: I2 ID
...
```

Para 3 instruções:

```text
I1 -> 5 ciclos
I2 -> 5 ciclos
I3 -> 5 ciclos
total -> 15 ciclos
```

---

# 5. Pipeline Com Sobreposição

Com pipeline:

```text
ciclo 1: I1 IF
ciclo 2: I1 ID   | I2 IF
ciclo 3: I1 EX   | I2 ID   | I3 IF
ciclo 4: I1 MEM  | I2 EX   | I3 ID   | I4 IF
ciclo 5: I1 WB   | I2 MEM  | I3 EX   | I4 ID   | I5 IF
ciclo 6:          I2 WB   | I3 MEM  | I4 EX   | I5 ID
```

Depois que o pipeline enche, idealmente:

```text
termina uma instrução por ciclo
```

Isso não significa que cada instrução individual demora só um ciclo.

Significa que a vazão aumenta.

---

# 6. Latência E Throughput

Essa é uma das maiores pegadinhas.

Latência:

```text
tempo para uma instrução individual atravessar tudo
```

Throughput:

```text
quantas instruções terminam por unidade de tempo
```

Pipeline melhora principalmente:

```text
throughput
```

Pipeline não necessariamente reduz a latência de uma instrução individual.

Exemplo:

```text
instrução ainda passa por IF, ID, EX, MEM, WB
```

Ela pode continuar levando 5 ciclos para atravessar o pipeline.

Mas depois que o pipeline está cheio:

```text
uma instrução pode terminar a cada ciclo
```

Frase de prova:

```text
pipeline aumenta a vazão, mas não reduz obrigatoriamente a latência individual
```

---

# 7. Pipeline Cheio E Pipeline Vazio

Pipeline precisa encher.

No começo:

```text
ciclo 1: só IF ocupado
ciclo 2: IF e ID ocupados
ciclo 3: IF, ID e EX ocupados
```

Depois de alguns ciclos, ele fica cheio.

Ao final de uma sequência, ele precisa esvaziar.

Por isso, para poucas instruções, o ganho pode ser pequeno.

Para muitas instruções, o ganho aparece melhor.

---

# 8. Fórmula Didática Simples

Para pipeline ideal com `k` estágios e `n` instruções:

```text
ciclos aproximados = k + n - 1
```

Exemplo:

```text
k = 5 estágios
n = 10 instruções
```

Então:

```text
ciclos = 5 + 10 - 1 = 14
```

Sem pipeline:

```text
5 * 10 = 50 ciclos
```

Isso é caso ideal, sem hazards.

Na prática, hazards podem adicionar stalls.

---

## 8.1 De Onde Vem `k + n - 1`?

Considere:

```text
k = quantidade de estágios
n = quantidade de instruções
```

A primeira instrução precisa atravessar os `k` estágios. Portanto, no caso ideal, ela termina no ciclo `k`.

Depois que o pipeline está cheio, cada nova instrução termina um ciclo após a anterior. Restam `n - 1` conclusões.

Logo:

```text
total = k + (n - 1)
total = k + n - 1 ciclos
```

Outra forma de enxergar:

```text
n ciclos para inserir as n instruções
k - 1 ciclos adicionais para a última atravessar os estágios restantes
total = n + k - 1
```

Pegadinha: não some `k - 1` pelo enchimento e mais `k - 1` pelo esvaziamento à fórmula. Isso contaria parte do cronograma duas vezes. O custo extra total, comparado ao limite ideal de `n` ciclos, é `k - 1`.

---

## 8.2 Enchimento E Esvaziamento

**Enchimento**, ou `fill`, é o início em que ainda não há instruções em todos os estágios.

**Esvaziamento**, ou `drain`, é o final em que a última instrução já entrou, mas ainda precisa atravessar os estágios restantes.

Considere um pipeline de 4 estágios:

```text
F = fetch
D = decode
E = execute
W = writeback
```

Para 6 instruções:

| Instrução | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 |
|---|---|---|---|---|---|---|---|---|---|
| I1 | F | D | E | W |  |  |  |  |  |
| I2 |  | F | D | E | W |  |  |  |  |
| I3 |  |  | F | D | E | W |  |  |  |
| I4 |  |  |  | F | D | E | W |  |  |
| I5 |  |  |  |  | F | D | E | W |  |
| I6 |  |  |  |  |  | F | D | E | W |

Contagem:

```text
k = 4
n = 6
ciclos = 4 + 6 - 1 = 9
```

O primeiro resultado aparece em `C4`. Entre `C4` e `C9`, uma instrução termina por ciclo.

Depois que `I6` entra em `F`, no ciclo 6, ainda há três ciclos para `D`, `E` e `W`. Essa parte é o drain.

---

## 8.3 Quando Há Stalls Ou Flushes

A fórmula básica supõe fluxo perfeito. Se forem inseridos `s` ciclos extras de espera:

```text
ciclos = k + n - 1 + s
```

Se houver penalidades de branch, misses ou outros eventos, elas também entram como ciclos adicionais, desde que a questão diga quantos ciclos cada evento custa.

Exemplo:

```text
pipeline = 5 estágios
instruções = 20
stalls totais = 3 ciclos
```

Então:

```text
ciclos = 5 + 20 - 1 + 3
ciclos = 27
```

Não multiplique todas as instruções por 5. A sobreposição continua existindo; somam-se apenas as bolhas efetivamente introduzidas.

---

## 8.4 Latência, Throughput, CPI E IPC

Essas quatro medidas precisam ficar separadas.

### Latência De Uma Instrução

No modelo ideal de `k` estágios com período `Tclock`:

```text
latência aproximada de uma instrução = k * Tclock
```

Ela mede quanto tempo uma instrução leva do início ao fim.

### Throughput

Depois do enchimento, se uma instrução termina por ciclo:

```text
throughput ideal = 1 / Tclock instruções por unidade de tempo
```

Se `Tclock = 2 ns`:

```text
throughput ideal = 1 instrução a cada 2 ns
= 500 milhões de instruções por segundo
```

Isso não quer dizer que uma instrução tenha latência de 2 ns. Num pipeline de 5 estágios, sua latência aproximada seria `5 * 2 ns = 10 ns`.

### CPI

CPI significa ciclos por instrução:

```text
CPI = ciclos totais / instruções concluídas
```

Para um lote finito no pipeline ideal:

```text
CPI = (k + n - 1) / n
```

Exemplo com 5 estágios e 20 instruções:

```text
CPI = 24 / 20 = 1,2
```

Para uma sequência muito longa:

```text
n cresce
(k - 1) / n se aproxima de zero
CPI ideal se aproxima de 1
```

Com stalls, o CPI fica maior que 1.

### IPC

IPC significa instruções por ciclo:

```text
IPC = instruções / ciclos
```

Neste modelo simples:

```text
IPC = 1 / CPI
```

Se `CPI = 1,25`:

```text
IPC = 0,8 instrução por ciclo
```

---

## 8.5 Speedup Do Pipeline

Speedup compara tempos de execução:

```text
speedup = tempo sem pipeline / tempo com pipeline
```

Num modelo ideal em que há `k` etapas de mesmo tempo `t` e nenhum overhead:

Sem pipeline:

```text
tempo = n * k * t
```

Com pipeline:

```text
tempo = (k + n - 1) * t
```

Logo:

```text
speedup = (n * k) / (k + n - 1)
```

Exemplo, `k = 5` e `n = 20`:

```text
speedup = (20 * 5) / (5 + 20 - 1)
speedup = 100 / 24
speedup ≈ 4,17
```

Quando `n` é muito grande, o speedup ideal se aproxima de `k`. Para poucos itens, o enchimento e o esvaziamento pesam mais.

Na prática, o speedup costuma ser menor por causa de:

```text
estágios desbalanceados
overhead dos registradores de pipeline
stalls e flushes
misses de cache
```

---

# 9. Ciclo De Clock No Pipeline

Em pipeline, o período de clock precisa respeitar o estágio mais lento.

Se os estágios têm atrasos:

```text
IF = 2 ns
ID = 3 ns
EX = 4 ns
MEM = 5 ns
WB = 2 ns
```

O clock precisa ser pelo menos:

```text
5 ns + overhead dos registradores de pipeline
```

Ou seja:

```text
o estágio mais lento limita o clock
```

Isso conversa com a aula de caminho crítico.

---

## 9.1 Fórmula Do Período De Clock

Se os atrasos combinacionais dos estágios são:

```text
t1, t2, ..., tk
```

e o registrador entre estágios acrescenta um overhead `treg`, então:

```text
Tclock >= máximo(t1, t2, ..., tk) + treg
```

O overhead pode representar, conforme o nível da questão:

```text
clock-to-Q
setup do registrador seguinte
margens de clock
```

Normalmente a prova reúne tudo em um único valor chamado overhead do registrador de pipeline.

Exemplo:

```text
IF  = 250 ps
ID  = 150 ps
EX  = 200 ps
MEM = 300 ps
WB  = 180 ps
overhead = 20 ps
```

Então:

```text
Tclock = 300 + 20 = 320 ps
```

Para uma instrução atravessar os cinco estágios:

```text
latência aproximada = 5 * 320 = 1600 ps
```

Depois do enchimento, o throughput ideal é:

```text
1 instrução a cada 320 ps
```

Pegadinha: não use a soma `250 + 150 + 200 + 300 + 180` como período do clock do pipeline. Essa soma representa o caminho total sem as separações; no pipeline, o clock é definido pelo estágio mais lento mais o overhead.

---

## 9.2 Balanceamento Dos Estágios

Pipeline funciona melhor quando os estágios têm atrasos parecidos.

Considere quatro etapas sem overhead:

```text
1 ns, 1 ns, 4 ns, 1 ns
```

O período precisa ser:

```text
4 ns
```

Durante boa parte de cada ciclo, os estágios de 1 ns ficam ociosos esperando o estágio de 4 ns. O pipeline está desbalanceado.

Se for possível reorganizar o trabalho em:

```text
2 ns, 2 ns, 2 ns, 1 ns
```

o período cai para:

```text
2 ns
```

Mas dividir indefinidamente não é gratuito. Cada novo estágio acrescenta registrador, overhead e possibilidade de penalidades maiores. Para a prova:

```text
estágios equilibrados favorecem clock menor e melhor throughput
mais estágios não garantem desempenho maior sem considerar overhead e hazards
```

---

# 10. Registradores De Pipeline

Entre estágios do pipeline existem registradores.

Eles guardam informações de uma etapa para a próxima.

Exemplo:

```text
IF/ID
ID/EX
EX/MEM
MEM/WB
```

Esses registradores carregam:

```text
instrução
valores lidos dos registradores
imediatos
sinais de controle
resultados intermediários
```

Sem esses registradores, os estágios não ficariam separados por clock.

---

# 11. Bolha

Bolha, ou bubble, é um ciclo vazio inserido no pipeline.

Ela aparece quando o processador precisa esperar.

Exemplo:

```text
uma instrução depende de um dado que ainda não ficou pronto
```

Então o pipeline insere:

```text
stall
```

O efeito visual é uma bolha se deslocando pelos estágios.

Bolha reduz desempenho porque ocupa ciclo sem concluir trabalho útil.

---

# 12. Pipeline Ideal E Pipeline Real

Pipeline ideal:

```text
uma instrução termina por ciclo depois de cheio
sem conflitos
sem dependências
sem desvios problemáticos
```

Pipeline real:

```text
tem dependências
tem branches
tem conflitos de recursos
tem misses de cache
tem stalls e flushes
```

Por isso, pipeline é poderoso, mas exige mecanismos de controle.

Esses problemas são os hazards.

A próxima aula aprofunda isso.

---

# 13. Diferença Para Monociclo

Processador monociclo:

```text
cada instrução termina em um ciclo longo
```

O ciclo precisa acomodar a instrução mais lenta.

Exemplo:

```text
LOAD costuma ser lenta porque usa memória
```

Então todas as instruções ficam presas a um ciclo longo.

Pipeline:

```text
divide a execução em estágios
usa ciclos menores
sobrepõe instruções
```

Mas adiciona complexidade.

---

# 14. Diferença Para Multiciclo

Multiciclo:

```text
uma instrução usa vários ciclos
uma etapa por ciclo
mas geralmente sem várias instruções sobrepostas
```

Pipeline:

```text
também usa etapas
mas sobrepõe instruções diferentes
```

Resumo:

```text
monociclo -> uma instrução por ciclo longo
multiciclo -> uma instrução em vários ciclos
pipeline -> várias instruções em estágios ao mesmo tempo
```

---

# 15. Exemplo Visual

Sem pipeline:

```text
C1  C2  C3  C4  C5  C6  C7  C8  C9  C10
I1  I1  I1  I1  I1
                    I2  I2  I2  I2  I2
```

Com pipeline:

```text
C1  C2  C3  C4  C5  C6  C7  C8
I1  I1  I1  I1  I1
    I2  I2  I2  I2  I2
        I3  I3  I3  I3  I3
            I4  I4  I4  I4  I4
```

O trabalho fica sobreposto.

---

## 15.1 Como Montar Um Cronograma Sem Se Perder

Use este procedimento:

1. Escreva os ciclos nas colunas.
2. Coloque os estágios da primeira instrução em sequência.
3. Comece cada instrução seguinte uma coluna depois.
4. Se houver stall, repita a espera e desloque as etapas posteriores.
5. Conte até o ciclo em que a última instrução conclui o último estágio.

Exemplo com `IF–ID–EX–MEM–WB` e 4 instruções, sem hazard:

| Instrução | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 |
|---|---|---|---|---|---|---|---|---|
| I1 | IF | ID | EX | MEM | WB |  |  |  |
| I2 |  | IF | ID | EX | MEM | WB |  |  |
| I3 |  |  | IF | ID | EX | MEM | WB |  |
| I4 |  |  |  | IF | ID | EX | MEM | WB |

Verificação pela fórmula:

```text
5 + 4 - 1 = 8 ciclos
```

Agora suponha que a questão informe uma bolha de 1 ciclo antes de `I2` executar:

| Instrução | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 |
|---|---|---|---|---|---|---|---|---|---|
| I1 | IF | ID | EX | MEM | WB |  |  |  |  |
| I2 |  | IF | ID | espera | EX | MEM | WB |  |  |
| I3 |  |  | IF | espera | ID | EX | MEM | WB |  |
| I4 |  |  |  |  | IF | ID | EX | MEM | WB |

O cronograma exato de quais estágios congelam depende do hazard e da organização descrita. Para a contagem simples dada pela questão:

```text
5 + 4 - 1 + 1 = 9 ciclos
```

---

## 15.2 Leitura Cuidadosa De Diagramas

Ao receber um cronograma pronto, verifique:

```text
cada linha representa uma instrução
cada coluna representa um ciclo
estágios simultâneos aparecem na mesma coluna
uma célula vazia ou B pode representar bolha
a conclusão ocorre no último estágio efetivamente usado pelo modelo
```

Algumas questões desenham STORE ou branch terminando antes de WB porque não escrevem registrador. Outras mantêm todos os cinco espaços para uniformizar o pipeline. Siga o modelo explicitamente mostrado; não misture convenções no meio da contagem.

---

# 16. O Que A Prova Pode Perguntar?

Perguntas prováveis:

```text
O que é pipeline?
Qual é a vantagem principal?
Pipeline melhora latência ou throughput?
Quais são os estágios clássicos?
O que é uma bolha?
Por que hazards atrapalham pipeline?
O que limita o clock em pipeline?
```

Respostas-chave:

```text
pipeline sobrepõe etapas de várias instruções
melhora throughput
estágio mais lento limita o clock
hazards inserem stalls/flushes e reduzem ganho
```

---

# 17. Pegadinhas

## 17.1 Pipeline Não É Paralelismo Total

Pipeline não significa que uma única instrução executa todas as suas etapas ao mesmo tempo.

Cada instrução ainda passa etapa por etapa.

O paralelismo está entre instruções diferentes em estágios diferentes.

---

## 17.2 Pipeline Não Garante Uma Instrução Por Ciclo Sempre

Isso só ocorre idealmente depois que o pipeline está cheio e sem hazards.

Na prática:

```text
stalls
flushes
misses
dependências
```

podem impedir.

---

## 17.3 Pipeline Não Elimina Caminho Crítico

Pipeline divide caminhos longos em estágios menores.

Mas cada estágio ainda tem um caminho crítico.

O clock é limitado pelo estágio mais lento.

---

## 17.4 Pipeline Pode Aumentar Complexidade

É preciso lidar com:

```text
hazards
controle
registradores de pipeline
forwarding
flush
stall
```

---

# 18. Resumo De Prova

```text
pipeline = dividir execução em estágios e sobrepor instruções
estágios clássicos = IF, ID, EX, MEM, WB
IF = busca instrução
ID = decodifica e lê registradores
EX = ULA/cálculo
MEM = acesso à memória
WB = escrita no registrador
melhora principal = throughput
latência individual não necessariamente diminui
pipeline ideal = uma instrução finalizada por ciclo depois de cheio
bolha = ciclo vazio inserido por espera
clock = limitado pelo estágio mais lento
ciclos ideais para n instruções = k + n - 1
fill = início antes de o pipeline ficar cheio
drain = final após a última instrução entrar
Tclock = atraso do estágio mais lento + overhead do registrador
latência aproximada = k * Tclock
throughput ideal = 1 / Tclock
CPI = ciclos totais / instruções
CPI ideal tende a 1 para sequência longa
speedup = tempo sem pipeline / tempo com pipeline
estágios desbalanceados desperdiçam parte do ciclo
```

---

# 19. Exercícios

1. O que é pipeline?
2. Quais são os cinco estágios clássicos?
3. O que acontece em IF?
4. O que acontece em ID?
5. O que acontece em EX?
6. O que acontece em MEM?
7. O que acontece em WB?
8. Pipeline melhora principalmente latência ou throughput?
9. O que é uma bolha?
10. O que limita o clock de um pipeline?

## Múltipla Escolha

11. Em pipeline, várias instruções:

- A) são sempre executadas pela mesma ULA no mesmo estágio ao mesmo tempo.
- B) podem ocupar estágios diferentes simultaneamente.
- C) deixam de precisar de registradores.
- D) não passam por busca de instrução.

12. A principal vantagem do pipeline é:

- A) aumentar throughput.
- B) eliminar memória.
- C) impedir branches.
- D) remover a necessidade de clock.

13. Em pipeline ideal com 5 estágios e 20 instruções, o número aproximado de ciclos é:

- A) 20
- B) 24
- C) 100
- D) 5

14. O estágio que normalmente escreve resultado no banco de registradores é:

- A) IF
- B) ID
- C) MEM
- D) WB

15. O estágio mais lento de um pipeline:

- A) limita o período mínimo de clock.
- B) não influencia o clock.
- C) só importa em circuitos analógicos.
- D) elimina hazards.

## Questões Adicionais

16. Um pipeline ideal possui 7 estágios e executa 30 instruções. Quantos ciclos são necessários?
17. O pipeline da questão anterior sofre 4 ciclos totais de stall. Qual é o novo total?
18. Um pipeline de 5 estágios tem `Tclock = 2 ns`. Qual é a latência aproximada de uma instrução e qual é o throughput ideal depois do enchimento?
19. Um programa conclui 80 instruções em 100 ciclos. Calcule CPI e IPC.
20. Por que a fórmula `k + n - 1` não deve receber dois termos separados de `k - 1`, um para fill e outro para drain?

21. Os atrasos dos estágios são `180, 220, 150, 310 e 190 ps`. O overhead dos registradores é `30 ps`. O período mínimo de clock é:

- A) 220 ps
- B) 310 ps
- C) 340 ps
- D) 1080 ps

22. Em um pipeline ideal de 4 estágios, com etapas de mesmo tempo e sem overhead, o speedup para 12 instruções é:

- A) `48/15 = 3,2`
- B) `15/48 = 0,3125`
- C) exatamente 4, sem depender do número de instruções.
- D) `12/4 = 3`

23. Dois pipelines executam a mesma tarefa. O primeiro tem estágios de `1, 1, 4 e 1 ns`; o segundo, de `2, 2, 2 e 1 ns`, sem overhead. Qual tende a oferecer maior throughput ideal?

- A) O primeiro, porque possui uma etapa de 1 ns.
- B) O segundo, porque seu estágio mais lento leva 2 ns em vez de 4 ns.
- C) São iguais, porque ambos têm quatro estágios.
- D) Não existe relação entre atraso dos estágios e throughput.

24. Se `CPI = 1,25`, o IPC no modelo simples é:

- A) 1,25
- B) 0,8
- C) 2,25
- D) 0,25

25. Qual afirmação está correta?

- A) Uma instrução pode ter latência de cinco ciclos e, ainda assim, o pipeline cheio concluir uma instrução por ciclo.
- B) Throughput e latência são sempre a mesma medida.
- C) O período do pipeline é a soma dos atrasos de todos os estágios.
- D) Acrescentar estágios nunca adiciona overhead.

---

# 20. Gabarito

1. Técnica que divide a execução em estágios e sobrepõe várias instruções.
2. IF, ID, EX, MEM, WB.
3. Busca instrução usando o PC.
4. Decodifica a instrução e lê registradores.
5. Executa operação, compara ou calcula endereço.
6. Acessa memória de dados quando necessário.
7. Escreve resultado no banco de registradores.
8. Throughput.
9. Ciclo vazio inserido por espera/stall.
10. O estágio mais lento, somado a overhead de registradores de pipeline.
11. B.
12. A.
13. B. `5 + 20 - 1 = 24`.
14. D.
15. A.
16. `7 + 30 - 1 = 36 ciclos`.
17. `36 + 4 = 40 ciclos`.
18. Latência aproximada: `5 * 2 = 10 ns`. Throughput ideal: uma instrução a cada `2 ns`, ou 500 milhões por segundo.
19. `CPI = 100/80 = 1,25`; `IPC = 80/100 = 0,8`.
20. Porque a fórmula já conta a entrada das `n` instruções e os `k - 1` ciclos restantes da última; acrescentar dois termos contaria ciclos duas vezes.
21. C. `310 + 30 = 340 ps`.
22. A. Sem pipeline: `12 * 4 = 48` unidades; com pipeline: `4 + 12 - 1 = 15`; speedup `= 48/15 = 3,2`.
23. B.
24. B.
25. A.
