const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json());

// Default display of Hello world! at localhost:3000
app.get('/', (req, res) => {
	res.send('Hello world!')
  console.log(req)
})

app.get('/v1/itws', (req, res) => {
  res.send(req.body)
})

// GET Request for the URL localhost:3000/v1/itws/4500 to display JSON data
app.get('/v1/itws/4500', (req, res) => {
	res.json({
    "course": "Web Science",
    "number": "ITWS 4500",
    "Description": "A course about web science"
  })
})

// Erica: Web Systems
app.get('/v1/itws/2110', (req, res) => {
	res.json({
    "course": "Web Systems",
    "number": "ITWS 2110",
    "Description": "A course about web systems"
  })
})

// Lauren: Capstone
app.get('/v1/itws/4100', (req, res) => {
	res.json({
	'course': 'IT & Web Science Capstone',
	'number': 'ITWS 4100',
	'Description': 'ITWS Capstone course'
	})
})

// Virginia: MITR
app.get('/v1/itws/4310', (req, res) => {
	res.json({
    "course": "Managing IT Resources",
    "number": "ITWS 4310",
    "Description": "A course about managing IT resources"
  })
})

// Manya: Data Science
app.get('/v1/itws/4350', (req, res) => {
 res.json({
	"course": "Data Science",
	"number": "ITWS 4350",
	"Description": "A course about data science"
  })
})

// Helena : Intro to Information Technology and Web Science
app.get('/v1/itws/1100', (req, res) => {
  res.json({
   "course": "Introduction to Information Technology and Web Science",
   "number": "ITWS 1100",
   "Description": "An introduction course to the field of information technology and web science"
   })
 })

 //Post Request
 app.post('/v1/itws/1220', (req, res) => {
  res.json({
   "course": "IT and Society",
   "number": "ITWS 1220",
   "Description": "A course about IT and Society"
   })
 })

 app.delete('/', (req, res) => {
  res.send('This is a request for deletion.')
 })


app.listen(port, () => {
	console.log('Listening on *:3000')
})