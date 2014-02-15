var han = require('../')
var should = require('should');

describe('han', function () {
  it('letter should ok', function () {
    han.letter('中文').should.be.equal('zhongwen');
    var expect = 'yao-shi-xian-speaker-deck-na-zhong-zhong-wen-zhuan-pin-yin-de';
    han.letter('要实现 Speaker Deck 那种中文转拼音的', '-').should.be.equal(expect);
  });

  it('letter with 特殊符号', function () {
    han.letter('中aaaaa中¢∞§¶•誩aa文喳aa').should.be.equal('zhongaaaaa4e2da2221ea7b62022jingaawenzhaaa');
    han.letter('中EnglishWords¢∞§¶•ªº文', '-').should.be.equal('zhong-englishwords-221ea7b6-2022aaba-wen');
  });

  it('letter with empty', function () {
    // 空
    han.letter('中文', ' ').should.be.equal('zhong wen');
    han.letter('中文', '').should.be.equal('zhongwen');
  });

  it('pinyin should ok', function () {
    han.pinyin('My Chinese name is 小鱼(sofish)').should.be.eql([
      'My Chinese name is ',
      [ 'xǐao' ],
      [ 'yú' ],
      '(sofish)'
    ]);
    var expect = [
      '#$%^&*',
      [ 'zhōng', 'zhòng' ],
      '23¢∞§¶•ª52849',
      [ 'wén', 'wèn' ],
      '@#$%^&*(',
      [ 'yì' ],
      [ 'sī', 'sì', 'sāi' ],
      '，',
      [ 'húan', 'hái', 'xúan' ],
      [ 'yǒu', 'yòu' ],
      [ 'yīng', 'yāng' ],
      [ 'wén', 'wèn' ],
      '：english'
    ];
    han.pinyin('#$%^&*中23¢∞§¶•ª52849文@#$%^&*(意思，还有英文：english').should.be.eql(expect);
  });

  it('pinyin with empty', function () {
    han.pinyin('').should.be.eql([]);
  });

  it('pinyin with english only', function () {
    han.pinyin('words like 1234567890 only').should.be.eql(['words like 1234567890 only']);
  });

  it('pinyin with english and 特殊符号', function () {
    var expect = ['English words and ∞§¶•ª will always return itself'];
    han.pinyin('English words and ∞§¶•ª will always return itself').should.be.eql(expect);
  });
});
