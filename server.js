const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const route = express.Router();
const controlers = require("./controladores/ingreso");
const passport = require("passport");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//RUTAS:
app.use("/", controlers.root);
app.post("/ingreso",
  passport.authenticate("login", { failureRedirect: "/nologin" }),
  controlers.postLogin
);
app.use("/ingreso", controlers.getLogin)

app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});