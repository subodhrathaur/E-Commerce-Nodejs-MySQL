// GenderEnum.js
const { DataTypes } = require('sequelize');

const GenderEnum = DataTypes.ENUM('Male', 'Female', 'Other');
const RoleEnum = DataTypes.ENUM('Admin', 'SuperAdmin', 'SubAdmin','User');

module.exports = {
    GenderEnum,RoleEnum
};
