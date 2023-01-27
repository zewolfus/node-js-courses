// fs.readFile(fileName [,option], callback) (olan dosyayı okuma)

let fs = require('fs');

let data = fs.readFileSync('testFileiki.txt', 'utf-8');
console.log(data);