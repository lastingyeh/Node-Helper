var http = require('http');
var nStatic = require('node-static');

var fileServer = new nStatic.Server('./public');

http.createServer(function(req, res) {
  
}).listen(5050);

console.log('http server running...')