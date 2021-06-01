const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, Hours, Industry, Product, User } = require('../models');

//GET route for the main page
router.get('/', (req, res) => {
    //hardcoded data for testing ONLY
    const company = {
        company_name: "test inc",
        address: '2345 street lane',
        phone: 9058524562,
        company_email: "sales@test.com",
        website: "www.test.com",
        about_us: "this is a test company. we are invisiable",
        industry: "fake"
      };
    res.render('dashboard', { loggedIn: true });
  });

  
module.exports = router;