# Aula Detalhada - Memórias, Banco De Registradores, ROM, SRAM E DRAM

**Tema do dia:** banco de registradores, memória, endereço, dado, leitura, escrita, ROM, RAM, SRAM, DRAM, volatilidade, densidade, velocidade, refresh e comparação entre tipos de memória  
**Aula na sequência:** 23  
**Objetivo:** entender como circuitos digitais armazenam informação, diferenciar banco de registradores, ROM, SRAM e DRAM, e resolver questões conceituais sobre velocidade, volatilidade, densidade, custo e refresh.

---

## 1. Onde Esta Aula Entra No Estudo?

Até aqui, você viu muitos blocos que processam sinais:

```text
portas lógicas
MUX
decoder
somadores
ULA
flip-flops
registradores
FSM
CMOS
```

Agora o foco muda para armazenamento.

Um circuito digital não precisa apenas calcular.

Ele também precisa guardar:

```text
instruções
dados
estado
configurações
resultados intermediários
```

Essa aula organiza a ideia de memória em camadas:

```text
flip-flop
-> registrador
-> banco de registradores
-> SRAM
-> DRAM
-> ROM
```

O ponto central é comparar:

```text
quem é mais rápido?
quem é mais denso?
quem perde dados sem energia?
quem precisa de refresh?
quem é usado para quê?
```

---

# 2. O Que É Memória?

Memória é um circuito capaz de armazenar bits.

Um bit armazenado pode representar:

```text
0
1
parte de um número
parte de uma instrução
um estado
um caractere
```

Uma memória com muitos bits normalmente é organizada em posições.

Cada posição é acessada por um endereço.

Ideia geral:

```text
endereço -> escolhe a posição
dado     -> valor lido ou escrito
controle -> diz se vai ler ou escrever
```

Diagrama conceitual:

```text
              +----------------+
endereço ---> |                |
dado in  ---> |    memória     | ---> dado out
controle ---> |                |
              +----------------+
```

## 2.1 Endereço

Endereço é o número que escolhe qual posição da memória será acessada.

Se uma memória tem `n` bits de endereço, ela pode selecionar:

```text
2^n posições
```

Exemplo:

```text
10 bits de endereço -> 2^10 posições -> 1024 posições
```

## 2.2 Palavra

Palavra é a quantidade de bits lidos ou escritos por posição.

Exemplo:

```text
memória com 1024 palavras de 8 bits
```

Significa:

```text
1024 posições
cada posição guarda 8 bits
```

Capacidade total:

```text
1024 . 8 = 8192 bits
```

Ou:

```text
1024 bytes
```

Porque:

```text
1 byte = 8 bits
```

---

# 3. Sinais Básicos De Uma Memória

Uma memória normalmente tem sinais como:

```text
address
data in
data out
read enable
write enable
chip enable
clock, em algumas memórias síncronas
```

## 3.1 Leitura

Na leitura:

```text
1. coloca-se o endereço
2. habilita-se leitura
3. a memória entrega o dado armazenado naquela posição
```

Exemplo:

```text
endereço = 0101
read = 1
data out = conteúdo da posição 0101
```

## 3.2 Escrita

Na escrita:

```text
1. coloca-se o endereço
2. coloca-se o dado de entrada
3. habilita-se escrita
4. a memória grava o dado naquela posição
```

Exemplo:

```text
endereço = 0101
data in = 11001100
write = 1
```

Resultado:

```text
posição 0101 passa a guardar 11001100
```

## 3.3 Chip enable

`Chip enable` ou `CE` habilita o componente de memória.

Se o chip não está habilitado:

```text
ele não responde à leitura/escrita
```

Isso ajuda quando existem vários chips no mesmo barramento.

---

# 4. Capacidade De Memória

Para calcular capacidade:

```text
quantidade de posições . bits por palavra
```

Se há `n` bits de endereço:

```text
quantidade de posições = 2^n
```

Então:

```text
capacidade em bits = 2^n . largura_da_palavra
```

## 4.1 Exemplo 1

Uma memória tem:

```text
8 bits de endereço
palavra de 16 bits
```

Posições:

```text
2^8 = 256
```

Capacidade:

```text
256 . 16 = 4096 bits
```

Em bytes:

```text
4096 / 8 = 512 bytes
```

## 4.2 Exemplo 2

Uma memória tem:

```text
12 bits de endereço
palavra de 8 bits
```

Posições:

```text
2^12 = 4096
```

Capacidade:

```text
4096 . 8 = 32768 bits
```

