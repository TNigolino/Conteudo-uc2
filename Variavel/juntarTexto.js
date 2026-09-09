/*
--------------------------
JUNTAR TEXTOS
--------------------------
As vezes queremos criar uma frase utilizando os valores das nossas variáveis

Esse processo é chamado de concatenação, que nada mais é do que juntar textos.

Podemos usar 2 formas de fazer isso:
1 - Usando o operador de soma (+)
2 - Usando template strings (``) e ${}

*/

// 1. usando o operador de soma (+)

let personagem = "Bob Esponja"
let idade = 22

let frase = "Ola, meu nome e " + personagem + " e meu amigo se chama patrick, nos dois temos a mesma idade que no caso e " + idade + " anos de idade"

console.log(frase)

// 2. usando template strings (``) e ${}

let personagem2 = "Naruto"
let sonho = "Hokage"
let idade2 = 16

let frase2 = `Ola, meu nome e ${personagem2} e tenho ${idade2} anos de idade, meu sonho e me tornar o ${sonho} da vila da folha`

console.log(frase2)

//--------------------------

let nome = "Max"
let monstros = 18
let waffles = 20
let feliz = true

let frase3 = `Ola, me chamo ${nome} e ja enfrentei e derrotei ${monstros} monstros, alem disso ja mandei ${waffles} waffles pra dentro da minha barriga, se é verdade que estou feliz comigo mesma essa informacao é ${feliz}`

console.log(frase3)

//--------------------------

const gato = "Richard"
let brinquedos = 42
let invento = 67
let orgulhoso = true

let frase4 = `O gatinho ${gato} conseguiu a proeza de quebrar ${brinquedos} brinquedos, mas tirando isso ele criou ${invento} inventos novos para destruir de novo.Esse e o ciclo do gato ${gato}`

console.log(frase4)

//--------------------------

const  pizza = "Peperroni"
let valor = 55
let pizzaVoa = true

let frase5 = `Pizza de ${pizza}, valor ${valor}R$, mas o interresante e que ela voa? ${pizzaVoa}.`

console.log(frase5)

//-------------------------