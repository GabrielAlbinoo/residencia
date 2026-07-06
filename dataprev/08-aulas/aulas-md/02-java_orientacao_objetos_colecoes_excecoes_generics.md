# Aula Detalhada - Java: Orientacao A Objetos, Colecoes, Excecoes E Generics

**Tema do dia:** classes, objetos, atributos, metodos, construtores, encapsulamento, heranca, polimorfismo, interfaces, classes abstratas, `Object`, `equals`, `hashCode`, colecoes, generics e tratamento de excecoes.

**Aula na sequencia:** 02

**Objetivo:** entender a base de Java usada em sistemas reais: modelar objetos, organizar comportamento, manipular conjuntos de dados com colecoes, lidar com erros por excecoes e usar generics para escrever codigo mais seguro.

---

## 1. Onde Esta Aula Entra No Estudo?

Na Aula 01, voce estudou:

```text
JDK, JRE, JVM
bytecode
compilacao e execucao
estrutura basica de um programa Java
tipos primitivos e referencia
String
operadores
controle de fluxo
arrays
metodos
static
erros de compilacao e execucao
```

Agora a pergunta muda.

Antes era:

```text
como um programa Java basico funciona?
```

Agora e:

```text
como Java organiza sistemas maiores?
```

Essa aula e essencial porque praticamente todos os frameworks do edital se apoiam nesses fundamentos.

Exemplos:

```text
JPA/Hibernate -> entidades, objetos, equals, hashCode, relacionamentos
Spring -> classes, interfaces, injecao de dependencia, polimorfismo
JUnit -> metodos, excecoes, objetos testaveis
APIs REST -> DTOs, services, controllers, excecoes e colecoes
JSF/PrimeFaces -> beans, propriedades e objetos de tela
```

Se esta aula ficar bem fixada, as proximas ficam menos assustadoras.

---

## 2. Ideia Central

Java e uma linguagem fortemente baseada em:

```text
classes
objetos
tipos
contratos
reuso
tratamento de erros
```

Um sistema Java real costuma ser uma rede de objetos colaborando.

Exemplo conceitual:

```text
Controller recebe requisicao
-> Service aplica regra de negocio
-> Repository acessa dados
-> Entity representa dados do dominio
-> DTO transporta dados para fora
```

Mesmo antes de estudar Spring, essa ideia ja aparece em Java puro:

```text
classe define estrutura
objeto executa comportamento
interface define contrato
colecao agrupa objetos
excecao representa situacao anormal
generic deixa o tipo explicito e seguro
```

Mapa mental:

```text
OO
-> classes e objetos
-> encapsulamento
-> heranca
-> polimorfismo
-> abstracao

Colecoes
-> List
-> Set
-> Map

Excecoes
-> checked
-> unchecked
-> try/catch/finally

Generics
-> List<String>
-> Map<Long, Usuario>
-> seguranca de tipo
```

---

## 3. Classes E Objetos

## 3.1 O que e uma classe?

Classe e um molde.

Ela descreve:

```text
quais dados um objeto tera
quais comportamentos um objeto podera executar
```

Exemplo:

```java
public class Usuario {
    private String nome;
    private String email;

    public void ativar() {
        System.out.println("Usuario ativado");
    }
}
```

A classe `Usuario` define que um usuario tem:

```text
nome
email
comportamento ativar
```

## 3.2 O que e um objeto?

Objeto e uma instancia de uma classe.

Exemplo:

```java
Usuario usuario = new Usuario();
```

Aqui:

```text
Usuario -> tipo/classe
usuario -> variavel de referencia
new Usuario() -> objeto criado no heap
```

Modelo mental:

```text
classe = molde
objeto = coisa criada a partir do molde
```

Analogia:

```text
Classe: PlantaDeCasa
Objeto: Casa construida
```

## 3.3 Estado e comportamento

Um objeto tem:

```text
estado
comportamento
```

Estado:

```text
valores dos atributos
```

Comportamento:

```text
metodos
```

Exemplo:

```java
public class Conta {
    private double saldo;

    public void depositar(double valor) {
        saldo = saldo + valor;
    }

    public double getSaldo() {
        return saldo;
    }
}
```

Estado:

```text
saldo
```

Comportamento:

```text
depositar
getSaldo
```

## 3.4 Criando mais de um objeto

```java
Conta conta1 = new Conta();
Conta conta2 = new Conta();

conta1.depositar(100);
conta2.depositar(200);
```

`conta1` e `conta2` sao objetos diferentes.

Cada um tem seu proprio saldo.

Modelo:

```text
conta1 -> Conta(saldo = 100)
conta2 -> Conta(saldo = 200)
```

Pegadinha:

```java
Conta conta1 = new Conta();
Conta conta2 = conta1;
```

Agora nao existem duas contas.

Existem duas referencias para o mesmo objeto.

Modelo:

```text
conta1 ----\
           v
conta2 ---> mesmo objeto Conta
```

Se fizer:

```java
conta2.depositar(100);
```

o saldo visto por `conta1` tambem muda, porque o objeto e o mesmo.

---

## 4. Atributos

Atributos guardam o estado do objeto.

Exemplo:

```java
public class Pessoa {
    private String nome;
    private int idade;
}
```

`nome` e `idade` sao atributos.

## 4.1 Atributo de instancia

Atributo de instancia pertence a cada objeto.

```java
public class Usuario {
    private String nome;
}
```

Cada objeto `Usuario` tem seu proprio `nome`.

## 4.2 Atributo static

Atributo `static` pertence a classe.