Em bytes:

```text
32768 / 8 = 4096 bytes
```

Ou:

```text
4 KB
```

Usando a convenção binária simples:

```text
1 KB = 1024 bytes
```

---

# 5. Registrador

Um registrador é um conjunto de flip-flops que guarda uma palavra.

Exemplo:

```text
registrador de 8 bits -> 8 flip-flops
registrador de 32 bits -> 32 flip-flops
```

Você já viu registradores na Aula 13.

Aqui, o importante é conectar:

```text
flip-flop guarda 1 bit
registrador guarda vários bits
banco de registradores guarda vários registradores
```

## 5.1 Registrador vs memória

Um registrador é pequeno e rápido.

Uma memória comum guarda muito mais dados, mas tende a ser mais lenta.

Tabela:

| Estrutura | Guarda | Velocidade típica | Capacidade típica |
|---|---|---|---|
| Flip-flop | 1 bit | muito alta | mínima |
| Registrador | uma palavra | muito alta | pequena |
| Banco de registradores | várias palavras | alta | pequena/média |
| Memória | muitas palavras | menor | grande |

---

# 6. Banco De Registradores

Banco de registradores é um conjunto de registradores acessados por endereço ou índice.

Ele aparece muito em processadores.

Exemplo conceitual:

```text
R0
R1
R2
R3
...
```

Cada `R` é um registrador.

O banco permite escolher:

```text
qual registrador ler
qual registrador escrever
```

## 6.1 Exemplo com 8 registradores

Se existem 8 registradores:

```text
R0 até R7
```

Quantos bits são necessários para escolher um deles?

```text
2^3 = 8
```

Resposta:

```text
3 bits de endereço/índice
```

## 6.2 Leitura e escrita

Um banco de registradores pode ter:

```text
porta de leitura
porta de escrita
```

Em processadores, é comum ter mais de uma porta de leitura.

Exemplo:

```text
ler R1
ler R2
escrever em R3
```

Isso é útil porque uma ULA normalmente recebe dois operandos:

```text
operando A -> R1
operando B -> R2
resultado  -> R3
```

## 6.3 Relação com decoder e MUX

Banco de registradores usa ideias que você já estudou.

Para escrita:

```text
decoder escolhe qual registrador recebe write enable
```

Para leitura:

```text
MUX escolhe qual registrador aparece na saída
```

Diagrama conceitual:

```text
índice de escrita -> decoder -> habilita um registrador

R0 --\
R1 -- \
R2 ---- MUX -> dado lido
R3 -- /
```

Então, se uma questão mistura memória com decoder/MUX, não é outro mundo.

É o mesmo conteúdo reaparecendo.

---

# 7. ROM

ROM significa:

```text
Read-Only Memory
```

Memória somente de leitura.

Em termos básicos:

```text
ROM guarda dados que não mudam durante o uso normal
```

Exemplos de uso:

```text
firmware
tabelas fixas
microcódigo
inicialização
```

## 7.1 ROM é volátil?

Normalmente, ROM é não volátil.

Isso significa:

```text
mantém o conteúdo mesmo sem energia
```

## 7.2 ROM em lógica combinacional

Uma ROM pode implementar uma tabela verdade.

Entrada:

```text
endereço
```

Saída:

```text
dado armazenado naquele endereço
```

Se cada combinação de entrada seleciona uma palavra, a ROM pode funcionar como uma função lógica programada.

Exemplo:

```text
3 bits de endereço -> 8 linhas
cada linha guarda o valor da saída
```

Isso conversa com a próxima aula, que tratará lógica programável.

## 7.3 ROM, PROM, EPROM, EEPROM e Flash

Para esta prova, talvez apareça apenas ROM/PROM.

Mas a ideia geral é:

| Tipo | Ideia |
|---|---|
| ROM | conteúdo fixo ou gravado previamente |
| PROM | programável uma vez |
| EPROM | apagável por luz ultravioleta |
| EEPROM | apagável eletricamente |
| Flash | tipo de EEPROM organizada para alta densidade |

Se o edital cobrar apenas Sistemas Digitais básico, foque mais em:

```text
ROM -> não volátil, leitura, conteúdo fixo/programado
```

---

# 8. RAM

RAM significa:

```text
Random Access Memory
```

Memória de acesso aleatório.

Aqui, "aleatório" não quer dizer que a memória responde qualquer coisa.

Quer dizer:

```text
qualquer posição pode ser acessada diretamente pelo endereço
```

