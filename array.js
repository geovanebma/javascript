//É um objeto que oferece funções para acessar suas propriedades
const languages = ['Python', 'C', 'Java']
console.log(languages)
console.log(languages instanceof Array)

//Utilizando função construtora
const languages2 = new Array(1, 2, 3)//Caso coloque apenas um número > 0, esse será o tamanho da array
console.log(languages2)

//length - quantidade de itens na array
const languages3 = []
languages3[0] = "Python"
languages3[1] = "C"
languages3[2] = "Java"

console.log(languages3.length)

//Os elementos vazios na array não são contados com o length
delete languages3[1]
console.log(languages3.length)

//Mutação
const languages4 = ["Python", "C", "Java"]

//push - adiciona alemento no final da array
languages4.push('Ruby')
languages4.push('Go')
console.log(languages4)

//pop - remove alemento no final da array
languages4.pop()
console.log(languages4)

//unshift - adiciona um elemento no início
languages4.unshift('C#')
console.log(languages4)

//shift - remove um elemento do início
languages4.shift()
console.log(languages4)

//splice - remove, substitui ou adiciona um ou mais elementos em uma determinada posição
languages4.splice(1, 1)//a partir do elemento 1, apenas 1 elemento para deletar
languages4.splice(1, 0, 'C++', 'C#')//a artir do 3º parâmetro, adiciona mais elementos
console.log(languages4)
languages4.splice(1, 2, "C")
console.log(languages4)

//sort - ordena os elementos de um array
languages4.sort()
console.log(languages4)

const languages5 = [
    {
        name: "Python",
        year: 1991
    },
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
]

//Ordena os objetos por ordem de ano
languages5.sort(function(a, b){
    return a.year - b.year //Reverso - b.year - a.year
    //name - (a.name <= b.name)?-1:1
    //a.name.localeCompare(b.name)*-1
})
console.log(languages5)

//reverse - inverte a ordem dos elementos
languages4.reverse()
console.log(languages4)

//fill - preenche os elementos de acordo com a posição de início e fim
languages4.fill("JavaScript", 0, 2)
console.log(languages4)

//Iteration
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultados;

//forEach - Executa a função passada por parâmetro para cada elemento
numeros.forEach((numero) => console.log(numero))

//filter - Retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmetro
resultados = numeros.filter(function (numero){
    return numero < 8
})
console.log(resultados)

//find - retorna o primeiro elemento que retornou true na função passada por parâmetro
resultados = numeros.find(function (numero){
    return numero < 5
})
console.log(resultados)

//some - retorna true se todos os elementos retornaram true na função passada por parâmetro
resultados = numeros.some(function (numero){
    return numero < 5
})
console.log(resultados)

//every - retorna true se todos os elementos retornaram true na função passada por parâmetro
resultados = numeros.every(function (numero){
    return numero < 11
})
console.log(resultados)

//map - retorna um novo array com base no retorno da função passada por parâmetro
resultados = numeros.map(function (numero){
    return numero < 4
})
console.log(resultados)

//reduce: retorna um valor com base no retorno da função passada por parâmetro
resultados = numeros.reduce(function (total,numero){
    return total + numero
}, 0)
console.log(resultados)

//Accessors
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultados;

//indexOf - Retorna a posição do primeiro elemento encontrado
console.log(numeros2.indexOf(8))

//lastIndexOf - retorna a posição do último elemento encontrado
console.log(numeros2.lastIndexOf(8))

//includes - retorna true se o elemento existir
console.log(numeros2.includes(8))

//concat - retorna um novo array resultante da concatenação de um ou mais arrays
resultados = numeros2.concat([11, 12, 13]) 
console.log(resultados)

//slice - retorna partes de um determinado array de acordo com a posição de início e fim
resultados = numeros2.slice(2, 6)//pega os 4 elementos a partir do índice 2
console.log(resultados)

//join - converte o array para uma string, juntando os elementos com base em um separador
console.log(numeros2.join(";"))