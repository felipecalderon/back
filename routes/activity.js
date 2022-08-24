const express = require("express");
const cors = require("cors");
const route = express.Router();

//Validadores (middlewares)
const validatoken = require("../middlewares/validatoken");

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//LISTAR ACTIVIDADES:
route.get(
  "/",
  validatoken.verificaToken,
  require("../controllers/activity").allActivity
);

// FILTRAR ACTIVIDADES:
route.get(
  "/:nombre",
  validatoken.verificaToken,
  require("../controllers/activity").singleActivity
);

//CREACION DE ACTIVIDAD
route.post(
  "/add",
  validatoken.verificaToken,
  require("../controllers/activity").createActivity
);

//ACTUALIZACION DE ACTIVIDAD
route.put(
  "/update",
  validatoken.verificaToken,
  require("../controllers/activity").updateActivity
);

//ELIMINA ACTIVIDAD
route.delete(
  "/delete",
  validatoken.verificaToken,
  require("../controllers/activity").deleteActivity
);
module.exports = route;
