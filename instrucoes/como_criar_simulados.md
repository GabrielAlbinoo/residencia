# Instrução - Como Criar Um Simulado

Esta instrução serve para manter os próximos simulados no mesmo padrão dos simulados já produzidos para Sistemas Digitais.

## 1. Regra Principal De Dificuldade

Por padrão, todo simulado deve ser feito com questões em **nível de prova difícil**.

Só use questões fáceis, médias, treino guiado ou distribuição específica de dificuldade se o usuário pedir explicitamente.

Regra:

```text
se o usuário não especificar dificuldade -> criar simulado difícil, nível de prova
se o usuário especificar dificuldade -> seguir exatamente o pedido
```

## 2. Antes De Criar O Simulado

Leia:

```text
plano_estudos_ci_inovador_sistemas_digitais_ufcg.md
log_estudos_e_simulados.md
o_que_revisar.md
resultados_simulados/
```

Quando o simulado for sobre aulas específicas, leia também os arquivos correspondentes em:

```text
aulas/
```

Use os simulados anteriores como referência de estilo, mas não copie questões antigas sem motivo.

## 3. Base HTML

Use como base:

```text
simulados/modelo_simulado_base.html
```

Crie uma cópia com nome claro:

```text
simulados/simulado_NN_assunto_quantidade_questoes.html
```

Exemplo:

```text
simulados/simulado_04_aulas_10_a_14_nivel_prova_50_questoes.html
```

## 4. Estrutura Do Simulado

O simulado deve ter:

- título claro;
- quantidade de questões;
- blocos de desempenho;
- alternativas marcáveis;
- botão "Não sei";
- campo de OBS quando o modelo tiver esse recurso;
- timer;
- resumo de questões no topo;
- barra/resumo ao final quando disponível no modelo;
- correção automática;
- relatório final para IA;
- gabarito interno correto.

Em simulados gerais/acumulativos, misture a ordem das questões entre os assuntos. Não deixe todas as questões de uma aula ou bloco juntas, porque a prova real tende a misturar conteúdos. O bloco interno pode continuar existindo apenas para diagnóstico no relatório final.

Não exiba o tópico da questão durante a prova se isso puder dar dica.

O tópico pode ficar salvo internamente para aparecer no relatório final e ajudar a revisão.

## 5. Criação Das Questões

Cada questão deve ter:

- enunciado claro;
- alternativas plausíveis;
- apenas uma resposta correta;
- explicação objetiva;
- bloco ou assunto para análise posterior;
- dificuldade coerente com o pedido;
- contexto suficiente para revisão depois.

Se a questão precisar de tabela, use tabelas legíveis.

Para Karnaugh, tabela-verdade ou FSM, prefira representação visual clara em vez de texto confuso.

Evite imagens externas, porque elas complicam o uso no tablet.

## 6. Nível De Prova Difícil

Questões difíceis não devem ser apenas longas.

Elas devem exigir:

- raciocínio em duas ou mais etapas;
- interpretação cuidadosa;
- escolha entre alternativas parecidas;
- aplicação de regra em caso menos óbvio;
- atenção a detalhes como borda de clock, overflow, POS/SOP, enable, reset, módulo, estado inicial etc.

Evite pegadinhas injustas.

A questão pode ser difícil, mas precisa ser resolvível com o conteúdo estudado.

## 6.1 Padrão De Prova Real

Quando o usuário pedir simulado difícil, nível de prova, revisão acumulativa ou não especificar dificuldade, o simulado deve ser feito no padrão **prova real**, não apenas no padrão revisão.

Nesse padrão:

- pelo menos metade das questões deve exigir **duas ou mais etapas** de raciocínio;
- uma parte relevante das questões deve misturar assuntos próximos, sem sair do conteúdo estudado;
- incluir questões do tipo **"assinale a incorreta"**, **"qual alternativa não é verdadeira"**, **"exceto"** ou **"qual afirmação está errada"**;
- incluir questões com enunciados em que seja necessário interpretar tabela, mapa, circuito textual, sequência temporal ou especificação antes de calcular;
- evitar que a resposta seja obtida por reconhecimento imediato de fórmula;
- não transformar dificuldade em texto longo sem necessidade.

Exemplos de questões mais realistas:

```text
Karnaugh -> expressão mínima -> implementação NAND/NOR
FSM -> tabela de próximo estado -> equações D -> saída
temporização -> setup -> Fmax -> checagem de hold
decoder/MUX/DEMUX -> índice binário -> saída/bloco correto
ponto fixo -> escala -> valor real -> resolução
ponto flutuante -> normalização -> expoente com bias
```

## 6.2 Alternativas Plausíveis E Erros Comuns

As alternativas erradas devem ser construídas a partir de erros prováveis do aluno, não como respostas aleatórias.

Para cada questão difícil, sempre que possível, crie alternativas que correspondam a erros como:

