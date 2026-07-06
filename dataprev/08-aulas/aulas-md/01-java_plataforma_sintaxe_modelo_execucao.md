# Aula Detalhada - Java: Plataforma, Sintaxe E Modelo De Execucao

**Tema do dia:** Java como plataforma de desenvolvimento, JDK, JRE, JVM, bytecode, compilacao, execucao, estrutura basica de programas, sintaxe essencial, tipos, operadores, controle de fluxo e erros comuns.

**Aula na sequencia:** 01

**Objetivo:** construir uma base firme para estudar Java no edital da Dataprev, entendendo nao apenas a sintaxe, mas tambem o que acontece entre escrever o codigo e executar uma aplicacao Java.

---

## 1. Onde Esta Aula Entra No Estudo?

O edital da Dataprev, no Perfil 3 - Desenvolvimento de Software, cobra:

```text
Desenvolvimento em Linguagens de programacao Java (versao 6 ou superior),
JavaEE (versao 6 ou superior), JakartaEE, JPA (versao 2 ou superior),
Javascript, frameworks JUnit, Hibernate, JSF, Primefaces, Spring,
SpringCloud e SpringBoot.
```

Isso significa que Java nao aparece como detalhe.

Java e um dos centros do edital.

Antes de estudar:

```text
Spring
Spring Boot
JPA
Hibernate
JUnit
JavaEE
JakartaEE
JSF
PrimeFaces
APIs REST em Java
testes automatizados em Java
```

voce precisa ter clareza sobre a base:

```text
como Java executa?
o que e JVM?
o que e bytecode?
o que e JDK?
o que e uma classe?
o que e um metodo?
como um programa Java comeca?
como a sintaxe basica funciona?
```

Essa aula e a fundacao.

Ela nao tenta esgotar orientacao a objetos, colecoes, excecoes, generics ou Spring.

Esses assuntos aparecem nas proximas aulas.

Aqui o foco e:

```text
entender a plataforma Java
entender o modelo de execucao
ler codigo Java basico sem se perder
reconhecer pegadinhas simples de prova
```

---

## 2. Ideia Central

Java pode ser entendido de duas formas ao mesmo tempo:

```text
Java como linguagem
Java como plataforma
```

Java como linguagem:

```text
regras de sintaxe
tipos
classes
metodos
operadores
controle de fluxo
orientacao a objetos
```

Java como plataforma:

```text
JVM
bytecode
bibliotecas padrao
ferramentas de compilacao
modelo de execucao
garbage collector
ecossistema de frameworks
```

A frase classica associada a Java e:

```text
Write once, run anywhere
```

Em portugues:

```text
escreva uma vez, execute em qualquer lugar
```

Mas essa frase precisa ser entendida corretamente.

Ela nao significa que qualquer programa Java roda magicamente em qualquer ambiente sem nenhuma dependencia.

Ela significa que o codigo Java, depois de compilado para bytecode, pode ser executado em qualquer ambiente que tenha uma JVM compativel.

O caminho e:

```text
codigo fonte Java
-> compilador javac
-> bytecode .class
-> JVM
-> execucao no sistema operacional
```

Esse modelo aparece muito em questoes conceituais.

---

## 3. O Que E Java?

Java e uma linguagem de programacao:

```text
orientada a objetos
de tipagem estatica
compilada para bytecode
executada sobre uma maquina virtual
com gerenciamento automatico de memoria
```

Vamos quebrar essa frase.

## 3.1 Java e orientada a objetos

Em Java, a organizacao basica do programa gira em torno de classes e objetos.

Mesmo um programa simples precisa estar dentro de uma classe.

Exemplo:

```java
public class OlaMundo {
    public static void main(String[] args) {
        System.out.println("Ola, Dataprev!");
    }
}
```

O metodo `main` esta dentro da classe `OlaMundo`.

Em Java, nao existe uma funcao solta no arquivo como em algumas linguagens.

Quase tudo vive dentro de uma classe.

## 3.2 Java tem tipagem estatica

Tipagem estatica significa que o tipo de uma variavel e conhecido em tempo de compilacao.

Exemplo:

```java
int idade = 30;
String nome = "Ana";
boolean ativo = true;
```

Se voce tentar colocar texto em uma variavel `int`, o compilador reclama.

Exemplo incorreto:

```java
int idade = "trinta";
```

Esse erro aparece antes do programa executar.

E um erro de compilacao.

## 3.3 Java e compilada para bytecode

Quando voce escreve:

```text
OlaMundo.java
```

o compilador Java gera:

```text
OlaMundo.class
```

Esse `.class` nao e codigo de maquina especifico do Windows, Linux ou macOS.

Ele e bytecode.

Bytecode e uma representacao intermediaria que a JVM entende.

## 3.4 Java roda sobre a JVM

A JVM e a Java Virtual Machine.

Em portugues:

```text
Maquina Virtual Java
```

Ela executa o bytecode.

Fluxo:

```text
arquivo .java
-> javac compila
-> arquivo .class
-> JVM executa
```

Ou em desenho:

```text
+-------------------+
| Codigo Java       |
| OlaMundo.java     |
+---------+---------+
          |
          v
+-------------------+
| Compilador javac  |
+---------+---------+
          |
          v
+-------------------+
| Bytecode          |
| OlaMundo.class    |
+---------+---------+
          |
          v
+-------------------+
| JVM               |
+---------+---------+
          |
          v
+-------------------+
| Sistema operacional|
+-------------------+
```

Essa separacao e uma das coisas mais importantes da aula.

## 3.5 Java tem gerenciamento automatico de memoria

Em Java, o programador normalmente nao libera memoria manualmente.

Existe um mecanismo chamado:

```text
garbage collector
```

