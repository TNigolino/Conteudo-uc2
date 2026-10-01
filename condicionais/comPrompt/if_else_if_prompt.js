// IF ELSE IF
// Usamos quando temos MAIS DE DOIS caminhos


const prompt = require('prompt-sync')()

let nota = Number(prompt("Qual foi sua nota: "))

// Primeira condicao
if(nota >= 8){
    console.log("Parabens voce esta acima da media!!!.")
} else if(nota === 7){
    console.log("Você esta na media, continue estudando para tirar 10!.")
} else if(nota >= 5){
    // Se nao passou na primeira condicao, verificamos uma SEGUNDA condicao.
    console.log("Recuperacao em meu veio, estude e tenha cuidado para nao reprovar.")
} else {
    // Se nenhuma condicao for verdadeira ...
    console.log("Reprovado!!!.")
}
