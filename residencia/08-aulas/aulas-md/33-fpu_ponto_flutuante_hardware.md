# Aula Detalhada - FPU E Ponto Flutuante Em Hardware

**Tema do dia:** FPU, unidade de ponto flutuante, ponto fixo, ponto flutuante, precisão simples, precisão dupla, latência, throughput, arredondamento, normalização, operações reais e relação com arquitetura de computadores  
**Aula na sequência:** 33  
**Objetivo:** entender o que é uma FPU, por que ela existe, como se relaciona com números em ponto flutuante e quais características podem aparecer em questões conceituais de arquitetura.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 17, você estudou:

```text
ponto fixo
ponto flutuante
sinal
expoente
mantissa/significando
normalização
precisão
arredondamento
```

Essa aula não repete toda a representação.

Agora o foco é hardware:

```text
quem faz as contas com ponto flutuante dentro do processador?
```

A resposta é:

```text
FPU
Floating-Point Unit
Unidade de Ponto Flutuante
```

---

# 2. Ideia Central

FPU é uma unidade funcional especializada em operações com números de ponto flutuante.

Ela executa operações como:

```text
soma de ponto flutuante
subtração de ponto flutuante
multiplicação de ponto flutuante
divisão de ponto flutuante
conversões
comparações
```

Ponto flutuante é usado para representar números reais aproximados.

Exemplos:

```text
3.14
-0.001
1.2 * 10^8
```

Essas operações são mais complexas que operações inteiras simples.

Por isso muitos processadores têm uma unidade própria para elas.

---

# 3. Por Que FPU Existe?

Operações inteiras são relativamente diretas.

Exemplo:

```text
5 + 7 = 12
```

Em binário inteiro, a ULA faz isso com somadores.

Mas ponto flutuante envolve:

```text
sinal
expoente
fração
normalização
alinhamento
arredondamento
casos especiais
```

Exemplo simplificado de soma:

```text
1.25 * 2^3
+ 1.50 * 2^1
```

Antes de somar, precisa alinhar expoentes.

Depois, somar significandos.

Depois, normalizar.

Depois, arredondar.

Isso justifica hardware especializado.

---

# 4. FPU Não É A Mesma Coisa Que Representação

Ponto flutuante:

```text
forma de representar números
```

FPU:

```text
hardware que opera com esses números
```

Analogia:

```text
binário = linguagem/representação
ULA = hardware que calcula
```

Para ponto flutuante:

```text
formato IEEE 754 = representação
FPU = hardware que calcula
```

Pegadinha:

```text
saber o formato não é a mesma coisa que saber a unidade funcional
```

---

# 5. Precisão Simples E Dupla

Em provas, pode aparecer:

```text
precisão simples
precisão dupla
```

No padrão IEEE 754 comum:

```text
precisão simples -> 32 bits
precisão dupla -> 64 bits
```

Precisão simples:

```text
menos bits
menos precisão
menor armazenamento
operações possivelmente mais rápidas/menos custosas
```

Precisão dupla:

```text
mais bits
mais precisão
maior faixa/qualidade numérica
mais custo de hardware/energia/tempo
```

Uma FPU moderna pode suportar múltiplos formatos.

Isso foi justamente o tipo de ideia cobrada na prova antiga:

```text
suporte a múltiplos padrões de precisão
```

---

# 6. Campos Do Ponto Flutuante

Revisão rápida:

```text
sinal
expoente
fração/mantissa/significando
```

Sinal:

```text
positivo ou negativo
```

Expoente:

```text
escala do número
```

Fração/significando:

```text
dígitos significativos
```

Em notação científica:

```text
1.101 * 2^5
```

O `1.101` é o significando.

O `5` é o expoente.

---

# 7. Por Que Operações Floating-Point São Mais Difíceis?

Considere soma:

```text
1.0 * 2^5
+ 1.0 * 2^1
```

Os expoentes são diferentes.

Antes de somar, a FPU precisa alinhar:

```text
1.0 * 2^5
+ 0.0001 * 2^5
```

Depois soma.

