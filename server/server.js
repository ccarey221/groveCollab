var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var storeFinder = require('./csvParser.js');

app.use(express.static('client'));
// app.use(express.static('data'));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client'));
});

app.post('/nearestStore', (req,res) => {
  console.log(storeFinder(req.body.lat, req.body.lng), 'THIS IS IT');
  res.writeHead(200, {"Content-Type": "application/json"});
  storeFinder(req.body.lat, req.body.lng).then(function(data) {
    res.end(JSON.stringify({store: data}))
  });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
