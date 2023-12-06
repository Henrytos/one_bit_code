const express = require("express");

const routes = express.Router();

const PlanetController = require("../../Controller/PlanetController");
const SateliteController = require("../../Controller/SateliteController");

routes.get("/planets/", PlanetController.index);
routes.get("/planets/:id", PlanetController.indexByid);
routes.post("/planets/", PlanetController.store);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.get("/planet/:planetId/satelite", SateliteController.index);
routes.post("/planet/:planetId/satelite", SateliteController.store);

module.exports = routes;
