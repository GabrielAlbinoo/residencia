# Revisão Essencial - Aulas 1 a 27

Atualizado em: 03/06/2026

Objetivo: revisar só o que é essencial mesmo. Use este arquivo quando quiser passar por todos os assuntos sem reler as aulas completas.

Regra de uso:

- Se souber explicar o bullet sem olhar, siga.
- Se travar em um bullet, volte para a aula correspondente.
- Em questão de múltipla escolha, vale usar atalho: converter, testar alternativa, montar tabela pequena ou eliminar respostas impossíveis.

---

# Aula 1 - Binários, Operações, Sinal E Complemento De 2

- Cada posição binária tem peso de potência de 2: `... 8, 4, 2, 1`.
- Conversão binário -> decimal: some apenas os pesos onde o bit é `1`.
- Conversão decimal -> binário: divida por `2` e leia os restos de baixo para cima.
- Soma binária: `0+0=0`, `0+1=1`, `1+1=10`, `1+1+1=11`.
- Subtração binária pode ser feita por empréstimo ou por complemento de 2.
- Complemento de 2: inverte os bits e soma `1`.
- Com `n` bits sem sinal: intervalo `0` até `2^n - 1`.
- Com `n` bits em complemento de 2: intervalo `-2^(n-1)` até `2^(n-1)-1`.
- Em complemento de 2, o bit mais significativo indica sinal: `0` positivo, `1` negativo.
- Overflow com sinal ocorre quando soma dois positivos e dá negativo, ou soma dois negativos e dá positivo.
- Multiplicar por `10₂` é deslocar para a esquerda; dividir por `10₂` é deslocar para a direita.
- Em múltipla escolha, para multiplicação/divisão binária simples, pode converter para decimal, operar e voltar.
- Cuidado: `1111` pode ser `15` sem sinal ou `-1` em complemento de 2 com 4 bits.

---

# Aula 2 - Códigos Binários, BCD, Gray, ASCII E Checksum

- BCD representa cada dígito decimal separadamente em 4 bits.
- Em BCD, `59` vira `0101 1001`, não o binário puro de 59.
- BCD válido usa apenas padrões de `0000` a `1001`; de `1010` a `1111` são inválidos.
- Código Gray muda apenas 1 bit entre valores consecutivos.
- Binário -> Gray: primeiro bit repete; os demais são XOR entre bits binários vizinhos.
- Gray é útil para reduzir erro em transições, sensores e contadores.
- ASCII representa caracteres como números binários.
- Bit de paridade detecta quantidade ímpar/par de `1`s, mas não detecta todo tipo de erro.
- Checksum simples por soma pode falhar se os dados mudam mas a soma continua igual.
- Não confundir código numérico com valor numérico: BCD, Gray e ASCII codificam informação de formas diferentes.

---

# Aula 3 - Portas Lógicas E Operações Booleanas

- AND (`A.B`) só dá `1` quando todas as entradas são `1`.
- OR (`A+B`) dá `1` quando pelo menos uma entrada é `1`.
- NOT (`A'`) inverte: `0 -> 1`, `1 -> 0`.
- NAND é AND negado; NOR é OR negado.
- XOR dá `1` quando as entradas são diferentes.
- XNOR dá `1` quando as entradas são iguais.
- Precedência usual: NOT primeiro, depois AND, depois OR.
- Avaliar expressão é substituir `0/1` e calcular a saída.
- Converter expressão -> circuito: cada operação vira uma porta.
- Converter circuito -> expressão: escreva a saída de cada porta intermediária.
- NAND e NOR são portas universais: dá para montar qualquer lógica só com uma delas.

---

# Aula 4 - Álgebra Booleana, Axiomas, Leis E Simplificação

- Identidade: `A+0=A`, `A.1=A`.
- Dominação: `A+1=1`, `A.0=0`.
- Idempotência: `A+A=A`, `A.A=A`.
- Complemento: `A+A'=1`, `A.A'=0`.
- Dupla negação: `(A')'=A`.
- Absorção: `A + A.B = A`.
- Absorção: `A.(A+B)=A`.
- Distributiva comum: `A.(B+C)=A.B + A.C`.
- Distributiva booleana que surpreende: `A + B.C = (A+B).(A+C)`.
- Dualidade: trocar `+` por `.`, `0` por `1`, e vice-versa, gera uma lei dual válida.
- Simplificação serve para reduzir portas, custo e chance de erro.

---

# Aula 5 - De Morgan, Dualidade, NAND, NOR E Simplificação

