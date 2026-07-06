# Roteiro de aulas - Dataprev 2026 - Desenvolvimento de Software

Este arquivo organiza as aulas principais de conteudo para o concurso Dataprev 2026, cargo Analista de Tecnologia da Informacao, Perfil 3 - Desenvolvimento de Software, com foco em Joao Pessoa/PB.

O roteiro comeca por Conhecimentos Especificos porque esse bloco vale 75 dos 115 pontos da prova objetiva. A ideia e gravar primeiro o nucleo do cargo: desenvolvimento, arquitetura, banco de dados, seguranca, BI e governanca. Depois entram os conhecimentos gerais.

Total sugerido: 80 aulas principais de conteudo.

- Aulas 01 a 60: Conhecimentos Especificos.
- Aulas 61 a 80: Conhecimentos Gerais.
- Revisoes, simulados, caderno de erros e correcoes ficam fora deste roteiro e devem ser criados conforme o desempenho.

## Como criar novas aulas neste projeto

Use este roteiro sempre que for pedir ou criar uma nova aula.

### Arquivos de contexto

Antes de criar qualquer aula, conferir:

```text
02-roteiros/plano-estudos-dataprev-2026-desenvolvimento-software.md
08-aulas/roteiro-aulas-dataprev-2026-desenvolvimento-software.md
05-revisoes-e-erros/caderno-de-erros.md
03-simulados/controle-de-simulados.md
```

Se ja existirem aulas anteriores em `08-aulas/aulas-md/`, usar a ultima aula criada como referencia de estilo, profundidade e continuidade.

### Padrao de arquivo

Salvar cada aula em Markdown nesta pasta:

```text
08-aulas/aulas-md/NN-nome_do_assunto.md
```

Exemplos:

```text
08-aulas/aulas-md/01-java_fundamentos_plataforma_sintaxe.md
08-aulas/aulas-md/24-testes_unitarios_integracao_automatizados_tdd.md
08-aulas/aulas-md/63-ortografia_classes_palavras.md
```

Quando gerar PDF, usar o mesmo nome base em:

```text
08-aulas/aulas-pdf/NN-nome_do_assunto.pdf
```

### Estilo da aula

As aulas devem seguir o estilo do projeto anterior:

- portugues claro, direto e didatico;
- explicacao passo a passo;
- secoes numeradas;
- exemplos completos dentro da teoria;
- tabelas quando ajudarem a comparar conceitos;
- blocos `text` para fluxos, estruturas, comandos, pseudo-codigo e mapas mentais simples;
- diagramas Mermaid apenas quando ajudarem de verdade;
- conexao com a aula anterior e com a proxima;
- foco em como a FGV pode cobrar o assunto;
- secao de erros comuns;
- secao "O que memorizar".

Nao e necessario colocar exercicios resolvidos no final da aula. Se a aula precisar de exemplos resolvidos para explicar um conceito, eles podem aparecer no meio da teoria. O final deve priorizar revisao, memorizacao e conexao com a proxima aula.

### Estrutura recomendada para cada aula

Use este esqueleto:

```text
# Aula Detalhada - Nome do Assunto

**Tema do dia:** ...
**Aula na sequencia:** NN
**Objetivo:** ...

---

## 1. Onde Esta Aula Entra No Estudo?
## 2. Ideia Central
## 3. Conceitos Fundamentais
## 4. Explicacao Passo A Passo
## 5. Exemplos Comentados
## 6. Tabelas, Fluxos Ou Diagramas
## 7. Como A FGV Costuma Cobrar
## 8. Erros Comuns
## 9. O Que Memorizar
## 10. Checklist Da Aula
## 11. Conexao Com A Proxima Aula
```

### Profundidade esperada

Cada aula deve ser mais detalhada que um resumo. Para cada conceito importante, responder:

```text
o que e?
para que serve?
onde aparece no edital?
como aparece em sistemas reais?
como a FGV pode cobrar?
qual confusao comum a banca pode explorar?
o que o aluno precisa memorizar?
```

Quando houver siglas, explicar o nome por extenso e a funcao.

Quando houver tecnologia, explicar:

```text
problema que ela resolve
componentes principais
vantagens
limitacoes
pegadinhas de prova
relacao com outros topicos do edital
```

Quando houver leis, explicar:

```text
escopo da lei
conceitos centrais
artigos/capitulos cobrados
direitos, deveres e responsabilidades
diferencas entre institutos parecidos
pegadinhas comuns
```

## Parte 1 - Conhecimentos Especificos

### Aula 01 - Java: plataforma, sintaxe e modelo de execucao

Arquivo sugerido: `01-java_plataforma_sintaxe_modelo_execucao.md`

Conteudo:

- Onde Java entra no edital da Dataprev e por que e assunto central para Desenvolvimento de Software.
- JDK, JRE, JVM, bytecode, compilacao e execucao.
- Estrutura de um programa Java: pacote, classe, metodo `main`, imports e modificadores.
- Tipos primitivos, wrappers, strings, operadores, controle de fluxo e convencoes de codigo.
- Diferenca entre erro de compilacao, excecao em tempo de execucao e erro logico.
- Pontos de atencao para prova: portabilidade, tipagem estatica, orientacao a objetos e papel da JVM.

### Aula 02 - Java: orientacao a objetos, colecoes, excecoes e generics

Arquivo sugerido: `02-java_orientacao_objetos_colecoes_excecoes_generics.md`

Conteudo:

- Classes, objetos, atributos, metodos, construtores e encapsulamento.
- Heranca, polimorfismo, abstracao, interfaces e classes abstratas.
- Colecoes: `List`, `Set`, `Map`, ordenacao, igualdade, `equals` e `hashCode`.
- Excecoes checked e unchecked, `try`, `catch`, `finally` e boas praticas.
- Generics: objetivo, type safety, wildcards basicos e erros comuns.
- Como a FGV pode misturar OO, colecoes e excecoes em uma mesma questao.

### Aula 03 - Java moderno para prova: lambdas, streams, datas e concorrencia

Arquivo sugerido: `03-java_lambdas_streams_datas_concorrencia.md`

Conteudo:

- O que significa "Java versao 6 ou superior" no edital: base antiga e recursos modernos.
- Lambdas, interfaces funcionais e uso em colecoes.
- Streams: `map`, `filter`, `reduce`, `collect` e diferenca entre stream e colecao.
- API de datas: problemas de `Date/Calendar` e nocao de `java.time`.
- Threads, `Runnable`, sincronizacao, riscos de concorrencia e visao geral de executores.
- Pegadinhas: operacoes intermediarias/finais, mutabilidade, concorrencia e efeitos colaterais.

