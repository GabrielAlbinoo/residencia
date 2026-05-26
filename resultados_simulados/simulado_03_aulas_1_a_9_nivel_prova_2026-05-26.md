# Resultado — Simulado 03 — Aulas 1 a 9 — Nível de Prova — Sistemas Digitais (UFCG)

**Finalizado em:** 26/05/2026, 17:13:50  
**Tempo executado:** 03:00:34  
**Nota:** 73/90 (81%)  
**Respondidas:** 84/90  
**Marcadas como não soube responder:** 5

---

## Desempenho por Bloco

| Bloco | Resultado | Aproveitamento |
|---|---:|---:|
| Bloco 1 — Parte 1 — Questões 1 a 10 | 8/10 | 80% |
| Bloco 2 — Parte 2 — Questões 11 a 20 | 7/10 | 70% |
| Bloco 3 — Parte 3 — Questões 21 a 30 | 8/10 | 80% |
| Bloco 4 — Parte 4 — Questões 31 a 40 | 7/10 | 70% |
| Bloco 5 — Parte 5 — Questões 41 a 50 | 10/10 | 100% |
| Bloco 6 — Parte 6 — Questões 51 a 60 | 8/10 | 80% |
| Bloco 7 — Parte 7 — Questões 61 a 70 | 8/10 | 80% |
| Bloco 8 — Parte 8 — Questões 71 a 80 | 10/10 | 100% |
| Bloco 9 — Parte 9 — Questões 81 a 90 | 7/10 | 70% |

---

## Questões Erradas ou Não Respondidas

### Questão 7 — Soma hexadecimal com sinal

**Enunciado:** As palavras hexadecimais `E9` e `2F` são números de 8 bits em complemento de 2. Qual é o resultado da soma?

**Alternativas:**

- A) `18`, sem overflow com sinal
- B) `18`, com overflow com sinal
- C) `D8`, sem overflow
- D) `118`, armazenado integralmente em 8 bits

**Minha resposta:** B) `18`, com overflow com sinal  
**Minha observação:** A melhor forma seria converter em binário e fazer a soma? O overflow acontece quando tem mais bits que 8? Overflow e carry são a mesma coisa?  
**Resposta correta:** A) `18`, sem overflow com sinal  
**Explicação do simulado:** `E9` representa `-23` e `2F` representa `+47`. A soma é `+24`, isto é, `18` hexadecimal, sem overflow.

### Questão 9 — Extensão de sinal

**Enunciado:** Uma palavra de 6 bits em complemento de 2 é `101101`. Qual é sua extensão correta para 8 bits e seu valor decimal?

**Alternativas:**

- A) `00101101`, `+45`
- B) `11101101`, `-19`
- C) `10110100`, `-12`
- D) `11101101`, `-45`

**Minha resposta:** A) `00101101`, `+45`  
**Minha observação:** Como fazer essa extensão corretamente? Só adicionar zeros ao final?  
**Resposta correta:** B) `11101101`, `-19`  
**Explicação do simulado:** Como o bit de sinal é `1`, ele é replicado: `101101 → 11101101`. A magnitude negativa é `19`.

### Questão 17 — Sequência ASCII

**Enunciado:** Quais bytes hexadecimais codificam a sequência de caracteres ASCII `A9`?

**Alternativas:**

- A) `41 39`
- B) `41 09`
- C) `65 57`
- D) `0A 09`

**Minha resposta:** Não respondida por não saber como resolver; marcada conscientemente para revisão.  
**Resposta correta:** A) `41 39`  
**Explicação do simulado:** Em ASCII, `'A'=0x41` e `'9'=0x39`. O caractere `9` não é o valor binário `9`.

### Questão 18 — Checksum módulo 256

**Enunciado:** Um checksum aditivo de 8 bits conserva apenas os 8 bits menos significativos da soma. Para os bytes `F2`, `38` e `A7`, qual checksum é obtido?

**Alternativas:**

- A) `71`
- B) `C1`
- C) `D0`
- D) `D1`

**Minha resposta:** Não respondida por não saber como resolver; marcada conscientemente para revisão.  
**Resposta correta:** D) `D1`  
**Explicação do simulado:** A soma é `0xF2+0x38+0xA7=0x1D1`. Mantendo oito bits, o checksum é `0xD1`.

### Questão 19 — Limitação de checksum

**Enunciado:** Um checksum simples é a soma dos bytes módulo 256. Qual alteração pode não ser detectada por esse checksum?

**Alternativas:**

