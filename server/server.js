// require expressions
const express = require('express');
const bodyParser = require('body-parser');

// declare and initialize app
let app = express();

// DATA GOES HERE

// app.use expressions
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GETs

// POSTs

// listen for requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and running!');
});
