const mongoose = require("mongoose");

// Esquema de pagos
const pagosSchema = new mongoose.Schema(
  {
    idUser: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    monto: {
      type: String,
    },
    estado: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "fechaDePago", updatedAt: "updated" },
  }
);

module.exports = mongoose.model("Pagos", pagosSchema);
