# Resumo detalhado para relembrar - Aulas 1 a 27

Atualizado em: 29/06/2026

Objetivo: revisar todas as aulas de Sistemas Digitais sem precisar reler os PDFs completos. Use este arquivo para reativar memória, localizar pontos fracos e voltar ao modo questão.

Como usar:

```text
1. Leia uma aula por vez.
2. Tente explicar em voz alta sem olhar.
3. Se travar, marque o tópico.
4. Resolva 5 a 10 questões daquele bloco.
5. Transforme erro repetido em revisão/Anki.
```

Mapa geral:

```text
Aulas 1 a 2   → números, códigos e representação
Aulas 3 a 9   → lógica booleana, Karnaugh e síntese
Aulas 10 a 16 → blocos combinacionais, FSM, latches, FFs, contadores e timing
Aulas 17 a 19 → ponto fixo/flutuante, somadores, ULA e flags
Aulas 20 a 22 → MOS/CMOS, potência, atraso, hazards e glitches
Aulas 23 a 24 → memórias e lógica programável
Aulas 25 a 27 → assembly, formatos, endereçamento, datapath e controle
```

---

# 1. Binários, operações, sinal e complemento de 2

Ideia central: um número binário é uma soma de pesos de potência de 2.

O que lembrar:

- Em base 2, cada posição vale `... 16, 8, 4, 2, 1`.
- Binário para decimal: some os pesos onde o bit é `1`.
- Decimal para binário: divisões sucessivas por 2 ou método dos pesos.
- Hexadecimal ajuda porque `1` dígito hex = `4` bits.
- Parte fracionária usa pesos `1/2, 1/4, 1/8, 1/16...`.

Operações:

```text
0 + 0 = 0
0 + 1 = 1
1 + 1 = 10
1 + 1 + 1 = 11
```

Complemento de 2:

```text
para fazer -X:
1. escreva X em binário
2. inverta os bits
3. some 1
```

Intervalos:

```text
n bits sem sinal: 0 até 2^n - 1
n bits complemento de 2: -2^(n-1) até 2^(n-1)-1
```

Overflow:

- Sem sinal: carry-out indica que passou da faixa.
- Com sinal: overflow ocorre quando:
  - positivo + positivo dá negativo;
  - negativo + negativo dá positivo.
- Carry final não é o mesmo que overflow assinado.

Pegadinhas:

- `1111` com 4 bits pode ser `15` sem sinal ou `-1` em complemento de 2.
- O MSB `1` em complemento de 2 indica número negativo, não erro.
- O menor negativo não tem positivo representável com a mesma largura.
- Em largura fixa, bits excedentes são descartados.

---

# 2. Códigos binários: BCD, Gray, ASCII e checksum

Ideia central: nem todo padrão de bits representa "número puro"; alguns representam códigos.

BCD:

- Cada dígito decimal vira 4 bits.
- `59` em BCD = `0101 1001`.
- BCD válido por dígito: `0000` a `1001`.
- `1010` a `1111` são inválidos como dígito BCD.
- Soma BCD pode exigir correção com `+6` quando o dígito passa de 9.

Gray:

- Valores consecutivos mudam apenas 1 bit.
- Reduz erro em transições de sensores/contadores.
- Binário para Gray:

```text
primeiro bit Gray = primeiro bit binário
demais bits Gray = XOR entre bits binários vizinhos
```

ASCII:

- Codifica caracteres.
- O código do caractere `'5'` não é o valor numérico 5.

Paridade e checksum:

- Paridade detecta quantidade ímpar/par de erros, mas não todos.
- Duas inversões podem preservar a paridade.
- Checksum simples por soma falha se alterações mantiverem a mesma soma.

Pegadinhas:

- BCD de 59 não é o binário puro de 59.
- Gray não foi feito para facilitar conta aritmética.
- ASCII é código de caractere, não valor matemático.

---

# 3. Portas lógicas e operações booleanas

Ideia central: circuitos digitais combinacionais implementam funções booleanas.

Portas principais:

```text
NOT  → inverte
AND  → 1 se todas entradas forem 1
OR   → 1 se pelo menos uma entrada for 1
NAND → AND negado
NOR  → OR negado
XOR  → 1 se as entradas forem diferentes
XNOR → 1 se as entradas forem iguais
```

Precedencia usual:

```text
NOT → AND → OR
```

O que saber fazer:

- Avaliar expressão para valores `0/1`.
- Converter expressão em circuito.
- Converter circuito em expressão.
- Nomear sinais intermediários para não se perder.

Pegadinhas:

- XOR não é simplesmente "OR"; ele exclui o caso em que ambas entradas são `1`.
- NAND e NOR são universais.
- `A + B.C` significa `A + (B.C)`.

---

# 4. Álgebra booleana

Ideia central: simplificar expressões reduz portas e ajuda a enxergar equivalências.

Leis essenciais:

```text
A + 0 = A
A . 1 = A
A + 1 = 1
A . 0 = 0
A + A = A
A . A = A
A + A' = 1
A . A' = 0
(A')' = A
```

Absorção:

```text
A + A.B = A
A.(A+B) = A
```

Distributivas:

```text
A.(B+C) = A.B + A.C
A + B.C = (A+B).(A+C)
```

Consenso:

```text
AB + A'C + BC = AB + A'C
```

O termo `BC` pode ser redundante para a função, mas pode ser útil para eliminar hazard.

Pegadinhas:

- Álgebra booleana não é álgebra comum: `A + A = A`, não `2A`.
- Muitas alternativas de prova mudam só um complemento.
- Sempre confira se a simplificação preserva todos os casos.

---

# 5. DeMorgan, dualidade, NAND e NOR

Ideia central: negar blocos troca AND por OR e OR por AND.

DeMorgan:

```text
(A.B)' = A' + B'
(A+B)' = A'.B'
```

Regra mental:

```text
nega o bloco inteiro
nega cada termo
troca AND por OR
troca OR por AND
```

Portas universais:

- NAND implementa qualquer função.
- NOR implementa qualquer função.
- Inversor com NAND: `A NAND A = A'`.
- Inversor com NOR: `A NOR A = A'`.

Como cai:

- Empurrar bolhas em circuitos.
- Transformar SOP em NAND-NAND.
- Transformar POS em NOR-NOR.
- Identificar equivalência de expressão.

