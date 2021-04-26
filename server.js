const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');
var bodyParser = require('body-parser') //To help read form data.
app.use(bodyParser.urlencoded({
  extended: false
}));

const MongoClient = require('mongodb').MongoClient;
// had to URL encode the password bc it contained an '@' - VB
const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/lab5?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(path.join(__dirname, './luna/dist/luna')));


// TO DO: Change this to API stuff
app.get('/learn', (req, res) => {
  // Get all Articles
  	MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("luna");
      dbo.collection("Articles").find().toArray(function(err, result) {
        console.log( result );
        let articlesData = JSON.stringify( result );
        fs.writeFileSync( 'luna/src/assets/json/learn.json', articlesData );
  			db.close();
      });
    });
    res.send(result);
	// res.sendFile(path.join(__dirname + '/luna/src/app/learn/learn.component.html'));
});

app.get("/getButtonsData", function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("luna");
    // const categorySet = new Set();
    dbo.collection("Articles").distinct('category').then(function(arr) {
      console.log(arr);
      res.send(arr);
    });
    db.close();
  });
});

app.get("/getArticlesData", function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("luna");
    dbo.collection("Articles").find().toArray(function(err, result) {
      res.json(result);
      db.close();
    });
  });
});

app.get("/getArticlesDataCategory/category/:category", function (req, res) {
  console.log( req.params );
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("luna");
    dbo.collection("Articles").find({category: req.params.category}).toArray(function(err, result) {
      res.json(result);
      db.close();
    });
  });
});




app.post('/infopost', function (req, res) {
  console.log("Hello");
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/luna?retryWrites=true&w=majority";
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  // console.log(req);
  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("luna");
    var collection = dbo.collection("Cycle Tracking");
    var ids =req.body.id;
    var username =req.body.username;
    var startdate= req.body.startdate;
    var periodlength= req.body.periodlength;
    var cyclelength =req.body.cyclelength;
    var mood =req.body.mood;
    var sleep =req.body.sleep;
    notes=req.body.notes;
    var data = {
      "id":ids,
      "username":username,
      "startdate": startdate,
      "periodlength":periodlength,
      "cyclelength":cyclelength,
      "mood":req.body.mood,
      "sleep":req.body.sleep,
      "notes":req.body.notes
  }
  dbo.collection('Cycle Tracking').insertOne(data,function(err, collection){
    if (err) throw err;
    console.log("Record inserted Successfully");
});
  });
});


app.get('/trackerCSV', function(req, res){
	const mongodb = require("mongodb").MongoClient;
	const fastcsv = require("fast-csv");
	const ws = fs.createWriteStream("cycle_tracking2.csv");
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
				console.log("cycle_tracking.csv created successfully!");
				res.send("CSV Successfully Downloaded.")
				})
				.pipe(ws);

			client.close();
			});
		}
	);
	});

  app.get('/trackerimage',function(req,res){
    var htmlBegin = " <! DOCTYPE html ><html ><head ><h1>Mood and Sleep Trends During Cycle</h1><br><br><div id='image1'><img src='../../assets/images/moodduringcycle.png'></div><br><div id='image2'><img src='../../assets/images/sleepquality.png' width:5px></div><style > body { background-color:#ebebeb;text-align:center;";
    var htmlEnd = ";} h1{font-size-20px;text-align:center;} img{width:500px}; </ style > </ head ><body ><form method='Post'> <input type='submit' method='GET' value='Redirect' action='http://localhost:3000/'></form> </ body > </ html >";
    res.send(htmlBegin+htmlEnd)
  });

// app.get('/tracker.html', function(req, res){
//     res.sendFile(__dirname + '/tracker.html');
// });
//
// app.get('/explore.html', function(req, res){
//     res.sendFile(__dirname + '/explore.html');
// });
//
// app.get('/profile.html', function(req, res){
//     res.sendFile(__dirname + '/profile.html');
// });
//
// app.get('/learn.html', function(req, res){
//
//   let rawdata = fs.readFileSync('learn.json');
//   let articles = JSON.parse(rawdata)["articles"];
//   var htmladd = '';
//   for( i=0; i < articles.length; i++ ) {
//     var name = articles[i]["name"];
//     var preview = articles[i]["preview"];
//     var link = articles[i]["link"];
//     htmladd += `
//       <div class="article">
//         <h1 class="text-left"><a class="name" href="`+link+`">`+name+`</a></h1>
//         <p>`+preview+`</p>
//         <div>
//           <div class="more label text-right"><a href="`+link+`">Read more</a></div>
//         </div>
//         <div class="clear"></div>
//         <hr>
//       </div>
//     `;
//   }
//   // console.log(htmladd);
//   res.write(html1+htmladd+html2);
//
//   // res.sendFile(__dirname + '/learn.html');
// });
// app.use(express.static('.'));
//
//

app.listen(port, () => console.log(`Application listening on port ${port}!`))
