const mongoose = require("mongoose");
// Esquema de actividad
const actividadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  horarios: [
    {
      dia: {
        type: String,
        required: true,
        index: true,
      },
      hora: {
        type: String,
        required: true,
        index: true,
      },
    },
  ],
});
module.exports = mongoose.model("Actividad", actividadSchema);
