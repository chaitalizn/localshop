//require sequelize
const { Model, DataTypes } = require('sequelize');
//connect to sequelize
const sequelize = require('../config/connection');

//create company model
class Company extends Model {} 

//create fields/columns for Company model
Company.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    company_name: {
         type: DataTypes.STRING,
         allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    company_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate: {
            isEmail: true
        }
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isURL: true
        }
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    hours_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'hours',
            key: 'id'
          }
    },
    industry_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'industry',
            key: 'id'
          }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
          }
    },
    products_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'products',
            key: 'id'
          }
    }
    //create a hours model and add references
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'company'
      }
);

module.exports = Company;