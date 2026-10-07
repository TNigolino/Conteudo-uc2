const prompt = require('prompt-sync')()

console.log("Escolha uma das caracteristicas apenas uma entre Coragem,Inteligencia ou Lealdade.")


let coragem = prompt("Coragem (sim ou nao): ")
let inteligencia = prompt("inteligencia (sim ou nao): ")
let lealdade = prompt("lealdade (sim ou nao): ")

if(coragem === "sim" || coragem === "Sim"){
    console.log("\nVocê é a Eleven")
} else if(inteligencia === "sim" || inteligencia === "Sim"){
    console.log("\nVocê é o Will")
} else if(lealdade === "sim" || lealdade === "Sim"){
    console.log("\nVocê é o Mike")
} else {
    console.log("\nVocê é um demogorgon???????!!!")
}