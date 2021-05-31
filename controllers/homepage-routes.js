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

module.exports = router;