const Usuario = require("../modelos/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//Controlador del login
exports.postIngreso = async (req, res) => {
  
  // Primero buscamos si el correo coincide con la data en mongo
try{  let usernameExiste = await Usuario.findOne({
    $or: [{ email: req.body.email }, { username: req.body.email }],
  });

  if (!usernameExiste) {
    return res.status(401).json({
      error: "Usuario o correo incorrecto",
    });
  }}catch(error){
    console.log("EL ERROR ES");
    console.log(error);
  }

  // Verificación de contraseña y creación de token si usuario esta correcto
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
            //token expira en 5 minutos:
            exp: Math.floor(Date.now() / 1000) + 60 * 5,
          },
          //agregada variable de entorno
          process.env.TOKENSECRETO
        );

        // envío del token al header
        res
          .status(200)
          .append("auth-token", token)
          .redirect(200, "/actividades");

        // callback con la respuesta negativa en caso que las claves no coincidan
      } else {
        return res.status(401).json({ error: "Clave no coincide" });
      }
    }
  );
};
