const prompt = require('prompt-sync')()

let niveis = Number(prompt("Qual dificuldade vc deseja jogar 1,2 ou 3?: "))

switch(niveis){
    case 1:
        console.log("Nivel fácil selecionado.")
    break
    case 2:
        console.log("Nivel medio selecionado.")
    break
    case 3:
        console.log("Nivel dificil selecionado.")
        break
    default:
        console.log("Nenhum nível selecionado.")
}