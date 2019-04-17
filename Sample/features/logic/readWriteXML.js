
var fs = require('fs');
var xml2js = require('xml2js');

//Read file and convert to json
var parser = xml2js.Parser();
var xmldata;
try {
    var result = fs.readFileSync(__dirname + '/sample.xml');
    parser.parseString(result, function (err, data) {
        xmldata = data;
    })
} catch (err) {
    console.log(err);
}

//MOdify JSON
xmldata.note.from = ['Kavita'];
console.log(xmldata);

//Export to XML and save
try {
    var builder = new xml2js.Builder();
    var newxml = builder.buildObject(xmldata);
    fs.writeFileSync(__dirname + '/sample.xml',newxml);
} catch (err) {
    console.log(err);
}