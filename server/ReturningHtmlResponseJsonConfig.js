var http = require("http");
var fs = require("fs");
log("Starting ");
var config = JSON.parse(fs.readFileSync("json/config.json"));
var host = config.host;
var port = config.port;
var server = http.createServer(function(request, response) {
	log("Request Recieved" + request.url);
	fs.readFile("html" + request.url, function(error, data) {
		if (error) {
			response.writeHead(404, {
				"Content-type" : "text/plain"
			});
			response.end("Sorry File Not Found");
		} else {
			response.writeHead(200, {
				"Content-type" : "text/html"
			});
			response.end(data);
		}
	})

});

server.listen(port, host, function() {
	log("Listening at" + port);
});

fs.watchFile("json/config.json", function() {
	config = JSON.parse(fs.readFileSync("json/config.json"));
	server.close();
	server.listen(config.port, config.host, function() {
		log("Port changed Listening at" + port );
	});
});
function log(str) {
	console.log(str);
};