O garbage collector remove da memoria objetos que nao estao mais sendo referenciados.

Isso nao significa que Java nunca tem problema de memoria.

Pode haver:

```text
vazamento logico de memoria
uso excessivo de objetos
referencias mantidas sem necessidade
configuracao ruim de heap
```

Mas o modelo basico e:

```text
alocacao de objetos -> programador cria
liberacao automatica -> garbage collector tenta recuperar
```

---

## 4. JDK, JRE, JVM E Bytecode

Essa parte e muito cobrada em questoes conceituais.

Os termos sao parecidos, mas nao sao a mesma coisa.

## 4.1 JVM

JVM significa:

```text
Java Virtual Machine
```

Ela e responsavel por executar bytecode Java.

Funcoes importantes da JVM:

```text
carregar classes
verificar bytecode
executar instrucoes
gerenciar memoria
acionar garbage collector
realizar otimizacoes em tempo de execucao
```

Sem JVM, o bytecode Java nao executa.

## 4.2 JRE

JRE significa:

```text
Java Runtime Environment
```

Em portugues:

```text
Ambiente de Execucao Java
```

O JRE contem o necessario para executar aplicacoes Java.

Ele inclui:

```text
JVM
bibliotecas padrao necessarias para execucao
arquivos de suporte
```

Se voce so quer rodar um programa Java, o JRE era historicamente suficiente.

Em versoes modernas, a distribuicao mudou um pouco, mas para prova o conceito classico ainda importa.

## 4.3 JDK

JDK significa:

```text
Java Development Kit
```

Em portugues:

```text
Kit de Desenvolvimento Java
```

O JDK contem ferramentas para desenvolver aplicacoes Java.

Ele inclui:

```text
JRE
compilador javac
ferramentas de empacotamento
ferramentas de diagnostico
bibliotecas de desenvolvimento
```

Se voce vai programar em Java, voce precisa do JDK.

## 4.4 Comparacao direta

| Termo | Funcao principal | Contem |
|---|---|---|
| JVM | Executar bytecode | Maquina virtual e mecanismos de execucao |
| JRE | Rodar aplicacoes Java | JVM + bibliotecas de runtime |
| JDK | Desenvolver aplicacoes Java | JRE + compilador + ferramentas |

Forma simples de memorizar:

```text
JDK = desenvolver
JRE = executar
JVM = rodar o bytecode
```

## 4.5 Bytecode

Bytecode e o codigo intermediario gerado pelo compilador Java.

Arquivo fonte:

```text
Pessoa.java
```

Arquivo compilado:

```text
Pessoa.class
```

O `.class` contem bytecode.

Uma questao pode dizer:

```text
"Java compila diretamente para codigo de maquina nativo do sistema operacional."
```

Isso, como regra geral para o modelo Java tradicional, esta errado.

O correto:

```text
Java compila para bytecode, que e executado pela JVM.
```

## 4.6 JIT

JIT significa:

```text
Just-In-Time compiler
```

A JVM pode interpretar bytecode e tambem compilar partes do bytecode para codigo nativo durante a execucao.

Por que isso existe?

Para melhorar desempenho.

Ideia:

```text
trechos muito executados
-> JVM percebe
-> JIT otimiza
-> execucao fica mais eficiente
```

Para prova, memorize:

```text
JIT e uma tecnica de otimizacao em tempo de execucao usada pela JVM.
```

---

## 5. Java SE, Java EE, Jakarta EE E Frameworks

O edital cita Java, JavaEE, JakartaEE, JPA, Spring e outros frameworks.

Por isso voce precisa separar as camadas.

## 5.1 Java SE

Java SE significa:

```text
Java Standard Edition
```

E a base da linguagem e da biblioteca padrao.

Inclui:

```text
tipos basicos
classes
colecoes
entrada e saida
concorrencia
datas
excecoes
streams
```

Quando voce aprende Java "puro", normalmente esta estudando Java SE.

## 5.2 Java EE

Java EE significa:

```text
Java Enterprise Edition
```

Historicamente, e o conjunto de especificacoes Java para aplicacoes corporativas.

Inclui tecnologias como:

```text
Servlets
JPA
JSF
EJB
JMS
CDI
JAX-RS
```

O foco e desenvolvimento empresarial:

```text
web
transacoes
persistencia
servicos
seguranca
integracao
```

## 5.3 Jakarta EE

Jakarta EE e a evolucao do Java EE depois da transferencia para a Eclipse Foundation.

Em termos de prova:

```text
Java EE e Jakarta EE estao ligados ao desenvolvimento corporativo em Java.
Jakarta EE e a continuacao/evolucao do Java EE.
```

Uma pegadinha possivel:

```text
Jakarta EE nao e uma linguagem separada de Java.
```

Ela e um conjunto de especificacoes para desenvolvimento corporativo.

## 5.4 Spring

Spring e um framework do ecossistema Java.

Ele nao e a mesma coisa que Java SE, Java EE ou Jakarta EE.

Spring oferece recursos como:

```text
injecao de dependencia
inversao de controle
desenvolvimento web
acesso a dados
seguranca
transacoes
APIs REST
microservicos
```

Spring Boot facilita a criacao de aplicacoes Spring com configuracao automatica.

Spring Cloud adiciona ferramentas para sistemas distribuidos e microservicos.

## 5.5 Mapa mental simples

```text
Java SE
-> base da linguagem

Java EE / Jakarta EE
-> especificacoes corporativas

Spring / Spring Boot / Spring Cloud
-> frameworks muito usados no ecossistema Java

JPA
-> especificacao de persistencia

Hibernate
-> implementacao famosa de JPA

JSF
-> framework web baseado em componentes

PrimeFaces
-> biblioteca de componentes para JSF
```