- confundir carry com overflow;
- esquecer extensão de sinal;
- contar índice começando de 1 em vez de 0;
- trocar `C` por `C'`;
- inverter leitura SOP/POS;
- agrupar zeros como se fossem uns, ou o contrário;
- esquecer que `D = Q+` em flip-flop D;
- usar atraso máximo quando a questão pede hold, ou atraso mínimo quando pede setup;
- esquecer o bias do IEEE 754;
- usar `2^m` no lugar de `2^n` em ponto fixo `Qm.n`;
- errar uma etapa intermediária comum de conta.

Em questões numéricas, pelo menos uma alternativa errada deve ser o resultado de um erro pequeno e plausível de cálculo.

Exemplo:

```text
resposta correta: 95,2 MHz
alternativa plausível: 111,1 MHz, caso o aluno esqueça o setup
alternativa plausível: 10,5 MHz, caso erre a conversão ns -> MHz
```

Em questões conceituais, use alternativas parcialmente verdadeiras, mas com um detalhe errado.

## 6.3 Distribuição Do Gabarito

O gabarito deve ter distribuição equilibrada entre `A`, `B`, `C`, `D` e `E`.

Evite padrões como muitas respostas seguidas na mesma letra ou excesso de uma única alternativa.

Antes de entregar, confira a distribuição das respostas corretas. Se estiver muito concentrada, reorganize as alternativas sem mudar o conteúdo da questão.

Regra objetiva:

- em simulados de 60 questões com 5 alternativas, cada letra deve aparecer preferencialmente entre 10 e 14 vezes;
- nenhuma letra pode passar de 16 respostas corretas;
- nenhuma letra pode ficar abaixo de 8 respostas corretas;
- não pode haver sequência de mais de 3 respostas corretas na mesma letra;
- se a distribuição ficar enviesada, embaralhe alternativas e atualize o gabarito antes de entregar.

Exemplo de distribuição aceitável para 60 questões:

```text
A: 12
B: 11
C: 13
D: 12
E: 12
```

## 6.4 Alternativas Sem Resposta Óbvia

As alternativas devem ter tamanho e nível de detalhe parecidos.

Evite que a correta seja identificável só porque:

- é a alternativa mais longa;
- é a única com explicação embutida;
- é a única tecnicamente precisa;
- é a única com termos do enunciado;
- é a única com forma matemática "bonita";
- as demais são absurdas demais.

Regra prática:

```text
se a alternativa correta parece mais bem escrita que as erradas -> reescrever as erradas
```

Em questões conceituais, faça as alternativas erradas parecerem respostas de alguém que estudou, mas confundiu um detalhe.

Em questões numéricas, as alternativas erradas devem vir de erros plausíveis:

- esquecer uma etapa;
- usar unidade errada;
- trocar `pico` por `nano`;
- usar `2^10` onde deveria usar `2^16`;
- inverter setup/hold;
- esquecer bias;
- usar `VDD` em vez de `VDD^2`.

## 6.5 Proibição De Alternativas Duplicadas Ou Equivalentes

Antes de entregar, verificar se existem alternativas repetidas ou equivalentes.

Não pode ocorrer caso como:

```text
B) D = T XOR Q
C) D = T XOR Q
```

Também evitar alternativas que são diferentes na escrita, mas equivalentes na lógica, a menos que a questão seja explicitamente sobre equivalência e permita mais de uma correta.

Exemplos de equivalência que precisam ser detectados:

```text
A XOR B
A'B + AB'

B + D
(B'D')'

D = T XOR Q
D = TQ' + T'Q
```

Regra:

```text
cada questão deve ter exatamente uma alternativa correta e nenhuma duplicada/equivalente
```

## 6.6 Acentuação E Texto Quebrado

O simulado deve ser salvo e revisado em UTF-8.

Antes de entregar, procurar sinais de texto quebrado, como:

```text
Ã§
Ã£
Ã©
Ã­
Ã³
Ãº
?
```

Se aparecer texto quebrado em título, enunciado, alternativa, explicação, bloco ou relatório final, corrigir antes de entregar.

Não entregar simulado com palavras quebradas como:

```text
potÃªncia
questÃ£o
revisÃ£o
Ã©
s?
```

## 6.7 Não Repetir Questões De Simulados Anteriores

Antes de criar um simulado novo, consultar os simulados anteriores em:

```text
simulados/
resultados_simulados/
```

Não repetir questão exatamente igual.

Também evitar repetir a mesma questão apenas trocando números pequenos ou mudando a ordem das alternativas.

É permitido revisitar o mesmo conceito, mas a questão deve mudar a operação cognitiva.

Exemplo ruim:

```text
calcular Fmax com os mesmos dados e só trocar a alternativa correta
```

Exemplo bom:

```text
uma questão pede Fmax
outra pede verificar setup e hold
outra pede encontrar o estágio limitante em pipeline
```

Regra:

```text
mesmo assunto pode repetir
mesma questão não pode repetir
```

## 6.8 Karnaugh Em Nível Real

Questões de Karnaugh não devem ser sempre grupos grandes e óbvios.

