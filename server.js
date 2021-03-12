const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/tracker.html', function(req, res){
    res.sendFile(__dirname + '/tracker.html');
});

app.get('/explore.html', function(req, res){
    res.sendFile(__dirname + '/explore.html');
});

app.get('/profile.html', function(req, res){
    res.sendFile(__dirname + '/profile.html');
});

app.get('/learn.html', function(req, res){
  html1 = `
  <html>
  <head>
    <title>Learn</title>
    <link rel="icon" href="moon.png">
    <!-- Load icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./master.css"/>
    <link rel="stylesheet" type="text/css" href="./learn.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet">
  </head>
  <body>
    <!-- Start of Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light" id="full-navbar">
      <a class="navbar-brand" href="./index.html"><img src='logo.png' height='70px'/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./calendar.html">Calendar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./tracker.html">Tracker</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./shop.html">Shop</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Learn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./settings.html">Settings</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="./profile.html">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- End of Navbar  -->
    <div class="content" align="center">
      <h1 class="heading">LEARN FROM OUR COLLECTION OF VERIFIED ARTICLES</h1>

      <form class="example" align="center">
        <input type="text" placeholder="Search.." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>

      <div class="articles-container">
  `;

  html2 = `
  </div></div>
  <!-- Beginning of Footer  -->
  <div class="footer">
      <p class="footer-text">Luna Copyright &copy; 2021.</p>
  </div>
</body>
</html>
  `;

  let rawdata = fs.readFileSync('learn.json');
  let articles = JSON.parse(rawdata)["articles"];
  var htmladd = '';
  for( i=0; i < articles.length; i++ ) {
    var name = articles[i]["name"];
    var preview = articles[i]["preview"];
    var link = articles[i]["link"];
    htmladd += `
      <div class="article">
        <h1 class="text-left"><a class="name" href="`+link+`">`+name+`</a></h1>
        <p>`+preview+`</p>
        <div>
          <div class="more label text-right"><a href="`+link+`">Read more</a></div>
        </div>
        <div class="clear"></div>
        <hr>
      </div>
    `;
  }
  // console.log(htmladd);
  res.write(html1+htmladd+html2);

  // res.sendFile(__dirname + '/learn.html');
});
app.use(express.static('.'));

app.listen(port, () => console.log(`Application listening on port ${port}!`))
