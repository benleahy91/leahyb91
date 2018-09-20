var config = {
	apiKey: "AIzaSyCRBotmcXlQajfrlgIO6bwbCdovAkDeEso",
	authDomain: "traintime-6f156.firebaseapp.com",
	databaseURL: "https://traintime-6f156.firebaseio.com",
	projectId: "traintime-6f156",
	storageBucket: "traintime-6f156.appspot.com",
	messagingSenderId: "733630802719"
};
firebase.initializeApp(config);
var database = firebase.database();

database.ref().on("value", function(snapshot) {

}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

$("#submit").on("click", function() {
	var trainName = $("name-form").val().trim();
	var trainDest = $("destination-form").val().trim();
	var trainFrequency = $("frequency-form").val().trim();
	var nextArrival = $("arival-form").val().trim();
	var minutesAway = 0;

	console.log(trainName)
});