Diferente de uma estrutura sequencial, em que você teria que passar pelos itens em ordem.

RAM normalmente permite:

```text
leitura
escrita
```

E costuma ser volátil:

```text
perde dados sem energia
```

As duas RAMs mais importantes nesta aula:

```text
SRAM
DRAM
```

---

# 9. SRAM

SRAM significa:

```text
Static RAM
```

Ela é chamada de estática porque mantém o bit enquanto houver energia, sem precisar de refresh periódico.

## 9.1 Como a SRAM guarda o bit?

Conceitualmente, SRAM usa uma pequena estrutura biestável, parecida com latches/inversores realimentados.

Você não precisa decorar o circuito completo para esta prova.

O importante:

```text
SRAM guarda o bit enquanto alimentada
não precisa de refresh
é volátil
é rápida
é menos densa que DRAM
é mais cara por bit que DRAM
```

## 9.2 SRAM é estática, mas é volátil

Esse é um ponto que pega.

"Estática" não significa "não volátil".

Significa:

```text
não precisa ficar sendo recarregada periodicamente
```

Mas se tirar energia:

```text
perde o conteúdo
```

Então:

```text
SRAM é volátil
```

## 9.3 Uso típico da SRAM

SRAM é usada onde velocidade importa.

Exemplos:

```text
cache
memórias pequenas internas
buffers rápidos
```

Ela é rápida, mas ocupa mais área.

---

# 10. DRAM

DRAM significa:

```text
Dynamic RAM
```

Ela é chamada de dinâmica porque o dado precisa ser renovado periodicamente.

Essa renovação é chamada:

```text
refresh
```

## 10.1 Como a DRAM guarda o bit?

Conceitualmente, DRAM guarda o bit como carga em um capacitor.

```text
carga presente    -> pode representar 1
carga ausente     -> pode representar 0
```

O problema:

```text
capacitor descarrega com o tempo
```

Por isso precisa de refresh.

## 10.2 DRAM é volátil?

Sim.

Se tirar energia:

```text
o conteúdo é perdido
```

## 10.3 DRAM é densa

Como a célula DRAM é simples, ela ocupa pouca área por bit.

Então:

```text
DRAM é mais densa que SRAM
DRAM é mais barata por bit
DRAM costuma ter maior capacidade
```

Mas:

```text
DRAM é mais lenta que SRAM
DRAM precisa de refresh
```

## 10.4 Uso típico da DRAM

DRAM é usada como memória principal.

Exemplo:

```text
RAM principal do computador
```

---

# 11. Refresh

Refresh é o processo de renovar o conteúdo da DRAM.

Por quê?

Porque o capacitor que guarda o bit perde carga com o tempo.

Sem refresh:

```text
a carga pode sumir
o bit pode ser perdido
```

Com refresh:

```text
o controlador lê/renova as células periodicamente
```

Para prova:

```text
DRAM precisa de refresh
SRAM não precisa de refresh
ROM não precisa de refresh
```

Essa comparação é muito importante.

---

# 12. Volatilidade

Uma memória volátil perde o conteúdo quando fica sem energia.

Uma memória não volátil mantém o conteúdo mesmo sem energia.

Tabela:

| Memória | Volátil? | Observação |
|---|---|---|
| Registrador | sim | feito com flip-flops |
| Banco de registradores | sim | depende de energia |
| SRAM | sim | não precisa de refresh, mas perde sem energia |
| DRAM | sim | precisa de refresh |
| ROM | não | mantém conteúdo sem energia |

Erro comum:

```text
SRAM não precisa de refresh
mas ainda é volátil
```

---

# 13. Velocidade, Densidade E Custo

Essas três palavras aparecem muito em comparação de memória.

## 13.1 Velocidade

Velocidade é o quão rápido a memória pode ser acessada.

Em geral:

```text
registradores são mais rápidos
SRAM é mais rápida que DRAM
DRAM é mais lenta, mas tem maior capacidade
```

## 13.2 Densidade

Densidade é quantos bits cabem em uma certa área.

Em geral:

```text
DRAM é mais densa que SRAM
SRAM é menos densa
registradores/flip-flops são pouco densos
```

## 13.3 Custo por bit

Quanto mais complexa a célula, maior tende a ser o custo por bit.

Em geral:

```text
registrador -> muito caro por bit
SRAM        -> cara por bit
DRAM        -> mais barata por bit
```

## 13.4 Tabela comparativa

