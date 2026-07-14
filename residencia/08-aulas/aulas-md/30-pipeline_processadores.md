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
C1  C2  C3  C4  C5  C6
I1  I1  I1  I1  I1
    I2  I2  I2  I2  I2
        I3  I3  I3  I3
            I4  I4  I4
```

O trabalho fica sobreposto.

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