- De Morgan 1: `(A.B)' = A' + B'`.
- De Morgan 2: `(A+B)' = A'.B'`.
- Regra mental: ao negar um bloco, negue os termos e troque AND por OR.
- Se a variável já está negada, ao negar de novo ela volta: `(A')'=A`.
- Exemplo essencial: `(A + B')' = A'.B`.
- NAND implementa `AND` seguido de NOT.
- NOR implementa `OR` seguido de NOT.
- Para empurrar bolhas em circuito, use De Morgan.
- Para montar só com NAND ou só com NOR, use dupla negação e De Morgan.
- Cuidado para não esquecer que a negação precisa estar no bloco inteiro.

---

# Aula 6 - Valores Lógicos, Formas Canônicas, Mintermos E Maxtermos

- Com `n` variáveis, a tabela verdade tem `2^n` linhas.
- Mintermo representa uma linha onde a função vale `1`.
- Maxtermo representa uma linha onde a função vale `0`.
- SOP é soma de produtos: OR de termos AND.
- POS é produto de somas: AND de termos OR.
- Forma canônica usa todas as variáveis em cada termo.
- `Σm(...)` lista os mintermos onde `F=1`.
- `ΠM(...)` lista os maxtermos onde `F=0`.
- Para mintermo: variável vale `1` normal; vale `0` negada.
- Para maxtermo: variável vale `0` normal; vale `1` negada.
- Se a tabela tem poucos `1`s, SOP pode ser mais direto.
- Se a tabela tem poucos `0`s, POS pode ser mais direto.

---

# Aula 7 - Mapas De Karnaugh De 2 E 3 Variáveis

- Karnaugh minimiza expressão usando adjacência visual.
- Células adjacentes diferem em apenas 1 variável.
- A ordem do mapa usa Gray Code, não binário comum.
- Grupos devem ter tamanho potência de 2: `1, 2, 4, 8...`.
- Faça os maiores grupos possíveis.
- Grupos podem sobrepor se isso ajuda a simplificar.
- Bordas do mapa se conectam: esquerda com direita, topo com baixo quando aplicável.
- Em SOP, agrupe `1`s.
- Em POS, agrupe `0`s.
- Variável que muda dentro do grupo desaparece.
- Variável que permanece igual fica na expressão.
- Não agrupar diagonal.

---

# Aula 8 - Karnaugh De 4 Variáveis E Don't Care

- Mapa de 4 variáveis tem 16 células.
- Linhas e colunas seguem ordem Gray: `00, 01, 11, 10`.
- Agrupe `1`s para SOP; agrupe `0`s para POS.
- Grupos possíveis: `1, 2, 4, 8, 16`.
- Quanto maior o grupo, menor o termo resultante.
- `Don't care` (`X`) pode ser usado como `1` ou `0` se ajudar.
- Não é obrigatório usar todos os `X`.
- Use `X` apenas quando ele aumenta grupo ou melhora simplificação.
- Bordas e cantos também podem se conectar.
- Um grupo de 4 elimina 2 variáveis; grupo de 8 elimina 3 variáveis.
- A expressão mínima deve cobrir todos os `1`s essenciais no SOP.
- Cuidado para não criar grupo inválido só porque as células parecem próximas.

---

# Aula 9 - Síntese Lógica Completa: SOP, POS, NAND E NOR

- Síntese lógica é transformar uma especificação/tabela em circuito.
- Passo seguro: tabela verdade -> mintermos/maxtermos -> simplificação -> circuito.
- SOP combina bem com implementação AND-OR.
- POS combina bem com implementação OR-AND.
- NAND é natural para implementar SOP usando De Morgan.
- NOR é natural para implementar POS usando De Morgan.
- Não confundir expressão canônica com expressão minimizada.
- Karnaugh reduz expressão antes de montar o circuito.
- Se pedir circuito só com NAND, pense em dupla negação.
- Se pedir circuito só com NOR, pense em POS e De Morgan.
- Sempre confira se a expressão final gera os mesmos `1`s da tabela.

---

# Aula 10 - MUX, DEMUX, Decoder, Encoder E Blocos Combinacionais

- MUX seleciona uma entrada entre várias.
- Em um MUX `2^n -> 1`, são necessários `n` bits de seleção.
- DEMUX recebe uma entrada e distribui para uma saída escolhida.
- Decoder transforma código binário em uma saída ativa.
- Decoder `n -> 2^n`: `n` entradas, até `2^n` saídas.
- Encoder faz o inverso: várias entradas -> código binário.
- Priority encoder resolve conflito quando mais de uma entrada está ativa.
- Comparador verifica igualdade ou magnitude: `A=B`, `A>B`, `A<B`.
- MUX pode implementar função lógica escolhendo `0`, `1`, variáveis ou complementos nas entradas.
- Decoder é muito usado para seleção de endereço e ativação de linhas.
- Blocos combinacionais não guardam estado: saída depende apenas das entradas atuais.

