const prompt = require('prompt-sync')()

let idade = Number(prompt("Qual sua idade?: "))
let idade2 = Number(prompt("Qual sua idade?: "))
let idade3 = Number(prompt("Qual sua idade?: "))
let idade4 = Number(prompt("Qual sua idade?: "))
let idade5 = Number(prompt("Qual sua idade?: "))


if(idade >= 16){
    console.log("\nENTRADA APROVADA")
} else if(idade2 >= 16){
    console.log("\nENTRADA APROVADA")
} else if(idade3 >= 16){
    console.log("\nENTRADA APROVADA")
} else if(idade4 >= 16){
    console.log("\nENTRADA APROVADA")
} else if(idade5 >= 16){
    console.log("\nENTRADA APROVADA")
} else {
    console.log("\nENTRADA NEGADA")
}