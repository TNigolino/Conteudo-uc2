const prompt = require('prompt-sync')()

console.log("\n")
let planos = Number(prompt("Selecione qual será o plano escolhido 1 - Plano com anúncios, 2 - Plano Básico, 3 - Plano premium, 4 - Plano família: "))
console.log("\n")

switch(planos){
    case 1:
        console.log("\nPlano com anúncios selecionado, Aproveite.")
    break
    case 2:
        console.log("\nPlano básico selecionado, Aproveite.")
    break
    case 3:
        console.log("\nPlano premium selecionado, Aproveite.")
    break
    case 4:
        console.log("\nPlano família selecionado, Aproveite.")
    break
    default:
        console.log("\nPlano inválido, Tente novamente.")
}

// Neste caso, acho que a estrutura recomendada seria o Switch Case, pois o código é um pouco mais extenso e não contém operadores lógicos, o que facilita o uso dessa estrutura.