---

# Aula 11 - Introdução A FSM, Moore E Mealy

- FSM é máquina de estados finitos.
- FSM tem estado atual, entrada, próximo estado e saída.
- Estado guarda memória do que aconteceu antes.
- Transição define para onde a máquina vai.
- Moore: saída depende apenas do estado atual.
- Mealy: saída depende do estado atual e da entrada.
- Moore costuma ser mais estável, mas pode responder um ciclo depois.
- Mealy costuma responder mais rápido, mas pode ser mais sensível a mudanças de entrada.
- Diagrama de estados mostra estados e transições.
- Tabela de estados organiza entrada, estado atual, próximo estado e saída.
- FSM precisa de flip-flops para guardar estado.

---

# Aula 12 - Estabilidade, Latch SR E Latch D

- Latch é elemento de memória sensível a nível.
- Latch SR guarda estado usando realimentação.
- No latch SR com NOR, `S=1` seta e `R=1` reseta.
- Condição proibida no SR depende da implementação, mas a ideia é evitar comando contraditório.
- Estado estável é aquele que se mantém por realimentação.
- Latch D evita entrada inválida do SR usando uma única entrada de dado.
- Latch D é transparente quando enable está ativo.
- Quando enable desativa, o latch mantém o valor anterior.
- Latch sensível a nível não é igual a flip-flop sensível a borda.
- Cuidado com a palavra "transparente": saída acompanha entrada enquanto habilitado.

---

# Aula 13 - Flip-Flops E Registradores

- Flip-flop guarda 1 bit.
- Flip-flop é acionado por borda de clock, não por nível durante todo o tempo.
- Flip-flop D copia `D` para `Q` na borda ativa.
- Flip-flop JK evita a condição inválida do SR e pode alternar.
- Flip-flop T alterna quando `T=1`.
- Registrador é conjunto de flip-flops.
- Registrador de `n` bits guarda `n` bits.
- Enable controla se o registrador carrega valor novo ou mantém o antigo.
- Reset coloca o flip-flop/registrador em valor conhecido.
- Registradores são base para estado, contadores, memória pequena e datapath.

---

# Aula 14 - Contadores Assíncronos, Síncronos E Divisão De Frequência

- Contador passa por uma sequência de estados.
- Com `n` flip-flops, há até `2^n` estados.
- Contador módulo `M` tem `M` estados válidos.
- Contador assíncrono tem clock propagando de FF para FF.
- Contador síncrono usa o mesmo clock em todos os flip-flops.
- Contador síncrono tende a ser mais rápido e previsível.
- Contador assíncrono acumula atraso de propagação.
- Divisão de frequência: cada flip-flop tipo T pode dividir por 2.
- Para contar até certo valor, pode-se resetar ao atingir o estado limite.
- Cuidado: para módulo 10, precisa 4 FFs, mas estados `1010` a `1111` são inválidos.
- Em prova, calcule `2^n` e veja se cobre o módulo pedido.

---

# Aula 15 - Temporização Sequencial, Setup, Hold E Caminho Crítico

- Setup time: dado deve estar estável antes da borda do clock.
- Hold time: dado deve continuar estável depois da borda do clock.
- Clock-to-Q: tempo para saída do FF mudar após a borda.
- Caminho crítico é o caminho de maior atraso.
- Frequência máxima é limitada pelo caminho crítico.
- Fórmula essencial: `Tclock >= Tclk-Q + Tcomb + Tsetup`.
- Se `Tclock` é pequeno demais, há violação de setup.
- Hold está ligado ao caminho mínimo, não ao caminho máximo.
- Mais lógica combinacional entre registradores aumenta `Tcomb`.
- Pipeline reduz caminho combinacional por estágio, mas aumenta latência.
- Em questão de prova, some atrasos do caminho e compare com o período do clock.

---

# Aula 16 - Síntese De FSM Com Flip-Flops D

