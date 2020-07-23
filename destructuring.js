//Normalmente, caso queira pegar cada um e atribuir em variáveis diferentes, ficaria da seguinte forma
const language = "C;Dennis Ritchie;1972".split(";")
const program = language[0]
const author = language[1]
const year = language[2]
console.log(program, author, year)

//Para uma forma mais enxuta, podemos realizar da seguinte forma
const [, author2, year2] = "C;Dennis Ritchie;1972".split(";")
console.log(author2, year2)//Note que não queremos pegar o valor do program, mas devemos deixar uma virgula para acessar as outras informações

//Também é possível deixar com valores padrões e passar para outra const
const language3 = "C".split(";")
const [program3 = "-", author3 = "-", year3 = "-"] = language3
console.log(program, author, year)

//Semelhante a array, também é possível com objetos
const language4 = {
    program: "C",
    author: "Dennis Ritchie",
    year: 1972,
    company:{
        name: "Bell Labs"
    }
}

const {program4, author4, year4} = language4
console.log(program4, author4, year4)

//Ou renomeá-las...
const {program: n, author: a, year:y, company: {name:n2}} = language4
console.log(n, a, y, n2)

//Em funções
const sum = function([a, b]){
    return a+b
}
console.log(sum([2, 2]))

const sum2 = function({a, b}){
    return a+b
}
console.log(sum2({a:2, b:2}))