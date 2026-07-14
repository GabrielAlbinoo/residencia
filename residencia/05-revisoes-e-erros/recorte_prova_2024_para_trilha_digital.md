# Recorte Da Prova 2024 Para A Trilha Digital

Fonte analisada: `prova-ci-inovador-questoes.md`

Objetivo: separar o que vale usar como referencia para a trilha **Sistemas Digitais** e o que pertence ao bloco **Analogico / AMS / RF**.

## Conclusao Curta

A prova transcrita esta identificada como **Sistemas Analogicos e Digitais**.

Ela nao parece ser um caderno puramente digital. Pela distribuicao das questoes, o bloco **31 a 50** e fortemente analogico/microeletronica. Para a sua trilha **Digital/UFCG**, o recorte mais util e:

```text
Questoes 1 a 30
Questoes 51 a 60
```

Com uma ressalva: as questoes 12 e 13 tratam de qubits e IoT. Elas nao sao analogicas, mas tambem nao aparecem de forma explicita no conteudo digital do edital. Devem ser vistas como baixa prioridade.

## Cache E Digital Ou Analogico?

Cache e assunto de **Arquitetura de Computadores**, portanto fica muito mais perto da trilha **Digital**.

No edital digital nao aparece a palavra `cache`, mas aparece:

```text
noções básicas de arquitetura e organização de computadores
Arquitetura de Computadores
Implementação da microarquitetura: controle e datapath
Memórias: banco de registradores, ROM, SRAM e DRAM
```

Entao:

```text
cache = estudar em nivel leve/intermediario
cache profundo = nao precisa virar prioridade
```

O que saber de cache:

- Cache e uma memoria pequena e rapida entre processador e memoria principal.
- `hit`: dado estava na cache.
- `miss`: dado nao estava na cache e precisa vir da memoria principal.
- Mapeamento direto: cada bloco da memoria vai para uma posicao possivel da cache.
- Mapeamento associativo: o bloco pode ir para varias posicoes.
- Mapeamento associativo por conjunto: meio-termo; o bloco escolhe um conjunto, mas pode ocupar mais de uma linha dentro dele.
- Prefetch: tenta buscar antes dados que provavelmente serao usados, reduzindo misses.

## Questoes Da Prova Que Servem Para Digital

| Questao | Assunto | Decisao |
|---:|---|---|
| 1 | Ingles tecnico: intelligent control | Serve |
| 2 | Ingles tecnico: exoplanetas | Serve |
| 3 | Ingles tecnico: Feynman | Serve |
| 4 | Ingles tecnico: algoritmo | Serve |
| 5 | Ingles tecnico: nanotecnologia | Serve |
| 6 | Ingles: figura de linguagem/metafora | Serve |
| 7 | Ingles: interpretacao de piada/texto | Serve |
| 8 | Ingles: conectivos, `further`, `moreover` | Serve |
| 9 | Ingles: objetivo de texto cientifico | Serve |
| 10 | Ingles: oracao relativa / interpretacao | Serve |
| 11 | Cache: organizacao associativa por conjunto | Serve para Digital, arquitetura |
| 12 | Qubit e superposicao | Baixa prioridade; nao e analogico, mas nao esta explicito no digital |
| 13 | IoT / dispositivos conectados | Baixa prioridade; computacao geral |
| 14 | Unidade de controle gerando sinais para datapath | Serve |
| 15 | Predicao de desvios | Serve como arquitetura, mas em nivel leve |
| 16 | Operando imediato em assembly | Serve |
| 17 | Assembly em sistemas embarcados | Serve |
| 18 | FPU / ponto flutuante em hardware | Serve, ligado a ponto flutuante e arquitetura |
| 19 | Prefetch de cache | Serve para Digital, arquitetura |
| 20 | Instrucoes de desvio em controle de fluxo | Serve |
| 21 | Contagem regressiva / decremento / subtrator | Serve |
| 22 | Pipeline e hazards | Serve como arquitetura/microarquitetura |
| 23 | Registradores para variaveis temporarias | Serve |
| 24 | Atraso de propagacao e caminho critico | Serve |
| 25 | PROM / memoria programavel uma unica vez | Serve |
| 26 | Representacao em ponto fixo | Serve |
| 27 | FPGA/CPLD como logica reconfiguravel | Serve |
| 28 | Glitches por atrasos diferentes | Serve |
| 29 | CMOS e baixo consumo | Serve |
| 30 | Somadores completos em cascata / ripple-carry | Serve |
| 51 | Contador sincrono | Serve |
| 52 | Funcao booleana complexa | Serve |
| 53 | Circuito combinacional de controle de acesso | Serve |
| 54 | Encoder decimal para BCD | Serve |
| 55 | Mintermos e maxtermos | Serve |
| 56 | FSM / controle de trafego | Serve |
| 57 | Simplificacao booleana / XNOR | Serve |
| 58 | Multiplexador | Serve |
| 59 | Conversao binario para hexadecimal | Serve |
| 60 | Karnaugh e eliminacao de variaveis | Serve |

