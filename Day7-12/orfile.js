var fs = require('fs');

fs.open('TestFile.txt', 'r', function(err, fd) {

	if (err) return console.log(err);

	var buffer = new Buffer(1024);

	fs.read(fd, buffer, 0, buffer.length, 0, function(err, bytes) {
		if (err) throw err;

		if (bytes > 0) {
			console.log(`${bytes} 字元被讀取`);
			console.log(buffer.slice(0, bytes).toString());
		}

		fs.close(fd, function(err) {
			if (err) throw err;
		});
	});
});
