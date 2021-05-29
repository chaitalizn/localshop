const { Industry } = require('../models');

const industrydata = [
  {
    industry_name: "furniture"
  },
  {
    industry_name: "wearable accessories"
  },
  {
    industry_name: "jewelry"
  },
  {
    industry_name: "apparel"
  },
  {
    industry_name: "home kitchen & dining"
  },
  {
    industry_name: "home furniture"
  },
  {
    industry_name: "home bedding"
  },
  {
    industry_name: "home bathroom"
  },
  {
    industry_name: "home outdoor"
  },
  {
    industry_name: "garden"
  },
  {
    industry_name: "music"
  },
  {
    industry_name: "games"
  },
  {
    industry_name: "reading"
  },
  {
    industry_name: "toys"
  },
  {
    industry_name: "art"
  },
  {
    industry_name: "home services"
  },
  {
    industry_name: "commercial services"
  },
  {
    industry_name: "administration  & office services"
  }
];

const seedIndustries = () => Industry.bulkCreate(industrydata);

module.exports = seedIndustries;