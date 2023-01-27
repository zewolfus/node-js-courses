// dosya olusturmak

let fs = require('fs');

fs.appendFile('testiki.txt', 'hello bebek', function (err) {
    if(err)
        console.log(err);
    else
        console.log('append operation complate');
});