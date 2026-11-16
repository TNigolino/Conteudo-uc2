const prompt = require('prompt-sync')()
let infantil = 0;
let inteira = 0;
let idoso = 0;
let maior = 0;

for(let i = 1; i <= 8; i++){
    let idade = parseFloat(prompt(`Cliente ${i} digite sua idade: `))
    if(idade < 12){
        console.log(`Ingresso infantil`)
        infantil++
    } else if(idade <= 59){
        console.log(`Ingresso Inteiro`)
        inteira++
    } else {
        console.log(`Ingresso Idoso`)
        idoso++
    }
    if(idade > maior){
        maior = idade
    }
}

console.log(`\nINGRESSOS INFANTIL: ${infantil}`)
console.log(`\nINGRESSOS INTEIROS: ${inteira}`)
console.log(`\nINGRESSO IDOSO: ${idoso}`)
console.log(`\nPESSOA COM A MAIOR IDADE: ${maior}`)