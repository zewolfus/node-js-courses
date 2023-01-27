let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.post('submit-student-data', function (req, res){
    let name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' submitted successfully');
});

let server = app.listen(5000, function () {
    console.log('node server is running..');
});