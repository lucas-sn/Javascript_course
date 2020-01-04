// importância de evitar variáveis globais

var numero = 1

{
    var numero = 2
    console.log("dentro;",numero)

}

console.log("Fora: ", numero)

//note que ocorreu uma sobreposição de valores.