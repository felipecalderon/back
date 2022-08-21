const Usuario = require("../modelos/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Controlador del login
exports.postIngreso = async (req, res) => {
  // Primero buscamos si el correo coincide con la data en mongo
  const usuarioExiste = await Usuario.findOne({ email: req.body.email });
  if (!usuarioExiste) {
    return res.status(400).json({
      error: "El correo " + req.body.email + " no se encuentra registrado",
    });
  }

  // Verificación de contraseña y creación de token si usuario esta correcto
  bcrypt.compare(
    req.body.password,
    usuarioExiste.password,

    function (error, bien) {
      // si ocurre un error con la comparación del form con la data de mongo se mostrara acá
      if (error) {
        res.status(400).json(error);
      }

      // si la clave del form es la misma que la hasheada en mongo se genera el token
      if (bien) {
        const token = jwt.sign(
          {
            id: usuarioExiste._id,
            nombre: usuarioExiste.name,
            //token expira en 5 minutos:
            exp: Math.floor(Date.now() / 1000) + 60 * 5,
          },
          //agregada variable de entorno
          process.env.TOKENSECRETO
        );

        // visualización del token
        res
          .status(200)
          .append("auth-token", token)
          .redirect(200, "/actividades");

        // callback con la respuesta negativa en caso que las claves no coincidan
      } else {
        return res.status(400).json({ error: "Clave no coincide" });
      }
    }
  );
};
