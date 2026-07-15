# Aula Detalhada - FPU E Ponto Flutuante Em Hardware

**Tema do dia:** FPU, caminho de dados, soma/subtração, multiplicação/divisão, alinhamento, normalização, guard/round/sticky, modos de arredondamento, valores especiais, flags, conversões, latência e throughput
**Aula na sequência:** 33  
**Objetivo:** entender o caminho percorrido por uma operação de ponto flutuante, rastrear suas etapas e reconhecer as decisões de arredondamento, exceções, conversões e desempenho mais prováveis em prova.

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

Esta aula usa a representação da Aula 17 como ponto de partida, sem refazer toda a conversão de formatos. O foco agora é acompanhar o que o hardware faz com os operandos.

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

Ao final, você deve conseguir explicar:

```text
por que soma exige alinhamento de expoentes
como normalização pode alterar o expoente
para que servem guard, round e sticky
como multiplicação e divisão tratam sinal e expoente
como NaN, infinito, zero e subnormal mudam a operação
por que latência e throughput não são a mesma coisa
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

# 8. Caminho De Dados Geral De Uma FPU

Uma operação típica percorre blocos conceituais. A implementação real varia, mas este fluxo é uma boa referência:

```text
registradores de entrada
        ↓
desempacotar sinal, expoente e fração
        ↓
classificar operandos e detectar casos especiais
        ↓
executar o caminho da operação
        ↓
normalizar
        ↓
arredondar
        ↓
verificar overflow, underflow e demais condições
        ↓
empacotar o resultado e gravar registrador/flags
```

## 8.1 Desempacotamento

A FPU separa os campos codificados:

```text
sinal
expoente armazenado
fração armazenada
```

Para um número normal IEEE 754, o significando usado internamente inclui o bit implícito:

```text
fração armazenada = .101...
significando interno = 1.101...
```

Para subnormais, esse bit implícito é `0`, não `1`:

```text
significando subnormal = 0.fração
```

## 8.2 Classificação Antes Da Conta

O expoente e a fração permitem classificar rapidamente cada operando:

```text
zero
subnormal
normal
infinito
NaN
```

Isso importa porque algumas combinações produzem resposta especial sem passar por todo o caminho aritmético. Por exemplo:

```text
NaN + qualquer valor -> NaN
infinito + valor finito -> infinito
```

---

# 9. Soma E Subtração: Etapas Completas

Soma/subtração de ponto flutuante não começa somando os campos inteiros completos. O fluxo é:

```text
1. desempacotar e classificar
2. comparar expoentes
3. deslocar o menor significando para alinhar expoentes
4. somar ou subtrair significandos, considerando os sinais
5. determinar o sinal do resultado
6. normalizar
7. arredondar
8. ajustar exceções/flags e empacotar
```

## 9.1 Por Que Alinhar?

É a mesma regra da soma decimal:

```text
1,23 × 10²
0,45 × 10¹
```

Não se somam diretamente `1,23 + 0,45`, porque as escalas diferem. Primeiro:

```text
0,45 × 10¹ = 0,045 × 10²
```

Em binário, o menor significando é deslocado à direita até usar o mesmo expoente do maior.

## 9.2 Exemplo Rastreado De Soma

Considere:

```text
A = 1.100₂ × 2³ = 12
B = 1.010₂ × 2¹ = 2,5
```

**Passo 1 — comparar expoentes:**

```text
3 - 1 = 2
```

**Passo 2 — alinhar B deslocando seu significando duas posições:**

```text
B = 0.01010₂ × 2³
```

**Passo 3 — somar:**

```text
  1.10000₂ × 2³
+ 0.01010₂ × 2³
-----------------
  1.11010₂ × 2³
