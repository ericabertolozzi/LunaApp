// var request = require('request'); // "Request" library
//
// var client_id = '0a53587a9840439ba6b8fbb87b02e74f'; // Your client id
// var client_secret = 'client-secret'; // Your secret
//
// // your application requests authorization
// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };
//
// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//
//     // use the access token to access the Spotify Web API
//     var token = body.access_token;
//     var options = {
//       url: 'https://api.spotify.com/v1/users/jmperezperez',
//       headers: {
//         'Authorization': 'Bearer ' + token
//       },
//       json: true
//     };
//     request.get(options, function(error, response, body) {
//       console.log(body);
//     });
//   }
// });
//
// // I'm thinkin we can just replace the artist ID each time and call:
// // curl -X "GET"
// // "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=ES"
// // -H "Accept: application/json" -H "Content-Type: application/json"
// // -H "Authorization: Bearer BQBO56_JagoAky4dYGVcexo0P-4frde47VYwFW0FW3zy4gtAqCDbqzW6lLu0leC8GYUt3E6yRPnMnlcwdO75s53O6Lvwj0iDk3m12joAaRSb9uWFt8GAqvh6gD7B6DX8ZM89R_3op10llQ"
//
// // line 2 = the API request, the random numbers is the artist ID
// // line 3 = json stuffs
// // line 4 = my OAuth Token
//
// // Maybe we can execute that shell command with node.js
// // or we can find a way to normally call the request

// URL encode: https%3A%2F%2Floalhost%3A3000
// https://accounts.spotify.com/authorize?client_id=f59627e7fcb842ff8c712ebe30c3d9d7&response_type=code&redirect_uri=https%3A%2F%2Floalhost%3A3000&state=34fFs29kd09
// spotifyApi.setAccessToken('BQBO56_JagoAky4dYGVcexo0P-4frde47VYwFW0FW3zy4gtAqCDbqzW6lLu0leC8GYUt3E6yRPnMnlcwdO75s53O6Lvwj0iDk3m12joAaRSb9uWFt8GAqvh6gD7B6DX8ZM89R_3op10llQ');

// var code = 'AQC1niWFZNVV3Gmz1jPNFiR7cCjoCO5GXWRlubjS109X6iba8E6pvXpSRls_IDmV-fXWBHHI_rW7IVSvHhQ8nEGLH0a0deGJwcFTEWicZ9hApYE0qNgsrpUUMYInyrBdHsQ7B5mOkDqMNFhHMpuqRRl3iH8VOB-1GF71QK0dWZ9QAgmURWB0kacnvOjOS13PzsvZZ2FHIsy1_ozz0gA';
