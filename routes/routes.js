const express = require("express");
const route = express();

route.use(express.static("./public"));

class Routes {
  constructor() {
    // this.controler = new controler();
  }

  start() {
    route.get("/", require("../src/controllers/home").gethome);
    
    route.get("*", (req, res) => {
      res.status(404).render("error", {});
    });

    return route;
  }
}

module.exports = Routes;
