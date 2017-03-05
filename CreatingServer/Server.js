var http = require("http");
log("Starting ");
var host = "127.0.0.1";
var port = 8081;
var server = http.createServer(function(request, response) {
	log("Request Recieved" + request.url);
	response.writeHead(200, {
		"Content-type" : "text/plain"
	});
	/*
	 * respone.write("Hello World"); response.end();
	 */response.end("Hello World");
});

server.listen(port, host, function() {
	log("Listening at" + port);
});

function log(str) {
	console.log(str);
};