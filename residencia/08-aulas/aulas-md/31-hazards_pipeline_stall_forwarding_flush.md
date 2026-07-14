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
load-use = LOAD seguido por uso imediato; costuma precisar de stall
flush = descartar instruções buscadas no caminho errado
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

