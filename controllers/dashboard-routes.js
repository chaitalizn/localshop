const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, Hours, Industry, Product, User } = require('../models');

//GET route for the main page
router.get('/', (req, res) => {
    //hardcoded data for testing ONLY
    Company.findOne({
      where: {
        id: 1
        //id: req.session.user.id
      },
      include: [
        User,
        Hours,
        Industry,
        Product
      ]
    })
    .then(dbCompanyData => {
      if (!dbCompanyData) {
        res.render('dashboard', {loggedIn: req.session.loggedIn});
        return;
      }

      const company = dbCompanyData.get({plain: true})
      res.render('dashboard', {company, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;