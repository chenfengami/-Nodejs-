const net = require('net');
let count = 0,
    users = {};
const server = net.createServer(function (conn) {
    var nickname;
    console.log(nickname);
    conn.setEncoding('utf8');
    conn.write(
        '\n > welcome to \033[92mnode-chat\033[39m!' +
        '\n > ' + ++count + ' other people are connected at this time.' +
        '\n > please write your name and press enter: '
    );
    conn.on('data', function (data) { //接收客户端输入
        data = data.replace('\r\n', '');
        if (!nickname) { //第一次进来
            if (users[data]) { //当已经存在当前用户
                conn.write('\033[93m > ' + nickname + 'already in use. try again:\033[39m');
            } else {
                nickname = data;
                users[nickname] = conn;
                for (let i in users) {
                    //通知当前聊天室成员有新用户加入
                    users[i].write('\033[90m > ' + nickname + ' joined the room\033[39m\n');
                }
            }
        } else {
            for (let i in users) {
                if (i != nickname) { //当不是自己的名称的时候，即相当于聊天
                    users[i].write('\033[90m ' + nickname + '> ' + data + '\n');
                }
            }
        }
    });
    conn.on('close', function () {
        count--;
        delete users[nickname];
        console.log('\033[90m one user exit this time\033[39m');
    });
}).listen(3000);