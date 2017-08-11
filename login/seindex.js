var express = require('express');
var session = require('express-session');

const MongoStore = require('connect-mongo')(session);

var bodyParser = require('body-parser');
var routerSession = require('./routes/seloginAPI');

var app = express();

app.use(
	'/session',
	session({
		secret: 'recommand 128 bytes random string',
		store: new MongoStore({ url: 'mongodb://localhost:27017/sessiondb' }),
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 600 * 1000 }
	})
);

app.set('view engine', 'jade');

app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use('/session', routerSession);

app.listen(3000, function() {
	console.log('Ready...for 3000');
});
