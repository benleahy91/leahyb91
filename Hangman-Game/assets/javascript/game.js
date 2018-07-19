// Global Variables
var dogCelebs = ['Woof Blitzer', 'Bark Cuban', 'Mick Wagger', 'Julio Bones', 'Alex Ofetchkin', 'Jason Beagle', 'Hillary Ruff', 'Pet Farvre', 'Waggie Gyllenhall'];
var randomWord = '';
var wordSplit = '';
var letter = '';
var keyPress = '';
var keyCode = '';
var keyLog = '';
var alphabet = '';
var wins = 0;
var guessesLeft = 0;
var losses = 0;
var underscores = '';
var guessedLetters = '';
var wordLength = '';




function startGame() {

	// Define Variables
	guessesLeft = 12;
	wordSplit = [];
	underscores = [];
	guessedLetters = [];
	wordLength = randomWord.length;
	alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


	// Pick Word
	randomWord = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];

	// Split
	wordSplit = randomWord.split('');
	
	//Underscores
	wordSplit = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];

	wordSplit = wordSplit.replace(/\s/g, '');


	console.log(wordSplit);


	for (var i = 0; i < wordSplit.length; i++) {
		underscores.push('_');
	}

	underscores = underscores.join('   ');
	console.log(underscores);

	document.getElementById("underscores").innerHTML = (underscores);

	// Letters Guessed
	document.getElementById('guessedLetters').innerHTML = (guessedLetters);

	//Guesses Remaining
	document.getElementById('guessesLeft').innerHTML = (guessesLeft);

	// Wins
	document.getElementById('wins').innerHTML = (wins);

	// Losses
	document.getElementById('losses').innerHTML = (losses);

}


function playGame (event) {

	// var keyPress = String.fromCharCode(event.keyCode).toUpperCase();
	// var keyCode = event.keyCode; ***why did this have to be in the onkeyup function?***
	keyLog = [];
	wordSplit = '';
	keyPress = '';
	wrongGuesses = '';
	guessedLetters = [];
	alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];



	// Start function on HTML
	document.addEventListener ('keyPress', playGame, false);

	document.getElementById('keyPress').innerHTML = keyPress;
	
	document.getElementById('keyCode').innerHTML = keyCode;


	document.onkeyup = function(event) {

	keyPress = String.fromCharCode(event.keyCode).toUpperCase();
	keyCode = event.keyCode;
	alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	keyLog;
	guessedLetters;

		// check if letter
			for (var i = 0; i < alphabet.length + 1; i++) {

			if (keyPress.indexOf(alphabet[i]) >= 0) {
	  			keyLog.push(keyPress);
	  		}
		  
				// else {
					// console.log("You're not guessing numbers dummy! That would be a really stupid game.")
				// }
			}

		// console.log(keyLog)

		//check if guessed
		for (var i = 0; i <= keyLog.length - 1; i++) {
			if (keyPress.indexOf(keyLog[i]) <= 0) {
				guessedLetters.push(keyPress);
			}
			else {
				// console.log('You already guessed that letter.')
			}
		}
				console.log(guessedLetters)

		// console.log(keyLog)


		// for (var i = 0; i < wordSplit.length + 1; i++) {
		// 	if (keyPress.indexOf(wordSplit) <= 0) {
		// 		// console.log("Guess another letter.");
		// 		(guessedLetters.push(keyPress]);
		// 	}
		// 			console.log(guessedLetters)
		// 			console.log(keyPress)

		// }
	}
}
				// underscore.replace(underscore[k].CharAt(keyPress[i]), keyPress[i])			


// 		// check if contained in word split // replace underscore with letter // track guesses remaining // loss condition
		// for (var i = 0; i < wordSplit.length + 1; i++) {
		// 	if (keyPress[i] === wordSplit[j]) { 
		// 	 underscore.replace(underscore[k].CharAt(keyPress[i]), keyPress[i])
		// 	}

// 			else {
// 				(guessesLeft = guessesLeft - 1)
// 			}
// 		}
// 	}
// }

// function endGame (event) {


// 	if (guessesLeft = 0) {
// 		(losses = losses + 1);
// 		alert("You lose. Your defeat will be etched in the annals of history and your great, great, great, grandchildren will be ashamed to call you their ancestor becfore you are inevitably forgotten.");
// 	}
		
// 	for (var i === 0; i < underscores.length + 1, i++) {
// 		if (underscores[i] !== "_") {
// 			(wins = wins + 1)
// 			alert('You have fought the good fight and your blood has enriched the yard of Ned Flanders');
// 		}
// 	}
// }

// function resetGame (event) {

// 	for (var i === 0; i < underscores.length + 1, i++) {
// 	if (underscores[i] !== "_") {
// 		prompt('Would you like to play again?');
// 			if (prompt = true) {
// 				startGame();
// 			}
// 			else {
// 				alert("Fine, I don't want you playing my game anyway. I put a lot of work into this. I honestly hope your butt falls off.")
// 			}
// 		}
// 	}

// 	if (guessesLeft === 0) {
// 		prompt('Would you like to play again?');

// 		if (prompt = true) {
// 			startGame();
// 		}
// 		else {
// 			alert('You reek of fear and your sons will be feckless cucks. Begone, coward.');
// 		}

// 	}

// }

	
  // End Game
  // if guesses === 0 then prompt user Want to play again?

  // if playAgain === true 
  // 	startGame();
  // else "Thanks For Paying!";



startGame();
playGame();
// endGame();
// resetGame();

// start game sets parameters
//function for listening to keylogs and checking to see if letter check to see if it's been type, check to see if it matches
//win/loss condition
// reset game



// Win/Loss Counter
