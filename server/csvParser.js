var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var distanceCalculator = require('./distance.js');

var inputFile='./data/store-locations.csv';

function distanceChecker(locationLat, locationLong) {
  // because we know the format of the data
  // we can use a magic number to determine
  // which column the city is in, which is 3
  let closestStore;
  let headerRowPass = false;

  fs.createReadStream('./data/store-locations.csv')
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
        //do something wiht csvData
        console.log(closestStore);
        console.log('done!');
      });
    }

    distanceChecker(37.75906800000001, -122.4290225);
