const express = require("express");
const cors = require("cors");

const route = express();

//Validadores (middlewares)
const validatoken = require("../middlewares/validatoken");

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

// HOME (Pagina principal)
route.get("/", require("../src/controllers/home").gethome);

// const controler = require("../src/controllers/home")
// try {
//     route.get("/", controler);
route.get("/", (req,res)=>{

    res.send("hola")
});



// rutas pendientes
// addpayments

module.exports = route;