- Para sintetizar FSM, comece pela tabela de estados.
- Escolha uma codificação binária para os estados.
- Com `k` estados, precisa de `ceil(log2(k))` flip-flops.
- Estado atual vem das saídas dos flip-flops.
- Próximo estado vira as entradas `D` dos flip-flops.
- Para FF-D: `D = próximo valor de Q`.
- Monte equações de próximo estado para cada bit de estado.
- Monte equações de saída separadamente.
- Moore: saída depende dos bits de estado.
- Mealy: saída depende dos bits de estado e das entradas.
- Estados não usados podem ser tratados como don't care, se a questão permitir.
- Sempre confira se a máquina vai para o próximo estado correto em cada entrada.

---

# Aula 17 - Ponto Fixo E Ponto Flutuante

- Fração binária usa pesos `1/2`, `1/4`, `1/8`, `1/16`...
- Ponto fixo tem posição fixa para a vírgula/ponto.
- Formato `Qm.n`: `m` bits para parte inteira/sinal conforme convenção e `n` bits fracionários.
- Em ponto fixo, o valor armazenado é um inteiro escalado.
- Mais bits fracionários aumentam precisão.
- Menos bits inteiros reduzem faixa.
- Ponto flutuante separa sinal, expoente e mantissa/significando.
- Normalização deixa o número em forma padronizada.
- Expoente controla escala; mantissa controla precisão.
- Overflow: número grande demais para representar.
- Underflow: número pequeno demais, próximo de zero.
- Ponto flutuante pode ter erro de arredondamento.

---

# Aula 18 - Somadores

- Half-adder soma 2 bits: entradas `A`, `B`; saídas `S`, `Cout`.
- Half-adder: `S = A XOR B`.
- Half-adder: `Cout = A.B`.
- Full-adder soma `A`, `B` e `Cin`.
- Full-adder: `S = A XOR B XOR Cin`.
- Full-adder gera `Cout` quando pelo menos duas entradas são `1`.
- Ripple-carry liga o carry de um full-adder no próximo.
- Ripple-carry é simples, mas o atraso cresce com o número de bits.
- Carry look-ahead tenta antecipar carries para reduzir atraso.
- Carry é importante para aritmética sem sinal.
- Overflow é importante para aritmética com sinal.
- Carry e overflow não são a mesma coisa.

---

# Aula 19 - Subtrator, Comparador, Shifter E ULA

- Subtrator pode ser feito com borrow ou usando complemento de 2.
- Subtração por complemento de 2: `A - B = A + (complemento de 2 de B)`.
- Para subtrair com somador, inverta `B` e coloque `Cin=1`.
- Comparador verifica igualdade e ordem entre valores.
- Igualdade bit a bit pode usar XNOR em todos os bits e depois AND.
- Shifter lógico insere `0` ao deslocar.
- Shifter aritmético à direita preserva bit de sinal.
- Deslocar esquerda equivale a multiplicar por 2, se não houver overflow.
- Deslocar direita equivale a dividir por 2, com cuidado em números com sinal.
- ULA recebe operandos, controle da operação e às vezes `Cin`.
- ULA devolve resultado e flags.
- Flags essenciais: zero, negativo/sinal, carry e overflow.
- Flags normalmente são saídas; `Cin` pode ser entrada auxiliar.

---

# Aula 20 - Física Básica E Transistores MOS

- Tensão é diferença de potencial.
- Corrente é fluxo de carga.
- Potência relaciona energia por tempo.
- Em digital, níveis lógicos representam `0` e `1`, não valores analógicos perfeitos.
- Transistor MOS pode ser pensado como chave controlada por tensão.
- NMOS conduz quando gate recebe `1`.
- PMOS conduz quando gate recebe `0`.
- Pull-up puxa saída para `VDD`.
- Pull-down puxa saída para `GND`.
- Inversor CMOS usa PMOS em cima e NMOS embaixo.
- Entrada `0`: PMOS liga, NMOS desliga, saída `1`.
- Entrada `1`: PMOS desliga, NMOS liga, saída `0`.
- CMOS ideal tem baixo consumo estático porque não há caminho direto permanente de `VDD` para `GND`.

---

# Aula 21 - CMOS Combinacional

- NMOS fica na rede pull-down.
- PMOS fica na rede pull-up.
- Pull-down ligado força saída `0`.
- Pull-up ligado força saída `1`.
- Redes pull-up e pull-down são duais.
- NMOS em série implementa condição AND para puxar para baixo.
- NMOS em paralelo implementa condição OR para puxar para baixo.
- PMOS faz a estrutura dual da rede NMOS.
- NAND CMOS: NMOS em série, PMOS em paralelo.
- NOR CMOS: NMOS em paralelo, PMOS em série.
- Se a rede pull-down conduz quando `G=1`, então a saída é `Y=G'`.
- CMOS normalmente implementa funções invertidas de forma natural, como NAND e NOR.

