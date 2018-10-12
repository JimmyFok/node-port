/**
 * 
 *  */

const Express = require('express');

// import Express from 'express'; 
const app = Express();

// 设置跨域访问
app.all('*', function(req, res, next){  // req请求，res结果， next下一步动作
    res.header("Access-Control-Allow-Origin","*");  // 成功控制允许的起点
    res.header("Access-Control-Allow-Headers","*");  // 允许访问X-Requested-With的外域URL(CORS是一个W3C标准，全称是”跨域资源共享”（Cross-origin resource sharing)）
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELET,OPTIONS"); // 访问允许的方法
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    // res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("X-Powered-By","3.2.1");  // 不知道对不对。x-prowered-by:含有模块modlayout/3.2.1 应该是1.3的apache 该模块的作用是能提供自动修改统一页头和页脚的指令
    res.header("Content-Type","application/json;charset=utf-8");
    // res.header("Content-Type","application/x-www-form-urlencoded;charset=utf-8")
    next();
});

const questions = [
    {
        data: 213,
        name: 444,
        age: 12
    },
    {
        data: 456,
        name: 678,
        age: 13
    },
]
 
// 写个questions接口
app.get('/questions',function(req,res){
    res.status(200),
    res.json(questions)
});

// 配置服务端口
const server = app.listen(3000,function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Example app listening at http://%s:%s",host ,port)
})

