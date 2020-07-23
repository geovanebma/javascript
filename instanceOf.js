const _instanceof = function(obj, fn){
    if(obj === fn.prototype) return true
    if(obj === null) return false
    return _instanceof(obj._proto_, fn)
}

const date = new Date()
//No console: a constante date, foi instanciada pela classe Date? se sim, true
console.log(date instanceof Date)

//Desse modos também dá verdadeiro pois Date é instanciado de Object
console.log(date instanceof Object)

console.log(_instanceof(date, Date))
console.log(_instanceof(date, Object))