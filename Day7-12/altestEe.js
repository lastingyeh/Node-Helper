var emitter = require('events').EventEmitter;
var e = new emitter();

e.addListener('first', function(data) {
	console.log('first', data);
});

e.addListener('second', function(data) {
	console.log('second', data);
});

e.emit('first', 'first trigger');
e.emit('second', 'second trigger');
