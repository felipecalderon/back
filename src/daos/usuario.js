const Contenedor = require("../../container/container");
const Schema = require("../modelos/usuario");

class UsuarioDao extends Contenedor {
  constructor() {
    super(Schema);
    this.model = Schema;
  }
}

module.exports = UsuarioDao;
