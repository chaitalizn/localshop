const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, Hours, Industry, Product, User } = require('../models');

//GET route for the main page
router.get('/', (req, res) => {
    res.render('dashboard', { loggedIn: true });
  });

  
module.exports = router;