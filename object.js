//Coleção dinâmica de propriedades
//Modelo Comum
{}

//Modelo Construtor
new Object();

//Modelo API
Object.create(null)

var book = {
    title:"Clean Code",
    author: "Roberts Martin",
    "number-of-pages": 464,//Modo também permitido (ou números), mas não recomendado
    language: "English",
    avaliable: true
}
console.log(book)

//Obs: As chaves também podem serem criados a partir de variáveis
const key = "title"
var book = {
    [key]:"Clean Code",
    author: "Roberts Martin",
    "number-of-pages": 464,//Modo também permitido (ou números), mas não recomendado
    language: "English",
    avaliable: true
}
console.log(book)

//Também é possível através de parâmetros por referência
const key1 = "title"
var book = {};
book.author = "Roberts Martin"
book.avaliable = true
book.language = "English"
book["number-of-pages"] = 464
book[key1] = "Clean Code"
console.log(book)

//Laço para percorrer e imprimir o objeto book
for (let key in book) {
    console.log(key+": "+book[key])
}