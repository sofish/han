var util = require('./util')

// program to covert words to letter
module.exports = exports = function(str, data, separator){

  console.log(separator.length);

  // replace spaces to `_` make it more easy to split words in a right form
  var arr = str.replace(/\s+/g,'_').split(/\b/)
    , separatorReg = new RegExp('\\' + separator + '\+', 'g')

  // translating, yay!!!
  arr.forEach(function(item, i){
    if(util.isChinese(item)) arr[i] = util.toLetter(item, data);
  })

  console.log(util.flatten(arr).join(separator), separatorReg);

  // consider that the `_` we have made
  return util.flatten(arr).join(separator).replace(/_/g, separator).replace(separatorReg, separator).toLowerCase();
}