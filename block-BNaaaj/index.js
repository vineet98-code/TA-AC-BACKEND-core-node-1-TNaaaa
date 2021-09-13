var {readFile} = require('fs');

readFile('./content.md', 'utf8', (err, content) => {
    console.log(content);
});

//  Second Question

var os = require('os');

var freeM = os.freemem();
var upTime = os.uptime();
var cpu = os.cpus().length;

console.log(freeM, upTime, cpu);

// Third Question


