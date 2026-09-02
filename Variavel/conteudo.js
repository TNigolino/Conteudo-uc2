// ================================
// Variavel
//=================================
// variavel e um espaco na memoria para guardar informacoes, que podem ser alteradas durante a execucao do programa.

// let pode mudar o valor da variavel

// const nao pode mudar o valor da variavel

let nome = "Thiago Nigolino Gomes Santos Silveira Morales Vedoy Borges Quevedo"
nome = "Thiago Nigolino"

//console.log() uso para mostrar o valor da variavel no console do navegador
console.log(nome)

//--------------------------------

let nomeCidade = "Sao Leopoldo"
nomeCidade = "Porto Alegre"
// A variavel nomeCidade foi declarada com let, portanto seu valor pode ser alterado. Inicialmente, ela foi atribuída o valor "Sao Leopoldo", mas depois foi alterada para "Porto Alegre".
console.log(nomeCidade)

//--------------------------------
// const - usamos const quando nao queremos que o valor da variavel seja alterado durante a execucao do programa.
const pi = 3.14
// se tentarmos alterar o valor da variavel pi, o programa ira gerar um erro, pois const nao permite que o valor da variavel seja alterado.
console.log(pi)

/* 
---------------------------------
NOMES DE VARIAVEIS
---------------------------------   
os nomes de variaveis devem ajudar a entender o que a variavel representa, portanto devem ser nomes significativos.

EVITE:
let a = "Thiago"
let b = 25
let c = true

PREFIRA:
let nome = "Thiago"
let idadeAluno = 25
let estaChovendo = true
*/

//-------------------------------
//Tipos de variaveis
// Number - numeros inteiros e decimais
const idadeAluno = 25
const alturaAluno = 1.82
const temperatura = 22
const quantidadeAlunos = 16

//Para mostrar na saida usamos o console.log()
console.log(idadeAluno)
console.log(alturaAluno)
console.log(temperatura)
console.log(quantidadeAlunos)

// String - textos

//String representa uma sequencia de caracteres, que podem ser letras, numeros, simbolos e espacos em branco. As strings sao representadas por aspas simples ou aspas duplas.

let escola = "Senac"
const linguagemProgramacao = "JavaScript"

// Boolean - verdadeiro ou falso

//Boolean representa um valor logico, que pode ser verdadeiro (true) ou falso (false). Os valores booleanos sao usados para representar condicoes e tomar decisoes no programa.

let estaChovendo = false
let estaSol = true
let usuarioLogado = true

console.log(estaChovendo)
console.log(estaSol)
console.log(usuarioLogado)