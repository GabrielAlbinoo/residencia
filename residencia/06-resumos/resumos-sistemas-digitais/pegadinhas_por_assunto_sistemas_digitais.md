# Pegadinhas por assunto - Sistemas Digitais

Atualizado em: 02/07/2026

Objetivo: listar pegadinhas prováveis de prova objetiva em Sistemas Digitais, separadas por assunto. Use este arquivo para revisar antes de simulados e para corrigir erro de alternativa.

Como usar:

```text
1. Leia um bloco.
2. Cubra a explicação.
3. Tente dizer qual é a armadilha.
4. Se errar ou hesitar, marque para revisar.
5. Depois resolva questões daquele tema.
```

Regra geral de prova:

```text
alternativa errada normalmente troca:
0 por 1
SOP por POS
signed por unsigned
setup por hold
dinâmico por estático
memória por registrador
controle por datapath
label por branch
```

---

# 1. Binário, bases, sinal e complemento de 2

- Confundir valor binário sem sinal com valor em complemento de 2.
- Achar que `1111` sempre é `15`; em 4 bits com sinal, é `-1`.
- Achar que MSB `1` significa erro; em complemento de 2 significa número negativo.
- Esquecer que a largura de bits muda o valor representável.
- Calcular `-X` invertendo bits, mas esquecer de somar `1`.
- Somar `1` antes de inverter no complemento de 2.
- Achar que complemento de 1 e complemento de 2 são a mesma coisa.
- Esquecer que complemento de 1 tem dois zeros; complemento de 2 tem um zero só.
- Achar que o menor negativo tem positivo correspondente na mesma largura.
- Exemplo: em 4 bits, `-8` existe, mas `+8` não.
- Confundir carry-out com overflow assinado.
- Em unsigned, carry-out pode indicar estouro.
- Em signed, overflow depende dos sinais dos operandos e do resultado.
- Achar que overflow assinado ocorre sempre que há carry final.
- Não descartar bits excedentes em aritmética de largura fixa.
- Converter fração decimal para binário como se toda fração terminasse.
- Esquecer que `0,1_10` não tem representação binária finita.
- Confundir peso fracionário: depois da vírgula é `1/2, 1/4, 1/8...`, não `2, 4, 8`.
- Confundir hexadecimal com decimal.
- Esquecer que 1 dígito hexadecimal equivale a 4 bits.
- Comparar números signed e unsigned como se fossem a mesma interpretação.
- Achar que o bit mais à esquerda sempre é só "mais um bit"; em signed ele também carrega sinal.
- Esquecer extensão de sinal: ao aumentar largura signed, replica o MSB.
- Fazer extensão com zero em número negativo signed.
- Fazer extensão de sinal em número unsigned.

Frases perigosas:

```text
"carry final é overflow" → depende; em signed geralmente não.
"MSB 1 significa inválido" → falso.
"complemento de 2 é só inverter" → falta somar 1.
```

---

# 2. BCD, Gray, ASCII, paridade e checksum

- Achar que BCD é binário puro.
- `59` em BCD é `0101 1001`, não o binário puro de 59.
- Tratar `1010` a `1111` como dígitos BCD válidos.
- Esquecer que cada dígito decimal em BCD 8421 usa 4 bits.
- Somar BCD e não corrigir quando passa de 9.
- Achar que a correção `+6` é uma conversão arbitrária; ela ajusta o resultado para um dígito BCD válido.
- Usar BCD para fazer conta binária comum sem observar dígitos.
- Converter Gray diretamente para decimal como se fosse binário.
- Achar que Gray foi feito para aritmética.
- Esquecer que Gray muda apenas 1 bit entre valores consecutivos.
- Inverter as regras:
  - binário para Gray: primeiro bit igual, depois XOR de vizinhos;
  - Gray para binário: primeiro bit igual, depois XOR acumulado.
- Achar que ASCII padrão tem 8 bits; ASCII padrão/original tem 7 bits.
- Confundir armazenamento em byte com ASCII padrão.
- Achar que caractere `'5'` é igual ao número 5.
- Confundir código ASCII de `'A'` com o valor numérico 65 sem contexto.
- Achar que paridade detecta todo erro.
- Paridade simples não detecta número par de inversões.
- Achar que checksum simples é prova de ausência de erro.
- Checksum pode falhar se alterações preservarem a soma.
- Confundir checksum com CRC; CRC é mais robusto, mas não é a mesma coisa.
- Achar que Gray e BCD são "bases numéricas"; são códigos.

Frases perigosas:

```text
"BCD é só escrever o número em binário" → falso.
"Gray facilita soma" → falso.
"ASCII sempre usa 8 bits" → cuidado: padrão é 7 bits.
"paridade detecta qualquer erro" → falso.
```

---

# 3. Portas lógicas e operações booleanas

