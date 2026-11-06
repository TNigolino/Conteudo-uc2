// PROPRIEDADES DE STRING
// São características ou métodos de uma string.

// 1. PROPRIEDADE LENGTH
//-----------------------------------------------
// O QUE É? A propriedade length informa quantos qcaracteres existem dentro de uma string.
// Ela conta:
// - letras, números, espaços, símbolos
//-----------------------------------------------
// SINTAXE: regras de aplicação

// variavel.length
// Exemplo:
let nomeCompleto1 = "Jovem Eduardo"
console.log(nomeCompleto1.length)

// Resultado: 13 

//---------------------------------
// 2. toUpperCase() - TRANSFORMANDO EM MAIÚSCULA
// Oque faz: Transforma todas as letras de uma string em letras MAIUSCULAS.

// SINTAXE
// nomeDaVariavel.toUpperCase()
// IMPORTANTE: toUpperCase() é um MÉTODO, por isso utilizamos parÊntese ()


// EXEMPLO na vida real realística:
// Imagine um sistema que emite certificados. O aluno informa seu nome utilizando trÊs letras min[usculas e trÊs maíuscula. Fica meio feio, então o sistema precisa
// PROPRIEDADES DE STRING
// São características ou métodos de uma string.

// 1. PROPRIEDADE LENGTH
//-----------------------------------------------
// O QUE É? A propriedade length informa quantos qcaracteres existem dentro de uma string.
// Ela conta:
// - letras, números, espaços, símbolos
//-----------------------------------------------
// SINTAXE: regras de aplicação

// variavel.length
// Exemplo:
let nomeCompleto = "Jovem Eduardo"
console.log(nomeCompleto.length)

// Resultado: 13 

//---------------------------------
// 2. toUpperCase() - TRANSFORMANDO EM MAIÚSCULA
// Oque faz: Transforma todas as letras de uma string em letras MAIUSCULAS.

// SINTAXE
// nomeDaVariavel.toUpperCase()
// IMPORTANTE: toUpperCase() é um MÉTODO, por isso utilizamos parÊntese ()


// EXEMPLO na vida real realística:
// Imagine um sistema que emite certificados. O aluno informa seu nome utilizando trÊs letras min[usculas e trÊs maíuscula. Fica meio feio, então o sistema precisa gerar o certificado com todas as letras maiusculas.

//Nome informado pelo aluno
let nomeCertificado = "Jovenzinho EduaRDINHO"
// Convertendo em maiúsculo
console.log(nomeCertificado.toUpperCase())


//--------------------------------------------------
// 3. toLowerCase() - TRANSFORMANDO EM MINÚSCULO 
//-------------------------------------------------
// O QUE FAZ?
// Transforma todas as letras de uma string em minúsculo 

// COMO UTILIZAR?
// nomeVariavel.toLowerCase()

// EXEMPLO DA VIDA REAL REALISTÍCA
// Imagine um sistema que registra nomes de usuários. Uma pessoal digita seu belo nome com letras maiúsculas e minúsculas misturada. O sistema precisa padronizar o texto, apresentando todas as letras em minúsculas.

// Nome de usuário digitado
let usuario = "AnaSILVA"
// Convertendo para minúsculas
console.log(usuario.toLowerCase())

// LEMBRE-SE:

// toUpperCase() -> MAIÚSCULA
// toLowerCase() -> minúsculas

//----------------------------------------------------
// 4. trim() - REMOVENDO ESPAÇOS DESNECESSÁRIOS
//----------------------------------------------------
// o que faz?
// Remove os espaços em branco que aparecem no início e no final de uma string.

// COMO UTILIZAR
// nomeDaVariavel.trim() NÃO remove os espaços entre as palavras.

// EXEMPLO DA VIDA REAL REALÍSTICA:
// Imagine um formulário de matricula no TDS.O adoravel aluno digita seu nome, mas sem perceber adiciona váaaaarios espaços antes de depois. O sistema precisa limpar esses espaços.

// Nome com espaços extras
let nomeMatricula = " Aluno Espaçado "
// Mostras texto original
console.log("Antes", nomeMatricula)
// Removando espaços das extremidades
console.log("Depois", nomeMatricula.trim())

// tarefinha: contem o número de caracteres de ambas 
console.log("Sem trim", nomeMatricula.length)
console.log("Com trim", nomeMatricula.trim().length)

// ------------------------
// 5. includes() - PROCURANDO UM TEXTO
// ------------------------

// O QUE FAZ
// Verifica se uma string contém determinada palavra ou trecho de texto.

// COMO UTILIZAR
// NomeDaVariavel.includes("texto")
// true -> o texto foi encontrado na string original
// false -> non foi encontrado

// EXEMPLO DA REALIDADE REALÍSTICA
// Imagine um sistema de busca de concursos. O aluno pesquisa por uma palavra para ver se ela aparece no nome de um determinado curso

// Nome do curso cadastrada
let nomeCurso = "Tecnico em desenvolvimento de sistemas."
// procurando alguma palavra do texto
console.log("Esse curso existe", nomeCurso.includes("Tecnico"))
console.log(nomeCurso.includes("desenvolvimento"))

// ------------------------------------------------------------
// 6. repleceALL() - SUBISTITUINDO TEXTO
// ------------------------------------------------------------

// O QUE FAZ
// Substitui TODAS as ocorrências de um texto por outro texto
// COMO UTILIZAR
// nomeDaVariavel.replaceALL("Antigo", "Novo")
// O primeiro é o texto que queremos substituir o segundo o substituto.

// EXEMPLO REAL REALISTICO

// Imagine que uma escola alterou o nome de uma disciplina. Antes era, "AlgoritmosNomral". Agora será "AlgoritmosMuchoLoco".precisamos alterar um comunicado

// Comunicado original
let comunicado = "Aula de AlgoritmosNormais será em 2045."
// Substitui todas as ocorrencias
console.log("Frase Antes: ", comunicado)
console.log("Frase Depois: ", comunicado.replaceAll("AlgoritmosNormais", "AlgoritmosMuchoLocos"))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           