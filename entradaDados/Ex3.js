const prompt = require('prompt-sync')()
const alienName = prompt('Hey Alien, What is your name? ')
const originPlanet = prompt('are you from what planet? ')
const eyes = prompt('How many eyes you have? ')
const food = prompt('What is your favorite food? ')
const whyTheVisit = prompt('Why you is here? ')

console.log(`Hey Alien ${alienName},you come over from ${originPlanet} planet, you have ${eyes} eyes, that's amazing,your favorite food is ${food} and you is here "${whyTheVisit}".`)