- Confundir XOR com OR.
- XOR é `1` quando as entradas são diferentes.
- OR é `1` quando pelo menos uma entrada é `1`.
- XNOR é `1` quando as entradas são iguais.
- Esquecer precedência: NOT antes de AND, AND antes de OR.
- Ler `A + B.C` como `(A+B).C`; o correto é `A + (B.C)`.
- Confundir NAND com AND.
- Confundir NOR com OR.
- Achar que NAND/NOR não são suficientes para implementar qualquer função.
- Esquecer que inversor pode ser feito com NAND ou NOR usando entradas juntas.
- Errar bolha no desenho: bolha significa inversão.
- Achar que porta com muitas entradas tem mesmo atraso/custo de porta de 2 entradas.
- Trocar símbolo gráfico de XOR por OR.
- Esquecer que NOT de uma variável isolada não é o mesmo que NOT de um bloco.
- Achar que `A.B + A.C` é o mesmo que `A.(B+C)` sem reconhecer fatoração.

Frases perigosas:

```text
"XOR é OR com outro nome" → falso.
"NAND só faz AND negado, então não é universal" → falso.
"A + B.C é avaliado da esquerda para direita" → falso.
```

---

# 4. Álgebra booleana

- Aplicar álgebra comum em expressão booleana.
- Achar que `A + A = 2A`; em álgebra booleana, `A + A = A`.
- Achar que `A.A = A²`; em booleana, `A.A = A`.
- Esquecer complemento: `A + A' = 1`, `A.A' = 0`.
- Trocar dominação:
  - `A + 1 = 1`;
  - `A.0 = 0`.
- Errar absorção:
  - `A + A.B = A`;
  - `A.(A+B) = A`.
- Achar que uma expressão maior é sempre errada; às vezes termo redundante remove hazard.
- Confundir simplificação lógica com implementação física livre de glitch.
- Remover termo de consenso quando a questão pergunta sobre hazard.
- Esquecer que simplificação precisa preservar todos os casos obrigatórios.
- Usar `don't care` como se fosse sempre `1`.
- Não verificar se o complemento está em uma variável ou no bloco inteiro.

Frases perigosas:

```text
"termo redundante nunca serve" → falso; pode remover hazard.
"A + A = 2A" → falso.
"A + A' = A" → falso.
```

---

# 5. DeMorgan, dualidade, NAND e NOR

- Aplicar DeMorgan em só uma parte da expressão.
- Esquecer que negar bloco troca AND por OR e OR por AND.
- Errar: `(A+B)' = A'.B'`.
- Errar: `(A.B)' = A' + B'`.
- Escrever `(A+B')' = A'.B'`; o correto é `A'.B`.
- Confundir dual com complemento.
- Dual troca `+` por `.` e `0` por `1`, mas não complementa todas as variáveis.
- Achar que dual de uma expressão é sempre equivalente à original.
- Usar NAND-NAND diretamente sobre POS.
- Usar NOR-NOR diretamente sobre SOP.
- Esquecer inversores necessários em literais negados.
- Empurrar bolhas sem trocar a operação.
- Esquecer que NAND combina naturalmente com SOP e NOR combina naturalmente com POS.
- Achar que implementar com NAND/NOR sempre reduz número de portas sem analisar inversões.

Frases perigosas:

```text
"dual é a mesma coisa que negação" → falso.
"NAND-NAND combina com POS" → falso; combina naturalmente com SOP.
"NOR-NOR combina com SOP" → falso; combina naturalmente com POS.
```

---

# 6. H, L, Z, don't care, formas canônicas, mintermos e maxtermos

- Confundir `H/L` com `1/0` sem observar tecnologia ou lógica ativa baixa.
- `H` é nível alto físico; `1` é valor lógico abstrato.
- Confundir `Z` com `0`.
- `Z` é alta impedância, saída desconectada logicamente.
- Confundir `Z` com `don't care`.
- `don't care` pode ser usado para simplificar; `Z` é estado elétrico de saída.
- Achar que `X` sempre significa `don't care`; em alguns contextos pode ser desconhecido.
- Ativo baixo não significa desligado; significa que o sinal faz efeito em `0`.
- Esquecer bolha/barra/sufixo `_n` em sinal ativo baixo.
- Em barramento, achar que vários dispositivos podem dirigir ao mesmo tempo.
- Dois drivers com valores diferentes no barramento causam contenção.
- Mintermo é para linha em que `F=1`.
- Maxtermo é para linha em que `F=0`.
- No mintermo, bit `1` vira variável normal e bit `0` vira variável complementada.
- No maxtermo, bit `0` vira variável normal e bit `1` vira variável complementada.
- Confundir `Σm(...)` com POS.
- Confundir `ΠM(...)` com SOP.
- Esquecer que forma canônica usa todas as variáveis.
- Achar que forma canônica já é mínima.

Frases perigosas:

```text
"Z é igual a 0" → falso.
"don't care é obrigatório virar 1" → falso.
"mintermo representa zero da função" → falso.
```

---

# 7. Karnaugh 2, 3 e 4 variáveis

- Escrever mapa em ordem binária comum em vez de Gray.
- Esquecer que no mapa de Karnaugh células adjacentes diferem em apenas 1 variável.
- Achar que diagonal é adjacente.
- Esquecer que bordas se conectam.
- Esquecer que cantos podem formar grupo.
- Fazer grupo com tamanho que não é potência de 2.
- Fazer grupo não retangular.
- Criar grupo que cobre `0` em SOP.
- Criar grupo que cobre `1` em POS.
- Não fazer os maiores grupos possíveis.
- Não sobrepor grupos quando isso reduz expressão.
- Cobrir todos os `1s` em SOP, mas esquecer um `1` isolado.
- Cobrir todos os `0s` em POS, mas esquecer um `0` isolado.
- Usar `don't care` que não ajuda.
- Achar que todo `X` precisa ser usado.
- Achar que todo `X` precisa virar `1`.
- Ler grupo de `0` como se fosse grupo de `1`.
- Errar regra:
  - variável que muda desaparece;
  - variável fixa permanece.
- Em grupo POS, inverter a regra de leitura dos zeros.
- Não conferir a expressão final com a tabela original.
- Confundir implicante essencial com qualquer grupo grande.
- Escolher expressão mínima em número de termos, mas com mais literais, sem comparar direito.

Frases perigosas:

```text
"diagonal conta" → falso.
"todo don't care deve ser usado" → falso.
"Karnaugh usa ordem binária comum" → falso.
```

---

# 8. Síntese lógica e implementação com portas

- Sair direto para circuito canônico quando a questão pede mínimo.
- Minimizar por SOP e desenhar POS.
- Minimizar por POS e desenhar SOP.
- Esquecer inversores para literais complementados.
- Trocar AND-OR por OR-AND.
- Usar decoder sem perceber que cada saída representa um mintermo.
- Usar MUX sem escolher corretamente os seletores.
- Em MUX, ligar entrada a `0`, `1`, variável ou complemento errado.
- Esquecer que ativo baixo muda a forma de combinar saídas.
- Não conferir se a implementação final tem a mesma tabela verdade.
- Achar que qualquer expressão equivalente tem o mesmo hazard.
- Achar que circuito mínimo em portas é sempre o melhor em atraso.
- Em questão de NAND/NOR, esquecer dupla negação.
- Em questão de desenho, confundir bolha de entrada com bolha de saída.

Frases perigosas:

```text
"expressão mínima sempre é livre de hazard" → falso.
"decoder sempre tem saída ativa alta" → falso.
"MUX só serve para selecionar dados, não função lógica" → falso.
```

---

# 9. MUX, DEMUX, decoder, encoder e comparador

- Confundir MUX com DEMUX.
- MUX: muitas entradas, uma saída.
- DEMUX: uma entrada, muitas saídas.
- Confundir decoder com encoder.
- Decoder: código de entrada ativa uma saída.
- Encoder: entrada ativa vira código.
- Achar que encoder simples lida bem com várias entradas ativas.
- Esquecer priority encoder.
- Esquecer sinal `valid` em encoder.
- Errar quantidade de seletores: `2^n` entradas precisam de `n` seletores.
- Achar que decoder `n` para `2^n` sempre usa todas as saídas em um problema.
- Esquecer enable.
- Esquecer que decoder ativo baixo inverte a interpretação.
- Comparador `A=B` usa XNOR bit a bit e AND final.
- Comparação `A>B` começa pelo MSB.
- Comparar signed como se fosse unsigned.
- Achar que subtração para comparar signed e unsigned segue a mesma regra sem olhar flags.
- Em MUX implementando função, escolher seletores ruins e depois errar entradas de dados.
- Em DEMUX, confundir seleção da saída com valor da saída.

Frases perigosas:

```text
"encoder simples resolve várias entradas ativas" → falso.
"comparador de igualdade usa XOR" → cuidado; igualdade usa XNOR.
"MUX 8:1 precisa de 8 seletores" → falso; precisa de 3.
```

---

# 10. FSM Moore e Mealy

- Confundir estado com entrada.
- Confundir estado atual com próximo estado.
- Achar que FSM combinacional existe sem memória.
- Em Moore, saída depende só do estado.
- Em Mealy, saída depende do estado e da entrada.
- Achar que Moore e Mealy sempre têm mesmo número de estados.
- Esquecer que Mealy pode responder no mesmo ciclo.
- Esquecer que Moore pode responder um ciclo depois.
- Em diagrama Mealy, saída aparece na transição.
- Em diagrama Moore, saída aparece no estado.
- Não considerar sobreposição em detector de sequência.
- Achar que reset é opcional se o enunciado define estado inicial.
- Codificar estados antes de entender o comportamento.
- Achar que codificação de estados é única.
- Se a prova der codificação, usar outra por conta própria.
- Em one-hot, achar que usa poucos flip-flops.
- Em one-hot, aceitar `0000` ou `0011` como estados válidos comuns.
- Confundir estado inalcançável com don't care sem permissão do enunciado.
- Tratar estados não usados como don't care quando a prova exige comportamento seguro.

