var mongodata = require('./monlistdata');
var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.set('views', 'MyViews');

mongodata.personList(function(recordset) {
	app.get('/', function(req, res) {
		res.render('personTp', { personList: recordset });
	});
});

var server = app.listen(3000, function() {
	console.log('Server is running...');
});
