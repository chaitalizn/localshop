//require sequelize
const { Model, DataTypes } = require('sequelize');
const { Company } = require('../models/Company');
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
            autoIncrement: true
        },
        mon: {
            type: DataTypes.STRING,
        },
        tues: {
            type: DataTypes.STRING,
        },
        wed: {
            type: DataTypes.STRING,
        },
        thurs: {
            type: DataTypes.STRING,
        },
        fri: {
            type: DataTypes.STRING,
        },
        sat: {
            type: DataTypes.STRING,
        },
        sun: {
            type: DataTypes.STRING,
        },
        company_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'company',
                key: 'id'
              }
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