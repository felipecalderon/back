const mongoose = require("mongoose");

// Esquema de Usuario
const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    // FECHA DE PAGO RECIBE EL ID DEL MODELO PAYMENT
    IdDelPago: { type: String, required: true },
  },
  {
    collection: "users",
    timestamps: { createdAt: "created", updatedAt: "updated" },
  }
);

module.exports = mongoose.model("Usuario", usuarioSchema);