### Aula 04 - JavaEE e JakartaEE: arquitetura corporativa

Arquivo sugerido: `04-javaee_jakartaee_arquitetura_corporativa.md`

Conteudo:

- Evolucao de JavaEE para JakartaEE e por que o edital cita os dois.
- Aplicacao corporativa em camadas: apresentacao, negocio, persistencia e integracao.
- Servlets, filtros, listeners, CDI, EJB em visao conceitual e APIs corporativas.
- WAR, EAR, servidor de aplicacao e ciclo de deploy.
- Transacoes, injecao de dependencia, seguranca e recursos gerenciados pelo container.
- Como diferenciar Java SE, JavaEE/JakartaEE e frameworks como Spring.

### Aula 05 - JSF, PrimeFaces e desenvolvimento web Java tradicional

Arquivo sugerido: `05-jsf_primefaces_web_java_tradicional.md`

Conteudo:

- Papel do JSF em aplicacoes web Java: componentes, ciclo de vida e managed beans.
- PrimeFaces como biblioteca de componentes para JSF.
- Navegacao, validacao, conversao, eventos e binding.
- Diferenca entre abordagem component-based e abordagem REST/frontend moderno.
- Onde JSF e PrimeFaces ainda aparecem em sistemas corporativos.
- Pegadinhas: ciclo de vida JSF, estado da tela, AJAX em JSF e confusao com JavaScript puro.

### Aula 06 - JPA e Hibernate: mapeamento objeto-relacional

Arquivo sugerido: `06-jpa_hibernate_mapeamento_objeto_relacional.md`

Conteudo:

- Problema que JPA resolve: persistir objetos em banco relacional.
- Entidades, `@Entity`, `@Id`, `@GeneratedValue`, colunas e tabelas.
- Relacionamentos: `@OneToOne`, `@OneToMany`, `@ManyToOne`, `@ManyToMany`.
- Hibernate como implementacao de JPA.
- Ciclo de vida da entidade: transient, managed, detached e removed.
- Pegadinhas de prova: cascata, fetch lazy/eager, dono do relacionamento e N+1 queries.

### Aula 07 - JPA/Hibernate: consultas, transacoes e desempenho

Arquivo sugerido: `07-jpa_hibernate_consultas_transacoes_desempenho.md`

Conteudo:

- JPQL, Criteria API e consultas nativas.
- EntityManager, persistence context e flush.
- Transacoes: commit, rollback, isolamento e consistencia.
- Lazy loading, eager loading, cache e problemas de desempenho.
- Integracao com Spring Data JPA.
- Como questoes cobram diferencas entre SQL, JPQL, ORM e SGBD.

### Aula 08 - Spring Core e Spring Boot

Arquivo sugerido: `08-spring_core_spring_boot.md`

Conteudo:

- IoC e injecao de dependencia.
- Beans, containers, configuracao por anotacao e auto-configuracao.
- Spring Boot: starters, application properties, profiles e actuator.
- Camadas em aplicacao Spring: controller, service, repository e DTO.
- Validacao, tratamento de erros e organizacao de projeto.
- Pegadinhas: Spring Framework x Spring Boot, bean x objeto comum, configuracao explicita x auto-configuracao.

### Aula 09 - Spring Data, transacoes, seguranca basica e APIs

Arquivo sugerido: `09-spring_data_transacoes_seguranca_apis.md`

Conteudo:

- Repositories, queries derivadas e consultas customizadas.
- `@Transactional`: escopo, propagacao e rollback.
- Controllers REST, serializacao JSON, DTOs e status HTTP.
- Validacao com Bean Validation e tratamento global de excecoes.
- Nocoes de Spring Security: autenticacao, autorizacao e filtros.
- Como a FGV pode cobrar arquitetura Spring em camadas e responsabilidade de cada anotacao.

### Aula 10 - Spring Cloud e microsservicos em ecossistema Java

Arquivo sugerido: `10-spring_cloud_microsservicos_ecossistema_java.md`

Conteudo:

- Por que Spring Cloud aparece junto de microsservicos.
- Configuracao centralizada, service discovery, gateway e client-side load balancing.
- Resiliencia: timeout, retry, circuit breaker e fallback.
- Observabilidade: logs, metricas, tracing e health checks.
- Comunicacao sincrona e assincrona entre servicos.
- Pegadinhas: microservico nao e so "API pequena"; distribuicao aumenta complexidade.

### Aula 11 - JavaScript essencial para sistemas web

Arquivo sugerido: `11-javascript_essencial_sistemas_web.md`

Conteudo:

- Papel do JavaScript no frontend e no backend.
- Variaveis, tipos, funcoes, objetos, arrays e escopo.
- DOM, eventos, manipulacao de pagina e requisicoes HTTP.
- Assincronicidade: callbacks, promises, async/await.
- JSON e integracao com APIs REST.
- Pegadinhas: tipagem dinamica, igualdade, hoisting, assincronia e diferenca entre Java e JavaScript.

### Aula 12 - Mobile, Android, iOS, low-code e no-code

Arquivo sugerido: `12-mobile_android_ios_low_code_no_code.md`

Conteudo:

- Desenvolvimento mobile nativo, hibrido e multiplataforma.
- Conceitos centrais de Android e iOS: apps, ciclo de vida, permissao, armazenamento e publicacao.
- APIs mobile, consumo de servicos, notificacoes e seguranca basica.
- Low-code e no-code: finalidade, vantagens, limites e riscos.
- Quando usar desenvolvimento tradicional e quando usar plataforma visual.
- Como a banca pode cobrar diferencas conceituais e cenarios de uso.

### Aula 13 - Clean Code e SonarQube

Arquivo sugerido: `13-clean_code_sonarqube_analise_estatica.md`

Conteudo:

- O que e Clean Code e por que importa em sistemas publicos grandes.
- Nomes, funcoes pequenas, coesao, baixo acoplamento e tratamento de erro.
- Code smells, duplicacao, complexidade ciclomatica e legibilidade.
- Analise estatica de codigo-fonte.
- SonarQube: bugs, vulnerabilities, code smells, coverage e quality gate.
- Pegadinhas: analise estatica nao prova ausencia de defeitos e nao substitui teste.

### Aula 14 - Orientacao a objetos, SOLID e design de software

Arquivo sugerido: `14-orientacao_objetos_solid_design_software.md`

Conteudo:

- Revisao aplicada de OO para arquitetura e design.
- SOLID: responsabilidade unica, aberto/fechado, substituicao de Liskov, segregacao de interfaces e inversao de dependencia.
- Coesao, acoplamento, encapsulamento e composicao.
- Padroes de projeto mais cobraveis: Factory, Strategy, Observer, Adapter, Singleton e Repository.
- Relacao entre design limpo, testes e manutencao.
- Como a FGV cobra principios por meio de cenarios.

### Aula 15 - Arquitetura de software e aplicacoes web

Arquivo sugerido: `15-arquitetura_software_aplicacoes_web.md`

Conteudo:

- O que e arquitetura de software e diferenca para design de baixo nivel.
- Arquitetura em camadas, MVC, cliente-servidor e arquitetura web.
- Servidor web x servidor de aplicacao.
- Escalabilidade, disponibilidade, manutencao, interoperabilidade e seguranca.
- Componentes comuns: frontend, backend, banco, cache, filas, gateway e observabilidade.
- Pegadinhas: arquitetura nao e tecnologia; e conjunto de decisoes e restricoes.

### Aula 16 - SOA, interoperabilidade, web services e integracao

Arquivo sugerido: `16-soa_interoperabilidade_web_services_integracao.md`

Conteudo:

- Arquitetura orientada a servicos: principios e objetivos.
- Interoperabilidade entre sistemas heterogeneos.
- Web services SOAP e REST em visao comparativa.
- Contratos de servico, acoplamento, reuso e governanca.
- Integracao entre sistemas legados e modernos.
- Como diferenciar SOA, microservicos, API e web service.

### Aula 17 - APIs REST, HTTP e boas praticas

Arquivo sugerido: `17-apis_rest_http_boas_praticas.md`

Conteudo:

- Fundamentos de HTTP: metodos, status codes, headers, URI e corpo.
- REST: recursos, representacoes, stateless, cache e uniform interface.
- JSON como formato de troca.
- Idempotencia, seguranca, paginacao, filtros e versionamento.
- Erros de API e padronizacao de respostas.
- Pegadinhas: REST nao e sinonimo de JSON; POST nao e sempre criacao; PUT e PATCH diferem.

### Aula 18 - Swagger/OpenAPI e documentacao de APIs

Arquivo sugerido: `18-swagger_openapi_documentacao_apis.md`

Conteudo:

- O que e Swagger e o que e OpenAPI.
- Contratos de API: endpoints, schemas, parametros, respostas e codigos de erro.
- Documentacao viva e geracao de clientes/servidores.
- Versionamento, exemplos, autenticacao e validacao de contrato.
- Uso em times e integracao entre areas.
- Como a banca pode cobrar a funcao da especificacao OpenAPI.

### Aula 19 - XML, XSLT, UDDI, JSON e formatos de integracao

Arquivo sugerido: `19-xml_xslt_uddi_json_formatos_integracao.md`

Conteudo:

- XML: estrutura, tags, atributos, namespaces e validacao.
- XSLT: transformacao de documentos XML.
- UDDI: registro e descoberta de servicos no contexto de web services.
- JSON: objetos, arrays, tipos e uso em APIs modernas.
- Comparacao XML x JSON: verbosidade, validacao, legibilidade e uso.
- Pegadinhas: XSLT transforma, XSD valida, UDDI registra, JSON nao e linguagem de programacao.

### Aula 20 - Mensageria e comunicacao assincrona

Arquivo sugerido: `20-mensageria_comunicacao_assincrona.md`

Conteudo:

- Problema que mensageria resolve: desacoplamento, resiliencia e processamento assincrono.
- Filas, topicos, publish/subscribe e consumidores.
- Garantias de entrega, ordenacao, duplicidade e idempotencia.
- Mensageria em microservicos e integracao corporativa.
- Dead-letter queue, retry e backpressure em visao conceitual.
- Como diferenciar chamada sincrona REST de fluxo assincrono por mensagens.

### Aula 21 - Internet, intranet, extranet e portais corporativos

Arquivo sugerido: `21-internet_intranet_extranet_portais.md`

Conteudo:

- Conceitos de internet, intranet e extranet.
- Finalidades, caracteristicas fisicas e logicas, aplicacoes e servicos.
- Portais corporativos: autenticacao, conteudo, integracao e perfis de acesso.
- Relacao com seguranca, UX, CMS e arquitetura de informacao.
- Exemplos em organizacoes publicas e empresas de tecnologia.
- Pegadinhas: diferenca entre alcance da rede, publico-alvo e controles de acesso.

### Aula 22 - Git e gestao de configuracao

Arquivo sugerido: `22-git_gestao_configuracao.md`

Conteudo:

- Controle de versao e gestao de configuracao.
- Repositorio, commit, branch, merge, rebase, tag e release.
- Fluxos: Git Flow, trunk-based development e pull request.
- Conflitos, historico, rastreabilidade e revisao de codigo.
- Git em DevOps e CI/CD.
- Pegadinhas: Git e distribuido; branch nao e copia fisica separada; merge e rebase mudam historico de formas diferentes.

### Aula 23 - DevOps, CI/CD e esteira de entrega

Arquivo sugerido: `23-devops_ci_cd_esteira_entrega.md`

Conteudo:

- Cultura DevOps: colaboracao entre desenvolvimento, operacoes, seguranca e qualidade.
- CI, CD entrega continua e CD implantacao continua.
- Pipeline: build, testes, analise estatica, empacotamento, deploy e monitoramento.
- Ambientes, versionamento, rollback e automacao.
- Relacao com containers, testes, SAST/DAST e conformidade.
- Como a FGV pode cobrar diferencas entre CI, CD e DevOps.

### Aula 24 - Testes de software: fundamentos e tipos

Arquivo sugerido: `24-testes_software_fundamentos_tipos.md`

Conteudo:

- Por que testar software e o que teste consegue ou nao garantir.
- Testes unitarios, integracao, sistema, aceitacao, regressao e exploratorios.
- Testes funcionais x nao funcionais.
- Massa de teste, ambiente, criterios de aceite e defeitos.
- Piramide de testes e custo de deteccao de defeitos.
- Pegadinhas: teste nao prova ausencia de bugs; teste unitario nao e teste de sistema.

### Aula 25 - Testes automatizados, JUnit, TDD e usabilidade

Arquivo sugerido: `25-testes_automatizados_junit_tdd_usabilidade.md`

Conteudo:

- Automacao de testes: quando usar, beneficios e manutencao.
- JUnit: papel em testes unitarios Java.
- TDD: ciclo red, green, refactor.
- Testes de integracao e mocks/stubs em visao conceitual.
- Teste de usabilidade e relacao com UX.
- Como a banca pode cobrar sequencia do TDD e diferencas entre tipos de teste.

### Aula 26 - Gestao do ciclo de vida de testes e qualidade

Arquivo sugerido: `26-gestao_ciclo_vida_testes_qualidade.md`

Conteudo:

- Planejamento, desenho, execucao, registro e encerramento de testes.
- Estrategia de testes em projeto agil.
- Rastreabilidade entre requisito, caso de teste, defeito e release.
- Indicadores: cobertura, defeitos, retrabalho e severidade.
- Testes de desempenho, servicos, estaticos e dinamicos de seguranca.
- Pegadinhas: qualidade nao e so testar no final; testes devem acompanhar o ciclo de desenvolvimento.

### Aula 27 - Metodologias ageis: Scrum

Arquivo sugerido: `27-metodologias_ageis_scrum.md`

Conteudo:

- Valores e principios ageis.
- Scrum: papeis, eventos, artefatos e compromissos.
- Product Backlog, Sprint Backlog, Incremento, Definition of Done e meta da Sprint.
- Product Owner, Scrum Master e Developers.
- Planejamento, Daily, Review e Retrospective.
- Pegadinhas: Scrum Master nao e gerente tradicional; Sprint Review nao e retrospectiva.

### Aula 28 - Kanban, XP, Lean e agilidade aplicada

Arquivo sugerido: `28-kanban_xp_lean_agilidade_aplicada.md`

Conteudo:

- Kanban: quadro, fluxo, WIP, lead time e melhoria continua.
- XP: programacao em par, TDD, refatoracao, integracao continua e cliente presente.
- Lean: eliminacao de desperdicio, fluxo, valor e melhoria continua.
- Comparacao Scrum x Kanban x XP.
- Uso de metodos ageis em times de desenvolvimento.
- Como a FGV pode cobrar escolha de metodo por cenario.

### Aula 29 - Engenharia de requisitos

Arquivo sugerido: `29-engenharia_requisitos.md`

Conteudo:

- O que e requisito e por que ele guia desenvolvimento e testes.
- Requisitos funcionais, nao funcionais, de negocio, usuario e sistema.
- Processo: elicitacao, analise, especificacao, validacao e gerenciamento.
- Tecnicas de elicitacao: entrevista, workshop, observacao, questionario, prototipo e analise documental.
- Rastreabilidade, priorizacao e mudanca de requisitos.
- Pegadinhas: requisito nao funcional tambem pode ser testavel; requisito nao e solucao pronta.

### Aula 30 - Pontos de funcao e story points

Arquivo sugerido: `30-pontos_funcao_story_points.md`

Conteudo:

- Medicao de software e diferenca entre tamanho, esforco e prazo.
- Analise de Pontos de Funcao: finalidade, fronteira da aplicacao e funcoes de dados/transacao em visao conceitual.
- Story Points: estimativa relativa em metodos ageis.
- Comparacao entre ponto de funcao e story point.
- Uso em planejamento, contratacao, produtividade e acompanhamento.
- Pegadinhas: pontos de funcao medem tamanho funcional; story point nao e hora exata.

### Aula 31 - Padroes de desenvolvimento e reuso

Arquivo sugerido: `31-padroes_desenvolvimento_reuso.md`

Conteudo:

- Por que padroes e reuso reduzem custo e risco.
- Reuso de componentes, bibliotecas, frameworks, servicos e APIs.
- Padroes arquiteturais, padroes de projeto e padroes de codificacao.
- Documentacao, versionamento e governanca de componentes reutilizaveis.
- Riscos: acoplamento indevido, dependencia obsoleta e reuso artificial.
- Como a FGV pode cobrar beneficios e limites do reuso.

### Aula 32 - Frontend web: HTML, CSS e Ajax

Arquivo sugerido: `32-frontend_html_css_ajax.md`

Conteudo:

- Papel do frontend em aplicacoes web.
- HTML: estrutura semantica, formularios e acessibilidade basica.
- CSS: seletores, cascata, box model, layout e responsividade.
- Ajax: requisicoes assincronas e atualizacao parcial da pagina.
- Integracao frontend-backend via APIs.
- Pegadinhas: HTML estrutura, CSS apresenta, JavaScript comporta; Ajax nao e linguagem.

### Aula 33 - Frameworks frontend, SPA e PWA

Arquivo sugerido: `33-frameworks_frontend_spa_pwa.md`

Conteudo:

- Por que usar frameworks frontend.
- Vue, Angular e React: caracteristicas gerais e diferencas conceituais.
- Componentes, estado, roteamento e consumo de API.
- SPA: vantagens, limites, SEO e carregamento inicial.
- PWA: service worker, cache, instalacao e funcionamento offline.
- Como a banca pode cobrar diferenca entre SPA, PWA e site tradicional.

### Aula 34 - UX, acessibilidade, usabilidade e arquitetura de informacao

Arquivo sugerido: `34-ux_acessibilidade_usabilidade_arquitetura_informacao.md`

Conteudo:

- User Experience: conceito e relacao com produto, interface e servico.
- Usabilidade: eficiencia, eficacia, satisfacao e aprendizado.
- Acessibilidade: inclusao, barreiras, contraste, teclado, leitores de tela e semantica.
- Arquitetura de informacao: organizacao, rotulos, navegacao e busca.
- Desenho e planejamento de interacao em aplicacoes web.
- Pegadinhas: UX nao e so beleza; acessibilidade nao e recurso opcional.

### Aula 35 - CMS, portais corporativos e workflow

Arquivo sugerido: `35-cms_portais_corporativos_workflow.md`

Conteudo:

- Sistemas de gestao de conteudo: conceito, finalidade e arquitetura.
- Conteudo, taxonomia, usuarios, permissoes, templates e publicacao.
- Portais corporativos e integracao com sistemas internos.
- Workflow: etapas, aprovacao, estados e responsabilidades.
- Relacao com intranet, extranet, acessibilidade e governanca.
- Como a FGV pode cobrar CMS como solucao de gestao de conteudo, nao como simples site.

### Aula 36 - HTTPS, SSL/TLS e seguranca no transporte

Arquivo sugerido: `36-https_ssl_tls_seguranca_transporte.md`

Conteudo:

- HTTP x HTTPS.
- Papel do TLS: confidencialidade, integridade e autenticacao do servidor.
- Certificados digitais, autoridade certificadora e cadeia de confianca.
- Handshake em visao conceitual.
- Riscos: certificado invalido, downgrade, interceptacao e configuracao fraca.
- Pegadinhas: SSL e termo legado; HTTPS nao protege dados depois que chegam ao servidor.

### Aula 37 - Containers e empacotamento de aplicacoes

Arquivo sugerido: `37-containers_empacotamento_aplicacoes.md`

Conteudo:

- O que e container e problema que resolve.
- Imagem, container, registry, volume, rede e variaveis de ambiente.
- Diferenca entre container e maquina virtual.
- Uso em DevOps, CI/CD, microservicos e ambientes padronizados.
- Orquestracao em visao conceitual.
- Pegadinhas: container nao e VM leve em todos os sentidos; persistencia precisa ser planejada.

### Aula 38 - Arquitetura hexagonal

Arquivo sugerido: `38-arquitetura_hexagonal.md`

Conteudo:

- Ideia central: dominio isolado de detalhes externos.
- Ports and adapters: portas de entrada, portas de saida e adaptadores.
- Relacao com testabilidade, manutencao e inversao de dependencia.
- Comparacao com arquitetura em camadas.
- Exemplos: API REST, banco de dados, fila e servico externo como adaptadores.
- Como a FGV pode cobrar beneficios e responsabilidade de cada camada.

### Aula 39 - Microsservicos, API Gateway e orquestracao de servicos

Arquivo sugerido: `39-microsservicos_api_gateway_orquestracao.md`

Conteudo:

- Caracteristicas de microsservicos: autonomia, deploy independente, banco por servico e comunicacao.
- API Gateway: roteamento, autenticacao, rate limit, agregacao e observabilidade.
- Orquestracao x coreografia de servicos.
- Desafios: dados distribuidos, latencia, monitoramento, seguranca e testes.
- Relacao com containers, mensageria e Spring Cloud.
- Pegadinhas: microsservico nao garante simplicidade; distribuicao troca problemas locais por problemas de rede.

### Aula 40 - Transacoes distribuidas e consistencia

Arquivo sugerido: `40-transacoes_distribuidas_consistencia.md`

Conteudo:

- Por que transacoes distribuidas sao dificeis.
- ACID em banco local e desafio em multiplos servicos.
- Two-phase commit em visao conceitual.
- Consistencia eventual, compensacao e Saga.
- Idempotencia, retry e tratamento de falhas.
- Como a FGV pode cobrar diferenca entre consistencia forte e eventual.

### Aula 41 - Blockchain para desenvolvimento de software

Arquivo sugerido: `41-blockchain_desenvolvimento_software.md`

Conteudo:

- Conceito de blockchain: blocos, hash, encadeamento e imutabilidade.
- Redes publicas, privadas e permissionadas.
- Consenso em visao conceitual.
- Smart contracts e aplicacoes corporativas.
- Beneficios, limites, riscos e custos.
- Pegadinhas: blockchain nao e banco de dados comum; imutabilidade nao significa verdade absoluta do dado de entrada.

### Aula 42 - IA, analise de dados e Big Data para Desenvolvimento

Arquivo sugerido: `42-ia_analise_dados_big_data_desenvolvimento.md`

Conteudo:

- Conceitos de IA no contexto do perfil de desenvolvimento.
- Analise de dados: dado, informacao, conhecimento e apoio a decisao.
- Big Data: volume, velocidade, variedade, veracidade e valor.
- Relacao entre sistemas transacionais, analiticos, data lake e BI.
- Onde desenvolvedores entram em pipelines, APIs, integracao e automacao.
- Como diferenciar IA, BI, Data Science e Big Data em questoes conceituais.

### Aula 43 - BI: fundamentos, DSS e gestao de conteudo

Arquivo sugerido: `43-bi_fundamentos_dss_gestao_conteudo.md`

Conteudo:

- Business Intelligence: finalidade e beneficios.
- Sistemas de suporte a decisao.
- Dados operacionais x dados analiticos.
- Indicadores, metricas, dashboards e relatorios.
- Gestao de conteudo em contexto analitico.
- Pegadinhas: BI apoia decisao; nao e apenas grafico bonito.

### Aula 44 - Data warehouse, ETL, OLAP e data mining

Arquivo sugerido: `44-data_warehouse_etl_olap_data_mining.md`

Conteudo:

- Data warehouse: conceito, orientacao por assunto, integracao, historico e nao volatilidade.
- ETL: extracao, transformacao e carga.
- ELT em comparacao com ETL.
- OLAP: cubos, dimensoes, medidas, slice, dice, drill-down e roll-up.
- Data mining: descoberta de padroes e diferenca para relatorio.
- Como a FGV costuma misturar DW, ETL, OLAP e BI.

### Aula 45 - Visualizacao de dados, cubos e arquitetura de BI

Arquivo sugerido: `45-visualizacao_dados_cubos_arquitetura_bi.md`

Conteudo:

- Visualizacao de dados: objetivos, boas praticas e erros comuns.
- Cubos, bases individuais e fontes de dados.
- Mapeamento de fontes e tecnicas de coleta.
- Arquitetura de BI: fontes, staging, DW, datamarts, camada semantica e dashboards.
- Qualidade, governanca e atualizacao de dados.
- Pegadinhas: visualizacao depende de contexto; grafico inadequado distorce decisao.

### Aula 46 - Modelagem de dados: conceitual, logica e fisica

Arquivo sugerido: `46-modelagem_dados_conceitual_logica_fisica.md`

Conteudo:

- Por que modelar dados antes de implementar.
- Modelo conceitual: entidades, atributos e relacionamentos.
- Modelo logico: tabelas, chaves, cardinalidade e normalizacao inicial.
- Modelo fisico: tipos, indices, particoes, restricoes e detalhes do SGBD.
- Metadados e documentacao.
- Pegadinhas: modelo conceitual nao depende de SGBD; modelo fisico depende.

### Aula 47 - Modelo relacional, normalizacao e integridade

Arquivo sugerido: `47-modelo_relacional_normalizacao_integridade.md`

Conteudo:

- Tabelas, tuplas, atributos, dominios e relacoes.
- Chave primaria, chave estrangeira, chave candidata e chave composta.
- Integridade de entidade, referencial e de dominio.
- Normalizacao: 1FN, 2FN, 3FN e anomalias.
- Quando desnormalizar pode aparecer em contexto analitico.
- Como a FGV cobra normalizacao por dependencia e redundancia.

### Aula 48 - SQL, DDL e DML

