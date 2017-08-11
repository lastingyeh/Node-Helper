var fs = require('fs');

fs.writeFile('TestFile.txt', '你好嗎？', function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Write operation complete.');
	}
});
