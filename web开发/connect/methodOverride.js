const connect = require('connect');

const server = connect(
    connect.methodOverride(),
    function(req, res, next){
        if('PUT' == req.method){
            res.writeHead(200);
            res.end(req);
        }else{
            res.end(req.method);
        }
    }
)

server.listen(3000);