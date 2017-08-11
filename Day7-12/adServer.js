const http = require('http');

const server = http
	.createServer(function(req, res) {
		let pageMessage;

		res.writeHead(200, { 'Content-Type': 'text/html' });

		switch (req.url) {
			case '/':
				pageMessage = 'This is Home Page';
				break;
			case '/student':
				pageMessage = 'This is student Page';
				break;
			case '/admin':
				pageMessage = 'This is admin Page';
				break;
			default:
				pageMessage = '';
		}

		res.write(getPage(pageMessage));

		if (pageMessage === '') res.end('Invalid Request');

		res.end();
	})
	.listen(5000);

function getPage(pageString) {
	return `<html><body>${pageString}</body></html>`;
}
