//require sequelize
const { Model, DataTypes } = require('sequelize');
//connect to sequelize
const sequelize = require('../config/connection');

//create company model
class Hours extends Model {} 

//create fields/columns for Company model
Hours.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    mon: {
         type: DataTypes.STRING,
         allowNull: false,
    },
    tues: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    wed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thurs: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fri: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sun: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'hours'
      }
);

module.exports = Hours;