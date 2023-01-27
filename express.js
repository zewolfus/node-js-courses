let express = require('express');
let app = express();

let server = app.listen(5000, function (){
    console.log('node server is running..');
});