console.clear();
require("dotenv").config();
const app = require("./rutas/routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

//URIMONGO = `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWR}@${process.env.MONGO_CLOUD}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

<<<<<<< HEAD
//Puert
=======
const DBSChosen = process.argv[2] || "mongo";
const DBS = Factory.getInstance(DBSChosen);
DBS.connection(DBSChosen);
//Puerto
>>>>>>> 7cc19ea2787f50d313b4087cef0fd98790f05947
app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});
