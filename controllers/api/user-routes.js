//Import express router and models
const router = require('express').Router();
const {User} = require('../../models');

//User Routes: /api/users

//Read Routes
//=============================================================

//Get All Users
router.get('/', (req, res) => {
    User.findAll({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(500).json(err));
});

//Get Single User
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        //if no user is found, return a message, otherwise, return the single user data
        if(!dbUserData){
            res.status(404).json({message: "User not found."})
        }
        else{
            res.json(dbUserData);
        }
    })
    .catch(err => res.status(500).json(err));
});

//Create Routes
//=============================================================

//Create New User
router.post('/', (req, res) => {
    //expects: {
    //     username: testuser, 
    //     email: test@email.com, 
    //     password: testpass 
    // }

    //Assign the data required from request body to variables
    const {username, email, password} = req.body; 

    User.create({
        username,
        email,
        password
    })
    .then(createdUser => res.json(createdUser))
    .catch(err => res.status(500).json(err));
});

//Update Routes
//=============================================================



//Delete Routes
//=============================================================
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(destroyedUser => {
        //if no user is found, return a message, otherwise, return the single user data
        if(!destroyedUser){
            res.status(404).json({message: "User not found."})
        }
        else{
            res.json(destroyedUser);
        }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;