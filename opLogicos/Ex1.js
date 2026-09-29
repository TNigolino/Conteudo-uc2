const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite sua idade: "))
let assinatura = prompt("Sua assinatura esta paga e ativa?: ")

let tudoCerto = idade >= 18 && assinatura === "sim"

console.log("Esta tudo certo com a sua assinatura", tudoCerto)