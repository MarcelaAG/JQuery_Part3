//Pick a number btwn 1 and 100
let number = numberPicker();
// console.log('the number picked is ' + number);
let guess = 0;
let attempts = 5;
let output = "You need to click the guess button!";
$('#feedback').text(output);


$(function(){
    $('#guess-button').on('click', guessChecker);
    $('#new-game').on('click', newGame);
    $('#feedback').addClass('alert alert-info');
});

function numberPicker(){
   let number = Math.random() * 100 + 1;
    number = Math.floor(number)//take the variable number and round it down (whole number)
    return number;
    
    //when i'm in a function I can read other functions outside of it    
}
console.log(number);

//Set a click handler for guess button
function guessChecker(){
    guess = $('#guess').val(); //.val get the value of the user input
    attempts -= 1; //this take away one attempt
    if(guess > number){
        output = "What a shame. That's too high. Go lower! ";
        output += attemptsRemaining();//is going to give us feedback on how may attempts are left
    }
        else if(guess < number){
            output = "Oh no! I'm sorry but that's too low. Go higher! "
            output += attemptsRemaining();
        }
            else if(guess == number){
                 output = 'Wow! You are amazing, that\'s correct! Click new game to play again! ';  
                 $("#feedback").removeClass('alert-danger alert-warning').addClass('alert-success');
                 $('body').css('background-color', '#bada55')
            }
                $("#feedback").text(output);
        }

//Set a click handler for new game
function newGame(){
    //set new number
    number = numberPicker();
    //reset guess & attempts
    guess = 0;
    attempts = 5;
    //reset input window
    $('#guess').val('');
    $('#feedback').text('I\'m thinking of a new number, can you figure it out? You have ' + attempts + ' attempts remaining.');
    //we use .text and not .val because #feedback is a paragraph not an input value
    $('#feedback').removeClass('alert-warning alert-danger');
    $('#feedback').addClass('alert alert-info');
    $('body').css('background-color', 'white');//resets the background to white in order to start new game
};
console.log(newGame);

function attemptsRemaining(){
    let str = 'You have ' + attempts + ' attempts remaining.';
    if (attempts < 1){
        //GAME OVER
        $('body').css('background-color', 'red');//the background becomes red, this means game is done!
        str = ' But actually you can\'t because it\'s Game over!'
    }
        else if (attempts == 1){
            $('#feedback').removeClass('alert-info alert-warning').addClass('alert-danger');
            str = ' You have 1 attempt left, make it work baby!';
        }
            else if (attempts < 3){
                $('#feedback').removeClass('alert-info alert-warning').addClass('alert-danger');
            }
                else if (attempts < 5){
                    $('#feedback').removeClass('alert-info').addClass('alert-warning');
                }
                    return str;
}