```java
public class Usuario {
    public static int totalUsuarios = 0;
}
```

Todos os objetos compartilham o mesmo valor.

Pegadinha:

```text
atributo de instancia -> cada objeto tem o seu
atributo static -> a classe compartilha
```

## 4.3 Visibilidade de atributos

Em Java, normalmente atributos ficam privados:

```java
private String nome;
```

Isso protege o estado interno do objeto.

O acesso deve acontecer por metodos.

Exemplo:

```java
public String getNome() {
    return nome;
}

public void setNome(String nome) {
    this.nome = nome;
}
```

Isso leva ao proximo conceito: encapsulamento.

---

## 5. Encapsulamento

Encapsulamento e proteger os dados internos de uma classe e controlar como eles sao acessados ou modificados.

Ideia:

```text
atributos privados
metodos publicos controlados
```

Exemplo ruim:

```java
public class Conta {
    public double saldo;
}
```

Qualquer parte do sistema poderia fazer:

```java
conta.saldo = -999999;
```

Exemplo melhor:

```java
public class Conta {
    private double saldo;

    public void depositar(double valor) {
        if (valor <= 0) {
            throw new IllegalArgumentException("Valor deve ser positivo");
        }
        saldo = saldo + valor;
    }

    public double getSaldo() {
        return saldo;
    }
}
```

Agora a classe controla a regra.

## 5.1 Getters e setters

Getter le valor.

Setter altera valor.

```java
public String getNome() {
    return nome;
}

public void setNome(String nome) {
    this.nome = nome;
}
```

Mas cuidado:

```text
encapsulamento nao significa criar getter e setter para tudo sem pensar.
```

Um objeto deve proteger suas invariantes.

Invariante e uma regra que precisa permanecer verdadeira.

Exemplo:

```text
saldo nao pode ficar negativo
CPF nao pode mudar depois de cadastrado
email nao pode ser vazio
```

## 5.2 Beneficios do encapsulamento

```text
protege estado interno
centraliza regras
reduz acoplamento
facilita manutencao
facilita validacao
evita alteracoes indevidas
```

## 5.3 Como a FGV pode cobrar

A banca pode afirmar:

```text
Encapsulamento consiste em expor diretamente os atributos publicos de uma classe.
```

Isso esta errado.

Melhor:

```text
Encapsulamento consiste em ocultar detalhes internos e controlar o acesso ao estado do objeto.
```

---

## 6. Construtores

Construtor e um bloco usado para inicializar objetos.

Exemplo:

```java
public class Usuario {
    private String nome;

    public Usuario(String nome) {
        this.nome = nome;
    }
}
```

Uso:

```java
Usuario usuario = new Usuario("Ana");
```

## 6.1 Caracteristicas do construtor

Construtor:

```text
tem o mesmo nome da classe
nao tem tipo de retorno
e chamado com new
pode receber parametros
pode ser sobrecarregado
```

Errado:

```java
public void Usuario(String nome) {
    this.nome = nome;
}
```

Isso nao e construtor.

E um metodo chamado `Usuario`, porque tem `void`.

## 6.2 Construtor padrao

Se voce nao declara nenhum construtor, Java fornece um construtor sem argumentos.

Exemplo:

```java
public class Usuario {
}
```

Pode fazer:

```java
Usuario u = new Usuario();
```

Mas se voce cria um construtor:

```java
public class Usuario {
    public Usuario(String nome) {
    }
}
```

Java nao cria automaticamente o sem argumentos.

Entao isto nao compila:

```java
Usuario u = new Usuario();
```

A menos que voce tambem declare:

```java
public Usuario() {
}
```

## 6.3 Sobrecarga de construtores

```java
public class Usuario {
    private String nome;
    private String email;

    public Usuario(String nome) {
        this.nome = nome;
    }

    public Usuario(String nome, String email) {
        this.nome = nome;
        this.email = email;
    }
}
```

Dois construtores, parametros diferentes.

Isso e sobrecarga.

## 6.4 `this`

`this` referencia o objeto atual.

Exemplo:

```java
public Usuario(String nome) {
    this.nome = nome;
}
```

Aqui:

```text
this.nome -> atributo do objeto
nome -> parametro do construtor
```

Tambem da para chamar outro construtor:

```java
public Usuario() {
    this("Sem nome");
}
```

---

## 7. Metodos

Metodo representa comportamento.

Exemplo:

```java
public boolean podeAcessarSistema() {
    return ativo;
}
```

## 7.1 Assinatura de metodo

Em Java, a assinatura de um metodo considera:

```text
nome do metodo
tipos dos parametros
ordem dos parametros
```

Exemplo:

```java
public void salvar(Usuario usuario) {
}

public void salvar(Usuario usuario, boolean validar) {
}
```

Esses metodos podem coexistir.

## 7.2 Sobrecarga

Sobrecarga e ter mesmo nome com parametros diferentes.

Exemplo:

```java
public int somar(int a, int b) {
    return a + b;
}

public int somar(int a, int b, int c) {
    return a + b + c;
}
```

Somente mudar retorno nao basta:

```java
public int buscar() {
    return 1;
}

public String buscar() {
    return "1";
}
```

Isso nao compila.

## 7.3 Metodo de instancia x metodo static

Metodo de instancia precisa de objeto:

```java
Usuario u = new Usuario("Ana");
u.getNome();
```

Metodo static pertence a classe:

```java
Math.max(10, 20);
```

Pegadinha:

```text
static nao depende de estado especifico de um objeto.
```

---

## 8. Heranca

