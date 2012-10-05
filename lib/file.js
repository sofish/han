var fs = require('fs')
  , MANDARIN = __dirname + '/Mandarin.json', ENCODING = 'UTF-8'
  , code

module.exports = exports = function(callback) {
  // use cache
  if(code) return callback ? callback.call(this, null, code) : code;

  // keep async, not just require a json file
  return callback ? fs.readFile(MANDARIN, ENCODING, function(err, data) {
    code = JSON.parse(data);
    callback.call(this, err, code);
  }) : code = require('./Mandarin.json')
  //   ^ cache the json file
}
