



var game = {
    wins: 0,
    losses: 0,
    computerPick: "",
    userPick: "",
    numberOfGuesses: 0,
    lettersGuessed: [],
    wordOptions: ["mountain", "peak", "pinetree", "lake", "tent", "hike"],
    isMatching: function (letter) {
        for (let i = 0; i < this.computerPick.length; i++) {
            const element = this.computerPick[i];
            if(letter === element){
                return letter;
            } else {
                return "_";
            }         
        }
            console.log("userletter "+letter);          
        
    },
    isWordComplete: function () {

    },
    computerPick: function () {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        game.computerPick = this.wordOptions[Math.floor(Math.random() * this.wordOptions.length)];
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
    document.getElementById("letters").innerHTML += game.isMatching(userGuess);

}
