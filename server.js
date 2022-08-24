const express = require('express')
const app = express()
const route = require('./routes/home')
const PORT = process.env.PORT || 3000;
const Factory = require("./utils/factory");

const DBSChosen = process.argv[2] || "mongo";
const DBS = Factory.getInstance(DBSChosen);
DBS.connection(DBSChosen);

app.use(route)
const SERVER = app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});

SERVER.on("Error", (error) => console.log("error en servidor ${error}"));