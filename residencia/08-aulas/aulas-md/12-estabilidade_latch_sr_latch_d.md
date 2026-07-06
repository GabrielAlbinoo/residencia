# Aula Detalhada - Estabilidade, Latch SR e Latch D

**Tema do dia:** estabilidade, armazenamento de estado, latch SR, condição inválida e latch D transparente por nível  
**Data do cronograma revisado:** 01/06 - Segunda  
**Aula na sequência:** 12  
**Objetivo:** entender como um circuito digital consegue guardar 1 bit, interpretar tabelas de latches e diferenciar armazenamento, transparência e condição inválida.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 11, você viu a ideia de máquina de estados:

```text
estado atual + entrada atual -> próximo estado + saída
```

Mas ficou uma pergunta por baixo:

```text
onde o estado atual fica guardado?
```

Esta aula responde isso.

Até agora, em lógica combinacional, a saída dependia apenas das entradas atuais:

```text
F = função das entradas atuais
```

Agora entramos em lógica sequencial:

```text
saída atual depende das entradas atuais e de algo guardado antes
```

Esse "algo guardado" é o **estado**.

O circuito mais simples capaz de guardar estado é um **latch**.

---

# 2. O Que Significa Armazenar Um Bit?

Guardar 1 bit significa conseguir manter um valor mesmo depois que o sinal externo que causou aquele valor desaparece.

Exemplo intuitivo:

```text
apertou SET -> Q vira 1
soltou SET  -> Q continua 1
```

Depois:

```text
apertou RESET -> Q vira 0
soltou RESET  -> Q continua 0
```

O circuito tem dois estados possíveis:

```text
Q = 0
Q = 1
```

Então ele guarda exatamente 1 bit.

Um fio comum não guarda nada:

```text
entrada muda -> saída muda
```

Um latch guarda porque usa **realimentação**.

---

# 3. Realimentação

Realimentação significa que a saída de um circuito volta para a entrada dele.

Em lógica combinacional pura, normalmente pensamos assim:

```text
entrada -> portas -> saída
```

Em um circuito com memória, aparece um ciclo:

```text
saída -> volta para dentro do circuito -> ajuda a manter a saída
```

Visualmente:

```mermaid
flowchart LR
    A["Entrada externa"] --> L["Lógica"]
    L --> Q["Saída Q"]
    Q --> F["Realimentação"]
    F --> L
```

Essa volta é o segredo do armazenamento.

Sem realimentação, o circuito esquece imediatamente.

Com realimentação, o circuito pode permanecer em um estado.

---

# 4. Estabilidade

Um circuito está em um estado **estável** quando, se as entradas forem mantidas, as saídas param de mudar.

Em outras palavras:

```text
as saídas alimentam o circuito de um jeito que confirma as próprias saídas
```

Exemplo conceitual:

```text
Q = 1
```

Se a realimentação faz o circuito continuar produzindo:

```text
Q = 1
```

então esse estado é estável.

Se uma pequena mudança faz o circuito ficar oscilando ou indefinido, o estado não é estável.

Para a prova, o ponto central é:

```text
latches guardam estado porque possuem realimentação estável
```

---

# 5. Primeiro Bloco De Memória: Latch SR

O latch SR é um circuito que guarda 1 bit usando dois comandos:

| Entrada | Nome | Efeito esperado |
|---|---|---|
| `S` | Set | Força `Q=1` |
| `R` | Reset | Força `Q=0` |

A saída principal é:

```text
Q
```

Também costuma existir a saída complementar:

```text
Q'
```

Quando tudo está normal:

```text
Q' é o contrário de Q
```

Se:

```text
Q = 1
```

então:

```text
Q' = 0
```

Se:

```text
Q = 0
```

então:

```text
Q' = 1
```

---

# 6. Latch SR Com Portas NOR

Uma forma clássica de montar um latch SR usa duas portas NOR realimentadas.

