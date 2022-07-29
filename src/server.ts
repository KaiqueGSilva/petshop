import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

import mainRoutes from './routes/index'

dotenv.config()

//Configurando o Servidor
const server = express()

//Configurando o Mustache
server.set('view engine','mustache')

//Diretorio que colocaremos nossos arquivos mustache
server.set('views',path.join(__dirname,'views'))

//TEMPLATE ENGINES DO MUSTACHE
server.engine('mustache',mustache())

//ACESSANDO A PASTA PUBLIC
server.use(express.static(path.join(__dirname,'../public')))

//IMPORTANDO AS ROTAS DO INDEX.TS
server.use(mainRoutes)

//PAGINA ERROR 404
server.use((req,res)=>{
    res.render('pages/404')
})

//HABILITANDO O SERVIDOR
server.listen(process.env.PORT)