---

# Aula 22 - Potência, Atraso, Caminho Crítico Físico E Hazards

- Potência estática é consumo quando o circuito está parado.
- CMOS ideal tem potência estática muito baixa.
- Potência dinâmica ocorre ao carregar/descarregar capacitâncias.
- Fórmula mental: `Pdinâmica ≈ alfa . C . VDD^2 . f`.
- Aumentar `VDD` pesa muito porque aparece ao quadrado.
- Fanout maior aumenta capacitância de carga.
- Mais capacitância aumenta atraso e potência.
- Atraso de propagação é o tempo para mudança na entrada aparecer na saída.
- Caminho crítico é o maior atraso combinacional.
- Hazard estático-1: saída deveria ficar `1`, mas pulsa para `0`.
- Hazard estático-0: saída deveria ficar `0`, mas pulsa para `1`.
- Hazard dinâmico: saída deveria mudar uma vez, mas oscila.
- Termo de consenso ajuda a remover hazard.
- Consenso em `A.B + A'.C` é `B.C`.

---

# Aula 23 - Memórias, Banco De Registradores, ROM, SRAM E DRAM

- Memória armazena bits.
- Endereço escolhe a posição acessada.
- Palavra é a quantidade de bits por posição.
- Com `n` bits de endereço, há `2^n` posições.
- Capacidade = posições `x` bits por palavra.
- Leitura: endereço entra, dado sai.
- Escrita: endereço + dado + write enable gravam valor.
- Banco de registradores é pequeno e muito rápido.
- ROM é não volátil e usada para conteúdo fixo/tabela.
- RAM é volátil e permite leitura/escrita.
- SRAM é rápida, volátil e não precisa de refresh.
- DRAM é mais densa, volátil e precisa de refresh.
- Registradores são mais rápidos que SRAM, que é mais rápida que DRAM.
- ROM pode implementar tabela verdade: entradas viram endereço, saídas viram palavra.

---

# Aula 24 - Lógica Programável, PROM, PLA, PAL, CPLD E FPGA

- Lógica programável permite configurar hardware depois da fabricação.
- PROM funciona como tabela verdade gravada.
- PROM: plano AND fixo, plano OR programável.
- PLA: plano AND programável, plano OR programável.
- PAL: plano AND programável, plano OR fixo.
- PLA é mais flexível que PAL.
- PAL tende a ser mais simples/rápida, mas menos flexível.
- CPLD é bom para lógica de controle e glue logic.
- FPGA é bom para projetos maiores, paralelos e reconfiguráveis.
- LUT é uma pequena tabela que implementa função lógica.
- LUT de `k` entradas tem `2^k` posições.
- LUT de `k` entradas implementa qualquer função de até `k` variáveis.
- FPGA possui LUTs, flip-flops, blocos lógicos e interconexões programáveis.
- Bitstream configura LUTs, conexões, I/O e recursos internos.
- FPGA baseado em SRAM perde configuração ao desligar e precisa recarregar bitstream.
- ASIC é menos flexível, mas tende a ser mais eficiente em grande volume.

---

# Aula 25 - Algoritmos Procedurais, Assembly Básico E Operandos

- Arquitetura de computadores é a interface entre software e hardware.
- Algoritmo vira instruções; instruções viram operações no datapath.
- Assembly é representação legível de instruções de máquina.
- CPU trabalha com registradores, memória, ULA, controle e instruções.
- Registradores são armazenamento rápido dentro do processador.
- Operando pode ser registrador, imediato ou dado em memória.
- Imediato é constante escrita na própria instrução.
- `LOAD` traz dado da memória para registrador.
- `STORE` salva dado de registrador na memória.
- `ADD R1, R2, R3` significa: `R1 = R2 + R3`.
- ULA executa operações aritméticas/lógicas comandadas pela unidade de controle.
- Instrução geralmente possui opcode e campos de operandos.
- Memória é mais lenta que registrador; por isso registradores são usados para cálculo.
- Em linguagem procedural, variáveis viram posições de memória ou registradores.
- Desvio/branch altera o fluxo do programa.

---

# Aula 26 - Formatos, Tipos De Instrução E Modos De Endereçamento

