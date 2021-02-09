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
		innerHTML += '<div class="col-sm-6 col-md-4 item">';
		// innerHTML += '<a href=' + data[i] + '><img class="img-fluid" src="assets/img/desk.jpg"></a>';
		innerHTML += '<h3 class="name">' + data[i]["title"] + '</h3>';
		innerHTML += '<p class="description">' + data[i]["description"] + '</p>';
		innerHTML += '<a class="action" href="' + data[i]["link"][0] + '"><i class="fa fa-arrow-circle-right"></i></a></div>';
	}
	$("#articles").html(innerHTML);
}

function getNextNews() {
	let nextNews = newsData[newsNum];
	let prevNews = $();

	// fade in news articles to next 5 here add to css
	// css: animation-name: fade-in or fade-out
}
