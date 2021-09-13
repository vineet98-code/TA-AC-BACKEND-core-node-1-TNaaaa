var fs = require('fs');

console.log('excute me first');


console.log('task1');
setTimeout(() => {
    console.log('excuted');
    console.timeEnd('task1');

}, 1000);


console.time('task2');
fs.readFile('./file.md', 'utf8', (err, content) => {
    console.log(content);
    console.timeEnd('task2');
})

console.log('execute me last');