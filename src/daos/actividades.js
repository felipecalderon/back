const Contenedor = require("../../container/containerMongo/container");
const Schema = require("../modelos/actividades");

class ActividadesDao extends Contenedor {
  constructor() {
    super(Schema);
    this.model = Schema;
  }
}

module.exports = ActividadesDao;