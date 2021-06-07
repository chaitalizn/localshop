//Import express router and models
const router = require('express').Router();
const {Hours} = require('../../models');

//GET /api/hours - get all hours 
router.get('/', (req, res) => {
    Hours.findAll()
    .then(dbHoursData => res.json(dbHoursData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

//GET /api/hours/id - get hours
router.get('/:id', (req, res) => {
    Hours.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbHoursData => {
        if(!dbHoursData) {
            res.status(404).json({ message: "No hours found with this id"});
            return
        }
        res.json(dbHoursData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//POST /api/hours - add hours
router.post('/', (req, res) => {
    Hours.create({
        mon: req.body.mon,
        tues: req.body.tues,
        wed: req.body.wed,
        thurs: req.body.thurs,
        fri: req.body.fri,
        sat: req.body.sat,
        sun: req.body.sun,
        //company_id: req.body.company_id
        company_id: req.session.user_id
    })
    .then(dbHoursData => res.json(dbHoursData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//PUT /api/hours = update hours
//**Note** removed the :id param because we never need to use it in the website since the user_id will always be the company id
router.put('/', (req, res) => {
    Hours.update(
        {
            mon: req.body.mon,
            tues: req.body.tues,
            wed: req.body.wed,
            thurs: req.body.thurs,
            fri: req.body.fri,
            sat: req.body.sat,
            sun: req.body.sun
        }, 
        {
        where: {
            company_id: req.session.user_id
        }
    })
    .then(dbHoursData => {
        if (!dbHoursData[0]) {
            res.status(404).json({ message: 'Hours are not found this id'})
            return
        }
        res.json(dbHoursData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//PUT /api/hours/1 = update hours
router.put('/:id', (req, res) => {
    Hours.update(
        req.body, 
        {
        where: {
            id: req.params.id
        }
    })
    .then(dbHoursData => {
        if (!dbHoursData[0]) {
            res.status(404).json({ message: 'Hours are not found this id'})
            return
        }
        res.json(dbHoursData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;