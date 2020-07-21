//Contém um bloco de código executável
function sum(a, b){
    return a+b
}
console.log|(sum())
console.log|(sum(3,4))

//A diferença com o anterior, é que, se for colocado antes a execução, ou seja antes do bloco, nessa daqui não funciona
const subtract = function(a, b){
    return a-b
}
console.log(subtract(3,2))

//Uma função que invoca uma função
const calculator = function(){
    return function (){
        console.log("Calculator")
    }
}
console.log(calculator())
console.log(calculator()())

//Uma função que invoca uma função com parâmetro
const calculator2 = function(fn){
    return function (a, b){
        return fn(a, b)
    }
}
console.log(calculator(sum)(2, 2))

//Default parametros - caso não tenha nenhum valor nas variáveis, os parâmetros tem um valor default
const multiple = function(a = 1, b = 1){
    return a*b
}
console.log(multiple(2))

//function arguments
const argumentos = function(){
    console.log(arguments)
}
argumentos(1, 2, 3, 4, 5, 6, 7, 8, 9)

//rest parameter
const restParameter = function(a, b, c, ...numbers){
    let total = a+b+c
    for(let number of numbers){
        total += number
    }
    return total
}
console.log(restParameter(1, 2, 3, 4, 5, 6, 7, 8, 9))