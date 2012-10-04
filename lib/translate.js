var translate = {}
  , readFile = require('./readFile')
  , make = require('./make')
  , util = require('./util')

/* translate Chinese word into English letter
 * @param `chinese` {String} Chinese word
 * @param [optional] `separator` {String} separator for the letters
 * @param [optional] `callback(err, result)` {Function} if a callback is specified,
 *   the program will use an async way to do the translation
 * @return `result` or `undefined [if a callback is specified]`
 * @example
 *   var han = require('han');
 *   han.letter('中文') // zhong wen
 *   han.letter('中文', '-') // zhong-wen
 *   han.letter('中文', function(err, result){
 *     console.log(result) // zhong wen
 *   })
 */
translate.letter = function(){
  var args = [].slice.call(arguments)
    , originalArgs = args.slice()
    , chinese = args.shift()
    , last = args.pop()
    , separator

  callback = last && util.jsType(last) === 'Function' ? last : null;

  // consider the '0' in javascript and etc.
  separator = !args.length ? ' ' : args[0];

  return callback ? readFile(function(err, data){
    data = make(chinese, data, separator);
    callback.call(this, err, data);
  }) : make(chinese, readFile(), separator);

}

module.exports = exports = translate;