---

## 6. Primeiro Programa Java

Vamos olhar novamente um programa minimo.

```java
public class OlaMundo {
    public static void main(String[] args) {
        System.out.println("Ola, Dataprev!");
    }
}
```

Agora vamos desmontar.

## 6.1 `public class OlaMundo`

`class` declara uma classe.

`OlaMundo` e o nome da classe.

`public` indica que a classe pode ser acessada de fora do pacote, respeitando as regras de visibilidade.

Em Java, se uma classe publica esta em um arquivo, o nome do arquivo deve corresponder ao nome da classe.

Exemplo:

```text
classe publica: OlaMundo
arquivo: OlaMundo.java
```

Se o arquivo fosse:

```text
Teste.java
```

com:

```java
public class OlaMundo {
}
```

isso geraria erro de compilacao.

## 6.2 `public static void main(String[] args)`

Esse e o ponto de entrada tradicional de uma aplicacao Java.

Vamos quebrar:

| Trecho | Significado |
|---|---|
| `public` | a JVM precisa conseguir acessar o metodo |
| `static` | o metodo pertence a classe, nao precisa criar objeto para chamar |
| `void` | o metodo nao retorna valor |
| `main` | nome esperado como ponto de entrada |
| `String[] args` | argumentos recebidos pela linha de comando |

Forma classica:

```java
public static void main(String[] args)
```

Tambem pode aparecer como:

```java
public static void main(String... args)
```

Mas para prova, memorize a forma classica.

## 6.3 `System.out.println`

`System` e uma classe da biblioteca padrao.

`out` e uma saida padrao.

`println` imprime uma linha.

Exemplo:

```java
System.out.println("Texto");
```

Isso escreve:

```text
Texto
```

e pula linha.

`print` nao pula linha.

`println` pula linha.

---

## 7. Compilando E Executando Um Programa Java

Suponha o arquivo:

```text
OlaMundo.java
```

Com o conteudo:

```java
public class OlaMundo {
    public static void main(String[] args) {
        System.out.println("Ola, Dataprev!");
    }
}
```

Para compilar:

```text
javac OlaMundo.java
```

Resultado:

```text
OlaMundo.class
```

Para executar:

```text
java OlaMundo
```

Observe:

```text
na compilacao: usa o nome do arquivo .java
na execucao: usa o nome da classe, sem .class
```

Errado:

```text
java OlaMundo.class
```

Certo:

```text
java OlaMundo
```

## 7.1 O que acontece na compilacao?

O compilador verifica:

```text
sintaxe
tipos
nomes
assinaturas
estrutura do codigo
```

Se houver erro de sintaxe ou tipo, nao gera bytecode valido.

Exemplo:

```java
int idade = "30";
```

O compilador nao aceita.

## 7.2 O que acontece na execucao?

A JVM:

```text
carrega as classes
verifica o bytecode
executa o metodo main
gerencia memoria
aciona bibliotecas necessarias
```

Se ocorrer divisao por zero com inteiros, por exemplo, o programa compila, mas falha em execucao.

Exemplo:

```java
int x = 10 / 0;
```

Isso nao e erro de sintaxe.

E erro em tempo de execucao.

---

## 8. Estrutura De Um Arquivo Java

Um arquivo Java pode conter:

```text
declaracao de pacote
imports
classe publica
outras classes nao publicas
atributos
metodos
construtores
blocos
```

Exemplo:

```java
package br.gov.dataprev.exemplo;

import java.time.LocalDate;

public class Servidor {
    private String nome;
    private LocalDate dataAdmissao;

    public Servidor(String nome, LocalDate dataAdmissao) {
        this.nome = nome;
        this.dataAdmissao = dataAdmissao;
    }

    public String getNome() {
        return nome;
    }
}
```

## 8.1 Package

`package` declara o pacote da classe.

Exemplo:

```java
package br.gov.dataprev.sistema;
```

Pacotes organizam classes.

Eles ajudam a evitar conflitos de nomes.

Tambem refletem uma organizacao logica do sistema.

Convencao comum:

```text
br.gov.dataprev.nomeprojeto.modulo
```

## 8.2 Imports

`import` permite usar classes de outros pacotes sem escrever o nome completo.

Exemplo:

```java
import java.time.LocalDate;
```

Depois do import, voce pode escrever:

```java
LocalDate hoje = LocalDate.now();
```

Sem import, teria que escrever algo como:

```java
java.time.LocalDate hoje = java.time.LocalDate.now();
```

## 8.3 Classe publica

Uma classe publica deve ter o mesmo nome do arquivo.

Exemplo:

```text
Arquivo: Servidor.java
Classe: public class Servidor
```

Se houver uma classe publica chamada `Servidor`, o arquivo deve ser `Servidor.java`.

## 8.4 Comentarios

Java aceita comentarios de linha:

```java
// comentario de uma linha
```

Comentarios de bloco:

```java
/*
 comentario com varias linhas
*/
```

Comentarios de documentacao:

```java
/**
 * Comentario usado para gerar documentacao Javadoc.
 */
```

Comentarios nao sao executados.

Em prova, podem aparecer para explicar intencao de codigo.

---

## 9. Regras De Nomeacao E Convencoes

Identificadores em Java sao nomes de:

```text
classes
metodos
variaveis
pacotes
constantes
atributos
```

## 9.1 Regras basicas

Um identificador:

```text
pode conter letras, digitos, _ e $
nao pode comecar com digito
nao pode ser palavra reservada
e sensivel a maiusculas e minusculas
```

Exemplo valido:

```java
int totalUsuarios = 10;
```

Exemplo invalido:

```java
int 1total = 10;
```

`idade` e `Idade` sao nomes diferentes.

Java e case-sensitive.

