const prompt = require('prompt-sync')()

let saldo = Number(prompt("Digite seu saldo: "))

let valorCompra = Number(prompt("Digite o valor da sua compra: "))

let resultado = valorCompra < saldo ? "Compra Aprovada" : "Saldo insuficiente"

console.log(resultado)