Pegadinhas:

- A negação precisa ser do bloco inteiro.
- `(A + B')' = A'.B`, não `A'.B'`.
- NAND-NAND combina naturalmente com SOP; NOR-NOR combina naturalmente com POS.

---

# 6. Valores lógicos, formas canônicas, mintermos e maxtermos

Ideia central: toda tabela-verdade pode virar SOP ou POS canônica.

Valores:

```text
H → nível alto
L → nível baixo
Z → alta impedância
X / don't care → valor livre para simplificação
```

Interpretação em prova:

- `H` e `L` são níveis lógicos físicos, alto e baixo.
- `1` e `0` são valores booleanos abstratos.
- `Z` significa saída desconectada/alta impedância; não força `0` nem `1`.
- `X` ou `don't care` significa valor irrelevante para simplificar ou valor desconhecido, conforme contexto.
- Sinal ativo baixo normalmente aparece com bolha, barra ou sufixo `_n`: ativo quando vale `0`.

Tri-state e barramento:

- Saída tri-state pode assumir `0`, `1` ou `Z`.
- Vários dispositivos podem compartilhar um barramento se apenas um dirigir o barramento por vez.
- Se dois dispositivos dirigem valores diferentes no mesmo barramento, ocorre contenção.
- Dispositivo em `Z` fica "desconectado" logicamente do barramento.

Mintermo:

- Linha onde `F=1`.
- Produto que contém todas as variáveis.
- Bit `1` → variável normal.
- Bit `0` → variável complementada.

Maxtermo:

- Linha onde `F=0`.
- Soma que contém todas as variáveis.
- Bit `0` → variável normal.
- Bit `1` → variável complementada.

Notação:

```text
SOP canônica → Sigma m(...)
POS canônica → Pi M(...)
```

Pegadinhas:

- Mintermo é para `1`; maxtermo é para `0`.
- `Z` não é `don't care`.
- Barramento compartilhado precisa controlar quem está habilitado.
- Ativo baixo não significa "desligado"; significa que o sinal faz efeito em `0`.
- Forma canônica usa todas as variáveis, mesmo que ainda não esteja minimizada.

---

# 7. Karnaugh de 2 e 3 variáveis

Ideia central: Karnaugh minimiza visualmente agrupando células adjacentes.

Regras:

- Para SOP, agrupe `1s`.
- Para POS, agrupe `0s`.
- Grupos devem ter tamanho potência de 2: `1, 2, 4, 8...`.
- Grupos devem ser os maiores possíveis.
- Pode sobrepor grupos se ajudar.
- Bordas podem ser adjacentes.
- Diagonal não conta.
- Variável que muda dentro do grupo desaparece.
- Variável fixa permanece no termo.

Roteiro:

```text
1. preencher o mapa
2. procurar maiores grupos
3. cobrir todos os 1s obrigatorios
4. extrair termos
5. conferir se não cobriu 0
```

Pegadinhas:

- Ordem do mapa usa Gray, não ordem binária comum.
- Não formar grupo inválido só porque parece visualmente perto.
- Não esquecer grupo de borda.

---

# 8. Karnaugh de 4 variáveis e don't care

Ideia central: mapa de 4 variáveis tem 16 células e exige muita atenção a bordas/cantos.

Ordem Gray:

```text
00, 01, 11, 10
```

Grupos:

```text
1, 2, 4, 8, 16
```

Don't care:

- Pode virar `0` ou `1` se ajudar.
- Não precisa usar todos.
- Use apenas se aumentar grupo ou reduzir expressão.

Como cai:

- Quarteto nos cantos.
- Oitava envolvendo extremidades.
- POS pelos zeros.
- SOP pelos uns.
- `don't care` que ajuda e `don't care` inútil.

Pegadinhas:

- Cantos podem formar grupo.
- Não cobrir zero em SOP.
- Não cobrir um em POS.
- Não transformar todo `X` em `1` por impulso.

---

# 9. Síntese lógica completa: SOP, POS, NAND e NOR

Ideia central: sair de uma especificação e chegar a um circuito correto.

Fluxo:

```text
tabela verdade
→ mintermos/maxtermos
→ Karnaugh
→ expressão mínima
→ implementação com portas
```

Associações:

```text
SOP → AND-OR
POS → OR-AND
SOP → NAND-NAND
POS → NOR-NOR
```

Se pedir NAND:

- Pense em SOP.
- Use produtos negados na primeira camada.
- A NAND final realiza a soma via DeMorgan.

Se pedir NOR:

- Pense em POS.
- Use somas negadas na primeira camada.
- A NOR final realiza o produto via DeMorgan.

Pegadinhas:

- Não desenhar circuito canônico se a questão pede mínimo.
- Não usar NAND-NAND diretamente sobre POS.
- Não usar NOR-NOR diretamente sobre SOP.
- Literais negados podem exigir inversor.

---

# 10. MUX, DEMUX, decoder, encoder e comparador

Ideia central: blocos combinacionais reutilizam lógica padrão.

MUX:

- Escolhe uma entrada.
- `2^n` entradas exigem `n` seletores.
- Pode implementar função lógica ligando entradas em `0`, `1`, variáveis ou complementos.

DEMUX:

- Uma entrada vai para uma saída selecionada.

Decoder:

- `n` entradas → até `2^n` saídas.
- Cada saída pode representar um mintermo.
- Ativo alto e ativo baixo mudam a porta usada na saída.

Encoder:

- Várias entradas → código binário.
- Priority encoder escolhe a entrada ativa de maior prioridade.
- Sinal `valid` indica se há entrada ativa.

Comparador:

- Pode indicar `A=B`, `A>B`, `A<B`.
- Comparação muda se for signed ou unsigned.
- Igualdade bit a bit usa XNOR em cada bit e AND final.

```text
A = B → (A3 xnor B3).(A2 xnor B2).(A1 xnor B1).(A0 xnor B0)
```

Pegadinhas:

- MUX escolhe entrada; DEMUX escolhe saída.
- Decoder ativo baixo costuma exigir NAND para juntar mintermos.
- Encoder simples falha se várias entradas estiverem ativas; priority encoder resolve.
- Índice geralmente começa em 0.

---

