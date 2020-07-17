//Como se faz as contas básicas?

let adicao = 2+2
let subtracao = 2-2
let multiplicacao = 2*2
let divisao = 2/2
let resto_da_divisao = 3%2

console.log(adicao, subtracao, multiplicacao, subtracao, divisao, resto_da_divisao)

//===========================================
//Incremento e decremento
let numero = 1
console.log(numero++)
console.log(++numero)

numero = numero + 1
console.log(numero)

numero -= 1
console.log(numero)

//============================================
//Operadores binários
//|, &, ^, ~, <<, >>, >>>
//Para ajudar melhor, faça as contas utilizando:
//(formula).toString(2).padStart(32, 0)

//exemplo or |
console.log(4 | 3)//7 - pois converte para binário e na soma deles, tem-se 111 = 7

//exemplo and &
console.log(3 & 1)//1 - pois converte para binário e na soma deles, tem-se 1 = 1

//exemplo xor ^
console.log(4 ^ 3)//7

//exemplo not ~
console.log(~2)//-3

//exemplo deslocar <<
console.log(4 << 2)//16

//exemplo deslocar >>
console.log(128 >> 1)//64

//exemplo rotação >>>
console.log(-2 >>> 1)//2147483647

//=============================================