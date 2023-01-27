let http = require('http'); 

let server = http.createServer(function (req, res) {   
    if (req.url == '/') {
        
        
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
            
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');
});

server.listen(4100); 

console.log('Node.js web server at port 4100 is running..')