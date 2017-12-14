# Express
    构建在connect之上，构建整个网站以及Web应用提供了更方便的API。
## 路由简洁
    const express = require('express');
    const app = express();
    app.use('',function(){}) //use()为之前熟悉的req.method == 'get'方法
## 使用ejs模板
    配置如下
    app.set('view engine', 'ejs')
    app.set('views', __dirname + '/views');
    app.set('view options', { layout: false })
    视图引擎格式
    视图目录
    视图选项
### render渲染视图
    app.render('index');
    render完成如下三件事：
    1、初始化模板引擎。
    2、读取设置目录下的视图传递给模板引擎。
    3、获取解析后的HTML页面并响应给客户端。
## 了解一些设置
    app.set('view cache', true); //视图缓存
    app.get('/my/route', function(req, res){}) //区分路由大小写
    ...