# 11. FSM, Moore e Mealy

Ideia central: FSM usa estado para lembrar o passado.

Elementos:

```text
estado atual
entrada
próximo estado
saída
```

Moore:

- Saída depende apenas do estado.
- Mais estável.
- Pode responder um ciclo depois.

Mealy:

- Saída depende do estado e da entrada.
- Pode responder imediatamente.
- Pode ser mais sensível a glitch de entrada.

O que saber fazer:

- Rastrear sequência de entradas.
- Ler diagrama de estados.
- Montar tabela de transição.
- Dizer se a saída é Moore ou Mealy.

Pegadinhas:

- Em Mealy, a saída pode mudar sem mudar estado.
- Em Moore, a saída normalmente está escrita dentro do estado.
- Detector de sequência pode permitir sobreposição.

---

# 12. Latch SR e latch D

Ideia central: latch guarda valor e é sensível a nível.

Latch SR:

- `S` seta.
- `R` reseta.
- Existe combinação proibida/contraditória.
- Usa realimentação para manter estado.

Latch D:

- Tem uma entrada `D`.
- Evita combinação inválida clássica do SR.
- Com enable ativo, fica transparente.
- Com enable inativo, mantém o último valor.

Pegadinhas:

- Latch não é flip-flop.
- Latch responde enquanto enable está ativo.
- "Transparente" significa que `Q` acompanha `D`.

---

# 13. Flip-flops e registradores

Ideia central: flip-flop guarda 1 bit em borda de clock; registrador guarda vários bits.

FF D:

```text
Q+ = D
```

FF T:

```text
T=0 → mantém
T=1 → alterna
```

FF JK:

```text
J=0 K=0 → mantém
J=1 K=0 → seta
J=0 K=1 → reseta
J=1 K=1 → alterna
```

Registrador:

- Conjunto de flip-flops.
- `n` bits exigem `n` FFs.
- Pode ter enable, reset, load paralelo, shift.

Registradores de deslocamento:

- Servem para mover bits uma posição por clock.
- Shift left: desloca para a esquerda.
- Shift right: desloca para a direita.
- O bit que entra pode vir de uma entrada serial, de realimentação ou de controle.
- O bit que sai pode ser descartado ou usado como saída serial.

Variantes entrada/saída:

```text
SISO → serial in, serial out
SIPO → serial in, parallel out
PISO → parallel in, serial out
PIPO → parallel in, parallel out
```

Como lembrar:

- SISO: recebe 1 bit por clock e entrega 1 bit por clock.
- SIPO: converte serial para paralelo.
- PISO: converte paralelo para serial.
- PIPO: registrador paralelo comum.
- Registrador bidirecional: desloca para esquerda ou direita.
- Registrador universal: normalmente permite manter, load paralelo, shift left e shift right.

FIFO:

- Significa `First In, First Out`.
- É uma fila: o primeiro dado escrito é o primeiro dado lido.
- Tem operação de escrita/enfileirar e leitura/desenfileirar.
- Costuma ter sinais `empty` e `full`.
- Pode usar registradores ou memória interna com ponteiros de leitura e escrita.
- Serve para desacoplar produtor e consumidor quando eles não trabalham exatamente no mesmo ritmo.
- FIFO síncrona usa o mesmo clock para leitura e escrita.
- FIFO assíncrona usa clocks diferentes e exige cuidado extra com sincronização.

Pegadinhas:

- FF D em síntese: entrada `D` deve receber o próximo estado.
- Enable desabilitado significa manter valor antigo.
- Reset pode ser síncrono ou assíncrono, conforme enunciado.
- Entrada serial/paralela e saída serial/paralela são coisas diferentes.
- Load paralelo carrega vários bits de uma vez; shift desloca bits ao longo dos FFs.
- FIFO não é pilha: pilha é LIFO, FIFO é fila.

---

# 14. Contadores e divisão de frequência

Ideia central: contador é FSM que percorre estados numéricos ou uma sequência.

Regras:

```text
n FFs → até 2^n estados
módulo M → M estados válidos
bits mínimos → menor n tal que 2^n ≥ M
```

Assíncrono:

- Clock passa de um FF para outro.
- Simples, mas acumula atraso.

Síncrono:

- Todos recebem o mesmo clock.
- Mais previsível.
- Exige lógica combinacional para controlar as entradas dos FFs.

Divisão:

- Cada estagio T que alterna divide frequência por 2.
- `Q0` divide por 2, `Q1` por 4, `Q2` por 8, etc.

Pegadinhas:

- Modulo 10 precisa 4 FFs, mas 6 estados ficam não usados.
- Contador assíncrono tem ripple delay.
- Em questão de frequência, confira se `Q0` é o primeiro divisor por 2.

---

# 15. Temporização sequencial, setup, hold e caminho crítico

Ideia central: não basta a lógica estar correta; o dado precisa chegar no tempo certo.

Termos:

```text
tCQ      → clock para Q
tPD      → atraso da lógica combinacional
tsetup   → dado estável antes da borda
thold    → dado estável depois da borda
Tclk     → período do clock
Fmax     → frequência máxima
```

Setup:

```text
Tclk ≥ tCQmax + tPDmax + tsetup
```

Hold:

```text
tCQmin + tPDmin ≥ thold
```

Com skew:

- Skew favorável pode ajudar setup.
- Skew desfavorável pode piorar setup ou hold, conforme direção.
- Leia o enunciado com cuidado.

Caminho crítico:

- Maior atraso.
- Limita `Fmax`.

Metastabilidade:

- Pode acontecer quando a entrada de um flip-flop muda perto demais da borda de clock.
- É consequência típica de violar setup/hold.
- A saída pode demorar para estabilizar ou ficar indefinida por um tempo.
- Em prova, associe metastabilidade a entradas assíncronas, sincronizadores e violação de temporização.

Pegadinhas:

- Setup usa atrasos máximos.
- Hold usa atrasos mínimos.
- Diminuir frequência ajuda setup, mas normalmente não resolve hold.
- `Fmax = 1/Tmin`; cuidado com `ns` para `MHz`.

---

# 16. Síntese de FSM com flip-flops

Ideia central: transformar tabela/diagrama de estados em equações de entrada dos FFs.

Passos:

```text
1. identificar estados
2. codificar estados em bits
3. montar tabela estado atual + entrada → próximo estado + saída
4. definir entradas dos flip-flops
5. minimizar equações
```

Quantidade de FFs:

```text
k estados → ceil(log2(k)) FFs
```

FF D:

```text
D = Q+
```

FF T:

```text
T = Q xor Q+
```

JK:

- Use tabela de excitação.
- Para `0 → 1`, precisa `J=1`.
- Para `1 → 0`, precisa `K=1`.

Pegadinhas:

- Não confundir estado atual `Q` com próximo estado `Q+`.
- Estados não usados podem ser `don't care` se a questão permitir.
- Saída Moore depende só de estado; saída Mealy pode depender de entrada.

---

# 17. Ponto fixo e ponto flutuante

Ideia central: bits podem representar números reais de forma escalada.

Ponto fixo:

- Vírgula implícita.
- Valor real = inteiro armazenado / `2^n` quando há `n` bits fracionários.
- Mais bits fracionários → mais precisão.
- Mais bits inteiros → maior faixa.

Exemplo:

```text
Q3.4 → escala 1/16
inteiro armazenado -37 → valor real -37/16 = -2,3125
```

Ponto flutuante:

- Campos:
  - sinal;
  - expoente;
  - fração/mantissa.
- IEEE 754 simples usa bias 127.
- IEEE 754 simples tem 32 bits: 1 sinal, 8 expoente e 23 fração.

Normalizado:

```text
valor = (-1)^s * 1.fração * 2^(expoente-bias)
```

Casos especiais em IEEE 754 simples:

| Expoente | Fração | Significado |
|---|---|---|
| 0 | 0 | zero com sinal |
| 0 | diferente de 0 | subnormal |
| 1 a 254 | qualquer | número normalizado |
| 255 | 0 | infinito |
| 255 | diferente de 0 | NaN |

Pegadinhas:

- Ponto flutuante não tem precisão infinita.
- Expoente armazenado não é o expoente real.
- Número menor que 1 tem expoente real negativo.
- Em número normalizado, o `1` antes da vírgula é implícito.
- Subnormal não usa o `1` implícito da mesma forma que normalizado.
- NaN representa resultado inválido/indeterminado, não um número comum.
- Em ponto fixo assinado, interprete primeiro como complemento de 2 e depois aplique escala.

---

# 18. Somadores

Ideia central: soma binária em hardware é feita por blocos de 1 bit.

Half-adder:

```text
S    = A xor B
Cout = A.B
```

Full-adder:

```text
S    = A xor B xor Cin
Cout = A.B + A.Cin + B.Cin
```

Ripple-carry:

- Simples.
- Carry passa de bit em bit.
- Atraso cresce com a largura.

Carry lookahead:

```text
Gi = Ai.Bi
Pi = Ai xor Bi
C(i+1) = Gi + Pi.Ci
```

Pegadinhas:

- Carry-out não é overflow assinado.
- Em signed, overflow depende dos sinais dos operandos e do resultado.
- `Pi` pode aparecer como XOR ou OR dependendo da convenção; use a convenção do enunciado.

---

# 19. Subtrator, comparador, shifter e ULA

Ideia central: a ULA junta operações aritméticas/lógicas controladas por sinais.

Subtração:

```text
A - B = A + (~B + 1)
```

Implementação:

- Inverter `B`.
- Colocar `Cin=1`.
- Usar somador.

Comparador:

- Pode usar subtração.
- Signed e unsigned podem dar conclusões diferentes.

Shifter:

- Deslocamento lógico: insere `0`.
- Deslocamento aritmético a direita: replica bit de sinal.
- Deslocar esquerda equivale a multiplicar por 2 se não houver perda de bits.

ULA:

- Entradas: operandos + código da operação.
- Saídas: resultado + flags.

Flags:

```text
Z → resultado zero
N → resultado negativo/MSB 1
C → carry/borrow conforme arquitetura
V → overflow assinado
```

Pegadinhas:

- Shifter pode descartar bits.
- ULA não escolhe sozinha a operação; o controle escolhe.
- Resultado zero ativa `Z`, mas não diz sozinho se houve overflow.

---

# 20. Física básica e transistores MOS

Ideia central: para Sistemas Digitais, MOS é visto como chave controlada por tensão.

Grandezas:

```text
Q → carga elétrica, medida em coulomb (C)
V → tensão elétrica, medida em volt (V)
U → potencial elétrico, medido em volt (V)
I → corrente elétrica, medida em ampere (A)
R → resistência elétrica, medida em ohm (Ω)
C → capacitância, medida em farad (F)
P → potência, medida em watt (W)
E → energia, medida em joule (J)
```

Potencial elétrico:

- É a energia potencial elétrica por unidade de carga em um ponto.
- Pense como o "nível elétrico" de um nó.
- Um nó em `5 V` tem potencial maior que um nó em `0 V`.
- Em circuitos digitais, `VDD` costuma ser o potencial alto e `GND` o potencial de referência.

```text
U = E/Q
1 V = 1 J/C
```

Tensão elétrica:

- É diferença de potencial entre dois pontos.
- Tensão não é "em um fio" isolado; é sempre entre dois nós.
- Se um nó está em `5 V` e outro em `0 V`, a tensão entre eles é `5 V`.
- É a tensão que "empurra" carga e pode gerar corrente.

```text
Vab = Ua - Ub
```

Corrente elétrica:

- É fluxo de carga por unidade de tempo.
- Corrente convencional vai do maior potencial para o menor potencial.
- Em semicondutores, elétrons se movem no sentido oposto da corrente convencional.

```text
I = ΔQ/Δt
1 A = 1 C/s
```

Resistência e Lei de Ohm:

- Resistência mede oposição à passagem de corrente.
- Para resistor ideal, tensão e corrente são proporcionais.

```text
V = R.I
I = V/R
R = V/I
```

Potência elétrica:

- Potência é energia por unidade de tempo.
- Em circuito, indica quão rápido energia é consumida, dissipada ou transferida.
- Em CMOS, potência alta geralmente significa mais consumo e mais aquecimento.

```text
P = E/t
P = V.I
P = I^2.R
P = V^2/R
```

Energia elétrica:

- Energia é potência acumulada ao longo do tempo.
- Se um circuito consome `P` watts durante `t` segundos, gastou `E = P.t` joules.