Heranca permite criar uma classe baseada em outra.

Exemplo:

```java
public class Pessoa {
    private String nome;

    public String getNome() {
        return nome;
    }
}

public class Empregado extends Pessoa {
    private String matricula;
}
```

`Empregado` herda de `Pessoa`.

Em Java:

```text
extends indica heranca de classe
```

## 8.1 Superclasse e subclasse

```text
Pessoa -> superclasse
Empregado -> subclasse
```

A subclasse herda membros acessiveis da superclasse.

Membros `private` existem no objeto, mas nao sao acessados diretamente pela subclasse.

## 8.2 Java nao tem heranca multipla de classes

Uma classe Java so pode estender uma classe.

Exemplo:

```java
public class A extends B {
}
```

Nao pode:

```java
public class A extends B, C {
}
```

Isso e erro.

Mas uma classe pode implementar varias interfaces.

```java
public class Servico implements Auditavel, Validavel {
}
```

## 8.3 `super`

`super` referencia a superclasse.

Exemplo:

```java
public class Empregado extends Pessoa {
    public Empregado(String nome) {
        super(nome);
    }
}
```

`super(nome)` chama construtor da classe pai.

## 8.4 Sobrescrita de metodo

Sobrescrita ocorre quando a subclasse fornece nova implementacao para metodo herdado.

Exemplo:

```java
public class Animal {
    public void emitirSom() {
        System.out.println("Som generico");
    }
}

public class Cachorro extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Latido");
    }
}
```

`@Override` ajuda o compilador a verificar se voce realmente esta sobrescrevendo.

## 8.5 Sobrecarga x sobrescrita

| Conceito | O que muda | Exemplo |
|---|---|---|
| Sobrecarga | parametros | mesmo nome, parametros diferentes |
| Sobrescrita | implementacao herdada | subclasse redefine metodo |

Forma de memorizar:

```text
sobrecarga -> overload -> mesma classe ou hierarquia, assinatura diferente
sobrescrita -> override -> subclasse troca comportamento herdado
```

---

## 9. Polimorfismo

Polimorfismo significa "muitas formas".

Em Java, uma referencia de tipo mais geral pode apontar para objeto de tipo mais especifico.

Exemplo:

```java
Animal animal = new Cachorro();
animal.emitirSom();
```

Se `Cachorro` sobrescreve `emitirSom`, o metodo executado e o de `Cachorro`.

Isso e despacho dinamico.

## 9.1 Exemplo com interface

```java
public interface Notificador {
    void enviar(String mensagem);
}

public class EmailNotificador implements Notificador {
    public void enviar(String mensagem) {
        System.out.println("Email: " + mensagem);
    }
}

public class SmsNotificador implements Notificador {
    public void enviar(String mensagem) {
        System.out.println("SMS: " + mensagem);
    }
}
```

Uso:

```java
public class AlertaService {
    private Notificador notificador;

    public AlertaService(Notificador notificador) {
        this.notificador = notificador;
    }

    public void alertar() {
        notificador.enviar("Falha detectada");
    }
}
```

`AlertaService` depende do contrato `Notificador`, nao da classe concreta.

Isso e a base de muito codigo Spring.

## 9.2 Beneficios

```text
reduz acoplamento
facilita troca de implementacao
facilita testes
permite extensao
combina com interfaces
```

## 9.3 Como a FGV pode cobrar

A banca pode perguntar:

```text
Qual conceito permite tratar objetos de classes diferentes por meio de uma interface comum?
```

Resposta:

```text
polimorfismo
```

---

## 10. Abstracao, Classes Abstratas E Interfaces

## 10.1 Abstracao

Abstracao e focar no essencial e esconder detalhes desnecessarios.

Exemplo:

```text
Um pagamento pode ser aprovado.
Nao importa, no contrato principal, se e cartao, boleto ou pix.
```

Contrato:

```java
public interface Pagamento {
    void aprovar();
}
```

Implementacoes:

```java
public class PagamentoCartao implements Pagamento {
    public void aprovar() {
        System.out.println("Aprovando cartao");
    }
}
```

## 10.2 Classe abstrata

Classe abstrata nao pode ser instanciada diretamente.

Exemplo:

```java
public abstract class Relatorio {
    public void gerar() {
        carregarDados();
        formatar();
    }

    protected abstract void carregarDados();

    protected abstract void formatar();
}
```

Ela pode ter:

```text
atributos
construtores
metodos concretos
metodos abstratos
```

## 10.3 Interface

Interface define contrato.

Exemplo:

```java
public interface RepositorioUsuario {
    Usuario buscarPorId(Long id);
    void salvar(Usuario usuario);
}
```

Uma classe implementa:

```java
public class RepositorioUsuarioJpa implements RepositorioUsuario {
    public Usuario buscarPorId(Long id) {
        return null;
    }

    public void salvar(Usuario usuario) {
    }
}
```

## 10.4 Classe abstrata x interface

| Ponto | Classe abstrata | Interface |
|---|---|---|
| Relacao | "e um" com base comum | "cumpre contrato" |
| Estado | pode ter atributos de instancia | normalmente nao guarda estado de instancia |
| Heranca | uma classe so estende uma classe | pode implementar varias interfaces |
| Uso comum | compartilhar base e comportamento | definir contrato desacoplado |

Para prova:

```text
classe pode estender uma classe abstrata
classe pode implementar varias interfaces
```

## 10.5 Interfaces modernas

Java 8 adicionou metodos `default` e `static` em interfaces.

Exemplo:

