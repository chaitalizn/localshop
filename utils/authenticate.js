function authenticate(req, res, next){
    if(!res.session){
        res.redirect('/login');
    }
    else{
        next();
    }
}

module.exports = authenticate;