const Usuario = require("../../models/user");


class App {
  constructor() {}
  // este metodo es usado por /Login para buscar coincidencias en MONGO
  usernameExiste = async (data) => {
    try {
      // Primero buscamos si el correo coincide con la data en mongo
      const usernameExiste = await Usuario.findOne({
        $or: [{ email: data }, { username: data }],
      });
      return usernameExiste;
    } catch (error) {
      console.log("hubo un error");
      console.log(error);
    }
  };

  buscarUsuario = async (data) => {
    try {
   
      // Primero buscamos si el correo coincide con la data en mongo
      const usernameExiste = await Usuario.findOne({
        $or: [{ email: data }, { username: data }],
      });
      return usernameExiste;
    } catch (error) {
      console.log("hubo un error");
      console.log(error);
    }
  };

  readTodos = async () => {
    const todos = await Usuario.find({});
    return todos;
  };

  async updatePagos(nombre, fechaNueva) {
    const pagos = await Usuario.updateOne(
      { nombre: nombre },
      { $set: { fechaDePago: fechaNueva } }
    );
    return pagos;
  }
}

module.exports = App;
