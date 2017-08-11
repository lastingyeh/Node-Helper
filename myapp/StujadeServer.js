var express = require('express');
var mysql = require('mysql');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'nodejs',
	port: 3306
});

var app = express();

app.set('view engine', 'jade');
app.set('views', 'MyViews');

app.get('/', function(req, res) {
	pool.getConnection(function(err, conn) {
		if (err) {
			console.log(err);
		} else {
			conn.query('select * from Student', function(err, rows, fields) {
				if (err) {
					console.log(err);
				} else {
					res.render('stuTp', { studentList: rows });
				}
				conn.release();
			});
		}
	});
});

var server = app.listen(3000, function() {
	console.log('Server is running!');
});
