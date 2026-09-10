// Importa o prompt-sync
const prompt = require('prompt-sync')()

// Pede o nome do usuario
const name = prompt('What is your name?')

// Pede a idade do usuario
const age = prompt('How old are you?')

// Exibe a resposta
console.log(`Hello, ${name}! You are ${age} years old.`)
