// require expressions
const express = require('express');
const bodyParser = require('body-parser');

// declare and initialize app
const app = express();

// DATA GOES HERE
// array that will be sent back as response
const calculation = [];

//function that will take the data sent over (req.body)
// calculate for each operation situation
//returns answer as result object
function doMath(object) {
    let result = 0;
    if (object.data === '+') {
        result = Number(object.inputOne) + Number(object.inputTwo);
    }
    else if (object.data === '-') {
        result = Number(object.inputOne) - Number(object.inputTwo);
    }
    else if (object.data === '*') {
        result = Number(object.inputOne) * Number(object.inputTwo);
    }
    else if (object.data === '/') {
        result = Number(object.inputOne) / Number(object.inputTwo);
    }
    return result;
}

// app.use expressions
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// GET endpoint
//sends back calculations array to client
app.get('/calculate', (req,res) => {
    console.log('sending back data'); // test to see if endpoint was hit
    res.send(calculation);
})

// POSTs
// pushes data to doMath function to calculate
// adds calculated answer on to req.body (mathCalc)
// pushes mathCalc into array
// sends status OK
app.post('/calculate', (req,res) => {
    console.log('in post /calculate'); // testing to see if endpoint was hit
    let mathCalc = req.body; // request data sent over
    let answer = doMath(mathCalc);
    mathCalc.answer = answer; // adds new key
    console.log('req.body is ', mathCalc); // testing
    calculation.push(mathCalc); // pushes object to array
    res.send(200); // sends OK to client
})

// listen for requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and running!');
});
