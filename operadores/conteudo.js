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
let soma = numero1 + numero2
console.log(soma)