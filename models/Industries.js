//require sequelize
const { Model, DataTypes } = require('sequelize');
//connect to sequelize
const sequelize = require('../config/connection');

class Industry extends Model { }
//authentication will likely go here 

Industry.init(
//adding the constraints as in mysql2
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
//initiate sequelize
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'industry'
    }
);

module.exports = Industry;