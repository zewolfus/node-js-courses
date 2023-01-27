let express = require('express');

let app = express();

app.get('/', function (req, res){
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (req, res){
    res.send('post request');
});

app.put('/update-data', function (req, res){
    res.send('put request');
});

app.delete('/delete-data', function (req, res){
    res.send('delete request');
});

let server = app.listen(5000, function () {
    console.log('node server is running..');
});