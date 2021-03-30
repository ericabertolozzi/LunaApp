const path = require('path');
const express = require('express');
const app = express();
const port = 4200;
app.use(express.static(path.join(__dirname, './Lab4')));
var bodyParser = require('body-parser') //To help read form data.
app.use(bodyParser.urlencoded({
  extended: false
}));

// Connect to the SpotifyWebApi-------------------------------------------------
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
  clientId: 'f59627e7fcb842ff8c712ebe30c3d9d7',
  clientSecret: '24e4f9a1e4244fd88fca81e8515a9860',
  redirectUri: 'https://localhost:4200'
});

var access_token;
// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then (
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
    access_token = data.body['access_token'];
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);
var spotifyApi = new SpotifyWebApi({
  accessToken: access_token
});
//------------------------------------------------------------------------------
// Connect to MongoDB-----------------------------------------------------------
const MongoClient = require('mongodb').MongoClient;
// had to URL encode the password bc it contained an '@' - VB
const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/lab5?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
//------------------------------------------------------------------------------
app.get('/', function(req, res){
    res.sendFile(__dirname + '/Lab4/src/app/spotify/spotify.component.html');
});

app.get('/erica.html', function(req, res){
    res.sendFile(__dirname + '/Lab4/src/app/spotify/erica.html');
});

app.get('/helena.html', function(req, res){
    res.sendFile(__dirname + '/Lab4/src/app/spotify/helena.html');
});

app.get('/lauren.html', function(req, res){
    res.sendFile(__dirname + '/Lab4/src/app/spotify/lauren.html');
});

app.get('/manya.html', function(req, res){
     res.sendFile(__dirname + '/Lab4/src/app/spotify/manya.html');
     var resultarray=[]
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("lab5");
      var collection = dbo.collection("transformed");
      dbo.collection('transformed').find({},{projection:{_id:0,'Arist Name':1,'Album Name':1,Genre:1}}).toArray(function(err, docs) {
        // var x=JSON.stringify(docs);
        resultarray.push(JSON.stringify(docs));
        console.log(resultarray);
        // return res.send(resultarray);
        // console.log(x);
        // console.log(JSON.stringify(docs));
    });
      console.log("Connected")
      console.log(collection);
// });
});
});

app.post('/manyapost', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("lab5");
    var collection = dbo.collection("transformed");
    var track= req.body.track;
    var artist= req.body.name;
    var album =req.body.album;
    var date = req.body.date;
    var genre =req.body.genre;
    var data = {
      "Track Name": artist,
      "Artist Name":album,
      "Album Name":album,
      "Date":date,
      "Genre":genre
  }
  dbo.collection('transformed').insertOne(data,function(err, collection){
    if (err) throw err;
    console.log("Record inserted Successfully"); 
    res.send("Record Inserted Successfully")      
});
  });    
});

app.get('/simi.html', function(req, res){
    res.sendFile(__dirname + '/Lab4/src/app/spotify/simi.html');
});

app.get('/virginia.html', function(req, res){
  html1 = `
  <!-- virginia -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8/">
    <title>All Artists</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">

    <style>
      body, html {
        height: 100%;
        margin: 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
        font-family: 'Varela Round', sans-serif;
        background-image: linear-gradient(rgba(0,0,0,1), rgba(96,98,101,1));
        // background: rgb(0,0,0);
        // background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(96,98,101,1) 100%);
        // background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(96,98,101,1) 100%);
        // background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(96,98,101,1) 100%);
        // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#606265",GradientType=1);
      }

      h1 {
        margin-top: 2%;
        font-size: 300%;
        width: 100%;
        text-align: center;
        color: #1FD662;
        font-weight: bold;
      }

      p {
        margin-top: 2%;
        font-size: 150%
      }

      .container {
        text-align: center;
        color: white;
      }

    </style>
  </head>
  <body>
    <h1>Artists</h1>
    <div class="container">
  `;
  var artists = [];
  var images = [];

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("lab5");
    var collection = dbo.collection("transformed");
    var cursor = collection.find();
    // Execute the each command, triggers for each document
    cursor.each(function(err, item) {
        // If the item is null then the cursor is exhausted/empty and closed
        if(item == null) {
            db.close(); // you may not want to close the DB if you have more code....
            return;
        }
        var artist_id = null;
        spotifyApi.searchArtists( item['Artist Name'] )
        .then(function(data) {
          artist_id = data.body['artists']['items'][0]['id']; // Get the ID from the artist name
          spotifyApi.getArtist(artist_id)
          .then(function(data) {
            artists.push(item['Artist Name']);
            images.push(data.body['images'][0]['url']);
          }, function(err) {
            console.error(err);
          });
        }, function(err) {
          console.error(err);
        });
      });
      // Removed duplicates
      setTimeout(() => {  artists = [...new Set(artists)]; console.log(artists); }, 1000);
      setTimeout(() => {  images = [...new Set(images)]; console.log(images); }, 1000);
      setTimeout(() => {
        output = '';
        for (var i = 0; i < images.length; i++) {
          output += '<img src="' + images[i] + '" alt="image" width="150px" height="150px">';
        }
        output += '<p>';
        for (var i = 0; i < artists.length; i++) {
          output += artists[i];
          if( i != artists.length-1 ) {
            output += ', ';
          }
        }
        output += '</p></div></body>';
        setTimeout(() => {  console.log(output); }, 1000);
        res.send( html1 + output );
      }, 1000);
    });
  });

app.listen(port, () => {
	console.log('Listening on *:4200');
});