- Opcode é o campo que diz qual operação a CPU deve executar.
- Registrador fonte é lido; registrador destino recebe resultado.
- Imediato é uma constante codificada dentro da própria instrução.
- Formato de instrução é a divisão dos bits em campos: opcode, registradores, imediato, endereço etc.
- Tipo R usa registradores: `rd = rs1 operação rs2`.
- Tipo I usa imediato/deslocamento: `rd = rs1 operação imediato` ou acesso base + offset.
- Tipo J/desvio altera o PC em vez de escrever resultado comum.
- `LOAD` lê memória para registrador.
- `STORE` escreve registrador na memória.
- Endereçamento imediato: o valor está na instrução.
- Endereçamento por registrador: o valor está no registrador.
- Endereçamento direto/absoluto: a instrução contém o endereço de memória.
- Endereçamento indireto por registrador: o registrador guarda o endereço.
- Base + deslocamento: endereço efetivo = registrador base + offset.
- PC-relative: alvo = PC + deslocamento.
- Pegadinha: em `ADD R1,R2,R3`, `R2` é valor; em `LOAD R1,[R2]`, `R2` é endereço.

---

# Aula 27 - Datapath E Controle

- Datapath é o caminho por onde os dados passam no processador.
- Controle é a parte que gera sinais para coordenar o datapath.
- PC guarda o endereço da próxima instrução.
- Memória de instruções entrega a instrução apontada pelo PC.
- Banco de registradores lê operandos e escreve resultados.
- ULA soma, subtrai, faz lógica, calcula endereços e compara valores.
- Memória de dados é usada por `LOAD` e `STORE`.
- MUX escolhe entre caminhos: registrador/imediato, ULA/memória, PC+4/alvo.
- `RegWrite` habilita escrita no banco de registradores.
- `MemRead` habilita leitura da memória de dados.
- `MemWrite` habilita escrita na memória de dados.
- `ALUSrc` escolhe segundo operando da ULA: registrador ou imediato.
- `MemToReg` escolhe se o dado escrito no registrador vem da ULA ou da memória.
- `ADD`: lê dois registradores, usa ULA e escreve registrador.
- `ADDI`: lê registrador, usa imediato, usa ULA e escreve registrador.
- `LOAD`: ULA calcula endereço, memória lê, registrador recebe dado.
- `STORE`: ULA calcula endereço, memória escreve, registrador não recebe resultado.
- `BEQ`: ULA compara/subtrai, usa flag Zero e pode mudar o PC.
- Ciclo único: cada instrução termina em um ciclo longo o suficiente para a pior instrução.
- Multiciclo: instrução é dividida em etapas e controle pode ser uma FSM.
- Pipeline sobrepõe etapas de instruções diferentes para aumentar vazão.

---

# Fórmulas E Expressões Que Preciso Memorizar

## Potências De 2 E Contagem

- `n` bits geram `2^n` combinações.
- Tabela verdade com `n` variáveis tem `2^n` linhas.
- Decoder `n -> 2^n`: `n` entradas selecionam até `2^n` saídas.
- MUX `2^n -> 1`: precisa de `n` bits de seleção.
- `n` flip-flops guardam até `2^n` estados.
- `n` bits de endereço acessam `2^n` posições de memória.
- LUT de `k` entradas tem `2^k` posições.
- Para selecionar `N` registradores, precisa de `log2(N)` bits, arredondando para cima.

## Intervalos Numéricos

- Sem sinal com `n` bits:

```text
0 até 2^n - 1
```

- Complemento de 2 com `n` bits:

```text
-2^(n-1) até 2^(n-1)-1
```

- Imediato com sinal de `k` bits em complemento de 2:

```text
-2^(k-1) até 2^(k-1)-1
```

- Imediato sem sinal de `k` bits:

```text
0 até 2^k - 1
```

## Conversão E Códigos

- Binário fracionário:

```text
0,abc₂ = a/2 + b/4 + c/8
```

- Decimal fracionário para binário:

```text
multiplica a parte fracionária por 2 e pega as partes inteiras
```

- Binário para Gray:

```text
G primeiro = B primeiro
G próximo = XOR entre bits binários vizinhos
```

- Complemento de 2:

```text
inverte bits + 1
```

## Álgebra Booleana Essencial

- Identidade:

```text
A + 0 = A
A . 1 = A
```

- Dominação:

```text
A + 1 = 1
A . 0 = 0
```

- Complemento:

```text
A + A' = 1
A . A' = 0
```

- Idempotência:

```text
A + A = A
A . A = A
```

- Absorção:

```text
A + A.B = A
A.(A+B) = A
```

- Distributiva comum:

```text
A.(B+C) = A.B + A.C
```

- Distributiva booleana importante:

```text
A + B.C = (A+B).(A+C)
```

- De Morgan:

```text
(A.B)' = A' + B'
(A+B)' = A'.B'
```

