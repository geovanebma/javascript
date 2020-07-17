//Alguns métodos
var frase_dita = "JavaScript"
//length - retorna o tamanho da string
console.log(frase_dita.length)

//indexOf - retorna a primeira posição encontrada do caracter informado
console.log(frase_dita.indexOf('a'))

//lastIndexOf - retorna a última posição encontrada do caracter informado
console.log(frase_dita.lastIndexOf('a'))

//toUpperCase - Converte a string em letras maiúsculas
console.log(frase_dita.toUpperCase())

//toLowerCase - Converte a string em letras minusculas
console.log(frase_dita.toLowerCase())

//charAt - Retorna o caracter na posição passada por parâmetro
console.log(frase_dita.charAt(2))

//charCodeAt - Retorna o código na posição passada por parâmetro
console.log(frase_dita.charCodeAt(2))

//fromCharCode - Retorna um caractere com base no código passado por parâmetro
console.log(frase_dita.fromCharCode(97))

//includes - Retorna verdadeiro se a string contém a string passada por parâmetro
console.log(frase_dita.includes('java'))

//startsWich - Retorna verdadeiro se no inicio da string contém a string passada por parâmetro
console.log(frase_dita.startsWich('java'))

//endsWith - Retorna verdadeiro se no final da string contém a string passada por parâmetro
console.log(frase_dita.endsWith('script'))

//localeCompare - Retorna -1 se a string passada for maior, 0 se for igual e 1 se for menor
console.log(frase_dita.localeCompare('java'))
console.log(frase_dita.localeCompare('typescript'))

//Para expressões regulares
//match - retorna partes da string
console.log(frase_dita.match(/\a/g))
//search - retorna a primeira posição na RegExp
console.log(frase_dita.search(/a/))
//replace - retorna a nova string resultante da substituição da string
console.log(frase_dita.replace('java', 'ecma'))
console.log(frase_dita.replace('/a/g', 4))

//slice - retorna parte da string
console.log(frase_dita.slice(0, 4))
//split - retorna um array dividindo a string por algum caracter
console.log(frase_dita.split("s"))
//substring - sobrescreve
console.log(frase_dita.substring(0, 4))

//concat - junta duas strings em uma só
console.log(frase_dita.concat(" 6"))
//padStart - completa com o total de caracteres com a palavra mencionada no inicio
console.log(frase_dita.padStart(10, "Java"))
//padEnd - completa com o total de caracteres com a palavra mencionada no final
console.log(frase_dita.padEnd(10, "Java"))
//repeat - repete a string
console.log(frase_dita.repeat(2))
//trim - remove os espaçamentos
console.log(frase_dita.trim())
//trimLeft - remove os espaçamentos a esquerda
console.log(frase_dita.trimLeft())
//trimRight - remove os espaçamentos a direita
console.log(frase_dita.trimRight())