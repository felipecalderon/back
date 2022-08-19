exports.postActividades = (req, res) => {
  res.status(200).json({
    error: null,
    data: {
      titulo: "actividades ruta protegida",
      user: req.user,
    },
  });
};