Frases perigosas:

```text
"Moore depende da entrada diretamente" → falso.
"Mealy só muda saída quando muda estado" → falso.
"one-hot economiza flip-flops" → falso.
```

---

# 11. Latches, flip-flops e registradores

- Confundir latch com flip-flop.
- Latch é sensível a nível.
- Flip-flop é sensível a borda.
- Achar que latch D e FF D são a mesma coisa.
- Em latch transparente, `Q` acompanha `D` enquanto enable está ativo.
- Esquecer condição inválida do SR.
- Confundir SR com NAND e SR com NOR; a tabela muda conforme ativo alto/baixo.
- Achar que enable desabilitado zera o registrador; normalmente mantém valor.
- Confundir reset síncrono com assíncrono.
- Reset assíncrono independe da borda de clock.
- Reset síncrono só atua na borda.
- Em FF D, `D` recebe o próximo estado `Q+`.
- Em FF T, `T=1` alterna; `T=0` mantém.
- Em JK, `J=K=1` alterna.
- Confundir registrador com memória RAM.
- `n` bits em registrador exigem `n` flip-flops.
- Confundir load paralelo com shift.
- SISO, SIPO, PISO, PIPO: errar entrada serial/paralela ou saída serial/paralela.
- FIFO não é pilha.
- FIFO é first in, first out.
- Pilha é last in, first out.
- FIFO assíncrona envolve clocks diferentes e exige cuidado de sincronização.

Frases perigosas:

```text
"latch só muda na borda" → falso.
"FF D tem Q+ = Q" → falso; Q+ = D.
"FIFO é igual pilha" → falso.
```

---

# 12. Contadores

- Achar que contador assíncrono e síncrono têm o mesmo atraso.
- Contador assíncrono tem ripple delay.
- Em contador síncrono, todos os FFs recebem o mesmo clock.
- Achar que `n` FFs sempre significam exatamente `2^n` estados usados.
- Contador módulo M usa M estados válidos.
- Para módulo 10, precisa 4 FFs, mas 6 estados ficam não usados.
- Esquecer reset para criar módulo menor.
- Confundir `Q0` com MSB.
- Normalmente `Q0` é LSB e divide frequência por 2.
- Errar divisão de frequência: `Q1` divide por 4, `Q2` por 8, etc.
- Achar que contador em anel conta em binário.
- Ring counter com `n` FFs usa `n` estados úteis.
- Johnson counter com `n` FFs usa `2n` estados úteis.
- Achar que Johnson usa `2^n` estados úteis.
- Esquecer que ring counter precisa inicialização válida.
- Ring counter em `0000` pode ficar preso.
- Confundir ring com Johnson:
  - ring realimenta Q;
  - Johnson realimenta Q invertido.
- Achar que contador decrescente tem a mesma lógica de entrada do crescente.

Frases perigosas:

```text
"contador assíncrono é melhor para alta velocidade" → geralmente falso.
"Johnson com n FFs tem 2^n estados" → falso.
"ring counter conta em binário" → falso.
```

---

# 13. Temporização, setup, hold, clock e caminho crítico

- Confundir setup com hold.
- Setup: dado estável antes da borda.
- Hold: dado estável depois da borda.
- Setup usa atraso máximo.
- Hold usa atraso mínimo.
- Caminho crítico limita frequência máxima.
- Caminho crítico é o maior atraso relevante entre registradores.
- Achar que hold entra na fórmula de `Fmax`.
- Diminuir frequência pode ajudar setup.
- Diminuir frequência normalmente não resolve hold.
- Hold é problema logo depois da mesma borda.
- Setup é problema de dado chegar tarde.
- Hold é problema de dado mudar cedo demais.
- Esquecer `tCQ` na fórmula.
- Esquecer `tsetup` na fórmula.
- Usar `tPDmin` na fórmula de setup.
- Usar `tPDmax` na fórmula de hold.
- Errar conversão de `ns` para `MHz`.
- `1 ns` corresponde a `1 GHz`, se período completo for 1 ns.
- Confundir clock skew favorável e desfavorável.
- Não observar se o clock chega tarde no lançador ou no capturador.
- Achar que metastabilidade é só valor lógico `X`; é fenômeno físico de indecisão temporária.
- Entrada assíncrona pode causar metastabilidade.
- Sincronizadores reduzem risco, mas não tornam risco matematicamente zero.
- Confundir pipeline com aumentar frequência automaticamente sem custos.
- Pipeline reduz caminho por estágio, mas cria hazards e overhead de registradores.

