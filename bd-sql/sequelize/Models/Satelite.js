const { DataTypes } = require("sequelize");

const sequelize = require("../config/sequelize");

const Satelite = sequelize.define("satelites", {
  name: DataTypes.STRING,
  serial_number: DataTypes.INTEGER,
  planetId: DataTypes.INTEGER,
});

module.exports = Satelite;
