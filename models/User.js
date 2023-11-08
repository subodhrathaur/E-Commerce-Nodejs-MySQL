// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const GenderEnum = require('../utils/GenderEnum'); // Import the GenderEnum

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roles: {
    type: DataTypes.STRING, // You can choose an appropriate data type for roles (e.g., ENUM or JSON)
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addressLine1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addressLine2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addressLine3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  landmark: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: GenderEnum, // Use the GenderEnum from the imported module
    allowNull: true,
  },
  // Add more properties as needed
});

module.exports = User;

