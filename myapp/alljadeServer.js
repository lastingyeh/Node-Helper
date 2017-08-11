var mongodata = require('./monlistdata');
var msdata = require('./mslistdata');

var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', 'MyViews');

app.get('/person', function(req, res) {
	mongodata.personList(function(recordset) {
		res.render('personPageTP', { personList: recordset });
	});
});

app.get('/student', function(req, res) {
	msdata.stuList(function(recordset) {
		res.render('studentPageTP', { studentList: recordset });
	});
});

var server = app.listen(3000, function() {
	console.log('Server is running!');
});
