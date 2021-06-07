// import all models
const User = require('./User');
const Industry = require('./Industry');
const Product = require('./Product');
const Company = require('./Company');
const Hours = require('./Hours');

//A User can have multiple companies that they own and manage
User.hasMany(Company, {foreignKey: 'user_id'});
//A company must belong to a single user
Company.belongsTo(User, {foreignKey: 'user_id'});

//A company has only a single set of weekly hours
Company.hasOne(Hours, {foreignKey: 'company_id'});
//A set of hours can only belong to a single company 
Hours.belongsTo(Company, {foreignKey: 'company_id'});

//An industry has many companies in it
Industry.hasMany(Company, {foreignKey: 'industry_id'});
//A company only has a single industry it can be a part of
Company.belongsTo(Industry, {foreignKey: 'industry_id'});

//A company can have many product offerings
Product.belongsTo(Company, {foreignKey: 'company_id'});
//A product has to belong to a single company
Company.hasMany(Product, {foreignKey: 'company_id'});


module.exports = { User, Company, Industry, Hours, Product };