Para esta versão:

```text
S e R são ativos em nível alto
```

Ou seja:

```text
S=1 ativa Set
R=1 ativa Reset
```

Estrutura conceitual:

```text
        ┌───── NOR ─────┐
S ─────>│               ├── Q
        └───────┬───────┘
                │
                │ realimentação
                │
        ┌───────┴───────┐
R ─────>│      NOR      ├── Q'
        └───────────────┘
```

O desenho acima é apenas conceitual. O ponto importante é que `Q` volta para a porta que gera `Q'`, e `Q'` volta para a porta que gera `Q`.

---

# 7. Tabela Do Latch SR Com NOR

Para latch SR com NOR, a tabela é:

| `S` | `R` | Próximo `Q` | Nome da operação |
|---:|---:|---:|---|
| 0 | 0 | mantém `Q` | memória |
| 1 | 0 | 1 | set |
| 0 | 1 | 0 | reset |
| 1 | 1 | inválido | condição proibida |

Esta é uma tabela que precisa ficar bem automática.

## 7.1 Caso `S=0` e `R=0`

Nenhum comando está ativo.

Então:

```text
Q+ = Q
```

Lê-se:

```text
o próximo valor de Q será o mesmo valor atual de Q
```

Exemplos:

| `Q` atual | `S` | `R` | `Q+` |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |

Esse é o comportamento de memória.

## 7.2 Caso `S=1` e `R=0`

Set está ativo.

Então:

```text
Q+ = 1
```

Não importa se antes `Q` era 0 ou 1:

| `Q` atual | `S` | `R` | `Q+` |
|---:|---:|---:|---:|
| 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 1 |

## 7.3 Caso `S=0` e `R=1`

Reset está ativo.

Então:

```text
Q+ = 0
```

Não importa se antes `Q` era 0 ou 1:

| `Q` atual | `S` | `R` | `Q+` |
|---:|---:|---:|---:|
| 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 |

## 7.4 Caso `S=1` e `R=1`

Este caso é inválido no latch SR com NOR.

O motivo é:

```text
Set quer Q=1
Reset quer Q=0
```

Os dois comandos brigam.

Além disso, na implementação com NOR, as duas saídas podem ficar:

```text
Q = 0
Q' = 0
```

Mas isso quebra a ideia de saída complementar, porque `Q'` deveria ser o contrário de `Q`.

Então:

```text
S=1 e R=1 -> condição inválida
```

---

# 8. Tabela Característica Do Latch SR

Uma tabela característica mostra o próximo valor do estado.

Para o latch SR com NOR:

| `S` | `R` | `Q+` |
|---:|---:|---|
| 0 | 0 | `Q` |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | inválido |

Essa tabela é muito cobrável.

Repare na diferença:

```text
Q  = estado atual
Q+ = próximo estado
```

Se a questão disser:

```text
Q atual = 1
S=0
R=0
```

então:

```text
Q+ = Q = 1
```

Se disser:

```text
Q atual = 1
S=0
R=1
```

então:

```text
Q+ = 0
```

---

# 9. Como Rastrear Um Latch SR Em Uma Sequência

Exemplo:

Estado inicial:

```text
Q = 0
```

Sequência de entradas:

| Passo | `S` | `R` |
|---:|---:|---:|
| 1 | 0 | 0 |
| 2 | 1 | 0 |
| 3 | 0 | 0 |
| 4 | 0 | 1 |
| 5 | 0 | 0 |

Vamos rastrear:

| Passo | `S` | `R` | `Q` antes | Operação | `Q+` |
|---:|---:|---:|---:|---|---:|
| 1 | 0 | 0 | 0 | mantém | 0 |
| 2 | 1 | 0 | 0 | set | 1 |
| 3 | 0 | 0 | 1 | mantém | 1 |
| 4 | 0 | 1 | 1 | reset | 0 |
| 5 | 0 | 0 | 0 | mantém | 0 |

