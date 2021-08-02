$(document).ready(onReady);
let clickedOperation;

function onReady() {
    console.log('on Ready');
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

function sendMath() {
    console.log('Inside sendMath');

// FUNCTION THAT WILL INCLUDE POST AJAX
    let mathCalc = {
        inputOne: $('#inputOne').val(),
        inputTwo: $('#inputTwo').val(),
        data: operationVariable
    };
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathCalc
    }).then((response) => {
        console.log('response is ', response);
        getMathData();
        getAnswer();
    });
}

function getMathData() {
    console.log('inside getMathData');
    
    // FUNCTION THAT WILL INCLUDE GET AJAX
        $.ajax({
            method: 'GET',
            url: '/calculate'
        }).then((response) => {
        console.log('GET /calculate response', response);

        let calcList = $('#mathHistory');
        let answer = $('#answer');
        calcList.empty();
        answer.empty();

         
        for (let calc of response) { // response is the quotes array from server.js
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

 function getAnswer() {
    console.log('inside getAnswer');
    
    // FUNCTION THAT WILL INCLUDE GET AJAX
        $.ajax({
            method: 'GET',
            url: '/answer'
        }).then((response) => {
            console.log('GET /answer response', response);

            let answer = $('#answer');
            answer.empty();
            answer.append(response);
        });
}