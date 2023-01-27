//fs.writeFile(fileName, data[, options], callback) 
//(dosya olusturmak)

let fs = require('fs');

fs.writeFile('test.txt', 'hello world', function (err) {
    if (err)
        console.log(err);
    else
        console.log('write operation complete.');
});