const express = require("express");
const cors = require("cors");
const route = express.Router();

//Validadores (middlewares)
const validatoken = require("../middlewares/validatoken");

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------------
// root/pagina principal
route.get("/", require("../src/inicio").home);

//LOGIN DE USUARIO
route.post("/ingreso", require("../src/ingreso").postIngreso);

//RUTAS PROTEGIDAS CON TOKEN:
route.get(
  "/actividades",
  validatoken.verificaToken,
  require("../src/actividades").postActividades
);

//REGISTRO DE USUARIO
route.post(
  "/crearusuario",
  validatoken.verificaToken,
  require("../src/crearUsuario").postRegistro
);

//CREACION DE ACTIVIDAD
route.post(
  "/crearactividad",
  validatoken.verificaToken,
  require("../src/crearActividad").postActividad
);

module.exports = route;
