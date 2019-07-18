



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
        for (let i = 0; i < this.computerPick.length; i++) {
            if(letter === this.computerPick[i]){
                this.underscoreArray[i] = this.computerPick[i];
            } else {
                this.numberOfGuesses--;
            }
        }         
        return this.printGuessedWord();
    },

    printGuessedWord: function () {
        var result = "";
        for (let index = 0; index < this.underscoreArray.length; index++) {
            result += "<span>"+this.underscoreArray[index]+"</span>&nbsp;";           
        }
            return result;
    },

    isWordComplete: function () {
        if(!this.underscoreArray.includes("_")){
            this.wins++;
            return true;
        } else {
            return false;
        }
    },

    noGuessesLeft: function (){
        if(this.numberOfGuesses === 0){
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
var computerChoice = document.getElementById("computer-word");
computerChoice.textContent = game.computerPick();

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    game.lettersGuessed.push(userGuess);
    document.getElementById("letters-picked").innerHTML += userGuess; 
    document.getElementById("underscores").innerHTML = game.printGuessedWord();
    document.getElementById("letters").innerHTML = game.isLetterMatching(userGuess);

}
