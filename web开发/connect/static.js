//static中间件

const connect = require('connect'),
        fs = require('fs');
        
const server = connect.createServer(function(req, res){
    // server.use('/my-images', connect.static('/website/images'));
    
    if('GET' == req.method && '/images' == req.url.substr(8, 7) && '.jpg' == req.url.substr(-4)){
        fs.stat(__dirname + req.url, function(err, stat){
            if(err || !stat.isFile()){
                res.writeHead(404);
                res.end('Not Found');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text-html' });
            fs.createReadStream(__dirname + req.url).pipe(res);
        })
        return;
    }else{
        //query查询字符串中间件
        
        let page;    
        server.use(connect.query(), function(req, res){
            page = req.query.page;
        });
        res.end('params page == ' + page);
        return;
    }
        res.writeHead(404);
        res.end('Not Found!');
});


server.listen(3000);

