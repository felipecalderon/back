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
app.use("/activity", require("./routes/activity"));

//Acceso usuario
app.use("/auth", require("./routes/auth"));

//Listado usuarios
app.use("/users", require("./routes/users"));

//RUTA 404
app.get("*", function (req, res) {
  res.status(404).json({ error: "ruta no encontrada" });
});

//---------------------------------Activacion server

//Servidor a la escucha
app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});
