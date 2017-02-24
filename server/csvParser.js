var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var distanceCalculator = require('./distance.js');

var inputFile= __dirname + '/data/store-locations.csv';

module.exports = function distanceChecker(locationLat, locationLong) {
  var closestStore;
  let headerRowPass = false;

  var p = new Promise(function(resolve, reject) {
    fs.createReadStream(inputFile)
      .pipe(parse({delimiter: ','}))
      .on('data', function(csvrow) {
        if (headerRowPass) {
          if (!closestStore) {
            closestStore = csvrow;
          }
          if (distanceCalculator(closestStore[6], locationLat, closestStore[7], locationLong)
            > distanceCalculator(csvrow[6], locationLat, csvrow[7], locationLong)) {
              closestStore = csvrow;
            }
        }
        headerRowPass = true;
      })
      .on('end',function() {
        resolve(closestStore);
      });
    })
  p.then(store => store);
  return p;
  }