| Tipo | Velocidade | Densidade | Custo por bit | Volátil? | Refresh? | Uso típico |
|---|---|---|---|---|---|---|
| Registrador | muito alta | muito baixa | muito alto | sim | não | estado interno e operandos |
| SRAM | alta | média/baixa | alto | sim | não | cache |
| DRAM | média/menor | alta | menor | sim | sim | memória principal |
| ROM | depende do tipo | alta | baixo/médio | não | não | firmware/tabelas |

Não transforme essa tabela em regra absoluta de engenharia avançada.

Para prova de Sistemas Digitais, ela é um bom mapa mental.

---

# 14. Hierarquia De Memória

Uma forma comum de enxergar é:

```text
mais perto da CPU -> mais rápido, menor, mais caro por bit
mais longe        -> mais lento, maior, mais barato por bit
```

Exemplo:

```text
registradores
cache SRAM
memória principal DRAM
armazenamento não volátil
```

Diagrama:

```text
mais rápido
   ^
   |
registradores
cache SRAM
DRAM
armazenamento não volátil
   |
   v
maior capacidade
```

Essa hierarquia aparece mais em Arquitetura, mas ajuda a entender a comparação.

---

# 15. Banco De Registradores vs Memória Principal

Banco de registradores:

```text
pequeno
muito rápido
dentro/pertinho da CPU
usado pela ULA
endereçado por poucos bits
```

Memória principal:

```text
grande
mais lenta
armazena muitos dados e instruções
normalmente DRAM
endereçada por muitos bits
```

Comparação:

| Item | Banco de registradores | Memória principal |
|---|---|---|
| Capacidade | pequena | grande |
| Velocidade | muito alta | menor |
| Uso | operandos imediatos da CPU | dados e instruções |
| Implementação típica | flip-flops/registradores | DRAM |
| Endereço | índice de registrador | endereço de memória |

---

# 16. ROM Como Tabela Verdade

Uma ROM pode implementar uma função combinacional.

Exemplo:

```text
entradas A, B, C -> endereço
saída F          -> dado armazenado
```

Como há 3 entradas:

```text
2^3 = 8 endereços
```

Cada endereço guarda:

```text
F daquela combinação
```

Tabela:

| A | B | C | Endereço | F |
|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | valor de F para 000 |
| 0 | 0 | 1 | 1 | valor de F para 001 |
| 0 | 1 | 0 | 2 | valor de F para 010 |
| 0 | 1 | 1 | 3 | valor de F para 011 |
| 1 | 0 | 0 | 4 | valor de F para 100 |
| 1 | 0 | 1 | 5 | valor de F para 101 |
| 1 | 1 | 0 | 6 | valor de F para 110 |
| 1 | 1 | 1 | 7 | valor de F para 111 |

Se a função tiver várias saídas, a palavra da ROM pode ter vários bits.

Exemplo:

```text
3 entradas
4 saídas
```

ROM necessária:

```text
8 palavras de 4 bits
```

---

# 17. Como Questões Costumam Cobrar

## 17.1 Comparação SRAM vs DRAM

Pergunta típica:

```text
Qual memória precisa de refresh?
```

Resposta:

```text
DRAM
```

## 17.2 Volatilidade

Pergunta típica:

```text
Qual das opções é não volátil?
```

Resposta provável:

```text
ROM
```

## 17.3 Velocidade e densidade

Pergunta típica:

```text
SRAM é mais rápida, mas menos densa que DRAM.
```

Essa frase é correta.

## 17.4 Endereçamento

Pergunta típica:

```text
Uma memória tem 12 bits de endereço e palavra de 8 bits. Qual a capacidade?
```

Passo:

```text
2^12 = 4096 posições
4096 . 8 = 32768 bits
4096 bytes = 4 KB
```

## 17.5 Banco de registradores

Pergunta típica:

```text
Um banco tem 32 registradores. Quantos bits para selecionar um?
```

Resposta:

```text
5 bits
```

Porque:

```text
2^5 = 32
```

---

# 18. Exemplos Resolvidos

## 18.1 Exemplo 1 - Bits de endereço

Uma memória tem 2048 posições.

Quantos bits de endereço são necessários?

Resolução:

```text
2048 = 2^11
```

Resposta:

```text
11 bits de endereço
```

## 18.2 Exemplo 2 - Capacidade

Uma memória tem:

```text
10 bits de endereço
palavra de 16 bits
```

Número de posições:

```text
2^10 = 1024
```

Capacidade:

```text
1024 . 16 = 16384 bits
```

Em bytes:

```text
16384 / 8 = 2048 bytes
```

Ou:

