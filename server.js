//Import required libraries for the server to use
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

//Initialize express app and define port for server to use
const app = express();
const PORT = process.env.PORT || 3001;

//Express middleware to accept incoming json objects
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Use the routes we have defined in the controller folder
app.use(routes);

//Sync sequelize tables with local database
sequelize.sync({force: false}).then(() => {
    console.log("Connected to sequelize.");

    //Instruct server to listen on the designated port
    app.listen(PORT, () => {
        console.log(`App listening on port: ${PORT}`);
    });
});


