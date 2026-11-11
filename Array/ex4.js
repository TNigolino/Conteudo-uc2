let misty = ["Staryu", "Pysyduck", "Goldeen", "Starmie"];
let brock = ["Onix", "Geodude", "Vulpix",];
let jessie = ["Arbok", "Wobbuffet", "Lickitung"];
let james = ["Weezing", "Victreebel", "Cacnea", "Chimecho"];


console.log(misty[0])
console.log(brock[2])
console.log(jessie[1])
console.log(james[3])
console.log(misty.length)


if(brock.length > james.length){
    console.log("\nBrock tem mais Pokémons que o James!.")
} else if(brock.length === james.length){
    console.log("\nEstão empatados!!!!!.")
} else {
    console.log("\nJames tem mais Pokémons que o Brock!.")
}


if(brock.length > misty.length){
    console.log("\nBrock tem mais Pokémons que o James!.")
} else if(brock.length === misty.length){
    console.log("\nEstão empatados!!!!!.")
} else {
    console.log("\nMisty tem mais Pokémons que o Brock!.")
}
