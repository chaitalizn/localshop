//Import express router and models
const router = require('express').Router();
const {User, Company} = require('../../models');

//User Routes: /api/users

//Read Routes
//=============================================================

//Get All Users
router.get('/', (req, res) => {
    User.findAll({
        include: Company
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(500).json(err));
});

//Get Single User
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        include: Company
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
    .then(createdUser => {
        //If the user is validated then we can update the session data
        req.session.email = createdUser.email,
        req.session.user_id = createdUser.id,
        req.session.loggedIn = true;

        req.session.save(()=>{
            //after session has been saved, send a redirect to home response back
            console.log(req.session);
            res.redirect('/dashboard');
        })
    })
    .catch(err => res.status(500).json(err));
});

//Log the user in
router.post('/login', (req, res) => {
    //expects: {email: testUser, password: testPassword}
    const {email, password} = req.body;

    User.findOne({
        where: {
            email
        }
    })
    .then(dbUserData => {
        //if user is not found return an error
        if(!dbUserData){
            return res.status(404).json({message: "User not found."});
        }

        //If password not validated then send an error back
        if(!dbUserData.validateUser(password)){
            return res.status(404).json({message: "Password is incorrect."});
        }

        //If the user is validated then we can update the session data
        req.session.email = dbUserData.email;
        req.session.user_id = dbUserData.id,
        req.session.loggedIn = true;

        req.session.save(()=>{
            //after session has been saved, send a redirect to home response back
            console.log(req.session);
            res.redirect('/dashboard');
        })
    })
    .catch(err => res.status(500).json(err));
});

//Log the user out
router.post('/logout', (req, res) => {
    //if we user is logged in then destroy the session and logout
    if(req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(204).end();
        });
    }
    //return success if user isnt logged in because they are logged out
    else{
        res.status(204).end();
    }
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