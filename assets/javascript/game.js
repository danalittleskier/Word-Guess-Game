



var game = {
    wins: 0,
    losses: 0,
    computerPick: "",
    userPick: "",
    numberOfGuesses: 0,
    lettersGuessed: [],
    wordOptions: ["mountain", "peak", "pinetree", "lake", "tent", "hike"],

    isMatching: function (letter) {

    },
    isWordComplete: function () {

    },
    computerPick: function () {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = this.wordOptions[Math.floor(Math.random() * this.wordOptions.length)];
        return computerGuess;
    }

}
var computerChoice = document.getElementById("computer-word");
// var letterChoice = document.getElementById("letters-picked");

computerChoice.textContent = game.computerPick();

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    game.lettersGuessed.push(userGuess);
    document.getElementById("letters-picked").innerHTML += userGuess; 
    
    // letterChoice.textContent = userGuess;
}
