# Aula Detalhada — Mapas de Karnaugh de 4 Variáveis e `Don't Care`

**Tema do dia:** Minimização lógica com mapas maiores e condições indiferentes  
**Data do cronograma revisado:** 27/05 — Quarta-feira  
**Aula na sequência:** 8  
**Objetivo:** preencher e interpretar mapas de Karnaugh de quatro variáveis, reconhecer adjacências pelas quatro bordas, formar quartetos e oitavas envolvendo extremidades e usar `don't care` para obter expressões menores em soma de produtos (`SOP`).

---

## 1. Onde esta aula entra no estudo?

Na aula 7, você trabalhou com mapas de:

```text
2 variáveis → 4 células
3 variáveis → 8 células
```

Agora o mapa terá:

```text
4 variáveis → 16 células
```

A lógica não muda:

```text
cada célula representa um mintermo
para SOP, agrupamos os 1s
variáveis que mudam dentro do grupo desaparecem
```

O que muda é a visualização:

```text
linhas e colunas usam ordem Gray
a primeira e a última coluna se encostam
a primeira e a última linha também se encostam
os quatro cantos podem formar um único grupo
```

Além disso, aparece um recurso muito útil:

```text
don't care = combinação cuja saída pode ser escolhida como 0 ou 1
```

Você usará um `X` apenas quando isso permitir formar grupos maiores e simplificar a função.

---

# 2. Por que estudar o mapa de 4 variáveis?

Uma função com entradas `A`, `B`, `C` e `D` possui:

```text
2^4 = 16
```

combinações possíveis.

Uma expressão canônica pode crescer rapidamente. Por exemplo:

```text
F(A,B,C,D) = Σm(0,2,8,10)
```

em forma canônica é:

```text
F = A'B'C'D' + A'B'CD' + AB'C'D' + AB'CD'
```

Os quatro mintermos parecem espalhados se você olhar somente a lista. No mapa, eles ocupam os quatro cantos e formam um quarteto:

```text
F = B'D'
```

Portanto, o mapa de quatro variáveis é importante porque permite ver agrupamentos que não são evidentes na expressão escrita.

---

# 3. Estrutura do mapa de Karnaugh de 4 variáveis

Usaremos:

```text
AB nas linhas
CD nas colunas
```

As linhas e as colunas seguem ordem Gray:

```text
00, 01, 11, 10
```

O mapa de índices é:

| `AB \ CD` | `00` | `01` | `11` | `10` |
|---|---:|---:|---:|---:|
| `00` | `m0` | `m1` | `m3` | `m2` |
| `01` | `m4` | `m5` | `m7` | `m6` |
| `11` | `m12` | `m13` | `m15` | `m14` |
| `10` | `m8` | `m9` | `m11` | `m10` |

Observe com atenção:

```text
a linha 10 fica abaixo da linha 11, e não da linha 01
a coluna 10 fica à direita da coluna 11, e não da coluna 01
```

Isso acontece porque células vizinhas precisam diferir em apenas uma variável.

---

# 4. Como localizar um mintermo no mapa

O número do mintermo vem da sequência binária:

```text
ABCD
```

Exemplo:

```text
m13 = 1101
```

Separando as variáveis:

```text
AB = 11
CD = 01
```

Portanto, `m13` está na linha `11` e na coluna `01`.

Outro exemplo:

```text
m10 = 1010
```

Logo:

```text
AB = 10
CD = 10
```

O mintermo `m10` fica no canto inferior direito.

## 4.1 Mapa em branco para redesenhar

```text
                         CD
                 00      01      11      10
              +-------+-------+-------+-------+
 AB = 00      |  m0   |  m1   |  m3   |  m2   |
              +-------+-------+-------+-------+
 AB = 01      |  m4   |  m5   |  m7   |  m6   |
              +-------+-------+-------+-------+
 AB = 11      |  m12  |  m13  |  m15  |  m14  |
              +-------+-------+-------+-------+
 AB = 10      |  m8   |  m9   |  m11  |  m10  |
              +-------+-------+-------+-------+
```

