const prompt = require('prompt-sync')()

const moedasIniciais = Number(prompt("Moedas Iniciais: "))
const missoes = Number(prompt("Missões feitas: "))
const moedasPorMissao = Number(prompt("Moedas ganhas por missao: "))
const item = Number(prompt("Valor do item: "))
const upgrades = Number(prompt("Quantos upgrades você vai fazer: "))

const multiplicacao = missoes * moedasPorMissao
const soma = moedasIniciais + multiplicacao
const subtracao = soma - item
const divisao = subtracao / upgrades

console.log("Cada upgrade seu ira receber um total de " + divisao + " moedas ")