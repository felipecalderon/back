const express = require("express");
const cors = require("cors");
const route = express.Router();

//Validadores (middlewares)
const validatoken = require("../middlewares/validatoken");

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get(
  "/",
  validatoken.verificaToken,
  require("../controllers/users").getusers
);

route.get(
  "/:id",
  validatoken.verificaToken,
  require("../controllers/users").getusersParams
);

route.put(
  "/update",
  validatoken.verificaToken,
  require("../controllers/users").updateUsers
);

module.exports = route;
