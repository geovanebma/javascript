const calcularArea = function(){
    return this.x * this.y
}

const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function(){
        //return x * y - Dessa forma não é retornado nada, pois não sabe dizer de onde vem esse x e y, pois não está vindo como parâmetro
        return this.x * this.y // Este método é válido pois busca as variáveis dentro dele mesmo ou seja rectangle
    },
    calcularArea
}

console.log(rectangle.calculateArea())
console.log(rectangle.calcularArea())