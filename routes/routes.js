const express = require("express");
const route = express();
const cors = require("cors");

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//Validadores (middlewares)
const validatoken = require("../middlewares/validatoken");

const controler = require("../src/controllers/admLogged");

class Routes {
  constructor() {
    this.controler = new controler();
  }
  start() {
    // HOME (Pagina principal)---------------------------------------------
    route.get("/", require("../src/controllers/home").gethome);

    //LOGIN DE USUARIO-----------------------------------------------------
    route.post("/login", require("../src/controllers/login").postIngreso);

    //REGISTRO DE USUARIO--------------------------------------------------
    route.post(
      "/register",
      validatoken.verificaToken,
      require("../src/controllers/register").postRegistro
    );

    //LISTAR USUARIOS:---------------------------------------------------
    route.get("/users", 
    validatoken.verificaToken,this.controler.getAlumns);

    //BUSCAR USUARIO:----------------------------------------------------
    route.post("/user",
    validatoken.verificaToken, this.controler.postAlumn);

    //BUSCAR USUARIO V2.1:----------------------------------------------------
    route.get("/user/:id", this.controler.getAlumnsParams);

    //ACTUALIZAR PAGO DE UN ALUMNO:--------------------------------------
    route.put("/paymentUpdate", this.controler.paymentUpdate);

    // -----------------------------------------------------
    // -----------------------------------------------------
    // route.get(
    //   "/getusers",
    //   // validatoken.verificaToken,
    //   require("../src/controllers/users").getusers
    // );
    // route.get(
    //   "/:id",
    //   // validatoken.verificaToken,
    //   require("../src/controllers/users").getusersParams
    // );

    // route.put(
    //   "/update",
    //   validatoken.verificaToken,
    //   require("../src/controllers/users").updateUsers
    // );

    //LISTAR ACTIVIDADES:---------------------------------------------------
    route.get(
      "/activity",
      validatoken.verificaToken,
      require("../src/controllers/activity").allActivity
    );
    // FILTRAR ACTIVIDADES:-------------------------------------------------
    route.get(
      "/activity/:nombre",
      validatoken.verificaToken,
      require("../src/controllers/activity").singleActivity
    );
    //CREACION DE ACTIVIDAD--------------------------------------------------
    route.post(
      "/activity/add",
      validatoken.verificaToken,
      require("../src/controllers/activity").createActivity
    );
    //ACTUALIZACION DE ACTIVIDAD---------------------------------------------
    route.put(
      "/activity/update",
      validatoken.verificaToken,
      require("../src/controllers/activity").updateActivity
    );
    //ELIMINA ACTIVIDAD-------------------------------------------------------
    route.delete(
      "/activity/delete",
      validatoken.verificaToken,
      require("../src/controllers/activity").deleteActivity
    );
    //RUTA 404
    route.get("*", function (req, res) {
      res.status(404).json({ error: " 404 ruta no encontrada" });
    });

    return route;
  }
}

module.exports = Routes;
