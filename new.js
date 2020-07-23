//
const createPerson = function(name, city, year){
    return{
        name: name,
        city: city,
        year: year,
        getAge(){
            return (new Date()).getFullYear() - this.year
        }
    }
}

const p1 = createPerson("Linus Torvalds", "Helsinki", 1969)
const p2 = createPerson("Bill Gates", "Sattle", 1955)
console.log(p1)
console.log(p1.getAge())
console.log(p2)
console.log(p2.getAge())
//Nesses dois consoles acima, ao reparar, vemos os dois getAge duplicados

//Como melhorar
const personPrototype = {
    getAge(){
        return (new Date()).getFullYear() - this.year
    }
}

const createPerson2 = function(name, city, year){
    const person = {
        name: name,
        city: city,
        year: year
    }
    Object.setPrototypeOf(person, personPrototype)
    return person;
}

const person1 = createPerson("Linus Torvalds", "Helsinki", 1969)
const person2 = createPerson("Bill Gates", "Sattle", 1955)
console.log(person1)
console.log(person1.getAge())
console.log(person2)
console.log(person2.getAge())
console.log(person2._proto_)

//Função Construtora - Retorna um novo objeto ao ser invocado por meio do operador new
const Person = function(name, city, year){
    this.name = name
    this.city = city
    this.year = year
}
//Ao invés de colocar o this.getAge dentro do person, pode ser classificado como um protótipo
Person.prototype.getAge = function(){
    return (new Date()).getFullYear() - this.year
}

const pessoa1 = new Person("Linus Torvalds", "Helsinki", 1969)
const pessoa2 = new Person("Bill Gates", "Sattle", 1955)
console.log(pessoa1)
console.log(pessoa2)

//Método mais avançado
const _new = function(fn, ...params){
    const obj = {}
    Object.setPrototypeOf(obj, fn.prototype)//colocamos no obj o objeto getAge
    fn.apply(obj, params)
    return obj
}

const Person2 = function(name, city, year){
    this.name = name
    this.city = city
    this.year = year
}

Person2.prototype.getAge = function(){
    return (new Date()).getFullYear() = this.year
}

const per1 = _new(Person2, "Linus Torvalds", "Helsinki", 1969)
const per2 = _new(Person2, "Bill Gates", "Sattle", 1955)