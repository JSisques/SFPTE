const express = require('express')
const app = express()
const server = require('http').Server(app)
const cors = require('cors')

// Utilizamos lo siguiente para recibir JSON y poder parsearlos en los metodos POST
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

// Servimos archivos estáticos en la carpeta public
app.use(express.static('public'))

//Rutas
app.use(require('./microservices/manage_photo/routes'))
//app.use(require('./microservices/upload_content/routes'))


// Iniciamos el servidor en el puerto 8080
server.listen(8080, function () {
  console.log('Servidor iniciado en http://localhost:8080')
})