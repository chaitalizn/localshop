const { Industry } = require('../models');

const industrydata = [
  {
    industry_name: "Furniture"
  },
  {
    industry_name: "Wearable Accessories"
  },
  {
    industry_name: "Jewelry"
  },
  {
    industry_name: "Apparel"
  },
  {
    industry_name: "Home Kitchen and Dining"
  },
  {
    industry_name: "Home Bedding"
  },
  {
    industry_name: "Home Bathroom"
  },
  {
    industry_name: "Home Outdoor"
  },
  {
    industry_name: "Garden"
  },
  {
    industry_name: "Music"
  },
  {
    industry_name: "Games"
  },
  {
    industry_name: "Reading"
  },
  {
    industry_name: "Toys"
  },
  {
    industry_name: "Art"
  },
  {
    industry_name: "Home Services"
  },
  {
    industry_name: "Commercial Services"
  },
  {
    industry_name: "Administration and Office"
  }
];

const seedIndustries = () => Industry.bulkCreate(industrydata);

module.exports = seedIndustries;