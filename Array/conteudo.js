// O QUE É UMA ARRAY
// É uma estrutura que permite armazenar vários valores dentro de uma única variável.

// IMPORTANTE:
// Os elementos ficam organizados por índices 
// O primeiro índice é sempre 0
// Podemos consultar, adicionar, alterar e remover dados

// -------------------------------
// 1. POR QUE UTILIZAMOS ARRAYS
// -------------------------------
// SEM ARRAY
// precisamos criar uma variável para cada fruta

let fruta1 = "Maça"
let fruta2 = "Banana"
let fruta3 = "Uva"

console.log(fruta1)

console.log(fruta2)

console.log(fruta3)

//  COM ARRAY
// Armazenamos todas as frutas em uma única variável:
let frutas = ["Maça", "Banana", "Uva"];
console.log(frutas[0])

// ============================
// 2. ENTENDENDO OS ÍNDICES
// ============================

// Cada elemento possui uma posição chamada ÍNDICE
// ARRAY:
// let frutas = frutas = ["Maça", "Banana", "Uva"];
// ÍNDICES----------------- 1 ------ 2  ----- 3 --

// ATENCÍON: A CONTAGEM DOS ÍNDICES COMEÇA EM ZERO
console.log(frutas[0]) // Maça
console.log(frutas[1]) // Banana
console.log(frutas[2]) // Uva
console.log(frutas[10]) // Undefinied significa que não existe um valor na posição consultada, a array vai até índice 2

// ============================================
// 3. ARRAYS PODEM ARMAZENAR DIFERENTES TIPOS
// ============================================

// Arrays de string(textos)

let nomes = ["Adriele", "Lucas", "Joana Vendedora",];
// Array de números
let notas = [8, 8, 8];
// Array Booleanos
let aprovados = [true, true, true];
// // Array da diversidade com diferentes tipos de dados
let alunos = ["Lucas", "Multifuncional", 18, true];

// ===================================
// 4. ALTERANDO UM ELEMENTO DA ARRAY
// ===================================

// Vamos alterar o elemento Adriele da array nomes

nomes[0] = "Jovem Eduardo"
console.log(nomes)

// ============================
// 5. PROPRIEDADE LENGTH
// ============================
// A propriedade length informa a quantidade de elementos existentes do array

let pokemon = ["Pikachu", "Eevee", "Snorlax",];
console.log(pokemon.length)

// ===============================
// 6. PROPRIEDADE INCLUDES()
// ===============================



// Retorna
// true = encontrado
// false = não encontrada

// Exemplo
let equipeAsh = ["Pikachu", "Charizard", "Squirtle"]

console.log(equipeAsh.includes("Pikachu"))