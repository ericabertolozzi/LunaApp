var newsData = []
var newsJSON = 'news.json';
var newsNum = 0;
var totalNews = 0;

$(document).ready(function() {
	/*$getNews();*/
});

// Gathers initial news json data
function getNews() {
	$.getJSON(newsJSON, function(data) {
		newsData = data;
		totalNews = data.length;
	}).then(function() {
		for (var i=0; i<5; i++) {
			let newsItem = newsData[i]; // change newsItem to correct name
			// $() template articles however in html/css 
			newsNum = (newsNum + 1) % totalNews;
		}
		// continuously get news articles using getNextNews

	});
}

function getNextNews() {
	let nextNews = newsData[newsNum];
	let prevNews = $().

	// fade in news articles to next 5 here add to css
	// css: animation-name: fade-in or fade-out
}