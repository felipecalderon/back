const Usuario = require("../modelos/usuario");
const createHash = require("../utils/hasGenerator");

//Constrolador del registro de alumnos en mongo
exports.postRegistro = async (req, res) => {
  // verifica si el correo existe
  const emailExiste = await Usuario.findOne({ email: req.body.email });
  if (emailExiste) {
    return res.status(400).json({
      error: "correo ya registrado",
    });
  }
  // crea usuario
  const usuario = new Usuario({
    name: req.body.name,
    email: req.body.email,
    password: createHash(req.body.password),
  });
  // almacena algún error si lo hubiese
  try {
    const UsuarioBD = await usuario.save();
    res.json({
      error: null,
      datos: UsuarioBD,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
