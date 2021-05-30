// import all models
const Company = require('./Company');
const Hours = require('./Hours');
const Industry = require('./Industry');
const Products = require('./Products');
const User = require('./User');

Company.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Products.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

Hours.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Industry.belongsToMany(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Products, {
  foreignKey: 'user_id'
});

module.exports = { User, Company, Industry, Hours, Products };