// require expressions
const express = require('express');
const bodyParser = require('body-parser');

// declare and initialize app
const app = express();

// DATA GOES HERE
const calculation = [];
const answersArray = [];

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

// GETs
app.get('/calculate', (req,res) => {
    console.log('sending back data');
    res.send(calculation);
})

// app.get('/answer', (req,res) => {
//     console.log('sending back answer array');
//     console.log('answerArray, ', answersArray[answersArray.length-1]);
    
//     res.send(answersArray[0]);
// })
// POSTs

app.post('/calculate', (req,res) => {
    console.log('in post /calculate');
    let mathCalc = req.body; // request info sent over
    let answer = doMath(mathCalc);
    mathCalc.answer = answer;
    console.log('req.body is ', mathCalc);
    calculation.push(mathCalc);
    // answersArray.push(answer);
    // console.log('answersArray, ', answersArray);
    // console.log('answer ', answer);
    
    
    res.send(200);
    // let result = 0;
    // if (mathCalc.data === '+') {
    //     result = Number(mathCalc.inputOne) + Number(mathCalc.inputTwo);
    // }
    // else if (mathCalc.data === '-') {
    //     result = Number(mathCalc.inputOne) - Number(mathCalc.inputTwo);
    // }
    // else if (mathCalc.data === '*') {
    //     result = Number(mathCalc.inputOne) * Number(mathCalc.inputTwo);
    // }
    // else if (mathCalc.data === '/') {
    //     result = Number(mathCalc.inputOne) / Number(mathCalc.inputTwo);
    // }

    // calculation.push(mathCalc);
    // doMath(calculation);
    // res.send(200);
})
// listen for requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and running!');
});
