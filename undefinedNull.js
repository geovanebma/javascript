//Diferença e conhecimento de undefined e null
//undefined - é retornado caso a chave não seja encontrada
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    avaliable: true,
    chapters: null
}

console.log(book.publisher)//Ausencia de chave

//Operação in - verifica se tem uma chave específica em book
console.log("title" in book)//true

//null - é retornado caso o valor não seja encontrado
console.log(book.chapters)

//delete - deleta uma propriedade
delete book.chapters
console.log("chapters" in book)//false