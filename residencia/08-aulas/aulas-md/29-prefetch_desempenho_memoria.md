# Aula Detalhada - Prefetch E Desempenho De Memória

**Tema do dia:** prefetch, pré-busca de dados, miss de cache, latência de memória, largura de banda, localidade, prefetch de instruções, prefetch de dados, vantagens, custos e pegadinhas  
**Aula na sequência:** 29  
**Objetivo:** entender o que é prefetch, por que ele pode reduzir falhas de cache e como reconhecer esse conceito em questões de arquitetura de computadores.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 28, você estudou cache.

A ideia central foi:

```text
se o dado está na cache -> hit
se não está -> miss
```

Miss é caro.

Quando ocorre miss, o processador precisa esperar a memória principal ou outro nível de cache.

Agora a pergunta é:

```text
existe uma forma de trazer o dado antes de ele ser pedido?
```

Sim.

Essa técnica é chamada:

```text
prefetch
pré-busca
```

---

# 2. Ideia Central

Prefetch é buscar antecipadamente dados ou instruções que provavelmente serão usados em breve.

Em vez de esperar o processador pedir e sofrer um miss, o sistema tenta prever:

```text
isso aqui deve ser usado logo
vou trazer para a cache antes
```

Se a previsão estiver certa:

```text
o acesso futuro vira hit
```

Se estiver errada:

```text
o sistema trouxe algo inútil
```

Então prefetch é uma aposta.

Uma aposta inteligente, baseada em padrões de acesso.

---

# 3. Por Que Prefetch Existe?

Acesso à memória é lento.

Mesmo com cache, ainda existem misses.

Quando um miss acontece:

```text
CPU pede dado
cache não tem
precisa buscar em memória mais lenta
CPU pode esperar
```

Prefetch tenta esconder essa latência.

Ele faz:

```text
buscar antes
para estar pronto depois
```

É como deixar material na mesa antes de começar a resolver uma lista.

Se você colocou o material certo, economiza tempo.

Se colocou o material errado, ocupou espaço à toa.

---

# 4. Prefetch E Localidade Espacial

Prefetch combina muito com localidade espacial.

Localidade espacial:

