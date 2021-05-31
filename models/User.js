//Import Model class and sequelize DataTypes from the sequelize library
//Additionally, import our sequelize connection database connection.
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//Define the User model by inheriting from Model
class User extends Model
{
    validateUser(password){
        const validated = bcrypt.compareSync(password, this.password);
        return validated;
    };
}

//Initialize the user model
User.init(
    //User model fields
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        //username needs to be a unique field so that user's can be differentiated
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [6, 50]
            }
        },
        //email has to be a unique field as user's will log using email as their identifier
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 50]
            }
        }
    },
    //User model configurations
    {
        hooks:{
            //hash the user's password before entering it in the database
            beforeCreate: async function(user){
                user.password = await bcrypt.hash(user.password, 10);
                return user.password;
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;