const mongoose = require("mongoose");

//¿Como funciona el esquema?
const Schema = new mongoose.Schema({
  activity: { type: String, required: true, max: 100 },
  name: { type: String, required: true, max: 100 },
  times: { type: String, required: true, max: 100 },
});

//Creando el modelo
const loginMong = mongoose.model("Actividad", Schema);
module.exports = loginMong;