Saída ao longo do tempo:

```text
Q: 0 -> 0 -> 1 -> 1 -> 0 -> 0
```

O ponto mais comum de erro é esquecer que `S=0,R=0` não coloca `Q=0`.

Na verdade:

```text
S=0,R=0 mantém o valor anterior
```

---

# 10. Por Que Existe Condição Inválida?

Em muitos blocos digitais, todas as combinações de entrada são válidas.

No latch SR, não.

O latch SR tem dois comandos separados:

```text
Set
Reset
```

Se os dois são ativados juntos, o circuito recebe ordens contraditórias:

```text
guardar 1
guardar 0
```

Isso pode criar duas dificuldades:

1. As saídas `Q` e `Q'` deixam de ser complementares.
2. Quando as entradas voltam ao normal, o estado final pode depender de atrasos internos.

Essa segunda parte é importante:

```text
se S e R saem de 1 para 0 quase ao mesmo tempo,
pequenas diferenças de atraso podem decidir se Q termina em 0 ou 1
```

Na prova, se aparecer:

```text
latch SR com NOR
S=1, R=1
```

marque como:

```text
inválido
proibido
indeterminado
não permitido
```

dependendo da alternativa.

---

# 11. Latch SR Com NAND

Também existe latch SR feito com portas NAND.

Aqui há uma pegadinha:

```text
as entradas costumam ser ativas em nível baixo
```

Para evitar confusão, vamos chamar as entradas de:

```text
S_N
R_N
```

O sufixo `_N` indica:

```text
ativo em 0
```

Então:

```text
S_N = 0 ativa Set
R_N = 0 ativa Reset
```

Tabela do latch SR com NAND:

| `S_N` | `R_N` | Próximo `Q` | Operação |
|---:|---:|---:|---|
| 1 | 1 | mantém `Q` | memória |
| 0 | 1 | 1 | set |
| 1 | 0 | 0 | reset |
| 0 | 0 | inválido | proibido |

Compare com a versão de NOR:

| Tipo de latch SR | Entradas ativas | Caso de memória | Caso inválido |
|---|---|---|---|
| NOR | em 1 | `S=0,R=0` | `S=1,R=1` |
| NAND | em 0 | `S_N=1,R_N=1` | `S_N=0,R_N=0` |

Para a prova, antes de responder, veja se a questão fala:

```text
portas NOR
```

ou:

```text
portas NAND
```

Se não falar, muitas questões usam a tabela SR ativa em alto como padrão. Mas se aparecer bolinha nas entradas, barra, ou `S_N/R_N`, é ativo baixo.

---

# 12. Por Que O Latch SR Não É Ideal Para Dados Comuns?

O latch SR é conceitualmente importante, mas ele tem um problema prático:

```text
existe combinação inválida
```

Se uma pessoa quer guardar um dado `D`, ela normalmente não quer pensar em dois comandos separados:

```text
S
R
```

Ela quer dizer:

```text
guarde este valor D
```

Se:

```text
D = 1
```

o circuito deve guardar 1.

Se:

```text
D = 0
```

o circuito deve guardar 0.

Para isso existe o **latch D**.

---

# 13. Latch D

O latch D tem:

| Sinal | Significado |
|---|---|
| `D` | dado a ser armazenado |
| `EN` | enable, habilitação |
| `Q` | valor armazenado |

A ideia é:

```text
quando EN=1, Q acompanha D
quando EN=0, Q mantém o último valor
```

Tabela:

| `EN` | `D` | `Q+` |
|---:|---:|---|
| 0 | 0 | `Q` |
| 0 | 1 | `Q` |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Ou, de forma compacta:

| `EN` | `Q+` |
|---:|---|
| 0 | `Q` |
| 1 | `D` |

Essa é a tabela essencial do latch D.

---

# 14. Transparência Por Nível

O latch D é chamado de **sensível a nível**.

