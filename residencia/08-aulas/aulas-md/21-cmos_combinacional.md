# Aula Detalhada - CMOS Combinacional

**Tema do dia:** portas lógicas em CMOS, inversor CMOS, rede pull-up, rede pull-down, NAND, NOR, redes série/paralelo, dualidade, DeMorgan e leitura de circuitos CMOS combinacionais  
**Aula na sequência:** 21  
**Objetivo:** entender como portas lógicas combinacionais são construídas com transistores PMOS e NMOS, sabendo identificar quando a saída vai para `1`, quando vai para `0`, como desenhar redes simples e como questões costumam cobrar CMOS.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 20, você viu a base física:

```text
tensão
corrente
potência
energia
NMOS
PMOS
pull-up
pull-down
inversor CMOS
```

Agora vamos usar esses blocos para construir portas combinacionais.

Antes, você via uma porta assim:

```text
A ----\
      NAND ---- Y
B ----/
```

Agora a pergunta é:

```text
como essa NAND aparece dentro do chip?
```

O caminho desta aula é:

```text
NMOS e PMOS como chaves
-> inversor CMOS
-> rede pull-down
-> rede pull-up
-> NAND em CMOS
-> NOR em CMOS
-> redes complexas
-> leitura de circuitos CMOS em prova
```

O objetivo não é desenhar layout de transistor.

O objetivo é entender o nível lógico-elétrico suficiente para resolver questões de Sistemas Digitais.

---

# 2. Ideia Principal do CMOS

CMOS significa:

```text
Complementary Metal-Oxide-Semiconductor
```

Para a prova, o ponto importante é a palavra:

```text
Complementary -> complementar
```

Uma porta CMOS comum usa dois blocos complementares:

```text
rede pull-up   -> puxa a saída para VDD -> saída 1
rede pull-down -> puxa a saída para GND -> saída 0
```

Visualmente:

```text
          VDD
           |
     rede pull-up
           |
           Y
           |
    rede pull-down
           |
          GND
```

A saída `Y` fica no meio.

Se a rede de cima liga:

```text
Y = 1
```

Se a rede de baixo liga:

```text
Y = 0
```

Em um CMOS bem formado, para cada combinação válida de entrada:

```text
ou o pull-up liga
ou o pull-down liga
```

Mas não os dois ao mesmo tempo de forma estática.

E também não ficam os dois desligados em uma entrada válida.

---

# 3. Revisão Curta: NMOS e PMOS

## 3.1 NMOS

O NMOS liga quando a entrada no gate é `1`.

```text
NMOS:

gate = 1 -> liga
gate = 0 -> desliga
```

Ele é usado principalmente na rede pull-down.

Por quê?

Porque ele é bom para puxar a saída para `0`.

```text
NMOS ligado -> caminho até GND -> saída pode virar 0
```

Resumo:

```text
NMOS liga com 1
NMOS puxa para 0
```

## 3.2 PMOS

O PMOS liga quando a entrada no gate é `0`.

```text
PMOS:

gate = 0 -> liga
gate = 1 -> desliga
```

Ele é usado principalmente na rede pull-up.

Por quê?

Porque ele é bom para puxar a saída para `1`.

```text
PMOS ligado -> caminho até VDD -> saída pode virar 1
```

Resumo:

```text
PMOS liga com 0
PMOS puxa para 1
```

## 3.3 Tabela essencial

| Transistor | Liga quando | Rede típica | Função física |
|---|---:|---|---|
| NMOS | entrada `1` | pull-down | puxar saída para `0` |
| PMOS | entrada `0` | pull-up | puxar saída para `1` |

Essa tabela é uma das mais importantes da aula.

---

# 4. Inversor CMOS

O inversor é a porta CMOS mais simples.

```text
          VDD
           |
         PMOS
 gate A ---|
           |
           Y
           |
         NMOS
 gate A ---|
           |
          GND
```

