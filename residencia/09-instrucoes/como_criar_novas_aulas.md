# Instrução - Como Criar Uma Nova Aula

Esta instrução serve para manter as próximas aulas no mesmo padrão das aulas já produzidas para Sistemas Digitais.

## 0. Raiz Correta Do Projeto

Antes de criar, ler, salvar ou atualizar qualquer aula, considere esta pasta como raiz da residência:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia
```

Todos os caminhos citados nesta instrução são relativos a essa raiz. Exemplos:

```text
08-aulas/aulas-md/
08-aulas/aulas-pdf/
08-aulas/aulas-pdf-clean/
03-simulados/
05-revisoes-e-erros/
```

Não salve arquivos da residência diretamente em:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos
```

Essa pasta pai agora serve apenas para agrupar projetos, como `residencia/` e `dataprev/`.

## 1. Antes De Criar A Aula

Leia primeiro os arquivos de contexto:

```text
02-roteiros/plano_estudos_ci_inovador_sistemas_digitais_ufcg.md
03-simulados/log_estudos_e_simulados.md
05-revisoes-e-erros/o_que_revisar.md
```

Depois confira a pasta:

```text
08-aulas/aulas-md/
```

Use a última aula criada como referência de estilo, profundidade e organização.

A nova aula deve seguir o próximo assunto do cronograma ou, se o usuário pedir outro assunto, seguir explicitamente o assunto pedido.

Também verifique as aulas anteriores para não repetir longamente conteúdos já explicados. Se o novo assunto depender de algo anterior, faça apenas uma retomada curta e avance para o que ainda não foi explicado.

## 2. Estilo Da Aula

A aula deve ser escrita em português, com tom claro, direto e didático.

Priorize explicação passo a passo.

A estrutura deve ser detalhada, mas sem virar texto solto demais. O objetivo é que o aluno consiga estudar sozinho pelo arquivo.

Use:

- títulos claros;
- subtítulos numerados;
- tabelas quando ajudarem comparação ou rastreio;
- blocos `text` para fórmulas, sequências, diagramas simples e passos;
- Mermaid apenas quando realmente melhorar a visualização;
- exemplos completos;
- exercícios com gabarito;
- seção de erros comuns;
- seção "O que memorizar";
- plano de estudo no final;
- conexão com a próxima aula.

Evite usar LaTeX se houver risco de quebrar no PDF ou no leitor Markdown. Prefira fórmulas em Markdown simples ou blocos `text`.

## 3. Estrutura Recomendada

Use este esqueleto:

```text
# Aula Detalhada - Nome do Assunto

**Tema do dia:** ...
**Aula na sequência:** ...
**Objetivo:** ...

---

## 1. Onde Esta Aula Entra No Estudo?

# 2. Conceito Principal
# 3. Explicação Passo A Passo
# 4. Exemplos
# 5. Tabelas ou Diagramas
# 6. Como Questões Costumam Cobrar
# 7. Erros Comuns
# 8. Exercícios
# 9. Gabarito
# 10. O Que Memorizar
# 11. Plano De Estudo Para Esta Aula
# 12. Conexão Com A Próxima Aula
```

A numeração pode mudar conforme o assunto, mas essas partes devem aparecer.

## 4. Profundidade Esperada

A aula deve ser mais detalhada que um resumo.

Para cada conceito novo, tente responder:

```text
o que é?
para que serve?
como aparece em circuito?
como aparece em questão?
qual erro comum o aluno pode cometer?
como resolver um exemplo?
```

Se houver fórmula, explique antes o significado de cada termo.

Se houver tabela, explique como ler a tabela.

Se houver sequência, mostre pelo menos um rastreio passo a passo.

Não presuma que o aluno já entendeu um conceito novo só porque ele parece pequeno. Tudo que ainda não foi visto em aulas anteriores deve ficar explicado dentro da aula atual.

Quando um conceito já tiver sido estudado antes, não repita a aula inteira: faça uma ponte curta e diga como aquele conceito será usado no assunto novo.

## 5. Exercícios

Inclua exercícios de níveis variados:

- conceituais;
- aplicação direta;
- rastreio/tabela;
- questões parecidas com prova;
- uma ou duas questões mais difíceis quando fizer sentido.

Inclua gabarito direto logo depois.

Quando o assunto envolver cálculo ou sequência, o gabarito deve mostrar pelo menos o raciocínio essencial.

## 6. Padrão De Nome

O arquivo Markdown deve ser salvo com número e slug:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\08-aulas\aulas-md\NN-nome_do_assunto.md
```

Exemplo:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\08-aulas\aulas-md\14-contadores_assincronos_sincronos_divisao_frequencia.md
```

O PDF deve usar o mesmo nome base:

```text
NN-nome_do_assunto.pdf
```

## 7. PDFs

Ao terminar a aula, gere PDF formatado de verdade.

O PDF não deve ser uma impressão do Markdown cru.

Deve renderizar:

- títulos como títulos;
- tabelas como tabelas;
- blocos de código como blocos visuais;
- Mermaid como gráfico, quando existir;
- acentuação corretamente;
- conteúdo completo, sem cortar seções.

## 8. Verificação Técnica Da Aula

Depois de montar a aula, revise o conteúdo antes de salvar como concluído.

Verifique:

- se há erro conceitual;
- se exemplos e tabelas batem com a teoria;
- se fórmulas foram aplicadas corretamente;
- se exercícios e gabarito concordam;
- se não há contradição com aulas anteriores;
- se o assunto novo ficou explicado de forma suficiente;
- se não houve repetição longa de conteúdo já visto;
- se o próximo assunto indicado no final faz sentido no cronograma.

Se encontrar erro, corrija antes de gerar os PDFs.

## 9. Conferência Final

Antes de finalizar, confira:

```text
o arquivo .md existe em 08-aulas/aulas-md/
o PDF existe em 08-aulas/aulas-pdf/
o PDF existe em 08-aulas/aulas-pdf-clean/
o nome do PDF corresponde ao nome do .md
o conteúdo não foi resumido no PDF
a aula passou por revisão de erro conceitual e gabarito
```

## 10. Regra Final Obrigatória

Toda aula nova deve ser salva em três lugares:

```text
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\08-aulas\aulas-md\        -> versão .md
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\08-aulas\aulas-pdf\       -> versão .pdf formatada
C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\08-aulas\aulas-pdf-clean\ -> cópia .pdf formatada
```

Ou seja: salve uma cópia da aula em `.md` na pasta `C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\08-aulas\aulas-md` e salve cópias em `.pdf` nas pastas `C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\08-aulas\aulas-pdf` e `C:\Users\gabrieloliveira\Documents\pessoal\estudos\residencia\08-aulas\aulas-pdf-clean`.
