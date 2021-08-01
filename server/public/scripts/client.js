$(document).ready(onReady);
let clickedOperation;

function onReady() {
    console.log('on Ready');
    // sendMath();
    // getMathData();
    $('#submitBtn').on('click', sendMath);
    $('.operationBtn').on('click', getClickedOperation);
    $('#clearBtn').on('click', clearInputs);
}

function clearInputs() {
    $('#inputOne').val('');
    $('#inputTwo').val('');
    $('#inputOne').focus();
}

function getClickedOperation() {
    if ($(this).is('#plusBtn')) {
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

function getMathData() {
    console.log('inside getMathData');
    
    // FUNCTION THAT WILL INCLUDE GET AJAX
        $.ajax({
            method: 'GET',
            url: '/calculate'
        }).then((response) => {
        console.log('GET /calculate response', response);
        })
 }

function sendMath() {
    console.log('Inside sendMath');

// FUNCTION THAT WILL INCLUDE POST AJAX
    let mathCalc = {
        inputOne: $('#inputOne').val(),
        inputTwo: $('#inputTwo').val(),
        data: operationVariable
    };
    console.log('operationVariable is ', operationVariable);
    
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathCalc
    }).then((response) => {
        // getCalc();
        console.log('response is ', response);
        
        let calcList = $('#mathHistory');
        let answer = $('#answer');

        calcList.empty();
        answer.empty();
        answer.append(response);


        for (let calc of response) { // response is the quotes array from server.js
            calcList.append(`
                <li>
                    ${mathCalc.inputOne} ${mathCalc.data} ${mathCalc.inputTwo} = ${response}
                </li>
            `);
        }
    });
}