```text
se acessei um endereço, talvez acesse os próximos
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

Se o hardware percebe esse padrão sequencial, pode buscar antecipadamente os próximos blocos.

Exemplo:

```text
CPU acessa bloco 10
depois bloco 11
depois bloco 12
```

O prefetch pode pensar:

```text
provavelmente vai acessar bloco 13
vou buscar bloco 13 antes
```

---

# 5. Prefetch E Localidade Temporal

Prefetch também pode se beneficiar de padrões repetidos.

Localidade temporal:

```text
algo usado recentemente pode ser usado de novo
```

Mas prefetch é mais intuitivo com sequências e padrões previsíveis.

Exemplo forte para prefetch:

```text
acessos sequenciais em vetor
```

Exemplo mais difícil:

```text
acessos aleatórios por ponteiros
```

Se o programa acessa endereços imprevisíveis, prefetch tem menos chance de acertar.

---

# 6. Prefetch De Instruções

O processador executa instruções em sequência na maior parte do tempo.

Exemplo:

```text
PC
PC+4
PC+8
PC+12
```

Por isso, é natural buscar instruções futuras antes.

Prefetch de instruções:

```text
traz próximas instruções para perto do processador
```

Isso ajuda principalmente quando o fluxo é sequencial.

Mas branches podem atrapalhar.

Se houver um desvio:

```text
o próximo endereço talvez não seja PC+4
```

Então prefetch de instruções conversa com:

```text
pipeline
branch prediction
cache de instruções
```

---

# 7. Prefetch De Dados

Prefetch de dados tenta antecipar dados que serão lidos ou escritos.

Exemplo:

```c
for (int i = 0; i < n; i++) {
    y[i] = a[i] + b[i];
}
```

O processador acessa:

```text
a[0], b[0], y[0]
a[1], b[1], y[1]
a[2], b[2], y[2]
```

Isso é previsível.

O sistema pode buscar antes:

```text
a[i+1]
b[i+1]
```

Assim, quando a instrução realmente precisar deles, talvez já estejam na cache.

---

# 8. Prefetch Por Hardware

Prefetch por hardware é feito automaticamente pelo processador ou controlador de cache.

O hardware observa padrões.

Exemplos de padrões:

```text
endereços sequenciais
saltos constantes
acesso de stride
```

Stride significa passo regular.

Exemplo:

```text
1000
1004
1008
1012
```

Passo:

```text
4 bytes
```

Outro exemplo:

```text
0x2000
0x2010
0x2020
0x2030
```

Passo:

```text
16 bytes
```

O hardware pode perceber esse padrão e trazer os próximos blocos.

---

# 9. Prefetch Por Software

Algumas arquiteturas permitem que o compilador ou programador insira instruções de prefetch.

Ideia:

```text
o software avisa ao hardware que um dado será necessário em breve
```

Exemplo conceitual:

```text
PREFETCH [endereço futuro]
```

Isso não é uma carga normal.

Uma carga normal precisa do dado para continuar.

Prefetch apenas sugere:

```text
traga isso para cache se possível
```

Para sua prova, o mais provável é aparecer conceitualmente.

Não precisa decorar instruções reais de prefetch.

---

# 10. Prefetch Ajuda Quando?

Prefetch ajuda quando:

```text
o padrão de acesso é previsível
há tempo suficiente para buscar antes do uso
o dado trazido realmente será usado
a cache tem espaço
a largura de banda aguenta
```

Exemplo bom:

```text
percorrer vetor sequencialmente
```

Exemplo ruim:

```text
seguir ponteiros aleatórios em uma estrutura irregular
```

Se o dado é usado logo demais, talvez o prefetch não chegue a tempo.

Se o dado é usado tarde demais, talvez seja expulso antes do uso.

---

# 11. Prefetch Pode Atrapalhar?

Sim.

Prefetch errado pode causar problemas.

## 11.1 Poluição De Cache

Poluição de cache acontece quando dados inúteis ocupam espaço da cache.

Se o prefetch traz algo que não será usado, ele pode expulsar algo útil.

```text
cache antes: dados úteis
prefetch errado: traz dados inúteis
resultado: dado útil pode ser removido
```

---

## 11.2 Uso De Largura De Banda

Buscar dados usa barramento e memória.

Se o prefetch exagera, pode disputar recursos com acessos realmente necessários.

```text
prefetch demais -> ocupa largura de banda
```

---

## 11.3 Energia

Buscar dados consome energia.

Em sistemas de baixo consumo, prefetch mal feito pode gastar energia à toa.

---

# 12. Prefetch Não É A Mesma Coisa Que Cache Maior

Cache maior:

```text
aumenta capacidade de guardar dados
```

Prefetch:

```text
tenta trazer antes dados futuros
```

Ambos podem reduzir misses, mas de formas diferentes.

Pegadinha:

```text
prefetch não aumenta necessariamente o tamanho da cache
```

Ele muda quando os dados são buscados.

---

# 13. Prefetch Não Garante Hit

Prefetch tenta melhorar a taxa de acerto.

Mas não garante.

Pode ocorrer:

```text
previsão errada
dado expulso antes do uso
prefetch tarde demais
limitação de banda
```

Então, se a alternativa disser:

```text
prefetch elimina todos os misses
```

Está errada.

Melhor:

```text
prefetch pode reduzir misses ao antecipar dados prováveis
```

---

# 14. Prefetch E Miss Rate

Miss rate é a taxa de falhas.

```text
miss rate = misses / acessos totais
```

Prefetch tenta reduzir a miss rate transformando misses futuros em hits.

Exemplo:

Sem prefetch:

```text
acessa bloco 10 -> miss
acessa bloco 11 -> miss
acessa bloco 12 -> miss
```

Com prefetch:

```text
acessa bloco 10 -> miss
hardware busca 11 antecipado
acessa bloco 11 -> hit
hardware busca 12 antecipado
acessa bloco 12 -> hit
```

Resultado:

```text
menos misses observados pelo processador
```

---

## 14.1 Busca Sob Demanda Versus Prefetch

Sem prefetch, a hierarquia normalmente trabalha por **demanda**:

```text
CPU pede o bloco
cache procura o bloco
se houver miss, a busca no nível inferior começa naquele momento
CPU espera o dado necessário
```

Esse mecanismo é chamado de `demand fetch`, ou busca sob demanda. A transferência só começa porque uma instrução realmente pediu aquele bloco.

Com prefetch:

```text
o sistema prevê um acesso futuro
inicia a busca antes do pedido real
quando a CPU finalmente pede o bloco, ele pode já estar na cache
```

A diferença fundamental é **quando** a transferência começa:

| Busca sob demanda | Prefetch |
|---|---|
| começa após o pedido real | começa antes do pedido real |
| o dado é certamente necessário | o dado é apenas provável |
| a latência do miss fica no caminho da instrução | a latência pode ser escondida |
| não traz bloco por especulação | pode trazer bloco inútil |

Importante: prefetch não faz a transferência desaparecer. O bloco ainda precisa vir de algum nível inferior. O objetivo é realizar essa transferência cedo o bastante para que a CPU não precise esperar.

Por isso, uma questão pode dizer corretamente que o prefetch:

```text
reduz misses de demanda observados pela CPU
esconde parte da latência de memória
```

Mas seria exagerado dizer que ele:

```text
elimina a necessidade de acessar níveis inferiores
```

Até o primeiro acesso a um bloco novo, que seria um miss compulsório, pode aparecer para a CPU como hit se o prefetch o tiver trazido antes. A transferência inicial continua existindo; o que mudou foi o momento em que ela ocorreu.

---

## 14.2 Tipos Clássicos De Prefetch

### 14.2.1 Next-Line Prefetch

`Next-line` significa buscar a próxima linha ou o próximo bloco.

Se o bloco atual é `B`, o mecanismo busca:

```text
B + 1
```

Exemplo:

```text
demanda pelo bloco 40 -> busca antecipada do bloco 41
demanda pelo bloco 41 -> busca antecipada do bloco 42
```

É simples e funciona bem em varredura sequencial de vetores e instruções. Entretanto, pode desperdiçar recursos se o programa alternar entre endereços distantes ou abandonar a sequência.

Pegadinha:

```text
next-line prevê o próximo bloco de cache, não necessariamente o próximo byte
```

Se uma linha tem 64 bytes, acessar os bytes 0, 4, 8 e 12 ainda permanece na mesma linha. Não é preciso buscar uma nova linha a cada elemento.

### 14.2.2 Stream Prefetch

Um prefetcher de stream detecta um **fluxo de blocos consecutivos**.

Exemplo:

```text
12, 13, 14, 15, ...
```

Depois de reconhecer a sequência, ele tenta manter alguns blocos à frente da posição atual. Também pode reconhecer uma sequência decrescente:

```text
90, 89, 88, 87, ...
```

A diferença didática em relação ao next-line é:

```text
next-line -> política simples: ao acessar B, tente B+1
stream -> primeiro detecta um fluxo e depois tenta acompanhá-lo
```

Alguns mecanismos conseguem acompanhar mais de um stream, por exemplo um laço que percorre `a[i]` e `b[i]` simultaneamente. Para a prova, basta entender a ideia; não é necessário decorar estruturas internas do prefetcher.

### 14.2.3 Stride Prefetch

Stride é uma diferença constante entre endereços ou blocos sucessivos.

Exemplo em bytes:

```text
1000, 1016, 1032, 1048, ...
diferença = +16 bytes
```

O prefetcher pode prever:

```text
próximo endereço = endereço atual + stride
```

O stride não precisa ser `+1 bloco`. Ele pode ser maior ou até negativo.

```text
5000, 4968, 4936, 4904, ...
stride = -32 bytes
```

Esse tipo é útil em:

```text
acesso a um campo específico de vários registros
percurso de coluna de uma matriz armazenada por linhas
laços que usam vetor[i * passo]
```

Pegadinha importante: stride regular é previsível, mas um stride muito grande pode usar apenas uma pequena parte de cada linha e gerar muito tráfego. Ser previsível não significa necessariamente ser eficiente.

### Comparação Rápida

| Tipo | Padrão reconhecido | Exemplo |
|---|---|---|
| Next-line | próximo bloco | `20, 21, 22, 23` |
| Stream | sequência contínua acompanhada após detecção | `70, 71, 72, 73` |
| Stride | diferença constante | `10, 14, 18, 22` |

Os nomes podem se sobrepor em implementações reais. Em prova conceitual, observe o padrão descrito, não tente deduzir detalhes de um processador específico.

---

## 14.3 Três Métricas: Accuracy, Coverage E Timeliness

Não basta perguntar se existe prefetch. É preciso avaliar se ele fez previsões úteis.

### Accuracy — Precisão

Accuracy mede quantos blocos buscados antecipadamente foram realmente usados.

```text
accuracy = prefetches úteis / total de prefetches realizados
```

Exemplo:

```text
40 blocos foram trazidos por prefetch
30 desses blocos foram usados depois
accuracy = 30 / 40 = 75%
```

Alta accuracy significa pouco desperdício. Baixa accuracy indica muitas previsões erradas e maior risco de poluição e consumo de banda.

### Coverage — Cobertura

Coverage mede qual fração dos misses de demanda originais foi evitada pelo prefetch.

```text
coverage = misses de demanda evitados / misses que ocorreriam sem prefetch
```

Exemplo:

```text
sem prefetch ocorreriam 100 misses
25 deles foram evitados por buscas antecipadas que chegaram a tempo
coverage = 25 / 100 = 25%
```

Accuracy e coverage não são a mesma coisa.

```text
um mecanismo muito conservador pode ter alta accuracy e baixa coverage
um mecanismo agressivo pode aumentar coverage e reduzir accuracy
```

Exemplo: buscar somente um bloco quando há certeza pode acertar quase sempre, mas deixar muitos outros misses sem cobertura.

### Timeliness — Oportunidade Temporal

Timeliness pergunta se o bloco chegou **no momento adequado**.

Há três situações:

```text
cedo demais -> pode ser expulso antes do uso
na hora certa -> está disponível quando a demanda chega
tarde demais -> a CPU ainda sofre espera
```

Um prefetch pode prever o endereço correto e ainda assim ser pouco útil por chegar tarde. Nesse caso, sua previsão foi correta em endereço, mas não escondeu toda a latência.

Em questões sem fórmula, associe:

```text
accuracy -> trouxe o bloco certo?
coverage -> quantos misses conseguiu evitar?
timeliness -> chegou no momento certo?
```

---

## 14.4 Distância E Grau Do Prefetch

Dois parâmetros controlam a agressividade.

### Distância

Distância de prefetch indica quão à frente da demanda atual o mecanismo busca.

Exemplo, com distância 3:

```text
demanda atual = bloco 20
bloco antecipado = 23
```

Distância pequena:

```text
menor risco de trazer cedo demais
maior risco de o dado chegar tarde
```

Distância grande:

```text
mais tempo para esconder latência
maior risco de poluição ou expulsão antes do uso
```

### Grau

Grau indica quantos blocos são trazidos em uma ação de prefetch.

Exemplo, distância 3 e grau 2:

```text
demanda atual = bloco 20
prefetch = blocos 23 e 24
```

Grau maior pode cobrir mais acessos, mas consome mais banda e espaço.

Não existe um valor universalmente melhor. O ajuste depende da latência, do padrão de acesso, da velocidade de consumo dos dados e da capacidade da hierarquia.

---

## 14.5 Exemplo Rastreado: Vetor Sequencial

Considere:

```c
int v[64];
for (int i = 0; i < 64; i++)
    soma += v[i];
