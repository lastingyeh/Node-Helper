var http = require('http');
var jade = require('jade');

var data = jade.renderFile('./MyViews/sample2.jade');

var server = http.createServer(function(req, res) {
	if (req.url == '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });

		res.write(data);

		res.end();
	} else {
		res.end('Invalid Request');
	}
});

server.listen(3000);
console.log('Node.js web server at port 3000 is running...');
