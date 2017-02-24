var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var calculateDistance = require('./distance.js');

app.use(express.static('client'));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client'));
});

app.post('/nearestStore', (req,res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
  console.log(calculateDistance(37.000404, -122.3453, 37.658343, -122.47283));
});
