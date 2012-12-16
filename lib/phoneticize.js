var notation = {
    1: "āēīōūǖ"
  , 2: "áéíóúǘ"
  , 3: "ǎěǐǒǔǚ"
  , 4: "àèìòùǜ"
  , 5: "aeiouü"
}

// phoneticizing yay,yay,yay!
module.exports = exports = function(words) {

  var tmp = []

  words.forEach(function(word){
    var hasNote = /[1-5]$/.test(word)
      , note = hasNote ? word.slice(-1) : 5
      , char = hasNote ? word.slice(0, -1) : word
      , result

    if(note === 5) return tmp.push(char.toLowerCase());

    result = char.toLowerCase().replace('v','ü').replace(/([aeiouü])/, function(i, match){
      var at = notation[5].indexOf(match)
      return notation[note].charAt(at);
    })

    tmp.push(result);
  })

  return tmp;
}