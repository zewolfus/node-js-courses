// fs.unlink(path, callback); (dosya silme)


let fs = require('fs');

fs.unlink('silDos.txt', function () {
    console.log('file deleted successfully');
});