```text
2 KB
```

## 18.3 Exemplo 3 - Banco de registradores

Um banco tem:

```text
16 registradores
cada registrador tem 32 bits
```

Bits para escolher registrador:

```text
16 = 2^4
```

Resposta:

```text
4 bits de índice
```

Capacidade total:

```text
16 . 32 = 512 bits
```

## 18.4 Exemplo 4 - ROM para função lógica

Uma função combinacional tem:

```text
4 entradas
3 saídas
```

Quantas palavras a ROM precisa ter?

```text
2^4 = 16 palavras
```

Qual largura de palavra?

```text
3 bits
```

Resposta:

```text
ROM de 16 palavras x 3 bits
```

## 18.5 Exemplo 5 - SRAM ou DRAM?

Você precisa de uma memória:

```text
muito rápida
pequena
usada como cache
sem refresh
```

Escolha:

```text
SRAM
```

Você precisa de:

```text
grande capacidade
baixo custo por bit
aceita refresh
memória principal
```

Escolha:

```text
DRAM
```

---

# 19. Erros Comuns

## 19.1 Achar que SRAM não é volátil

SRAM não precisa de refresh, mas perde conteúdo sem energia.

```text
SRAM -> volátil
```

## 19.2 Achar que DRAM é mais rápida que SRAM

Para prova básica:

```text
SRAM é mais rápida que DRAM
```

## 19.3 Confundir densidade com velocidade

Densidade é quantidade de bits por área.

Velocidade é tempo de acesso.

DRAM é mais densa, mas não é mais rápida.

## 19.4 Esquecer que endereço seleciona posição

Se há `n` bits de endereço:

```text
2^n posições
```

Não confundir com:

```text
n posições
```

## 19.5 Confundir palavra com capacidade total

Se a palavra tem 8 bits, isso não quer dizer que a memória toda tem 8 bits.

Precisa multiplicar:

```text
posições . bits por palavra
```

## 19.6 Achar que ROM só pode ser lida em qualquer contexto absoluto

O nome ROM vem de "read-only" no uso normal.

Mas existem tecnologias programáveis/reprogramáveis.

Para a prova, o contraste principal é:

```text
ROM -> não volátil, conteúdo fixo/programado
RAM -> leitura e escrita, normalmente volátil
```

---

# 20. Exercícios

## 20.1 Conceituais

1. O que é um endereço de memória?

2. O que é uma palavra de memória?

3. O que significa dizer que uma memória é volátil?

4. Qual memória normalmente é não volátil: ROM, SRAM ou DRAM?

5. Qual memória precisa de refresh: SRAM ou DRAM?

## 20.2 Capacidade e endereçamento

6. Uma memória tem 8 bits de endereço. Quantas posições ela possui?

7. Uma memória tem 10 bits de endereço e palavra de 8 bits. Qual é a capacidade em bytes?

8. Uma memória tem 12 bits de endereço e palavra de 16 bits. Qual é a capacidade em bits?

9. Uma memória possui 4096 posições. Quantos bits de endereço são necessários?

10. Um banco tem 32 registradores. Quantos bits são necessários para selecionar um registrador?

## 20.3 Comparação entre memórias

11. Entre SRAM e DRAM, qual costuma ser mais rápida?

12. Entre SRAM e DRAM, qual costuma ser mais densa?

13. Entre SRAM e DRAM, qual costuma ser usada como cache?

14. Entre SRAM e DRAM, qual costuma ser usada como memória principal?

15. A SRAM precisa de refresh?

## 20.4 Questões estilo prova

16. Assinale a alternativa correta.

   A) SRAM é não volátil.

   B) DRAM não precisa de refresh.

   C) ROM normalmente mantém dados sem energia.

   D) DRAM é sempre mais rápida que SRAM.

17. Assinale a alternativa incorreta.

   A) DRAM é volátil.

   B) SRAM é volátil.

   C) ROM é normalmente não volátil.

   D) SRAM precisa de refresh periódico.

18. Uma ROM será usada para implementar uma função com 5 entradas e 2 saídas. Qual organização mínima faz sentido?

   A) 5 palavras de 2 bits.

   B) 32 palavras de 2 bits.

   C) 2 palavras de 5 bits.

   D) 10 palavras de 1 bit.

19. Um banco de registradores possui 16 registradores de 32 bits. Qual é a capacidade total?

   A) 16 bits.

   B) 32 bits.

   C) 512 bits.

   D) 1024 bits.