```

Suponha:

```text
int = 4 bytes
linha de cache = 16 bytes
cada linha contém 4 elementos
```

Mapeamento:

```text
linha 0 -> v[0]  a v[3]
linha 1 -> v[4]  a v[7]
linha 2 -> v[8]  a v[11]
```

Sem prefetch, numa cache inicialmente vazia:

```text
v[0] -> miss; v[1], v[2], v[3] -> hits
v[4] -> miss; v[5], v[6], v[7] -> hits
v[8] -> miss; ...
```

Com next-line prefetch disparado no acesso à linha 0:

```text
demanda por linha 0 -> miss
prefetch da linha 1 começa
CPU usa v[1], v[2], v[3]
se a linha 1 chegar antes de v[4], v[4] será hit
```

Esse exemplo mostra por que o trabalho feito nos elementos restantes da linha dá tempo para o próximo bloco chegar.

Agora suponha que o laço termine em `v[3]`. A linha 1 antecipada nunca será usada:

```text
prefetch incorreto ou inútil -> reduz accuracy e consome recursos
```

---

## 14.6 Exemplo Rastreado: Stride E Matriz

Uma matriz em C costuma ser armazenada por linhas. Considere uma matriz de inteiros com 8 colunas:

```c
for (int i = 0; i < 100; i++)
    soma += m[i][3];
