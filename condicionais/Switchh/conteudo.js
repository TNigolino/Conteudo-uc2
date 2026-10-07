//  SWITCH CASE
//  O switch é usado quando temos VÁRIAS opcões e queremos executar uma ação dependendo do valor
//  ------------------------------------------------------------------------------------------------

let opcao = 1

switch(opcao){
    case 1:
        console.log("Opcão 1")
        break
    case 2:
        console.log("Opção 2")
        break
    case 3:
        console.log("Opção 3")
        break
    default:
        console.log("Opção Inválida.")
}


//  Trabalhando com Switch com o exemplo do semaforo

let sinal = "Verde"

switch(sinal){
    case "Verde":
        console.log("Sinal Aberto.")
    break
    case "Amarelo":
        console.log("Atenção!!.")
    break
    case "Vermelho":
        console.log("Espere o sinal ficar verde.")
    break
    default:
        console.log("Sinal esta estragado.")
}