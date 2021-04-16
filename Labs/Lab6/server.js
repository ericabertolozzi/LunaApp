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

app.get('/virginia', (req, res) => {
	res.sendFile(__dirname + '/lab6/src/app/virginia/virginia.component.html');
});

app.get('/virginia/etl1', function(req, res){
	console.log("ETL1");
	res.sendFile(__dirname + '/virginia-etl1.html');
});
app.get('/virginia/etl2', function(req, res){
	console.log("ETL2");
	res.sendFile(__dirname + '/virginia-etl2.html');
});

// Get all 'Period' Articles
app.get('/virginiaETL1', function(req, res){
	MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("luna");
    dbo.collection("Articles").find({ "category": "General" }).toArray(function(err, result) {
			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'name', 'preview', 'link', 'category'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);
			// Export the data to a physical CSV file
			fs.writeFile('virginia-etl1.csv', csv, function(err) {
				if (err) throw err;
				console.log('File saved!');
			});
			db.close();
    });
  });
	setTimeout(() => {  res.redirect('/virginia/etl1'); }, 2000);
});

// Get all 'Period' Articles
app.get('/virginiaETL2', function(req, res){
	MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("luna");
    dbo.collection("Articles").find({ "category": "Birth Control" }).toArray(function(err, result) {
			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'name', 'preview', 'link', 'category'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);
			// Export the data to a physical CSV file
			fs.writeFile('virginia-etl2.csv', csv, function(err) {
				if (err) throw err;
				console.log('File saved!');
			});
			db.close();
    });
  });
	res.redirect('/virginia-etl2');
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

app.get('/lauren', (req, res) => {
	res.sendFile(__dirname + '/lab6/src/app/erica/lauren.component.html');
});

app.get('/laurendisplay', function(req, res){
	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("luna");

        dbo.collection("Shopping Page").find({}).toArray(function(err, result) {
            
			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'Product Name', 'Link', 'Category'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);

			// have browser download csv when pressing button --NOT DONE YET

			// Export the data to a physical CSV file
			fs.writeFile('lauren-data.csv', csv, function(err) {
				if (err) throw err;
				console.log('File saved!');
			});

			db.close();
        });
    });
});

app.listen(port, () => {
	console.log('Listening on *:3000')
});
