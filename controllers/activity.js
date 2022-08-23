const Actividad = require("../models/activity");

exports.postActividades = (req, res) => {
  res.status(200).json({
    error: null,
    data: {
      titulo: "actividades ruta protegida",
      user: req.usuario,
    },
  });
};
//Constrolador del registro de alumnos en mongo
exports.postActividad = async (req, res) => {
  // verifica si la actividad existe
  const actividadExiste = await Actividad.findOne({ nombre: req.body.nombre });
  if (actividadExiste) {
    return res.status(400).json({
      error: "Actividad ya se encuentra registrada",
    });
  }
  // crea la actividad
  const actividad = new Actividad({
    nombre: req.body.nombre,
    horarios: [{ dia: req.body.dia, hora: req.body.hora }],
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
