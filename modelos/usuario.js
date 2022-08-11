//llamando a mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//¿Como funciona el esquema?
const usuarioEsquema = new Schema({
    nombreUsuario:  String, 
    claveUsuario: String,
    tipoUsuario:   String,
});

//Creando el modelo
const loginMong = mongoose.model('Usuario', usuarioEsquema)
module.exports = loginMong
