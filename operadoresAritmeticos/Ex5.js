const prompt = require('prompt-sync')()

const numeroInicial = Number(prompt("Valor inicial: "))
const multiplicador = Number(prompt("Escolha o multiplicador: "))
const divisor = Number(prompt("Escolha seu divisor: "))

const multiplicacao = numeroInicial * multiplicador
const divisao = multiplicacao / divisor
const resto = divisao % 7
const soma = resto + 10
const subtracaoInicial = numeroInicial * 3
const subtracao = subtracaoInicial - soma

console.log("Seu resultado final " + subtracao)