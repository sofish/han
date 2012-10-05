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

## Testcase

```sh
$ npm install han
# or git clone git://github.com/sofish/han.git

$ cd node_modules/han && node testcase.js
```

## Translating Messy Code

Messy code? orginal file is here [testcase.js](https://github.com/sofish/han/blob/master/testcase.js):
```js
var han = require('han');

console.log('原文：要实现 Speaker Deck 那种中文转拼音的')
console.log(han.letter('要实现 Speaker Deck 那种中文转拼音的', '-'), '\n')
// 原文：要实现 Speaker Deck 那种中文转拼音的
// yao-shi-xian-speaker-deck-na-zhong-zhong-wen-zhuan-pin-yin-de


han.letter('中aaaaa中¢∞§¶•誩aa文喳aa', function(err, result){
	if(err) throw err;
	console.log('原文：中aaaaa中¢∞§¶•誩aa文喳aa')
	console.log('异步结果：' + result, '\n')
	// 原文：中aaaaa中¢∞§¶•誩aa文喳aa
  // 异步结果：zhong aaaaa 4e2da2 221ea7b6 2022 jing aa wen zha aa
});

han.letter('中EnglishWords¢∞§¶•ªº文', '-', function(err, result){
	console.log('原文：中EnglishWords¢∞§¶•ªº文')
	console.log('异步结果：' + result)
	// 原文：中EnglishWords¢∞§¶•ªº文
  // 异步结果：zhong-englishwords-221ea7b6-2022aaba-wen
});
```

### License

Licensed under [MIT](https://github.com/sofish/han/blob/master/LICENSE).


### Contributers:

Specail thank to [fayland](https://github.com/fayland/perl-lingua-han/tree/master/Lingua-Han-PinYin/lib/Lingua/Han/PinYin) for providing the unicode table of Chinese.

