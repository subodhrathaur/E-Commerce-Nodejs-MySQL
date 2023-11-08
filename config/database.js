require("dotenv").config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// console.log(sequelize.config);
sequelize.sync()
  .then(() => {
    console.log('Database and tables created.');
  })
  .catch((err) => {
    console.error('Error synchronizing database:', err);
  });


module.exports = sequelize;