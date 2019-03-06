// alert("file connection is working");
// create vars connected to document
// var userGuess = document.getElementById("user-guess");
// var wordDisplay = document.getElementById("word-display");
// var guessRemaining = document.getElementById("guesses-remaining");
// var totalWins = document.getElementById("total-wins");
// var totalLosses = document.getElementById("total-losses");

// setting global variables & word-choice array
var guessesRemaining = 9;
var totalWins = 0;
var totalLosses = 0;

var wordList = ["skynet", "easymoney", "terminator", "johnconnor", "judgementday", "nofatebutwhatwemake"];

// creating a variable that is a random selection from the array above
var ranWord = wordList[Math.floor(Math.random() * wordList.length)];

// creating an empty array for the guesses
var answerArray = [];

//will need functions for main game loop, counters, reset(s)...
//then a last function to Call Them All

//GameLoop aka How the Meat is Made
function gameLoop() {
    letters = ranWord.split("");
    // for the answer checker
    lettLength = letters.length;
    //console.log(lettLength);


    for (var i = 0; i < lettLength.length; i++) {
        if (answerArray[i] !== " ") {
            answerArray[i] = "_";
        }
    }

    document.getElementById("word-display").innerHTML = answerArray.join(" ");


};


// function is to check to see if letter that is guessed is correct or wrong
function checkGuess(userGuess) {
    // create a Boolean to see IF letter is in word
    var lettInWord = false;

    for (var j = 0; j < lettLength; j++) {
        if (wordList[j] === userGuess) {
            answerArray[j] = userGuess;
            lettInWord = true;
        }
    }

    //IF the letter IS in the word, then letterInWord becomes true
    if (lettInWord) {
        for (var x = 0; x < lettLength; x++) {
            if (ranWord[x] === lettInWord) {
                userGuess[x] = lettInWord;
                //console.log(userGuess);
            }
        }
    }

};// document.getElementById("word-display").innerHTML = answerArray.join(" ");


function counters() {

    if (answerArray.toString() === userGuess.toString()) {
        wins++;
        alert("Easy Money!");
        gameBegin();

    }
    else if (guessesRemaining === 0) {
        totalLosses++;
        alert("Hasta la vista, baby!")
        gameBegin();
    }

};

document.onkeyup = function (event) {

    var userGuess = (event.keyCode);

    // console.log(answerArray);
    // console.log(userGuess);

    checkGuess(userGuess);
    counters();
};

    // if (ranWord.indexOf(userGuess) != -1) {
    //     for (var i = 0; i < answerArray; i++) {
    //         if (ranWord[i] = userGuess)
    //             answerWord[i] = ranWord[i];

    //     }
    // } else {
    //     console.log("wrong answer!")
    // }

    // function guessCheck() {
    //     if (~ranWord) {
    //         ranWord.splice(0, 1, userGuess);
    //     }
    // }

    // if (ran.includes(userGuess)) {
    //     guessCheck();
    //     console.log("YUP!");
    // } else {
    //     console.log("NOPE!");
    // }


    // }

    // if (lettersLeft > 0) {



    //     if 
    //         for (var x = 0; x<ranWord.length; x++) {
    //         if (ranWord(x) === userGuess) {
    //             answerArray[x] = userGuess;
    //             lettersLeft--;
    //         }
    //     }



// alert("You did it, you guessed " + ranWord);