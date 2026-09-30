// OPERADOR && - E
// Usamos && quanto TODAS as condicoes precisam ser verdadeiras ao mesmo tempo.

const prompt = require('prompt-sync')()

// Para entrar em um evento, a pessoa precisa:
// 1) ter 18 anos ou mais
// E
// 2) possuir ingresso

let idade = Number(prompt("Digite sua idade: "))
let ingresso = prompt("Possui ingresso?(sim ou nao) ")

let podeEntrar1 = idade >= 18 && ingresso === 'sim'

console.log("Você pode entrar no evento?", podeEntrar1)

// OPERADOR || OR
// Basta UMA das condicoes ser verdadeira

// Ramon Dino pode comemorar se:
// Venceu a competicao 
// Or 
// Ficou entre os 3 primeiros

let venceuCompeticao = false 
let ficouTop3 = true

let podeComemorar = venceuCompeticao || ficouTop3
console.log("Ramos dino pode comemorar?", podeComemorar)

// OPERADOR ! - NOT
// O operador ! significa NO. Ele inverte um valor logico

// !true -> false
// !false -> true

// Imagine uma porta. Se a porta NAO estiver trancada, podemos entrar.

let resposta = prompt("Aporta esta trancada? (sim/nao): ")

// Transformamos a resposta em true ou false
let portaTrancada = resposta === "sim"

console.log("\n Porta esta trancada? ")
console.log(portaTrancada)
/**
 * Agora usamos !
 * Se portaTrancada = false -> !portaTrancada
 */

let podeEntrar = !portaTrancada
console.log("\n NAO esta trancada? ")
console.log(!portaTrancada)

console.log("\n Pode entrar? ")
console.log(podeEntrar)