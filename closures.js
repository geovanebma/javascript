function fn1(){
    return function (){
        const v1 = 10
        console.log(v1)
    }
}
const fn2 = fn1()
fn2()
//Até aqui tudo bem, mas, e se o console fosse enviado para cima?

function fn3(){
    const v1 = 10
    return function (){
        console.log(v1)
    }
}
const fn4 = fn3()
fn4()
