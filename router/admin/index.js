const express = require('express');
const mysql = require('dbConnect/mysql');
const fs = require('fsImage/imageData');
const common = require('../../lib/common');
var router = express.Router();
router.post('/login',function(req,res){
   var username = req.body.username;
   var password = common.md5(req.body.password+common.MD5_SUFFIX);
        if(username && password){
            mysql.query('SELECT * FROM user WHERE name="'+username+'" or email="'+username+'" or tel="'+username+'"',function (err,userData) {
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
                        res.status(200).send({code:200,data:userData,msg:'success'});
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
    sql = "SELECT * FROM user WHERE role = 1";
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
    sql = "SELECT * FROM user WHERE name = '"+name+"' or email='"+name+"' or tel='"+name+"'";
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

router.post('/userType',function(req,res){
    var role = req.body.type;
    sql = "SELECT * FROM role WHERE id='"+role+"'";

            mysql.query(sql,function(err,data){
                if(err){
                    res.send({code:500,data:[],msg:'database error'});
                }else{
                
                    res.send(JSON.stringify(data));
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
    time = req.body.expostor_add_time;
    email = req.body.expostor_add_email;
    video = req.body.expostor_add_video;

    console.log(video);


    if(req.body.expostor_add_password == ''){
        
        password = common.md5('123456'+common.MD5_SUFFIX);
    }else{
        
        password = common.md5(req.body.expostor_add_password+common.MD5_SUFFIX);
    }
    if(name && sex && tel && lange && nbrang  && time && email){
        //过滤data:URL
        text = fs.add(imgData);
        videoText = fs.addVideo(video);
        //console.log(text);        
        sql = "INSERT INTO user(id,name,sex,tel,password,email,language,video,nrange,wrange,server,photo,role,time)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        sql_params = [null,name,sex,tel,password,email,lange,videoText,nbrang,'0','0',text,'2',time];
        mysql.zsg(sql,sql_params,function(err,result){
            if(err){
                console.log('error'+err);
                fs.del(text);
            }else{
               res.status(200).send({msg:"success"});
            }
        
        })

   }else{
        console.log('error01');
        fs.del(text); 
        res.status(404).send({msg:"参数不正确"});
   }

})

router.post('/expostor',function(req,res){
    sql = "SELECT * FROM user WHERE role = 2";
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
    sql = "SELECT * FROM user WHERE id = '"+name+"' ";
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
    id = req.body.expostor_modify_id;
    imgData = req.body.expostor_modify_img;
    name = req.body.expostor_modify_name;
    sex = req.body.expostor_modify_sex;
    tel = req.body.expostor_modify_tel;
    email = req.body.expostor_modify_email;
    lange = req.body.expostor_modify_lange;
    nbrang = req.body.expostor_modify_nbrang;
    time = req.body.expostor_modify_time;
    video = req.body.expostor_modify_video;

    if(name && sex && tel && email  && lange && nbrang && imgData && time){
        var text = fs.add(imgData);    
        var videoText = fs.addVideo(video);

        if(req.body.expostor_modify_password == ''){
        
            sql = "UPDATE user SET name='"+name+"',email='"+email+"',sex='"+sex+"',tel='"+tel+"',language='"+lange+"',video='"+videoText+"',nrange='"+nbrang+"',time='"+time+"',photo='"+text+"' WHERE id='"+id+"'";
        }else{
            
            password = common.md5(req.body.expostor_modify_password+common.MD5_SUFFIX);
            sql = "UPDATE user SET name='"+name+"',email='"+email+"',sex='"+sex+"',tel='"+tel+"',password='"+password+"',language='"+lange+"',video='"+videoText+"',nrange='"+nbrang+"',time='"+time+"',photo='"+text+"' WHERE id='"+id+"'";
        }
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
    id = req.body.expostor_del_id;
    imageSrc = req.body.expostor_del_img;
    videoSrc = req.body.expostor_del_video;
    if(id && imageSrc){
            fs.del(imageSrc);
            fs.delVideo(videoSrc);
            sql = "DELETE FROM user WHERE id ='"+id+"'";
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

router.post('/rpassword',function(req,res){
    var old_pass = common.md5(req.body.old_pass+common.MD5_SUFFIX);
    var new_pass = common.md5(req.body.new_pass+common.MD5_SUFFIX);
    var name = req.body.name;
    if(old_pass && new_pass && name){
            sql = "UPDATE user SET password = '"+new_pass+"' WHERE name='"+name+"' or tel='"+name+"' or email='"+name+"' and password='"+old_pass+"'";
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
router.post('/vistor',function(req,res){
    sql = "SELECT * FROM vistor";
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
router.post('/time',function(req,res){
    sql = "SELECT * FROM time";
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




module.exports = router; 

