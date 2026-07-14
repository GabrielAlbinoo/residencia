# Aula Detalhada - Branch Prediction E Predição De Desvios

**Tema do dia:** desvios condicionais, branch, PC, hazard de controle, predição estática, predição dinâmica, sempre tomado, sempre não tomado, histórico, acerto, erro, penalidade e flush  
**Aula na sequência:** 32  
**Objetivo:** entender por que branches atrapalham pipelines, como a predição de desvios tenta reduzir perdas e quais estratégias básicas podem aparecer em questões conceituais.

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

O nível necessário aqui é:

```text
reconhecer o que é
entender por que existe
diferenciar predição estática e dinâmica
entender penalidade de erro
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

Alguns mecanismos guardam alvos já usados para acelerar a busca.

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

# 18. O Que A Prova Pode Perguntar?

Perguntas prováveis:

```text
O que é branch prediction?
Por que ela existe?
O que é predição estática?
O que é predição dinâmica?
O que significa prever sempre tomado?
O que acontece se a predição erra?
Qual hazard branch causa?
```

Respostas-chave:

```text
branch causa hazard de controle
predição tenta escolher próximo PC antes da confirmação
estática usa regra fixa
dinâmica usa histórico
erro causa flush e penalidade
```

---

# 19. Pegadinhas

## 19.1 Predição Estática Não Usa Histórico

Se a alternativa fala:

```text
usa histórico local
usa histórico global
adapta ao comportamento
```

Então não é estática.

---

## 19.2 Sempre Tomado É Estática

Assumir:

```text
todos os desvios serão tomados
```

é:

```text
predição estática de desvios tomados
```

---

## 19.3 Branch Prediction Não Resolve Hazard De Dados

Branch prediction ajuda hazard de controle.

Não resolve:

```text
LW seguido de ADD usando o dado carregado
```

Isso é hazard de dados/load-use.

---

## 19.4 Erro De Predição Não É Overflow

Erro de predição significa caminho de instruções errado.

Não tem relação direta com overflow aritmético.

---

## 19.5 Acertar Predição Não Muda Resultado Do Programa

Branch prediction não deve mudar o resultado final correto.

Ela é otimização de desempenho.

Se errar, o processador corrige descartando o caminho errado.

---

# 20. Resumo De Prova

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
erro = misprediction
erro causa = flush + penalidade de ciclos
```

---

# 21. Exercícios

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

## Múltipla Escolha

11. Assumir que todos os branches serão tomados é:

- A) predição dinâmica local.
- B) predição estática de desvios tomados.
- C) hazard estrutural.
- D) forwarding.

12. Branch prediction tenta reduzir:

- A) hazard de controle.
- B) overflow de complemento de 2.
- C) erro de paridade.
- D) refresh de DRAM.

13. Quando a predição de branch erra, normalmente ocorre:

- A) flush das instruções do caminho errado.
- B) eliminação permanente do PC.
- C) conversão automática para BCD.
- D) escrita obrigatória em todos os registradores.

14. Predição dinâmica é caracterizada por:

- A) usar uma regra fixa sem observar execução.
- B) usar histórico/comportamento em tempo de execução.
- C) nunca errar.
- D) não funcionar em pipeline.

15. Um branch de loop geralmente é:

- A) tomado várias vezes e não tomado na saída.
- B) nunca tomado.
- C) sempre erro de cache.
- D) sempre uma instrução de ponto flutuante.

---

# 22. Gabarito

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
11. B.
12. A.
13. A.
14. B.
15. A.

