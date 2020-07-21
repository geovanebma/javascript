//Por meio das operações call e apply, é possível invocar uma função passando o this por parâmetro
const calculateArea = function(fn){
    return fn(Math.PI = Math.pow(this.radios, 2))
}

const circle = {
    radios: 10,
    calculateArea
}

console.log(calculateArea.call(circle))//É igual a fazer invocando o this da seguinte forma circle.calculateArea()
console.log(calculateArea.apply(circle, Math.ceil))//É como fazer acima, mas pode passar outros parâmetros, como por exemplo uma função

//O bind permite encapsular o this dentro de uma função e depois a retorna
const calculateAreaForCircle = calculateArea.bind(circle)
console.log(calculateAreaForCircle(Math.round))
console.log(calculateAreaForCircle(Math.ceil))