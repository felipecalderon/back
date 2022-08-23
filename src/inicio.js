exports.home = (req, res) => {
  res.send(`App Gym demo, rutas del endpoints backend
  
  Rutas {parametros}:
  /ingreso (POST){email, password}
  /registro (POST){nombre, apellido, email, password}
  /actividades (POST){auth-token}`);
};
