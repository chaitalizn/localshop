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
            autoIncrement: true,
            allowNull: false
        },
        mon: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        tues: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        wed: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        thurs: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        fri: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        sat: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        sun: {
            type: DataTypes.STRING,
            //allowNull: false,
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