## 9.2 Convencoes importantes

Classes:

```text
PascalCase
ServidorPublico
ProcessadorArquivo
```

Metodos e variaveis:

```text
camelCase
calcularSalario
nomeCompleto
```

Constantes:

```text
UPPER_CASE
TAXA_PADRAO
LIMITE_MAXIMO
```

Pacotes:

```text
minusculo
br.gov.dataprev.sistema
```

Convencao nao e sempre erro de compilacao.

Mas em projeto real e prova conceitual, convencao indica qualidade e legibilidade.

---

## 10. Palavras Reservadas

Palavras reservadas sao termos que a linguagem usa com significado proprio.

Exemplos:

```text
class
public
private
protected
static
void
int
double
boolean
if
else
for
while
switch
case
break
continue
return
try
catch
finally
throw
throws
new
this
super
extends
implements
interface
abstract
final
```

Voce nao pode usar uma palavra reservada como nome de variavel.

Errado:

```java
int class = 10;
```

Certo:

```java
int quantidade = 10;
```

---

## 11. Tipos Primitivos

Java possui 8 tipos primitivos.

| Tipo | Uso comum |
|---|---|
| `byte` | inteiro pequeno |
| `short` | inteiro curto |
| `int` | inteiro mais comum |
| `long` | inteiro grande |
| `float` | decimal de precisao simples |
| `double` | decimal de precisao dupla |
| `char` | caractere |
| `boolean` | verdadeiro ou falso |

## 11.1 Inteiros

Tipos inteiros:

```text
byte
short
int
long
```

O mais usado no dia a dia e:

```text
int
```

Exemplo:

```java
int quantidade = 100;
long populacao = 2147483648L;
```

O `L` no final indica literal `long`.

Sem `L`, o compilador pode interpretar como `int`.

## 11.2 Decimais

Tipos decimais:

```text
float
double
```

O mais usado por padrao e:

```text
double
```

Exemplo:

```java
double salario = 10685.44;
float taxa = 1.5F;
```

O `F` indica literal `float`.

## 11.3 Boolean

`boolean` aceita:

```text
true
false
```

Exemplo:

```java
boolean aprovado = true;
```

Em Java, boolean nao e numero.

Isto nao funciona como em C:

```java
if (1) {
}
```

Em Java, a condicao do `if` precisa ser boolean.

## 11.4 Char

`char` representa um caractere.

Usa aspas simples:

```java
char letra = 'A';
```

String usa aspas duplas:

```java
String nome = "Ana";
```

Pegadinha:

```text
'A' -> char
"A" -> String
```

---

## 12. Tipos Referencia

Alem dos primitivos, Java trabalha com tipos referencia.

Exemplos:

```text
String
Integer
Double
LocalDate
ArrayList
Pessoa
```

Um tipo referencia aponta para um objeto.

Exemplo:

```java
String nome = "Maria";
```

`nome` e uma referencia para um objeto `String`.

## 12.1 Primitivo x referencia

Comparacao:

| Primitivo | Referencia |
|---|---|
| guarda valor simples | aponta para objeto |
| nao aceita `null` | pode aceitar `null` |
| exemplo: `int` | exemplo: `Integer` |
| exemplo: `double` | exemplo: `Double` |

Exemplo:

```java
int idade = 30;
Integer outraIdade = 30;
```

`int` e primitivo.

`Integer` e wrapper.

## 12.2 Null

`null` representa ausencia de referencia.

Exemplo:

```java
String nome = null;
```

Se voce tentar chamar metodo em uma referencia nula:

```java
System.out.println(nome.length());
```

ocorre:

```text
NullPointerException
```

Essa e uma das excecoes mais famosas de Java.

---

## 13. Wrappers E Autoboxing

Wrappers sao classes que envolvem tipos primitivos.

| Primitivo | Wrapper |
|---|---|
| `byte` | `Byte` |
| `short` | `Short` |
| `int` | `Integer` |
| `long` | `Long` |
| `float` | `Float` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |

Por que wrappers existem?

Porque colecoes Java trabalham com objetos.

Exemplo:

```java
List<Integer> numeros = new ArrayList<>();
```

Nao se usa:

```java
List<int> numeros = new ArrayList<>();
```

Isso esta errado.

## 13.1 Autoboxing

Autoboxing e a conversao automatica de primitivo para wrapper.

Exemplo:

```java
Integer numero = 10;
```

O valor `10` e `int`, mas Java converte para `Integer`.

## 13.2 Unboxing

Unboxing e a conversao automatica de wrapper para primitivo.

Exemplo:

```java
Integer numero = 10;
int valor = numero;
```

Parece simples, mas cuidado com `null`.

Exemplo perigoso:

```java
Integer numero = null;
int valor = numero;
```

Isso compila, mas em execucao gera `NullPointerException`.

---

## 14. String

`String` representa texto.

Exemplo:

```java
String orgao = "Dataprev";
```

String nao e tipo primitivo.

String e uma classe.

## 14.1 String e imutavel

String em Java e imutavel.

Isso significa que uma vez criado, o conteudo do objeto String nao muda.

Exemplo:

```java
String nome = "Data";
nome = nome + "prev";
```

Parece que a string original foi alterada.

Mas o que ocorre e:

```text
cria "Data"
cria "Dataprev"
referencia nome passa a apontar para "Dataprev"
```

## 14.2 Comparando strings

Para comparar conteudo de strings, use:

```java
nome.equals("Dataprev")
```

Nao use `==` para comparar conteudo textual.

`==` compara referencias.

Exemplo:

```java
String a = new String("Java");
String b = new String("Java");

System.out.println(a == b);       // false
System.out.println(a.equals(b));  // true
```

Para prova:

```text
== compara referencia
equals compara conteudo, quando implementado adequadamente
```

No caso de `String`, `equals` compara conteudo.

---

## 15. Variaveis, Escopo E Constantes

Variavel e um nome associado a um valor ou referencia.

Exemplo:

```java
int quantidade = 5;
```

## 15.1 Declaracao e inicializacao

Declarar:

```java
int idade;
```

Inicializar:

```java
idade = 30;
```

Declarar e inicializar:

```java
int idade = 30;
```

## 15.2 Escopo

Escopo e a regiao do codigo onde uma variavel pode ser usada.

Exemplo:

```java
public void exemplo() {
    int x = 10;

    if (x > 5) {
        int y = 20;
        System.out.println(y);
    }

    // y nao existe aqui
}
```

`y` so existe dentro do bloco do `if`.

## 15.3 Final

`final` indica que a variavel nao pode receber outro valor depois de inicializada.

Exemplo:

```java
final int LIMITE = 100;
```

Se tentar:

```java
LIMITE = 200;
```

ocorre erro de compilacao.

Cuidado:

```java
final List<String> nomes = new ArrayList<>();
nomes.add("Ana");
```

Isso pode ser permitido.

Por que?

Porque a referencia `nomes` nao mudou.

O objeto apontado por ela foi alterado.

Para prova:

```text
final impede reatribuir a variavel.
final nao torna necessariamente o objeto imutavel.
```

---

## 16. Operadores

Operadores sao simbolos que realizam operacoes.

## 16.1 Aritmeticos

```text
+  soma
-  subtracao
*  multiplicacao
/  divisao
%  resto da divisao
```

Exemplo:

```java
int a = 10;
int b = 3;

System.out.println(a / b); // 3
System.out.println(a % b); // 1
```

Com inteiros, `10 / 3` resulta `3`, nao `3.333`.

## 16.2 Incremento e decremento

```java
int x = 5;
x++;
x--;
```

`x++` aumenta depois de usar o valor.

`++x` aumenta antes de usar o valor.

Exemplo:

```java
int x = 5;
int y = x++;
```

Resultado:

```text
x = 6
y = 5
```

Agora:

```java
int x = 5;
int y = ++x;
```

Resultado:

```text
x = 6
y = 6
```

Essa e uma pegadinha classica.

## 16.3 Relacionais

```text
== igual
!= diferente
>  maior
<  menor
>= maior ou igual
<= menor ou igual
```

Exemplo:

```java
int idade = 18;
boolean maioridade = idade >= 18;
```

## 16.4 Logicos

```text
&& E logico
|| OU logico
!  NAO logico
```

Exemplo:

```java
boolean aprovado = nota >= 70 && frequencia >= 75;
```

## 16.5 Curto-circuito

`&&` e `||` fazem curto-circuito.

Exemplo:

```java
if (usuario != null && usuario.isAtivo()) {
    System.out.println("Usuario ativo");
}
```

Se `usuario != null` for falso, Java nem avalia `usuario.isAtivo()`.

Isso evita `NullPointerException`.

Com `||`:

```java
if (perfilAdmin || possuiPermissaoEspecial()) {
    liberarAcesso();
}
```

Se `perfilAdmin` for verdadeiro, a segunda parte nao precisa ser avaliada.

## 16.6 Atribuicao

```java
int x = 10;
x += 5;
x -= 2;
x *= 3;
x /= 2;
```

`x += 5` equivale a:

```java
x = x + 5;
```

---

## 17. Controle De Fluxo

Controle de fluxo define qual trecho do codigo executa.

## 17.1 If e else

```java
if (nota >= 70) {
    System.out.println("Aprovado");
} else {
    System.out.println("Reprovado");
}
```

A condicao precisa ser `boolean`.

Nao pode ser numero.

## 17.2 Else if

```java
if (nota >= 90) {
    System.out.println("Excelente");
} else if (nota >= 70) {
    System.out.println("Aprovado");
} else {
    System.out.println("Reprovado");
}
```

A ordem importa.

Se voce inverter condicoes, pode mudar o resultado.

## 17.3 Switch

`switch` seleciona um caso.

Exemplo tradicional:

```java
int opcao = 2;

switch (opcao) {
    case 1:
        System.out.println("Cadastrar");
        break;
    case 2:
        System.out.println("Consultar");
        break;
    default:
        System.out.println("Opcao invalida");
}
```

`break` evita cair no proximo caso.

Sem `break`, pode ocorrer fall-through.

Exemplo:

```java
int x = 1;

switch (x) {
    case 1:
        System.out.println("A");
    case 2:
        System.out.println("B");
}
```

Saida:

```text
A
B
```

Porque nao houve `break`.

## 17.4 For

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

Saida:

```text
0
1
2
3
4
```

Partes do `for`:

```text
inicializacao
condicao
atualizacao
```

## 17.5 While

```java
int i = 0;

while (i < 5) {
    System.out.println(i);
    i++;
}
```

O `while` testa antes de executar.

Se a condicao comecar falsa, o corpo nao executa nenhuma vez.

## 17.6 Do while

```java
int i = 0;

do {
    System.out.println(i);
    i++;
} while (i < 5);
```

O `do while` executa pelo menos uma vez.

Depois testa a condicao.

## 17.7 Break e continue

