//Sequencia de caracteres que especificam um padrão formal

//Expressão regular
var regExp = /john@gmail.com/ //object

//Método para validar se está ok
let resultado = regExp.test("john@gmail.com")
console.log(resultado)

//Diferente do caso acima, este traz mais detalhes
resultado = regExp.exec("john@gmail.com")
console.log(resultado)

//Metacaracteres
//. - Representa qualquer caracter
resultado = regExp.exec("john@gmailxcom")
console.log(resultado)
//Nesse caso funcionaria, pois o ., representa qualquer caracter

//Para que o ponto seja visto corretamente como um símbolo e não como um multicaracter, usamos a \
var regExp = /john@gmail\.com/
resultado = regExp.exec("john@gmail.com")
console.log(resultado)

//^ - Inicia com um determinado caractere
var regExp = /^john@gmail\.com/
resultado = regExp.test("john@gmail.com...")
console.log(resultado)

//$ - Termina com um determinado caractere
var regExp = /john@gmail\.com/
resultado = regExp.test("...john@gmail.com")
console.log(resultado)

//Grupos de caracteres
//[abc] - Aceita qualquer caractere dentro do grupo, nesse caso a, b e c
//[^abc] - Não aceita qualquer caractere dentro do grupo, nesse caso a, b ou c
//[0-9] - Aceita qualquer caractere entre 0 e 9
//[^0-9] - Não aceita qualquer caractere entre 0 e 9
var regExp = /[a-z][a-z]@[a-z][a-z]gmail\.com/ //Nesse caso aceita até 4 caracteres de a-z 
resultado = regExp.test("john@gmail.com")
console.log(resultado)

//Quantificadores
//{n} - Quantifica um número específico
//{n,} - Quantifica um número mínimo
//{n, m} - Quantifica um número mínimo e um número máximo
//? - Zero ou 1
//* - Zero ou mais
//+ - 1 ou mais
var regExp = /[a-z]{3,4}@gmail\.com/ //Nesse caso aceita entre 3 e 4 caracteres de a-z 
console.log(regExp.test("john@gmail.com"))
console.log(regExp.test("joe@gmail.com"))

var regExp = /[a-z]+@gmail\.com/ //Nesse caso aceita 1 ou + caracteres de a-z 
console.log(regExp.test("john@gmail.com"))

//Metacaracteres específicos
//\w - Representa o conjunto - [a-zA-Z0-9]
//\W - Representa o conjunto - [^a-zA-Z0-9]
//\d - Representa o conjunto - [0-9]
//\D - Representa o conjunto - [^0-9]
//\s - Representa um espaço em branco
//\S - Representa um não espaço em branco
//\n - Representa uma quebra de linha
//\t - Representa um tab

var regExp = /\w+\t@\w+\.\w{2,3}/ //Nesse caso aceita 1 ou + caracteres de a-z 
console.log(regExp.test("john   @gmail.com"))

//Grupos de captura - ()
var regExp = /\w+@\w+(\.\w{2,3})+$/ //Nesse caso aceita 2 ou 3 caracteres que terminam com .palavra 
console.log(regExp.test("john@gmail.com.br"))

var a = () => {}
var a = () => {}
var a = () => {}
var a = () => {}