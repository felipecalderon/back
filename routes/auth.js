const express = require("express");
const cors = require("cors");
const route = express.Router();

//Validadores (middlewares)
const validatoken = require("../middlewares/validatoken");

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//LOGIN DE USUARIO
route.post("/login", require("../controllers/login").postIngreso);

//REGISTRO DE USUARIO
route.post(
  "/register",
  validatoken.verificaToken,
  require("../controllers/register").postRegistro
);
module.exports = route;
