var fs = require("fs");
var express = require("express");
var config = JSON.parse(fs.readFileSync("json/config.json"));
var host = config.host;
var port = config.port;

// similar to http.createServer();
var app = express();

app.get("/users/:id", function(request, response) {
	var id = request.params.id;
	var user = users[id];
	if (user) {
		response.status(200).send(
				"user  info found=>" + user.name + " type => " + user.type);
	} else {
		response.status(404).send("Sorry We cannot send  for user id =>" + id);
	}
});

var users = {
	"1" : {
		"name" : "John",
		"type" : "human"
	},
	"2" : {
		"name" : "Bond",
		"type" : "jams"
	}
}

app.listen(port, host, function() {
	log("Listening at" + port);
});

function log(str) {
	console.log(str);
};