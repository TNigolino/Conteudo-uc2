const prompt = require('prompt-sync')()
const client = prompt('What is your name?.')
const pizzaFlavour = prompt('What is flavour from the pizza?.')
const pizza = prompt('Pizza size?.')

console.log(`Ok ${client}, a ${pizza} pizza, flavour ${pizzaFlavour} is going to you.`)