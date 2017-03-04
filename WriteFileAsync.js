var fs = require("fs");
console.log("Strarting");
fs.writeFile("temp/writeSync.txt","Wrote a text file in Synchronous",function(err){
	console.log("File Write completed");
});
console.log("Finished");