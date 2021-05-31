const router = require('express').Router();
const { Product } = require('../../models');

router.get('/', (req,res) => {
    Product.findAll()
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Find industry by id
// /api/products/1
router.get('/:id', (req, res) => {
    Product.findOne(
        {
            //where matches requested id
            where: {
                id: req.params.id,
            }
        }
    ).then(dbProductData => {
        res.json(dbProductData);
    })
    //If error occurs, catch all response
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Product.update(
      {
        product_name: req.body.product_name,
        description_text: req.body.discription_text,
        company_id: req.body.company_id,
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(industryData => {
        if (!industryData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(industryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req,res) => {
    //expects {product_name: "Ceramic Cup", description_text: "handmade cup made of clay", company_id: 1}
    Product.create({
        product_name: req.body.product_name,
        description_text: req.body.description_text,
        company_id: req.body.company_id
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});


router.delete('/:id', (req, res) => {
    Product.destroy({
        where: {
        id: req.params.id
        }
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;