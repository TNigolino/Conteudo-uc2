const prompt = require('prompt-sync')()

let age = Number(prompt("Digite sua idade: "))
// usando if
if(age >= 18){
    console.log("\nVocê é maior de idade! seja responsavel!.")
} else {
    console.log("\nEspere mais um tempo até ter 18 e seja responsavel da mesma forma.")
}