```

Resultado:

```text
1.1101₂ × 2³ = 14,5
```

O resultado já está normalizado. Em um formato de precisão limitada, os bits extras seriam usados no arredondamento.

## 9.3 Exemplo De Subtração Com Cancelamento

Considere:

```text
A = 1.0000₂ × 2⁴ = 16
B = 1.1110₂ × 2³ = 15
```

Alinhamento:

```text
B = 0.11110₂ × 2⁴
```

Subtração:

```text
1.00000₂ × 2⁴
-0.11110₂ × 2⁴
----------------
0.00010₂ × 2⁴
```

O resultado ainda não está normalizado. Deslocando o significando quatro posições à esquerda e reduzindo o expoente em quatro:

```text
0.00010₂ × 2⁴ = 1.0000₂ × 2⁰ = 1
```

Essa situação é chamada de cancelamento: números próximos, com sinais opostos, eliminam muitos bits significativos. Ela pode exigir vários deslocamentos à esquerda e reduzir a precisão relativa do resultado.

## 9.4 Adição E Subtração Dependem Dos Sinais

O opcode não conta toda a história:

```text
(+A) + (+B) -> somar magnitudes
(+A) + (-B) -> subtrair magnitudes
(+A) - (+B) -> subtrair magnitudes
(+A) - (-B) -> somar magnitudes
```

Ao subtrair magnitudes, o sinal final acompanha o operando de maior magnitude, salvo regras especiais para zero e modo de arredondamento.

---

# 10. Normalização E Ajuste Do Expoente

Um resultado normal deve ter a forma:

```text
1.xxxxx₂ × 2^e
```

Há dois casos principais.

## 10.1 Carry Na Soma

Exemplo:

```text
1.100₂ × 2² + 1.100₂ × 2²
= 11.000₂ × 2²
```

Para normalizar:

```text
11.000₂ × 2² = 1.1000₂ × 2³
```

Regra:

```text
deslocar significando à direita
incrementar expoente
```

## 10.2 Cancelamento Na Subtração

Se o resultado começa com zeros:

```text
0.00101₂ × 2⁵
```

Normalização:

```text
1.010₂ × 2²
```

Regra:

```text
deslocar significando à esquerda
decrementar expoente a cada posição
```

Se o expoente cresce além do máximo, pode ocorrer `overflow`. Se diminui até a faixa mínima, o resultado pode virar subnormal ou zero, com possível `underflow`.

---

# 11. Bits Guard, Round E Sticky

A FPU mantém bits temporários além dos que caberão no resultado. Os três conceitos mais importantes são:

```text
G = guard  -> primeiro bit descartado
R = round  -> segundo bit descartado
S = sticky -> OR de todos os bits descartados depois de R
```

Exemplo:

```text
bits que serão mantidos | G R | bits restantes
          1.0101        | 1 0 | 00101...
