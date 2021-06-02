const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, Hours, Industry, Product, User } = require('../models');

//GET route for the main page
router.get('/', (req, res) => {
  User.findOne({
    where: {id: req.session.user_id},
    include: Company
  })
  .then(dbUserData => {
    if(!dbUserData.companies[0]){
      res.render('dashboard',  { company: false, loggedIn: req.session.loggedIn });
        return;
    }

    var company_id = dbUserData.companies[0].id;
    Company.findOne({
      where: {id: company_id},
      include: [User,Hours, Industry,Product]
    })
    .then(dbCompanyData => {
      const company = dbCompanyData.get({plain: true})
      res.render('dashboard', {company, loggedIn: req.session.loggedIn });
    })
  })
  .catch(err => res.status(500).json(err));
});

// //GET route for the main page
// router.get('/', (req, res) => {
//     Company.findOne({
//       where: {
//         id: req.session.user_id
//       },
//       include: [
//         User,
//         Hours,
//         Industry,
//         Product
//       ]
//     })
//     .then(dbCompanyData => {
//       if (!dbCompanyData) {
//         res.render('dashboard',  {company: false, loggedIn: req.session.loggedIn});
//         return;
//       }

//       const company = dbCompanyData.get({plain: true})
//       res.render('dashboard', {company, loggedIn: req.session.loggedIn });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


module.exports = router;