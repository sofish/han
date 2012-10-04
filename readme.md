# Han(汉)

[![Build Status](https://travis-ci.org/sofish/han.png)](https://travis-ci.org/sofish/han)

a module for tanslating Chinese(汉字) to pinyin.

### Installation

```bash
$ npm install han
```

### Usage

Use the `letter` method to translate Chinese in to english letter:

```js
var han = require('han');

han.letter('中文') // zhong wen
han.letter('中文', '-') // zhong-wen
han.letter('中文', function(err, result){
  console.log(result) // zhong wen
})
```

The `letter` method has 3 params by default, the can all be _**optional**_, it depends on you(^^). follow the message below, you can also find it at [lib/translate.js](https://github.com/sofish/han/blob/master/lib/translate.js):

```js
/* @param `chinese` {String} Chinese word
 * @param [optional] `separator` {String} separator for the letters
 * @param [optional] `callback(err, result)` {Function} if a callback is specified,
 *   the program will use an async way to do the translation 
 */
```

### License

Licensed under [MIT](https://github.com/sofish/han/blob/master/LICENSE).


### Contributers:

Specail thank to [fayland](https://github.com/fayland/perl-lingua-han/tree/master/Lingua-Han-PinYin/lib/Lingua/Han/PinYin) for providing the unicode table of Chinese.

