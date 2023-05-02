const Planet = require("../models/planet");
const Satelite = require("../models/Satelite");
const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");

// Planet tem um >
//Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Planet.hasMany(Satelite, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
// Pertence a um >
Satelite.belongsTo(Planet, {
    foreingKey: "planetId",
    as: "planet"
});

Cap.belongsToMany(Spaceship, {
    foreingKey: "capId",
    through: "capSpaceship",
    as: "spaceships",
});

Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    through: "capSpaceship",
    as: "caps",
});

module.exports = { Planet, Satelite };