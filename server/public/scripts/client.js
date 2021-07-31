$(document).on(onReady);

function onReady() {
    console.log('on Ready');
    $('#submitBtn').on('click', sendMath)
}

function sendMath() {
    console.log('Inside sendMath');

// FUNCTION THAT WILL INCLUDE POST AJAX
    let mathCalc = {
        inputOne: $('#numOne').val(),
        inputTwo: $('#numTwo').val()
    } 

    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathCalc
    }).then((response) => {
        // getCalc();
        console.log('response', response);
        
    });
}

// function sendMath() {
//     // FUNCTION THAT WILL INCLUDE GET AJAX
        
//  }
