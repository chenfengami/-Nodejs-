const fs = require('fs'),
    stdout = process.stdout,
    stdin = process.stdin;
fs.readdir(process.cwd(), function (err, files) {
    if(!files.length){
        return stdout.write('\033[31m to files to show!\033[39m');
    }
    console.log('Select which file or directory you want to see\n');    
    global.stats = [];
    global.files = files;    
    function file(i) {
        var filename = files[i];
        fs.stat(__dirname + '/' + filename, function (err, stat) {
            global.stats[i] = stat;
            if (stat.isDirectory()) {
                console.log(i + '   \033[36m' + filename + '\033[39m');
            } else {
                console.log(i + '   \033[90m' + filename + '\033[39m');
            }
            if (++i == files.length) {
                read();
            } else {
                file(i)
            }
        })

    }
    file(0);
})

function read() {
    console.log('');
    stdout.write('  \033[33mEnter your choice: \033[39m');
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', option);
}
//用fs进行文件操作
function option(data){
    const num = Number(data);
    const filename = global.files[num];
    stdin.pause();
    if(global.stats[Number(data)].isDirectory()){
        fs.readdir(__dirname + '/' + filename, 'utf8', function(err, files){
            if(err) throw new Error;
            console.log('');
            console.log('   ('+ files.length +' files)');
            files.forEach(function(file){
                console.log('   -   ' + file);
            });
            console.log('');
        });
    }else{
        fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data){
            if(err) throw new Error;
            console.log('');
            console.log('\033[90m' + data.replace(/(.*)/g, '    $1') + '\033[39m');
        })
    }
}