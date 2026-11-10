const prompt = require('prompt-sync')()

let mensagem = prompt("Qual mensagem para seu planeta: ")

mensagem = mensagem.toLowerCase()

if(mensagem.includes("socorro")){
    console.log("ALERTA!.")
} else {
    console.log("Comunicação recebida!. Missão tranquila!.")
}