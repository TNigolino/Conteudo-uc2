const prompt = require("prompt-sync")()

let mensagem = prompt("Qual sua mensagem?: ")

mensagem = mensagem.toLowerCase()

if(mensagem.includes("urgente")){
    console.log("\nMensagem Prioritaria!.")
} else {
    console.log("\nMensagem Comum.")
}