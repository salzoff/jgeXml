'use strict';

var fs = require('fs');
var xsd = require('./xsd2json');

var filename = process.argv[2];
var valueProperty = false;

var rawXsdJson = fs.readFileSync(filename,'utf8');
var xsdObj = JSON.parse(rawXsdJson);
var laxUris = (filename.indexOf('.lax')>=0);
var json = xsd.getJsonSchema(xsdObj,filename,'',laxUris,'xs:');
console.log();
//console.log(JSON.stringify(json,null,2));
//console.log();
console.log('Same (should be false): ' + (xsdObj == json));

if (process.argv.length>3) {
    var outfile = process.argv[3];
    fs.writeFileSync(outfile,JSON.stringify(json,null,2),'utf8');
}
