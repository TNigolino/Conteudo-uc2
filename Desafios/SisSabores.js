const prompt = require('prompt-sync')();

let prestigio = 0;
let frutasVermelhas = 0;
let abacaxi = 0;
let morango = 0;
let mousse = 0;
let chocolate = 0;
let brigadeiro = 0;
let julia = 0;

let bolo1 = ["Prestígio", "Frutas Vermelhas", "Abacaxi", "Morango", "Mousse", "Chocolate", "Brigadeiro", "Júlia"];

console.log("\nOpções de bolo:", bolo1);

for(let i = 0; i < 8; i++){
    let bolo1 = prompt(`Cliente ${i + 1}, digite o nome do bolo que deseja: `);
    bolo1 = bolo1.toLowerCase();
    switch(bolo1){
        case "prestigio" :
            prestigio++;
            break;
        case "frutas vermelhas" :
            frutasVermelhas++;
            break;
        case "abacaxi" :
            abacaxi++;
            break;
        case "morango" :
            morango++;
            break;
        case "mousse" :
            mousse++;
            break;
        case "chocolate" :
            chocolate++;
            break;
        case "brigadeiro" :
            brigadeiro++;
            break;
        case "julia" :
            julia++;
            break;
        default:
            console.log("\nBolo não disponível.")
    }
}

let resultado = [prestigio, frutasVermelhas, abacaxi, morango, mousse, chocolate, brigadeiro, julia];
let maior = Math.max(...resultado);
maior = bolo1[resultado.indexOf(maior)];

console.log(`\nBolo Escolhido: ${maior}`);