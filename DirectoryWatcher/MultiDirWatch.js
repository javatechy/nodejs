// Run mvn clean install on aggregator2 directory in case of any change
//  install chokidar  :  npm install chokidar --save

var fs = require("fs");
var sys = require('sys')
var chokidar = require('chokidar');
var exec = require('child_process').exec;
function puts(error, stdout, stderr) {
	sys.puts(stdout)
}

watchDir("D:\\GitWork\\aggregator2");
watchDir("D:\\GitWork\\Auto\\zauto");
watchDir("D:\\GitWork\\query-service");
watchDir("D:\\GitWork\\reporting");

function watchDir(loc) {
	var watcher = chokidar.watch(loc + "\\src", {
		ignored : /^\./,
		persistent : true
	});
	console.log("Strarting");
	watcher.on('add', function(path) {
		console.log('File', path, 'has been added');
	}).on('change', function(path) {
		console.log('File', path, 'has been changed');
		exec("cd " + loc + " & mvn clean install", puts);
	}).on('unlink', function(path) {
		console.log('File', path, 'has been removed');
	}).on('error', function(error) {
		console.error('Error happened', error);
	})
	console.log("Finished");
};

