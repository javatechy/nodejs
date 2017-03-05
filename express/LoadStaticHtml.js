var fs = require("fs");
var express = require("express");
var config = JSON.parse(fs.readFileSync("json/config.json"));
var host = config.host;
var port = config.port;

// similar to http.createServer();
var app = express();

// loads json direcory and load all content when requested
app.use(express.static(__dirname + "/html"));
app.get("/", function(request, response) {
	response.send("Hello");
});

app.listen(port, host, function() {
	log("Listening at" + port);
});

function log(str) {
	console.log(str);
};