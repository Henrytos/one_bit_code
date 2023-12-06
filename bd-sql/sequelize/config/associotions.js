const Planet = require("../Models/Planet");
const Satelite = require("../Models/Satelite");

Planet.hasMany(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsToMany(Planet, { foreingKey: "planetId", as: "planet" });

const Captain = require("../Models/Captain");
const Spaceship = require("../Models/Spaceship");

Captain.belongsToMany(Captain, {
  foreingKey: "spaceship_id",
  as: "captain_spaceship",
});
Spaceship.belongsToMany(Captain, {
  foreingKey: "captain_id",
  as: "captain_spaceship",
});

module.exports = { Planet, Satelite };
