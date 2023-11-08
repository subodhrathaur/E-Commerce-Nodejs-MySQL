// GenderEnum.js
const { DataTypes } = require('sequelize');

const GenderEnum = DataTypes.ENUM('Male', 'Female', 'Other');

module.exports = GenderEnum;
