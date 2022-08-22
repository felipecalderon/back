const app = require("./rutas/login");
const PORT = process.env.PORT || 3000;
const Factory = require("./utils/factory");

const DBSChosen = process.argv[2] || "mongo";
const DBS = Factory.getInstance(DBSChosen);
DBS.connection(DBSChosen);
//Puerto
app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});