Arquivo sugerido: `48-sql_ddl_dml.md`

Conteudo:

- SQL como linguagem de consulta estruturada.
- DDL: `CREATE`, `ALTER`, `DROP`.
- DML: `INSERT`, `UPDATE`, `DELETE`, `SELECT`.
- Filtros, ordenacao, agregacao, agrupamento e juncoes.
- Subconsultas e visao geral de views.
- Pegadinhas: `WHERE` x `HAVING`, `INNER` x `LEFT JOIN`, DDL x DML.

### Aula 49 - SGBD, propriedades, transacoes e desempenho

Arquivo sugerido: `49-sgbd_propriedades_transacoes_desempenho.md`

Conteudo:

- Papel do SGBD.
- Transacoes, ACID, commit, rollback e isolamento.
- Concorrencia, bloqueios, deadlock e consistencia.
- Indices, planos de execucao e custo de consulta em visao conceitual.
- Backup, recuperacao, logs e disponibilidade.
- Como a banca pode cobrar propriedades do banco e diferencas entre recursos.

### Aula 50 - Modelagem dimensional e abordagem multidimensional

Arquivo sugerido: `50-modelagem_dimensional_abordagem_multidimensional.md`

Conteudo:

- Diferenca entre modelagem relacional operacional e dimensional analitica.
- Fatos, dimensoes, medidas e granularidade.
- Esquema estrela e floco de neve.
- Hierarquias, tempo e historizacao.
- Relacao com OLAP, cubos e BI.
- Pegadinhas: tabela fato registra eventos/medidas; dimensao descreve contexto.

### Aula 51 - NoSQL, banco em memoria, data lakes e Big Data

Arquivo sugerido: `51-nosql_banco_memoria_data_lakes_big_data.md`

Conteudo:

- NoSQL: conceito e motivacoes.
- Modelos: chave-valor, documento, coluna larga e grafos.
- Banco em memoria: objetivo, desempenho e uso.
- Data lake: dados brutos, estruturados e nao estruturados.
- Solucoes Big Data em visao conceitual.
- Pegadinhas: NoSQL nao significa sem consulta; data lake sem governanca vira deposito caotico.

### Aula 52 - Integracao e ingestao de dados

Arquivo sugerido: `52-integracao_ingestao_dados_etl_elt.md`

Conteudo:

- Tecnicas de integracao e ingestao de dados.
- ETL, ELT, transferencia de arquivos e integracao via base de dados.
- Ingestao batch x streaming em visao conceitual.
- Qualidade, validacao, deduplicacao e linhagem de dados.
- Integracao com datalake, DW e aplicacoes analiticas.
- Como a FGV pode cobrar diferenca entre carregar, transformar e integrar dados.

### Aula 53 - Seguranca da informacao, politicas e ISO 27001/27002

Arquivo sugerido: `53-seguranca_informacao_politicas_iso_27001_27002.md`

Conteudo:

- Seguranca da informacao: objetivos e principios.
- Confidencialidade, integridade e disponibilidade.
- Politicas, normas, procedimentos e controles.
- ISO/IEC 27001: sistema de gestao de seguranca da informacao.
- ISO/IEC 27002: controles de seguranca.
- Pegadinhas: 27001 foca gestao/certificacao; 27002 foca catalogo de controles.

### Aula 54 - Controle de acesso, OAuth2, SSO e gestao de riscos

Arquivo sugerido: `54-controle_acesso_oauth2_sso_gestao_riscos.md`

Conteudo:

- Identificacao, autenticacao, autorizacao e auditoria.
- Controle de acesso: DAC, MAC, RBAC e ABAC em visao conceitual.
- OAuth2: papeis, tokens, escopos e fluxo conceitual.
- SSO: objetivo, beneficios e riscos.
- Risco, ameaca, vulnerabilidade, impacto, probabilidade e tratamento.
- Pegadinhas: OAuth2 e autorizacao delegada; autenticacao costuma vir com OpenID Connect.

### Aula 55 - Desenvolvimento seguro, OWASP, SAST e DAST

Arquivo sugerido: `55-desenvolvimento_seguro_owasp_sast_dast.md`

Conteudo:

- Security Development Lifecycle.
- OWASP Top 10: ideia geral e principais familias de risco.
- Validacao de entrada, controle de acesso, criptografia, logging e tratamento de erros.
- SAST: analise estatica de seguranca.
- DAST: analise dinamica de seguranca.
- Pegadinhas: SAST olha codigo/artefato sem executar; DAST testa aplicacao em execucao.

### Aula 56 - Gerenciamento de projetos em TI

Arquivo sugerido: `56-gerenciamento_projetos_ti.md`

Conteudo:

- Projeto, programa e portfolio.
- Areas de conhecimento e grupos de processos em visao de prova.
- Abordagem tradicional, hibrida e agil.
- Escopo, prazo, custo, qualidade, recursos, comunicacao, riscos, aquisicoes e partes interessadas.
- Indicadores e controle de projeto.
- Como a FGV pode cobrar diferenca entre operacao continua e projeto temporario.

### Aula 57 - Gestao de riscos em projetos e servicos de TI

Arquivo sugerido: `57-gestao_riscos_projetos_servicos_ti.md`

Conteudo:

- Conceito de risco em TI e diferenca para problema/incidente.
- Identificacao, analise, resposta e monitoramento.
- Risco qualitativo x quantitativo.
- Estrategias: evitar, mitigar, transferir, aceitar e explorar risco positivo.
- Relacao com seguranca da informacao, projetos e governanca.
- Pegadinhas: risco e evento incerto; issue/problema ja aconteceu.

### Aula 58 - ITIL v4: gerenciamento de servicos

Arquivo sugerido: `58-itil_v4_gerenciamento_servicos.md`

Conteudo:

- ITIL v4: objetivo e conceito de valor.
- Sistema de Valor de Servico.
- Quatro dimensoes do gerenciamento de servicos.
- Cadeia de valor de servico.
- Praticas: incidente, problema, mudanca, nivel de servico, requisicao e configuracao em visao de prova.
- Pegadinhas: incidente restaura servico; problema busca causa raiz.

### Aula 59 - COBIT 2019: governanca de TI

Arquivo sugerido: `59-cobit_2019_governanca_ti.md`

Conteudo:

- Governanca x gestao de TI.
- Objetivos do COBIT 2019.
- Principios, componentes do sistema de governanca e objetivos de governanca/gestao.
- Alinhamento entre TI e negocio.
- Medicao, controle, risco e valor.
- Como diferenciar COBIT, ITIL e Scrum em questoes.

