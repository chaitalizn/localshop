const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync({force: true}).then(() => {
    console.log("Connected to sequelize.");
    app.listen(PORT, () => {
        console.log(`App listening on port: ${PORT}`);
    });
});


