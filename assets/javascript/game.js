var lettersPickedByUser = document.getElementById("letters-picked");
var underscores = document.getElementById("underscores");
var guessRemaining = document.getElementById("guess-remaining");
var computerChoice = document.getElementById("computer-word");

var game = {
    wins: 0,
    losses: 0,
    computerPick: "",
    userPick: "",
    numberOfGuesses: 12,
    underscoreArray: [],
    lettersGuessed: [],
    wordOptions: ["mountain", "peak", "pinetree", "lake", "tent", "hike"],

    isLetterMatching: function (letter) {
        var matched = false;
        if(this.lettersGuessed.includes(letter)){
            matched = true;
        } 
        else {
            for (let i = 0; i < this.computerPick.length; i++) {
                if (letter === this.computerPick[i]) {
                    this.underscoreArray[i] = this.computerPick[i];
                    this.lettersGuessed.push(letter);
                    matched = true;
                }
            }
        }    
        if (matched === false) {
            this.numberOfGuesses--;
        }
        return this.printGuessedWord();
    },

    printGuessedWord: function () {
        var result = "";
        for (let index = 0; index < this.underscoreArray.length; index++) {
            result += " " + this.underscoreArray[index] + " ";
        }
        return result;
    },

    isWordComplete: function () {
        if (!this.underscoreArray.includes("_")) {
            this.wins++;
            this.computerPick = "";
            this.userPick = "";
            this.numberOfGuesses = 12;
            this.underscoreArray = [];
            this.lettersGuessed = [];
            return true;
        } else {
            return false;
        }
    },

    noGuessesLeft: function () {
        if (this.numberOfGuesses === 0) {
            this.losses++;
            return true;
        }
        return false;
    },

    computerPick: function () {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        game.computerPick = this.wordOptions[Math.floor(Math.random() * this.wordOptions.length)];
        for (let index = 0; index < this.computerPick.length; index++) {
            this.underscoreArray.push("_");
        }
        return game.computerPick;
    }

}

computerChoice.textContent = game.computerPick();
underscores.textContent = game.printGuessedWord();

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    game.lettersGuessed.push(userGuess);

    lettersPickedByUser.textContent += userGuess;
    underscores.textContent = game.isLetterMatching(userGuess);
    guessRemaining.textContent = game.numberOfGuesses;

}
