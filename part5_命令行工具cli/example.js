//process.argv包含了所有node程序运行时的参数值：  要获取真正的元素，需要首先将数组的前两个元素去除掉
console.log(process.argv.slice(2));


//退出
console.log('An error occurred');
process.exit(1);

//进程和操作系统的通信
//杀死进程
process.on('SIGKILL', function(){
    // 信号已经收到
})