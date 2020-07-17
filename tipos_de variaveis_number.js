//Diferentemente de muitas linguagens de programação, o number é único, pois pode utilizar os tipos:
//float, int, double... Suportando (decimal, hexadecimal, binário e octal)

//Como o sistema reconhece esses valores?

let tipo_decimal = 10
let tipo_hexadecimal = 0xb5fd6//começa com 0x
let tipo_binario = 010//começa com 0
let tipo_octal = 0o7//começa com 0o

//Um número também pode ser declarado em forma construtora
console.log(new Number(10))
console.log(new Number(0o10))

//Alguns métodos a seguir:

//Anotação Científica
let numero_decimal = 123.4
console.log((numero_decimal).toExponential(10))

//Quantidade de casas após a vírgula
let numero = 123
console.log((numero).toFixed(2))

//Quantidade de casas ao total
let numero = 123.4
console.log((numero).toPrecision(10))
