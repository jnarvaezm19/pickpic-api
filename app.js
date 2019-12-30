const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
require('dotenv/config');

//Middelwares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const albumRoute = require('./routes/albums');
const photoRoute = require('./routes/photos');
const eventLogRoute = require('./routes/eventLogs');

app.use('/album', albumRoute);
app.use('/photo', photoRoute);
app.use('/eventLog', eventLogRoute);


//Routes
app.get('/', (req,res) => {
    res.send('Welcome to Pick Pic Get Method');
});

//connet to DB
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('connect to DB: successfully'));

//How to we start listening tothe server
app.listen(3001);