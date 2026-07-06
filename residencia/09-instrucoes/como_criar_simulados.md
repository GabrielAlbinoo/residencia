# Instrução - Como Criar Um Simulado

Esta instrução serve para manter os próximos simulados no mesmo padrão dos simulados já produzidos para Sistemas Digitais.

## 0. Raiz Correta Do Projeto

Antes de criar, ler, salvar ou atualizar qualquer arquivo de simulado, considere esta pasta como raiz da residência:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia
```

Todos os caminhos citados nesta instrução são relativos a essa raiz. Exemplos:

```text
03-simulados/simulados-html/
03-simulados/resultados/
08-aulas/aulas-md/
09-instrucoes/
```

Não salve arquivos da residência diretamente em:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos
```

Essa pasta pai agora serve apenas para agrupar projetos, como `residencia/` e `dataprev/`.

## 1. Regra Principal De Dificuldade

Por padrão, todo simulado deve ser feito com questões em **nível de prova difícil**.

Só use questões fáceis, médias, treino guiado ou distribuição específica de dificuldade se o usuário pedir explicitamente.

Regra:

```text
se o usuário não especificar dificuldade -> criar simulado difícil, nível de prova
se o usuário especificar dificuldade -> seguir exatamente o pedido
```

Regra atualizada para os próximos simulados:

```text
simulado difícil não significa "questão longa"
simulado difícil significa "questão que um aluno preparado ainda pode errar por detalhe"
```

Quando o usuário pedir simulado geral, acumulativo, nível prova, difícil, "casca grossa", "traiçoeiro" ou não especificar dificuldade, usar o padrão **prova difícil e traiçoeira**.

Nesse padrão, o objetivo não é fazer o aluno apenas reconhecer conteúdo. O objetivo é testar:

- leitura fina do enunciado;
- escolha da regra correta entre regras parecidas;
- encadeamento de 2 a 4 etapas;
- atenção a unidade, sinal, índice, borda, estado inicial, enable, reset, carry, overflow, setup/hold e modo de endereçamento;
- capacidade de resolver sem o tópico estar óbvio.

Meta de dificuldade:

```text
aluno bem preparado deve sentir pressão
aluno que só decorou fórmula deve errar bastante
aluno forte deve acertar, mas não de forma automática
```

Evite simulados em que a maioria das questões seja resolvida em menos de 30 segundos por reconhecimento imediato.

## 2. Antes De Criar O Simulado

Leia:

```text
02-roteiros/plano_estudos_ci_inovador_sistemas_digitais_ufcg.md
03-simulados/log_estudos_e_simulados.md
05-revisoes-e-erros/o_que_revisar.md
03-simulados/resultados/
```

Quando o simulado for sobre aulas específicas, leia também os arquivos correspondentes em:

```text
08-aulas/aulas-md/
```

Use os simulados anteriores como referência de estilo, mas não copie questões antigas sem motivo.

## 2.1 Escopo Correto Do Edital

Para simulados de Sistemas Digitais, use o Anexo III do edital como escopo principal.

Conteúdos digitais que podem e devem aparecer:

- sistema binário, aritmética e conversões;
- BCD, Gray, ASCII, checksum e códigos binários;
- portas lógicas, NAND, NOR, inversor e valores `H`, `L`, `Z` e `don't care`;
- álgebra booleana, DeMorgan, dualidade, SOP, POS, mintermos e maxtermos;
- Karnaugh e síntese lógica;
- MUX, DEMUX, codificador, decodificador, comparador e blocos combinacionais;
- FSM Moore/Mealy e síntese de máquinas de estados;
- assembly, operandos, formatos, tipos de instrução, desvios, chamadas e modos de endereçamento;
- microarquitetura, controle e datapath;
- CMOS combinacional no nível digital: MOS p/n como chaves, pull-up/pull-down, nível forte/fraco;
- comportamento estático/dinâmico, potência, energia, capacitância, atraso e caminho crítico;
- glitches, hazards estáticos/dinâmicos e consenso;
- latches, flip-flops, setup, hold e propagação;
- somadores, subtrator, comparador, shifter, ULA e flags;
- contadores, registradores e registradores de deslocamento;
- ponto fixo e ponto flutuante;
- banco de registradores, ROM, SRAM, DRAM;
- PLA, PAL, PROM, CPLD, FPGA e LUT.

Conteúdos que não devem ser usados para endurecer a prova de Sistemas Digitais:

- AMS e RF;
- amplificadores operacionais;
- Thevenin, Norton, quadripolos e circuitos analógicos gerais;
- curva I/V detalhada de MOSFET;
- transcondutância;
- modelos de pequenos sinais;
- amplificadores analógicos básicos;
- microeletrônica analógica profunda.

