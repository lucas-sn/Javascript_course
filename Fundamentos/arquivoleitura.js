const fs = require('fs')

// Sincrono...
const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho,'utf-8')

console.log(conteudo)

//Assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//lendo diretorio
fs.readdir(__dirname, (err, arquivos) =>
{
    console.log('Conteudo da pasta ...')
    console.log(arquivos)
})