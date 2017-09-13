 // button
$("button").click(function() {
    $("#main").css('display', 'block');
    $('#button').empty();
});

var game = {
    'baseball': 'yankees',
    'football': 'cowboys',
    'food': 'pizza',
    'hockey': 'devils',
    'basketball': 'knicks',
    'soccer': 'redBull',

}

var corAns = 0;
var incAns = 0;
var unAns = 6;


$('#myForm1 input').on('change', function() {
    if ($('input[name="yankees"]:checked', '#myForm1').val() === game['baseball']) {
         corAns = corAns + 1;
         unAns = unAns - 1;
    }
     else if ($('input[name="yankees"]:checked', '#myForm1').val() !== game['baseball']) {
         incAns = incAns + 1;
         unAns = unAns - 1;

    }

});

$('#myForm2 input').on('change', function() {
    if ($('input[name="cowboys"]:checked', '#myForm2').val() === game['football']) {
        corAns = corAns + 1;
        unAns = unAns - 1;
    }
     else if ($('input[name="cowboys"]:checked', '#myForm2').val() !== game['football']) {
        incAns = incAns + 1;
        unAns = unAns - 1;
    }
});

$('#myForm3 input').on('change', function() {
    if ($('input[name="pizza"]:checked', '#myForm3').val() === game['food']) {
        corAns = corAns + 1;
        unAns = unAns - 1;
    }
    else if ($('input[name="pizza"]:checked', '#myForm3').val() !== game['food']) {
        incAns = incAns + 1;
        unAns = unAns - 1;
    }
});
 
$('#myForm4 input').on('change', function() {
    if ($('input[name="devils"]:checked', '#myForm4').val() === game['hockey']) {
        corAns = corAns + 1;
        unAns = unAns - 1;
    }
    else if ($('input[name="devils"]:checked', '#myForm4').val() !== game['hockey']) {
        incAns = incAns + 1;
        unAns = unAns - 1;
    }
});

$('#myForm5 input').on('change', function() {
    if ($('input[name="knicks"]:checked', '#myForm5').val() === game['basketball']) {
        corAns = corAns + 1;
        unAns = unAns - 1;
    }
    else if ($('input[name="knicks"]:checked', '#myForm5').val() !== game['basketball']) {
        incAns = incAns + 1;
        unAns = unAns - 1;
    }
});

$('#myForm6 input').on('change', function() {
    if ($('input[name="redBull"]:checked', '#myForm6').val() === game['soccer']) {
        corAns = corAns + 1;
        unAns = unAns - 1;
    }
    else if ($('input[name="redBull"]:checked', '#myForm6').val() !== game['soccer']) {
        incAns = incAns + 1;
        unAns = unAns - 1;
    }
});

var mins = 1;
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;

setTimeout(Decrement, 1000);

function Decrement() {
    currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;
    if (currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
    secs--;
    $("#timerText").html(currentMinutes + ":" + currentSeconds)
    if (secs !== -1) setTimeout('Decrement()', 1000);

 




    if (secs < 0) {
        $('#done').empty();
        $('.content').empty();
        $('#tr').empty();
        $("#main").html("<h2>All Done!</h2><p> Correct Answers:" + corAns + "</p><p>Incorrect Answsers:" + incAns + "</p><p>Unanswered:" + unAns + "</p><p>Press 'F5' to Reload the page and Try Again!")


    }
}
