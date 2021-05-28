
const seedIndustries = require('./industry-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedIndustries();
  console.log('\n----- INDUSTRIES SEEDED -----\n');

 process.exit(0);
};

seedAll();
