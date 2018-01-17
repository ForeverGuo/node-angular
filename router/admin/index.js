const express = require('express');
const mysql = require('dbConnect/mysql');
const common = require('../../lib/common');
var router = express.Router();
router.post('/login',function(req,res){
   console.log(req.body.username);
   var username = req.body.username;
   var password = common.md5(req.body.password+common.MD5_SUFFIX);
   console.log(password);
        if(username && password){
            mysql.query('SELECT * FROM gl_user WHERE username="'+username+'"',function (err,userData) {
        console.log(userData);
                if(err){
                    console.error(err);
                    res.status(500).send({code:500,data:[],msg:'database error'});
                }else if(userData.length == 0){ 
                    res.status(400).send({code:400,data:[],msg:'parameters error'});
                }else{
                    if(userData[0].password != password){
                        res.status(400).send({code:400,data:[],msg:'username or password error'});
                    }else{
                        req.session['user_id'] = userData[0].id;//注意这里是在req上面
                        req.session['user_name'] =userData[0].username;
                        res.status(200).send({code:200,data:[],msg:'success'});
                    }
                }
            })
        }else{
            res.status(400).send({code:400,data:[],msg:'parameters error'});
        }

})

router.post('/config',function(req,res){
    var xt_name = req.body.xt_name;
    var xt_rang = req.body.xt_rang;
    var xt_color = req.body.xt_color;
    var time = new Date().toLocaleString();
        if(xt_name && xt_rang && xt_color){
            sql = "INSERT INTO xi_config (xt_id,xt_name,xt_range,xt_color,xt_time)values(?,?,?,?,?)";
            sql_params = [null,xt_name,xt_rang,xt_color,time];
            mysql.zsg(sql,sql_params,function(err,result){
                if(err){
                    console.log(err);
                }else{
                    res.status(200).send({msg:"success"});
                }
            })

        }else{
            res.status(404).send({msg:"参数不正确"});
        }

})

module.exports = router; 

