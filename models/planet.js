const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Planet = sequelize.define("planets", {
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,
    hasLife: DataTypes.BOOLEAN,

});

module.exports = Planet;