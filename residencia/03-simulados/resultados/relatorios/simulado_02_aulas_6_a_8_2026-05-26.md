# Resultado — Simulado 02 — Aulas 6 a 8 — Sistemas Digitais (UFCG)

**Finalizado em:** 26/05/2026, 10:37:35  
**Tempo executado:** 00:29:51  
**Nota:** 27/30 (90%)  
**Respondidas:** 29/30  
**Marcadas como não soube responder:** 1

---

## Desempenho por Bloco

| Bloco | Resultado | Aproveitamento |
|---|---:|---:|
| Bloco 1 — Parte 1 — Questões 1 a 10 | 10/10 | 100% |
| Bloco 2 — Parte 2 — Questões 11 a 20 | 8/10 | 80% |
| Bloco 3 — Parte 3 — Questões 21 a 30 | 9/10 | 90% |

---

## Questões Erradas ou Não Respondidas

### Questão 16 — POS em mapa de Karnaugh

**Enunciado:** Agrupando os zeros do mapa para obter POS, qual é a expressão mínima da função?

**Material apresentado:**

```text
Linhas: A; colunas: BC
      00  01  11  10
A=0    0   1   1   0
A=1    0   1   1   0
```

**Alternativas disponíveis:**

- A) `C'`
- B) `C`
- C) `B+C`
- D) `(A+C)(A'+C)`

**Minha resposta:** A) `C'`  
**Resposta correta:** B) `C`  
**Explicação do simulado:** Os zeros formam um quarteto nas colunas onde `C=0`. Na leitura POS, constante `0` aparece direta: o termo é `(C)`, ou simplesmente `F=C`.

### Questão 18 — Função com único zero

**Enunciado:** Qual é a expressão mínima de `F(A,B,C)=Σm(1,2,3,4,5,6,7)`?

**Alternativas disponíveis:**

- A) `A+B+C`
- B) `A'B'C'`
- C) `A+B+C'`
- D) `AB+AC+BC`

**Minha resposta:** Não respondida por não saber como resolver; marcada conscientemente para revisão.  
**Motivo declarado:** Deixei em branco porque não sabia como resolver; preciso aprender este procedimento.  
**Resposta correta:** A) `A+B+C`  
**Explicação do simulado:** A função vale `0` somente em `000`. A expressão `A+B+C` vale `0` apenas nessa combinação e `1` em todas as outras.

### Questão 25 — Oitava pelas colunas laterais

**Enunciado:** Qual é a expressão mínima de `F(A,B,C,D)=Σm(0,2,4,6,8,10,12,14)`?

**Alternativas disponíveis:**

- A) `B'`
- B) `C'`
- C) `D'`
- D) `A'`

**Minha resposta:** A) `B'`  
**Resposta correta:** C) `D'`  
**Explicação do simulado:** A oitava ocupa as colunas `CD=00` e `CD=10`, ligadas pelas bordas. Apenas `D=0` é constante: `F=D'`.

---

## Questões Corretas

1. Valores lógicos — alta impedância
2. Mintermo
3. Tabela-verdade
4. Maxtermo
5. SOP e POS canônicas
6. Tabela para notação sigma
7. POS canônica expandida
8. Função com `don't care`
9. Forma canônica com `don't care`
10. Mintermo e maxtermo em quatro variáveis
11. Ordem Gray em mapa de três variáveis
12. Tamanho de agrupamentos
13. Adjacência pelas laterais
14. Quarteto em mapa de três variáveis
15. Agrupamento pelas bordas
17. Sobreposição em mapa de três variáveis
19. Grupos inválidos e sobreposição
20. Tabela para minimização em três variáveis
21. Tamanho do mapa de quatro variáveis
22. Localização de mintermo em mapa de quatro variáveis
23. Quarteto nos cantos
24. Oitava pela borda superior e inferior
26. Uso de `don't care`
27. `Don't care` em BCD
28. Oitava com `don't care`
29. Dois quartetos em mapa de quatro variáveis
30. Agrupamento com `don't care` e sobreposição

---

## Observação Registrada em Questão Correta

### Questão 17 — Sobreposição em mapa de três variáveis

**Observação:** Nesse caso seria melhor fazer o grupo de 4 na linha `A'` no lugar de um grupo de 2? Há o grupo de 4 que vira `B` e o grupo menor de 2 ficaria `A'B'`, mas eu também poderia fazer a linha completa de `A'`, que tem 4 elementos; não tem problema?

Essa observação foi respondida em:

```text
/03-simulados/resultados/revisoes/resultados-simulado-02-2026-05-26/revisao_erros.md
```

---

## Pedido para Revisão com IA

Analisar os erros e questões não respondidas, considerando alternativas e observações registradas; explicar cada conceito, resolver passo a passo e propor dois exercícios semelhantes com gabarito.

Arquivos solicitados e executados:

```text
/03-simulados/resultados/relatorios/simulado_02_aulas_6_a_8_2026-05-26.md
/03-simulados/resultados/revisoes/resultados-simulado-02-2026-05-26/revisao_erros.md
/03-simulados/log_estudos_e_simulados.md
```
