var express = require('express');
var app = express();
const path = require('path');

app.use('/client', express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/'));
})

app.listen(3000, function() {
  console.log('Server listening on port 3000');
})
