var newsData = []
var newsJSON = 'news.json';
var newsNum = 0;
var totalNews = 0;

$(document).ready(function() {
	let articlesForPage = [];
	for (var i=0; i<5; i++) {
		articlesForPage.push(json[i]);
	}
	populatePage(articlesForPage);
});

$(document).ready(function() {
    $("#sound").get(0).play();
});

// Gathers initial news json data
function getNews() {
	$.getJSON(newsJSON, function(data) {
		console.log(data);
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

// Parameter data is an array containing 5 articles
function populatePage(data) {
	console.log(data);
	$("#articles").html("");
	var innerHTML = "";
	for (var i=0; i<5; i++) {
		var len = data[i]["description"][0].length;

		innerHTML += '<div class="row"><div class="article">';
		innerHTML += '<p class="article-title"><a href="' + data[i]["link"][0] + '">' + data[i]["title"] + '</a></p><br>';
		innerHTML += '<p class="article-description"><span>'+ data[i]["description"][0][0] + '</span>' + data[i]["description"][0].slice(1, len) + '</p>';
		innerHTML += '</div></div>';

	}
	$("#articles").html(innerHTML);
}

function getNextNews() {
	let nextNews = newsData[newsNum];
	let prevNews = $();

	// fade in news articles to next 5 here add to css
	// css: animation-name: fade-in or fade-out
}
