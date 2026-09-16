const prompt = require('prompt-sync')()
console.log("\n ============ GAMER DO FIND ===============")

let sexta = Number(prompt("Quantas horas voce jogou na sexta? "))
let sabado = Number(prompt("Quantas horas voce jogou no sabado? "))
let domingo = Number(prompt('Quantas horas voce jogou no domingo? '))

let soma = sexta + sabado + domingo

console.log(" Ele jogou por " + soma + " horas nesse find ")