```java
public interface Identificavel {
    Long getId();

    default boolean temId() {
        return getId() != null;
    }
}
```

Como o edital fala "Java versao 6 ou superior", a banca pode cobrar conceitos modernos, mas o nucleo classico continua muito importante.

---

## 11. A Classe Object

Em Java, toda classe herda direta ou indiretamente de `Object`.

Exemplo:

```java
public class Usuario {
}
```

Mesmo sem escrever, `Usuario` herda de `Object`.

Metodos importantes de `Object`:

```text
toString
equals
hashCode
getClass
```

## 11.1 toString

`toString` devolve representacao textual do objeto.

Exemplo:

```java
public class Usuario {
    private String nome;

    @Override
    public String toString() {
        return "Usuario{nome='" + nome + "'}";
    }
}
```

Sem sobrescrever, a saida padrao costuma ser pouco informativa.

## 11.2 equals

`equals` compara igualdade logica entre objetos.

Por padrao, em `Object`, compara referencia.

Mas classes podem sobrescrever para comparar conteudo.

Exemplo:

```java
public class Usuario {
    private Long id;

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Usuario)) {
            return false;
        }
        Usuario outro = (Usuario) obj;
        return id != null && id.equals(outro.id);
    }
}
```

## 11.3 hashCode

`hashCode` devolve um numero usado por estruturas baseadas em hash, como `HashSet` e `HashMap`.

Regra essencial:

```text
se dois objetos sao iguais por equals, eles devem ter o mesmo hashCode
```

Nao e obrigatorio que objetos diferentes tenham hashCode diferente.

Colisoes podem existir.

## 11.4 Contrato equals/hashCode

Memorize:

```text
equals true -> hashCode igual
hashCode igual -> nao garante equals true
```

Essa regra e muito importante para colecoes.

Se voce sobrescreve `equals` e nao sobrescreve `hashCode`, pode quebrar comportamento de `HashSet` e `HashMap`.

## 11.5 Relacao com JPA

Em entidades JPA, `equals` e `hashCode` precisam de cuidado.

Por que?

Porque entidades podem ter id gerado pelo banco.

Antes de persistir:

```text
id = null
```

Depois de persistir:

```text
id = valor gerado
```

Isso pode afetar igualdade e colecoes.

Nao precisamos resolver esse problema agora.

Mas e importante saber que esse assunto volta em JPA/Hibernate.

---

## 12. Colecoes

Colecoes sao estruturas para agrupar objetos.

Antes, na Aula 01, voce viu arrays.

Array:

```text
tamanho fixo
indice numerico
tipo unico
```

Colecoes:

```text
mais flexiveis
interfaces padronizadas
varias implementacoes
trabalham com objetos
```

Principais interfaces:

```text
List
Set
Map
Queue
```

Nesta aula, o foco sera:

```text
List
Set
Map
```

porque sao as mais cobraveis em base Java.

---

## 13. List

`List` representa uma sequencia ordenada de elementos.

Caracteristicas:

```text
mantem ordem de insercao
permite elementos duplicados
acesso por indice
```

Exemplo:

```java
List<String> nomes = new ArrayList<>();
nomes.add("Ana");
nomes.add("Bruno");
nomes.add("Ana");
```

Resultado conceitual:

```text
indice 0 -> Ana
indice 1 -> Bruno
indice 2 -> Ana
```

Duplicado e permitido.

## 13.1 ArrayList

`ArrayList` e implementacao de `List` baseada em array dinamico.

Boa para:

```text
acesso por indice
iteracao
adicao no final
```

Pode ser ruim para:

```text
insercoes/remocoes frequentes no meio da lista
```

Exemplo:

```java
List<Integer> numeros = new ArrayList<>();
numeros.add(10);
numeros.add(20);
System.out.println(numeros.get(0));
```

Saida:

```text
10
```

## 13.2 LinkedList

`LinkedList` e lista encadeada.

Tambem implementa `List`.

Tem caracteristicas diferentes de `ArrayList`.

Para prova, nao precisa decorar desempenho em detalhes profundos, mas saiba:

```text
ArrayList -> array dinamico
LinkedList -> nos ligados
```

## 13.3 Percorrendo List

Com enhanced for:

```java
for (String nome : nomes) {
    System.out.println(nome);
}
```

Com indice:

```java
for (int i = 0; i < nomes.size(); i++) {
    System.out.println(nomes.get(i));
}
```

Em colecao:

```java
nomes.size()
```

Em array:

```java
array.length
```

Essa diferenca e cobrada.

---

## 14. Set

`Set` representa conjunto.

Caracteristicas:

```text
nao permite duplicados
nao garante necessariamente ordem
```

Exemplo:

```java
Set<String> nomes = new HashSet<>();
nomes.add("Ana");
nomes.add("Bruno");
nomes.add("Ana");
```

O conjunto tera:

```text
Ana
Bruno
```

`Ana` nao entra duas vezes.

## 14.1 HashSet

`HashSet` usa hash para organizar elementos.

Depende de:

```text
equals
hashCode
```

Se voce coloca objetos proprios em `HashSet`, precisa cuidar desses metodos.

## 14.2 LinkedHashSet

`LinkedHashSet` mantem ordem de insercao.

Conceito:

```text
nao permite duplicados
preserva ordem de entrada
```

## 14.3 TreeSet

`TreeSet` mantem elementos ordenados.

Normalmente exige:

```text
ordem natural
ou Comparator
```

Exemplo conceitual:

```java
Set<Integer> numeros = new TreeSet<>();
numeros.add(3);
numeros.add(1);
numeros.add(2);
```

Iteracao:

```text
1
2
3
```

## 14.4 List x Set

| Interface | Permite duplicados | Tem indice | Observacao |
|---|---|---|---|
| List | sim | sim | sequencia ordenada |
| Set | nao | nao | conjunto sem duplicados |

---

## 15. Map

`Map` representa pares chave-valor.

Exemplo:

```java
Map<Long, String> usuarios = new HashMap<>();
usuarios.put(1L, "Ana");
usuarios.put(2L, "Bruno");
```

Aqui:

```text
chave 1 -> Ana
chave 2 -> Bruno
```

## 15.1 Chave unica

Em um `Map`, a chave e unica.

Exemplo:

```java
usuarios.put(1L, "Ana");
usuarios.put(1L, "Carlos");
```

O valor associado a chave `1L` passa a ser:

```text
Carlos
```

O segundo `put` substitui o primeiro valor.

## 15.2 HashMap

`HashMap` usa hash.

Depende de:

```text
equals
hashCode
```

principalmente para as chaves.

## 15.3 LinkedHashMap

`LinkedHashMap` preserva ordem de insercao.

## 15.4 TreeMap

`TreeMap` mantem chaves ordenadas.

## 15.5 Percorrendo Map

Por entradas:

```java
for (Map.Entry<Long, String> entrada : usuarios.entrySet()) {
    System.out.println(entrada.getKey() + " -> " + entrada.getValue());
}
```

Por chaves:

```java
for (Long id : usuarios.keySet()) {
    System.out.println(id);
}
```

Por valores:

```java
for (String nome : usuarios.values()) {
    System.out.println(nome);
}
```

## 15.6 List x Set x Map

| Estrutura | Ideia | Duplicados | Acesso |
|---|---|---|---|
| List | sequencia | permite | indice |
| Set | conjunto | nao permite | por iteracao |
| Map | chave-valor | chave unica | chave |

Forma simples:

```text
List -> lista
Set -> conjunto
Map -> dicionario/tabela de chave-valor
```

---

## 16. Generics

Generics permitem parametrizar tipos.

Exemplo sem generics:

```java
List nomes = new ArrayList();
nomes.add("Ana");
nomes.add(10);
```

Isso mistura tipos.

Depois:

```java
String nome = (String) nomes.get(1);
```

Pode gerar erro em execucao.

Com generics:

```java
List<String> nomes = new ArrayList<>();
nomes.add("Ana");
```

Agora isto nao compila:

```java
nomes.add(10);
```

## 16.1 Beneficio principal

Generics trazem:

```text
seguranca de tipo em tempo de compilacao
menos casts
codigo mais expressivo
```

Exemplo:

```java
Map<Long, Usuario> usuariosPorId = new HashMap<>();
```

So de ler, voce entende:

```text
chave -> Long
valor -> Usuario
```

## 16.2 Diamond operator

Em Java moderno:

```java
List<String> nomes = new ArrayList<>();
```

O `<>` do lado direito e chamado diamond operator.

Antes era comum escrever:

```java
List<String> nomes = new ArrayList<String>();
```

## 16.3 Classe generica

Voce pode criar classe generica.

Exemplo:

```java
public class Caixa<T> {
    private T valor;

    public void guardar(T valor) {
        this.valor = valor;
    }

    public T obter() {
        return valor;
    }
}
```

Uso:

```java
Caixa<String> caixaTexto = new Caixa<>();
caixaTexto.guardar("Java");

Caixa<Integer> caixaNumero = new Caixa<>();
caixaNumero.guardar(10);
```

`T` e um parametro de tipo.

## 16.4 Metodo generico

```java
public <T> T primeiro(List<T> lista) {
    return lista.get(0);
}
```

O metodo funciona para:

```text
List<String>
List<Integer>
List<Usuario>
```

## 16.5 Wildcards

Wildcard usa `?`.

Exemplo:

```java
public void imprimir(List<?> itens) {
    for (Object item : itens) {
        System.out.println(item);
    }
}
```

`List<?>` significa:

```text
lista de algum tipo desconhecido
```

## 16.6 extends em generics

```java
public double somarAreas(List<? extends Forma> formas) {
    double total = 0;
    for (Forma forma : formas) {
        total += forma.area();
    }
    return total;
}
```

`? extends Forma` significa:

```text
Forma ou algum subtipo de Forma
```

Bom para leitura.

## 16.7 super em generics

```java
public void adicionarCachorros(List<? super Cachorro> lista) {
    lista.add(new Cachorro());
}
```

`? super Cachorro` significa:

```text
Cachorro ou algum supertipo de Cachorro
```

Bom para escrita.

## 16.8 Regra PECS

Regra util:

```text
Producer Extends, Consumer Super
```

Em portugues:

```text
se a estrutura produz valores para voce ler -> extends
se a estrutura consome valores que voce adiciona -> super
```

Para a FGV, talvez nao venha no nivel mais profundo, mas a ideia pode aparecer em questao conceitual de generics.

## 16.9 Type erasure

Generics em Java usam type erasure.

Em termos simples:

```text
informacoes genericas ajudam na compilacao
mas parte delas e apagada no bytecode
```

Por isso, em tempo de execucao, `List<String>` e `List<Integer>` sao ambas listas.

Para prova, memorize:

```text
generics aumentam seguranca de tipo em tempo de compilacao.
```

---

## 17. Excecoes

Excecoes representam situacoes anormais no fluxo do programa.

Exemplos:

```text
arquivo nao encontrado
entrada invalida
divisao por zero
referencia nula
falha de banco
falha de rede
usuario sem permissao
```

Java usa objetos para representar excecoes.

Hierarquia simplificada:

```text
Throwable
-> Error
-> Exception
   -> RuntimeException
```

## 17.1 Error

`Error` representa problemas graves, normalmente fora do controle da aplicacao.

Exemplo:

```text
OutOfMemoryError
StackOverflowError
```

Em regra, a aplicacao nao deve tratar `Error` como fluxo normal.

## 17.2 Exception

`Exception` representa situacoes que a aplicacao pode tratar.

Exemplo:

```text
IOException
SQLException
```

## 17.3 RuntimeException

`RuntimeException` representa excecoes nao verificadas.

Exemplos:

```text
NullPointerException
IllegalArgumentException
IndexOutOfBoundsException
ArithmeticException
```

---

## 18. Checked E Unchecked Exceptions

## 18.1 Checked exceptions

Checked exceptions sao verificadas pelo compilador.

Se um metodo pode lancar uma checked exception, voce precisa:

```text
tratar com try/catch
ou declarar com throws
```

Exemplo:

```java
public void lerArquivo(String caminho) throws IOException {
    Files.readString(Path.of(caminho));
}
```

`IOException` e checked.

## 18.2 Unchecked exceptions

Unchecked exceptions nao precisam ser declaradas ou capturadas obrigatoriamente.

Elas herdam de `RuntimeException`.

Exemplo:

```java
public void atualizarNome(String nome) {
    if (nome == null) {
        throw new IllegalArgumentException("Nome obrigatorio");
    }
}
```

`IllegalArgumentException` e unchecked.

## 18.3 Comparacao

| Tipo | Compilador obriga tratar? | Exemplo |
|---|---|---|
| Checked | sim | `IOException` |
| Unchecked | nao | `NullPointerException` |
| Error | nao e fluxo normal de tratamento | `OutOfMemoryError` |

## 18.4 Pegadinha

Toda `RuntimeException` e `Exception`, mas nem toda `Exception` e `RuntimeException`.

Modelo:

```text
Exception
  |
  +-- RuntimeException
```

---

## 19. Try, Catch E Finally

## 19.1 Try/catch

```java
try {
    int resultado = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Erro de calculo");
}
```

O bloco `try` contem codigo que pode falhar.

O bloco `catch` trata a excecao.

## 19.2 Multiplos catch

```java
try {
    executar();
} catch (IllegalArgumentException e) {
    System.out.println("Parametro invalido");
} catch (RuntimeException e) {
    System.out.println("Erro em tempo de execucao");
}
```

A ordem importa.

O catch mais especifico deve vir antes do mais generico.

Errado:

```java
try {
    executar();
} catch (RuntimeException e) {
    System.out.println("Erro");
} catch (IllegalArgumentException e) {
    System.out.println("Parametro invalido");
}
```

`IllegalArgumentException` nunca seria alcancado, porque ja foi capturado por `RuntimeException`.

Isso gera problema de compilacao.

## 19.3 Finally

`finally` executa apos `try/catch`, com ou sem excecao, salvo casos extremos como encerramento da JVM.

Exemplo:

```java
try {
    executar();
} catch (Exception e) {
    System.out.println("Falha");
} finally {
    System.out.println("Finalizando");
}
```

Uso comum:

```text
liberar recurso
fechar conexao
fechar arquivo
limpar estado temporario
```

## 19.4 Try-with-resources

Java 7 trouxe try-with-resources.

Exemplo:

```java
try (BufferedReader reader = Files.newBufferedReader(Path.of("dados.txt"))) {
    System.out.println(reader.readLine());
} catch (IOException e) {
    System.out.println("Erro ao ler arquivo");
}
```

O recurso e fechado automaticamente se implementar `AutoCloseable`.

Para prova:

```text
try-with-resources ajuda a fechar recursos automaticamente.
```

---

## 20. Throw E Throws

Esses dois termos sao parecidos, mas diferentes.

## 20.1 throw

`throw` lanca uma excecao.

Exemplo:

```java
if (idade < 0) {
    throw new IllegalArgumentException("Idade invalida");
}
```

## 20.2 throws

`throws` declara que um metodo pode lancar excecao.

Exemplo:

```java
public void processar() throws IOException {
    lerArquivo();
}
```

## 20.3 Comparacao

| Palavra | Funcao |
|---|---|
| `throw` | lanca uma excecao |
| `throws` | declara excecao na assinatura |

Forma de memorizar:

```text
throw -> acao
throws -> aviso na assinatura
```

---

## 21. Excecoes Personalizadas

Voce pode criar suas proprias excecoes.

Exemplo unchecked:

```java
public class RegraNegocioException extends RuntimeException {
    public RegraNegocioException(String mensagem) {
        super(mensagem);
    }
}
```

Uso:

```java
if (saldo < valor) {
    throw new RegraNegocioException("Saldo insuficiente");
}
```

## 21.1 Quando usar

Excecao personalizada ajuda quando voce quer representar um erro do dominio.

Exemplos:

```text
UsuarioInativoException
SaldoInsuficienteException
DocumentoInvalidoException
PermissaoNegadaException
```

Mas nao crie excecao nova para qualquer coisa pequena.

## 21.2 Checked ou unchecked?

Em aplicacoes modernas, muitas regras de negocio usam unchecked exceptions.

Checked exceptions fazem sentido quando o chamador realmente deve lidar com a situacao.

