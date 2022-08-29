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
    //REGISTRO DE USUARIO--------------------------------------------------
    route.post(
      "/adduser",
      // QUITO VALIDETON TOKEN POR QUE NO PODIA AGREGAR---> PREGUNTAR A FELIPE
      // validatoken.verificaToken,
      require("../src/controllers/register").postRegistro
    );
    //LOGIN DE USUARIO-----------------------------------------------------
    route.post("/login", require("../src/controllers/login").postIngreso);

    
    // -----------------------------------------------------
    // -----------------------------------------------------
    //ADMINISTRADOR LOGEADO-----------------------------------------------------
    
    
    route.post("/admLogged", this.controler.admLogged);
    route.get("/alumns", this.controler.getAlumns);
    route.post("/alumn", this.controler.postAlumn);
    route.post("/paymentUpdate", this.controler.paymentUpdate);


    // -----------------------------------------------------
    // -----------------------------------------------------
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
    //PAGINA NO ENCONTRADA-------------------------------------------------------
    route.get("*", (req, res) => {
      res.status(404).render("error", {});
    });

    return route;
  }
}

module.exports = Routes;
