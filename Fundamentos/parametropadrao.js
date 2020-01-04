function soma (a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}
//Note que para o caso do argumento ser zero's, a zora será reportada erroneamente como 3.
console.log(soma(0,0,0))

//Estratégias para gerar valor padrão

function soma2(a,b,c) {
    a = a !== undefined ? a:1
    b = 1 in arguments ? b:1
    c = isNaN(c) ? 1:c
    return a + b + c

}

// valor padrao do ES2015
fuction soma3(a = 1,b=1,c=1){

    return a + b+ c
}