Os dois transistores recebem a mesma entrada `A`.

## 4.1 Caso A = 0

```text
A = 0
```

PMOS:

```text
gate = 0 -> liga
```

NMOS:

```text
gate = 0 -> desliga
```

Então existe caminho de `VDD` até `Y`.

```text
Y = 1
```

## 4.2 Caso A = 1

```text
A = 1
```

PMOS:

```text
gate = 1 -> desliga
```

NMOS:

```text
gate = 1 -> liga
```

Então existe caminho de `Y` até `GND`.

```text
Y = 0
```

## 4.3 Tabela do inversor CMOS

| A | PMOS | NMOS | Y |
|---:|---|---|---:|
| 0 | ligado | desligado | 1 |
| 1 | desligado | ligado | 0 |

Função:

```text
Y = A'
```

---

# 5. Rede Pull-Down

A rede pull-down é formada por NMOS.

Ela decide quando a saída será puxada para `0`.

```text
Y -> rede pull-down -> GND
```

Como NMOS liga com `1`, a rede pull-down conduz quando sua expressão lógica vale `1`.

Se a rede pull-down conduz:

```text
Y = 0
```

Então, se a condição de condução da rede pull-down for `G`, a saída será:

```text
Y = G'
```

Essa ideia é muito importante.

O pull-down descreve quando a saída zera.

## 5.1 NMOS em série

Dois NMOS em série:

```text
Y
|
NMOS A
|
NMOS B
|
GND
```

Para conduzir de `Y` até `GND`, os dois precisam ligar:

```text
A = 1 e B = 1
```

Logo:

```text
condição de condução = A . B
```

NMOS em série se comporta como:

```text
AND para condução
```

## 5.2 NMOS em paralelo

Dois NMOS em paralelo:

```text
      NMOS A
Y ----|    |---- GND
      NMOS B
```

Existe caminho para `GND` se qualquer um ligar:

```text
A = 1 ou B = 1
```

Logo:

```text
condição de condução = A + B
```

NMOS em paralelo se comporta como:

```text
OR para condução
```

## 5.3 Resumo da rede NMOS

| Ligação de NMOS | Condição para conduzir |
|---|---|
| série | AND |
| paralelo | OR |

---

# 6. Rede Pull-Up

A rede pull-up é formada por PMOS.

Ela decide quando a saída será puxada para `1`.

```text
VDD -> rede pull-up -> Y
```

Como PMOS liga com `0`, a leitura fica invertida em relação ao NMOS.

## 6.1 PMOS em série

Dois PMOS em série:

```text
VDD
 |
PMOS A
 |
PMOS B
 |
 Y
```

Para conduzir de `VDD` até `Y`, os dois precisam ligar.

PMOS liga com `0`, então:

```text
A = 0 e B = 0
```

Condição:

```text
A' . B'
```

Por DeMorgan:

```text
A' . B' = (A + B)'
```

## 6.2 PMOS em paralelo

Dois PMOS em paralelo:

```text
VDD ---- PMOS A ---- Y
   \--- PMOS B ----/
```

Existe caminho para `VDD` se qualquer PMOS ligar.

PMOS liga com `0`, então:

```text
A = 0 ou B = 0
```

Condição:

```text
A' + B'
```

Por DeMorgan:

```text
A' + B' = (A . B)'
```

## 6.3 Resumo da rede PMOS

| Ligação de PMOS | Condição para conduzir |
|---|---|
| série | entradas todas `0` |
| paralelo | pelo menos uma entrada `0` |

Mas, para desenhar CMOS, normalmente usamos uma regra mais prática:

```text
a rede PMOS é o dual da rede NMOS
```

Ou seja:

```text
série vira paralelo
paralelo vira série
```

---

# 7. O Que Significa Dual em CMOS?

Nas aulas de álgebra booleana, dualidade era trocar:

```text
AND <-> OR
0   <-> 1
```

