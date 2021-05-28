//require sequelize
const { Model, DataTypes } = require('sequelize');
//connect to sequelize
const sequelize = require('../config/connection');

//create company model
class Industry extends Model { } 

//create fields/columns for Company model
Industry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        industry_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'industry'
      }
);

module.exports = Industry;