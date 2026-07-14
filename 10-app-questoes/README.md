# App De Questões - Revisão Por Pontos Fracos

App local para revisar questões complexas no estilo dos simulados, mas com fluxo parecido com flashcards.

## Como abrir

Abra:

```text
index.html
```

No tablet, se você for abrir o arquivo diretamente pelo gerenciador de arquivos, prefira:

```text
app-tablet-offline.html
```

Essa versão é um HTML único, com estilo, código e bancos de questões embutidos. Ela evita o problema de abrir só o `index.html` sem o `styles.css`, `app.js` e os `.txt` junto.

O app carrega um banco único combinando as questões iniciais. Na tela principal aparece apenas a questão; estatísticas, importação, OBS e exportação ficam em **Config**.

Banco inicial:

```text
bancos/sistemas_digitais_simulados_11_a_15_limpo.txt
bancos/sistemas_digitais_100_questoes_novas_extremo.txt
```

## Progresso E Pontos Fracos

Os acertos, erros, questões marcadas como "não sei" e prioridades por tema ficam salvos no navegador usando `localStorage`.

Isso significa:

- fechar e abrir no mesmo navegador mantém o progresso;
- trocar de navegador, trocar de aparelho ou limpar os dados do navegador pode apagar o progresso;
- o progresso não fica gravado dentro do arquivo `.txt`.

Use o botão **Exportar IA** na tela **Config** para copiar um relatório com os pontos fracos, questões erradas/não sei, OBS e instruções para a IA montar revisão, explicações, fórmulas, pegadinhas e novas questões.

Cada questão também tem um campo **OBS desta questão**, mas ele só aparece depois que você responde ou marca "não sei". Essas observações ficam salvas junto do progresso e aparecem em **Config**, para revisar suas próprias dúvidas e raciocínios depois.

No treino, tocar em uma alternativa apenas seleciona a resposta. O app só corrige depois de apertar **Responder**. Após responder, ele revela assunto, estatísticas da questão, explicação, OBS e o botão **Próxima**.

As questões aparecem em ordem aleatória, não sequencial. Em **Config**, o modo de pontos fracos pode ser ligado para sortear prioritariamente questões com maior histórico de erro ou "não sei".

## Formato Simples De Questões

Cada questão começa com:

```text
===
```

Dentro da questão, use marcadores:

```text
@id identificador-opcional
# categoria; outra categoria
? enunciado
- alternativa errada
* alternativa correta
> explicação
```

Você pode repetir `?` e `>` em várias linhas.

Exemplo:

```text
===
@id skew-01
# temporização; skew; setup-hold
? Um caminho entre flip-flops tem tCQmax=0,8 ns, tPDmax=6,4 ns e tsetup=0,9 ns.
? O clock chega 0,3 ns mais cedo no destino. Qual Tclk mínimo?
- 7,8 ns
* 8,4 ns
- 6,8 ns
> Setup usa Tclk >= tCQmax + tPDmax + tsetup - skew.
> Como skew = -0,3 ns, fica 0,8+6,4+0,9-(-0,3)=8,4 ns.
```

## Tabelas

Use:

```text
::tabela Título opcional
| Coluna 1; Coluna 2; Coluna 3
| 0; 0; 1
| 0; 1; 0
::fim
```

## Bloco De Código

Use:

```text
::codigo Título opcional
MOV R0, #0
SUBS R1, R1, #1
BNE loop
::fim
```

## NOT Com Barra Em Cima

Para escrever NOT com barra em cima:

```text
\bar{A}
\bar{A+B}
\overline{Q1Q0}
```

O app renderiza como uma barra sobre a expressão.

## Revisão

O app registra localmente:

- acertos e erros por questão;
- categorias mais erradas;
- questões marcadas como "não sei";
- prioridade de revisão.

Os dados ficam no navegador via `localStorage`.