`break` interrompe o laco.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println(i);
}
```

Imprime:

```text
0
1
2
3
4
```

`continue` pula para a proxima iteracao.

```java
for (int i = 0; i < 5; i++) {
    if (i == 2) {
        continue;
    }
    System.out.println(i);
}
```

Imprime:

```text
0
1
3
4
```

---

## 18. Arrays

Array e uma estrutura de tamanho fixo que guarda elementos do mesmo tipo.

Exemplo:

```java
int[] notas = new int[3];
```

Isso cria um array com 3 posicoes.

Indices:

```text
0
1
2
```

Em Java, arrays comecam no indice 0.

Exemplo:

```java
notas[0] = 80;
notas[1] = 90;
notas[2] = 70;
```

Se tentar:

```java
notas[3] = 100;
```

ocorre:

```text
ArrayIndexOutOfBoundsException
```

## 18.1 Inicializacao direta

```java
int[] notas = {80, 90, 70};
```

## 18.2 Percorrendo array

Com `for` tradicional:

```java
for (int i = 0; i < notas.length; i++) {
    System.out.println(notas[i]);
}
```

Com enhanced for:

```java
for (int nota : notas) {
    System.out.println(nota);
}
```

`length` em array e atributo.

Em String, `length()` e metodo.

Compare:

```java
notas.length
nome.length()
```

Essa diferenca costuma aparecer em pegadinhas.

---

## 19. Metodos: Nocao Inicial

Metodo e um bloco de codigo com nome, parametros e retorno.

Exemplo:

```java
public int somar(int a, int b) {
    return a + b;
}
```

Partes:

| Parte | Exemplo | Significado |
|---|---|---|
| modificador | `public` | visibilidade |
| tipo de retorno | `int` | tipo retornado |
| nome | `somar` | identificador do metodo |
| parametros | `int a, int b` | entradas |
| corpo | `{ return a + b; }` | logica |

## 19.1 Void

`void` significa que o metodo nao retorna valor.

Exemplo:

```java
public void imprimir(String texto) {
    System.out.println(texto);
}
```

## 19.2 Return

Se o metodo promete retornar `int`, ele precisa retornar um `int`.

Exemplo:

```java
public int dobro(int x) {
    return x * 2;
}
```

Metodo `void` pode usar `return;` para sair antes, mas nao retorna valor.

## 19.3 Sobrecarga

Sobrecarga ocorre quando ha metodos com mesmo nome, mas parametros diferentes.

Exemplo:

```java
public int somar(int a, int b) {
    return a + b;
}

public double somar(double a, double b) {
    return a + b;
}
```

A assinatura considera nome e parametros.

Somente mudar o tipo de retorno nao basta para sobrecarga.

---

## 20. Modificadores De Acesso

Java possui modificadores que controlam visibilidade.

| Modificador | Acesso |
|---|---|
| `public` | acessivel de qualquer lugar |
| `protected` | pacote e subclasses |
| sem modificador | pacote |
| `private` | apenas dentro da propria classe |

## 20.1 Public

```java
public class Usuario {
}
```

A classe publica pode ser acessada fora do pacote.

## 20.2 Private

```java
private String senha;
```

Um atributo privado so pode ser acessado diretamente dentro da propria classe.

Isso ajuda no encapsulamento.

## 20.3 Protected

`protected` permite acesso:

```text
dentro do mesmo pacote
por subclasses
```

## 20.4 Default/package-private

Quando nao ha modificador:

```java
class ServicoInterno {
}
```

o acesso e de pacote.

---

## 21. Static

`static` indica que o membro pertence a classe, nao a uma instancia especifica.

Exemplo:

```java
public class Calculadora {
    public static int somar(int a, int b) {
        return a + b;
    }
}
```

Chamada:

```java
int resultado = Calculadora.somar(2, 3);
```

Nao precisa criar:

```java
new Calculadora()
```

## 21.1 Static no main

O metodo `main` e `static` porque a JVM precisa chama-lo sem criar objeto da classe.

```java
public static void main(String[] args)
```

## 21.2 Atributo static

```java
public class Contador {
    public static int total = 0;
}
```

`total` pertence a classe.

Todas as instancias compartilham o mesmo valor.

Pegadinha:

```text
static compartilhado entre objetos
atributo de instancia pertence a cada objeto
```

---

## 22. Erro De Compilacao, Excecao E Erro Logico

Essa distincao e essencial.

## 22.1 Erro de compilacao

Acontece antes da execucao.

Exemplo:

```java
int idade = "trinta";
```

O compilador nao aceita.

Outros exemplos:

```text
ponto e virgula faltando
tipo incompativel
variavel nao declarada
metodo inexistente
classe publica com nome diferente do arquivo
```

## 22.2 Excecao em tempo de execucao

O codigo compila, mas falha ao rodar.

Exemplo:

```java
int x = 10 / 0;
```

Outro exemplo:

```java
String nome = null;
System.out.println(nome.length());
```

Isso gera:

```text
NullPointerException
```

## 22.3 Erro logico

O codigo compila e executa, mas o resultado esta errado.

Exemplo:

```java
double media = nota1 + nota2 / 2;
```

Se a intencao era media aritmetica, o correto seria:

```java
double media = (nota1 + nota2) / 2;
```

O primeiro codigo pode executar sem erro, mas calcula errado por precedencia de operadores.

## 22.4 Tabela comparativa

| Tipo | Quando aparece | Exemplo |
|---|---|---|
| Erro de compilacao | antes de rodar | tipo incompativel |
| Excecao de execucao | durante a execucao | `NullPointerException` |
| Erro logico | resultado incorreto | formula errada |

---

## 23. Memoria: Stack, Heap E Garbage Collector

Para esta primeira aula, voce nao precisa dominar internamente a JVM.

Mas precisa entender a ideia geral.

## 23.1 Stack

Stack guarda informacoes de chamadas de metodos e variaveis locais.

Exemplo:

```java
public void exemplo() {
    int x = 10;
}
```

`x` e variavel local.

Ela vive no contexto da chamada do metodo.

## 23.2 Heap

Heap e a regiao onde objetos sao alocados.

Exemplo:

```java
Pessoa p = new Pessoa();
```

`new Pessoa()` cria um objeto no heap.

`p` e uma referencia para esse objeto.

## 23.3 Referencia

Imagine:

```java
Pessoa p = new Pessoa();
```

Modelo mental:

```text
p
|
v
objeto Pessoa no heap
```

Se fizer:

```java
Pessoa q = p;
```

Agora:

```text
p ----\
      v