```text
E = P.t
E = V.Q
```

Capacitância:

- Capacitor armazena carga quando existe tensão entre suas placas.
- Em circuitos digitais, fios, portas e transistores têm capacitâncias parasitas.
- Mudar um nó de `0` para `1` exige carregar capacitâncias.
- Quanto maior a capacitância, maior o atraso e maior a energia gasta para chavear.

```text
Q = C.V
Ecapacitor = 1/2.C.V^2
```

Ligação com CMOS:

- Um nó digital em `0` está próximo de `GND`.
- Um nó digital em `1` está próximo de `VDD`.
- Quando o nó muda de `0` para `1`, a capacitância do nó é carregada.
- Quando muda de `1` para `0`, a capacitância descarrega.
- A potência dinâmica cresce com capacitância, frequência, atividade de chaveamento e `VDD^2`.

```text
Pdin ≈ alpha.C.VDD^2.f
```

Onde:

```text
alpha → fator de atividade, quanto o nó chaveia
C     → capacitância efetiva
VDD   → tensão de alimentação
f     → frequência de clock/chaveamento
```

Resumo mental:

```text
potencial → nível elétrico de um ponto
tensão    → diferença entre potenciais
corrente  → carga passando por tempo
potência  → energia por tempo
energia   → trabalho/consumo acumulado
```

Fórmulas básicas:

```text
V → tensão
I → corrente
P → potência
E → energia

P = V.I
E = P.t
Q = C.V
```

MOS digital:

- NMOS liga com gate em `1`.
- PMOS liga com gate em `0`.
- NMOS é bom para puxar para `0`.
- PMOS é bom para puxar para `1`.

Inversor CMOS:

- PMOS em cima.
- NMOS embaixo.
- Entrada 0 → PMOS liga, NMOS desliga → saída 1.
- Entrada 1 → PMOS desliga, NMOS liga → saída 0.

Pegadinhas:

- Desligado significa alta impedância, não necessariamente `0`.
- NMOS isolado passa `0` forte e `1` fraco.
- PMOS isolado passa `1` forte e `0` fraco.

---

# 21. CMOS combinacional

Ideia central: CMOS usa rede pull-up PMOS e rede pull-down NMOS complementares.

Redes:

```text
pull-up   → PMOS → puxa para VDD
pull-down → NMOS → puxa para GND
```

Dualidade:

- Série no NMOS vira paralelo no PMOS.
- Paralelo no NMOS vira série no PMOS.

Portas:

```text
NAND CMOS:
NMOS em série
PMOS em paralelo

NOR CMOS:
NMOS em paralelo
PMOS em série
```

AND e OR:

- AND = NAND + inversor.
- OR = NOR + inversor.

Função da saída:

- Se a rede pull-down conduz quando `G=1`, a saída implementa `F=G'`.

Pegadinhas:

- Rede NMOS conduzindo puxa a saída para `0`.
- Saída CMOS é o complemento da condição de condução do pull-down.
- Não desenhar PMOS igual NMOS; a rede PMOS é dual.

---

# 22. Potência, atraso, caminho crítico, glitches e hazards

Ideia central: circuitos digitais consomem e atrasam, especialmente quando chaveiam.

Potência dinâmica:

```text
Pdin ≈ alpha.C.VDD^2.f
```

Onde:

```text
alpha → atividade
C     → capacitância
VDD   → tensão
f     → frequência
```

Energia:

```text
energia retirada da fonte por carga completa ≈ C.V^2
energia armazenada no capacitor = 1/2.C.V^2
```

Atraso:

- Maior capacitância → maior atraso.
- Fanout maior → maior capacitância.
- Caminho crítico → maior atraso entre registradores.

Glitch e hazard:

- Glitch: pulso temporário indesejado.
- Hazard: condição estrutural que permite glitch.

Tipos de hazard:

- Hazard estático-1: a saída deveria permanecer `1`, mas pulsa para `0`.
- Hazard estático-0: a saída deveria permanecer `0`, mas pulsa para `1`.
- Hazard dinâmico: a saída deveria mudar uma vez, mas oscila mais de uma vez antes de estabilizar.
- Hazard funcional: pode aparecer quando mais de uma entrada muda ao mesmo tempo.

Consenso para hazard estático-1:

```text
F = A'C + AB
termo de consenso = BC
F sem hazard = A'C + AB + BC
```

Ideia do termo de consenso:

- O termo extra pode ser redundante para a função booleana.
- Mesmo redundante, ele cobre a transição perigosa no mapa de Karnaugh.
- Por isso, a expressão mínima nem sempre é a melhor expressão se a prova perguntar sobre hazard.

Pegadinhas:

- `VDD` entra ao quadrado na potência dinâmica.
- Cuidado com `pF`, `fF`, `MHz`, `ns`, `mW`.
- Hazard é a causa; glitch é o efeito.
- Hazard estático fala de saída que deveria ficar constante.
- Hazard dinâmico fala de saída que deveria mudar uma vez, mas muda várias.
- Flip-flop pode ignorar glitch se D estiver estável na janela setup/hold.

---

# 23. Memórias, banco de registradores, ROM, SRAM e DRAM

Ideia central: memória é matriz endereçável de palavras.

Capacidade:

```text
n bits de endereço → 2^n posições
capacidade = posições * bits por palavra
bytes = bits / 8
```

Banco de registradores:

- Pequeno e rápido.
- Usado por processadores.
- Pode ter duas portas de leitura e uma de escrita.
- Normalmente é mais rápido que memória principal.
- Não é a mesma coisa que RAM de dados; fica dentro do datapath/processador.

ROM:

- Não volátil.
- Conteúdo fixo/programado.
- Pode implementar tabela verdade.
- Leitura usa endereço e retorna palavra.
- Escrita não ocorre durante a execução normal, ou é feita por programação/reprogramação.

SRAM:

- Volátil.
- Rápida.
- Não precisa refresh.
- Célula típica usa realimentação, como um latch.
- Boa para caches, bancos pequenos e memórias rápidas.

DRAM:

- Volátil.
- Mais densa.
- Precisa refresh.
- Armazena bit como carga em capacitor.
- Como a carga vaza, precisa ser periodicamente recarregada.
- Costuma ser mais lenta que SRAM, mas ganha em densidade/capacidade.

