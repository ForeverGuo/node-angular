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
const log4js = require('log_history/log');

//创建服务器
var server = express();
server.listen(8080);

//解析请求数据

/*server.use(bodyParser({
    extended:false
}));*/
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

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

//日志输出
/*log4js.LogFile().trace('This is a Log4js-Test');  
log4js.LogFile().debug('We Write Logs with log4js');  
log4js.LogFile().info('You can find logs-files in the log-dir');  
log4js.LogFile().warn('log-dir is a configuration-item in the log4js.json');  
log4js.LogFile().error('In This Test log-dir is : \'./logs/log_test/\'');  
*/

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