```

Entre `m[i][3]` e `m[i+1][3]`, o salto é:

```text
8 colunas * 4 bytes = 32 bytes
stride = 32 bytes
```

O acesso não é contíguo, mas é regular. Um prefetcher de stride pode reconhecê-lo.

Compare com:

```c
indice = tabela[indice];
```

Aqui, o próximo endereço depende do conteúdo lido. Se os valores forem irregulares, a sequência de endereços não apresenta stride fixo. O prefetch convencional tem dificuldade.

Conclusão:

```text
sequencial -> excelente candidato
stride constante -> bom candidato
ponteiros/índices irregulares -> candidato difícil
```

---

## 14.7 Quando Um Prefetch Correto Ainda Não Ajuda

Considere que o mecanismo adivinhou corretamente o bloco 50.

Mesmo assim, podem ocorrer três problemas:

1. **Chegou tarde:** a CPU pede o bloco 50 antes de a transferência terminar. Parte ou toda a penalidade permanece.
2. **Chegou cedo demais:** o bloco entra na cache, mas é expulso antes de ser usado.
3. **Disputou recursos:** a transferência ocupa banda e atrasa um miss de demanda mais urgente.

Por isso:

```text
endereço correto não é sinônimo de ganho de desempenho
```

O ganho depende simultaneamente de:

```text
previsão correta
chegada oportuna
ausência de interferência excessiva
```

---

## 14.8 Efeito Sobre Misses, Poluição E Banda

Prefetch pode:

```text
converter um futuro miss de demanda em hit
permitir sobreposição entre transferência e computação
reduzir o tempo em que a CPU fica parada
```

Mas também pode:

```text
expulsar uma linha útil -> poluição
ocupar fila/controlador/barramento -> contenção de banda
buscar linhas que nunca serão usadas -> tráfego inútil
aumentar energia -> acessos adicionais
```

Exemplo de poluição:

```text
cache comporta 4 linhas úteis: A, B, C, D
prefetch traz X e substitui A
X nunca é usado
CPU volta a pedir A e sofre miss
```

Nesse caso, o prefetch não apenas deixou de ajudar: ele criou um miss que talvez não ocorresse.

Exemplo de banda:

```text
demanda real precisa de D com urgência
prefetches P1, P2 e P3 já ocupam o caminho da memória
D pode esperar mais
```

Uma política agressiva aumenta a chance de cobertura, mas também esses custos. Essa troca entre benefício e interferência é a ideia mais importante depois da definição básica.

---

# 15. O Que Cai Em Prova?

A prova pode perguntar:

```text
qual técnica antecipa dados que provavelmente serão usados?
```

Resposta:

```text
prefetch
pré-busca
```

Pode perguntar:

```text
qual técnica reduz falhas de cache ao buscar dados antes da demanda?
```

Resposta:

```text
prefetch de dados/cache
```

Pode tentar confundir com:

```text
pipeline
segmentação de instruções
memória virtual
serialização
compressão
```

Pipeline melhora sobreposição de etapas de execução.

Prefetch antecipa dados/instruções na hierarquia de memória.

---

# 16. Diferença Entre Cache, Prefetch E Pipeline

Cache:

```text
memória rápida que guarda cópias
```

Prefetch:

```text
técnica para trazer dados/instruções antes de serem pedidos
```

Pipeline:

```text
técnica para sobrepor etapas de execução de instruções
```

Exemplo:

```text
cache -> onde o dado pode estar
prefetch -> quando buscar o dado
pipeline -> como executar várias instruções em etapas sobrepostas
```

---

# 17. Pegadinhas

## 17.1 Prefetch Não É Branch Prediction

Branch prediction prevê o caminho do fluxo de instruções.

Prefetch busca dados/instruções antes.

Eles podem trabalhar juntos, mas não são a mesma coisa.

---

## 17.2 Prefetch Não É Segmentação

Segmentação/pipeline divide execução em estágios.

Prefetch antecipa acesso à memória/cache.

---

## 17.3 Prefetch Não É Memória Virtual

Memória virtual dá abstração de endereços e pode usar disco/SSD como apoio.

Prefetch é otimização de desempenho na busca antecipada.

---

## 17.4 Prefetch Pode Errar

Não marque alternativas absolutas:

```text
sempre elimina misses
sempre melhora desempenho
nunca desperdiça recursos
```

Prefetch bom:

```text
pode reduzir falhas de cache quando o padrão é previsível
```

---

# 18. Resumo De Prova

```text
prefetch = pré-busca
objetivo = trazer antes dados/instruções prováveis
benefício = reduzir misses e esconder latência
funciona melhor = padrões previsíveis e sequenciais
pode atrapalhar = poluição de cache, banda, energia
não garante = hit nem desempenho maior sempre
demanda = busca começa quando o bloco é realmente pedido
next-line = antecipa o próximo bloco
stream = detecta e acompanha sequência de blocos
stride = prevê usando diferença constante entre acessos
accuracy = fração dos prefetches que foi usada
coverage = fração dos misses originais que foi evitada
timeliness = dado chegar nem tarde nem cedo demais
distância = quão à frente buscar
grau = quantos blocos antecipar por ação
```

---

# 19. Exercícios

1. O que é prefetch?
2. Como prefetch pode reduzir miss rate?
3. Prefetch é mais útil em acesso sequencial ou aleatório?
4. Qual é a diferença entre cache e prefetch?
5. O que é poluição de cache?
6. Prefetch garante que todos os acessos serão hit?
7. O que é prefetch por hardware?
8. O que é prefetch por software?
9. Por que prefetch pode gastar largura de banda?
10. Qual é a relação entre prefetch e localidade espacial?

## Múltipla Escolha

11. Qual técnica busca dados antes que eles sejam requisitados explicitamente?

- A) Prefetch
- B) Overflow
- C) Refresh de DRAM
- D) Karnaugh

12. Prefetch tende a funcionar melhor quando:

- A) os acessos são totalmente aleatórios.
- B) há padrão previsível de acesso.
- C) a cache é desligada.
- D) não existe memória principal.

13. Uma desvantagem possível do prefetch é:

- A) eliminar a necessidade de cache.
- B) impedir execução de instruções aritméticas.
- C) trazer dados inúteis e poluir a cache.
- D) transformar SRAM em DRAM.

14. Prefetch é melhor descrito como:

- A) uma técnica para antecipar busca de dados/instruções.
- B) uma operação booleana de duas entradas.
- C) um tipo de flip-flop.
- D) um código binário ponderado.

15. Se uma alternativa disser que prefetch sempre melhora desempenho:

- A) está correta, sem exceções.
- B) está errada, pois depende do padrão de acesso e dos custos.
- C) está correta apenas em DRAM.
- D) está correta apenas em assembly.

## Questões Adicionais

16. Explique a diferença entre busca sob demanda e prefetch.
17. Um prefetcher trouxe 80 blocos e 60 foram usados. Qual foi a accuracy?
18. Sem prefetch ocorreriam 50 misses. O mecanismo evitou 20 deles. Qual foi a coverage?
19. Por que um prefetch do endereço correto pode não evitar a espera da CPU?
20. Diferencie distância e grau de prefetch.

21. A sequência de blocos `8, 12, 16, 20` é melhor caracterizada como:

- A) padrão aleatório.
- B) stride constante de 4 blocos.
- C) next-line estrito.
- D) ausência de localidade.

22. Um mecanismo tem accuracy alta e coverage baixa. Isso pode significar que:

- A) quase todas as poucas previsões feitas são usadas, mas muitos misses continuam sem cobertura.
- B) nenhuma previsão é usada.
- C) ele eliminou necessariamente todos os misses.
- D) accuracy e coverage sempre precisam ter o mesmo valor.

23. Aumentar muito a distância de prefetch pode:

- A) garantir que nenhum bloco seja expulso.
- B) dar mais tempo para a transferência, mas trazer o bloco cedo demais.
- C) eliminar o uso de largura de banda.
- D) transformar acesso aleatório em sequencial.

24. Uma cache contém `A, B, C, D`. Um prefetch inútil de `X` expulsa `A`, que será pedido novamente. Esse efeito é chamado principalmente de:

- A) forwarding.
- B) poluição de cache.
- C) hazard de controle.
- D) writeback de registrador.

25. Qual situação tende a ser a mais difícil para um prefetcher simples?

- A) leitura sequencial de vetor.
- B) endereços com stride constante.
- C) percurso irregular determinado por ponteiros.
- D) busca sequencial de instruções.

---

# 20. Gabarito

1. Buscar antecipadamente dados ou instruções provavelmente usados em breve.
2. Transformando acessos que seriam miss em hits futuros.
3. Sequencial/previsível.
4. Cache é a memória rápida; prefetch é a técnica de buscar antes.
5. Ocupação da cache com dados inúteis que podem expulsar dados úteis.
6. Não.
7. O hardware detecta padrões e busca antes automaticamente.
8. O programa/compilador usa instruções ou dicas para antecipar acessos.
9. Porque buscar dados usa barramentos e acesso à memória.
10. Endereços próximos são prováveis próximos acessos, então podem ser buscados antes.
11. A.
12. B.
13. C.
14. A.
15. B.
16. Na busca sob demanda, a transferência começa após o pedido real; no prefetch, ela começa antecipadamente com base em uma previsão.
17. `60 / 80 = 75%`.
18. `20 / 50 = 40%`.
19. Porque ele pode chegar tarde, depois que a demanda já começou a esperar; também pode ter chegado cedo e sido expulso.
20. Distância indica quão à frente buscar; grau indica quantos blocos antecipar em cada ação.
21. B.
22. A.
23. B.
24. B.
25. C.
