const mongoose = require("mongoose");

//Esquema del admin
/*
const adminSchema = new mongoose.Schema({
  nombre: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 100 },
});*/

// Esquema de alumno
const alumnoSchema = new mongoose.Schema({
  codigoAlumno: {
    type: mongoose.Types.ObjectId,
    ref: "Matricula",
  },
  actividades: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Actividad",
    },
  ],
});

// Esquema de admin
const actividadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  horarios: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Actividad",
    },
  ],
});

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
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    alumno: {
      type: alumnoSchema,
    },
    actividades: {
      type: actividadSchema,
    },
  },
  {
    collection: "users",
    timestamps: { createdAt: "created", updatedAt: "updated" },
  }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
const Alumno = mongoose.model("Alumno", alumnoSchema);
const Actividad = mongoose.model("Actividad", actividadSchema);

module.exports = (Usuario, Alumno, Actividad);

//Creando el modelo
//module.exports = mongoose.model("Admin", AdminSchema);
