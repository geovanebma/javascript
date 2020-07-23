//Um objeto que armazna um conjunto de chaves e valores que podem ser de qualquer tipo de dado
//Operações
const timeUnits = new Map([["hour", 1], ["minute", 60], ["second", 3600]])
console.log(Array.from(timeUnits))

//size - retorna a quantidade de elementos
console.log(timeUnits.size)

//set - adiciona um par de chave e valor
console.log(timeUnits.set("miliseconds", 360000))

//forEach - altera sobre o mapa
timeUnits.forEach(function(value, key){
    console.log(key+" : "+value)
})

//has - retorna true se a chave existir
console.log(timeUnits.has('hour'))

//get - retorna o valor de uma determinada chave
console.log(timeUnits.get('hour'))

//delete - remove um par de chave e valor
console.log(timeUnits.delete('hour'))

//clear - remove todos os elementos
console.log(timeUnits.clear())