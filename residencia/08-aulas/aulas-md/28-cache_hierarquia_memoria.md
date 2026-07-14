# Aula Detalhada - Cache E Hierarquia De Memória

**Tema do dia:** hierarquia de memória, registradores, cache, memória principal, localidade temporal, localidade espacial, hit, miss, taxa de acerto, mapeamento direto, associativo e associativo por conjunto  
**Aula na sequência:** 28  
**Objetivo:** entender por que cache existe, como ela melhora o desempenho do processador e reconhecer os principais tipos de organização de cache cobrados em questões conceituais.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 23, você estudou:

```text
banco de registradores
ROM
SRAM
DRAM
```

Você viu também que:

```text
registradores são muito rápidos e pequenos
SRAM é rápida e costuma ser usada em cache
DRAM é maior, mais densa e mais lenta
```

Agora a pergunta é:

```text
como o processador evita acessar a DRAM toda hora?
```

A resposta é:

```text
cache
```

Cache é uma memória pequena e rápida colocada entre o processador e a memória principal.

Ela existe porque acessar a memória principal é muito mais lento do que executar operações dentro do processador.

---

# 2. Ideia Central

O processador trabalha muito rápido.

A memória principal é grande, mas é mais lenta.

Se o processador precisasse buscar tudo diretamente na memória principal, ele ficaria esperando dados o tempo todo.

Então o sistema usa uma memória intermediária:

```text
processador
-> cache
-> memória principal
```

Cache guarda cópias de dados e instruções que provavelmente serão usados em breve.

O objetivo é simples:

```text
se o dado estiver na cache, o acesso é rápido
se não estiver, precisa buscar na memória principal
```

---

# 3. Hierarquia De Memória

A hierarquia de memória organiza armazenamento por velocidade, tamanho e custo.

Uma visão comum:

```text
registradores
cache L1
cache L2
cache L3
memória principal / DRAM
armazenamento secundário / SSD / disco
```

Quanto mais perto do processador:

```text
mais rápido
menor
mais caro por bit
```

Quanto mais longe:

```text
mais lento
maior
mais barato por bit
```

Ordem típica de velocidade:

```text
registradores > cache > DRAM > SSD/disco
```

Para prova:

```text
cache é menor e mais rápida que a memória principal
memória principal é maior e mais lenta que a cache
registradores são ainda mais rápidos e menores
```

---

# 4. O Que É Cache?

Cache é uma memória rápida que guarda cópias de partes da memória principal.

Ela normalmente é feita com SRAM.

Por quê?

Porque SRAM:

```text
é rápida
não precisa de refresh
é boa para pequenas memórias de alto desempenho
```

DRAM, por outro lado:

```text
é mais densa
é mais barata por bit
é usada como memória principal
precisa de refresh
```

Então:

```text
SRAM -> cache
DRAM -> memória principal
```

Isso não é uma lei universal absoluta, mas é a associação mais comum em prova.

---

# 5. Hit E Miss

Quando o processador tenta acessar um dado ou instrução, a cache verifica se aquilo está nela.

Se está:

```text
cache hit
```

Se não está:

```text
cache miss
```

Hit:

```text
o dado foi encontrado na cache
acesso rápido
processador espera pouco ou nada
```

Miss:

```text
o dado não estava na cache
precisa buscar na memória principal
acesso mais lento
processador pode ficar parado esperando
```

Exemplo:

```text
CPU quer ler endereço 0x1000
cache verifica se tem uma cópia daquele bloco
se tiver -> hit
se não tiver -> miss
```

---

# 6. Taxa De Acerto

Taxa de acerto, ou hit rate, indica a proporção de acessos que foram hits.

```text
hit rate = hits / acessos totais
```

Exemplo:

```text
1000 acessos
920 hits
80 misses
```

Então:

```text
hit rate = 920 / 1000 = 92%
```

Taxa de erro, ou miss rate:

```text
miss rate = misses / acessos totais
```

No exemplo:

```text
miss rate = 80 / 1000 = 8%
```

Relação:

```text
hit rate + miss rate = 100%
```

Para prova:

