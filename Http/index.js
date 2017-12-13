const http = require('http');
http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Hello Node');
}).listen(3000);