const prompt = require('prompt-sync')()
const name = prompt('What is your name?')
const age = prompt('How old are you?')
const city = prompt('Are you from?')
const work = prompt('Do you work with?')

console.log(`Hello, ${name}! Are you ${age} years old and you are from ${city},proffision ${work}.`)