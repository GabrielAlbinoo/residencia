# App De Questões - Revisão Por Pontos Fracos

App local para revisar questões complexas no estilo dos simulados, mas com fluxo parecido com flashcards.

## Como abrir

Abra:

```text
index.html
```

O app já tem bancos iniciais nos botões **Banco SD** e **100 novas**. Também funciona com arquivos `.txt` importados pelo botão **Importar TXT**.

Banco inicial:

```text
bancos/sistemas_digitais_simulados_11_a_15_limpo.txt
bancos/sistemas_digitais_100_questoes_novas_extremo.txt
```

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
