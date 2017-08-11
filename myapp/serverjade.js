var express = require('express');
var app = express();

// set view engine
app.set('view engine', 'jade');
app.set('views', 'MyViews');

app.get('/', function(req, res) {
  // render sample.jade
	res.render('sample');
});

var server = app.listen(3000, function() {
	console.log('Node server is running...');
});
