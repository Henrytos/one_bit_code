const Planet = require("../Models/Planet");

module.exports = {
  async store(req, res) {
    const { name, position } = req.body;
    const newPlanet = await Planet.create({ name, position });
    return res.status(200).json(newPlanet);
  },
  async index(req, res) {
    const planets = await Planet.findAll();
    return res.status(200).json(planets);
  },

  async indexByid(req, res) {
    const id = req.params.id;
    const planet = await Planet.findByPk(id);
    return res.status(200).json(planet);
  },

  async put(req, res) {
    const { name, position } = req.body;
    await Planet.update(
      {
        where: { id: req.params.id },
      },
      { name, position }
    );
    return res.status(200).json({ message: "Planet updated" });
  },
  async delete(req, res) {
    await Planet.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).json({ message: " Planet deleted" });
  },
};
