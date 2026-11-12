const prompt = require("prompt-sync")()


let inventario = []


let adicionando = true;

while (adicionando) {

    console.log("\n--------- INVENTÁRIO =====");
    console.log("1 - Adicionar item");
    console.log("2 - Ver inventário");
    console.log("3 - Sair");


    let opcao = prompt("Escolha uma opção: ");

    // adicionar
    if (opcao === "1") {

        let item = prompt("Qual item deseja guardar? ")

        
        inventario.push(item)

        console.log("O " + item + " foi guardado!")
// ver 2
    }else if (opcao === "2") {        
        if (inventario.length === 0) {
            console.log(" O inventario está vazio.")
        } else {
            console.log(" Seus itens:")
            console.log(inventario)

            console.log("Total de itens: " + inventario.length)
        }

    }

    // pra sair 3
    else{

        console.log(" Até a próxima!")
        adicionando = false;

    }
}