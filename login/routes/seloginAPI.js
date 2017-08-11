var express = require('express');
var seloginAPI = express.Router();

var isLogin = false;

seloginAPI.get('/', function(req, res) {
	var name = 'guest';
	var LogTime = 1;

	isLogin = false;

	if (req.session.firstName && req.session.lastName) {
		name = req.session.firstName + ' ' + req.session.lastName;
		isLogin = true;
		LogTime = req.session.time;
	}

	res.render('index', { title: 'Express', member: name, logStatus: isLogin, time: LogTime });
});

seloginAPI.post('/post', function(req, res) {
	if (req.body.firstName == '' || req.body.lastName == '') {
		return res.redirect('Login.html');
	} else if (req.body.firstName == req.session.firstName && req.body.lastName == req.session.lastName) {
		req.session.time++;
		return res.redirect('/session');
	} else {
		req.session.firstName = req.body.firstName;
		req.session.lastName = req.body.lastName;
		req.session.time = 1;

		return res.redirect('/session');
	}
});

seloginAPI.get('/logout', function(req, res) {
	req.session.destroy();
	return res.redirect('/session');
});

module.exports = seloginAPI;
