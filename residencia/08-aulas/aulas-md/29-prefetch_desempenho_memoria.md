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
2000
2010
2020
2030
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

