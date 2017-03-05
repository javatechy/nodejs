var fs = require("fs");
console.log("Strarting");
fs.writeFileSync("temp/writeSync.txt", "Wrote a text file in Synchronous");
console.log("Finished");