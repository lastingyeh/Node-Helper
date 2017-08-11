var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// bodyParser.urlencoded则是用来解析我们通常的form表单提交的数据
// 请求头中包含这样的信息： Content-Type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// send 靜態文件
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/submit-student-data', function(req, res) {
	var name = req.body.firstName + ' ' + req.body.lastName;

	res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function() {
	console.log('Node Server is running');
});
