//Generar la URl de manera mas sencilla
var express = require("express")
//Metodos de HTTP y permisos
var cors = require("cors")

var bodyParser = require("body-parser")
var app = express()
//Pquete en NodeJS para tranajar con MongoDB
var mongoose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
        })
)

const mongoURI = 'mongodb://localhost:27071/prueba'

mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(() => console.log("MongoDB conectado"))
.catch(err =>console.log(err))

var User = require('./routes/User')

app.use('/user', User)

app.listen(port, () =>{
    console.log("Servidor activo en el puerto: "+ port)
})