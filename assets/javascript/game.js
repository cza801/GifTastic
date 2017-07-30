
//Creating an array for the buttons. When more are added, they will be added to this array.
var topics = ['lakes', 'mountains', 'beaches', 'one piece', 'berserk', 'full metal alchemist', 'overwatch', 'heroes of the storm' ];

	//Ill be rendering the topics into buttons here. 
	function createButtons(){
	//ill start by clearing out any buttons to prevent duplicates
	$("#buttons-go-here").empty();
	//Here, we are for looping to getting each topic and creating the button tag for em.
	for (var i = 0; i < topics.length; i++) {
		
		var bt = $("<button>");

		bt.addClass("topic");

		bt.attr("data-search", topics[i]);

		bt.text(topics[i]);

		console.log(bt);

		$("#buttons-go-here").append(bt);		
		};
	};
 
 	//This will add topics from the form when the button is clicked
 	$("#add-topic").on("click", function(event) {
 		//I believe this makes it so the page does not reload.
 		event.preventDefault();
 		//This will grab the text from the for
 		var topicE = $("#topic-input").val().trim();

 		//This will add the topic to our Topics array
 		topics.push(topicE);

 		//Here we call for the buttons to be rendered/created again
 		createButtons(); 		
 	});

//This will grab the topic button that is seleted and do a search for it. 
$("#buttons-go-here").on("click", "button", function() {

	var searchedTerm = $(this).attr("data-search")
	var queryUrl ="https://api.giphy.com/v1/gifs/search?q=" +
	        searchedTerm + "&api_key=dc6zaTOxFJmzC&limit=10";


	$.ajax({
		url: queryUrl,
		method: "GET"
	}).done(function(response){

		//console logging the response so that we can get the information from the object
		console.log(response);

		//Making a variable to type out less
		var results = response.data;

		//creating a for loop for the results
		for (var i = 0; i < results.length; i++) {

			var gifDiv = $("<div>");
			var p = $("<p>");

			$("p").text("Rating:" + results[i].rating);

			var topImg = $("<img>");

			topImg.attr("src", results[i].images.fixed_height_small_still.url);
			topImg.attr("data-still", results[i].images.fixed_height_small_still.url);
			topImg.attr("data-state", "still");
			topImg.attr("data-animate", results[i].images.fixed_height_small.url);

			gifDiv.addClass("floater");

			gifDiv.append(p);

			gifDiv.append(topImg);

			$("#gifs-go-here").prepend(gifDiv);
			
		}


	});
});

	$("#gifs-go-here").on("click", "img", function(){

		var state = $(this).attr("data-state")
		var anna = $(this).attr("data-animate")

		if (state === "still"){
			$(this).attr("src", anna);
			$(this).attr("data-state", "animated");
		} else{
			$(this).attr("src", $(this).attr("data-still"));
			$(this).attr("data-state", "still");
		}
	});


createButtons();