Incluir, quando o tema permitir:

- termos únicos;
- pares obrigatórios;
- grupos sobrepostos;
- bordas e cantos;
- `don't care` que ajuda e `don't care` que não precisa ser usado;
- diferença entre implicante essencial e grupo opcional;
- casos em que sobra um mintermo isolado;
- escolha entre SOP e POS;
- implementação NAND/NOR após minimizar;
- hazard/consenso quando fizer sentido.

Evitar mapas em que todos os grupos são fáceis demais, como apenas quartetos evidentes.

Exemplos de desafios mais realistas:

```text
Karnaugh com um octeto, um par e um termo único
Karnaugh em que o melhor grupo usa borda
Karnaugh com don't care que forma grupo maior, mas outro don't care não ajuda
Karnaugh em POS com zeros nos cantos e um zero isolado
Karnaugh que exige comparar SOP mínima e implementação NAND
```

Regra:

```text
se o mapa fica resolvido em 10 segundos por padrão visual óbvio, ele está fácil demais para simulado difícil
```

## 6.9 Fórmulas Com Mais De Uma Etapa

Questões com fórmula não devem ser só substituição direta.

Quando for simulado difícil ou nível de prova, preferir questões em que o aluno precise:

- converter unidades;
- calcular uma grandeza intermediária;
- escolher a fórmula correta;
- combinar duas relações;
- interpretar o resultado em outra unidade;
- comparar com uma restrição.

Exemplo raso:

```text
dado V e I, calcule P = V.I
```

Exemplo melhor:

```text
dado V e R, calcule I = V/R e depois P = V.I
```

Exemplo melhor em CMOS:

```text
converter pF e MHz
calcular Pdyn = alpha.C.VDD^2.f
converter W para mW
comparar com outra configuração
```

Exemplo melhor em temporização:

```text
calcular Tclk mínimo
obter Fmax
verificar hold com caminho mínimo
```

Exemplo melhor em memória:

```text
converter 64K para 2^16
calcular bits de endereço
calcular capacidade total em bits e bytes
```

Regra:

```text
em simulado difícil, pelo menos parte das questões numéricas deve exigir duas ou mais fórmulas/etapas
```

## 7. Revisão Obrigatória Antes De Entregar

Depois de terminar o simulado, revise **todas as questões**.

Essa revisão é obrigatória.

Verifique questão por questão:

- se o enunciado está claro;
- se não há mais de uma alternativa correta;
- se não há alternativas duplicadas ou equivalentes;
- se a resposta marcada no gabarito é realmente correta;
- se a explicação corresponde à resposta correta;
- se as alternativas erradas são plausíveis, mas realmente erradas;
- se a alternativa correta não está óbvia por ser maior, mais detalhada ou mais bem escrita;
- se a distribuição do gabarito está equilibrada entre `A`, `B`, `C`, `D` e `E`;
- se não há texto quebrado, acentuação corrompida ou caracteres estranhos;
- se a questão não repete exatamente uma questão de simulado anterior;
- se tabelas e dados apresentados batem com o enunciado;
- se questões de Karnaugh têm nível adequado e não são todas grupos simples demais;
- se questões com fórmula exigem raciocínio real quando o simulado for difícil;
- se a numeração das questões está correta;
- se os blocos de desempenho somam corretamente;
- se o relatório final para IA inclui alternativas, resposta do usuário, gabarito, explicação e observações;
- se questões "Não sei" aparecem no relatório como não respondidas conscientemente;
- se não há dica indevida no enunciado.

Se encontrar qualquer inconsistência, corrija antes de considerar o simulado pronto.

## 8. Prompt Final Para IA

O relatório final do simulado deve pedir para a IA:

- analisar erros e não respondidas;
- considerar alternativas disponíveis;
- considerar observações do usuário;
- tratar "Não sei" como prioridade;
- criar revisão dos erros;
- propor exercícios semelhantes com gabarito;
- salvar histórico em `resultados_simulados/`;
- criar pasta específica `resultados-simulado-NN-data/`;
- atualizar `log_estudos_e_simulados.md` com data, horário, tempo de execução e nota.

## 9. Conferência Final Do Arquivo

Antes de entregar, confira:

```text
o HTML abre no navegador
as alternativas podem ser marcadas
o botão Não sei funciona
OBS funciona quando existir no modelo
o timer funciona
a correção funciona
o relatório final é gerado
o gabarito foi revisado questão por questão
não existem alternativas duplicadas/equivalentes
não existe texto quebrado por acentuação/encoding
as respostas corretas não são identificáveis pelo tamanho da alternativa
distribuição do gabarito está equilibrada e sem excesso de uma letra
não há repetição exata de questão antiga
Karnaugh e fórmulas estão no nível pedido
```

## 10. Regra Final

Não entregue simulado sem revisar todas as questões.

O padrão é:

```text
simulado difícil, nível de prova
revisão completa de gabarito e explicações
arquivo salvo em simulados/
```
