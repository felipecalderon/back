const Usuario = require("../../models/user");
const createHash = require("../../utils/hasGenerator");
const Pago = require('../../utils/pago.js')
const IdPago = new Pago()

//Constrolador del registro de alumnos en mongo
exports.postRegistro = async (req, res) => {
  // verifica si el correo existe
  console.log("ACTIVA REGISTRO");
  const emailExiste = await Usuario.findOne({ email: req.body.email });
  if (emailExiste) {
    console.log(emailExiste);
    return res.status(400).json({
      error: "correo ya registrado",
    });
  }
  // crea usuario
  const usuario = new Usuario({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    rol: req.body.rol,
    email: req.body.email,
    password: createHash(req.body.password),
    username: req.body.username,
    // CREA UN PAGO NUEVO Y ME DEVUELVE SU ID
    IdDelPago: await IdPago.IdPago()
  
  });

  // almacena algún error si lo hubiese
  try {
    const UsuarioBD = await usuario.save();
    res.json({
      error: null,
      usuarioCreado: UsuarioBD,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
