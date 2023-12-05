async function insertNewPlanet(name = "terra", position = 0) {
  const Planet = require("./models/Planet");
  const newPlanet = await Planet.create({
    name,
    position,
  });

  console.log(newPlanet);
}

insertNewPlanet("terra", 2);
