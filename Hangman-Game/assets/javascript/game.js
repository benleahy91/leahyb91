//Global Variables
var dogCelebs = ['Woof Blitzer', 'Bark Cuban', 'Mick Wagger', 'Julio Bones', 'Alex Ofetchkin', 'Jason Beagle', 'Hillary Ruff', 'Pet Farvre', 'Waggie Gyllenhall'];
var wins = 0;
var losses = 0;


function startGame() {

	var guessesLeft = 12;
	var wordSplit = [];
	var guessWord = [];
	var wrongGuesses = [];

	// Pick Word
	var randomWord = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];
	
	// Split
	var wordSplit = randomWord.split('');

	//Underscores
	wordSplit = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];

	wordSplit = wordSplit.replace(/\s/g, '');

	for (var i = 0; i < wordSplit.length; i++) {
		guessWord.push('_');
	}

		guessWord = guessWord.join('   ');

	//Guess Word
	document.getElementById("guessWord").innerHTML = (guessWord);
	// Letters Guessed
	document.getElementById('wrongGuesses').innerHTML = (wrongGuesses);
	//Guesses Remaining
	document.getElementById('guessesLeft').innerHTML = (guessesLeft);
	// Wins
	document.getElementById('wins').innerHTML = (wins);
	// Losses
	document.getElementById('losses').innerHTML = (losses);

}

function playGame (event) {

	var guessesLeft = 12;
	var wordSplit = [];
	var guessWord = [];
	var wrongGuesses = [];

	var randomWord = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];
	
	var wordSplit = randomWord.split('');

	wordSplit = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];

	wordSplit = wordSplit.replace(/\s/g, '');

	for (var i = 0; i < wordSplit.length; i++) {
		guessWord.push('_');
	}

	guessWord = guessWord.join('   ');

	console.log(wordSplit);
	console.log(guessWord);

	function checkLetter (letter) {

		document.addEventListener ('keyPress', playGame, false);

		document.getElementById('keyPress').innerHTML = keyPress;
	
		document.getElementById('keyCode').innerHTML = keyCode;

		document.onkeyup = function(event) {
	
			var keyCode = event.keyCode;
			var keyPress = String.fromCharCode(event.keyCode).toUpperCase();
			var letterInWord = false;
			var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

			console.log(keyPress);

			for (var i = 0; i < wrongGuesses.length; i++) {
				if (alphabet.indexOf(keyPress) === -1) {
					console.log('That is not a letter');
				}

				else if (keyPress === wrongGuesses[i]) {
					letterInWord === true;
					checkGuess();
				}
			}
		}
	}
}
// 	function checkGuess (e) {
// 		for (var i = 0; i < wordSplit.length -1; i++)

// 	}
// }

	// for (var i = 0; i < wordSplit.length; i++) {
	// 	if (letterInWord === true) {
	// 		guessWord.push(keyPress)
	// 	}
	// }




startGame();
playGame();


// start game
// play game
	// check letter
	// if (letter is in alphaet) {
	// 	if { letter is not in guessedLetters
	// 		push keyPress to lettersGuessed
	// 		guess(letter);
	//

