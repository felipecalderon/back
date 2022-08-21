const Actividad = require("../modelos/usuario");
const createHash = require("../utils/hasGenerator");

//Constrolador del registro de alumnos en mongo
exports.postRegistro = async (req, res) => {
  // verifica si la actividad existe
  const emailExiste = await Actividad.findOne({ email: req.body.email });
  if (emailExiste) {
    return res.status(400).json({
      error: "correo ya registrado",
    });
  }
  // crea usuario
  const actividad = new Actividad({
    nombre: req.body.nombre,
    horarios: req.body.horarios,
  });
  // almacena algún error si lo hubiese
  try {
    const actividadBD = await actividad.save();
    res.json({
      error: null,
      actividadCreada: actividadBD,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
