const notas = [4, 6, 7, 10, 8, 9]
let aprovados = 0;
let reprovados = 0;
let maior = 0;

for(i = 0; i < notas.length; i++){
    if(notas[i] >= 7){
        console.log(`Aluno ${i + 1} Aprovado.`)
        aprovados++
    } else {
        console.log(`Aluno ${i + 1} Reprovado.`)
        reprovados++
    }
    if(notas[i] > maior){
    maior = notas[i];
    }
}   

console.log(`\nAlunos Aprovados: ${aprovados}`)
console.log(`\nAlunos Reprovados: ${reprovados}`) 
console.log(`\nA maior nota da sala foi: ${maior}`)