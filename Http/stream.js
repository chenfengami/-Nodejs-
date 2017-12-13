const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'image/png' });
    const stream = fs.createReadStream('./image.png').pipe(res); //流的对接
    // stream.on('data', function(data){
    //     res.write(data);
    // });
    // stream.on('end', function(){
    //     res.end();
    // });
}).listen(3000);