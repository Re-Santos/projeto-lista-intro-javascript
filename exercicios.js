// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
/*
// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura= Number (prompt (`Digite um número para altura`))
  const largura= Number (prompt (`Digite um número para largura`))
  const area= altura * largura
  console.log (area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number (prompt(`Digite o ano atual`))
  const anoDeNascimento = Number (prompt(`Digite o ano em que nasceu`))
  const idade= anoAtual - anoDeNascimento
  console.log (idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const kilos = Number (prompt(`digite seu peso em KG`))
  const metros = Number (prompt(`Digite sua altura`))
  const imc = peso/(altura*altura)
  return imc
    
}
*/

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome= prompt(`Digite seu nome:`)
  const idade=prompt(`Digite sua idade:`)
  const email= prompt(`Digite seu email:`)
  const mensagem =`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  console.log (mensagem)
}



/*

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt (`Qual sua primeira cor favorita?`)
  const cor2 = prompt (`Qual sua segunda cor favorita?`)
  const cor3 = prompt (`Qual sua terceira cor favorita?`)
  const minhasCoresFavoritas =[cor1, cor2, cor3]

  console.log (minhasCoresFavoritas)
}
/*
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase = string.toUpperCase()
  return frase

}
/*
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const precoCusto= Number custo
  const precoIngresso= Number valorIngresso
  const precisaVender= Number precoCusto/precoIngresso

  return precisaVender
 
 }
*//*
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const frase1 = string1
  const frase2 = string2
  const tamanhoFrase1= frase1.length
  const tamanhoFrase2= frase2.length
  const mesmoTamanho= tamanhoFrase1 === tamanhoFrase2 
  return mesmoTamanho
  
}*/

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  const primeiroElemento = array[0]
  return primeiroElemento

}



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}*/