Frases perigosas:

```text
"hold melhora reduzindo clock" → geralmente falso.
"setup usa atraso mínimo" → falso.
"metastabilidade é erro de lógica combinacional" → falso.
```

---

# 14. Síntese de FSM com flip-flops

- Não montar tabela de transição antes das equações.
- Confundir entrada da FSM com bit de estado.
- Confundir saída com próximo estado.
- Em FF D, entrada D é igual ao próximo estado.
- Em FF T, precisa analisar se o bit mantém ou alterna.
- Em JK, usar tabela de excitação errada.
- Ignorar estados não usados sem autorização.
- Tratar estado não usado como don't care quando se pede recuperação segura.
- Esquecer equação de saída.
- Em Moore, saída vem do estado.
- Em Mealy, saída pode depender da entrada.
- Não usar a codificação de estados fornecida.
- Achar que quantidade de FFs é igual à quantidade de estados.
- O correto é menor `n` tal que `2^n >= N`, exceto one-hot.
- Em one-hot, `N` estados usam `N` FFs.
- Não conferir se a FSM inicializa em estado válido.

Frases perigosas:

```text
"D recebe o estado atual" → falso; D recebe próximo estado.
"codificação de estados é única" → falso.
"estado não usado sempre é don't care" → depende do enunciado.
```

---

# 15. Ponto fixo e ponto flutuante

- Confundir ponto fixo com ponto flutuante.
- Em ponto fixo, a posição da vírgula é fixa/implícita.
- Esquecer escala em formato Q.
- Em `Qm.n`, `n` bits fracionários dão escala `2^n`.
- Ler inteiro armazenado sem dividir pela escala.
- Em ponto fixo signed, interpretar complemento de 2 antes de aplicar escala.
- Achar que mais bits fracionários aumenta faixa; aumenta precisão.
- Achar que mais bits inteiros aumenta precisão fracionária; aumenta faixa.
- Achar que ponto flutuante tem precisão infinita.
- Achar que todo decimal finito tem binário finito.
- Confundir mantissa, fração e significando.
- Em IEEE 754 normalizado, o `1` antes da vírgula é implícito.
- Esquecer bias.
- Em IEEE 754 simples, bias = 127.
- Confundir expoente armazenado com expoente real.
- Número menor que 1 tende a ter expoente real negativo.
- Confundir sinal do número com sinal do expoente.
- Tratar expoente 0 como normalizado comum.
- Expoente 0 e fração diferente de 0: subnormal.
- Expoente 255 e fração 0: infinito.
- Expoente 255 e fração diferente de 0: NaN.
- Achar que NaN é número muito grande.
- Esquecer arredondamento.
- Achar que `0,1_10` é representado exatamente em binário finito.

Frases perigosas:

```text
"expoente armazenado é o expoente real" → falso.
"todo float é exato" → falso.
"NaN é infinito" → falso.
```

---

# 16. Somadores

- Confundir half-adder com full-adder.
- Half-adder não tem carry de entrada.
- Full-adder tem `Cin`.
- Esquecer que `1+1=10`.
- Esquecer que `1+1+1=11`.
- Carry-out em unsigned pode indicar estouro.
- Carry-out não é overflow assinado.
- Overflow assinado acontece quando sinais iguais geram resultado de sinal diferente.
- Achar que ripple-carry é rápido em muitos bits.
- Ripple-carry é simples, mas carry propaga em cadeia.
- Em carry lookahead, confundir generate e propagate.
- Generate: `Gi = Ai.Bi`.
- Propagate pode aparecer como `Ai xor Bi` ou `Ai + Bi`, conforme convenção.
- Usar convenção de `Pi` diferente da dada no enunciado.
- Esquecer que somador tem atraso.
- Achar que somador combinacional guarda resultado; quem guarda é registrador.
- Ignorar largura fixa e bits descartados.

Frases perigosas:

```text
"half-adder tem Cin" → falso.
"carry-out final é sempre overflow" → falso.
"ripple-carry não depende da largura" → falso.
```

---

# 17. Subtrator, comparador, shifter e ULA

- Subtrair usando complemento de 2, mas esquecer `Cin=1`.
- Esquecer de inverter `B` na subtração `A-B`.
- Confundir borrow com carry.
- Em subtração unsigned implementada como `A + ~B + 1`, carry-out final `0` pode indicar borrow.
- Algumas arquiteturas definem flag C de formas diferentes; leia o enunciado.
- Comparar signed e unsigned com a mesma regra.
- Comparador de igualdade usa XNOR e AND final.
- Comparador de magnitude começa pelo MSB.
- Achar que resultado zero sozinho identifica overflow.
- Shifter lógico insere `0`.
- Shifter aritmético à direita replica bit de sinal.
- Achar que shift left sempre multiplica por 2 sem risco.
- Shift left pode descartar bits.
- Achar que shift right aritmético e lógico são iguais para negativos.
- ULA não escolhe operação sozinha; sinais de controle escolhem.
- Confundir flags:
  - `Z`: zero;
  - `N`: negativo/MSB;
  - `C`: carry/borrow;
  - `V`: overflow assinado.
