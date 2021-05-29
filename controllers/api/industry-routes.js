const router = require('express').Router();
const { Industry } = require('../models');
const withAuth = require('../../utils/auth');

//Authorization enabling will be added here
// const withAuth = require('../../utils/(authorization app here)');

///industries/

//Read
//Find all industries
router.get('/', (req, res) => {
    //Call table and function to use
    Industry.findAll(
        //object
    ).then(industryGet => {
        res.json(industryGet);
    })
    //If error occurs, catch all response
    .catch(err => {
        console.log("Uh-Oh.  Something went wrong. Error:" + err);
        res.status(500).json(err);
    });
});

//Find industry by id
router.get('/:id', (req, res) => {
    Industry.findOne(
        {
            //where matches requested id
            where: {
                id: req.params.id,
            }
        }
    ).then(industryGet => {
        res.json(industryGet);
    })
    //If error occurs, catch all response
    .catch(err => {
        console.log("Uh-Oh.  Something went wrong. Error:" + err);
        res.status(500).json(err);
    });
});

//Find industry by industry_name
router.get('/:industry_name', (req, res) => {
    Industry.findAll(
        {
            //where matches requested industry
            where: {
                id: req.params.industry_name,
            },
            include: {
                model: Company
            }
        }
    ).then(industryGet => {
        res.json(industryGet);
    })
        //If error occurs, catch all response
    .catch(err => {
        console.log("Uh-Oh.  Something went wrong. Error:" + err);
        res.status(500).json(err);
    });
});

//*** Should a post route be created
//Post / Create Industry 
router.post('/', (req, res) => {
    console.log(req.body);
    //tell sequelize how to create post
    Category.create({
      industry_name: req.body.industry_name
    })
      //send to json
      .then(industryPost => {
        res.json(industryPost);
    })
      .catch(err => {
        console.log("Uh-Oh.  Something went wrong. Error:" + err);
        res.status(500).json(err);
    });
});

//If user decides to update the company industry
//Update / Put
router.put('/:id', (req, res) => {
    Industry.update(
      //instruct where
      {
        where: {
          id: req.params.id,
        },
      },
      {
        industry_name: req.body.industry_name
      }
    ).then(industryUpdate => {
      res.json(industryUpdate);
    })
    .catch(err => {
        console.log("Uh-Oh.  Something went wrong. Error:" + err);
        res.status(500).json(err);
    });
});

//This option is unlikely to be used by the user
//As industry cannot be a null value, this route may not be used and the whole
//company would have to be removed from the database
router.delete('/:id', (req, res) => {
// delete a category by its `id` value  //Destroy
Industry.destroy(
    {
    where: {
        id: req.params.id
    }
    }
).then(industryDestroy => {
    res.json(industryDestroy);
})
.catch(err => {
    console.log("Uh-Oh.  Something went wrong. Error:" + err);
    res.status(500).json(err);
});
});