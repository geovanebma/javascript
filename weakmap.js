//similar ao map, weakmap é um objeto, porém, permite apenas chaves do tipo object
const wn1 = new WeakMap()
const obj1 = {}//Não pode mudar essas chaves para string, numero, array... senão dará erro
const obj2 = {}

//set - adiciona um par de chave e valor
console.log(wn1.set(obj1, "obj1"))
console.log(wn1.set(obj2, "obj2"))

//has - retorna true se a chave existir
console.log(wn1.has('obj1'))

//get - retorna o valor de uma determinada chave
console.log(wn1.get('obj1'))

//delete - remove um par de chave e valor
console.log(wn1.delete('obj1'))