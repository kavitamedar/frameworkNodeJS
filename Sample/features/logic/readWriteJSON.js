var fs = require('fs');

var jsonData = require('./sample.json');

var newData = jsonData;
newData.note.heading = ['Medar'];

fs.writeFileSync(__dirname + '/sample.json',JSON.stringify(newData));
