var http = require("http");
var fs = require("fs");
log("Starting ");
var host = "127.0.0.1";
var port = 8081;
var server = http.createServer(function(request, response) {
	log("Request Recieved" + request.url);
	fs.readFile("Html" + "/hello.html", function(error, data) {
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

function log(str) {
	console.log(str);
};