const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => {
	console.log('Listening on *:3000')
})

app.get('/getsinger',urlencodedParser,function(req,res){
    response={fname:req.body.fname}
    response={fname:req.body.lname}
    console.log(response)
}
)
