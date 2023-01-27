let express = require('express');
let app = express();

app.set("view engine", "jade")

app.get('/', function(req, res){
    res.render('sample');
});

let server = app.listen(4000, function (){
    console.log('node server is running..');
});