Para prova:

```text
checked -> compilador obriga tratar/declarar
unchecked -> nao obriga
```

---

## 22. Boas Praticas Com Excecoes

Boas praticas:

```text
nao engolir excecao sem registrar ou tratar
nao usar excecao para fluxo comum
usar mensagens claras
preservar causa original quando relancar
capturar excecoes especificas quando possivel
nao capturar Throwable genericamente em fluxo normal
```

## 22.1 Exemplo ruim

```java
try {
    processar();
} catch (Exception e) {
}
```

Problema:

```text
erro some
diagnostico fica dificil
sistema pode continuar em estado inconsistente
```

## 22.2 Exemplo melhor

```java
try {
    processar();
} catch (IOException e) {
    throw new ProcessamentoException("Falha ao processar arquivo", e);
}
```

Aqui:

```text
mensagem foi contextualizada
causa original foi preservada
```

## 22.3 Relacao com APIs

Em APIs REST, excecoes podem virar respostas HTTP.

Exemplo conceitual:

```text
RecursoNaoEncontradoException -> 404
ValidacaoException -> 400
PermissaoNegadaException -> 403
ErroInterno -> 500
```

Isso volta em Spring e APIs.

---

## 23. Relacao Entre OO, Colecoes, Generics E Excecoes

Esses assuntos nao vivem separados.

Exemplo de sistema:

```java
public class UsuarioService {
    private Map<Long, Usuario> usuarios = new HashMap<>();

    public Usuario buscarPorId(Long id) {
        Usuario usuario = usuarios.get(id);

        if (usuario == null) {
            throw new UsuarioNaoEncontradoException("Usuario nao encontrado");
        }

        return usuario;
    }
}
```

Nesse pequeno trecho ha:

```text
classe -> UsuarioService
atributo -> usuarios
Map -> colecao chave-valor
Long -> wrapper/generic
Usuario -> tipo de dominio
excecao -> UsuarioNaoEncontradoException
encapsulamento -> acesso controlado por metodo
```

Em sistemas reais, esse tipo de combinacao aparece o tempo todo.

---

## 24. Como A FGV Pode Cobrar

## 24.1 Conceitos de OO

A banca pode perguntar:

```text
Qual principio protege o estado interno de um objeto e controla seu acesso?
```

Resposta:

```text
encapsulamento
```

Ou:

```text
Qual conceito permite que uma referencia de supertipo aponte para objetos de subtipos diferentes?
```

Resposta:

```text
polimorfismo
```

## 24.2 Classe abstrata x interface

Possivel afirmacao:

```text
Uma classe Java pode implementar varias interfaces, mas so pode estender uma classe.
```

Correto.

Outra:

```text
Interfaces sao usadas apenas quando ha atributos compartilhados entre classes.
```

Errado.

Interface define contrato.

## 24.3 List, Set e Map

Possivel questao:

```text
Qual estrutura permite armazenar pares chave-valor?
```

Resposta:

```text
Map
```

Outra:

```text
Qual estrutura nao permite elementos duplicados?
```

Resposta:

```text
Set
```

## 24.4 equals e hashCode

A banca pode cobrar:

```text
Se dois objetos sao iguais segundo equals, eles devem possuir o mesmo hashCode.
```

Correto.

Mas:

```text
Se dois objetos possuem o mesmo hashCode, entao equals obrigatoriamente retorna true.
```

Errado.

## 24.5 Excecoes

Possivel pergunta:

```text
Qual diferenca entre throw e throws?
```

Resposta:

```text
throw lanca; throws declara.
```

Outra:

```text
Checked exceptions precisam ser tratadas ou declaradas.
```

Correto.

## 24.6 Generics

Possivel afirmacao:

```text
Generics permitem detectar incompatibilidades de tipo em tempo de compilacao.
```

Correto.

Possivel pegadinha:

```text
List<int> e uma declaracao valida em Java.
```

Errado.

Colecoes usam tipos referencia:

```java
List<Integer>
```

---

## 25. Erros Comuns

## 25.1 Confundir objeto com referencia

```java
Usuario a = new Usuario();
Usuario b = a;
```

Nao foram criados dois objetos.

Foram criadas duas referencias para o mesmo objeto.

## 25.2 Confundir sobrecarga com sobrescrita

Sobrecarga:

```text
mesmo nome, parametros diferentes
```

Sobrescrita:

```text
subclasse redefine metodo herdado
```

## 25.3 Achar que private impede heranca do atributo

Membro `private` existe como parte do objeto, mas nao e acessado diretamente pela subclasse.

## 25.4 Usar `==` no lugar de `equals`

Para comparar conteudo de objetos, em regra use `equals`.

`==` compara referencias.

## 25.5 Sobrescrever equals sem hashCode

Isso quebra colecoes baseadas em hash.

Regra:

```text
sobrescreveu equals?
revise hashCode tambem.
```

## 25.6 Esperar ordem em HashSet ou HashMap

`HashSet` e `HashMap` nao garantem ordem de insercao.

Se precisar ordem de insercao:

```text
LinkedHashSet
LinkedHashMap
```

Se precisar ordenacao:

```text
TreeSet
TreeMap
```

## 25.7 Usar tipo bruto em colecao

Ruim:

```java
List lista = new ArrayList();
```

Melhor:

```java
List<String> lista = new ArrayList<>();
```

## 25.8 Capturar Exception genericamente sem necessidade

Ruim:

```java
catch (Exception e)
```

quando voce sabe exatamente o que pode acontecer.

Melhor:

