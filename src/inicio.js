exports.home = (req, res) => {
  res.send(`App Gym demo, rutas del endpoints backend
  
  Rutas {parametros}:
  /ingreso (GET){email, password}
  /registro (POST){name, email, password}
  /actividades (POST){auth-token}`);
};
