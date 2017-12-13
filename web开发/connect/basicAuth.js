const connect = require('connect'),
        stdin = process.stdin,
        stdout = process.stdout;
const server = connect(
    function(req, res, next){
        if('GET' == req.method){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end([
                `
                    <form action="/url" method="POST">
                       <input name="user" type="text" />
                       <input name="psw" type="password" />
                       <button>submit</button>
                    </form>
                `
            ].join(''));
        }else if('POST' == req.method && req.url == '/url'){
            res.writeHead(200);
            stdin.resume();
            stdin.setEncoding('ascii');
            
        }
    }
)

server.listen(3000);