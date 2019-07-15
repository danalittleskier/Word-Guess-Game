



var game = {
    wins: 0,
    losses: 0,
    computerPick: "",
    letterGuess: "",
    numberOfGuesses: 10,
    lettersGuessed: [],
    wordOptions: ["mountain", "peak","pinetree", "lake","tent","hike"],

    isMatching: function(letter){

    },
    isWordComplete: function(){

    }

}
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * game.wordOptions.length)];
}
