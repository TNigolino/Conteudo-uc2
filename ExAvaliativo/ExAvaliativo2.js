const prompt = require("prompt-sync")()

console.log("\n")
let carregamento = Number(prompt("Qual a porcentagem de bateria do carro?: "))

if(carregamento >= 30){
    console.log("\nPrepare-se vamos começar a viagem!.")
} else {
    console.log("\nEspere a porcentagem de bateria chegar em 30%, Falta apenas ", 30 - carregamento," % para podermos sair viajar.")
}

// 1. Optei pelo uso de IF ELSE porque o código não é massivo, o que não gera grande impacto no tempo de criação ou no custo computacional. Outro motivo para a minha escolha é que domíno mais IF ELSE em comparação ao Switch Case. Sendo assim acho que a estrutura de controle mais recomendada seria IF ELSE, pois também tem o fato de não ser recomentado usar o Switch Case com operadores lógicos.