```text
quanto maior a taxa de acerto, melhor tende a ser o desempenho
quanto maior a taxa de miss, mais acessos lentos à memória principal
```

---

# 7. Por Que Cache Funciona?

Cache funciona por causa da localidade.

Localidade é a tendência de programas acessarem dados próximos ou repetidos.

Existem dois tipos principais:

```text
localidade temporal
localidade espacial
```

---

## 7.1 Localidade Temporal

Localidade temporal:

```text
se algo foi usado agora, talvez seja usado de novo em breve
```

Exemplo:

```c
for (int i = 0; i < 1000; i++) {
    soma = soma + x;
}
```

A variável `soma` é usada repetidamente.

Se ela estiver na cache, vários acessos podem ser rápidos.

Ideia:

```text
reuso no tempo
```

---

## 7.2 Localidade Espacial

Localidade espacial:

```text
se um endereço foi acessado, endereços próximos talvez sejam acessados em breve
```

Exemplo:

```c
for (int i = 0; i < 1000; i++) {
    soma += vetor[i];
}
```

O programa acessa:

```text
vetor[0]
vetor[1]
vetor[2]
vetor[3]
...
```

São posições próximas na memória.

Por isso a cache normalmente não traz apenas um byte ou uma palavra isolada.

Ela traz um bloco inteiro.

Ideia:

```text
proximidade no espaço de endereços
```

---

# 8. Bloco De Cache

Cache trabalha com blocos.

Um bloco é um pedaço contínuo da memória principal copiado para a cache.

Exemplo:

```text
bloco de 16 bytes
bloco de 32 bytes
bloco de 64 bytes
```

Se o processador acessa um endereço e ocorre miss, a cache pode buscar o bloco inteiro que contém aquele endereço.

Por quê?

Porque pela localidade espacial, é provável que endereços vizinhos sejam usados logo depois.

Exemplo:

```text
CPU acessa endereço 1000
cache busca bloco 1000-1063
se depois acessar 1004, 1008, 1012, pode ser hit
```

---

# 9. O Problema Do Mapeamento

A cache é menor que a memória principal.

Então nem todo bloco da memória cabe ao mesmo tempo na cache.

A pergunta é:

```text
em qual posição da cache um bloco da memória pode ficar?
```

Essa pergunta é respondida pelo tipo de mapeamento.

Os três principais:

```text
mapeamento direto
mapeamento associativo
mapeamento associativo por conjunto
```

---

# 10. Mapeamento Direto

No mapeamento direto, cada bloco da memória principal só pode ir para uma posição específica da cache.

Ideia:

```text
cada bloco tem uma linha obrigatória
```

Exemplo simplificado:

```text
bloco 0 -> linha 0
bloco 1 -> linha 1
bloco 2 -> linha 2
bloco 3 -> linha 3
bloco 4 -> linha 0
bloco 5 -> linha 1
```

Se dois blocos diferentes competem pela mesma linha, um expulsa o outro.

Vantagem:

```text
simples
rápido
barato
```

Desvantagem:

```text
pode ter muitos conflitos
```

Conflito:

```text
dois blocos usados alternadamente caem na mesma linha
um fica expulsando o outro
```

Pegadinha:

```text
mapeamento direto não significa que o dado vai para qualquer lugar
significa justamente o contrário: vai para um lugar determinado
```

---

# 11. Mapeamento Totalmente Associativo

No mapeamento totalmente associativo, um bloco da memória pode ir para qualquer linha da cache.

Ideia:

```text
qualquer bloco em qualquer linha
```

Vantagem:

```text
menos conflito
mais flexível
```

Desvantagem:

```text
hardware de busca mais complexo
precisa comparar com várias linhas
```

Para saber se um endereço está na cache, o hardware precisa procurar em muitas posições possíveis.

Isso aumenta custo e complexidade.

Pegadinha:

```text
associativo não significa mais lento sempre
significa mais flexível, mas com hardware mais complexo
```

---

# 12. Mapeamento Associativo Por Conjunto

Esse é o meio-termo entre os dois anteriores.

A cache é dividida em conjuntos.

Cada bloco da memória escolhe um conjunto específico, mas dentro desse conjunto pode ocupar mais de uma linha.

