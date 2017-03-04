var fs = require("fs");

var x =  fs.readFileSync("temp/sample.json");
// Console will print the message
var dataField=JSON.parse(x);
console.log('Data=FIELD=========>',dataField);
console.log('Data==========>'+JSON.stringify(dataField));
console.log('OP CODE==========>'+dataField.operationCode);
var x =  fs.readFileSync("writeIntoFileText");