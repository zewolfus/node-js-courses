// fs.readFile(fileName [,option], callback) (olan dosyayı okuma ascI kodu ile)

let fs = require('fs');

fs.readFile('testFile.txt', function (err, data){
    if (err)
        throw err;

    console.log(data);
});

