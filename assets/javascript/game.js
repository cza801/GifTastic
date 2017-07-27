
//Creataing an array for the buttons. When more are added, they will be added to this array.
var topics = ['lakes', 'mountains', 'beaches', 'one+piece', 'berserk', 'overwatch' ];

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

		$("#buttons-go-here").append(bt);		
		};
	};
 
 	//This will add topics from the form when the button is clicked
 	$("#add-topic").on("click", function(event) {
 		//Not sure what this does, but adding since it looks important
 		event.preventDefault();
 		//This will grab the text from the for
 		var topicE = $("#topic-input").val().trim();

 		//This will add the topic to our Topics array
 		topics.push(topicE);

 		//Here we call for the buttons to be rendered/created again
 		createButtons(); 		
 	});

//This will grab the topic button that is seleted and do a search for it. 
$("button").on("click", function() {

	var searchedTerm = $(this).attr("data-search")
	var queryUrl ="http://api.giphy.com/v1/gifs/search?q=" +
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

			var gifDiv = $("")
			
		}


	});
});

createButtons();