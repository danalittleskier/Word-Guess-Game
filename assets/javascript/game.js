var lettersPickedByUserDiv = document.getElementById("letters-picked");
var underscoresDiv = document.getElementById("underscores");
var guessRemainingDiv = document.getElementById("guess-remaining");
var computerChoiceDiv = document.getElementById("computer-word");
var lossesDiv = document.getElementById("losses");
var winsDiv = document.getElementById("wins");

var game = {
    wins: 0,
    losses: 0,
    computerPick: "",
    userPick: "",
    numberOfGuesses: 12,
    underscoreArray: [],
    lettersGuessed: [],
    wordOptions: ["mountain", "peak", "pinetree", "lake", "tent", "hike", "raft", "forest"],

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
            return true;
        } else {
            return false;
        }
    },

    clearGameData: function(){
        this.computerPick = "";
        this.userPick = "";
        this.numberOfGuesses = 12;
        this.underscoreArray = [];
        this.lettersGuessed = [];
    },

    noGuessesLeft: function () {
        if (this.numberOfGuesses === 0) {
            this.losses++;
            return true;
        }
        return false;
    },

    computerChoice: function () {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        game.computerPick = this.wordOptions[Math.floor(Math.random() * this.wordOptions.length)];
        for (let index = 0; index < this.computerPick.length; index++) {
            this.underscoreArray.push("_");
        }
        return game.computerPick;
    }

}

computerChoiceDiv.textContent = game.computerChoice();
underscoresDiv.textContent = game.printGuessedWord();

document.onkeyup = function (event) {

    // Determines which key was pressed.  Check if it's a string
    var userGuess = event.key.toLowerCase();
    if(lettersPickedByUserDiv.textContent === "YOU WON!" || lettersPickedByUserDiv.textContent === "YOU LOST!"){
        playNewWord();
    }
    if(allLetter(userGuess)){
        game.userPick = userGuess;
        lettersPickedByUserDiv.textContent += userGuess;
        underscoresDiv.textContent = game.isLetterMatching(userGuess);
        guessRemainingDiv.textContent = game.numberOfGuesses;
          
        if(game.isWordComplete()){
            lettersPickedByUserDiv.textContent = "YOU WON!";
            winsDiv.textContent = game.wins;
        }
        if(game.noGuessesLeft()){
            lettersPickedByUserDiv.textContent = "YOU LOST!";
            lossesDiv.textContent = game.losses;
        }
    }
    else {
        alert("Please enter a letter");
    }   

}

document.getElementById("new-word").onclick = function() {
    playNewWord();   
};
document.getElementById("new-game").onclick = function() {
    location.reload(true);
}

function playNewWord(){
    game.clearGameData(); 
    computerChoiceDiv.textContent = game.computerChoice();
    underscoresDiv.textContent = game.printGuessedWord();
    guessRemainingDiv.textContent = game.numberOfGuesses;
    lettersPickedByUserDiv.textContent = "";
}

function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     return false;
     }
  }