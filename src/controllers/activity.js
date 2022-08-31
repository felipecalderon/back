const Actividad = require("../../models/activity");

//---------------------------------LISTAR ACTIVIDADES
exports.allActivity = async (req, res) => {
  try {
    const Activities = await Actividad.find();
    res.status(200).json({ Activities });
  } catch (error) {
    res.status(401).json({
      error: "Error al consultar la BD",
    });
  }
};

//---------------------------------FILTRAR ACTIVIDADES POR NOMBRE
exports.singleActivity = async (req, res) => {
  try {
    const Activities = await Actividad.findOne({ nombre: req.params.nombre });
    if (Activities === null) {
      return res.status(404).json({
        error: `Actividad ${req.params.nombre} no encontrada`,
      });
    }
    res.status(200).json({ Activities });
  } catch (error) {
    res.status(401).json({
      error: "Error al consultar la BD",
    });
  }
};

//---------------------------------MOSTRAR HORARIO SEGUN ACTIVIDAD
exports.horarioActivy = async (req, res) => {
  const Activities = await Actividad.findOne({ nombre: req.query.name });
  try {
    if (Activities === null) {
      return res.status(404).json({
        error: `Actividad ${req.query.name} no encontrada`,
      });
    }

    const { horarios } = Activities;
    identificador = horarios;
    res.status(200).json({ horarios });
  } catch (error) {
    res.status(401).json({
      error: "Error al consultar la BD",
    });
  }
};

//--------------------------------- CREAR ACTIVIDAD
exports.createActivity = async (req, res) => {
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
      msg: actividadBD,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

//--------------------------------- ACTUALIZAR ACTIVIDAD
exports.updateActivity = async (req, res) => {
  // verifica si la actividad existe
  const actividadExiste = await Actividad.findOne({ nombre: req.body.nombre });
  try {
    if (!actividadExiste) {
      return res.status(404).json({
        error: "Actividad no encontrada",
      });
    }
    query = { nombre: req.body.nombre };
    updatedata = {
      $set: { horarios: [{ dia: req.body.dia, hora: req.body.hora }] },
    };
    Actividad.updateOne(query, updatedata, function (err, res) {
      if (err) throw err;
    });
    res.json({
      error: null,
      msg: "Actividad Actualizada",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

//--------------------------------- ELIMINAR ACTIVIDAD
exports.deleteActivity = async (req, res) => {
  // verifica si la actividad existe
  const actividadExiste = await Actividad.findOne({ nombre: req.body.nombre });
  try {
    if (!actividadExiste) {
      return res.status(404).json({
        error: `${req.body.nombre} No encontrado`,
      });
    }
    query = { nombre: req.body.nombre };
    actividadExiste.deleteOne(query, function (err, res) {
      if (err) throw err;
    });
    res.json({
      error: null,
      msg: `${req.body.nombre} Eliminado satisfactoriamente`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.addACtiviyIntoAlumn = async (data) => {
  try {
    const activitie = await Actividad.findOne({ nombre: data });
    if (activitie === null) {
      return `Actividad ${data} no encontrada`;
    }
    return activitie;
  } catch (error) {
    res.status(401).json({
      error: "Error al consultar la BD",
    });
  }
};