```java
catch (IOException e)
```

quando a falha esperada e de I/O.

## 25.9 Engolir excecao

Muito ruim:

```java
catch (Exception e) {
}
```

Isso dificulta investigacao.

## 25.10 Confundir checked com unchecked

Checked:

```text
compilador obriga tratar ou declarar
```

Unchecked:

```text
compilador nao obriga
```

---

## 26. O Que Memorizar

## 26.1 Orientacao a objetos

```text
classe = molde
objeto = instancia
atributo = estado
metodo = comportamento
construtor = inicializacao
encapsulamento = protecao do estado
heranca = reaproveitamento/especializacao
polimorfismo = muitas formas por contrato/supertipo
abstracao = foco no essencial
```

## 26.2 Sobrecarga e sobrescrita

```text
sobrecarga -> mesmo nome, parametros diferentes
sobrescrita -> subclasse redefine metodo herdado
```

## 26.3 Interface e classe abstrata

```text
interface -> contrato
classe abstrata -> base parcialmente implementada
classe Java -> estende uma classe
classe Java -> implementa varias interfaces
```

## 26.4 Object

```text
toda classe herda de Object
toString -> representacao textual
equals -> igualdade logica
hashCode -> codigo usado em estruturas hash
equals true -> hashCode igual
hashCode igual -> nao garante equals true
```

## 26.5 Colecoes

```text
List -> sequencia, permite duplicados, tem indice
Set -> conjunto, nao permite duplicados
Map -> chave-valor, chave unica
ArrayList -> array dinamico
HashSet -> conjunto baseado em hash
HashMap -> mapa baseado em hash
TreeSet/TreeMap -> ordenados
LinkedHashSet/LinkedHashMap -> ordem de insercao
```

## 26.6 Generics

```text
List<String> -> lista de String
Map<Long, Usuario> -> chave Long, valor Usuario
generics aumentam seguranca de tipo em compilacao
colecoes nao usam primitivos diretamente
List<int> errado
List<Integer> correto
```

## 26.7 Excecoes

```text
Throwable
Error
Exception
RuntimeException

checked -> precisa tratar/declarar
unchecked -> nao precisa tratar/declarar obrigatoriamente
throw -> lanca
throws -> declara
finally -> executa ao final do try/catch
try-with-resources -> fecha recursos automaticamente
```

---

## 27. Checklist Da Aula

Antes de seguir, veja se voce consegue explicar:

```text
[ ] diferenca entre classe e objeto
[ ] diferenca entre estado e comportamento
[ ] por que atributos costumam ser private
[ ] o que e encapsulamento
[ ] como funciona um construtor
[ ] para que serve this
[ ] diferenca entre atributo static e atributo de instancia
[ ] o que e heranca
[ ] por que Java nao tem heranca multipla de classes
[ ] o que e polimorfismo
[ ] diferenca entre sobrecarga e sobrescrita
[ ] diferenca entre interface e classe abstrata
[ ] para que serve equals
[ ] para que serve hashCode
[ ] relacao entre equals e hashCode
[ ] diferenca entre List, Set e Map
[ ] quando usar ArrayList, HashSet e HashMap em nivel conceitual
[ ] o que generics resolvem
[ ] diferenca entre checked e unchecked exception
[ ] diferenca entre throw e throws
[ ] para que serve finally
```

Se voce travar em `equals/hashCode`, `List/Set/Map` ou checked/unchecked, revise antes da proxima aula. Esses pontos voltam muitas vezes.

---

## 28. Mini Revisao Em Blocos

## 28.1 OO

```text
classe cria o tipo
objeto e uma instancia
atributos guardam estado
metodos executam comportamento
encapsulamento controla acesso
```

## 28.2 Heranca e polimorfismo

```text
extends -> herda classe
implements -> implementa interface
override -> sobrescreve comportamento
polimorfismo -> supertipo aponta para subtipo
```

## 28.3 Colecoes

```text
List -> ordem e duplicados
Set -> sem duplicados
Map -> chave e valor
```

## 28.4 Generics

```text
List<Usuario> usuarios
Set<String> nomes
Map<Long, Usuario> usuariosPorId
```

Generics deixam claro:

```text
qual tipo entra
qual tipo sai
qual erro o compilador pode impedir
```

## 28.5 Excecoes

```text
try -> tenta
catch -> trata
finally -> finaliza
throw -> lanca
throws -> declara
checked -> compilador cobra
unchecked -> compilador nao cobra
```

---

## 29. Conexao Com A Proxima Aula

Nesta aula, voce estudou a base de Java para sistemas:

```text
orientacao a objetos
classes e objetos
encapsulamento
heranca
polimorfismo
interfaces
classes abstratas
equals e hashCode
colecoes
generics
excecoes
```

Na proxima aula, o foco sera:

```text
Java moderno para prova: lambdas, streams, datas e concorrencia
```

Por que isso vem agora?

Porque depois que voce entende objetos e colecoes, faz sentido estudar formas modernas de processar dados:

```text
listas
filtros
transformacoes
funcoes
streams
operacoes com datas
execucao concorrente
```

Esses recursos aparecem em codigo real e podem aparecer em questoes que misturam Java com qualidade, legibilidade e desenvolvimento moderno.

Tambem preparam terreno para:

```text
Spring
JPA
testes
APIs
processamento de dados
```

Se a Aula 01 explicou como Java roda, e a Aula 02 explicou como Java organiza objetos, a Aula 03 vai mostrar como Java trabalha de forma mais expressiva com dados, funcoes e execucao.

