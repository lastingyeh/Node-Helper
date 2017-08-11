var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/nodejs', function(err, db) {
	if (err) throw err;

	console.log('mongodb is running');

	// insert(db);
	// update(db);
	// del(db);
	query(db);
	console.log('db query...');
	db.close();
	console.log('close after...');
});

// Insert
function insert(db) {
	// Insert
	db.collection('userinfo', function(err, collection) {
		collection.insert({ userid: 1, pwd: 1234567, username: 'chris' });
		collection.insert({ userid: 2, pwd: 87654321, username: 'jack' });
		collection.insert({ userid: 3, pwd: 12345678, username: 'lasting' });

		collection.count(function(err, count) {
			if (err) throw err;
			console.log('Total rows:', count);
		});
	});
}

// Update
function update(db) {
	// Update
	db.collection('userinfo', function(err, collection) {
		collection.update({ userid: 1 }, { $set: { pwd: 8888888, username: 'James' } }, { w: 1 }, function(
			err,
			result
		) {
			if (err) throw err;
			console.log('Document Updated Successfully');
		});
	});
}

// Delete
function del(db) {
	db.collection('userinfo', function(err, collection) {
		collection.remove({ userid: 2 }, { w: 1 }, function(err, result) {
			if (err) throw err;
			console.log('Document Removed Successfully!');
		});
	});
}

// Select
function query(db) {
	db.collection('userinfo', function(err, collection) {
		collection.find({ username: 'James' }).toArray(function(err, items) {
			if (err) throw err;

			console.log(`found ${items.length} results`);
		});
	});

	console.log('db select...');
}
