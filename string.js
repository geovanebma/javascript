//Pode declarar de 3 formas simples:
//aspas simples
var frase = 'aspas simples'

//asplas duplas
var frase = "aspas duplas"

//acento grave
var frase = `acento grave`

//declarando com forma construtora - Não recomendável pois leva mais tempo
console.log(new String('JavaScript'))

//Caso queira colocar aspas duplas dentro de uma string feita com aspas duplas, 
// é necessário colocar barra invertida antes de cada aspa \

//caracteres de controle
//\b - Espaço
var frase = 'frase aqui 1 \b'
console.log(frase)

//\f - Form Feed
var frase = 'frase aqui 1 \f'
console.log(frase)

//\n - Nova linha
var frase = 'frase aqui 1 \n'
console.log(frase)

//\r - Retorno Carriege
var frase = 'frase aqui 1 \r'
console.log(frase)

//\t - Tabulador Horizontal
var frase = 'frase aqui 1 \t'
console.log(frase)

//\v - Tabulador vertical
var frase = 'frase aqui 1 \v'
console.log(frase)

//Code point
var frase = '\u0030 \u0030 \u0030'
console.log(frase)

//Template Literal
let host = "localhost"
let port = "3000"
let resource = "users"
let url = "https://"+host+":"+port+"/"+resource
console.log(url)

url = `https://${host}:${port}/${resource}`
console.log(url)

//Não precisa por o +
let mesesDoAno = "Jan\
Fev\
Mar\
Abr\
Mai\
Jun\
Jul\
Ago\
Set\
Out\
Nov\
Dez"

//Não precisa por \
let mesesDoAno = `Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Set
Out
Nov
Dez`