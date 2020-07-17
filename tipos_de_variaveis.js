//Aqui neste arquivo, você verá os tipos primitivos de variáveis existentes

//Tipo number
let tipo_1 = 10

//Tipo string
let tipo_2 = "javascript"

//Tipo boolean
let tipo_3 = false

//Tipo symbol
let tipo_4 = Symbol()

//Tipo null
let tipo_5 = null

//Tipo undefined
let tipo_6 = undefined

//=========================================

//Alguns métodos a seguir:

//.toFixed(number) - coloca a quantidade de casas decimais após o número
console.log((tipo_1).toFixed(2))

//.replace - subistitui algum caracter por outro
console.log((tipo_2).replace('a', 4))

//.toString - converte simbolos ou números em string
console.log(Symbol("iterator").toString())

//==========================================

//Utilizando o simbolo typeof para descobrir o tipo da variável
console.log(typeof tipo_1)//number
console.log(typeof tipo_2)//string
console.log(typeof function sum(a, b){return a+b})//function
console.log(typeof {cor1: "amarelo"})//object
console.log(typeof [1, 2, 3, 4, 5, 6, 7])//array

//typeof de new Date() e expressões regulares são considerados como object
//Não confunda typeof com instanceof