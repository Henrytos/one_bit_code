const { DataTypes } = require("../config/sequelize");
const sequelize = require("../config/sequelize");

const Spaceship = sequelize.define("spaceship", {
  name: DataTypes.STRING,
  serial_number: DataTypes.INTEGER,
});

module.exports = Spaceship;