20. Uma memória tem 1024 palavras de 16 bits. Qual é sua capacidade total?

   A) 1024 bits.

   B) 2048 bits.

   C) 8192 bits.

   D) 16384 bits.

## 20.5 Misturadas e um pouco mais difíceis

21. Uma saída de endereço possui 6 bits. Se cada posição da memória guarda 8 bits, qual é a capacidade total em bytes?

22. Uma memória tem capacidade de 8 KB e palavra de 8 bits. Quantas posições ela possui?

23. Uma memória tem 2048 palavras de 32 bits. Quantos bits de endereço são necessários e qual a capacidade em bytes?

24. Uma ROM recebe `A`, `B` e `C` como endereço e gera duas saídas `F1` e `F0`. Qual deve ser a organização da ROM?

25. Em uma comparação geral, ordene por velocidade do mais rápido para o mais lento: DRAM, registradores, SRAM.

---

# 21. Gabarito

1. É o valor binário que seleciona qual posição da memória será acessada.

2. É o conjunto de bits armazenado/lido/escrito em uma posição.

3. Significa que perde o conteúdo quando fica sem energia.

4. ROM.

5. DRAM.

6. `2^8 = 256` posições.

7. `2^10 = 1024` posições. Como cada palavra tem 8 bits, são `1024 bytes`.

8. `2^12 = 4096` posições. Capacidade: `4096 . 16 = 65536 bits`.

9. `4096 = 2^12`, então são necessários `12 bits`.

10. `32 = 2^5`, então são necessários `5 bits`.

11. SRAM.

12. DRAM.

13. SRAM.

14. DRAM.

15. Não.

16. C.

17. D.

18. B. Cinco entradas geram `2^5 = 32` endereços; duas saídas exigem palavra de 2 bits.

19. C. `16 . 32 = 512 bits`.

20. D. `1024 . 16 = 16384 bits`.

21. `2^6 = 64` posições. Cada posição tem 8 bits, ou 1 byte. Capacidade: `64 bytes`.

22. `8 KB = 8 . 1024 = 8192 bytes`. Com palavra de 8 bits, cada posição tem 1 byte. Portanto, `8192 posições`.

23. `2048 = 2^11`, então são `11 bits de endereço`. Capacidade: `2048 . 32 = 65536 bits = 8192 bytes = 8 KB`.

24. Três entradas geram `2^3 = 8` endereços. Duas saídas exigem palavra de 2 bits. Organização: `8 palavras x 2 bits`.

25. Registradores, SRAM, DRAM.

---

# 22. O Que Memorizar

Memorize:

```text
n bits de endereço -> 2^n posições
capacidade = posições . bits por palavra
```

Memorize a comparação:

```text
registradores -> muito rápidos, pequenos, caros por bit
SRAM -> rápida, volátil, sem refresh, usada em cache
DRAM -> mais densa, volátil, com refresh, usada em memória principal
ROM  -> não volátil, leitura/conteúdo fixo no uso normal
```

Memorize o ponto mais perigoso:

```text
SRAM não precisa de refresh
mas ainda é volátil
```

Memorize:

```text
DRAM precisa de refresh
```

E:

```text
ROM pode implementar tabela verdade
entradas viram endereço
saídas viram palavra armazenada
```

---

# 23. Plano De Estudo Para Esta Aula

Tempo sugerido: **45 a 70 minutos**.

## 23.1 Primeira passada

Leia com foco em comparação:

```text
ROM vs RAM
SRAM vs DRAM
registrador vs memória
volátil vs não volátil
refresh vs sem refresh
```

## 23.2 Segunda passada

Faça sem olhar:

```text
tabela SRAM vs DRAM
cálculo de capacidade
cálculo de bits de endereço
ROM como tabela verdade
```

## 23.3 Exercícios prioritários

Se tiver pouco tempo, faça:

```text
6, 7, 8, 9, 10, 16, 17, 18, 21, 23 e 24
```

Eles treinam os pontos com maior chance de cair.

---

# 24. Conexão Com A Próxima Aula

Nesta aula, você estudou memórias comuns:

```text
banco de registradores
ROM
SRAM
DRAM
```

A próxima aula entra em lógica programável:

```text
PROM
PLA
PAL
CPLD
FPGA
LUT
blocos lógicos
interconexões programáveis
```

Conexão:

```text
ROM já pode implementar tabela verdade
PROM/PLA/PAL expandem essa ideia para lógica programável
FPGA leva isso para blocos configuráveis maiores
```

Se você entendeu ROM como tabela, a próxima aula encaixa bem.
