const express = require("express");
const route = express.Router();

//Rutas de Controladores
const ingreso = require("../src/controllers/ingreso");
const registro = require("../src/controllers/registro");
const actividades = require("../src/controllers/actividades");
const validatoken = require("../middlewares/validatoken");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------------
//RUTA PROTEGIDA CON TOKEN
route.get(
  "/actividades",
  validatoken.verificaToken,
  actividades.postActividades
);

//TEST LOGIN Y REGISTRO SIN PASSPORT
route.post("/ingreso", ingreso.postIngreso);
route.post("/registroalumno", registro.postRegistro);

module.exports = route;
