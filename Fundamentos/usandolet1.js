// Let sempre tem escopo de bloco



console.log("Executando dois lets")

let numero = 1
{
    let numero = 2
    console.log("dentro >", numero)
}

console.log("fora :", numero)

// variaveis definidas com palavra definida var tem escopo global e de funcao
//variaveis definidas com palavra definida let tem escopo gloval, de funcao e de bloco.