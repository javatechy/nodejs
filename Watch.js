var fs = require("fs");
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) {
	sys.puts(stdout)
}

var fileLoc = "temp/sample.json";
console.log("Strarting");
var config = JSON.parse(fs.readFileSync(fileLoc));

console.log("initial json : ", config);

fs.watchFile("temp/sample.json", function(current, previous) {

	console.log("Changes Detected");
	config = JSON.parse(fs.readFileSync(fileLoc));
	console.log("Updated");
	exec("dir", puts);

});
console.log("Finished");