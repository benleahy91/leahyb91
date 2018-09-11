var foodList = ["cheeseburger", "taco", "pizza", "chocolate", "spaghetti", "sandwich", "sushi", "soup", "babies", "salad", "hot dog", "pancakes", "buffalo wings", "ice cream", "fries"]

function displayButtons() {
	for (i = 0; i < foodList.length; i++) {
		var button = $("<button>");
		button.addClass("food");
		button.attr("data-name", foodList[i]);
		button.text(foodList[i]);
		$(".gif-buttons").append(button);
	}
}

function renderButtons() {
	console.log(this)
	var food = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DGTFDaoh1rEWin03Rjdu3d9Rc0nVb414&q=" + food + "&limit=10&offset=0&rating=PG&lang=en"
	$.ajax({
	url: queryURL,
	method: "GET"
	}).done(function(response) {

			// console.log(this);
			// console.log(queryURL);
			// console.log(food);

	});
}

window.onload = function() {

	displayButtons();
	$(".gif-buttons").on("click", function() {
		renderButtons();
	});
}