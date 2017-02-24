var describe = require('mocha').describe;
var suite = require('mocha').suite;
var test = require('mocha').test;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;
var distance = require('./server/distance.js');

suite('distance', function() {
  describe('is the correct distance returned', function() {
    test('distance calculated is equal to 3rd party calculation', function() {
      // have to floor it due to significant digits
      assert(Math.floor(distance(39.4597162, 33.5039854, -76.3166657, -81.7117482)) === Math.floor(818.48));
    })
  });
});
