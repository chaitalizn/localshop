// Import dotenv configuration files
require('dotenv').config();

// Import Sequelize library
const Sequelize = require('sequelize');

//IMPORTANT
//==============================
//Create new .env file in the root directory
//Assign DB_NAME, DB_USER, DB_PASS in the .env file to access database

// Instantiate new sequelize connection instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS , {
    host: 'localhost',
    dialect: 'mysql'
});

// Export the sequelize connection
module.exports = sequelize;