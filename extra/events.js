const events = require('events');

var emitter = new events.EventEmitter();

var after = function(times, callback) {
	var count = 0;
	var results = {};

	return function(key, value) {
		results[key] = value;
		count++;
    console.log('count',count)
		if (count === times) {
			callback(results);
		}
	};
};

// 設定第幾次 進行回調函數
var done = after(2, function(results) {
	console.log(results);
});

// register events
emitter.on('done', done);

// 觸發回調
emitter.emit('done', 'temp', 'data');
// emitter.emit('done', 'temp1', 'data1');
