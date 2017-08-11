var express = require('express');
var session = require('express-session');

const MongoStore = require('connect-mongo')(session);

var app = express();

app.use(
	session({
		secret: 'recommand 128 bytes random string',
		store: new MongoStore({ url: 'mongodb://localhost:27017/sessiondb' }),
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 60 * 1000 }
	})
);

app.get('/', function(req, res) {
	if (req.session.isVisit) {
		// res.send('<p>歡迎再次來訪</p>');
		req.session.isVisit++;
		req.session.other++;
		res.send('<p>第 ' + req.session.isVisit + '次來此頁面</p>' + req.session.other);
	} else {
		req.session.isVisit = 1;
		req.session.other = 1;
		res.send('歡迎第一次來訪');
		console.log(req.session);
	}
});

app.listen(3000, function() {
	console.log('Ready for 3000...');
});
