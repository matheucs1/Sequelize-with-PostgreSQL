const express = require('express');
const routes = express.Router();

const PlanetController = require("../controller/PlanetController");
const SateliteController = require('../controller/SateliteController');
const CapController = require("../controller/CapController");
const SpaceshipController = require("../controller/SpaceshipController");

// Rotas de Planets
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

// Rotas de Satelites
routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

// Rotas do Cap
routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);
routes.delete("/cap/:id", CapController.delete);

// Rotas da Spaceship
routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = routes;