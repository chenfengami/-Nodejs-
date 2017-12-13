const connect = require('connect');
const server = connect(connect.static('static'),connect.bodyParser(),function(req, res, next){
    if('POST' == req.method){
        console.log(req.body);
        console.log(req.files);
    }else{
        next();
    }
})
// .use(connect.static('static'))
// .use(connect.bodyParser())

server.listen(3000);