Em CMOS, aparece uma ideia parecida no desenho das redes.

Se a rede pull-down usa NMOS em série, a rede pull-up correspondente usa PMOS em paralelo.

Se a rede pull-down usa NMOS em paralelo, a rede pull-up correspondente usa PMOS em série.

```text
pull-down NMOS        pull-up PMOS
série          <->    paralelo
paralelo       <->    série
```

Por isso NAND e NOR ficam tão naturais em CMOS.

---

# 8. NAND em CMOS

A porta NAND tem função:

```text
Y = (A . B)'
```

Ela vale `0` apenas quando:

```text
A = 1 e B = 1
```

Então a rede pull-down deve conduzir quando:

```text
A . B = 1
```

Para isso, usamos NMOS em série.

## 8.1 Rede pull-down da NAND

```text
Y
|
NMOS A
|
NMOS B
|
GND
```

Conduz quando:

```text
A . B
```

Se conduz:

```text
Y = 0
```

Logo:

```text
Y = (A . B)'
```

## 8.2 Rede pull-up da NAND

A rede pull-up é o dual:

```text
NMOS série -> PMOS paralelo
```

```text
VDD ---- PMOS A ---- Y
   \--- PMOS B ----/
```

Ela puxa `Y` para `1` quando:

```text
A = 0 ou B = 0
```

Isso é exatamente:

```text
A' + B' = (A . B)'
```

## 8.3 Tabela da NAND CMOS

| A | B | Pull-down NMOS série | Pull-up PMOS paralelo | Y |
|---:|---:|---|---|---:|
| 0 | 0 | desligado | ligado | 1 |
| 0 | 1 | desligado | ligado | 1 |
| 1 | 0 | desligado | ligado | 1 |
| 1 | 1 | ligado | desligado | 0 |

Função:

```text
Y = (A . B)'
```

## 8.4 Transistores na NAND de 2 entradas

Uma NAND CMOS de 2 entradas usa:

```text
2 NMOS
2 PMOS
total = 4 transistores
```

Para uma NAND de `n` entradas:

```text
n NMOS em série
n PMOS em paralelo
total = 2n transistores
```

---

# 9. NOR em CMOS

A porta NOR tem função:

```text
Y = (A + B)'
```

Ela vale `0` quando:

```text
A = 1 ou B = 1
```

Então a rede pull-down deve conduzir quando:

```text
A + B = 1
```

Para isso, usamos NMOS em paralelo.

## 9.1 Rede pull-down da NOR

```text
      NMOS A
Y ----|    |---- GND
      NMOS B
```

Conduz quando:

```text
A + B
```

Se conduz:

```text
Y = 0
```

Logo:

```text
Y = (A + B)'
```

## 9.2 Rede pull-up da NOR

A rede pull-up é o dual:

```text
NMOS paralelo -> PMOS série
```

```text
VDD
 |
PMOS A
 |
PMOS B
 |
 Y
```

Ela puxa `Y` para `1` quando:

```text
A = 0 e B = 0
```

Isso é:

```text
A' . B' = (A + B)'
```

## 9.3 Tabela da NOR CMOS

| A | B | Pull-down NMOS paralelo | Pull-up PMOS série | Y |
|---:|---:|---|---|---:|
| 0 | 0 | desligado | ligado | 1 |
| 0 | 1 | ligado | desligado | 0 |
| 1 | 0 | ligado | desligado | 0 |
| 1 | 1 | ligado | desligado | 0 |

Função:

```text
Y = (A + B)'
```

## 9.4 Transistores na NOR de 2 entradas

Uma NOR CMOS de 2 entradas usa:

```text
2 NMOS
2 PMOS
total = 4 transistores
```

Para uma NOR de `n` entradas:

```text
n NMOS em paralelo
n PMOS em série
total = 2n transistores
```

---

# 10. NAND e NOR: Comparação Direta

