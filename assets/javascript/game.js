//variables
var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guessesLeft = 9
var guesses = [];
var gameover = true;

//displays results
function docWrite(variable) {
    document.write(variable);
}

//generate random letter
    var shadowLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
    console.log(shadowLetter + "... you cheater");



//user input
document.onkeyup = function(guess) {

    var userGuess = event.key;

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (options.indexOf(userGuess) > -1) {

        if (userGuess === shadowLetter) {
            wins++;
            guessesLeft = 9;
            guesses = [];
        }

        if (userGuess != shadowLetter) {
            guessesLeft --;
            guesses.push(userGuess);
        }

        if (guessesLeft === 0) {

        guessesLeft = 9;
        losses ++;
        guesses = [];
        }
    
    }

    var html = 
    "<h1>The Psychic Game!</h1>"+
    "<br>"+
    "<li> Guess what letter I'm thinking of!</li>"+
    "<br>"+
    "<li>"+
        "Wins: " + wins+
    "</li>"+
    "<br>"+
    "<li>"+
        "Losses: " + losses +
    "</li>"+
    "<br>"+
    "<li>"+
        "Guesses remaining: " + guessesLeft +
    "</li>"+
    "<br>"+
    "<li>"+
        "Your guesses so far: " + guesses +
    "</li>";

    document.querySelector("#game").innerHTML = html;
 
}
