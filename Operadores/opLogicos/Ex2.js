const prompt = require('prompt-sync')()

let age = prompt("Quantos anos você tem?: ")
let id = prompt("Seu documento esta vencido?: ")

let podeComprar = age >= 18 && id === "nao"

console.log("Dependendo do que o sistema dizer você podera comprar sua bebida mas por favor manere a dose, Verificando se esta tudo certo", podeComprar ,"Obrigado ate a proxima")