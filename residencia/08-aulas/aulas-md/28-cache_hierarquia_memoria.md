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

Não precisa existir uma ROM dizendo para onde cada bloco vai.

O mais importante é entender que a escolha da linha é feita por uma regra fixa usando bits do endereço.

Em modelo didático:

```text
linha = número do bloco mod número de linhas da cache
```

`mod` é o resto da divisão.

Exemplo simplificado:

```text
bloco 0 -> linha 0
bloco 1 -> linha 1
bloco 2 -> linha 2
bloco 3 -> linha 3
bloco 4 -> linha 0
bloco 5 -> linha 1
```

Se a cache tem 4 linhas:

```text
bloco 0 mod 4 = linha 0
bloco 1 mod 4 = linha 1
bloco 2 mod 4 = linha 2
bloco 3 mod 4 = linha 3
bloco 4 mod 4 = linha 0
bloco 5 mod 4 = linha 1
```

Em cache real, o número de linhas/conjuntos costuma ser potência de 2:

```text
4, 8, 16, 32, 64...
```

Isso facilita o hardware, porque o índice pode ser obtido apenas pegando alguns bits do endereço.

Exemplo com 4 linhas:

```text
4 = 2²
índice = 2 bits
```

Então:

```text
bloco 0 = 000 -> índice 00 -> linha 0
bloco 1 = 001 -> índice 01 -> linha 1
bloco 2 = 010 -> índice 10 -> linha 2
bloco 3 = 011 -> índice 11 -> linha 3
bloco 4 = 100 -> índice 00 -> linha 0
```

Se dois blocos diferentes competem pela mesma linha, um expulsa o outro.

Exemplo de conflito:

```text
bloco 0 -> linha 0
bloco 4 -> linha 0
```

Se o programa alterna entre eles:

```text
acessa bloco 0 -> entra na linha 0
acessa bloco 4 -> expulsa bloco 0
acessa bloco 0 -> expulsa bloco 4
acessa bloco 4 -> expulsa bloco 0
```

Isso é um miss por conflito.

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

Para saber se um endereço está na cache, o hardware precisa verificar todas as linhas possíveis.

Mas cuidado:

```text
ele normalmente não procura linha por linha de forma sequencial
```

Isso seria lento.

O comum é comparar as tags em paralelo.

Exemplo:

```text
tag procurada = 10110

linha 0 tem tag 00101
linha 1 tem tag 10110
linha 2 tem tag 11100
linha 3 tem tag 00010
```

O hardware faz comparações em paralelo:

```text
tag procurada == tag da linha 0?
tag procurada == tag da linha 1?
tag procurada == tag da linha 2?
tag procurada == tag da linha 3?
```

Se alguma comparação bater:

```text
hit
```

Se nenhuma bater:

```text
miss
```

Então o problema principal não é uma busca sequencial lenta.

O problema é custo de hardware:

```text
um comparador por linha
mais fios
mais lógica de seleção
mais área
mais consumo
mais complexidade
```

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

Exemplo com 8 linhas de cache, organizada em 4 conjuntos com 2 linhas cada:

```text
Conjunto 0: linha 0 e linha 1
Conjunto 1: linha 2 e linha 3
Conjunto 2: linha 4 e linha 5
Conjunto 3: linha 6 e linha 7
```

Como existem 4 conjuntos, o modelo didático é:

```text
conjunto = número do bloco mod 4
```

Então:

```text
bloco 0 -> conjunto 0 -> pode ficar na linha 0 ou 1
bloco 1 -> conjunto 1 -> pode ficar na linha 2 ou 3
bloco 2 -> conjunto 2 -> pode ficar na linha 4 ou 5
bloco 3 -> conjunto 3 -> pode ficar na linha 6 ou 7
bloco 4 -> conjunto 0 -> pode ficar na linha 0 ou 1
bloco 5 -> conjunto 1 -> pode ficar na linha 2 ou 3
```

Perceba a diferença para o mapeamento direto.

No direto:

```text
bloco 0 -> linha 0
bloco 4 -> linha 0
```

Eles brigam pela mesma linha.

No associativo por conjunto 2-way:

```text
bloco 0 -> conjunto 0 -> linha 0 ou 1
bloco 4 -> conjunto 0 -> linha 0 ou 1
```

Eles podem coexistir:

```text
linha 0 -> bloco 0
linha 1 -> bloco 4
```

Mas se vier outro bloco do mesmo conjunto:

```text
bloco 8 -> conjunto 0
```

O conjunto pode estar cheio:

```text
conjunto 0:
linha 0 -> bloco 0
linha 1 -> bloco 4
```

Para colocar o bloco 8, a cache precisa escolher alguém para sair.

Essa escolha é feita por uma política de substituição.

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

## 12.1 O Que Significa 2-Way, 4-Way E 8-Way?

O número de vias indica quantas linhas existem em cada conjunto.

```text
2-way set associative -> 2 linhas por conjunto
4-way set associative -> 4 linhas por conjunto
8-way set associative -> 8 linhas por conjunto
```

Quanto maior o número de vias:

```text
menos conflitos dentro do conjunto
mais comparadores por acesso
mais custo/complexidade
```

Comparação:

```text
direto -> compara 1 tag
2-way -> compara 2 tags do conjunto
4-way -> compara 4 tags do conjunto
totalmente associativo -> compara todas as tags da cache
```

Por isso o associativo por conjunto é o meio-termo:

