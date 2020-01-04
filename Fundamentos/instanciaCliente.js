const contadorA = require('./instanciaunica.js')

const contadorB = require('./instanciaunica.js')

//Note que para instanciar a função inc deve-se utilizar parenteses ao final do require
const contadorC = require('./instancianova.js')()

const contadorD = require('./instancianova.js')()



contadorA.inc()
contadorA.inc()

/* O valor retornado pelo node para o contadorB será 
o mesmo que para o contador A uma vez que o node faz caching dos módulos exportados*/
console.log(contadorB)

/* Uma forma de driblar isso é usar a função arrow*/

contadorC.inc()
contadorC.inc()
console.log('Valor do contador D :',contadorD.valor)
console.log('Valor do contador C :',contadorC.valor)