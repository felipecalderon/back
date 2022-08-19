const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  firstName: {type: String, required: true, max: 100},
  lastName: {type: String, required: true, max: 100},
  adress: {type: String, required: true, max: 100},
  age: {type: String, required: true, max: 100},
  phonenumber: {type: String, required: true, max: 100},
  email: {type: String, required: true, max: 100},
  username: {type: String, required: true, max: 100},
  password: {type: String, required: true, max: 100}
});

//Creando el modelo
const loginMong = mongoose.model('Usuario', Schema)
module.exports = loginMong