```text
não compara a cache inteira
mas também não prende o bloco a uma única linha
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

## 13.1 Política De Substituição

Política de substituição responde:

```text
se o conjunto está cheio, qual linha deve sair?
```

Isso aparece principalmente em:

```text
cache associativa
cache associativa por conjunto
```

No mapeamento direto, não há muita escolha:

```text
se o bloco caiu naquela linha, ele substitui o que estava naquela linha
```

Mas no associativo por conjunto, pode haver várias linhas candidatas.

Exemplo:

```text
conjunto 0 tem 2 linhas
linha 0 -> bloco 0
linha 1 -> bloco 4
novo bloco -> bloco 8
```

Qual sai?

Depende da política.

---

## 13.2 LRU

LRU significa:

```text
Least Recently Used
menos recentemente usado
```

Ideia:

```text
expulsar a linha que ficou mais tempo sem ser usada
```

Exemplo:

```text
conjunto 0:
linha 0 -> bloco 0, usado há muito tempo
linha 1 -> bloco 4, usado agora há pouco
```

Se entra o bloco 8:

```text
LRU expulsa bloco 0
```

Por quê?

Porque ele é o menos recentemente usado.

Para prova, LRU é a política clássica mais importante.

Se uma questão perguntar genericamente:

```text
qual política substitui o bloco menos usado recentemente?
```

Resposta:

```text
LRU
```

---

## 13.3 Pseudo-LRU

LRU exato pode ser caro em hardware, principalmente com muitas vias.

Por quê?

Porque o hardware teria que manter uma ordem precisa de uso entre várias linhas.

Em cache 2-way, isso é fácil.

Em cache 8-way ou mais, fica mais caro.

Pseudo-LRU é uma aproximação.

Ideia:

```text
tentar expulsar algo próximo do menos recentemente usado
sem manter o LRU perfeito
```

Para prova:

```text
pseudo-LRU = aproximação mais barata do LRU real
```

Não precisa aprofundar árvore de bits ou algoritmo interno, a menos que a questão traga.

---

## 13.4 FIFO, Aleatória E Outras

FIFO:

```text
First In, First Out
o primeiro bloco que entrou é o primeiro a sair
```

Aleatória:

```text
escolhe uma linha aleatória para substituir
```

FIFO é simples, mas pode expulsar uma linha que ainda está sendo muito usada.

Aleatória é simples em alguns hardwares, mas não tenta usar histórico.

Para sua prova, a ordem de importância é:

```text
LRU -> saber bem
pseudo-LRU -> reconhecer
FIFO/aleatória -> saber a ideia
```

---

## 13.5 Linha Dirty E Escrita Na Cache

Uma linha dirty é uma linha modificada na cache que ainda não foi atualizada na memória principal.

Dirty significa:

```text
suja
modificada
```

Isso aparece em política de escrita chamada write-back.

Write-through:

```text
quando escreve, atualiza cache e memória principal imediatamente
```

Write-back:

```text
quando escreve, atualiza primeiro só a cache
marca a linha como dirty
escreve na memória principal depois, quando a linha for substituída ou necessário
```

Exemplo:

```text
CPU escreve em um dado que está na cache
cache atualiza a linha
memória principal ainda fica com valor antigo
linha recebe dirty = 1
```

Se essa linha precisar sair da cache:

```text
dirty = 1 -> precisa escrever de volta na memória antes de expulsar
dirty = 0 -> pode expulsar sem escrever, pois a memória já está igual
```

Para prova:

```text
dirty bit indica que a linha foi modificada e precisa ser escrita de volta antes de ser descartada
```

---

# 14. Tag, Índice E Deslocamento

Em muitas explicações de cache, o endereço é dividido em campos.

Forma clássica:

```text
[ TAG ][ ÍNDICE ][ DESLOCAMENTO ]
bits mais altos        bits mais baixos
```

Esses campos existem porque a cache precisa responder três perguntas:

```text
1. Onde procurar?
2. O bloco encontrado é realmente o bloco certo?
3. Qual byte/palavra dentro do bloco foi pedido?
```

As respostas são:

```text
índice       -> onde procurar
tag          -> confirma se é o bloco certo
deslocamento -> escolhe a posição dentro do bloco
```

---

## 14.1 Deslocamento / Offset

O deslocamento, ou offset, é como o índice dentro de uma pequena lista de bytes do bloco.

Se o bloco tem 4 bytes:

```text
bloco = [byte0, byte1, byte2, byte3]
```

Então:

```text
offset 00 -> byte0
offset 01 -> byte1
offset 10 -> byte2
offset 11 -> byte3
```

Se o bloco tem 8 bytes:

```text
offset 000 -> byte0
offset 001 -> byte1
offset 010 -> byte2
...
offset 111 -> byte7
```

Regra:

```text
bits de offset = log2(tamanho do bloco em bytes)
```

Exemplos:

```text
bloco de 4 bytes  -> 2 bits de offset
bloco de 8 bytes  -> 3 bits de offset
bloco de 16 bytes -> 4 bits de offset
```

Para prova:

```text
offset não escolhe a linha da cache
offset escolhe o pedaço dentro do bloco
```

---

## 14.2 Índice

O índice diz onde a cache deve procurar.

No mapeamento direto:

```text
índice escolhe uma linha
```

No associativo por conjunto:

```text
índice escolhe um conjunto
```

Exemplo com cache direta de 8 linhas:

```text
índice 000 -> linha 0
índice 001 -> linha 1
índice 010 -> linha 2
...
índice 111 -> linha 7
```

Exemplo com cache associativa por conjunto com 4 conjuntos:

```text
índice 00 -> conjunto 0
índice 01 -> conjunto 1
índice 10 -> conjunto 2
índice 11 -> conjunto 3
```

Regra:

```text
bits de índice = log2(número de linhas ou conjuntos)
```

Depende do mapeamento:

```text
direto -> número de linhas
por conjunto -> número de conjuntos
totalmente associativo -> não tem índice
```

---

## 14.3 Tag

A tag funciona como o ID do bloco.

Mas ela não é o endereço inteiro.

Ela é:

```text
o que sobra do endereço depois de tirar índice e offset
```

Forma:

```text
[ TAG ][ ÍNDICE ][ OFFSET ]
```

Então:

```text
tag = bits mais altos que sobraram
```

Por que precisa de tag?

Porque vários blocos diferentes podem cair na mesma linha ou no mesmo conjunto.

Exemplo com mapeamento direto de 4 linhas:

```text
bloco 0 -> linha 0
bloco 4 -> linha 0
bloco 8 -> linha 0
```

Quando o índice diz:

```text
olhe a linha 0
```

ainda não sabemos se a linha 0 contém:

```text
bloco 0
bloco 4
bloco 8
outro bloco que caiu ali
```

A tag confirma:

```text
o bloco guardado nessa linha é o bloco que eu quero?
```

Se a tag guardada bate com a tag do endereço:

```text
hit
```

Se não bate:

```text
miss
```

---

## 14.4 Ordem Dos Bits E Ordem De Uso

No endereço, a ordem dos campos é:

```text
[ TAG ][ ÍNDICE ][ OFFSET ]
```

Mas a ordem mental de uso pela cache é:

```text
1. índice -> escolhe linha/conjunto
2. tag -> verifica se é o bloco certo
3. offset -> escolhe byte/palavra dentro do bloco
```

Por que o offset fica no fim?

Porque endereços próximos dentro do mesmo bloco diferem apenas nos bits mais baixos.

Exemplo com bloco de 4 bytes:

```text
endereço do byte 0 termina em 00
endereço do byte 1 termina em 01
endereço do byte 2 termina em 10
endereço do byte 3 termina em 11
```

Esses bits baixos são o offset.

---

## 14.5 Exemplo Completo Com Endereço

Suponha:

```text
cache com mapeamento direto
8 linhas
bloco de 4 bytes
endereços de 12 bits
```

Primeiro calculamos os tamanhos dos campos.

Bloco de 4 bytes:

```text
4 = 2²
offset = 2 bits
```

Cache com 8 linhas:

```text
8 = 2³
índice = 3 bits
```

Endereço de 12 bits:

```text
tag = 12 - 3 - 2 = 7 bits
```

Formato:

```text
[ TAG 7 bits ][ ÍNDICE 3 bits ][ OFFSET 2 bits ]
```

Agora pegue o endereço:

```text
101101011001
```

Separando:

```text
1011010 110 01
```

Logo:

```text
TAG    = 1011010
ÍNDICE = 110
OFFSET = 01
```

Passo a passo:

```text
1. índice 110₂ = 6 -> olhar linha 6
2. comparar tag da linha 6 com 1011010
3. se bater, offset 01 escolhe o byte 1 dentro do bloco
```

Se a linha 6 tiver:

```text
valid = 1
tag guardada = 1011010
dados = [A0, B7, 4C, 91]
```

Comparação:

```text
1011010 == 1011010 -> hit
```

Offset:

```text
01 -> byte 1
```

Resultado:

```text
retorna B7
```

Se a linha 6 tiver:

```text
valid = 1
tag guardada = 0001110
```

Comparação:

```text
0001110 != 1011010 -> miss
```

Então a cache precisa buscar o bloco correto na memória principal.

---

## 14.6 Como Muda Em Cada Mapeamento?

### Mapeamento Direto

```text
[ TAG ][ ÍNDICE ][ OFFSET ]
```

Uso:

```text
índice escolhe uma linha exata
tag compara só com aquela linha
offset escolhe byte/palavra dentro do bloco
```

Exemplo:

```text
índice 110 -> linha 6
```

Só existe uma linha possível.

---

### Associativo Por Conjunto

```text
[ TAG ][ ÍNDICE DO CONJUNTO ][ OFFSET ]
```

Uso:

```text
índice escolhe o conjunto
tag compara com todas as linhas/vias daquele conjunto
offset escolhe byte/palavra dentro do bloco
```

Exemplo:

```text
índice 10 -> conjunto 2
```

Se o conjunto 2 é 2-way:

```text
linha A do conjunto 2 -> compara tag
linha B do conjunto 2 -> compara tag
```

Se uma bater:

```text
hit naquela via
```

---

### Totalmente Associativo

No totalmente associativo, não existe índice.

Porque o bloco pode estar em qualquer linha da cache.

Formato:

```text
[ TAG ][ OFFSET ]
```

Uso:

```text
tag compara com todas as linhas da cache
offset escolhe byte/palavra dentro do bloco
```

Isso reduz conflitos, mas exige muitos comparadores.

---

## 14.7 Resumo Para Decorar

```text
offset = índice dentro do bloco
índice = onde procurar na cache
tag = identidade do bloco
```

Mais direto:

```text
offset -> qual byte?
índice -> qual linha/conjunto?
tag -> é o bloco certo?
```

E a regra:

```text
tag é sempre o que sobra depois de tirar offset e índice
```

No totalmente associativo:

```text
não tem índice
tag é o que sobra depois de tirar o offset
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
