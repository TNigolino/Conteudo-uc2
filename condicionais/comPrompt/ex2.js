const prompt = require('prompt-sync')()


let pontuacao = prompt("Qual foi sua pontuacão: ")

if(pontuacao >= 1000){
    console.log("\nParabens Lenda dos Games!.")
} else if(pontuacao >= 500){
    console.log("\nParabens Jogador pro!.")
} else {
    console.log("\nContinue tentando,padawan!.")
}