const prompt = require('prompt-sync')()

console.log("\n")
let consultas = Number(prompt("Quantas consultas você ja realizou com a nossa IA hoje?: "))
console.log("\n")

if(consultas < 20){
    console.log("\nVocê ainda tem ", 20 - consultas ," consultas gratuitas com a nossa IA, Após passar este limite assine um dos nossos planos para continuar usando.")
} else {
    console.log("\nVocê atingiu o limite maximo de usos gratuitos da nossa IA hoje, Se quiser continuar usando assine um dos nossos planos.")
}

// 1. Optei pelo uso de IF ELSE porque o código não é massivo, o que não gera grande impacto no tempo de criação ou no custo computacional. Outro motivo para a minha escolha é que domíno mais IF ELSE em comparação ao Switch Case. Sendo assim acho que a estrutura de controle mais recomendada seria IF ELSE.