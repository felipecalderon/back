const Usuario = require("../models/user");

exports.getusers = async (req, res) => {
  try {
    if (req.query.nombre) {
      const buscarNombre = await Usuario.findOne({ nombre: req.query.nombre });
      if (buscarNombre != null) {
        return res.status(200).json({ Usuario: buscarNombre });
      } else {
        return res.status(401).json({
          error: "Usuario no encontrado",
        });
      }
    } else {
      const buscarTodos = await Usuario.find();
      return res.status(200).json({ Usuarios: buscarTodos });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.getusersParams = async (req, res) => {
  try {
    const buscarId = await Usuario.findById(req.params.id);
    if (buscarId != null) {
      return res.status(200).json({ Usuario: buscarId });
    } else {
      return res.status(401).json({
        error: "Usuario no encontrado",
      });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
