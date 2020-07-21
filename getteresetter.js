const rectangle = {
    set x(x){
        if(x > 0){
            this._x = x//É necessário colocar _x, pois senão entrará em loop infinito, pois o this x vai novamente chamar o this x? Complicado
        }else{
            console.log("Invalid value for x")
        }
    },
    set y(y){
        if(y > 0){
            this._y = y
        }else{
            console.log("Invalid value for y")
        }
    },
    get area(){
        return this._x * this._y
    }
}

rectangle.x = 10
rectangle.y = 2
console.log(rectangle.area)

//Utilizando defineProperty
const perimetro = {}
Object.defineProperty(perimetro, "x", {
    set(x){
        this.x = x
    }
})

Object.defineProperty(perimetro, "y", {
    set(y){
        this._y = y
    }
})

Object.defineProperty(perimetro, "area", {
    get(){
        return this._x * this._y
    }
})
perimetro.x = 10
perimetro.y = 2
console.log(rectangle.area)