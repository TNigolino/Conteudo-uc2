const prompt = require('prompt-sync')();

const coragem = Number(prompt("Qual seu nivel de coragem? (1 a 100): "));
const inteligencia = Number(prompt("Qual seu nivel de inteligencia? (1 a 100): "));
const lealdade = Number(prompt("Qual seu nivel de lealdade? (1 a 100): "));
const maldade = prompt("Escolha seu caminho: (bem ou mal) ")

console.log("O chapeu seletor esta escolhendo...")

if(coragem >= 80 && inteligencia < coragem && lealdade < coragem){
    console.log("\nSua casa é Grifinória, Parabéns.")
    console.log("\nEsta é a casa que o chapeu seletor escolheu.")
} else if(inteligencia >= 80 && inteligencia > coragem && inteligencia > lealdade){
    console.log("\nSua casa é Corvinal, Parabéns.")
    console.log("\nEsta é a casa que o chapeu seletor escolheu.")
} else if(lealdade >=80 && lealdade > coragem && lealdade > inteligencia){
    console.log("\nSua casa é Lufa-Lufa, Parabéns.")
    console.log("\nEsta é a casa que o chapeu seletor escolheu.")
} else {
    console.log("\nBem-vindo a má Sonserina.")
    console.log("\nEsta é a casa que o chapeu seletor escolheu.")
    if(maldade === "bem"){
        console.log("\nNao iremos te ensinar os caminhos da maldade.")
    } else {
        console.log("\nBem-vindo nosso proximo Valdemort.")
    }
}