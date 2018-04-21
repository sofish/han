# Han(汉)

[![Build Status](https://travis-ci.org/sofish/han.png)](https://travis-ci.org/sofish/han)
[![Coverage Status](https://coveralls.io/repos/sofish/han/badge.png)](https://coveralls.io/r/sofish/han)

Generate romanized Chinese strings

## Installation

```bash
$ npm install han
```

## Usage

### 1. `han.letter()`

```js
han.letter(chinese ,[separator ,[callback(err, data)])
```
Use the `letter` method to generate a romanization without tone marks:

```js
var han = require('han');

han.letter('中文') // zhongwen
han.letter('中文', '-') // zhong-wen
```

```js
/* @param `chinese` {String} Chinese word
 * @param [optional] `separator` {String} separator for the letters
 * @param [optional] `callback(err, result)` {Function} if a callback is specified,
 *   the program will use an async way to do the translation
 */
```

### 2. `han.pinyin(chinese)`

Use the `pinyin` method to generate an array of lists consisting of all possible
pronunciations of corresponding characters:

```js
han.pinyin('中文') // [ [ 'zhōng', 'zhòng' ], [ 'wén', 'wèn' ] ]

// Mixed text is allowed, e.g.:
han.pinyin('My Chinese name is 小鱼(sofish)');
// [ 'My Chinese name is ', [ 'xǐao' ], [ 'yú' ], '(sofish)' ]
```

#### __Why return arrays?__

Certain characters may have multiple pronuncations, primarily
differing in tone, the syllable itself in rare cases, or both.
An example of such a character is **的**, which can be read as
either *de* or *dí*.
Output is generated regardless of context.

## Testcase

```sh
$ npm install han
# or git clone git://github.com/sofish/han.git

$ cd node_modules/han && make test
```

## Translating Messy Code

Messy code? orginal file is here [testcase.js](https://github.com/sofish/han/blob/master/testcase.js):
```js
var han = require('han');

console.log('orginal：要实现 Speaker Deck 那种中文转拼音的')
console.log(han.letter('要实现 Speaker Deck 那种中文转拼音的', '-'), '\n')
// orginal：要实现 Speaker Deck 那种中文转拼音的
// yao-shi-xian-speaker-deck-na-zhong-zhong-wen-zhuan-pin-yin-de

han.letter('中aaaaa中¢∞§¶•誩aa文喳aa', function(err, result){
  if(err) throw err;
  console.log('orginal：中aaaaa中¢∞§¶•誩aa文喳aa')
  console.log('callback：' + result, '\n')
  // orginal：中aaaaa中¢∞§¶•誩aa文喳aa
  // callback：zhong aaaaa 4e2da2 221ea7b6 2022 jing aa wen zha aa
});

han.letter('中EnglishWords¢∞§¶•ªº文', '-', function(err, result){
  console.log('orginal：中EnglishWords¢∞§¶•ªº文')
  console.log('callback：' + result)
  // original：中EnglishWords¢∞§¶•ªº文
  // callback：zhong-englishwords-221ea7b6-2022aaba-wen
});


console.log('original: My Chinese name is 小鱼(sofish)')
console.log(han.pinyin('My Chinese name is 小鱼(sofish)'))
// original: My Chinese name is 小鱼(sofish)
// [ 'My Chinese name is ', [ 'xǐao' ], [ 'yú' ], '(sofish)' ]

console.log('original: #$%^&*中23¢∞§¶•ª52849文@#$%^&*(意思，还有英文：english')
console.log(han.pinyin('#$%^&*中23¢∞§¶•ª52849文@#$%^&*(意思，还有英文：english'))
// original: #$%^&*中23¢∞§¶•ª52849文@#$%^&*(意思，还有英文：english
// [ '#$%^&*', [ 'zhōng', 'zhòng' ], '23¢∞§¶•ª52849', [ 'wén', 'wèn' ],
//  '@#$%^&*(', [ 'yì' ], [ 'sī', 'sì', 'sāi' ], '，', [ 'húan', 'hái', 'xúan' ],
//  [ 'yǒu', 'yòu' ], [ 'yīng', 'yāng' ], [ 'wén', 'wèn' ], '：english' ]
```

## License

Licensed under [MIT](https://github.com/sofish/han/blob/master/LICENSE).


## Contributors:

Character pronunciation data file courtesy of [fayland](https://github.com/fayland/perl-lingua-han/tree/master/Lingua-Han-PinYin/lib/Lingua/Han/PinYin).
