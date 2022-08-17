const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 100 },
});

//Creando el modelo
module.exports = mongoose.model("Usuario", UsuarioSchema);
