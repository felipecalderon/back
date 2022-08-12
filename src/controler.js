function getLogin(req, res) {
  // const logger = log4js.getLogger("info");
  // logger.info("Peticion recibida en la ruta /getLogin");
  res.send("ESPERANDO A RECIBIR INFO DEL INPUT");
}
function postLogin(req, res) {
  if (req.isAuthenticated()) {
    // const logger = log4js.getLogger("info");
    // logger.info(
    //   "Peticion recibida en la ruta /login. Usuario Correctamente Logeado"
    // );

    console.log(req.user);
    let user = req.user;
    res.send('USUARIO LOGEADO');
  } else {

    res.send("USUARIO NO LOGEADO");
  }
}

module.exports = {
  getLogin,
  postLogin,
};
