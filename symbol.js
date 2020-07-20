//Tipo primitivo, imutável e único
//Atua como uma chave unica em um objeto
console.log(Symbol("a"))
console.log(Symbol("b"))
console.log(Symbol("c"))

console.log(Symbol.hasInstance)
console.log(Symbol.isConcatSpreadable)
console.log(Symbol.iterator)
console.log(Symbol.match)
console.log(Symbol.replace)
console.log(Symbol.search)
console.log(Symbol.species)
console.log(Symbol.split)
console.log(Symbol.toPrimitive)
console.log(Symbol.toStringTag)
console.log(Symbol.unscopables)

let regexp = /JavaScript/
regexp[Symbol.match] = false
console.log('/JavaScript/'.startsWith(regexp))