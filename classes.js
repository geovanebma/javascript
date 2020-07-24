//São um tipo especial de função que atuam como template na criação de objetos
class Shape {
    //Prototype methods
    toString(){
        return `area: ${this.calculateArea()}`
    }
}

class Square extends Shape{
    //As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods
    //Construtor
    constructor(side){
        super() //Este super, se referencia a classe que está sendo extendida, no caso Shape. Se não houvesse esse super(), daria erro
        this.side = side
    }

    //Prototype methods
    toString(){
        return `side: ${this.side} ${super.toString()}`
    }

    calculateArea(){
        return Math.pow(this.side, 2)
    }

    //Static Methods - colocando static na frente, diz que aquele método pertence a própria classe
    static fromArea(area){
        //Nesse caso, este invoca a própria classe para passar o parâmetro no construtor e assim temos o this.side
        return new Square(Math.sqrt(area))
    }
}

const square = new Square(4);
console.log(square)
console.log(square.toString())
console.log(square.calculateArea())

const square2 = new Square.fromArea(16)
console.log(square.toString())