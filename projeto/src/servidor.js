//COnfiguração do Express para configuração ao servidor web
const porta = 3003
const express = require('express')
const app = express()


app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})



app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco:123.45}) //Converter para JSON
})

app.listen(porta, () =>{
    console.log(`Servidor utilizando na porta ${porta}.`)
})