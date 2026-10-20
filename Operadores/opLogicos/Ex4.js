const prompt = require('prompt-sync')()

let age = Number(prompt("Quantos anos você tem? "))
let deficiencia = prompt("Você tem algum tipo de deficiencia? (sim/nao): ")

let teraVaga = age >= 65 || deficiencia === "sim"

console.log("\nVocê tera direito de ter vaga para deficientes?", teraVaga)