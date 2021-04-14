const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient;
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
// had to URL encode the password bc it contained an '@' - VB
const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/lab5?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
	// res.sendFile(__dirname + '/lab6/src/app/app.component.html');
	res.send("Main Page");
});

app.get('/erica', (req, res) => {
	res.sendFile(__dirname + '/lab6/src/app/erica/erica.component.html');
});

app.get('/ericaETL', function(req, res){
	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("luna");

        dbo.collection("Users").find({}).toArray(function(err, result) {
            
			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'age', 'app_mode'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);

			// Export the data to a physical CSV file
			fs.writeFile('erica-data.csv', csv, function(err) {
				if (err) throw err;
				console.log('File saved!');
			});

			db.close();

			// Build an HTML string to send information to the front end
            var html = "<!DOCTYPE html><html><head></head><body><h1>All ages of users in the Database</h1><ul>";
            for (let i=0; i<result.length; i++) {
                html += '<li>' + result[i]['age'] +'</li>';
            }
            html += "</ul></body></html>";
            res.send(html);
        });
    });
});

app.listen(port, () => {
	console.log('Listening on *:3000')
});