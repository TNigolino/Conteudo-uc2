const idades = [18, 16, 12, 14, 30];
let autorizados = 0;
let barrados = 0;
let maior = 0;

for (let i = 0; i < idades.length; i++){
    if(idades[i] >= 16){
        console.log(`Visitante ${i + 1}: Entrada Autorizada.`);
        autorizados++
    } else {
        console.log(`Visitante ${i + 1}: Entrada Negada.`)
        barrados++
    }
    if(idades[i] > maior){
        maior = idades[i]
    }
}

console.log(`\nVisitantes Autorizados: ${autorizados}`)
console.log(`\nVisitantes Barrados: ${barrados}`)
console.log(`\nO responsal de todos sera um visitante com ${maior} anos`)