### Aula 60 - BPMN, gestao de processos e visao integrada do cargo

Arquivo sugerido: `60-bpmn_gestao_processos_visao_integrada_cargo.md`

Conteudo:

- Gestao de processos de negocio e modelagem.
- BPMN: eventos, atividades, gateways, fluxos, pools e lanes.
- Processo, subprocesso, tarefa e ponto de decisao.
- Como processos se conectam a requisitos, automacao, sistemas e indicadores.
- Visao integrada do perfil: desenvolvimento, dados, testes, seguranca, DevOps e BI na Dataprev.
- Pegadinhas: BPMN modela processo de negocio; nao e fluxograma livre sem semantica.

## Parte 2 - Conhecimentos Gerais

### Aula 61 - Portugues: interpretacao de textos

Arquivo sugerido: `61-portugues_interpretacao_textos.md`

Conteudo:

- Compreensao x interpretacao.
- Ideia central, tese, argumentos, inferencia e pressupostos.
- Informacoes explicitas e implicitas.
- Comandos comuns da FGV.
- Como eliminar alternativas exageradas, contraditorias ou fora do texto.
- Erros comuns: responder pelo conhecimento de mundo e nao pelo texto.

### Aula 62 - Portugues: tipos e generos textuais

Arquivo sugerido: `62-portugues_tipos_generos_textuais.md`

Conteudo:

- Tipo textual x genero textual.
- Narracao, descricao, dissertacao, exposicao, injuncao e argumentacao.
- Generos comuns em prova: noticia, artigo, editorial, charge, propaganda, texto tecnico e institucional.
- Finalidade comunicativa, publico-alvo e marcas linguisticas.
- Relacao entre estrutura do texto e interpretacao.
- Pegadinhas: genero e forma social; tipo e modo de organizacao.

### Aula 63 - Portugues: ortografia e classes de palavras

Arquivo sugerido: `63-portugues_ortografia_classes_palavras.md`

Conteudo:

- Ortografia oficial e pontos mais cobraveis.
- Acentuacao em visao de prova.
- Substantivo, adjetivo, artigo, numeral, pronome, verbo, adverbio, preposicao, conjuncao e interjeicao.
- Valor semantico das classes no texto.
- Flexoes e mudancas de sentido.
- Como a FGV cobra classe gramatical dentro de interpretacao.

### Aula 64 - Portugues: coesao, referencia e tempos verbais

Arquivo sugerido: `64-portugues_coesao_referencia_tempos_verbais.md`

Conteudo:

- Coesao referencial, sequencial e lexical.
- Pronomes, substituicoes, repeticoes e conectores.
- Valor logico dos conectores: causa, consequencia, oposicao, concessao, condicao, finalidade e conclusao.
- Tempos e modos verbais no texto.
- Coerencia e progressao textual.
- Pegadinhas: trocar conector muda relacao logica.

### Aula 65 - Portugues: sintaxe, pontuacao e periodo

Arquivo sugerido: `65-portugues_sintaxe_pontuacao_periodo.md`

Conteudo:

- Termos essenciais, integrantes e acessorios da oracao.
- Periodo simples e composto.
- Coordenacao e subordinacao.
- Pontuacao: virgula, ponto e virgula, dois-pontos, travessao e parenteses.
- Efeito de sentido da pontuacao.
- Como a FGV cobra pontuacao junto de sintaxe.

### Aula 66 - Portugues: concordancia, regencia, crase e colocacao pronominal

Arquivo sugerido: `66-portugues_concordancia_regencia_crase_colocacao_pronominal.md`

Conteudo:

- Concordancia verbal e nominal.
- Regencia verbal e nominal.
- Crase: regra geral, casos obrigatorios, proibidos e facultativos.
- Pronomes obliquos atonos: proclise, mesoclise e enclise.
- Reescrita mantendo correcao gramatical.
- Pegadinhas: mudanca de regencia altera uso de crase e pronome.

### Aula 67 - Portugues: reescrita e significacao

Arquivo sugerido: `67-portugues_reescrita_significacao.md`

Conteudo:

- Reescrita de frases e paragrafos.
- Sinonimia, antonimia, polissemia, ambiguidade e valor contextual.
- Substituicao de palavras e trechos sem mudar sentido.
- Reorganizacao de oracoes e periodos.
- Niveis de formalidade.
- Como a FGV cobra equivalencia semantica e correcao gramatical ao mesmo tempo.

### Aula 68 - Ingles: estrategia de leitura para prova

Arquivo sugerido: `68-ingles_estrategia_leitura_prova.md`

Conteudo:

- Como ler texto em ingles sem traduzir palavra por palavra.
- Skimming, scanning e leitura por cognatos.
- Identificacao de tema, ideia principal e informacoes especificas.
- Falsos cognatos frequentes.
- Como lidar com vocabulario desconhecido.
- Pegadinhas: alternativa com palavra do texto, mas sentido errado.

### Aula 69 - Ingles: gramatica essencial para compreensao

Arquivo sugerido: `69-ingles_gramatica_essencial_compreensao.md`

Conteudo:

- Estrutura basica da frase em ingles.
- Tempos verbais mais relevantes para leitura.
- Voz passiva, modais, condicionais e comparativos.
- Pronomes, conectores e referencia.
- Sufixos e prefixos uteis.
- Como a gramatica ajuda a entender sentido sem decorar regras extensas.

### Aula 70 - Ingles tecnico de TI

Arquivo sugerido: `70-ingles_tecnico_ti.md`

Conteudo:

- Vocabulario de software, cloud, security, data, AI e DevOps.
- Termos comuns em documentacao tecnica.
- Verbos frequentes: deploy, build, fetch, store, process, encrypt, scale, monitor.
- Substantivos frequentes: request, response, vulnerability, workload, pipeline, dataset.
- Como interpretar textos de API, seguranca e arquitetura.
- Pegadinhas com palavras parecidas: policy, privacy, safety, security, reliability.

### Aula 71 - Ingles: textos de tecnologia, IA e seguranca

Arquivo sugerido: `71-ingles_textos_tecnologia_ia_seguranca.md`

Conteudo:

- Leitura orientada de textos sobre IA, modelos generativos e privacidade.
- Leitura de textos sobre seguranca da informacao e protecao de dados.
- Leitura de textos sobre desenvolvimento, APIs e nuvem.
- Identificacao de opiniao, fato, conclusao e evidencia.
- Marcadores discursivos em textos tecnicos.
- Como a FGV pode cobrar inferencia e vocabulario contextual.

