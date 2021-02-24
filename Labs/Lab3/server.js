const express = require('express');
const app = express();
const port = 3000;
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: 'f59627e7fcb842ff8c712ebe30c3d9d7',
  clientSecret: '24e4f9a1e4244fd88fca81e8515a9860',
  redirectUri: 'https://localhost:3000'
});

var access_token;

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

console.log( "PLEASE WORK" );
console.log( access_token );

// var spotifyApi = new SpotifyWebApi({
//   accessToken: 'BQCF0gRKGdajztZoRc5O6uNwIFKvsTAcdFoCHpsVfBFnAdzKgSaEW0sfxpBJWhB2xfpD3U0Qst9ktmzRNgc'
// });
//
// // Get an artist's top tracks
// spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
//   .then(function(data) {
//     console.log(data.body);
//     }, function(err) {
//     console.log('Something went wrong!', err);
//   });

//------------------------------------------------------------------------------

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/pitbull', function(req, res){
    res.send("pitbull");

    // curl -X "GET"
    // "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=ES"
    // -H "Accept: application/json" -H "Content-Type: application/json"
    // -H "Authorization: Bearer BQBO56_JagoAky4dYGVcexo0P-4frde47VYwFW0FW3zy4gtAqCDbqzW6lLu0leC8GYUt3E6yRPnMnlcwdO75s53O6Lvwj0iDk3m12joAaRSb9uWFt8GAqvh6gD7B6DX8ZM89R_3op10llQ"
});


app.listen(port, () => {
	console.log('Listening on *:3000');
});

// app.get('/getsinger',urlencodedParser,function(req,res){
//     response={fname:req.body.fname}
//     response={fname:req.body.lname}
//     console.log(response)
// }
// )


// curl -X "GET"
// "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=ES"
// -H "Accept: application/json" -H "Content-Type: application/json"
// -H "Authorization: Bearer BQBO56_JagoAky4dYGVcexo0P-4frde47VYwFW0FW3zy4gtAqCDbqzW6lLu0leC8GYUt3E6yRPnMnlcwdO75s53O6Lvwj0iDk3m12joAaRSb9uWFt8GAqvh6gD7B6DX8ZM89R_3op10llQ"
