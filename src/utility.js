'use strict';

var utility = {};

// Based off of Nic Rabboy's function (https://www.thepolyglotdeveloper.com/2015/03/create-a-random-nonce-string-using-javascript/)
utility.randomString = function(length, includeLowercase = true, includeUppercase = true, includeNums = true) {
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

module.exports = utility;
