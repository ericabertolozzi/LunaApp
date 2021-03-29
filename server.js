const path = require('path');
const express = require('express');
const app = express();
const port = 4200;
app.use(express.static(path.join(__dirname, './Lab4')));
var bodyParser = require('body-parser') //To help read form data.
app.use(bodyParser.urlencoded({
  extended: false
}));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://barnev:.mUNYTL8Ga.6q2@@cluster0.pacdp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

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
});

app.get('/simi.html', function(req, res){
    res.sendFile(__dirname + '/Lab4/src/app/spotify/simi.html');
});

app.get('/virginia.html', function(req, res){
    res.sendFile(__dirname + '/Lab4/src/app/spotify/virginia.html');
});

app.listen(port, () => {
	console.log('Listening on *:4200');
});

