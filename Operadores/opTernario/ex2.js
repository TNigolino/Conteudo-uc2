const prompt = require('prompt-sync')()

let thiago = prompt("Thiago você irá vir amanhã?: ")

let resultado = thiago === "Sim" || thiago === "Vou" ? "O Thiago virá amanhã." : "O Thiago não virá amanhã."

console.log(resultado)