//Dessa forma fica um pouco mais trabalhoso, pois, se reparar bem, as 3 funções sum que são chamados abaixo, tem que esperar 3 segundos para a resposta aparecer
function sum(a, b, callback){
    setTimeout(function(){
        callback(a+b)
    }, 1000)
}

sum(2, 2, function(a){
    sum(4, 4, function(b){
        sum(a, b, function(result){
            console.log(result)
        })
    })
})

//Uma forma de melhorar com promisses
function sum2(a, b){
    return new Promise(function (resolve, reject){
        //Caso não funcione, o método reject é chamado
        if(!a || !b) return reject('Invalid input')
        
        //... Senão, é executado normalmente com o resolve
        setTimeout(function(){
            resolve(a+b)
        }, 1000)
    })
}

//Catch serve para buscar o erro se o reject foi chamado na promisse
sum2(2, 2).then(function(a){
    sum2(4, 4).then(function(b){
        sum2(a, b).then(function(result){
            console.log(result)
        }).catch(function (e){
            console.log(e)
        })
    }).catch(function (e){
        console.log(e)
    })  
}).catch(function (e){
    console.log(e)
})

//Para melhorar o código acima, temos esses tratamentos
sum2(2, 2).then(function(a){
    return sum2(4, 4).then(function(b){
        return sum2(a, b).then(function(result){
            console.log(result)
        })
    })  
}).catch(function (e){
    console.log(e)
})