### Aula 72 - Raciocinio logico: estruturas e argumentacao

Arquivo sugerido: `72-raciocinio_logico_estruturas_argumentacao.md`

Conteudo:

- Estruturas logicas basicas.
- Argumento, premissa e conclusao.
- Inferencia, deducao, analogia e validade.
- Condicoes necessarias e suficientes.
- Como representar enunciados em linguagem logica.
- Erros comuns: confundir verdade das premissas com validade do argumento.

### Aula 73 - Logica proposicional: proposicoes, conectivos e tabelas-verdade

Arquivo sugerido: `73-logica_proposicional_tabelas_verdade.md`

Conteudo:

- Proposicoes simples e compostas.
- Conectivos: negacao, conjuncao, disjuncao, condicional e bicondicional.
- Tabelas-verdade.
- Tautologia, contradicao e contingencia.
- Equivalencias logicas principais.
- Pegadinhas: condicional so e falsa quando antecedente e verdadeiro e consequente falso.

### Aula 74 - Diagramas logicos e logica de primeira ordem

Arquivo sugerido: `74-diagramas_logicos_logica_primeira_ordem.md`

Conteudo:

- Diagramas logicos com conjuntos.
- Todo, algum, nenhum e suas negacoes.
- Quantificadores em visao introdutoria.
- Relacao entre proposicoes categoricas.
- Traducao de frases para representacao logica.
- Como evitar erro com negacao de quantificadores.

### Aula 75 - Problemas aritmeticos, geometricos e matriciais

Arquivo sugerido: `75-problemas_aritmeticos_geometricos_matriciais.md`

Conteudo:

- Problemas aritmeticos: proporcao, porcentagem, sequencias e contagem simples.
- Problemas geometricos: area, perimetro, figuras e raciocinio espacial basico.
- Matrizes e padroes visuais.
- Estrategias de resolucao por eliminacao e teste de alternativas.
- Controle de tempo em questoes de logica.
- Pegadinhas: padrao aparente nem sempre e o padrao correto.

### Aula 76 - Atualidades: temas relevantes e leitura de contexto

Arquivo sugerido: `76-atualidades_temas_relevantes_contexto.md`

Conteudo:

- Como estudar atualidades sem tentar decorar o mundo inteiro.
- Temas do edital: seguranca, transportes, politica, economia, sociedade, educacao, saude, cultura, tecnologia, energia, relacoes internacionais, sustentabilidade e ecologia.
- Leitura de fatos, causas, consequencias e atores envolvidos.
- Conexao entre tecnologia, Estado, servicos publicos e cidadania.
- Como a FGV costuma cobrar atualidades por interpretacao e contexto.
- Erros comuns: estudar opiniao solta em vez de conceito e fato consolidado.

### Aula 77 - Inteligencia artificial: fundamentos e aprendizado de maquina

Arquivo sugerido: `77-ia_fundamentos_aprendizado_maquina.md`

Conteudo:

- Conceito de inteligencia artificial.
- Aprendizado de maquina: supervisionado, nao supervisionado e por reforco em visao conceitual.
- Dados, treinamento, modelo, predicao, avaliacao e vies.
- Aplicacoes em servicos publicos e sistemas corporativos.
- Limites e riscos de modelos.
- Pegadinhas: IA nao e magia; depende de dados, objetivo, treinamento e avaliacao.

### Aula 78 - IA generativa, modelos de linguagem, etica, governanca e privacidade

Arquivo sugerido: `78-ia_generativa_llm_etica_governanca_privacidade.md`

Conteudo:

- Modelos generativos: texto, imagem, codigo e outros formatos.
- Modelos de linguagem: tokens, contexto, prompt e geracao probabilistica.
- Alucinacao, vies, explicabilidade e avaliacao.
- Etica e governanca de IA.
- Privacidade, dados pessoais, seguranca e uso responsavel.
- Como a FGV pode cobrar riscos e beneficios de IA generativa.

### Aula 79 - LAI, Decreto 7.724 e Decreto 7.845

Arquivo sugerido: `79-lai_decretos_7724_7845.md`

Conteudo:

- Lei de Acesso a Informacao: finalidade e abrangencia.
- Publicidade como regra e sigilo como excecao.
- Transparencia ativa e passiva.
- Prazos, pedidos, recursos e responsabilidades.
- Decreto 7.724 e regulamentacao da LAI.
- Decreto 7.845 e tratamento/classificacao de informacao sigilosa.

### Aula 80 - Delitos informaticos, Marco Civil e LGPD

Arquivo sugerido: `80-delitos_informaticos_marco_civil_lgpd.md`

Conteudo:

- Lei 12.737/2012: delitos informaticos, com foco no art. 2 conforme edital.
- Marco Civil da Internet: principios, direitos, garantias e deveres nas secoes cobradas.
- LGPD: fundamentos, conceitos, bases legais, direitos do titular, agentes de tratamento, seguranca, fiscalizacao e ANPD nos capitulos cobrados.
- Diferenca entre dado pessoal, dado sensivel, controlador, operador e encarregado.
- Relacao entre LGPD, seguranca da informacao, desenvolvimento seguro e IA.
- Pegadinhas: consentimento nao e a unica base legal; anonimizado nao e o mesmo que pseudonimizado.

## Ordem de producao sugerida

Para criar as aulas sem se perder, produza em blocos de 10:

```text
Bloco 1: aulas 01-10  -> Java, JakartaEE, JPA, Spring
Bloco 2: aulas 11-20  -> JavaScript, mobile, arquitetura, APIs, integracao
Bloco 3: aulas 21-30  -> portais, Git, DevOps, testes, agil, requisitos, metricas
Bloco 4: aulas 31-40  -> reuso, frontend, UX, containers, arquitetura, microservicos
Bloco 5: aulas 41-50  -> blockchain, IA/dados, BI, DW, modelagem, SQL, SGBD
Bloco 6: aulas 51-60  -> NoSQL, ingestao, seguranca, governanca, ITIL, COBIT, BPMN
Bloco 7: aulas 61-70  -> Portugues e Ingles
Bloco 8: aulas 71-80  -> Ingles tecnico, logica, atualidades, IA e legislacao
```

Regra pratica: ao terminar cada bloco de 10 aulas, fazer um simulado parcial e alimentar o caderno de erros. As aulas novas depois disso devem respeitar o roteiro, mas podem ganhar mais profundidade nos assuntos em que os erros aparecerem mais.
