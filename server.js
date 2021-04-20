const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');

const MongoClient = require('mongodb').MongoClient;
// had to URL encode the password bc it contained an '@' - VB
const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/lab5?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(path.join(__dirname, './luna/dist/luna')));

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
    res.end();
	// res.sendFile(path.join(__dirname + '/luna/src/app/learn/learn.component.html'));
});


app.post('/manyapost', function (req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/luna?retryWrites=true&w=majority";
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
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
// app.get('/display', function(req, res){
//   const mongodb = require("mongodb").MongoClient;
//   const fastcsv = require("fast-csv");
//   const ws = fs.createWriteStream("cycle_tracking4.csv");
//   const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/luna?retryWrites=true&w=majority";
//
//   mongodb.connect(
//     url,
//     (err, client) => {
//       if (err) throw err;
//       client
//         .db("luna").collection("Cycle Tracking").find({}).toArray((err, data) => {
//           if (err) throw err;
//           console.log(data);
//           fastcsv
//             .write(data, { headers: true })
//             .on("finish", function() {
//               console.log("Write to cycle_tracking.csv successfully!");
//               res.send("CSV Successfully Downloaded.")
//             })
//             .pipe(ws);
//
//           client.close();
//         });
//     }
//   );
//   });

// src="http://maps.googleapis.com/maps/api/js?sensor=false";
// let auth = new google.auth.OAuth2(
//     '619493635707-ntjk96ok34dvi62ngq5cnq0k6q8aqmjt.apps.googleusercontent.com',
//     'tuy3Q5SgioaVcxqgNyc4TcQZ',
//     'http://localhost:3000'
// );
// let calendar = google.calendar({version: 'v3', auth});
//     calendar.events.insert({
//         auth: auth,
//         calendarId: 'primary',
//         resource: {
//             'summary': 'Period Started',
//             'description': 'Period Started',
//             'start': {
//                 'dateTime':startdate+'T06:00:00.000Z',
//                 'timeZone':'utc'
//             },
//             'end': {
//                 'dateTime': '2019-01-01T07:00:00.000Z',
//                 'timeZone':'utc'
//             },
//             'colorId' : 4 ,
//             'sendUpdates':'all',
//             'status' : 'confirmed'
//         },
//     }, (err, res) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(res.data);
//         }
//     });


app.listen(port, () => console.log(`Application listening on port ${port}!`))