Isso significa que ele não espera uma borda instantânea de clock.

Enquanto o enable estiver ativo:

```text
EN = 1
```

o latch fica **transparente**:

```text
Q segue D
```

Se `D` mudar várias vezes enquanto `EN=1`, `Q` também pode mudar várias vezes.

Exemplo:

| Instante | `EN` | `D` | `Q` |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 |
| 2 | 1 | 1 | 1 |
| 3 | 1 | 0 | 0 |
| 4 | 1 | 1 | 1 |
| 5 | 0 | 0 | 1 |
| 6 | 0 | 1 | 1 |

Observe:

```text
enquanto EN=1, Q acompanha D
quando EN volta para 0, Q congela no último valor
```

No instante 5:

```text
EN=0
```

então `Q` para de seguir `D` e mantém o valor que tinha acabado de guardar:

```text
Q = 1
```

---

# 15. Exemplo Completo Com Latch D

Estado inicial:

```text
Q = 0
```

Sequência:

| Passo | `EN` | `D` |
|---:|---:|---:|
| 1 | 0 | 1 |
| 2 | 1 | 1 |
| 3 | 1 | 0 |
| 4 | 0 | 0 |
| 5 | 0 | 1 |
| 6 | 1 | 1 |

Agora rastreando:

| Passo | `EN` | `D` | `Q` antes | Regra | `Q+` |
|---:|---:|---:|---:|---|---:|
| 1 | 0 | 1 | 0 | mantém | 0 |
| 2 | 1 | 1 | 0 | segue D | 1 |
| 3 | 1 | 0 | 1 | segue D | 0 |
| 4 | 0 | 0 | 0 | mantém | 0 |
| 5 | 0 | 1 | 0 | mantém | 0 |
| 6 | 1 | 1 | 0 | segue D | 1 |

Resultado:

```text
Q: 0 -> 0 -> 1 -> 0 -> 0 -> 0 -> 1
```

O erro comum seria pensar:

```text
D mudou para 1 no passo 5, então Q vira 1
```

Mas isso está errado, porque:

```text
EN=0
```

Logo:

```text
Q mantém o valor anterior
```

---

# 16. Como O Latch D Pode Ser Construído A Partir Do SR

O latch D evita a condição inválida do SR usando:

```text
S = D
R = D'
```

quando o enable está ativo.

Com enable:

```text
S = EN·D
R = EN·D'
```

Assim:

| `EN` | `D` | `S` | `R` | Efeito |
|---:|---:|---:|---:|---|
| 0 | 0 | 0 | 0 | mantém |
| 0 | 1 | 0 | 0 | mantém |
| 1 | 0 | 0 | 1 | reset |
| 1 | 1 | 1 | 0 | set |

Repare que nunca aparece:

```text
S=1 e R=1
```

Portanto, o latch D remove a condição inválida do latch SR.

Essa é a grande vantagem dele.

---

# 17. Latch D Ativo Em Nível Alto E Ativo Em Nível Baixo

O caso mais comum que estamos usando:

```text
EN=1 -> transparente
EN=0 -> mantém
```

Esse é um latch D ativo em nível alto.

Mas também pode existir latch D ativo em nível baixo:

```text
EN=0 -> transparente
EN=1 -> mantém
```

Se a questão mostrar bolinha no enable, ou disser que o enable é ativo baixo, inverta a leitura.

| Tipo | Transparente quando | Mantém quando |
|---|---:|---:|
| Latch D ativo alto | `EN=1` | `EN=0` |
| Latch D ativo baixo | `EN=0` | `EN=1` |

Para as primeiras questões, provavelmente aparecerá o ativo alto.

Mas já deixe a atenção ligada:

```text
bolinha = ativo baixo
```

---

# 18. Latch Versus Flip-Flop

Essa diferença será aprofundada na próxima aula, mas já precisa ficar clara.

