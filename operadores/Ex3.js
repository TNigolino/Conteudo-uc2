const prompt = require('prompt-sync')()

const dinheiro = Number(prompt("Quanto dinheiro você tem: "))
const presente = Number(prompt("Quanto dinheiro você ganhou: "))
const jogo = Number(prompt("Valor do game: "))

const soma = dinheiro + presente
const subtracao = soma - jogo

console.log("Seu saldo ao final das transições sera de " + subtracao + " R$ ")