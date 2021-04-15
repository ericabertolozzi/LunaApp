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

app.get('/ericaETL', function(req, res){
	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("luna");

        dbo.collection("Users").find({}).toArray(function(err, result) {
            
			// Convert the JSON data in 'result' to CSV
			const csvFields = ['_id', 'age', 'app_mode'];
			const json2csvParser = new Json2csvParser({ csvFields });
			const csv = json2csvParser.parse(result);

			// have browser download csv when pressing button --NOT DONE YET

			// Export the data to a physical CSV file
			fs.writeFile('erica-data.csv', csv, function(err) {
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