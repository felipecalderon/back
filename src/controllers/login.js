const Usuario = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const App = require("../service/appService");
const app = new App();
//Controlador del login

exports.postIngreso = async (req, res) => {
  // Primero buscamos si el correo coincide con la data en mongo
  let usernameExiste = await app.usernameExiste(req.body.email ||req.body.username);

  if (!usernameExiste) {
    return res.status(401).json({
      error: "Usuario o correo incorrecto",
    });}

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
