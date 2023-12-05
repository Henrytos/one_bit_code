const Sequelize = require("sequelize");
const database = require("./config");

const sequelize = new Sequelize(database);

module.exports = sequelize;
