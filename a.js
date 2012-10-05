var han = require('./han');

console.log(han.letter('中文'));
console.log(han.letter('要实现 Speaker Deck 那种中文转拼音的', '*'));

han.letter('中aaaaa中¢∞§¶•誩aa文喳aa', function(err, result){
	if(err) throw err;
	console.log('异步结果：' + result);
});

han.letter('中文', '-', function(err, result){
	console.log('异步结果：' + result);
});