Pegadinhas:

- Registradores > SRAM > DRAM costuma ser a ordem de velocidade.
- SRAM não precisa refresh, mas ainda é volátil.
- DRAM precisa refresh.
- `4K x 32` significa 4096 palavras de 32 bits.
- Palavra não é necessariamente byte.

---

# 24. Lógica programável: PROM, PLA, PAL, CPLD e FPGA

Ideia central: implementar lógica configurando estruturas programáveis.

PROM:

```text
AND fixo
OR programável
```

- Parece memória/tabela verdade.
- Entradas selecionam endereço.
- Saídas são bits armazenados.

PLA:

```text
AND programável
OR programável
```

- Mais flexível.
- Permite compartilhar termos-produto.

PAL:

```text
AND programável
OR fixo
```

- Menos flexível que PLA.
- Estrutura mais simples.

Comparação rápida:

| Dispositivo | Plano AND | Plano OR | Ideia mental |
|---|---|---|---|
| PROM | fixo | programável | tabela verdade/memória |
| PLA | programável | programável | mais flexível |
| PAL | programável | fixo | mais simples/rápido |

CPLD:

- Bom para controle e glue logic.
- Timing mais previsível.
- Geralmente menor e mais previsível que FPGA.
- Costuma ser usado em lógica de controle, decodificação e integração entre blocos.

FPGA:

- Usa LUTs, FFs e interconexões programáveis.
- Muito flexível.
- Bom para projetos maiores/paralelos.
- Costuma ter blocos dedicados como BRAM, DSP e recursos de clock.
- Muitos FPGAs usam configuração baseada em SRAM, então precisam carregar bitstream ao ligar.

LUT:

```text
LUT de k entradas → 2^k bits de configuração
```

- As entradas da LUT selecionam um endereço.
- O bit armazenado naquele endereço vira a saída.
- Por isso, uma LUT de `k` entradas implementa qualquer função booleana de até `k` variáveis.

HDL e bitstream:

- HDL, como Verilog/VHDL, descreve hardware.
- Síntese transforma HDL em circuito lógico.
- Em FPGA, o circuito é mapeado para LUTs, FFs, BRAMs, DSPs e interconexões.
- Bitstream é o arquivo de configuração que define LUTs, rotas, I/O e blocos internos.
- FPGA não "executa HDL" como uma CPU executa programa; FPGA é configurado para virar hardware.

Pegadinhas:

- PROM é mais parecida com memória.
- PLA/PAL são redes de produtos e somas.
- HDL descreve hardware; não é programa sequencial como Python.
- Bitstream configura o FPGA.
- FPGA baseado em SRAM pode perder configuração quando desliga.
- CPLD costuma ser melhor para lógica de controle previsível; FPGA costuma ser melhor para sistemas maiores.

---

# 25. Algoritmos procedurais, assembly básico e operandos

Ideia central: assembly é uma forma legível de instruções de máquina.

Conceitos:

```text
algoritmo procedural → sequência de passos
instrução → operação + operandos
registrador → armazenamento rápido dentro do processador
imediato → constante dentro da instrução
memória → armazenamento acessado por endereço
label → nome simbólico de um endereço
branch → instrução que muda fluxo
```

Operandos:

```text
R1   → valor do registrador R1
[R1] → valor na memória cujo endereço está em R1
#5   → imediato/constante 5
```

Modelo load/store:

```text
LOAD  → memória para registrador
STORE → registrador para memória
ADD/SUB/AND/OR → operam em registradores
```

Fluxo:

- `if/else` vira comparação + desvio.
- `while/for` vira label + comparação + branch de volta.
- Chamada de função salva retorno; salto simples não salva.

Branch, jump, call e return:

- Label não é instrução; é só um nome para um endereço.
- Branch/desvio altera o PC se uma condição for satisfeita ou, em alguns casos, sempre.
- Jump/salto normalmente altera o PC sem testar condição.
- Call/chamada de função também altera o PC, mas salva endereço de retorno.
- Return volta para o endereço salvo pela chamada.
- Em ARM, `BL` significa branch with link: desvia e salva retorno em `LR`.
- Em ARM, `BX LR` volta para o endereço guardado em `LR`.
- `LR` é link register, registrador usado para guardar retorno.
- Se uma função chama outra função, pode precisar salvar `LR` na pilha antes.

Exemplo mental:

```text
B label   → PC recebe endereço de label
BEQ label → PC recebe label se flag Z indicar igualdade
BL func   → salva retorno em LR e desvia para func
BX LR     → retorna usando o endereço em LR
```

Pegadinhas:

- Imediato não é endereço de memória.
- Registrador não é a memória apontada por ele.
- Após calcular em registrador, precisa `STORE` para salvar na memória.
- Branch não "chama função" por si só; chamada precisa salvar retorno.
- `BL` salva retorno; `B` simples não salva.
- `BX LR` não chama função, ele retorna.
- Leia a ordem destino/fonte da arquitetura usada no enunciado.

---

# 26. Formatos, tipos de instrução e modos de endereçamento

Ideia central: instrução tem campos; modo de endereçamento diz onde está o operando.

Campos:

```text
opcode → operação
rd     → registrador destino
rs/rt  → registradores fonte
imm    → imediato/deslocamento
addr   → endereço/alvo
```

Formatos:

```text
tipo R → registradores
tipo I → imediato ou deslocamento
tipo J → salto/endereço
```

Tipos de instrução:

- Aritméticas: ADD, SUB.
- Lógicas: AND, OR, XOR, NOT.
- Deslocamento: shift left/right.
- Transferência: LOAD, STORE.
- Fluxo: branch, jump, call, return.

Modos de endereçamento:

```text
imediato                 → valor na instrução
registrador              → valor no registrador
direto/absoluto          → endereço na instrução
indireto por registrador → registrador guarda endereço
base + deslocamento      → endereço = base + offset
indexado                 → base + índice, muitas vezes escalado
PC-relative              → alvo = PC + offset
implícito                → operando subentendido
pilha                    → topo da pilha
```

Cálculos:

```text
n bits → 2^n códigos
32 registradores → 5 bits
imediato signed de k bits → -2^(k-1) até 2^(k-1)-1
```

