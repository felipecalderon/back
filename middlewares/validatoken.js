const jwt = require("jsonwebtoken");

exports.verificaToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "acceso no autorizado" });
  try {
    const verificado = jwt.verify(token, process.env.TOKENSECRETO);
    req.usuario = verificado;
    next();
  } catch (error) {
    res.status(400).json({ error: "token no autorizado" });
  }
};