| Elemento | Sensibilidade | Quando atualiza |
|---|---|---|
| Latch | nível | durante todo o nível ativo |
| Flip-flop | borda | apenas na transição do clock |

Latch D:

```text
EN=1 por 5 ms -> Q pode seguir D durante os 5 ms
```

Flip-flop D:

```text
borda de subida -> Q copia D naquele instante
```

Então:

```text
latch é transparente por nível
flip-flop é disparado por borda
```

Para prova, essa frase resolve muita coisa.

---

# 19. Metastabilidade Em Nível Conceitual

Metastabilidade é quando o circuito fica temporariamente em uma região indefinida, antes de decidir se a saída será 0 ou 1.

Você não precisa aprofundar matemática disso agora.

Mas precisa entender a causa:

```text
entrada muda perto demais do momento em que o circuito deveria guardar o valor
```

No latch SR, isso pode acontecer quando a condição inválida é liberada de modo quase simultâneo.

No latch D, isso pode acontecer se `D` muda bem no momento em que `EN` está fechando.

Para a prova, a leitura prática é:

```text
entradas devem estar estáveis quando o circuito vai armazenar o estado
```

Esse assunto prepara o terreno para:

```text
setup time
hold time
temporização
```

---

# 20. Como Questões Costumam Cobrar

## Tipo 1: completar tabela

Exemplo:

```text
Latch SR com NOR, Q=0, S=1, R=0. Qual é Q+?
```

Resposta:

```text
Q+ = 1
```

## Tipo 2: identificar condição inválida

Exemplo:

```text
Latch SR com NOR, S=1 e R=1.
```

Resposta:

```text
condição inválida
```

## Tipo 3: rastrear sequência

Exemplo:

```text
Latch D, Q inicial=0.
EN,D: 00, 11, 10, 00
```

Você aplica:

```text
EN=0 -> mantém
EN=1 -> Q=D
```

## Tipo 4: diferença conceitual

Exemplo:

```text
Qual é a diferença entre latch e flip-flop?
```

Resposta:

```text
latch é sensível a nível; flip-flop é sensível à borda
```

---

# 21. Erros Comuns

## Erro 1: achar que `S=0,R=0` zera o latch SR

Errado.

No latch SR com NOR:

```text
S=0,R=0 -> mantém Q
```

Se `Q` era 1:

```text
Q continua 1
```

Se `Q` era 0:

```text
Q continua 0
```

## Erro 2: esquecer que a versão NAND é ativa em baixo

No SR com NAND:

```text
S_N=1,R_N=1 -> mantém
S_N=0,R_N=1 -> set
S_N=1,R_N=0 -> reset
S_N=0,R_N=0 -> inválido
```

É o contrário do impulso intuitivo de pensar que `1` sempre ativa.

## Erro 3: pensar que latch D só lê D uma vez

Latch não é flip-flop.

Enquanto estiver transparente:

```text
Q segue D
```

Se `D` mudar várias vezes com `EN=1`, `Q` também pode mudar várias vezes.

## Erro 4: ignorar o estado anterior

Sempre que aparecer:

```text
mantém
```

você precisa saber qual era o `Q` anterior.

Sem `Q` anterior, não dá para saber o próximo valor nos casos de memória.

## Erro 5: tratar `Q'` como independente

Em operação normal:

```text
Q' é o complemento de Q
```

Se `Q` e `Q'` não são complementares, algo está errado ou a condição é inválida.

---

# 22. Exercícios

## Parte A - Conceitos

1. O que significa um circuito guardar 1 bit?
2. Por que a realimentação é importante em circuitos sequenciais?
3. O que significa um estado estável?
4. Qual é a diferença essencial entre circuito combinacional e circuito sequencial?

## Parte B - Latch SR Com NOR

