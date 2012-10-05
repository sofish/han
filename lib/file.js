var fs = require('fs')
  , MANDARIN = __dirname + '/Mandarin.json', ENCODING = 'UTF-8'

module.exports = exports = function(callback) {
  return callback ? fs.readFile(MANDARIN, ENCODING, function(err, data) {
    data = JSON.parse(data);
    callback.call(this, err, data);
  }) : JSON.parse(fs.readFileSync(MANDARIN, ENCODING))
}
