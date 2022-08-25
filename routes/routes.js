const express = require("express");
const route = express();
const cors = require("cors");

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//Validadores (middlewares)
const validatoken = require("../middlewares/validatoken");

class Routes {
  constructor() {
    // this.controler = new controler();
  }
    start() {
      // HOME (Pagina principal)---------------------------------------------
      route.get("/", require("../src/controllers/home").gethome);
      //REGISTRO DE USUARIO--------------------------------------------------
      route.post(
        "/adduser",
        validatoken.verificaToken,
        require("../src/controllers/register").postRegistro
      );
      //LOGIN DE USUARIO-----------------------------------------------------
      route.post("/login", require("../src/controllers/login").postIngreso);
      route.get("*", (req, res) => {
        res.status(404).render("error", {});
      });
      //LISTAR ACTIVIDADES:---------------------------------------------------
      route.get(
        "/",
        validatoken.verificaToken,
        require("../src/controllers/activity").allActivity
      );
      // FILTRAR ACTIVIDADES:-------------------------------------------------
      route.get(
        "/:nombre",
        validatoken.verificaToken,
        require("../src/controllers/activity").singleActivity
      );
      //CREACION DE ACTIVIDAD--------------------------------------------------
      route.post(
        "/add",
        validatoken.verificaToken,
        require("../src/controllers/activity").createActivity
      );
      //ACTUALIZACION DE ACTIVIDAD---------------------------------------------
      route.put(
        "/update",
        validatoken.verificaToken,
        require("../src/controllers/activity").updateActivity
      );
      //ELIMINA ACTIVIDAD-------------------------------------------------------
      route.delete(
        "/delete",
        validatoken.verificaToken,
        require("../src/controllers/activity").deleteActivity
      );

      return route;
    }
}

module.exports = Routes;
