const express = require('express');
const app = express()

require("dotenv").config();

//---------------------------------Conexion a base de datos

const Factory = require("./utils/factory");
const DBSChosen = process.argv[2] || "mongo";
const DBS = Factory.getInstance(DBSChosen);
DBS.connection(DBSChosen);

const Routes = require('./routes/routes')
const PORT = process.env.PORT || 3000;

//Home
// app.use(require("./routes/home"));
//Acceso usuario
// app.use("/auth", require("./routes/auth"));
//Listado usuarios
// app.use("/users", require("./routes/users"));

const routes = new Routes()
app.use(routes.start())

// //RUTA 404
// app.get("*", function (req, res) {
//   res.status(404).json({ error: "ruta no encontrada" });
// });

const SERVER = app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});

SERVER.on("Error", (error) => console.log("error en servidor ${error}"));