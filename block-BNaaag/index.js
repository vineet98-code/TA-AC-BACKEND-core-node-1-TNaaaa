var {readFile, readFileSync} = require('fs');
// read file is synchronous 


// Async version of read file
readFile('./content.md', 'utf8', (err, content) => { // utf-8 return the actual content of the content.md file
    console.log(content);
    console.timeEnd('task2');
})

// sync version of read file
var result = readFileSync('./content.md', 'utf8');

console.log(result);


var buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1)
// console.log('excute me first');


// console.log('task1');
// setTimeout(() => {
//     console.log('excuted');
//     console.timeEnd('task1');

// }, 1000);


// console.time('task2');

// console.log('execute me last');