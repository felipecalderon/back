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
  .then(() =>
    console.log(
      `Usando la BD "${process.env.MONGO_DB}" en MongoDB... ¡CONECTADO!`
    )
  )
  .catch((e) => console.log(e));

//Puerto
app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});
