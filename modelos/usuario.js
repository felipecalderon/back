const {MONGO_USR, MONGO_PWR,MONGO_DB,MONGO_URI,} = require('dotenv').config()
//llamando a mongoose
const mongoose = require('mongoose');


mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
})
.then(() => console.log('conectado a mongo'))
.catch(e => console.log(e))


//¿Como funciona el esquema?
const UsuarioSchema = new mongoose.Schema({
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    username: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100}
});

//Creando el modelo
const loginMong = mongoose.model('Usuario', UsuarioSchema)
module.exports = loginMong

