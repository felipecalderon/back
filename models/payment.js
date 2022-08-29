const mongoose = require("mongoose");

// Esquema de pagos
const pagosSchema = new mongoose.Schema(
  {
  },
  {
    collection: "pagos",
    timestamps: { createdAt: "fechaDePago", updatedAt: "updated" },
  }
);

module.exports = mongoose.model("Pagos", pagosSchema);
