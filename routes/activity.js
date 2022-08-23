const express = require("express");
const cors = require("cors");
const route = express.Router();

//Validadores (middlewares)
const validatoken = require("../middlewares/validatoken");

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//CREACION DE ACTIVIDAD
route.post(
  "/addactivity",
  validatoken.verificaToken,
  require("../controllers/activity").postActividad
);

//RUTAS PROTEGIDAS CON TOKEN:
route.get(
  "/activities",
  validatoken.verificaToken,
  require("../controllers/activity").postActividades
);

module.exports = route;
