const net = require('net');
let count = 0;
const server = net.createServer(function(conn){
    console.log(
        '\n > welcome to \033[92mnode-chat\033[39m!' + 
        '\n > ' + count + 'other people are connected at this time.' + 
        '\n > please write your name and press enter: '
    );
    count++;
    conn.on('close', function(){
        count--;
        console.log('\033[90m one user exit this time\033[39m');
    })
});

server.listen(3000, function(){
    console.log('\033[96m   server listening on *:3000\033[39m');
})