- Achar que `N=1` sempre significa erro.
- Achar que `Z=1` significa que operação foi comparação; pode ser resultado aritmético zero.
- Barrel shifter desloca múltiplas posições de uma vez; não confundir com registrador de deslocamento simples.

Frases perigosas:

```text
"shift aritmético e lógico são iguais" → só em alguns casos.
"comparador A=B usa XOR" → igualdade usa XNOR.
"ULA guarda resultado" → falso; registrador guarda.
```

---

# 18. Física básica, MOS e CMOS

- Confundir potencial elétrico com tensão.
- Potencial é nível elétrico de um ponto.
- Tensão é diferença de potencial entre dois pontos.
- Achar que corrente é tensão.
- Corrente é fluxo de carga por tempo.
- Confundir potência com energia.
- Potência é energia por tempo.
- Energia é consumo/trabalho acumulado.
- Esquecer unidades: V, A, Ω, W, J, F.
- Usar `P=V.I` com unidades incoerentes.
- Esquecer que capacitor armazena carga.
- Achar que capacitância só existe em capacitor ideal; fios e portas têm capacitância parasita.
- NMOS liga com gate em `1`.
- PMOS liga com gate em `0`.
- NMOS é bom para puxar para `0`.
- PMOS é bom para puxar para `1`.
- NMOS isolado passa `1` fraco.
- PMOS isolado passa `0` fraco.
- Desligado não significa `0`; pode significar alta impedância.
- Achar que CMOS ideal consome muito parado.
- CMOS ideal tem baixo consumo estático.
- CMOS real tem leakage/corrente de fuga.
- Leakage contribui para potência estática.
- Potência dinâmica depende de chaveamento.
- `VDD` entra ao quadrado na potência dinâmica.
- Aumentar frequência aumenta potência dinâmica.
- Aumentar fanout aumenta capacitância, atraso e energia.
- Durante transição, pode haver corrente de curto-circuito momentânea.
- Confundir pull-up com pull-down.
- Pull-up puxa para `VDD`.
- Pull-down puxa para `GND`.
- Em CMOS, rede PMOS é dual da rede NMOS.
- Para NAND, NMOS em série e PMOS em paralelo.
- Para NOR, NMOS em paralelo e PMOS em série.
- A saída CMOS é complemento da condição de condução do pull-down.

Frases perigosas:

```text
"PMOS liga com 1" → falso.
"NMOS passa 1 forte" → falso.
"potência dinâmica independe de VDD" → falso.
```

---

# 19. Atraso físico, caminho crítico, glitches e hazards

- Confundir atraso de propagação com período de clock.
- Atraso de propagação é tempo de mudança entrada-saída.
- Caminho crítico é o maior atraso que limita frequência.
- Fanout maior aumenta carga.
- Carga maior aumenta atraso.
- Achar que glitch e hazard são a mesma coisa.
- Hazard é a condição estrutural.
- Glitch é o pulso indesejado observado.
- Hazard estático-1: deveria ficar `1`, mas pulsa para `0`.
- Hazard estático-0: deveria ficar `0`, mas pulsa para `1`.
- Hazard dinâmico: deveria mudar uma vez, mas oscila.
- Achar que expressão mínima sempre é livre de hazard.
- Termo de consenso pode ser redundante logicamente e ainda assim necessário fisicamente.
- Remover termo redundante sem olhar hazard.
- Achar que flip-flop sempre captura qualquer glitch.
- Flip-flop pode ignorar glitch se ele não afetar a janela setup/hold.
- Achar que todo glitch causa erro funcional.
- Não diferenciar hazard combinacional de hazard de pipeline.
- Cuidado com unidades: `pF`, `fF`, `MHz`, `ns`, `mW`.

Frases perigosas:

```text
"hazard é o pulso" → mais preciso: glitch é o pulso.
"termo redundante sempre é inútil" → falso.
"glitch sempre será capturado" → falso.
```

---

# 20. Memórias, ROM, SRAM, DRAM e banco de registradores