- Consenso para hazard estático-1:

```text
A.B + A'.C -> consenso B.C
```

- Consenso para POS:

```text
(A+B)(A'+C) -> consenso (B+C)
```

## Formas Canônicas

- SOP:

```text
SOP = soma de produtos
agrupar 1s
notação Σm(...)
```

- POS:

```text
POS = produto de somas
agrupar 0s
notação ΠM(...)
```

- Associação com portas:

```text
SOP -> AND/OR -> NAND-NAND
POS -> OR/AND -> NOR-NOR
```

- Inversão com portas universais:

```text
A' = A NAND A
A' = A NOR A
```

## Somadores, Subtratores E ULA

- Half-adder:

```text
S = A XOR B
Cout = A.B
```

- Full-adder:

```text
S = A XOR B XOR Cin
Cout = A.B + A.Cin + B.Cin
```

- Gerar carry:

```text
G = A.B
```

- Propagar carry:

```text
P = A XOR B
```

- Subtrator half-subtractor:

```text
D = A XOR B
Bout = A'.B
```

- Subtração por complemento de 2:

```text
A - B = A + B' + 1
```

- Comparador de 1 bit:

```text
A > B -> A.B'
A < B -> A'.B
A = B -> A'B' + AB = XNOR
```

- Zero flag:

```text
Z = NOR de todos os bits do resultado
```

- Overflow em soma com sinal:

```text
mesmo sinal nas entradas e sinal diferente no resultado
```

## Temporização

- Fórmula principal:

```text
Tclock >= Tclk-Q(max) + Tcomb(max) + Tsetup
```

- Frequência máxima:

```text
Fmax = 1 / Tclock
```

- Em ns para MHz:

```text
Fmax(MHz) = 1000 / Tclock(ns)
```

- Setup:

```text
dado estável antes da borda do clock
```

- Hold:

```text
dado estável depois da borda do clock
```

- Caminho crítico:

```text
maior atraso
limita Fmax
```

## Ponto Fixo E Ponto Flutuante

- Valor em ponto fixo:

```text
valor real = inteiro armazenado / 2^n
```

- Resolução em `Qm.n`:

```text
resolução = 1 / 2^n
```

- IEEE 754 simples:

```text
bias = 127
expoente armazenado = expoente real + 127
expoente real = expoente armazenado - 127
```

- Normalização binária:

```text
1.fração x 2^expoente
```

## Física, CMOS, Potência E Energia

- Potência elétrica:

```text
P = V . I
```

- Energia:

```text
E = P . t
```

- Potência dinâmica em CMOS:

```text
Pdinâmica ≈ alfa . C . VDD^2 . f
```

- NMOS/PMOS:

```text
NMOS liga com gate = 1
PMOS liga com gate = 0
```

- Pull-up / pull-down:

```text
PMOS -> pull-up -> VDD -> 1
NMOS -> pull-down -> GND -> 0
```

- Inversor CMOS:

```text
A=0 -> PMOS ligado, NMOS desligado -> Y=1
A=1 -> PMOS desligado, NMOS ligado -> Y=0
```

- NAND CMOS:

```text
NMOS em série
PMOS em paralelo
```

- NOR CMOS:

```text
NMOS em paralelo
PMOS em série
```

## Memória E Lógica Programável

- Capacidade de memória:

```text
capacidade em bits = 2^n . largura_da_palavra
```

- Se palavra tem 8 bits:

```text
1 palavra = 1 byte
```

- ROM como tabela verdade:

```text
entradas -> endereço
saídas -> palavra armazenada
```

- PROM/PLA/PAL:

```text
PROM -> AND fixo, OR programável
PLA  -> AND programável, OR programável
PAL  -> AND programável, OR fixo
```

- LUT:

```text
LUT de k entradas -> 2^k posições
LUT de k entradas -> qualquer função de até k variáveis
```

## Assembly E Formatos De Instrução

- Instrução tipo R:

```text
rd = rs1 operação rs2
```

- Exemplo:

```text
ADD R1, R2, R3 -> R1 = R2 + R3
```

- Instrução tipo I:

```text
rd = rs1 operação imediato
```

- Exemplo:

```text
ADDI R1, R2, 5 -> R1 = R2 + 5
```

- LOAD:

```text
LOAD R1, [R2 + offset] -> R1 = Mem[R2 + offset]
```

- STORE:

```text
STORE [R2 + offset], R1 -> Mem[R2 + offset] = R1
```

- Branch:

```text
BEQ R1, R2, alvo -> se R1 == R2, PC = alvo
```

## Datapath E Controle

