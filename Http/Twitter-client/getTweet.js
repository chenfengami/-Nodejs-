const http = require('http');
const qs = require('querystring');

const search = process.argv.slice(2);

if(!search.length){
    return console.log('\n  Usage: node tweets <search term>\n');
}
console.log('\n  searching for: \033[96m' + search + '\033[39m\n');

//客户端发送
http.get({
    host: 'xtzy.xtclass.com',
    path: '/student/homework?' + qs.stringify({ courseId: search[0], access_token: search[1]})
},function(res){
    console.log(search);
    let body = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        body += chunk;
    })
    res.on('end', function(){
        // body.results.forEach(function(info){console.log(info);})
        console.log(body);
    });
});