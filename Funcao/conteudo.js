// O QUE É UMA FUNÇÃO?

// Uma função é um bloco de código que realiza uma tarefa específica. Ela pode receber entradas, chamadas de parâmetros, e pode retornar um valor. As funções são usadas para organizar o código, tornando-o mais modular e reutilizável. Ela pode ser chamada várias vezes em diferentes partes do programa, evitando a repetição de código.

// =============================
// 1. FUNÇÃO SIMPLES
// =============================

// function = palavra utilizada para declarar uma função
// saudaçao = nome da função
// () = parênteses que podem conter parâmetros
// {} = chaves que delimitam o bloco de código da função

function saudacao() {
    console.log("\nOlá, seja bem-vindo!")
}

saudacao() // Chamando a função para executar o código dentro dela

// =============================
// 2. FUNÇÃO COM PARÂMETROS
// =============================

function comprimentar(nome) {
    console.log(`\nOlá, ${nome}! Como você está?`)
}

comprimentar("Thiago") // Chamando a função com um argumento
comprimentar("Maria") // Chamando a função com outro argumento
comprimentar("João") // Chamando a função com outro argumento

// A função é a mesma, apenas o nome(argumento) enviado é diferente

// =============================
// 3. FUNÇÃO COM DOIS PARÂMETROS
// =============================

function somar(a, b) {
    let resultado = a + b
    console.log(`\nResultado da soma: ${resultado}`)
}

somar(5,10)
somar(20,30)

// =============================
// 4. FUNÇÃO COM RETORNO
// =============================

function multiplicar(x, y) {
    return x * y // A palavra return retorna o valor da multiplicação
}
// Guardamos o retorno em uma váriavel
let resultado2 = multiplicar(5, 10)
console.log(`\nResultado da multiplicação: ${resultado2}`) // Exibindo o resultado da multiplicação

//=========================================================
// O QUE É UMA ARROW FUNCTION?
//=========================================================
// Arrow Function é uma maneira moderna e geralmente mais compacta de escrever função em JS. A palavra "arrow" significa "seta" 
// em inglês. Esse nome está relacionado ao símbolo: => A lógica é a mesma o que muda é a maneira de escrever.


const somarArrow = (b,c) =>{
    return b + c
}
console.log(`\nResultado da soma (Arrow Function): ${somarArrow(10,5)}`)