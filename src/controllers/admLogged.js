const Usuario = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");
moment.locale("es");

const App = require("../service/appService");


class ControllerAdm {
  constructor() {
    this.app = new App();
   
  }
  admLogged = async (req, res) => {
    // Primero buscamos si el correo coincide con la data en mongo
    
    let usernameExiste = await this.app.usernameExiste(req.body.email);
    bcrypt.compare(
      req.body.password,
      usernameExiste.password,

      function (error, bien) {
        // si ocurre un error con la comparación del form con la data de mongo se mostrara acá
        if (error) {
          res.status(401).json(error);
        }

        // si la clave del form es la misma que la hasheada en mongo se genera el token
        if (bien) {
          const token = jwt.sign(
            {
              id: usernameExiste._id,
              email: usernameExiste.email,
              nombre: usernameExiste.nombre,
              //token expira en 4 horas:
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4,
            },
            //agregada variable de entorno
            process.env.TOKENSECRETO
          );

          // envío del token al header
          res.status(200).append("auth-token", token).json({ token });

          // callback con la respuesta negativa en caso que las claves no coincidan
        } else {
          return res.status(401).json({ error: "Clave no coincide" });
        }
      }
    );
  };

  getAlumns = async (req, res) => {
    // LEER TODOS LOS USUARIOS
    let alumnosTodos = await this.app.readTodos();

    // ACA SE SELECCIONA EL POST A REALIZAR:
    // VER UN ALUMNO EN PARTICULAR-> POST  /alumn

    try {
      res.status(200).json(alumnosTodos);
    } catch (error) {
      res.status(401).json({
        error: "Error al obtener la actividad del alumnos",
      });
    }
  };

  postAlumn = async (req, res) => {
    // ALUMNO BUSCADO:
    let usuarioBuscado = await this.app.buscarUsuario(req.body.email);
    
    let fechaDePago = usuarioBuscado.fechaDePago
    console.log(fechaDePago);
    try {
      res.status(200).json({usuarioBuscado, fechaDePago});
    } catch (error) {
      res.status(401).json({
        error: "Error: alumno no encontrado",
      });
    }
  };

  paymentUpdate = async (req, res) => {
    console.log(req.body.email);
    let usuarioBuscado = await this.app.buscarUsuario(req.body.email);
    let pagoActualizado = await this.app.updatePagos(
      usuarioBuscado.nombre,
      moment().format("dddd DD MM YYYY hh:mm:ss")
    );

    try {
      res.status(200).json({usuarioBuscado, pagoActualizado });
    } catch (error) {
      res.status(401).json({
        error: "Error al obtener la actividad del alumnos",
      });
    }
  };
}

module.exports = ControllerAdm;
