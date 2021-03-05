const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/tracker.html', function(req, res){
    res.sendFile(__dirname + '/tracker.html');
});

app.get('/explore.html', function(req, res){
    res.sendFile(__dirname + '/explore.html');
});

app.get('/profile.html', function(req, res){
    res.sendFile(__dirname + '/profile.html');
});
app.use(express.static('.'));

app.listen(port, () => console.log(`Application listening on port ${port}!`))