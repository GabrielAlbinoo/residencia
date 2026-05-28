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

## 7. Revisão Obrigatória Antes De Entregar

Depois de terminar o simulado, revise **todas as questões**.

Essa revisão é obrigatória.

Verifique questão por questão:

- se o enunciado está claro;
- se não há mais de uma alternativa correta;
- se a resposta marcada no gabarito é realmente correta;
- se a explicação corresponde à resposta correta;
- se as alternativas erradas são plausíveis, mas realmente erradas;
- se tabelas e dados apresentados batem com o enunciado;
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
```

## 10. Regra Final

Não entregue simulado sem revisar todas as questões.

O padrão é:

```text
simulado difícil, nível de prova
revisão completa de gabarito e explicações
arquivo salvo em simulados/
```
