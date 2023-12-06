const { DataTypes } = require("sequelize");

const sequelize = require("../config/sequelize");

const Captain = sequelize.define("captain", {
  name: DataTypes.STRING,
  fromPlanet: DataTypes.STRING,
});

module.exports = Captain;
