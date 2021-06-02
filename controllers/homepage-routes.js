const router = require('express').Router();
const { User, Company, Industry, Hours, Products } = require('../models');

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

router.get('/searchAll', (req, res) => {
    Company.findAll({})
    .then(dbCompanyData => {

        //Get all companies and then map them to a serialized companies array
        const companies = dbCompanyData.map(company => company.get({plain: true}));

        //pass the company data to the result page
        res.render('result', {companies});
    })
    .catch(err => res.status(500).json(err));
})

module.exports = router;