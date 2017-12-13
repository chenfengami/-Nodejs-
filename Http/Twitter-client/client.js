const http = require('http');
const qs = require('querystring');

//http服务器
//服务器端处理表单
// http.createServer(function (req, res) {
//     let body = '';
//     req.on('data', function (chunk) {
//         body += chunk;
//     })
//     req.on('end', function () {
//         res.writeHead(200);
//         res.end('Done');
//         console.log('\n got name\033[90m' + qs.parse(body).name + '\033[39m\n');
//     })
// }).listen(3000);

//客户端发送
function send(theName){
    http.request({
        host: '127.0.0.1',
        port: 3000,
        url: '/',
        method: 'POST'
    }, function(res){
        res.on('end', function(){
            res.setEncoding('utf8');        
            console.log('\n     \033[90m request complete!\033[39m');
            process.stdout.write('\n    Your name: ');
        })
    }).end(qs.stringify({name: theName})); //end 完成后发送数据给服务端
}   

process.stdout.write('\n    Your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(name){
    send(name.replace('\n', ''));
})
