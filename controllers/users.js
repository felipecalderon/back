const Usuario = require("../models/user");

exports.getusers = async (req, res) => {
  try {
    const Usuarios = await Usuario.find();
    res.status(200).json({ Usuarios });
  } catch (error) {
    res.status(401).json({
      error: "Usuario no encontrado",
    });
  }
};

exports.getusersParams = async (req, res) => {
  try {
    const buscarId = await Usuario.findById(req.params.id);
    const buscarNombre = await Usuario.findById(req.query.nombre);
    console.log(buscarId);

    res.status(200).json({ Usuarios: buscarId });
  } catch (error) {
    res.status(401).json({
      error: "Usuario no encontrado",
    });
  }
};
