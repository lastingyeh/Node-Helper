var fs = require('fs');

fs.appendFile('TestFile.txt', '新增內容 \r\n', function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Append operation complete.');
	}
});