| Porta | Função | Rede NMOS pull-down | Rede PMOS pull-up |
|---|---|---|---|
| NAND | `(A . B)'` | série | paralelo |
| NOR | `(A + B)'` | paralelo | série |

Essa tabela cai muito bem em prova.

Macete:

```text
NAND:
zera quando todos são 1
NMOS precisa de todos ligados
NMOS em série

NOR:
zera quando qualquer um é 1
NMOS precisa de qualquer ligado
NMOS em paralelo
```

---

# 11. Por Que AND e OR Não São Tão Diretas?

CMOS estático é naturalmente inversor.

Ou seja, a rede pull-down descreve quando a saída vai para `0`.

Por isso portas como NAND e NOR são muito naturais.

Para fazer AND:

```text
AND = NAND seguida de inversor
```

```text
A ----\
      NAND ---- inversor ---- A.B
B ----/
```

Para fazer OR:

```text
OR = NOR seguida de inversor
```

```text
A ----\
      NOR ---- inversor ---- A+B
B ----/
```

Isso é parecido com o que você já viu em NAND/NOR como portas universais.

Só que agora aparece no nível de transistor.

---

# 12. Lendo Uma Rede CMOS Complexa

Em questões mais difíceis, pode aparecer uma rede com série e paralelo misturados.

O método mais seguro é:

```text
1. Leia a rede NMOS pull-down.
2. Monte a expressão de condução dela.
3. Lembre que, se a pull-down conduz, Y = 0.
4. Portanto, Y é o complemento da expressão da pull-down.
```

## 12.1 Exemplo 1

Rede pull-down:

```text
Y
|
NMOS A
|
+---- NMOS B ----+
|                |
+---- NMOS C ----+
|
GND
```

Leia a rede:

```text
A em série com (B em paralelo com C)
```

NMOS:

```text
série -> AND
paralelo -> OR
```

Condição de condução:

```text
G = A . (B + C)
```

Se `G=1`, a saída zera.

Logo:

```text
Y = [A . (B + C)]'
```

Aplicando DeMorgan:

```text
Y = A' + (B + C)'
Y = A' + B'C'
```

## 12.2 Rede pull-up correspondente

A rede pull-up é dual:

```text
NMOS série       -> PMOS paralelo
NMOS paralelo    -> PMOS série
```

Como a pull-down era:

```text
A em série com (B paralelo C)
```

A pull-up será:

```text
A em paralelo com (B série C)
```

Com PMOS:

```text
VDD ---- PMOS A ---- Y
   \--- PMOS B -- PMOS C ---/
```

Essa rede puxa para `1` quando:

```text
A = 0
ou
B = 0 e C = 0
```

Ou seja:

```text
Y = A' + B'C'
```

Confere com a função encontrada pela pull-down.

---

# 13. Como Projetar Uma Porta CMOS Para Uma Função

Para projetar uma porta CMOS estática, pense primeiro em quando a saída deve ser `0`.

Ou seja:

```text
se quero implementar F,
desenho a rede pull-down para F'
```

Porque:

```text
pull-down ligada -> saída 0
```

## 13.1 Passo a passo

```text
1. Determine F'
2. Desenhe a rede NMOS para F'
3. Troque série por paralelo e paralelo por série para desenhar a rede PMOS
4. A saída no meio será F
```

## 13.2 Exemplo: implementar F = (A . B)'

Essa é a NAND.

```text
F = (A . B)'
F' = A . B
```

Rede NMOS para `F'`:

```text
A . B -> NMOS A em série com NMOS B
```

Rede PMOS dual:

```text
PMOS A em paralelo com PMOS B
```

## 13.3 Exemplo: implementar F = (A + B)'

Essa é a NOR.

```text
F = (A + B)'
F' = A + B
```

Rede NMOS para `F'`:

```text
A + B -> NMOS A em paralelo com NMOS B
```

Rede PMOS dual:

