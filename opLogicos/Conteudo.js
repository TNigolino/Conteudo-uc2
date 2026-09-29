// OPERADOR && - E
// Usamos && quanto TODAS as condicoes precisam ser verdadeiras ao mesmo tempo.

const prompt = require('prompt-sync')()

// Para entrar em um evento, a pessoa precisa:
// 1) ter 18 anos ou mais
// E
// 2) possuir ingresso

let idade = Number(prompt("Digite sua idade: "))
let ingresso = prompt("Possui ingresso?(sim ou nao) ")

let podeEntrar = idade >= 18 && ingresso === 'sim'

console.log("Você pode entrar no evento?", podeEntrar)

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