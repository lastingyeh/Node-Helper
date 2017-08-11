var fs = require('fs');

fs.open('TestFile.txt', 'r+', function(err, fd) {
	if (err) throw err;

	console.log('File open success!');
});
