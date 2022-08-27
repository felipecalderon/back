const Usuario = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const App = require("../service/appService");
const Pagos = require("../../utils/pago");

class ControllerAdm {
  constructor() {
    this.app = new App();
    this.pagos = new Pagos();
  }
  admLogged = async (req, res) => {
    // Primero buscamos si el correo coincide con la data en mongo
    let usernameExiste = await this.App.usernameExiste(req.body.email);
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
    // let alumnosTodos= await this.app.readTodos()

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
    // VER A UN ALUMNO EN PARTICULAR
    let usuarioBuscado = await this.app.buscarUsuario(req.body.email);

    // // VER FECHA DE PAGO:
    // let fechaDePago = await this.pagos.searchById(usuarioBuscado.IdDelPago);

    // // VER ID DE PAGO:
    let id = await this.pagos.searchID(usuarioBuscado.IdDelPago);


    // ACTUALIZAR UN PAGO:
    // ACA SE SELECCIONA EL POST A /paymentUpdate para
    // let editaPago = await this.pagos.update(id, req.body.pagoNuevo);
    try {
      res.status(200).json(usuarioBuscado);
    } catch (error) {
      res.status(401).json({
        error: "Error al obtener la actividad del alumnos",
      });
    }
  };

  paymentUpdate = async (req, res) => {
    // ACTUALIZACION DE PAGO DEL ALUMNOS
    // let todoslosPagos = await this.Pagos.read();

    // const idEJEMPLO = "63076e2e2664a336cf88c260";
    // let search = await this.Pagos.searchById(iidEJEMPLO);

    // let nuevoPago = await this.Pagos.create( req.body.fechaDePago)

    // let editaPago = await this.Pagos.update( id, req.body.fechaDePago)

    try {
      res.status(200).json({ usuarioBuscado, fechaDePago });
    } catch (error) {
      res.status(401).json({
        error: "Error al obtener la actividad del alumnos",
      });
    }
  };
}

module.exports = ControllerAdm;
