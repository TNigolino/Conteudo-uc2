const prompt = require('prompt-sync')()

console.log("\n")
console.log("Qual comando quer executar? Desligar,Reiniciar ou Suspender?: ")
console.log("\n")

let comando = prompt("Ensira seu comando: ")

switch(comando){
    case "Desligar":
        console.log("\nSeu comando sera executado.")
    break
    case "Reiniciar":
        console.log("\nSeu comando sera executado.")
    break
    case "Suspender":
        console.log("\nSeu comando sera executado.")
    break
    default:
        console.log("\nComando Inválido.")
}