Depois normaliza e arredonda.

Etapas típicas:

```text
comparar expoentes
alinhar significandos
somar/subtrair
normalizar resultado
arredondar
tratar exceções
```

Por isso é mais complicado que somar inteiros.

---

# 8. Latência Da FPU

Latência é o tempo para uma operação individual terminar.

Exemplo:

```text
uma multiplicação floating-point demora 4 ciclos
uma divisão floating-point demora 20 ciclos
```

Números variam por arquitetura.

Conceito:

```text
operações de ponto flutuante podem ter latências diferentes
```

Divisão e raiz quadrada costumam ser mais lentas que soma e multiplicação.

Para prova:

```text
latência = tempo até o resultado ficar pronto
```

---

# 9. Throughput Da FPU

Throughput é quantas operações podem ser iniciadas ou concluídas por unidade de tempo.

Uma FPU pode ser pipelined.

Exemplo:

```text
latência de multiplicação = 4 ciclos
throughput = 1 multiplicação por ciclo
```

Isso significa:

```text
cada multiplicação individual demora 4 ciclos
mas depois do pipeline cheio, pode sair uma por ciclo
```

Mesma diferença vista na aula de pipeline:

```text
latência != throughput
```

---

# 10. FPU E Pipeline

FPU pode ter pipeline interno.

Operações longas são divididas em etapas.

Exemplo:

```text
alinhamento
operação
normalização
arredondamento
```

Isso melhora a vazão.

Mas ainda pode haver hazards se instruções dependem do resultado.

Exemplo:

```text
FADD F1, F2, F3
FMUL F4, F1, F5
```

A multiplicação precisa de `F1`, produzido pela soma.

Pode haver espera até o resultado ficar disponível.

---

# 11. Registradores De Ponto Flutuante

Muitas arquiteturas têm registradores específicos para ponto flutuante.

Exemplo conceitual:

```text
F0, F1, F2...
```

Outras arquiteturas podem usar registradores vetoriais ou registradores gerais em alguns contextos.

Para sua prova, basta entender:

```text
FPU opera sobre valores em formato de ponto flutuante
esses valores podem estar em registradores apropriados
```

Não precisa decorar registradores reais de uma arquitetura específica.

---

# 12. Arredondamento

Números reais nem sempre são representáveis exatamente em binário.

Exemplo clássico:

```text
0.1 decimal
```

Em binário, pode não ter representação finita exata.

Então a FPU precisa arredondar.

Isso causa pequenos erros.

Na prova, se aparecer:

```text
ponto flutuante sempre representa números reais exatamente
```

Está errado.

Melhor:

```text
ponto flutuante representa aproximações com regras de arredondamento
```

---

# 13. Casos Especiais

Padrões como IEEE 754 tratam casos especiais.

Exemplos:

```text
zero positivo e negativo
infinito
NaN
subnormais
overflow
underflow
```

Para sua prova, o mais provável é só reconhecer que:

```text
FPU precisa lidar com precisão, arredondamento e casos especiais
```

Não precisa aprofundar NaN e subnormal agora, a menos que apareça nos seus erros.

---

# 14. FPU E Desempenho

FPU importa em aplicações com muitos números reais.

Exemplos:

```text
simulação física
processamento de sinais
gráficos
machine learning
engenharia
ciência de dados
áudio
vídeo
```

Sem FPU, operações de ponto flutuante podem precisar ser emuladas por software.

Isso é mais lento.

FPU dedicada melhora desempenho.

---

# 15. FPU, GPU E SIMD

Só para reconhecimento:

GPU e unidades vetoriais também fazem muitas operações de ponto flutuante.

SIMD significa:

```text
Single Instruction, Multiple Data
```

Uma instrução opera em vários dados.

Isso é útil para:

```text
vetores
matrizes
gráficos
IA
processamento de sinais
```

Não é foco principal do edital, mas pode aparecer em texto contextual.

---

# 16. O Que A Prova Pode Perguntar?

Perguntas prováveis:

```text
O que é FPU?
Qual tipo de número ela processa?
Por que FPU melhora desempenho?
O que significa suporte a precisão simples e dupla?
Qual a diferença entre representação ponto flutuante e FPU?
Latência e throughput são a mesma coisa?
```

Respostas-chave:

```text
FPU = unidade de ponto flutuante
executa operações com números reais aproximados
suporte a múltiplas precisões aumenta flexibilidade
latência = tempo de uma operação
throughput = vazão de operações
```

---

# 17. Pegadinhas

## 17.1 FPU Não É Cache

Cache guarda dados/instruções.

FPU calcula ponto flutuante.

Se a questão pergunta desempenho de operações com números reais:

```text
FPU
```

Se pergunta reduzir acesso à memória:

```text
cache/prefetch
```

---

## 17.2 FPU Não É Só Armazenamento

FPU não é memória.

Ela executa operações.

---

## 17.3 Ponto Flutuante Não É Sempre Mais Preciso

Ponto flutuante tem faixa grande.

Mas não significa precisão infinita.

Ponto fixo pode ser mais adequado quando:

```text
faixa limitada
escala conhecida
hardware simples
controle de erro previsível
```

---

## 17.4 Precisão Dupla Custa Mais

Mais bits:

```text
mais precisão
mais área
mais energia
mais largura de dados
```

Não marque como sempre melhor em todo contexto.

---

# 18. Resumo De Prova

```text
FPU = Floating-Point Unit
função = operações aritméticas com ponto flutuante
ponto flutuante = representação de reais aproximados
simples = 32 bits
dupla = 64 bits
suporte a múltiplas precisões = característica importante
latência = tempo de uma operação individual
throughput = vazão de operações
FPU pode ser pipelined
arredondamento é necessário porque muitos reais não são exatos em binário
```

---

# 19. Exercícios

1. O que é FPU?
2. Que tipo de número a FPU processa?
3. Qual é a diferença entre ponto flutuante e FPU?
4. O que é precisão simples?
5. O que é precisão dupla?
6. Por que operações floating-point são mais complexas que inteiras?
7. O que é latência?
8. O que é throughput?
9. Por que ponto flutuante pode ter erro de arredondamento?
10. Cite uma aplicação que usa muitas operações de ponto flutuante.

## Múltipla Escolha

11. Uma FPU é:

- A) uma unidade especializada em operações de ponto flutuante.
- B) uma memória cache associativa.
- C) uma porta lógica universal.
- D) um registrador de deslocamento.

12. Suporte a precisão simples e dupla indica:

- A) capacidade de trabalhar com diferentes formatos de ponto flutuante.
- B) eliminação de todos os erros numéricos.
- C) uso obrigatório de memória virtual.
- D) impossibilidade de arredondamento.

13. Latência de uma operação significa:

- A) tempo para uma operação individual produzir resultado.
- B) número total de registradores.
- C) quantidade de bits no opcode.
- D) taxa de miss da cache.

14. Ponto flutuante:

- A) representa aproximações de números reais com sinal, expoente e fração.
- B) representa apenas inteiros sem sinal.
- C) é sempre exato para qualquer decimal.
- D) não precisa de arredondamento.

15. Uma FPU dedicada tende a melhorar desempenho em:

- A) programas com muitas operações reais/ponto flutuante.
- B) mapas de Karnaugh manuais.
- C) codificação ASCII simples.
- D) seleção de MUX 2:1 sem clock.

---

# 20. Gabarito

1. Unidade de ponto flutuante.
2. Números em ponto flutuante, usados para reais aproximados.
3. Ponto flutuante é representação; FPU é hardware que opera esses valores.
4. Formato comum de 32 bits.
5. Formato comum de 64 bits.
6. Envolvem expoente, alinhamento, normalização, arredondamento e casos especiais.
7. Tempo para uma operação individual terminar.
8. Vazão de operações por unidade de tempo.
9. Porque muitos valores decimais não têm representação binária finita exata.
10. Simulação, gráficos, processamento de sinais, áudio, IA, ciência de dados etc.
11. A.
12. A.
13. A.
14. A.
15. A.

