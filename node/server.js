const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Fazer require de toda uma pasta e não apenas de um arquivo em específico.

//iniciando o App
const app = express();

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})


requireDir("./src/models")

const Product = mongoose.model('Product')

app.get('/', (req,res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with react',
        url: "github.com/facebook/react-native"})

    return res.send('Hello Mundo')
})

app.listen(3001)