Antes de fazer exercícios, desenhe esse mapa de memória até acertar todas as posições.

---

# 5. Preenchendo o mapa a partir de `Σm(...)`

Considere:

```text
F(A,B,C,D) = Σm(0,2,5,7,8,10,13,15)
```

Para obter uma `SOP` mínima:

```text
coloque 1 nos mintermos indicados
coloque 0 nas demais células
agrupe os 1s em potências de 2
```

O mapa fica:

| `AB \ CD` | `00` | `01` | `11` | `10` |
|---|---:|---:|---:|---:|
| `00` | `1` | `0` | `0` | `1` |
| `01` | `0` | `1` | `1` | `0` |
| `11` | `0` | `1` | `1` | `0` |
| `10` | `1` | `0` | `0` | `1` |

Há dois quartetos:

| Grupo | Células | Variáveis constantes | Termo |
|---|---|---|---|
| Cantos | `m0,m2,m8,m10` | `B=0`, `D=0` | `B'D'` |
| Centro | `m5,m7,m13,m15` | `B=1`, `D=1` | `BD` |

Assim:

```text
F = B'D' + BD
```

Essa função vale `1` quando `B` e `D` possuem o mesmo valor, independentemente de `A` e `C`.

---

# 6. Adjacência: agora todas as bordas se conectam

Em um mapa de Karnaugh, adjacência não significa apenas estar visualmente ao lado no papel. Significa:

```text
as duas células diferem em exatamente uma variável
```

No mapa de quatro variáveis:

```text
coluna 00 é vizinha da coluna 01 e da coluna 10
coluna 01 é vizinha da coluna 00 e da coluna 11
coluna 11 é vizinha da coluna 01 e da coluna 10
coluna 10 é vizinha da coluna 11 e da coluna 00
```

O mesmo ocorre com as linhas:

```text
linha 00 é vizinha da linha 01 e da linha 10
linha 01 é vizinha da linha 00 e da linha 11
linha 11 é vizinha da linha 01 e da linha 10
linha 10 é vizinha da linha 11 e da linha 00
```

## 6.1 Visualização das conexões

Imagine o mapa dobrado:

```text
borda esquerda encosta na borda direita
borda superior encosta na borda inferior
```

Por isso:

```text
os quatro cantos são adjacentes entre si e podem formar um quarteto
```

## 6.2 O que continua proibido

Ainda não vale:

```text
agrupar diagonais
formar grupos em L
formar grupos de 3 ou 6 células
incluir uma célula 0 em um grupo de 1s
```

---

# 7. Tamanho dos grupos e quantidade de literais

Uma função de quatro variáveis pode gerar grupos de:

```text
1, 2, 4, 8 ou 16 células
```

Quanto maior o grupo, menor o termo resultante:

| Tamanho do grupo | Variáveis que mudam | Literais restantes |
|---:|---:|---:|
| `1` | `0` | `4` |
| `2` | `1` | `3` |
| `4` | `2` | `2` |
| `8` | `3` | `1` |
| `16` | `4` | `0`, resultado `1` |

A regra é a mesma da aula anterior:

```text
variável constante em 0 → aparece complementada
variável constante em 1 → aparece direta
variável que muda        → desaparece
```

Uma maneira matemática de conferir o número de literais é:

```text
literais restantes = 4 - log2(tamanho do grupo)
```

Não é necessário calcular logaritmos na resolução. A informação prática é:

```text
cada duplicação do grupo elimina uma variável
```

---

# 8. Quartetos pelas bordas e pelos cantos

## 8.1 Quarteto nos quatro cantos

Considere:

```text
F(A,B,C,D) = Σm(0,2,8,10)
```

Mapa:

| `AB \ CD` | `00` | `01` | `11` | `10` |
|---|---:|---:|---:|---:|
| `00` | `1` | `0` | `0` | `1` |
| `01` | `0` | `0` | `0` | `0` |
| `11` | `0` | `0` | `0` | `0` |
| `10` | `1` | `0` | `0` | `1` |

Nos quatro cantos:

| Variável | Valores no grupo | Resultado |
|---|---|---|
| `A` | muda entre `0` e `1` | desaparece |
| `B` | sempre `0` | `B'` |
| `C` | muda entre `0` e `1` | desaparece |
| `D` | sempre `0` | `D'` |

Logo:

```text
F = B'D'
```

O erro comum é enxergar quatro células separadas. No mapa, os cantos são um único retângulo conectado pelas bordas.

## 8.2 Quarteto envolvendo a borda superior e a inferior

Considere:

```text
F(A,B,C,D) = Σm(0,1,8,9)
```

Mapa:

| `AB \ CD` | `00` | `01` | `11` | `10` |
|---|---:|---:|---:|---:|
| `00` | `1` | `1` | `0` | `0` |
| `01` | `0` | `0` | `0` | `0` |
| `11` | `0` | `0` | `0` | `0` |
| `10` | `1` | `1` | `0` | `0` |

As linhas `00` e `10` são vizinhas pelas bordas superior e inferior.

No grupo:

```text
B = 0
C = 0
A muda
D muda
```

Portanto:

```text
F = B'C'
```

---

# 9. Oitavas envolvendo extremidades

Uma oitava elimina três variáveis. Em um mapa de quatro variáveis, ela sempre gera um termo com apenas um literal.

## 9.1 Oitava formada pelas linhas superior e inferior

Considere:

```text
F(A,B,C,D) = Σm(0,1,2,3,8,9,10,11)
```

Mapa:

| `AB \ CD` | `00` | `01` | `11` | `10` |
|---|---:|---:|---:|---:|
| `00` | `1` | `1` | `1` | `1` |
| `01` | `0` | `0` | `0` | `0` |
| `11` | `0` | `0` | `0` | `0` |
| `10` | `1` | `1` | `1` | `1` |

Dentro da oitava:

```text
B = 0
A, C e D mudam
```

Logo:

```text
F = B'
```

## 9.2 Oitava formada pelas colunas laterais

Considere:

```text
F(A,B,C,D) = Σm(0,2,4,6,8,10,12,14)
```

As colunas `00` e `10` se conectam pelas bordas esquerda e direita. Em todas essas células:

```text
D = 0
A, B e C mudam
```

Portanto:

```text
F = D'
```

---

# 10. Sobreposição no mapa de quatro variáveis

Sobrepor grupos continua permitido quando isso ajuda a formar grupos grandes ou cobrir células que ficariam isoladas.

Considere:

```text
F(A,B,C,D) = Σm(0,1,2,3,4,5,6,7,8,9,10,11)
```

O mapa tem `1` em:

```text
linha AB=00
linha AB=01
linha AB=10
```

É possível cobrir os `1s` com duas oitavas:

| Grupo | Linhas agrupadas | Variável constante | Termo |
|---|---|---|---|
| Oitava 1 | `00` e `01` | `A=0` | `A'` |
| Oitava 2 | `00` e `10` | `B=0` | `B'` |

A linha `AB=00` pertence aos dois grupos. Essa repetição não é erro.

Resultado:

```text
F = A' + B'
```

---

# 11. O que é `don't care`?

Em algumas funções, certas combinações de entrada:

```text
nunca acontecem
ou não importam para a especificação do circuito
```

Nessas combinações, a saída pode ser escolhida livremente:

```text
0 ou 1
```

No mapa, representamos essas células com:

```text
X
```

Em notação de função, é comum escrever:

```text
F(A,B,C,D) = Σm(1,3,5) + d(7,9)
```

Isso significa:

```text
m1, m3 e m5 precisam valer 1
m7 e m9 são don't care
demais células precisam valer 0
```