Pegadinhas:

- `LOAD R1, [R2]` usa `R2` como endereço.
- `ADD R1, R2, R3` usa `R2` e `R3` como valores.
- Em vetor de words, índice precisa virar offset em bytes.
- STORE grava memória; normalmente não escreve registrador.
- Branch muda o PC quando a condição é verdadeira.

---

# 27. Datapath e controle

Ideia central: datapath é o caminho dos dados; controle decide quais caminhos ativar.

Blocos:

```text
PC → endereço da próxima instrução
memória de instruções → entrega instrução
banco de registradores → lê/escreve registradores
ULA → opera e calcula endereços
memória de dados → LOAD/STORE
MUX → escolhe caminho
extensor de sinal → aumenta imediato preservando sinal
controle → gera sinais
```

Ciclo clássico de uma instrução:

```text
1. Fetch
2. Decode
3. Execute
4. Memory
5. Writeback
```

O que cada etapa faz:

```text
Fetch     → busca a instrução usando o PC
Decode    → decodifica opcode/campos e lê registradores
Execute   → ULA calcula, opera ou compara
Memory    → acessa memória de dados se precisar
Writeback → escreve resultado no registrador destino se precisar
```

Detalhe mental:

```text
Fetch:      PC → memória de instruções → instrução; PC geralmente vira PC+4
Decode:     controle entende a instrução e lê rs/rt
Execute:    ULA soma, subtrai, compara ou calcula endereço
Memory:     LOAD lê memória; STORE escreve memória
Writeback:  ADD/ADDI/LOAD escrevem registrador; STORE/BEQ/JUMP não
```

Sinais de controle:

Estes nomes são os mais comuns no datapath didático clássico, tipo MIPS/RISC simples. Em outra arquitetura o nome pode mudar, mas a função costuma ser parecida.

```text
RegWrite  → habilita escrita no banco de registradores
RegDst    → escolhe qual campo da instrução é registrador destino
ALUSrc    → escolhe a segunda entrada da ULA: registrador ou imediato
ALUOp     → diz qual operação a ULA deve fazer
MemRead   → habilita leitura da memória de dados
MemWrite  → habilita escrita na memória de dados
MemToReg  → escolhe o que volta ao registrador: ULA ou memória
Branch    → habilita desvio condicional
Jump      → habilita salto incondicional
PCSrc     → escolhe próximo PC: PC+4 ou alvo do branch/jump
ExtOp     → controla extensão de imediato: sinal ou zero, se o datapath tiver isso
```

Observações:

- `RegWrite=1` significa que algum registrador será escrito no fim.
- `MemWrite=1` significa que a memória de dados será alterada.
- `ALUSrc=0`: a ULA recebe dois registradores.
- `ALUSrc=1`: a ULA recebe registrador + imediato/offset.
- `MemToReg=0`: volta resultado da ULA.
- `MemToReg=1`: volta dado lido da memória.
- `Branch` sozinho não muda o PC; normalmente combina com o sinal `Zero` da ULA.
- `Zero` não é comando do controle: é uma saída da ULA usada para decidir branch.
- `X` ou `don't care` significa que tanto faz o valor, porque aquele caminho não será usado.

Sinais típicos por instrução:

| Instrução | RegWrite | RegDst | ALUSrc | ALUOp | MemRead | MemWrite | MemToReg | Branch | Jump |
|---|---:|---|---:|---|---:|---:|---|---:|---:|
| `ADD/SUB/AND/OR` | 1 | `rd` | 0 | operação do `funct` | 0 | 0 | ULA | 0 | 0 |
| `ADDI` | 1 | destino tipo I | 1 | ADD | 0 | 0 | ULA | 0 | 0 |
| `LOAD` | 1 | destino do load | 1 | ADD endereço | 1 | 0 | memória | 0 | 0 |
| `STORE` | 0 | X | 1 | ADD endereço | 0 | 1 | X | 0 | 0 |
| `BEQ` | 0 | X | 0 | SUB/compara | 0 | 0 | X | 1 | 0 |
| `JUMP` | 0 | X | X | X | 0 | 0 | X | 0 | 1 |

Por instrução, em palavras:

```text
ADD/SUB/AND/OR:
lê 2 registradores → ULA opera → escreve registrador

ADDI:
lê registrador → usa imediato → ULA soma → escreve registrador

LOAD:
ULA calcula endereço → MemRead → escreve registrador

STORE:
ULA calcula endereço → MemWrite → não escreve registrador

BEQ:
ULA compara/subtrai → se zero/condição verdadeira, PC muda

JUMP:
PC recebe alvo sem comparação
```

Controle:

- Hardwired: controle por lógica combinacional.
- Microprogramado: controle por microinstruções.
- Ciclo único: tudo em um ciclo longo.
- Multiciclo: divide execução em etapas.
- Pipeline: sobrepõe etapas de instruções diferentes.

Hazards de pipeline:

- Estrutural: recurso disputado.
- Dados: uma instrução depende de resultado anterior.
- Controle: branch/jump altera fluxo.

Pegadinhas:

- Controle não carrega dados; controle liga sinais.
- `RegWrite` escreve registrador; `MemWrite` escreve memória.
- LOAD usa ULA para calcular endereço.
- STORE não faz writeback em registrador.
- BEQ usa ULA para comparar, mas não salva resultado da subtração.
- Memória de instruções não é memória de dados.

---

# Fórmulas e regras que precisam estar automáticas

Bits e contagem:

```text
n bits → 2^n combinações
n variáveis → 2^n linhas
n bits de endereço → 2^n posições
```

Intervalos:

```text
unsigned n bits → 0 até 2^n - 1
signed complemento de 2 → -2^(n-1) até 2^(n-1)-1
```

Complemento de 2:

```text
-X = inverter bits de X + 1
A - B = A + (~B + 1)
```

Somadores:

```text
half-adder:
S = A xor B
Cout = A.B

full-adder:
S = A xor B xor Cin
Cout = A.B + A.Cin + B.Cin

lookahead:
Gi = Ai.Bi
Pi = Ai xor Bi
C(i+1) = Gi + Pi.Ci
```

Temporização:

```text
Tclk ≥ tCQmax + tPDmax + tsetup
tCQmin + tPDmin ≥ thold
Fmax = 1/Tclk_min
```

