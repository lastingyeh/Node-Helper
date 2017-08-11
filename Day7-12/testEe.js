var events = require('events');

var e = new events.EventEmitter();

e.on('firstEvent', function(data) {
	console.log('first subscriber', data);
});

e.addListener('secondEvent', function() {
	console.log('secondEvent trigger');
});

e.emit('firstEvent', 'first event trigger...');
e.emit('secondEvent');
