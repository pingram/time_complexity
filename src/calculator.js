'use strict';

var calculator = {};

// for now only tests functions that accept strings; return the amount of seconds that the test took
calculator.timeTest = function(n, fn) {
  const strToTest = calculator.randomString(10);
  const startTime = new Date();
  for (let i = 0; i < n; i++) {
    fn(strToTest);
  }
  const endTime = new Date();
  return (endTime - startTime);
}

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

// Based off of Nic Rabboy's function (https://www.thepolyglotdeveloper.com/2015/03/create-a-random-nonce-string-using-javascript/)
calculator.randomString = function(length, includeLowercase = true, includeUppercase = true, includeNums = true) {
  let result = '';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  let possible = '';

  if (includeLowercase) {
    possible += lowercase;
  }
  if (includeUppercase) {
    possible += uppercase;
  }
  if (includeNums) {
    possible += nums;
  }

  for(var i = 0; i < length; i++) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return result;
}

module.exports = calculator;
