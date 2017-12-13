const fs = require('fs');

const stream = fs.createReadStream('./file.txt');

const files = fs.readdirSync(process.cwd());
files.forEach(function(file){
    //监听css
    if(/\.css/.test(file)){
        fs.watchFile(process.cwd() + '/' + file, function(){
            console.log('-' + file + 'changed!');
        })
    }
})