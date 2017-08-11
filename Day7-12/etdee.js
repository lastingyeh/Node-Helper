var emitter = require('events').EventEmitter;
var util = require('util');

function LoopProcessor(num) {
	var self = this;

	console.log(self);

	setTimeout(function() {
		for (var i = 1; i <= num; i++) {
			self.emit('BeforeProcess', i);
			console.log(`Processing number ${i}`);
			self.emit('AfterProcess', i);
		}
	}, 2000);

	return this;
}

util.inherits(LoopProcessor, emitter);

var loop = new LoopProcessor(3);

loop.on('BeforeProcess', function(data) {
	console.log(`About to start the process for ${data}`);
});

loop.on('AfterProcess', function(data) {
	console.log(`Completed processing ${data}`);
});