O `X` não é automaticamente um `1`. Você decide usá-lo como `1` apenas se ele melhorar o agrupamento.

---

# 12. Regras para usar `don't care`

Para obter uma expressão `SOP`, siga estas regras:

```text
1. Todos os 1s obrigatórios precisam ser cobertos.
2. Um X pode entrar em um grupo de 1s para torná-lo maior.
3. Um X pode ser ignorado se não ajudar.
4. Um grupo não deve ser criado apenas com Xs, pois ele não cobre nenhum 1 necessário.
5. Nenhum grupo pode incluir 0.
```

A pergunta correta ao olhar para um `X` é:

```text
se eu tratar este X como 1, consigo formar um grupo maior?
```

Se a resposta for sim, use-o. Se não, ignore-o.

---

# 13. `Don't care` transformando um grupo pequeno em uma oitava

Considere:

```text
F(A,B,C,D) = Σm(1,3,5,7,9,11) + d(13,15)
```

Mapa:

| `AB \ CD` | `00` | `01` | `11` | `10` |
|---|---:|---:|---:|---:|
| `00` | `0` | `1` | `1` | `0` |
| `01` | `0` | `1` | `1` | `0` |
| `11` | `0` | `X` | `X` | `0` |
| `10` | `0` | `1` | `1` | `0` |

Sem usar os `X`, os seis `1s` precisariam de mais de um grupo.

Usando:

```text
m13 = X
m15 = X
```

é possível formar uma oitava ocupando as duas colunas centrais:

```text
CD = 01 e CD = 11
```

Nessas duas colunas:

```text
D = 1
A, B e C mudam
```

Então:

```text
F = D
```

Esse é o benefício central do `don't care`:

```text
ele pode reduzir a quantidade de termos e de portas necessárias
```

---

# 14. `Don't care` em entradas BCD inválidas

Um uso clássico aparece em circuitos que recebem um dígito decimal em BCD.

Em BCD de quatro bits, são válidas apenas as entradas:

```text
0000 até 1001
```

As combinações:

```text
1010 até 1111
```

não representam dígitos decimais válidos e podem ser tratadas como `don't care`, dependendo da especificação.

Considere uma saída `F` que deve valer `1` quando o dígito BCD é `8` ou `9`:

```text
F = Σm(8,9) + d(10,11,12,13,14,15)
```

Mapa:

| `AB \ CD` | `00` | `01` | `11` | `10` |
|---|---:|---:|---:|---:|
| `00` | `0` | `0` | `0` | `0` |
| `01` | `0` | `0` | `0` | `0` |
| `11` | `X` | `X` | `X` | `X` |
| `10` | `1` | `1` | `X` | `X` |

Os dois `1s` obrigatórios podem ser unidos aos seis `X` para formar uma oitava:

```text
linhas AB=10 e AB=11
```

Nela:

```text
A = 1
B, C e D mudam
```

Resultado:

```text
F = A
```

Para entradas BCD válidas, isso está correto:

```text
8 e 9 possuem A=1
0 a 7 possuem A=0
```

---

# 15. Quando ignorar um `X`

Nem todo `don't care` precisa aparecer em um grupo.

Considere:

```text
F(A,B,C,D) = Σm(0,2,8,10) + d(5,7)
```

Os quatro `1s` já formam o grupo dos cantos:

```text
m0,m2,m8,m10 → B'D'
```

Os `X` em `m5` e `m7` não se juntam a esse grupo para produzir uma oitava. Usá-los criaria, no máximo, um termo adicional desnecessário.

Assim:

```text
F = B'D'
```

Regra prática:

```text
X é uma oportunidade, não uma obrigação
```

---

# 16. Procedimento de resolução em prova

Ao receber uma função com quatro variáveis, siga a ordem:

## Passo 1 — Desenhe os índices corretamente

