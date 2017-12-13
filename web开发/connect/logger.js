const connect = require('connect');

connect.createServer(connect.logger('type', function(req, res){
    return req.headers['content-type']
}), function(req, res){
    res.writeHead(200);
    res.end('Hello!');
}).listen(3000)