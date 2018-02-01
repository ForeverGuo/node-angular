app.expostor_add = function($scope,$http,$window,$location){
    $scope.expostor_add = function(){
         name = $('#expostor_add_name').val();
         if(!$scope.checkIsUser(name)){return;}
         sex = $('#expostor_add_sex').val();
         tel = $('#expostor_add_tel').val();
         if(!$scope.checkIsPhone(tel)){return;}
         lange = $('#expostor_add_lange').val();
         nbrang = $('#expostor_add_nbrang').val();
         time = $('#expostor_add_time').val();
         email = $('#expostor_add_email').val();
         if(!$scope.checkIsEmail(email)){return;}
         img = $('#expostor_add_img img').attr('src');
         password = $('#expostor_add_password').val();
         if(!checkIsImage($scope,img)){return;}
         if(name && sex && tel && lange && nbrang && time && img && email && password){
            $http({
                 method: "POST",
                 url: "/expostor_add",
                 data:{
                        "expostor_add_name":name,
                        "expostor_add_sex":sex,
                        "expostor_add_tel":tel,
                        "expostor_add_lange":lange,
                        "expostor_add_nbrang":nbrang,
                        "expostor_add_time":time,
                        "expostor_add_img":img,
                        "expostor_add_email":email,
                        "expostor_add_password":password
                    }   
                }).
                success(function(data, status) {
                    //$scope.status = status;
                    console.log(data,status);
                    confirm("添加成功");
                    $location.url("/expostor");
                }).
                error(function(data, status) {
                    confirm("添加失败");
                }); 
       }else{
            confirm("请把数据填写完全");
       }
  }
  $scope.checkIsPhone = function(str){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
    if (!myreg.test(str)){
          $('#expostor_add_tel').val('');
          document.getElementById('expostor_add_tel').focus();
          $scope.tel_flag = true;
          return false;  
    } else {  
          $scope.tel_flag = false;
          return true;  
    }   
  
  }
    
  $scope.checkIsEmail = function(str){
        var reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/  
        if(!reg.test(str)){  
            $('#expostor_add_email').val('');
            document.getElementById('expostor_add_email').focus();
            $scope.email_flag = true; 
            return false;        

        }else{  
            $scope.email_flag = false;
            return true;  
 
       }   
  
  }
  $scope.checkIsUser = function(str){
       if(!str){
            $('#expostor_add_user').val('');
            document.getElementById('expostor_add_name').focus();
            $scope.user_flag = true; 
            return false;        
       }else{
            $scope.user_flag = false;
            return true;
       } 
  }

}
function checkIsImage($scope,str){
    if(!str){
        $scope.image_flag = true;
        return false;
    }else{  
        $scope.image_flag = false;
        return true;
    }
}


