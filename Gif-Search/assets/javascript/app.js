var foodList = ["cheeseburger", "taco", "pizza", "chocolate", "bacon", "spaghetti", "sandwich", "sushi", "soup", "babies", "salad", "hot dog", "pancakes", "buffalo wings", "ice cream", "fries", "steak", "ham"];

function displayButtons() {
	$(".gif-buttons").empty();
	for (i = 0; i < foodList.length; i++) {
		var button = $("<button>");
		button.addClass("food");
		button.addClass("btn btn-primary")
		button.attr("food-name", foodList[i]);
		button.text(foodList[i]);
		$(".gif-buttons").append(button);
	};
};

function renderButtons() {
	$("button").on("click", function() {
		var food = $(this).attr("food-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DGTFDaoh1rEWin03Rjdu3d9Rc0nVb414&q=" + food + "&limit=12&offset=0&rating=R&lang=en";
		$("#my-dude").attr("src", "assets/images/my-dude.png");
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			$("#gifs").empty();
			var results = response.data;
			for (i = 0; i < results.length; i++) {
				var gifDiv = $("<div>");
				var foodGif = $("<img>");
				foodGif.addClass("food-gif")
				foodGif.attr("src", results[i].images.fixed_height.url);
				gifDiv.append(foodGif);
				$("#gifs").prepend(gifDiv);
			};
		});
	});
};

window.onload = function() {
	displayButtons();
	renderButtons();
	$("#add-gif").on("click", function() {
		var gifEntry = $("#enter-gif").val().trim().toLowerCase();
		for (var i = 0; i < foodList.length; i++) {
			if (gifEntry === foodList[i]) {
				$("#my-dude").attr("src", "assets/images/new-food-dude.png");
				return(false);
			}
			else if (gifEntry === "") {
				$("#my-dude").attr("src", "assets/images/type-food-dude.png");
				return(false);
			}
			else if (gifEntry === "frogs" || gifEntry === "frog" || gifEntry === "frog legs") {
				$("#my-dude").attr("src", "assets/images/not-cool-dude.png");
				return(false);
			}
			else {
				foodList.push(gifEntry);
				$("#my-dude").attr("src", "assets/images/good-choice-dude.png");
				displayButtons();
				renderButtons();	
			};
		};
	});
}
