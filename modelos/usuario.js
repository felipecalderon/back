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

const Alumno = mongoose.model("Alumno", alumnoSchema);
const Actividad = mongoose.model("Actividad", actividadSchema);
const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = (Alumno, Actividad, Usuario);

//Creando el modelo
//module.exports = mongoose.model("Admin", AdminSchema);
