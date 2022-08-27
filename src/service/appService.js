const Usuario = require("../../models/user");
const pagos = require("../../models/payment");
const mongoose = require("mongoose");

class App {
  constructor() {}

  usernameExiste = async (data) => {
    try {
      console.log("buscando");
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
      console.log("buscando");
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
    // console.log(todos);

    return todos;
  };
}

module.exports = App;
