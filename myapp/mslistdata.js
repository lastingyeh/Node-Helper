var mysql = require('mysql');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'nodejs',
	port: 3306
});

module.exports.stuList = function(callback) {
	pool.getConnection(function(err, conn) {
		conn.query('select * from student', function(err, rows, fields) {
			if (err) {
				console.log(err);
			} else {
				callback(rows);
			}
		});
	});
};
