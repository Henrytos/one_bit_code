const Planet = require("../Models/Planet");
const Satelite = require("../Models/Satelite");

module.exports = {
  async index(req, res) {
    const { planetId } = await req.params;
    console.log(planetId);
    if (!planetId) {
      res.send("Esse Planeta não existe!");
    }

    const planet = await Planet.findByPk(planetId, {
      include: Satelite,
    });

    return res.json(planet);
  },
  async store(req, res) {
    const { planetId } = req.params;
    const planet = await Planet.findByPk(planetId);

    if (!planet) {
      res.status(404).send("planet não existe");
    }

    const { name, serial_number } = req.body;
    const newSatelite = await Satelite.create({
      name,
      serial_number,
      planetId,
    });

    return res.status(200).json(newSatelite);
  },
};