- Ideia central:

```text
datapath -> caminho dos dados
controle -> sinais que comandam o caminho
```

- PC normal:

```text
PC próximo = PC + tamanho_da_instrução
```

- Branch conceitual:

```text
se condição verdadeira -> PC = alvo
senão -> PC = PC + próxima instrução
```

- Base + deslocamento em LOAD/STORE:

```text
endereço efetivo = registrador_base + offset
```

- LOAD:

```text
RegWrite = 1
MemRead = 1
MemWrite = 0
MemToReg = 1
ALUSrc = 1
ULA = ADD para calcular endereço
```

- STORE:

```text
RegWrite = 0
MemRead = 0
MemWrite = 1
ALUSrc = 1
ULA = ADD para calcular endereço
```

- ADD tipo R:

```text
RegWrite = 1
ALUSrc = 0
MemRead = 0
MemWrite = 0
MemToReg = 0
ULA = operação do opcode/funct
```

- BEQ:

```text
RegWrite = 0
ALUSrc = 0
MemRead = 0
MemWrite = 0
Branch = 1
ULA = SUB para comparar
```

- Decisão do branch:

```text
Branch = 1 e Zero = 1 -> PC vai para alvo
```

---

# Revisão Ultra-Rápida Antes De Simulado

- `2^n` aparece em tabela verdade, endereços, estados, decoders e LUTs.
- AND = todas verdadeiras; OR = pelo menos uma; XOR = diferentes.
- De Morgan: nega termos e troca AND/OR.
- Complemento de 2: inverte e soma `1`.
- Carry não é overflow.
- Mintermo é linha de `1`; maxtermo é linha de `0`.
- Karnaugh: grupos potência de 2, maiores possíveis, sem diagonal.
- MUX seleciona; DEMUX distribui; decoder ativa linha; encoder codifica.
- Moore depende só do estado; Mealy depende de estado e entrada.
- Latch é sensível a nível; flip-flop é sensível a borda.
- Setup antes da borda; hold depois da borda.
- Caminho crítico limita frequência máxima.
- Half-adder não tem `Cin`; full-adder tem `Cin`.
- ULA recebe operandos + controle e devolve resultado + flags.
- NMOS liga com `1`; PMOS liga com `0`.
- NAND CMOS: NMOS série, PMOS paralelo.
- NOR CMOS: NMOS paralelo, PMOS série.
- Potência dinâmica cresce com `C`, `f`, atividade e `VDD^2`.
- SRAM não precisa de refresh; DRAM precisa.
- PROM/ROM pode implementar tabela verdade.
- PLA é mais flexível que PAL.
- LUT de `k` entradas tem `2^k` posições.
- FPGA configura hardware; CPU executa instruções.
- Tipo R usa registradores; tipo I usa imediato/deslocamento.
- `LOAD` lê memória; `STORE` escreve memória.
- Datapath carrega dados; controle gera sinais.
- `RegWrite` escreve registrador; `MemWrite` escreve memória.
- `BEQ` usa comparação/Zero para decidir o PC.

---

# Pontos Que Mais Dão Pegadinha

- `1111` não significa sempre 15; depende se é sem sinal ou complemento de 2.
- BCD não é binário puro.
- Gray muda 1 bit por vez; conversão usa XOR entre bits vizinhos.
- Em Karnaugh, célula diagonal não é adjacente.
- Em POS, agrupe zeros; em SOP, agrupe uns.
- `A + B.C = (A+B).(A+C)` é válido em álgebra booleana.
- `A + A.B = A` por absorção.
- Moore e Mealy diferem pela dependência da saída.
- Latch transparente pode deixar entrada passar enquanto habilitado.
- Contador módulo `M` pode ter estados inválidos se `M` não for potência de 2.
- Setup e hold são violações diferentes.
- Carry e overflow respondem a interpretações diferentes.
- Deslocamento à direita em número com sinal pode ser lógico ou aritmético.
- Flags da ULA geralmente são saídas, não entradas.
- CMOS parado consome pouco; CMOS comutando consome.
- FPGA pode ser volátil se for baseado em SRAM.
- Assembly não é algoritmo de alto nível; é mais perto da máquina.
- Em `LOAD R1,[R2]`, `R2` é endereço; em `ADD R1,R2,R3`, `R2` é valor.
- `STORE` não deve ativar `RegWrite`; ele ativa `MemWrite`.
- `LOAD` usa a ULA para calcular endereço, não só para soma "visível".
- `BEQ` pode usar a ULA para subtrair/comparar, mas não salva o resultado.
