const express = require("express");

const routes = express.Router();

const PlanetController = require("../../Controller/PlanetControler");

routes.get("/", PlanetController.index);
routes.get("/:id", PlanetController.indexByid);
routes.post("/", PlanetController.store);
routes.put("/:id", PlanetController.put);
routes.delete("/:id", PlanetController.delete);

module.exports = routes;
