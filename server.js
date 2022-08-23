
const app = require("./rutas/login");
const PORT = process.env.PORT || 3000;
const Factory = require("./utils/factory");
const mongoose = require('mongoose')
URIMONGO = `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWR}@${process.env.MONGO_CLOUD}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
//llamando a mongoose
mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conectado a mongo"))
  .catch((e) => console.log(e));


//Puerto
app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});
