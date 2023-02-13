// Importando o packages
const express = require('express')
const cors = require('cors') 

// instanciando o servidor
const app = express()


// app.use(cors())

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json())

// importando os controllers
const usuarioController = require('./controllers/usuario-controller.js')
const tarefaController = require('./controllers/tarefa-controller.js')

usuarioController.rotas(app)
tarefaController.rotas(app)

module.exports = app
