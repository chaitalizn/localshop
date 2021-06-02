const router = require('express').Router();
const { User, Company, Industry, Hours, Product } = require('../models');

//Home Routes: /
//=============================================================================

//Home Page Route
router.get('/', (req, res) => {
    res.render('home', {loggedIn: req.session.loggedIn});
})

//Login Page Route
router.get('/login', (req, res) => {
    res.render('login');
})

//Single Company Page Route
router.get('/company/:id', (req, res) => {
    Company.findOne({
        where: {
          id: req.params.id
        },
        include: Hours
      })
        .then(dbCompanyData => {
          if (!dbCompanyData) {
            res.status(404).json({ message: 'No company found with this id' });
            return;
          }
       /*    res.json(dbCompanyData); */
          const company = dbCompanyData.get({plain:true});
          res.render('company', {company});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

//Result Page Route
router.get('/result/:id', (req, res) => {
    //hardcoded data for testing ONLY
    const company = {
        id: 1,
        company_name: 'test_name',
        about: 'info about thie fake company',
        phone: '4561231236'
      };

    res.render('result');
})

module.exports = router;