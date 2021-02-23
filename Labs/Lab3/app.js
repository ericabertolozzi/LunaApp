var request = require('request'); // "Request" library

var client_id = '0a53587a9840439ba6b8fbb87b02e74f'; // Your client id
var client_secret = 'e0a2215f246e4a00a55742e31af52a15'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});

// 1 I'm thinkin we can just replace the artist ID each time and call:
// 2 curl -X "GET" 
// 3 "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=ES" 
// 4 -H "Accept: application/json" -H "Content-Type: application/json" 
// 5 -H "Authorization: Bearer BQBO56_JagoAky4dYGVcexo0P-4frde47VYwFW0FW3zy4gtAqCDbqzW6lLu0leC8GYUt3E6yRPnMnlcwdO75s53O6Lvwj0iDk3m12joAaRSb9uWFt8GAqvh6gD7B6DX8ZM89R_3op10llQ"

// 3 = the API request, the random numbers is the artist ID
// 4 = json stuffs
// 5 = my OAuth Token

// Maybe we can execute that shell command with node.js
// or we can find a way to normally call the request