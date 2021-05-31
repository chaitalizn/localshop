//Import required libraries for the server to use
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Initialize express app and define port for server to use
const app = express();
const PORT = process.env.PORT || 3001;

//define the session configuration and cookie settings for the session
const sess = {
    secret: 'An amazing secret for nobody to see or use',
    cookie: { maxAge: 60000 * 10 },
    rolling: true,
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({db: sequelize})
}

//Server is instructed to use session data
app.use(session(sess));

//Express middleware to accept incoming json objects
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Use the routes we have defined in the controller folder
app.use(routes);

//Sync sequelize tables with local database
sequelize.sync({force: true}).then(() => {
    console.log("Connected to sequelize.");

    //Instruct server to listen on the designated port
    app.listen(PORT, () => {
        console.log(`App listening on port: ${PORT}`);
    });
});


