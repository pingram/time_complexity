(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("library", [], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomString = __webpack_require__(1);
	
	console.log(randomString(10));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	// for now only tests functions that accept strings; return the amount of seconds that the test took
	
	function timeTest(n, fn) {
	  var strToTest = randomString(n);
	  var startTime = new Date();
	  fn(strToTest);
	  var endTime = new Date();
	  return (endTime - startTime) / 1000;
	}
	
	// Based off of Nic Rabboy's function (https://www.thepolyglotdeveloper.com/2015/03/create-a-random-nonce-string-using-javascript/)
	function randomString(length) {
	  var includeLowercase = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	  var includeUppercase = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var includeNums = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
	
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
	
	  for (var i = 0; i < length; i++) {
	    result += possible.charAt(Math.floor(Math.random() * possible.length));
	  }
	  return result;
	}
	
	module.exports = randomString;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=library.js.map