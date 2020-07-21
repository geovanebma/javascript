//Seu principal objetivo é permitir o reuso de código
const functionalLanguage = {
    paradign: "Functional"
}

const scheme = {
    name: "Scheme",
    year: 1975,
    // _proto_:functionalLanguage
    //paradign: "Functional"
}
Object.setPrototypeOf(scheme, functionalLanguage)

const javascript = {
    name: "Scheme",
    year: 1975,
    // _proto_:functionalLanguage
    //paradign: "Functional"
}
Object.setPrototypeOf(scheme, functionalLanguage)

console.log(functionalLanguage)
console.log(scheme)
console.log(javascript)
console.log(scheme.paradign)
console.log(javascript.paradign)

//hasOwnProperty
for (const key in scheme) {
    console.log(key, scheme.hasOwnProperty(key))
}

//setPrototypeOf
//Pode ser utilizado no lugar do _proto_

//Object.create
const functionalLanguage2 = Object.create({})//Nesse caso, o parâmetro passado são as propriedades do object {}, se colocar "null" dará erro
functionalLanguage2.paradign = "Functional"

const scheme2 = Object.create(functionalLanguage2);
scheme2.name = "Scheme"
scheme2.year = 1975

const javascript2 = Object.create(functionalLanguage2);
javascript2.name = "Scheme"
javascript2.year = 1975
javascript2.paradign = "OO"

for (const key in scheme2) {
    console.log(key, scheme2.hasOwnProperty(key))
}
console.log(javascript2._proto_.paradign)
console.log(javascript2.paradign)
console.log(Object.getPrototypeOf(javascript2).paradign)
//Caso a mesma propriedade exista no objeto e no seu protótipo, a propriedade do próprio objeto é retornada, fazendo sombra à propriedade do propótipo