5. Complete: em um latch SR com NOR, `S=0,R=0` faz o latch __________.
6. Complete: em um latch SR com NOR, `S=1,R=0` faz `Q+ = ___`.
7. Complete: em um latch SR com NOR, `S=0,R=1` faz `Q+ = ___`.
8. Qual é a condição inválida do latch SR com NOR?
9. Em um latch SR com NOR, `Q=1`, `S=0` e `R=0`. Qual é `Q+`?
10. Em um latch SR com NOR, `Q=1`, `S=0` e `R=1`. Qual é `Q+`?
11. Em um latch SR com NOR, `Q=0`, `S=1` e `R=0`. Qual é `Q+`?

## Parte C - Sequência Em Latch SR

Considere um latch SR com NOR e `Q` inicial igual a `0`.

| Passo | `S` | `R` |
|---:|---:|---:|
| 1 | 0 | 0 |
| 2 | 1 | 0 |
| 3 | 0 | 0 |
| 4 | 0 | 1 |
| 5 | 0 | 0 |
| 6 | 1 | 0 |

12. Qual é a sequência de valores de `Q+` após cada passo?

## Parte D - Latch SR Com NAND

13. Em um latch SR com NAND ativo baixo, qual combinação mantém o estado?
14. Em um latch SR com NAND ativo baixo, qual combinação é inválida?
15. Em um latch SR com NAND ativo baixo, `S_N=0,R_N=1`. Qual operação ocorre?
16. Em um latch SR com NAND ativo baixo, `S_N=1,R_N=0`. Qual operação ocorre?

## Parte E - Latch D

17. Em um latch D ativo alto, o que acontece quando `EN=0`?
18. Em um latch D ativo alto, o que acontece quando `EN=1`?
19. Complete a tabela:

| `EN` | `D` | `Q` atual | `Q+` |
|---:|---:|---:|---:|
| 0 | 1 | 0 | ? |
| 0 | 0 | 1 | ? |
| 1 | 0 | 1 | ? |
| 1 | 1 | 0 | ? |

20. Considere um latch D ativo alto com `Q` inicial igual a `0`.

| Passo | `EN` | `D` |
|---:|---:|---:|
| 1 | 0 | 1 |
| 2 | 1 | 1 |
| 3 | 1 | 0 |
| 4 | 0 | 1 |
| 5 | 1 | 1 |

Qual é a sequência de `Q+` após cada passo?

## Parte F - Latch Versus Flip-Flop

21. Qual é a diferença entre latch e flip-flop quanto ao momento de atualização?
22. Se `D` muda várias vezes enquanto `EN=1` em um latch D ativo alto, o que acontece com `Q`?
23. Se `D` muda enquanto `EN=0` em um latch D ativo alto, o que acontece com `Q`?
24. Qual conceito de temporização aparece quando a entrada muda perto demais do instante de armazenamento?

---

# 23. Gabarito

## Parte A

**1.** Significa manter um valor `0` ou `1` armazenado mesmo após a entrada que causou esse valor deixar de estar ativa.  

**2.** Porque a saída volta para dentro do circuito e ajuda a manter o estado atual.  

**3.** É um estado em que, mantendo as entradas, as saídas param de mudar e confirmam o próprio valor.  

**4.** No combinacional, a saída depende apenas das entradas atuais. No sequencial, depende também de estado armazenado.

---

## Parte B

**5.** Manter o estado.  

**6.** `1`.  

**7.** `0`.  

**8.** `S=1,R=1`.  

**9.** `Q+ = 1`, pois mantém.  

**10.** `Q+ = 0`, pois reset está ativo.  

**11.** `Q+ = 1`, pois set está ativo.

---

## Parte C

**12.**

| Passo | `S` | `R` | `Q` antes | `Q+` |
|---:|---:|---:|---:|---:|
| 1 | 0 | 0 | 0 | 0 |
| 2 | 1 | 0 | 0 | 1 |
| 3 | 0 | 0 | 1 | 1 |
| 4 | 0 | 1 | 1 | 0 |
| 5 | 0 | 0 | 0 | 0 |
| 6 | 1 | 0 | 0 | 1 |

