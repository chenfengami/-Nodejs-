const http = require('http'),
      fs = require('fs');

//静态文件托管功能
http.createServer(function(req, res){
    if(req.method == 'GET' && '/images' == req.url.substr(0, 7) && '.jpg' == req.url.substr(-4)){
        //检查文件是否存在
        fs.stat(__dirname + req.url, function(err, stat){
            if(err || !stat.isFile()){
                res.writeHead(404);
                res.end('NOT FOUND');
                return;
            }
            console.log(__dirname + req.url);
            serve(__dirname + req.url, 'application/jpg');
        })
    }else if('GET' == req.method && '/' == req.url){
        serve(__dirname + "/index.html", 'text/html');
    }else{
        res.writeHead(404);
        res.end('NOT FOUND');
    }
    function serve(path, type){
        res.writeHead(200, { 'Content-Type': type });
        fs.createReadStream(path).pipe(res);
    }
}).listen(3000)


