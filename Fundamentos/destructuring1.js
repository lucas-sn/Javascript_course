//desestruturando a partir de um objeto


const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC,22'
    }
}

// realizando o operador destructuring

const {nome, idade} = pessoa
console.log(nome,idade)

//criando novas variáveis a partir do objeto

const{nome: n, idade: i} = pessoa
console.log(n,i)

const{endereco: {logradouro, cep}} = pessoa
console.log(logradouro, cep)

