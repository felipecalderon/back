function root(req, res) {
  res.send("Bienvenido a la aplicacion");
}

function getLogin(req, res) {
  res.send("INPUT DEL LOGIN");
}
function postLogin(req, res) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    let user = req.user;
    res.send("USUARIO LOGEADO");
  }
}

function noLogin(req, res)  {
  res.send("Usuario no es correcto");
};



function getSignout(req, res) {
  res.send("INPUT DEL REGISTRO");
}



function postSignout(req, res) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.send("REGISTRO CREADO DE MANERA EXITOSA");
  }
}

function noSignout(req, res)  {
  console.log(req.body);
  res.send("Usuario no se pudo Crear correctamente");
};

function userLogged(req, res) {
  if (req.isAuthenticated()) {
    res.send("EL USUARIO ESTA LOGEADO ACTUALMENTE")
  } else {
    res.redirect("/");
  }
}


function inicio(req, res) {
  let numero= suma()
  res.send(numero)
}



module.exports = {
  root,
  getLogin,
  postLogin,
  noLogin,
  getSignout,
  postSignout,
  noSignout,
  userLogged,
  inicio
};
