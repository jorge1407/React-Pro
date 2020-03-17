const express =  require("express")
const user = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// Creamos user.post ~ REGISTER
const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) =>{
    const today = new Date()
    const userData = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password,
    created: today
    }

    User.findOne({
        email: req.body.email
    })
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) =>{
                userData.password = hash
                User.create(userData)
                .then(user =>{
                    res.json({status: user.email + 'registrado'})
                })
                .catch(err =>{
                    res.send("error:" +err)
                })
            })
        }else{
            res.json({error: 'Usuario ya existe'})
        }
    })
    .catch(err =>{
        res.send("error: " + err)
    })
})

USERS.post('/login', (req, res) =>{
    User.findOne({
        email: req.body.email
    })
    .then(user =>{
        if(user){
            if(bcrypt.compareSync(req.body.password)){
                const payload = {
                 _id: user._id,
                 nombre:  user.nombre,
                 apellido: user.apellido,
                 email: user.email 
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.send(token)
            }else{
                res.json({error: "El usuario no existe"})
            }
        }else{
            res.json({error: "El usuario no existe"})
        }
    })
    .catch(err =>{
        res.send('error: '+ err)
    })
})

user.get('/perfil', (req,res) => {
    var decode = jwt.verify(req.header['autorizacion'], process. env.SECRET_KEY)

    User.findOne({
        _id: decode._id
    })
    .then(user =>{
        if(user){
            res.json(user)
        }else{
            res.send("El usuario no existe")
        }
    })
    .catch(err =>{
        res.send('error: ' + err)
    })
})

module.exports = users