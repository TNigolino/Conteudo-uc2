const prompt = require('prompt-sync')()

let valorCompra = Number(prompt("\nInsira o valor da sua compra: "))
let vip = prompt("\nVocê tem cadastro vip?: ")

let desconto = valorCompra >= 100 || vip === "sim"

console.log("\nVocê pode usar o cupom de desconto?:", desconto)