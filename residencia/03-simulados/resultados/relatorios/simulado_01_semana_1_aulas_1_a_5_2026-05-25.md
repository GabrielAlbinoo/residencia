# Resultado — Simulado 01 — Semana 1 — Sistemas Digitais (UFCG)

**Finalizado em:** 25/05/2026, 10:49:03  
**Nota:** 36/40 (90%)  
**Respondidas:** 39/40  
**Tempo de execução:** Não registrado

---

## Desempenho por Bloco

| Bloco | Resultado | Aproveitamento |
|---|---:|---:|
| Bloco 1 — Sistemas Numéricos, Sinal e Complemento de 2 | 9/9 | 100% |
| Bloco 2 — BCD, Gray, ASCII e Checksum | 5/7 | 71% |
| Bloco 3 — Portas Lógicas e Expressões | 6/7 | 86% |
| Bloco 4 — Álgebra Booleana e Simplificação | 7/8 | 88% |
| Bloco 5 — DeMorgan, Dualidade, NAND e NOR | 9/9 | 100% |

---

## Questões Erradas ou Não Respondidas

### Questão 12 — Binário para Gray

**Enunciado:** O código Gray correspondente ao binário `1101` é:  
**Minha resposta:** D) `1001`  
**Resposta correta:** C) `1011`  
**Explicação:** Mantenha o primeiro bit e aplique XOR entre vizinhos: `1`, `1 XOR 1 = 0`, `1 XOR 0 = 1`, `0 XOR 1 = 1`; resultado `1011`.

### Questão 15 — Limitação de checksum

**Enunciado:** Um checksum simples por soma foi calculado para os dados `4, 7, 2`, resultando em `13`. No recebimento, os dados chegam como `5, 6, 2`. O que acontece?  
**Minha resposta:** Não respondida  
**Resposta correta:** A) O checksum simples não detecta a alteração, pois a soma continua `13`.  
**Explicação:** Os dois conjuntos somam `13`. Checksum simples pode não perceber alterações que conservam a soma.

### Questão 22 — Tabela-verdade

**Enunciado:** Uma função booleana com quatro variáveis de entrada possui uma tabela-verdade com:  
**Minha resposta:** C) `8` linhas  
**Resposta correta:** A) `16` linhas  
**Explicação:** Uma tabela com `n` entradas possui `2^n` linhas; para quatro entradas, `2^4 = 16`.

### Questão 26 — Produto de somas

**Enunciado:** Simplifique: `F = (A+B)(A+B')`  
**Minha resposta:** E) `1`  
**Resposta correta:** D) `A`  
**Explicação:** `(A+B)(A+B') = A+BB' = A+0 = A`.

---

## Questões Corretas

1. Binário para decimal
2. Hexadecimal para binário
3. Decimal para binário
4. Soma sem sinal e overflow
5. Intervalo em complemento de 2
6. Número negativo em complemento de 2
7. Interpretação em complemento de 2
8. Overflow com sinal
9. Subtração em complemento de 2
10. BCD
11. BCD inválido
13. Gray para binário
14. ASCII
16. Uso do código Gray
17. NAND
18. XOR
19. Avaliação de expressão
20. NOR
21. XNOR
23. Circuito para expressão
24. Identidade e dominação
25. Fatoração e complemento
27. Simplificação booleana
28. Absorção
29. Distributiva e absorção
30. Complemento e identidade
31. Distributiva booleana
32. DeMorgan
33. DeMorgan em camadas
34. Dualidade
35. Conceito de dualidade
36. NOT somente com NAND
37. NAND–NAND
38. NOR–NOR
39. Transformação para NOR
40. Complemento de XOR / XNOR

---

## Registro de Revisão Associado

Os erros deste simulado foram adicionados ao arquivo de revisão geral:

```text
o_que_revisar.md
```
