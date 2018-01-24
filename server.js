/**
 * Created by gys on 18/1/17.
 */

const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const multerObj = multer({dest:'./static/upload'});
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const ejs = require('ejs');


//创建服务器
var server = express();
server.listen(8080);

//解析请求数据

server.use(bodyParser({
    extended:false
}));
server.use(multerObj.any());

//设置cookie，session
server.use(cookieParser('Neal_signed'));
(function () {
    var arr = [];
    for(var i = 0;i<10000;i++){
        arr.push('keys_'+Math.random());
    }
    server.use(cookieSession({
        name:'session_id',
        keys:arr,
        maxAge:300*60*1000 //设置用户过期时间
    }))
})();
var index = require('./router/admin/index');
server.use('/',index);
//设置模板
server.set('view engine','html');
server.set('views','./views');
server.engine('html',consolidate.ejs);
//设置路由
//server.use('/admin',require('./static/admin/index')());
//server.use('/',require('./static/web/index')());

//静态文件的请求
//server.use('/files',expressStatic('./static'));
server.use(express.static(path.join(__dirname, 'static')));

