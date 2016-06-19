'use strict';


// for now only tests functions that accept strings; return the amount of seconds that the test took
function timeTest(n, fn) {
  const strToTest = randomString(n);
  var startTime = new Date();
  fn(strToTest);
  var endTime = new Date();
  return (endTime - startTime) / 1000;
}

// Based off of Nic Rabboy's function (https://www.thepolyglotdeveloper.com/2015/03/create-a-random-nonce-string-using-javascript/)
function randomString(length, includeLowercase = true, includeUppercase = true, includeNums = true) {
  var result = '';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var nums = '0123456789';
  var possible = '';

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

module.exports = randomString;