```text
              CD
          00  01  11  10
AB = 00    0   1   3   2
AB = 01    4   5   7   6
AB = 11   12  13  15  14
AB = 10    8   9  11  10
```

## Passo 2 — Preencha as células

```text
1 para os mintermos da função
X para os don't care
0 para as demais células
```

## Passo 3 — Procure os maiores grupos

Nesta ordem:

```text
grupo de 16
oitavas
quartetos
pares
células isoladas
```

## Passo 4 — Verifique bordas e cantos

Antes de aceitar grupos pequenos, procure:

```text
grupos ligando esquerda com direita
grupos ligando cima com baixo
quarteto nos quatro cantos
oitavas pelas extremidades
```

## Passo 5 — Use `X` somente se reduzir a expressão

```text
transformar par em quarteto é útil
transformar quarteto em oitava é útil
criar termo só para cobrir X não é útil
```

## Passo 6 — Extraia o termo de cada grupo

```text
apague as variáveis que mudam
mantenha somente as que ficam constantes
```

## Passo 7 — Confira a resposta

Sua expressão deve:

```text
produzir 1 em todos os mintermos indicados
nunca produzir 1 em uma célula marcada com 0
poder assumir qualquer valor nas células X
```

---

# 17. Erros comuns em prova

## Erro 1: escrever o mapa em ordem binária comum

Errado:

```text
00, 01, 10, 11
```

Correto:

```text
00, 01, 11, 10
```

Se você usar ordem binária comum, células vizinhas podem diferir em duas variáveis e seus agrupamentos deixam de ser válidos.

## Erro 2: esquecer que a borda superior se conecta à inferior

Na aula anterior, a conexão mais visível era entre colunas laterais. Com quatro variáveis, isso também vale para as linhas:

```text
AB=00 é adjacente a AB=10
```

## Erro 3: não agrupar os quatro cantos

Os cantos do mapa podem formar um quarteto. Se você cobri-los com pares ou células isoladas, sua expressão ficará maior.

## Erro 4: transformar todo `X` em `1`

O `X` só deve ser utilizado quando ajuda a formar grupos maiores para cobrir `1s` obrigatórios.

## Erro 5: cobrir um `0` para aumentar grupo

Um grupo contendo `0` modifica a função em uma entrada que precisava produzir `0`. Esse agrupamento é inválido.

## Erro 6: escrever literais demais para um grupo

Em quatro variáveis:

```text
quarteto → 2 literais
oitava   → 1 literal
```

Se um quarteto produziu três literais, alguma variável que muda não foi eliminada.

---

# 18. Conexão com síntese de circuito lógico

O resultado do mapa não é apenas uma expressão menor. Ele reduz diretamente o circuito.

Considere:

```text
F = Σm(1,3,5,7,9,11) + d(13,15)
```

Após o mapa:

```text
F = D
```

Sem minimização, seria necessário implementar vários produtos e uma soma. Após a minimização, a saída é apenas o próprio sinal `D`.

Na próxima aula, o caminho será completo:

```text
tabela-verdade → forma canônica → Karnaugh → expressão mínima → portas lógicas
```

Você também escolherá a estrutura conveniente:

```text
SOP mínima → implementação AND/OR ou NAND–NAND
POS mínima → implementação OR/AND ou NOR–NOR
```

---

# 19. Exercícios para fazer

Use mapas de Karnaugh de quatro variáveis com:

```text
AB nas linhas
CD nas colunas
```

Para cada função:

```text
1. Preencha o mapa.
2. Desenhe os agrupamentos.
3. Encontre a SOP mínima.
```

## Parte A — Sem `don't care`

1. `F(A,B,C,D) = Σm(0,1,2,3)`

2. `F(A,B,C,D) = Σm(4,5,6,7,12,13,14,15)`

3. `F(A,B,C,D) = Σm(0,2,8,10)`

4. `F(A,B,C,D) = Σm(0,1,4,5,8,9,12,13)`

