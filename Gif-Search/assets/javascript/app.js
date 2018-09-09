var foodList = ["cheeseburger", "taco", "pizza", "chocolate", "spaghetti", "sandwich", "sushi", "soup", "babies", "salad", "hot dog", "pancakes", "buffalo wings", "ice cream", "fries"]
var food = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DGTFDaoh1rEWin03Rjdu3d9Rc0nVb414&q=" + food + "&limit=10&offset=0&rating=PG&lang=en"

function displayButtons() {
	for (i = 0; i < foodList.length; i++) {
		var button = $("<button>");
		button.addClass("food");
		button.attr("data-name", foodList[i]);
		button.text(foodList[i]);
		$(".gif-buttons").append(button);
	}
}


window.onload = function() {

	displayButtons();
	$(".gif-buttons").on("click", function() {
		$.ajax( {
		url: queryURL,
		method: "GET"
		}).done(function(response) {
			console.log(response)
			console.log(response.data)

			var gifURL = response.data.image_original_url;
			var foodGif = $("<img>");
			var results = response.data;

			for (i = 0; i < foodList.length; i++) {

				$(".gifs").attr("src", results[i].images.fixed_height.url);
				foodGif.attr("alt", "food-gif");
				$(".gifs").prepend(foodGif);
			}
		});
	});
}