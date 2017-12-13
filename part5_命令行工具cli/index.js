const fs = require('fs');

//process.cwd() 当前执行node命令时候的文件夹地址
//__dirname 是被执行的js文件地址
fs.readdir(process.cwd(), function(err, files){
    console.log(files);
    if(!files.length){
        //\033[31m 和 \0333[39m 让文本呈现为红色
        return console.log('\033[31m no files to show!\033[39m\n');
    }
    console.log('Select which file or directory you want to see\n');

    function file(i){ //数组中的每个元素都会执行该函数  第一种异步流控制模式[串行执行]
        var filename = files[i]; //获取文件名

        fs.stat(__dirname + '/' + filename, function(err, stat){ 
                //fs.stat会给出文件或者目录的元数据：
            if(stat.isDirectory()){  //stat.isDirectory 如果路径所代表的是目录 就用\033[36m 颜色区分出来
                console.log(i + '   \033[36m' + filename + '/\033[39m');
            }else{  //不是目录 就用\0333[90m区分出来
                console.log(i + '   \033[90m' + filename + '\033[39m');
            }

            i++;
            if(i == files.length){
                console.log('');
                process.stdout.write('  \033[33mEnter your choice: \033[39m');
                process.stdin.resume(); //等待用户输入
                process.stdin.setEncoding('utf8');
            }else{ //如果有未处理的文件 则 递归调用函数来处理
                file(i);
            }
        })
    }
    file(0);
});
