const express = require('express');
const mysql = require('dbConnect/mysql');
const fs = require('fsImage/imageData');
const common = require('../../lib/common');
var router = express.Router();
router.post('/login',function(req,res){
   console.log(req.body.username);
   var username = req.body.username;
   var password = common.md5(req.body.password+common.MD5_SUFFIX);
        if(username && password){
            mysql.query('SELECT * FROM gl_user WHERE username="'+username+'"',function (err,userData) {
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
            sql = "UPDATE xi_config SET xt_name='"+xt_name+"',xt_range='"+xt_rang+"',xt_color='"+xt_color+"',xt_time='"+time+"'";
            mysql.query(sql,function(err,result){
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

router.post('/config/content',function(req,res){
       sql = "SELECT * FROM xi_config";
       mysql.query(sql,function(err,result){
           if(err){
                    console.log(err);
           }else{
                    res.send(JSON.stringify(result));
           }
        
	})

})



router.post('/user',function(req,res){
    sql = "SELECT * FROM gl_user";
    mysql.query(sql,function(err,userData){
       if(err){
            res.send({code:500,data:[],msg:'database error'});
        }else if(userData.length == 0){ 
            res.send({code:400,data:[],msg:'parameters error'});
        }else{
            res.send(JSON.stringify(userData));
        } 


    })

})

router.post('/user_modify_befor',function(req,res){
    var name = req.body.username;
    sql = "SELECT * FROM gl_user WHERE username ='"+name+"'";
    mysql.query(sql,function(err,userData){
       if(err){
            res.send({code:500,data:[],msg:'database error'});
        }else if(userData.length == 0){ 
            res.send({code:400,data:[],msg:'parameters error'});
        }else{
            res.send(JSON.stringify(userData));
        } 


    })

})

router.post('/user_modify',function(req,res){
    imgData = req.body.user_modify_img;
    name = req.body.user_modify_name;
    email = req.body.user_modify_email;
    time = new Date().toLocaleString();
    if(email && imgData){
        var text = fs.add(imgData);    
        sql = "UPDATE gl_user SET email='"+email+"',time='"+time+"',headImage='"+text+"' WHERE username ='"+name+"'";
            //sql_params = [password,email,time];
            mysql.query(sql,function(err,result){
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

router.post('/user_add',function(req,res){
     imgData = req.body.user_add_img;
     name = req.body.user_add_username;
     email = req.body.user_add_email;
     password = common.md5(req.body.user_add_password+common.MD5_SUFFIX);
     time = new Date().toLocaleString();
    if( name && password &&email){

            var text = fs.add(imgData);
            sql = "INSERT INTO gl_user(id,username,password,email,headImage,time)VALUES(?,?,?,?,?,?)";
            sql_params = [null,name,password,email,text,time];
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

router.post('/user_del',function(req,res){
    name = req.body.user_del_username;
    imageSrc = req.body.user_del_img;
    if(name && imageSrc){
            fs.del(imageSrc);
            sql = "DELETE FROM gl_user WHERE username='"+name+"'";
            mysql.query(sql,function(err,result){
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


router.post('/beginUser',function(req,res){
    var name = req.body.username;
    sql = "SELECT * FROM gl_user WHERE username = '"+name+"'";
    mysql.query(sql,function(err,userData){
       if(err){
            res.send({code:500,data:[],msg:'database error'});
        }else if(userData.length == 0){ 
            res.send({code:400,data:[],msg:'parameters error'});
        }else{
            res.send(JSON.stringify(userData));
        } 


    })

})


router.post('/expostor_add',function(req,res){
    imgData = req.body.expostor_add_img;
    name = req.body.expostor_add_name;
    sex = req.body.expostor_add_sex;
    tel = req.body.expostor_add_tel;
    lange = req.body.expostor_add_lange;
    nbrang = req.body.expostor_add_nbrang;
    wbrang = req.body.expostor_add_wbrang;
    server = req.body.expostor_add_server;
    time = req.body.expostor_add_time;
    if(name && sex && tel && lange && nbrang && wbrang && server && time){
        //过滤data:URL
        var  text = fs.add(imgData); 
        
        sql = "INSERT INTO expostor(id,e_name,e_sex,e_tel,e_language,en_range,ew_range,e_servers,e_time,e_photo)VALUES(?,?,?,?,?,?,?,?,?,?)";
        sql_params = [null,name,sex,tel,lange,nbrang,wbrang,server,time,text];
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

router.post('/expostor',function(req,res){
    sql = "SELECT * FROM expostor";
    mysql.query(sql,function(err,userData){
       if(err){
            res.status(500).send({code:500,data:[],msg:'database error'});
        }else if(userData.length == 0){ 
            res.status(400).send({code:400,data:[],msg:'parameters error'});
        }else{
            res.send(JSON.stringify(userData));
        } 


    })
})    

router.post('/expostor_modify_befor',function(req,res){
    name = req.body.username;
    sql = "SELECT * FROM expostor WHERE e_name = '"+name+"' ";
    mysql.query(sql,function(err,userData){
       if(err){
            res.status(500).send({code:500,data:[],msg:'database error'});
        }else if(userData.length == 0){ 
            res.status(400).send({code:400,data:[],msg:'parameters error'});
        }else{
            res.send(JSON.stringify(userData));
        } 


    })
})    

router.post('/expostor_modify',function(req,res){
    imgData = req.body.expostor_modify_img;
    name = req.body.expostor_modify_name;
    sex = req.body.expostor_modify_sex;
    tel = req.body.expostor_modify_tel;
    lange = req.body.expostor_modify_lange;
    nbrang = req.body.expostor_modify_nbrang;
    wbrang = req.body.expostor_modify_wbrang;
    server = req.body.expostor_modify_server;
    time = req.body.expostor_modify_time;
    if(tel && imgData && lange && nbrang && wbrang && server && time){
        var text = fs.add(imgData);    
        sql = "UPDATE expostor SET e_tel='"+tel+"',e_language='"+lange+"',en_range='"+nbrang+"',ew_range='"+wbrang+"',e_servers='"+server+"',e_time='"+time+"',e_photo='"+text+"' WHERE e_name='"+name+"'";
            //sql_params = [password,email,time];
            mysql.query(sql,function(err,result){
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


router.post('/expostor_del',function(req,res){
    name = req.body.expostor_del_username;
    imageSrc = req.body.expostor_del_img;
    if(name && imageSrc){
            fs.del(imageSrc);
            sql = "DELETE FROM expostor WHERE e_name='"+name+"'";
            mysql.query(sql,function(err,result){
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

