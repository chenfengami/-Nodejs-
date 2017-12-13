const connect = require('connect');

const server = connect.createServer();

server.use(connect.cookieParser());

server.use(function(req, res, next){
    req.cookies.aa = '123';
})

server.listen(3000);