Sequência:

```text
0, 1, 1, 0, 0, 1
```

---

## Parte D

**13.** `S_N=1,R_N=1`.  

**14.** `S_N=0,R_N=0`.  

**15.** Set, então `Q+ = 1`.  

**16.** Reset, então `Q+ = 0`.

---

## Parte E

**17.** Mantém o valor anterior de `Q`.  

**18.** Fica transparente: `Q` acompanha `D`.  

**19.**

| `EN` | `D` | `Q` atual | `Q+` |
|---:|---:|---:|---:|
| 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

**20.**

| Passo | `EN` | `D` | `Q` antes | `Q+` |
|---:|---:|---:|---:|---:|
| 1 | 0 | 1 | 0 | 0 |
| 2 | 1 | 1 | 0 | 1 |
| 3 | 1 | 0 | 1 | 0 |
| 4 | 0 | 1 | 0 | 0 |
| 5 | 1 | 1 | 0 | 1 |

Sequência:

```text
0, 1, 0, 0, 1
```

---

## Parte F

**21.** Latch atualiza durante um nível ativo; flip-flop atualiza apenas em uma borda do clock.  

**22.** `Q` pode mudar junto com `D`, pois o latch está transparente.  

**23.** `Q` mantém o valor armazenado.  

**24.** Metastabilidade; esse tema se conecta a `setup time` e `hold time`.

---

# 24. O Que Memorizar

## SR Com NOR

```text
S=0,R=0 -> mantém
S=1,R=0 -> set, Q=1
S=0,R=1 -> reset, Q=0
S=1,R=1 -> inválido
```

## SR Com NAND Ativo Baixo

```text
S_N=1,R_N=1 -> mantém
S_N=0,R_N=1 -> set, Q=1
S_N=1,R_N=0 -> reset, Q=0
S_N=0,R_N=0 -> inválido
```

## Latch D

```text
EN=0 -> Q+ = Q
EN=1 -> Q+ = D
```

## Diferença Central

```text
latch: sensível a nível
flip-flop: sensível a borda
```

## Ideia De Estado

```text
Q  = estado atual
Q+ = próximo estado
```

---

# 25. Plano De Estudo Para Esta Aula

| Etapa | Tempo | Atividade |
|---|---:|---|
| Retomada | 10 min | Relembrar a Aula 11 e a ideia de estado atual |
| Estabilidade | 25 min | Estudar seções 2 a 4 e explicar realimentação com suas palavras |
| Latch SR com NOR | 40 min | Estudar seções 5 a 10 e decorar a tabela característica |
| Latch SR com NAND | 25 min | Estudar seção 11 e comparar ativo alto com ativo baixo |
| Latch D | 45 min | Estudar seções 12 a 17 e fazer os rastreios |
| Latch vs flip-flop | 20 min | Estudar seções 18 a 20 como preparação para a próxima aula |
| Exercícios | 45 min | Resolver os 24 exercícios antes de olhar o gabarito |
| Revisão | 15 min | Escrever em 5 linhas a diferença entre SR, D latch e flip-flop |

Tempo total estimado:

```text
3h45
```

Se precisar de uma primeira passada reduzida, priorize:

```text
seções 5, 7, 8, 11, 13, 14, 16, 18 e 24
exercícios 5 a 12, 17 a 21
```

---

# 26. Conexão Com A Próxima Aula

Agora você entende como um latch consegue armazenar estado.

O próximo passo é estudar:

```text
flip-flop D
flip-flop JK
flip-flop T
registradores
habilitação de registradores
```

A diferença principal será:

```text
latch D: transparente enquanto EN está ativo
flip-flop D: copia D apenas na borda do clock
```

Depois disso, ficará muito mais natural entender contadores e a implementação física de máquinas de estados.
