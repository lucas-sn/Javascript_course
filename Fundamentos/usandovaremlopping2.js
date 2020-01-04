const funcs = []

for (var i = 0; i <10; i++){
    funcs.push(function(){
        console.log(i)



    })
}

funcs[2]()
funcs[0]()

//note que pra todas as situações o valor retornado será 10