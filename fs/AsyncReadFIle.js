var fs = require('fs');

var test = function(err, data) {
	if (err)
		return console.log("Error" + err);
	console.log("Program Ended" + data.toString());
};

fs.readFile('main_server.js', test());

console.log("Program Ended");