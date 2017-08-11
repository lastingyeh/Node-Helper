var express = require('express');

var app = express();

app.get('/', function(req, res) {
	var sql = require('mssql');

	var config = {
		user: 'sa',
		password: 'xxxxx',
		server: 'localhost\\SQLEXPRESS',
		database: 'SchoolDB'
	};

	sql.connect(config, function(err) {
		if (err) console.log(err);

		var request = new sql.Request();

		request.query('select * from student', function(err, recordset) {
			if (err) console.log(err);

			res.send(recordset);
		});
	});
});

var server = app.listen(5050, function() {
	console.log('Server is running!');
});
