const router = require('express').Router();
const { User, Company, Industry, Hours, Products } = require('../models');

//Home Routes: /
//=============================================================================

//Home Page Route
router.get('/', (req, res) => {
    res.render('home');
})

module.exports = router;