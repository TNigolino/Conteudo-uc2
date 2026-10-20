const prompt = require('prompt-sync')()

console.log("\n")
let entrega = Number(prompt("Qual a distância da entrega: "))
console.log("\n")

if(entrega > 10){
    console.log("Entrega de longa distância.")
} else if(entrega >= 4){
    console.log("Entrega normal.")
} else {
    console.log("Entrega rápida.")
}

// 1. Como contém operadores lógicos é recomendado usar IF ELSE para este código.