- A) Trocar `[15, 83]` por `[16, 82]`
- B) Trocar `[15, 83]` por `[16, 83]`
- C) Trocar `[15, 83]` por `[15, 84]`
- D) Acrescentar um byte `01` sem remover nenhum byte

**Minha resposta:** Não respondida por não saber como resolver; marcada conscientemente para revisão.  
**Minha observação:** Devo revisar checksum.  
**Resposta correta:** A) Trocar `[15, 83]` por `[16, 82]`  
**Explicação do simulado:** Na alternativa A, um byte aumenta em `1` e o outro diminui em `1`; a soma permanece a mesma.

### Questão 25 — Identificação por tabela-verdade

**Enunciado:** A tabela mostra uma função de três entradas. Qual porta ou operação a representa?

| A | B | C | F |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 |

**Alternativas:**

- A) XOR de três entradas
- B) XNOR de três entradas
- C) AND de três entradas
- D) NOR de três entradas

**Minha resposta:** Não respondida por não saber como resolver; marcada conscientemente para revisão.  
**Minha observação:** Como fazer XOR e XNOR em três camadas? Sei que não é AND nem NOR, mas não sei se é XOR ou XNOR.  
**Resposta correta:** B) XNOR de três entradas  
**Explicação do simulado:** A saída vale `1` quando o número de entradas iguais a `1` é par: é o complemento da paridade XOR.

### Questão 30 — Rede NAND NOR

**Enunciado:** A expressão `F=(A NAND B) NOR (A NOR B)` equivale a:

**Alternativas:**

- A) `A+B`
- B) `A XOR B`
- C) `AB`
- D) `(A+B)'`

**Minha resposta:** A) `A+B`  
**Resposta correta:** C) `AB`  
**Explicação do simulado:** A saída é `[(AB)' + (A+B)']'=AB(A+B)=AB`.

### Questão 32 — Simplificação de quatro mintermos

**Enunciado:** Simplifique `A'BC + ABC + AB'C + ABC'`.

**Alternativas:**

- A) `A+B+C`
- B) `AB+AC+BC`
- C) `ABC`
- D) `A'B+AC`

**Minha resposta:** Não respondida por não saber como resolver; marcada conscientemente para revisão.  
**Minha observação:** Travei em `AB + C(A'B+AB')`. Provavelmente seria `AB+AC+BC`, mas não entendi como continuar.  
**Resposta correta:** B) `AB+AC+BC`  
**Explicação do simulado:** A função vale `1` quando pelo menos duas variáveis são `1`, cuja forma mínima é `AB+AC+BC`.

### Questão 34 — Distributiva em POS

**Enunciado:** Simplifique `(A+B+C)(A+B+C')(A+B'+C)`.

**Alternativas:**

- A) `A+B+C`
- B) `A+BC`
- C) `AB+C`
- D) `A+BC'`

**Minha resposta:** Não respondida.  
**Resposta correta:** B) `A+BC`  
**Explicação do simulado:** Os dois primeiros fatores resultam em `A+B`. Então `(A+B)(A+B'+C)=A+B(B'+C)=A+BC`.

### Questão 37 — Consenso em produto de somas

**Enunciado:** Simplifique `(A+B)(A'+C)(B+C)` removendo o fator redundante.

**Alternativas:**

- A) `(A+B)(A'+C)`
- B) `(A+B)(B+C)`
- C) `(A'+C)(B+C)`
- D) `A+B+C`

**Minha resposta:** B) `(A+B)(B+C)`  
**Resposta correta:** A) `(A+B)(A'+C)`  
**Explicação do simulado:** Na forma POS, `(B+C)` é o fator de consenso e pode ser removido.

### Questão 51 — Contenção em barramento tri-state

**Enunciado:** Dois buffers tri-state ativos em nível alto dirigem o mesmo barramento. O primeiro está habilitado com dado `1`; o segundo está habilitado com dado `0`. Qual interpretação é correta?

**Alternativas:**

- A) O barramento assume `Z`.
- B) O barramento assume necessariamente `1`.
- C) Há contenção: o valor lógico não é uma operação booleana válida e pode causar problema elétrico.
- D) O barramento executa automaticamente XOR e assume `1`.

**Minha resposta:** A) O barramento assume `Z`.  
**Resposta correta:** C) Há contenção.  
**Explicação do simulado:** Alta impedância ocorre quando o driver está desabilitado. Dois drivers habilitados com valores opostos entram em conflito.

### Questão 53 — Maxtermo de quatro variáveis

**Enunciado:** Qual maxtermo `M10` zera exatamente na combinação `ABCD=1010`?

**Alternativas:**

