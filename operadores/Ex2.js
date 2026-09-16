const prompt = require('prompt-sync')()

console.log("\n============= PARCELAS ================")

let fone = Number(prompt("Valor do Fone de Ouvido: "))
let parcelas = Number(prompt("Numero de parcelas: "))

let divisao = fone / parcelas

console.log(" Valor das parcelas " + divisao + " R$ ")