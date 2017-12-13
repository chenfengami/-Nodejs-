const request = require('superagent');
const argv = process.argv.slice(2);
request.get('xtzy.xtclass.com/student/homework')
.send({ courseId: argv[0], access_token: argv[1]})
.end(function(res){
    console.log(JSON.stringify(res.body));
})