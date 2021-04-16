const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const MongoClient = require('mongodb').MongoClient;
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
// had to URL encode the password bc it contained an '@' - VB
const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/lab5?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(path.join(__dirname, './lab6/dist/lab6')));

app.get('/erica', (req, res) => {
	res.sendFile(__dirname + '/lab6/src/app/erica/erica.component.html');
});

app.get('/ericaETL1', function(req, res){
	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("luna");

        dbo.collection("Users").find({}, {projection: {age: 1}}).toArray(function(err, result) {
            
			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'age'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);
			
			// Export the data to a physical CSV file
			fs.writeFile('erica-dataset1.csv', csv, function(err) {
				if (err) throw err;
				console.log('Dataset 1 generated!');
				// Have browser download dataset
				res.download('erica-dataset1.csv');
			});

			db.close();
        });
    });
});

app.get('/ericaETL2', function(req, res){
	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("luna");

        dbo.collection("Users").find({}, {projection: {app_mode: 1}}).toArray(function(err, result) {
			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'app_mode'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);

			// Export the data to a physical CSV file
			fs.writeFile('erica-dataset2.csv', csv, function(err) {
				if (err) throw err;
				console.log('Dataset 2 generated!');
				// Have browser download dataset
				res.download('erica-dataset2.csv');
			});

			db.close();
        });
    });
});

app.get('/manya', (req, res) => {
	res.sendFile(__dirname + '/lab6/src/app/manya/manya.component.html');
});

app.get('/manyadisplay', function(req, res){
	const mongodb = require("mongodb").MongoClient;
	const fastcsv = require("fast-csv");
	const ws = fs.createWriteStream("cycle_tracking.csv");
	const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/luna?retryWrites=true&w=majority";
  
	mongodb.connect(
	  url,
	  (err, client) => {
		if (err) throw err;
		client
		  .db("luna").collection("Cycle Tracking").find({},{projection:{_id:0}}).toArray((err, data) => {
			if (err) throw err;
			console.log(data);
			fastcsv
			  .write(data, { headers: true })
			  .on("finish", function() {
				res.download('cycle_tracking.csv')
				console.log("cycle_tracking.csv created successfully!");
				res.send("CSV Successfully Downloaded.")
			  })
			  .pipe(ws);
  
			client.close();
		  });
	  }
	);
	});

app.listen(port, () => {
	console.log('Listening on *:3000')
});