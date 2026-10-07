const prompt = require('prompt-sync')()

console.log("\n")
console.log("Ranks: Bronze,Prata,Ouro e Diamante.")
console.log("\n")

let rank = prompt("Ensira seu rank e descubra sua patente: ")

switch(rank){
    case "Bronze":
        console.log("\nPatente Iniciante.")
    break
    case "Prata":
        console.log("\nPatente Intermediaria.")
    break
    case "Ouro":
        console.log("\nPatente Avançado.")
    break
    case "Diamante":
        console.log("\nPatente Elite.")
    break
    default:
        console.log("\nSua patente não é valida")
}