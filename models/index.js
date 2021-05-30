// import all models
const Company = require('./Company');
const Hours = require('./Hours');
const Industry = require('./Industry');
const Products = require('./Products');
const User = require('./User');

//A User can have multiple companies that they own and manage
User.hasMany(Company, {foreignKey: 'user_id'});
//A company must belong to a single user
Company.belongsTo(User, {foreignKey: 'user_id'});


//Few notes here: 
//1. products, hours, and industry should belong to the company and not the user. User is tied to the company and the rest of the models are tied to the company.
//2. onDelete is set to SET NULL by default, no need to define

// Products.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });

// Hours.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// Industry.belongsToMany(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Products, {
//   foreignKey: 'user_id'
// });


//I believe it should look more like this:

//A company has only a single set of weekly hours
Company.hasOne(Hours, {foreignKey: 'hours_id'});
//A set of hours can only belong to a single company 
Hours.belongsTo(Company, {foreignKey: 'hours_id'});

//A company can have many product offerings
Company.hasMany(Products, {foreignKey: 'product_id'});
//A product has to belong to a single company
Products.belongsTo(Company, {foreignKey: 'product_id'});

//An industry has many companies in it
Industry.hasMany(Company, {foreignKey: 'industry_id'});
//A company only has a single industry it can be a part of
Company.belongsTo(Industry, {foreignKey: 'industry_id'});


module.exports = { User, Company, Industry, Hours, Products };