## Bloco Que Parece Ser Analogico E Nao Deve Virar Prioridade

| Questoes | Assuntos |
|---:|---|
| 31 | Quadripolos e funcao de transferencia |
| 32 | Leis de Kirchhoff aplicadas a circuitos eletricos |
| 33 | Transformacao fonte de tensao para fonte de corrente |
| 34 | Transformacao fonte de corrente para fonte de tensao |
| 35 | Teoremas de Thevenin e Norton |
| 36 | Amplificador operacional: banda, slew rate, impedancia |
| 37 | Thevenin/Norton em diagnostico de circuitos |
| 38 | Realimentacao negativa em amplificador operacional |
| 39 | Equivalente Thevenin/Norton |
| 40 | Thevenin/Norton em falhas de sistemas de potencia |
| 41 | Transcondutancia de MOSFET |
| 42 | MOSFET canal P em contexto analogico |
| 43 | Oxido de porta, capacitancia e desempenho |
| 44 | MOSFET tipo deplecao |
| 45 | Diferenca construtiva entre PMOS e NMOS |
| 46 | Transcondutancia aplicada a sensores |
| 47 | Definicao de transcondutancia |
| 48 | Curva I/V e MOSFET como amplificador |
| 49 | Vantagens do MOSFET em alimentacao/energia |
| 50 | MOSFET como chave eletronica |

Observacao sobre a questao 50: o conceito de MOSFET como chave aparece tambem em Digital, porque CMOS usa PMOS/NMOS como chaves. Mas a sequencia da prova coloca essa questao dentro do bloco de microeletronica/analogico. Para a sua prova, vale saber o conceito digital de chave, sem estudar microeletronica analogica profunda.

## O Que Adicionar Ao Estudo Digital A Partir Dessa Prova

Prioridade realista:

1. Cache em nivel basico/intermediario:
   `hit`, `miss`, mapeamento direto, associativo, associativo por conjunto e prefetch.

2. Pipeline em nivel basico/intermediario:
   hazards de dados, controle e estrutural; stall, flush e forwarding.

3. Branch prediction em nivel conceitual:
   predicao estatica, predicao dinamica, penalidade de desvio errado.

4. FPU e ponto flutuante:
   saber que a FPU executa operacoes com numeros reais/ponto flutuante e que desempenho envolve precisao, latencia e paralelismo.

5. Inglês instrumental:
   treinar interpretacao, conectivos, objetivo de texto e relacao entre frases.

## O Que Nao Adicionar Agora

Nao gastar tempo forte com:

- Thevenin;
- Norton;
- Kirchhoff avancado;
- quadripolos;
- amplificadores operacionais;
- slew rate;
- transcondutancia;
- modelo de pequenos sinais;
- MOSFET como amplificador analogico;
- curva I/V detalhada.

Esses assuntos aparecem no edital, mas no bloco **Conteudo Analogico**, nao no bloco **Conteudo Digital**.

