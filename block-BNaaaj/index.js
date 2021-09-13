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

// Fourth Question

var buff1 = Buffer.alloc(12);
var buff2 = Buffer.allocUnsafe(12);

buff1.write('hello');
console.log(buff1.toString());

// Sixth question

var {readFile, readFileSync, unlink} = require('fs');

var sync = readFileSync('./app.js');
// Asynchronous read file
var Async = readFile('./app.js', (err, content) => {
    console.log(err, content.toString());
});





