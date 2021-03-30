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
// had to URL encode the password bc it contained an '@' - VB
const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/lab5?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//------------------------------------------------------------------------------
app.get('/', function(req, res){
    res.sendFile(__dirname + '/Lab4/src/app/spotify/spotify.component.html');
});

app.get('/erica', function(req, res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("lab5");
        var collection = dbo.collection("transformed");
        const query = { "Genre" : "Pop" };
        const cursor = collection.find(query);
        var html = "<!DOCTYPE html><html><head></head><body><h1>List of Pop Songs in the Database</h1><ul>";
        // Execute the each command, triggers for each document
        cursor.each(function(err, item) {
            // If the item is null then the cursor is exhausted/empty and closed
            if(item == null) {
                db.close(); // you may not want to close the DB if you have more code....
                return;
            }
            console.log(item['Track Name']);
            // otherwise, send the item to the front end
            html += "<li>" + item['Track Name'] + " by " + item['Artist Name'] + "</li>";
        });
        html += "</ul></body></html>";
        res.send(html);
    });
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
        // otherwise, do something with the item
        console.log(item);
    });
  });
  res.sendFile(__dirname + '/Lab4/src/app/spotify/virginia.html');
});

app.listen(port, () => {
	console.log('Listening on *:4200');
});
