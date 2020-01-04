// Armarzenando uma funcao em uma variavel

const imprimirSoma = function (a,b){

    console.log(a +b)


    
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variável

const soma = (a,b) => {
    return a + b
}

//retorno implícito
//Quando temos uma função que possui uma única linha de código, os valores seguidos de arrow serão retornados
const subtracao = (a,b) => a -b


console.log(subtracao(2,3))


const imprimir2 = a => console.log(a)
imprimir2('Teste!!!')

