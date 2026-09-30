//OPERADORES ARITMETICOS

/*
*Os operadores aritmeticos servem para fazer contas: Sao eles
* soma -> +
* subtracao -> -
* multiplicacao -> *
* divisao -> /
* resto da divisao -> %
*/

// importo prompt
const prompt = require('prompt-sync')()

// Pedindo os numeros
let numero1 = Number(prompt('Digite o primeiro numero:'))
let numero2 = Number(prompt('Digite o segundo numero:'))

//Realizar as operacoes
let subtracao = numero1 - numero2
let soma = numero1 + numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let resto = numero1 % numero2

console.log( " A soma e: "  + soma)
console.log( " A subtracao e: "  + subtracao)
console.log( "A multiplicacao e: " + multiplicacao)
console.log( "A divisao e: " + divisao)
console.log( "O resto da divisao e: " + resto)