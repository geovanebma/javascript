let condition = true

if(condition){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

// Valores convertidos para falso
console.log(!!0)
console.log(!!NaN)
console.log(!!"")
console.log(!!false)
console.log(!!undefined)
console.log(!!null)

// Valores convertidos para verdadeiro
console.log(!!-10)
console.log(!!"JavaScript")
console.log(!!/JavaScript/)
console.log(!!{})
console.log(!![])
console.log(!!new Date())
console.log(!!function () {})

//Operadores Booleanos
//Comparação
console.log(1 == 2)
console.log(10 === 10)
console.log('a' != 'b')
console.log(3 !== 2)
console.log(6 > 7)
console.log(5 >= 5)
console.log('z' < 'x')
console.log('c' <= 'c')

console.log(0 === '')
console.log(0 === '0')
console.log(false === undefined)
console.log(false === null)
console.log(null === undefined)
console.log(1 === true)
console.log(0 === false)
console.log(0 === '/n')

//Operadores lógicos
console.log(0 || 2)
console.log(1 || 2)
console.log(0 && 2)
console.log(1 && 2)

//Operador ternário
console.log((10)?'good':'bad')
console.log((0)?'good':'bad')