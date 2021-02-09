$(document).ready(function() {
	getNewArticles();
});


// Setting up the delay
const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}


// Asynchronous function that displays 5 articles every 5 seconds
const getNewArticles = async () => {
	// Loop through JSON data in groups of 5
	while (true) {
		counter = 0;
		
		let articlesForPage = [];
		for (var j=0; j<json.length; j++) {
			console.log(j);
			articlesForPage.push(json[j]);
			counter++;
			if (counter == 5) {
				populatePage(articlesForPage);
				// wait 4 seconds to populate the page with more articles
				await sleep(2000);
				counter = 0;
				articlesForPage = [];
			}
		}	
	}
}

// Parameter data is an array containing 5 articles
function populatePage(data) {

	// Clear out the html text that is already there
	$("#articles").html("");
	var innerHTML = "";
	// Loop through each article in data and format the html for it
	for (var i=0; i<5; i++) {
		var len = data[i]["description"][0].length;

		innerHTML += '<div class="row"><div class="article">';
		innerHTML += '<p class="article-title"><a href="' +
			data[i]["link"][0] + '">' + data[i]["title"] + '</a></p><br>';
		/* The first letter of the description has a special style so
		   slicing is used to get the rest of the text */
		if (len != 0) {
			innerHTML += '<p class="article-description"><span>'+
				data[i]["description"][0][0] + '</span>' +
				data[i]["description"][0].slice(1, len) + '</p>';
		}
		innerHTML += '</div></div>';

	}
	$("#articles").html(innerHTML);
}
