window.onload = function(){

    setTimeout(timeUp, 62000);



function startTimer(duration, display) {

    stopTimer();

    var timer = duration, minutes, seconds;

    setInterval(function () {

        minutes = parseInt(timer / 60, 10);

        seconds = parseInt(timer % 60, 10);



        minutes = minutes < 10 ? "0" + minutes : minutes;

        seconds = seconds < 10 ? "0" + seconds : seconds;



        display.text(minutes + ":" + seconds);



        if (--timer < 0) {

            timer = duration;

        }

    }, 1000);

}



function stopTimer(){

    clearInterval(startTimer);

}



function timeUp(){

    var a= alert("Time is Up!")

        if (a===true){


            console.log(timeUp);

        }

};





jQuery(function ($) {

    var oneMinute = 60 * 2,

        display = $('#time');

    startTimer(oneMinute, display);

});





};



function timeUp(){

    var a= alert("Time is Up!")

        if (a===true){

            (".answer").reset();

            console.log(timeUp);

        }

};


//scripts

function submitQuiz() {
    console.log('submitted');


    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);

        for (var i = 0, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {

                var answerValue = Number(radiosNo[i].value);
            }
        }

        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }


    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8'));
    console.log("CalcScore: " + calcScore);


    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }


    var showScore = "Your Score: " + calcScore +"/" + questionCounter;

    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {

$('#submitButton').click(function() {
    $(this).addClass('hide');
});



});