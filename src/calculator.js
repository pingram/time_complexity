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
  return (endTime - startTime) / 1000;
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
