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


app.get('/helena', (req, res) => {
	res.sendFile(__dirname + '/lab6/src/app/helena/helena.component.html');
});

app.get('/helenaETL1', function(req, res){

	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("luna");

        dbo.collection("Home Page").find({}, {projection: {Pain_Onset_vs_Menarche: 1}}).toArray(function(err, result) {

			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'Pain_Onset_vs_Menarche'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);

			// Export the data to a physical CSV file
			fs.writeFile('osullh-data.csv', csv, function(err) {
				if (err) throw err;
				console.log('Write to osullh-data.csv successfully, Pain Onset vs Menarche Data saved!');
			});

			db.close();
        });
    });
});

app.get('/helenaETL2', function(req, res){
	const mongodb = require("mongodb").MongoClient;
	const fastcsv = require("fast-csv");
	const ws = fs.createWriteStream("Home_Page.csv");
	const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/luna?retryWrites=true&w=majority";

	mongodb.connect(
	  url,
	  (err, client) => {
		if (err) throw err;
		client
		  .db("luna").collection("Home Page").find({},{projection:{_id:0}}).toArray((err, data) => {
			if (err) throw err;
			console.log(data);
			fastcsv
			  .write(data, { headers: true })
			  .on("finish", function() {
				console.log("Write to Home_Page.csv successfully, All Home Page Data saved!");
				res.send("CSV Downloaded.")
			  })
			  .pipe(ws);

			client.close();
		  });
	  }
	);
});

app.get('/virginia', (req, res) => {
	res.sendFile(__dirname + '/lab6/src/app/virginia/virginia.component.html');
});

app.get('/virginia/etl1', function(req, res){
	console.log("ETL1");
	res.sendFile(__dirname + '/lab6/src/app/virginia/virginia-etl1.html');
});
app.get('/virginia/etl2', function(req, res){
	console.log("ETL2");
	res.sendFile(__dirname + '/lab6/src/app/virginia/virginia-etl2.html');
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
	const ws = fs.createWriteStream("cycle_tracking1.csv");
	const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/luna?retryWrites=true&w=majority";

	mongodb.connect(
	  url,
	  (err, client) => {
		if (err) throw err;
		client
		  .db("luna").collection("Cycle Tracking").find({},{projection:{_id:0,'username':1,'startdate':1,'periodlength':1,'cyclelength':1}}).toArray((err, data) => {
			if (err) throw err;
			console.log(data);
			fastcsv
			  .write(data, { headers: true })
			  .on("finish", function() {
				console.log("cycle_tracking.csv created successfully!");
				res.send("CSV Successfully Downloaded.")
			  })
			  .pipe(ws);

			client.close();
		  });
	  }
	);
	});

app.get('/manyadisplay1', function(req, res){
	const mongodb = require("mongodb").MongoClient;
	const fastcsv = require("fast-csv");
	const ws = fs.createWriteStream("cycle_tracking2.csv");
	const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/luna?retryWrites=true&w=majority";

	mongodb.connect(
		url,
		(err, client) => {
		if (err) throw err;
		client
			.db("luna").collection("Cycle Tracking").find({},{projection:{_id:0,'username':1,'mood':1,'sleep':1}}).toArray((err, data) => {
			if (err) throw err;
			console.log(data);
			fastcsv
				.write(data, { headers: true })
				.on("finish", function() {
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

app.get('/laurenETL1', function(req, res){
	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("luna");

        dbo.collection("Shopping Page").find({}).toArray(function(err, result) {

			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'Product Name', 'Link', 'Category'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);

			// Export the data to a physical CSV file
			fs.writeFile('lauren-data.csv', csv, function(err) {
				if (err) throw err;
				console.log('File saved!');
				res.download('lauren-data.csv');
			});

			db.close();
        });
    });
});

app.get('/laurenETL2', function(req, res){
	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("luna");

        dbo.collection("Shopping Page").find({ "category": "Category" }).toArray(function(err, result) {
            
			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'Product Name', 'Link', 'Category'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);

			// Export the data to a physical CSV file
			fs.writeFile('lauren-data2.csv', csv, function(err) {
				if (err) throw err;
				console.log('File saved!');
				res.download('lauren-data2.csv');
			});

			db.close();
        });
    });
});


app.get('/simi', (req, res) => {
	res.sendFile(__dirname + '/lab6/src/app/simi/simi.component.html');
});

app.get('/SimiETL1', function(req, res){

	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("luna");

        dbo.collection("Symptoms").find({}, {projection: {Symptoms: 1}}).toArray(function(err, result) {


			constfields = ['_id', 'Symptoms'];
			const json2csvParser = new Json2csvParser({ fields });
			const csv = json2csvParser.parse(result);

			fs.writeFile('simi-data.csv', csv, function(err) {
				if (err) throw err;
				console.log('Write to simi-data.csv successfully, Symptoms saved!');
			});

			db.close();
        });
    });
});

app.get('/SimiETL2', function(req, res){
	const mongodb = require("mongodb").MongoClient;
	const fastcsv = require("fast-csv");
	const ws = fs.createWriteStream("simi-data.csv");
	const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/luna?retryWrites=true&w=majority";

	mongodb.connect(
	  url,
	  (err, client) => {
		if (err) throw err;
		client
		  .db("luna").collection("Symptoms").find({},{projection:{_id:0}}).toArray((err, data) => {
			if (err) throw err;
			console.log(data);
			fastcsv
			  .write(data, { headers: true })
			  .on("finish", function() {
				console.log("Write to simi-data.csv successfully, All Symptoms Data saved!");
				res.send("CSV Downloaded.")
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
