$(document).ready(onReady);

function onReady() {
    console.log('on Ready');
    getMathData();
    $('#submitBtn').on('click', sendMath)
}

function getMathData() {
    console.log('inside getMathData');
    
    // FUNCTION THAT WILL INCLUDE GET AJAX
        $.ajax({
            method: 'GET',
            url: '/calculate'
        }).then((response) => {
        console.log('GET /calculate response', response);
        
        let answer = $('#answer');
        let calcHistory = $('#mathHistory');



        })
 }

function sendMath() {
    console.log('Inside sendMath');

// FUNCTION THAT WILL INCLUDE POST AJAX
    let mathCalc = {
        inputOne: $('#inputOne').val(),
        inputTwo: $('#inputTwo').val(),
    };
    console.log('mathCalc is ', mathCalc);
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathCalc
    }).then((response) => {
        // getCalc();
        console.log('response', response);
    });
}
