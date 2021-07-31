// require expressions
const express = require('express');
const bodyParser = require('body-parser');

// declare and initialize app
const app = express();

// DATA GOES HERE
const calculation = [1,2,3];

const calcHistory = {

};
// app.use expressions
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// GETs
app.get('/calculate', (req,res) => {
    console.log('starter data in array');
    res.send(calculation);
})
// POSTs

app.post('/calculate', (req,res) => {
    console.log('in post /calculate');
    let mathCalc = req.body;
    calculation.push(mathCalc);
    // console.log('calculation is ', calculation);
    res.send(calculation);
})
// listen for requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and running!');
});
