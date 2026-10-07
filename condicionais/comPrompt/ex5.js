const prompt = require('prompt-sync')()

let clima = prompt("Qual a temperatura atual?: ")

if(clima > 30){
    console.log("\nTá derretendo em! Bora pra piscininha.")
} else if(clima >= 15 && clima <= 30){
    console.log("\nCliminha agradável para dar uma caminhada.")
} else {
    console.log("\nHora do cobertor e cama em!.")
}