- Confundir bit, byte e palavra.
- Palavra não é necessariamente byte.
- `4K x 32` significa 4096 palavras de 32 bits.
- Capacidade em bits = posições vezes bits por palavra.
- Bytes = bits/8.
- Confundir endereço com dado.
- `n` bits de endereço acessam `2^n` posições.
- Achar que banco de registradores é a mesma coisa que RAM principal.
- Banco de registradores é pequeno e rápido.
- ROM é não volátil.
- SRAM é volátil.
- DRAM é volátil.
- SRAM não precisa refresh, mas ainda é volátil.
- DRAM precisa refresh.
- DRAM é mais densa.
- SRAM costuma ser mais rápida.
- Ordem típica de velocidade: registradores > SRAM > DRAM.
- ROM pode implementar tabela verdade.
- Em ROM como tabela, entradas são endereço e saídas são palavra.
- Confundir ROM, PROM, EPROM, EEPROM e Flash.
- PROM programável uma vez, em sentido clássico.
- EPROM apagável por UV.
- EEPROM apagável eletricamente.
- Flash é tipo de EEPROM em blocos/alta densidade.
- Achar que memória assíncrona e síncrona têm mesma interface.
- Esquecer sinais de leitura/escrita/chip enable.
- Escrever em memória quando `MemWrite=0`.
- Ler memória de dados em instrução que só usa ULA.

Frases perigosas:

```text
"SRAM não precisa refresh, então não é volátil" → falso.
"palavra sempre tem 8 bits" → falso.
"ROM não pode implementar lógica" → falso.
```

---

# 21. PROM, PLA, PAL, CPLD, FPGA, LUT, HDL e bitstream

- Confundir PROM com PLA.
- PROM: AND fixo, OR programável.
- PLA: AND programável, OR programável.
- PAL: AND programável, OR fixo.
- Achar que PAL é mais flexível que PLA.
- PLA é mais flexível.
- PAL tende a ser mais simples.
- PROM parece tabela verdade/memória.
- PLA/PAL parecem redes de produtos e somas.
- Achar que LUT é uma porta lógica fixa.
- LUT é tabela programável de `k` entradas.
- LUT de `k` entradas tem `2^k` bits de configuração.
- Achar que LUT de 6 entradas tem 6 bits; tem 64 bits de tabela.
- Achar que FPGA executa HDL como CPU executa programa.
- HDL descreve hardware.
- Síntese transforma HDL em circuito.
- Bitstream configura o FPGA.
- Bitstream não é programa de CPU comum.
- FPGA baseado em SRAM perde configuração ao desligar.
- CPLD costuma ter timing mais previsível que FPGA.
- FPGA costuma ter mais capacidade e paralelismo.
- ASIC é fixo/fabricado; FPGA é configurável.
- FPGA tende a ser menos eficiente que ASIC em área/energia/desempenho para a mesma função.
- Não basta contar LUTs; roteamento também afeta atraso.
- Achar que FPGA é só lógica combinacional; também tem FFs, BRAM, DSP, clock etc.
- Confundir BRAM com LUT.

Frases perigosas:

```text
"LUT de k entradas tem k bits" → falso.
"FPGA roda Verilog como programa" → falso.
"CPLD e FPGA são iguais" → falso.
```

---

# 22. Assembly, operandos, instruções e endereçamento

- Confundir label com instrução.
- Label é nome simbólico de endereço.
- Branch é instrução que muda fluxo.
- Confundir branch com call.
- Call salva retorno; branch simples não salva.
- Em ARM, `BL` salva retorno em `LR`.
- `BX LR` retorna usando endereço em `LR`.
- `BX LR` não chama função.
- Confundir registrador com memória apontada por registrador.
- `R1` é valor do registrador.
- `[R1]` é valor na memória cujo endereço está em `R1`.
- Imediato não é endereço de memória.
- `#5` é constante 5, não memória no endereço 5.
- Em load/store, operações aritméticas normalmente usam registradores.
- `LOAD` lê memória para registrador.
- `STORE` escreve registrador na memória.
- Após calcular em registrador, precisa `STORE` para salvar em memória.
- Confundir ordem destino/fonte entre arquiteturas.
- Achar que todo branch usa endereço absoluto; muitos usam PC-relative.
- Em PC-relative, alvo = PC + offset.
- Esquecer que offset pode ser em palavras ou bytes, conforme arquitetura.
- Confundir instrução tipo R, I e J.
- Tipo R usa registradores.
- Tipo I usa imediato/deslocamento.
- Tipo J usa salto/endereço.
- Esquecer extensão de sinal em imediato signed.
- Usar zero extension quando imediato é signed.
- Usar sign extension quando imediato é lógico/unsigned, se arquitetura pedir zero extension.
- Confundir instrução de 0 endereços com sem operandos; pode usar pilha implicitamente.
- Em pilha, topo é operando implícito.
- Branch condicional depende de flags ou resultado de comparação.
- `BEQ` normalmente depende de igualdade/flag zero.
- Comparação pode ser feita por subtração sem salvar resultado.

Frases perigosas:

```text
"label é uma instrução executada" → falso.
"BL é igual B" → falso; BL salva retorno.
"imediato é endereço" → falso.
```

---

# 23. Datapath e controle

