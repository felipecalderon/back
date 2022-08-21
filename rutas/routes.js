const express = require("express");
const route = express.Router();

//Rutas de Controladores
const inicio = require("../src/inicio");
const ingreso = require("../src/ingreso");
const registro = require("../src/registro");
const actividades = require("../src/actividades");
const validatoken = require("../middlewares/validatoken");

//route.use(express.json());
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

// root/pagina principal
route.get("/", inicio.home);

module.exports = route;
