//É um formato de intercâmbio de dados
//Os formatos aceitos são: number, string, boolean, object, array, null

//Converte um determinado tipo de dado para JSON
console.log(JSON.stringify(10))
console.log(JSON.stringify('JavaScript'))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify({name: "self", paradigm: "OO"}))
console.log(JSON.stringify([1, 2, 3, 4, 5]))
console.log(JSON.stringify(null))

//Converte JSON para um determinado tipo de dado
var numeroJSON = JSON.stringify(10)
console.log(JSON.parse(numeroJSON))