- Confundir datapath com controle.
- Datapath move/processa dados.
- Controle gera sinais que escolhem caminhos e operações.
- Controle não carrega dados por si só.
- Achar que unidade de controle é necessariamente LUT.
- Conceitualmente, controle é lógica combinacional ou microprogramada.
- Em FPGA, pode ser implementada por LUTs, mas isso é implementação física.
- Confundir memória de instruções com memória de dados.
- Confundir PC com registrador comum.
- PC guarda endereço da próxima instrução.
- Fetch busca instrução usando PC.
- Decode decodifica e lê registradores.
- Execute usa ULA.
- Memory acessa memória de dados se necessário.
- Writeback escreve registrador se necessário.
- Achar que toda instrução usa todas as etapas com ação relevante.
- `ADD` não precisa acessar memória de dados.
- `STORE` não faz writeback em registrador.
- `LOAD` faz leitura de memória e writeback.
- `BEQ` usa ULA para comparar, mas não salva subtração.
- `RegWrite` escreve registrador.
- `MemWrite` escreve memória.
- `MemRead` lê memória.
- `ALUSrc=0` escolhe registrador como entrada da ULA.
- `ALUSrc=1` escolhe imediato/offset.
- `MemToReg=1` escreve no registrador dado vindo da memória.
- `MemToReg=0` escreve resultado da ULA.
- `Branch` sozinho não muda PC; precisa condição/Zero conforme datapath.
- `Jump` altera PC sem comparação condicional.
- `Zero` é saída da ULA, não sinal de controle gerado arbitrariamente.
- `X` em tabela de controle significa don't care, não valor proibido.
- Sinal de controle pode ter nome diferente em outra arquitetura.
- Hardwired não é microprogramado.
- Microprogramado usa microinstruções/ROM de controle.
- Pipeline cria hazards estrutural, de dados e de controle.
- Hazard de pipeline não é a mesma coisa que hazard combinacional.

Frases perigosas:

```text
"STORE escreve registrador" → normalmente falso.
"controle move dados" → falso; datapath move.
"Zero é sinal de controle comum" → falso; é saída da ULA.
```

---

# 24. Pegadinhas interdisciplinares

- Questão mistura signed/unsigned com comparação.
- Questão mistura Karnaugh mínimo com hazard.
- Questão mistura `Z` com `don't care`.
- Questão mistura ROM como memória com ROM como tabela verdade.
- Questão mistura LUT com ROM.
- Questão mistura branch com label.
- Questão mistura controle de datapath com unidade funcional.
- Questão usa sinal ativo baixo e espera inverter raciocínio.
- Questão usa unidade errada: `MHz`, `ns`, `pF`, `mW`.
- Questão pede "mais rápido" e alternativa escolhe menor área.
- Questão pede "mais flexível" e alternativa escolhe PAL em vez de PLA.
- Questão pede "não volátil" e alternativa marca SRAM.
- Questão pede "não precisa refresh" e alternativa conclui "não volátil".
- Questão pede "caminho crítico" e alternativa escolhe caminho com menos portas por aparência.
- Questão de FSM dá codificação e o aluno inventa outra.
- Questão de assembly muda ordem destino/fonte.
- Questão de BCD usa binário válido, mas BCD inválido.
- Questão de IEEE 754 usa expoente 0 ou 255.
- Questão de CMOS pergunta condição de condução do pull-down, mas a saída é o complemento.

---

# 25. Checklist antes de marcar alternativa

Antes de marcar, pergunte:

```text
1. A questão está falando de signed ou unsigned?
2. A saída/sinal é ativo alto ou ativo baixo?
3. É SOP ou POS?
4. É mintermo ou maxtermo?
5. É setup ou hold?
6. É atraso máximo ou mínimo?
7. É glitch ou hazard?
8. É potência dinâmica ou estática?
9. É memória, registrador ou barramento?
10. É label, branch, jump ou call?
11. A instrução escreve registrador ou memória?
12. O sinal é controle ou saída da ULA?
13. O valor é endereço ou dado?
14. O imediato precisa de sign extension ou zero extension?
15. A tabela usa don't care como opcional ou valor obrigatório?
```

Se uma alternativa parece certa "por palavra-chave", desconfie. Prova difícil troca a palavra certa de lugar.

---

# 26. Frases para memorizar

```text
Carry não é overflow assinado.
Z não é don't care.
Label não é branch.
Branch não é call.
Latch não é flip-flop.
Moore não é Mealy.
SRAM não precisa refresh, mas é volátil.
DRAM precisa refresh.
PROM parece memória; PLA/PAL parecem rede lógica.
LUT é tabela verdade pequena.
HDL descreve hardware.
Bitstream configura FPGA.
Setup é antes da borda.
Hold é depois da borda.
Diminuir frequência ajuda setup, não hold.
Hazard é causa; glitch é efeito.
CMOS dinâmico depende de C, VDD², f e atividade.
Controle gera sinais; datapath carrega dados.
```