Exemplo:

```text
cache com 4 conjuntos
cada conjunto com 2 linhas
```

Um bloco pode ser obrigado a ir para o conjunto 1, mas pode ficar em qualquer uma das 2 linhas daquele conjunto.

Ideia:

```text
conjunto fixo
linha flexível dentro do conjunto
```

Esse tipo é muito usado porque equilibra:

```text
desempenho
taxa de acerto
custo de hardware
complexidade
```

Se uma questão perguntar:

```text
qual organização melhora flexibilidade e taxa de acertos em processadores modernos?
```

Uma resposta provável:

```text
mapeamento associativo por conjunto
```

---

# 13. Comparação Rápida

```text
Mapeamento direto
- cada bloco tem uma linha possível
- simples
- mais sujeito a conflitos

Totalmente associativo
- bloco pode ir para qualquer linha
- flexível
- hardware mais complexo

Associativo por conjunto
- bloco vai para um conjunto
- pode ocupar uma das linhas do conjunto
- equilíbrio entre custo e flexibilidade
```

Tabela:

| Tipo | Onde o bloco pode ficar? | Vantagem | Desvantagem |
|---|---|---|---|
| Direto | Uma linha específica | Simples | Mais conflitos |
| Associativo | Qualquer linha | Menos conflitos | Mais complexo |
| Por conjunto | Qualquer linha dentro de um conjunto | Bom equilíbrio | Complexidade intermediária |

---

# 14. Tag, Índice E Deslocamento

Em muitas explicações de cache, o endereço é dividido em campos.

Exemplo conceitual:

```text
tag | índice | deslocamento
```

Deslocamento:

```text
escolhe o byte/palavra dentro do bloco
```

Índice:

```text
escolhe linha ou conjunto da cache
```

Tag:

```text
confirma qual bloco da memória está ali
```

Para prova objetiva básica, você não precisa calcular sempre.

Mas precisa reconhecer:

```text
tag identifica o bloco
índice localiza linha/conjunto
offset/deslocamento localiza posição dentro do bloco
```

---

# 15. Exemplo Simples

Imagine:

```text
cache com 4 linhas
mapeamento direto
```

Blocos:

```text
bloco 0 -> linha 0
bloco 1 -> linha 1
bloco 2 -> linha 2
bloco 3 -> linha 3
bloco 4 -> linha 0
bloco 5 -> linha 1
```

Se o programa alterna:

```text
bloco 0
bloco 4
bloco 0
bloco 4
```

Ambos usam a linha 0.

Resultado:

```text
bloco 0 entra
bloco 4 expulsa bloco 0
bloco 0 expulsa bloco 4
bloco 4 expulsa bloco 0
```

Isso gera muitos misses por conflito.

Com associativo por conjunto ou totalmente associativo, talvez os dois blocos pudessem coexistir.

---

# 16. Cache Não É Memória Principal

Pegadinha comum:

```text
cache aumenta a capacidade total da memória principal?
```

Resposta:

```text
não
```

Cache melhora desempenho, não substitui a memória principal.

Ela guarda cópias.

Se um computador tem:

```text
16 GB de RAM
32 MB de cache
```

Não se diz que ele tem:

```text
16 GB + 32 MB de memória principal
```

A cache é uma camada de desempenho.

---

# 17. O Que A Prova Pode Perguntar?

Questões prováveis:

```text
O que é cache?
O que é hit?
O que é miss?
Por que cache melhora desempenho?
Qual memória costuma ser usada para cache?
Qual é a diferença entre mapeamento direto e associativo?
O que é mapeamento associativo por conjunto?
Por que localidade espacial ajuda cache?
Por que localidade temporal ajuda cache?
```

Resposta-chave:

```text
cache explora localidade para reduzir acessos lentos à memória principal
```

---

# 18. Pegadinhas

## 18.1 Cache Não É Registrador

Registradores ficam dentro do processador e são acessados diretamente pelas instruções.

Cache fica entre processador e memória principal.

```text
registrador -> operando explícito em instrução
cache -> camada transparente de desempenho
```

---

## 18.2 Cache Não É DRAM