```text
PMOS A em série com PMOS B
```

## 13.4 E se a função for A.B?

Para `F = A.B`:

```text
F' = (A.B)' = A' + B'
```

Se você não tiver `A'` e `B'` disponíveis, não dá para desenhar só com uma rede NMOS simples usando apenas transistores controlados por `A` e `B` sem adicionar inversores.

Na prática:

```text
A.B = NAND(A,B) seguida de inversor
```

Por isso a porta NAND é tão comum em CMOS.

---

# 14. Comportamento Estático Ideal

Em uma porta CMOS estática ideal, quando a saída está parada:

```text
ou ela está ligada a VDD
ou ela está ligada a GND
```

E não existe caminho direto permanente de `VDD` para `GND`.

Isso dá a ideia de baixo consumo estático.

## 14.1 Saída em 1

Quando `Y=1`:

```text
pull-up ligado
pull-down desligado
```

Então a saída fica carregada em nível alto.

## 14.2 Saída em 0

Quando `Y=0`:

```text
pull-up desligado
pull-down ligado
```

Então a saída fica descarregada para `GND`.

## 14.3 Durante a transição

Quando as entradas mudam, por um instante pode haver:

```text
carga ou descarga de capacitâncias
pequena corrente de curto-circuito
consumo dinâmico
atraso de propagação
```

Isso será aprofundado na Aula 22.

Por enquanto, memorize:

```text
CMOS ideal consome pouca potência estática
mas consome potência ao comutar
```

---

# 15. Erros Comuns

## 15.1 Achar que NMOS puxa para 1

Para esta prova, grave:

```text
NMOS -> pull-down -> puxa para 0
PMOS -> pull-up   -> puxa para 1
```

## 15.2 Esquecer que PMOS liga com 0

Esse erro troca NAND por NOR.

PMOS:

```text
entrada 0 -> liga
entrada 1 -> desliga
```

## 15.3 Ler série/paralelo igual para PMOS e NMOS sem pensar no gate

Fisicamente, série e paralelo ainda são série e paralelo.

Mas a condição lógica muda porque:

```text
NMOS liga com 1
PMOS liga com 0
```

## 15.4 Achar que NAND em CMOS tem PMOS em série

Errado.

NAND:

```text
NMOS em série
PMOS em paralelo
```

## 15.5 Achar que NOR em CMOS tem NMOS em série

Errado.

NOR:

```text
NMOS em paralelo
PMOS em série
```

## 15.6 Esquecer que CMOS naturalmente inverte

O pull-down indica quando a saída será `0`.

Se a rede pull-down conduz para `G`, então:

```text
Y = G'
```

---

# 16. Como Questões Costumam Cobrar

## 16.1 Identificar a porta pela rede

Exemplo:

```text
NMOS em série
PMOS em paralelo
```

Resposta:

```text
NAND
```

## 16.2 Identificar a rede correta

Exemplo:

```text
Como implementar NOR em CMOS?
```

Resposta:

```text
NMOS em paralelo
PMOS em série
```

## 16.3 Assinalar a incorreta

Exemplo:

```text
Assinale a alternativa incorreta sobre CMOS.
```

Alternativa falsa típica:

```text
PMOS liga quando gate = 1
```

## 16.4 Ler função por pull-down

Exemplo:

```text
rede NMOS = A em série com (B paralelo C)
```

Condição de condução:

```text
A . (B + C)
```

Função de saída:

```text
Y = [A . (B + C)]'
```

## 16.5 Contar transistores

Para portas simples:

```text
inversor -> 2 transistores
NAND2    -> 4 transistores
NOR2     -> 4 transistores
NAND3    -> 6 transistores
NOR3     -> 6 transistores
```

---

# 17. Exemplos Resolvidos

## 17.1 Exemplo 1 - Identificar porta

Uma porta CMOS tem:

```text
pull-down: dois NMOS em série
pull-up: dois PMOS em paralelo
```