Regra:

```text
endurecer a prova = integrar tópicos digitais do Anexo III
não endurecer a prova = puxar assunto de AMS/RF ou eletrônica analógica profunda
```

## 3. Base HTML

Use como base:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\03-simulados\simulados-html\modelo_simulado_base.html
```

Crie uma cópia com nome claro:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\03-simulados\simulados-html\simulado_NN_assunto_quantidade_questoes.html
```

Exemplo:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\03-simulados\simulados-html\simulado_04_aulas_10_a_14_nivel_prova_50_questoes.html
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

- pelo menos 70% das questões deve exigir **duas ou mais etapas** de raciocínio;
- pelo menos 30% das questões deve exigir **três ou mais etapas** ou integração entre dois assuntos;
- no máximo 15% das questões pode ser de reconhecimento direto de conceito;
- uma parte relevante das questões deve misturar assuntos próximos, sem sair do conteúdo estudado;
- incluir questões do tipo **"assinale a incorreta"**, **"qual alternativa não é verdadeira"**, **"exceto"** ou **"qual afirmação está errada"**;
- incluir questões com enunciados em que seja necessário interpretar tabela, mapa, circuito textual, sequência temporal ou especificação antes de calcular;
- evitar que a resposta seja obtida por reconhecimento imediato de fórmula;
- não transformar dificuldade em texto longo sem necessidade.

Em simulados acumulativos finais, use a seguinte distribuição mínima:

```text
10% a 15%  aquecimento inteligente, ainda com detalhe
45% a 55%  nível prova real
25% a 35%  difícil/traiçoeiro
10% a 15%  casca grossa, integrando 3+ ideias
```

Não use questões fáceis puras em simulado final, a menos que o usuário peça. Uma questão fácil pura é aquela que cobra definição isolada ou substituição direta sem interpretação.

Exemplos de questões mais realistas:

```text
Karnaugh -> expressão mínima -> implementação NAND/NOR
FSM -> tabela de próximo estado -> equações D -> saída
temporização -> setup -> Fmax -> checagem de hold
decoder/MUX/DEMUX -> índice binário -> saída/bloco correto
ponto fixo -> escala -> valor real -> resolução
ponto flutuante -> normalização -> expoente com bias
```

Exemplos de integração que devem aparecer nos simulados mais difíceis:

```text
assembly -> flags/branch -> valor final em registrador ou memória
modos de endereçamento -> offset em bytes -> load/store correto
complemento de 2 -> operação aritmética -> carry versus overflow
ULA -> operação -> flags Z/N/C/V -> interpretação do resultado
FSM -> tabela ou sequência -> equações D/T/JK -> saída Moore/Mealy
Karnaugh -> SOP/POS -> implementação NAND/NOR -> hazard/consenso
temporização -> setup/Fmax -> hold/skew -> conclusão de violação
CMOS -> rede pull-down/pull-up -> função lógica -> inversão correta
potência -> unidade -> P=alpha*C*V^2*f -> comparação entre cenários
memória/PLD -> linhas de endereço -> capacidade -> bits de configuração
```

## 6.1.1 Régua Anti-Simulado Fácil

Antes de aceitar uma questão como "difícil", aplique esta régua:

```text
se a questão testa só uma definição -> fácil demais
se basta aplicar uma fórmula direta -> fácil demais
se 3 alternativas são obviamente absurdas -> fácil demais
se o tópico aparece mastigado no enunciado sem necessidade -> fácil demais
se a correta é a única alternativa tecnicamente bem escrita -> fácil demais
se a questão não exige rascunho, tabela mental, conta ou rastreamento -> provavelmente fácil
```

Para simulado difícil, uma boa questão deve cumprir pelo menos dois critérios:

- exige rascunho;
- tem alternativas numericamente próximas;
- mistura dois tópicos;
- depende de uma condição escondida no enunciado;
- usa uma exceção ou caso-limite;
- exige rastrear estado, registrador, memória, flags ou tempo;
- tem distratores baseados em erros comuns reais;
- não revela no enunciado qual fórmula deve ser usada.

Se a questão for conceitual, ela deve cobrar distinções finas, não vocabulário solto.

Exemplo fraco:

```text
O que é setup time?
```

Exemplo melhor:

```text
Um caminho viola hold, mas não viola setup. Qual alteração abaixo resolve diretamente o problema sem depender de reduzir a frequência?
```

Exemplo fraco:

```text
BNE desvia quando os registradores são diferentes.
```

Exemplo melhor:

```text
Após uma sequência com SUB, atualização de flags e BNE, quantas vezes o laço executa e qual valor final é salvo?
```

## 6.1.2 Enunciado Sem Dica De Assunto

Em simulado acumulativo, evite enunciados que entreguem a categoria da questão quando isso não for necessário.

Evite:

```text
Em uma questão de overflow assinado...
Para aplicar DeMorgan...
Usando a fórmula de potência dinâmica...
Em uma questão de hold...
```

Prefira:

```text
Considere a soma de dois valores de 8 bits...
Considere a expressão...
Um bloco chaveia com atividade média...
Um caminho entre dois flip-flops possui...
```

O aluno deve descobrir o assunto pela estrutura do problema.

O campo interno `topic` pode continuar existindo para o relatório final, mas o texto exibido na prova não deve facilitar a identificação.

## 6.2 Alternativas Plausíveis E Erros Comuns

As alternativas erradas devem ser construídas a partir de erros prováveis do aluno, não como respostas aleatórias.

Em simulado difícil/traiçoeiro, as alternativas erradas devem parecer defensáveis para quem estudou, mas cometeu um erro específico.

Regra forte:

```text
se o aluno consegue eliminar 3 alternativas sem calcular ou raciocinar, a questão está fácil demais
```

Para questões de 5 alternativas:

- pelo menos 3 alternativas erradas devem vir de erros plausíveis;
- no máximo 1 alternativa pode ser claramente absurda, e só se houver motivo pedagógico;
- a alternativa correta não pode ser a única com linguagem técnica precisa;
- alternativas numéricas devem ficar próximas quando o erro provável for pequeno;
- alternativas conceituais devem ser parcialmente verdadeiras, mas falhar em um detalhe.

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
- confundir `byte` com `word`;
- aplicar offset de vetor como índice em vez de bytes;
- confundir branch tomado com branch não tomado;
- esquecer que `CALL/BL` salva retorno e `BR/B` não salva;
- usar `LDW` quando a operação correta é `STW`;
- inverter Moore e Mealy pela dependência da entrada;
- usar `Q` atual no lugar de `Q+`;
- tratar `Z` como 0 em vez de alta impedância;
- usar `don't care` como saída obrigatória;
- usar energia do capacitor quando a questão pede energia retirada da fonte, ou o contrário.

Em questões numéricas, pelo menos uma alternativa errada deve ser o resultado de um erro pequeno e plausível de cálculo.

Exemplo:

```text
resposta correta: 95,2 MHz
alternativa plausível: 111,1 MHz, caso o aluno esqueça o setup
alternativa plausível: 10,5 MHz, caso erre a conversão ns -> MHz
```

Em questões conceituais, use alternativas parcialmente verdadeiras, mas com um detalhe errado.

Modelo recomendado de distratores:

```text
A) erro de sinal/overflow
B) erro de unidade/conversão
C) erro de índice ou largura
D) erro conceitual fino
E) correta
```

Depois, embaralhe as alternativas e atualize o gabarito.

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
03-simulados/simulados-html/
03-simulados/resultados/
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

Além da revisão de correção, faça uma **auditoria de dificuldade**.

Classifique cada questão internamente como:

```text
F = fácil / reconhecimento direto
M = média / 1 a 2 etapas
D = difícil / 2+ etapas com detalhe
T = traiçoeira / 3+ etapas, integração ou distratores muito próximos
```

Para simulado difícil, nível prova ou acumulativo, a distribuição final deve respeitar:

```text
F <= 15%
D + T >= 60%
T >= 15%
```

Se a prova tiver 40 questões:

```text
no máximo 6 fáceis
pelo menos 24 difíceis/traiçoeiras
pelo menos 6 traiçoeiras
```

Se a prova tiver 60 questões:

```text
no máximo 9 fáceis
pelo menos 36 difíceis/traiçoeiras
pelo menos 9 traiçoeiras
```

Se a distribuição não bater, reescreva as questões fáceis antes de entregar.

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
- se há questões suficientes classificadas como difíceis/traiçoeiras;
- se alguma questão pode ser resolvida só eliminando alternativas absurdas;
- se a questão exige rascunho, rastreamento, cálculo, tabela mental ou distinção fina;
- se os tópicos do Anexo III estão integrados sem cair em AMS/RF ou eletrônica analógica profunda;
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
- salvar o relatório completo em `03-simulados/resultados/relatorios/`;
- criar a pasta específica de revisão em `03-simulados/resultados/revisoes/resultados-simulado-NN-data/`;
- atualizar `03-simulados/log_estudos_e_simulados.md` com data, horário, tempo de execução e nota.

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
arquivo salvo em C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\03-simulados\simulados-html\
```
