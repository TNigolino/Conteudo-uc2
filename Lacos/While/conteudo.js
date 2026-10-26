// WHILE - ENQUANTO 
// Oque são laços de repetição

/*
  imagine, que você tem uma prof meio surda. E precise repetir bom dia 5 vezes para ela entender.

  sem utilizar laços ficaria:
  console.log("Bom dia, Sora!")
  console.log("Bom dia, Sora!")
  console.log("Bom dia, Sora!")
  console.log("Bom dia, Sora!")
  console.log("Bom dia, Sora!")
  
  E se precisassemos repetir 100 vezes para a coitada ouvir

  para isso, utilizamos os LAÇOS DE REPETIÇÃO
 */

// ==========================================
// 2 . CONTADORES E INCREMENTOS 
// ==========================================

/* 

  Antes de aprender sobre laços, precisamos compreender como funciona os INCREMENTOS ou CONTADORES.

  Um contador é uma variavel utilizada para contar quantas vezes determinada ação aconteceu.

*/

let contador = 1

console.log(contador) // resposta vai ser 1
contador++

// agora incrementamos com o ++

console.log(contador) // resposta vai ser 2
contador++

// agora incrementamos com o ++ de novo

console.log(contador) // resposta vai ser 3

// o simbolo ++ aumenta o valor em 1
// contador++ é equivalente a:
// contador = contador + 1
// agora se queremos aumentar o contador em 4 unidades

contador+=4
console.log(contador)

// também podemos diminuir 

contador--
console.log(contador)

// ==================================
// 3. WHILE - ENQUANTO
// ==================================
/*

  While significa "ENQUANTO". O código será repetido ENQUANTO a condição for verdadeira.


  ESTRUTURA 
  WHILE(condicao){
  codigo que será repetido
  }

  COMO FUNCIONA
  1. Verifica a condição
  2. Se for verdadeira, executa o código
  3. Retorna para verificar novamente
  4. Quando for falsa, encerra a repetição

  EXEMPLO 1 - CONTANDO DE 1 ATE 5
*/
let numero = 1
  // Enquanto numero for menor ou igual a 5...
while(numero <= 5){
   // Mostra o numero atual
  console.log("Numero", numero)
  // Aumenta o numero em uma unidade
  numero++
}

/*

EXEMPLO 2 - COMER MAIS COXINHAS

*/

let estomago = 0;

while(estomago > 100){
  console.log("\nQuero comer mais coxinhas")
  estomago = estomago + 10;
}