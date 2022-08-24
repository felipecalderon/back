exports.gethome = (req, res) => {
  res.json({
    rutas: [
      {
        titulo: "Inicio",
        tipo: "GET",
        url: "/",
      },
      {
        titulo: "Ver Actividades",
        url: "/activities",
      },
      {
        titulo: "Crear Actividad",
        url: "/addactivity",
      },
      {
        titulo: "Ingreso Usuario",
        url: "/login",
      },
      {
        titulo: "Registro de Usuario",
        url: "/adduser",
      },
    ],
  });
};
