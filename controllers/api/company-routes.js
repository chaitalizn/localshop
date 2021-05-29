const router = require('express').Router();
const {Compnay, Hours, Industry, Products, User} = require('../../models');
const sequelize = require('../../config/connection');
const { Model } = require('sequelize/types');

//get all company info including the hours

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
            {
            model: Hours,
            attributes: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
            },
            {
            model: Industry,
            attributes: ['industry_name']
            }
            //add user name
            //add product data
        ]
    })
    .then(dbCompanyData => res.json(dbCompanyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});