let express = require('express');
let app = express();

app.use(express.static(__dirname + 'public'));

let server = app.listen(5000);
