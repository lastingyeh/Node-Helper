var MongoClient = require('mongodb').MongoClient;

module.exports.personList = function(callback) {
	MongoClient.connect('mongodb://localhost:27017/nodejs', function(err, db) {
		db.collection('Persons', function(err, collects) {
			collects.find().toArray(function(err, items) {
				if (err) throw err;
				db.close();
				callback(items);
			});
		});
	});
};
