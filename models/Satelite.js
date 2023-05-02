const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Satelite = sequelize.define("satelites", {
    name: DataTypes.STRING,
    registerNumber: DataTypes.INTEGER,
    planetId: DataTypes.INTEGER,
});

module.exports = Satelite;