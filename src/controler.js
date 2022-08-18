const Usuario = require("../modelos/usuario");
const createHash = require("../utils/hasGenerator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Controlador del login
exports.postIngreso = async (req, res) => {
  //Primero buscamos si el correo coincide con la data en mongo
  const usuarioExiste = await Usuario.findOne({ email: req.body.email });
  if (!usuarioExiste) {
    return res.status(400).json({
      error: "El correo " + req.body.email + " no se encuentra registrado",
    });
  }

  //Verificación de contraseña y creación de token si usuario esta correcto
  bcrypt.compare(
    req.body.password,
    usuarioExiste.password,

    function (error, bien) {
      //si ocurre un error con la comparación del form con la data de mongo se mostrara acá
      if (error) {
        res.status(400).json(error);
      }

      //si la clave del form es la misma que la hasheada en mongo se genera el token
      if (bien) {
        const token = jwt.sign(
          {
            id: usuarioExiste._id,
            nombre: usuarioExiste.name,
          },
          //cambiar secret token por una variable de entorno
          "tokensecreto"
        );

        //visualización del token
        res.status(200).header("auth-token", token).json({
          data: { token },
        });
        // callback con la respuesta negativa en caso que las claves no coincidan
      } else {
        return res.status(400).json({ error: "Clave no coincide" });
      }
    }
  );
};
//Constrolador del registro de alumnos en mongo
exports.postRegistro = async (req, res) => {
  const emailExiste = await Usuario.findOne({ email: req.body.email });
  if (emailExiste) {
    return res.status(400).json({
      error: "correo ya registrado",
    });
  }

  const usuario = new Usuario({
    name: req.body.name,
    email: req.body.email,
    password: createHash(req.body.password),
  });
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

exports.getRegistro = (req, res) => {
  res.send("holaa");
};

exports.root = (req, res) => {
  res.send("Bienvenido a la aplicacion");
};
exports.getLogin = (req, res) => {
  res.send("INPUT DEL LOGIN");
};

exports.postLogin = (req, res) => {
  passport.authenticate("authtoken", {
    session: false,
    optional: false,
  }),
    function (req, res) {
      res.redirect("/");
    };

  if (req.isAuthenticated()) {
    console.log(req.user);
    let user = req.user;
    res.send("USUARIO LOGEADO");
  }
};

exports.jswToken = (req, res) => {
  res.send(req.user);
};

exports.noLogin = (req, res) => {
  res.send("Usuario no es correcto");
  console.log(req.body);
};

// PARA REGISTRARSE NECESITAMOS RECIBIR UN OBJETO COMO EL SIGUIENTE
// {
//   firstName: 'Martina Carolina',
//   lastName: 'Perez',
//   adress: 'barrio 200 vivi.',
//   age: '27',
//   phonenumber: '+543624779235',
//   email: 'valeria123@gmail.com',
//   username: 'Valeria88',
//   password: 'casa123',
// }

exports.getSignout = (req, res) => {
  res.send("INPUT DEL REGISTRO");
};

// SI EL REGISTRO SE REALIZA DE MANERA EXITOSA, LA INFO DEL USUARIO QUEDARIA GUARDADA EN UN OBJETO
// CON LA CONTRASENA ENCRIPTADA Y EL MISMO MONGO AGREGA UN ID. COMO EL SIGUIENTE:
// {
// _id: new ObjectId("62eb13a3c07dc9bc13b12322"),
// firstName: 'Martina Carolina',
// lastName: 'Perez',
// adress: 'barrio 200 vivi.',
// age: '27',
// phonenumber: '+543624779235',
// email: 'valeria123@gmail.com',
// username: 'Valeria88',
// password: '$2b$10$Q6mGK/Vckr/DGD6AzDdlFeye0igBBF0MZrMdBPECCCuTTQzmu/j1q',
//   __v: 0
// }

exports.postSignout = (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.send("REGISTRO CREADO DE MANERA EXITOSA");
  }
};

exports.noSignout = (req, res) => {
  console.log(req.body);
  res.send("Usuario no se pudo Crear correctamente");
};

exports.userLogged = (req, res) => {
  if (req.isAuthenticated()) {
    res.send("EL USUARIO ESTA LOGEADO ACTUALMENTE");
  } else {
    res.redirect("/");
  }
};
