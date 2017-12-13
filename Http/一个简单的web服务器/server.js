const http = require('http');
const qs = require('querystring');
http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });        
    if('/' == req.url){
        res.end([
            `<form method="post" action="/url">
             <h1>My form</h1>
             <fieldset>
             <label>Personal information</label>
             <p>What is your name?</p>
             <input type="text" name="name">
             <p><button>Submit</button></p>
             </form>
            `
        ].join(''));
    }else if('/url' == req.url && 'POST' == req.method){
        let body = '';
        req.on('data', function(chunk){
            body += chunk;
        });
        console.log(body);
        req.on('end', function(){
            // name=xxx    qs.parse('name=xxx') =>  { "name": "xxx" }.name == "xxx"
            console.log(body);
            res.end(`<p>Your name is <b>${ qs.parse(body).name }</b></p><h3>${ req.headers['content-type'] }</h3>`);
        })
    }else{
        res.writeHead(404);
        res.write('Not Found');
    }

}).listen(3000)
//http服务器
//服务器端处理表单
// http.createServer(function(req, res){
//     let body = '';
//     req.on('data', function(chunk){
//         body += chunk;
//     })
//     req.on('end', function(){
//         res.writeHead(200);
//         res.end('done');
//         console.log('\n got name: \033[90m' + qs.parse(body).name + '\033[39m\n');
//     });
// }).listen(3000);