const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const CaptainCaptainCaptain = sequelize.define("captain_spaceship", {
  captainId: DataTypes.INTEGER,
  spaceshipId: DataTypes.INTEGER,
});

module.exports = CaptainCaptainCaptain;