q ---> objeto Pessoa no heap
```

As duas referencias apontam para o mesmo objeto.

## 23.4 Garbage collector

Quando nenhum caminho ativo aponta para um objeto, ele pode ser coletado.

Exemplo:

```java
Pessoa p = new Pessoa();
p = null;
```

Se nao houver outra referencia para aquele objeto, ele se torna elegivel para coleta.

Importante:

```text
elegivel para coleta nao significa coletado imediatamente
```

A JVM decide quando executar o garbage collector.

---

## 24. Entrada, Saida E Argumentos

O metodo `main` recebe:

```java
String[] args
```

Esses argumentos podem vir da linha de comando.

Exemplo:

```java
public class ExemploArgs {
    public static void main(String[] args) {
        System.out.println(args[0]);
    }
}
```

Execucao:

```text
java ExemploArgs Dataprev
```

Saida:

```text
Dataprev
```

Se executar sem argumento:

```text
java ExemploArgs
```

o acesso a `args[0]` gera:

```text
ArrayIndexOutOfBoundsException
```

Para evitar:

```java
if (args.length > 0) {
    System.out.println(args[0]);
}
```

---

## 25. Pacotes, Bibliotecas E API Padrao

Java vem com uma biblioteca padrao extensa.

Alguns pacotes comuns:

| Pacote | Uso |
|---|---|
| `java.lang` | classes essenciais, importado automaticamente |
| `java.util` | colecoes, datas antigas, utilitarios |
| `java.time` | API moderna de data e hora |
| `java.io` | entrada e saida tradicional |
| `java.nio` | I/O moderno e buffers |
| `java.math` | numeros grandes e precisao decimal |

## 25.1 java.lang

Classes de `java.lang` nao precisam de import explicito.

Exemplos:

```text
String
System
Math
Object
Integer
Double
```

Por isso voce usa:

```java
String nome = "Java";
System.out.println(nome);
```

sem escrever:

```java
import java.lang.String;
```

## 25.2 java.util

Muito usado para colecoes.

Exemplo:

```java
import java.util.List;
import java.util.ArrayList;
```

## 25.3 java.time

API moderna de data e hora.

Exemplo:

```java
import java.time.LocalDate;

