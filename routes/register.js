const express = require("express");
const cors = require("cors");
const route = express.Router();

//Validadores (middlewares)
const validatoken = require("../middlewares/validatoken");

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//REGISTRO DE USUARIO
route.post(
  "/adduser",
  validatoken.verificaToken,
  require("../src/register").postRegistro
);

module.exports = route;
