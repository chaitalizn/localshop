const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, Hours, Industry, Product, User } = require('../models');
const authenticate = require('../utils/authenticate');

//GET route for the main page
router.get('/', authenticate, (req, res) => {
  User.findOne({
    where: {id: req.session.user_id},
    include: Company
  })
  .then(dbUserData => {
    Industry.findAll({})
    .then(dbIndustryData => {
      const industries = dbIndustryData.map(industry => industry.get({plain: true}));

      if(!dbUserData.companies[0]){
        res.render('dashboard',  { company: false, industries, loggedIn: req.session.loggedIn, username: req.session.username });
          return;
      }
  
      var company_id = dbUserData.companies[0].id;
      Company.findOne({
        where: {id: company_id},
        include: [User, Hours, Industry, Product]
      })
      .then(dbCompanyData => {
        const company = dbCompanyData.get({plain: true})
        res.render('dashboard', {company, industries, loggedIn: req.session.loggedIn, username: req.session.username });
      })
    })
  })
  .catch(err => res.status(500).json(err));
});

module.exports = router;