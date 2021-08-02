$(document).ready(onReady);
// To load calculation history upoad refresh of page
$(document).ready(getMathData());
// global variable to keep track of clicked operation
let operationVariable;

function onReady() {
    console.log('on Ready');
    $('#submitBtn').on('click', sendMath);
    $('.operationBtn').on('click', getClickedOperation);
    $('#clearBtn').on('click', clearInputs);
}
// Clears inputs and focuses cursor
function clearInputs() {
    $('#inputOne').val('');
    $('#inputTwo').val('');
    $('#inputOne').focus();
}
// function to get clicked operation using 'this'
function getClickedOperation() {
    // if what was clicked has this certain id 
    if ($(this).is('#plusBtn')) {
    // then let the variable equal the operation
        operationVariable = '+';
    }
    else if ($(this).is('#minusBtn')) {
        operationVariable = '-';
    }
    else if ($(this).is('#multiplyBtn')) {
        operationVariable = '*';
    }
    else if ($(this).is('#divideBtn')) {
        operationVariable = '/';
    }
}

// post function that captures inputs and sends to POST
function sendMath() {
    console.log('Inside sendMath');

    let mathCalc = {
        inputOne: $('#inputOne').val(),
        inputTwo: $('#inputTwo').val(),
        data: operationVariable
    };
    // sends data to post then runs getMathData(); funciton once response is received
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathCalc
    }).then((response) => {
        console.log('response is ', response);
        getMathData();
    });
}

// function that will get data back from GET in server
function getMathData() {
    console.log('inside getMathData');
    
    // gets data from GET endpoint in server
        $.ajax({
            method: 'GET',
            url: '/calculate'
        }).then((response) => {
        console.log('GET /calculate response', response);
        // assingning variables to elements on the html side
        let calcList = $('#mathHistory');
        let answer = $('#answer');
        // clearing out elements
        calcList.empty();
        answer.empty();

         // for loop that for each item in the response will:
         // empty out answer element 
         // append items to DOM
        for (let calc of response) { // response is the array from server.js
            answer.empty();
            calcList.append(`
                <li>
                    ${calc.inputOne} ${calc.data} ${calc.inputTwo} = ${calc.answer}
                </li>
            `);
            answer.append(calc.answer);
        }
    })
 }