Qual é a porta?

Resolução:

Dois NMOS em série conduzem quando:

```text
A . B
```

Quando conduzem:

```text
Y = 0
```

Logo:

```text
Y = (A . B)'
```

Resposta:

```text
NAND
```

## 17.2 Exemplo 2 - Identificar porta

Uma porta CMOS tem:

```text
pull-down: dois NMOS em paralelo
pull-up: dois PMOS em série
```

Dois NMOS em paralelo conduzem quando:

```text
A + B
```

Quando conduzem:

```text
Y = 0
```

Logo:

```text
Y = (A + B)'
```

Resposta:

```text
NOR
```

## 17.3 Exemplo 3 - Rede mista

Pull-down:

```text
(A em série com B) em paralelo com C
```

Condição de condução:

```text
G = A.B + C
```

Função de saída:

```text
Y = (A.B + C)'
```

Aplicando DeMorgan:

```text
Y = (A.B)' . C'
Y = (A' + B') . C'
```

Rede pull-up dual:

```text
(A em paralelo com B) em série com C
```

Com PMOS, isso puxa para `1` quando:

```text
(A = 0 ou B = 0) e C = 0
```

Ou:

```text
(A' + B') . C'
```

---

# 18. Mini-Resumo Visual

```text
NMOS:
liga com 1
fica embaixo
puxa para 0
série = AND
paralelo = OR

PMOS:
liga com 0
fica em cima
puxa para 1
rede dual da NMOS
```

```text
NAND:
NMOS série
PMOS paralelo

NOR:
NMOS paralelo
PMOS série
```

```text
Se pull-down conduz para G:
Y = G'
```

---

# 19. Exercícios

## 19.1 Conceituais

1. Qual transistor liga quando o gate recebe `1`: NMOS ou PMOS?

2. Qual transistor liga quando o gate recebe `0`: NMOS ou PMOS?

3. Em CMOS estático, qual rede puxa a saída para `VDD`?

4. Em CMOS estático, qual rede puxa a saída para `GND`?

5. Assinale a alternativa incorreta:

   A) NMOS é usado normalmente na rede pull-down.

   B) PMOS é usado normalmente na rede pull-up.

   C) PMOS liga quando o gate está em `1`.

   D) NMOS liga quando o gate está em `1`.

## 19.2 NAND e NOR

6. Uma porta CMOS tem NMOS em série e PMOS em paralelo. Qual é a porta?

7. Uma porta CMOS tem NMOS em paralelo e PMOS em série. Qual é a porta?

8. Em uma NAND CMOS de duas entradas, quantos transistores são usados?

9. Em uma NOR CMOS de três entradas, quantos transistores são usados?

10. Para fazer uma AND em CMOS usando portas simples, qual combinação é natural?

## 19.3 Leitura de rede

11. Uma rede pull-down tem `A` em série com `B`. Qual é a condição de condução da pull-down e qual é a saída `Y`?

12. Uma rede pull-down tem `A` em paralelo com `B`. Qual é a condição de condução da pull-down e qual é a saída `Y`?

13. Uma rede pull-down é `A` em série com `(B em paralelo com C)`. Qual é a expressão de saída?

14. Uma rede pull-down é `(A em série com B)` em paralelo com `C`. Qual é a expressão de saída?

15. A rede pull-down conduz quando `G = A + B.C`. Qual é a função de saída `Y`?

## 19.4 Questões estilo prova

16. Assinale a alternativa correta sobre uma NAND CMOS:

   A) NMOS em paralelo e PMOS em série.

   B) NMOS em série e PMOS em paralelo.

   C) Apenas NMOS em série.

   D) Apenas PMOS em paralelo.

17. Assinale a alternativa correta sobre uma NOR CMOS:

   A) NMOS em série e PMOS em paralelo.

   B) NMOS em paralelo e PMOS em série.

   C) NMOS e PMOS ambos em paralelo.

   D) NMOS e PMOS ambos em série.