Cache costuma ser SRAM.

Memória principal costuma ser DRAM.

```text
SRAM -> rápida, cara, menos densa
DRAM -> maior, mais densa, precisa refresh
```

---

## 18.3 Mais Cache Nem Sempre Resolve Tudo

Cache maior pode reduzir misses, mas:

```text
pode aumentar latência
pode consumir mais energia
pode custar mais área
```

Para prova básica, maior cache tende a ajudar.

Mas não é resposta universal para qualquer problema.

---

## 18.4 Associativo Por Conjunto Não É Igual A Totalmente Associativo

Associativo por conjunto:

```text
bloco escolhe conjunto
dentro do conjunto há liberdade
```

Totalmente associativo:

```text
bloco pode ir para qualquer linha da cache inteira
```

---

## 18.5 Hit Rate Não É Velocidade Da Cache

Hit rate é proporção de acessos encontrados na cache.

Não é o tempo de acesso.

Um sistema pode ter:

```text
cache rápida mas hit rate ruim
cache maior mas acesso um pouco mais lento
```

---

# 19. Resumo De Prova

```text
cache = memória pequena e rápida entre CPU e memória principal
hit = dado encontrado na cache
miss = dado não encontrado na cache
hit rate = hits / acessos totais
localidade temporal = usar de novo em breve
localidade espacial = usar endereços próximos
mapeamento direto = uma linha possível
associativo = qualquer linha
associativo por conjunto = conjunto fixo, linha flexível dentro do conjunto
SRAM costuma ser usada em cache
DRAM costuma ser usada como memória principal
```

---

# 20. Exercícios

## 20.1 Conceituais

1. O que é cache?
2. Qual é a diferença entre cache hit e cache miss?
3. Por que cache melhora o desempenho médio do processador?
4. O que é localidade temporal?
5. O que é localidade espacial?
6. Qual memória costuma ser usada em cache: SRAM ou DRAM?
7. Qual memória costuma ser usada como memória principal: SRAM ou DRAM?
8. No mapeamento direto, um bloco pode ir para qualquer linha?
9. No mapeamento totalmente associativo, um bloco pode ir para qualquer linha?
10. O que significa mapeamento associativo por conjunto?

## 20.2 Múltipla Escolha

11. Uma cache teve 900 hits em 1000 acessos. Qual é a taxa de acerto?

- A) 10%
- B) 50%
- C) 90%
- D) 100%

12. Qual alternativa melhor descreve localidade espacial?

- A) Um dado usado agora tende a ser usado novamente em breve.
- B) Endereços próximos ao acessado tendem a ser usados em breve.
- C) A cache sempre armazena apenas um bit por vez.
- D) A memória principal é sempre mais rápida que a cache.

13. Em cache com mapeamento direto:

- A) Um bloco pode ir para qualquer linha.
- B) Um bloco só pode ir para uma linha determinada.
- C) Não há possibilidade de conflito.
- D) Não existe tag.

14. Em cache totalmente associativa:

- A) Um bloco pode ir para qualquer linha.
- B) Um bloco só pode ir para uma linha fixa.
- C) Cada bloco precisa ir para a DRAM antes de ser usado.
- D) Não há comparação de tags.

15. O mapeamento associativo por conjunto é melhor descrito como:

- A) cada bloco pode ir para qualquer linha da cache inteira.
- B) cada bloco só pode ir para uma linha única.
- C) cada bloco vai para um conjunto e pode ocupar uma das linhas desse conjunto.
- D) cada bloco nunca é removido da cache.

---

# 21. Gabarito

1. Cache é uma memória pequena e rápida que guarda cópias de dados/instruções próximos ao processador.
2. Hit é quando o dado está na cache; miss é quando precisa buscar em nível mais lento.
3. Porque reduz acessos lentos à memória principal.
4. Tendência de reutilizar em breve algo usado recentemente.
5. Tendência de acessar endereços próximos ao endereço usado.
6. SRAM.
7. DRAM.
8. Não.
9. Sim.
10. O bloco escolhe um conjunto, mas pode ocupar uma das linhas desse conjunto.
11. C.
12. B.
13. B.
14. A.
15. C.

