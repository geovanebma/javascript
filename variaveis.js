//A declaração de uma variável utilizando a palavra 'var'
//Faz com que ela possa ser declarada novamente ou seja pode repetir e colocar um novo valor
//Também não respeita os blocos
var pi = 3.141592
console.log(pi)

//=====================================================

//Ao utilizar 'let', a variável é declarada no escopo da função mas só é inicializada posteriormente
//Respeitando bloco
//Respeitando a retribuição
//Respeitando a ordem de linha
let pi2 = 3.141592

//Retribuição
pi2 = 3

//Não respeita se for declarada novamente
let pi2 = 3.14

//Bloco
if(true){
    let pi3 = 3.141592
}
console.log(pi3)

//=====================================================

//Ao utilizar 'const', diferente dos outros 2, não permite a retribuição
const pi4 = 3.141592
console.log(pi4)

//Retribuição aqui não funciona
pi4 = 3.14
console.log(pi4)

//=====================================================

//É recomendável que nunca declare variáveis sem const, let ou var, pois se não fizer isso, ela será considerada global
(function(){
    pi5 = 3.141592
}())
console.log(pi5)

//Formas educadas de criar variáveis
let nome;
let Nome;
let _nome;
let $nome;
let nome123;