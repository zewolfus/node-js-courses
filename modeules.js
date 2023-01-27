// let modele = require('modeule_name');

let http = require('http');
let server = http.createServer(function(req, res){
    let user = {
    name: 'emin',
    surname: 'karimli',
    age: '22',
    city: 'bursa'
    }
    console.log(user);
});
server.listen(3000);

//node modeules dedikten sonra tarayıcıdan localhost:3000 taraması yaptıgınızda terminal de obje yazılmıs olacak