```

Como existe pelo menos um `1` depois de R:

```text
S = 1
```

O sticky não informa quantos bits `1` existiam nem suas posições. Ele responde apenas:

```text
“algum dos bits restantes era 1?”
```

## 11.1 Por Que Eles São Necessários?

Durante o alinhamento de uma soma, o menor operando pode ser deslocado muitas posições. Jogar fora esses bits imediatamente poderia alterar a decisão de arredondamento.

Assim, G/R/S preservam informação suficiente para distinguir:

```text
valor abaixo da metade
valor exatamente na metade
valor acima da metade
resultado exato
```

## 11.2 Regra Prática Para O Mais Próximo, Empate Para Par

No modo padrão IEEE 754, incrementa-se o último bit mantido quando:

```text
G = 1 e (R = 1 ou S = 1)
```

Isso significa “mais que a metade”. No empate exato:

```text
G = 1, R = 0, S = 0
```

Escolhe-se o resultado cujo último bit mantido é par, isto é, `0`.

Forma compacta:

```text
incrementar se G AND (R OR S OR LSB_mantido)
```

## 11.3 Dois Empates Rastreáveis

Mantendo três bits fracionários:

```text
1.010 | 1000...
```

É empate exato e o último bit mantido já é `0`:

```text
resultado = 1.010
```

Agora:

```text
1.011 | 1000...
```

Também é empate, mas o último bit mantido é `1`. Incrementa-se para tornar o resultado par:

```text
resultado = 1.100
```

“Par” se refere ao bit menos significativo do resultado armazenado, não ao valor decimal ser inteiro par.

---

# 12. Modos De Arredondamento

O IEEE 754 define diferentes direções de arredondamento. Os quatro modos clássicos mais cobrados são:

| Modo | Ideia | Para `+x` inexato | Para `-x` inexato |
|---|---|---|---|
| Mais próximo, empate para par | menor distância; desempata pelo LSB par | vizinho mais próximo | vizinho mais próximo |
| Em direção a zero | truncar a magnitude | diminui | fica menos negativo |
| Em direção a `+∞` | teto | aumenta se inexato | fica menos negativo |
| Em direção a `-∞` | piso | diminui | fica mais negativo |

O modo “em direção a zero” não é igual a “sempre arredondar para baixo”:

```text
+3,7 -> +3 em direção a zero
-3,7 -> -3 em direção a zero
-3,7 -> -4 em direção a -∞
```

## 12.1 Exemplo Conceitual

Suponha que os dois números representáveis vizinhos sejam `1,25` e `1,50`, e o valor exato seja `1,40`:

```text
mais próximo -> 1,50
em direção a zero -> 1,25
em direção a +∞ -> 1,50
em direção a -∞ -> 1,25
```

Para `-1,40`, com vizinhos `-1,25` e `-1,50`:

```text
em direção a zero -> -1,25
em direção a +∞ -> -1,25
em direção a -∞ -> -1,50
```

---

# 13. Multiplicação Em Ponto Flutuante

Fluxo conceitual para números normais:

```text
1. sinal do resultado = sinal A XOR sinal B
2. expoente real do resultado = expoente A + expoente B
3. multiplicar significandos
4. normalizar
5. arredondar
6. verificar casos especiais, overflow/underflow e empacotar
```

Nos campos codificados com viés (`bias`), não se deve simplesmente somar e deixar dois vieses:

```text
expoente codificado do resultado
= expoente codificado A + expoente codificado B - bias
```

## 13.1 Exemplo Rastreado

```text
A = 1.1₂ × 2⁰ = 1,5
B = 1.0₂ × 2¹ = 2
```

Sinal:

```text
positivo XOR positivo = positivo
```

Expoente:

```text
0 + 1 = 1
```

Significandos:

```text
1.1₂ × 1.0₂ = 1.1₂
```

Resultado:

```text
1.1₂ × 2¹ = 3
```

Se o produto dos significandos ficar na forma `10.x` ou `11.x`, a normalização desloca uma posição à direita e incrementa o expoente.

---

# 14. Divisão Em Ponto Flutuante

Fluxo conceitual:

```text
1. sinal do resultado = sinal A XOR sinal B
2. expoente real = expoente A - expoente B
3. dividir significandos
4. normalizar
5. arredondar
6. tratar divisão por zero e demais casos especiais
```

Nos campos com viés:

```text
expoente codificado do resultado
= expoente codificado A - expoente codificado B + bias
```

Exemplo:

```text
6 ÷ 2
=(1.1₂ × 2²) ÷ (1.0₂ × 2¹)
= (1.1₂ ÷ 1.0₂) × 2^(2-1)
= 1.1₂ × 2¹
= 3
```

Divisão geralmente usa hardware iterativo ou pipeline mais complexo e costuma ter maior latência e menor throughput que soma/multiplicação. Não é necessário decorar o algoritmo interno do divisor para esta prova.

---

# 15. Zero, Subnormal, Infinito E NaN

Para um formato IEEE 754 binário, a classificação pelos campos é:

| Expoente | Fração | Classe | Bit implícito |
|---|---|---|---|
| todos `0` | toda `0` | `+0` ou `-0` | — |
| todos `0` | diferente de `0` | subnormal | `0` |
| entre os extremos | qualquer | normal | `1` |
| todos `1` | toda `0` | `+∞` ou `-∞` | — |
| todos `1` | diferente de `0` | NaN | — |

## 15.1 Zero Com Sinal

Existem `+0` e `-0`. Eles normalmente comparam como iguais, mas o sinal pode afetar algumas operações:

```text
1 / +0 -> +∞
1 / -0 -> -∞
```

## 15.2 Subnormal

Subnormais preenchem gradualmente a região entre o menor normal e zero:

```text
menor precisão, mas passagem gradual para zero
```

Eles não usam o `1` implícito. Isso é chamado de `gradual underflow`.

## 15.3 Infinito

Infinito representa resultado além da faixa ou operações como divisão não nula por zero, conforme as regras:

```text
finito + infinito -> infinito
finito não zero / zero -> infinito com sinal
infinito × finito não zero -> infinito com sinal
```

## 15.4 NaN

`NaN` significa `Not a Number`. Surge em operações inválidas:

```text
0 / 0
∞ - ∞
∞ × 0
raiz de número negativo no domínio real
```

NaN normalmente se propaga:

```text
NaN + 5 -> NaN
```

Comparações com NaN são `unordered`. Em particular, não se deve assumir que `NaN == NaN` seja verdadeiro.

## 15.5 Quadro De Casos Clássicos

| Operação | Resultado típico | Condição/flag principal |
|---|---|---|
| número finito não zero ÷ `0` | `∞` com sinal | divisão por zero |
| `0 ÷ 0` | NaN | inválida |
| `∞ - ∞` | NaN | inválida |
| `∞ × 0` | NaN | inválida |
| resultado grande demais | infinito ou maior finito, conforme modo | overflow + inexato |
| resultado minúsculo e inexato | subnormal ou zero | possível underflow + inexato |

---

# 16. Exceções E Flags IEEE 754

As cinco condições clássicas são:

```text
invalid operation (operação inválida)
divide by zero (divisão por zero)
overflow
underflow
inexact (resultado inexato/arredondado)
```

## 16.1 Significado

| Flag | Exemplo |
|---|---|
| Inválida | `0/0`, `∞-∞`, operação com NaN sinalizador |
| Divisão por zero | valor finito não zero dividido por zero |
| Overflow | magnitude arredondada excede a faixa do formato |
| Underflow | resultado minúsculo perde precisão na região próxima de zero |
| Inexato | o resultado matemático precisou ser arredondado |

Pegadinha importante:

```text
“exceção” IEEE 754 não significa obrigatoriamente interromper o programa
```

Com frequência, a FPU entrega um resultado padrão (`NaN`, infinito, subnormal etc.) e marca uma flag de status. A arquitetura ou o software decide se isso causará um trap.

As flags podem ser **sticky**: permanecem marcadas até serem explicitamente limpas. Não confunda uma flag sticky com o **bit sticky** usado no arredondamento; têm nomes parecidos, mas funções diferentes.

---

# 17. Conversões E Comparações

A FPU também executa conversões, e conversão não é apenas copiar os mesmos bits.

## 17.1 Inteiro Para Ponto Flutuante

Inteiros pequenos podem ser representados exatamente, mas um inteiro com mais bits significativos do que o formato suporta precisa ser arredondado.

Exemplo conhecido em precisão simples:

```text
16.777.217 não é representável exatamente
no modo mais próximo, torna-se 16.777.216
```

Isso ocorre porque a precisão simples tem 24 bits significativos contando o bit implícito.

## 17.2 Ponto Flutuante Para Inteiro

Pode exigir arredondamento/truncamento:

```text
3,9 -> 3, se a conversão for em direção a zero
-3,9 -> -3, em direção a zero
```

NaN, infinito ou valor fora da faixa inteira pode marcar operação inválida; o resultado exato depende da arquitetura.

## 17.3 Entre Precisões

```text
single -> double: normalmente exato, pois double contém toda a precisão de single
double -> single: pode arredondar, transbordar ou virar subnormal/zero
```

## 17.4 Conversão Numérica Não É Reinterpretação

```text
converter 1 inteiro para float -> produzir codificação de 1,0
reinterpretar os bits do inteiro 1 como float -> valor binário completamente diferente
```

## 17.5 Comparações

Comparações comuns produzem condições como:

```text
menor
igual
maior
unordered, se houver NaN
```

Não trate NaN como um número maior ou menor que todos os outros.

---

# 18. Latência Da FPU

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

# 19. Throughput Da FPU

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

Compare três situações conceituais:

| Unidade | Latência | Intervalo de iniciação | Interpretação |
|---|---:|---:|---|
| Somador pipelined | 4 ciclos | 1 ciclo | uma nova soma pode começar a cada ciclo |
| Multiplicador parcialmente pipelined | 5 ciclos | 2 ciclos | nova multiplicação a cada 2 ciclos |
| Divisor iterativo | 16 ciclos | 16 ciclos | normalmente espera a divisão anterior terminar |

O “intervalo de iniciação” é uma forma de expressar throughput:

```text
intervalo 1 -> throughput máximo de 1 operação/ciclo
intervalo 2 -> throughput máximo de 1 operação a cada 2 ciclos
```

---

# 20. FPU E Pipeline

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

## 20.1 Operações Independentes E Dependentes

Com latência 4 e throughput 1:

```text
FMUL F1, F2, F3
FMUL F4, F5, F6
FMUL F7, F8, F9
```

As operações são independentes e podem entrar em ciclos consecutivos.

Agora:

```text
FMUL F1, F2, F3
FADD F4, F1, F5
```

A segunda depende de `F1`. Mesmo que a unidade tenha bom throughput, a dependência respeita a latência até o resultado poder ser encaminhado ou lido.

Portanto:

```text
pipeline melhora throughput
pipeline não faz a dependência ignorar a latência
```

---

# 21. Registradores De Ponto Flutuante

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

# 22. Arredondamento

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

# 23. Casos Especiais

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

Para sua prova, é importante reconhecer que:

```text
FPU precisa lidar com precisão, arredondamento e casos especiais
```

As classificações, operações inválidas e flags de maior retorno foram detalhadas nas seções 15 e 16. Não é necessário decorar payload de NaN nem implementar circuitos de detecção.

---

# 24. FPU E Desempenho

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

# 25. FPU, GPU E SIMD

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

# 26. O Que A Prova Pode Perguntar?

Perguntas prováveis:

```text
O que é FPU?
Qual tipo de número ela processa?
Por que FPU melhora desempenho?
O que significa suporte a precisão simples e dupla?
Qual a diferença entre representação ponto flutuante e FPU?
Latência e throughput são a mesma coisa?
Quais etapas formam uma soma de ponto flutuante?
Como G, R e S influenciam o arredondamento?
Como sinal e expoente são tratados na multiplicação/divisão?
Qual operação produz NaN, infinito ou uma flag específica?
Uma conversão entre tipos é necessariamente exata?
```

Respostas-chave:

```text
FPU = unidade de ponto flutuante
executa operações com números reais aproximados
suporte a múltiplas precisões aumenta flexibilidade
latência = tempo de uma operação
throughput = vazão de operações
somar = alinhar, operar, normalizar e arredondar
multiplicar = XOR dos sinais, somar expoentes e multiplicar significandos
dividir = XOR dos sinais, subtrair expoentes e dividir significandos
G/R/S preservam informação dos bits descartados
NaN indica resultado não numérico; operações inválidas podem gerar NaN
propagar um quiet NaN não implica necessariamente uma nova flag invalid
```

---

# 27. Pegadinhas

## 27.1 FPU Não É Cache

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

## 27.2 FPU Não É Só Armazenamento

FPU não é memória.

Ela executa operações.

---

## 27.3 Ponto Flutuante Não É Sempre Mais Preciso

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

## 27.4 Precisão Dupla Custa Mais

Mais bits:

```text
mais precisão
mais área
mais energia
mais largura de dados
```

Não marque como sempre melhor em todo contexto.

## 27.5 Somar Expoentes Na Soma Está Errado

```text
soma/subtração -> alinhar expoentes
multiplicação -> somar expoentes
divisão -> subtrair expoentes
```

## 27.6 Somar Campos Com Bias Sem Corrigir Está Errado

Na multiplicação de expoentes codificados:

```text
EA + EB - bias
```

Na divisão:

```text
EA - EB + bias
```

## 27.7 Underflow Não É Simplesmente “Expoente Negativo”

Expoentes reais negativos são normais em valores como `0,5 = 1,0 × 2⁻¹`. Underflow ocorre perto do limite mínimo representável e está ligado a resultado minúsculo, frequentemente inexato.

## 27.8 Inexato Não Significa Resultado Inútil

A flag `inexact` informa que houve arredondamento. Isso é comum e não significa que a FPU falhou.

## 27.9 NaN Não É Infinito

```text
infinito = valor estendido com sinal, útil para overflow/divisão por zero
NaN = resultado não numérico de operação inválida
```

## 27.10 Bit Sticky Não É Flag Sticky

```text
bit sticky -> reúne bits descartados para decidir arredondamento
flag sticky -> registra que uma condição/exceção já ocorreu
```

---

# 28. Resumo De Prova

```text
FPU = Floating-Point Unit
função = operações aritméticas com ponto flutuante
ponto flutuante = representação de reais aproximados
simples = 32 bits
dupla = 64 bits
suporte a múltiplas precisões = característica importante
fluxo geral = desempacotar, classificar, operar, normalizar, arredondar, empacotar
soma/sub = alinhar expoentes, operar significandos, normalizar e arredondar
multiplicação = sinais em XOR, expoentes somados, significandos multiplicados
divisão = sinais em XOR, expoentes subtraídos, significandos divididos
G = primeiro descartado; R = segundo; S = OR dos demais
arredondamentos = mais próximo/par, zero, +infinito, -infinito
normais usam 1 implícito; subnormais usam 0 implícito
expoente todo 1 + fração 0 = infinito
expoente todo 1 + fração não zero = NaN
flags = inválida, divisão por zero, overflow, underflow, inexato
latência = tempo de uma operação individual
throughput = vazão de operações
FPU pode ser pipelined
arredondamento é necessário porque muitos reais não são exatos em binário
pipeline pode aceitar operações independentes antes de a primeira terminar
dependências ainda precisam respeitar a latência
```

---

# 29. Exercícios

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

## Questões Aprofundadas

16. Coloque em ordem as etapas principais de uma soma: arredondar, alinhar expoentes, normalizar, operar significandos.

17. Alinhe `1.010₂ × 2¹` ao expoente `3`.

18. Por que uma subtração entre números muito próximos pode exigir vários deslocamentos à esquerda?

19. Em um arredondamento, `G=1`, `R=0`, `S=0` e o último bit mantido é `0`. No modo mais próximo, empate para par, incrementa ou mantém?

20. Repita a questão anterior se o último bit mantido for `1`.

21. Qual é o resultado de arredondar `-3,7` em direção a zero e em direção a `-∞`?

22. Na multiplicação, como são obtidos o sinal e o expoente real do resultado?

23. Nos campos com bias, complete: multiplicação `EA + EB ___ bias`; divisão `EA - EB ___ bias`.

24. Classifique: expoente todo zero e fração não zero.

25. Classifique: expoente todo um e fração não zero.

26. Diferencie `5/0` de `0/0` em IEEE 754.

27. Quais são as cinco flags clássicas de ponto flutuante?

28. Uma FPU tem latência de 5 ciclos e aceita uma nova multiplicação por ciclo. Qual é seu throughput máximo? Cinco multiplicações independentes precisam esperar cinco ciclos entre si para começar?

29. Explique por que converter precisão simples para dupla normalmente é exato, mas o caminho inverso pode não ser.

30. Diferencie conversão numérica de reinterpretação de bits.

## Múltipla Escolha Aprofundada

31. Em uma soma de ponto flutuante com expoentes diferentes, a primeira transformação aritmética típica é:

- A) somar diretamente os campos de expoente.
- B) deslocar o significando associado ao menor expoente.
- C) inverter todos os bits da fração maior.
- D) converter os operandos para BCD.

32. O sticky bit vale `1` quando:

- A) o sinal do resultado é negativo.
- B) todos os bits descartados são zero.
- C) pelo menos um dos bits descartados posteriores ao round bit é `1`.
- D) o expoente é ímpar.

33. Qual operação é inválida e normalmente produz NaN?

- A) `1/0`.
- B) `∞ × 0`.
- C) `1 + ∞`.
- D) `0 + 0`.

34. Uma unidade tem latência 4 ciclos e throughput 1 operação/ciclo. Isso significa que:

- A) cada operação termina em um ciclo.
- B) só pode iniciar nova operação após quatro ciclos.
- C) uma operação demora quatro ciclos, mas operações independentes podem iniciar a cada ciclo.
- D) quatro resultados saem em todo ciclo desde o primeiro ciclo.

35. Qual afirmação está correta?

- A) Underflow é qualquer expoente real negativo.
- B) NaN é igual a si mesmo em toda comparação comum.
- C) A flag inexato pode ser marcada por um arredondamento normal.
- D) Converter double para single é sempre exato.

---

# 30. Gabarito

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
16. Alinhar expoentes, operar significandos, normalizar e arredondar.
17. Deslocar duas posições à direita: `0.01010₂ × 2³`.
18. Porque o cancelamento pode deixar zeros à esquerda; é preciso deslocar até recuperar a forma `1.x` e diminuir o expoente a cada posição.
19. Mantém: é empate e o LSB já é par (`0`).
20. Incrementa: é empate e o LSB `1` deve se tornar par.
21. Em direção a zero: `-3`; em direção a `-∞`: `-4`.
22. Sinal por XOR; expoente real pela soma dos expoentes reais.
23. Multiplicação: menos bias; divisão: mais bias.
24. Subnormal.
25. NaN.
26. `5/0` produz infinito com sinal e marca divisão por zero; `0/0` produz NaN e marca operação inválida.
27. Inválida, divisão por zero, overflow, underflow e inexato.
28. Uma operação por ciclo depois de cheio; não, as cinco independentes podem começar em ciclos consecutivos.
29. Double possui precisão e faixa suficientes para representar valores de single; single pode precisar arredondar um valor de double ou não comportar sua faixa.
30. Conversão produz o valor equivalente no formato de destino; reinterpretação conserva o padrão de bits e apenas muda como ele é lido.
31. B.
32. C.
33. B.
34. C.
35. C.
