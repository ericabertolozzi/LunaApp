// server init + mods
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

// server route handler
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// connect to mongodb
var db = mongoose.connection;
db.on('error', console.error);
mongoose.connect('mongodb://localhost/mychat');

// mongodb schemas
var chatMessage = new mongoose.Schema({
  username: String,
  message: String
});
var Message = mongoose.model('Message', chatMessage);

// user connected even handler
io.on('connection', function(socket){
  
  // log & brodcast connect event
  console.log('a user connected');
  
  // log disconnect event
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  // message received event handler
  socket.on('message', function(msg){
    // log chat msg
    console.log('message: ' + msg);
    
    // broadcast chat msg to others
    socket.broadcast.emit('message', msg);

    //  //joins room 
    //  socket.emit("join room", {
    //   roomname: "testroom",
    //   username: username
    // })

    // socket.on('join', function(room){
    //   socket.room = room;
    //   socket.join(room);
    // });

    // create sound in browser to alert new msg
    var aSound = document.createElement('audio');
    aSound.setAttribute('src', 'beep.wav');
    aSound.play();

    // save message to db
    var message = new Message ({
      message : msg
    });
    message.save(function (err, saved) {
      if (err) {
	return console.log('error saving to db');
      }
    })
  });
});

// start server
http.listen(3000, function(){
  console.log('Server up on *:3000');
});