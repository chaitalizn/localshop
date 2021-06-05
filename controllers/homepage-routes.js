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
        include: [Hours,
        Product]
      })
        .then(dbCompanyData => {
          if (!dbCompanyData) {
            res.status(404).json({ message: 'No company found with this id' });
            return;
          }
       /*    res.json(dbCompanyData); */
          const company = dbCompanyData.get({plain:true});
          res.render('company', {company, loggedIn: req.session.loggedIn});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.get('/searchAll', (req, res) => {
    Company.findAll({})
    .then(dbCompanyData => {

        //Get all companies and then map them to a serialized companies array
        const companies = dbCompanyData.map(company => company.get({plain: true}));

        //pass the company data to the result page
        res.render('result', {companies, loggedIn: req.session.loggedIn});
    })
    .catch(err => res.status(500).json(err));
})

//About Us Page Route
router.get('/about-us', (req, res) => {
  res.render('aboutus');
})

//Abou Page Route
router.get('/contact', (req, res) => {
  res.render('contact');
})

module.exports = router;