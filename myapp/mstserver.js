var express = require('express');
var app = express();
app.use(express.static('public'));

app.use('/hello', express.static(__dirname + '/Images'));

var server = app.listen(5050, function() {
	console.log('node server is running!');
});
