var fs = require("fs");
var express = require("express");
var config = JSON.parse(fs.readFileSync("json/config.json"));
var host = config.host;
var port = config.port;

// similar to http.createServer();
var app = express();

app.get("/", function(request, response) {
	response.send("Hello");
});


app.listen(port, host, function() {
	log("Listening at" + port);
});

function log(str) {
	console.log(str);
};