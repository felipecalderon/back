const express = require("express");
const cors = require("cors");
const route = express.Router();

route.use(cors());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

// HOME (Pagina principal)
route.get("/", require("../controllers/home").gethome);

// rutas pendientes
// addpayments

module.exports = route;
