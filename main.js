

var http = require('http'),
    fs = require('fs');

var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
app.listen(3000, function() { console.log('listening')});


// var app = http.createServer(function(request, response){
// 	fs.readFile(__dirname + "boxer.html", "utf-8", function(err, data){
// 		response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(data);
//         response.end();
// 	});
// }).listen(3000); 