LocalDate hoje = LocalDate.now();
```

---

## 26. Compilacao, Empacotamento E Execucao Em Sistemas Reais

Em uma aula introdutoria, usamos:

```text
javac
java
```

Mas em sistemas reais, projetos Java normalmente usam ferramentas como:

```text
Maven
Gradle
```

Essas ferramentas ajudam a:

```text
baixar dependencias
compilar
rodar testes
empacotar
gerar JAR ou WAR
organizar ciclo de build
```

## 26.1 JAR

JAR significa:

```text
Java Archive
```

E um pacote de classes e recursos Java.

Aplicacoes Spring Boot frequentemente sao empacotadas como JAR executavel.

## 26.2 WAR

WAR significa:

```text
Web Application Archive
```

E usado em aplicacoes web Java tradicionais, muitas vezes implantadas em servidor de aplicacao ou servlet container.

## 26.3 Relacao com edital

Quando o edital fala em:

```text
JavaEE
JakartaEE
JSF
PrimeFaces
SpringBoot
servidor de aplicacoes
servidor web
```

ele esta apontando para esse mundo de aplicacoes corporativas.

Entao, mesmo que esta aula seja basica, ela prepara a linguagem que sera usada nas proximas.

---

## 27. Tabela De Pegadinhas Basicas

| Tema | Pegadinha | Correto |
|---|---|---|
| JVM | dizer que compila codigo fonte diretamente para qualquer SO | Java compila para bytecode executado pela JVM |
| JDK/JRE | confundir ambiente de desenvolvimento com execucao | JDK desenvolve, JRE executa |
| String | comparar conteudo com `==` | usar `equals` |
| boolean | usar `if (1)` | Java exige expressao boolean |
| array | acessar indice igual ao tamanho | ultimo indice e tamanho - 1 |
| final | achar que torna objeto imutavel sempre | impede reatribuir a variavel |
| static | achar que pertence ao objeto | pertence a classe |
| main | esquecer `static` ou assinatura correta | `public static void main(String[] args)` |
| break | esquecer em `switch` tradicional | sem break pode haver fall-through |
| unboxing | converter `Integer null` para `int` | gera `NullPointerException` |

---

## 28. Como A FGV Pode Cobrar

A FGV costuma cobrar de duas formas:

```text
conceito direto
analise de situacao/codigo
```

## 28.1 Conceito direto

Exemplo de ideia cobrada:

```text
Qual componente executa o bytecode Java?
```

Resposta:

```text
JVM
```

Outra:

```text
Qual ferramenta compila arquivos .java?
```

Resposta:

```text
javac
```

## 28.2 Comparacao de termos

A banca pode listar afirmacoes sobre JDK, JRE e JVM.

Voce precisa separar:

```text
JDK -> desenvolvimento
JRE -> execucao
JVM -> execucao de bytecode
```

## 28.3 Trecho de codigo

A banca pode mostrar codigo simples e perguntar a saida.

Exemplo:

```java
int x = 5;
int y = x++;
System.out.println(x + " " + y);
```

Saida:

```text
6 5
```

Porque `x++` usa primeiro, incrementa depois.

## 28.4 Erro de compilacao x execucao

Ela pode perguntar se um codigo:

```text
compila e executa
compila mas gera excecao
nao compila
executa com resultado especifico
```

Exemplo:

```java
String nome = null;
System.out.println(nome.length());
```

Esse codigo compila.

Mas gera excecao em execucao.

## 28.5 Conceitos em contexto corporativo

A FGV tambem pode misturar Java com arquitetura.

Exemplo de afirmacao:

```text
Aplicacoes Java podem ser empacotadas em artefatos JAR ou WAR,
a depender do modelo de aplicacao e implantacao.
```

Essa afirmacao e verdadeira.

---

## 29. Erros Comuns

## 29.1 Decorar siglas sem entender fluxo

Nao basta decorar:

```text
JDK, JRE, JVM
```

Tem que saber o fluxo:

```text
desenvolver -> JDK
compilar -> javac
gerar -> bytecode
executar -> JVM
ambiente de execucao -> JRE
```

## 29.2 Achar que Java e puramente interpretada

Java nao deve ser descrita de forma simplista como "apenas interpretada".

O modelo correto e:

```text
compilada para bytecode
executada pela JVM
podendo usar interpretacao e JIT
```

## 29.3 Confundir Java com JavaScript

Java e JavaScript sao linguagens diferentes.

Semelhanca no nome nao significa mesma plataforma.

O edital cobra as duas.

## 29.4 Comparar String com `==`

Em prova de Java, sempre desconfie de:

```java
texto1 == texto2
```

Para conteudo textual, o normal e:

```java
texto1.equals(texto2)
```

## 29.5 Ignorar indices de array

Array de tamanho 3:

```text
indices validos: 0, 1, 2
```

Indice 3 e invalido.

## 29.6 Achar que `final` torna tudo imutavel

`final` em variavel impede reatribuicao.

Nao transforma automaticamente o objeto em imutavel.

## 29.7 Nao diferenciar erro de compilacao e excecao

Esse e um ponto muito importante.

Pergunte sempre:

```text
o compilador consegue aceitar esse codigo?
se sim, pode quebrar so quando executar?
```

---

## 30. O Que Memorizar

Memorize com muita seguranca:

```text
JDK = kit de desenvolvimento
JRE = ambiente de execucao
JVM = maquina virtual que executa bytecode
bytecode = codigo intermediario .class
javac = compilador
java = comando de execucao
```

Memorize tambem:

```text
Java e orientada a objetos.
Java tem tipagem estatica.
Java compila para bytecode.
Java executa sobre JVM.
Java tem garbage collector.
Java e case-sensitive.
```

Assinatura do main:

```java
public static void main(String[] args)
```

String:

```text
String e classe, nao primitivo.
String e imutavel.
equals compara conteudo.
== compara referencia.
```

Tipos primitivos:

```text
byte
short
int
long
float
double
char
boolean
```

Controle de fluxo:

```text
if exige boolean
switch tradicional precisa de break para evitar fall-through
for tem inicializacao, condicao e atualizacao
while pode executar zero vezes
do while executa pelo menos uma vez
```

---

## 31. Checklist Da Aula

Marque mentalmente se voce consegue explicar:

```text
[ ] o que e Java como linguagem
[ ] o que e Java como plataforma
[ ] o que e JVM
[ ] o que e JRE
[ ] o que e JDK
[ ] o que e bytecode
[ ] como compilar um .java
[ ] como executar uma classe Java
[ ] por que Java e portavel
[ ] o que e garbage collector
[ ] diferenca entre primitivo e referencia
[ ] diferenca entre int e Integer
[ ] risco de unboxing com null
[ ] por que String e especial
[ ] como comparar String corretamente
[ ] estrutura do metodo main
[ ] diferenca entre erro de compilacao e execucao
[ ] indices validos de array
[ ] efeito de x++ e ++x
[ ] papel de static
```

Se algum item parecer nebuloso, volte na secao correspondente antes de seguir.

---

## 32. Mini Revisao Em Blocos

## 32.1 Plataforma

```text
JDK desenvolve
JRE executa
JVM roda bytecode
javac compila
java executa
```

## 32.2 Codigo

```text
.java -> codigo fonte
.class -> bytecode
main -> ponto de entrada
class -> unidade basica
package -> organizacao
import -> uso de classes externas
```

## 32.3 Tipos

```text
primitivos guardam valores simples
referencias apontam para objetos
wrappers representam primitivos como objetos
String e objeto imutavel
```

## 32.4 Fluxo

```text
if / else -> decisao
switch -> selecao
for -> repeticao controlada
while -> repeticao com teste antes
do while -> repeticao com execucao minima
break -> interrompe
continue -> pula iteracao
```

---

## 33. Conexao Com A Proxima Aula

Nesta aula, voce aprendeu a base:

```text
plataforma Java
modelo de execucao
sintaxe inicial
tipos
operadores
controle de fluxo
arrays
metodos
erros comuns
```

Na proxima aula, o foco sera:

```text
Java: orientacao a objetos, colecoes, excecoes e generics
```

Isso significa sair da sintaxe basica e entrar no modo como Java organiza sistemas maiores.

A proxima aula vai aprofundar:

```text
classes e objetos
encapsulamento
heranca
polimorfismo
interfaces
colecoes
equals e hashCode
excecoes
generics
```

Essa transicao e importante porque praticamente todo o resto do edital Java depende dela:

```text
JPA usa objetos e entidades
Spring injeta objetos e componentes
JUnit testa metodos e classes
Hibernate mapeia objetos para tabelas
APIs organizam controllers, services e DTOs
```

Entao, se esta Aula 01 e a base da linguagem, a Aula 02 sera a base para pensar em Java como desenvolvimento de sistemas.

