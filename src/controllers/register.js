const Usuario = require("../../models/user");
const createHash = require("../../utils/hasGenerator");


const moment = require('moment');
moment.locale('es')



//Constrolador del registro de alumnos en mongo
exports.postRegistro = async (req, res) => {


  const userNameExiste = await Usuario.findOne({ username: req.body.username });
 
  if (userNameExiste) {   
    return res.status(400).json({
      error: "Username ya registrado",
    });
  }

  const emailExiste = await Usuario.findOne({ email: req.body.email });
  if (emailExiste) {   
    return res.status(400).json({
      error: "Correo ya registrado",
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
    activity: await require('./activity').addACtiviyIntoAlumn(req.body.activity),

    fechaDePago: moment().format('dddd DD MM YYYY hh:mm:ss')
  
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
