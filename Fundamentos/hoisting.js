/*em javascript, ao utilizar a chamada da variável com a palavra var, ela não necessariamente
precisa estar antes da funcao sobre a variável com a palavra var*/

console.log("a",a)
var a = 2
console.log("a seguida",a)

/* é o mesmo que escrever:
var a
console.log("a",a)
a = 2
console.log("a seguida",a)
*/

//no caso de utilizar let em vez de var, ocorre um erro no código.