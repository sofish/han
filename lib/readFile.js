var fs = require('fs')
  , MANDARIN = __dirname + '/Mandarin.json', ENCODING = 'UTF-8'

module.exports = exports = function(callback) {
  var args = arguments
  return args.length ? fs.readFile(MANDARIN, ENCODING, function(err, data) {
    data = JSON.parse(data);
    args[0].call(this, err, data);
  }) : JSON.parse(fs.readFileSync(MANDARIN, ENCODING))
}