// require expressions
const express = require('express');
const bodyParser = require('body-parser');

// declare and initialize app
const app = express();

// DATA GOES HERE
const calculation = [];

const calcHistory = {

};
// app.use expressions
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// GETs
app.get('/calculate', (req,res) => {
    console.log('inside get');
    res.send(calculation);
})
// POSTs

app.post('/calculate', (req,res) => {
    console.log('in post /calculate');
    let mathCalc = req.body;
    console.log('req.body is ', mathCalc);
    
    let result = 0;
    if (mathCalc.data === '+') {
        result = Number(mathCalc.inputOne) + Number(mathCalc.inputTwo);
    }
    else if (mathCalc.data === '-') {
        result = Number(mathCalc.inputOne) - Number(mathCalc.inputTwo);
    }
    else if (mathCalc.data === '*') {
        result = Number(mathCalc.inputOne) * Number(mathCalc.inputTwo);
    }
    else if (mathCalc.data === '/') {
        result = Number(mathCalc.inputOne) / Number(mathCalc.inputTwo);
    }

    calculation.push(result);
    res.send(calculation);
})
// listen for requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and running!');
});
