let logger = require('log4js').getLogger();

let Compare = require('../src/compare');
let wordCount = 0;

let sentence1 = 'how to create array of objects in javascript';
let sentence2 = 'how to create an object array in Javascript';
wordCount = Compare(sentence1, sentence2);
logger.debug('word count :'+wordCount);

let sentence3 = '';
let sentence4 = 'how to create an object array in Javascript';
wordCount = Compare(sentence3, sentence4);
logger.debug('word count :'+wordCount);
