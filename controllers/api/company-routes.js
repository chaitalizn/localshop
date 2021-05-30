const router = require('express').Router();
const {Company, Hours, Industry, Products, User} = require('../../models');
const sequelize = require('../../config/connection');
const { Model } = require('sequelize/types');

// GET/api/company - get all company info including the hours
router.get('/', (req, res) => {
    post.findAll({
        attributes: [
            'id',
            'company_name',
            'address',
            'phone',
            'company_email',
            'website',
            'about'
        ],
        include: [
            //include the Hours model here - one to one
            {
            model: Hours,
            attributes: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
            },
            //include the Industry model here
            {
            model: Industry,
            attributes: ['industry_name']
            },
            //add product data
            {
            model: Products,
            attributes: ['id', 'product_name', 'description_text']  
            }
            //add user data
        ]
    })
    .then(dbCompanyData => res.json(dbCompanyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET/api/company/1 - get one company info
router.get('/:id', (req, res) => {
    Company.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(dbCompanyData => {
          if (!dbCompanyData) {
            res.status(404).json({ message: 'No company found with this id' });
            return;
          }
          res.json(dbCompanyData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// POST /api/company - add new company
router.post('/', (req, res) => {
    Company.create({
        company_name: req.body.company_name,
        address: req.body.address,
        phone: req.body.phone,
        company_email: req.body.company_email,
        website: req.body.website,
        about: req.body.about
        //how to update hours, industry, user and products associated with company 
    })
      .then(dbCompanyData => res.json(dbCompanyData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }); 

// PUT /api/users/1 - update selected company info
router.put('/:id', (req, res) => {
  Company.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCompanyData => {
      if (!dbCompanyData[0]) {
        res.status(404).json({ message: 'No company found with this id' });
        return;
      }
      res.json(dbCompanyData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1 - delete a company
router.delete('/:id', (req, res) => {
    Company.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbCompanyData => {
          if (!dbCompanyData) {
            res.status(404).json({ message: 'No company found with this id' });
            return;
          }
          res.json(dbCompanyData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;