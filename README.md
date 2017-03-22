## ABOUT: ##

  Compares two sentences and returns the number of words matched between them.

## INSTALL: ##

  $ npm install compare-strings

## USAGE ##

let logger = require('log4js').getLogger();

let Compare = require('../src/compare');
let wordCount = 0;

let sentence1 = 'how to create array of objects in javascript';
let sentence2 = 'how to create an object Array in Javascript';

wordCount = Compare(sentence1, sentence2);
// wordCount will be 6
logger.debug('word count :'+wordCount);
