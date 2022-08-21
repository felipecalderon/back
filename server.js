console.clear();
const app = require("./rutas/login");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
require("dotenv").config();

URIMONGO = `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWR}@${process.env.MONGO_CLOUD}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
//llamando a mongoose
mongoose
  .connect(URIMONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conectado a mongo"))
  .catch((e) => console.log(e));

//Puert
app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});
