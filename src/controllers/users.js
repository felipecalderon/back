const Usuario = require("../../models/user");
const jwt_decode = require("jwt-decode");

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

exports.updateUsers = async (req, res) => {
  token = req.headers["auth-token"];
  idUser = jwt_decode(token).id;
  const usuarioExiste = await Usuario.findOne({ id: idUser });

  try {
    if (!usuarioExiste) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }

    query = { _id: idUser };
    updatedata = {
      nombre: req.body.nombre,
    };

    Usuario.updateOne(query, updatedata, function (err, res) {
      if (err) throw err;
    });

    res.json({
      error: null,
      msg: "Usuario Actualizado",
    });
  } catch (error) {
    res.status(401).send(error);
  }
};
