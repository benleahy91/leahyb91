// Global Variables
var dogCelebs = ['Woof Blitzer', 'Bark Cuban', 'Mick Wagger', 'Julio Bones', 'Alex Ofetchkin', 'Jason Beagle', 'Hillary Ruff', 'Pet Farvre', 'Waggie Gyllenhall'];
var randomWord = '';
var wordSplit = randomWord.split('');
var letter = '';
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var guesses = 0;
var losses = 0;
var gameHUD = [];


function startGame() {

	// Define Variables
	var guesses = 12;
	var wins = 0;
	var losses = 0;
	var randomWord = [];
	var wordSplit = [];
	var underscores = []
	var guessedLetters = [];
	var wordLength = randomWord.length;


	// Pick Word
	randomWord = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];

	// Split
	wordSplit = randomWord.split('');

	//Underscores
	wordSplit = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];
	
	for (var i = 0; i < wordSplit.length; i++) {
		underscores.push('_');
	}

	document.getElementById("underscores").innerHTML = (underscores);

	// Letters Guessed
	document.getElementById('guessedLetters').innerHTML = (guessedLetters);

	//Guesses Remaining
	document.getElementById('guesses').innerHTML = (guesses);

	// Wins
	document.getElementById('wins').innerHTML = (wins);

	// Losses
	document.getElementById('losses').innerHTML = (losses);

}


function playGame (event) {

	var lettersGuessed = [];
	var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 	

	// Start function on HTML
	document.addEventListener ('keypress', playGame, false);

	document.getElementById('playGame').innerHTML = (playGame);

	// check if letter
	document.onkeyup = function(key) {
	
	for (i = 0; i < alphabet.length + 1; i++)
		if (keyPress.includes("alphabet", 0)) {
			alert("This is a letter!");
		}
	}
}

  // enter keypress into array



// }




  // End Game
  // if guesses === 0 then prompt user Want to play again?

  // if playAgain === true 
  // 	startGame();
  // else "Thanks For Paying!";


// function checkAnswer() {
// 	if character is in string 

// 		else guesses--
// }

// console.log(wordSplit);
// Word Setup


// Guess the Word


startGame();
playGame();


// Letters Guessed


// Guesses Left


// Win/Loss Counter
