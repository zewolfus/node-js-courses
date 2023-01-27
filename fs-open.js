// fs.open(path, flags[, mode], callback)

/*
r
r+
rs
rs+
w
wx
wx+
a
ax
a+
ax+

*/

let fs = require('fs');

fs.open('testFileOpen.txt', 'r', function (err, fd) {
    if(err){
        return console.error(err);
    }
    let buffr = new Buffer(1024);

    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes){
        if(err)
            throw err;
        if(bytes > 0){
            console.log(buffr.slice(0, bytes).toString());
        }
        fs.close(fd, function(err) {
            if (err)
                throw err;
        });
    });
});