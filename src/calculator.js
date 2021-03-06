'use strict';

const utility = require('./utility.js');

var calculator = {};

// for now only tests functions that accept strings; return the amount of seconds that the test took
calculator.timeTest = function(n, fn) {
  const strToTest = utility.randomString(10);
  const startTime = new Date();
  for (let i = 0; i < n; i++) {
    fn(strToTest);
  }
  const endTime = new Date();
  return (endTime - startTime);
}

// This function runs through the timeTest a number of times as determined by the three constants
// maxTimeForTest, minTimeForTest, and increaseFactor and returns an array with the results
// in pairs of [n, avgTimeTakenLastTest]
calculator.collectTests = function(fn) {
  // these 3 numbers were determined by trial and error for a couple linear functions and could use
  // optimization
  const maxTimeForTest = 1000;
  const minTimeForTest = 10;
  const increaseFactor = 1.2

  let results = [];
  let n = 1;
  let avgTimeTakenLastTest = 0;

  while (avgTimeTakenLastTest < maxTimeForTest) {
    console.log(n);
    let totalTimeForTest = 0;
    for (let i = 0; i < 3; i++) {
      totalTimeForTest += this.timeTest(n, fn);
    }
    avgTimeTakenLastTest = totalTimeForTest / 3;
    if (avgTimeTakenLastTest > minTimeForTest && avgTimeTakenLastTest < maxTimeForTest) {
      results.push([n, avgTimeTakenLastTest]);
    }
    n *= increaseFactor;
    console.log(avgTimeTakenLastTest);
  }
  return results;
}

module.exports = calculator;
