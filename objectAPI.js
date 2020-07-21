const javascript = Object.create({})
const javascript2 = Object.create({})
//Passa para a variável javascript o objeto abaixo
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}, {
    author: "Brendan Eich",
    influencedBy: "Java, Scheme and Self"
})

Object.assign(javascript2, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}, {
    author: "Brendan Eich",
    influencedBy: "Java, Scheme and Self"
})

console.log(javascript)
//Retorna as chaves das propriedades
console.log(Object.keys(javascript))
//Retorna os valores das propriedades
console.log(Object.keys(javascript))
//Retorna os valores e keys das propriedades uma a uma em um array
console.log(Object.entries(javascript))
//Retorna se um objeto é igual a outro
console.log(Object.is(javascript, javascript))
console.log(Object.is(javascript, javascript2))
console.log(Object.is(NaN, NaN))

//defineProperty
let javascript3 = {}
Object.defineProperty(javascript3, "name", {
    value: "JavaScript"
})
//Quando não define o enumerable, o restante do objeto é falso pois não é enumerado
console.log(javascript3.name)

Object.defineProperty(javascript3, "name", {
    enumerable: true,//Permite que tenha as enumerações
    writable: true,//Permite que tenha alterações por fora
    configurable: true,//Permite se pode deletar ou não
    value: "JavaScript"
})
console.log(javascript3.name)

//preventExtensions, seal e freeze - permite um conjunto de regras positivas e negativas

                    //criar, buscar, alterar, deletar
//preventExtensions     0       1       1       1
//seal                  0       1       1       0
//freeze                0       1       0       0

let javascript4 = {
    name:"JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}
Object.preventExtensions(javascript4)
javascript4.name = 'EcmaScript'
delete javascript4.year
console.log(javascript4)
console.log(Object.isExtensible(javascript4))
console.log(Object.isSealed(javascript4))
console.log(Object.isFrozen(javascript4))
Object.setPrototypeOf(javascript4, {})