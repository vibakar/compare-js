## ABOUT: ##

  Compares two sentences and returns the number of words matched between them.

## INSTALL: ##

  `$ npm install compare-js`

## USAGE ##

``` javascript
const logger = require('log4js').getLogger();
const Compare = require('compare-js');

let sentence1 = 'how to create array of objects in javascript';
let sentence2 = 'how to create an object Array in Javascript';

let wordCount = Compare(sentence1, sentence2);
// wordCount will be 6
logger.debug('word count :'+wordCount);
```
## WORKING ##

  In the above two sentences 'how','to','create','array','in','javascript' are the matching words.so the wordCount is 6.
