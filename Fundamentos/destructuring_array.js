//destructuring um array

const [a] = [10]
console.log(a)

const[n1, ,n3,   ,n5, n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[1,8,8],[9,1,3]]
console.log(nota)

let nota2 = nota
nota2 = 222

console.log(nota2)