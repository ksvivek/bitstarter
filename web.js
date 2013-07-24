var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    console.log("Got a GET request for /");
    response.send(fs.readFileSync('index.html').toString());
});

app.get(/^(.+)$/, function(request, response) {
    console.log("Got a GET request for " + request.params[0]);
    response.header('Content-Type','image/png');
    response.send(fs.readFileSync(request.params[0].slice(1)));
});


var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port);
});
