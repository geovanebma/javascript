//Umas funções comuns que utilizamos
const sum = function(a, b){
    return a+b   
}

const subtract = function(a, b){
    return a-b   
}

const calculator = function(fn){
    return function(a, b){
        return fn(a, b)
    }   
}

console.log(calculator(sum(2, 2)))
console.log(calculator(subtract(2, 2)))

//Arrow Function - Uma aboragem mais simples e direta para desenvolver funções
const sum2 = (a, b) => a+b

//Se tirar a chave, não precisa do return
const subtract2 = (a, b) => a-b   

//Se a função receber um parâmetro apenas, não precisa de parênteses, nesse caso, o fn
const calculator2 = fn => (a, b) => fn(a, b)

console.log(calculator2(sum2(2, 2)))
console.log(calculator2(subtract2(2, 2)))

const obj1 = {
    p1: 10,
    getP1: function(){
        const fn1 = () => {
            return this.p1 //Nesse caso, a arrow function, permite que referencie o this a mais externa função que é chamada, ou seja obj1 e não o getP1
        }
        return fn1()
    }
}
console.log(obj1.getP1())