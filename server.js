//---------------------------------Config Inicial
console.clear();
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//Conexion a mongodb
require("./dbconnection");

//---------------------------------Rutas
//Home
app.use(require("./routes/home"));

//Actividades
app.use(require("./routes/activity"));

//Acceso usuario
app.use(require("./routes/login"));

//Registro de usuario
app.use(require("./routes/login"));

//---------------------------------Activacion server

//Servidor a la escucha
app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});
