const express = require("express");
const route = express.Router();

//Rutas de Controladores
const inicio = require("../src/inicio");
const ingreso = require("../src/ingreso");
const crearUsuario = require("../src/crearUsuario");
const crearActividad = require("../src/crearActividad");
const actividades = require("../src/actividades");
const validatoken = require("../middlewares/validatoken");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------------
// root/pagina principal
route.get("/", inicio.home);

//RUTA PROTEGIDA CON TOKEN
route.get(
  "/actividades",
  validatoken.verificaToken,
  actividades.postActividades
);

//LOGIN DE USUARIO
route.post("/ingreso", ingreso.postIngreso);

//REGISTRO DE USUARIO
route.post("/registroalumno", crearUsuario.postRegistro);

//CREACION DE ACTIVIDAD
route.post("/crearactividad", crearActividad.postRegistro);

module.exports = route;
