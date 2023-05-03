// Importing required libraries
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const mainRoute = require('./routes/main');

// Making the main express app
const app = express();

// Connecting to mongoose
mongoose.connect('mongodb://127.0.0.1:27017/irisWeb')
    .then(() => {
        console.log("DATABASE CONNECTED");
    })
    .catch(err => {
        console.log("COULD NOT CONNECT DATABASE");
        console.log(err);
    })


// Setting app settings
app.set('view engine', 'ejs');
// Passing body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Setting up static folders
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Using the routes
app.use('/', mainRoute);

// Running the Website
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})