Potência e energia:

```text
potencial elétrico: U = E/Q
tensão elétrica: Vab = Ua - Ub
corrente elétrica: I = ΔQ/Δt
Lei de Ohm: V = R.I
potência: P = E/t
potência elétrica: P = V.I
potência no resistor: P = I^2.R = V^2/R
energia: E = P.t
energia por carga: E = V.Q
capacitância: Q = C.V
energia no capacitor: Ecapacitor = 1/2.C.V^2
energia retirada da fonte ao carregar nó CMOS: Efonte ≈ C.VDD^2
potência dinâmica CMOS: Pdin ≈ alpha.C.VDD^2.f
```

Como interpretar cada fórmula:

- `U = E/Q`: potencial elétrico é energia por carga. Use para lembrar que "mais volts" significa mais energia disponível por coulomb de carga. Aqui `U` é potencial e `E` é energia.
- `Vab = Ua - Ub`: tensão é diferença de potencial entre dois pontos. Use quando a questão falar "tensão entre A e B"; não existe tensão absoluta sem referência.
- `I = ΔQ/Δt`: corrente é carga passando por tempo. Use para relacionar fluxo de carga com ampere: `1 A = 1 C/s`.
- `V = R.I`: Lei de Ohm para resistor ideal. Use quando houver resistência e quiser ligar tensão, corrente e resistência.
- `P = E/t`: potência é energia por tempo. Use para entender consumo: watt é joule por segundo.
- `P = V.I`: potência elétrica entregue ou consumida por um elemento. Use quando a questão der tensão e corrente.
- `P = I^2.R`: potência dissipada em resistor quando você conhece corrente e resistência. Vem de `P=V.I` junto com `V=R.I`.
- `P = V^2/R`: potência dissipada em resistor quando você conhece tensão e resistência. Também vem de `P=V.I` e `I=V/R`.
- `E = P.t`: energia consumida durante um intervalo de tempo. Use quando a potência fica aproximadamente constante.
- `E = V.Q`: energia associada a mover carga através de uma tensão. Use para ligar carga, tensão e energia.
- `Q = C.V`: carga armazenada em capacitor. Use em nós digitais porque fios e entradas de portas se comportam como capacitâncias.
- `Ecapacitor = 1/2.C.V^2`: energia armazenada no capacitor depois de carregado. Use para energia que fica no nó/capacitor.
- `Efonte ≈ C.VDD^2`: energia retirada da fonte para carregar uma capacitância CMOS de `0` até `VDD`. Parte fica no capacitor e parte é dissipada.
- `Pdin ≈ alpha.C.VDD^2.f`: potência dinâmica média em CMOS. Use para questões de consumo por chaveamento: aumenta com atividade, capacitância, frequência e com o quadrado de `VDD`.

Por que isso cai em Sistemas Digitais:

- Atraso aumenta quando a capacitância carregada é maior.
- Potência dinâmica aparece quando nós digitais mudam de `0` para `1` e de `1` para `0`.
- Reduzir `VDD` reduz bastante a potência dinâmica, porque `VDD` está ao quadrado.
- Aumentar frequência aumenta consumo dinâmico, porque o circuito chaveia mais vezes por segundo.
- Fanout maior costuma aumentar capacitância, atraso e energia por transição.

Memória:

```text
capacidade = posições * bits por palavra
bytes = bits / 8
```

LUT:

```text
LUT de k entradas → 2^k bits
```

---

# Pegadinhas mais importantes para a prova

- Carry não é overflow assinado.
- Signed e unsigned podem inverter comparação.
- `Z` não é `don't care`.
- `Z` é alta impedância; não força `0` nem `1`.
- Ativo baixo faz efeito em `0`.
- Dois dispositivos dirigindo o mesmo barramento podem causar contenção.
- Mintermo é para `1`; maxtermo é para `0`.
- SOP agrupa `1s`; POS agrupa `0s`.
- NAND-NAND combina com SOP; NOR-NOR combina com POS.
- Diagonal não é adjacência em Karnaugh.
- `don't care` só deve ser usado se ajudar.
- Moore depende só de estado; Mealy depende de estado e entrada.
- Latch é sensível a nível; flip-flop é sensível a borda.
- Em FF D, `D = Q+`.
- Setup usa caminho máximo; hold usa caminho mínimo.
- Diminuir frequência ajuda setup, mas não resolve hold diretamente.
- Metastabilidade aparece quando entrada muda perto demais da borda de clock.
- Expoente IEEE armazenado não é expoente real; no simples, bias = 127.
- Expoente 255 com fração diferente de zero é NaN.
- NMOS liga com `1`; PMOS liga com `0`.
- Pull-down conduzindo significa saída em `0`.
- Saída CMOS é complemento da condição do pull-down.
- `VDD` entra ao quadrado em potência dinâmica.
- Hazard é vulnerabilidade; glitch é pulso.
- Hazard estático deveria manter valor; hazard dinâmico deveria mudar uma vez.
- SRAM não precisa refresh, mas é volátil.
- DRAM precisa refresh.
- PROM parece tabela/memória; PLA/PAL parecem rede AND/OR.
- LUT de `k` entradas precisa `2^k` bits de configuração.
- HDL descreve hardware; bitstream configura FPGA.
- Em assembly, registrador, imediato e memória são coisas diferentes.
- LOAD lê memória; STORE escreve memória.
- Branch muda PC; label apenas nomeia endereço.
- CALL/BL salva retorno; BR/B não salva retorno.
- `BX LR` retorna usando o endereço salvo em `LR`.
- Datapath move dados; controle só escolhe sinais/caminhos.

---

# Ordem recomendada para retomar agora

Se ficou alguns dias só no Anki, volte assim:

```text
Dia 1 → aulas 15, 20, 21, 22: timing, potência, CMOS e hazard
Dia 2 → aulas 17, 18, 19: ponto fixo/flutuante, somadores, ULA e flags
Dia 3 → aulas 25, 26, 27: assembly, endereçamento, datapath
Dia 4 → aulas 7, 8, 9, 16: Karnaugh e FSM
Dia 5 → simulado misturado difícil + correção
```

Regra prática:

```text
se você lembra lendo, mas erra questão, não falta aula: falta treino ativo
```