- A) `A+B'+C+D'`
- B) `A'BC'D`
- C) `A'+B+C'+D`
- D) `A'B+CD'`

**Minha resposta:** B) `A'BC'D`  
**Resposta correta:** C) `A'+B+C'+D`  
**Explicação do simulado:** Em um maxtermo, a variável aparece negada quando a linha possui bit `1` e direta quando possui bit `0`: `A'+B+C'+D`.

### Questão 62 — POS em mapa de três variáveis

**Enunciado:** Agrupando os zeros do mapa, qual é a expressão mínima em POS?

```text
Linhas: A; colunas: BC
       00  01  11  10
A=0     0   1   1   0
A=1     1   0   0   1
```

**Alternativas:**

- A) `(A+C)(A'+C')`
- B) `A'C+AC'`
- C) `(A+C')(A'+C)`
- D) `B+C`

**Minha resposta:** B) `A'C+AC'`  
**Resposta correta:** A) `(A+C)(A'+C')`  
**Explicação do simulado:** Os zeros `m0/m2` produzem `(A+C)`; os zeros `m5/m7` produzem `(A'+C')`.

### Questão 66 — Minimização de expressão por mapa

**Enunciado:** Ao colocar `F=A'B+B'C+AC` em um mapa de três variáveis, qual redução mínima é obtida?

**Alternativas:**

- A) `A+B+C`
- B) `AB+C'`
- C) `C+A'B`
- D) `A'C+B'C'`

**Minha resposta:** B) `AB+C'`  
**Minha observação:** Resolvi fazendo a tabela-verdade e depois o mapa de Karnaugh; é a forma correta ou teria uma mais eficiente?  
**Resposta correta:** C) `C+A'B`  
**Explicação do simulado:** Os quatro mintermos com `C=1` formam um quarteto, gerando `C`; resta o par correspondente a `A'B`.

### Questão 81 — Síntese NAND-NAND por mapa

**Enunciado:** A função fornecida deve ser implementada em dois níveis NAND-NAND, supondo literais complementados disponíveis. Qual rede realiza a função mínima?

```text
Linhas: A; colunas: BC
       00  01  11  10
A=0     0   1   1   0
A=1     1   0   0   1
```

**Alternativas:**

- A) `[(A'C)'(AC')']'`
- B) `[(A'+C)'(A+C')']'`
- C) `[(A'C)+(AC')]'`
- D) `(A'C)' + (AC')'`

**Minha resposta:** B) `[(A'+C)'(A+C')']'`  
**Resposta correta:** A) `[(A'C)'(AC')']'`  
**Explicação do simulado:** O mapa produz `F=A'C+AC'`. Em NAND-NAND, os produtos são negados na primeira camada e somados pela NAND final.

### Questão 83 — Da especificação ao NOR

**Enunciado:** Uma função de quatro variáveis é dada por `F=ΠM(0,2,8,10)`. Qual expressão mínima e uma implementação somente com NOR para ela?

**Alternativas:**

- A) `F=B'D'`; `(B NOR D) NOR (B NOR D)`
- B) `F=B+D`; `(B NOR D) NOR (B NOR D)`
- C) `F=B+D`; `B NOR D`
- D) `F=(B+D)'`; `(B NOR D) NOR (B NOR D)`

**Minha resposta:** A) `F=B'D'`; `(B NOR D) NOR (B NOR D)`  
**Resposta correta:** B) `F=B+D`; `(B NOR D) NOR (B NOR D)`  
**Explicação do simulado:** Os zeros ocorrem quando `B=0` e `D=0`, portanto `F=B+D`. Uma NOR seguida de inversão por NOR implementa OR.

### Questão 84 — Síntese com don't care

**Enunciado:** Considere `F(A,B,C)=Σm(0,2,5,7)+d(1,3)`. Se `C'` estiver disponível, qual implementação mínima com NAND é válida?

**Alternativas:**

- A) Uma NAND com entradas `A` e `C'`, produzindo `(AC')'=A'+C`
- B) Uma NAND com entradas `A'` e `C`, produzindo `A+C'`
- C) Uma NAND com entradas `B` e `C`, produzindo `B'+C'`
- D) Uma AND com entradas `A` e `C'`, produzindo `AC'`

**Minha resposta:** B) Uma NAND com entradas `A'` e `C`, produzindo `A+C'`  
**Resposta correta:** A) Uma NAND com entradas `A` e `C'`, produzindo `(AC')'=A'+C`  
**Explicação do simulado:** Usando os indiferentes, o mapa reduz para `F=A'+C`. Por DeMorgan, `A'+C=(AC')'`, uma NAND.

---

