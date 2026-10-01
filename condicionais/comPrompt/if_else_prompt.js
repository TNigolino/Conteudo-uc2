const prompt = require('prompt-sync')()

let bateria = Number(prompt("Digite o nivel da sua bateria: "))
// Se a bateria estivar a menos de 20% ou menos

if(bateria <= 20){
    console.log("Largue tudo que esta fazendo e pegue um carregador, AGORA!!.")
} else {
    // Senao...
    console.log("Fique dboa e continue jogando ate chegar em 20%.")
}