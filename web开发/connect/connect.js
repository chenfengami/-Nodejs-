var connect = require('connect');

var server = connect.createServer();

//第一个中间件
server.use(function(req, res, next){
    if(req.method == 'GET' && '/images' == req.url.substr(0, 7)){
        //托管图片
    }else{
        //交给其他中间件去处理
        next();
    }
})


//第二个中间件
server.use(function(req, res, next){
    if(req.method == 'GET' && '/' == req.url){
        //响应index文件
    }else{
        //交给其他中间件去处理
        next();
    }
});

//最后一个中间件 处理404
server.use(function(req, res, next){
    res.writeHead(404);
    res.end('Not Found');
})
