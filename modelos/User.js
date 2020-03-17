const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    nombre: {
        type: String
    },
    apellido:{
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fecha:{
        type:Date,
        default: Date.now
    }
})
module.exports = User = mongoose.model('user', UserSchema)