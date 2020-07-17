//Métodos fundamentais de matemática

//Globais
console.log(Math.E)//Numero de euler
console.log(Math.LN10)//Logarítmo natural de 10
console.log(Math.LN2)//Logarítmo natural de 2
console.log(Math.LOG10E)//Logarítmo de E na base 10
console.log(Math.LOG2E)//Logarítmo de E na base 2
console.log(Math.PI)//Pí
console.log(Math.SQRT1_2)//Raíz Quadrada de 1 sobre 2
console.log(Math.SQRT2)//Raíz quadrada de 2

//=================================================

//Operações
//Converte o sinal do número para positivo
console.log(Math.abs(-5))

//Arredonda o número para cima
console.log(Math.ceil(5.6))

//Arredonda o número para baixo
console.log(Math.floor(5.6))

//Arredonda o número para cima se for maior igual que 5 ou para baixo se for menor que 5
console.log(Math.round(5.6))

//Retorna 1 se o número for positivo e -1 se for negativo
console.log(Math.sign(5))

//Elimina a parte decimal do número
console.log(Math.trunc(5.668))

//=================================================

//Operações aritméticas trigonométricas
//Retorna a raíz cúbica do número
console.log(Math.cbrt(8))

//Retorna E elevado a um expoente
console.log(Math.exp(1))

//Retorna a raíz quadrada dos quadrados dos números
console.log(Math.hypot(3, 4))

//Retorna o número elevado a um determinado expoente
console.log(Math.log(1))

//Retorna a raiz quadrada do número
console.log(Math.sqrt(27))

//Retorna a tangente de um ângulo
console.log(Math.tan(Math.PI/4))

//Retorna o coseno de um ângulo
console.log(Math.cos(Math.PI/3))

//Retorna o seno de um ângulo
console.log(Math.sin(Math.PI/2))

//Retorna a uma conta elevada
console.log(Math.pow(3, 3))

//==================================================
//Outros

//Retorna o menor valor passado por parâmetro
console.log(Math.min([10, 9, 14]))

//Retorna o maior valor passado por parâmetro
console.log(Math.max([10, 9, 14]))

//Retorna um número randômico entre 0 e 1, não incluindo o 1
console.log(Math.random())

//Retorna um número randômico entre 0 e 1000, não incluindo o 1000
console.log(Math.random()*1000)