const prompt = require('prompt-sync')()
const client = prompt('What is your name?.')
const pizzaFlavor = prompt('What is the flavor of the pizza?.')
const pizza = prompt('Pizza size?.')

console.log(`Ok ${client}, a ${pizza} pizza, flavor ${pizzaFlavor} is going to you.`)