## Questões Corretas

1 (Soma sem sinal e carry), 2 (Overflow em complemento de 2), 3 (Subtração em complemento de 2), 4 (Representação negativa), 5 (Interpretação com e sem sinal), 6 (Intervalo em complemento de 2), 8 (Overflow em subtração), 10 (Ordenação signed versus unsigned), 11 (Adição em BCD), 12 (Adição BCD com propagação de carry), 13 (Conversão binário para Gray), 14 (Conversão Gray para binário), 15 (Uso do código Gray), 16 (Operação com dígitos ASCII), 20 (BCD e Gray do mesmo valor), 21 (Avaliação de rede lógica), 22 (Equivalência por portas), 23 (Reconhecimento de XOR), 24 (Paridade com XOR e XNOR), 26 (Cadeia XNOR XOR), 27 (Portas como inversores), 28 (Comparação por portas lógicas), 29 (Rede com negações agrupadas), 31 (Produto de somas e absorção), 33 (Absorção sucessiva), 35 (Combinação SOP e POS), 36 (Teorema do consenso), 38 (Fatoração e absorção), 39 (Produto com termos complementares), 40 (Simplificação completa), 41 (DeMorgan em níveis), 42 (Dualidade de identidade), 43 (Implementação NAND NAND), 44 (Implementação NOR NOR), 45 (Rede NAND multinível), 46 (Rede NOR multinível), 47 (DeMorgan com produtos internos), 48 (Leitura de rede NAND), 49 (Dual dos teoremas de DeMorgan), 50 (XOR somente com NAND), 52 (Notação sigma por tabela), 54 (Relação entre Pi e Sigma), 55 (Expansão para forma canônica), 56 (Enable ativo baixo em tri-state), 57 (POS canônica expandida), 58 (Interpretação de don't care), 59 (Minimização com don't care), 60 (Avaliação de Pi maxtermos), 61 (Mapa de três variáveis com três implicantes), 63 (Agrupamento principal e termo restante), 64 (Grupo de quatro e borda), 65 (Validade de agrupamento), 67 (Leitura de zeros no mapa), 68 (Mapa de duas variáveis diagonal), 69 (Sobreposição em mapa de três variáveis), 70 (Uso útil de sobreposição), 71 (Quarteto nos cantos), 72 (Cantos agrupados em POS), 73 (Padrão alternado em quatro variáveis), 74 (Oitava com don't care), 75 (Cobertura por oitava e quarteto), 76 (Função XNOR em mapa maior), 77 (POS com grupo de zeros interno), 78 (Don't care ampliando grupo), 79 (Don't care completando oitava), 80 (Minimização POS em quatro variáveis), 82 (Síntese NOR NOR direta), 85 (Síntese sem literais complementados), 86 (Reconhecimento de circuito universal), 87 (POS para portas NOR), 88 (Escolha SOP ou POS para síntese), 89 (OR usando apenas NAND), 90 (Circuito final somente NAND).

---

## Observações em Questões Corretas

- **Questão 1 — Soma sem sinal e carry:** Qual a diferença entre carry e estouro/overflow?
- **Questão 5 — Interpretação com e sem sinal:** Nos números negativos, o bit mais à direita também determina se é par quando vale `0`?
- **Questão 12 — Adição BCD com propagação de carry:** Converter para decimal, somar e reconverter em BCD é válido? Como somar diretamente em BCD?
- **Questão 13 — Conversão binário para Gray:** Como organizar os bits na conversão quando as respostas estão agrupadas em conjuntos de quatro?
- **Questão 24 — Paridade com XOR e XNOR:** Há uma forma mais rápida que testar combinações?
- **Questão 29 — Rede com negações agrupadas:** Substituir `(A+B)'` por `A'B'`, aplicar idempotência e negar com DeMorgan está correto?
- **Questão 33 — Absorção sucessiva:** Como aplicar a identidade que simplifica termos com variável e complemento?

---

## Arquivos de Correção

- Revisão detalhada e exercícios: `resultados-simulado-03-2026-05-26/revisao_erros.md`
- Registro histórico atualizado: `log_estudos_e_simulados.md`

---

## Pedido de Revisão Executado

- Analisar os erros e questões não respondidas considerando alternativas e observações.
- Explicar cada conceito, resolver passo a passo e propor dois exercícios com gabarito.
- Priorizar questões marcadas como "não soube responder".
- Arquivar o relatório em `resultados_simulados`.
- Criar a revisão em `resultados-simulado-03-2026-05-26`.
- Atualizar `log_estudos_e_simulados.md` sem alterar registros anteriores.
