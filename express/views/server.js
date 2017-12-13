const express = require('express');
// const search = require('./search');
const app = express.createServer();

//调用该对象上的set方法上来修改默认的配置项。
//配置
app.set('view engine', 'ejs'); //视图引擎
app.set('views', __dirname); //视图目录
app.set('view options', { layout: false }); //视图选项

//路由
app.get('/index', function(req, res){
    res.render('index'); //渲染模板
});

app.get('/index/:username', function(req, res, next){
    res.end(req.params.username);
})

// app.get('/search', function(req, res, next){
//     search(req.query.q, function(err, tweets){
//         next(err);
//         return;
//         if(err) return next(err);

//         res.render('search', { results: tweets, search: req.query.q })
//     })
// })
app.listen(3000);