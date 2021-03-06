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
module.exports = users