5. `F(A,B,C,D) = Σm(1,3,5,7,9,11,13,15)`

6. `F(A,B,C,D) = Σm(0,1,2,3,8,9,10,11)`

7. `F(A,B,C,D) = Σm(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)`

8. `F(A,B,C,D) = Σm(0,1,4,5,10,11,14,15)`

## Parte B — Com `don't care`

9. `F(A,B,C,D) = Σm(1,3,5,7,9,11) + d(13,15)`

10. `F(A,B,C,D) = Σm(8,9) + d(10,11,12,13,14,15)`

11. `F(A,B,C,D) = Σm(0,2,4,6) + d(8,10,12,14)`

12. `F(A,B,C,D) = Σm(1,5,9,13) + d(3,7,11,15)`

---

# 20. Gabarito direto

O gabarito fornece somente a expressão mínima. Faça os mapas antes de consultar.

| Exercício | SOP mínima |
|---:|---|
| `1` | `A'B'` |
| `2` | `B` |
| `3` | `B'D'` |
| `4` | `C'` |
| `5` | `D` |
| `6` | `B'` |
| `7` | `1` |
| `8` | `A'C' + AC` |
| `9` | `D` |
| `10` | `A` |
| `11` | `D'` |
| `12` | `D` |

---

# 21. O que memorizar

## Mapa de índices

```text
                         CD
                 00      01      11      10
 AB = 00          m0      m1      m3      m2
 AB = 01          m4      m5      m7      m6
 AB = 11          m12     m13     m15     m14
 AB = 10          m8      m9      m11     m10
```

## Adjacência

```text
ordem Gray nas linhas e colunas
esquerda encosta na direita
cima encosta embaixo
quatro cantos formam um quarteto
diagonais não agrupam
```

## Grupos em quatro variáveis

```text
1 célula   → 4 literais
2 células  → 3 literais
4 células  → 2 literais
8 células  → 1 literal
16 células → 1
```

## `Don't care`

```text
X pode ser usado como 1 para aumentar grupos
X pode ser ignorado
X não obriga a saída a valer 1
não forme termos desnecessários apenas para cobrir X
```

---

# 22. Plano de estudo para esta aula

Este conteúdo depende principalmente de prática visual. Desenhe os mapas à mão.

| Etapa | Tempo | Atividade |
|---|---:|---|
| Retomada | 10 min | Redesenhar o mapa de 3 variáveis e lembrar a regra dos grupos |
| Novo mapa | 25 min | Memorizar o mapa de índices de 4 variáveis |
| Bordas e cantos | 30 min | Refazer as seções 6, 8 e 9 em papel |
| `Don't care` | 30 min | Entender as seções 11 a 15 e testar o uso do `X` |
| Exercícios sem `X` | 50 min | Resolver os exercícios 1 a 8 |
| Exercícios com `X` | 35 min | Resolver os exercícios 9 a 12 |
| Correção | 20 min | Consultar o gabarito e registrar os erros |

Tempo total estimado:

```text
3h20
```

Se precisar reduzir a primeira passada para encaixar outra aula no mesmo dia, faça obrigatoriamente:

```text
seções 3, 6, 7, 11, 12, 13, 14 e 16
exercícios 3, 6, 8, 9, 10, 11 e 12
```

---

# 23. Conexão com o próximo tópico

Com esta aula, a parte de minimização por mapas cobre:

```text
mapas de 2 variáveis
mapas de 3 variáveis
mapas de 4 variáveis
uso de don't care
```

O próximo item do cronograma é:

```text
síntese lógica completa
```

Nele, você receberá funções em formatos diferentes e fará o caminho inteiro:

```text
especificação ou tabela-verdade
        ↓
mintermos/maxtermos
        ↓
mapa de Karnaugh
        ↓
equação mínima
        ↓
circuito com portas
```

Essa passagem é importante porque a prova pode não pedir apenas a expressão simplificada; ela também pode pedir o circuito que implementa a função.
