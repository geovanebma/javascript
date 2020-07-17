//Convertendo alguns números

//Converte o número inserido na string em sua forma numérica
console.log(Number("10"))//10
console.log(Number("9.9"))//9.9
console.log(Number("0xFF"))//255
console.log(Number("0b10"))//2
console.log(Number("0o10"))//8
console.log(Number())//0
console.log(Number("JavaScript"))//NaN

//======================================================
//O js verifica e converte a string para decimal
console.log(~~"10")//10
console.log(+"10")//10
console.log("10"-0)//10
console.log("10"*1)//10
console.log("10"/1)//10
//exceção
console.log("10"+0)//100

//======================================================
//parseInt e parseFloat

//parseInt - converte os valores para inteiros
//O primeiro valor é o que você deseja alterar e o segundo é para qual conjunto decimal (hexa, octal, binario...)
parseInt("10", 10)//10
parseInt("9.9", 10)//9
parseInt("A", 16)//10
parseInt("11", 2)//3
parseInt("010", 8)//8

//parseFloat - converte os valores para sua forma decimal
parseFloat("10", 10)//10
parseFloat("9.9", 10)//9.9
parseFloat("2.5", 16)//2.5
parseFloat("0xFF", 2)//0
parseFloat("0b10", 8)//0
//======================================================