18. Uma rede CMOS válida deve evitar, em estado estático ideal:

   A) saída ligada a VDD.

   B) saída ligada a GND.

   C) caminho direto permanente de VDD para GND.

   D) uso de PMOS.

19. Se a rede pull-down conduz quando `A.B.C = 1`, a porta implementada é:

   A) NAND de 3 entradas.

   B) NOR de 3 entradas.

   C) AND de 3 entradas.

   D) OR de 3 entradas.

20. Se a rede pull-down conduz quando `A+B+C = 1`, a porta implementada é:

   A) NAND de 3 entradas.

   B) NOR de 3 entradas.

   C) AND de 3 entradas.

   D) OR de 3 entradas.

---

# 20. Gabarito

1. NMOS.

2. PMOS.

3. Rede pull-up.

4. Rede pull-down.

5. C. PMOS liga com gate em `0`, não em `1`.

6. NAND.

7. NOR.

8. Quatro transistores: dois NMOS e dois PMOS.

9. Seis transistores: três NMOS e três PMOS.

10. NAND seguida de inversor.

11. Pull-down conduz com `A.B`. Logo, `Y = (A.B)'`.

12. Pull-down conduz com `A+B`. Logo, `Y = (A+B)'`.

13. Pull-down conduz com `A.(B+C)`. Logo, `Y = [A.(B+C)]' = A' + B'C'`.

14. Pull-down conduz com `A.B + C`. Logo, `Y = (A.B + C)' = (A' + B').C'`.

15. `Y = (A + B.C)' = A'.(B' + C')`.

16. B.

17. B.

18. C.

19. A. Se zera quando `A.B.C=1`, então `Y=(A.B.C)'`, uma NAND de 3 entradas.

20. B. Se zera quando `A+B+C=1`, então `Y=(A+B+C)'`, uma NOR de 3 entradas.

---

# 21. O Que Memorizar

Memorize primeiro:

```text
NMOS liga com 1
PMOS liga com 0
```

Depois:

```text
NMOS fica no pull-down
PMOS fica no pull-up
```

Depois:

```text
pull-down ligado -> saída 0
pull-up ligado   -> saída 1
```

Depois:

```text
NAND -> NMOS série, PMOS paralelo
NOR  -> NMOS paralelo, PMOS série
```

E finalmente:

```text
se a rede pull-down conduz para G,
a saída é Y = G'
```

---

# 22. Plano De Estudo Para Esta Aula

Tempo sugerido: **45 a 70 minutos**.

## 22.1 Primeira passada

Leia com foco nestas perguntas:

```text
quem liga com 1?
quem liga com 0?
quem puxa para VDD?
quem puxa para GND?
por que NAND usa NMOS em série?
por que NOR usa NMOS em paralelo?
```

## 22.2 Segunda passada

Refaça sem olhar:

```text
inversor CMOS
NAND CMOS
NOR CMOS
```

Não precisa desenhar bonito.

Precisa saber explicar:

```text
quando a saída vira 0?
quando a saída vira 1?
```

## 22.3 Exercícios prioritários

Se tiver pouco tempo, faça:

```text
5, 6, 7, 11, 12, 13, 16, 17, 19, 20
```

Eles cobrem o que mais tende a cair.

---

# 23. Conexão Com A Próxima Aula

Nesta aula, você viu como CMOS constrói portas combinacionais.

A próxima aula aprofunda o que acontece quando a porta deixa de ser ideal:

```text
potência dinâmica
capacitância de carga
atraso de propagação
caminho crítico físico
glitches
hazards estáticos e dinâmicos
```

Conexão direta:

```text
CMOS combinacional explica a estrutura
Aula 22 explica atraso, consumo e riscos temporais dessa estrutura
```

Se você entender bem esta aula, a próxima fica muito mais natural.
